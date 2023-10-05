import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::WorkSpacesWeb::IpAccessSettings.IpRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-ipaccesssettings-iprule.html | AWS::WorkSpacesWeb::IpAccessSettings.IpRule}
 */
export interface WorkSpacesWebIpAccessSettingsIpRule {
  IpRange: string;
  Description?: string;
}
/**
 * Type definition for AWS::WorkSpacesWeb::UserSettings.CookieSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-usersettings-cookiespecification.html | AWS::WorkSpacesWeb::UserSettings.CookieSpecification}
 */
export interface WorkSpacesWebUserSettingsCookieSpecification {
  Path?: string;
  Domain: string;
  Name?: string;
}
/**
 * Type definition for AWS::WorkSpacesWeb::UserSettings.CookieSynchronizationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-usersettings-cookiesynchronizationconfiguration.html | AWS::WorkSpacesWeb::UserSettings.CookieSynchronizationConfiguration}
 */
export interface WorkSpacesWebUserSettingsCookieSynchronizationConfiguration {
  Blocklist?: any[];
  Allowlist: any[];
}
/**
 * Type definition for AWS::WorkSpacesWeb::BrowserSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-browsersettings.html | AWS::WorkSpacesWeb::BrowserSettings}
 */
export interface WorkSpacesWebBrowserSettingsProps {
  BrowserPolicy?: string;
  CustomerManagedKey?: string;
  AdditionalEncryptionContext?: Record<string, any>;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::WorkSpacesWeb::BrowserSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-browsersettings.html | AWS::WorkSpacesWeb::BrowserSettings}
 */
export interface WorkSpacesWebBrowserSettingsAttribs {
  AssociatedPortalArns?: any[];
  BrowserSettingsArn?: string;
}
/**
 * Resource class for AWS::WorkSpacesWeb::BrowserSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-browsersettings.html | AWS::WorkSpacesWeb::BrowserSettings}
 */
export class WorkSpacesWebBrowserSettings extends ResourceBase<
  "AWS::WorkSpacesWeb::BrowserSettings",
  WorkSpacesWebBrowserSettingsProps,
  WorkSpacesWebBrowserSettingsAttribs
