import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::CloudTrail::Channel.Destination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-channel-destination.html | AWS::CloudTrail::Channel.Destination}
 */
export interface CloudTrailChannelDestination {
  Type: string;
  Location: string;
}
/**
 * Type definition for AWS::CloudTrail::EventDataStore.AdvancedEventSelector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-eventdatastore-advancedeventselector.html | AWS::CloudTrail::EventDataStore.AdvancedEventSelector}
 */
export interface CloudTrailEventDataStoreAdvancedEventSelector {
  FieldSelectors: any[];
  Name?: string;
}
/**
 * Type definition for AWS::CloudTrail::EventDataStore.AdvancedFieldSelector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-eventdatastore-advancedfieldselector.html | AWS::CloudTrail::EventDataStore.AdvancedFieldSelector}
 */
export interface CloudTrailEventDataStoreAdvancedFieldSelector {
  Field: string;
  Equals?: any[];
  NotStartsWith?: any[];
  NotEndsWith?: any[];
  StartsWith?: any[];
  EndsWith?: any[];
  NotEquals?: any[];
}
/**
 * Type definition for AWS::CloudTrail::Trail.AdvancedEventSelector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-advancedeventselector.html | AWS::CloudTrail::Trail.AdvancedEventSelector}
 */
export interface CloudTrailTrailAdvancedEventSelector {
  FieldSelectors: any[];
  Name?: string;
}
/**
 * Type definition for AWS::CloudTrail::Trail.AdvancedFieldSelector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-advancedfieldselector.html | AWS::CloudTrail::Trail.AdvancedFieldSelector}
 */
export interface CloudTrailTrailAdvancedFieldSelector {
  Field: string;
  Equals?: any[];
  NotStartsWith?: any[];
  NotEndsWith?: any[];
  StartsWith?: any[];
  EndsWith?: any[];
  NotEquals?: any[];
}
/**
 * Type definition for AWS::CloudTrail::Trail.DataResource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-dataresource.html | AWS::CloudTrail::Trail.DataResource}
 */
export interface CloudTrailTrailDataResource {
  Type: string;
  Values?: any[];
}
/**
 * Type definition for AWS::CloudTrail::Trail.EventSelector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-eventselector.html | AWS::CloudTrail::Trail.EventSelector}
 */
export interface CloudTrailTrailEventSelector {
  IncludeManagementEvents?: boolean;
  ReadWriteType?: string;
  ExcludeManagementEventSources?: any[];
  DataResources?: any[];
}
/**
 * Type definition for AWS::CloudTrail::Trail.InsightSelector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-insightselector.html | AWS::CloudTrail::Trail.InsightSelector}
 */
export interface CloudTrailTrailInsightSelector {
  InsightType?: string;
}
/**
 * Type definition for AWS::CloudTrail::Channel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-channel.html | AWS::CloudTrail::Channel}
 */
export interface CloudTrailChannelProps {
  Destinations?: any[];
  Source?: string;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::CloudTrail::Channel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-channel.html | AWS::CloudTrail::Channel}
 */
export interface CloudTrailChannelAttribs {
  ChannelArn?: string;
}
/**
 * Resource class for AWS::CloudTrail::Channel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-channel.html | AWS::CloudTrail::Channel}
 */
export class CloudTrailChannel extends ResourceBase<
  "AWS::CloudTrail::Channel",
  CloudTrailChannelProps,
  CloudTrailChannelAttribs
> {
  public static readonly Type = "AWS::CloudTrail::Channel";
  public static readonly AttributeNames: readonly (keyof CloudTrailChannelAttribs)[] =
    ["ChannelArn"];
  constructor(
    logicalId: string,
    properties: CloudTrailChannelProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudTrailChannel.Type,
      CloudTrailChannel.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CloudTrail::EventDataStore
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html | AWS::CloudTrail::EventDataStore}
 */
export interface CloudTrailEventDataStoreProps {
  OrganizationEnabled?: boolean;
  KmsKeyId?: string;
  AdvancedEventSelectors?: any[];
  TerminationProtectionEnabled?: boolean;
  MultiRegionEnabled?: boolean;
  RetentionPeriod?: number;
  IngestionEnabled?: boolean;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::CloudTrail::EventDataStore
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html | AWS::CloudTrail::EventDataStore}
 */
export interface CloudTrailEventDataStoreAttribs {
  Status?: string;
  UpdatedTimestamp?: string;
  EventDataStoreArn?: string;
  CreatedTimestamp?: string;
}
/**
 * Resource class for AWS::CloudTrail::EventDataStore
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html | AWS::CloudTrail::EventDataStore}
 */
export class CloudTrailEventDataStore extends ResourceBase<
  "AWS::CloudTrail::EventDataStore",
  CloudTrailEventDataStoreProps,
  CloudTrailEventDataStoreAttribs
> {
  public static readonly Type = "AWS::CloudTrail::EventDataStore";
  public static readonly AttributeNames: readonly (keyof CloudTrailEventDataStoreAttribs)[] =
    ["Status", "UpdatedTimestamp", "EventDataStoreArn", "CreatedTimestamp"];
  constructor(
    logicalId: string,
    properties: CloudTrailEventDataStoreProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudTrailEventDataStore.Type,
      CloudTrailEventDataStore.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CloudTrail::ResourcePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-resourcepolicy.html | AWS::CloudTrail::ResourcePolicy}
 */
export interface CloudTrailResourcePolicyProps {
  ResourceArn: string;
  ResourcePolicy: object;
}
/**
 * Resource class for AWS::CloudTrail::ResourcePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-resourcepolicy.html | AWS::CloudTrail::ResourcePolicy}
 */
export class CloudTrailResourcePolicy extends ResourceBase<
  "AWS::CloudTrail::ResourcePolicy",
  CloudTrailResourcePolicyProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::CloudTrail::ResourcePolicy";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: CloudTrailResourcePolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudTrailResourcePolicy.Type,
      CloudTrailResourcePolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CloudTrail::Trail
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html | AWS::CloudTrail::Trail}
 */
export interface CloudTrailTrailProps {
  IncludeGlobalServiceEvents?: boolean;
  EventSelectors?: any[];
  KMSKeyId?: string;
  CloudWatchLogsRoleArn?: string;
  S3KeyPrefix?: string;
  AdvancedEventSelectors?: any[];
  TrailName?: string;
  IsOrganizationTrail?: boolean;
  InsightSelectors?: any[];
  CloudWatchLogsLogGroupArn?: string;
  SnsTopicName?: string;
  IsMultiRegionTrail?: boolean;
  S3BucketName: string;
  EnableLogFileValidation?: boolean;
  Tags?: Tag[];
  IsLogging: boolean;
}
/**
 * Attributes type definition for AWS::CloudTrail::Trail
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html | AWS::CloudTrail::Trail}
 */
export interface CloudTrailTrailAttribs {
  SnsTopicArn?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::CloudTrail::Trail
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html | AWS::CloudTrail::Trail}
 */
export class CloudTrailTrail extends ResourceBase<
  "AWS::CloudTrail::Trail",
  CloudTrailTrailProps,
  CloudTrailTrailAttribs
> {
  public static readonly Type = "AWS::CloudTrail::Trail";
  public static readonly AttributeNames: readonly (keyof CloudTrailTrailAttribs)[] =
    ["SnsTopicArn", "Arn"];
  constructor(
    logicalId: string,
    properties: CloudTrailTrailProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudTrailTrail.Type,
      CloudTrailTrail.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
