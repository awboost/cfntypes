import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::RDS::DBCluster.DBClusterRole
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-dbclusterrole.html | AWS::RDS::DBCluster.DBClusterRole}
 */
export interface RDSDBClusterDBClusterRole {
  RoleArn: string;
  FeatureName?: string;
}
/**
 * Type definition for AWS::RDS::DBCluster.Endpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-endpoint.html | AWS::RDS::DBCluster.Endpoint}
 */
export interface RDSDBClusterEndpoint {
  Address?: string;
  Port?: string;
}
/**
 * Type definition for AWS::RDS::DBCluster.MasterUserSecret
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-masterusersecret.html | AWS::RDS::DBCluster.MasterUserSecret}
 */
export interface RDSDBClusterMasterUserSecret {
  SecretArn?: string;
  KmsKeyId?: string;
}
/**
 * Type definition for AWS::RDS::DBCluster.ReadEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-readendpoint.html | AWS::RDS::DBCluster.ReadEndpoint}
 */
export interface RDSDBClusterReadEndpoint {
  Address?: string;
}
/**
 * Type definition for AWS::RDS::DBCluster.ScalingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-scalingconfiguration.html | AWS::RDS::DBCluster.ScalingConfiguration}
 */
export interface RDSDBClusterScalingConfiguration {
  TimeoutAction?: string;
  SecondsBeforeTimeout?: number;
  SecondsUntilAutoPause?: number;
  AutoPause?: boolean;
  MinCapacity?: number;
  MaxCapacity?: number;
}
/**
 * Type definition for AWS::RDS::DBCluster.ServerlessV2ScalingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-serverlessv2scalingconfiguration.html | AWS::RDS::DBCluster.ServerlessV2ScalingConfiguration}
 */
export interface RDSDBClusterServerlessV2ScalingConfiguration {
  MinCapacity?: number;
  MaxCapacity?: number;
}
/**
 * Type definition for AWS::RDS::DBInstance.CertificateDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbinstance-certificatedetails.html | AWS::RDS::DBInstance.CertificateDetails}
 */
export interface RDSDBInstanceCertificateDetails {
  ValidTill?: string;
  CAIdentifier?: string;
}
/**
 * Type definition for AWS::RDS::DBInstance.DBInstanceRole
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbinstance-dbinstancerole.html | AWS::RDS::DBInstance.DBInstanceRole}
 */
export interface RDSDBInstanceDBInstanceRole {
  RoleArn: string;
  FeatureName: string;
}
/**
 * Type definition for AWS::RDS::DBInstance.Endpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbinstance-endpoint.html | AWS::RDS::DBInstance.Endpoint}
 */
export interface RDSDBInstanceEndpoint {
  Address?: string;
  Port?: string;
  HostedZoneId?: string;
}
/**
 * Type definition for AWS::RDS::DBInstance.MasterUserSecret
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbinstance-masterusersecret.html | AWS::RDS::DBInstance.MasterUserSecret}
 */
export interface RDSDBInstanceMasterUserSecret {
  SecretArn?: string;
  KmsKeyId?: string;
}
/**
 * Type definition for AWS::RDS::DBInstance.ProcessorFeature
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbinstance-processorfeature.html | AWS::RDS::DBInstance.ProcessorFeature}
 */
export interface RDSDBInstanceProcessorFeature {
  Value?: string;
  Name?: string;
}
/**
 * Type definition for AWS::RDS::DBProxy.AuthFormat
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbproxy-authformat.html | AWS::RDS::DBProxy.AuthFormat}
 */
export interface RDSDBProxyAuthFormat {
  SecretArn?: string;
  Description?: string;
  IAMAuth?: string;
  ClientPasswordAuthType?: string;
  AuthScheme?: string;
}
/**
 * Type definition for AWS::RDS::DBProxy.TagFormat
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbproxy-tagformat.html | AWS::RDS::DBProxy.TagFormat}
 */
export interface RDSDBProxyTagFormat {
  Value?: string;
  Key?: string;
}
/**
 * Type definition for AWS::RDS::DBProxyEndpoint.TagFormat
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbproxyendpoint-tagformat.html | AWS::RDS::DBProxyEndpoint.TagFormat}
 */
export interface RDSDBProxyEndpointTagFormat {
  Value?: string;
  Key?: string;
}
/**
 * Type definition for AWS::RDS::DBProxyTargetGroup.ConnectionPoolConfigurationInfoFormat
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat.html | AWS::RDS::DBProxyTargetGroup.ConnectionPoolConfigurationInfoFormat}
 */
