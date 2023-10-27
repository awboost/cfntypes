import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Transfer::Connector.As2Config
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-connector-as2config.html | AWS::Transfer::Connector.As2Config}
 */
export interface TransferConnectorAs2Config {
  Compression?: string;
  MessageSubject?: string;
  BasicAuthSecretId?: string;
  PartnerProfileId?: string;
  EncryptionAlgorithm?: string;
  SigningAlgorithm?: string;
  LocalProfileId?: string;
  MdnResponse?: string;
  MdnSigningAlgorithm?: string;
}
/**
 * Type definition for AWS::Transfer::Connector.SftpConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-connector-sftpconfig.html | AWS::Transfer::Connector.SftpConfig}
 */
export interface TransferConnectorSftpConfig {
  TrustedHostKeys?: any[];
  UserSecretId?: string;
}
/**
 * Type definition for AWS::Transfer::User.HomeDirectoryMapEntry
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-user-homedirectorymapentry.html | AWS::Transfer::User.HomeDirectoryMapEntry}
 */
export interface TransferUserHomeDirectoryMapEntry {
  Entry: string;
  Target: string;
}
/**
 * Type definition for AWS::Transfer::User.PosixProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-user-posixprofile.html | AWS::Transfer::User.PosixProfile}
 */
export interface TransferUserPosixProfile {
  Uid: number;
  SecondaryGids?: any[];
  Gid: number;
}
/**
 * Type definition for AWS::Transfer::User.SshPublicKey
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-user-sshpublickey.html | AWS::Transfer::User.SshPublicKey}
 */
export type TransferUserSshPublicKey = string;
/**
 * Type definition for AWS::Transfer::Workflow.CopyStepDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-copystepdetails.html | AWS::Transfer::Workflow.CopyStepDetails}
 */
export interface TransferWorkflowCopyStepDetails {
  DestinationFileLocation?: TransferWorkflowS3FileLocation;
  SourceFileLocation?: string;
  Name?: string;
  OverwriteExisting?: string;
}
/**
 * Type definition for AWS::Transfer::Workflow.CustomStepDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-customstepdetails.html | AWS::Transfer::Workflow.CustomStepDetails}
 */
export interface TransferWorkflowCustomStepDetails {
  TimeoutSeconds?: number;
  Target?: string;
  SourceFileLocation?: string;
  Name?: string;
}
/**
 * Type definition for AWS::Transfer::Workflow.DecryptStepDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-decryptstepdetails.html | AWS::Transfer::Workflow.DecryptStepDetails}
 */
export interface TransferWorkflowDecryptStepDetails {
  DestinationFileLocation?: TransferWorkflowInputFileLocation;
  Type?: string;
  SourceFileLocation?: string;
  Name?: string;
  OverwriteExisting?: string;
}
/**
 * Type definition for AWS::Transfer::Workflow.DeleteStepDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-deletestepdetails.html | AWS::Transfer::Workflow.DeleteStepDetails}
 */
export interface TransferWorkflowDeleteStepDetails {
  SourceFileLocation?: string;
  Name?: string;
}
/**
 * Type definition for AWS::Transfer::Workflow.EfsInputFileLocation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-efsinputfilelocation.html | AWS::Transfer::Workflow.EfsInputFileLocation}
 */
export interface TransferWorkflowEfsInputFileLocation {
  Path?: string;
  FileSystemId?: string;
}
/**
 * Type definition for AWS::Transfer::Workflow.InputFileLocation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-inputfilelocation.html | AWS::Transfer::Workflow.InputFileLocation}
 */
export interface TransferWorkflowInputFileLocation {
  EfsFileLocation?: TransferWorkflowEfsInputFileLocation;
  S3FileLocation?: TransferWorkflowS3InputFileLocation;
}
/**
 * Type definition for AWS::Transfer::Workflow.S3FileLocation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-s3filelocation.html | AWS::Transfer::Workflow.S3FileLocation}
 */
