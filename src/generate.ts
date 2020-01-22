import { promises as fs } from 'fs';
import path from 'path';
import { getLatestSpec } from '@fmtk/cfnspec';
import { normaliseSpec } from './types/normaliseSpec';
import { TypeDefinition, ComplexTypeDefinition } from './types/TypeDefinition';
import { convertName } from './convertName';
import { TypeKind } from './types/TypeKind';
import { SimpleTypeCommonDefinition } from './types/normaliseSimpleType';
import { TypeSource } from './types/TypeSource';
import { getNamesace } from './types/getNamespace';

generate(process.argv[2]).then(
  () => {
    process.exit(0);
  },
  err => {
    console.error(`fatal error`, err);
    process.exit(1);
  },
);

export async function generate(outputFileName: string): Promise<void> {
  const spec = await getLatestSpec();
  const norm = normaliseSpec(spec);
  const output = convertTypes(norm);

  const outputPath = path.resolve(outputFileName);
  const outputDir = path.dirname(outputPath);
  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(outputPath, output, 'utf8');
}

function convertTypes(specs: TypeDefinition[]): string {
  return [
    specs.map(convertDefinition).join('\n\n'),
    makeResourceTypeMap(specs),
    makeAttribtueTypeMap(specs),
  ].join('\n\n');
}

function makeResourceTypeMap(specs: TypeDefinition[]): string {
  return [
    `export interface ResourceTypes {`,
    ...specs
      .filter(x => x.source === TypeSource.ResourceType)
      .map(x => `  "${x.name}": ${convertName(x.name)};`),
    `}`,
    ``,
    `export type ResourceType = keyof ResourceTypes;`,
  ].join('\n');
}

function makeAttribtueTypeMap(specs: TypeDefinition[]): string {
  return [
    `export interface AttributeTypes {`,
    ...specs
      .filter(x => x.source === TypeSource.AttributeType)
      .map(x => `  "${getNamesace(x.name)}": ${convertName(x.name)};`),
    `}`,
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
