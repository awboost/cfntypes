import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::Cognito::IdentityPool.CognitoIdentityProvider
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypool-cognitoidentityprovider.html | AWS::Cognito::IdentityPool.CognitoIdentityProvider}
 */
export interface CognitoIdentityPoolCognitoIdentityProvider {
  ServerSideTokenCheck?: boolean;
  ProviderName?: string;
  ClientId?: string;
}
/**
 * Type definition for AWS::Cognito::IdentityPool.CognitoStreams
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypool-cognitostreams.html | AWS::Cognito::IdentityPool.CognitoStreams}
 */
export interface CognitoIdentityPoolCognitoStreams {
  StreamingStatus?: string;
  StreamName?: string;
  RoleArn?: string;
}
/**
 * Type definition for AWS::Cognito::IdentityPool.PushSync
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypool-pushsync.html | AWS::Cognito::IdentityPool.PushSync}
 */
export interface CognitoIdentityPoolPushSync {
  ApplicationArns?: any[];
  RoleArn?: string;
}
/**
 * Type definition for AWS::Cognito::IdentityPoolRoleAttachment.MappingRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypoolroleattachment-mappingrule.html | AWS::Cognito::IdentityPoolRoleAttachment.MappingRule}
 */
export interface CognitoIdentityPoolRoleAttachmentMappingRule {
  MatchType: string;
  Value: string;
  Claim: string;
  RoleARN: string;
}
/**
 * Type definition for AWS::Cognito::IdentityPoolRoleAttachment.RoleMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypoolroleattachment-rolemapping.html | AWS::Cognito::IdentityPoolRoleAttachment.RoleMapping}
 */
export interface CognitoIdentityPoolRoleAttachmentRoleMapping {
  Type: string;
  AmbiguousRoleResolution?: string;
  RulesConfiguration?: CognitoIdentityPoolRoleAttachmentRulesConfigurationType;
  IdentityProvider?: string;
}
/**
 * Type definition for AWS::Cognito::IdentityPoolRoleAttachment.RulesConfigurationType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypoolroleattachment-rulesconfigurationtype.html | AWS::Cognito::IdentityPoolRoleAttachment.RulesConfigurationType}
 */
export interface CognitoIdentityPoolRoleAttachmentRulesConfigurationType {
  Rules: any[];
}
/**
 * Type definition for AWS::Cognito::LogDeliveryConfiguration.CloudWatchLogsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-logdeliveryconfiguration-cloudwatchlogsconfiguration.html | AWS::Cognito::LogDeliveryConfiguration.CloudWatchLogsConfiguration}
 */
export interface CognitoLogDeliveryConfigurationCloudWatchLogsConfiguration {
  LogGroupArn?: string;
}
/**
 * Type definition for AWS::Cognito::LogDeliveryConfiguration.LogConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-logdeliveryconfiguration-logconfiguration.html | AWS::Cognito::LogDeliveryConfiguration.LogConfiguration}
 */
export interface CognitoLogDeliveryConfigurationLogConfiguration {
  EventSource?: string;
  CloudWatchLogsConfiguration?: CognitoLogDeliveryConfigurationCloudWatchLogsConfiguration;
  LogLevel?: string;
}
/**
 * Type definition for AWS::Cognito::UserPool.AccountRecoverySetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-accountrecoverysetting.html | AWS::Cognito::UserPool.AccountRecoverySetting}
 */
export interface CognitoUserPoolAccountRecoverySetting {
  RecoveryMechanisms?: any[];
}
/**
 * Type definition for AWS::Cognito::UserPool.AdminCreateUserConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-admincreateuserconfig.html | AWS::Cognito::UserPool.AdminCreateUserConfig}
 */
export interface CognitoUserPoolAdminCreateUserConfig {
  InviteMessageTemplate?: CognitoUserPoolInviteMessageTemplate;
  UnusedAccountValidityDays?: number;
  AllowAdminCreateUserOnly?: boolean;
}
/**
 * Type definition for AWS::Cognito::UserPool.CustomEmailSender
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-customemailsender.html | AWS::Cognito::UserPool.CustomEmailSender}
 */
