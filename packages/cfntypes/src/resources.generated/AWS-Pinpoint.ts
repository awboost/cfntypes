import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::Pinpoint::ApplicationSettings.CampaignHook
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-applicationsettings-campaignhook.html | AWS::Pinpoint::ApplicationSettings.CampaignHook}
 */
export interface PinpointApplicationSettingsCampaignHook {
  Mode?: string;
  WebUrl?: string;
  LambdaFunctionName?: string;
}
/**
 * Type definition for AWS::Pinpoint::ApplicationSettings.Limits
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-applicationsettings-limits.html | AWS::Pinpoint::ApplicationSettings.Limits}
 */
export interface PinpointApplicationSettingsLimits {
  Daily?: number;
  MaximumDuration?: number;
  Total?: number;
  MessagesPerSecond?: number;
}
/**
 * Type definition for AWS::Pinpoint::ApplicationSettings.QuietTime
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-applicationsettings-quiettime.html | AWS::Pinpoint::ApplicationSettings.QuietTime}
 */
export interface PinpointApplicationSettingsQuietTime {
  Start: string;
  End: string;
}
/**
 * Type definition for AWS::Pinpoint::Campaign.AttributeDimension
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-attributedimension.html | AWS::Pinpoint::Campaign.AttributeDimension}
 */
export interface PinpointCampaignAttributeDimension {
  AttributeType?: string;
  Values?: any[];
}
/**
 * Type definition for AWS::Pinpoint::Campaign.CampaignCustomMessage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaigncustommessage.html | AWS::Pinpoint::Campaign.CampaignCustomMessage}
 */
export interface PinpointCampaignCampaignCustomMessage {
  Data?: string;
}
/**
 * Type definition for AWS::Pinpoint::Campaign.CampaignEmailMessage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaignemailmessage.html | AWS::Pinpoint::Campaign.CampaignEmailMessage}
 */
export interface PinpointCampaignCampaignEmailMessage {
  FromAddress?: string;
  HtmlBody?: string;
  Title?: string;
  Body?: string;
}
/**
 * Type definition for AWS::Pinpoint::Campaign.CampaignEventFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaigneventfilter.html | AWS::Pinpoint::Campaign.CampaignEventFilter}
 */
export interface PinpointCampaignCampaignEventFilter {
  FilterType?: string;
  Dimensions?: PinpointCampaignEventDimensions;
}
/**
 * Type definition for AWS::Pinpoint::Campaign.CampaignHook
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaignhook.html | AWS::Pinpoint::Campaign.CampaignHook}
 */
export interface PinpointCampaignCampaignHook {
  Mode?: string;
  WebUrl?: string;
  LambdaFunctionName?: string;
}
/**
 * Type definition for AWS::Pinpoint::Campaign.CampaignInAppMessage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaigninappmessage.html | AWS::Pinpoint::Campaign.CampaignInAppMessage}
 */
export interface PinpointCampaignCampaignInAppMessage {
  CustomConfig?: object;
  Layout?: string;
  Content?: any[];
}
/**
 * Type definition for AWS::Pinpoint::Campaign.CampaignSmsMessage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaignsmsmessage.html | AWS::Pinpoint::Campaign.CampaignSmsMessage}
 */
export interface PinpointCampaignCampaignSmsMessage {
  EntityId?: string;
  OriginationNumber?: string;
  SenderId?: string;
  Body?: string;
  MessageType?: string;
  TemplateId?: string;
}
/**
 * Type definition for AWS::Pinpoint::Campaign.CustomDeliveryConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-customdeliveryconfiguration.html | AWS::Pinpoint::Campaign.CustomDeliveryConfiguration}
 */
export interface PinpointCampaignCustomDeliveryConfiguration {
  DeliveryUri?: string;
  EndpointTypes?: any[];
}
/**
 * Type definition for AWS::Pinpoint::Campaign.DefaultButtonConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-defaultbuttonconfiguration.html | AWS::Pinpoint::Campaign.DefaultButtonConfiguration}
 */
export interface PinpointCampaignDefaultButtonConfiguration {
  ButtonAction?: string;
  BorderRadius?: number;
  Text?: string;
  TextColor?: string;
  Link?: string;
  BackgroundColor?: string;
}
/**
 * Type definition for AWS::Pinpoint::Campaign.EventDimensions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-eventdimensions.html | AWS::Pinpoint::Campaign.EventDimensions}
 */
export interface PinpointCampaignEventDimensions {
  Metrics?: object;
  EventType?: PinpointCampaignSetDimension;
  Attributes?: object;
}
/**
 * Type definition for AWS::Pinpoint::Campaign.InAppMessageBodyConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-inappmessagebodyconfig.html | AWS::Pinpoint::Campaign.InAppMessageBodyConfig}
 */
