import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::DataBrew::Dataset.CsvOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-csvoptions.html | AWS::DataBrew::Dataset.CsvOptions}
 */
export interface DataBrewDatasetCsvOptions {
  Delimiter?: string;
  HeaderRow?: boolean;
}
/**
 * Type definition for AWS::DataBrew::Dataset.DataCatalogInputDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-datacataloginputdefinition.html | AWS::DataBrew::Dataset.DataCatalogInputDefinition}
 */
export interface DataBrewDatasetDataCatalogInputDefinition {
  TableName?: string;
  TempDirectory?: DataBrewDatasetS3Location;
  DatabaseName?: string;
  CatalogId?: string;
}
/**
 * Type definition for AWS::DataBrew::Dataset.DatabaseInputDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-databaseinputdefinition.html | AWS::DataBrew::Dataset.DatabaseInputDefinition}
 */
export interface DataBrewDatasetDatabaseInputDefinition {
  TempDirectory?: DataBrewDatasetS3Location;
  QueryString?: string;
  GlueConnectionName: string;
  DatabaseTableName?: string;
}
/**
 * Type definition for AWS::DataBrew::Dataset.DatasetParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-datasetparameter.html | AWS::DataBrew::Dataset.DatasetParameter}
 */
export interface DataBrewDatasetDatasetParameter {
  Type: string;
  DatetimeOptions?: DataBrewDatasetDatetimeOptions;
  Filter?: DataBrewDatasetFilterExpression;
  CreateColumn?: boolean;
  Name: string;
}
/**
 * Type definition for AWS::DataBrew::Dataset.DatetimeOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-datetimeoptions.html | AWS::DataBrew::Dataset.DatetimeOptions}
 */
export interface DataBrewDatasetDatetimeOptions {
  LocaleCode?: string;
  Format: string;
  TimezoneOffset?: string;
}
/**
 * Type definition for AWS::DataBrew::Dataset.ExcelOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-exceloptions.html | AWS::DataBrew::Dataset.ExcelOptions}
 */
export interface DataBrewDatasetExcelOptions {
  HeaderRow?: boolean;
  SheetNames?: any[];
  SheetIndexes?: any[];
}
/**
 * Type definition for AWS::DataBrew::Dataset.FilesLimit
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-fileslimit.html | AWS::DataBrew::Dataset.FilesLimit}
 */
export interface DataBrewDatasetFilesLimit {
  Order?: string;
  OrderedBy?: string;
  MaxFiles: number;
}
/**
 * Type definition for AWS::DataBrew::Dataset.FilterExpression
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-filterexpression.html | AWS::DataBrew::Dataset.FilterExpression}
 */
export interface DataBrewDatasetFilterExpression {
  Expression: string;
  ValuesMap: any[];
}
/**
 * Type definition for AWS::DataBrew::Dataset.FilterValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-filtervalue.html | AWS::DataBrew::Dataset.FilterValue}
 */
export interface DataBrewDatasetFilterValue {
  Value: string;
  ValueReference: string;
}
/**
 * Type definition for AWS::DataBrew::Dataset.FormatOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-formatoptions.html | AWS::DataBrew::Dataset.FormatOptions}
 */
export interface DataBrewDatasetFormatOptions {
  Excel?: DataBrewDatasetExcelOptions;
  Csv?: DataBrewDatasetCsvOptions;
  Json?: DataBrewDatasetJsonOptions;
}
/**
 * Type definition for AWS::DataBrew::Dataset.Input
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-input.html | AWS::DataBrew::Dataset.Input}
 */
export interface DataBrewDatasetInput {
  DatabaseInputDefinition?: DataBrewDatasetDatabaseInputDefinition;
  S3InputDefinition?: DataBrewDatasetS3Location;
  Metadata?: DataBrewDatasetMetadata;
  DataCatalogInputDefinition?: DataBrewDatasetDataCatalogInputDefinition;
}
/**
 * Type definition for AWS::DataBrew::Dataset.JsonOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-jsonoptions.html | AWS::DataBrew::Dataset.JsonOptions}
 */
