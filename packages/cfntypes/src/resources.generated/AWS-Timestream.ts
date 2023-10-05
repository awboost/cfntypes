import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Timestream::ScheduledQuery.DimensionMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-dimensionmapping.html | AWS::Timestream::ScheduledQuery.DimensionMapping}
 */
export interface TimestreamScheduledQueryDimensionMapping {
  DimensionValueType: string;
  Name: string;
}
/**
 * Type definition for AWS::Timestream::ScheduledQuery.ErrorReportConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-errorreportconfiguration.html | AWS::Timestream::ScheduledQuery.ErrorReportConfiguration}
 */
export interface TimestreamScheduledQueryErrorReportConfiguration {
  S3Configuration: TimestreamScheduledQueryS3Configuration;
}
/**
 * Type definition for AWS::Timestream::ScheduledQuery.MixedMeasureMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-mixedmeasuremapping.html | AWS::Timestream::ScheduledQuery.MixedMeasureMapping}
 */
export interface TimestreamScheduledQueryMixedMeasureMapping {
  MeasureName?: string;
  SourceColumn?: string;
  TargetMeasureName?: string;
  MeasureValueType: string;
  MultiMeasureAttributeMappings?: any[];
}
/**
 * Type definition for AWS::Timestream::ScheduledQuery.MultiMeasureAttributeMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-multimeasureattributemapping.html | AWS::Timestream::ScheduledQuery.MultiMeasureAttributeMapping}
 */
export interface TimestreamScheduledQueryMultiMeasureAttributeMapping {
  SourceColumn: string;
  TargetMultiMeasureAttributeName?: string;
  MeasureValueType: string;
}
/**
 * Type definition for AWS::Timestream::ScheduledQuery.MultiMeasureMappings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-multimeasuremappings.html | AWS::Timestream::ScheduledQuery.MultiMeasureMappings}
 */
export interface TimestreamScheduledQueryMultiMeasureMappings {
  TargetMultiMeasureName?: string;
  MultiMeasureAttributeMappings: any[];
}
/**
 * Type definition for AWS::Timestream::ScheduledQuery.NotificationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-notificationconfiguration.html | AWS::Timestream::ScheduledQuery.NotificationConfiguration}
 */
export interface TimestreamScheduledQueryNotificationConfiguration {
  SnsConfiguration: TimestreamScheduledQuerySnsConfiguration;
}
/**
 * Type definition for AWS::Timestream::ScheduledQuery.S3Configuration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-s3configuration.html | AWS::Timestream::ScheduledQuery.S3Configuration}
 */
export interface TimestreamScheduledQueryS3Configuration {
  BucketName: string;
  ObjectKeyPrefix?: string;
  EncryptionOption?: string;
}
/**
 * Type definition for AWS::Timestream::ScheduledQuery.ScheduleConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-scheduleconfiguration.html | AWS::Timestream::ScheduledQuery.ScheduleConfiguration}
 */
export interface TimestreamScheduledQueryScheduleConfiguration {
  ScheduleExpression: string;
}
/**
 * Type definition for AWS::Timestream::ScheduledQuery.SnsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-snsconfiguration.html | AWS::Timestream::ScheduledQuery.SnsConfiguration}
 */
export interface TimestreamScheduledQuerySnsConfiguration {
  TopicArn: string;
}
/**
 * Type definition for AWS::Timestream::ScheduledQuery.TargetConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-targetconfiguration.html | AWS::Timestream::ScheduledQuery.TargetConfiguration}
 */
export interface TimestreamScheduledQueryTargetConfiguration {
  TimestreamConfiguration: TimestreamScheduledQueryTimestreamConfiguration;
}
/**
 * Type definition for AWS::Timestream::ScheduledQuery.TimestreamConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-timestreamconfiguration.html | AWS::Timestream::ScheduledQuery.TimestreamConfiguration}
 */
export interface TimestreamScheduledQueryTimestreamConfiguration {
  TimeColumn: string;
  TableName: string;
  DimensionMappings: any[];
  MixedMeasureMappings?: any[];
  MeasureNameColumn?: string;
  DatabaseName: string;
  MultiMeasureMappings?: TimestreamScheduledQueryMultiMeasureMappings;
}
/**
 * Type definition for AWS::Timestream::Table.MagneticStoreRejectedDataLocation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-table-magneticstorerejecteddatalocation.html | AWS::Timestream::Table.MagneticStoreRejectedDataLocation}
 */
export interface TimestreamTableMagneticStoreRejectedDataLocation {
  S3Configuration?: TimestreamTableS3Configuration;
}
/**
 * Type definition for AWS::Timestream::Table.MagneticStoreWriteProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-table-magneticstorewriteproperties.html | AWS::Timestream::Table.MagneticStoreWriteProperties}
 */
export interface TimestreamTableMagneticStoreWriteProperties {
  EnableMagneticStoreWrites: boolean;
  MagneticStoreRejectedDataLocation?: TimestreamTableMagneticStoreRejectedDataLocation;
}
/**
 * Type definition for AWS::Timestream::Table.PartitionKey
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-table-partitionkey.html | AWS::Timestream::Table.PartitionKey}
 */
