import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::EKS::Cluster.ClusterLogging
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-clusterlogging.html | AWS::EKS::Cluster.ClusterLogging}
 */
export interface EKSClusterClusterLogging {
  EnabledTypes?: any[];
}
/**
 * Type definition for AWS::EKS::Cluster.ControlPlanePlacement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-controlplaneplacement.html | AWS::EKS::Cluster.ControlPlanePlacement}
 */
export interface EKSClusterControlPlanePlacement {
  GroupName?: string;
}
/**
 * Type definition for AWS::EKS::Cluster.EncryptionConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-encryptionconfig.html | AWS::EKS::Cluster.EncryptionConfig}
 */
export interface EKSClusterEncryptionConfig {
  Resources?: any[];
  Provider?: EKSClusterProvider;
}
/**
 * Type definition for AWS::EKS::Cluster.KubernetesNetworkConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-kubernetesnetworkconfig.html | AWS::EKS::Cluster.KubernetesNetworkConfig}
 */
export interface EKSClusterKubernetesNetworkConfig {
  ServiceIpv4Cidr?: string;
  ServiceIpv6Cidr?: string;
  IpFamily?: string;
}
/**
 * Type definition for AWS::EKS::Cluster.Logging
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-logging.html | AWS::EKS::Cluster.Logging}
 */
export interface EKSClusterLogging {
  ClusterLogging?: EKSClusterClusterLogging;
}
/**
 * Type definition for AWS::EKS::Cluster.LoggingTypeConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-loggingtypeconfig.html | AWS::EKS::Cluster.LoggingTypeConfig}
 */
export interface EKSClusterLoggingTypeConfig {
  Type?: string;
}
/**
 * Type definition for AWS::EKS::Cluster.OutpostConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-outpostconfig.html | AWS::EKS::Cluster.OutpostConfig}
 */
export interface EKSClusterOutpostConfig {
  OutpostArns: any[];
  ControlPlanePlacement?: EKSClusterControlPlanePlacement;
  ControlPlaneInstanceType: string;
}
/**
 * Type definition for AWS::EKS::Cluster.Provider
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-provider.html | AWS::EKS::Cluster.Provider}
 */
export interface EKSClusterProvider {
  KeyArn?: string;
}
/**
 * Type definition for AWS::EKS::Cluster.ResourcesVpcConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-resourcesvpcconfig.html | AWS::EKS::Cluster.ResourcesVpcConfig}
 */
export interface EKSClusterResourcesVpcConfig {
  EndpointPublicAccess?: boolean;
  PublicAccessCidrs?: any[];
  EndpointPrivateAccess?: boolean;
  SecurityGroupIds?: any[];
  SubnetIds: any[];
}
/**
 * Type definition for AWS::EKS::FargateProfile.Label
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-fargateprofile-label.html | AWS::EKS::FargateProfile.Label}
 */
export interface EKSFargateProfileLabel {
  Value: string;
  Key: string;
}
/**
 * Type definition for AWS::EKS::FargateProfile.Selector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-fargateprofile-selector.html | AWS::EKS::FargateProfile.Selector}
 */
export interface EKSFargateProfileSelector {
  Labels?: any[];
  Namespace: string;
}
/**
 * Type definition for AWS::EKS::IdentityProviderConfig.OidcIdentityProviderConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-identityproviderconfig-oidcidentityproviderconfig.html | AWS::EKS::IdentityProviderConfig.OidcIdentityProviderConfig}
 */
export interface EKSIdentityProviderConfigOidcIdentityProviderConfig {
  UsernamePrefix?: string;
  GroupsPrefix?: string;
  IssuerUrl: string;
  RequiredClaims?: any[];
  ClientId: string;
  GroupsClaim?: string;
  UsernameClaim?: string;
}
/**
 * Type definition for AWS::EKS::IdentityProviderConfig.RequiredClaim
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-identityproviderconfig-requiredclaim.html | AWS::EKS::IdentityProviderConfig.RequiredClaim}
 */
export interface EKSIdentityProviderConfigRequiredClaim {
  Value: string;
  Key: string;
}
/**
 * Type definition for AWS::EKS::Nodegroup.LaunchTemplateSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-launchtemplatespecification.html | AWS::EKS::Nodegroup.LaunchTemplateSpecification}
 */
