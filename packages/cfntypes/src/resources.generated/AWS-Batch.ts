import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Batch::ComputeEnvironment.ComputeResources
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html | AWS::Batch::ComputeEnvironment.ComputeResources}
 */
export interface BatchComputeEnvironmentComputeResources {
  SpotIamFleetRole?: string;
  MaxvCpus: number;
  Ec2Configuration?: any[];
  BidPercentage?: number;
  SecurityGroupIds?: any[];
  AllocationStrategy?: string;
  Subnets: any[];
  Type: string;
  MinvCpus?: number;
  UpdateToLatestImageVersion?: boolean;
  LaunchTemplate?: BatchComputeEnvironmentLaunchTemplateSpecification;
  ImageId?: string;
  InstanceRole?: string;
  InstanceTypes?: any[];
  Ec2KeyPair?: string;
  PlacementGroup?: string;
  Tags?: Record<string, Tag>;
  DesiredvCpus?: number;
}
/**
 * Type definition for AWS::Batch::ComputeEnvironment.Ec2ConfigurationObject
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-ec2configurationobject.html | AWS::Batch::ComputeEnvironment.Ec2ConfigurationObject}
 */
export interface BatchComputeEnvironmentEc2ConfigurationObject {
  ImageIdOverride?: string;
  ImageKubernetesVersion?: string;
  ImageType: string;
}
/**
 * Type definition for AWS::Batch::ComputeEnvironment.EksConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-eksconfiguration.html | AWS::Batch::ComputeEnvironment.EksConfiguration}
 */
export interface BatchComputeEnvironmentEksConfiguration {
  EksClusterArn: string;
  KubernetesNamespace: string;
}
/**
 * Type definition for AWS::Batch::ComputeEnvironment.LaunchTemplateSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-launchtemplatespecification.html | AWS::Batch::ComputeEnvironment.LaunchTemplateSpecification}
 */
export interface BatchComputeEnvironmentLaunchTemplateSpecification {
  LaunchTemplateName?: string;
  Version?: string;
  LaunchTemplateId?: string;
}
/**
 * Type definition for AWS::Batch::ComputeEnvironment.UpdatePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-updatepolicy.html | AWS::Batch::ComputeEnvironment.UpdatePolicy}
 */
export interface BatchComputeEnvironmentUpdatePolicy {
  JobExecutionTimeoutMinutes?: number;
  TerminateJobsOnUpdate?: boolean;
}
/**
 * Type definition for AWS::Batch::JobDefinition.AuthorizationConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-authorizationconfig.html | AWS::Batch::JobDefinition.AuthorizationConfig}
 */
export interface BatchJobDefinitionAuthorizationConfig {
  Iam?: string;
  AccessPointId?: string;
}
/**
 * Type definition for AWS::Batch::JobDefinition.ContainerProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-containerproperties.html | AWS::Batch::JobDefinition.ContainerProperties}
 */
export interface BatchJobDefinitionContainerProperties {
  User?: string;
  Secrets?: any[];
  Memory?: number;
  Privileged?: boolean;
  LinuxParameters?: BatchJobDefinitionLinuxParameters;
  FargatePlatformConfiguration?: BatchJobDefinitionFargatePlatformConfiguration;
  JobRoleArn?: string;
  ReadonlyRootFilesystem?: boolean;
  Vcpus?: number;
  Image: string;
  ResourceRequirements?: any[];
  LogConfiguration?: BatchJobDefinitionLogConfiguration;
  MountPoints?: any[];
  ExecutionRoleArn?: string;
  RuntimePlatform?: BatchJobDefinitionRuntimePlatform;
  Volumes?: any[];
  Command?: any[];
  Environment?: any[];
  Ulimits?: any[];
  NetworkConfiguration?: BatchJobDefinitionNetworkConfiguration;
  InstanceType?: string;
  EphemeralStorage?: BatchJobDefinitionEphemeralStorage;
}
/**
 * Type definition for AWS::Batch::JobDefinition.Device
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-device.html | AWS::Batch::JobDefinition.Device}
 */
export interface BatchJobDefinitionDevice {
  HostPath?: string;
  Permissions?: any[];
  ContainerPath?: string;
}
/**
 * Type definition for AWS::Batch::JobDefinition.EfsVolumeConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-efsvolumeconfiguration.html | AWS::Batch::JobDefinition.EfsVolumeConfiguration}
 */
