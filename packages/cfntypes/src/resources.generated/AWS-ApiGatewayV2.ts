import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::ApiGatewayV2::Api.BodyS3Location
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-api-bodys3location.html | AWS::ApiGatewayV2::Api.BodyS3Location}
 */
export interface ApiGatewayV2ApiBodyS3Location {
  Etag?: string;
  Bucket?: string;
  Version?: string;
  Key?: string;
}
/**
 * Type definition for AWS::ApiGatewayV2::Api.Cors
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-api-cors.html | AWS::ApiGatewayV2::Api.Cors}
 */
export interface ApiGatewayV2ApiCors {
  AllowOrigins?: any[];
  AllowCredentials?: boolean;
  ExposeHeaders?: any[];
  AllowHeaders?: any[];
  MaxAge?: number;
  AllowMethods?: any[];
}
/**
 * Type definition for AWS::ApiGatewayV2::ApiGatewayManagedOverrides.AccessLogSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-accesslogsettings.html | AWS::ApiGatewayV2::ApiGatewayManagedOverrides.AccessLogSettings}
 */
export interface ApiGatewayV2ApiGatewayManagedOverridesAccessLogSettings {
  Format?: string;
  DestinationArn?: string;
}
/**
 * Type definition for AWS::ApiGatewayV2::ApiGatewayManagedOverrides.IntegrationOverrides
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-integrationoverrides.html | AWS::ApiGatewayV2::ApiGatewayManagedOverrides.IntegrationOverrides}
 */
export interface ApiGatewayV2ApiGatewayManagedOverridesIntegrationOverrides {
  Description?: string;
  PayloadFormatVersion?: string;
  TimeoutInMillis?: number;
  IntegrationMethod?: string;
}
/**
 * Type definition for AWS::ApiGatewayV2::ApiGatewayManagedOverrides.RouteOverrides
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-routeoverrides.html | AWS::ApiGatewayV2::ApiGatewayManagedOverrides.RouteOverrides}
 */
export interface ApiGatewayV2ApiGatewayManagedOverridesRouteOverrides {
  Target?: string;
  AuthorizerId?: string;
  OperationName?: string;
  AuthorizationScopes?: any[];
  AuthorizationType?: string;
}
/**
 * Type definition for AWS::ApiGatewayV2::ApiGatewayManagedOverrides.RouteSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-routesettings.html | AWS::ApiGatewayV2::ApiGatewayManagedOverrides.RouteSettings}
 */
export interface ApiGatewayV2ApiGatewayManagedOverridesRouteSettings {
  LoggingLevel?: string;
  DataTraceEnabled?: boolean;
  ThrottlingBurstLimit?: number;
  DetailedMetricsEnabled?: boolean;
  ThrottlingRateLimit?: number;
}
/**
 * Type definition for AWS::ApiGatewayV2::ApiGatewayManagedOverrides.StageOverrides
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-stageoverrides.html | AWS::ApiGatewayV2::ApiGatewayManagedOverrides.StageOverrides}
 */
export interface ApiGatewayV2ApiGatewayManagedOverridesStageOverrides {
  Description?: string;
  AccessLogSettings?: ApiGatewayV2ApiGatewayManagedOverridesAccessLogSettings;
  AutoDeploy?: boolean;
  RouteSettings?: object;
  StageVariables?: object;
  DefaultRouteSettings?: ApiGatewayV2ApiGatewayManagedOverridesRouteSettings;
}
/**
 * Type definition for AWS::ApiGatewayV2::Authorizer.JWTConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-authorizer-jwtconfiguration.html | AWS::ApiGatewayV2::Authorizer.JWTConfiguration}
 */
export interface ApiGatewayV2AuthorizerJWTConfiguration {
  Issuer?: string;
  Audience?: any[];
}
/**
 * Type definition for AWS::ApiGatewayV2::DomainName.DomainNameConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-domainname-domainnameconfiguration.html | AWS::ApiGatewayV2::DomainName.DomainNameConfiguration}
 */
export interface ApiGatewayV2DomainNameDomainNameConfiguration {
  OwnershipVerificationCertificateArn?: string;
  SecurityPolicy?: string;
  EndpointType?: string;
  CertificateName?: string;
  CertificateArn?: string;
}
/**
 * Type definition for AWS::ApiGatewayV2::DomainName.MutualTlsAuthentication
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-domainname-mutualtlsauthentication.html | AWS::ApiGatewayV2::DomainName.MutualTlsAuthentication}
 */
