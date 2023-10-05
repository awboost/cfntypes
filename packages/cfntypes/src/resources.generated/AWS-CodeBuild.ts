import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::CodeBuild::Project.Artifacts
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-artifacts.html | AWS::CodeBuild::Project.Artifacts}
 */
export interface CodeBuildProjectArtifacts {
  Path?: string;
  Type: string;
  ArtifactIdentifier?: string;
  OverrideArtifactName?: boolean;
  Packaging?: string;
  EncryptionDisabled?: boolean;
  Location?: string;
  Name?: string;
  NamespaceType?: string;
}
/**
 * Type definition for AWS::CodeBuild::Project.BatchRestrictions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-batchrestrictions.html | AWS::CodeBuild::Project.BatchRestrictions}
 */
export interface CodeBuildProjectBatchRestrictions {
  ComputeTypesAllowed?: any[];
  MaximumBuildsAllowed?: number;
}
/**
 * Type definition for AWS::CodeBuild::Project.BuildStatusConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-buildstatusconfig.html | AWS::CodeBuild::Project.BuildStatusConfig}
 */
export interface CodeBuildProjectBuildStatusConfig {
  Context?: string;
  TargetUrl?: string;
}
/**
 * Type definition for AWS::CodeBuild::Project.CloudWatchLogsConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-cloudwatchlogsconfig.html | AWS::CodeBuild::Project.CloudWatchLogsConfig}
 */
export interface CodeBuildProjectCloudWatchLogsConfig {
  Status: string;
  GroupName?: string;
  StreamName?: string;
}
/**
 * Type definition for AWS::CodeBuild::Project.Environment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-environment.html | AWS::CodeBuild::Project.Environment}
 */
export interface CodeBuildProjectEnvironment {
  Type: string;
  EnvironmentVariables?: any[];
  PrivilegedMode?: boolean;
  ImagePullCredentialsType?: string;
  Image: string;
  RegistryCredential?: CodeBuildProjectRegistryCredential;
  ComputeType: string;
  Certificate?: string;
}
/**
 * Type definition for AWS::CodeBuild::Project.EnvironmentVariable
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-environmentvariable.html | AWS::CodeBuild::Project.EnvironmentVariable}
 */
export interface CodeBuildProjectEnvironmentVariable {
  Type?: string;
  Value: string;
  Name: string;
}
/**
 * Type definition for AWS::CodeBuild::Project.FilterGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-filtergroup.html | AWS::CodeBuild::Project.FilterGroup}
 */
export type CodeBuildProjectFilterGroup = any[];
/**
 * Type definition for AWS::CodeBuild::Project.GitSubmodulesConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-gitsubmodulesconfig.html | AWS::CodeBuild::Project.GitSubmodulesConfig}
 */
export interface CodeBuildProjectGitSubmodulesConfig {
  FetchSubmodules: boolean;
}
/**
 * Type definition for AWS::CodeBuild::Project.LogsConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-logsconfig.html | AWS::CodeBuild::Project.LogsConfig}
 */
export interface CodeBuildProjectLogsConfig {
  CloudWatchLogs?: CodeBuildProjectCloudWatchLogsConfig;
  S3Logs?: CodeBuildProjectS3LogsConfig;
}
/**
 * Type definition for AWS::CodeBuild::Project.ProjectBuildBatchConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-projectbuildbatchconfig.html | AWS::CodeBuild::Project.ProjectBuildBatchConfig}
 */
export interface CodeBuildProjectProjectBuildBatchConfig {
  CombineArtifacts?: boolean;
  ServiceRole?: string;
  BatchReportMode?: string;
  TimeoutInMins?: number;
  Restrictions?: CodeBuildProjectBatchRestrictions;
}
/**
 * Type definition for AWS::CodeBuild::Project.ProjectCache
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-projectcache.html | AWS::CodeBuild::Project.ProjectCache}
 */
