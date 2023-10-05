import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::EMR::Cluster.Application
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-application.html | AWS::EMR::Cluster.Application}
 */
export interface EMRClusterApplication {
  AdditionalInfo?: Record<string, any>;
  Args?: any[];
  Name?: string;
  Version?: string;
}
/**
 * Type definition for AWS::EMR::Cluster.AutoScalingPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-autoscalingpolicy.html | AWS::EMR::Cluster.AutoScalingPolicy}
 */
export interface EMRClusterAutoScalingPolicy {
  Constraints: EMRClusterScalingConstraints;
  Rules: any[];
}
/**
 * Type definition for AWS::EMR::Cluster.AutoTerminationPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-autoterminationpolicy.html | AWS::EMR::Cluster.AutoTerminationPolicy}
 */
export interface EMRClusterAutoTerminationPolicy {
  IdleTimeout?: number;
}
/**
 * Type definition for AWS::EMR::Cluster.BootstrapActionConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-bootstrapactionconfig.html | AWS::EMR::Cluster.BootstrapActionConfig}
 */
export interface EMRClusterBootstrapActionConfig {
  Name: string;
  ScriptBootstrapAction: EMRClusterScriptBootstrapActionConfig;
}
/**
 * Type definition for AWS::EMR::Cluster.CloudWatchAlarmDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-cloudwatchalarmdefinition.html | AWS::EMR::Cluster.CloudWatchAlarmDefinition}
 */
export interface EMRClusterCloudWatchAlarmDefinition {
  ComparisonOperator: string;
  Dimensions?: any[];
  EvaluationPeriods?: number;
  MetricName: string;
  Namespace?: string;
  Period: number;
  Statistic?: string;
  Threshold: number;
  Unit?: string;
}
/**
 * Type definition for AWS::EMR::Cluster.ComputeLimits
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-computelimits.html | AWS::EMR::Cluster.ComputeLimits}
 */
export interface EMRClusterComputeLimits {
  MaximumCapacityUnits: number;
  MaximumCoreCapacityUnits?: number;
  MaximumOnDemandCapacityUnits?: number;
  MinimumCapacityUnits: number;
  UnitType: string;
}
/**
 * Type definition for AWS::EMR::Cluster.Configuration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-configuration.html | AWS::EMR::Cluster.Configuration}
 */
export interface EMRClusterConfiguration {
  Classification?: string;
  ConfigurationProperties?: Record<string, any>;
  Configurations?: any[];
}
/**
 * Type definition for AWS::EMR::Cluster.EbsBlockDeviceConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-ebsblockdeviceconfig.html | AWS::EMR::Cluster.EbsBlockDeviceConfig}
 */
export interface EMRClusterEbsBlockDeviceConfig {
  VolumeSpecification: EMRClusterVolumeSpecification;
  VolumesPerInstance?: number;
}
/**
 * Type definition for AWS::EMR::Cluster.EbsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-ebsconfiguration.html | AWS::EMR::Cluster.EbsConfiguration}
 */
export interface EMRClusterEbsConfiguration {
  EbsBlockDeviceConfigs?: any[];
  EbsOptimized?: boolean;
}
/**
 * Type definition for AWS::EMR::Cluster.HadoopJarStepConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-hadoopjarstepconfig.html | AWS::EMR::Cluster.HadoopJarStepConfig}
 */
export interface EMRClusterHadoopJarStepConfig {
  Args?: any[];
  Jar: string;
  MainClass?: string;
  StepProperties?: any[];
}
/**
 * Type definition for AWS::EMR::Cluster.InstanceFleetConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-instancefleetconfig.html | AWS::EMR::Cluster.InstanceFleetConfig}
 */
export interface EMRClusterInstanceFleetConfig {
  InstanceTypeConfigs?: any[];
  LaunchSpecifications?: EMRClusterInstanceFleetProvisioningSpecifications;
  Name?: string;
  TargetOnDemandCapacity?: number;
  TargetSpotCapacity?: number;
}
/**
 * Type definition for AWS::EMR::Cluster.InstanceFleetProvisioningSpecifications
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-instancefleetprovisioningspecifications.html | AWS::EMR::Cluster.InstanceFleetProvisioningSpecifications}
 */
