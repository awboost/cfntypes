import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Evidently::Experiment.MetricGoalObject
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-metricgoalobject.html | AWS::Evidently::Experiment.MetricGoalObject}
 */
export interface EvidentlyExperimentMetricGoalObject {
  EntityIdKey: string;
  DesiredChange: string;
  MetricName: string;
  EventPattern?: string;
  ValueKey: string;
  UnitLabel?: string;
}
/**
 * Type definition for AWS::Evidently::Experiment.OnlineAbConfigObject
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-onlineabconfigobject.html | AWS::Evidently::Experiment.OnlineAbConfigObject}
 */
export interface EvidentlyExperimentOnlineAbConfigObject {
  TreatmentWeights?: any[];
  ControlTreatmentName?: string;
}
/**
 * Type definition for AWS::Evidently::Experiment.RunningStatusObject
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-runningstatusobject.html | AWS::Evidently::Experiment.RunningStatusObject}
 */
export interface EvidentlyExperimentRunningStatusObject {
  Status: string;
  DesiredState?: string;
  AnalysisCompleteTime?: string;
  Reason?: string;
}
/**
 * Type definition for AWS::Evidently::Experiment.TreatmentObject
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-treatmentobject.html | AWS::Evidently::Experiment.TreatmentObject}
 */
export interface EvidentlyExperimentTreatmentObject {
  Description?: string;
  Variation: string;
  Feature: string;
  TreatmentName: string;
}
/**
 * Type definition for AWS::Evidently::Experiment.TreatmentToWeight
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-treatmenttoweight.html | AWS::Evidently::Experiment.TreatmentToWeight}
 */
export interface EvidentlyExperimentTreatmentToWeight {
  Treatment: string;
  SplitWeight: number;
}
/**
 * Type definition for AWS::Evidently::Feature.EntityOverride
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-feature-entityoverride.html | AWS::Evidently::Feature.EntityOverride}
 */
export interface EvidentlyFeatureEntityOverride {
  EntityId?: string;
  Variation?: string;
}
/**
 * Type definition for AWS::Evidently::Feature.VariationObject
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-feature-variationobject.html | AWS::Evidently::Feature.VariationObject}
 */
export interface EvidentlyFeatureVariationObject {
  VariationName: string;
  DoubleValue?: number;
  BooleanValue?: boolean;
  LongValue?: number;
  StringValue?: string;
}
/**
 * Type definition for AWS::Evidently::Launch.ExecutionStatusObject
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-executionstatusobject.html | AWS::Evidently::Launch.ExecutionStatusObject}
 */
export interface EvidentlyLaunchExecutionStatusObject {
  Status: string;
  DesiredState?: string;
  Reason?: string;
}
/**
 * Type definition for AWS::Evidently::Launch.GroupToWeight
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-grouptoweight.html | AWS::Evidently::Launch.GroupToWeight}
 */
export interface EvidentlyLaunchGroupToWeight {
  GroupName: string;
  SplitWeight: number;
}
/**
 * Type definition for AWS::Evidently::Launch.LaunchGroupObject
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-launchgroupobject.html | AWS::Evidently::Launch.LaunchGroupObject}
 */
export interface EvidentlyLaunchLaunchGroupObject {
  GroupName: string;
  Description?: string;
  Variation: string;
  Feature: string;
}
/**
 * Type definition for AWS::Evidently::Launch.MetricDefinitionObject
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-metricdefinitionobject.html | AWS::Evidently::Launch.MetricDefinitionObject}
 */
export interface EvidentlyLaunchMetricDefinitionObject {
  EntityIdKey: string;
  MetricName: string;
  EventPattern?: string;
  ValueKey: string;
  UnitLabel?: string;
}
/**
 * Type definition for AWS::Evidently::Launch.SegmentOverride
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-segmentoverride.html | AWS::Evidently::Launch.SegmentOverride}
 */
export interface EvidentlyLaunchSegmentOverride {
  Weights: any[];
  EvaluationOrder: number;
  Segment: string;
}
/**
 * Type definition for AWS::Evidently::Launch.StepConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-stepconfig.html | AWS::Evidently::Launch.StepConfig}
 */
export interface EvidentlyLaunchStepConfig {
  GroupWeights: any[];
  SegmentOverrides?: any[];
  StartTime: string;
}
/**
 * Type definition for AWS::Evidently::Project.AppConfigResourceObject
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-project-appconfigresourceobject.html | AWS::Evidently::Project.AppConfigResourceObject}
 */
export interface EvidentlyProjectAppConfigResourceObject {
  EnvironmentId: string;
  ApplicationId: string;
}
/**
 * Type definition for AWS::Evidently::Project.DataDeliveryObject
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-project-datadeliveryobject.html | AWS::Evidently::Project.DataDeliveryObject}
 */
export interface EvidentlyProjectDataDeliveryObject {
  S3?: EvidentlyProjectS3Destination;
  LogGroup?: string;
}
/**
 * Type definition for AWS::Evidently::Project.S3Destination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-project-s3destination.html | AWS::Evidently::Project.S3Destination}
 */
