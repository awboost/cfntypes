import { PrimitiveType } from '@awboost/cfnspec';
import { SpecError } from './SpecError.js';

export function primitive(type: PrimitiveType): string {
  switch (type) {
    case PrimitiveType.Boolean:
      return 'boolean';
    case PrimitiveType.Double:
    case PrimitiveType.Integer:
    case PrimitiveType.Long:
      return 'number';
    case PrimitiveType.Json:
      return 'object';
    case PrimitiveType.Timestamp:
    case PrimitiveType.String:
      return 'string';

    default:
      throw new SpecError(`unknown primitive type: '${type}'`);
  }
}
