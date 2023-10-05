import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::AutoScaling::AutoScalingGroup.AcceleratorCountRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-acceleratorcountrequest.html | AWS::AutoScaling::AutoScalingGroup.AcceleratorCountRequest}
 */
export interface AutoScalingAutoScalingGroupAcceleratorCountRequest {
  Max?: number;
  Min?: number;
}
/**
 * Type definition for AWS::AutoScaling::AutoScalingGroup.AcceleratorTotalMemoryMiBRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-acceleratortotalmemorymibrequest.html | AWS::AutoScaling::AutoScalingGroup.AcceleratorTotalMemoryMiBRequest}
 */
export interface AutoScalingAutoScalingGroupAcceleratorTotalMemoryMiBRequest {
  Max?: number;
  Min?: number;
}
/**
 * Type definition for AWS::AutoScaling::AutoScalingGroup.BaselineEbsBandwidthMbpsRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-baselineebsbandwidthmbpsrequest.html | AWS::AutoScaling::AutoScalingGroup.BaselineEbsBandwidthMbpsRequest}
 */
export interface AutoScalingAutoScalingGroupBaselineEbsBandwidthMbpsRequest {
  Max?: number;
  Min?: number;
}
/**
 * Type definition for AWS::AutoScaling::AutoScalingGroup.InstanceRequirements
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-as-mixedinstancespolicy-instancerequirements.html | AWS::AutoScaling::AutoScalingGroup.InstanceRequirements}
 */
export interface AutoScalingAutoScalingGroupInstanceRequirements {
  AcceleratorCount?: AutoScalingAutoScalingGroupAcceleratorCountRequest;
  AcceleratorManufacturers?: any[];
  AcceleratorNames?: any[];
  AcceleratorTotalMemoryMiB?: AutoScalingAutoScalingGroupAcceleratorTotalMemoryMiBRequest;
  AcceleratorTypes?: any[];
  AllowedInstanceTypes?: any[];
  BareMetal?: string;
  BaselineEbsBandwidthMbps?: AutoScalingAutoScalingGroupBaselineEbsBandwidthMbpsRequest;
  BurstablePerformance?: string;
  CpuManufacturers?: any[];
  ExcludedInstanceTypes?: any[];
  InstanceGenerations?: any[];
  LocalStorage?: string;
  LocalStorageTypes?: any[];
  MemoryGiBPerVCpu?: AutoScalingAutoScalingGroupMemoryGiBPerVCpuRequest;
  MemoryMiB?: AutoScalingAutoScalingGroupMemoryMiBRequest;
  NetworkBandwidthGbps?: AutoScalingAutoScalingGroupNetworkBandwidthGbpsRequest;
  NetworkInterfaceCount?: AutoScalingAutoScalingGroupNetworkInterfaceCountRequest;
  OnDemandMaxPricePercentageOverLowestPrice?: number;
  RequireHibernateSupport?: boolean;
  SpotMaxPricePercentageOverLowestPrice?: number;
  TotalLocalStorageGB?: AutoScalingAutoScalingGroupTotalLocalStorageGBRequest;
  VCpuCount?: AutoScalingAutoScalingGroupVCpuCountRequest;
}
/**
 * Type definition for AWS::AutoScaling::AutoScalingGroup.InstancesDistribution
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-as-mixedinstancespolicy-instancesdistribution.html | AWS::AutoScaling::AutoScalingGroup.InstancesDistribution}
 */
export interface AutoScalingAutoScalingGroupInstancesDistribution {
  OnDemandAllocationStrategy?: string;
  OnDemandBaseCapacity?: number;
  OnDemandPercentageAboveBaseCapacity?: number;
  SpotAllocationStrategy?: string;
  SpotInstancePools?: number;
  SpotMaxPrice?: string;
}
/**
 * Type definition for AWS::AutoScaling::AutoScalingGroup.LaunchTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-as-mixedinstancespolicy-launchtemplate.html | AWS::AutoScaling::AutoScalingGroup.LaunchTemplate}
 */