export interface EMRClusterInstanceFleetProvisioningSpecifications {
  OnDemandSpecification?: EMRClusterOnDemandProvisioningSpecification;
  SpotSpecification?: EMRClusterSpotProvisioningSpecification;
}
/**
 * Type definition for AWS::EMR::Cluster.InstanceGroupConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-instancegroupconfig.html | AWS::EMR::Cluster.InstanceGroupConfig}
 */
export interface EMRClusterInstanceGroupConfig {
  AutoScalingPolicy?: EMRClusterAutoScalingPolicy;
  BidPrice?: string;
  Configurations?: any[];
  CustomAmiId?: string;
  EbsConfiguration?: EMRClusterEbsConfiguration;
  InstanceCount: number;
  InstanceType: string;
  Market?: string;
  Name?: string;
}
/**
 * Type definition for AWS::EMR::Cluster.InstanceTypeConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-instancetypeconfig.html | AWS::EMR::Cluster.InstanceTypeConfig}
 */
export interface EMRClusterInstanceTypeConfig {
  BidPrice?: string;
  BidPriceAsPercentageOfOnDemandPrice?: number;
  Configurations?: any[];
  CustomAmiId?: string;
  EbsConfiguration?: EMRClusterEbsConfiguration;
  InstanceType: string;
  WeightedCapacity?: number;
}
/**
 * Type definition for AWS::EMR::Cluster.JobFlowInstancesConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-jobflowinstancesconfig.html | AWS::EMR::Cluster.JobFlowInstancesConfig}
 */
export interface EMRClusterJobFlowInstancesConfig {
  AdditionalMasterSecurityGroups?: any[];
  AdditionalSlaveSecurityGroups?: any[];
  CoreInstanceFleet?: EMRClusterInstanceFleetConfig;
  CoreInstanceGroup?: EMRClusterInstanceGroupConfig;
  Ec2KeyName?: string;
  Ec2SubnetId?: string;
  Ec2SubnetIds?: any[];
  EmrManagedMasterSecurityGroup?: string;
  EmrManagedSlaveSecurityGroup?: string;
  HadoopVersion?: string;
  KeepJobFlowAliveWhenNoSteps?: boolean;
  MasterInstanceFleet?: EMRClusterInstanceFleetConfig;
  MasterInstanceGroup?: EMRClusterInstanceGroupConfig;
  Placement?: EMRClusterPlacementType;
  ServiceAccessSecurityGroup?: string;
  TaskInstanceFleets?: any[];
  TaskInstanceGroups?: any[];
  TerminationProtected?: boolean;
}
/**
 * Type definition for AWS::EMR::Cluster.KerberosAttributes
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-kerberosattributes.html | AWS::EMR::Cluster.KerberosAttributes}
 */
export interface EMRClusterKerberosAttributes {
  ADDomainJoinPassword?: string;
  ADDomainJoinUser?: string;
  CrossRealmTrustPrincipalPassword?: string;
  KdcAdminPassword: string;
  Realm: string;
}
/**
 * Type definition for AWS::EMR::Cluster.KeyValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-keyvalue.html | AWS::EMR::Cluster.KeyValue}
 */
export interface EMRClusterKeyValue {
  Key?: string;
  Value?: string;
}
/**
 * Type definition for AWS::EMR::Cluster.ManagedScalingPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-managedscalingpolicy.html | AWS::EMR::Cluster.ManagedScalingPolicy}
 */
export interface EMRClusterManagedScalingPolicy {
  ComputeLimits?: EMRClusterComputeLimits;
}
/**
 * Type definition for AWS::EMR::Cluster.MetricDimension
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-metricdimension.html | AWS::EMR::Cluster.MetricDimension}
 */
export interface EMRClusterMetricDimension {
  Key: string;
  Value: string;
}
/**
 * Type definition for AWS::EMR::Cluster.OnDemandProvisioningSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-ondemandprovisioningspecification.html | AWS::EMR::Cluster.OnDemandProvisioningSpecification}
 */
export interface EMRClusterOnDemandProvisioningSpecification {
  AllocationStrategy: string;
}
/**
 * Type definition for AWS::EMR::Cluster.PlacementType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-placementtype.html | AWS::EMR::Cluster.PlacementType}
 */
