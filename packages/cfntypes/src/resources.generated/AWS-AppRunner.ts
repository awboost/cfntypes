import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::AppRunner::ObservabilityConfiguration.TraceConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-observabilityconfiguration-traceconfiguration.html | AWS::AppRunner::ObservabilityConfiguration.TraceConfiguration}
 */
export interface AppRunnerObservabilityConfigurationTraceConfiguration {
  Vendor: string;
}
/**
 * Type definition for AWS::AppRunner::Service.AuthenticationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-authenticationconfiguration.html | AWS::AppRunner::Service.AuthenticationConfiguration}
 */
export interface AppRunnerServiceAuthenticationConfiguration {
  AccessRoleArn?: string;
  ConnectionArn?: string;
}
/**
 * Type definition for AWS::AppRunner::Service.CodeConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-codeconfiguration.html | AWS::AppRunner::Service.CodeConfiguration}
 */
export interface AppRunnerServiceCodeConfiguration {
  ConfigurationSource: string;
  CodeConfigurationValues?: AppRunnerServiceCodeConfigurationValues;
}
/**
 * Type definition for AWS::AppRunner::Service.CodeConfigurationValues
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-codeconfigurationvalues.html | AWS::AppRunner::Service.CodeConfigurationValues}
 */
export interface AppRunnerServiceCodeConfigurationValues {
  RuntimeEnvironmentSecrets?: any[];
  Runtime: string;
  StartCommand?: string;
  RuntimeEnvironmentVariables?: any[];
  Port?: string;
  BuildCommand?: string;
}
/**
 * Type definition for AWS::AppRunner::Service.CodeRepository
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-coderepository.html | AWS::AppRunner::Service.CodeRepository}
 */
export interface AppRunnerServiceCodeRepository {
  SourceCodeVersion: AppRunnerServiceSourceCodeVersion;
  CodeConfiguration?: AppRunnerServiceCodeConfiguration;
  SourceDirectory?: string;
  RepositoryUrl: string;
}
/**
 * Type definition for AWS::AppRunner::Service.EgressConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-egressconfiguration.html | AWS::AppRunner::Service.EgressConfiguration}
 */
export interface AppRunnerServiceEgressConfiguration {
  VpcConnectorArn?: string;
  EgressType: string;
}
/**
 * Type definition for AWS::AppRunner::Service.EncryptionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-encryptionconfiguration.html | AWS::AppRunner::Service.EncryptionConfiguration}
 */
export interface AppRunnerServiceEncryptionConfiguration {
  KmsKey: string;
}
/**
 * Type definition for AWS::AppRunner::Service.HealthCheckConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-healthcheckconfiguration.html | AWS::AppRunner::Service.HealthCheckConfiguration}
 */
export interface AppRunnerServiceHealthCheckConfiguration {
  Path?: string;
  UnhealthyThreshold?: number;
  Timeout?: number;
  HealthyThreshold?: number;
  Protocol?: string;
  Interval?: number;
}
/**
 * Type definition for AWS::AppRunner::Service.ImageConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-imageconfiguration.html | AWS::AppRunner::Service.ImageConfiguration}
 */
export interface AppRunnerServiceImageConfiguration {
  RuntimeEnvironmentSecrets?: any[];
  StartCommand?: string;
  RuntimeEnvironmentVariables?: any[];
  Port?: string;
}
/**
 * Type definition for AWS::AppRunner::Service.ImageRepository
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-imagerepository.html | AWS::AppRunner::Service.ImageRepository}
 */
export interface AppRunnerServiceImageRepository {
  ImageIdentifier: string;
  ImageConfiguration?: AppRunnerServiceImageConfiguration;
  ImageRepositoryType: string;
}
/**
 * Type definition for AWS::AppRunner::Service.IngressConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-ingressconfiguration.html | AWS::AppRunner::Service.IngressConfiguration}
 */
export interface AppRunnerServiceIngressConfiguration {
  IsPubliclyAccessible: boolean;
}
/**
 * Type definition for AWS::AppRunner::Service.InstanceConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-instanceconfiguration.html | AWS::AppRunner::Service.InstanceConfiguration}
 */
export interface AppRunnerServiceInstanceConfiguration {
  InstanceRoleArn?: string;
  Memory?: string;
  Cpu?: string;
}
/**
 * Type definition for AWS::AppRunner::Service.KeyValuePair
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-keyvaluepair.html | AWS::AppRunner::Service.KeyValuePair}
 */
export interface AppRunnerServiceKeyValuePair {
  Value?: string;
  Name?: string;
}
/**
 * Type definition for AWS::AppRunner::Service.NetworkConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-networkconfiguration.html | AWS::AppRunner::Service.NetworkConfiguration}
 */
