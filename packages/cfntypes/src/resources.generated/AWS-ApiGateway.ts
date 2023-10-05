import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::ApiGateway::ApiKey.StageKey
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-apikey-stagekey.html | AWS::ApiGateway::ApiKey.StageKey}
 */
export interface ApiGatewayApiKeyStageKey {
  StageName?: string;
  RestApiId?: string;
}
/**
 * Type definition for AWS::ApiGateway::Deployment.AccessLogSetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-accesslogsetting.html | AWS::ApiGateway::Deployment.AccessLogSetting}
 */
export interface ApiGatewayDeploymentAccessLogSetting {
  Format?: string;
  DestinationArn?: string;
}
/**
 * Type definition for AWS::ApiGateway::Deployment.CanarySetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-canarysetting.html | AWS::ApiGateway::Deployment.CanarySetting}
 */
export interface ApiGatewayDeploymentCanarySetting {
  StageVariableOverrides?: Record<string, any>;
  PercentTraffic?: number;
  UseStageCache?: boolean;
}
/**
 * Type definition for AWS::ApiGateway::Deployment.DeploymentCanarySettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-deploymentcanarysettings.html | AWS::ApiGateway::Deployment.DeploymentCanarySettings}
 */
export interface ApiGatewayDeploymentDeploymentCanarySettings {
  StageVariableOverrides?: Record<string, any>;
  PercentTraffic?: number;
  UseStageCache?: boolean;
}
/**
 * Type definition for AWS::ApiGateway::Deployment.MethodSetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-methodsetting.html | AWS::ApiGateway::Deployment.MethodSetting}
 */
export interface ApiGatewayDeploymentMethodSetting {
  CacheTtlInSeconds?: number;
  LoggingLevel?: string;
  ResourcePath?: string;
  CacheDataEncrypted?: boolean;
  DataTraceEnabled?: boolean;
  ThrottlingBurstLimit?: number;
  CachingEnabled?: boolean;
  MetricsEnabled?: boolean;
  HttpMethod?: string;
  ThrottlingRateLimit?: number;
}
/**
 * Type definition for AWS::ApiGateway::Deployment.StageDescription
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-stagedescription.html | AWS::ApiGateway::Deployment.StageDescription}
 */
export interface ApiGatewayDeploymentStageDescription {
  CacheTtlInSeconds?: number;
  Description?: string;
  LoggingLevel?: string;
  CanarySetting?: ApiGatewayDeploymentCanarySetting;
  ThrottlingRateLimit?: number;
  ClientCertificateId?: string;
  Variables?: Record<string, any>;
  DocumentationVersion?: string;
  CacheDataEncrypted?: boolean;
  DataTraceEnabled?: boolean;
  ThrottlingBurstLimit?: number;
  CachingEnabled?: boolean;
  TracingEnabled?: boolean;
  MethodSettings?: any[];
  AccessLogSetting?: ApiGatewayDeploymentAccessLogSetting;
  CacheClusterSize?: string;
  MetricsEnabled?: boolean;
  Tags?: Tag[];
  CacheClusterEnabled?: boolean;
}
/**
 * Type definition for AWS::ApiGateway::DocumentationPart.Location
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-documentationpart-location.html | AWS::ApiGateway::DocumentationPart.Location}
 */
export interface ApiGatewayDocumentationPartLocation {
  Path?: string;
  Type?: string;
  Method?: string;
  StatusCode?: string;
  Name?: string;
}
/**
 * Type definition for AWS::ApiGateway::DomainName.EndpointConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-domainname-endpointconfiguration.html | AWS::ApiGateway::DomainName.EndpointConfiguration}
 */
export interface ApiGatewayDomainNameEndpointConfiguration {
  Types?: any[];
}
/**
 * Type definition for AWS::ApiGateway::DomainName.MutualTlsAuthentication
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-domainname-mutualtlsauthentication.html | AWS::ApiGateway::DomainName.MutualTlsAuthentication}
 */
