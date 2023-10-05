import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::BillingConductor::BillingGroup.AccountGrouping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-billinggroup-accountgrouping.html | AWS::BillingConductor::BillingGroup.AccountGrouping}
 */
export interface BillingConductorBillingGroupAccountGrouping {
  LinkedAccountIds: any[];
  AutoAssociate?: boolean;
}
/**
 * Type definition for AWS::BillingConductor::BillingGroup.ComputationPreference
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-billinggroup-computationpreference.html | AWS::BillingConductor::BillingGroup.ComputationPreference}
 */
export interface BillingConductorBillingGroupComputationPreference {
  PricingPlanArn: string;
}
/**
 * Type definition for AWS::BillingConductor::CustomLineItem.BillingPeriodRange
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-customlineitem-billingperiodrange.html | AWS::BillingConductor::CustomLineItem.BillingPeriodRange}
 */
export interface BillingConductorCustomLineItemBillingPeriodRange {
  ExclusiveEndBillingPeriod?: string;
  InclusiveStartBillingPeriod?: string;
}
/**
 * Type definition for AWS::BillingConductor::CustomLineItem.CustomLineItemChargeDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-customlineitem-customlineitemchargedetails.html | AWS::BillingConductor::CustomLineItem.CustomLineItemChargeDetails}
 */
export interface BillingConductorCustomLineItemCustomLineItemChargeDetails {
  LineItemFilters?: any[];
  Type: string;
  Percentage?: BillingConductorCustomLineItemCustomLineItemPercentageChargeDetails;
  Flat?: BillingConductorCustomLineItemCustomLineItemFlatChargeDetails;
}
/**
 * Type definition for AWS::BillingConductor::CustomLineItem.CustomLineItemFlatChargeDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-customlineitem-customlineitemflatchargedetails.html | AWS::BillingConductor::CustomLineItem.CustomLineItemFlatChargeDetails}
 */
export interface BillingConductorCustomLineItemCustomLineItemFlatChargeDetails {
  ChargeValue: number;
}
/**
 * Type definition for AWS::BillingConductor::CustomLineItem.CustomLineItemPercentageChargeDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-customlineitem-customlineitempercentagechargedetails.html | AWS::BillingConductor::CustomLineItem.CustomLineItemPercentageChargeDetails}
 */
export interface BillingConductorCustomLineItemCustomLineItemPercentageChargeDetails {
  ChildAssociatedResources?: any[];
  PercentageValue: number;
}
/**
 * Type definition for AWS::BillingConductor::CustomLineItem.LineItemFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-customlineitem-lineitemfilter.html | AWS::BillingConductor::CustomLineItem.LineItemFilter}
 */
export interface BillingConductorCustomLineItemLineItemFilter {
  MatchOption: string;
  Attribute: string;
  Values: any[];
}
/**
 * Type definition for AWS::BillingConductor::PricingRule.FreeTier
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-pricingrule-freetier.html | AWS::BillingConductor::PricingRule.FreeTier}
 */
export interface BillingConductorPricingRuleFreeTier {
  Activated: boolean;
}
/**
 * Type definition for AWS::BillingConductor::PricingRule.Tiering
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-pricingrule-tiering.html | AWS::BillingConductor::PricingRule.Tiering}
 */
export interface BillingConductorPricingRuleTiering {
  FreeTier?: BillingConductorPricingRuleFreeTier;
}
/**
 * Type definition for AWS::BillingConductor::BillingGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-billinggroup.html | AWS::BillingConductor::BillingGroup}
 */
export interface BillingConductorBillingGroupProps {
  Description?: string;
  PrimaryAccountId: string;
  ComputationPreference: BillingConductorBillingGroupComputationPreference;
  AccountGrouping: BillingConductorBillingGroupAccountGrouping;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::BillingConductor::BillingGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-billinggroup.html | AWS::BillingConductor::BillingGroup}
 */
export interface BillingConductorBillingGroupAttribs {
  Status?: string;
  Size?: number;
  StatusReason?: string;
  CreationTime?: number;
  LastModifiedTime?: number;
  Arn?: string;
}
/**
 * Resource class for AWS::BillingConductor::BillingGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-billinggroup.html | AWS::BillingConductor::BillingGroup}
 */
export class BillingConductorBillingGroup extends ResourceBase<
  "AWS::BillingConductor::BillingGroup",
  BillingConductorBillingGroupProps,
  BillingConductorBillingGroupAttribs
