import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Neptune::DBCluster.DBClusterRole
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-neptune-dbcluster-dbclusterrole.html | AWS::Neptune::DBCluster.DBClusterRole}
 */
export interface NeptuneDBClusterDBClusterRole {
  RoleArn: string;
  FeatureName?: string;
}
/**
 * Type definition for AWS::Neptune::DBCluster.ServerlessScalingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-neptune-dbcluster-serverlessscalingconfiguration.html | AWS::Neptune::DBCluster.ServerlessScalingConfiguration}
 */
export interface NeptuneDBClusterServerlessScalingConfiguration {
  MinCapacity: number;
  MaxCapacity: number;
}
/**
 * Type definition for AWS::Neptune::DBCluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbcluster.html | AWS::Neptune::DBCluster}
 */
export interface NeptuneDBClusterProps {
  StorageEncrypted?: boolean;
  RestoreToTime?: string;
  AssociatedRoles?: any[];
  SnapshotIdentifier?: string;
  DBClusterIdentifier?: string;
  PreferredBackupWindow?: string;
  DBPort?: number;
  VpcSecurityGroupIds?: any[];
  CopyTagsToSnapshot?: boolean;
  RestoreType?: string;
  Tags?: Tag[];
  EngineVersion?: string;
  KmsKeyId?: string;
  AvailabilityZones?: any[];
  ServerlessScalingConfiguration?: NeptuneDBClusterServerlessScalingConfiguration;
  PreferredMaintenanceWindow?: string;
  IamAuthEnabled?: boolean;
  DBSubnetGroupName?: string;
  DeletionProtection?: boolean;
  UseLatestRestorableTime?: boolean;
  SourceDBClusterIdentifier?: string;
  DBClusterParameterGroupName?: string;
  BackupRetentionPeriod?: number;
  DBInstanceParameterGroupName?: string;
  EnableCloudwatchLogsExports?: any[];
}
/**
 * Attributes type definition for AWS::Neptune::DBCluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbcluster.html | AWS::Neptune::DBCluster}
 */
export interface NeptuneDBClusterAttribs {
  ClusterResourceId?: string;
  Endpoint?: string;
  Port?: string;
  ReadEndpoint?: string;
}
/**
 * Resource class for AWS::Neptune::DBCluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbcluster.html | AWS::Neptune::DBCluster}
 */
export class NeptuneDBCluster extends ResourceBase<
  "AWS::Neptune::DBCluster",
  NeptuneDBClusterProps,
  NeptuneDBClusterAttribs
> {
  public static readonly Type = "AWS::Neptune::DBCluster";
  public static readonly AttributeNames: readonly (keyof NeptuneDBClusterAttribs)[] =
    ["ClusterResourceId", "Endpoint", "Port", "ReadEndpoint"];
  constructor(
    logicalId: string,
    properties: NeptuneDBClusterProps,
    options?: ResourceOptions,
  ) {
    super(
      NeptuneDBCluster.Type,
      NeptuneDBCluster.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Neptune::DBClusterParameterGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbclusterparametergroup.html | AWS::Neptune::DBClusterParameterGroup}
 */
export interface NeptuneDBClusterParameterGroupProps {
  Description: string;
  Parameters: object;
  Family: string;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Resource class for AWS::Neptune::DBClusterParameterGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbclusterparametergroup.html | AWS::Neptune::DBClusterParameterGroup}
 */
export class NeptuneDBClusterParameterGroup extends ResourceBase<
  "AWS::Neptune::DBClusterParameterGroup",
  NeptuneDBClusterParameterGroupProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Neptune::DBClusterParameterGroup";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: NeptuneDBClusterParameterGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      NeptuneDBClusterParameterGroup.Type,
      NeptuneDBClusterParameterGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Neptune::DBInstance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbinstance.html | AWS::Neptune::DBInstance}
 */
export interface NeptuneDBInstanceProps {
  DBParameterGroupName?: string;
  DBInstanceClass: string;
  AllowMajorVersionUpgrade?: boolean;
  DBClusterIdentifier?: string;
  AvailabilityZone?: string;
  PreferredMaintenanceWindow?: string;
  AutoMinorVersionUpgrade?: boolean;
  DBSubnetGroupName?: string;
  DBInstanceIdentifier?: string;
  DBSnapshotIdentifier?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::Neptune::DBInstance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbinstance.html | AWS::Neptune::DBInstance}
 */
export interface NeptuneDBInstanceAttribs {
  Endpoint?: string;
  Port?: string;
}
/**
 * Resource class for AWS::Neptune::DBInstance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbinstance.html | AWS::Neptune::DBInstance}
 */
export class NeptuneDBInstance extends ResourceBase<
  "AWS::Neptune::DBInstance",
  NeptuneDBInstanceProps,
  NeptuneDBInstanceAttribs
> {
  public static readonly Type = "AWS::Neptune::DBInstance";
  public static readonly AttributeNames: readonly (keyof NeptuneDBInstanceAttribs)[] =
    ["Endpoint", "Port"];
  constructor(
    logicalId: string,
    properties: NeptuneDBInstanceProps,
    options?: ResourceOptions,
  ) {
    super(
      NeptuneDBInstance.Type,
      NeptuneDBInstance.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Neptune::DBParameterGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbparametergroup.html | AWS::Neptune::DBParameterGroup}
 */
export interface NeptuneDBParameterGroupProps {
  Description: string;
  Parameters: object;
  Family: string;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Resource class for AWS::Neptune::DBParameterGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbparametergroup.html | AWS::Neptune::DBParameterGroup}
 */
export class NeptuneDBParameterGroup extends ResourceBase<
  "AWS::Neptune::DBParameterGroup",
  NeptuneDBParameterGroupProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Neptune::DBParameterGroup";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: NeptuneDBParameterGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      NeptuneDBParameterGroup.Type,
      NeptuneDBParameterGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Neptune::DBSubnetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbsubnetgroup.html | AWS::Neptune::DBSubnetGroup}
 */
export interface NeptuneDBSubnetGroupProps {
  DBSubnetGroupName?: string;
  DBSubnetGroupDescription: string;
  SubnetIds: any[];
  Tags?: Tag[];
}
/**
 * Resource class for AWS::Neptune::DBSubnetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbsubnetgroup.html | AWS::Neptune::DBSubnetGroup}
 */
export class NeptuneDBSubnetGroup extends ResourceBase<
  "AWS::Neptune::DBSubnetGroup",
  NeptuneDBSubnetGroupProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Neptune::DBSubnetGroup";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: NeptuneDBSubnetGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      NeptuneDBSubnetGroup.Type,
      NeptuneDBSubnetGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
