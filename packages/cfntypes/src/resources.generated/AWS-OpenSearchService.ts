import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::OpenSearchService::Domain.AdvancedSecurityOptionsInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-advancedsecurityoptionsinput.html | AWS::OpenSearchService::Domain.AdvancedSecurityOptionsInput}
 */
export interface OpenSearchServiceDomainAdvancedSecurityOptionsInput {
  AnonymousAuthEnabled?: boolean;
  InternalUserDatabaseEnabled?: boolean;
  SAMLOptions?: OpenSearchServiceDomainSAMLOptions;
  Enabled?: boolean;
  AnonymousAuthDisableDate?: string;
  MasterUserOptions?: OpenSearchServiceDomainMasterUserOptions;
}
/**
 * Type definition for AWS::OpenSearchService::Domain.ClusterConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-clusterconfig.html | AWS::OpenSearchService::Domain.ClusterConfig}
 */
export interface OpenSearchServiceDomainClusterConfig {
  InstanceCount?: number;
  MultiAZWithStandbyEnabled?: boolean;
  WarmEnabled?: boolean;
  WarmCount?: number;
  DedicatedMasterEnabled?: boolean;
  ZoneAwarenessConfig?: OpenSearchServiceDomainZoneAwarenessConfig;
  DedicatedMasterCount?: number;
  InstanceType?: string;
  WarmType?: string;
  ZoneAwarenessEnabled?: boolean;
  DedicatedMasterType?: string;
}
/**
 * Type definition for AWS::OpenSearchService::Domain.CognitoOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-cognitooptions.html | AWS::OpenSearchService::Domain.CognitoOptions}
 */
export interface OpenSearchServiceDomainCognitoOptions {
  UserPoolId?: string;
  Enabled?: boolean;
  IdentityPoolId?: string;
  RoleArn?: string;
}
/**
 * Type definition for AWS::OpenSearchService::Domain.DomainEndpointOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-domainendpointoptions.html | AWS::OpenSearchService::Domain.DomainEndpointOptions}
 */
export interface OpenSearchServiceDomainDomainEndpointOptions {
  CustomEndpointEnabled?: boolean;
  EnforceHTTPS?: boolean;
  CustomEndpointCertificateArn?: string;
  CustomEndpoint?: string;
  TLSSecurityPolicy?: string;
}
/**
 * Type definition for AWS::OpenSearchService::Domain.EBSOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-ebsoptions.html | AWS::OpenSearchService::Domain.EBSOptions}
 */
export interface OpenSearchServiceDomainEBSOptions {
  EBSEnabled?: boolean;
  VolumeType?: string;
  Throughput?: number;
  Iops?: number;
  VolumeSize?: number;
}
/**
 * Type definition for AWS::OpenSearchService::Domain.EncryptionAtRestOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-encryptionatrestoptions.html | AWS::OpenSearchService::Domain.EncryptionAtRestOptions}
 */
export interface OpenSearchServiceDomainEncryptionAtRestOptions {
  KmsKeyId?: string;
  Enabled?: boolean;
}
/**
 * Type definition for AWS::OpenSearchService::Domain.Idp
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-idp.html | AWS::OpenSearchService::Domain.Idp}
 */
export interface OpenSearchServiceDomainIdp {
  EntityId: string;
  MetadataContent: string;
}
/**
 * Type definition for AWS::OpenSearchService::Domain.LogPublishingOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-logpublishingoption.html | AWS::OpenSearchService::Domain.LogPublishingOption}
 */
export interface OpenSearchServiceDomainLogPublishingOption {
  CloudWatchLogsLogGroupArn?: string;
  Enabled?: boolean;
}
/**
 * Type definition for AWS::OpenSearchService::Domain.MasterUserOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-masteruseroptions.html | AWS::OpenSearchService::Domain.MasterUserOptions}
 */
