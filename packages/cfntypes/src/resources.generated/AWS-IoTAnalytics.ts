import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::IoTAnalytics::Channel.ChannelStorage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-channel-channelstorage.html | AWS::IoTAnalytics::Channel.ChannelStorage}
 */
export interface IoTAnalyticsChannelChannelStorage {
  CustomerManagedS3?: IoTAnalyticsChannelCustomerManagedS3;
  ServiceManagedS3?: object;
}
/**
 * Type definition for AWS::IoTAnalytics::Channel.CustomerManagedS3
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-channel-customermanageds3.html | AWS::IoTAnalytics::Channel.CustomerManagedS3}
 */
export interface IoTAnalyticsChannelCustomerManagedS3 {
  Bucket: string;
  RoleArn: string;
  KeyPrefix?: string;
}
/**
 * Type definition for AWS::IoTAnalytics::Channel.RetentionPeriod
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-channel-retentionperiod.html | AWS::IoTAnalytics::Channel.RetentionPeriod}
 */
export interface IoTAnalyticsChannelRetentionPeriod {
  NumberOfDays?: number;
  Unlimited?: boolean;
}
/**
 * Type definition for AWS::IoTAnalytics::Dataset.Action
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-action.html | AWS::IoTAnalytics::Dataset.Action}
 */
export interface IoTAnalyticsDatasetAction {
  ActionName: string;
  ContainerAction?: IoTAnalyticsDatasetContainerAction;
  QueryAction?: IoTAnalyticsDatasetQueryAction;
}
/**
 * Type definition for AWS::IoTAnalytics::Dataset.ContainerAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-containeraction.html | AWS::IoTAnalytics::Dataset.ContainerAction}
 */
export interface IoTAnalyticsDatasetContainerAction {
  Variables?: any[];
  ExecutionRoleArn: string;
  Image: string;
  ResourceConfiguration: IoTAnalyticsDatasetResourceConfiguration;
}
/**
 * Type definition for AWS::IoTAnalytics::Dataset.DatasetContentDeliveryRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-datasetcontentdeliveryrule.html | AWS::IoTAnalytics::Dataset.DatasetContentDeliveryRule}
 */
export interface IoTAnalyticsDatasetDatasetContentDeliveryRule {
  Destination: IoTAnalyticsDatasetDatasetContentDeliveryRuleDestination;
  EntryName?: string;
}
/**
 * Type definition for AWS::IoTAnalytics::Dataset.DatasetContentDeliveryRuleDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-datasetcontentdeliveryruledestination.html | AWS::IoTAnalytics::Dataset.DatasetContentDeliveryRuleDestination}
 */
export interface IoTAnalyticsDatasetDatasetContentDeliveryRuleDestination {
  IotEventsDestinationConfiguration?: IoTAnalyticsDatasetIotEventsDestinationConfiguration;
  S3DestinationConfiguration?: IoTAnalyticsDatasetS3DestinationConfiguration;
}
/**
 * Type definition for AWS::IoTAnalytics::Dataset.DatasetContentVersionValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-datasetcontentversionvalue.html | AWS::IoTAnalytics::Dataset.DatasetContentVersionValue}
 */
export interface IoTAnalyticsDatasetDatasetContentVersionValue {
  DatasetName: string;
}
/**
 * Type definition for AWS::IoTAnalytics::Dataset.DeltaTime
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-deltatime.html | AWS::IoTAnalytics::Dataset.DeltaTime}
 */
export interface IoTAnalyticsDatasetDeltaTime {
  TimeExpression: string;
  OffsetSeconds: number;
}
/**
 * Type definition for AWS::IoTAnalytics::Dataset.DeltaTimeSessionWindowConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-deltatimesessionwindowconfiguration.html | AWS::IoTAnalytics::Dataset.DeltaTimeSessionWindowConfiguration}
 */
export interface IoTAnalyticsDatasetDeltaTimeSessionWindowConfiguration {
  TimeoutInMinutes: number;
}
/**
 * Type definition for AWS::IoTAnalytics::Dataset.Filter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-filter.html | AWS::IoTAnalytics::Dataset.Filter}
 */
export interface IoTAnalyticsDatasetFilter {
  DeltaTime?: IoTAnalyticsDatasetDeltaTime;
}
/**
 * Type definition for AWS::IoTAnalytics::Dataset.GlueConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-glueconfiguration.html | AWS::IoTAnalytics::Dataset.GlueConfiguration}
 */
