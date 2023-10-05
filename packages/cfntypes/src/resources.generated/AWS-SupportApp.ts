import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::SupportApp::AccountAlias
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-supportapp-accountalias.html | AWS::SupportApp::AccountAlias}
 */
export interface SupportAppAccountAliasProps {
  AccountAlias: string;
}
/**
 * Attributes type definition for AWS::SupportApp::AccountAlias
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-supportapp-accountalias.html | AWS::SupportApp::AccountAlias}
 */
export interface SupportAppAccountAliasAttribs {
  AccountAliasResourceId?: string;
}
/**
 * Resource class for AWS::SupportApp::AccountAlias
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-supportapp-accountalias.html | AWS::SupportApp::AccountAlias}
 */
export class SupportAppAccountAlias extends ResourceBase<
  "AWS::SupportApp::AccountAlias",
  SupportAppAccountAliasProps,
  SupportAppAccountAliasAttribs
> {
  public static readonly Type = "AWS::SupportApp::AccountAlias";
  public static readonly AttributeNames: readonly (keyof SupportAppAccountAliasAttribs)[] =
    ["AccountAliasResourceId"];
  constructor(
    logicalId: string,
    properties: SupportAppAccountAliasProps,
    options?: ResourceOptions,
  ) {
    super(
      SupportAppAccountAlias.Type,
      SupportAppAccountAlias.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SupportApp::SlackChannelConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-supportapp-slackchannelconfiguration.html | AWS::SupportApp::SlackChannelConfiguration}
 */
export interface SupportAppSlackChannelConfigurationProps {
  ChannelName?: string;
  NotifyOnAddCorrespondenceToCase?: boolean;
  ChannelRoleArn: string;
  NotifyOnResolveCase?: boolean;
  NotifyOnCaseSeverity: string;
  TeamId: string;
  ChannelId: string;
  NotifyOnCreateOrReopenCase?: boolean;
}
/**
 * Resource class for AWS::SupportApp::SlackChannelConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-supportapp-slackchannelconfiguration.html | AWS::SupportApp::SlackChannelConfiguration}
 */
export class SupportAppSlackChannelConfiguration extends ResourceBase<
  "AWS::SupportApp::SlackChannelConfiguration",
  SupportAppSlackChannelConfigurationProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::SupportApp::SlackChannelConfiguration";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: SupportAppSlackChannelConfigurationProps,
    options?: ResourceOptions,
  ) {
    super(
      SupportAppSlackChannelConfiguration.Type,
      SupportAppSlackChannelConfiguration.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SupportApp::SlackWorkspaceConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-supportapp-slackworkspaceconfiguration.html | AWS::SupportApp::SlackWorkspaceConfiguration}
 */
export interface SupportAppSlackWorkspaceConfigurationProps {
  VersionId?: string;
  TeamId: string;
}
/**
 * Resource class for AWS::SupportApp::SlackWorkspaceConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-supportapp-slackworkspaceconfiguration.html | AWS::SupportApp::SlackWorkspaceConfiguration}
 */
export class SupportAppSlackWorkspaceConfiguration extends ResourceBase<
  "AWS::SupportApp::SlackWorkspaceConfiguration",
  SupportAppSlackWorkspaceConfigurationProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::SupportApp::SlackWorkspaceConfiguration";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: SupportAppSlackWorkspaceConfigurationProps,
    options?: ResourceOptions,
  ) {
    super(
      SupportAppSlackWorkspaceConfiguration.Type,
      SupportAppSlackWorkspaceConfiguration.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
