import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::Greengrass::ConnectorDefinition.Connector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-connectordefinition-connector.html | AWS::Greengrass::ConnectorDefinition.Connector}
 */
export interface GreengrassConnectorDefinitionConnector {
  ConnectorArn: string;
  Parameters?: object;
  Id: string;
}
/**
 * Type definition for AWS::Greengrass::ConnectorDefinition.ConnectorDefinitionVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-connectordefinition-connectordefinitionversion.html | AWS::Greengrass::ConnectorDefinition.ConnectorDefinitionVersion}
 */
export interface GreengrassConnectorDefinitionConnectorDefinitionVersion {
  Connectors: any[];
}
/**
 * Type definition for AWS::Greengrass::ConnectorDefinitionVersion.Connector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-connectordefinitionversion-connector.html | AWS::Greengrass::ConnectorDefinitionVersion.Connector}
 */
export interface GreengrassConnectorDefinitionVersionConnector {
  ConnectorArn: string;
  Parameters?: object;
  Id: string;
}
/**
 * Type definition for AWS::Greengrass::CoreDefinition.Core
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-coredefinition-core.html | AWS::Greengrass::CoreDefinition.Core}
 */
export interface GreengrassCoreDefinitionCore {
  SyncShadow?: boolean;
  ThingArn: string;
  Id: string;
  CertificateArn: string;
}
/**
 * Type definition for AWS::Greengrass::CoreDefinition.CoreDefinitionVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-coredefinition-coredefinitionversion.html | AWS::Greengrass::CoreDefinition.CoreDefinitionVersion}
 */
export interface GreengrassCoreDefinitionCoreDefinitionVersion {
  Cores: any[];
}
/**
 * Type definition for AWS::Greengrass::CoreDefinitionVersion.Core
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-coredefinitionversion-core.html | AWS::Greengrass::CoreDefinitionVersion.Core}
 */
export interface GreengrassCoreDefinitionVersionCore {
  SyncShadow?: boolean;
  ThingArn: string;
  Id: string;
  CertificateArn: string;
}
/**
 * Type definition for AWS::Greengrass::DeviceDefinition.Device
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-devicedefinition-device.html | AWS::Greengrass::DeviceDefinition.Device}
 */
export interface GreengrassDeviceDefinitionDevice {
  SyncShadow?: boolean;
  ThingArn: string;
  Id: string;
  CertificateArn: string;
}
/**
 * Type definition for AWS::Greengrass::DeviceDefinition.DeviceDefinitionVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-devicedefinition-devicedefinitionversion.html | AWS::Greengrass::DeviceDefinition.DeviceDefinitionVersion}
 */
export interface GreengrassDeviceDefinitionDeviceDefinitionVersion {
  Devices: any[];
}
/**
 * Type definition for AWS::Greengrass::DeviceDefinitionVersion.Device
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-devicedefinitionversion-device.html | AWS::Greengrass::DeviceDefinitionVersion.Device}
 */
export interface GreengrassDeviceDefinitionVersionDevice {
  SyncShadow?: boolean;
  ThingArn: string;
  Id: string;
  CertificateArn: string;
}
/**
 * Type definition for AWS::Greengrass::FunctionDefinition.DefaultConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-defaultconfig.html | AWS::Greengrass::FunctionDefinition.DefaultConfig}
 */
export interface GreengrassFunctionDefinitionDefaultConfig {
  Execution: GreengrassFunctionDefinitionExecution;
}
/**
 * Type definition for AWS::Greengrass::FunctionDefinition.Environment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-environment.html | AWS::Greengrass::FunctionDefinition.Environment}
 */
export interface GreengrassFunctionDefinitionEnvironment {
  Variables?: object;
  Execution?: GreengrassFunctionDefinitionExecution;
  ResourceAccessPolicies?: any[];
  AccessSysfs?: boolean;
}
/**
 * Type definition for AWS::Greengrass::FunctionDefinition.Execution
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-execution.html | AWS::Greengrass::FunctionDefinition.Execution}
 */
export interface GreengrassFunctionDefinitionExecution {
  IsolationMode?: string;
  RunAs?: GreengrassFunctionDefinitionRunAs;
}
/**
 * Type definition for AWS::Greengrass::FunctionDefinition.Function
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-function.html | AWS::Greengrass::FunctionDefinition.Function}
 */
export interface GreengrassFunctionDefinitionFunction {
  FunctionArn: string;
  FunctionConfiguration: GreengrassFunctionDefinitionFunctionConfiguration;
  Id: string;
}
/**
 * Type definition for AWS::Greengrass::FunctionDefinition.FunctionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-functionconfiguration.html | AWS::Greengrass::FunctionDefinition.FunctionConfiguration}
 */
