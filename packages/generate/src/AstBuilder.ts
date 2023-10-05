import {
  CloudFormationSpec,
  isNonPrimitiveSpecialTypeAlias,
  isNonPrimitiveTypeAlias,
  isObjectPropertyType,
  isPrimitiveSpecialTypeAlias,
  isPrimitiveTypeAlias,
  isSpecialType,
  ObjectTypeDef,
  PropertyType,
  ResourceType,
  TypeAlias,
} from "@awboost/cfnspec";
import ts from "typescript";
import { inspect } from "util";
import { attachJsDocComment } from "./util/makeJsDocComment.js";
import { makePrimitiveTypeNode } from "./util/makePrimitiveTypeNode.js";
import { makeSpecialTypeNode } from "./util/makeSpecialTypeNode.js";
import { mangleName, NameType } from "./util/mangleName.js";
import { quoteName } from "./util/quoteName.js";
import { hasProperty, RequiredBy } from "./util/types.js";

const Names = {
  AttributeNamesProperty: "AttributeNames",
  CoreModule: "core",
  LogicalResourceIdParam: "logicalId",
  OptionsParam: "options",
  PropertiesParam: "properties",
  ResourceBaseClass: "ResourceBase",
  ResourceBaseClassImportPath: "../util.js",
  ResourceOptionsImportPath: "../template.js",
  ResourceOptionsType: "ResourceOptions",
  ResourceTypeProperty: "Type",
};

export class AstBuilder {
  private readonly propertyTypes: Set<string>;
  private readonly requiresCore = new Map<string, Set<string>>();
  private readonly requiresResources = new Set<string>();

  constructor(private readonly spec: CloudFormationSpec) {
    this.propertyTypes = new Set(Object.keys(spec.PropertyTypes));
  }

  public build(): Record<string, ts.SourceFile> {
    const statementsByNamespace: Record<string, ts.Statement[]> = {};

    // property types
    for (const [fullName, def] of Object.entries(this.spec.PropertyTypes)) {
      const ns = getNamespace(fullName) || Names.CoreModule;
      let statements = statementsByNamespace[ns];
      if (!statements) {
        statementsByNamespace[ns] = statements = [];
      }
      statements.push(this.makePropertyType(fullName, def));
    }

    // resources
    for (const [fullName, def] of Object.entries(this.spec.ResourceTypes)) {
      const ns = getNamespace(fullName);
      let statements = statementsByNamespace[ns];
      if (!statements) {
        statementsByNamespace[ns] = statements = [];
      }

      this.requiresResources.add(ns);
      statements.push(this.makeResourcePropertiesType(fullName, def));

      if (hasProperty(def, "Attributes")) {
        statements.push(this.makeResourceAttributes(fullName, def));
      }

      statements.push(this.makeResourceClass(fullName, def));
    }

    // add required core module imports
    for (const [namespace, names] of this.requiresCore) {
      const statements = statementsByNamespace[namespace]!;
      statements.unshift(
        this.makeImportDeclaration([...names], `./${Names.CoreModule}.js`),
      );
    }

    // add required base imports
    for (const namespace of this.requiresResources) {
      const statements = statementsByNamespace[namespace]!;

      statements.unshift(
        this.makeImportDeclaration(
          [Names.ResourceOptionsType],
          Names.ResourceOptionsImportPath,
        ),
      );

      statements.unshift(
        this.makeImportDeclaration(
          [Names.ResourceBaseClass],
          Names.ResourceBaseClassImportPath,
        ),
      );
    }

    return Object.fromEntries(
      Object.entries(statementsByNamespace).map(([namespace, statements]) => [
        namespace,
        ts.factory.createSourceFile(
          statements,
          ts.factory.createToken(ts.SyntaxKind.EndOfFileToken),
          ts.NodeFlags.None,
        ),
      ]),
    );
  }

