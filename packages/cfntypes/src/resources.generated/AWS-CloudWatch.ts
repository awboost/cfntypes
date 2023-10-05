import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::CloudWatch::Alarm.Dimension
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-alarm-dimension.html | AWS::CloudWatch::Alarm.Dimension}
 */
export interface CloudWatchAlarmDimension {
  Value: string;
  Name: string;
}
/**
 * Type definition for AWS::CloudWatch::Alarm.Metric
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-alarm-metric.html | AWS::CloudWatch::Alarm.Metric}
 */
export interface CloudWatchAlarmMetric {
  MetricName?: string;
  Dimensions?: any[];
  Namespace?: string;
}
/**
 * Type definition for AWS::CloudWatch::Alarm.MetricDataQuery
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-alarm-metricdataquery.html | AWS::CloudWatch::Alarm.MetricDataQuery}
 */
export interface CloudWatchAlarmMetricDataQuery {
  AccountId?: string;
  ReturnData?: boolean;
  Expression?: string;
  Label?: string;
  MetricStat?: CloudWatchAlarmMetricStat;
  Period?: number;
  Id: string;
}
/**
 * Type definition for AWS::CloudWatch::Alarm.MetricStat
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-alarm-metricstat.html | AWS::CloudWatch::Alarm.MetricStat}
 */
export interface CloudWatchAlarmMetricStat {
  Stat: string;
  Period: number;
  Metric: CloudWatchAlarmMetric;
  Unit?: string;
}
/**
 * Type definition for AWS::CloudWatch::AnomalyDetector.Configuration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-configuration.html | AWS::CloudWatch::AnomalyDetector.Configuration}
 */
export interface CloudWatchAnomalyDetectorConfiguration {
  MetricTimeZone?: string;
  ExcludedTimeRanges?: any[];
}
/**
 * Type definition for AWS::CloudWatch::AnomalyDetector.Dimension
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-dimension.html | AWS::CloudWatch::AnomalyDetector.Dimension}
 */
export interface CloudWatchAnomalyDetectorDimension {
  Value: string;
  Name: string;
}
/**
 * Type definition for AWS::CloudWatch::AnomalyDetector.Metric
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-metric.html | AWS::CloudWatch::AnomalyDetector.Metric}
 */
export interface CloudWatchAnomalyDetectorMetric {
  MetricName: string;
  Dimensions?: any[];
  Namespace: string;
}
/**
 * Type definition for AWS::CloudWatch::AnomalyDetector.MetricDataQueries
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-metricdataqueries.html | AWS::CloudWatch::AnomalyDetector.MetricDataQueries}
 */
export type CloudWatchAnomalyDetectorMetricDataQueries = any[];
/**
 * Type definition for AWS::CloudWatch::AnomalyDetector.MetricDataQuery
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-metricdataquery.html | AWS::CloudWatch::AnomalyDetector.MetricDataQuery}
 */
export interface CloudWatchAnomalyDetectorMetricDataQuery {
  AccountId?: string;
  ReturnData?: boolean;
  Expression?: string;
  MetricStat?: CloudWatchAnomalyDetectorMetricStat;
  Label?: string;
  Period?: number;
  Id: string;
}
/**
 * Type definition for AWS::CloudWatch::AnomalyDetector.MetricMathAnomalyDetector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-metricmathanomalydetector.html | AWS::CloudWatch::AnomalyDetector.MetricMathAnomalyDetector}
 */
export interface CloudWatchAnomalyDetectorMetricMathAnomalyDetector {
  MetricDataQueries?: any[];
}
/**
 * Type definition for AWS::CloudWatch::AnomalyDetector.MetricStat
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-metricstat.html | AWS::CloudWatch::AnomalyDetector.MetricStat}
 */
export interface CloudWatchAnomalyDetectorMetricStat {
  Stat: string;
  Period: number;
  Metric: CloudWatchAnomalyDetectorMetric;
  Unit?: string;
}
/**
 * Type definition for AWS::CloudWatch::AnomalyDetector.Range
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-range.html | AWS::CloudWatch::AnomalyDetector.Range}
 */
export interface CloudWatchAnomalyDetectorRange {
  EndTime: string;
  StartTime: string;
}
/**
 * Type definition for AWS::CloudWatch::AnomalyDetector.SingleMetricAnomalyDetector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-singlemetricanomalydetector.html | AWS::CloudWatch::AnomalyDetector.SingleMetricAnomalyDetector}
 */
