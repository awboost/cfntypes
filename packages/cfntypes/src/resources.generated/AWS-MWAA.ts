import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::MWAA::Environment.LoggingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mwaa-environment-loggingconfiguration.html | AWS::MWAA::Environment.LoggingConfiguration}
 */
export interface MWAAEnvironmentLoggingConfiguration {
  SchedulerLogs?: MWAAEnvironmentModuleLoggingConfiguration;
  TaskLogs?: MWAAEnvironmentModuleLoggingConfiguration;
  DagProcessingLogs?: MWAAEnvironmentModuleLoggingConfiguration;
  WebserverLogs?: MWAAEnvironmentModuleLoggingConfiguration;
  WorkerLogs?: MWAAEnvironmentModuleLoggingConfiguration;
}
/**
 * Type definition for AWS::MWAA::Environment.ModuleLoggingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mwaa-environment-moduleloggingconfiguration.html | AWS::MWAA::Environment.ModuleLoggingConfiguration}
 */
export interface MWAAEnvironmentModuleLoggingConfiguration {
  CloudWatchLogGroupArn?: string;
  Enabled?: boolean;
  LogLevel?: string;
}
/**
 * Type definition for AWS::MWAA::Environment.NetworkConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mwaa-environment-networkconfiguration.html | AWS::MWAA::Environment.NetworkConfiguration}
 */
export interface MWAAEnvironmentNetworkConfiguration {
  SubnetIds?: any[];
  SecurityGroupIds?: any[];
}
/**
 * Type definition for AWS::MWAA::Environment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html | AWS::MWAA::Environment}
 */
export interface MWAAEnvironmentProps {
  AirflowConfigurationOptions?: object;
  MaxWorkers?: number;
  EnvironmentClass?: string;
  Schedulers?: number;
  RequirementsS3Path?: string;
  PluginsS3Path?: string;
  MinWorkers?: number;
  AirflowVersion?: string;
  StartupScriptS3Path?: string;
  Name: string;
  RequirementsS3ObjectVersion?: string;
  SourceBucketArn?: string;
  ExecutionRoleArn?: string;
  WeeklyMaintenanceWindowStart?: string;
  PluginsS3ObjectVersion?: string;
  StartupScriptS3ObjectVersion?: string;
  DagS3Path?: string;
  LoggingConfiguration?: MWAAEnvironmentLoggingConfiguration;
  WebserverAccessMode?: string;
  NetworkConfiguration?: MWAAEnvironmentNetworkConfiguration;
  KmsKey?: string;
  Tags?: object;
}
/**
 * Attributes type definition for AWS::MWAA::Environment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html | AWS::MWAA::Environment}
 */
export interface MWAAEnvironmentAttribs {
  "LoggingConfiguration.TaskLogs.CloudWatchLogGroupArn"?: string;
  "LoggingConfiguration.WebserverLogs.CloudWatchLogGroupArn"?: string;
  "LoggingConfiguration.DagProcessingLogs.CloudWatchLogGroupArn"?: string;
  WebserverUrl?: string;
  "LoggingConfiguration.SchedulerLogs.CloudWatchLogGroupArn"?: string;
  Arn?: string;
  "LoggingConfiguration.WorkerLogs.CloudWatchLogGroupArn"?: string;
}
/**
 * Resource class for AWS::MWAA::Environment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html | AWS::MWAA::Environment}
 */
export class MWAAEnvironment extends ResourceBase<
  "AWS::MWAA::Environment",
  MWAAEnvironmentProps,
  MWAAEnvironmentAttribs
> {
  public static readonly Type = "AWS::MWAA::Environment";
  public static readonly AttributeNames: readonly (keyof MWAAEnvironmentAttribs)[] =
    [
      "LoggingConfiguration.TaskLogs.CloudWatchLogGroupArn",
      "LoggingConfiguration.WebserverLogs.CloudWatchLogGroupArn",
      "LoggingConfiguration.DagProcessingLogs.CloudWatchLogGroupArn",
      "WebserverUrl",
      "LoggingConfiguration.SchedulerLogs.CloudWatchLogGroupArn",
      "Arn",
      "LoggingConfiguration.WorkerLogs.CloudWatchLogGroupArn",
    ];
  constructor(
    logicalId: string,
    properties: MWAAEnvironmentProps,
    options?: ResourceOptions,
  ) {
    super(
      MWAAEnvironment.Type,
      MWAAEnvironment.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
