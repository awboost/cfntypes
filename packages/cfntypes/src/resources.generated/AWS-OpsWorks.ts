import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::OpsWorks::App.DataSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-app-datasource.html | AWS::OpsWorks::App.DataSource}
 */
export interface OpsWorksAppDataSource {
  Arn?: string;
  DatabaseName?: string;
  Type?: string;
}
/**
 * Type definition for AWS::OpsWorks::App.EnvironmentVariable
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-app-environment.html | AWS::OpsWorks::App.EnvironmentVariable}
 */
export interface OpsWorksAppEnvironmentVariable {
  Key: string;
  Secure?: boolean;
  Value: string;
}
/**
 * Type definition for AWS::OpsWorks::App.Source
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-source.html | AWS::OpsWorks::App.Source}
 */
export interface OpsWorksAppSource {
  Password?: string;
  Revision?: string;
  SshKey?: string;
  Type?: string;
  Url?: string;
  Username?: string;
}
/**
 * Type definition for AWS::OpsWorks::App.SslConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-app-sslconfiguration.html | AWS::OpsWorks::App.SslConfiguration}
 */
export interface OpsWorksAppSslConfiguration {
  Certificate?: string;
  Chain?: string;
  PrivateKey?: string;
}
/**
 * Type definition for AWS::OpsWorks::Instance.BlockDeviceMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-instance-blockdevicemapping.html | AWS::OpsWorks::Instance.BlockDeviceMapping}
 */
export interface OpsWorksInstanceBlockDeviceMapping {
  DeviceName?: string;
  Ebs?: OpsWorksInstanceEbsBlockDevice;
  NoDevice?: string;
  VirtualName?: string;
}
/**
 * Type definition for AWS::OpsWorks::Instance.EbsBlockDevice
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-instance-ebsblockdevice.html | AWS::OpsWorks::Instance.EbsBlockDevice}
 */
export interface OpsWorksInstanceEbsBlockDevice {
  DeleteOnTermination?: boolean;
  Iops?: number;
  SnapshotId?: string;
  VolumeSize?: number;
  VolumeType?: string;
}
/**
 * Type definition for AWS::OpsWorks::Instance.TimeBasedAutoScaling
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-instance-timebasedautoscaling.html | AWS::OpsWorks::Instance.TimeBasedAutoScaling}
 */
export interface OpsWorksInstanceTimeBasedAutoScaling {
  Friday?: Record<string, any>;
  Monday?: Record<string, any>;
  Saturday?: Record<string, any>;
  Sunday?: Record<string, any>;
  Thursday?: Record<string, any>;
  Tuesday?: Record<string, any>;
  Wednesday?: Record<string, any>;
}
/**
 * Type definition for AWS::OpsWorks::Layer.AutoScalingThresholds
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-loadbasedautoscaling-autoscalingthresholds.html | AWS::OpsWorks::Layer.AutoScalingThresholds}
 */
export interface OpsWorksLayerAutoScalingThresholds {
  CpuThreshold?: number;
  IgnoreMetricsTime?: number;
  InstanceCount?: number;
  LoadThreshold?: number;
  MemoryThreshold?: number;
  ThresholdsWaitTime?: number;
}
/**
 * Type definition for AWS::OpsWorks::Layer.LifecycleEventConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-lifecycleeventconfiguration.html | AWS::OpsWorks::Layer.LifecycleEventConfiguration}
 */
export interface OpsWorksLayerLifecycleEventConfiguration {
  ShutdownEventConfiguration?: OpsWorksLayerShutdownEventConfiguration;
}
/**
 * Type definition for AWS::OpsWorks::Layer.LoadBasedAutoScaling
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-loadbasedautoscaling.html | AWS::OpsWorks::Layer.LoadBasedAutoScaling}
 */
