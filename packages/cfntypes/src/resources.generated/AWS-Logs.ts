import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Logs::MetricFilter.Dimension
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-metricfilter-dimension.html | AWS::Logs::MetricFilter.Dimension}
 */
export interface LogsMetricFilterDimension {
  Value: string;
  Key: string;
}
/**
 * Type definition for AWS::Logs::MetricFilter.MetricTransformation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-metricfilter-metrictransformation.html | AWS::Logs::MetricFilter.MetricTransformation}
 */
export interface LogsMetricFilterMetricTransformation {
  DefaultValue?: number;
  MetricName: string;
  MetricValue: string;
  MetricNamespace: string;
  Dimensions?: any[];
  Unit?: string;
}
/**
 * Type definition for AWS::Logs::AccountPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-accountpolicy.html | AWS::Logs::AccountPolicy}
 */
export interface LogsAccountPolicyProps {
  PolicyType: string;
  Scope?: string;
  PolicyName: string;
  PolicyDocument: string;
}
/**
 * Attributes type definition for AWS::Logs::AccountPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-accountpolicy.html | AWS::Logs::AccountPolicy}
 */
export interface LogsAccountPolicyAttribs {
  AccountId?: string;
}
/**
 * Resource class for AWS::Logs::AccountPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-accountpolicy.html | AWS::Logs::AccountPolicy}
 */
export class LogsAccountPolicy extends ResourceBase<
  "AWS::Logs::AccountPolicy",
  LogsAccountPolicyProps,
  LogsAccountPolicyAttribs
> {
  public static readonly Type = "AWS::Logs::AccountPolicy";
  public static readonly AttributeNames: readonly (keyof LogsAccountPolicyAttribs)[] =
    ["AccountId"];
  constructor(
    logicalId: string,
    properties: LogsAccountPolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      LogsAccountPolicy.Type,
      LogsAccountPolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Logs::Destination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-destination.html | AWS::Logs::Destination}
 */
export interface LogsDestinationProps {
  DestinationPolicy?: string;
  DestinationName: string;
  TargetArn: string;
  RoleArn: string;
}
/**
 * Attributes type definition for AWS::Logs::Destination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-destination.html | AWS::Logs::Destination}
 */
export interface LogsDestinationAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::Logs::Destination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-destination.html | AWS::Logs::Destination}
 */
export class LogsDestination extends ResourceBase<
  "AWS::Logs::Destination",
  LogsDestinationProps,
  LogsDestinationAttribs
> {
  public static readonly Type = "AWS::Logs::Destination";
  public static readonly AttributeNames: readonly (keyof LogsDestinationAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: LogsDestinationProps,
    options?: ResourceOptions,
  ) {
    super(
      LogsDestination.Type,
      LogsDestination.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Logs::LogGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html | AWS::Logs::LogGroup}
 */
export interface LogsLogGroupProps {
  RetentionInDays?: number;
  KmsKeyId?: string;
  LogGroupName?: string;
  Tags?: Tag[];
  DataProtectionPolicy?: object;
}
/**
 * Attributes type definition for AWS::Logs::LogGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html | AWS::Logs::LogGroup}
 */
export interface LogsLogGroupAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::Logs::LogGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html | AWS::Logs::LogGroup}
 */
export class LogsLogGroup extends ResourceBase<
  "AWS::Logs::LogGroup",
  LogsLogGroupProps,
  LogsLogGroupAttribs
> {
  public static readonly Type = "AWS::Logs::LogGroup";
  public static readonly AttributeNames: readonly (keyof LogsLogGroupAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: LogsLogGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      LogsLogGroup.Type,
      LogsLogGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Logs::LogStream
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-logstream.html | AWS::Logs::LogStream}
 */
export interface LogsLogStreamProps {
  LogStreamName?: string;
  LogGroupName: string;
}
/**
 * Resource class for AWS::Logs::LogStream
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-logstream.html | AWS::Logs::LogStream}
 */
export class LogsLogStream extends ResourceBase<
  "AWS::Logs::LogStream",
  LogsLogStreamProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Logs::LogStream";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: LogsLogStreamProps,
    options?: ResourceOptions,
  ) {
    super(
      LogsLogStream.Type,
      LogsLogStream.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Logs::MetricFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-metricfilter.html | AWS::Logs::MetricFilter}
 */
export interface LogsMetricFilterProps {
  MetricTransformations: any[];
  FilterPattern: string;
  LogGroupName: string;
  FilterName?: string;
}
/**
 * Resource class for AWS::Logs::MetricFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-metricfilter.html | AWS::Logs::MetricFilter}
 */
export class LogsMetricFilter extends ResourceBase<
  "AWS::Logs::MetricFilter",
  LogsMetricFilterProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Logs::MetricFilter";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: LogsMetricFilterProps,
    options?: ResourceOptions,
  ) {
    super(
      LogsMetricFilter.Type,
      LogsMetricFilter.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Logs::QueryDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-querydefinition.html | AWS::Logs::QueryDefinition}
 */
export interface LogsQueryDefinitionProps {
  QueryString: string;
  LogGroupNames?: any[];
  Name: string;
}
/**
 * Attributes type definition for AWS::Logs::QueryDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-querydefinition.html | AWS::Logs::QueryDefinition}
 */
export interface LogsQueryDefinitionAttribs {
  QueryDefinitionId?: string;
}
/**
 * Resource class for AWS::Logs::QueryDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-querydefinition.html | AWS::Logs::QueryDefinition}
 */
export class LogsQueryDefinition extends ResourceBase<
  "AWS::Logs::QueryDefinition",
  LogsQueryDefinitionProps,
  LogsQueryDefinitionAttribs
> {
  public static readonly Type = "AWS::Logs::QueryDefinition";
  public static readonly AttributeNames: readonly (keyof LogsQueryDefinitionAttribs)[] =
    ["QueryDefinitionId"];
  constructor(
    logicalId: string,
    properties: LogsQueryDefinitionProps,
    options?: ResourceOptions,
  ) {
    super(
      LogsQueryDefinition.Type,
      LogsQueryDefinition.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Logs::ResourcePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-resourcepolicy.html | AWS::Logs::ResourcePolicy}
 */
export interface LogsResourcePolicyProps {
  PolicyName: string;
  PolicyDocument: string;
}
/**
 * Resource class for AWS::Logs::ResourcePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-resourcepolicy.html | AWS::Logs::ResourcePolicy}
 */
export class LogsResourcePolicy extends ResourceBase<
  "AWS::Logs::ResourcePolicy",
  LogsResourcePolicyProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Logs::ResourcePolicy";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: LogsResourcePolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      LogsResourcePolicy.Type,
      LogsResourcePolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Logs::SubscriptionFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-subscriptionfilter.html | AWS::Logs::SubscriptionFilter}
 */
export interface LogsSubscriptionFilterProps {
  FilterPattern: string;
  Distribution?: string;
  LogGroupName: string;
  FilterName?: string;
  DestinationArn: string;
  RoleArn?: string;
}
/**
 * Resource class for AWS::Logs::SubscriptionFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-subscriptionfilter.html | AWS::Logs::SubscriptionFilter}
 */
export class LogsSubscriptionFilter extends ResourceBase<
  "AWS::Logs::SubscriptionFilter",
  LogsSubscriptionFilterProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Logs::SubscriptionFilter";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: LogsSubscriptionFilterProps,
    options?: ResourceOptions,
  ) {
    super(
      LogsSubscriptionFilter.Type,
      LogsSubscriptionFilter.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