export interface PinpointCampaignInAppMessageBodyConfig {
  Alignment?: string;
  TextColor?: string;
  Body?: string;
}
/**
 * Type definition for AWS::Pinpoint::Campaign.InAppMessageButton
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-inappmessagebutton.html | AWS::Pinpoint::Campaign.InAppMessageButton}
 */
export interface PinpointCampaignInAppMessageButton {
  Web?: PinpointCampaignOverrideButtonConfiguration;
  DefaultConfig?: PinpointCampaignDefaultButtonConfiguration;
  IOS?: PinpointCampaignOverrideButtonConfiguration;
  Android?: PinpointCampaignOverrideButtonConfiguration;
}
/**
 * Type definition for AWS::Pinpoint::Campaign.InAppMessageContent
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-inappmessagecontent.html | AWS::Pinpoint::Campaign.InAppMessageContent}
 */
export interface PinpointCampaignInAppMessageContent {
  BodyConfig?: PinpointCampaignInAppMessageBodyConfig;
  SecondaryBtn?: PinpointCampaignInAppMessageButton;
  ImageUrl?: string;
  PrimaryBtn?: PinpointCampaignInAppMessageButton;
  HeaderConfig?: PinpointCampaignInAppMessageHeaderConfig;
  BackgroundColor?: string;
}
/**
 * Type definition for AWS::Pinpoint::Campaign.InAppMessageHeaderConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-inappmessageheaderconfig.html | AWS::Pinpoint::Campaign.InAppMessageHeaderConfig}
 */
export interface PinpointCampaignInAppMessageHeaderConfig {
  Alignment?: string;
  Header?: string;
  TextColor?: string;
}
/**
 * Type definition for AWS::Pinpoint::Campaign.Limits
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-limits.html | AWS::Pinpoint::Campaign.Limits}
 */
export interface PinpointCampaignLimits {
  Daily?: number;
  MaximumDuration?: number;
  Total?: number;
  MessagesPerSecond?: number;
  Session?: number;
}
/**
 * Type definition for AWS::Pinpoint::Campaign.Message
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-message.html | AWS::Pinpoint::Campaign.Message}
 */
export interface PinpointCampaignMessage {
  JsonBody?: string;
  Action?: string;
  MediaUrl?: string;
  TimeToLive?: number;
  ImageSmallIconUrl?: string;
  ImageUrl?: string;
  Title?: string;
  ImageIconUrl?: string;
  SilentPush?: boolean;
  Body?: string;
  RawContent?: string;
  Url?: string;
}
/**
 * Type definition for AWS::Pinpoint::Campaign.MessageConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-messageconfiguration.html | AWS::Pinpoint::Campaign.MessageConfiguration}
 */
export interface PinpointCampaignMessageConfiguration {
  APNSMessage?: PinpointCampaignMessage;
  BaiduMessage?: PinpointCampaignMessage;
  DefaultMessage?: PinpointCampaignMessage;
  InAppMessage?: PinpointCampaignCampaignInAppMessage;
  EmailMessage?: PinpointCampaignCampaignEmailMessage;
  GCMMessage?: PinpointCampaignMessage;
  SMSMessage?: PinpointCampaignCampaignSmsMessage;
  CustomMessage?: PinpointCampaignCampaignCustomMessage;
  ADMMessage?: PinpointCampaignMessage;
}
/**
 * Type definition for AWS::Pinpoint::Campaign.MetricDimension
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-metricdimension.html | AWS::Pinpoint::Campaign.MetricDimension}
 */
export interface PinpointCampaignMetricDimension {
  ComparisonOperator?: string;
  Value?: number;
}
/**
 * Type definition for AWS::Pinpoint::Campaign.OverrideButtonConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-overridebuttonconfiguration.html | AWS::Pinpoint::Campaign.OverrideButtonConfiguration}
 */
export interface PinpointCampaignOverrideButtonConfiguration {
  ButtonAction?: string;
  Link?: string;
}
/**
 * Type definition for AWS::Pinpoint::Campaign.QuietTime
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-schedule-quiettime.html | AWS::Pinpoint::Campaign.QuietTime}
 */
export interface PinpointCampaignQuietTime {
  Start: string;
  End: string;
}
/**
 * Type definition for AWS::Pinpoint::Campaign.Schedule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-schedule.html | AWS::Pinpoint::Campaign.Schedule}
 */
export interface PinpointCampaignSchedule {
  TimeZone?: string;
  QuietTime?: PinpointCampaignQuietTime;
  EndTime?: string;
  StartTime?: string;
  Frequency?: string;
  EventFilter?: PinpointCampaignCampaignEventFilter;
  IsLocalTime?: boolean;
}
/**
 * Type definition for AWS::Pinpoint::Campaign.SetDimension
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-setdimension.html | AWS::Pinpoint::Campaign.SetDimension}
 */
