import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::AmazonMQ::Broker.ConfigurationId
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-configurationid.html | AWS::AmazonMQ::Broker.ConfigurationId}
 */
export interface AmazonMQBrokerConfigurationId {
  Revision: number;
  Id: string;
}
/**
 * Type definition for AWS::AmazonMQ::Broker.EncryptionOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-encryptionoptions.html | AWS::AmazonMQ::Broker.EncryptionOptions}
 */
export interface AmazonMQBrokerEncryptionOptions {
  KmsKeyId?: string;
  UseAwsOwnedKey: boolean;
}
/**
 * Type definition for AWS::AmazonMQ::Broker.LdapServerMetadata
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-ldapservermetadata.html | AWS::AmazonMQ::Broker.LdapServerMetadata}
 */
export interface AmazonMQBrokerLdapServerMetadata {
  Hosts: any[];
  UserRoleName?: string;
  UserSearchMatching: string;
  RoleName?: string;
  UserBase: string;
  UserSearchSubtree?: boolean;
  RoleSearchMatching: string;
  ServiceAccountUsername: string;
  RoleBase: string;
  ServiceAccountPassword: string;
  RoleSearchSubtree?: boolean;
}
/**
 * Type definition for AWS::AmazonMQ::Broker.LogList
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-loglist.html | AWS::AmazonMQ::Broker.LogList}
 */
export interface AmazonMQBrokerLogList {
  Audit?: boolean;
  General?: boolean;
}
/**
 * Type definition for AWS::AmazonMQ::Broker.MaintenanceWindow
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-maintenancewindow.html | AWS::AmazonMQ::Broker.MaintenanceWindow}
 */
export interface AmazonMQBrokerMaintenanceWindow {
  DayOfWeek: string;
  TimeOfDay: string;
  TimeZone: string;
}
/**
 * Type definition for AWS::AmazonMQ::Broker.TagsEntry
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-tagsentry.html | AWS::AmazonMQ::Broker.TagsEntry}
 */
export interface AmazonMQBrokerTagsEntry {
  Value: string;
  Key: string;
}
/**
 * Type definition for AWS::AmazonMQ::Broker.User
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-user.html | AWS::AmazonMQ::Broker.User}
 */
export interface AmazonMQBrokerUser {
  Username: string;
  Groups?: any[];
  ConsoleAccess?: boolean;
  Password: string;
}
/**
 * Type definition for AWS::AmazonMQ::Configuration.TagsEntry
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-configuration-tagsentry.html | AWS::AmazonMQ::Configuration.TagsEntry}
 */
export interface AmazonMQConfigurationTagsEntry {
  Value: string;
  Key: string;
}
/**
 * Type definition for AWS::AmazonMQ::ConfigurationAssociation.ConfigurationId
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-configurationassociation-configurationid.html | AWS::AmazonMQ::ConfigurationAssociation.ConfigurationId}
 */
export interface AmazonMQConfigurationAssociationConfigurationId {
  Revision: number;
  Id: string;
}
/**
 * Type definition for AWS::AmazonMQ::Broker
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html | AWS::AmazonMQ::Broker}
 */
export interface AmazonMQBrokerProps {
  SecurityGroups?: any[];
  DataReplicationPrimaryBrokerArn?: string;
  StorageType?: string;
  EngineVersion: string;
  Configuration?: AmazonMQBrokerConfigurationId;
  AuthenticationStrategy?: string;
  MaintenanceWindowStartTime?: AmazonMQBrokerMaintenanceWindow;
  HostInstanceType: string;
  AutoMinorVersionUpgrade: boolean;
  Users: any[];
  Logs?: AmazonMQBrokerLogList;
  SubnetIds?: any[];
  DataReplicationMode?: string;
  BrokerName: string;
  LdapServerMetadata?: AmazonMQBrokerLdapServerMetadata;
  DeploymentMode: string;
  EngineType: string;
  PubliclyAccessible: boolean;
  EncryptionOptions?: AmazonMQBrokerEncryptionOptions;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::AmazonMQ::Broker
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html | AWS::AmazonMQ::Broker}
 */
export interface AmazonMQBrokerAttribs {
  IpAddresses?: any[];
  OpenWireEndpoints?: any[];
  ConfigurationRevision?: number;
  StompEndpoints?: any[];
  MqttEndpoints?: any[];
  AmqpEndpoints?: any[];
  Arn?: string;
  ConfigurationId?: string;
  WssEndpoints?: any[];
}
/**
 * Resource class for AWS::AmazonMQ::Broker
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html | AWS::AmazonMQ::Broker}
 */
export class AmazonMQBroker extends ResourceBase<
  "AWS::AmazonMQ::Broker",
  AmazonMQBrokerProps,
  AmazonMQBrokerAttribs
> {
  public static readonly Type = "AWS::AmazonMQ::Broker";
  public static readonly AttributeNames: readonly (keyof AmazonMQBrokerAttribs)[] =
    [
      "IpAddresses",
      "OpenWireEndpoints",
      "ConfigurationRevision",
      "StompEndpoints",
      "MqttEndpoints",
      "AmqpEndpoints",
      "Arn",
      "ConfigurationId",
      "WssEndpoints",
    ];
  constructor(
    logicalId: string,
    properties: AmazonMQBrokerProps,
    options?: ResourceOptions,
  ) {
    super(
      AmazonMQBroker.Type,
      AmazonMQBroker.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AmazonMQ::Configuration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configuration.html | AWS::AmazonMQ::Configuration}
 */
export interface AmazonMQConfigurationProps {
  EngineVersion: string;
  Description?: string;
  AuthenticationStrategy?: string;
  EngineType: string;
  Data: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::AmazonMQ::Configuration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configuration.html | AWS::AmazonMQ::Configuration}
 */
export interface AmazonMQConfigurationAttribs {
  Revision?: number;
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::AmazonMQ::Configuration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configuration.html | AWS::AmazonMQ::Configuration}
 */
export class AmazonMQConfiguration extends ResourceBase<
  "AWS::AmazonMQ::Configuration",
  AmazonMQConfigurationProps,
  AmazonMQConfigurationAttribs
> {
  public static readonly Type = "AWS::AmazonMQ::Configuration";
  public static readonly AttributeNames: readonly (keyof AmazonMQConfigurationAttribs)[] =
    ["Revision", "Id", "Arn"];
  constructor(
    logicalId: string,
    properties: AmazonMQConfigurationProps,
    options?: ResourceOptions,
  ) {
    super(
      AmazonMQConfiguration.Type,
      AmazonMQConfiguration.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AmazonMQ::ConfigurationAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configurationassociation.html | AWS::AmazonMQ::ConfigurationAssociation}
 */
export interface AmazonMQConfigurationAssociationProps {
  Broker: string;
  Configuration: AmazonMQConfigurationAssociationConfigurationId;
}
/**
 * Resource class for AWS::AmazonMQ::ConfigurationAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configurationassociation.html | AWS::AmazonMQ::ConfigurationAssociation}
 */
export class AmazonMQConfigurationAssociation extends ResourceBase<
  "AWS::AmazonMQ::ConfigurationAssociation",
  AmazonMQConfigurationAssociationProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::AmazonMQ::ConfigurationAssociation";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: AmazonMQConfigurationAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      AmazonMQConfigurationAssociation.Type,
      AmazonMQConfigurationAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
