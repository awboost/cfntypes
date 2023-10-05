import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::SecurityHub::AutomationRule.AutomationRulesAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesaction.html | AWS::SecurityHub::AutomationRule.AutomationRulesAction}
 */
export interface SecurityHubAutomationRuleAutomationRulesAction {
  Type: string;
  FindingFieldsUpdate: SecurityHubAutomationRuleAutomationRulesFindingFieldsUpdate;
}
/**
 * Type definition for AWS::SecurityHub::AutomationRule.AutomationRulesFindingFieldsUpdate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfieldsupdate.html | AWS::SecurityHub::AutomationRule.AutomationRulesFindingFieldsUpdate}
 */
export interface SecurityHubAutomationRuleAutomationRulesFindingFieldsUpdate {
  Types?: any[];
  Confidence?: number;
  Note?: SecurityHubAutomationRuleNoteUpdate;
  VerificationState?: string;
  RelatedFindings?: any[];
  Workflow?: SecurityHubAutomationRuleWorkflowUpdate;
  Severity?: SecurityHubAutomationRuleSeverityUpdate;
  UserDefinedFields?: Record<string, any>;
  Criticality?: number;
}
/**
 * Type definition for AWS::SecurityHub::AutomationRule.AutomationRulesFindingFilters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-automationrulesfindingfilters.html | AWS::SecurityHub::AutomationRule.AutomationRulesFindingFilters}
 */
export interface SecurityHubAutomationRuleAutomationRulesFindingFilters {
  ProductArn?: any[];
  SourceUrl?: any[];
  ResourceDetailsOther?: any[];
  Description?: any[];
  ProductName?: any[];
  ResourceTags?: any[];
  FirstObservedAt?: any[];
  CreatedAt?: any[];
  NoteText?: any[];
  LastObservedAt?: any[];
  UserDefinedFields?: any[];
  NoteUpdatedAt?: any[];
  ComplianceSecurityControlId?: any[];
  CompanyName?: any[];
  ResourceRegion?: any[];
  NoteUpdatedBy?: any[];
  Confidence?: any[];
  ResourcePartition?: any[];
  VerificationState?: any[];
  Criticality?: any[];
  SeverityLabel?: any[];
  RelatedFindingsProductArn?: any[];
  ComplianceStatus?: any[];
  GeneratorId?: any[];
  RecordState?: any[];
  Title?: any[];
  ResourceType?: any[];
  ComplianceAssociatedStandardsId?: any[];
  UpdatedAt?: any[];
  RelatedFindingsId?: any[];
  WorkflowStatus?: any[];
  Type?: any[];
  ResourceId?: any[];
  AwsAccountId?: any[];
  Id?: any[];
}
/**
 * Type definition for AWS::SecurityHub::AutomationRule.DateFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-datefilter.html | AWS::SecurityHub::AutomationRule.DateFilter}
 */
export interface SecurityHubAutomationRuleDateFilter {
  DateRange?: SecurityHubAutomationRuleDateRange;
  Start?: string;
  End?: string;
}
/**
 * Type definition for AWS::SecurityHub::AutomationRule.DateRange
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-daterange.html | AWS::SecurityHub::AutomationRule.DateRange}
 */
export interface SecurityHubAutomationRuleDateRange {
  Value: number;
  Unit: string;
}
/**
 * Type definition for AWS::SecurityHub::AutomationRule.MapFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-mapfilter.html | AWS::SecurityHub::AutomationRule.MapFilter}
 */
export interface SecurityHubAutomationRuleMapFilter {
  Comparison: string;
  Value: string;
  Key: string;
}
/**
 * Type definition for AWS::SecurityHub::AutomationRule.NoteUpdate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-noteupdate.html | AWS::SecurityHub::AutomationRule.NoteUpdate}
 */
export interface SecurityHubAutomationRuleNoteUpdate {
  UpdatedBy: object;
  Text: string;
}
/**
 * Type definition for AWS::SecurityHub::AutomationRule.NumberFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-numberfilter.html | AWS::SecurityHub::AutomationRule.NumberFilter}
 */
export interface SecurityHubAutomationRuleNumberFilter {
  Gte?: number;
  Eq?: number;
  Lte?: number;
}
/**
 * Type definition for AWS::SecurityHub::AutomationRule.RelatedFinding
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-relatedfinding.html | AWS::SecurityHub::AutomationRule.RelatedFinding}
 */
export interface SecurityHubAutomationRuleRelatedFinding {
  ProductArn: string;
  Id: object;
}
/**
 * Type definition for AWS::SecurityHub::AutomationRule.SeverityUpdate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-severityupdate.html | AWS::SecurityHub::AutomationRule.SeverityUpdate}
 */
