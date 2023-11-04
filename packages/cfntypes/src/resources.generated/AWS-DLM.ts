import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::DLM::LifecyclePolicy.Action
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-action.html | AWS::DLM::LifecyclePolicy.Action}
 */
export interface DLMLifecyclePolicyAction {
  CrossRegionCopy: any[];
  Name: string;
}
/**
 * Type definition for AWS::DLM::LifecyclePolicy.ArchiveRetainRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-archiveretainrule.html | AWS::DLM::LifecyclePolicy.ArchiveRetainRule}
 */
export interface DLMLifecyclePolicyArchiveRetainRule {
  RetentionArchiveTier: DLMLifecyclePolicyRetentionArchiveTier;
}
/**
 * Type definition for AWS::DLM::LifecyclePolicy.ArchiveRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-archiverule.html | AWS::DLM::LifecyclePolicy.ArchiveRule}
 */
export interface DLMLifecyclePolicyArchiveRule {
  RetainRule: DLMLifecyclePolicyArchiveRetainRule;
}
/**
 * Type definition for AWS::DLM::LifecyclePolicy.CreateRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-createrule.html | AWS::DLM::LifecyclePolicy.CreateRule}
 */
export interface DLMLifecyclePolicyCreateRule {
  IntervalUnit?: string;
  Scripts?: any[];
  Times?: any[];
  CronExpression?: string;
  Interval?: number;
  Location?: string;
}
/**
 * Type definition for AWS::DLM::LifecyclePolicy.CrossRegionCopyAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-crossregioncopyaction.html | AWS::DLM::LifecyclePolicy.CrossRegionCopyAction}
 */
export interface DLMLifecyclePolicyCrossRegionCopyAction {
  Target: string;
  EncryptionConfiguration: DLMLifecyclePolicyEncryptionConfiguration;
  RetainRule?: DLMLifecyclePolicyCrossRegionCopyRetainRule;
}
/**
 * Type definition for AWS::DLM::LifecyclePolicy.CrossRegionCopyDeprecateRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-crossregioncopydeprecaterule.html | AWS::DLM::LifecyclePolicy.CrossRegionCopyDeprecateRule}
 */
export interface DLMLifecyclePolicyCrossRegionCopyDeprecateRule {
  IntervalUnit: string;
  Interval: number;
}
/**
 * Type definition for AWS::DLM::LifecyclePolicy.CrossRegionCopyRetainRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-crossregioncopyretainrule.html | AWS::DLM::LifecyclePolicy.CrossRegionCopyRetainRule}
 */
export interface DLMLifecyclePolicyCrossRegionCopyRetainRule {
  IntervalUnit: string;
  Interval: number;
}
/**
 * Type definition for AWS::DLM::LifecyclePolicy.CrossRegionCopyRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-crossregioncopyrule.html | AWS::DLM::LifecyclePolicy.CrossRegionCopyRule}
 */
export interface DLMLifecyclePolicyCrossRegionCopyRule {
  TargetRegion?: string;
  Target?: string;
  DeprecateRule?: DLMLifecyclePolicyCrossRegionCopyDeprecateRule;
  Encrypted: boolean;
  CmkArn?: string;
  RetainRule?: DLMLifecyclePolicyCrossRegionCopyRetainRule;
  CopyTags?: boolean;
}
/**
 * Type definition for AWS::DLM::LifecyclePolicy.DeprecateRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-deprecaterule.html | AWS::DLM::LifecyclePolicy.DeprecateRule}
 */
export interface DLMLifecyclePolicyDeprecateRule {
  IntervalUnit?: string;
  Count?: number;
  Interval?: number;
}
/**
 * Type definition for AWS::DLM::LifecyclePolicy.EncryptionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-encryptionconfiguration.html | AWS::DLM::LifecyclePolicy.EncryptionConfiguration}
 */
export interface DLMLifecyclePolicyEncryptionConfiguration {
  Encrypted: boolean;
  CmkArn?: string;
}
/**
 * Type definition for AWS::DLM::LifecyclePolicy.EventParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-eventparameters.html | AWS::DLM::LifecyclePolicy.EventParameters}
 */
export interface DLMLifecyclePolicyEventParameters {
  EventType: string;
  SnapshotOwner: any[];
  DescriptionRegex?: string;
}
/**
 * Type definition for AWS::DLM::LifecyclePolicy.EventSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-eventsource.html | AWS::DLM::LifecyclePolicy.EventSource}
 */
export interface DLMLifecyclePolicyEventSource {
  Type: string;
  Parameters?: DLMLifecyclePolicyEventParameters;
}
/**
 * Type definition for AWS::DLM::LifecyclePolicy.FastRestoreRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-fastrestorerule.html | AWS::DLM::LifecyclePolicy.FastRestoreRule}
 */
