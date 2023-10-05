import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::ECS::CapacityProvider.AutoScalingGroupProvider
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-capacityprovider-autoscalinggroupprovider.html | AWS::ECS::CapacityProvider.AutoScalingGroupProvider}
 */
export interface ECSCapacityProviderAutoScalingGroupProvider {
  ManagedScaling?: ECSCapacityProviderManagedScaling;
  AutoScalingGroupArn: string;
  ManagedTerminationProtection?: string;
}
/**
 * Type definition for AWS::ECS::CapacityProvider.ManagedScaling
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-capacityprovider-managedscaling.html | AWS::ECS::CapacityProvider.ManagedScaling}
 */
export interface ECSCapacityProviderManagedScaling {
  Status?: string;
  MinimumScalingStepSize?: number;
  InstanceWarmupPeriod?: number;
  TargetCapacity?: number;
  MaximumScalingStepSize?: number;
}
/**
 * Type definition for AWS::ECS::Cluster.CapacityProviderStrategyItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-capacityproviderstrategyitem.html | AWS::ECS::Cluster.CapacityProviderStrategyItem}
 */
export interface ECSClusterCapacityProviderStrategyItem {
  CapacityProvider?: string;
  Weight?: number;
  Base?: number;
}
/**
 * Type definition for AWS::ECS::Cluster.ClusterConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-clusterconfiguration.html | AWS::ECS::Cluster.ClusterConfiguration}
 */
export interface ECSClusterClusterConfiguration {
  ExecuteCommandConfiguration?: ECSClusterExecuteCommandConfiguration;
}
/**
 * Type definition for AWS::ECS::Cluster.ClusterSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-clustersettings.html | AWS::ECS::Cluster.ClusterSettings}
 */
export interface ECSClusterClusterSettings {
  Value?: string;
  Name?: string;
}
/**
 * Type definition for AWS::ECS::Cluster.ExecuteCommandConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-executecommandconfiguration.html | AWS::ECS::Cluster.ExecuteCommandConfiguration}
 */
export interface ECSClusterExecuteCommandConfiguration {
  Logging?: string;
  KmsKeyId?: string;
  LogConfiguration?: ECSClusterExecuteCommandLogConfiguration;
}
/**
 * Type definition for AWS::ECS::Cluster.ExecuteCommandLogConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-executecommandlogconfiguration.html | AWS::ECS::Cluster.ExecuteCommandLogConfiguration}
 */
export interface ECSClusterExecuteCommandLogConfiguration {
  S3EncryptionEnabled?: boolean;
  CloudWatchEncryptionEnabled?: boolean;
  CloudWatchLogGroupName?: string;
  S3KeyPrefix?: string;
  S3BucketName?: string;
}
/**
 * Type definition for AWS::ECS::Cluster.ServiceConnectDefaults
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-serviceconnectdefaults.html | AWS::ECS::Cluster.ServiceConnectDefaults}
 */
export interface ECSClusterServiceConnectDefaults {
  Namespace?: string;
}
/**
 * Type definition for AWS::ECS::ClusterCapacityProviderAssociations.CapacityProviderStrategy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-clustercapacityproviderassociations-capacityproviderstrategy.html | AWS::ECS::ClusterCapacityProviderAssociations.CapacityProviderStrategy}
 */
export interface ECSClusterCapacityProviderAssociationsCapacityProviderStrategy {
  CapacityProvider: string;
  Base?: number;
  Weight?: number;
}
/**
 * Type definition for AWS::ECS::Service.AwsVpcConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-awsvpcconfiguration.html | AWS::ECS::Service.AwsVpcConfiguration}
 */
export interface ECSServiceAwsVpcConfiguration {
  SecurityGroups?: any[];
  Subnets?: any[];
  AssignPublicIp?: string;
}
/**
 * Type definition for AWS::ECS::Service.CapacityProviderStrategyItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-capacityproviderstrategyitem.html | AWS::ECS::Service.CapacityProviderStrategyItem}
 */
export interface ECSServiceCapacityProviderStrategyItem {
  CapacityProvider?: string;
  Base?: number;
  Weight?: number;
}
/**
 * Type definition for AWS::ECS::Service.DeploymentAlarms
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-deploymentalarms.html | AWS::ECS::Service.DeploymentAlarms}
 */
