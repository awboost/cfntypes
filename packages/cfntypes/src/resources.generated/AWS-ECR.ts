import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::ECR::PublicRepository.RepositoryCatalogData
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-publicrepository-repositorycatalogdata.html | AWS::ECR::PublicRepository.RepositoryCatalogData}
 */
export interface ECRPublicRepositoryRepositoryCatalogData {
  AboutText?: string;
  OperatingSystems?: any[];
  UsageText?: string;
  RepositoryDescription?: string;
  Architectures?: any[];
}
/**
 * Type definition for AWS::ECR::ReplicationConfiguration.ReplicationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-replicationconfiguration.html | AWS::ECR::ReplicationConfiguration.ReplicationConfiguration}
 */
export interface ECRReplicationConfigurationReplicationConfiguration {
  Rules: any[];
}
/**
 * Type definition for AWS::ECR::ReplicationConfiguration.ReplicationDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-replicationdestination.html | AWS::ECR::ReplicationConfiguration.ReplicationDestination}
 */
export interface ECRReplicationConfigurationReplicationDestination {
  Region: string;
  RegistryId: string;
}
/**
 * Type definition for AWS::ECR::ReplicationConfiguration.ReplicationRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-replicationrule.html | AWS::ECR::ReplicationConfiguration.ReplicationRule}
 */
export interface ECRReplicationConfigurationReplicationRule {
  RepositoryFilters?: any[];
  Destinations: any[];
}
/**
 * Type definition for AWS::ECR::ReplicationConfiguration.RepositoryFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-repositoryfilter.html | AWS::ECR::ReplicationConfiguration.RepositoryFilter}
 */
export interface ECRReplicationConfigurationRepositoryFilter {
  FilterType: string;
  Filter: string;
}
/**
 * Type definition for AWS::ECR::Repository.EncryptionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repository-encryptionconfiguration.html | AWS::ECR::Repository.EncryptionConfiguration}
 */
export interface ECRRepositoryEncryptionConfiguration {
  EncryptionType: string;
  KmsKey?: string;
}
/**
 * Type definition for AWS::ECR::Repository.ImageScanningConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repository-imagescanningconfiguration.html | AWS::ECR::Repository.ImageScanningConfiguration}
 */
export interface ECRRepositoryImageScanningConfiguration {
  ScanOnPush?: boolean;
}
/**
 * Type definition for AWS::ECR::Repository.LifecyclePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repository-lifecyclepolicy.html | AWS::ECR::Repository.LifecyclePolicy}
 */
export interface ECRRepositoryLifecyclePolicy {
  LifecyclePolicyText?: string;
  RegistryId?: string;
}
/**
 * Type definition for AWS::ECR::PublicRepository
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-publicrepository.html | AWS::ECR::PublicRepository}
 */
export interface ECRPublicRepositoryProps {
  RepositoryPolicyText?: object;
  RepositoryName?: string;
  RepositoryCatalogData?: ECRPublicRepositoryRepositoryCatalogData;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::ECR::PublicRepository
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-publicrepository.html | AWS::ECR::PublicRepository}
 */
export interface ECRPublicRepositoryAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::ECR::PublicRepository
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-publicrepository.html | AWS::ECR::PublicRepository}
 */
export class ECRPublicRepository extends ResourceBase<
  "AWS::ECR::PublicRepository",
  ECRPublicRepositoryProps,
  ECRPublicRepositoryAttribs
