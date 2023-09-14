import { SpecialType } from "@awboost/cfnspec";
import ts from "typescript";

export function makeSpecialTypeNode(
  type: SpecialType,
  itemType: ts.TypeNode,
): ts.TypeNode {
  if (type === "List") {
    return ts.factory.createArrayTypeNode(itemType);
  } else if (type === "Map") {
    return ts.factory.createTypeReferenceNode("Record", [
      ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
      itemType,
    ]);
  } else {
    throw new Error(`unknown special type '${type}'`);
  }
}
