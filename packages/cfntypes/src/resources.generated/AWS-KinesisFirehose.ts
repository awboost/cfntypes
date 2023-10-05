import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.AmazonOpenSearchServerlessBufferingHints
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessbufferinghints.html | AWS::KinesisFirehose::DeliveryStream.AmazonOpenSearchServerlessBufferingHints}
 */
export interface KinesisFirehoseDeliveryStreamAmazonOpenSearchServerlessBufferingHints {
  IntervalInSeconds?: number;
  SizeInMBs?: number;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.AmazonOpenSearchServerlessDestinationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration.html | AWS::KinesisFirehose::DeliveryStream.AmazonOpenSearchServerlessDestinationConfiguration}
 */
export interface KinesisFirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfiguration {
  IndexName: string;
  S3Configuration: KinesisFirehoseDeliveryStreamS3DestinationConfiguration;
  BufferingHints?: KinesisFirehoseDeliveryStreamAmazonOpenSearchServerlessBufferingHints;
  RetryOptions?: KinesisFirehoseDeliveryStreamAmazonOpenSearchServerlessRetryOptions;
  CollectionEndpoint?: string;
  VpcConfiguration?: KinesisFirehoseDeliveryStreamVpcConfiguration;
  ProcessingConfiguration?: KinesisFirehoseDeliveryStreamProcessingConfiguration;
  CloudWatchLoggingOptions?: KinesisFirehoseDeliveryStreamCloudWatchLoggingOptions;
  RoleARN: string;
  S3BackupMode?: string;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.AmazonOpenSearchServerlessRetryOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessretryoptions.html | AWS::KinesisFirehose::DeliveryStream.AmazonOpenSearchServerlessRetryOptions}
 */
export interface KinesisFirehoseDeliveryStreamAmazonOpenSearchServerlessRetryOptions {
  DurationInSeconds?: number;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.AmazonopensearchserviceBufferingHints
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchservicebufferinghints.html | AWS::KinesisFirehose::DeliveryStream.AmazonopensearchserviceBufferingHints}
 */
export interface KinesisFirehoseDeliveryStreamAmazonopensearchserviceBufferingHints {
  IntervalInSeconds?: number;
  SizeInMBs?: number;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.AmazonopensearchserviceDestinationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration.html | AWS::KinesisFirehose::DeliveryStream.AmazonopensearchserviceDestinationConfiguration}
 */
export interface KinesisFirehoseDeliveryStreamAmazonopensearchserviceDestinationConfiguration {
  TypeName?: string;
  IndexRotationPeriod?: string;
  ProcessingConfiguration?: KinesisFirehoseDeliveryStreamProcessingConfiguration;
  ClusterEndpoint?: string;
  DomainARN?: string;
  RoleARN: string;
  S3BackupMode?: string;
  IndexName: string;
  DocumentIdOptions?: KinesisFirehoseDeliveryStreamDocumentIdOptions;
  S3Configuration: KinesisFirehoseDeliveryStreamS3DestinationConfiguration;
  BufferingHints?: KinesisFirehoseDeliveryStreamAmazonopensearchserviceBufferingHints;
  RetryOptions?: KinesisFirehoseDeliveryStreamAmazonopensearchserviceRetryOptions;
  VpcConfiguration?: KinesisFirehoseDeliveryStreamVpcConfiguration;
  CloudWatchLoggingOptions?: KinesisFirehoseDeliveryStreamCloudWatchLoggingOptions;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.AmazonopensearchserviceRetryOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchserviceretryoptions.html | AWS::KinesisFirehose::DeliveryStream.AmazonopensearchserviceRetryOptions}
 */
export interface KinesisFirehoseDeliveryStreamAmazonopensearchserviceRetryOptions {
  DurationInSeconds?: number;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.AuthenticationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-authenticationconfiguration.html | AWS::KinesisFirehose::DeliveryStream.AuthenticationConfiguration}
 */
export interface KinesisFirehoseDeliveryStreamAuthenticationConfiguration {
  Connectivity: string;
  RoleARN: string;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.BufferingHints
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-bufferinghints.html | AWS::KinesisFirehose::DeliveryStream.BufferingHints}
 */
export interface KinesisFirehoseDeliveryStreamBufferingHints {
  IntervalInSeconds?: number;
  SizeInMBs?: number;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.CloudWatchLoggingOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-cloudwatchloggingoptions.html | AWS::KinesisFirehose::DeliveryStream.CloudWatchLoggingOptions}
 */
