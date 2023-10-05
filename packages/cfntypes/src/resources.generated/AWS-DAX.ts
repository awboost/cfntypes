import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::DAX::Cluster.SSESpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dax-cluster-ssespecification.html | AWS::DAX::Cluster.SSESpecification}
 */
export interface DAXClusterSSESpecification {
  SSEEnabled?: boolean;
}
/**
 * Type definition for AWS::DAX::Cluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-cluster.html | AWS::DAX::Cluster}
 */
export interface DAXClusterProps {
  SSESpecification?: DAXClusterSSESpecification;
  Description?: string;
  ReplicationFactor: number;
  ParameterGroupName?: string;
  AvailabilityZones?: any[];
  IAMRoleARN: string;
  SubnetGroupName?: string;
  PreferredMaintenanceWindow?: string;
  ClusterEndpointEncryptionType?: string;
  NotificationTopicARN?: string;
  SecurityGroupIds?: any[];
  NodeType: string;
  ClusterName?: string;
  Tags?: object;
}
/**
 * Attributes type definition for AWS::DAX::Cluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-cluster.html | AWS::DAX::Cluster}
 */
export interface DAXClusterAttribs {
  ClusterDiscoveryEndpointURL?: string;
  ClusterDiscoveryEndpoint?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::DAX::Cluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-cluster.html | AWS::DAX::Cluster}
 */
export class DAXCluster extends ResourceBase<
  "AWS::DAX::Cluster",
  DAXClusterProps,
  DAXClusterAttribs
> {
  public static readonly Type = "AWS::DAX::Cluster";
  public static readonly AttributeNames: readonly (keyof DAXClusterAttribs)[] =
    ["ClusterDiscoveryEndpointURL", "ClusterDiscoveryEndpoint", "Arn"];
  constructor(
    logicalId: string,
    properties: DAXClusterProps,
    options?: ResourceOptions,
  ) {
    super(
      DAXCluster.Type,
      DAXCluster.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::DAX::ParameterGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-parametergroup.html | AWS::DAX::ParameterGroup}
 */
export interface DAXParameterGroupProps {
  ParameterNameValues?: object;
  Description?: string;
  ParameterGroupName?: string;
}
/**
 * Resource class for AWS::DAX::ParameterGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-parametergroup.html | AWS::DAX::ParameterGroup}
 */
export class DAXParameterGroup extends ResourceBase<
  "AWS::DAX::ParameterGroup",
  DAXParameterGroupProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::DAX::ParameterGroup";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: DAXParameterGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      DAXParameterGroup.Type,
      DAXParameterGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::DAX::SubnetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-subnetgroup.html | AWS::DAX::SubnetGroup}
 */
export interface DAXSubnetGroupProps {
  Description?: string;
  SubnetGroupName?: string;
  SubnetIds: any[];
}
/**
 * Resource class for AWS::DAX::SubnetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-subnetgroup.html | AWS::DAX::SubnetGroup}
 */
export class DAXSubnetGroup extends ResourceBase<
  "AWS::DAX::SubnetGroup",
  DAXSubnetGroupProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::DAX::SubnetGroup";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: DAXSubnetGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      DAXSubnetGroup.Type,
      DAXSubnetGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
