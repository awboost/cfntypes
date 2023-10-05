import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::Personalize::Dataset.DataSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-dataset-datasource.html | AWS::Personalize::Dataset.DataSource}
 */
export interface PersonalizeDatasetDataSource {
  DataLocation?: string;
}
/**
 * Type definition for AWS::Personalize::Dataset.DatasetImportJob
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-dataset-datasetimportjob.html | AWS::Personalize::Dataset.DatasetImportJob}
 */
export interface PersonalizeDatasetDatasetImportJob {
  DatasetArn?: string;
  JobName?: string;
  DatasetImportJobArn?: string;
  RoleArn?: string;
  DataSource?: PersonalizeDatasetDataSource;
}
/**
 * Type definition for AWS::Personalize::Solution.AlgorithmHyperParameterRanges
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-algorithmhyperparameterranges.html | AWS::Personalize::Solution.AlgorithmHyperParameterRanges}
 */
export interface PersonalizeSolutionAlgorithmHyperParameterRanges {
  IntegerHyperParameterRanges?: any[];
  CategoricalHyperParameterRanges?: any[];
  ContinuousHyperParameterRanges?: any[];
}
/**
 * Type definition for AWS::Personalize::Solution.AutoMLConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-automlconfig.html | AWS::Personalize::Solution.AutoMLConfig}
 */
export interface PersonalizeSolutionAutoMLConfig {
  MetricName?: string;
  RecipeList?: any[];
}
/**
 * Type definition for AWS::Personalize::Solution.CategoricalHyperParameterRange
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-categoricalhyperparameterrange.html | AWS::Personalize::Solution.CategoricalHyperParameterRange}
 */
export interface PersonalizeSolutionCategoricalHyperParameterRange {
  Values?: any[];
  Name?: string;
}
/**
 * Type definition for AWS::Personalize::Solution.ContinuousHyperParameterRange
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-continuoushyperparameterrange.html | AWS::Personalize::Solution.ContinuousHyperParameterRange}
 */
export interface PersonalizeSolutionContinuousHyperParameterRange {
  MinValue?: number;
  MaxValue?: number;
  Name?: string;
}
/**
 * Type definition for AWS::Personalize::Solution.HpoConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-hpoconfig.html | AWS::Personalize::Solution.HpoConfig}
 */
export interface PersonalizeSolutionHpoConfig {
  HpoResourceConfig?: PersonalizeSolutionHpoResourceConfig;
  AlgorithmHyperParameterRanges?: PersonalizeSolutionAlgorithmHyperParameterRanges;
  HpoObjective?: PersonalizeSolutionHpoObjective;
}
/**
 * Type definition for AWS::Personalize::Solution.HpoObjective
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-hpoobjective.html | AWS::Personalize::Solution.HpoObjective}
 */
export interface PersonalizeSolutionHpoObjective {
  MetricName?: string;
  Type?: string;
  MetricRegex?: string;
}
/**
 * Type definition for AWS::Personalize::Solution.HpoResourceConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-hporesourceconfig.html | AWS::Personalize::Solution.HpoResourceConfig}
 */
export interface PersonalizeSolutionHpoResourceConfig {
  MaxParallelTrainingJobs?: string;
  MaxNumberOfTrainingJobs?: string;
}
/**
 * Type definition for AWS::Personalize::Solution.IntegerHyperParameterRange
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-integerhyperparameterrange.html | AWS::Personalize::Solution.IntegerHyperParameterRange}
 */
export interface PersonalizeSolutionIntegerHyperParameterRange {
  MinValue?: number;
  MaxValue?: number;
  Name?: string;
}
/**
 * Type definition for AWS::Personalize::Solution.SolutionConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-solutionconfig.html | AWS::Personalize::Solution.SolutionConfig}
 */
export interface PersonalizeSolutionSolutionConfig {
  EventValueThreshold?: string;
  HpoConfig?: PersonalizeSolutionHpoConfig;
  AlgorithmHyperParameters?: Record<string, any>;
  FeatureTransformationParameters?: Record<string, any>;
  AutoMLConfig?: PersonalizeSolutionAutoMLConfig;
}
/**
 * Type definition for AWS::Personalize::Dataset
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-dataset.html | AWS::Personalize::Dataset}
 */
export interface PersonalizeDatasetProps {
  DatasetGroupArn: string;
  DatasetType: string;
  DatasetImportJob?: PersonalizeDatasetDatasetImportJob;
  SchemaArn: string;
  Name: string;
}
/**
 * Attributes type definition for AWS::Personalize::Dataset
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-dataset.html | AWS::Personalize::Dataset}
 */
