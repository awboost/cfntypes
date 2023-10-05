import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::PinpointEmail::ConfigurationSet.DeliveryOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationset-deliveryoptions.html | AWS::PinpointEmail::ConfigurationSet.DeliveryOptions}
 */
export interface PinpointEmailConfigurationSetDeliveryOptions {
  SendingPoolName?: string;
}
/**
 * Type definition for AWS::PinpointEmail::ConfigurationSet.ReputationOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationset-reputationoptions.html | AWS::PinpointEmail::ConfigurationSet.ReputationOptions}
 */
export interface PinpointEmailConfigurationSetReputationOptions {
  ReputationMetricsEnabled?: boolean;
}
/**
 * Type definition for AWS::PinpointEmail::ConfigurationSet.SendingOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationset-sendingoptions.html | AWS::PinpointEmail::ConfigurationSet.SendingOptions}
 */
export interface PinpointEmailConfigurationSetSendingOptions {
  SendingEnabled?: boolean;
}
/**
 * Type definition for AWS::PinpointEmail::ConfigurationSet.Tags
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationset-tags.html | AWS::PinpointEmail::ConfigurationSet.Tags}
 */
export interface PinpointEmailConfigurationSetTags {
  Value?: string;
  Key?: string;
}
/**
 * Type definition for AWS::PinpointEmail::ConfigurationSet.TrackingOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationset-trackingoptions.html | AWS::PinpointEmail::ConfigurationSet.TrackingOptions}
 */
export interface PinpointEmailConfigurationSetTrackingOptions {
  CustomRedirectDomain?: string;
}
/**
 * Type definition for AWS::PinpointEmail::ConfigurationSetEventDestination.CloudWatchDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-cloudwatchdestination.html | AWS::PinpointEmail::ConfigurationSetEventDestination.CloudWatchDestination}
 */
export interface PinpointEmailConfigurationSetEventDestinationCloudWatchDestination {
  DimensionConfigurations?: any[];
}
/**
 * Type definition for AWS::PinpointEmail::ConfigurationSetEventDestination.DimensionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-dimensionconfiguration.html | AWS::PinpointEmail::ConfigurationSetEventDestination.DimensionConfiguration}
 */
export interface PinpointEmailConfigurationSetEventDestinationDimensionConfiguration {
  DimensionValueSource: string;
  DefaultDimensionValue: string;
  DimensionName: string;
}
/**
 * Type definition for AWS::PinpointEmail::ConfigurationSetEventDestination.EventDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-eventdestination.html | AWS::PinpointEmail::ConfigurationSetEventDestination.EventDestination}
 */
export interface PinpointEmailConfigurationSetEventDestinationEventDestination {
  SnsDestination?: PinpointEmailConfigurationSetEventDestinationSnsDestination;
  CloudWatchDestination?: PinpointEmailConfigurationSetEventDestinationCloudWatchDestination;
  Enabled?: boolean;
  MatchingEventTypes: any[];
  PinpointDestination?: PinpointEmailConfigurationSetEventDestinationPinpointDestination;
  KinesisFirehoseDestination?: PinpointEmailConfigurationSetEventDestinationKinesisFirehoseDestination;
}
/**
 * Type definition for AWS::PinpointEmail::ConfigurationSetEventDestination.KinesisFirehoseDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-kinesisfirehosedestination.html | AWS::PinpointEmail::ConfigurationSetEventDestination.KinesisFirehoseDestination}
 */
export interface PinpointEmailConfigurationSetEventDestinationKinesisFirehoseDestination {
  DeliveryStreamArn: string;
  IamRoleArn: string;
}
/**
 * Type definition for AWS::PinpointEmail::ConfigurationSetEventDestination.PinpointDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-pinpointdestination.html | AWS::PinpointEmail::ConfigurationSetEventDestination.PinpointDestination}
 */
export interface PinpointEmailConfigurationSetEventDestinationPinpointDestination {
  ApplicationArn?: string;
}
/**
 * Type definition for AWS::PinpointEmail::ConfigurationSetEventDestination.SnsDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-snsdestination.html | AWS::PinpointEmail::ConfigurationSetEventDestination.SnsDestination}
 */
export interface PinpointEmailConfigurationSetEventDestinationSnsDestination {
  TopicArn: string;
}
/**
 * Type definition for AWS::PinpointEmail::DedicatedIpPool.Tags
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-dedicatedippool-tags.html | AWS::PinpointEmail::DedicatedIpPool.Tags}
 */
export interface PinpointEmailDedicatedIpPoolTags {
  Value?: string;
  Key?: string;
}
/**
 * Type definition for AWS::PinpointEmail::Identity.MailFromAttributes
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-identity-mailfromattributes.html | AWS::PinpointEmail::Identity.MailFromAttributes}
 */
export interface PinpointEmailIdentityMailFromAttributes {
  MailFromDomain?: string;
  BehaviorOnMxFailure?: string;
}
/**
 * Type definition for AWS::PinpointEmail::Identity.Tags
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-identity-tags.html | AWS::PinpointEmail::Identity.Tags}
 */
