import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Glue::Classifier.CsvClassifier
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-classifier-csvclassifier.html | AWS::Glue::Classifier.CsvClassifier}
 */
export interface GlueClassifierCsvClassifier {
  ContainsCustomDatatype?: any[];
  QuoteSymbol?: string;
  ContainsHeader?: string;
  Delimiter?: string;
  Header?: any[];
  AllowSingleColumn?: boolean;
  CustomDatatypeConfigured?: boolean;
  DisableValueTrimming?: boolean;
  Name?: string;
}
/**
 * Type definition for AWS::Glue::Classifier.GrokClassifier
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-classifier-grokclassifier.html | AWS::Glue::Classifier.GrokClassifier}
 */
export interface GlueClassifierGrokClassifier {
  CustomPatterns?: string;
  GrokPattern: string;
  Classification: string;
  Name?: string;
}
/**
 * Type definition for AWS::Glue::Classifier.JsonClassifier
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-classifier-jsonclassifier.html | AWS::Glue::Classifier.JsonClassifier}
 */
export interface GlueClassifierJsonClassifier {
  JsonPath: string;
  Name?: string;
}
/**
 * Type definition for AWS::Glue::Classifier.XMLClassifier
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-classifier-xmlclassifier.html | AWS::Glue::Classifier.XMLClassifier}
 */
export interface GlueClassifierXMLClassifier {
  RowTag: string;
  Classification: string;
  Name?: string;
}
/**
 * Type definition for AWS::Glue::Connection.ConnectionInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-connectioninput.html | AWS::Glue::Connection.ConnectionInput}
 */
export interface GlueConnectionConnectionInput {
  Description?: string;
  ConnectionType: string;
  MatchCriteria?: any[];
  PhysicalConnectionRequirements?: GlueConnectionPhysicalConnectionRequirements;
  ConnectionProperties?: object;
  Name?: string;
}
/**
 * Type definition for AWS::Glue::Connection.PhysicalConnectionRequirements
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-physicalconnectionrequirements.html | AWS::Glue::Connection.PhysicalConnectionRequirements}
 */
export interface GlueConnectionPhysicalConnectionRequirements {
  AvailabilityZone?: string;
  SecurityGroupIdList?: any[];
  SubnetId?: string;
}
/**
 * Type definition for AWS::Glue::Crawler.CatalogTarget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-catalogtarget.html | AWS::Glue::Crawler.CatalogTarget}
 */
export interface GlueCrawlerCatalogTarget {
  ConnectionName?: string;
  DatabaseName?: string;
  DlqEventQueueArn?: string;
  Tables?: any[];
  EventQueueArn?: string;
}
/**
 * Type definition for AWS::Glue::Crawler.DeltaTarget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-deltatarget.html | AWS::Glue::Crawler.DeltaTarget}
 */
export interface GlueCrawlerDeltaTarget {
  ConnectionName?: string;
  CreateNativeDeltaTable?: boolean;
  WriteManifest?: boolean;
  DeltaTables?: any[];
}
/**
 * Type definition for AWS::Glue::Crawler.DynamoDBTarget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-dynamodbtarget.html | AWS::Glue::Crawler.DynamoDBTarget}
 */
export interface GlueCrawlerDynamoDBTarget {
  Path?: string;
}
/**
 * Type definition for AWS::Glue::Crawler.IcebergTarget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-icebergtarget.html | AWS::Glue::Crawler.IcebergTarget}
 */
export interface GlueCrawlerIcebergTarget {
  ConnectionName?: string;
  Exclusions?: any[];
  Paths?: any[];
  MaximumTraversalDepth?: number;
}
/**
 * Type definition for AWS::Glue::Crawler.JdbcTarget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-jdbctarget.html | AWS::Glue::Crawler.JdbcTarget}
 */
export interface GlueCrawlerJdbcTarget {
  ConnectionName?: string;
  Path?: string;
  Exclusions?: any[];
}
/**
 * Type definition for AWS::Glue::Crawler.MongoDBTarget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-mongodbtarget.html | AWS::Glue::Crawler.MongoDBTarget}
 */
export interface GlueCrawlerMongoDBTarget {
  ConnectionName?: string;
  Path?: string;
}
/**
 * Type definition for AWS::Glue::Crawler.RecrawlPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-recrawlpolicy.html | AWS::Glue::Crawler.RecrawlPolicy}
 */
export interface GlueCrawlerRecrawlPolicy {
  RecrawlBehavior?: string;
}
/**
 * Type definition for AWS::Glue::Crawler.S3Target
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-s3target.html | AWS::Glue::Crawler.S3Target}
 */
export interface GlueCrawlerS3Target {
  ConnectionName?: string;
  Path?: string;
  SampleSize?: number;
  Exclusions?: any[];
  DlqEventQueueArn?: string;
  EventQueueArn?: string;
}
/**
 * Type definition for AWS::Glue::Crawler.Schedule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-schedule.html | AWS::Glue::Crawler.Schedule}
 */
