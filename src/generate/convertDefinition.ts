import { TypeDefinition } from '@fmtk/cfnspec';
import { NameResolver } from './resolver';
import { convertObjectDef } from './convertObjectDef';
import { getDataTypeName } from './getDataTypeName';
import { convertName } from './convertName';
import { generateJsDoc } from './generateJsDoc';
import { debug } from './debug';

export function convertDefinition(
  name: string,
  def: TypeDefinition,
  resolve: NameResolver,
  resource?: string,
): string {
  debug(`convertDefinition ${name} (resource ${resource})`);

  if (def.Properties) {
    return convertObjectDef(name, def, resolve, resource);
  }

  const target = getDataTypeName(def, resolve, resource);
  const typeName = convertName(name);
  debug(`convertDefinition ${name} = ${typeName}`);

  return [
    generateJsDoc(name, def),
    `export type ${typeName} = ${target};`,
  ].join('\n');
}
