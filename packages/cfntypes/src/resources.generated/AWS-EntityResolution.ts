import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::EntityResolution::MatchingWorkflow.InputSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-inputsource.html | AWS::EntityResolution::MatchingWorkflow.InputSource}
 */
export interface EntityResolutionMatchingWorkflowInputSource {
  ApplyNormalization?: boolean;
  InputSourceARN: string;
  SchemaArn: string;
}
/**
 * Type definition for AWS::EntityResolution::MatchingWorkflow.OutputAttribute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-outputattribute.html | AWS::EntityResolution::MatchingWorkflow.OutputAttribute}
 */
export interface EntityResolutionMatchingWorkflowOutputAttribute {
  Hashed?: boolean;
  Name: string;
}
/**
 * Type definition for AWS::EntityResolution::MatchingWorkflow.OutputSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-outputsource.html | AWS::EntityResolution::MatchingWorkflow.OutputSource}
 */
export interface EntityResolutionMatchingWorkflowOutputSource {
  KMSArn?: string;
  OutputS3Path: string;
  Output: any[];
  ApplyNormalization?: boolean;
}
/**
 * Type definition for AWS::EntityResolution::MatchingWorkflow.ResolutionTechniques
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-resolutiontechniques.html | AWS::EntityResolution::MatchingWorkflow.ResolutionTechniques}
 */
export interface EntityResolutionMatchingWorkflowResolutionTechniques {
  RuleBasedProperties?: EntityResolutionMatchingWorkflowRuleBasedProperties;
  ResolutionType?: string;
}
/**
 * Type definition for AWS::EntityResolution::MatchingWorkflow.Rule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-rule.html | AWS::EntityResolution::MatchingWorkflow.Rule}
 */
export interface EntityResolutionMatchingWorkflowRule {
  MatchingKeys: any[];
  RuleName: string;
}
/**
 * Type definition for AWS::EntityResolution::MatchingWorkflow.RuleBasedProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-rulebasedproperties.html | AWS::EntityResolution::MatchingWorkflow.RuleBasedProperties}
 */
export interface EntityResolutionMatchingWorkflowRuleBasedProperties {
  AttributeMatchingModel: string;
  Rules: any[];
}
/**
 * Type definition for AWS::EntityResolution::SchemaMapping.SchemaInputAttribute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-schemamapping-schemainputattribute.html | AWS::EntityResolution::SchemaMapping.SchemaInputAttribute}
 */
export interface EntityResolutionSchemaMappingSchemaInputAttribute {
  GroupName?: string;
  Type: string;
  MatchKey?: string;
  FieldName: string;
}
/**
 * Type definition for AWS::EntityResolution::MatchingWorkflow
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html | AWS::EntityResolution::MatchingWorkflow}
 */
export interface EntityResolutionMatchingWorkflowProps {
  ResolutionTechniques: EntityResolutionMatchingWorkflowResolutionTechniques;
  Description?: string;
  InputSourceConfig: any[];
  WorkflowName: string;
  OutputSourceConfig: any[];
  RoleArn: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EntityResolution::MatchingWorkflow
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html | AWS::EntityResolution::MatchingWorkflow}
 */
export interface EntityResolutionMatchingWorkflowAttribs {
  CreatedAt?: string;
  WorkflowArn?: string;
  UpdatedAt?: string;
}
/**
 * Resource class for AWS::EntityResolution::MatchingWorkflow
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html | AWS::EntityResolution::MatchingWorkflow}
 */
export class EntityResolutionMatchingWorkflow extends ResourceBase<
  "AWS::EntityResolution::MatchingWorkflow",
  EntityResolutionMatchingWorkflowProps,
  EntityResolutionMatchingWorkflowAttribs
> {
  public static readonly Type = "AWS::EntityResolution::MatchingWorkflow";
  public static readonly AttributeNames: readonly (keyof EntityResolutionMatchingWorkflowAttribs)[] =
    ["CreatedAt", "WorkflowArn", "UpdatedAt"];
  constructor(
    logicalId: string,
    properties: EntityResolutionMatchingWorkflowProps,
    options?: ResourceOptions,
  ) {
    super(
      EntityResolutionMatchingWorkflow.Type,
      EntityResolutionMatchingWorkflow.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EntityResolution::SchemaMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-schemamapping.html | AWS::EntityResolution::SchemaMapping}
 */
export interface EntityResolutionSchemaMappingProps {
  Description?: string;
  MappedInputFields: any[];
  SchemaName: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EntityResolution::SchemaMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-schemamapping.html | AWS::EntityResolution::SchemaMapping}
 */
export interface EntityResolutionSchemaMappingAttribs {
  CreatedAt?: string;
  UpdatedAt?: string;
  SchemaArn?: string;
}
/**
 * Resource class for AWS::EntityResolution::SchemaMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-schemamapping.html | AWS::EntityResolution::SchemaMapping}
 */
export class EntityResolutionSchemaMapping extends ResourceBase<
  "AWS::EntityResolution::SchemaMapping",
  EntityResolutionSchemaMappingProps,
  EntityResolutionSchemaMappingAttribs
> {
  public static readonly Type = "AWS::EntityResolution::SchemaMapping";
  public static readonly AttributeNames: readonly (keyof EntityResolutionSchemaMappingAttribs)[] =
    ["CreatedAt", "UpdatedAt", "SchemaArn"];
  constructor(
    logicalId: string,
    properties: EntityResolutionSchemaMappingProps,
    options?: ResourceOptions,
  ) {
    super(
      EntityResolutionSchemaMapping.Type,
      EntityResolutionSchemaMapping.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}