export interface DataBrewDatasetJsonOptions {
  MultiLine?: boolean;
}
/**
 * Type definition for AWS::DataBrew::Dataset.Metadata
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-metadata.html | AWS::DataBrew::Dataset.Metadata}
 */
export interface DataBrewDatasetMetadata {
  SourceArn?: string;
}
/**
 * Type definition for AWS::DataBrew::Dataset.PathOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-pathoptions.html | AWS::DataBrew::Dataset.PathOptions}
 */
export interface DataBrewDatasetPathOptions {
  Parameters?: any[];
  LastModifiedDateCondition?: DataBrewDatasetFilterExpression;
  FilesLimit?: DataBrewDatasetFilesLimit;
}
/**
 * Type definition for AWS::DataBrew::Dataset.PathParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-pathparameter.html | AWS::DataBrew::Dataset.PathParameter}
 */
export interface DataBrewDatasetPathParameter {
  PathParameterName: string;
  DatasetParameter: DataBrewDatasetDatasetParameter;
}
/**
 * Type definition for AWS::DataBrew::Dataset.S3Location
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-s3location.html | AWS::DataBrew::Dataset.S3Location}
 */
export interface DataBrewDatasetS3Location {
  Bucket: string;
  Key?: string;
}
/**
 * Type definition for AWS::DataBrew::Job.AllowedStatistics
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-allowedstatistics.html | AWS::DataBrew::Job.AllowedStatistics}
 */
export interface DataBrewJobAllowedStatistics {
  Statistics: any[];
}
/**
 * Type definition for AWS::DataBrew::Job.ColumnSelector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-columnselector.html | AWS::DataBrew::Job.ColumnSelector}
 */
export interface DataBrewJobColumnSelector {
  Regex?: string;
  Name?: string;
}
/**
 * Type definition for AWS::DataBrew::Job.ColumnStatisticsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-columnstatisticsconfiguration.html | AWS::DataBrew::Job.ColumnStatisticsConfiguration}
 */
export interface DataBrewJobColumnStatisticsConfiguration {
  Statistics: DataBrewJobStatisticsConfiguration;
  Selectors?: any[];
}
/**
 * Type definition for AWS::DataBrew::Job.CsvOutputOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-csvoutputoptions.html | AWS::DataBrew::Job.CsvOutputOptions}
 */
export interface DataBrewJobCsvOutputOptions {
  Delimiter?: string;
}
/**
 * Type definition for AWS::DataBrew::Job.DataCatalogOutput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-datacatalogoutput.html | AWS::DataBrew::Job.DataCatalogOutput}
 */
export interface DataBrewJobDataCatalogOutput {
  TableName: string;
  Overwrite?: boolean;
  S3Options?: DataBrewJobS3TableOutputOptions;
  DatabaseOptions?: DataBrewJobDatabaseTableOutputOptions;
  DatabaseName: string;
  CatalogId?: string;
}
/**
 * Type definition for AWS::DataBrew::Job.DatabaseOutput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-databaseoutput.html | AWS::DataBrew::Job.DatabaseOutput}
 */
export interface DataBrewJobDatabaseOutput {
  DatabaseOutputMode?: string;
  DatabaseOptions: DataBrewJobDatabaseTableOutputOptions;
  GlueConnectionName: string;
}
/**
 * Type definition for AWS::DataBrew::Job.DatabaseTableOutputOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-databasetableoutputoptions.html | AWS::DataBrew::Job.DatabaseTableOutputOptions}
 */
export interface DataBrewJobDatabaseTableOutputOptions {
  TempDirectory?: DataBrewJobS3Location;
  TableName: string;
}
/**
 * Type definition for AWS::DataBrew::Job.EntityDetectorConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-entitydetectorconfiguration.html | AWS::DataBrew::Job.EntityDetectorConfiguration}
 */
