import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::LookoutMetrics::Alert.Action
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-alert-action.html | AWS::LookoutMetrics::Alert.Action}
 */
export interface LookoutMetricsAlertAction {
  LambdaConfiguration?: LookoutMetricsAlertLambdaConfiguration;
  SNSConfiguration?: LookoutMetricsAlertSNSConfiguration;
}
/**
 * Type definition for AWS::LookoutMetrics::Alert.LambdaConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-alert-lambdaconfiguration.html | AWS::LookoutMetrics::Alert.LambdaConfiguration}
 */
export interface LookoutMetricsAlertLambdaConfiguration {
  LambdaArn: string;
  RoleArn: string;
}
/**
 * Type definition for AWS::LookoutMetrics::Alert.SNSConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-alert-snsconfiguration.html | AWS::LookoutMetrics::Alert.SNSConfiguration}
 */
export interface LookoutMetricsAlertSNSConfiguration {
  SnsTopicArn: string;
  RoleArn: string;
}
/**
 * Type definition for AWS::LookoutMetrics::AnomalyDetector.AnomalyDetectorConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-anomalydetectorconfig.html | AWS::LookoutMetrics::AnomalyDetector.AnomalyDetectorConfig}
 */
export interface LookoutMetricsAnomalyDetectorAnomalyDetectorConfig {
  AnomalyDetectorFrequency: string;
}
/**
 * Type definition for AWS::LookoutMetrics::AnomalyDetector.AppFlowConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-appflowconfig.html | AWS::LookoutMetrics::AnomalyDetector.AppFlowConfig}
 */
export interface LookoutMetricsAnomalyDetectorAppFlowConfig {
  FlowName: string;
  RoleArn: string;
}
/**
 * Type definition for AWS::LookoutMetrics::AnomalyDetector.CloudwatchConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-cloudwatchconfig.html | AWS::LookoutMetrics::AnomalyDetector.CloudwatchConfig}
 */
export interface LookoutMetricsAnomalyDetectorCloudwatchConfig {
  RoleArn: string;
}
/**
 * Type definition for AWS::LookoutMetrics::AnomalyDetector.CsvFormatDescriptor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-csvformatdescriptor.html | AWS::LookoutMetrics::AnomalyDetector.CsvFormatDescriptor}
 */
export interface LookoutMetricsAnomalyDetectorCsvFormatDescriptor {
  QuoteSymbol?: string;
  ContainsHeader?: boolean;
  Delimiter?: string;
  HeaderList?: any[];
  Charset?: string;
  FileCompression?: string;
}
/**
 * Type definition for AWS::LookoutMetrics::AnomalyDetector.FileFormatDescriptor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-fileformatdescriptor.html | AWS::LookoutMetrics::AnomalyDetector.FileFormatDescriptor}
 */
export interface LookoutMetricsAnomalyDetectorFileFormatDescriptor {
  JsonFormatDescriptor?: LookoutMetricsAnomalyDetectorJsonFormatDescriptor;
  CsvFormatDescriptor?: LookoutMetricsAnomalyDetectorCsvFormatDescriptor;
}
/**
 * Type definition for AWS::LookoutMetrics::AnomalyDetector.JsonFormatDescriptor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-jsonformatdescriptor.html | AWS::LookoutMetrics::AnomalyDetector.JsonFormatDescriptor}
 */
export interface LookoutMetricsAnomalyDetectorJsonFormatDescriptor {
  Charset?: string;
  FileCompression?: string;
}
/**
 * Type definition for AWS::LookoutMetrics::AnomalyDetector.Metric
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-metric.html | AWS::LookoutMetrics::AnomalyDetector.Metric}
 */
export interface LookoutMetricsAnomalyDetectorMetric {
  AggregationFunction: string;
  MetricName: string;
  Namespace?: string;
}
/**
 * Type definition for AWS::LookoutMetrics::AnomalyDetector.MetricSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-metricset.html | AWS::LookoutMetrics::AnomalyDetector.MetricSet}
 */
export interface LookoutMetricsAnomalyDetectorMetricSet {
  Timezone?: string;
  MetricSetDescription?: string;
  MetricList: any[];
  MetricSource: LookoutMetricsAnomalyDetectorMetricSource;
  TimestampColumn?: LookoutMetricsAnomalyDetectorTimestampColumn;
  DimensionList?: any[];
  MetricSetFrequency?: string;
  MetricSetName: string;
  Offset?: number;
}
/**
 * Type definition for AWS::LookoutMetrics::AnomalyDetector.MetricSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-metricsource.html | AWS::LookoutMetrics::AnomalyDetector.MetricSource}
 */
export interface LookoutMetricsAnomalyDetectorMetricSource {
  S3SourceConfig?: LookoutMetricsAnomalyDetectorS3SourceConfig;
  CloudwatchConfig?: LookoutMetricsAnomalyDetectorCloudwatchConfig;
  RDSSourceConfig?: LookoutMetricsAnomalyDetectorRDSSourceConfig;
  AppFlowConfig?: LookoutMetricsAnomalyDetectorAppFlowConfig;
  RedshiftSourceConfig?: LookoutMetricsAnomalyDetectorRedshiftSourceConfig;
}
/**
 * Type definition for AWS::LookoutMetrics::AnomalyDetector.RDSSourceConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-rdssourceconfig.html | AWS::LookoutMetrics::AnomalyDetector.RDSSourceConfig}
 */
