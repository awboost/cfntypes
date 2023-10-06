import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::ElasticLoadBalancingV2::Listener.Action
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-action.html | AWS::ElasticLoadBalancingV2::Listener.Action}
 */
export interface ElasticLoadBalancingV2ListenerAction {
  Order?: number;
  TargetGroupArn?: string;
  FixedResponseConfig?: ElasticLoadBalancingV2ListenerFixedResponseConfig;
  AuthenticateCognitoConfig?: ElasticLoadBalancingV2ListenerAuthenticateCognitoConfig;
  Type: string;
  RedirectConfig?: ElasticLoadBalancingV2ListenerRedirectConfig;
  ForwardConfig?: ElasticLoadBalancingV2ListenerForwardConfig;
  AuthenticateOidcConfig?: ElasticLoadBalancingV2ListenerAuthenticateOidcConfig;
}
/**
 * Type definition for AWS::ElasticLoadBalancingV2::Listener.AuthenticateCognitoConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-authenticatecognitoconfig.html | AWS::ElasticLoadBalancingV2::Listener.AuthenticateCognitoConfig}
 */
export interface ElasticLoadBalancingV2ListenerAuthenticateCognitoConfig {
  OnUnauthenticatedRequest?: string;
  UserPoolClientId: string;
  UserPoolDomain: string;
  SessionTimeout?: string;
  Scope?: string;
  SessionCookieName?: string;
  UserPoolArn: string;
  AuthenticationRequestExtraParams?: Record<string, any>;
}
/**
 * Type definition for AWS::ElasticLoadBalancingV2::Listener.AuthenticateOidcConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-authenticateoidcconfig.html | AWS::ElasticLoadBalancingV2::Listener.AuthenticateOidcConfig}
 */
export interface ElasticLoadBalancingV2ListenerAuthenticateOidcConfig {
  OnUnauthenticatedRequest?: string;
  TokenEndpoint: string;
  UseExistingClientSecret?: boolean;
  SessionTimeout?: string;
  Scope?: string;
  Issuer: string;
  ClientSecret?: string;
  UserInfoEndpoint: string;
  ClientId: string;
  AuthorizationEndpoint: string;
  SessionCookieName?: string;
  AuthenticationRequestExtraParams?: Record<string, any>;
}
/**
 * Type definition for AWS::ElasticLoadBalancingV2::Listener.Certificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-certificate.html | AWS::ElasticLoadBalancingV2::Listener.Certificate}
 */
export interface ElasticLoadBalancingV2ListenerCertificate {
  CertificateArn?: string;
}
/**
 * Type definition for AWS::ElasticLoadBalancingV2::Listener.FixedResponseConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-fixedresponseconfig.html | AWS::ElasticLoadBalancingV2::Listener.FixedResponseConfig}
 */
export interface ElasticLoadBalancingV2ListenerFixedResponseConfig {
  ContentType?: string;
  StatusCode: string;
  MessageBody?: string;
}
/**
 * Type definition for AWS::ElasticLoadBalancingV2::Listener.ForwardConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-forwardconfig.html | AWS::ElasticLoadBalancingV2::Listener.ForwardConfig}
 */
export interface ElasticLoadBalancingV2ListenerForwardConfig {
  TargetGroupStickinessConfig?: ElasticLoadBalancingV2ListenerTargetGroupStickinessConfig;
  TargetGroups?: any[];
}
/**
 * Type definition for AWS::ElasticLoadBalancingV2::Listener.RedirectConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-redirectconfig.html | AWS::ElasticLoadBalancingV2::Listener.RedirectConfig}
 */
export interface ElasticLoadBalancingV2ListenerRedirectConfig {
  Path?: string;
  Query?: string;
  Port?: string;
  Host?: string;
  Protocol?: string;
  StatusCode: string;
}
/**
 * Type definition for AWS::ElasticLoadBalancingV2::Listener.TargetGroupStickinessConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-targetgroupstickinessconfig.html | AWS::ElasticLoadBalancingV2::Listener.TargetGroupStickinessConfig}
 */
