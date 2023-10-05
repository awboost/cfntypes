import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::SSM::Association.InstanceAssociationOutputLocation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-association-instanceassociationoutputlocation.html | AWS::SSM::Association.InstanceAssociationOutputLocation}
 */
export interface SSMAssociationInstanceAssociationOutputLocation {
  S3Location?: SSMAssociationS3OutputLocation;
}
/**
 * Type definition for AWS::SSM::Association.S3OutputLocation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-association-s3outputlocation.html | AWS::SSM::Association.S3OutputLocation}
 */
export interface SSMAssociationS3OutputLocation {
  OutputS3KeyPrefix?: string;
  OutputS3Region?: string;
  OutputS3BucketName?: string;
}
/**
 * Type definition for AWS::SSM::Association.Target
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-association-target.html | AWS::SSM::Association.Target}
 */
export interface SSMAssociationTarget {
  Values: any[];
  Key: string;
}
/**
 * Type definition for AWS::SSM::Document.AttachmentsSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-document-attachmentssource.html | AWS::SSM::Document.AttachmentsSource}
 */
export interface SSMDocumentAttachmentsSource {
  Values?: any[];
  Key?: string;
  Name?: string;
}
/**
 * Type definition for AWS::SSM::Document.DocumentRequires
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-document-documentrequires.html | AWS::SSM::Document.DocumentRequires}
 */
export interface SSMDocumentDocumentRequires {
  Version?: string;
  Name?: string;
}
/**
 * Type definition for AWS::SSM::MaintenanceWindowTarget.Targets
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtarget-targets.html | AWS::SSM::MaintenanceWindowTarget.Targets}
 */
export interface SSMMaintenanceWindowTargetTargets {
  Values: any[];
  Key: string;
}
/**
 * Type definition for AWS::SSM::MaintenanceWindowTask.CloudWatchOutputConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-cloudwatchoutputconfig.html | AWS::SSM::MaintenanceWindowTask.CloudWatchOutputConfig}
 */
export interface SSMMaintenanceWindowTaskCloudWatchOutputConfig {
  CloudWatchOutputEnabled?: boolean;
  CloudWatchLogGroupName?: string;
}
/**
 * Type definition for AWS::SSM::MaintenanceWindowTask.LoggingInfo
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-logginginfo.html | AWS::SSM::MaintenanceWindowTask.LoggingInfo}
 */
export interface SSMMaintenanceWindowTaskLoggingInfo {
  S3Bucket: string;
  Region: string;
  S3Prefix?: string;
}
/**
 * Type definition for AWS::SSM::MaintenanceWindowTask.MaintenanceWindowAutomationParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowautomationparameters.html | AWS::SSM::MaintenanceWindowTask.MaintenanceWindowAutomationParameters}
 */
export interface SSMMaintenanceWindowTaskMaintenanceWindowAutomationParameters {
  Parameters?: object;
  DocumentVersion?: string;
}
/**
 * Type definition for AWS::SSM::MaintenanceWindowTask.MaintenanceWindowLambdaParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowlambdaparameters.html | AWS::SSM::MaintenanceWindowTask.MaintenanceWindowLambdaParameters}
 */
export interface SSMMaintenanceWindowTaskMaintenanceWindowLambdaParameters {
  ClientContext?: string;
  Qualifier?: string;
  Payload?: string;
}
/**
 * Type definition for AWS::SSM::MaintenanceWindowTask.MaintenanceWindowRunCommandParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowruncommandparameters.html | AWS::SSM::MaintenanceWindowTask.MaintenanceWindowRunCommandParameters}
 */
