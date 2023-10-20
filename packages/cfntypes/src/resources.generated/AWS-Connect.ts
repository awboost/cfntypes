import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Connect::EvaluationForm.EvaluationFormBaseItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformbaseitem.html | AWS::Connect::EvaluationForm.EvaluationFormBaseItem}
 */
export interface ConnectEvaluationFormEvaluationFormBaseItem {
  Section: ConnectEvaluationFormEvaluationFormSection;
}
/**
 * Type definition for AWS::Connect::EvaluationForm.EvaluationFormItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformitem.html | AWS::Connect::EvaluationForm.EvaluationFormItem}
 */
export interface ConnectEvaluationFormEvaluationFormItem {
  Question?: ConnectEvaluationFormEvaluationFormQuestion;
  Section?: ConnectEvaluationFormEvaluationFormSection;
}
/**
 * Type definition for AWS::Connect::EvaluationForm.EvaluationFormNumericQuestionAutomation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformnumericquestionautomation.html | AWS::Connect::EvaluationForm.EvaluationFormNumericQuestionAutomation}
 */
export interface ConnectEvaluationFormEvaluationFormNumericQuestionAutomation {
  PropertyValue: ConnectEvaluationFormNumericQuestionPropertyValueAutomation;
}
/**
 * Type definition for AWS::Connect::EvaluationForm.EvaluationFormNumericQuestionOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformnumericquestionoption.html | AWS::Connect::EvaluationForm.EvaluationFormNumericQuestionOption}
 */
export interface ConnectEvaluationFormEvaluationFormNumericQuestionOption {
  Score?: number;
  MinValue: number;
  MaxValue: number;
  AutomaticFail?: boolean;
}
/**
 * Type definition for AWS::Connect::EvaluationForm.EvaluationFormNumericQuestionProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformnumericquestionproperties.html | AWS::Connect::EvaluationForm.EvaluationFormNumericQuestionProperties}
 */
export interface ConnectEvaluationFormEvaluationFormNumericQuestionProperties {
  Options?: any[];
  Automation?: ConnectEvaluationFormEvaluationFormNumericQuestionAutomation;
  MinValue: number;
  MaxValue: number;
}
/**
 * Type definition for AWS::Connect::EvaluationForm.EvaluationFormQuestion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformquestion.html | AWS::Connect::EvaluationForm.EvaluationFormQuestion}
 */
export interface ConnectEvaluationFormEvaluationFormQuestion {
  NotApplicableEnabled?: boolean;
  Title: string;
  QuestionType: string;
  Instructions?: string;
  RefId: string;
  QuestionTypeProperties?: ConnectEvaluationFormEvaluationFormQuestionTypeProperties;
  Weight?: number;
}
/**
 * Type definition for AWS::Connect::EvaluationForm.EvaluationFormQuestionTypeProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformquestiontypeproperties.html | AWS::Connect::EvaluationForm.EvaluationFormQuestionTypeProperties}
 */
export interface ConnectEvaluationFormEvaluationFormQuestionTypeProperties {
  Numeric?: ConnectEvaluationFormEvaluationFormNumericQuestionProperties;
  SingleSelect?: ConnectEvaluationFormEvaluationFormSingleSelectQuestionProperties;
}
/**
 * Type definition for AWS::Connect::EvaluationForm.EvaluationFormSection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformsection.html | AWS::Connect::EvaluationForm.EvaluationFormSection}
 */
export interface ConnectEvaluationFormEvaluationFormSection {
  Title: string;
  Instructions?: string;
  Items?: any[];
  RefId: string;
  Weight?: number;
}
/**
 * Type definition for AWS::Connect::EvaluationForm.EvaluationFormSingleSelectQuestionAutomation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformsingleselectquestionautomation.html | AWS::Connect::EvaluationForm.EvaluationFormSingleSelectQuestionAutomation}
 */
export interface ConnectEvaluationFormEvaluationFormSingleSelectQuestionAutomation {
  Options: any[];
  DefaultOptionRefId?: string;
}
/**
 * Type definition for AWS::Connect::EvaluationForm.EvaluationFormSingleSelectQuestionAutomationOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformsingleselectquestionautomationoption.html | AWS::Connect::EvaluationForm.EvaluationFormSingleSelectQuestionAutomationOption}
 */
export interface ConnectEvaluationFormEvaluationFormSingleSelectQuestionAutomationOption {
  RuleCategory: ConnectEvaluationFormSingleSelectQuestionRuleCategoryAutomation;
}
/**
 * Type definition for AWS::Connect::EvaluationForm.EvaluationFormSingleSelectQuestionOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformsingleselectquestionoption.html | AWS::Connect::EvaluationForm.EvaluationFormSingleSelectQuestionOption}
 */
export interface ConnectEvaluationFormEvaluationFormSingleSelectQuestionOption {
  Score?: number;
  Text: string;
  RefId: string;
  AutomaticFail?: boolean;
}
/**
 * Type definition for AWS::Connect::EvaluationForm.EvaluationFormSingleSelectQuestionProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformsingleselectquestionproperties.html | AWS::Connect::EvaluationForm.EvaluationFormSingleSelectQuestionProperties}
 */
export interface ConnectEvaluationFormEvaluationFormSingleSelectQuestionProperties {
  DisplayAs?: string;
  Options: any[];
  Automation?: ConnectEvaluationFormEvaluationFormSingleSelectQuestionAutomation;
}
/**
 * Type definition for AWS::Connect::EvaluationForm.NumericQuestionPropertyValueAutomation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-numericquestionpropertyvalueautomation.html | AWS::Connect::EvaluationForm.NumericQuestionPropertyValueAutomation}
 */
