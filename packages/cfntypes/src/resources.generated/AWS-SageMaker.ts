import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::SageMaker::App.ResourceSpec
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-app-resourcespec.html | AWS::SageMaker::App.ResourceSpec}
 */
export interface SageMakerAppResourceSpec {
  SageMakerImageArn?: string;
  InstanceType?: string;
  SageMakerImageVersionArn?: string;
}
/**
 * Type definition for AWS::SageMaker::AppImageConfig.FileSystemConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-filesystemconfig.html | AWS::SageMaker::AppImageConfig.FileSystemConfig}
 */
export interface SageMakerAppImageConfigFileSystemConfig {
  MountPath?: string;
  DefaultGid?: number;
  DefaultUid?: number;
}
/**
 * Type definition for AWS::SageMaker::AppImageConfig.KernelGatewayImageConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-kernelgatewayimageconfig.html | AWS::SageMaker::AppImageConfig.KernelGatewayImageConfig}
 */
export interface SageMakerAppImageConfigKernelGatewayImageConfig {
  KernelSpecs: any[];
  FileSystemConfig?: SageMakerAppImageConfigFileSystemConfig;
}
/**
 * Type definition for AWS::SageMaker::AppImageConfig.KernelSpec
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-kernelspec.html | AWS::SageMaker::AppImageConfig.KernelSpec}
 */
export interface SageMakerAppImageConfigKernelSpec {
  DisplayName?: string;
  Name: string;
}
/**
 * Type definition for AWS::SageMaker::CodeRepository.GitConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-coderepository-gitconfig.html | AWS::SageMaker::CodeRepository.GitConfig}
 */
export interface SageMakerCodeRepositoryGitConfig {
  SecretArn?: string;
  Branch?: string;
  RepositoryUrl: string;
}
/**
 * Type definition for AWS::SageMaker::DataQualityJobDefinition.BatchTransformInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-batchtransforminput.html | AWS::SageMaker::DataQualityJobDefinition.BatchTransformInput}
 */
export interface SageMakerDataQualityJobDefinitionBatchTransformInput {
  DatasetFormat: SageMakerDataQualityJobDefinitionDatasetFormat;
  S3DataDistributionType?: string;
  DataCapturedDestinationS3Uri: string;
  S3InputMode?: string;
  LocalPath: string;
}
/**
 * Type definition for AWS::SageMaker::DataQualityJobDefinition.ClusterConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-clusterconfig.html | AWS::SageMaker::DataQualityJobDefinition.ClusterConfig}
 */
export interface SageMakerDataQualityJobDefinitionClusterConfig {
  InstanceCount: number;
  VolumeSizeInGB: number;
  VolumeKmsKeyId?: string;
  InstanceType: string;
}
/**
 * Type definition for AWS::SageMaker::DataQualityJobDefinition.ConstraintsResource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-constraintsresource.html | AWS::SageMaker::DataQualityJobDefinition.ConstraintsResource}
 */
export interface SageMakerDataQualityJobDefinitionConstraintsResource {
  S3Uri?: string;
}
/**
 * Type definition for AWS::SageMaker::DataQualityJobDefinition.Csv
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-csv.html | AWS::SageMaker::DataQualityJobDefinition.Csv}
 */
export interface SageMakerDataQualityJobDefinitionCsv {
  Header?: boolean;
}
/**
 * Type definition for AWS::SageMaker::DataQualityJobDefinition.DataQualityAppSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-dataqualityappspecification.html | AWS::SageMaker::DataQualityJobDefinition.DataQualityAppSpecification}
 */
export interface SageMakerDataQualityJobDefinitionDataQualityAppSpecification {
  ContainerEntrypoint?: any[];
  PostAnalyticsProcessorSourceUri?: string;
  RecordPreprocessorSourceUri?: string;
  Environment?: Record<string, any>;
  ImageUri: string;
  ContainerArguments?: any[];
}
/**
 * Type definition for AWS::SageMaker::DataQualityJobDefinition.DataQualityBaselineConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-dataqualitybaselineconfig.html | AWS::SageMaker::DataQualityJobDefinition.DataQualityBaselineConfig}
 */
export interface SageMakerDataQualityJobDefinitionDataQualityBaselineConfig {
  StatisticsResource?: SageMakerDataQualityJobDefinitionStatisticsResource;
  ConstraintsResource?: SageMakerDataQualityJobDefinitionConstraintsResource;
  BaseliningJobName?: string;
}
/**
 * Type definition for AWS::SageMaker::DataQualityJobDefinition.DataQualityJobInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-dataqualityjobinput.html | AWS::SageMaker::DataQualityJobDefinition.DataQualityJobInput}
 */
export interface SageMakerDataQualityJobDefinitionDataQualityJobInput {
  BatchTransformInput?: SageMakerDataQualityJobDefinitionBatchTransformInput;
  EndpointInput?: SageMakerDataQualityJobDefinitionEndpointInput;
}
/**
 * Type definition for AWS::SageMaker::DataQualityJobDefinition.DatasetFormat
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-datasetformat.html | AWS::SageMaker::DataQualityJobDefinition.DatasetFormat}
 */
export interface SageMakerDataQualityJobDefinitionDatasetFormat {
  Parquet?: boolean;
  Csv?: SageMakerDataQualityJobDefinitionCsv;
  Json?: SageMakerDataQualityJobDefinitionJson;
}
/**
 * Type definition for AWS::SageMaker::DataQualityJobDefinition.EndpointInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-endpointinput.html | AWS::SageMaker::DataQualityJobDefinition.EndpointInput}
 */
export interface SageMakerDataQualityJobDefinitionEndpointInput {
  S3DataDistributionType?: string;
  EndpointName: string;
  S3InputMode?: string;
  LocalPath: string;
}
/**
 * Type definition for AWS::SageMaker::DataQualityJobDefinition.Json
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-json.html | AWS::SageMaker::DataQualityJobDefinition.Json}
 */
export interface SageMakerDataQualityJobDefinitionJson {
  Line?: boolean;
}
/**
 * Type definition for AWS::SageMaker::DataQualityJobDefinition.MonitoringOutput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-monitoringoutput.html | AWS::SageMaker::DataQualityJobDefinition.MonitoringOutput}
 */
export interface SageMakerDataQualityJobDefinitionMonitoringOutput {
  S3Output: SageMakerDataQualityJobDefinitionS3Output;
}
/**
 * Type definition for AWS::SageMaker::DataQualityJobDefinition.MonitoringOutputConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-monitoringoutputconfig.html | AWS::SageMaker::DataQualityJobDefinition.MonitoringOutputConfig}
 */
export interface SageMakerDataQualityJobDefinitionMonitoringOutputConfig {
  KmsKeyId?: string;
  MonitoringOutputs: any[];
}
/**
 * Type definition for AWS::SageMaker::DataQualityJobDefinition.MonitoringResources
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-monitoringresources.html | AWS::SageMaker::DataQualityJobDefinition.MonitoringResources}
 */
export interface SageMakerDataQualityJobDefinitionMonitoringResources {
  ClusterConfig: SageMakerDataQualityJobDefinitionClusterConfig;
}
/**
 * Type definition for AWS::SageMaker::DataQualityJobDefinition.NetworkConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-networkconfig.html | AWS::SageMaker::DataQualityJobDefinition.NetworkConfig}
 */
export interface SageMakerDataQualityJobDefinitionNetworkConfig {
  EnableNetworkIsolation?: boolean;
  EnableInterContainerTrafficEncryption?: boolean;
  VpcConfig?: SageMakerDataQualityJobDefinitionVpcConfig;
}
/**
 * Type definition for AWS::SageMaker::DataQualityJobDefinition.S3Output
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-s3output.html | AWS::SageMaker::DataQualityJobDefinition.S3Output}
 */
export interface SageMakerDataQualityJobDefinitionS3Output {
  S3Uri: string;
  LocalPath: string;
  S3UploadMode?: string;
}
/**
 * Type definition for AWS::SageMaker::DataQualityJobDefinition.StatisticsResource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-statisticsresource.html | AWS::SageMaker::DataQualityJobDefinition.StatisticsResource}
 */
export interface SageMakerDataQualityJobDefinitionStatisticsResource {
  S3Uri?: string;
}
/**
 * Type definition for AWS::SageMaker::DataQualityJobDefinition.StoppingCondition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-stoppingcondition.html | AWS::SageMaker::DataQualityJobDefinition.StoppingCondition}
 */
export interface SageMakerDataQualityJobDefinitionStoppingCondition {
  MaxRuntimeInSeconds: number;
}
/**
 * Type definition for AWS::SageMaker::DataQualityJobDefinition.VpcConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-vpcconfig.html | AWS::SageMaker::DataQualityJobDefinition.VpcConfig}
 */
export interface SageMakerDataQualityJobDefinitionVpcConfig {
  Subnets: any[];
  SecurityGroupIds: any[];
}
/**
 * Type definition for AWS::SageMaker::Device.Device
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-device-device.html | AWS::SageMaker::Device.Device}
 */
export interface SageMakerDeviceDevice {
  IotThingName?: string;
  Description?: string;
  DeviceName: string;
}
/**
 * Type definition for AWS::SageMaker::DeviceFleet.EdgeOutputConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-devicefleet-edgeoutputconfig.html | AWS::SageMaker::DeviceFleet.EdgeOutputConfig}
 */
export interface SageMakerDeviceFleetEdgeOutputConfig {
  KmsKeyId?: string;
  S3OutputLocation: string;
}
/**
 * Type definition for AWS::SageMaker::Domain.CustomImage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-customimage.html | AWS::SageMaker::Domain.CustomImage}
 */
export interface SageMakerDomainCustomImage {
  ImageName: string;
  AppImageConfigName: string;
  ImageVersionNumber?: number;
}
/**
 * Type definition for AWS::SageMaker::Domain.DefaultSpaceSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-defaultspacesettings.html | AWS::SageMaker::Domain.DefaultSpaceSettings}
 */
export interface SageMakerDomainDefaultSpaceSettings {
  SecurityGroups?: any[];
  KernelGatewayAppSettings?: SageMakerDomainKernelGatewayAppSettings;
  JupyterServerAppSettings?: SageMakerDomainJupyterServerAppSettings;
  ExecutionRole: string;
}
/**
 * Type definition for AWS::SageMaker::Domain.DomainSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-domainsettings.html | AWS::SageMaker::Domain.DomainSettings}
 */
export interface SageMakerDomainDomainSettings {
  RStudioServerProDomainSettings?: SageMakerDomainRStudioServerProDomainSettings;
  SecurityGroupIds?: any[];
}
/**
 * Type definition for AWS::SageMaker::Domain.JupyterServerAppSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-jupyterserverappsettings.html | AWS::SageMaker::Domain.JupyterServerAppSettings}
 */
export interface SageMakerDomainJupyterServerAppSettings {
  DefaultResourceSpec?: SageMakerDomainResourceSpec;
}
/**
 * Type definition for AWS::SageMaker::Domain.KernelGatewayAppSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-kernelgatewayappsettings.html | AWS::SageMaker::Domain.KernelGatewayAppSettings}
 */
export interface SageMakerDomainKernelGatewayAppSettings {
  CustomImages?: any[];
  DefaultResourceSpec?: SageMakerDomainResourceSpec;
}
/**
 * Type definition for AWS::SageMaker::Domain.RSessionAppSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-rsessionappsettings.html | AWS::SageMaker::Domain.RSessionAppSettings}
 */
export interface SageMakerDomainRSessionAppSettings {
  CustomImages?: any[];
  DefaultResourceSpec?: SageMakerDomainResourceSpec;
}
/**
 * Type definition for AWS::SageMaker::Domain.RStudioServerProAppSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-rstudioserverproappsettings.html | AWS::SageMaker::Domain.RStudioServerProAppSettings}
 */
export interface SageMakerDomainRStudioServerProAppSettings {
  AccessStatus?: string;
  UserGroup?: string;
}
/**
 * Type definition for AWS::SageMaker::Domain.RStudioServerProDomainSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-rstudioserverprodomainsettings.html | AWS::SageMaker::Domain.RStudioServerProDomainSettings}
 */
export interface SageMakerDomainRStudioServerProDomainSettings {
  DomainExecutionRoleArn: string;
  RStudioConnectUrl?: string;
  DefaultResourceSpec?: SageMakerDomainResourceSpec;
  RStudioPackageManagerUrl?: string;
}
/**
 * Type definition for AWS::SageMaker::Domain.ResourceSpec
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-resourcespec.html | AWS::SageMaker::Domain.ResourceSpec}
 */
export interface SageMakerDomainResourceSpec {
  SageMakerImageArn?: string;
  InstanceType?: string;
  LifecycleConfigArn?: string;
  SageMakerImageVersionArn?: string;
}
/**
 * Type definition for AWS::SageMaker::Domain.SharingSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-sharingsettings.html | AWS::SageMaker::Domain.SharingSettings}
 */
export interface SageMakerDomainSharingSettings {
  NotebookOutputOption?: string;
  S3KmsKeyId?: string;
  S3OutputPath?: string;
}
/**
 * Type definition for AWS::SageMaker::Domain.UserSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-usersettings.html | AWS::SageMaker::Domain.UserSettings}
 */
export interface SageMakerDomainUserSettings {
  SecurityGroups?: any[];
  KernelGatewayAppSettings?: SageMakerDomainKernelGatewayAppSettings;
  RStudioServerProAppSettings?: SageMakerDomainRStudioServerProAppSettings;
  RSessionAppSettings?: SageMakerDomainRSessionAppSettings;
  JupyterServerAppSettings?: SageMakerDomainJupyterServerAppSettings;
  ExecutionRole: string;
  SharingSettings?: SageMakerDomainSharingSettings;
}
/**
 * Type definition for AWS::SageMaker::Endpoint.Alarm
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-alarm.html | AWS::SageMaker::Endpoint.Alarm}
 */
export interface SageMakerEndpointAlarm {
  AlarmName: string;
}
/**
 * Type definition for AWS::SageMaker::Endpoint.AutoRollbackConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-autorollbackconfig.html | AWS::SageMaker::Endpoint.AutoRollbackConfig}
 */
export interface SageMakerEndpointAutoRollbackConfig {
  Alarms: any[];
}
/**
 * Type definition for AWS::SageMaker::Endpoint.BlueGreenUpdatePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-bluegreenupdatepolicy.html | AWS::SageMaker::Endpoint.BlueGreenUpdatePolicy}
 */
export interface SageMakerEndpointBlueGreenUpdatePolicy {
  MaximumExecutionTimeoutInSeconds?: number;
  TerminationWaitInSeconds?: number;
  TrafficRoutingConfiguration: SageMakerEndpointTrafficRoutingConfig;
}
/**
 * Type definition for AWS::SageMaker::Endpoint.CapacitySize
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-capacitysize.html | AWS::SageMaker::Endpoint.CapacitySize}
 */
export interface SageMakerEndpointCapacitySize {
  Type: string;
  Value: number;
}
/**
 * Type definition for AWS::SageMaker::Endpoint.DeploymentConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-deploymentconfig.html | AWS::SageMaker::Endpoint.DeploymentConfig}
 */
export interface SageMakerEndpointDeploymentConfig {
  AutoRollbackConfiguration?: SageMakerEndpointAutoRollbackConfig;
  RollingUpdatePolicy?: SageMakerEndpointRollingUpdatePolicy;
  BlueGreenUpdatePolicy?: SageMakerEndpointBlueGreenUpdatePolicy;
}
/**
 * Type definition for AWS::SageMaker::Endpoint.RollingUpdatePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-rollingupdatepolicy.html | AWS::SageMaker::Endpoint.RollingUpdatePolicy}
 */
export interface SageMakerEndpointRollingUpdatePolicy {
  MaximumExecutionTimeoutInSeconds?: number;
  MaximumBatchSize: SageMakerEndpointCapacitySize;
  WaitIntervalInSeconds: number;
  RollbackMaximumBatchSize?: SageMakerEndpointCapacitySize;
}
/**
 * Type definition for AWS::SageMaker::Endpoint.TrafficRoutingConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-trafficroutingconfig.html | AWS::SageMaker::Endpoint.TrafficRoutingConfig}
 */
export interface SageMakerEndpointTrafficRoutingConfig {
  Type: string;
  LinearStepSize?: SageMakerEndpointCapacitySize;
  CanarySize?: SageMakerEndpointCapacitySize;
  WaitIntervalInSeconds?: number;
}
/**
 * Type definition for AWS::SageMaker::Endpoint.VariantProperty
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-variantproperty.html | AWS::SageMaker::Endpoint.VariantProperty}
 */
