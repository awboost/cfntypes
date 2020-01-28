import { promises as fs } from 'fs';
import path from 'path';
import {
  getLatestSpec,
  normaliseSpec,
  TypeDefinition,
  TypeSource,
  TypeDefinitionKind,
  ObjectTypeDefinition,
  PropertyDefinition,
  DataTypeRef,
  DataType,
  DataTypeKind,
  StringMap,
} from '@fmtk/cfnspec';
import { convertName } from './convertName';
import { primitive } from './primitive';

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

  const outputPath = path.resolve(__dirname, 'interfaces.generated.ts');
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
    makeAttributeFieldList(specs),
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
      x =>
        `  [ResourceType.${convertName(x.name)}]: ${convertName(x.name)}Props;`,
    ),
    `}`,
  ].join('\n');
}

function makeAttributeTypeMap(specs: TypeDefinition[]): string {
  return [
    `export interface AttributeTypes {`,
    ...specs
      .filter(x => x.source === TypeSource.AttributeType)
      .map(x => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const resource = convertName(x.namespace!);
        return `  [ResourceType.${resource}]: ${resource}Attributes`;
      }),
    `}`,
    ``,
    `export type AttributeTypeFor<T extends ResourceType> = T extends keyof AttributeTypes ? AttributeTypes[T] : never;`,
  ].join('\n');
}

function makeAttributeFieldList(specs: TypeDefinition[]): string {
  const attributeFields = specs
    .filter(x => x.source === TypeSource.AttributeType)
    .reduce(
      (a, x) => ({
        ...a,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        [x.namespace!]: (x as ObjectTypeDefinition).properties.map(
          p => `"${p.name}"`,
        ),
      }),
      {} as StringMap<string[]>,
    );

  return [
    `export type AttributesFor<T extends ResourceType> = T extends keyof AttributeTypes ? keyof AttributeTypes[T] : never;`,
    ``,
    `export type ResourceAttributeMap = {`,
    `  [K in ResourceType]: (AttributesFor<K>)[]`,
    `};`,
    ``,
    `export const ResourceAttributes: ResourceAttributeMap = {`,
    ...specs
      .filter(x => x.source === TypeSource.ResourceType)
      .map(x => {
        const fields = attributeFields[x.name] || [];
        const resource = convertName(x.name);
        return `  [ResourceType.${resource}]: [${fields.join(', ')}],`;
      }),
    `}`,
  ].join('\n');
}

function convertDefinition(def: TypeDefinition): string {
  if (def.kind === TypeDefinitionKind.Object) {
    return convertObjectDef(def);
  }

  const name = convertName(def.name, def.namespace);
  let target: string;

  if (def.kind === TypeDefinitionKind.Empty) {
    target = 'any';
  } else {
    target = getDataTypeName(def.type);
  }
  return [generateJsDoc(def), `export type ${name} = ${target};`].join('\n');
}

function convertObjectDef(def: ObjectTypeDefinition): string {
  const name = convertName(def.name, def.namespace);
  const suffix = def.source === TypeSource.ResourceType ? 'Props' : '';

  return [
    generateJsDoc(def),
    `export interface ${name}${suffix} {`,
    ...def.properties.map(convertPropertyDef),
    `}`,
  ].join('\n');
}

function convertPropertyDef(def: PropertyDefinition): string {
  const flag = def.required === false ? '?' : '';
  const type = getDataTypeName(def.type);
  return `  ${quoteName(def.name)}${flag}: ${type};`;
}

function generateJsDoc(def: TypeDefinition): string {
  const name =
    def.source === TypeSource.AttributeType
      ? def.namespace + ' Attributes'
      : def.namespace
      ? `${def.namespace}.${def.name}`
      : def.name;
  return [
    `/**`,
    ` * Type definition for ${name}.`,
    def.documentation && ` * @see ${def.documentation}`,
    ` */`,
  ]
    .filter(Boolean)
    .join('\n');
}

function getTypeRefName(def: DataTypeRef): string {
  if (def.isPrimitive) {
    return primitive(def.name);
  }
  return convertName(def.name, def.namespace);
}

function getDataTypeName(def: DataType): string {
  const type = getTypeRefName(def.type);

  switch (def.kind) {
    case DataTypeKind.List:
      return type + '[]';
    case DataTypeKind.Map:
      return `{ [name: string]: ${type}; }`;
    default:
      return type;
  }
}

function quoteName(name: string): string {
  if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(name)) {
    return `"${name}"`;
  }
  return name;
}