export interface ConnectEvaluationFormNumericQuestionPropertyValueAutomation {
  Label: string;
}
/**
 * Type definition for AWS::Connect::EvaluationForm.ScoringStrategy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-scoringstrategy.html | AWS::Connect::EvaluationForm.ScoringStrategy}
 */
export interface ConnectEvaluationFormScoringStrategy {
  Status: string;
  Mode: string;
}
/**
 * Type definition for AWS::Connect::EvaluationForm.SingleSelectQuestionRuleCategoryAutomation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-singleselectquestionrulecategoryautomation.html | AWS::Connect::EvaluationForm.SingleSelectQuestionRuleCategoryAutomation}
 */
export interface ConnectEvaluationFormSingleSelectQuestionRuleCategoryAutomation {
  Condition: string;
  Category: string;
  OptionRefId: string;
}
/**
 * Type definition for AWS::Connect::HoursOfOperation.HoursOfOperationConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-hoursofoperation-hoursofoperationconfig.html | AWS::Connect::HoursOfOperation.HoursOfOperationConfig}
 */
export interface ConnectHoursOfOperationHoursOfOperationConfig {
  EndTime: ConnectHoursOfOperationHoursOfOperationTimeSlice;
  StartTime: ConnectHoursOfOperationHoursOfOperationTimeSlice;
  Day: string;
}
/**
 * Type definition for AWS::Connect::HoursOfOperation.HoursOfOperationTimeSlice
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-hoursofoperation-hoursofoperationtimeslice.html | AWS::Connect::HoursOfOperation.HoursOfOperationTimeSlice}
 */
export interface ConnectHoursOfOperationHoursOfOperationTimeSlice {
  Hours: number;
  Minutes: number;
}
/**
 * Type definition for AWS::Connect::Instance.Attributes
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instance-attributes.html | AWS::Connect::Instance.Attributes}
 */
export interface ConnectInstanceAttributes {
  InboundCalls: boolean;
  UseCustomTTSVoices?: boolean;
  OutboundCalls: boolean;
  EarlyMedia?: boolean;
  ContactflowLogs?: boolean;
  ContactLens?: boolean;
  AutoResolveBestVoices?: boolean;
}
/**
 * Type definition for AWS::Connect::InstanceStorageConfig.EncryptionConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instancestorageconfig-encryptionconfig.html | AWS::Connect::InstanceStorageConfig.EncryptionConfig}
 */
export interface ConnectInstanceStorageConfigEncryptionConfig {
  EncryptionType: string;
  KeyId: string;
}
/**
 * Type definition for AWS::Connect::InstanceStorageConfig.KinesisFirehoseConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instancestorageconfig-kinesisfirehoseconfig.html | AWS::Connect::InstanceStorageConfig.KinesisFirehoseConfig}
 */
export interface ConnectInstanceStorageConfigKinesisFirehoseConfig {
  FirehoseArn: string;
}
/**
 * Type definition for AWS::Connect::InstanceStorageConfig.KinesisStreamConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instancestorageconfig-kinesisstreamconfig.html | AWS::Connect::InstanceStorageConfig.KinesisStreamConfig}
 */
export interface ConnectInstanceStorageConfigKinesisStreamConfig {
  StreamArn: string;
}
/**
 * Type definition for AWS::Connect::InstanceStorageConfig.KinesisVideoStreamConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instancestorageconfig-kinesisvideostreamconfig.html | AWS::Connect::InstanceStorageConfig.KinesisVideoStreamConfig}
 */
export interface ConnectInstanceStorageConfigKinesisVideoStreamConfig {
  Prefix: string;
  RetentionPeriodHours: number;
  EncryptionConfig?: ConnectInstanceStorageConfigEncryptionConfig;
}
/**
 * Type definition for AWS::Connect::InstanceStorageConfig.S3Config
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instancestorageconfig-s3config.html | AWS::Connect::InstanceStorageConfig.S3Config}
 */
export interface ConnectInstanceStorageConfigS3Config {
  BucketName: string;
  BucketPrefix: string;
  EncryptionConfig?: ConnectInstanceStorageConfigEncryptionConfig;
}
/**
 * Type definition for AWS::Connect::Queue.OutboundCallerConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-queue-outboundcallerconfig.html | AWS::Connect::Queue.OutboundCallerConfig}
 */
export interface ConnectQueueOutboundCallerConfig {
  OutboundCallerIdNumberArn?: string;
  OutboundFlowArn?: string;
  OutboundCallerIdName?: string;
}
/**
 * Type definition for AWS::Connect::QuickConnect.PhoneNumberQuickConnectConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-quickconnect-phonenumberquickconnectconfig.html | AWS::Connect::QuickConnect.PhoneNumberQuickConnectConfig}
 */
export interface ConnectQuickConnectPhoneNumberQuickConnectConfig {
  PhoneNumber: string;
}
/**
 * Type definition for AWS::Connect::QuickConnect.QueueQuickConnectConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-quickconnect-queuequickconnectconfig.html | AWS::Connect::QuickConnect.QueueQuickConnectConfig}
 */
export interface ConnectQuickConnectQueueQuickConnectConfig {
  ContactFlowArn: string;
  QueueArn: string;
}
/**
 * Type definition for AWS::Connect::QuickConnect.QuickConnectConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-quickconnect-quickconnectconfig.html | AWS::Connect::QuickConnect.QuickConnectConfig}
 */
