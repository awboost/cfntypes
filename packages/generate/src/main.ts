import {
  PropertyDefinition,
  ResourceNamespace,
  TypeDefinition,
  getResourceNamespaces,
} from "@awboost/cfn-resource-schemas-db";
import { writeFile } from "fs/promises";
import { format } from "prettier";
import ts from "typescript";

type DocumentationProps = {
  awsTypeKind?: "attributes" | "property" | "resource";
  awsTypeName?: string;
  description?: string;
  documentationUrl?: string;
  isInteger?: boolean;
  maximum?: number;
  maxLength?: number;
  minimum?: number;
  minLength?: number;
  pattern?: string;
};

type ResourceInfo = {
  attributeNames: string[];
  attributeTypeName?: string;
  propertyTypeName: string;
  resourceName: string;
};

const Names = {
  AttributeNameConst: "ResourceAttributes",
  AttributeNameMapType: "ResourceAttributeMap",
  AttributeNameUtil: "AttributesFor",
  AttributeTypeMapType: "AttributeTypes",
  AttributeTypeUtil: "AttributeTypeFor",
  ResourceAttribs: "Attributes",
  ResourceAttribsAlt: "Attribs",
  ResourceName: "",
  ResourceProps: "Props",
  ResourceTypeConst: "ResourceType",
  ResourceTypeConstType: "ResourceType",
  ResourceTypeMapType: "ResourceTypes",
};

function mangleName(ns: string, type: string): string {
  return ns.replace(/^AWS|::|\./g, "") + type;
}

function shouldInlineType(type: TypeDefinition): boolean {
  return !(
    type.type === "object" ||
    type.type === "record" ||
    ((type.type === "string" || type.type === "number") && !!type.allowedValues)
  );
}

function createType(
  type: TypeDefinition | undefined,
  ns: ResourceNamespace,
): ts.TypeNode {
  if (type === undefined || type.type === "any") {
    return ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword);
  } else if (type.type === "array") {
    return ts.factory.createArrayTypeNode(createType(type.itemType, ns));
  } else if (type.type === "boolean") {
    return ts.factory.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword);
  } else if (type.type === "null") {
    return ts.factory.createLiteralTypeNode(ts.factory.createNull());
  } else if (type.type === "number") {
    if (type.allowedValues) {
      return type.allowedValues.length === 1
        ? ts.factory.createLiteralTypeNode(
            ts.factory.createNumericLiteral(type.allowedValues[0]),
          )
        : ts.factory.createUnionTypeNode(
            type.allowedValues.map((element) =>
              ts.factory.createLiteralTypeNode(
                ts.factory.createNumericLiteral(element),
              ),
            ),
          );
    }
    return ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
  } else if (type.type === "object") {
    return ts.factory.createTypeLiteralNode(
      type.properties.map((prop) =>
        attachComment(
          resolvePropertyDocs(ns, prop),
          ts.factory.createPropertySignature(
            undefined,
            prop.name,
            prop.optional
              ? ts.factory.createToken(ts.SyntaxKind.QuestionToken)
              : undefined,
            createType(prop.type, ns),
          ),
        ),
      ),
    );
  } else if (type.type === "record") {
    return ts.factory.createTypeReferenceNode("Record", [
      ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
      createType(type.valueType, ns),
    ]);
  } else if (type.type === "ref") {
    const target = ns.definitions[type.typeName];
    if (!target) {
      throw new Error(`invalid type reference "${type.typeName}"`);
    }
    if (shouldInlineType(target)) {
      return createType(target, ns);
    }
    return ts.factory.createTypeReferenceNode(
      mangleName(ns.awsTypeName, type.typeName),
    );
  } else if (type.type === "string") {
    if (type.allowedValues) {
      return type.allowedValues.length === 1
        ? ts.factory.createLiteralTypeNode(
            ts.factory.createStringLiteral(type.allowedValues[0]),
          )
        : ts.factory.createUnionTypeNode(
            type.allowedValues.map((element) =>
              ts.factory.createLiteralTypeNode(
                ts.factory.createStringLiteral(element),
              ),
            ),
          );
    }
    return ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword);
  } else if (type.type === "undefined") {
    return ts.factory.createKeywordTypeNode(ts.SyntaxKind.UndefinedKeyword);
  } else if (type.type === "union") {
    if (type.types.length === 1) {
      return createType(type.types[0], ns);
    }
    return ts.factory.createUnionTypeNode(
      type.types.map((type) => createType(type, ns)),
    );
  }
  throw new Error(`unexpected type "${(type as any).type}"`);
}

function resolvePropertyDocs(
  ns: ResourceNamespace,
  property: PropertyDefinition,
): DocumentationProps[] {
  const docs: DocumentationProps[] = [property.type, property];
  if (property.type.type === "ref") {
    const target = ns.definitions[property.type.typeName];
    if (target) {
      docs.unshift(target);
    }
  }
  return docs;
}

