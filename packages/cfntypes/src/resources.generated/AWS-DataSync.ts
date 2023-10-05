import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::DataSync::LocationAzureBlob.AzureBlobSasConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationazureblob-azureblobsasconfiguration.html | AWS::DataSync::LocationAzureBlob.AzureBlobSasConfiguration}
 */
export interface DataSyncLocationAzureBlobAzureBlobSasConfiguration {
  AzureBlobSasToken: string;
}
/**
 * Type definition for AWS::DataSync::LocationEFS.Ec2Config
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationefs-ec2config.html | AWS::DataSync::LocationEFS.Ec2Config}
 */
export interface DataSyncLocationEFSEc2Config {
  SubnetArn: string;
  SecurityGroupArns: any[];
}
/**
 * Type definition for AWS::DataSync::LocationFSxONTAP.NFS
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-nfs.html | AWS::DataSync::LocationFSxONTAP.NFS}
 */
export interface DataSyncLocationFSxONTAPNFS {
  MountOptions: DataSyncLocationFSxONTAPNfsMountOptions;
}
/**
 * Type definition for AWS::DataSync::LocationFSxONTAP.NfsMountOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-nfsmountoptions.html | AWS::DataSync::LocationFSxONTAP.NfsMountOptions}
 */
export interface DataSyncLocationFSxONTAPNfsMountOptions {
  Version?: string;
}
/**
 * Type definition for AWS::DataSync::LocationFSxONTAP.Protocol
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-protocol.html | AWS::DataSync::LocationFSxONTAP.Protocol}
 */
export interface DataSyncLocationFSxONTAPProtocol {
  SMB?: DataSyncLocationFSxONTAPSMB;
  NFS?: DataSyncLocationFSxONTAPNFS;
}
/**
 * Type definition for AWS::DataSync::LocationFSxONTAP.SMB
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-smb.html | AWS::DataSync::LocationFSxONTAP.SMB}
 */
export interface DataSyncLocationFSxONTAPSMB {
  User: string;
  Domain?: string;
  MountOptions: DataSyncLocationFSxONTAPSmbMountOptions;
  Password: string;
}
/**
 * Type definition for AWS::DataSync::LocationFSxONTAP.SmbMountOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-smbmountoptions.html | AWS::DataSync::LocationFSxONTAP.SmbMountOptions}
 */
export interface DataSyncLocationFSxONTAPSmbMountOptions {
  Version?: string;
}
/**
 * Type definition for AWS::DataSync::LocationFSxOpenZFS.MountOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxopenzfs-mountoptions.html | AWS::DataSync::LocationFSxOpenZFS.MountOptions}
 */
export interface DataSyncLocationFSxOpenZFSMountOptions {
  Version?: string;
}
/**
 * Type definition for AWS::DataSync::LocationFSxOpenZFS.NFS
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxopenzfs-nfs.html | AWS::DataSync::LocationFSxOpenZFS.NFS}
 */
export interface DataSyncLocationFSxOpenZFSNFS {
  MountOptions: DataSyncLocationFSxOpenZFSMountOptions;
}
/**
 * Type definition for AWS::DataSync::LocationFSxOpenZFS.Protocol
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxopenzfs-protocol.html | AWS::DataSync::LocationFSxOpenZFS.Protocol}
 */
export interface DataSyncLocationFSxOpenZFSProtocol {
  NFS?: DataSyncLocationFSxOpenZFSNFS;
}
/**
 * Type definition for AWS::DataSync::LocationHDFS.NameNode
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationhdfs-namenode.html | AWS::DataSync::LocationHDFS.NameNode}
 */
export interface DataSyncLocationHDFSNameNode {
  Port: number;
  Hostname: string;
}
/**
 * Type definition for AWS::DataSync::LocationHDFS.QopConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationhdfs-qopconfiguration.html | AWS::DataSync::LocationHDFS.QopConfiguration}
 */
export interface DataSyncLocationHDFSQopConfiguration {
  RpcProtection?: string;
  DataTransferProtection?: string;
}
/**
 * Type definition for AWS::DataSync::LocationNFS.MountOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationnfs-mountoptions.html | AWS::DataSync::LocationNFS.MountOptions}
 */