export interface LookoutMetricsAnomalyDetectorRDSSourceConfig {
  TableName: string;
  DatabasePort: number;
  DatabaseHost: string;
  DatabaseName: string;
  SecretManagerArn: string;
  VpcConfiguration: LookoutMetricsAnomalyDetectorVpcConfiguration;
  DBInstanceIdentifier: string;
  RoleArn: string;
}
/**
 * Type definition for AWS::LookoutMetrics::AnomalyDetector.RedshiftSourceConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-redshiftsourceconfig.html | AWS::LookoutMetrics::AnomalyDetector.RedshiftSourceConfig}
 */
export interface LookoutMetricsAnomalyDetectorRedshiftSourceConfig {
  TableName: string;
  DatabasePort: number;
  DatabaseHost: string;
  DatabaseName: string;
  SecretManagerArn: string;
  VpcConfiguration: LookoutMetricsAnomalyDetectorVpcConfiguration;
  ClusterIdentifier: string;
  RoleArn: string;
}
/**
 * Type definition for AWS::LookoutMetrics::AnomalyDetector.S3SourceConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-s3sourceconfig.html | AWS::LookoutMetrics::AnomalyDetector.S3SourceConfig}
 */
export interface LookoutMetricsAnomalyDetectorS3SourceConfig {
  TemplatedPathList?: any[];
  HistoricalDataPathList?: any[];
  RoleArn: string;
  FileFormatDescriptor: LookoutMetricsAnomalyDetectorFileFormatDescriptor;
}
/**
 * Type definition for AWS::LookoutMetrics::AnomalyDetector.TimestampColumn
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-timestampcolumn.html | AWS::LookoutMetrics::AnomalyDetector.TimestampColumn}
 */
export interface LookoutMetricsAnomalyDetectorTimestampColumn {
  ColumnName?: string;
  ColumnFormat?: string;
}
/**
 * Type definition for AWS::LookoutMetrics::AnomalyDetector.VpcConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-vpcconfiguration.html | AWS::LookoutMetrics::AnomalyDetector.VpcConfiguration}
 */
export interface LookoutMetricsAnomalyDetectorVpcConfiguration {
  SubnetIdList: any[];
  SecurityGroupIdList: any[];
}
/**
 * Type definition for AWS::LookoutMetrics::Alert
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-alert.html | AWS::LookoutMetrics::Alert}
 */
export interface LookoutMetricsAlertProps {
  AlertDescription?: string;
  Action: LookoutMetricsAlertAction;
  AlertName?: string;
  AlertSensitivityThreshold: number;
  AnomalyDetectorArn: string;
}
/**
 * Attributes type definition for AWS::LookoutMetrics::Alert
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-alert.html | AWS::LookoutMetrics::Alert}
 */
export interface LookoutMetricsAlertAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::LookoutMetrics::Alert
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-alert.html | AWS::LookoutMetrics::Alert}
 */
export class LookoutMetricsAlert extends ResourceBase<
  "AWS::LookoutMetrics::Alert",
  LookoutMetricsAlertProps,
  LookoutMetricsAlertAttribs
> {
  public static readonly Type = "AWS::LookoutMetrics::Alert";
  public static readonly AttributeNames: readonly (keyof LookoutMetricsAlertAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: LookoutMetricsAlertProps,
    options?: ResourceOptions,
  ) {
    super(
      LookoutMetricsAlert.Type,
      LookoutMetricsAlert.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::LookoutMetrics::AnomalyDetector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html | AWS::LookoutMetrics::AnomalyDetector}
 */
export interface LookoutMetricsAnomalyDetectorProps {
  AnomalyDetectorName?: string;
  KmsKeyArn?: string;
  AnomalyDetectorDescription?: string;
  AnomalyDetectorConfig: LookoutMetricsAnomalyDetectorAnomalyDetectorConfig;
  MetricSetList: any[];
}
/**
 * Attributes type definition for AWS::LookoutMetrics::AnomalyDetector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html | AWS::LookoutMetrics::AnomalyDetector}
 */
export interface LookoutMetricsAnomalyDetectorAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::LookoutMetrics::AnomalyDetector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html | AWS::LookoutMetrics::AnomalyDetector}
 */
export class LookoutMetricsAnomalyDetector extends ResourceBase<
  "AWS::LookoutMetrics::AnomalyDetector",
  LookoutMetricsAnomalyDetectorProps,
  LookoutMetricsAnomalyDetectorAttribs
> {
  public static readonly Type = "AWS::LookoutMetrics::AnomalyDetector";
  public static readonly AttributeNames: readonly (keyof LookoutMetricsAnomalyDetectorAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: LookoutMetricsAnomalyDetectorProps,
    options?: ResourceOptions,
  ) {
    super(
      LookoutMetricsAnomalyDetector.Type,
      LookoutMetricsAnomalyDetector.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