> {
  public static readonly Type = "AWS::ECR::PublicRepository";
  public static readonly AttributeNames: readonly (keyof ECRPublicRepositoryAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: ECRPublicRepositoryProps,
    options?: ResourceOptions,
  ) {
    super(
      ECRPublicRepository.Type,
      ECRPublicRepository.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ECR::PullThroughCacheRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-pullthroughcacherule.html | AWS::ECR::PullThroughCacheRule}
 */
export interface ECRPullThroughCacheRuleProps {
  UpstreamRegistryUrl?: string;
  EcrRepositoryPrefix?: string;
}
/**
 * Resource class for AWS::ECR::PullThroughCacheRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-pullthroughcacherule.html | AWS::ECR::PullThroughCacheRule}
 */
export class ECRPullThroughCacheRule extends ResourceBase<
  "AWS::ECR::PullThroughCacheRule",
  ECRPullThroughCacheRuleProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::ECR::PullThroughCacheRule";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ECRPullThroughCacheRuleProps,
    options?: ResourceOptions,
  ) {
    super(
      ECRPullThroughCacheRule.Type,
      ECRPullThroughCacheRule.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ECR::RegistryPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-registrypolicy.html | AWS::ECR::RegistryPolicy}
 */
export interface ECRRegistryPolicyProps {
  PolicyText: object;
}
/**
 * Attributes type definition for AWS::ECR::RegistryPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-registrypolicy.html | AWS::ECR::RegistryPolicy}
 */
export interface ECRRegistryPolicyAttribs {
  RegistryId?: string;
}
/**
 * Resource class for AWS::ECR::RegistryPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-registrypolicy.html | AWS::ECR::RegistryPolicy}
 */
export class ECRRegistryPolicy extends ResourceBase<
  "AWS::ECR::RegistryPolicy",
  ECRRegistryPolicyProps,
  ECRRegistryPolicyAttribs
> {
  public static readonly Type = "AWS::ECR::RegistryPolicy";
  public static readonly AttributeNames: readonly (keyof ECRRegistryPolicyAttribs)[] =
    ["RegistryId"];
  constructor(
    logicalId: string,
    properties: ECRRegistryPolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      ECRRegistryPolicy.Type,
      ECRRegistryPolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ECR::ReplicationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-replicationconfiguration.html | AWS::ECR::ReplicationConfiguration}
 */
export interface ECRReplicationConfigurationProps {
  ReplicationConfiguration: ECRReplicationConfigurationReplicationConfiguration;
}
/**
 * Attributes type definition for AWS::ECR::ReplicationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-replicationconfiguration.html | AWS::ECR::ReplicationConfiguration}
 */
export interface ECRReplicationConfigurationAttribs {
  RegistryId?: string;
}
/**
 * Resource class for AWS::ECR::ReplicationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-replicationconfiguration.html | AWS::ECR::ReplicationConfiguration}
 */
export class ECRReplicationConfiguration extends ResourceBase<
  "AWS::ECR::ReplicationConfiguration",
  ECRReplicationConfigurationProps,
  ECRReplicationConfigurationAttribs
> {
  public static readonly Type = "AWS::ECR::ReplicationConfiguration";
  public static readonly AttributeNames: readonly (keyof ECRReplicationConfigurationAttribs)[] =
    ["RegistryId"];
  constructor(
    logicalId: string,
    properties: ECRReplicationConfigurationProps,
    options?: ResourceOptions,
  ) {
    super(
      ECRReplicationConfiguration.Type,
      ECRReplicationConfiguration.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ECR::Repository
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repository.html | AWS::ECR::Repository}
 */
export interface ECRRepositoryProps {
  EmptyOnDelete?: boolean;
  ImageScanningConfiguration?: ECRRepositoryImageScanningConfiguration;
  EncryptionConfiguration?: ECRRepositoryEncryptionConfiguration;
  RepositoryPolicyText?: object;
  LifecyclePolicy?: ECRRepositoryLifecyclePolicy;
  RepositoryName?: string;
  Tags?: Tag[];
  ImageTagMutability?: string;
}
/**
 * Attributes type definition for AWS::ECR::Repository
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repository.html | AWS::ECR::Repository}
 */
export interface ECRRepositoryAttribs {
  RepositoryUri?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::ECR::Repository
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repository.html | AWS::ECR::Repository}
 */
export class ECRRepository extends ResourceBase<
  "AWS::ECR::Repository",
  ECRRepositoryProps,
  ECRRepositoryAttribs
> {
  public static readonly Type = "AWS::ECR::Repository";
  public static readonly AttributeNames: readonly (keyof ECRRepositoryAttribs)[] =
    ["RepositoryUri", "Arn"];
  constructor(
    logicalId: string,
    properties: ECRRepositoryProps,
    options?: ResourceOptions,
  ) {
    super(
      ECRRepository.Type,
      ECRRepository.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
