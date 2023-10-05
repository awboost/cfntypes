import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::AutoScalingPlans::ScalingPlan.ApplicationSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscalingplans-scalingplan-applicationsource.html | AWS::AutoScalingPlans::ScalingPlan.ApplicationSource}
 */
export interface AutoScalingPlansScalingPlanApplicationSource {
  CloudFormationStackARN?: string;
  TagFilters?: any[];
}
/**
 * Type definition for AWS::AutoScalingPlans::ScalingPlan.CustomizedLoadMetricSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscalingplans-scalingplan-customizedloadmetricspecification.html | AWS::AutoScalingPlans::ScalingPlan.CustomizedLoadMetricSpecification}
 */
export interface AutoScalingPlansScalingPlanCustomizedLoadMetricSpecification {
  MetricName: string;
  Statistic: string;
  Dimensions?: any[];
  Unit?: string;
  Namespace: string;
}
/**
 * Type definition for AWS::AutoScalingPlans::ScalingPlan.CustomizedScalingMetricSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscalingplans-scalingplan-customizedscalingmetricspecification.html | AWS::AutoScalingPlans::ScalingPlan.CustomizedScalingMetricSpecification}
 */
export interface AutoScalingPlansScalingPlanCustomizedScalingMetricSpecification {
  MetricName: string;
  Statistic: string;
  Dimensions?: any[];
  Unit?: string;
  Namespace: string;
}
/**
 * Type definition for AWS::AutoScalingPlans::ScalingPlan.MetricDimension
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscalingplans-scalingplan-metricdimension.html | AWS::AutoScalingPlans::ScalingPlan.MetricDimension}
 */
export interface AutoScalingPlansScalingPlanMetricDimension {
  Value: string;
  Name: string;
}
/**
 * Type definition for AWS::AutoScalingPlans::ScalingPlan.PredefinedLoadMetricSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscalingplans-scalingplan-predefinedloadmetricspecification.html | AWS::AutoScalingPlans::ScalingPlan.PredefinedLoadMetricSpecification}
 */
export interface AutoScalingPlansScalingPlanPredefinedLoadMetricSpecification {
  PredefinedLoadMetricType: string;
  ResourceLabel?: string;
}
/**
 * Type definition for AWS::AutoScalingPlans::ScalingPlan.PredefinedScalingMetricSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscalingplans-scalingplan-predefinedscalingmetricspecification.html | AWS::AutoScalingPlans::ScalingPlan.PredefinedScalingMetricSpecification}
 */
export interface AutoScalingPlansScalingPlanPredefinedScalingMetricSpecification {
  ResourceLabel?: string;
  PredefinedScalingMetricType: string;
}
/**
 * Type definition for AWS::AutoScalingPlans::ScalingPlan.ScalingInstruction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscalingplans-scalingplan-scalinginstruction.html | AWS::AutoScalingPlans::ScalingPlan.ScalingInstruction}
 */
export interface AutoScalingPlansScalingPlanScalingInstruction {
  DisableDynamicScaling?: boolean;
  ServiceNamespace: string;
  PredictiveScalingMaxCapacityBehavior?: string;
  ScalableDimension: string;
  ScalingPolicyUpdateBehavior?: string;
  MinCapacity: number;
  TargetTrackingConfigurations: any[];
  PredictiveScalingMaxCapacityBuffer?: number;
  CustomizedLoadMetricSpecification?: AutoScalingPlansScalingPlanCustomizedLoadMetricSpecification;
  PredefinedLoadMetricSpecification?: AutoScalingPlansScalingPlanPredefinedLoadMetricSpecification;
  ResourceId: string;
  ScheduledActionBufferTime?: number;
  MaxCapacity: number;
  PredictiveScalingMode?: string;
}
/**
 * Type definition for AWS::AutoScalingPlans::ScalingPlan.TagFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscalingplans-scalingplan-tagfilter.html | AWS::AutoScalingPlans::ScalingPlan.TagFilter}
 */
export interface AutoScalingPlansScalingPlanTagFilter {
  Values?: any[];
  Key: string;
}
/**
 * Type definition for AWS::AutoScalingPlans::ScalingPlan.TargetTrackingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscalingplans-scalingplan-targettrackingconfiguration.html | AWS::AutoScalingPlans::ScalingPlan.TargetTrackingConfiguration}
 */
export interface AutoScalingPlansScalingPlanTargetTrackingConfiguration {
  ScaleOutCooldown?: number;
  TargetValue: number;
  PredefinedScalingMetricSpecification?: AutoScalingPlansScalingPlanPredefinedScalingMetricSpecification;
  DisableScaleIn?: boolean;
  ScaleInCooldown?: number;
  EstimatedInstanceWarmup?: number;
  CustomizedScalingMetricSpecification?: AutoScalingPlansScalingPlanCustomizedScalingMetricSpecification;
}
/**
 * Type definition for AWS::AutoScalingPlans::ScalingPlan
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscalingplans-scalingplan.html | AWS::AutoScalingPlans::ScalingPlan}
 */
export interface AutoScalingPlansScalingPlanProps {
  ApplicationSource: AutoScalingPlansScalingPlanApplicationSource;
  ScalingInstructions: any[];
}
/**
 * Attributes type definition for AWS::AutoScalingPlans::ScalingPlan
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscalingplans-scalingplan.html | AWS::AutoScalingPlans::ScalingPlan}
 */
export interface AutoScalingPlansScalingPlanAttribs {
  ScalingPlanName?: string;
  ScalingPlanVersion?: string;
}
/**
 * Resource class for AWS::AutoScalingPlans::ScalingPlan
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscalingplans-scalingplan.html | AWS::AutoScalingPlans::ScalingPlan}
 */
export class AutoScalingPlansScalingPlan extends ResourceBase<
  "AWS::AutoScalingPlans::ScalingPlan",
  AutoScalingPlansScalingPlanProps,
  AutoScalingPlansScalingPlanAttribs
> {
  public static readonly Type = "AWS::AutoScalingPlans::ScalingPlan";
  public static readonly AttributeNames: readonly (keyof AutoScalingPlansScalingPlanAttribs)[] =
    ["ScalingPlanName", "ScalingPlanVersion"];
  constructor(
    logicalId: string,
    properties: AutoScalingPlansScalingPlanProps,
    options?: ResourceOptions,
  ) {
    super(
      AutoScalingPlansScalingPlan.Type,
      AutoScalingPlansScalingPlan.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