export interface SageMakerEndpointVariantProperty {
  VariantPropertyType?: string;
}
/**
 * Type definition for AWS::SageMaker::EndpointConfig.AsyncInferenceClientConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-asyncinferenceclientconfig.html | AWS::SageMaker::EndpointConfig.AsyncInferenceClientConfig}
 */
export interface SageMakerEndpointConfigAsyncInferenceClientConfig {
  MaxConcurrentInvocationsPerInstance?: number;
}
/**
 * Type definition for AWS::SageMaker::EndpointConfig.AsyncInferenceConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-asyncinferenceconfig.html | AWS::SageMaker::EndpointConfig.AsyncInferenceConfig}
 */
export interface SageMakerEndpointConfigAsyncInferenceConfig {
  OutputConfig: SageMakerEndpointConfigAsyncInferenceOutputConfig;
  ClientConfig?: SageMakerEndpointConfigAsyncInferenceClientConfig;
}
/**
 * Type definition for AWS::SageMaker::EndpointConfig.AsyncInferenceNotificationConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-asyncinferencenotificationconfig.html | AWS::SageMaker::EndpointConfig.AsyncInferenceNotificationConfig}
 */
export interface SageMakerEndpointConfigAsyncInferenceNotificationConfig {
  IncludeInferenceResponseIn?: any[];
  SuccessTopic?: string;
  ErrorTopic?: string;
}
/**
 * Type definition for AWS::SageMaker::EndpointConfig.AsyncInferenceOutputConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-asyncinferenceoutputconfig.html | AWS::SageMaker::EndpointConfig.AsyncInferenceOutputConfig}
 */
export interface SageMakerEndpointConfigAsyncInferenceOutputConfig {
  KmsKeyId?: string;
  NotificationConfig?: SageMakerEndpointConfigAsyncInferenceNotificationConfig;
  S3OutputPath?: string;
  S3FailurePath?: string;
}
/**
 * Type definition for AWS::SageMaker::EndpointConfig.CaptureContentTypeHeader
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-datacaptureconfig-capturecontenttypeheader.html | AWS::SageMaker::EndpointConfig.CaptureContentTypeHeader}
 */
export interface SageMakerEndpointConfigCaptureContentTypeHeader {
  JsonContentTypes?: any[];
  CsvContentTypes?: any[];
}
/**
 * Type definition for AWS::SageMaker::EndpointConfig.CaptureOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-captureoption.html | AWS::SageMaker::EndpointConfig.CaptureOption}
 */
export interface SageMakerEndpointConfigCaptureOption {
  CaptureMode: string;
}
/**
 * Type definition for AWS::SageMaker::EndpointConfig.ClarifyExplainerConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyexplainerconfig.html | AWS::SageMaker::EndpointConfig.ClarifyExplainerConfig}
 */
export interface SageMakerEndpointConfigClarifyExplainerConfig {
  InferenceConfig?: SageMakerEndpointConfigClarifyInferenceConfig;
  EnableExplanations?: string;
  ShapConfig: SageMakerEndpointConfigClarifyShapConfig;
}
/**
 * Type definition for AWS::SageMaker::EndpointConfig.ClarifyFeatureType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyfeaturetype.html | AWS::SageMaker::EndpointConfig.ClarifyFeatureType}
 */
export type SageMakerEndpointConfigClarifyFeatureType = string;
/**
 * Type definition for AWS::SageMaker::EndpointConfig.ClarifyHeader
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyheader.html | AWS::SageMaker::EndpointConfig.ClarifyHeader}
 */
export type SageMakerEndpointConfigClarifyHeader = string;
/**
 * Type definition for AWS::SageMaker::EndpointConfig.ClarifyInferenceConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyinferenceconfig.html | AWS::SageMaker::EndpointConfig.ClarifyInferenceConfig}
 */
export interface SageMakerEndpointConfigClarifyInferenceConfig {
  ContentTemplate?: string;
  LabelHeaders?: any[];
  MaxPayloadInMB?: number;
  ProbabilityIndex?: number;
  LabelAttribute?: string;
  FeatureTypes?: any[];
  FeatureHeaders?: any[];
  LabelIndex?: number;
  ProbabilityAttribute?: string;
  FeaturesAttribute?: string;
  MaxRecordCount?: number;
}
/**
 * Type definition for AWS::SageMaker::EndpointConfig.ClarifyShapBaselineConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyshapbaselineconfig.html | AWS::SageMaker::EndpointConfig.ClarifyShapBaselineConfig}
 */
export interface SageMakerEndpointConfigClarifyShapBaselineConfig {
  ShapBaseline?: string;
  ShapBaselineUri?: string;
  MimeType?: string;
}
/**
 * Type definition for AWS::SageMaker::EndpointConfig.ClarifyShapConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyshapconfig.html | AWS::SageMaker::EndpointConfig.ClarifyShapConfig}
 */
export interface SageMakerEndpointConfigClarifyShapConfig {
  TextConfig?: SageMakerEndpointConfigClarifyTextConfig;
  UseLogit?: boolean;
  Seed?: number;
  ShapBaselineConfig: SageMakerEndpointConfigClarifyShapBaselineConfig;
  NumberOfSamples?: number;
}
/**
 * Type definition for AWS::SageMaker::EndpointConfig.ClarifyTextConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifytextconfig.html | AWS::SageMaker::EndpointConfig.ClarifyTextConfig}
 */
export interface SageMakerEndpointConfigClarifyTextConfig {
  Language: string;
  Granularity: string;
}
/**
 * Type definition for AWS::SageMaker::EndpointConfig.DataCaptureConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-datacaptureconfig.html | AWS::SageMaker::EndpointConfig.DataCaptureConfig}
 */
export interface SageMakerEndpointConfigDataCaptureConfig {
  CaptureOptions: any[];
  KmsKeyId?: string;
  DestinationS3Uri: string;
  InitialSamplingPercentage: number;
  CaptureContentTypeHeader?: SageMakerEndpointConfigCaptureContentTypeHeader;
  EnableCapture?: boolean;
}
/**
 * Type definition for AWS::SageMaker::EndpointConfig.ExplainerConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-explainerconfig.html | AWS::SageMaker::EndpointConfig.ExplainerConfig}
 */
export interface SageMakerEndpointConfigExplainerConfig {
  ClarifyExplainerConfig?: SageMakerEndpointConfigClarifyExplainerConfig;
}
/**
 * Type definition for AWS::SageMaker::EndpointConfig.ProductionVariant
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-productionvariant.html | AWS::SageMaker::EndpointConfig.ProductionVariant}
 */
export interface SageMakerEndpointConfigProductionVariant {
  ModelDataDownloadTimeoutInSeconds?: number;
  ModelName: string;
  VolumeSizeInGB?: number;
  EnableSSMAccess?: boolean;
  VariantName: string;
  ContainerStartupHealthCheckTimeoutInSeconds?: number;
  InitialInstanceCount?: number;
  ServerlessConfig?: SageMakerEndpointConfigServerlessConfig;
  InstanceType?: string;
  AcceleratorType?: string;
  InitialVariantWeight: number;
}
/**
 * Type definition for AWS::SageMaker::EndpointConfig.ServerlessConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-productionvariant-serverlessconfig.html | AWS::SageMaker::EndpointConfig.ServerlessConfig}
 */
export interface SageMakerEndpointConfigServerlessConfig {
  MaxConcurrency: number;
  MemorySizeInMB: number;
  ProvisionedConcurrency?: number;
}
/**
 * Type definition for AWS::SageMaker::FeatureGroup.DataCatalogConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-datacatalogconfig.html | AWS::SageMaker::FeatureGroup.DataCatalogConfig}
 */
export interface SageMakerFeatureGroupDataCatalogConfig {
  TableName: string;
  Database: string;
  Catalog: string;
}
/**
 * Type definition for AWS::SageMaker::FeatureGroup.FeatureDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-featuredefinition.html | AWS::SageMaker::FeatureGroup.FeatureDefinition}
 */
export interface SageMakerFeatureGroupFeatureDefinition {
  FeatureType: string;
  FeatureName: string;
}
/**
 * Type definition for AWS::SageMaker::FeatureGroup.OfflineStoreConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-offlinestoreconfig.html | AWS::SageMaker::FeatureGroup.OfflineStoreConfig}
 */
export interface SageMakerFeatureGroupOfflineStoreConfig {
  DataCatalogConfig?: SageMakerFeatureGroupDataCatalogConfig;
  S3StorageConfig: SageMakerFeatureGroupS3StorageConfig;
  DisableGlueTableCreation?: boolean;
  TableFormat?: string;
}
/**
 * Type definition for AWS::SageMaker::FeatureGroup.OnlineStoreConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-onlinestoreconfig.html | AWS::SageMaker::FeatureGroup.OnlineStoreConfig}
 */
export interface SageMakerFeatureGroupOnlineStoreConfig {
  EnableOnlineStore?: boolean;
  SecurityConfig?: SageMakerFeatureGroupOnlineStoreSecurityConfig;
}
/**
 * Type definition for AWS::SageMaker::FeatureGroup.OnlineStoreSecurityConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-onlinestoresecurityconfig.html | AWS::SageMaker::FeatureGroup.OnlineStoreSecurityConfig}
 */
export interface SageMakerFeatureGroupOnlineStoreSecurityConfig {
  KmsKeyId?: string;
}
/**
 * Type definition for AWS::SageMaker::FeatureGroup.S3StorageConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-s3storageconfig.html | AWS::SageMaker::FeatureGroup.S3StorageConfig}
 */
export interface SageMakerFeatureGroupS3StorageConfig {
  KmsKeyId?: string;
  S3Uri: string;
}
/**
 * Type definition for AWS::SageMaker::InferenceExperiment.CaptureContentTypeHeader
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-capturecontenttypeheader.html | AWS::SageMaker::InferenceExperiment.CaptureContentTypeHeader}
 */
export interface SageMakerInferenceExperimentCaptureContentTypeHeader {
  JsonContentTypes?: any[];
  CsvContentTypes?: any[];
}
/**
 * Type definition for AWS::SageMaker::InferenceExperiment.DataStorageConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-datastorageconfig.html | AWS::SageMaker::InferenceExperiment.DataStorageConfig}
 */
export interface SageMakerInferenceExperimentDataStorageConfig {
  Destination: string;
  ContentType?: SageMakerInferenceExperimentCaptureContentTypeHeader;
  KmsKey?: string;
}
/**
 * Type definition for AWS::SageMaker::InferenceExperiment.EndpointMetadata
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-endpointmetadata.html | AWS::SageMaker::InferenceExperiment.EndpointMetadata}
 */
export interface SageMakerInferenceExperimentEndpointMetadata {
  EndpointStatus?: string;
  EndpointName: string;
  EndpointConfigName?: string;
}
/**
 * Type definition for AWS::SageMaker::InferenceExperiment.InferenceExperimentSchedule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-inferenceexperimentschedule.html | AWS::SageMaker::InferenceExperiment.InferenceExperimentSchedule}
 */
export interface SageMakerInferenceExperimentInferenceExperimentSchedule {
  EndTime?: string;
  StartTime?: string;
}
/**
 * Type definition for AWS::SageMaker::InferenceExperiment.ModelInfrastructureConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-modelinfrastructureconfig.html | AWS::SageMaker::InferenceExperiment.ModelInfrastructureConfig}
 */
export interface SageMakerInferenceExperimentModelInfrastructureConfig {
  InfrastructureType: string;
  RealTimeInferenceConfig: SageMakerInferenceExperimentRealTimeInferenceConfig;
}
/**
 * Type definition for AWS::SageMaker::InferenceExperiment.ModelVariantConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-modelvariantconfig.html | AWS::SageMaker::InferenceExperiment.ModelVariantConfig}
 */
export interface SageMakerInferenceExperimentModelVariantConfig {
  ModelName: string;
  VariantName: string;
  InfrastructureConfig: SageMakerInferenceExperimentModelInfrastructureConfig;
}
/**
 * Type definition for AWS::SageMaker::InferenceExperiment.RealTimeInferenceConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-realtimeinferenceconfig.html | AWS::SageMaker::InferenceExperiment.RealTimeInferenceConfig}
 */
export interface SageMakerInferenceExperimentRealTimeInferenceConfig {
  InstanceCount: number;
  InstanceType: string;
}
/**
 * Type definition for AWS::SageMaker::InferenceExperiment.ShadowModeConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-shadowmodeconfig.html | AWS::SageMaker::InferenceExperiment.ShadowModeConfig}
 */
export interface SageMakerInferenceExperimentShadowModeConfig {
  SourceModelVariantName: string;
  ShadowModelVariants: any[];
}
/**
 * Type definition for AWS::SageMaker::InferenceExperiment.ShadowModelVariantConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-shadowmodelvariantconfig.html | AWS::SageMaker::InferenceExperiment.ShadowModelVariantConfig}
 */
export interface SageMakerInferenceExperimentShadowModelVariantConfig {
  ShadowModelVariantName: string;
  SamplingPercentage: number;
}
/**
 * Type definition for AWS::SageMaker::Model.ContainerDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-containerdefinition.html | AWS::SageMaker::Model.ContainerDefinition}
 */
export interface SageMakerModelContainerDefinition {
  ImageConfig?: SageMakerModelImageConfig;
  InferenceSpecificationName?: string;
  ContainerHostname?: string;
  ModelPackageName?: string;
  Mode?: string;
  Environment?: object;
  ModelDataUrl?: string;
  Image?: string;
  MultiModelConfig?: SageMakerModelMultiModelConfig;
}
/**
 * Type definition for AWS::SageMaker::Model.ImageConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-containerdefinition-imageconfig.html | AWS::SageMaker::Model.ImageConfig}
 */
export interface SageMakerModelImageConfig {
  RepositoryAuthConfig?: SageMakerModelRepositoryAuthConfig;
  RepositoryAccessMode: string;
}
/**
 * Type definition for AWS::SageMaker::Model.InferenceExecutionConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-inferenceexecutionconfig.html | AWS::SageMaker::Model.InferenceExecutionConfig}
 */
export interface SageMakerModelInferenceExecutionConfig {
  Mode: string;
}
/**
 * Type definition for AWS::SageMaker::Model.MultiModelConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-containerdefinition-multimodelconfig.html | AWS::SageMaker::Model.MultiModelConfig}
 */
export interface SageMakerModelMultiModelConfig {
  ModelCacheSetting?: string;
}
/**
 * Type definition for AWS::SageMaker::Model.RepositoryAuthConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-containerdefinition-imageconfig-repositoryauthconfig.html | AWS::SageMaker::Model.RepositoryAuthConfig}
 */
export interface SageMakerModelRepositoryAuthConfig {
  RepositoryCredentialsProviderArn: string;
}
/**
 * Type definition for AWS::SageMaker::Model.VpcConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-vpcconfig.html | AWS::SageMaker::Model.VpcConfig}
 */
export interface SageMakerModelVpcConfig {
  Subnets: any[];
  SecurityGroupIds: any[];
}
/**
 * Type definition for AWS::SageMaker::ModelBiasJobDefinition.BatchTransformInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-batchtransforminput.html | AWS::SageMaker::ModelBiasJobDefinition.BatchTransformInput}
 */
export interface SageMakerModelBiasJobDefinitionBatchTransformInput {
  DatasetFormat: SageMakerModelBiasJobDefinitionDatasetFormat;
  S3DataDistributionType?: string;
  StartTimeOffset?: string;
  EndTimeOffset?: string;
  ProbabilityThresholdAttribute?: number;
  InferenceAttribute?: string;
  DataCapturedDestinationS3Uri: string;
  S3InputMode?: string;
  LocalPath: string;
  ProbabilityAttribute?: string;
  FeaturesAttribute?: string;
}
/**
 * Type definition for AWS::SageMaker::ModelBiasJobDefinition.ClusterConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-clusterconfig.html | AWS::SageMaker::ModelBiasJobDefinition.ClusterConfig}
 */
export interface SageMakerModelBiasJobDefinitionClusterConfig {
  InstanceCount: number;
  VolumeSizeInGB: number;
  VolumeKmsKeyId?: string;
  InstanceType: string;
}
/**
 * Type definition for AWS::SageMaker::ModelBiasJobDefinition.ConstraintsResource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-constraintsresource.html | AWS::SageMaker::ModelBiasJobDefinition.ConstraintsResource}
 */
export interface SageMakerModelBiasJobDefinitionConstraintsResource {
  S3Uri?: string;
}
/**
 * Type definition for AWS::SageMaker::ModelBiasJobDefinition.Csv
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-csv.html | AWS::SageMaker::ModelBiasJobDefinition.Csv}
 */