export interface SSMMaintenanceWindowTaskMaintenanceWindowRunCommandParameters {
  TimeoutSeconds?: number;
  Comment?: string;
  OutputS3KeyPrefix?: string;
  Parameters?: object;
  CloudWatchOutputConfig?: SSMMaintenanceWindowTaskCloudWatchOutputConfig;
  DocumentHashType?: string;
  ServiceRoleArn?: string;
  NotificationConfig?: SSMMaintenanceWindowTaskNotificationConfig;
  DocumentVersion?: string;
  OutputS3BucketName?: string;
  DocumentHash?: string;
}
/**
 * Type definition for AWS::SSM::MaintenanceWindowTask.MaintenanceWindowStepFunctionsParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowstepfunctionsparameters.html | AWS::SSM::MaintenanceWindowTask.MaintenanceWindowStepFunctionsParameters}
 */
export interface SSMMaintenanceWindowTaskMaintenanceWindowStepFunctionsParameters {
  Input?: string;
  Name?: string;
}
/**
 * Type definition for AWS::SSM::MaintenanceWindowTask.NotificationConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-notificationconfig.html | AWS::SSM::MaintenanceWindowTask.NotificationConfig}
 */
export interface SSMMaintenanceWindowTaskNotificationConfig {
  NotificationArn: string;
  NotificationType?: string;
  NotificationEvents?: any[];
}
/**
 * Type definition for AWS::SSM::MaintenanceWindowTask.Target
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-target.html | AWS::SSM::MaintenanceWindowTask.Target}
 */
export interface SSMMaintenanceWindowTaskTarget {
  Values: any[];
  Key: string;
}
/**
 * Type definition for AWS::SSM::MaintenanceWindowTask.TaskInvocationParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-taskinvocationparameters.html | AWS::SSM::MaintenanceWindowTask.TaskInvocationParameters}
 */
export interface SSMMaintenanceWindowTaskTaskInvocationParameters {
  MaintenanceWindowRunCommandParameters?: SSMMaintenanceWindowTaskMaintenanceWindowRunCommandParameters;
  MaintenanceWindowAutomationParameters?: SSMMaintenanceWindowTaskMaintenanceWindowAutomationParameters;
  MaintenanceWindowStepFunctionsParameters?: SSMMaintenanceWindowTaskMaintenanceWindowStepFunctionsParameters;
  MaintenanceWindowLambdaParameters?: SSMMaintenanceWindowTaskMaintenanceWindowLambdaParameters;
}
/**
 * Type definition for AWS::SSM::PatchBaseline.PatchFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-patchfilter.html | AWS::SSM::PatchBaseline.PatchFilter}
 */
export interface SSMPatchBaselinePatchFilter {
  Values?: any[];
  Key?: string;
}
/**
 * Type definition for AWS::SSM::PatchBaseline.PatchFilterGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-patchfiltergroup.html | AWS::SSM::PatchBaseline.PatchFilterGroup}
 */
export interface SSMPatchBaselinePatchFilterGroup {
  PatchFilters?: any[];
}
/**
 * Type definition for AWS::SSM::PatchBaseline.PatchSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-patchsource.html | AWS::SSM::PatchBaseline.PatchSource}
 */
export interface SSMPatchBaselinePatchSource {
  Products?: any[];
  Configuration?: string;
  Name?: string;
}
/**
 * Type definition for AWS::SSM::PatchBaseline.PatchStringDate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-patchstringdate.html | AWS::SSM::PatchBaseline.PatchStringDate}
 */
export type SSMPatchBaselinePatchStringDate = string;
/**
 * Type definition for AWS::SSM::PatchBaseline.Rule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-rule.html | AWS::SSM::PatchBaseline.Rule}
 */
export interface SSMPatchBaselineRule {
  ApproveUntilDate?: SSMPatchBaselinePatchStringDate;
  EnableNonSecurity?: boolean;
  PatchFilterGroup?: SSMPatchBaselinePatchFilterGroup;
  ApproveAfterDays?: number;
  ComplianceLevel?: string;
}
/**
 * Type definition for AWS::SSM::PatchBaseline.RuleGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-rulegroup.html | AWS::SSM::PatchBaseline.RuleGroup}
 */
