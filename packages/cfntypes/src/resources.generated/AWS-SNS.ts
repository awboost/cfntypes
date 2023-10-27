import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::SNS::Topic.Subscription
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-topic-subscription.html | AWS::SNS::Topic.Subscription}
 */
export interface SNSTopicSubscription {
  Endpoint: string;
  Protocol: string;
}
/**
 * Type definition for AWS::SNS::Subscription
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-subscription.html | AWS::SNS::Subscription}
 */
export interface SNSSubscriptionProps {
  DeliveryPolicy?: object;
  Endpoint?: string;
  FilterPolicy?: object;
  FilterPolicyScope?: string;
  Protocol: string;
  RawMessageDelivery?: boolean;
  RedrivePolicy?: object;
  Region?: string;
  SubscriptionRoleArn?: string;
  TopicArn: string;
}
/**
 * Resource class for AWS::SNS::Subscription
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-subscription.html | AWS::SNS::Subscription}
 */
export class SNSSubscription extends ResourceBase<
  "AWS::SNS::Subscription",
  SNSSubscriptionProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::SNS::Subscription";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: SNSSubscriptionProps,
    options?: ResourceOptions,
  ) {
    super(
      SNSSubscription.Type,
      SNSSubscription.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SNS::Topic
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topic.html | AWS::SNS::Topic}
 */
export interface SNSTopicProps {
  SignatureVersion?: string;
  KmsMasterKeyId?: string;
  TracingConfig?: string;
  DisplayName?: string;
  FifoTopic?: boolean;
  ContentBasedDeduplication?: boolean;
  Subscription?: any[];
  Tags?: Tag[];
  DataProtectionPolicy?: object;
  ArchivePolicy?: object;
  TopicName?: string;
}
/**
 * Attributes type definition for AWS::SNS::Topic
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topic.html | AWS::SNS::Topic}
 */
export interface SNSTopicAttribs {
  TopicArn?: string;
  TopicName?: string;
}
/**
 * Resource class for AWS::SNS::Topic
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topic.html | AWS::SNS::Topic}
 */
export class SNSTopic extends ResourceBase<
  "AWS::SNS::Topic",
  SNSTopicProps,
  SNSTopicAttribs
> {
  public static readonly Type = "AWS::SNS::Topic";
  public static readonly AttributeNames: readonly (keyof SNSTopicAttribs)[] = [
    "TopicArn",
    "TopicName",
  ];
  constructor(
    logicalId: string,
    properties: SNSTopicProps,
    options?: ResourceOptions,
  ) {
    super(
      SNSTopic.Type,
      SNSTopic.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SNS::TopicInlinePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topicinlinepolicy.html | AWS::SNS::TopicInlinePolicy}
 */
export interface SNSTopicInlinePolicyProps {
  TopicArn: string;
  PolicyDocument: object;
}
/**
 * Resource class for AWS::SNS::TopicInlinePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topicinlinepolicy.html | AWS::SNS::TopicInlinePolicy}
 */
export class SNSTopicInlinePolicy extends ResourceBase<
  "AWS::SNS::TopicInlinePolicy",
  SNSTopicInlinePolicyProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::SNS::TopicInlinePolicy";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: SNSTopicInlinePolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      SNSTopicInlinePolicy.Type,
      SNSTopicInlinePolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SNS::TopicPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topicpolicy.html | AWS::SNS::TopicPolicy}
 */
export interface SNSTopicPolicyProps {
  Topics: any[];
  PolicyDocument: object;
}
/**
 * Attributes type definition for AWS::SNS::TopicPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topicpolicy.html | AWS::SNS::TopicPolicy}
 */
export interface SNSTopicPolicyAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::SNS::TopicPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topicpolicy.html | AWS::SNS::TopicPolicy}
 */
export class SNSTopicPolicy extends ResourceBase<
  "AWS::SNS::TopicPolicy",
  SNSTopicPolicyProps,
  SNSTopicPolicyAttribs
> {
  public static readonly Type = "AWS::SNS::TopicPolicy";
  public static readonly AttributeNames: readonly (keyof SNSTopicPolicyAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: SNSTopicPolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      SNSTopicPolicy.Type,
      SNSTopicPolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
