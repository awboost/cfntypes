import { getLatestSpec } from '@awboost/cfnspec';
import createDebug from 'debug';
import { promises as fs } from 'fs';
import path, { dirname } from 'path';
import semver from 'semver';
import { fileURLToPath } from 'url';
import { convertTypes } from './convertTypes.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const debug = createDebug(`cfntypes:generate`);

generate().then(
  () => {
    process.exit(0);
  },
  (err) => {
    console.error(`fatal error`, err);
    process.exit(1);
  },
);

export async function generate(): Promise<void> {
  const spec = await getLatestSpec();

  const version = spec.ResourceSpecificationVersion;
  debug(`version ${version}`);

  const output =
    `export const ResourceSpecificationVersion = "${version}";\n\n` +
    convertTypes(spec);

  const outputPath = path.resolve(__dirname, '../lib/index.ts');
  const outputDir = path.dirname(outputPath);

  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(outputPath, output, 'utf8');

  const pkgPath = path.resolve(__dirname, '../package.json');
  const pkg = JSON.parse(await fs.readFile(pkgPath, 'utf-8'));

  pkg.version = incrementVersion(
    pkg.version,
    pkg.awsResourceSpecificationVersion,
    spec.ResourceSpecificationVersion,
  );
  pkg.awsResourceSpecificationVersion = spec.ResourceSpecificationVersion;
  await fs.writeFile(pkgPath, JSON.stringify(pkg, null, 2));
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
