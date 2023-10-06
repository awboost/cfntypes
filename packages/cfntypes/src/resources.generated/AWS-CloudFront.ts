import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::CloudFront::CachePolicy.CachePolicyConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-cachepolicy-cachepolicyconfig.html | AWS::CloudFront::CachePolicy.CachePolicyConfig}
 */
export interface CloudFrontCachePolicyCachePolicyConfig {
  Comment?: string;
  MinTTL: number;
  MaxTTL: number;
  ParametersInCacheKeyAndForwardedToOrigin: CloudFrontCachePolicyParametersInCacheKeyAndForwardedToOrigin;
  DefaultTTL: number;
  Name: string;
}
/**
 * Type definition for AWS::CloudFront::CachePolicy.CookiesConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-cachepolicy-cookiesconfig.html | AWS::CloudFront::CachePolicy.CookiesConfig}
 */
export interface CloudFrontCachePolicyCookiesConfig {
  Cookies?: any[];
  CookieBehavior: string;
}
/**
 * Type definition for AWS::CloudFront::CachePolicy.HeadersConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-cachepolicy-headersconfig.html | AWS::CloudFront::CachePolicy.HeadersConfig}
 */
export interface CloudFrontCachePolicyHeadersConfig {
  Headers?: any[];
  HeaderBehavior: string;
}
/**
 * Type definition for AWS::CloudFront::CachePolicy.ParametersInCacheKeyAndForwardedToOrigin
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-cachepolicy-parametersincachekeyandforwardedtoorigin.html | AWS::CloudFront::CachePolicy.ParametersInCacheKeyAndForwardedToOrigin}
 */
export interface CloudFrontCachePolicyParametersInCacheKeyAndForwardedToOrigin {
  EnableAcceptEncodingBrotli?: boolean;
  HeadersConfig: CloudFrontCachePolicyHeadersConfig;
  CookiesConfig: CloudFrontCachePolicyCookiesConfig;
  EnableAcceptEncodingGzip: boolean;
  QueryStringsConfig: CloudFrontCachePolicyQueryStringsConfig;
}
/**
 * Type definition for AWS::CloudFront::CachePolicy.QueryStringsConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-cachepolicy-querystringsconfig.html | AWS::CloudFront::CachePolicy.QueryStringsConfig}
 */
export interface CloudFrontCachePolicyQueryStringsConfig {
  QueryStrings?: any[];
  QueryStringBehavior: string;
}
/**
 * Type definition for AWS::CloudFront::CloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentityConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-cloudfrontoriginaccessidentity-cloudfrontoriginaccessidentityconfig.html | AWS::CloudFront::CloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentityConfig}
 */
export interface CloudFrontCloudFrontOriginAccessIdentityCloudFrontOriginAccessIdentityConfig {
  Comment: string;
}
/**
 * Type definition for AWS::CloudFront::ContinuousDeploymentPolicy.ContinuousDeploymentPolicyConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-continuousdeploymentpolicy-continuousdeploymentpolicyconfig.html | AWS::CloudFront::ContinuousDeploymentPolicy.ContinuousDeploymentPolicyConfig}
 */
export interface CloudFrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig {
  Type?: string;
  SingleHeaderPolicyConfig?: CloudFrontContinuousDeploymentPolicySingleHeaderPolicyConfig;
  Enabled: boolean;
  StagingDistributionDnsNames: any[];
  TrafficConfig?: CloudFrontContinuousDeploymentPolicyTrafficConfig;
  SingleWeightPolicyConfig?: CloudFrontContinuousDeploymentPolicySingleWeightPolicyConfig;
}
/**
 * Type definition for AWS::CloudFront::ContinuousDeploymentPolicy.SessionStickinessConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-continuousdeploymentpolicy-sessionstickinessconfig.html | AWS::CloudFront::ContinuousDeploymentPolicy.SessionStickinessConfig}
 */
export interface CloudFrontContinuousDeploymentPolicySessionStickinessConfig {
  IdleTTL: number;
  MaximumTTL: number;
}
/**
 * Type definition for AWS::CloudFront::ContinuousDeploymentPolicy.SingleHeaderConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-continuousdeploymentpolicy-singleheaderconfig.html | AWS::CloudFront::ContinuousDeploymentPolicy.SingleHeaderConfig}
 */
export interface CloudFrontContinuousDeploymentPolicySingleHeaderConfig {
  Header: string;
  Value: string;
}
/**
 * Type definition for AWS::CloudFront::ContinuousDeploymentPolicy.SingleHeaderPolicyConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-continuousdeploymentpolicy-singleheaderpolicyconfig.html | AWS::CloudFront::ContinuousDeploymentPolicy.SingleHeaderPolicyConfig}
 */
export interface CloudFrontContinuousDeploymentPolicySingleHeaderPolicyConfig {
  Header: string;
  Value: string;
}
/**
 * Type definition for AWS::CloudFront::ContinuousDeploymentPolicy.SingleWeightConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-continuousdeploymentpolicy-singleweightconfig.html | AWS::CloudFront::ContinuousDeploymentPolicy.SingleWeightConfig}
 */
export interface CloudFrontContinuousDeploymentPolicySingleWeightConfig {
  SessionStickinessConfig?: CloudFrontContinuousDeploymentPolicySessionStickinessConfig;
  Weight: number;
}
/**
 * Type definition for AWS::CloudFront::ContinuousDeploymentPolicy.SingleWeightPolicyConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-continuousdeploymentpolicy-singleweightpolicyconfig.html | AWS::CloudFront::ContinuousDeploymentPolicy.SingleWeightPolicyConfig}
 */
export interface CloudFrontContinuousDeploymentPolicySingleWeightPolicyConfig {
  SessionStickinessConfig?: CloudFrontContinuousDeploymentPolicySessionStickinessConfig;
  Weight: number;
}
/**
 * Type definition for AWS::CloudFront::ContinuousDeploymentPolicy.TrafficConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-continuousdeploymentpolicy-trafficconfig.html | AWS::CloudFront::ContinuousDeploymentPolicy.TrafficConfig}
 */
