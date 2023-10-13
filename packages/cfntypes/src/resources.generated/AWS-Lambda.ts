import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Lambda::Alias.AliasRoutingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-alias-aliasroutingconfiguration.html | AWS::Lambda::Alias.AliasRoutingConfiguration}
 */
export interface LambdaAliasAliasRoutingConfiguration {
  AdditionalVersionWeights: any[];
}
/**
 * Type definition for AWS::Lambda::Alias.ProvisionedConcurrencyConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-alias-provisionedconcurrencyconfiguration.html | AWS::Lambda::Alias.ProvisionedConcurrencyConfiguration}
 */
export interface LambdaAliasProvisionedConcurrencyConfiguration {
  ProvisionedConcurrentExecutions: number;
}
/**
 * Type definition for AWS::Lambda::Alias.VersionWeight
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-alias-versionweight.html | AWS::Lambda::Alias.VersionWeight}
 */
export interface LambdaAliasVersionWeight {
  FunctionVersion: string;
  FunctionWeight: number;
}
/**
 * Type definition for AWS::Lambda::CodeSigningConfig.AllowedPublishers
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-codesigningconfig-allowedpublishers.html | AWS::Lambda::CodeSigningConfig.AllowedPublishers}
 */
export interface LambdaCodeSigningConfigAllowedPublishers {
  SigningProfileVersionArns: any[];
}
/**
 * Type definition for AWS::Lambda::CodeSigningConfig.CodeSigningPolicies
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-codesigningconfig-codesigningpolicies.html | AWS::Lambda::CodeSigningConfig.CodeSigningPolicies}
 */
export interface LambdaCodeSigningConfigCodeSigningPolicies {
  UntrustedArtifactOnDeployment: string;
}
/**
 * Type definition for AWS::Lambda::EventInvokeConfig.DestinationConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventinvokeconfig-destinationconfig.html | AWS::Lambda::EventInvokeConfig.DestinationConfig}
 */
export interface LambdaEventInvokeConfigDestinationConfig {
  OnSuccess?: LambdaEventInvokeConfigOnSuccess;
  OnFailure?: LambdaEventInvokeConfigOnFailure;
}
/**
 * Type definition for AWS::Lambda::EventInvokeConfig.OnFailure
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventinvokeconfig-destinationconfig-onfailure.html | AWS::Lambda::EventInvokeConfig.OnFailure}
 */
export interface LambdaEventInvokeConfigOnFailure {
  Destination: string;
}
/**
 * Type definition for AWS::Lambda::EventInvokeConfig.OnSuccess
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventinvokeconfig-destinationconfig-onsuccess.html | AWS::Lambda::EventInvokeConfig.OnSuccess}
 */
export interface LambdaEventInvokeConfigOnSuccess {
  Destination: string;
}
/**
 * Type definition for AWS::Lambda::EventSourceMapping.AmazonManagedKafkaEventSourceConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-amazonmanagedkafkaeventsourceconfig.html | AWS::Lambda::EventSourceMapping.AmazonManagedKafkaEventSourceConfig}
 */
export interface LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig {
  ConsumerGroupId?: string;
}
/**
 * Type definition for AWS::Lambda::EventSourceMapping.DestinationConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-destinationconfig.html | AWS::Lambda::EventSourceMapping.DestinationConfig}
 */
export interface LambdaEventSourceMappingDestinationConfig {
  OnFailure?: LambdaEventSourceMappingOnFailure;
}
/**
 * Type definition for AWS::Lambda::EventSourceMapping.DocumentDBEventSourceConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-documentdbeventsourceconfig.html | AWS::Lambda::EventSourceMapping.DocumentDBEventSourceConfig}
 */
export interface LambdaEventSourceMappingDocumentDBEventSourceConfig {
  FullDocument?: string;
  CollectionName?: string;
  DatabaseName?: string;
}
/**
 * Type definition for AWS::Lambda::EventSourceMapping.Endpoints
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-endpoints.html | AWS::Lambda::EventSourceMapping.Endpoints}
 */