export interface EMRClusterPlacementType {
  AvailabilityZone: string;
}
/**
 * Type definition for AWS::EMR::Cluster.ScalingAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-scalingaction.html | AWS::EMR::Cluster.ScalingAction}
 */
export interface EMRClusterScalingAction {
  Market?: string;
  SimpleScalingPolicyConfiguration: EMRClusterSimpleScalingPolicyConfiguration;
}
/**
 * Type definition for AWS::EMR::Cluster.ScalingConstraints
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-scalingconstraints.html | AWS::EMR::Cluster.ScalingConstraints}
 */
export interface EMRClusterScalingConstraints {
  MaxCapacity: number;
  MinCapacity: number;
}
/**
 * Type definition for AWS::EMR::Cluster.ScalingRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-scalingrule.html | AWS::EMR::Cluster.ScalingRule}
 */
export interface EMRClusterScalingRule {
  Action: EMRClusterScalingAction;
  Description?: string;
  Name: string;
  Trigger: EMRClusterScalingTrigger;
}
/**
 * Type definition for AWS::EMR::Cluster.ScalingTrigger
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-scalingtrigger.html | AWS::EMR::Cluster.ScalingTrigger}
 */
export interface EMRClusterScalingTrigger {
  CloudWatchAlarmDefinition: EMRClusterCloudWatchAlarmDefinition;
}
/**
 * Type definition for AWS::EMR::Cluster.ScriptBootstrapActionConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-scriptbootstrapactionconfig.html | AWS::EMR::Cluster.ScriptBootstrapActionConfig}
 */
export interface EMRClusterScriptBootstrapActionConfig {
  Args?: any[];
  Path: string;
}
/**
 * Type definition for AWS::EMR::Cluster.SimpleScalingPolicyConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-simplescalingpolicyconfiguration.html | AWS::EMR::Cluster.SimpleScalingPolicyConfiguration}
 */
export interface EMRClusterSimpleScalingPolicyConfiguration {
  AdjustmentType?: string;
  CoolDown?: number;
  ScalingAdjustment: number;
}
/**
 * Type definition for AWS::EMR::Cluster.SpotProvisioningSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-spotprovisioningspecification.html | AWS::EMR::Cluster.SpotProvisioningSpecification}
 */
export interface EMRClusterSpotProvisioningSpecification {
  AllocationStrategy?: string;
  BlockDurationMinutes?: number;
  TimeoutAction: string;
  TimeoutDurationMinutes: number;
}
/**
 * Type definition for AWS::EMR::Cluster.StepConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-stepconfig.html | AWS::EMR::Cluster.StepConfig}
 */
export interface EMRClusterStepConfig {
  ActionOnFailure?: string;
  HadoopJarStep: EMRClusterHadoopJarStepConfig;
  Name: string;
}
/**
 * Type definition for AWS::EMR::Cluster.VolumeSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-volumespecification.html | AWS::EMR::Cluster.VolumeSpecification}
 */
export interface EMRClusterVolumeSpecification {
  Iops?: number;
  SizeInGB: number;
  Throughput?: number;
  VolumeType: string;
}
/**
 * Type definition for AWS::EMR::InstanceFleetConfig.Configuration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-instancefleetconfig-configuration.html | AWS::EMR::InstanceFleetConfig.Configuration}
 */
export interface EMRInstanceFleetConfigConfiguration {
  Classification?: string;
  ConfigurationProperties?: Record<string, any>;
  Configurations?: any[];
}
/**
 * Type definition for AWS::EMR::InstanceFleetConfig.EbsBlockDeviceConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-instancefleetconfig-ebsblockdeviceconfig.html | AWS::EMR::InstanceFleetConfig.EbsBlockDeviceConfig}
 */
export interface EMRInstanceFleetConfigEbsBlockDeviceConfig {
  VolumeSpecification: EMRInstanceFleetConfigVolumeSpecification;
  VolumesPerInstance?: number;
}
/**
 * Type definition for AWS::EMR::InstanceFleetConfig.EbsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-instancefleetconfig-ebsconfiguration.html | AWS::EMR::InstanceFleetConfig.EbsConfiguration}
 */
