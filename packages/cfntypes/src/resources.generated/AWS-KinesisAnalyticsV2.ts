import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application.ApplicationCodeConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-applicationcodeconfiguration.html | AWS::KinesisAnalyticsV2::Application.ApplicationCodeConfiguration}
 */
export interface KinesisAnalyticsV2ApplicationApplicationCodeConfiguration {
  CodeContentType: string;
  CodeContent: KinesisAnalyticsV2ApplicationCodeContent;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application.ApplicationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-applicationconfiguration.html | AWS::KinesisAnalyticsV2::Application.ApplicationConfiguration}
 */
export interface KinesisAnalyticsV2ApplicationApplicationConfiguration {
  ApplicationCodeConfiguration?: KinesisAnalyticsV2ApplicationApplicationCodeConfiguration;
  EnvironmentProperties?: KinesisAnalyticsV2ApplicationEnvironmentProperties;
  FlinkApplicationConfiguration?: KinesisAnalyticsV2ApplicationFlinkApplicationConfiguration;
  SqlApplicationConfiguration?: KinesisAnalyticsV2ApplicationSqlApplicationConfiguration;
  ZeppelinApplicationConfiguration?: KinesisAnalyticsV2ApplicationZeppelinApplicationConfiguration;
  VpcConfigurations?: any[];
  ApplicationSnapshotConfiguration?: KinesisAnalyticsV2ApplicationApplicationSnapshotConfiguration;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application.ApplicationMaintenanceConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-applicationmaintenanceconfiguration.html | AWS::KinesisAnalyticsV2::Application.ApplicationMaintenanceConfiguration}
 */
export interface KinesisAnalyticsV2ApplicationApplicationMaintenanceConfiguration {
  ApplicationMaintenanceWindowStartTime: string;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application.ApplicationRestoreConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-applicationrestoreconfiguration.html | AWS::KinesisAnalyticsV2::Application.ApplicationRestoreConfiguration}
 */
export interface KinesisAnalyticsV2ApplicationApplicationRestoreConfiguration {
  SnapshotName?: string;
  ApplicationRestoreType: string;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application.ApplicationSnapshotConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-applicationsnapshotconfiguration.html | AWS::KinesisAnalyticsV2::Application.ApplicationSnapshotConfiguration}
 */
export interface KinesisAnalyticsV2ApplicationApplicationSnapshotConfiguration {
  SnapshotsEnabled: boolean;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application.CSVMappingParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-csvmappingparameters.html | AWS::KinesisAnalyticsV2::Application.CSVMappingParameters}
 */
export interface KinesisAnalyticsV2ApplicationCSVMappingParameters {
  RecordRowDelimiter: string;
  RecordColumnDelimiter: string;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application.CatalogConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-catalogconfiguration.html | AWS::KinesisAnalyticsV2::Application.CatalogConfiguration}
 */
export interface KinesisAnalyticsV2ApplicationCatalogConfiguration {
  GlueDataCatalogConfiguration?: KinesisAnalyticsV2ApplicationGlueDataCatalogConfiguration;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application.CheckpointConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-checkpointconfiguration.html | AWS::KinesisAnalyticsV2::Application.CheckpointConfiguration}
 */
export interface KinesisAnalyticsV2ApplicationCheckpointConfiguration {
  ConfigurationType: string;
  CheckpointInterval?: number;
  MinPauseBetweenCheckpoints?: number;
  CheckpointingEnabled?: boolean;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application.CodeContent
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-codecontent.html | AWS::KinesisAnalyticsV2::Application.CodeContent}
 */
export interface KinesisAnalyticsV2ApplicationCodeContent {
  ZipFileContent?: string;
  S3ContentLocation?: KinesisAnalyticsV2ApplicationS3ContentLocation;
  TextContent?: string;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application.CustomArtifactConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-customartifactconfiguration.html | AWS::KinesisAnalyticsV2::Application.CustomArtifactConfiguration}
 */
export interface KinesisAnalyticsV2ApplicationCustomArtifactConfiguration {
  MavenReference?: KinesisAnalyticsV2ApplicationMavenReference;
  S3ContentLocation?: KinesisAnalyticsV2ApplicationS3ContentLocation;
  ArtifactType: string;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application.DeployAsApplicationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-deployasapplicationconfiguration.html | AWS::KinesisAnalyticsV2::Application.DeployAsApplicationConfiguration}
 */
