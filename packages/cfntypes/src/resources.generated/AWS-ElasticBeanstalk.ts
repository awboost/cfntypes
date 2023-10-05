import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::ElasticBeanstalk::Application.ApplicationResourceLifecycleConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-application-applicationresourcelifecycleconfig.html | AWS::ElasticBeanstalk::Application.ApplicationResourceLifecycleConfig}
 */
export interface ElasticBeanstalkApplicationApplicationResourceLifecycleConfig {
  ServiceRole?: string;
  VersionLifecycleConfig?: ElasticBeanstalkApplicationApplicationVersionLifecycleConfig;
}
/**
 * Type definition for AWS::ElasticBeanstalk::Application.ApplicationVersionLifecycleConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-application-applicationversionlifecycleconfig.html | AWS::ElasticBeanstalk::Application.ApplicationVersionLifecycleConfig}
 */
export interface ElasticBeanstalkApplicationApplicationVersionLifecycleConfig {
  MaxCountRule?: ElasticBeanstalkApplicationMaxCountRule;
  MaxAgeRule?: ElasticBeanstalkApplicationMaxAgeRule;
}
/**
 * Type definition for AWS::ElasticBeanstalk::Application.MaxAgeRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-application-maxagerule.html | AWS::ElasticBeanstalk::Application.MaxAgeRule}
 */
export interface ElasticBeanstalkApplicationMaxAgeRule {
  DeleteSourceFromS3?: boolean;
  MaxAgeInDays?: number;
  Enabled?: boolean;
}
/**
 * Type definition for AWS::ElasticBeanstalk::Application.MaxCountRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-application-maxcountrule.html | AWS::ElasticBeanstalk::Application.MaxCountRule}
 */
export interface ElasticBeanstalkApplicationMaxCountRule {
  DeleteSourceFromS3?: boolean;
  Enabled?: boolean;
  MaxCount?: number;
}
/**
 * Type definition for AWS::ElasticBeanstalk::ApplicationVersion.SourceBundle
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-applicationversion-sourcebundle.html | AWS::ElasticBeanstalk::ApplicationVersion.SourceBundle}
 */
export interface ElasticBeanstalkApplicationVersionSourceBundle {
  S3Bucket: string;
  S3Key: string;
}
/**
 * Type definition for AWS::ElasticBeanstalk::ConfigurationTemplate.ConfigurationOptionSetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-configurationtemplate-configurationoptionsetting.html | AWS::ElasticBeanstalk::ConfigurationTemplate.ConfigurationOptionSetting}
 */
export interface ElasticBeanstalkConfigurationTemplateConfigurationOptionSetting {
  ResourceName?: string;
  Value?: string;
  Namespace: string;
  OptionName: string;
}
/**
 * Type definition for AWS::ElasticBeanstalk::ConfigurationTemplate.SourceConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-configurationtemplate-sourceconfiguration.html | AWS::ElasticBeanstalk::ConfigurationTemplate.SourceConfiguration}
 */
export interface ElasticBeanstalkConfigurationTemplateSourceConfiguration {
  ApplicationName: string;
  TemplateName: string;
}
/**
 * Type definition for AWS::ElasticBeanstalk::Environment.OptionSetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-environment-optionsetting.html | AWS::ElasticBeanstalk::Environment.OptionSetting}
 */
export interface ElasticBeanstalkEnvironmentOptionSetting {
  ResourceName?: string;
  Value?: string;
  Namespace: string;
  OptionName: string;
}
/**
 * Type definition for AWS::ElasticBeanstalk::Environment.Tier
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-environment-tier.html | AWS::ElasticBeanstalk::Environment.Tier}
 */
export interface ElasticBeanstalkEnvironmentTier {
  Type?: string;
  Version?: string;
  Name?: string;
}
/**
 * Type definition for AWS::ElasticBeanstalk::Application
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-application.html | AWS::ElasticBeanstalk::Application}
 */
export interface ElasticBeanstalkApplicationProps {
  ApplicationName?: string;
  Description?: string;
  ResourceLifecycleConfig?: ElasticBeanstalkApplicationApplicationResourceLifecycleConfig;
}
/**
 * Resource class for AWS::ElasticBeanstalk::Application
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-application.html | AWS::ElasticBeanstalk::Application}
 */
