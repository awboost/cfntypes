import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Redshift::Cluster.Endpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-cluster-endpoint.html | AWS::Redshift::Cluster.Endpoint}
 */
export interface RedshiftClusterEndpoint {
  Address?: string;
  Port?: string;
}
/**
 * Type definition for AWS::Redshift::Cluster.LoggingProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-cluster-loggingproperties.html | AWS::Redshift::Cluster.LoggingProperties}
 */
export interface RedshiftClusterLoggingProperties {
  BucketName: string;
  S3KeyPrefix?: string;
}
/**
 * Type definition for AWS::Redshift::ClusterParameterGroup.Parameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-clusterparametergroup-parameter.html | AWS::Redshift::ClusterParameterGroup.Parameter}
 */
export interface RedshiftClusterParameterGroupParameter {
  ParameterValue: string;
  ParameterName: string;
}
/**
 * Type definition for AWS::Redshift::EndpointAccess.NetworkInterface
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-endpointaccess-networkinterface.html | AWS::Redshift::EndpointAccess.NetworkInterface}
 */
export interface RedshiftEndpointAccessNetworkInterface {
  PrivateIpAddress?: string;
  AvailabilityZone?: string;
  SubnetId?: string;
  NetworkInterfaceId?: string;
}
/**
 * Type definition for AWS::Redshift::EndpointAccess.VpcEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-endpointaccess-vpcendpoint.html | AWS::Redshift::EndpointAccess.VpcEndpoint}
 */
export interface RedshiftEndpointAccessVpcEndpoint {
  VpcId?: string;
  NetworkInterfaces?: any[];
  VpcEndpointId?: string;
}
/**
 * Type definition for AWS::Redshift::EndpointAccess.VpcSecurityGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-endpointaccess-vpcsecuritygroup.html | AWS::Redshift::EndpointAccess.VpcSecurityGroup}
 */
export interface RedshiftEndpointAccessVpcSecurityGroup {
  Status?: string;
  VpcSecurityGroupId?: string;
}
/**
 * Type definition for AWS::Redshift::ScheduledAction.PauseClusterMessage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-scheduledaction-pauseclustermessage.html | AWS::Redshift::ScheduledAction.PauseClusterMessage}
 */
export interface RedshiftScheduledActionPauseClusterMessage {
  ClusterIdentifier: string;
}
/**
 * Type definition for AWS::Redshift::ScheduledAction.ResizeClusterMessage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-scheduledaction-resizeclustermessage.html | AWS::Redshift::ScheduledAction.ResizeClusterMessage}
 */
export interface RedshiftScheduledActionResizeClusterMessage {
  NodeType?: string;
  NumberOfNodes?: number;
  ClusterType?: string;
  Classic?: boolean;
  ClusterIdentifier: string;
}
/**
 * Type definition for AWS::Redshift::ScheduledAction.ResumeClusterMessage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-scheduledaction-resumeclustermessage.html | AWS::Redshift::ScheduledAction.ResumeClusterMessage}
 */
export interface RedshiftScheduledActionResumeClusterMessage {
  ClusterIdentifier: string;
}
/**
 * Type definition for AWS::Redshift::ScheduledAction.ScheduledActionType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-scheduledaction-scheduledactiontype.html | AWS::Redshift::ScheduledAction.ScheduledActionType}
 */
export interface RedshiftScheduledActionScheduledActionType {
  PauseCluster?: RedshiftScheduledActionPauseClusterMessage;
  ResumeCluster?: RedshiftScheduledActionResumeClusterMessage;
  ResizeCluster?: RedshiftScheduledActionResizeClusterMessage;
}
/**
 * Type definition for AWS::Redshift::Cluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html | AWS::Redshift::Cluster}
 */
