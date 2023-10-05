import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Backup::BackupPlan.AdvancedBackupSettingResourceType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-advancedbackupsettingresourcetype.html | AWS::Backup::BackupPlan.AdvancedBackupSettingResourceType}
 */
export interface BackupBackupPlanAdvancedBackupSettingResourceType {
  BackupOptions: object;
  ResourceType: string;
}
/**
 * Type definition for AWS::Backup::BackupPlan.BackupPlanResourceType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-backupplanresourcetype.html | AWS::Backup::BackupPlan.BackupPlanResourceType}
 */
export interface BackupBackupPlanBackupPlanResourceType {
  BackupPlanName: string;
  AdvancedBackupSettings?: any[];
  BackupPlanRule: any[];
}
/**
 * Type definition for AWS::Backup::BackupPlan.BackupRuleResourceType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-backupruleresourcetype.html | AWS::Backup::BackupPlan.BackupRuleResourceType}
 */
export interface BackupBackupPlanBackupRuleResourceType {
  CompletionWindowMinutes?: number;
  ScheduleExpression?: string;
  RecoveryPointTags?: Record<string, any>;
  CopyActions?: any[];
  EnableContinuousBackup?: boolean;
  Lifecycle?: BackupBackupPlanLifecycleResourceType;
  TargetBackupVault: string;
  StartWindowMinutes?: number;
  ScheduleExpressionTimezone?: string;
  RuleName: string;
}
/**
 * Type definition for AWS::Backup::BackupPlan.CopyActionResourceType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-copyactionresourcetype.html | AWS::Backup::BackupPlan.CopyActionResourceType}
 */
export interface BackupBackupPlanCopyActionResourceType {
  Lifecycle?: BackupBackupPlanLifecycleResourceType;
  DestinationBackupVaultArn: string;
}
/**
 * Type definition for AWS::Backup::BackupPlan.LifecycleResourceType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-lifecycleresourcetype.html | AWS::Backup::BackupPlan.LifecycleResourceType}
 */
export interface BackupBackupPlanLifecycleResourceType {
  DeleteAfterDays?: number;
  MoveToColdStorageAfterDays?: number;
}
/**
 * Type definition for AWS::Backup::BackupSelection.BackupSelectionResourceType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupselection-backupselectionresourcetype.html | AWS::Backup::BackupSelection.BackupSelectionResourceType}
 */
export interface BackupBackupSelectionBackupSelectionResourceType {
  ListOfTags?: any[];
  NotResources?: any[];
  SelectionName: string;
  IamRoleArn: string;
  Resources?: any[];
  Conditions?: BackupBackupSelectionConditions;
}
/**
 * Type definition for AWS::Backup::BackupSelection.ConditionParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupselection-conditionparameter.html | AWS::Backup::BackupSelection.ConditionParameter}
 */
export interface BackupBackupSelectionConditionParameter {
  ConditionValue?: string;
  ConditionKey?: string;
}
/**
 * Type definition for AWS::Backup::BackupSelection.ConditionResourceType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupselection-conditionresourcetype.html | AWS::Backup::BackupSelection.ConditionResourceType}
 */
export interface BackupBackupSelectionConditionResourceType {
  ConditionValue: string;
  ConditionKey: string;
  ConditionType: string;
}
/**
 * Type definition for AWS::Backup::BackupSelection.Conditions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupselection-conditions.html | AWS::Backup::BackupSelection.Conditions}
 */
export interface BackupBackupSelectionConditions {
  StringEquals?: any[];
  StringNotLike?: any[];
  StringLike?: any[];
  StringNotEquals?: any[];
}
/**
 * Type definition for AWS::Backup::BackupVault.LockConfigurationType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupvault-lockconfigurationtype.html | AWS::Backup::BackupVault.LockConfigurationType}
 */
export interface BackupBackupVaultLockConfigurationType {
  ChangeableForDays?: number;
  MaxRetentionDays?: number;
  MinRetentionDays: number;
}
/**
 * Type definition for AWS::Backup::BackupVault.NotificationObjectType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupvault-notificationobjecttype.html | AWS::Backup::BackupVault.NotificationObjectType}
 */