export interface ECSServiceDeploymentAlarms {
  AlarmNames: any[];
  Enable: boolean;
  Rollback: boolean;
}
/**
 * Type definition for AWS::ECS::Service.DeploymentCircuitBreaker
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-deploymentcircuitbreaker.html | AWS::ECS::Service.DeploymentCircuitBreaker}
 */
export interface ECSServiceDeploymentCircuitBreaker {
  Enable: boolean;
  Rollback: boolean;
}
/**
 * Type definition for AWS::ECS::Service.DeploymentConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-deploymentconfiguration.html | AWS::ECS::Service.DeploymentConfiguration}
 */
export interface ECSServiceDeploymentConfiguration {
  Alarms?: ECSServiceDeploymentAlarms;
  DeploymentCircuitBreaker?: ECSServiceDeploymentCircuitBreaker;
  MaximumPercent?: number;
  MinimumHealthyPercent?: number;
}
/**
 * Type definition for AWS::ECS::Service.DeploymentController
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-deploymentcontroller.html | AWS::ECS::Service.DeploymentController}
 */
export interface ECSServiceDeploymentController {
  Type?: string;
}
/**
 * Type definition for AWS::ECS::Service.LoadBalancer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-loadbalancer.html | AWS::ECS::Service.LoadBalancer}
 */
export interface ECSServiceLoadBalancer {
  TargetGroupArn?: string;
  LoadBalancerName?: string;
  ContainerName?: string;
  ContainerPort?: number;
}
/**
 * Type definition for AWS::ECS::Service.LogConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-logconfiguration.html | AWS::ECS::Service.LogConfiguration}
 */
export interface ECSServiceLogConfiguration {
  SecretOptions?: any[];
  Options?: Record<string, any>;
  LogDriver?: string;
}
/**
 * Type definition for AWS::ECS::Service.NetworkConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-networkconfiguration.html | AWS::ECS::Service.NetworkConfiguration}
 */
export interface ECSServiceNetworkConfiguration {
  AwsvpcConfiguration?: ECSServiceAwsVpcConfiguration;
}
/**
 * Type definition for AWS::ECS::Service.PlacementConstraint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-placementconstraint.html | AWS::ECS::Service.PlacementConstraint}
 */
export interface ECSServicePlacementConstraint {
  Type: string;
  Expression?: string;
}
/**
 * Type definition for AWS::ECS::Service.PlacementStrategy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-placementstrategy.html | AWS::ECS::Service.PlacementStrategy}
 */
export interface ECSServicePlacementStrategy {
  Field?: string;
  Type: string;
}
/**
 * Type definition for AWS::ECS::Service.Secret
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-secret.html | AWS::ECS::Service.Secret}
 */
export interface ECSServiceSecret {
  ValueFrom: string;
  Name: string;
}
/**
 * Type definition for AWS::ECS::Service.ServiceConnectClientAlias
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceconnectclientalias.html | AWS::ECS::Service.ServiceConnectClientAlias}
 */
export interface ECSServiceServiceConnectClientAlias {
  DnsName?: string;
  Port: number;
}
/**
 * Type definition for AWS::ECS::Service.ServiceConnectConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceconnectconfiguration.html | AWS::ECS::Service.ServiceConnectConfiguration}
 */
export interface ECSServiceServiceConnectConfiguration {
  Services?: any[];
  Enabled: boolean;
  LogConfiguration?: ECSServiceLogConfiguration;
  Namespace?: string;
}
/**
 * Type definition for AWS::ECS::Service.ServiceConnectService
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceconnectservice.html | AWS::ECS::Service.ServiceConnectService}
 */
export interface ECSServiceServiceConnectService {
  IngressPortOverride?: number;
  ClientAliases?: any[];
  DiscoveryName?: string;
  PortName: string;
}
/**
 * Type definition for AWS::ECS::Service.ServiceRegistry
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceregistry.html | AWS::ECS::Service.ServiceRegistry}
 */
export interface ECSServiceServiceRegistry {
  ContainerName?: string;
  Port?: number;
  ContainerPort?: number;
  RegistryArn?: string;
}
/**
 * Type definition for AWS::ECS::TaskDefinition.AuthorizationConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-authorizationconfig.html | AWS::ECS::TaskDefinition.AuthorizationConfig}
 */
