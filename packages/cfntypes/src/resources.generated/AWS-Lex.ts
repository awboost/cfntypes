import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::Lex::Bot.AdvancedRecognitionSetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-advancedrecognitionsetting.html | AWS::Lex::Bot.AdvancedRecognitionSetting}
 */
export interface LexBotAdvancedRecognitionSetting {
  AudioRecognitionStrategy?: string;
}
/**
 * Type definition for AWS::Lex::Bot.AllowedInputTypes
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-allowedinputtypes.html | AWS::Lex::Bot.AllowedInputTypes}
 */
export interface LexBotAllowedInputTypes {
  AllowDTMFInput: boolean;
  AllowAudioInput: boolean;
}
/**
 * Type definition for AWS::Lex::Bot.AudioAndDTMFInputSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-audioanddtmfinputspecification.html | AWS::Lex::Bot.AudioAndDTMFInputSpecification}
 */
export interface LexBotAudioAndDTMFInputSpecification {
  DTMFSpecification?: LexBotDTMFSpecification;
  AudioSpecification?: LexBotAudioSpecification;
  StartTimeoutMs: number;
}
/**
 * Type definition for AWS::Lex::Bot.AudioLogDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-audiologdestination.html | AWS::Lex::Bot.AudioLogDestination}
 */
export interface LexBotAudioLogDestination {
  S3Bucket: LexBotS3BucketLogDestination;
}
/**
 * Type definition for AWS::Lex::Bot.AudioLogSetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-audiologsetting.html | AWS::Lex::Bot.AudioLogSetting}
 */
export interface LexBotAudioLogSetting {
  Destination: LexBotAudioLogDestination;
  Enabled: boolean;
}
/**
 * Type definition for AWS::Lex::Bot.AudioSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-audiospecification.html | AWS::Lex::Bot.AudioSpecification}
 */
export interface LexBotAudioSpecification {
  EndTimeoutMs: number;
  MaxLengthMs: number;
}
/**
 * Type definition for AWS::Lex::Bot.BotAliasLocaleSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-botaliaslocalesettings.html | AWS::Lex::Bot.BotAliasLocaleSettings}
 */
export interface LexBotBotAliasLocaleSettings {
  CodeHookSpecification?: LexBotCodeHookSpecification;
  Enabled: boolean;
}
/**
 * Type definition for AWS::Lex::Bot.BotAliasLocaleSettingsItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-botaliaslocalesettingsitem.html | AWS::Lex::Bot.BotAliasLocaleSettingsItem}
 */
export interface LexBotBotAliasLocaleSettingsItem {
  LocaleId: string;
  BotAliasLocaleSetting: LexBotBotAliasLocaleSettings;
}
/**
 * Type definition for AWS::Lex::Bot.BotLocale
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-botlocale.html | AWS::Lex::Bot.BotLocale}
 */
export interface LexBotBotLocale {
  NluConfidenceThreshold: number;
  LocaleId: string;
  Description?: string;
  CustomVocabulary?: LexBotCustomVocabulary;
  SlotTypes?: any[];
  Intents?: any[];
  VoiceSettings?: LexBotVoiceSettings;
}
/**
 * Type definition for AWS::Lex::Bot.Button
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-button.html | AWS::Lex::Bot.Button}
 */
export interface LexBotButton {
  Value: string;
  Text: string;
}
/**
 * Type definition for AWS::Lex::Bot.CloudWatchLogGroupLogDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-cloudwatchloggrouplogdestination.html | AWS::Lex::Bot.CloudWatchLogGroupLogDestination}
 */
export interface LexBotCloudWatchLogGroupLogDestination {
  CloudWatchLogGroupArn: string;
  LogPrefix: string;
}
/**
 * Type definition for AWS::Lex::Bot.CodeHookSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-codehookspecification.html | AWS::Lex::Bot.CodeHookSpecification}
 */
export interface LexBotCodeHookSpecification {
  LambdaCodeHook: LexBotLambdaCodeHook;
}
/**
 * Type definition for AWS::Lex::Bot.Condition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-condition.html | AWS::Lex::Bot.Condition}
 */
export interface LexBotCondition {
  ExpressionString: string;
}
/**
 * Type definition for AWS::Lex::Bot.ConditionalBranch
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-conditionalbranch.html | AWS::Lex::Bot.ConditionalBranch}
 */
export interface LexBotConditionalBranch {
  Condition: LexBotCondition;
  Response?: LexBotResponseSpecification;
  Name: string;
  NextStep: LexBotDialogState;
}
/**
 * Type definition for AWS::Lex::Bot.ConditionalSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-conditionalspecification.html | AWS::Lex::Bot.ConditionalSpecification}
 */
