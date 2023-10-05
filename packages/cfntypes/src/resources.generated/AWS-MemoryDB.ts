import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::MemoryDB::Cluster.Endpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-memorydb-cluster-endpoint.html | AWS::MemoryDB::Cluster.Endpoint}
 */
export interface MemoryDBClusterEndpoint {
  Address?: string;
  Port?: number;
}
/**
 * Type definition for AWS::MemoryDB::User.AuthenticationMode
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-memorydb-user-authenticationmode.html | AWS::MemoryDB::User.AuthenticationMode}
 */
export interface MemoryDBUserAuthenticationMode {
  Type?: string;
  Passwords?: any[];
}
/**
 * Type definition for AWS::MemoryDB::ACL
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-acl.html | AWS::MemoryDB::ACL}
 */
export interface MemoryDBACLProps {
  ACLName: string;
  UserNames?: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::MemoryDB::ACL
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-acl.html | AWS::MemoryDB::ACL}
 */
export interface MemoryDBACLAttribs {
  Status?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::MemoryDB::ACL
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-acl.html | AWS::MemoryDB::ACL}
 */
export class MemoryDBACL extends ResourceBase<
  "AWS::MemoryDB::ACL",
  MemoryDBACLProps,
  MemoryDBACLAttribs
> {
  public static readonly Type = "AWS::MemoryDB::ACL";
  public static readonly AttributeNames: readonly (keyof MemoryDBACLAttribs)[] =
    ["Status", "Arn"];
  constructor(
    logicalId: string,
    properties: MemoryDBACLProps,
    options?: ResourceOptions,
  ) {
    super(
      MemoryDBACL.Type,
      MemoryDBACL.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::MemoryDB::Cluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-cluster.html | AWS::MemoryDB::Cluster}
 */
export interface MemoryDBClusterProps {
  NumReplicasPerShard?: number;
  Description?: string;
  FinalSnapshotName?: string;
  ParameterGroupName?: string;
  SnapshotArns?: any[];
  Port?: number;
  ACLName: string;
  SnapshotName?: string;
  NumShards?: number;
  TLSEnabled?: boolean;
  ClusterName: string;
  SnsTopicArn?: string;
  Tags?: Tag[];
  EngineVersion?: string;
  KmsKeyId?: string;
  SnsTopicStatus?: string;
  SubnetGroupName?: string;
  AutoMinorVersionUpgrade?: boolean;
  SecurityGroupIds?: any[];
  ClusterEndpoint?: MemoryDBClusterEndpoint;
  SnapshotWindow?: string;
  SnapshotRetentionLimit?: number;
  DataTiering?: string;
  NodeType: string;
  MaintenanceWindow?: string;
}
/**
 * Attributes type definition for AWS::MemoryDB::Cluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-cluster.html | AWS::MemoryDB::Cluster}
 */
export interface MemoryDBClusterAttribs {
  Status?: string;
  "ClusterEndpoint.Address"?: string;
  "ClusterEndpoint.Port"?: number;
  ParameterGroupStatus?: string;
  ARN?: string;
}
/**
 * Resource class for AWS::MemoryDB::Cluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-cluster.html | AWS::MemoryDB::Cluster}
 */
export class MemoryDBCluster extends ResourceBase<
  "AWS::MemoryDB::Cluster",
  MemoryDBClusterProps,
  MemoryDBClusterAttribs
> {
  public static readonly Type = "AWS::MemoryDB::Cluster";
  public static readonly AttributeNames: readonly (keyof MemoryDBClusterAttribs)[] =
    [
      "Status",
      "ClusterEndpoint.Address",
      "ClusterEndpoint.Port",
      "ParameterGroupStatus",
      "ARN",
    ];
  constructor(
    logicalId: string,
    properties: MemoryDBClusterProps,
    options?: ResourceOptions,
  ) {
    super(
      MemoryDBCluster.Type,
      MemoryDBCluster.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::MemoryDB::ParameterGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-parametergroup.html | AWS::MemoryDB::ParameterGroup}
 */
export interface MemoryDBParameterGroupProps {
  Description?: string;
  Parameters?: object;
  ParameterGroupName: string;
  Family: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::MemoryDB::ParameterGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-parametergroup.html | AWS::MemoryDB::ParameterGroup}
 */
export interface MemoryDBParameterGroupAttribs {
  ARN?: string;
}
/**
 * Resource class for AWS::MemoryDB::ParameterGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-parametergroup.html | AWS::MemoryDB::ParameterGroup}
 */
export class MemoryDBParameterGroup extends ResourceBase<
  "AWS::MemoryDB::ParameterGroup",
  MemoryDBParameterGroupProps,
  MemoryDBParameterGroupAttribs
> {
  public static readonly Type = "AWS::MemoryDB::ParameterGroup";
  public static readonly AttributeNames: readonly (keyof MemoryDBParameterGroupAttribs)[] =
    ["ARN"];
  constructor(
    logicalId: string,
    properties: MemoryDBParameterGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      MemoryDBParameterGroup.Type,
      MemoryDBParameterGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::MemoryDB::SubnetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-subnetgroup.html | AWS::MemoryDB::SubnetGroup}
 */
export interface MemoryDBSubnetGroupProps {
  Description?: string;
  SubnetGroupName: string;
  SubnetIds: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::MemoryDB::SubnetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-subnetgroup.html | AWS::MemoryDB::SubnetGroup}
 */
export interface MemoryDBSubnetGroupAttribs {
  ARN?: string;
}
/**
 * Resource class for AWS::MemoryDB::SubnetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-subnetgroup.html | AWS::MemoryDB::SubnetGroup}
 */
export class MemoryDBSubnetGroup extends ResourceBase<
  "AWS::MemoryDB::SubnetGroup",
  MemoryDBSubnetGroupProps,
  MemoryDBSubnetGroupAttribs
> {
  public static readonly Type = "AWS::MemoryDB::SubnetGroup";
  public static readonly AttributeNames: readonly (keyof MemoryDBSubnetGroupAttribs)[] =
    ["ARN"];
  constructor(
    logicalId: string,
    properties: MemoryDBSubnetGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      MemoryDBSubnetGroup.Type,
      MemoryDBSubnetGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::MemoryDB::User
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-user.html | AWS::MemoryDB::User}
 */
export interface MemoryDBUserProps {
  AuthenticationMode?: MemoryDBUserAuthenticationMode;
  UserName: string;
  AccessString?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::MemoryDB::User
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-user.html | AWS::MemoryDB::User}
 */
export interface MemoryDBUserAttribs {
  Status?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::MemoryDB::User
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-user.html | AWS::MemoryDB::User}
 */
export class MemoryDBUser extends ResourceBase<
  "AWS::MemoryDB::User",
  MemoryDBUserProps,
  MemoryDBUserAttribs
> {
  public static readonly Type = "AWS::MemoryDB::User";
  public static readonly AttributeNames: readonly (keyof MemoryDBUserAttribs)[] =
    ["Status", "Arn"];
  constructor(
    logicalId: string,
    properties: MemoryDBUserProps,
    options?: ResourceOptions,
  ) {
    super(
      MemoryDBUser.Type,
      MemoryDBUser.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