export interface GlueCrawlerSchedule {
  ScheduleExpression?: string;
}
/**
 * Type definition for AWS::Glue::Crawler.SchemaChangePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-schemachangepolicy.html | AWS::Glue::Crawler.SchemaChangePolicy}
 */
export interface GlueCrawlerSchemaChangePolicy {
  UpdateBehavior?: string;
  DeleteBehavior?: string;
}
/**
 * Type definition for AWS::Glue::Crawler.Targets
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-targets.html | AWS::Glue::Crawler.Targets}
 */
export interface GlueCrawlerTargets {
  S3Targets?: any[];
  CatalogTargets?: any[];
  DeltaTargets?: any[];
  MongoDBTargets?: any[];
  JdbcTargets?: any[];
  DynamoDBTargets?: any[];
  IcebergTargets?: any[];
}
/**
 * Type definition for AWS::Glue::DataCatalogEncryptionSettings.ConnectionPasswordEncryption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-datacatalogencryptionsettings-connectionpasswordencryption.html | AWS::Glue::DataCatalogEncryptionSettings.ConnectionPasswordEncryption}
 */
export interface GlueDataCatalogEncryptionSettingsConnectionPasswordEncryption {
  ReturnConnectionPasswordEncrypted?: boolean;
  KmsKeyId?: string;
}
/**
 * Type definition for AWS::Glue::DataCatalogEncryptionSettings.DataCatalogEncryptionSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-datacatalogencryptionsettings-datacatalogencryptionsettings.html | AWS::Glue::DataCatalogEncryptionSettings.DataCatalogEncryptionSettings}
 */
export interface GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings {
  ConnectionPasswordEncryption?: GlueDataCatalogEncryptionSettingsConnectionPasswordEncryption;
  EncryptionAtRest?: GlueDataCatalogEncryptionSettingsEncryptionAtRest;
}
/**
 * Type definition for AWS::Glue::DataCatalogEncryptionSettings.EncryptionAtRest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-datacatalogencryptionsettings-encryptionatrest.html | AWS::Glue::DataCatalogEncryptionSettings.EncryptionAtRest}
 */
export interface GlueDataCatalogEncryptionSettingsEncryptionAtRest {
  CatalogEncryptionMode?: string;
  SseAwsKmsKeyId?: string;
}
/**
 * Type definition for AWS::Glue::DataQualityRuleset.DataQualityTargetTable
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-dataqualityruleset-dataqualitytargettable.html | AWS::Glue::DataQualityRuleset.DataQualityTargetTable}
 */
export interface GlueDataQualityRulesetDataQualityTargetTable {
  TableName?: string;
  DatabaseName?: string;
}
/**
 * Type definition for AWS::Glue::Database.DataLakePrincipal
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-datalakeprincipal.html | AWS::Glue::Database.DataLakePrincipal}
 */
export interface GlueDatabaseDataLakePrincipal {
  DataLakePrincipalIdentifier?: string;
}
/**
 * Type definition for AWS::Glue::Database.DatabaseIdentifier
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-databaseidentifier.html | AWS::Glue::Database.DatabaseIdentifier}
 */
export interface GlueDatabaseDatabaseIdentifier {
  DatabaseName?: string;
  Region?: string;
  CatalogId?: string;
}
/**
 * Type definition for AWS::Glue::Database.DatabaseInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-databaseinput.html | AWS::Glue::Database.DatabaseInput}
 */
export interface GlueDatabaseDatabaseInput {
  LocationUri?: string;
  CreateTableDefaultPermissions?: any[];
  Description?: string;
  Parameters?: object;
  TargetDatabase?: GlueDatabaseDatabaseIdentifier;
  FederatedDatabase?: GlueDatabaseFederatedDatabase;
  Name?: string;
}
/**
 * Type definition for AWS::Glue::Database.FederatedDatabase
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-databaseinput-federateddatabase.html | AWS::Glue::Database.FederatedDatabase}
 */
export interface GlueDatabaseFederatedDatabase {
  ConnectionName?: string;
  Identifier?: string;
}
/**
 * Type definition for AWS::Glue::Database.PrincipalPrivileges
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-principalprivileges.html | AWS::Glue::Database.PrincipalPrivileges}
 */
export interface GlueDatabasePrincipalPrivileges {
  Permissions?: any[];
  Principal?: GlueDatabaseDataLakePrincipal;
}
/**
 * Type definition for AWS::Glue::Job.ConnectionsList
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-job-connectionslist.html | AWS::Glue::Job.ConnectionsList}
 */
export interface GlueJobConnectionsList {
  Connections?: any[];
}
/**
 * Type definition for AWS::Glue::Job.ExecutionProperty
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-job-executionproperty.html | AWS::Glue::Job.ExecutionProperty}
 */