export interface KinesisAnalyticsV2ApplicationDeployAsApplicationConfiguration {
  S3ContentLocation: KinesisAnalyticsV2ApplicationS3ContentBaseLocation;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application.EnvironmentProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-environmentproperties.html | AWS::KinesisAnalyticsV2::Application.EnvironmentProperties}
 */
export interface KinesisAnalyticsV2ApplicationEnvironmentProperties {
  PropertyGroups?: any[];
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application.FlinkApplicationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-flinkapplicationconfiguration.html | AWS::KinesisAnalyticsV2::Application.FlinkApplicationConfiguration}
 */
export interface KinesisAnalyticsV2ApplicationFlinkApplicationConfiguration {
  CheckpointConfiguration?: KinesisAnalyticsV2ApplicationCheckpointConfiguration;
  ParallelismConfiguration?: KinesisAnalyticsV2ApplicationParallelismConfiguration;
  MonitoringConfiguration?: KinesisAnalyticsV2ApplicationMonitoringConfiguration;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application.FlinkRunConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-flinkrunconfiguration.html | AWS::KinesisAnalyticsV2::Application.FlinkRunConfiguration}
 */
export interface KinesisAnalyticsV2ApplicationFlinkRunConfiguration {
  AllowNonRestoredState?: boolean;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application.GlueDataCatalogConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-gluedatacatalogconfiguration.html | AWS::KinesisAnalyticsV2::Application.GlueDataCatalogConfiguration}
 */
export interface KinesisAnalyticsV2ApplicationGlueDataCatalogConfiguration {
  DatabaseARN?: string;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application.Input
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-input.html | AWS::KinesisAnalyticsV2::Application.Input}
 */
export interface KinesisAnalyticsV2ApplicationInput {
  NamePrefix: string;
  InputSchema: KinesisAnalyticsV2ApplicationInputSchema;
  KinesisStreamsInput?: KinesisAnalyticsV2ApplicationKinesisStreamsInput;
  KinesisFirehoseInput?: KinesisAnalyticsV2ApplicationKinesisFirehoseInput;
  InputProcessingConfiguration?: KinesisAnalyticsV2ApplicationInputProcessingConfiguration;
  InputParallelism?: KinesisAnalyticsV2ApplicationInputParallelism;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application.InputLambdaProcessor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-inputlambdaprocessor.html | AWS::KinesisAnalyticsV2::Application.InputLambdaProcessor}
 */
export interface KinesisAnalyticsV2ApplicationInputLambdaProcessor {
  ResourceARN: string;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application.InputParallelism
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-inputparallelism.html | AWS::KinesisAnalyticsV2::Application.InputParallelism}
 */
export interface KinesisAnalyticsV2ApplicationInputParallelism {
  Count?: number;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application.InputProcessingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-inputprocessingconfiguration.html | AWS::KinesisAnalyticsV2::Application.InputProcessingConfiguration}
 */
export interface KinesisAnalyticsV2ApplicationInputProcessingConfiguration {
  InputLambdaProcessor?: KinesisAnalyticsV2ApplicationInputLambdaProcessor;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application.InputSchema
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-inputschema.html | AWS::KinesisAnalyticsV2::Application.InputSchema}
 */
export interface KinesisAnalyticsV2ApplicationInputSchema {
  RecordEncoding?: string;
  RecordColumns: any[];
  RecordFormat: KinesisAnalyticsV2ApplicationRecordFormat;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application.JSONMappingParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-jsonmappingparameters.html | AWS::KinesisAnalyticsV2::Application.JSONMappingParameters}
 */
export interface KinesisAnalyticsV2ApplicationJSONMappingParameters {
  RecordRowPath: string;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application.KinesisFirehoseInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-kinesisfirehoseinput.html | AWS::KinesisAnalyticsV2::Application.KinesisFirehoseInput}
 */
export interface KinesisAnalyticsV2ApplicationKinesisFirehoseInput {
  ResourceARN: string;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application.KinesisStreamsInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-kinesisstreamsinput.html | AWS::KinesisAnalyticsV2::Application.KinesisStreamsInput}
 */
export interface KinesisAnalyticsV2ApplicationKinesisStreamsInput {
  ResourceARN: string;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application.MappingParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-mappingparameters.html | AWS::KinesisAnalyticsV2::Application.MappingParameters}
 */
export interface KinesisAnalyticsV2ApplicationMappingParameters {
  JSONMappingParameters?: KinesisAnalyticsV2ApplicationJSONMappingParameters;
  CSVMappingParameters?: KinesisAnalyticsV2ApplicationCSVMappingParameters;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application.MavenReference
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-mavenreference.html | AWS::KinesisAnalyticsV2::Application.MavenReference}
 */