export interface IoTAnalyticsDatasetGlueConfiguration {
  TableName: string;
  DatabaseName: string;
}
/**
 * Type definition for AWS::IoTAnalytics::Dataset.IotEventsDestinationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-ioteventsdestinationconfiguration.html | AWS::IoTAnalytics::Dataset.IotEventsDestinationConfiguration}
 */
export interface IoTAnalyticsDatasetIotEventsDestinationConfiguration {
  InputName: string;
  RoleArn: string;
}
/**
 * Type definition for AWS::IoTAnalytics::Dataset.LateDataRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-latedatarule.html | AWS::IoTAnalytics::Dataset.LateDataRule}
 */
export interface IoTAnalyticsDatasetLateDataRule {
  RuleConfiguration: IoTAnalyticsDatasetLateDataRuleConfiguration;
  RuleName?: string;
}
/**
 * Type definition for AWS::IoTAnalytics::Dataset.LateDataRuleConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-latedataruleconfiguration.html | AWS::IoTAnalytics::Dataset.LateDataRuleConfiguration}
 */
export interface IoTAnalyticsDatasetLateDataRuleConfiguration {
  DeltaTimeSessionWindowConfiguration?: IoTAnalyticsDatasetDeltaTimeSessionWindowConfiguration;
}
/**
 * Type definition for AWS::IoTAnalytics::Dataset.OutputFileUriValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-outputfileurivalue.html | AWS::IoTAnalytics::Dataset.OutputFileUriValue}
 */
export interface IoTAnalyticsDatasetOutputFileUriValue {
  FileName: string;
}
/**
 * Type definition for AWS::IoTAnalytics::Dataset.QueryAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-queryaction.html | AWS::IoTAnalytics::Dataset.QueryAction}
 */
export interface IoTAnalyticsDatasetQueryAction {
  Filters?: any[];
  SqlQuery: string;
}
/**
 * Type definition for AWS::IoTAnalytics::Dataset.ResourceConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-resourceconfiguration.html | AWS::IoTAnalytics::Dataset.ResourceConfiguration}
 */
export interface IoTAnalyticsDatasetResourceConfiguration {
  VolumeSizeInGB: number;
  ComputeType: string;
}
/**
 * Type definition for AWS::IoTAnalytics::Dataset.RetentionPeriod
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-retentionperiod.html | AWS::IoTAnalytics::Dataset.RetentionPeriod}
 */
export interface IoTAnalyticsDatasetRetentionPeriod {
  NumberOfDays?: number;
  Unlimited?: boolean;
}
/**
 * Type definition for AWS::IoTAnalytics::Dataset.S3DestinationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-s3destinationconfiguration.html | AWS::IoTAnalytics::Dataset.S3DestinationConfiguration}
 */
export interface IoTAnalyticsDatasetS3DestinationConfiguration {
  GlueConfiguration?: IoTAnalyticsDatasetGlueConfiguration;
  Bucket: string;
  Key: string;
  RoleArn: string;
}
/**
 * Type definition for AWS::IoTAnalytics::Dataset.Schedule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-schedule.html | AWS::IoTAnalytics::Dataset.Schedule}
 */
export interface IoTAnalyticsDatasetSchedule {
  ScheduleExpression: string;
}
/**
 * Type definition for AWS::IoTAnalytics::Dataset.Trigger
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-trigger.html | AWS::IoTAnalytics::Dataset.Trigger}
 */
export interface IoTAnalyticsDatasetTrigger {
  Schedule?: IoTAnalyticsDatasetSchedule;
  TriggeringDataset?: IoTAnalyticsDatasetTriggeringDataset;
}
/**
 * Type definition for AWS::IoTAnalytics::Dataset.TriggeringDataset
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-triggeringdataset.html | AWS::IoTAnalytics::Dataset.TriggeringDataset}
 */
export interface IoTAnalyticsDatasetTriggeringDataset {
  DatasetName: string;
}
/**
 * Type definition for AWS::IoTAnalytics::Dataset.Variable
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-variable.html | AWS::IoTAnalytics::Dataset.Variable}
 */
export interface IoTAnalyticsDatasetVariable {
  DatasetContentVersionValue?: IoTAnalyticsDatasetDatasetContentVersionValue;
  DoubleValue?: number;
  OutputFileUriValue?: IoTAnalyticsDatasetOutputFileUriValue;
  VariableName: string;
  StringValue?: string;
}
/**
 * Type definition for AWS::IoTAnalytics::Dataset.VersioningConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-versioningconfiguration.html | AWS::IoTAnalytics::Dataset.VersioningConfiguration}
 */