export interface EMRInstanceFleetConfigEbsConfiguration {
  EbsBlockDeviceConfigs?: any[];
  EbsOptimized?: boolean;
}
/**
 * Type definition for AWS::EMR::InstanceFleetConfig.InstanceFleetProvisioningSpecifications
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-instancefleetconfig-instancefleetprovisioningspecifications.html | AWS::EMR::InstanceFleetConfig.InstanceFleetProvisioningSpecifications}
 */
export interface EMRInstanceFleetConfigInstanceFleetProvisioningSpecifications {
  OnDemandSpecification?: EMRInstanceFleetConfigOnDemandProvisioningSpecification;
  SpotSpecification?: EMRInstanceFleetConfigSpotProvisioningSpecification;
}
/**
 * Type definition for AWS::EMR::InstanceFleetConfig.InstanceTypeConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-instancefleetconfig-instancetypeconfig.html | AWS::EMR::InstanceFleetConfig.InstanceTypeConfig}
 */
export interface EMRInstanceFleetConfigInstanceTypeConfig {
  BidPrice?: string;
  BidPriceAsPercentageOfOnDemandPrice?: number;
  Configurations?: any[];
  CustomAmiId?: string;
  EbsConfiguration?: EMRInstanceFleetConfigEbsConfiguration;
  InstanceType: string;
  WeightedCapacity?: number;
}
/**
 * Type definition for AWS::EMR::InstanceFleetConfig.OnDemandProvisioningSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-instancefleetconfig-ondemandprovisioningspecification.html | AWS::EMR::InstanceFleetConfig.OnDemandProvisioningSpecification}
 */
export interface EMRInstanceFleetConfigOnDemandProvisioningSpecification {
  AllocationStrategy: string;
}
/**
 * Type definition for AWS::EMR::InstanceFleetConfig.SpotProvisioningSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-instancefleetconfig-spotprovisioningspecification.html | AWS::EMR::InstanceFleetConfig.SpotProvisioningSpecification}
 */
export interface EMRInstanceFleetConfigSpotProvisioningSpecification {
  AllocationStrategy?: string;
  BlockDurationMinutes?: number;
  TimeoutAction: string;
  TimeoutDurationMinutes: number;
}
/**
 * Type definition for AWS::EMR::InstanceFleetConfig.VolumeSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-instancefleetconfig-volumespecification.html | AWS::EMR::InstanceFleetConfig.VolumeSpecification}
 */
export interface EMRInstanceFleetConfigVolumeSpecification {
  Iops?: number;
  SizeInGB: number;
  Throughput?: number;
  VolumeType: string;
}
/**
 * Type definition for AWS::EMR::InstanceGroupConfig.AutoScalingPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-instancegroupconfig-autoscalingpolicy.html | AWS::EMR::InstanceGroupConfig.AutoScalingPolicy}
 */
export interface EMRInstanceGroupConfigAutoScalingPolicy {
  Constraints: EMRInstanceGroupConfigScalingConstraints;
  Rules: any[];
}
/**
 * Type definition for AWS::EMR::InstanceGroupConfig.CloudWatchAlarmDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-instancegroupconfig-cloudwatchalarmdefinition.html | AWS::EMR::InstanceGroupConfig.CloudWatchAlarmDefinition}
 */
export interface EMRInstanceGroupConfigCloudWatchAlarmDefinition {
  ComparisonOperator: string;
  Dimensions?: any[];
  EvaluationPeriods?: number;
  MetricName: string;
  Namespace?: string;
  Period: number;
  Statistic?: string;
  Threshold: number;
  Unit?: string;
}
/**
 * Type definition for AWS::EMR::InstanceGroupConfig.Configuration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-configuration.html | AWS::EMR::InstanceGroupConfig.Configuration}
 */
export interface EMRInstanceGroupConfigConfiguration {
  Classification?: string;
  ConfigurationProperties?: Record<string, any>;
  Configurations?: any[];
}
/**
 * Type definition for AWS::EMR::InstanceGroupConfig.EbsBlockDeviceConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-ebsconfiguration-ebsblockdeviceconfig.html | AWS::EMR::InstanceGroupConfig.EbsBlockDeviceConfig}
 */
