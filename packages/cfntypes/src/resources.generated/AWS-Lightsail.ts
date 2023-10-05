import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Lightsail::Bucket.AccessRules
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-bucket-accessrules.html | AWS::Lightsail::Bucket.AccessRules}
 */
export interface LightsailBucketAccessRules {
  AllowPublicOverrides?: boolean;
  GetObject?: string;
}
/**
 * Type definition for AWS::Lightsail::Container.Container
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-container.html | AWS::Lightsail::Container.Container}
 */
export interface LightsailContainerContainer {
  ContainerName?: string;
  Command?: any[];
  Environment?: any[];
  Ports?: any[];
  Image?: string;
}
/**
 * Type definition for AWS::Lightsail::Container.ContainerServiceDeployment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-containerservicedeployment.html | AWS::Lightsail::Container.ContainerServiceDeployment}
 */
export interface LightsailContainerContainerServiceDeployment {
  Containers?: any[];
  PublicEndpoint?: LightsailContainerPublicEndpoint;
}
/**
 * Type definition for AWS::Lightsail::Container.EcrImagePullerRole
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-ecrimagepullerrole.html | AWS::Lightsail::Container.EcrImagePullerRole}
 */
export interface LightsailContainerEcrImagePullerRole {
  PrincipalArn?: string;
  IsActive?: boolean;
}
/**
 * Type definition for AWS::Lightsail::Container.EnvironmentVariable
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-environmentvariable.html | AWS::Lightsail::Container.EnvironmentVariable}
 */
export interface LightsailContainerEnvironmentVariable {
  Variable?: string;
  Value?: string;
}
/**
 * Type definition for AWS::Lightsail::Container.HealthCheckConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-healthcheckconfig.html | AWS::Lightsail::Container.HealthCheckConfig}
 */
export interface LightsailContainerHealthCheckConfig {
  Path?: string;
  TimeoutSeconds?: number;
  SuccessCodes?: string;
  UnhealthyThreshold?: number;
  HealthyThreshold?: number;
  IntervalSeconds?: number;
}
/**
 * Type definition for AWS::Lightsail::Container.PortInfo
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-portinfo.html | AWS::Lightsail::Container.PortInfo}
 */
export interface LightsailContainerPortInfo {
  Port?: string;
  Protocol?: string;
}
/**
 * Type definition for AWS::Lightsail::Container.PrivateRegistryAccess
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-privateregistryaccess.html | AWS::Lightsail::Container.PrivateRegistryAccess}
 */
export interface LightsailContainerPrivateRegistryAccess {
  EcrImagePullerRole?: LightsailContainerEcrImagePullerRole;
}
/**
 * Type definition for AWS::Lightsail::Container.PublicDomainName
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-publicdomainname.html | AWS::Lightsail::Container.PublicDomainName}
 */
export interface LightsailContainerPublicDomainName {
  CertificateName?: string;
  DomainNames?: any[];
}
/**
 * Type definition for AWS::Lightsail::Container.PublicEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-publicendpoint.html | AWS::Lightsail::Container.PublicEndpoint}
 */
export interface LightsailContainerPublicEndpoint {
  ContainerName?: string;
  ContainerPort?: number;
  HealthCheckConfig?: LightsailContainerHealthCheckConfig;
}
/**
 * Type definition for AWS::Lightsail::Database.RelationalDatabaseParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-database-relationaldatabaseparameter.html | AWS::Lightsail::Database.RelationalDatabaseParameter}
 */
export interface LightsailDatabaseRelationalDatabaseParameter {
  ApplyMethod?: string;
  IsModifiable?: boolean;
  ApplyType?: string;
  AllowedValues?: string;
  Description?: string;
  ParameterValue?: string;
  DataType?: string;
  ParameterName?: string;
}
/**
 * Type definition for AWS::Lightsail::Disk.AddOn
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-disk-addon.html | AWS::Lightsail::Disk.AddOn}
 */
export interface LightsailDiskAddOn {
  Status?: string;
  AddOnType: string;
  AutoSnapshotAddOnRequest?: LightsailDiskAutoSnapshotAddOn;
}
/**
 * Type definition for AWS::Lightsail::Disk.AutoSnapshotAddOn
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-disk-autosnapshotaddon.html | AWS::Lightsail::Disk.AutoSnapshotAddOn}
 */
export interface LightsailDiskAutoSnapshotAddOn {
  SnapshotTimeOfDay?: string;
}
/**
 * Type definition for AWS::Lightsail::Disk.Location
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-disk-location.html | AWS::Lightsail::Disk.Location}
 */
