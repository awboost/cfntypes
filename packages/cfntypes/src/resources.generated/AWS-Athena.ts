import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Athena::CapacityReservation.CapacityAssignment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-capacityreservation-capacityassignment.html | AWS::Athena::CapacityReservation.CapacityAssignment}
 */
export interface AthenaCapacityReservationCapacityAssignment {
  WorkgroupNames: any[];
}
/**
 * Type definition for AWS::Athena::CapacityReservation.CapacityAssignmentConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-capacityreservation-capacityassignmentconfiguration.html | AWS::Athena::CapacityReservation.CapacityAssignmentConfiguration}
 */
export interface AthenaCapacityReservationCapacityAssignmentConfiguration {
  CapacityAssignments: any[];
}
/**
 * Type definition for AWS::Athena::WorkGroup.AclConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-aclconfiguration.html | AWS::Athena::WorkGroup.AclConfiguration}
 */
export interface AthenaWorkGroupAclConfiguration {
  S3AclOption: string;
}
/**
 * Type definition for AWS::Athena::WorkGroup.CustomerContentEncryptionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-customercontentencryptionconfiguration.html | AWS::Athena::WorkGroup.CustomerContentEncryptionConfiguration}
 */
export interface AthenaWorkGroupCustomerContentEncryptionConfiguration {
  KmsKey: string;
}
/**
 * Type definition for AWS::Athena::WorkGroup.EncryptionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-encryptionconfiguration.html | AWS::Athena::WorkGroup.EncryptionConfiguration}
 */
export interface AthenaWorkGroupEncryptionConfiguration {
  EncryptionOption: string;
  KmsKey?: string;
}
/**
 * Type definition for AWS::Athena::WorkGroup.EngineVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-engineversion.html | AWS::Athena::WorkGroup.EngineVersion}
 */
export interface AthenaWorkGroupEngineVersion {
  SelectedEngineVersion?: string;
  EffectiveEngineVersion?: string;
}
/**
 * Type definition for AWS::Athena::WorkGroup.ResultConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-resultconfiguration.html | AWS::Athena::WorkGroup.ResultConfiguration}
 */
export interface AthenaWorkGroupResultConfiguration {
  EncryptionConfiguration?: AthenaWorkGroupEncryptionConfiguration;
  OutputLocation?: string;
  AclConfiguration?: AthenaWorkGroupAclConfiguration;
  ExpectedBucketOwner?: string;
}
/**
 * Type definition for AWS::Athena::WorkGroup.WorkGroupConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfiguration.html | AWS::Athena::WorkGroup.WorkGroupConfiguration}
 */
export interface AthenaWorkGroupWorkGroupConfiguration {
  EnforceWorkGroupConfiguration?: boolean;
  EngineVersion?: AthenaWorkGroupEngineVersion;
  PublishCloudWatchMetricsEnabled?: boolean;
  ResultConfiguration?: AthenaWorkGroupResultConfiguration;
  AdditionalConfiguration?: string;
  CustomerContentEncryptionConfiguration?: AthenaWorkGroupCustomerContentEncryptionConfiguration;
  BytesScannedCutoffPerQuery?: number;
  RequesterPaysEnabled?: boolean;
  ExecutionRole?: string;
}
/**
 * Type definition for AWS::Athena::CapacityReservation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-capacityreservation.html | AWS::Athena::CapacityReservation}
 */
export interface AthenaCapacityReservationProps {
  TargetDpus: number;
  CapacityAssignmentConfiguration?: AthenaCapacityReservationCapacityAssignmentConfiguration;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::Athena::CapacityReservation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-capacityreservation.html | AWS::Athena::CapacityReservation}
 */
export interface AthenaCapacityReservationAttribs {
  Status?: string;
  AllocatedDpus?: number;
  CreationTime?: string;
  LastSuccessfulAllocationTime?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::Athena::CapacityReservation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-capacityreservation.html | AWS::Athena::CapacityReservation}
 */
export class AthenaCapacityReservation extends ResourceBase<
  "AWS::Athena::CapacityReservation",
  AthenaCapacityReservationProps,
  AthenaCapacityReservationAttribs