export interface OpenSearchServiceDomainMasterUserOptions {
  MasterUserPassword?: string;
  MasterUserARN?: string;
  MasterUserName?: string;
}
/**
 * Type definition for AWS::OpenSearchService::Domain.NodeToNodeEncryptionOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-nodetonodeencryptionoptions.html | AWS::OpenSearchService::Domain.NodeToNodeEncryptionOptions}
 */
export interface OpenSearchServiceDomainNodeToNodeEncryptionOptions {
  Enabled?: boolean;
}
/**
 * Type definition for AWS::OpenSearchService::Domain.OffPeakWindow
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-offpeakwindow.html | AWS::OpenSearchService::Domain.OffPeakWindow}
 */
export interface OpenSearchServiceDomainOffPeakWindow {
  WindowStartTime?: OpenSearchServiceDomainWindowStartTime;
}
/**
 * Type definition for AWS::OpenSearchService::Domain.OffPeakWindowOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-offpeakwindowoptions.html | AWS::OpenSearchService::Domain.OffPeakWindowOptions}
 */
export interface OpenSearchServiceDomainOffPeakWindowOptions {
  OffPeakWindow?: OpenSearchServiceDomainOffPeakWindow;
  Enabled?: boolean;
}
/**
 * Type definition for AWS::OpenSearchService::Domain.SAMLOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-samloptions.html | AWS::OpenSearchService::Domain.SAMLOptions}
 */
export interface OpenSearchServiceDomainSAMLOptions {
  MasterBackendRole?: string;
  SubjectKey?: string;
  Idp?: OpenSearchServiceDomainIdp;
  SessionTimeoutMinutes?: number;
  RolesKey?: string;
  Enabled?: boolean;
  MasterUserName?: string;
}
/**
 * Type definition for AWS::OpenSearchService::Domain.ServiceSoftwareOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-servicesoftwareoptions.html | AWS::OpenSearchService::Domain.ServiceSoftwareOptions}
 */
export interface OpenSearchServiceDomainServiceSoftwareOptions {
  NewVersion?: string;
  UpdateStatus?: string;
  Description?: string;
  Cancellable?: boolean;
  CurrentVersion?: string;
  AutomatedUpdateDate?: string;
  UpdateAvailable?: boolean;
  OptionalDeployment?: boolean;
}
/**
 * Type definition for AWS::OpenSearchService::Domain.SnapshotOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-snapshotoptions.html | AWS::OpenSearchService::Domain.SnapshotOptions}
 */
export interface OpenSearchServiceDomainSnapshotOptions {
  AutomatedSnapshotStartHour?: number;
}
/**
 * Type definition for AWS::OpenSearchService::Domain.SoftwareUpdateOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-softwareupdateoptions.html | AWS::OpenSearchService::Domain.SoftwareUpdateOptions}
 */
export interface OpenSearchServiceDomainSoftwareUpdateOptions {
  AutoSoftwareUpdateEnabled?: boolean;
}
/**
 * Type definition for AWS::OpenSearchService::Domain.VPCOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-vpcoptions.html | AWS::OpenSearchService::Domain.VPCOptions}
 */
export interface OpenSearchServiceDomainVPCOptions {
  SecurityGroupIds?: any[];
  SubnetIds?: any[];
}
/**
 * Type definition for AWS::OpenSearchService::Domain.WindowStartTime
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-windowstarttime.html | AWS::OpenSearchService::Domain.WindowStartTime}
 */
export interface OpenSearchServiceDomainWindowStartTime {
  Hours: number;
  Minutes: number;
}
/**
 * Type definition for AWS::OpenSearchService::Domain.ZoneAwarenessConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-zoneawarenessconfig.html | AWS::OpenSearchService::Domain.ZoneAwarenessConfig}
 */
export interface OpenSearchServiceDomainZoneAwarenessConfig {
  AvailabilityZoneCount?: number;
}
/**
 * Type definition for AWS::OpenSearchService::Domain
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html | AWS::OpenSearchService::Domain}
 */
