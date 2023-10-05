import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::QLDB::Stream.KinesisConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qldb-stream-kinesisconfiguration.html | AWS::QLDB::Stream.KinesisConfiguration}
 */
export interface QLDBStreamKinesisConfiguration {
  AggregationEnabled?: boolean;
  StreamArn?: string;
}
/**
 * Type definition for AWS::QLDB::Ledger
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qldb-ledger.html | AWS::QLDB::Ledger}
 */
export interface QLDBLedgerProps {
  PermissionsMode: string;
  DeletionProtection?: boolean;
  KmsKey?: string;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Resource class for AWS::QLDB::Ledger
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qldb-ledger.html | AWS::QLDB::Ledger}
 */
export class QLDBLedger extends ResourceBase<
  "AWS::QLDB::Ledger",
  QLDBLedgerProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::QLDB::Ledger";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: QLDBLedgerProps,
    options?: ResourceOptions,
  ) {
    super(
      QLDBLedger.Type,
      QLDBLedger.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::QLDB::Stream
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qldb-stream.html | AWS::QLDB::Stream}
 */
export interface QLDBStreamProps {
  InclusiveStartTime: string;
  StreamName: string;
  KinesisConfiguration: QLDBStreamKinesisConfiguration;
  ExclusiveEndTime?: string;
  LedgerName: string;
  RoleArn: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::QLDB::Stream
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qldb-stream.html | AWS::QLDB::Stream}
 */
export interface QLDBStreamAttribs {
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::QLDB::Stream
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qldb-stream.html | AWS::QLDB::Stream}
 */
export class QLDBStream extends ResourceBase<
  "AWS::QLDB::Stream",
  QLDBStreamProps,
  QLDBStreamAttribs
> {
  public static readonly Type = "AWS::QLDB::Stream";
  public static readonly AttributeNames: readonly (keyof QLDBStreamAttribs)[] =
    ["Id", "Arn"];
  constructor(
    logicalId: string,
    properties: QLDBStreamProps,
    options?: ResourceOptions,
  ) {
    super(
      QLDBStream.Type,
      QLDBStream.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
