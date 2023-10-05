import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::ElastiCache::CacheCluster.CloudWatchLogsDestinationDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-cachecluster-cloudwatchlogsdestinationdetails.html | AWS::ElastiCache::CacheCluster.CloudWatchLogsDestinationDetails}
 */
export interface ElastiCacheCacheClusterCloudWatchLogsDestinationDetails {
  LogGroup: string;
}
/**
 * Type definition for AWS::ElastiCache::CacheCluster.DestinationDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-cachecluster-destinationdetails.html | AWS::ElastiCache::CacheCluster.DestinationDetails}
 */
export interface ElastiCacheCacheClusterDestinationDetails {
  CloudWatchLogsDetails?: ElastiCacheCacheClusterCloudWatchLogsDestinationDetails;
  KinesisFirehoseDetails?: ElastiCacheCacheClusterKinesisFirehoseDestinationDetails;
}
/**
 * Type definition for AWS::ElastiCache::CacheCluster.KinesisFirehoseDestinationDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-cachecluster-kinesisfirehosedestinationdetails.html | AWS::ElastiCache::CacheCluster.KinesisFirehoseDestinationDetails}
 */
export interface ElastiCacheCacheClusterKinesisFirehoseDestinationDetails {
  DeliveryStream: string;
}
/**
 * Type definition for AWS::ElastiCache::CacheCluster.LogDeliveryConfigurationRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-cachecluster-logdeliveryconfigurationrequest.html | AWS::ElastiCache::CacheCluster.LogDeliveryConfigurationRequest}
 */
export interface ElastiCacheCacheClusterLogDeliveryConfigurationRequest {
  DestinationDetails: ElastiCacheCacheClusterDestinationDetails;
  DestinationType: string;
  LogFormat: string;
  LogType: string;
}
/**
 * Type definition for AWS::ElastiCache::GlobalReplicationGroup.GlobalReplicationGroupMember
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-globalreplicationgroup-globalreplicationgroupmember.html | AWS::ElastiCache::GlobalReplicationGroup.GlobalReplicationGroupMember}
 */
export interface ElastiCacheGlobalReplicationGroupGlobalReplicationGroupMember {
  Role?: string;
  ReplicationGroupRegion?: string;
  ReplicationGroupId?: string;
}
/**
 * Type definition for AWS::ElastiCache::GlobalReplicationGroup.RegionalConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-globalreplicationgroup-regionalconfiguration.html | AWS::ElastiCache::GlobalReplicationGroup.RegionalConfiguration}
 */
export interface ElastiCacheGlobalReplicationGroupRegionalConfiguration {
  ReplicationGroupRegion?: string;
  ReplicationGroupId?: string;
  ReshardingConfigurations?: any[];
}
/**
 * Type definition for AWS::ElastiCache::GlobalReplicationGroup.ReshardingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-globalreplicationgroup-reshardingconfiguration.html | AWS::ElastiCache::GlobalReplicationGroup.ReshardingConfiguration}
 */
export interface ElastiCacheGlobalReplicationGroupReshardingConfiguration {
  NodeGroupId?: string;
  PreferredAvailabilityZones?: any[];
}
/**
 * Type definition for AWS::ElastiCache::ReplicationGroup.CloudWatchLogsDestinationDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-cloudwatchlogsdestinationdetails.html | AWS::ElastiCache::ReplicationGroup.CloudWatchLogsDestinationDetails}
 */
export interface ElastiCacheReplicationGroupCloudWatchLogsDestinationDetails {
  LogGroup: string;
}
/**
 * Type definition for AWS::ElastiCache::ReplicationGroup.DestinationDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-destinationdetails.html | AWS::ElastiCache::ReplicationGroup.DestinationDetails}
 */
export interface ElastiCacheReplicationGroupDestinationDetails {
  CloudWatchLogsDetails?: ElastiCacheReplicationGroupCloudWatchLogsDestinationDetails;
  KinesisFirehoseDetails?: ElastiCacheReplicationGroupKinesisFirehoseDestinationDetails;
}
/**
 * Type definition for AWS::ElastiCache::ReplicationGroup.KinesisFirehoseDestinationDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-kinesisfirehosedestinationdetails.html | AWS::ElastiCache::ReplicationGroup.KinesisFirehoseDestinationDetails}
 */
export interface ElastiCacheReplicationGroupKinesisFirehoseDestinationDetails {
  DeliveryStream: string;
}
/**
 * Type definition for AWS::ElastiCache::ReplicationGroup.LogDeliveryConfigurationRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-logdeliveryconfigurationrequest.html | AWS::ElastiCache::ReplicationGroup.LogDeliveryConfigurationRequest}
 */
