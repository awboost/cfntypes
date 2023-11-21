import { fetchResourceSchemas } from "@awboost/cfn-resource-schemas";
import { ResourceTypeSchema } from "@awboost/cfn-resource-schemas/types";
import { getLatestSpec } from "@awboost/cfnspec";
import { writeFile } from "fs/promises";
import { format } from "prettier";
import ts from "typescript";
import { processResourceTypeSchema } from "./util/processResourceTypeSchema.js";

const outputPath = process.argv[2];
if (!outputPath) {
  console.error(`usage: ${process.argv[1]} <output-file>`);
  process.exit(2);
}

const spec = await getLatestSpec();
const schemas: ResourceTypeSchema[] = [];
const statements: ts.Statement[] = [];
const resourceTypeMap: Record<string, string> = {};
const attributeTypeMap: Record<string, string> = {};
const attributeNameMap: Record<string, string[]> = {};

for await (const schema of fetchResourceSchemas()) {
  schemas.push(schema);
}
schemas.sort((a, b) =>
  a.typeName.toLowerCase().localeCompare(b.typeName.toLowerCase()),
);

for (const schema of schemas) {
  const {
    attributeNames,
    propertiesTypeName,
    attributesTypeName,
    statements: schemaStatements,
  } = await processResourceTypeSchema(schema, {
    getDocumentation: (typeName) =>
      typeName.includes(".")
        ? spec.PropertyTypes[typeName]?.Documentation
        : spec.ResourceTypes[typeName]?.Documentation,
  });
  statements.push(...schemaStatements);

  resourceTypeMap[schema.typeName] = propertiesTypeName;
  attributeNameMap[schema.typeName] = attributeNames;

  if (attributesTypeName) {
    attributeTypeMap[schema.typeName] = attributesTypeName;
  }
}

