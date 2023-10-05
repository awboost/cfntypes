import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::InternetMonitor::Monitor.HealthEventsConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-internetmonitor-monitor-healtheventsconfig.html | AWS::InternetMonitor::Monitor.HealthEventsConfig}
 */
export interface InternetMonitorMonitorHealthEventsConfig {
  AvailabilityLocalHealthEventsConfig?: InternetMonitorMonitorLocalHealthEventsConfig;
  PerformanceScoreThreshold?: number;
  PerformanceLocalHealthEventsConfig?: InternetMonitorMonitorLocalHealthEventsConfig;
  AvailabilityScoreThreshold?: number;
}
/**
 * Type definition for AWS::InternetMonitor::Monitor.InternetMeasurementsLogDelivery
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-internetmonitor-monitor-internetmeasurementslogdelivery.html | AWS::InternetMonitor::Monitor.InternetMeasurementsLogDelivery}
 */
export interface InternetMonitorMonitorInternetMeasurementsLogDelivery {
  S3Config?: InternetMonitorMonitorS3Config;
}
/**
 * Type definition for AWS::InternetMonitor::Monitor.LocalHealthEventsConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-internetmonitor-monitor-localhealtheventsconfig.html | AWS::InternetMonitor::Monitor.LocalHealthEventsConfig}
 */
export interface InternetMonitorMonitorLocalHealthEventsConfig {
  Status?: string;
  HealthScoreThreshold?: number;
  MinTrafficImpact?: number;
}
/**
 * Type definition for AWS::InternetMonitor::Monitor.S3Config
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-internetmonitor-monitor-s3config.html | AWS::InternetMonitor::Monitor.S3Config}
 */
export interface InternetMonitorMonitorS3Config {
  BucketName?: string;
  LogDeliveryStatus?: string;
  BucketPrefix?: string;
}
/**
 * Type definition for AWS::InternetMonitor::Monitor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-internetmonitor-monitor.html | AWS::InternetMonitor::Monitor}
 */
export interface InternetMonitorMonitorProps {
  Status?: string;
  TrafficPercentageToMonitor?: number;
  HealthEventsConfig?: InternetMonitorMonitorHealthEventsConfig;
  ResourcesToAdd?: any[];
  InternetMeasurementsLogDelivery?: InternetMonitorMonitorInternetMeasurementsLogDelivery;
  MonitorName: string;
  ResourcesToRemove?: any[];
  Resources?: any[];
  MaxCityNetworksToMonitor?: number;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::InternetMonitor::Monitor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-internetmonitor-monitor.html | AWS::InternetMonitor::Monitor}
 */
export interface InternetMonitorMonitorAttribs {
  ModifiedAt?: string;
  MonitorArn?: string;
  CreatedAt?: string;
  ProcessingStatusInfo?: string;
  ProcessingStatus?: string;
}
/**
 * Resource class for AWS::InternetMonitor::Monitor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-internetmonitor-monitor.html | AWS::InternetMonitor::Monitor}
 */
export class InternetMonitorMonitor extends ResourceBase<
  "AWS::InternetMonitor::Monitor",
  InternetMonitorMonitorProps,
  InternetMonitorMonitorAttribs
> {
  public static readonly Type = "AWS::InternetMonitor::Monitor";
  public static readonly AttributeNames: readonly (keyof InternetMonitorMonitorAttribs)[] =
    [
      "ModifiedAt",
      "MonitorArn",
      "CreatedAt",
      "ProcessingStatusInfo",
      "ProcessingStatus",
    ];
  constructor(
    logicalId: string,
    properties: InternetMonitorMonitorProps,
    options?: ResourceOptions,
  ) {
    super(
      InternetMonitorMonitor.Type,
      InternetMonitorMonitor.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