export interface EvidentlyProjectS3Destination {
  BucketName: string;
  Prefix?: string;
}
/**
 * Type definition for AWS::Evidently::Experiment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-experiment.html | AWS::Evidently::Experiment}
 */
export interface EvidentlyExperimentProps {
  Project: string;
  RunningStatus?: EvidentlyExperimentRunningStatusObject;
  Description?: string;
  MetricGoals: any[];
  OnlineAbConfig: EvidentlyExperimentOnlineAbConfigObject;
  RemoveSegment?: boolean;
  RandomizationSalt?: string;
  Treatments: any[];
  SamplingRate?: number;
  Segment?: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::Evidently::Experiment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-experiment.html | AWS::Evidently::Experiment}
 */
export interface EvidentlyExperimentAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::Evidently::Experiment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-experiment.html | AWS::Evidently::Experiment}
 */
export class EvidentlyExperiment extends ResourceBase<
  "AWS::Evidently::Experiment",
  EvidentlyExperimentProps,
  EvidentlyExperimentAttribs
> {
  public static readonly Type = "AWS::Evidently::Experiment";
  public static readonly AttributeNames: readonly (keyof EvidentlyExperimentAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: EvidentlyExperimentProps,
    options?: ResourceOptions,
  ) {
    super(
      EvidentlyExperiment.Type,
      EvidentlyExperiment.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Evidently::Feature
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-feature.html | AWS::Evidently::Feature}
 */
export interface EvidentlyFeatureProps {
  Project: string;
  Description?: string;
  EvaluationStrategy?: string;
  DefaultVariation?: string;
  EntityOverrides?: any[];
  Variations: any[];
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::Evidently::Feature
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-feature.html | AWS::Evidently::Feature}
 */
export interface EvidentlyFeatureAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::Evidently::Feature
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-feature.html | AWS::Evidently::Feature}
 */
export class EvidentlyFeature extends ResourceBase<
  "AWS::Evidently::Feature",
  EvidentlyFeatureProps,
  EvidentlyFeatureAttribs
> {
  public static readonly Type = "AWS::Evidently::Feature";
  public static readonly AttributeNames: readonly (keyof EvidentlyFeatureAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: EvidentlyFeatureProps,
    options?: ResourceOptions,
  ) {
    super(
      EvidentlyFeature.Type,
      EvidentlyFeature.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Evidently::Launch
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-launch.html | AWS::Evidently::Launch}
 */
export interface EvidentlyLaunchProps {
  Project: string;
  Description?: string;
  ExecutionStatus?: EvidentlyLaunchExecutionStatusObject;
  Groups: any[];
  RandomizationSalt?: string;
  MetricMonitors?: any[];
  ScheduledSplitsConfig: any[];
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::Evidently::Launch
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-launch.html | AWS::Evidently::Launch}
 */
export interface EvidentlyLaunchAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::Evidently::Launch
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-launch.html | AWS::Evidently::Launch}
 */
export class EvidentlyLaunch extends ResourceBase<
  "AWS::Evidently::Launch",
  EvidentlyLaunchProps,
  EvidentlyLaunchAttribs
> {
  public static readonly Type = "AWS::Evidently::Launch";
  public static readonly AttributeNames: readonly (keyof EvidentlyLaunchAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: EvidentlyLaunchProps,
    options?: ResourceOptions,
  ) {
    super(
      EvidentlyLaunch.Type,
      EvidentlyLaunch.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Evidently::Project
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-project.html | AWS::Evidently::Project}
 */
export interface EvidentlyProjectProps {
  DataDelivery?: EvidentlyProjectDataDeliveryObject;
  Description?: string;
  AppConfigResource?: EvidentlyProjectAppConfigResourceObject;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::Evidently::Project
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-project.html | AWS::Evidently::Project}
 */
export interface EvidentlyProjectAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::Evidently::Project
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-project.html | AWS::Evidently::Project}
 */
export class EvidentlyProject extends ResourceBase<
  "AWS::Evidently::Project",
  EvidentlyProjectProps,
  EvidentlyProjectAttribs
> {
  public static readonly Type = "AWS::Evidently::Project";
  public static readonly AttributeNames: readonly (keyof EvidentlyProjectAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: EvidentlyProjectProps,
    options?: ResourceOptions,
  ) {
    super(
      EvidentlyProject.Type,
      EvidentlyProject.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Evidently::Segment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-segment.html | AWS::Evidently::Segment}
 */
export interface EvidentlySegmentProps {
  Pattern?: string;
  Description?: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::Evidently::Segment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-segment.html | AWS::Evidently::Segment}
 */
export interface EvidentlySegmentAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::Evidently::Segment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-segment.html | AWS::Evidently::Segment}
 */
export class EvidentlySegment extends ResourceBase<
  "AWS::Evidently::Segment",
  EvidentlySegmentProps,
  EvidentlySegmentAttribs
> {
  public static readonly Type = "AWS::Evidently::Segment";
  public static readonly AttributeNames: readonly (keyof EvidentlySegmentAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: EvidentlySegmentProps,
    options?: ResourceOptions,
  ) {
    super(
      EvidentlySegment.Type,
      EvidentlySegment.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
