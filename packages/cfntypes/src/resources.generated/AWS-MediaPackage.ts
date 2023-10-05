import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::MediaPackage::Asset.EgressEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-asset-egressendpoint.html | AWS::MediaPackage::Asset.EgressEndpoint}
 */
export interface MediaPackageAssetEgressEndpoint {
  PackagingConfigurationId: string;
  Url: string;
}
/**
 * Type definition for AWS::MediaPackage::Channel.HlsIngest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-channel-hlsingest.html | AWS::MediaPackage::Channel.HlsIngest}
 */
export interface MediaPackageChannelHlsIngest {
  ingestEndpoints?: any[];
}
/**
 * Type definition for AWS::MediaPackage::Channel.IngestEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-channel-ingestendpoint.html | AWS::MediaPackage::Channel.IngestEndpoint}
 */
export interface MediaPackageChannelIngestEndpoint {
  Username: string;
  Id: string;
  Url: string;
  Password: string;
}
/**
 * Type definition for AWS::MediaPackage::Channel.LogConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-channel-logconfiguration.html | AWS::MediaPackage::Channel.LogConfiguration}
 */
export interface MediaPackageChannelLogConfiguration {
  LogGroupName?: string;
}
/**
 * Type definition for AWS::MediaPackage::OriginEndpoint.Authorization
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-authorization.html | AWS::MediaPackage::OriginEndpoint.Authorization}
 */
export interface MediaPackageOriginEndpointAuthorization {
  SecretsRoleArn: string;
  CdnIdentifierSecret: string;
}
/**
 * Type definition for AWS::MediaPackage::OriginEndpoint.CmafEncryption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-cmafencryption.html | AWS::MediaPackage::OriginEndpoint.CmafEncryption}
 */
export interface MediaPackageOriginEndpointCmafEncryption {
  KeyRotationIntervalSeconds?: number;
  SpekeKeyProvider: MediaPackageOriginEndpointSpekeKeyProvider;
  ConstantInitializationVector?: string;
  EncryptionMethod?: string;
}
/**
 * Type definition for AWS::MediaPackage::OriginEndpoint.CmafPackage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-cmafpackage.html | AWS::MediaPackage::OriginEndpoint.CmafPackage}
 */
export interface MediaPackageOriginEndpointCmafPackage {
  SegmentPrefix?: string;
  StreamSelection?: MediaPackageOriginEndpointStreamSelection;
  SegmentDurationSeconds?: number;
  Encryption?: MediaPackageOriginEndpointCmafEncryption;
  HlsManifests?: any[];
}
/**
 * Type definition for AWS::MediaPackage::OriginEndpoint.DashEncryption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-dashencryption.html | AWS::MediaPackage::OriginEndpoint.DashEncryption}
 */
export interface MediaPackageOriginEndpointDashEncryption {
  KeyRotationIntervalSeconds?: number;
  SpekeKeyProvider: MediaPackageOriginEndpointSpekeKeyProvider;
}
/**
 * Type definition for AWS::MediaPackage::OriginEndpoint.DashPackage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-dashpackage.html | AWS::MediaPackage::OriginEndpoint.DashPackage}
 */
export interface MediaPackageOriginEndpointDashPackage {
  ManifestWindowSeconds?: number;
  AdsOnDeliveryRestrictions?: string;
  ManifestLayout?: string;
  StreamSelection?: MediaPackageOriginEndpointStreamSelection;
  IncludeIframeOnlyStream?: boolean;
  SegmentTemplateFormat?: string;
  Encryption?: MediaPackageOriginEndpointDashEncryption;
  AdTriggers?: any[];
  Profile?: string;
  PeriodTriggers?: any[];
  SuggestedPresentationDelaySeconds?: number;
  UtcTiming?: string;
  MinBufferTimeSeconds?: number;
  SegmentDurationSeconds?: number;
  MinUpdatePeriodSeconds?: number;
  UtcTimingUri?: string;
}
/**
 * Type definition for AWS::MediaPackage::OriginEndpoint.EncryptionContractConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-encryptioncontractconfiguration.html | AWS::MediaPackage::OriginEndpoint.EncryptionContractConfiguration}
 */
export interface MediaPackageOriginEndpointEncryptionContractConfiguration {}
/**
 * Type definition for AWS::MediaPackage::OriginEndpoint.HlsEncryption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-hlsencryption.html | AWS::MediaPackage::OriginEndpoint.HlsEncryption}
 */