export interface GlueJobExecutionProperty {
  MaxConcurrentRuns?: number;
}
/**
 * Type definition for AWS::Glue::Job.JobCommand
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-job-jobcommand.html | AWS::Glue::Job.JobCommand}
 */
export interface GlueJobJobCommand {
  Runtime?: string;
  PythonVersion?: string;
  ScriptLocation?: string;
  Name?: string;
}
/**
 * Type definition for AWS::Glue::Job.NotificationProperty
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-job-notificationproperty.html | AWS::Glue::Job.NotificationProperty}
 */
export interface GlueJobNotificationProperty {
  NotifyDelayAfter?: number;
}
/**
 * Type definition for AWS::Glue::MLTransform.FindMatchesParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-transformparameters-findmatchesparameters.html | AWS::Glue::MLTransform.FindMatchesParameters}
 */
export interface GlueMLTransformFindMatchesParameters {
  PrecisionRecallTradeoff?: number;
  EnforceProvidedLabels?: boolean;
  PrimaryKeyColumnName: string;
  AccuracyCostTradeoff?: number;
}
/**
 * Type definition for AWS::Glue::MLTransform.GlueTables
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-inputrecordtables-gluetables.html | AWS::Glue::MLTransform.GlueTables}
 */
export interface GlueMLTransformGlueTables {
  ConnectionName?: string;
  TableName: string;
  DatabaseName: string;
  CatalogId?: string;
}
/**
 * Type definition for AWS::Glue::MLTransform.InputRecordTables
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-inputrecordtables.html | AWS::Glue::MLTransform.InputRecordTables}
 */
export interface GlueMLTransformInputRecordTables {
  GlueTables?: any[];
}
/**
 * Type definition for AWS::Glue::MLTransform.MLUserDataEncryption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-transformencryption-mluserdataencryption.html | AWS::Glue::MLTransform.MLUserDataEncryption}
 */
export interface GlueMLTransformMLUserDataEncryption {
  MLUserDataEncryptionMode: string;
  KmsKeyId?: string;
}
/**
 * Type definition for AWS::Glue::MLTransform.TransformEncryption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-transformencryption.html | AWS::Glue::MLTransform.TransformEncryption}
 */
export interface GlueMLTransformTransformEncryption {
  MLUserDataEncryption?: GlueMLTransformMLUserDataEncryption;
  TaskRunSecurityConfigurationName?: string;
}
/**
 * Type definition for AWS::Glue::MLTransform.TransformParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-transformparameters.html | AWS::Glue::MLTransform.TransformParameters}
 */
export interface GlueMLTransformTransformParameters {
  TransformType: string;
  FindMatchesParameters?: GlueMLTransformFindMatchesParameters;
}
/**
 * Type definition for AWS::Glue::Partition.Column
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-column.html | AWS::Glue::Partition.Column}
 */
export interface GluePartitionColumn {
  Comment?: string;
  Type?: string;
  Name: string;
}
/**
 * Type definition for AWS::Glue::Partition.Order
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-order.html | AWS::Glue::Partition.Order}
 */
export interface GluePartitionOrder {
  Column: string;
  SortOrder?: number;
}
/**
 * Type definition for AWS::Glue::Partition.PartitionInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-partitioninput.html | AWS::Glue::Partition.PartitionInput}
 */
export interface GluePartitionPartitionInput {
  Parameters?: object;
  StorageDescriptor?: GluePartitionStorageDescriptor;
  Values: any[];
}
/**
 * Type definition for AWS::Glue::Partition.SchemaId
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-schemaid.html | AWS::Glue::Partition.SchemaId}
 */
export interface GluePartitionSchemaId {
  RegistryName?: string;
  SchemaName?: string;
  SchemaArn?: string;
}
/**
 * Type definition for AWS::Glue::Partition.SchemaReference
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-schemareference.html | AWS::Glue::Partition.SchemaReference}
 */
export interface GluePartitionSchemaReference {
  SchemaVersionId?: string;
  SchemaId?: GluePartitionSchemaId;
  SchemaVersionNumber?: number;
}
/**
 * Type definition for AWS::Glue::Partition.SerdeInfo
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-serdeinfo.html | AWS::Glue::Partition.SerdeInfo}
 */
export interface GluePartitionSerdeInfo {
  Parameters?: object;
  SerializationLibrary?: string;
  Name?: string;
}
/**
 * Type definition for AWS::Glue::Partition.SkewedInfo
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-skewedinfo.html | AWS::Glue::Partition.SkewedInfo}
 */
export interface GluePartitionSkewedInfo {
  SkewedColumnNames?: any[];
  SkewedColumnValues?: any[];
  SkewedColumnValueLocationMaps?: object;
}
/**
 * Type definition for AWS::Glue::Partition.StorageDescriptor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-storagedescriptor.html | AWS::Glue::Partition.StorageDescriptor}
 */