export interface DataSyncLocationNFSMountOptions {
  Version?: string;
}
/**
 * Type definition for AWS::DataSync::LocationNFS.OnPremConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationnfs-onpremconfig.html | AWS::DataSync::LocationNFS.OnPremConfig}
 */
export interface DataSyncLocationNFSOnPremConfig {
  AgentArns: any[];
}
/**
 * Type definition for AWS::DataSync::LocationS3.S3Config
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locations3-s3config.html | AWS::DataSync::LocationS3.S3Config}
 */
export interface DataSyncLocationS3S3Config {
  BucketAccessRoleArn: string;
}
/**
 * Type definition for AWS::DataSync::LocationSMB.MountOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationsmb-mountoptions.html | AWS::DataSync::LocationSMB.MountOptions}
 */
export interface DataSyncLocationSMBMountOptions {
  Version?: string;
}
/**
 * Type definition for AWS::DataSync::StorageSystem.ServerConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-storagesystem-serverconfiguration.html | AWS::DataSync::StorageSystem.ServerConfiguration}
 */
export interface DataSyncStorageSystemServerConfiguration {
  ServerHostname: string;
  ServerPort?: number;
}
/**
 * Type definition for AWS::DataSync::StorageSystem.ServerCredentials
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-storagesystem-servercredentials.html | AWS::DataSync::StorageSystem.ServerCredentials}
 */
export interface DataSyncStorageSystemServerCredentials {
  Username: string;
  Password: string;
}
/**
 * Type definition for AWS::DataSync::Task.Deleted
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-deleted.html | AWS::DataSync::Task.Deleted}
 */
export interface DataSyncTaskDeleted {
  ReportLevel?: string;
}
/**
 * Type definition for AWS::DataSync::Task.Destination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-destination.html | AWS::DataSync::Task.Destination}
 */
export interface DataSyncTaskDestination {
  S3?: DataSyncTaskS3;
}
/**
 * Type definition for AWS::DataSync::Task.FilterRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-filterrule.html | AWS::DataSync::Task.FilterRule}
 */
export interface DataSyncTaskFilterRule {
  FilterType?: string;
  Value?: string;
}
/**
 * Type definition for AWS::DataSync::Task.Options
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-options.html | AWS::DataSync::Task.Options}
 */
export interface DataSyncTaskOptions {
  VerifyMode?: string;
  Gid?: string;
  Atime?: string;
  OverwriteMode?: string;
  PreserveDevices?: string;
  Mtime?: string;
  TaskQueueing?: string;
  TransferMode?: string;
  LogLevel?: string;
  ObjectTags?: string;
  Uid?: string;
  BytesPerSecond?: number;
  PosixPermissions?: string;
  PreserveDeletedFiles?: string;
  SecurityDescriptorCopyFlags?: string;
}
/**
 * Type definition for AWS::DataSync::Task.Overrides
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-overrides.html | AWS::DataSync::Task.Overrides}
 */
export interface DataSyncTaskOverrides {
  Verified?: DataSyncTaskVerified;
  Skipped?: DataSyncTaskSkipped;
  Transferred?: DataSyncTaskTransferred;
  Deleted?: DataSyncTaskDeleted;
}
/**
 * Type definition for AWS::DataSync::Task.S3
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-s3.html | AWS::DataSync::Task.S3}
 */
export interface DataSyncTaskS3 {
  Subdirectory?: string;
  S3BucketArn?: string;
  BucketAccessRoleArn?: string;
}
/**
 * Type definition for AWS::DataSync::Task.Skipped
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-skipped.html | AWS::DataSync::Task.Skipped}
 */
export interface DataSyncTaskSkipped {
  ReportLevel?: string;
}
/**
 * Type definition for AWS::DataSync::Task.TaskReportConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-taskreportconfig.html | AWS::DataSync::Task.TaskReportConfig}
 */
export interface DataSyncTaskTaskReportConfig {
  Destination: DataSyncTaskDestination;
  ReportLevel?: string;
  ObjectVersionIds?: string;
  Overrides?: DataSyncTaskOverrides;
  OutputType: string;
}
/**
 * Type definition for AWS::DataSync::Task.TaskSchedule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-taskschedule.html | AWS::DataSync::Task.TaskSchedule}
 */