export interface GreengrassFunctionDefinitionFunctionConfiguration {
  MemorySize?: number;
  Pinned?: boolean;
  ExecArgs?: string;
  Timeout?: number;
  EncodingType?: string;
  Environment?: GreengrassFunctionDefinitionEnvironment;
  Executable?: string;
}
/**
 * Type definition for AWS::Greengrass::FunctionDefinition.FunctionDefinitionVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-functiondefinitionversion.html | AWS::Greengrass::FunctionDefinition.FunctionDefinitionVersion}
 */
export interface GreengrassFunctionDefinitionFunctionDefinitionVersion {
  DefaultConfig?: GreengrassFunctionDefinitionDefaultConfig;
  Functions: any[];
}
/**
 * Type definition for AWS::Greengrass::FunctionDefinition.ResourceAccessPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-resourceaccesspolicy.html | AWS::Greengrass::FunctionDefinition.ResourceAccessPolicy}
 */
export interface GreengrassFunctionDefinitionResourceAccessPolicy {
  ResourceId: string;
  Permission?: string;
}
/**
 * Type definition for AWS::Greengrass::FunctionDefinition.RunAs
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-runas.html | AWS::Greengrass::FunctionDefinition.RunAs}
 */
export interface GreengrassFunctionDefinitionRunAs {
  Uid?: number;
  Gid?: number;
}
/**
 * Type definition for AWS::Greengrass::FunctionDefinitionVersion.DefaultConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-defaultconfig.html | AWS::Greengrass::FunctionDefinitionVersion.DefaultConfig}
 */
export interface GreengrassFunctionDefinitionVersionDefaultConfig {
  Execution: GreengrassFunctionDefinitionVersionExecution;
}
/**
 * Type definition for AWS::Greengrass::FunctionDefinitionVersion.Environment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-environment.html | AWS::Greengrass::FunctionDefinitionVersion.Environment}
 */
export interface GreengrassFunctionDefinitionVersionEnvironment {
  Variables?: object;
  Execution?: GreengrassFunctionDefinitionVersionExecution;
  ResourceAccessPolicies?: any[];
  AccessSysfs?: boolean;
}
/**
 * Type definition for AWS::Greengrass::FunctionDefinitionVersion.Execution
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-execution.html | AWS::Greengrass::FunctionDefinitionVersion.Execution}
 */
export interface GreengrassFunctionDefinitionVersionExecution {
  IsolationMode?: string;
  RunAs?: GreengrassFunctionDefinitionVersionRunAs;
}
/**
 * Type definition for AWS::Greengrass::FunctionDefinitionVersion.Function
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-function.html | AWS::Greengrass::FunctionDefinitionVersion.Function}
 */
export interface GreengrassFunctionDefinitionVersionFunction {
  FunctionArn: string;
  FunctionConfiguration: GreengrassFunctionDefinitionVersionFunctionConfiguration;
  Id: string;
}
/**
 * Type definition for AWS::Greengrass::FunctionDefinitionVersion.FunctionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-functionconfiguration.html | AWS::Greengrass::FunctionDefinitionVersion.FunctionConfiguration}
 */
export interface GreengrassFunctionDefinitionVersionFunctionConfiguration {
  MemorySize?: number;
  Pinned?: boolean;
  ExecArgs?: string;
  Timeout?: number;
  EncodingType?: string;
  Environment?: GreengrassFunctionDefinitionVersionEnvironment;
  Executable?: string;
}
/**
 * Type definition for AWS::Greengrass::FunctionDefinitionVersion.ResourceAccessPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-resourceaccesspolicy.html | AWS::Greengrass::FunctionDefinitionVersion.ResourceAccessPolicy}
 */
export interface GreengrassFunctionDefinitionVersionResourceAccessPolicy {
  ResourceId: string;
  Permission?: string;
}
/**
 * Type definition for AWS::Greengrass::FunctionDefinitionVersion.RunAs
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-runas.html | AWS::Greengrass::FunctionDefinitionVersion.RunAs}
 */
export interface GreengrassFunctionDefinitionVersionRunAs {
  Uid?: number;
  Gid?: number;
}
/**
 * Type definition for AWS::Greengrass::Group.GroupVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-group-groupversion.html | AWS::Greengrass::Group.GroupVersion}
 */
export interface GreengrassGroupGroupVersion {
  LoggerDefinitionVersionArn?: string;
  DeviceDefinitionVersionArn?: string;
  FunctionDefinitionVersionArn?: string;
  CoreDefinitionVersionArn?: string;
  ResourceDefinitionVersionArn?: string;
  ConnectorDefinitionVersionArn?: string;
  SubscriptionDefinitionVersionArn?: string;
}
/**
 * Type definition for AWS::Greengrass::LoggerDefinition.Logger
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-loggerdefinition-logger.html | AWS::Greengrass::LoggerDefinition.Logger}
 */
export interface GreengrassLoggerDefinitionLogger {
  Space?: number;
  Type: string;
  Level: string;
  Id: string;
  Component: string;
}
/**
 * Type definition for AWS::Greengrass::LoggerDefinition.LoggerDefinitionVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-loggerdefinition-loggerdefinitionversion.html | AWS::Greengrass::LoggerDefinition.LoggerDefinitionVersion}
 */