export interface DataBrewJobEntityDetectorConfiguration {
  EntityTypes: any[];
  AllowedStatistics?: DataBrewJobAllowedStatistics;
}
/**
 * Type definition for AWS::DataBrew::Job.JobSample
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-jobsample.html | AWS::DataBrew::Job.JobSample}
 */
export interface DataBrewJobJobSample {
  Size?: number;
  Mode?: string;
}
/**
 * Type definition for AWS::DataBrew::Job.Output
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-output.html | AWS::DataBrew::Job.Output}
 */
export interface DataBrewJobOutput {
  Overwrite?: boolean;
  Format?: string;
  MaxOutputFiles?: number;
  CompressionFormat?: string;
  PartitionColumns?: any[];
  FormatOptions?: DataBrewJobOutputFormatOptions;
  Location: DataBrewJobS3Location;
}
/**
 * Type definition for AWS::DataBrew::Job.OutputFormatOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-outputformatoptions.html | AWS::DataBrew::Job.OutputFormatOptions}
 */
export interface DataBrewJobOutputFormatOptions {
  Csv?: DataBrewJobCsvOutputOptions;
}
/**
 * Type definition for AWS::DataBrew::Job.OutputLocation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-outputlocation.html | AWS::DataBrew::Job.OutputLocation}
 */
export interface DataBrewJobOutputLocation {
  Bucket: string;
  BucketOwner?: string;
  Key?: string;
}
/**
 * Type definition for AWS::DataBrew::Job.ProfileConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-profileconfiguration.html | AWS::DataBrew::Job.ProfileConfiguration}
 */
export interface DataBrewJobProfileConfiguration {
  ProfileColumns?: any[];
  DatasetStatisticsConfiguration?: DataBrewJobStatisticsConfiguration;
  ColumnStatisticsConfigurations?: any[];
  EntityDetectorConfiguration?: DataBrewJobEntityDetectorConfiguration;
}
/**
 * Type definition for AWS::DataBrew::Job.Recipe
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-recipe.html | AWS::DataBrew::Job.Recipe}
 */
export interface DataBrewJobRecipe {
  Version?: string;
  Name: string;
}
/**
 * Type definition for AWS::DataBrew::Job.S3Location
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-s3location.html | AWS::DataBrew::Job.S3Location}
 */
export interface DataBrewJobS3Location {
  Bucket: string;
  BucketOwner?: string;
  Key?: string;
}
/**
 * Type definition for AWS::DataBrew::Job.S3TableOutputOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-s3tableoutputoptions.html | AWS::DataBrew::Job.S3TableOutputOptions}
 */
export interface DataBrewJobS3TableOutputOptions {
  Location: DataBrewJobS3Location;
}
/**
 * Type definition for AWS::DataBrew::Job.StatisticOverride
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-statisticoverride.html | AWS::DataBrew::Job.StatisticOverride}
 */
export interface DataBrewJobStatisticOverride {
  Parameters: Record<string, any>;
  Statistic: string;
}
/**
 * Type definition for AWS::DataBrew::Job.StatisticsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-statisticsconfiguration.html | AWS::DataBrew::Job.StatisticsConfiguration}
 */
export interface DataBrewJobStatisticsConfiguration {
  IncludedStatistics?: any[];
  Overrides?: any[];
}
/**
 * Type definition for AWS::DataBrew::Job.ValidationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-job-validationconfiguration.html | AWS::DataBrew::Job.ValidationConfiguration}
 */
export interface DataBrewJobValidationConfiguration {
  RulesetArn: string;
  ValidationMode?: string;
}
/**
 * Type definition for AWS::DataBrew::Project.Sample
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-project-sample.html | AWS::DataBrew::Project.Sample}
 */
