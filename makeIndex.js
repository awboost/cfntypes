import { existsSync, readdirSync, readFileSync, writeFileSync } from 'fs';
import ignore from 'ignore';
import minimist from 'minimist';
import { basename, extname, join, relative } from 'path';
import { fileURLToPath } from 'url';

const MODULE_ENDING_SPECIFIER = '.js';
const OUTPUT_FILE_NAME = 'index.ts';
const QUOTE_CHAR = `'`;

const opts = minimist(process.argv.slice(2));
const dirs = opts._.length ? opts._ : [process.cwd()];
const depth = opts.depth && parseInt(opts.depth, 10);

const defaultIgnore = ignore().add([
  'internal/',
  '*.internal.*',
  '*.test.ts',
  '*.d.ts',
  '__test__/',
]);

dirs.forEach((x) => makeIndex(x, depth, opts.comment));

function makeIndex(dir, maxDepth, comment) {
  const files = collectFiles(dir, { maxDepth })
    .map((x) => relative(dir, x).replace('\\', '/'))
    .filter((x) => x !== getImportPath('./', 'index'))
    .sort(sortPath);

  if (!comment) {
    comment = `node ${relative(dir, fileURLToPath(import.meta.url))}`;
  }

  const index = [`// AUTO-GENERATED ${comment}`].concat(
    files.map((x) => `export * from ${QUOTE_CHAR}./${x}${QUOTE_CHAR};`),
  );

  const output = index.join('\n') + '\n';
  const outputFile = join(dir, OUTPUT_FILE_NAME);

  if (opts.ci) {
    if (readFileSync(outputFile, 'utf8') !== output) {
      console.log(`ERROR: ${outputFile} would change`);
      process.exit(1);
    }
  } else {
    writeFileSync(outputFile, output);
  }
}

function collectFiles(
  dir,
  {
    currentDepth = 0,
    ignoreFiles = defaultIgnore,
    maxDepth = 5,
    rootDir = dir,
  },
) {
  const ignorePath = join(dir, '.indexignore');
  if (existsSync(ignorePath)) {
    ignoreFiles = ignore()
      .add(ignoreFiles)
      .add(readFileSync(ignorePath, 'utf8'));
  }
  let files = readdirSync(dir, { withFileTypes: true });
  const matches = [];

  if (currentDepth > 0 && files.find((x) => x.name === 'index.ts')) {
    return [dir];
  }

  for (const file of files) {
    const relPath = getIgnorePath(dir, file, rootDir);
    if (ignoreFiles && ignoreFiles.ignores(relPath)) {
      continue;
    }
    if (file.isDirectory() && currentDepth <= maxDepth) {
      matches.push(
        ...collectFiles(join(dir, file.name), {
          currentDepth: currentDepth + 1,
          ignoreFiles,
          maxDepth,
          rootDir,
        }),
      );
    } else if (shouldIndexFile(file.name)) {
      matches.push(getImportPath(dir, file.name));
    }
  }

  return matches;
}

function getImportPath(basePath, path) {
  return join(
    basePath,
    basename(path, extname(path)) + MODULE_ENDING_SPECIFIER,
  );
}

function shouldIndexFile(name) {
  return /\.tsx?$/.test(name);
}

function getIgnorePath(dir, file, rootDir) {
  let filePath = relative(rootDir, join(dir, file.name));
  if (file.isDirectory()) {
    filePath += '/';
  }
  return filePath;
}

function sortPath(a, b) {
  return a.toLowerCase().localeCompare(b.toLowerCase());
}