export interface BatchJobDefinitionEfsVolumeConfiguration {
  TransitEncryption?: string;
  AuthorizationConfig?: BatchJobDefinitionAuthorizationConfig;
  FileSystemId: string;
  RootDirectory?: string;
  TransitEncryptionPort?: number;
}
/**
 * Type definition for AWS::Batch::JobDefinition.EksContainer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-ekscontainer.html | AWS::Batch::JobDefinition.EksContainer}
 */
export interface BatchJobDefinitionEksContainer {
  Args?: any[];
  VolumeMounts?: any[];
  ImagePullPolicy?: string;
  Command?: any[];
  SecurityContext?: BatchJobDefinitionEksContainerSecurityContext;
  Resources?: BatchJobDefinitionEksContainerResourceRequirements;
  Image: string;
  Env?: any[];
  Name?: string;
}
/**
 * Type definition for AWS::Batch::JobDefinition.EksContainerEnvironmentVariable
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-ekscontainerenvironmentvariable.html | AWS::Batch::JobDefinition.EksContainerEnvironmentVariable}
 */
export interface BatchJobDefinitionEksContainerEnvironmentVariable {
  Value?: string;
  Name: string;
}
/**
 * Type definition for AWS::Batch::JobDefinition.EksContainerResourceRequirements
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-ekscontainerresourcerequirements.html | AWS::Batch::JobDefinition.EksContainerResourceRequirements}
 */
export interface BatchJobDefinitionEksContainerResourceRequirements {
  Limits?: object;
  Requests?: object;
}
/**
 * Type definition for AWS::Batch::JobDefinition.EksContainerSecurityContext
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-ekscontainersecuritycontext.html | AWS::Batch::JobDefinition.EksContainerSecurityContext}
 */
export interface BatchJobDefinitionEksContainerSecurityContext {
  RunAsUser?: number;
  RunAsNonRoot?: boolean;
  Privileged?: boolean;
  ReadOnlyRootFilesystem?: boolean;
  RunAsGroup?: number;
}
/**
 * Type definition for AWS::Batch::JobDefinition.EksContainerVolumeMount
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-ekscontainervolumemount.html | AWS::Batch::JobDefinition.EksContainerVolumeMount}
 */
export interface BatchJobDefinitionEksContainerVolumeMount {
  MountPath?: string;
  ReadOnly?: boolean;
  Name?: string;
}
/**
 * Type definition for AWS::Batch::JobDefinition.EksEmptyDir
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-eksemptydir.html | AWS::Batch::JobDefinition.EksEmptyDir}
 */
export interface BatchJobDefinitionEksEmptyDir {
  Medium?: string;
  SizeLimit?: string;
}
/**
 * Type definition for AWS::Batch::JobDefinition.EksHostPath
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-ekshostpath.html | AWS::Batch::JobDefinition.EksHostPath}
 */
export interface BatchJobDefinitionEksHostPath {
  Path?: string;
}
/**
 * Type definition for AWS::Batch::JobDefinition.EksProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-eksproperties.html | AWS::Batch::JobDefinition.EksProperties}
 */
export interface BatchJobDefinitionEksProperties {
  PodProperties?: BatchJobDefinitionPodProperties;
}
/**
 * Type definition for AWS::Batch::JobDefinition.EksSecret
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-ekssecret.html | AWS::Batch::JobDefinition.EksSecret}
 */
export interface BatchJobDefinitionEksSecret {
  SecretName: string;
  Optional?: boolean;
}
/**
 * Type definition for AWS::Batch::JobDefinition.EksVolume
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-eksvolume.html | AWS::Batch::JobDefinition.EksVolume}
 */
export interface BatchJobDefinitionEksVolume {
  Secret?: BatchJobDefinitionEksSecret;
  EmptyDir?: BatchJobDefinitionEksEmptyDir;
  HostPath?: BatchJobDefinitionEksHostPath;
  Name: string;
}
/**
 * Type definition for AWS::Batch::JobDefinition.Environment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-environment.html | AWS::Batch::JobDefinition.Environment}
 */