export interface AutoScalingAutoScalingGroupLaunchTemplate {
  LaunchTemplateSpecification: AutoScalingAutoScalingGroupLaunchTemplateSpecification;
  Overrides?: any[];
}
/**
 * Type definition for AWS::AutoScaling::AutoScalingGroup.LaunchTemplateOverrides
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-as-mixedinstancespolicy-launchtemplateoverrides.html | AWS::AutoScaling::AutoScalingGroup.LaunchTemplateOverrides}
 */
export interface AutoScalingAutoScalingGroupLaunchTemplateOverrides {
  InstanceRequirements?: AutoScalingAutoScalingGroupInstanceRequirements;
  InstanceType?: string;
  LaunchTemplateSpecification?: AutoScalingAutoScalingGroupLaunchTemplateSpecification;
  WeightedCapacity?: string;
}
/**
 * Type definition for AWS::AutoScaling::AutoScalingGroup.LaunchTemplateSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-launchtemplatespecification.html | AWS::AutoScaling::AutoScalingGroup.LaunchTemplateSpecification}
 */
export interface AutoScalingAutoScalingGroupLaunchTemplateSpecification {
  LaunchTemplateId?: string;
  LaunchTemplateName?: string;
  Version: string;
}
/**
 * Type definition for AWS::AutoScaling::AutoScalingGroup.LifecycleHookSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-lifecyclehookspecification.html | AWS::AutoScaling::AutoScalingGroup.LifecycleHookSpecification}
 */
export interface AutoScalingAutoScalingGroupLifecycleHookSpecification {
  DefaultResult?: string;
  HeartbeatTimeout?: number;
  LifecycleHookName: string;
  LifecycleTransition: string;
  NotificationMetadata?: string;
  NotificationTargetARN?: string;
  RoleARN?: string;
}
/**
 * Type definition for AWS::AutoScaling::AutoScalingGroup.MemoryGiBPerVCpuRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-memorygibpervcpurequest.html | AWS::AutoScaling::AutoScalingGroup.MemoryGiBPerVCpuRequest}
 */
export interface AutoScalingAutoScalingGroupMemoryGiBPerVCpuRequest {
  Max?: number;
  Min?: number;
}
/**
 * Type definition for AWS::AutoScaling::AutoScalingGroup.MemoryMiBRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-memorymibrequest.html | AWS::AutoScaling::AutoScalingGroup.MemoryMiBRequest}
 */
export interface AutoScalingAutoScalingGroupMemoryMiBRequest {
  Max?: number;
  Min?: number;
}
/**
 * Type definition for AWS::AutoScaling::AutoScalingGroup.MetricsCollection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-metricscollection.html | AWS::AutoScaling::AutoScalingGroup.MetricsCollection}
 */
export interface AutoScalingAutoScalingGroupMetricsCollection {
  Granularity: string;
  Metrics?: any[];
}
/**
 * Type definition for AWS::AutoScaling::AutoScalingGroup.MixedInstancesPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-as-group-mixedinstancespolicy.html | AWS::AutoScaling::AutoScalingGroup.MixedInstancesPolicy}
 */
export interface AutoScalingAutoScalingGroupMixedInstancesPolicy {
  InstancesDistribution?: AutoScalingAutoScalingGroupInstancesDistribution;
  LaunchTemplate: AutoScalingAutoScalingGroupLaunchTemplate;
}
/**
 * Type definition for AWS::AutoScaling::AutoScalingGroup.NetworkBandwidthGbpsRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-networkbandwidthgbpsrequest.html | AWS::AutoScaling::AutoScalingGroup.NetworkBandwidthGbpsRequest}
 */
export interface AutoScalingAutoScalingGroupNetworkBandwidthGbpsRequest {
  Max?: number;
  Min?: number;
}
/**
 * Type definition for AWS::AutoScaling::AutoScalingGroup.NetworkInterfaceCountRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-networkinterfacecountrequest.html | AWS::AutoScaling::AutoScalingGroup.NetworkInterfaceCountRequest}
 */
