import { spawnSync } from "child_process";
import { readFile, writeFile } from "fs/promises";
import * as glob from "glob";
import { dirname, join, relative, resolve } from "path";
import Prettier from "prettier";
import { fileURLToPath } from "url";

const WORKSPACE_ROOT = dirname(fileURLToPath(import.meta.url));
const PACKAGE_JSON = "package.json";
const TS_CONFIG = "tsconfig.json";

const prettierConfig = await Prettier.resolveConfig(
  join(WORKSPACE_ROOT, TS_CONFIG),
);

const rootPkg = JSON.parse(
  await readFile(join(WORKSPACE_ROOT, PACKAGE_JSON), "utf-8"),
);

if (
  !rootPkg.workspaces ||
  !Array.isArray(rootPkg.workspaces) ||
  !rootPkg.workspaces.length
) {
  console.error(`ERROR: no workspaces defined`);
  process.exit(1);
}

const packages = rootPkg.workspaces.flatMap((x) =>
  glob.sync(x, { onlyDirectories: true }).map((p) => resolve(p)),
);

if (!packages.length) {
  console.error(
    `ERROR: no packages found in workspaces [${rootPkg.workspaces}]`,
  );
  process.exit(1);
}

const refs = {};

for (const pkg of packages) {
  const packageJsonPath = join(pkg, PACKAGE_JSON);
  let packageJson;

  try {
    packageJson = JSON.parse(await readFile(packageJsonPath, "utf8"));
  } catch (err) {
    console.warn(`WARN: skipping ${relative(WORKSPACE_ROOT, pkg)}: %o`, err);
    continue;
  }

  const deps = [];
  if (packageJson.dependencies) {
    deps.push(...Object.keys(packageJson.dependencies));
  }
  if (packageJson.devDependencies) {
    deps.push(...Object.keys(packageJson.devDependencies));
  }

  let tsConfig;

  const packageTsConfigPath = join(pkg, TS_CONFIG);
  try {
    tsConfig = JSON.parse(await readFile(packageTsConfigPath));
    if (!tsConfig.compilerOptions?.composite) {
      console.warn(
        `skipping ${packageJson.name} because composite is not turned on`,
      );
      continue;
    }
  } catch {
    continue;
  }

  refs[packageJson.name] = {
    name: packageJson.name,
    path: pkg,
    deps,
    tsConfig,
  };
}

for (const pkg of Object.values(refs)) {
  await addRefsToTsConfig(
    join(pkg.path, TS_CONFIG),
    pkg.deps.filter((x) => x in refs).map((x) => refs[x].path),
    pkg.tsConfig,
  );
}

const rootTsConfigPath = join(WORKSPACE_ROOT, TS_CONFIG);
await addRefsToTsConfig(
  rootTsConfigPath,
  Object.values(refs).map((x) => x.path),
);

const result = spawnSync(
  join(WORKSPACE_ROOT, "node_modules/.bin/tsc"),
  ["-b", rootTsConfigPath, ...process.argv.slice(2)],
  {
    stdio: "inherit",
    shell: process.platform === "win32",
  },
);

process.exit(result.status);

async function addRefsToTsConfig(configPath, references, contents) {
  const dir = dirname(resolve(configPath));
  if (!contents) {
    contents = JSON.parse(await readFile(configPath, "utf-8"));
  }
  const output = JSON.stringify(
    {
      ...contents,
      references: references.map((x) => ({
        path: relative(dir, x).replace(/\\/g, "/"),
      })),
    },
    null,
    2,
  );
  await writeFile(
    configPath,
    Prettier.format(output, {
      filepath: configPath,
      ...prettierConfig,
    }),
  );
}