export interface LambdaEventSourceMappingEndpoints {
  KafkaBootstrapServers?: any[];
}
/**
 * Type definition for AWS::Lambda::EventSourceMapping.Filter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-filter.html | AWS::Lambda::EventSourceMapping.Filter}
 */
export interface LambdaEventSourceMappingFilter {
  Pattern?: string;
}
/**
 * Type definition for AWS::Lambda::EventSourceMapping.FilterCriteria
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-filtercriteria.html | AWS::Lambda::EventSourceMapping.FilterCriteria}
 */
export interface LambdaEventSourceMappingFilterCriteria {
  Filters?: any[];
}
/**
 * Type definition for AWS::Lambda::EventSourceMapping.OnFailure
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-onfailure.html | AWS::Lambda::EventSourceMapping.OnFailure}
 */
export interface LambdaEventSourceMappingOnFailure {
  Destination?: string;
}
/**
 * Type definition for AWS::Lambda::EventSourceMapping.ScalingConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-scalingconfig.html | AWS::Lambda::EventSourceMapping.ScalingConfig}
 */
export interface LambdaEventSourceMappingScalingConfig {
  MaximumConcurrency?: number;
}
/**
 * Type definition for AWS::Lambda::EventSourceMapping.SelfManagedEventSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-selfmanagedeventsource.html | AWS::Lambda::EventSourceMapping.SelfManagedEventSource}
 */
export interface LambdaEventSourceMappingSelfManagedEventSource {
  Endpoints?: LambdaEventSourceMappingEndpoints;
}
/**
 * Type definition for AWS::Lambda::EventSourceMapping.SelfManagedKafkaEventSourceConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-selfmanagedkafkaeventsourceconfig.html | AWS::Lambda::EventSourceMapping.SelfManagedKafkaEventSourceConfig}
 */
export interface LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig {
  ConsumerGroupId?: string;
}
/**
 * Type definition for AWS::Lambda::EventSourceMapping.SourceAccessConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-sourceaccessconfiguration.html | AWS::Lambda::EventSourceMapping.SourceAccessConfiguration}
 */
export interface LambdaEventSourceMappingSourceAccessConfiguration {
  Type?: string;
  URI?: string;
}
/**
 * Type definition for AWS::Lambda::Function.Code
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-code.html | AWS::Lambda::Function.Code}
 */
export interface LambdaFunctionCode {
  S3ObjectVersion?: string;
  S3Bucket?: string;
  ZipFile?: string;
  S3Key?: string;
  ImageUri?: string;
}
/**
 * Type definition for AWS::Lambda::Function.DeadLetterConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-deadletterconfig.html | AWS::Lambda::Function.DeadLetterConfig}
 */
export interface LambdaFunctionDeadLetterConfig {
  TargetArn?: string;
}
/**
 * Type definition for AWS::Lambda::Function.Environment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-environment.html | AWS::Lambda::Function.Environment}
 */
export interface LambdaFunctionEnvironment {
  Variables?: Record<string, any>;
}
/**
 * Type definition for AWS::Lambda::Function.EphemeralStorage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-ephemeralstorage.html | AWS::Lambda::Function.EphemeralStorage}
 */
export interface LambdaFunctionEphemeralStorage {
  Size: number;
}
/**
 * Type definition for AWS::Lambda::Function.FileSystemConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-filesystemconfig.html | AWS::Lambda::Function.FileSystemConfig}
 */
export interface LambdaFunctionFileSystemConfig {
  Arn: string;
  LocalMountPath: string;
}
/**
 * Type definition for AWS::Lambda::Function.ImageConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-imageconfig.html | AWS::Lambda::Function.ImageConfig}
 */
export interface LambdaFunctionImageConfig {
  WorkingDirectory?: string;
  Command?: any[];
  EntryPoint?: any[];
}
/**
 * Type definition for AWS::Lambda::Function.RuntimeManagementConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-runtimemanagementconfig.html | AWS::Lambda::Function.RuntimeManagementConfig}
 */