export interface CloudFrontContinuousDeploymentPolicyTrafficConfig {
  SingleWeightConfig?: CloudFrontContinuousDeploymentPolicySingleWeightConfig;
  Type: string;
  SingleHeaderConfig?: CloudFrontContinuousDeploymentPolicySingleHeaderConfig;
}
/**
 * Type definition for AWS::CloudFront::Distribution.CacheBehavior
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-cachebehavior.html | AWS::CloudFront::Distribution.CacheBehavior}
 */
export interface CloudFrontDistributionCacheBehavior {
  Compress?: boolean;
  FunctionAssociations?: any[];
  LambdaFunctionAssociations?: any[];
  TargetOriginId: string;
  ViewerProtocolPolicy: string;
  ResponseHeadersPolicyId?: string;
  RealtimeLogConfigArn?: string;
  TrustedSigners?: any[];
  DefaultTTL?: number;
  FieldLevelEncryptionId?: string;
  TrustedKeyGroups?: any[];
  AllowedMethods?: any[];
  PathPattern: string;
  CachedMethods?: any[];
  SmoothStreaming?: boolean;
  ForwardedValues?: CloudFrontDistributionForwardedValues;
  OriginRequestPolicyId?: string;
  MinTTL?: number;
  CachePolicyId?: string;
  MaxTTL?: number;
}
/**
 * Type definition for AWS::CloudFront::Distribution.Cookies
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-cookies.html | AWS::CloudFront::Distribution.Cookies}
 */
export interface CloudFrontDistributionCookies {
  WhitelistedNames?: any[];
  Forward: string;
}
/**
 * Type definition for AWS::CloudFront::Distribution.CustomErrorResponse
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-customerrorresponse.html | AWS::CloudFront::Distribution.CustomErrorResponse}
 */
export interface CloudFrontDistributionCustomErrorResponse {
  ResponseCode?: number;
  ErrorCachingMinTTL?: number;
  ErrorCode: number;
  ResponsePagePath?: string;
}
/**
 * Type definition for AWS::CloudFront::Distribution.CustomOriginConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-customoriginconfig.html | AWS::CloudFront::Distribution.CustomOriginConfig}
 */
export interface CloudFrontDistributionCustomOriginConfig {
  OriginReadTimeout?: number;
  HTTPSPort?: number;
  OriginKeepaliveTimeout?: number;
  OriginSSLProtocols?: any[];
  HTTPPort?: number;
  OriginProtocolPolicy: string;
}
/**
 * Type definition for AWS::CloudFront::Distribution.DefaultCacheBehavior
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-defaultcachebehavior.html | AWS::CloudFront::Distribution.DefaultCacheBehavior}
 */
export interface CloudFrontDistributionDefaultCacheBehavior {
  Compress?: boolean;
  FunctionAssociations?: any[];
  LambdaFunctionAssociations?: any[];
  TargetOriginId: string;
  ViewerProtocolPolicy: string;
  ResponseHeadersPolicyId?: string;
  RealtimeLogConfigArn?: string;
  TrustedSigners?: any[];
  DefaultTTL?: number;
  FieldLevelEncryptionId?: string;
  TrustedKeyGroups?: any[];
  AllowedMethods?: any[];
  CachedMethods?: any[];
  SmoothStreaming?: boolean;
  ForwardedValues?: CloudFrontDistributionForwardedValues;
  OriginRequestPolicyId?: string;
  MinTTL?: number;
  CachePolicyId?: string;
  MaxTTL?: number;
}
/**
 * Type definition for AWS::CloudFront::Distribution.DistributionConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-distributionconfig.html | AWS::CloudFront::Distribution.DistributionConfig}
 */
export interface CloudFrontDistributionDistributionConfig {
  Logging?: CloudFrontDistributionLogging;
  Comment?: string;
  DefaultRootObject?: string;
  Origins?: any[];
  ViewerCertificate?: CloudFrontDistributionViewerCertificate;
  PriceClass?: string;
  CustomOrigin?: CloudFrontDistributionLegacyCustomOrigin;
  S3Origin?: CloudFrontDistributionLegacyS3Origin;
  DefaultCacheBehavior: CloudFrontDistributionDefaultCacheBehavior;
  Staging?: boolean;
  CustomErrorResponses?: any[];
  ContinuousDeploymentPolicyId?: string;
  OriginGroups?: CloudFrontDistributionOriginGroups;
  Enabled: boolean;
  Aliases?: any[];
  IPV6Enabled?: boolean;
  CNAMEs?: any[];
  WebACLId?: string;
  HttpVersion?: string;
  Restrictions?: CloudFrontDistributionRestrictions;
  CacheBehaviors?: any[];
}
/**
 * Type definition for AWS::CloudFront::Distribution.ForwardedValues
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-forwardedvalues.html | AWS::CloudFront::Distribution.ForwardedValues}
 */
export interface CloudFrontDistributionForwardedValues {
  Cookies?: CloudFrontDistributionCookies;
  Headers?: any[];
  QueryString: boolean;
  QueryStringCacheKeys?: any[];
}
/**
 * Type definition for AWS::CloudFront::Distribution.FunctionAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-functionassociation.html | AWS::CloudFront::Distribution.FunctionAssociation}
 */
export interface CloudFrontDistributionFunctionAssociation {
  FunctionARN?: string;
  EventType?: string;
}
/**
 * Type definition for AWS::CloudFront::Distribution.GeoRestriction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-georestriction.html | AWS::CloudFront::Distribution.GeoRestriction}
 */
export interface CloudFrontDistributionGeoRestriction {
  Locations?: any[];
  RestrictionType: string;
}
/**
 * Type definition for AWS::CloudFront::Distribution.LambdaFunctionAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-lambdafunctionassociation.html | AWS::CloudFront::Distribution.LambdaFunctionAssociation}
 */
export interface CloudFrontDistributionLambdaFunctionAssociation {
  IncludeBody?: boolean;
  EventType?: string;
  LambdaFunctionARN?: string;
}
/**
 * Type definition for AWS::CloudFront::Distribution.LegacyCustomOrigin
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-legacycustomorigin.html | AWS::CloudFront::Distribution.LegacyCustomOrigin}
 */