export interface LexBotConditionalSpecification {
  DefaultBranch: LexBotDefaultConditionalBranch;
  IsActive: boolean;
  ConditionalBranches: any[];
}
/**
 * Type definition for AWS::Lex::Bot.ConversationLogSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-conversationlogsettings.html | AWS::Lex::Bot.ConversationLogSettings}
 */
export interface LexBotConversationLogSettings {
  TextLogSettings?: any[];
  AudioLogSettings?: any[];
}
/**
 * Type definition for AWS::Lex::Bot.CustomPayload
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-custompayload.html | AWS::Lex::Bot.CustomPayload}
 */
export interface LexBotCustomPayload {
  Value: string;
}
/**
 * Type definition for AWS::Lex::Bot.CustomVocabulary
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-customvocabulary.html | AWS::Lex::Bot.CustomVocabulary}
 */
export interface LexBotCustomVocabulary {
  CustomVocabularyItems: any[];
}
/**
 * Type definition for AWS::Lex::Bot.CustomVocabularyItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-customvocabularyitem.html | AWS::Lex::Bot.CustomVocabularyItem}
 */
export interface LexBotCustomVocabularyItem {
  DisplayAs?: string;
  Phrase: string;
  Weight?: number;
}
/**
 * Type definition for AWS::Lex::Bot.DTMFSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dtmfspecification.html | AWS::Lex::Bot.DTMFSpecification}
 */
export interface LexBotDTMFSpecification {
  DeletionCharacter: string;
  EndTimeoutMs: number;
  EndCharacter: string;
  MaxLength: number;
}
/**
 * Type definition for AWS::Lex::Bot.DataPrivacy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dataprivacy.html | AWS::Lex::Bot.DataPrivacy}
 */
export interface LexBotDataPrivacy {
  ChildDirected: boolean;
}
/**
 * Type definition for AWS::Lex::Bot.DefaultConditionalBranch
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-defaultconditionalbranch.html | AWS::Lex::Bot.DefaultConditionalBranch}
 */
export interface LexBotDefaultConditionalBranch {
  Response?: LexBotResponseSpecification;
  NextStep?: LexBotDialogState;
}
/**
 * Type definition for AWS::Lex::Bot.DialogAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dialogaction.html | AWS::Lex::Bot.DialogAction}
 */
export interface LexBotDialogAction {
  Type: string;
  SlotToElicit?: string;
  SuppressNextMessage?: boolean;
}
/**
 * Type definition for AWS::Lex::Bot.DialogCodeHookInvocationSetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dialogcodehookinvocationsetting.html | AWS::Lex::Bot.DialogCodeHookInvocationSetting}
 */
export interface LexBotDialogCodeHookInvocationSetting {
  EnableCodeHookInvocation: boolean;
  InvocationLabel?: string;
  IsActive: boolean;
  PostCodeHookSpecification: LexBotPostDialogCodeHookInvocationSpecification;
}
/**
 * Type definition for AWS::Lex::Bot.DialogCodeHookSetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dialogcodehooksetting.html | AWS::Lex::Bot.DialogCodeHookSetting}
 */
export interface LexBotDialogCodeHookSetting {
  Enabled: boolean;
}
/**
 * Type definition for AWS::Lex::Bot.DialogState
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dialogstate.html | AWS::Lex::Bot.DialogState}
 */
export interface LexBotDialogState {
  DialogAction?: LexBotDialogAction;
  SessionAttributes?: any[];
  Intent?: LexBotIntentOverride;
}
/**
 * Type definition for AWS::Lex::Bot.ElicitationCodeHookInvocationSetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-elicitationcodehookinvocationsetting.html | AWS::Lex::Bot.ElicitationCodeHookInvocationSetting}
 */
export interface LexBotElicitationCodeHookInvocationSetting {
  EnableCodeHookInvocation: boolean;
  InvocationLabel?: string;
}
/**
 * Type definition for AWS::Lex::Bot.ExternalSourceSetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-externalsourcesetting.html | AWS::Lex::Bot.ExternalSourceSetting}
 */
export interface LexBotExternalSourceSetting {
  GrammarSlotTypeSetting?: LexBotGrammarSlotTypeSetting;
}
/**
 * Type definition for AWS::Lex::Bot.FulfillmentCodeHookSetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-fulfillmentcodehooksetting.html | AWS::Lex::Bot.FulfillmentCodeHookSetting}
 */
export interface LexBotFulfillmentCodeHookSetting {
  PostFulfillmentStatusSpecification?: LexBotPostFulfillmentStatusSpecification;
  FulfillmentUpdatesSpecification?: LexBotFulfillmentUpdatesSpecification;
  IsActive?: boolean;
  Enabled: boolean;
}
/**
 * Type definition for AWS::Lex::Bot.FulfillmentStartResponseSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-fulfillmentstartresponsespecification.html | AWS::Lex::Bot.FulfillmentStartResponseSpecification}
 */