export interface LambdaFunctionRuntimeManagementConfig {
  UpdateRuntimeOn: string;
  RuntimeVersionArn?: string;
}
/**
 * Type definition for AWS::Lambda::Function.SnapStart
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-snapstart.html | AWS::Lambda::Function.SnapStart}
 */
export interface LambdaFunctionSnapStart {
  ApplyOn: string;
}
/**
 * Type definition for AWS::Lambda::Function.SnapStartResponse
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-snapstartresponse.html | AWS::Lambda::Function.SnapStartResponse}
 */
export interface LambdaFunctionSnapStartResponse {
  OptimizationStatus?: string;
  ApplyOn?: string;
}
/**
 * Type definition for AWS::Lambda::Function.TracingConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-tracingconfig.html | AWS::Lambda::Function.TracingConfig}
 */
export interface LambdaFunctionTracingConfig {
  Mode?: string;
}
/**
 * Type definition for AWS::Lambda::Function.VpcConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-vpcconfig.html | AWS::Lambda::Function.VpcConfig}
 */
export interface LambdaFunctionVpcConfig {
  Ipv6AllowedForDualStack?: boolean;
  SecurityGroupIds?: any[];
  SubnetIds?: any[];
}
/**
 * Type definition for AWS::Lambda::LayerVersion.Content
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-layerversion-content.html | AWS::Lambda::LayerVersion.Content}
 */
export interface LambdaLayerVersionContent {
  S3ObjectVersion?: string;
  S3Bucket: string;
  S3Key: string;
}
/**
 * Type definition for AWS::Lambda::Url.Cors
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-url-cors.html | AWS::Lambda::Url.Cors}
 */
export interface LambdaUrlCors {
  AllowCredentials?: boolean;
  AllowOrigins?: any[];
  ExposeHeaders?: any[];
  AllowHeaders?: any[];
  MaxAge?: number;
  AllowMethods?: any[];
}
/**
 * Type definition for AWS::Lambda::Version.ProvisionedConcurrencyConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-version-provisionedconcurrencyconfiguration.html | AWS::Lambda::Version.ProvisionedConcurrencyConfiguration}
 */
export interface LambdaVersionProvisionedConcurrencyConfiguration {
  ProvisionedConcurrentExecutions: number;
}
/**
 * Type definition for AWS::Lambda::Alias
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-alias.html | AWS::Lambda::Alias}
 */
export interface LambdaAliasProps {
  Description?: string;
  FunctionName: string;
  FunctionVersion: string;
  Name: string;
  ProvisionedConcurrencyConfig?: LambdaAliasProvisionedConcurrencyConfiguration;
  RoutingConfig?: LambdaAliasAliasRoutingConfiguration;
}
/**
 * Resource class for AWS::Lambda::Alias
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-alias.html | AWS::Lambda::Alias}
 */
