import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::OpenSearchServerless::SecurityConfig.SamlConfigOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchserverless-securityconfig-samlconfigoptions.html | AWS::OpenSearchServerless::SecurityConfig.SamlConfigOptions}
 */
export interface OpenSearchServerlessSecurityConfigSamlConfigOptions {
  SessionTimeout?: number;
  UserAttribute?: string;
  Metadata: string;
  GroupAttribute?: string;
}
/**
 * Type definition for AWS::OpenSearchServerless::AccessPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-accesspolicy.html | AWS::OpenSearchServerless::AccessPolicy}
 */
export interface OpenSearchServerlessAccessPolicyProps {
  Policy: string;
  Type: string;
  Description?: string;
  Name: string;
}
/**
 * Resource class for AWS::OpenSearchServerless::AccessPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-accesspolicy.html | AWS::OpenSearchServerless::AccessPolicy}
 */
export class OpenSearchServerlessAccessPolicy extends ResourceBase<
  "AWS::OpenSearchServerless::AccessPolicy",
  OpenSearchServerlessAccessPolicyProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::OpenSearchServerless::AccessPolicy";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: OpenSearchServerlessAccessPolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      OpenSearchServerlessAccessPolicy.Type,
      OpenSearchServerlessAccessPolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::OpenSearchServerless::Collection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-collection.html | AWS::OpenSearchServerless::Collection}
 */
export interface OpenSearchServerlessCollectionProps {
  Type?: string;
  Description?: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::OpenSearchServerless::Collection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-collection.html | AWS::OpenSearchServerless::Collection}
 */
export interface OpenSearchServerlessCollectionAttribs {
  CollectionEndpoint?: string;
  Id?: string;
  Arn?: string;
  DashboardEndpoint?: string;
}
/**
 * Resource class for AWS::OpenSearchServerless::Collection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-collection.html | AWS::OpenSearchServerless::Collection}
 */
export class OpenSearchServerlessCollection extends ResourceBase<
  "AWS::OpenSearchServerless::Collection",
  OpenSearchServerlessCollectionProps,
  OpenSearchServerlessCollectionAttribs
> {
  public static readonly Type = "AWS::OpenSearchServerless::Collection";
  public static readonly AttributeNames: readonly (keyof OpenSearchServerlessCollectionAttribs)[] =
    ["CollectionEndpoint", "Id", "Arn", "DashboardEndpoint"];
  constructor(
    logicalId: string,
    properties: OpenSearchServerlessCollectionProps,
    options?: ResourceOptions,
  ) {
    super(
      OpenSearchServerlessCollection.Type,
      OpenSearchServerlessCollection.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::OpenSearchServerless::SecurityConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securityconfig.html | AWS::OpenSearchServerless::SecurityConfig}
 */
export interface OpenSearchServerlessSecurityConfigProps {
  Type?: string;
  Description?: string;
  SamlOptions?: OpenSearchServerlessSecurityConfigSamlConfigOptions;
  Name?: string;
}
/**
 * Attributes type definition for AWS::OpenSearchServerless::SecurityConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securityconfig.html | AWS::OpenSearchServerless::SecurityConfig}
 */
export interface OpenSearchServerlessSecurityConfigAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::OpenSearchServerless::SecurityConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securityconfig.html | AWS::OpenSearchServerless::SecurityConfig}
 */
export class OpenSearchServerlessSecurityConfig extends ResourceBase<
  "AWS::OpenSearchServerless::SecurityConfig",
  OpenSearchServerlessSecurityConfigProps,
  OpenSearchServerlessSecurityConfigAttribs
> {
  public static readonly Type = "AWS::OpenSearchServerless::SecurityConfig";
  public static readonly AttributeNames: readonly (keyof OpenSearchServerlessSecurityConfigAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: OpenSearchServerlessSecurityConfigProps,
    options?: ResourceOptions,
  ) {
    super(
      OpenSearchServerlessSecurityConfig.Type,
      OpenSearchServerlessSecurityConfig.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::OpenSearchServerless::SecurityPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securitypolicy.html | AWS::OpenSearchServerless::SecurityPolicy}
 */
export interface OpenSearchServerlessSecurityPolicyProps {
  Policy: string;
  Type: string;
  Description?: string;
  Name: string;
}
/**
 * Resource class for AWS::OpenSearchServerless::SecurityPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securitypolicy.html | AWS::OpenSearchServerless::SecurityPolicy}
 */
export class OpenSearchServerlessSecurityPolicy extends ResourceBase<
  "AWS::OpenSearchServerless::SecurityPolicy",
  OpenSearchServerlessSecurityPolicyProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::OpenSearchServerless::SecurityPolicy";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: OpenSearchServerlessSecurityPolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      OpenSearchServerlessSecurityPolicy.Type,
      OpenSearchServerlessSecurityPolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::OpenSearchServerless::VpcEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-vpcendpoint.html | AWS::OpenSearchServerless::VpcEndpoint}
 */
export interface OpenSearchServerlessVpcEndpointProps {
  VpcId: string;
  SecurityGroupIds?: any[];
  SubnetIds: any[];
  Name: string;
}
/**
 * Attributes type definition for AWS::OpenSearchServerless::VpcEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-vpcendpoint.html | AWS::OpenSearchServerless::VpcEndpoint}
 */
export interface OpenSearchServerlessVpcEndpointAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::OpenSearchServerless::VpcEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-vpcendpoint.html | AWS::OpenSearchServerless::VpcEndpoint}
 */
export class OpenSearchServerlessVpcEndpoint extends ResourceBase<
  "AWS::OpenSearchServerless::VpcEndpoint",
  OpenSearchServerlessVpcEndpointProps,
  OpenSearchServerlessVpcEndpointAttribs
> {
  public static readonly Type = "AWS::OpenSearchServerless::VpcEndpoint";
  public static readonly AttributeNames: readonly (keyof OpenSearchServerlessVpcEndpointAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: OpenSearchServerlessVpcEndpointProps,
    options?: ResourceOptions,
  ) {
    super(
      OpenSearchServerlessVpcEndpoint.Type,
      OpenSearchServerlessVpcEndpoint.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
