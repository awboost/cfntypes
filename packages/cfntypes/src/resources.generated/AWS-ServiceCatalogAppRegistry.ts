import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::ServiceCatalogAppRegistry::Application
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-application.html | AWS::ServiceCatalogAppRegistry::Application}
 */
export interface ServiceCatalogAppRegistryApplicationProps {
  Description?: string;
  Tags?: Record<string, Tag>;
  Name: string;
}
/**
 * Attributes type definition for AWS::ServiceCatalogAppRegistry::Application
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-application.html | AWS::ServiceCatalogAppRegistry::Application}
 */
export interface ServiceCatalogAppRegistryApplicationAttribs {
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::ServiceCatalogAppRegistry::Application
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-application.html | AWS::ServiceCatalogAppRegistry::Application}
 */
export class ServiceCatalogAppRegistryApplication extends ResourceBase<
  "AWS::ServiceCatalogAppRegistry::Application",
  ServiceCatalogAppRegistryApplicationProps,
  ServiceCatalogAppRegistryApplicationAttribs
> {
  public static readonly Type = "AWS::ServiceCatalogAppRegistry::Application";
  public static readonly AttributeNames: readonly (keyof ServiceCatalogAppRegistryApplicationAttribs)[] =
    ["Id", "Arn"];
  constructor(
    logicalId: string,
    properties: ServiceCatalogAppRegistryApplicationProps,
    options?: ResourceOptions,
  ) {
    super(
      ServiceCatalogAppRegistryApplication.Type,
      ServiceCatalogAppRegistryApplication.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ServiceCatalogAppRegistry::AttributeGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroup.html | AWS::ServiceCatalogAppRegistry::AttributeGroup}
 */
export interface ServiceCatalogAppRegistryAttributeGroupProps {
  Description?: string;
  Attributes: object;
  Tags?: Record<string, Tag>;
  Name: string;
}
/**
 * Attributes type definition for AWS::ServiceCatalogAppRegistry::AttributeGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroup.html | AWS::ServiceCatalogAppRegistry::AttributeGroup}
 */
export interface ServiceCatalogAppRegistryAttributeGroupAttribs {
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::ServiceCatalogAppRegistry::AttributeGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroup.html | AWS::ServiceCatalogAppRegistry::AttributeGroup}
 */
export class ServiceCatalogAppRegistryAttributeGroup extends ResourceBase<
  "AWS::ServiceCatalogAppRegistry::AttributeGroup",
  ServiceCatalogAppRegistryAttributeGroupProps,
  ServiceCatalogAppRegistryAttributeGroupAttribs
> {
  public static readonly Type =
    "AWS::ServiceCatalogAppRegistry::AttributeGroup";
  public static readonly AttributeNames: readonly (keyof ServiceCatalogAppRegistryAttributeGroupAttribs)[] =
    ["Id", "Arn"];
  constructor(
    logicalId: string,
    properties: ServiceCatalogAppRegistryAttributeGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      ServiceCatalogAppRegistryAttributeGroup.Type,
      ServiceCatalogAppRegistryAttributeGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ServiceCatalogAppRegistry::AttributeGroupAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroupassociation.html | AWS::ServiceCatalogAppRegistry::AttributeGroupAssociation}
 */
export interface ServiceCatalogAppRegistryAttributeGroupAssociationProps {
  AttributeGroup: string;
  Application: string;
}
/**
 * Attributes type definition for AWS::ServiceCatalogAppRegistry::AttributeGroupAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroupassociation.html | AWS::ServiceCatalogAppRegistry::AttributeGroupAssociation}
 */
export interface ServiceCatalogAppRegistryAttributeGroupAssociationAttribs {
  ApplicationArn?: string;
  AttributeGroupArn?: string;
}
/**
 * Resource class for AWS::ServiceCatalogAppRegistry::AttributeGroupAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroupassociation.html | AWS::ServiceCatalogAppRegistry::AttributeGroupAssociation}
 */
export class ServiceCatalogAppRegistryAttributeGroupAssociation extends ResourceBase<
  "AWS::ServiceCatalogAppRegistry::AttributeGroupAssociation",
  ServiceCatalogAppRegistryAttributeGroupAssociationProps,
  ServiceCatalogAppRegistryAttributeGroupAssociationAttribs
> {
  public static readonly Type =
    "AWS::ServiceCatalogAppRegistry::AttributeGroupAssociation";
  public static readonly AttributeNames: readonly (keyof ServiceCatalogAppRegistryAttributeGroupAssociationAttribs)[] =
    ["ApplicationArn", "AttributeGroupArn"];
  constructor(
    logicalId: string,
    properties: ServiceCatalogAppRegistryAttributeGroupAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      ServiceCatalogAppRegistryAttributeGroupAssociation.Type,
      ServiceCatalogAppRegistryAttributeGroupAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ServiceCatalogAppRegistry::ResourceAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-resourceassociation.html | AWS::ServiceCatalogAppRegistry::ResourceAssociation}
 */
export interface ServiceCatalogAppRegistryResourceAssociationProps {
  Resource: string;
  ResourceType: string;
  Application: string;
}
/**
 * Attributes type definition for AWS::ServiceCatalogAppRegistry::ResourceAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-resourceassociation.html | AWS::ServiceCatalogAppRegistry::ResourceAssociation}
 */
export interface ServiceCatalogAppRegistryResourceAssociationAttribs {
  ResourceArn?: string;
  ApplicationArn?: string;
}
/**
 * Resource class for AWS::ServiceCatalogAppRegistry::ResourceAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-resourceassociation.html | AWS::ServiceCatalogAppRegistry::ResourceAssociation}
 */
export class ServiceCatalogAppRegistryResourceAssociation extends ResourceBase<
  "AWS::ServiceCatalogAppRegistry::ResourceAssociation",
  ServiceCatalogAppRegistryResourceAssociationProps,
  ServiceCatalogAppRegistryResourceAssociationAttribs
> {
  public static readonly Type =
    "AWS::ServiceCatalogAppRegistry::ResourceAssociation";
  public static readonly AttributeNames: readonly (keyof ServiceCatalogAppRegistryResourceAssociationAttribs)[] =
    ["ResourceArn", "ApplicationArn"];
  constructor(
    logicalId: string,
    properties: ServiceCatalogAppRegistryResourceAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      ServiceCatalogAppRegistryResourceAssociation.Type,
      ServiceCatalogAppRegistryResourceAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