export interface ECSTaskDefinitionAuthorizationConfig {
  IAM?: string;
  AccessPointId?: string;
}
/**
 * Type definition for AWS::ECS::TaskDefinition.ContainerDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html | AWS::ECS::TaskDefinition.ContainerDefinition}
 */
export interface ECSTaskDefinitionContainerDefinition {
  User?: string;
  Secrets?: any[];
  Memory?: number;
  Privileged?: boolean;
  HealthCheck?: ECSTaskDefinitionHealthCheck;
  StartTimeout?: number;
  VolumesFrom?: any[];
  Cpu?: number;
  EntryPoint?: any[];
  DnsServers?: any[];
  ReadonlyRootFilesystem?: boolean;
  Image: string;
  Essential?: boolean;
  LogConfiguration?: ECSTaskDefinitionLogConfiguration;
  ResourceRequirements?: any[];
  EnvironmentFiles?: any[];
  Name: string;
  FirelensConfiguration?: ECSTaskDefinitionFirelensConfiguration;
  DockerSecurityOptions?: any[];
  SystemControls?: any[];
  Interactive?: boolean;
  DnsSearchDomains?: any[];
  Ulimits?: any[];
  StopTimeout?: number;
  WorkingDirectory?: string;
  MemoryReservation?: number;
  RepositoryCredentials?: ECSTaskDefinitionRepositoryCredentials;
  ExtraHosts?: any[];
  Hostname?: string;
  LinuxParameters?: ECSTaskDefinitionLinuxParameters;
  DisableNetworking?: boolean;
  PseudoTerminal?: boolean;
  MountPoints?: any[];
  DependsOn?: any[];
  DockerLabels?: Record<string, any>;
  PortMappings?: any[];
  Command?: any[];
  Environment?: any[];
  Links?: any[];
}
/**
 * Type definition for AWS::ECS::TaskDefinition.ContainerDependency
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdependency.html | AWS::ECS::TaskDefinition.ContainerDependency}
 */
export interface ECSTaskDefinitionContainerDependency {
  Condition?: string;
  ContainerName?: string;
}
/**
 * Type definition for AWS::ECS::TaskDefinition.Device
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-device.html | AWS::ECS::TaskDefinition.Device}
 */
export interface ECSTaskDefinitionDevice {
  HostPath?: string;
  Permissions?: any[];
  ContainerPath?: string;
}
/**
 * Type definition for AWS::ECS::TaskDefinition.DockerVolumeConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-dockervolumeconfiguration.html | AWS::ECS::TaskDefinition.DockerVolumeConfiguration}
 */
export interface ECSTaskDefinitionDockerVolumeConfiguration {
  DriverOpts?: Record<string, any>;
  Scope?: string;
  Autoprovision?: boolean;
  Driver?: string;
  Labels?: Record<string, any>;
}
/**
 * Type definition for AWS::ECS::TaskDefinition.EFSVolumeConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-efsvolumeconfiguration.html | AWS::ECS::TaskDefinition.EFSVolumeConfiguration}
 */
export interface ECSTaskDefinitionEFSVolumeConfiguration {
  FilesystemId: string;
  TransitEncryption?: string;
  AuthorizationConfig?: ECSTaskDefinitionAuthorizationConfig;
  RootDirectory?: string;
  TransitEncryptionPort?: number;
}
/**
 * Type definition for AWS::ECS::TaskDefinition.EnvironmentFile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-environmentfile.html | AWS::ECS::TaskDefinition.EnvironmentFile}
 */
export interface ECSTaskDefinitionEnvironmentFile {
  Type?: string;
  Value?: string;
}
/**
 * Type definition for AWS::ECS::TaskDefinition.EphemeralStorage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-ephemeralstorage.html | AWS::ECS::TaskDefinition.EphemeralStorage}
 */
export interface ECSTaskDefinitionEphemeralStorage {
  SizeInGiB?: number;
}
/**
 * Type definition for AWS::ECS::TaskDefinition.FirelensConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-firelensconfiguration.html | AWS::ECS::TaskDefinition.FirelensConfiguration}
 */