export interface MediaPackageOriginEndpointHlsEncryption {
  KeyRotationIntervalSeconds?: number;
  RepeatExtXKey?: boolean;
  ConstantInitializationVector?: string;
  SpekeKeyProvider: MediaPackageOriginEndpointSpekeKeyProvider;
  EncryptionMethod?: string;
}
/**
 * Type definition for AWS::MediaPackage::OriginEndpoint.HlsManifest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-hlsmanifest.html | AWS::MediaPackage::OriginEndpoint.HlsManifest}
 */
export interface MediaPackageOriginEndpointHlsManifest {
  AdsOnDeliveryRestrictions?: string;
  ManifestName?: string;
  AdMarkers?: string;
  ProgramDateTimeIntervalSeconds?: number;
  PlaylistWindowSeconds?: number;
  IncludeIframeOnlyStream?: boolean;
  Id: string;
  PlaylistType?: string;
  AdTriggers?: any[];
  Url?: string;
}
/**
 * Type definition for AWS::MediaPackage::OriginEndpoint.HlsPackage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-hlspackage.html | AWS::MediaPackage::OriginEndpoint.HlsPackage}
 */
export interface MediaPackageOriginEndpointHlsPackage {
  AdsOnDeliveryRestrictions?: string;
  AdMarkers?: string;
  ProgramDateTimeIntervalSeconds?: number;
  StreamSelection?: MediaPackageOriginEndpointStreamSelection;
  PlaylistWindowSeconds?: number;
  IncludeIframeOnlyStream?: boolean;
  UseAudioRenditionGroup?: boolean;
  SegmentDurationSeconds?: number;
  Encryption?: MediaPackageOriginEndpointHlsEncryption;
  PlaylistType?: string;
  AdTriggers?: any[];
  IncludeDvbSubtitles?: boolean;
}
/**
 * Type definition for AWS::MediaPackage::OriginEndpoint.MssEncryption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-mssencryption.html | AWS::MediaPackage::OriginEndpoint.MssEncryption}
 */
export interface MediaPackageOriginEndpointMssEncryption {
  SpekeKeyProvider: MediaPackageOriginEndpointSpekeKeyProvider;
}
/**
 * Type definition for AWS::MediaPackage::OriginEndpoint.MssPackage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-msspackage.html | AWS::MediaPackage::OriginEndpoint.MssPackage}
 */
export interface MediaPackageOriginEndpointMssPackage {
  ManifestWindowSeconds?: number;
  StreamSelection?: MediaPackageOriginEndpointStreamSelection;
  SegmentDurationSeconds?: number;
  Encryption?: MediaPackageOriginEndpointMssEncryption;
}
/**
 * Type definition for AWS::MediaPackage::OriginEndpoint.SpekeKeyProvider
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-spekekeyprovider.html | AWS::MediaPackage::OriginEndpoint.SpekeKeyProvider}
 */
export interface MediaPackageOriginEndpointSpekeKeyProvider {
  ResourceId: string;
  SystemIds: any[];
  EncryptionContractConfiguration?: MediaPackageOriginEndpointEncryptionContractConfiguration;
  Url: string;
  RoleArn: string;
  CertificateArn?: string;
}
/**
 * Type definition for AWS::MediaPackage::OriginEndpoint.StreamSelection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-streamselection.html | AWS::MediaPackage::OriginEndpoint.StreamSelection}
 */
export interface MediaPackageOriginEndpointStreamSelection {
  MinVideoBitsPerSecond?: number;
  StreamOrder?: string;
  MaxVideoBitsPerSecond?: number;
}
/**
 * Type definition for AWS::MediaPackage::PackagingConfiguration.CmafEncryption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-cmafencryption.html | AWS::MediaPackage::PackagingConfiguration.CmafEncryption}
 */
export interface MediaPackagePackagingConfigurationCmafEncryption {
  SpekeKeyProvider: MediaPackagePackagingConfigurationSpekeKeyProvider;
}
/**
 * Type definition for AWS::MediaPackage::PackagingConfiguration.CmafPackage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-cmafpackage.html | AWS::MediaPackage::PackagingConfiguration.CmafPackage}
 */