export interface IoTAnalyticsDatasetVersioningConfiguration {
  MaxVersions?: number;
  Unlimited?: boolean;
}
/**
 * Type definition for AWS::IoTAnalytics::Datastore.Column
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-column.html | AWS::IoTAnalytics::Datastore.Column}
 */
export interface IoTAnalyticsDatastoreColumn {
  Type: string;
  Name: string;
}
/**
 * Type definition for AWS::IoTAnalytics::Datastore.CustomerManagedS3
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-customermanageds3.html | AWS::IoTAnalytics::Datastore.CustomerManagedS3}
 */
export interface IoTAnalyticsDatastoreCustomerManagedS3 {
  Bucket: string;
  RoleArn: string;
  KeyPrefix?: string;
}
/**
 * Type definition for AWS::IoTAnalytics::Datastore.CustomerManagedS3Storage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-customermanageds3storage.html | AWS::IoTAnalytics::Datastore.CustomerManagedS3Storage}
 */
export interface IoTAnalyticsDatastoreCustomerManagedS3Storage {
  Bucket: string;
  KeyPrefix?: string;
}
/**
 * Type definition for AWS::IoTAnalytics::Datastore.DatastorePartition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-datastorepartition.html | AWS::IoTAnalytics::Datastore.DatastorePartition}
 */
export interface IoTAnalyticsDatastoreDatastorePartition {
  Partition?: IoTAnalyticsDatastorePartition;
  TimestampPartition?: IoTAnalyticsDatastoreTimestampPartition;
}
/**
 * Type definition for AWS::IoTAnalytics::Datastore.DatastorePartitions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-datastorepartitions.html | AWS::IoTAnalytics::Datastore.DatastorePartitions}
 */
export interface IoTAnalyticsDatastoreDatastorePartitions {
  Partitions?: any[];
}
/**
 * Type definition for AWS::IoTAnalytics::Datastore.DatastoreStorage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-datastorestorage.html | AWS::IoTAnalytics::Datastore.DatastoreStorage}
 */
export interface IoTAnalyticsDatastoreDatastoreStorage {
  CustomerManagedS3?: IoTAnalyticsDatastoreCustomerManagedS3;
  ServiceManagedS3?: object;
  IotSiteWiseMultiLayerStorage?: IoTAnalyticsDatastoreIotSiteWiseMultiLayerStorage;
}
/**
 * Type definition for AWS::IoTAnalytics::Datastore.FileFormatConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-fileformatconfiguration.html | AWS::IoTAnalytics::Datastore.FileFormatConfiguration}
 */
export interface IoTAnalyticsDatastoreFileFormatConfiguration {
  ParquetConfiguration?: IoTAnalyticsDatastoreParquetConfiguration;
  JsonConfiguration?: object;
}
/**
 * Type definition for AWS::IoTAnalytics::Datastore.IotSiteWiseMultiLayerStorage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-iotsitewisemultilayerstorage.html | AWS::IoTAnalytics::Datastore.IotSiteWiseMultiLayerStorage}
 */
export interface IoTAnalyticsDatastoreIotSiteWiseMultiLayerStorage {
  CustomerManagedS3Storage?: IoTAnalyticsDatastoreCustomerManagedS3Storage;
}
/**
 * Type definition for AWS::IoTAnalytics::Datastore.ParquetConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-parquetconfiguration.html | AWS::IoTAnalytics::Datastore.ParquetConfiguration}
 */
export interface IoTAnalyticsDatastoreParquetConfiguration {
  SchemaDefinition?: IoTAnalyticsDatastoreSchemaDefinition;
}
/**
 * Type definition for AWS::IoTAnalytics::Datastore.Partition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-partition.html | AWS::IoTAnalytics::Datastore.Partition}
 */
export interface IoTAnalyticsDatastorePartition {
  AttributeName: string;
}
/**
 * Type definition for AWS::IoTAnalytics::Datastore.RetentionPeriod
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-retentionperiod.html | AWS::IoTAnalytics::Datastore.RetentionPeriod}
 */
export interface IoTAnalyticsDatastoreRetentionPeriod {
  NumberOfDays?: number;
  Unlimited?: boolean;
}
/**
 * Type definition for AWS::IoTAnalytics::Datastore.SchemaDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-schemadefinition.html | AWS::IoTAnalytics::Datastore.SchemaDefinition}
 */
export interface IoTAnalyticsDatastoreSchemaDefinition {
  Columns?: any[];
}
/**
 * Type definition for AWS::IoTAnalytics::Datastore.TimestampPartition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-timestamppartition.html | AWS::IoTAnalytics::Datastore.TimestampPartition}
 */