export interface SageMakerModelBiasJobDefinitionCsv {
  Header?: boolean;
}
/**
 * Type definition for AWS::SageMaker::ModelBiasJobDefinition.DatasetFormat
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-datasetformat.html | AWS::SageMaker::ModelBiasJobDefinition.DatasetFormat}
 */
export interface SageMakerModelBiasJobDefinitionDatasetFormat {
  Parquet?: boolean;
  Csv?: SageMakerModelBiasJobDefinitionCsv;
  Json?: SageMakerModelBiasJobDefinitionJson;
}
/**
 * Type definition for AWS::SageMaker::ModelBiasJobDefinition.EndpointInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-endpointinput.html | AWS::SageMaker::ModelBiasJobDefinition.EndpointInput}
 */
export interface SageMakerModelBiasJobDefinitionEndpointInput {
  S3DataDistributionType?: string;
  StartTimeOffset?: string;
  EndTimeOffset?: string;
  ProbabilityThresholdAttribute?: number;
  EndpointName: string;
  InferenceAttribute?: string;
  S3InputMode?: string;
  LocalPath: string;
  ProbabilityAttribute?: string;
  FeaturesAttribute?: string;
}
/**
 * Type definition for AWS::SageMaker::ModelBiasJobDefinition.Json
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-json.html | AWS::SageMaker::ModelBiasJobDefinition.Json}
 */
export interface SageMakerModelBiasJobDefinitionJson {
  Line?: boolean;
}
/**
 * Type definition for AWS::SageMaker::ModelBiasJobDefinition.ModelBiasAppSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-modelbiasappspecification.html | AWS::SageMaker::ModelBiasJobDefinition.ModelBiasAppSpecification}
 */
export interface SageMakerModelBiasJobDefinitionModelBiasAppSpecification {
  ConfigUri: string;
  Environment?: Record<string, any>;
  ImageUri: string;
}
/**
 * Type definition for AWS::SageMaker::ModelBiasJobDefinition.ModelBiasBaselineConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-modelbiasbaselineconfig.html | AWS::SageMaker::ModelBiasJobDefinition.ModelBiasBaselineConfig}
 */
export interface SageMakerModelBiasJobDefinitionModelBiasBaselineConfig {
  ConstraintsResource?: SageMakerModelBiasJobDefinitionConstraintsResource;
  BaseliningJobName?: string;
}
/**
 * Type definition for AWS::SageMaker::ModelBiasJobDefinition.ModelBiasJobInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-modelbiasjobinput.html | AWS::SageMaker::ModelBiasJobDefinition.ModelBiasJobInput}
 */
export interface SageMakerModelBiasJobDefinitionModelBiasJobInput {
  GroundTruthS3Input: SageMakerModelBiasJobDefinitionMonitoringGroundTruthS3Input;
  BatchTransformInput?: SageMakerModelBiasJobDefinitionBatchTransformInput;
  EndpointInput?: SageMakerModelBiasJobDefinitionEndpointInput;
}
/**
 * Type definition for AWS::SageMaker::ModelBiasJobDefinition.MonitoringGroundTruthS3Input
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-monitoringgroundtruths3input.html | AWS::SageMaker::ModelBiasJobDefinition.MonitoringGroundTruthS3Input}
 */
export interface SageMakerModelBiasJobDefinitionMonitoringGroundTruthS3Input {
  S3Uri: string;
}
/**
 * Type definition for AWS::SageMaker::ModelBiasJobDefinition.MonitoringOutput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-monitoringoutput.html | AWS::SageMaker::ModelBiasJobDefinition.MonitoringOutput}
 */
export interface SageMakerModelBiasJobDefinitionMonitoringOutput {
  S3Output: SageMakerModelBiasJobDefinitionS3Output;
}
/**
 * Type definition for AWS::SageMaker::ModelBiasJobDefinition.MonitoringOutputConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-monitoringoutputconfig.html | AWS::SageMaker::ModelBiasJobDefinition.MonitoringOutputConfig}
 */
export interface SageMakerModelBiasJobDefinitionMonitoringOutputConfig {
  KmsKeyId?: string;
  MonitoringOutputs: any[];
}
/**
 * Type definition for AWS::SageMaker::ModelBiasJobDefinition.MonitoringResources
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-monitoringresources.html | AWS::SageMaker::ModelBiasJobDefinition.MonitoringResources}
 */
export interface SageMakerModelBiasJobDefinitionMonitoringResources {
  ClusterConfig: SageMakerModelBiasJobDefinitionClusterConfig;
}
/**
 * Type definition for AWS::SageMaker::ModelBiasJobDefinition.NetworkConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-networkconfig.html | AWS::SageMaker::ModelBiasJobDefinition.NetworkConfig}
 */
export interface SageMakerModelBiasJobDefinitionNetworkConfig {
  EnableNetworkIsolation?: boolean;
  EnableInterContainerTrafficEncryption?: boolean;
  VpcConfig?: SageMakerModelBiasJobDefinitionVpcConfig;
}
/**
 * Type definition for AWS::SageMaker::ModelBiasJobDefinition.S3Output
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-s3output.html | AWS::SageMaker::ModelBiasJobDefinition.S3Output}
 */
export interface SageMakerModelBiasJobDefinitionS3Output {
  S3Uri: string;
  LocalPath: string;
  S3UploadMode?: string;
}
/**
 * Type definition for AWS::SageMaker::ModelBiasJobDefinition.StoppingCondition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-stoppingcondition.html | AWS::SageMaker::ModelBiasJobDefinition.StoppingCondition}
 */
export interface SageMakerModelBiasJobDefinitionStoppingCondition {
  MaxRuntimeInSeconds: number;
}
/**
 * Type definition for AWS::SageMaker::ModelBiasJobDefinition.VpcConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-vpcconfig.html | AWS::SageMaker::ModelBiasJobDefinition.VpcConfig}
 */
export interface SageMakerModelBiasJobDefinitionVpcConfig {
  Subnets: any[];
  SecurityGroupIds: any[];
}
/**
 * Type definition for AWS::SageMaker::ModelCard.AdditionalInformation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-additionalinformation.html | AWS::SageMaker::ModelCard.AdditionalInformation}
 */
export interface SageMakerModelCardAdditionalInformation {
  EthicalConsiderations?: string;
  CaveatsAndRecommendations?: string;
  CustomDetails?: Record<string, any>;
}
/**
 * Type definition for AWS::SageMaker::ModelCard.BusinessDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-businessdetails.html | AWS::SageMaker::ModelCard.BusinessDetails}
 */
export interface SageMakerModelCardBusinessDetails {
  BusinessStakeholders?: string;
  LineOfBusiness?: string;
  BusinessProblem?: string;
}
/**
 * Type definition for AWS::SageMaker::ModelCard.Container
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-container.html | AWS::SageMaker::ModelCard.Container}
 */
export interface SageMakerModelCardContainer {
  NearestModelName?: string;
  ModelDataUrl?: string;
  Image: string;
}
/**
 * Type definition for AWS::SageMaker::ModelCard.Content
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-content.html | AWS::SageMaker::ModelCard.Content}
 */
export interface SageMakerModelCardContent {
  IntendedUses?: SageMakerModelCardIntendedUses;
  AdditionalInformation?: SageMakerModelCardAdditionalInformation;
  ModelOverview?: SageMakerModelCardModelOverview;
  TrainingDetails?: SageMakerModelCardTrainingDetails;
  EvaluationDetails?: any[];
  ModelPackageDetails?: SageMakerModelCardModelPackageDetails;
  BusinessDetails?: SageMakerModelCardBusinessDetails;
}
/**
 * Type definition for AWS::SageMaker::ModelCard.EvaluationDetail
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-evaluationdetail.html | AWS::SageMaker::ModelCard.EvaluationDetail}
 */
export interface SageMakerModelCardEvaluationDetail {
  Datasets?: any[];
  EvaluationObservation?: string;
  MetricGroups?: any[];
  Metadata?: Record<string, any>;
  EvaluationJobArn?: string;
  Name: string;
}
/**
 * Type definition for AWS::SageMaker::ModelCard.Function
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-function.html | AWS::SageMaker::ModelCard.Function}
 */
export interface SageMakerModelCardFunction {
  Condition?: string;
  Function?: string;
  Facet?: string;
}
/**
 * Type definition for AWS::SageMaker::ModelCard.InferenceEnvironment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-inferenceenvironment.html | AWS::SageMaker::ModelCard.InferenceEnvironment}
 */
export interface SageMakerModelCardInferenceEnvironment {
  ContainerImage?: any[];
}
/**
 * Type definition for AWS::SageMaker::ModelCard.InferenceSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-inferencespecification.html | AWS::SageMaker::ModelCard.InferenceSpecification}
 */
export interface SageMakerModelCardInferenceSpecification {
  Containers: any[];
}
/**
 * Type definition for AWS::SageMaker::ModelCard.IntendedUses
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-intendeduses.html | AWS::SageMaker::ModelCard.IntendedUses}
 */
export interface SageMakerModelCardIntendedUses {
  IntendedUses?: string;
  FactorsAffectingModelEfficiency?: string;
  PurposeOfModel?: string;
  RiskRating?: string;
  ExplanationsForRiskRating?: string;
}
/**
 * Type definition for AWS::SageMaker::ModelCard.MetricDataItems
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-metricdataitems.html | AWS::SageMaker::ModelCard.MetricDataItems}
 */
export interface SageMakerModelCardMetricDataItems {
  XAxisName?: any[];
  Type: string;
  Value: object;
  YAxisName?: any[];
  Notes?: string;
  Name: string;
}
/**
 * Type definition for AWS::SageMaker::ModelCard.MetricGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-metricgroup.html | AWS::SageMaker::ModelCard.MetricGroup}
 */
export interface SageMakerModelCardMetricGroup {
  Name: string;
  MetricData: any[];
}
/**
 * Type definition for AWS::SageMaker::ModelCard.ModelOverview
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-modeloverview.html | AWS::SageMaker::ModelCard.ModelOverview}
 */
export interface SageMakerModelCardModelOverview {
  ModelOwner?: string;
  ModelArtifact?: any[];
  AlgorithmType?: string;
  ModelName?: string;
  InferenceEnvironment?: SageMakerModelCardInferenceEnvironment;
  ProblemType?: string;
  ModelDescription?: string;
  ModelVersion?: number;
  ModelCreator?: string;
  ModelId?: string;
}
/**
 * Type definition for AWS::SageMaker::ModelCard.ModelPackageCreator
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-modelpackagecreator.html | AWS::SageMaker::ModelCard.ModelPackageCreator}
 */
export interface SageMakerModelCardModelPackageCreator {
  UserProfileName?: string;
}
/**
 * Type definition for AWS::SageMaker::ModelCard.ModelPackageDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-modelpackagedetails.html | AWS::SageMaker::ModelCard.ModelPackageDetails}
 */
export interface SageMakerModelCardModelPackageDetails {
  ModelPackageGroupName?: string;
  Task?: string;
  CreatedBy?: SageMakerModelCardModelPackageCreator;
  ApprovalDescription?: string;
  ModelApprovalStatus?: string;
  ModelPackageVersion?: number;
  ModelPackageDescription?: string;
  ModelPackageName?: string;
  ModelPackageStatus?: string;
  SourceAlgorithms?: any[];
  InferenceSpecification?: SageMakerModelCardInferenceSpecification;
  ModelPackageArn?: string;
  Domain?: string;
}
/**
 * Type definition for AWS::SageMaker::ModelCard.ObjectiveFunction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-objectivefunction.html | AWS::SageMaker::ModelCard.ObjectiveFunction}
 */
export interface SageMakerModelCardObjectiveFunction {
  Function?: SageMakerModelCardFunction;
  Notes?: string;
}
/**
 * Type definition for AWS::SageMaker::ModelCard.SecurityConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-securityconfig.html | AWS::SageMaker::ModelCard.SecurityConfig}
 */
export interface SageMakerModelCardSecurityConfig {
  KmsKeyId?: string;
}
/**
 * Type definition for AWS::SageMaker::ModelCard.SourceAlgorithm
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-sourcealgorithm.html | AWS::SageMaker::ModelCard.SourceAlgorithm}
 */
export interface SageMakerModelCardSourceAlgorithm {
  ModelDataUrl?: string;
  AlgorithmName: string;
}
/**
 * Type definition for AWS::SageMaker::ModelCard.TrainingDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-trainingdetails.html | AWS::SageMaker::ModelCard.TrainingDetails}
 */
export interface SageMakerModelCardTrainingDetails {
  ObjectiveFunction?: SageMakerModelCardObjectiveFunction;
  TrainingObservations?: string;
  TrainingJobDetails?: SageMakerModelCardTrainingJobDetails;
}
/**
 * Type definition for AWS::SageMaker::ModelCard.TrainingEnvironment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-trainingenvironment.html | AWS::SageMaker::ModelCard.TrainingEnvironment}
 */
export interface SageMakerModelCardTrainingEnvironment {
  ContainerImage?: any[];
}
/**
 * Type definition for AWS::SageMaker::ModelCard.TrainingHyperParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-traininghyperparameter.html | AWS::SageMaker::ModelCard.TrainingHyperParameter}
 */
export interface SageMakerModelCardTrainingHyperParameter {
  Value: string;
  Name: string;
}
/**
 * Type definition for AWS::SageMaker::ModelCard.TrainingJobDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-trainingjobdetails.html | AWS::SageMaker::ModelCard.TrainingJobDetails}
 */
export interface SageMakerModelCardTrainingJobDetails {
  TrainingMetrics?: any[];
  HyperParameters?: any[];
  TrainingArn?: string;
  UserProvidedTrainingMetrics?: any[];
  TrainingEnvironment?: SageMakerModelCardTrainingEnvironment;
  TrainingDatasets?: any[];
  UserProvidedHyperParameters?: any[];
}
/**
 * Type definition for AWS::SageMaker::ModelCard.TrainingMetric
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-trainingmetric.html | AWS::SageMaker::ModelCard.TrainingMetric}
 */
export interface SageMakerModelCardTrainingMetric {
  Value: number;
  Notes?: string;
  Name: string;
}
/**
 * Type definition for AWS::SageMaker::ModelCard.UserContext
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-usercontext.html | AWS::SageMaker::ModelCard.UserContext}
 */
export interface SageMakerModelCardUserContext {
  DomainId?: string;
  UserProfileArn?: string;
  UserProfileName?: string;
}
/**
 * Type definition for AWS::SageMaker::ModelExplainabilityJobDefinition.BatchTransformInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-batchtransforminput.html | AWS::SageMaker::ModelExplainabilityJobDefinition.BatchTransformInput}
 */
export interface SageMakerModelExplainabilityJobDefinitionBatchTransformInput {
  DatasetFormat: SageMakerModelExplainabilityJobDefinitionDatasetFormat;
  S3DataDistributionType?: string;
  InferenceAttribute?: string;
  DataCapturedDestinationS3Uri: string;
  S3InputMode?: string;
  LocalPath: string;
  ProbabilityAttribute?: string;
  FeaturesAttribute?: string;
}
/**
 * Type definition for AWS::SageMaker::ModelExplainabilityJobDefinition.ClusterConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-clusterconfig.html | AWS::SageMaker::ModelExplainabilityJobDefinition.ClusterConfig}
 */
export interface SageMakerModelExplainabilityJobDefinitionClusterConfig {
  InstanceCount: number;
  VolumeSizeInGB: number;
  VolumeKmsKeyId?: string;
  InstanceType: string;
}
/**
 * Type definition for AWS::SageMaker::ModelExplainabilityJobDefinition.ConstraintsResource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-constraintsresource.html | AWS::SageMaker::ModelExplainabilityJobDefinition.ConstraintsResource}
 */
export interface SageMakerModelExplainabilityJobDefinitionConstraintsResource {
  S3Uri?: string;
}
/**
 * Type definition for AWS::SageMaker::ModelExplainabilityJobDefinition.Csv
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-csv.html | AWS::SageMaker::ModelExplainabilityJobDefinition.Csv}
 */
export interface SageMakerModelExplainabilityJobDefinitionCsv {
  Header?: boolean;
}
/**
 * Type definition for AWS::SageMaker::ModelExplainabilityJobDefinition.DatasetFormat
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-datasetformat.html | AWS::SageMaker::ModelExplainabilityJobDefinition.DatasetFormat}
 */
export interface SageMakerModelExplainabilityJobDefinitionDatasetFormat {
  Parquet?: boolean;
  Csv?: SageMakerModelExplainabilityJobDefinitionCsv;
  Json?: SageMakerModelExplainabilityJobDefinitionJson;
}
/**
 * Type definition for AWS::SageMaker::ModelExplainabilityJobDefinition.EndpointInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-endpointinput.html | AWS::SageMaker::ModelExplainabilityJobDefinition.EndpointInput}
 */