export interface LightsailDiskLocation {
  RegionName?: string;
  AvailabilityZone?: string;
}
/**
 * Type definition for AWS::Lightsail::Distribution.CacheBehavior
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-cachebehavior.html | AWS::Lightsail::Distribution.CacheBehavior}
 */
export interface LightsailDistributionCacheBehavior {
  Behavior?: string;
}
/**
 * Type definition for AWS::Lightsail::Distribution.CacheBehaviorPerPath
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-cachebehaviorperpath.html | AWS::Lightsail::Distribution.CacheBehaviorPerPath}
 */
export interface LightsailDistributionCacheBehaviorPerPath {
  Path?: string;
  Behavior?: string;
}
/**
 * Type definition for AWS::Lightsail::Distribution.CacheSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-cachesettings.html | AWS::Lightsail::Distribution.CacheSettings}
 */
export interface LightsailDistributionCacheSettings {
  ForwardedCookies?: LightsailDistributionCookieObject;
  MinimumTTL?: number;
  CachedHTTPMethods?: string;
  AllowedHTTPMethods?: string;
  MaximumTTL?: number;
  ForwardedHeaders?: LightsailDistributionHeaderObject;
  DefaultTTL?: number;
  ForwardedQueryStrings?: LightsailDistributionQueryStringObject;
}
/**
 * Type definition for AWS::Lightsail::Distribution.CookieObject
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-cookieobject.html | AWS::Lightsail::Distribution.CookieObject}
 */
export interface LightsailDistributionCookieObject {
  CookiesAllowList?: any[];
  Option?: string;
}
/**
 * Type definition for AWS::Lightsail::Distribution.HeaderObject
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-headerobject.html | AWS::Lightsail::Distribution.HeaderObject}
 */
export interface LightsailDistributionHeaderObject {
  HeadersAllowList?: any[];
  Option?: string;
}
/**
 * Type definition for AWS::Lightsail::Distribution.InputOrigin
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-inputorigin.html | AWS::Lightsail::Distribution.InputOrigin}
 */
export interface LightsailDistributionInputOrigin {
  RegionName?: string;
  ProtocolPolicy?: string;
  Name?: string;
}
/**
 * Type definition for AWS::Lightsail::Distribution.QueryStringObject
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-querystringobject.html | AWS::Lightsail::Distribution.QueryStringObject}
 */
export interface LightsailDistributionQueryStringObject {
  Option?: boolean;
  QueryStringsAllowList?: any[];
}
/**
 * Type definition for AWS::Lightsail::Instance.AddOn
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-addon.html | AWS::Lightsail::Instance.AddOn}
 */
export interface LightsailInstanceAddOn {
  Status?: string;
  AddOnType: string;
  AutoSnapshotAddOnRequest?: LightsailInstanceAutoSnapshotAddOn;
}
/**
 * Type definition for AWS::Lightsail::Instance.AutoSnapshotAddOn
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-autosnapshotaddon.html | AWS::Lightsail::Instance.AutoSnapshotAddOn}
 */
export interface LightsailInstanceAutoSnapshotAddOn {
  SnapshotTimeOfDay?: string;
}
/**
 * Type definition for AWS::Lightsail::Instance.Disk
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-disk.html | AWS::Lightsail::Instance.Disk}
 */
export interface LightsailInstanceDisk {
  SizeInGb?: string;
  Path: string;
  AttachmentState?: string;
  IsSystemDisk?: boolean;
  AttachedTo?: string;
  IOPS?: number;
  DiskName: string;
}
/**
 * Type definition for AWS::Lightsail::Instance.Hardware
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-hardware.html | AWS::Lightsail::Instance.Hardware}
 */
export interface LightsailInstanceHardware {
  CpuCount?: number;
  RamSizeInGb?: number;
  Disks?: any[];
}
/**
 * Type definition for AWS::Lightsail::Instance.Location
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-location.html | AWS::Lightsail::Instance.Location}
 */
export interface LightsailInstanceLocation {
  RegionName?: string;
  AvailabilityZone?: string;
}
/**
 * Type definition for AWS::Lightsail::Instance.MonthlyTransfer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-monthlytransfer.html | AWS::Lightsail::Instance.MonthlyTransfer}
 */
export interface LightsailInstanceMonthlyTransfer {
  GbPerMonthAllocated?: string;
}
/**
 * Type definition for AWS::Lightsail::Instance.Networking
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-networking.html | AWS::Lightsail::Instance.Networking}
 */