export interface AutoScalingAutoScalingGroupNetworkInterfaceCountRequest {
  Max?: number;
  Min?: number;
}
/**
 * Type definition for AWS::AutoScaling::AutoScalingGroup.NotificationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-notificationconfigurations.html | AWS::AutoScaling::AutoScalingGroup.NotificationConfiguration}
 */
export interface AutoScalingAutoScalingGroupNotificationConfiguration {
  NotificationTypes?: any[];
  TopicARN: string;
}
/**
 * Type definition for AWS::AutoScaling::AutoScalingGroup.TagProperty
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-tags.html | AWS::AutoScaling::AutoScalingGroup.TagProperty}
 */
export interface AutoScalingAutoScalingGroupTagProperty {
  Key: string;
  PropagateAtLaunch: boolean;
  Value: string;
}
/**
 * Type definition for AWS::AutoScaling::AutoScalingGroup.TotalLocalStorageGBRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-totallocalstoragegbrequest.html | AWS::AutoScaling::AutoScalingGroup.TotalLocalStorageGBRequest}
 */
export interface AutoScalingAutoScalingGroupTotalLocalStorageGBRequest {
  Max?: number;
  Min?: number;
}
/**
 * Type definition for AWS::AutoScaling::AutoScalingGroup.VCpuCountRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-vcpucountrequest.html | AWS::AutoScaling::AutoScalingGroup.VCpuCountRequest}
 */
export interface AutoScalingAutoScalingGroupVCpuCountRequest {
  Max?: number;
  Min?: number;
}
/**
 * Type definition for AWS::AutoScaling::LaunchConfiguration.BlockDevice
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-launchconfiguration-blockdevice.html | AWS::AutoScaling::LaunchConfiguration.BlockDevice}
 */
export interface AutoScalingLaunchConfigurationBlockDevice {
  SnapshotId?: string;
  VolumeType?: string;
  Encrypted?: boolean;
  Throughput?: number;
  Iops?: number;
  VolumeSize?: number;
  DeleteOnTermination?: boolean;
}
/**
 * Type definition for AWS::AutoScaling::LaunchConfiguration.BlockDeviceMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-launchconfiguration-blockdevicemapping.html | AWS::AutoScaling::LaunchConfiguration.BlockDeviceMapping}
 */
export interface AutoScalingLaunchConfigurationBlockDeviceMapping {
  Ebs?: AutoScalingLaunchConfigurationBlockDevice;
  NoDevice?: boolean;
  VirtualName?: string;
  DeviceName: string;
}
/**
 * Type definition for AWS::AutoScaling::LaunchConfiguration.MetadataOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-launchconfiguration-metadataoptions.html | AWS::AutoScaling::LaunchConfiguration.MetadataOptions}
 */
export interface AutoScalingLaunchConfigurationMetadataOptions {
  HttpPutResponseHopLimit?: number;
  HttpTokens?: string;
  HttpEndpoint?: string;
}
/**
 * Type definition for AWS::AutoScaling::ScalingPolicy.CustomizedMetricSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-customizedmetricspecification.html | AWS::AutoScaling::ScalingPolicy.CustomizedMetricSpecification}
 */
export interface AutoScalingScalingPolicyCustomizedMetricSpecification {
  MetricName: string;
  Statistic: string;
  Dimensions?: any[];
  Unit?: string;
  Namespace: string;
}
/**
 * Type definition for AWS::AutoScaling::ScalingPolicy.Metric
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-metric.html | AWS::AutoScaling::ScalingPolicy.Metric}
 */
export interface AutoScalingScalingPolicyMetric {
  MetricName: string;
  Dimensions?: any[];
  Namespace: string;
}
/**
 * Type definition for AWS::AutoScaling::ScalingPolicy.MetricDataQuery
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-metricdataquery.html | AWS::AutoScaling::ScalingPolicy.MetricDataQuery}
 */