export interface SageMakerModelExplainabilityJobDefinitionEndpointInput {
  S3DataDistributionType?: string;
  EndpointName: string;
  InferenceAttribute?: string;
  S3InputMode?: string;
  LocalPath: string;
  ProbabilityAttribute?: string;
  FeaturesAttribute?: string;
}
/**
 * Type definition for AWS::SageMaker::ModelExplainabilityJobDefinition.Json
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-json.html | AWS::SageMaker::ModelExplainabilityJobDefinition.Json}
 */
export interface SageMakerModelExplainabilityJobDefinitionJson {
  Line?: boolean;
}
/**
 * Type definition for AWS::SageMaker::ModelExplainabilityJobDefinition.ModelExplainabilityAppSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityappspecification.html | AWS::SageMaker::ModelExplainabilityJobDefinition.ModelExplainabilityAppSpecification}
 */
export interface SageMakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification {
  ConfigUri: string;
  Environment?: Record<string, any>;
  ImageUri: string;
}
/**
 * Type definition for AWS::SageMaker::ModelExplainabilityJobDefinition.ModelExplainabilityBaselineConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-modelexplainabilitybaselineconfig.html | AWS::SageMaker::ModelExplainabilityJobDefinition.ModelExplainabilityBaselineConfig}
 */
export interface SageMakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig {
  ConstraintsResource?: SageMakerModelExplainabilityJobDefinitionConstraintsResource;
  BaseliningJobName?: string;
}
/**
 * Type definition for AWS::SageMaker::ModelExplainabilityJobDefinition.ModelExplainabilityJobInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityjobinput.html | AWS::SageMaker::ModelExplainabilityJobDefinition.ModelExplainabilityJobInput}
 */
export interface SageMakerModelExplainabilityJobDefinitionModelExplainabilityJobInput {
  BatchTransformInput?: SageMakerModelExplainabilityJobDefinitionBatchTransformInput;
  EndpointInput?: SageMakerModelExplainabilityJobDefinitionEndpointInput;
}
/**
 * Type definition for AWS::SageMaker::ModelExplainabilityJobDefinition.MonitoringOutput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-monitoringoutput.html | AWS::SageMaker::ModelExplainabilityJobDefinition.MonitoringOutput}
 */
export interface SageMakerModelExplainabilityJobDefinitionMonitoringOutput {
  S3Output: SageMakerModelExplainabilityJobDefinitionS3Output;
}
/**
 * Type definition for AWS::SageMaker::ModelExplainabilityJobDefinition.MonitoringOutputConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-monitoringoutputconfig.html | AWS::SageMaker::ModelExplainabilityJobDefinition.MonitoringOutputConfig}
 */
export interface SageMakerModelExplainabilityJobDefinitionMonitoringOutputConfig {
  KmsKeyId?: string;
  MonitoringOutputs: any[];
}
/**
 * Type definition for AWS::SageMaker::ModelExplainabilityJobDefinition.MonitoringResources
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-monitoringresources.html | AWS::SageMaker::ModelExplainabilityJobDefinition.MonitoringResources}
 */
export interface SageMakerModelExplainabilityJobDefinitionMonitoringResources {
  ClusterConfig: SageMakerModelExplainabilityJobDefinitionClusterConfig;
}
/**
 * Type definition for AWS::SageMaker::ModelExplainabilityJobDefinition.NetworkConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-networkconfig.html | AWS::SageMaker::ModelExplainabilityJobDefinition.NetworkConfig}
 */
export interface SageMakerModelExplainabilityJobDefinitionNetworkConfig {
  EnableNetworkIsolation?: boolean;
  EnableInterContainerTrafficEncryption?: boolean;
  VpcConfig?: SageMakerModelExplainabilityJobDefinitionVpcConfig;
}
/**
 * Type definition for AWS::SageMaker::ModelExplainabilityJobDefinition.S3Output
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-s3output.html | AWS::SageMaker::ModelExplainabilityJobDefinition.S3Output}
 */
export interface SageMakerModelExplainabilityJobDefinitionS3Output {
  S3Uri: string;
  LocalPath: string;
  S3UploadMode?: string;
}
/**
 * Type definition for AWS::SageMaker::ModelExplainabilityJobDefinition.StoppingCondition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-stoppingcondition.html | AWS::SageMaker::ModelExplainabilityJobDefinition.StoppingCondition}
 */
export interface SageMakerModelExplainabilityJobDefinitionStoppingCondition {
  MaxRuntimeInSeconds: number;
}
/**
 * Type definition for AWS::SageMaker::ModelExplainabilityJobDefinition.VpcConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-vpcconfig.html | AWS::SageMaker::ModelExplainabilityJobDefinition.VpcConfig}
 */
export interface SageMakerModelExplainabilityJobDefinitionVpcConfig {
  Subnets: any[];
  SecurityGroupIds: any[];
}
/**
 * Type definition for AWS::SageMaker::ModelPackage.AdditionalInferenceSpecificationDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-additionalinferencespecificationdefinition.html | AWS::SageMaker::ModelPackage.AdditionalInferenceSpecificationDefinition}
 */
export interface SageMakerModelPackageAdditionalInferenceSpecificationDefinition {
  Description?: string;
  SupportedContentTypes?: any[];
  SupportedRealtimeInferenceInstanceTypes?: any[];
  Containers: any[];
  SupportedTransformInstanceTypes?: any[];
  Name: string;
  SupportedResponseMIMETypes?: any[];
}
/**
 * Type definition for AWS::SageMaker::ModelPackage.Bias
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-bias.html | AWS::SageMaker::ModelPackage.Bias}
 */
export interface SageMakerModelPackageBias {
  Report?: SageMakerModelPackageMetricsSource;
  PreTrainingReport?: SageMakerModelPackageMetricsSource;
  PostTrainingReport?: SageMakerModelPackageMetricsSource;
}
/**
 * Type definition for AWS::SageMaker::ModelPackage.DataSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-datasource.html | AWS::SageMaker::ModelPackage.DataSource}
 */
export interface SageMakerModelPackageDataSource {
  S3DataSource: SageMakerModelPackageS3DataSource;
}
/**
 * Type definition for AWS::SageMaker::ModelPackage.DriftCheckBaselines
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-driftcheckbaselines.html | AWS::SageMaker::ModelPackage.DriftCheckBaselines}
 */
export interface SageMakerModelPackageDriftCheckBaselines {
  ModelDataQuality?: SageMakerModelPackageDriftCheckModelDataQuality;
  Bias?: SageMakerModelPackageDriftCheckBias;
  ModelQuality?: SageMakerModelPackageDriftCheckModelQuality;
  Explainability?: SageMakerModelPackageDriftCheckExplainability;
}
/**
 * Type definition for AWS::SageMaker::ModelPackage.DriftCheckBias
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-driftcheckbias.html | AWS::SageMaker::ModelPackage.DriftCheckBias}
 */
export interface SageMakerModelPackageDriftCheckBias {
  PreTrainingConstraints?: SageMakerModelPackageMetricsSource;
  ConfigFile?: SageMakerModelPackageFileSource;
  PostTrainingConstraints?: SageMakerModelPackageMetricsSource;
}
/**
 * Type definition for AWS::SageMaker::ModelPackage.DriftCheckExplainability
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-driftcheckexplainability.html | AWS::SageMaker::ModelPackage.DriftCheckExplainability}
 */
export interface SageMakerModelPackageDriftCheckExplainability {
  Constraints?: SageMakerModelPackageMetricsSource;
  ConfigFile?: SageMakerModelPackageFileSource;
}
/**
 * Type definition for AWS::SageMaker::ModelPackage.DriftCheckModelDataQuality
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-driftcheckmodeldataquality.html | AWS::SageMaker::ModelPackage.DriftCheckModelDataQuality}
 */
export interface SageMakerModelPackageDriftCheckModelDataQuality {
  Constraints?: SageMakerModelPackageMetricsSource;
  Statistics?: SageMakerModelPackageMetricsSource;
}
/**
 * Type definition for AWS::SageMaker::ModelPackage.DriftCheckModelQuality
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-driftcheckmodelquality.html | AWS::SageMaker::ModelPackage.DriftCheckModelQuality}
 */
export interface SageMakerModelPackageDriftCheckModelQuality {
  Constraints?: SageMakerModelPackageMetricsSource;
  Statistics?: SageMakerModelPackageMetricsSource;
}
/**
 * Type definition for AWS::SageMaker::ModelPackage.Explainability
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-explainability.html | AWS::SageMaker::ModelPackage.Explainability}
 */
export interface SageMakerModelPackageExplainability {
  Report?: SageMakerModelPackageMetricsSource;
}
/**
 * Type definition for AWS::SageMaker::ModelPackage.FileSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-filesource.html | AWS::SageMaker::ModelPackage.FileSource}
 */
export interface SageMakerModelPackageFileSource {
  ContentType?: string;
  S3Uri: string;
  ContentDigest?: string;
}
/**
 * Type definition for AWS::SageMaker::ModelPackage.InferenceSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-inferencespecification.html | AWS::SageMaker::ModelPackage.InferenceSpecification}
 */
export interface SageMakerModelPackageInferenceSpecification {
  SupportedContentTypes: any[];
  SupportedRealtimeInferenceInstanceTypes?: any[];
  Containers: any[];
  SupportedTransformInstanceTypes?: any[];
  SupportedResponseMIMETypes: any[];
}
/**
 * Type definition for AWS::SageMaker::ModelPackage.MetadataProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-metadataproperties.html | AWS::SageMaker::ModelPackage.MetadataProperties}
 */
export interface SageMakerModelPackageMetadataProperties {
  GeneratedBy?: string;
  Repository?: string;
  CommitId?: string;
  ProjectId?: string;
}
/**
 * Type definition for AWS::SageMaker::ModelPackage.MetricsSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-metricssource.html | AWS::SageMaker::ModelPackage.MetricsSource}
 */
export interface SageMakerModelPackageMetricsSource {
  ContentType: string;
  S3Uri: string;
  ContentDigest?: string;
}
/**
 * Type definition for AWS::SageMaker::ModelPackage.ModelDataQuality
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modeldataquality.html | AWS::SageMaker::ModelPackage.ModelDataQuality}
 */
export interface SageMakerModelPackageModelDataQuality {
  Constraints?: SageMakerModelPackageMetricsSource;
  Statistics?: SageMakerModelPackageMetricsSource;
}
/**
 * Type definition for AWS::SageMaker::ModelPackage.ModelInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelinput.html | AWS::SageMaker::ModelPackage.ModelInput}
 */
export interface SageMakerModelPackageModelInput {
  DataInputConfig: string;
}
/**
 * Type definition for AWS::SageMaker::ModelPackage.ModelMetrics
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelmetrics.html | AWS::SageMaker::ModelPackage.ModelMetrics}
 */
export interface SageMakerModelPackageModelMetrics {
  ModelDataQuality?: SageMakerModelPackageModelDataQuality;
  Bias?: SageMakerModelPackageBias;
  ModelQuality?: SageMakerModelPackageModelQuality;
  Explainability?: SageMakerModelPackageExplainability;
}
/**
 * Type definition for AWS::SageMaker::ModelPackage.ModelPackageContainerDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelpackagecontainerdefinition.html | AWS::SageMaker::ModelPackage.ModelPackageContainerDefinition}
 */
export interface SageMakerModelPackageModelPackageContainerDefinition {
  ModelInput?: SageMakerModelPackageModelInput;
  NearestModelName?: string;
  ContainerHostname?: string;
  ImageDigest?: string;
  FrameworkVersion?: string;
  Environment?: Record<string, any>;
  ModelDataUrl?: string;
  Image: string;
  Framework?: string;
}
/**
 * Type definition for AWS::SageMaker::ModelPackage.ModelPackageStatusDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelpackagestatusdetails.html | AWS::SageMaker::ModelPackage.ModelPackageStatusDetails}
 */
export interface SageMakerModelPackageModelPackageStatusDetails {
  ValidationStatuses?: any[];
}
/**
 * Type definition for AWS::SageMaker::ModelPackage.ModelPackageStatusItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelpackagestatusitem.html | AWS::SageMaker::ModelPackage.ModelPackageStatusItem}
 */
export interface SageMakerModelPackageModelPackageStatusItem {
  Status: string;
  FailureReason?: string;
  Name: string;
}
/**
 * Type definition for AWS::SageMaker::ModelPackage.ModelQuality
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelquality.html | AWS::SageMaker::ModelPackage.ModelQuality}
 */
export interface SageMakerModelPackageModelQuality {
  Constraints?: SageMakerModelPackageMetricsSource;
  Statistics?: SageMakerModelPackageMetricsSource;
}
/**
 * Type definition for AWS::SageMaker::ModelPackage.S3DataSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-s3datasource.html | AWS::SageMaker::ModelPackage.S3DataSource}
 */
export interface SageMakerModelPackageS3DataSource {
  S3Uri: string;
  S3DataType: string;
}
/**
 * Type definition for AWS::SageMaker::ModelPackage.SourceAlgorithm
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-sourcealgorithm.html | AWS::SageMaker::ModelPackage.SourceAlgorithm}
 */
export interface SageMakerModelPackageSourceAlgorithm {
  ModelDataUrl?: string;
  AlgorithmName: string;
}
/**
 * Type definition for AWS::SageMaker::ModelPackage.SourceAlgorithmSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-sourcealgorithmspecification.html | AWS::SageMaker::ModelPackage.SourceAlgorithmSpecification}
 */
export interface SageMakerModelPackageSourceAlgorithmSpecification {
  SourceAlgorithms: any[];
}
/**
 * Type definition for AWS::SageMaker::ModelPackage.TransformInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-transforminput.html | AWS::SageMaker::ModelPackage.TransformInput}
 */
export interface SageMakerModelPackageTransformInput {
  ContentType?: string;
  SplitType?: string;
  CompressionType?: string;
  DataSource: SageMakerModelPackageDataSource;
}
/**
 * Type definition for AWS::SageMaker::ModelPackage.TransformJobDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-transformjobdefinition.html | AWS::SageMaker::ModelPackage.TransformJobDefinition}
 */
export interface SageMakerModelPackageTransformJobDefinition {
  TransformResources: SageMakerModelPackageTransformResources;
  MaxConcurrentTransforms?: number;
  MaxPayloadInMB?: number;
  TransformOutput: SageMakerModelPackageTransformOutput;
  Environment?: Record<string, any>;
  TransformInput: SageMakerModelPackageTransformInput;
  BatchStrategy?: string;
}
/**
 * Type definition for AWS::SageMaker::ModelPackage.TransformOutput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-transformoutput.html | AWS::SageMaker::ModelPackage.TransformOutput}
 */
export interface SageMakerModelPackageTransformOutput {
  AssembleWith?: string;
  Accept?: string;
  KmsKeyId?: string;
  S3OutputPath: string;
}
/**
 * Type definition for AWS::SageMaker::ModelPackage.TransformResources
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-transformresources.html | AWS::SageMaker::ModelPackage.TransformResources}
 */
export interface SageMakerModelPackageTransformResources {
  InstanceCount: number;
  VolumeKmsKeyId?: string;
  InstanceType: string;
}
/**
 * Type definition for AWS::SageMaker::ModelPackage.ValidationProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-validationprofile.html | AWS::SageMaker::ModelPackage.ValidationProfile}
 */
export interface SageMakerModelPackageValidationProfile {
  ProfileName: string;
  TransformJobDefinition: SageMakerModelPackageTransformJobDefinition;
}
/**
 * Type definition for AWS::SageMaker::ModelPackage.ValidationSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-validationspecification.html | AWS::SageMaker::ModelPackage.ValidationSpecification}
 */
export interface SageMakerModelPackageValidationSpecification {
  ValidationRole: string;
  ValidationProfiles: any[];
}
/**
 * Type definition for AWS::SageMaker::ModelQualityJobDefinition.BatchTransformInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-batchtransforminput.html | AWS::SageMaker::ModelQualityJobDefinition.BatchTransformInput}
 */
export interface SageMakerModelQualityJobDefinitionBatchTransformInput {
  DatasetFormat: SageMakerModelQualityJobDefinitionDatasetFormat;
  S3DataDistributionType?: string;
  StartTimeOffset?: string;
  EndTimeOffset?: string;
  ProbabilityThresholdAttribute?: number;
  InferenceAttribute?: string;
  DataCapturedDestinationS3Uri: string;
  S3InputMode?: string;
  LocalPath: string;
  ProbabilityAttribute?: string;
}
/**
 * Type definition for AWS::SageMaker::ModelQualityJobDefinition.ClusterConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-clusterconfig.html | AWS::SageMaker::ModelQualityJobDefinition.ClusterConfig}
 */
