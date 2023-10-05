import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::KafkaConnect::Connector.ApacheKafkaCluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-apachekafkacluster.html | AWS::KafkaConnect::Connector.ApacheKafkaCluster}
 */
export interface KafkaConnectConnectorApacheKafkaCluster {
  Vpc: KafkaConnectConnectorVpc;
  BootstrapServers: string;
}
/**
 * Type definition for AWS::KafkaConnect::Connector.AutoScaling
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-autoscaling.html | AWS::KafkaConnect::Connector.AutoScaling}
 */
export interface KafkaConnectConnectorAutoScaling {
  ScaleOutPolicy: KafkaConnectConnectorScaleOutPolicy;
  ScaleInPolicy: KafkaConnectConnectorScaleInPolicy;
  MaxWorkerCount: number;
  MinWorkerCount: number;
  McuCount: number;
}
/**
 * Type definition for AWS::KafkaConnect::Connector.Capacity
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-capacity.html | AWS::KafkaConnect::Connector.Capacity}
 */
export interface KafkaConnectConnectorCapacity {
  ProvisionedCapacity?: KafkaConnectConnectorProvisionedCapacity;
  AutoScaling?: KafkaConnectConnectorAutoScaling;
}
/**
 * Type definition for AWS::KafkaConnect::Connector.CloudWatchLogsLogDelivery
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-cloudwatchlogslogdelivery.html | AWS::KafkaConnect::Connector.CloudWatchLogsLogDelivery}
 */
export interface KafkaConnectConnectorCloudWatchLogsLogDelivery {
  LogGroup?: string;
  Enabled: boolean;
}
/**
 * Type definition for AWS::KafkaConnect::Connector.CustomPlugin
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-customplugin.html | AWS::KafkaConnect::Connector.CustomPlugin}
 */
export interface KafkaConnectConnectorCustomPlugin {
  CustomPluginArn: string;
  Revision: number;
}
/**
 * Type definition for AWS::KafkaConnect::Connector.FirehoseLogDelivery
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-firehoselogdelivery.html | AWS::KafkaConnect::Connector.FirehoseLogDelivery}
 */
export interface KafkaConnectConnectorFirehoseLogDelivery {
  DeliveryStream?: string;
  Enabled: boolean;
}
/**
 * Type definition for AWS::KafkaConnect::Connector.KafkaCluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-kafkacluster.html | AWS::KafkaConnect::Connector.KafkaCluster}
 */
export interface KafkaConnectConnectorKafkaCluster {
  ApacheKafkaCluster: KafkaConnectConnectorApacheKafkaCluster;
}
/**
 * Type definition for AWS::KafkaConnect::Connector.KafkaClusterClientAuthentication
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-kafkaclusterclientauthentication.html | AWS::KafkaConnect::Connector.KafkaClusterClientAuthentication}
 */
export interface KafkaConnectConnectorKafkaClusterClientAuthentication {
  AuthenticationType: string;
}
/**
 * Type definition for AWS::KafkaConnect::Connector.KafkaClusterEncryptionInTransit
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-kafkaclusterencryptionintransit.html | AWS::KafkaConnect::Connector.KafkaClusterEncryptionInTransit}
 */
export interface KafkaConnectConnectorKafkaClusterEncryptionInTransit {
  EncryptionType: string;
}
/**
 * Type definition for AWS::KafkaConnect::Connector.LogDelivery
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-logdelivery.html | AWS::KafkaConnect::Connector.LogDelivery}
 */
export interface KafkaConnectConnectorLogDelivery {
  WorkerLogDelivery: KafkaConnectConnectorWorkerLogDelivery;
}
/**
 * Type definition for AWS::KafkaConnect::Connector.Plugin
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-plugin.html | AWS::KafkaConnect::Connector.Plugin}
 */
export interface KafkaConnectConnectorPlugin {
  CustomPlugin: KafkaConnectConnectorCustomPlugin;
}
/**
 * Type definition for AWS::KafkaConnect::Connector.ProvisionedCapacity
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-provisionedcapacity.html | AWS::KafkaConnect::Connector.ProvisionedCapacity}
 */
