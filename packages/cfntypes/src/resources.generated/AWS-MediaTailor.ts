import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::MediaTailor::Channel.DashPlaylistSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-channel-dashplaylistsettings.html | AWS::MediaTailor::Channel.DashPlaylistSettings}
 */
export interface MediaTailorChannelDashPlaylistSettings {
  ManifestWindowSeconds?: number;
  SuggestedPresentationDelaySeconds?: number;
  MinBufferTimeSeconds?: number;
  MinUpdatePeriodSeconds?: number;
}
/**
 * Type definition for AWS::MediaTailor::Channel.HlsPlaylistSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-channel-hlsplaylistsettings.html | AWS::MediaTailor::Channel.HlsPlaylistSettings}
 */
export interface MediaTailorChannelHlsPlaylistSettings {
  ManifestWindowSeconds?: number;
  AdMarkupType?: any[];
}
/**
 * Type definition for AWS::MediaTailor::Channel.LogConfigurationForChannel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-channel-logconfigurationforchannel.html | AWS::MediaTailor::Channel.LogConfigurationForChannel}
 */
export interface MediaTailorChannelLogConfigurationForChannel {
  LogTypes?: any[];
}
/**
 * Type definition for AWS::MediaTailor::Channel.RequestOutputItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-channel-requestoutputitem.html | AWS::MediaTailor::Channel.RequestOutputItem}
 */
export interface MediaTailorChannelRequestOutputItem {
  ManifestName: string;
  DashPlaylistSettings?: MediaTailorChannelDashPlaylistSettings;
  HlsPlaylistSettings?: MediaTailorChannelHlsPlaylistSettings;
  SourceGroup: string;
}
/**
 * Type definition for AWS::MediaTailor::Channel.SlateSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-channel-slatesource.html | AWS::MediaTailor::Channel.SlateSource}
 */
export interface MediaTailorChannelSlateSource {
  VodSourceName?: string;
  SourceLocationName?: string;
}
/**
 * Type definition for AWS::MediaTailor::LiveSource.HttpPackageConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-livesource-httppackageconfiguration.html | AWS::MediaTailor::LiveSource.HttpPackageConfiguration}
 */
export interface MediaTailorLiveSourceHttpPackageConfiguration {
  Path: string;
  Type: string;
  SourceGroup: string;
}
/**
 * Type definition for AWS::MediaTailor::PlaybackConfiguration.AdMarkerPassthrough
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-admarkerpassthrough.html | AWS::MediaTailor::PlaybackConfiguration.AdMarkerPassthrough}
 */
export interface MediaTailorPlaybackConfigurationAdMarkerPassthrough {
  Enabled?: boolean;
}
/**
 * Type definition for AWS::MediaTailor::PlaybackConfiguration.AvailSuppression
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-availsuppression.html | AWS::MediaTailor::PlaybackConfiguration.AvailSuppression}
 */
export interface MediaTailorPlaybackConfigurationAvailSuppression {
  Mode?: string;
  Value?: string;
}
/**
 * Type definition for AWS::MediaTailor::PlaybackConfiguration.Bumper
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-bumper.html | AWS::MediaTailor::PlaybackConfiguration.Bumper}
 */
export interface MediaTailorPlaybackConfigurationBumper {
  StartUrl?: string;
  EndUrl?: string;
}
/**
 * Type definition for AWS::MediaTailor::PlaybackConfiguration.CdnConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-cdnconfiguration.html | AWS::MediaTailor::PlaybackConfiguration.CdnConfiguration}
 */
export interface MediaTailorPlaybackConfigurationCdnConfiguration {
  AdSegmentUrlPrefix?: string;
  ContentSegmentUrlPrefix?: string;
}
/**
 * Type definition for AWS::MediaTailor::PlaybackConfiguration.DashConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-dashconfiguration.html | AWS::MediaTailor::PlaybackConfiguration.DashConfiguration}
 */