export interface GluePartitionStorageDescriptor {
  StoredAsSubDirectories?: boolean;
  Parameters?: object;
  BucketColumns?: any[];
  NumberOfBuckets?: number;
  OutputFormat?: string;
  Columns?: any[];
  SerdeInfo?: GluePartitionSerdeInfo;
  SortColumns?: any[];
  Compressed?: boolean;
  SchemaReference?: GluePartitionSchemaReference;
  SkewedInfo?: GluePartitionSkewedInfo;
  InputFormat?: string;
  Location?: string;
}
/**
 * Type definition for AWS::Glue::Schema.Registry
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-schema-registry.html | AWS::Glue::Schema.Registry}
 */
export interface GlueSchemaRegistry {
  Arn?: string;
  Name?: string;
}
/**
 * Type definition for AWS::Glue::Schema.SchemaVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-schema-schemaversion.html | AWS::Glue::Schema.SchemaVersion}
 */
export interface GlueSchemaSchemaVersion {
  IsLatest?: boolean;
  VersionNumber?: number;
}
/**
 * Type definition for AWS::Glue::SchemaVersion.Schema
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-schemaversion-schema.html | AWS::Glue::SchemaVersion.Schema}
 */
export interface GlueSchemaVersionSchema {
  RegistryName?: string;
  SchemaArn?: string;
  SchemaName?: string;
}
/**
 * Type definition for AWS::Glue::SecurityConfiguration.CloudWatchEncryption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-securityconfiguration-cloudwatchencryption.html | AWS::Glue::SecurityConfiguration.CloudWatchEncryption}
 */
export interface GlueSecurityConfigurationCloudWatchEncryption {
  KmsKeyArn?: string;
  CloudWatchEncryptionMode?: string;
}
/**
 * Type definition for AWS::Glue::SecurityConfiguration.EncryptionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-securityconfiguration-encryptionconfiguration.html | AWS::Glue::SecurityConfiguration.EncryptionConfiguration}
 */
export interface GlueSecurityConfigurationEncryptionConfiguration {
  S3Encryptions?: GlueSecurityConfigurationS3Encryptions;
  CloudWatchEncryption?: GlueSecurityConfigurationCloudWatchEncryption;
  JobBookmarksEncryption?: GlueSecurityConfigurationJobBookmarksEncryption;
}
/**
 * Type definition for AWS::Glue::SecurityConfiguration.JobBookmarksEncryption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-securityconfiguration-jobbookmarksencryption.html | AWS::Glue::SecurityConfiguration.JobBookmarksEncryption}
 */
export interface GlueSecurityConfigurationJobBookmarksEncryption {
  KmsKeyArn?: string;
  JobBookmarksEncryptionMode?: string;
}
/**
 * Type definition for AWS::Glue::SecurityConfiguration.S3Encryption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-securityconfiguration-s3encryption.html | AWS::Glue::SecurityConfiguration.S3Encryption}
 */
export interface GlueSecurityConfigurationS3Encryption {
  KmsKeyArn?: string;
  S3EncryptionMode?: string;
}
/**
 * Type definition for AWS::Glue::SecurityConfiguration.S3Encryptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-securityconfiguration-s3encryptions.html | AWS::Glue::SecurityConfiguration.S3Encryptions}
 */
export type GlueSecurityConfigurationS3Encryptions = any[];
/**
 * Type definition for AWS::Glue::Table.Column
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-column.html | AWS::Glue::Table.Column}
 */
export interface GlueTableColumn {
  Comment?: string;
  Type?: string;
  Name: string;
}
/**
 * Type definition for AWS::Glue::Table.IcebergInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-iceberginput.html | AWS::Glue::Table.IcebergInput}
 */
export interface GlueTableIcebergInput {
  MetadataOperation?: GlueTableMetadataOperation;
  Version?: string;
}
/**
 * Type definition for AWS::Glue::Table.MetadataOperation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-metadataoperation.html | AWS::Glue::Table.MetadataOperation}
 */
export type GlueTableMetadataOperation = string;
/**
 * Type definition for AWS::Glue::Table.OpenTableFormatInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-opentableformatinput.html | AWS::Glue::Table.OpenTableFormatInput}
 */
export interface GlueTableOpenTableFormatInput {
  IcebergInput?: GlueTableIcebergInput;
}
/**
 * Type definition for AWS::Glue::Table.Order
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-order.html | AWS::Glue::Table.Order}
 */
export interface GlueTableOrder {
  Column: string;
  SortOrder: number;
}
/**
 * Type definition for AWS::Glue::Table.SchemaId
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-schemaid.html | AWS::Glue::Table.SchemaId}
 */
export interface GlueTableSchemaId {
  RegistryName?: string;
  SchemaName?: string;
  SchemaArn?: string;
}
/**
 * Type definition for AWS::Glue::Table.SchemaReference
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-schemareference.html | AWS::Glue::Table.SchemaReference}
 */