export interface AppRunnerServiceNetworkConfiguration {
  IpAddressType?: string;
  EgressConfiguration?: AppRunnerServiceEgressConfiguration;
  IngressConfiguration?: AppRunnerServiceIngressConfiguration;
}
/**
 * Type definition for AWS::AppRunner::Service.ServiceObservabilityConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-serviceobservabilityconfiguration.html | AWS::AppRunner::Service.ServiceObservabilityConfiguration}
 */
export interface AppRunnerServiceServiceObservabilityConfiguration {
  ObservabilityEnabled: boolean;
  ObservabilityConfigurationArn?: string;
}
/**
 * Type definition for AWS::AppRunner::Service.SourceCodeVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-sourcecodeversion.html | AWS::AppRunner::Service.SourceCodeVersion}
 */
export interface AppRunnerServiceSourceCodeVersion {
  Type: string;
  Value: string;
}
/**
 * Type definition for AWS::AppRunner::Service.SourceConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-sourceconfiguration.html | AWS::AppRunner::Service.SourceConfiguration}
 */
export interface AppRunnerServiceSourceConfiguration {
  AuthenticationConfiguration?: AppRunnerServiceAuthenticationConfiguration;
  CodeRepository?: AppRunnerServiceCodeRepository;
  ImageRepository?: AppRunnerServiceImageRepository;
  AutoDeploymentsEnabled?: boolean;
}
/**
 * Type definition for AWS::AppRunner::VpcIngressConnection.IngressVpcConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-vpcingressconnection-ingressvpcconfiguration.html | AWS::AppRunner::VpcIngressConnection.IngressVpcConfiguration}
 */
export interface AppRunnerVpcIngressConnectionIngressVpcConfiguration {
  VpcId: string;
  VpcEndpointId: string;
}
/**
 * Type definition for AWS::AppRunner::AutoScalingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-autoscalingconfiguration.html | AWS::AppRunner::AutoScalingConfiguration}
 */
export interface AppRunnerAutoScalingConfigurationProps {
  MinSize?: number;
  MaxConcurrency?: number;
  AutoScalingConfigurationName?: string;
  MaxSize?: number;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::AppRunner::AutoScalingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-autoscalingconfiguration.html | AWS::AppRunner::AutoScalingConfiguration}
 */
export interface AppRunnerAutoScalingConfigurationAttribs {
  AutoScalingConfigurationRevision?: number;
  AutoScalingConfigurationArn?: string;
  Latest?: boolean;
}
/**
 * Resource class for AWS::AppRunner::AutoScalingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-autoscalingconfiguration.html | AWS::AppRunner::AutoScalingConfiguration}
 */
export class AppRunnerAutoScalingConfiguration extends ResourceBase<
  "AWS::AppRunner::AutoScalingConfiguration",
  AppRunnerAutoScalingConfigurationProps,
  AppRunnerAutoScalingConfigurationAttribs