export interface BatchJobDefinitionEnvironment {
  Value?: string;
  Name?: string;
}
/**
 * Type definition for AWS::Batch::JobDefinition.EphemeralStorage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-containerproperties-ephemeralstorage.html | AWS::Batch::JobDefinition.EphemeralStorage}
 */
export interface BatchJobDefinitionEphemeralStorage {
  SizeInGiB: number;
}
/**
 * Type definition for AWS::Batch::JobDefinition.EvaluateOnExit
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-evaluateonexit.html | AWS::Batch::JobDefinition.EvaluateOnExit}
 */
export interface BatchJobDefinitionEvaluateOnExit {
  Action: string;
  OnExitCode?: string;
  OnReason?: string;
  OnStatusReason?: string;
}
/**
 * Type definition for AWS::Batch::JobDefinition.FargatePlatformConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-containerproperties-fargateplatformconfiguration.html | AWS::Batch::JobDefinition.FargatePlatformConfiguration}
 */
export interface BatchJobDefinitionFargatePlatformConfiguration {
  PlatformVersion?: string;
}
/**
 * Type definition for AWS::Batch::JobDefinition.LinuxParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-containerproperties-linuxparameters.html | AWS::Batch::JobDefinition.LinuxParameters}
 */
export interface BatchJobDefinitionLinuxParameters {
  Swappiness?: number;
  Tmpfs?: any[];
  SharedMemorySize?: number;
  Devices?: any[];
  InitProcessEnabled?: boolean;
  MaxSwap?: number;
}
/**
 * Type definition for AWS::Batch::JobDefinition.LogConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-containerproperties-logconfiguration.html | AWS::Batch::JobDefinition.LogConfiguration}
 */
export interface BatchJobDefinitionLogConfiguration {
  SecretOptions?: any[];
  Options?: object;
  LogDriver: string;
}
/**
 * Type definition for AWS::Batch::JobDefinition.Metadata
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-podproperties-metadata.html | AWS::Batch::JobDefinition.Metadata}
 */
export interface BatchJobDefinitionMetadata {
  Labels?: object;
}
/**
 * Type definition for AWS::Batch::JobDefinition.MountPoints
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-mountpoints.html | AWS::Batch::JobDefinition.MountPoints}
 */
export interface BatchJobDefinitionMountPoints {
  ReadOnly?: boolean;
  SourceVolume?: string;
  ContainerPath?: string;
}
/**
 * Type definition for AWS::Batch::JobDefinition.NetworkConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-containerproperties-networkconfiguration.html | AWS::Batch::JobDefinition.NetworkConfiguration}
 */
export interface BatchJobDefinitionNetworkConfiguration {
  AssignPublicIp?: string;
}
/**
 * Type definition for AWS::Batch::JobDefinition.NodeProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-nodeproperties.html | AWS::Batch::JobDefinition.NodeProperties}
 */
export interface BatchJobDefinitionNodeProperties {
  MainNode: number;
  NodeRangeProperties: any[];
  NumNodes: number;
}
/**
 * Type definition for AWS::Batch::JobDefinition.NodeRangeProperty
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-noderangeproperty.html | AWS::Batch::JobDefinition.NodeRangeProperty}
 */
export interface BatchJobDefinitionNodeRangeProperty {
  Container?: BatchJobDefinitionContainerProperties;
  TargetNodes: string;
}
/**
 * Type definition for AWS::Batch::JobDefinition.PodProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-podproperties.html | AWS::Batch::JobDefinition.PodProperties}
 */
export interface BatchJobDefinitionPodProperties {
  Volumes?: any[];
  DnsPolicy?: string;
  Containers?: any[];
  Metadata?: BatchJobDefinitionMetadata;
  ServiceAccountName?: string;
  HostNetwork?: boolean;
}
/**
 * Type definition for AWS::Batch::JobDefinition.ResourceRequirement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-resourcerequirement.html | AWS::Batch::JobDefinition.ResourceRequirement}
 */
export interface BatchJobDefinitionResourceRequirement {
  Type?: string;
  Value?: string;
}
/**
 * Type definition for AWS::Batch::JobDefinition.RetryStrategy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-retrystrategy.html | AWS::Batch::JobDefinition.RetryStrategy}
 */
