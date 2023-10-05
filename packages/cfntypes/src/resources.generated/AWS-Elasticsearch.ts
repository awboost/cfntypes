import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Elasticsearch::Domain.AdvancedSecurityOptionsInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-advancedsecurityoptionsinput.html | AWS::Elasticsearch::Domain.AdvancedSecurityOptionsInput}
 */
export interface ElasticsearchDomainAdvancedSecurityOptionsInput {
  AnonymousAuthEnabled?: boolean;
  Enabled?: boolean;
  InternalUserDatabaseEnabled?: boolean;
  MasterUserOptions?: ElasticsearchDomainMasterUserOptions;
}
/**
 * Type definition for AWS::Elasticsearch::Domain.CognitoOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-cognitooptions.html | AWS::Elasticsearch::Domain.CognitoOptions}
 */
export interface ElasticsearchDomainCognitoOptions {
  Enabled?: boolean;
  IdentityPoolId?: string;
  RoleArn?: string;
  UserPoolId?: string;
}
/**
 * Type definition for AWS::Elasticsearch::Domain.ColdStorageOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-coldstorageoptions.html | AWS::Elasticsearch::Domain.ColdStorageOptions}
 */
export interface ElasticsearchDomainColdStorageOptions {
  Enabled?: boolean;
}
/**
 * Type definition for AWS::Elasticsearch::Domain.DomainEndpointOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-domainendpointoptions.html | AWS::Elasticsearch::Domain.DomainEndpointOptions}
 */
export interface ElasticsearchDomainDomainEndpointOptions {
  CustomEndpoint?: string;
  CustomEndpointCertificateArn?: string;
  CustomEndpointEnabled?: boolean;
  EnforceHTTPS?: boolean;
  TLSSecurityPolicy?: string;
}
/**
 * Type definition for AWS::Elasticsearch::Domain.EBSOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-ebsoptions.html | AWS::Elasticsearch::Domain.EBSOptions}
 */
export interface ElasticsearchDomainEBSOptions {
  EBSEnabled?: boolean;
  Iops?: number;
  VolumeSize?: number;
  VolumeType?: string;
}
/**
 * Type definition for AWS::Elasticsearch::Domain.ElasticsearchClusterConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-elasticsearchclusterconfig.html | AWS::Elasticsearch::Domain.ElasticsearchClusterConfig}
 */
export interface ElasticsearchDomainElasticsearchClusterConfig {
  ColdStorageOptions?: ElasticsearchDomainColdStorageOptions;
  DedicatedMasterCount?: number;
  DedicatedMasterEnabled?: boolean;
  DedicatedMasterType?: string;
  InstanceCount?: number;
  InstanceType?: string;
  WarmCount?: number;
  WarmEnabled?: boolean;
  WarmType?: string;
  ZoneAwarenessConfig?: ElasticsearchDomainZoneAwarenessConfig;
  ZoneAwarenessEnabled?: boolean;
}
/**
 * Type definition for AWS::Elasticsearch::Domain.EncryptionAtRestOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-encryptionatrestoptions.html | AWS::Elasticsearch::Domain.EncryptionAtRestOptions}
 */
export interface ElasticsearchDomainEncryptionAtRestOptions {
  Enabled?: boolean;
  KmsKeyId?: string;
}
/**
 * Type definition for AWS::Elasticsearch::Domain.LogPublishingOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-logpublishingoption.html | AWS::Elasticsearch::Domain.LogPublishingOption}
 */
export interface ElasticsearchDomainLogPublishingOption {
  CloudWatchLogsLogGroupArn?: string;
  Enabled?: boolean;
}
/**
 * Type definition for AWS::Elasticsearch::Domain.MasterUserOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-masteruseroptions.html | AWS::Elasticsearch::Domain.MasterUserOptions}
 */
export interface ElasticsearchDomainMasterUserOptions {
  MasterUserARN?: string;
  MasterUserName?: string;
  MasterUserPassword?: string;
}
/**
 * Type definition for AWS::Elasticsearch::Domain.NodeToNodeEncryptionOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-nodetonodeencryptionoptions.html | AWS::Elasticsearch::Domain.NodeToNodeEncryptionOptions}
 */
export interface ElasticsearchDomainNodeToNodeEncryptionOptions {
  Enabled?: boolean;
}
/**
 * Type definition for AWS::Elasticsearch::Domain.SnapshotOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-snapshotoptions.html | AWS::Elasticsearch::Domain.SnapshotOptions}
 */
export interface ElasticsearchDomainSnapshotOptions {
  AutomatedSnapshotStartHour?: number;
}
/**
 * Type definition for AWS::Elasticsearch::Domain.VPCOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-vpcoptions.html | AWS::Elasticsearch::Domain.VPCOptions}
 */
export interface ElasticsearchDomainVPCOptions {
  SecurityGroupIds?: any[];
  SubnetIds?: any[];
}
/**
 * Type definition for AWS::Elasticsearch::Domain.ZoneAwarenessConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-zoneawarenessconfig.html | AWS::Elasticsearch::Domain.ZoneAwarenessConfig}
 */
export interface ElasticsearchDomainZoneAwarenessConfig {
  AvailabilityZoneCount?: number;
}
/**
 * Type definition for AWS::Elasticsearch::Domain
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticsearch-domain.html | AWS::Elasticsearch::Domain}
 */
export interface ElasticsearchDomainProps {
  AccessPolicies?: object;
  AdvancedOptions?: Record<string, any>;
  AdvancedSecurityOptions?: ElasticsearchDomainAdvancedSecurityOptionsInput;
  CognitoOptions?: ElasticsearchDomainCognitoOptions;
  DomainEndpointOptions?: ElasticsearchDomainDomainEndpointOptions;
  DomainName?: string;
  EBSOptions?: ElasticsearchDomainEBSOptions;
  ElasticsearchClusterConfig?: ElasticsearchDomainElasticsearchClusterConfig;
  ElasticsearchVersion?: string;
  EncryptionAtRestOptions?: ElasticsearchDomainEncryptionAtRestOptions;
  LogPublishingOptions?: Record<string, any>;
  NodeToNodeEncryptionOptions?: ElasticsearchDomainNodeToNodeEncryptionOptions;
  SnapshotOptions?: ElasticsearchDomainSnapshotOptions;
  Tags?: Tag[];
  VPCOptions?: ElasticsearchDomainVPCOptions;
}
/**
 * Attributes type definition for AWS::Elasticsearch::Domain
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticsearch-domain.html | AWS::Elasticsearch::Domain}
 */
export interface ElasticsearchDomainAttribs {
  Arn?: string;
  DomainArn?: string;
  DomainEndpoint?: string;
}
/**
 * Resource class for AWS::Elasticsearch::Domain
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticsearch-domain.html | AWS::Elasticsearch::Domain}
 */
export class ElasticsearchDomain extends ResourceBase<
  "AWS::Elasticsearch::Domain",
  ElasticsearchDomainProps,
  ElasticsearchDomainAttribs
> {
  public static readonly Type = "AWS::Elasticsearch::Domain";
  public static readonly AttributeNames: readonly (keyof ElasticsearchDomainAttribs)[] =
    ["Arn", "DomainArn", "DomainEndpoint"];
  constructor(
    logicalId: string,
    properties: ElasticsearchDomainProps,
    options?: ResourceOptions,
  ) {
    super(
      ElasticsearchDomain.Type,
      ElasticsearchDomain.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