export interface IoTAnalyticsDatastoreTimestampPartition {
  AttributeName: string;
  TimestampFormat?: string;
}
/**
 * Type definition for AWS::IoTAnalytics::Pipeline.Activity
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-pipeline-activity.html | AWS::IoTAnalytics::Pipeline.Activity}
 */
export interface IoTAnalyticsPipelineActivity {
  SelectAttributes?: IoTAnalyticsPipelineSelectAttributes;
  Datastore?: IoTAnalyticsPipelineDatastore;
  Filter?: IoTAnalyticsPipelineFilter;
  AddAttributes?: IoTAnalyticsPipelineAddAttributes;
  Channel?: IoTAnalyticsPipelineChannel;
  DeviceShadowEnrich?: IoTAnalyticsPipelineDeviceShadowEnrich;
  Math?: IoTAnalyticsPipelineMath;
  Lambda?: IoTAnalyticsPipelineLambda;
  DeviceRegistryEnrich?: IoTAnalyticsPipelineDeviceRegistryEnrich;
  RemoveAttributes?: IoTAnalyticsPipelineRemoveAttributes;
}
/**
 * Type definition for AWS::IoTAnalytics::Pipeline.AddAttributes
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-pipeline-addattributes.html | AWS::IoTAnalytics::Pipeline.AddAttributes}
 */
export interface IoTAnalyticsPipelineAddAttributes {
  Next?: string;
  Attributes: Record<string, any>;
  Name: string;
}
/**
 * Type definition for AWS::IoTAnalytics::Pipeline.Channel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-pipeline-channel.html | AWS::IoTAnalytics::Pipeline.Channel}
 */
export interface IoTAnalyticsPipelineChannel {
  ChannelName: string;
  Next?: string;
  Name: string;
}
/**
 * Type definition for AWS::IoTAnalytics::Pipeline.Datastore
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-pipeline-datastore.html | AWS::IoTAnalytics::Pipeline.Datastore}
 */
export interface IoTAnalyticsPipelineDatastore {
  DatastoreName: string;
  Name: string;
}
/**
 * Type definition for AWS::IoTAnalytics::Pipeline.DeviceRegistryEnrich
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-pipeline-deviceregistryenrich.html | AWS::IoTAnalytics::Pipeline.DeviceRegistryEnrich}
 */
export interface IoTAnalyticsPipelineDeviceRegistryEnrich {
  Attribute: string;
  Next?: string;
  ThingName: string;
  RoleArn: string;
  Name: string;
}
/**
 * Type definition for AWS::IoTAnalytics::Pipeline.DeviceShadowEnrich
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-pipeline-deviceshadowenrich.html | AWS::IoTAnalytics::Pipeline.DeviceShadowEnrich}
 */
export interface IoTAnalyticsPipelineDeviceShadowEnrich {
  Attribute: string;
  Next?: string;
  ThingName: string;
  RoleArn: string;
  Name: string;
}
/**
 * Type definition for AWS::IoTAnalytics::Pipeline.Filter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-pipeline-filter.html | AWS::IoTAnalytics::Pipeline.Filter}
 */
export interface IoTAnalyticsPipelineFilter {
  Filter: string;
  Next?: string;
  Name: string;
}
/**
 * Type definition for AWS::IoTAnalytics::Pipeline.Lambda
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-pipeline-lambda.html | AWS::IoTAnalytics::Pipeline.Lambda}
 */
export interface IoTAnalyticsPipelineLambda {
  BatchSize: number;
  Next?: string;
  LambdaName: string;
  Name: string;
}
/**
 * Type definition for AWS::IoTAnalytics::Pipeline.Math
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-pipeline-math.html | AWS::IoTAnalytics::Pipeline.Math}
 */
export interface IoTAnalyticsPipelineMath {
  Attribute: string;
  Next?: string;
  Math: string;
  Name: string;
}
/**
 * Type definition for AWS::IoTAnalytics::Pipeline.RemoveAttributes
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-pipeline-removeattributes.html | AWS::IoTAnalytics::Pipeline.RemoveAttributes}
 */
export interface IoTAnalyticsPipelineRemoveAttributes {
  Next?: string;
  Attributes: any[];
  Name: string;
}
/**
 * Type definition for AWS::IoTAnalytics::Pipeline.SelectAttributes
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-pipeline-selectattributes.html | AWS::IoTAnalytics::Pipeline.SelectAttributes}
 */
export interface IoTAnalyticsPipelineSelectAttributes {
  Next?: string;
  Attributes: any[];
  Name: string;
}
/**
 * Type definition for AWS::IoTAnalytics::Channel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-channel.html | AWS::IoTAnalytics::Channel}
 */
