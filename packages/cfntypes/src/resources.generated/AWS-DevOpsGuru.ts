import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::DevOpsGuru::NotificationChannel.NotificationChannelConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsguru-notificationchannel-notificationchannelconfig.html | AWS::DevOpsGuru::NotificationChannel.NotificationChannelConfig}
 */
export interface DevOpsGuruNotificationChannelNotificationChannelConfig {
  Filters?: DevOpsGuruNotificationChannelNotificationFilterConfig;
  Sns?: DevOpsGuruNotificationChannelSnsChannelConfig;
}
/**
 * Type definition for AWS::DevOpsGuru::NotificationChannel.NotificationFilterConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsguru-notificationchannel-notificationfilterconfig.html | AWS::DevOpsGuru::NotificationChannel.NotificationFilterConfig}
 */
export interface DevOpsGuruNotificationChannelNotificationFilterConfig {
  MessageTypes?: any[];
  Severities?: any[];
}
/**
 * Type definition for AWS::DevOpsGuru::NotificationChannel.SnsChannelConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsguru-notificationchannel-snschannelconfig.html | AWS::DevOpsGuru::NotificationChannel.SnsChannelConfig}
 */
export interface DevOpsGuruNotificationChannelSnsChannelConfig {
  TopicArn?: string;
}
/**
 * Type definition for AWS::DevOpsGuru::ResourceCollection.CloudFormationCollectionFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsguru-resourcecollection-cloudformationcollectionfilter.html | AWS::DevOpsGuru::ResourceCollection.CloudFormationCollectionFilter}
 */
export interface DevOpsGuruResourceCollectionCloudFormationCollectionFilter {
  StackNames?: any[];
}
/**
 * Type definition for AWS::DevOpsGuru::ResourceCollection.ResourceCollectionFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsguru-resourcecollection-resourcecollectionfilter.html | AWS::DevOpsGuru::ResourceCollection.ResourceCollectionFilter}
 */
export interface DevOpsGuruResourceCollectionResourceCollectionFilter {
  CloudFormation?: DevOpsGuruResourceCollectionCloudFormationCollectionFilter;
  Tags?: Tag[];
}
/**
 * Type definition for AWS::DevOpsGuru::ResourceCollection.TagCollection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsguru-resourcecollection-tagcollection.html | AWS::DevOpsGuru::ResourceCollection.TagCollection}
 */
export interface DevOpsGuruResourceCollectionTagCollection {
  AppBoundaryKey?: string;
  TagValues?: any[];
}
/**
 * Type definition for AWS::DevOpsGuru::LogAnomalyDetectionIntegration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsguru-loganomalydetectionintegration.html | AWS::DevOpsGuru::LogAnomalyDetectionIntegration}
 */
export interface DevOpsGuruLogAnomalyDetectionIntegrationProps {}
/**
 * Attributes type definition for AWS::DevOpsGuru::LogAnomalyDetectionIntegration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsguru-loganomalydetectionintegration.html | AWS::DevOpsGuru::LogAnomalyDetectionIntegration}
 */
export interface DevOpsGuruLogAnomalyDetectionIntegrationAttribs {
  AccountId?: string;
}
/**
 * Resource class for AWS::DevOpsGuru::LogAnomalyDetectionIntegration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsguru-loganomalydetectionintegration.html | AWS::DevOpsGuru::LogAnomalyDetectionIntegration}
 */
export class DevOpsGuruLogAnomalyDetectionIntegration extends ResourceBase<
  "AWS::DevOpsGuru::LogAnomalyDetectionIntegration",
  DevOpsGuruLogAnomalyDetectionIntegrationProps,
  DevOpsGuruLogAnomalyDetectionIntegrationAttribs
> {
  public static readonly Type =
    "AWS::DevOpsGuru::LogAnomalyDetectionIntegration";
  public static readonly AttributeNames: readonly (keyof DevOpsGuruLogAnomalyDetectionIntegrationAttribs)[] =
    ["AccountId"];
  constructor(
    logicalId: string,
    properties: DevOpsGuruLogAnomalyDetectionIntegrationProps,
    options?: ResourceOptions,
  ) {
    super(
      DevOpsGuruLogAnomalyDetectionIntegration.Type,
      DevOpsGuruLogAnomalyDetectionIntegration.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::DevOpsGuru::NotificationChannel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsguru-notificationchannel.html | AWS::DevOpsGuru::NotificationChannel}
 */
export interface DevOpsGuruNotificationChannelProps {
  Config: DevOpsGuruNotificationChannelNotificationChannelConfig;
}
/**
 * Attributes type definition for AWS::DevOpsGuru::NotificationChannel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsguru-notificationchannel.html | AWS::DevOpsGuru::NotificationChannel}
 */
export interface DevOpsGuruNotificationChannelAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::DevOpsGuru::NotificationChannel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsguru-notificationchannel.html | AWS::DevOpsGuru::NotificationChannel}
 */
export class DevOpsGuruNotificationChannel extends ResourceBase<
  "AWS::DevOpsGuru::NotificationChannel",
  DevOpsGuruNotificationChannelProps,
  DevOpsGuruNotificationChannelAttribs
> {
  public static readonly Type = "AWS::DevOpsGuru::NotificationChannel";
  public static readonly AttributeNames: readonly (keyof DevOpsGuruNotificationChannelAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: DevOpsGuruNotificationChannelProps,
    options?: ResourceOptions,
  ) {
    super(
      DevOpsGuruNotificationChannel.Type,
      DevOpsGuruNotificationChannel.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::DevOpsGuru::ResourceCollection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsguru-resourcecollection.html | AWS::DevOpsGuru::ResourceCollection}
 */
export interface DevOpsGuruResourceCollectionProps {
  ResourceCollectionFilter: DevOpsGuruResourceCollectionResourceCollectionFilter;
}
/**
 * Attributes type definition for AWS::DevOpsGuru::ResourceCollection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsguru-resourcecollection.html | AWS::DevOpsGuru::ResourceCollection}
 */
export interface DevOpsGuruResourceCollectionAttribs {
  ResourceCollectionType?: string;
}
/**
 * Resource class for AWS::DevOpsGuru::ResourceCollection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsguru-resourcecollection.html | AWS::DevOpsGuru::ResourceCollection}
 */
export class DevOpsGuruResourceCollection extends ResourceBase<
  "AWS::DevOpsGuru::ResourceCollection",
  DevOpsGuruResourceCollectionProps,
  DevOpsGuruResourceCollectionAttribs
> {
  public static readonly Type = "AWS::DevOpsGuru::ResourceCollection";
  public static readonly AttributeNames: readonly (keyof DevOpsGuruResourceCollectionAttribs)[] =
    ["ResourceCollectionType"];
  constructor(
    logicalId: string,
    properties: DevOpsGuruResourceCollectionProps,
    options?: ResourceOptions,
  ) {
    super(
      DevOpsGuruResourceCollection.Type,
      DevOpsGuruResourceCollection.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