function attachComment<T extends ts.Node>(
  input: DocumentationProps | DocumentationProps[],
  node: T,
): T {
  let props: DocumentationProps;
  if (Array.isArray(input)) {
    props = Object.fromEntries(
      input.flatMap((x) =>
        Object.entries(x).filter(([, v]) => v !== undefined),
      ),
    );
  } else {
    props = input;
  }
  const lines: string[] = [];

  if (props.awsTypeName && !props.description?.includes(props.awsTypeName)) {
    if (props.awsTypeKind === "attributes") {
      lines.push(`Attribute type definition for \`${props.awsTypeName}\`.`);
    } else if (props.awsTypeKind === "property") {
      lines.push(`Type definition for \`${props.awsTypeName}\`.`);
    } else if (props.awsTypeKind === "resource") {
      lines.push(`Resource type definition for \`${props.awsTypeName}\`.`);
    }
  }

  if (props.description) {
    lines.push(props.description);
  }

  // number validation
  if (props.minimum) {
    lines.push(`@min \`${props.minimum}\``);
  }
  if (props.maximum) {
    lines.push(`@max \`${props.maximum}\``);
  }

  // string validation
  if (props.minLength) {
    lines.push(`@minLength \`${props.minLength}\``);
  }
  if (props.maxLength) {
    lines.push(`@maxLength \`${props.maxLength}\``);
  }
  if (props.pattern) {
    lines.push(`@pattern \`${props.pattern}\``);
  }

  if (props.documentationUrl) {
    lines.push(`@see {@link ${props.documentationUrl}}`);
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

function makeDocumentationUrl(
  typeName: string,
  extra?: "attributes",
): string | undefined {
  const match = typeName
    .toLowerCase()
    .match(/^(?:aws|alexa)::(.+)::([^.]+)(?:\.(.+))?$/);

  if (!match) {
    return;
  }

  const ns = match[3] ? "properties" : "resource";
  const suffix = match[3] ? "-" + match[3] : "";

  let url = `https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-${ns}-${match[1]}-${match[2]}${suffix}.html`;
  if (ns !== "properties" && extra === "attributes") {
    url += `#aws-resource-${match[1]}-${match[2]}-return-values`;
  }
  return url;
}

async function main(): Promise<void> {
  const outputPath = process.argv[2];
  if (!outputPath) {
    console.error(`usage: ${process.argv[1]} <output-file>`);
    process.exit(2);
  }

  const resources = getResourceNamespaces();
  const statements: ts.Statement[] = [];
  const resourceInfo: Record<string, ResourceInfo> = {};

  for await (const resource of resources) {
    const thisResource: ResourceInfo = {
      attributeNames: resource.attributes
        ? resource.attributes.properties.map((x) => x.name)
        : [],
      propertyTypeName: mangleName(resource.awsTypeName, Names.ResourceProps),
      resourceName: mangleName(resource.awsTypeName, Names.ResourceName),
    };

    resourceInfo[resource.awsTypeName] = thisResource;

    // resource props type
    statements.push(
      attachComment(
        {
          documentationUrl: makeDocumentationUrl(resource.awsTypeName),
          ...resource.resource,
          awsTypeName: resource.awsTypeName,
          awsTypeKind: "resource",
        },
        ts.factory.createTypeAliasDeclaration(
          [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
          thisResource.propertyTypeName,
          undefined,
          createType(resource.resource, resource),
        ),
      ),
    );

    // attributes type
    if (resource.attributes) {
      // avoid duplicate identifier when generating Attributes type
      const attributesName =
        Names.ResourceAttribs in resource.definitions
          ? mangleName(resource.awsTypeName, Names.ResourceAttribsAlt)
          : mangleName(resource.awsTypeName, Names.ResourceAttribs);

      thisResource.attributeTypeName = attributesName;

      statements.push(
        attachComment(
          {
            documentationUrl: makeDocumentationUrl(
              resource.awsTypeName,
              "attributes",
            ),
            awsTypeName: resource.awsTypeName,
            awsTypeKind: "attributes",
          },
          ts.factory.createTypeAliasDeclaration(
            [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
            attributesName,
            undefined,
            createType(
              {
                ...resource.attributes,
                properties: resource.attributes.properties.map((prop) => ({
                  ...prop,
                  optional: false,
                })),
              },
              resource,
            ),
          ),
        ),
      );
    }

    // property types
    for (const [name, def] of Object.entries(resource.definitions)) {
      if (shouldInlineType(def)) {
        continue;
      }
      const typeAliasName = mangleName(resource.awsTypeName, name);
      const awsTypeName = resource.awsTypeName + "." + name;

      statements.push(
        attachComment(
          {
            documentationUrl: makeDocumentationUrl(awsTypeName),
            ...def,
            awsTypeName,
            awsTypeKind: "property",
          },
          ts.factory.createTypeAliasDeclaration(
            [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
            typeAliasName,
            undefined,
            createType(def, resource),
          ),
        ),
      );
    }
  }

  // resource type map
  statements.push(
    ts.factory.createInterfaceDeclaration(
      [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
      Names.ResourceTypeMapType,
      undefined,
      undefined,
      Object.entries(resourceInfo).map(([name, info]) =>
        ts.factory.createPropertySignature(
          undefined,
          ts.factory.createStringLiteral(name),
          undefined,
          ts.factory.createTypeReferenceNode(info.propertyTypeName),
        ),
      ),
    ),
  );

  // attribute type map
  statements.push(
    ts.factory.createInterfaceDeclaration(
      [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
      Names.AttributeTypeMapType,
      undefined,
      undefined,
      Object.entries(resourceInfo)
        .map(([key, info]) => [key, info.attributeTypeName])
        .filter((entry): entry is [string, string] => !!entry[1])
        .map(([name, type]) =>
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
  statements.push(
    ts.factory.createVariableStatement(
      [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
      ts.factory.createVariableDeclarationList(
        [
          ts.factory.createVariableDeclaration(
            Names.ResourceTypeConst,
            undefined,
            undefined,
            ts.factory.createAsExpression(
              ts.factory.createObjectLiteralExpression(
                Object.entries(resourceInfo).map(([name, info]) =>
                  ts.factory.createPropertyAssignment(
                    info.resourceName,
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
      Names.ResourceTypeConstType,
      undefined,
      ts.factory.createIndexedAccessTypeNode(
        ts.factory.createParenthesizedType(
          ts.factory.createTypeQueryNode(
            ts.factory.createIdentifier(Names.ResourceTypeConst),
          ),
        ),
        ts.factory.createParenthesizedType(
          ts.factory.createTypeOperatorNode(
            ts.SyntaxKind.KeyOfKeyword,
            ts.factory.createTypeQueryNode(
              ts.factory.createIdentifier(Names.ResourceTypeConst),
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
      Names.AttributeTypeUtil,
      [
        ts.factory.createTypeParameterDeclaration(
          undefined,
          "T",
          ts.factory.createTypeReferenceNode(Names.ResourceTypeConstType),
        ),
      ],
      ts.factory.createConditionalTypeNode(
        ts.factory.createTypeReferenceNode("T"),
        ts.factory.createTypeOperatorNode(
          ts.SyntaxKind.KeyOfKeyword,
          ts.factory.createTypeReferenceNode(Names.AttributeTypeMapType),
        ),
        ts.factory.createIndexedAccessTypeNode(
          ts.factory.createTypeReferenceNode(Names.AttributeTypeMapType),
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
      Names.AttributeNameUtil,
      [
        ts.factory.createTypeParameterDeclaration(
          undefined,
          "T",
          ts.factory.createTypeReferenceNode(Names.ResourceTypeConstType),
        ),
      ],
      ts.factory.createConditionalTypeNode(
        ts.factory.createTypeReferenceNode("T"),
        ts.factory.createTypeOperatorNode(
          ts.SyntaxKind.KeyOfKeyword,
          ts.factory.createTypeReferenceNode(Names.AttributeTypeMapType),
        ),
        ts.factory.createTypeOperatorNode(
          ts.SyntaxKind.KeyOfKeyword,
          ts.factory.createIndexedAccessTypeNode(
            ts.factory.createTypeReferenceNode(Names.AttributeTypeMapType),
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
      Names.AttributeNameMapType,
      undefined,
      ts.factory.createMappedTypeNode(
        undefined,
        ts.factory.createTypeParameterDeclaration(
          undefined,
          "K",
          ts.factory.createTypeReferenceNode(Names.ResourceTypeConstType),
          undefined,
        ),
        undefined,
        undefined,
        ts.factory.createArrayTypeNode(
          ts.factory.createParenthesizedType(
            ts.factory.createTypeReferenceNode(Names.AttributeNameUtil, [
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
            Names.AttributeNameConst,
            undefined,
            ts.factory.createTypeReferenceNode(Names.AttributeNameMapType),
            ts.factory.createObjectLiteralExpression(
              Object.entries(resourceInfo).map(([name, info]) =>
                ts.factory.createPropertyAssignment(
                  ts.factory.createStringLiteral(name),
                  ts.factory.createArrayLiteralExpression(
                    info.attributeNames.map((x) =>
                      ts.factory.createStringLiteral(x),
                    ),
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
}

await main();
