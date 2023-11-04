import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::AppStream::AppBlock.S3Location
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-appblock-s3location.html | AWS::AppStream::AppBlock.S3Location}
 */
export interface AppStreamAppBlockS3Location {
  S3Bucket: string;
  S3Key?: string;
}
/**
 * Type definition for AWS::AppStream::AppBlock.ScriptDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-appblock-scriptdetails.html | AWS::AppStream::AppBlock.ScriptDetails}
 */
export interface AppStreamAppBlockScriptDetails {
  TimeoutInSeconds: number;
  ScriptS3Location: AppStreamAppBlockS3Location;
  ExecutablePath: string;
  ExecutableParameters?: string;
}
/**
 * Type definition for AWS::AppStream::AppBlockBuilder.AccessEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-appblockbuilder-accessendpoint.html | AWS::AppStream::AppBlockBuilder.AccessEndpoint}
 */
export interface AppStreamAppBlockBuilderAccessEndpoint {
  EndpointType: string;
  VpceId: string;
}
/**
 * Type definition for AWS::AppStream::AppBlockBuilder.VpcConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-appblockbuilder-vpcconfig.html | AWS::AppStream::AppBlockBuilder.VpcConfig}
 */
export interface AppStreamAppBlockBuilderVpcConfig {
  SecurityGroupIds?: any[];
  SubnetIds?: any[];
}
/**
 * Type definition for AWS::AppStream::Application.S3Location
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-application-s3location.html | AWS::AppStream::Application.S3Location}
 */
export interface AppStreamApplicationS3Location {
  S3Bucket: string;
  S3Key: string;
}
/**
 * Type definition for AWS::AppStream::DirectoryConfig.CertificateBasedAuthProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-directoryconfig-certificatebasedauthproperties.html | AWS::AppStream::DirectoryConfig.CertificateBasedAuthProperties}
 */
export interface AppStreamDirectoryConfigCertificateBasedAuthProperties {
  Status?: string;
  CertificateAuthorityArn?: string;
}
/**
 * Type definition for AWS::AppStream::DirectoryConfig.ServiceAccountCredentials
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-directoryconfig-serviceaccountcredentials.html | AWS::AppStream::DirectoryConfig.ServiceAccountCredentials}
 */
export interface AppStreamDirectoryConfigServiceAccountCredentials {
  AccountName: string;
  AccountPassword: string;
}
/**
 * Type definition for AWS::AppStream::Entitlement.Attribute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-entitlement-attribute.html | AWS::AppStream::Entitlement.Attribute}
 */
export interface AppStreamEntitlementAttribute {
  Value: string;
  Name: string;
}
/**
 * Type definition for AWS::AppStream::Fleet.ComputeCapacity
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-fleet-computecapacity.html | AWS::AppStream::Fleet.ComputeCapacity}
 */
export interface AppStreamFleetComputeCapacity {
  DesiredInstances?: number;
  DesiredSessions?: number;
}
/**
 * Type definition for AWS::AppStream::Fleet.DomainJoinInfo
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-fleet-domainjoininfo.html | AWS::AppStream::Fleet.DomainJoinInfo}
 */
export interface AppStreamFleetDomainJoinInfo {
  OrganizationalUnitDistinguishedName?: string;
  DirectoryName?: string;
}
/**
 * Type definition for AWS::AppStream::Fleet.S3Location
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-fleet-s3location.html | AWS::AppStream::Fleet.S3Location}
 */
export interface AppStreamFleetS3Location {
  S3Bucket: string;
  S3Key: string;
}
/**
 * Type definition for AWS::AppStream::Fleet.VpcConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-fleet-vpcconfig.html | AWS::AppStream::Fleet.VpcConfig}
 */
export interface AppStreamFleetVpcConfig {
  SubnetIds?: any[];
  SecurityGroupIds?: any[];
}
/**
 * Type definition for AWS::AppStream::ImageBuilder.AccessEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-imagebuilder-accessendpoint.html | AWS::AppStream::ImageBuilder.AccessEndpoint}
 */
