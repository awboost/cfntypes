import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::LookoutEquipment::InferenceScheduler.DataInputConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutequipment-inferencescheduler-datainputconfiguration.html | AWS::LookoutEquipment::InferenceScheduler.DataInputConfiguration}
 */
export interface LookoutEquipmentInferenceSchedulerDataInputConfiguration {
  InferenceInputNameConfiguration?: LookoutEquipmentInferenceSchedulerInputNameConfiguration;
  S3InputConfiguration: LookoutEquipmentInferenceSchedulerS3InputConfiguration;
  InputTimeZoneOffset?: string;
}
/**
 * Type definition for AWS::LookoutEquipment::InferenceScheduler.DataOutputConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutequipment-inferencescheduler-dataoutputconfiguration.html | AWS::LookoutEquipment::InferenceScheduler.DataOutputConfiguration}
 */
export interface LookoutEquipmentInferenceSchedulerDataOutputConfiguration {
  KmsKeyId?: string;
  S3OutputConfiguration: LookoutEquipmentInferenceSchedulerS3OutputConfiguration;
}
/**
 * Type definition for AWS::LookoutEquipment::InferenceScheduler.InputNameConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutequipment-inferencescheduler-inputnameconfiguration.html | AWS::LookoutEquipment::InferenceScheduler.InputNameConfiguration}
 */
export interface LookoutEquipmentInferenceSchedulerInputNameConfiguration {
  ComponentTimestampDelimiter?: string;
  TimestampFormat?: string;
}
/**
 * Type definition for AWS::LookoutEquipment::InferenceScheduler.S3InputConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutequipment-inferencescheduler-s3inputconfiguration.html | AWS::LookoutEquipment::InferenceScheduler.S3InputConfiguration}
 */
export interface LookoutEquipmentInferenceSchedulerS3InputConfiguration {
  Bucket: string;
  Prefix?: string;
}
/**
 * Type definition for AWS::LookoutEquipment::InferenceScheduler.S3OutputConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutequipment-inferencescheduler-s3outputconfiguration.html | AWS::LookoutEquipment::InferenceScheduler.S3OutputConfiguration}
 */
export interface LookoutEquipmentInferenceSchedulerS3OutputConfiguration {
  Bucket: string;
  Prefix?: string;
}
/**
 * Type definition for AWS::LookoutEquipment::InferenceScheduler
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutequipment-inferencescheduler.html | AWS::LookoutEquipment::InferenceScheduler}
 */
export interface LookoutEquipmentInferenceSchedulerProps {
  InferenceSchedulerName?: string;
  DataUploadFrequency: string;
  ModelName: string;
  DataInputConfiguration: LookoutEquipmentInferenceSchedulerDataInputConfiguration;
  DataOutputConfiguration: LookoutEquipmentInferenceSchedulerDataOutputConfiguration;
  ServerSideKmsKeyId?: string;
  DataDelayOffsetInMinutes?: number;
  RoleArn: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::LookoutEquipment::InferenceScheduler
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutequipment-inferencescheduler.html | AWS::LookoutEquipment::InferenceScheduler}
 */
export interface LookoutEquipmentInferenceSchedulerAttribs {
  InferenceSchedulerArn?: string;
}
/**
 * Resource class for AWS::LookoutEquipment::InferenceScheduler
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutequipment-inferencescheduler.html | AWS::LookoutEquipment::InferenceScheduler}
 */
export class LookoutEquipmentInferenceScheduler extends ResourceBase<
  "AWS::LookoutEquipment::InferenceScheduler",
  LookoutEquipmentInferenceSchedulerProps,
  LookoutEquipmentInferenceSchedulerAttribs
> {
  public static readonly Type = "AWS::LookoutEquipment::InferenceScheduler";
  public static readonly AttributeNames: readonly (keyof LookoutEquipmentInferenceSchedulerAttribs)[] =
    ["InferenceSchedulerArn"];
  constructor(
    logicalId: string,
    properties: LookoutEquipmentInferenceSchedulerProps,
    options?: ResourceOptions,
  ) {
    super(
      LookoutEquipmentInferenceScheduler.Type,
      LookoutEquipmentInferenceScheduler.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
