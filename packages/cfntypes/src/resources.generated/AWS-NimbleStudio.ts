import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::NimbleStudio::LaunchProfile.StreamConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamconfiguration.html | AWS::NimbleStudio::LaunchProfile.StreamConfiguration}
 */
export interface NimbleStudioLaunchProfileStreamConfiguration {
  MaxSessionLengthInMinutes?: number;
  ClipboardMode: string;
  StreamingImageIds: any[];
  MaxStoppedSessionLengthInMinutes?: number;
  SessionPersistenceMode?: string;
  AutomaticTerminationMode?: string;
  SessionBackup?: NimbleStudioLaunchProfileStreamConfigurationSessionBackup;
  Ec2InstanceTypes: any[];
  SessionStorage?: NimbleStudioLaunchProfileStreamConfigurationSessionStorage;
  VolumeConfiguration?: NimbleStudioLaunchProfileVolumeConfiguration;
}
/**
 * Type definition for AWS::NimbleStudio::LaunchProfile.StreamConfigurationSessionBackup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamconfigurationsessionbackup.html | AWS::NimbleStudio::LaunchProfile.StreamConfigurationSessionBackup}
 */
export interface NimbleStudioLaunchProfileStreamConfigurationSessionBackup {
  Mode?: string;
  MaxBackupsToRetain?: number;
}
/**
 * Type definition for AWS::NimbleStudio::LaunchProfile.StreamConfigurationSessionStorage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamconfigurationsessionstorage.html | AWS::NimbleStudio::LaunchProfile.StreamConfigurationSessionStorage}
 */
export interface NimbleStudioLaunchProfileStreamConfigurationSessionStorage {
  Root?: NimbleStudioLaunchProfileStreamingSessionStorageRoot;
  Mode: any[];
}
/**
 * Type definition for AWS::NimbleStudio::LaunchProfile.StreamingSessionStorageRoot
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamingsessionstorageroot.html | AWS::NimbleStudio::LaunchProfile.StreamingSessionStorageRoot}
 */
export interface NimbleStudioLaunchProfileStreamingSessionStorageRoot {
  Linux?: string;
  Windows?: string;
}
/**
 * Type definition for AWS::NimbleStudio::LaunchProfile.VolumeConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-volumeconfiguration.html | AWS::NimbleStudio::LaunchProfile.VolumeConfiguration}
 */
export interface NimbleStudioLaunchProfileVolumeConfiguration {
  Size?: number;
  Throughput?: number;
  Iops?: number;
}
/**
 * Type definition for AWS::NimbleStudio::StreamingImage.StreamingImageEncryptionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-streamingimage-streamingimageencryptionconfiguration.html | AWS::NimbleStudio::StreamingImage.StreamingImageEncryptionConfiguration}
 */
export interface NimbleStudioStreamingImageStreamingImageEncryptionConfiguration {
  KeyType: string;
  KeyArn?: string;
}
/**
 * Type definition for AWS::NimbleStudio::Studio.StudioEncryptionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studio-studioencryptionconfiguration.html | AWS::NimbleStudio::Studio.StudioEncryptionConfiguration}
 */
export interface NimbleStudioStudioStudioEncryptionConfiguration {
  KeyType: string;
  KeyArn?: string;
}
/**
 * Type definition for AWS::NimbleStudio::StudioComponent.ActiveDirectoryComputerAttribute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-activedirectorycomputerattribute.html | AWS::NimbleStudio::StudioComponent.ActiveDirectoryComputerAttribute}
 */
export interface NimbleStudioStudioComponentActiveDirectoryComputerAttribute {
  Value?: string;
  Name?: string;
}
/**
 * Type definition for AWS::NimbleStudio::StudioComponent.ActiveDirectoryConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-activedirectoryconfiguration.html | AWS::NimbleStudio::StudioComponent.ActiveDirectoryConfiguration}
 */
export interface NimbleStudioStudioComponentActiveDirectoryConfiguration {
  DirectoryId?: string;
  OrganizationalUnitDistinguishedName?: string;
  ComputerAttributes?: any[];
}
/**
 * Type definition for AWS::NimbleStudio::StudioComponent.ComputeFarmConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-computefarmconfiguration.html | AWS::NimbleStudio::StudioComponent.ComputeFarmConfiguration}
 */
