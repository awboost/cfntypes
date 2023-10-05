import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::DynamoDB::GlobalTable.AttributeDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-attributedefinition.html | AWS::DynamoDB::GlobalTable.AttributeDefinition}
 */
export interface DynamoDBGlobalTableAttributeDefinition {
  AttributeType: string;
  AttributeName: string;
}
/**
 * Type definition for AWS::DynamoDB::GlobalTable.CapacityAutoScalingSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-capacityautoscalingsettings.html | AWS::DynamoDB::GlobalTable.CapacityAutoScalingSettings}
 */
export interface DynamoDBGlobalTableCapacityAutoScalingSettings {
  MinCapacity: number;
  SeedCapacity?: number;
  TargetTrackingScalingPolicyConfiguration: DynamoDBGlobalTableTargetTrackingScalingPolicyConfiguration;
  MaxCapacity: number;
}
/**
 * Type definition for AWS::DynamoDB::GlobalTable.ContributorInsightsSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-contributorinsightsspecification.html | AWS::DynamoDB::GlobalTable.ContributorInsightsSpecification}
 */
export interface DynamoDBGlobalTableContributorInsightsSpecification {
  Enabled: boolean;
}
/**
 * Type definition for AWS::DynamoDB::GlobalTable.GlobalSecondaryIndex
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-globalsecondaryindex.html | AWS::DynamoDB::GlobalTable.GlobalSecondaryIndex}
 */
export interface DynamoDBGlobalTableGlobalSecondaryIndex {
  IndexName: string;
  Projection: DynamoDBGlobalTableProjection;
  KeySchema: any[];
  WriteProvisionedThroughputSettings?: DynamoDBGlobalTableWriteProvisionedThroughputSettings;
}
/**
 * Type definition for AWS::DynamoDB::GlobalTable.KeySchema
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-keyschema.html | AWS::DynamoDB::GlobalTable.KeySchema}
 */
export interface DynamoDBGlobalTableKeySchema {
  KeyType: string;
  AttributeName: string;
}
/**
 * Type definition for AWS::DynamoDB::GlobalTable.KinesisStreamSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-kinesisstreamspecification.html | AWS::DynamoDB::GlobalTable.KinesisStreamSpecification}
 */
export interface DynamoDBGlobalTableKinesisStreamSpecification {
  StreamArn: string;
}
/**
 * Type definition for AWS::DynamoDB::GlobalTable.LocalSecondaryIndex
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-localsecondaryindex.html | AWS::DynamoDB::GlobalTable.LocalSecondaryIndex}
 */
export interface DynamoDBGlobalTableLocalSecondaryIndex {
  IndexName: string;
  Projection: DynamoDBGlobalTableProjection;
  KeySchema: any[];
}
/**
 * Type definition for AWS::DynamoDB::GlobalTable.PointInTimeRecoverySpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-pointintimerecoveryspecification.html | AWS::DynamoDB::GlobalTable.PointInTimeRecoverySpecification}
 */
export interface DynamoDBGlobalTablePointInTimeRecoverySpecification {
  PointInTimeRecoveryEnabled?: boolean;
}
/**
 * Type definition for AWS::DynamoDB::GlobalTable.Projection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-projection.html | AWS::DynamoDB::GlobalTable.Projection}
 */
export interface DynamoDBGlobalTableProjection {
  ProjectionType?: string;
  NonKeyAttributes?: any[];
}
/**
 * Type definition for AWS::DynamoDB::GlobalTable.ReadProvisionedThroughputSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-readprovisionedthroughputsettings.html | AWS::DynamoDB::GlobalTable.ReadProvisionedThroughputSettings}
 */
export interface DynamoDBGlobalTableReadProvisionedThroughputSettings {
  ReadCapacityUnits?: number;
  ReadCapacityAutoScalingSettings?: DynamoDBGlobalTableCapacityAutoScalingSettings;
}
/**
 * Type definition for AWS::DynamoDB::GlobalTable.ReplicaGlobalSecondaryIndexSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-replicaglobalsecondaryindexspecification.html | AWS::DynamoDB::GlobalTable.ReplicaGlobalSecondaryIndexSpecification}
 */
