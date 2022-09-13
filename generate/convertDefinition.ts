import { TypeDefinition } from '@awboost/cfnspec';
import createDebug from 'debug';
import { convertName } from './convertName.js';
import { convertObjectDef } from './convertObjectDef.js';
import { generateJsDoc } from './generateJsDoc.js';
import { getDataTypeName } from './getDataTypeName.js';
import { NameResolver } from './resolver.js';

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
