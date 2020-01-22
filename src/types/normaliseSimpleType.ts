import { TypeKind } from './TypeKind';
import { PrimitiveType } from '@fmtk/cfnspec';
import { NameResolver } from './NameResolver';
import { primitive } from './primitive';

export interface SimpleTypeCommonSpecification {
  Documentation?: string;
  ItemType?: string;
  PrimitiveItemType?: PrimitiveType;
  PrimitiveType?: PrimitiveType;
  Required?: boolean;
  Type?: string;
}

export interface SimpleTypeCommonDefinition {
  documentation?: string;
  name: string;
  typeKind: TypeKind;
  typeName: string;
  typePrimitive: boolean;
}

export function normaliseSimpleType(
  name: string,
  spec: SimpleTypeCommonSpecification,
  resolve: NameResolver,
  namespace: string,
): SimpleTypeCommonDefinition {
  let typePrimitive = !!(spec.PrimitiveItemType || spec.PrimitiveType);

  let typeKind: TypeKind;
  let typeName: string | undefined;

  if (spec.Type === 'List') {
    typeKind = TypeKind.List;
  } else if (spec.Type === 'Map') {
    typeKind = TypeKind.Map;
  } else {
    typeKind = TypeKind.Scalar;
  }

  if (typeKind === TypeKind.Scalar) {
    typeName = spec.PrimitiveType
      ? primitive(spec.PrimitiveType)
      : spec.Type && resolve(spec.Type, namespace);
  } else {
    typeName = spec.PrimitiveItemType
      ? primitive(spec.PrimitiveItemType)
      : spec.ItemType && resolve(spec.ItemType, namespace);
  }

  if (!typeName) {
    typePrimitive = true;
    typeName = 'any';
  }

  return {
    name,
    typePrimitive,
    typeKind,
    typeName: typePrimitive ? typeName : typeName,
  };
}