export interface IoTAnalyticsChannelProps {
  ChannelName?: string;
  ChannelStorage?: IoTAnalyticsChannelChannelStorage;
  RetentionPeriod?: IoTAnalyticsChannelRetentionPeriod;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::IoTAnalytics::Channel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-channel.html | AWS::IoTAnalytics::Channel}
 */
export interface IoTAnalyticsChannelAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::IoTAnalytics::Channel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-channel.html | AWS::IoTAnalytics::Channel}
 */
export class IoTAnalyticsChannel extends ResourceBase<
  "AWS::IoTAnalytics::Channel",
  IoTAnalyticsChannelProps,
  IoTAnalyticsChannelAttribs
> {
  public static readonly Type = "AWS::IoTAnalytics::Channel";
  public static readonly AttributeNames: readonly (keyof IoTAnalyticsChannelAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: IoTAnalyticsChannelProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTAnalyticsChannel.Type,
      IoTAnalyticsChannel.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoTAnalytics::Dataset
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-dataset.html | AWS::IoTAnalytics::Dataset}
 */
export interface IoTAnalyticsDatasetProps {
  Actions: any[];
  LateDataRules?: any[];
  DatasetName?: string;
  ContentDeliveryRules?: any[];
  Triggers?: any[];
  VersioningConfiguration?: IoTAnalyticsDatasetVersioningConfiguration;
  RetentionPeriod?: IoTAnalyticsDatasetRetentionPeriod;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::IoTAnalytics::Dataset
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-dataset.html | AWS::IoTAnalytics::Dataset}
 */
export interface IoTAnalyticsDatasetAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::IoTAnalytics::Dataset
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-dataset.html | AWS::IoTAnalytics::Dataset}
 */
export class IoTAnalyticsDataset extends ResourceBase<
  "AWS::IoTAnalytics::Dataset",
  IoTAnalyticsDatasetProps,
  IoTAnalyticsDatasetAttribs
> {
  public static readonly Type = "AWS::IoTAnalytics::Dataset";
  public static readonly AttributeNames: readonly (keyof IoTAnalyticsDatasetAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: IoTAnalyticsDatasetProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTAnalyticsDataset.Type,
      IoTAnalyticsDataset.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoTAnalytics::Datastore
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html | AWS::IoTAnalytics::Datastore}
 */
export interface IoTAnalyticsDatastoreProps {
  DatastoreStorage?: IoTAnalyticsDatastoreDatastoreStorage;
  FileFormatConfiguration?: IoTAnalyticsDatastoreFileFormatConfiguration;
  DatastorePartitions?: IoTAnalyticsDatastoreDatastorePartitions;
  DatastoreName?: string;
  RetentionPeriod?: IoTAnalyticsDatastoreRetentionPeriod;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::IoTAnalytics::Datastore
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html | AWS::IoTAnalytics::Datastore}
 */
export interface IoTAnalyticsDatastoreAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::IoTAnalytics::Datastore
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html | AWS::IoTAnalytics::Datastore}
 */
export class IoTAnalyticsDatastore extends ResourceBase<
  "AWS::IoTAnalytics::Datastore",
  IoTAnalyticsDatastoreProps,
  IoTAnalyticsDatastoreAttribs
> {
  public static readonly Type = "AWS::IoTAnalytics::Datastore";
  public static readonly AttributeNames: readonly (keyof IoTAnalyticsDatastoreAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: IoTAnalyticsDatastoreProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTAnalyticsDatastore.Type,
      IoTAnalyticsDatastore.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoTAnalytics::Pipeline
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-pipeline.html | AWS::IoTAnalytics::Pipeline}
 */
export interface IoTAnalyticsPipelineProps {
  PipelineName?: string;
  Tags?: Tag[];
  PipelineActivities: any[];
}
/**
 * Attributes type definition for AWS::IoTAnalytics::Pipeline
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-pipeline.html | AWS::IoTAnalytics::Pipeline}
 */
export interface IoTAnalyticsPipelineAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::IoTAnalytics::Pipeline
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-pipeline.html | AWS::IoTAnalytics::Pipeline}
 */
export class IoTAnalyticsPipeline extends ResourceBase<
  "AWS::IoTAnalytics::Pipeline",
  IoTAnalyticsPipelineProps,
  IoTAnalyticsPipelineAttribs
> {
  public static readonly Type = "AWS::IoTAnalytics::Pipeline";
  public static readonly AttributeNames: readonly (keyof IoTAnalyticsPipelineAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: IoTAnalyticsPipelineProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTAnalyticsPipeline.Type,
      IoTAnalyticsPipeline.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