export interface GlueTableSchemaReference {
  SchemaVersionId?: string;
  SchemaId?: GlueTableSchemaId;
  SchemaVersionNumber?: number;
}
/**
 * Type definition for AWS::Glue::Table.SerdeInfo
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-serdeinfo.html | AWS::Glue::Table.SerdeInfo}
 */
export interface GlueTableSerdeInfo {
  Parameters?: object;
  SerializationLibrary?: string;
  Name?: string;
}
/**
 * Type definition for AWS::Glue::Table.SkewedInfo
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-skewedinfo.html | AWS::Glue::Table.SkewedInfo}
 */
export interface GlueTableSkewedInfo {
  SkewedColumnNames?: any[];
  SkewedColumnValues?: any[];
  SkewedColumnValueLocationMaps?: object;
}
/**
 * Type definition for AWS::Glue::Table.StorageDescriptor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-storagedescriptor.html | AWS::Glue::Table.StorageDescriptor}
 */
export interface GlueTableStorageDescriptor {
  StoredAsSubDirectories?: boolean;
  Parameters?: object;
  BucketColumns?: any[];
  NumberOfBuckets?: number;
  OutputFormat?: string;
  Columns?: any[];
  SerdeInfo?: GlueTableSerdeInfo;
  SortColumns?: any[];
  Compressed?: boolean;
  SchemaReference?: GlueTableSchemaReference;
  SkewedInfo?: GlueTableSkewedInfo;
  InputFormat?: string;
  Location?: string;
}
/**
 * Type definition for AWS::Glue::Table.TableIdentifier
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-tableidentifier.html | AWS::Glue::Table.TableIdentifier}
 */
export interface GlueTableTableIdentifier {
  DatabaseName?: string;
  Region?: string;
  CatalogId?: string;
  Name?: string;
}
/**
 * Type definition for AWS::Glue::Table.TableInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-tableinput.html | AWS::Glue::Table.TableInput}
 */
export interface GlueTableTableInput {
  Owner?: string;
  ViewOriginalText?: string;
  Description?: string;
  TableType?: string;
  Parameters?: object;
  ViewExpandedText?: string;
  StorageDescriptor?: GlueTableStorageDescriptor;
  TargetTable?: GlueTableTableIdentifier;
  PartitionKeys?: any[];
  Retention?: number;
  Name?: string;
}
/**
 * Type definition for AWS::Glue::Trigger.Action
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-action.html | AWS::Glue::Trigger.Action}
 */
export interface GlueTriggerAction {
  NotificationProperty?: GlueTriggerNotificationProperty;
  CrawlerName?: string;
  Timeout?: number;
  JobName?: string;
  Arguments?: object;
  SecurityConfiguration?: string;
}
/**
 * Type definition for AWS::Glue::Trigger.Condition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-condition.html | AWS::Glue::Trigger.Condition}
 */
export interface GlueTriggerCondition {
  CrawlerName?: string;
  State?: string;
  CrawlState?: string;
  LogicalOperator?: string;
  JobName?: string;
}
/**
 * Type definition for AWS::Glue::Trigger.EventBatchingCondition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-eventbatchingcondition.html | AWS::Glue::Trigger.EventBatchingCondition}
 */
export interface GlueTriggerEventBatchingCondition {
  BatchSize: number;
  BatchWindow?: number;
}
/**
 * Type definition for AWS::Glue::Trigger.NotificationProperty
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-notificationproperty.html | AWS::Glue::Trigger.NotificationProperty}
 */
export interface GlueTriggerNotificationProperty {
  NotifyDelayAfter?: number;
}
/**
 * Type definition for AWS::Glue::Trigger.Predicate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-predicate.html | AWS::Glue::Trigger.Predicate}
 */
export interface GlueTriggerPredicate {
  Logical?: string;
  Conditions?: any[];
}
/**
 * Type definition for AWS::Glue::Classifier
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-classifier.html | AWS::Glue::Classifier}
 */
export interface GlueClassifierProps {
  XMLClassifier?: GlueClassifierXMLClassifier;
  JsonClassifier?: GlueClassifierJsonClassifier;
  CsvClassifier?: GlueClassifierCsvClassifier;
  GrokClassifier?: GlueClassifierGrokClassifier;
}
/**
 * Resource class for AWS::Glue::Classifier
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-classifier.html | AWS::Glue::Classifier}
 */
