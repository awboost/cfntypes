import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::MSK::Cluster.BrokerLogs
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-brokerlogs.html | AWS::MSK::Cluster.BrokerLogs}
 */
export interface MSKClusterBrokerLogs {
  S3?: MSKClusterS3;
  Firehose?: MSKClusterFirehose;
  CloudWatchLogs?: MSKClusterCloudWatchLogs;
}
/**
 * Type definition for AWS::MSK::Cluster.BrokerNodeGroupInfo
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-brokernodegroupinfo.html | AWS::MSK::Cluster.BrokerNodeGroupInfo}
 */
export interface MSKClusterBrokerNodeGroupInfo {
  SecurityGroups?: any[];
  ClientSubnets: any[];
  ConnectivityInfo?: MSKClusterConnectivityInfo;
  StorageInfo?: MSKClusterStorageInfo;
  BrokerAZDistribution?: string;
  InstanceType: string;
}
/**
 * Type definition for AWS::MSK::Cluster.ClientAuthentication
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-clientauthentication.html | AWS::MSK::Cluster.ClientAuthentication}
 */
export interface MSKClusterClientAuthentication {
  Sasl?: MSKClusterSasl;
  Unauthenticated?: MSKClusterUnauthenticated;
  Tls?: MSKClusterTls;
}
/**
 * Type definition for AWS::MSK::Cluster.CloudWatchLogs
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-cloudwatchlogs.html | AWS::MSK::Cluster.CloudWatchLogs}
 */
export interface MSKClusterCloudWatchLogs {
  LogGroup?: string;
  Enabled: boolean;
}
/**
 * Type definition for AWS::MSK::Cluster.ConfigurationInfo
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-configurationinfo.html | AWS::MSK::Cluster.ConfigurationInfo}
 */
export interface MSKClusterConfigurationInfo {
  Revision: number;
  Arn: string;
}
/**
 * Type definition for AWS::MSK::Cluster.ConnectivityInfo
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-connectivityinfo.html | AWS::MSK::Cluster.ConnectivityInfo}
 */
export interface MSKClusterConnectivityInfo {
  VpcConnectivity?: MSKClusterVpcConnectivity;
  PublicAccess?: MSKClusterPublicAccess;
}
/**
 * Type definition for AWS::MSK::Cluster.EBSStorageInfo
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-ebsstorageinfo.html | AWS::MSK::Cluster.EBSStorageInfo}
 */
export interface MSKClusterEBSStorageInfo {
  ProvisionedThroughput?: MSKClusterProvisionedThroughput;
  VolumeSize?: number;
}
/**
 * Type definition for AWS::MSK::Cluster.EncryptionAtRest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-encryptionatrest.html | AWS::MSK::Cluster.EncryptionAtRest}
 */
export interface MSKClusterEncryptionAtRest {
  DataVolumeKMSKeyId: string;
}
/**
 * Type definition for AWS::MSK::Cluster.EncryptionInTransit
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-encryptionintransit.html | AWS::MSK::Cluster.EncryptionInTransit}
 */
export interface MSKClusterEncryptionInTransit {
  ClientBroker?: string;
  InCluster?: boolean;
}
/**
 * Type definition for AWS::MSK::Cluster.EncryptionInfo
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-encryptioninfo.html | AWS::MSK::Cluster.EncryptionInfo}
 */
export interface MSKClusterEncryptionInfo {
  EncryptionAtRest?: MSKClusterEncryptionAtRest;
  EncryptionInTransit?: MSKClusterEncryptionInTransit;
}
/**
 * Type definition for AWS::MSK::Cluster.Firehose
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-firehose.html | AWS::MSK::Cluster.Firehose}
 */
export interface MSKClusterFirehose {
  DeliveryStream?: string;
  Enabled: boolean;
}
/**
 * Type definition for AWS::MSK::Cluster.Iam
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-iam.html | AWS::MSK::Cluster.Iam}
 */
export interface MSKClusterIam {
  Enabled: boolean;
}
/**
 * Type definition for AWS::MSK::Cluster.JmxExporter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-jmxexporter.html | AWS::MSK::Cluster.JmxExporter}
 */