export interface DataBrewProjectSample {
  Type: string;
  Size?: number;
}
/**
 * Type definition for AWS::DataBrew::Recipe.Action
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-action.html | AWS::DataBrew::Recipe.Action}
 */
export interface DataBrewRecipeAction {
  Parameters?: DataBrewRecipeRecipeParameters;
  Operation: string;
}
/**
 * Type definition for AWS::DataBrew::Recipe.ConditionExpression
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-conditionexpression.html | AWS::DataBrew::Recipe.ConditionExpression}
 */
export interface DataBrewRecipeConditionExpression {
  Condition: string;
  Value?: string;
  TargetColumn: string;
}
/**
 * Type definition for AWS::DataBrew::Recipe.DataCatalogInputDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-datacataloginputdefinition.html | AWS::DataBrew::Recipe.DataCatalogInputDefinition}
 */
export interface DataBrewRecipeDataCatalogInputDefinition {
  TableName?: string;
  TempDirectory?: DataBrewRecipeS3Location;
  DatabaseName?: string;
  CatalogId?: string;
}
/**
 * Type definition for AWS::DataBrew::Recipe.Input
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-input.html | AWS::DataBrew::Recipe.Input}
 */
export interface DataBrewRecipeInput {
  S3InputDefinition?: DataBrewRecipeS3Location;
  DataCatalogInputDefinition?: DataBrewRecipeDataCatalogInputDefinition;
}
/**
 * Type definition for AWS::DataBrew::Recipe.RecipeParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html | AWS::DataBrew::Recipe.RecipeParameters}
 */
export interface DataBrewRecipeRecipeParameters {
  IgnoreCase?: string;
  PatternOptions?: string;
  Count?: string;
  OrderByColumn?: string;
  UpperBound?: string;
  JoinKeys?: string;
  RemoveLeadingAndTrailingPunctuation?: string;
  StepIndex?: string;
  GroupByAggFunctionOptions?: string;
  Position?: string;
  StopWordsMode?: string;
  SourceColumn?: string;
  CustomCharacters?: string;
  TimeZone?: string;
  RemoveLeadingAndTrailingQuotes?: string;
  SourceColumn2?: string;
  CollapseConsecutiveWhitespace?: string;
  NumRowsAfter?: string;
  RemoveLetters?: string;
  SourceColumn1?: string;
  UseNewDataFrame?: string;
  Interval?: string;
  LowerBound?: string;
  TokenizerPattern?: string;
  LeftColumns?: string;
  CharsToRemove?: string;
  Value1?: string;
  DeleteOtherRows?: string;
  Value2?: string;
  CategoryMap?: string;
  StartPattern?: string;
  StartPosition?: string;
  SheetIndexes?: any[];
  TargetIndex?: string;
  RemoveSourceColumn?: string;
  DateTimeParameters?: string;
  EndValue?: string;
  RemoveCustomCharacters?: string;
  EndPosition?: string;
  Pattern?: string;
  Delimiter?: string;
  RemoveSpecialCharacters?: string;
  RemoveAllQuotes?: string;
  EndPattern?: string;
  StartColumnIndex?: string;
  ModeType?: string;
  SecondaryInputs?: any[];
  SampleType?: string;
  DateTimeFormat?: string;
  Other?: string;
  CaseStatement?: string;
  FalseString?: string;
  RemoveAllPunctuation?: string;
  CustomStopWords?: string;
  MapType?: string;
  ColumnRange?: string;
  CustomValue?: string;
  Input?: DataBrewRecipeInput;
  StepCount?: string;
  TargetDateFormat?: string;
  SecondInput?: string;
  GroupByColumns?: string;
  NumRowsBefore?: string;
  IsText?: string;
  TargetColumn?: string;
  RemoveNumbers?: string;
  Period?: string;
  NumRows?: string;
  RightColumns?: string;
  StemmingMode?: string;
  Units?: string;
  SampleSize?: string;
  IncludeInSplit?: string;
  AggregateFunction?: string;
  Value?: string;
  Exponent?: string;
  StartValue?: string;
  PatternOption2?: string;
  RemoveCustomValue?: string;
  PatternOption1?: string;
  MultiLine?: boolean;
  TrueString?: string;
  RemoveLeadingAndTrailingWhitespace?: string;
  HiddenColumns?: string;
  RemoveAllWhitespace?: string;
  ViewFrame?: string;
  ColumnDataType?: string;
  JoinType?: string;
  Base?: string;
  ValueColumn?: string;
  DatasetsColumns?: string;
  UdfLang?: string;
  TargetColumnNames?: string;
  DateAddValue?: string;
  ExpandContractions?: string;
  UnpivotColumn?: string;
  Strategy?: string;
  SheetNames?: any[];
  Limit?: string;
  OrderByColumns?: string;
  SourceColumns?: string;
}
/**
 * Type definition for AWS::DataBrew::Recipe.RecipeStep
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipestep.html | AWS::DataBrew::Recipe.RecipeStep}
 */
