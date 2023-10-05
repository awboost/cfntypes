import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::SQS::Queue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sqs-queue.html | AWS::SQS::Queue}
 */
export interface SQSQueueProps {
  ReceiveMessageWaitTimeSeconds?: number;
  FifoThroughputLimit?: string;
  KmsMasterKeyId?: string;
  FifoQueue?: boolean;
  MaximumMessageSize?: number;
  VisibilityTimeout?: number;
  KmsDataKeyReusePeriodSeconds?: number;
  RedriveAllowPolicy?: object;
  SqsManagedSseEnabled?: boolean;
  DelaySeconds?: number;
  RedrivePolicy?: object;
  MessageRetentionPeriod?: number;
  DeduplicationScope?: string;
  ContentBasedDeduplication?: boolean;
  QueueName?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::SQS::Queue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sqs-queue.html | AWS::SQS::Queue}
 */
export interface SQSQueueAttribs {
  Arn?: string;
  QueueName?: string;
  QueueUrl?: string;
}
/**
 * Resource class for AWS::SQS::Queue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sqs-queue.html | AWS::SQS::Queue}
 */
export class SQSQueue extends ResourceBase<
  "AWS::SQS::Queue",
  SQSQueueProps,
  SQSQueueAttribs
> {
  public static readonly Type = "AWS::SQS::Queue";
  public static readonly AttributeNames: readonly (keyof SQSQueueAttribs)[] = [
    "Arn",
    "QueueName",
    "QueueUrl",
  ];
  constructor(
    logicalId: string,
    properties: SQSQueueProps,
    options?: ResourceOptions,
  ) {
    super(
      SQSQueue.Type,
      SQSQueue.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SQS::QueueInlinePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sqs-queueinlinepolicy.html | AWS::SQS::QueueInlinePolicy}
 */
export interface SQSQueueInlinePolicyProps {
  PolicyDocument: object;
  Queue: string;
}
/**
 * Resource class for AWS::SQS::QueueInlinePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sqs-queueinlinepolicy.html | AWS::SQS::QueueInlinePolicy}
 */
export class SQSQueueInlinePolicy extends ResourceBase<
  "AWS::SQS::QueueInlinePolicy",
  SQSQueueInlinePolicyProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::SQS::QueueInlinePolicy";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: SQSQueueInlinePolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      SQSQueueInlinePolicy.Type,
      SQSQueueInlinePolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SQS::QueuePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sqs-queuepolicy.html | AWS::SQS::QueuePolicy}
 */
export interface SQSQueuePolicyProps {
  PolicyDocument: object;
  Queues: any[];
}
/**
 * Attributes type definition for AWS::SQS::QueuePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sqs-queuepolicy.html | AWS::SQS::QueuePolicy}
 */
export interface SQSQueuePolicyAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::SQS::QueuePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sqs-queuepolicy.html | AWS::SQS::QueuePolicy}
 */
export class SQSQueuePolicy extends ResourceBase<
  "AWS::SQS::QueuePolicy",
  SQSQueuePolicyProps,
  SQSQueuePolicyAttribs
> {
  public static readonly Type = "AWS::SQS::QueuePolicy";
  public static readonly AttributeNames: readonly (keyof SQSQueuePolicyAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: SQSQueuePolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      SQSQueuePolicy.Type,
      SQSQueuePolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