export interface BackupBackupVaultNotificationObjectType {
  SNSTopicArn: string;
  BackupVaultEvents: any[];
}
/**
 * Type definition for AWS::Backup::Framework.ControlInputParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-framework-controlinputparameter.html | AWS::Backup::Framework.ControlInputParameter}
 */
export interface BackupFrameworkControlInputParameter {
  ParameterValue: string;
  ParameterName: string;
}
/**
 * Type definition for AWS::Backup::Framework.ControlScope
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-framework-controlscope.html | AWS::Backup::Framework.ControlScope}
 */
export interface BackupFrameworkControlScope {
  ComplianceResourceTypes?: any[];
  Tags?: Tag[];
  ComplianceResourceIds?: any[];
}
/**
 * Type definition for AWS::Backup::Framework.FrameworkControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-framework-frameworkcontrol.html | AWS::Backup::Framework.FrameworkControl}
 */
export interface BackupFrameworkFrameworkControl {
  ControlName: string;
  ControlInputParameters?: any[];
  ControlScope?: BackupFrameworkControlScope;
}
/**
 * Type definition for AWS::Backup::ReportPlan.ReportDeliveryChannel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-reportplan-reportdeliverychannel.html | AWS::Backup::ReportPlan.ReportDeliveryChannel}
 */
export interface BackupReportPlanReportDeliveryChannel {
  S3KeyPrefix?: string;
  Formats?: any[];
  S3BucketName: string;
}
/**
 * Type definition for AWS::Backup::ReportPlan.ReportSetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-reportplan-reportsetting.html | AWS::Backup::ReportPlan.ReportSetting}
 */
export interface BackupReportPlanReportSetting {
  FrameworkArns?: any[];
  ReportTemplate: string;
  OrganizationUnits?: any[];
  Regions?: any[];
  Accounts?: any[];
}
/**
 * Type definition for AWS::Backup::BackupPlan
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html | AWS::Backup::BackupPlan}
 */
export interface BackupBackupPlanProps {
  BackupPlan: BackupBackupPlanBackupPlanResourceType;
  BackupPlanTags?: Record<string, any>;
}
/**
 * Attributes type definition for AWS::Backup::BackupPlan
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html | AWS::Backup::BackupPlan}
 */
export interface BackupBackupPlanAttribs {
  VersionId?: string;
  BackupPlanId?: string;
  BackupPlanArn?: string;
}
/**
 * Resource class for AWS::Backup::BackupPlan
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html | AWS::Backup::BackupPlan}
 */
export class BackupBackupPlan extends ResourceBase<
  "AWS::Backup::BackupPlan",
  BackupBackupPlanProps,
  BackupBackupPlanAttribs
