import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::ResourceExplorer2::View.Filters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourceexplorer2-view-filters.html | AWS::ResourceExplorer2::View.Filters}
 */
export interface ResourceExplorer2ViewFilters {
  FilterString: string;
}
/**
 * Type definition for AWS::ResourceExplorer2::View.IncludedProperty
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourceexplorer2-view-includedproperty.html | AWS::ResourceExplorer2::View.IncludedProperty}
 */
export interface ResourceExplorer2ViewIncludedProperty {
  Name: string;
}
/**
 * Type definition for AWS::ResourceExplorer2::DefaultViewAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourceexplorer2-defaultviewassociation.html | AWS::ResourceExplorer2::DefaultViewAssociation}
 */
export interface ResourceExplorer2DefaultViewAssociationProps {
  ViewArn: string;
}
/**
 * Attributes type definition for AWS::ResourceExplorer2::DefaultViewAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourceexplorer2-defaultviewassociation.html | AWS::ResourceExplorer2::DefaultViewAssociation}
 */
export interface ResourceExplorer2DefaultViewAssociationAttribs {
  AssociatedAwsPrincipal?: string;
}
/**
 * Resource class for AWS::ResourceExplorer2::DefaultViewAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourceexplorer2-defaultviewassociation.html | AWS::ResourceExplorer2::DefaultViewAssociation}
 */
export class ResourceExplorer2DefaultViewAssociation extends ResourceBase<
  "AWS::ResourceExplorer2::DefaultViewAssociation",
  ResourceExplorer2DefaultViewAssociationProps,
  ResourceExplorer2DefaultViewAssociationAttribs
> {
  public static readonly Type =
    "AWS::ResourceExplorer2::DefaultViewAssociation";
  public static readonly AttributeNames: readonly (keyof ResourceExplorer2DefaultViewAssociationAttribs)[] =
    ["AssociatedAwsPrincipal"];
  constructor(
    logicalId: string,
    properties: ResourceExplorer2DefaultViewAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      ResourceExplorer2DefaultViewAssociation.Type,
      ResourceExplorer2DefaultViewAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ResourceExplorer2::Index
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourceexplorer2-index.html | AWS::ResourceExplorer2::Index}
 */
export interface ResourceExplorer2IndexProps {
  Type: string;
  Tags?: Record<string, Tag>;
}
/**
 * Attributes type definition for AWS::ResourceExplorer2::Index
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourceexplorer2-index.html | AWS::ResourceExplorer2::Index}
 */
export interface ResourceExplorer2IndexAttribs {
  Arn?: string;
  IndexState?: string;
}
/**
 * Resource class for AWS::ResourceExplorer2::Index
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourceexplorer2-index.html | AWS::ResourceExplorer2::Index}
 */
export class ResourceExplorer2Index extends ResourceBase<
  "AWS::ResourceExplorer2::Index",
  ResourceExplorer2IndexProps,
  ResourceExplorer2IndexAttribs
> {
  public static readonly Type = "AWS::ResourceExplorer2::Index";
  public static readonly AttributeNames: readonly (keyof ResourceExplorer2IndexAttribs)[] =
    ["Arn", "IndexState"];
  constructor(
    logicalId: string,
    properties: ResourceExplorer2IndexProps,
    options?: ResourceOptions,
  ) {
    super(
      ResourceExplorer2Index.Type,
      ResourceExplorer2Index.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ResourceExplorer2::View
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourceexplorer2-view.html | AWS::ResourceExplorer2::View}
 */
export interface ResourceExplorer2ViewProps {
  Filters?: ResourceExplorer2ViewFilters;
  IncludedProperties?: any[];
  Tags?: Record<string, Tag>;
  ViewName: string;
}
/**
 * Attributes type definition for AWS::ResourceExplorer2::View
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourceexplorer2-view.html | AWS::ResourceExplorer2::View}
 */
export interface ResourceExplorer2ViewAttribs {
  ViewArn?: string;
}
/**
 * Resource class for AWS::ResourceExplorer2::View
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourceexplorer2-view.html | AWS::ResourceExplorer2::View}
 */
export class ResourceExplorer2View extends ResourceBase<
  "AWS::ResourceExplorer2::View",
  ResourceExplorer2ViewProps,
  ResourceExplorer2ViewAttribs
> {
  public static readonly Type = "AWS::ResourceExplorer2::View";
  public static readonly AttributeNames: readonly (keyof ResourceExplorer2ViewAttribs)[] =
    ["ViewArn"];
  constructor(
    logicalId: string,
    properties: ResourceExplorer2ViewProps,
    options?: ResourceOptions,
  ) {
    super(
      ResourceExplorer2View.Type,
      ResourceExplorer2View.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