export interface CognitoUserPoolCustomEmailSender {
  LambdaArn?: string;
  LambdaVersion?: string;
}
/**
 * Type definition for AWS::Cognito::UserPool.CustomSMSSender
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-customsmssender.html | AWS::Cognito::UserPool.CustomSMSSender}
 */
export interface CognitoUserPoolCustomSMSSender {
  LambdaArn?: string;
  LambdaVersion?: string;
}
/**
 * Type definition for AWS::Cognito::UserPool.DeviceConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-deviceconfiguration.html | AWS::Cognito::UserPool.DeviceConfiguration}
 */
export interface CognitoUserPoolDeviceConfiguration {
  DeviceOnlyRememberedOnUserPrompt?: boolean;
  ChallengeRequiredOnNewDevice?: boolean;
}
/**
 * Type definition for AWS::Cognito::UserPool.EmailConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-emailconfiguration.html | AWS::Cognito::UserPool.EmailConfiguration}
 */
export interface CognitoUserPoolEmailConfiguration {
  ReplyToEmailAddress?: string;
  ConfigurationSet?: string;
  EmailSendingAccount?: string;
  SourceArn?: string;
  From?: string;
}
/**
 * Type definition for AWS::Cognito::UserPool.InviteMessageTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-invitemessagetemplate.html | AWS::Cognito::UserPool.InviteMessageTemplate}
 */
export interface CognitoUserPoolInviteMessageTemplate {
  EmailMessage?: string;
  SMSMessage?: string;
  EmailSubject?: string;
}
/**
 * Type definition for AWS::Cognito::UserPool.LambdaConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-lambdaconfig.html | AWS::Cognito::UserPool.LambdaConfig}
 */
export interface CognitoUserPoolLambdaConfig {
  CreateAuthChallenge?: string;
  PreSignUp?: string;
  KMSKeyID?: string;
  UserMigration?: string;
  PostAuthentication?: string;
  VerifyAuthChallengeResponse?: string;
  PreAuthentication?: string;
  DefineAuthChallenge?: string;
  PreTokenGeneration?: string;
  CustomSMSSender?: CognitoUserPoolCustomSMSSender;
  PostConfirmation?: string;
  CustomMessage?: string;
  CustomEmailSender?: CognitoUserPoolCustomEmailSender;
}
/**
 * Type definition for AWS::Cognito::UserPool.NumberAttributeConstraints
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-numberattributeconstraints.html | AWS::Cognito::UserPool.NumberAttributeConstraints}
 */
export interface CognitoUserPoolNumberAttributeConstraints {
  MinValue?: string;
  MaxValue?: string;
}
/**
 * Type definition for AWS::Cognito::UserPool.PasswordPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-passwordpolicy.html | AWS::Cognito::UserPool.PasswordPolicy}
 */
export interface CognitoUserPoolPasswordPolicy {
  RequireNumbers?: boolean;
  MinimumLength?: number;
  TemporaryPasswordValidityDays?: number;
  RequireUppercase?: boolean;
  RequireLowercase?: boolean;
  RequireSymbols?: boolean;
}
/**
 * Type definition for AWS::Cognito::UserPool.Policies
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-policies.html | AWS::Cognito::UserPool.Policies}
 */
export interface CognitoUserPoolPolicies {
  PasswordPolicy?: CognitoUserPoolPasswordPolicy;
}
/**
 * Type definition for AWS::Cognito::UserPool.RecoveryOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-recoveryoption.html | AWS::Cognito::UserPool.RecoveryOption}
 */
export interface CognitoUserPoolRecoveryOption {
  Priority?: number;
  Name?: string;
}
/**
 * Type definition for AWS::Cognito::UserPool.SchemaAttribute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-schemaattribute.html | AWS::Cognito::UserPool.SchemaAttribute}
 */
export interface CognitoUserPoolSchemaAttribute {
  DeveloperOnlyAttribute?: boolean;
  Mutable?: boolean;
  AttributeDataType?: string;
  StringAttributeConstraints?: CognitoUserPoolStringAttributeConstraints;
  Required?: boolean;
  NumberAttributeConstraints?: CognitoUserPoolNumberAttributeConstraints;
  Name?: string;
}
/**
 * Type definition for AWS::Cognito::UserPool.SmsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-smsconfiguration.html | AWS::Cognito::UserPool.SmsConfiguration}
 */