export interface DataBrewRecipeRecipeStep {
  Action: DataBrewRecipeAction;
  ConditionExpressions?: any[];
}
/**
 * Type definition for AWS::DataBrew::Recipe.S3Location
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-s3location.html | AWS::DataBrew::Recipe.S3Location}
 */
export interface DataBrewRecipeS3Location {
  Bucket: string;
  Key?: string;
}
/**
 * Type definition for AWS::DataBrew::Recipe.SecondaryInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-secondaryinput.html | AWS::DataBrew::Recipe.SecondaryInput}
 */
export interface DataBrewRecipeSecondaryInput {
  S3InputDefinition?: DataBrewRecipeS3Location;
  DataCatalogInputDefinition?: DataBrewRecipeDataCatalogInputDefinition;
}
/**
 * Type definition for AWS::DataBrew::Ruleset.ColumnSelector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-ruleset-columnselector.html | AWS::DataBrew::Ruleset.ColumnSelector}
 */
export interface DataBrewRulesetColumnSelector {
  Regex?: string;
  Name?: string;
}
/**
 * Type definition for AWS::DataBrew::Ruleset.Rule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-ruleset-rule.html | AWS::DataBrew::Ruleset.Rule}
 */
export interface DataBrewRulesetRule {
  ColumnSelectors?: any[];
  Disabled?: boolean;
  SubstitutionMap?: any[];
  Name: string;
  CheckExpression: string;
  Threshold?: DataBrewRulesetThreshold;
}
/**
 * Type definition for AWS::DataBrew::Ruleset.SubstitutionValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-ruleset-substitutionvalue.html | AWS::DataBrew::Ruleset.SubstitutionValue}
 */
export interface DataBrewRulesetSubstitutionValue {
  Value: string;
  ValueReference: string;
}
/**
 * Type definition for AWS::DataBrew::Ruleset.Threshold
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-ruleset-threshold.html | AWS::DataBrew::Ruleset.Threshold}
 */
export interface DataBrewRulesetThreshold {
  Type?: string;
  Value: number;
  Unit?: string;
}
/**
 * Type definition for AWS::DataBrew::Dataset
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html | AWS::DataBrew::Dataset}
 */
export interface DataBrewDatasetProps {
  Input: DataBrewDatasetInput;
  Format?: string;
  FormatOptions?: DataBrewDatasetFormatOptions;
  PathOptions?: DataBrewDatasetPathOptions;
  Tags?: Tag[];
  Name: string;
}
/**
 * Resource class for AWS::DataBrew::Dataset
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html | AWS::DataBrew::Dataset}
 */