export interface OpsWorksLayerLoadBasedAutoScaling {
  DownScaling?: OpsWorksLayerAutoScalingThresholds;
  Enable?: boolean;
  UpScaling?: OpsWorksLayerAutoScalingThresholds;
}
/**
 * Type definition for AWS::OpsWorks::Layer.Recipes
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-recipes.html | AWS::OpsWorks::Layer.Recipes}
 */
export interface OpsWorksLayerRecipes {
  Configure?: any[];
  Deploy?: any[];
  Setup?: any[];
  Shutdown?: any[];
  Undeploy?: any[];
}
/**
 * Type definition for AWS::OpsWorks::Layer.ShutdownEventConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-lifecycleeventconfiguration-shutdowneventconfiguration.html | AWS::OpsWorks::Layer.ShutdownEventConfiguration}
 */
export interface OpsWorksLayerShutdownEventConfiguration {
  DelayUntilElbConnectionsDrained?: boolean;
  ExecutionTimeout?: number;
}
/**
 * Type definition for AWS::OpsWorks::Layer.VolumeConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-volumeconfiguration.html | AWS::OpsWorks::Layer.VolumeConfiguration}
 */
export interface OpsWorksLayerVolumeConfiguration {
  Encrypted?: boolean;
  Iops?: number;
  MountPoint?: string;
  NumberOfDisks?: number;
  RaidLevel?: number;
  Size?: number;
  VolumeType?: string;
}
/**
 * Type definition for AWS::OpsWorks::Stack.ChefConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-chefconfiguration.html | AWS::OpsWorks::Stack.ChefConfiguration}
 */
export interface OpsWorksStackChefConfiguration {
  BerkshelfVersion?: string;
  ManageBerkshelf?: boolean;
}
/**
 * Type definition for AWS::OpsWorks::Stack.ElasticIp
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-elasticip.html | AWS::OpsWorks::Stack.ElasticIp}
 */
export interface OpsWorksStackElasticIp {
  Ip: string;
  Name?: string;
}
/**
 * Type definition for AWS::OpsWorks::Stack.RdsDbInstance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-rdsdbinstance.html | AWS::OpsWorks::Stack.RdsDbInstance}
 */
export interface OpsWorksStackRdsDbInstance {
  DbPassword: string;
  DbUser: string;
  RdsDbInstanceArn: string;
}
/**
 * Type definition for AWS::OpsWorks::Stack.Source
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-source.html | AWS::OpsWorks::Stack.Source}
 */
export interface OpsWorksStackSource {
  Password?: string;
  Revision?: string;
  SshKey?: string;
  Type?: string;
  Url?: string;
  Username?: string;
}
/**
 * Type definition for AWS::OpsWorks::Stack.StackConfigurationManager
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-stackconfigmanager.html | AWS::OpsWorks::Stack.StackConfigurationManager}
 */
export interface OpsWorksStackStackConfigurationManager {
  Name?: string;
  Version?: string;
}
/**
 * Type definition for AWS::OpsWorks::App
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-app.html | AWS::OpsWorks::App}
 */
export interface OpsWorksAppProps {
  AppSource?: OpsWorksAppSource;
  Attributes?: Record<string, any>;
  DataSources?: any[];
  Description?: string;
  Domains?: any[];
  EnableSsl?: boolean;
  Environment?: any[];
  Name: string;
  Shortname?: string;
  SslConfiguration?: OpsWorksAppSslConfiguration;
  StackId: string;
  Type: string;
}
/**
 * Resource class for AWS::OpsWorks::App
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-app.html | AWS::OpsWorks::App}
 */