export interface ECSTaskDefinitionFirelensConfiguration {
  Options?: Record<string, any>;
  Type?: string;
}
/**
 * Type definition for AWS::ECS::TaskDefinition.HealthCheck
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-healthcheck.html | AWS::ECS::TaskDefinition.HealthCheck}
 */
export interface ECSTaskDefinitionHealthCheck {
  Command?: any[];
  Timeout?: number;
  Retries?: number;
  Interval?: number;
  StartPeriod?: number;
}
/**
 * Type definition for AWS::ECS::TaskDefinition.HostEntry
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-hostentry.html | AWS::ECS::TaskDefinition.HostEntry}
 */
export interface ECSTaskDefinitionHostEntry {
  Hostname?: string;
  IpAddress?: string;
}
/**
 * Type definition for AWS::ECS::TaskDefinition.HostVolumeProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-hostvolumeproperties.html | AWS::ECS::TaskDefinition.HostVolumeProperties}
 */
export interface ECSTaskDefinitionHostVolumeProperties {
  SourcePath?: string;
}
/**
 * Type definition for AWS::ECS::TaskDefinition.InferenceAccelerator
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-inferenceaccelerator.html | AWS::ECS::TaskDefinition.InferenceAccelerator}
 */
export interface ECSTaskDefinitionInferenceAccelerator {
  DeviceType?: string;
  DeviceName?: string;
}
/**
 * Type definition for AWS::ECS::TaskDefinition.KernelCapabilities
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-kernelcapabilities.html | AWS::ECS::TaskDefinition.KernelCapabilities}
 */
export interface ECSTaskDefinitionKernelCapabilities {
  Add?: any[];
  Drop?: any[];
}
/**
 * Type definition for AWS::ECS::TaskDefinition.KeyValuePair
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-keyvaluepair.html | AWS::ECS::TaskDefinition.KeyValuePair}
 */
export interface ECSTaskDefinitionKeyValuePair {
  Value?: string;
  Name?: string;
}
/**
 * Type definition for AWS::ECS::TaskDefinition.LinuxParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-linuxparameters.html | AWS::ECS::TaskDefinition.LinuxParameters}
 */
export interface ECSTaskDefinitionLinuxParameters {
  Capabilities?: ECSTaskDefinitionKernelCapabilities;
  Swappiness?: number;
  Tmpfs?: any[];
  SharedMemorySize?: number;
  Devices?: any[];
  InitProcessEnabled?: boolean;
  MaxSwap?: number;
}
/**
 * Type definition for AWS::ECS::TaskDefinition.LogConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-logconfiguration.html | AWS::ECS::TaskDefinition.LogConfiguration}
 */
export interface ECSTaskDefinitionLogConfiguration {
  SecretOptions?: any[];
  Options?: Record<string, any>;
  LogDriver: string;
}
/**
 * Type definition for AWS::ECS::TaskDefinition.MountPoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-mountpoint.html | AWS::ECS::TaskDefinition.MountPoint}
 */
export interface ECSTaskDefinitionMountPoint {
  ReadOnly?: boolean;
  SourceVolume?: string;
  ContainerPath?: string;
}
/**
 * Type definition for AWS::ECS::TaskDefinition.PortMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-portmapping.html | AWS::ECS::TaskDefinition.PortMapping}
 */
export interface ECSTaskDefinitionPortMapping {
  AppProtocol?: string;
  ContainerPortRange?: string;
  HostPort?: number;
  ContainerPort?: number;
  Protocol?: string;
  Name?: string;
}
/**
 * Type definition for AWS::ECS::TaskDefinition.ProxyConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-proxyconfiguration.html | AWS::ECS::TaskDefinition.ProxyConfiguration}
 */
export interface ECSTaskDefinitionProxyConfiguration {
  ProxyConfigurationProperties?: any[];
  Type?: string;
  ContainerName: string;
}
/**
 * Type definition for AWS::ECS::TaskDefinition.RepositoryCredentials
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-repositorycredentials.html | AWS::ECS::TaskDefinition.RepositoryCredentials}
 */
export interface ECSTaskDefinitionRepositoryCredentials {
  CredentialsParameter?: string;
}
/**
 * Type definition for AWS::ECS::TaskDefinition.ResourceRequirement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-resourcerequirement.html | AWS::ECS::TaskDefinition.ResourceRequirement}
 */