export interface ApiGatewayV2DomainNameMutualTlsAuthentication {
  TruststoreVersion?: string;
  TruststoreUri?: string;
}
/**
 * Type definition for AWS::ApiGatewayV2::Integration.ResponseParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-integration-responseparameter.html | AWS::ApiGatewayV2::Integration.ResponseParameter}
 */
export interface ApiGatewayV2IntegrationResponseParameter {
  Destination: string;
  Source: string;
}
/**
 * Type definition for AWS::ApiGatewayV2::Integration.ResponseParameterList
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-integration-responseparameterlist.html | AWS::ApiGatewayV2::Integration.ResponseParameterList}
 */
export interface ApiGatewayV2IntegrationResponseParameterList {
  ResponseParameters?: any[];
}
/**
 * Type definition for AWS::ApiGatewayV2::Integration.TlsConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-integration-tlsconfig.html | AWS::ApiGatewayV2::Integration.TlsConfig}
 */
export interface ApiGatewayV2IntegrationTlsConfig {
  ServerNameToVerify?: string;
}
/**
 * Type definition for AWS::ApiGatewayV2::RouteResponse.ParameterConstraints
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-routeresponse-parameterconstraints.html | AWS::ApiGatewayV2::RouteResponse.ParameterConstraints}
 */
export interface ApiGatewayV2RouteResponseParameterConstraints {
  Required: boolean;
}
/**
 * Type definition for AWS::ApiGatewayV2::Stage.AccessLogSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-stage-accesslogsettings.html | AWS::ApiGatewayV2::Stage.AccessLogSettings}
 */
export interface ApiGatewayV2StageAccessLogSettings {
  Format?: string;
  DestinationArn?: string;
}
/**
 * Type definition for AWS::ApiGatewayV2::Stage.RouteSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-stage-routesettings.html | AWS::ApiGatewayV2::Stage.RouteSettings}
 */
export interface ApiGatewayV2StageRouteSettings {
  LoggingLevel?: string;
  DataTraceEnabled?: boolean;
  ThrottlingBurstLimit?: number;
  DetailedMetricsEnabled?: boolean;
  ThrottlingRateLimit?: number;
}
/**
 * Type definition for AWS::ApiGatewayV2::Api
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-api.html | AWS::ApiGatewayV2::Api}
 */
export interface ApiGatewayV2ApiProps {
  RouteSelectionExpression?: string;
  BodyS3Location?: ApiGatewayV2ApiBodyS3Location;
  Description?: string;
  BasePath?: string;
  FailOnWarnings?: boolean;
  DisableExecuteApiEndpoint?: boolean;
  DisableSchemaValidation?: boolean;
  Name?: string;
  Target?: string;
  CredentialsArn?: string;
  CorsConfiguration?: ApiGatewayV2ApiCors;
  Version?: string;
  ProtocolType?: string;
  RouteKey?: string;
  Body?: object;
  Tags?: Record<string, Tag>;
  ApiKeySelectionExpression?: string;
}
/**
 * Attributes type definition for AWS::ApiGatewayV2::Api
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-api.html | AWS::ApiGatewayV2::Api}
 */
export interface ApiGatewayV2ApiAttribs {
  ApiEndpoint?: string;
  ApiId?: string;
}
/**
 * Resource class for AWS::ApiGatewayV2::Api
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-api.html | AWS::ApiGatewayV2::Api}
 */
export class ApiGatewayV2Api extends ResourceBase<
  "AWS::ApiGatewayV2::Api",
  ApiGatewayV2ApiProps,
  ApiGatewayV2ApiAttribs
