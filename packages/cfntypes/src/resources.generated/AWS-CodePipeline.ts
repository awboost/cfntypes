import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::CodePipeline::CustomActionType.ArtifactDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-customactiontype-artifactdetails.html | AWS::CodePipeline::CustomActionType.ArtifactDetails}
 */
export interface CodePipelineCustomActionTypeArtifactDetails {
  MinimumCount: number;
  MaximumCount: number;
}
/**
 * Type definition for AWS::CodePipeline::CustomActionType.ConfigurationProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-customactiontype-configurationproperties.html | AWS::CodePipeline::CustomActionType.ConfigurationProperties}
 */
export interface CodePipelineCustomActionTypeConfigurationProperties {
  Secret: boolean;
  Type?: string;
  Description?: string;
  Required: boolean;
  Queryable?: boolean;
  Key: boolean;
  Name: string;
}
/**
 * Type definition for AWS::CodePipeline::CustomActionType.Settings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-customactiontype-settings.html | AWS::CodePipeline::CustomActionType.Settings}
 */
export interface CodePipelineCustomActionTypeSettings {
  EntityUrlTemplate?: string;
  ExecutionUrlTemplate?: string;
  RevisionUrlTemplate?: string;
  ThirdPartyConfigurationUrl?: string;
}
/**
 * Type definition for AWS::CodePipeline::Pipeline.ActionDeclaration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-stages-actions.html | AWS::CodePipeline::Pipeline.ActionDeclaration}
 */
export interface CodePipelinePipelineActionDeclaration {
  ActionTypeId: CodePipelinePipelineActionTypeId;
  Configuration?: object;
  InputArtifacts?: any[];
  Name: string;
  Namespace?: string;
  OutputArtifacts?: any[];
  Region?: string;
  RoleArn?: string;
  RunOrder?: number;
}
/**
 * Type definition for AWS::CodePipeline::Pipeline.ActionTypeId
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-stages-actions-actiontypeid.html | AWS::CodePipeline::Pipeline.ActionTypeId}
 */
export interface CodePipelinePipelineActionTypeId {
  Category: string;
  Owner: string;
  Provider: string;
  Version: string;
}
/**
 * Type definition for AWS::CodePipeline::Pipeline.ArtifactStore
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-artifactstore.html | AWS::CodePipeline::Pipeline.ArtifactStore}
 */
export interface CodePipelinePipelineArtifactStore {
  EncryptionKey?: CodePipelinePipelineEncryptionKey;
  Location: string;
  Type: string;
}
/**
 * Type definition for AWS::CodePipeline::Pipeline.ArtifactStoreMap
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-artifactstoremap.html | AWS::CodePipeline::Pipeline.ArtifactStoreMap}
 */
export interface CodePipelinePipelineArtifactStoreMap {
  ArtifactStore: CodePipelinePipelineArtifactStore;
  Region: string;
}
/**
 * Type definition for AWS::CodePipeline::Pipeline.BlockerDeclaration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-stages-blockers.html | AWS::CodePipeline::Pipeline.BlockerDeclaration}
 */
export interface CodePipelinePipelineBlockerDeclaration {
  Name: string;
  Type: string;
}
/**
 * Type definition for AWS::CodePipeline::Pipeline.EncryptionKey
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-artifactstore-encryptionkey.html | AWS::CodePipeline::Pipeline.EncryptionKey}
 */
export interface CodePipelinePipelineEncryptionKey {
  Id: string;
  Type: string;
}
/**
 * Type definition for AWS::CodePipeline::Pipeline.InputArtifact
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-stages-actions-inputartifacts.html | AWS::CodePipeline::Pipeline.InputArtifact}
 */
export interface CodePipelinePipelineInputArtifact {
  Name: string;
}
/**
 * Type definition for AWS::CodePipeline::Pipeline.OutputArtifact
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-stages-actions-outputartifacts.html | AWS::CodePipeline::Pipeline.OutputArtifact}
 */
export interface CodePipelinePipelineOutputArtifact {
  Name: string;
}
/**
 * Type definition for AWS::CodePipeline::Pipeline.StageDeclaration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-stages.html | AWS::CodePipeline::Pipeline.StageDeclaration}
 */
export interface CodePipelinePipelineStageDeclaration {
  Actions: any[];
  Blockers?: any[];
  Name: string;
}
/**
 * Type definition for AWS::CodePipeline::Pipeline.StageTransition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-disableinboundstagetransitions.html | AWS::CodePipeline::Pipeline.StageTransition}
 */
export interface CodePipelinePipelineStageTransition {
  Reason: string;
  StageName: string;
}
/**
 * Type definition for AWS::CodePipeline::Webhook.WebhookAuthConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-webhook-webhookauthconfiguration.html | AWS::CodePipeline::Webhook.WebhookAuthConfiguration}
 */