export class GlueClassifier extends ResourceBase<
  "AWS::Glue::Classifier",
  GlueClassifierProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Glue::Classifier";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: GlueClassifierProps,
    options?: ResourceOptions,
  ) {
    super(
      GlueClassifier.Type,
      GlueClassifier.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Glue::Connection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html | AWS::Glue::Connection}
 */
export interface GlueConnectionProps {
  ConnectionInput: GlueConnectionConnectionInput;
  CatalogId: string;
}
/**
 * Resource class for AWS::Glue::Connection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html | AWS::Glue::Connection}
 */
export class GlueConnection extends ResourceBase<
  "AWS::Glue::Connection",
  GlueConnectionProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Glue::Connection";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: GlueConnectionProps,
    options?: ResourceOptions,
  ) {
    super(
      GlueConnection.Type,
      GlueConnection.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Glue::Crawler
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-crawler.html | AWS::Glue::Crawler}
 */
export interface GlueCrawlerProps {
  Classifiers?: any[];
  Description?: string;
  SchemaChangePolicy?: GlueCrawlerSchemaChangePolicy;
  Configuration?: string;
  RecrawlPolicy?: GlueCrawlerRecrawlPolicy;
  DatabaseName?: string;
  Targets: GlueCrawlerTargets;
  CrawlerSecurityConfiguration?: string;
  Name?: string;
  Role: string;
  Schedule?: GlueCrawlerSchedule;
  TablePrefix?: string;
  Tags?: object;
}
/**
 * Resource class for AWS::Glue::Crawler
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-crawler.html | AWS::Glue::Crawler}
 */
export class GlueCrawler extends ResourceBase<
  "AWS::Glue::Crawler",
  GlueCrawlerProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Glue::Crawler";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: GlueCrawlerProps,
    options?: ResourceOptions,
  ) {
    super(
      GlueCrawler.Type,
      GlueCrawler.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Glue::DataCatalogEncryptionSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-datacatalogencryptionsettings.html | AWS::Glue::DataCatalogEncryptionSettings}
 */
export interface GlueDataCatalogEncryptionSettingsProps {
  DataCatalogEncryptionSettings: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings;
  CatalogId: string;
}
/**
 * Resource class for AWS::Glue::DataCatalogEncryptionSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-datacatalogencryptionsettings.html | AWS::Glue::DataCatalogEncryptionSettings}
 */
export class GlueDataCatalogEncryptionSettings extends ResourceBase<
  "AWS::Glue::DataCatalogEncryptionSettings",
  GlueDataCatalogEncryptionSettingsProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Glue::DataCatalogEncryptionSettings";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: GlueDataCatalogEncryptionSettingsProps,
    options?: ResourceOptions,
  ) {
    super(
      GlueDataCatalogEncryptionSettings.Type,
      GlueDataCatalogEncryptionSettings.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Glue::DataQualityRuleset
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-dataqualityruleset.html | AWS::Glue::DataQualityRuleset}
 */
export interface GlueDataQualityRulesetProps {
  Ruleset?: string;
  Description?: string;
  TargetTable?: GlueDataQualityRulesetDataQualityTargetTable;
  ClientToken?: string;
  Tags?: object;
  Name?: string;
}
/**
 * Resource class for AWS::Glue::DataQualityRuleset
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-dataqualityruleset.html | AWS::Glue::DataQualityRuleset}
 */
export class GlueDataQualityRuleset extends ResourceBase<
  "AWS::Glue::DataQualityRuleset",
  GlueDataQualityRulesetProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Glue::DataQualityRuleset";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: GlueDataQualityRulesetProps,
    options?: ResourceOptions,
  ) {
    super(
      GlueDataQualityRuleset.Type,
      GlueDataQualityRuleset.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Glue::Database
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-database.html | AWS::Glue::Database}
 */
export interface GlueDatabaseProps {
  DatabaseInput: GlueDatabaseDatabaseInput;
  CatalogId: string;
}
/**
 * Resource class for AWS::Glue::Database
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-database.html | AWS::Glue::Database}
 */
export class GlueDatabase extends ResourceBase<
  "AWS::Glue::Database",
  GlueDatabaseProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Glue::Database";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: GlueDatabaseProps,
    options?: ResourceOptions,
  ) {
    super(
      GlueDatabase.Type,
      GlueDatabase.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Glue::DevEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-devendpoint.html | AWS::Glue::DevEndpoint}
 */
export interface GlueDevEndpointProps {
  ExtraJarsS3Path?: string;
  PublicKey?: string;
  NumberOfNodes?: number;
  Arguments?: object;
  SubnetId?: string;
  PublicKeys?: any[];
  SecurityGroupIds?: any[];
  RoleArn: string;
  WorkerType?: string;
  EndpointName?: string;
  GlueVersion?: string;
  ExtraPythonLibsS3Path?: string;
  SecurityConfiguration?: string;
  NumberOfWorkers?: number;
  Tags?: object;
}
/**
 * Resource class for AWS::Glue::DevEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-devendpoint.html | AWS::Glue::DevEndpoint}
 */
export class GlueDevEndpoint extends ResourceBase<
  "AWS::Glue::DevEndpoint",
  GlueDevEndpointProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Glue::DevEndpoint";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: GlueDevEndpointProps,
    options?: ResourceOptions,
  ) {
    super(
      GlueDevEndpoint.Type,
      GlueDevEndpoint.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Glue::Job
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html | AWS::Glue::Job}
 */
export interface GlueJobProps {
  Connections?: GlueJobConnectionsList;
  MaxRetries?: number;
  Description?: string;
  Timeout?: number;
  AllocatedCapacity?: number;
  Name?: string;
  Role: string;
  DefaultArguments?: object;
  NotificationProperty?: GlueJobNotificationProperty;
  WorkerType?: string;
  ExecutionClass?: string;
  LogUri?: string;
  Command: GlueJobJobCommand;
  GlueVersion?: string;
  ExecutionProperty?: GlueJobExecutionProperty;
  SecurityConfiguration?: string;
  NumberOfWorkers?: number;
  Tags?: object;
  MaxCapacity?: number;
  NonOverridableArguments?: object;
}
/**
 * Resource class for AWS::Glue::Job
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html | AWS::Glue::Job}
 */
export class GlueJob extends ResourceBase<
  "AWS::Glue::Job",
  GlueJobProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Glue::Job";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: GlueJobProps,
    options?: ResourceOptions,
  ) {
    super(GlueJob.Type, GlueJob.AttributeNames, logicalId, properties, options);
  }
}
/**
 * Type definition for AWS::Glue::MLTransform
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-mltransform.html | AWS::Glue::MLTransform}
 */