export interface CloudFrontDistributionLegacyCustomOrigin {
  HTTPSPort?: number;
  OriginSSLProtocols: any[];
  DNSName: string;
  HTTPPort?: number;
  OriginProtocolPolicy: string;
}
/**
 * Type definition for AWS::CloudFront::Distribution.LegacyS3Origin
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-legacys3origin.html | AWS::CloudFront::Distribution.LegacyS3Origin}
 */
export interface CloudFrontDistributionLegacyS3Origin {
  OriginAccessIdentity?: string;
  DNSName: string;
}
/**
 * Type definition for AWS::CloudFront::Distribution.Logging
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-logging.html | AWS::CloudFront::Distribution.Logging}
 */
export interface CloudFrontDistributionLogging {
  IncludeCookies?: boolean;
  Bucket: string;
  Prefix?: string;
}
/**
 * Type definition for AWS::CloudFront::Distribution.Origin
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origin.html | AWS::CloudFront::Distribution.Origin}
 */
export interface CloudFrontDistributionOrigin {
  ConnectionTimeout?: number;
  OriginAccessControlId?: string;
  ConnectionAttempts?: number;
  OriginCustomHeaders?: any[];
  DomainName: string;
  OriginShield?: CloudFrontDistributionOriginShield;
  S3OriginConfig?: CloudFrontDistributionS3OriginConfig;
  OriginPath?: string;
  Id: string;
  CustomOriginConfig?: CloudFrontDistributionCustomOriginConfig;
}
/**
 * Type definition for AWS::CloudFront::Distribution.OriginCustomHeader
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origincustomheader.html | AWS::CloudFront::Distribution.OriginCustomHeader}
 */
export interface CloudFrontDistributionOriginCustomHeader {
  HeaderValue: string;
  HeaderName: string;
}
/**
 * Type definition for AWS::CloudFront::Distribution.OriginGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origingroup.html | AWS::CloudFront::Distribution.OriginGroup}
 */
export interface CloudFrontDistributionOriginGroup {
  Id: string;
  FailoverCriteria: CloudFrontDistributionOriginGroupFailoverCriteria;
  Members: CloudFrontDistributionOriginGroupMembers;
}
/**
 * Type definition for AWS::CloudFront::Distribution.OriginGroupFailoverCriteria
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origingroupfailovercriteria.html | AWS::CloudFront::Distribution.OriginGroupFailoverCriteria}
 */
export interface CloudFrontDistributionOriginGroupFailoverCriteria {
  StatusCodes: CloudFrontDistributionStatusCodes;
}
/**
 * Type definition for AWS::CloudFront::Distribution.OriginGroupMember
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origingroupmember.html | AWS::CloudFront::Distribution.OriginGroupMember}
 */
export interface CloudFrontDistributionOriginGroupMember {
  OriginId: string;
}
/**
 * Type definition for AWS::CloudFront::Distribution.OriginGroupMembers
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origingroupmembers.html | AWS::CloudFront::Distribution.OriginGroupMembers}
 */
export interface CloudFrontDistributionOriginGroupMembers {
  Quantity: number;
  Items: any[];
}
/**
 * Type definition for AWS::CloudFront::Distribution.OriginGroups
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origingroups.html | AWS::CloudFront::Distribution.OriginGroups}
 */
export interface CloudFrontDistributionOriginGroups {
  Quantity: number;
  Items?: any[];
}
/**
 * Type definition for AWS::CloudFront::Distribution.OriginShield
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-originshield.html | AWS::CloudFront::Distribution.OriginShield}
 */
export interface CloudFrontDistributionOriginShield {
  OriginShieldRegion?: string;
  Enabled?: boolean;
}
/**
 * Type definition for AWS::CloudFront::Distribution.Restrictions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-restrictions.html | AWS::CloudFront::Distribution.Restrictions}
 */
export interface CloudFrontDistributionRestrictions {
  GeoRestriction: CloudFrontDistributionGeoRestriction;
}
/**
 * Type definition for AWS::CloudFront::Distribution.S3OriginConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-s3originconfig.html | AWS::CloudFront::Distribution.S3OriginConfig}
 */
export interface CloudFrontDistributionS3OriginConfig {
  OriginAccessIdentity?: string;
}
/**
 * Type definition for AWS::CloudFront::Distribution.StatusCodes
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-statuscodes.html | AWS::CloudFront::Distribution.StatusCodes}
 */
export interface CloudFrontDistributionStatusCodes {
  Quantity: number;
  Items: any[];
}
/**
 * Type definition for AWS::CloudFront::Distribution.ViewerCertificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-viewercertificate.html | AWS::CloudFront::Distribution.ViewerCertificate}
 */
export interface CloudFrontDistributionViewerCertificate {
  IamCertificateId?: string;
  SslSupportMethod?: string;
  MinimumProtocolVersion?: string;
  CloudFrontDefaultCertificate?: boolean;
  AcmCertificateArn?: string;
}
/**
 * Type definition for AWS::CloudFront::Function.FunctionConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-function-functionconfig.html | AWS::CloudFront::Function.FunctionConfig}
 */
export interface CloudFrontFunctionFunctionConfig {
  Comment: string;
  Runtime: string;
}
/**
 * Type definition for AWS::CloudFront::Function.FunctionMetadata
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-function-functionmetadata.html | AWS::CloudFront::Function.FunctionMetadata}
 */
export interface CloudFrontFunctionFunctionMetadata {
  FunctionARN?: string;
}
/**
 * Type definition for AWS::CloudFront::KeyGroup.KeyGroupConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-keygroup-keygroupconfig.html | AWS::CloudFront::KeyGroup.KeyGroupConfig}
 */
export interface CloudFrontKeyGroupKeyGroupConfig {
  Comment?: string;
  Items: any[];
  Name: string;
}
/**
 * Type definition for AWS::CloudFront::MonitoringSubscription.MonitoringSubscription
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-monitoringsubscription-monitoringsubscription.html | AWS::CloudFront::MonitoringSubscription.MonitoringSubscription}
 */
