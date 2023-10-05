import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Scheduler::Schedule.AwsVpcConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-awsvpcconfiguration.html | AWS::Scheduler::Schedule.AwsVpcConfiguration}
 */
export interface SchedulerScheduleAwsVpcConfiguration {
  SecurityGroups?: any[];
  Subnets: any[];
  AssignPublicIp?: string;
}
/**
 * Type definition for AWS::Scheduler::Schedule.CapacityProviderStrategyItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-capacityproviderstrategyitem.html | AWS::Scheduler::Schedule.CapacityProviderStrategyItem}
 */
export interface SchedulerScheduleCapacityProviderStrategyItem {
  CapacityProvider: string;
  Weight?: number;
  Base?: number;
}
/**
 * Type definition for AWS::Scheduler::Schedule.DeadLetterConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-deadletterconfig.html | AWS::Scheduler::Schedule.DeadLetterConfig}
 */
export interface SchedulerScheduleDeadLetterConfig {
  Arn?: string;
}
/**
 * Type definition for AWS::Scheduler::Schedule.EcsParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-ecsparameters.html | AWS::Scheduler::Schedule.EcsParameters}
 */
export interface SchedulerScheduleEcsParameters {
  PlatformVersion?: string;
  Group?: string;
  EnableECSManagedTags?: boolean;
  TaskCount?: number;
  EnableExecuteCommand?: boolean;
  PlacementConstraints?: any[];
  PropagateTags?: string;
  PlacementStrategy?: any[];
  LaunchType?: string;
  CapacityProviderStrategy?: any[];
  ReferenceId?: string;
  NetworkConfiguration?: SchedulerScheduleNetworkConfiguration;
  Tags?: object;
  TaskDefinitionArn: string;
}
/**
 * Type definition for AWS::Scheduler::Schedule.EventBridgeParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-eventbridgeparameters.html | AWS::Scheduler::Schedule.EventBridgeParameters}
 */
export interface SchedulerScheduleEventBridgeParameters {
  DetailType: string;
  Source: string;
}
/**
 * Type definition for AWS::Scheduler::Schedule.FlexibleTimeWindow
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-flexibletimewindow.html | AWS::Scheduler::Schedule.FlexibleTimeWindow}
 */
export interface SchedulerScheduleFlexibleTimeWindow {
  Mode: string;
  MaximumWindowInMinutes?: number;
}
/**
 * Type definition for AWS::Scheduler::Schedule.KinesisParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-kinesisparameters.html | AWS::Scheduler::Schedule.KinesisParameters}
 */
export interface SchedulerScheduleKinesisParameters {
  PartitionKey: string;
}
/**
 * Type definition for AWS::Scheduler::Schedule.NetworkConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-networkconfiguration.html | AWS::Scheduler::Schedule.NetworkConfiguration}
 */
export interface SchedulerScheduleNetworkConfiguration {
  AwsvpcConfiguration?: SchedulerScheduleAwsVpcConfiguration;
}
/**
 * Type definition for AWS::Scheduler::Schedule.PlacementConstraint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-placementconstraint.html | AWS::Scheduler::Schedule.PlacementConstraint}
 */
export interface SchedulerSchedulePlacementConstraint {
  Type?: string;
  Expression?: string;
}
/**
 * Type definition for AWS::Scheduler::Schedule.PlacementStrategy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-placementstrategy.html | AWS::Scheduler::Schedule.PlacementStrategy}
 */
export interface SchedulerSchedulePlacementStrategy {
  Field?: string;
  Type?: string;
}
/**
 * Type definition for AWS::Scheduler::Schedule.RetryPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-retrypolicy.html | AWS::Scheduler::Schedule.RetryPolicy}
 */
export interface SchedulerScheduleRetryPolicy {
  MaximumRetryAttempts?: number;
  MaximumEventAgeInSeconds?: number;
}
/**
 * Type definition for AWS::Scheduler::Schedule.SageMakerPipelineParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-sagemakerpipelineparameter.html | AWS::Scheduler::Schedule.SageMakerPipelineParameter}
 */
