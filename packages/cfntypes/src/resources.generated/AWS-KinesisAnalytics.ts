import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::KinesisAnalytics::Application.CSVMappingParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-csvmappingparameters.html | AWS::KinesisAnalytics::Application.CSVMappingParameters}
 */
export interface KinesisAnalyticsApplicationCSVMappingParameters {
  RecordRowDelimiter: string;
  RecordColumnDelimiter: string;
}
/**
 * Type definition for AWS::KinesisAnalytics::Application.Input
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-input.html | AWS::KinesisAnalytics::Application.Input}
 */
export interface KinesisAnalyticsApplicationInput {
  NamePrefix: string;
  InputSchema: KinesisAnalyticsApplicationInputSchema;
  KinesisStreamsInput?: KinesisAnalyticsApplicationKinesisStreamsInput;
  KinesisFirehoseInput?: KinesisAnalyticsApplicationKinesisFirehoseInput;
  InputProcessingConfiguration?: KinesisAnalyticsApplicationInputProcessingConfiguration;
  InputParallelism?: KinesisAnalyticsApplicationInputParallelism;
}
/**
 * Type definition for AWS::KinesisAnalytics::Application.InputLambdaProcessor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-inputlambdaprocessor.html | AWS::KinesisAnalytics::Application.InputLambdaProcessor}
 */
export interface KinesisAnalyticsApplicationInputLambdaProcessor {
  ResourceARN: string;
  RoleARN: string;
}
/**
 * Type definition for AWS::KinesisAnalytics::Application.InputParallelism
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-inputparallelism.html | AWS::KinesisAnalytics::Application.InputParallelism}
 */
export interface KinesisAnalyticsApplicationInputParallelism {
  Count?: number;
}
/**
 * Type definition for AWS::KinesisAnalytics::Application.InputProcessingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-inputprocessingconfiguration.html | AWS::KinesisAnalytics::Application.InputProcessingConfiguration}
 */
export interface KinesisAnalyticsApplicationInputProcessingConfiguration {
  InputLambdaProcessor?: KinesisAnalyticsApplicationInputLambdaProcessor;
}
/**
 * Type definition for AWS::KinesisAnalytics::Application.InputSchema
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-inputschema.html | AWS::KinesisAnalytics::Application.InputSchema}
 */
export interface KinesisAnalyticsApplicationInputSchema {
  RecordEncoding?: string;
  RecordColumns: any[];
  RecordFormat: KinesisAnalyticsApplicationRecordFormat;
}
/**
 * Type definition for AWS::KinesisAnalytics::Application.JSONMappingParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-jsonmappingparameters.html | AWS::KinesisAnalytics::Application.JSONMappingParameters}
 */
export interface KinesisAnalyticsApplicationJSONMappingParameters {
  RecordRowPath: string;
}
/**
 * Type definition for AWS::KinesisAnalytics::Application.KinesisFirehoseInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-kinesisfirehoseinput.html | AWS::KinesisAnalytics::Application.KinesisFirehoseInput}
 */
export interface KinesisAnalyticsApplicationKinesisFirehoseInput {
  ResourceARN: string;
  RoleARN: string;
}
/**
 * Type definition for AWS::KinesisAnalytics::Application.KinesisStreamsInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-kinesisstreamsinput.html | AWS::KinesisAnalytics::Application.KinesisStreamsInput}
 */
export interface KinesisAnalyticsApplicationKinesisStreamsInput {
  ResourceARN: string;
  RoleARN: string;
}
/**
 * Type definition for AWS::KinesisAnalytics::Application.MappingParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-mappingparameters.html | AWS::KinesisAnalytics::Application.MappingParameters}
 */
export interface KinesisAnalyticsApplicationMappingParameters {
  JSONMappingParameters?: KinesisAnalyticsApplicationJSONMappingParameters;
  CSVMappingParameters?: KinesisAnalyticsApplicationCSVMappingParameters;
}
/**
 * Type definition for AWS::KinesisAnalytics::Application.RecordColumn
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-recordcolumn.html | AWS::KinesisAnalytics::Application.RecordColumn}
 */
export interface KinesisAnalyticsApplicationRecordColumn {
  Mapping?: string;
  SqlType: string;
  Name: string;
}
/**
 * Type definition for AWS::KinesisAnalytics::Application.RecordFormat
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-recordformat.html | AWS::KinesisAnalytics::Application.RecordFormat}
 */