export interface AutoScalingScalingPolicyMetricDataQuery {
  ReturnData?: boolean;
  Expression?: string;
  Label?: string;
  MetricStat?: AutoScalingScalingPolicyMetricStat;
  Id: string;
}
/**
 * Type definition for AWS::AutoScaling::ScalingPolicy.MetricDimension
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-metricdimension.html | AWS::AutoScaling::ScalingPolicy.MetricDimension}
 */
export interface AutoScalingScalingPolicyMetricDimension {
  Value: string;
  Name: string;
}
/**
 * Type definition for AWS::AutoScaling::ScalingPolicy.MetricStat
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-metricstat.html | AWS::AutoScaling::ScalingPolicy.MetricStat}
 */
export interface AutoScalingScalingPolicyMetricStat {
  Stat: string;
  Metric: AutoScalingScalingPolicyMetric;
  Unit?: string;
}
/**
 * Type definition for AWS::AutoScaling::ScalingPolicy.PredefinedMetricSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-predefinedmetricspecification.html | AWS::AutoScaling::ScalingPolicy.PredefinedMetricSpecification}
 */
export interface AutoScalingScalingPolicyPredefinedMetricSpecification {
  PredefinedMetricType: string;
  ResourceLabel?: string;
}
/**
 * Type definition for AWS::AutoScaling::ScalingPolicy.PredictiveScalingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-predictivescalingconfiguration.html | AWS::AutoScaling::ScalingPolicy.PredictiveScalingConfiguration}
 */
export interface AutoScalingScalingPolicyPredictiveScalingConfiguration {
  MaxCapacityBreachBehavior?: string;
  MaxCapacityBuffer?: number;
  Mode?: string;
  MetricSpecifications: any[];
  SchedulingBufferTime?: number;
}
/**
 * Type definition for AWS::AutoScaling::ScalingPolicy.PredictiveScalingCustomizedCapacityMetric
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-predictivescalingcustomizedcapacitymetric.html | AWS::AutoScaling::ScalingPolicy.PredictiveScalingCustomizedCapacityMetric}
 */
export interface AutoScalingScalingPolicyPredictiveScalingCustomizedCapacityMetric {
  MetricDataQueries: any[];
}
/**
 * Type definition for AWS::AutoScaling::ScalingPolicy.PredictiveScalingCustomizedLoadMetric
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-predictivescalingcustomizedloadmetric.html | AWS::AutoScaling::ScalingPolicy.PredictiveScalingCustomizedLoadMetric}
 */
export interface AutoScalingScalingPolicyPredictiveScalingCustomizedLoadMetric {
  MetricDataQueries: any[];
}
/**
 * Type definition for AWS::AutoScaling::ScalingPolicy.PredictiveScalingCustomizedScalingMetric
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-predictivescalingcustomizedscalingmetric.html | AWS::AutoScaling::ScalingPolicy.PredictiveScalingCustomizedScalingMetric}
 */
export interface AutoScalingScalingPolicyPredictiveScalingCustomizedScalingMetric {
  MetricDataQueries: any[];
}
/**
 * Type definition for AWS::AutoScaling::ScalingPolicy.PredictiveScalingMetricSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-predictivescalingmetricspecification.html | AWS::AutoScaling::ScalingPolicy.PredictiveScalingMetricSpecification}
 */
export interface AutoScalingScalingPolicyPredictiveScalingMetricSpecification {
  CustomizedLoadMetricSpecification?: AutoScalingScalingPolicyPredictiveScalingCustomizedLoadMetric;
  PredefinedLoadMetricSpecification?: AutoScalingScalingPolicyPredictiveScalingPredefinedLoadMetric;
  TargetValue: number;
  PredefinedScalingMetricSpecification?: AutoScalingScalingPolicyPredictiveScalingPredefinedScalingMetric;
  CustomizedCapacityMetricSpecification?: AutoScalingScalingPolicyPredictiveScalingCustomizedCapacityMetric;
  CustomizedScalingMetricSpecification?: AutoScalingScalingPolicyPredictiveScalingCustomizedScalingMetric;
  PredefinedMetricPairSpecification?: AutoScalingScalingPolicyPredictiveScalingPredefinedMetricPair;
}
/**
 * Type definition for AWS::AutoScaling::ScalingPolicy.PredictiveScalingPredefinedLoadMetric
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-predictivescalingpredefinedloadmetric.html | AWS::AutoScaling::ScalingPolicy.PredictiveScalingPredefinedLoadMetric}
 */
