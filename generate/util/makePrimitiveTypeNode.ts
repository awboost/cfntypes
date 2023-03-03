import { PrimitiveType } from '@awboost/cfnspec';
import ts from 'typescript';

export function makePrimitiveTypeNode(type: PrimitiveType): ts.TypeNode {
  switch (type) {
    case PrimitiveType.Boolean:
      return ts.factory.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword);
    case PrimitiveType.Double:
      return ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
    case PrimitiveType.Integer:
      return ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
    case PrimitiveType.Json:
      return ts.factory.createKeywordTypeNode(ts.SyntaxKind.ObjectKeyword);
    case PrimitiveType.Long:
      return ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
    case PrimitiveType.String:
      return ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword);
    case PrimitiveType.Timestamp:
      return ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword);
    default:
      throw new Error(`unknown primitive type ${type}`);
  }
}