export interface DataSyncTaskTaskSchedule {
  ScheduleExpression: string;
}
/**
 * Type definition for AWS::DataSync::Task.Transferred
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-transferred.html | AWS::DataSync::Task.Transferred}
 */
export interface DataSyncTaskTransferred {
  ReportLevel?: string;
}
/**
 * Type definition for AWS::DataSync::Task.Verified
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-verified.html | AWS::DataSync::Task.Verified}
 */
export interface DataSyncTaskVerified {
  ReportLevel?: string;
}
/**
 * Type definition for AWS::DataSync::Agent
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html | AWS::DataSync::Agent}
 */
export interface DataSyncAgentProps {
  SubnetArns?: any[];
  AgentName?: string;
  VpcEndpointId?: string;
  ActivationKey?: string;
  SecurityGroupArns?: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::DataSync::Agent
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html | AWS::DataSync::Agent}
 */
export interface DataSyncAgentAttribs {
  AgentArn?: string;
  EndpointType?: string;
}
/**
 * Resource class for AWS::DataSync::Agent
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html | AWS::DataSync::Agent}
 */
export class DataSyncAgent extends ResourceBase<
  "AWS::DataSync::Agent",
  DataSyncAgentProps,
  DataSyncAgentAttribs
> {
  public static readonly Type = "AWS::DataSync::Agent";
  public static readonly AttributeNames: readonly (keyof DataSyncAgentAttribs)[] =
    ["AgentArn", "EndpointType"];
  constructor(
    logicalId: string,
    properties: DataSyncAgentProps,
    options?: ResourceOptions,
  ) {
    super(
      DataSyncAgent.Type,
      DataSyncAgent.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::DataSync::LocationAzureBlob
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationazureblob.html | AWS::DataSync::LocationAzureBlob}
 */
export interface DataSyncLocationAzureBlobProps {
  AzureAccessTier?: string;
  Subdirectory?: string;
  AzureBlobSasConfiguration?: DataSyncLocationAzureBlobAzureBlobSasConfiguration;
  AzureBlobType?: string;
  AzureBlobContainerUrl?: string;
  AgentArns: any[];
  Tags?: Tag[];
  AzureBlobAuthenticationType: string;
}
/**
 * Attributes type definition for AWS::DataSync::LocationAzureBlob
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationazureblob.html | AWS::DataSync::LocationAzureBlob}
 */
export interface DataSyncLocationAzureBlobAttribs {
  LocationUri?: string;
  LocationArn?: string;
}
/**
 * Resource class for AWS::DataSync::LocationAzureBlob
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationazureblob.html | AWS::DataSync::LocationAzureBlob}
 */
export class DataSyncLocationAzureBlob extends ResourceBase<
  "AWS::DataSync::LocationAzureBlob",
  DataSyncLocationAzureBlobProps,
  DataSyncLocationAzureBlobAttribs
> {
  public static readonly Type = "AWS::DataSync::LocationAzureBlob";
  public static readonly AttributeNames: readonly (keyof DataSyncLocationAzureBlobAttribs)[] =
    ["LocationUri", "LocationArn"];
  constructor(
    logicalId: string,
    properties: DataSyncLocationAzureBlobProps,
    options?: ResourceOptions,
  ) {
    super(
      DataSyncLocationAzureBlob.Type,
      DataSyncLocationAzureBlob.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::DataSync::LocationEFS
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationefs.html | AWS::DataSync::LocationEFS}
 */
export interface DataSyncLocationEFSProps {
  EfsFilesystemArn?: string;
  Ec2Config: DataSyncLocationEFSEc2Config;
  AccessPointArn?: string;
  Subdirectory?: string;
  InTransitEncryption?: string;
  FileSystemAccessRoleArn?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::DataSync::LocationEFS
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationefs.html | AWS::DataSync::LocationEFS}
 */
export interface DataSyncLocationEFSAttribs {
  LocationUri?: string;
  LocationArn?: string;
}
/**
 * Resource class for AWS::DataSync::LocationEFS
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationefs.html | AWS::DataSync::LocationEFS}
 */
export class DataSyncLocationEFS extends ResourceBase<
  "AWS::DataSync::LocationEFS",
  DataSyncLocationEFSProps,
  DataSyncLocationEFSAttribs
> {
  public static readonly Type = "AWS::DataSync::LocationEFS";
  public static readonly AttributeNames: readonly (keyof DataSyncLocationEFSAttribs)[] =
    ["LocationUri", "LocationArn"];
  constructor(
    logicalId: string,
    properties: DataSyncLocationEFSProps,
    options?: ResourceOptions,
  ) {
    super(
      DataSyncLocationEFS.Type,
      DataSyncLocationEFS.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::DataSync::LocationFSxLustre
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxlustre.html | AWS::DataSync::LocationFSxLustre}
 */
export interface DataSyncLocationFSxLustreProps {
  Subdirectory?: string;
  FsxFilesystemArn?: string;
  SecurityGroupArns: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::DataSync::LocationFSxLustre
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxlustre.html | AWS::DataSync::LocationFSxLustre}
 */
export interface DataSyncLocationFSxLustreAttribs {
  LocationUri?: string;
  LocationArn?: string;
}
/**
 * Resource class for AWS::DataSync::LocationFSxLustre
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxlustre.html | AWS::DataSync::LocationFSxLustre}
 */
export class DataSyncLocationFSxLustre extends ResourceBase<
  "AWS::DataSync::LocationFSxLustre",
  DataSyncLocationFSxLustreProps,
  DataSyncLocationFSxLustreAttribs
> {
  public static readonly Type = "AWS::DataSync::LocationFSxLustre";
  public static readonly AttributeNames: readonly (keyof DataSyncLocationFSxLustreAttribs)[] =
    ["LocationUri", "LocationArn"];
  constructor(
    logicalId: string,
    properties: DataSyncLocationFSxLustreProps,
    options?: ResourceOptions,
  ) {
    super(
      DataSyncLocationFSxLustre.Type,
      DataSyncLocationFSxLustre.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::DataSync::LocationFSxONTAP
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html | AWS::DataSync::LocationFSxONTAP}
 */
export interface DataSyncLocationFSxONTAPProps {
  StorageVirtualMachineArn: string;
  Subdirectory?: string;
  Protocol?: DataSyncLocationFSxONTAPProtocol;
  SecurityGroupArns: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::DataSync::LocationFSxONTAP
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html | AWS::DataSync::LocationFSxONTAP}
 */
export interface DataSyncLocationFSxONTAPAttribs {
  LocationUri?: string;
  FsxFilesystemArn?: string;
  LocationArn?: string;
}
/**
 * Resource class for AWS::DataSync::LocationFSxONTAP
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html | AWS::DataSync::LocationFSxONTAP}
 */
export class DataSyncLocationFSxONTAP extends ResourceBase<
  "AWS::DataSync::LocationFSxONTAP",
  DataSyncLocationFSxONTAPProps,
  DataSyncLocationFSxONTAPAttribs
> {
  public static readonly Type = "AWS::DataSync::LocationFSxONTAP";
  public static readonly AttributeNames: readonly (keyof DataSyncLocationFSxONTAPAttribs)[] =
    ["LocationUri", "FsxFilesystemArn", "LocationArn"];
  constructor(
    logicalId: string,
    properties: DataSyncLocationFSxONTAPProps,
    options?: ResourceOptions,
  ) {
    super(
      DataSyncLocationFSxONTAP.Type,
      DataSyncLocationFSxONTAP.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::DataSync::LocationFSxOpenZFS
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxopenzfs.html | AWS::DataSync::LocationFSxOpenZFS}
 */
export interface DataSyncLocationFSxOpenZFSProps {
  Subdirectory?: string;
  FsxFilesystemArn?: string;
  Protocol: DataSyncLocationFSxOpenZFSProtocol;
  SecurityGroupArns: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::DataSync::LocationFSxOpenZFS
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxopenzfs.html | AWS::DataSync::LocationFSxOpenZFS}
 */
export interface DataSyncLocationFSxOpenZFSAttribs {
  LocationUri?: string;
  LocationArn?: string;
}
/**
 * Resource class for AWS::DataSync::LocationFSxOpenZFS
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxopenzfs.html | AWS::DataSync::LocationFSxOpenZFS}
 */
export class DataSyncLocationFSxOpenZFS extends ResourceBase<
  "AWS::DataSync::LocationFSxOpenZFS",
  DataSyncLocationFSxOpenZFSProps,
  DataSyncLocationFSxOpenZFSAttribs
> {
  public static readonly Type = "AWS::DataSync::LocationFSxOpenZFS";
  public static readonly AttributeNames: readonly (keyof DataSyncLocationFSxOpenZFSAttribs)[] =
    ["LocationUri", "LocationArn"];
  constructor(
    logicalId: string,
    properties: DataSyncLocationFSxOpenZFSProps,
    options?: ResourceOptions,
  ) {
    super(
      DataSyncLocationFSxOpenZFS.Type,
      DataSyncLocationFSxOpenZFS.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::DataSync::LocationFSxWindows
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxwindows.html | AWS::DataSync::LocationFSxWindows}
 */
export interface DataSyncLocationFSxWindowsProps {
  User: string;
  Subdirectory?: string;
  FsxFilesystemArn?: string;
  Domain?: string;
  SecurityGroupArns: any[];
  Tags?: Tag[];
  Password?: string;
}
/**
 * Attributes type definition for AWS::DataSync::LocationFSxWindows
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxwindows.html | AWS::DataSync::LocationFSxWindows}
 */
export interface DataSyncLocationFSxWindowsAttribs {
  LocationUri?: string;
  LocationArn?: string;
}
/**
 * Resource class for AWS::DataSync::LocationFSxWindows
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxwindows.html | AWS::DataSync::LocationFSxWindows}
 */
export class DataSyncLocationFSxWindows extends ResourceBase<
  "AWS::DataSync::LocationFSxWindows",
  DataSyncLocationFSxWindowsProps,
  DataSyncLocationFSxWindowsAttribs
> {
  public static readonly Type = "AWS::DataSync::LocationFSxWindows";
  public static readonly AttributeNames: readonly (keyof DataSyncLocationFSxWindowsAttribs)[] =
    ["LocationUri", "LocationArn"];
  constructor(
    logicalId: string,
    properties: DataSyncLocationFSxWindowsProps,
    options?: ResourceOptions,
  ) {
    super(
      DataSyncLocationFSxWindows.Type,
      DataSyncLocationFSxWindows.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::DataSync::LocationHDFS
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationhdfs.html | AWS::DataSync::LocationHDFS}
 */
export interface DataSyncLocationHDFSProps {
  KmsKeyProviderUri?: string;
  QopConfiguration?: DataSyncLocationHDFSQopConfiguration;
  KerberosPrincipal?: string;
  SimpleUser?: string;
  ReplicationFactor?: number;
  KerberosKeytab?: string;
  NameNodes: any[];
  Subdirectory?: string;
  KerberosKrb5Conf?: string;
  BlockSize?: number;
  Tags?: Tag[];
  AgentArns: any[];
  AuthenticationType: string;
}
/**
 * Attributes type definition for AWS::DataSync::LocationHDFS
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationhdfs.html | AWS::DataSync::LocationHDFS}
 */
export interface DataSyncLocationHDFSAttribs {
  LocationUri?: string;
  LocationArn?: string;
}
/**
 * Resource class for AWS::DataSync::LocationHDFS
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationhdfs.html | AWS::DataSync::LocationHDFS}
 */
export class DataSyncLocationHDFS extends ResourceBase<
  "AWS::DataSync::LocationHDFS",
  DataSyncLocationHDFSProps,
  DataSyncLocationHDFSAttribs
> {
  public static readonly Type = "AWS::DataSync::LocationHDFS";
  public static readonly AttributeNames: readonly (keyof DataSyncLocationHDFSAttribs)[] =
    ["LocationUri", "LocationArn"];
  constructor(
    logicalId: string,
    properties: DataSyncLocationHDFSProps,
    options?: ResourceOptions,
  ) {
    super(
      DataSyncLocationHDFS.Type,
      DataSyncLocationHDFS.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::DataSync::LocationNFS
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationnfs.html | AWS::DataSync::LocationNFS}
 */
export interface DataSyncLocationNFSProps {
  Subdirectory?: string;
  ServerHostname?: string;
  MountOptions?: DataSyncLocationNFSMountOptions;
  OnPremConfig: DataSyncLocationNFSOnPremConfig;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::DataSync::LocationNFS
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationnfs.html | AWS::DataSync::LocationNFS}
 */
export interface DataSyncLocationNFSAttribs {
  LocationUri?: string;
  LocationArn?: string;
}
/**
 * Resource class for AWS::DataSync::LocationNFS
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationnfs.html | AWS::DataSync::LocationNFS}
 */
export class DataSyncLocationNFS extends ResourceBase<
  "AWS::DataSync::LocationNFS",
  DataSyncLocationNFSProps,
  DataSyncLocationNFSAttribs
> {
  public static readonly Type = "AWS::DataSync::LocationNFS";
  public static readonly AttributeNames: readonly (keyof DataSyncLocationNFSAttribs)[] =
    ["LocationUri", "LocationArn"];
  constructor(
    logicalId: string,
    properties: DataSyncLocationNFSProps,
    options?: ResourceOptions,
  ) {
    super(
      DataSyncLocationNFS.Type,
      DataSyncLocationNFS.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::DataSync::LocationObjectStorage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationobjectstorage.html | AWS::DataSync::LocationObjectStorage}
 */
export interface DataSyncLocationObjectStorageProps {
  ServerCertificate?: string;
  SecretKey?: string;
  BucketName?: string;
  Subdirectory?: string;
  ServerHostname?: string;
  AccessKey?: string;
  ServerProtocol?: string;
  AgentArns: any[];
  ServerPort?: number;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::DataSync::LocationObjectStorage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationobjectstorage.html | AWS::DataSync::LocationObjectStorage}
 */
export interface DataSyncLocationObjectStorageAttribs {
  LocationUri?: string;
  LocationArn?: string;
}
/**
 * Resource class for AWS::DataSync::LocationObjectStorage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationobjectstorage.html | AWS::DataSync::LocationObjectStorage}
 */
export class DataSyncLocationObjectStorage extends ResourceBase<
  "AWS::DataSync::LocationObjectStorage",
  DataSyncLocationObjectStorageProps,
  DataSyncLocationObjectStorageAttribs
> {
  public static readonly Type = "AWS::DataSync::LocationObjectStorage";
  public static readonly AttributeNames: readonly (keyof DataSyncLocationObjectStorageAttribs)[] =
    ["LocationUri", "LocationArn"];
  constructor(
    logicalId: string,
    properties: DataSyncLocationObjectStorageProps,
    options?: ResourceOptions,
  ) {
    super(
      DataSyncLocationObjectStorage.Type,
      DataSyncLocationObjectStorage.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::DataSync::LocationS3
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locations3.html | AWS::DataSync::LocationS3}
 */
export interface DataSyncLocationS3Props {
  S3StorageClass?: string;
  S3Config: DataSyncLocationS3S3Config;
  Subdirectory?: string;
  S3BucketArn?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::DataSync::LocationS3
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locations3.html | AWS::DataSync::LocationS3}
 */
export interface DataSyncLocationS3Attribs {
  LocationUri?: string;
  LocationArn?: string;
}
/**
 * Resource class for AWS::DataSync::LocationS3
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locations3.html | AWS::DataSync::LocationS3}
 */
export class DataSyncLocationS3 extends ResourceBase<
  "AWS::DataSync::LocationS3",
  DataSyncLocationS3Props,
  DataSyncLocationS3Attribs
> {
  public static readonly Type = "AWS::DataSync::LocationS3";
  public static readonly AttributeNames: readonly (keyof DataSyncLocationS3Attribs)[] =
    ["LocationUri", "LocationArn"];
  constructor(
    logicalId: string,
    properties: DataSyncLocationS3Props,
    options?: ResourceOptions,
  ) {
    super(
      DataSyncLocationS3.Type,
      DataSyncLocationS3.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::DataSync::LocationSMB
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html | AWS::DataSync::LocationSMB}
 */
export interface DataSyncLocationSMBProps {
  User: string;
  Subdirectory?: string;
  ServerHostname?: string;
  Domain?: string;
  MountOptions?: DataSyncLocationSMBMountOptions;
  AgentArns: any[];
  Tags?: Tag[];
  Password?: string;
}
/**
 * Attributes type definition for AWS::DataSync::LocationSMB
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html | AWS::DataSync::LocationSMB}
 */
export interface DataSyncLocationSMBAttribs {
  LocationUri?: string;
  LocationArn?: string;
}
/**
 * Resource class for AWS::DataSync::LocationSMB
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html | AWS::DataSync::LocationSMB}
 */
export class DataSyncLocationSMB extends ResourceBase<
  "AWS::DataSync::LocationSMB",
  DataSyncLocationSMBProps,
  DataSyncLocationSMBAttribs
> {
  public static readonly Type = "AWS::DataSync::LocationSMB";
  public static readonly AttributeNames: readonly (keyof DataSyncLocationSMBAttribs)[] =
    ["LocationUri", "LocationArn"];
  constructor(
    logicalId: string,
    properties: DataSyncLocationSMBProps,
    options?: ResourceOptions,
  ) {
    super(
      DataSyncLocationSMB.Type,
      DataSyncLocationSMB.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::DataSync::StorageSystem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-storagesystem.html | AWS::DataSync::StorageSystem}
 */
export interface DataSyncStorageSystemProps {
  ServerCredentials?: DataSyncStorageSystemServerCredentials;
  ServerConfiguration: DataSyncStorageSystemServerConfiguration;
  CloudWatchLogGroupArn?: string;
  SystemType: string;
  AgentArns: any[];
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::DataSync::StorageSystem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-storagesystem.html | AWS::DataSync::StorageSystem}
 */
export interface DataSyncStorageSystemAttribs {
  ConnectivityStatus?: string;
  StorageSystemArn?: string;
  SecretsManagerArn?: string;
}
/**
 * Resource class for AWS::DataSync::StorageSystem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-storagesystem.html | AWS::DataSync::StorageSystem}
 */
export class DataSyncStorageSystem extends ResourceBase<
  "AWS::DataSync::StorageSystem",
  DataSyncStorageSystemProps,
  DataSyncStorageSystemAttribs
> {
  public static readonly Type = "AWS::DataSync::StorageSystem";
  public static readonly AttributeNames: readonly (keyof DataSyncStorageSystemAttribs)[] =
    ["ConnectivityStatus", "StorageSystemArn", "SecretsManagerArn"];
  constructor(
    logicalId: string,
    properties: DataSyncStorageSystemProps,
    options?: ResourceOptions,
  ) {
    super(
      DataSyncStorageSystem.Type,
      DataSyncStorageSystem.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::DataSync::Task
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html | AWS::DataSync::Task}
 */
export interface DataSyncTaskProps {
  Includes?: any[];
  DestinationLocationArn: string;
  Options?: DataSyncTaskOptions;
  Schedule?: DataSyncTaskTaskSchedule;
  CloudWatchLogGroupArn?: string;
  SourceLocationArn: string;
  TaskReportConfig?: DataSyncTaskTaskReportConfig;
  Excludes?: any[];
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::DataSync::Task
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html | AWS::DataSync::Task}
 */
export interface DataSyncTaskAttribs {
  Status?: string;
  SourceNetworkInterfaceArns?: any[];
  DestinationNetworkInterfaceArns?: any[];
  TaskArn?: string;
}
/**
 * Resource class for AWS::DataSync::Task
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html | AWS::DataSync::Task}
 */
export class DataSyncTask extends ResourceBase<
  "AWS::DataSync::Task",
  DataSyncTaskProps,
  DataSyncTaskAttribs
> {
  public static readonly Type = "AWS::DataSync::Task";
  public static readonly AttributeNames: readonly (keyof DataSyncTaskAttribs)[] =
    [
      "Status",
      "SourceNetworkInterfaceArns",
      "DestinationNetworkInterfaceArns",
      "TaskArn",
    ];
  constructor(
    logicalId: string,
    properties: DataSyncTaskProps,
    options?: ResourceOptions,
  ) {
    super(
      DataSyncTask.Type,
      DataSyncTask.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