export interface DynamoDBGlobalTableReplicaGlobalSecondaryIndexSpecification {
  IndexName: string;
  ContributorInsightsSpecification?: DynamoDBGlobalTableContributorInsightsSpecification;
  ReadProvisionedThroughputSettings?: DynamoDBGlobalTableReadProvisionedThroughputSettings;
}
/**
 * Type definition for AWS::DynamoDB::GlobalTable.ReplicaSSESpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-replicassespecification.html | AWS::DynamoDB::GlobalTable.ReplicaSSESpecification}
 */
export interface DynamoDBGlobalTableReplicaSSESpecification {
  KMSMasterKeyId: string;
}
/**
 * Type definition for AWS::DynamoDB::GlobalTable.ReplicaSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-replicaspecification.html | AWS::DynamoDB::GlobalTable.ReplicaSpecification}
 */
export interface DynamoDBGlobalTableReplicaSpecification {
  SSESpecification?: DynamoDBGlobalTableReplicaSSESpecification;
  KinesisStreamSpecification?: DynamoDBGlobalTableKinesisStreamSpecification;
  ContributorInsightsSpecification?: DynamoDBGlobalTableContributorInsightsSpecification;
  GlobalSecondaryIndexes?: any[];
  Region: string;
  PointInTimeRecoverySpecification?: DynamoDBGlobalTablePointInTimeRecoverySpecification;
  ReadProvisionedThroughputSettings?: DynamoDBGlobalTableReadProvisionedThroughputSettings;
  TableClass?: string;
  DeletionProtectionEnabled?: boolean;
  Tags?: Tag[];
}
/**
 * Type definition for AWS::DynamoDB::GlobalTable.SSESpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-ssespecification.html | AWS::DynamoDB::GlobalTable.SSESpecification}
 */
export interface DynamoDBGlobalTableSSESpecification {
  SSEEnabled: boolean;
  SSEType?: string;
}
/**
 * Type definition for AWS::DynamoDB::GlobalTable.StreamSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-streamspecification.html | AWS::DynamoDB::GlobalTable.StreamSpecification}
 */
export interface DynamoDBGlobalTableStreamSpecification {
  StreamViewType: string;
}
/**
 * Type definition for AWS::DynamoDB::GlobalTable.TargetTrackingScalingPolicyConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-targettrackingscalingpolicyconfiguration.html | AWS::DynamoDB::GlobalTable.TargetTrackingScalingPolicyConfiguration}
 */
export interface DynamoDBGlobalTableTargetTrackingScalingPolicyConfiguration {
  ScaleOutCooldown?: number;
  TargetValue: number;
  DisableScaleIn?: boolean;
  ScaleInCooldown?: number;
}
/**
 * Type definition for AWS::DynamoDB::GlobalTable.TimeToLiveSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-timetolivespecification.html | AWS::DynamoDB::GlobalTable.TimeToLiveSpecification}
 */
export interface DynamoDBGlobalTableTimeToLiveSpecification {
  Enabled: boolean;
  AttributeName?: string;
}
/**
 * Type definition for AWS::DynamoDB::GlobalTable.WriteProvisionedThroughputSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-writeprovisionedthroughputsettings.html | AWS::DynamoDB::GlobalTable.WriteProvisionedThroughputSettings}
 */
export interface DynamoDBGlobalTableWriteProvisionedThroughputSettings {
  WriteCapacityAutoScalingSettings?: DynamoDBGlobalTableCapacityAutoScalingSettings;
}
/**
 * Type definition for AWS::DynamoDB::Table.AttributeDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-attributedefinition.html | AWS::DynamoDB::Table.AttributeDefinition}
 */
export interface DynamoDBTableAttributeDefinition {
  AttributeType: string;
  AttributeName: string;
}
/**
 * Type definition for AWS::DynamoDB::Table.ContributorInsightsSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-contributorinsightsspecification.html | AWS::DynamoDB::Table.ContributorInsightsSpecification}
 */
export interface DynamoDBTableContributorInsightsSpecification {
  Enabled: boolean;
}
/**
 * Type definition for AWS::DynamoDB::Table.Csv
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-csv.html | AWS::DynamoDB::Table.Csv}
 */
