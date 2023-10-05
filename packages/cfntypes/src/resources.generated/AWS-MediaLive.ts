import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::MediaLive::Channel.AacSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-aacsettings.html | AWS::MediaLive::Channel.AacSettings}
 */
export interface MediaLiveChannelAacSettings {
  CodingMode?: string;
  RateControlMode?: string;
  SampleRate?: number;
  InputType?: string;
  VbrQuality?: string;
  RawFormat?: string;
  Spec?: string;
  Bitrate?: number;
  Profile?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.Ac3Settings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-ac3settings.html | AWS::MediaLive::Channel.Ac3Settings}
 */
export interface MediaLiveChannelAc3Settings {
  CodingMode?: string;
  DrcProfile?: string;
  MetadataControl?: string;
  Dialnorm?: number;
  LfeFilter?: string;
  BitstreamMode?: string;
  AttenuationControl?: string;
  Bitrate?: number;
}
/**
 * Type definition for AWS::MediaLive::Channel.AncillarySourceSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-ancillarysourcesettings.html | AWS::MediaLive::Channel.AncillarySourceSettings}
 */
export interface MediaLiveChannelAncillarySourceSettings {
  SourceAncillaryChannelNumber?: number;
}
/**
 * Type definition for AWS::MediaLive::Channel.ArchiveCdnSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-archivecdnsettings.html | AWS::MediaLive::Channel.ArchiveCdnSettings}
 */
export interface MediaLiveChannelArchiveCdnSettings {
  ArchiveS3Settings?: MediaLiveChannelArchiveS3Settings;
}
/**
 * Type definition for AWS::MediaLive::Channel.ArchiveContainerSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-archivecontainersettings.html | AWS::MediaLive::Channel.ArchiveContainerSettings}
 */
export interface MediaLiveChannelArchiveContainerSettings {
  RawSettings?: MediaLiveChannelRawSettings;
  M2tsSettings?: MediaLiveChannelM2tsSettings;
}
/**
 * Type definition for AWS::MediaLive::Channel.ArchiveGroupSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-archivegroupsettings.html | AWS::MediaLive::Channel.ArchiveGroupSettings}
 */
export interface MediaLiveChannelArchiveGroupSettings {
  Destination?: MediaLiveChannelOutputLocationRef;
  ArchiveCdnSettings?: MediaLiveChannelArchiveCdnSettings;
  RolloverInterval?: number;
}
/**
 * Type definition for AWS::MediaLive::Channel.ArchiveOutputSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-archiveoutputsettings.html | AWS::MediaLive::Channel.ArchiveOutputSettings}
 */
export interface MediaLiveChannelArchiveOutputSettings {
  Extension?: string;
  NameModifier?: string;
  ContainerSettings?: MediaLiveChannelArchiveContainerSettings;
}
/**
 * Type definition for AWS::MediaLive::Channel.ArchiveS3Settings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-archives3settings.html | AWS::MediaLive::Channel.ArchiveS3Settings}
 */
export interface MediaLiveChannelArchiveS3Settings {
  CannedAcl?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.AribDestinationSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-aribdestinationsettings.html | AWS::MediaLive::Channel.AribDestinationSettings}
 */
export interface MediaLiveChannelAribDestinationSettings {}
/**
 * Type definition for AWS::MediaLive::Channel.AribSourceSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-aribsourcesettings.html | AWS::MediaLive::Channel.AribSourceSettings}
 */
export interface MediaLiveChannelAribSourceSettings {}
/**
 * Type definition for AWS::MediaLive::Channel.AudioChannelMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiochannelmapping.html | AWS::MediaLive::Channel.AudioChannelMapping}
 */
export interface MediaLiveChannelAudioChannelMapping {
  OutputChannel?: number;
  InputChannelLevels?: any[];
}
/**
 * Type definition for AWS::MediaLive::Channel.AudioCodecSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiocodecsettings.html | AWS::MediaLive::Channel.AudioCodecSettings}
 */
export interface MediaLiveChannelAudioCodecSettings {
  Eac3Settings?: MediaLiveChannelEac3Settings;
  Ac3Settings?: MediaLiveChannelAc3Settings;
  Mp2Settings?: MediaLiveChannelMp2Settings;
  Eac3AtmosSettings?: MediaLiveChannelEac3AtmosSettings;
  PassThroughSettings?: MediaLiveChannelPassThroughSettings;
  WavSettings?: MediaLiveChannelWavSettings;
  AacSettings?: MediaLiveChannelAacSettings;
}
/**
 * Type definition for AWS::MediaLive::Channel.AudioDescription
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiodescription.html | AWS::MediaLive::Channel.AudioDescription}
 */
export interface MediaLiveChannelAudioDescription {
  AudioNormalizationSettings?: MediaLiveChannelAudioNormalizationSettings;
  LanguageCode?: string;
  RemixSettings?: MediaLiveChannelRemixSettings;
  AudioSelectorName?: string;
  StreamName?: string;
  LanguageCodeControl?: string;
  AudioType?: string;
  AudioTypeControl?: string;
  CodecSettings?: MediaLiveChannelAudioCodecSettings;
  Name?: string;
  AudioWatermarkingSettings?: MediaLiveChannelAudioWatermarkSettings;
}
/**
 * Type definition for AWS::MediaLive::Channel.AudioDolbyEDecode
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiodolbyedecode.html | AWS::MediaLive::Channel.AudioDolbyEDecode}
 */
export interface MediaLiveChannelAudioDolbyEDecode {
  ProgramSelection?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.AudioHlsRenditionSelection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiohlsrenditionselection.html | AWS::MediaLive::Channel.AudioHlsRenditionSelection}
 */
export interface MediaLiveChannelAudioHlsRenditionSelection {
  GroupId?: string;
  Name?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.AudioLanguageSelection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiolanguageselection.html | AWS::MediaLive::Channel.AudioLanguageSelection}
 */
export interface MediaLiveChannelAudioLanguageSelection {
  LanguageCode?: string;
  LanguageSelectionPolicy?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.AudioNormalizationSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audionormalizationsettings.html | AWS::MediaLive::Channel.AudioNormalizationSettings}
 */
export interface MediaLiveChannelAudioNormalizationSettings {
  TargetLkfs?: number;
  Algorithm?: string;
  AlgorithmControl?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.AudioOnlyHlsSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audioonlyhlssettings.html | AWS::MediaLive::Channel.AudioOnlyHlsSettings}
 */
export interface MediaLiveChannelAudioOnlyHlsSettings {
  SegmentType?: string;
  AudioTrackType?: string;
  AudioOnlyImage?: MediaLiveChannelInputLocation;
  AudioGroupId?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.AudioPidSelection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiopidselection.html | AWS::MediaLive::Channel.AudioPidSelection}
 */
export interface MediaLiveChannelAudioPidSelection {
  Pid?: number;
}
/**
 * Type definition for AWS::MediaLive::Channel.AudioSelector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audioselector.html | AWS::MediaLive::Channel.AudioSelector}
 */
export interface MediaLiveChannelAudioSelector {
  SelectorSettings?: MediaLiveChannelAudioSelectorSettings;
  Name?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.AudioSelectorSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audioselectorsettings.html | AWS::MediaLive::Channel.AudioSelectorSettings}
 */
export interface MediaLiveChannelAudioSelectorSettings {
  AudioPidSelection?: MediaLiveChannelAudioPidSelection;
  AudioLanguageSelection?: MediaLiveChannelAudioLanguageSelection;
  AudioTrackSelection?: MediaLiveChannelAudioTrackSelection;
  AudioHlsRenditionSelection?: MediaLiveChannelAudioHlsRenditionSelection;
}
/**
 * Type definition for AWS::MediaLive::Channel.AudioSilenceFailoverSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiosilencefailoversettings.html | AWS::MediaLive::Channel.AudioSilenceFailoverSettings}
 */
export interface MediaLiveChannelAudioSilenceFailoverSettings {
  AudioSelectorName?: string;
  AudioSilenceThresholdMsec?: number;
}
/**
 * Type definition for AWS::MediaLive::Channel.AudioTrack
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiotrack.html | AWS::MediaLive::Channel.AudioTrack}
 */
export interface MediaLiveChannelAudioTrack {
  Track?: number;
}
/**
 * Type definition for AWS::MediaLive::Channel.AudioTrackSelection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiotrackselection.html | AWS::MediaLive::Channel.AudioTrackSelection}
 */
export interface MediaLiveChannelAudioTrackSelection {
  DolbyEDecode?: MediaLiveChannelAudioDolbyEDecode;
  Tracks?: any[];
}
/**
 * Type definition for AWS::MediaLive::Channel.AudioWatermarkSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiowatermarksettings.html | AWS::MediaLive::Channel.AudioWatermarkSettings}
 */