  private makePropertyType(fullName: string, def: PropertyType): ts.Statement {
    const resourceName = getResourceName(fullName);
    let statement: ts.Statement;

    if (isObjectPropertyType(def)) {
      statement = this.makeObjectTypeAlias(fullName, def, resourceName, "type");
    } else {
      statement = ts.factory.createTypeAliasDeclaration(
        [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
        mangleName(fullName, "type"),
        undefined,
        this.makeTypeNode(def, resourceName, fullName),
      );
    }

    return attachJsDocComment(
      statement,
      `Type definition for ${fullName}`,
      def.Documentation,
      fullName,
    );
  }

  /**
   * Process each ResourceType item in the specification.
   */
  private makeResourcePropertiesType(
    fullName: string,
    def: ResourceType,
  ): ts.Statement {
    return attachJsDocComment(
      this.makeObjectTypeAlias(fullName, def, fullName, "properties"),
      `Type definition for ${fullName}`,
      def.Documentation,
      fullName,
    );
  }

  private makeResourceClass(fullName: string, def: ResourceType): ts.Statement {
    const attributeNames = def.Attributes ? Object.keys(def.Attributes) : [];
    const className = mangleName(fullName, "resource");
    const attributesType = def.Attributes
      ? mangleName(fullName, "attributes")
      : undefined;
    const propertiesType = mangleName(fullName, "properties");

    return attachJsDocComment(
      ts.factory.createClassDeclaration(
        [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
        className,
        undefined,
        [
          // extends ResourceBase<Type, PropsType, AttribsType>
          ts.factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [
            ts.factory.createExpressionWithTypeArguments(
              ts.factory.createIdentifier(Names.ResourceBaseClass),
              [
                ts.factory.createLiteralTypeNode(
                  ts.factory.createStringLiteral(fullName),
                ),
                ts.factory.createTypeReferenceNode(propertiesType),
                attributesType
                  ? ts.factory.createTypeReferenceNode(attributesType)
                  : ts.factory.createTypeReferenceNode("Record", [
                      ts.factory.createKeywordTypeNode(
                        ts.SyntaxKind.StringKeyword,
                      ),
                      ts.factory.createKeywordTypeNode(
                        ts.SyntaxKind.NeverKeyword,
                      ),
                    ]),
              ],
            ),
          ]),
        ],
        [
          this.makeResourceClassTypeProp(fullName),
          this.makeResourceClassAttribsProp(attributesType, attributeNames),
          this.makeResourceClassConstructor(className, propertiesType),
        ],
      ),
      `Resource class for ${fullName}`,
      def.Documentation,
      fullName,
    );
  }

  private makeResourceClassTypeProp(fullName: string): ts.PropertyDeclaration {
    // public static readonly Type = "AWS::Blah"
    return ts.factory.createPropertyDeclaration(
      [
        ts.factory.createModifier(ts.SyntaxKind.PublicKeyword),
        ts.factory.createModifier(ts.SyntaxKind.StaticKeyword),
        ts.factory.createModifier(ts.SyntaxKind.ReadonlyKeyword),
      ],
      Names.ResourceTypeProperty,
      undefined,
      undefined,
      ts.factory.createStringLiteral(fullName),
    );
  }

  private makeResourceClassAttribsProp(
    attributesType: string | undefined,
    attributeNames: string[],
  ): ts.PropertyDeclaration {
    // public static readonly AttributeNames = [ ... ]
    return ts.factory.createPropertyDeclaration(
      [
        ts.factory.createModifier(ts.SyntaxKind.PublicKeyword),
        ts.factory.createModifier(ts.SyntaxKind.StaticKeyword),
        ts.factory.createModifier(ts.SyntaxKind.ReadonlyKeyword),
      ],
      Names.AttributeNamesProperty,
      undefined,
      attributesType
        ? ts.factory.createTypeOperatorNode(
            ts.SyntaxKind.ReadonlyKeyword,
            ts.factory.createArrayTypeNode(
              ts.factory.createTypeOperatorNode(
                ts.SyntaxKind.KeyOfKeyword,
                ts.factory.createTypeReferenceNode(attributesType),
              ),
            ),
          )
        : undefined,
      ts.factory.createArrayLiteralExpression(
        attributeNames.map((x) => ts.factory.createStringLiteral(x)),
      ),
    );
  }

  private makeResourceClassConstructor(
    className: string,
    propertiesType: string,
  ): ts.ConstructorDeclaration {
    // constructor(
    //   logicalId: string,
    //   props: PropertiesType,
    //   options?: ResourceOptions
    // )
    return ts.factory.createConstructorDeclaration(
      undefined,
      [
        ts.factory.createParameterDeclaration(
          undefined,
          undefined,
          Names.LogicalResourceIdParam,
          undefined,
          ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
        ),
        ts.factory.createParameterDeclaration(
          undefined,
          undefined,
          Names.PropertiesParam,
          undefined,
          ts.factory.createTypeReferenceNode(propertiesType),
        ),
        ts.factory.createParameterDeclaration(
          undefined,
          undefined,
          Names.OptionsParam,
          ts.factory.createToken(ts.SyntaxKind.QuestionToken),
          ts.factory.createTypeReferenceNode(Names.ResourceOptionsType),
        ),
      ],
      ts.factory.createBlock([
        // super()
        ts.factory.createExpressionStatement(
          ts.factory.createCallExpression(ts.factory.createSuper(), undefined, [
            ts.factory.createPropertyAccessExpression(
              ts.factory.createIdentifier(className),
              ts.factory.createIdentifier(Names.ResourceTypeProperty),
            ),
            ts.factory.createPropertyAccessExpression(
              ts.factory.createIdentifier(className),
              ts.factory.createIdentifier(Names.AttributeNamesProperty),
            ),
            ts.factory.createIdentifier(Names.LogicalResourceIdParam),
            ts.factory.createIdentifier(Names.PropertiesParam),
            ts.factory.createIdentifier(Names.OptionsParam),
          ]),
        ),
      ]),
    );
  }

  /**
   * Process attributes for a ResourceType.
   */
  private makeResourceAttributes(
    resourceName: string,
    resource: RequiredBy<ResourceType, "Attributes">,
  ): ts.Statement {
    return attachJsDocComment(
      this.makeObjectTypeAlias(
        resourceName,
        { Properties: resource.Attributes },
        resourceName,
        "attributes",
      ),
      `Attributes type definition for ${resourceName}`,
      resource.Documentation,
      resourceName,
    );
  }

  private makeImportDeclaration(
    names: string[],
    module: string,
  ): ts.ImportDeclaration {
    return ts.factory.createImportDeclaration(
      undefined,
      ts.factory.createImportClause(
        false,
        undefined,
        ts.factory.createNamedImports(
          names.map((name) =>
            ts.factory.createImportSpecifier(
              false,
              undefined,
              ts.factory.createIdentifier(name),
            ),
          ),
        ),
      ),
      ts.factory.createStringLiteral(module),
    );
  }

  private makeTypeNode(
    type: TypeAlias,
    resourceName: string,
    propRef: string,
  ): ts.TypeNode {
    if (isPrimitiveTypeAlias(type)) {
      return makePrimitiveTypeNode(type.PrimitiveType);
    } else if (isNonPrimitiveSpecialTypeAlias(type)) {
      return makeSpecialTypeNode(
        type.Type,
        ts.factory.createTypeReferenceNode(
          mangleName(this.resolveType(type.ItemType, resourceName), "type"),
        ),
      );
    } else if (isPrimitiveSpecialTypeAlias(type)) {
      return makeSpecialTypeNode(
        type.Type,
        makePrimitiveTypeNode(type.PrimitiveItemType),
      );
    } else if ("Type" in type && isSpecialType(type.Type)) {
      // no item type has been provided
      if (propRef.endsWith(".Tags")) {
        console.warn(`warn: assuming "Tag" for ItemType of ${propRef}`);
        return makeSpecialTypeNode(
          type.Type,
          ts.factory.createTypeReferenceNode(
            mangleName(this.resolveType("Tag", resourceName), "type"),
          ),
        );
      }
      console.warn(`warn: no ItemType provided for ${propRef}`);
      return makeSpecialTypeNode(
        type.Type,
        ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword),
      );
    } else if (isNonPrimitiveTypeAlias(type)) {
      return ts.factory.createTypeReferenceNode(
        mangleName(this.resolveType(type.Type, resourceName), "type"),
      );
    }
    throw new Error(`unable to process type node ` + inspect(type));
  }