export interface CloudFrontMonitoringSubscriptionMonitoringSubscription {
  RealtimeMetricsSubscriptionConfig?: CloudFrontMonitoringSubscriptionRealtimeMetricsSubscriptionConfig;
}
/**
 * Type definition for AWS::CloudFront::MonitoringSubscription.RealtimeMetricsSubscriptionConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-monitoringsubscription-realtimemetricssubscriptionconfig.html | AWS::CloudFront::MonitoringSubscription.RealtimeMetricsSubscriptionConfig}
 */
export interface CloudFrontMonitoringSubscriptionRealtimeMetricsSubscriptionConfig {
  RealtimeMetricsSubscriptionStatus: string;
}
/**
 * Type definition for AWS::CloudFront::OriginAccessControl.OriginAccessControlConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-originaccesscontrol-originaccesscontrolconfig.html | AWS::CloudFront::OriginAccessControl.OriginAccessControlConfig}
 */
export interface CloudFrontOriginAccessControlOriginAccessControlConfig {
  SigningBehavior: string;
  Description?: string;
  OriginAccessControlOriginType: string;
  SigningProtocol: string;
  Name: string;
}
/**
 * Type definition for AWS::CloudFront::OriginRequestPolicy.CookiesConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-originrequestpolicy-cookiesconfig.html | AWS::CloudFront::OriginRequestPolicy.CookiesConfig}
 */
export interface CloudFrontOriginRequestPolicyCookiesConfig {
  Cookies?: any[];
  CookieBehavior: string;
}
/**
 * Type definition for AWS::CloudFront::OriginRequestPolicy.HeadersConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-originrequestpolicy-headersconfig.html | AWS::CloudFront::OriginRequestPolicy.HeadersConfig}
 */
export interface CloudFrontOriginRequestPolicyHeadersConfig {
  Headers?: any[];
  HeaderBehavior: string;
}
/**
 * Type definition for AWS::CloudFront::OriginRequestPolicy.OriginRequestPolicyConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-originrequestpolicy-originrequestpolicyconfig.html | AWS::CloudFront::OriginRequestPolicy.OriginRequestPolicyConfig}
 */
export interface CloudFrontOriginRequestPolicyOriginRequestPolicyConfig {
  Comment?: string;
  HeadersConfig: CloudFrontOriginRequestPolicyHeadersConfig;
  CookiesConfig: CloudFrontOriginRequestPolicyCookiesConfig;
  QueryStringsConfig: CloudFrontOriginRequestPolicyQueryStringsConfig;
  Name: string;
}
/**
 * Type definition for AWS::CloudFront::OriginRequestPolicy.QueryStringsConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-originrequestpolicy-querystringsconfig.html | AWS::CloudFront::OriginRequestPolicy.QueryStringsConfig}
 */
export interface CloudFrontOriginRequestPolicyQueryStringsConfig {
  QueryStrings?: any[];
  QueryStringBehavior: string;
}
/**
 * Type definition for AWS::CloudFront::PublicKey.PublicKeyConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-publickey-publickeyconfig.html | AWS::CloudFront::PublicKey.PublicKeyConfig}
 */
export interface CloudFrontPublicKeyPublicKeyConfig {
  Comment?: string;
  CallerReference: string;
  EncodedKey: string;
  Name: string;
}
/**
 * Type definition for AWS::CloudFront::RealtimeLogConfig.EndPoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-realtimelogconfig-endpoint.html | AWS::CloudFront::RealtimeLogConfig.EndPoint}
 */
export interface CloudFrontRealtimeLogConfigEndPoint {
  KinesisStreamConfig: CloudFrontRealtimeLogConfigKinesisStreamConfig;
  StreamType: string;
}
/**
 * Type definition for AWS::CloudFront::RealtimeLogConfig.KinesisStreamConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-realtimelogconfig-kinesisstreamconfig.html | AWS::CloudFront::RealtimeLogConfig.KinesisStreamConfig}
 */
export interface CloudFrontRealtimeLogConfigKinesisStreamConfig {
  StreamArn: string;
  RoleArn: string;
}
/**
 * Type definition for AWS::CloudFront::ResponseHeadersPolicy.AccessControlAllowHeaders
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-accesscontrolallowheaders.html | AWS::CloudFront::ResponseHeadersPolicy.AccessControlAllowHeaders}
 */
export interface CloudFrontResponseHeadersPolicyAccessControlAllowHeaders {
  Items: any[];
}
/**
 * Type definition for AWS::CloudFront::ResponseHeadersPolicy.AccessControlAllowMethods
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-accesscontrolallowmethods.html | AWS::CloudFront::ResponseHeadersPolicy.AccessControlAllowMethods}
 */
export interface CloudFrontResponseHeadersPolicyAccessControlAllowMethods {
  Items: any[];
}
/**
 * Type definition for AWS::CloudFront::ResponseHeadersPolicy.AccessControlAllowOrigins
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-accesscontrolalloworigins.html | AWS::CloudFront::ResponseHeadersPolicy.AccessControlAllowOrigins}
 */
export interface CloudFrontResponseHeadersPolicyAccessControlAllowOrigins {
  Items: any[];
}
/**
 * Type definition for AWS::CloudFront::ResponseHeadersPolicy.AccessControlExposeHeaders
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-accesscontrolexposeheaders.html | AWS::CloudFront::ResponseHeadersPolicy.AccessControlExposeHeaders}
 */
export interface CloudFrontResponseHeadersPolicyAccessControlExposeHeaders {
  Items: any[];
}
/**
 * Type definition for AWS::CloudFront::ResponseHeadersPolicy.ContentSecurityPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-contentsecuritypolicy.html | AWS::CloudFront::ResponseHeadersPolicy.ContentSecurityPolicy}
 */
export interface CloudFrontResponseHeadersPolicyContentSecurityPolicy {
  ContentSecurityPolicy: string;
  Override: boolean;
}
/**
 * Type definition for AWS::CloudFront::ResponseHeadersPolicy.ContentTypeOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-contenttypeoptions.html | AWS::CloudFront::ResponseHeadersPolicy.ContentTypeOptions}
 */