export interface MediaLiveChannelAudioWatermarkSettings {
  NielsenWatermarksSettings?: MediaLiveChannelNielsenWatermarksSettings;
}
/**
 * Type definition for AWS::MediaLive::Channel.AutomaticInputFailoverSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-automaticinputfailoversettings.html | AWS::MediaLive::Channel.AutomaticInputFailoverSettings}
 */
export interface MediaLiveChannelAutomaticInputFailoverSettings {
  FailoverConditions?: any[];
  InputPreference?: string;
  SecondaryInputId?: string;
  ErrorClearTimeMsec?: number;
}
/**
 * Type definition for AWS::MediaLive::Channel.AvailBlanking
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-availblanking.html | AWS::MediaLive::Channel.AvailBlanking}
 */
export interface MediaLiveChannelAvailBlanking {
  State?: string;
  AvailBlankingImage?: MediaLiveChannelInputLocation;
}
/**
 * Type definition for AWS::MediaLive::Channel.AvailConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-availconfiguration.html | AWS::MediaLive::Channel.AvailConfiguration}
 */
export interface MediaLiveChannelAvailConfiguration {
  AvailSettings?: MediaLiveChannelAvailSettings;
}
/**
 * Type definition for AWS::MediaLive::Channel.AvailSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-availsettings.html | AWS::MediaLive::Channel.AvailSettings}
 */
export interface MediaLiveChannelAvailSettings {
  Scte35SpliceInsert?: MediaLiveChannelScte35SpliceInsert;
  Scte35TimeSignalApos?: MediaLiveChannelScte35TimeSignalApos;
  Esam?: MediaLiveChannelEsam;
}
/**
 * Type definition for AWS::MediaLive::Channel.BlackoutSlate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-blackoutslate.html | AWS::MediaLive::Channel.BlackoutSlate}
 */
export interface MediaLiveChannelBlackoutSlate {
  NetworkEndBlackout?: string;
  State?: string;
  NetworkId?: string;
  NetworkEndBlackoutImage?: MediaLiveChannelInputLocation;
  BlackoutSlateImage?: MediaLiveChannelInputLocation;
}
/**
 * Type definition for AWS::MediaLive::Channel.BurnInDestinationSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-burnindestinationsettings.html | AWS::MediaLive::Channel.BurnInDestinationSettings}
 */
export interface MediaLiveChannelBurnInDestinationSettings {
  BackgroundOpacity?: number;
  FontResolution?: number;
  OutlineColor?: string;
  FontColor?: string;
  ShadowColor?: string;
  ShadowOpacity?: number;
  Font?: MediaLiveChannelInputLocation;
  ShadowYOffset?: number;
  Alignment?: string;
  XPosition?: number;
  FontSize?: string;
  YPosition?: number;
  OutlineSize?: number;
  TeletextGridControl?: string;
  FontOpacity?: number;
  ShadowXOffset?: number;
  BackgroundColor?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.CaptionDescription
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captiondescription.html | AWS::MediaLive::Channel.CaptionDescription}
 */
export interface MediaLiveChannelCaptionDescription {
  DestinationSettings?: MediaLiveChannelCaptionDestinationSettings;
  LanguageCode?: string;
  LanguageDescription?: string;
  Accessibility?: string;
  CaptionSelectorName?: string;
  Name?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.CaptionDestinationSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captiondestinationsettings.html | AWS::MediaLive::Channel.CaptionDestinationSettings}
 */
export interface MediaLiveChannelCaptionDestinationSettings {
  AribDestinationSettings?: MediaLiveChannelAribDestinationSettings;
  EbuTtDDestinationSettings?: MediaLiveChannelEbuTtDDestinationSettings;
  SmpteTtDestinationSettings?: MediaLiveChannelSmpteTtDestinationSettings;
  EmbeddedPlusScte20DestinationSettings?: MediaLiveChannelEmbeddedPlusScte20DestinationSettings;
  TtmlDestinationSettings?: MediaLiveChannelTtmlDestinationSettings;
  Scte20PlusEmbeddedDestinationSettings?: MediaLiveChannelScte20PlusEmbeddedDestinationSettings;
  DvbSubDestinationSettings?: MediaLiveChannelDvbSubDestinationSettings;
  TeletextDestinationSettings?: MediaLiveChannelTeletextDestinationSettings;
  BurnInDestinationSettings?: MediaLiveChannelBurnInDestinationSettings;
  WebvttDestinationSettings?: MediaLiveChannelWebvttDestinationSettings;
  EmbeddedDestinationSettings?: MediaLiveChannelEmbeddedDestinationSettings;
  RtmpCaptionInfoDestinationSettings?: MediaLiveChannelRtmpCaptionInfoDestinationSettings;
  Scte27DestinationSettings?: MediaLiveChannelScte27DestinationSettings;
}
/**
 * Type definition for AWS::MediaLive::Channel.CaptionLanguageMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captionlanguagemapping.html | AWS::MediaLive::Channel.CaptionLanguageMapping}
 */
export interface MediaLiveChannelCaptionLanguageMapping {
  LanguageCode?: string;
  LanguageDescription?: string;
  CaptionChannel?: number;
}
/**
 * Type definition for AWS::MediaLive::Channel.CaptionRectangle
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captionrectangle.html | AWS::MediaLive::Channel.CaptionRectangle}
 */
export interface MediaLiveChannelCaptionRectangle {
  TopOffset?: number;
  Height?: number;
  Width?: number;
  LeftOffset?: number;
}
/**
 * Type definition for AWS::MediaLive::Channel.CaptionSelector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captionselector.html | AWS::MediaLive::Channel.CaptionSelector}
 */
export interface MediaLiveChannelCaptionSelector {
  LanguageCode?: string;
  SelectorSettings?: MediaLiveChannelCaptionSelectorSettings;
  Name?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.CaptionSelectorSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captionselectorsettings.html | AWS::MediaLive::Channel.CaptionSelectorSettings}
 */
export interface MediaLiveChannelCaptionSelectorSettings {
  DvbSubSourceSettings?: MediaLiveChannelDvbSubSourceSettings;
  Scte27SourceSettings?: MediaLiveChannelScte27SourceSettings;
  AribSourceSettings?: MediaLiveChannelAribSourceSettings;
  EmbeddedSourceSettings?: MediaLiveChannelEmbeddedSourceSettings;
  Scte20SourceSettings?: MediaLiveChannelScte20SourceSettings;
  TeletextSourceSettings?: MediaLiveChannelTeletextSourceSettings;
  AncillarySourceSettings?: MediaLiveChannelAncillarySourceSettings;
}
/**
 * Type definition for AWS::MediaLive::Channel.CdiInputSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-cdiinputspecification.html | AWS::MediaLive::Channel.CdiInputSpecification}
 */
export interface MediaLiveChannelCdiInputSpecification {
  Resolution?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.ColorSpacePassthroughSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-colorspacepassthroughsettings.html | AWS::MediaLive::Channel.ColorSpacePassthroughSettings}
 */
export interface MediaLiveChannelColorSpacePassthroughSettings {}
/**
 * Type definition for AWS::MediaLive::Channel.DolbyVision81Settings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dolbyvision81settings.html | AWS::MediaLive::Channel.DolbyVision81Settings}
 */
export interface MediaLiveChannelDolbyVision81Settings {}
/**
 * Type definition for AWS::MediaLive::Channel.DvbNitSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbnitsettings.html | AWS::MediaLive::Channel.DvbNitSettings}
 */
export interface MediaLiveChannelDvbNitSettings {
  NetworkName?: string;
  RepInterval?: number;
  NetworkId?: number;
}
/**
 * Type definition for AWS::MediaLive::Channel.DvbSdtSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbsdtsettings.html | AWS::MediaLive::Channel.DvbSdtSettings}
 */
export interface MediaLiveChannelDvbSdtSettings {
  ServiceProviderName?: string;
  OutputSdt?: string;
  ServiceName?: string;
  RepInterval?: number;
}
/**
 * Type definition for AWS::MediaLive::Channel.DvbSubDestinationSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbsubdestinationsettings.html | AWS::MediaLive::Channel.DvbSubDestinationSettings}
 */
export interface MediaLiveChannelDvbSubDestinationSettings {
  BackgroundOpacity?: number;
  FontResolution?: number;
  OutlineColor?: string;
  FontColor?: string;
  ShadowColor?: string;
  ShadowOpacity?: number;
  Font?: MediaLiveChannelInputLocation;
  ShadowYOffset?: number;
  Alignment?: string;
  XPosition?: number;
  FontSize?: string;
  YPosition?: number;
  OutlineSize?: number;
  TeletextGridControl?: string;
  FontOpacity?: number;
  ShadowXOffset?: number;
  BackgroundColor?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.DvbSubSourceSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbsubsourcesettings.html | AWS::MediaLive::Channel.DvbSubSourceSettings}
 */