export interface EMRInstanceGroupConfigEbsBlockDeviceConfig {
  VolumeSpecification: EMRInstanceGroupConfigVolumeSpecification;
  VolumesPerInstance?: number;
}
/**
 * Type definition for AWS::EMR::InstanceGroupConfig.EbsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-ebsconfiguration.html | AWS::EMR::InstanceGroupConfig.EbsConfiguration}
 */
export interface EMRInstanceGroupConfigEbsConfiguration {
  EbsBlockDeviceConfigs?: any[];
  EbsOptimized?: boolean;
}
/**
 * Type definition for AWS::EMR::InstanceGroupConfig.MetricDimension
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-instancegroupconfig-metricdimension.html | AWS::EMR::InstanceGroupConfig.MetricDimension}
 */
export interface EMRInstanceGroupConfigMetricDimension {
  Key: string;
  Value: string;
}
/**
 * Type definition for AWS::EMR::InstanceGroupConfig.ScalingAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-instancegroupconfig-scalingaction.html | AWS::EMR::InstanceGroupConfig.ScalingAction}
 */
export interface EMRInstanceGroupConfigScalingAction {
  Market?: string;
  SimpleScalingPolicyConfiguration: EMRInstanceGroupConfigSimpleScalingPolicyConfiguration;
}
/**
 * Type definition for AWS::EMR::InstanceGroupConfig.ScalingConstraints
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-instancegroupconfig-scalingconstraints.html | AWS::EMR::InstanceGroupConfig.ScalingConstraints}
 */
export interface EMRInstanceGroupConfigScalingConstraints {
  MaxCapacity: number;
  MinCapacity: number;
}
/**
 * Type definition for AWS::EMR::InstanceGroupConfig.ScalingRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-instancegroupconfig-scalingrule.html | AWS::EMR::InstanceGroupConfig.ScalingRule}
 */
export interface EMRInstanceGroupConfigScalingRule {
  Action: EMRInstanceGroupConfigScalingAction;
  Description?: string;
  Name: string;
  Trigger: EMRInstanceGroupConfigScalingTrigger;
}
/**
 * Type definition for AWS::EMR::InstanceGroupConfig.ScalingTrigger
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-instancegroupconfig-scalingtrigger.html | AWS::EMR::InstanceGroupConfig.ScalingTrigger}
 */
export interface EMRInstanceGroupConfigScalingTrigger {
  CloudWatchAlarmDefinition: EMRInstanceGroupConfigCloudWatchAlarmDefinition;
}
/**
 * Type definition for AWS::EMR::InstanceGroupConfig.SimpleScalingPolicyConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-instancegroupconfig-simplescalingpolicyconfiguration.html | AWS::EMR::InstanceGroupConfig.SimpleScalingPolicyConfiguration}
 */
export interface EMRInstanceGroupConfigSimpleScalingPolicyConfiguration {
  AdjustmentType?: string;
  CoolDown?: number;
  ScalingAdjustment: number;
}
/**
 * Type definition for AWS::EMR::InstanceGroupConfig.VolumeSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-ebsconfiguration-ebsblockdeviceconfig-volumespecification.html | AWS::EMR::InstanceGroupConfig.VolumeSpecification}
 */
export interface EMRInstanceGroupConfigVolumeSpecification {
  Iops?: number;
  SizeInGB: number;
  Throughput?: number;
  VolumeType: string;
}
/**
 * Type definition for AWS::EMR::Step.HadoopJarStepConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-step-hadoopjarstepconfig.html | AWS::EMR::Step.HadoopJarStepConfig}
 */
export interface EMRStepHadoopJarStepConfig {
  Args?: any[];
  Jar: string;
  MainClass?: string;
  StepProperties?: any[];
}
/**
 * Type definition for AWS::EMR::Step.KeyValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-step-keyvalue.html | AWS::EMR::Step.KeyValue}
 */
export interface EMRStepKeyValue {
  Key?: string;
  Value?: string;
}
/**
 * Type definition for AWS::EMR::Cluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticmapreduce-cluster.html | AWS::EMR::Cluster}
 */