export interface CloudWatchAnomalyDetectorSingleMetricAnomalyDetector {
  MetricName?: string;
  Stat?: string;
  Dimensions?: any[];
  Namespace?: string;
}
/**
 * Type definition for AWS::CloudWatch::InsightRule.Tags
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-insightrule-tags.html | AWS::CloudWatch::InsightRule.Tags}
 */
export type CloudWatchInsightRuleTags = Tag[];
/**
 * Type definition for AWS::CloudWatch::MetricStream.MetricStreamFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-metricstream-metricstreamfilter.html | AWS::CloudWatch::MetricStream.MetricStreamFilter}
 */
export interface CloudWatchMetricStreamMetricStreamFilter {
  MetricNames?: any[];
  Namespace: string;
}
/**
 * Type definition for AWS::CloudWatch::MetricStream.MetricStreamStatisticsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-metricstream-metricstreamstatisticsconfiguration.html | AWS::CloudWatch::MetricStream.MetricStreamStatisticsConfiguration}
 */
export interface CloudWatchMetricStreamMetricStreamStatisticsConfiguration {
  IncludeMetrics: any[];
  AdditionalStatistics: any[];
}
/**
 * Type definition for AWS::CloudWatch::MetricStream.MetricStreamStatisticsMetric
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-metricstream-metricstreamstatisticsmetric.html | AWS::CloudWatch::MetricStream.MetricStreamStatisticsMetric}
 */
export interface CloudWatchMetricStreamMetricStreamStatisticsMetric {
  MetricName: string;
  Namespace: string;
}
/**
 * Type definition for AWS::CloudWatch::Alarm
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-alarm.html | AWS::CloudWatch::Alarm}
 */
export interface CloudWatchAlarmProps {
  ThresholdMetricId?: string;
  EvaluateLowSampleCountPercentile?: string;
  ExtendedStatistic?: string;
  ComparisonOperator: string;
  TreatMissingData?: string;
  Dimensions?: any[];
  Period?: number;
  EvaluationPeriods: number;
  Unit?: string;
  Namespace?: string;
  OKActions?: any[];
  AlarmActions?: any[];
  MetricName?: string;
  ActionsEnabled?: boolean;
  Metrics?: any[];
  AlarmDescription?: string;
  AlarmName?: string;
  Statistic?: string;
  InsufficientDataActions?: any[];
  DatapointsToAlarm?: number;
  Threshold?: number;
}
/**
 * Attributes type definition for AWS::CloudWatch::Alarm
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-alarm.html | AWS::CloudWatch::Alarm}
 */
export interface CloudWatchAlarmAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::CloudWatch::Alarm
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-alarm.html | AWS::CloudWatch::Alarm}
 */
export class CloudWatchAlarm extends ResourceBase<
  "AWS::CloudWatch::Alarm",
  CloudWatchAlarmProps,
  CloudWatchAlarmAttribs
> {
  public static readonly Type = "AWS::CloudWatch::Alarm";
  public static readonly AttributeNames: readonly (keyof CloudWatchAlarmAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: CloudWatchAlarmProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudWatchAlarm.Type,
      CloudWatchAlarm.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CloudWatch::AnomalyDetector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-anomalydetector.html | AWS::CloudWatch::AnomalyDetector}
 */
export interface CloudWatchAnomalyDetectorProps {
  MetricName?: string;
  Stat?: string;
  Configuration?: CloudWatchAnomalyDetectorConfiguration;
  MetricMathAnomalyDetector?: CloudWatchAnomalyDetectorMetricMathAnomalyDetector;
  Dimensions?: any[];
  Namespace?: string;
  SingleMetricAnomalyDetector?: CloudWatchAnomalyDetectorSingleMetricAnomalyDetector;
}
/**
 * Resource class for AWS::CloudWatch::AnomalyDetector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-anomalydetector.html | AWS::CloudWatch::AnomalyDetector}
 */
export class CloudWatchAnomalyDetector extends ResourceBase<
  "AWS::CloudWatch::AnomalyDetector",
  CloudWatchAnomalyDetectorProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::CloudWatch::AnomalyDetector";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: CloudWatchAnomalyDetectorProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudWatchAnomalyDetector.Type,
      CloudWatchAnomalyDetector.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CloudWatch::CompositeAlarm
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-compositealarm.html | AWS::CloudWatch::CompositeAlarm}
 */