export class DataBrewDataset extends ResourceBase<
  "AWS::DataBrew::Dataset",
  DataBrewDatasetProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::DataBrew::Dataset";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: DataBrewDatasetProps,
    options?: ResourceOptions,
  ) {
    super(
      DataBrewDataset.Type,
      DataBrewDataset.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::DataBrew::Job
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html | AWS::DataBrew::Job}
 */
export interface DataBrewJobProps {
  MaxRetries?: number;
  ProjectName?: string;
  Recipe?: DataBrewJobRecipe;
  EncryptionKeyArn?: string;
  LogSubscription?: string;
  Timeout?: number;
  DatabaseOutputs?: any[];
  OutputLocation?: DataBrewJobOutputLocation;
  RoleArn: string;
  Name: string;
  Type: string;
  DatasetName?: string;
  ProfileConfiguration?: DataBrewJobProfileConfiguration;
  Outputs?: any[];
  ValidationConfigurations?: any[];
  Tags?: Tag[];
  JobSample?: DataBrewJobJobSample;
  EncryptionMode?: string;
  MaxCapacity?: number;
  DataCatalogOutputs?: any[];
}
/**
 * Resource class for AWS::DataBrew::Job
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html | AWS::DataBrew::Job}
 */
export class DataBrewJob extends ResourceBase<
  "AWS::DataBrew::Job",
  DataBrewJobProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::DataBrew::Job";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: DataBrewJobProps,
    options?: ResourceOptions,
  ) {
    super(
      DataBrewJob.Type,
      DataBrewJob.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::DataBrew::Project
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-project.html | AWS::DataBrew::Project}
 */
export interface DataBrewProjectProps {
  RecipeName: string;
  DatasetName: string;
  Sample?: DataBrewProjectSample;
  RoleArn: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Resource class for AWS::DataBrew::Project
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-project.html | AWS::DataBrew::Project}
 */
export class DataBrewProject extends ResourceBase<
  "AWS::DataBrew::Project",
  DataBrewProjectProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::DataBrew::Project";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: DataBrewProjectProps,
    options?: ResourceOptions,
  ) {
    super(
      DataBrewProject.Type,
      DataBrewProject.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::DataBrew::Recipe
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-recipe.html | AWS::DataBrew::Recipe}
 */
export interface DataBrewRecipeProps {
  Steps: any[];
  Description?: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Resource class for AWS::DataBrew::Recipe
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-recipe.html | AWS::DataBrew::Recipe}
 */
export class DataBrewRecipe extends ResourceBase<
  "AWS::DataBrew::Recipe",
  DataBrewRecipeProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::DataBrew::Recipe";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: DataBrewRecipeProps,
    options?: ResourceOptions,
  ) {
    super(
      DataBrewRecipe.Type,
      DataBrewRecipe.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::DataBrew::Ruleset
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-ruleset.html | AWS::DataBrew::Ruleset}
 */
export interface DataBrewRulesetProps {
  Description?: string;
  TargetArn: string;
  Rules: any[];
  Tags?: Tag[];
  Name: string;
}
/**
 * Resource class for AWS::DataBrew::Ruleset
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-ruleset.html | AWS::DataBrew::Ruleset}
 */
export class DataBrewRuleset extends ResourceBase<
  "AWS::DataBrew::Ruleset",
  DataBrewRulesetProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::DataBrew::Ruleset";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: DataBrewRulesetProps,
    options?: ResourceOptions,
  ) {
    super(
      DataBrewRuleset.Type,
      DataBrewRuleset.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::DataBrew::Schedule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-schedule.html | AWS::DataBrew::Schedule}
 */
export interface DataBrewScheduleProps {
  JobNames?: any[];
  CronExpression: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Resource class for AWS::DataBrew::Schedule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-schedule.html | AWS::DataBrew::Schedule}
 */
export class DataBrewSchedule extends ResourceBase<
  "AWS::DataBrew::Schedule",
  DataBrewScheduleProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::DataBrew::Schedule";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: DataBrewScheduleProps,
    options?: ResourceOptions,
  ) {
    super(
      DataBrewSchedule.Type,
      DataBrewSchedule.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
