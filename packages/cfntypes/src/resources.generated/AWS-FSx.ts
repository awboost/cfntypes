import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::FSx::DataRepositoryAssociation.AutoExportPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-datarepositoryassociation-autoexportpolicy.html | AWS::FSx::DataRepositoryAssociation.AutoExportPolicy}
 */
export interface FSxDataRepositoryAssociationAutoExportPolicy {
  Events: any[];
}
/**
 * Type definition for AWS::FSx::DataRepositoryAssociation.AutoImportPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-datarepositoryassociation-autoimportpolicy.html | AWS::FSx::DataRepositoryAssociation.AutoImportPolicy}
 */
export interface FSxDataRepositoryAssociationAutoImportPolicy {
  Events: any[];
}
/**
 * Type definition for AWS::FSx::DataRepositoryAssociation.S3
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-datarepositoryassociation-s3.html | AWS::FSx::DataRepositoryAssociation.S3}
 */
export interface FSxDataRepositoryAssociationS3 {
  AutoImportPolicy?: FSxDataRepositoryAssociationAutoImportPolicy;
  AutoExportPolicy?: FSxDataRepositoryAssociationAutoExportPolicy;
}
/**
 * Type definition for AWS::FSx::FileSystem.AuditLogConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-windowsconfiguration-auditlogconfiguration.html | AWS::FSx::FileSystem.AuditLogConfiguration}
 */
export interface FSxFileSystemAuditLogConfiguration {
  FileAccessAuditLogLevel: string;
  FileShareAccessAuditLogLevel: string;
  AuditLogDestination?: string;
}
/**
 * Type definition for AWS::FSx::FileSystem.ClientConfigurations
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-openzfsconfiguration-rootvolumeconfiguration-nfsexports-clientconfigurations.html | AWS::FSx::FileSystem.ClientConfigurations}
 */
export interface FSxFileSystemClientConfigurations {
  Options?: any[];
  Clients?: string;
}
/**
 * Type definition for AWS::FSx::FileSystem.DiskIopsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-openzfsconfiguration-diskiopsconfiguration.html | AWS::FSx::FileSystem.DiskIopsConfiguration}
 */
export interface FSxFileSystemDiskIopsConfiguration {
  Mode?: string;
  Iops?: number;
}
/**
 * Type definition for AWS::FSx::FileSystem.LustreConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-lustreconfiguration.html | AWS::FSx::FileSystem.LustreConfiguration}
 */
export interface FSxFileSystemLustreConfiguration {
  DataCompressionType?: string;
  DriveCacheType?: string;
  ImportPath?: string;
  WeeklyMaintenanceStartTime?: string;
  AutoImportPolicy?: string;
  ImportedFileChunkSize?: number;
  DeploymentType?: string;
  DailyAutomaticBackupStartTime?: string;
  CopyTagsToBackups?: boolean;
  ExportPath?: string;
  PerUnitStorageThroughput?: number;
  AutomaticBackupRetentionDays?: number;
}
/**
 * Type definition for AWS::FSx::FileSystem.NfsExports
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-openzfsconfiguration-rootvolumeconfiguration-nfsexports.html | AWS::FSx::FileSystem.NfsExports}
 */
export interface FSxFileSystemNfsExports {
  ClientConfigurations?: any[];
}
/**
 * Type definition for AWS::FSx::FileSystem.OntapConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-ontapconfiguration.html | AWS::FSx::FileSystem.OntapConfiguration}
 */
export interface FSxFileSystemOntapConfiguration {
  FsxAdminPassword?: string;
  RouteTableIds?: any[];
  WeeklyMaintenanceStartTime?: string;
  DiskIopsConfiguration?: FSxFileSystemDiskIopsConfiguration;
  DeploymentType: string;
  DailyAutomaticBackupStartTime?: string;
  ThroughputCapacity?: number;
  AutomaticBackupRetentionDays?: number;
  EndpointIpAddressRange?: string;
  PreferredSubnetId?: string;
}
/**
 * Type definition for AWS::FSx::FileSystem.OpenZFSConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-openzfsconfiguration.html | AWS::FSx::FileSystem.OpenZFSConfiguration}
 */
