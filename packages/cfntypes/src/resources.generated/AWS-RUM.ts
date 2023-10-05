import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::RUM::AppMonitor.AppMonitorConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rum-appmonitor-appmonitorconfiguration.html | AWS::RUM::AppMonitor.AppMonitorConfiguration}
 */
export interface RUMAppMonitorAppMonitorConfiguration {
  MetricDestinations?: any[];
  IncludedPages?: any[];
  ExcludedPages?: any[];
  FavoritePages?: any[];
  SessionSampleRate?: number;
  AllowCookies?: boolean;
  Telemetries?: any[];
  IdentityPoolId?: string;
  GuestRoleArn?: string;
  EnableXRay?: boolean;
}
/**
 * Type definition for AWS::RUM::AppMonitor.CustomEvents
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rum-appmonitor-customevents.html | AWS::RUM::AppMonitor.CustomEvents}
 */
export interface RUMAppMonitorCustomEvents {
  Status?: string;
}
/**
 * Type definition for AWS::RUM::AppMonitor.MetricDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rum-appmonitor-metricdefinition.html | AWS::RUM::AppMonitor.MetricDefinition}
 */
export interface RUMAppMonitorMetricDefinition {
  EventPattern?: string;
  ValueKey?: string;
  UnitLabel?: string;
  DimensionKeys?: Record<string, any>;
  Namespace?: string;
  Name: string;
}
/**
 * Type definition for AWS::RUM::AppMonitor.MetricDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rum-appmonitor-metricdestination.html | AWS::RUM::AppMonitor.MetricDestination}
 */
export interface RUMAppMonitorMetricDestination {
  Destination: string;
  IamRoleArn?: string;
  MetricDefinitions?: any[];
  DestinationArn?: string;
}
/**
 * Type definition for AWS::RUM::AppMonitor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html | AWS::RUM::AppMonitor}
 */
export interface RUMAppMonitorProps {
  CustomEvents?: RUMAppMonitorCustomEvents;
  CwLogEnabled?: boolean;
  Domain: string;
  AppMonitorConfiguration?: RUMAppMonitorAppMonitorConfiguration;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::RUM::AppMonitor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html | AWS::RUM::AppMonitor}
 */
export interface RUMAppMonitorAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::RUM::AppMonitor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html | AWS::RUM::AppMonitor}
 */
export class RUMAppMonitor extends ResourceBase<
  "AWS::RUM::AppMonitor",
  RUMAppMonitorProps,
  RUMAppMonitorAttribs
> {
  public static readonly Type = "AWS::RUM::AppMonitor";
  public static readonly AttributeNames: readonly (keyof RUMAppMonitorAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: RUMAppMonitorProps,
    options?: ResourceOptions,
  ) {
    super(
      RUMAppMonitor.Type,
      RUMAppMonitor.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
