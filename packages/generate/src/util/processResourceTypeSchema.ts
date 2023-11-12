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

export type ProcessResourceTypeSchemaOutput = {
  attributesTypeName?: string;
  attributeNames: string[];
  propertiesTypeName: string;
  statements: ts.Statement[];
};

export async function processResourceTypeSchema(
  schema: ResourceTypeSchema,
  opts: ProcessResourceTypeSchemaOptions,
): Promise<ProcessResourceTypeSchemaOutput> {
  const { getDocumentation } = opts;
  const statements: ts.Statement[] = [];

  let attributesTypeName: string | undefined;
  const propertiesTypeName = mangleName(schema.typeName, "properties");

  const attributeNames = schema.readOnlyProperties
    ? schema.readOnlyProperties
        .map((x) =>
          x.startsWith(PropertiesPathPrefix)
            ? x.slice(PropertiesPathPrefix.length)
            : x,
        )
        .filter((x) => x in schema.properties)
    : [];

  // resource properties type
  statements.push(
    attachComment(
      {
        documentationUrl: getDocumentation(schema.typeName),
        ...schema,
      },
      ts.factory.createTypeAliasDeclaration(
        [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
        propertiesTypeName,
        undefined,
        makeObjectType(schema, schema, {
          propertyFilter: (name) =>
            !schema.readOnlyProperties?.includes(PropertiesPathPrefix + name),
        }),
      ),
    ),
  );

  // resource attributes type
  if (schema.readOnlyProperties?.length) {
    if (schema.definitions?.Attributes) {
      attributesTypeName = mangleName(schema.typeName, "attributes-alt");
    } else {
      attributesTypeName = mangleName(schema.typeName, "attributes");
    }
    statements.push(
      attachComment(
        {
          documentationUrl: getDocumentation(schema.typeName),
          ...schema,
        },
        ts.factory.createTypeAliasDeclaration(
          [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
          attributesTypeName,
          undefined,
          makeObjectType(
            schema,
            {
              ...schema,
              // attributes are non-optional
              required: attributeNames,
            },
            {
              propertyFilter: (name) => attributeNames.includes(name),
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

  return {
    attributeNames,
    attributesTypeName,
    propertiesTypeName,
    statements,
  };
}