export interface MediaLiveChannelDvbSubSourceSettings {
  OcrLanguage?: string;
  Pid?: number;
}
/**
 * Type definition for AWS::MediaLive::Channel.DvbTdtSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbtdtsettings.html | AWS::MediaLive::Channel.DvbTdtSettings}
 */
export interface MediaLiveChannelDvbTdtSettings {
  RepInterval?: number;
}
/**
 * Type definition for AWS::MediaLive::Channel.Eac3AtmosSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-eac3atmossettings.html | AWS::MediaLive::Channel.Eac3AtmosSettings}
 */
export interface MediaLiveChannelEac3AtmosSettings {
  CodingMode?: string;
  Dialnorm?: number;
  SurroundTrim?: number;
  DrcRf?: string;
  Bitrate?: number;
  DrcLine?: string;
  HeightTrim?: number;
}
/**
 * Type definition for AWS::MediaLive::Channel.Eac3Settings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-eac3settings.html | AWS::MediaLive::Channel.Eac3Settings}
 */
export interface MediaLiveChannelEac3Settings {
  CodingMode?: string;
  SurroundMode?: string;
  PassthroughControl?: string;
  Dialnorm?: number;
  LoRoSurroundMixLevel?: number;
  PhaseControl?: string;
  LtRtCenterMixLevel?: number;
  LfeFilter?: string;
  LfeControl?: string;
  Bitrate?: number;
  DrcLine?: string;
  DcFilter?: string;
  MetadataControl?: string;
  LtRtSurroundMixLevel?: number;
  LoRoCenterMixLevel?: number;
  DrcRf?: string;
  AttenuationControl?: string;
  BitstreamMode?: string;
  SurroundExMode?: string;
  StereoDownmix?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.EbuTtDDestinationSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-ebuttddestinationsettings.html | AWS::MediaLive::Channel.EbuTtDDestinationSettings}
 */
export interface MediaLiveChannelEbuTtDDestinationSettings {
  FontFamily?: string;
  FillLineGap?: string;
  StyleControl?: string;
  CopyrightHolder?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.EmbeddedDestinationSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-embeddeddestinationsettings.html | AWS::MediaLive::Channel.EmbeddedDestinationSettings}
 */
export interface MediaLiveChannelEmbeddedDestinationSettings {}
/**
 * Type definition for AWS::MediaLive::Channel.EmbeddedPlusScte20DestinationSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-embeddedplusscte20destinationsettings.html | AWS::MediaLive::Channel.EmbeddedPlusScte20DestinationSettings}
 */
export interface MediaLiveChannelEmbeddedPlusScte20DestinationSettings {}
/**
 * Type definition for AWS::MediaLive::Channel.EmbeddedSourceSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-embeddedsourcesettings.html | AWS::MediaLive::Channel.EmbeddedSourceSettings}
 */
export interface MediaLiveChannelEmbeddedSourceSettings {
  Source608ChannelNumber?: number;
  Scte20Detection?: string;
  Source608TrackNumber?: number;
  Convert608To708?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.EncoderSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-encodersettings.html | AWS::MediaLive::Channel.EncoderSettings}
 */
export interface MediaLiveChannelEncoderSettings {
  AudioDescriptions?: any[];
  VideoDescriptions?: any[];
  GlobalConfiguration?: MediaLiveChannelGlobalConfiguration;
  MotionGraphicsConfiguration?: MediaLiveChannelMotionGraphicsConfiguration;
  ThumbnailConfiguration?: MediaLiveChannelThumbnailConfiguration;
  FeatureActivations?: MediaLiveChannelFeatureActivations;
  CaptionDescriptions?: any[];
  AvailConfiguration?: MediaLiveChannelAvailConfiguration;
  OutputGroups?: any[];
  AvailBlanking?: MediaLiveChannelAvailBlanking;
  NielsenConfiguration?: MediaLiveChannelNielsenConfiguration;
  BlackoutSlate?: MediaLiveChannelBlackoutSlate;
  TimecodeConfig?: MediaLiveChannelTimecodeConfig;
}
/**
 * Type definition for AWS::MediaLive::Channel.Esam
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-esam.html | AWS::MediaLive::Channel.Esam}
 */
export interface MediaLiveChannelEsam {
  AdAvailOffset?: number;
  ZoneIdentity?: string;
  AcquisitionPointId?: string;
  PoisEndpoint?: string;
  Username?: string;
  PasswordParam?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.FailoverCondition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-failovercondition.html | AWS::MediaLive::Channel.FailoverCondition}
 */
export interface MediaLiveChannelFailoverCondition {
  FailoverConditionSettings?: MediaLiveChannelFailoverConditionSettings;
}
/**
 * Type definition for AWS::MediaLive::Channel.FailoverConditionSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-failoverconditionsettings.html | AWS::MediaLive::Channel.FailoverConditionSettings}
 */
export interface MediaLiveChannelFailoverConditionSettings {
  AudioSilenceSettings?: MediaLiveChannelAudioSilenceFailoverSettings;
  VideoBlackSettings?: MediaLiveChannelVideoBlackFailoverSettings;
  InputLossSettings?: MediaLiveChannelInputLossFailoverSettings;
}
/**
 * Type definition for AWS::MediaLive::Channel.FeatureActivations
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-featureactivations.html | AWS::MediaLive::Channel.FeatureActivations}
 */
export interface MediaLiveChannelFeatureActivations {
  InputPrepareScheduleActions?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.FecOutputSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-fecoutputsettings.html | AWS::MediaLive::Channel.FecOutputSettings}
 */
export interface MediaLiveChannelFecOutputSettings {
  RowLength?: number;
  ColumnDepth?: number;
  IncludeFec?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.Fmp4HlsSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-fmp4hlssettings.html | AWS::MediaLive::Channel.Fmp4HlsSettings}
 */
export interface MediaLiveChannelFmp4HlsSettings {
  AudioRenditionSets?: string;
  NielsenId3Behavior?: string;
  TimedMetadataBehavior?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.FrameCaptureCdnSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-framecapturecdnsettings.html | AWS::MediaLive::Channel.FrameCaptureCdnSettings}
 */
export interface MediaLiveChannelFrameCaptureCdnSettings {
  FrameCaptureS3Settings?: MediaLiveChannelFrameCaptureS3Settings;
}
/**
 * Type definition for AWS::MediaLive::Channel.FrameCaptureGroupSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-framecapturegroupsettings.html | AWS::MediaLive::Channel.FrameCaptureGroupSettings}
 */
export interface MediaLiveChannelFrameCaptureGroupSettings {
  FrameCaptureCdnSettings?: MediaLiveChannelFrameCaptureCdnSettings;
  Destination?: MediaLiveChannelOutputLocationRef;
}
/**
 * Type definition for AWS::MediaLive::Channel.FrameCaptureHlsSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-framecapturehlssettings.html | AWS::MediaLive::Channel.FrameCaptureHlsSettings}
 */
export interface MediaLiveChannelFrameCaptureHlsSettings {}
/**
 * Type definition for AWS::MediaLive::Channel.FrameCaptureOutputSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-framecaptureoutputsettings.html | AWS::MediaLive::Channel.FrameCaptureOutputSettings}
 */
export interface MediaLiveChannelFrameCaptureOutputSettings {
  NameModifier?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.FrameCaptureS3Settings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-framecaptures3settings.html | AWS::MediaLive::Channel.FrameCaptureS3Settings}
 */
export interface MediaLiveChannelFrameCaptureS3Settings {
  CannedAcl?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.FrameCaptureSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-framecapturesettings.html | AWS::MediaLive::Channel.FrameCaptureSettings}
 */
export interface MediaLiveChannelFrameCaptureSettings {
  TimecodeBurninSettings?: MediaLiveChannelTimecodeBurninSettings;
  CaptureInterval?: number;
  CaptureIntervalUnits?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.GlobalConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-globalconfiguration.html | AWS::MediaLive::Channel.GlobalConfiguration}
 */
export interface MediaLiveChannelGlobalConfiguration {
  InputEndAction?: string;
  OutputTimingSource?: string;
  OutputLockingMode?: string;
  SupportLowFramerateInputs?: string;
  InitialAudioGain?: number;
  InputLossBehavior?: MediaLiveChannelInputLossBehavior;
}
/**
 * Type definition for AWS::MediaLive::Channel.H264ColorSpaceSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264colorspacesettings.html | AWS::MediaLive::Channel.H264ColorSpaceSettings}
 */
export interface MediaLiveChannelH264ColorSpaceSettings {
  Rec601Settings?: MediaLiveChannelRec601Settings;
  Rec709Settings?: MediaLiveChannelRec709Settings;
  ColorSpacePassthroughSettings?: MediaLiveChannelColorSpacePassthroughSettings;
}
/**
 * Type definition for AWS::MediaLive::Channel.H264FilterSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264filtersettings.html | AWS::MediaLive::Channel.H264FilterSettings}
 */
