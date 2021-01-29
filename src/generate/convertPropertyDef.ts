import { TypeDefinition } from '@fmtk/cfnspec';
import createDebug from 'debug';
import { NameResolver } from './resolver';
import { getDataTypeName } from './getDataTypeName';
import { quoteName } from './quoteName';

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
