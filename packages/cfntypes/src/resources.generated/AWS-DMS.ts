import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::DMS::Endpoint.DocDbSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-docdbsettings.html | AWS::DMS::Endpoint.DocDbSettings}
 */
export interface DMSEndpointDocDbSettings {
  DocsToInvestigate?: number;
  ExtractDocId?: boolean;
  SecretsManagerSecretId?: string;
  SecretsManagerAccessRoleArn?: string;
  NestingLevel?: string;
}
/**
 * Type definition for AWS::DMS::Endpoint.DynamoDbSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-dynamodbsettings.html | AWS::DMS::Endpoint.DynamoDbSettings}
 */
export interface DMSEndpointDynamoDbSettings {
  ServiceAccessRoleArn?: string;
}
/**
 * Type definition for AWS::DMS::Endpoint.ElasticsearchSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-elasticsearchsettings.html | AWS::DMS::Endpoint.ElasticsearchSettings}
 */
export interface DMSEndpointElasticsearchSettings {
  EndpointUri?: string;
  FullLoadErrorPercentage?: number;
  ErrorRetryDuration?: number;
  ServiceAccessRoleArn?: string;
}
/**
 * Type definition for AWS::DMS::Endpoint.GcpMySQLSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-gcpmysqlsettings.html | AWS::DMS::Endpoint.GcpMySQLSettings}
 */
export interface DMSEndpointGcpMySQLSettings {
  AfterConnectScript?: string;
  Port?: number;
  DatabaseName?: string;
  CleanSourceMetadataOnMismatch?: boolean;
  ServerTimezone?: string;
  EventsPollInterval?: number;
  ParallelLoadThreads?: number;
  Username?: string;
  MaxFileSize?: number;
  ServerName?: string;
  SecretsManagerSecretId?: string;
  SecretsManagerAccessRoleArn?: string;
  Password?: string;
}
/**
 * Type definition for AWS::DMS::Endpoint.IbmDb2Settings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-ibmdb2settings.html | AWS::DMS::Endpoint.IbmDb2Settings}
 */
export interface DMSEndpointIbmDb2Settings {
  SetDataCaptureChanges?: boolean;
  CurrentLsn?: string;
  MaxKBytesPerRead?: number;
  SecretsManagerSecretId?: string;
  SecretsManagerAccessRoleArn?: string;
}
/**
 * Type definition for AWS::DMS::Endpoint.KafkaSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-kafkasettings.html | AWS::DMS::Endpoint.KafkaSettings}
 */
export interface DMSEndpointKafkaSettings {
  Broker?: string;
  SaslPassword?: string;
  MessageFormat?: string;
  SslClientCertificateArn?: string;
  IncludeTransactionDetails?: boolean;
  SecurityProtocol?: string;
  IncludeTableAlterOperations?: boolean;
  SslCaCertificateArn?: string;
  IncludeControlDetails?: boolean;
  IncludePartitionValue?: boolean;
  NoHexPrefix?: boolean;
  SslClientKeyArn?: string;
  SslClientKeyPassword?: string;
  SaslUserName?: string;
  MessageMaxBytes?: number;
  Topic?: string;
  PartitionIncludeSchemaTable?: boolean;
  IncludeNullAndEmpty?: boolean;
}
/**
 * Type definition for AWS::DMS::Endpoint.KinesisSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-kinesissettings.html | AWS::DMS::Endpoint.KinesisSettings}
 */
export interface DMSEndpointKinesisSettings {
  MessageFormat?: string;
  IncludeTransactionDetails?: boolean;
  IncludeTableAlterOperations?: boolean;
  IncludeControlDetails?: boolean;
  IncludePartitionValue?: boolean;
  StreamArn?: string;
  ServiceAccessRoleArn?: string;
  NoHexPrefix?: boolean;
  PartitionIncludeSchemaTable?: boolean;
  IncludeNullAndEmpty?: boolean;
}
/**
 * Type definition for AWS::DMS::Endpoint.MicrosoftSqlServerSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-microsoftsqlserversettings.html | AWS::DMS::Endpoint.MicrosoftSqlServerSettings}
 */