export interface KinesisAnalyticsV2ApplicationMavenReference {
  ArtifactId: string;
  Version: string;
  GroupId: string;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application.MonitoringConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-monitoringconfiguration.html | AWS::KinesisAnalyticsV2::Application.MonitoringConfiguration}
 */
export interface KinesisAnalyticsV2ApplicationMonitoringConfiguration {
  ConfigurationType: string;
  MetricsLevel?: string;
  LogLevel?: string;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application.ParallelismConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-parallelismconfiguration.html | AWS::KinesisAnalyticsV2::Application.ParallelismConfiguration}
 */
export interface KinesisAnalyticsV2ApplicationParallelismConfiguration {
  ConfigurationType: string;
  ParallelismPerKPU?: number;
  AutoScalingEnabled?: boolean;
  Parallelism?: number;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application.PropertyGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-propertygroup.html | AWS::KinesisAnalyticsV2::Application.PropertyGroup}
 */
export interface KinesisAnalyticsV2ApplicationPropertyGroup {
  PropertyMap?: Record<string, any>;
  PropertyGroupId?: string;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application.RecordColumn
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-recordcolumn.html | AWS::KinesisAnalyticsV2::Application.RecordColumn}
 */
export interface KinesisAnalyticsV2ApplicationRecordColumn {
  Mapping?: string;
  SqlType: string;
  Name: string;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application.RecordFormat
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-recordformat.html | AWS::KinesisAnalyticsV2::Application.RecordFormat}
 */
export interface KinesisAnalyticsV2ApplicationRecordFormat {
  MappingParameters?: KinesisAnalyticsV2ApplicationMappingParameters;
  RecordFormatType: string;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application.RunConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-runconfiguration.html | AWS::KinesisAnalyticsV2::Application.RunConfiguration}
 */
export interface KinesisAnalyticsV2ApplicationRunConfiguration {
  FlinkRunConfiguration?: KinesisAnalyticsV2ApplicationFlinkRunConfiguration;
  ApplicationRestoreConfiguration?: KinesisAnalyticsV2ApplicationApplicationRestoreConfiguration;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application.S3ContentBaseLocation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-s3contentbaselocation.html | AWS::KinesisAnalyticsV2::Application.S3ContentBaseLocation}
 */
export interface KinesisAnalyticsV2ApplicationS3ContentBaseLocation {
  BucketARN: string;
  BasePath?: string;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application.S3ContentLocation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-s3contentlocation.html | AWS::KinesisAnalyticsV2::Application.S3ContentLocation}
 */
export interface KinesisAnalyticsV2ApplicationS3ContentLocation {
  BucketARN: string;
  FileKey: string;
  ObjectVersion?: string;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application.SqlApplicationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-sqlapplicationconfiguration.html | AWS::KinesisAnalyticsV2::Application.SqlApplicationConfiguration}
 */
export interface KinesisAnalyticsV2ApplicationSqlApplicationConfiguration {
  Inputs?: any[];
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application.VpcConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-vpcconfiguration.html | AWS::KinesisAnalyticsV2::Application.VpcConfiguration}
 */
export interface KinesisAnalyticsV2ApplicationVpcConfiguration {
  SecurityGroupIds: any[];
  SubnetIds: any[];
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application.ZeppelinApplicationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-zeppelinapplicationconfiguration.html | AWS::KinesisAnalyticsV2::Application.ZeppelinApplicationConfiguration}
 */
export interface KinesisAnalyticsV2ApplicationZeppelinApplicationConfiguration {
  CatalogConfiguration?: KinesisAnalyticsV2ApplicationCatalogConfiguration;
  MonitoringConfiguration?: KinesisAnalyticsV2ApplicationZeppelinMonitoringConfiguration;
  DeployAsApplicationConfiguration?: KinesisAnalyticsV2ApplicationDeployAsApplicationConfiguration;
  CustomArtifactsConfiguration?: any[];
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application.ZeppelinMonitoringConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-zeppelinmonitoringconfiguration.html | AWS::KinesisAnalyticsV2::Application.ZeppelinMonitoringConfiguration}
 */
export interface KinesisAnalyticsV2ApplicationZeppelinMonitoringConfiguration {
  LogLevel?: string;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption.CloudWatchLoggingOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationcloudwatchloggingoption-cloudwatchloggingoption.html | AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption.CloudWatchLoggingOption}
 */