export interface LexBotFulfillmentStartResponseSpecification {
  DelayInSeconds: number;
  MessageGroups: any[];
  AllowInterrupt?: boolean;
}
/**
 * Type definition for AWS::Lex::Bot.FulfillmentUpdateResponseSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-fulfillmentupdateresponsespecification.html | AWS::Lex::Bot.FulfillmentUpdateResponseSpecification}
 */
export interface LexBotFulfillmentUpdateResponseSpecification {
  MessageGroups: any[];
  AllowInterrupt?: boolean;
  FrequencyInSeconds: number;
}
/**
 * Type definition for AWS::Lex::Bot.FulfillmentUpdatesSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-fulfillmentupdatesspecification.html | AWS::Lex::Bot.FulfillmentUpdatesSpecification}
 */
export interface LexBotFulfillmentUpdatesSpecification {
  UpdateResponse?: LexBotFulfillmentUpdateResponseSpecification;
  Active: boolean;
  TimeoutInSeconds?: number;
  StartResponse?: LexBotFulfillmentStartResponseSpecification;
}
/**
 * Type definition for AWS::Lex::Bot.GrammarSlotTypeSetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-grammarslottypesetting.html | AWS::Lex::Bot.GrammarSlotTypeSetting}
 */
export interface LexBotGrammarSlotTypeSetting {
  Source?: LexBotGrammarSlotTypeSource;
}
/**
 * Type definition for AWS::Lex::Bot.GrammarSlotTypeSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-grammarslottypesource.html | AWS::Lex::Bot.GrammarSlotTypeSource}
 */
export interface LexBotGrammarSlotTypeSource {
  KmsKeyArn?: string;
  S3BucketName: string;
  S3ObjectKey: string;
}
/**
 * Type definition for AWS::Lex::Bot.ImageResponseCard
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-imageresponsecard.html | AWS::Lex::Bot.ImageResponseCard}
 */
export interface LexBotImageResponseCard {
  Subtitle?: string;
  Title: string;
  ImageUrl?: string;
  Buttons?: any[];
}
/**
 * Type definition for AWS::Lex::Bot.InitialResponseSetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-initialresponsesetting.html | AWS::Lex::Bot.InitialResponseSetting}
 */
export interface LexBotInitialResponseSetting {
  CodeHook?: LexBotDialogCodeHookInvocationSetting;
  InitialResponse?: LexBotResponseSpecification;
  Conditional?: LexBotConditionalSpecification;
  NextStep?: LexBotDialogState;
}
/**
 * Type definition for AWS::Lex::Bot.InputContext
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-inputcontext.html | AWS::Lex::Bot.InputContext}
 */
export interface LexBotInputContext {
  Name: string;
}
/**
 * Type definition for AWS::Lex::Bot.Intent
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intent.html | AWS::Lex::Bot.Intent}
 */
export interface LexBotIntent {
  Description?: string;
  ParentIntentSignature?: string;
  InitialResponseSetting?: LexBotInitialResponseSetting;
  FulfillmentCodeHook?: LexBotFulfillmentCodeHookSetting;
  IntentConfirmationSetting?: LexBotIntentConfirmationSetting;
  Name: string;
  Slots?: any[];
  DialogCodeHook?: LexBotDialogCodeHookSetting;
  InputContexts?: any[];
  KendraConfiguration?: LexBotKendraConfiguration;
  IntentClosingSetting?: LexBotIntentClosingSetting;
  OutputContexts?: any[];
  SlotPriorities?: any[];
  SampleUtterances?: any[];
}
/**
 * Type definition for AWS::Lex::Bot.IntentClosingSetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intentclosingsetting.html | AWS::Lex::Bot.IntentClosingSetting}
 */
export interface LexBotIntentClosingSetting {
  IsActive?: boolean;
  ClosingResponse?: LexBotResponseSpecification;
  Conditional?: LexBotConditionalSpecification;
  NextStep?: LexBotDialogState;
}
/**
 * Type definition for AWS::Lex::Bot.IntentConfirmationSetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intentconfirmationsetting.html | AWS::Lex::Bot.IntentConfirmationSetting}
 */
export interface LexBotIntentConfirmationSetting {
  PromptSpecification: LexBotPromptSpecification;
  ConfirmationResponse?: LexBotResponseSpecification;
  DeclinationConditional?: LexBotConditionalSpecification;
  FailureConditional?: LexBotConditionalSpecification;
  ConfirmationConditional?: LexBotConditionalSpecification;
  IsActive?: boolean;
  FailureResponse?: LexBotResponseSpecification;
  CodeHook?: LexBotDialogCodeHookInvocationSetting;
  DeclinationNextStep?: LexBotDialogState;
  ElicitationCodeHook?: LexBotElicitationCodeHookInvocationSetting;
  ConfirmationNextStep?: LexBotDialogState;
  FailureNextStep?: LexBotDialogState;
  DeclinationResponse?: LexBotResponseSpecification;
}
/**
 * Type definition for AWS::Lex::Bot.IntentOverride
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intentoverride.html | AWS::Lex::Bot.IntentOverride}
 */
