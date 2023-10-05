import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::VerifiedPermissions::IdentitySource.CognitoUserPoolConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-cognitouserpoolconfiguration.html | AWS::VerifiedPermissions::IdentitySource.CognitoUserPoolConfiguration}
 */
export interface VerifiedPermissionsIdentitySourceCognitoUserPoolConfiguration {
  UserPoolArn: string;
  ClientIds?: any[];
}
/**
 * Type definition for AWS::VerifiedPermissions::IdentitySource.IdentitySourceConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-identitysourceconfiguration.html | AWS::VerifiedPermissions::IdentitySource.IdentitySourceConfiguration}
 */
export interface VerifiedPermissionsIdentitySourceIdentitySourceConfiguration {
  CognitoUserPoolConfiguration: VerifiedPermissionsIdentitySourceCognitoUserPoolConfiguration;
}
/**
 * Type definition for AWS::VerifiedPermissions::IdentitySource.IdentitySourceDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-identitysourcedetails.html | AWS::VerifiedPermissions::IdentitySource.IdentitySourceDetails}
 */
export interface VerifiedPermissionsIdentitySourceIdentitySourceDetails {
  DiscoveryUrl?: string;
  UserPoolArn?: string;
  OpenIdIssuer?: string;
  ClientIds?: any[];
}
/**
 * Type definition for AWS::VerifiedPermissions::Policy.EntityIdentifier
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-policy-entityidentifier.html | AWS::VerifiedPermissions::Policy.EntityIdentifier}
 */
export interface VerifiedPermissionsPolicyEntityIdentifier {
  EntityType: string;
  EntityId: string;
}
/**
 * Type definition for AWS::VerifiedPermissions::Policy.PolicyDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-policy-policydefinition.html | AWS::VerifiedPermissions::Policy.PolicyDefinition}
 */
export interface VerifiedPermissionsPolicyPolicyDefinition {
  Static?: VerifiedPermissionsPolicyStaticPolicyDefinition;
  TemplateLinked?: VerifiedPermissionsPolicyTemplateLinkedPolicyDefinition;
}
/**
 * Type definition for AWS::VerifiedPermissions::Policy.StaticPolicyDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-policy-staticpolicydefinition.html | AWS::VerifiedPermissions::Policy.StaticPolicyDefinition}
 */
export interface VerifiedPermissionsPolicyStaticPolicyDefinition {
  Description?: string;
  Statement: string;
}
/**
 * Type definition for AWS::VerifiedPermissions::Policy.TemplateLinkedPolicyDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-policy-templatelinkedpolicydefinition.html | AWS::VerifiedPermissions::Policy.TemplateLinkedPolicyDefinition}
 */
export interface VerifiedPermissionsPolicyTemplateLinkedPolicyDefinition {
  Resource?: VerifiedPermissionsPolicyEntityIdentifier;
  PolicyTemplateId: string;
  Principal?: VerifiedPermissionsPolicyEntityIdentifier;
}
/**
 * Type definition for AWS::VerifiedPermissions::PolicyStore.SchemaDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-policystore-schemadefinition.html | AWS::VerifiedPermissions::PolicyStore.SchemaDefinition}
 */
export interface VerifiedPermissionsPolicyStoreSchemaDefinition {
  CedarJson?: string;
}
/**
 * Type definition for AWS::VerifiedPermissions::PolicyStore.ValidationSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-policystore-validationsettings.html | AWS::VerifiedPermissions::PolicyStore.ValidationSettings}
 */
export interface VerifiedPermissionsPolicyStoreValidationSettings {
  Mode: string;
}
/**
 * Type definition for AWS::VerifiedPermissions::IdentitySource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-identitysource.html | AWS::VerifiedPermissions::IdentitySource}
 */
export interface VerifiedPermissionsIdentitySourceProps {
  PrincipalEntityType?: string;
  Configuration: VerifiedPermissionsIdentitySourceIdentitySourceConfiguration;
  PolicyStoreId?: string;
}
/**
 * Attributes type definition for AWS::VerifiedPermissions::IdentitySource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-identitysource.html | AWS::VerifiedPermissions::IdentitySource}
 */
export interface VerifiedPermissionsIdentitySourceAttribs {
  "Details.DiscoveryUrl"?: string;
  Details?: VerifiedPermissionsIdentitySourceIdentitySourceDetails;
  "Details.ClientIds"?: any[];
  "Details.UserPoolArn"?: string;
  "Details.OpenIdIssuer"?: string;
  IdentitySourceId?: string;
}
/**
 * Resource class for AWS::VerifiedPermissions::IdentitySource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-identitysource.html | AWS::VerifiedPermissions::IdentitySource}
 */
export class VerifiedPermissionsIdentitySource extends ResourceBase<
  "AWS::VerifiedPermissions::IdentitySource",
  VerifiedPermissionsIdentitySourceProps,
  VerifiedPermissionsIdentitySourceAttribs