export interface SecurityHubAutomationRuleSeverityUpdate {
  Normalized?: number;
  Label?: string;
  Product?: number;
}
/**
 * Type definition for AWS::SecurityHub::AutomationRule.StringFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-stringfilter.html | AWS::SecurityHub::AutomationRule.StringFilter}
 */
export interface SecurityHubAutomationRuleStringFilter {
  Comparison: string;
  Value: string;
}
/**
 * Type definition for AWS::SecurityHub::AutomationRule.WorkflowUpdate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-automationrule-workflowupdate.html | AWS::SecurityHub::AutomationRule.WorkflowUpdate}
 */
export interface SecurityHubAutomationRuleWorkflowUpdate {
  Status: string;
}
/**
 * Type definition for AWS::SecurityHub::Standard.StandardsControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-standard-standardscontrol.html | AWS::SecurityHub::Standard.StandardsControl}
 */
export interface SecurityHubStandardStandardsControl {
  StandardsControlArn: string;
  Reason?: string;
}
/**
 * Type definition for AWS::SecurityHub::AutomationRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html | AWS::SecurityHub::AutomationRule}
 */
export interface SecurityHubAutomationRuleProps {
  Description?: string;
  Actions?: any[];
  IsTerminal?: boolean;
  RuleStatus?: string;
  Criteria?: SecurityHubAutomationRuleAutomationRulesFindingFilters;
  RuleOrder?: number;
  RuleName?: string;
  Tags?: Record<string, Tag>;
}
/**
 * Attributes type definition for AWS::SecurityHub::AutomationRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html | AWS::SecurityHub::AutomationRule}
 */
export interface SecurityHubAutomationRuleAttribs {
  CreatedBy?: string;
  RuleArn?: string;
  CreatedAt?: string;
  UpdatedAt?: string;
}
/**
 * Resource class for AWS::SecurityHub::AutomationRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html | AWS::SecurityHub::AutomationRule}
 */
export class SecurityHubAutomationRule extends ResourceBase<
  "AWS::SecurityHub::AutomationRule",
  SecurityHubAutomationRuleProps,
  SecurityHubAutomationRuleAttribs
> {
  public static readonly Type = "AWS::SecurityHub::AutomationRule";
  public static readonly AttributeNames: readonly (keyof SecurityHubAutomationRuleAttribs)[] =
    ["CreatedBy", "RuleArn", "CreatedAt", "UpdatedAt"];
  constructor(
    logicalId: string,
    properties: SecurityHubAutomationRuleProps,
    options?: ResourceOptions,
  ) {
    super(
      SecurityHubAutomationRule.Type,
      SecurityHubAutomationRule.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SecurityHub::Hub
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-hub.html | AWS::SecurityHub::Hub}
 */
export interface SecurityHubHubProps {
  ControlFindingGenerator?: string;
  EnableDefaultStandards?: boolean;
  AutoEnableControls?: boolean;
  Tags?: object;
}
/**
 * Resource class for AWS::SecurityHub::Hub
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-hub.html | AWS::SecurityHub::Hub}
 */
export class SecurityHubHub extends ResourceBase<
  "AWS::SecurityHub::Hub",
  SecurityHubHubProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::SecurityHub::Hub";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: SecurityHubHubProps,
    options?: ResourceOptions,
  ) {
    super(
      SecurityHubHub.Type,
      SecurityHubHub.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SecurityHub::Standard
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-standard.html | AWS::SecurityHub::Standard}
 */
export interface SecurityHubStandardProps {
  StandardsArn: string;
  DisabledStandardsControls?: any[];
}
/**
 * Attributes type definition for AWS::SecurityHub::Standard
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-standard.html | AWS::SecurityHub::Standard}
 */
export interface SecurityHubStandardAttribs {
  StandardsSubscriptionArn?: string;
}
/**
 * Resource class for AWS::SecurityHub::Standard
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-standard.html | AWS::SecurityHub::Standard}
 */
export class SecurityHubStandard extends ResourceBase<
  "AWS::SecurityHub::Standard",
  SecurityHubStandardProps,
  SecurityHubStandardAttribs
> {
  public static readonly Type = "AWS::SecurityHub::Standard";
  public static readonly AttributeNames: readonly (keyof SecurityHubStandardAttribs)[] =
    ["StandardsSubscriptionArn"];
  constructor(
    logicalId: string,
    properties: SecurityHubStandardProps,
    options?: ResourceOptions,
  ) {
    super(
      SecurityHubStandard.Type,
      SecurityHubStandard.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