export interface ConnectQuickConnectQuickConnectConfig {
  QueueConfig?: ConnectQuickConnectQueueQuickConnectConfig;
  PhoneConfig?: ConnectQuickConnectPhoneNumberQuickConnectConfig;
  QuickConnectType: string;
  UserConfig?: ConnectQuickConnectUserQuickConnectConfig;
}
/**
 * Type definition for AWS::Connect::QuickConnect.UserQuickConnectConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-quickconnect-userquickconnectconfig.html | AWS::Connect::QuickConnect.UserQuickConnectConfig}
 */
export interface ConnectQuickConnectUserQuickConnectConfig {
  UserArn: string;
  ContactFlowArn: string;
}
/**
 * Type definition for AWS::Connect::RoutingProfile.CrossChannelBehavior
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-routingprofile-crosschannelbehavior.html | AWS::Connect::RoutingProfile.CrossChannelBehavior}
 */
export interface ConnectRoutingProfileCrossChannelBehavior {
  BehaviorType: string;
}
/**
 * Type definition for AWS::Connect::RoutingProfile.MediaConcurrency
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-routingprofile-mediaconcurrency.html | AWS::Connect::RoutingProfile.MediaConcurrency}
 */
export interface ConnectRoutingProfileMediaConcurrency {
  Concurrency: number;
  Channel: string;
  CrossChannelBehavior?: ConnectRoutingProfileCrossChannelBehavior;
}
/**
 * Type definition for AWS::Connect::RoutingProfile.RoutingProfileQueueConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-routingprofile-routingprofilequeueconfig.html | AWS::Connect::RoutingProfile.RoutingProfileQueueConfig}
 */
export interface ConnectRoutingProfileRoutingProfileQueueConfig {
  Priority: number;
  QueueReference: ConnectRoutingProfileRoutingProfileQueueReference;
  Delay: number;
}
/**
 * Type definition for AWS::Connect::RoutingProfile.RoutingProfileQueueReference
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-routingprofile-routingprofilequeuereference.html | AWS::Connect::RoutingProfile.RoutingProfileQueueReference}
 */
export interface ConnectRoutingProfileRoutingProfileQueueReference {
  Channel: string;
  QueueArn: string;
}
/**
 * Type definition for AWS::Connect::Rule.Actions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-actions.html | AWS::Connect::Rule.Actions}
 */
export interface ConnectRuleActions {
  EventBridgeActions?: any[];
  AssignContactCategoryActions?: any[];
  TaskActions?: any[];
  SendNotificationActions?: any[];
}
/**
 * Type definition for AWS::Connect::Rule.EventBridgeAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-eventbridgeaction.html | AWS::Connect::Rule.EventBridgeAction}
 */
export interface ConnectRuleEventBridgeAction {
  Name: string;
}
/**
 * Type definition for AWS::Connect::Rule.NotificationRecipientType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-notificationrecipienttype.html | AWS::Connect::Rule.NotificationRecipientType}
 */
export interface ConnectRuleNotificationRecipientType {
  UserTags?: Record<string, any>;
  UserArns?: any[];
}
/**
 * Type definition for AWS::Connect::Rule.Reference
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-reference.html | AWS::Connect::Rule.Reference}
 */
export interface ConnectRuleReference {
  Type: string;
  Value: string;
}
/**
 * Type definition for AWS::Connect::Rule.RuleTriggerEventSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-ruletriggereventsource.html | AWS::Connect::Rule.RuleTriggerEventSource}
 */
export interface ConnectRuleRuleTriggerEventSource {
  IntegrationAssociationArn?: string;
  EventSourceName: string;
}
/**
 * Type definition for AWS::Connect::Rule.SendNotificationAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-sendnotificationaction.html | AWS::Connect::Rule.SendNotificationAction}
 */
export interface ConnectRuleSendNotificationAction {
  DeliveryMethod: string;
  ContentType: string;
  Content: string;
  Recipient: ConnectRuleNotificationRecipientType;
  Subject?: string;
}
/**
 * Type definition for AWS::Connect::Rule.TaskAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-taskaction.html | AWS::Connect::Rule.TaskAction}
 */
export interface ConnectRuleTaskAction {
  Description?: string;
  References?: Record<string, any>;
  ContactFlowArn: string;
  Name: string;
}
/**
 * Type definition for AWS::Connect::TaskTemplate.Constraints
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-constraints.html | AWS::Connect::TaskTemplate.Constraints}
 */
export interface ConnectTaskTemplateConstraints {
  ReadOnlyFields?: any[];
  InvisibleFields?: any[];
  RequiredFields?: any[];
}
/**
 * Type definition for AWS::Connect::TaskTemplate.DefaultFieldValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-defaultfieldvalue.html | AWS::Connect::TaskTemplate.DefaultFieldValue}
 */
export interface ConnectTaskTemplateDefaultFieldValue {
  DefaultValue: string;
  Id: ConnectTaskTemplateFieldIdentifier;
}
/**
 * Type definition for AWS::Connect::TaskTemplate.Field
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-field.html | AWS::Connect::TaskTemplate.Field}
 */
export interface ConnectTaskTemplateField {
  Type: string;
  Description?: string;
  Id: ConnectTaskTemplateFieldIdentifier;
  SingleSelectOptions?: any[];
}
/**
 * Type definition for AWS::Connect::TaskTemplate.FieldIdentifier
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-fieldidentifier.html | AWS::Connect::TaskTemplate.FieldIdentifier}
 */
export interface ConnectTaskTemplateFieldIdentifier {
  Name: string;
}
/**
 * Type definition for AWS::Connect::TaskTemplate.InvisibleFieldInfo
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-invisiblefieldinfo.html | AWS::Connect::TaskTemplate.InvisibleFieldInfo}
 */
