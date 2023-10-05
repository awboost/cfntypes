import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::ResourceGroups::Group.ConfigurationItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourcegroups-group-configurationitem.html | AWS::ResourceGroups::Group.ConfigurationItem}
 */
export interface ResourceGroupsGroupConfigurationItem {
  Type?: string;
  Parameters?: any[];
}
/**
 * Type definition for AWS::ResourceGroups::Group.ConfigurationParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourcegroups-group-configurationparameter.html | AWS::ResourceGroups::Group.ConfigurationParameter}
 */
export interface ResourceGroupsGroupConfigurationParameter {
  Values?: any[];
  Name?: string;
}
/**
 * Type definition for AWS::ResourceGroups::Group.Query
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourcegroups-group-query.html | AWS::ResourceGroups::Group.Query}
 */
export interface ResourceGroupsGroupQuery {
  TagFilters?: any[];
  ResourceTypeFilters?: any[];
  StackIdentifier?: string;
}
/**
 * Type definition for AWS::ResourceGroups::Group.ResourceQuery
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourcegroups-group-resourcequery.html | AWS::ResourceGroups::Group.ResourceQuery}
 */
export interface ResourceGroupsGroupResourceQuery {
  Type?: string;
  Query?: ResourceGroupsGroupQuery;
}
/**
 * Type definition for AWS::ResourceGroups::Group.TagFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourcegroups-group-tagfilter.html | AWS::ResourceGroups::Group.TagFilter}
 */
export interface ResourceGroupsGroupTagFilter {
  Values?: any[];
  Key?: string;
}
/**
 * Type definition for AWS::ResourceGroups::Group
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html | AWS::ResourceGroups::Group}
 */
export interface ResourceGroupsGroupProps {
  Description?: string;
  Configuration?: any[];
  ResourceQuery?: ResourceGroupsGroupResourceQuery;
  Resources?: any[];
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::ResourceGroups::Group
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html | AWS::ResourceGroups::Group}
 */
export interface ResourceGroupsGroupAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::ResourceGroups::Group
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html | AWS::ResourceGroups::Group}
 */
export class ResourceGroupsGroup extends ResourceBase<
  "AWS::ResourceGroups::Group",
  ResourceGroupsGroupProps,
  ResourceGroupsGroupAttribs
> {
  public static readonly Type = "AWS::ResourceGroups::Group";
  public static readonly AttributeNames: readonly (keyof ResourceGroupsGroupAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: ResourceGroupsGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      ResourceGroupsGroup.Type,
      ResourceGroupsGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