export interface MediaTailorPlaybackConfigurationDashConfiguration {
  MpdLocation?: string;
  ManifestEndpointPrefix?: string;
  OriginManifestType?: string;
}
/**
 * Type definition for AWS::MediaTailor::PlaybackConfiguration.HlsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-hlsconfiguration.html | AWS::MediaTailor::PlaybackConfiguration.HlsConfiguration}
 */
export interface MediaTailorPlaybackConfigurationHlsConfiguration {
  ManifestEndpointPrefix?: string;
}
/**
 * Type definition for AWS::MediaTailor::PlaybackConfiguration.LivePreRollConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-liveprerollconfiguration.html | AWS::MediaTailor::PlaybackConfiguration.LivePreRollConfiguration}
 */
export interface MediaTailorPlaybackConfigurationLivePreRollConfiguration {
  AdDecisionServerUrl?: string;
  MaxDurationSeconds?: number;
}
/**
 * Type definition for AWS::MediaTailor::PlaybackConfiguration.ManifestProcessingRules
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-manifestprocessingrules.html | AWS::MediaTailor::PlaybackConfiguration.ManifestProcessingRules}
 */
export interface MediaTailorPlaybackConfigurationManifestProcessingRules {
  AdMarkerPassthrough?: MediaTailorPlaybackConfigurationAdMarkerPassthrough;
}
/**
 * Type definition for AWS::MediaTailor::SourceLocation.AccessConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-sourcelocation-accessconfiguration.html | AWS::MediaTailor::SourceLocation.AccessConfiguration}
 */
export interface MediaTailorSourceLocationAccessConfiguration {
  SecretsManagerAccessTokenConfiguration?: MediaTailorSourceLocationSecretsManagerAccessTokenConfiguration;
  AccessType?: string;
}
/**
 * Type definition for AWS::MediaTailor::SourceLocation.DefaultSegmentDeliveryConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-sourcelocation-defaultsegmentdeliveryconfiguration.html | AWS::MediaTailor::SourceLocation.DefaultSegmentDeliveryConfiguration}
 */
export interface MediaTailorSourceLocationDefaultSegmentDeliveryConfiguration {
  BaseUrl?: string;
}
/**
 * Type definition for AWS::MediaTailor::SourceLocation.HttpConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-sourcelocation-httpconfiguration.html | AWS::MediaTailor::SourceLocation.HttpConfiguration}
 */
export interface MediaTailorSourceLocationHttpConfiguration {
  BaseUrl: string;
}
/**
 * Type definition for AWS::MediaTailor::SourceLocation.SecretsManagerAccessTokenConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-sourcelocation-secretsmanageraccesstokenconfiguration.html | AWS::MediaTailor::SourceLocation.SecretsManagerAccessTokenConfiguration}
 */
export interface MediaTailorSourceLocationSecretsManagerAccessTokenConfiguration {
  SecretArn?: string;
  HeaderName?: string;
  SecretStringKey?: string;
}
/**
 * Type definition for AWS::MediaTailor::SourceLocation.SegmentDeliveryConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-sourcelocation-segmentdeliveryconfiguration.html | AWS::MediaTailor::SourceLocation.SegmentDeliveryConfiguration}
 */
export interface MediaTailorSourceLocationSegmentDeliveryConfiguration {
  BaseUrl?: string;
  Name?: string;
}
/**
 * Type definition for AWS::MediaTailor::VodSource.HttpPackageConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-vodsource-httppackageconfiguration.html | AWS::MediaTailor::VodSource.HttpPackageConfiguration}
 */
export interface MediaTailorVodSourceHttpPackageConfiguration {
  Path: string;
  Type: string;
  SourceGroup: string;
}
/**
 * Type definition for AWS::MediaTailor::Channel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html | AWS::MediaTailor::Channel}
 */