export interface KinesisAnalyticsV2ApplicationCloudWatchLoggingOptionCloudWatchLoggingOption {
  LogStreamARN: string;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::ApplicationOutput.DestinationSchema
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationoutput-destinationschema.html | AWS::KinesisAnalyticsV2::ApplicationOutput.DestinationSchema}
 */
export interface KinesisAnalyticsV2ApplicationOutputDestinationSchema {
  RecordFormatType?: string;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::ApplicationOutput.KinesisFirehoseOutput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationoutput-kinesisfirehoseoutput.html | AWS::KinesisAnalyticsV2::ApplicationOutput.KinesisFirehoseOutput}
 */
export interface KinesisAnalyticsV2ApplicationOutputKinesisFirehoseOutput {
  ResourceARN: string;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::ApplicationOutput.KinesisStreamsOutput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationoutput-kinesisstreamsoutput.html | AWS::KinesisAnalyticsV2::ApplicationOutput.KinesisStreamsOutput}
 */
export interface KinesisAnalyticsV2ApplicationOutputKinesisStreamsOutput {
  ResourceARN: string;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::ApplicationOutput.LambdaOutput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationoutput-lambdaoutput.html | AWS::KinesisAnalyticsV2::ApplicationOutput.LambdaOutput}
 */
export interface KinesisAnalyticsV2ApplicationOutputLambdaOutput {
  ResourceARN: string;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::ApplicationOutput.Output
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationoutput-output.html | AWS::KinesisAnalyticsV2::ApplicationOutput.Output}
 */
export interface KinesisAnalyticsV2ApplicationOutputOutput {
  DestinationSchema: KinesisAnalyticsV2ApplicationOutputDestinationSchema;
  LambdaOutput?: KinesisAnalyticsV2ApplicationOutputLambdaOutput;
  KinesisFirehoseOutput?: KinesisAnalyticsV2ApplicationOutputKinesisFirehoseOutput;
  KinesisStreamsOutput?: KinesisAnalyticsV2ApplicationOutputKinesisStreamsOutput;
  Name?: string;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource.CSVMappingParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-csvmappingparameters.html | AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource.CSVMappingParameters}
 */
export interface KinesisAnalyticsV2ApplicationReferenceDataSourceCSVMappingParameters {
  RecordRowDelimiter: string;
  RecordColumnDelimiter: string;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource.JSONMappingParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-jsonmappingparameters.html | AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource.JSONMappingParameters}
 */
export interface KinesisAnalyticsV2ApplicationReferenceDataSourceJSONMappingParameters {
  RecordRowPath: string;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource.MappingParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-mappingparameters.html | AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource.MappingParameters}
 */
export interface KinesisAnalyticsV2ApplicationReferenceDataSourceMappingParameters {
  JSONMappingParameters?: KinesisAnalyticsV2ApplicationReferenceDataSourceJSONMappingParameters;
  CSVMappingParameters?: KinesisAnalyticsV2ApplicationReferenceDataSourceCSVMappingParameters;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource.RecordColumn
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-recordcolumn.html | AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource.RecordColumn}
 */
export interface KinesisAnalyticsV2ApplicationReferenceDataSourceRecordColumn {
  Mapping?: string;
  SqlType: string;
  Name: string;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource.RecordFormat
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-recordformat.html | AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource.RecordFormat}
 */
export interface KinesisAnalyticsV2ApplicationReferenceDataSourceRecordFormat {
  MappingParameters?: KinesisAnalyticsV2ApplicationReferenceDataSourceMappingParameters;
  RecordFormatType: string;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource.ReferenceDataSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-referencedatasource.html | AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource.ReferenceDataSource}
 */
export interface KinesisAnalyticsV2ApplicationReferenceDataSourceReferenceDataSource {
  ReferenceSchema: KinesisAnalyticsV2ApplicationReferenceDataSourceReferenceSchema;
  TableName?: string;
  S3ReferenceDataSource?: KinesisAnalyticsV2ApplicationReferenceDataSourceS3ReferenceDataSource;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource.ReferenceSchema
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-referenceschema.html | AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource.ReferenceSchema}
 */
export interface KinesisAnalyticsV2ApplicationReferenceDataSourceReferenceSchema {
  RecordEncoding?: string;
  RecordColumns: any[];
  RecordFormat: KinesisAnalyticsV2ApplicationReferenceDataSourceRecordFormat;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource.S3ReferenceDataSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-s3referencedatasource.html | AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource.S3ReferenceDataSource}
 */
