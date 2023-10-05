import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Wisdom::Assistant.ServerSideEncryptionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-assistant-serversideencryptionconfiguration.html | AWS::Wisdom::Assistant.ServerSideEncryptionConfiguration}
 */
export interface WisdomAssistantServerSideEncryptionConfiguration {
  KmsKeyId?: string;
}
/**
 * Type definition for AWS::Wisdom::AssistantAssociation.AssociationData
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-assistantassociation-associationdata.html | AWS::Wisdom::AssistantAssociation.AssociationData}
 */
export interface WisdomAssistantAssociationAssociationData {
  KnowledgeBaseId: string;
}
/**
 * Type definition for AWS::Wisdom::KnowledgeBase.AppIntegrationsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-knowledgebase-appintegrationsconfiguration.html | AWS::Wisdom::KnowledgeBase.AppIntegrationsConfiguration}
 */
export interface WisdomKnowledgeBaseAppIntegrationsConfiguration {
  ObjectFields?: any[];
  AppIntegrationArn: string;
}
/**
 * Type definition for AWS::Wisdom::KnowledgeBase.RenderingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-knowledgebase-renderingconfiguration.html | AWS::Wisdom::KnowledgeBase.RenderingConfiguration}
 */
export interface WisdomKnowledgeBaseRenderingConfiguration {
  TemplateUri?: string;
}
/**
 * Type definition for AWS::Wisdom::KnowledgeBase.ServerSideEncryptionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-knowledgebase-serversideencryptionconfiguration.html | AWS::Wisdom::KnowledgeBase.ServerSideEncryptionConfiguration}
 */
export interface WisdomKnowledgeBaseServerSideEncryptionConfiguration {
  KmsKeyId?: string;
}
/**
 * Type definition for AWS::Wisdom::KnowledgeBase.SourceConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-knowledgebase-sourceconfiguration.html | AWS::Wisdom::KnowledgeBase.SourceConfiguration}
 */
export interface WisdomKnowledgeBaseSourceConfiguration {
  AppIntegrations: WisdomKnowledgeBaseAppIntegrationsConfiguration;
}
/**
 * Type definition for AWS::Wisdom::Assistant
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-assistant.html | AWS::Wisdom::Assistant}
 */
export interface WisdomAssistantProps {
  Type: string;
  Description?: string;
  ServerSideEncryptionConfiguration?: WisdomAssistantServerSideEncryptionConfiguration;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::Wisdom::Assistant
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-assistant.html | AWS::Wisdom::Assistant}
 */
export interface WisdomAssistantAttribs {
  AssistantArn?: string;
  AssistantId?: string;
}
/**
 * Resource class for AWS::Wisdom::Assistant
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-assistant.html | AWS::Wisdom::Assistant}
 */
export class WisdomAssistant extends ResourceBase<
  "AWS::Wisdom::Assistant",
  WisdomAssistantProps,
  WisdomAssistantAttribs
> {
  public static readonly Type = "AWS::Wisdom::Assistant";
  public static readonly AttributeNames: readonly (keyof WisdomAssistantAttribs)[] =
    ["AssistantArn", "AssistantId"];
  constructor(
    logicalId: string,
    properties: WisdomAssistantProps,
    options?: ResourceOptions,
  ) {
    super(
      WisdomAssistant.Type,
      WisdomAssistant.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Wisdom::AssistantAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-assistantassociation.html | AWS::Wisdom::AssistantAssociation}
 */
export interface WisdomAssistantAssociationProps {
  Association: WisdomAssistantAssociationAssociationData;
  AssociationType: string;
  AssistantId: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::Wisdom::AssistantAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-assistantassociation.html | AWS::Wisdom::AssistantAssociation}
 */
export interface WisdomAssistantAssociationAttribs {
  AssistantAssociationArn?: string;
  AssistantArn?: string;
  AssistantAssociationId?: string;
}
/**
 * Resource class for AWS::Wisdom::AssistantAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-assistantassociation.html | AWS::Wisdom::AssistantAssociation}
 */
export class WisdomAssistantAssociation extends ResourceBase<
  "AWS::Wisdom::AssistantAssociation",
  WisdomAssistantAssociationProps,
  WisdomAssistantAssociationAttribs
> {
  public static readonly Type = "AWS::Wisdom::AssistantAssociation";
  public static readonly AttributeNames: readonly (keyof WisdomAssistantAssociationAttribs)[] =
    ["AssistantAssociationArn", "AssistantArn", "AssistantAssociationId"];
  constructor(
    logicalId: string,
    properties: WisdomAssistantAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      WisdomAssistantAssociation.Type,
      WisdomAssistantAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Wisdom::KnowledgeBase
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html | AWS::Wisdom::KnowledgeBase}
 */
export interface WisdomKnowledgeBaseProps {
  Description?: string;
  KnowledgeBaseType: string;
  SourceConfiguration?: WisdomKnowledgeBaseSourceConfiguration;
  ServerSideEncryptionConfiguration?: WisdomKnowledgeBaseServerSideEncryptionConfiguration;
  RenderingConfiguration?: WisdomKnowledgeBaseRenderingConfiguration;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::Wisdom::KnowledgeBase
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html | AWS::Wisdom::KnowledgeBase}
 */
export interface WisdomKnowledgeBaseAttribs {
  KnowledgeBaseArn?: string;
  KnowledgeBaseId?: string;
}
/**
 * Resource class for AWS::Wisdom::KnowledgeBase
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html | AWS::Wisdom::KnowledgeBase}
 */
export class WisdomKnowledgeBase extends ResourceBase<
  "AWS::Wisdom::KnowledgeBase",
  WisdomKnowledgeBaseProps,
  WisdomKnowledgeBaseAttribs
> {
  public static readonly Type = "AWS::Wisdom::KnowledgeBase";
  public static readonly AttributeNames: readonly (keyof WisdomKnowledgeBaseAttribs)[] =
    ["KnowledgeBaseArn", "KnowledgeBaseId"];
  constructor(
    logicalId: string,
    properties: WisdomKnowledgeBaseProps,
    options?: ResourceOptions,
  ) {
    super(
      WisdomKnowledgeBase.Type,
      WisdomKnowledgeBase.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