export interface ElasticLoadBalancingV2ListenerTargetGroupStickinessConfig {
  Enabled?: boolean;
  DurationSeconds?: number;
}
/**
 * Type definition for AWS::ElasticLoadBalancingV2::Listener.TargetGroupTuple
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-targetgrouptuple.html | AWS::ElasticLoadBalancingV2::Listener.TargetGroupTuple}
 */
export interface ElasticLoadBalancingV2ListenerTargetGroupTuple {
  TargetGroupArn?: string;
  Weight?: number;
}
/**
 * Type definition for AWS::ElasticLoadBalancingV2::ListenerCertificate.Certificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-certificates.html | AWS::ElasticLoadBalancingV2::ListenerCertificate.Certificate}
 */
export interface ElasticLoadBalancingV2ListenerCertificateCertificate {
  CertificateArn?: string;
}
/**
 * Type definition for AWS::ElasticLoadBalancingV2::ListenerRule.Action
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-action.html | AWS::ElasticLoadBalancingV2::ListenerRule.Action}
 */
export interface ElasticLoadBalancingV2ListenerRuleAction {
  Order?: number;
  TargetGroupArn?: string;
  FixedResponseConfig?: ElasticLoadBalancingV2ListenerRuleFixedResponseConfig;
  AuthenticateCognitoConfig?: ElasticLoadBalancingV2ListenerRuleAuthenticateCognitoConfig;
  Type: string;
  RedirectConfig?: ElasticLoadBalancingV2ListenerRuleRedirectConfig;
  ForwardConfig?: ElasticLoadBalancingV2ListenerRuleForwardConfig;
  AuthenticateOidcConfig?: ElasticLoadBalancingV2ListenerRuleAuthenticateOidcConfig;
}
/**
 * Type definition for AWS::ElasticLoadBalancingV2::ListenerRule.AuthenticateCognitoConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-authenticatecognitoconfig.html | AWS::ElasticLoadBalancingV2::ListenerRule.AuthenticateCognitoConfig}
 */
export interface ElasticLoadBalancingV2ListenerRuleAuthenticateCognitoConfig {
  OnUnauthenticatedRequest?: string;
  UserPoolClientId: string;
  UserPoolDomain: string;
  SessionTimeout?: number;
  Scope?: string;
  SessionCookieName?: string;
  UserPoolArn: string;
  AuthenticationRequestExtraParams?: Record<string, any>;
}
/**
 * Type definition for AWS::ElasticLoadBalancingV2::ListenerRule.AuthenticateOidcConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-authenticateoidcconfig.html | AWS::ElasticLoadBalancingV2::ListenerRule.AuthenticateOidcConfig}
 */
export interface ElasticLoadBalancingV2ListenerRuleAuthenticateOidcConfig {
  OnUnauthenticatedRequest?: string;
  TokenEndpoint: string;
  UseExistingClientSecret?: boolean;
  SessionTimeout?: number;
  Scope?: string;
  Issuer: string;
  ClientSecret?: string;
  UserInfoEndpoint: string;
  ClientId: string;
  AuthorizationEndpoint: string;
  SessionCookieName?: string;
  AuthenticationRequestExtraParams?: Record<string, any>;
}
/**
 * Type definition for AWS::ElasticLoadBalancingV2::ListenerRule.FixedResponseConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-fixedresponseconfig.html | AWS::ElasticLoadBalancingV2::ListenerRule.FixedResponseConfig}
 */
export interface ElasticLoadBalancingV2ListenerRuleFixedResponseConfig {
  ContentType?: string;
  StatusCode: string;
  MessageBody?: string;
}
/**
 * Type definition for AWS::ElasticLoadBalancingV2::ListenerRule.ForwardConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-forwardconfig.html | AWS::ElasticLoadBalancingV2::ListenerRule.ForwardConfig}
 */
