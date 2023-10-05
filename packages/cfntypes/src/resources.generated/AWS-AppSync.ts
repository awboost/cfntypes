import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::AppSync::DataSource.AuthorizationConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-authorizationconfig.html | AWS::AppSync::DataSource.AuthorizationConfig}
 */
export interface AppSyncDataSourceAuthorizationConfig {
  AwsIamConfig?: AppSyncDataSourceAwsIamConfig;
  AuthorizationType: string;
}
/**
 * Type definition for AWS::AppSync::DataSource.AwsIamConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-awsiamconfig.html | AWS::AppSync::DataSource.AwsIamConfig}
 */
export interface AppSyncDataSourceAwsIamConfig {
  SigningRegion?: string;
  SigningServiceName?: string;
}
/**
 * Type definition for AWS::AppSync::DataSource.DeltaSyncConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-deltasyncconfig.html | AWS::AppSync::DataSource.DeltaSyncConfig}
 */
export interface AppSyncDataSourceDeltaSyncConfig {
  BaseTableTTL: string;
  DeltaSyncTableTTL: string;
  DeltaSyncTableName: string;
}
/**
 * Type definition for AWS::AppSync::DataSource.DynamoDBConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-dynamodbconfig.html | AWS::AppSync::DataSource.DynamoDBConfig}
 */
export interface AppSyncDataSourceDynamoDBConfig {
  TableName: string;
  AwsRegion: string;
  Versioned?: boolean;
  DeltaSyncConfig?: AppSyncDataSourceDeltaSyncConfig;
  UseCallerCredentials?: boolean;
}
/**
 * Type definition for AWS::AppSync::DataSource.ElasticsearchConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-elasticsearchconfig.html | AWS::AppSync::DataSource.ElasticsearchConfig}
 */
export interface AppSyncDataSourceElasticsearchConfig {
  AwsRegion: string;
  Endpoint: string;
}
/**
 * Type definition for AWS::AppSync::DataSource.EventBridgeConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-eventbridgeconfig.html | AWS::AppSync::DataSource.EventBridgeConfig}
 */
export interface AppSyncDataSourceEventBridgeConfig {
  EventBusArn: string;
}
/**
 * Type definition for AWS::AppSync::DataSource.HttpConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-httpconfig.html | AWS::AppSync::DataSource.HttpConfig}
 */
export interface AppSyncDataSourceHttpConfig {
  Endpoint: string;
  AuthorizationConfig?: AppSyncDataSourceAuthorizationConfig;
}
/**
 * Type definition for AWS::AppSync::DataSource.LambdaConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-lambdaconfig.html | AWS::AppSync::DataSource.LambdaConfig}
 */
export interface AppSyncDataSourceLambdaConfig {
  LambdaFunctionArn: string;
}
/**
 * Type definition for AWS::AppSync::DataSource.OpenSearchServiceConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-opensearchserviceconfig.html | AWS::AppSync::DataSource.OpenSearchServiceConfig}
 */
export interface AppSyncDataSourceOpenSearchServiceConfig {
  AwsRegion: string;
  Endpoint: string;
}
/**
 * Type definition for AWS::AppSync::DataSource.RdsHttpEndpointConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-rdshttpendpointconfig.html | AWS::AppSync::DataSource.RdsHttpEndpointConfig}
 */
export interface AppSyncDataSourceRdsHttpEndpointConfig {
  AwsRegion: string;
  Schema?: string;
  DatabaseName?: string;
  DbClusterIdentifier: string;
  AwsSecretStoreArn: string;
}
/**
 * Type definition for AWS::AppSync::DataSource.RelationalDatabaseConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-relationaldatabaseconfig.html | AWS::AppSync::DataSource.RelationalDatabaseConfig}
 */
export interface AppSyncDataSourceRelationalDatabaseConfig {
  RdsHttpEndpointConfig?: AppSyncDataSourceRdsHttpEndpointConfig;
  RelationalDatabaseSourceType: string;
}
/**
 * Type definition for AWS::AppSync::FunctionConfiguration.AppSyncRuntime
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-functionconfiguration-appsyncruntime.html | AWS::AppSync::FunctionConfiguration.AppSyncRuntime}
 */
