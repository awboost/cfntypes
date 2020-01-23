import { promises as fs } from 'fs';
import path from 'path';
import { getLatestSpec } from '@fmtk/cfnspec';
import { normaliseSpec } from './types/normaliseSpec';
import { TypeDefinition, ComplexTypeDefinition } from './types/TypeDefinition';
import { convertName } from './convertName';
import { TypeKind } from './types/TypeKind';
import { SimpleTypeCommonDefinition } from './types/normaliseSimpleType';
import { TypeSource } from './types/TypeSource';
import { getNamespace } from './types/getNamespace';

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
  const norm = normaliseSpec(spec);

  const version = spec.ResourceSpecificationVersion;

  const output =
    `export const ResourceSpecificationVersion = "${version}";\n\n` +
    convertTypes(norm);

  const outputPath = path.resolve(__dirname, 'index.generated.ts');
  const outputDir = path.dirname(outputPath);

  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(outputPath, output, 'utf8');

  const pkgPath = path.resolve(__dirname, '../package.json');
  const pkg = JSON.parse(await fs.readFile(pkgPath, 'utf-8'));
  pkg.awsResourceSpecificationVersion = spec.ResourceSpecificationVersion;
  await fs.writeFile(pkgPath, JSON.stringify(pkg, null, 2));
}

function convertTypes(specs: TypeDefinition[]): string {
  return [
    specs.map(convertDefinition).join('\n\n'),
    makeResourceTypeMap(specs),
    makeAttributeTypeMap(specs),
  ].join('\n\n');
}

function makeResourceTypeMap(specs: TypeDefinition[]): string {
  const resources = specs.filter(x => x.source === TypeSource.ResourceType);

  return [
    `export enum ResourceType {`,
    ...resources.map(x => `  ${convertName(x.name)} = "${x.name}",`),
    `}`,
    ``,
    `export interface ResourceTypes {`,
    ...resources.map(
      x => `  [ResourceType.${convertName(x.name)}]: ${convertName(x.name)};`,
    ),
    `}`,
  ].join('\n');
}

function makeAttributeTypeMap(specs: TypeDefinition[]): string {
  return [
    `export interface AttributeTypes {`,
    ...specs
      .filter(x => x.source === TypeSource.AttributeType)
      .map(
        x =>
          `  [ResourceType.${convertName(getNamespace(x.name))}]: ` +
          convertName(x.name) +
          `;`,
      ),
    `}`,
    ``,
    `export type AttributeTypeFor<T extends ResourceType> = T extends keyof AttributeTypes ? AttributeTypes[T] : never;`,
  ].join('\n');
}

function convertDefinition(def: TypeDefinition): string {
  if (def.typeKind === 'object') {
    return convertComplexDef(def);
  }
  return [
    generateJsDoc(def),
    `export type ${convertName(def.name)} = ${getSimpleTypeName(def)};`,
  ].join('\n');
}

function convertComplexDef(def: ComplexTypeDefinition): string {
  return [
    generateJsDoc(def),
    `export interface ${convertName(def.name)} {`,
    ...def.properties.map(
      x => `  ${x.name}${x.optional ? '?' : ''}: ${getSimpleTypeName(x)};`,
    ),
    `}`,
  ].join('\n');
}

function generateJsDoc(def: TypeDefinition): string {
  return [
    `/**`,
    ` * Type definition for ${def.name}.`,
    def.documentation && ` * @see ${def.documentation}`,
    ` */`,
  ]
    .filter(Boolean)
    .join('\n');
}

function getSimpleTypeName(def: SimpleTypeCommonDefinition): string {
  const typeName = def.typePrimitive ? def.typeName : convertName(def.typeName);

  switch (def.typeKind) {
    case TypeKind.Scalar:
      return typeName;
    case TypeKind.List:
      return `${typeName}[]`;
    case TypeKind.Map:
      return `{ [key: string]: ${typeName} }`;

    default:
      throw new Error(`unknown type kind`);
  }
}
