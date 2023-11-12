import { ResourceTypeSchema } from "@awboost/cfn-resource-schemas/types";
import ts from "typescript";
import { attachComment } from "./attachComment.js";
import { shouldInlineType } from "./classification.js";
import { makeObjectType, makeType } from "./makeType.js";
import { mangleName } from "./mangleName.js";

const PropertiesPathPrefix = "/properties/";

export type ProcessResourceTypeSchemaOptions = {
  getDocumentation(typeName: string): string | undefined;
};

export async function processResourceTypeSchema(
  schema: ResourceTypeSchema,
  opts: ProcessResourceTypeSchemaOptions,
): Promise<ts.Statement[]> {
  const { getDocumentation } = opts;
  const statements: ts.Statement[] = [];

  // resource properties type
  statements.push(
    attachComment(
      {
        documentationUrl: getDocumentation(schema.typeName),
        ...schema,
      },
      ts.factory.createTypeAliasDeclaration(
        [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
        mangleName(schema.typeName, "properties"),
        undefined,
        makeObjectType(schema, schema, {
          propertyFilter: (name) =>
            !schema.readOnlyProperties?.includes(`/properties/${name}`),
        }),
      ),
    ),
  );

  // resource attributes type
  if (schema.readOnlyProperties?.length) {
    statements.push(
      attachComment(
        {
          documentationUrl: getDocumentation(schema.typeName),
          ...schema,
        },
        ts.factory.createTypeAliasDeclaration(
          [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
          mangleName(schema.typeName, "attributes"),
          undefined,
          makeObjectType(
            schema,
            {
              ...schema,
              // attributes are non-optional
              required: schema.readOnlyProperties.map((x) =>
                x.startsWith(PropertiesPathPrefix)
                  ? x.slice(PropertiesPathPrefix.length)
                  : x,
              ),
            },
            {
              propertyFilter: (name) =>
                !!schema.readOnlyProperties?.includes(
                  PropertiesPathPrefix + name,
                ),
            },
          ),
        ),
      ),
    );
  }

  if (schema.definitions) {
    for (const [name, def] of Object.entries(schema.definitions)) {
      try {
        if (!shouldInlineType(def)) {
          const typeName = `${schema.typeName}.${name}`;
          statements.push(
            attachComment(
              {
                typeName,
                documentationUrl: getDocumentation(typeName),
                ...def,
              },
              ts.factory.createTypeAliasDeclaration(
                [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
                mangleName(typeName, "type"),
                undefined,
                makeType(schema, def),
              ),
            ),
          );
        }
      } catch (cause) {
        throw new Error(
          `failed to process ${schema.typeName}#/definitions/${name}`,
          { cause },
        );
      }
    }
  }

  return statements;
}
