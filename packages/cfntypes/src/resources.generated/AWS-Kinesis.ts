import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Kinesis::Stream.StreamEncryption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesis-stream-streamencryption.html | AWS::Kinesis::Stream.StreamEncryption}
 */
export interface KinesisStreamStreamEncryption {
  EncryptionType: string;
  KeyId: string;
}
/**
 * Type definition for AWS::Kinesis::Stream.StreamModeDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesis-stream-streammodedetails.html | AWS::Kinesis::Stream.StreamModeDetails}
 */
export interface KinesisStreamStreamModeDetails {
  StreamMode: string;
}
/**
 * Type definition for AWS::Kinesis::Stream
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-stream.html | AWS::Kinesis::Stream}
 */
export interface KinesisStreamProps {
  StreamModeDetails?: KinesisStreamStreamModeDetails;
  StreamEncryption?: KinesisStreamStreamEncryption;
  RetentionPeriodHours?: number;
  Tags?: Tag[];
  Name?: string;
  ShardCount?: number;
}
/**
 * Attributes type definition for AWS::Kinesis::Stream
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-stream.html | AWS::Kinesis::Stream}
 */
export interface KinesisStreamAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::Kinesis::Stream
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-stream.html | AWS::Kinesis::Stream}
 */
export class KinesisStream extends ResourceBase<
  "AWS::Kinesis::Stream",
  KinesisStreamProps,
  KinesisStreamAttribs
> {
  public static readonly Type = "AWS::Kinesis::Stream";
  public static readonly AttributeNames: readonly (keyof KinesisStreamAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: KinesisStreamProps,
    options?: ResourceOptions,
  ) {
    super(
      KinesisStream.Type,
      KinesisStream.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Kinesis::StreamConsumer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-streamconsumer.html | AWS::Kinesis::StreamConsumer}
 */
export interface KinesisStreamConsumerProps {
  ConsumerName: string;
  StreamARN: string;
}
/**
 * Attributes type definition for AWS::Kinesis::StreamConsumer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-streamconsumer.html | AWS::Kinesis::StreamConsumer}
 */
export interface KinesisStreamConsumerAttribs {
  ConsumerCreationTimestamp?: string;
  ConsumerName?: string;
  ConsumerARN?: string;
  ConsumerStatus?: string;
  StreamARN?: string;
}
/**
 * Resource class for AWS::Kinesis::StreamConsumer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-streamconsumer.html | AWS::Kinesis::StreamConsumer}
 */
export class KinesisStreamConsumer extends ResourceBase<
  "AWS::Kinesis::StreamConsumer",
  KinesisStreamConsumerProps,
  KinesisStreamConsumerAttribs
> {
  public static readonly Type = "AWS::Kinesis::StreamConsumer";
  public static readonly AttributeNames: readonly (keyof KinesisStreamConsumerAttribs)[] =
    [
      "ConsumerCreationTimestamp",
      "ConsumerName",
      "ConsumerARN",
      "ConsumerStatus",
      "StreamARN",
    ];
  constructor(
    logicalId: string,
    properties: KinesisStreamConsumerProps,
    options?: ResourceOptions,
  ) {
    super(
      KinesisStreamConsumer.Type,
      KinesisStreamConsumer.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