export interface ECSTaskDefinitionResourceRequirement {
  Type: string;
  Value: string;
}
/**
 * Type definition for AWS::ECS::TaskDefinition.RuntimePlatform
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-runtimeplatform.html | AWS::ECS::TaskDefinition.RuntimePlatform}
 */
export interface ECSTaskDefinitionRuntimePlatform {
  OperatingSystemFamily?: string;
  CpuArchitecture?: string;
}
/**
 * Type definition for AWS::ECS::TaskDefinition.Secret
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-secret.html | AWS::ECS::TaskDefinition.Secret}
 */
export interface ECSTaskDefinitionSecret {
  ValueFrom: string;
  Name: string;
}
/**
 * Type definition for AWS::ECS::TaskDefinition.SystemControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-systemcontrol.html | AWS::ECS::TaskDefinition.SystemControl}
 */
export interface ECSTaskDefinitionSystemControl {
  Value?: string;
  Namespace?: string;
}
/**
 * Type definition for AWS::ECS::TaskDefinition.TaskDefinitionPlacementConstraint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-taskdefinitionplacementconstraint.html | AWS::ECS::TaskDefinition.TaskDefinitionPlacementConstraint}
 */
export interface ECSTaskDefinitionTaskDefinitionPlacementConstraint {
  Type: string;
  Expression?: string;
}
/**
 * Type definition for AWS::ECS::TaskDefinition.Tmpfs
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-tmpfs.html | AWS::ECS::TaskDefinition.Tmpfs}
 */
export interface ECSTaskDefinitionTmpfs {
  Size: number;
  ContainerPath?: string;
  MountOptions?: any[];
}
/**
 * Type definition for AWS::ECS::TaskDefinition.Ulimit
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-ulimit.html | AWS::ECS::TaskDefinition.Ulimit}
 */
export interface ECSTaskDefinitionUlimit {
  SoftLimit: number;
  HardLimit: number;
  Name: string;
}
/**
 * Type definition for AWS::ECS::TaskDefinition.Volume
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-volume.html | AWS::ECS::TaskDefinition.Volume}
 */
export interface ECSTaskDefinitionVolume {
  EFSVolumeConfiguration?: ECSTaskDefinitionEFSVolumeConfiguration;
  Host?: ECSTaskDefinitionHostVolumeProperties;
  DockerVolumeConfiguration?: ECSTaskDefinitionDockerVolumeConfiguration;
  Name?: string;
}
/**
 * Type definition for AWS::ECS::TaskDefinition.VolumeFrom
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-volumefrom.html | AWS::ECS::TaskDefinition.VolumeFrom}
 */
export interface ECSTaskDefinitionVolumeFrom {
  ReadOnly?: boolean;
  SourceContainer?: string;
}
/**
 * Type definition for AWS::ECS::TaskSet.AwsVpcConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskset-awsvpcconfiguration.html | AWS::ECS::TaskSet.AwsVpcConfiguration}
 */
export interface ECSTaskSetAwsVpcConfiguration {
  SecurityGroups?: any[];
  Subnets: any[];
  AssignPublicIp?: string;
}
/**
 * Type definition for AWS::ECS::TaskSet.LoadBalancer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskset-loadbalancer.html | AWS::ECS::TaskSet.LoadBalancer}
 */
export interface ECSTaskSetLoadBalancer {
  TargetGroupArn?: string;
  ContainerName?: string;
  ContainerPort?: number;
}
/**
 * Type definition for AWS::ECS::TaskSet.NetworkConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskset-networkconfiguration.html | AWS::ECS::TaskSet.NetworkConfiguration}
 */
export interface ECSTaskSetNetworkConfiguration {
  AwsVpcConfiguration?: ECSTaskSetAwsVpcConfiguration;
}
/**
 * Type definition for AWS::ECS::TaskSet.Scale
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskset-scale.html | AWS::ECS::TaskSet.Scale}
 */
export interface ECSTaskSetScale {
  Value?: number;
  Unit?: string;
}
/**
 * Type definition for AWS::ECS::TaskSet.ServiceRegistry
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskset-serviceregistry.html | AWS::ECS::TaskSet.ServiceRegistry}
 */
