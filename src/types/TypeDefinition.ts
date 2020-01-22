import { PropertyDefinition } from './PropertyDefinition';
import { TypeKind } from './TypeKind';
import { TypeSource } from './TypeSource';

export interface TypeDefinitionBase {
  documentation?: string;
  name: string;
  source: TypeSource;
}

export interface ComplexTypeDefinition extends TypeDefinitionBase {
  typeKind: 'object';
  properties: PropertyDefinition[];
}

export interface SimpleTypeDefinition extends TypeDefinitionBase {
  typeKind: TypeKind;
  typeName: string;
  typePrimitive: boolean;
}

export type TypeDefinition = ComplexTypeDefinition | SimpleTypeDefinition;