export interface AutoScalingScalingPolicyPredictiveScalingPredefinedLoadMetric {
  PredefinedMetricType: string;
  ResourceLabel?: string;
}
/**
 * Type definition for AWS::AutoScaling::ScalingPolicy.PredictiveScalingPredefinedMetricPair
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-predictivescalingpredefinedmetricpair.html | AWS::AutoScaling::ScalingPolicy.PredictiveScalingPredefinedMetricPair}
 */
export interface AutoScalingScalingPolicyPredictiveScalingPredefinedMetricPair {
  PredefinedMetricType: string;
  ResourceLabel?: string;
}
/**
 * Type definition for AWS::AutoScaling::ScalingPolicy.PredictiveScalingPredefinedScalingMetric
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-predictivescalingpredefinedscalingmetric.html | AWS::AutoScaling::ScalingPolicy.PredictiveScalingPredefinedScalingMetric}
 */
export interface AutoScalingScalingPolicyPredictiveScalingPredefinedScalingMetric {
  PredefinedMetricType: string;
  ResourceLabel?: string;
}
/**
 * Type definition for AWS::AutoScaling::ScalingPolicy.StepAdjustment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-stepadjustment.html | AWS::AutoScaling::ScalingPolicy.StepAdjustment}
 */
export interface AutoScalingScalingPolicyStepAdjustment {
  MetricIntervalUpperBound?: number;
  MetricIntervalLowerBound?: number;
  ScalingAdjustment: number;
}
/**
 * Type definition for AWS::AutoScaling::ScalingPolicy.TargetTrackingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-targettrackingconfiguration.html | AWS::AutoScaling::ScalingPolicy.TargetTrackingConfiguration}
 */
export interface AutoScalingScalingPolicyTargetTrackingConfiguration {
  TargetValue: number;
  CustomizedMetricSpecification?: AutoScalingScalingPolicyCustomizedMetricSpecification;
  DisableScaleIn?: boolean;
  PredefinedMetricSpecification?: AutoScalingScalingPolicyPredefinedMetricSpecification;
}
/**
 * Type definition for AWS::AutoScaling::WarmPool.InstanceReusePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-warmpool-instancereusepolicy.html | AWS::AutoScaling::WarmPool.InstanceReusePolicy}
 */
export interface AutoScalingWarmPoolInstanceReusePolicy {
  ReuseOnScaleIn?: boolean;
}
/**
 * Type definition for AWS::AutoScaling::AutoScalingGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-group.html | AWS::AutoScaling::AutoScalingGroup}
 */
export interface AutoScalingAutoScalingGroupProps {
  AutoScalingGroupName?: string;
  AvailabilityZones?: any[];
  CapacityRebalance?: boolean;
  Context?: string;
  Cooldown?: string;
  DefaultInstanceWarmup?: number;
  DesiredCapacity?: string;
  DesiredCapacityType?: string;
  HealthCheckGracePeriod?: number;
  HealthCheckType?: string;
  InstanceId?: string;
  LaunchConfigurationName?: string;
  LaunchTemplate?: AutoScalingAutoScalingGroupLaunchTemplateSpecification;
  LifecycleHookSpecificationList?: any[];
  LoadBalancerNames?: any[];
  MaxInstanceLifetime?: number;
  MaxSize: string;
  MetricsCollection?: any[];
  MinSize: string;
  MixedInstancesPolicy?: AutoScalingAutoScalingGroupMixedInstancesPolicy;
  NewInstancesProtectedFromScaleIn?: boolean;
  NotificationConfigurations?: any[];
  PlacementGroup?: string;
  ServiceLinkedRoleARN?: string;
  Tags?: Tag[];
  TargetGroupARNs?: any[];
  TerminationPolicies?: any[];
  VPCZoneIdentifier?: any[];
}
/**
 * Attributes type definition for AWS::AutoScaling::AutoScalingGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-group.html | AWS::AutoScaling::AutoScalingGroup}
 */