export interface MediaTailorChannelProps {
  FillerSlate?: MediaTailorChannelSlateSource;
  ChannelName: string;
  Tier?: string;
  Outputs: any[];
  LogConfiguration?: MediaTailorChannelLogConfigurationForChannel;
  PlaybackMode: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::MediaTailor::Channel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html | AWS::MediaTailor::Channel}
 */
export interface MediaTailorChannelAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::MediaTailor::Channel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html | AWS::MediaTailor::Channel}
 */
export class MediaTailorChannel extends ResourceBase<
  "AWS::MediaTailor::Channel",
  MediaTailorChannelProps,
  MediaTailorChannelAttribs
> {
  public static readonly Type = "AWS::MediaTailor::Channel";
  public static readonly AttributeNames: readonly (keyof MediaTailorChannelAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: MediaTailorChannelProps,
    options?: ResourceOptions,
  ) {
    super(
      MediaTailorChannel.Type,
      MediaTailorChannel.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::MediaTailor::ChannelPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channelpolicy.html | AWS::MediaTailor::ChannelPolicy}
 */
export interface MediaTailorChannelPolicyProps {
  Policy: object;
  ChannelName: string;
}
/**
 * Resource class for AWS::MediaTailor::ChannelPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channelpolicy.html | AWS::MediaTailor::ChannelPolicy}
 */
export class MediaTailorChannelPolicy extends ResourceBase<
  "AWS::MediaTailor::ChannelPolicy",
  MediaTailorChannelPolicyProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::MediaTailor::ChannelPolicy";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: MediaTailorChannelPolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      MediaTailorChannelPolicy.Type,
      MediaTailorChannelPolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::MediaTailor::LiveSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-livesource.html | AWS::MediaTailor::LiveSource}
 */
export interface MediaTailorLiveSourceProps {
  LiveSourceName: string;
  SourceLocationName: string;
  HttpPackageConfigurations: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::MediaTailor::LiveSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-livesource.html | AWS::MediaTailor::LiveSource}
 */
export interface MediaTailorLiveSourceAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::MediaTailor::LiveSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-livesource.html | AWS::MediaTailor::LiveSource}
 */
export class MediaTailorLiveSource extends ResourceBase<
  "AWS::MediaTailor::LiveSource",
  MediaTailorLiveSourceProps,
  MediaTailorLiveSourceAttribs