export interface MSKClusterJmxExporter {
  EnabledInBroker: boolean;
}
/**
 * Type definition for AWS::MSK::Cluster.LoggingInfo
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-logginginfo.html | AWS::MSK::Cluster.LoggingInfo}
 */
export interface MSKClusterLoggingInfo {
  BrokerLogs: MSKClusterBrokerLogs;
}
/**
 * Type definition for AWS::MSK::Cluster.NodeExporter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-nodeexporter.html | AWS::MSK::Cluster.NodeExporter}
 */
export interface MSKClusterNodeExporter {
  EnabledInBroker: boolean;
}
/**
 * Type definition for AWS::MSK::Cluster.OpenMonitoring
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-openmonitoring.html | AWS::MSK::Cluster.OpenMonitoring}
 */
export interface MSKClusterOpenMonitoring {
  Prometheus: MSKClusterPrometheus;
}
/**
 * Type definition for AWS::MSK::Cluster.Prometheus
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-prometheus.html | AWS::MSK::Cluster.Prometheus}
 */
export interface MSKClusterPrometheus {
  JmxExporter?: MSKClusterJmxExporter;
  NodeExporter?: MSKClusterNodeExporter;
}
/**
 * Type definition for AWS::MSK::Cluster.ProvisionedThroughput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-provisionedthroughput.html | AWS::MSK::Cluster.ProvisionedThroughput}
 */
export interface MSKClusterProvisionedThroughput {
  VolumeThroughput?: number;
  Enabled?: boolean;
}
/**
 * Type definition for AWS::MSK::Cluster.PublicAccess
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-publicaccess.html | AWS::MSK::Cluster.PublicAccess}
 */
export interface MSKClusterPublicAccess {
  Type?: string;
}
/**
 * Type definition for AWS::MSK::Cluster.S3
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-s3.html | AWS::MSK::Cluster.S3}
 */
export interface MSKClusterS3 {
  Bucket?: string;
  Enabled: boolean;
  Prefix?: string;
}
/**
 * Type definition for AWS::MSK::Cluster.Sasl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-sasl.html | AWS::MSK::Cluster.Sasl}
 */
export interface MSKClusterSasl {
  Iam?: MSKClusterIam;
  Scram?: MSKClusterScram;
}
/**
 * Type definition for AWS::MSK::Cluster.Scram
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-scram.html | AWS::MSK::Cluster.Scram}
 */
export interface MSKClusterScram {
  Enabled: boolean;
}
/**
 * Type definition for AWS::MSK::Cluster.StorageInfo
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-storageinfo.html | AWS::MSK::Cluster.StorageInfo}
 */
export interface MSKClusterStorageInfo {
  EBSStorageInfo?: MSKClusterEBSStorageInfo;
}
/**
 * Type definition for AWS::MSK::Cluster.Tls
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-tls.html | AWS::MSK::Cluster.Tls}
 */
export interface MSKClusterTls {
  Enabled?: boolean;
  CertificateAuthorityArnList?: any[];
}
/**
 * Type definition for AWS::MSK::Cluster.Unauthenticated
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-unauthenticated.html | AWS::MSK::Cluster.Unauthenticated}
 */
export interface MSKClusterUnauthenticated {
  Enabled: boolean;
}
/**
 * Type definition for AWS::MSK::Cluster.VpcConnectivity
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-vpcconnectivity.html | AWS::MSK::Cluster.VpcConnectivity}
 */
export interface MSKClusterVpcConnectivity {
  ClientAuthentication?: MSKClusterVpcConnectivityClientAuthentication;
}
/**
 * Type definition for AWS::MSK::Cluster.VpcConnectivityClientAuthentication
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-vpcconnectivityclientauthentication.html | AWS::MSK::Cluster.VpcConnectivityClientAuthentication}
 */
export interface MSKClusterVpcConnectivityClientAuthentication {
  Sasl?: MSKClusterVpcConnectivitySasl;
  Tls?: MSKClusterVpcConnectivityTls;
}
/**
 * Type definition for AWS::MSK::Cluster.VpcConnectivityIam
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-vpcconnectivityiam.html | AWS::MSK::Cluster.VpcConnectivityIam}
 */
export interface MSKClusterVpcConnectivityIam {
  Enabled: boolean;
}
/**
 * Type definition for AWS::MSK::Cluster.VpcConnectivitySasl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-vpcconnectivitysasl.html | AWS::MSK::Cluster.VpcConnectivitySasl}
 */