export interface AutoScalingAutoScalingGroupAttribs {
  LaunchConfigurationName?: string;
  LaunchTemplateSpecification?: string;
  MixedInstancesPolicy?: string;
  PlacementGroup?: string;
  VPCZoneIdentifier?: string;
}
/**
 * Resource class for AWS::AutoScaling::AutoScalingGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-group.html | AWS::AutoScaling::AutoScalingGroup}
 */
export class AutoScalingAutoScalingGroup extends ResourceBase<
  "AWS::AutoScaling::AutoScalingGroup",
  AutoScalingAutoScalingGroupProps,
  AutoScalingAutoScalingGroupAttribs
> {
  public static readonly Type = "AWS::AutoScaling::AutoScalingGroup";
  public static readonly AttributeNames: readonly (keyof AutoScalingAutoScalingGroupAttribs)[] =
    [
      "LaunchConfigurationName",
      "LaunchTemplateSpecification",
      "MixedInstancesPolicy",
      "PlacementGroup",
      "VPCZoneIdentifier",
    ];
  constructor(
    logicalId: string,
    properties: AutoScalingAutoScalingGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      AutoScalingAutoScalingGroup.Type,
      AutoScalingAutoScalingGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AutoScaling::LaunchConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-launchconfiguration.html | AWS::AutoScaling::LaunchConfiguration}
 */
export interface AutoScalingLaunchConfigurationProps {
  PlacementTenancy?: string;
  SecurityGroups?: any[];
  LaunchConfigurationName?: string;
  MetadataOptions?: AutoScalingLaunchConfigurationMetadataOptions;
  InstanceId?: string;
  UserData?: string;
  ClassicLinkVPCSecurityGroups?: any[];
  BlockDeviceMappings?: any[];
  IamInstanceProfile?: string;
  KernelId?: string;
  AssociatePublicIpAddress?: boolean;
  ClassicLinkVPCId?: string;
  EbsOptimized?: boolean;
  KeyName?: string;
  SpotPrice?: string;
  ImageId: string;
  InstanceType: string;
  RamDiskId?: string;
  InstanceMonitoring?: boolean;
}
/**
 * Resource class for AWS::AutoScaling::LaunchConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-launchconfiguration.html | AWS::AutoScaling::LaunchConfiguration}
 */
export class AutoScalingLaunchConfiguration extends ResourceBase<
  "AWS::AutoScaling::LaunchConfiguration",
  AutoScalingLaunchConfigurationProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::AutoScaling::LaunchConfiguration";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: AutoScalingLaunchConfigurationProps,
    options?: ResourceOptions,
  ) {
    super(
      AutoScalingLaunchConfiguration.Type,
      AutoScalingLaunchConfiguration.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AutoScaling::LifecycleHook
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-lifecyclehook.html | AWS::AutoScaling::LifecycleHook}
 */
export interface AutoScalingLifecycleHookProps {
  LifecycleHookName?: string;
  LifecycleTransition: string;
  AutoScalingGroupName: string;
  HeartbeatTimeout?: number;
  NotificationMetadata?: string;
  DefaultResult?: string;
  NotificationTargetARN?: string;
  RoleARN?: string;
}
/**
 * Resource class for AWS::AutoScaling::LifecycleHook
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-lifecyclehook.html | AWS::AutoScaling::LifecycleHook}
 */
export class AutoScalingLifecycleHook extends ResourceBase<
  "AWS::AutoScaling::LifecycleHook",
  AutoScalingLifecycleHookProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::AutoScaling::LifecycleHook";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: AutoScalingLifecycleHookProps,
    options?: ResourceOptions,
  ) {
    super(
      AutoScalingLifecycleHook.Type,
      AutoScalingLifecycleHook.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AutoScaling::ScalingPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-scalingpolicy.html | AWS::AutoScaling::ScalingPolicy}
 */
export interface AutoScalingScalingPolicyProps {
  MetricAggregationType?: string;
  PolicyType?: string;
  PredictiveScalingConfiguration?: AutoScalingScalingPolicyPredictiveScalingConfiguration;
  ScalingAdjustment?: number;
  Cooldown?: string;
  StepAdjustments?: any[];
  AutoScalingGroupName: string;
  MinAdjustmentMagnitude?: number;
  TargetTrackingConfiguration?: AutoScalingScalingPolicyTargetTrackingConfiguration;
  EstimatedInstanceWarmup?: number;
  AdjustmentType?: string;
}
/**
 * Attributes type definition for AWS::AutoScaling::ScalingPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-scalingpolicy.html | AWS::AutoScaling::ScalingPolicy}
 */
export interface AutoScalingScalingPolicyAttribs {
  PolicyName?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::AutoScaling::ScalingPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-scalingpolicy.html | AWS::AutoScaling::ScalingPolicy}
 */
export class AutoScalingScalingPolicy extends ResourceBase<
  "AWS::AutoScaling::ScalingPolicy",
  AutoScalingScalingPolicyProps,
  AutoScalingScalingPolicyAttribs
> {
  public static readonly Type = "AWS::AutoScaling::ScalingPolicy";
  public static readonly AttributeNames: readonly (keyof AutoScalingScalingPolicyAttribs)[] =
    ["PolicyName", "Arn"];
  constructor(
    logicalId: string,
    properties: AutoScalingScalingPolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      AutoScalingScalingPolicy.Type,
      AutoScalingScalingPolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AutoScaling::ScheduledAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-scheduledaction.html | AWS::AutoScaling::ScheduledAction}
 */
export interface AutoScalingScheduledActionProps {
  MinSize?: number;
  Recurrence?: string;
  TimeZone?: string;
  EndTime?: string;
  AutoScalingGroupName: string;
  StartTime?: string;
  DesiredCapacity?: number;
  MaxSize?: number;
}
/**
 * Attributes type definition for AWS::AutoScaling::ScheduledAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-scheduledaction.html | AWS::AutoScaling::ScheduledAction}
 */
export interface AutoScalingScheduledActionAttribs {
  ScheduledActionName?: string;
}
/**
 * Resource class for AWS::AutoScaling::ScheduledAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-scheduledaction.html | AWS::AutoScaling::ScheduledAction}
 */
export class AutoScalingScheduledAction extends ResourceBase<
  "AWS::AutoScaling::ScheduledAction",
  AutoScalingScheduledActionProps,
  AutoScalingScheduledActionAttribs
> {
  public static readonly Type = "AWS::AutoScaling::ScheduledAction";
  public static readonly AttributeNames: readonly (keyof AutoScalingScheduledActionAttribs)[] =
    ["ScheduledActionName"];
  constructor(
    logicalId: string,
    properties: AutoScalingScheduledActionProps,
    options?: ResourceOptions,
  ) {
    super(
      AutoScalingScheduledAction.Type,
      AutoScalingScheduledAction.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AutoScaling::WarmPool
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-warmpool.html | AWS::AutoScaling::WarmPool}
 */
export interface AutoScalingWarmPoolProps {
  MinSize?: number;
  MaxGroupPreparedCapacity?: number;
  AutoScalingGroupName: string;
  PoolState?: string;
  InstanceReusePolicy?: AutoScalingWarmPoolInstanceReusePolicy;
}
/**
 * Resource class for AWS::AutoScaling::WarmPool
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-warmpool.html | AWS::AutoScaling::WarmPool}
 */
export class AutoScalingWarmPool extends ResourceBase<
  "AWS::AutoScaling::WarmPool",
  AutoScalingWarmPoolProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::AutoScaling::WarmPool";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: AutoScalingWarmPoolProps,
    options?: ResourceOptions,
  ) {
    super(
      AutoScalingWarmPool.Type,
      AutoScalingWarmPool.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
