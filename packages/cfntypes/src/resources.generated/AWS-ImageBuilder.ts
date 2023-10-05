import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::ImageBuilder::ContainerRecipe.ComponentConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-componentconfiguration.html | AWS::ImageBuilder::ContainerRecipe.ComponentConfiguration}
 */
export interface ImageBuilderContainerRecipeComponentConfiguration {
  Parameters?: any[];
  ComponentArn?: string;
}
/**
 * Type definition for AWS::ImageBuilder::ContainerRecipe.ComponentParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-componentparameter.html | AWS::ImageBuilder::ContainerRecipe.ComponentParameter}
 */
export interface ImageBuilderContainerRecipeComponentParameter {
  Value: any[];
  Name: string;
}
/**
 * Type definition for AWS::ImageBuilder::ContainerRecipe.EbsInstanceBlockDeviceSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification.html | AWS::ImageBuilder::ContainerRecipe.EbsInstanceBlockDeviceSpecification}
 */
export interface ImageBuilderContainerRecipeEbsInstanceBlockDeviceSpecification {
  SnapshotId?: string;
  VolumeType?: string;
  KmsKeyId?: string;
  Encrypted?: boolean;
  Throughput?: number;
  Iops?: number;
  VolumeSize?: number;
  DeleteOnTermination?: boolean;
}
/**
 * Type definition for AWS::ImageBuilder::ContainerRecipe.InstanceBlockDeviceMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-instanceblockdevicemapping.html | AWS::ImageBuilder::ContainerRecipe.InstanceBlockDeviceMapping}
 */
export interface ImageBuilderContainerRecipeInstanceBlockDeviceMapping {
  Ebs?: ImageBuilderContainerRecipeEbsInstanceBlockDeviceSpecification;
  NoDevice?: string;
  VirtualName?: string;
  DeviceName?: string;
}
/**
 * Type definition for AWS::ImageBuilder::ContainerRecipe.InstanceConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-instanceconfiguration.html | AWS::ImageBuilder::ContainerRecipe.InstanceConfiguration}
 */
export interface ImageBuilderContainerRecipeInstanceConfiguration {
  BlockDeviceMappings?: any[];
  Image?: string;
}
/**
 * Type definition for AWS::ImageBuilder::ContainerRecipe.TargetContainerRepository
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-targetcontainerrepository.html | AWS::ImageBuilder::ContainerRecipe.TargetContainerRepository}
 */
export interface ImageBuilderContainerRecipeTargetContainerRepository {
  Service?: string;
  RepositoryName?: string;
}
/**
 * Type definition for AWS::ImageBuilder::DistributionConfiguration.AmiDistributionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-amidistributionconfiguration.html | AWS::ImageBuilder::DistributionConfiguration.AmiDistributionConfiguration}
 */
export interface ImageBuilderDistributionConfigurationAmiDistributionConfiguration {
  AmiTags?: Record<string, any>;
  Description?: string;
  KmsKeyId?: string;
  LaunchPermissionConfiguration?: ImageBuilderDistributionConfigurationLaunchPermissionConfiguration;
  TargetAccountIds?: any[];
  Name?: string;
}
/**
 * Type definition for AWS::ImageBuilder::DistributionConfiguration.ContainerDistributionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-containerdistributionconfiguration.html | AWS::ImageBuilder::DistributionConfiguration.ContainerDistributionConfiguration}
 */
export interface ImageBuilderDistributionConfigurationContainerDistributionConfiguration {
  TargetRepository?: ImageBuilderDistributionConfigurationTargetContainerRepository;
  ContainerTags?: any[];
  Description?: string;
}
/**
 * Type definition for AWS::ImageBuilder::DistributionConfiguration.Distribution
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-distribution.html | AWS::ImageBuilder::DistributionConfiguration.Distribution}
 */
export interface ImageBuilderDistributionConfigurationDistribution {
  AmiDistributionConfiguration?: ImageBuilderDistributionConfigurationAmiDistributionConfiguration;
  ContainerDistributionConfiguration?: ImageBuilderDistributionConfigurationContainerDistributionConfiguration;
  FastLaunchConfigurations?: any[];
  LaunchTemplateConfigurations?: any[];
  LicenseConfigurationArns?: any[];
  Region: string;
}
/**
 * Type definition for AWS::ImageBuilder::DistributionConfiguration.FastLaunchConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-fastlaunchconfiguration.html | AWS::ImageBuilder::DistributionConfiguration.FastLaunchConfiguration}
 */
