import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Comprehend::DocumentClassifier.AugmentedManifestsListItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-augmentedmanifestslistitem.html | AWS::Comprehend::DocumentClassifier.AugmentedManifestsListItem}
 */
export interface ComprehendDocumentClassifierAugmentedManifestsListItem {
  S3Uri: string;
  AttributeNames: any[];
  Split?: string;
}
/**
 * Type definition for AWS::Comprehend::DocumentClassifier.DocumentClassifierDocuments
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-documentclassifierdocuments.html | AWS::Comprehend::DocumentClassifier.DocumentClassifierDocuments}
 */
export interface ComprehendDocumentClassifierDocumentClassifierDocuments {
  S3Uri: string;
  TestS3Uri?: string;
}
/**
 * Type definition for AWS::Comprehend::DocumentClassifier.DocumentClassifierInputDataConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-documentclassifierinputdataconfig.html | AWS::Comprehend::DocumentClassifier.DocumentClassifierInputDataConfig}
 */
export interface ComprehendDocumentClassifierDocumentClassifierInputDataConfig {
  DocumentReaderConfig?: ComprehendDocumentClassifierDocumentReaderConfig;
  S3Uri?: string;
  Documents?: ComprehendDocumentClassifierDocumentClassifierDocuments;
  DataFormat?: string;
  DocumentType?: string;
  AugmentedManifests?: any[];
  LabelDelimiter?: string;
  TestS3Uri?: string;
}
/**
 * Type definition for AWS::Comprehend::DocumentClassifier.DocumentClassifierOutputDataConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-documentclassifieroutputdataconfig.html | AWS::Comprehend::DocumentClassifier.DocumentClassifierOutputDataConfig}
 */
export interface ComprehendDocumentClassifierDocumentClassifierOutputDataConfig {
  KmsKeyId?: string;
  S3Uri?: string;
}
/**
 * Type definition for AWS::Comprehend::DocumentClassifier.DocumentReaderConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-documentreaderconfig.html | AWS::Comprehend::DocumentClassifier.DocumentReaderConfig}
 */
export interface ComprehendDocumentClassifierDocumentReaderConfig {
  FeatureTypes?: any[];
  DocumentReadMode?: string;
  DocumentReadAction: string;
}
/**
 * Type definition for AWS::Comprehend::DocumentClassifier.VpcConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-documentclassifier-vpcconfig.html | AWS::Comprehend::DocumentClassifier.VpcConfig}
 */
export interface ComprehendDocumentClassifierVpcConfig {
  Subnets: any[];
  SecurityGroupIds: any[];
}
/**
 * Type definition for AWS::Comprehend::Flywheel.DataSecurityConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-datasecurityconfig.html | AWS::Comprehend::Flywheel.DataSecurityConfig}
 */
export interface ComprehendFlywheelDataSecurityConfig {
  VpcConfig?: ComprehendFlywheelVpcConfig;
  VolumeKmsKeyId?: string;
  ModelKmsKeyId?: string;
  DataLakeKmsKeyId?: string;
}
/**
 * Type definition for AWS::Comprehend::Flywheel.DocumentClassificationConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-documentclassificationconfig.html | AWS::Comprehend::Flywheel.DocumentClassificationConfig}
 */
export interface ComprehendFlywheelDocumentClassificationConfig {
  Mode: string;
  Labels?: any[];
}
/**
 * Type definition for AWS::Comprehend::Flywheel.EntityRecognitionConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-entityrecognitionconfig.html | AWS::Comprehend::Flywheel.EntityRecognitionConfig}
 */
export interface ComprehendFlywheelEntityRecognitionConfig {
  EntityTypes?: any[];
}
/**
 * Type definition for AWS::Comprehend::Flywheel.EntityTypesListItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-entitytypeslistitem.html | AWS::Comprehend::Flywheel.EntityTypesListItem}
 */
export interface ComprehendFlywheelEntityTypesListItem {
  Type: string;
}
/**
 * Type definition for AWS::Comprehend::Flywheel.TaskConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-taskconfig.html | AWS::Comprehend::Flywheel.TaskConfig}
 */
export interface ComprehendFlywheelTaskConfig {
  LanguageCode: string;
  DocumentClassificationConfig?: ComprehendFlywheelDocumentClassificationConfig;
  EntityRecognitionConfig?: ComprehendFlywheelEntityRecognitionConfig;
}
/**
 * Type definition for AWS::Comprehend::Flywheel.VpcConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-vpcconfig.html | AWS::Comprehend::Flywheel.VpcConfig}
 */
export interface ComprehendFlywheelVpcConfig {
  Subnets: any[];
  SecurityGroupIds: any[];
}
/**
 * Type definition for AWS::Comprehend::DocumentClassifier
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html | AWS::Comprehend::DocumentClassifier}
 */
export interface ComprehendDocumentClassifierProps {
  LanguageCode: string;
  DataAccessRoleArn: string;
  OutputDataConfig?: ComprehendDocumentClassifierDocumentClassifierOutputDataConfig;
  VpcConfig?: ComprehendDocumentClassifierVpcConfig;
  DocumentClassifierName: string;
  Mode?: string;
  VolumeKmsKeyId?: string;
  ModelKmsKeyId?: string;
  VersionName?: string;
  ModelPolicy?: string;
  InputDataConfig: ComprehendDocumentClassifierDocumentClassifierInputDataConfig;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::Comprehend::DocumentClassifier
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html | AWS::Comprehend::DocumentClassifier}
 */
export interface ComprehendDocumentClassifierAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::Comprehend::DocumentClassifier
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html | AWS::Comprehend::DocumentClassifier}
 */
export class ComprehendDocumentClassifier extends ResourceBase<
  "AWS::Comprehend::DocumentClassifier",
  ComprehendDocumentClassifierProps,
  ComprehendDocumentClassifierAttribs
> {
  public static readonly Type = "AWS::Comprehend::DocumentClassifier";
  public static readonly AttributeNames: readonly (keyof ComprehendDocumentClassifierAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: ComprehendDocumentClassifierProps,
    options?: ResourceOptions,
  ) {
    super(
      ComprehendDocumentClassifier.Type,
      ComprehendDocumentClassifier.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Comprehend::Flywheel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-flywheel.html | AWS::Comprehend::Flywheel}
 */
export interface ComprehendFlywheelProps {
  DataLakeS3Uri: string;
  DataAccessRoleArn: string;
  FlywheelName: string;
  ModelType?: string;
  TaskConfig?: ComprehendFlywheelTaskConfig;
  ActiveModelArn?: string;
  DataSecurityConfig?: ComprehendFlywheelDataSecurityConfig;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::Comprehend::Flywheel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-flywheel.html | AWS::Comprehend::Flywheel}
 */
export interface ComprehendFlywheelAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::Comprehend::Flywheel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-flywheel.html | AWS::Comprehend::Flywheel}
 */
export class ComprehendFlywheel extends ResourceBase<
  "AWS::Comprehend::Flywheel",
  ComprehendFlywheelProps,
  ComprehendFlywheelAttribs
> {
  public static readonly Type = "AWS::Comprehend::Flywheel";
  public static readonly AttributeNames: readonly (keyof ComprehendFlywheelAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: ComprehendFlywheelProps,
    options?: ResourceOptions,
  ) {
    super(
      ComprehendFlywheel.Type,
      ComprehendFlywheel.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