export interface DLMLifecyclePolicyFastRestoreRule {
  IntervalUnit?: string;
  AvailabilityZones?: any[];
  Count?: number;
  Interval?: number;
}
/**
 * Type definition for AWS::DLM::LifecyclePolicy.Parameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-parameters.html | AWS::DLM::LifecyclePolicy.Parameters}
 */
export interface DLMLifecyclePolicyParameters {
  ExcludeBootVolume?: boolean;
  ExcludeDataVolumeTags?: any[];
  NoReboot?: boolean;
}
/**
 * Type definition for AWS::DLM::LifecyclePolicy.PolicyDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-policydetails.html | AWS::DLM::LifecyclePolicy.PolicyDetails}
 */
export interface DLMLifecyclePolicyPolicyDetails {
  ResourceTypes?: any[];
  Schedules?: any[];
  PolicyType?: string;
  EventSource?: DLMLifecyclePolicyEventSource;
  Parameters?: DLMLifecyclePolicyParameters;
  Actions?: any[];
  TargetTags?: any[];
  ResourceLocations?: any[];
}
/**
 * Type definition for AWS::DLM::LifecyclePolicy.RetainRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-retainrule.html | AWS::DLM::LifecyclePolicy.RetainRule}
 */
export interface DLMLifecyclePolicyRetainRule {
  IntervalUnit?: string;
  Count?: number;
  Interval?: number;
}
/**
 * Type definition for AWS::DLM::LifecyclePolicy.RetentionArchiveTier
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-retentionarchivetier.html | AWS::DLM::LifecyclePolicy.RetentionArchiveTier}
 */
export interface DLMLifecyclePolicyRetentionArchiveTier {
  IntervalUnit?: string;
  Count?: number;
  Interval?: number;
}
/**
 * Type definition for AWS::DLM::LifecyclePolicy.Schedule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-schedule.html | AWS::DLM::LifecyclePolicy.Schedule}
 */
export interface DLMLifecyclePolicySchedule {
  ShareRules?: any[];
  DeprecateRule?: DLMLifecyclePolicyDeprecateRule;
  TagsToAdd?: any[];
  CreateRule?: DLMLifecyclePolicyCreateRule;
  VariableTags?: any[];
  FastRestoreRule?: DLMLifecyclePolicyFastRestoreRule;
  ArchiveRule?: DLMLifecyclePolicyArchiveRule;
  RetainRule?: DLMLifecyclePolicyRetainRule;
  CrossRegionCopyRules?: any[];
  Name?: string;
  CopyTags?: boolean;
}
/**
 * Type definition for AWS::DLM::LifecyclePolicy.Script
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-script.html | AWS::DLM::LifecyclePolicy.Script}
 */
export interface DLMLifecyclePolicyScript {
  ExecutionHandlerService?: string;
  ExecutionTimeout?: number;
  Stages?: any[];
  ExecutionHandler?: string;
  MaximumRetryCount?: number;
  ExecuteOperationOnScriptFailure?: boolean;
}
/**
 * Type definition for AWS::DLM::LifecyclePolicy.ShareRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-sharerule.html | AWS::DLM::LifecyclePolicy.ShareRule}
 */
export interface DLMLifecyclePolicyShareRule {
  TargetAccounts?: any[];
  UnshareIntervalUnit?: string;
  UnshareInterval?: number;
}
/**
 * Type definition for AWS::DLM::LifecyclePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dlm-lifecyclepolicy.html | AWS::DLM::LifecyclePolicy}
 */
export interface DLMLifecyclePolicyProps {
  ExecutionRoleArn?: string;
  Description?: string;
  State?: string;
  PolicyDetails?: DLMLifecyclePolicyPolicyDetails;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::DLM::LifecyclePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dlm-lifecyclepolicy.html | AWS::DLM::LifecyclePolicy}
 */
export interface DLMLifecyclePolicyAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::DLM::LifecyclePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dlm-lifecyclepolicy.html | AWS::DLM::LifecyclePolicy}
 */
export class DLMLifecyclePolicy extends ResourceBase<
  "AWS::DLM::LifecyclePolicy",
  DLMLifecyclePolicyProps,
  DLMLifecyclePolicyAttribs
> {
  public static readonly Type = "AWS::DLM::LifecyclePolicy";
  public static readonly AttributeNames: readonly (keyof DLMLifecyclePolicyAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: DLMLifecyclePolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      DLMLifecyclePolicy.Type,
      DLMLifecyclePolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