export interface ImageBuilderDistributionConfigurationFastLaunchConfiguration {
  AccountId?: string;
  LaunchTemplate?: ImageBuilderDistributionConfigurationFastLaunchLaunchTemplateSpecification;
  Enabled?: boolean;
  MaxParallelLaunches?: number;
  SnapshotConfiguration?: ImageBuilderDistributionConfigurationFastLaunchSnapshotConfiguration;
}
/**
 * Type definition for AWS::ImageBuilder::DistributionConfiguration.FastLaunchLaunchTemplateSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-fastlaunchlaunchtemplatespecification.html | AWS::ImageBuilder::DistributionConfiguration.FastLaunchLaunchTemplateSpecification}
 */
export interface ImageBuilderDistributionConfigurationFastLaunchLaunchTemplateSpecification {
  LaunchTemplateName?: string;
  LaunchTemplateVersion?: string;
  LaunchTemplateId?: string;
}
/**
 * Type definition for AWS::ImageBuilder::DistributionConfiguration.FastLaunchSnapshotConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-fastlaunchsnapshotconfiguration.html | AWS::ImageBuilder::DistributionConfiguration.FastLaunchSnapshotConfiguration}
 */
export interface ImageBuilderDistributionConfigurationFastLaunchSnapshotConfiguration {
  TargetResourceCount?: number;
}
/**
 * Type definition for AWS::ImageBuilder::DistributionConfiguration.LaunchPermissionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-launchpermissionconfiguration.html | AWS::ImageBuilder::DistributionConfiguration.LaunchPermissionConfiguration}
 */
export interface ImageBuilderDistributionConfigurationLaunchPermissionConfiguration {
  OrganizationArns?: any[];
  OrganizationalUnitArns?: any[];
  UserIds?: any[];
  UserGroups?: any[];
}
/**
 * Type definition for AWS::ImageBuilder::DistributionConfiguration.LaunchTemplateConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-launchtemplateconfiguration.html | AWS::ImageBuilder::DistributionConfiguration.LaunchTemplateConfiguration}
 */
export interface ImageBuilderDistributionConfigurationLaunchTemplateConfiguration {
  SetDefaultVersion?: boolean;
  AccountId?: string;
  LaunchTemplateId?: string;
}
/**
 * Type definition for AWS::ImageBuilder::DistributionConfiguration.TargetContainerRepository
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-targetcontainerrepository.html | AWS::ImageBuilder::DistributionConfiguration.TargetContainerRepository}
 */
export interface ImageBuilderDistributionConfigurationTargetContainerRepository {
  Service?: string;
  RepositoryName?: string;
}
/**
 * Type definition for AWS::ImageBuilder::Image.EcrConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-image-ecrconfiguration.html | AWS::ImageBuilder::Image.EcrConfiguration}
 */
export interface ImageBuilderImageEcrConfiguration {
  ContainerTags?: any[];
  RepositoryName?: string;
}
/**
 * Type definition for AWS::ImageBuilder::Image.ImageScanningConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-image-imagescanningconfiguration.html | AWS::ImageBuilder::Image.ImageScanningConfiguration}
 */
export interface ImageBuilderImageImageScanningConfiguration {
  EcrConfiguration?: ImageBuilderImageEcrConfiguration;
  ImageScanningEnabled?: boolean;
}
/**
 * Type definition for AWS::ImageBuilder::Image.ImageTestsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-image-imagetestsconfiguration.html | AWS::ImageBuilder::Image.ImageTestsConfiguration}
 */
export interface ImageBuilderImageImageTestsConfiguration {
  TimeoutMinutes?: number;
  ImageTestsEnabled?: boolean;
}
/**
 * Type definition for AWS::ImageBuilder::ImagePipeline.EcrConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagepipeline-ecrconfiguration.html | AWS::ImageBuilder::ImagePipeline.EcrConfiguration}
 */