export interface ECSTaskSetServiceRegistry {
  ContainerName?: string;
  Port?: number;
  ContainerPort?: number;
  RegistryArn?: string;
}
/**
 * Type definition for AWS::ECS::CapacityProvider
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-capacityprovider.html | AWS::ECS::CapacityProvider}
 */
export interface ECSCapacityProviderProps {
  AutoScalingGroupProvider: ECSCapacityProviderAutoScalingGroupProvider;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Resource class for AWS::ECS::CapacityProvider
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-capacityprovider.html | AWS::ECS::CapacityProvider}
 */
export class ECSCapacityProvider extends ResourceBase<
  "AWS::ECS::CapacityProvider",
  ECSCapacityProviderProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::ECS::CapacityProvider";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ECSCapacityProviderProps,
    options?: ResourceOptions,
  ) {
    super(
      ECSCapacityProvider.Type,
      ECSCapacityProvider.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ECS::Cluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-cluster.html | AWS::ECS::Cluster}
 */
export interface ECSClusterProps {
  ClusterSettings?: any[];
  DefaultCapacityProviderStrategy?: any[];
  Configuration?: ECSClusterClusterConfiguration;
  ServiceConnectDefaults?: ECSClusterServiceConnectDefaults;
  CapacityProviders?: any[];
  ClusterName?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::ECS::Cluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-cluster.html | AWS::ECS::Cluster}
 */
export interface ECSClusterAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::ECS::Cluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-cluster.html | AWS::ECS::Cluster}
 */
export class ECSCluster extends ResourceBase<
  "AWS::ECS::Cluster",
  ECSClusterProps,
  ECSClusterAttribs