export interface DMSEndpointMicrosoftSqlServerSettings {
  ReadBackupOnly?: boolean;
  TlogAccessMode?: string;
  BcpPacketSize?: number;
  Port?: number;
  SafeguardPolicy?: string;
  UseThirdPartyBackupDevice?: boolean;
  DatabaseName?: string;
  UseBcpFullLoad?: boolean;
  Username?: string;
  QuerySingleAlwaysOnNode?: boolean;
  ServerName?: string;
  SecretsManagerSecretId?: string;
  ControlTablesFileGroup?: string;
  ForceLobLookup?: boolean;
  SecretsManagerAccessRoleArn?: string;
  TrimSpaceInChar?: boolean;
  Password?: string;
}
/**
 * Type definition for AWS::DMS::Endpoint.MongoDbSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mongodbsettings.html | AWS::DMS::Endpoint.MongoDbSettings}
 */
export interface DMSEndpointMongoDbSettings {
  Port?: number;
  ExtractDocId?: string;
  DatabaseName?: string;
  AuthSource?: string;
  AuthMechanism?: string;
  Username?: string;
  DocsToInvestigate?: string;
  ServerName?: string;
  SecretsManagerSecretId?: string;
  AuthType?: string;
  SecretsManagerAccessRoleArn?: string;
  Password?: string;
  NestingLevel?: string;
}
/**
 * Type definition for AWS::DMS::Endpoint.MySqlSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mysqlsettings.html | AWS::DMS::Endpoint.MySqlSettings}
 */
export interface DMSEndpointMySqlSettings {
  ServerTimezone?: string;
  EventsPollInterval?: number;
  ParallelLoadThreads?: number;
  AfterConnectScript?: string;
  MaxFileSize?: number;
  TargetDbType?: string;
  SecretsManagerSecretId?: string;
  SecretsManagerAccessRoleArn?: string;
  CleanSourceMetadataOnMismatch?: boolean;
}
/**
 * Type definition for AWS::DMS::Endpoint.NeptuneSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-neptunesettings.html | AWS::DMS::Endpoint.NeptuneSettings}
 */
export interface DMSEndpointNeptuneSettings {
  MaxRetryCount?: number;
  MaxFileSize?: number;
  S3BucketFolder?: string;
  ErrorRetryDuration?: number;
  IamAuthEnabled?: boolean;
  S3BucketName?: string;
  ServiceAccessRoleArn?: string;
}
/**
 * Type definition for AWS::DMS::Endpoint.OracleSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html | AWS::DMS::Endpoint.OracleSettings}
 */
export interface DMSEndpointOracleSettings {
  AsmPassword?: string;
  DirectPathParallelLoad?: boolean;
  AdditionalArchivedLogDestId?: number;
  SpatialDataOptionToGeoJsonFunctionName?: string;
  ReplacePathPrefix?: boolean;
  FailTasksOnLobTruncation?: boolean;
  AsmServer?: string;
  SecretsManagerOracleAsmAccessRoleArn?: string;
  OraclePathPrefix?: string;
  ReadAheadBlocks?: number;
  StandbyDelayTime?: number;
  AllowSelectNestedTables?: boolean;
  AddSupplementalLogging?: boolean;
  SecretsManagerSecretId?: string;
  UseBFile?: boolean;
  EnableHomogenousTablespace?: boolean;
  AsmUser?: string;
  UseDirectPathFullLoad?: boolean;
  SecurityDbEncryption?: string;
  ParallelAsmReadThreads?: number;
  ArchivedLogDestId?: number;
  UsePathPrefix?: string;
  UseLogminerReader?: boolean;
  SecurityDbEncryptionName?: string;
  DirectPathNoLog?: boolean;
  SecretsManagerOracleAsmSecretId?: string;
  CharLengthSemantics?: string;
  NumberDatatypeScale?: number;
  ReadTableSpaceName?: boolean;
  AccessAlternateDirectly?: boolean;
  UseAlternateFolderForOnline?: boolean;
  ArchivedLogsOnly?: boolean;
  ExtraArchivedLogDestIds?: any[];
  RetryInterval?: number;
  SecretsManagerAccessRoleArn?: string;
}
/**
 * Type definition for AWS::DMS::Endpoint.PostgreSqlSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html | AWS::DMS::Endpoint.PostgreSqlSettings}
 */
export interface DMSEndpointPostgreSqlSettings {
  PluginName?: string;
  MapBooleanAsBoolean?: boolean;
  AfterConnectScript?: string;
  ExecuteTimeout?: number;
  DdlArtifactsSchema?: string;
  FailTasksOnLobTruncation?: boolean;
  HeartbeatEnable?: boolean;
  BabelfishDatabaseName?: string;
  DatabaseMode?: string;
  CaptureDdls?: boolean;
  MaxFileSize?: number;
  HeartbeatFrequency?: number;
  SecretsManagerSecretId?: string;
  SecretsManagerAccessRoleArn?: string;
  HeartbeatSchema?: string;
  SlotName?: string;
}
/**
 * Type definition for AWS::DMS::Endpoint.RedisSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redissettings.html | AWS::DMS::Endpoint.RedisSettings}
 */
