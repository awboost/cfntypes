import { getLatestSpec } from '@awboost/cfnspec';
import createDebug from 'debug';
import { mkdir, readFile, writeFile } from 'fs/promises';
import path, { dirname, join, resolve } from 'path';
import semver from 'semver';
import ts from 'typescript';
import { fileURLToPath } from 'url';
import { AstBuilder } from './AstBuilder.js';
import { compileSourceFile } from './util/compileSourceFile.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const debug = createDebug(`cfntypes:generate`);

await generate();

export async function generate(): Promise<void> {
  const spec = await getLatestSpec();

  const version = spec.ResourceSpecificationVersion;
  debug(`version ${version}`);

  // generate AST
  const builder = new AstBuilder(spec);
  const sourceFile = builder.build();

  // compile AST
  const outputESM = compileSourceFile(sourceFile, {
    compilerOptions: {
      declaration: true,
      module: ts.ModuleKind.ES2020,
      target: ts.ScriptTarget.ES2020,
    },
  });
  const outputCJS = compileSourceFile(sourceFile, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  });

  const outputDir = resolve(__dirname, '../lib');
  await mkdir(outputDir, { recursive: true });

  if (!outputESM.definitions) {
    throw new Error(`failed to generate definitions file`);
  }

  // write output files
  await writeFile(join(outputDir, 'index.js'), outputESM.output, 'utf8');
  await writeFile(join(outputDir, 'index-cjs.js'), outputCJS.output, 'utf8');
  await writeFile(join(outputDir, 'index.d.ts'), outputESM.definitions, 'utf8');

  // increment the package version according to the new Resource Spec version
  const pkgPath = path.resolve(__dirname, '../package.json');
  const pkg = JSON.parse(await readFile(pkgPath, 'utf-8'));

  pkg.version = incrementVersion(
    pkg.version,
    pkg.awsResourceSpecificationVersion,
    spec.ResourceSpecificationVersion,
  );

  // save the Resource Spec version in the package.json
  pkg.awsResourceSpecificationVersion = spec.ResourceSpecificationVersion;
  await writeFile(pkgPath, JSON.stringify(pkg, null, 2));
}

function incrementVersion(
  pkgVersion: string,
  currentAwsVersion: string | undefined,
  newAwsVersion: string,
): string {
  const pre = semver.prerelease(pkgVersion);
  if (pre) {
    return semver.inc(pkgVersion, 'prerelease') as string;
  }

  const maj = semver.major(pkgVersion);

  const diff =
    currentAwsVersion && semver.diff(currentAwsVersion, newAwsVersion);

  switch (diff) {
    case 'major':
      if (maj === 0) {
        return semver.inc(pkgVersion, 'minor') as string;
      } else {
        return semver.inc(pkgVersion, 'major') as string;
      }

    case 'minor':
      if (maj === 0) {
        return semver.inc(pkgVersion, 'patch') as string;
      } else {
        return semver.inc(pkgVersion, 'minor') as string;
      }

    default:
      return semver.inc(pkgVersion, 'patch') as string;
  }
}