export interface KinesisFirehoseDeliveryStreamCloudWatchLoggingOptions {
  LogStreamName?: string;
  Enabled?: boolean;
  LogGroupName?: string;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.CopyCommand
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-copycommand.html | AWS::KinesisFirehose::DeliveryStream.CopyCommand}
 */
export interface KinesisFirehoseDeliveryStreamCopyCommand {
  DataTableName: string;
  CopyOptions?: string;
  DataTableColumns?: string;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.DataFormatConversionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-dataformatconversionconfiguration.html | AWS::KinesisFirehose::DeliveryStream.DataFormatConversionConfiguration}
 */
export interface KinesisFirehoseDeliveryStreamDataFormatConversionConfiguration {
  InputFormatConfiguration?: KinesisFirehoseDeliveryStreamInputFormatConfiguration;
  Enabled?: boolean;
  SchemaConfiguration?: KinesisFirehoseDeliveryStreamSchemaConfiguration;
  OutputFormatConfiguration?: KinesisFirehoseDeliveryStreamOutputFormatConfiguration;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.DeliveryStreamEncryptionConfigurationInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-deliverystreamencryptionconfigurationinput.html | AWS::KinesisFirehose::DeliveryStream.DeliveryStreamEncryptionConfigurationInput}
 */
export interface KinesisFirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInput {
  KeyType: string;
  KeyARN?: string;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.Deserializer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-deserializer.html | AWS::KinesisFirehose::DeliveryStream.Deserializer}
 */
export interface KinesisFirehoseDeliveryStreamDeserializer {
  HiveJsonSerDe?: KinesisFirehoseDeliveryStreamHiveJsonSerDe;
  OpenXJsonSerDe?: KinesisFirehoseDeliveryStreamOpenXJsonSerDe;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.DocumentIdOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-documentidoptions.html | AWS::KinesisFirehose::DeliveryStream.DocumentIdOptions}
 */
export interface KinesisFirehoseDeliveryStreamDocumentIdOptions {
  DefaultDocumentIdFormat: string;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.DynamicPartitioningConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-dynamicpartitioningconfiguration.html | AWS::KinesisFirehose::DeliveryStream.DynamicPartitioningConfiguration}
 */
export interface KinesisFirehoseDeliveryStreamDynamicPartitioningConfiguration {
  Enabled?: boolean;
  RetryOptions?: KinesisFirehoseDeliveryStreamRetryOptions;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.ElasticsearchBufferingHints
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-elasticsearchbufferinghints.html | AWS::KinesisFirehose::DeliveryStream.ElasticsearchBufferingHints}
 */
export interface KinesisFirehoseDeliveryStreamElasticsearchBufferingHints {
  IntervalInSeconds?: number;
  SizeInMBs?: number;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.ElasticsearchDestinationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration.html | AWS::KinesisFirehose::DeliveryStream.ElasticsearchDestinationConfiguration}
 */
export interface KinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration {
  TypeName?: string;
  IndexRotationPeriod?: string;
  ProcessingConfiguration?: KinesisFirehoseDeliveryStreamProcessingConfiguration;
  ClusterEndpoint?: string;
  DomainARN?: string;
  RoleARN: string;
  S3BackupMode?: string;
  IndexName: string;
  DocumentIdOptions?: KinesisFirehoseDeliveryStreamDocumentIdOptions;
  S3Configuration: KinesisFirehoseDeliveryStreamS3DestinationConfiguration;
  BufferingHints?: KinesisFirehoseDeliveryStreamElasticsearchBufferingHints;
  RetryOptions?: KinesisFirehoseDeliveryStreamElasticsearchRetryOptions;
  VpcConfiguration?: KinesisFirehoseDeliveryStreamVpcConfiguration;
  CloudWatchLoggingOptions?: KinesisFirehoseDeliveryStreamCloudWatchLoggingOptions;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.ElasticsearchRetryOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-elasticsearchretryoptions.html | AWS::KinesisFirehose::DeliveryStream.ElasticsearchRetryOptions}
 */
export interface KinesisFirehoseDeliveryStreamElasticsearchRetryOptions {
  DurationInSeconds?: number;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.EncryptionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-encryptionconfiguration.html | AWS::KinesisFirehose::DeliveryStream.EncryptionConfiguration}
 */
export interface KinesisFirehoseDeliveryStreamEncryptionConfiguration {
  KMSEncryptionConfig?: KinesisFirehoseDeliveryStreamKMSEncryptionConfig;
  NoEncryptionConfig?: string;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.ExtendedS3DestinationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-extendeds3destinationconfiguration.html | AWS::KinesisFirehose::DeliveryStream.ExtendedS3DestinationConfiguration}
 */