export interface AppSyncFunctionConfigurationAppSyncRuntime {
  RuntimeVersion: string;
  Name: string;
}
/**
 * Type definition for AWS::AppSync::FunctionConfiguration.LambdaConflictHandlerConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-functionconfiguration-lambdaconflicthandlerconfig.html | AWS::AppSync::FunctionConfiguration.LambdaConflictHandlerConfig}
 */
export interface AppSyncFunctionConfigurationLambdaConflictHandlerConfig {
  LambdaConflictHandlerArn?: string;
}
/**
 * Type definition for AWS::AppSync::FunctionConfiguration.SyncConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-functionconfiguration-syncconfig.html | AWS::AppSync::FunctionConfiguration.SyncConfig}
 */
export interface AppSyncFunctionConfigurationSyncConfig {
  ConflictHandler?: string;
  ConflictDetection: string;
  LambdaConflictHandlerConfig?: AppSyncFunctionConfigurationLambdaConflictHandlerConfig;
}
/**
 * Type definition for AWS::AppSync::GraphQLApi.AdditionalAuthenticationProvider
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-additionalauthenticationprovider.html | AWS::AppSync::GraphQLApi.AdditionalAuthenticationProvider}
 */
export interface AppSyncGraphQLApiAdditionalAuthenticationProvider {
  OpenIDConnectConfig?: AppSyncGraphQLApiOpenIDConnectConfig;
  LambdaAuthorizerConfig?: AppSyncGraphQLApiLambdaAuthorizerConfig;
  UserPoolConfig?: AppSyncGraphQLApiCognitoUserPoolConfig;
  AuthenticationType: string;
}
/**
 * Type definition for AWS::AppSync::GraphQLApi.CognitoUserPoolConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-cognitouserpoolconfig.html | AWS::AppSync::GraphQLApi.CognitoUserPoolConfig}
 */
export interface AppSyncGraphQLApiCognitoUserPoolConfig {
  AppIdClientRegex?: string;
  UserPoolId?: string;
  AwsRegion?: string;
}
/**
 * Type definition for AWS::AppSync::GraphQLApi.LambdaAuthorizerConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-lambdaauthorizerconfig.html | AWS::AppSync::GraphQLApi.LambdaAuthorizerConfig}
 */
export interface AppSyncGraphQLApiLambdaAuthorizerConfig {
  IdentityValidationExpression?: string;
  AuthorizerUri?: string;
  AuthorizerResultTtlInSeconds?: number;
}
/**
 * Type definition for AWS::AppSync::GraphQLApi.LogConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-logconfig.html | AWS::AppSync::GraphQLApi.LogConfig}
 */
export interface AppSyncGraphQLApiLogConfig {
  CloudWatchLogsRoleArn?: string;
  ExcludeVerboseContent?: boolean;
  FieldLogLevel?: string;
}
/**
 * Type definition for AWS::AppSync::GraphQLApi.OpenIDConnectConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-openidconnectconfig.html | AWS::AppSync::GraphQLApi.OpenIDConnectConfig}
 */
export interface AppSyncGraphQLApiOpenIDConnectConfig {
  Issuer?: string;
  ClientId?: string;
  AuthTTL?: number;
  IatTTL?: number;
}
/**
 * Type definition for AWS::AppSync::GraphQLApi.UserPoolConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-userpoolconfig.html | AWS::AppSync::GraphQLApi.UserPoolConfig}
 */
export interface AppSyncGraphQLApiUserPoolConfig {
  AppIdClientRegex?: string;
  UserPoolId?: string;
  AwsRegion?: string;
  DefaultAction?: string;
}
/**
 * Type definition for AWS::AppSync::Resolver.AppSyncRuntime
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-resolver-appsyncruntime.html | AWS::AppSync::Resolver.AppSyncRuntime}
 */
export interface AppSyncResolverAppSyncRuntime {
  RuntimeVersion: string;
  Name: string;
}
/**
 * Type definition for AWS::AppSync::Resolver.CachingConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-resolver-cachingconfig.html | AWS::AppSync::Resolver.CachingConfig}
 */