export interface SSMPatchBaselineRuleGroup {
  PatchRules?: any[];
}
/**
 * Type definition for AWS::SSM::ResourceDataSync.AwsOrganizationsSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-resourcedatasync-awsorganizationssource.html | AWS::SSM::ResourceDataSync.AwsOrganizationsSource}
 */
export interface SSMResourceDataSyncAwsOrganizationsSource {
  OrganizationSourceType: string;
  OrganizationalUnits?: any[];
}
/**
 * Type definition for AWS::SSM::ResourceDataSync.S3Destination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-resourcedatasync-s3destination.html | AWS::SSM::ResourceDataSync.S3Destination}
 */
export interface SSMResourceDataSyncS3Destination {
  KMSKeyArn?: string;
  BucketName: string;
  BucketRegion: string;
  SyncFormat: string;
  BucketPrefix?: string;
}
/**
 * Type definition for AWS::SSM::ResourceDataSync.SyncSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-resourcedatasync-syncsource.html | AWS::SSM::ResourceDataSync.SyncSource}
 */
export interface SSMResourceDataSyncSyncSource {
  SourceType: string;
  AwsOrganizationsSource?: SSMResourceDataSyncAwsOrganizationsSource;
  IncludeFutureRegions?: boolean;
  SourceRegions: any[];
}
/**
 * Type definition for AWS::SSM::Association
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-association.html | AWS::SSM::Association}
 */
export interface SSMAssociationProps {
  AssociationName?: string;
  CalendarNames?: any[];
  ScheduleExpression?: string;
  MaxErrors?: string;
  Parameters?: object;
  InstanceId?: string;
  WaitForSuccessTimeoutSeconds?: number;
  MaxConcurrency?: string;
  ComplianceSeverity?: string;
  Targets?: any[];
  SyncCompliance?: string;
  OutputLocation?: SSMAssociationInstanceAssociationOutputLocation;
  ScheduleOffset?: number;
  Name: string;
  ApplyOnlyAtCronInterval?: boolean;
  DocumentVersion?: string;
  AutomationTargetParameterName?: string;
}
/**
 * Attributes type definition for AWS::SSM::Association
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-association.html | AWS::SSM::Association}
 */
export interface SSMAssociationAttribs {
  AssociationId?: string;
}
/**
 * Resource class for AWS::SSM::Association
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-association.html | AWS::SSM::Association}
 */
export class SSMAssociation extends ResourceBase<
  "AWS::SSM::Association",
  SSMAssociationProps,
  SSMAssociationAttribs