export interface RedshiftClusterProps {
  HsmClientCertificateIdentifier?: string;
  RevisionTarget?: string;
  ElasticIp?: string;
  AutomatedSnapshotRetentionPeriod?: number;
  AvailabilityZoneRelocationStatus?: string;
  AquaConfigurationStatus?: string;
  Encrypted?: boolean;
  SnapshotIdentifier?: string;
  AvailabilityZoneRelocation?: boolean;
  Port?: number;
  NumberOfNodes?: number;
  SnapshotCopyGrantName?: string;
  DestinationRegion?: string;
  EnhancedVpcRouting?: boolean;
  ClusterParameterGroupName?: string;
  DeferMaintenanceEndTime?: string;
  AllowVersionUpgrade?: boolean;
  Endpoint?: RedshiftClusterEndpoint;
  RotateEncryptionKey?: boolean;
  VpcSecurityGroupIds?: any[];
  MaintenanceTrackName?: string;
  OwnerAccount?: string;
  Tags?: Tag[];
  SnapshotClusterIdentifier?: string;
  IamRoles?: any[];
  KmsKeyId?: string;
  SnapshotCopyManual?: boolean;
  ClusterVersion?: string;
  HsmConfigurationIdentifier?: string;
  AvailabilityZone?: string;
  PreferredMaintenanceWindow?: string;
  DeferMaintenanceStartTime?: string;
  ClusterSecurityGroups?: any[];
  ClusterType: string;
  Classic?: boolean;
  ClusterIdentifier?: string;
  MasterUserPassword: string;
  ClusterSubnetGroupName?: string;
  LoggingProperties?: RedshiftClusterLoggingProperties;
  DeferMaintenance?: boolean;
  DeferMaintenanceDuration?: number;
  NodeType: string;
  MasterUsername: string;
  DBName: string;
  PubliclyAccessible?: boolean;
  ManualSnapshotRetentionPeriod?: number;
  SnapshotCopyRetentionPeriod?: number;
  ResourceAction?: string;
}
/**
 * Attributes type definition for AWS::Redshift::Cluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html | AWS::Redshift::Cluster}
 */
export interface RedshiftClusterAttribs {
  "Endpoint.Address"?: string;
  "Endpoint.Port"?: string;
  Id?: string;
  DeferMaintenanceIdentifier?: string;
}
/**
 * Resource class for AWS::Redshift::Cluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html | AWS::Redshift::Cluster}
 */
export class RedshiftCluster extends ResourceBase<
  "AWS::Redshift::Cluster",
  RedshiftClusterProps,
  RedshiftClusterAttribs
> {
  public static readonly Type = "AWS::Redshift::Cluster";
  public static readonly AttributeNames: readonly (keyof RedshiftClusterAttribs)[] =
    ["Endpoint.Address", "Endpoint.Port", "Id", "DeferMaintenanceIdentifier"];
  constructor(
    logicalId: string,
    properties: RedshiftClusterProps,
    options?: ResourceOptions,
  ) {
    super(
      RedshiftCluster.Type,
      RedshiftCluster.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Redshift::ClusterParameterGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clusterparametergroup.html | AWS::Redshift::ClusterParameterGroup}
 */
export interface RedshiftClusterParameterGroupProps {
  Description: string;
  Parameters?: any[];
  ParameterGroupName?: string;
  ParameterGroupFamily: string;
  Tags?: Tag[];
}
/**
 * Resource class for AWS::Redshift::ClusterParameterGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clusterparametergroup.html | AWS::Redshift::ClusterParameterGroup}
 */
export class RedshiftClusterParameterGroup extends ResourceBase<
  "AWS::Redshift::ClusterParameterGroup",
  RedshiftClusterParameterGroupProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Redshift::ClusterParameterGroup";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: RedshiftClusterParameterGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      RedshiftClusterParameterGroup.Type,
      RedshiftClusterParameterGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Redshift::ClusterSecurityGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroup.html | AWS::Redshift::ClusterSecurityGroup}
 */
export interface RedshiftClusterSecurityGroupProps {
  Description: string;
  Tags?: Tag[];
}
/**
 * Resource class for AWS::Redshift::ClusterSecurityGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroup.html | AWS::Redshift::ClusterSecurityGroup}
 */
export class RedshiftClusterSecurityGroup extends ResourceBase<
  "AWS::Redshift::ClusterSecurityGroup",
  RedshiftClusterSecurityGroupProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Redshift::ClusterSecurityGroup";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: RedshiftClusterSecurityGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      RedshiftClusterSecurityGroup.Type,
      RedshiftClusterSecurityGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Redshift::ClusterSecurityGroupIngress
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroupingress.html | AWS::Redshift::ClusterSecurityGroupIngress}
 */
export interface RedshiftClusterSecurityGroupIngressProps {
  CIDRIP?: string;
  ClusterSecurityGroupName: string;
  EC2SecurityGroupName?: string;
  EC2SecurityGroupOwnerId?: string;
}
/**
 * Resource class for AWS::Redshift::ClusterSecurityGroupIngress
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroupingress.html | AWS::Redshift::ClusterSecurityGroupIngress}
 */