export interface AppStreamImageBuilderAccessEndpoint {
  EndpointType: string;
  VpceId: string;
}
/**
 * Type definition for AWS::AppStream::ImageBuilder.DomainJoinInfo
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-imagebuilder-domainjoininfo.html | AWS::AppStream::ImageBuilder.DomainJoinInfo}
 */
export interface AppStreamImageBuilderDomainJoinInfo {
  OrganizationalUnitDistinguishedName?: string;
  DirectoryName?: string;
}
/**
 * Type definition for AWS::AppStream::ImageBuilder.VpcConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-imagebuilder-vpcconfig.html | AWS::AppStream::ImageBuilder.VpcConfig}
 */
export interface AppStreamImageBuilderVpcConfig {
  SecurityGroupIds?: any[];
  SubnetIds?: any[];
}
/**
 * Type definition for AWS::AppStream::Stack.AccessEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-accessendpoint.html | AWS::AppStream::Stack.AccessEndpoint}
 */
export interface AppStreamStackAccessEndpoint {
  EndpointType: string;
  VpceId: string;
}
/**
 * Type definition for AWS::AppStream::Stack.ApplicationSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-applicationsettings.html | AWS::AppStream::Stack.ApplicationSettings}
 */
export interface AppStreamStackApplicationSettings {
  SettingsGroup?: string;
  Enabled: boolean;
}
/**
 * Type definition for AWS::AppStream::Stack.StorageConnector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-storageconnector.html | AWS::AppStream::Stack.StorageConnector}
 */
export interface AppStreamStackStorageConnector {
  Domains?: any[];
  ResourceIdentifier?: string;
  ConnectorType: string;
}
/**
 * Type definition for AWS::AppStream::Stack.StreamingExperienceSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-streamingexperiencesettings.html | AWS::AppStream::Stack.StreamingExperienceSettings}
 */
export interface AppStreamStackStreamingExperienceSettings {
  PreferredProtocol?: string;
}
/**
 * Type definition for AWS::AppStream::Stack.UserSetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-usersetting.html | AWS::AppStream::Stack.UserSetting}
 */
export interface AppStreamStackUserSetting {
  Action: string;
  MaximumLength?: number;
  Permission: string;
}
/**
 * Type definition for AWS::AppStream::AppBlock
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-appblock.html | AWS::AppStream::AppBlock}
 */
export interface AppStreamAppBlockProps {
  SetupScriptDetails?: AppStreamAppBlockScriptDetails;
  Description?: string;
  PostSetupScriptDetails?: AppStreamAppBlockScriptDetails;
  DisplayName?: string;
  SourceS3Location: AppStreamAppBlockS3Location;
  Tags?: Tag[];
  PackagingType?: string;
  Name: string;
}
/**
 * Attributes type definition for AWS::AppStream::AppBlock
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-appblock.html | AWS::AppStream::AppBlock}
 */
export interface AppStreamAppBlockAttribs {
  CreatedTime?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::AppStream::AppBlock
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-appblock.html | AWS::AppStream::AppBlock}
 */
export class AppStreamAppBlock extends ResourceBase<
  "AWS::AppStream::AppBlock",
  AppStreamAppBlockProps,
  AppStreamAppBlockAttribs