> {
  public static readonly Type = "AWS::WorkSpacesWeb::BrowserSettings";
  public static readonly AttributeNames: readonly (keyof WorkSpacesWebBrowserSettingsAttribs)[] =
    ["AssociatedPortalArns", "BrowserSettingsArn"];
  constructor(
    logicalId: string,
    properties: WorkSpacesWebBrowserSettingsProps,
    options?: ResourceOptions,
  ) {
    super(
      WorkSpacesWebBrowserSettings.Type,
      WorkSpacesWebBrowserSettings.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::WorkSpacesWeb::IdentityProvider
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-identityprovider.html | AWS::WorkSpacesWeb::IdentityProvider}
 */
export interface WorkSpacesWebIdentityProviderProps {
  IdentityProviderDetails: Record<string, any>;
  PortalArn?: string;
  IdentityProviderName: string;
  IdentityProviderType: string;
}
/**
 * Attributes type definition for AWS::WorkSpacesWeb::IdentityProvider
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-identityprovider.html | AWS::WorkSpacesWeb::IdentityProvider}
 */
export interface WorkSpacesWebIdentityProviderAttribs {
  IdentityProviderArn?: string;
}
/**
 * Resource class for AWS::WorkSpacesWeb::IdentityProvider
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-identityprovider.html | AWS::WorkSpacesWeb::IdentityProvider}
 */
export class WorkSpacesWebIdentityProvider extends ResourceBase<
  "AWS::WorkSpacesWeb::IdentityProvider",
  WorkSpacesWebIdentityProviderProps,
  WorkSpacesWebIdentityProviderAttribs
> {
  public static readonly Type = "AWS::WorkSpacesWeb::IdentityProvider";
  public static readonly AttributeNames: readonly (keyof WorkSpacesWebIdentityProviderAttribs)[] =
    ["IdentityProviderArn"];
  constructor(
    logicalId: string,
    properties: WorkSpacesWebIdentityProviderProps,
    options?: ResourceOptions,
  ) {
    super(
      WorkSpacesWebIdentityProvider.Type,
      WorkSpacesWebIdentityProvider.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::WorkSpacesWeb::IpAccessSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-ipaccesssettings.html | AWS::WorkSpacesWeb::IpAccessSettings}
 */
export interface WorkSpacesWebIpAccessSettingsProps {
  IpRules: any[];
  Description?: string;
  CustomerManagedKey?: string;
  AdditionalEncryptionContext?: Record<string, any>;
  DisplayName?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::WorkSpacesWeb::IpAccessSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-ipaccesssettings.html | AWS::WorkSpacesWeb::IpAccessSettings}
 */
export interface WorkSpacesWebIpAccessSettingsAttribs {
  CreationDate?: string;
  AssociatedPortalArns?: any[];
  IpAccessSettingsArn?: string;
}
/**
 * Resource class for AWS::WorkSpacesWeb::IpAccessSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-ipaccesssettings.html | AWS::WorkSpacesWeb::IpAccessSettings}
 */
export class WorkSpacesWebIpAccessSettings extends ResourceBase<
  "AWS::WorkSpacesWeb::IpAccessSettings",
  WorkSpacesWebIpAccessSettingsProps,
  WorkSpacesWebIpAccessSettingsAttribs
> {
  public static readonly Type = "AWS::WorkSpacesWeb::IpAccessSettings";
  public static readonly AttributeNames: readonly (keyof WorkSpacesWebIpAccessSettingsAttribs)[] =
    ["CreationDate", "AssociatedPortalArns", "IpAccessSettingsArn"];
  constructor(
    logicalId: string,
    properties: WorkSpacesWebIpAccessSettingsProps,
    options?: ResourceOptions,
  ) {
    super(
      WorkSpacesWebIpAccessSettings.Type,
      WorkSpacesWebIpAccessSettings.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::WorkSpacesWeb::NetworkSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-networksettings.html | AWS::WorkSpacesWeb::NetworkSettings}
 */
export interface WorkSpacesWebNetworkSettingsProps {
  VpcId: string;
  SecurityGroupIds: any[];
  SubnetIds: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::WorkSpacesWeb::NetworkSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-networksettings.html | AWS::WorkSpacesWeb::NetworkSettings}
 */
export interface WorkSpacesWebNetworkSettingsAttribs {
  AssociatedPortalArns?: any[];
  NetworkSettingsArn?: string;
}
/**
 * Resource class for AWS::WorkSpacesWeb::NetworkSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-networksettings.html | AWS::WorkSpacesWeb::NetworkSettings}
 */
export class WorkSpacesWebNetworkSettings extends ResourceBase<
  "AWS::WorkSpacesWeb::NetworkSettings",
  WorkSpacesWebNetworkSettingsProps,
  WorkSpacesWebNetworkSettingsAttribs
> {
  public static readonly Type = "AWS::WorkSpacesWeb::NetworkSettings";
  public static readonly AttributeNames: readonly (keyof WorkSpacesWebNetworkSettingsAttribs)[] =
    ["AssociatedPortalArns", "NetworkSettingsArn"];
  constructor(
    logicalId: string,
    properties: WorkSpacesWebNetworkSettingsProps,
    options?: ResourceOptions,
  ) {
    super(
      WorkSpacesWebNetworkSettings.Type,
      WorkSpacesWebNetworkSettings.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::WorkSpacesWeb::Portal
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-portal.html | AWS::WorkSpacesWeb::Portal}
 */
export interface WorkSpacesWebPortalProps {
  TrustStoreArn?: string;
  UserAccessLoggingSettingsArn?: string;
  CustomerManagedKey?: string;
  AdditionalEncryptionContext?: Record<string, any>;
  DisplayName?: string;
  UserSettingsArn?: string;
  BrowserSettingsArn?: string;
  IpAccessSettingsArn?: string;
  NetworkSettingsArn?: string;
  Tags?: Tag[];
  AuthenticationType?: string;
}
/**
 * Attributes type definition for AWS::WorkSpacesWeb::Portal
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-portal.html | AWS::WorkSpacesWeb::Portal}
 */
export interface WorkSpacesWebPortalAttribs {
  CreationDate?: string;
  BrowserType?: string;
  ServiceProviderSamlMetadata?: string;
  StatusReason?: string;
  PortalArn?: string;
  PortalStatus?: string;
  RendererType?: string;
  PortalEndpoint?: string;
}
/**
 * Resource class for AWS::WorkSpacesWeb::Portal
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-portal.html | AWS::WorkSpacesWeb::Portal}
 */
export class WorkSpacesWebPortal extends ResourceBase<
  "AWS::WorkSpacesWeb::Portal",
  WorkSpacesWebPortalProps,
  WorkSpacesWebPortalAttribs
> {
  public static readonly Type = "AWS::WorkSpacesWeb::Portal";
  public static readonly AttributeNames: readonly (keyof WorkSpacesWebPortalAttribs)[] =
    [
      "CreationDate",
      "BrowserType",
      "ServiceProviderSamlMetadata",
      "StatusReason",
      "PortalArn",
      "PortalStatus",
      "RendererType",
      "PortalEndpoint",
    ];
  constructor(
    logicalId: string,
    properties: WorkSpacesWebPortalProps,
    options?: ResourceOptions,
  ) {
    super(
      WorkSpacesWebPortal.Type,
      WorkSpacesWebPortal.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::WorkSpacesWeb::TrustStore
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-truststore.html | AWS::WorkSpacesWeb::TrustStore}
 */
export interface WorkSpacesWebTrustStoreProps {
  CertificateList: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::WorkSpacesWeb::TrustStore
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-truststore.html | AWS::WorkSpacesWeb::TrustStore}
 */
export interface WorkSpacesWebTrustStoreAttribs {
  AssociatedPortalArns?: any[];
  TrustStoreArn?: string;
}
/**
 * Resource class for AWS::WorkSpacesWeb::TrustStore
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-truststore.html | AWS::WorkSpacesWeb::TrustStore}
 */
export class WorkSpacesWebTrustStore extends ResourceBase<
  "AWS::WorkSpacesWeb::TrustStore",
  WorkSpacesWebTrustStoreProps,
  WorkSpacesWebTrustStoreAttribs
> {
  public static readonly Type = "AWS::WorkSpacesWeb::TrustStore";
  public static readonly AttributeNames: readonly (keyof WorkSpacesWebTrustStoreAttribs)[] =
    ["AssociatedPortalArns", "TrustStoreArn"];
  constructor(
    logicalId: string,
    properties: WorkSpacesWebTrustStoreProps,
    options?: ResourceOptions,
  ) {
    super(
      WorkSpacesWebTrustStore.Type,
      WorkSpacesWebTrustStore.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::WorkSpacesWeb::UserAccessLoggingSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-useraccessloggingsettings.html | AWS::WorkSpacesWeb::UserAccessLoggingSettings}
 */
export interface WorkSpacesWebUserAccessLoggingSettingsProps {
  KinesisStreamArn: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::WorkSpacesWeb::UserAccessLoggingSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-useraccessloggingsettings.html | AWS::WorkSpacesWeb::UserAccessLoggingSettings}
 */
export interface WorkSpacesWebUserAccessLoggingSettingsAttribs {
  AssociatedPortalArns?: any[];
  UserAccessLoggingSettingsArn?: string;
}
/**
 * Resource class for AWS::WorkSpacesWeb::UserAccessLoggingSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-useraccessloggingsettings.html | AWS::WorkSpacesWeb::UserAccessLoggingSettings}
 */
export class WorkSpacesWebUserAccessLoggingSettings extends ResourceBase<
  "AWS::WorkSpacesWeb::UserAccessLoggingSettings",
  WorkSpacesWebUserAccessLoggingSettingsProps,
  WorkSpacesWebUserAccessLoggingSettingsAttribs
> {
  public static readonly Type = "AWS::WorkSpacesWeb::UserAccessLoggingSettings";
  public static readonly AttributeNames: readonly (keyof WorkSpacesWebUserAccessLoggingSettingsAttribs)[] =
    ["AssociatedPortalArns", "UserAccessLoggingSettingsArn"];
  constructor(
    logicalId: string,
    properties: WorkSpacesWebUserAccessLoggingSettingsProps,
    options?: ResourceOptions,
  ) {
    super(
      WorkSpacesWebUserAccessLoggingSettings.Type,
      WorkSpacesWebUserAccessLoggingSettings.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::WorkSpacesWeb::UserSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-usersettings.html | AWS::WorkSpacesWeb::UserSettings}
 */
export interface WorkSpacesWebUserSettingsProps {
  IdleDisconnectTimeoutInMinutes?: number;
  UploadAllowed: string;
  CustomerManagedKey?: string;
  AdditionalEncryptionContext?: Record<string, any>;
  DisconnectTimeoutInMinutes?: number;
  PrintAllowed: string;
  CopyAllowed: string;
  CookieSynchronizationConfiguration?: WorkSpacesWebUserSettingsCookieSynchronizationConfiguration;
  DownloadAllowed: string;
  PasteAllowed: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::WorkSpacesWeb::UserSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-usersettings.html | AWS::WorkSpacesWeb::UserSettings}
 */
export interface WorkSpacesWebUserSettingsAttribs {
  AssociatedPortalArns?: any[];
  UserSettingsArn?: string;
}
/**
 * Resource class for AWS::WorkSpacesWeb::UserSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-usersettings.html | AWS::WorkSpacesWeb::UserSettings}
 */
export class WorkSpacesWebUserSettings extends ResourceBase<
  "AWS::WorkSpacesWeb::UserSettings",
  WorkSpacesWebUserSettingsProps,
  WorkSpacesWebUserSettingsAttribs
> {
  public static readonly Type = "AWS::WorkSpacesWeb::UserSettings";
  public static readonly AttributeNames: readonly (keyof WorkSpacesWebUserSettingsAttribs)[] =
    ["AssociatedPortalArns", "UserSettingsArn"];
  constructor(
    logicalId: string,
    properties: WorkSpacesWebUserSettingsProps,
    options?: ResourceOptions,
  ) {
    super(
      WorkSpacesWebUserSettings.Type,
      WorkSpacesWebUserSettings.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
