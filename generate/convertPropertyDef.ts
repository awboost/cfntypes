import { TypeDefinition } from '@cfnboost/spec';
import createDebug from 'debug';
import { getDataTypeName } from './getDataTypeName.js';
import { quoteName } from './quoteName.js';
import { NameResolver } from './resolver.js';

const debug = createDebug(`cfntypes:convertPropertyDef`);

export function convertPropertyDef(
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