export interface MediaLiveChannelH264FilterSettings {
  TemporalFilterSettings?: MediaLiveChannelTemporalFilterSettings;
}
/**
 * Type definition for AWS::MediaLive::Channel.H264Settings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html | AWS::MediaLive::Channel.H264Settings}
 */
export interface MediaLiveChannelH264Settings {
  TimecodeBurninSettings?: MediaLiveChannelTimecodeBurninSettings;
  NumRefFrames?: number;
  TemporalAq?: string;
  Slices?: number;
  FramerateControl?: string;
  QvbrQualityLevel?: number;
  FramerateNumerator?: number;
  ParControl?: string;
  GopClosedCadence?: number;
  FlickerAq?: string;
  Profile?: string;
  QualityLevel?: string;
  MinIInterval?: number;
  SceneChangeDetect?: string;
  ForceFieldPictures?: string;
  FramerateDenominator?: number;
  Softness?: number;
  GopSize?: number;
  AdaptiveQuantization?: string;
  FilterSettings?: MediaLiveChannelH264FilterSettings;
  ColorSpaceSettings?: MediaLiveChannelH264ColorSpaceSettings;
  EntropyEncoding?: string;
  SpatialAq?: string;
  ParDenominator?: number;
  FixedAfd?: string;
  GopSizeUnits?: string;
  AfdSignaling?: string;
  Bitrate?: number;
  ParNumerator?: number;
  RateControlMode?: string;
  ScanType?: string;
  BufSize?: number;
  TimecodeInsertion?: string;
  ColorMetadata?: string;
  BufFillPct?: number;
  GopBReference?: string;
  LookAheadRateControl?: string;
  Level?: string;
  MaxBitrate?: number;
  Syntax?: string;
  SubgopLength?: string;
  GopNumBFrames?: number;
}
/**
 * Type definition for AWS::MediaLive::Channel.H265ColorSpaceSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265colorspacesettings.html | AWS::MediaLive::Channel.H265ColorSpaceSettings}
 */
export interface MediaLiveChannelH265ColorSpaceSettings {
  Rec601Settings?: MediaLiveChannelRec601Settings;
  Rec709Settings?: MediaLiveChannelRec709Settings;
  ColorSpacePassthroughSettings?: MediaLiveChannelColorSpacePassthroughSettings;
  DolbyVision81Settings?: MediaLiveChannelDolbyVision81Settings;
  Hdr10Settings?: MediaLiveChannelHdr10Settings;
}
/**
 * Type definition for AWS::MediaLive::Channel.H265FilterSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265filtersettings.html | AWS::MediaLive::Channel.H265FilterSettings}
 */
export interface MediaLiveChannelH265FilterSettings {
  TemporalFilterSettings?: MediaLiveChannelTemporalFilterSettings;
}
/**
 * Type definition for AWS::MediaLive::Channel.H265Settings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html | AWS::MediaLive::Channel.H265Settings}
 */
export interface MediaLiveChannelH265Settings {
  TimecodeBurninSettings?: MediaLiveChannelTimecodeBurninSettings;
  Slices?: number;
  QvbrQualityLevel?: number;
  FramerateNumerator?: number;
  GopClosedCadence?: number;
  FlickerAq?: string;
  Profile?: string;
  MinIInterval?: number;
  SceneChangeDetect?: string;
  FramerateDenominator?: number;
  GopSize?: number;
  AdaptiveQuantization?: string;
  FilterSettings?: MediaLiveChannelH265FilterSettings;
  AlternativeTransferFunction?: string;
  ColorSpaceSettings?: MediaLiveChannelH265ColorSpaceSettings;
  Tier?: string;
  ParDenominator?: number;
  FixedAfd?: string;
  GopSizeUnits?: string;
  AfdSignaling?: string;
  Bitrate?: number;
  ParNumerator?: number;
  RateControlMode?: string;
  ScanType?: string;
  BufSize?: number;
  TimecodeInsertion?: string;
  ColorMetadata?: string;
  LookAheadRateControl?: string;
  Level?: string;
  MaxBitrate?: number;
}
/**
 * Type definition for AWS::MediaLive::Channel.Hdr10Settings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hdr10settings.html | AWS::MediaLive::Channel.Hdr10Settings}
 */
export interface MediaLiveChannelHdr10Settings {
  MaxCll?: number;
  MaxFall?: number;
}
/**
 * Type definition for AWS::MediaLive::Channel.HlsAkamaiSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsakamaisettings.html | AWS::MediaLive::Channel.HlsAkamaiSettings}
 */
export interface MediaLiveChannelHlsAkamaiSettings {
  Salt?: string;
  FilecacheDuration?: number;
  NumRetries?: number;
  Token?: string;
  RestartDelay?: number;
  ConnectionRetryInterval?: number;
  HttpTransferMode?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.HlsBasicPutSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsbasicputsettings.html | AWS::MediaLive::Channel.HlsBasicPutSettings}
 */
export interface MediaLiveChannelHlsBasicPutSettings {
  FilecacheDuration?: number;
  NumRetries?: number;
  RestartDelay?: number;
  ConnectionRetryInterval?: number;
}
/**
 * Type definition for AWS::MediaLive::Channel.HlsCdnSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlscdnsettings.html | AWS::MediaLive::Channel.HlsCdnSettings}
 */
export interface MediaLiveChannelHlsCdnSettings {
  HlsWebdavSettings?: MediaLiveChannelHlsWebdavSettings;
  HlsS3Settings?: MediaLiveChannelHlsS3Settings;
  HlsAkamaiSettings?: MediaLiveChannelHlsAkamaiSettings;
  HlsBasicPutSettings?: MediaLiveChannelHlsBasicPutSettings;
  HlsMediaStoreSettings?: MediaLiveChannelHlsMediaStoreSettings;
}
/**
 * Type definition for AWS::MediaLive::Channel.HlsGroupSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html | AWS::MediaLive::Channel.HlsGroupSettings}
 */
export interface MediaLiveChannelHlsGroupSettings {
  SegmentationMode?: string;
  Destination?: MediaLiveChannelOutputLocationRef;
  CodecSpecification?: string;
  IvSource?: string;
  TimedMetadataId3Frame?: string;
  KeyFormatVersions?: string;
  RedundantManifest?: string;
  OutputSelection?: string;
  KeyProviderSettings?: MediaLiveChannelKeyProviderSettings;
  StreamInfResolution?: string;
  CaptionLanguageMappings?: any[];
  HlsId3SegmentTagging?: string;
  IFrameOnlyPlaylists?: string;
  CaptionLanguageSetting?: string;
  KeepSegments?: number;
  ConstantIv?: string;
  DirectoryStructure?: string;
  EncryptionType?: string;
  AdMarkers?: any[];
  HlsCdnSettings?: MediaLiveChannelHlsCdnSettings;
  IndexNSegments?: number;
  DiscontinuityTags?: string;
  InputLossAction?: string;
  Mode?: string;
  TsFileMode?: string;
  BaseUrlManifest1?: string;
  ClientCache?: string;
  MinSegmentLength?: number;
  KeyFormat?: string;
  IvInManifest?: string;
  BaseUrlContent1?: string;
  ProgramDateTimeClock?: string;
  ManifestCompression?: string;
  ManifestDurationFormat?: string;
  TimedMetadataId3Period?: number;
  IncompleteSegmentBehavior?: string;
  ProgramDateTimePeriod?: number;
  SegmentLength?: number;
  TimestampDeltaMilliseconds?: number;
  ProgramDateTime?: string;
  SegmentsPerSubdirectory?: number;
  BaseUrlContent?: string;
  BaseUrlManifest?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.HlsInputSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsinputsettings.html | AWS::MediaLive::Channel.HlsInputSettings}
 */
export interface MediaLiveChannelHlsInputSettings {
  Scte35Source?: string;
  BufferSegments?: number;
  Retries?: number;
  Bandwidth?: number;
  RetryInterval?: number;
}
/**
 * Type definition for AWS::MediaLive::Channel.HlsMediaStoreSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsmediastoresettings.html | AWS::MediaLive::Channel.HlsMediaStoreSettings}
 */
export interface MediaLiveChannelHlsMediaStoreSettings {
  FilecacheDuration?: number;
  NumRetries?: number;
  MediaStoreStorageClass?: string;
  RestartDelay?: number;
  ConnectionRetryInterval?: number;
}
/**
 * Type definition for AWS::MediaLive::Channel.HlsOutputSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsoutputsettings.html | AWS::MediaLive::Channel.HlsOutputSettings}
 */
export interface MediaLiveChannelHlsOutputSettings {
  NameModifier?: string;
  HlsSettings?: MediaLiveChannelHlsSettings;
  H265PackagingType?: string;
  SegmentModifier?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.HlsS3Settings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlss3settings.html | AWS::MediaLive::Channel.HlsS3Settings}
 */