export interface LexBotIntentOverride {
  Slots?: any[];
  Name?: string;
}
/**
 * Type definition for AWS::Lex::Bot.KendraConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-kendraconfiguration.html | AWS::Lex::Bot.KendraConfiguration}
 */
export interface LexBotKendraConfiguration {
  QueryFilterString?: string;
  QueryFilterStringEnabled?: boolean;
  KendraIndex: string;
}
/**
 * Type definition for AWS::Lex::Bot.LambdaCodeHook
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-lambdacodehook.html | AWS::Lex::Bot.LambdaCodeHook}
 */
export interface LexBotLambdaCodeHook {
  LambdaArn: string;
  CodeHookInterfaceVersion: string;
}
/**
 * Type definition for AWS::Lex::Bot.Message
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-message.html | AWS::Lex::Bot.Message}
 */
export interface LexBotMessage {
  CustomPayload?: LexBotCustomPayload;
  ImageResponseCard?: LexBotImageResponseCard;
  PlainTextMessage?: LexBotPlainTextMessage;
  SSMLMessage?: LexBotSSMLMessage;
}
/**
 * Type definition for AWS::Lex::Bot.MessageGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-messagegroup.html | AWS::Lex::Bot.MessageGroup}
 */
export interface LexBotMessageGroup {
  Message: LexBotMessage;
  Variations?: any[];
}
/**
 * Type definition for AWS::Lex::Bot.MultipleValuesSetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-multiplevaluessetting.html | AWS::Lex::Bot.MultipleValuesSetting}
 */
export interface LexBotMultipleValuesSetting {
  AllowMultipleValues?: boolean;
}
/**
 * Type definition for AWS::Lex::Bot.ObfuscationSetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-obfuscationsetting.html | AWS::Lex::Bot.ObfuscationSetting}
 */
export interface LexBotObfuscationSetting {
  ObfuscationSettingType: string;
}
/**
 * Type definition for AWS::Lex::Bot.OutputContext
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-outputcontext.html | AWS::Lex::Bot.OutputContext}
 */
export interface LexBotOutputContext {
  TurnsToLive: number;
  TimeToLiveInSeconds: number;
  Name: string;
}
/**
 * Type definition for AWS::Lex::Bot.PlainTextMessage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-plaintextmessage.html | AWS::Lex::Bot.PlainTextMessage}
 */
export interface LexBotPlainTextMessage {
  Value: string;
}
/**
 * Type definition for AWS::Lex::Bot.PostDialogCodeHookInvocationSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-postdialogcodehookinvocationspecification.html | AWS::Lex::Bot.PostDialogCodeHookInvocationSpecification}
 */
export interface LexBotPostDialogCodeHookInvocationSpecification {
  SuccessResponse?: LexBotResponseSpecification;
  FailureConditional?: LexBotConditionalSpecification;
  TimeoutNextStep?: LexBotDialogState;
  SuccessConditional?: LexBotConditionalSpecification;
  TimeoutResponse?: LexBotResponseSpecification;
  SuccessNextStep?: LexBotDialogState;
  FailureResponse?: LexBotResponseSpecification;
  FailureNextStep?: LexBotDialogState;
  TimeoutConditional?: LexBotConditionalSpecification;
}
/**
 * Type definition for AWS::Lex::Bot.PostFulfillmentStatusSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-postfulfillmentstatusspecification.html | AWS::Lex::Bot.PostFulfillmentStatusSpecification}
 */
export interface LexBotPostFulfillmentStatusSpecification {
  SuccessResponse?: LexBotResponseSpecification;
  FailureConditional?: LexBotConditionalSpecification;
  TimeoutNextStep?: LexBotDialogState;
  SuccessConditional?: LexBotConditionalSpecification;
  TimeoutResponse?: LexBotResponseSpecification;
  SuccessNextStep?: LexBotDialogState;
  FailureResponse?: LexBotResponseSpecification;
  FailureNextStep?: LexBotDialogState;
  TimeoutConditional?: LexBotConditionalSpecification;
}
/**
 * Type definition for AWS::Lex::Bot.PromptAttemptSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-promptattemptspecification.html | AWS::Lex::Bot.PromptAttemptSpecification}
 */
export interface LexBotPromptAttemptSpecification {
  TextInputSpecification?: LexBotTextInputSpecification;
  AllowInterrupt?: boolean;
  AllowedInputTypes: LexBotAllowedInputTypes;
  AudioAndDTMFInputSpecification?: LexBotAudioAndDTMFInputSpecification;
}
/**
 * Type definition for AWS::Lex::Bot.PromptSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-promptspecification.html | AWS::Lex::Bot.PromptSpecification}
 */
