import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::S3ObjectLambda::AccessPoint.Alias
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-alias.html | AWS::S3ObjectLambda::AccessPoint.Alias}
 */
export interface S3ObjectLambdaAccessPointAlias {
  Status: string;
  Value: string;
}
/**
 * Type definition for AWS::S3ObjectLambda::AccessPoint.AwsLambda
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-awslambda.html | AWS::S3ObjectLambda::AccessPoint.AwsLambda}
 */
export interface S3ObjectLambdaAccessPointAwsLambda {
  FunctionArn: string;
  FunctionPayload?: string;
}
/**
 * Type definition for AWS::S3ObjectLambda::AccessPoint.ContentTransformation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-contenttransformation.html | AWS::S3ObjectLambda::AccessPoint.ContentTransformation}
 */
export interface S3ObjectLambdaAccessPointContentTransformation {
  AwsLambda: S3ObjectLambdaAccessPointAwsLambda;
}
/**
 * Type definition for AWS::S3ObjectLambda::AccessPoint.ObjectLambdaConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-objectlambdaconfiguration.html | AWS::S3ObjectLambda::AccessPoint.ObjectLambdaConfiguration}
 */
export interface S3ObjectLambdaAccessPointObjectLambdaConfiguration {
  SupportingAccessPoint: string;
  TransformationConfigurations: any[];
  AllowedFeatures?: any[];
  CloudWatchMetricsEnabled?: boolean;
}
/**
 * Type definition for AWS::S3ObjectLambda::AccessPoint.PolicyStatus
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-policystatus.html | AWS::S3ObjectLambda::AccessPoint.PolicyStatus}
 */
export interface S3ObjectLambdaAccessPointPolicyStatus {
  IsPublic?: boolean;
}
/**
 * Type definition for AWS::S3ObjectLambda::AccessPoint.PublicAccessBlockConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-publicaccessblockconfiguration.html | AWS::S3ObjectLambda::AccessPoint.PublicAccessBlockConfiguration}
 */
export interface S3ObjectLambdaAccessPointPublicAccessBlockConfiguration {
  RestrictPublicBuckets?: boolean;
  BlockPublicPolicy?: boolean;
  BlockPublicAcls?: boolean;
  IgnorePublicAcls?: boolean;
}
/**
 * Type definition for AWS::S3ObjectLambda::AccessPoint.TransformationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-transformationconfiguration.html | AWS::S3ObjectLambda::AccessPoint.TransformationConfiguration}
 */
export interface S3ObjectLambdaAccessPointTransformationConfiguration {
  Actions: any[];
  ContentTransformation: S3ObjectLambdaAccessPointContentTransformation;
}
/**
 * Type definition for AWS::S3ObjectLambda::AccessPoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspoint.html | AWS::S3ObjectLambda::AccessPoint}
 */
export interface S3ObjectLambdaAccessPointProps {
  ObjectLambdaConfiguration: S3ObjectLambdaAccessPointObjectLambdaConfiguration;
  Name?: string;
}
/**
 * Attributes type definition for AWS::S3ObjectLambda::AccessPoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspoint.html | AWS::S3ObjectLambda::AccessPoint}
 */
export interface S3ObjectLambdaAccessPointAttribs {
  CreationDate?: string;
  PublicAccessBlockConfiguration?: S3ObjectLambdaAccessPointPublicAccessBlockConfiguration;
  "PublicAccessBlockConfiguration.BlockPublicAcls"?: boolean;
  "PolicyStatus.IsPublic"?: boolean;
  Alias?: S3ObjectLambdaAccessPointAlias;
  "Alias.Value"?: string;
  PolicyStatus?: S3ObjectLambdaAccessPointPolicyStatus;
  "PublicAccessBlockConfiguration.IgnorePublicAcls"?: boolean;
  "PublicAccessBlockConfiguration.RestrictPublicBuckets"?: boolean;
  "PublicAccessBlockConfiguration.BlockPublicPolicy"?: boolean;
  Arn?: string;
  "Alias.Status"?: string;
}
/**
 * Resource class for AWS::S3ObjectLambda::AccessPoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspoint.html | AWS::S3ObjectLambda::AccessPoint}
 */
export class S3ObjectLambdaAccessPoint extends ResourceBase<
  "AWS::S3ObjectLambda::AccessPoint",
  S3ObjectLambdaAccessPointProps,
  S3ObjectLambdaAccessPointAttribs
> {
  public static readonly Type = "AWS::S3ObjectLambda::AccessPoint";
  public static readonly AttributeNames: readonly (keyof S3ObjectLambdaAccessPointAttribs)[] =
    [
      "CreationDate",
      "PublicAccessBlockConfiguration",
      "PublicAccessBlockConfiguration.BlockPublicAcls",
      "PolicyStatus.IsPublic",
      "Alias",
      "Alias.Value",
      "PolicyStatus",
      "PublicAccessBlockConfiguration.IgnorePublicAcls",
      "PublicAccessBlockConfiguration.RestrictPublicBuckets",
      "PublicAccessBlockConfiguration.BlockPublicPolicy",
      "Arn",
      "Alias.Status",
    ];
  constructor(
    logicalId: string,
    properties: S3ObjectLambdaAccessPointProps,
    options?: ResourceOptions,
  ) {
    super(
      S3ObjectLambdaAccessPoint.Type,
      S3ObjectLambdaAccessPoint.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::S3ObjectLambda::AccessPointPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspointpolicy.html | AWS::S3ObjectLambda::AccessPointPolicy}
 */
export interface S3ObjectLambdaAccessPointPolicyProps {
  PolicyDocument: object;
  ObjectLambdaAccessPoint: string;
}
/**
 * Resource class for AWS::S3ObjectLambda::AccessPointPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspointpolicy.html | AWS::S3ObjectLambda::AccessPointPolicy}
 */
export class S3ObjectLambdaAccessPointPolicy extends ResourceBase<
  "AWS::S3ObjectLambda::AccessPointPolicy",
  S3ObjectLambdaAccessPointPolicyProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::S3ObjectLambda::AccessPointPolicy";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: S3ObjectLambdaAccessPointPolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      S3ObjectLambdaAccessPointPolicy.Type,
      S3ObjectLambdaAccessPointPolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
