import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Omics::AnnotationStore.ReferenceItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-annotationstore-referenceitem.html | AWS::Omics::AnnotationStore.ReferenceItem}
 */
export interface OmicsAnnotationStoreReferenceItem {
  ReferenceArn: string;
}
/**
 * Type definition for AWS::Omics::AnnotationStore.SseConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-annotationstore-sseconfig.html | AWS::Omics::AnnotationStore.SseConfig}
 */
export interface OmicsAnnotationStoreSseConfig {
  Type: string;
  KeyArn?: string;
}
/**
 * Type definition for AWS::Omics::AnnotationStore.StoreOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-annotationstore-storeoptions.html | AWS::Omics::AnnotationStore.StoreOptions}
 */
export interface OmicsAnnotationStoreStoreOptions {
  TsvStoreOptions: OmicsAnnotationStoreTsvStoreOptions;
}
/**
 * Type definition for AWS::Omics::AnnotationStore.TsvStoreOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-annotationstore-tsvstoreoptions.html | AWS::Omics::AnnotationStore.TsvStoreOptions}
 */
export interface OmicsAnnotationStoreTsvStoreOptions {
  Schema?: object;
  FormatToHeader?: Record<string, any>;
  AnnotationType?: string;
}
/**
 * Type definition for AWS::Omics::ReferenceStore.SseConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-referencestore-sseconfig.html | AWS::Omics::ReferenceStore.SseConfig}
 */
export interface OmicsReferenceStoreSseConfig {
  Type: string;
  KeyArn?: string;
}
/**
 * Type definition for AWS::Omics::SequenceStore.SseConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-sequencestore-sseconfig.html | AWS::Omics::SequenceStore.SseConfig}
 */
export interface OmicsSequenceStoreSseConfig {
  Type: string;
  KeyArn?: string;
}
/**
 * Type definition for AWS::Omics::VariantStore.ReferenceItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-variantstore-referenceitem.html | AWS::Omics::VariantStore.ReferenceItem}
 */
export interface OmicsVariantStoreReferenceItem {
  ReferenceArn: string;
}
/**
 * Type definition for AWS::Omics::VariantStore.SseConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-variantstore-sseconfig.html | AWS::Omics::VariantStore.SseConfig}
 */
export interface OmicsVariantStoreSseConfig {
  Type: string;
  KeyArn?: string;
}
/**
 * Type definition for AWS::Omics::Workflow.WorkflowParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflow-workflowparameter.html | AWS::Omics::Workflow.WorkflowParameter}
 */
export interface OmicsWorkflowWorkflowParameter {
  Description?: string;
  Optional?: boolean;
}
/**
 * Type definition for AWS::Omics::AnnotationStore
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-annotationstore.html | AWS::Omics::AnnotationStore}
 */
export interface OmicsAnnotationStoreProps {
  StoreFormat: string;
  Description?: string;
  Reference?: OmicsAnnotationStoreReferenceItem;
  SseConfig?: OmicsAnnotationStoreSseConfig;
  StoreOptions?: OmicsAnnotationStoreStoreOptions;
  Tags?: Record<string, Tag>;
  Name: string;
}
/**
 * Attributes type definition for AWS::Omics::AnnotationStore
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-annotationstore.html | AWS::Omics::AnnotationStore}
 */
export interface OmicsAnnotationStoreAttribs {
  Status?: string;
  CreationTime?: string;
  UpdateTime?: string;
  Id?: string;
  StoreSizeBytes?: number;
  StatusMessage?: string;
  StoreArn?: string;
}
/**
 * Resource class for AWS::Omics::AnnotationStore
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-annotationstore.html | AWS::Omics::AnnotationStore}
 */
export class OmicsAnnotationStore extends ResourceBase<
  "AWS::Omics::AnnotationStore",
  OmicsAnnotationStoreProps,
  OmicsAnnotationStoreAttribs