export interface FSxFileSystemOpenZFSConfiguration {
  Options?: any[];
  CopyTagsToVolumes?: boolean;
  DeploymentType: string;
  ThroughputCapacity?: number;
  RootVolumeConfiguration?: FSxFileSystemRootVolumeConfiguration;
  EndpointIpAddressRange?: string;
  RouteTableIds?: any[];
  WeeklyMaintenanceStartTime?: string;
  DiskIopsConfiguration?: FSxFileSystemDiskIopsConfiguration;
  DailyAutomaticBackupStartTime?: string;
  CopyTagsToBackups?: boolean;
  AutomaticBackupRetentionDays?: number;
  PreferredSubnetId?: string;
}
/**
 * Type definition for AWS::FSx::FileSystem.RootVolumeConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-openzfsconfiguration-rootvolumeconfiguration.html | AWS::FSx::FileSystem.RootVolumeConfiguration}
 */
export interface FSxFileSystemRootVolumeConfiguration {
  ReadOnly?: boolean;
  DataCompressionType?: string;
  NfsExports?: any[];
  CopyTagsToSnapshots?: boolean;
  RecordSizeKiB?: number;
  UserAndGroupQuotas?: any[];
}
/**
 * Type definition for AWS::FSx::FileSystem.SelfManagedActiveDirectoryConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-windowsconfiguration-selfmanagedactivedirectoryconfiguration.html | AWS::FSx::FileSystem.SelfManagedActiveDirectoryConfiguration}
 */
export interface FSxFileSystemSelfManagedActiveDirectoryConfiguration {
  FileSystemAdministratorsGroup?: string;
  UserName?: string;
  DomainName?: string;
  OrganizationalUnitDistinguishedName?: string;
  DnsIps?: any[];
  Password?: string;
}
/**
 * Type definition for AWS::FSx::FileSystem.UserAndGroupQuotas
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-openzfsconfiguration-rootvolumeconfiguration-userandgroupquotas.html | AWS::FSx::FileSystem.UserAndGroupQuotas}
 */
export interface FSxFileSystemUserAndGroupQuotas {
  Type?: string;
  Id?: number;
  StorageCapacityQuotaGiB?: number;
}
/**
 * Type definition for AWS::FSx::FileSystem.WindowsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-windowsconfiguration.html | AWS::FSx::FileSystem.WindowsConfiguration}
 */
export interface FSxFileSystemWindowsConfiguration {
  SelfManagedActiveDirectoryConfiguration?: FSxFileSystemSelfManagedActiveDirectoryConfiguration;
  AuditLogConfiguration?: FSxFileSystemAuditLogConfiguration;
  WeeklyMaintenanceStartTime?: string;
  ActiveDirectoryId?: string;
  DiskIopsConfiguration?: FSxFileSystemDiskIopsConfiguration;
  DeploymentType?: string;
  Aliases?: any[];
  ThroughputCapacity: number;
  CopyTagsToBackups?: boolean;
  DailyAutomaticBackupStartTime?: string;
  AutomaticBackupRetentionDays?: number;
  PreferredSubnetId?: string;
}
/**
 * Type definition for AWS::FSx::StorageVirtualMachine.ActiveDirectoryConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-storagevirtualmachine-activedirectoryconfiguration.html | AWS::FSx::StorageVirtualMachine.ActiveDirectoryConfiguration}
 */
export interface FSxStorageVirtualMachineActiveDirectoryConfiguration {
  SelfManagedActiveDirectoryConfiguration?: FSxStorageVirtualMachineSelfManagedActiveDirectoryConfiguration;
  NetBiosName?: string;
}
/**
 * Type definition for AWS::FSx::StorageVirtualMachine.SelfManagedActiveDirectoryConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-storagevirtualmachine-activedirectoryconfiguration-selfmanagedactivedirectoryconfiguration.html | AWS::FSx::StorageVirtualMachine.SelfManagedActiveDirectoryConfiguration}
 */