export interface ElasticLoadBalancingV2ListenerRuleForwardConfig {
  TargetGroupStickinessConfig?: ElasticLoadBalancingV2ListenerRuleTargetGroupStickinessConfig;
  TargetGroups?: any[];
}
/**
 * Type definition for AWS::ElasticLoadBalancingV2::ListenerRule.HostHeaderConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-hostheaderconfig.html | AWS::ElasticLoadBalancingV2::ListenerRule.HostHeaderConfig}
 */
export interface ElasticLoadBalancingV2ListenerRuleHostHeaderConfig {
  Values?: any[];
}
/**
 * Type definition for AWS::ElasticLoadBalancingV2::ListenerRule.HttpHeaderConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-httpheaderconfig.html | AWS::ElasticLoadBalancingV2::ListenerRule.HttpHeaderConfig}
 */
export interface ElasticLoadBalancingV2ListenerRuleHttpHeaderConfig {
  Values?: any[];
  HttpHeaderName?: string;
}
/**
 * Type definition for AWS::ElasticLoadBalancingV2::ListenerRule.HttpRequestMethodConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-httprequestmethodconfig.html | AWS::ElasticLoadBalancingV2::ListenerRule.HttpRequestMethodConfig}
 */
export interface ElasticLoadBalancingV2ListenerRuleHttpRequestMethodConfig {
  Values?: any[];
}
/**
 * Type definition for AWS::ElasticLoadBalancingV2::ListenerRule.PathPatternConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-pathpatternconfig.html | AWS::ElasticLoadBalancingV2::ListenerRule.PathPatternConfig}
 */
export interface ElasticLoadBalancingV2ListenerRulePathPatternConfig {
  Values?: any[];
}
/**
 * Type definition for AWS::ElasticLoadBalancingV2::ListenerRule.QueryStringConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-querystringconfig.html | AWS::ElasticLoadBalancingV2::ListenerRule.QueryStringConfig}
 */
export interface ElasticLoadBalancingV2ListenerRuleQueryStringConfig {
  Values?: any[];
}
/**
 * Type definition for AWS::ElasticLoadBalancingV2::ListenerRule.QueryStringKeyValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-querystringkeyvalue.html | AWS::ElasticLoadBalancingV2::ListenerRule.QueryStringKeyValue}
 */
export interface ElasticLoadBalancingV2ListenerRuleQueryStringKeyValue {
  Value?: string;
  Key?: string;
}
/**
 * Type definition for AWS::ElasticLoadBalancingV2::ListenerRule.RedirectConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-redirectconfig.html | AWS::ElasticLoadBalancingV2::ListenerRule.RedirectConfig}
 */
export interface ElasticLoadBalancingV2ListenerRuleRedirectConfig {
  Path?: string;
  Query?: string;
  Port?: string;
  Host?: string;
  Protocol?: string;
  StatusCode: string;
}
/**
 * Type definition for AWS::ElasticLoadBalancingV2::ListenerRule.RuleCondition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-rulecondition.html | AWS::ElasticLoadBalancingV2::ListenerRule.RuleCondition}
 */
export interface ElasticLoadBalancingV2ListenerRuleRuleCondition {
  Field?: string;
  HttpHeaderConfig?: ElasticLoadBalancingV2ListenerRuleHttpHeaderConfig;
  Values?: any[];
  QueryStringConfig?: ElasticLoadBalancingV2ListenerRuleQueryStringConfig;
  HostHeaderConfig?: ElasticLoadBalancingV2ListenerRuleHostHeaderConfig;
  HttpRequestMethodConfig?: ElasticLoadBalancingV2ListenerRuleHttpRequestMethodConfig;
  PathPatternConfig?: ElasticLoadBalancingV2ListenerRulePathPatternConfig;
  SourceIpConfig?: ElasticLoadBalancingV2ListenerRuleSourceIpConfig;
}
/**
 * Type definition for AWS::ElasticLoadBalancingV2::ListenerRule.SourceIpConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-sourceipconfig.html | AWS::ElasticLoadBalancingV2::ListenerRule.SourceIpConfig}
 */