export interface EKSNodegroupLaunchTemplateSpecification {
  Version?: string;
  Id?: string;
  Name?: string;
}
/**
 * Type definition for AWS::EKS::Nodegroup.RemoteAccess
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-remoteaccess.html | AWS::EKS::Nodegroup.RemoteAccess}
 */
export interface EKSNodegroupRemoteAccess {
  SourceSecurityGroups?: any[];
  Ec2SshKey: string;
}
/**
 * Type definition for AWS::EKS::Nodegroup.ScalingConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-scalingconfig.html | AWS::EKS::Nodegroup.ScalingConfig}
 */
export interface EKSNodegroupScalingConfig {
  MinSize?: number;
  DesiredSize?: number;
  MaxSize?: number;
}
/**
 * Type definition for AWS::EKS::Nodegroup.Taint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-taint.html | AWS::EKS::Nodegroup.Taint}
 */
export interface EKSNodegroupTaint {
  Value?: string;
  Effect?: string;
  Key?: string;
}
/**
 * Type definition for AWS::EKS::Nodegroup.UpdateConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-updateconfig.html | AWS::EKS::Nodegroup.UpdateConfig}
 */
export interface EKSNodegroupUpdateConfig {
  MaxUnavailablePercentage?: number;
  MaxUnavailable?: number;
}
/**
 * Type definition for AWS::EKS::Addon
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-addon.html | AWS::EKS::Addon}
 */
export interface EKSAddonProps {
  PreserveOnDelete?: boolean;
  AddonVersion?: string;
  ServiceAccountRoleArn?: string;
  ClusterName: string;
  AddonName: string;
  ResolveConflicts?: string;
  Tags?: Tag[];
  ConfigurationValues?: string;
}
/**
 * Attributes type definition for AWS::EKS::Addon
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-addon.html | AWS::EKS::Addon}
 */
export interface EKSAddonAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::EKS::Addon
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-addon.html | AWS::EKS::Addon}
 */
export class EKSAddon extends ResourceBase<
  "AWS::EKS::Addon",
  EKSAddonProps,
  EKSAddonAttribs