export interface CloudFrontResponseHeadersPolicyContentTypeOptions {
  Override: boolean;
}
/**
 * Type definition for AWS::CloudFront::ResponseHeadersPolicy.CorsConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-corsconfig.html | AWS::CloudFront::ResponseHeadersPolicy.CorsConfig}
 */
export interface CloudFrontResponseHeadersPolicyCorsConfig {
  AccessControlAllowCredentials: boolean;
  AccessControlAllowHeaders: CloudFrontResponseHeadersPolicyAccessControlAllowHeaders;
  OriginOverride: boolean;
  AccessControlAllowMethods: CloudFrontResponseHeadersPolicyAccessControlAllowMethods;
  AccessControlExposeHeaders?: CloudFrontResponseHeadersPolicyAccessControlExposeHeaders;
  AccessControlAllowOrigins: CloudFrontResponseHeadersPolicyAccessControlAllowOrigins;
  AccessControlMaxAgeSec?: number;
}
/**
 * Type definition for AWS::CloudFront::ResponseHeadersPolicy.CustomHeader
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-customheader.html | AWS::CloudFront::ResponseHeadersPolicy.CustomHeader}
 */
export interface CloudFrontResponseHeadersPolicyCustomHeader {
  Header: string;
  Value: string;
  Override: boolean;
}
/**
 * Type definition for AWS::CloudFront::ResponseHeadersPolicy.CustomHeadersConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-customheadersconfig.html | AWS::CloudFront::ResponseHeadersPolicy.CustomHeadersConfig}
 */
export interface CloudFrontResponseHeadersPolicyCustomHeadersConfig {
  Items: any[];
}
/**
 * Type definition for AWS::CloudFront::ResponseHeadersPolicy.FrameOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-frameoptions.html | AWS::CloudFront::ResponseHeadersPolicy.FrameOptions}
 */
export interface CloudFrontResponseHeadersPolicyFrameOptions {
  FrameOption: string;
  Override: boolean;
}
/**
 * Type definition for AWS::CloudFront::ResponseHeadersPolicy.ReferrerPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-referrerpolicy.html | AWS::CloudFront::ResponseHeadersPolicy.ReferrerPolicy}
 */
export interface CloudFrontResponseHeadersPolicyReferrerPolicy {
  Override: boolean;
  ReferrerPolicy: string;
}
/**
 * Type definition for AWS::CloudFront::ResponseHeadersPolicy.RemoveHeader
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-removeheader.html | AWS::CloudFront::ResponseHeadersPolicy.RemoveHeader}
 */
export interface CloudFrontResponseHeadersPolicyRemoveHeader {
  Header: string;
}
/**
 * Type definition for AWS::CloudFront::ResponseHeadersPolicy.RemoveHeadersConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-removeheadersconfig.html | AWS::CloudFront::ResponseHeadersPolicy.RemoveHeadersConfig}
 */
export interface CloudFrontResponseHeadersPolicyRemoveHeadersConfig {
  Items: any[];
}
/**
 * Type definition for AWS::CloudFront::ResponseHeadersPolicy.ResponseHeadersPolicyConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-responseheaderspolicyconfig.html | AWS::CloudFront::ResponseHeadersPolicy.ResponseHeadersPolicyConfig}
 */
export interface CloudFrontResponseHeadersPolicyResponseHeadersPolicyConfig {
  Comment?: string;
  SecurityHeadersConfig?: CloudFrontResponseHeadersPolicySecurityHeadersConfig;
  RemoveHeadersConfig?: CloudFrontResponseHeadersPolicyRemoveHeadersConfig;
  CorsConfig?: CloudFrontResponseHeadersPolicyCorsConfig;
  ServerTimingHeadersConfig?: CloudFrontResponseHeadersPolicyServerTimingHeadersConfig;
  CustomHeadersConfig?: CloudFrontResponseHeadersPolicyCustomHeadersConfig;
  Name: string;
}
/**
 * Type definition for AWS::CloudFront::ResponseHeadersPolicy.SecurityHeadersConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-securityheadersconfig.html | AWS::CloudFront::ResponseHeadersPolicy.SecurityHeadersConfig}
 */
export interface CloudFrontResponseHeadersPolicySecurityHeadersConfig {
  ContentSecurityPolicy?: CloudFrontResponseHeadersPolicyContentSecurityPolicy;
  FrameOptions?: CloudFrontResponseHeadersPolicyFrameOptions;
  ContentTypeOptions?: CloudFrontResponseHeadersPolicyContentTypeOptions;
  StrictTransportSecurity?: CloudFrontResponseHeadersPolicyStrictTransportSecurity;
  XSSProtection?: CloudFrontResponseHeadersPolicyXSSProtection;
  ReferrerPolicy?: CloudFrontResponseHeadersPolicyReferrerPolicy;
}
/**
 * Type definition for AWS::CloudFront::ResponseHeadersPolicy.ServerTimingHeadersConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-servertimingheadersconfig.html | AWS::CloudFront::ResponseHeadersPolicy.ServerTimingHeadersConfig}
 */
export interface CloudFrontResponseHeadersPolicyServerTimingHeadersConfig {
  Enabled: boolean;
  SamplingRate?: number;
}
/**
 * Type definition for AWS::CloudFront::ResponseHeadersPolicy.StrictTransportSecurity
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-stricttransportsecurity.html | AWS::CloudFront::ResponseHeadersPolicy.StrictTransportSecurity}
 */
export interface CloudFrontResponseHeadersPolicyStrictTransportSecurity {
  Preload?: boolean;
  AccessControlMaxAgeSec: number;
  IncludeSubdomains?: boolean;
  Override: boolean;
}
/**
 * Type definition for AWS::CloudFront::ResponseHeadersPolicy.XSSProtection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-xssprotection.html | AWS::CloudFront::ResponseHeadersPolicy.XSSProtection}
 */
export interface CloudFrontResponseHeadersPolicyXSSProtection {
  ReportUri?: string;
  Override: boolean;
  Protection: boolean;
  ModeBlock?: boolean;
}
/**
 * Type definition for AWS::CloudFront::StreamingDistribution.Logging
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-streamingdistribution-logging.html | AWS::CloudFront::StreamingDistribution.Logging}
 */