export interface PinpointCampaignSetDimension {
  DimensionType?: string;
  Values?: any[];
}
/**
 * Type definition for AWS::Pinpoint::Campaign.Template
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-template.html | AWS::Pinpoint::Campaign.Template}
 */
export interface PinpointCampaignTemplate {
  Version?: string;
  Name?: string;
}
/**
 * Type definition for AWS::Pinpoint::Campaign.TemplateConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-templateconfiguration.html | AWS::Pinpoint::Campaign.TemplateConfiguration}
 */
export interface PinpointCampaignTemplateConfiguration {
  SMSTemplate?: PinpointCampaignTemplate;
  EmailTemplate?: PinpointCampaignTemplate;
  PushTemplate?: PinpointCampaignTemplate;
  VoiceTemplate?: PinpointCampaignTemplate;
}
/**
 * Type definition for AWS::Pinpoint::Campaign.WriteTreatmentResource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-writetreatmentresource.html | AWS::Pinpoint::Campaign.WriteTreatmentResource}
 */
export interface PinpointCampaignWriteTreatmentResource {
  TreatmentDescription?: string;
  MessageConfiguration?: PinpointCampaignMessageConfiguration;
  Schedule?: PinpointCampaignSchedule;
  TemplateConfiguration?: PinpointCampaignTemplateConfiguration;
  CustomDeliveryConfiguration?: PinpointCampaignCustomDeliveryConfiguration;
  SizePercent?: number;
  TreatmentName?: string;
}
/**
 * Type definition for AWS::Pinpoint::InAppTemplate.BodyConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-bodyconfig.html | AWS::Pinpoint::InAppTemplate.BodyConfig}
 */
export interface PinpointInAppTemplateBodyConfig {
  Alignment?: string;
  TextColor?: string;
  Body?: string;
}
/**
 * Type definition for AWS::Pinpoint::InAppTemplate.ButtonConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-buttonconfig.html | AWS::Pinpoint::InAppTemplate.ButtonConfig}
 */
export interface PinpointInAppTemplateButtonConfig {
  Web?: PinpointInAppTemplateOverrideButtonConfiguration;
  DefaultConfig?: PinpointInAppTemplateDefaultButtonConfiguration;
  IOS?: PinpointInAppTemplateOverrideButtonConfiguration;
  Android?: PinpointInAppTemplateOverrideButtonConfiguration;
}
/**
 * Type definition for AWS::Pinpoint::InAppTemplate.DefaultButtonConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-defaultbuttonconfiguration.html | AWS::Pinpoint::InAppTemplate.DefaultButtonConfiguration}
 */
export interface PinpointInAppTemplateDefaultButtonConfiguration {
  BorderRadius?: number;
  ButtonAction?: string;
  Text?: string;
  TextColor?: string;
  Link?: string;
  BackgroundColor?: string;
}
/**
 * Type definition for AWS::Pinpoint::InAppTemplate.HeaderConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-headerconfig.html | AWS::Pinpoint::InAppTemplate.HeaderConfig}
 */
export interface PinpointInAppTemplateHeaderConfig {
  Alignment?: string;
  Header?: string;
  TextColor?: string;
}
/**
 * Type definition for AWS::Pinpoint::InAppTemplate.InAppMessageContent
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-inappmessagecontent.html | AWS::Pinpoint::InAppTemplate.InAppMessageContent}
 */
export interface PinpointInAppTemplateInAppMessageContent {
  BodyConfig?: PinpointInAppTemplateBodyConfig;
  SecondaryBtn?: PinpointInAppTemplateButtonConfig;
  ImageUrl?: string;
  PrimaryBtn?: PinpointInAppTemplateButtonConfig;
  HeaderConfig?: PinpointInAppTemplateHeaderConfig;
  BackgroundColor?: string;
}
/**
 * Type definition for AWS::Pinpoint::InAppTemplate.OverrideButtonConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-overridebuttonconfiguration.html | AWS::Pinpoint::InAppTemplate.OverrideButtonConfiguration}
 */
export interface PinpointInAppTemplateOverrideButtonConfiguration {
  ButtonAction?: string;
  Link?: string;
}
/**
 * Type definition for AWS::Pinpoint::PushTemplate.APNSPushNotificationTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-pushtemplate-apnspushnotificationtemplate.html | AWS::Pinpoint::PushTemplate.APNSPushNotificationTemplate}
 */
export interface PinpointPushTemplateAPNSPushNotificationTemplate {
  Action?: string;
  MediaUrl?: string;
  Title?: string;
  Sound?: string;
  Body?: string;
  Url?: string;
}
/**
 * Type definition for AWS::Pinpoint::PushTemplate.AndroidPushNotificationTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-pushtemplate-androidpushnotificationtemplate.html | AWS::Pinpoint::PushTemplate.AndroidPushNotificationTemplate}
 */