export interface FSxStorageVirtualMachineSelfManagedActiveDirectoryConfiguration {
  FileSystemAdministratorsGroup?: string;
  UserName?: string;
  DomainName?: string;
  OrganizationalUnitDistinguishedName?: string;
  DnsIps?: any[];
  Password?: string;
}
/**
 * Type definition for AWS::FSx::Volume.AutocommitPeriod
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-ontapconfiguration-snaplockconfiguration-autocommitperiod.html | AWS::FSx::Volume.AutocommitPeriod}
 */
export interface FSxVolumeAutocommitPeriod {
  Type: string;
  Value?: number;
}
/**
 * Type definition for AWS::FSx::Volume.ClientConfigurations
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-openzfsconfiguration-nfsexports-clientconfigurations.html | AWS::FSx::Volume.ClientConfigurations}
 */
export interface FSxVolumeClientConfigurations {
  Options: any[];
  Clients: string;
}
/**
 * Type definition for AWS::FSx::Volume.NfsExports
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-openzfsconfiguration-nfsexports.html | AWS::FSx::Volume.NfsExports}
 */
export interface FSxVolumeNfsExports {
  ClientConfigurations: any[];
}
/**
 * Type definition for AWS::FSx::Volume.OntapConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-ontapconfiguration.html | AWS::FSx::Volume.OntapConfiguration}
 */
export interface FSxVolumeOntapConfiguration {
  JunctionPath?: string;
  StorageVirtualMachineId: string;
  SnapshotPolicy?: string;
  TieringPolicy?: FSxVolumeTieringPolicy;
  StorageEfficiencyEnabled?: string;
  SizeInMegabytes: string;
  CopyTagsToBackups?: string;
  SecurityStyle?: string;
  SnaplockConfiguration?: FSxVolumeSnaplockConfiguration;
  OntapVolumeType?: string;
}
/**
 * Type definition for AWS::FSx::Volume.OpenZFSConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-openzfsconfiguration.html | AWS::FSx::Volume.OpenZFSConfiguration}
 */
export interface FSxVolumeOpenZFSConfiguration {
  ReadOnly?: boolean;
  Options?: any[];
  DataCompressionType?: string;
  NfsExports?: any[];
  StorageCapacityQuotaGiB?: number;
  CopyTagsToSnapshots?: boolean;
  ParentVolumeId: string;
  StorageCapacityReservationGiB?: number;
  RecordSizeKiB?: number;
  OriginSnapshot?: FSxVolumeOriginSnapshot;
  UserAndGroupQuotas?: any[];
}
/**
 * Type definition for AWS::FSx::Volume.OriginSnapshot
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-openzfsconfiguration-originsnapshot.html | AWS::FSx::Volume.OriginSnapshot}
 */
export interface FSxVolumeOriginSnapshot {
  CopyStrategy: string;
  SnapshotARN: string;
}
/**
 * Type definition for AWS::FSx::Volume.RetentionPeriod
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-retentionperiod.html | AWS::FSx::Volume.RetentionPeriod}
 */
export interface FSxVolumeRetentionPeriod {
  Type: string;
  Value?: number;
}
/**
 * Type definition for AWS::FSx::Volume.SnaplockConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-ontapconfiguration-snaplockconfiguration.html | AWS::FSx::Volume.SnaplockConfiguration}
 */
export interface FSxVolumeSnaplockConfiguration {
  AuditLogVolume?: string;
  VolumeAppendModeEnabled?: string;
  AutocommitPeriod?: FSxVolumeAutocommitPeriod;
  RetentionPeriod?: FSxVolumeSnaplockRetentionPeriod;
  PrivilegedDelete?: string;
  SnaplockType: string;
}
/**
 * Type definition for AWS::FSx::Volume.SnaplockRetentionPeriod
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-snaplockretentionperiod.html | AWS::FSx::Volume.SnaplockRetentionPeriod}
 */