export interface EMRClusterProps {
  AdditionalInfo?: object;
  Applications?: any[];
  AutoScalingRole?: string;
  AutoTerminationPolicy?: EMRClusterAutoTerminationPolicy;
  BootstrapActions?: any[];
  Configurations?: any[];
  CustomAmiId?: string;
  EbsRootVolumeSize?: number;
  Instances: EMRClusterJobFlowInstancesConfig;
  JobFlowRole: string;
  KerberosAttributes?: EMRClusterKerberosAttributes;
  LogEncryptionKmsKeyId?: string;
  LogUri?: string;
  ManagedScalingPolicy?: EMRClusterManagedScalingPolicy;
  Name: string;
  OSReleaseLabel?: string;
  ReleaseLabel?: string;
  ScaleDownBehavior?: string;
  SecurityConfiguration?: string;
  ServiceRole: string;
  StepConcurrencyLevel?: number;
  Steps?: any[];
  Tags?: Tag[];
  VisibleToAllUsers?: boolean;
}
/**
 * Attributes type definition for AWS::EMR::Cluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticmapreduce-cluster.html | AWS::EMR::Cluster}
 */
export interface EMRClusterAttribs {
  MasterPublicDNS?: string;
}
/**
 * Resource class for AWS::EMR::Cluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticmapreduce-cluster.html | AWS::EMR::Cluster}
 */
export class EMRCluster extends ResourceBase<
  "AWS::EMR::Cluster",
  EMRClusterProps,
  EMRClusterAttribs
> {
  public static readonly Type = "AWS::EMR::Cluster";
  public static readonly AttributeNames: readonly (keyof EMRClusterAttribs)[] =
    ["MasterPublicDNS"];
  constructor(
    logicalId: string,
    properties: EMRClusterProps,
    options?: ResourceOptions,
  ) {
    super(
      EMRCluster.Type,
      EMRCluster.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EMR::InstanceFleetConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticmapreduce-instancefleetconfig.html | AWS::EMR::InstanceFleetConfig}
 */
export interface EMRInstanceFleetConfigProps {
  ClusterId: string;
  InstanceFleetType: string;
  InstanceTypeConfigs?: any[];
  LaunchSpecifications?: EMRInstanceFleetConfigInstanceFleetProvisioningSpecifications;
  Name?: string;
  TargetOnDemandCapacity?: number;
  TargetSpotCapacity?: number;
}
/**
 * Resource class for AWS::EMR::InstanceFleetConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticmapreduce-instancefleetconfig.html | AWS::EMR::InstanceFleetConfig}
 */
export class EMRInstanceFleetConfig extends ResourceBase<
  "AWS::EMR::InstanceFleetConfig",
  EMRInstanceFleetConfigProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::EMR::InstanceFleetConfig";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: EMRInstanceFleetConfigProps,
    options?: ResourceOptions,
  ) {
    super(
      EMRInstanceFleetConfig.Type,
      EMRInstanceFleetConfig.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EMR::InstanceGroupConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-instancegroupconfig.html | AWS::EMR::InstanceGroupConfig}
 */
export interface EMRInstanceGroupConfigProps {
  AutoScalingPolicy?: EMRInstanceGroupConfigAutoScalingPolicy;
  BidPrice?: string;
  Configurations?: any[];
  CustomAmiId?: string;
  EbsConfiguration?: EMRInstanceGroupConfigEbsConfiguration;
  InstanceCount: number;
  InstanceRole: string;
  InstanceType: string;
  JobFlowId: string;
  Market?: string;
  Name?: string;
}
/**
 * Resource class for AWS::EMR::InstanceGroupConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-instancegroupconfig.html | AWS::EMR::InstanceGroupConfig}
 */
export class EMRInstanceGroupConfig extends ResourceBase<
  "AWS::EMR::InstanceGroupConfig",
  EMRInstanceGroupConfigProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::EMR::InstanceGroupConfig";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: EMRInstanceGroupConfigProps,
    options?: ResourceOptions,
  ) {
    super(
      EMRInstanceGroupConfig.Type,
      EMRInstanceGroupConfig.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EMR::SecurityConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-securityconfiguration.html | AWS::EMR::SecurityConfiguration}
 */
export interface EMRSecurityConfigurationProps {
  SecurityConfiguration: object;
  Name?: string;
}
/**
 * Resource class for AWS::EMR::SecurityConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-securityconfiguration.html | AWS::EMR::SecurityConfiguration}
 */
export class EMRSecurityConfiguration extends ResourceBase<
  "AWS::EMR::SecurityConfiguration",
  EMRSecurityConfigurationProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::EMR::SecurityConfiguration";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: EMRSecurityConfigurationProps,
    options?: ResourceOptions,
  ) {
    super(
      EMRSecurityConfiguration.Type,
      EMRSecurityConfiguration.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EMR::Step
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-step.html | AWS::EMR::Step}
 */
export interface EMRStepProps {
  ActionOnFailure: string;
  HadoopJarStep: EMRStepHadoopJarStepConfig;
  JobFlowId: string;
  Name: string;
}
/**
 * Resource class for AWS::EMR::Step
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-step.html | AWS::EMR::Step}
 */
export class EMRStep extends ResourceBase<
  "AWS::EMR::Step",
  EMRStepProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::EMR::Step";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: EMRStepProps,
    options?: ResourceOptions,
  ) {
    super(EMRStep.Type, EMRStep.AttributeNames, logicalId, properties, options);
  }
}
/**
 * Type definition for AWS::EMR::Studio
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-studio.html | AWS::EMR::Studio}
 */