> {
  public static readonly Type = "AWS::Backup::BackupPlan";
  public static readonly AttributeNames: readonly (keyof BackupBackupPlanAttribs)[] =
    ["VersionId", "BackupPlanId", "BackupPlanArn"];
  constructor(
    logicalId: string,
    properties: BackupBackupPlanProps,
    options?: ResourceOptions,
  ) {
    super(
      BackupBackupPlan.Type,
      BackupBackupPlan.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Backup::BackupSelection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupselection.html | AWS::Backup::BackupSelection}
 */
export interface BackupBackupSelectionProps {
  BackupSelection: BackupBackupSelectionBackupSelectionResourceType;
  BackupPlanId: string;
}
/**
 * Attributes type definition for AWS::Backup::BackupSelection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupselection.html | AWS::Backup::BackupSelection}
 */
export interface BackupBackupSelectionAttribs {
  BackupPlanId?: string;
  Id?: string;
  SelectionId?: string;
}
/**
 * Resource class for AWS::Backup::BackupSelection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupselection.html | AWS::Backup::BackupSelection}
 */
export class BackupBackupSelection extends ResourceBase<
  "AWS::Backup::BackupSelection",
  BackupBackupSelectionProps,
  BackupBackupSelectionAttribs
> {
  public static readonly Type = "AWS::Backup::BackupSelection";
  public static readonly AttributeNames: readonly (keyof BackupBackupSelectionAttribs)[] =
    ["BackupPlanId", "Id", "SelectionId"];
  constructor(
    logicalId: string,
    properties: BackupBackupSelectionProps,
    options?: ResourceOptions,
  ) {
    super(
      BackupBackupSelection.Type,
      BackupBackupSelection.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Backup::BackupVault
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupvault.html | AWS::Backup::BackupVault}
 */
export interface BackupBackupVaultProps {
  BackupVaultTags?: Record<string, any>;
  BackupVaultName: string;
  EncryptionKeyArn?: string;
  LockConfiguration?: BackupBackupVaultLockConfigurationType;
  Notifications?: BackupBackupVaultNotificationObjectType;
  AccessPolicy?: object;
}
/**
 * Attributes type definition for AWS::Backup::BackupVault
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupvault.html | AWS::Backup::BackupVault}
 */
export interface BackupBackupVaultAttribs {
  BackupVaultName?: string;
  BackupVaultArn?: string;
}
/**
 * Resource class for AWS::Backup::BackupVault
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupvault.html | AWS::Backup::BackupVault}
 */
export class BackupBackupVault extends ResourceBase<
  "AWS::Backup::BackupVault",
  BackupBackupVaultProps,
  BackupBackupVaultAttribs
> {
  public static readonly Type = "AWS::Backup::BackupVault";
  public static readonly AttributeNames: readonly (keyof BackupBackupVaultAttribs)[] =
    ["BackupVaultName", "BackupVaultArn"];
  constructor(
    logicalId: string,
    properties: BackupBackupVaultProps,
    options?: ResourceOptions,
  ) {
    super(
      BackupBackupVault.Type,
      BackupBackupVault.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Backup::Framework
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html | AWS::Backup::Framework}
 */
export interface BackupFrameworkProps {
  FrameworkControls: any[];
  FrameworkName?: string;
  FrameworkTags?: any[];
  FrameworkDescription?: string;
}
/**
 * Attributes type definition for AWS::Backup::Framework
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html | AWS::Backup::Framework}
 */
export interface BackupFrameworkAttribs {
  CreationTime?: string;
  FrameworkStatus?: string;
  DeploymentStatus?: string;
  FrameworkArn?: string;
}
/**
 * Resource class for AWS::Backup::Framework
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html | AWS::Backup::Framework}
 */
export class BackupFramework extends ResourceBase<
  "AWS::Backup::Framework",
  BackupFrameworkProps,
  BackupFrameworkAttribs
> {
  public static readonly Type = "AWS::Backup::Framework";
  public static readonly AttributeNames: readonly (keyof BackupFrameworkAttribs)[] =
    ["CreationTime", "FrameworkStatus", "DeploymentStatus", "FrameworkArn"];
  constructor(
    logicalId: string,
    properties: BackupFrameworkProps,
    options?: ResourceOptions,
  ) {
    super(
      BackupFramework.Type,
      BackupFramework.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Backup::ReportPlan
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-reportplan.html | AWS::Backup::ReportPlan}
 */
export interface BackupReportPlanProps {
  ReportSetting: BackupReportPlanReportSetting;
  ReportPlanDescription?: string;
  ReportPlanName?: string;
  ReportDeliveryChannel: BackupReportPlanReportDeliveryChannel;
  ReportPlanTags?: any[];
}
/**
 * Attributes type definition for AWS::Backup::ReportPlan
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-reportplan.html | AWS::Backup::ReportPlan}
 */
export interface BackupReportPlanAttribs {
  ReportPlanArn?: string;
}
/**
 * Resource class for AWS::Backup::ReportPlan
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-reportplan.html | AWS::Backup::ReportPlan}
 */
export class BackupReportPlan extends ResourceBase<
  "AWS::Backup::ReportPlan",
  BackupReportPlanProps,
  BackupReportPlanAttribs
> {
  public static readonly Type = "AWS::Backup::ReportPlan";
  public static readonly AttributeNames: readonly (keyof BackupReportPlanAttribs)[] =
    ["ReportPlanArn"];
  constructor(
    logicalId: string,
    properties: BackupReportPlanProps,
    options?: ResourceOptions,
  ) {
    super(
      BackupReportPlan.Type,
      BackupReportPlan.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