export interface SageMakerModelQualityJobDefinitionClusterConfig {
  InstanceCount: number;
  VolumeSizeInGB: number;
  VolumeKmsKeyId?: string;
  InstanceType: string;
}
/**
 * Type definition for AWS::SageMaker::ModelQualityJobDefinition.ConstraintsResource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-constraintsresource.html | AWS::SageMaker::ModelQualityJobDefinition.ConstraintsResource}
 */
export interface SageMakerModelQualityJobDefinitionConstraintsResource {
  S3Uri?: string;
}
/**
 * Type definition for AWS::SageMaker::ModelQualityJobDefinition.Csv
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-csv.html | AWS::SageMaker::ModelQualityJobDefinition.Csv}
 */
export interface SageMakerModelQualityJobDefinitionCsv {
  Header?: boolean;
}
/**
 * Type definition for AWS::SageMaker::ModelQualityJobDefinition.DatasetFormat
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-datasetformat.html | AWS::SageMaker::ModelQualityJobDefinition.DatasetFormat}
 */
export interface SageMakerModelQualityJobDefinitionDatasetFormat {
  Parquet?: boolean;
  Csv?: SageMakerModelQualityJobDefinitionCsv;
  Json?: SageMakerModelQualityJobDefinitionJson;
}
/**
 * Type definition for AWS::SageMaker::ModelQualityJobDefinition.EndpointInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-endpointinput.html | AWS::SageMaker::ModelQualityJobDefinition.EndpointInput}
 */
export interface SageMakerModelQualityJobDefinitionEndpointInput {
  S3DataDistributionType?: string;
  StartTimeOffset?: string;
  EndTimeOffset?: string;
  ProbabilityThresholdAttribute?: number;
  EndpointName: string;
  InferenceAttribute?: string;
  S3InputMode?: string;
  LocalPath: string;
  ProbabilityAttribute?: string;
}
/**
 * Type definition for AWS::SageMaker::ModelQualityJobDefinition.Json
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-json.html | AWS::SageMaker::ModelQualityJobDefinition.Json}
 */
export interface SageMakerModelQualityJobDefinitionJson {
  Line?: boolean;
}
/**
 * Type definition for AWS::SageMaker::ModelQualityJobDefinition.ModelQualityAppSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-modelqualityappspecification.html | AWS::SageMaker::ModelQualityJobDefinition.ModelQualityAppSpecification}
 */
export interface SageMakerModelQualityJobDefinitionModelQualityAppSpecification {
  ContainerEntrypoint?: any[];
  ProblemType: string;
  PostAnalyticsProcessorSourceUri?: string;
  RecordPreprocessorSourceUri?: string;
  Environment?: Record<string, any>;
  ImageUri: string;
  ContainerArguments?: any[];
}
/**
 * Type definition for AWS::SageMaker::ModelQualityJobDefinition.ModelQualityBaselineConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-modelqualitybaselineconfig.html | AWS::SageMaker::ModelQualityJobDefinition.ModelQualityBaselineConfig}
 */
export interface SageMakerModelQualityJobDefinitionModelQualityBaselineConfig {
  ConstraintsResource?: SageMakerModelQualityJobDefinitionConstraintsResource;
  BaseliningJobName?: string;
}
/**
 * Type definition for AWS::SageMaker::ModelQualityJobDefinition.ModelQualityJobInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-modelqualityjobinput.html | AWS::SageMaker::ModelQualityJobDefinition.ModelQualityJobInput}
 */
export interface SageMakerModelQualityJobDefinitionModelQualityJobInput {
  GroundTruthS3Input: SageMakerModelQualityJobDefinitionMonitoringGroundTruthS3Input;
  BatchTransformInput?: SageMakerModelQualityJobDefinitionBatchTransformInput;
  EndpointInput?: SageMakerModelQualityJobDefinitionEndpointInput;
}
/**
 * Type definition for AWS::SageMaker::ModelQualityJobDefinition.MonitoringGroundTruthS3Input
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-monitoringgroundtruths3input.html | AWS::SageMaker::ModelQualityJobDefinition.MonitoringGroundTruthS3Input}
 */
export interface SageMakerModelQualityJobDefinitionMonitoringGroundTruthS3Input {
  S3Uri: string;
}
/**
 * Type definition for AWS::SageMaker::ModelQualityJobDefinition.MonitoringOutput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-monitoringoutput.html | AWS::SageMaker::ModelQualityJobDefinition.MonitoringOutput}
 */
export interface SageMakerModelQualityJobDefinitionMonitoringOutput {
  S3Output: SageMakerModelQualityJobDefinitionS3Output;
}
/**
 * Type definition for AWS::SageMaker::ModelQualityJobDefinition.MonitoringOutputConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-monitoringoutputconfig.html | AWS::SageMaker::ModelQualityJobDefinition.MonitoringOutputConfig}
 */
export interface SageMakerModelQualityJobDefinitionMonitoringOutputConfig {
  KmsKeyId?: string;
  MonitoringOutputs: any[];
}
/**
 * Type definition for AWS::SageMaker::ModelQualityJobDefinition.MonitoringResources
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-monitoringresources.html | AWS::SageMaker::ModelQualityJobDefinition.MonitoringResources}
 */
export interface SageMakerModelQualityJobDefinitionMonitoringResources {
  ClusterConfig: SageMakerModelQualityJobDefinitionClusterConfig;
}
/**
 * Type definition for AWS::SageMaker::ModelQualityJobDefinition.NetworkConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-networkconfig.html | AWS::SageMaker::ModelQualityJobDefinition.NetworkConfig}
 */
export interface SageMakerModelQualityJobDefinitionNetworkConfig {
  EnableNetworkIsolation?: boolean;
  EnableInterContainerTrafficEncryption?: boolean;
  VpcConfig?: SageMakerModelQualityJobDefinitionVpcConfig;
}
/**
 * Type definition for AWS::SageMaker::ModelQualityJobDefinition.S3Output
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-s3output.html | AWS::SageMaker::ModelQualityJobDefinition.S3Output}
 */
export interface SageMakerModelQualityJobDefinitionS3Output {
  S3Uri: string;
  LocalPath: string;
  S3UploadMode?: string;
}
/**
 * Type definition for AWS::SageMaker::ModelQualityJobDefinition.StoppingCondition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-stoppingcondition.html | AWS::SageMaker::ModelQualityJobDefinition.StoppingCondition}
 */
export interface SageMakerModelQualityJobDefinitionStoppingCondition {
  MaxRuntimeInSeconds: number;
}
/**
 * Type definition for AWS::SageMaker::ModelQualityJobDefinition.VpcConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-vpcconfig.html | AWS::SageMaker::ModelQualityJobDefinition.VpcConfig}
 */
export interface SageMakerModelQualityJobDefinitionVpcConfig {
  Subnets: any[];
  SecurityGroupIds: any[];
}
/**
 * Type definition for AWS::SageMaker::MonitoringSchedule.BaselineConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-baselineconfig.html | AWS::SageMaker::MonitoringSchedule.BaselineConfig}
 */
export interface SageMakerMonitoringScheduleBaselineConfig {
  StatisticsResource?: SageMakerMonitoringScheduleStatisticsResource;
  ConstraintsResource?: SageMakerMonitoringScheduleConstraintsResource;
}
/**
 * Type definition for AWS::SageMaker::MonitoringSchedule.BatchTransformInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-batchtransforminput.html | AWS::SageMaker::MonitoringSchedule.BatchTransformInput}
 */
export interface SageMakerMonitoringScheduleBatchTransformInput {
  DatasetFormat: SageMakerMonitoringScheduleDatasetFormat;
  S3DataDistributionType?: string;
  DataCapturedDestinationS3Uri: string;
  S3InputMode?: string;
  LocalPath: string;
}
/**
 * Type definition for AWS::SageMaker::MonitoringSchedule.ClusterConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-clusterconfig.html | AWS::SageMaker::MonitoringSchedule.ClusterConfig}
 */
export interface SageMakerMonitoringScheduleClusterConfig {
  InstanceCount: number;
  VolumeSizeInGB: number;
  VolumeKmsKeyId?: string;
  InstanceType: string;
}
/**
 * Type definition for AWS::SageMaker::MonitoringSchedule.ConstraintsResource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-constraintsresource.html | AWS::SageMaker::MonitoringSchedule.ConstraintsResource}
 */
export interface SageMakerMonitoringScheduleConstraintsResource {
  S3Uri?: string;
}
/**
 * Type definition for AWS::SageMaker::MonitoringSchedule.Csv
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-csv.html | AWS::SageMaker::MonitoringSchedule.Csv}
 */
export interface SageMakerMonitoringScheduleCsv {
  Header?: boolean;
}
/**
 * Type definition for AWS::SageMaker::MonitoringSchedule.DatasetFormat
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-datasetformat.html | AWS::SageMaker::MonitoringSchedule.DatasetFormat}
 */
export interface SageMakerMonitoringScheduleDatasetFormat {
  Parquet?: boolean;
  Csv?: SageMakerMonitoringScheduleCsv;
  Json?: SageMakerMonitoringScheduleJson;
}
/**
 * Type definition for AWS::SageMaker::MonitoringSchedule.EndpointInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-endpointinput.html | AWS::SageMaker::MonitoringSchedule.EndpointInput}
 */
export interface SageMakerMonitoringScheduleEndpointInput {
  S3DataDistributionType?: string;
  EndpointName: string;
  S3InputMode?: string;
  LocalPath: string;
}
/**
 * Type definition for AWS::SageMaker::MonitoringSchedule.Json
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-json.html | AWS::SageMaker::MonitoringSchedule.Json}
 */
export interface SageMakerMonitoringScheduleJson {
  Line?: boolean;
}
/**
 * Type definition for AWS::SageMaker::MonitoringSchedule.MonitoringAppSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringappspecification.html | AWS::SageMaker::MonitoringSchedule.MonitoringAppSpecification}
 */
export interface SageMakerMonitoringScheduleMonitoringAppSpecification {
  ContainerEntrypoint?: any[];
  PostAnalyticsProcessorSourceUri?: string;
  RecordPreprocessorSourceUri?: string;
  ImageUri: string;
  ContainerArguments?: any[];
}
/**
 * Type definition for AWS::SageMaker::MonitoringSchedule.MonitoringExecutionSummary
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringexecutionsummary.html | AWS::SageMaker::MonitoringSchedule.MonitoringExecutionSummary}
 */
export interface SageMakerMonitoringScheduleMonitoringExecutionSummary {
  ScheduledTime: string;
  EndpointName?: string;
  MonitoringScheduleName: string;
  ProcessingJobArn?: string;
  FailureReason?: string;
  CreationTime: string;
  LastModifiedTime: string;
  MonitoringExecutionStatus: string;
}
/**
 * Type definition for AWS::SageMaker::MonitoringSchedule.MonitoringInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringinput.html | AWS::SageMaker::MonitoringSchedule.MonitoringInput}
 */
export interface SageMakerMonitoringScheduleMonitoringInput {
  BatchTransformInput?: SageMakerMonitoringScheduleBatchTransformInput;
  EndpointInput?: SageMakerMonitoringScheduleEndpointInput;
}
/**
 * Type definition for AWS::SageMaker::MonitoringSchedule.MonitoringJobDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringjobdefinition.html | AWS::SageMaker::MonitoringSchedule.MonitoringJobDefinition}
 */
export interface SageMakerMonitoringScheduleMonitoringJobDefinition {
  MonitoringInputs: any[];
  MonitoringResources: SageMakerMonitoringScheduleMonitoringResources;
  BaselineConfig?: SageMakerMonitoringScheduleBaselineConfig;
  StoppingCondition?: SageMakerMonitoringScheduleStoppingCondition;
  MonitoringAppSpecification: SageMakerMonitoringScheduleMonitoringAppSpecification;
  NetworkConfig?: SageMakerMonitoringScheduleNetworkConfig;
  Environment?: Record<string, any>;
  MonitoringOutputConfig: SageMakerMonitoringScheduleMonitoringOutputConfig;
  RoleArn: string;
}
/**
 * Type definition for AWS::SageMaker::MonitoringSchedule.MonitoringOutput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringoutput.html | AWS::SageMaker::MonitoringSchedule.MonitoringOutput}
 */
export interface SageMakerMonitoringScheduleMonitoringOutput {
  S3Output: SageMakerMonitoringScheduleS3Output;
}
/**
 * Type definition for AWS::SageMaker::MonitoringSchedule.MonitoringOutputConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringoutputconfig.html | AWS::SageMaker::MonitoringSchedule.MonitoringOutputConfig}
 */
export interface SageMakerMonitoringScheduleMonitoringOutputConfig {
  KmsKeyId?: string;
  MonitoringOutputs: any[];
}
/**
 * Type definition for AWS::SageMaker::MonitoringSchedule.MonitoringResources
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringresources.html | AWS::SageMaker::MonitoringSchedule.MonitoringResources}
 */
export interface SageMakerMonitoringScheduleMonitoringResources {
  ClusterConfig: SageMakerMonitoringScheduleClusterConfig;
}
/**
 * Type definition for AWS::SageMaker::MonitoringSchedule.MonitoringScheduleConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringscheduleconfig.html | AWS::SageMaker::MonitoringSchedule.MonitoringScheduleConfig}
 */
export interface SageMakerMonitoringScheduleMonitoringScheduleConfig {
  ScheduleConfig?: SageMakerMonitoringScheduleScheduleConfig;
  MonitoringJobDefinition?: SageMakerMonitoringScheduleMonitoringJobDefinition;
  MonitoringJobDefinitionName?: string;
  MonitoringType?: string;
}
/**
 * Type definition for AWS::SageMaker::MonitoringSchedule.NetworkConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-networkconfig.html | AWS::SageMaker::MonitoringSchedule.NetworkConfig}
 */
export interface SageMakerMonitoringScheduleNetworkConfig {
  EnableNetworkIsolation?: boolean;
  EnableInterContainerTrafficEncryption?: boolean;
  VpcConfig?: SageMakerMonitoringScheduleVpcConfig;
}
/**
 * Type definition for AWS::SageMaker::MonitoringSchedule.S3Output
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-s3output.html | AWS::SageMaker::MonitoringSchedule.S3Output}
 */
export interface SageMakerMonitoringScheduleS3Output {
  S3Uri: string;
  LocalPath: string;
  S3UploadMode?: string;
}
/**
 * Type definition for AWS::SageMaker::MonitoringSchedule.ScheduleConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-scheduleconfig.html | AWS::SageMaker::MonitoringSchedule.ScheduleConfig}
 */
export interface SageMakerMonitoringScheduleScheduleConfig {
  ScheduleExpression: string;
}
/**
 * Type definition for AWS::SageMaker::MonitoringSchedule.StatisticsResource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-statisticsresource.html | AWS::SageMaker::MonitoringSchedule.StatisticsResource}
 */
export interface SageMakerMonitoringScheduleStatisticsResource {
  S3Uri?: string;
}
/**
 * Type definition for AWS::SageMaker::MonitoringSchedule.StoppingCondition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-stoppingcondition.html | AWS::SageMaker::MonitoringSchedule.StoppingCondition}
 */
export interface SageMakerMonitoringScheduleStoppingCondition {
  MaxRuntimeInSeconds: number;
}
/**
 * Type definition for AWS::SageMaker::MonitoringSchedule.VpcConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-vpcconfig.html | AWS::SageMaker::MonitoringSchedule.VpcConfig}
 */
export interface SageMakerMonitoringScheduleVpcConfig {
  Subnets: any[];
  SecurityGroupIds: any[];
}
/**
 * Type definition for AWS::SageMaker::NotebookInstance.InstanceMetadataServiceConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-notebookinstance-instancemetadataserviceconfiguration.html | AWS::SageMaker::NotebookInstance.InstanceMetadataServiceConfiguration}
 */
export interface SageMakerNotebookInstanceInstanceMetadataServiceConfiguration {
  MinimumInstanceMetadataServiceVersion: string;
}
/**
 * Type definition for AWS::SageMaker::NotebookInstanceLifecycleConfig.NotebookInstanceLifecycleHook
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-notebookinstancelifecycleconfig-notebookinstancelifecyclehook.html | AWS::SageMaker::NotebookInstanceLifecycleConfig.NotebookInstanceLifecycleHook}
 */
export interface SageMakerNotebookInstanceLifecycleConfigNotebookInstanceLifecycleHook {
  Content?: string;
}
/**
 * Type definition for AWS::SageMaker::Pipeline.ParallelismConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-pipeline-parallelismconfiguration.html | AWS::SageMaker::Pipeline.ParallelismConfiguration}
 */