export interface KinesisFirehoseDeliveryStreamExtendedS3DestinationConfiguration {
  ErrorOutputPrefix?: string;
  S3BackupConfiguration?: KinesisFirehoseDeliveryStreamS3DestinationConfiguration;
  BucketARN: string;
  CompressionFormat?: string;
  DataFormatConversionConfiguration?: KinesisFirehoseDeliveryStreamDataFormatConversionConfiguration;
  EncryptionConfiguration?: KinesisFirehoseDeliveryStreamEncryptionConfiguration;
  DynamicPartitioningConfiguration?: KinesisFirehoseDeliveryStreamDynamicPartitioningConfiguration;
  Prefix?: string;
  ProcessingConfiguration?: KinesisFirehoseDeliveryStreamProcessingConfiguration;
  RoleARN: string;
  S3BackupMode?: string;
  BufferingHints?: KinesisFirehoseDeliveryStreamBufferingHints;
  CloudWatchLoggingOptions?: KinesisFirehoseDeliveryStreamCloudWatchLoggingOptions;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.HiveJsonSerDe
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-hivejsonserde.html | AWS::KinesisFirehose::DeliveryStream.HiveJsonSerDe}
 */
export interface KinesisFirehoseDeliveryStreamHiveJsonSerDe {
  TimestampFormats?: any[];
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.HttpEndpointCommonAttribute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-httpendpointcommonattribute.html | AWS::KinesisFirehose::DeliveryStream.HttpEndpointCommonAttribute}
 */
export interface KinesisFirehoseDeliveryStreamHttpEndpointCommonAttribute {
  AttributeValue: string;
  AttributeName: string;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.HttpEndpointConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-httpendpointconfiguration.html | AWS::KinesisFirehose::DeliveryStream.HttpEndpointConfiguration}
 */
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfiguration {
  AccessKey?: string;
  Url: string;
  Name?: string;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.HttpEndpointDestinationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration.html | AWS::KinesisFirehose::DeliveryStream.HttpEndpointDestinationConfiguration}
 */
export interface KinesisFirehoseDeliveryStreamHttpEndpointDestinationConfiguration {
  RequestConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointRequestConfiguration;
  S3Configuration: KinesisFirehoseDeliveryStreamS3DestinationConfiguration;
  BufferingHints?: KinesisFirehoseDeliveryStreamBufferingHints;
  RetryOptions?: KinesisFirehoseDeliveryStreamRetryOptions;
  EndpointConfiguration: KinesisFirehoseDeliveryStreamHttpEndpointConfiguration;
  ProcessingConfiguration?: KinesisFirehoseDeliveryStreamProcessingConfiguration;
  RoleARN?: string;
  CloudWatchLoggingOptions?: KinesisFirehoseDeliveryStreamCloudWatchLoggingOptions;
  S3BackupMode?: string;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.HttpEndpointRequestConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-httpendpointrequestconfiguration.html | AWS::KinesisFirehose::DeliveryStream.HttpEndpointRequestConfiguration}
 */
export interface KinesisFirehoseDeliveryStreamHttpEndpointRequestConfiguration {
  CommonAttributes?: any[];
  ContentEncoding?: string;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.InputFormatConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-inputformatconfiguration.html | AWS::KinesisFirehose::DeliveryStream.InputFormatConfiguration}
 */
export interface KinesisFirehoseDeliveryStreamInputFormatConfiguration {
  Deserializer?: KinesisFirehoseDeliveryStreamDeserializer;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.KMSEncryptionConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-kmsencryptionconfig.html | AWS::KinesisFirehose::DeliveryStream.KMSEncryptionConfig}
 */
export interface KinesisFirehoseDeliveryStreamKMSEncryptionConfig {
  AWSKMSKeyARN: string;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.KinesisStreamSourceConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-kinesisstreamsourceconfiguration.html | AWS::KinesisFirehose::DeliveryStream.KinesisStreamSourceConfiguration}
 */
export interface KinesisFirehoseDeliveryStreamKinesisStreamSourceConfiguration {
  KinesisStreamARN: string;
  RoleARN: string;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.MSKSourceConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-msksourceconfiguration.html | AWS::KinesisFirehose::DeliveryStream.MSKSourceConfiguration}
 */