  private makeObjectTypeAlias(
    name: string,
    def: ObjectTypeDef,
    resourceName: string,
    type: NameType,
  ): ts.InterfaceDeclaration {
    return ts.factory.createInterfaceDeclaration(
      [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      mangleName(name, type),
      undefined,
      undefined,
      Object.entries(def.Properties).map(([propertyName, type]) =>
        ts.factory.createPropertySignature(
          undefined,
          quoteName(propertyName),
          type.Required
            ? undefined
            : ts.factory.createToken(ts.SyntaxKind.QuestionToken),
          this.makeTypeNode(type, resourceName, `${name}.${propertyName}`),
        ),
      ),
    );
  }

  private resolveType(typeName: string, resourceName: string): string {
    if (resourceName) {
      const fullName = `${resourceName}.${typeName}`;
      if (this.propertyTypes.has(fullName)) {
        return fullName;
      }
    }
    if (this.propertyTypes.has(typeName)) {
      if (resourceName) {
        const ns = getNamespace(resourceName);
        let names = this.requiresCore.get(ns);
        if (!names) {
          names = new Set();
          this.requiresCore.set(ns, names);
        }
        names.add(typeName);
      }
      return typeName;
    }
    let err = `could not resolve name "${typeName}"`;
    if (resourceName) {
      err += `from namespace "${resourceName}"`;
    }
    throw new Error(err);
  }
}

function getNamespace(name: string): string {
  const index = name.lastIndexOf("::");
  if (index < 0) {
    return "";
  }
  return name.slice(0, index);
}

function getResourceName(name: string): string {
  const index = name.indexOf(".");
  if (index < 0) {
    return "";
  }
  return name.slice(0, index);
}
