import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::ApplicationInsights::Application.Alarm
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-alarm.html | AWS::ApplicationInsights::Application.Alarm}
 */
export interface ApplicationInsightsApplicationAlarm {
  AlarmName: string;
  Severity?: string;
}
/**
 * Type definition for AWS::ApplicationInsights::Application.AlarmMetric
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-alarmmetric.html | AWS::ApplicationInsights::Application.AlarmMetric}
 */
export interface ApplicationInsightsApplicationAlarmMetric {
  AlarmMetricName: string;
}
/**
 * Type definition for AWS::ApplicationInsights::Application.ComponentConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-componentconfiguration.html | AWS::ApplicationInsights::Application.ComponentConfiguration}
 */
export interface ApplicationInsightsApplicationComponentConfiguration {
  SubComponentTypeConfigurations?: any[];
  ConfigurationDetails?: ApplicationInsightsApplicationConfigurationDetails;
}
/**
 * Type definition for AWS::ApplicationInsights::Application.ComponentMonitoringSetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-componentmonitoringsetting.html | AWS::ApplicationInsights::Application.ComponentMonitoringSetting}
 */
export interface ApplicationInsightsApplicationComponentMonitoringSetting {
  CustomComponentConfiguration?: ApplicationInsightsApplicationComponentConfiguration;
  Tier: string;
  ComponentConfigurationMode: string;
  DefaultOverwriteComponentConfiguration?: ApplicationInsightsApplicationComponentConfiguration;
  ComponentName?: string;
  ComponentARN?: string;
}
/**
 * Type definition for AWS::ApplicationInsights::Application.ConfigurationDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-configurationdetails.html | AWS::ApplicationInsights::Application.ConfigurationDetails}
 */
export interface ApplicationInsightsApplicationConfigurationDetails {
  WindowsEvents?: any[];
  AlarmMetrics?: any[];
  Alarms?: any[];
  HAClusterPrometheusExporter?: ApplicationInsightsApplicationHAClusterPrometheusExporter;
  HANAPrometheusExporter?: ApplicationInsightsApplicationHANAPrometheusExporter;
  Logs?: any[];
  JMXPrometheusExporter?: ApplicationInsightsApplicationJMXPrometheusExporter;
}
/**
 * Type definition for AWS::ApplicationInsights::Application.CustomComponent
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-customcomponent.html | AWS::ApplicationInsights::Application.CustomComponent}
 */
export interface ApplicationInsightsApplicationCustomComponent {
  ResourceList: any[];
  ComponentName: string;
}
/**
 * Type definition for AWS::ApplicationInsights::Application.HAClusterPrometheusExporter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-haclusterprometheusexporter.html | AWS::ApplicationInsights::Application.HAClusterPrometheusExporter}
 */
export interface ApplicationInsightsApplicationHAClusterPrometheusExporter {
  PrometheusPort?: string;
}
/**
 * Type definition for AWS::ApplicationInsights::Application.HANAPrometheusExporter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-hanaprometheusexporter.html | AWS::ApplicationInsights::Application.HANAPrometheusExporter}
 */
export interface ApplicationInsightsApplicationHANAPrometheusExporter {
  HANAPort: string;
  PrometheusPort?: string;
  HANASecretName: string;
  HANASID: string;
  AgreeToInstallHANADBClient: boolean;
}
/**
 * Type definition for AWS::ApplicationInsights::Application.JMXPrometheusExporter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-jmxprometheusexporter.html | AWS::ApplicationInsights::Application.JMXPrometheusExporter}
 */
export interface ApplicationInsightsApplicationJMXPrometheusExporter {
  PrometheusPort?: string;
  JMXURL?: string;
  HostPort?: string;
}
/**
 * Type definition for AWS::ApplicationInsights::Application.Log
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-log.html | AWS::ApplicationInsights::Application.Log}
 */
export interface ApplicationInsightsApplicationLog {
  LogType: string;
  Encoding?: string;
  LogGroupName?: string;
  LogPath?: string;
  PatternSet?: string;
}
/**
 * Type definition for AWS::ApplicationInsights::Application.LogPattern
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-logpattern.html | AWS::ApplicationInsights::Application.LogPattern}
 */
export interface ApplicationInsightsApplicationLogPattern {
  Pattern: string;
  Rank: number;
  PatternName: string;
}
/**
 * Type definition for AWS::ApplicationInsights::Application.LogPatternSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-logpatternset.html | AWS::ApplicationInsights::Application.LogPatternSet}
 */
export interface ApplicationInsightsApplicationLogPatternSet {
  PatternSetName: string;
  LogPatterns: any[];
}
/**
 * Type definition for AWS::ApplicationInsights::Application.SubComponentConfigurationDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-subcomponentconfigurationdetails.html | AWS::ApplicationInsights::Application.SubComponentConfigurationDetails}
 */
export interface ApplicationInsightsApplicationSubComponentConfigurationDetails {
  WindowsEvents?: any[];
  AlarmMetrics?: any[];
  Logs?: any[];
}
/**
 * Type definition for AWS::ApplicationInsights::Application.SubComponentTypeConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-subcomponenttypeconfiguration.html | AWS::ApplicationInsights::Application.SubComponentTypeConfiguration}
 */
export interface ApplicationInsightsApplicationSubComponentTypeConfiguration {
  SubComponentType: string;
  SubComponentConfigurationDetails: ApplicationInsightsApplicationSubComponentConfigurationDetails;
}
/**
 * Type definition for AWS::ApplicationInsights::Application.WindowsEvent
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-windowsevent.html | AWS::ApplicationInsights::Application.WindowsEvent}
 */
export interface ApplicationInsightsApplicationWindowsEvent {
  EventLevels: any[];
  LogGroupName: string;
  EventName: string;
  PatternSet?: string;
}
/**
 * Type definition for AWS::ApplicationInsights::Application
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html | AWS::ApplicationInsights::Application}
 */
export interface ApplicationInsightsApplicationProps {
  AutoConfigurationEnabled?: boolean;
  OpsItemSNSTopicArn?: string;
  OpsCenterEnabled?: boolean;
  CustomComponents?: any[];
  LogPatternSets?: any[];
  GroupingType?: string;
  ComponentMonitoringSettings?: any[];
  CWEMonitorEnabled?: boolean;
  Tags?: Tag[];
  ResourceGroupName: string;
}
/**
 * Attributes type definition for AWS::ApplicationInsights::Application
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html | AWS::ApplicationInsights::Application}
 */
export interface ApplicationInsightsApplicationAttribs {
  ApplicationARN?: string;
}
/**
 * Resource class for AWS::ApplicationInsights::Application
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html | AWS::ApplicationInsights::Application}
 */
export class ApplicationInsightsApplication extends ResourceBase<
  "AWS::ApplicationInsights::Application",
  ApplicationInsightsApplicationProps,
  ApplicationInsightsApplicationAttribs
> {
  public static readonly Type = "AWS::ApplicationInsights::Application";
  public static readonly AttributeNames: readonly (keyof ApplicationInsightsApplicationAttribs)[] =
    ["ApplicationARN"];
  constructor(
    logicalId: string,
    properties: ApplicationInsightsApplicationProps,
    options?: ResourceOptions,
  ) {
    super(
      ApplicationInsightsApplication.Type,
      ApplicationInsightsApplication.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