export interface CloudFrontStreamingDistributionLogging {
  Bucket: string;
  Enabled: boolean;
  Prefix: string;
}
/**
 * Type definition for AWS::CloudFront::StreamingDistribution.S3Origin
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-streamingdistribution-s3origin.html | AWS::CloudFront::StreamingDistribution.S3Origin}
 */
export interface CloudFrontStreamingDistributionS3Origin {
  DomainName: string;
  OriginAccessIdentity: string;
}
/**
 * Type definition for AWS::CloudFront::StreamingDistribution.StreamingDistributionConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-streamingdistribution-streamingdistributionconfig.html | AWS::CloudFront::StreamingDistribution.StreamingDistributionConfig}
 */
export interface CloudFrontStreamingDistributionStreamingDistributionConfig {
  Logging?: CloudFrontStreamingDistributionLogging;
  Comment: string;
  PriceClass?: string;
  S3Origin: CloudFrontStreamingDistributionS3Origin;
  Enabled: boolean;
  Aliases?: any[];
  TrustedSigners: CloudFrontStreamingDistributionTrustedSigners;
}
/**
 * Type definition for AWS::CloudFront::StreamingDistribution.TrustedSigners
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-streamingdistribution-trustedsigners.html | AWS::CloudFront::StreamingDistribution.TrustedSigners}
 */
export interface CloudFrontStreamingDistributionTrustedSigners {
  Enabled: boolean;
  AwsAccountNumbers?: any[];
}
/**
 * Type definition for AWS::CloudFront::CachePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-cachepolicy.html | AWS::CloudFront::CachePolicy}
 */
export interface CloudFrontCachePolicyProps {
  CachePolicyConfig: CloudFrontCachePolicyCachePolicyConfig;
}
/**
 * Attributes type definition for AWS::CloudFront::CachePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-cachepolicy.html | AWS::CloudFront::CachePolicy}
 */
export interface CloudFrontCachePolicyAttribs {
  LastModifiedTime?: string;
  Id?: string;
}
/**
 * Resource class for AWS::CloudFront::CachePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-cachepolicy.html | AWS::CloudFront::CachePolicy}
 */
export class CloudFrontCachePolicy extends ResourceBase<
  "AWS::CloudFront::CachePolicy",
  CloudFrontCachePolicyProps,
  CloudFrontCachePolicyAttribs