export interface MediaPackagePackagingConfigurationCmafPackage {
  SegmentDurationSeconds?: number;
  Encryption?: MediaPackagePackagingConfigurationCmafEncryption;
  HlsManifests: any[];
  IncludeEncoderConfigurationInSegments?: boolean;
}
/**
 * Type definition for AWS::MediaPackage::PackagingConfiguration.DashEncryption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-dashencryption.html | AWS::MediaPackage::PackagingConfiguration.DashEncryption}
 */
export interface MediaPackagePackagingConfigurationDashEncryption {
  SpekeKeyProvider: MediaPackagePackagingConfigurationSpekeKeyProvider;
}
/**
 * Type definition for AWS::MediaPackage::PackagingConfiguration.DashManifest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-dashmanifest.html | AWS::MediaPackage::PackagingConfiguration.DashManifest}
 */
export interface MediaPackagePackagingConfigurationDashManifest {
  ScteMarkersSource?: string;
  ManifestName?: string;
  ManifestLayout?: string;
  StreamSelection?: MediaPackagePackagingConfigurationStreamSelection;
  MinBufferTimeSeconds?: number;
  Profile?: string;
}
/**
 * Type definition for AWS::MediaPackage::PackagingConfiguration.DashPackage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-dashpackage.html | AWS::MediaPackage::PackagingConfiguration.DashPackage}
 */
export interface MediaPackagePackagingConfigurationDashPackage {
  PeriodTriggers?: any[];
  IncludeIframeOnlyStream?: boolean;
  SegmentDurationSeconds?: number;
  Encryption?: MediaPackagePackagingConfigurationDashEncryption;
  SegmentTemplateFormat?: string;
  IncludeEncoderConfigurationInSegments?: boolean;
  DashManifests: any[];
}
/**
 * Type definition for AWS::MediaPackage::PackagingConfiguration.EncryptionContractConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-encryptioncontractconfiguration.html | AWS::MediaPackage::PackagingConfiguration.EncryptionContractConfiguration}
 */
export interface MediaPackagePackagingConfigurationEncryptionContractConfiguration {
  PresetSpeke20Audio: string;
  PresetSpeke20Video: string;
}
/**
 * Type definition for AWS::MediaPackage::PackagingConfiguration.HlsEncryption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-hlsencryption.html | AWS::MediaPackage::PackagingConfiguration.HlsEncryption}
 */
export interface MediaPackagePackagingConfigurationHlsEncryption {
  ConstantInitializationVector?: string;
  SpekeKeyProvider: MediaPackagePackagingConfigurationSpekeKeyProvider;
  EncryptionMethod?: string;
}
/**
 * Type definition for AWS::MediaPackage::PackagingConfiguration.HlsManifest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-hlsmanifest.html | AWS::MediaPackage::PackagingConfiguration.HlsManifest}
 */
export interface MediaPackagePackagingConfigurationHlsManifest {
  AdMarkers?: string;
  ManifestName?: string;
  ProgramDateTimeIntervalSeconds?: number;
  StreamSelection?: MediaPackagePackagingConfigurationStreamSelection;
  RepeatExtXKey?: boolean;
  IncludeIframeOnlyStream?: boolean;
}
/**
 * Type definition for AWS::MediaPackage::PackagingConfiguration.HlsPackage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-hlspackage.html | AWS::MediaPackage::PackagingConfiguration.HlsPackage}
 */
export interface MediaPackagePackagingConfigurationHlsPackage {
  UseAudioRenditionGroup?: boolean;
  SegmentDurationSeconds?: number;
  Encryption?: MediaPackagePackagingConfigurationHlsEncryption;
  HlsManifests: any[];
  IncludeDvbSubtitles?: boolean;
}
/**
 * Type definition for AWS::MediaPackage::PackagingConfiguration.MssEncryption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-mssencryption.html | AWS::MediaPackage::PackagingConfiguration.MssEncryption}
 */
export interface MediaPackagePackagingConfigurationMssEncryption {
  SpekeKeyProvider: MediaPackagePackagingConfigurationSpekeKeyProvider;
}
/**
 * Type definition for AWS::MediaPackage::PackagingConfiguration.MssManifest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-mssmanifest.html | AWS::MediaPackage::PackagingConfiguration.MssManifest}
 */
export interface MediaPackagePackagingConfigurationMssManifest {
  ManifestName?: string;
  StreamSelection?: MediaPackagePackagingConfigurationStreamSelection;
}
/**
 * Type definition for AWS::MediaPackage::PackagingConfiguration.MssPackage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-msspackage.html | AWS::MediaPackage::PackagingConfiguration.MssPackage}
 */
