import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::Chatbot::MicrosoftTeamsChannelConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-microsoftteamschannelconfiguration.html | AWS::Chatbot::MicrosoftTeamsChannelConfiguration}
 */
export interface ChatbotMicrosoftTeamsChannelConfigurationProps {
  UserRoleRequired?: boolean;
  LoggingLevel?: string;
  SnsTopicArns?: any[];
  GuardrailPolicies?: any[];
  IamRoleArn: string;
  TeamId: string;
  ConfigurationName: string;
  TeamsTenantId: string;
  TeamsChannelId: string;
}
/**
 * Attributes type definition for AWS::Chatbot::MicrosoftTeamsChannelConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-microsoftteamschannelconfiguration.html | AWS::Chatbot::MicrosoftTeamsChannelConfiguration}
 */
export interface ChatbotMicrosoftTeamsChannelConfigurationAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::Chatbot::MicrosoftTeamsChannelConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-microsoftteamschannelconfiguration.html | AWS::Chatbot::MicrosoftTeamsChannelConfiguration}
 */
export class ChatbotMicrosoftTeamsChannelConfiguration extends ResourceBase<
  "AWS::Chatbot::MicrosoftTeamsChannelConfiguration",
  ChatbotMicrosoftTeamsChannelConfigurationProps,
  ChatbotMicrosoftTeamsChannelConfigurationAttribs
> {
  public static readonly Type =
    "AWS::Chatbot::MicrosoftTeamsChannelConfiguration";
  public static readonly AttributeNames: readonly (keyof ChatbotMicrosoftTeamsChannelConfigurationAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: ChatbotMicrosoftTeamsChannelConfigurationProps,
    options?: ResourceOptions,
  ) {
    super(
      ChatbotMicrosoftTeamsChannelConfiguration.Type,
      ChatbotMicrosoftTeamsChannelConfiguration.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Chatbot::SlackChannelConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html | AWS::Chatbot::SlackChannelConfiguration}
 */
export interface ChatbotSlackChannelConfigurationProps {
  UserRoleRequired?: boolean;
  LoggingLevel?: string;
  SnsTopicArns?: any[];
  GuardrailPolicies?: any[];
  SlackWorkspaceId: string;
  SlackChannelId: string;
  IamRoleArn: string;
  ConfigurationName: string;
}
/**
 * Attributes type definition for AWS::Chatbot::SlackChannelConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html | AWS::Chatbot::SlackChannelConfiguration}
 */
export interface ChatbotSlackChannelConfigurationAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::Chatbot::SlackChannelConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html | AWS::Chatbot::SlackChannelConfiguration}
 */
export class ChatbotSlackChannelConfiguration extends ResourceBase<
  "AWS::Chatbot::SlackChannelConfiguration",
  ChatbotSlackChannelConfigurationProps,
  ChatbotSlackChannelConfigurationAttribs
> {
  public static readonly Type = "AWS::Chatbot::SlackChannelConfiguration";
  public static readonly AttributeNames: readonly (keyof ChatbotSlackChannelConfigurationAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: ChatbotSlackChannelConfigurationProps,
    options?: ResourceOptions,
  ) {
    super(
      ChatbotSlackChannelConfiguration.Type,
      ChatbotSlackChannelConfiguration.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
