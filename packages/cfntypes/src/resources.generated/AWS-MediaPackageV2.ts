import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::MediaPackageV2::Channel.IngestEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-channel-ingestendpoint.html | AWS::MediaPackageV2::Channel.IngestEndpoint}
 */
export interface MediaPackageV2ChannelIngestEndpoint {
  Id?: string;
  Url?: string;
}
/**
 * Type definition for AWS::MediaPackageV2::OriginEndpoint.Encryption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-encryption.html | AWS::MediaPackageV2::OriginEndpoint.Encryption}
 */
export interface MediaPackageV2OriginEndpointEncryption {
  KeyRotationIntervalSeconds?: number;
  ConstantInitializationVector?: string;
  SpekeKeyProvider: MediaPackageV2OriginEndpointSpekeKeyProvider;
  EncryptionMethod: MediaPackageV2OriginEndpointEncryptionMethod;
}
/**
 * Type definition for AWS::MediaPackageV2::OriginEndpoint.EncryptionContractConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-encryptioncontractconfiguration.html | AWS::MediaPackageV2::OriginEndpoint.EncryptionContractConfiguration}
 */
export interface MediaPackageV2OriginEndpointEncryptionContractConfiguration {
  PresetSpeke20Audio: string;
  PresetSpeke20Video: string;
}
/**
 * Type definition for AWS::MediaPackageV2::OriginEndpoint.EncryptionMethod
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-encryptionmethod.html | AWS::MediaPackageV2::OriginEndpoint.EncryptionMethod}
 */
export interface MediaPackageV2OriginEndpointEncryptionMethod {
  CmafEncryptionMethod?: string;
  TsEncryptionMethod?: string;
}
/**
 * Type definition for AWS::MediaPackageV2::OriginEndpoint.FilterConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-filterconfiguration.html | AWS::MediaPackageV2::OriginEndpoint.FilterConfiguration}
 */
export interface MediaPackageV2OriginEndpointFilterConfiguration {
  Start?: string;
  End?: string;
  TimeDelaySeconds?: number;
  ManifestFilter?: string;
}
/**
 * Type definition for AWS::MediaPackageV2::OriginEndpoint.HlsManifestConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-hlsmanifestconfiguration.html | AWS::MediaPackageV2::OriginEndpoint.HlsManifestConfiguration}
 */
export interface MediaPackageV2OriginEndpointHlsManifestConfiguration {
  ManifestWindowSeconds?: number;
  ManifestName: string;
  ProgramDateTimeIntervalSeconds?: number;
  ChildManifestName?: string;
  ScteHls?: MediaPackageV2OriginEndpointScteHls;
  FilterConfiguration?: MediaPackageV2OriginEndpointFilterConfiguration;
  Url?: string;
}
/**
 * Type definition for AWS::MediaPackageV2::OriginEndpoint.LowLatencyHlsManifestConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-lowlatencyhlsmanifestconfiguration.html | AWS::MediaPackageV2::OriginEndpoint.LowLatencyHlsManifestConfiguration}
 */
export interface MediaPackageV2OriginEndpointLowLatencyHlsManifestConfiguration {
  ManifestWindowSeconds?: number;
  ManifestName: string;
  ProgramDateTimeIntervalSeconds?: number;
  ChildManifestName?: string;
  ScteHls?: MediaPackageV2OriginEndpointScteHls;
  FilterConfiguration?: MediaPackageV2OriginEndpointFilterConfiguration;
  Url?: string;
}
/**
 * Type definition for AWS::MediaPackageV2::OriginEndpoint.Scte
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-scte.html | AWS::MediaPackageV2::OriginEndpoint.Scte}
 */
export interface MediaPackageV2OriginEndpointScte {
  ScteFilter?: any[];
}
/**
 * Type definition for AWS::MediaPackageV2::OriginEndpoint.ScteHls
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-sctehls.html | AWS::MediaPackageV2::OriginEndpoint.ScteHls}
 */
export interface MediaPackageV2OriginEndpointScteHls {
  AdMarkerHls?: string;
}
/**
 * Type definition for AWS::MediaPackageV2::OriginEndpoint.Segment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-segment.html | AWS::MediaPackageV2::OriginEndpoint.Segment}
 */
export interface MediaPackageV2OriginEndpointSegment {
  SegmentName?: string;
  TsUseAudioRenditionGroup?: boolean;
  IncludeIframeOnlyStreams?: boolean;
  Scte?: MediaPackageV2OriginEndpointScte;
  TsIncludeDvbSubtitles?: boolean;
  SegmentDurationSeconds?: number;
  Encryption?: MediaPackageV2OriginEndpointEncryption;
}
/**
 * Type definition for AWS::MediaPackageV2::OriginEndpoint.SpekeKeyProvider
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-spekekeyprovider.html | AWS::MediaPackageV2::OriginEndpoint.SpekeKeyProvider}
 */
export interface MediaPackageV2OriginEndpointSpekeKeyProvider {
  DrmSystems: any[];
  ResourceId: string;
  EncryptionContractConfiguration: MediaPackageV2OriginEndpointEncryptionContractConfiguration;
  RoleArn: string;
  Url: string;
}
/**
 * Type definition for AWS::MediaPackageV2::Channel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-channel.html | AWS::MediaPackageV2::Channel}
 */
export interface MediaPackageV2ChannelProps {
  ChannelName?: string;
  Description?: string;
  ChannelGroupName?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::MediaPackageV2::Channel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-channel.html | AWS::MediaPackageV2::Channel}
 */
export interface MediaPackageV2ChannelAttribs {
  ModifiedAt?: string;
  IngestEndpoints?: any[];
  CreatedAt?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::MediaPackageV2::Channel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-channel.html | AWS::MediaPackageV2::Channel}
 */