export interface GreengrassLoggerDefinitionLoggerDefinitionVersion {
  Loggers: any[];
}
/**
 * Type definition for AWS::Greengrass::LoggerDefinitionVersion.Logger
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-loggerdefinitionversion-logger.html | AWS::Greengrass::LoggerDefinitionVersion.Logger}
 */
export interface GreengrassLoggerDefinitionVersionLogger {
  Space?: number;
  Type: string;
  Level: string;
  Id: string;
  Component: string;
}
/**
 * Type definition for AWS::Greengrass::ResourceDefinition.GroupOwnerSetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-groupownersetting.html | AWS::Greengrass::ResourceDefinition.GroupOwnerSetting}
 */
export interface GreengrassResourceDefinitionGroupOwnerSetting {
  AutoAddGroupOwner: boolean;
  GroupOwner?: string;
}
/**
 * Type definition for AWS::Greengrass::ResourceDefinition.LocalDeviceResourceData
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-localdeviceresourcedata.html | AWS::Greengrass::ResourceDefinition.LocalDeviceResourceData}
 */
export interface GreengrassResourceDefinitionLocalDeviceResourceData {
  SourcePath: string;
  GroupOwnerSetting?: GreengrassResourceDefinitionGroupOwnerSetting;
}
/**
 * Type definition for AWS::Greengrass::ResourceDefinition.LocalVolumeResourceData
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-localvolumeresourcedata.html | AWS::Greengrass::ResourceDefinition.LocalVolumeResourceData}
 */
export interface GreengrassResourceDefinitionLocalVolumeResourceData {
  SourcePath: string;
  DestinationPath: string;
  GroupOwnerSetting?: GreengrassResourceDefinitionGroupOwnerSetting;
}
/**
 * Type definition for AWS::Greengrass::ResourceDefinition.ResourceDataContainer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourcedatacontainer.html | AWS::Greengrass::ResourceDefinition.ResourceDataContainer}
 */
export interface GreengrassResourceDefinitionResourceDataContainer {
  SecretsManagerSecretResourceData?: GreengrassResourceDefinitionSecretsManagerSecretResourceData;
  SageMakerMachineLearningModelResourceData?: GreengrassResourceDefinitionSageMakerMachineLearningModelResourceData;
  LocalVolumeResourceData?: GreengrassResourceDefinitionLocalVolumeResourceData;
  LocalDeviceResourceData?: GreengrassResourceDefinitionLocalDeviceResourceData;
  S3MachineLearningModelResourceData?: GreengrassResourceDefinitionS3MachineLearningModelResourceData;
}
/**
 * Type definition for AWS::Greengrass::ResourceDefinition.ResourceDefinitionVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourcedefinitionversion.html | AWS::Greengrass::ResourceDefinition.ResourceDefinitionVersion}
 */
export interface GreengrassResourceDefinitionResourceDefinitionVersion {
  Resources: any[];
}
/**
 * Type definition for AWS::Greengrass::ResourceDefinition.ResourceDownloadOwnerSetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourcedownloadownersetting.html | AWS::Greengrass::ResourceDefinition.ResourceDownloadOwnerSetting}
 */
export interface GreengrassResourceDefinitionResourceDownloadOwnerSetting {
  GroupOwner: string;
  GroupPermission: string;
}
/**
 * Type definition for AWS::Greengrass::ResourceDefinition.ResourceInstance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourceinstance.html | AWS::Greengrass::ResourceDefinition.ResourceInstance}
 */
export interface GreengrassResourceDefinitionResourceInstance {
  ResourceDataContainer: GreengrassResourceDefinitionResourceDataContainer;
  Id: string;
  Name: string;
}
/**
 * Type definition for AWS::Greengrass::ResourceDefinition.S3MachineLearningModelResourceData
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-s3machinelearningmodelresourcedata.html | AWS::Greengrass::ResourceDefinition.S3MachineLearningModelResourceData}
 */
export interface GreengrassResourceDefinitionS3MachineLearningModelResourceData {
  OwnerSetting?: GreengrassResourceDefinitionResourceDownloadOwnerSetting;
  DestinationPath: string;
  S3Uri: string;
}
/**
 * Type definition for AWS::Greengrass::ResourceDefinition.SageMakerMachineLearningModelResourceData
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-sagemakermachinelearningmodelresourcedata.html | AWS::Greengrass::ResourceDefinition.SageMakerMachineLearningModelResourceData}
 */
export interface GreengrassResourceDefinitionSageMakerMachineLearningModelResourceData {
  OwnerSetting?: GreengrassResourceDefinitionResourceDownloadOwnerSetting;
  DestinationPath: string;
  SageMakerJobArn: string;
}
/**
 * Type definition for AWS::Greengrass::ResourceDefinition.SecretsManagerSecretResourceData
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-secretsmanagersecretresourcedata.html | AWS::Greengrass::ResourceDefinition.SecretsManagerSecretResourceData}
 */