export interface TransferWorkflowS3FileLocation {
  S3FileLocation?: TransferWorkflowS3InputFileLocation;
}
/**
 * Type definition for AWS::Transfer::Workflow.S3InputFileLocation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-s3inputfilelocation.html | AWS::Transfer::Workflow.S3InputFileLocation}
 */
export interface TransferWorkflowS3InputFileLocation {
  Bucket?: string;
  Key?: string;
}
/**
 * Type definition for AWS::Transfer::Workflow.S3Tag
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-s3tag.html | AWS::Transfer::Workflow.S3Tag}
 */
export interface TransferWorkflowS3Tag {
  Value: string;
  Key: string;
}
/**
 * Type definition for AWS::Transfer::Workflow.TagStepDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-tagstepdetails.html | AWS::Transfer::Workflow.TagStepDetails}
 */
export interface TransferWorkflowTagStepDetails {
  SourceFileLocation?: string;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Type definition for AWS::Transfer::Workflow.WorkflowStep
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-workflowstep.html | AWS::Transfer::Workflow.WorkflowStep}
 */
export interface TransferWorkflowWorkflowStep {
  CustomStepDetails?: TransferWorkflowCustomStepDetails;
  CopyStepDetails?: TransferWorkflowCopyStepDetails;
  DecryptStepDetails?: TransferWorkflowDecryptStepDetails;
  Type?: string;
  TagStepDetails?: TransferWorkflowTagStepDetails;
  DeleteStepDetails?: TransferWorkflowDeleteStepDetails;
}
/**
 * Type definition for AWS::Transfer::Agreement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html | AWS::Transfer::Agreement}
 */
export interface TransferAgreementProps {
  Status?: string;
  Description?: string;
  ServerId: string;
  BaseDirectory: string;
  AccessRole: string;
  PartnerProfileId: string;
  LocalProfileId: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::Transfer::Agreement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html | AWS::Transfer::Agreement}
 */
export interface TransferAgreementAttribs {
  AgreementId?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::Transfer::Agreement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html | AWS::Transfer::Agreement}
 */
export class TransferAgreement extends ResourceBase<
  "AWS::Transfer::Agreement",
  TransferAgreementProps,
  TransferAgreementAttribs