export interface PinpointPushTemplateAndroidPushNotificationTemplate {
  Action?: string;
  ImageUrl?: string;
  SmallImageIconUrl?: string;
  Title?: string;
  ImageIconUrl?: string;
  Sound?: string;
  Body?: string;
  Url?: string;
}
/**
 * Type definition for AWS::Pinpoint::PushTemplate.DefaultPushNotificationTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-pushtemplate-defaultpushnotificationtemplate.html | AWS::Pinpoint::PushTemplate.DefaultPushNotificationTemplate}
 */
export interface PinpointPushTemplateDefaultPushNotificationTemplate {
  Action?: string;
  Title?: string;
  Sound?: string;
  Body?: string;
  Url?: string;
}
/**
 * Type definition for AWS::Pinpoint::Segment.AttributeDimension
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-attributedimension.html | AWS::Pinpoint::Segment.AttributeDimension}
 */
export interface PinpointSegmentAttributeDimension {
  AttributeType?: string;
  Values?: any[];
}
/**
 * Type definition for AWS::Pinpoint::Segment.Behavior
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-segmentdimensions-behavior.html | AWS::Pinpoint::Segment.Behavior}
 */
export interface PinpointSegmentBehavior {
  Recency?: PinpointSegmentRecency;
}
/**
 * Type definition for AWS::Pinpoint::Segment.Coordinates
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-segmentdimensions-location-gpspoint-coordinates.html | AWS::Pinpoint::Segment.Coordinates}
 */
export interface PinpointSegmentCoordinates {
  Latitude: number;
  Longitude: number;
}
/**
 * Type definition for AWS::Pinpoint::Segment.Demographic
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-segmentdimensions-demographic.html | AWS::Pinpoint::Segment.Demographic}
 */
export interface PinpointSegmentDemographic {
  AppVersion?: PinpointSegmentSetDimension;
  DeviceType?: PinpointSegmentSetDimension;
  Platform?: PinpointSegmentSetDimension;
  Channel?: PinpointSegmentSetDimension;
  Model?: PinpointSegmentSetDimension;
  Make?: PinpointSegmentSetDimension;
}
/**
 * Type definition for AWS::Pinpoint::Segment.GPSPoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-segmentdimensions-location-gpspoint.html | AWS::Pinpoint::Segment.GPSPoint}
 */
export interface PinpointSegmentGPSPoint {
  RangeInKilometers: number;
  Coordinates: PinpointSegmentCoordinates;
}
/**
 * Type definition for AWS::Pinpoint::Segment.Groups
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-segmentgroups-groups.html | AWS::Pinpoint::Segment.Groups}
 */
export interface PinpointSegmentGroups {
  Type?: string;
  SourceType?: string;
  Dimensions?: any[];
  SourceSegments?: any[];
}
/**
 * Type definition for AWS::Pinpoint::Segment.Location
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-segmentdimensions-location.html | AWS::Pinpoint::Segment.Location}
 */
export interface PinpointSegmentLocation {
  GPSPoint?: PinpointSegmentGPSPoint;
  Country?: PinpointSegmentSetDimension;
}
/**
 * Type definition for AWS::Pinpoint::Segment.Recency
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-segmentdimensions-behavior-recency.html | AWS::Pinpoint::Segment.Recency}
 */
export interface PinpointSegmentRecency {
  Duration: string;
  RecencyType: string;
}
/**
 * Type definition for AWS::Pinpoint::Segment.SegmentDimensions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-segmentdimensions.html | AWS::Pinpoint::Segment.SegmentDimensions}
 */
export interface PinpointSegmentSegmentDimensions {
  Demographic?: PinpointSegmentDemographic;
  Metrics?: object;
  Attributes?: object;
  Behavior?: PinpointSegmentBehavior;
  UserAttributes?: object;
  Location?: PinpointSegmentLocation;
}
/**
 * Type definition for AWS::Pinpoint::Segment.SegmentGroups
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-segmentgroups.html | AWS::Pinpoint::Segment.SegmentGroups}
 */
export interface PinpointSegmentSegmentGroups {
  Groups?: any[];
  Include?: string;
}
/**
 * Type definition for AWS::Pinpoint::Segment.SetDimension
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-setdimension.html | AWS::Pinpoint::Segment.SetDimension}
 */
export interface PinpointSegmentSetDimension {
  DimensionType?: string;
  Values?: any[];
}
/**
 * Type definition for AWS::Pinpoint::Segment.SourceSegments
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-segmentgroups-groups-sourcesegments.html | AWS::Pinpoint::Segment.SourceSegments}
 */
export interface PinpointSegmentSourceSegments {
  Version?: number;
  Id: string;
}
/**
 * Type definition for AWS::Pinpoint::ADMChannel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-admchannel.html | AWS::Pinpoint::ADMChannel}
 */