export interface KinesisFirehoseDeliveryStreamMSKSourceConfiguration {
  AuthenticationConfiguration: KinesisFirehoseDeliveryStreamAuthenticationConfiguration;
  MSKClusterARN: string;
  TopicName: string;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.OpenXJsonSerDe
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-openxjsonserde.html | AWS::KinesisFirehose::DeliveryStream.OpenXJsonSerDe}
 */
export interface KinesisFirehoseDeliveryStreamOpenXJsonSerDe {
  ConvertDotsInJsonKeysToUnderscores?: boolean;
  ColumnToJsonKeyMappings?: Record<string, any>;
  CaseInsensitive?: boolean;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.OrcSerDe
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-orcserde.html | AWS::KinesisFirehose::DeliveryStream.OrcSerDe}
 */
export interface KinesisFirehoseDeliveryStreamOrcSerDe {
  PaddingTolerance?: number;
  Compression?: string;
  StripeSizeBytes?: number;
  BloomFilterColumns?: any[];
  BloomFilterFalsePositiveProbability?: number;
  EnablePadding?: boolean;
  FormatVersion?: string;
  RowIndexStride?: number;
  BlockSizeBytes?: number;
  DictionaryKeyThreshold?: number;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.OutputFormatConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-outputformatconfiguration.html | AWS::KinesisFirehose::DeliveryStream.OutputFormatConfiguration}
 */
export interface KinesisFirehoseDeliveryStreamOutputFormatConfiguration {
  Serializer?: KinesisFirehoseDeliveryStreamSerializer;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.ParquetSerDe
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-parquetserde.html | AWS::KinesisFirehose::DeliveryStream.ParquetSerDe}
 */
export interface KinesisFirehoseDeliveryStreamParquetSerDe {
  Compression?: string;
  BlockSizeBytes?: number;
  EnableDictionaryCompression?: boolean;
  PageSizeBytes?: number;
  MaxPaddingBytes?: number;
  WriterVersion?: string;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.ProcessingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-processingconfiguration.html | AWS::KinesisFirehose::DeliveryStream.ProcessingConfiguration}
 */
export interface KinesisFirehoseDeliveryStreamProcessingConfiguration {
  Enabled?: boolean;
  Processors?: any[];
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.Processor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-processor.html | AWS::KinesisFirehose::DeliveryStream.Processor}
 */
export interface KinesisFirehoseDeliveryStreamProcessor {
  Type: string;
  Parameters?: any[];
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.ProcessorParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-processorparameter.html | AWS::KinesisFirehose::DeliveryStream.ProcessorParameter}
 */
export interface KinesisFirehoseDeliveryStreamProcessorParameter {
  ParameterValue: string;
  ParameterName: string;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.RedshiftDestinationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-redshiftdestinationconfiguration.html | AWS::KinesisFirehose::DeliveryStream.RedshiftDestinationConfiguration}
 */
export interface KinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration {
  S3BackupConfiguration?: KinesisFirehoseDeliveryStreamS3DestinationConfiguration;
  S3Configuration: KinesisFirehoseDeliveryStreamS3DestinationConfiguration;
  Username: string;
  CopyCommand: KinesisFirehoseDeliveryStreamCopyCommand;
  RetryOptions?: KinesisFirehoseDeliveryStreamRedshiftRetryOptions;
  ProcessingConfiguration?: KinesisFirehoseDeliveryStreamProcessingConfiguration;
  CloudWatchLoggingOptions?: KinesisFirehoseDeliveryStreamCloudWatchLoggingOptions;
  ClusterJDBCURL: string;
  RoleARN: string;
  Password: string;
  S3BackupMode?: string;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.RedshiftRetryOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-redshiftretryoptions.html | AWS::KinesisFirehose::DeliveryStream.RedshiftRetryOptions}
 */
export interface KinesisFirehoseDeliveryStreamRedshiftRetryOptions {
  DurationInSeconds?: number;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.RetryOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-retryoptions.html | AWS::KinesisFirehose::DeliveryStream.RetryOptions}
 */
export interface KinesisFirehoseDeliveryStreamRetryOptions {
  DurationInSeconds?: number;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.S3DestinationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration.html | AWS::KinesisFirehose::DeliveryStream.S3DestinationConfiguration}
 */
export interface KinesisFirehoseDeliveryStreamS3DestinationConfiguration {
  ErrorOutputPrefix?: string;
  BucketARN: string;
  BufferingHints?: KinesisFirehoseDeliveryStreamBufferingHints;
  CompressionFormat?: string;
  EncryptionConfiguration?: KinesisFirehoseDeliveryStreamEncryptionConfiguration;
  Prefix?: string;
  CloudWatchLoggingOptions?: KinesisFirehoseDeliveryStreamCloudWatchLoggingOptions;
  RoleARN: string;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.SchemaConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-schemaconfiguration.html | AWS::KinesisFirehose::DeliveryStream.SchemaConfiguration}
 */