export interface KafkaConnectConnectorProvisionedCapacity {
  WorkerCount: number;
  McuCount?: number;
}
/**
 * Type definition for AWS::KafkaConnect::Connector.S3LogDelivery
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-s3logdelivery.html | AWS::KafkaConnect::Connector.S3LogDelivery}
 */
export interface KafkaConnectConnectorS3LogDelivery {
  Bucket?: string;
  Enabled: boolean;
  Prefix?: string;
}
/**
 * Type definition for AWS::KafkaConnect::Connector.ScaleInPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-scaleinpolicy.html | AWS::KafkaConnect::Connector.ScaleInPolicy}
 */
export interface KafkaConnectConnectorScaleInPolicy {
  CpuUtilizationPercentage: number;
}
/**
 * Type definition for AWS::KafkaConnect::Connector.ScaleOutPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-scaleoutpolicy.html | AWS::KafkaConnect::Connector.ScaleOutPolicy}
 */
export interface KafkaConnectConnectorScaleOutPolicy {
  CpuUtilizationPercentage: number;
}
/**
 * Type definition for AWS::KafkaConnect::Connector.Vpc
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-vpc.html | AWS::KafkaConnect::Connector.Vpc}
 */
export interface KafkaConnectConnectorVpc {
  SecurityGroups: any[];
  Subnets: any[];
}
/**
 * Type definition for AWS::KafkaConnect::Connector.WorkerConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-workerconfiguration.html | AWS::KafkaConnect::Connector.WorkerConfiguration}
 */
export interface KafkaConnectConnectorWorkerConfiguration {
  Revision: number;
  WorkerConfigurationArn: string;
}
/**
 * Type definition for AWS::KafkaConnect::Connector.WorkerLogDelivery
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-workerlogdelivery.html | AWS::KafkaConnect::Connector.WorkerLogDelivery}
 */
export interface KafkaConnectConnectorWorkerLogDelivery {
  S3?: KafkaConnectConnectorS3LogDelivery;
  Firehose?: KafkaConnectConnectorFirehoseLogDelivery;
  CloudWatchLogs?: KafkaConnectConnectorCloudWatchLogsLogDelivery;
}
/**
 * Type definition for AWS::KafkaConnect::Connector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html | AWS::KafkaConnect::Connector}
 */
export interface KafkaConnectConnectorProps {
  KafkaCluster: KafkaConnectConnectorKafkaCluster;
  KafkaConnectVersion: string;
  WorkerConfiguration?: KafkaConnectConnectorWorkerConfiguration;
  Capacity: KafkaConnectConnectorCapacity;
  KafkaClusterEncryptionInTransit: KafkaConnectConnectorKafkaClusterEncryptionInTransit;
  ConnectorDescription?: string;
  KafkaClusterClientAuthentication: KafkaConnectConnectorKafkaClusterClientAuthentication;
  ConnectorName: string;
  ServiceExecutionRoleArn: string;
  ConnectorConfiguration: Record<string, any>;
  LogDelivery?: KafkaConnectConnectorLogDelivery;
  Plugins: any[];
}
/**
 * Attributes type definition for AWS::KafkaConnect::Connector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html | AWS::KafkaConnect::Connector}
 */
export interface KafkaConnectConnectorAttribs {
  ConnectorArn?: string;
}
/**
 * Resource class for AWS::KafkaConnect::Connector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html | AWS::KafkaConnect::Connector}
 */
export class KafkaConnectConnector extends ResourceBase<
  "AWS::KafkaConnect::Connector",
  KafkaConnectConnectorProps,
  KafkaConnectConnectorAttribs
> {
  public static readonly Type = "AWS::KafkaConnect::Connector";
  public static readonly AttributeNames: readonly (keyof KafkaConnectConnectorAttribs)[] =
    ["ConnectorArn"];
  constructor(
    logicalId: string,
    properties: KafkaConnectConnectorProps,
    options?: ResourceOptions,
  ) {
    super(
      KafkaConnectConnector.Type,
      KafkaConnectConnector.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
