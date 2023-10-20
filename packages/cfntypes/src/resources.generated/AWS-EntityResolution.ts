import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::EntityResolution::IdMappingWorkflow.IdMappingTechniques
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idmappingworkflow-idmappingtechniques.html | AWS::EntityResolution::IdMappingWorkflow.IdMappingTechniques}
 */
export interface EntityResolutionIdMappingWorkflowIdMappingTechniques {
  ProviderProperties?: EntityResolutionIdMappingWorkflowProviderProperties;
  IdMappingType?: string;
}
/**
 * Type definition for AWS::EntityResolution::IdMappingWorkflow.IdMappingWorkflowInputSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idmappingworkflow-idmappingworkflowinputsource.html | AWS::EntityResolution::IdMappingWorkflow.IdMappingWorkflowInputSource}
 */
export interface EntityResolutionIdMappingWorkflowIdMappingWorkflowInputSource {
  InputSourceARN: string;
  SchemaArn: string;
}
/**
 * Type definition for AWS::EntityResolution::IdMappingWorkflow.IdMappingWorkflowOutputSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idmappingworkflow-idmappingworkflowoutputsource.html | AWS::EntityResolution::IdMappingWorkflow.IdMappingWorkflowOutputSource}
 */
export interface EntityResolutionIdMappingWorkflowIdMappingWorkflowOutputSource {
  KMSArn?: string;
  OutputS3Path: string;
}
/**
 * Type definition for AWS::EntityResolution::IdMappingWorkflow.IntermediateSourceConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idmappingworkflow-intermediatesourceconfiguration.html | AWS::EntityResolution::IdMappingWorkflow.IntermediateSourceConfiguration}
 */
export interface EntityResolutionIdMappingWorkflowIntermediateSourceConfiguration {
  IntermediateS3Path: string;
}
/**
 * Type definition for AWS::EntityResolution::IdMappingWorkflow.ProviderProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idmappingworkflow-providerproperties.html | AWS::EntityResolution::IdMappingWorkflow.ProviderProperties}
 */
export interface EntityResolutionIdMappingWorkflowProviderProperties {
  IntermediateSourceConfiguration?: EntityResolutionIdMappingWorkflowIntermediateSourceConfiguration;
  ProviderServiceArn: string;
  ProviderConfiguration?: Record<string, any>;
}
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
 * Type definition for AWS::EntityResolution::MatchingWorkflow.IntermediateSourceConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-intermediatesourceconfiguration.html | AWS::EntityResolution::MatchingWorkflow.IntermediateSourceConfiguration}
 */
export interface EntityResolutionMatchingWorkflowIntermediateSourceConfiguration {
  IntermediateS3Path: string;
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
 * Type definition for AWS::EntityResolution::MatchingWorkflow.ProviderProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-providerproperties.html | AWS::EntityResolution::MatchingWorkflow.ProviderProperties}
 */
export interface EntityResolutionMatchingWorkflowProviderProperties {
  IntermediateSourceConfiguration?: EntityResolutionMatchingWorkflowIntermediateSourceConfiguration;
  ProviderServiceArn: string;
  ProviderConfiguration?: Record<string, any>;
}
/**
 * Type definition for AWS::EntityResolution::MatchingWorkflow.ResolutionTechniques
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-resolutiontechniques.html | AWS::EntityResolution::MatchingWorkflow.ResolutionTechniques}
 */
export interface EntityResolutionMatchingWorkflowResolutionTechniques {
  RuleBasedProperties?: EntityResolutionMatchingWorkflowRuleBasedProperties;
  ProviderProperties?: EntityResolutionMatchingWorkflowProviderProperties;
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
  SubType?: string;
  MatchKey?: string;
  FieldName: string;
}
/**
 * Type definition for AWS::EntityResolution::IdMappingWorkflow
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html | AWS::EntityResolution::IdMappingWorkflow}
 */
export interface EntityResolutionIdMappingWorkflowProps {
  Description?: string;
  InputSourceConfig: any[];
  IdMappingTechniques: EntityResolutionIdMappingWorkflowIdMappingTechniques;
  WorkflowName: string;
  OutputSourceConfig: any[];
  RoleArn: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EntityResolution::IdMappingWorkflow
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html | AWS::EntityResolution::IdMappingWorkflow}
 */
export interface EntityResolutionIdMappingWorkflowAttribs {
  CreatedAt?: string;
  WorkflowArn?: string;
  UpdatedAt?: string;
}
/**
 * Resource class for AWS::EntityResolution::IdMappingWorkflow
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html | AWS::EntityResolution::IdMappingWorkflow}
 */
export class EntityResolutionIdMappingWorkflow extends ResourceBase<
  "AWS::EntityResolution::IdMappingWorkflow",
  EntityResolutionIdMappingWorkflowProps,
  EntityResolutionIdMappingWorkflowAttribs
> {
  public static readonly Type = "AWS::EntityResolution::IdMappingWorkflow";
  public static readonly AttributeNames: readonly (keyof EntityResolutionIdMappingWorkflowAttribs)[] =
    ["CreatedAt", "WorkflowArn", "UpdatedAt"];
  constructor(
    logicalId: string,
    properties: EntityResolutionIdMappingWorkflowProps,
    options?: ResourceOptions,
  ) {
    super(
      EntityResolutionIdMappingWorkflow.Type,
      EntityResolutionIdMappingWorkflow.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
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
