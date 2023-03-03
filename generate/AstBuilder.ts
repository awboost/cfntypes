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
} from '@awboost/cfnspec';
import ts from 'typescript';
import { inspect } from 'util';
import { getNamespace } from './util/getNamespace.js';
import { attachJsDocComment } from './util/makeJsDocComment.js';
import { makePrimitiveTypeNode } from './util/makePrimitiveTypeNode.js';
import { makeSpecialTypeNode } from './util/makeSpecialTypeNode.js';
import { mangleName, NameType } from './util/mangleName.js';
import { quoteName } from './util/quoteName.js';
import { hasProperty, RequiredBy } from './util/types.js';

const Names = {
  AttributeNamesConst: 'AttributeNames',
  AttributeNamesForUtil: 'AttributesFor',
  AttributeNamesType: 'AttributeNameMap',
  AttributeTypeForUtil: 'AttributeTypeFor',
  ResourceNamesConst: 'ResourceType',
  ResourceNameType: 'ResourceType',
  ResourceToAttributeTypeMap: 'AttributeTypes',
  ResourceTypeMap: 'ResourceTypes',
  VersionConst: 'ResourceSpecificationVersion',
};

export class AstBuilder {
  private readonly attributes: ts.PropertyAssignment[] = [];
  private readonly attributeTypes: ts.PropertySignature[] = [];
  private readonly interfaces: ts.Statement[] = [];
  private readonly propertyTypes: Set<string>;
  private readonly resourceTypeNames: ts.PropertyAssignment[] = [];
  private readonly resourceTypes: ts.PropertySignature[] = [];

  constructor(private readonly spec: CloudFormationSpec) {
    this.propertyTypes = new Set(Object.keys(spec.PropertyTypes));
  }

  public build(): ts.SourceFile {
    // property types
    for (const [fullName, def] of Object.entries(this.spec.PropertyTypes)) {
      this.buildPropertyType(fullName, def);
    }

    // resources
    for (const [fullName, def] of Object.entries(this.spec.ResourceTypes)) {
      this.buildResourceType(fullName, def);
    }

    return ts.factory.createSourceFile(
      [
        this.makeVersionConst(),
        ...this.interfaces,
        this.makeResourceTypeMap(),
        this.makeResourceToAttributeTypeMap(),
        this.makeAttributeTypeForUtil('types'),
        this.makeAttributeTypeForUtil('names'),
        this.makeResourceAttributeMapType(),
        this.makeResourceNamesConst(),
        this.makeAttributeNamesConst(),
        this.makeResourceNameType(),
      ],
      ts.factory.createToken(ts.SyntaxKind.EndOfFileToken),
      ts.NodeFlags.None,
    );
  }

