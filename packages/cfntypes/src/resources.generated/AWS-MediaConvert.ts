import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::MediaConvert::JobTemplate.AccelerationSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconvert-jobtemplate-accelerationsettings.html | AWS::MediaConvert::JobTemplate.AccelerationSettings}
 */
export interface MediaConvertJobTemplateAccelerationSettings {
  Mode: string;
}
/**
 * Type definition for AWS::MediaConvert::JobTemplate.HopDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconvert-jobtemplate-hopdestination.html | AWS::MediaConvert::JobTemplate.HopDestination}
 */
export interface MediaConvertJobTemplateHopDestination {
  WaitMinutes?: number;
  Priority?: number;
  Queue?: string;
}
/**
 * Type definition for AWS::MediaConvert::JobTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-jobtemplate.html | AWS::MediaConvert::JobTemplate}
 */
export interface MediaConvertJobTemplateProps {
  Category?: string;
  Description?: string;
  AccelerationSettings?: MediaConvertJobTemplateAccelerationSettings;
  Priority?: number;
  StatusUpdateInterval?: string;
  SettingsJson: object;
  Queue?: string;
  HopDestinations?: any[];
  Tags?: object;
  Name?: string;
}
/**
 * Attributes type definition for AWS::MediaConvert::JobTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-jobtemplate.html | AWS::MediaConvert::JobTemplate}
 */
export interface MediaConvertJobTemplateAttribs {
  Arn?: string;
  Name?: string;
}
/**
 * Resource class for AWS::MediaConvert::JobTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-jobtemplate.html | AWS::MediaConvert::JobTemplate}
 */
export class MediaConvertJobTemplate extends ResourceBase<
  "AWS::MediaConvert::JobTemplate",
  MediaConvertJobTemplateProps,
  MediaConvertJobTemplateAttribs
> {
  public static readonly Type = "AWS::MediaConvert::JobTemplate";
  public static readonly AttributeNames: readonly (keyof MediaConvertJobTemplateAttribs)[] =
    ["Arn", "Name"];
  constructor(
    logicalId: string,
    properties: MediaConvertJobTemplateProps,
    options?: ResourceOptions,
  ) {
    super(
      MediaConvertJobTemplate.Type,
      MediaConvertJobTemplate.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::MediaConvert::Preset
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-preset.html | AWS::MediaConvert::Preset}
 */
export interface MediaConvertPresetProps {
  Category?: string;
  Description?: string;
  SettingsJson: object;
  Tags?: object;
  Name?: string;
}
/**
 * Attributes type definition for AWS::MediaConvert::Preset
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-preset.html | AWS::MediaConvert::Preset}
 */
export interface MediaConvertPresetAttribs {
  Arn?: string;
  Name?: string;
}
/**
 * Resource class for AWS::MediaConvert::Preset
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-preset.html | AWS::MediaConvert::Preset}
 */
export class MediaConvertPreset extends ResourceBase<
  "AWS::MediaConvert::Preset",
  MediaConvertPresetProps,
  MediaConvertPresetAttribs
> {
  public static readonly Type = "AWS::MediaConvert::Preset";
  public static readonly AttributeNames: readonly (keyof MediaConvertPresetAttribs)[] =
    ["Arn", "Name"];
  constructor(
    logicalId: string,
    properties: MediaConvertPresetProps,
    options?: ResourceOptions,
  ) {
    super(
      MediaConvertPreset.Type,
      MediaConvertPreset.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::MediaConvert::Queue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-queue.html | AWS::MediaConvert::Queue}
 */
export interface MediaConvertQueueProps {
  Status?: string;
  Description?: string;
  PricingPlan?: string;
  Tags?: object;
  Name?: string;
}
/**
 * Attributes type definition for AWS::MediaConvert::Queue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-queue.html | AWS::MediaConvert::Queue}
 */
export interface MediaConvertQueueAttribs {
  Arn?: string;
  Name?: string;
}
/**
 * Resource class for AWS::MediaConvert::Queue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-queue.html | AWS::MediaConvert::Queue}
 */
export class MediaConvertQueue extends ResourceBase<
  "AWS::MediaConvert::Queue",
  MediaConvertQueueProps,
  MediaConvertQueueAttribs
> {
  public static readonly Type = "AWS::MediaConvert::Queue";
  public static readonly AttributeNames: readonly (keyof MediaConvertQueueAttribs)[] =
    ["Arn", "Name"];
  constructor(
    logicalId: string,
    properties: MediaConvertQueueProps,
    options?: ResourceOptions,
  ) {
    super(
      MediaConvertQueue.Type,
      MediaConvertQueue.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
