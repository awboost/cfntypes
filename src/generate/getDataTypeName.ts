import { TypeDefinition, PrimitiveType } from '@fmtk/cfnspec';
import { NameResolver } from './resolver';
import { convertName } from './convertName';
import { primitive } from './primitive';
import { debug } from './debug';

export function getDataTypeName(
  def: TypeDefinition,
  resolve: NameResolver,
  namespace: string | undefined,
): string {
  debug(`getDataTypeName %O`, {
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

  debug(`getDataTypeName = '${ret}'`);
  return ret;
}

function getTypeRefName(
  type: string | undefined,
  primitiveType: PrimitiveType | undefined,
  resolve: NameResolver,
  namespace: string | undefined,
): string {
  debug(
    `convertPropertyDef type=${type}, primitiveType=${primitiveType} (ns ${namespace})`,
  );

  if (type) {
    return convertName(resolve(type, namespace));
  }
  if (primitiveType) {
    return primitive(primitiveType);
  }
  return 'any';
}