export interface FSxVolumeSnaplockRetentionPeriod {
  DefaultRetention: FSxVolumeRetentionPeriod;
  MaximumRetention: FSxVolumeRetentionPeriod;
  MinimumRetention: FSxVolumeRetentionPeriod;
}
/**
 * Type definition for AWS::FSx::Volume.TieringPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-ontapconfiguration-tieringpolicy.html | AWS::FSx::Volume.TieringPolicy}
 */
export interface FSxVolumeTieringPolicy {
  CoolingPeriod?: number;
  Name?: string;
}
/**
 * Type definition for AWS::FSx::Volume.UserAndGroupQuotas
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-openzfsconfiguration-userandgroupquotas.html | AWS::FSx::Volume.UserAndGroupQuotas}
 */
export interface FSxVolumeUserAndGroupQuotas {
  Type: string;
  Id: number;
  StorageCapacityQuotaGiB: number;
}
/**
 * Type definition for AWS::FSx::DataRepositoryAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-datarepositoryassociation.html | AWS::FSx::DataRepositoryAssociation}
 */
export interface FSxDataRepositoryAssociationProps {
  FileSystemPath: string;
  DataRepositoryPath: string;
  BatchImportMetaDataOnCreate?: boolean;
  S3?: FSxDataRepositoryAssociationS3;
  FileSystemId: string;
  ImportedFileChunkSize?: number;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::FSx::DataRepositoryAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-datarepositoryassociation.html | AWS::FSx::DataRepositoryAssociation}
 */
export interface FSxDataRepositoryAssociationAttribs {
  ResourceARN?: string;
  AssociationId?: string;
}
/**
 * Resource class for AWS::FSx::DataRepositoryAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-datarepositoryassociation.html | AWS::FSx::DataRepositoryAssociation}
 */
export class FSxDataRepositoryAssociation extends ResourceBase<
  "AWS::FSx::DataRepositoryAssociation",
  FSxDataRepositoryAssociationProps,
  FSxDataRepositoryAssociationAttribs
