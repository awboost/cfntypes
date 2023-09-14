import { getLatestSpec } from "@awboost/cfnspec";
import createDebug from "debug";
import { mkdir, readFile, writeFile } from "fs/promises";
import path, { dirname, resolve } from "path";
import semver from "semver";
import ts from "typescript";
import { AstBuilder } from "./AstBuilder.js";

const debug = createDebug(`cfntypes:generate`);

await generate(process.argv[2], process.argv[3] !== "no-version");

export async function generate(
  outputFileName: string,
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
  const sourceFile = builder.build();

  const outputPath = resolve(outputFileName);
  const outputDir = dirname(outputPath);
  await mkdir(outputDir, { recursive: true });

  const output = ts.createPrinter().printFile(sourceFile);
  await writeFile(outputPath, output, "utf8");

  // increment the package version according to the new Resource Spec version
  const pkgPath = path.resolve(dirname(outputFileName), "../package.json");
  const pkg = JSON.parse(await readFile(pkgPath, "utf-8"));

  if (incrementPackageVersion) {
    pkg.version = incrementVersion(
      pkg.version,
      pkg.awsResourceSpecificationVersion,
      spec.ResourceSpecificationVersion,
    );
  }

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
    return semver.inc(pkgVersion, "prerelease") as string;
  }

  const maj = semver.major(pkgVersion);

  const diff =
    currentAwsVersion && semver.diff(currentAwsVersion, newAwsVersion);

  switch (diff) {
    case "major":
      if (maj === 0) {
        return semver.inc(pkgVersion, "minor") as string;
      } else {
        return semver.inc(pkgVersion, "major") as string;
      }

    case "minor":
      if (maj === 0) {
        return semver.inc(pkgVersion, "patch") as string;
      } else {
        return semver.inc(pkgVersion, "minor") as string;
      }

    default:
      return semver.inc(pkgVersion, "patch") as string;
  }
}