export interface TimestreamTablePartitionKey {
  Type: string;
  EnforcementInRecord?: string;
  Name?: string;
}
/**
 * Type definition for AWS::Timestream::Table.RetentionProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-table-retentionproperties.html | AWS::Timestream::Table.RetentionProperties}
 */
export interface TimestreamTableRetentionProperties {
  MagneticStoreRetentionPeriodInDays?: string;
  MemoryStoreRetentionPeriodInHours?: string;
}
/**
 * Type definition for AWS::Timestream::Table.S3Configuration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-table-s3configuration.html | AWS::Timestream::Table.S3Configuration}
 */
export interface TimestreamTableS3Configuration {
  BucketName: string;
  KmsKeyId?: string;
  ObjectKeyPrefix?: string;
  EncryptionOption: string;
}
/**
 * Type definition for AWS::Timestream::Table.Schema
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-table-schema.html | AWS::Timestream::Table.Schema}
 */
export interface TimestreamTableSchema {
  CompositePartitionKey?: any[];
}
/**
 * Type definition for AWS::Timestream::Database
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-database.html | AWS::Timestream::Database}
 */
export interface TimestreamDatabaseProps {
  KmsKeyId?: string;
  DatabaseName?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::Timestream::Database
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-database.html | AWS::Timestream::Database}
 */
export interface TimestreamDatabaseAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::Timestream::Database
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-database.html | AWS::Timestream::Database}
 */
export class TimestreamDatabase extends ResourceBase<
  "AWS::Timestream::Database",
  TimestreamDatabaseProps,
  TimestreamDatabaseAttribs
> {
  public static readonly Type = "AWS::Timestream::Database";
  public static readonly AttributeNames: readonly (keyof TimestreamDatabaseAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: TimestreamDatabaseProps,
    options?: ResourceOptions,
  ) {
    super(
      TimestreamDatabase.Type,
      TimestreamDatabase.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Timestream::ScheduledQuery
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html | AWS::Timestream::ScheduledQuery}
 */
export interface TimestreamScheduledQueryProps {
  ScheduledQueryExecutionRoleArn: string;
  ErrorReportConfiguration: TimestreamScheduledQueryErrorReportConfiguration;
  ScheduleConfiguration: TimestreamScheduledQueryScheduleConfiguration;
  TargetConfiguration?: TimestreamScheduledQueryTargetConfiguration;
  KmsKeyId?: string;
  QueryString: string;
  NotificationConfiguration: TimestreamScheduledQueryNotificationConfiguration;
  ScheduledQueryName?: string;
  ClientToken?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::Timestream::ScheduledQuery
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html | AWS::Timestream::ScheduledQuery}
 */
export interface TimestreamScheduledQueryAttribs {
  SQScheduleConfiguration?: string;
  SQNotificationConfiguration?: string;
  SQErrorReportConfiguration?: string;
  SQKmsKeyId?: string;
  SQQueryString?: string;
  SQTargetConfiguration?: string;
  SQName?: string;
  Arn?: string;
  SQScheduledQueryExecutionRoleArn?: string;
}
/**
 * Resource class for AWS::Timestream::ScheduledQuery
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html | AWS::Timestream::ScheduledQuery}
 */
export class TimestreamScheduledQuery extends ResourceBase<
  "AWS::Timestream::ScheduledQuery",
  TimestreamScheduledQueryProps,
  TimestreamScheduledQueryAttribs
> {
  public static readonly Type = "AWS::Timestream::ScheduledQuery";
  public static readonly AttributeNames: readonly (keyof TimestreamScheduledQueryAttribs)[] =
    [
      "SQScheduleConfiguration",
      "SQNotificationConfiguration",
      "SQErrorReportConfiguration",
      "SQKmsKeyId",
      "SQQueryString",
      "SQTargetConfiguration",
      "SQName",
      "Arn",
      "SQScheduledQueryExecutionRoleArn",
    ];
  constructor(
    logicalId: string,
    properties: TimestreamScheduledQueryProps,
    options?: ResourceOptions,
  ) {
    super(
      TimestreamScheduledQuery.Type,
      TimestreamScheduledQuery.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Timestream::Table
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html | AWS::Timestream::Table}
 */
export interface TimestreamTableProps {
  TableName?: string;
  RetentionProperties?: TimestreamTableRetentionProperties;
  Schema?: TimestreamTableSchema;
  DatabaseName: string;
  Tags?: Tag[];
  MagneticStoreWriteProperties?: TimestreamTableMagneticStoreWriteProperties;
}
/**
 * Attributes type definition for AWS::Timestream::Table
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html | AWS::Timestream::Table}
 */
export interface TimestreamTableAttribs {
  Arn?: string;
  Name?: string;
}
/**
 * Resource class for AWS::Timestream::Table
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html | AWS::Timestream::Table}
 */
export class TimestreamTable extends ResourceBase<
  "AWS::Timestream::Table",
  TimestreamTableProps,
  TimestreamTableAttribs
> {
  public static readonly Type = "AWS::Timestream::Table";
  public static readonly AttributeNames: readonly (keyof TimestreamTableAttribs)[] =
    ["Arn", "Name"];
  constructor(
    logicalId: string,
    properties: TimestreamTableProps,
    options?: ResourceOptions,
  ) {
    super(
      TimestreamTable.Type,
      TimestreamTable.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
