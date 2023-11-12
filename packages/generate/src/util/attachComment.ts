import { JSONSchema7 } from "json-schema";
import ts from "typescript";

export type SchemaWithDocs = JSONSchema7 & {
  documentationUrl?: string;
  typeName?: string;
};

export function attachComment<T extends ts.Node>(
  schema: SchemaWithDocs,
  node: T,
): T {
  const lines: string[] = [];

  if (schema.typeName) {
    lines.push(`Type definition for \`${schema.typeName}\`.`);
  }

  if (schema.description) {
    lines.push(schema.description);
  }

  // number validation
  if (schema.exclusiveMinimum) {
    lines.push(`@exclusiveMin \`${schema.exclusiveMinimum}\``);
  }
  if (schema.minimum) {
    lines.push(`@min \`${schema.minimum}\``);
  }
  if (schema.maximum) {
    lines.push(`@max \`${schema.maximum}\``);
  }
  if (schema.exclusiveMaximum) {
    lines.push(`@exclusiveMax \`${schema.exclusiveMaximum}\``);
  }

  // string validation
  if (schema.minLength) {
    lines.push(`@minLength \`${schema.minLength}\``);
  }
  if (schema.maxLength) {
    lines.push(`@maxLength \`${schema.maxLength}\``);
  }
  if (schema.pattern) {
    lines.push(`@pattern \`${schema.pattern}\``);
  }

  // array validation
  if (schema.minItems) {
    lines.push(`@minLength \`${schema.minItems}\``);
  }
  if (schema.maxItems) {
    lines.push(`@maxLength \`${schema.maxItems}\``);
  }

  if (schema.documentationUrl) {
    lines.push(`@see {@link ${schema.documentationUrl}}`);
  }

  if (!lines.length) {
    return node;
  }
  // escape the */ sequence to avoid prematurely closing the comment
  const text =
    ["*", ...lines].join("\n * ").replace(/\*\//g, "/\u200d*") + "\n ";

  return ts.addSyntheticLeadingComment(
    node,
    ts.SyntaxKind.MultiLineCommentTrivia,
    text,
    true,
  );
}