> {
  public static readonly Type = "AWS::ApiGatewayV2::Api";
  public static readonly AttributeNames: readonly (keyof ApiGatewayV2ApiAttribs)[] =
    ["ApiEndpoint", "ApiId"];
  constructor(
    logicalId: string,
    properties: ApiGatewayV2ApiProps,
    options?: ResourceOptions,
  ) {
    super(
      ApiGatewayV2Api.Type,
      ApiGatewayV2Api.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ApiGatewayV2::ApiGatewayManagedOverrides
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apigatewaymanagedoverrides.html | AWS::ApiGatewayV2::ApiGatewayManagedOverrides}
 */
export interface ApiGatewayV2ApiGatewayManagedOverridesProps {
  Integration?: ApiGatewayV2ApiGatewayManagedOverridesIntegrationOverrides;
  Stage?: ApiGatewayV2ApiGatewayManagedOverridesStageOverrides;
  ApiId: string;
  Route?: ApiGatewayV2ApiGatewayManagedOverridesRouteOverrides;
}
/**
 * Resource class for AWS::ApiGatewayV2::ApiGatewayManagedOverrides
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apigatewaymanagedoverrides.html | AWS::ApiGatewayV2::ApiGatewayManagedOverrides}
 */
export class ApiGatewayV2ApiGatewayManagedOverrides extends ResourceBase<
  "AWS::ApiGatewayV2::ApiGatewayManagedOverrides",
  ApiGatewayV2ApiGatewayManagedOverridesProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::ApiGatewayV2::ApiGatewayManagedOverrides";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ApiGatewayV2ApiGatewayManagedOverridesProps,
    options?: ResourceOptions,
  ) {
    super(
      ApiGatewayV2ApiGatewayManagedOverrides.Type,
      ApiGatewayV2ApiGatewayManagedOverrides.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ApiGatewayV2::ApiMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apimapping.html | AWS::ApiGatewayV2::ApiMapping}
 */
export interface ApiGatewayV2ApiMappingProps {
  DomainName: string;
  Stage: string;
  ApiMappingKey?: string;
  ApiId: string;
}
/**
 * Attributes type definition for AWS::ApiGatewayV2::ApiMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apimapping.html | AWS::ApiGatewayV2::ApiMapping}
 */
export interface ApiGatewayV2ApiMappingAttribs {
  ApiMappingId?: string;
}
/**
 * Resource class for AWS::ApiGatewayV2::ApiMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apimapping.html | AWS::ApiGatewayV2::ApiMapping}
 */
export class ApiGatewayV2ApiMapping extends ResourceBase<
  "AWS::ApiGatewayV2::ApiMapping",
  ApiGatewayV2ApiMappingProps,
  ApiGatewayV2ApiMappingAttribs
> {
  public static readonly Type = "AWS::ApiGatewayV2::ApiMapping";
  public static readonly AttributeNames: readonly (keyof ApiGatewayV2ApiMappingAttribs)[] =
    ["ApiMappingId"];
  constructor(
    logicalId: string,
    properties: ApiGatewayV2ApiMappingProps,
    options?: ResourceOptions,
  ) {
    super(
      ApiGatewayV2ApiMapping.Type,
      ApiGatewayV2ApiMapping.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ApiGatewayV2::Authorizer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-authorizer.html | AWS::ApiGatewayV2::Authorizer}
 */
export interface ApiGatewayV2AuthorizerProps {
  IdentityValidationExpression?: string;
  AuthorizerUri?: string;
  AuthorizerCredentialsArn?: string;
  AuthorizerType: string;
  JwtConfiguration?: ApiGatewayV2AuthorizerJWTConfiguration;
  AuthorizerResultTtlInSeconds?: number;
  IdentitySource?: any[];
  AuthorizerPayloadFormatVersion?: string;
  EnableSimpleResponses?: boolean;
  ApiId: string;
  Name: string;
}
/**
 * Attributes type definition for AWS::ApiGatewayV2::Authorizer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-authorizer.html | AWS::ApiGatewayV2::Authorizer}
 */
export interface ApiGatewayV2AuthorizerAttribs {
  AuthorizerId?: string;
}
/**
 * Resource class for AWS::ApiGatewayV2::Authorizer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-authorizer.html | AWS::ApiGatewayV2::Authorizer}
 */
export class ApiGatewayV2Authorizer extends ResourceBase<
  "AWS::ApiGatewayV2::Authorizer",
  ApiGatewayV2AuthorizerProps,
  ApiGatewayV2AuthorizerAttribs
> {
  public static readonly Type = "AWS::ApiGatewayV2::Authorizer";
  public static readonly AttributeNames: readonly (keyof ApiGatewayV2AuthorizerAttribs)[] =
    ["AuthorizerId"];
  constructor(
    logicalId: string,
    properties: ApiGatewayV2AuthorizerProps,
    options?: ResourceOptions,
  ) {
    super(
      ApiGatewayV2Authorizer.Type,
      ApiGatewayV2Authorizer.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ApiGatewayV2::Deployment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-deployment.html | AWS::ApiGatewayV2::Deployment}
 */
export interface ApiGatewayV2DeploymentProps {
  Description?: string;
  StageName?: string;
  ApiId: string;
}
/**
 * Attributes type definition for AWS::ApiGatewayV2::Deployment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-deployment.html | AWS::ApiGatewayV2::Deployment}
 */
export interface ApiGatewayV2DeploymentAttribs {
  DeploymentId?: string;
}
/**
 * Resource class for AWS::ApiGatewayV2::Deployment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-deployment.html | AWS::ApiGatewayV2::Deployment}
 */
export class ApiGatewayV2Deployment extends ResourceBase<
  "AWS::ApiGatewayV2::Deployment",
  ApiGatewayV2DeploymentProps,
  ApiGatewayV2DeploymentAttribs
> {
  public static readonly Type = "AWS::ApiGatewayV2::Deployment";
  public static readonly AttributeNames: readonly (keyof ApiGatewayV2DeploymentAttribs)[] =
    ["DeploymentId"];
  constructor(
    logicalId: string,
    properties: ApiGatewayV2DeploymentProps,
    options?: ResourceOptions,
  ) {
    super(
      ApiGatewayV2Deployment.Type,
      ApiGatewayV2Deployment.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ApiGatewayV2::DomainName
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-domainname.html | AWS::ApiGatewayV2::DomainName}
 */
export interface ApiGatewayV2DomainNameProps {
  MutualTlsAuthentication?: ApiGatewayV2DomainNameMutualTlsAuthentication;
  DomainName: string;
  DomainNameConfigurations?: any[];
  Tags?: object;
}
/**
 * Attributes type definition for AWS::ApiGatewayV2::DomainName
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-domainname.html | AWS::ApiGatewayV2::DomainName}
 */
export interface ApiGatewayV2DomainNameAttribs {
  RegionalHostedZoneId?: string;
  RegionalDomainName?: string;
}
/**
 * Resource class for AWS::ApiGatewayV2::DomainName
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-domainname.html | AWS::ApiGatewayV2::DomainName}
 */
export class ApiGatewayV2DomainName extends ResourceBase<
  "AWS::ApiGatewayV2::DomainName",
  ApiGatewayV2DomainNameProps,
  ApiGatewayV2DomainNameAttribs
> {
  public static readonly Type = "AWS::ApiGatewayV2::DomainName";
  public static readonly AttributeNames: readonly (keyof ApiGatewayV2DomainNameAttribs)[] =
    ["RegionalHostedZoneId", "RegionalDomainName"];
  constructor(
    logicalId: string,
    properties: ApiGatewayV2DomainNameProps,
    options?: ResourceOptions,
  ) {
    super(
      ApiGatewayV2DomainName.Type,
      ApiGatewayV2DomainName.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ApiGatewayV2::Integration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integration.html | AWS::ApiGatewayV2::Integration}
 */
export interface ApiGatewayV2IntegrationProps {
  Description?: string;
  TemplateSelectionExpression?: string;
  ConnectionType?: string;
  ResponseParameters?: object;
  IntegrationMethod?: string;
  PassthroughBehavior?: string;
  RequestParameters?: object;
  ConnectionId?: string;
  IntegrationUri?: string;
  PayloadFormatVersion?: string;
  CredentialsArn?: string;
  RequestTemplates?: object;
  TimeoutInMillis?: number;
  TlsConfig?: ApiGatewayV2IntegrationTlsConfig;
  ContentHandlingStrategy?: string;
  IntegrationSubtype?: string;
  ApiId: string;
  IntegrationType: string;
}
/**
 * Resource class for AWS::ApiGatewayV2::Integration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integration.html | AWS::ApiGatewayV2::Integration}
 */
export class ApiGatewayV2Integration extends ResourceBase<
  "AWS::ApiGatewayV2::Integration",
  ApiGatewayV2IntegrationProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::ApiGatewayV2::Integration";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ApiGatewayV2IntegrationProps,
    options?: ResourceOptions,
  ) {
    super(
      ApiGatewayV2Integration.Type,
      ApiGatewayV2Integration.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ApiGatewayV2::IntegrationResponse
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integrationresponse.html | AWS::ApiGatewayV2::IntegrationResponse}
 */
export interface ApiGatewayV2IntegrationResponseProps {
  ResponseTemplates?: object;
  TemplateSelectionExpression?: string;
  ResponseParameters?: object;
  ContentHandlingStrategy?: string;
  IntegrationId: string;
  IntegrationResponseKey: string;
  ApiId: string;
}
/**
 * Attributes type definition for AWS::ApiGatewayV2::IntegrationResponse
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integrationresponse.html | AWS::ApiGatewayV2::IntegrationResponse}
 */
export interface ApiGatewayV2IntegrationResponseAttribs {
  IntegrationResponseId?: string;
}
/**
 * Resource class for AWS::ApiGatewayV2::IntegrationResponse
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integrationresponse.html | AWS::ApiGatewayV2::IntegrationResponse}
 */
export class ApiGatewayV2IntegrationResponse extends ResourceBase<
  "AWS::ApiGatewayV2::IntegrationResponse",
  ApiGatewayV2IntegrationResponseProps,
  ApiGatewayV2IntegrationResponseAttribs
> {
  public static readonly Type = "AWS::ApiGatewayV2::IntegrationResponse";
  public static readonly AttributeNames: readonly (keyof ApiGatewayV2IntegrationResponseAttribs)[] =
    ["IntegrationResponseId"];
  constructor(
    logicalId: string,
    properties: ApiGatewayV2IntegrationResponseProps,
    options?: ResourceOptions,
  ) {
    super(
      ApiGatewayV2IntegrationResponse.Type,
      ApiGatewayV2IntegrationResponse.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ApiGatewayV2::Model
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-model.html | AWS::ApiGatewayV2::Model}
 */
export interface ApiGatewayV2ModelProps {
  Description?: string;
  ContentType?: string;
  Schema: object;
  ApiId: string;
  Name: string;
}
/**
 * Attributes type definition for AWS::ApiGatewayV2::Model
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-model.html | AWS::ApiGatewayV2::Model}
 */
export interface ApiGatewayV2ModelAttribs {
  ModelId?: string;
}
/**
 * Resource class for AWS::ApiGatewayV2::Model
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-model.html | AWS::ApiGatewayV2::Model}
 */
export class ApiGatewayV2Model extends ResourceBase<
  "AWS::ApiGatewayV2::Model",
  ApiGatewayV2ModelProps,
  ApiGatewayV2ModelAttribs
> {
  public static readonly Type = "AWS::ApiGatewayV2::Model";
  public static readonly AttributeNames: readonly (keyof ApiGatewayV2ModelAttribs)[] =
    ["ModelId"];
  constructor(
    logicalId: string,
    properties: ApiGatewayV2ModelProps,
    options?: ResourceOptions,
  ) {
    super(
      ApiGatewayV2Model.Type,
      ApiGatewayV2Model.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ApiGatewayV2::Route
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-route.html | AWS::ApiGatewayV2::Route}
 */
export interface ApiGatewayV2RouteProps {
  Target?: string;
  RouteResponseSelectionExpression?: string;
  RequestModels?: object;
  OperationName?: string;
  AuthorizerId?: string;
  AuthorizationScopes?: any[];
  ApiKeyRequired?: boolean;
  RouteKey: string;
  AuthorizationType?: string;
  ModelSelectionExpression?: string;
  ApiId: string;
  RequestParameters?: object;
}
/**
 * Attributes type definition for AWS::ApiGatewayV2::Route
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-route.html | AWS::ApiGatewayV2::Route}
 */
export interface ApiGatewayV2RouteAttribs {
  RouteId?: string;
}
/**
 * Resource class for AWS::ApiGatewayV2::Route
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-route.html | AWS::ApiGatewayV2::Route}
 */
export class ApiGatewayV2Route extends ResourceBase<
  "AWS::ApiGatewayV2::Route",
  ApiGatewayV2RouteProps,
  ApiGatewayV2RouteAttribs
> {
  public static readonly Type = "AWS::ApiGatewayV2::Route";
  public static readonly AttributeNames: readonly (keyof ApiGatewayV2RouteAttribs)[] =
    ["RouteId"];
  constructor(
    logicalId: string,
    properties: ApiGatewayV2RouteProps,
    options?: ResourceOptions,
  ) {
    super(
      ApiGatewayV2Route.Type,
      ApiGatewayV2Route.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ApiGatewayV2::RouteResponse
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-routeresponse.html | AWS::ApiGatewayV2::RouteResponse}
 */
export interface ApiGatewayV2RouteResponseProps {
  RouteResponseKey: string;
  ResponseParameters?: Record<string, any>;
  RouteId: string;
  ModelSelectionExpression?: string;
  ApiId: string;
  ResponseModels?: object;
}
/**
 * Attributes type definition for AWS::ApiGatewayV2::RouteResponse
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-routeresponse.html | AWS::ApiGatewayV2::RouteResponse}
 */
export interface ApiGatewayV2RouteResponseAttribs {
  RouteResponseId?: string;
}
/**
 * Resource class for AWS::ApiGatewayV2::RouteResponse
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-routeresponse.html | AWS::ApiGatewayV2::RouteResponse}
 */
export class ApiGatewayV2RouteResponse extends ResourceBase<
  "AWS::ApiGatewayV2::RouteResponse",
  ApiGatewayV2RouteResponseProps,
  ApiGatewayV2RouteResponseAttribs
> {
  public static readonly Type = "AWS::ApiGatewayV2::RouteResponse";
  public static readonly AttributeNames: readonly (keyof ApiGatewayV2RouteResponseAttribs)[] =
    ["RouteResponseId"];
  constructor(
    logicalId: string,
    properties: ApiGatewayV2RouteResponseProps,
    options?: ResourceOptions,
  ) {
    super(
      ApiGatewayV2RouteResponse.Type,
      ApiGatewayV2RouteResponse.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ApiGatewayV2::Stage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-stage.html | AWS::ApiGatewayV2::Stage}
 */
export interface ApiGatewayV2StageProps {
  ClientCertificateId?: string;
  DeploymentId?: string;
  Description?: string;
  AccessLogSettings?: ApiGatewayV2StageAccessLogSettings;
  AutoDeploy?: boolean;
  RouteSettings?: object;
  StageName: string;
  StageVariables?: object;
  AccessPolicyId?: string;
  ApiId: string;
  DefaultRouteSettings?: ApiGatewayV2StageRouteSettings;
  Tags?: object;
}
/**
 * Resource class for AWS::ApiGatewayV2::Stage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-stage.html | AWS::ApiGatewayV2::Stage}
 */
export class ApiGatewayV2Stage extends ResourceBase<
  "AWS::ApiGatewayV2::Stage",
  ApiGatewayV2StageProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::ApiGatewayV2::Stage";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ApiGatewayV2StageProps,
    options?: ResourceOptions,
  ) {
    super(
      ApiGatewayV2Stage.Type,
      ApiGatewayV2Stage.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ApiGatewayV2::VpcLink
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-vpclink.html | AWS::ApiGatewayV2::VpcLink}
 */
export interface ApiGatewayV2VpcLinkProps {
  SubnetIds: any[];
  SecurityGroupIds?: any[];
  Tags?: Record<string, Tag>;
  Name: string;
}
/**
 * Attributes type definition for AWS::ApiGatewayV2::VpcLink
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-vpclink.html | AWS::ApiGatewayV2::VpcLink}
 */
export interface ApiGatewayV2VpcLinkAttribs {
  VpcLinkId?: string;
}
/**
 * Resource class for AWS::ApiGatewayV2::VpcLink
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-vpclink.html | AWS::ApiGatewayV2::VpcLink}
 */
export class ApiGatewayV2VpcLink extends ResourceBase<
  "AWS::ApiGatewayV2::VpcLink",
  ApiGatewayV2VpcLinkProps,
  ApiGatewayV2VpcLinkAttribs
> {
  public static readonly Type = "AWS::ApiGatewayV2::VpcLink";
  public static readonly AttributeNames: readonly (keyof ApiGatewayV2VpcLinkAttribs)[] =
    ["VpcLinkId"];
  constructor(
    logicalId: string,
    properties: ApiGatewayV2VpcLinkProps,
    options?: ResourceOptions,
  ) {
    super(
      ApiGatewayV2VpcLink.Type,
      ApiGatewayV2VpcLink.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