export interface ImageBuilderImagePipelineEcrConfiguration {
  ContainerTags?: any[];
  RepositoryName?: string;
}
/**
 * Type definition for AWS::ImageBuilder::ImagePipeline.ImageScanningConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagepipeline-imagescanningconfiguration.html | AWS::ImageBuilder::ImagePipeline.ImageScanningConfiguration}
 */
export interface ImageBuilderImagePipelineImageScanningConfiguration {
  EcrConfiguration?: ImageBuilderImagePipelineEcrConfiguration;
  ImageScanningEnabled?: boolean;
}
/**
 * Type definition for AWS::ImageBuilder::ImagePipeline.ImageTestsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagepipeline-imagetestsconfiguration.html | AWS::ImageBuilder::ImagePipeline.ImageTestsConfiguration}
 */
export interface ImageBuilderImagePipelineImageTestsConfiguration {
  TimeoutMinutes?: number;
  ImageTestsEnabled?: boolean;
}
/**
 * Type definition for AWS::ImageBuilder::ImagePipeline.Schedule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagepipeline-schedule.html | AWS::ImageBuilder::ImagePipeline.Schedule}
 */
export interface ImageBuilderImagePipelineSchedule {
  ScheduleExpression?: string;
  PipelineExecutionStartCondition?: string;
}
/**
 * Type definition for AWS::ImageBuilder::ImageRecipe.AdditionalInstanceConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-additionalinstanceconfiguration.html | AWS::ImageBuilder::ImageRecipe.AdditionalInstanceConfiguration}
 */
export interface ImageBuilderImageRecipeAdditionalInstanceConfiguration {
  UserDataOverride?: string;
  SystemsManagerAgent?: ImageBuilderImageRecipeSystemsManagerAgent;
}
/**
 * Type definition for AWS::ImageBuilder::ImageRecipe.ComponentConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-componentconfiguration.html | AWS::ImageBuilder::ImageRecipe.ComponentConfiguration}
 */
export interface ImageBuilderImageRecipeComponentConfiguration {
  Parameters?: any[];
  ComponentArn?: string;
}
/**
 * Type definition for AWS::ImageBuilder::ImageRecipe.ComponentParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-componentparameter.html | AWS::ImageBuilder::ImageRecipe.ComponentParameter}
 */
export interface ImageBuilderImageRecipeComponentParameter {
  Value: any[];
  Name: string;
}
/**
 * Type definition for AWS::ImageBuilder::ImageRecipe.EbsInstanceBlockDeviceSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification.html | AWS::ImageBuilder::ImageRecipe.EbsInstanceBlockDeviceSpecification}
 */
export interface ImageBuilderImageRecipeEbsInstanceBlockDeviceSpecification {
  SnapshotId?: string;
  VolumeType?: string;
  KmsKeyId?: string;
  Encrypted?: boolean;
  Throughput?: number;
  Iops?: number;
  VolumeSize?: number;
  DeleteOnTermination?: boolean;
}
/**
 * Type definition for AWS::ImageBuilder::ImageRecipe.InstanceBlockDeviceMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-instanceblockdevicemapping.html | AWS::ImageBuilder::ImageRecipe.InstanceBlockDeviceMapping}
 */
export interface ImageBuilderImageRecipeInstanceBlockDeviceMapping {
  Ebs?: ImageBuilderImageRecipeEbsInstanceBlockDeviceSpecification;
  NoDevice?: string;
  VirtualName?: string;
  DeviceName?: string;
}
/**
 * Type definition for AWS::ImageBuilder::ImageRecipe.SystemsManagerAgent
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-systemsmanageragent.html | AWS::ImageBuilder::ImageRecipe.SystemsManagerAgent}
 */
export interface ImageBuilderImageRecipeSystemsManagerAgent {
  UninstallAfterBuild?: boolean;
}
/**
 * Type definition for AWS::ImageBuilder::InfrastructureConfiguration.InstanceMetadataOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-infrastructureconfiguration-instancemetadataoptions.html | AWS::ImageBuilder::InfrastructureConfiguration.InstanceMetadataOptions}
 */