export interface ApiGatewayDomainNameMutualTlsAuthentication {
  TruststoreVersion?: string;
  TruststoreUri?: string;
}
/**
 * Type definition for AWS::ApiGateway::Method.Integration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apitgateway-method-integration.html | AWS::ApiGateway::Method.Integration}
 */
export interface ApiGatewayMethodIntegration {
  CacheKeyParameters?: any[];
  CacheNamespace?: string;
  ConnectionId?: string;
  ConnectionType?: string;
  ContentHandling?: string;
  Credentials?: string;
  IntegrationHttpMethod?: string;
  IntegrationResponses?: any[];
  PassthroughBehavior?: string;
  RequestParameters?: Record<string, any>;
  RequestTemplates?: Record<string, any>;
  TimeoutInMillis?: number;
  Type?: string;
  Uri?: string;
}
/**
 * Type definition for AWS::ApiGateway::Method.IntegrationResponse
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apitgateway-method-integration-integrationresponse.html | AWS::ApiGateway::Method.IntegrationResponse}
 */
export interface ApiGatewayMethodIntegrationResponse {
  ContentHandling?: string;
  ResponseParameters?: Record<string, any>;
  ResponseTemplates?: Record<string, any>;
  SelectionPattern?: string;
  StatusCode: string;
}
/**
 * Type definition for AWS::ApiGateway::Method.MethodResponse
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apitgateway-method-methodresponse.html | AWS::ApiGateway::Method.MethodResponse}
 */
export interface ApiGatewayMethodMethodResponse {
  ResponseModels?: Record<string, any>;
  ResponseParameters?: Record<string, any>;
  StatusCode: string;
}
/**
 * Type definition for AWS::ApiGateway::RestApi.EndpointConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-restapi-endpointconfiguration.html | AWS::ApiGateway::RestApi.EndpointConfiguration}
 */
export interface ApiGatewayRestApiEndpointConfiguration {
  Types?: any[];
  VpcEndpointIds?: any[];
}
/**
 * Type definition for AWS::ApiGateway::RestApi.S3Location
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-restapi-s3location.html | AWS::ApiGateway::RestApi.S3Location}
 */
export interface ApiGatewayRestApiS3Location {
  Bucket?: string;
  ETag?: string;
  Version?: string;
  Key?: string;
}
/**
 * Type definition for AWS::ApiGateway::Stage.AccessLogSetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-stage-accesslogsetting.html | AWS::ApiGateway::Stage.AccessLogSetting}
 */
export interface ApiGatewayStageAccessLogSetting {
  Format?: string;
  DestinationArn?: string;
}
/**
 * Type definition for AWS::ApiGateway::Stage.CanarySetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-stage-canarysetting.html | AWS::ApiGateway::Stage.CanarySetting}
 */
export interface ApiGatewayStageCanarySetting {
  DeploymentId?: string;
  StageVariableOverrides?: Record<string, any>;
  PercentTraffic?: number;
  UseStageCache?: boolean;
}
/**
 * Type definition for AWS::ApiGateway::Stage.MethodSetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-stage-methodsetting.html | AWS::ApiGateway::Stage.MethodSetting}
 */
export interface ApiGatewayStageMethodSetting {
  CacheTtlInSeconds?: number;
  LoggingLevel?: string;
  ResourcePath?: string;
  CacheDataEncrypted?: boolean;
  DataTraceEnabled?: boolean;
  ThrottlingBurstLimit?: number;
  CachingEnabled?: boolean;
  MetricsEnabled?: boolean;
  HttpMethod?: string;
  ThrottlingRateLimit?: number;
}
/**
 * Type definition for AWS::ApiGateway::UsagePlan.ApiStage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-usageplan-apistage.html | AWS::ApiGateway::UsagePlan.ApiStage}
 */