export class MediaPackageV2Channel extends ResourceBase<
  "AWS::MediaPackageV2::Channel",
  MediaPackageV2ChannelProps,
  MediaPackageV2ChannelAttribs
> {
  public static readonly Type = "AWS::MediaPackageV2::Channel";
  public static readonly AttributeNames: readonly (keyof MediaPackageV2ChannelAttribs)[] =
    ["ModifiedAt", "IngestEndpoints", "CreatedAt", "Arn"];
  constructor(
    logicalId: string,
    properties: MediaPackageV2ChannelProps,
    options?: ResourceOptions,
  ) {
    super(
      MediaPackageV2Channel.Type,
      MediaPackageV2Channel.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::MediaPackageV2::ChannelGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-channelgroup.html | AWS::MediaPackageV2::ChannelGroup}
 */
export interface MediaPackageV2ChannelGroupProps {
  Description?: string;
  ChannelGroupName?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::MediaPackageV2::ChannelGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-channelgroup.html | AWS::MediaPackageV2::ChannelGroup}
 */
export interface MediaPackageV2ChannelGroupAttribs {
  ModifiedAt?: string;
  CreatedAt?: string;
  Arn?: string;
  EgressDomain?: string;
}
/**
 * Resource class for AWS::MediaPackageV2::ChannelGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-channelgroup.html | AWS::MediaPackageV2::ChannelGroup}
 */
export class MediaPackageV2ChannelGroup extends ResourceBase<
  "AWS::MediaPackageV2::ChannelGroup",
  MediaPackageV2ChannelGroupProps,
  MediaPackageV2ChannelGroupAttribs
> {
  public static readonly Type = "AWS::MediaPackageV2::ChannelGroup";
  public static readonly AttributeNames: readonly (keyof MediaPackageV2ChannelGroupAttribs)[] =
    ["ModifiedAt", "CreatedAt", "Arn", "EgressDomain"];
  constructor(
    logicalId: string,
    properties: MediaPackageV2ChannelGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      MediaPackageV2ChannelGroup.Type,
      MediaPackageV2ChannelGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::MediaPackageV2::ChannelPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-channelpolicy.html | AWS::MediaPackageV2::ChannelPolicy}
 */
export interface MediaPackageV2ChannelPolicyProps {
  Policy: object;
  ChannelName?: string;
  ChannelGroupName?: string;
}
/**
 * Resource class for AWS::MediaPackageV2::ChannelPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-channelpolicy.html | AWS::MediaPackageV2::ChannelPolicy}
 */
export class MediaPackageV2ChannelPolicy extends ResourceBase<
  "AWS::MediaPackageV2::ChannelPolicy",
  MediaPackageV2ChannelPolicyProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::MediaPackageV2::ChannelPolicy";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: MediaPackageV2ChannelPolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      MediaPackageV2ChannelPolicy.Type,
      MediaPackageV2ChannelPolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::MediaPackageV2::OriginEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-originendpoint.html | AWS::MediaPackageV2::OriginEndpoint}
 */
export interface MediaPackageV2OriginEndpointProps {
  Description?: string;
  ChannelName?: string;
  LowLatencyHlsManifests?: any[];
  ContainerType: string;
  OriginEndpointName?: string;
  HlsManifests?: any[];
  ChannelGroupName?: string;
  Segment?: MediaPackageV2OriginEndpointSegment;
  Tags?: Tag[];
  StartoverWindowSeconds?: number;
}
/**
 * Attributes type definition for AWS::MediaPackageV2::OriginEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-originendpoint.html | AWS::MediaPackageV2::OriginEndpoint}
 */
export interface MediaPackageV2OriginEndpointAttribs {
  ModifiedAt?: string;
  CreatedAt?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::MediaPackageV2::OriginEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-originendpoint.html | AWS::MediaPackageV2::OriginEndpoint}
 */
export class MediaPackageV2OriginEndpoint extends ResourceBase<
  "AWS::MediaPackageV2::OriginEndpoint",
  MediaPackageV2OriginEndpointProps,
  MediaPackageV2OriginEndpointAttribs
> {
  public static readonly Type = "AWS::MediaPackageV2::OriginEndpoint";
  public static readonly AttributeNames: readonly (keyof MediaPackageV2OriginEndpointAttribs)[] =
    ["ModifiedAt", "CreatedAt", "Arn"];
  constructor(
    logicalId: string,
    properties: MediaPackageV2OriginEndpointProps,
    options?: ResourceOptions,
  ) {
    super(
      MediaPackageV2OriginEndpoint.Type,
      MediaPackageV2OriginEndpoint.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::MediaPackageV2::OriginEndpointPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-originendpointpolicy.html | AWS::MediaPackageV2::OriginEndpointPolicy}
 */
export interface MediaPackageV2OriginEndpointPolicyProps {
  Policy: object;
  ChannelName?: string;
  OriginEndpointName?: string;
  ChannelGroupName?: string;
}
/**
 * Resource class for AWS::MediaPackageV2::OriginEndpointPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-originendpointpolicy.html | AWS::MediaPackageV2::OriginEndpointPolicy}
 */
export class MediaPackageV2OriginEndpointPolicy extends ResourceBase<
  "AWS::MediaPackageV2::OriginEndpointPolicy",
  MediaPackageV2OriginEndpointPolicyProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::MediaPackageV2::OriginEndpointPolicy";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: MediaPackageV2OriginEndpointPolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      MediaPackageV2OriginEndpointPolicy.Type,
      MediaPackageV2OriginEndpointPolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