> {
  public static readonly Type = "AWS::AppStream::AppBlock";
  public static readonly AttributeNames: readonly (keyof AppStreamAppBlockAttribs)[] =
    ["CreatedTime", "Arn"];
  constructor(
    logicalId: string,
    properties: AppStreamAppBlockProps,
    options?: ResourceOptions,
  ) {
    super(
      AppStreamAppBlock.Type,
      AppStreamAppBlock.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppStream::AppBlockBuilder
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-appblockbuilder.html | AWS::AppStream::AppBlockBuilder}
 */
export interface AppStreamAppBlockBuilderProps {
  Description?: string;
  Platform: string;
  VpcConfig: AppStreamAppBlockBuilderVpcConfig;
  AppBlockArns?: any[];
  EnableDefaultInternetAccess?: boolean;
  DisplayName?: string;
  IamRoleArn?: string;
  InstanceType: string;
  Tags?: Tag[];
  Name: string;
  AccessEndpoints?: any[];
}
/**
 * Attributes type definition for AWS::AppStream::AppBlockBuilder
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-appblockbuilder.html | AWS::AppStream::AppBlockBuilder}
 */
export interface AppStreamAppBlockBuilderAttribs {
  CreatedTime?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::AppStream::AppBlockBuilder
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-appblockbuilder.html | AWS::AppStream::AppBlockBuilder}
 */
export class AppStreamAppBlockBuilder extends ResourceBase<
  "AWS::AppStream::AppBlockBuilder",
  AppStreamAppBlockBuilderProps,
  AppStreamAppBlockBuilderAttribs
> {
  public static readonly Type = "AWS::AppStream::AppBlockBuilder";
  public static readonly AttributeNames: readonly (keyof AppStreamAppBlockBuilderAttribs)[] =
    ["CreatedTime", "Arn"];
  constructor(
    logicalId: string,
    properties: AppStreamAppBlockBuilderProps,
    options?: ResourceOptions,
  ) {
    super(
      AppStreamAppBlockBuilder.Type,
      AppStreamAppBlockBuilder.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppStream::Application
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-application.html | AWS::AppStream::Application}
 */
export interface AppStreamApplicationProps {
  WorkingDirectory?: string;
  Platforms: any[];
  AppBlockArn: string;
  Description?: string;
  InstanceFamilies: any[];
  AttributesToDelete?: any[];
  DisplayName?: string;
  LaunchPath: string;
  LaunchParameters?: string;
  Tags?: Tag[];
  Name: string;
  IconS3Location: AppStreamApplicationS3Location;
}
/**
 * Attributes type definition for AWS::AppStream::Application
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-application.html | AWS::AppStream::Application}
 */
export interface AppStreamApplicationAttribs {
  CreatedTime?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::AppStream::Application
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-application.html | AWS::AppStream::Application}
 */
export class AppStreamApplication extends ResourceBase<
  "AWS::AppStream::Application",
  AppStreamApplicationProps,
  AppStreamApplicationAttribs
> {
  public static readonly Type = "AWS::AppStream::Application";
  public static readonly AttributeNames: readonly (keyof AppStreamApplicationAttribs)[] =
    ["CreatedTime", "Arn"];
  constructor(
    logicalId: string,
    properties: AppStreamApplicationProps,
    options?: ResourceOptions,
  ) {
    super(
      AppStreamApplication.Type,
      AppStreamApplication.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppStream::ApplicationEntitlementAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-applicationentitlementassociation.html | AWS::AppStream::ApplicationEntitlementAssociation}
 */
export interface AppStreamApplicationEntitlementAssociationProps {
  EntitlementName: string;
  ApplicationIdentifier: string;
  StackName: string;
}
/**
 * Resource class for AWS::AppStream::ApplicationEntitlementAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-applicationentitlementassociation.html | AWS::AppStream::ApplicationEntitlementAssociation}
 */
export class AppStreamApplicationEntitlementAssociation extends ResourceBase<
  "AWS::AppStream::ApplicationEntitlementAssociation",
  AppStreamApplicationEntitlementAssociationProps,
  Record<string, never>
> {
  public static readonly Type =
    "AWS::AppStream::ApplicationEntitlementAssociation";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: AppStreamApplicationEntitlementAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      AppStreamApplicationEntitlementAssociation.Type,
      AppStreamApplicationEntitlementAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppStream::ApplicationFleetAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-applicationfleetassociation.html | AWS::AppStream::ApplicationFleetAssociation}
 */
export interface AppStreamApplicationFleetAssociationProps {
  FleetName: string;
  ApplicationArn: string;
}
/**
 * Resource class for AWS::AppStream::ApplicationFleetAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-applicationfleetassociation.html | AWS::AppStream::ApplicationFleetAssociation}
 */
export class AppStreamApplicationFleetAssociation extends ResourceBase<
  "AWS::AppStream::ApplicationFleetAssociation",
  AppStreamApplicationFleetAssociationProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::AppStream::ApplicationFleetAssociation";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: AppStreamApplicationFleetAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      AppStreamApplicationFleetAssociation.Type,
      AppStreamApplicationFleetAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppStream::DirectoryConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-directoryconfig.html | AWS::AppStream::DirectoryConfig}
 */
export interface AppStreamDirectoryConfigProps {
  OrganizationalUnitDistinguishedNames: any[];
  ServiceAccountCredentials: AppStreamDirectoryConfigServiceAccountCredentials;
  CertificateBasedAuthProperties?: AppStreamDirectoryConfigCertificateBasedAuthProperties;
  DirectoryName: string;
}
/**
 * Resource class for AWS::AppStream::DirectoryConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-directoryconfig.html | AWS::AppStream::DirectoryConfig}
 */
export class AppStreamDirectoryConfig extends ResourceBase<
  "AWS::AppStream::DirectoryConfig",
  AppStreamDirectoryConfigProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::AppStream::DirectoryConfig";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: AppStreamDirectoryConfigProps,
    options?: ResourceOptions,
  ) {
    super(
      AppStreamDirectoryConfig.Type,
      AppStreamDirectoryConfig.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppStream::Entitlement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-entitlement.html | AWS::AppStream::Entitlement}
 */
export interface AppStreamEntitlementProps {
  AppVisibility: string;
  Description?: string;
  Attributes: any[];
  StackName: string;
  Name: string;
}
/**
 * Attributes type definition for AWS::AppStream::Entitlement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-entitlement.html | AWS::AppStream::Entitlement}
 */
export interface AppStreamEntitlementAttribs {
  CreatedTime?: string;
  LastModifiedTime?: string;
}
/**
 * Resource class for AWS::AppStream::Entitlement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-entitlement.html | AWS::AppStream::Entitlement}
 */
export class AppStreamEntitlement extends ResourceBase<
  "AWS::AppStream::Entitlement",
  AppStreamEntitlementProps,
  AppStreamEntitlementAttribs
> {
  public static readonly Type = "AWS::AppStream::Entitlement";
  public static readonly AttributeNames: readonly (keyof AppStreamEntitlementAttribs)[] =
    ["CreatedTime", "LastModifiedTime"];
  constructor(
    logicalId: string,
    properties: AppStreamEntitlementProps,
    options?: ResourceOptions,
  ) {
    super(
      AppStreamEntitlement.Type,
      AppStreamEntitlement.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppStream::Fleet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-fleet.html | AWS::AppStream::Fleet}
 */
export interface AppStreamFleetProps {
  Description?: string;
  ComputeCapacity?: AppStreamFleetComputeCapacity;
  Platform?: string;
  VpcConfig?: AppStreamFleetVpcConfig;
  FleetType?: string;
  EnableDefaultInternetAccess?: boolean;
  DomainJoinInfo?: AppStreamFleetDomainJoinInfo;
  SessionScriptS3Location?: AppStreamFleetS3Location;
  Name: string;
  ImageName?: string;
  MaxUserDurationInSeconds?: number;
  IdleDisconnectTimeoutInSeconds?: number;
  UsbDeviceFilterStrings?: any[];
  DisconnectTimeoutInSeconds?: number;
  DisplayName?: string;
  StreamView?: string;
  IamRoleArn?: string;
  MaxSessionsPerInstance?: number;
  InstanceType: string;
  MaxConcurrentSessions?: number;
  Tags?: Tag[];
  ImageArn?: string;
}
/**
 * Resource class for AWS::AppStream::Fleet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-fleet.html | AWS::AppStream::Fleet}
 */
export class AppStreamFleet extends ResourceBase<
  "AWS::AppStream::Fleet",
  AppStreamFleetProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::AppStream::Fleet";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: AppStreamFleetProps,
    options?: ResourceOptions,
  ) {
    super(
      AppStreamFleet.Type,
      AppStreamFleet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppStream::ImageBuilder
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-imagebuilder.html | AWS::AppStream::ImageBuilder}
 */
export interface AppStreamImageBuilderProps {
  Description?: string;
  VpcConfig?: AppStreamImageBuilderVpcConfig;
  EnableDefaultInternetAccess?: boolean;
  DomainJoinInfo?: AppStreamImageBuilderDomainJoinInfo;
  AppstreamAgentVersion?: string;
  Name: string;
  ImageName?: string;
  DisplayName?: string;
  IamRoleArn?: string;
  InstanceType: string;
  Tags?: Tag[];
  ImageArn?: string;
  AccessEndpoints?: any[];
}
/**
 * Attributes type definition for AWS::AppStream::ImageBuilder
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-imagebuilder.html | AWS::AppStream::ImageBuilder}
 */
export interface AppStreamImageBuilderAttribs {
  StreamingUrl?: string;
}
/**
 * Resource class for AWS::AppStream::ImageBuilder
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-imagebuilder.html | AWS::AppStream::ImageBuilder}
 */
export class AppStreamImageBuilder extends ResourceBase<
  "AWS::AppStream::ImageBuilder",
  AppStreamImageBuilderProps,
  AppStreamImageBuilderAttribs
> {
  public static readonly Type = "AWS::AppStream::ImageBuilder";
  public static readonly AttributeNames: readonly (keyof AppStreamImageBuilderAttribs)[] =
    ["StreamingUrl"];
  constructor(
    logicalId: string,
    properties: AppStreamImageBuilderProps,
    options?: ResourceOptions,
  ) {
    super(
      AppStreamImageBuilder.Type,
      AppStreamImageBuilder.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppStream::Stack
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html | AWS::AppStream::Stack}
 */
export interface AppStreamStackProps {
  Description?: string;
  StorageConnectors?: any[];
  DeleteStorageConnectors?: boolean;
  EmbedHostDomains?: any[];
  UserSettings?: any[];
  AttributesToDelete?: any[];
  RedirectURL?: string;
  StreamingExperienceSettings?: AppStreamStackStreamingExperienceSettings;
  Name?: string;
  FeedbackURL?: string;
  ApplicationSettings?: AppStreamStackApplicationSettings;
  DisplayName?: string;
  Tags?: Tag[];
  AccessEndpoints?: any[];
}
/**
 * Resource class for AWS::AppStream::Stack
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html | AWS::AppStream::Stack}
 */
export class AppStreamStack extends ResourceBase<
  "AWS::AppStream::Stack",
  AppStreamStackProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::AppStream::Stack";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: AppStreamStackProps,
    options?: ResourceOptions,
  ) {
    super(
      AppStreamStack.Type,
      AppStreamStack.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppStream::StackFleetAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackfleetassociation.html | AWS::AppStream::StackFleetAssociation}
 */
export interface AppStreamStackFleetAssociationProps {
  FleetName: string;
  StackName: string;
}
/**
 * Resource class for AWS::AppStream::StackFleetAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackfleetassociation.html | AWS::AppStream::StackFleetAssociation}
 */
export class AppStreamStackFleetAssociation extends ResourceBase<
  "AWS::AppStream::StackFleetAssociation",
  AppStreamStackFleetAssociationProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::AppStream::StackFleetAssociation";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: AppStreamStackFleetAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      AppStreamStackFleetAssociation.Type,
      AppStreamStackFleetAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppStream::StackUserAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackuserassociation.html | AWS::AppStream::StackUserAssociation}
 */
export interface AppStreamStackUserAssociationProps {
  SendEmailNotification?: boolean;
  UserName: string;
  StackName: string;
  AuthenticationType: string;
}
/**
 * Resource class for AWS::AppStream::StackUserAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackuserassociation.html | AWS::AppStream::StackUserAssociation}
 */
export class AppStreamStackUserAssociation extends ResourceBase<
  "AWS::AppStream::StackUserAssociation",
  AppStreamStackUserAssociationProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::AppStream::StackUserAssociation";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: AppStreamStackUserAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      AppStreamStackUserAssociation.Type,
      AppStreamStackUserAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppStream::User
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-user.html | AWS::AppStream::User}
 */
export interface AppStreamUserProps {
  UserName: string;
  FirstName?: string;
  MessageAction?: string;
  LastName?: string;
  AuthenticationType: string;
}
/**
 * Resource class for AWS::AppStream::User
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-user.html | AWS::AppStream::User}
 */
export class AppStreamUser extends ResourceBase<
  "AWS::AppStream::User",
  AppStreamUserProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::AppStream::User";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: AppStreamUserProps,
    options?: ResourceOptions,
  ) {
    super(
      AppStreamUser.Type,
      AppStreamUser.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