export interface CloudWatchCompositeAlarmProps {
  AlarmActions?: any[];
  ActionsSuppressorWaitPeriod?: number;
  ActionsEnabled?: boolean;
  AlarmName?: string;
  AlarmDescription?: string;
  ActionsSuppressor?: string;
  AlarmRule: string;
  InsufficientDataActions?: any[];
  OKActions?: any[];
  ActionsSuppressorExtensionPeriod?: number;
}
/**
 * Attributes type definition for AWS::CloudWatch::CompositeAlarm
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-compositealarm.html | AWS::CloudWatch::CompositeAlarm}
 */
export interface CloudWatchCompositeAlarmAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::CloudWatch::CompositeAlarm
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-compositealarm.html | AWS::CloudWatch::CompositeAlarm}
 */
export class CloudWatchCompositeAlarm extends ResourceBase<
  "AWS::CloudWatch::CompositeAlarm",
  CloudWatchCompositeAlarmProps,
  CloudWatchCompositeAlarmAttribs
> {
  public static readonly Type = "AWS::CloudWatch::CompositeAlarm";
  public static readonly AttributeNames: readonly (keyof CloudWatchCompositeAlarmAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: CloudWatchCompositeAlarmProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudWatchCompositeAlarm.Type,
      CloudWatchCompositeAlarm.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CloudWatch::Dashboard
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-dashboard.html | AWS::CloudWatch::Dashboard}
 */
export interface CloudWatchDashboardProps {
  DashboardName?: string;
  DashboardBody: string;
}
/**
 * Resource class for AWS::CloudWatch::Dashboard
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-dashboard.html | AWS::CloudWatch::Dashboard}
 */
export class CloudWatchDashboard extends ResourceBase<
  "AWS::CloudWatch::Dashboard",
  CloudWatchDashboardProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::CloudWatch::Dashboard";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: CloudWatchDashboardProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudWatchDashboard.Type,
      CloudWatchDashboard.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CloudWatch::InsightRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-insightrule.html | AWS::CloudWatch::InsightRule}
 */
export interface CloudWatchInsightRuleProps {
  RuleState: string;
  RuleBody: string;
  RuleName: string;
  Tags?: CloudWatchInsightRuleTags;
}
/**
 * Attributes type definition for AWS::CloudWatch::InsightRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-insightrule.html | AWS::CloudWatch::InsightRule}
 */
export interface CloudWatchInsightRuleAttribs {
  Arn?: string;
  RuleName?: string;
}
/**
 * Resource class for AWS::CloudWatch::InsightRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-insightrule.html | AWS::CloudWatch::InsightRule}
 */
export class CloudWatchInsightRule extends ResourceBase<
  "AWS::CloudWatch::InsightRule",
  CloudWatchInsightRuleProps,
  CloudWatchInsightRuleAttribs
> {
  public static readonly Type = "AWS::CloudWatch::InsightRule";
  public static readonly AttributeNames: readonly (keyof CloudWatchInsightRuleAttribs)[] =
    ["Arn", "RuleName"];
  constructor(
    logicalId: string,
    properties: CloudWatchInsightRuleProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudWatchInsightRule.Type,
      CloudWatchInsightRule.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CloudWatch::MetricStream
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html | AWS::CloudWatch::MetricStream}
 */
export interface CloudWatchMetricStreamProps {
  StatisticsConfigurations?: any[];
  FirehoseArn: string;
  IncludeLinkedAccountsMetrics?: boolean;
  IncludeFilters?: any[];
  OutputFormat: string;
  ExcludeFilters?: any[];
  RoleArn: string;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::CloudWatch::MetricStream
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html | AWS::CloudWatch::MetricStream}
 */
export interface CloudWatchMetricStreamAttribs {
  CreationDate?: string;
  State?: string;
  Arn?: string;
  LastUpdateDate?: string;
}
/**
 * Resource class for AWS::CloudWatch::MetricStream
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html | AWS::CloudWatch::MetricStream}
 */
export class CloudWatchMetricStream extends ResourceBase<
  "AWS::CloudWatch::MetricStream",
  CloudWatchMetricStreamProps,
  CloudWatchMetricStreamAttribs
> {
  public static readonly Type = "AWS::CloudWatch::MetricStream";
  public static readonly AttributeNames: readonly (keyof CloudWatchMetricStreamAttribs)[] =
    ["CreationDate", "State", "Arn", "LastUpdateDate"];
  constructor(
    logicalId: string,
    properties: CloudWatchMetricStreamProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudWatchMetricStream.Type,
      CloudWatchMetricStream.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