export interface ElasticLoadBalancingV2ListenerRuleSourceIpConfig {
  Values?: any[];
}
/**
 * Type definition for AWS::ElasticLoadBalancingV2::ListenerRule.TargetGroupStickinessConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-targetgroupstickinessconfig.html | AWS::ElasticLoadBalancingV2::ListenerRule.TargetGroupStickinessConfig}
 */
export interface ElasticLoadBalancingV2ListenerRuleTargetGroupStickinessConfig {
  Enabled?: boolean;
  DurationSeconds?: number;
}
/**
 * Type definition for AWS::ElasticLoadBalancingV2::ListenerRule.TargetGroupTuple
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-targetgrouptuple.html | AWS::ElasticLoadBalancingV2::ListenerRule.TargetGroupTuple}
 */
export interface ElasticLoadBalancingV2ListenerRuleTargetGroupTuple {
  TargetGroupArn?: string;
  Weight?: number;
}
/**
 * Type definition for AWS::ElasticLoadBalancingV2::LoadBalancer.LoadBalancerAttribute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-loadbalancer-loadbalancerattributes.html | AWS::ElasticLoadBalancingV2::LoadBalancer.LoadBalancerAttribute}
 */
export interface ElasticLoadBalancingV2LoadBalancerLoadBalancerAttribute {
  Key?: string;
  Value?: string;
}
/**
 * Type definition for AWS::ElasticLoadBalancingV2::LoadBalancer.SubnetMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-loadbalancer-subnetmapping.html | AWS::ElasticLoadBalancingV2::LoadBalancer.SubnetMapping}
 */
export interface ElasticLoadBalancingV2LoadBalancerSubnetMapping {
  AllocationId?: string;
  IPv6Address?: string;
  PrivateIPv4Address?: string;
  SubnetId: string;
}
/**
 * Type definition for AWS::ElasticLoadBalancingV2::TargetGroup.Matcher
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-targetgroup-matcher.html | AWS::ElasticLoadBalancingV2::TargetGroup.Matcher}
 */
export interface ElasticLoadBalancingV2TargetGroupMatcher {
  GrpcCode?: string;
  HttpCode?: string;
}
/**
 * Type definition for AWS::ElasticLoadBalancingV2::TargetGroup.TargetDescription
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-targetgroup-targetdescription.html | AWS::ElasticLoadBalancingV2::TargetGroup.TargetDescription}
 */
export interface ElasticLoadBalancingV2TargetGroupTargetDescription {
  Port?: number;
  AvailabilityZone?: string;
  Id: string;
}
/**
 * Type definition for AWS::ElasticLoadBalancingV2::TargetGroup.TargetGroupAttribute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-targetgroup-targetgroupattribute.html | AWS::ElasticLoadBalancingV2::TargetGroup.TargetGroupAttribute}
 */
export interface ElasticLoadBalancingV2TargetGroupTargetGroupAttribute {
  Value?: string;
  Key?: string;
}
/**
 * Type definition for AWS::ElasticLoadBalancingV2::Listener
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listener.html | AWS::ElasticLoadBalancingV2::Listener}
 */
export interface ElasticLoadBalancingV2ListenerProps {
  AlpnPolicy?: any[];
  SslPolicy?: string;
  LoadBalancerArn: string;
  DefaultActions: any[];
  Port?: number;
  Certificates?: any[];
  Protocol?: string;
}
/**
 * Attributes type definition for AWS::ElasticLoadBalancingV2::Listener
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listener.html | AWS::ElasticLoadBalancingV2::Listener}
 */
export interface ElasticLoadBalancingV2ListenerAttribs {
  ListenerArn?: string;
}
/**
 * Resource class for AWS::ElasticLoadBalancingV2::Listener
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listener.html | AWS::ElasticLoadBalancingV2::Listener}
 */
