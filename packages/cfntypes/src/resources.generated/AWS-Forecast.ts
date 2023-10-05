import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Forecast::Dataset.AttributesItems
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-forecast-dataset-attributesitems.html | AWS::Forecast::Dataset.AttributesItems}
 */
export interface ForecastDatasetAttributesItems {
  AttributeType?: string;
  AttributeName?: string;
}
/**
 * Type definition for AWS::Forecast::Dataset.EncryptionConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-forecast-dataset-encryptionconfig.html | AWS::Forecast::Dataset.EncryptionConfig}
 */
export interface ForecastDatasetEncryptionConfig {
  KmsKeyArn?: string;
  RoleArn?: string;
}
/**
 * Type definition for AWS::Forecast::Dataset.Schema
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-forecast-dataset-schema.html | AWS::Forecast::Dataset.Schema}
 */
export interface ForecastDatasetSchema {
  Attributes?: any[];
}
/**
 * Type definition for AWS::Forecast::Dataset.TagsItems
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-forecast-dataset-tagsitems.html | AWS::Forecast::Dataset.TagsItems}
 */
export interface ForecastDatasetTagsItems {
  Value: string;
  Key: string;
}
/**
 * Type definition for AWS::Forecast::Dataset
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-forecast-dataset.html | AWS::Forecast::Dataset}
 */
export interface ForecastDatasetProps {
  DataFrequency?: string;
  DatasetName: string;
  Schema: ForecastDatasetSchema;
  DatasetType: string;
  Domain: string;
  EncryptionConfig?: ForecastDatasetEncryptionConfig;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::Forecast::Dataset
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-forecast-dataset.html | AWS::Forecast::Dataset}
 */
export interface ForecastDatasetAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::Forecast::Dataset
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-forecast-dataset.html | AWS::Forecast::Dataset}
 */
export class ForecastDataset extends ResourceBase<
  "AWS::Forecast::Dataset",
  ForecastDatasetProps,
  ForecastDatasetAttribs
> {
  public static readonly Type = "AWS::Forecast::Dataset";
  public static readonly AttributeNames: readonly (keyof ForecastDatasetAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: ForecastDatasetProps,
    options?: ResourceOptions,
  ) {
    super(
      ForecastDataset.Type,
      ForecastDataset.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Forecast::DatasetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-forecast-datasetgroup.html | AWS::Forecast::DatasetGroup}
 */
export interface ForecastDatasetGroupProps {
  DatasetArns?: any[];
  DatasetGroupName: string;
  Domain: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::Forecast::DatasetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-forecast-datasetgroup.html | AWS::Forecast::DatasetGroup}
 */
export interface ForecastDatasetGroupAttribs {
  DatasetGroupArn?: string;
}
/**
 * Resource class for AWS::Forecast::DatasetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-forecast-datasetgroup.html | AWS::Forecast::DatasetGroup}
 */
export class ForecastDatasetGroup extends ResourceBase<
  "AWS::Forecast::DatasetGroup",
  ForecastDatasetGroupProps,
  ForecastDatasetGroupAttribs
> {
  public static readonly Type = "AWS::Forecast::DatasetGroup";
  public static readonly AttributeNames: readonly (keyof ForecastDatasetGroupAttribs)[] =
    ["DatasetGroupArn"];
  constructor(
    logicalId: string,
    properties: ForecastDatasetGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      ForecastDatasetGroup.Type,
      ForecastDatasetGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