> {
  public static readonly Type = "AWS::VerifiedPermissions::IdentitySource";
  public static readonly AttributeNames: readonly (keyof VerifiedPermissionsIdentitySourceAttribs)[] =
    [
      "Details.DiscoveryUrl",
      "Details",
      "Details.ClientIds",
      "Details.UserPoolArn",
      "Details.OpenIdIssuer",
      "IdentitySourceId",
    ];
  constructor(
    logicalId: string,
    properties: VerifiedPermissionsIdentitySourceProps,
    options?: ResourceOptions,
  ) {
    super(
      VerifiedPermissionsIdentitySource.Type,
      VerifiedPermissionsIdentitySource.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::VerifiedPermissions::Policy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policy.html | AWS::VerifiedPermissions::Policy}
 */
export interface VerifiedPermissionsPolicyProps {
  Definition: VerifiedPermissionsPolicyPolicyDefinition;
  PolicyStoreId?: string;
}
/**
 * Attributes type definition for AWS::VerifiedPermissions::Policy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policy.html | AWS::VerifiedPermissions::Policy}
 */
export interface VerifiedPermissionsPolicyAttribs {
  PolicyType?: string;
  PolicyId?: string;
}
/**
 * Resource class for AWS::VerifiedPermissions::Policy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policy.html | AWS::VerifiedPermissions::Policy}
 */
export class VerifiedPermissionsPolicy extends ResourceBase<
  "AWS::VerifiedPermissions::Policy",
  VerifiedPermissionsPolicyProps,
  VerifiedPermissionsPolicyAttribs
> {
  public static readonly Type = "AWS::VerifiedPermissions::Policy";
  public static readonly AttributeNames: readonly (keyof VerifiedPermissionsPolicyAttribs)[] =
    ["PolicyType", "PolicyId"];
  constructor(
    logicalId: string,
    properties: VerifiedPermissionsPolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      VerifiedPermissionsPolicy.Type,
      VerifiedPermissionsPolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::VerifiedPermissions::PolicyStore
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policystore.html | AWS::VerifiedPermissions::PolicyStore}
 */
export interface VerifiedPermissionsPolicyStoreProps {
  ValidationSettings: VerifiedPermissionsPolicyStoreValidationSettings;
  Schema?: VerifiedPermissionsPolicyStoreSchemaDefinition;
}
/**
 * Attributes type definition for AWS::VerifiedPermissions::PolicyStore
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policystore.html | AWS::VerifiedPermissions::PolicyStore}
 */
export interface VerifiedPermissionsPolicyStoreAttribs {
  PolicyStoreId?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::VerifiedPermissions::PolicyStore
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policystore.html | AWS::VerifiedPermissions::PolicyStore}
 */
export class VerifiedPermissionsPolicyStore extends ResourceBase<
  "AWS::VerifiedPermissions::PolicyStore",
  VerifiedPermissionsPolicyStoreProps,
  VerifiedPermissionsPolicyStoreAttribs
> {
  public static readonly Type = "AWS::VerifiedPermissions::PolicyStore";
  public static readonly AttributeNames: readonly (keyof VerifiedPermissionsPolicyStoreAttribs)[] =
    ["PolicyStoreId", "Arn"];
  constructor(
    logicalId: string,
    properties: VerifiedPermissionsPolicyStoreProps,
    options?: ResourceOptions,
  ) {
    super(
      VerifiedPermissionsPolicyStore.Type,
      VerifiedPermissionsPolicyStore.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::VerifiedPermissions::PolicyTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policytemplate.html | AWS::VerifiedPermissions::PolicyTemplate}
 */
export interface VerifiedPermissionsPolicyTemplateProps {
  Description?: string;
  Statement: string;
  PolicyStoreId?: string;
}
/**
 * Attributes type definition for AWS::VerifiedPermissions::PolicyTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policytemplate.html | AWS::VerifiedPermissions::PolicyTemplate}
 */
export interface VerifiedPermissionsPolicyTemplateAttribs {
  PolicyTemplateId?: string;
}
/**
 * Resource class for AWS::VerifiedPermissions::PolicyTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policytemplate.html | AWS::VerifiedPermissions::PolicyTemplate}
 */
export class VerifiedPermissionsPolicyTemplate extends ResourceBase<
  "AWS::VerifiedPermissions::PolicyTemplate",
  VerifiedPermissionsPolicyTemplateProps,
  VerifiedPermissionsPolicyTemplateAttribs
> {
  public static readonly Type = "AWS::VerifiedPermissions::PolicyTemplate";
  public static readonly AttributeNames: readonly (keyof VerifiedPermissionsPolicyTemplateAttribs)[] =
    ["PolicyTemplateId"];
  constructor(
    logicalId: string,
    properties: VerifiedPermissionsPolicyTemplateProps,
    options?: ResourceOptions,
  ) {
    super(
      VerifiedPermissionsPolicyTemplate.Type,
      VerifiedPermissionsPolicyTemplate.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