export interface PersonalizeDatasetAttribs {
  DatasetArn?: string;
}
/**
 * Resource class for AWS::Personalize::Dataset
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-dataset.html | AWS::Personalize::Dataset}
 */
export class PersonalizeDataset extends ResourceBase<
  "AWS::Personalize::Dataset",
  PersonalizeDatasetProps,
  PersonalizeDatasetAttribs
> {
  public static readonly Type = "AWS::Personalize::Dataset";
  public static readonly AttributeNames: readonly (keyof PersonalizeDatasetAttribs)[] =
    ["DatasetArn"];
  constructor(
    logicalId: string,
    properties: PersonalizeDatasetProps,
    options?: ResourceOptions,
  ) {
    super(
      PersonalizeDataset.Type,
      PersonalizeDataset.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Personalize::DatasetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-datasetgroup.html | AWS::Personalize::DatasetGroup}
 */
export interface PersonalizeDatasetGroupProps {
  KmsKeyArn?: string;
  Domain?: string;
  RoleArn?: string;
  Name: string;
}
/**
 * Attributes type definition for AWS::Personalize::DatasetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-datasetgroup.html | AWS::Personalize::DatasetGroup}
 */
export interface PersonalizeDatasetGroupAttribs {
  DatasetGroupArn?: string;
}
/**
 * Resource class for AWS::Personalize::DatasetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-datasetgroup.html | AWS::Personalize::DatasetGroup}
 */
export class PersonalizeDatasetGroup extends ResourceBase<
  "AWS::Personalize::DatasetGroup",
  PersonalizeDatasetGroupProps,
  PersonalizeDatasetGroupAttribs
> {
  public static readonly Type = "AWS::Personalize::DatasetGroup";
  public static readonly AttributeNames: readonly (keyof PersonalizeDatasetGroupAttribs)[] =
    ["DatasetGroupArn"];
  constructor(
    logicalId: string,
    properties: PersonalizeDatasetGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      PersonalizeDatasetGroup.Type,
      PersonalizeDatasetGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Personalize::Schema
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-schema.html | AWS::Personalize::Schema}
 */
export interface PersonalizeSchemaProps {
  Schema: string;
  Domain?: string;
  Name: string;
}
/**
 * Attributes type definition for AWS::Personalize::Schema
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-schema.html | AWS::Personalize::Schema}
 */
export interface PersonalizeSchemaAttribs {
  SchemaArn?: string;
}
/**
 * Resource class for AWS::Personalize::Schema
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-schema.html | AWS::Personalize::Schema}
 */
export class PersonalizeSchema extends ResourceBase<
  "AWS::Personalize::Schema",
  PersonalizeSchemaProps,
  PersonalizeSchemaAttribs
> {
  public static readonly Type = "AWS::Personalize::Schema";
  public static readonly AttributeNames: readonly (keyof PersonalizeSchemaAttribs)[] =
    ["SchemaArn"];
  constructor(
    logicalId: string,
    properties: PersonalizeSchemaProps,
    options?: ResourceOptions,
  ) {
    super(
      PersonalizeSchema.Type,
      PersonalizeSchema.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Personalize::Solution
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html | AWS::Personalize::Solution}
 */
export interface PersonalizeSolutionProps {
  PerformAutoML?: boolean;
  PerformHPO?: boolean;
  EventType?: string;
  DatasetGroupArn: string;
  SolutionConfig?: PersonalizeSolutionSolutionConfig;
  RecipeArn?: string;
  Name: string;
}
/**
 * Attributes type definition for AWS::Personalize::Solution
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html | AWS::Personalize::Solution}
 */
export interface PersonalizeSolutionAttribs {
  SolutionArn?: string;
}
/**
 * Resource class for AWS::Personalize::Solution
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html | AWS::Personalize::Solution}
 */
export class PersonalizeSolution extends ResourceBase<
  "AWS::Personalize::Solution",
  PersonalizeSolutionProps,
  PersonalizeSolutionAttribs
> {
  public static readonly Type = "AWS::Personalize::Solution";
  public static readonly AttributeNames: readonly (keyof PersonalizeSolutionAttribs)[] =
    ["SolutionArn"];
  constructor(
    logicalId: string,
    properties: PersonalizeSolutionProps,
    options?: ResourceOptions,
  ) {
    super(
      PersonalizeSolution.Type,
      PersonalizeSolution.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