export interface LightsailInstanceNetworking {
  Ports: any[];
  MonthlyTransfer?: LightsailInstanceMonthlyTransfer;
}
/**
 * Type definition for AWS::Lightsail::Instance.Port
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-port.html | AWS::Lightsail::Instance.Port}
 */
export interface LightsailInstancePort {
  FromPort?: number;
  AccessDirection?: string;
  CidrListAliases?: any[];
  ToPort?: number;
  Ipv6Cidrs?: any[];
  AccessFrom?: string;
  Protocol?: string;
  AccessType?: string;
  Cidrs?: any[];
  CommonName?: string;
}
/**
 * Type definition for AWS::Lightsail::Instance.State
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-state.html | AWS::Lightsail::Instance.State}
 */
export interface LightsailInstanceState {
  Code?: number;
  Name?: string;
}
/**
 * Type definition for AWS::Lightsail::Alarm
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-alarm.html | AWS::Lightsail::Alarm}
 */
export interface LightsailAlarmProps {
  MetricName: string;
  ComparisonOperator: string;
  TreatMissingData?: string;
  AlarmName: string;
  ContactProtocols?: any[];
  MonitoredResourceName: string;
  EvaluationPeriods: number;
  NotificationEnabled?: boolean;
  DatapointsToAlarm?: number;
  NotificationTriggers?: any[];
  Threshold: number;
}
/**
 * Attributes type definition for AWS::Lightsail::Alarm
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-alarm.html | AWS::Lightsail::Alarm}
 */
export interface LightsailAlarmAttribs {
  AlarmArn?: string;
  State?: string;
}
/**
 * Resource class for AWS::Lightsail::Alarm
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-alarm.html | AWS::Lightsail::Alarm}
 */
export class LightsailAlarm extends ResourceBase<
  "AWS::Lightsail::Alarm",
  LightsailAlarmProps,
  LightsailAlarmAttribs