export interface CognitoUserPoolSmsConfiguration {
  SnsRegion?: string;
  ExternalId?: string;
  SnsCallerArn?: string;
}
/**
 * Type definition for AWS::Cognito::UserPool.StringAttributeConstraints
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-stringattributeconstraints.html | AWS::Cognito::UserPool.StringAttributeConstraints}
 */
export interface CognitoUserPoolStringAttributeConstraints {
  MinLength?: string;
  MaxLength?: string;
}
/**
 * Type definition for AWS::Cognito::UserPool.UserAttributeUpdateSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-userattributeupdatesettings.html | AWS::Cognito::UserPool.UserAttributeUpdateSettings}
 */
export interface CognitoUserPoolUserAttributeUpdateSettings {
  AttributesRequireVerificationBeforeUpdate: any[];
}
/**
 * Type definition for AWS::Cognito::UserPool.UserPoolAddOns
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-userpooladdons.html | AWS::Cognito::UserPool.UserPoolAddOns}
 */
export interface CognitoUserPoolUserPoolAddOns {
  AdvancedSecurityMode?: string;
}
/**
 * Type definition for AWS::Cognito::UserPool.UsernameConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-usernameconfiguration.html | AWS::Cognito::UserPool.UsernameConfiguration}
 */
export interface CognitoUserPoolUsernameConfiguration {
  CaseSensitive?: boolean;
}
/**
 * Type definition for AWS::Cognito::UserPool.VerificationMessageTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-verificationmessagetemplate.html | AWS::Cognito::UserPool.VerificationMessageTemplate}
 */
export interface CognitoUserPoolVerificationMessageTemplate {
  EmailMessageByLink?: string;
  EmailMessage?: string;
  SmsMessage?: string;
  EmailSubject?: string;
  DefaultEmailOption?: string;
  EmailSubjectByLink?: string;
}
/**
 * Type definition for AWS::Cognito::UserPoolClient.AnalyticsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolclient-analyticsconfiguration.html | AWS::Cognito::UserPoolClient.AnalyticsConfiguration}
 */
export interface CognitoUserPoolClientAnalyticsConfiguration {
  ApplicationArn?: string;
  UserDataShared?: boolean;
  ExternalId?: string;
  ApplicationId?: string;
  RoleArn?: string;
}
/**
 * Type definition for AWS::Cognito::UserPoolClient.TokenValidityUnits
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolclient-tokenvalidityunits.html | AWS::Cognito::UserPoolClient.TokenValidityUnits}
 */
export interface CognitoUserPoolClientTokenValidityUnits {
  IdToken?: string;
  RefreshToken?: string;
  AccessToken?: string;
}
/**
 * Type definition for AWS::Cognito::UserPoolDomain.CustomDomainConfigType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpooldomain-customdomainconfigtype.html | AWS::Cognito::UserPoolDomain.CustomDomainConfigType}
 */
export interface CognitoUserPoolDomainCustomDomainConfigType {
  CertificateArn?: string;
}
/**
 * Type definition for AWS::Cognito::UserPoolResourceServer.ResourceServerScopeType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolresourceserver-resourceserverscopetype.html | AWS::Cognito::UserPoolResourceServer.ResourceServerScopeType}
 */
export interface CognitoUserPoolResourceServerResourceServerScopeType {
  ScopeName: string;
  ScopeDescription: string;
}
/**
 * Type definition for AWS::Cognito::UserPoolRiskConfigurationAttachment.AccountTakeoverActionType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-accounttakeoveractiontype.html | AWS::Cognito::UserPoolRiskConfigurationAttachment.AccountTakeoverActionType}
 */
export interface CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverActionType {
  Notify: boolean;
  EventAction: string;
}
/**
 * Type definition for AWS::Cognito::UserPoolRiskConfigurationAttachment.AccountTakeoverActionsType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-accounttakeoveractionstype.html | AWS::Cognito::UserPoolRiskConfigurationAttachment.AccountTakeoverActionsType}
 */
