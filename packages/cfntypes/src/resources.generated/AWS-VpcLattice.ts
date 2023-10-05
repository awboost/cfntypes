import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::VpcLattice::Listener.DefaultAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-listener-defaultaction.html | AWS::VpcLattice::Listener.DefaultAction}
 */
export interface VpcLatticeListenerDefaultAction {
  Forward?: VpcLatticeListenerForward;
  FixedResponse?: VpcLatticeListenerFixedResponse;
}
/**
 * Type definition for AWS::VpcLattice::Listener.FixedResponse
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-listener-fixedresponse.html | AWS::VpcLattice::Listener.FixedResponse}
 */
export interface VpcLatticeListenerFixedResponse {
  StatusCode: number;
}
/**
 * Type definition for AWS::VpcLattice::Listener.Forward
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-listener-forward.html | AWS::VpcLattice::Listener.Forward}
 */
export interface VpcLatticeListenerForward {
  TargetGroups: any[];
}
/**
 * Type definition for AWS::VpcLattice::Listener.WeightedTargetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-listener-weightedtargetgroup.html | AWS::VpcLattice::Listener.WeightedTargetGroup}
 */
export interface VpcLatticeListenerWeightedTargetGroup {
  Weight?: number;
  TargetGroupIdentifier: string;
}
/**
 * Type definition for AWS::VpcLattice::Rule.Action
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-rule-action.html | AWS::VpcLattice::Rule.Action}
 */
export interface VpcLatticeRuleAction {
  Forward?: VpcLatticeRuleForward;
  FixedResponse?: VpcLatticeRuleFixedResponse;
}
/**
 * Type definition for AWS::VpcLattice::Rule.FixedResponse
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-rule-fixedresponse.html | AWS::VpcLattice::Rule.FixedResponse}
 */
export interface VpcLatticeRuleFixedResponse {
  StatusCode: number;
}
/**
 * Type definition for AWS::VpcLattice::Rule.Forward
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-rule-forward.html | AWS::VpcLattice::Rule.Forward}
 */
export interface VpcLatticeRuleForward {
  TargetGroups: any[];
}
/**
 * Type definition for AWS::VpcLattice::Rule.HeaderMatch
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-rule-headermatch.html | AWS::VpcLattice::Rule.HeaderMatch}
 */
export interface VpcLatticeRuleHeaderMatch {
  CaseSensitive?: boolean;
  Name: string;
  Match: VpcLatticeRuleHeaderMatchType;
}
/**
 * Type definition for AWS::VpcLattice::Rule.HeaderMatchType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-rule-headermatchtype.html | AWS::VpcLattice::Rule.HeaderMatchType}
 */
export interface VpcLatticeRuleHeaderMatchType {
  Contains?: string;
  Exact?: string;
  Prefix?: string;
}
/**
 * Type definition for AWS::VpcLattice::Rule.HttpMatch
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-rule-httpmatch.html | AWS::VpcLattice::Rule.HttpMatch}
 */
export interface VpcLatticeRuleHttpMatch {
  HeaderMatches?: any[];
  PathMatch?: VpcLatticeRulePathMatch;
  Method?: string;
}
/**
 * Type definition for AWS::VpcLattice::Rule.Match
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-rule-match.html | AWS::VpcLattice::Rule.Match}
 */
export interface VpcLatticeRuleMatch {
  HttpMatch: VpcLatticeRuleHttpMatch;
}
/**
 * Type definition for AWS::VpcLattice::Rule.PathMatch
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-rule-pathmatch.html | AWS::VpcLattice::Rule.PathMatch}
 */
export interface VpcLatticeRulePathMatch {
  CaseSensitive?: boolean;
  Match: VpcLatticeRulePathMatchType;
}
/**
 * Type definition for AWS::VpcLattice::Rule.PathMatchType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-rule-pathmatchtype.html | AWS::VpcLattice::Rule.PathMatchType}
 */
export interface VpcLatticeRulePathMatchType {
  Exact?: string;
  Prefix?: string;
}
/**
 * Type definition for AWS::VpcLattice::Rule.WeightedTargetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-rule-weightedtargetgroup.html | AWS::VpcLattice::Rule.WeightedTargetGroup}
 */
