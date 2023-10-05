import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::EFS::AccessPoint.AccessPointTag
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-accesspoint-accesspointtag.html | AWS::EFS::AccessPoint.AccessPointTag}
 */
export interface EFSAccessPointAccessPointTag {
  Value?: string;
  Key?: string;
}
/**
 * Type definition for AWS::EFS::AccessPoint.CreationInfo
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-accesspoint-creationinfo.html | AWS::EFS::AccessPoint.CreationInfo}
 */
export interface EFSAccessPointCreationInfo {
  OwnerGid: string;
  OwnerUid: string;
  Permissions: string;
}
/**
 * Type definition for AWS::EFS::AccessPoint.PosixUser
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-accesspoint-posixuser.html | AWS::EFS::AccessPoint.PosixUser}
 */
export interface EFSAccessPointPosixUser {
  Uid: string;
  SecondaryGids?: any[];
  Gid: string;
}
/**
 * Type definition for AWS::EFS::AccessPoint.RootDirectory
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-accesspoint-rootdirectory.html | AWS::EFS::AccessPoint.RootDirectory}
 */
export interface EFSAccessPointRootDirectory {
  Path?: string;
  CreationInfo?: EFSAccessPointCreationInfo;
}
/**
 * Type definition for AWS::EFS::FileSystem.BackupPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-backuppolicy.html | AWS::EFS::FileSystem.BackupPolicy}
 */
export interface EFSFileSystemBackupPolicy {
  Status: string;
}
/**
 * Type definition for AWS::EFS::FileSystem.ElasticFileSystemTag
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-elasticfilesystemtag.html | AWS::EFS::FileSystem.ElasticFileSystemTag}
 */
export interface EFSFileSystemElasticFileSystemTag {
  Value: string;
  Key: string;
}
/**
 * Type definition for AWS::EFS::FileSystem.LifecyclePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-lifecyclepolicy.html | AWS::EFS::FileSystem.LifecyclePolicy}
 */
export interface EFSFileSystemLifecyclePolicy {
  TransitionToIA?: string;
  TransitionToPrimaryStorageClass?: string;
}
/**
 * Type definition for AWS::EFS::FileSystem.ReplicationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-replicationconfiguration.html | AWS::EFS::FileSystem.ReplicationConfiguration}
 */
export interface EFSFileSystemReplicationConfiguration {
  Destinations?: any[];
}
/**
 * Type definition for AWS::EFS::FileSystem.ReplicationDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-replicationdestination.html | AWS::EFS::FileSystem.ReplicationDestination}
 */
export interface EFSFileSystemReplicationDestination {
  KmsKeyId?: string;
  AvailabilityZoneName?: string;
  FileSystemId?: string;
  Region?: string;
}
/**
 * Type definition for AWS::EFS::AccessPoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-accesspoint.html | AWS::EFS::AccessPoint}
 */
export interface EFSAccessPointProps {
  FileSystemId: string;
  RootDirectory?: EFSAccessPointRootDirectory;
  ClientToken?: string;
  AccessPointTags?: any[];
  PosixUser?: EFSAccessPointPosixUser;
}
/**
 * Attributes type definition for AWS::EFS::AccessPoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-accesspoint.html | AWS::EFS::AccessPoint}
 */
export interface EFSAccessPointAttribs {
  AccessPointId?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::EFS::AccessPoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-accesspoint.html | AWS::EFS::AccessPoint}
 */
export class EFSAccessPoint extends ResourceBase<
  "AWS::EFS::AccessPoint",
  EFSAccessPointProps,
  EFSAccessPointAttribs
> {
  public static readonly Type = "AWS::EFS::AccessPoint";
  public static readonly AttributeNames: readonly (keyof EFSAccessPointAttribs)[] =
    ["AccessPointId", "Arn"];
  constructor(
    logicalId: string,
    properties: EFSAccessPointProps,
    options?: ResourceOptions,
  ) {
    super(
      EFSAccessPoint.Type,
      EFSAccessPoint.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EFS::FileSystem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-filesystem.html | AWS::EFS::FileSystem}
 */
export interface EFSFileSystemProps {
  KmsKeyId?: string;
  PerformanceMode?: string;
  Encrypted?: boolean;
  BypassPolicyLockoutSafetyCheck?: boolean;
  FileSystemTags?: any[];
  ProvisionedThroughputInMibps?: number;
  FileSystemPolicy?: object;
  AvailabilityZoneName?: string;
  LifecyclePolicies?: any[];
  ThroughputMode?: string;
  ReplicationConfiguration?: EFSFileSystemReplicationConfiguration;
  BackupPolicy?: EFSFileSystemBackupPolicy;
}
/**
 * Attributes type definition for AWS::EFS::FileSystem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-filesystem.html | AWS::EFS::FileSystem}
 */
export interface EFSFileSystemAttribs {
  FileSystemId?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::EFS::FileSystem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-filesystem.html | AWS::EFS::FileSystem}
 */
export class EFSFileSystem extends ResourceBase<
  "AWS::EFS::FileSystem",
  EFSFileSystemProps,
  EFSFileSystemAttribs
> {
  public static readonly Type = "AWS::EFS::FileSystem";
  public static readonly AttributeNames: readonly (keyof EFSFileSystemAttribs)[] =
    ["FileSystemId", "Arn"];
  constructor(
    logicalId: string,
    properties: EFSFileSystemProps,
    options?: ResourceOptions,
  ) {
    super(
      EFSFileSystem.Type,
      EFSFileSystem.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EFS::MountTarget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html | AWS::EFS::MountTarget}
 */
export interface EFSMountTargetProps {
  SecurityGroups: any[];
  FileSystemId: string;
  IpAddress?: string;
  SubnetId: string;
}
/**
 * Attributes type definition for AWS::EFS::MountTarget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html | AWS::EFS::MountTarget}
 */
export interface EFSMountTargetAttribs {
  IpAddress?: string;
  Id?: string;
}
/**
 * Resource class for AWS::EFS::MountTarget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html | AWS::EFS::MountTarget}
 */
export class EFSMountTarget extends ResourceBase<
  "AWS::EFS::MountTarget",
  EFSMountTargetProps,
  EFSMountTargetAttribs
> {
  public static readonly Type = "AWS::EFS::MountTarget";
  public static readonly AttributeNames: readonly (keyof EFSMountTargetAttribs)[] =
    ["IpAddress", "Id"];
  constructor(
    logicalId: string,
    properties: EFSMountTargetProps,
    options?: ResourceOptions,
  ) {
    super(
      EFSMountTarget.Type,
      EFSMountTarget.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