export interface CodeBuildProjectProjectCache {
  Modes?: any[];
  Type: string;
  Location?: string;
}
/**
 * Type definition for AWS::CodeBuild::Project.ProjectFileSystemLocation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-projectfilesystemlocation.html | AWS::CodeBuild::Project.ProjectFileSystemLocation}
 */
export interface CodeBuildProjectProjectFileSystemLocation {
  MountPoint: string;
  Type: string;
  Identifier: string;
  MountOptions?: string;
  Location: string;
}
/**
 * Type definition for AWS::CodeBuild::Project.ProjectSourceVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-projectsourceversion.html | AWS::CodeBuild::Project.ProjectSourceVersion}
 */
export interface CodeBuildProjectProjectSourceVersion {
  SourceIdentifier: string;
  SourceVersion?: string;
}
/**
 * Type definition for AWS::CodeBuild::Project.ProjectTriggers
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-projecttriggers.html | AWS::CodeBuild::Project.ProjectTriggers}
 */
export interface CodeBuildProjectProjectTriggers {
  FilterGroups?: any[];
  BuildType?: string;
  Webhook?: boolean;
}
/**
 * Type definition for AWS::CodeBuild::Project.RegistryCredential
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-registrycredential.html | AWS::CodeBuild::Project.RegistryCredential}
 */
export interface CodeBuildProjectRegistryCredential {
  Credential: string;
  CredentialProvider: string;
}
/**
 * Type definition for AWS::CodeBuild::Project.S3LogsConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-s3logsconfig.html | AWS::CodeBuild::Project.S3LogsConfig}
 */
export interface CodeBuildProjectS3LogsConfig {
  Status: string;
  EncryptionDisabled?: boolean;
  Location?: string;
}
/**
 * Type definition for AWS::CodeBuild::Project.Source
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-source.html | AWS::CodeBuild::Project.Source}
 */
export interface CodeBuildProjectSource {
  Type: string;
  ReportBuildStatus?: boolean;
  Auth?: CodeBuildProjectSourceAuth;
  SourceIdentifier?: string;
  BuildSpec?: string;
  GitCloneDepth?: number;
  BuildStatusConfig?: CodeBuildProjectBuildStatusConfig;
  GitSubmodulesConfig?: CodeBuildProjectGitSubmodulesConfig;
  InsecureSsl?: boolean;
  Location?: string;
}
/**
 * Type definition for AWS::CodeBuild::Project.SourceAuth
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-sourceauth.html | AWS::CodeBuild::Project.SourceAuth}
 */
export interface CodeBuildProjectSourceAuth {
  Type: string;
  Resource?: string;
}
/**
 * Type definition for AWS::CodeBuild::Project.VpcConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-vpcconfig.html | AWS::CodeBuild::Project.VpcConfig}
 */
export interface CodeBuildProjectVpcConfig {
  Subnets?: any[];
  VpcId?: string;
  SecurityGroupIds?: any[];
}
/**
 * Type definition for AWS::CodeBuild::Project.WebhookFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-webhookfilter.html | AWS::CodeBuild::Project.WebhookFilter}
 */
export interface CodeBuildProjectWebhookFilter {
  Pattern: string;
  Type: string;
  ExcludeMatchedPattern?: boolean;
}
/**
 * Type definition for AWS::CodeBuild::ReportGroup.ReportExportConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-reportgroup-reportexportconfig.html | AWS::CodeBuild::ReportGroup.ReportExportConfig}
 */
export interface CodeBuildReportGroupReportExportConfig {
  S3Destination?: CodeBuildReportGroupS3ReportExportConfig;
  ExportConfigType: string;
}
/**
 * Type definition for AWS::CodeBuild::ReportGroup.S3ReportExportConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-reportgroup-s3reportexportconfig.html | AWS::CodeBuild::ReportGroup.S3ReportExportConfig}
 */