export interface MediaPackagePackagingConfigurationMssPackage {
  MssManifests: any[];
  SegmentDurationSeconds?: number;
  Encryption?: MediaPackagePackagingConfigurationMssEncryption;
}
/**
 * Type definition for AWS::MediaPackage::PackagingConfiguration.SpekeKeyProvider
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-spekekeyprovider.html | AWS::MediaPackage::PackagingConfiguration.SpekeKeyProvider}
 */
export interface MediaPackagePackagingConfigurationSpekeKeyProvider {
  SystemIds: any[];
  EncryptionContractConfiguration?: MediaPackagePackagingConfigurationEncryptionContractConfiguration;
  RoleArn: string;
  Url: string;
}
/**
 * Type definition for AWS::MediaPackage::PackagingConfiguration.StreamSelection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-streamselection.html | AWS::MediaPackage::PackagingConfiguration.StreamSelection}
 */
export interface MediaPackagePackagingConfigurationStreamSelection {
  MinVideoBitsPerSecond?: number;
  StreamOrder?: string;
  MaxVideoBitsPerSecond?: number;
}
/**
 * Type definition for AWS::MediaPackage::PackagingGroup.Authorization
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packaginggroup-authorization.html | AWS::MediaPackage::PackagingGroup.Authorization}
 */
export interface MediaPackagePackagingGroupAuthorization {
  SecretsRoleArn: string;
  CdnIdentifierSecret: string;
}
/**
 * Type definition for AWS::MediaPackage::PackagingGroup.LogConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packaginggroup-logconfiguration.html | AWS::MediaPackage::PackagingGroup.LogConfiguration}
 */
export interface MediaPackagePackagingGroupLogConfiguration {
  LogGroupName?: string;
}
/**
 * Type definition for AWS::MediaPackage::Asset
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-asset.html | AWS::MediaPackage::Asset}
 */
export interface MediaPackageAssetProps {
  SourceArn: string;
  ResourceId?: string;
  Id: string;
  PackagingGroupId: string;
  EgressEndpoints?: any[];
  Tags?: Tag[];
  SourceRoleArn: string;
}
/**
 * Attributes type definition for AWS::MediaPackage::Asset
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-asset.html | AWS::MediaPackage::Asset}
 */
export interface MediaPackageAssetAttribs {
  CreatedAt?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::MediaPackage::Asset
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-asset.html | AWS::MediaPackage::Asset}
 */
export class MediaPackageAsset extends ResourceBase<
  "AWS::MediaPackage::Asset",
  MediaPackageAssetProps,
  MediaPackageAssetAttribs