export interface OpenSearchServiceDomainProps {
  EngineVersion?: string;
  SoftwareUpdateOptions?: OpenSearchServiceDomainSoftwareUpdateOptions;
  DomainName?: string;
  LogPublishingOptions?: Record<string, any>;
  SnapshotOptions?: OpenSearchServiceDomainSnapshotOptions;
  VPCOptions?: OpenSearchServiceDomainVPCOptions;
  NodeToNodeEncryptionOptions?: OpenSearchServiceDomainNodeToNodeEncryptionOptions;
  AccessPolicies?: object;
  DomainEndpointOptions?: OpenSearchServiceDomainDomainEndpointOptions;
  CognitoOptions?: OpenSearchServiceDomainCognitoOptions;
  AdvancedOptions?: Record<string, any>;
  AdvancedSecurityOptions?: OpenSearchServiceDomainAdvancedSecurityOptionsInput;
  EBSOptions?: OpenSearchServiceDomainEBSOptions;
  EncryptionAtRestOptions?: OpenSearchServiceDomainEncryptionAtRestOptions;
  OffPeakWindowOptions?: OpenSearchServiceDomainOffPeakWindowOptions;
  Tags?: Tag[];
  ClusterConfig?: OpenSearchServiceDomainClusterConfig;
}
/**
 * Attributes type definition for AWS::OpenSearchService::Domain
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html | AWS::OpenSearchService::Domain}
 */
export interface OpenSearchServiceDomainAttribs {
  "ServiceSoftwareOptions.OptionalDeployment"?: boolean;
  "ServiceSoftwareOptions.Description"?: string;
  "ServiceSoftwareOptions.UpdateStatus"?: string;
  "ServiceSoftwareOptions.AutomatedUpdateDate"?: string;
  "ServiceSoftwareOptions.CurrentVersion"?: string;
  DomainEndpoints?: Record<string, any>;
  DomainArn?: string;
  "ServiceSoftwareOptions.UpdateAvailable"?: boolean;
  DomainEndpoint?: string;
  ServiceSoftwareOptions?: OpenSearchServiceDomainServiceSoftwareOptions;
  "AdvancedSecurityOptions.AnonymousAuthDisableDate"?: string;
  "ServiceSoftwareOptions.NewVersion"?: string;
  Id?: string;
  Arn?: string;
  "ServiceSoftwareOptions.Cancellable"?: boolean;
}
/**
 * Resource class for AWS::OpenSearchService::Domain
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html | AWS::OpenSearchService::Domain}
 */
export class OpenSearchServiceDomain extends ResourceBase<
  "AWS::OpenSearchService::Domain",
  OpenSearchServiceDomainProps,
  OpenSearchServiceDomainAttribs
> {
  public static readonly Type = "AWS::OpenSearchService::Domain";
  public static readonly AttributeNames: readonly (keyof OpenSearchServiceDomainAttribs)[] =
    [
      "ServiceSoftwareOptions.OptionalDeployment",
      "ServiceSoftwareOptions.Description",
      "ServiceSoftwareOptions.UpdateStatus",
      "ServiceSoftwareOptions.AutomatedUpdateDate",
      "ServiceSoftwareOptions.CurrentVersion",
      "DomainEndpoints",
      "DomainArn",
      "ServiceSoftwareOptions.UpdateAvailable",
      "DomainEndpoint",
      "ServiceSoftwareOptions",
      "AdvancedSecurityOptions.AnonymousAuthDisableDate",
      "ServiceSoftwareOptions.NewVersion",
      "Id",
      "Arn",
      "ServiceSoftwareOptions.Cancellable",
    ];
  constructor(
    logicalId: string,
    properties: OpenSearchServiceDomainProps,
    options?: ResourceOptions,
  ) {
    super(
      OpenSearchServiceDomain.Type,
      OpenSearchServiceDomain.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
