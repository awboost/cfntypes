import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::IAM::Group.Policy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group-policy.html | AWS::IAM::Group.Policy}
 */
export interface IAMGroupPolicy {
  PolicyName: string;
  PolicyDocument: object;
}
/**
 * Type definition for AWS::IAM::Role.Policy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-role-policy.html | AWS::IAM::Role.Policy}
 */
export interface IAMRolePolicy {
  PolicyName: string;
  PolicyDocument: object;
}
/**
 * Type definition for AWS::IAM::User.LoginProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user-loginprofile.html | AWS::IAM::User.LoginProfile}
 */
export interface IAMUserLoginProfile {
  Password: string;
  PasswordResetRequired?: boolean;
}
/**
 * Type definition for AWS::IAM::User.Policy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html | AWS::IAM::User.Policy}
 */
export interface IAMUserPolicy {
  PolicyDocument: object;
  PolicyName: string;
}
/**
 * Type definition for AWS::IAM::AccessKey
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html | AWS::IAM::AccessKey}
 */
export interface IAMAccessKeyProps {
  Serial?: number;
  Status?: string;
  UserName: string;
}
/**
 * Attributes type definition for AWS::IAM::AccessKey
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html | AWS::IAM::AccessKey}
 */
export interface IAMAccessKeyAttribs {
  SecretAccessKey?: string;
}
/**
 * Resource class for AWS::IAM::AccessKey
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html | AWS::IAM::AccessKey}
 */
export class IAMAccessKey extends ResourceBase<
  "AWS::IAM::AccessKey",
  IAMAccessKeyProps,
  IAMAccessKeyAttribs
> {
  public static readonly Type = "AWS::IAM::AccessKey";
  public static readonly AttributeNames: readonly (keyof IAMAccessKeyAttribs)[] =
    ["SecretAccessKey"];
  constructor(
    logicalId: string,
    properties: IAMAccessKeyProps,
    options?: ResourceOptions,
  ) {
    super(
      IAMAccessKey.Type,
      IAMAccessKey.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IAM::Group
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-group.html | AWS::IAM::Group}
 */
export interface IAMGroupProps {
  GroupName?: string;
  Path?: string;
  ManagedPolicyArns?: any[];
  Policies?: any[];
}
/**
 * Attributes type definition for AWS::IAM::Group
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-group.html | AWS::IAM::Group}
 */
export interface IAMGroupAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::IAM::Group
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-group.html | AWS::IAM::Group}
 */
export class IAMGroup extends ResourceBase<
  "AWS::IAM::Group",
  IAMGroupProps,
  IAMGroupAttribs
> {
  public static readonly Type = "AWS::IAM::Group";
  public static readonly AttributeNames: readonly (keyof IAMGroupAttribs)[] = [
    "Arn",
  ];
  constructor(
    logicalId: string,
    properties: IAMGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      IAMGroup.Type,
      IAMGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IAM::GroupPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-grouppolicy.html | AWS::IAM::GroupPolicy}
 */
export interface IAMGroupPolicyProps {
  GroupName: string;
  PolicyName: string;
  PolicyDocument?: object;
}
/**
 * Resource class for AWS::IAM::GroupPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-grouppolicy.html | AWS::IAM::GroupPolicy}
 */
export class IAMGroupPolicy extends ResourceBase<
  "AWS::IAM::GroupPolicy",
  IAMGroupPolicyProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::IAM::GroupPolicy";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: IAMGroupPolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      IAMGroupPolicy.Type,
      IAMGroupPolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IAM::InstanceProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html | AWS::IAM::InstanceProfile}
 */
export interface IAMInstanceProfileProps {
  Path?: string;
  InstanceProfileName?: string;
  Roles: any[];
}
/**
 * Attributes type definition for AWS::IAM::InstanceProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html | AWS::IAM::InstanceProfile}
 */
export interface IAMInstanceProfileAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::IAM::InstanceProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html | AWS::IAM::InstanceProfile}
 */
export class IAMInstanceProfile extends ResourceBase<
  "AWS::IAM::InstanceProfile",
  IAMInstanceProfileProps,
  IAMInstanceProfileAttribs