export interface GreengrassResourceDefinitionSecretsManagerSecretResourceData {
  ARN: string;
  AdditionalStagingLabelsToDownload?: any[];
}
/**
 * Type definition for AWS::Greengrass::ResourceDefinitionVersion.GroupOwnerSetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-groupownersetting.html | AWS::Greengrass::ResourceDefinitionVersion.GroupOwnerSetting}
 */
export interface GreengrassResourceDefinitionVersionGroupOwnerSetting {
  AutoAddGroupOwner: boolean;
  GroupOwner?: string;
}
/**
 * Type definition for AWS::Greengrass::ResourceDefinitionVersion.LocalDeviceResourceData
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-localdeviceresourcedata.html | AWS::Greengrass::ResourceDefinitionVersion.LocalDeviceResourceData}
 */
export interface GreengrassResourceDefinitionVersionLocalDeviceResourceData {
  SourcePath: string;
  GroupOwnerSetting?: GreengrassResourceDefinitionVersionGroupOwnerSetting;
}
/**
 * Type definition for AWS::Greengrass::ResourceDefinitionVersion.LocalVolumeResourceData
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-localvolumeresourcedata.html | AWS::Greengrass::ResourceDefinitionVersion.LocalVolumeResourceData}
 */
export interface GreengrassResourceDefinitionVersionLocalVolumeResourceData {
  SourcePath: string;
  DestinationPath: string;
  GroupOwnerSetting?: GreengrassResourceDefinitionVersionGroupOwnerSetting;
}
/**
 * Type definition for AWS::Greengrass::ResourceDefinitionVersion.ResourceDataContainer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourcedatacontainer.html | AWS::Greengrass::ResourceDefinitionVersion.ResourceDataContainer}
 */
export interface GreengrassResourceDefinitionVersionResourceDataContainer {
  SecretsManagerSecretResourceData?: GreengrassResourceDefinitionVersionSecretsManagerSecretResourceData;
  SageMakerMachineLearningModelResourceData?: GreengrassResourceDefinitionVersionSageMakerMachineLearningModelResourceData;
  LocalVolumeResourceData?: GreengrassResourceDefinitionVersionLocalVolumeResourceData;
  LocalDeviceResourceData?: GreengrassResourceDefinitionVersionLocalDeviceResourceData;
  S3MachineLearningModelResourceData?: GreengrassResourceDefinitionVersionS3MachineLearningModelResourceData;
}
/**
 * Type definition for AWS::Greengrass::ResourceDefinitionVersion.ResourceDownloadOwnerSetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourcedownloadownersetting.html | AWS::Greengrass::ResourceDefinitionVersion.ResourceDownloadOwnerSetting}
 */
export interface GreengrassResourceDefinitionVersionResourceDownloadOwnerSetting {
  GroupOwner: string;
  GroupPermission: string;
}
/**
 * Type definition for AWS::Greengrass::ResourceDefinitionVersion.ResourceInstance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourceinstance.html | AWS::Greengrass::ResourceDefinitionVersion.ResourceInstance}
 */
export interface GreengrassResourceDefinitionVersionResourceInstance {
  ResourceDataContainer: GreengrassResourceDefinitionVersionResourceDataContainer;
  Id: string;
  Name: string;
}
/**
 * Type definition for AWS::Greengrass::ResourceDefinitionVersion.S3MachineLearningModelResourceData
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-s3machinelearningmodelresourcedata.html | AWS::Greengrass::ResourceDefinitionVersion.S3MachineLearningModelResourceData}
 */
export interface GreengrassResourceDefinitionVersionS3MachineLearningModelResourceData {
  OwnerSetting?: GreengrassResourceDefinitionVersionResourceDownloadOwnerSetting;
  DestinationPath: string;
  S3Uri: string;
}
/**
 * Type definition for AWS::Greengrass::ResourceDefinitionVersion.SageMakerMachineLearningModelResourceData
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-sagemakermachinelearningmodelresourcedata.html | AWS::Greengrass::ResourceDefinitionVersion.SageMakerMachineLearningModelResourceData}
 */
export interface GreengrassResourceDefinitionVersionSageMakerMachineLearningModelResourceData {
  OwnerSetting?: GreengrassResourceDefinitionVersionResourceDownloadOwnerSetting;
  DestinationPath: string;
  SageMakerJobArn: string;
}
/**
 * Type definition for AWS::Greengrass::ResourceDefinitionVersion.SecretsManagerSecretResourceData
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-secretsmanagersecretresourcedata.html | AWS::Greengrass::ResourceDefinitionVersion.SecretsManagerSecretResourceData}
 */
export interface GreengrassResourceDefinitionVersionSecretsManagerSecretResourceData {
  ARN: string;
  AdditionalStagingLabelsToDownload?: any[];
}
/**
 * Type definition for AWS::Greengrass::SubscriptionDefinition.Subscription
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-subscriptiondefinition-subscription.html | AWS::Greengrass::SubscriptionDefinition.Subscription}
 */
