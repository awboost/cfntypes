import { getLatestSpec } from "@awboost/cfnspec";
import createDebug from "debug";
import { appendFile, mkdir, readFile, writeFile } from "fs/promises";
import { join, resolve } from "path";
import { format } from "prettier";
import semver from "semver";
import ts from "typescript";
import { AstBuilder } from "./AstBuilder.js";

const debug = createDebug(`cfntypes:generate`);

await main(process.argv[2], process.argv[3] !== "no-version");

export async function main(
  outputDir: string,
  incrementPackageVersion: boolean,
): Promise<void> {
  const spec = await getLatestSpec();

  // save the spec file so that changes can be tracked
  await writeFile(
    "CloudFormationResourceSpecification.json",
    JSON.stringify(spec, null, 2),
  );

  const version = spec.ResourceSpecificationVersion;
  debug(`version ${version}`);

  // generate AST
  const builder = new AstBuilder(spec);
  const sourceFiles = builder.build();

  await mkdir(outputDir, { recursive: true });
  const printer = ts.createPrinter();

  for (const [namespace, sourceFile] of Object.entries(sourceFiles)) {
    const outputPath = join(outputDir, namespace.replace(/::/i, "-") + ".ts");
    const output = await format(printer.printFile(sourceFile), {
      filepath: outputPath,
    });
    await writeFile(outputPath, output, "utf8");
  }

  // increment the package version according to the new Resource Spec version
  const pkgPath = resolve(outputDir, "../../package.json");
  const pkg = JSON.parse(await readFile(pkgPath, "utf-8"));

  if (incrementPackageVersion) {
    pkg.version = incrementVersion(pkg.version);
  }

  console.log(`v${pkg.version}`);

  if (process.env.GITHUB_ENV) {
    await appendFile(
      process.env.GITHUB_ENV,
      `cfntypes_package_version=${pkg.version}\n`,
    );
  }

  // save the Resource Spec version in the package.json
  pkg.awsResourceSpecificationVersion = spec.ResourceSpecificationVersion;
  await writeFile(pkgPath, JSON.stringify(pkg, null, 2));
}

function incrementVersion(pkgVersion: string): string {
  const pre = semver.prerelease(pkgVersion);
  if (pre) {
    return semver.inc(pkgVersion, "prerelease") as string;
  }

  const maj = semver.major(pkgVersion);

  if (maj === 0) {
    return semver.inc(pkgVersion, "patch") as string;
  } else {
    return semver.inc(pkgVersion, "minor") as string;
  }
}