export interface ImageBuilderInfrastructureConfigurationInstanceMetadataOptions {
  HttpPutResponseHopLimit?: number;
  HttpTokens?: string;
}
/**
 * Type definition for AWS::ImageBuilder::InfrastructureConfiguration.Logging
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-infrastructureconfiguration-logging.html | AWS::ImageBuilder::InfrastructureConfiguration.Logging}
 */
export interface ImageBuilderInfrastructureConfigurationLogging {
  S3Logs?: ImageBuilderInfrastructureConfigurationS3Logs;
}
/**
 * Type definition for AWS::ImageBuilder::InfrastructureConfiguration.S3Logs
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-infrastructureconfiguration-s3logs.html | AWS::ImageBuilder::InfrastructureConfiguration.S3Logs}
 */
export interface ImageBuilderInfrastructureConfigurationS3Logs {
  S3KeyPrefix?: string;
  S3BucketName?: string;
}
/**
 * Type definition for AWS::ImageBuilder::Component
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-component.html | AWS::ImageBuilder::Component}
 */
export interface ImageBuilderComponentProps {
  Description?: string;
  SupportedOsVersions?: any[];
  Platform: string;
  KmsKeyId?: string;
  Version: string;
  ChangeDescription?: string;
  Data?: string;
  Uri?: string;
  Tags?: Record<string, Tag>;
  Name: string;
}
/**
 * Attributes type definition for AWS::ImageBuilder::Component
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-component.html | AWS::ImageBuilder::Component}
 */
export interface ImageBuilderComponentAttribs {
  Type?: string;
  Encrypted?: boolean;
  Arn?: string;
  Name?: string;
}
/**
 * Resource class for AWS::ImageBuilder::Component
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-component.html | AWS::ImageBuilder::Component}
 */
export class ImageBuilderComponent extends ResourceBase<
  "AWS::ImageBuilder::Component",
  ImageBuilderComponentProps,
  ImageBuilderComponentAttribs