export class ElasticBeanstalkApplication extends ResourceBase<
  "AWS::ElasticBeanstalk::Application",
  ElasticBeanstalkApplicationProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::ElasticBeanstalk::Application";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ElasticBeanstalkApplicationProps,
    options?: ResourceOptions,
  ) {
    super(
      ElasticBeanstalkApplication.Type,
      ElasticBeanstalkApplication.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ElasticBeanstalk::ApplicationVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-applicationversion.html | AWS::ElasticBeanstalk::ApplicationVersion}
 */
export interface ElasticBeanstalkApplicationVersionProps {
  ApplicationName: string;
  Description?: string;
  SourceBundle: ElasticBeanstalkApplicationVersionSourceBundle;
}
/**
 * Attributes type definition for AWS::ElasticBeanstalk::ApplicationVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-applicationversion.html | AWS::ElasticBeanstalk::ApplicationVersion}
 */
export interface ElasticBeanstalkApplicationVersionAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::ElasticBeanstalk::ApplicationVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-applicationversion.html | AWS::ElasticBeanstalk::ApplicationVersion}
 */
export class ElasticBeanstalkApplicationVersion extends ResourceBase<
  "AWS::ElasticBeanstalk::ApplicationVersion",
  ElasticBeanstalkApplicationVersionProps,
  ElasticBeanstalkApplicationVersionAttribs
> {
  public static readonly Type = "AWS::ElasticBeanstalk::ApplicationVersion";
  public static readonly AttributeNames: readonly (keyof ElasticBeanstalkApplicationVersionAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: ElasticBeanstalkApplicationVersionProps,
    options?: ResourceOptions,
  ) {
    super(
      ElasticBeanstalkApplicationVersion.Type,
      ElasticBeanstalkApplicationVersion.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ElasticBeanstalk::ConfigurationTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-configurationtemplate.html | AWS::ElasticBeanstalk::ConfigurationTemplate}
 */
export interface ElasticBeanstalkConfigurationTemplateProps {
  EnvironmentId?: string;
  PlatformArn?: string;
  ApplicationName: string;
  Description?: string;
  OptionSettings?: any[];
  SourceConfiguration?: ElasticBeanstalkConfigurationTemplateSourceConfiguration;
  SolutionStackName?: string;
}
/**
 * Attributes type definition for AWS::ElasticBeanstalk::ConfigurationTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-configurationtemplate.html | AWS::ElasticBeanstalk::ConfigurationTemplate}
 */
export interface ElasticBeanstalkConfigurationTemplateAttribs {
  TemplateName?: string;
}
/**
 * Resource class for AWS::ElasticBeanstalk::ConfigurationTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-configurationtemplate.html | AWS::ElasticBeanstalk::ConfigurationTemplate}
 */
export class ElasticBeanstalkConfigurationTemplate extends ResourceBase<
  "AWS::ElasticBeanstalk::ConfigurationTemplate",
  ElasticBeanstalkConfigurationTemplateProps,
  ElasticBeanstalkConfigurationTemplateAttribs
> {
  public static readonly Type = "AWS::ElasticBeanstalk::ConfigurationTemplate";
  public static readonly AttributeNames: readonly (keyof ElasticBeanstalkConfigurationTemplateAttribs)[] =
    ["TemplateName"];
  constructor(
    logicalId: string,
    properties: ElasticBeanstalkConfigurationTemplateProps,
    options?: ResourceOptions,
  ) {
    super(
      ElasticBeanstalkConfigurationTemplate.Type,
      ElasticBeanstalkConfigurationTemplate.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ElasticBeanstalk::Environment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-environment.html | AWS::ElasticBeanstalk::Environment}
 */
export interface ElasticBeanstalkEnvironmentProps {
  PlatformArn?: string;
  ApplicationName: string;
  Description?: string;
  EnvironmentName?: string;
  OperationsRole?: string;
  Tier?: ElasticBeanstalkEnvironmentTier;
  OptionSettings?: any[];
  VersionLabel?: string;
  TemplateName?: string;
  SolutionStackName?: string;
  CNAMEPrefix?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::ElasticBeanstalk::Environment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-environment.html | AWS::ElasticBeanstalk::Environment}
 */
export interface ElasticBeanstalkEnvironmentAttribs {
  EndpointURL?: string;
}
/**
 * Resource class for AWS::ElasticBeanstalk::Environment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-environment.html | AWS::ElasticBeanstalk::Environment}
 */
export class ElasticBeanstalkEnvironment extends ResourceBase<
  "AWS::ElasticBeanstalk::Environment",
  ElasticBeanstalkEnvironmentProps,
  ElasticBeanstalkEnvironmentAttribs
> {
  public static readonly Type = "AWS::ElasticBeanstalk::Environment";
  public static readonly AttributeNames: readonly (keyof ElasticBeanstalkEnvironmentAttribs)[] =
    ["EndpointURL"];
  constructor(
    logicalId: string,
    properties: ElasticBeanstalkEnvironmentProps,
    options?: ResourceOptions,
  ) {
    super(
      ElasticBeanstalkEnvironment.Type,
      ElasticBeanstalkEnvironment.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