export interface ElastiCacheReplicationGroupLogDeliveryConfigurationRequest {
  DestinationDetails: ElastiCacheReplicationGroupDestinationDetails;
  DestinationType: string;
  LogFormat: string;
  LogType: string;
}
/**
 * Type definition for AWS::ElastiCache::ReplicationGroup.NodeGroupConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-nodegroupconfiguration.html | AWS::ElastiCache::ReplicationGroup.NodeGroupConfiguration}
 */
export interface ElastiCacheReplicationGroupNodeGroupConfiguration {
  NodeGroupId?: string;
  PrimaryAvailabilityZone?: string;
  ReplicaAvailabilityZones?: any[];
  ReplicaCount?: number;
  Slots?: string;
}
/**
 * Type definition for AWS::ElastiCache::User.AuthenticationMode
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-user-authenticationmode.html | AWS::ElastiCache::User.AuthenticationMode}
 */
export interface ElastiCacheUserAuthenticationMode {
  Type: string;
  Passwords?: any[];
}
/**
 * Type definition for AWS::ElastiCache::CacheCluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-cache-cluster.html | AWS::ElastiCache::CacheCluster}
 */
export interface ElastiCacheCacheClusterProps {
  AZMode?: string;
  AutoMinorVersionUpgrade?: boolean;
  CacheNodeType: string;
  CacheParameterGroupName?: string;
  CacheSecurityGroupNames?: any[];
  CacheSubnetGroupName?: string;
  ClusterName?: string;
  Engine: string;
  EngineVersion?: string;
  IpDiscovery?: string;
  LogDeliveryConfigurations?: any[];
  NetworkType?: string;
  NotificationTopicArn?: string;
  NumCacheNodes: number;
  Port?: number;
  PreferredAvailabilityZone?: string;
  PreferredAvailabilityZones?: any[];
  PreferredMaintenanceWindow?: string;
  SnapshotArns?: any[];
  SnapshotName?: string;
  SnapshotRetentionLimit?: number;
  SnapshotWindow?: string;
  Tags?: Tag[];
  TransitEncryptionEnabled?: boolean;
  VpcSecurityGroupIds?: any[];
}
/**
 * Attributes type definition for AWS::ElastiCache::CacheCluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-cache-cluster.html | AWS::ElastiCache::CacheCluster}
 */
export interface ElastiCacheCacheClusterAttribs {
  "ConfigurationEndpoint.Address"?: string;
  "ConfigurationEndpoint.Port"?: string;
  "RedisEndpoint.Address"?: string;
  "RedisEndpoint.Port"?: string;
}
/**
 * Resource class for AWS::ElastiCache::CacheCluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-cache-cluster.html | AWS::ElastiCache::CacheCluster}
 */
export class ElastiCacheCacheCluster extends ResourceBase<
  "AWS::ElastiCache::CacheCluster",
  ElastiCacheCacheClusterProps,
  ElastiCacheCacheClusterAttribs