export interface ApiGatewayUsagePlanApiStage {
  Stage?: string;
  ApiId?: string;
  Throttle?: Record<string, any>;
}
/**
 * Type definition for AWS::ApiGateway::UsagePlan.QuotaSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-usageplan-quotasettings.html | AWS::ApiGateway::UsagePlan.QuotaSettings}
 */
export interface ApiGatewayUsagePlanQuotaSettings {
  Period?: string;
  Limit?: number;
  Offset?: number;
}
/**
 * Type definition for AWS::ApiGateway::UsagePlan.ThrottleSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-usageplan-throttlesettings.html | AWS::ApiGateway::UsagePlan.ThrottleSettings}
 */
export interface ApiGatewayUsagePlanThrottleSettings {
  BurstLimit?: number;
  RateLimit?: number;
}
/**
 * Type definition for AWS::ApiGateway::Account
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-account.html | AWS::ApiGateway::Account}
 */
export interface ApiGatewayAccountProps {
  CloudWatchRoleArn?: string;
}
/**
 * Attributes type definition for AWS::ApiGateway::Account
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-account.html | AWS::ApiGateway::Account}
 */
export interface ApiGatewayAccountAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::ApiGateway::Account
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-account.html | AWS::ApiGateway::Account}
 */
export class ApiGatewayAccount extends ResourceBase<
  "AWS::ApiGateway::Account",
  ApiGatewayAccountProps,
  ApiGatewayAccountAttribs