export interface BatchJobDefinitionRetryStrategy {
  EvaluateOnExit?: any[];
  Attempts?: number;
}
/**
 * Type definition for AWS::Batch::JobDefinition.RuntimePlatform
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-containerproperties-runtimeplatform.html | AWS::Batch::JobDefinition.RuntimePlatform}
 */
export interface BatchJobDefinitionRuntimePlatform {
  OperatingSystemFamily?: string;
  CpuArchitecture?: string;
}
/**
 * Type definition for AWS::Batch::JobDefinition.Secret
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-secret.html | AWS::Batch::JobDefinition.Secret}
 */
export interface BatchJobDefinitionSecret {
  ValueFrom: string;
  Name: string;
}
/**
 * Type definition for AWS::Batch::JobDefinition.Timeout
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-timeout.html | AWS::Batch::JobDefinition.Timeout}
 */
export interface BatchJobDefinitionTimeout {
  AttemptDurationSeconds?: number;
}
/**
 * Type definition for AWS::Batch::JobDefinition.Tmpfs
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-tmpfs.html | AWS::Batch::JobDefinition.Tmpfs}
 */
export interface BatchJobDefinitionTmpfs {
  Size: number;
  ContainerPath: string;
  MountOptions?: any[];
}
/**
 * Type definition for AWS::Batch::JobDefinition.Ulimit
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-ulimit.html | AWS::Batch::JobDefinition.Ulimit}
 */
export interface BatchJobDefinitionUlimit {
  SoftLimit: number;
  HardLimit: number;
  Name: string;
}
/**
 * Type definition for AWS::Batch::JobDefinition.Volumes
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-volumes.html | AWS::Batch::JobDefinition.Volumes}
 */
export interface BatchJobDefinitionVolumes {
  Host?: BatchJobDefinitionVolumesHost;
  EfsVolumeConfiguration?: BatchJobDefinitionEfsVolumeConfiguration;
  Name?: string;
}
/**
 * Type definition for AWS::Batch::JobDefinition.VolumesHost
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-volumeshost.html | AWS::Batch::JobDefinition.VolumesHost}
 */
export interface BatchJobDefinitionVolumesHost {
  SourcePath?: string;
}
/**
 * Type definition for AWS::Batch::JobQueue.ComputeEnvironmentOrder
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobqueue-computeenvironmentorder.html | AWS::Batch::JobQueue.ComputeEnvironmentOrder}
 */
export interface BatchJobQueueComputeEnvironmentOrder {
  ComputeEnvironment: string;
  Order: number;
}
/**
 * Type definition for AWS::Batch::SchedulingPolicy.FairsharePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-schedulingpolicy-fairsharepolicy.html | AWS::Batch::SchedulingPolicy.FairsharePolicy}
 */
export interface BatchSchedulingPolicyFairsharePolicy {
  ShareDistribution?: any[];
  ShareDecaySeconds?: number;
  ComputeReservation?: number;
}
/**
 * Type definition for AWS::Batch::SchedulingPolicy.ShareAttributes
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-schedulingpolicy-shareattributes.html | AWS::Batch::SchedulingPolicy.ShareAttributes}
 */
export interface BatchSchedulingPolicyShareAttributes {
  WeightFactor?: number;
  ShareIdentifier?: string;
}
/**
 * Type definition for AWS::Batch::ComputeEnvironment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-computeenvironment.html | AWS::Batch::ComputeEnvironment}
 */
export interface BatchComputeEnvironmentProps {
  UnmanagedvCpus?: number;
  Type: string;
  ReplaceComputeEnvironment?: boolean;
  ServiceRole?: string;
  UpdatePolicy?: BatchComputeEnvironmentUpdatePolicy;
  EksConfiguration?: BatchComputeEnvironmentEksConfiguration;
  ComputeEnvironmentName?: string;
  ComputeResources?: BatchComputeEnvironmentComputeResources;
  State?: string;
  Tags?: Record<string, Tag>;
}
/**
 * Attributes type definition for AWS::Batch::ComputeEnvironment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-computeenvironment.html | AWS::Batch::ComputeEnvironment}
 */