> {
  public static readonly Type = "AWS::ECS::Cluster";
  public static readonly AttributeNames: readonly (keyof ECSClusterAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: ECSClusterProps,
    options?: ResourceOptions,
  ) {
    super(
      ECSCluster.Type,
      ECSCluster.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ECS::ClusterCapacityProviderAssociations
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-clustercapacityproviderassociations.html | AWS::ECS::ClusterCapacityProviderAssociations}
 */
export interface ECSClusterCapacityProviderAssociationsProps {
  DefaultCapacityProviderStrategy: any[];
  CapacityProviders: any[];
  Cluster: string;
}
/**
 * Resource class for AWS::ECS::ClusterCapacityProviderAssociations
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-clustercapacityproviderassociations.html | AWS::ECS::ClusterCapacityProviderAssociations}
 */
export class ECSClusterCapacityProviderAssociations extends ResourceBase<
  "AWS::ECS::ClusterCapacityProviderAssociations",
  ECSClusterCapacityProviderAssociationsProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::ECS::ClusterCapacityProviderAssociations";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ECSClusterCapacityProviderAssociationsProps,
    options?: ResourceOptions,
  ) {
    super(
      ECSClusterCapacityProviderAssociations.Type,
      ECSClusterCapacityProviderAssociations.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ECS::PrimaryTaskSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-primarytaskset.html | AWS::ECS::PrimaryTaskSet}
 */
export interface ECSPrimaryTaskSetProps {
  TaskSetId: string;
  Cluster: string;
  Service: string;
}
/**
 * Resource class for AWS::ECS::PrimaryTaskSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-primarytaskset.html | AWS::ECS::PrimaryTaskSet}
 */
export class ECSPrimaryTaskSet extends ResourceBase<
  "AWS::ECS::PrimaryTaskSet",
  ECSPrimaryTaskSetProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::ECS::PrimaryTaskSet";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ECSPrimaryTaskSetProps,
    options?: ResourceOptions,
  ) {
    super(
      ECSPrimaryTaskSet.Type,
      ECSPrimaryTaskSet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ECS::Service
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html | AWS::ECS::Service}
 */
export interface ECSServiceProps {
  PlatformVersion?: string;
  HealthCheckGracePeriodSeconds?: number;
  EnableECSManagedTags?: boolean;
  EnableExecuteCommand?: boolean;
  PlacementConstraints?: any[];
  PropagateTags?: string;
  Cluster?: string;
  LoadBalancers?: any[];
  ServiceConnectConfiguration?: ECSServiceServiceConnectConfiguration;
  DesiredCount?: number;
  PlacementStrategies?: any[];
  DeploymentController?: ECSServiceDeploymentController;
  ServiceRegistries?: any[];
  CapacityProviderStrategy?: any[];
  LaunchType?: string;
  Role?: string;
  SchedulingStrategy?: string;
  TaskDefinition?: string;
  ServiceName?: string;
  NetworkConfiguration?: ECSServiceNetworkConfiguration;
  DeploymentConfiguration?: ECSServiceDeploymentConfiguration;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::ECS::Service
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html | AWS::ECS::Service}
 */
export interface ECSServiceAttribs {
  ServiceArn?: string;
  Name?: string;
}
/**
 * Resource class for AWS::ECS::Service
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html | AWS::ECS::Service}
 */
export class ECSService extends ResourceBase<
  "AWS::ECS::Service",
  ECSServiceProps,
  ECSServiceAttribs
> {
  public static readonly Type = "AWS::ECS::Service";
  public static readonly AttributeNames: readonly (keyof ECSServiceAttribs)[] =
    ["ServiceArn", "Name"];
  constructor(
    logicalId: string,
    properties: ECSServiceProps,
    options?: ResourceOptions,
  ) {
    super(
      ECSService.Type,
      ECSService.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ECS::TaskDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskdefinition.html | AWS::ECS::TaskDefinition}
 */
export interface ECSTaskDefinitionProps {
  TaskRoleArn?: string;
  IpcMode?: string;
  InferenceAccelerators?: any[];
  Memory?: string;
  PlacementConstraints?: any[];
  Cpu?: string;
  RequiresCompatibilities?: any[];
  NetworkMode?: string;
  PidMode?: string;
  ExecutionRoleArn?: string;
  RuntimePlatform?: ECSTaskDefinitionRuntimePlatform;
  ProxyConfiguration?: ECSTaskDefinitionProxyConfiguration;
  Volumes?: any[];
  ContainerDefinitions?: any[];
  Family?: string;
  EphemeralStorage?: ECSTaskDefinitionEphemeralStorage;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::ECS::TaskDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskdefinition.html | AWS::ECS::TaskDefinition}
 */
export interface ECSTaskDefinitionAttribs {
  TaskDefinitionArn?: string;
}
/**
 * Resource class for AWS::ECS::TaskDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskdefinition.html | AWS::ECS::TaskDefinition}
 */
export class ECSTaskDefinition extends ResourceBase<
  "AWS::ECS::TaskDefinition",
  ECSTaskDefinitionProps,
  ECSTaskDefinitionAttribs
> {
  public static readonly Type = "AWS::ECS::TaskDefinition";
  public static readonly AttributeNames: readonly (keyof ECSTaskDefinitionAttribs)[] =
    ["TaskDefinitionArn"];
  constructor(
    logicalId: string,
    properties: ECSTaskDefinitionProps,
    options?: ResourceOptions,
  ) {
    super(
      ECSTaskDefinition.Type,
      ECSTaskDefinition.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ECS::TaskSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html | AWS::ECS::TaskSet}
 */
export interface ECSTaskSetProps {
  PlatformVersion?: string;
  TaskDefinition: string;
  ExternalId?: string;
  Cluster: string;
  LoadBalancers?: any[];
  Service: string;
  NetworkConfiguration?: ECSTaskSetNetworkConfiguration;
  Scale?: ECSTaskSetScale;
  ServiceRegistries?: any[];
  LaunchType?: string;
}
/**
 * Attributes type definition for AWS::ECS::TaskSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html | AWS::ECS::TaskSet}
 */
export interface ECSTaskSetAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::ECS::TaskSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html | AWS::ECS::TaskSet}
 */
export class ECSTaskSet extends ResourceBase<
  "AWS::ECS::TaskSet",
  ECSTaskSetProps,
  ECSTaskSetAttribs
> {
  public static readonly Type = "AWS::ECS::TaskSet";
  public static readonly AttributeNames: readonly (keyof ECSTaskSetAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: ECSTaskSetProps,
    options?: ResourceOptions,
  ) {
    super(
      ECSTaskSet.Type,
      ECSTaskSet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