> {
  public static readonly Type = "AWS::ElastiCache::CacheCluster";
  public static readonly AttributeNames: readonly (keyof ElastiCacheCacheClusterAttribs)[] =
    [
      "ConfigurationEndpoint.Address",
      "ConfigurationEndpoint.Port",
      "RedisEndpoint.Address",
      "RedisEndpoint.Port",
    ];
  constructor(
    logicalId: string,
    properties: ElastiCacheCacheClusterProps,
    options?: ResourceOptions,
  ) {
    super(
      ElastiCacheCacheCluster.Type,
      ElastiCacheCacheCluster.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ElastiCache::GlobalReplicationGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-globalreplicationgroup.html | AWS::ElastiCache::GlobalReplicationGroup}
 */
export interface ElastiCacheGlobalReplicationGroupProps {
  GlobalReplicationGroupIdSuffix?: string;
  CacheNodeType?: string;
  EngineVersion?: string;
  GlobalReplicationGroupDescription?: string;
  RegionalConfigurations?: any[];
  CacheParameterGroupName?: string;
  Members: any[];
  AutomaticFailoverEnabled?: boolean;
  GlobalNodeGroupCount?: number;
}
/**
 * Attributes type definition for AWS::ElastiCache::GlobalReplicationGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-globalreplicationgroup.html | AWS::ElastiCache::GlobalReplicationGroup}
 */
export interface ElastiCacheGlobalReplicationGroupAttribs {
  Status?: string;
  GlobalReplicationGroupId?: string;
}
/**
 * Resource class for AWS::ElastiCache::GlobalReplicationGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-globalreplicationgroup.html | AWS::ElastiCache::GlobalReplicationGroup}
 */
export class ElastiCacheGlobalReplicationGroup extends ResourceBase<
  "AWS::ElastiCache::GlobalReplicationGroup",
  ElastiCacheGlobalReplicationGroupProps,
  ElastiCacheGlobalReplicationGroupAttribs
> {
  public static readonly Type = "AWS::ElastiCache::GlobalReplicationGroup";
  public static readonly AttributeNames: readonly (keyof ElastiCacheGlobalReplicationGroupAttribs)[] =
    ["Status", "GlobalReplicationGroupId"];
  constructor(
    logicalId: string,
    properties: ElastiCacheGlobalReplicationGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      ElastiCacheGlobalReplicationGroup.Type,
      ElastiCacheGlobalReplicationGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ElastiCache::ParameterGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-parameter-group.html | AWS::ElastiCache::ParameterGroup}
 */
export interface ElastiCacheParameterGroupProps {
  CacheParameterGroupFamily: string;
  Description: string;
  Properties?: Record<string, any>;
  Tags?: Tag[];
}
/**
 * Resource class for AWS::ElastiCache::ParameterGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-parameter-group.html | AWS::ElastiCache::ParameterGroup}
 */
export class ElastiCacheParameterGroup extends ResourceBase<
  "AWS::ElastiCache::ParameterGroup",
  ElastiCacheParameterGroupProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::ElastiCache::ParameterGroup";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ElastiCacheParameterGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      ElastiCacheParameterGroup.Type,
      ElastiCacheParameterGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ElastiCache::ReplicationGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html | AWS::ElastiCache::ReplicationGroup}
 */
export interface ElastiCacheReplicationGroupProps {
  AtRestEncryptionEnabled?: boolean;
  AuthToken?: string;
  AutoMinorVersionUpgrade?: boolean;
  AutomaticFailoverEnabled?: boolean;
  CacheNodeType?: string;
  CacheParameterGroupName?: string;
  CacheSecurityGroupNames?: any[];
  CacheSubnetGroupName?: string;
  ClusterMode?: string;
  DataTieringEnabled?: boolean;
  Engine?: string;
  EngineVersion?: string;
  GlobalReplicationGroupId?: string;
  IpDiscovery?: string;
  KmsKeyId?: string;
  LogDeliveryConfigurations?: any[];
  MultiAZEnabled?: boolean;
  NetworkType?: string;
  NodeGroupConfiguration?: any[];
  NotificationTopicArn?: string;
  NumCacheClusters?: number;
  NumNodeGroups?: number;
  Port?: number;
  PreferredCacheClusterAZs?: any[];
  PreferredMaintenanceWindow?: string;
  PrimaryClusterId?: string;
  ReplicasPerNodeGroup?: number;
  ReplicationGroupDescription: string;
  ReplicationGroupId?: string;
  SecurityGroupIds?: any[];
  SnapshotArns?: any[];
  SnapshotName?: string;
  SnapshotRetentionLimit?: number;
  SnapshotWindow?: string;
  SnapshottingClusterId?: string;
  Tags?: Tag[];
  TransitEncryptionEnabled?: boolean;
  TransitEncryptionMode?: string;
  UserGroupIds?: any[];
}
/**
 * Attributes type definition for AWS::ElastiCache::ReplicationGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html | AWS::ElastiCache::ReplicationGroup}
 */
export interface ElastiCacheReplicationGroupAttribs {
  "ConfigurationEndPoint.Address"?: string;
  "ConfigurationEndPoint.Port"?: string;
  "PrimaryEndPoint.Address"?: string;
  "PrimaryEndPoint.Port"?: string;
  "ReadEndPoint.Addresses"?: string;
  "ReadEndPoint.Addresses.List"?: any[];
  "ReadEndPoint.Ports"?: string;
  "ReadEndPoint.Ports.List"?: any[];
  "ReaderEndPoint.Address"?: string;
  "ReaderEndPoint.Port"?: string;
}
/**
 * Resource class for AWS::ElastiCache::ReplicationGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html | AWS::ElastiCache::ReplicationGroup}
 */
export class ElastiCacheReplicationGroup extends ResourceBase<
  "AWS::ElastiCache::ReplicationGroup",
  ElastiCacheReplicationGroupProps,
  ElastiCacheReplicationGroupAttribs
> {
  public static readonly Type = "AWS::ElastiCache::ReplicationGroup";
  public static readonly AttributeNames: readonly (keyof ElastiCacheReplicationGroupAttribs)[] =
    [
      "ConfigurationEndPoint.Address",
      "ConfigurationEndPoint.Port",
      "PrimaryEndPoint.Address",
      "PrimaryEndPoint.Port",
      "ReadEndPoint.Addresses",
      "ReadEndPoint.Addresses.List",
      "ReadEndPoint.Ports",
      "ReadEndPoint.Ports.List",
      "ReaderEndPoint.Address",
      "ReaderEndPoint.Port",
    ];
  constructor(
    logicalId: string,
    properties: ElastiCacheReplicationGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      ElastiCacheReplicationGroup.Type,
      ElastiCacheReplicationGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ElastiCache::SecurityGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-security-group.html | AWS::ElastiCache::SecurityGroup}
 */
export interface ElastiCacheSecurityGroupProps {
  Description: string;
  Tags?: Tag[];
}
/**
 * Resource class for AWS::ElastiCache::SecurityGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-security-group.html | AWS::ElastiCache::SecurityGroup}
 */
export class ElastiCacheSecurityGroup extends ResourceBase<
  "AWS::ElastiCache::SecurityGroup",
  ElastiCacheSecurityGroupProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::ElastiCache::SecurityGroup";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ElastiCacheSecurityGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      ElastiCacheSecurityGroup.Type,
      ElastiCacheSecurityGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ElastiCache::SecurityGroupIngress
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-security-group-ingress.html | AWS::ElastiCache::SecurityGroupIngress}
 */
export interface ElastiCacheSecurityGroupIngressProps {
  CacheSecurityGroupName: string;
  EC2SecurityGroupName: string;
  EC2SecurityGroupOwnerId?: string;
}
/**
 * Resource class for AWS::ElastiCache::SecurityGroupIngress
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-security-group-ingress.html | AWS::ElastiCache::SecurityGroupIngress}
 */
export class ElastiCacheSecurityGroupIngress extends ResourceBase<
  "AWS::ElastiCache::SecurityGroupIngress",
  ElastiCacheSecurityGroupIngressProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::ElastiCache::SecurityGroupIngress";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ElastiCacheSecurityGroupIngressProps,
    options?: ResourceOptions,
  ) {
    super(
      ElastiCacheSecurityGroupIngress.Type,
      ElastiCacheSecurityGroupIngress.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ElastiCache::SubnetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-subnetgroup.html | AWS::ElastiCache::SubnetGroup}
 */
export interface ElastiCacheSubnetGroupProps {
  Description: string;
  CacheSubnetGroupName?: string;
  SubnetIds: any[];
  Tags?: Tag[];
}
/**
 * Resource class for AWS::ElastiCache::SubnetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-subnetgroup.html | AWS::ElastiCache::SubnetGroup}
 */
export class ElastiCacheSubnetGroup extends ResourceBase<
  "AWS::ElastiCache::SubnetGroup",
  ElastiCacheSubnetGroupProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::ElastiCache::SubnetGroup";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ElastiCacheSubnetGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      ElastiCacheSubnetGroup.Type,
      ElastiCacheSubnetGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ElastiCache::User
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-user.html | AWS::ElastiCache::User}
 */
export interface ElastiCacheUserProps {
  AuthenticationMode?: ElastiCacheUserAuthenticationMode;
  UserName: string;
  NoPasswordRequired?: boolean;
  AccessString?: string;
  UserId: string;
  Passwords?: any[];
  Engine: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::ElastiCache::User
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-user.html | AWS::ElastiCache::User}
 */
export interface ElastiCacheUserAttribs {
  Status?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::ElastiCache::User
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-user.html | AWS::ElastiCache::User}
 */
export class ElastiCacheUser extends ResourceBase<
  "AWS::ElastiCache::User",
  ElastiCacheUserProps,
  ElastiCacheUserAttribs
> {
  public static readonly Type = "AWS::ElastiCache::User";
  public static readonly AttributeNames: readonly (keyof ElastiCacheUserAttribs)[] =
    ["Status", "Arn"];
  constructor(
    logicalId: string,
    properties: ElastiCacheUserProps,
    options?: ResourceOptions,
  ) {
    super(
      ElastiCacheUser.Type,
      ElastiCacheUser.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ElastiCache::UserGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-usergroup.html | AWS::ElastiCache::UserGroup}
 */
export interface ElastiCacheUserGroupProps {
  UserGroupId: string;
  Engine: string;
  UserIds: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::ElastiCache::UserGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-usergroup.html | AWS::ElastiCache::UserGroup}
 */
export interface ElastiCacheUserGroupAttribs {
  Status?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::ElastiCache::UserGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-usergroup.html | AWS::ElastiCache::UserGroup}
 */
export class ElastiCacheUserGroup extends ResourceBase<
  "AWS::ElastiCache::UserGroup",
  ElastiCacheUserGroupProps,
  ElastiCacheUserGroupAttribs
> {
  public static readonly Type = "AWS::ElastiCache::UserGroup";
  public static readonly AttributeNames: readonly (keyof ElastiCacheUserGroupAttribs)[] =
    ["Status", "Arn"];
  constructor(
    logicalId: string,
    properties: ElastiCacheUserGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      ElastiCacheUserGroup.Type,
      ElastiCacheUserGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
