import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::Budgets::Budget.AutoAdjustData
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-autoadjustdata.html | AWS::Budgets::Budget.AutoAdjustData}
 */
export interface BudgetsBudgetAutoAdjustData {
  AutoAdjustType: string;
  HistoricalOptions?: BudgetsBudgetHistoricalOptions;
}
/**
 * Type definition for AWS::Budgets::Budget.BudgetData
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-budgetdata.html | AWS::Budgets::Budget.BudgetData}
 */
export interface BudgetsBudgetBudgetData {
  BudgetLimit?: BudgetsBudgetSpend;
  TimePeriod?: BudgetsBudgetTimePeriod;
  AutoAdjustData?: BudgetsBudgetAutoAdjustData;
  TimeUnit: string;
  PlannedBudgetLimits?: object;
  CostFilters?: object;
  BudgetName?: string;
  CostTypes?: BudgetsBudgetCostTypes;
  BudgetType: string;
}
/**
 * Type definition for AWS::Budgets::Budget.CostTypes
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-costtypes.html | AWS::Budgets::Budget.CostTypes}
 */
export interface BudgetsBudgetCostTypes {
  IncludeSupport?: boolean;
  IncludeOtherSubscription?: boolean;
  IncludeTax?: boolean;
  IncludeSubscription?: boolean;
  UseBlended?: boolean;
  IncludeUpfront?: boolean;
  IncludeDiscount?: boolean;
  IncludeCredit?: boolean;
  IncludeRecurring?: boolean;
  UseAmortized?: boolean;
  IncludeRefund?: boolean;
}
/**
 * Type definition for AWS::Budgets::Budget.HistoricalOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-historicaloptions.html | AWS::Budgets::Budget.HistoricalOptions}
 */
export interface BudgetsBudgetHistoricalOptions {
  BudgetAdjustmentPeriod: number;
}
/**
 * Type definition for AWS::Budgets::Budget.Notification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-notification.html | AWS::Budgets::Budget.Notification}
 */
export interface BudgetsBudgetNotification {
  ComparisonOperator: string;
  NotificationType: string;
  Threshold: number;
  ThresholdType?: string;
}
/**
 * Type definition for AWS::Budgets::Budget.NotificationWithSubscribers
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-notificationwithsubscribers.html | AWS::Budgets::Budget.NotificationWithSubscribers}
 */
export interface BudgetsBudgetNotificationWithSubscribers {
  Subscribers: any[];
  Notification: BudgetsBudgetNotification;
}
/**
 * Type definition for AWS::Budgets::Budget.Spend
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-spend.html | AWS::Budgets::Budget.Spend}
 */
export interface BudgetsBudgetSpend {
  Amount: number;
  Unit: string;
}
/**
 * Type definition for AWS::Budgets::Budget.Subscriber
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-subscriber.html | AWS::Budgets::Budget.Subscriber}
 */
export interface BudgetsBudgetSubscriber {
  SubscriptionType: string;
  Address: string;
}
/**
 * Type definition for AWS::Budgets::Budget.TimePeriod
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-timeperiod.html | AWS::Budgets::Budget.TimePeriod}
 */
export interface BudgetsBudgetTimePeriod {
  Start?: string;
  End?: string;
}
/**
 * Type definition for AWS::Budgets::BudgetsAction.ActionThreshold
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-actionthreshold.html | AWS::Budgets::BudgetsAction.ActionThreshold}
 */
export interface BudgetsBudgetsActionActionThreshold {
  Type: string;
  Value: number;
}
/**
 * Type definition for AWS::Budgets::BudgetsAction.Definition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-definition.html | AWS::Budgets::BudgetsAction.Definition}
 */
export interface BudgetsBudgetsActionDefinition {
  SsmActionDefinition?: BudgetsBudgetsActionSsmActionDefinition;
  IamActionDefinition?: BudgetsBudgetsActionIamActionDefinition;
  ScpActionDefinition?: BudgetsBudgetsActionScpActionDefinition;
}
/**
 * Type definition for AWS::Budgets::BudgetsAction.IamActionDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-iamactiondefinition.html | AWS::Budgets::BudgetsAction.IamActionDefinition}
 */
export interface BudgetsBudgetsActionIamActionDefinition {
  PolicyArn: string;
  Groups?: any[];
  Roles?: any[];
  Users?: any[];
}
/**
 * Type definition for AWS::Budgets::BudgetsAction.ScpActionDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-scpactiondefinition.html | AWS::Budgets::BudgetsAction.ScpActionDefinition}
 */
export interface BudgetsBudgetsActionScpActionDefinition {
  TargetIds: any[];
  PolicyId: string;
}
/**
 * Type definition for AWS::Budgets::BudgetsAction.SsmActionDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-ssmactiondefinition.html | AWS::Budgets::BudgetsAction.SsmActionDefinition}
 */
export interface BudgetsBudgetsActionSsmActionDefinition {
  Region: string;
  InstanceIds: any[];
  Subtype: string;
}
/**
 * Type definition for AWS::Budgets::BudgetsAction.Subscriber
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-subscriber.html | AWS::Budgets::BudgetsAction.Subscriber}
 */
export interface BudgetsBudgetsActionSubscriber {
  Type: string;
  Address: string;
}
/**
 * Type definition for AWS::Budgets::Budget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html | AWS::Budgets::Budget}
 */
export interface BudgetsBudgetProps {
  NotificationsWithSubscribers?: any[];
  Budget: BudgetsBudgetBudgetData;
}
/**
 * Resource class for AWS::Budgets::Budget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html | AWS::Budgets::Budget}
 */
export class BudgetsBudget extends ResourceBase<
  "AWS::Budgets::Budget",
  BudgetsBudgetProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Budgets::Budget";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: BudgetsBudgetProps,
    options?: ResourceOptions,
  ) {
    super(
      BudgetsBudget.Type,
      BudgetsBudget.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Budgets::BudgetsAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html | AWS::Budgets::BudgetsAction}
 */
export interface BudgetsBudgetsActionProps {
  ExecutionRoleArn: string;
  ActionType: string;
  NotificationType: string;
  ActionThreshold: BudgetsBudgetsActionActionThreshold;
  Definition: BudgetsBudgetsActionDefinition;
  ApprovalModel?: string;
  Subscribers: any[];
  BudgetName: string;
}
/**
 * Attributes type definition for AWS::Budgets::BudgetsAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html | AWS::Budgets::BudgetsAction}
 */
export interface BudgetsBudgetsActionAttribs {
  ActionId?: string;
}
/**
 * Resource class for AWS::Budgets::BudgetsAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html | AWS::Budgets::BudgetsAction}
 */
export class BudgetsBudgetsAction extends ResourceBase<
  "AWS::Budgets::BudgetsAction",
  BudgetsBudgetsActionProps,
  BudgetsBudgetsActionAttribs
> {
  public static readonly Type = "AWS::Budgets::BudgetsAction";
  public static readonly AttributeNames: readonly (keyof BudgetsBudgetsActionAttribs)[] =
    ["ActionId"];
  constructor(
    logicalId: string,
    properties: BudgetsBudgetsActionProps,
    options?: ResourceOptions,
  ) {
    super(
      BudgetsBudgetsAction.Type,
      BudgetsBudgetsAction.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