> {
  public static readonly Type = "AWS::FSx::DataRepositoryAssociation";
  public static readonly AttributeNames: readonly (keyof FSxDataRepositoryAssociationAttribs)[] =
    ["ResourceARN", "AssociationId"];
  constructor(
    logicalId: string,
    properties: FSxDataRepositoryAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      FSxDataRepositoryAssociation.Type,
      FSxDataRepositoryAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::FSx::FileSystem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html | AWS::FSx::FileSystem}
 */
export interface FSxFileSystemProps {
  StorageType?: string;
  KmsKeyId?: string;
  StorageCapacity?: number;
  LustreConfiguration?: FSxFileSystemLustreConfiguration;
  BackupId?: string;
  OntapConfiguration?: FSxFileSystemOntapConfiguration;
  SubnetIds: any[];
  SecurityGroupIds?: any[];
  WindowsConfiguration?: FSxFileSystemWindowsConfiguration;
  FileSystemTypeVersion?: string;
  OpenZFSConfiguration?: FSxFileSystemOpenZFSConfiguration;
  FileSystemType: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::FSx::FileSystem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html | AWS::FSx::FileSystem}
 */
export interface FSxFileSystemAttribs {
  ResourceARN?: string;
  RootVolumeId?: string;
  DNSName?: string;
  LustreMountName?: string;
}
/**
 * Resource class for AWS::FSx::FileSystem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html | AWS::FSx::FileSystem}
 */
export class FSxFileSystem extends ResourceBase<
  "AWS::FSx::FileSystem",
  FSxFileSystemProps,
  FSxFileSystemAttribs
> {
  public static readonly Type = "AWS::FSx::FileSystem";
  public static readonly AttributeNames: readonly (keyof FSxFileSystemAttribs)[] =
    ["ResourceARN", "RootVolumeId", "DNSName", "LustreMountName"];
  constructor(
    logicalId: string,
    properties: FSxFileSystemProps,
    options?: ResourceOptions,
  ) {
    super(
      FSxFileSystem.Type,
      FSxFileSystem.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::FSx::Snapshot
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-snapshot.html | AWS::FSx::Snapshot}
 */
export interface FSxSnapshotProps {
  VolumeId: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::FSx::Snapshot
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-snapshot.html | AWS::FSx::Snapshot}
 */
export interface FSxSnapshotAttribs {
  ResourceARN?: string;
}
/**
 * Resource class for AWS::FSx::Snapshot
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-snapshot.html | AWS::FSx::Snapshot}
 */
export class FSxSnapshot extends ResourceBase<
  "AWS::FSx::Snapshot",
  FSxSnapshotProps,
  FSxSnapshotAttribs
> {
  public static readonly Type = "AWS::FSx::Snapshot";
  public static readonly AttributeNames: readonly (keyof FSxSnapshotAttribs)[] =
    ["ResourceARN"];
  constructor(
    logicalId: string,
    properties: FSxSnapshotProps,
    options?: ResourceOptions,
  ) {
    super(
      FSxSnapshot.Type,
      FSxSnapshot.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::FSx::StorageVirtualMachine
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-storagevirtualmachine.html | AWS::FSx::StorageVirtualMachine}
 */
export interface FSxStorageVirtualMachineProps {
  SvmAdminPassword?: string;
  ActiveDirectoryConfiguration?: FSxStorageVirtualMachineActiveDirectoryConfiguration;
  RootVolumeSecurityStyle?: string;
  FileSystemId: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::FSx::StorageVirtualMachine
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-storagevirtualmachine.html | AWS::FSx::StorageVirtualMachine}
 */
export interface FSxStorageVirtualMachineAttribs {
  ResourceARN?: string;
  StorageVirtualMachineId?: string;
  UUID?: string;
}
/**
 * Resource class for AWS::FSx::StorageVirtualMachine
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-storagevirtualmachine.html | AWS::FSx::StorageVirtualMachine}
 */
export class FSxStorageVirtualMachine extends ResourceBase<
  "AWS::FSx::StorageVirtualMachine",
  FSxStorageVirtualMachineProps,
  FSxStorageVirtualMachineAttribs
> {
  public static readonly Type = "AWS::FSx::StorageVirtualMachine";
  public static readonly AttributeNames: readonly (keyof FSxStorageVirtualMachineAttribs)[] =
    ["ResourceARN", "StorageVirtualMachineId", "UUID"];
  constructor(
    logicalId: string,
    properties: FSxStorageVirtualMachineProps,
    options?: ResourceOptions,
  ) {
    super(
      FSxStorageVirtualMachine.Type,
      FSxStorageVirtualMachine.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::FSx::Volume
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html | AWS::FSx::Volume}
 */
export interface FSxVolumeProps {
  OpenZFSConfiguration?: FSxVolumeOpenZFSConfiguration;
  VolumeType?: string;
  BackupId?: string;
  OntapConfiguration?: FSxVolumeOntapConfiguration;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::FSx::Volume
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html | AWS::FSx::Volume}
 */
export interface FSxVolumeAttribs {
  ResourceARN?: string;
  VolumeId?: string;
  UUID?: string;
}
/**
 * Resource class for AWS::FSx::Volume
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html | AWS::FSx::Volume}
 */
export class FSxVolume extends ResourceBase<
  "AWS::FSx::Volume",
  FSxVolumeProps,
  FSxVolumeAttribs
> {
  public static readonly Type = "AWS::FSx::Volume";
  public static readonly AttributeNames: readonly (keyof FSxVolumeAttribs)[] = [
    "ResourceARN",
    "VolumeId",
    "UUID",
  ];
  constructor(
    logicalId: string,
    properties: FSxVolumeProps,
    options?: ResourceOptions,
  ) {
    super(
      FSxVolume.Type,
      FSxVolume.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