> {
  public static readonly Type = "AWS::Lightsail::Alarm";
  public static readonly AttributeNames: readonly (keyof LightsailAlarmAttribs)[] =
    ["AlarmArn", "State"];
  constructor(
    logicalId: string,
    properties: LightsailAlarmProps,
    options?: ResourceOptions,
  ) {
    super(
      LightsailAlarm.Type,
      LightsailAlarm.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Lightsail::Bucket
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-bucket.html | AWS::Lightsail::Bucket}
 */
export interface LightsailBucketProps {
  ObjectVersioning?: boolean;
  ReadOnlyAccessAccounts?: any[];
  BundleId: string;
  BucketName: string;
  AccessRules?: LightsailBucketAccessRules;
  ResourcesReceivingAccess?: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::Lightsail::Bucket
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-bucket.html | AWS::Lightsail::Bucket}
 */
export interface LightsailBucketAttribs {
  BucketArn?: string;
  AbleToUpdateBundle?: boolean;
  Url?: string;
}
/**
 * Resource class for AWS::Lightsail::Bucket
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-bucket.html | AWS::Lightsail::Bucket}
 */
export class LightsailBucket extends ResourceBase<
  "AWS::Lightsail::Bucket",
  LightsailBucketProps,
  LightsailBucketAttribs
> {
  public static readonly Type = "AWS::Lightsail::Bucket";
  public static readonly AttributeNames: readonly (keyof LightsailBucketAttribs)[] =
    ["BucketArn", "AbleToUpdateBundle", "Url"];
  constructor(
    logicalId: string,
    properties: LightsailBucketProps,
    options?: ResourceOptions,
  ) {
    super(
      LightsailBucket.Type,
      LightsailBucket.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Lightsail::Certificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-certificate.html | AWS::Lightsail::Certificate}
 */
export interface LightsailCertificateProps {
  DomainName: string;
  SubjectAlternativeNames?: any[];
  CertificateName: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::Lightsail::Certificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-certificate.html | AWS::Lightsail::Certificate}
 */
export interface LightsailCertificateAttribs {
  Status?: string;
  CertificateArn?: string;
}
/**
 * Resource class for AWS::Lightsail::Certificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-certificate.html | AWS::Lightsail::Certificate}
 */
export class LightsailCertificate extends ResourceBase<
  "AWS::Lightsail::Certificate",
  LightsailCertificateProps,
  LightsailCertificateAttribs
> {
  public static readonly Type = "AWS::Lightsail::Certificate";
  public static readonly AttributeNames: readonly (keyof LightsailCertificateAttribs)[] =
    ["Status", "CertificateArn"];
  constructor(
    logicalId: string,
    properties: LightsailCertificateProps,
    options?: ResourceOptions,
  ) {
    super(
      LightsailCertificate.Type,
      LightsailCertificate.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Lightsail::Container
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-container.html | AWS::Lightsail::Container}
 */
export interface LightsailContainerProps {
  PublicDomainNames?: any[];
  ServiceName: string;
  PrivateRegistryAccess?: LightsailContainerPrivateRegistryAccess;
  ContainerServiceDeployment?: LightsailContainerContainerServiceDeployment;
  IsDisabled?: boolean;
  Scale: number;
  Power: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::Lightsail::Container
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-container.html | AWS::Lightsail::Container}
 */
export interface LightsailContainerAttribs {
  PrincipalArn?: string;
  "PrivateRegistryAccess.EcrImagePullerRole.PrincipalArn"?: string;
  ContainerArn?: string;
  Url?: string;
}
/**
 * Resource class for AWS::Lightsail::Container
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-container.html | AWS::Lightsail::Container}
 */
export class LightsailContainer extends ResourceBase<
  "AWS::Lightsail::Container",
  LightsailContainerProps,
  LightsailContainerAttribs
> {
  public static readonly Type = "AWS::Lightsail::Container";
  public static readonly AttributeNames: readonly (keyof LightsailContainerAttribs)[] =
    [
      "PrincipalArn",
      "PrivateRegistryAccess.EcrImagePullerRole.PrincipalArn",
      "ContainerArn",
      "Url",
    ];
  constructor(
    logicalId: string,
    properties: LightsailContainerProps,
    options?: ResourceOptions,
  ) {
    super(
      LightsailContainer.Type,
      LightsailContainer.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Lightsail::Database
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-database.html | AWS::Lightsail::Database}
 */
export interface LightsailDatabaseProps {
  RelationalDatabaseName: string;
  CaCertificateIdentifier?: string;
  AvailabilityZone?: string;
  PreferredMaintenanceWindow?: string;
  RelationalDatabaseBlueprintId: string;
  PreferredBackupWindow?: string;
  MasterDatabaseName: string;
  MasterUserPassword?: string;
  RelationalDatabaseParameters?: any[];
  RotateMasterUserPassword?: boolean;
  MasterUsername: string;
  PubliclyAccessible?: boolean;
  RelationalDatabaseBundleId: string;
  BackupRetention?: boolean;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::Lightsail::Database
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-database.html | AWS::Lightsail::Database}
 */
export interface LightsailDatabaseAttribs {
  DatabaseArn?: string;
}
/**
 * Resource class for AWS::Lightsail::Database
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-database.html | AWS::Lightsail::Database}
 */
export class LightsailDatabase extends ResourceBase<
  "AWS::Lightsail::Database",
  LightsailDatabaseProps,
  LightsailDatabaseAttribs
> {
  public static readonly Type = "AWS::Lightsail::Database";
  public static readonly AttributeNames: readonly (keyof LightsailDatabaseAttribs)[] =
    ["DatabaseArn"];
  constructor(
    logicalId: string,
    properties: LightsailDatabaseProps,
    options?: ResourceOptions,
  ) {
    super(
      LightsailDatabase.Type,
      LightsailDatabase.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Lightsail::Disk
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html | AWS::Lightsail::Disk}
 */
export interface LightsailDiskProps {
  SizeInGb: number;
  AvailabilityZone?: string;
  AddOns?: any[];
  DiskName: string;
  Tags?: Tag[];
  Location?: LightsailDiskLocation;
}
/**
 * Attributes type definition for AWS::Lightsail::Disk
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html | AWS::Lightsail::Disk}
 */
export interface LightsailDiskAttribs {
  Path?: string;
  AttachmentState?: string;
  "Location.AvailabilityZone"?: string;
  SupportCode?: string;
  State?: string;
  IsAttached?: boolean;
  ResourceType?: string;
  DiskArn?: string;
  AttachedTo?: string;
  Iops?: number;
  "Location.RegionName"?: string;
}
/**
 * Resource class for AWS::Lightsail::Disk
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html | AWS::Lightsail::Disk}
 */
export class LightsailDisk extends ResourceBase<
  "AWS::Lightsail::Disk",
  LightsailDiskProps,
  LightsailDiskAttribs
> {
  public static readonly Type = "AWS::Lightsail::Disk";
  public static readonly AttributeNames: readonly (keyof LightsailDiskAttribs)[] =
    [
      "Path",
      "AttachmentState",
      "Location.AvailabilityZone",
      "SupportCode",
      "State",
      "IsAttached",
      "ResourceType",
      "DiskArn",
      "AttachedTo",
      "Iops",
      "Location.RegionName",
    ];
  constructor(
    logicalId: string,
    properties: LightsailDiskProps,
    options?: ResourceOptions,
  ) {
    super(
      LightsailDisk.Type,
      LightsailDisk.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Lightsail::Distribution
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-distribution.html | AWS::Lightsail::Distribution}
 */
export interface LightsailDistributionProps {
  IpAddressType?: string;
  Origin: LightsailDistributionInputOrigin;
  DistributionName: string;
  BundleId: string;
  DefaultCacheBehavior: LightsailDistributionCacheBehavior;
  IsEnabled?: boolean;
  CacheBehaviorSettings?: LightsailDistributionCacheSettings;
  CertificateName?: string;
  Tags?: Tag[];
  CacheBehaviors?: any[];
}
/**
 * Attributes type definition for AWS::Lightsail::Distribution
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-distribution.html | AWS::Lightsail::Distribution}
 */
export interface LightsailDistributionAttribs {
  Status?: string;
  DistributionArn?: string;
  AbleToUpdateBundle?: boolean;
}
/**
 * Resource class for AWS::Lightsail::Distribution
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-distribution.html | AWS::Lightsail::Distribution}
 */
export class LightsailDistribution extends ResourceBase<
  "AWS::Lightsail::Distribution",
  LightsailDistributionProps,
  LightsailDistributionAttribs
> {
  public static readonly Type = "AWS::Lightsail::Distribution";
  public static readonly AttributeNames: readonly (keyof LightsailDistributionAttribs)[] =
    ["Status", "DistributionArn", "AbleToUpdateBundle"];
  constructor(
    logicalId: string,
    properties: LightsailDistributionProps,
    options?: ResourceOptions,
  ) {
    super(
      LightsailDistribution.Type,
      LightsailDistribution.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Lightsail::Instance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html | AWS::Lightsail::Instance}
 */
export interface LightsailInstanceProps {
  InstanceName: string;
  KeyPairName?: string;
  BundleId: string;
  BlueprintId: string;
  Networking?: LightsailInstanceNetworking;
  UserData?: string;
  State?: LightsailInstanceState;
  AvailabilityZone?: string;
  AddOns?: any[];
  Hardware?: LightsailInstanceHardware;
  Tags?: Tag[];
  Location?: LightsailInstanceLocation;
}
/**
 * Attributes type definition for AWS::Lightsail::Instance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html | AWS::Lightsail::Instance}
 */
export interface LightsailInstanceAttribs {
  SshKeyName?: string;
  "Networking.MonthlyTransfer.GbPerMonthAllocated"?: string;
  "Hardware.CpuCount"?: number;
  IsStaticIp?: boolean;
  PrivateIpAddress?: string;
  UserName?: string;
  ResourceType?: string;
  "Location.RegionName"?: string;
  PublicIpAddress?: string;
  "Location.AvailabilityZone"?: string;
  "State.Code"?: number;
  SupportCode?: string;
  "State.Name"?: string;
  InstanceArn?: string;
  "Hardware.RamSizeInGb"?: number;
}
/**
 * Resource class for AWS::Lightsail::Instance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html | AWS::Lightsail::Instance}
 */
export class LightsailInstance extends ResourceBase<
  "AWS::Lightsail::Instance",
  LightsailInstanceProps,
  LightsailInstanceAttribs
> {
  public static readonly Type = "AWS::Lightsail::Instance";
  public static readonly AttributeNames: readonly (keyof LightsailInstanceAttribs)[] =
    [
      "SshKeyName",
      "Networking.MonthlyTransfer.GbPerMonthAllocated",
      "Hardware.CpuCount",
      "IsStaticIp",
      "PrivateIpAddress",
      "UserName",
      "ResourceType",
      "Location.RegionName",
      "PublicIpAddress",
      "Location.AvailabilityZone",
      "State.Code",
      "SupportCode",
      "State.Name",
      "InstanceArn",
      "Hardware.RamSizeInGb",
    ];
  constructor(
    logicalId: string,
    properties: LightsailInstanceProps,
    options?: ResourceOptions,
  ) {
    super(
      LightsailInstance.Type,
      LightsailInstance.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Lightsail::LoadBalancer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancer.html | AWS::Lightsail::LoadBalancer}
 */
export interface LightsailLoadBalancerProps {
  IpAddressType?: string;
  SessionStickinessLBCookieDurationSeconds?: string;
  LoadBalancerName: string;
  AttachedInstances?: any[];
  InstancePort: number;
  HealthCheckPath?: string;
  SessionStickinessEnabled?: boolean;
  TlsPolicyName?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::Lightsail::LoadBalancer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancer.html | AWS::Lightsail::LoadBalancer}
 */
export interface LightsailLoadBalancerAttribs {
  LoadBalancerArn?: string;
}
/**
 * Resource class for AWS::Lightsail::LoadBalancer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancer.html | AWS::Lightsail::LoadBalancer}
 */
export class LightsailLoadBalancer extends ResourceBase<
  "AWS::Lightsail::LoadBalancer",
  LightsailLoadBalancerProps,
  LightsailLoadBalancerAttribs
> {
  public static readonly Type = "AWS::Lightsail::LoadBalancer";
  public static readonly AttributeNames: readonly (keyof LightsailLoadBalancerAttribs)[] =
    ["LoadBalancerArn"];
  constructor(
    logicalId: string,
    properties: LightsailLoadBalancerProps,
    options?: ResourceOptions,
  ) {
    super(
      LightsailLoadBalancer.Type,
      LightsailLoadBalancer.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Lightsail::LoadBalancerTlsCertificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancertlscertificate.html | AWS::Lightsail::LoadBalancerTlsCertificate}
 */
export interface LightsailLoadBalancerTlsCertificateProps {
  LoadBalancerName: string;
  CertificateDomainName: string;
  IsAttached?: boolean;
  CertificateAlternativeNames?: any[];
  HttpsRedirectionEnabled?: boolean;
  CertificateName: string;
}
/**
 * Attributes type definition for AWS::Lightsail::LoadBalancerTlsCertificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancertlscertificate.html | AWS::Lightsail::LoadBalancerTlsCertificate}
 */
export interface LightsailLoadBalancerTlsCertificateAttribs {
  Status?: string;
  LoadBalancerTlsCertificateArn?: string;
}
/**
 * Resource class for AWS::Lightsail::LoadBalancerTlsCertificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancertlscertificate.html | AWS::Lightsail::LoadBalancerTlsCertificate}
 */
export class LightsailLoadBalancerTlsCertificate extends ResourceBase<
  "AWS::Lightsail::LoadBalancerTlsCertificate",
  LightsailLoadBalancerTlsCertificateProps,
  LightsailLoadBalancerTlsCertificateAttribs
> {
  public static readonly Type = "AWS::Lightsail::LoadBalancerTlsCertificate";
  public static readonly AttributeNames: readonly (keyof LightsailLoadBalancerTlsCertificateAttribs)[] =
    ["Status", "LoadBalancerTlsCertificateArn"];
  constructor(
    logicalId: string,
    properties: LightsailLoadBalancerTlsCertificateProps,
    options?: ResourceOptions,
  ) {
    super(
      LightsailLoadBalancerTlsCertificate.Type,
      LightsailLoadBalancerTlsCertificate.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Lightsail::StaticIp
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-staticip.html | AWS::Lightsail::StaticIp}
 */
export interface LightsailStaticIpProps {
  StaticIpName: string;
  AttachedTo?: string;
}
/**
 * Attributes type definition for AWS::Lightsail::StaticIp
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-staticip.html | AWS::Lightsail::StaticIp}
 */
export interface LightsailStaticIpAttribs {
  StaticIpArn?: string;
  IsAttached?: boolean;
  IpAddress?: string;
}
/**
 * Resource class for AWS::Lightsail::StaticIp
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-staticip.html | AWS::Lightsail::StaticIp}
 */
export class LightsailStaticIp extends ResourceBase<
  "AWS::Lightsail::StaticIp",
  LightsailStaticIpProps,
  LightsailStaticIpAttribs
> {
  public static readonly Type = "AWS::Lightsail::StaticIp";
  public static readonly AttributeNames: readonly (keyof LightsailStaticIpAttribs)[] =
    ["StaticIpArn", "IsAttached", "IpAddress"];
  constructor(
    logicalId: string,
    properties: LightsailStaticIpProps,
    options?: ResourceOptions,
  ) {
    super(
      LightsailStaticIp.Type,
      LightsailStaticIp.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
