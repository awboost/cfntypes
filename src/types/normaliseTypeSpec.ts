import { PrimitiveType, StringMap, UpdateType } from '@fmtk/cfnspec';
import { TypeSource } from './TypeSource';
import { TypeDefinition } from './TypeDefinition';
import {
  normaliseSimpleType,
  SimpleTypeCommonSpecification,
} from './normaliseSimpleType';
import { getNamespace } from './getNamespace';
import { NameResolver } from './NameResolver';

export interface ComplexTypeCommonSpecification {
  Documentation?: string;
  DuplicatesAllowed?: boolean;
  ItemType?: string;
  PrimitiveItemType?: PrimitiveType;
  PrimitiveType?: PrimitiveType;
  Properties?: StringMap<SimpleTypeCommonSpecification>;
  Required?: boolean;
  Type?: string;
  UpdateType?: UpdateType;
}

export function normaliseTypeSpec(
  name: string,
  spec: ComplexTypeCommonSpecification,
  source: TypeSource,
  resolve: NameResolver,
): TypeDefinition {
  const ns = getNamespace(name);

  if (spec.Properties) {
    return {
      documentation: spec.Documentation,
      name,
      properties: Object.entries(spec.Properties).map(([name, prop]) => ({
        ...normaliseSimpleType(name, prop, resolve, ns),
        optional: prop.Required === false,
      })),
      source,
      typeKind: 'object',
    };
  } else {
    return {
      ...normaliseSimpleType(
        name,
        { ...spec, Required: !!spec.Required },
        resolve,
        ns,
      ),
      source,
    };
  }
}