export interface DMSEndpointRedisSettings {
  SslSecurityProtocol?: string;
  AuthUserName?: string;
  ServerName?: string;
  Port?: number;
  SslCaCertificateArn?: string;
  AuthPassword?: string;
  AuthType?: string;
}
/**
 * Type definition for AWS::DMS::Endpoint.RedshiftSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html | AWS::DMS::Endpoint.RedshiftSettings}
 */
export interface DMSEndpointRedshiftSettings {
  ConnectionTimeout?: number;
  MapBooleanAsBoolean?: boolean;
  AfterConnectScript?: string;
  FileTransferUploadStreams?: number;
  BucketName?: string;
  ServerSideEncryptionKmsKeyId?: string;
  ExplicitIds?: boolean;
  SecretsManagerSecretId?: string;
  TruncateColumns?: boolean;
  ServiceAccessRoleArn?: string;
  ReplaceChars?: string;
  TimeFormat?: string;
  BucketFolder?: string;
  ReplaceInvalidChars?: string;
  RemoveQuotes?: boolean;
  LoadTimeout?: number;
  MaxFileSize?: number;
  TrimBlanks?: boolean;
  DateFormat?: string;
  CompUpdate?: boolean;
  AcceptAnyDate?: boolean;
  WriteBufferSize?: number;
  SecretsManagerAccessRoleArn?: string;
  CaseSensitiveNames?: boolean;
  EmptyAsNull?: boolean;
  EncryptionMode?: string;
}
/**
 * Type definition for AWS::DMS::Endpoint.S3Settings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html | AWS::DMS::Endpoint.S3Settings}
 */
export interface DMSEndpointS3Settings {
  TimestampColumnName?: string;
  EnableStatistics?: boolean;
  DatePartitionSequence?: string;
  IncludeOpForFullLoad?: boolean;
  CsvNullValue?: string;
  CdcInsertsAndUpdates?: boolean;
  BucketName?: string;
  ServerSideEncryptionKmsKeyId?: string;
  UseTaskStartTimeForFullLoadTimestamp?: boolean;
  DataFormat?: string;
  CsvDelimiter?: string;
  IgnoreHeaderRows?: number;
  CannedAclForObjects?: string;
  Rfc4180?: boolean;
  ServiceAccessRoleArn?: string;
  ParquetTimestampInMillisecond?: boolean;
  PreserveTransactions?: boolean;
  BucketFolder?: string;
  DatePartitionDelimiter?: string;
  EncodingType?: string;
  ParquetVersion?: string;
  AddColumnName?: boolean;
  CdcMinFileSize?: number;
  ExternalTableDefinition?: string;
  UseCsvNoSupValue?: boolean;
  MaxFileSize?: number;
  CsvNoSupValue?: string;
  CdcPath?: string;
  CsvRowDelimiter?: string;
  RowGroupLength?: number;
  CdcMaxBatchInterval?: number;
  DataPageSize?: number;
  DictPageSizeLimit?: number;
  DatePartitionEnabled?: boolean;
  CompressionType?: string;
  DatePartitionTimezone?: string;
  CdcInsertsOnly?: boolean;
  EncryptionMode?: string;
}
/**
 * Type definition for AWS::DMS::Endpoint.SybaseSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-sybasesettings.html | AWS::DMS::Endpoint.SybaseSettings}
 */
export interface DMSEndpointSybaseSettings {
  SecretsManagerSecretId?: string;
  SecretsManagerAccessRoleArn?: string;
}
/**
 * Type definition for AWS::DMS::ReplicationConfig.ComputeConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-replicationconfig-computeconfig.html | AWS::DMS::ReplicationConfig.ComputeConfig}
 */
export interface DMSReplicationConfigComputeConfig {
  DnsNameServers?: string;
  KmsKeyId?: string;
  VpcSecurityGroupIds?: any[];
  MaxCapacityUnits: number;
  ReplicationSubnetGroupId?: string;
  AvailabilityZone?: string;
  PreferredMaintenanceWindow?: string;
  MinCapacityUnits?: number;
  MultiAZ?: boolean;
}
/**
 * Type definition for AWS::DMS::Certificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-certificate.html | AWS::DMS::Certificate}
 */