export interface DynamoDBTableCsv {
  Delimiter?: string;
  HeaderList?: any[];
}
/**
 * Type definition for AWS::DynamoDB::Table.GlobalSecondaryIndex
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-globalsecondaryindex.html | AWS::DynamoDB::Table.GlobalSecondaryIndex}
 */
export interface DynamoDBTableGlobalSecondaryIndex {
  IndexName: string;
  ContributorInsightsSpecification?: DynamoDBTableContributorInsightsSpecification;
  Projection: DynamoDBTableProjection;
  ProvisionedThroughput?: DynamoDBTableProvisionedThroughput;
  KeySchema: any[];
}
/**
 * Type definition for AWS::DynamoDB::Table.ImportSourceSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-importsourcespecification.html | AWS::DynamoDB::Table.ImportSourceSpecification}
 */
export interface DynamoDBTableImportSourceSpecification {
  S3BucketSource: DynamoDBTableS3BucketSource;
  InputFormat: string;
  InputFormatOptions?: DynamoDBTableInputFormatOptions;
  InputCompressionType?: string;
}
/**
 * Type definition for AWS::DynamoDB::Table.InputFormatOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-inputformatoptions.html | AWS::DynamoDB::Table.InputFormatOptions}
 */
export interface DynamoDBTableInputFormatOptions {
  Csv?: DynamoDBTableCsv;
}
/**
 * Type definition for AWS::DynamoDB::Table.KeySchema
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-keyschema.html | AWS::DynamoDB::Table.KeySchema}
 */
export interface DynamoDBTableKeySchema {
  KeyType: string;
  AttributeName: string;
}
/**
 * Type definition for AWS::DynamoDB::Table.KinesisStreamSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-kinesisstreamspecification.html | AWS::DynamoDB::Table.KinesisStreamSpecification}
 */
export interface DynamoDBTableKinesisStreamSpecification {
  StreamArn: string;
}
/**
 * Type definition for AWS::DynamoDB::Table.LocalSecondaryIndex
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-localsecondaryindex.html | AWS::DynamoDB::Table.LocalSecondaryIndex}
 */
export interface DynamoDBTableLocalSecondaryIndex {
  IndexName: string;
  Projection: DynamoDBTableProjection;
  KeySchema: any[];
}
/**
 * Type definition for AWS::DynamoDB::Table.PointInTimeRecoverySpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-pointintimerecoveryspecification.html | AWS::DynamoDB::Table.PointInTimeRecoverySpecification}
 */
export interface DynamoDBTablePointInTimeRecoverySpecification {
  PointInTimeRecoveryEnabled?: boolean;
}
/**
 * Type definition for AWS::DynamoDB::Table.Projection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-projection.html | AWS::DynamoDB::Table.Projection}
 */
export interface DynamoDBTableProjection {
  NonKeyAttributes?: any[];
  ProjectionType?: string;
}
/**
 * Type definition for AWS::DynamoDB::Table.ProvisionedThroughput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-provisionedthroughput.html | AWS::DynamoDB::Table.ProvisionedThroughput}
 */
export interface DynamoDBTableProvisionedThroughput {
  WriteCapacityUnits: number;
  ReadCapacityUnits: number;
}
/**
 * Type definition for AWS::DynamoDB::Table.S3BucketSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-s3bucketsource.html | AWS::DynamoDB::Table.S3BucketSource}
 */
export interface DynamoDBTableS3BucketSource {
  S3Bucket: string;
  S3KeyPrefix?: string;
  S3BucketOwner?: string;
}
/**
 * Type definition for AWS::DynamoDB::Table.SSESpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-ssespecification.html | AWS::DynamoDB::Table.SSESpecification}
 */
export interface DynamoDBTableSSESpecification {
  SSEEnabled: boolean;
  SSEType?: string;
  KMSMasterKeyId?: string;
}
/**
 * Type definition for AWS::DynamoDB::Table.StreamSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-streamspecification.html | AWS::DynamoDB::Table.StreamSpecification}
 */
