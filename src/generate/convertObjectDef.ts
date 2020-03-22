import { TypeDefinition } from '@fmtk/cfnspec';
import { NameResolver } from './resolver';
import { convertName } from './convertName';
import { generateJsDoc } from './generateJsDoc';
import { getDataTypeName } from './getDataTypeName';
import { quoteName } from './quoteName';
import { debug } from './debug';

export function convertObjectDef(
  name: string,
  def: TypeDefinition,
  resolve: NameResolver,
  resource?: string,
): string {
  debug(`convertObjectDef ${name} (resource ${resource})`);

  if (!def.Properties) {
    throw new Error(`expected type to have properties`);
  }

  const suffix = name === resource ? 'Props' : '';
  const typeName = convertName(name) + suffix;
  debug(`convertObjectDef ${name} = ${typeName}`);

  return [
    generateJsDoc(name, def),
    `export interface ${typeName} {`,
    ...Object.entries(def.Properties).map(([name, def]) =>
      convertPropertyDef(name, def, resolve, resource),
    ),
    `}`,
  ].join('\n');
}

function convertPropertyDef(
  name: string,
  def: TypeDefinition,
  resolve: NameResolver,
  resource?: string,
): string {
  debug(`convertPropertyDef ${name} (resource ${resource})`);

  const flag = def.Required === false ? '?' : '';
  const type = getDataTypeName(def, resolve, resource);
  return `  ${quoteName(name)}${flag}: ${type};`;
}