export interface AppSyncResolverCachingConfig {
  CachingKeys?: any[];
  Ttl: number;
}
/**
 * Type definition for AWS::AppSync::Resolver.LambdaConflictHandlerConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-resolver-lambdaconflicthandlerconfig.html | AWS::AppSync::Resolver.LambdaConflictHandlerConfig}
 */
export interface AppSyncResolverLambdaConflictHandlerConfig {
  LambdaConflictHandlerArn?: string;
}
/**
 * Type definition for AWS::AppSync::Resolver.PipelineConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-resolver-pipelineconfig.html | AWS::AppSync::Resolver.PipelineConfig}
 */
export interface AppSyncResolverPipelineConfig {
  Functions?: any[];
}
/**
 * Type definition for AWS::AppSync::Resolver.SyncConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-resolver-syncconfig.html | AWS::AppSync::Resolver.SyncConfig}
 */
export interface AppSyncResolverSyncConfig {
  ConflictHandler?: string;
  ConflictDetection: string;
  LambdaConflictHandlerConfig?: AppSyncResolverLambdaConflictHandlerConfig;
}
/**
 * Type definition for AWS::AppSync::SourceApiAssociation.SourceApiAssociationConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-sourceapiassociation-sourceapiassociationconfig.html | AWS::AppSync::SourceApiAssociation.SourceApiAssociationConfig}
 */
export interface AppSyncSourceApiAssociationSourceApiAssociationConfig {
  MergeType?: string;
}
/**
 * Type definition for AWS::AppSync::ApiCache
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apicache.html | AWS::AppSync::ApiCache}
 */
export interface AppSyncApiCacheProps {
  Type: string;
  TransitEncryptionEnabled?: boolean;
  AtRestEncryptionEnabled?: boolean;
  ApiId: string;
  ApiCachingBehavior: string;
  Ttl: number;
}
/**
 * Resource class for AWS::AppSync::ApiCache
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apicache.html | AWS::AppSync::ApiCache}
 */