export class OpsWorksApp extends ResourceBase<
  "AWS::OpsWorks::App",
  OpsWorksAppProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::OpsWorks::App";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: OpsWorksAppProps,
    options?: ResourceOptions,
  ) {
    super(
      OpsWorksApp.Type,
      OpsWorksApp.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::OpsWorks::ElasticLoadBalancerAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-elbattachment.html | AWS::OpsWorks::ElasticLoadBalancerAttachment}
 */
export interface OpsWorksElasticLoadBalancerAttachmentProps {
  ElasticLoadBalancerName: string;
  LayerId: string;
}
/**
 * Resource class for AWS::OpsWorks::ElasticLoadBalancerAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-elbattachment.html | AWS::OpsWorks::ElasticLoadBalancerAttachment}
 */
export class OpsWorksElasticLoadBalancerAttachment extends ResourceBase<
  "AWS::OpsWorks::ElasticLoadBalancerAttachment",
  OpsWorksElasticLoadBalancerAttachmentProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::OpsWorks::ElasticLoadBalancerAttachment";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: OpsWorksElasticLoadBalancerAttachmentProps,
    options?: ResourceOptions,
  ) {
    super(
      OpsWorksElasticLoadBalancerAttachment.Type,
      OpsWorksElasticLoadBalancerAttachment.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::OpsWorks::Instance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html | AWS::OpsWorks::Instance}
 */
export interface OpsWorksInstanceProps {
  AgentVersion?: string;
  AmiId?: string;
  Architecture?: string;
  AutoScalingType?: string;
  AvailabilityZone?: string;
  BlockDeviceMappings?: any[];
  EbsOptimized?: boolean;
  ElasticIps?: any[];
  Hostname?: string;
  InstallUpdatesOnBoot?: boolean;
  InstanceType: string;
  LayerIds: any[];
  Os?: string;
  RootDeviceType?: string;
  SshKeyName?: string;
  StackId: string;
  SubnetId?: string;
  Tenancy?: string;
  TimeBasedAutoScaling?: OpsWorksInstanceTimeBasedAutoScaling;
  VirtualizationType?: string;
  Volumes?: any[];
}
/**
 * Attributes type definition for AWS::OpsWorks::Instance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html | AWS::OpsWorks::Instance}
 */
export interface OpsWorksInstanceAttribs {
  AvailabilityZone?: string;
  PrivateDnsName?: string;
  PrivateIp?: string;
  PublicDnsName?: string;
  PublicIp?: string;
}
/**
 * Resource class for AWS::OpsWorks::Instance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html | AWS::OpsWorks::Instance}
 */
export class OpsWorksInstance extends ResourceBase<
  "AWS::OpsWorks::Instance",
  OpsWorksInstanceProps,
  OpsWorksInstanceAttribs
> {
  public static readonly Type = "AWS::OpsWorks::Instance";
  public static readonly AttributeNames: readonly (keyof OpsWorksInstanceAttribs)[] =
    [
      "AvailabilityZone",
      "PrivateDnsName",
      "PrivateIp",
      "PublicDnsName",
      "PublicIp",
    ];
  constructor(
    logicalId: string,
    properties: OpsWorksInstanceProps,
    options?: ResourceOptions,
  ) {
    super(
      OpsWorksInstance.Type,
      OpsWorksInstance.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::OpsWorks::Layer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-layer.html | AWS::OpsWorks::Layer}
 */
export interface OpsWorksLayerProps {
  Attributes?: Record<string, any>;
  AutoAssignElasticIps: boolean;
  AutoAssignPublicIps: boolean;
  CustomInstanceProfileArn?: string;
  CustomJson?: object;
  CustomRecipes?: OpsWorksLayerRecipes;
  CustomSecurityGroupIds?: any[];
  EnableAutoHealing: boolean;
  InstallUpdatesOnBoot?: boolean;
  LifecycleEventConfiguration?: OpsWorksLayerLifecycleEventConfiguration;
  LoadBasedAutoScaling?: OpsWorksLayerLoadBasedAutoScaling;
  Name: string;
  Packages?: any[];
  Shortname: string;
  StackId: string;
  Tags?: Tag[];
  Type: string;
  UseEbsOptimizedInstances?: boolean;
  VolumeConfigurations?: any[];
}
/**
 * Resource class for AWS::OpsWorks::Layer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-layer.html | AWS::OpsWorks::Layer}
 */
export class OpsWorksLayer extends ResourceBase<
  "AWS::OpsWorks::Layer",
  OpsWorksLayerProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::OpsWorks::Layer";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: OpsWorksLayerProps,
    options?: ResourceOptions,
  ) {
    super(
      OpsWorksLayer.Type,
      OpsWorksLayer.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::OpsWorks::Stack
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-stack.html | AWS::OpsWorks::Stack}
 */
export interface OpsWorksStackProps {
  AgentVersion?: string;
  Attributes?: Record<string, any>;
  ChefConfiguration?: OpsWorksStackChefConfiguration;
  CloneAppIds?: any[];
  ClonePermissions?: boolean;
  ConfigurationManager?: OpsWorksStackStackConfigurationManager;
  CustomCookbooksSource?: OpsWorksStackSource;
  CustomJson?: object;
  DefaultAvailabilityZone?: string;
  DefaultInstanceProfileArn: string;
  DefaultOs?: string;
  DefaultRootDeviceType?: string;
  DefaultSshKeyName?: string;
  DefaultSubnetId?: string;
  EcsClusterArn?: string;
  ElasticIps?: any[];
  HostnameTheme?: string;
  Name: string;
  RdsDbInstances?: any[];
  ServiceRoleArn: string;
  SourceStackId?: string;
  Tags?: Tag[];
  UseCustomCookbooks?: boolean;
  UseOpsworksSecurityGroups?: boolean;
  VpcId?: string;
}
/**
 * Resource class for AWS::OpsWorks::Stack
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-stack.html | AWS::OpsWorks::Stack}
 */
export class OpsWorksStack extends ResourceBase<
  "AWS::OpsWorks::Stack",
  OpsWorksStackProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::OpsWorks::Stack";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: OpsWorksStackProps,
    options?: ResourceOptions,
  ) {
    super(
      OpsWorksStack.Type,
      OpsWorksStack.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::OpsWorks::UserProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-userprofile.html | AWS::OpsWorks::UserProfile}
 */
export interface OpsWorksUserProfileProps {
  AllowSelfManagement?: boolean;
  IamUserArn: string;
  SshPublicKey?: string;
  SshUsername?: string;
}
/**
 * Attributes type definition for AWS::OpsWorks::UserProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-userprofile.html | AWS::OpsWorks::UserProfile}
 */
export interface OpsWorksUserProfileAttribs {
  SshUsername?: string;
}
/**
 * Resource class for AWS::OpsWorks::UserProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-userprofile.html | AWS::OpsWorks::UserProfile}
 */
export class OpsWorksUserProfile extends ResourceBase<
  "AWS::OpsWorks::UserProfile",
  OpsWorksUserProfileProps,
  OpsWorksUserProfileAttribs
> {
  public static readonly Type = "AWS::OpsWorks::UserProfile";
  public static readonly AttributeNames: readonly (keyof OpsWorksUserProfileAttribs)[] =
    ["SshUsername"];
  constructor(
    logicalId: string,
    properties: OpsWorksUserProfileProps,
    options?: ResourceOptions,
  ) {
    super(
      OpsWorksUserProfile.Type,
      OpsWorksUserProfile.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::OpsWorks::Volume
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-volume.html | AWS::OpsWorks::Volume}
 */
export interface OpsWorksVolumeProps {
  Ec2VolumeId: string;
  MountPoint?: string;
  Name?: string;
  StackId: string;
}
/**
 * Resource class for AWS::OpsWorks::Volume
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-volume.html | AWS::OpsWorks::Volume}
 */
export class OpsWorksVolume extends ResourceBase<
  "AWS::OpsWorks::Volume",
  OpsWorksVolumeProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::OpsWorks::Volume";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: OpsWorksVolumeProps,
    options?: ResourceOptions,
  ) {
    super(
      OpsWorksVolume.Type,
      OpsWorksVolume.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