> {
  public static readonly Type = "AWS::MediaPackage::Asset";
  public static readonly AttributeNames: readonly (keyof MediaPackageAssetAttribs)[] =
    ["CreatedAt", "Arn"];
  constructor(
    logicalId: string,
    properties: MediaPackageAssetProps,
    options?: ResourceOptions,
  ) {
    super(
      MediaPackageAsset.Type,
      MediaPackageAsset.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::MediaPackage::Channel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-channel.html | AWS::MediaPackage::Channel}
 */
export interface MediaPackageChannelProps {
  Description?: string;
  IngressAccessLogs?: MediaPackageChannelLogConfiguration;
  HlsIngest?: MediaPackageChannelHlsIngest;
  Id: string;
  EgressAccessLogs?: MediaPackageChannelLogConfiguration;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::MediaPackage::Channel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-channel.html | AWS::MediaPackage::Channel}
 */
export interface MediaPackageChannelAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::MediaPackage::Channel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-channel.html | AWS::MediaPackage::Channel}
 */
export class MediaPackageChannel extends ResourceBase<
  "AWS::MediaPackage::Channel",
  MediaPackageChannelProps,
  MediaPackageChannelAttribs
> {
  public static readonly Type = "AWS::MediaPackage::Channel";
  public static readonly AttributeNames: readonly (keyof MediaPackageChannelAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: MediaPackageChannelProps,
    options?: ResourceOptions,
  ) {
    super(
      MediaPackageChannel.Type,
      MediaPackageChannel.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::MediaPackage::OriginEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html | AWS::MediaPackage::OriginEndpoint}
 */
export interface MediaPackageOriginEndpointProps {
  MssPackage?: MediaPackageOriginEndpointMssPackage;
  Description?: string;
  ChannelId: string;
  TimeDelaySeconds?: number;
  Origination?: string;
  Authorization?: MediaPackageOriginEndpointAuthorization;
  ManifestName?: string;
  CmafPackage?: MediaPackageOriginEndpointCmafPackage;
  Whitelist?: any[];
  Id: string;
  HlsPackage?: MediaPackageOriginEndpointHlsPackage;
  DashPackage?: MediaPackageOriginEndpointDashPackage;
  Tags?: Tag[];
  StartoverWindowSeconds?: number;
}
/**
 * Attributes type definition for AWS::MediaPackage::OriginEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html | AWS::MediaPackage::OriginEndpoint}
 */
export interface MediaPackageOriginEndpointAttribs {
  Arn?: string;
  Url?: string;
}
/**
 * Resource class for AWS::MediaPackage::OriginEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html | AWS::MediaPackage::OriginEndpoint}
 */
export class MediaPackageOriginEndpoint extends ResourceBase<
  "AWS::MediaPackage::OriginEndpoint",
  MediaPackageOriginEndpointProps,
  MediaPackageOriginEndpointAttribs
> {
  public static readonly Type = "AWS::MediaPackage::OriginEndpoint";
  public static readonly AttributeNames: readonly (keyof MediaPackageOriginEndpointAttribs)[] =
    ["Arn", "Url"];
  constructor(
    logicalId: string,
    properties: MediaPackageOriginEndpointProps,
    options?: ResourceOptions,
  ) {
    super(
      MediaPackageOriginEndpoint.Type,
      MediaPackageOriginEndpoint.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::MediaPackage::PackagingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html | AWS::MediaPackage::PackagingConfiguration}
 */
export interface MediaPackagePackagingConfigurationProps {
  MssPackage?: MediaPackagePackagingConfigurationMssPackage;
  CmafPackage?: MediaPackagePackagingConfigurationCmafPackage;
  Id: string;
  HlsPackage?: MediaPackagePackagingConfigurationHlsPackage;
  PackagingGroupId: string;
  DashPackage?: MediaPackagePackagingConfigurationDashPackage;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::MediaPackage::PackagingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html | AWS::MediaPackage::PackagingConfiguration}
 */
export interface MediaPackagePackagingConfigurationAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::MediaPackage::PackagingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html | AWS::MediaPackage::PackagingConfiguration}
 */
export class MediaPackagePackagingConfiguration extends ResourceBase<
  "AWS::MediaPackage::PackagingConfiguration",
  MediaPackagePackagingConfigurationProps,
  MediaPackagePackagingConfigurationAttribs
> {
  public static readonly Type = "AWS::MediaPackage::PackagingConfiguration";
  public static readonly AttributeNames: readonly (keyof MediaPackagePackagingConfigurationAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: MediaPackagePackagingConfigurationProps,
    options?: ResourceOptions,
  ) {
    super(
      MediaPackagePackagingConfiguration.Type,
      MediaPackagePackagingConfiguration.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::MediaPackage::PackagingGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packaginggroup.html | AWS::MediaPackage::PackagingGroup}
 */
export interface MediaPackagePackagingGroupProps {
  Authorization?: MediaPackagePackagingGroupAuthorization;
  Id: string;
  EgressAccessLogs?: MediaPackagePackagingGroupLogConfiguration;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::MediaPackage::PackagingGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packaginggroup.html | AWS::MediaPackage::PackagingGroup}
 */
export interface MediaPackagePackagingGroupAttribs {
  DomainName?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::MediaPackage::PackagingGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packaginggroup.html | AWS::MediaPackage::PackagingGroup}
 */
export class MediaPackagePackagingGroup extends ResourceBase<
  "AWS::MediaPackage::PackagingGroup",
  MediaPackagePackagingGroupProps,
  MediaPackagePackagingGroupAttribs
> {
  public static readonly Type = "AWS::MediaPackage::PackagingGroup";
  public static readonly AttributeNames: readonly (keyof MediaPackagePackagingGroupAttribs)[] =
    ["DomainName", "Arn"];
  constructor(
    logicalId: string,
    properties: MediaPackagePackagingGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      MediaPackagePackagingGroup.Type,
      MediaPackagePackagingGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
