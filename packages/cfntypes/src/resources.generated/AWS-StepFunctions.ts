import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::StepFunctions::Activity.TagsEntry
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-activity-tagsentry.html | AWS::StepFunctions::Activity.TagsEntry}
 */
export interface StepFunctionsActivityTagsEntry {
  Value: string;
  Key: string;
}
/**
 * Type definition for AWS::StepFunctions::StateMachine.CloudWatchLogsLogGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-cloudwatchlogsloggroup.html | AWS::StepFunctions::StateMachine.CloudWatchLogsLogGroup}
 */
export interface StepFunctionsStateMachineCloudWatchLogsLogGroup {
  LogGroupArn?: string;
}
/**
 * Type definition for AWS::StepFunctions::StateMachine.LogDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-logdestination.html | AWS::StepFunctions::StateMachine.LogDestination}
 */
export interface StepFunctionsStateMachineLogDestination {
  CloudWatchLogsLogGroup?: StepFunctionsStateMachineCloudWatchLogsLogGroup;
}
/**
 * Type definition for AWS::StepFunctions::StateMachine.LoggingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-loggingconfiguration.html | AWS::StepFunctions::StateMachine.LoggingConfiguration}
 */
export interface StepFunctionsStateMachineLoggingConfiguration {
  IncludeExecutionData?: boolean;
  Destinations?: any[];
  Level?: string;
}
/**
 * Type definition for AWS::StepFunctions::StateMachine.S3Location
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-s3location.html | AWS::StepFunctions::StateMachine.S3Location}
 */
export interface StepFunctionsStateMachineS3Location {
  Bucket: string;
  Version?: string;
  Key: string;
}
/**
 * Type definition for AWS::StepFunctions::StateMachine.TagsEntry
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-tagsentry.html | AWS::StepFunctions::StateMachine.TagsEntry}
 */
export interface StepFunctionsStateMachineTagsEntry {
  Value: string;
  Key: string;
}
/**
 * Type definition for AWS::StepFunctions::StateMachine.TracingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-tracingconfiguration.html | AWS::StepFunctions::StateMachine.TracingConfiguration}
 */
export interface StepFunctionsStateMachineTracingConfiguration {
  Enabled?: boolean;
}
/**
 * Type definition for AWS::StepFunctions::StateMachineAlias.DeploymentPreference
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachinealias-deploymentpreference.html | AWS::StepFunctions::StateMachineAlias.DeploymentPreference}
 */
export interface StepFunctionsStateMachineAliasDeploymentPreference {
  Type: string;
  StateMachineVersionArn: string;
  Percentage?: number;
  Alarms?: any[];
  Interval?: number;
}
/**
 * Type definition for AWS::StepFunctions::StateMachineAlias.RoutingConfigurationVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachinealias-routingconfigurationversion.html | AWS::StepFunctions::StateMachineAlias.RoutingConfigurationVersion}
 */
export interface StepFunctionsStateMachineAliasRoutingConfigurationVersion {
  StateMachineVersionArn: string;
  Weight: number;
}
/**
 * Type definition for AWS::StepFunctions::Activity
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-activity.html | AWS::StepFunctions::Activity}
 */
export interface StepFunctionsActivityProps {
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::StepFunctions::Activity
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-activity.html | AWS::StepFunctions::Activity}
 */
export interface StepFunctionsActivityAttribs {
  Arn?: string;
  Name?: string;
}
/**
 * Resource class for AWS::StepFunctions::Activity
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-activity.html | AWS::StepFunctions::Activity}
 */
export class StepFunctionsActivity extends ResourceBase<
  "AWS::StepFunctions::Activity",
  StepFunctionsActivityProps,
  StepFunctionsActivityAttribs