export interface ConnectTaskTemplateInvisibleFieldInfo {
  Id: ConnectTaskTemplateFieldIdentifier;
}
/**
 * Type definition for AWS::Connect::TaskTemplate.ReadOnlyFieldInfo
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-readonlyfieldinfo.html | AWS::Connect::TaskTemplate.ReadOnlyFieldInfo}
 */
export interface ConnectTaskTemplateReadOnlyFieldInfo {
  Id: ConnectTaskTemplateFieldIdentifier;
}
/**
 * Type definition for AWS::Connect::TaskTemplate.RequiredFieldInfo
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-requiredfieldinfo.html | AWS::Connect::TaskTemplate.RequiredFieldInfo}
 */
export interface ConnectTaskTemplateRequiredFieldInfo {
  Id: ConnectTaskTemplateFieldIdentifier;
}
/**
 * Type definition for AWS::Connect::User.UserIdentityInfo
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-user-useridentityinfo.html | AWS::Connect::User.UserIdentityInfo}
 */
export interface ConnectUserUserIdentityInfo {
  Email?: string;
  FirstName?: string;
  SecondaryEmail?: string;
  LastName?: string;
  Mobile?: string;
}
/**
 * Type definition for AWS::Connect::User.UserPhoneConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-user-userphoneconfig.html | AWS::Connect::User.UserPhoneConfig}
 */
export interface ConnectUserUserPhoneConfig {
  AutoAccept?: boolean;
  PhoneType: string;
  DeskPhoneNumber?: string;
  AfterContactWorkTimeLimit?: number;
}
/**
 * Type definition for AWS::Connect::ApprovedOrigin
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-approvedorigin.html | AWS::Connect::ApprovedOrigin}
 */
export interface ConnectApprovedOriginProps {
  Origin: string;
  InstanceId: string;
}
/**
 * Resource class for AWS::Connect::ApprovedOrigin
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-approvedorigin.html | AWS::Connect::ApprovedOrigin}
 */