export interface VpcLatticeRuleWeightedTargetGroup {
  Weight?: number;
  TargetGroupIdentifier: string;
}
/**
 * Type definition for AWS::VpcLattice::Service.DnsEntry
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-service-dnsentry.html | AWS::VpcLattice::Service.DnsEntry}
 */
export interface VpcLatticeServiceDnsEntry {
  DomainName?: string;
  HostedZoneId?: string;
}
/**
 * Type definition for AWS::VpcLattice::ServiceNetworkServiceAssociation.DnsEntry
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-servicenetworkserviceassociation-dnsentry.html | AWS::VpcLattice::ServiceNetworkServiceAssociation.DnsEntry}
 */
export interface VpcLatticeServiceNetworkServiceAssociationDnsEntry {
  DomainName?: string;
  HostedZoneId?: string;
}
/**
 * Type definition for AWS::VpcLattice::TargetGroup.HealthCheckConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-targetgroup-healthcheckconfig.html | AWS::VpcLattice::TargetGroup.HealthCheckConfig}
 */
export interface VpcLatticeTargetGroupHealthCheckConfig {
  Path?: string;
  HealthCheckIntervalSeconds?: number;
  Matcher?: VpcLatticeTargetGroupMatcher;
  HealthyThresholdCount?: number;
  Port?: number;
  Enabled?: boolean;
  Protocol?: string;
  ProtocolVersion?: string;
  UnhealthyThresholdCount?: number;
  HealthCheckTimeoutSeconds?: number;
}
/**
 * Type definition for AWS::VpcLattice::TargetGroup.Matcher
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-targetgroup-matcher.html | AWS::VpcLattice::TargetGroup.Matcher}
 */
export interface VpcLatticeTargetGroupMatcher {
  HttpCode: string;
}
/**
 * Type definition for AWS::VpcLattice::TargetGroup.Target
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-targetgroup-target.html | AWS::VpcLattice::TargetGroup.Target}
 */
export interface VpcLatticeTargetGroupTarget {
  Port?: number;
  Id: string;
}
/**
 * Type definition for AWS::VpcLattice::TargetGroup.TargetGroupConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-targetgroup-targetgroupconfig.html | AWS::VpcLattice::TargetGroup.TargetGroupConfig}
 */
export interface VpcLatticeTargetGroupTargetGroupConfig {
  IpAddressType?: string;
  Port?: number;
  HealthCheck?: VpcLatticeTargetGroupHealthCheckConfig;
  LambdaEventStructureVersion?: string;
  VpcIdentifier?: string;
  Protocol?: string;
  ProtocolVersion?: string;
}
/**
 * Type definition for AWS::VpcLattice::AccessLogSubscription
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-accesslogsubscription.html | AWS::VpcLattice::AccessLogSubscription}
 */
export interface VpcLatticeAccessLogSubscriptionProps {
  ResourceIdentifier?: string;
  DestinationArn: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::VpcLattice::AccessLogSubscription
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-accesslogsubscription.html | AWS::VpcLattice::AccessLogSubscription}
 */
export interface VpcLatticeAccessLogSubscriptionAttribs {
  ResourceArn?: string;
  ResourceId?: string;
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::VpcLattice::AccessLogSubscription
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-accesslogsubscription.html | AWS::VpcLattice::AccessLogSubscription}
 */
export class VpcLatticeAccessLogSubscription extends ResourceBase<
  "AWS::VpcLattice::AccessLogSubscription",
  VpcLatticeAccessLogSubscriptionProps,
  VpcLatticeAccessLogSubscriptionAttribs