export interface SageMakerPipelineParallelismConfiguration {
  MaxParallelExecutionSteps: number;
}
/**
 * Type definition for AWS::SageMaker::Pipeline.PipelineDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-pipeline-pipelinedefinition.html | AWS::SageMaker::Pipeline.PipelineDefinition}
 */
export interface SageMakerPipelinePipelineDefinition {
  PipelineDefinitionBody?: string;
  PipelineDefinitionS3Location?: SageMakerPipelineS3Location;
}
/**
 * Type definition for AWS::SageMaker::Pipeline.S3Location
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-pipeline-s3location.html | AWS::SageMaker::Pipeline.S3Location}
 */
export interface SageMakerPipelineS3Location {
  Bucket: string;
  Version?: string;
  ETag?: string;
  Key: string;
}
/**
 * Type definition for AWS::SageMaker::Project.ProvisioningParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-project-provisioningparameter.html | AWS::SageMaker::Project.ProvisioningParameter}
 */
export interface SageMakerProjectProvisioningParameter {
  Value: string;
  Key: string;
}
/**
 * Type definition for AWS::SageMaker::Project.ServiceCatalogProvisionedProductDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-project-servicecatalogprovisionedproductdetails.html | AWS::SageMaker::Project.ServiceCatalogProvisionedProductDetails}
 */
export interface SageMakerProjectServiceCatalogProvisionedProductDetails {
  ProvisionedProductStatusMessage?: string;
  ProvisionedProductId?: string;
}
/**
 * Type definition for AWS::SageMaker::Project.ServiceCatalogProvisioningDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-project-servicecatalogprovisioningdetails.html | AWS::SageMaker::Project.ServiceCatalogProvisioningDetails}
 */
export interface SageMakerProjectServiceCatalogProvisioningDetails {
  PathId?: string;
  ProvisioningParameters?: any[];
  ProductId: string;
  ProvisioningArtifactId?: string;
}
/**
 * Type definition for AWS::SageMaker::Space.CustomImage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-customimage.html | AWS::SageMaker::Space.CustomImage}
 */
export interface SageMakerSpaceCustomImage {
  ImageName: string;
  AppImageConfigName: string;
  ImageVersionNumber?: number;
}
/**
 * Type definition for AWS::SageMaker::Space.JupyterServerAppSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-jupyterserverappsettings.html | AWS::SageMaker::Space.JupyterServerAppSettings}
 */
export interface SageMakerSpaceJupyterServerAppSettings {
  DefaultResourceSpec?: SageMakerSpaceResourceSpec;
}
/**
 * Type definition for AWS::SageMaker::Space.KernelGatewayAppSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-kernelgatewayappsettings.html | AWS::SageMaker::Space.KernelGatewayAppSettings}
 */
export interface SageMakerSpaceKernelGatewayAppSettings {
  CustomImages?: any[];
  DefaultResourceSpec?: SageMakerSpaceResourceSpec;
}
/**
 * Type definition for AWS::SageMaker::Space.ResourceSpec
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-resourcespec.html | AWS::SageMaker::Space.ResourceSpec}
 */
export interface SageMakerSpaceResourceSpec {
  SageMakerImageArn?: string;
  InstanceType?: string;
  SageMakerImageVersionArn?: string;
}
/**
 * Type definition for AWS::SageMaker::Space.SpaceSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-spacesettings.html | AWS::SageMaker::Space.SpaceSettings}
 */
export interface SageMakerSpaceSpaceSettings {
  KernelGatewayAppSettings?: SageMakerSpaceKernelGatewayAppSettings;
  JupyterServerAppSettings?: SageMakerSpaceJupyterServerAppSettings;
}
/**
 * Type definition for AWS::SageMaker::UserProfile.CustomImage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-customimage.html | AWS::SageMaker::UserProfile.CustomImage}
 */
export interface SageMakerUserProfileCustomImage {
  ImageName: string;
  AppImageConfigName: string;
  ImageVersionNumber?: number;
}
/**
 * Type definition for AWS::SageMaker::UserProfile.JupyterServerAppSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-jupyterserverappsettings.html | AWS::SageMaker::UserProfile.JupyterServerAppSettings}
 */
export interface SageMakerUserProfileJupyterServerAppSettings {
  DefaultResourceSpec?: SageMakerUserProfileResourceSpec;
}
/**
 * Type definition for AWS::SageMaker::UserProfile.KernelGatewayAppSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-kernelgatewayappsettings.html | AWS::SageMaker::UserProfile.KernelGatewayAppSettings}
 */
export interface SageMakerUserProfileKernelGatewayAppSettings {
  CustomImages?: any[];
  DefaultResourceSpec?: SageMakerUserProfileResourceSpec;
}
/**
 * Type definition for AWS::SageMaker::UserProfile.RStudioServerProAppSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-rstudioserverproappsettings.html | AWS::SageMaker::UserProfile.RStudioServerProAppSettings}
 */
export interface SageMakerUserProfileRStudioServerProAppSettings {
  AccessStatus?: string;
  UserGroup?: string;
}
/**
 * Type definition for AWS::SageMaker::UserProfile.ResourceSpec
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-resourcespec.html | AWS::SageMaker::UserProfile.ResourceSpec}
 */
export interface SageMakerUserProfileResourceSpec {
  SageMakerImageArn?: string;
  InstanceType?: string;
  SageMakerImageVersionArn?: string;
}
/**
 * Type definition for AWS::SageMaker::UserProfile.SharingSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-sharingsettings.html | AWS::SageMaker::UserProfile.SharingSettings}
 */
export interface SageMakerUserProfileSharingSettings {
  NotebookOutputOption?: string;
  S3KmsKeyId?: string;
  S3OutputPath?: string;
}
/**
 * Type definition for AWS::SageMaker::UserProfile.UserSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-usersettings.html | AWS::SageMaker::UserProfile.UserSettings}
 */
export interface SageMakerUserProfileUserSettings {
  SecurityGroups?: any[];
  KernelGatewayAppSettings?: SageMakerUserProfileKernelGatewayAppSettings;
  RStudioServerProAppSettings?: SageMakerUserProfileRStudioServerProAppSettings;
  JupyterServerAppSettings?: SageMakerUserProfileJupyterServerAppSettings;
  ExecutionRole?: string;
  SharingSettings?: SageMakerUserProfileSharingSettings;
}
/**
 * Type definition for AWS::SageMaker::Workteam.CognitoMemberDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-workteam-cognitomemberdefinition.html | AWS::SageMaker::Workteam.CognitoMemberDefinition}
 */
export interface SageMakerWorkteamCognitoMemberDefinition {
  CognitoUserPool: string;
  CognitoClientId: string;
  CognitoUserGroup: string;
}
/**
 * Type definition for AWS::SageMaker::Workteam.MemberDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-workteam-memberdefinition.html | AWS::SageMaker::Workteam.MemberDefinition}
 */
export interface SageMakerWorkteamMemberDefinition {
  OidcMemberDefinition?: SageMakerWorkteamOidcMemberDefinition;
  CognitoMemberDefinition?: SageMakerWorkteamCognitoMemberDefinition;
}
/**
 * Type definition for AWS::SageMaker::Workteam.NotificationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-workteam-notificationconfiguration.html | AWS::SageMaker::Workteam.NotificationConfiguration}
 */
export interface SageMakerWorkteamNotificationConfiguration {
  NotificationTopicArn: string;
}
/**
 * Type definition for AWS::SageMaker::Workteam.OidcMemberDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-workteam-oidcmemberdefinition.html | AWS::SageMaker::Workteam.OidcMemberDefinition}
 */
export interface SageMakerWorkteamOidcMemberDefinition {
  OidcGroups: any[];
}
/**
 * Type definition for AWS::SageMaker::App
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-app.html | AWS::SageMaker::App}
 */
export interface SageMakerAppProps {
  DomainId: string;
  ResourceSpec?: SageMakerAppResourceSpec;
  AppType: string;
  Tags?: Tag[];
  UserProfileName: string;
  AppName: string;
}
/**
 * Attributes type definition for AWS::SageMaker::App
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-app.html | AWS::SageMaker::App}
 */
export interface SageMakerAppAttribs {
  AppArn?: string;
}
/**
 * Resource class for AWS::SageMaker::App
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-app.html | AWS::SageMaker::App}
 */
export class SageMakerApp extends ResourceBase<
  "AWS::SageMaker::App",
  SageMakerAppProps,
  SageMakerAppAttribs