export interface KinesisAnalyticsApplicationRecordFormat {
  MappingParameters?: KinesisAnalyticsApplicationMappingParameters;
  RecordFormatType: string;
}
/**
 * Type definition for AWS::KinesisAnalytics::ApplicationOutput.DestinationSchema
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationoutput-destinationschema.html | AWS::KinesisAnalytics::ApplicationOutput.DestinationSchema}
 */
export interface KinesisAnalyticsApplicationOutputDestinationSchema {
  RecordFormatType?: string;
}
/**
 * Type definition for AWS::KinesisAnalytics::ApplicationOutput.KinesisFirehoseOutput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationoutput-kinesisfirehoseoutput.html | AWS::KinesisAnalytics::ApplicationOutput.KinesisFirehoseOutput}
 */
export interface KinesisAnalyticsApplicationOutputKinesisFirehoseOutput {
  ResourceARN: string;
  RoleARN: string;
}
/**
 * Type definition for AWS::KinesisAnalytics::ApplicationOutput.KinesisStreamsOutput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationoutput-kinesisstreamsoutput.html | AWS::KinesisAnalytics::ApplicationOutput.KinesisStreamsOutput}
 */
export interface KinesisAnalyticsApplicationOutputKinesisStreamsOutput {
  ResourceARN: string;
  RoleARN: string;
}
/**
 * Type definition for AWS::KinesisAnalytics::ApplicationOutput.LambdaOutput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationoutput-lambdaoutput.html | AWS::KinesisAnalytics::ApplicationOutput.LambdaOutput}
 */
export interface KinesisAnalyticsApplicationOutputLambdaOutput {
  ResourceARN: string;
  RoleARN: string;
}
/**
 * Type definition for AWS::KinesisAnalytics::ApplicationOutput.Output
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationoutput-output.html | AWS::KinesisAnalytics::ApplicationOutput.Output}
 */
export interface KinesisAnalyticsApplicationOutputOutput {
  DestinationSchema: KinesisAnalyticsApplicationOutputDestinationSchema;
  LambdaOutput?: KinesisAnalyticsApplicationOutputLambdaOutput;
  KinesisFirehoseOutput?: KinesisAnalyticsApplicationOutputKinesisFirehoseOutput;
  KinesisStreamsOutput?: KinesisAnalyticsApplicationOutputKinesisStreamsOutput;
  Name?: string;
}
/**
 * Type definition for AWS::KinesisAnalytics::ApplicationReferenceDataSource.CSVMappingParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationreferencedatasource-csvmappingparameters.html | AWS::KinesisAnalytics::ApplicationReferenceDataSource.CSVMappingParameters}
 */
export interface KinesisAnalyticsApplicationReferenceDataSourceCSVMappingParameters {
  RecordRowDelimiter: string;
  RecordColumnDelimiter: string;
}
/**
 * Type definition for AWS::KinesisAnalytics::ApplicationReferenceDataSource.JSONMappingParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationreferencedatasource-jsonmappingparameters.html | AWS::KinesisAnalytics::ApplicationReferenceDataSource.JSONMappingParameters}
 */
export interface KinesisAnalyticsApplicationReferenceDataSourceJSONMappingParameters {
  RecordRowPath: string;
}
/**
 * Type definition for AWS::KinesisAnalytics::ApplicationReferenceDataSource.MappingParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationreferencedatasource-mappingparameters.html | AWS::KinesisAnalytics::ApplicationReferenceDataSource.MappingParameters}
 */
export interface KinesisAnalyticsApplicationReferenceDataSourceMappingParameters {
  JSONMappingParameters?: KinesisAnalyticsApplicationReferenceDataSourceJSONMappingParameters;
  CSVMappingParameters?: KinesisAnalyticsApplicationReferenceDataSourceCSVMappingParameters;
}
/**
 * Type definition for AWS::KinesisAnalytics::ApplicationReferenceDataSource.RecordColumn
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationreferencedatasource-recordcolumn.html | AWS::KinesisAnalytics::ApplicationReferenceDataSource.RecordColumn}
 */
export interface KinesisAnalyticsApplicationReferenceDataSourceRecordColumn {
  Mapping?: string;
  SqlType: string;
  Name: string;
}
/**
 * Type definition for AWS::KinesisAnalytics::ApplicationReferenceDataSource.RecordFormat
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationreferencedatasource-recordformat.html | AWS::KinesisAnalytics::ApplicationReferenceDataSource.RecordFormat}
 */
export interface KinesisAnalyticsApplicationReferenceDataSourceRecordFormat {
  MappingParameters?: KinesisAnalyticsApplicationReferenceDataSourceMappingParameters;
  RecordFormatType: string;
}
/**
 * Type definition for AWS::KinesisAnalytics::ApplicationReferenceDataSource.ReferenceDataSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationreferencedatasource-referencedatasource.html | AWS::KinesisAnalytics::ApplicationReferenceDataSource.ReferenceDataSource}
 */
