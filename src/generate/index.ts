import { promises as fs } from 'fs';
import path from 'path';
import semver from 'semver';
import { getLatestSpec } from '@fmtk/cfnspec';
import { convertTypes } from './convertTypes';
import { debug } from './debug';

generate().then(
  () => {
    process.exit(0);
  },
  err => {
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

  const outputPath = path.resolve(__dirname, '../interfaces.generated.ts');
  const outputDir = path.dirname(outputPath);

  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(outputPath, output, 'utf8');

  const pkgPath = path.resolve(__dirname, '../../package.json');
  const pkg = JSON.parse(await fs.readFile(pkgPath, 'utf-8'));

  if (pkg.awsResourceSpecificationVersion) {
    const maj = semver.major(pkg.version);

    const diff = semver.diff(
      pkg.awsResourceSpecificationVersion,
      spec.ResourceSpecificationVersion,
    );
    switch (diff) {
      case 'major':
        if (maj === 0) {
          pkg.version = semver.inc(pkg.version, 'minor');
        } else {
          pkg.version = semver.inc(pkg.version, 'major');
        }
        break;

      case 'minor':
        if (maj === 0) {
          pkg.version = semver.inc(pkg.version, 'patch');
        } else {
          pkg.version = semver.inc(pkg.version, 'minor');
        }
        break;

      default:
        pkg.version = semver.inc(pkg.version, 'patch');
        break;
    }
  }

  pkg.awsResourceSpecificationVersion = spec.ResourceSpecificationVersion;
  await fs.writeFile(pkgPath, JSON.stringify(pkg, null, 2));
}