> {
  public static readonly Type = "AWS::ApiGateway::Account";
  public static readonly AttributeNames: readonly (keyof ApiGatewayAccountAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: ApiGatewayAccountProps,
    options?: ResourceOptions,
  ) {
    super(
      ApiGatewayAccount.Type,
      ApiGatewayAccount.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ApiGateway::ApiKey
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-apikey.html | AWS::ApiGateway::ApiKey}
 */
export interface ApiGatewayApiKeyProps {
  Description?: string;
  StageKeys?: any[];
  Value?: string;
  Enabled?: boolean;
  CustomerId?: string;
  GenerateDistinctId?: boolean;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::ApiGateway::ApiKey
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-apikey.html | AWS::ApiGateway::ApiKey}
 */
export interface ApiGatewayApiKeyAttribs {
  APIKeyId?: string;
}
/**
 * Resource class for AWS::ApiGateway::ApiKey
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-apikey.html | AWS::ApiGateway::ApiKey}
 */
export class ApiGatewayApiKey extends ResourceBase<
  "AWS::ApiGateway::ApiKey",
  ApiGatewayApiKeyProps,
  ApiGatewayApiKeyAttribs
> {
  public static readonly Type = "AWS::ApiGateway::ApiKey";
  public static readonly AttributeNames: readonly (keyof ApiGatewayApiKeyAttribs)[] =
    ["APIKeyId"];
  constructor(
    logicalId: string,
    properties: ApiGatewayApiKeyProps,
    options?: ResourceOptions,
  ) {
    super(
      ApiGatewayApiKey.Type,
      ApiGatewayApiKey.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ApiGateway::Authorizer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-authorizer.html | AWS::ApiGateway::Authorizer}
 */
export interface ApiGatewayAuthorizerProps {
  ProviderARNs?: any[];
  AuthorizerCredentials?: string;
  IdentityValidationExpression?: string;
  Type: string;
  AuthorizerUri?: string;
  AuthorizerResultTtlInSeconds?: number;
  RestApiId: string;
  IdentitySource?: string;
  AuthType?: string;
  Name: string;
}
/**
 * Attributes type definition for AWS::ApiGateway::Authorizer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-authorizer.html | AWS::ApiGateway::Authorizer}
 */
export interface ApiGatewayAuthorizerAttribs {
  AuthorizerId?: string;
}
/**
 * Resource class for AWS::ApiGateway::Authorizer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-authorizer.html | AWS::ApiGateway::Authorizer}
 */
export class ApiGatewayAuthorizer extends ResourceBase<
  "AWS::ApiGateway::Authorizer",
  ApiGatewayAuthorizerProps,
  ApiGatewayAuthorizerAttribs
> {
  public static readonly Type = "AWS::ApiGateway::Authorizer";
  public static readonly AttributeNames: readonly (keyof ApiGatewayAuthorizerAttribs)[] =
    ["AuthorizerId"];
  constructor(
    logicalId: string,
    properties: ApiGatewayAuthorizerProps,
    options?: ResourceOptions,
  ) {
    super(
      ApiGatewayAuthorizer.Type,
      ApiGatewayAuthorizer.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ApiGateway::BasePathMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-basepathmapping.html | AWS::ApiGateway::BasePathMapping}
 */
export interface ApiGatewayBasePathMappingProps {
  DomainName: string;
  RestApiId?: string;
  Stage?: string;
  BasePath?: string;
  Id?: string;
}
/**
 * Resource class for AWS::ApiGateway::BasePathMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-basepathmapping.html | AWS::ApiGateway::BasePathMapping}
 */
export class ApiGatewayBasePathMapping extends ResourceBase<
  "AWS::ApiGateway::BasePathMapping",
  ApiGatewayBasePathMappingProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::ApiGateway::BasePathMapping";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ApiGatewayBasePathMappingProps,
    options?: ResourceOptions,
  ) {
    super(
      ApiGatewayBasePathMapping.Type,
      ApiGatewayBasePathMapping.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ApiGateway::ClientCertificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-clientcertificate.html | AWS::ApiGateway::ClientCertificate}
 */
export interface ApiGatewayClientCertificateProps {
  Description?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::ApiGateway::ClientCertificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-clientcertificate.html | AWS::ApiGateway::ClientCertificate}
 */
export interface ApiGatewayClientCertificateAttribs {
  ClientCertificateId?: string;
}
/**
 * Resource class for AWS::ApiGateway::ClientCertificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-clientcertificate.html | AWS::ApiGateway::ClientCertificate}
 */
export class ApiGatewayClientCertificate extends ResourceBase<
  "AWS::ApiGateway::ClientCertificate",
  ApiGatewayClientCertificateProps,
  ApiGatewayClientCertificateAttribs
> {
  public static readonly Type = "AWS::ApiGateway::ClientCertificate";
  public static readonly AttributeNames: readonly (keyof ApiGatewayClientCertificateAttribs)[] =
    ["ClientCertificateId"];
  constructor(
    logicalId: string,
    properties: ApiGatewayClientCertificateProps,
    options?: ResourceOptions,
  ) {
    super(
      ApiGatewayClientCertificate.Type,
      ApiGatewayClientCertificate.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ApiGateway::Deployment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-deployment.html | AWS::ApiGateway::Deployment}
 */
export interface ApiGatewayDeploymentProps {
  Description?: string;
  StageDescription?: ApiGatewayDeploymentStageDescription;
  StageName?: string;
  RestApiId: string;
  DeploymentCanarySettings?: ApiGatewayDeploymentDeploymentCanarySettings;
}
/**
 * Attributes type definition for AWS::ApiGateway::Deployment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-deployment.html | AWS::ApiGateway::Deployment}
 */
export interface ApiGatewayDeploymentAttribs {
  DeploymentId?: string;
}
/**
 * Resource class for AWS::ApiGateway::Deployment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-deployment.html | AWS::ApiGateway::Deployment}
 */
export class ApiGatewayDeployment extends ResourceBase<
  "AWS::ApiGateway::Deployment",
  ApiGatewayDeploymentProps,
  ApiGatewayDeploymentAttribs
> {
  public static readonly Type = "AWS::ApiGateway::Deployment";
  public static readonly AttributeNames: readonly (keyof ApiGatewayDeploymentAttribs)[] =
    ["DeploymentId"];
  constructor(
    logicalId: string,
    properties: ApiGatewayDeploymentProps,
    options?: ResourceOptions,
  ) {
    super(
      ApiGatewayDeployment.Type,
      ApiGatewayDeployment.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ApiGateway::DocumentationPart
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationpart.html | AWS::ApiGateway::DocumentationPart}
 */
export interface ApiGatewayDocumentationPartProps {
  RestApiId: string;
  Properties: string;
  Location: ApiGatewayDocumentationPartLocation;
}
/**
 * Attributes type definition for AWS::ApiGateway::DocumentationPart
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationpart.html | AWS::ApiGateway::DocumentationPart}
 */
export interface ApiGatewayDocumentationPartAttribs {
  DocumentationPartId?: string;
}
/**
 * Resource class for AWS::ApiGateway::DocumentationPart
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationpart.html | AWS::ApiGateway::DocumentationPart}
 */
export class ApiGatewayDocumentationPart extends ResourceBase<
  "AWS::ApiGateway::DocumentationPart",
  ApiGatewayDocumentationPartProps,
  ApiGatewayDocumentationPartAttribs
> {
  public static readonly Type = "AWS::ApiGateway::DocumentationPart";
  public static readonly AttributeNames: readonly (keyof ApiGatewayDocumentationPartAttribs)[] =
    ["DocumentationPartId"];
  constructor(
    logicalId: string,
    properties: ApiGatewayDocumentationPartProps,
    options?: ResourceOptions,
  ) {
    super(
      ApiGatewayDocumentationPart.Type,
      ApiGatewayDocumentationPart.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ApiGateway::DocumentationVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationversion.html | AWS::ApiGateway::DocumentationVersion}
 */
export interface ApiGatewayDocumentationVersionProps {
  Description?: string;
  DocumentationVersion: string;
  RestApiId: string;
}
/**
 * Resource class for AWS::ApiGateway::DocumentationVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationversion.html | AWS::ApiGateway::DocumentationVersion}
 */
export class ApiGatewayDocumentationVersion extends ResourceBase<
  "AWS::ApiGateway::DocumentationVersion",
  ApiGatewayDocumentationVersionProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::ApiGateway::DocumentationVersion";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ApiGatewayDocumentationVersionProps,
    options?: ResourceOptions,
  ) {
    super(
      ApiGatewayDocumentationVersion.Type,
      ApiGatewayDocumentationVersion.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ApiGateway::DomainName
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainname.html | AWS::ApiGateway::DomainName}
 */
export interface ApiGatewayDomainNameProps {
  MutualTlsAuthentication?: ApiGatewayDomainNameMutualTlsAuthentication;
  OwnershipVerificationCertificateArn?: string;
  DomainName?: string;
  SecurityPolicy?: string;
  EndpointConfiguration?: ApiGatewayDomainNameEndpointConfiguration;
  RegionalCertificateArn?: string;
  Tags?: Tag[];
  CertificateArn?: string;
}
/**
 * Attributes type definition for AWS::ApiGateway::DomainName
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainname.html | AWS::ApiGateway::DomainName}
 */
export interface ApiGatewayDomainNameAttribs {
  RegionalHostedZoneId?: string;
  RegionalDomainName?: string;
  DistributionHostedZoneId?: string;
  DistributionDomainName?: string;
}
/**
 * Resource class for AWS::ApiGateway::DomainName
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainname.html | AWS::ApiGateway::DomainName}
 */
export class ApiGatewayDomainName extends ResourceBase<
  "AWS::ApiGateway::DomainName",
  ApiGatewayDomainNameProps,
  ApiGatewayDomainNameAttribs
> {
  public static readonly Type = "AWS::ApiGateway::DomainName";
  public static readonly AttributeNames: readonly (keyof ApiGatewayDomainNameAttribs)[] =
    [
      "RegionalHostedZoneId",
      "RegionalDomainName",
      "DistributionHostedZoneId",
      "DistributionDomainName",
    ];
  constructor(
    logicalId: string,
    properties: ApiGatewayDomainNameProps,
    options?: ResourceOptions,
  ) {
    super(
      ApiGatewayDomainName.Type,
      ApiGatewayDomainName.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ApiGateway::GatewayResponse
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-gatewayresponse.html | AWS::ApiGateway::GatewayResponse}
 */
export interface ApiGatewayGatewayResponseProps {
  ResponseParameters?: Record<string, any>;
  ResponseTemplates?: Record<string, any>;
  ResponseType: string;
  RestApiId: string;
  StatusCode?: string;
}
/**
 * Resource class for AWS::ApiGateway::GatewayResponse
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-gatewayresponse.html | AWS::ApiGateway::GatewayResponse}
 */
export class ApiGatewayGatewayResponse extends ResourceBase<
  "AWS::ApiGateway::GatewayResponse",
  ApiGatewayGatewayResponseProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::ApiGateway::GatewayResponse";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ApiGatewayGatewayResponseProps,
    options?: ResourceOptions,
  ) {
    super(
      ApiGatewayGatewayResponse.Type,
      ApiGatewayGatewayResponse.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ApiGateway::Method
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html | AWS::ApiGateway::Method}
 */
export interface ApiGatewayMethodProps {
  ApiKeyRequired?: boolean;
  AuthorizationScopes?: any[];
  AuthorizationType?: string;
  AuthorizerId?: string;
  HttpMethod: string;
  Integration?: ApiGatewayMethodIntegration;
  MethodResponses?: any[];
  OperationName?: string;
  RequestModels?: Record<string, any>;
  RequestParameters?: Record<string, any>;
  RequestValidatorId?: string;
  ResourceId: string;
  RestApiId: string;
}
/**
 * Resource class for AWS::ApiGateway::Method
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html | AWS::ApiGateway::Method}
 */
export class ApiGatewayMethod extends ResourceBase<
  "AWS::ApiGateway::Method",
  ApiGatewayMethodProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::ApiGateway::Method";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ApiGatewayMethodProps,
    options?: ResourceOptions,
  ) {
    super(
      ApiGatewayMethod.Type,
      ApiGatewayMethod.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ApiGateway::Model
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-model.html | AWS::ApiGateway::Model}
 */
export interface ApiGatewayModelProps {
  Description?: string;
  ContentType?: string;
  Schema?: object;
  RestApiId: string;
  Name?: string;
}
/**
 * Resource class for AWS::ApiGateway::Model
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-model.html | AWS::ApiGateway::Model}
 */
export class ApiGatewayModel extends ResourceBase<
  "AWS::ApiGateway::Model",
  ApiGatewayModelProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::ApiGateway::Model";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ApiGatewayModelProps,
    options?: ResourceOptions,
  ) {
    super(
      ApiGatewayModel.Type,
      ApiGatewayModel.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ApiGateway::RequestValidator
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-requestvalidator.html | AWS::ApiGateway::RequestValidator}
 */
export interface ApiGatewayRequestValidatorProps {
  ValidateRequestParameters?: boolean;
  RestApiId: string;
  ValidateRequestBody?: boolean;
  Name?: string;
}
/**
 * Attributes type definition for AWS::ApiGateway::RequestValidator
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-requestvalidator.html | AWS::ApiGateway::RequestValidator}
 */
export interface ApiGatewayRequestValidatorAttribs {
  RequestValidatorId?: string;
}
/**
 * Resource class for AWS::ApiGateway::RequestValidator
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-requestvalidator.html | AWS::ApiGateway::RequestValidator}
 */
export class ApiGatewayRequestValidator extends ResourceBase<
  "AWS::ApiGateway::RequestValidator",
  ApiGatewayRequestValidatorProps,
  ApiGatewayRequestValidatorAttribs
> {
  public static readonly Type = "AWS::ApiGateway::RequestValidator";
  public static readonly AttributeNames: readonly (keyof ApiGatewayRequestValidatorAttribs)[] =
    ["RequestValidatorId"];
  constructor(
    logicalId: string,
    properties: ApiGatewayRequestValidatorProps,
    options?: ResourceOptions,
  ) {
    super(
      ApiGatewayRequestValidator.Type,
      ApiGatewayRequestValidator.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ApiGateway::Resource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-resource.html | AWS::ApiGateway::Resource}
 */
export interface ApiGatewayResourceProps {
  ParentId: string;
  PathPart: string;
  RestApiId: string;
}
/**
 * Attributes type definition for AWS::ApiGateway::Resource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-resource.html | AWS::ApiGateway::Resource}
 */
export interface ApiGatewayResourceAttribs {
  ResourceId?: string;
}
/**
 * Resource class for AWS::ApiGateway::Resource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-resource.html | AWS::ApiGateway::Resource}
 */
export class ApiGatewayResource extends ResourceBase<
  "AWS::ApiGateway::Resource",
  ApiGatewayResourceProps,
  ApiGatewayResourceAttribs
> {
  public static readonly Type = "AWS::ApiGateway::Resource";
  public static readonly AttributeNames: readonly (keyof ApiGatewayResourceAttribs)[] =
    ["ResourceId"];
  constructor(
    logicalId: string,
    properties: ApiGatewayResourceProps,
    options?: ResourceOptions,
  ) {
    super(
      ApiGatewayResource.Type,
      ApiGatewayResource.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ApiGateway::RestApi
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-restapi.html | AWS::ApiGateway::RestApi}
 */
export interface ApiGatewayRestApiProps {
  Policy?: object;
  BodyS3Location?: ApiGatewayRestApiS3Location;
  Description?: string;
  MinimumCompressionSize?: number;
  Parameters?: Record<string, any>;
  CloneFrom?: string;
  Mode?: string;
  DisableExecuteApiEndpoint?: boolean;
  FailOnWarnings?: boolean;
  BinaryMediaTypes?: any[];
  Name?: string;
  ApiKeySourceType?: string;
  EndpointConfiguration?: ApiGatewayRestApiEndpointConfiguration;
  Body?: object;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::ApiGateway::RestApi
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-restapi.html | AWS::ApiGateway::RestApi}
 */
export interface ApiGatewayRestApiAttribs {
  RootResourceId?: string;
  RestApiId?: string;
}
/**
 * Resource class for AWS::ApiGateway::RestApi
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-restapi.html | AWS::ApiGateway::RestApi}
 */
export class ApiGatewayRestApi extends ResourceBase<
  "AWS::ApiGateway::RestApi",
  ApiGatewayRestApiProps,
  ApiGatewayRestApiAttribs
> {
  public static readonly Type = "AWS::ApiGateway::RestApi";
  public static readonly AttributeNames: readonly (keyof ApiGatewayRestApiAttribs)[] =
    ["RootResourceId", "RestApiId"];
  constructor(
    logicalId: string,
    properties: ApiGatewayRestApiProps,
    options?: ResourceOptions,
  ) {
    super(
      ApiGatewayRestApi.Type,
      ApiGatewayRestApi.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ApiGateway::Stage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-stage.html | AWS::ApiGateway::Stage}
 */
export interface ApiGatewayStageProps {
  DeploymentId?: string;
  Description?: string;
  StageName?: string;
  RestApiId: string;
  CanarySetting?: ApiGatewayStageCanarySetting;
  ClientCertificateId?: string;
  Variables?: Record<string, any>;
  DocumentationVersion?: string;
  TracingEnabled?: boolean;
  MethodSettings?: any[];
  AccessLogSetting?: ApiGatewayStageAccessLogSetting;
  CacheClusterSize?: string;
  Tags?: Tag[];
  CacheClusterEnabled?: boolean;
}
/**
 * Resource class for AWS::ApiGateway::Stage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-stage.html | AWS::ApiGateway::Stage}
 */
export class ApiGatewayStage extends ResourceBase<
  "AWS::ApiGateway::Stage",
  ApiGatewayStageProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::ApiGateway::Stage";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ApiGatewayStageProps,
    options?: ResourceOptions,
  ) {
    super(
      ApiGatewayStage.Type,
      ApiGatewayStage.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ApiGateway::UsagePlan
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html | AWS::ApiGateway::UsagePlan}
 */
export interface ApiGatewayUsagePlanProps {
  Description?: string;
  Quota?: ApiGatewayUsagePlanQuotaSettings;
  ApiStages?: any[];
  Tags?: Tag[];
  Throttle?: ApiGatewayUsagePlanThrottleSettings;
  UsagePlanName?: string;
}
/**
 * Attributes type definition for AWS::ApiGateway::UsagePlan
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html | AWS::ApiGateway::UsagePlan}
 */
export interface ApiGatewayUsagePlanAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::ApiGateway::UsagePlan
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html | AWS::ApiGateway::UsagePlan}
 */
export class ApiGatewayUsagePlan extends ResourceBase<
  "AWS::ApiGateway::UsagePlan",
  ApiGatewayUsagePlanProps,
  ApiGatewayUsagePlanAttribs
> {
  public static readonly Type = "AWS::ApiGateway::UsagePlan";
  public static readonly AttributeNames: readonly (keyof ApiGatewayUsagePlanAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: ApiGatewayUsagePlanProps,
    options?: ResourceOptions,
  ) {
    super(
      ApiGatewayUsagePlan.Type,
      ApiGatewayUsagePlan.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ApiGateway::UsagePlanKey
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplankey.html | AWS::ApiGateway::UsagePlanKey}
 */
export interface ApiGatewayUsagePlanKeyProps {
  KeyType: string;
  UsagePlanId: string;
  KeyId: string;
}
/**
 * Attributes type definition for AWS::ApiGateway::UsagePlanKey
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplankey.html | AWS::ApiGateway::UsagePlanKey}
 */
export interface ApiGatewayUsagePlanKeyAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::ApiGateway::UsagePlanKey
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplankey.html | AWS::ApiGateway::UsagePlanKey}
 */
export class ApiGatewayUsagePlanKey extends ResourceBase<
  "AWS::ApiGateway::UsagePlanKey",
  ApiGatewayUsagePlanKeyProps,
  ApiGatewayUsagePlanKeyAttribs
> {
  public static readonly Type = "AWS::ApiGateway::UsagePlanKey";
  public static readonly AttributeNames: readonly (keyof ApiGatewayUsagePlanKeyAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: ApiGatewayUsagePlanKeyProps,
    options?: ResourceOptions,
  ) {
    super(
      ApiGatewayUsagePlanKey.Type,
      ApiGatewayUsagePlanKey.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ApiGateway::VpcLink
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-vpclink.html | AWS::ApiGateway::VpcLink}
 */
export interface ApiGatewayVpcLinkProps {
  Description?: string;
  TargetArns: any[];
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::ApiGateway::VpcLink
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-vpclink.html | AWS::ApiGateway::VpcLink}
 */
export interface ApiGatewayVpcLinkAttribs {
  VpcLinkId?: string;
}
/**
 * Resource class for AWS::ApiGateway::VpcLink
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-vpclink.html | AWS::ApiGateway::VpcLink}
 */
export class ApiGatewayVpcLink extends ResourceBase<
  "AWS::ApiGateway::VpcLink",
  ApiGatewayVpcLinkProps,
  ApiGatewayVpcLinkAttribs
> {
  public static readonly Type = "AWS::ApiGateway::VpcLink";
  public static readonly AttributeNames: readonly (keyof ApiGatewayVpcLinkAttribs)[] =
    ["VpcLinkId"];
  constructor(
    logicalId: string,
    properties: ApiGatewayVpcLinkProps,
    options?: ResourceOptions,
  ) {
    super(
      ApiGatewayVpcLink.Type,
      ApiGatewayVpcLink.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