> {
  public static readonly Type = "AWS::ImageBuilder::Component";
  public static readonly AttributeNames: readonly (keyof ImageBuilderComponentAttribs)[] =
    ["Type", "Encrypted", "Arn", "Name"];
  constructor(
    logicalId: string,
    properties: ImageBuilderComponentProps,
    options?: ResourceOptions,
  ) {
    super(
      ImageBuilderComponent.Type,
      ImageBuilderComponent.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ImageBuilder::ContainerRecipe
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-containerrecipe.html | AWS::ImageBuilder::ContainerRecipe}
 */
export interface ImageBuilderContainerRecipeProps {
  WorkingDirectory?: string;
  ParentImage: string;
  Description?: string;
  KmsKeyId?: string;
  InstanceConfiguration?: ImageBuilderContainerRecipeInstanceConfiguration;
  ContainerType: string;
  Name: string;
  DockerfileTemplateData?: string;
  Components: any[];
  TargetRepository: ImageBuilderContainerRecipeTargetContainerRepository;
  Version: string;
  PlatformOverride?: string;
  ImageOsVersionOverride?: string;
  Tags?: Record<string, Tag>;
  DockerfileTemplateUri?: string;
}
/**
 * Attributes type definition for AWS::ImageBuilder::ContainerRecipe
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-containerrecipe.html | AWS::ImageBuilder::ContainerRecipe}
 */
export interface ImageBuilderContainerRecipeAttribs {
  Arn?: string;
  Name?: string;
}
/**
 * Resource class for AWS::ImageBuilder::ContainerRecipe
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-containerrecipe.html | AWS::ImageBuilder::ContainerRecipe}
 */
export class ImageBuilderContainerRecipe extends ResourceBase<
  "AWS::ImageBuilder::ContainerRecipe",
  ImageBuilderContainerRecipeProps,
  ImageBuilderContainerRecipeAttribs
> {
  public static readonly Type = "AWS::ImageBuilder::ContainerRecipe";
  public static readonly AttributeNames: readonly (keyof ImageBuilderContainerRecipeAttribs)[] =
    ["Arn", "Name"];
  constructor(
    logicalId: string,
    properties: ImageBuilderContainerRecipeProps,
    options?: ResourceOptions,
  ) {
    super(
      ImageBuilderContainerRecipe.Type,
      ImageBuilderContainerRecipe.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ImageBuilder::DistributionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-distributionconfiguration.html | AWS::ImageBuilder::DistributionConfiguration}
 */
export interface ImageBuilderDistributionConfigurationProps {
  Description?: string;
  Tags?: Record<string, Tag>;
  Name: string;
  Distributions: any[];
}
/**
 * Attributes type definition for AWS::ImageBuilder::DistributionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-distributionconfiguration.html | AWS::ImageBuilder::DistributionConfiguration}
 */
export interface ImageBuilderDistributionConfigurationAttribs {
  Arn?: string;
  Name?: string;
}
/**
 * Resource class for AWS::ImageBuilder::DistributionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-distributionconfiguration.html | AWS::ImageBuilder::DistributionConfiguration}
 */
export class ImageBuilderDistributionConfiguration extends ResourceBase<
  "AWS::ImageBuilder::DistributionConfiguration",
  ImageBuilderDistributionConfigurationProps,
  ImageBuilderDistributionConfigurationAttribs
> {
  public static readonly Type = "AWS::ImageBuilder::DistributionConfiguration";
  public static readonly AttributeNames: readonly (keyof ImageBuilderDistributionConfigurationAttribs)[] =
    ["Arn", "Name"];
  constructor(
    logicalId: string,
    properties: ImageBuilderDistributionConfigurationProps,
    options?: ResourceOptions,
  ) {
    super(
      ImageBuilderDistributionConfiguration.Type,
      ImageBuilderDistributionConfiguration.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ImageBuilder::Image
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html | AWS::ImageBuilder::Image}
 */
export interface ImageBuilderImageProps {
  ImageScanningConfiguration?: ImageBuilderImageImageScanningConfiguration;
  InfrastructureConfigurationArn: string;
  ImageRecipeArn?: string;
  DistributionConfigurationArn?: string;
  ContainerRecipeArn?: string;
  ImageTestsConfiguration?: ImageBuilderImageImageTestsConfiguration;
  EnhancedImageMetadataEnabled?: boolean;
  Tags?: Record<string, Tag>;
}
/**
 * Attributes type definition for AWS::ImageBuilder::Image
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html | AWS::ImageBuilder::Image}
 */
export interface ImageBuilderImageAttribs {
  ImageId?: string;
  ImageUri?: string;
  Arn?: string;
  Name?: string;
}
/**
 * Resource class for AWS::ImageBuilder::Image
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html | AWS::ImageBuilder::Image}
 */
export class ImageBuilderImage extends ResourceBase<
  "AWS::ImageBuilder::Image",
  ImageBuilderImageProps,
  ImageBuilderImageAttribs
> {
  public static readonly Type = "AWS::ImageBuilder::Image";
  public static readonly AttributeNames: readonly (keyof ImageBuilderImageAttribs)[] =
    ["ImageId", "ImageUri", "Arn", "Name"];
  constructor(
    logicalId: string,
    properties: ImageBuilderImageProps,
    options?: ResourceOptions,
  ) {
    super(
      ImageBuilderImage.Type,
      ImageBuilderImage.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ImageBuilder::ImagePipeline
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html | AWS::ImageBuilder::ImagePipeline}
 */
export interface ImageBuilderImagePipelineProps {
  Status?: string;
  ImageScanningConfiguration?: ImageBuilderImagePipelineImageScanningConfiguration;
  InfrastructureConfigurationArn: string;
  ImageRecipeArn?: string;
  Description?: string;
  DistributionConfigurationArn?: string;
  ContainerRecipeArn?: string;
  Schedule?: ImageBuilderImagePipelineSchedule;
  ImageTestsConfiguration?: ImageBuilderImagePipelineImageTestsConfiguration;
  EnhancedImageMetadataEnabled?: boolean;
  Tags?: Record<string, Tag>;
  Name: string;
}
/**
 * Attributes type definition for AWS::ImageBuilder::ImagePipeline
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html | AWS::ImageBuilder::ImagePipeline}
 */
export interface ImageBuilderImagePipelineAttribs {
  Arn?: string;
  Name?: string;
}
/**
 * Resource class for AWS::ImageBuilder::ImagePipeline
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html | AWS::ImageBuilder::ImagePipeline}
 */
export class ImageBuilderImagePipeline extends ResourceBase<
  "AWS::ImageBuilder::ImagePipeline",
  ImageBuilderImagePipelineProps,
  ImageBuilderImagePipelineAttribs
> {
  public static readonly Type = "AWS::ImageBuilder::ImagePipeline";
  public static readonly AttributeNames: readonly (keyof ImageBuilderImagePipelineAttribs)[] =
    ["Arn", "Name"];
  constructor(
    logicalId: string,
    properties: ImageBuilderImagePipelineProps,
    options?: ResourceOptions,
  ) {
    super(
      ImageBuilderImagePipeline.Type,
      ImageBuilderImagePipeline.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ImageBuilder::ImageRecipe
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagerecipe.html | AWS::ImageBuilder::ImageRecipe}
 */
export interface ImageBuilderImageRecipeProps {
  Components: any[];
  WorkingDirectory?: string;
  ParentImage: string;
  Description?: string;
  Version: string;
  BlockDeviceMappings?: any[];
  AdditionalInstanceConfiguration?: ImageBuilderImageRecipeAdditionalInstanceConfiguration;
  Tags?: Record<string, Tag>;
  Name: string;
}
/**
 * Attributes type definition for AWS::ImageBuilder::ImageRecipe
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagerecipe.html | AWS::ImageBuilder::ImageRecipe}
 */
export interface ImageBuilderImageRecipeAttribs {
  Arn?: string;
  Name?: string;
}
/**
 * Resource class for AWS::ImageBuilder::ImageRecipe
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagerecipe.html | AWS::ImageBuilder::ImageRecipe}
 */
export class ImageBuilderImageRecipe extends ResourceBase<
  "AWS::ImageBuilder::ImageRecipe",
  ImageBuilderImageRecipeProps,
  ImageBuilderImageRecipeAttribs
> {
  public static readonly Type = "AWS::ImageBuilder::ImageRecipe";
  public static readonly AttributeNames: readonly (keyof ImageBuilderImageRecipeAttribs)[] =
    ["Arn", "Name"];
  constructor(
    logicalId: string,
    properties: ImageBuilderImageRecipeProps,
    options?: ResourceOptions,
  ) {
    super(
      ImageBuilderImageRecipe.Type,
      ImageBuilderImageRecipe.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ImageBuilder::InfrastructureConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-infrastructureconfiguration.html | AWS::ImageBuilder::InfrastructureConfiguration}
 */
export interface ImageBuilderInfrastructureConfigurationProps {
  Logging?: ImageBuilderInfrastructureConfigurationLogging;
  KeyPair?: string;
  Description?: string;
  InstanceProfileName: string;
  ResourceTags?: Record<string, any>;
  TerminateInstanceOnFailure?: boolean;
  SubnetId?: string;
  SecurityGroupIds?: any[];
  Name: string;
  InstanceMetadataOptions?: ImageBuilderInfrastructureConfigurationInstanceMetadataOptions;
  InstanceTypes?: any[];
  SnsTopicArn?: string;
  Tags?: Record<string, Tag>;
}
/**
 * Attributes type definition for AWS::ImageBuilder::InfrastructureConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-infrastructureconfiguration.html | AWS::ImageBuilder::InfrastructureConfiguration}
 */
export interface ImageBuilderInfrastructureConfigurationAttribs {
  Arn?: string;
  Name?: string;
}
/**
 * Resource class for AWS::ImageBuilder::InfrastructureConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-infrastructureconfiguration.html | AWS::ImageBuilder::InfrastructureConfiguration}
 */
export class ImageBuilderInfrastructureConfiguration extends ResourceBase<
  "AWS::ImageBuilder::InfrastructureConfiguration",
  ImageBuilderInfrastructureConfigurationProps,
  ImageBuilderInfrastructureConfigurationAttribs
> {
  public static readonly Type =
    "AWS::ImageBuilder::InfrastructureConfiguration";
  public static readonly AttributeNames: readonly (keyof ImageBuilderInfrastructureConfigurationAttribs)[] =
    ["Arn", "Name"];
  constructor(
    logicalId: string,
    properties: ImageBuilderInfrastructureConfigurationProps,
    options?: ResourceOptions,
  ) {
    super(
      ImageBuilderInfrastructureConfiguration.Type,
      ImageBuilderInfrastructureConfiguration.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