export interface RDSDBProxyTargetGroupConnectionPoolConfigurationInfoFormat {
  MaxIdleConnectionsPercent?: number;
  MaxConnectionsPercent?: number;
  InitQuery?: string;
  ConnectionBorrowTimeout?: number;
  SessionPinningFilters?: any[];
}
/**
 * Type definition for AWS::RDS::DBSecurityGroup.Ingress
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-security-group-rule.html | AWS::RDS::DBSecurityGroup.Ingress}
 */
export interface RDSDBSecurityGroupIngress {
  CIDRIP?: string;
  EC2SecurityGroupId?: string;
  EC2SecurityGroupName?: string;
  EC2SecurityGroupOwnerId?: string;
}
/**
 * Type definition for AWS::RDS::OptionGroup.OptionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-optiongroup-optionconfiguration.html | AWS::RDS::OptionGroup.OptionConfiguration}
 */
export interface RDSOptionGroupOptionConfiguration {
  OptionVersion?: string;
  VpcSecurityGroupMemberships?: any[];
  OptionSettings?: any[];
  Port?: number;
  OptionName: string;
  DBSecurityGroupMemberships?: any[];
}
/**
 * Type definition for AWS::RDS::OptionGroup.OptionSetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-optiongroup-optionsetting.html | AWS::RDS::OptionGroup.OptionSetting}
 */
export interface RDSOptionGroupOptionSetting {
  Value?: string;
  Name?: string;
}
/**
 * Type definition for AWS::RDS::CustomDBEngineVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-customdbengineversion.html | AWS::RDS::CustomDBEngineVersion}
 */
export interface RDSCustomDBEngineVersionProps {
  Status?: string;
  DatabaseInstallationFilesS3BucketName: string;
  Description?: string;
  EngineVersion: string;
  KMSKeyId?: string;
  DatabaseInstallationFilesS3Prefix?: string;
  Manifest?: string;
  Engine: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::RDS::CustomDBEngineVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-customdbengineversion.html | AWS::RDS::CustomDBEngineVersion}
 */
export interface RDSCustomDBEngineVersionAttribs {
  DBEngineVersionArn?: string;
}
/**
 * Resource class for AWS::RDS::CustomDBEngineVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-customdbengineversion.html | AWS::RDS::CustomDBEngineVersion}
 */
export class RDSCustomDBEngineVersion extends ResourceBase<
  "AWS::RDS::CustomDBEngineVersion",
  RDSCustomDBEngineVersionProps,
  RDSCustomDBEngineVersionAttribs