export interface MediaLiveChannelHlsS3Settings {
  CannedAcl?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.HlsSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlssettings.html | AWS::MediaLive::Channel.HlsSettings}
 */
export interface MediaLiveChannelHlsSettings {
  StandardHlsSettings?: MediaLiveChannelStandardHlsSettings;
  AudioOnlyHlsSettings?: MediaLiveChannelAudioOnlyHlsSettings;
  Fmp4HlsSettings?: MediaLiveChannelFmp4HlsSettings;
  FrameCaptureHlsSettings?: MediaLiveChannelFrameCaptureHlsSettings;
}
/**
 * Type definition for AWS::MediaLive::Channel.HlsWebdavSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlswebdavsettings.html | AWS::MediaLive::Channel.HlsWebdavSettings}
 */
export interface MediaLiveChannelHlsWebdavSettings {
  FilecacheDuration?: number;
  NumRetries?: number;
  RestartDelay?: number;
  ConnectionRetryInterval?: number;
  HttpTransferMode?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.HtmlMotionGraphicsSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-htmlmotiongraphicssettings.html | AWS::MediaLive::Channel.HtmlMotionGraphicsSettings}
 */
export interface MediaLiveChannelHtmlMotionGraphicsSettings {}
/**
 * Type definition for AWS::MediaLive::Channel.InputAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputattachment.html | AWS::MediaLive::Channel.InputAttachment}
 */
export interface MediaLiveChannelInputAttachment {
  InputAttachmentName?: string;
  InputId?: string;
  AutomaticInputFailoverSettings?: MediaLiveChannelAutomaticInputFailoverSettings;
  InputSettings?: MediaLiveChannelInputSettings;
}
/**
 * Type definition for AWS::MediaLive::Channel.InputChannelLevel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputchannellevel.html | AWS::MediaLive::Channel.InputChannelLevel}
 */
export interface MediaLiveChannelInputChannelLevel {
  InputChannel?: number;
  Gain?: number;
}
/**
 * Type definition for AWS::MediaLive::Channel.InputLocation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputlocation.html | AWS::MediaLive::Channel.InputLocation}
 */
export interface MediaLiveChannelInputLocation {
  Username?: string;
  PasswordParam?: string;
  Uri?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.InputLossBehavior
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputlossbehavior.html | AWS::MediaLive::Channel.InputLossBehavior}
 */
export interface MediaLiveChannelInputLossBehavior {
  InputLossImageColor?: string;
  BlackFrameMsec?: number;
  InputLossImageType?: string;
  InputLossImageSlate?: MediaLiveChannelInputLocation;
  RepeatFrameMsec?: number;
}
/**
 * Type definition for AWS::MediaLive::Channel.InputLossFailoverSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputlossfailoversettings.html | AWS::MediaLive::Channel.InputLossFailoverSettings}
 */
export interface MediaLiveChannelInputLossFailoverSettings {
  InputLossThresholdMsec?: number;
}
/**
 * Type definition for AWS::MediaLive::Channel.InputSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputsettings.html | AWS::MediaLive::Channel.InputSettings}
 */
export interface MediaLiveChannelInputSettings {
  Scte35Pid?: number;
  DeblockFilter?: string;
  FilterStrength?: number;
  InputFilter?: string;
  SourceEndBehavior?: string;
  VideoSelector?: MediaLiveChannelVideoSelector;
  Smpte2038DataPreference?: string;
  AudioSelectors?: any[];
  CaptionSelectors?: any[];
  DenoiseFilter?: string;
  NetworkInputSettings?: MediaLiveChannelNetworkInputSettings;
}
/**
 * Type definition for AWS::MediaLive::Channel.InputSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputspecification.html | AWS::MediaLive::Channel.InputSpecification}
 */
export interface MediaLiveChannelInputSpecification {
  Codec?: string;
  MaximumBitrate?: string;
  Resolution?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.KeyProviderSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-keyprovidersettings.html | AWS::MediaLive::Channel.KeyProviderSettings}
 */
export interface MediaLiveChannelKeyProviderSettings {
  StaticKeySettings?: MediaLiveChannelStaticKeySettings;
}
/**
 * Type definition for AWS::MediaLive::Channel.M2tsSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html | AWS::MediaLive::Channel.M2tsSettings}
 */
export interface MediaLiveChannelM2tsSettings {
  EtvPlatformPid?: string;
  PatInterval?: number;
  ProgramNum?: number;
  RateMode?: string;
  KlvDataPids?: string;
  NullPacketBitrate?: number;
  PmtInterval?: number;
  AribCaptionsPid?: string;
  EsRateInPes?: string;
  VideoPid?: string;
  TransportStreamId?: number;
  EbpPlacement?: string;
  DvbSubPids?: string;
  SegmentationStyle?: string;
  Scte35Pid?: string;
  AudioStreamType?: string;
  Klv?: string;
  EbpLookaheadMs?: number;
  Scte35PrerollPullupMilliseconds?: number;
  DvbTdtSettings?: MediaLiveChannelDvbTdtSettings;
  TimedMetadataBehavior?: string;
  EbpAudioInterval?: string;
  FragmentTime?: number;
  DvbTeletextPid?: string;
  Scte35Control?: string;
  PcrPeriod?: number;
  NielsenId3Behavior?: string;
  PcrPid?: string;
  SegmentationTime?: number;
  CcDescriptor?: string;
  AudioFramesPerPes?: number;
  AbsentInputAudioBehavior?: string;
  Bitrate?: number;
  PmtPid?: string;
  Scte27Pids?: string;
  SegmentationMarkers?: string;
  DvbNitSettings?: MediaLiveChannelDvbNitSettings;
  DvbSdtSettings?: MediaLiveChannelDvbSdtSettings;
  EtvSignalPid?: string;
  Arib?: string;
  BufferModel?: string;
  EcmPid?: string;
  TimedMetadataPid?: string;
  AudioPids?: string;
  AudioBufferModel?: string;
  Ebif?: string;
  AribCaptionsPidControl?: string;
  PcrControl?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.M3u8Settings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m3u8settings.html | AWS::MediaLive::Channel.M3u8Settings}
 */
export interface MediaLiveChannelM3u8Settings {
  PatInterval?: number;
  ProgramNum?: number;
  PcrPeriod?: number;
  PmtInterval?: number;
  KlvDataPids?: string;
  NielsenId3Behavior?: string;
  PcrPid?: string;
  VideoPid?: string;
  AudioFramesPerPes?: number;
  TransportStreamId?: number;
  PmtPid?: string;
  Scte35Pid?: string;
  Scte35Behavior?: string;
  KlvBehavior?: string;
  EcmPid?: string;
  TimedMetadataPid?: string;
  AudioPids?: string;
  PcrControl?: string;
  TimedMetadataBehavior?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.MaintenanceCreateSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-maintenancecreatesettings.html | AWS::MediaLive::Channel.MaintenanceCreateSettings}
 */
export interface MediaLiveChannelMaintenanceCreateSettings {
  MaintenanceDay?: string;
  MaintenanceStartTime?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.MaintenanceUpdateSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-maintenanceupdatesettings.html | AWS::MediaLive::Channel.MaintenanceUpdateSettings}
 */
export interface MediaLiveChannelMaintenanceUpdateSettings {
  MaintenanceDay?: string;
  MaintenanceScheduledDate?: string;
  MaintenanceStartTime?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.MediaPackageGroupSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mediapackagegroupsettings.html | AWS::MediaLive::Channel.MediaPackageGroupSettings}
 */
export interface MediaLiveChannelMediaPackageGroupSettings {
  Destination?: MediaLiveChannelOutputLocationRef;
}
/**
 * Type definition for AWS::MediaLive::Channel.MediaPackageOutputDestinationSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mediapackageoutputdestinationsettings.html | AWS::MediaLive::Channel.MediaPackageOutputDestinationSettings}
 */
export interface MediaLiveChannelMediaPackageOutputDestinationSettings {
  ChannelId?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.MediaPackageOutputSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mediapackageoutputsettings.html | AWS::MediaLive::Channel.MediaPackageOutputSettings}
 */
export interface MediaLiveChannelMediaPackageOutputSettings {}
/**
 * Type definition for AWS::MediaLive::Channel.MotionGraphicsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-motiongraphicsconfiguration.html | AWS::MediaLive::Channel.MotionGraphicsConfiguration}
 */
export interface MediaLiveChannelMotionGraphicsConfiguration {
  MotionGraphicsSettings?: MediaLiveChannelMotionGraphicsSettings;
  MotionGraphicsInsertion?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.MotionGraphicsSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-motiongraphicssettings.html | AWS::MediaLive::Channel.MotionGraphicsSettings}
 */