export class LambdaAlias extends ResourceBase<
  "AWS::Lambda::Alias",
  LambdaAliasProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Lambda::Alias";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: LambdaAliasProps,
    options?: ResourceOptions,
  ) {
    super(
      LambdaAlias.Type,
      LambdaAlias.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Lambda::CodeSigningConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-codesigningconfig.html | AWS::Lambda::CodeSigningConfig}
 */
export interface LambdaCodeSigningConfigProps {
  Description?: string;
  AllowedPublishers: LambdaCodeSigningConfigAllowedPublishers;
  CodeSigningPolicies?: LambdaCodeSigningConfigCodeSigningPolicies;
}
/**
 * Attributes type definition for AWS::Lambda::CodeSigningConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-codesigningconfig.html | AWS::Lambda::CodeSigningConfig}
 */
export interface LambdaCodeSigningConfigAttribs {
  CodeSigningConfigId?: string;
  CodeSigningConfigArn?: string;
}
/**
 * Resource class for AWS::Lambda::CodeSigningConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-codesigningconfig.html | AWS::Lambda::CodeSigningConfig}
 */
export class LambdaCodeSigningConfig extends ResourceBase<
  "AWS::Lambda::CodeSigningConfig",
  LambdaCodeSigningConfigProps,
  LambdaCodeSigningConfigAttribs
> {
  public static readonly Type = "AWS::Lambda::CodeSigningConfig";
  public static readonly AttributeNames: readonly (keyof LambdaCodeSigningConfigAttribs)[] =
    ["CodeSigningConfigId", "CodeSigningConfigArn"];
  constructor(
    logicalId: string,
    properties: LambdaCodeSigningConfigProps,
    options?: ResourceOptions,
  ) {
    super(
      LambdaCodeSigningConfig.Type,
      LambdaCodeSigningConfig.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Lambda::EventInvokeConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventinvokeconfig.html | AWS::Lambda::EventInvokeConfig}
 */
export interface LambdaEventInvokeConfigProps {
  FunctionName: string;
  MaximumRetryAttempts?: number;
  DestinationConfig?: LambdaEventInvokeConfigDestinationConfig;
  Qualifier: string;
  MaximumEventAgeInSeconds?: number;
}
/**
 * Resource class for AWS::Lambda::EventInvokeConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventinvokeconfig.html | AWS::Lambda::EventInvokeConfig}
 */
export class LambdaEventInvokeConfig extends ResourceBase<
  "AWS::Lambda::EventInvokeConfig",
  LambdaEventInvokeConfigProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Lambda::EventInvokeConfig";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: LambdaEventInvokeConfigProps,
    options?: ResourceOptions,
  ) {
    super(
      LambdaEventInvokeConfig.Type,
      LambdaEventInvokeConfig.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Lambda::EventSourceMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html | AWS::Lambda::EventSourceMapping}
 */
export interface LambdaEventSourceMappingProps {
  StartingPosition?: string;
  BatchSize?: number;
  MaximumRetryAttempts?: number;
  Topics?: any[];
  ScalingConfig?: LambdaEventSourceMappingScalingConfig;
  SelfManagedEventSource?: LambdaEventSourceMappingSelfManagedEventSource;
  ParallelizationFactor?: number;
  Enabled?: boolean;
  FilterCriteria?: LambdaEventSourceMappingFilterCriteria;
  EventSourceArn?: string;
  SelfManagedKafkaEventSourceConfig?: LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig;
  DocumentDBEventSourceConfig?: LambdaEventSourceMappingDocumentDBEventSourceConfig;
  FunctionName: string;
  TumblingWindowInSeconds?: number;
  BisectBatchOnFunctionError?: boolean;
  DestinationConfig?: LambdaEventSourceMappingDestinationConfig;
  AmazonManagedKafkaEventSourceConfig?: LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig;
  MaximumRecordAgeInSeconds?: number;
  StartingPositionTimestamp?: number;
  Queues?: any[];
  SourceAccessConfigurations?: any[];
  FunctionResponseTypes?: any[];
  MaximumBatchingWindowInSeconds?: number;
}
/**
 * Attributes type definition for AWS::Lambda::EventSourceMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html | AWS::Lambda::EventSourceMapping}
 */
export interface LambdaEventSourceMappingAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::Lambda::EventSourceMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html | AWS::Lambda::EventSourceMapping}
 */
export class LambdaEventSourceMapping extends ResourceBase<
  "AWS::Lambda::EventSourceMapping",
  LambdaEventSourceMappingProps,
  LambdaEventSourceMappingAttribs
> {
  public static readonly Type = "AWS::Lambda::EventSourceMapping";
  public static readonly AttributeNames: readonly (keyof LambdaEventSourceMappingAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: LambdaEventSourceMappingProps,
    options?: ResourceOptions,
  ) {
    super(
      LambdaEventSourceMapping.Type,
      LambdaEventSourceMapping.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Lambda::Function
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html | AWS::Lambda::Function}
 */
export interface LambdaFunctionProps {
  ImageConfig?: LambdaFunctionImageConfig;
  MemorySize?: number;
  Description?: string;
  TracingConfig?: LambdaFunctionTracingConfig;
  VpcConfig?: LambdaFunctionVpcConfig;
  DeadLetterConfig?: LambdaFunctionDeadLetterConfig;
  Timeout?: number;
  RuntimeManagementConfig?: LambdaFunctionRuntimeManagementConfig;
  Handler?: string;
  ReservedConcurrentExecutions?: number;
  SnapStart?: LambdaFunctionSnapStart;
  Code: LambdaFunctionCode;
  Role: string;
  FileSystemConfigs?: any[];
  FunctionName?: string;
  Runtime?: string;
  KmsKeyArn?: string;
  PackageType?: string;
  CodeSigningConfigArn?: string;
  Environment?: LambdaFunctionEnvironment;
  EphemeralStorage?: LambdaFunctionEphemeralStorage;
  Layers?: any[];
  Tags?: Tag[];
  Architectures?: any[];
}
/**
 * Attributes type definition for AWS::Lambda::Function
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html | AWS::Lambda::Function}
 */
export interface LambdaFunctionAttribs {
  "SnapStartResponse.OptimizationStatus"?: string;
  "SnapStartResponse.ApplyOn"?: string;
  SnapStartResponse?: LambdaFunctionSnapStartResponse;
  Arn?: string;
}
/**
 * Resource class for AWS::Lambda::Function
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html | AWS::Lambda::Function}
 */
export class LambdaFunction extends ResourceBase<
  "AWS::Lambda::Function",
  LambdaFunctionProps,
  LambdaFunctionAttribs
> {
  public static readonly Type = "AWS::Lambda::Function";
  public static readonly AttributeNames: readonly (keyof LambdaFunctionAttribs)[] =
    [
      "SnapStartResponse.OptimizationStatus",
      "SnapStartResponse.ApplyOn",
      "SnapStartResponse",
      "Arn",
    ];
  constructor(
    logicalId: string,
    properties: LambdaFunctionProps,
    options?: ResourceOptions,
  ) {
    super(
      LambdaFunction.Type,
      LambdaFunction.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Lambda::LayerVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-layerversion.html | AWS::Lambda::LayerVersion}
 */
export interface LambdaLayerVersionProps {
  CompatibleRuntimes?: any[];
  LicenseInfo?: string;
  Description?: string;
  LayerName?: string;
  Content: LambdaLayerVersionContent;
  CompatibleArchitectures?: any[];
}
/**
 * Attributes type definition for AWS::Lambda::LayerVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-layerversion.html | AWS::Lambda::LayerVersion}
 */
export interface LambdaLayerVersionAttribs {
  LayerVersionArn?: string;
}
/**
 * Resource class for AWS::Lambda::LayerVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-layerversion.html | AWS::Lambda::LayerVersion}
 */
export class LambdaLayerVersion extends ResourceBase<
  "AWS::Lambda::LayerVersion",
  LambdaLayerVersionProps,
  LambdaLayerVersionAttribs
> {
  public static readonly Type = "AWS::Lambda::LayerVersion";
  public static readonly AttributeNames: readonly (keyof LambdaLayerVersionAttribs)[] =
    ["LayerVersionArn"];
  constructor(
    logicalId: string,
    properties: LambdaLayerVersionProps,
    options?: ResourceOptions,
  ) {
    super(
      LambdaLayerVersion.Type,
      LambdaLayerVersion.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Lambda::LayerVersionPermission
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-layerversionpermission.html | AWS::Lambda::LayerVersionPermission}
 */
export interface LambdaLayerVersionPermissionProps {
  Action: string;
  LayerVersionArn: string;
  OrganizationId?: string;
  Principal: string;
}
/**
 * Attributes type definition for AWS::Lambda::LayerVersionPermission
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-layerversionpermission.html | AWS::Lambda::LayerVersionPermission}
 */
export interface LambdaLayerVersionPermissionAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::Lambda::LayerVersionPermission
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-layerversionpermission.html | AWS::Lambda::LayerVersionPermission}
 */
export class LambdaLayerVersionPermission extends ResourceBase<
  "AWS::Lambda::LayerVersionPermission",
  LambdaLayerVersionPermissionProps,
  LambdaLayerVersionPermissionAttribs
> {
  public static readonly Type = "AWS::Lambda::LayerVersionPermission";
  public static readonly AttributeNames: readonly (keyof LambdaLayerVersionPermissionAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: LambdaLayerVersionPermissionProps,
    options?: ResourceOptions,
  ) {
    super(
      LambdaLayerVersionPermission.Type,
      LambdaLayerVersionPermission.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Lambda::Permission
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html | AWS::Lambda::Permission}
 */
export interface LambdaPermissionProps {
  FunctionName: string;
  Action: string;
  EventSourceToken?: string;
  FunctionUrlAuthType?: string;
  SourceArn?: string;
  SourceAccount?: string;
  PrincipalOrgID?: string;
  Principal: string;
}
/**
 * Attributes type definition for AWS::Lambda::Permission
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html | AWS::Lambda::Permission}
 */
export interface LambdaPermissionAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::Lambda::Permission
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html | AWS::Lambda::Permission}
 */
export class LambdaPermission extends ResourceBase<
  "AWS::Lambda::Permission",
  LambdaPermissionProps,
  LambdaPermissionAttribs
> {
  public static readonly Type = "AWS::Lambda::Permission";
  public static readonly AttributeNames: readonly (keyof LambdaPermissionAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: LambdaPermissionProps,
    options?: ResourceOptions,
  ) {
    super(
      LambdaPermission.Type,
      LambdaPermission.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Lambda::Url
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-url.html | AWS::Lambda::Url}
 */
export interface LambdaUrlProps {
  Qualifier?: string;
  InvokeMode?: string;
  AuthType: string;
  TargetFunctionArn: string;
  Cors?: LambdaUrlCors;
}
/**
 * Attributes type definition for AWS::Lambda::Url
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-url.html | AWS::Lambda::Url}
 */
export interface LambdaUrlAttribs {
  FunctionArn?: string;
  FunctionUrl?: string;
}
/**
 * Resource class for AWS::Lambda::Url
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-url.html | AWS::Lambda::Url}
 */
export class LambdaUrl extends ResourceBase<
  "AWS::Lambda::Url",
  LambdaUrlProps,
  LambdaUrlAttribs
> {
  public static readonly Type = "AWS::Lambda::Url";
  public static readonly AttributeNames: readonly (keyof LambdaUrlAttribs)[] = [
    "FunctionArn",
    "FunctionUrl",
  ];
  constructor(
    logicalId: string,
    properties: LambdaUrlProps,
    options?: ResourceOptions,
  ) {
    super(
      LambdaUrl.Type,
      LambdaUrl.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Lambda::Version
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-version.html | AWS::Lambda::Version}
 */
export interface LambdaVersionProps {
  CodeSha256?: string;
  Description?: string;
  FunctionName: string;
  ProvisionedConcurrencyConfig?: LambdaVersionProvisionedConcurrencyConfiguration;
}
/**
 * Attributes type definition for AWS::Lambda::Version
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-version.html | AWS::Lambda::Version}
 */
export interface LambdaVersionAttribs {
  Version?: string;
}
/**
 * Resource class for AWS::Lambda::Version
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-version.html | AWS::Lambda::Version}
 */
export class LambdaVersion extends ResourceBase<
  "AWS::Lambda::Version",
  LambdaVersionProps,
  LambdaVersionAttribs
> {
  public static readonly Type = "AWS::Lambda::Version";
  public static readonly AttributeNames: readonly (keyof LambdaVersionAttribs)[] =
    ["Version"];
  constructor(
    logicalId: string,
    properties: LambdaVersionProps,
    options?: ResourceOptions,
  ) {
    super(
      LambdaVersion.Type,
      LambdaVersion.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