export interface DMSCertificateProps {
  CertificateIdentifier?: string;
  CertificatePem?: string;
  CertificateWallet?: string;
}
/**
 * Resource class for AWS::DMS::Certificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-certificate.html | AWS::DMS::Certificate}
 */
export class DMSCertificate extends ResourceBase<
  "AWS::DMS::Certificate",
  DMSCertificateProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::DMS::Certificate";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: DMSCertificateProps,
    options?: ResourceOptions,
  ) {
    super(
      DMSCertificate.Type,
      DMSCertificate.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::DMS::Endpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html | AWS::DMS::Endpoint}
 */
export interface DMSEndpointProps {
  SybaseSettings?: DMSEndpointSybaseSettings;
  RedisSettings?: DMSEndpointRedisSettings;
  OracleSettings?: DMSEndpointOracleSettings;
  KafkaSettings?: DMSEndpointKafkaSettings;
  Port?: number;
  MySqlSettings?: DMSEndpointMySqlSettings;
  S3Settings?: DMSEndpointS3Settings;
  ResourceIdentifier?: string;
  KinesisSettings?: DMSEndpointKinesisSettings;
  SslMode?: string;
  RedshiftSettings?: DMSEndpointRedshiftSettings;
  EndpointType: string;
  Tags?: Tag[];
  Password?: string;
  MongoDbSettings?: DMSEndpointMongoDbSettings;
  IbmDb2Settings?: DMSEndpointIbmDb2Settings;
  KmsKeyId?: string;
  DatabaseName?: string;
  NeptuneSettings?: DMSEndpointNeptuneSettings;
  ElasticsearchSettings?: DMSEndpointElasticsearchSettings;
  EngineName: string;
  DocDbSettings?: DMSEndpointDocDbSettings;
  DynamoDbSettings?: DMSEndpointDynamoDbSettings;
  Username?: string;
  MicrosoftSqlServerSettings?: DMSEndpointMicrosoftSqlServerSettings;
  GcpMySQLSettings?: DMSEndpointGcpMySQLSettings;
  ServerName?: string;
  ExtraConnectionAttributes?: string;
  EndpointIdentifier?: string;
  CertificateArn?: string;
  PostgreSqlSettings?: DMSEndpointPostgreSqlSettings;
}
/**
 * Attributes type definition for AWS::DMS::Endpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html | AWS::DMS::Endpoint}
 */
export interface DMSEndpointAttribs {
  ExternalId?: string;
}
/**
 * Resource class for AWS::DMS::Endpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html | AWS::DMS::Endpoint}
 */
export class DMSEndpoint extends ResourceBase<
  "AWS::DMS::Endpoint",
  DMSEndpointProps,
  DMSEndpointAttribs
> {
  public static readonly Type = "AWS::DMS::Endpoint";
  public static readonly AttributeNames: readonly (keyof DMSEndpointAttribs)[] =
    ["ExternalId"];
  constructor(
    logicalId: string,
    properties: DMSEndpointProps,
    options?: ResourceOptions,
  ) {
    super(
      DMSEndpoint.Type,
      DMSEndpoint.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::DMS::EventSubscription
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-eventsubscription.html | AWS::DMS::EventSubscription}
 */
export interface DMSEventSubscriptionProps {
  SourceType?: string;
  EventCategories?: any[];
  Enabled?: boolean;
  SubscriptionName?: string;
  SnsTopicArn: string;
  SourceIds?: any[];
  Tags?: Tag[];
}
/**
 * Resource class for AWS::DMS::EventSubscription
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-eventsubscription.html | AWS::DMS::EventSubscription}
 */
export class DMSEventSubscription extends ResourceBase<
  "AWS::DMS::EventSubscription",
  DMSEventSubscriptionProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::DMS::EventSubscription";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: DMSEventSubscriptionProps,
    options?: ResourceOptions,
  ) {
    super(
      DMSEventSubscription.Type,
      DMSEventSubscription.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::DMS::ReplicationConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationconfig.html | AWS::DMS::ReplicationConfig}
 */
export interface DMSReplicationConfigProps {
  ReplicationSettings?: object;
  ResourceIdentifier?: string;
  ReplicationConfigIdentifier?: string;
  ComputeConfig?: DMSReplicationConfigComputeConfig;
  ReplicationType?: string;
  TableMappings?: object;
  SourceEndpointArn?: string;
  ReplicationConfigArn?: string;
  SupplementalSettings?: object;
  TargetEndpointArn?: string;
  Tags?: Tag[];
}
/**
 * Resource class for AWS::DMS::ReplicationConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationconfig.html | AWS::DMS::ReplicationConfig}
 */
export class DMSReplicationConfig extends ResourceBase<
  "AWS::DMS::ReplicationConfig",
  DMSReplicationConfigProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::DMS::ReplicationConfig";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: DMSReplicationConfigProps,
    options?: ResourceOptions,
  ) {
    super(
      DMSReplicationConfig.Type,
      DMSReplicationConfig.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::DMS::ReplicationInstance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html | AWS::DMS::ReplicationInstance}
 */
export interface DMSReplicationInstanceProps {
  ReplicationInstanceIdentifier?: string;
  EngineVersion?: string;
  KmsKeyId?: string;
  AvailabilityZone?: string;
  PreferredMaintenanceWindow?: string;
  AutoMinorVersionUpgrade?: boolean;
  ReplicationSubnetGroupIdentifier?: string;
  AllocatedStorage?: number;
  ResourceIdentifier?: string;
  VpcSecurityGroupIds?: any[];
  AllowMajorVersionUpgrade?: boolean;
  ReplicationInstanceClass: string;
  PubliclyAccessible?: boolean;
  MultiAZ?: boolean;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::DMS::ReplicationInstance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html | AWS::DMS::ReplicationInstance}
 */
export interface DMSReplicationInstanceAttribs {
  ReplicationInstancePublicIpAddresses?: string;
  ReplicationInstancePrivateIpAddresses?: string;
}
/**
 * Resource class for AWS::DMS::ReplicationInstance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html | AWS::DMS::ReplicationInstance}
 */
export class DMSReplicationInstance extends ResourceBase<
  "AWS::DMS::ReplicationInstance",
  DMSReplicationInstanceProps,
  DMSReplicationInstanceAttribs
> {
  public static readonly Type = "AWS::DMS::ReplicationInstance";
  public static readonly AttributeNames: readonly (keyof DMSReplicationInstanceAttribs)[] =
    [
      "ReplicationInstancePublicIpAddresses",
      "ReplicationInstancePrivateIpAddresses",
    ];
  constructor(
    logicalId: string,
    properties: DMSReplicationInstanceProps,
    options?: ResourceOptions,
  ) {
    super(
      DMSReplicationInstance.Type,
      DMSReplicationInstance.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::DMS::ReplicationSubnetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationsubnetgroup.html | AWS::DMS::ReplicationSubnetGroup}
 */
export interface DMSReplicationSubnetGroupProps {
  ReplicationSubnetGroupDescription: string;
  ReplicationSubnetGroupIdentifier?: string;
  SubnetIds: any[];
  Tags?: Tag[];
}
/**
 * Resource class for AWS::DMS::ReplicationSubnetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationsubnetgroup.html | AWS::DMS::ReplicationSubnetGroup}
 */
export class DMSReplicationSubnetGroup extends ResourceBase<
  "AWS::DMS::ReplicationSubnetGroup",
  DMSReplicationSubnetGroupProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::DMS::ReplicationSubnetGroup";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: DMSReplicationSubnetGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      DMSReplicationSubnetGroup.Type,
      DMSReplicationSubnetGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::DMS::ReplicationTask
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationtask.html | AWS::DMS::ReplicationTask}
 */
export interface DMSReplicationTaskProps {
  ReplicationTaskSettings?: string;
  CdcStartPosition?: string;
  CdcStopPosition?: string;
  MigrationType: string;
  TargetEndpointArn: string;
  ReplicationInstanceArn: string;
  TaskData?: string;
  CdcStartTime?: number;
  ResourceIdentifier?: string;
  TableMappings: string;
  ReplicationTaskIdentifier?: string;
  SourceEndpointArn: string;
  Tags?: Tag[];
}
/**
 * Resource class for AWS::DMS::ReplicationTask
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationtask.html | AWS::DMS::ReplicationTask}
 */
export class DMSReplicationTask extends ResourceBase<
  "AWS::DMS::ReplicationTask",
  DMSReplicationTaskProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::DMS::ReplicationTask";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: DMSReplicationTaskProps,
    options?: ResourceOptions,
  ) {
    super(
      DMSReplicationTask.Type,
      DMSReplicationTask.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
