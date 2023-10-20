import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::AppConfig::Application.Tags
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-application-tags.html | AWS::AppConfig::Application.Tags}
 */
export interface AppConfigApplicationTags {
  Value?: string;
  Key?: string;
}
/**
 * Type definition for AWS::AppConfig::ConfigurationProfile.Tags
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-configurationprofile-tags.html | AWS::AppConfig::ConfigurationProfile.Tags}
 */
export interface AppConfigConfigurationProfileTags {
  Value?: string;
  Key?: string;
}
/**
 * Type definition for AWS::AppConfig::ConfigurationProfile.Validators
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-configurationprofile-validators.html | AWS::AppConfig::ConfigurationProfile.Validators}
 */
export interface AppConfigConfigurationProfileValidators {
  Type?: string;
  Content?: string;
}
/**
 * Type definition for AWS::AppConfig::Deployment.Tags
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-deployment-tags.html | AWS::AppConfig::Deployment.Tags}
 */
export interface AppConfigDeploymentTags {
  Value?: string;
  Key?: string;
}
/**
 * Type definition for AWS::AppConfig::DeploymentStrategy.Tags
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-deploymentstrategy-tags.html | AWS::AppConfig::DeploymentStrategy.Tags}
 */
export interface AppConfigDeploymentStrategyTags {
  Value?: string;
  Key?: string;
}
/**
 * Type definition for AWS::AppConfig::Environment.Monitors
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-environment-monitors.html | AWS::AppConfig::Environment.Monitors}
 */
export interface AppConfigEnvironmentMonitors {
  AlarmArn?: string;
  AlarmRoleArn?: string;
}
/**
 * Type definition for AWS::AppConfig::Environment.Tags
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-environment-tags.html | AWS::AppConfig::Environment.Tags}
 */
export interface AppConfigEnvironmentTags {
  Value?: string;
  Key?: string;
}
/**
 * Type definition for AWS::AppConfig::Extension.Parameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-extension-parameter.html | AWS::AppConfig::Extension.Parameter}
 */
export interface AppConfigExtensionParameter {
  Description?: string;
  Required: boolean;
}
/**
 * Type definition for AWS::AppConfig::Application
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-application.html | AWS::AppConfig::Application}
 */
export interface AppConfigApplicationProps {
  Description?: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Resource class for AWS::AppConfig::Application
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-application.html | AWS::AppConfig::Application}
 */