export interface CodePipelineWebhookWebhookAuthConfiguration {
  AllowedIPRange?: string;
  SecretToken?: string;
}
/**
 * Type definition for AWS::CodePipeline::Webhook.WebhookFilterRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-webhook-webhookfilterrule.html | AWS::CodePipeline::Webhook.WebhookFilterRule}
 */
export interface CodePipelineWebhookWebhookFilterRule {
  JsonPath: string;
  MatchEquals?: string;
}
/**
 * Type definition for AWS::CodePipeline::CustomActionType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-customactiontype.html | AWS::CodePipeline::CustomActionType}
 */
export interface CodePipelineCustomActionTypeProps {
  Category: string;
  InputArtifactDetails: CodePipelineCustomActionTypeArtifactDetails;
  Version: string;
  OutputArtifactDetails: CodePipelineCustomActionTypeArtifactDetails;
  ConfigurationProperties?: any[];
  Settings?: CodePipelineCustomActionTypeSettings;
  Tags?: Tag[];
  Provider: string;
}
/**
 * Attributes type definition for AWS::CodePipeline::CustomActionType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-customactiontype.html | AWS::CodePipeline::CustomActionType}
 */
export interface CodePipelineCustomActionTypeAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::CodePipeline::CustomActionType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-customactiontype.html | AWS::CodePipeline::CustomActionType}
 */
export class CodePipelineCustomActionType extends ResourceBase<
  "AWS::CodePipeline::CustomActionType",
  CodePipelineCustomActionTypeProps,
  CodePipelineCustomActionTypeAttribs
> {
  public static readonly Type = "AWS::CodePipeline::CustomActionType";
  public static readonly AttributeNames: readonly (keyof CodePipelineCustomActionTypeAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: CodePipelineCustomActionTypeProps,
    options?: ResourceOptions,
  ) {
    super(
      CodePipelineCustomActionType.Type,
      CodePipelineCustomActionType.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CodePipeline::Pipeline
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html | AWS::CodePipeline::Pipeline}
 */
export interface CodePipelinePipelineProps {
  ArtifactStore?: CodePipelinePipelineArtifactStore;
  ArtifactStores?: any[];
  DisableInboundStageTransitions?: any[];
  Name?: string;
  RestartExecutionOnUpdate?: boolean;
  RoleArn: string;
  Stages: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::CodePipeline::Pipeline
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html | AWS::CodePipeline::Pipeline}
 */
export interface CodePipelinePipelineAttribs {
  Version?: string;
}
/**
 * Resource class for AWS::CodePipeline::Pipeline
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html | AWS::CodePipeline::Pipeline}
 */
export class CodePipelinePipeline extends ResourceBase<
  "AWS::CodePipeline::Pipeline",
  CodePipelinePipelineProps,
  CodePipelinePipelineAttribs
> {
  public static readonly Type = "AWS::CodePipeline::Pipeline";
  public static readonly AttributeNames: readonly (keyof CodePipelinePipelineAttribs)[] =
    ["Version"];
  constructor(
    logicalId: string,
    properties: CodePipelinePipelineProps,
    options?: ResourceOptions,
  ) {
    super(
      CodePipelinePipeline.Type,
      CodePipelinePipeline.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CodePipeline::Webhook
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-webhook.html | AWS::CodePipeline::Webhook}
 */
export interface CodePipelineWebhookProps {
  AuthenticationConfiguration: CodePipelineWebhookWebhookAuthConfiguration;
  Filters: any[];
  Authentication: string;
  TargetPipeline: string;
  TargetAction: string;
  Name?: string;
  TargetPipelineVersion: number;
  RegisterWithThirdParty?: boolean;
}
/**
 * Attributes type definition for AWS::CodePipeline::Webhook
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-webhook.html | AWS::CodePipeline::Webhook}
 */
export interface CodePipelineWebhookAttribs {
  Url?: string;
}
/**
 * Resource class for AWS::CodePipeline::Webhook
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-webhook.html | AWS::CodePipeline::Webhook}
 */
export class CodePipelineWebhook extends ResourceBase<
  "AWS::CodePipeline::Webhook",
  CodePipelineWebhookProps,
  CodePipelineWebhookAttribs
> {
  public static readonly Type = "AWS::CodePipeline::Webhook";
  public static readonly AttributeNames: readonly (keyof CodePipelineWebhookAttribs)[] =
    ["Url"];
  constructor(
    logicalId: string,
    properties: CodePipelineWebhookProps,
    options?: ResourceOptions,
  ) {
    super(
      CodePipelineWebhook.Type,
      CodePipelineWebhook.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