export interface MSKClusterVpcConnectivitySasl {
  Iam?: MSKClusterVpcConnectivityIam;
  Scram?: MSKClusterVpcConnectivityScram;
}
/**
 * Type definition for AWS::MSK::Cluster.VpcConnectivityScram
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-vpcconnectivityscram.html | AWS::MSK::Cluster.VpcConnectivityScram}
 */
export interface MSKClusterVpcConnectivityScram {
  Enabled: boolean;
}
/**
 * Type definition for AWS::MSK::Cluster.VpcConnectivityTls
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-vpcconnectivitytls.html | AWS::MSK::Cluster.VpcConnectivityTls}
 */
export interface MSKClusterVpcConnectivityTls {
  Enabled: boolean;
}
/**
 * Type definition for AWS::MSK::Configuration.LatestRevision
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-configuration-latestrevision.html | AWS::MSK::Configuration.LatestRevision}
 */
export interface MSKConfigurationLatestRevision {
  Description?: string;
  Revision?: number;
  CreationTime?: string;
}
/**
 * Type definition for AWS::MSK::Replicator.AmazonMskCluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-amazonmskcluster.html | AWS::MSK::Replicator.AmazonMskCluster}
 */
export interface MSKReplicatorAmazonMskCluster {
  MskClusterArn: string;
}
/**
 * Type definition for AWS::MSK::Replicator.ConsumerGroupReplication
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-consumergroupreplication.html | AWS::MSK::Replicator.ConsumerGroupReplication}
 */
export interface MSKReplicatorConsumerGroupReplication {
  ConsumerGroupsToReplicate: any[];
  ConsumerGroupsToExclude?: any[];
  SynchroniseConsumerGroupOffsets?: boolean;
  DetectAndCopyNewConsumerGroups?: boolean;
}
/**
 * Type definition for AWS::MSK::Replicator.KafkaCluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-kafkacluster.html | AWS::MSK::Replicator.KafkaCluster}
 */
export interface MSKReplicatorKafkaCluster {
  VpcConfig: MSKReplicatorKafkaClusterClientVpcConfig;
  AmazonMskCluster: MSKReplicatorAmazonMskCluster;
}
/**
 * Type definition for AWS::MSK::Replicator.KafkaClusterClientVpcConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-kafkaclusterclientvpcconfig.html | AWS::MSK::Replicator.KafkaClusterClientVpcConfig}
 */
export interface MSKReplicatorKafkaClusterClientVpcConfig {
  SecurityGroupIds?: any[];
  SubnetIds: any[];
}
/**
 * Type definition for AWS::MSK::Replicator.ReplicationInfo
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-replicationinfo.html | AWS::MSK::Replicator.ReplicationInfo}
 */
export interface MSKReplicatorReplicationInfo {
  TargetCompressionType: string;
  TopicReplication: MSKReplicatorTopicReplication;
  ConsumerGroupReplication: MSKReplicatorConsumerGroupReplication;
  SourceKafkaClusterArn: string;
  TargetKafkaClusterArn: string;
}
/**
 * Type definition for AWS::MSK::Replicator.TopicReplication
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-topicreplication.html | AWS::MSK::Replicator.TopicReplication}
 */
export interface MSKReplicatorTopicReplication {
  TopicsToReplicate: any[];
  TopicsToExclude?: any[];
  CopyTopicConfigurations?: boolean;
  DetectAndCopyNewTopics?: boolean;
  CopyAccessControlListsForTopics?: boolean;
}
/**
 * Type definition for AWS::MSK::ServerlessCluster.ClientAuthentication
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-serverlesscluster-clientauthentication.html | AWS::MSK::ServerlessCluster.ClientAuthentication}
 */
export interface MSKServerlessClusterClientAuthentication {
  Sasl: MSKServerlessClusterSasl;
}
/**
 * Type definition for AWS::MSK::ServerlessCluster.Iam
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-serverlesscluster-iam.html | AWS::MSK::ServerlessCluster.Iam}
 */
export interface MSKServerlessClusterIam {
  Enabled: boolean;
}
/**
 * Type definition for AWS::MSK::ServerlessCluster.Sasl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-serverlesscluster-sasl.html | AWS::MSK::ServerlessCluster.Sasl}
 */