> {
  public static readonly Type = "AWS::EKS::Addon";
  public static readonly AttributeNames: readonly (keyof EKSAddonAttribs)[] = [
    "Arn",
  ];
  constructor(
    logicalId: string,
    properties: EKSAddonProps,
    options?: ResourceOptions,
  ) {
    super(
      EKSAddon.Type,
      EKSAddon.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EKS::Cluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html | AWS::EKS::Cluster}
 */
export interface EKSClusterProps {
  Logging?: EKSClusterLogging;
  Version?: string;
  OutpostConfig?: EKSClusterOutpostConfig;
  EncryptionConfig?: any[];
  KubernetesNetworkConfig?: EKSClusterKubernetesNetworkConfig;
  RoleArn: string;
  ResourcesVpcConfig: EKSClusterResourcesVpcConfig;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::EKS::Cluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html | AWS::EKS::Cluster}
 */
export interface EKSClusterAttribs {
  Endpoint?: string;
  ClusterSecurityGroupId?: string;
  EncryptionConfigKeyArn?: string;
  Id?: string;
  CertificateAuthorityData?: string;
  Arn?: string;
  "KubernetesNetworkConfig.ServiceIpv6Cidr"?: string;
  OpenIdConnectIssuerUrl?: string;
}
/**
 * Resource class for AWS::EKS::Cluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html | AWS::EKS::Cluster}
 */
export class EKSCluster extends ResourceBase<
  "AWS::EKS::Cluster",
  EKSClusterProps,
  EKSClusterAttribs
> {
  public static readonly Type = "AWS::EKS::Cluster";
  public static readonly AttributeNames: readonly (keyof EKSClusterAttribs)[] =
    [
      "Endpoint",
      "ClusterSecurityGroupId",
      "EncryptionConfigKeyArn",
      "Id",
      "CertificateAuthorityData",
      "Arn",
      "KubernetesNetworkConfig.ServiceIpv6Cidr",
      "OpenIdConnectIssuerUrl",
    ];
  constructor(
    logicalId: string,
    properties: EKSClusterProps,
    options?: ResourceOptions,
  ) {
    super(
      EKSCluster.Type,
      EKSCluster.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EKS::FargateProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-fargateprofile.html | AWS::EKS::FargateProfile}
 */
export interface EKSFargateProfileProps {
  Subnets?: any[];
  FargateProfileName?: string;
  ClusterName: string;
  PodExecutionRoleArn: string;
  Selectors: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EKS::FargateProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-fargateprofile.html | AWS::EKS::FargateProfile}
 */
export interface EKSFargateProfileAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::EKS::FargateProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-fargateprofile.html | AWS::EKS::FargateProfile}
 */
export class EKSFargateProfile extends ResourceBase<
  "AWS::EKS::FargateProfile",
  EKSFargateProfileProps,
  EKSFargateProfileAttribs
> {
  public static readonly Type = "AWS::EKS::FargateProfile";
  public static readonly AttributeNames: readonly (keyof EKSFargateProfileAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: EKSFargateProfileProps,
    options?: ResourceOptions,
  ) {
    super(
      EKSFargateProfile.Type,
      EKSFargateProfile.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EKS::IdentityProviderConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-identityproviderconfig.html | AWS::EKS::IdentityProviderConfig}
 */
export interface EKSIdentityProviderConfigProps {
  Type: string;
  ClusterName: string;
  IdentityProviderConfigName?: string;
  Oidc?: EKSIdentityProviderConfigOidcIdentityProviderConfig;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EKS::IdentityProviderConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-identityproviderconfig.html | AWS::EKS::IdentityProviderConfig}
 */
export interface EKSIdentityProviderConfigAttribs {
  IdentityProviderConfigArn?: string;
}
/**
 * Resource class for AWS::EKS::IdentityProviderConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-identityproviderconfig.html | AWS::EKS::IdentityProviderConfig}
 */
export class EKSIdentityProviderConfig extends ResourceBase<
  "AWS::EKS::IdentityProviderConfig",
  EKSIdentityProviderConfigProps,
  EKSIdentityProviderConfigAttribs
> {
  public static readonly Type = "AWS::EKS::IdentityProviderConfig";
  public static readonly AttributeNames: readonly (keyof EKSIdentityProviderConfigAttribs)[] =
    ["IdentityProviderConfigArn"];
  constructor(
    logicalId: string,
    properties: EKSIdentityProviderConfigProps,
    options?: ResourceOptions,
  ) {
    super(
      EKSIdentityProviderConfig.Type,
      EKSIdentityProviderConfig.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EKS::Nodegroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html | AWS::EKS::Nodegroup}
 */
export interface EKSNodegroupProps {
  UpdateConfig?: EKSNodegroupUpdateConfig;
  ScalingConfig?: EKSNodegroupScalingConfig;
  Labels?: Record<string, any>;
  Taints?: any[];
  CapacityType?: string;
  ReleaseVersion?: string;
  NodegroupName?: string;
  NodeRole: string;
  Subnets: any[];
  AmiType?: string;
  ForceUpdateEnabled?: boolean;
  Version?: string;
  LaunchTemplate?: EKSNodegroupLaunchTemplateSpecification;
  RemoteAccess?: EKSNodegroupRemoteAccess;
  DiskSize?: number;
  ClusterName: string;
  InstanceTypes?: any[];
  Tags?: Record<string, Tag>;
}
/**
 * Attributes type definition for AWS::EKS::Nodegroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html | AWS::EKS::Nodegroup}
 */
export interface EKSNodegroupAttribs {
  NodegroupName?: string;
  ClusterName?: string;
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::EKS::Nodegroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html | AWS::EKS::Nodegroup}
 */
export class EKSNodegroup extends ResourceBase<
  "AWS::EKS::Nodegroup",
  EKSNodegroupProps,
  EKSNodegroupAttribs
> {
  public static readonly Type = "AWS::EKS::Nodegroup";
  public static readonly AttributeNames: readonly (keyof EKSNodegroupAttribs)[] =
    ["NodegroupName", "ClusterName", "Id", "Arn"];
  constructor(
    logicalId: string,
    properties: EKSNodegroupProps,
    options?: ResourceOptions,
  ) {
    super(
      EKSNodegroup.Type,
      EKSNodegroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