export interface LexBotPromptSpecification {
  MaxRetries: number;
  MessageGroupsList: any[];
  PromptAttemptsSpecification?: Record<string, any>;
  AllowInterrupt?: boolean;
  MessageSelectionStrategy?: string;
}
/**
 * Type definition for AWS::Lex::Bot.ResponseSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-responsespecification.html | AWS::Lex::Bot.ResponseSpecification}
 */
export interface LexBotResponseSpecification {
  MessageGroupsList: any[];
  AllowInterrupt?: boolean;
}
/**
 * Type definition for AWS::Lex::Bot.S3BucketLogDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-s3bucketlogdestination.html | AWS::Lex::Bot.S3BucketLogDestination}
 */
export interface LexBotS3BucketLogDestination {
  KmsKeyArn?: string;
  LogPrefix: string;
  S3BucketArn: string;
}
/**
 * Type definition for AWS::Lex::Bot.S3Location
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-s3location.html | AWS::Lex::Bot.S3Location}
 */
export interface LexBotS3Location {
  S3ObjectVersion?: string;
  S3Bucket: string;
  S3ObjectKey: string;
}
/**
 * Type definition for AWS::Lex::Bot.SSMLMessage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-ssmlmessage.html | AWS::Lex::Bot.SSMLMessage}
 */
export interface LexBotSSMLMessage {
  Value: string;
}
/**
 * Type definition for AWS::Lex::Bot.SampleUtterance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-sampleutterance.html | AWS::Lex::Bot.SampleUtterance}
 */
export interface LexBotSampleUtterance {
  Utterance: string;
}
/**
 * Type definition for AWS::Lex::Bot.SampleValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-samplevalue.html | AWS::Lex::Bot.SampleValue}
 */
export interface LexBotSampleValue {
  Value: string;
}
/**
 * Type definition for AWS::Lex::Bot.SentimentAnalysisSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-sentimentanalysissettings.html | AWS::Lex::Bot.SentimentAnalysisSettings}
 */
export interface LexBotSentimentAnalysisSettings {
  DetectSentiment: boolean;
}
/**
 * Type definition for AWS::Lex::Bot.SessionAttribute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-sessionattribute.html | AWS::Lex::Bot.SessionAttribute}
 */
export interface LexBotSessionAttribute {
  Value?: string;
  Key: string;
}
/**
 * Type definition for AWS::Lex::Bot.Slot
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slot.html | AWS::Lex::Bot.Slot}
 */
export interface LexBotSlot {
  Description?: string;
  SlotTypeName: string;
  ValueElicitationSetting: LexBotSlotValueElicitationSetting;
  ObfuscationSetting?: LexBotObfuscationSetting;
  Name: string;
  MultipleValuesSetting?: LexBotMultipleValuesSetting;
}
/**
 * Type definition for AWS::Lex::Bot.SlotCaptureSetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotcapturesetting.html | AWS::Lex::Bot.SlotCaptureSetting}
 */
export interface LexBotSlotCaptureSetting {
  CaptureConditional?: LexBotConditionalSpecification;
  FailureConditional?: LexBotConditionalSpecification;
  CaptureResponse?: LexBotResponseSpecification;
  CaptureNextStep?: LexBotDialogState;
  FailureResponse?: LexBotResponseSpecification;
  CodeHook?: LexBotDialogCodeHookInvocationSetting;
  FailureNextStep?: LexBotDialogState;
  ElicitationCodeHook?: LexBotElicitationCodeHookInvocationSetting;
}
/**
 * Type definition for AWS::Lex::Bot.SlotDefaultValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotdefaultvalue.html | AWS::Lex::Bot.SlotDefaultValue}
 */
export interface LexBotSlotDefaultValue {
  DefaultValue: string;
}
/**
 * Type definition for AWS::Lex::Bot.SlotDefaultValueSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotdefaultvaluespecification.html | AWS::Lex::Bot.SlotDefaultValueSpecification}
 */
export interface LexBotSlotDefaultValueSpecification {
  DefaultValueList: any[];
}
/**
 * Type definition for AWS::Lex::Bot.SlotPriority
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotpriority.html | AWS::Lex::Bot.SlotPriority}
 */
export interface LexBotSlotPriority {
  Priority: number;
  SlotName: string;
}
/**
 * Type definition for AWS::Lex::Bot.SlotType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slottype.html | AWS::Lex::Bot.SlotType}
 */
export interface LexBotSlotType {
  SlotTypeValues?: any[];
  Description?: string;
  ParentSlotTypeSignature?: string;
  ValueSelectionSetting?: LexBotSlotValueSelectionSetting;
  ExternalSourceSetting?: LexBotExternalSourceSetting;
  Name: string;
}
/**
 * Type definition for AWS::Lex::Bot.SlotTypeValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slottypevalue.html | AWS::Lex::Bot.SlotTypeValue}
 */