export interface CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverActionsType {
  HighAction?: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverActionType;
  LowAction?: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverActionType;
  MediumAction?: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverActionType;
}
/**
 * Type definition for AWS::Cognito::UserPoolRiskConfigurationAttachment.AccountTakeoverRiskConfigurationType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-accounttakeoverriskconfigurationtype.html | AWS::Cognito::UserPoolRiskConfigurationAttachment.AccountTakeoverRiskConfigurationType}
 */
export interface CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationType {
  Actions: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverActionsType;
  NotifyConfiguration?: CognitoUserPoolRiskConfigurationAttachmentNotifyConfigurationType;
}
/**
 * Type definition for AWS::Cognito::UserPoolRiskConfigurationAttachment.CompromisedCredentialsActionsType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-compromisedcredentialsactionstype.html | AWS::Cognito::UserPoolRiskConfigurationAttachment.CompromisedCredentialsActionsType}
 */
export interface CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsActionsType {
  EventAction: string;
}
/**
 * Type definition for AWS::Cognito::UserPoolRiskConfigurationAttachment.CompromisedCredentialsRiskConfigurationType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-compromisedcredentialsriskconfigurationtype.html | AWS::Cognito::UserPoolRiskConfigurationAttachment.CompromisedCredentialsRiskConfigurationType}
 */
export interface CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationType {
  Actions: CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsActionsType;
  EventFilter?: any[];
}
/**
 * Type definition for AWS::Cognito::UserPoolRiskConfigurationAttachment.NotifyConfigurationType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype.html | AWS::Cognito::UserPoolRiskConfigurationAttachment.NotifyConfigurationType}
 */
export interface CognitoUserPoolRiskConfigurationAttachmentNotifyConfigurationType {
  BlockEmail?: CognitoUserPoolRiskConfigurationAttachmentNotifyEmailType;
  ReplyTo?: string;
  SourceArn: string;
  NoActionEmail?: CognitoUserPoolRiskConfigurationAttachmentNotifyEmailType;
  From?: string;
  MfaEmail?: CognitoUserPoolRiskConfigurationAttachmentNotifyEmailType;
}
/**
 * Type definition for AWS::Cognito::UserPoolRiskConfigurationAttachment.NotifyEmailType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-notifyemailtype.html | AWS::Cognito::UserPoolRiskConfigurationAttachment.NotifyEmailType}
 */
export interface CognitoUserPoolRiskConfigurationAttachmentNotifyEmailType {
  TextBody?: string;
  HtmlBody?: string;
  Subject: string;
}
/**
 * Type definition for AWS::Cognito::UserPoolRiskConfigurationAttachment.RiskExceptionConfigurationType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-riskexceptionconfigurationtype.html | AWS::Cognito::UserPoolRiskConfigurationAttachment.RiskExceptionConfigurationType}
 */
export interface CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationType {
  BlockedIPRangeList?: any[];
  SkippedIPRangeList?: any[];
}
/**
 * Type definition for AWS::Cognito::UserPoolUser.AttributeType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpooluser-attributetype.html | AWS::Cognito::UserPoolUser.AttributeType}
 */
export interface CognitoUserPoolUserAttributeType {
  Value?: string;
  Name?: string;
}
/**
 * Type definition for AWS::Cognito::IdentityPool
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypool.html | AWS::Cognito::IdentityPool}
 */
export interface CognitoIdentityPoolProps {
  PushSync?: CognitoIdentityPoolPushSync;
  CognitoIdentityProviders?: any[];
  CognitoEvents?: object;
  DeveloperProviderName?: string;
  CognitoStreams?: CognitoIdentityPoolCognitoStreams;
  IdentityPoolName?: string;
  AllowUnauthenticatedIdentities: boolean;
  SupportedLoginProviders?: object;
  SamlProviderARNs?: any[];
  OpenIdConnectProviderARNs?: any[];
  AllowClassicFlow?: boolean;
}
/**
 * Attributes type definition for AWS::Cognito::IdentityPool
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypool.html | AWS::Cognito::IdentityPool}
 */