export interface MediaLiveChannelMotionGraphicsSettings {
  HtmlMotionGraphicsSettings?: MediaLiveChannelHtmlMotionGraphicsSettings;
}
/**
 * Type definition for AWS::MediaLive::Channel.Mp2Settings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mp2settings.html | AWS::MediaLive::Channel.Mp2Settings}
 */
export interface MediaLiveChannelMp2Settings {
  CodingMode?: string;
  SampleRate?: number;
  Bitrate?: number;
}
/**
 * Type definition for AWS::MediaLive::Channel.Mpeg2FilterSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mpeg2filtersettings.html | AWS::MediaLive::Channel.Mpeg2FilterSettings}
 */
export interface MediaLiveChannelMpeg2FilterSettings {
  TemporalFilterSettings?: MediaLiveChannelTemporalFilterSettings;
}
/**
 * Type definition for AWS::MediaLive::Channel.Mpeg2Settings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mpeg2settings.html | AWS::MediaLive::Channel.Mpeg2Settings}
 */
export interface MediaLiveChannelMpeg2Settings {
  TimecodeBurninSettings?: MediaLiveChannelTimecodeBurninSettings;
  ColorSpace?: string;
  FixedAfd?: string;
  GopSizeUnits?: string;
  FramerateNumerator?: number;
  GopClosedCadence?: number;
  AfdSignaling?: string;
  DisplayAspectRatio?: string;
  ScanType?: string;
  TimecodeInsertion?: string;
  ColorMetadata?: string;
  FramerateDenominator?: number;
  GopSize?: number;
  AdaptiveQuantization?: string;
  SubgopLength?: string;
  FilterSettings?: MediaLiveChannelMpeg2FilterSettings;
  GopNumBFrames?: number;
}
/**
 * Type definition for AWS::MediaLive::Channel.MsSmoothGroupSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mssmoothgroupsettings.html | AWS::MediaLive::Channel.MsSmoothGroupSettings}
 */
export interface MediaLiveChannelMsSmoothGroupSettings {
  SegmentationMode?: string;
  Destination?: MediaLiveChannelOutputLocationRef;
  EventStopBehavior?: string;
  FilecacheDuration?: number;
  CertificateMode?: string;
  AcquisitionPointId?: string;
  StreamManifestBehavior?: string;
  InputLossAction?: string;
  FragmentLength?: number;
  RestartDelay?: number;
  SparseTrackType?: string;
  EventIdMode?: string;
  TimestampOffsetMode?: string;
  AudioOnlyTimecodeControl?: string;
  NumRetries?: number;
  TimestampOffset?: string;
  EventId?: string;
  SendDelayMs?: number;
  ConnectionRetryInterval?: number;
}
/**
 * Type definition for AWS::MediaLive::Channel.MsSmoothOutputSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mssmoothoutputsettings.html | AWS::MediaLive::Channel.MsSmoothOutputSettings}
 */
export interface MediaLiveChannelMsSmoothOutputSettings {
  NameModifier?: string;
  H265PackagingType?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.MultiplexGroupSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multiplexgroupsettings.html | AWS::MediaLive::Channel.MultiplexGroupSettings}
 */
export interface MediaLiveChannelMultiplexGroupSettings {}
/**
 * Type definition for AWS::MediaLive::Channel.MultiplexOutputSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multiplexoutputsettings.html | AWS::MediaLive::Channel.MultiplexOutputSettings}
 */
export interface MediaLiveChannelMultiplexOutputSettings {
  Destination?: MediaLiveChannelOutputLocationRef;
}
/**
 * Type definition for AWS::MediaLive::Channel.MultiplexProgramChannelDestinationSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multiplexprogramchanneldestinationsettings.html | AWS::MediaLive::Channel.MultiplexProgramChannelDestinationSettings}
 */
export interface MediaLiveChannelMultiplexProgramChannelDestinationSettings {
  MultiplexId?: string;
  ProgramName?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.NetworkInputSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-networkinputsettings.html | AWS::MediaLive::Channel.NetworkInputSettings}
 */
export interface MediaLiveChannelNetworkInputSettings {
  ServerValidation?: string;
  HlsInputSettings?: MediaLiveChannelHlsInputSettings;
}
/**
 * Type definition for AWS::MediaLive::Channel.NielsenCBET
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-nielsencbet.html | AWS::MediaLive::Channel.NielsenCBET}
 */
export interface MediaLiveChannelNielsenCBET {
  CbetCheckDigitString?: string;
  CbetStepaside?: string;
  Csid?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.NielsenConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-nielsenconfiguration.html | AWS::MediaLive::Channel.NielsenConfiguration}
 */
export interface MediaLiveChannelNielsenConfiguration {
  DistributorId?: string;
  NielsenPcmToId3Tagging?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.NielsenNaesIiNw
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-nielsennaesiinw.html | AWS::MediaLive::Channel.NielsenNaesIiNw}
 */
export interface MediaLiveChannelNielsenNaesIiNw {
  Timezone?: string;
  CheckDigitString?: string;
  Sid?: number;
}
/**
 * Type definition for AWS::MediaLive::Channel.NielsenWatermarksSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-nielsenwatermarkssettings.html | AWS::MediaLive::Channel.NielsenWatermarksSettings}
 */
export interface MediaLiveChannelNielsenWatermarksSettings {
  NielsenDistributionType?: string;
  NielsenCbetSettings?: MediaLiveChannelNielsenCBET;
  NielsenNaesIiNwSettings?: MediaLiveChannelNielsenNaesIiNw;
}
/**
 * Type definition for AWS::MediaLive::Channel.Output
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-output.html | AWS::MediaLive::Channel.Output}
 */
export interface MediaLiveChannelOutput {
  OutputSettings?: MediaLiveChannelOutputSettings;
  CaptionDescriptionNames?: any[];
  AudioDescriptionNames?: any[];
  OutputName?: string;
  VideoDescriptionName?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.OutputDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputdestination.html | AWS::MediaLive::Channel.OutputDestination}
 */
export interface MediaLiveChannelOutputDestination {
  MultiplexSettings?: MediaLiveChannelMultiplexProgramChannelDestinationSettings;
  Id?: string;
  Settings?: any[];
  MediaPackageSettings?: any[];
}
/**
 * Type definition for AWS::MediaLive::Channel.OutputDestinationSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputdestinationsettings.html | AWS::MediaLive::Channel.OutputDestinationSettings}
 */
export interface MediaLiveChannelOutputDestinationSettings {
  StreamName?: string;
  Username?: string;
  PasswordParam?: string;
  Url?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.OutputGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputgroup.html | AWS::MediaLive::Channel.OutputGroup}
 */
export interface MediaLiveChannelOutputGroup {
  Outputs?: any[];
  OutputGroupSettings?: MediaLiveChannelOutputGroupSettings;
  Name?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.OutputGroupSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputgroupsettings.html | AWS::MediaLive::Channel.OutputGroupSettings}
 */
export interface MediaLiveChannelOutputGroupSettings {
  HlsGroupSettings?: MediaLiveChannelHlsGroupSettings;
  FrameCaptureGroupSettings?: MediaLiveChannelFrameCaptureGroupSettings;
  MultiplexGroupSettings?: MediaLiveChannelMultiplexGroupSettings;
  ArchiveGroupSettings?: MediaLiveChannelArchiveGroupSettings;
  MediaPackageGroupSettings?: MediaLiveChannelMediaPackageGroupSettings;
  UdpGroupSettings?: MediaLiveChannelUdpGroupSettings;
  MsSmoothGroupSettings?: MediaLiveChannelMsSmoothGroupSettings;
  RtmpGroupSettings?: MediaLiveChannelRtmpGroupSettings;
}
/**
 * Type definition for AWS::MediaLive::Channel.OutputLocationRef
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputlocationref.html | AWS::MediaLive::Channel.OutputLocationRef}
 */
export interface MediaLiveChannelOutputLocationRef {
  DestinationRefId?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.OutputSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputsettings.html | AWS::MediaLive::Channel.OutputSettings}
 */
export interface MediaLiveChannelOutputSettings {
  MediaPackageOutputSettings?: MediaLiveChannelMediaPackageOutputSettings;
  MsSmoothOutputSettings?: MediaLiveChannelMsSmoothOutputSettings;
  FrameCaptureOutputSettings?: MediaLiveChannelFrameCaptureOutputSettings;
  HlsOutputSettings?: MediaLiveChannelHlsOutputSettings;
  RtmpOutputSettings?: MediaLiveChannelRtmpOutputSettings;
  UdpOutputSettings?: MediaLiveChannelUdpOutputSettings;
  MultiplexOutputSettings?: MediaLiveChannelMultiplexOutputSettings;
  ArchiveOutputSettings?: MediaLiveChannelArchiveOutputSettings;
}
/**
 * Type definition for AWS::MediaLive::Channel.PassThroughSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-passthroughsettings.html | AWS::MediaLive::Channel.PassThroughSettings}
 */
