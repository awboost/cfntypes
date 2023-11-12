import createDebug from "debug";
import JsonPointer from "json-pointer";
import { JSONSchema7 } from "json-schema";

const debug = createDebug("generate:resolve");

export type ResolveSchemaInput = {
  baseSchema?: JSONSchema7;
  path?: string;
  schema?: JSONSchema7;
};

export function resolveSchema(
  input: ResolveSchemaInput,
): [JSONSchema7, string | undefined] {
  let schema = input.schema ?? input.baseSchema;
  if (input.path) {
    if (!schema) {
      throw new Error(`provided path without schema or base`);
    }
    schema = lookupSchema(schema, input.path);
  }
  if (!schema) {
    throw new Error(`no arguments provided`);
  }
  // don't overwrite type for ref because it doesn't make sense
  const { $ref, type, ...rest } = schema;
  if (!$ref) {
    return [schema, input.path];
  }
  const [resolvedSchema, resolvedRef] = resolveSchema({
    baseSchema: input.baseSchema ?? input.schema,
    path: schema.$ref,
  });
  return [
    // overwrite ref props with any local props
    {
      ...resolvedSchema,
      ...rest,
    },
    resolvedRef,
  ];
}

function lookupSchema(schema: JSONSchema7, ref: string): JSONSchema7 {
  debug(`lookupSchema %s`, ref);
  if (!ref.startsWith("#")) {
    throw new Error(`unexpected non-local $ref "${ref}"`);
  }
  try {
    return ref === "#/" ? schema : JsonPointer.get(schema, ref.slice(1));
  } catch (cause) {
    throw new Error(`invalid reference "${ref}"`, { cause });
  }
}