export interface NimbleStudioStudioComponentComputeFarmConfiguration {
  ActiveDirectoryUser?: string;
  Endpoint?: string;
}
/**
 * Type definition for AWS::NimbleStudio::StudioComponent.LicenseServiceConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-licenseserviceconfiguration.html | AWS::NimbleStudio::StudioComponent.LicenseServiceConfiguration}
 */
export interface NimbleStudioStudioComponentLicenseServiceConfiguration {
  Endpoint?: string;
}
/**
 * Type definition for AWS::NimbleStudio::StudioComponent.ScriptParameterKeyValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-scriptparameterkeyvalue.html | AWS::NimbleStudio::StudioComponent.ScriptParameterKeyValue}
 */
export interface NimbleStudioStudioComponentScriptParameterKeyValue {
  Value?: string;
  Key?: string;
}
/**
 * Type definition for AWS::NimbleStudio::StudioComponent.SharedFileSystemConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-sharedfilesystemconfiguration.html | AWS::NimbleStudio::StudioComponent.SharedFileSystemConfiguration}
 */
export interface NimbleStudioStudioComponentSharedFileSystemConfiguration {
  Endpoint?: string;
  FileSystemId?: string;
  ShareName?: string;
  WindowsMountDrive?: string;
  LinuxMountPoint?: string;
}
/**
 * Type definition for AWS::NimbleStudio::StudioComponent.StudioComponentConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-studiocomponentconfiguration.html | AWS::NimbleStudio::StudioComponent.StudioComponentConfiguration}
 */
export interface NimbleStudioStudioComponentStudioComponentConfiguration {
  LicenseServiceConfiguration?: NimbleStudioStudioComponentLicenseServiceConfiguration;
  ComputeFarmConfiguration?: NimbleStudioStudioComponentComputeFarmConfiguration;
  ActiveDirectoryConfiguration?: NimbleStudioStudioComponentActiveDirectoryConfiguration;
  SharedFileSystemConfiguration?: NimbleStudioStudioComponentSharedFileSystemConfiguration;
}
/**
 * Type definition for AWS::NimbleStudio::StudioComponent.StudioComponentInitializationScript
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-studiocomponentinitializationscript.html | AWS::NimbleStudio::StudioComponent.StudioComponentInitializationScript}
 */
export interface NimbleStudioStudioComponentStudioComponentInitializationScript {
  Script?: string;
  LaunchProfileProtocolVersion?: string;
  Platform?: string;
  RunContext?: string;
}
/**
 * Type definition for AWS::NimbleStudio::LaunchProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html | AWS::NimbleStudio::LaunchProfile}
 */
export interface NimbleStudioLaunchProfileProps {
  Description?: string;
  Ec2SubnetIds: any[];
  StudioComponentIds: any[];
  StreamConfiguration: NimbleStudioLaunchProfileStreamConfiguration;
  LaunchProfileProtocolVersions: any[];
  StudioId: string;
  Tags?: Record<string, Tag>;
  Name: string;
}
/**
 * Attributes type definition for AWS::NimbleStudio::LaunchProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html | AWS::NimbleStudio::LaunchProfile}
 */
export interface NimbleStudioLaunchProfileAttribs {
  LaunchProfileId?: string;
}
/**
 * Resource class for AWS::NimbleStudio::LaunchProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html | AWS::NimbleStudio::LaunchProfile}
 */
export class NimbleStudioLaunchProfile extends ResourceBase<
  "AWS::NimbleStudio::LaunchProfile",
  NimbleStudioLaunchProfileProps,
  NimbleStudioLaunchProfileAttribs