export interface PinpointADMChannelProps {
  ClientSecret: string;
  Enabled?: boolean;
  ClientId: string;
  ApplicationId: string;
}
/**
 * Resource class for AWS::Pinpoint::ADMChannel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-admchannel.html | AWS::Pinpoint::ADMChannel}
 */
export class PinpointADMChannel extends ResourceBase<
  "AWS::Pinpoint::ADMChannel",
  PinpointADMChannelProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Pinpoint::ADMChannel";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: PinpointADMChannelProps,
    options?: ResourceOptions,
  ) {
    super(
      PinpointADMChannel.Type,
      PinpointADMChannel.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Pinpoint::APNSChannel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnschannel.html | AWS::Pinpoint::APNSChannel}
 */
export interface PinpointAPNSChannelProps {
  BundleId?: string;
  PrivateKey?: string;
  Enabled?: boolean;
  DefaultAuthenticationMethod?: string;
  TokenKey?: string;
  ApplicationId: string;
  TeamId?: string;
  Certificate?: string;
  TokenKeyId?: string;
}
/**
 * Resource class for AWS::Pinpoint::APNSChannel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnschannel.html | AWS::Pinpoint::APNSChannel}
 */
export class PinpointAPNSChannel extends ResourceBase<
  "AWS::Pinpoint::APNSChannel",
  PinpointAPNSChannelProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Pinpoint::APNSChannel";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: PinpointAPNSChannelProps,
    options?: ResourceOptions,
  ) {
    super(
      PinpointAPNSChannel.Type,
      PinpointAPNSChannel.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Pinpoint::APNSSandboxChannel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnssandboxchannel.html | AWS::Pinpoint::APNSSandboxChannel}
 */
export interface PinpointAPNSSandboxChannelProps {
  BundleId?: string;
  PrivateKey?: string;
  Enabled?: boolean;
  DefaultAuthenticationMethod?: string;
  TokenKey?: string;
  ApplicationId: string;
  TeamId?: string;
  Certificate?: string;
  TokenKeyId?: string;
}
/**
 * Resource class for AWS::Pinpoint::APNSSandboxChannel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnssandboxchannel.html | AWS::Pinpoint::APNSSandboxChannel}
 */
export class PinpointAPNSSandboxChannel extends ResourceBase<
  "AWS::Pinpoint::APNSSandboxChannel",
  PinpointAPNSSandboxChannelProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Pinpoint::APNSSandboxChannel";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: PinpointAPNSSandboxChannelProps,
    options?: ResourceOptions,
  ) {
    super(
      PinpointAPNSSandboxChannel.Type,
      PinpointAPNSSandboxChannel.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Pinpoint::APNSVoipChannel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnsvoipchannel.html | AWS::Pinpoint::APNSVoipChannel}
 */
export interface PinpointAPNSVoipChannelProps {
  BundleId?: string;
  PrivateKey?: string;
  Enabled?: boolean;
  DefaultAuthenticationMethod?: string;
  TokenKey?: string;
  ApplicationId: string;
  TeamId?: string;
  Certificate?: string;
  TokenKeyId?: string;
}
/**
 * Resource class for AWS::Pinpoint::APNSVoipChannel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnsvoipchannel.html | AWS::Pinpoint::APNSVoipChannel}
 */
export class PinpointAPNSVoipChannel extends ResourceBase<
  "AWS::Pinpoint::APNSVoipChannel",
  PinpointAPNSVoipChannelProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Pinpoint::APNSVoipChannel";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: PinpointAPNSVoipChannelProps,
    options?: ResourceOptions,
  ) {
    super(
      PinpointAPNSVoipChannel.Type,
      PinpointAPNSVoipChannel.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Pinpoint::APNSVoipSandboxChannel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnsvoipsandboxchannel.html | AWS::Pinpoint::APNSVoipSandboxChannel}
 */
export interface PinpointAPNSVoipSandboxChannelProps {
  BundleId?: string;
  PrivateKey?: string;
  Enabled?: boolean;
  DefaultAuthenticationMethod?: string;
  TokenKey?: string;
  ApplicationId: string;
  TeamId?: string;
  Certificate?: string;
  TokenKeyId?: string;
}
/**
 * Resource class for AWS::Pinpoint::APNSVoipSandboxChannel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnsvoipsandboxchannel.html | AWS::Pinpoint::APNSVoipSandboxChannel}
 */
export class PinpointAPNSVoipSandboxChannel extends ResourceBase<
  "AWS::Pinpoint::APNSVoipSandboxChannel",
  PinpointAPNSVoipSandboxChannelProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Pinpoint::APNSVoipSandboxChannel";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: PinpointAPNSVoipSandboxChannelProps,
    options?: ResourceOptions,
  ) {
    super(
      PinpointAPNSVoipSandboxChannel.Type,
      PinpointAPNSVoipSandboxChannel.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Pinpoint::App
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-app.html | AWS::Pinpoint::App}
 */
export interface PinpointAppProps {
  Tags?: object;
  Name: string;
}
/**
 * Attributes type definition for AWS::Pinpoint::App
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-app.html | AWS::Pinpoint::App}
 */
export interface PinpointAppAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::Pinpoint::App
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-app.html | AWS::Pinpoint::App}
 */