> {
  public static readonly Type = "AWS::IAM::InstanceProfile";
  public static readonly AttributeNames: readonly (keyof IAMInstanceProfileAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: IAMInstanceProfileProps,
    options?: ResourceOptions,
  ) {
    super(
      IAMInstanceProfile.Type,
      IAMInstanceProfile.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IAM::ManagedPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-managedpolicy.html | AWS::IAM::ManagedPolicy}
 */
export interface IAMManagedPolicyProps {
  ManagedPolicyName?: string;
  Path?: string;
  Description?: string;
  Groups?: any[];
  PolicyDocument: object;
  Roles?: any[];
  Users?: any[];
}
/**
 * Attributes type definition for AWS::IAM::ManagedPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-managedpolicy.html | AWS::IAM::ManagedPolicy}
 */
export interface IAMManagedPolicyAttribs {
  IsAttachable?: boolean;
  UpdateDate?: string;
  PermissionsBoundaryUsageCount?: number;
  AttachmentCount?: number;
  PolicyArn?: string;
  DefaultVersionId?: string;
  CreateDate?: string;
  PolicyId?: string;
}
/**
 * Resource class for AWS::IAM::ManagedPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-managedpolicy.html | AWS::IAM::ManagedPolicy}
 */
export class IAMManagedPolicy extends ResourceBase<
  "AWS::IAM::ManagedPolicy",
  IAMManagedPolicyProps,
  IAMManagedPolicyAttribs
> {
  public static readonly Type = "AWS::IAM::ManagedPolicy";
  public static readonly AttributeNames: readonly (keyof IAMManagedPolicyAttribs)[] =
    [
      "IsAttachable",
      "UpdateDate",
      "PermissionsBoundaryUsageCount",
      "AttachmentCount",
      "PolicyArn",
      "DefaultVersionId",
      "CreateDate",
      "PolicyId",
    ];
  constructor(
    logicalId: string,
    properties: IAMManagedPolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      IAMManagedPolicy.Type,
      IAMManagedPolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IAM::OIDCProvider
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-oidcprovider.html | AWS::IAM::OIDCProvider}
 */
export interface IAMOIDCProviderProps {
  ClientIdList?: any[];
  ThumbprintList: any[];
  Url?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::IAM::OIDCProvider
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-oidcprovider.html | AWS::IAM::OIDCProvider}
 */
export interface IAMOIDCProviderAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::IAM::OIDCProvider
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-oidcprovider.html | AWS::IAM::OIDCProvider}
 */
export class IAMOIDCProvider extends ResourceBase<
  "AWS::IAM::OIDCProvider",
  IAMOIDCProviderProps,
  IAMOIDCProviderAttribs
> {
  public static readonly Type = "AWS::IAM::OIDCProvider";
  public static readonly AttributeNames: readonly (keyof IAMOIDCProviderAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: IAMOIDCProviderProps,
    options?: ResourceOptions,
  ) {
    super(
      IAMOIDCProvider.Type,
      IAMOIDCProvider.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IAM::Policy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html | AWS::IAM::Policy}
 */
export interface IAMPolicyProps {
  Groups?: any[];
  PolicyName: string;
  PolicyDocument: object;
  Roles?: any[];
  Users?: any[];
}
/**
 * Attributes type definition for AWS::IAM::Policy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html | AWS::IAM::Policy}
 */
export interface IAMPolicyAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::IAM::Policy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html | AWS::IAM::Policy}
 */
export class IAMPolicy extends ResourceBase<
  "AWS::IAM::Policy",
  IAMPolicyProps,
  IAMPolicyAttribs
> {
  public static readonly Type = "AWS::IAM::Policy";
  public static readonly AttributeNames: readonly (keyof IAMPolicyAttribs)[] = [
    "Id",
  ];
  constructor(
    logicalId: string,
    properties: IAMPolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      IAMPolicy.Type,
      IAMPolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IAM::Role
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html | AWS::IAM::Role}
 */
export interface IAMRoleProps {
  Path?: string;
  ManagedPolicyArns?: any[];
  MaxSessionDuration?: number;
  RoleName?: string;
  Description?: string;
  Policies?: any[];
  AssumeRolePolicyDocument: object;
  Tags?: Tag[];
  PermissionsBoundary?: string;
}
/**
 * Attributes type definition for AWS::IAM::Role
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html | AWS::IAM::Role}
 */
export interface IAMRoleAttribs {
  Arn?: string;
  RoleId?: string;
}
/**
 * Resource class for AWS::IAM::Role
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html | AWS::IAM::Role}
 */
export class IAMRole extends ResourceBase<
  "AWS::IAM::Role",
  IAMRoleProps,
  IAMRoleAttribs
> {
  public static readonly Type = "AWS::IAM::Role";
  public static readonly AttributeNames: readonly (keyof IAMRoleAttribs)[] = [
    "Arn",
    "RoleId",
  ];
  constructor(
    logicalId: string,
    properties: IAMRoleProps,
    options?: ResourceOptions,
  ) {
    super(IAMRole.Type, IAMRole.AttributeNames, logicalId, properties, options);
  }
}
/**
 * Type definition for AWS::IAM::RolePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-rolepolicy.html | AWS::IAM::RolePolicy}
 */
export interface IAMRolePolicyProps {
  RoleName: string;
  PolicyName: string;
  PolicyDocument?: object;
}
/**
 * Resource class for AWS::IAM::RolePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-rolepolicy.html | AWS::IAM::RolePolicy}
 */
export class IAMRolePolicy extends ResourceBase<
  "AWS::IAM::RolePolicy",
  IAMRolePolicyProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::IAM::RolePolicy";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: IAMRolePolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      IAMRolePolicy.Type,
      IAMRolePolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IAM::SAMLProvider
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-samlprovider.html | AWS::IAM::SAMLProvider}
 */
export interface IAMSAMLProviderProps {
  SamlMetadataDocument: string;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::IAM::SAMLProvider
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-samlprovider.html | AWS::IAM::SAMLProvider}
 */
export interface IAMSAMLProviderAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::IAM::SAMLProvider
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-samlprovider.html | AWS::IAM::SAMLProvider}
 */
export class IAMSAMLProvider extends ResourceBase<
  "AWS::IAM::SAMLProvider",
  IAMSAMLProviderProps,
  IAMSAMLProviderAttribs
> {
  public static readonly Type = "AWS::IAM::SAMLProvider";
  public static readonly AttributeNames: readonly (keyof IAMSAMLProviderAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: IAMSAMLProviderProps,
    options?: ResourceOptions,
  ) {
    super(
      IAMSAMLProvider.Type,
      IAMSAMLProvider.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IAM::ServerCertificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-servercertificate.html | AWS::IAM::ServerCertificate}
 */
export interface IAMServerCertificateProps {
  CertificateBody?: string;
  Path?: string;
  PrivateKey?: string;
  CertificateChain?: string;
  ServerCertificateName?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::IAM::ServerCertificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-servercertificate.html | AWS::IAM::ServerCertificate}
 */
export interface IAMServerCertificateAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::IAM::ServerCertificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-servercertificate.html | AWS::IAM::ServerCertificate}
 */
export class IAMServerCertificate extends ResourceBase<
  "AWS::IAM::ServerCertificate",
  IAMServerCertificateProps,
  IAMServerCertificateAttribs
> {
  public static readonly Type = "AWS::IAM::ServerCertificate";
  public static readonly AttributeNames: readonly (keyof IAMServerCertificateAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: IAMServerCertificateProps,
    options?: ResourceOptions,
  ) {
    super(
      IAMServerCertificate.Type,
      IAMServerCertificate.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IAM::ServiceLinkedRole
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-servicelinkedrole.html | AWS::IAM::ServiceLinkedRole}
 */
export interface IAMServiceLinkedRoleProps {
  CustomSuffix?: string;
  Description?: string;
  AWSServiceName?: string;
}
/**
 * Attributes type definition for AWS::IAM::ServiceLinkedRole
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-servicelinkedrole.html | AWS::IAM::ServiceLinkedRole}
 */
export interface IAMServiceLinkedRoleAttribs {
  RoleName?: string;
}
/**
 * Resource class for AWS::IAM::ServiceLinkedRole
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-servicelinkedrole.html | AWS::IAM::ServiceLinkedRole}
 */
export class IAMServiceLinkedRole extends ResourceBase<
  "AWS::IAM::ServiceLinkedRole",
  IAMServiceLinkedRoleProps,
  IAMServiceLinkedRoleAttribs
> {
  public static readonly Type = "AWS::IAM::ServiceLinkedRole";
  public static readonly AttributeNames: readonly (keyof IAMServiceLinkedRoleAttribs)[] =
    ["RoleName"];
  constructor(
    logicalId: string,
    properties: IAMServiceLinkedRoleProps,
    options?: ResourceOptions,
  ) {
    super(
      IAMServiceLinkedRole.Type,
      IAMServiceLinkedRole.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IAM::User
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html | AWS::IAM::User}
 */
export interface IAMUserProps {
  Groups?: any[];
  LoginProfile?: IAMUserLoginProfile;
  ManagedPolicyArns?: any[];
  Path?: string;
  PermissionsBoundary?: string;
  Policies?: any[];
  Tags?: Tag[];
  UserName?: string;
}
/**
 * Attributes type definition for AWS::IAM::User
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html | AWS::IAM::User}
 */
export interface IAMUserAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::IAM::User
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html | AWS::IAM::User}
 */
export class IAMUser extends ResourceBase<
  "AWS::IAM::User",
  IAMUserProps,
  IAMUserAttribs
> {
  public static readonly Type = "AWS::IAM::User";
  public static readonly AttributeNames: readonly (keyof IAMUserAttribs)[] = [
    "Arn",
  ];
  constructor(
    logicalId: string,
    properties: IAMUserProps,
    options?: ResourceOptions,
  ) {
    super(IAMUser.Type, IAMUser.AttributeNames, logicalId, properties, options);
  }
}
/**
 * Type definition for AWS::IAM::UserPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-userpolicy.html | AWS::IAM::UserPolicy}
 */
export interface IAMUserPolicyProps {
  UserName: string;
  PolicyName: string;
  PolicyDocument?: object;
}
/**
 * Resource class for AWS::IAM::UserPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-userpolicy.html | AWS::IAM::UserPolicy}
 */
export class IAMUserPolicy extends ResourceBase<
  "AWS::IAM::UserPolicy",
  IAMUserPolicyProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::IAM::UserPolicy";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: IAMUserPolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      IAMUserPolicy.Type,
      IAMUserPolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IAM::UserToGroupAddition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html | AWS::IAM::UserToGroupAddition}
 */
export interface IAMUserToGroupAdditionProps {
  GroupName: string;
  Users: any[];
}
/**
 * Resource class for AWS::IAM::UserToGroupAddition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html | AWS::IAM::UserToGroupAddition}
 */
export class IAMUserToGroupAddition extends ResourceBase<
  "AWS::IAM::UserToGroupAddition",
  IAMUserToGroupAdditionProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::IAM::UserToGroupAddition";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: IAMUserToGroupAdditionProps,
    options?: ResourceOptions,
  ) {
    super(
      IAMUserToGroupAddition.Type,
      IAMUserToGroupAddition.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IAM::VirtualMFADevice
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-virtualmfadevice.html | AWS::IAM::VirtualMFADevice}
 */
export interface IAMVirtualMFADeviceProps {
  Path?: string;
  VirtualMfaDeviceName?: string;
  Users: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::IAM::VirtualMFADevice
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-virtualmfadevice.html | AWS::IAM::VirtualMFADevice}
 */
export interface IAMVirtualMFADeviceAttribs {
  SerialNumber?: string;
}
/**
 * Resource class for AWS::IAM::VirtualMFADevice
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-virtualmfadevice.html | AWS::IAM::VirtualMFADevice}
 */
export class IAMVirtualMFADevice extends ResourceBase<
  "AWS::IAM::VirtualMFADevice",
  IAMVirtualMFADeviceProps,
  IAMVirtualMFADeviceAttribs
> {
  public static readonly Type = "AWS::IAM::VirtualMFADevice";
  public static readonly AttributeNames: readonly (keyof IAMVirtualMFADeviceAttribs)[] =
    ["SerialNumber"];
  constructor(
    logicalId: string,
    properties: IAMVirtualMFADeviceProps,
    options?: ResourceOptions,
  ) {
    super(
      IAMVirtualMFADevice.Type,
      IAMVirtualMFADevice.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