export interface GreengrassSubscriptionDefinitionSubscription {
  Target: string;
  Id: string;
  Source: string;
  Subject: string;
}
/**
 * Type definition for AWS::Greengrass::SubscriptionDefinition.SubscriptionDefinitionVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-subscriptiondefinition-subscriptiondefinitionversion.html | AWS::Greengrass::SubscriptionDefinition.SubscriptionDefinitionVersion}
 */
export interface GreengrassSubscriptionDefinitionSubscriptionDefinitionVersion {
  Subscriptions: any[];
}
/**
 * Type definition for AWS::Greengrass::SubscriptionDefinitionVersion.Subscription
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-subscriptiondefinitionversion-subscription.html | AWS::Greengrass::SubscriptionDefinitionVersion.Subscription}
 */
export interface GreengrassSubscriptionDefinitionVersionSubscription {
  Target: string;
  Id: string;
  Source: string;
  Subject: string;
}
/**
 * Type definition for AWS::Greengrass::ConnectorDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinition.html | AWS::Greengrass::ConnectorDefinition}
 */
export interface GreengrassConnectorDefinitionProps {
  InitialVersion?: GreengrassConnectorDefinitionConnectorDefinitionVersion;
  Tags?: object;
  Name: string;
}
/**
 * Attributes type definition for AWS::Greengrass::ConnectorDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinition.html | AWS::Greengrass::ConnectorDefinition}
 */
export interface GreengrassConnectorDefinitionAttribs {
  LatestVersionArn?: string;
  Id?: string;
  Arn?: string;
  Name?: string;
}
/**
 * Resource class for AWS::Greengrass::ConnectorDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinition.html | AWS::Greengrass::ConnectorDefinition}
 */
export class GreengrassConnectorDefinition extends ResourceBase<
  "AWS::Greengrass::ConnectorDefinition",
  GreengrassConnectorDefinitionProps,
  GreengrassConnectorDefinitionAttribs