> {
  public static readonly Type = "AWS::Athena::CapacityReservation";
  public static readonly AttributeNames: readonly (keyof AthenaCapacityReservationAttribs)[] =
    [
      "Status",
      "AllocatedDpus",
      "CreationTime",
      "LastSuccessfulAllocationTime",
      "Arn",
    ];
  constructor(
    logicalId: string,
    properties: AthenaCapacityReservationProps,
    options?: ResourceOptions,
  ) {
    super(
      AthenaCapacityReservation.Type,
      AthenaCapacityReservation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Athena::DataCatalog
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-datacatalog.html | AWS::Athena::DataCatalog}
 */
export interface AthenaDataCatalogProps {
  Type: string;
  Description?: string;
  Parameters?: Record<string, any>;
  Tags?: Tag[];
  Name: string;
}
/**
 * Resource class for AWS::Athena::DataCatalog
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-datacatalog.html | AWS::Athena::DataCatalog}
 */
export class AthenaDataCatalog extends ResourceBase<
  "AWS::Athena::DataCatalog",
  AthenaDataCatalogProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Athena::DataCatalog";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: AthenaDataCatalogProps,
    options?: ResourceOptions,
  ) {
    super(
      AthenaDataCatalog.Type,
      AthenaDataCatalog.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Athena::NamedQuery
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-namedquery.html | AWS::Athena::NamedQuery}
 */
export interface AthenaNamedQueryProps {
  WorkGroup?: string;
  Description?: string;
  QueryString: string;
  Database: string;
  Name?: string;
}
/**
 * Attributes type definition for AWS::Athena::NamedQuery
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-namedquery.html | AWS::Athena::NamedQuery}
 */
export interface AthenaNamedQueryAttribs {
  NamedQueryId?: string;
}
/**
 * Resource class for AWS::Athena::NamedQuery
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-namedquery.html | AWS::Athena::NamedQuery}
 */
export class AthenaNamedQuery extends ResourceBase<
  "AWS::Athena::NamedQuery",
  AthenaNamedQueryProps,
  AthenaNamedQueryAttribs
> {
  public static readonly Type = "AWS::Athena::NamedQuery";
  public static readonly AttributeNames: readonly (keyof AthenaNamedQueryAttribs)[] =
    ["NamedQueryId"];
  constructor(
    logicalId: string,
    properties: AthenaNamedQueryProps,
    options?: ResourceOptions,
  ) {
    super(
      AthenaNamedQuery.Type,
      AthenaNamedQuery.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Athena::PreparedStatement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-preparedstatement.html | AWS::Athena::PreparedStatement}
 */
export interface AthenaPreparedStatementProps {
  StatementName: string;
  WorkGroup: string;
  Description?: string;
  QueryStatement: string;
}
/**
 * Resource class for AWS::Athena::PreparedStatement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-preparedstatement.html | AWS::Athena::PreparedStatement}
 */
export class AthenaPreparedStatement extends ResourceBase<
  "AWS::Athena::PreparedStatement",
  AthenaPreparedStatementProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Athena::PreparedStatement";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: AthenaPreparedStatementProps,
    options?: ResourceOptions,
  ) {
    super(
      AthenaPreparedStatement.Type,
      AthenaPreparedStatement.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Athena::WorkGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-workgroup.html | AWS::Athena::WorkGroup}
 */
export interface AthenaWorkGroupProps {
  RecursiveDeleteOption?: boolean;
  WorkGroupConfiguration?: AthenaWorkGroupWorkGroupConfiguration;
  Description?: string;
  State?: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::Athena::WorkGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-workgroup.html | AWS::Athena::WorkGroup}
 */
export interface AthenaWorkGroupAttribs {
  CreationTime?: string;
  "WorkGroupConfiguration.EngineVersion.EffectiveEngineVersion"?: string;
}
/**
 * Resource class for AWS::Athena::WorkGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-workgroup.html | AWS::Athena::WorkGroup}
 */
export class AthenaWorkGroup extends ResourceBase<
  "AWS::Athena::WorkGroup",
  AthenaWorkGroupProps,
  AthenaWorkGroupAttribs
> {
  public static readonly Type = "AWS::Athena::WorkGroup";
  public static readonly AttributeNames: readonly (keyof AthenaWorkGroupAttribs)[] =
    [
      "CreationTime",
      "WorkGroupConfiguration.EngineVersion.EffectiveEngineVersion",
    ];
  constructor(
    logicalId: string,
    properties: AthenaWorkGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      AthenaWorkGroup.Type,
      AthenaWorkGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
