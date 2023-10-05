import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::IVSChat::LoggingConfiguration.CloudWatchLogsDestinationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivschat-loggingconfiguration-cloudwatchlogsdestinationconfiguration.html | AWS::IVSChat::LoggingConfiguration.CloudWatchLogsDestinationConfiguration}
 */
export interface IVSChatLoggingConfigurationCloudWatchLogsDestinationConfiguration {
  LogGroupName: string;
}
/**
 * Type definition for AWS::IVSChat::LoggingConfiguration.DestinationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivschat-loggingconfiguration-destinationconfiguration.html | AWS::IVSChat::LoggingConfiguration.DestinationConfiguration}
 */
export interface IVSChatLoggingConfigurationDestinationConfiguration {
  S3?: IVSChatLoggingConfigurationS3DestinationConfiguration;
  Firehose?: IVSChatLoggingConfigurationFirehoseDestinationConfiguration;
  CloudWatchLogs?: IVSChatLoggingConfigurationCloudWatchLogsDestinationConfiguration;
}
/**
 * Type definition for AWS::IVSChat::LoggingConfiguration.FirehoseDestinationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivschat-loggingconfiguration-firehosedestinationconfiguration.html | AWS::IVSChat::LoggingConfiguration.FirehoseDestinationConfiguration}
 */
export interface IVSChatLoggingConfigurationFirehoseDestinationConfiguration {
  DeliveryStreamName: string;
}
/**
 * Type definition for AWS::IVSChat::LoggingConfiguration.S3DestinationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivschat-loggingconfiguration-s3destinationconfiguration.html | AWS::IVSChat::LoggingConfiguration.S3DestinationConfiguration}
 */
export interface IVSChatLoggingConfigurationS3DestinationConfiguration {
  BucketName: string;
}
/**
 * Type definition for AWS::IVSChat::Room.MessageReviewHandler
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivschat-room-messagereviewhandler.html | AWS::IVSChat::Room.MessageReviewHandler}
 */
export interface IVSChatRoomMessageReviewHandler {
  FallbackResult?: string;
  Uri?: string;
}
/**
 * Type definition for AWS::IVSChat::LoggingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-loggingconfiguration.html | AWS::IVSChat::LoggingConfiguration}
 */
export interface IVSChatLoggingConfigurationProps {
  DestinationConfiguration: IVSChatLoggingConfigurationDestinationConfiguration;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::IVSChat::LoggingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-loggingconfiguration.html | AWS::IVSChat::LoggingConfiguration}
 */
export interface IVSChatLoggingConfigurationAttribs {
  State?: string;
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::IVSChat::LoggingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-loggingconfiguration.html | AWS::IVSChat::LoggingConfiguration}
 */
export class IVSChatLoggingConfiguration extends ResourceBase<
  "AWS::IVSChat::LoggingConfiguration",
  IVSChatLoggingConfigurationProps,
  IVSChatLoggingConfigurationAttribs
> {
  public static readonly Type = "AWS::IVSChat::LoggingConfiguration";
  public static readonly AttributeNames: readonly (keyof IVSChatLoggingConfigurationAttribs)[] =
    ["State", "Id", "Arn"];
  constructor(
    logicalId: string,
    properties: IVSChatLoggingConfigurationProps,
    options?: ResourceOptions,
  ) {
    super(
      IVSChatLoggingConfiguration.Type,
      IVSChatLoggingConfiguration.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IVSChat::Room
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-room.html | AWS::IVSChat::Room}
 */
export interface IVSChatRoomProps {
  MaximumMessageRatePerSecond?: number;
  MaximumMessageLength?: number;
  MessageReviewHandler?: IVSChatRoomMessageReviewHandler;
  LoggingConfigurationIdentifiers?: any[];
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::IVSChat::Room
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-room.html | AWS::IVSChat::Room}
 */
export interface IVSChatRoomAttribs {
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::IVSChat::Room
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-room.html | AWS::IVSChat::Room}
 */
export class IVSChatRoom extends ResourceBase<
  "AWS::IVSChat::Room",
  IVSChatRoomProps,
  IVSChatRoomAttribs
> {
  public static readonly Type = "AWS::IVSChat::Room";
  public static readonly AttributeNames: readonly (keyof IVSChatRoomAttribs)[] =
    ["Id", "Arn"];
  constructor(
    logicalId: string,
    properties: IVSChatRoomProps,
    options?: ResourceOptions,
  ) {
    super(
      IVSChatRoom.Type,
      IVSChatRoom.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