export class PinpointApp extends ResourceBase<
  "AWS::Pinpoint::App",
  PinpointAppProps,
  PinpointAppAttribs
> {
  public static readonly Type = "AWS::Pinpoint::App";
  public static readonly AttributeNames: readonly (keyof PinpointAppAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: PinpointAppProps,
    options?: ResourceOptions,
  ) {
    super(
      PinpointApp.Type,
      PinpointApp.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Pinpoint::ApplicationSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-applicationsettings.html | AWS::Pinpoint::ApplicationSettings}
 */
export interface PinpointApplicationSettingsProps {
  QuietTime?: PinpointApplicationSettingsQuietTime;
  Limits?: PinpointApplicationSettingsLimits;
  ApplicationId: string;
  CampaignHook?: PinpointApplicationSettingsCampaignHook;
  CloudWatchMetricsEnabled?: boolean;
}
/**
 * Resource class for AWS::Pinpoint::ApplicationSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-applicationsettings.html | AWS::Pinpoint::ApplicationSettings}
 */
export class PinpointApplicationSettings extends ResourceBase<
  "AWS::Pinpoint::ApplicationSettings",
  PinpointApplicationSettingsProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Pinpoint::ApplicationSettings";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: PinpointApplicationSettingsProps,
    options?: ResourceOptions,
  ) {
    super(
      PinpointApplicationSettings.Type,
      PinpointApplicationSettings.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Pinpoint::BaiduChannel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-baiduchannel.html | AWS::Pinpoint::BaiduChannel}
 */
export interface PinpointBaiduChannelProps {
  SecretKey: string;
  ApiKey: string;
  Enabled?: boolean;
  ApplicationId: string;
}
/**
 * Resource class for AWS::Pinpoint::BaiduChannel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-baiduchannel.html | AWS::Pinpoint::BaiduChannel}
 */
export class PinpointBaiduChannel extends ResourceBase<
  "AWS::Pinpoint::BaiduChannel",
  PinpointBaiduChannelProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Pinpoint::BaiduChannel";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: PinpointBaiduChannelProps,
    options?: ResourceOptions,
  ) {
    super(
      PinpointBaiduChannel.Type,
      PinpointBaiduChannel.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Pinpoint::Campaign
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-campaign.html | AWS::Pinpoint::Campaign}
 */
export interface PinpointCampaignProps {
  Description?: string;
  SegmentId: string;
  Priority?: number;
  TemplateConfiguration?: PinpointCampaignTemplateConfiguration;
  IsPaused?: boolean;
  AdditionalTreatments?: any[];
  Name: string;
  SegmentVersion?: number;
  TreatmentDescription?: string;
  MessageConfiguration?: PinpointCampaignMessageConfiguration;
  Limits?: PinpointCampaignLimits;
  HoldoutPercent?: number;
  Schedule: PinpointCampaignSchedule;
  CustomDeliveryConfiguration?: PinpointCampaignCustomDeliveryConfiguration;
  ApplicationId: string;
  CampaignHook?: PinpointCampaignCampaignHook;
  Tags?: object;
  TreatmentName?: string;
}
/**
 * Attributes type definition for AWS::Pinpoint::Campaign
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-campaign.html | AWS::Pinpoint::Campaign}
 */
export interface PinpointCampaignAttribs {
  CampaignId?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::Pinpoint::Campaign
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-campaign.html | AWS::Pinpoint::Campaign}
 */
export class PinpointCampaign extends ResourceBase<
  "AWS::Pinpoint::Campaign",
  PinpointCampaignProps,
  PinpointCampaignAttribs
> {
  public static readonly Type = "AWS::Pinpoint::Campaign";
  public static readonly AttributeNames: readonly (keyof PinpointCampaignAttribs)[] =
    ["CampaignId", "Arn"];
  constructor(
    logicalId: string,
    properties: PinpointCampaignProps,
    options?: ResourceOptions,
  ) {
    super(
      PinpointCampaign.Type,
      PinpointCampaign.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Pinpoint::EmailChannel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-emailchannel.html | AWS::Pinpoint::EmailChannel}
 */
export interface PinpointEmailChannelProps {
  ConfigurationSet?: string;
  FromAddress: string;
  Enabled?: boolean;
  ApplicationId: string;
  Identity: string;
  RoleArn?: string;
}
/**
 * Resource class for AWS::Pinpoint::EmailChannel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-emailchannel.html | AWS::Pinpoint::EmailChannel}
 */
export class PinpointEmailChannel extends ResourceBase<
  "AWS::Pinpoint::EmailChannel",
  PinpointEmailChannelProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Pinpoint::EmailChannel";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: PinpointEmailChannelProps,
    options?: ResourceOptions,
  ) {
    super(
      PinpointEmailChannel.Type,
      PinpointEmailChannel.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Pinpoint::EmailTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-emailtemplate.html | AWS::Pinpoint::EmailTemplate}
 */
export interface PinpointEmailTemplateProps {
  HtmlPart?: string;
  TextPart?: string;
  TemplateName: string;
  TemplateDescription?: string;
  DefaultSubstitutions?: string;
  Subject: string;
  Tags?: object;
}
/**
 * Attributes type definition for AWS::Pinpoint::EmailTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-emailtemplate.html | AWS::Pinpoint::EmailTemplate}
 */
export interface PinpointEmailTemplateAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::Pinpoint::EmailTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-emailtemplate.html | AWS::Pinpoint::EmailTemplate}
 */
export class PinpointEmailTemplate extends ResourceBase<
  "AWS::Pinpoint::EmailTemplate",
  PinpointEmailTemplateProps,
  PinpointEmailTemplateAttribs
> {
  public static readonly Type = "AWS::Pinpoint::EmailTemplate";
  public static readonly AttributeNames: readonly (keyof PinpointEmailTemplateAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: PinpointEmailTemplateProps,
    options?: ResourceOptions,
  ) {
    super(
      PinpointEmailTemplate.Type,
      PinpointEmailTemplate.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Pinpoint::EventStream
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-eventstream.html | AWS::Pinpoint::EventStream}
 */
export interface PinpointEventStreamProps {
  ApplicationId: string;
  DestinationStreamArn: string;
  RoleArn: string;
}
/**
 * Resource class for AWS::Pinpoint::EventStream
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-eventstream.html | AWS::Pinpoint::EventStream}
 */
export class PinpointEventStream extends ResourceBase<
  "AWS::Pinpoint::EventStream",
  PinpointEventStreamProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Pinpoint::EventStream";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: PinpointEventStreamProps,
    options?: ResourceOptions,
  ) {
    super(
      PinpointEventStream.Type,
      PinpointEventStream.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Pinpoint::GCMChannel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-gcmchannel.html | AWS::Pinpoint::GCMChannel}
 */
export interface PinpointGCMChannelProps {
  ApiKey: string;
  Enabled?: boolean;
  ApplicationId: string;
}
/**
 * Resource class for AWS::Pinpoint::GCMChannel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-gcmchannel.html | AWS::Pinpoint::GCMChannel}
 */
export class PinpointGCMChannel extends ResourceBase<
  "AWS::Pinpoint::GCMChannel",
  PinpointGCMChannelProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Pinpoint::GCMChannel";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: PinpointGCMChannelProps,
    options?: ResourceOptions,
  ) {
    super(
      PinpointGCMChannel.Type,
      PinpointGCMChannel.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Pinpoint::InAppTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html | AWS::Pinpoint::InAppTemplate}
 */
export interface PinpointInAppTemplateProps {
  CustomConfig?: object;
  Layout?: string;
  Content?: any[];
  TemplateName: string;
  TemplateDescription?: string;
  Tags?: object;
}
/**
 * Attributes type definition for AWS::Pinpoint::InAppTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html | AWS::Pinpoint::InAppTemplate}
 */
export interface PinpointInAppTemplateAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::Pinpoint::InAppTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html | AWS::Pinpoint::InAppTemplate}
 */
export class PinpointInAppTemplate extends ResourceBase<
  "AWS::Pinpoint::InAppTemplate",
  PinpointInAppTemplateProps,
  PinpointInAppTemplateAttribs
> {
  public static readonly Type = "AWS::Pinpoint::InAppTemplate";
  public static readonly AttributeNames: readonly (keyof PinpointInAppTemplateAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: PinpointInAppTemplateProps,
    options?: ResourceOptions,
  ) {
    super(
      PinpointInAppTemplate.Type,
      PinpointInAppTemplate.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Pinpoint::PushTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-pushtemplate.html | AWS::Pinpoint::PushTemplate}
 */
export interface PinpointPushTemplateProps {
  GCM?: PinpointPushTemplateAndroidPushNotificationTemplate;
  Baidu?: PinpointPushTemplateAndroidPushNotificationTemplate;
  TemplateName: string;
  ADM?: PinpointPushTemplateAndroidPushNotificationTemplate;
  APNS?: PinpointPushTemplateAPNSPushNotificationTemplate;
  TemplateDescription?: string;
  DefaultSubstitutions?: string;
  Default?: PinpointPushTemplateDefaultPushNotificationTemplate;
  Tags?: object;
}
/**
 * Attributes type definition for AWS::Pinpoint::PushTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-pushtemplate.html | AWS::Pinpoint::PushTemplate}
 */
export interface PinpointPushTemplateAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::Pinpoint::PushTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-pushtemplate.html | AWS::Pinpoint::PushTemplate}
 */
export class PinpointPushTemplate extends ResourceBase<
  "AWS::Pinpoint::PushTemplate",
  PinpointPushTemplateProps,
  PinpointPushTemplateAttribs
> {
  public static readonly Type = "AWS::Pinpoint::PushTemplate";
  public static readonly AttributeNames: readonly (keyof PinpointPushTemplateAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: PinpointPushTemplateProps,
    options?: ResourceOptions,
  ) {
    super(
      PinpointPushTemplate.Type,
      PinpointPushTemplate.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Pinpoint::SMSChannel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-smschannel.html | AWS::Pinpoint::SMSChannel}
 */
export interface PinpointSMSChannelProps {
  ShortCode?: string;
  Enabled?: boolean;
  ApplicationId: string;
  SenderId?: string;
}
/**
 * Resource class for AWS::Pinpoint::SMSChannel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-smschannel.html | AWS::Pinpoint::SMSChannel}
 */
export class PinpointSMSChannel extends ResourceBase<
  "AWS::Pinpoint::SMSChannel",
  PinpointSMSChannelProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Pinpoint::SMSChannel";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: PinpointSMSChannelProps,
    options?: ResourceOptions,
  ) {
    super(
      PinpointSMSChannel.Type,
      PinpointSMSChannel.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Pinpoint::Segment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-segment.html | AWS::Pinpoint::Segment}
 */
export interface PinpointSegmentProps {
  SegmentGroups?: PinpointSegmentSegmentGroups;
  Dimensions?: PinpointSegmentSegmentDimensions;
  ApplicationId: string;
  Tags?: object;
  Name: string;
}
/**
 * Attributes type definition for AWS::Pinpoint::Segment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-segment.html | AWS::Pinpoint::Segment}
 */
export interface PinpointSegmentAttribs {
  SegmentId?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::Pinpoint::Segment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-segment.html | AWS::Pinpoint::Segment}
 */
export class PinpointSegment extends ResourceBase<
  "AWS::Pinpoint::Segment",
  PinpointSegmentProps,
  PinpointSegmentAttribs
> {
  public static readonly Type = "AWS::Pinpoint::Segment";
  public static readonly AttributeNames: readonly (keyof PinpointSegmentAttribs)[] =
    ["SegmentId", "Arn"];
  constructor(
    logicalId: string,
    properties: PinpointSegmentProps,
    options?: ResourceOptions,
  ) {
    super(
      PinpointSegment.Type,
      PinpointSegment.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Pinpoint::SmsTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-smstemplate.html | AWS::Pinpoint::SmsTemplate}
 */
export interface PinpointSmsTemplateProps {
  TemplateName: string;
  TemplateDescription?: string;
  DefaultSubstitutions?: string;
  Body: string;
  Tags?: object;
}
/**
 * Attributes type definition for AWS::Pinpoint::SmsTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-smstemplate.html | AWS::Pinpoint::SmsTemplate}
 */
export interface PinpointSmsTemplateAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::Pinpoint::SmsTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-smstemplate.html | AWS::Pinpoint::SmsTemplate}
 */
export class PinpointSmsTemplate extends ResourceBase<
  "AWS::Pinpoint::SmsTemplate",
  PinpointSmsTemplateProps,
  PinpointSmsTemplateAttribs
> {
  public static readonly Type = "AWS::Pinpoint::SmsTemplate";
  public static readonly AttributeNames: readonly (keyof PinpointSmsTemplateAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: PinpointSmsTemplateProps,
    options?: ResourceOptions,
  ) {
    super(
      PinpointSmsTemplate.Type,
      PinpointSmsTemplate.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Pinpoint::VoiceChannel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-voicechannel.html | AWS::Pinpoint::VoiceChannel}
 */
export interface PinpointVoiceChannelProps {
  Enabled?: boolean;
  ApplicationId: string;
}
/**
 * Resource class for AWS::Pinpoint::VoiceChannel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-voicechannel.html | AWS::Pinpoint::VoiceChannel}
 */
export class PinpointVoiceChannel extends ResourceBase<
  "AWS::Pinpoint::VoiceChannel",
  PinpointVoiceChannelProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Pinpoint::VoiceChannel";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: PinpointVoiceChannelProps,
    options?: ResourceOptions,
  ) {
    super(
      PinpointVoiceChannel.Type,
      PinpointVoiceChannel.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