export interface KinesisFirehoseDeliveryStreamSchemaConfiguration {
  VersionId?: string;
  TableName?: string;
  DatabaseName?: string;
  Region?: string;
  CatalogId?: string;
  RoleARN?: string;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.Serializer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-serializer.html | AWS::KinesisFirehose::DeliveryStream.Serializer}
 */
export interface KinesisFirehoseDeliveryStreamSerializer {
  OrcSerDe?: KinesisFirehoseDeliveryStreamOrcSerDe;
  ParquetSerDe?: KinesisFirehoseDeliveryStreamParquetSerDe;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.SplunkDestinationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-splunkdestinationconfiguration.html | AWS::KinesisFirehose::DeliveryStream.SplunkDestinationConfiguration}
 */
export interface KinesisFirehoseDeliveryStreamSplunkDestinationConfiguration {
  HECEndpoint: string;
  S3Configuration: KinesisFirehoseDeliveryStreamS3DestinationConfiguration;
  HECToken: string;
  RetryOptions?: KinesisFirehoseDeliveryStreamSplunkRetryOptions;
  HECEndpointType: string;
  HECAcknowledgmentTimeoutInSeconds?: number;
  ProcessingConfiguration?: KinesisFirehoseDeliveryStreamProcessingConfiguration;
  CloudWatchLoggingOptions?: KinesisFirehoseDeliveryStreamCloudWatchLoggingOptions;
  S3BackupMode?: string;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.SplunkRetryOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-splunkretryoptions.html | AWS::KinesisFirehose::DeliveryStream.SplunkRetryOptions}
 */
export interface KinesisFirehoseDeliveryStreamSplunkRetryOptions {
  DurationInSeconds?: number;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream.VpcConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-vpcconfiguration.html | AWS::KinesisFirehose::DeliveryStream.VpcConfiguration}
 */
export interface KinesisFirehoseDeliveryStreamVpcConfiguration {
  SubnetIds: any[];
  SecurityGroupIds: any[];
  RoleARN: string;
}
/**
 * Type definition for AWS::KinesisFirehose::DeliveryStream
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html | AWS::KinesisFirehose::DeliveryStream}
 */
export interface KinesisFirehoseDeliveryStreamProps {
  DeliveryStreamEncryptionConfigurationInput?: KinesisFirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInput;
  HttpEndpointDestinationConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointDestinationConfiguration;
  KinesisStreamSourceConfiguration?: KinesisFirehoseDeliveryStreamKinesisStreamSourceConfiguration;
  DeliveryStreamType?: string;
  RedshiftDestinationConfiguration?: KinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration;
  AmazonopensearchserviceDestinationConfiguration?: KinesisFirehoseDeliveryStreamAmazonopensearchserviceDestinationConfiguration;
  MSKSourceConfiguration?: KinesisFirehoseDeliveryStreamMSKSourceConfiguration;
  SplunkDestinationConfiguration?: KinesisFirehoseDeliveryStreamSplunkDestinationConfiguration;
  ExtendedS3DestinationConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3DestinationConfiguration;
  AmazonOpenSearchServerlessDestinationConfiguration?: KinesisFirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfiguration;
  ElasticsearchDestinationConfiguration?: KinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration;
  S3DestinationConfiguration?: KinesisFirehoseDeliveryStreamS3DestinationConfiguration;
  DeliveryStreamName?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::KinesisFirehose::DeliveryStream
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html | AWS::KinesisFirehose::DeliveryStream}
 */
export interface KinesisFirehoseDeliveryStreamAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::KinesisFirehose::DeliveryStream
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html | AWS::KinesisFirehose::DeliveryStream}
 */
export class KinesisFirehoseDeliveryStream extends ResourceBase<
  "AWS::KinesisFirehose::DeliveryStream",
  KinesisFirehoseDeliveryStreamProps,
  KinesisFirehoseDeliveryStreamAttribs
> {
  public static readonly Type = "AWS::KinesisFirehose::DeliveryStream";
  public static readonly AttributeNames: readonly (keyof KinesisFirehoseDeliveryStreamAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: KinesisFirehoseDeliveryStreamProps,
    options?: ResourceOptions,
  ) {
    super(
      KinesisFirehoseDeliveryStream.Type,
      KinesisFirehoseDeliveryStream.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
