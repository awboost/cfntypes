import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::CE::AnomalyMonitor.ResourceTag
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ce-anomalymonitor-resourcetag.html | AWS::CE::AnomalyMonitor.ResourceTag}
 */
export interface CEAnomalyMonitorResourceTag {
  Value: string;
  Key: string;
}
/**
 * Type definition for AWS::CE::AnomalySubscription.ResourceTag
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ce-anomalysubscription-resourcetag.html | AWS::CE::AnomalySubscription.ResourceTag}
 */
export interface CEAnomalySubscriptionResourceTag {
  Value: string;
  Key: string;
}
/**
 * Type definition for AWS::CE::AnomalySubscription.Subscriber
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ce-anomalysubscription-subscriber.html | AWS::CE::AnomalySubscription.Subscriber}
 */
export interface CEAnomalySubscriptionSubscriber {
  Status?: string;
  Type: string;
  Address: string;
}
/**
 * Type definition for AWS::CE::AnomalyMonitor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalymonitor.html | AWS::CE::AnomalyMonitor}
 */
export interface CEAnomalyMonitorProps {
  MonitorType: string;
  ResourceTags?: any[];
  MonitorName: string;
  MonitorSpecification?: string;
  MonitorDimension?: string;
}
/**
 * Attributes type definition for AWS::CE::AnomalyMonitor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalymonitor.html | AWS::CE::AnomalyMonitor}
 */
export interface CEAnomalyMonitorAttribs {
  LastUpdatedDate?: string;
  CreationDate?: string;
  LastEvaluatedDate?: string;
  MonitorArn?: string;
  DimensionalValueCount?: number;
}
/**
 * Resource class for AWS::CE::AnomalyMonitor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalymonitor.html | AWS::CE::AnomalyMonitor}
 */
export class CEAnomalyMonitor extends ResourceBase<
  "AWS::CE::AnomalyMonitor",
  CEAnomalyMonitorProps,
  CEAnomalyMonitorAttribs
> {
  public static readonly Type = "AWS::CE::AnomalyMonitor";
  public static readonly AttributeNames: readonly (keyof CEAnomalyMonitorAttribs)[] =
    [
      "LastUpdatedDate",
      "CreationDate",
      "LastEvaluatedDate",
      "MonitorArn",
      "DimensionalValueCount",
    ];
  constructor(
    logicalId: string,
    properties: CEAnomalyMonitorProps,
    options?: ResourceOptions,
  ) {
    super(
      CEAnomalyMonitor.Type,
      CEAnomalyMonitor.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CE::AnomalySubscription
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalysubscription.html | AWS::CE::AnomalySubscription}
 */
export interface CEAnomalySubscriptionProps {
  MonitorArnList: any[];
  ResourceTags?: any[];
  Frequency: string;
  SubscriptionName: string;
  Subscribers: any[];
  Threshold?: number;
  ThresholdExpression?: string;
}
/**
 * Attributes type definition for AWS::CE::AnomalySubscription
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalysubscription.html | AWS::CE::AnomalySubscription}
 */
export interface CEAnomalySubscriptionAttribs {
  AccountId?: string;
  SubscriptionArn?: string;
}
/**
 * Resource class for AWS::CE::AnomalySubscription
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalysubscription.html | AWS::CE::AnomalySubscription}
 */
export class CEAnomalySubscription extends ResourceBase<
  "AWS::CE::AnomalySubscription",
  CEAnomalySubscriptionProps,
  CEAnomalySubscriptionAttribs
> {
  public static readonly Type = "AWS::CE::AnomalySubscription";
  public static readonly AttributeNames: readonly (keyof CEAnomalySubscriptionAttribs)[] =
    ["AccountId", "SubscriptionArn"];
  constructor(
    logicalId: string,
    properties: CEAnomalySubscriptionProps,
    options?: ResourceOptions,
  ) {
    super(
      CEAnomalySubscription.Type,
      CEAnomalySubscription.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CE::CostCategory
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-costcategory.html | AWS::CE::CostCategory}
 */
export interface CECostCategoryProps {
  DefaultValue?: string;
  SplitChargeRules?: string;
  RuleVersion: string;
  Rules: string;
  Name: string;
}
/**
 * Attributes type definition for AWS::CE::CostCategory
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-costcategory.html | AWS::CE::CostCategory}
 */
export interface CECostCategoryAttribs {
  EffectiveStart?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::CE::CostCategory
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-costcategory.html | AWS::CE::CostCategory}
 */
export class CECostCategory extends ResourceBase<
  "AWS::CE::CostCategory",
  CECostCategoryProps,
  CECostCategoryAttribs
> {
  public static readonly Type = "AWS::CE::CostCategory";
  public static readonly AttributeNames: readonly (keyof CECostCategoryAttribs)[] =
    ["EffectiveStart", "Arn"];
  constructor(
    logicalId: string,
    properties: CECostCategoryProps,
    options?: ResourceOptions,
  ) {
    super(
      CECostCategory.Type,
      CECostCategory.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
