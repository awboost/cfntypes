import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Cassandra::Keyspace.ReplicationSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-keyspace-replicationspecification.html | AWS::Cassandra::Keyspace.ReplicationSpecification}
 */
export interface CassandraKeyspaceReplicationSpecification {
  ReplicationStrategy?: string;
  RegionList?: any[];
}
/**
 * Type definition for AWS::Cassandra::Table.BillingMode
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-billingmode.html | AWS::Cassandra::Table.BillingMode}
 */
export interface CassandraTableBillingMode {
  Mode: string;
  ProvisionedThroughput?: CassandraTableProvisionedThroughput;
}
/**
 * Type definition for AWS::Cassandra::Table.ClusteringKeyColumn
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-clusteringkeycolumn.html | AWS::Cassandra::Table.ClusteringKeyColumn}
 */
export interface CassandraTableClusteringKeyColumn {
  OrderBy?: string;
  Column: CassandraTableColumn;
}
/**
 * Type definition for AWS::Cassandra::Table.Column
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-column.html | AWS::Cassandra::Table.Column}
 */
export interface CassandraTableColumn {
  ColumnName: string;
  ColumnType: string;
}
/**
 * Type definition for AWS::Cassandra::Table.EncryptionSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-encryptionspecification.html | AWS::Cassandra::Table.EncryptionSpecification}
 */
export interface CassandraTableEncryptionSpecification {
  EncryptionType: string;
  KmsKeyIdentifier?: string;
}
/**
 * Type definition for AWS::Cassandra::Table.ProvisionedThroughput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-provisionedthroughput.html | AWS::Cassandra::Table.ProvisionedThroughput}
 */
export interface CassandraTableProvisionedThroughput {
  WriteCapacityUnits: number;
  ReadCapacityUnits: number;
}
/**
 * Type definition for AWS::Cassandra::Keyspace
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-keyspace.html | AWS::Cassandra::Keyspace}
 */
export interface CassandraKeyspaceProps {
  KeyspaceName?: string;
  ReplicationSpecification?: CassandraKeyspaceReplicationSpecification;
  Tags?: Tag[];
}
/**
 * Resource class for AWS::Cassandra::Keyspace
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-keyspace.html | AWS::Cassandra::Keyspace}
 */
export class CassandraKeyspace extends ResourceBase<
  "AWS::Cassandra::Keyspace",
  CassandraKeyspaceProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Cassandra::Keyspace";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: CassandraKeyspaceProps,
    options?: ResourceOptions,
  ) {
    super(
      CassandraKeyspace.Type,
      CassandraKeyspace.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Cassandra::Table
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html | AWS::Cassandra::Table}
 */
export interface CassandraTableProps {
  TableName?: string;
  PointInTimeRecoveryEnabled?: boolean;
  ClusteringKeyColumns?: any[];
  ClientSideTimestampsEnabled?: boolean;
  PartitionKeyColumns: any[];
  BillingMode?: CassandraTableBillingMode;
  DefaultTimeToLive?: number;
  KeyspaceName: string;
  EncryptionSpecification?: CassandraTableEncryptionSpecification;
  RegularColumns?: any[];
  Tags?: Tag[];
}
/**
 * Resource class for AWS::Cassandra::Table
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html | AWS::Cassandra::Table}
 */
export class CassandraTable extends ResourceBase<
  "AWS::Cassandra::Table",
  CassandraTableProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Cassandra::Table";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: CassandraTableProps,
    options?: ResourceOptions,
  ) {
    super(
      CassandraTable.Type,
      CassandraTable.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