export interface DynamoDBTableStreamSpecification {
  StreamViewType: string;
}
/**
 * Type definition for AWS::DynamoDB::Table.TimeToLiveSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-timetolivespecification.html | AWS::DynamoDB::Table.TimeToLiveSpecification}
 */
export interface DynamoDBTableTimeToLiveSpecification {
  Enabled: boolean;
  AttributeName?: string;
}
/**
 * Type definition for AWS::DynamoDB::GlobalTable
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html | AWS::DynamoDB::GlobalTable}
 */
export interface DynamoDBGlobalTableProps {
  SSESpecification?: DynamoDBGlobalTableSSESpecification;
  TableName?: string;
  AttributeDefinitions: any[];
  StreamSpecification?: DynamoDBGlobalTableStreamSpecification;
  BillingMode?: string;
  GlobalSecondaryIndexes?: any[];
  KeySchema: any[];
  LocalSecondaryIndexes?: any[];
  Replicas: any[];
  WriteProvisionedThroughputSettings?: DynamoDBGlobalTableWriteProvisionedThroughputSettings;
  TimeToLiveSpecification?: DynamoDBGlobalTableTimeToLiveSpecification;
}
/**
 * Attributes type definition for AWS::DynamoDB::GlobalTable
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html | AWS::DynamoDB::GlobalTable}
 */
export interface DynamoDBGlobalTableAttribs {
  TableId?: string;
  Arn?: string;
  StreamArn?: string;
}
/**
 * Resource class for AWS::DynamoDB::GlobalTable
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html | AWS::DynamoDB::GlobalTable}
 */
export class DynamoDBGlobalTable extends ResourceBase<
  "AWS::DynamoDB::GlobalTable",
  DynamoDBGlobalTableProps,
  DynamoDBGlobalTableAttribs
> {
  public static readonly Type = "AWS::DynamoDB::GlobalTable";
  public static readonly AttributeNames: readonly (keyof DynamoDBGlobalTableAttribs)[] =
    ["TableId", "Arn", "StreamArn"];
  constructor(
    logicalId: string,
    properties: DynamoDBGlobalTableProps,
    options?: ResourceOptions,
  ) {
    super(
      DynamoDBGlobalTable.Type,
      DynamoDBGlobalTable.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::DynamoDB::Table
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html | AWS::DynamoDB::Table}
 */
export interface DynamoDBTableProps {
  SSESpecification?: DynamoDBTableSSESpecification;
  KinesisStreamSpecification?: DynamoDBTableKinesisStreamSpecification;
  StreamSpecification?: DynamoDBTableStreamSpecification;
  ContributorInsightsSpecification?: DynamoDBTableContributorInsightsSpecification;
  ImportSourceSpecification?: DynamoDBTableImportSourceSpecification;
  PointInTimeRecoverySpecification?: DynamoDBTablePointInTimeRecoverySpecification;
  ProvisionedThroughput?: DynamoDBTableProvisionedThroughput;
  TableName?: string;
  AttributeDefinitions?: any[];
  BillingMode?: string;
  GlobalSecondaryIndexes?: any[];
  KeySchema: any[];
  LocalSecondaryIndexes?: any[];
  DeletionProtectionEnabled?: boolean;
  TableClass?: string;
  Tags?: Tag[];
  TimeToLiveSpecification?: DynamoDBTableTimeToLiveSpecification;
}
/**
 * Attributes type definition for AWS::DynamoDB::Table
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html | AWS::DynamoDB::Table}
 */
export interface DynamoDBTableAttribs {
  Arn?: string;
  StreamArn?: string;
}
/**
 * Resource class for AWS::DynamoDB::Table
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html | AWS::DynamoDB::Table}
 */
export class DynamoDBTable extends ResourceBase<
  "AWS::DynamoDB::Table",
  DynamoDBTableProps,
  DynamoDBTableAttribs
> {
  public static readonly Type = "AWS::DynamoDB::Table";
  public static readonly AttributeNames: readonly (keyof DynamoDBTableAttribs)[] =
    ["Arn", "StreamArn"];
  constructor(
    logicalId: string,
    properties: DynamoDBTableProps,
    options?: ResourceOptions,
  ) {
    super(
      DynamoDBTable.Type,
      DynamoDBTable.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