> {
  public static readonly Type = "AWS::AppRunner::AutoScalingConfiguration";
  public static readonly AttributeNames: readonly (keyof AppRunnerAutoScalingConfigurationAttribs)[] =
    [
      "AutoScalingConfigurationRevision",
      "AutoScalingConfigurationArn",
      "Latest",
    ];
  constructor(
    logicalId: string,
    properties: AppRunnerAutoScalingConfigurationProps,
    options?: ResourceOptions,
  ) {
    super(
      AppRunnerAutoScalingConfiguration.Type,
      AppRunnerAutoScalingConfiguration.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppRunner::ObservabilityConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-observabilityconfiguration.html | AWS::AppRunner::ObservabilityConfiguration}
 */
export interface AppRunnerObservabilityConfigurationProps {
  TraceConfiguration?: AppRunnerObservabilityConfigurationTraceConfiguration;
  ObservabilityConfigurationName?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::AppRunner::ObservabilityConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-observabilityconfiguration.html | AWS::AppRunner::ObservabilityConfiguration}
 */
export interface AppRunnerObservabilityConfigurationAttribs {
  ObservabilityConfigurationRevision?: number;
  ObservabilityConfigurationArn?: string;
  Latest?: boolean;
}
/**
 * Resource class for AWS::AppRunner::ObservabilityConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-observabilityconfiguration.html | AWS::AppRunner::ObservabilityConfiguration}
 */
export class AppRunnerObservabilityConfiguration extends ResourceBase<
  "AWS::AppRunner::ObservabilityConfiguration",
  AppRunnerObservabilityConfigurationProps,
  AppRunnerObservabilityConfigurationAttribs
> {
  public static readonly Type = "AWS::AppRunner::ObservabilityConfiguration";
  public static readonly AttributeNames: readonly (keyof AppRunnerObservabilityConfigurationAttribs)[] =
    [
      "ObservabilityConfigurationRevision",
      "ObservabilityConfigurationArn",
      "Latest",
    ];
  constructor(
    logicalId: string,
    properties: AppRunnerObservabilityConfigurationProps,
    options?: ResourceOptions,
  ) {
    super(
      AppRunnerObservabilityConfiguration.Type,
      AppRunnerObservabilityConfiguration.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppRunner::Service
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html | AWS::AppRunner::Service}
 */
export interface AppRunnerServiceProps {
  HealthCheckConfiguration?: AppRunnerServiceHealthCheckConfiguration;
  InstanceConfiguration?: AppRunnerServiceInstanceConfiguration;
  EncryptionConfiguration?: AppRunnerServiceEncryptionConfiguration;
  ServiceName?: string;
  ObservabilityConfiguration?: AppRunnerServiceServiceObservabilityConfiguration;
  SourceConfiguration: AppRunnerServiceSourceConfiguration;
  AutoScalingConfigurationArn?: string;
  NetworkConfiguration?: AppRunnerServiceNetworkConfiguration;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::AppRunner::Service
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html | AWS::AppRunner::Service}
 */
export interface AppRunnerServiceAttribs {
  Status?: string;
  ServiceUrl?: string;
  ServiceArn?: string;
  ServiceId?: string;
}
/**
 * Resource class for AWS::AppRunner::Service
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html | AWS::AppRunner::Service}
 */
export class AppRunnerService extends ResourceBase<
  "AWS::AppRunner::Service",
  AppRunnerServiceProps,
  AppRunnerServiceAttribs
> {
  public static readonly Type = "AWS::AppRunner::Service";
  public static readonly AttributeNames: readonly (keyof AppRunnerServiceAttribs)[] =
    ["Status", "ServiceUrl", "ServiceArn", "ServiceId"];
  constructor(
    logicalId: string,
    properties: AppRunnerServiceProps,
    options?: ResourceOptions,
  ) {
    super(
      AppRunnerService.Type,
      AppRunnerService.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppRunner::VpcConnector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcconnector.html | AWS::AppRunner::VpcConnector}
 */
export interface AppRunnerVpcConnectorProps {
  SecurityGroups?: any[];
  Subnets: any[];
  VpcConnectorName?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::AppRunner::VpcConnector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcconnector.html | AWS::AppRunner::VpcConnector}
 */
export interface AppRunnerVpcConnectorAttribs {
  VpcConnectorArn?: string;
  VpcConnectorRevision?: number;
}
/**
 * Resource class for AWS::AppRunner::VpcConnector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcconnector.html | AWS::AppRunner::VpcConnector}
 */
export class AppRunnerVpcConnector extends ResourceBase<
  "AWS::AppRunner::VpcConnector",
  AppRunnerVpcConnectorProps,
  AppRunnerVpcConnectorAttribs
> {
  public static readonly Type = "AWS::AppRunner::VpcConnector";
  public static readonly AttributeNames: readonly (keyof AppRunnerVpcConnectorAttribs)[] =
    ["VpcConnectorArn", "VpcConnectorRevision"];
  constructor(
    logicalId: string,
    properties: AppRunnerVpcConnectorProps,
    options?: ResourceOptions,
  ) {
    super(
      AppRunnerVpcConnector.Type,
      AppRunnerVpcConnector.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppRunner::VpcIngressConnection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcingressconnection.html | AWS::AppRunner::VpcIngressConnection}
 */
export interface AppRunnerVpcIngressConnectionProps {
  VpcIngressConnectionName?: string;
  ServiceArn: string;
  Tags?: Tag[];
  IngressVpcConfiguration: AppRunnerVpcIngressConnectionIngressVpcConfiguration;
}
/**
 * Attributes type definition for AWS::AppRunner::VpcIngressConnection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcingressconnection.html | AWS::AppRunner::VpcIngressConnection}
 */
export interface AppRunnerVpcIngressConnectionAttribs {
  Status?: string;
  DomainName?: string;
  VpcIngressConnectionArn?: string;
}
/**
 * Resource class for AWS::AppRunner::VpcIngressConnection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcingressconnection.html | AWS::AppRunner::VpcIngressConnection}
 */
export class AppRunnerVpcIngressConnection extends ResourceBase<
  "AWS::AppRunner::VpcIngressConnection",
  AppRunnerVpcIngressConnectionProps,
  AppRunnerVpcIngressConnectionAttribs
> {
  public static readonly Type = "AWS::AppRunner::VpcIngressConnection";
  public static readonly AttributeNames: readonly (keyof AppRunnerVpcIngressConnectionAttribs)[] =
    ["Status", "DomainName", "VpcIngressConnectionArn"];
  constructor(
    logicalId: string,
    properties: AppRunnerVpcIngressConnectionProps,
    options?: ResourceOptions,
  ) {
    super(
      AppRunnerVpcIngressConnection.Type,
      AppRunnerVpcIngressConnection.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