export interface SchedulerScheduleSageMakerPipelineParameter {
  Value: string;
  Name: string;
}
/**
 * Type definition for AWS::Scheduler::Schedule.SageMakerPipelineParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-sagemakerpipelineparameters.html | AWS::Scheduler::Schedule.SageMakerPipelineParameters}
 */
export interface SchedulerScheduleSageMakerPipelineParameters {
  PipelineParameterList?: any[];
}
/**
 * Type definition for AWS::Scheduler::Schedule.SqsParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-sqsparameters.html | AWS::Scheduler::Schedule.SqsParameters}
 */
export interface SchedulerScheduleSqsParameters {
  MessageGroupId?: string;
}
/**
 * Type definition for AWS::Scheduler::Schedule.Target
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-target.html | AWS::Scheduler::Schedule.Target}
 */
export interface SchedulerScheduleTarget {
  Input?: string;
  SqsParameters?: SchedulerScheduleSqsParameters;
  DeadLetterConfig?: SchedulerScheduleDeadLetterConfig;
  EcsParameters?: SchedulerScheduleEcsParameters;
  EventBridgeParameters?: SchedulerScheduleEventBridgeParameters;
  Arn: string;
  KinesisParameters?: SchedulerScheduleKinesisParameters;
  SageMakerPipelineParameters?: SchedulerScheduleSageMakerPipelineParameters;
  RetryPolicy?: SchedulerScheduleRetryPolicy;
  RoleArn: string;
}
/**
 * Type definition for AWS::Scheduler::Schedule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-scheduler-schedule.html | AWS::Scheduler::Schedule}
 */
export interface SchedulerScheduleProps {
  GroupName?: string;
  StartDate?: string;
  ScheduleExpression: string;
  Target: SchedulerScheduleTarget;
  Description?: string;
  KmsKeyArn?: string;
  State?: string;
  FlexibleTimeWindow: SchedulerScheduleFlexibleTimeWindow;
  ScheduleExpressionTimezone?: string;
  EndDate?: string;
  Name?: string;
}
/**
 * Attributes type definition for AWS::Scheduler::Schedule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-scheduler-schedule.html | AWS::Scheduler::Schedule}
 */
export interface SchedulerScheduleAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::Scheduler::Schedule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-scheduler-schedule.html | AWS::Scheduler::Schedule}
 */
export class SchedulerSchedule extends ResourceBase<
  "AWS::Scheduler::Schedule",
  SchedulerScheduleProps,
  SchedulerScheduleAttribs
> {
  public static readonly Type = "AWS::Scheduler::Schedule";
  public static readonly AttributeNames: readonly (keyof SchedulerScheduleAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: SchedulerScheduleProps,
    options?: ResourceOptions,
  ) {
    super(
      SchedulerSchedule.Type,
      SchedulerSchedule.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Scheduler::ScheduleGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-scheduler-schedulegroup.html | AWS::Scheduler::ScheduleGroup}
 */
export interface SchedulerScheduleGroupProps {
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::Scheduler::ScheduleGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-scheduler-schedulegroup.html | AWS::Scheduler::ScheduleGroup}
 */
export interface SchedulerScheduleGroupAttribs {
  CreationDate?: string;
  State?: string;
  LastModificationDate?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::Scheduler::ScheduleGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-scheduler-schedulegroup.html | AWS::Scheduler::ScheduleGroup}
 */
export class SchedulerScheduleGroup extends ResourceBase<
  "AWS::Scheduler::ScheduleGroup",
  SchedulerScheduleGroupProps,
  SchedulerScheduleGroupAttribs
> {
  public static readonly Type = "AWS::Scheduler::ScheduleGroup";
  public static readonly AttributeNames: readonly (keyof SchedulerScheduleGroupAttribs)[] =
    ["CreationDate", "State", "LastModificationDate", "Arn"];
  constructor(
    logicalId: string,
    properties: SchedulerScheduleGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      SchedulerScheduleGroup.Type,
      SchedulerScheduleGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