export interface MSKServerlessClusterSasl {
  Iam: MSKServerlessClusterIam;
}
/**
 * Type definition for AWS::MSK::ServerlessCluster.VpcConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-serverlesscluster-vpcconfig.html | AWS::MSK::ServerlessCluster.VpcConfig}
 */
export interface MSKServerlessClusterVpcConfig {
  SecurityGroups?: any[];
  SubnetIds: any[];
}
/**
 * Type definition for AWS::MSK::BatchScramSecret
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-batchscramsecret.html | AWS::MSK::BatchScramSecret}
 */
export interface MSKBatchScramSecretProps {
  ClusterArn: string;
  SecretArnList?: any[];
}
/**
 * Resource class for AWS::MSK::BatchScramSecret
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-batchscramsecret.html | AWS::MSK::BatchScramSecret}
 */
export class MSKBatchScramSecret extends ResourceBase<
  "AWS::MSK::BatchScramSecret",
  MSKBatchScramSecretProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::MSK::BatchScramSecret";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: MSKBatchScramSecretProps,
    options?: ResourceOptions,
  ) {
    super(
      MSKBatchScramSecret.Type,
      MSKBatchScramSecret.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::MSK::Cluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html | AWS::MSK::Cluster}
 */
export interface MSKClusterProps {
  KafkaVersion: string;
  NumberOfBrokerNodes: number;
  EncryptionInfo?: MSKClusterEncryptionInfo;
  OpenMonitoring?: MSKClusterOpenMonitoring;
  CurrentVersion?: string;
  StorageMode?: string;
  ConfigurationInfo?: MSKClusterConfigurationInfo;
  BrokerNodeGroupInfo: MSKClusterBrokerNodeGroupInfo;
  EnhancedMonitoring?: string;
  ClusterName: string;
  ClientAuthentication?: MSKClusterClientAuthentication;
  LoggingInfo?: MSKClusterLoggingInfo;
  Tags?: Record<string, Tag>;
}
/**
 * Attributes type definition for AWS::MSK::Cluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html | AWS::MSK::Cluster}
 */
export interface MSKClusterAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::MSK::Cluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html | AWS::MSK::Cluster}
 */
export class MSKCluster extends ResourceBase<
  "AWS::MSK::Cluster",
  MSKClusterProps,
  MSKClusterAttribs