export interface BatchComputeEnvironmentAttribs {
  ComputeEnvironmentArn?: string;
}
/**
 * Resource class for AWS::Batch::ComputeEnvironment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-computeenvironment.html | AWS::Batch::ComputeEnvironment}
 */
export class BatchComputeEnvironment extends ResourceBase<
  "AWS::Batch::ComputeEnvironment",
  BatchComputeEnvironmentProps,
  BatchComputeEnvironmentAttribs
> {
  public static readonly Type = "AWS::Batch::ComputeEnvironment";
  public static readonly AttributeNames: readonly (keyof BatchComputeEnvironmentAttribs)[] =
    ["ComputeEnvironmentArn"];
  constructor(
    logicalId: string,
    properties: BatchComputeEnvironmentProps,
    options?: ResourceOptions,
  ) {
    super(
      BatchComputeEnvironment.Type,
      BatchComputeEnvironment.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Batch::JobDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html | AWS::Batch::JobDefinition}
 */
export interface BatchJobDefinitionProps {
  Type: string;
  Parameters?: object;
  NodeProperties?: BatchJobDefinitionNodeProperties;
  SchedulingPriority?: number;
  Timeout?: BatchJobDefinitionTimeout;
  ContainerProperties?: BatchJobDefinitionContainerProperties;
  JobDefinitionName?: string;
  PropagateTags?: boolean;
  PlatformCapabilities?: any[];
  EksProperties?: BatchJobDefinitionEksProperties;
  RetryStrategy?: BatchJobDefinitionRetryStrategy;
  Tags?: object;
}
/**
 * Resource class for AWS::Batch::JobDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html | AWS::Batch::JobDefinition}
 */
export class BatchJobDefinition extends ResourceBase<
  "AWS::Batch::JobDefinition",
  BatchJobDefinitionProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Batch::JobDefinition";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: BatchJobDefinitionProps,
    options?: ResourceOptions,
  ) {
    super(
      BatchJobDefinition.Type,
      BatchJobDefinition.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Batch::JobQueue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobqueue.html | AWS::Batch::JobQueue}
 */
export interface BatchJobQueueProps {
  ComputeEnvironmentOrder: any[];
  Priority: number;
  State?: string;
  SchedulingPolicyArn?: string;
  JobQueueName?: string;
  Tags?: Record<string, Tag>;
}
/**
 * Attributes type definition for AWS::Batch::JobQueue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobqueue.html | AWS::Batch::JobQueue}
 */
export interface BatchJobQueueAttribs {
  JobQueueArn?: string;
}
/**
 * Resource class for AWS::Batch::JobQueue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobqueue.html | AWS::Batch::JobQueue}
 */
export class BatchJobQueue extends ResourceBase<
  "AWS::Batch::JobQueue",
  BatchJobQueueProps,
  BatchJobQueueAttribs
> {
  public static readonly Type = "AWS::Batch::JobQueue";
  public static readonly AttributeNames: readonly (keyof BatchJobQueueAttribs)[] =
    ["JobQueueArn"];
  constructor(
    logicalId: string,
    properties: BatchJobQueueProps,
    options?: ResourceOptions,
  ) {
    super(
      BatchJobQueue.Type,
      BatchJobQueue.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Batch::SchedulingPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-schedulingpolicy.html | AWS::Batch::SchedulingPolicy}
 */
export interface BatchSchedulingPolicyProps {
  FairsharePolicy?: BatchSchedulingPolicyFairsharePolicy;
  Tags?: Record<string, Tag>;
  Name?: string;
}
/**
 * Attributes type definition for AWS::Batch::SchedulingPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-schedulingpolicy.html | AWS::Batch::SchedulingPolicy}
 */
export interface BatchSchedulingPolicyAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::Batch::SchedulingPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-schedulingpolicy.html | AWS::Batch::SchedulingPolicy}
 */
export class BatchSchedulingPolicy extends ResourceBase<
  "AWS::Batch::SchedulingPolicy",
  BatchSchedulingPolicyProps,
  BatchSchedulingPolicyAttribs
> {
  public static readonly Type = "AWS::Batch::SchedulingPolicy";
  public static readonly AttributeNames: readonly (keyof BatchSchedulingPolicyAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: BatchSchedulingPolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      BatchSchedulingPolicy.Type,
      BatchSchedulingPolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