export class AppSyncApiCache extends ResourceBase<
  "AWS::AppSync::ApiCache",
  AppSyncApiCacheProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::AppSync::ApiCache";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: AppSyncApiCacheProps,
    options?: ResourceOptions,
  ) {
    super(
      AppSyncApiCache.Type,
      AppSyncApiCache.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppSync::ApiKey
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apikey.html | AWS::AppSync::ApiKey}
 */
export interface AppSyncApiKeyProps {
  Description?: string;
  ApiKeyId?: string;
  Expires?: number;
  ApiId: string;
}
/**
 * Attributes type definition for AWS::AppSync::ApiKey
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apikey.html | AWS::AppSync::ApiKey}
 */
export interface AppSyncApiKeyAttribs {
  ApiKey?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::AppSync::ApiKey
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apikey.html | AWS::AppSync::ApiKey}
 */
export class AppSyncApiKey extends ResourceBase<
  "AWS::AppSync::ApiKey",
  AppSyncApiKeyProps,
  AppSyncApiKeyAttribs
> {
  public static readonly Type = "AWS::AppSync::ApiKey";
  public static readonly AttributeNames: readonly (keyof AppSyncApiKeyAttribs)[] =
    ["ApiKey", "Arn"];
  constructor(
    logicalId: string,
    properties: AppSyncApiKeyProps,
    options?: ResourceOptions,
  ) {
    super(
      AppSyncApiKey.Type,
      AppSyncApiKey.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppSync::DataSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html | AWS::AppSync::DataSource}
 */
export interface AppSyncDataSourceProps {
  Type: string;
  OpenSearchServiceConfig?: AppSyncDataSourceOpenSearchServiceConfig;
  Description?: string;
  ServiceRoleArn?: string;
  EventBridgeConfig?: AppSyncDataSourceEventBridgeConfig;
  HttpConfig?: AppSyncDataSourceHttpConfig;
  RelationalDatabaseConfig?: AppSyncDataSourceRelationalDatabaseConfig;
  LambdaConfig?: AppSyncDataSourceLambdaConfig;
  ApiId: string;
  Name: string;
  DynamoDBConfig?: AppSyncDataSourceDynamoDBConfig;
  ElasticsearchConfig?: AppSyncDataSourceElasticsearchConfig;
}
/**
 * Attributes type definition for AWS::AppSync::DataSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html | AWS::AppSync::DataSource}
 */
export interface AppSyncDataSourceAttribs {
  DataSourceArn?: string;
  Name?: string;
}
/**
 * Resource class for AWS::AppSync::DataSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html | AWS::AppSync::DataSource}
 */
export class AppSyncDataSource extends ResourceBase<
  "AWS::AppSync::DataSource",
  AppSyncDataSourceProps,
  AppSyncDataSourceAttribs
> {
  public static readonly Type = "AWS::AppSync::DataSource";
  public static readonly AttributeNames: readonly (keyof AppSyncDataSourceAttribs)[] =
    ["DataSourceArn", "Name"];
  constructor(
    logicalId: string,
    properties: AppSyncDataSourceProps,
    options?: ResourceOptions,
  ) {
    super(
      AppSyncDataSource.Type,
      AppSyncDataSource.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppSync::DomainName
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-domainname.html | AWS::AppSync::DomainName}
 */
export interface AppSyncDomainNameProps {
  Description?: string;
  DomainName: string;
  CertificateArn: string;
}
/**
 * Attributes type definition for AWS::AppSync::DomainName
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-domainname.html | AWS::AppSync::DomainName}
 */
export interface AppSyncDomainNameAttribs {
  AppSyncDomainName?: string;
  DomainName?: string;
  HostedZoneId?: string;
}
/**
 * Resource class for AWS::AppSync::DomainName
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-domainname.html | AWS::AppSync::DomainName}
 */
export class AppSyncDomainName extends ResourceBase<
  "AWS::AppSync::DomainName",
  AppSyncDomainNameProps,
  AppSyncDomainNameAttribs
> {
  public static readonly Type = "AWS::AppSync::DomainName";
  public static readonly AttributeNames: readonly (keyof AppSyncDomainNameAttribs)[] =
    ["AppSyncDomainName", "DomainName", "HostedZoneId"];
  constructor(
    logicalId: string,
    properties: AppSyncDomainNameProps,
    options?: ResourceOptions,
  ) {
    super(
      AppSyncDomainName.Type,
      AppSyncDomainName.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppSync::DomainNameApiAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-domainnameapiassociation.html | AWS::AppSync::DomainNameApiAssociation}
 */
export interface AppSyncDomainNameApiAssociationProps {
  DomainName: string;
  ApiId: string;
}
/**
 * Attributes type definition for AWS::AppSync::DomainNameApiAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-domainnameapiassociation.html | AWS::AppSync::DomainNameApiAssociation}
 */
export interface AppSyncDomainNameApiAssociationAttribs {
  ApiAssociationIdentifier?: string;
}
/**
 * Resource class for AWS::AppSync::DomainNameApiAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-domainnameapiassociation.html | AWS::AppSync::DomainNameApiAssociation}
 */
export class AppSyncDomainNameApiAssociation extends ResourceBase<
  "AWS::AppSync::DomainNameApiAssociation",
  AppSyncDomainNameApiAssociationProps,
  AppSyncDomainNameApiAssociationAttribs
> {
  public static readonly Type = "AWS::AppSync::DomainNameApiAssociation";
  public static readonly AttributeNames: readonly (keyof AppSyncDomainNameApiAssociationAttribs)[] =
    ["ApiAssociationIdentifier"];
  constructor(
    logicalId: string,
    properties: AppSyncDomainNameApiAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      AppSyncDomainNameApiAssociation.Type,
      AppSyncDomainNameApiAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppSync::FunctionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-functionconfiguration.html | AWS::AppSync::FunctionConfiguration}
 */
export interface AppSyncFunctionConfigurationProps {
  Description?: string;
  RequestMappingTemplate?: string;
  ResponseMappingTemplate?: string;
  MaxBatchSize?: number;
  SyncConfig?: AppSyncFunctionConfigurationSyncConfig;
  Code?: string;
  Name: string;
  ResponseMappingTemplateS3Location?: string;
  Runtime?: AppSyncFunctionConfigurationAppSyncRuntime;
  CodeS3Location?: string;
  DataSourceName: string;
  FunctionVersion?: string;
  RequestMappingTemplateS3Location?: string;
  ApiId: string;
}
/**
 * Attributes type definition for AWS::AppSync::FunctionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-functionconfiguration.html | AWS::AppSync::FunctionConfiguration}
 */
export interface AppSyncFunctionConfigurationAttribs {
  FunctionId?: string;
  FunctionArn?: string;
  DataSourceName?: string;
  Name?: string;
}
/**
 * Resource class for AWS::AppSync::FunctionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-functionconfiguration.html | AWS::AppSync::FunctionConfiguration}
 */
export class AppSyncFunctionConfiguration extends ResourceBase<
  "AWS::AppSync::FunctionConfiguration",
  AppSyncFunctionConfigurationProps,
  AppSyncFunctionConfigurationAttribs
> {
  public static readonly Type = "AWS::AppSync::FunctionConfiguration";
  public static readonly AttributeNames: readonly (keyof AppSyncFunctionConfigurationAttribs)[] =
    ["FunctionId", "FunctionArn", "DataSourceName", "Name"];
  constructor(
    logicalId: string,
    properties: AppSyncFunctionConfigurationProps,
    options?: ResourceOptions,
  ) {
    super(
      AppSyncFunctionConfiguration.Type,
      AppSyncFunctionConfiguration.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppSync::GraphQLApi
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlapi.html | AWS::AppSync::GraphQLApi}
 */
export interface AppSyncGraphQLApiProps {
  OpenIDConnectConfig?: AppSyncGraphQLApiOpenIDConnectConfig;
  MergedApiExecutionRoleArn?: string;
  OwnerContact?: string;
  Name: string;
  AdditionalAuthenticationProviders?: any[];
  ApiType?: string;
  LambdaAuthorizerConfig?: AppSyncGraphQLApiLambdaAuthorizerConfig;
  XrayEnabled?: boolean;
  Visibility?: string;
  UserPoolConfig?: AppSyncGraphQLApiUserPoolConfig;
  Tags?: Tag[];
  AuthenticationType: string;
  LogConfig?: AppSyncGraphQLApiLogConfig;
}
/**
 * Attributes type definition for AWS::AppSync::GraphQLApi
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlapi.html | AWS::AppSync::GraphQLApi}
 */
export interface AppSyncGraphQLApiAttribs {
  RealtimeUrl?: string;
  GraphQLUrl?: string;
  GraphQLDns?: string;
  RealtimeDns?: string;
  Arn?: string;
  ApiId?: string;
}
/**
 * Resource class for AWS::AppSync::GraphQLApi
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlapi.html | AWS::AppSync::GraphQLApi}
 */
export class AppSyncGraphQLApi extends ResourceBase<
  "AWS::AppSync::GraphQLApi",
  AppSyncGraphQLApiProps,
  AppSyncGraphQLApiAttribs
> {
  public static readonly Type = "AWS::AppSync::GraphQLApi";
  public static readonly AttributeNames: readonly (keyof AppSyncGraphQLApiAttribs)[] =
    ["RealtimeUrl", "GraphQLUrl", "GraphQLDns", "RealtimeDns", "Arn", "ApiId"];
  constructor(
    logicalId: string,
    properties: AppSyncGraphQLApiProps,
    options?: ResourceOptions,
  ) {
    super(
      AppSyncGraphQLApi.Type,
      AppSyncGraphQLApi.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppSync::GraphQLSchema
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlschema.html | AWS::AppSync::GraphQLSchema}
 */
export interface AppSyncGraphQLSchemaProps {
  Definition?: string;
  DefinitionS3Location?: string;
  ApiId: string;
}
/**
 * Resource class for AWS::AppSync::GraphQLSchema
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlschema.html | AWS::AppSync::GraphQLSchema}
 */
export class AppSyncGraphQLSchema extends ResourceBase<
  "AWS::AppSync::GraphQLSchema",
  AppSyncGraphQLSchemaProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::AppSync::GraphQLSchema";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: AppSyncGraphQLSchemaProps,
    options?: ResourceOptions,
  ) {
    super(
      AppSyncGraphQLSchema.Type,
      AppSyncGraphQLSchema.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppSync::Resolver
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-resolver.html | AWS::AppSync::Resolver}
 */
export interface AppSyncResolverProps {
  TypeName: string;
  PipelineConfig?: AppSyncResolverPipelineConfig;
  RequestMappingTemplate?: string;
  ResponseMappingTemplate?: string;
  MaxBatchSize?: number;
  SyncConfig?: AppSyncResolverSyncConfig;
  Code?: string;
  ResponseMappingTemplateS3Location?: string;
  Runtime?: AppSyncResolverAppSyncRuntime;
  CodeS3Location?: string;
  DataSourceName?: string;
  Kind?: string;
  CachingConfig?: AppSyncResolverCachingConfig;
  RequestMappingTemplateS3Location?: string;
  ApiId: string;
  FieldName: string;
}
/**
 * Attributes type definition for AWS::AppSync::Resolver
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-resolver.html | AWS::AppSync::Resolver}
 */
export interface AppSyncResolverAttribs {
  TypeName?: string;
  ResolverArn?: string;
  FieldName?: string;
}
/**
 * Resource class for AWS::AppSync::Resolver
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-resolver.html | AWS::AppSync::Resolver}
 */
export class AppSyncResolver extends ResourceBase<
  "AWS::AppSync::Resolver",
  AppSyncResolverProps,
  AppSyncResolverAttribs
> {
  public static readonly Type = "AWS::AppSync::Resolver";
  public static readonly AttributeNames: readonly (keyof AppSyncResolverAttribs)[] =
    ["TypeName", "ResolverArn", "FieldName"];
  constructor(
    logicalId: string,
    properties: AppSyncResolverProps,
    options?: ResourceOptions,
  ) {
    super(
      AppSyncResolver.Type,
      AppSyncResolver.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppSync::SourceApiAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-sourceapiassociation.html | AWS::AppSync::SourceApiAssociation}
 */
export interface AppSyncSourceApiAssociationProps {
  Description?: string;
  SourceApiAssociationConfig?: AppSyncSourceApiAssociationSourceApiAssociationConfig;
  MergedApiIdentifier?: string;
  SourceApiIdentifier?: string;
}
/**
 * Attributes type definition for AWS::AppSync::SourceApiAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-sourceapiassociation.html | AWS::AppSync::SourceApiAssociation}
 */
export interface AppSyncSourceApiAssociationAttribs {
  AssociationArn?: string;
  MergedApiId?: string;
  SourceApiArn?: string;
  LastSuccessfulMergeDate?: string;
  SourceApiAssociationStatusDetail?: string;
  MergedApiArn?: string;
  AssociationId?: string;
  SourceApiAssociationStatus?: string;
  SourceApiId?: string;
}
/**
 * Resource class for AWS::AppSync::SourceApiAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-sourceapiassociation.html | AWS::AppSync::SourceApiAssociation}
 */
export class AppSyncSourceApiAssociation extends ResourceBase<
  "AWS::AppSync::SourceApiAssociation",
  AppSyncSourceApiAssociationProps,
  AppSyncSourceApiAssociationAttribs
> {
  public static readonly Type = "AWS::AppSync::SourceApiAssociation";
  public static readonly AttributeNames: readonly (keyof AppSyncSourceApiAssociationAttribs)[] =
    [
      "AssociationArn",
      "MergedApiId",
      "SourceApiArn",
      "LastSuccessfulMergeDate",
      "SourceApiAssociationStatusDetail",
      "MergedApiArn",
      "AssociationId",
      "SourceApiAssociationStatus",
      "SourceApiId",
    ];
  constructor(
    logicalId: string,
    properties: AppSyncSourceApiAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      AppSyncSourceApiAssociation.Type,
      AppSyncSourceApiAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