// resource type map
statements.push(
  ts.factory.createInterfaceDeclaration(
    [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
    "ResourceTypes",
    undefined,
    undefined,
    Object.entries(resourceTypeMap).map(([name, type]) =>
      ts.factory.createPropertySignature(
        undefined,
        ts.factory.createStringLiteral(name),
        undefined,
        ts.factory.createTypeReferenceNode(type),
      ),
    ),
  ),
);

// attribute type map
statements.push(
  ts.factory.createInterfaceDeclaration(
    [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
    "AttributeTypes",
    undefined,
    undefined,
    Object.entries(attributeTypeMap).map(([name, type]) =>
      ts.factory.createPropertySignature(
        undefined,
        ts.factory.createStringLiteral(name),
        undefined,
        ts.factory.createTypeReferenceNode(type),
      ),
    ),
  ),
);

// resource type constant
const ResourceTypeConstName = "ResourceType";

statements.push(
  ts.factory.createVariableStatement(
    [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
    ts.factory.createVariableDeclarationList(
      [
        ts.factory.createVariableDeclaration(
          ResourceTypeConstName,
          undefined,
          undefined,
          ts.factory.createAsExpression(
            ts.factory.createObjectLiteralExpression(
              Object.entries(resourceTypeMap).map(([name, type]) =>
                ts.factory.createPropertyAssignment(
                  type,
                  ts.factory.createStringLiteral(name),
                ),
              ),
            ),
            ts.factory.createTypeReferenceNode("const"),
          ),
        ),
      ],
      ts.NodeFlags.Const,
    ),
  ),
);

// resource type constant type
statements.push(
  ts.factory.createTypeAliasDeclaration(
    [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
    ResourceTypeConstName,
    undefined,
    ts.factory.createIndexedAccessTypeNode(
      ts.factory.createParenthesizedType(
        ts.factory.createTypeQueryNode(
          ts.factory.createIdentifier(ResourceTypeConstName),
        ),
      ),
      ts.factory.createParenthesizedType(
        ts.factory.createTypeOperatorNode(
          ts.SyntaxKind.KeyOfKeyword,
          ts.factory.createTypeQueryNode(
            ts.factory.createIdentifier(ResourceTypeConstName),
          ),
        ),
      ),
    ),
  ),
);

// attribute type for resource type utility
statements.push(
  ts.factory.createTypeAliasDeclaration(
    [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
    "AttributeTypeFor",
    [
      ts.factory.createTypeParameterDeclaration(
        undefined,
        "T",
        ts.factory.createTypeReferenceNode("ResourceType"),
      ),
    ],
    ts.factory.createConditionalTypeNode(
      ts.factory.createTypeReferenceNode("T"),
      ts.factory.createTypeOperatorNode(
        ts.SyntaxKind.KeyOfKeyword,
        ts.factory.createTypeReferenceNode("AttributeTypes"),
      ),
      ts.factory.createIndexedAccessTypeNode(
        ts.factory.createTypeReferenceNode("AttributeTypes"),
        ts.factory.createTypeReferenceNode("T"),
      ),
      ts.factory.createKeywordTypeNode(ts.SyntaxKind.NeverKeyword),
    ),
  ),
);

// Attribute names for resource type utility
statements.push(
  ts.factory.createTypeAliasDeclaration(
    [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
    "AttributesFor",
    [
      ts.factory.createTypeParameterDeclaration(
        undefined,
        "T",
        ts.factory.createTypeReferenceNode("ResourceType"),
      ),
    ],
    ts.factory.createConditionalTypeNode(
      ts.factory.createTypeReferenceNode("T"),
      ts.factory.createTypeOperatorNode(
        ts.SyntaxKind.KeyOfKeyword,
        ts.factory.createTypeReferenceNode("AttributeTypes"),
      ),
      ts.factory.createTypeOperatorNode(
        ts.SyntaxKind.KeyOfKeyword,
        ts.factory.createIndexedAccessTypeNode(
          ts.factory.createTypeReferenceNode("AttributeTypes"),
          ts.factory.createTypeReferenceNode("T"),
        ),
      ),
      ts.factory.createKeywordTypeNode(ts.SyntaxKind.NeverKeyword),
    ),
  ),
);

// attribute name constant type
statements.push(
  ts.factory.createTypeAliasDeclaration(
    [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
    "ResourceAttributeMap",
    undefined,
    ts.factory.createMappedTypeNode(
      undefined,
      ts.factory.createTypeParameterDeclaration(
        undefined,
        "K",
        ts.factory.createTypeReferenceNode("ResourceType"),
        undefined,
      ),
      undefined,
      undefined,
      ts.factory.createArrayTypeNode(
        ts.factory.createParenthesizedType(
          ts.factory.createTypeReferenceNode("AttributesFor", [
            ts.factory.createTypeReferenceNode("K"),
          ]),
        ),
      ),
      undefined,
    ),
  ),
);

// attribute name constant
statements.push(
  ts.factory.createVariableStatement(
    [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
    ts.factory.createVariableDeclarationList(
      [
        ts.factory.createVariableDeclaration(
          "ResourceAttributeMap",
          undefined,
          ts.factory.createTypeReferenceNode("ResourceAttributeMap"),
          ts.factory.createObjectLiteralExpression(
            Object.entries(attributeNameMap).map(([name, attribs]) =>
              ts.factory.createPropertyAssignment(
                ts.factory.createStringLiteral(name),
                ts.factory.createArrayLiteralExpression(
                  attribs.map((x) => ts.factory.createStringLiteral(x)),
                ),
              ),
            ),
          ),
        ),
      ],
      ts.NodeFlags.Const,
    ),
  ),
);

const printer = ts.createPrinter();

const output = printer.printFile(
  ts.factory.createSourceFile(
    statements,
    ts.factory.createToken(ts.SyntaxKind.EndOfFileToken),
    ts.NodeFlags.None,
  ),
);

await writeFile(outputPath, await format(output, { filepath: outputPath }));
