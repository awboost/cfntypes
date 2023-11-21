import { ResourceTypeSchema } from "@awboost/cfn-resource-schemas/types";
import { JSONSchema7, JSONSchema7Type } from "json-schema";
import ts from "typescript";
import { attachComment } from "./attachComment.js";
import {
  JSONSchemaRef,
  assertSchema,
  isConstSchema,
  isEnumSchema,
  isObjectSchema,
  isRefSchema,
  shouldInlineType,
} from "./classification.js";
import { mangleName } from "./mangleName.js";
import { resolveSchema } from "./resolveSchema.js";

export type MakeObjectTypeOptions = {
  propertyFilter?: (name: string, schema: JSONSchema7) => boolean;
};

export function makeObjectType(
  baseSchema: ResourceTypeSchema,
  objectSchema: JSONSchema7,
  opts: MakeObjectTypeOptions = {},
): ts.TypeNode {
  const { propertyFilter } = opts;

  if (!isObjectSchema(objectSchema)) {
    throw new Error(`expected object schema, got "${objectSchema.type}"`);
  }
  if (objectSchema.patternProperties) {
    return ts.factory.createTypeReferenceNode("Record", [
      ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
      makeType(baseSchema, {
        oneOf: Object.values(objectSchema.patternProperties),
      }),
    ]);
  }
  if (!objectSchema.properties) {
    return ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword);
  }
  const members: ts.TypeElement[] = [];
  for (const propertyName of Object.keys(objectSchema.properties).sort()) {
    const propertySchema = objectSchema.properties[propertyName];
    try {
      assertSchema(propertySchema);
      if (propertyFilter && !propertyFilter(propertyName, propertySchema)) {
        continue;
      }

      // resolve this so we can get the documentation from the references
      const [resolved] = resolveSchema({ baseSchema, schema: propertySchema });

      members.push(
        attachComment(
          resolved,
          ts.factory.createPropertySignature(
            undefined,
            propertyName,
            objectSchema.required?.includes(propertyName)
              ? undefined
              : ts.factory.createToken(ts.SyntaxKind.QuestionToken),
            // don't use the pre-resolved schema here, so we give makeRefType
            // a chance
            makeType(baseSchema, propertySchema),
          ),
        ),
      );
    } catch (cause) {
      throw new Error(`failed to process property "${propertyName}"`, {
        cause,
      });
    }
  }
  return ts.factory.createTypeLiteralNode(members);
}

export function makeType(
  baseSchema: ResourceTypeSchema,
  typeSchema: JSONSchema7,
): ts.TypeNode {
  if (isRefSchema(typeSchema)) {
    return makeRefType(baseSchema, typeSchema);
  }
  if (typeSchema.type === undefined) {
    if (typeSchema.oneOf || typeSchema.anyOf) {
      return makeUnionType(baseSchema, typeSchema);
    }
    if (typeSchema.properties || typeSchema.patternProperties) {
      // assume it is an object
      return makeObjectType(baseSchema, typeSchema);
    }
    throw new Error(`expected schema type`);
  }
  if (typeSchema.type === "object") {
    return makeObjectType(baseSchema, typeSchema);
  }
  if (typeSchema.type === "array") {
    return makeArrayType(baseSchema, typeSchema);
  }
  return makePrimitiveType(baseSchema, typeSchema);
}

function makeRefType(
  baseSchema: ResourceTypeSchema,
  refSchema: JSONSchemaRef,
): ts.TypeNode {
  const [resolved, ref] = resolveSchema({
    baseSchema,
    schema: refSchema,
  });
  if (!ref || shouldInlineType(resolved)) {
    return makeType(baseSchema, resolved);
  }
  // return a reference to the object type instead of inlining
  const prefix = "#/definitions/";
  if (!ref.startsWith(prefix)) {
    throw new Error(
      `expected object ref to start with "${prefix}", got "${ref}"`,
    );
  }
  const baseTypeName = baseSchema.typeName;
  const refTypeName = ref.slice(prefix.length);

  return ts.factory.createTypeReferenceNode(
    mangleName(`${baseTypeName}.${refTypeName}`, "type"),
  );
}

function makeArrayType(
  baseSchema: ResourceTypeSchema,
  schema: JSONSchema7,
): ts.TypeNode {
  if (schema.type !== "array") {
    throw new Error(`expected array type`);
  }
  if (!schema.items) {
    throw new Error(`expected array schema to have item type`);
  }
  // if items is an array then make a tuple type definition
  if (Array.isArray(schema.items)) {
    return ts.factory.createTupleTypeNode(
      schema.items.map((item) => {
        assertSchema(item);
        return makeType(baseSchema, item);
      }),
    );
  }
  assertSchema(schema.items);
  return ts.factory.createArrayTypeNode(makeType(baseSchema, schema.items));
}

function makeUnionType(
  baseSchema: ResourceTypeSchema,
  schema: JSONSchema7,
): ts.TypeNode {
  const union = schema.oneOf ?? schema.anyOf;
  if (!union) {
    throw new Error(`expected either "onOf" or "anyOf"`);
  }
  if (union.length === 1) {
    const first = union[0];
    assertSchema(first);
    return makeType(baseSchema, first);
  }
  return ts.factory.createUnionTypeNode(
    union.map((element) => {
      assertSchema(element);
      return makeType(baseSchema, element);
    }),
  );
}

function makePrimitiveType(
  baseSchema: ResourceTypeSchema,
  schema: JSONSchema7,
): ts.TypeNode {
  if (Array.isArray(schema.type)) {
    return ts.factory.createUnionTypeNode(
      schema.type.map((type) => makeType(baseSchema, { ...schema, type })),
    );
  }
  if (isEnumSchema(schema) || isConstSchema(schema)) {
    return makeEnumNode(schema);
  }
  if (schema.type === "number" || schema.type === "integer") {
    return ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
  }
  if (schema.type === "string") {
    return ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword);
  }
  if (schema.type === "boolean") {
    return ts.factory.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword);
  }
  if (schema.type === "null") {
    return ts.factory.createLiteralTypeNode(ts.factory.createNull());
  }
  throw new Error(`expected primitive type, got "${schema.type}"`);
}

function makeEnumNode(schema: JSONSchema7): ts.TypeNode {
  if (isEnumSchema(schema)) {
    if (schema.enum.length === 1) {
      return makeLiteralTypeNode(schema.enum[0]);
    }
    return ts.factory.createUnionTypeNode(
      schema.enum.map((member) => makeLiteralTypeNode(member)),
    );
  }
  if (isConstSchema(schema)) {
    return makeLiteralTypeNode(schema.const);
  }
  throw new Error(`expected enum or const schema`);
}

function makeLiteralTypeNode(value: JSONSchema7Type): ts.TypeNode {
  return ts.factory.createLiteralTypeNode(makeLiteralNode(value));
}

function makeLiteralNode(
  value: JSONSchema7Type,
): ts.LiteralExpression | ts.BooleanLiteral | ts.NullLiteral {
  if (typeof value === "boolean") {
    return value ? ts.factory.createTrue() : ts.factory.createFalse();
  }
  if (typeof value === "number") {
    return ts.factory.createNumericLiteral(value);
  }
  if (typeof value === "string") {
    return ts.factory.createStringLiteral(value);
  }
  if (value === null) {
    return ts.factory.createNull();
  }
  throw new Error(`can't create literal type node for value ${value}`);
}
