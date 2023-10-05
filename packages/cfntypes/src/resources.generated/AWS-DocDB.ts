import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::DocDB::DBCluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html | AWS::DocDB::DBCluster}
 */
export interface DocDBDBClusterProps {
  StorageEncrypted?: boolean;
  RestoreToTime?: string;
  EngineVersion?: string;
  KmsKeyId?: string;
  AvailabilityZones?: any[];
  SnapshotIdentifier?: string;
  Port?: number;
  DBClusterIdentifier?: string;
  PreferredMaintenanceWindow?: string;
  DBSubnetGroupName?: string;
  DeletionProtection?: boolean;
  PreferredBackupWindow?: string;
  UseLatestRestorableTime?: boolean;
  MasterUserPassword?: string;
  VpcSecurityGroupIds?: any[];
  SourceDBClusterIdentifier?: string;
  MasterUsername?: string;
  DBClusterParameterGroupName?: string;
  CopyTagsToSnapshot?: boolean;
  BackupRetentionPeriod?: number;
  RestoreType?: string;
  Tags?: Tag[];
  EnableCloudwatchLogsExports?: any[];
}
/**
 * Attributes type definition for AWS::DocDB::DBCluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html | AWS::DocDB::DBCluster}
 */
export interface DocDBDBClusterAttribs {
  ClusterResourceId?: string;
  Endpoint?: string;
  Port?: string;
  ReadEndpoint?: string;
}
/**
 * Resource class for AWS::DocDB::DBCluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html | AWS::DocDB::DBCluster}
 */
export class DocDBDBCluster extends ResourceBase<
  "AWS::DocDB::DBCluster",
  DocDBDBClusterProps,
  DocDBDBClusterAttribs
> {
  public static readonly Type = "AWS::DocDB::DBCluster";
  public static readonly AttributeNames: readonly (keyof DocDBDBClusterAttribs)[] =
    ["ClusterResourceId", "Endpoint", "Port", "ReadEndpoint"];
  constructor(
    logicalId: string,
    properties: DocDBDBClusterProps,
    options?: ResourceOptions,
  ) {
    super(
      DocDBDBCluster.Type,
      DocDBDBCluster.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::DocDB::DBClusterParameterGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbclusterparametergroup.html | AWS::DocDB::DBClusterParameterGroup}
 */
export interface DocDBDBClusterParameterGroupProps {
  Description: string;
  Parameters: object;
  Family: string;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Resource class for AWS::DocDB::DBClusterParameterGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbclusterparametergroup.html | AWS::DocDB::DBClusterParameterGroup}
 */
export class DocDBDBClusterParameterGroup extends ResourceBase<
  "AWS::DocDB::DBClusterParameterGroup",
  DocDBDBClusterParameterGroupProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::DocDB::DBClusterParameterGroup";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: DocDBDBClusterParameterGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      DocDBDBClusterParameterGroup.Type,
      DocDBDBClusterParameterGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::DocDB::DBInstance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbinstance.html | AWS::DocDB::DBInstance}
 */
export interface DocDBDBInstanceProps {
  DBInstanceClass: string;
  DBClusterIdentifier: string;
  AvailabilityZone?: string;
  PreferredMaintenanceWindow?: string;
  EnablePerformanceInsights?: boolean;
  AutoMinorVersionUpgrade?: boolean;
  DBInstanceIdentifier?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::DocDB::DBInstance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbinstance.html | AWS::DocDB::DBInstance}
 */
export interface DocDBDBInstanceAttribs {
  Endpoint?: string;
  Port?: string;
}
/**
 * Resource class for AWS::DocDB::DBInstance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbinstance.html | AWS::DocDB::DBInstance}
 */
export class DocDBDBInstance extends ResourceBase<
  "AWS::DocDB::DBInstance",
  DocDBDBInstanceProps,
  DocDBDBInstanceAttribs
> {
  public static readonly Type = "AWS::DocDB::DBInstance";
  public static readonly AttributeNames: readonly (keyof DocDBDBInstanceAttribs)[] =
    ["Endpoint", "Port"];
  constructor(
    logicalId: string,
    properties: DocDBDBInstanceProps,
    options?: ResourceOptions,
  ) {
    super(
      DocDBDBInstance.Type,
      DocDBDBInstance.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::DocDB::DBSubnetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbsubnetgroup.html | AWS::DocDB::DBSubnetGroup}
 */
export interface DocDBDBSubnetGroupProps {
  DBSubnetGroupName?: string;
  DBSubnetGroupDescription: string;
  SubnetIds: any[];
  Tags?: Tag[];
}
/**
 * Resource class for AWS::DocDB::DBSubnetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbsubnetgroup.html | AWS::DocDB::DBSubnetGroup}
 */
export class DocDBDBSubnetGroup extends ResourceBase<
  "AWS::DocDB::DBSubnetGroup",
  DocDBDBSubnetGroupProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::DocDB::DBSubnetGroup";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: DocDBDBSubnetGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      DocDBDBSubnetGroup.Type,
      DocDBDBSubnetGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