export interface LexBotSlotTypeValue {
  Synonyms?: any[];
  SampleValue: LexBotSampleValue;
}
/**
 * Type definition for AWS::Lex::Bot.SlotValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalue.html | AWS::Lex::Bot.SlotValue}
 */
export interface LexBotSlotValue {
  InterpretedValue?: string;
}
/**
 * Type definition for AWS::Lex::Bot.SlotValueElicitationSetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueelicitationsetting.html | AWS::Lex::Bot.SlotValueElicitationSetting}
 */
export interface LexBotSlotValueElicitationSetting {
  PromptSpecification?: LexBotPromptSpecification;
  WaitAndContinueSpecification?: LexBotWaitAndContinueSpecification;
  SlotConstraint: string;
  SlotCaptureSetting?: LexBotSlotCaptureSetting;
  SampleUtterances?: any[];
  DefaultValueSpecification?: LexBotSlotDefaultValueSpecification;
}
/**
 * Type definition for AWS::Lex::Bot.SlotValueOverride
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueoverride.html | AWS::Lex::Bot.SlotValueOverride}
 */
export interface LexBotSlotValueOverride {
  Shape?: string;
  Value?: LexBotSlotValue;
  Values?: any[];
}
/**
 * Type definition for AWS::Lex::Bot.SlotValueOverrideMap
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueoverridemap.html | AWS::Lex::Bot.SlotValueOverrideMap}
 */
export interface LexBotSlotValueOverrideMap {
  SlotName?: string;
  SlotValueOverride?: LexBotSlotValueOverride;
}
/**
 * Type definition for AWS::Lex::Bot.SlotValueRegexFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueregexfilter.html | AWS::Lex::Bot.SlotValueRegexFilter}
 */
export interface LexBotSlotValueRegexFilter {
  Pattern: string;
}
/**
 * Type definition for AWS::Lex::Bot.SlotValueSelectionSetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueselectionsetting.html | AWS::Lex::Bot.SlotValueSelectionSetting}
 */
export interface LexBotSlotValueSelectionSetting {
  AdvancedRecognitionSetting?: LexBotAdvancedRecognitionSetting;
  RegexFilter?: LexBotSlotValueRegexFilter;
  ResolutionStrategy: string;
}
/**
 * Type definition for AWS::Lex::Bot.StillWaitingResponseSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-stillwaitingresponsespecification.html | AWS::Lex::Bot.StillWaitingResponseSpecification}
 */
export interface LexBotStillWaitingResponseSpecification {
  MessageGroupsList: any[];
  TimeoutInSeconds: number;
  AllowInterrupt?: boolean;
  FrequencyInSeconds: number;
}
/**
 * Type definition for AWS::Lex::Bot.TestBotAliasSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-testbotaliassettings.html | AWS::Lex::Bot.TestBotAliasSettings}
 */
export interface LexBotTestBotAliasSettings {
  Description?: string;
  BotAliasLocaleSettings?: any[];
  ConversationLogSettings?: LexBotConversationLogSettings;
  SentimentAnalysisSettings?: LexBotSentimentAnalysisSettings;
}
/**
 * Type definition for AWS::Lex::Bot.TextInputSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-textinputspecification.html | AWS::Lex::Bot.TextInputSpecification}
 */
export interface LexBotTextInputSpecification {
  StartTimeoutMs: number;
}
/**
 * Type definition for AWS::Lex::Bot.TextLogDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-textlogdestination.html | AWS::Lex::Bot.TextLogDestination}
 */
export interface LexBotTextLogDestination {
  CloudWatch: LexBotCloudWatchLogGroupLogDestination;
}
/**
 * Type definition for AWS::Lex::Bot.TextLogSetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-textlogsetting.html | AWS::Lex::Bot.TextLogSetting}
 */
export interface LexBotTextLogSetting {
  Destination: LexBotTextLogDestination;
  Enabled: boolean;
}
/**
 * Type definition for AWS::Lex::Bot.VoiceSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-voicesettings.html | AWS::Lex::Bot.VoiceSettings}
 */
export interface LexBotVoiceSettings {
  VoiceId: string;
  Engine?: string;
}
/**
 * Type definition for AWS::Lex::Bot.WaitAndContinueSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-waitandcontinuespecification.html | AWS::Lex::Bot.WaitAndContinueSpecification}
 */
export interface LexBotWaitAndContinueSpecification {
  WaitingResponse: LexBotResponseSpecification;
  StillWaitingResponse?: LexBotStillWaitingResponseSpecification;
  IsActive?: boolean;
  ContinueResponse: LexBotResponseSpecification;
}
/**
 * Type definition for AWS::Lex::BotAlias.AudioLogDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-audiologdestination.html | AWS::Lex::BotAlias.AudioLogDestination}
 */