> {
  public static readonly Type = "AWS::CloudFront::CachePolicy";
  public static readonly AttributeNames: readonly (keyof CloudFrontCachePolicyAttribs)[] =
    ["LastModifiedTime", "Id"];
  constructor(
    logicalId: string,
    properties: CloudFrontCachePolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudFrontCachePolicy.Type,
      CloudFrontCachePolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CloudFront::CloudFrontOriginAccessIdentity
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-cloudfrontoriginaccessidentity.html | AWS::CloudFront::CloudFrontOriginAccessIdentity}
 */
export interface CloudFrontCloudFrontOriginAccessIdentityProps {
  CloudFrontOriginAccessIdentityConfig: CloudFrontCloudFrontOriginAccessIdentityCloudFrontOriginAccessIdentityConfig;
}
/**
 * Attributes type definition for AWS::CloudFront::CloudFrontOriginAccessIdentity
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-cloudfrontoriginaccessidentity.html | AWS::CloudFront::CloudFrontOriginAccessIdentity}
 */
export interface CloudFrontCloudFrontOriginAccessIdentityAttribs {
  S3CanonicalUserId?: string;
  Id?: string;
}
/**
 * Resource class for AWS::CloudFront::CloudFrontOriginAccessIdentity
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-cloudfrontoriginaccessidentity.html | AWS::CloudFront::CloudFrontOriginAccessIdentity}
 */
export class CloudFrontCloudFrontOriginAccessIdentity extends ResourceBase<
  "AWS::CloudFront::CloudFrontOriginAccessIdentity",
  CloudFrontCloudFrontOriginAccessIdentityProps,
  CloudFrontCloudFrontOriginAccessIdentityAttribs
> {
  public static readonly Type =
    "AWS::CloudFront::CloudFrontOriginAccessIdentity";
  public static readonly AttributeNames: readonly (keyof CloudFrontCloudFrontOriginAccessIdentityAttribs)[] =
    ["S3CanonicalUserId", "Id"];
  constructor(
    logicalId: string,
    properties: CloudFrontCloudFrontOriginAccessIdentityProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudFrontCloudFrontOriginAccessIdentity.Type,
      CloudFrontCloudFrontOriginAccessIdentity.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CloudFront::ContinuousDeploymentPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-continuousdeploymentpolicy.html | AWS::CloudFront::ContinuousDeploymentPolicy}
 */
export interface CloudFrontContinuousDeploymentPolicyProps {
  ContinuousDeploymentPolicyConfig: CloudFrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig;
}
/**
 * Attributes type definition for AWS::CloudFront::ContinuousDeploymentPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-continuousdeploymentpolicy.html | AWS::CloudFront::ContinuousDeploymentPolicy}
 */
export interface CloudFrontContinuousDeploymentPolicyAttribs {
  LastModifiedTime?: string;
  Id?: string;
}
/**
 * Resource class for AWS::CloudFront::ContinuousDeploymentPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-continuousdeploymentpolicy.html | AWS::CloudFront::ContinuousDeploymentPolicy}
 */
export class CloudFrontContinuousDeploymentPolicy extends ResourceBase<
  "AWS::CloudFront::ContinuousDeploymentPolicy",
  CloudFrontContinuousDeploymentPolicyProps,
  CloudFrontContinuousDeploymentPolicyAttribs
> {
  public static readonly Type = "AWS::CloudFront::ContinuousDeploymentPolicy";
  public static readonly AttributeNames: readonly (keyof CloudFrontContinuousDeploymentPolicyAttribs)[] =
    ["LastModifiedTime", "Id"];
  constructor(
    logicalId: string,
    properties: CloudFrontContinuousDeploymentPolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudFrontContinuousDeploymentPolicy.Type,
      CloudFrontContinuousDeploymentPolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CloudFront::Distribution
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distribution.html | AWS::CloudFront::Distribution}
 */
export interface CloudFrontDistributionProps {
  DistributionConfig: CloudFrontDistributionDistributionConfig;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::CloudFront::Distribution
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distribution.html | AWS::CloudFront::Distribution}
 */
export interface CloudFrontDistributionAttribs {
  DomainName?: string;
  Id?: string;
}
/**
 * Resource class for AWS::CloudFront::Distribution
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distribution.html | AWS::CloudFront::Distribution}
 */
export class CloudFrontDistribution extends ResourceBase<
  "AWS::CloudFront::Distribution",
  CloudFrontDistributionProps,
  CloudFrontDistributionAttribs
> {
  public static readonly Type = "AWS::CloudFront::Distribution";
  public static readonly AttributeNames: readonly (keyof CloudFrontDistributionAttribs)[] =
    ["DomainName", "Id"];
  constructor(
    logicalId: string,
    properties: CloudFrontDistributionProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudFrontDistribution.Type,
      CloudFrontDistribution.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CloudFront::Function
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-function.html | AWS::CloudFront::Function}
 */
export interface CloudFrontFunctionProps {
  FunctionConfig: CloudFrontFunctionFunctionConfig;
  FunctionMetadata?: CloudFrontFunctionFunctionMetadata;
  AutoPublish?: boolean;
  FunctionCode: string;
  Name: string;
}
/**
 * Attributes type definition for AWS::CloudFront::Function
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-function.html | AWS::CloudFront::Function}
 */
export interface CloudFrontFunctionAttribs {
  FunctionARN?: string;
  "FunctionMetadata.FunctionARN"?: string;
  Stage?: string;
}
/**
 * Resource class for AWS::CloudFront::Function
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-function.html | AWS::CloudFront::Function}
 */
export class CloudFrontFunction extends ResourceBase<
  "AWS::CloudFront::Function",
  CloudFrontFunctionProps,
  CloudFrontFunctionAttribs
> {
  public static readonly Type = "AWS::CloudFront::Function";
  public static readonly AttributeNames: readonly (keyof CloudFrontFunctionAttribs)[] =
    ["FunctionARN", "FunctionMetadata.FunctionARN", "Stage"];
  constructor(
    logicalId: string,
    properties: CloudFrontFunctionProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudFrontFunction.Type,
      CloudFrontFunction.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CloudFront::KeyGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-keygroup.html | AWS::CloudFront::KeyGroup}
 */
export interface CloudFrontKeyGroupProps {
  KeyGroupConfig: CloudFrontKeyGroupKeyGroupConfig;
}
/**
 * Attributes type definition for AWS::CloudFront::KeyGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-keygroup.html | AWS::CloudFront::KeyGroup}
 */
export interface CloudFrontKeyGroupAttribs {
  LastModifiedTime?: string;
  Id?: string;
}
/**
 * Resource class for AWS::CloudFront::KeyGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-keygroup.html | AWS::CloudFront::KeyGroup}
 */
export class CloudFrontKeyGroup extends ResourceBase<
  "AWS::CloudFront::KeyGroup",
  CloudFrontKeyGroupProps,
  CloudFrontKeyGroupAttribs
> {
  public static readonly Type = "AWS::CloudFront::KeyGroup";
  public static readonly AttributeNames: readonly (keyof CloudFrontKeyGroupAttribs)[] =
    ["LastModifiedTime", "Id"];
  constructor(
    logicalId: string,
    properties: CloudFrontKeyGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudFrontKeyGroup.Type,
      CloudFrontKeyGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CloudFront::MonitoringSubscription
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-monitoringsubscription.html | AWS::CloudFront::MonitoringSubscription}
 */
export interface CloudFrontMonitoringSubscriptionProps {
  MonitoringSubscription: CloudFrontMonitoringSubscriptionMonitoringSubscription;
  DistributionId: string;
}
/**
 * Resource class for AWS::CloudFront::MonitoringSubscription
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-monitoringsubscription.html | AWS::CloudFront::MonitoringSubscription}
 */
export class CloudFrontMonitoringSubscription extends ResourceBase<
  "AWS::CloudFront::MonitoringSubscription",
  CloudFrontMonitoringSubscriptionProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::CloudFront::MonitoringSubscription";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: CloudFrontMonitoringSubscriptionProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudFrontMonitoringSubscription.Type,
      CloudFrontMonitoringSubscription.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CloudFront::OriginAccessControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originaccesscontrol.html | AWS::CloudFront::OriginAccessControl}
 */
export interface CloudFrontOriginAccessControlProps {
  OriginAccessControlConfig: CloudFrontOriginAccessControlOriginAccessControlConfig;
}
/**
 * Attributes type definition for AWS::CloudFront::OriginAccessControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originaccesscontrol.html | AWS::CloudFront::OriginAccessControl}
 */
export interface CloudFrontOriginAccessControlAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::CloudFront::OriginAccessControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originaccesscontrol.html | AWS::CloudFront::OriginAccessControl}
 */
export class CloudFrontOriginAccessControl extends ResourceBase<
  "AWS::CloudFront::OriginAccessControl",
  CloudFrontOriginAccessControlProps,
  CloudFrontOriginAccessControlAttribs
> {
  public static readonly Type = "AWS::CloudFront::OriginAccessControl";
  public static readonly AttributeNames: readonly (keyof CloudFrontOriginAccessControlAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: CloudFrontOriginAccessControlProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudFrontOriginAccessControl.Type,
      CloudFrontOriginAccessControl.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CloudFront::OriginRequestPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originrequestpolicy.html | AWS::CloudFront::OriginRequestPolicy}
 */
export interface CloudFrontOriginRequestPolicyProps {
  OriginRequestPolicyConfig: CloudFrontOriginRequestPolicyOriginRequestPolicyConfig;
}
/**
 * Attributes type definition for AWS::CloudFront::OriginRequestPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originrequestpolicy.html | AWS::CloudFront::OriginRequestPolicy}
 */
export interface CloudFrontOriginRequestPolicyAttribs {
  LastModifiedTime?: string;
  Id?: string;
}
/**
 * Resource class for AWS::CloudFront::OriginRequestPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originrequestpolicy.html | AWS::CloudFront::OriginRequestPolicy}
 */
export class CloudFrontOriginRequestPolicy extends ResourceBase<
  "AWS::CloudFront::OriginRequestPolicy",
  CloudFrontOriginRequestPolicyProps,
  CloudFrontOriginRequestPolicyAttribs
> {
  public static readonly Type = "AWS::CloudFront::OriginRequestPolicy";
  public static readonly AttributeNames: readonly (keyof CloudFrontOriginRequestPolicyAttribs)[] =
    ["LastModifiedTime", "Id"];
  constructor(
    logicalId: string,
    properties: CloudFrontOriginRequestPolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudFrontOriginRequestPolicy.Type,
      CloudFrontOriginRequestPolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CloudFront::PublicKey
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-publickey.html | AWS::CloudFront::PublicKey}
 */
export interface CloudFrontPublicKeyProps {
  PublicKeyConfig: CloudFrontPublicKeyPublicKeyConfig;
}
/**
 * Attributes type definition for AWS::CloudFront::PublicKey
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-publickey.html | AWS::CloudFront::PublicKey}
 */
export interface CloudFrontPublicKeyAttribs {
  CreatedTime?: string;
  Id?: string;
}
/**
 * Resource class for AWS::CloudFront::PublicKey
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-publickey.html | AWS::CloudFront::PublicKey}
 */
export class CloudFrontPublicKey extends ResourceBase<
  "AWS::CloudFront::PublicKey",
  CloudFrontPublicKeyProps,
  CloudFrontPublicKeyAttribs
> {
  public static readonly Type = "AWS::CloudFront::PublicKey";
  public static readonly AttributeNames: readonly (keyof CloudFrontPublicKeyAttribs)[] =
    ["CreatedTime", "Id"];
  constructor(
    logicalId: string,
    properties: CloudFrontPublicKeyProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudFrontPublicKey.Type,
      CloudFrontPublicKey.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CloudFront::RealtimeLogConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-realtimelogconfig.html | AWS::CloudFront::RealtimeLogConfig}
 */
export interface CloudFrontRealtimeLogConfigProps {
  Fields: any[];
  EndPoints: any[];
  SamplingRate: number;
  Name: string;
}
/**
 * Attributes type definition for AWS::CloudFront::RealtimeLogConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-realtimelogconfig.html | AWS::CloudFront::RealtimeLogConfig}
 */
export interface CloudFrontRealtimeLogConfigAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::CloudFront::RealtimeLogConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-realtimelogconfig.html | AWS::CloudFront::RealtimeLogConfig}
 */
export class CloudFrontRealtimeLogConfig extends ResourceBase<
  "AWS::CloudFront::RealtimeLogConfig",
  CloudFrontRealtimeLogConfigProps,
  CloudFrontRealtimeLogConfigAttribs
> {
  public static readonly Type = "AWS::CloudFront::RealtimeLogConfig";
  public static readonly AttributeNames: readonly (keyof CloudFrontRealtimeLogConfigAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: CloudFrontRealtimeLogConfigProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudFrontRealtimeLogConfig.Type,
      CloudFrontRealtimeLogConfig.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CloudFront::ResponseHeadersPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-responseheaderspolicy.html | AWS::CloudFront::ResponseHeadersPolicy}
 */
export interface CloudFrontResponseHeadersPolicyProps {
  ResponseHeadersPolicyConfig: CloudFrontResponseHeadersPolicyResponseHeadersPolicyConfig;
}
/**
 * Attributes type definition for AWS::CloudFront::ResponseHeadersPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-responseheaderspolicy.html | AWS::CloudFront::ResponseHeadersPolicy}
 */
export interface CloudFrontResponseHeadersPolicyAttribs {
  LastModifiedTime?: string;
  Id?: string;
}
/**
 * Resource class for AWS::CloudFront::ResponseHeadersPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-responseheaderspolicy.html | AWS::CloudFront::ResponseHeadersPolicy}
 */
export class CloudFrontResponseHeadersPolicy extends ResourceBase<
  "AWS::CloudFront::ResponseHeadersPolicy",
  CloudFrontResponseHeadersPolicyProps,
  CloudFrontResponseHeadersPolicyAttribs
> {
  public static readonly Type = "AWS::CloudFront::ResponseHeadersPolicy";
  public static readonly AttributeNames: readonly (keyof CloudFrontResponseHeadersPolicyAttribs)[] =
    ["LastModifiedTime", "Id"];
  constructor(
    logicalId: string,
    properties: CloudFrontResponseHeadersPolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudFrontResponseHeadersPolicy.Type,
      CloudFrontResponseHeadersPolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CloudFront::StreamingDistribution
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-streamingdistribution.html | AWS::CloudFront::StreamingDistribution}
 */
export interface CloudFrontStreamingDistributionProps {
  StreamingDistributionConfig: CloudFrontStreamingDistributionStreamingDistributionConfig;
  Tags: Tag[];
}
/**
 * Attributes type definition for AWS::CloudFront::StreamingDistribution
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-streamingdistribution.html | AWS::CloudFront::StreamingDistribution}
 */
export interface CloudFrontStreamingDistributionAttribs {
  DomainName?: string;
}
/**
 * Resource class for AWS::CloudFront::StreamingDistribution
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-streamingdistribution.html | AWS::CloudFront::StreamingDistribution}
 */
export class CloudFrontStreamingDistribution extends ResourceBase<
  "AWS::CloudFront::StreamingDistribution",
  CloudFrontStreamingDistributionProps,
  CloudFrontStreamingDistributionAttribs
> {
  public static readonly Type = "AWS::CloudFront::StreamingDistribution";
  public static readonly AttributeNames: readonly (keyof CloudFrontStreamingDistributionAttribs)[] =
    ["DomainName"];
  constructor(
    logicalId: string,
    properties: CloudFrontStreamingDistributionProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudFrontStreamingDistribution.Type,
      CloudFrontStreamingDistribution.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