> {
  public static readonly Type = "AWS::VpcLattice::AccessLogSubscription";
  public static readonly AttributeNames: readonly (keyof VpcLatticeAccessLogSubscriptionAttribs)[] =
    ["ResourceArn", "ResourceId", "Id", "Arn"];
  constructor(
    logicalId: string,
    properties: VpcLatticeAccessLogSubscriptionProps,
    options?: ResourceOptions,
  ) {
    super(
      VpcLatticeAccessLogSubscription.Type,
      VpcLatticeAccessLogSubscription.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::VpcLattice::AuthPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-authpolicy.html | AWS::VpcLattice::AuthPolicy}
 */
export interface VpcLatticeAuthPolicyProps {
  Policy: object;
  ResourceIdentifier: string;
}
/**
 * Attributes type definition for AWS::VpcLattice::AuthPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-authpolicy.html | AWS::VpcLattice::AuthPolicy}
 */
export interface VpcLatticeAuthPolicyAttribs {
  State?: string;
}
/**
 * Resource class for AWS::VpcLattice::AuthPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-authpolicy.html | AWS::VpcLattice::AuthPolicy}
 */
export class VpcLatticeAuthPolicy extends ResourceBase<
  "AWS::VpcLattice::AuthPolicy",
  VpcLatticeAuthPolicyProps,
  VpcLatticeAuthPolicyAttribs
> {
  public static readonly Type = "AWS::VpcLattice::AuthPolicy";
  public static readonly AttributeNames: readonly (keyof VpcLatticeAuthPolicyAttribs)[] =
    ["State"];
  constructor(
    logicalId: string,
    properties: VpcLatticeAuthPolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      VpcLatticeAuthPolicy.Type,
      VpcLatticeAuthPolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::VpcLattice::Listener
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-listener.html | AWS::VpcLattice::Listener}
 */
export interface VpcLatticeListenerProps {
  DefaultAction: VpcLatticeListenerDefaultAction;
  Port?: number;
  ServiceIdentifier?: string;
  Protocol: string;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::VpcLattice::Listener
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-listener.html | AWS::VpcLattice::Listener}
 */
export interface VpcLatticeListenerAttribs {
  Id?: string;
  ServiceArn?: string;
  Arn?: string;
  ServiceId?: string;
}
/**
 * Resource class for AWS::VpcLattice::Listener
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-listener.html | AWS::VpcLattice::Listener}
 */
export class VpcLatticeListener extends ResourceBase<
  "AWS::VpcLattice::Listener",
  VpcLatticeListenerProps,
  VpcLatticeListenerAttribs
> {
  public static readonly Type = "AWS::VpcLattice::Listener";
  public static readonly AttributeNames: readonly (keyof VpcLatticeListenerAttribs)[] =
    ["Id", "ServiceArn", "Arn", "ServiceId"];
  constructor(
    logicalId: string,
    properties: VpcLatticeListenerProps,
    options?: ResourceOptions,
  ) {
    super(
      VpcLatticeListener.Type,
      VpcLatticeListener.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::VpcLattice::ResourcePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-resourcepolicy.html | AWS::VpcLattice::ResourcePolicy}
 */
export interface VpcLatticeResourcePolicyProps {
  Policy: object;
  ResourceArn: string;
}
/**
 * Resource class for AWS::VpcLattice::ResourcePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-resourcepolicy.html | AWS::VpcLattice::ResourcePolicy}
 */
export class VpcLatticeResourcePolicy extends ResourceBase<
  "AWS::VpcLattice::ResourcePolicy",
  VpcLatticeResourcePolicyProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::VpcLattice::ResourcePolicy";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: VpcLatticeResourcePolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      VpcLatticeResourcePolicy.Type,
      VpcLatticeResourcePolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::VpcLattice::Rule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-rule.html | AWS::VpcLattice::Rule}
 */
export interface VpcLatticeRuleProps {
  Action: VpcLatticeRuleAction;
  Priority: number;
  ServiceIdentifier?: string;
  ListenerIdentifier?: string;
  Tags?: Tag[];
  Match: VpcLatticeRuleMatch;
  Name?: string;
}
/**
 * Attributes type definition for AWS::VpcLattice::Rule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-rule.html | AWS::VpcLattice::Rule}
 */
export interface VpcLatticeRuleAttribs {
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::VpcLattice::Rule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-rule.html | AWS::VpcLattice::Rule}
 */
export class VpcLatticeRule extends ResourceBase<
  "AWS::VpcLattice::Rule",
  VpcLatticeRuleProps,
  VpcLatticeRuleAttribs
> {
  public static readonly Type = "AWS::VpcLattice::Rule";
  public static readonly AttributeNames: readonly (keyof VpcLatticeRuleAttribs)[] =
    ["Id", "Arn"];
  constructor(
    logicalId: string,
    properties: VpcLatticeRuleProps,
    options?: ResourceOptions,
  ) {
    super(
      VpcLatticeRule.Type,
      VpcLatticeRule.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::VpcLattice::Service
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-service.html | AWS::VpcLattice::Service}
 */
export interface VpcLatticeServiceProps {
  DnsEntry?: VpcLatticeServiceDnsEntry;
  CustomDomainName?: string;
  AuthType?: string;
  Tags?: Tag[];
  Name?: string;
  CertificateArn?: string;
}
/**
 * Attributes type definition for AWS::VpcLattice::Service
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-service.html | AWS::VpcLattice::Service}
 */
export interface VpcLatticeServiceAttribs {
  Status?: string;
  LastUpdatedAt?: string;
  CreatedAt?: string;
  "DnsEntry.HostedZoneId"?: string;
  Id?: string;
  Arn?: string;
  "DnsEntry.DomainName"?: string;
}
/**
 * Resource class for AWS::VpcLattice::Service
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-service.html | AWS::VpcLattice::Service}
 */
export class VpcLatticeService extends ResourceBase<
  "AWS::VpcLattice::Service",
  VpcLatticeServiceProps,
  VpcLatticeServiceAttribs
> {
  public static readonly Type = "AWS::VpcLattice::Service";
  public static readonly AttributeNames: readonly (keyof VpcLatticeServiceAttribs)[] =
    [
      "Status",
      "LastUpdatedAt",
      "CreatedAt",
      "DnsEntry.HostedZoneId",
      "Id",
      "Arn",
      "DnsEntry.DomainName",
    ];
  constructor(
    logicalId: string,
    properties: VpcLatticeServiceProps,
    options?: ResourceOptions,
  ) {
    super(
      VpcLatticeService.Type,
      VpcLatticeService.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::VpcLattice::ServiceNetwork
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-servicenetwork.html | AWS::VpcLattice::ServiceNetwork}
 */
export interface VpcLatticeServiceNetworkProps {
  AuthType?: string;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::VpcLattice::ServiceNetwork
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-servicenetwork.html | AWS::VpcLattice::ServiceNetwork}
 */
export interface VpcLatticeServiceNetworkAttribs {
  LastUpdatedAt?: string;
  CreatedAt?: string;
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::VpcLattice::ServiceNetwork
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-servicenetwork.html | AWS::VpcLattice::ServiceNetwork}
 */
export class VpcLatticeServiceNetwork extends ResourceBase<
  "AWS::VpcLattice::ServiceNetwork",
  VpcLatticeServiceNetworkProps,
  VpcLatticeServiceNetworkAttribs
> {
  public static readonly Type = "AWS::VpcLattice::ServiceNetwork";
  public static readonly AttributeNames: readonly (keyof VpcLatticeServiceNetworkAttribs)[] =
    ["LastUpdatedAt", "CreatedAt", "Id", "Arn"];
  constructor(
    logicalId: string,
    properties: VpcLatticeServiceNetworkProps,
    options?: ResourceOptions,
  ) {
    super(
      VpcLatticeServiceNetwork.Type,
      VpcLatticeServiceNetwork.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::VpcLattice::ServiceNetworkServiceAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-servicenetworkserviceassociation.html | AWS::VpcLattice::ServiceNetworkServiceAssociation}
 */
export interface VpcLatticeServiceNetworkServiceAssociationProps {
  ServiceNetworkIdentifier?: string;
  DnsEntry?: VpcLatticeServiceNetworkServiceAssociationDnsEntry;
  ServiceIdentifier?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::VpcLattice::ServiceNetworkServiceAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-servicenetworkserviceassociation.html | AWS::VpcLattice::ServiceNetworkServiceAssociation}
 */
export interface VpcLatticeServiceNetworkServiceAssociationAttribs {
  Status?: string;
  ServiceNetworkId?: string;
  ServiceName?: string;
  CreatedAt?: string;
  "DnsEntry.HostedZoneId"?: string;
  ServiceNetworkName?: string;
  ServiceArn?: string;
  Id?: string;
  Arn?: string;
  "DnsEntry.DomainName"?: string;
  ServiceNetworkArn?: string;
  ServiceId?: string;
}
/**
 * Resource class for AWS::VpcLattice::ServiceNetworkServiceAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-servicenetworkserviceassociation.html | AWS::VpcLattice::ServiceNetworkServiceAssociation}
 */
export class VpcLatticeServiceNetworkServiceAssociation extends ResourceBase<
  "AWS::VpcLattice::ServiceNetworkServiceAssociation",
  VpcLatticeServiceNetworkServiceAssociationProps,
  VpcLatticeServiceNetworkServiceAssociationAttribs
> {
  public static readonly Type =
    "AWS::VpcLattice::ServiceNetworkServiceAssociation";
  public static readonly AttributeNames: readonly (keyof VpcLatticeServiceNetworkServiceAssociationAttribs)[] =
    [
      "Status",
      "ServiceNetworkId",
      "ServiceName",
      "CreatedAt",
      "DnsEntry.HostedZoneId",
      "ServiceNetworkName",
      "ServiceArn",
      "Id",
      "Arn",
      "DnsEntry.DomainName",
      "ServiceNetworkArn",
      "ServiceId",
    ];
  constructor(
    logicalId: string,
    properties: VpcLatticeServiceNetworkServiceAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      VpcLatticeServiceNetworkServiceAssociation.Type,
      VpcLatticeServiceNetworkServiceAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::VpcLattice::ServiceNetworkVpcAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-servicenetworkvpcassociation.html | AWS::VpcLattice::ServiceNetworkVpcAssociation}
 */
export interface VpcLatticeServiceNetworkVpcAssociationProps {
  ServiceNetworkIdentifier?: string;
  VpcIdentifier?: string;
  SecurityGroupIds?: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::VpcLattice::ServiceNetworkVpcAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-servicenetworkvpcassociation.html | AWS::VpcLattice::ServiceNetworkVpcAssociation}
 */
export interface VpcLatticeServiceNetworkVpcAssociationAttribs {
  Status?: string;
  VpcId?: string;
  ServiceNetworkId?: string;
  CreatedAt?: string;
  ServiceNetworkName?: string;
  Id?: string;
  Arn?: string;
  ServiceNetworkArn?: string;
}
/**
 * Resource class for AWS::VpcLattice::ServiceNetworkVpcAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-servicenetworkvpcassociation.html | AWS::VpcLattice::ServiceNetworkVpcAssociation}
 */
export class VpcLatticeServiceNetworkVpcAssociation extends ResourceBase<
  "AWS::VpcLattice::ServiceNetworkVpcAssociation",
  VpcLatticeServiceNetworkVpcAssociationProps,
  VpcLatticeServiceNetworkVpcAssociationAttribs
> {
  public static readonly Type = "AWS::VpcLattice::ServiceNetworkVpcAssociation";
  public static readonly AttributeNames: readonly (keyof VpcLatticeServiceNetworkVpcAssociationAttribs)[] =
    [
      "Status",
      "VpcId",
      "ServiceNetworkId",
      "CreatedAt",
      "ServiceNetworkName",
      "Id",
      "Arn",
      "ServiceNetworkArn",
    ];
  constructor(
    logicalId: string,
    properties: VpcLatticeServiceNetworkVpcAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      VpcLatticeServiceNetworkVpcAssociation.Type,
      VpcLatticeServiceNetworkVpcAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::VpcLattice::TargetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html | AWS::VpcLattice::TargetGroup}
 */
export interface VpcLatticeTargetGroupProps {
  Type: string;
  Config?: VpcLatticeTargetGroupTargetGroupConfig;
  Targets?: any[];
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::VpcLattice::TargetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html | AWS::VpcLattice::TargetGroup}
 */
export interface VpcLatticeTargetGroupAttribs {
  Status?: string;
  LastUpdatedAt?: string;
  CreatedAt?: string;
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::VpcLattice::TargetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html | AWS::VpcLattice::TargetGroup}
 */
export class VpcLatticeTargetGroup extends ResourceBase<
  "AWS::VpcLattice::TargetGroup",
  VpcLatticeTargetGroupProps,
  VpcLatticeTargetGroupAttribs
> {
  public static readonly Type = "AWS::VpcLattice::TargetGroup";
  public static readonly AttributeNames: readonly (keyof VpcLatticeTargetGroupAttribs)[] =
    ["Status", "LastUpdatedAt", "CreatedAt", "Id", "Arn"];
  constructor(
    logicalId: string,
    properties: VpcLatticeTargetGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      VpcLatticeTargetGroup.Type,
      VpcLatticeTargetGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
