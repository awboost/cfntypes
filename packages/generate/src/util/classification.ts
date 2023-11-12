import { JSONSchema7, JSONSchema7Definition } from "json-schema";

export type Modify<T, U> = Omit<T, keyof U> & U;

export type RequiredBy<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>;

export type JSONSchemaRef = { $ref: string };

export function isRefSchema(schema: JSONSchema7): schema is JSONSchemaRef {
  return !!schema.$ref;
}

export function isConstSchema(
  schema: JSONSchema7,
): schema is RequiredBy<JSONSchema7, "const"> {
  return !!schema.const;
}

export function isEnumSchema(
  schema: JSONSchema7,
): schema is RequiredBy<JSONSchema7, "enum"> {
  return !!schema.enum;
}

export function isObjectSchema(schema: JSONSchema7): boolean {
  return !!(
    schema.type === "object" ||
    (!schema.type && (schema.properties || schema.patternProperties))
  );
}

export function shouldInlineType(schema: JSONSchema7): boolean {
  return (
    !isObjectSchema(schema) && !isEnumSchema(schema) && !isConstSchema(schema)
  );
}

export function assertSchema(
  schema: JSONSchema7Definition,
): asserts schema is JSONSchema7 {
  if (typeof schema === "boolean") {
    // according to the types, this can be boolean, but it isn't addressed
    // in the spec
    throw new Error(`expected schema, got ${schema}`);
  }
}