> {
  public static readonly Type = "AWS::Omics::AnnotationStore";
  public static readonly AttributeNames: readonly (keyof OmicsAnnotationStoreAttribs)[] =
    [
      "Status",
      "CreationTime",
      "UpdateTime",
      "Id",
      "StoreSizeBytes",
      "StatusMessage",
      "StoreArn",
    ];
  constructor(
    logicalId: string,
    properties: OmicsAnnotationStoreProps,
    options?: ResourceOptions,
  ) {
    super(
      OmicsAnnotationStore.Type,
      OmicsAnnotationStore.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Omics::ReferenceStore
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-referencestore.html | AWS::Omics::ReferenceStore}
 */
export interface OmicsReferenceStoreProps {
  Description?: string;
  SseConfig?: OmicsReferenceStoreSseConfig;
  Tags?: Record<string, Tag>;
  Name: string;
}
/**
 * Attributes type definition for AWS::Omics::ReferenceStore
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-referencestore.html | AWS::Omics::ReferenceStore}
 */
export interface OmicsReferenceStoreAttribs {
  ReferenceStoreId?: string;
  CreationTime?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::Omics::ReferenceStore
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-referencestore.html | AWS::Omics::ReferenceStore}
 */
export class OmicsReferenceStore extends ResourceBase<
  "AWS::Omics::ReferenceStore",
  OmicsReferenceStoreProps,
  OmicsReferenceStoreAttribs
> {
  public static readonly Type = "AWS::Omics::ReferenceStore";
  public static readonly AttributeNames: readonly (keyof OmicsReferenceStoreAttribs)[] =
    ["ReferenceStoreId", "CreationTime", "Arn"];
  constructor(
    logicalId: string,
    properties: OmicsReferenceStoreProps,
    options?: ResourceOptions,
  ) {
    super(
      OmicsReferenceStore.Type,
      OmicsReferenceStore.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Omics::RunGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-rungroup.html | AWS::Omics::RunGroup}
 */
export interface OmicsRunGroupProps {
  MaxDuration?: number;
  MaxGpus?: number;
  MaxRuns?: number;
  MaxCpus?: number;
  Tags?: Record<string, Tag>;
  Name?: string;
}
/**
 * Attributes type definition for AWS::Omics::RunGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-rungroup.html | AWS::Omics::RunGroup}
 */
export interface OmicsRunGroupAttribs {
  CreationTime?: string;
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::Omics::RunGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-rungroup.html | AWS::Omics::RunGroup}
 */
export class OmicsRunGroup extends ResourceBase<
  "AWS::Omics::RunGroup",
  OmicsRunGroupProps,
  OmicsRunGroupAttribs
> {
  public static readonly Type = "AWS::Omics::RunGroup";
  public static readonly AttributeNames: readonly (keyof OmicsRunGroupAttribs)[] =
    ["CreationTime", "Id", "Arn"];
  constructor(
    logicalId: string,
    properties: OmicsRunGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      OmicsRunGroup.Type,
      OmicsRunGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Omics::SequenceStore
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-sequencestore.html | AWS::Omics::SequenceStore}
 */
export interface OmicsSequenceStoreProps {
  Description?: string;
  FallbackLocation?: string;
  SseConfig?: OmicsSequenceStoreSseConfig;
  Tags?: Record<string, Tag>;
  Name: string;
}
/**
 * Attributes type definition for AWS::Omics::SequenceStore
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-sequencestore.html | AWS::Omics::SequenceStore}
 */
export interface OmicsSequenceStoreAttribs {
  SequenceStoreId?: string;
  CreationTime?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::Omics::SequenceStore
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-sequencestore.html | AWS::Omics::SequenceStore}
 */
export class OmicsSequenceStore extends ResourceBase<
  "AWS::Omics::SequenceStore",
  OmicsSequenceStoreProps,
  OmicsSequenceStoreAttribs
> {
  public static readonly Type = "AWS::Omics::SequenceStore";
  public static readonly AttributeNames: readonly (keyof OmicsSequenceStoreAttribs)[] =
    ["SequenceStoreId", "CreationTime", "Arn"];
  constructor(
    logicalId: string,
    properties: OmicsSequenceStoreProps,
    options?: ResourceOptions,
  ) {
    super(
      OmicsSequenceStore.Type,
      OmicsSequenceStore.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Omics::VariantStore
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-variantstore.html | AWS::Omics::VariantStore}
 */
export interface OmicsVariantStoreProps {
  Description?: string;
  Reference: OmicsVariantStoreReferenceItem;
  SseConfig?: OmicsVariantStoreSseConfig;
  Tags?: Record<string, Tag>;
  Name: string;
}
/**
 * Attributes type definition for AWS::Omics::VariantStore
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-variantstore.html | AWS::Omics::VariantStore}
 */
export interface OmicsVariantStoreAttribs {
  Status?: string;
  CreationTime?: string;
  UpdateTime?: string;
  Id?: string;
  StoreSizeBytes?: number;
  StatusMessage?: string;
  StoreArn?: string;
}
/**
 * Resource class for AWS::Omics::VariantStore
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-variantstore.html | AWS::Omics::VariantStore}
 */
export class OmicsVariantStore extends ResourceBase<
  "AWS::Omics::VariantStore",
  OmicsVariantStoreProps,
  OmicsVariantStoreAttribs
> {
  public static readonly Type = "AWS::Omics::VariantStore";
  public static readonly AttributeNames: readonly (keyof OmicsVariantStoreAttribs)[] =
    [
      "Status",
      "CreationTime",
      "UpdateTime",
      "Id",
      "StoreSizeBytes",
      "StatusMessage",
      "StoreArn",
    ];
  constructor(
    logicalId: string,
    properties: OmicsVariantStoreProps,
    options?: ResourceOptions,
  ) {
    super(
      OmicsVariantStore.Type,
      OmicsVariantStore.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Omics::Workflow
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflow.html | AWS::Omics::Workflow}
 */
export interface OmicsWorkflowProps {
  ParameterTemplate?: Record<string, any>;
  Description?: string;
  StorageCapacity?: number;
  Accelerators?: string;
  DefinitionUri?: string;
  Main?: string;
  Engine?: string;
  Tags?: Record<string, Tag>;
  Name?: string;
}
/**
 * Attributes type definition for AWS::Omics::Workflow
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflow.html | AWS::Omics::Workflow}
 */
export interface OmicsWorkflowAttribs {
  Status?: string;
  Type?: string;
  CreationTime?: string;
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::Omics::Workflow
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflow.html | AWS::Omics::Workflow}
 */
export class OmicsWorkflow extends ResourceBase<
  "AWS::Omics::Workflow",
  OmicsWorkflowProps,
  OmicsWorkflowAttribs
> {
  public static readonly Type = "AWS::Omics::Workflow";
  public static readonly AttributeNames: readonly (keyof OmicsWorkflowAttribs)[] =
    ["Status", "Type", "CreationTime", "Id", "Arn"];
  constructor(
    logicalId: string,
    properties: OmicsWorkflowProps,
    options?: ResourceOptions,
  ) {
    super(
      OmicsWorkflow.Type,
      OmicsWorkflow.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