> {
  public static readonly Type = "AWS::RDS::CustomDBEngineVersion";
  public static readonly AttributeNames: readonly (keyof RDSCustomDBEngineVersionAttribs)[] =
    ["DBEngineVersionArn"];
  constructor(
    logicalId: string,
    properties: RDSCustomDBEngineVersionProps,
    options?: ResourceOptions,
  ) {
    super(
      RDSCustomDBEngineVersion.Type,
      RDSCustomDBEngineVersion.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::RDS::DBCluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html | AWS::RDS::DBCluster}
 */
export interface RDSDBClusterProps {
  StorageEncrypted?: boolean;
  DBSystemId?: string;
  RestoreToTime?: string;
  EngineMode?: string;
  Port?: number;
  DBClusterIdentifier?: string;
  MonitoringInterval?: number;
  ReplicationSourceIdentifier?: string;
  Engine?: string;
  Tags?: Tag[];
  EngineVersion?: string;
  StorageType?: string;
  KmsKeyId?: string;
  ServerlessV2ScalingConfiguration?: RDSDBClusterServerlessV2ScalingConfiguration;
  PerformanceInsightsRetentionPeriod?: number;
  DatabaseName?: string;
  AutoMinorVersionUpgrade?: boolean;
  DBSubnetGroupName?: string;
  DeletionProtection?: boolean;
  AllocatedStorage?: number;
  MasterUserPassword?: string;
  MasterUserSecret?: RDSDBClusterMasterUserSecret;
  SourceDBClusterIdentifier?: string;
  MasterUsername?: string;
  ScalingConfiguration?: RDSDBClusterScalingConfiguration;
  PerformanceInsightsKmsKeyId?: string;
  PubliclyAccessible?: boolean;
  Domain?: string;
  BacktrackWindow?: number;
  DBInstanceParameterGroupName?: string;
  MonitoringRoleArn?: string;
  AssociatedRoles?: any[];
  EnableHttpEndpoint?: boolean;
  SnapshotIdentifier?: string;
  PreferredBackupWindow?: string;
  NetworkType?: string;
  VpcSecurityGroupIds?: any[];
  CopyTagsToSnapshot?: boolean;
  GlobalClusterIdentifier?: string;
  RestoreType?: string;
  DomainIAMRoleName?: string;
  DBClusterInstanceClass?: string;
  AvailabilityZones?: any[];
  PreferredMaintenanceWindow?: string;
  Iops?: number;
  SourceRegion?: string;
  UseLatestRestorableTime?: boolean;
  ManageMasterUserPassword?: boolean;
  EnableIAMDatabaseAuthentication?: boolean;
  DBClusterParameterGroupName?: string;
  PerformanceInsightsEnabled?: boolean;
  BackupRetentionPeriod?: number;
  EnableCloudwatchLogsExports?: any[];
}
/**
 * Attributes type definition for AWS::RDS::DBCluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html | AWS::RDS::DBCluster}
 */
export interface RDSDBClusterAttribs {
  "Endpoint.Address"?: string;
  Endpoint?: RDSDBClusterEndpoint;
  DBClusterArn?: string;
  "Endpoint.Port"?: string;
  "ReadEndpoint.Address"?: string;
  DBClusterResourceId?: string;
  "MasterUserSecret.SecretArn"?: string;
}
/**
 * Resource class for AWS::RDS::DBCluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html | AWS::RDS::DBCluster}
 */
export class RDSDBCluster extends ResourceBase<
  "AWS::RDS::DBCluster",
  RDSDBClusterProps,
  RDSDBClusterAttribs
> {
  public static readonly Type = "AWS::RDS::DBCluster";
  public static readonly AttributeNames: readonly (keyof RDSDBClusterAttribs)[] =
    [
      "Endpoint.Address",
      "Endpoint",
      "DBClusterArn",
      "Endpoint.Port",
      "ReadEndpoint.Address",
      "DBClusterResourceId",
      "MasterUserSecret.SecretArn",
    ];
  constructor(
    logicalId: string,
    properties: RDSDBClusterProps,
    options?: ResourceOptions,
  ) {
    super(
      RDSDBCluster.Type,
      RDSDBCluster.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::RDS::DBClusterParameterGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbclusterparametergroup.html | AWS::RDS::DBClusterParameterGroup}
 */
export interface RDSDBClusterParameterGroupProps {
  Description: string;
  Parameters: object;
  Family: string;
  DBClusterParameterGroupName?: string;
  Tags?: Tag[];
}
/**
 * Resource class for AWS::RDS::DBClusterParameterGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbclusterparametergroup.html | AWS::RDS::DBClusterParameterGroup}
 */
export class RDSDBClusterParameterGroup extends ResourceBase<
  "AWS::RDS::DBClusterParameterGroup",
  RDSDBClusterParameterGroupProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::RDS::DBClusterParameterGroup";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: RDSDBClusterParameterGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      RDSDBClusterParameterGroup.Type,
      RDSDBClusterParameterGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::RDS::DBInstance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html | AWS::RDS::DBInstance}
 */
export interface RDSDBInstanceProps {
  StorageEncrypted?: boolean;
  Timezone?: string;
  CertificateDetails?: RDSDBInstanceCertificateDetails;
  Port?: string;
  DBClusterIdentifier?: string;
  StorageThroughput?: number;
  MonitoringInterval?: number;
  DBParameterGroupName?: string;
  Endpoint?: RDSDBInstanceEndpoint;
  MultiAZ?: boolean;
  Engine?: string;
  Tags?: Tag[];
  PerformanceInsightsKMSKeyId?: string;
  SourceDBInstanceIdentifier?: string;
  EngineVersion?: string;
  StorageType?: string;
  KmsKeyId?: string;
  DBInstanceClass?: string;
  DeleteAutomatedBackups?: boolean;
  PerformanceInsightsRetentionPeriod?: number;
  AvailabilityZone?: string;
  OptionGroupName?: string;
  EnablePerformanceInsights?: boolean;
  AutoMinorVersionUpgrade?: boolean;
  DBSubnetGroupName?: string;
  DeletionProtection?: boolean;
  DBInstanceIdentifier?: string;
  AllocatedStorage?: string;
  MasterUserPassword?: string;
  MasterUserSecret?: RDSDBInstanceMasterUserSecret;
  NcharCharacterSetName?: string;
  SourceDBClusterIdentifier?: string;
  DBSecurityGroups?: any[];
  MasterUsername?: string;
  MaxAllocatedStorage?: number;
  PromotionTier?: number;
  PubliclyAccessible?: boolean;
  Domain?: string;
  DomainFqdn?: string;
  CharacterSetName?: string;
  MonitoringRoleArn?: string;
  AssociatedRoles?: any[];
  DomainOu?: string;
  DBClusterSnapshotIdentifier?: string;
  SourceDBInstanceAutomatedBackupsArn?: string;
  ProcessorFeatures?: any[];
  PreferredBackupWindow?: string;
  RestoreTime?: string;
  CertificateRotationRestart?: boolean;
  NetworkType?: string;
  CopyTagsToSnapshot?: boolean;
  DomainIAMRoleName?: string;
  ReplicaMode?: string;
  LicenseModel?: string;
  DomainDnsIps?: any[];
  PreferredMaintenanceWindow?: string;
  Iops?: number;
  SourceRegion?: string;
  UseLatestRestorableTime?: boolean;
  CACertificateIdentifier?: string;
  ManageMasterUserPassword?: boolean;
  SourceDbiResourceId?: string;
  DomainAuthSecretArn?: string;
  VPCSecurityGroups?: any[];
  AllowMajorVersionUpgrade?: boolean;
  DBName?: string;
  EnableIAMDatabaseAuthentication?: boolean;
  BackupRetentionPeriod?: number;
  CustomIAMInstanceProfile?: string;
  DBSnapshotIdentifier?: string;
  EnableCloudwatchLogsExports?: any[];
  UseDefaultProcessorFeatures?: boolean;
}
/**
 * Attributes type definition for AWS::RDS::DBInstance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html | AWS::RDS::DBInstance}
 */
export interface RDSDBInstanceAttribs {
  DBSystemId?: string;
  "Endpoint.Address"?: string;
  DBInstanceArn?: string;
  "CertificateDetails.ValidTill"?: string;
  "CertificateDetails.CAIdentifier"?: string;
  "Endpoint.Port"?: string;
  "Endpoint.HostedZoneId"?: string;
  DbiResourceId?: string;
  "MasterUserSecret.SecretArn"?: string;
}
/**
 * Resource class for AWS::RDS::DBInstance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html | AWS::RDS::DBInstance}
 */
export class RDSDBInstance extends ResourceBase<
  "AWS::RDS::DBInstance",
  RDSDBInstanceProps,
  RDSDBInstanceAttribs
> {
  public static readonly Type = "AWS::RDS::DBInstance";
  public static readonly AttributeNames: readonly (keyof RDSDBInstanceAttribs)[] =
    [
      "DBSystemId",
      "Endpoint.Address",
      "DBInstanceArn",
      "CertificateDetails.ValidTill",
      "CertificateDetails.CAIdentifier",
      "Endpoint.Port",
      "Endpoint.HostedZoneId",
      "DbiResourceId",
      "MasterUserSecret.SecretArn",
    ];
  constructor(
    logicalId: string,
    properties: RDSDBInstanceProps,
    options?: ResourceOptions,
  ) {
    super(
      RDSDBInstance.Type,
      RDSDBInstance.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::RDS::DBParameterGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbparametergroup.html | AWS::RDS::DBParameterGroup}
 */
export interface RDSDBParameterGroupProps {
  DBParameterGroupName?: string;
  Description: string;
  Parameters?: object;
  Family: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::RDS::DBParameterGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbparametergroup.html | AWS::RDS::DBParameterGroup}
 */
export interface RDSDBParameterGroupAttribs {
  DBParameterGroupName?: string;
}
/**
 * Resource class for AWS::RDS::DBParameterGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbparametergroup.html | AWS::RDS::DBParameterGroup}
 */
export class RDSDBParameterGroup extends ResourceBase<
  "AWS::RDS::DBParameterGroup",
  RDSDBParameterGroupProps,
  RDSDBParameterGroupAttribs
> {
  public static readonly Type = "AWS::RDS::DBParameterGroup";
  public static readonly AttributeNames: readonly (keyof RDSDBParameterGroupAttribs)[] =
    ["DBParameterGroupName"];
  constructor(
    logicalId: string,
    properties: RDSDBParameterGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      RDSDBParameterGroup.Type,
      RDSDBParameterGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::RDS::DBProxy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxy.html | AWS::RDS::DBProxy}
 */
export interface RDSDBProxyProps {
  RequireTLS?: boolean;
  DBProxyName: string;
  IdleClientTimeout?: number;
  VpcSecurityGroupIds?: any[];
  Auth: any[];
  DebugLogging?: boolean;
  VpcSubnetIds: any[];
  RoleArn: string;
  EngineFamily: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::RDS::DBProxy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxy.html | AWS::RDS::DBProxy}
 */
export interface RDSDBProxyAttribs {
  Endpoint?: string;
  VpcId?: string;
  DBProxyArn?: string;
}
/**
 * Resource class for AWS::RDS::DBProxy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxy.html | AWS::RDS::DBProxy}
 */
export class RDSDBProxy extends ResourceBase<
  "AWS::RDS::DBProxy",
  RDSDBProxyProps,
  RDSDBProxyAttribs
> {
  public static readonly Type = "AWS::RDS::DBProxy";
  public static readonly AttributeNames: readonly (keyof RDSDBProxyAttribs)[] =
    ["Endpoint", "VpcId", "DBProxyArn"];
  constructor(
    logicalId: string,
    properties: RDSDBProxyProps,
    options?: ResourceOptions,
  ) {
    super(
      RDSDBProxy.Type,
      RDSDBProxy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::RDS::DBProxyEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html | AWS::RDS::DBProxyEndpoint}
 */
export interface RDSDBProxyEndpointProps {
  DBProxyEndpointName: string;
  DBProxyName: string;
  TargetRole?: string;
  VpcSecurityGroupIds?: any[];
  VpcSubnetIds: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::RDS::DBProxyEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html | AWS::RDS::DBProxyEndpoint}
 */
export interface RDSDBProxyEndpointAttribs {
  DBProxyEndpointArn?: string;
  IsDefault?: boolean;
  VpcId?: string;
  Endpoint?: string;
}
/**
 * Resource class for AWS::RDS::DBProxyEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html | AWS::RDS::DBProxyEndpoint}
 */
export class RDSDBProxyEndpoint extends ResourceBase<
  "AWS::RDS::DBProxyEndpoint",
  RDSDBProxyEndpointProps,
  RDSDBProxyEndpointAttribs
> {
  public static readonly Type = "AWS::RDS::DBProxyEndpoint";
  public static readonly AttributeNames: readonly (keyof RDSDBProxyEndpointAttribs)[] =
    ["DBProxyEndpointArn", "IsDefault", "VpcId", "Endpoint"];
  constructor(
    logicalId: string,
    properties: RDSDBProxyEndpointProps,
    options?: ResourceOptions,
  ) {
    super(
      RDSDBProxyEndpoint.Type,
      RDSDBProxyEndpoint.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::RDS::DBProxyTargetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxytargetgroup.html | AWS::RDS::DBProxyTargetGroup}
 */
export interface RDSDBProxyTargetGroupProps {
  DBProxyName: string;
  DBInstanceIdentifiers?: any[];
  TargetGroupName: string;
  ConnectionPoolConfigurationInfo?: RDSDBProxyTargetGroupConnectionPoolConfigurationInfoFormat;
  DBClusterIdentifiers?: any[];
}
/**
 * Attributes type definition for AWS::RDS::DBProxyTargetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxytargetgroup.html | AWS::RDS::DBProxyTargetGroup}
 */
export interface RDSDBProxyTargetGroupAttribs {
  TargetGroupArn?: string;
}
/**
 * Resource class for AWS::RDS::DBProxyTargetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxytargetgroup.html | AWS::RDS::DBProxyTargetGroup}
 */
export class RDSDBProxyTargetGroup extends ResourceBase<
  "AWS::RDS::DBProxyTargetGroup",
  RDSDBProxyTargetGroupProps,
  RDSDBProxyTargetGroupAttribs
> {
  public static readonly Type = "AWS::RDS::DBProxyTargetGroup";
  public static readonly AttributeNames: readonly (keyof RDSDBProxyTargetGroupAttribs)[] =
    ["TargetGroupArn"];
  constructor(
    logicalId: string,
    properties: RDSDBProxyTargetGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      RDSDBProxyTargetGroup.Type,
      RDSDBProxyTargetGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::RDS::DBSecurityGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-security-group.html | AWS::RDS::DBSecurityGroup}
 */
export interface RDSDBSecurityGroupProps {
  DBSecurityGroupIngress: any[];
  EC2VpcId?: string;
  GroupDescription: string;
  Tags?: Tag[];
}
/**
 * Resource class for AWS::RDS::DBSecurityGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-security-group.html | AWS::RDS::DBSecurityGroup}
 */
export class RDSDBSecurityGroup extends ResourceBase<
  "AWS::RDS::DBSecurityGroup",
  RDSDBSecurityGroupProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::RDS::DBSecurityGroup";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: RDSDBSecurityGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      RDSDBSecurityGroup.Type,
      RDSDBSecurityGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::RDS::DBSecurityGroupIngress
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-security-group-ingress.html | AWS::RDS::DBSecurityGroupIngress}
 */
export interface RDSDBSecurityGroupIngressProps {
  CIDRIP?: string;
  DBSecurityGroupName: string;
  EC2SecurityGroupId?: string;
  EC2SecurityGroupName?: string;
  EC2SecurityGroupOwnerId?: string;
}
/**
 * Resource class for AWS::RDS::DBSecurityGroupIngress
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-security-group-ingress.html | AWS::RDS::DBSecurityGroupIngress}
 */
export class RDSDBSecurityGroupIngress extends ResourceBase<
  "AWS::RDS::DBSecurityGroupIngress",
  RDSDBSecurityGroupIngressProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::RDS::DBSecurityGroupIngress";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: RDSDBSecurityGroupIngressProps,
    options?: ResourceOptions,
  ) {
    super(
      RDSDBSecurityGroupIngress.Type,
      RDSDBSecurityGroupIngress.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::RDS::DBSubnetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsubnetgroup.html | AWS::RDS::DBSubnetGroup}
 */
export interface RDSDBSubnetGroupProps {
  DBSubnetGroupName?: string;
  DBSubnetGroupDescription: string;
  SubnetIds: any[];
  Tags?: Tag[];
}
/**
 * Resource class for AWS::RDS::DBSubnetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsubnetgroup.html | AWS::RDS::DBSubnetGroup}
 */
export class RDSDBSubnetGroup extends ResourceBase<
  "AWS::RDS::DBSubnetGroup",
  RDSDBSubnetGroupProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::RDS::DBSubnetGroup";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: RDSDBSubnetGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      RDSDBSubnetGroup.Type,
      RDSDBSubnetGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::RDS::EventSubscription
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-eventsubscription.html | AWS::RDS::EventSubscription}
 */
export interface RDSEventSubscriptionProps {
  SourceType?: string;
  Enabled?: boolean;
  EventCategories?: any[];
  SubscriptionName?: string;
  SnsTopicArn: string;
  SourceIds?: any[];
  Tags?: Tag[];
}
/**
 * Resource class for AWS::RDS::EventSubscription
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-eventsubscription.html | AWS::RDS::EventSubscription}
 */
export class RDSEventSubscription extends ResourceBase<
  "AWS::RDS::EventSubscription",
  RDSEventSubscriptionProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::RDS::EventSubscription";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: RDSEventSubscriptionProps,
    options?: ResourceOptions,
  ) {
    super(
      RDSEventSubscription.Type,
      RDSEventSubscription.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::RDS::GlobalCluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html | AWS::RDS::GlobalCluster}
 */
export interface RDSGlobalClusterProps {
  StorageEncrypted?: boolean;
  EngineVersion?: string;
  SourceDBClusterIdentifier?: string;
  DeletionProtection?: boolean;
  GlobalClusterIdentifier?: string;
  Engine?: string;
}
/**
 * Resource class for AWS::RDS::GlobalCluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html | AWS::RDS::GlobalCluster}
 */
export class RDSGlobalCluster extends ResourceBase<
  "AWS::RDS::GlobalCluster",
  RDSGlobalClusterProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::RDS::GlobalCluster";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: RDSGlobalClusterProps,
    options?: ResourceOptions,
  ) {
    super(
      RDSGlobalCluster.Type,
      RDSGlobalCluster.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::RDS::OptionGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-optiongroup.html | AWS::RDS::OptionGroup}
 */
export interface RDSOptionGroupProps {
  OptionGroupDescription: string;
  OptionGroupName?: string;
  OptionConfigurations?: any[];
  MajorEngineVersion: string;
  EngineName: string;
  Tags?: Tag[];
}
/**
 * Resource class for AWS::RDS::OptionGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-optiongroup.html | AWS::RDS::OptionGroup}
 */
export class RDSOptionGroup extends ResourceBase<
  "AWS::RDS::OptionGroup",
  RDSOptionGroupProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::RDS::OptionGroup";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: RDSOptionGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      RDSOptionGroup.Type,
      RDSOptionGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