> {
  public static readonly Type = "AWS::Transfer::Agreement";
  public static readonly AttributeNames: readonly (keyof TransferAgreementAttribs)[] =
    ["AgreementId", "Arn"];
  constructor(
    logicalId: string,
    properties: TransferAgreementProps,
    options?: ResourceOptions,
  ) {
    super(
      TransferAgreement.Type,
      TransferAgreement.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Transfer::Certificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-certificate.html | AWS::Transfer::Certificate}
 */
export interface TransferCertificateProps {
  InactiveDate?: string;
  Usage: string;
  PrivateKey?: string;
  Description?: string;
  CertificateChain?: string;
  ActiveDate?: string;
  Tags?: Tag[];
  Certificate: string;
}
/**
 * Attributes type definition for AWS::Transfer::Certificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-certificate.html | AWS::Transfer::Certificate}
 */
export interface TransferCertificateAttribs {
  Status?: string;
  Type?: string;
  Serial?: string;
  CertificateId?: string;
  NotBeforeDate?: string;
  NotAfterDate?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::Transfer::Certificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-certificate.html | AWS::Transfer::Certificate}
 */
export class TransferCertificate extends ResourceBase<
  "AWS::Transfer::Certificate",
  TransferCertificateProps,
  TransferCertificateAttribs
> {
  public static readonly Type = "AWS::Transfer::Certificate";
  public static readonly AttributeNames: readonly (keyof TransferCertificateAttribs)[] =
    [
      "Status",
      "Type",
      "Serial",
      "CertificateId",
      "NotBeforeDate",
      "NotAfterDate",
      "Arn",
    ];
  constructor(
    logicalId: string,
    properties: TransferCertificateProps,
    options?: ResourceOptions,
  ) {
    super(
      TransferCertificate.Type,
      TransferCertificate.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Transfer::Connector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html | AWS::Transfer::Connector}
 */
export interface TransferConnectorProps {
  As2Config?: TransferConnectorAs2Config;
  LoggingRole?: string;
  AccessRole: string;
  SftpConfig?: TransferConnectorSftpConfig;
  Tags?: Tag[];
  Url: string;
}
/**
 * Attributes type definition for AWS::Transfer::Connector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html | AWS::Transfer::Connector}
 */
export interface TransferConnectorAttribs {
  Arn?: string;
  ConnectorId?: string;
}
/**
 * Resource class for AWS::Transfer::Connector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html | AWS::Transfer::Connector}
 */
export class TransferConnector extends ResourceBase<
  "AWS::Transfer::Connector",
  TransferConnectorProps,
  TransferConnectorAttribs
> {
  public static readonly Type = "AWS::Transfer::Connector";
  public static readonly AttributeNames: readonly (keyof TransferConnectorAttribs)[] =
    ["Arn", "ConnectorId"];
  constructor(
    logicalId: string,
    properties: TransferConnectorProps,
    options?: ResourceOptions,
  ) {
    super(
      TransferConnector.Type,
      TransferConnector.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Transfer::Profile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-profile.html | AWS::Transfer::Profile}
 */
export interface TransferProfileProps {
  As2Id: string;
  ProfileType: string;
  CertificateIds?: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::Transfer::Profile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-profile.html | AWS::Transfer::Profile}
 */
export interface TransferProfileAttribs {
  ProfileId?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::Transfer::Profile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-profile.html | AWS::Transfer::Profile}
 */
export class TransferProfile extends ResourceBase<
  "AWS::Transfer::Profile",
  TransferProfileProps,
  TransferProfileAttribs
> {
  public static readonly Type = "AWS::Transfer::Profile";
  public static readonly AttributeNames: readonly (keyof TransferProfileAttribs)[] =
    ["ProfileId", "Arn"];
  constructor(
    logicalId: string,
    properties: TransferProfileProps,
    options?: ResourceOptions,
  ) {
    super(
      TransferProfile.Type,
      TransferProfile.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Transfer::User
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-user.html | AWS::Transfer::User}
 */
export interface TransferUserProps {
  Policy?: string;
  Role: string;
  HomeDirectory?: string;
  HomeDirectoryType?: string;
  ServerId: string;
  UserName: string;
  HomeDirectoryMappings?: any[];
  PosixProfile?: TransferUserPosixProfile;
  SshPublicKeys?: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::Transfer::User
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-user.html | AWS::Transfer::User}
 */
export interface TransferUserAttribs {
  ServerId?: string;
  UserName?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::Transfer::User
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-user.html | AWS::Transfer::User}
 */
export class TransferUser extends ResourceBase<
  "AWS::Transfer::User",
  TransferUserProps,
  TransferUserAttribs
> {
  public static readonly Type = "AWS::Transfer::User";
  public static readonly AttributeNames: readonly (keyof TransferUserAttribs)[] =
    ["ServerId", "UserName", "Arn"];
  constructor(
    logicalId: string,
    properties: TransferUserProps,
    options?: ResourceOptions,
  ) {
    super(
      TransferUser.Type,
      TransferUser.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Transfer::Workflow
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html | AWS::Transfer::Workflow}
 */
export interface TransferWorkflowProps {
  Steps: any[];
  Description?: string;
  OnExceptionSteps?: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::Transfer::Workflow
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html | AWS::Transfer::Workflow}
 */
export interface TransferWorkflowAttribs {
  WorkflowId?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::Transfer::Workflow
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html | AWS::Transfer::Workflow}
 */
export class TransferWorkflow extends ResourceBase<
  "AWS::Transfer::Workflow",
  TransferWorkflowProps,
  TransferWorkflowAttribs
> {
  public static readonly Type = "AWS::Transfer::Workflow";
  public static readonly AttributeNames: readonly (keyof TransferWorkflowAttribs)[] =
    ["WorkflowId", "Arn"];
  constructor(
    logicalId: string,
    properties: TransferWorkflowProps,
    options?: ResourceOptions,
  ) {
    super(
      TransferWorkflow.Type,
      TransferWorkflow.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