> {
  public static readonly Type = "AWS::StepFunctions::Activity";
  public static readonly AttributeNames: readonly (keyof StepFunctionsActivityAttribs)[] =
    ["Arn", "Name"];
  constructor(
    logicalId: string,
    properties: StepFunctionsActivityProps,
    options?: ResourceOptions,
  ) {
    super(
      StepFunctionsActivity.Type,
      StepFunctionsActivity.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::StepFunctions::StateMachine
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html | AWS::StepFunctions::StateMachine}
 */
export interface StepFunctionsStateMachineProps {
  DefinitionString?: string;
  LoggingConfiguration?: StepFunctionsStateMachineLoggingConfiguration;
  DefinitionSubstitutions?: Record<string, any>;
  Definition?: object;
  DefinitionS3Location?: StepFunctionsStateMachineS3Location;
  StateMachineName?: string;
  RoleArn: string;
  Tags?: Tag[];
  StateMachineType?: string;
  TracingConfiguration?: StepFunctionsStateMachineTracingConfiguration;
}
/**
 * Attributes type definition for AWS::StepFunctions::StateMachine
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html | AWS::StepFunctions::StateMachine}
 */
export interface StepFunctionsStateMachineAttribs {
  StateMachineRevisionId?: string;
  Arn?: string;
  Name?: string;
}
/**
 * Resource class for AWS::StepFunctions::StateMachine
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html | AWS::StepFunctions::StateMachine}
 */
export class StepFunctionsStateMachine extends ResourceBase<
  "AWS::StepFunctions::StateMachine",
  StepFunctionsStateMachineProps,
  StepFunctionsStateMachineAttribs
> {
  public static readonly Type = "AWS::StepFunctions::StateMachine";
  public static readonly AttributeNames: readonly (keyof StepFunctionsStateMachineAttribs)[] =
    ["StateMachineRevisionId", "Arn", "Name"];
  constructor(
    logicalId: string,
    properties: StepFunctionsStateMachineProps,
    options?: ResourceOptions,
  ) {
    super(
      StepFunctionsStateMachine.Type,
      StepFunctionsStateMachine.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::StepFunctions::StateMachineAlias
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachinealias.html | AWS::StepFunctions::StateMachineAlias}
 */
export interface StepFunctionsStateMachineAliasProps {
  Description?: string;
  RoutingConfiguration?: any[];
  DeploymentPreference?: StepFunctionsStateMachineAliasDeploymentPreference;
  Name?: string;
}
/**
 * Attributes type definition for AWS::StepFunctions::StateMachineAlias
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachinealias.html | AWS::StepFunctions::StateMachineAlias}
 */
export interface StepFunctionsStateMachineAliasAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::StepFunctions::StateMachineAlias
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachinealias.html | AWS::StepFunctions::StateMachineAlias}
 */
export class StepFunctionsStateMachineAlias extends ResourceBase<
  "AWS::StepFunctions::StateMachineAlias",
  StepFunctionsStateMachineAliasProps,
  StepFunctionsStateMachineAliasAttribs
> {
  public static readonly Type = "AWS::StepFunctions::StateMachineAlias";
  public static readonly AttributeNames: readonly (keyof StepFunctionsStateMachineAliasAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: StepFunctionsStateMachineAliasProps,
    options?: ResourceOptions,
  ) {
    super(
      StepFunctionsStateMachineAlias.Type,
      StepFunctionsStateMachineAlias.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::StepFunctions::StateMachineVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachineversion.html | AWS::StepFunctions::StateMachineVersion}
 */
export interface StepFunctionsStateMachineVersionProps {
  Description?: string;
  StateMachineRevisionId?: string;
  StateMachineArn: string;
}
/**
 * Attributes type definition for AWS::StepFunctions::StateMachineVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachineversion.html | AWS::StepFunctions::StateMachineVersion}
 */
export interface StepFunctionsStateMachineVersionAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::StepFunctions::StateMachineVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachineversion.html | AWS::StepFunctions::StateMachineVersion}
 */
export class StepFunctionsStateMachineVersion extends ResourceBase<
  "AWS::StepFunctions::StateMachineVersion",
  StepFunctionsStateMachineVersionProps,
  StepFunctionsStateMachineVersionAttribs
> {
  public static readonly Type = "AWS::StepFunctions::StateMachineVersion";
  public static readonly AttributeNames: readonly (keyof StepFunctionsStateMachineVersionAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: StepFunctionsStateMachineVersionProps,
    options?: ResourceOptions,
  ) {
    super(
      StepFunctionsStateMachineVersion.Type,
      StepFunctionsStateMachineVersion.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