export interface PinpointEmailIdentityTags {
  Value?: string;
  Key?: string;
}
/**
 * Type definition for AWS::PinpointEmail::ConfigurationSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-configurationset.html | AWS::PinpointEmail::ConfigurationSet}
 */
export interface PinpointEmailConfigurationSetProps {
  SendingOptions?: PinpointEmailConfigurationSetSendingOptions;
  TrackingOptions?: PinpointEmailConfigurationSetTrackingOptions;
  ReputationOptions?: PinpointEmailConfigurationSetReputationOptions;
  DeliveryOptions?: PinpointEmailConfigurationSetDeliveryOptions;
  Tags?: Tag[];
  Name: string;
}
/**
 * Resource class for AWS::PinpointEmail::ConfigurationSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-configurationset.html | AWS::PinpointEmail::ConfigurationSet}
 */
export class PinpointEmailConfigurationSet extends ResourceBase<
  "AWS::PinpointEmail::ConfigurationSet",
  PinpointEmailConfigurationSetProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::PinpointEmail::ConfigurationSet";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: PinpointEmailConfigurationSetProps,
    options?: ResourceOptions,
  ) {
    super(
      PinpointEmailConfigurationSet.Type,
      PinpointEmailConfigurationSet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::PinpointEmail::ConfigurationSetEventDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-configurationseteventdestination.html | AWS::PinpointEmail::ConfigurationSetEventDestination}
 */
export interface PinpointEmailConfigurationSetEventDestinationProps {
  EventDestinationName: string;
  ConfigurationSetName: string;
  EventDestination?: PinpointEmailConfigurationSetEventDestinationEventDestination;
}
/**
 * Resource class for AWS::PinpointEmail::ConfigurationSetEventDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-configurationseteventdestination.html | AWS::PinpointEmail::ConfigurationSetEventDestination}
 */
export class PinpointEmailConfigurationSetEventDestination extends ResourceBase<
  "AWS::PinpointEmail::ConfigurationSetEventDestination",
  PinpointEmailConfigurationSetEventDestinationProps,
  Record<string, never>
> {
  public static readonly Type =
    "AWS::PinpointEmail::ConfigurationSetEventDestination";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: PinpointEmailConfigurationSetEventDestinationProps,
    options?: ResourceOptions,
  ) {
    super(
      PinpointEmailConfigurationSetEventDestination.Type,
      PinpointEmailConfigurationSetEventDestination.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::PinpointEmail::DedicatedIpPool
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-dedicatedippool.html | AWS::PinpointEmail::DedicatedIpPool}
 */
export interface PinpointEmailDedicatedIpPoolProps {
  PoolName?: string;
  Tags?: Tag[];
}
/**
 * Resource class for AWS::PinpointEmail::DedicatedIpPool
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-dedicatedippool.html | AWS::PinpointEmail::DedicatedIpPool}
 */
export class PinpointEmailDedicatedIpPool extends ResourceBase<
  "AWS::PinpointEmail::DedicatedIpPool",
  PinpointEmailDedicatedIpPoolProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::PinpointEmail::DedicatedIpPool";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: PinpointEmailDedicatedIpPoolProps,
    options?: ResourceOptions,
  ) {
    super(
      PinpointEmailDedicatedIpPool.Type,
      PinpointEmailDedicatedIpPool.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::PinpointEmail::Identity
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-identity.html | AWS::PinpointEmail::Identity}
 */
export interface PinpointEmailIdentityProps {
  FeedbackForwardingEnabled?: boolean;
  DkimSigningEnabled?: boolean;
  Tags?: Tag[];
  Name: string;
  MailFromAttributes?: PinpointEmailIdentityMailFromAttributes;
}
/**
 * Attributes type definition for AWS::PinpointEmail::Identity
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-identity.html | AWS::PinpointEmail::Identity}
 */
export interface PinpointEmailIdentityAttribs {
  IdentityDNSRecordName3?: string;
  IdentityDNSRecordName1?: string;
  IdentityDNSRecordName2?: string;
  IdentityDNSRecordValue3?: string;
  IdentityDNSRecordValue2?: string;
  IdentityDNSRecordValue1?: string;
}
/**
 * Resource class for AWS::PinpointEmail::Identity
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-identity.html | AWS::PinpointEmail::Identity}
 */
export class PinpointEmailIdentity extends ResourceBase<
  "AWS::PinpointEmail::Identity",
  PinpointEmailIdentityProps,
  PinpointEmailIdentityAttribs
> {
  public static readonly Type = "AWS::PinpointEmail::Identity";
  public static readonly AttributeNames: readonly (keyof PinpointEmailIdentityAttribs)[] =
    [
      "IdentityDNSRecordName3",
      "IdentityDNSRecordName1",
      "IdentityDNSRecordName2",
      "IdentityDNSRecordValue3",
      "IdentityDNSRecordValue2",
      "IdentityDNSRecordValue1",
    ];
  constructor(
    logicalId: string,
    properties: PinpointEmailIdentityProps,
    options?: ResourceOptions,
  ) {
    super(
      PinpointEmailIdentity.Type,
      PinpointEmailIdentity.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