> {
  public static readonly Type = "AWS::BillingConductor::BillingGroup";
  public static readonly AttributeNames: readonly (keyof BillingConductorBillingGroupAttribs)[] =
    [
      "Status",
      "Size",
      "StatusReason",
      "CreationTime",
      "LastModifiedTime",
      "Arn",
    ];
  constructor(
    logicalId: string,
    properties: BillingConductorBillingGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      BillingConductorBillingGroup.Type,
      BillingConductorBillingGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::BillingConductor::CustomLineItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html | AWS::BillingConductor::CustomLineItem}
 */
export interface BillingConductorCustomLineItemProps {
  BillingPeriodRange?: BillingConductorCustomLineItemBillingPeriodRange;
  Description?: string;
  BillingGroupArn: string;
  CustomLineItemChargeDetails?: BillingConductorCustomLineItemCustomLineItemChargeDetails;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::BillingConductor::CustomLineItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html | AWS::BillingConductor::CustomLineItem}
 */
export interface BillingConductorCustomLineItemAttribs {
  CurrencyCode?: string;
  ProductCode?: string;
  CreationTime?: number;
  LastModifiedTime?: number;
  Arn?: string;
  AssociationSize?: number;
}
/**
 * Resource class for AWS::BillingConductor::CustomLineItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html | AWS::BillingConductor::CustomLineItem}
 */
export class BillingConductorCustomLineItem extends ResourceBase<
  "AWS::BillingConductor::CustomLineItem",
  BillingConductorCustomLineItemProps,
  BillingConductorCustomLineItemAttribs
> {
  public static readonly Type = "AWS::BillingConductor::CustomLineItem";
  public static readonly AttributeNames: readonly (keyof BillingConductorCustomLineItemAttribs)[] =
    [
      "CurrencyCode",
      "ProductCode",
      "CreationTime",
      "LastModifiedTime",
      "Arn",
      "AssociationSize",
    ];
  constructor(
    logicalId: string,
    properties: BillingConductorCustomLineItemProps,
    options?: ResourceOptions,
  ) {
    super(
      BillingConductorCustomLineItem.Type,
      BillingConductorCustomLineItem.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::BillingConductor::PricingPlan
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingplan.html | AWS::BillingConductor::PricingPlan}
 */
export interface BillingConductorPricingPlanProps {
  Description?: string;
  PricingRuleArns?: any[];
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::BillingConductor::PricingPlan
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingplan.html | AWS::BillingConductor::PricingPlan}
 */
export interface BillingConductorPricingPlanAttribs {
  Size?: number;
  CreationTime?: number;
  LastModifiedTime?: number;
  Arn?: string;
}
/**
 * Resource class for AWS::BillingConductor::PricingPlan
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingplan.html | AWS::BillingConductor::PricingPlan}
 */
export class BillingConductorPricingPlan extends ResourceBase<
  "AWS::BillingConductor::PricingPlan",
  BillingConductorPricingPlanProps,
  BillingConductorPricingPlanAttribs
> {
  public static readonly Type = "AWS::BillingConductor::PricingPlan";
  public static readonly AttributeNames: readonly (keyof BillingConductorPricingPlanAttribs)[] =
    ["Size", "CreationTime", "LastModifiedTime", "Arn"];
  constructor(
    logicalId: string,
    properties: BillingConductorPricingPlanProps,
    options?: ResourceOptions,
  ) {
    super(
      BillingConductorPricingPlan.Type,
      BillingConductorPricingPlan.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::BillingConductor::PricingRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html | AWS::BillingConductor::PricingRule}
 */
export interface BillingConductorPricingRuleProps {
  Type: string;
  Description?: string;
  Scope: string;
  Service?: string;
  ModifierPercentage?: number;
  Operation?: string;
  Tiering?: BillingConductorPricingRuleTiering;
  BillingEntity?: string;
  UsageType?: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::BillingConductor::PricingRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html | AWS::BillingConductor::PricingRule}
 */
export interface BillingConductorPricingRuleAttribs {
  CreationTime?: number;
  LastModifiedTime?: number;
  AssociatedPricingPlanCount?: number;
  Arn?: string;
}
/**
 * Resource class for AWS::BillingConductor::PricingRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html | AWS::BillingConductor::PricingRule}
 */
export class BillingConductorPricingRule extends ResourceBase<
  "AWS::BillingConductor::PricingRule",
  BillingConductorPricingRuleProps,
  BillingConductorPricingRuleAttribs
> {
  public static readonly Type = "AWS::BillingConductor::PricingRule";
  public static readonly AttributeNames: readonly (keyof BillingConductorPricingRuleAttribs)[] =
    ["CreationTime", "LastModifiedTime", "AssociatedPricingPlanCount", "Arn"];
  constructor(
    logicalId: string,
    properties: BillingConductorPricingRuleProps,
    options?: ResourceOptions,
  ) {
    super(
      BillingConductorPricingRule.Type,
      BillingConductorPricingRule.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
