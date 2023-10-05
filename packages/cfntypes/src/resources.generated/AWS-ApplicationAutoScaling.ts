import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::ApplicationAutoScaling::ScalableTarget.ScalableTargetAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalabletarget-scalabletargetaction.html | AWS::ApplicationAutoScaling::ScalableTarget.ScalableTargetAction}
 */
export interface ApplicationAutoScalingScalableTargetScalableTargetAction {
  MinCapacity?: number;
  MaxCapacity?: number;
}
/**
 * Type definition for AWS::ApplicationAutoScaling::ScalableTarget.ScheduledAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalabletarget-scheduledaction.html | AWS::ApplicationAutoScaling::ScalableTarget.ScheduledAction}
 */
export interface ApplicationAutoScalingScalableTargetScheduledAction {
  Timezone?: string;
  ScheduledActionName: string;
  EndTime?: string;
  Schedule: string;
  StartTime?: string;
  ScalableTargetAction?: ApplicationAutoScalingScalableTargetScalableTargetAction;
}
/**
 * Type definition for AWS::ApplicationAutoScaling::ScalableTarget.SuspendedState
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalabletarget-suspendedstate.html | AWS::ApplicationAutoScaling::ScalableTarget.SuspendedState}
 */
export interface ApplicationAutoScalingScalableTargetSuspendedState {
  DynamicScalingOutSuspended?: boolean;
  ScheduledScalingSuspended?: boolean;
  DynamicScalingInSuspended?: boolean;
}
/**
 * Type definition for AWS::ApplicationAutoScaling::ScalingPolicy.CustomizedMetricSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-customizedmetricspecification.html | AWS::ApplicationAutoScaling::ScalingPolicy.CustomizedMetricSpecification}
 */
export interface ApplicationAutoScalingScalingPolicyCustomizedMetricSpecification {
  Dimensions?: any[];
  MetricName: string;
  Namespace: string;
  Statistic: string;
  Unit?: string;
}
/**
 * Type definition for AWS::ApplicationAutoScaling::ScalingPolicy.MetricDimension
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-metricdimension.html | AWS::ApplicationAutoScaling::ScalingPolicy.MetricDimension}
 */
export interface ApplicationAutoScalingScalingPolicyMetricDimension {
  Name: string;
  Value: string;
}
/**
 * Type definition for AWS::ApplicationAutoScaling::ScalingPolicy.PredefinedMetricSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predefinedmetricspecification.html | AWS::ApplicationAutoScaling::ScalingPolicy.PredefinedMetricSpecification}
 */
export interface ApplicationAutoScalingScalingPolicyPredefinedMetricSpecification {
  PredefinedMetricType: string;
  ResourceLabel?: string;
}
/**
 * Type definition for AWS::ApplicationAutoScaling::ScalingPolicy.StepAdjustment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-stepscalingpolicyconfiguration-stepadjustment.html | AWS::ApplicationAutoScaling::ScalingPolicy.StepAdjustment}
 */
export interface ApplicationAutoScalingScalingPolicyStepAdjustment {
  MetricIntervalLowerBound?: number;
  MetricIntervalUpperBound?: number;
  ScalingAdjustment: number;
}
/**
 * Type definition for AWS::ApplicationAutoScaling::ScalingPolicy.StepScalingPolicyConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-stepscalingpolicyconfiguration.html | AWS::ApplicationAutoScaling::ScalingPolicy.StepScalingPolicyConfiguration}
 */
export interface ApplicationAutoScalingScalingPolicyStepScalingPolicyConfiguration {
  AdjustmentType?: string;
  Cooldown?: number;
  MetricAggregationType?: string;
  MinAdjustmentMagnitude?: number;
  StepAdjustments?: any[];
}
/**
 * Type definition for AWS::ApplicationAutoScaling::ScalingPolicy.TargetTrackingScalingPolicyConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingscalingpolicyconfiguration.html | AWS::ApplicationAutoScaling::ScalingPolicy.TargetTrackingScalingPolicyConfiguration}
 */
export interface ApplicationAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration {
  CustomizedMetricSpecification?: ApplicationAutoScalingScalingPolicyCustomizedMetricSpecification;
  DisableScaleIn?: boolean;
  PredefinedMetricSpecification?: ApplicationAutoScalingScalingPolicyPredefinedMetricSpecification;
  ScaleInCooldown?: number;
  ScaleOutCooldown?: number;
  TargetValue: number;
}
/**
 * Type definition for AWS::ApplicationAutoScaling::ScalableTarget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalabletarget.html | AWS::ApplicationAutoScaling::ScalableTarget}
 */
export interface ApplicationAutoScalingScalableTargetProps {
  ScheduledActions?: any[];
  ResourceId: string;
  ServiceNamespace: string;
  ScalableDimension: string;
  SuspendedState?: ApplicationAutoScalingScalableTargetSuspendedState;
  MinCapacity: number;
  RoleARN?: string;
  MaxCapacity: number;
}
/**
 * Attributes type definition for AWS::ApplicationAutoScaling::ScalableTarget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalabletarget.html | AWS::ApplicationAutoScaling::ScalableTarget}
 */
export interface ApplicationAutoScalingScalableTargetAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::ApplicationAutoScaling::ScalableTarget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalabletarget.html | AWS::ApplicationAutoScaling::ScalableTarget}
 */
export class ApplicationAutoScalingScalableTarget extends ResourceBase<
  "AWS::ApplicationAutoScaling::ScalableTarget",
  ApplicationAutoScalingScalableTargetProps,
  ApplicationAutoScalingScalableTargetAttribs
> {
  public static readonly Type = "AWS::ApplicationAutoScaling::ScalableTarget";
  public static readonly AttributeNames: readonly (keyof ApplicationAutoScalingScalableTargetAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: ApplicationAutoScalingScalableTargetProps,
    options?: ResourceOptions,
  ) {
    super(
      ApplicationAutoScalingScalableTarget.Type,
      ApplicationAutoScalingScalableTarget.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ApplicationAutoScaling::ScalingPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html | AWS::ApplicationAutoScaling::ScalingPolicy}
 */
export interface ApplicationAutoScalingScalingPolicyProps {
  PolicyName: string;
  PolicyType: string;
  ResourceId?: string;
  ScalableDimension?: string;
  ScalingTargetId?: string;
  ServiceNamespace?: string;
  StepScalingPolicyConfiguration?: ApplicationAutoScalingScalingPolicyStepScalingPolicyConfiguration;
  TargetTrackingScalingPolicyConfiguration?: ApplicationAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration;
}
/**
 * Resource class for AWS::ApplicationAutoScaling::ScalingPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html | AWS::ApplicationAutoScaling::ScalingPolicy}
 */
export class ApplicationAutoScalingScalingPolicy extends ResourceBase<
  "AWS::ApplicationAutoScaling::ScalingPolicy",
  ApplicationAutoScalingScalingPolicyProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::ApplicationAutoScaling::ScalingPolicy";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ApplicationAutoScalingScalingPolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      ApplicationAutoScalingScalingPolicy.Type,
      ApplicationAutoScalingScalingPolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