export interface CognitoIdentityPoolAttribs {
  Name?: string;
}
/**
 * Resource class for AWS::Cognito::IdentityPool
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypool.html | AWS::Cognito::IdentityPool}
 */
export class CognitoIdentityPool extends ResourceBase<
  "AWS::Cognito::IdentityPool",
  CognitoIdentityPoolProps,
  CognitoIdentityPoolAttribs
> {
  public static readonly Type = "AWS::Cognito::IdentityPool";
  public static readonly AttributeNames: readonly (keyof CognitoIdentityPoolAttribs)[] =
    ["Name"];
  constructor(
    logicalId: string,
    properties: CognitoIdentityPoolProps,
    options?: ResourceOptions,
  ) {
    super(
      CognitoIdentityPool.Type,
      CognitoIdentityPool.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Cognito::IdentityPoolPrincipalTag
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolprincipaltag.html | AWS::Cognito::IdentityPoolPrincipalTag}
 */
export interface CognitoIdentityPoolPrincipalTagProps {
  PrincipalTags?: object;
  UseDefaults?: boolean;
  IdentityProviderName: string;
  IdentityPoolId: string;
}
/**
 * Resource class for AWS::Cognito::IdentityPoolPrincipalTag
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolprincipaltag.html | AWS::Cognito::IdentityPoolPrincipalTag}
 */
export class CognitoIdentityPoolPrincipalTag extends ResourceBase<
  "AWS::Cognito::IdentityPoolPrincipalTag",
  CognitoIdentityPoolPrincipalTagProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Cognito::IdentityPoolPrincipalTag";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: CognitoIdentityPoolPrincipalTagProps,
    options?: ResourceOptions,
  ) {
    super(
      CognitoIdentityPoolPrincipalTag.Type,
      CognitoIdentityPoolPrincipalTag.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Cognito::IdentityPoolRoleAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolroleattachment.html | AWS::Cognito::IdentityPoolRoleAttachment}
 */
export interface CognitoIdentityPoolRoleAttachmentProps {
  RoleMappings?: object;
  IdentityPoolId: string;
  Roles?: object;
}
/**
 * Resource class for AWS::Cognito::IdentityPoolRoleAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolroleattachment.html | AWS::Cognito::IdentityPoolRoleAttachment}
 */
export class CognitoIdentityPoolRoleAttachment extends ResourceBase<
  "AWS::Cognito::IdentityPoolRoleAttachment",
  CognitoIdentityPoolRoleAttachmentProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Cognito::IdentityPoolRoleAttachment";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: CognitoIdentityPoolRoleAttachmentProps,
    options?: ResourceOptions,
  ) {
    super(
      CognitoIdentityPoolRoleAttachment.Type,
      CognitoIdentityPoolRoleAttachment.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Cognito::LogDeliveryConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-logdeliveryconfiguration.html | AWS::Cognito::LogDeliveryConfiguration}
 */
export interface CognitoLogDeliveryConfigurationProps {
  UserPoolId: string;
  LogConfigurations?: any[];
}
/**
 * Attributes type definition for AWS::Cognito::LogDeliveryConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-logdeliveryconfiguration.html | AWS::Cognito::LogDeliveryConfiguration}
 */
export interface CognitoLogDeliveryConfigurationAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::Cognito::LogDeliveryConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-logdeliveryconfiguration.html | AWS::Cognito::LogDeliveryConfiguration}
 */
export class CognitoLogDeliveryConfiguration extends ResourceBase<
  "AWS::Cognito::LogDeliveryConfiguration",
  CognitoLogDeliveryConfigurationProps,
  CognitoLogDeliveryConfigurationAttribs
> {
  public static readonly Type = "AWS::Cognito::LogDeliveryConfiguration";
  public static readonly AttributeNames: readonly (keyof CognitoLogDeliveryConfigurationAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: CognitoLogDeliveryConfigurationProps,
    options?: ResourceOptions,
  ) {
    super(
      CognitoLogDeliveryConfiguration.Type,
      CognitoLogDeliveryConfiguration.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Cognito::UserPool
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html | AWS::Cognito::UserPool}
 */
export interface CognitoUserPoolProps {
  UserPoolTags?: object;
  Policies?: CognitoUserPoolPolicies;
  VerificationMessageTemplate?: CognitoUserPoolVerificationMessageTemplate;
  MfaConfiguration?: string;
  Schema?: any[];
  AdminCreateUserConfig?: CognitoUserPoolAdminCreateUserConfig;
  DeletionProtection?: string;
  SmsAuthenticationMessage?: string;
  UsernameConfiguration?: CognitoUserPoolUsernameConfiguration;
  UserPoolName?: string;
  SmsVerificationMessage?: string;
  UserPoolAddOns?: CognitoUserPoolUserPoolAddOns;
  UserAttributeUpdateSettings?: CognitoUserPoolUserAttributeUpdateSettings;
  EmailConfiguration?: CognitoUserPoolEmailConfiguration;
  SmsConfiguration?: CognitoUserPoolSmsConfiguration;
  AliasAttributes?: any[];
  EnabledMfas?: any[];
  EmailVerificationSubject?: string;
  LambdaConfig?: CognitoUserPoolLambdaConfig;
  UsernameAttributes?: any[];
  AutoVerifiedAttributes?: any[];
  DeviceConfiguration?: CognitoUserPoolDeviceConfiguration;
  EmailVerificationMessage?: string;
  AccountRecoverySetting?: CognitoUserPoolAccountRecoverySetting;
}
/**
 * Attributes type definition for AWS::Cognito::UserPool
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html | AWS::Cognito::UserPool}
 */
export interface CognitoUserPoolAttribs {
  ProviderName?: string;
  ProviderURL?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::Cognito::UserPool
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html | AWS::Cognito::UserPool}
 */
export class CognitoUserPool extends ResourceBase<
  "AWS::Cognito::UserPool",
  CognitoUserPoolProps,
  CognitoUserPoolAttribs
> {
  public static readonly Type = "AWS::Cognito::UserPool";
  public static readonly AttributeNames: readonly (keyof CognitoUserPoolAttribs)[] =
    ["ProviderName", "ProviderURL", "Arn"];
  constructor(
    logicalId: string,
    properties: CognitoUserPoolProps,
    options?: ResourceOptions,
  ) {
    super(
      CognitoUserPool.Type,
      CognitoUserPool.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Cognito::UserPoolClient
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolclient.html | AWS::Cognito::UserPoolClient}
 */
export interface CognitoUserPoolClientProps {
  AnalyticsConfiguration?: CognitoUserPoolClientAnalyticsConfiguration;
  GenerateSecret?: boolean;
  CallbackURLs?: any[];
  EnablePropagateAdditionalUserContextData?: boolean;
  IdTokenValidity?: number;
  AuthSessionValidity?: number;
  AllowedOAuthScopes?: any[];
  TokenValidityUnits?: CognitoUserPoolClientTokenValidityUnits;
  ReadAttributes?: any[];
  AllowedOAuthFlowsUserPoolClient?: boolean;
  DefaultRedirectURI?: string;
  SupportedIdentityProviders?: any[];
  ClientName?: string;
  UserPoolId: string;
  AllowedOAuthFlows?: any[];
  ExplicitAuthFlows?: any[];
  LogoutURLs?: any[];
  AccessTokenValidity?: number;
  RefreshTokenValidity?: number;
  WriteAttributes?: any[];
  PreventUserExistenceErrors?: string;
  EnableTokenRevocation?: boolean;
}
/**
 * Attributes type definition for AWS::Cognito::UserPoolClient
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolclient.html | AWS::Cognito::UserPoolClient}
 */
export interface CognitoUserPoolClientAttribs {
  ClientSecret?: string;
  Name?: string;
}
/**
 * Resource class for AWS::Cognito::UserPoolClient
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolclient.html | AWS::Cognito::UserPoolClient}
 */
export class CognitoUserPoolClient extends ResourceBase<
  "AWS::Cognito::UserPoolClient",
  CognitoUserPoolClientProps,
  CognitoUserPoolClientAttribs
> {
  public static readonly Type = "AWS::Cognito::UserPoolClient";
  public static readonly AttributeNames: readonly (keyof CognitoUserPoolClientAttribs)[] =
    ["ClientSecret", "Name"];
  constructor(
    logicalId: string,
    properties: CognitoUserPoolClientProps,
    options?: ResourceOptions,
  ) {
    super(
      CognitoUserPoolClient.Type,
      CognitoUserPoolClient.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Cognito::UserPoolDomain
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooldomain.html | AWS::Cognito::UserPoolDomain}
 */
export interface CognitoUserPoolDomainProps {
  UserPoolId: string;
  CustomDomainConfig?: CognitoUserPoolDomainCustomDomainConfigType;
  Domain: string;
}
/**
 * Attributes type definition for AWS::Cognito::UserPoolDomain
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooldomain.html | AWS::Cognito::UserPoolDomain}
 */
export interface CognitoUserPoolDomainAttribs {
  CloudFrontDistribution?: string;
}
/**
 * Resource class for AWS::Cognito::UserPoolDomain
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooldomain.html | AWS::Cognito::UserPoolDomain}
 */
export class CognitoUserPoolDomain extends ResourceBase<
  "AWS::Cognito::UserPoolDomain",
  CognitoUserPoolDomainProps,
  CognitoUserPoolDomainAttribs
> {
  public static readonly Type = "AWS::Cognito::UserPoolDomain";
  public static readonly AttributeNames: readonly (keyof CognitoUserPoolDomainAttribs)[] =
    ["CloudFrontDistribution"];
  constructor(
    logicalId: string,
    properties: CognitoUserPoolDomainProps,
    options?: ResourceOptions,
  ) {
    super(
      CognitoUserPoolDomain.Type,
      CognitoUserPoolDomain.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Cognito::UserPoolGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolgroup.html | AWS::Cognito::UserPoolGroup}
 */
export interface CognitoUserPoolGroupProps {
  GroupName?: string;
  Description?: string;
  UserPoolId: string;
  Precedence?: number;
  RoleArn?: string;
}
/**
 * Resource class for AWS::Cognito::UserPoolGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolgroup.html | AWS::Cognito::UserPoolGroup}
 */
export class CognitoUserPoolGroup extends ResourceBase<
  "AWS::Cognito::UserPoolGroup",
  CognitoUserPoolGroupProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Cognito::UserPoolGroup";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: CognitoUserPoolGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      CognitoUserPoolGroup.Type,
      CognitoUserPoolGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Cognito::UserPoolIdentityProvider
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolidentityprovider.html | AWS::Cognito::UserPoolIdentityProvider}
 */
export interface CognitoUserPoolIdentityProviderProps {
  ProviderName: string;
  UserPoolId: string;
  AttributeMapping?: object;
  ProviderDetails?: object;
  ProviderType: string;
  IdpIdentifiers?: any[];
}
/**
 * Resource class for AWS::Cognito::UserPoolIdentityProvider
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolidentityprovider.html | AWS::Cognito::UserPoolIdentityProvider}
 */
export class CognitoUserPoolIdentityProvider extends ResourceBase<
  "AWS::Cognito::UserPoolIdentityProvider",
  CognitoUserPoolIdentityProviderProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Cognito::UserPoolIdentityProvider";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: CognitoUserPoolIdentityProviderProps,
    options?: ResourceOptions,
  ) {
    super(
      CognitoUserPoolIdentityProvider.Type,
      CognitoUserPoolIdentityProvider.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Cognito::UserPoolResourceServer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolresourceserver.html | AWS::Cognito::UserPoolResourceServer}
 */
export interface CognitoUserPoolResourceServerProps {
  UserPoolId: string;
  Identifier: string;
  Scopes?: any[];
  Name: string;
}
/**
 * Resource class for AWS::Cognito::UserPoolResourceServer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolresourceserver.html | AWS::Cognito::UserPoolResourceServer}
 */
export class CognitoUserPoolResourceServer extends ResourceBase<
  "AWS::Cognito::UserPoolResourceServer",
  CognitoUserPoolResourceServerProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Cognito::UserPoolResourceServer";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: CognitoUserPoolResourceServerProps,
    options?: ResourceOptions,
  ) {
    super(
      CognitoUserPoolResourceServer.Type,
      CognitoUserPoolResourceServer.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Cognito::UserPoolRiskConfigurationAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html | AWS::Cognito::UserPoolRiskConfigurationAttachment}
 */
export interface CognitoUserPoolRiskConfigurationAttachmentProps {
  CompromisedCredentialsRiskConfiguration?: CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationType;
  UserPoolId: string;
  ClientId: string;
  AccountTakeoverRiskConfiguration?: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationType;
  RiskExceptionConfiguration?: CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationType;
}
/**
 * Resource class for AWS::Cognito::UserPoolRiskConfigurationAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html | AWS::Cognito::UserPoolRiskConfigurationAttachment}
 */
export class CognitoUserPoolRiskConfigurationAttachment extends ResourceBase<
  "AWS::Cognito::UserPoolRiskConfigurationAttachment",
  CognitoUserPoolRiskConfigurationAttachmentProps,
  Record<string, never>
> {
  public static readonly Type =
    "AWS::Cognito::UserPoolRiskConfigurationAttachment";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: CognitoUserPoolRiskConfigurationAttachmentProps,
    options?: ResourceOptions,
  ) {
    super(
      CognitoUserPoolRiskConfigurationAttachment.Type,
      CognitoUserPoolRiskConfigurationAttachment.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Cognito::UserPoolUICustomizationAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluicustomizationattachment.html | AWS::Cognito::UserPoolUICustomizationAttachment}
 */
export interface CognitoUserPoolUICustomizationAttachmentProps {
  CSS?: string;
  UserPoolId: string;
  ClientId: string;
}
/**
 * Resource class for AWS::Cognito::UserPoolUICustomizationAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluicustomizationattachment.html | AWS::Cognito::UserPoolUICustomizationAttachment}
 */
export class CognitoUserPoolUICustomizationAttachment extends ResourceBase<
  "AWS::Cognito::UserPoolUICustomizationAttachment",
  CognitoUserPoolUICustomizationAttachmentProps,
  Record<string, never>
> {
  public static readonly Type =
    "AWS::Cognito::UserPoolUICustomizationAttachment";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: CognitoUserPoolUICustomizationAttachmentProps,
    options?: ResourceOptions,
  ) {
    super(
      CognitoUserPoolUICustomizationAttachment.Type,
      CognitoUserPoolUICustomizationAttachment.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Cognito::UserPoolUser
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluser.html | AWS::Cognito::UserPoolUser}
 */
export interface CognitoUserPoolUserProps {
  ValidationData?: any[];
  UserPoolId: string;
  Username?: string;
  MessageAction?: string;
  ClientMetadata?: Record<string, any>;
  DesiredDeliveryMediums?: any[];
  ForceAliasCreation?: boolean;
  UserAttributes?: any[];
}
/**
 * Resource class for AWS::Cognito::UserPoolUser
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluser.html | AWS::Cognito::UserPoolUser}
 */
export class CognitoUserPoolUser extends ResourceBase<
  "AWS::Cognito::UserPoolUser",
  CognitoUserPoolUserProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Cognito::UserPoolUser";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: CognitoUserPoolUserProps,
    options?: ResourceOptions,
  ) {
    super(
      CognitoUserPoolUser.Type,
      CognitoUserPoolUser.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Cognito::UserPoolUserToGroupAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolusertogroupattachment.html | AWS::Cognito::UserPoolUserToGroupAttachment}
 */
export interface CognitoUserPoolUserToGroupAttachmentProps {
  GroupName: string;
  UserPoolId: string;
  Username: string;
}
/**
 * Resource class for AWS::Cognito::UserPoolUserToGroupAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolusertogroupattachment.html | AWS::Cognito::UserPoolUserToGroupAttachment}
 */
export class CognitoUserPoolUserToGroupAttachment extends ResourceBase<
  "AWS::Cognito::UserPoolUserToGroupAttachment",
  CognitoUserPoolUserToGroupAttachmentProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Cognito::UserPoolUserToGroupAttachment";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: CognitoUserPoolUserToGroupAttachmentProps,
    options?: ResourceOptions,
  ) {
    super(
      CognitoUserPoolUserToGroupAttachment.Type,
      CognitoUserPoolUserToGroupAttachment.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
