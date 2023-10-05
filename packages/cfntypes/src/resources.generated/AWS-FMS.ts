import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::FMS::Policy.IEMap
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-iemap.html | AWS::FMS::Policy.IEMap}
 */
export interface FMSPolicyIEMap {
  ACCOUNT?: any[];
  ORGUNIT?: any[];
}
/**
 * Type definition for AWS::FMS::Policy.NetworkFirewallPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-networkfirewallpolicy.html | AWS::FMS::Policy.NetworkFirewallPolicy}
 */
export interface FMSPolicyNetworkFirewallPolicy {
  FirewallDeploymentModel: string;
}
/**
 * Type definition for AWS::FMS::Policy.PolicyOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-policyoption.html | AWS::FMS::Policy.PolicyOption}
 */
export interface FMSPolicyPolicyOption {
  NetworkFirewallPolicy?: FMSPolicyNetworkFirewallPolicy;
  ThirdPartyFirewallPolicy?: FMSPolicyThirdPartyFirewallPolicy;
}
/**
 * Type definition for AWS::FMS::Policy.PolicyTag
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-policytag.html | AWS::FMS::Policy.PolicyTag}
 */
export interface FMSPolicyPolicyTag {
  Value: string;
  Key: string;
}
/**
 * Type definition for AWS::FMS::Policy.ResourceTag
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-resourcetag.html | AWS::FMS::Policy.ResourceTag}
 */
export interface FMSPolicyResourceTag {
  Value?: string;
  Key: string;
}
/**
 * Type definition for AWS::FMS::Policy.SecurityServicePolicyData
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-securityservicepolicydata.html | AWS::FMS::Policy.SecurityServicePolicyData}
 */
export interface FMSPolicySecurityServicePolicyData {
  ManagedServiceData?: string;
  Type: string;
  PolicyOption?: FMSPolicyPolicyOption;
}
/**
 * Type definition for AWS::FMS::Policy.ThirdPartyFirewallPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-thirdpartyfirewallpolicy.html | AWS::FMS::Policy.ThirdPartyFirewallPolicy}
 */
export interface FMSPolicyThirdPartyFirewallPolicy {
  FirewallDeploymentModel: string;
}
/**
 * Type definition for AWS::FMS::NotificationChannel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-notificationchannel.html | AWS::FMS::NotificationChannel}
 */
export interface FMSNotificationChannelProps {
  SnsTopicArn: string;
  SnsRoleName: string;
}
/**
 * Resource class for AWS::FMS::NotificationChannel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-notificationchannel.html | AWS::FMS::NotificationChannel}
 */
export class FMSNotificationChannel extends ResourceBase<
  "AWS::FMS::NotificationChannel",
  FMSNotificationChannelProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::FMS::NotificationChannel";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: FMSNotificationChannelProps,
    options?: ResourceOptions,
  ) {
    super(
      FMSNotificationChannel.Type,
      FMSNotificationChannel.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::FMS::Policy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html | AWS::FMS::Policy}
 */
export interface FMSPolicyProps {
  ResourcesCleanUp?: boolean;
  ResourceTags?: any[];
  ExcludeResourceTags: boolean;
  ResourceType?: string;
  ResourceSetIds?: any[];
  SecurityServicePolicyData: FMSPolicySecurityServicePolicyData;
  RemediationEnabled: boolean;
  DeleteAllPolicyResources?: boolean;
  ExcludeMap?: FMSPolicyIEMap;
  IncludeMap?: FMSPolicyIEMap;
  PolicyDescription?: string;
  PolicyName: string;
  ResourceTypeList?: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::FMS::Policy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html | AWS::FMS::Policy}
 */
export interface FMSPolicyAttribs {
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::FMS::Policy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html | AWS::FMS::Policy}
 */
export class FMSPolicy extends ResourceBase<
  "AWS::FMS::Policy",
  FMSPolicyProps,
  FMSPolicyAttribs
> {
  public static readonly Type = "AWS::FMS::Policy";
  public static readonly AttributeNames: readonly (keyof FMSPolicyAttribs)[] = [
    "Id",
    "Arn",
  ];
  constructor(
    logicalId: string,
    properties: FMSPolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      FMSPolicy.Type,
      FMSPolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::FMS::ResourceSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-resourceset.html | AWS::FMS::ResourceSet}
 */
export interface FMSResourceSetProps {
  Description?: string;
  ResourceTypeList: any[];
  Resources?: any[];
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::FMS::ResourceSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-resourceset.html | AWS::FMS::ResourceSet}
 */
export interface FMSResourceSetAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::FMS::ResourceSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-resourceset.html | AWS::FMS::ResourceSet}
 */
export class FMSResourceSet extends ResourceBase<
  "AWS::FMS::ResourceSet",
  FMSResourceSetProps,
  FMSResourceSetAttribs
> {
  public static readonly Type = "AWS::FMS::ResourceSet";
  public static readonly AttributeNames: readonly (keyof FMSResourceSetAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: FMSResourceSetProps,
    options?: ResourceOptions,
  ) {
    super(
      FMSResourceSet.Type,
      FMSResourceSet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