export interface MediaLiveChannelPassThroughSettings {}
/**
 * Type definition for AWS::MediaLive::Channel.RawSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-rawsettings.html | AWS::MediaLive::Channel.RawSettings}
 */
export interface MediaLiveChannelRawSettings {}
/**
 * Type definition for AWS::MediaLive::Channel.Rec601Settings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-rec601settings.html | AWS::MediaLive::Channel.Rec601Settings}
 */
export interface MediaLiveChannelRec601Settings {}
/**
 * Type definition for AWS::MediaLive::Channel.Rec709Settings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-rec709settings.html | AWS::MediaLive::Channel.Rec709Settings}
 */
export interface MediaLiveChannelRec709Settings {}
/**
 * Type definition for AWS::MediaLive::Channel.RemixSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-remixsettings.html | AWS::MediaLive::Channel.RemixSettings}
 */
export interface MediaLiveChannelRemixSettings {
  ChannelsOut?: number;
  ChannelMappings?: any[];
  ChannelsIn?: number;
}
/**
 * Type definition for AWS::MediaLive::Channel.RtmpCaptionInfoDestinationSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-rtmpcaptioninfodestinationsettings.html | AWS::MediaLive::Channel.RtmpCaptionInfoDestinationSettings}
 */
export interface MediaLiveChannelRtmpCaptionInfoDestinationSettings {}
/**
 * Type definition for AWS::MediaLive::Channel.RtmpGroupSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-rtmpgroupsettings.html | AWS::MediaLive::Channel.RtmpGroupSettings}
 */
export interface MediaLiveChannelRtmpGroupSettings {
  AuthenticationScheme?: string;
  CacheLength?: number;
  AdMarkers?: any[];
  IncludeFillerNalUnits?: string;
  InputLossAction?: string;
  RestartDelay?: number;
  CaptionData?: string;
  CacheFullBehavior?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.RtmpOutputSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-rtmpoutputsettings.html | AWS::MediaLive::Channel.RtmpOutputSettings}
 */
export interface MediaLiveChannelRtmpOutputSettings {
  Destination?: MediaLiveChannelOutputLocationRef;
  CertificateMode?: string;
  NumRetries?: number;
  ConnectionRetryInterval?: number;
}
/**
 * Type definition for AWS::MediaLive::Channel.Scte20PlusEmbeddedDestinationSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-scte20plusembeddeddestinationsettings.html | AWS::MediaLive::Channel.Scte20PlusEmbeddedDestinationSettings}
 */
export interface MediaLiveChannelScte20PlusEmbeddedDestinationSettings {}
/**
 * Type definition for AWS::MediaLive::Channel.Scte20SourceSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-scte20sourcesettings.html | AWS::MediaLive::Channel.Scte20SourceSettings}
 */
export interface MediaLiveChannelScte20SourceSettings {
  Source608ChannelNumber?: number;
  Convert608To708?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.Scte27DestinationSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-scte27destinationsettings.html | AWS::MediaLive::Channel.Scte27DestinationSettings}
 */
export interface MediaLiveChannelScte27DestinationSettings {}
/**
 * Type definition for AWS::MediaLive::Channel.Scte27SourceSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-scte27sourcesettings.html | AWS::MediaLive::Channel.Scte27SourceSettings}
 */
export interface MediaLiveChannelScte27SourceSettings {
  OcrLanguage?: string;
  Pid?: number;
}
/**
 * Type definition for AWS::MediaLive::Channel.Scte35SpliceInsert
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-scte35spliceinsert.html | AWS::MediaLive::Channel.Scte35SpliceInsert}
 */
export interface MediaLiveChannelScte35SpliceInsert {
  AdAvailOffset?: number;
  WebDeliveryAllowedFlag?: string;
  NoRegionalBlackoutFlag?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.Scte35TimeSignalApos
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-scte35timesignalapos.html | AWS::MediaLive::Channel.Scte35TimeSignalApos}
 */
export interface MediaLiveChannelScte35TimeSignalApos {
  AdAvailOffset?: number;
  WebDeliveryAllowedFlag?: string;
  NoRegionalBlackoutFlag?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.SmpteTtDestinationSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-smptettdestinationsettings.html | AWS::MediaLive::Channel.SmpteTtDestinationSettings}
 */
export interface MediaLiveChannelSmpteTtDestinationSettings {}
/**
 * Type definition for AWS::MediaLive::Channel.StandardHlsSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-standardhlssettings.html | AWS::MediaLive::Channel.StandardHlsSettings}
 */
export interface MediaLiveChannelStandardHlsSettings {
  AudioRenditionSets?: string;
  M3u8Settings?: MediaLiveChannelM3u8Settings;
}
/**
 * Type definition for AWS::MediaLive::Channel.StaticKeySettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-statickeysettings.html | AWS::MediaLive::Channel.StaticKeySettings}
 */
export interface MediaLiveChannelStaticKeySettings {
  KeyProviderServer?: MediaLiveChannelInputLocation;
  StaticKeyValue?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.TeletextDestinationSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-teletextdestinationsettings.html | AWS::MediaLive::Channel.TeletextDestinationSettings}
 */
export interface MediaLiveChannelTeletextDestinationSettings {}
/**
 * Type definition for AWS::MediaLive::Channel.TeletextSourceSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-teletextsourcesettings.html | AWS::MediaLive::Channel.TeletextSourceSettings}
 */
export interface MediaLiveChannelTeletextSourceSettings {
  OutputRectangle?: MediaLiveChannelCaptionRectangle;
  PageNumber?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.TemporalFilterSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-temporalfiltersettings.html | AWS::MediaLive::Channel.TemporalFilterSettings}
 */
export interface MediaLiveChannelTemporalFilterSettings {
  PostFilterSharpening?: string;
  Strength?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.ThumbnailConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-thumbnailconfiguration.html | AWS::MediaLive::Channel.ThumbnailConfiguration}
 */
export interface MediaLiveChannelThumbnailConfiguration {
  State?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.TimecodeBurninSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-timecodeburninsettings.html | AWS::MediaLive::Channel.TimecodeBurninSettings}
 */
export interface MediaLiveChannelTimecodeBurninSettings {
  FontSize?: string;
  Position?: string;
  Prefix?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.TimecodeConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-timecodeconfig.html | AWS::MediaLive::Channel.TimecodeConfig}
 */
export interface MediaLiveChannelTimecodeConfig {
  SyncThreshold?: number;
  Source?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.TtmlDestinationSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-ttmldestinationsettings.html | AWS::MediaLive::Channel.TtmlDestinationSettings}
 */
export interface MediaLiveChannelTtmlDestinationSettings {
  StyleControl?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.UdpContainerSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-udpcontainersettings.html | AWS::MediaLive::Channel.UdpContainerSettings}
 */
export interface MediaLiveChannelUdpContainerSettings {
  M2tsSettings?: MediaLiveChannelM2tsSettings;
}
/**
 * Type definition for AWS::MediaLive::Channel.UdpGroupSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-udpgroupsettings.html | AWS::MediaLive::Channel.UdpGroupSettings}
 */
export interface MediaLiveChannelUdpGroupSettings {
  TimedMetadataId3Frame?: string;
  TimedMetadataId3Period?: number;
  InputLossAction?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.UdpOutputSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-udpoutputsettings.html | AWS::MediaLive::Channel.UdpOutputSettings}
 */
export interface MediaLiveChannelUdpOutputSettings {
  Destination?: MediaLiveChannelOutputLocationRef;
  FecOutputSettings?: MediaLiveChannelFecOutputSettings;
  ContainerSettings?: MediaLiveChannelUdpContainerSettings;
  BufferMsec?: number;
}
/**
 * Type definition for AWS::MediaLive::Channel.VideoBlackFailoverSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videoblackfailoversettings.html | AWS::MediaLive::Channel.VideoBlackFailoverSettings}
 */
export interface MediaLiveChannelVideoBlackFailoverSettings {
  VideoBlackThresholdMsec?: number;
  BlackDetectThreshold?: number;
}
/**
 * Type definition for AWS::MediaLive::Channel.VideoCodecSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videocodecsettings.html | AWS::MediaLive::Channel.VideoCodecSettings}
 */
export interface MediaLiveChannelVideoCodecSettings {
  Mpeg2Settings?: MediaLiveChannelMpeg2Settings;
  FrameCaptureSettings?: MediaLiveChannelFrameCaptureSettings;
  H264Settings?: MediaLiveChannelH264Settings;
  H265Settings?: MediaLiveChannelH265Settings;
}
/**
 * Type definition for AWS::MediaLive::Channel.VideoDescription
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videodescription.html | AWS::MediaLive::Channel.VideoDescription}
 */