> {
  public static readonly Type = "AWS::SageMaker::App";
  public static readonly AttributeNames: readonly (keyof SageMakerAppAttribs)[] =
    ["AppArn"];
  constructor(
    logicalId: string,
    properties: SageMakerAppProps,
    options?: ResourceOptions,
  ) {
    super(
      SageMakerApp.Type,
      SageMakerApp.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SageMaker::AppImageConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-appimageconfig.html | AWS::SageMaker::AppImageConfig}
 */
export interface SageMakerAppImageConfigProps {
  KernelGatewayImageConfig?: SageMakerAppImageConfigKernelGatewayImageConfig;
  AppImageConfigName: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::SageMaker::AppImageConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-appimageconfig.html | AWS::SageMaker::AppImageConfig}
 */
export interface SageMakerAppImageConfigAttribs {
  AppImageConfigArn?: string;
}
/**
 * Resource class for AWS::SageMaker::AppImageConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-appimageconfig.html | AWS::SageMaker::AppImageConfig}
 */
export class SageMakerAppImageConfig extends ResourceBase<
  "AWS::SageMaker::AppImageConfig",
  SageMakerAppImageConfigProps,
  SageMakerAppImageConfigAttribs
> {
  public static readonly Type = "AWS::SageMaker::AppImageConfig";
  public static readonly AttributeNames: readonly (keyof SageMakerAppImageConfigAttribs)[] =
    ["AppImageConfigArn"];
  constructor(
    logicalId: string,
    properties: SageMakerAppImageConfigProps,
    options?: ResourceOptions,
  ) {
    super(
      SageMakerAppImageConfig.Type,
      SageMakerAppImageConfig.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SageMaker::CodeRepository
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-coderepository.html | AWS::SageMaker::CodeRepository}
 */
export interface SageMakerCodeRepositoryProps {
  CodeRepositoryName?: string;
  GitConfig: SageMakerCodeRepositoryGitConfig;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::SageMaker::CodeRepository
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-coderepository.html | AWS::SageMaker::CodeRepository}
 */
export interface SageMakerCodeRepositoryAttribs {
  CodeRepositoryName?: string;
}
/**
 * Resource class for AWS::SageMaker::CodeRepository
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-coderepository.html | AWS::SageMaker::CodeRepository}
 */
export class SageMakerCodeRepository extends ResourceBase<
  "AWS::SageMaker::CodeRepository",
  SageMakerCodeRepositoryProps,
  SageMakerCodeRepositoryAttribs
> {
  public static readonly Type = "AWS::SageMaker::CodeRepository";
  public static readonly AttributeNames: readonly (keyof SageMakerCodeRepositoryAttribs)[] =
    ["CodeRepositoryName"];
  constructor(
    logicalId: string,
    properties: SageMakerCodeRepositoryProps,
    options?: ResourceOptions,
  ) {
    super(
      SageMakerCodeRepository.Type,
      SageMakerCodeRepository.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SageMaker::DataQualityJobDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-dataqualityjobdefinition.html | AWS::SageMaker::DataQualityJobDefinition}
 */
export interface SageMakerDataQualityJobDefinitionProps {
  DataQualityJobInput: SageMakerDataQualityJobDefinitionDataQualityJobInput;
  DataQualityAppSpecification: SageMakerDataQualityJobDefinitionDataQualityAppSpecification;
  EndpointName?: string;
  StoppingCondition?: SageMakerDataQualityJobDefinitionStoppingCondition;
  JobDefinitionName?: string;
  JobResources: SageMakerDataQualityJobDefinitionMonitoringResources;
  NetworkConfig?: SageMakerDataQualityJobDefinitionNetworkConfig;
  DataQualityJobOutputConfig: SageMakerDataQualityJobDefinitionMonitoringOutputConfig;
  DataQualityBaselineConfig?: SageMakerDataQualityJobDefinitionDataQualityBaselineConfig;
  RoleArn: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::SageMaker::DataQualityJobDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-dataqualityjobdefinition.html | AWS::SageMaker::DataQualityJobDefinition}
 */
export interface SageMakerDataQualityJobDefinitionAttribs {
  JobDefinitionArn?: string;
  CreationTime?: string;
}
/**
 * Resource class for AWS::SageMaker::DataQualityJobDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-dataqualityjobdefinition.html | AWS::SageMaker::DataQualityJobDefinition}
 */
export class SageMakerDataQualityJobDefinition extends ResourceBase<
  "AWS::SageMaker::DataQualityJobDefinition",
  SageMakerDataQualityJobDefinitionProps,
  SageMakerDataQualityJobDefinitionAttribs
> {
  public static readonly Type = "AWS::SageMaker::DataQualityJobDefinition";
  public static readonly AttributeNames: readonly (keyof SageMakerDataQualityJobDefinitionAttribs)[] =
    ["JobDefinitionArn", "CreationTime"];
  constructor(
    logicalId: string,
    properties: SageMakerDataQualityJobDefinitionProps,
    options?: ResourceOptions,
  ) {
    super(
      SageMakerDataQualityJobDefinition.Type,
      SageMakerDataQualityJobDefinition.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SageMaker::Device
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-device.html | AWS::SageMaker::Device}
 */
export interface SageMakerDeviceProps {
  DeviceFleetName: string;
  Device?: SageMakerDeviceDevice;
  Tags?: Tag[];
}
/**
 * Resource class for AWS::SageMaker::Device
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-device.html | AWS::SageMaker::Device}
 */
export class SageMakerDevice extends ResourceBase<
  "AWS::SageMaker::Device",
  SageMakerDeviceProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::SageMaker::Device";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: SageMakerDeviceProps,
    options?: ResourceOptions,
  ) {
    super(
      SageMakerDevice.Type,
      SageMakerDevice.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SageMaker::DeviceFleet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-devicefleet.html | AWS::SageMaker::DeviceFleet}
 */
export interface SageMakerDeviceFleetProps {
  DeviceFleetName: string;
  Description?: string;
  OutputConfig: SageMakerDeviceFleetEdgeOutputConfig;
  RoleArn: string;
  Tags?: Tag[];
}
/**
 * Resource class for AWS::SageMaker::DeviceFleet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-devicefleet.html | AWS::SageMaker::DeviceFleet}
 */
export class SageMakerDeviceFleet extends ResourceBase<
  "AWS::SageMaker::DeviceFleet",
  SageMakerDeviceFleetProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::SageMaker::DeviceFleet";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: SageMakerDeviceFleetProps,
    options?: ResourceOptions,
  ) {
    super(
      SageMakerDeviceFleet.Type,
      SageMakerDeviceFleet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SageMaker::Domain
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html | AWS::SageMaker::Domain}
 */
export interface SageMakerDomainProps {
  AppNetworkAccessType?: string;
  DefaultSpaceSettings?: SageMakerDomainDefaultSpaceSettings;
  KmsKeyId?: string;
  VpcId: string;
  DomainName: string;
  AppSecurityGroupManagement?: string;
  DefaultUserSettings: SageMakerDomainUserSettings;
  SubnetIds: any[];
  AuthMode: string;
  Tags?: Tag[];
  DomainSettings?: SageMakerDomainDomainSettings;
}
/**
 * Attributes type definition for AWS::SageMaker::Domain
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html | AWS::SageMaker::Domain}
 */
export interface SageMakerDomainAttribs {
  HomeEfsFileSystemId?: string;
  DomainId?: string;
  SecurityGroupIdForDomainBoundary?: string;
  SingleSignOnManagedApplicationInstanceId?: string;
  DomainArn?: string;
  Url?: string;
}
/**
 * Resource class for AWS::SageMaker::Domain
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html | AWS::SageMaker::Domain}
 */
export class SageMakerDomain extends ResourceBase<
  "AWS::SageMaker::Domain",
  SageMakerDomainProps,
  SageMakerDomainAttribs
> {
  public static readonly Type = "AWS::SageMaker::Domain";
  public static readonly AttributeNames: readonly (keyof SageMakerDomainAttribs)[] =
    [
      "HomeEfsFileSystemId",
      "DomainId",
      "SecurityGroupIdForDomainBoundary",
      "SingleSignOnManagedApplicationInstanceId",
      "DomainArn",
      "Url",
    ];
  constructor(
    logicalId: string,
    properties: SageMakerDomainProps,
    options?: ResourceOptions,
  ) {
    super(
      SageMakerDomain.Type,
      SageMakerDomain.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SageMaker::Endpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpoint.html | AWS::SageMaker::Endpoint}
 */
export interface SageMakerEndpointProps {
  RetainAllVariantProperties?: boolean;
  EndpointName?: string;
  ExcludeRetainedVariantProperties?: any[];
  EndpointConfigName: string;
  DeploymentConfig?: SageMakerEndpointDeploymentConfig;
  RetainDeploymentConfig?: boolean;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::SageMaker::Endpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpoint.html | AWS::SageMaker::Endpoint}
 */
export interface SageMakerEndpointAttribs {
  EndpointName?: string;
}
/**
 * Resource class for AWS::SageMaker::Endpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpoint.html | AWS::SageMaker::Endpoint}
 */
export class SageMakerEndpoint extends ResourceBase<
  "AWS::SageMaker::Endpoint",
  SageMakerEndpointProps,
  SageMakerEndpointAttribs
> {
  public static readonly Type = "AWS::SageMaker::Endpoint";
  public static readonly AttributeNames: readonly (keyof SageMakerEndpointAttribs)[] =
    ["EndpointName"];
  constructor(
    logicalId: string,
    properties: SageMakerEndpointProps,
    options?: ResourceOptions,
  ) {
    super(
      SageMakerEndpoint.Type,
      SageMakerEndpoint.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SageMaker::EndpointConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html | AWS::SageMaker::EndpointConfig}
 */
export interface SageMakerEndpointConfigProps {
  ShadowProductionVariants?: any[];
  DataCaptureConfig?: SageMakerEndpointConfigDataCaptureConfig;
  ProductionVariants: any[];
  KmsKeyId?: string;
  AsyncInferenceConfig?: SageMakerEndpointConfigAsyncInferenceConfig;
  EndpointConfigName?: string;
  ExplainerConfig?: SageMakerEndpointConfigExplainerConfig;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::SageMaker::EndpointConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html | AWS::SageMaker::EndpointConfig}
 */
export interface SageMakerEndpointConfigAttribs {
  EndpointConfigName?: string;
}
/**
 * Resource class for AWS::SageMaker::EndpointConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html | AWS::SageMaker::EndpointConfig}
 */
export class SageMakerEndpointConfig extends ResourceBase<
  "AWS::SageMaker::EndpointConfig",
  SageMakerEndpointConfigProps,
  SageMakerEndpointConfigAttribs
> {
  public static readonly Type = "AWS::SageMaker::EndpointConfig";
  public static readonly AttributeNames: readonly (keyof SageMakerEndpointConfigAttribs)[] =
    ["EndpointConfigName"];
  constructor(
    logicalId: string,
    properties: SageMakerEndpointConfigProps,
    options?: ResourceOptions,
  ) {
    super(
      SageMakerEndpointConfig.Type,
      SageMakerEndpointConfig.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SageMaker::FeatureGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html | AWS::SageMaker::FeatureGroup}
 */
export interface SageMakerFeatureGroupProps {
  Description?: string;
  OfflineStoreConfig?: SageMakerFeatureGroupOfflineStoreConfig;
  FeatureDefinitions: any[];
  RecordIdentifierFeatureName: string;
  EventTimeFeatureName: string;
  FeatureGroupName: string;
  OnlineStoreConfig?: SageMakerFeatureGroupOnlineStoreConfig;
  RoleArn?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::SageMaker::FeatureGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html | AWS::SageMaker::FeatureGroup}
 */
export interface SageMakerFeatureGroupAttribs {
  FeatureGroupStatus?: string;
  CreationTime?: string;
}
/**
 * Resource class for AWS::SageMaker::FeatureGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html | AWS::SageMaker::FeatureGroup}
 */
export class SageMakerFeatureGroup extends ResourceBase<
  "AWS::SageMaker::FeatureGroup",
  SageMakerFeatureGroupProps,
  SageMakerFeatureGroupAttribs
> {
  public static readonly Type = "AWS::SageMaker::FeatureGroup";
  public static readonly AttributeNames: readonly (keyof SageMakerFeatureGroupAttribs)[] =
    ["FeatureGroupStatus", "CreationTime"];
  constructor(
    logicalId: string,
    properties: SageMakerFeatureGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      SageMakerFeatureGroup.Type,
      SageMakerFeatureGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SageMaker::Image
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-image.html | AWS::SageMaker::Image}
 */
export interface SageMakerImageProps {
  ImageName: string;
  ImageDisplayName?: string;
  ImageRoleArn: string;
  ImageDescription?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::SageMaker::Image
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-image.html | AWS::SageMaker::Image}
 */
export interface SageMakerImageAttribs {
  ImageArn?: string;
}
/**
 * Resource class for AWS::SageMaker::Image
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-image.html | AWS::SageMaker::Image}
 */
export class SageMakerImage extends ResourceBase<
  "AWS::SageMaker::Image",
  SageMakerImageProps,
  SageMakerImageAttribs
> {
  public static readonly Type = "AWS::SageMaker::Image";
  public static readonly AttributeNames: readonly (keyof SageMakerImageAttribs)[] =
    ["ImageArn"];
  constructor(
    logicalId: string,
    properties: SageMakerImageProps,
    options?: ResourceOptions,
  ) {
    super(
      SageMakerImage.Type,
      SageMakerImage.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SageMaker::ImageVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-imageversion.html | AWS::SageMaker::ImageVersion}
 */
export interface SageMakerImageVersionProps {
  ImageName: string;
  Horovod?: boolean;
  Processor?: string;
  JobType?: string;
  Alias?: string;
  ProgrammingLang?: string;
  VendorGuidance?: string;
  MLFramework?: string;
  Aliases?: any[];
  ReleaseNotes?: string;
  BaseImage: string;
}
/**
 * Attributes type definition for AWS::SageMaker::ImageVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-imageversion.html | AWS::SageMaker::ImageVersion}
 */
export interface SageMakerImageVersionAttribs {
  ImageVersionArn?: string;
  Version?: number;
  ContainerImage?: string;
  ImageArn?: string;
}
/**
 * Resource class for AWS::SageMaker::ImageVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-imageversion.html | AWS::SageMaker::ImageVersion}
 */
export class SageMakerImageVersion extends ResourceBase<
  "AWS::SageMaker::ImageVersion",
  SageMakerImageVersionProps,
  SageMakerImageVersionAttribs
> {
  public static readonly Type = "AWS::SageMaker::ImageVersion";
  public static readonly AttributeNames: readonly (keyof SageMakerImageVersionAttribs)[] =
    ["ImageVersionArn", "Version", "ContainerImage", "ImageArn"];
  constructor(
    logicalId: string,
    properties: SageMakerImageVersionProps,
    options?: ResourceOptions,
  ) {
    super(
      SageMakerImageVersion.Type,
      SageMakerImageVersion.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SageMaker::InferenceExperiment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferenceexperiment.html | AWS::SageMaker::InferenceExperiment}
 */
export interface SageMakerInferenceExperimentProps {
  DataStorageConfig?: SageMakerInferenceExperimentDataStorageConfig;
  Description?: string;
  StatusReason?: string;
  ModelVariants: any[];
  ShadowModeConfig?: SageMakerInferenceExperimentShadowModeConfig;
  RoleArn: string;
  Name: string;
  Type: string;
  EndpointName: string;
  DesiredState?: string;
  Schedule?: SageMakerInferenceExperimentInferenceExperimentSchedule;
  KmsKey?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::SageMaker::InferenceExperiment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferenceexperiment.html | AWS::SageMaker::InferenceExperiment}
 */
export interface SageMakerInferenceExperimentAttribs {
  Status?: string;
  "EndpointMetadata.EndpointConfigName"?: string;
  CreationTime?: string;
  LastModifiedTime?: string;
  "EndpointMetadata.EndpointName"?: string;
  Arn?: string;
  "EndpointMetadata.EndpointStatus"?: string;
  EndpointMetadata?: SageMakerInferenceExperimentEndpointMetadata;
}
/**
 * Resource class for AWS::SageMaker::InferenceExperiment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferenceexperiment.html | AWS::SageMaker::InferenceExperiment}
 */
export class SageMakerInferenceExperiment extends ResourceBase<
  "AWS::SageMaker::InferenceExperiment",
  SageMakerInferenceExperimentProps,
  SageMakerInferenceExperimentAttribs
> {
  public static readonly Type = "AWS::SageMaker::InferenceExperiment";
  public static readonly AttributeNames: readonly (keyof SageMakerInferenceExperimentAttribs)[] =
    [
      "Status",
      "EndpointMetadata.EndpointConfigName",
      "CreationTime",
      "LastModifiedTime",
      "EndpointMetadata.EndpointName",
      "Arn",
      "EndpointMetadata.EndpointStatus",
      "EndpointMetadata",
    ];
  constructor(
    logicalId: string,
    properties: SageMakerInferenceExperimentProps,
    options?: ResourceOptions,
  ) {
    super(
      SageMakerInferenceExperiment.Type,
      SageMakerInferenceExperiment.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SageMaker::Model
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-model.html | AWS::SageMaker::Model}
 */
export interface SageMakerModelProps {
  ExecutionRoleArn: string;
  EnableNetworkIsolation?: boolean;
  PrimaryContainer?: SageMakerModelContainerDefinition;
  ModelName?: string;
  VpcConfig?: SageMakerModelVpcConfig;
  Containers?: any[];
  InferenceExecutionConfig?: SageMakerModelInferenceExecutionConfig;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::SageMaker::Model
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-model.html | AWS::SageMaker::Model}
 */
export interface SageMakerModelAttribs {
  ModelName?: string;
}
/**
 * Resource class for AWS::SageMaker::Model
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-model.html | AWS::SageMaker::Model}
 */
export class SageMakerModel extends ResourceBase<
  "AWS::SageMaker::Model",
  SageMakerModelProps,
  SageMakerModelAttribs
> {
  public static readonly Type = "AWS::SageMaker::Model";
  public static readonly AttributeNames: readonly (keyof SageMakerModelAttribs)[] =
    ["ModelName"];
  constructor(
    logicalId: string,
    properties: SageMakerModelProps,
    options?: ResourceOptions,
  ) {
    super(
      SageMakerModel.Type,
      SageMakerModel.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SageMaker::ModelBiasJobDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelbiasjobdefinition.html | AWS::SageMaker::ModelBiasJobDefinition}
 */
export interface SageMakerModelBiasJobDefinitionProps {
  ModelBiasJobInput: SageMakerModelBiasJobDefinitionModelBiasJobInput;
  ModelBiasJobOutputConfig: SageMakerModelBiasJobDefinitionMonitoringOutputConfig;
  EndpointName?: string;
  StoppingCondition?: SageMakerModelBiasJobDefinitionStoppingCondition;
  JobDefinitionName?: string;
  JobResources: SageMakerModelBiasJobDefinitionMonitoringResources;
  NetworkConfig?: SageMakerModelBiasJobDefinitionNetworkConfig;
  ModelBiasBaselineConfig?: SageMakerModelBiasJobDefinitionModelBiasBaselineConfig;
  ModelBiasAppSpecification: SageMakerModelBiasJobDefinitionModelBiasAppSpecification;
  RoleArn: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::SageMaker::ModelBiasJobDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelbiasjobdefinition.html | AWS::SageMaker::ModelBiasJobDefinition}
 */
export interface SageMakerModelBiasJobDefinitionAttribs {
  JobDefinitionArn?: string;
  CreationTime?: string;
}
/**
 * Resource class for AWS::SageMaker::ModelBiasJobDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelbiasjobdefinition.html | AWS::SageMaker::ModelBiasJobDefinition}
 */
export class SageMakerModelBiasJobDefinition extends ResourceBase<
  "AWS::SageMaker::ModelBiasJobDefinition",
  SageMakerModelBiasJobDefinitionProps,
  SageMakerModelBiasJobDefinitionAttribs
> {
  public static readonly Type = "AWS::SageMaker::ModelBiasJobDefinition";
  public static readonly AttributeNames: readonly (keyof SageMakerModelBiasJobDefinitionAttribs)[] =
    ["JobDefinitionArn", "CreationTime"];
  constructor(
    logicalId: string,
    properties: SageMakerModelBiasJobDefinitionProps,
    options?: ResourceOptions,
  ) {
    super(
      SageMakerModelBiasJobDefinition.Type,
      SageMakerModelBiasJobDefinition.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SageMaker::ModelCard
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html | AWS::SageMaker::ModelCard}
 */
export interface SageMakerModelCardProps {
  LastModifiedBy?: SageMakerModelCardUserContext;
  ModelCardName: string;
  ModelCardStatus: string;
  CreatedBy?: SageMakerModelCardUserContext;
  SecurityConfig?: SageMakerModelCardSecurityConfig;
  Content: SageMakerModelCardContent;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::SageMaker::ModelCard
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html | AWS::SageMaker::ModelCard}
 */
export interface SageMakerModelCardAttribs {
  "LastModifiedBy.UserProfileArn"?: string;
  "CreatedBy.DomainId"?: string;
  ModelCardArn?: string;
  "CreatedBy.UserProfileName"?: string;
  CreationTime?: string;
  LastModifiedTime?: string;
  "LastModifiedBy.DomainId"?: string;
  ModelCardVersion?: number;
  ModelCardProcessingStatus?: string;
  "LastModifiedBy.UserProfileName"?: string;
  "CreatedBy.UserProfileArn"?: string;
}
/**
 * Resource class for AWS::SageMaker::ModelCard
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html | AWS::SageMaker::ModelCard}
 */
export class SageMakerModelCard extends ResourceBase<
  "AWS::SageMaker::ModelCard",
  SageMakerModelCardProps,
  SageMakerModelCardAttribs
> {
  public static readonly Type = "AWS::SageMaker::ModelCard";
  public static readonly AttributeNames: readonly (keyof SageMakerModelCardAttribs)[] =
    [
      "LastModifiedBy.UserProfileArn",
      "CreatedBy.DomainId",
      "ModelCardArn",
      "CreatedBy.UserProfileName",
      "CreationTime",
      "LastModifiedTime",
      "LastModifiedBy.DomainId",
      "ModelCardVersion",
      "ModelCardProcessingStatus",
      "LastModifiedBy.UserProfileName",
      "CreatedBy.UserProfileArn",
    ];
  constructor(
    logicalId: string,
    properties: SageMakerModelCardProps,
    options?: ResourceOptions,
  ) {
    super(
      SageMakerModelCard.Type,
      SageMakerModelCard.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SageMaker::ModelExplainabilityJobDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html | AWS::SageMaker::ModelExplainabilityJobDefinition}
 */
export interface SageMakerModelExplainabilityJobDefinitionProps {
  ModelExplainabilityJobOutputConfig: SageMakerModelExplainabilityJobDefinitionMonitoringOutputConfig;
  EndpointName?: string;
  StoppingCondition?: SageMakerModelExplainabilityJobDefinitionStoppingCondition;
  ModelExplainabilityBaselineConfig?: SageMakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig;
  JobDefinitionName?: string;
  JobResources: SageMakerModelExplainabilityJobDefinitionMonitoringResources;
  NetworkConfig?: SageMakerModelExplainabilityJobDefinitionNetworkConfig;
  RoleArn: string;
  ModelExplainabilityJobInput: SageMakerModelExplainabilityJobDefinitionModelExplainabilityJobInput;
  Tags?: Tag[];
  ModelExplainabilityAppSpecification: SageMakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification;
}
/**
 * Attributes type definition for AWS::SageMaker::ModelExplainabilityJobDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html | AWS::SageMaker::ModelExplainabilityJobDefinition}
 */
export interface SageMakerModelExplainabilityJobDefinitionAttribs {
  JobDefinitionArn?: string;
  CreationTime?: string;
}
/**
 * Resource class for AWS::SageMaker::ModelExplainabilityJobDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html | AWS::SageMaker::ModelExplainabilityJobDefinition}
 */
export class SageMakerModelExplainabilityJobDefinition extends ResourceBase<
  "AWS::SageMaker::ModelExplainabilityJobDefinition",
  SageMakerModelExplainabilityJobDefinitionProps,
  SageMakerModelExplainabilityJobDefinitionAttribs
> {
  public static readonly Type =
    "AWS::SageMaker::ModelExplainabilityJobDefinition";
  public static readonly AttributeNames: readonly (keyof SageMakerModelExplainabilityJobDefinitionAttribs)[] =
    ["JobDefinitionArn", "CreationTime"];
  constructor(
    logicalId: string,
    properties: SageMakerModelExplainabilityJobDefinitionProps,
    options?: ResourceOptions,
  ) {
    super(
      SageMakerModelExplainabilityJobDefinition.Type,
      SageMakerModelExplainabilityJobDefinition.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SageMaker::ModelPackage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html | AWS::SageMaker::ModelPackage}
 */
export interface SageMakerModelPackageProps {
  DriftCheckBaselines?: SageMakerModelPackageDriftCheckBaselines;
  ModelPackageGroupName?: string;
  ModelMetrics?: SageMakerModelPackageModelMetrics;
  Task?: string;
  CustomerMetadataProperties?: Record<string, any>;
  ApprovalDescription?: string;
  ModelApprovalStatus?: string;
  ModelPackageVersion?: number;
  MetadataProperties?: SageMakerModelPackageMetadataProperties;
  ValidationSpecification?: SageMakerModelPackageValidationSpecification;
  SourceAlgorithmSpecification?: SageMakerModelPackageSourceAlgorithmSpecification;
  ModelPackageStatusDetails?: SageMakerModelPackageModelPackageStatusDetails;
  SkipModelValidation?: string;
  ModelPackageDescription?: string;
  AdditionalInferenceSpecificationsToAdd?: any[];
  ModelPackageName?: string;
  InferenceSpecification?: SageMakerModelPackageInferenceSpecification;
  SamplePayloadUrl?: string;
  LastModifiedTime?: string;
  ClientToken?: string;
  Domain?: string;
  Tags?: Tag[];
  CertifyForMarketplace?: boolean;
  AdditionalInferenceSpecifications?: any[];
}
/**
 * Attributes type definition for AWS::SageMaker::ModelPackage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html | AWS::SageMaker::ModelPackage}
 */
export interface SageMakerModelPackageAttribs {
  ModelPackageStatus?: string;
  CreationTime?: string;
  ModelPackageArn?: string;
}
/**
 * Resource class for AWS::SageMaker::ModelPackage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html | AWS::SageMaker::ModelPackage}
 */
export class SageMakerModelPackage extends ResourceBase<
  "AWS::SageMaker::ModelPackage",
  SageMakerModelPackageProps,
  SageMakerModelPackageAttribs
> {
  public static readonly Type = "AWS::SageMaker::ModelPackage";
  public static readonly AttributeNames: readonly (keyof SageMakerModelPackageAttribs)[] =
    ["ModelPackageStatus", "CreationTime", "ModelPackageArn"];
  constructor(
    logicalId: string,
    properties: SageMakerModelPackageProps,
    options?: ResourceOptions,
  ) {
    super(
      SageMakerModelPackage.Type,
      SageMakerModelPackage.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SageMaker::ModelPackageGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackagegroup.html | AWS::SageMaker::ModelPackageGroup}
 */
export interface SageMakerModelPackageGroupProps {
  ModelPackageGroupName: string;
  ModelPackageGroupDescription?: string;
  ModelPackageGroupPolicy?: object;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::SageMaker::ModelPackageGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackagegroup.html | AWS::SageMaker::ModelPackageGroup}
 */
export interface SageMakerModelPackageGroupAttribs {
  ModelPackageGroupArn?: string;
  CreationTime?: string;
  ModelPackageGroupStatus?: string;
}
/**
 * Resource class for AWS::SageMaker::ModelPackageGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackagegroup.html | AWS::SageMaker::ModelPackageGroup}
 */
export class SageMakerModelPackageGroup extends ResourceBase<
  "AWS::SageMaker::ModelPackageGroup",
  SageMakerModelPackageGroupProps,
  SageMakerModelPackageGroupAttribs
> {
  public static readonly Type = "AWS::SageMaker::ModelPackageGroup";
  public static readonly AttributeNames: readonly (keyof SageMakerModelPackageGroupAttribs)[] =
    ["ModelPackageGroupArn", "CreationTime", "ModelPackageGroupStatus"];
  constructor(
    logicalId: string,
    properties: SageMakerModelPackageGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      SageMakerModelPackageGroup.Type,
      SageMakerModelPackageGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SageMaker::ModelQualityJobDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelqualityjobdefinition.html | AWS::SageMaker::ModelQualityJobDefinition}
 */
export interface SageMakerModelQualityJobDefinitionProps {
  ModelQualityAppSpecification: SageMakerModelQualityJobDefinitionModelQualityAppSpecification;
  EndpointName?: string;
  StoppingCondition?: SageMakerModelQualityJobDefinitionStoppingCondition;
  ModelQualityBaselineConfig?: SageMakerModelQualityJobDefinitionModelQualityBaselineConfig;
  JobDefinitionName?: string;
  ModelQualityJobInput: SageMakerModelQualityJobDefinitionModelQualityJobInput;
  JobResources: SageMakerModelQualityJobDefinitionMonitoringResources;
  NetworkConfig?: SageMakerModelQualityJobDefinitionNetworkConfig;
  ModelQualityJobOutputConfig: SageMakerModelQualityJobDefinitionMonitoringOutputConfig;
  RoleArn: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::SageMaker::ModelQualityJobDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelqualityjobdefinition.html | AWS::SageMaker::ModelQualityJobDefinition}
 */
export interface SageMakerModelQualityJobDefinitionAttribs {
  JobDefinitionArn?: string;
  CreationTime?: string;
}
/**
 * Resource class for AWS::SageMaker::ModelQualityJobDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelqualityjobdefinition.html | AWS::SageMaker::ModelQualityJobDefinition}
 */
export class SageMakerModelQualityJobDefinition extends ResourceBase<
  "AWS::SageMaker::ModelQualityJobDefinition",
  SageMakerModelQualityJobDefinitionProps,
  SageMakerModelQualityJobDefinitionAttribs
> {
  public static readonly Type = "AWS::SageMaker::ModelQualityJobDefinition";
  public static readonly AttributeNames: readonly (keyof SageMakerModelQualityJobDefinitionAttribs)[] =
    ["JobDefinitionArn", "CreationTime"];
  constructor(
    logicalId: string,
    properties: SageMakerModelQualityJobDefinitionProps,
    options?: ResourceOptions,
  ) {
    super(
      SageMakerModelQualityJobDefinition.Type,
      SageMakerModelQualityJobDefinition.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SageMaker::MonitoringSchedule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-monitoringschedule.html | AWS::SageMaker::MonitoringSchedule}
 */
export interface SageMakerMonitoringScheduleProps {
  MonitoringScheduleStatus?: string;
  MonitoringScheduleConfig: SageMakerMonitoringScheduleMonitoringScheduleConfig;
  MonitoringScheduleName: string;
  EndpointName?: string;
  FailureReason?: string;
  LastMonitoringExecutionSummary?: SageMakerMonitoringScheduleMonitoringExecutionSummary;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::SageMaker::MonitoringSchedule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-monitoringschedule.html | AWS::SageMaker::MonitoringSchedule}
 */
export interface SageMakerMonitoringScheduleAttribs {
  MonitoringScheduleArn?: string;
  CreationTime?: string;
  LastModifiedTime?: string;
}
/**
 * Resource class for AWS::SageMaker::MonitoringSchedule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-monitoringschedule.html | AWS::SageMaker::MonitoringSchedule}
 */
export class SageMakerMonitoringSchedule extends ResourceBase<
  "AWS::SageMaker::MonitoringSchedule",
  SageMakerMonitoringScheduleProps,
  SageMakerMonitoringScheduleAttribs
> {
  public static readonly Type = "AWS::SageMaker::MonitoringSchedule";
  public static readonly AttributeNames: readonly (keyof SageMakerMonitoringScheduleAttribs)[] =
    ["MonitoringScheduleArn", "CreationTime", "LastModifiedTime"];
  constructor(
    logicalId: string,
    properties: SageMakerMonitoringScheduleProps,
    options?: ResourceOptions,
  ) {
    super(
      SageMakerMonitoringSchedule.Type,
      SageMakerMonitoringSchedule.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SageMaker::NotebookInstance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstance.html | AWS::SageMaker::NotebookInstance}
 */
export interface SageMakerNotebookInstanceProps {
  KmsKeyId?: string;
  VolumeSizeInGB?: number;
  AdditionalCodeRepositories?: any[];
  DefaultCodeRepository?: string;
  DirectInternetAccess?: string;
  PlatformIdentifier?: string;
  AcceleratorTypes?: any[];
  SubnetId?: string;
  SecurityGroupIds?: any[];
  RoleArn: string;
  InstanceMetadataServiceConfiguration?: SageMakerNotebookInstanceInstanceMetadataServiceConfiguration;
  RootAccess?: string;
  NotebookInstanceName?: string;
  InstanceType: string;
  LifecycleConfigName?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::SageMaker::NotebookInstance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstance.html | AWS::SageMaker::NotebookInstance}
 */
export interface SageMakerNotebookInstanceAttribs {
  NotebookInstanceName?: string;
}
/**
 * Resource class for AWS::SageMaker::NotebookInstance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstance.html | AWS::SageMaker::NotebookInstance}
 */
export class SageMakerNotebookInstance extends ResourceBase<
  "AWS::SageMaker::NotebookInstance",
  SageMakerNotebookInstanceProps,
  SageMakerNotebookInstanceAttribs
> {
  public static readonly Type = "AWS::SageMaker::NotebookInstance";
  public static readonly AttributeNames: readonly (keyof SageMakerNotebookInstanceAttribs)[] =
    ["NotebookInstanceName"];
  constructor(
    logicalId: string,
    properties: SageMakerNotebookInstanceProps,
    options?: ResourceOptions,
  ) {
    super(
      SageMakerNotebookInstance.Type,
      SageMakerNotebookInstance.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SageMaker::NotebookInstanceLifecycleConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstancelifecycleconfig.html | AWS::SageMaker::NotebookInstanceLifecycleConfig}
 */
export interface SageMakerNotebookInstanceLifecycleConfigProps {
  OnStart?: any[];
  NotebookInstanceLifecycleConfigName?: string;
  OnCreate?: any[];
}
/**
 * Attributes type definition for AWS::SageMaker::NotebookInstanceLifecycleConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstancelifecycleconfig.html | AWS::SageMaker::NotebookInstanceLifecycleConfig}
 */
export interface SageMakerNotebookInstanceLifecycleConfigAttribs {
  NotebookInstanceLifecycleConfigName?: string;
}
/**
 * Resource class for AWS::SageMaker::NotebookInstanceLifecycleConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstancelifecycleconfig.html | AWS::SageMaker::NotebookInstanceLifecycleConfig}
 */
export class SageMakerNotebookInstanceLifecycleConfig extends ResourceBase<
  "AWS::SageMaker::NotebookInstanceLifecycleConfig",
  SageMakerNotebookInstanceLifecycleConfigProps,
  SageMakerNotebookInstanceLifecycleConfigAttribs
> {
  public static readonly Type =
    "AWS::SageMaker::NotebookInstanceLifecycleConfig";
  public static readonly AttributeNames: readonly (keyof SageMakerNotebookInstanceLifecycleConfigAttribs)[] =
    ["NotebookInstanceLifecycleConfigName"];
  constructor(
    logicalId: string,
    properties: SageMakerNotebookInstanceLifecycleConfigProps,
    options?: ResourceOptions,
  ) {
    super(
      SageMakerNotebookInstanceLifecycleConfig.Type,
      SageMakerNotebookInstanceLifecycleConfig.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SageMaker::Pipeline
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html | AWS::SageMaker::Pipeline}
 */
export interface SageMakerPipelineProps {
  PipelineName: string;
  ParallelismConfiguration?: SageMakerPipelineParallelismConfiguration;
  PipelineDescription?: string;
  PipelineDisplayName?: string;
  PipelineDefinition: SageMakerPipelinePipelineDefinition;
  RoleArn: string;
  Tags?: Tag[];
}
/**
 * Resource class for AWS::SageMaker::Pipeline
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html | AWS::SageMaker::Pipeline}
 */
export class SageMakerPipeline extends ResourceBase<
  "AWS::SageMaker::Pipeline",
  SageMakerPipelineProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::SageMaker::Pipeline";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: SageMakerPipelineProps,
    options?: ResourceOptions,
  ) {
    super(
      SageMakerPipeline.Type,
      SageMakerPipeline.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SageMaker::Project
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-project.html | AWS::SageMaker::Project}
 */
export interface SageMakerProjectProps {
  ProjectName: string;
  ServiceCatalogProvisionedProductDetails?: SageMakerProjectServiceCatalogProvisionedProductDetails;
  ServiceCatalogProvisioningDetails: SageMakerProjectServiceCatalogProvisioningDetails;
  ProjectDescription?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::SageMaker::Project
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-project.html | AWS::SageMaker::Project}
 */
export interface SageMakerProjectAttribs {
  ProjectArn?: string;
  ProjectStatus?: string;
  ProjectId?: string;
  CreationTime?: string;
}
/**
 * Resource class for AWS::SageMaker::Project
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-project.html | AWS::SageMaker::Project}
 */
export class SageMakerProject extends ResourceBase<
  "AWS::SageMaker::Project",
  SageMakerProjectProps,
  SageMakerProjectAttribs
> {
  public static readonly Type = "AWS::SageMaker::Project";
  public static readonly AttributeNames: readonly (keyof SageMakerProjectAttribs)[] =
    ["ProjectArn", "ProjectStatus", "ProjectId", "CreationTime"];
  constructor(
    logicalId: string,
    properties: SageMakerProjectProps,
    options?: ResourceOptions,
  ) {
    super(
      SageMakerProject.Type,
      SageMakerProject.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SageMaker::Space
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html | AWS::SageMaker::Space}
 */
export interface SageMakerSpaceProps {
  DomainId: string;
  SpaceName: string;
  SpaceSettings?: SageMakerSpaceSpaceSettings;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::SageMaker::Space
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html | AWS::SageMaker::Space}
 */
export interface SageMakerSpaceAttribs {
  SpaceArn?: string;
}
/**
 * Resource class for AWS::SageMaker::Space
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html | AWS::SageMaker::Space}
 */
export class SageMakerSpace extends ResourceBase<
  "AWS::SageMaker::Space",
  SageMakerSpaceProps,
  SageMakerSpaceAttribs
> {
  public static readonly Type = "AWS::SageMaker::Space";
  public static readonly AttributeNames: readonly (keyof SageMakerSpaceAttribs)[] =
    ["SpaceArn"];
  constructor(
    logicalId: string,
    properties: SageMakerSpaceProps,
    options?: ResourceOptions,
  ) {
    super(
      SageMakerSpace.Type,
      SageMakerSpace.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SageMaker::UserProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html | AWS::SageMaker::UserProfile}
 */
export interface SageMakerUserProfileProps {
  DomainId: string;
  SingleSignOnUserValue?: string;
  UserSettings?: SageMakerUserProfileUserSettings;
  SingleSignOnUserIdentifier?: string;
  UserProfileName: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::SageMaker::UserProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html | AWS::SageMaker::UserProfile}
 */
export interface SageMakerUserProfileAttribs {
  UserProfileArn?: string;
}
/**
 * Resource class for AWS::SageMaker::UserProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html | AWS::SageMaker::UserProfile}
 */
export class SageMakerUserProfile extends ResourceBase<
  "AWS::SageMaker::UserProfile",
  SageMakerUserProfileProps,
  SageMakerUserProfileAttribs
> {
  public static readonly Type = "AWS::SageMaker::UserProfile";
  public static readonly AttributeNames: readonly (keyof SageMakerUserProfileAttribs)[] =
    ["UserProfileArn"];
  constructor(
    logicalId: string,
    properties: SageMakerUserProfileProps,
    options?: ResourceOptions,
  ) {
    super(
      SageMakerUserProfile.Type,
      SageMakerUserProfile.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SageMaker::Workteam
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-workteam.html | AWS::SageMaker::Workteam}
 */
export interface SageMakerWorkteamProps {
  Description?: string;
  NotificationConfiguration?: SageMakerWorkteamNotificationConfiguration;
  WorkteamName?: string;
  MemberDefinitions?: any[];
  WorkforceName?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::SageMaker::Workteam
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-workteam.html | AWS::SageMaker::Workteam}
 */
export interface SageMakerWorkteamAttribs {
  WorkteamName?: string;
}
/**
 * Resource class for AWS::SageMaker::Workteam
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-workteam.html | AWS::SageMaker::Workteam}
 */
export class SageMakerWorkteam extends ResourceBase<
  "AWS::SageMaker::Workteam",
  SageMakerWorkteamProps,
  SageMakerWorkteamAttribs
> {
  public static readonly Type = "AWS::SageMaker::Workteam";
  public static readonly AttributeNames: readonly (keyof SageMakerWorkteamAttribs)[] =
    ["WorkteamName"];
  constructor(
    logicalId: string,
    properties: SageMakerWorkteamProps,
    options?: ResourceOptions,
  ) {
    super(
      SageMakerWorkteam.Type,
      SageMakerWorkteam.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
