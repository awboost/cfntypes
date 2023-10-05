import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::SSO::InstanceAccessControlAttributeConfiguration.AccessControlAttribute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-instanceaccesscontrolattributeconfiguration-accesscontrolattribute.html | AWS::SSO::InstanceAccessControlAttributeConfiguration.AccessControlAttribute}
 */
export interface SSOInstanceAccessControlAttributeConfigurationAccessControlAttribute {
  Value: SSOInstanceAccessControlAttributeConfigurationAccessControlAttributeValue;
  Key: string;
}
/**
 * Type definition for AWS::SSO::InstanceAccessControlAttributeConfiguration.AccessControlAttributeValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-instanceaccesscontrolattributeconfiguration-accesscontrolattributevalue.html | AWS::SSO::InstanceAccessControlAttributeConfiguration.AccessControlAttributeValue}
 */
export interface SSOInstanceAccessControlAttributeConfigurationAccessControlAttributeValue {
  Source: any[];
}
/**
 * Type definition for AWS::SSO::PermissionSet.CustomerManagedPolicyReference
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-customermanagedpolicyreference.html | AWS::SSO::PermissionSet.CustomerManagedPolicyReference}
 */
export interface SSOPermissionSetCustomerManagedPolicyReference {
  Path?: string;
  Name: string;
}
/**
 * Type definition for AWS::SSO::PermissionSet.PermissionsBoundary
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-permissionsboundary.html | AWS::SSO::PermissionSet.PermissionsBoundary}
 */
export interface SSOPermissionSetPermissionsBoundary {
  CustomerManagedPolicyReference?: SSOPermissionSetCustomerManagedPolicyReference;
  ManagedPolicyArn?: string;
}
/**
 * Type definition for AWS::SSO::Assignment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-assignment.html | AWS::SSO::Assignment}
 */
export interface SSOAssignmentProps {
  PrincipalId: string;
  InstanceArn: string;
  TargetType: string;
  PermissionSetArn: string;
  PrincipalType: string;
  TargetId: string;
}
/**
 * Resource class for AWS::SSO::Assignment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-assignment.html | AWS::SSO::Assignment}
 */
export class SSOAssignment extends ResourceBase<
  "AWS::SSO::Assignment",
  SSOAssignmentProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::SSO::Assignment";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: SSOAssignmentProps,
    options?: ResourceOptions,
  ) {
    super(
      SSOAssignment.Type,
      SSOAssignment.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SSO::InstanceAccessControlAttributeConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-instanceaccesscontrolattributeconfiguration.html | AWS::SSO::InstanceAccessControlAttributeConfiguration}
 */
export interface SSOInstanceAccessControlAttributeConfigurationProps {
  InstanceArn: string;
  AccessControlAttributes?: any[];
}
/**
 * Resource class for AWS::SSO::InstanceAccessControlAttributeConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-instanceaccesscontrolattributeconfiguration.html | AWS::SSO::InstanceAccessControlAttributeConfiguration}
 */
export class SSOInstanceAccessControlAttributeConfiguration extends ResourceBase<
  "AWS::SSO::InstanceAccessControlAttributeConfiguration",
  SSOInstanceAccessControlAttributeConfigurationProps,
  Record<string, never>
> {
  public static readonly Type =
    "AWS::SSO::InstanceAccessControlAttributeConfiguration";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: SSOInstanceAccessControlAttributeConfigurationProps,
    options?: ResourceOptions,
  ) {
    super(
      SSOInstanceAccessControlAttributeConfiguration.Type,
      SSOInstanceAccessControlAttributeConfiguration.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SSO::PermissionSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-permissionset.html | AWS::SSO::PermissionSet}
 */
export interface SSOPermissionSetProps {
  RelayStateType?: string;
  CustomerManagedPolicyReferences?: any[];
  SessionDuration?: string;
  Description?: string;
  InstanceArn: string;
  InlinePolicy?: object;
  ManagedPolicies?: any[];
  Tags?: Tag[];
  Name: string;
  PermissionsBoundary?: SSOPermissionSetPermissionsBoundary;
}
/**
 * Attributes type definition for AWS::SSO::PermissionSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-permissionset.html | AWS::SSO::PermissionSet}
 */
export interface SSOPermissionSetAttribs {
  PermissionSetArn?: string;
}
/**
 * Resource class for AWS::SSO::PermissionSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-permissionset.html | AWS::SSO::PermissionSet}
 */
export class SSOPermissionSet extends ResourceBase<
  "AWS::SSO::PermissionSet",
  SSOPermissionSetProps,
  SSOPermissionSetAttribs
> {
  public static readonly Type = "AWS::SSO::PermissionSet";
  public static readonly AttributeNames: readonly (keyof SSOPermissionSetAttribs)[] =
    ["PermissionSetArn"];
  constructor(
    logicalId: string,
    properties: SSOPermissionSetProps,
    options?: ResourceOptions,
  ) {
    super(
      SSOPermissionSet.Type,
      SSOPermissionSet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