export interface KinesisAnalyticsV2ApplicationReferenceDataSourceS3ReferenceDataSource {
  BucketARN: string;
  FileKey: string;
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::Application
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html | AWS::KinesisAnalyticsV2::Application}
 */
export interface KinesisAnalyticsV2ApplicationProps {
  ApplicationName?: string;
  RuntimeEnvironment: string;
  RunConfiguration?: KinesisAnalyticsV2ApplicationRunConfiguration;
  ApplicationMode?: string;
  ApplicationMaintenanceConfiguration?: KinesisAnalyticsV2ApplicationApplicationMaintenanceConfiguration;
  ApplicationConfiguration?: KinesisAnalyticsV2ApplicationApplicationConfiguration;
  ApplicationDescription?: string;
  Tags?: Tag[];
  ServiceExecutionRole: string;
}
/**
 * Resource class for AWS::KinesisAnalyticsV2::Application
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html | AWS::KinesisAnalyticsV2::Application}
 */
export class KinesisAnalyticsV2Application extends ResourceBase<
  "AWS::KinesisAnalyticsV2::Application",
  KinesisAnalyticsV2ApplicationProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::KinesisAnalyticsV2::Application";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: KinesisAnalyticsV2ApplicationProps,
    options?: ResourceOptions,
  ) {
    super(
      KinesisAnalyticsV2Application.Type,
      KinesisAnalyticsV2Application.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationcloudwatchloggingoption.html | AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption}
 */
export interface KinesisAnalyticsV2ApplicationCloudWatchLoggingOptionProps {
  ApplicationName: string;
  CloudWatchLoggingOption: KinesisAnalyticsV2ApplicationCloudWatchLoggingOptionCloudWatchLoggingOption;
}
/**
 * Resource class for AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationcloudwatchloggingoption.html | AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption}
 */
export class KinesisAnalyticsV2ApplicationCloudWatchLoggingOption extends ResourceBase<
  "AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption",
  KinesisAnalyticsV2ApplicationCloudWatchLoggingOptionProps,
  Record<string, never>
> {
  public static readonly Type =
    "AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: KinesisAnalyticsV2ApplicationCloudWatchLoggingOptionProps,
    options?: ResourceOptions,
  ) {
    super(
      KinesisAnalyticsV2ApplicationCloudWatchLoggingOption.Type,
      KinesisAnalyticsV2ApplicationCloudWatchLoggingOption.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::ApplicationOutput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationoutput.html | AWS::KinesisAnalyticsV2::ApplicationOutput}
 */
export interface KinesisAnalyticsV2ApplicationOutputProps {
  ApplicationName: string;
  Output: KinesisAnalyticsV2ApplicationOutputOutput;
}
/**
 * Resource class for AWS::KinesisAnalyticsV2::ApplicationOutput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationoutput.html | AWS::KinesisAnalyticsV2::ApplicationOutput}
 */
export class KinesisAnalyticsV2ApplicationOutput extends ResourceBase<
  "AWS::KinesisAnalyticsV2::ApplicationOutput",
  KinesisAnalyticsV2ApplicationOutputProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::KinesisAnalyticsV2::ApplicationOutput";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: KinesisAnalyticsV2ApplicationOutputProps,
    options?: ResourceOptions,
  ) {
    super(
      KinesisAnalyticsV2ApplicationOutput.Type,
      KinesisAnalyticsV2ApplicationOutput.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationreferencedatasource.html | AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource}
 */
export interface KinesisAnalyticsV2ApplicationReferenceDataSourceProps {
  ApplicationName: string;
  ReferenceDataSource: KinesisAnalyticsV2ApplicationReferenceDataSourceReferenceDataSource;
}
/**
 * Resource class for AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationreferencedatasource.html | AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource}
 */
export class KinesisAnalyticsV2ApplicationReferenceDataSource extends ResourceBase<
  "AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource",
  KinesisAnalyticsV2ApplicationReferenceDataSourceProps,
  Record<string, never>
> {
  public static readonly Type =
    "AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: KinesisAnalyticsV2ApplicationReferenceDataSourceProps,
    options?: ResourceOptions,
  ) {
    super(
      KinesisAnalyticsV2ApplicationReferenceDataSource.Type,
      KinesisAnalyticsV2ApplicationReferenceDataSource.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
