import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::SES::ConfigurationSet.DashboardOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-dashboardoptions.html | AWS::SES::ConfigurationSet.DashboardOptions}
 */
export interface SESConfigurationSetDashboardOptions {
  EngagementMetrics: string;
}
/**
 * Type definition for AWS::SES::ConfigurationSet.DeliveryOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-deliveryoptions.html | AWS::SES::ConfigurationSet.DeliveryOptions}
 */
export interface SESConfigurationSetDeliveryOptions {
  SendingPoolName?: string;
  TlsPolicy?: string;
}
/**
 * Type definition for AWS::SES::ConfigurationSet.GuardianOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-guardianoptions.html | AWS::SES::ConfigurationSet.GuardianOptions}
 */
export interface SESConfigurationSetGuardianOptions {
  OptimizedSharedDelivery: string;
}
/**
 * Type definition for AWS::SES::ConfigurationSet.ReputationOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-reputationoptions.html | AWS::SES::ConfigurationSet.ReputationOptions}
 */
export interface SESConfigurationSetReputationOptions {
  ReputationMetricsEnabled?: boolean;
}
/**
 * Type definition for AWS::SES::ConfigurationSet.SendingOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-sendingoptions.html | AWS::SES::ConfigurationSet.SendingOptions}
 */
export interface SESConfigurationSetSendingOptions {
  SendingEnabled?: boolean;
}
/**
 * Type definition for AWS::SES::ConfigurationSet.SuppressionOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-suppressionoptions.html | AWS::SES::ConfigurationSet.SuppressionOptions}
 */
export interface SESConfigurationSetSuppressionOptions {
  SuppressedReasons?: any[];
}
/**
 * Type definition for AWS::SES::ConfigurationSet.TrackingOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-trackingoptions.html | AWS::SES::ConfigurationSet.TrackingOptions}
 */
export interface SESConfigurationSetTrackingOptions {
  CustomRedirectDomain?: string;
}
/**
 * Type definition for AWS::SES::ConfigurationSet.VdmOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-vdmoptions.html | AWS::SES::ConfigurationSet.VdmOptions}
 */
export interface SESConfigurationSetVdmOptions {
  DashboardOptions?: SESConfigurationSetDashboardOptions;
  GuardianOptions?: SESConfigurationSetGuardianOptions;
}
/**
 * Type definition for AWS::SES::ConfigurationSetEventDestination.CloudWatchDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-cloudwatchdestination.html | AWS::SES::ConfigurationSetEventDestination.CloudWatchDestination}
 */
export interface SESConfigurationSetEventDestinationCloudWatchDestination {
  DimensionConfigurations?: any[];
}
/**
 * Type definition for AWS::SES::ConfigurationSetEventDestination.DimensionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-dimensionconfiguration.html | AWS::SES::ConfigurationSetEventDestination.DimensionConfiguration}
 */
export interface SESConfigurationSetEventDestinationDimensionConfiguration {
  DimensionValueSource: string;
  DefaultDimensionValue: string;
  DimensionName: string;
}
/**
 * Type definition for AWS::SES::ConfigurationSetEventDestination.EventDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-eventdestination.html | AWS::SES::ConfigurationSetEventDestination.EventDestination}
 */
export interface SESConfigurationSetEventDestinationEventDestination {
  SnsDestination?: SESConfigurationSetEventDestinationSnsDestination;
  CloudWatchDestination?: SESConfigurationSetEventDestinationCloudWatchDestination;
  Enabled?: boolean;
  MatchingEventTypes: any[];
  Name?: string;
  KinesisFirehoseDestination?: SESConfigurationSetEventDestinationKinesisFirehoseDestination;
}
/**
 * Type definition for AWS::SES::ConfigurationSetEventDestination.KinesisFirehoseDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-kinesisfirehosedestination.html | AWS::SES::ConfigurationSetEventDestination.KinesisFirehoseDestination}
 */
export interface SESConfigurationSetEventDestinationKinesisFirehoseDestination {
  IAMRoleARN: string;
  DeliveryStreamARN: string;
}
/**
 * Type definition for AWS::SES::ConfigurationSetEventDestination.SnsDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-snsdestination.html | AWS::SES::ConfigurationSetEventDestination.SnsDestination}
 */
