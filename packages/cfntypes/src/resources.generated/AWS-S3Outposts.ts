import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::S3Outposts::AccessPoint.VpcConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-accesspoint-vpcconfiguration.html | AWS::S3Outposts::AccessPoint.VpcConfiguration}
 */
export interface S3OutpostsAccessPointVpcConfiguration {
  VpcId?: string;
}
/**
 * Type definition for AWS::S3Outposts::Bucket.AbortIncompleteMultipartUpload
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-abortincompletemultipartupload.html | AWS::S3Outposts::Bucket.AbortIncompleteMultipartUpload}
 */
export interface S3OutpostsBucketAbortIncompleteMultipartUpload {
  DaysAfterInitiation: number;
}
/**
 * Type definition for AWS::S3Outposts::Bucket.Filter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-filter.html | AWS::S3Outposts::Bucket.Filter}
 */
export interface S3OutpostsBucketFilter {
  AndOperator?: S3OutpostsBucketFilterAndOperator;
  Prefix?: string;
  Tag?: S3OutpostsBucketFilterTag;
}
/**
 * Type definition for AWS::S3Outposts::Bucket.FilterAndOperator
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-filterandoperator.html | AWS::S3Outposts::Bucket.FilterAndOperator}
 */
export interface S3OutpostsBucketFilterAndOperator {
  Prefix?: string;
  Tags: Tag[];
}
/**
 * Type definition for AWS::S3Outposts::Bucket.FilterTag
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-filtertag.html | AWS::S3Outposts::Bucket.FilterTag}
 */
export interface S3OutpostsBucketFilterTag {
  Value: string;
  Key: string;
}
/**
 * Type definition for AWS::S3Outposts::Bucket.LifecycleConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-lifecycleconfiguration.html | AWS::S3Outposts::Bucket.LifecycleConfiguration}
 */
export interface S3OutpostsBucketLifecycleConfiguration {
  Rules: any[];
}
/**
 * Type definition for AWS::S3Outposts::Bucket.Rule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-rule.html | AWS::S3Outposts::Bucket.Rule}
 */
export interface S3OutpostsBucketRule {
  Status: string;
  ExpirationDate?: string;
  Filter?: S3OutpostsBucketFilter;
  ExpirationInDays?: number;
  Id?: string;
  AbortIncompleteMultipartUpload?: S3OutpostsBucketAbortIncompleteMultipartUpload;
}
/**
 * Type definition for AWS::S3Outposts::Endpoint.FailedReason
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-endpoint-failedreason.html | AWS::S3Outposts::Endpoint.FailedReason}
 */
export interface S3OutpostsEndpointFailedReason {
  Message?: string;
  ErrorCode?: string;
}
/**
 * Type definition for AWS::S3Outposts::Endpoint.NetworkInterface
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-endpoint-networkinterface.html | AWS::S3Outposts::Endpoint.NetworkInterface}
 */
export interface S3OutpostsEndpointNetworkInterface {
  NetworkInterfaceId: string;
}
/**
 * Type definition for AWS::S3Outposts::AccessPoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-accesspoint.html | AWS::S3Outposts::AccessPoint}
 */
export interface S3OutpostsAccessPointProps {
  Policy?: object;
  Bucket: string;
  VpcConfiguration: S3OutpostsAccessPointVpcConfiguration;
  Name: string;
}
/**
 * Attributes type definition for AWS::S3Outposts::AccessPoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-accesspoint.html | AWS::S3Outposts::AccessPoint}
 */
export interface S3OutpostsAccessPointAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::S3Outposts::AccessPoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-accesspoint.html | AWS::S3Outposts::AccessPoint}
 */
export class S3OutpostsAccessPoint extends ResourceBase<
  "AWS::S3Outposts::AccessPoint",
  S3OutpostsAccessPointProps,
  S3OutpostsAccessPointAttribs
> {
  public static readonly Type = "AWS::S3Outposts::AccessPoint";
  public static readonly AttributeNames: readonly (keyof S3OutpostsAccessPointAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: S3OutpostsAccessPointProps,
    options?: ResourceOptions,
  ) {
    super(
      S3OutpostsAccessPoint.Type,
      S3OutpostsAccessPoint.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::S3Outposts::Bucket
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-bucket.html | AWS::S3Outposts::Bucket}
 */
export interface S3OutpostsBucketProps {
  OutpostId: string;
  BucketName: string;
  LifecycleConfiguration?: S3OutpostsBucketLifecycleConfiguration;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::S3Outposts::Bucket
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-bucket.html | AWS::S3Outposts::Bucket}
 */
export interface S3OutpostsBucketAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::S3Outposts::Bucket
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-bucket.html | AWS::S3Outposts::Bucket}
 */
export class S3OutpostsBucket extends ResourceBase<
  "AWS::S3Outposts::Bucket",
  S3OutpostsBucketProps,
  S3OutpostsBucketAttribs
> {
  public static readonly Type = "AWS::S3Outposts::Bucket";
  public static readonly AttributeNames: readonly (keyof S3OutpostsBucketAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: S3OutpostsBucketProps,
    options?: ResourceOptions,
  ) {
    super(
      S3OutpostsBucket.Type,
      S3OutpostsBucket.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::S3Outposts::BucketPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-bucketpolicy.html | AWS::S3Outposts::BucketPolicy}
 */
export interface S3OutpostsBucketPolicyProps {
  Bucket: string;
  PolicyDocument: object;
}
/**
 * Resource class for AWS::S3Outposts::BucketPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-bucketpolicy.html | AWS::S3Outposts::BucketPolicy}
 */
export class S3OutpostsBucketPolicy extends ResourceBase<
  "AWS::S3Outposts::BucketPolicy",
  S3OutpostsBucketPolicyProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::S3Outposts::BucketPolicy";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: S3OutpostsBucketPolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      S3OutpostsBucketPolicy.Type,
      S3OutpostsBucketPolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::S3Outposts::Endpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html | AWS::S3Outposts::Endpoint}
 */
export interface S3OutpostsEndpointProps {
  OutpostId: string;
  SecurityGroupId: string;
  FailedReason?: S3OutpostsEndpointFailedReason;
  SubnetId: string;
  AccessType?: string;
  CustomerOwnedIpv4Pool?: string;
}
/**
 * Attributes type definition for AWS::S3Outposts::Endpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html | AWS::S3Outposts::Endpoint}
 */
export interface S3OutpostsEndpointAttribs {
  Status?: string;
  NetworkInterfaces?: any[];
  CreationTime?: string;
  CidrBlock?: string;
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::S3Outposts::Endpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html | AWS::S3Outposts::Endpoint}
 */
export class S3OutpostsEndpoint extends ResourceBase<
  "AWS::S3Outposts::Endpoint",
  S3OutpostsEndpointProps,
  S3OutpostsEndpointAttribs
> {
  public static readonly Type = "AWS::S3Outposts::Endpoint";
  public static readonly AttributeNames: readonly (keyof S3OutpostsEndpointAttribs)[] =
    ["Status", "NetworkInterfaces", "CreationTime", "CidrBlock", "Id", "Arn"];
  constructor(
    logicalId: string,
    properties: S3OutpostsEndpointProps,
    options?: ResourceOptions,
  ) {
    super(
      S3OutpostsEndpoint.Type,
      S3OutpostsEndpoint.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