  private buildPropertyType(fullName: string, def: PropertyType): void {
    const ns = getNamespace(fullName);
    let statement: ts.Statement;

    if (isObjectPropertyType(def)) {
      statement = this.makeObjectTypeAlias(fullName, def, ns, NameType.Type);
    } else {
      statement = ts.factory.createTypeAliasDeclaration(
        [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
        mangleName(fullName, NameType.Type),
        undefined,
        this.makeTypeNode(def, ns),
      );
    }

    this.interfaces.push(
      attachJsDocComment(
        statement,
        `Type definition for ${fullName}`,
        def.Documentation,
        fullName,
      ),
    );
  }

  private buildResourceType(fullName: string, def: ResourceType): void {
    const mangledName = mangleName(fullName, NameType.Resource);

    this.resourceTypeNames.push(
      ts.factory.createPropertyAssignment(
        mangledName,
        ts.factory.createStringLiteral(fullName),
      ),
    );
    this.resourceTypes.push(
      ts.factory.createPropertySignature(
        undefined,
        ts.factory.createStringLiteral(fullName),
        undefined,
        ts.factory.createTypeReferenceNode(mangledName),
      ),
    );
    this.interfaces.push(
      attachJsDocComment(
        this.makeObjectTypeAlias(fullName, def, fullName, NameType.Resource),
        `Type definition for ${fullName}`,
        def.Documentation,
        fullName,
      ),
    );
    this.buildResourceAttributeNames(fullName, def);

    if (hasProperty(def, 'Attributes')) {
      this.buildResourceAttributes(fullName, def);
    }
  }

  private buildResourceAttributes(
    resourceName: string,
    resource: RequiredBy<ResourceType, 'Attributes'>,
  ): void {
    this.attributeTypes.push(
      ts.factory.createPropertySignature(
        undefined,
        ts.factory.createStringLiteral(resourceName),
        undefined,
        ts.factory.createTypeReferenceNode(
          mangleName(resourceName, NameType.Attributes),
        ),
      ),
    );
    this.interfaces.push(
      attachJsDocComment(
        this.makeObjectTypeAlias(
          resourceName,
          { Properties: resource.Attributes },
          resourceName,
          NameType.Attributes,
        ),
        `Attributes type definition for ${resourceName}`,
        resource.Documentation,
        resourceName,
      ),
    );
  }

  private buildResourceAttributeNames(
    resourceName: string,
    resource: ResourceType,
  ): void {
    const attributes = resource.Attributes
      ? Object.keys(resource.Attributes)
      : [];

    this.attributes.push(
      ts.factory.createPropertyAssignment(
        ts.factory.createStringLiteral(resourceName),
        ts.factory.createArrayLiteralExpression(
          attributes.map((attr) => ts.factory.createStringLiteral(attr)),
        ),
      ),
    );
  }

  private makeAttributeNamesConst(): ts.Statement {
    return ts.factory.createVariableStatement(
      [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      ts.factory.createVariableDeclarationList(
        [
          ts.factory.createVariableDeclaration(
            Names.AttributeNamesConst,
            undefined,
            ts.factory.createTypeReferenceNode(Names.AttributeNamesType),
            ts.factory.createObjectLiteralExpression(this.attributes, true),
          ),
        ],
        ts.NodeFlags.Const,
      ),
    );
  }

  private makeResourceToAttributeTypeMap(): ts.InterfaceDeclaration {
    return ts.factory.createInterfaceDeclaration(
      [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      Names.ResourceToAttributeTypeMap,
      undefined,
      undefined,
      this.attributeTypes,
    );
  }

  private makeResourceAttributeMapType(): ts.TypeAliasDeclaration {
    return ts.factory.createTypeAliasDeclaration(
      [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
      Names.AttributeNamesType,
      undefined,
      ts.factory.createMappedTypeNode(
        undefined,
        ts.factory.createTypeParameterDeclaration(
          undefined,
          ts.factory.createIdentifier('K'),
          ts.factory.createTypeReferenceNode(
            ts.factory.createIdentifier(Names.ResourceNameType),
          ),
          undefined,
        ),
        undefined,
        undefined,
        ts.factory.createArrayTypeNode(
          ts.factory.createParenthesizedType(
            ts.factory.createTypeReferenceNode(
              ts.factory.createIdentifier('AttributesFor'),
              [
                ts.factory.createTypeReferenceNode(
                  ts.factory.createIdentifier('K'),
                  undefined,
                ),
              ],
            ),
          ),
        ),
        undefined,
      ),
    );
  }

  private makeResourceNamesConst(): ts.Statement {
    return ts.factory.createVariableStatement(
      [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      ts.factory.createVariableDeclarationList(
        [
          ts.factory.createVariableDeclaration(
            Names.ResourceNamesConst,
            undefined,
            undefined,
            ts.factory.createAsExpression(
              ts.factory.createObjectLiteralExpression(
                this.resourceTypeNames,
                true,
              ),
              ts.factory.createTypeReferenceNode('const'),
            ),
          ),
        ],
        ts.NodeFlags.Const,
      ),
    );
  }

  private makeResourceNameType(): ts.TypeAliasDeclaration {
    return ts.factory.createTypeAliasDeclaration(
      [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      Names.ResourceNameType,
      undefined,
      ts.factory.createIndexedAccessTypeNode(
        ts.factory.createTypeQueryNode(
          ts.factory.createIdentifier(Names.ResourceNamesConst),
        ),
        ts.factory.createTypeOperatorNode(
          ts.SyntaxKind.KeyOfKeyword,
          ts.factory.createTypeQueryNode(
            ts.factory.createIdentifier(Names.ResourceNamesConst),
          ),
        ),
      ),
    );
  }

  private makeResourceTypeMap(): ts.InterfaceDeclaration {
    return ts.factory.createInterfaceDeclaration(
      [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      Names.ResourceTypeMap,
      undefined,
      undefined,
      this.resourceTypes,
    );
  }

  private makeAttributeTypeForUtil(
    type: 'types' | 'names',
  ): ts.TypeAliasDeclaration {
    const indexNode = ts.factory.createIndexedAccessTypeNode(
      ts.factory.createTypeReferenceNode(Names.ResourceToAttributeTypeMap),
      ts.factory.createTypeReferenceNode('T'),
    );
    return ts.factory.createTypeAliasDeclaration(
      [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      type === 'names'
        ? Names.AttributeNamesForUtil
        : Names.AttributeTypeForUtil,
      [
        ts.factory.createTypeParameterDeclaration(
          [],
          'T',
          ts.factory.createTypeReferenceNode(Names.ResourceNameType),
        ),
      ],
      ts.factory.createConditionalTypeNode(
        ts.factory.createTypeReferenceNode('T'),
        ts.factory.createTypeOperatorNode(
          ts.SyntaxKind.KeyOfKeyword,
          ts.factory.createTypeReferenceNode(Names.ResourceToAttributeTypeMap),
        ),
        type === 'names'
          ? ts.factory.createTypeOperatorNode(
              ts.SyntaxKind.KeyOfKeyword,
              indexNode,
            )
          : indexNode,
        ts.factory.createKeywordTypeNode(ts.SyntaxKind.NeverKeyword),
      ),
    );
  }

  private makeVersionConst(): ts.Statement {
    return ts.factory.createVariableStatement(
      [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      ts.factory.createVariableDeclarationList(
        [
          ts.factory.createVariableDeclaration(
            Names.VersionConst,
            undefined,
            undefined,
            ts.factory.createStringLiteral(
              this.spec.ResourceSpecificationVersion,
            ),
          ),
        ],
        ts.NodeFlags.Const,
      ),
    );
  }

  private makeTypeNode(type: TypeAlias, ns: string): ts.TypeNode {
    if (isPrimitiveTypeAlias(type)) {
      return makePrimitiveTypeNode(type.PrimitiveType);
    } else if (isNonPrimitiveSpecialTypeAlias(type)) {
      return makeSpecialTypeNode(
        type.Type,
        ts.factory.createTypeReferenceNode(
          mangleName(this.resolveType(type.ItemType, ns), NameType.Type),
        ),
      );
    } else if (isPrimitiveSpecialTypeAlias(type)) {
      return makeSpecialTypeNode(
        type.Type,
        makePrimitiveTypeNode(type.PrimitiveItemType),
      );
    } else if ('Type' in type && isSpecialType(type.Type)) {
      // no item type has been provided
      return makeSpecialTypeNode(
        type.Type,
        ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword),
      );
    } else if (isNonPrimitiveTypeAlias(type)) {
      return ts.factory.createTypeReferenceNode(
        mangleName(this.resolveType(type.Type, ns), NameType.Type),
      );
    }
    throw new Error(`unable to process type node ` + inspect(type));
  }

  private makeObjectTypeAlias(
    name: string,
    def: ObjectTypeDef,
    ns: string,
    type: NameType,
  ): ts.InterfaceDeclaration {
    return ts.factory.createInterfaceDeclaration(
      [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      mangleName(name, type),
      undefined,
      undefined,
      Object.entries(def.Properties).map(([name, type]) =>
        ts.factory.createPropertySignature(
          undefined,
          quoteName(name),
          type.Required
            ? undefined
            : ts.factory.createToken(ts.SyntaxKind.QuestionToken),
          this.makeTypeNode(type, ns),
        ),
      ),
    );
  }

  private resolveType(name: string, ns: string): string {
    if (ns) {
      const fullName = `${ns}.${name}`;
      if (this.propertyTypes.has(fullName)) {
        return fullName;
      }
    }
    if (this.propertyTypes.has(name)) {
      return name;
    }
    let err = `could not resolve name '${name}'`;
    if (ns) {
      err += `from namespace ${ns}`;
    }
    throw new Error(err);
  }
}