export interface SESConfigurationSetEventDestinationSnsDestination {
  TopicARN: string;
}
/**
 * Type definition for AWS::SES::ContactList.Topic
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-contactlist-topic.html | AWS::SES::ContactList.Topic}
 */
export interface SESContactListTopic {
  Description?: string;
  DisplayName: string;
  DefaultSubscriptionStatus: string;
  TopicName: string;
}
/**
 * Type definition for AWS::SES::EmailIdentity.ConfigurationSetAttributes
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-emailidentity-configurationsetattributes.html | AWS::SES::EmailIdentity.ConfigurationSetAttributes}
 */
export interface SESEmailIdentityConfigurationSetAttributes {
  ConfigurationSetName?: string;
}
/**
 * Type definition for AWS::SES::EmailIdentity.DkimAttributes
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-emailidentity-dkimattributes.html | AWS::SES::EmailIdentity.DkimAttributes}
 */
export interface SESEmailIdentityDkimAttributes {
  SigningEnabled?: boolean;
}
/**
 * Type definition for AWS::SES::EmailIdentity.DkimSigningAttributes
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-emailidentity-dkimsigningattributes.html | AWS::SES::EmailIdentity.DkimSigningAttributes}
 */
export interface SESEmailIdentityDkimSigningAttributes {
  DomainSigningPrivateKey?: string;
  DomainSigningSelector?: string;
  NextSigningKeyLength?: string;
}
/**
 * Type definition for AWS::SES::EmailIdentity.FeedbackAttributes
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-emailidentity-feedbackattributes.html | AWS::SES::EmailIdentity.FeedbackAttributes}
 */
export interface SESEmailIdentityFeedbackAttributes {
  EmailForwardingEnabled?: boolean;
}
/**
 * Type definition for AWS::SES::EmailIdentity.MailFromAttributes
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-emailidentity-mailfromattributes.html | AWS::SES::EmailIdentity.MailFromAttributes}
 */
export interface SESEmailIdentityMailFromAttributes {
  MailFromDomain?: string;
  BehaviorOnMxFailure?: string;
}
/**
 * Type definition for AWS::SES::ReceiptFilter.Filter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptfilter-filter.html | AWS::SES::ReceiptFilter.Filter}
 */
export interface SESReceiptFilterFilter {
  IpFilter: SESReceiptFilterIpFilter;
  Name?: string;
}
/**
 * Type definition for AWS::SES::ReceiptFilter.IpFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptfilter-ipfilter.html | AWS::SES::ReceiptFilter.IpFilter}
 */
export interface SESReceiptFilterIpFilter {
  Policy: string;
  Cidr: string;
}
/**
 * Type definition for AWS::SES::ReceiptRule.Action
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-action.html | AWS::SES::ReceiptRule.Action}
 */
export interface SESReceiptRuleAction {
  BounceAction?: SESReceiptRuleBounceAction;
  S3Action?: SESReceiptRuleS3Action;
  StopAction?: SESReceiptRuleStopAction;
  SNSAction?: SESReceiptRuleSNSAction;
  WorkmailAction?: SESReceiptRuleWorkmailAction;
  AddHeaderAction?: SESReceiptRuleAddHeaderAction;
  LambdaAction?: SESReceiptRuleLambdaAction;
}
/**
 * Type definition for AWS::SES::ReceiptRule.AddHeaderAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-addheaderaction.html | AWS::SES::ReceiptRule.AddHeaderAction}
 */
export interface SESReceiptRuleAddHeaderAction {
  HeaderValue: string;
  HeaderName: string;
}
/**
 * Type definition for AWS::SES::ReceiptRule.BounceAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-bounceaction.html | AWS::SES::ReceiptRule.BounceAction}
 */
export interface SESReceiptRuleBounceAction {
  Sender: string;
  SmtpReplyCode: string;
  Message: string;
  TopicArn?: string;
  StatusCode?: string;
}
/**
 * Type definition for AWS::SES::ReceiptRule.LambdaAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-lambdaaction.html | AWS::SES::ReceiptRule.LambdaAction}
 */