> {
  public static readonly Type = "AWS::MSK::Cluster";
  public static readonly AttributeNames: readonly (keyof MSKClusterAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: MSKClusterProps,
    options?: ResourceOptions,
  ) {
    super(
      MSKCluster.Type,
      MSKCluster.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::MSK::ClusterPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-clusterpolicy.html | AWS::MSK::ClusterPolicy}
 */
export interface MSKClusterPolicyProps {
  Policy: object;
  ClusterArn: string;
}
/**
 * Attributes type definition for AWS::MSK::ClusterPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-clusterpolicy.html | AWS::MSK::ClusterPolicy}
 */
export interface MSKClusterPolicyAttribs {
  CurrentVersion?: string;
}
/**
 * Resource class for AWS::MSK::ClusterPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-clusterpolicy.html | AWS::MSK::ClusterPolicy}
 */
export class MSKClusterPolicy extends ResourceBase<
  "AWS::MSK::ClusterPolicy",
  MSKClusterPolicyProps,
  MSKClusterPolicyAttribs
> {
  public static readonly Type = "AWS::MSK::ClusterPolicy";
  public static readonly AttributeNames: readonly (keyof MSKClusterPolicyAttribs)[] =
    ["CurrentVersion"];
  constructor(
    logicalId: string,
    properties: MSKClusterPolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      MSKClusterPolicy.Type,
      MSKClusterPolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::MSK::Configuration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-configuration.html | AWS::MSK::Configuration}
 */
export interface MSKConfigurationProps {
  Description?: string;
  LatestRevision?: MSKConfigurationLatestRevision;
  ServerProperties: string;
  KafkaVersionsList?: any[];
  Name: string;
}
/**
 * Attributes type definition for AWS::MSK::Configuration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-configuration.html | AWS::MSK::Configuration}
 */
export interface MSKConfigurationAttribs {
  "LatestRevision.Revision"?: number;
  "LatestRevision.CreationTime"?: string;
  "LatestRevision.Description"?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::MSK::Configuration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-configuration.html | AWS::MSK::Configuration}
 */
export class MSKConfiguration extends ResourceBase<
  "AWS::MSK::Configuration",
  MSKConfigurationProps,
  MSKConfigurationAttribs
> {
  public static readonly Type = "AWS::MSK::Configuration";
  public static readonly AttributeNames: readonly (keyof MSKConfigurationAttribs)[] =
    [
      "LatestRevision.Revision",
      "LatestRevision.CreationTime",
      "LatestRevision.Description",
      "Arn",
    ];
  constructor(
    logicalId: string,
    properties: MSKConfigurationProps,
    options?: ResourceOptions,
  ) {
    super(
      MSKConfiguration.Type,
      MSKConfiguration.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::MSK::Replicator
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html | AWS::MSK::Replicator}
 */
export interface MSKReplicatorProps {
  Description?: string;
  CurrentVersion?: string;
  ServiceExecutionRoleArn: string;
  ReplicatorName: string;
  ReplicationInfoList: any[];
  KafkaClusters: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::MSK::Replicator
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html | AWS::MSK::Replicator}
 */
export interface MSKReplicatorAttribs {
  ReplicatorArn?: string;
}
/**
 * Resource class for AWS::MSK::Replicator
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html | AWS::MSK::Replicator}
 */
export class MSKReplicator extends ResourceBase<
  "AWS::MSK::Replicator",
  MSKReplicatorProps,
  MSKReplicatorAttribs
> {
  public static readonly Type = "AWS::MSK::Replicator";
  public static readonly AttributeNames: readonly (keyof MSKReplicatorAttribs)[] =
    ["ReplicatorArn"];
  constructor(
    logicalId: string,
    properties: MSKReplicatorProps,
    options?: ResourceOptions,
  ) {
    super(
      MSKReplicator.Type,
      MSKReplicator.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::MSK::ServerlessCluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html | AWS::MSK::ServerlessCluster}
 */
export interface MSKServerlessClusterProps {
  VpcConfigs: any[];
  ClusterName: string;
  ClientAuthentication: MSKServerlessClusterClientAuthentication;
  Tags?: Record<string, Tag>;
}
/**
 * Attributes type definition for AWS::MSK::ServerlessCluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html | AWS::MSK::ServerlessCluster}
 */
export interface MSKServerlessClusterAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::MSK::ServerlessCluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html | AWS::MSK::ServerlessCluster}
 */
export class MSKServerlessCluster extends ResourceBase<
  "AWS::MSK::ServerlessCluster",
  MSKServerlessClusterProps,
  MSKServerlessClusterAttribs
> {
  public static readonly Type = "AWS::MSK::ServerlessCluster";
  public static readonly AttributeNames: readonly (keyof MSKServerlessClusterAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: MSKServerlessClusterProps,
    options?: ResourceOptions,
  ) {
    super(
      MSKServerlessCluster.Type,
      MSKServerlessCluster.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::MSK::VpcConnection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-vpcconnection.html | AWS::MSK::VpcConnection}
 */
export interface MSKVpcConnectionProps {
  SecurityGroups: any[];
  TargetClusterArn: string;
  ClientSubnets: any[];
  VpcId: string;
  Authentication: string;
  Tags?: Record<string, Tag>;
}
/**
 * Attributes type definition for AWS::MSK::VpcConnection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-vpcconnection.html | AWS::MSK::VpcConnection}
 */
export interface MSKVpcConnectionAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::MSK::VpcConnection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-vpcconnection.html | AWS::MSK::VpcConnection}
 */
export class MSKVpcConnection extends ResourceBase<
  "AWS::MSK::VpcConnection",
  MSKVpcConnectionProps,
  MSKVpcConnectionAttribs
> {
  public static readonly Type = "AWS::MSK::VpcConnection";
  public static readonly AttributeNames: readonly (keyof MSKVpcConnectionAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: MSKVpcConnectionProps,
    options?: ResourceOptions,
  ) {
    super(
      MSKVpcConnection.Type,
      MSKVpcConnection.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
