import { TypeKind } from './TypeKind';

export interface PropertyDefinition {
  documentation?: string;
  optional?: boolean;
  name: string;
  typeKind: TypeKind;
  typeName: string;
  typePrimitive: boolean;
}