export interface LexBotAliasAudioLogDestination {
  S3Bucket: LexBotAliasS3BucketLogDestination;
}
/**
 * Type definition for AWS::Lex::BotAlias.AudioLogSetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-audiologsetting.html | AWS::Lex::BotAlias.AudioLogSetting}
 */
export interface LexBotAliasAudioLogSetting {
  Destination: LexBotAliasAudioLogDestination;
  Enabled: boolean;
}
/**
 * Type definition for AWS::Lex::BotAlias.BotAliasLocaleSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-botaliaslocalesettings.html | AWS::Lex::BotAlias.BotAliasLocaleSettings}
 */
export interface LexBotAliasBotAliasLocaleSettings {
  CodeHookSpecification?: LexBotAliasCodeHookSpecification;
  Enabled: boolean;
}
/**
 * Type definition for AWS::Lex::BotAlias.BotAliasLocaleSettingsItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-botaliaslocalesettingsitem.html | AWS::Lex::BotAlias.BotAliasLocaleSettingsItem}
 */
export interface LexBotAliasBotAliasLocaleSettingsItem {
  LocaleId: string;
  BotAliasLocaleSetting: LexBotAliasBotAliasLocaleSettings;
}
/**
 * Type definition for AWS::Lex::BotAlias.CloudWatchLogGroupLogDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-cloudwatchloggrouplogdestination.html | AWS::Lex::BotAlias.CloudWatchLogGroupLogDestination}
 */
export interface LexBotAliasCloudWatchLogGroupLogDestination {
  CloudWatchLogGroupArn: string;
  LogPrefix: string;
}
/**
 * Type definition for AWS::Lex::BotAlias.CodeHookSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-codehookspecification.html | AWS::Lex::BotAlias.CodeHookSpecification}
 */
export interface LexBotAliasCodeHookSpecification {
  LambdaCodeHook: LexBotAliasLambdaCodeHook;
}
/**
 * Type definition for AWS::Lex::BotAlias.ConversationLogSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-conversationlogsettings.html | AWS::Lex::BotAlias.ConversationLogSettings}
 */
export interface LexBotAliasConversationLogSettings {
  TextLogSettings?: any[];
  AudioLogSettings?: any[];
}
/**
 * Type definition for AWS::Lex::BotAlias.LambdaCodeHook
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-lambdacodehook.html | AWS::Lex::BotAlias.LambdaCodeHook}
 */
export interface LexBotAliasLambdaCodeHook {
  LambdaArn: string;
  CodeHookInterfaceVersion: string;
}
/**
 * Type definition for AWS::Lex::BotAlias.S3BucketLogDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-s3bucketlogdestination.html | AWS::Lex::BotAlias.S3BucketLogDestination}
 */
export interface LexBotAliasS3BucketLogDestination {
  KmsKeyArn?: string;
  LogPrefix: string;
  S3BucketArn: string;
}
/**
 * Type definition for AWS::Lex::BotAlias.SentimentAnalysisSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-sentimentanalysissettings.html | AWS::Lex::BotAlias.SentimentAnalysisSettings}
 */
export interface LexBotAliasSentimentAnalysisSettings {
  DetectSentiment: boolean;
}
/**
 * Type definition for AWS::Lex::BotAlias.TextLogDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-textlogdestination.html | AWS::Lex::BotAlias.TextLogDestination}
 */
export interface LexBotAliasTextLogDestination {
  CloudWatch: LexBotAliasCloudWatchLogGroupLogDestination;
}
/**
 * Type definition for AWS::Lex::BotAlias.TextLogSetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-textlogsetting.html | AWS::Lex::BotAlias.TextLogSetting}
 */
export interface LexBotAliasTextLogSetting {
  Destination: LexBotAliasTextLogDestination;
  Enabled: boolean;
}
/**
 * Type definition for AWS::Lex::BotVersion.BotVersionLocaleDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botversion-botversionlocaledetails.html | AWS::Lex::BotVersion.BotVersionLocaleDetails}
 */
export interface LexBotVersionBotVersionLocaleDetails {
  SourceBotVersion: string;
}
/**
 * Type definition for AWS::Lex::BotVersion.BotVersionLocaleSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botversion-botversionlocalespecification.html | AWS::Lex::BotVersion.BotVersionLocaleSpecification}
 */
export interface LexBotVersionBotVersionLocaleSpecification {
  LocaleId: string;
  BotVersionLocaleDetails: LexBotVersionBotVersionLocaleDetails;
}
/**
 * Type definition for AWS::Lex::Bot
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html | AWS::Lex::Bot}
 */