export interface MediaLiveChannelVideoDescription {
  ScalingBehavior?: string;
  RespondToAfd?: string;
  Height?: number;
  Sharpness?: number;
  Width?: number;
  CodecSettings?: MediaLiveChannelVideoCodecSettings;
  Name?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.VideoSelector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videoselector.html | AWS::MediaLive::Channel.VideoSelector}
 */
export interface MediaLiveChannelVideoSelector {
  ColorSpaceSettings?: MediaLiveChannelVideoSelectorColorSpaceSettings;
  SelectorSettings?: MediaLiveChannelVideoSelectorSettings;
  ColorSpace?: string;
  ColorSpaceUsage?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel.VideoSelectorColorSpaceSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videoselectorcolorspacesettings.html | AWS::MediaLive::Channel.VideoSelectorColorSpaceSettings}
 */
export interface MediaLiveChannelVideoSelectorColorSpaceSettings {
  Hdr10Settings?: MediaLiveChannelHdr10Settings;
}
/**
 * Type definition for AWS::MediaLive::Channel.VideoSelectorPid
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videoselectorpid.html | AWS::MediaLive::Channel.VideoSelectorPid}
 */
export interface MediaLiveChannelVideoSelectorPid {
  Pid?: number;
}
/**
 * Type definition for AWS::MediaLive::Channel.VideoSelectorProgramId
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videoselectorprogramid.html | AWS::MediaLive::Channel.VideoSelectorProgramId}
 */
export interface MediaLiveChannelVideoSelectorProgramId {
  ProgramId?: number;
}
/**
 * Type definition for AWS::MediaLive::Channel.VideoSelectorSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videoselectorsettings.html | AWS::MediaLive::Channel.VideoSelectorSettings}
 */
export interface MediaLiveChannelVideoSelectorSettings {
  VideoSelectorProgramId?: MediaLiveChannelVideoSelectorProgramId;
  VideoSelectorPid?: MediaLiveChannelVideoSelectorPid;
}
/**
 * Type definition for AWS::MediaLive::Channel.VpcOutputSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-vpcoutputsettings.html | AWS::MediaLive::Channel.VpcOutputSettings}
 */
export interface MediaLiveChannelVpcOutputSettings {
  PublicAddressAllocationIds?: any[];
  SecurityGroupIds?: any[];
  SubnetIds?: any[];
}
/**
 * Type definition for AWS::MediaLive::Channel.WavSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-wavsettings.html | AWS::MediaLive::Channel.WavSettings}
 */
export interface MediaLiveChannelWavSettings {
  CodingMode?: string;
  SampleRate?: number;
  BitDepth?: number;
}
/**
 * Type definition for AWS::MediaLive::Channel.WebvttDestinationSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-webvttdestinationsettings.html | AWS::MediaLive::Channel.WebvttDestinationSettings}
 */
export interface MediaLiveChannelWebvttDestinationSettings {
  StyleControl?: string;
}
/**
 * Type definition for AWS::MediaLive::Input.InputDestinationRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputdestinationrequest.html | AWS::MediaLive::Input.InputDestinationRequest}
 */
export interface MediaLiveInputInputDestinationRequest {
  StreamName?: string;
}
/**
 * Type definition for AWS::MediaLive::Input.InputDeviceRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputdevicerequest.html | AWS::MediaLive::Input.InputDeviceRequest}
 */
export interface MediaLiveInputInputDeviceRequest {
  Id?: string;
}
/**
 * Type definition for AWS::MediaLive::Input.InputDeviceSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputdevicesettings.html | AWS::MediaLive::Input.InputDeviceSettings}
 */
export interface MediaLiveInputInputDeviceSettings {
  Id?: string;
}
/**
 * Type definition for AWS::MediaLive::Input.InputSourceRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputsourcerequest.html | AWS::MediaLive::Input.InputSourceRequest}
 */
export interface MediaLiveInputInputSourceRequest {
  Username?: string;
  PasswordParam?: string;
  Url?: string;
}
/**
 * Type definition for AWS::MediaLive::Input.InputVpcRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputvpcrequest.html | AWS::MediaLive::Input.InputVpcRequest}
 */
export interface MediaLiveInputInputVpcRequest {
  SecurityGroupIds?: any[];
  SubnetIds?: any[];
}
/**
 * Type definition for AWS::MediaLive::Input.MediaConnectFlowRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-mediaconnectflowrequest.html | AWS::MediaLive::Input.MediaConnectFlowRequest}
 */
export interface MediaLiveInputMediaConnectFlowRequest {
  FlowArn?: string;
}
/**
 * Type definition for AWS::MediaLive::InputSecurityGroup.InputWhitelistRuleCidr
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-inputsecuritygroup-inputwhitelistrulecidr.html | AWS::MediaLive::InputSecurityGroup.InputWhitelistRuleCidr}
 */
export interface MediaLiveInputSecurityGroupInputWhitelistRuleCidr {
  Cidr?: string;
}
/**
 * Type definition for AWS::MediaLive::Channel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channel.html | AWS::MediaLive::Channel}
 */
export interface MediaLiveChannelProps {
  InputAttachments?: any[];
  InputSpecification?: MediaLiveChannelInputSpecification;
  ChannelClass?: string;
  EncoderSettings?: MediaLiveChannelEncoderSettings;
  Destinations?: any[];
  Vpc?: MediaLiveChannelVpcOutputSettings;
  CdiInputSpecification?: MediaLiveChannelCdiInputSpecification;
  Maintenance?: MediaLiveChannelMaintenanceCreateSettings;
  LogLevel?: string;
  RoleArn?: string;
  Tags?: object;
  Name?: string;
}
/**
 * Attributes type definition for AWS::MediaLive::Channel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channel.html | AWS::MediaLive::Channel}
 */
export interface MediaLiveChannelAttribs {
  Arn?: string;
  Inputs?: any[];
}
/**
 * Resource class for AWS::MediaLive::Channel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channel.html | AWS::MediaLive::Channel}
 */
export class MediaLiveChannel extends ResourceBase<
  "AWS::MediaLive::Channel",
  MediaLiveChannelProps,
  MediaLiveChannelAttribs
> {
  public static readonly Type = "AWS::MediaLive::Channel";
  public static readonly AttributeNames: readonly (keyof MediaLiveChannelAttribs)[] =
    ["Arn", "Inputs"];
  constructor(
    logicalId: string,
    properties: MediaLiveChannelProps,
    options?: ResourceOptions,
  ) {
    super(
      MediaLiveChannel.Type,
      MediaLiveChannel.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::MediaLive::Input
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html | AWS::MediaLive::Input}
 */
export interface MediaLiveInputProps {
  Type?: string;
  Destinations?: any[];
  Vpc?: MediaLiveInputInputVpcRequest;
  MediaConnectFlows?: any[];
  InputSecurityGroups?: any[];
  InputDevices?: any[];
  Sources?: any[];
  RoleArn?: string;
  Tags?: object;
  Name?: string;
}
/**
 * Attributes type definition for AWS::MediaLive::Input
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html | AWS::MediaLive::Input}
 */
export interface MediaLiveInputAttribs {
  Destinations?: any[];
  Arn?: string;
  Sources?: any[];
}
/**
 * Resource class for AWS::MediaLive::Input
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html | AWS::MediaLive::Input}
 */
export class MediaLiveInput extends ResourceBase<
  "AWS::MediaLive::Input",
  MediaLiveInputProps,
  MediaLiveInputAttribs
> {
  public static readonly Type = "AWS::MediaLive::Input";
  public static readonly AttributeNames: readonly (keyof MediaLiveInputAttribs)[] =
    ["Destinations", "Arn", "Sources"];
  constructor(
    logicalId: string,
    properties: MediaLiveInputProps,
    options?: ResourceOptions,
  ) {
    super(
      MediaLiveInput.Type,
      MediaLiveInput.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::MediaLive::InputSecurityGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-inputsecuritygroup.html | AWS::MediaLive::InputSecurityGroup}
 */
export interface MediaLiveInputSecurityGroupProps {
  WhitelistRules?: any[];
  Tags?: object;
}
/**
 * Attributes type definition for AWS::MediaLive::InputSecurityGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-inputsecuritygroup.html | AWS::MediaLive::InputSecurityGroup}
 */
export interface MediaLiveInputSecurityGroupAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::MediaLive::InputSecurityGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-inputsecuritygroup.html | AWS::MediaLive::InputSecurityGroup}
 */
export class MediaLiveInputSecurityGroup extends ResourceBase<
  "AWS::MediaLive::InputSecurityGroup",
  MediaLiveInputSecurityGroupProps,
  MediaLiveInputSecurityGroupAttribs
> {
  public static readonly Type = "AWS::MediaLive::InputSecurityGroup";
  public static readonly AttributeNames: readonly (keyof MediaLiveInputSecurityGroupAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: MediaLiveInputSecurityGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      MediaLiveInputSecurityGroup.Type,
      MediaLiveInputSecurityGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