export interface GlueMLTransformProps {
  MaxRetries?: number;
  Description?: string;
  TransformEncryption?: GlueMLTransformTransformEncryption;
  Timeout?: number;
  Name?: string;
  Role: string;
  WorkerType?: string;
  GlueVersion?: string;
  TransformParameters: GlueMLTransformTransformParameters;
  InputRecordTables: GlueMLTransformInputRecordTables;
  NumberOfWorkers?: number;
  Tags?: object;
  MaxCapacity?: number;
}
/**
 * Resource class for AWS::Glue::MLTransform
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-mltransform.html | AWS::Glue::MLTransform}
 */
export class GlueMLTransform extends ResourceBase<
  "AWS::Glue::MLTransform",
  GlueMLTransformProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Glue::MLTransform";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: GlueMLTransformProps,
    options?: ResourceOptions,
  ) {
    super(
      GlueMLTransform.Type,
      GlueMLTransform.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Glue::Partition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-partition.html | AWS::Glue::Partition}
 */
export interface GluePartitionProps {
  TableName: string;
  DatabaseName: string;
  CatalogId: string;
  PartitionInput: GluePartitionPartitionInput;
}
/**
 * Resource class for AWS::Glue::Partition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-partition.html | AWS::Glue::Partition}
 */
export class GluePartition extends ResourceBase<
  "AWS::Glue::Partition",
  GluePartitionProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Glue::Partition";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: GluePartitionProps,
    options?: ResourceOptions,
  ) {
    super(
      GluePartition.Type,
      GluePartition.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Glue::Registry
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-registry.html | AWS::Glue::Registry}
 */
export interface GlueRegistryProps {
  Description?: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::Glue::Registry
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-registry.html | AWS::Glue::Registry}
 */
export interface GlueRegistryAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::Glue::Registry
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-registry.html | AWS::Glue::Registry}
 */
export class GlueRegistry extends ResourceBase<
  "AWS::Glue::Registry",
  GlueRegistryProps,
  GlueRegistryAttribs