export interface SESReceiptRuleLambdaAction {
  FunctionArn: string;
  TopicArn?: string;
  InvocationType?: string;
}
/**
 * Type definition for AWS::SES::ReceiptRule.Rule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-rule.html | AWS::SES::ReceiptRule.Rule}
 */
export interface SESReceiptRuleRule {
  ScanEnabled?: boolean;
  Recipients?: any[];
  Actions?: any[];
  Enabled?: boolean;
  Name?: string;
  TlsPolicy?: string;
}
/**
 * Type definition for AWS::SES::ReceiptRule.S3Action
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-s3action.html | AWS::SES::ReceiptRule.S3Action}
 */
export interface SESReceiptRuleS3Action {
  BucketName: string;
  KmsKeyArn?: string;
  TopicArn?: string;
  ObjectKeyPrefix?: string;
}
/**
 * Type definition for AWS::SES::ReceiptRule.SNSAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-snsaction.html | AWS::SES::ReceiptRule.SNSAction}
 */
export interface SESReceiptRuleSNSAction {
  TopicArn?: string;
  Encoding?: string;
}
/**
 * Type definition for AWS::SES::ReceiptRule.StopAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-stopaction.html | AWS::SES::ReceiptRule.StopAction}
 */
export interface SESReceiptRuleStopAction {
  Scope: string;
  TopicArn?: string;
}
/**
 * Type definition for AWS::SES::ReceiptRule.WorkmailAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-workmailaction.html | AWS::SES::ReceiptRule.WorkmailAction}
 */
export interface SESReceiptRuleWorkmailAction {
  TopicArn?: string;
  OrganizationArn: string;
}
/**
 * Type definition for AWS::SES::Template.Template
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-template-template.html | AWS::SES::Template.Template}
 */
export interface SESTemplateTemplate {
  HtmlPart?: string;
  TextPart?: string;
  TemplateName?: string;
  SubjectPart: string;
}
/**
 * Type definition for AWS::SES::VdmAttributes.DashboardAttributes
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-vdmattributes-dashboardattributes.html | AWS::SES::VdmAttributes.DashboardAttributes}
 */
export interface SESVdmAttributesDashboardAttributes {
  EngagementMetrics?: string;
}
/**
 * Type definition for AWS::SES::VdmAttributes.GuardianAttributes
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-vdmattributes-guardianattributes.html | AWS::SES::VdmAttributes.GuardianAttributes}
 */
export interface SESVdmAttributesGuardianAttributes {
  OptimizedSharedDelivery?: string;
}
/**
 * Type definition for AWS::SES::ConfigurationSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html | AWS::SES::ConfigurationSet}
 */
export interface SESConfigurationSetProps {
  SendingOptions?: SESConfigurationSetSendingOptions;
  SuppressionOptions?: SESConfigurationSetSuppressionOptions;
  TrackingOptions?: SESConfigurationSetTrackingOptions;
  ReputationOptions?: SESConfigurationSetReputationOptions;
  VdmOptions?: SESConfigurationSetVdmOptions;
  DeliveryOptions?: SESConfigurationSetDeliveryOptions;
  Name?: string;
}
/**
 * Resource class for AWS::SES::ConfigurationSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html | AWS::SES::ConfigurationSet}
 */
export class SESConfigurationSet extends ResourceBase<
  "AWS::SES::ConfigurationSet",
  SESConfigurationSetProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::SES::ConfigurationSet";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: SESConfigurationSetProps,
    options?: ResourceOptions,
  ) {
    super(
      SESConfigurationSet.Type,
      SESConfigurationSet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SES::ConfigurationSetEventDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html | AWS::SES::ConfigurationSetEventDestination}
 */
export interface SESConfigurationSetEventDestinationProps {
  ConfigurationSetName: string;
  EventDestination: SESConfigurationSetEventDestinationEventDestination;
}
/**
 * Attributes type definition for AWS::SES::ConfigurationSetEventDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html | AWS::SES::ConfigurationSetEventDestination}
 */
export interface SESConfigurationSetEventDestinationAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::SES::ConfigurationSetEventDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html | AWS::SES::ConfigurationSetEventDestination}
 */
