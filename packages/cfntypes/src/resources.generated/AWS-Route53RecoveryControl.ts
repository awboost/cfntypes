import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Route53RecoveryControl::Cluster.ClusterEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoverycontrol-cluster-clusterendpoint.html | AWS::Route53RecoveryControl::Cluster.ClusterEndpoint}
 */
export interface Route53RecoveryControlClusterClusterEndpoint {
  Endpoint?: string;
  Region?: string;
}
/**
 * Type definition for AWS::Route53RecoveryControl::SafetyRule.AssertionRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoverycontrol-safetyrule-assertionrule.html | AWS::Route53RecoveryControl::SafetyRule.AssertionRule}
 */
export interface Route53RecoveryControlSafetyRuleAssertionRule {
  AssertedControls: any[];
  WaitPeriodMs: number;
}
/**
 * Type definition for AWS::Route53RecoveryControl::SafetyRule.GatingRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoverycontrol-safetyrule-gatingrule.html | AWS::Route53RecoveryControl::SafetyRule.GatingRule}
 */
export interface Route53RecoveryControlSafetyRuleGatingRule {
  TargetControls: any[];
  GatingControls: any[];
  WaitPeriodMs: number;
}
/**
 * Type definition for AWS::Route53RecoveryControl::SafetyRule.RuleConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoverycontrol-safetyrule-ruleconfig.html | AWS::Route53RecoveryControl::SafetyRule.RuleConfig}
 */
export interface Route53RecoveryControlSafetyRuleRuleConfig {
  Type: string;
  Inverted: boolean;
  Threshold: number;
}
/**
 * Type definition for AWS::Route53RecoveryControl::Cluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-cluster.html | AWS::Route53RecoveryControl::Cluster}
 */
export interface Route53RecoveryControlClusterProps {
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::Route53RecoveryControl::Cluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-cluster.html | AWS::Route53RecoveryControl::Cluster}
 */
export interface Route53RecoveryControlClusterAttribs {
  ClusterArn?: string;
  Status?: string;
  ClusterEndpoints?: any[];
}
/**
 * Resource class for AWS::Route53RecoveryControl::Cluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-cluster.html | AWS::Route53RecoveryControl::Cluster}
 */
export class Route53RecoveryControlCluster extends ResourceBase<
  "AWS::Route53RecoveryControl::Cluster",
  Route53RecoveryControlClusterProps,
  Route53RecoveryControlClusterAttribs
> {
  public static readonly Type = "AWS::Route53RecoveryControl::Cluster";
  public static readonly AttributeNames: readonly (keyof Route53RecoveryControlClusterAttribs)[] =
    ["ClusterArn", "Status", "ClusterEndpoints"];
  constructor(
    logicalId: string,
    properties: Route53RecoveryControlClusterProps,
    options?: ResourceOptions,
  ) {
    super(
      Route53RecoveryControlCluster.Type,
      Route53RecoveryControlCluster.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Route53RecoveryControl::ControlPanel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-controlpanel.html | AWS::Route53RecoveryControl::ControlPanel}
 */
export interface Route53RecoveryControlControlPanelProps {
  ClusterArn?: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::Route53RecoveryControl::ControlPanel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-controlpanel.html | AWS::Route53RecoveryControl::ControlPanel}
 */
export interface Route53RecoveryControlControlPanelAttribs {
  Status?: string;
  ControlPanelArn?: string;
  DefaultControlPanel?: boolean;
  RoutingControlCount?: number;
}
/**
 * Resource class for AWS::Route53RecoveryControl::ControlPanel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-controlpanel.html | AWS::Route53RecoveryControl::ControlPanel}
 */
export class Route53RecoveryControlControlPanel extends ResourceBase<
  "AWS::Route53RecoveryControl::ControlPanel",
  Route53RecoveryControlControlPanelProps,
  Route53RecoveryControlControlPanelAttribs
> {
  public static readonly Type = "AWS::Route53RecoveryControl::ControlPanel";
  public static readonly AttributeNames: readonly (keyof Route53RecoveryControlControlPanelAttribs)[] =
    ["Status", "ControlPanelArn", "DefaultControlPanel", "RoutingControlCount"];
  constructor(
    logicalId: string,
    properties: Route53RecoveryControlControlPanelProps,
    options?: ResourceOptions,
  ) {
    super(
      Route53RecoveryControlControlPanel.Type,
      Route53RecoveryControlControlPanel.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Route53RecoveryControl::RoutingControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-routingcontrol.html | AWS::Route53RecoveryControl::RoutingControl}
 */
export interface Route53RecoveryControlRoutingControlProps {
  ClusterArn?: string;
  ControlPanelArn?: string;
  Name: string;
}
/**
 * Attributes type definition for AWS::Route53RecoveryControl::RoutingControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-routingcontrol.html | AWS::Route53RecoveryControl::RoutingControl}
 */
export interface Route53RecoveryControlRoutingControlAttribs {
  Status?: string;
  RoutingControlArn?: string;
}
/**
 * Resource class for AWS::Route53RecoveryControl::RoutingControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-routingcontrol.html | AWS::Route53RecoveryControl::RoutingControl}
 */
export class Route53RecoveryControlRoutingControl extends ResourceBase<
  "AWS::Route53RecoveryControl::RoutingControl",
  Route53RecoveryControlRoutingControlProps,
  Route53RecoveryControlRoutingControlAttribs
> {
  public static readonly Type = "AWS::Route53RecoveryControl::RoutingControl";
  public static readonly AttributeNames: readonly (keyof Route53RecoveryControlRoutingControlAttribs)[] =
    ["Status", "RoutingControlArn"];
  constructor(
    logicalId: string,
    properties: Route53RecoveryControlRoutingControlProps,
    options?: ResourceOptions,
  ) {
    super(
      Route53RecoveryControlRoutingControl.Type,
      Route53RecoveryControlRoutingControl.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Route53RecoveryControl::SafetyRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-safetyrule.html | AWS::Route53RecoveryControl::SafetyRule}
 */
export interface Route53RecoveryControlSafetyRuleProps {
  ControlPanelArn: string;
  AssertionRule?: Route53RecoveryControlSafetyRuleAssertionRule;
  RuleConfig: Route53RecoveryControlSafetyRuleRuleConfig;
  GatingRule?: Route53RecoveryControlSafetyRuleGatingRule;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::Route53RecoveryControl::SafetyRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-safetyrule.html | AWS::Route53RecoveryControl::SafetyRule}
 */
export interface Route53RecoveryControlSafetyRuleAttribs {
  Status?: string;
  SafetyRuleArn?: string;
}
/**
 * Resource class for AWS::Route53RecoveryControl::SafetyRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-safetyrule.html | AWS::Route53RecoveryControl::SafetyRule}
 */
export class Route53RecoveryControlSafetyRule extends ResourceBase<
  "AWS::Route53RecoveryControl::SafetyRule",
  Route53RecoveryControlSafetyRuleProps,
  Route53RecoveryControlSafetyRuleAttribs
> {
  public static readonly Type = "AWS::Route53RecoveryControl::SafetyRule";
  public static readonly AttributeNames: readonly (keyof Route53RecoveryControlSafetyRuleAttribs)[] =
    ["Status", "SafetyRuleArn"];
  constructor(
    logicalId: string,
    properties: Route53RecoveryControlSafetyRuleProps,
    options?: ResourceOptions,
  ) {
    super(
      Route53RecoveryControlSafetyRule.Type,
      Route53RecoveryControlSafetyRule.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