> {
  public static readonly Type = "AWS::Glue::Registry";
  public static readonly AttributeNames: readonly (keyof GlueRegistryAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: GlueRegistryProps,
    options?: ResourceOptions,
  ) {
    super(
      GlueRegistry.Type,
      GlueRegistry.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Glue::Schema
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schema.html | AWS::Glue::Schema}
 */
export interface GlueSchemaProps {
  SchemaDefinition: string;
  Description?: string;
  DataFormat: string;
  Registry?: GlueSchemaRegistry;
  Compatibility: string;
  Tags?: Tag[];
  Name: string;
  CheckpointVersion?: GlueSchemaSchemaVersion;
}
/**
 * Attributes type definition for AWS::Glue::Schema
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schema.html | AWS::Glue::Schema}
 */
export interface GlueSchemaAttribs {
  InitialSchemaVersionId?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::Glue::Schema
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schema.html | AWS::Glue::Schema}
 */
export class GlueSchema extends ResourceBase<
  "AWS::Glue::Schema",
  GlueSchemaProps,
  GlueSchemaAttribs
> {
  public static readonly Type = "AWS::Glue::Schema";
  public static readonly AttributeNames: readonly (keyof GlueSchemaAttribs)[] =
    ["InitialSchemaVersionId", "Arn"];
  constructor(
    logicalId: string,
    properties: GlueSchemaProps,
    options?: ResourceOptions,
  ) {
    super(
      GlueSchema.Type,
      GlueSchema.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Glue::SchemaVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversion.html | AWS::Glue::SchemaVersion}
 */
export interface GlueSchemaVersionProps {
  SchemaDefinition: string;
  Schema: GlueSchemaVersionSchema;
}
/**
 * Attributes type definition for AWS::Glue::SchemaVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversion.html | AWS::Glue::SchemaVersion}
 */
export interface GlueSchemaVersionAttribs {
  VersionId?: string;
}
/**
 * Resource class for AWS::Glue::SchemaVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversion.html | AWS::Glue::SchemaVersion}
 */
export class GlueSchemaVersion extends ResourceBase<
  "AWS::Glue::SchemaVersion",
  GlueSchemaVersionProps,
  GlueSchemaVersionAttribs
> {
  public static readonly Type = "AWS::Glue::SchemaVersion";
  public static readonly AttributeNames: readonly (keyof GlueSchemaVersionAttribs)[] =
    ["VersionId"];
  constructor(
    logicalId: string,
    properties: GlueSchemaVersionProps,
    options?: ResourceOptions,
  ) {
    super(
      GlueSchemaVersion.Type,
      GlueSchemaVersion.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Glue::SchemaVersionMetadata
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversionmetadata.html | AWS::Glue::SchemaVersionMetadata}
 */
export interface GlueSchemaVersionMetadataProps {
  SchemaVersionId: string;
  Value: string;
  Key: string;
}
/**
 * Resource class for AWS::Glue::SchemaVersionMetadata
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversionmetadata.html | AWS::Glue::SchemaVersionMetadata}
 */
export class GlueSchemaVersionMetadata extends ResourceBase<
  "AWS::Glue::SchemaVersionMetadata",
  GlueSchemaVersionMetadataProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Glue::SchemaVersionMetadata";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: GlueSchemaVersionMetadataProps,
    options?: ResourceOptions,
  ) {
    super(
      GlueSchemaVersionMetadata.Type,
      GlueSchemaVersionMetadata.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Glue::SecurityConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-securityconfiguration.html | AWS::Glue::SecurityConfiguration}
 */
export interface GlueSecurityConfigurationProps {
  EncryptionConfiguration: GlueSecurityConfigurationEncryptionConfiguration;
  Name: string;
}
/**
 * Resource class for AWS::Glue::SecurityConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-securityconfiguration.html | AWS::Glue::SecurityConfiguration}
 */
export class GlueSecurityConfiguration extends ResourceBase<
  "AWS::Glue::SecurityConfiguration",
  GlueSecurityConfigurationProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Glue::SecurityConfiguration";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: GlueSecurityConfigurationProps,
    options?: ResourceOptions,
  ) {
    super(
      GlueSecurityConfiguration.Type,
      GlueSecurityConfiguration.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Glue::Table
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-table.html | AWS::Glue::Table}
 */
export interface GlueTableProps {
  TableInput: GlueTableTableInput;
  OpenTableFormatInput?: GlueTableOpenTableFormatInput;
  DatabaseName: string;
  CatalogId: string;
}
/**
 * Resource class for AWS::Glue::Table
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-table.html | AWS::Glue::Table}
 */
export class GlueTable extends ResourceBase<
  "AWS::Glue::Table",
  GlueTableProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Glue::Table";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: GlueTableProps,
    options?: ResourceOptions,
  ) {
    super(
      GlueTable.Type,
      GlueTable.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Glue::Trigger
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-trigger.html | AWS::Glue::Trigger}
 */
export interface GlueTriggerProps {
  Type: string;
  StartOnCreation?: boolean;
  Description?: string;
  Actions: any[];
  EventBatchingCondition?: GlueTriggerEventBatchingCondition;
  WorkflowName?: string;
  Schedule?: string;
  Tags?: object;
  Name?: string;
  Predicate?: GlueTriggerPredicate;
}
/**
 * Resource class for AWS::Glue::Trigger
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-trigger.html | AWS::Glue::Trigger}
 */
export class GlueTrigger extends ResourceBase<
  "AWS::Glue::Trigger",
  GlueTriggerProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Glue::Trigger";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: GlueTriggerProps,
    options?: ResourceOptions,
  ) {
    super(
      GlueTrigger.Type,
      GlueTrigger.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Glue::Workflow
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-workflow.html | AWS::Glue::Workflow}
 */
export interface GlueWorkflowProps {
  Description?: string;
  DefaultRunProperties?: object;
  Tags?: object;
  Name?: string;
  MaxConcurrentRuns?: number;
}
/**
 * Resource class for AWS::Glue::Workflow
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-workflow.html | AWS::Glue::Workflow}
 */
export class GlueWorkflow extends ResourceBase<
  "AWS::Glue::Workflow",
  GlueWorkflowProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Glue::Workflow";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: GlueWorkflowProps,
    options?: ResourceOptions,
  ) {
    super(
      GlueWorkflow.Type,
      GlueWorkflow.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