> {
  public static readonly Type = "AWS::Greengrass::ConnectorDefinition";
  public static readonly AttributeNames: readonly (keyof GreengrassConnectorDefinitionAttribs)[] =
    ["LatestVersionArn", "Id", "Arn", "Name"];
  constructor(
    logicalId: string,
    properties: GreengrassConnectorDefinitionProps,
    options?: ResourceOptions,
  ) {
    super(
      GreengrassConnectorDefinition.Type,
      GreengrassConnectorDefinition.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Greengrass::ConnectorDefinitionVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinitionversion.html | AWS::Greengrass::ConnectorDefinitionVersion}
 */
export interface GreengrassConnectorDefinitionVersionProps {
  Connectors: any[];
  ConnectorDefinitionId: string;
}
/**
 * Resource class for AWS::Greengrass::ConnectorDefinitionVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinitionversion.html | AWS::Greengrass::ConnectorDefinitionVersion}
 */
export class GreengrassConnectorDefinitionVersion extends ResourceBase<
  "AWS::Greengrass::ConnectorDefinitionVersion",
  GreengrassConnectorDefinitionVersionProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Greengrass::ConnectorDefinitionVersion";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: GreengrassConnectorDefinitionVersionProps,
    options?: ResourceOptions,
  ) {
    super(
      GreengrassConnectorDefinitionVersion.Type,
      GreengrassConnectorDefinitionVersion.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Greengrass::CoreDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinition.html | AWS::Greengrass::CoreDefinition}
 */
export interface GreengrassCoreDefinitionProps {
  InitialVersion?: GreengrassCoreDefinitionCoreDefinitionVersion;
  Tags?: object;
  Name: string;
}
/**
 * Attributes type definition for AWS::Greengrass::CoreDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinition.html | AWS::Greengrass::CoreDefinition}
 */
export interface GreengrassCoreDefinitionAttribs {
  LatestVersionArn?: string;
  Id?: string;
  Arn?: string;
  Name?: string;
}
/**
 * Resource class for AWS::Greengrass::CoreDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinition.html | AWS::Greengrass::CoreDefinition}
 */
export class GreengrassCoreDefinition extends ResourceBase<
  "AWS::Greengrass::CoreDefinition",
  GreengrassCoreDefinitionProps,
  GreengrassCoreDefinitionAttribs
> {
  public static readonly Type = "AWS::Greengrass::CoreDefinition";
  public static readonly AttributeNames: readonly (keyof GreengrassCoreDefinitionAttribs)[] =
    ["LatestVersionArn", "Id", "Arn", "Name"];
  constructor(
    logicalId: string,
    properties: GreengrassCoreDefinitionProps,
    options?: ResourceOptions,
  ) {
    super(
      GreengrassCoreDefinition.Type,
      GreengrassCoreDefinition.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Greengrass::CoreDefinitionVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinitionversion.html | AWS::Greengrass::CoreDefinitionVersion}
 */
export interface GreengrassCoreDefinitionVersionProps {
  Cores: any[];
  CoreDefinitionId: string;
}
/**
 * Resource class for AWS::Greengrass::CoreDefinitionVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinitionversion.html | AWS::Greengrass::CoreDefinitionVersion}
 */
export class GreengrassCoreDefinitionVersion extends ResourceBase<
  "AWS::Greengrass::CoreDefinitionVersion",
  GreengrassCoreDefinitionVersionProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Greengrass::CoreDefinitionVersion";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: GreengrassCoreDefinitionVersionProps,
    options?: ResourceOptions,
  ) {
    super(
      GreengrassCoreDefinitionVersion.Type,
      GreengrassCoreDefinitionVersion.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Greengrass::DeviceDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinition.html | AWS::Greengrass::DeviceDefinition}
 */
export interface GreengrassDeviceDefinitionProps {
  InitialVersion?: GreengrassDeviceDefinitionDeviceDefinitionVersion;
  Tags?: object;
  Name: string;
}
/**
 * Attributes type definition for AWS::Greengrass::DeviceDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinition.html | AWS::Greengrass::DeviceDefinition}
 */
export interface GreengrassDeviceDefinitionAttribs {
  LatestVersionArn?: string;
  Id?: string;
  Arn?: string;
  Name?: string;
}
/**
 * Resource class for AWS::Greengrass::DeviceDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinition.html | AWS::Greengrass::DeviceDefinition}
 */
export class GreengrassDeviceDefinition extends ResourceBase<
  "AWS::Greengrass::DeviceDefinition",
  GreengrassDeviceDefinitionProps,
  GreengrassDeviceDefinitionAttribs
> {
  public static readonly Type = "AWS::Greengrass::DeviceDefinition";
  public static readonly AttributeNames: readonly (keyof GreengrassDeviceDefinitionAttribs)[] =
    ["LatestVersionArn", "Id", "Arn", "Name"];
  constructor(
    logicalId: string,
    properties: GreengrassDeviceDefinitionProps,
    options?: ResourceOptions,
  ) {
    super(
      GreengrassDeviceDefinition.Type,
      GreengrassDeviceDefinition.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Greengrass::DeviceDefinitionVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinitionversion.html | AWS::Greengrass::DeviceDefinitionVersion}
 */
export interface GreengrassDeviceDefinitionVersionProps {
  DeviceDefinitionId: string;
  Devices: any[];
}
/**
 * Resource class for AWS::Greengrass::DeviceDefinitionVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinitionversion.html | AWS::Greengrass::DeviceDefinitionVersion}
 */
export class GreengrassDeviceDefinitionVersion extends ResourceBase<
  "AWS::Greengrass::DeviceDefinitionVersion",
  GreengrassDeviceDefinitionVersionProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Greengrass::DeviceDefinitionVersion";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: GreengrassDeviceDefinitionVersionProps,
    options?: ResourceOptions,
  ) {
    super(
      GreengrassDeviceDefinitionVersion.Type,
      GreengrassDeviceDefinitionVersion.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Greengrass::FunctionDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinition.html | AWS::Greengrass::FunctionDefinition}
 */
export interface GreengrassFunctionDefinitionProps {
  InitialVersion?: GreengrassFunctionDefinitionFunctionDefinitionVersion;
  Tags?: object;
  Name: string;
}
/**
 * Attributes type definition for AWS::Greengrass::FunctionDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinition.html | AWS::Greengrass::FunctionDefinition}
 */
export interface GreengrassFunctionDefinitionAttribs {
  LatestVersionArn?: string;
  Id?: string;
  Arn?: string;
  Name?: string;
}
/**
 * Resource class for AWS::Greengrass::FunctionDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinition.html | AWS::Greengrass::FunctionDefinition}
 */
export class GreengrassFunctionDefinition extends ResourceBase<
  "AWS::Greengrass::FunctionDefinition",
  GreengrassFunctionDefinitionProps,
  GreengrassFunctionDefinitionAttribs
> {
  public static readonly Type = "AWS::Greengrass::FunctionDefinition";
  public static readonly AttributeNames: readonly (keyof GreengrassFunctionDefinitionAttribs)[] =
    ["LatestVersionArn", "Id", "Arn", "Name"];
  constructor(
    logicalId: string,
    properties: GreengrassFunctionDefinitionProps,
    options?: ResourceOptions,
  ) {
    super(
      GreengrassFunctionDefinition.Type,
      GreengrassFunctionDefinition.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Greengrass::FunctionDefinitionVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html | AWS::Greengrass::FunctionDefinitionVersion}
 */
export interface GreengrassFunctionDefinitionVersionProps {
  DefaultConfig?: GreengrassFunctionDefinitionVersionDefaultConfig;
  Functions: any[];
  FunctionDefinitionId: string;
}
/**
 * Resource class for AWS::Greengrass::FunctionDefinitionVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html | AWS::Greengrass::FunctionDefinitionVersion}
 */
export class GreengrassFunctionDefinitionVersion extends ResourceBase<
  "AWS::Greengrass::FunctionDefinitionVersion",
  GreengrassFunctionDefinitionVersionProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Greengrass::FunctionDefinitionVersion";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: GreengrassFunctionDefinitionVersionProps,
    options?: ResourceOptions,
  ) {
    super(
      GreengrassFunctionDefinitionVersion.Type,
      GreengrassFunctionDefinitionVersion.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Greengrass::Group
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html | AWS::Greengrass::Group}
 */
export interface GreengrassGroupProps {
  InitialVersion?: GreengrassGroupGroupVersion;
  RoleArn?: string;
  Tags?: object;
  Name: string;
}
/**
 * Attributes type definition for AWS::Greengrass::Group
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html | AWS::Greengrass::Group}
 */
export interface GreengrassGroupAttribs {
  RoleAttachedAt?: string;
  LatestVersionArn?: string;
  Id?: string;
  Arn?: string;
  RoleArn?: string;
  Name?: string;
}
/**
 * Resource class for AWS::Greengrass::Group
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html | AWS::Greengrass::Group}
 */
export class GreengrassGroup extends ResourceBase<
  "AWS::Greengrass::Group",
  GreengrassGroupProps,
  GreengrassGroupAttribs
> {
  public static readonly Type = "AWS::Greengrass::Group";
  public static readonly AttributeNames: readonly (keyof GreengrassGroupAttribs)[] =
    ["RoleAttachedAt", "LatestVersionArn", "Id", "Arn", "RoleArn", "Name"];
  constructor(
    logicalId: string,
    properties: GreengrassGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      GreengrassGroup.Type,
      GreengrassGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Greengrass::GroupVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-groupversion.html | AWS::Greengrass::GroupVersion}
 */
export interface GreengrassGroupVersionProps {
  LoggerDefinitionVersionArn?: string;
  DeviceDefinitionVersionArn?: string;
  FunctionDefinitionVersionArn?: string;
  CoreDefinitionVersionArn?: string;
  ResourceDefinitionVersionArn?: string;
  ConnectorDefinitionVersionArn?: string;
  SubscriptionDefinitionVersionArn?: string;
  GroupId: string;
}
/**
 * Resource class for AWS::Greengrass::GroupVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-groupversion.html | AWS::Greengrass::GroupVersion}
 */
export class GreengrassGroupVersion extends ResourceBase<
  "AWS::Greengrass::GroupVersion",
  GreengrassGroupVersionProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Greengrass::GroupVersion";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: GreengrassGroupVersionProps,
    options?: ResourceOptions,
  ) {
    super(
      GreengrassGroupVersion.Type,
      GreengrassGroupVersion.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Greengrass::LoggerDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-loggerdefinition.html | AWS::Greengrass::LoggerDefinition}
 */
export interface GreengrassLoggerDefinitionProps {
  InitialVersion?: GreengrassLoggerDefinitionLoggerDefinitionVersion;
  Tags?: object;
  Name: string;
}
/**
 * Attributes type definition for AWS::Greengrass::LoggerDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-loggerdefinition.html | AWS::Greengrass::LoggerDefinition}
 */
export interface GreengrassLoggerDefinitionAttribs {
  LatestVersionArn?: string;
  Id?: string;
  Arn?: string;
  Name?: string;
}
/**
 * Resource class for AWS::Greengrass::LoggerDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-loggerdefinition.html | AWS::Greengrass::LoggerDefinition}
 */
export class GreengrassLoggerDefinition extends ResourceBase<
  "AWS::Greengrass::LoggerDefinition",
  GreengrassLoggerDefinitionProps,
  GreengrassLoggerDefinitionAttribs
> {
  public static readonly Type = "AWS::Greengrass::LoggerDefinition";
  public static readonly AttributeNames: readonly (keyof GreengrassLoggerDefinitionAttribs)[] =
    ["LatestVersionArn", "Id", "Arn", "Name"];
  constructor(
    logicalId: string,
    properties: GreengrassLoggerDefinitionProps,
    options?: ResourceOptions,
  ) {
    super(
      GreengrassLoggerDefinition.Type,
      GreengrassLoggerDefinition.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Greengrass::LoggerDefinitionVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-loggerdefinitionversion.html | AWS::Greengrass::LoggerDefinitionVersion}
 */
export interface GreengrassLoggerDefinitionVersionProps {
  LoggerDefinitionId: string;
  Loggers: any[];
}
/**
 * Resource class for AWS::Greengrass::LoggerDefinitionVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-loggerdefinitionversion.html | AWS::Greengrass::LoggerDefinitionVersion}
 */
export class GreengrassLoggerDefinitionVersion extends ResourceBase<
  "AWS::Greengrass::LoggerDefinitionVersion",
  GreengrassLoggerDefinitionVersionProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Greengrass::LoggerDefinitionVersion";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: GreengrassLoggerDefinitionVersionProps,
    options?: ResourceOptions,
  ) {
    super(
      GreengrassLoggerDefinitionVersion.Type,
      GreengrassLoggerDefinitionVersion.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Greengrass::ResourceDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html | AWS::Greengrass::ResourceDefinition}
 */
export interface GreengrassResourceDefinitionProps {
  InitialVersion?: GreengrassResourceDefinitionResourceDefinitionVersion;
  Tags?: object;
  Name: string;
}
/**
 * Attributes type definition for AWS::Greengrass::ResourceDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html | AWS::Greengrass::ResourceDefinition}
 */
export interface GreengrassResourceDefinitionAttribs {
  LatestVersionArn?: string;
  Id?: string;
  Arn?: string;
  Name?: string;
}
/**
 * Resource class for AWS::Greengrass::ResourceDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html | AWS::Greengrass::ResourceDefinition}
 */
export class GreengrassResourceDefinition extends ResourceBase<
  "AWS::Greengrass::ResourceDefinition",
  GreengrassResourceDefinitionProps,
  GreengrassResourceDefinitionAttribs
> {
  public static readonly Type = "AWS::Greengrass::ResourceDefinition";
  public static readonly AttributeNames: readonly (keyof GreengrassResourceDefinitionAttribs)[] =
    ["LatestVersionArn", "Id", "Arn", "Name"];
  constructor(
    logicalId: string,
    properties: GreengrassResourceDefinitionProps,
    options?: ResourceOptions,
  ) {
    super(
      GreengrassResourceDefinition.Type,
      GreengrassResourceDefinition.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Greengrass::ResourceDefinitionVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinitionversion.html | AWS::Greengrass::ResourceDefinitionVersion}
 */
export interface GreengrassResourceDefinitionVersionProps {
  Resources: any[];
  ResourceDefinitionId: string;
}
/**
 * Resource class for AWS::Greengrass::ResourceDefinitionVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinitionversion.html | AWS::Greengrass::ResourceDefinitionVersion}
 */
export class GreengrassResourceDefinitionVersion extends ResourceBase<
  "AWS::Greengrass::ResourceDefinitionVersion",
  GreengrassResourceDefinitionVersionProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Greengrass::ResourceDefinitionVersion";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: GreengrassResourceDefinitionVersionProps,
    options?: ResourceOptions,
  ) {
    super(
      GreengrassResourceDefinitionVersion.Type,
      GreengrassResourceDefinitionVersion.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Greengrass::SubscriptionDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinition.html | AWS::Greengrass::SubscriptionDefinition}
 */
export interface GreengrassSubscriptionDefinitionProps {
  InitialVersion?: GreengrassSubscriptionDefinitionSubscriptionDefinitionVersion;
  Tags?: object;
  Name: string;
}
/**
 * Attributes type definition for AWS::Greengrass::SubscriptionDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinition.html | AWS::Greengrass::SubscriptionDefinition}
 */
export interface GreengrassSubscriptionDefinitionAttribs {
  LatestVersionArn?: string;
  Id?: string;
  Arn?: string;
  Name?: string;
}
/**
 * Resource class for AWS::Greengrass::SubscriptionDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinition.html | AWS::Greengrass::SubscriptionDefinition}
 */
export class GreengrassSubscriptionDefinition extends ResourceBase<
  "AWS::Greengrass::SubscriptionDefinition",
  GreengrassSubscriptionDefinitionProps,
  GreengrassSubscriptionDefinitionAttribs
> {
  public static readonly Type = "AWS::Greengrass::SubscriptionDefinition";
  public static readonly AttributeNames: readonly (keyof GreengrassSubscriptionDefinitionAttribs)[] =
    ["LatestVersionArn", "Id", "Arn", "Name"];
  constructor(
    logicalId: string,
    properties: GreengrassSubscriptionDefinitionProps,
    options?: ResourceOptions,
  ) {
    super(
      GreengrassSubscriptionDefinition.Type,
      GreengrassSubscriptionDefinition.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Greengrass::SubscriptionDefinitionVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinitionversion.html | AWS::Greengrass::SubscriptionDefinitionVersion}
 */
export interface GreengrassSubscriptionDefinitionVersionProps {
  SubscriptionDefinitionId: string;
  Subscriptions: any[];
}
/**
 * Resource class for AWS::Greengrass::SubscriptionDefinitionVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinitionversion.html | AWS::Greengrass::SubscriptionDefinitionVersion}
 */
export class GreengrassSubscriptionDefinitionVersion extends ResourceBase<
  "AWS::Greengrass::SubscriptionDefinitionVersion",
  GreengrassSubscriptionDefinitionVersionProps,
  Record<string, never>
> {
  public static readonly Type =
    "AWS::Greengrass::SubscriptionDefinitionVersion";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: GreengrassSubscriptionDefinitionVersionProps,
    options?: ResourceOptions,
  ) {
    super(
      GreengrassSubscriptionDefinitionVersion.Type,
      GreengrassSubscriptionDefinitionVersion.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