> {
  public static readonly Type = "AWS::NimbleStudio::LaunchProfile";
  public static readonly AttributeNames: readonly (keyof NimbleStudioLaunchProfileAttribs)[] =
    ["LaunchProfileId"];
  constructor(
    logicalId: string,
    properties: NimbleStudioLaunchProfileProps,
    options?: ResourceOptions,
  ) {
    super(
      NimbleStudioLaunchProfile.Type,
      NimbleStudioLaunchProfile.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::NimbleStudio::StreamingImage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-streamingimage.html | AWS::NimbleStudio::StreamingImage}
 */
export interface NimbleStudioStreamingImageProps {
  Description?: string;
  Ec2ImageId: string;
  StudioId: string;
  Tags?: Record<string, Tag>;
  Name: string;
}
/**
 * Attributes type definition for AWS::NimbleStudio::StreamingImage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-streamingimage.html | AWS::NimbleStudio::StreamingImage}
 */
export interface NimbleStudioStreamingImageAttribs {
  Owner?: string;
  Platform?: string;
  EncryptionConfiguration?: NimbleStudioStreamingImageStreamingImageEncryptionConfiguration;
  EulaIds?: any[];
  "EncryptionConfiguration.KeyArn"?: string;
  "EncryptionConfiguration.KeyType"?: string;
  StreamingImageId?: string;
}
/**
 * Resource class for AWS::NimbleStudio::StreamingImage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-streamingimage.html | AWS::NimbleStudio::StreamingImage}
 */
export class NimbleStudioStreamingImage extends ResourceBase<
  "AWS::NimbleStudio::StreamingImage",
  NimbleStudioStreamingImageProps,
  NimbleStudioStreamingImageAttribs
> {
  public static readonly Type = "AWS::NimbleStudio::StreamingImage";
  public static readonly AttributeNames: readonly (keyof NimbleStudioStreamingImageAttribs)[] =
    [
      "Owner",
      "Platform",
      "EncryptionConfiguration",
      "EulaIds",
      "EncryptionConfiguration.KeyArn",
      "EncryptionConfiguration.KeyType",
      "StreamingImageId",
    ];
  constructor(
    logicalId: string,
    properties: NimbleStudioStreamingImageProps,
    options?: ResourceOptions,
  ) {
    super(
      NimbleStudioStreamingImage.Type,
      NimbleStudioStreamingImage.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::NimbleStudio::Studio
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studio.html | AWS::NimbleStudio::Studio}
 */
export interface NimbleStudioStudioProps {
  UserRoleArn: string;
  DisplayName: string;
  StudioName: string;
  AdminRoleArn: string;
  StudioEncryptionConfiguration?: NimbleStudioStudioStudioEncryptionConfiguration;
  Tags?: Record<string, Tag>;
}
/**
 * Attributes type definition for AWS::NimbleStudio::Studio
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studio.html | AWS::NimbleStudio::Studio}
 */
export interface NimbleStudioStudioAttribs {
  HomeRegion?: string;
  StudioUrl?: string;
  SsoClientId?: string;
  StudioId?: string;
}
/**
 * Resource class for AWS::NimbleStudio::Studio
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studio.html | AWS::NimbleStudio::Studio}
 */
export class NimbleStudioStudio extends ResourceBase<
  "AWS::NimbleStudio::Studio",
  NimbleStudioStudioProps,
  NimbleStudioStudioAttribs
> {
  public static readonly Type = "AWS::NimbleStudio::Studio";
  public static readonly AttributeNames: readonly (keyof NimbleStudioStudioAttribs)[] =
    ["HomeRegion", "StudioUrl", "SsoClientId", "StudioId"];
  constructor(
    logicalId: string,
    properties: NimbleStudioStudioProps,
    options?: ResourceOptions,
  ) {
    super(
      NimbleStudioStudio.Type,
      NimbleStudioStudio.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::NimbleStudio::StudioComponent
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html | AWS::NimbleStudio::StudioComponent}
 */
export interface NimbleStudioStudioComponentProps {
  Configuration?: NimbleStudioStudioComponentStudioComponentConfiguration;
  Description?: string;
  Ec2SecurityGroupIds?: any[];
  InitializationScripts?: any[];
  Name: string;
  ScriptParameters?: any[];
  StudioId: string;
  Subtype?: string;
  Tags?: Record<string, Tag>;
  Type: string;
}
/**
 * Attributes type definition for AWS::NimbleStudio::StudioComponent
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html | AWS::NimbleStudio::StudioComponent}
 */
export interface NimbleStudioStudioComponentAttribs {
  StudioComponentId?: string;
}
/**
 * Resource class for AWS::NimbleStudio::StudioComponent
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html | AWS::NimbleStudio::StudioComponent}
 */
export class NimbleStudioStudioComponent extends ResourceBase<
  "AWS::NimbleStudio::StudioComponent",
  NimbleStudioStudioComponentProps,
  NimbleStudioStudioComponentAttribs
> {
  public static readonly Type = "AWS::NimbleStudio::StudioComponent";
  public static readonly AttributeNames: readonly (keyof NimbleStudioStudioComponentAttribs)[] =
    ["StudioComponentId"];
  constructor(
    logicalId: string,
    properties: NimbleStudioStudioComponentProps,
    options?: ResourceOptions,
  ) {
    super(
      NimbleStudioStudioComponent.Type,
      NimbleStudioStudioComponent.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
