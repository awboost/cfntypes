import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::XRay::Group.InsightsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-group-insightsconfiguration.html | AWS::XRay::Group.InsightsConfiguration}
 */
export interface XRayGroupInsightsConfiguration {
  NotificationsEnabled?: boolean;
  InsightsEnabled?: boolean;
}
/**
 * Type definition for AWS::XRay::SamplingRule.SamplingRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-samplingrule-samplingrule.html | AWS::XRay::SamplingRule.SamplingRule}
 */
export interface XRaySamplingRuleSamplingRule {
  Priority: number;
  ReservoirSize: number;
  RuleARN?: string;
  URLPath: string;
  Attributes?: Record<string, any>;
  FixedRate: number;
  Host: string;
  ResourceARN: string;
  HTTPMethod: string;
  ServiceName: string;
  Version?: number;
  ServiceType: string;
  RuleName?: string;
}
/**
 * Type definition for AWS::XRay::Group
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-group.html | AWS::XRay::Group}
 */
export interface XRayGroupProps {
  GroupName: string;
  InsightsConfiguration?: XRayGroupInsightsConfiguration;
  FilterExpression?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::XRay::Group
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-group.html | AWS::XRay::Group}
 */
export interface XRayGroupAttribs {
  GroupARN?: string;
}
/**
 * Resource class for AWS::XRay::Group
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-group.html | AWS::XRay::Group}
 */
export class XRayGroup extends ResourceBase<
  "AWS::XRay::Group",
  XRayGroupProps,
  XRayGroupAttribs
> {
  public static readonly Type = "AWS::XRay::Group";
  public static readonly AttributeNames: readonly (keyof XRayGroupAttribs)[] = [
    "GroupARN",
  ];
  constructor(
    logicalId: string,
    properties: XRayGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      XRayGroup.Type,
      XRayGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::XRay::ResourcePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-resourcepolicy.html | AWS::XRay::ResourcePolicy}
 */
export interface XRayResourcePolicyProps {
  BypassPolicyLockoutCheck?: boolean;
  PolicyName: string;
  PolicyDocument: string;
}
/**
 * Resource class for AWS::XRay::ResourcePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-resourcepolicy.html | AWS::XRay::ResourcePolicy}
 */
export class XRayResourcePolicy extends ResourceBase<
  "AWS::XRay::ResourcePolicy",
  XRayResourcePolicyProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::XRay::ResourcePolicy";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: XRayResourcePolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      XRayResourcePolicy.Type,
      XRayResourcePolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::XRay::SamplingRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-samplingrule.html | AWS::XRay::SamplingRule}
 */
export interface XRaySamplingRuleProps {
  SamplingRule?: XRaySamplingRuleSamplingRule;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::XRay::SamplingRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-samplingrule.html | AWS::XRay::SamplingRule}
 */
export interface XRaySamplingRuleAttribs {
  RuleARN?: string;
}
/**
 * Resource class for AWS::XRay::SamplingRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-samplingrule.html | AWS::XRay::SamplingRule}
 */
export class XRaySamplingRule extends ResourceBase<
  "AWS::XRay::SamplingRule",
  XRaySamplingRuleProps,
  XRaySamplingRuleAttribs
> {
  public static readonly Type = "AWS::XRay::SamplingRule";
  public static readonly AttributeNames: readonly (keyof XRaySamplingRuleAttribs)[] =
    ["RuleARN"];
  constructor(
    logicalId: string,
    properties: XRaySamplingRuleProps,
    options?: ResourceOptions,
  ) {
    super(
      XRaySamplingRule.Type,
      XRaySamplingRule.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