> {
  public static readonly Type = "AWS::MediaTailor::LiveSource";
  public static readonly AttributeNames: readonly (keyof MediaTailorLiveSourceAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: MediaTailorLiveSourceProps,
    options?: ResourceOptions,
  ) {
    super(
      MediaTailorLiveSource.Type,
      MediaTailorLiveSource.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::MediaTailor::PlaybackConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-playbackconfiguration.html | AWS::MediaTailor::PlaybackConfiguration}
 */
export interface MediaTailorPlaybackConfigurationProps {
  Bumper?: MediaTailorPlaybackConfigurationBumper;
  DashConfiguration?: MediaTailorPlaybackConfigurationDashConfiguration;
  CdnConfiguration?: MediaTailorPlaybackConfigurationCdnConfiguration;
  ManifestProcessingRules?: MediaTailorPlaybackConfigurationManifestProcessingRules;
  PersonalizationThresholdSeconds?: number;
  LivePreRollConfiguration?: MediaTailorPlaybackConfigurationLivePreRollConfiguration;
  HlsConfiguration?: MediaTailorPlaybackConfigurationHlsConfiguration;
  VideoContentSourceUrl: string;
  Name: string;
  TranscodeProfileName?: string;
  ConfigurationAliases?: Record<string, any>;
  AdDecisionServerUrl: string;
  SlateAdUrl?: string;
  AvailSuppression?: MediaTailorPlaybackConfigurationAvailSuppression;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::MediaTailor::PlaybackConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-playbackconfiguration.html | AWS::MediaTailor::PlaybackConfiguration}
 */
export interface MediaTailorPlaybackConfigurationAttribs {
  "HlsConfiguration.ManifestEndpointPrefix"?: string;
  SessionInitializationEndpointPrefix?: string;
  "DashConfiguration.ManifestEndpointPrefix"?: string;
  PlaybackConfigurationArn?: string;
  PlaybackEndpointPrefix?: string;
}
/**
 * Resource class for AWS::MediaTailor::PlaybackConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-playbackconfiguration.html | AWS::MediaTailor::PlaybackConfiguration}
 */
export class MediaTailorPlaybackConfiguration extends ResourceBase<
  "AWS::MediaTailor::PlaybackConfiguration",
  MediaTailorPlaybackConfigurationProps,
  MediaTailorPlaybackConfigurationAttribs
> {
  public static readonly Type = "AWS::MediaTailor::PlaybackConfiguration";
  public static readonly AttributeNames: readonly (keyof MediaTailorPlaybackConfigurationAttribs)[] =
    [
      "HlsConfiguration.ManifestEndpointPrefix",
      "SessionInitializationEndpointPrefix",
      "DashConfiguration.ManifestEndpointPrefix",
      "PlaybackConfigurationArn",
      "PlaybackEndpointPrefix",
    ];
  constructor(
    logicalId: string,
    properties: MediaTailorPlaybackConfigurationProps,
    options?: ResourceOptions,
  ) {
    super(
      MediaTailorPlaybackConfiguration.Type,
      MediaTailorPlaybackConfiguration.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::MediaTailor::SourceLocation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-sourcelocation.html | AWS::MediaTailor::SourceLocation}
 */
export interface MediaTailorSourceLocationProps {
  SourceLocationName: string;
  DefaultSegmentDeliveryConfiguration?: MediaTailorSourceLocationDefaultSegmentDeliveryConfiguration;
  SegmentDeliveryConfigurations?: any[];
  HttpConfiguration: MediaTailorSourceLocationHttpConfiguration;
  AccessConfiguration?: MediaTailorSourceLocationAccessConfiguration;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::MediaTailor::SourceLocation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-sourcelocation.html | AWS::MediaTailor::SourceLocation}
 */
export interface MediaTailorSourceLocationAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::MediaTailor::SourceLocation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-sourcelocation.html | AWS::MediaTailor::SourceLocation}
 */
export class MediaTailorSourceLocation extends ResourceBase<
  "AWS::MediaTailor::SourceLocation",
  MediaTailorSourceLocationProps,
  MediaTailorSourceLocationAttribs
> {
  public static readonly Type = "AWS::MediaTailor::SourceLocation";
  public static readonly AttributeNames: readonly (keyof MediaTailorSourceLocationAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: MediaTailorSourceLocationProps,
    options?: ResourceOptions,
  ) {
    super(
      MediaTailorSourceLocation.Type,
      MediaTailorSourceLocation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::MediaTailor::VodSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-vodsource.html | AWS::MediaTailor::VodSource}
 */
export interface MediaTailorVodSourceProps {
  VodSourceName: string;
  SourceLocationName: string;
  HttpPackageConfigurations: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::MediaTailor::VodSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-vodsource.html | AWS::MediaTailor::VodSource}
 */
export interface MediaTailorVodSourceAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::MediaTailor::VodSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-vodsource.html | AWS::MediaTailor::VodSource}
 */
export class MediaTailorVodSource extends ResourceBase<
  "AWS::MediaTailor::VodSource",
  MediaTailorVodSourceProps,
  MediaTailorVodSourceAttribs
> {
  public static readonly Type = "AWS::MediaTailor::VodSource";
  public static readonly AttributeNames: readonly (keyof MediaTailorVodSourceAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: MediaTailorVodSourceProps,
    options?: ResourceOptions,
  ) {
    super(
      MediaTailorVodSource.Type,
      MediaTailorVodSource.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