export class SESConfigurationSetEventDestination extends ResourceBase<
  "AWS::SES::ConfigurationSetEventDestination",
  SESConfigurationSetEventDestinationProps,
  SESConfigurationSetEventDestinationAttribs
> {
  public static readonly Type = "AWS::SES::ConfigurationSetEventDestination";
  public static readonly AttributeNames: readonly (keyof SESConfigurationSetEventDestinationAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: SESConfigurationSetEventDestinationProps,
    options?: ResourceOptions,
  ) {
    super(
      SESConfigurationSetEventDestination.Type,
      SESConfigurationSetEventDestination.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SES::ContactList
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-contactlist.html | AWS::SES::ContactList}
 */
export interface SESContactListProps {
  Description?: string;
  Topics?: any[];
  ContactListName?: string;
  Tags?: Tag[];
}
/**
 * Resource class for AWS::SES::ContactList
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-contactlist.html | AWS::SES::ContactList}
 */
export class SESContactList extends ResourceBase<
  "AWS::SES::ContactList",
  SESContactListProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::SES::ContactList";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: SESContactListProps,
    options?: ResourceOptions,
  ) {
    super(
      SESContactList.Type,
      SESContactList.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SES::DedicatedIpPool
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-dedicatedippool.html | AWS::SES::DedicatedIpPool}
 */
export interface SESDedicatedIpPoolProps {
  PoolName?: string;
  ScalingMode?: string;
}
/**
 * Resource class for AWS::SES::DedicatedIpPool
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-dedicatedippool.html | AWS::SES::DedicatedIpPool}
 */
export class SESDedicatedIpPool extends ResourceBase<
  "AWS::SES::DedicatedIpPool",
  SESDedicatedIpPoolProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::SES::DedicatedIpPool";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: SESDedicatedIpPoolProps,
    options?: ResourceOptions,
  ) {
    super(
      SESDedicatedIpPool.Type,
      SESDedicatedIpPool.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SES::EmailIdentity
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html | AWS::SES::EmailIdentity}
 */
export interface SESEmailIdentityProps {
  ConfigurationSetAttributes?: SESEmailIdentityConfigurationSetAttributes;
  EmailIdentity: string;
  DkimSigningAttributes?: SESEmailIdentityDkimSigningAttributes;
  DkimAttributes?: SESEmailIdentityDkimAttributes;
  FeedbackAttributes?: SESEmailIdentityFeedbackAttributes;
  MailFromAttributes?: SESEmailIdentityMailFromAttributes;
}
/**
 * Attributes type definition for AWS::SES::EmailIdentity
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html | AWS::SES::EmailIdentity}
 */
export interface SESEmailIdentityAttribs {
  DkimDNSTokenValue1?: string;
  DkimDNSTokenName2?: string;
  DkimDNSTokenName3?: string;
  DkimDNSTokenName1?: string;
  DkimDNSTokenValue2?: string;
  DkimDNSTokenValue3?: string;
}
/**
 * Resource class for AWS::SES::EmailIdentity
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html | AWS::SES::EmailIdentity}
 */
export class SESEmailIdentity extends ResourceBase<
  "AWS::SES::EmailIdentity",
  SESEmailIdentityProps,
  SESEmailIdentityAttribs
> {
  public static readonly Type = "AWS::SES::EmailIdentity";
  public static readonly AttributeNames: readonly (keyof SESEmailIdentityAttribs)[] =
    [
      "DkimDNSTokenValue1",
      "DkimDNSTokenName2",
      "DkimDNSTokenName3",
      "DkimDNSTokenName1",
      "DkimDNSTokenValue2",
      "DkimDNSTokenValue3",
    ];
  constructor(
    logicalId: string,
    properties: SESEmailIdentityProps,
    options?: ResourceOptions,
  ) {
    super(
      SESEmailIdentity.Type,
      SESEmailIdentity.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SES::ReceiptFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptfilter.html | AWS::SES::ReceiptFilter}
 */
export interface SESReceiptFilterProps {
  Filter: SESReceiptFilterFilter;
}
/**
 * Resource class for AWS::SES::ReceiptFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptfilter.html | AWS::SES::ReceiptFilter}
 */
export class SESReceiptFilter extends ResourceBase<
  "AWS::SES::ReceiptFilter",
  SESReceiptFilterProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::SES::ReceiptFilter";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: SESReceiptFilterProps,
    options?: ResourceOptions,
  ) {
    super(
      SESReceiptFilter.Type,
      SESReceiptFilter.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SES::ReceiptRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptrule.html | AWS::SES::ReceiptRule}
 */
export interface SESReceiptRuleProps {
  After?: string;
  Rule: SESReceiptRuleRule;
  RuleSetName: string;
}
/**
 * Resource class for AWS::SES::ReceiptRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptrule.html | AWS::SES::ReceiptRule}
 */
export class SESReceiptRule extends ResourceBase<
  "AWS::SES::ReceiptRule",
  SESReceiptRuleProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::SES::ReceiptRule";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: SESReceiptRuleProps,
    options?: ResourceOptions,
  ) {
    super(
      SESReceiptRule.Type,
      SESReceiptRule.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SES::ReceiptRuleSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptruleset.html | AWS::SES::ReceiptRuleSet}
 */
export interface SESReceiptRuleSetProps {
  RuleSetName?: string;
}
/**
 * Resource class for AWS::SES::ReceiptRuleSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptruleset.html | AWS::SES::ReceiptRuleSet}
 */
export class SESReceiptRuleSet extends ResourceBase<
  "AWS::SES::ReceiptRuleSet",
  SESReceiptRuleSetProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::SES::ReceiptRuleSet";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: SESReceiptRuleSetProps,
    options?: ResourceOptions,
  ) {
    super(
      SESReceiptRuleSet.Type,
      SESReceiptRuleSet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SES::Template
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-template.html | AWS::SES::Template}
 */
export interface SESTemplateProps {
  Template?: SESTemplateTemplate;
}
/**
 * Attributes type definition for AWS::SES::Template
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-template.html | AWS::SES::Template}
 */
export interface SESTemplateAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::SES::Template
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-template.html | AWS::SES::Template}
 */
export class SESTemplate extends ResourceBase<
  "AWS::SES::Template",
  SESTemplateProps,
  SESTemplateAttribs
> {
  public static readonly Type = "AWS::SES::Template";
  public static readonly AttributeNames: readonly (keyof SESTemplateAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: SESTemplateProps,
    options?: ResourceOptions,
  ) {
    super(
      SESTemplate.Type,
      SESTemplate.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SES::VdmAttributes
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-vdmattributes.html | AWS::SES::VdmAttributes}
 */
export interface SESVdmAttributesProps {
  DashboardAttributes?: SESVdmAttributesDashboardAttributes;
  GuardianAttributes?: SESVdmAttributesGuardianAttributes;
}
/**
 * Attributes type definition for AWS::SES::VdmAttributes
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-vdmattributes.html | AWS::SES::VdmAttributes}
 */
export interface SESVdmAttributesAttribs {
  VdmAttributesResourceId?: string;
}
/**
 * Resource class for AWS::SES::VdmAttributes
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-vdmattributes.html | AWS::SES::VdmAttributes}
 */
export class SESVdmAttributes extends ResourceBase<
  "AWS::SES::VdmAttributes",
  SESVdmAttributesProps,
  SESVdmAttributesAttribs
> {
  public static readonly Type = "AWS::SES::VdmAttributes";
  public static readonly AttributeNames: readonly (keyof SESVdmAttributesAttribs)[] =
    ["VdmAttributesResourceId"];
  constructor(
    logicalId: string,
    properties: SESVdmAttributesProps,
    options?: ResourceOptions,
  ) {
    super(
      SESVdmAttributes.Type,
      SESVdmAttributes.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