export interface LexBotProps {
  Description?: string;
  AutoBuildBotLocales?: boolean;
  BotLocales?: any[];
  IdleSessionTTLInSeconds: number;
  BotFileS3Location?: LexBotS3Location;
  TestBotAliasSettings?: LexBotTestBotAliasSettings;
  RoleArn: string;
  Name: string;
  BotTags?: any[];
  TestBotAliasTags?: any[];
  DataPrivacy: LexBotDataPrivacy;
}
/**
 * Attributes type definition for AWS::Lex::Bot
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html | AWS::Lex::Bot}
 */
export interface LexBotAttribs {
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::Lex::Bot
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html | AWS::Lex::Bot}
 */
export class LexBot extends ResourceBase<
  "AWS::Lex::Bot",
  LexBotProps,
  LexBotAttribs
> {
  public static readonly Type = "AWS::Lex::Bot";
  public static readonly AttributeNames: readonly (keyof LexBotAttribs)[] = [
    "Id",
    "Arn",
  ];
  constructor(
    logicalId: string,
    properties: LexBotProps,
    options?: ResourceOptions,
  ) {
    super(LexBot.Type, LexBot.AttributeNames, logicalId, properties, options);
  }
}
/**
 * Type definition for AWS::Lex::BotAlias
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html | AWS::Lex::BotAlias}
 */
export interface LexBotAliasProps {
  BotVersion?: string;
  Description?: string;
  BotId: string;
  BotAliasLocaleSettings?: any[];
  ConversationLogSettings?: LexBotAliasConversationLogSettings;
  SentimentAnalysisSettings?: LexBotAliasSentimentAnalysisSettings;
  BotAliasName: string;
  BotAliasTags?: any[];
}
/**
 * Attributes type definition for AWS::Lex::BotAlias
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html | AWS::Lex::BotAlias}
 */
export interface LexBotAliasAttribs {
  BotAliasStatus?: string;
  Arn?: string;
  BotAliasId?: string;
}
/**
 * Resource class for AWS::Lex::BotAlias
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html | AWS::Lex::BotAlias}
 */
export class LexBotAlias extends ResourceBase<
  "AWS::Lex::BotAlias",
  LexBotAliasProps,
  LexBotAliasAttribs
> {
  public static readonly Type = "AWS::Lex::BotAlias";
  public static readonly AttributeNames: readonly (keyof LexBotAliasAttribs)[] =
    ["BotAliasStatus", "Arn", "BotAliasId"];
  constructor(
    logicalId: string,
    properties: LexBotAliasProps,
    options?: ResourceOptions,
  ) {
    super(
      LexBotAlias.Type,
      LexBotAlias.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Lex::BotVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botversion.html | AWS::Lex::BotVersion}
 */
export interface LexBotVersionProps {
  Description?: string;
  BotId: string;
  BotVersionLocaleSpecification: any[];
}
/**
 * Attributes type definition for AWS::Lex::BotVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botversion.html | AWS::Lex::BotVersion}
 */
export interface LexBotVersionAttribs {
  BotVersion?: string;
}
/**
 * Resource class for AWS::Lex::BotVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botversion.html | AWS::Lex::BotVersion}
 */
export class LexBotVersion extends ResourceBase<
  "AWS::Lex::BotVersion",
  LexBotVersionProps,
  LexBotVersionAttribs
> {
  public static readonly Type = "AWS::Lex::BotVersion";
  public static readonly AttributeNames: readonly (keyof LexBotVersionAttribs)[] =
    ["BotVersion"];
  constructor(
    logicalId: string,
    properties: LexBotVersionProps,
    options?: ResourceOptions,
  ) {
    super(
      LexBotVersion.Type,
      LexBotVersion.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Lex::ResourcePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-resourcepolicy.html | AWS::Lex::ResourcePolicy}
 */
export interface LexResourcePolicyProps {
  Policy: object;
  ResourceArn: string;
}
/**
 * Attributes type definition for AWS::Lex::ResourcePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-resourcepolicy.html | AWS::Lex::ResourcePolicy}
 */
export interface LexResourcePolicyAttribs {
  Id?: string;
  RevisionId?: string;
}
/**
 * Resource class for AWS::Lex::ResourcePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-resourcepolicy.html | AWS::Lex::ResourcePolicy}
 */
export class LexResourcePolicy extends ResourceBase<
  "AWS::Lex::ResourcePolicy",
  LexResourcePolicyProps,
  LexResourcePolicyAttribs
> {
  public static readonly Type = "AWS::Lex::ResourcePolicy";
  public static readonly AttributeNames: readonly (keyof LexResourcePolicyAttribs)[] =
    ["Id", "RevisionId"];
  constructor(
    logicalId: string,
    properties: LexResourcePolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      LexResourcePolicy.Type,
      LexResourcePolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