export class RedshiftClusterSecurityGroupIngress extends ResourceBase<
  "AWS::Redshift::ClusterSecurityGroupIngress",
  RedshiftClusterSecurityGroupIngressProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Redshift::ClusterSecurityGroupIngress";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: RedshiftClusterSecurityGroupIngressProps,
    options?: ResourceOptions,
  ) {
    super(
      RedshiftClusterSecurityGroupIngress.Type,
      RedshiftClusterSecurityGroupIngress.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Redshift::ClusterSubnetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersubnetgroup.html | AWS::Redshift::ClusterSubnetGroup}
 */
export interface RedshiftClusterSubnetGroupProps {
  Description: string;
  SubnetIds: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::Redshift::ClusterSubnetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersubnetgroup.html | AWS::Redshift::ClusterSubnetGroup}
 */
export interface RedshiftClusterSubnetGroupAttribs {
  ClusterSubnetGroupName?: string;
}
/**
 * Resource class for AWS::Redshift::ClusterSubnetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersubnetgroup.html | AWS::Redshift::ClusterSubnetGroup}
 */
export class RedshiftClusterSubnetGroup extends ResourceBase<
  "AWS::Redshift::ClusterSubnetGroup",
  RedshiftClusterSubnetGroupProps,
  RedshiftClusterSubnetGroupAttribs
> {
  public static readonly Type = "AWS::Redshift::ClusterSubnetGroup";
  public static readonly AttributeNames: readonly (keyof RedshiftClusterSubnetGroupAttribs)[] =
    ["ClusterSubnetGroupName"];
  constructor(
    logicalId: string,
    properties: RedshiftClusterSubnetGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      RedshiftClusterSubnetGroup.Type,
      RedshiftClusterSubnetGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Redshift::EndpointAccess
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointaccess.html | AWS::Redshift::EndpointAccess}
 */
export interface RedshiftEndpointAccessProps {
  EndpointName: string;
  VpcSecurityGroupIds: any[];
  ResourceOwner?: string;
  SubnetGroupName: string;
  ClusterIdentifier: string;
}
/**
 * Attributes type definition for AWS::Redshift::EndpointAccess
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointaccess.html | AWS::Redshift::EndpointAccess}
 */
export interface RedshiftEndpointAccessAttribs {
  EndpointStatus?: string;
  VpcEndpoint?: RedshiftEndpointAccessVpcEndpoint;
  Address?: string;
  Port?: number;
  EndpointCreateTime?: string;
  "VpcEndpoint.VpcId"?: string;
  "VpcEndpoint.NetworkInterfaces"?: any[];
  VpcSecurityGroups?: any[];
  "VpcEndpoint.VpcEndpointId"?: string;
}
/**
 * Resource class for AWS::Redshift::EndpointAccess
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointaccess.html | AWS::Redshift::EndpointAccess}
 */
export class RedshiftEndpointAccess extends ResourceBase<
  "AWS::Redshift::EndpointAccess",
  RedshiftEndpointAccessProps,
  RedshiftEndpointAccessAttribs
> {
  public static readonly Type = "AWS::Redshift::EndpointAccess";
  public static readonly AttributeNames: readonly (keyof RedshiftEndpointAccessAttribs)[] =
    [
      "EndpointStatus",
      "VpcEndpoint",
      "Address",
      "Port",
      "EndpointCreateTime",
      "VpcEndpoint.VpcId",
      "VpcEndpoint.NetworkInterfaces",
      "VpcSecurityGroups",
      "VpcEndpoint.VpcEndpointId",
    ];
  constructor(
    logicalId: string,
    properties: RedshiftEndpointAccessProps,
    options?: ResourceOptions,
  ) {
    super(
      RedshiftEndpointAccess.Type,
      RedshiftEndpointAccess.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Redshift::EndpointAuthorization
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointauthorization.html | AWS::Redshift::EndpointAuthorization}
 */
export interface RedshiftEndpointAuthorizationProps {
  Account: string;
  Force?: boolean;
  VpcIds?: any[];
  ClusterIdentifier: string;
}
/**
 * Attributes type definition for AWS::Redshift::EndpointAuthorization
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointauthorization.html | AWS::Redshift::EndpointAuthorization}
 */
export interface RedshiftEndpointAuthorizationAttribs {
  Status?: string;
  Grantee?: string;
  Grantor?: string;
  EndpointCount?: number;
  AuthorizeTime?: string;
  AllowedVPCs?: any[];
  AllowedAllVPCs?: boolean;
  ClusterStatus?: string;
}
/**
 * Resource class for AWS::Redshift::EndpointAuthorization
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointauthorization.html | AWS::Redshift::EndpointAuthorization}
 */
export class RedshiftEndpointAuthorization extends ResourceBase<
  "AWS::Redshift::EndpointAuthorization",
  RedshiftEndpointAuthorizationProps,
  RedshiftEndpointAuthorizationAttribs
> {
  public static readonly Type = "AWS::Redshift::EndpointAuthorization";
  public static readonly AttributeNames: readonly (keyof RedshiftEndpointAuthorizationAttribs)[] =
    [
      "Status",
      "Grantee",
      "Grantor",
      "EndpointCount",
      "AuthorizeTime",
      "AllowedVPCs",
      "AllowedAllVPCs",
      "ClusterStatus",
    ];
  constructor(
    logicalId: string,
    properties: RedshiftEndpointAuthorizationProps,
    options?: ResourceOptions,
  ) {
    super(
      RedshiftEndpointAuthorization.Type,
      RedshiftEndpointAuthorization.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Redshift::EventSubscription
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-eventsubscription.html | AWS::Redshift::EventSubscription}
 */
export interface RedshiftEventSubscriptionProps {
  SourceType?: string;
  EventCategories?: any[];
  Enabled?: boolean;
  Severity?: string;
  SubscriptionName: string;
  SourceIds?: any[];
  SnsTopicArn?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::Redshift::EventSubscription
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-eventsubscription.html | AWS::Redshift::EventSubscription}
 */
export interface RedshiftEventSubscriptionAttribs {
  Status?: string;
  CustSubscriptionId?: string;
  EventCategoriesList?: any[];
  SourceIdsList?: any[];
  SubscriptionCreationTime?: string;
  CustomerAwsId?: string;
}
/**
 * Resource class for AWS::Redshift::EventSubscription
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-eventsubscription.html | AWS::Redshift::EventSubscription}
 */
export class RedshiftEventSubscription extends ResourceBase<
  "AWS::Redshift::EventSubscription",
  RedshiftEventSubscriptionProps,
  RedshiftEventSubscriptionAttribs
> {
  public static readonly Type = "AWS::Redshift::EventSubscription";
  public static readonly AttributeNames: readonly (keyof RedshiftEventSubscriptionAttribs)[] =
    [
      "Status",
      "CustSubscriptionId",
      "EventCategoriesList",
      "SourceIdsList",
      "SubscriptionCreationTime",
      "CustomerAwsId",
    ];
  constructor(
    logicalId: string,
    properties: RedshiftEventSubscriptionProps,
    options?: ResourceOptions,
  ) {
    super(
      RedshiftEventSubscription.Type,
      RedshiftEventSubscription.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Redshift::ScheduledAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html | AWS::Redshift::ScheduledAction}
 */
export interface RedshiftScheduledActionProps {
  ScheduledActionDescription?: string;
  ScheduledActionName: string;
  EndTime?: string;
  Schedule?: string;
  IamRole?: string;
  StartTime?: string;
  Enable?: boolean;
  TargetAction?: RedshiftScheduledActionScheduledActionType;
}
/**
 * Attributes type definition for AWS::Redshift::ScheduledAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html | AWS::Redshift::ScheduledAction}
 */
export interface RedshiftScheduledActionAttribs {
  State?: string;
  NextInvocations?: any[];
}
/**
 * Resource class for AWS::Redshift::ScheduledAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html | AWS::Redshift::ScheduledAction}
 */
export class RedshiftScheduledAction extends ResourceBase<
  "AWS::Redshift::ScheduledAction",
  RedshiftScheduledActionProps,
  RedshiftScheduledActionAttribs
> {
  public static readonly Type = "AWS::Redshift::ScheduledAction";
  public static readonly AttributeNames: readonly (keyof RedshiftScheduledActionAttribs)[] =
    ["State", "NextInvocations"];
  constructor(
    logicalId: string,
    properties: RedshiftScheduledActionProps,
    options?: ResourceOptions,
  ) {
    super(
      RedshiftScheduledAction.Type,
      RedshiftScheduledAction.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
