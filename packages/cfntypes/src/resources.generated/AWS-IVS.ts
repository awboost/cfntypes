import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::IVS::RecordingConfiguration.DestinationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-recordingconfiguration-destinationconfiguration.html | AWS::IVS::RecordingConfiguration.DestinationConfiguration}
 */
export interface IVSRecordingConfigurationDestinationConfiguration {
  S3?: IVSRecordingConfigurationS3DestinationConfiguration;
}
/**
 * Type definition for AWS::IVS::RecordingConfiguration.RenditionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-recordingconfiguration-renditionconfiguration.html | AWS::IVS::RecordingConfiguration.RenditionConfiguration}
 */
export interface IVSRecordingConfigurationRenditionConfiguration {
  RenditionSelection?: string;
  Renditions?: any[];
}
/**
 * Type definition for AWS::IVS::RecordingConfiguration.S3DestinationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-recordingconfiguration-s3destinationconfiguration.html | AWS::IVS::RecordingConfiguration.S3DestinationConfiguration}
 */
export interface IVSRecordingConfigurationS3DestinationConfiguration {
  BucketName: string;
}
/**
 * Type definition for AWS::IVS::RecordingConfiguration.ThumbnailConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-recordingconfiguration-thumbnailconfiguration.html | AWS::IVS::RecordingConfiguration.ThumbnailConfiguration}
 */
export interface IVSRecordingConfigurationThumbnailConfiguration {
  TargetIntervalSeconds?: number;
  Storage?: any[];
  RecordingMode?: string;
  Resolution?: string;
}
/**
 * Type definition for AWS::IVS::Channel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-channel.html | AWS::IVS::Channel}
 */
export interface IVSChannelProps {
  Type?: string;
  RecordingConfigurationArn?: string;
  Authorized?: boolean;
  Preset?: string;
  InsecureIngest?: boolean;
  LatencyMode?: string;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::IVS::Channel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-channel.html | AWS::IVS::Channel}
 */
export interface IVSChannelAttribs {
  PlaybackUrl?: string;
  IngestEndpoint?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::IVS::Channel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-channel.html | AWS::IVS::Channel}
 */
export class IVSChannel extends ResourceBase<
  "AWS::IVS::Channel",
  IVSChannelProps,
  IVSChannelAttribs
> {
  public static readonly Type = "AWS::IVS::Channel";
  public static readonly AttributeNames: readonly (keyof IVSChannelAttribs)[] =
    ["PlaybackUrl", "IngestEndpoint", "Arn"];
  constructor(
    logicalId: string,
    properties: IVSChannelProps,
    options?: ResourceOptions,
  ) {
    super(
      IVSChannel.Type,
      IVSChannel.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IVS::PlaybackKeyPair
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-playbackkeypair.html | AWS::IVS::PlaybackKeyPair}
 */
export interface IVSPlaybackKeyPairProps {
  PublicKeyMaterial?: string;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::IVS::PlaybackKeyPair
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-playbackkeypair.html | AWS::IVS::PlaybackKeyPair}
 */
export interface IVSPlaybackKeyPairAttribs {
  Fingerprint?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::IVS::PlaybackKeyPair
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-playbackkeypair.html | AWS::IVS::PlaybackKeyPair}
 */
export class IVSPlaybackKeyPair extends ResourceBase<
  "AWS::IVS::PlaybackKeyPair",
  IVSPlaybackKeyPairProps,
  IVSPlaybackKeyPairAttribs
> {
  public static readonly Type = "AWS::IVS::PlaybackKeyPair";
  public static readonly AttributeNames: readonly (keyof IVSPlaybackKeyPairAttribs)[] =
    ["Fingerprint", "Arn"];
  constructor(
    logicalId: string,
    properties: IVSPlaybackKeyPairProps,
    options?: ResourceOptions,
  ) {
    super(
      IVSPlaybackKeyPair.Type,
      IVSPlaybackKeyPair.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IVS::RecordingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html | AWS::IVS::RecordingConfiguration}
 */
export interface IVSRecordingConfigurationProps {
  DestinationConfiguration: IVSRecordingConfigurationDestinationConfiguration;
  RenditionConfiguration?: IVSRecordingConfigurationRenditionConfiguration;
  RecordingReconnectWindowSeconds?: number;
  Tags?: Tag[];
  ThumbnailConfiguration?: IVSRecordingConfigurationThumbnailConfiguration;
  Name?: string;
}
/**
 * Attributes type definition for AWS::IVS::RecordingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html | AWS::IVS::RecordingConfiguration}
 */
export interface IVSRecordingConfigurationAttribs {
  State?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::IVS::RecordingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html | AWS::IVS::RecordingConfiguration}
 */
export class IVSRecordingConfiguration extends ResourceBase<
  "AWS::IVS::RecordingConfiguration",
  IVSRecordingConfigurationProps,
  IVSRecordingConfigurationAttribs
> {
  public static readonly Type = "AWS::IVS::RecordingConfiguration";
  public static readonly AttributeNames: readonly (keyof IVSRecordingConfigurationAttribs)[] =
    ["State", "Arn"];
  constructor(
    logicalId: string,
    properties: IVSRecordingConfigurationProps,
    options?: ResourceOptions,
  ) {
    super(
      IVSRecordingConfiguration.Type,
      IVSRecordingConfiguration.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IVS::StreamKey
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-streamkey.html | AWS::IVS::StreamKey}
 */
export interface IVSStreamKeyProps {
  ChannelArn: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::IVS::StreamKey
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-streamkey.html | AWS::IVS::StreamKey}
 */
export interface IVSStreamKeyAttribs {
  Value?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::IVS::StreamKey
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-streamkey.html | AWS::IVS::StreamKey}
 */
export class IVSStreamKey extends ResourceBase<
  "AWS::IVS::StreamKey",
  IVSStreamKeyProps,
  IVSStreamKeyAttribs
> {
  public static readonly Type = "AWS::IVS::StreamKey";
  public static readonly AttributeNames: readonly (keyof IVSStreamKeyAttribs)[] =
    ["Value", "Arn"];
  constructor(
    logicalId: string,
    properties: IVSStreamKeyProps,
    options?: ResourceOptions,
  ) {
    super(
      IVSStreamKey.Type,
      IVSStreamKey.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