> {
  public static readonly Type = "AWS::SSM::Association";
  public static readonly AttributeNames: readonly (keyof SSMAssociationAttribs)[] =
    ["AssociationId"];
  constructor(
    logicalId: string,
    properties: SSMAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      SSMAssociation.Type,
      SSMAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SSM::Document
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html | AWS::SSM::Document}
 */
export interface SSMDocumentProps {
  DocumentFormat?: string;
  Requires?: any[];
  Content: object;
  TargetType?: string;
  DocumentType?: string;
  VersionName?: string;
  UpdateMethod?: string;
  Attachments?: any[];
  Tags?: Tag[];
  Name?: string;
}
/**
 * Resource class for AWS::SSM::Document
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html | AWS::SSM::Document}
 */
export class SSMDocument extends ResourceBase<
  "AWS::SSM::Document",
  SSMDocumentProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::SSM::Document";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: SSMDocumentProps,
    options?: ResourceOptions,
  ) {
    super(
      SSMDocument.Type,
      SSMDocument.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SSM::MaintenanceWindow
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindow.html | AWS::SSM::MaintenanceWindow}
 */
export interface SSMMaintenanceWindowProps {
  StartDate?: string;
  Description?: string;
  AllowUnassociatedTargets: boolean;
  Cutoff: number;
  Schedule: string;
  Duration: number;
  ScheduleOffset?: number;
  EndDate?: string;
  Tags?: Tag[];
  Name: string;
  ScheduleTimezone?: string;
}
/**
 * Resource class for AWS::SSM::MaintenanceWindow
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindow.html | AWS::SSM::MaintenanceWindow}
 */
export class SSMMaintenanceWindow extends ResourceBase<
  "AWS::SSM::MaintenanceWindow",
  SSMMaintenanceWindowProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::SSM::MaintenanceWindow";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: SSMMaintenanceWindowProps,
    options?: ResourceOptions,
  ) {
    super(
      SSMMaintenanceWindow.Type,
      SSMMaintenanceWindow.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SSM::MaintenanceWindowTarget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtarget.html | AWS::SSM::MaintenanceWindowTarget}
 */
export interface SSMMaintenanceWindowTargetProps {
  OwnerInformation?: string;
  Description?: string;
  WindowId: string;
  ResourceType: string;
  Targets: any[];
  Name?: string;
}
/**
 * Resource class for AWS::SSM::MaintenanceWindowTarget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtarget.html | AWS::SSM::MaintenanceWindowTarget}
 */
export class SSMMaintenanceWindowTarget extends ResourceBase<
  "AWS::SSM::MaintenanceWindowTarget",
  SSMMaintenanceWindowTargetProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::SSM::MaintenanceWindowTarget";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: SSMMaintenanceWindowTargetProps,
    options?: ResourceOptions,
  ) {
    super(
      SSMMaintenanceWindowTarget.Type,
      SSMMaintenanceWindowTarget.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SSM::MaintenanceWindowTask
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtask.html | AWS::SSM::MaintenanceWindowTask}
 */
export interface SSMMaintenanceWindowTaskProps {
  MaxErrors?: string;
  Description?: string;
  ServiceRoleArn?: string;
  Priority: number;
  MaxConcurrency?: string;
  Targets?: any[];
  Name?: string;
  TaskArn: string;
  TaskInvocationParameters?: SSMMaintenanceWindowTaskTaskInvocationParameters;
  WindowId: string;
  TaskParameters?: object;
  TaskType: string;
  CutoffBehavior?: string;
  LoggingInfo?: SSMMaintenanceWindowTaskLoggingInfo;
}
/**
 * Resource class for AWS::SSM::MaintenanceWindowTask
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtask.html | AWS::SSM::MaintenanceWindowTask}
 */
export class SSMMaintenanceWindowTask extends ResourceBase<
  "AWS::SSM::MaintenanceWindowTask",
  SSMMaintenanceWindowTaskProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::SSM::MaintenanceWindowTask";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: SSMMaintenanceWindowTaskProps,
    options?: ResourceOptions,
  ) {
    super(
      SSMMaintenanceWindowTask.Type,
      SSMMaintenanceWindowTask.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SSM::Parameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-parameter.html | AWS::SSM::Parameter}
 */
export interface SSMParameterProps {
  Type: string;
  Description?: string;
  Policies?: string;
  AllowedPattern?: string;
  Tier?: string;
  Value: string;
  DataType?: string;
  Tags?: Record<string, Tag>;
  Name?: string;
}
/**
 * Attributes type definition for AWS::SSM::Parameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-parameter.html | AWS::SSM::Parameter}
 */
export interface SSMParameterAttribs {
  Type?: string;
  Value?: string;
}
/**
 * Resource class for AWS::SSM::Parameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-parameter.html | AWS::SSM::Parameter}
 */
export class SSMParameter extends ResourceBase<
  "AWS::SSM::Parameter",
  SSMParameterProps,
  SSMParameterAttribs
> {
  public static readonly Type = "AWS::SSM::Parameter";
  public static readonly AttributeNames: readonly (keyof SSMParameterAttribs)[] =
    ["Type", "Value"];
  constructor(
    logicalId: string,
    properties: SSMParameterProps,
    options?: ResourceOptions,
  ) {
    super(
      SSMParameter.Type,
      SSMParameter.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SSM::PatchBaseline
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html | AWS::SSM::PatchBaseline}
 */
export interface SSMPatchBaselineProps {
  OperatingSystem?: string;
  Description?: string;
  ApprovalRules?: SSMPatchBaselineRuleGroup;
  Sources?: any[];
  Name: string;
  RejectedPatches?: any[];
  ApprovedPatches?: any[];
  RejectedPatchesAction?: string;
  PatchGroups?: any[];
  ApprovedPatchesComplianceLevel?: string;
  ApprovedPatchesEnableNonSecurity?: boolean;
  GlobalFilters?: SSMPatchBaselinePatchFilterGroup;
  Tags?: Tag[];
}
/**
 * Resource class for AWS::SSM::PatchBaseline
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html | AWS::SSM::PatchBaseline}
 */
export class SSMPatchBaseline extends ResourceBase<
  "AWS::SSM::PatchBaseline",
  SSMPatchBaselineProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::SSM::PatchBaseline";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: SSMPatchBaselineProps,
    options?: ResourceOptions,
  ) {
    super(
      SSMPatchBaseline.Type,
      SSMPatchBaseline.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SSM::ResourceDataSync
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-resourcedatasync.html | AWS::SSM::ResourceDataSync}
 */
export interface SSMResourceDataSyncProps {
  S3Destination?: SSMResourceDataSyncS3Destination;
  KMSKeyArn?: string;
  SyncSource?: SSMResourceDataSyncSyncSource;
  BucketName?: string;
  BucketRegion?: string;
  SyncFormat?: string;
  SyncType?: string;
  BucketPrefix?: string;
  SyncName: string;
}
/**
 * Attributes type definition for AWS::SSM::ResourceDataSync
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-resourcedatasync.html | AWS::SSM::ResourceDataSync}
 */
export interface SSMResourceDataSyncAttribs {
  SyncName?: string;
}
/**
 * Resource class for AWS::SSM::ResourceDataSync
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-resourcedatasync.html | AWS::SSM::ResourceDataSync}
 */
export class SSMResourceDataSync extends ResourceBase<
  "AWS::SSM::ResourceDataSync",
  SSMResourceDataSyncProps,
  SSMResourceDataSyncAttribs
> {
  public static readonly Type = "AWS::SSM::ResourceDataSync";
  public static readonly AttributeNames: readonly (keyof SSMResourceDataSyncAttribs)[] =
    ["SyncName"];
  constructor(
    logicalId: string,
    properties: SSMResourceDataSyncProps,
    options?: ResourceOptions,
  ) {
    super(
      SSMResourceDataSync.Type,
      SSMResourceDataSync.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SSM::ResourcePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-resourcepolicy.html | AWS::SSM::ResourcePolicy}
 */
export interface SSMResourcePolicyProps {
  Policy: object;
  ResourceArn: string;
}
/**
 * Attributes type definition for AWS::SSM::ResourcePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-resourcepolicy.html | AWS::SSM::ResourcePolicy}
 */
export interface SSMResourcePolicyAttribs {
  PolicyHash?: string;
  PolicyId?: string;
}
/**
 * Resource class for AWS::SSM::ResourcePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-resourcepolicy.html | AWS::SSM::ResourcePolicy}
 */
export class SSMResourcePolicy extends ResourceBase<
  "AWS::SSM::ResourcePolicy",
  SSMResourcePolicyProps,
  SSMResourcePolicyAttribs
> {
  public static readonly Type = "AWS::SSM::ResourcePolicy";
  public static readonly AttributeNames: readonly (keyof SSMResourcePolicyAttribs)[] =
    ["PolicyHash", "PolicyId"];
  constructor(
    logicalId: string,
    properties: SSMResourcePolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      SSMResourcePolicy.Type,
      SSMResourcePolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