export class AppConfigApplication extends ResourceBase<
  "AWS::AppConfig::Application",
  AppConfigApplicationProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::AppConfig::Application";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: AppConfigApplicationProps,
    options?: ResourceOptions,
  ) {
    super(
      AppConfigApplication.Type,
      AppConfigApplication.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppConfig::ConfigurationProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-configurationprofile.html | AWS::AppConfig::ConfigurationProfile}
 */
export interface AppConfigConfigurationProfileProps {
  LocationUri: string;
  Type?: string;
  KmsKeyIdentifier?: string;
  Description?: string;
  Validators?: any[];
  RetrievalRoleArn?: string;
  ApplicationId: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Resource class for AWS::AppConfig::ConfigurationProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-configurationprofile.html | AWS::AppConfig::ConfigurationProfile}
 */
export class AppConfigConfigurationProfile extends ResourceBase<
  "AWS::AppConfig::ConfigurationProfile",
  AppConfigConfigurationProfileProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::AppConfig::ConfigurationProfile";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: AppConfigConfigurationProfileProps,
    options?: ResourceOptions,
  ) {
    super(
      AppConfigConfigurationProfile.Type,
      AppConfigConfigurationProfile.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppConfig::Deployment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deployment.html | AWS::AppConfig::Deployment}
 */
export interface AppConfigDeploymentProps {
  DeploymentStrategyId: string;
  ConfigurationProfileId: string;
  EnvironmentId: string;
  KmsKeyIdentifier?: string;
  Description?: string;
  ConfigurationVersion: string;
  ApplicationId: string;
  Tags?: Tag[];
}
/**
 * Resource class for AWS::AppConfig::Deployment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deployment.html | AWS::AppConfig::Deployment}
 */
export class AppConfigDeployment extends ResourceBase<
  "AWS::AppConfig::Deployment",
  AppConfigDeploymentProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::AppConfig::Deployment";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: AppConfigDeploymentProps,
    options?: ResourceOptions,
  ) {
    super(
      AppConfigDeployment.Type,
      AppConfigDeployment.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppConfig::DeploymentStrategy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deploymentstrategy.html | AWS::AppConfig::DeploymentStrategy}
 */
export interface AppConfigDeploymentStrategyProps {
  ReplicateTo: string;
  GrowthType?: string;
  Description?: string;
  DeploymentDurationInMinutes: number;
  GrowthFactor: number;
  FinalBakeTimeInMinutes?: number;
  Tags?: Tag[];
  Name: string;
}
/**
 * Resource class for AWS::AppConfig::DeploymentStrategy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deploymentstrategy.html | AWS::AppConfig::DeploymentStrategy}
 */
export class AppConfigDeploymentStrategy extends ResourceBase<
  "AWS::AppConfig::DeploymentStrategy",
  AppConfigDeploymentStrategyProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::AppConfig::DeploymentStrategy";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: AppConfigDeploymentStrategyProps,
    options?: ResourceOptions,
  ) {
    super(
      AppConfigDeploymentStrategy.Type,
      AppConfigDeploymentStrategy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppConfig::Environment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-environment.html | AWS::AppConfig::Environment}
 */
export interface AppConfigEnvironmentProps {
  Description?: string;
  Monitors?: any[];
  ApplicationId: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Resource class for AWS::AppConfig::Environment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-environment.html | AWS::AppConfig::Environment}
 */
export class AppConfigEnvironment extends ResourceBase<
  "AWS::AppConfig::Environment",
  AppConfigEnvironmentProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::AppConfig::Environment";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: AppConfigEnvironmentProps,
    options?: ResourceOptions,
  ) {
    super(
      AppConfigEnvironment.Type,
      AppConfigEnvironment.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppConfig::Extension
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-extension.html | AWS::AppConfig::Extension}
 */
export interface AppConfigExtensionProps {
  Description?: string;
  Parameters?: Record<string, any>;
  Actions: object;
  LatestVersionNumber?: number;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::AppConfig::Extension
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-extension.html | AWS::AppConfig::Extension}
 */
export interface AppConfigExtensionAttribs {
  Id?: string;
  Arn?: string;
  VersionNumber?: number;
}
/**
 * Resource class for AWS::AppConfig::Extension
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-extension.html | AWS::AppConfig::Extension}
 */
export class AppConfigExtension extends ResourceBase<
  "AWS::AppConfig::Extension",
  AppConfigExtensionProps,
  AppConfigExtensionAttribs
> {
  public static readonly Type = "AWS::AppConfig::Extension";
  public static readonly AttributeNames: readonly (keyof AppConfigExtensionAttribs)[] =
    ["Id", "Arn", "VersionNumber"];
  constructor(
    logicalId: string,
    properties: AppConfigExtensionProps,
    options?: ResourceOptions,
  ) {
    super(
      AppConfigExtension.Type,
      AppConfigExtension.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppConfig::ExtensionAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-extensionassociation.html | AWS::AppConfig::ExtensionAssociation}
 */
export interface AppConfigExtensionAssociationProps {
  ResourceIdentifier?: string;
  Parameters?: Record<string, any>;
  ExtensionIdentifier?: string;
  ExtensionVersionNumber?: number;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::AppConfig::ExtensionAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-extensionassociation.html | AWS::AppConfig::ExtensionAssociation}
 */
export interface AppConfigExtensionAssociationAttribs {
  ResourceArn?: string;
  ExtensionArn?: string;
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::AppConfig::ExtensionAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-extensionassociation.html | AWS::AppConfig::ExtensionAssociation}
 */
export class AppConfigExtensionAssociation extends ResourceBase<
  "AWS::AppConfig::ExtensionAssociation",
  AppConfigExtensionAssociationProps,
  AppConfigExtensionAssociationAttribs
> {
  public static readonly Type = "AWS::AppConfig::ExtensionAssociation";
  public static readonly AttributeNames: readonly (keyof AppConfigExtensionAssociationAttribs)[] =
    ["ResourceArn", "ExtensionArn", "Id", "Arn"];
  constructor(
    logicalId: string,
    properties: AppConfigExtensionAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      AppConfigExtensionAssociation.Type,
      AppConfigExtensionAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppConfig::HostedConfigurationVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html | AWS::AppConfig::HostedConfigurationVersion}
 */
export interface AppConfigHostedConfigurationVersionProps {
  ConfigurationProfileId: string;
  Description?: string;
  ContentType: string;
  LatestVersionNumber?: number;
  Content: string;
  VersionLabel?: string;
  ApplicationId: string;
}
/**
 * Resource class for AWS::AppConfig::HostedConfigurationVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html | AWS::AppConfig::HostedConfigurationVersion}
 */
export class AppConfigHostedConfigurationVersion extends ResourceBase<
  "AWS::AppConfig::HostedConfigurationVersion",
  AppConfigHostedConfigurationVersionProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::AppConfig::HostedConfigurationVersion";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: AppConfigHostedConfigurationVersionProps,
    options?: ResourceOptions,
  ) {
    super(
      AppConfigHostedConfigurationVersion.Type,
      AppConfigHostedConfigurationVersion.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
