import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::KinesisVideo::SignalingChannel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisvideo-signalingchannel.html | AWS::KinesisVideo::SignalingChannel}
 */
export interface KinesisVideoSignalingChannelProps {
  Type?: string;
  MessageTtlSeconds?: number;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::KinesisVideo::SignalingChannel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisvideo-signalingchannel.html | AWS::KinesisVideo::SignalingChannel}
 */
export interface KinesisVideoSignalingChannelAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::KinesisVideo::SignalingChannel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisvideo-signalingchannel.html | AWS::KinesisVideo::SignalingChannel}
 */
export class KinesisVideoSignalingChannel extends ResourceBase<
  "AWS::KinesisVideo::SignalingChannel",
  KinesisVideoSignalingChannelProps,
  KinesisVideoSignalingChannelAttribs
> {
  public static readonly Type = "AWS::KinesisVideo::SignalingChannel";
  public static readonly AttributeNames: readonly (keyof KinesisVideoSignalingChannelAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: KinesisVideoSignalingChannelProps,
    options?: ResourceOptions,
  ) {
    super(
      KinesisVideoSignalingChannel.Type,
      KinesisVideoSignalingChannel.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::KinesisVideo::Stream
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisvideo-stream.html | AWS::KinesisVideo::Stream}
 */
export interface KinesisVideoStreamProps {
  KmsKeyId?: string;
  MediaType?: string;
  DataRetentionInHours?: number;
  Tags?: Tag[];
  Name?: string;
  DeviceName?: string;
}
/**
 * Attributes type definition for AWS::KinesisVideo::Stream
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisvideo-stream.html | AWS::KinesisVideo::Stream}
 */
export interface KinesisVideoStreamAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::KinesisVideo::Stream
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisvideo-stream.html | AWS::KinesisVideo::Stream}
 */
export class KinesisVideoStream extends ResourceBase<
  "AWS::KinesisVideo::Stream",
  KinesisVideoStreamProps,
  KinesisVideoStreamAttribs
> {
  public static readonly Type = "AWS::KinesisVideo::Stream";
  public static readonly AttributeNames: readonly (keyof KinesisVideoStreamAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: KinesisVideoStreamProps,
    options?: ResourceOptions,
  ) {
    super(
      KinesisVideoStream.Type,
      KinesisVideoStream.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
