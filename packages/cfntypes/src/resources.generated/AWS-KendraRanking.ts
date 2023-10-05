import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::KendraRanking::ExecutionPlan.CapacityUnitsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendraranking-executionplan-capacityunitsconfiguration.html | AWS::KendraRanking::ExecutionPlan.CapacityUnitsConfiguration}
 */
export interface KendraRankingExecutionPlanCapacityUnitsConfiguration {
  RescoreCapacityUnits: number;
}
/**
 * Type definition for AWS::KendraRanking::ExecutionPlan
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendraranking-executionplan.html | AWS::KendraRanking::ExecutionPlan}
 */
export interface KendraRankingExecutionPlanProps {
  Description?: string;
  CapacityUnits?: KendraRankingExecutionPlanCapacityUnitsConfiguration;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::KendraRanking::ExecutionPlan
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendraranking-executionplan.html | AWS::KendraRanking::ExecutionPlan}
 */
export interface KendraRankingExecutionPlanAttribs {
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::KendraRanking::ExecutionPlan
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendraranking-executionplan.html | AWS::KendraRanking::ExecutionPlan}
 */
export class KendraRankingExecutionPlan extends ResourceBase<
  "AWS::KendraRanking::ExecutionPlan",
  KendraRankingExecutionPlanProps,
  KendraRankingExecutionPlanAttribs
> {
  public static readonly Type = "AWS::KendraRanking::ExecutionPlan";
  public static readonly AttributeNames: readonly (keyof KendraRankingExecutionPlanAttribs)[] =
    ["Id", "Arn"];
  constructor(
    logicalId: string,
    properties: KendraRankingExecutionPlanProps,
    options?: ResourceOptions,
  ) {
    super(
      KendraRankingExecutionPlan.Type,
      KendraRankingExecutionPlan.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
