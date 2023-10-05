import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Organizations::Account
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-account.html | AWS::Organizations::Account}
 */
export interface OrganizationsAccountProps {
  RoleName?: string;
  Email: string;
  ParentIds?: any[];
  Tags?: Tag[];
  AccountName: string;
}
/**
 * Attributes type definition for AWS::Organizations::Account
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-account.html | AWS::Organizations::Account}
 */
export interface OrganizationsAccountAttribs {
  JoinedMethod?: string;
  Status?: string;
  JoinedTimestamp?: string;
  AccountId?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::Organizations::Account
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-account.html | AWS::Organizations::Account}
 */
export class OrganizationsAccount extends ResourceBase<
  "AWS::Organizations::Account",
  OrganizationsAccountProps,
  OrganizationsAccountAttribs
> {
  public static readonly Type = "AWS::Organizations::Account";
  public static readonly AttributeNames: readonly (keyof OrganizationsAccountAttribs)[] =
    ["JoinedMethod", "Status", "JoinedTimestamp", "AccountId", "Arn"];
  constructor(
    logicalId: string,
    properties: OrganizationsAccountProps,
    options?: ResourceOptions,
  ) {
    super(
      OrganizationsAccount.Type,
      OrganizationsAccount.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Organizations::Organization
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-organization.html | AWS::Organizations::Organization}
 */
export interface OrganizationsOrganizationProps {
  FeatureSet?: string;
}
/**
 * Attributes type definition for AWS::Organizations::Organization
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-organization.html | AWS::Organizations::Organization}
 */
export interface OrganizationsOrganizationAttribs {
  RootId?: string;
  Id?: string;
  Arn?: string;
  ManagementAccountArn?: string;
  ManagementAccountId?: string;
  ManagementAccountEmail?: string;
}
/**
 * Resource class for AWS::Organizations::Organization
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-organization.html | AWS::Organizations::Organization}
 */
export class OrganizationsOrganization extends ResourceBase<
  "AWS::Organizations::Organization",
  OrganizationsOrganizationProps,
  OrganizationsOrganizationAttribs
> {
  public static readonly Type = "AWS::Organizations::Organization";
  public static readonly AttributeNames: readonly (keyof OrganizationsOrganizationAttribs)[] =
    [
      "RootId",
      "Id",
      "Arn",
      "ManagementAccountArn",
      "ManagementAccountId",
      "ManagementAccountEmail",
    ];
  constructor(
    logicalId: string,
    properties: OrganizationsOrganizationProps,
    options?: ResourceOptions,
  ) {
    super(
      OrganizationsOrganization.Type,
      OrganizationsOrganization.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Organizations::OrganizationalUnit
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-organizationalunit.html | AWS::Organizations::OrganizationalUnit}
 */
export interface OrganizationsOrganizationalUnitProps {
  ParentId: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::Organizations::OrganizationalUnit
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-organizationalunit.html | AWS::Organizations::OrganizationalUnit}
 */
export interface OrganizationsOrganizationalUnitAttribs {
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::Organizations::OrganizationalUnit
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-organizationalunit.html | AWS::Organizations::OrganizationalUnit}
 */
export class OrganizationsOrganizationalUnit extends ResourceBase<
  "AWS::Organizations::OrganizationalUnit",
  OrganizationsOrganizationalUnitProps,
  OrganizationsOrganizationalUnitAttribs
> {
  public static readonly Type = "AWS::Organizations::OrganizationalUnit";
  public static readonly AttributeNames: readonly (keyof OrganizationsOrganizationalUnitAttribs)[] =
    ["Id", "Arn"];
  constructor(
    logicalId: string,
    properties: OrganizationsOrganizationalUnitProps,
    options?: ResourceOptions,
  ) {
    super(
      OrganizationsOrganizationalUnit.Type,
      OrganizationsOrganizationalUnit.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Organizations::Policy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-policy.html | AWS::Organizations::Policy}
 */
export interface OrganizationsPolicyProps {
  Type: string;
  TargetIds?: any[];
  Description?: string;
  Content: object;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::Organizations::Policy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-policy.html | AWS::Organizations::Policy}
 */
export interface OrganizationsPolicyAttribs {
  Id?: string;
  Arn?: string;
  AwsManaged?: boolean;
}
/**
 * Resource class for AWS::Organizations::Policy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-policy.html | AWS::Organizations::Policy}
 */
export class OrganizationsPolicy extends ResourceBase<
  "AWS::Organizations::Policy",
  OrganizationsPolicyProps,
  OrganizationsPolicyAttribs
> {
  public static readonly Type = "AWS::Organizations::Policy";
  public static readonly AttributeNames: readonly (keyof OrganizationsPolicyAttribs)[] =
    ["Id", "Arn", "AwsManaged"];
  constructor(
    logicalId: string,
    properties: OrganizationsPolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      OrganizationsPolicy.Type,
      OrganizationsPolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Organizations::ResourcePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-resourcepolicy.html | AWS::Organizations::ResourcePolicy}
 */
export interface OrganizationsResourcePolicyProps {
  Content: object;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::Organizations::ResourcePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-resourcepolicy.html | AWS::Organizations::ResourcePolicy}
 */
export interface OrganizationsResourcePolicyAttribs {
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::Organizations::ResourcePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-resourcepolicy.html | AWS::Organizations::ResourcePolicy}
 */
export class OrganizationsResourcePolicy extends ResourceBase<
  "AWS::Organizations::ResourcePolicy",
  OrganizationsResourcePolicyProps,
  OrganizationsResourcePolicyAttribs
> {
  public static readonly Type = "AWS::Organizations::ResourcePolicy";
  public static readonly AttributeNames: readonly (keyof OrganizationsResourcePolicyAttribs)[] =
    ["Id", "Arn"];
  constructor(
    logicalId: string,
    properties: OrganizationsResourcePolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      OrganizationsResourcePolicy.Type,
      OrganizationsResourcePolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