export class ElasticLoadBalancingV2Listener extends ResourceBase<
  "AWS::ElasticLoadBalancingV2::Listener",
  ElasticLoadBalancingV2ListenerProps,
  ElasticLoadBalancingV2ListenerAttribs
> {
  public static readonly Type = "AWS::ElasticLoadBalancingV2::Listener";
  public static readonly AttributeNames: readonly (keyof ElasticLoadBalancingV2ListenerAttribs)[] =
    ["ListenerArn"];
  constructor(
    logicalId: string,
    properties: ElasticLoadBalancingV2ListenerProps,
    options?: ResourceOptions,
  ) {
    super(
      ElasticLoadBalancingV2Listener.Type,
      ElasticLoadBalancingV2Listener.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ElasticLoadBalancingV2::ListenerCertificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenercertificate.html | AWS::ElasticLoadBalancingV2::ListenerCertificate}
 */
export interface ElasticLoadBalancingV2ListenerCertificateProps {
  Certificates: any[];
  ListenerArn: string;
}
/**
 * Resource class for AWS::ElasticLoadBalancingV2::ListenerCertificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenercertificate.html | AWS::ElasticLoadBalancingV2::ListenerCertificate}
 */
export class ElasticLoadBalancingV2ListenerCertificate extends ResourceBase<
  "AWS::ElasticLoadBalancingV2::ListenerCertificate",
  ElasticLoadBalancingV2ListenerCertificateProps,
  Record<string, never>
> {
  public static readonly Type =
    "AWS::ElasticLoadBalancingV2::ListenerCertificate";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ElasticLoadBalancingV2ListenerCertificateProps,
    options?: ResourceOptions,
  ) {
    super(
      ElasticLoadBalancingV2ListenerCertificate.Type,
      ElasticLoadBalancingV2ListenerCertificate.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ElasticLoadBalancingV2::ListenerRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenerrule.html | AWS::ElasticLoadBalancingV2::ListenerRule}
 */
export interface ElasticLoadBalancingV2ListenerRuleProps {
  ListenerArn?: string;
  Actions: any[];
  Priority: number;
  Conditions: any[];
}
/**
 * Attributes type definition for AWS::ElasticLoadBalancingV2::ListenerRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenerrule.html | AWS::ElasticLoadBalancingV2::ListenerRule}
 */
export interface ElasticLoadBalancingV2ListenerRuleAttribs {
  IsDefault?: boolean;
  RuleArn?: string;
}
/**
 * Resource class for AWS::ElasticLoadBalancingV2::ListenerRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenerrule.html | AWS::ElasticLoadBalancingV2::ListenerRule}
 */
export class ElasticLoadBalancingV2ListenerRule extends ResourceBase<
  "AWS::ElasticLoadBalancingV2::ListenerRule",
  ElasticLoadBalancingV2ListenerRuleProps,
  ElasticLoadBalancingV2ListenerRuleAttribs
> {
  public static readonly Type = "AWS::ElasticLoadBalancingV2::ListenerRule";
  public static readonly AttributeNames: readonly (keyof ElasticLoadBalancingV2ListenerRuleAttribs)[] =
    ["IsDefault", "RuleArn"];
  constructor(
    logicalId: string,
    properties: ElasticLoadBalancingV2ListenerRuleProps,
    options?: ResourceOptions,
  ) {
    super(
      ElasticLoadBalancingV2ListenerRule.Type,
      ElasticLoadBalancingV2ListenerRule.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ElasticLoadBalancingV2::LoadBalancer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html | AWS::ElasticLoadBalancingV2::LoadBalancer}
 */
export interface ElasticLoadBalancingV2LoadBalancerProps {
  IpAddressType?: string;
  LoadBalancerAttributes?: any[];
  Name?: string;
  Scheme?: string;
  SecurityGroups?: any[];
  SubnetMappings?: any[];
  Subnets?: any[];
  Tags?: Tag[];
  Type?: string;
}
/**
 * Attributes type definition for AWS::ElasticLoadBalancingV2::LoadBalancer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html | AWS::ElasticLoadBalancingV2::LoadBalancer}
 */
export interface ElasticLoadBalancingV2LoadBalancerAttribs {
  CanonicalHostedZoneID?: string;
  DNSName?: string;
  LoadBalancerFullName?: string;
  LoadBalancerName?: string;
  SecurityGroups?: any[];
}
/**
 * Resource class for AWS::ElasticLoadBalancingV2::LoadBalancer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html | AWS::ElasticLoadBalancingV2::LoadBalancer}
 */
export class ElasticLoadBalancingV2LoadBalancer extends ResourceBase<
  "AWS::ElasticLoadBalancingV2::LoadBalancer",
  ElasticLoadBalancingV2LoadBalancerProps,
  ElasticLoadBalancingV2LoadBalancerAttribs
> {
  public static readonly Type = "AWS::ElasticLoadBalancingV2::LoadBalancer";
  public static readonly AttributeNames: readonly (keyof ElasticLoadBalancingV2LoadBalancerAttribs)[] =
    [
      "CanonicalHostedZoneID",
      "DNSName",
      "LoadBalancerFullName",
      "LoadBalancerName",
      "SecurityGroups",
    ];
  constructor(
    logicalId: string,
    properties: ElasticLoadBalancingV2LoadBalancerProps,
    options?: ResourceOptions,
  ) {
    super(
      ElasticLoadBalancingV2LoadBalancer.Type,
      ElasticLoadBalancingV2LoadBalancer.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ElasticLoadBalancingV2::TargetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-targetgroup.html | AWS::ElasticLoadBalancingV2::TargetGroup}
 */
export interface ElasticLoadBalancingV2TargetGroupProps {
  IpAddressType?: string;
  HealthCheckIntervalSeconds?: number;
  Matcher?: ElasticLoadBalancingV2TargetGroupMatcher;
  HealthCheckPath?: string;
  Port?: number;
  Targets?: any[];
  HealthCheckEnabled?: boolean;
  ProtocolVersion?: string;
  UnhealthyThresholdCount?: number;
  HealthCheckTimeoutSeconds?: number;
  Name?: string;
  VpcId?: string;
  HealthyThresholdCount?: number;
  HealthCheckProtocol?: string;
  TargetGroupAttributes?: any[];
  TargetType?: string;
  HealthCheckPort?: string;
  Protocol?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::ElasticLoadBalancingV2::TargetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-targetgroup.html | AWS::ElasticLoadBalancingV2::TargetGroup}
 */
export interface ElasticLoadBalancingV2TargetGroupAttribs {
  TargetGroupArn?: string;
  LoadBalancerArns?: any[];
  TargetGroupFullName?: string;
  TargetGroupName?: string;
}
/**
 * Resource class for AWS::ElasticLoadBalancingV2::TargetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-targetgroup.html | AWS::ElasticLoadBalancingV2::TargetGroup}
 */
export class ElasticLoadBalancingV2TargetGroup extends ResourceBase<
  "AWS::ElasticLoadBalancingV2::TargetGroup",
  ElasticLoadBalancingV2TargetGroupProps,
  ElasticLoadBalancingV2TargetGroupAttribs
> {
  public static readonly Type = "AWS::ElasticLoadBalancingV2::TargetGroup";
  public static readonly AttributeNames: readonly (keyof ElasticLoadBalancingV2TargetGroupAttribs)[] =
    [
      "TargetGroupArn",
      "LoadBalancerArns",
      "TargetGroupFullName",
      "TargetGroupName",
    ];
  constructor(
    logicalId: string,
    properties: ElasticLoadBalancingV2TargetGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      ElasticLoadBalancingV2TargetGroup.Type,
      ElasticLoadBalancingV2TargetGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