export interface EMRStudioProps {
  WorkspaceSecurityGroupId: string;
  Description?: string;
  DefaultS3Location: string;
  SubnetIds: any[];
  IdpAuthUrl?: string;
  Name: string;
  ServiceRole: string;
  VpcId: string;
  EngineSecurityGroupId: string;
  UserRole?: string;
  IdpRelayStateParameterName?: string;
  AuthMode: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EMR::Studio
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-studio.html | AWS::EMR::Studio}
 */
export interface EMRStudioAttribs {
  Arn?: string;
  StudioId?: string;
  Url?: string;
}
/**
 * Resource class for AWS::EMR::Studio
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-studio.html | AWS::EMR::Studio}
 */
export class EMRStudio extends ResourceBase<
  "AWS::EMR::Studio",
  EMRStudioProps,
  EMRStudioAttribs
> {
  public static readonly Type = "AWS::EMR::Studio";
  public static readonly AttributeNames: readonly (keyof EMRStudioAttribs)[] = [
    "Arn",
    "StudioId",
    "Url",
  ];
  constructor(
    logicalId: string,
    properties: EMRStudioProps,
    options?: ResourceOptions,
  ) {
    super(
      EMRStudio.Type,
      EMRStudio.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EMR::StudioSessionMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-studiosessionmapping.html | AWS::EMR::StudioSessionMapping}
 */
export interface EMRStudioSessionMappingProps {
  IdentityType: string;
  SessionPolicyArn: string;
  StudioId: string;
  IdentityName: string;
}
/**
 * Resource class for AWS::EMR::StudioSessionMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-studiosessionmapping.html | AWS::EMR::StudioSessionMapping}
 */
export class EMRStudioSessionMapping extends ResourceBase<
  "AWS::EMR::StudioSessionMapping",
  EMRStudioSessionMappingProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::EMR::StudioSessionMapping";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: EMRStudioSessionMappingProps,
    options?: ResourceOptions,
  ) {
    super(
      EMRStudioSessionMapping.Type,
      EMRStudioSessionMapping.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EMR::WALWorkspace
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-walworkspace.html | AWS::EMR::WALWorkspace}
 */
export interface EMRWALWorkspaceProps {
  WALWorkspaceName?: string;
  Tags?: Tag[];
}
/**
 * Resource class for AWS::EMR::WALWorkspace
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-walworkspace.html | AWS::EMR::WALWorkspace}
 */
export class EMRWALWorkspace extends ResourceBase<
  "AWS::EMR::WALWorkspace",
  EMRWALWorkspaceProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::EMR::WALWorkspace";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: EMRWALWorkspaceProps,
    options?: ResourceOptions,
  ) {
    super(
      EMRWALWorkspace.Type,
      EMRWALWorkspace.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
