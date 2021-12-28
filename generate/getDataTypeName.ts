import { TypeDefinition } from '@cfnboost/spec';
import createDebug from 'debug';
import { getTypeRefName } from './getTypeRefName.js';
import { NameResolver } from './resolver.js';

export const debug = createDebug(`cfntypes:getDataTypeName`);

export function getDataTypeName(
  def: TypeDefinition,
  resolve: NameResolver,
  namespace: string | undefined,
): string {
  debug(`%O`, {
    PrimitiveType: def.PrimitiveType,
    Type: def.Type,
    PrimitiveItemType: def.PrimitiveItemType,
    ItemType: def.ItemType,
  });

  let ret: string;

  if (def.Type === 'List' || def.Type === 'Map') {
    const itemType = getTypeRefName(
      def.ItemType,
      def.PrimitiveItemType,
      resolve,
      namespace,
    );
    ret =
      def.Type === 'List' ? itemType + '[]' : `{ [key: string]: ${itemType} }`;
  } else {
    ret = getTypeRefName(def.Type, def.PrimitiveType, resolve, namespace);
  }

  debug(`name = '${ret}'`);
  return ret;
}
