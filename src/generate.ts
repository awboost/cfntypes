import { promises as fs } from 'fs';
import path from 'path';
import { getLatestSpec } from '@fmtk/cfnspec';
import { convertTypes } from './generate/convertTypes';
import { debug } from './generate/debug';

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

  const outputPath = path.resolve(__dirname, 'interfaces.generated.ts');
  const outputDir = path.dirname(outputPath);

  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(outputPath, output, 'utf8');

  const pkgPath = path.resolve(__dirname, '../package.json');
  const pkg = JSON.parse(await fs.readFile(pkgPath, 'utf-8'));
  pkg.awsResourceSpecificationVersion = spec.ResourceSpecificationVersion;
  await fs.writeFile(pkgPath, JSON.stringify(pkg, null, 2));
}