export interface KinesisAnalyticsApplicationReferenceDataSourceReferenceDataSource {
  ReferenceSchema: KinesisAnalyticsApplicationReferenceDataSourceReferenceSchema;
  TableName?: string;
  S3ReferenceDataSource?: KinesisAnalyticsApplicationReferenceDataSourceS3ReferenceDataSource;
}
/**
 * Type definition for AWS::KinesisAnalytics::ApplicationReferenceDataSource.ReferenceSchema
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationreferencedatasource-referenceschema.html | AWS::KinesisAnalytics::ApplicationReferenceDataSource.ReferenceSchema}
 */
export interface KinesisAnalyticsApplicationReferenceDataSourceReferenceSchema {
  RecordEncoding?: string;
  RecordColumns: any[];
  RecordFormat: KinesisAnalyticsApplicationReferenceDataSourceRecordFormat;
}
/**
 * Type definition for AWS::KinesisAnalytics::ApplicationReferenceDataSource.S3ReferenceDataSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationreferencedatasource-s3referencedatasource.html | AWS::KinesisAnalytics::ApplicationReferenceDataSource.S3ReferenceDataSource}
 */
export interface KinesisAnalyticsApplicationReferenceDataSourceS3ReferenceDataSource {
  BucketARN: string;
  FileKey: string;
  ReferenceRoleARN: string;
}
/**
 * Type definition for AWS::KinesisAnalytics::Application
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html | AWS::KinesisAnalytics::Application}
 */
export interface KinesisAnalyticsApplicationProps {
  ApplicationName?: string;
  Inputs: any[];
  ApplicationDescription?: string;
  ApplicationCode?: string;
}
/**
 * Resource class for AWS::KinesisAnalytics::Application
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html | AWS::KinesisAnalytics::Application}
 */
export class KinesisAnalyticsApplication extends ResourceBase<
  "AWS::KinesisAnalytics::Application",
  KinesisAnalyticsApplicationProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::KinesisAnalytics::Application";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: KinesisAnalyticsApplicationProps,
    options?: ResourceOptions,
  ) {
    super(
      KinesisAnalyticsApplication.Type,
      KinesisAnalyticsApplication.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::KinesisAnalytics::ApplicationOutput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-applicationoutput.html | AWS::KinesisAnalytics::ApplicationOutput}
 */
export interface KinesisAnalyticsApplicationOutputProps {
  ApplicationName: string;
  Output: KinesisAnalyticsApplicationOutputOutput;
}
/**
 * Resource class for AWS::KinesisAnalytics::ApplicationOutput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-applicationoutput.html | AWS::KinesisAnalytics::ApplicationOutput}
 */
export class KinesisAnalyticsApplicationOutput extends ResourceBase<
  "AWS::KinesisAnalytics::ApplicationOutput",
  KinesisAnalyticsApplicationOutputProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::KinesisAnalytics::ApplicationOutput";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: KinesisAnalyticsApplicationOutputProps,
    options?: ResourceOptions,
  ) {
    super(
      KinesisAnalyticsApplicationOutput.Type,
      KinesisAnalyticsApplicationOutput.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::KinesisAnalytics::ApplicationReferenceDataSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-applicationreferencedatasource.html | AWS::KinesisAnalytics::ApplicationReferenceDataSource}
 */
export interface KinesisAnalyticsApplicationReferenceDataSourceProps {
  ApplicationName: string;
  ReferenceDataSource: KinesisAnalyticsApplicationReferenceDataSourceReferenceDataSource;
}
/**
 * Resource class for AWS::KinesisAnalytics::ApplicationReferenceDataSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-applicationreferencedatasource.html | AWS::KinesisAnalytics::ApplicationReferenceDataSource}
 */
export class KinesisAnalyticsApplicationReferenceDataSource extends ResourceBase<
  "AWS::KinesisAnalytics::ApplicationReferenceDataSource",
  KinesisAnalyticsApplicationReferenceDataSourceProps,
  Record<string, never>
> {
  public static readonly Type =
    "AWS::KinesisAnalytics::ApplicationReferenceDataSource";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: KinesisAnalyticsApplicationReferenceDataSourceProps,
    options?: ResourceOptions,
  ) {
    super(
      KinesisAnalyticsApplicationReferenceDataSource.Type,
      KinesisAnalyticsApplicationReferenceDataSource.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