export class ConnectApprovedOrigin extends ResourceBase<
  "AWS::Connect::ApprovedOrigin",
  ConnectApprovedOriginProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Connect::ApprovedOrigin";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ConnectApprovedOriginProps,
    options?: ResourceOptions,
  ) {
    super(
      ConnectApprovedOrigin.Type,
      ConnectApprovedOrigin.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Connect::ContactFlow
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflow.html | AWS::Connect::ContactFlow}
 */
export interface ConnectContactFlowProps {
  Type: string;
  Description?: string;
  Content: string;
  State?: string;
  InstanceArn: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::Connect::ContactFlow
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflow.html | AWS::Connect::ContactFlow}
 */
export interface ConnectContactFlowAttribs {
  ContactFlowArn?: string;
}
/**
 * Resource class for AWS::Connect::ContactFlow
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflow.html | AWS::Connect::ContactFlow}
 */
export class ConnectContactFlow extends ResourceBase<
  "AWS::Connect::ContactFlow",
  ConnectContactFlowProps,
  ConnectContactFlowAttribs
> {
  public static readonly Type = "AWS::Connect::ContactFlow";
  public static readonly AttributeNames: readonly (keyof ConnectContactFlowAttribs)[] =
    ["ContactFlowArn"];
  constructor(
    logicalId: string,
    properties: ConnectContactFlowProps,
    options?: ResourceOptions,
  ) {
    super(
      ConnectContactFlow.Type,
      ConnectContactFlow.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Connect::ContactFlowModule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflowmodule.html | AWS::Connect::ContactFlowModule}
 */
export interface ConnectContactFlowModuleProps {
  Description?: string;
  Content: string;
  State?: string;
  InstanceArn: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::Connect::ContactFlowModule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflowmodule.html | AWS::Connect::ContactFlowModule}
 */
export interface ConnectContactFlowModuleAttribs {
  ContactFlowModuleArn?: string;
  Status?: string;
}
/**
 * Resource class for AWS::Connect::ContactFlowModule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflowmodule.html | AWS::Connect::ContactFlowModule}
 */
export class ConnectContactFlowModule extends ResourceBase<
  "AWS::Connect::ContactFlowModule",
  ConnectContactFlowModuleProps,
  ConnectContactFlowModuleAttribs
> {
  public static readonly Type = "AWS::Connect::ContactFlowModule";
  public static readonly AttributeNames: readonly (keyof ConnectContactFlowModuleAttribs)[] =
    ["ContactFlowModuleArn", "Status"];
  constructor(
    logicalId: string,
    properties: ConnectContactFlowModuleProps,
    options?: ResourceOptions,
  ) {
    super(
      ConnectContactFlowModule.Type,
      ConnectContactFlowModule.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Connect::EvaluationForm
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html | AWS::Connect::EvaluationForm}
 */
export interface ConnectEvaluationFormProps {
  ScoringStrategy?: ConnectEvaluationFormScoringStrategy;
  Status: string;
  Description?: string;
  InstanceArn: string;
  Title: string;
  Items: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::Connect::EvaluationForm
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html | AWS::Connect::EvaluationForm}
 */
export interface ConnectEvaluationFormAttribs {
  EvaluationFormArn?: string;
}
/**
 * Resource class for AWS::Connect::EvaluationForm
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html | AWS::Connect::EvaluationForm}
 */
export class ConnectEvaluationForm extends ResourceBase<
  "AWS::Connect::EvaluationForm",
  ConnectEvaluationFormProps,
  ConnectEvaluationFormAttribs
> {
  public static readonly Type = "AWS::Connect::EvaluationForm";
  public static readonly AttributeNames: readonly (keyof ConnectEvaluationFormAttribs)[] =
    ["EvaluationFormArn"];
  constructor(
    logicalId: string,
    properties: ConnectEvaluationFormProps,
    options?: ResourceOptions,
  ) {
    super(
      ConnectEvaluationForm.Type,
      ConnectEvaluationForm.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Connect::HoursOfOperation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html | AWS::Connect::HoursOfOperation}
 */
export interface ConnectHoursOfOperationProps {
  TimeZone: string;
  Description?: string;
  Config: any[];
  InstanceArn: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::Connect::HoursOfOperation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html | AWS::Connect::HoursOfOperation}
 */
export interface ConnectHoursOfOperationAttribs {
  HoursOfOperationArn?: string;
}
/**
 * Resource class for AWS::Connect::HoursOfOperation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html | AWS::Connect::HoursOfOperation}
 */
export class ConnectHoursOfOperation extends ResourceBase<
  "AWS::Connect::HoursOfOperation",
  ConnectHoursOfOperationProps,
  ConnectHoursOfOperationAttribs
> {
  public static readonly Type = "AWS::Connect::HoursOfOperation";
  public static readonly AttributeNames: readonly (keyof ConnectHoursOfOperationAttribs)[] =
    ["HoursOfOperationArn"];
  constructor(
    logicalId: string,
    properties: ConnectHoursOfOperationProps,
    options?: ResourceOptions,
  ) {
    super(
      ConnectHoursOfOperation.Type,
      ConnectHoursOfOperation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Connect::Instance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instance.html | AWS::Connect::Instance}
 */
export interface ConnectInstanceProps {
  DirectoryId?: string;
  IdentityManagementType: string;
  InstanceAlias?: string;
  Attributes: ConnectInstanceAttributes;
}
/**
 * Attributes type definition for AWS::Connect::Instance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instance.html | AWS::Connect::Instance}
 */
export interface ConnectInstanceAttribs {
  CreatedTime?: string;
  ServiceRole?: string;
  InstanceStatus?: string;
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::Connect::Instance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instance.html | AWS::Connect::Instance}
 */
export class ConnectInstance extends ResourceBase<
  "AWS::Connect::Instance",
  ConnectInstanceProps,
  ConnectInstanceAttribs
> {
  public static readonly Type = "AWS::Connect::Instance";
  public static readonly AttributeNames: readonly (keyof ConnectInstanceAttribs)[] =
    ["CreatedTime", "ServiceRole", "InstanceStatus", "Id", "Arn"];
  constructor(
    logicalId: string,
    properties: ConnectInstanceProps,
    options?: ResourceOptions,
  ) {
    super(
      ConnectInstance.Type,
      ConnectInstance.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Connect::InstanceStorageConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html | AWS::Connect::InstanceStorageConfig}
 */
export interface ConnectInstanceStorageConfigProps {
  KinesisStreamConfig?: ConnectInstanceStorageConfigKinesisStreamConfig;
  S3Config?: ConnectInstanceStorageConfigS3Config;
  StorageType: string;
  InstanceArn: string;
  ResourceType: string;
  KinesisVideoStreamConfig?: ConnectInstanceStorageConfigKinesisVideoStreamConfig;
  KinesisFirehoseConfig?: ConnectInstanceStorageConfigKinesisFirehoseConfig;
}
/**
 * Attributes type definition for AWS::Connect::InstanceStorageConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html | AWS::Connect::InstanceStorageConfig}
 */
export interface ConnectInstanceStorageConfigAttribs {
  AssociationId?: string;
}
/**
 * Resource class for AWS::Connect::InstanceStorageConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html | AWS::Connect::InstanceStorageConfig}
 */
export class ConnectInstanceStorageConfig extends ResourceBase<
  "AWS::Connect::InstanceStorageConfig",
  ConnectInstanceStorageConfigProps,
  ConnectInstanceStorageConfigAttribs
> {
  public static readonly Type = "AWS::Connect::InstanceStorageConfig";
  public static readonly AttributeNames: readonly (keyof ConnectInstanceStorageConfigAttribs)[] =
    ["AssociationId"];
  constructor(
    logicalId: string,
    properties: ConnectInstanceStorageConfigProps,
    options?: ResourceOptions,
  ) {
    super(
      ConnectInstanceStorageConfig.Type,
      ConnectInstanceStorageConfig.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Connect::IntegrationAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-integrationassociation.html | AWS::Connect::IntegrationAssociation}
 */
export interface ConnectIntegrationAssociationProps {
  IntegrationArn: string;
  InstanceId: string;
  IntegrationType: string;
}
/**
 * Attributes type definition for AWS::Connect::IntegrationAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-integrationassociation.html | AWS::Connect::IntegrationAssociation}
 */
export interface ConnectIntegrationAssociationAttribs {
  IntegrationAssociationId?: string;
}
/**
 * Resource class for AWS::Connect::IntegrationAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-integrationassociation.html | AWS::Connect::IntegrationAssociation}
 */
export class ConnectIntegrationAssociation extends ResourceBase<
  "AWS::Connect::IntegrationAssociation",
  ConnectIntegrationAssociationProps,
  ConnectIntegrationAssociationAttribs
> {
  public static readonly Type = "AWS::Connect::IntegrationAssociation";
  public static readonly AttributeNames: readonly (keyof ConnectIntegrationAssociationAttribs)[] =
    ["IntegrationAssociationId"];
  constructor(
    logicalId: string,
    properties: ConnectIntegrationAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      ConnectIntegrationAssociation.Type,
      ConnectIntegrationAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Connect::PhoneNumber
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-phonenumber.html | AWS::Connect::PhoneNumber}
 */
export interface ConnectPhoneNumberProps {
  Type: string;
  Description?: string;
  TargetArn: string;
  Prefix?: string;
  CountryCode: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::Connect::PhoneNumber
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-phonenumber.html | AWS::Connect::PhoneNumber}
 */
export interface ConnectPhoneNumberAttribs {
  Address?: string;
  PhoneNumberArn?: string;
}
/**
 * Resource class for AWS::Connect::PhoneNumber
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-phonenumber.html | AWS::Connect::PhoneNumber}
 */
export class ConnectPhoneNumber extends ResourceBase<
  "AWS::Connect::PhoneNumber",
  ConnectPhoneNumberProps,
  ConnectPhoneNumberAttribs
> {
  public static readonly Type = "AWS::Connect::PhoneNumber";
  public static readonly AttributeNames: readonly (keyof ConnectPhoneNumberAttribs)[] =
    ["Address", "PhoneNumberArn"];
  constructor(
    logicalId: string,
    properties: ConnectPhoneNumberProps,
    options?: ResourceOptions,
  ) {
    super(
      ConnectPhoneNumber.Type,
      ConnectPhoneNumber.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Connect::Prompt
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-prompt.html | AWS::Connect::Prompt}
 */
export interface ConnectPromptProps {
  Description?: string;
  S3Uri?: string;
  InstanceArn: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::Connect::Prompt
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-prompt.html | AWS::Connect::Prompt}
 */
export interface ConnectPromptAttribs {
  PromptArn?: string;
}
/**
 * Resource class for AWS::Connect::Prompt
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-prompt.html | AWS::Connect::Prompt}
 */
export class ConnectPrompt extends ResourceBase<
  "AWS::Connect::Prompt",
  ConnectPromptProps,
  ConnectPromptAttribs
> {
  public static readonly Type = "AWS::Connect::Prompt";
  public static readonly AttributeNames: readonly (keyof ConnectPromptAttribs)[] =
    ["PromptArn"];
  constructor(
    logicalId: string,
    properties: ConnectPromptProps,
    options?: ResourceOptions,
  ) {
    super(
      ConnectPrompt.Type,
      ConnectPrompt.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Connect::Queue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-queue.html | AWS::Connect::Queue}
 */
export interface ConnectQueueProps {
  Status?: string;
  HoursOfOperationArn: string;
  Description?: string;
  InstanceArn: string;
  QuickConnectArns?: any[];
  OutboundCallerConfig?: ConnectQueueOutboundCallerConfig;
  MaxContacts?: number;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::Connect::Queue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-queue.html | AWS::Connect::Queue}
 */
export interface ConnectQueueAttribs {
  Type?: string;
  QueueArn?: string;
}
/**
 * Resource class for AWS::Connect::Queue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-queue.html | AWS::Connect::Queue}
 */
export class ConnectQueue extends ResourceBase<
  "AWS::Connect::Queue",
  ConnectQueueProps,
  ConnectQueueAttribs
> {
  public static readonly Type = "AWS::Connect::Queue";
  public static readonly AttributeNames: readonly (keyof ConnectQueueAttribs)[] =
    ["Type", "QueueArn"];
  constructor(
    logicalId: string,
    properties: ConnectQueueProps,
    options?: ResourceOptions,
  ) {
    super(
      ConnectQueue.Type,
      ConnectQueue.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Connect::QuickConnect
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-quickconnect.html | AWS::Connect::QuickConnect}
 */
export interface ConnectQuickConnectProps {
  Description?: string;
  QuickConnectConfig: ConnectQuickConnectQuickConnectConfig;
  InstanceArn: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::Connect::QuickConnect
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-quickconnect.html | AWS::Connect::QuickConnect}
 */
export interface ConnectQuickConnectAttribs {
  QuickConnectArn?: string;
  QuickConnectType?: string;
}
/**
 * Resource class for AWS::Connect::QuickConnect
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-quickconnect.html | AWS::Connect::QuickConnect}
 */
export class ConnectQuickConnect extends ResourceBase<
  "AWS::Connect::QuickConnect",
  ConnectQuickConnectProps,
  ConnectQuickConnectAttribs
> {
  public static readonly Type = "AWS::Connect::QuickConnect";
  public static readonly AttributeNames: readonly (keyof ConnectQuickConnectAttribs)[] =
    ["QuickConnectArn", "QuickConnectType"];
  constructor(
    logicalId: string,
    properties: ConnectQuickConnectProps,
    options?: ResourceOptions,
  ) {
    super(
      ConnectQuickConnect.Type,
      ConnectQuickConnect.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Connect::RoutingProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-routingprofile.html | AWS::Connect::RoutingProfile}
 */
export interface ConnectRoutingProfileProps {
  Description: string;
  MediaConcurrencies: any[];
  InstanceArn: string;
  AgentAvailabilityTimer?: string;
  QueueConfigs?: any[];
  DefaultOutboundQueueArn: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::Connect::RoutingProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-routingprofile.html | AWS::Connect::RoutingProfile}
 */
export interface ConnectRoutingProfileAttribs {
  RoutingProfileArn?: string;
}
/**
 * Resource class for AWS::Connect::RoutingProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-routingprofile.html | AWS::Connect::RoutingProfile}
 */
export class ConnectRoutingProfile extends ResourceBase<
  "AWS::Connect::RoutingProfile",
  ConnectRoutingProfileProps,
  ConnectRoutingProfileAttribs
> {
  public static readonly Type = "AWS::Connect::RoutingProfile";
  public static readonly AttributeNames: readonly (keyof ConnectRoutingProfileAttribs)[] =
    ["RoutingProfileArn"];
  constructor(
    logicalId: string,
    properties: ConnectRoutingProfileProps,
    options?: ResourceOptions,
  ) {
    super(
      ConnectRoutingProfile.Type,
      ConnectRoutingProfile.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Connect::Rule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-rule.html | AWS::Connect::Rule}
 */
export interface ConnectRuleProps {
  Function: string;
  TriggerEventSource: ConnectRuleRuleTriggerEventSource;
  Actions: ConnectRuleActions;
  InstanceArn: string;
  Tags?: Tag[];
  Name: string;
  PublishStatus: string;
}
/**
 * Attributes type definition for AWS::Connect::Rule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-rule.html | AWS::Connect::Rule}
 */
export interface ConnectRuleAttribs {
  RuleArn?: string;
}
/**
 * Resource class for AWS::Connect::Rule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-rule.html | AWS::Connect::Rule}
 */
export class ConnectRule extends ResourceBase<
  "AWS::Connect::Rule",
  ConnectRuleProps,
  ConnectRuleAttribs
> {
  public static readonly Type = "AWS::Connect::Rule";
  public static readonly AttributeNames: readonly (keyof ConnectRuleAttribs)[] =
    ["RuleArn"];
  constructor(
    logicalId: string,
    properties: ConnectRuleProps,
    options?: ResourceOptions,
  ) {
    super(
      ConnectRule.Type,
      ConnectRule.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Connect::SecurityKey
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-securitykey.html | AWS::Connect::SecurityKey}
 */
export interface ConnectSecurityKeyProps {
  InstanceId: string;
  Key: string;
}
/**
 * Attributes type definition for AWS::Connect::SecurityKey
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-securitykey.html | AWS::Connect::SecurityKey}
 */
export interface ConnectSecurityKeyAttribs {
  AssociationId?: string;
}
/**
 * Resource class for AWS::Connect::SecurityKey
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-securitykey.html | AWS::Connect::SecurityKey}
 */
export class ConnectSecurityKey extends ResourceBase<
  "AWS::Connect::SecurityKey",
  ConnectSecurityKeyProps,
  ConnectSecurityKeyAttribs
> {
  public static readonly Type = "AWS::Connect::SecurityKey";
  public static readonly AttributeNames: readonly (keyof ConnectSecurityKeyAttribs)[] =
    ["AssociationId"];
  constructor(
    logicalId: string,
    properties: ConnectSecurityKeyProps,
    options?: ResourceOptions,
  ) {
    super(
      ConnectSecurityKey.Type,
      ConnectSecurityKey.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Connect::SecurityProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-securityprofile.html | AWS::Connect::SecurityProfile}
 */
export interface ConnectSecurityProfileProps {
  AllowedAccessControlTags?: any[];
  Description?: string;
  InstanceArn: string;
  Permissions?: any[];
  SecurityProfileName: string;
  TagRestrictedResources?: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::Connect::SecurityProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-securityprofile.html | AWS::Connect::SecurityProfile}
 */
export interface ConnectSecurityProfileAttribs {
  SecurityProfileArn?: string;
}
/**
 * Resource class for AWS::Connect::SecurityProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-securityprofile.html | AWS::Connect::SecurityProfile}
 */
export class ConnectSecurityProfile extends ResourceBase<
  "AWS::Connect::SecurityProfile",
  ConnectSecurityProfileProps,
  ConnectSecurityProfileAttribs
> {
  public static readonly Type = "AWS::Connect::SecurityProfile";
  public static readonly AttributeNames: readonly (keyof ConnectSecurityProfileAttribs)[] =
    ["SecurityProfileArn"];
  constructor(
    logicalId: string,
    properties: ConnectSecurityProfileProps,
    options?: ResourceOptions,
  ) {
    super(
      ConnectSecurityProfile.Type,
      ConnectSecurityProfile.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Connect::TaskTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html | AWS::Connect::TaskTemplate}
 */
export interface ConnectTaskTemplateProps {
  Status?: string;
  Description?: string;
  Constraints?: ConnectTaskTemplateConstraints;
  Defaults?: any[];
  Fields?: any[];
  InstanceArn: string;
  ContactFlowArn?: string;
  ClientToken?: string;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::Connect::TaskTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html | AWS::Connect::TaskTemplate}
 */
export interface ConnectTaskTemplateAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::Connect::TaskTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html | AWS::Connect::TaskTemplate}
 */
export class ConnectTaskTemplate extends ResourceBase<
  "AWS::Connect::TaskTemplate",
  ConnectTaskTemplateProps,
  ConnectTaskTemplateAttribs
> {
  public static readonly Type = "AWS::Connect::TaskTemplate";
  public static readonly AttributeNames: readonly (keyof ConnectTaskTemplateAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: ConnectTaskTemplateProps,
    options?: ResourceOptions,
  ) {
    super(
      ConnectTaskTemplate.Type,
      ConnectTaskTemplate.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Connect::TrafficDistributionGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-trafficdistributiongroup.html | AWS::Connect::TrafficDistributionGroup}
 */
export interface ConnectTrafficDistributionGroupProps {
  Description?: string;
  InstanceArn: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::Connect::TrafficDistributionGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-trafficdistributiongroup.html | AWS::Connect::TrafficDistributionGroup}
 */
export interface ConnectTrafficDistributionGroupAttribs {
  Status?: string;
  IsDefault?: boolean;
  TrafficDistributionGroupArn?: string;
}
/**
 * Resource class for AWS::Connect::TrafficDistributionGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-trafficdistributiongroup.html | AWS::Connect::TrafficDistributionGroup}
 */
export class ConnectTrafficDistributionGroup extends ResourceBase<
  "AWS::Connect::TrafficDistributionGroup",
  ConnectTrafficDistributionGroupProps,
  ConnectTrafficDistributionGroupAttribs
> {
  public static readonly Type = "AWS::Connect::TrafficDistributionGroup";
  public static readonly AttributeNames: readonly (keyof ConnectTrafficDistributionGroupAttribs)[] =
    ["Status", "IsDefault", "TrafficDistributionGroupArn"];
  constructor(
    logicalId: string,
    properties: ConnectTrafficDistributionGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      ConnectTrafficDistributionGroup.Type,
      ConnectTrafficDistributionGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Connect::User
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-user.html | AWS::Connect::User}
 */
export interface ConnectUserProps {
  RoutingProfileArn: string;
  Username: string;
  PhoneConfig: ConnectUserUserPhoneConfig;
  InstanceArn: string;
  DirectoryUserId?: string;
  IdentityInfo?: ConnectUserUserIdentityInfo;
  HierarchyGroupArn?: string;
  SecurityProfileArns: any[];
  Tags?: Tag[];
  Password?: string;
}
/**
 * Attributes type definition for AWS::Connect::User
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-user.html | AWS::Connect::User}
 */
export interface ConnectUserAttribs {
  UserArn?: string;
}
/**
 * Resource class for AWS::Connect::User
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-user.html | AWS::Connect::User}
 */
export class ConnectUser extends ResourceBase<
  "AWS::Connect::User",
  ConnectUserProps,
  ConnectUserAttribs
> {
  public static readonly Type = "AWS::Connect::User";
  public static readonly AttributeNames: readonly (keyof ConnectUserAttribs)[] =
    ["UserArn"];
  constructor(
    logicalId: string,
    properties: ConnectUserProps,
    options?: ResourceOptions,
  ) {
    super(
      ConnectUser.Type,
      ConnectUser.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Connect::UserHierarchyGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchygroup.html | AWS::Connect::UserHierarchyGroup}
 */
export interface ConnectUserHierarchyGroupProps {
  InstanceArn: string;
  ParentGroupArn?: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::Connect::UserHierarchyGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchygroup.html | AWS::Connect::UserHierarchyGroup}
 */
export interface ConnectUserHierarchyGroupAttribs {
  UserHierarchyGroupArn?: string;
}
/**
 * Resource class for AWS::Connect::UserHierarchyGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchygroup.html | AWS::Connect::UserHierarchyGroup}
 */
export class ConnectUserHierarchyGroup extends ResourceBase<
  "AWS::Connect::UserHierarchyGroup",
  ConnectUserHierarchyGroupProps,
  ConnectUserHierarchyGroupAttribs
> {
  public static readonly Type = "AWS::Connect::UserHierarchyGroup";
  public static readonly AttributeNames: readonly (keyof ConnectUserHierarchyGroupAttribs)[] =
    ["UserHierarchyGroupArn"];
  constructor(
    logicalId: string,
    properties: ConnectUserHierarchyGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      ConnectUserHierarchyGroup.Type,
      ConnectUserHierarchyGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Connect::View
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-view.html | AWS::Connect::View}
 */
export interface ConnectViewProps {
  Description?: string;
  Actions: any[];
  InstanceArn: string;
  Tags?: Tag[];
  Name: string;
  Template: object;
}
/**
 * Attributes type definition for AWS::Connect::View
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-view.html | AWS::Connect::View}
 */
export interface ConnectViewAttribs {
  ViewArn?: string;
  ViewContentSha256?: string;
  ViewId?: string;
}
/**
 * Resource class for AWS::Connect::View
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-view.html | AWS::Connect::View}
 */
export class ConnectView extends ResourceBase<
  "AWS::Connect::View",
  ConnectViewProps,
  ConnectViewAttribs
> {
  public static readonly Type = "AWS::Connect::View";
  public static readonly AttributeNames: readonly (keyof ConnectViewAttribs)[] =
    ["ViewArn", "ViewContentSha256", "ViewId"];
  constructor(
    logicalId: string,
    properties: ConnectViewProps,
    options?: ResourceOptions,
  ) {
    super(
      ConnectView.Type,
      ConnectView.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Connect::ViewVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-viewversion.html | AWS::Connect::ViewVersion}
 */
export interface ConnectViewVersionProps {
  ViewArn: string;
  VersionDescription?: string;
  ViewContentSha256?: string;
}
/**
 * Attributes type definition for AWS::Connect::ViewVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-viewversion.html | AWS::Connect::ViewVersion}
 */
export interface ConnectViewVersionAttribs {
  ViewVersionArn?: string;
  Version?: number;
}
/**
 * Resource class for AWS::Connect::ViewVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-viewversion.html | AWS::Connect::ViewVersion}
 */
export class ConnectViewVersion extends ResourceBase<
  "AWS::Connect::ViewVersion",
  ConnectViewVersionProps,
  ConnectViewVersionAttribs
> {
  public static readonly Type = "AWS::Connect::ViewVersion";
  public static readonly AttributeNames: readonly (keyof ConnectViewVersionAttribs)[] =
    ["ViewVersionArn", "Version"];
  constructor(
    logicalId: string,
    properties: ConnectViewVersionProps,
    options?: ResourceOptions,
  ) {
    super(
      ConnectViewVersion.Type,
      ConnectViewVersion.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