export interface CodeBuildReportGroupS3ReportExportConfig {
  Path?: string;
  Bucket: string;
  Packaging?: string;
  EncryptionKey?: string;
  BucketOwner?: string;
  EncryptionDisabled?: boolean;
}
/**
 * Type definition for AWS::CodeBuild::Project
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-project.html | AWS::CodeBuild::Project}
 */
export interface CodeBuildProjectProps {
  Description?: string;
  ResourceAccessRole?: string;
  VpcConfig?: CodeBuildProjectVpcConfig;
  SecondarySources?: any[];
  EncryptionKey?: string;
  SourceVersion?: string;
  Triggers?: CodeBuildProjectProjectTriggers;
  SecondaryArtifacts?: any[];
  Source: CodeBuildProjectSource;
  Name?: string;
  Artifacts: CodeBuildProjectArtifacts;
  BadgeEnabled?: boolean;
  LogsConfig?: CodeBuildProjectLogsConfig;
  ServiceRole: string;
  QueuedTimeoutInMinutes?: number;
  FileSystemLocations?: any[];
  Environment: CodeBuildProjectEnvironment;
  SecondarySourceVersions?: any[];
  ConcurrentBuildLimit?: number;
  Visibility?: string;
  BuildBatchConfig?: CodeBuildProjectProjectBuildBatchConfig;
  Tags?: Tag[];
  TimeoutInMinutes?: number;
  Cache?: CodeBuildProjectProjectCache;
}
/**
 * Attributes type definition for AWS::CodeBuild::Project
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-project.html | AWS::CodeBuild::Project}
 */
export interface CodeBuildProjectAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::CodeBuild::Project
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-project.html | AWS::CodeBuild::Project}
 */
export class CodeBuildProject extends ResourceBase<
  "AWS::CodeBuild::Project",
  CodeBuildProjectProps,
  CodeBuildProjectAttribs
> {
  public static readonly Type = "AWS::CodeBuild::Project";
  public static readonly AttributeNames: readonly (keyof CodeBuildProjectAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: CodeBuildProjectProps,
    options?: ResourceOptions,
  ) {
    super(
      CodeBuildProject.Type,
      CodeBuildProject.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CodeBuild::ReportGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-reportgroup.html | AWS::CodeBuild::ReportGroup}
 */
export interface CodeBuildReportGroupProps {
  Type: string;
  ExportConfig: CodeBuildReportGroupReportExportConfig;
  DeleteReports?: boolean;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::CodeBuild::ReportGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-reportgroup.html | AWS::CodeBuild::ReportGroup}
 */
export interface CodeBuildReportGroupAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::CodeBuild::ReportGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-reportgroup.html | AWS::CodeBuild::ReportGroup}
 */
export class CodeBuildReportGroup extends ResourceBase<
  "AWS::CodeBuild::ReportGroup",
  CodeBuildReportGroupProps,
  CodeBuildReportGroupAttribs
> {
  public static readonly Type = "AWS::CodeBuild::ReportGroup";
  public static readonly AttributeNames: readonly (keyof CodeBuildReportGroupAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: CodeBuildReportGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      CodeBuildReportGroup.Type,
      CodeBuildReportGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CodeBuild::SourceCredential
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-sourcecredential.html | AWS::CodeBuild::SourceCredential}
 */
export interface CodeBuildSourceCredentialProps {
  ServerType: string;
  Username?: string;
  Token: string;
  AuthType: string;
}
/**
 * Resource class for AWS::CodeBuild::SourceCredential
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-sourcecredential.html | AWS::CodeBuild::SourceCredential}
 */
export class CodeBuildSourceCredential extends ResourceBase<
  "AWS::CodeBuild::SourceCredential",
  CodeBuildSourceCredentialProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::CodeBuild::SourceCredential";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: CodeBuildSourceCredentialProps,
    options?: ResourceOptions,
  ) {
    super(
      CodeBuildSourceCredential.Type,
      CodeBuildSourceCredential.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
