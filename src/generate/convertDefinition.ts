import { TypeDefinition } from '@fmtk/cfnspec';
import createDebug from 'debug';
import { NameResolver } from './resolver';
import { convertObjectDef } from './convertObjectDef';
import { getDataTypeName } from './getDataTypeName';
import { convertName } from './convertName';
import { generateJsDoc } from './generateJsDoc';

const debug = createDebug(`cfntypes:convertDefinition`);

export function convertDefinition(
  name: string,
  def: TypeDefinition,
  resolve: NameResolver,
  resource?: string,
): string {
  debug(`${name} (resource ${resource})`);

  if (def.Properties) {
    return convertObjectDef(name, def, resolve, resource).output;
  }

  const target = getDataTypeName(def, resolve, resource);
  const typeName = convertName(name);
  debug(`${name} = ${typeName}`);

  let output = generateJsDoc(name, def);
  output += `export type ${typeName} = ${target};`;

  return output;
}
