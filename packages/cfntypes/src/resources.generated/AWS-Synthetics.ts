import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Synthetics::Canary.ArtifactConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-artifactconfig.html | AWS::Synthetics::Canary.ArtifactConfig}
 */
export interface SyntheticsCanaryArtifactConfig {
  S3Encryption?: SyntheticsCanaryS3Encryption;
}
/**
 * Type definition for AWS::Synthetics::Canary.BaseScreenshot
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-basescreenshot.html | AWS::Synthetics::Canary.BaseScreenshot}
 */
export interface SyntheticsCanaryBaseScreenshot {
  IgnoreCoordinates?: any[];
  ScreenshotName: string;
}
/**
 * Type definition for AWS::Synthetics::Canary.Code
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-code.html | AWS::Synthetics::Canary.Code}
 */
export interface SyntheticsCanaryCode {
  Script?: string;
  S3ObjectVersion?: string;
  S3Bucket?: string;
  S3Key?: string;
  Handler: string;
  SourceLocationArn?: string;
}
/**
 * Type definition for AWS::Synthetics::Canary.RunConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-runconfig.html | AWS::Synthetics::Canary.RunConfig}
 */
export interface SyntheticsCanaryRunConfig {
  TimeoutInSeconds?: number;
  EnvironmentVariables?: Record<string, any>;
  MemoryInMB?: number;
  ActiveTracing?: boolean;
}
/**
 * Type definition for AWS::Synthetics::Canary.S3Encryption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-s3encryption.html | AWS::Synthetics::Canary.S3Encryption}
 */
export interface SyntheticsCanaryS3Encryption {
  KmsKeyArn?: string;
  EncryptionMode?: string;
}
/**
 * Type definition for AWS::Synthetics::Canary.Schedule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-schedule.html | AWS::Synthetics::Canary.Schedule}
 */
export interface SyntheticsCanarySchedule {
  DurationInSeconds?: string;
  Expression: string;
}
/**
 * Type definition for AWS::Synthetics::Canary.VPCConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-vpcconfig.html | AWS::Synthetics::Canary.VPCConfig}
 */
export interface SyntheticsCanaryVPCConfig {
  VpcId?: string;
  SubnetIds: any[];
  SecurityGroupIds: any[];
}
/**
 * Type definition for AWS::Synthetics::Canary.VisualReference
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-visualreference.html | AWS::Synthetics::Canary.VisualReference}
 */
export interface SyntheticsCanaryVisualReference {
  BaseScreenshots?: any[];
  BaseCanaryRunId: string;
}
/**
 * Type definition for AWS::Synthetics::Canary
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-canary.html | AWS::Synthetics::Canary}
 */
export interface SyntheticsCanaryProps {
  VisualReference?: SyntheticsCanaryVisualReference;
  ArtifactConfig?: SyntheticsCanaryArtifactConfig;
  SuccessRetentionPeriod?: number;
  RuntimeVersion: string;
  VPCConfig?: SyntheticsCanaryVPCConfig;
  RunConfig?: SyntheticsCanaryRunConfig;
  FailureRetentionPeriod?: number;
  Code: SyntheticsCanaryCode;
  Name: string;
  ExecutionRoleArn: string;
  Schedule: SyntheticsCanarySchedule;
  ArtifactS3Location: string;
  Tags?: Tag[];
  StartCanaryAfterCreation?: boolean;
}
/**
 * Attributes type definition for AWS::Synthetics::Canary
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-canary.html | AWS::Synthetics::Canary}
 */
export interface SyntheticsCanaryAttribs {
  "Code.SourceLocationArn"?: string;
  State?: string;
  Id?: string;
}
/**
 * Resource class for AWS::Synthetics::Canary
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-canary.html | AWS::Synthetics::Canary}
 */
export class SyntheticsCanary extends ResourceBase<
  "AWS::Synthetics::Canary",
  SyntheticsCanaryProps,
  SyntheticsCanaryAttribs
> {
  public static readonly Type = "AWS::Synthetics::Canary";
  public static readonly AttributeNames: readonly (keyof SyntheticsCanaryAttribs)[] =
    ["Code.SourceLocationArn", "State", "Id"];
  constructor(
    logicalId: string,
    properties: SyntheticsCanaryProps,
    options?: ResourceOptions,
  ) {
    super(
      SyntheticsCanary.Type,
      SyntheticsCanary.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Synthetics::Group
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-group.html | AWS::Synthetics::Group}
 */
export interface SyntheticsGroupProps {
  ResourceArns?: any[];
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::Synthetics::Group
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-group.html | AWS::Synthetics::Group}
 */
export interface SyntheticsGroupAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::Synthetics::Group
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-group.html | AWS::Synthetics::Group}
 */
export class SyntheticsGroup extends ResourceBase<
  "AWS::Synthetics::Group",
  SyntheticsGroupProps,
  SyntheticsGroupAttribs
> {
  public static readonly Type = "AWS::Synthetics::Group";
  public static readonly AttributeNames: readonly (keyof SyntheticsGroupAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: SyntheticsGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      SyntheticsGroup.Type,
      SyntheticsGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
