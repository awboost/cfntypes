import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::IoT::AccountAuditConfiguration.AuditCheckConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditcheckconfiguration.html | AWS::IoT::AccountAuditConfiguration.AuditCheckConfiguration}
 */
export interface IoTAccountAuditConfigurationAuditCheckConfiguration {
  Enabled?: boolean;
}
/**
 * Type definition for AWS::IoT::AccountAuditConfiguration.AuditCheckConfigurations
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditcheckconfigurations.html | AWS::IoT::AccountAuditConfiguration.AuditCheckConfigurations}
 */
export interface IoTAccountAuditConfigurationAuditCheckConfigurations {
  IotRoleAliasOverlyPermissiveCheck?: IoTAccountAuditConfigurationAuditCheckConfiguration;
  DeviceCertificateSharedCheck?: IoTAccountAuditConfigurationAuditCheckConfiguration;
  ConflictingClientIdsCheck?: IoTAccountAuditConfigurationAuditCheckConfiguration;
  IntermediateCaRevokedForActiveDeviceCertificatesCheck?: IoTAccountAuditConfigurationAuditCheckConfiguration;
  IotRoleAliasAllowsAccessToUnusedServicesCheck?: IoTAccountAuditConfigurationAuditCheckConfiguration;
  RevokedCaCertificateStillActiveCheck?: IoTAccountAuditConfigurationAuditCheckConfiguration;
  LoggingDisabledCheck?: IoTAccountAuditConfigurationAuditCheckConfiguration;
  UnauthenticatedCognitoRoleOverlyPermissiveCheck?: IoTAccountAuditConfigurationAuditCheckConfiguration;
  AuthenticatedCognitoRoleOverlyPermissiveCheck?: IoTAccountAuditConfigurationAuditCheckConfiguration;
  CaCertificateExpiringCheck?: IoTAccountAuditConfigurationAuditCheckConfiguration;
  DeviceCertificateExpiringCheck?: IoTAccountAuditConfigurationAuditCheckConfiguration;
  IoTPolicyPotentialMisConfigurationCheck?: IoTAccountAuditConfigurationAuditCheckConfiguration;
  IotPolicyOverlyPermissiveCheck?: IoTAccountAuditConfigurationAuditCheckConfiguration;
  RevokedDeviceCertificateStillActiveCheck?: IoTAccountAuditConfigurationAuditCheckConfiguration;
  DeviceCertificateKeyQualityCheck?: IoTAccountAuditConfigurationAuditCheckConfiguration;
  CaCertificateKeyQualityCheck?: IoTAccountAuditConfigurationAuditCheckConfiguration;
}
/**
 * Type definition for AWS::IoT::AccountAuditConfiguration.AuditNotificationTarget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditnotificationtarget.html | AWS::IoT::AccountAuditConfiguration.AuditNotificationTarget}
 */
export interface IoTAccountAuditConfigurationAuditNotificationTarget {
  TargetArn?: string;
  Enabled?: boolean;
  RoleArn?: string;
}
/**
 * Type definition for AWS::IoT::AccountAuditConfiguration.AuditNotificationTargetConfigurations
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditnotificationtargetconfigurations.html | AWS::IoT::AccountAuditConfiguration.AuditNotificationTargetConfigurations}
 */
export interface IoTAccountAuditConfigurationAuditNotificationTargetConfigurations {
  Sns?: IoTAccountAuditConfigurationAuditNotificationTarget;
}
/**
 * Type definition for AWS::IoT::BillingGroup.BillingGroupProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-billinggroup-billinggroupproperties.html | AWS::IoT::BillingGroup.BillingGroupProperties}
 */
export interface IoTBillingGroupBillingGroupProperties {
  BillingGroupDescription?: string;
}
/**
 * Type definition for AWS::IoT::CACertificate.RegistrationConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-cacertificate-registrationconfig.html | AWS::IoT::CACertificate.RegistrationConfig}
 */
export interface IoTCACertificateRegistrationConfig {
  TemplateName?: string;
  TemplateBody?: string;
  RoleArn?: string;
}
/**
 * Type definition for AWS::IoT::DomainConfiguration.AuthorizerConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-domainconfiguration-authorizerconfig.html | AWS::IoT::DomainConfiguration.AuthorizerConfig}
 */
export interface IoTDomainConfigurationAuthorizerConfig {
  DefaultAuthorizerName?: string;
  AllowAuthorizerOverride?: boolean;
}
/**
 * Type definition for AWS::IoT::DomainConfiguration.ServerCertificateSummary
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-domainconfiguration-servercertificatesummary.html | AWS::IoT::DomainConfiguration.ServerCertificateSummary}
 */
export interface IoTDomainConfigurationServerCertificateSummary {
  ServerCertificateStatusDetail?: string;
  ServerCertificateArn?: string;
  ServerCertificateStatus?: string;
}
/**
 * Type definition for AWS::IoT::DomainConfiguration.TlsConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-domainconfiguration-tlsconfig.html | AWS::IoT::DomainConfiguration.TlsConfig}
 */
export interface IoTDomainConfigurationTlsConfig {
  SecurityPolicy?: string;
}
/**
 * Type definition for AWS::IoT::FleetMetric.AggregationType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-fleetmetric-aggregationtype.html | AWS::IoT::FleetMetric.AggregationType}
 */
export interface IoTFleetMetricAggregationType {
  Values: any[];
  Name: string;
}
/**
 * Type definition for AWS::IoT::JobTemplate.AbortConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-abortconfig.html | AWS::IoT::JobTemplate.AbortConfig}
 */
export interface IoTJobTemplateAbortConfig {
  CriteriaList: any[];
}
/**
 * Type definition for AWS::IoT::JobTemplate.AbortCriteria
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-abortcriteria.html | AWS::IoT::JobTemplate.AbortCriteria}
 */
export interface IoTJobTemplateAbortCriteria {
  Action: string;
  FailureType: string;
  ThresholdPercentage: number;
  MinNumberOfExecutedThings: number;
}
/**
 * Type definition for AWS::IoT::JobTemplate.ExponentialRolloutRate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-exponentialrolloutrate.html | AWS::IoT::JobTemplate.ExponentialRolloutRate}
 */
export interface IoTJobTemplateExponentialRolloutRate {
  RateIncreaseCriteria: IoTJobTemplateRateIncreaseCriteria;
  BaseRatePerMinute: number;
  IncrementFactor: number;
}
/**
 * Type definition for AWS::IoT::JobTemplate.JobExecutionsRetryConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-jobexecutionsretryconfig.html | AWS::IoT::JobTemplate.JobExecutionsRetryConfig}
 */
export interface IoTJobTemplateJobExecutionsRetryConfig {
  RetryCriteriaList?: any[];
}
/**
 * Type definition for AWS::IoT::JobTemplate.JobExecutionsRolloutConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-jobexecutionsrolloutconfig.html | AWS::IoT::JobTemplate.JobExecutionsRolloutConfig}
 */
export interface IoTJobTemplateJobExecutionsRolloutConfig {
  MaximumPerMinute?: number;
  ExponentialRolloutRate?: IoTJobTemplateExponentialRolloutRate;
}
/**
 * Type definition for AWS::IoT::JobTemplate.MaintenanceWindow
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-maintenancewindow.html | AWS::IoT::JobTemplate.MaintenanceWindow}
 */
export interface IoTJobTemplateMaintenanceWindow {
  DurationInMinutes?: number;
  StartTime?: string;
}
/**
 * Type definition for AWS::IoT::JobTemplate.PresignedUrlConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-presignedurlconfig.html | AWS::IoT::JobTemplate.PresignedUrlConfig}
 */
export interface IoTJobTemplatePresignedUrlConfig {
  ExpiresInSec?: number;
  RoleArn: string;
}
/**
 * Type definition for AWS::IoT::JobTemplate.RateIncreaseCriteria
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-rateincreasecriteria.html | AWS::IoT::JobTemplate.RateIncreaseCriteria}
 */
export interface IoTJobTemplateRateIncreaseCriteria {
  NumberOfSucceededThings?: number;
  NumberOfNotifiedThings?: number;
}
/**
 * Type definition for AWS::IoT::JobTemplate.RetryCriteria
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-retrycriteria.html | AWS::IoT::JobTemplate.RetryCriteria}
 */
export interface IoTJobTemplateRetryCriteria {
  FailureType?: string;
  NumberOfRetries?: number;
}
/**
 * Type definition for AWS::IoT::JobTemplate.TimeoutConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-timeoutconfig.html | AWS::IoT::JobTemplate.TimeoutConfig}
 */
export interface IoTJobTemplateTimeoutConfig {
  InProgressTimeoutInMinutes: number;
}
/**
 * Type definition for AWS::IoT::MitigationAction.ActionParams
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-actionparams.html | AWS::IoT::MitigationAction.ActionParams}
 */
export interface IoTMitigationActionActionParams {
  UpdateDeviceCertificateParams?: IoTMitigationActionUpdateDeviceCertificateParams;
  AddThingsToThingGroupParams?: IoTMitigationActionAddThingsToThingGroupParams;
  PublishFindingToSnsParams?: IoTMitigationActionPublishFindingToSnsParams;
  EnableIoTLoggingParams?: IoTMitigationActionEnableIoTLoggingParams;
  ReplaceDefaultPolicyVersionParams?: IoTMitigationActionReplaceDefaultPolicyVersionParams;
  UpdateCACertificateParams?: IoTMitigationActionUpdateCACertificateParams;
}
/**
 * Type definition for AWS::IoT::MitigationAction.AddThingsToThingGroupParams
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-addthingstothinggroupparams.html | AWS::IoT::MitigationAction.AddThingsToThingGroupParams}
 */
export interface IoTMitigationActionAddThingsToThingGroupParams {
  OverrideDynamicGroups?: boolean;
  ThingGroupNames: any[];
}
/**
 * Type definition for AWS::IoT::MitigationAction.EnableIoTLoggingParams
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-enableiotloggingparams.html | AWS::IoT::MitigationAction.EnableIoTLoggingParams}
 */
export interface IoTMitigationActionEnableIoTLoggingParams {
  RoleArnForLogging: string;
  LogLevel: string;
}
/**
 * Type definition for AWS::IoT::MitigationAction.PublishFindingToSnsParams
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-publishfindingtosnsparams.html | AWS::IoT::MitigationAction.PublishFindingToSnsParams}
 */
export interface IoTMitigationActionPublishFindingToSnsParams {
  TopicArn: string;
}
/**
 * Type definition for AWS::IoT::MitigationAction.ReplaceDefaultPolicyVersionParams
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-replacedefaultpolicyversionparams.html | AWS::IoT::MitigationAction.ReplaceDefaultPolicyVersionParams}
 */
export interface IoTMitigationActionReplaceDefaultPolicyVersionParams {
  TemplateName: string;
}
/**
 * Type definition for AWS::IoT::MitigationAction.UpdateCACertificateParams
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-updatecacertificateparams.html | AWS::IoT::MitigationAction.UpdateCACertificateParams}
 */
export interface IoTMitigationActionUpdateCACertificateParams {
  Action: string;
}
/**
 * Type definition for AWS::IoT::MitigationAction.UpdateDeviceCertificateParams
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-updatedevicecertificateparams.html | AWS::IoT::MitigationAction.UpdateDeviceCertificateParams}
 */
export interface IoTMitigationActionUpdateDeviceCertificateParams {
  Action: string;
}
/**
 * Type definition for AWS::IoT::ProvisioningTemplate.ProvisioningHook
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-provisioningtemplate-provisioninghook.html | AWS::IoT::ProvisioningTemplate.ProvisioningHook}
 */
export interface IoTProvisioningTemplateProvisioningHook {
  TargetArn?: string;
  PayloadVersion?: string;
}
/**
 * Type definition for AWS::IoT::SecurityProfile.AlertTarget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-alerttarget.html | AWS::IoT::SecurityProfile.AlertTarget}
 */
export interface IoTSecurityProfileAlertTarget {
  AlertTargetArn: string;
  RoleArn: string;
}
/**
 * Type definition for AWS::IoT::SecurityProfile.Behavior
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-behavior.html | AWS::IoT::SecurityProfile.Behavior}
 */
export interface IoTSecurityProfileBehavior {
  SuppressAlerts?: boolean;
  Metric?: string;
  Criteria?: IoTSecurityProfileBehaviorCriteria;
  MetricDimension?: IoTSecurityProfileMetricDimension;
  Name: string;
}
/**
 * Type definition for AWS::IoT::SecurityProfile.BehaviorCriteria
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-behaviorcriteria.html | AWS::IoT::SecurityProfile.BehaviorCriteria}
 */
export interface IoTSecurityProfileBehaviorCriteria {
  ComparisonOperator?: string;
  MlDetectionConfig?: IoTSecurityProfileMachineLearningDetectionConfig;
  Value?: IoTSecurityProfileMetricValue;
  StatisticalThreshold?: IoTSecurityProfileStatisticalThreshold;
  DurationSeconds?: number;
  ConsecutiveDatapointsToAlarm?: number;
  ConsecutiveDatapointsToClear?: number;
}
/**
 * Type definition for AWS::IoT::SecurityProfile.MachineLearningDetectionConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-machinelearningdetectionconfig.html | AWS::IoT::SecurityProfile.MachineLearningDetectionConfig}
 */
export interface IoTSecurityProfileMachineLearningDetectionConfig {
  ConfidenceLevel?: string;
}
/**
 * Type definition for AWS::IoT::SecurityProfile.MetricDimension
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metricdimension.html | AWS::IoT::SecurityProfile.MetricDimension}
 */
export interface IoTSecurityProfileMetricDimension {
  Operator?: string;
  DimensionName: string;
}
/**
 * Type definition for AWS::IoT::SecurityProfile.MetricToRetain
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metrictoretain.html | AWS::IoT::SecurityProfile.MetricToRetain}
 */
export interface IoTSecurityProfileMetricToRetain {
  Metric: string;
  MetricDimension?: IoTSecurityProfileMetricDimension;
}
/**
 * Type definition for AWS::IoT::SecurityProfile.MetricValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metricvalue.html | AWS::IoT::SecurityProfile.MetricValue}
 */
export interface IoTSecurityProfileMetricValue {
  Numbers?: any[];
  Number?: number;
  Ports?: any[];
  Count?: string;
  Strings?: any[];
  Cidrs?: any[];
}
/**
 * Type definition for AWS::IoT::SecurityProfile.StatisticalThreshold
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-statisticalthreshold.html | AWS::IoT::SecurityProfile.StatisticalThreshold}
 */
export interface IoTSecurityProfileStatisticalThreshold {
  Statistic?: string;
}
/**
 * Type definition for AWS::IoT::Thing.AttributePayload
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-thing-attributepayload.html | AWS::IoT::Thing.AttributePayload}
 */
export interface IoTThingAttributePayload {
  Attributes?: Record<string, any>;
}
/**
 * Type definition for AWS::IoT::ThingGroup.AttributePayload
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-thinggroup-attributepayload.html | AWS::IoT::ThingGroup.AttributePayload}
 */
export interface IoTThingGroupAttributePayload {
  Attributes?: Record<string, any>;
}
/**
 * Type definition for AWS::IoT::ThingGroup.ThingGroupProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-thinggroup-thinggroupproperties.html | AWS::IoT::ThingGroup.ThingGroupProperties}
 */
export interface IoTThingGroupThingGroupProperties {
  AttributePayload?: IoTThingGroupAttributePayload;
  ThingGroupDescription?: string;
}
/**
 * Type definition for AWS::IoT::ThingType.ThingTypeProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-thingtype-thingtypeproperties.html | AWS::IoT::ThingType.ThingTypeProperties}
 */
export interface IoTThingTypeThingTypeProperties {
  ThingTypeDescription?: string;
  SearchableAttributes?: any[];
}
/**
 * Type definition for AWS::IoT::TopicRule.Action
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-action.html | AWS::IoT::TopicRule.Action}
 */
export interface IoTTopicRuleAction {
  S3?: IoTTopicRuleS3Action;
  CloudwatchAlarm?: IoTTopicRuleCloudwatchAlarmAction;
  IotEvents?: IoTTopicRuleIotEventsAction;
  Firehose?: IoTTopicRuleFirehoseAction;
  Republish?: IoTTopicRuleRepublishAction;
  Kafka?: IoTTopicRuleKafkaAction;
  StepFunctions?: IoTTopicRuleStepFunctionsAction;
  DynamoDB?: IoTTopicRuleDynamoDBAction;
  Http?: IoTTopicRuleHttpAction;
  OpenSearch?: IoTTopicRuleOpenSearchAction;
  DynamoDBv2?: IoTTopicRuleDynamoDBv2Action;
  CloudwatchMetric?: IoTTopicRuleCloudwatchMetricAction;
  IotSiteWise?: IoTTopicRuleIotSiteWiseAction;
  Elasticsearch?: IoTTopicRuleElasticsearchAction;
  Sqs?: IoTTopicRuleSqsAction;
  Kinesis?: IoTTopicRuleKinesisAction;
  CloudwatchLogs?: IoTTopicRuleCloudwatchLogsAction;
  Timestream?: IoTTopicRuleTimestreamAction;
  IotAnalytics?: IoTTopicRuleIotAnalyticsAction;
  Sns?: IoTTopicRuleSnsAction;
  Lambda?: IoTTopicRuleLambdaAction;
  Location?: IoTTopicRuleLocationAction;
}
/**
 * Type definition for AWS::IoT::TopicRule.AssetPropertyTimestamp
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-assetpropertytimestamp.html | AWS::IoT::TopicRule.AssetPropertyTimestamp}
 */
export interface IoTTopicRuleAssetPropertyTimestamp {
  TimeInSeconds: string;
  OffsetInNanos?: string;
}
/**
 * Type definition for AWS::IoT::TopicRule.AssetPropertyValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-assetpropertyvalue.html | AWS::IoT::TopicRule.AssetPropertyValue}
 */
export interface IoTTopicRuleAssetPropertyValue {
  Quality?: string;
  Value: IoTTopicRuleAssetPropertyVariant;
  Timestamp: IoTTopicRuleAssetPropertyTimestamp;
}
/**
 * Type definition for AWS::IoT::TopicRule.AssetPropertyVariant
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-assetpropertyvariant.html | AWS::IoT::TopicRule.AssetPropertyVariant}
 */
export interface IoTTopicRuleAssetPropertyVariant {
  DoubleValue?: string;
  BooleanValue?: string;
  IntegerValue?: string;
  StringValue?: string;
}
/**
 * Type definition for AWS::IoT::TopicRule.CloudwatchAlarmAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-cloudwatchalarmaction.html | AWS::IoT::TopicRule.CloudwatchAlarmAction}
 */
export interface IoTTopicRuleCloudwatchAlarmAction {
  AlarmName: string;
  StateReason: string;
  StateValue: string;
  RoleArn: string;
}
/**
 * Type definition for AWS::IoT::TopicRule.CloudwatchLogsAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-cloudwatchlogsaction.html | AWS::IoT::TopicRule.CloudwatchLogsAction}
 */
export interface IoTTopicRuleCloudwatchLogsAction {
  BatchMode?: boolean;
  LogGroupName: string;
  RoleArn: string;
}
/**
 * Type definition for AWS::IoT::TopicRule.CloudwatchMetricAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-cloudwatchmetricaction.html | AWS::IoT::TopicRule.CloudwatchMetricAction}
 */
export interface IoTTopicRuleCloudwatchMetricAction {
  MetricName: string;
  MetricValue: string;
  MetricNamespace: string;
  MetricUnit: string;
  RoleArn: string;
  MetricTimestamp?: string;
}
/**
 * Type definition for AWS::IoT::TopicRule.DynamoDBAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-dynamodbaction.html | AWS::IoT::TopicRule.DynamoDBAction}
 */
export interface IoTTopicRuleDynamoDBAction {
  TableName: string;
  PayloadField?: string;
  RangeKeyField?: string;
  HashKeyField: string;
  RangeKeyValue?: string;
  RangeKeyType?: string;
  HashKeyType?: string;
  HashKeyValue: string;
  RoleArn: string;
}
/**
 * Type definition for AWS::IoT::TopicRule.DynamoDBv2Action
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-dynamodbv2action.html | AWS::IoT::TopicRule.DynamoDBv2Action}
 */
export interface IoTTopicRuleDynamoDBv2Action {
  PutItem?: IoTTopicRulePutItemInput;
  RoleArn?: string;
}
/**
 * Type definition for AWS::IoT::TopicRule.ElasticsearchAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-elasticsearchaction.html | AWS::IoT::TopicRule.ElasticsearchAction}
 */
export interface IoTTopicRuleElasticsearchAction {
  Type: string;
  Endpoint: string;
  Index: string;
  Id: string;
  RoleArn: string;
}
/**
 * Type definition for AWS::IoT::TopicRule.FirehoseAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-firehoseaction.html | AWS::IoT::TopicRule.FirehoseAction}
 */
export interface IoTTopicRuleFirehoseAction {
  DeliveryStreamName: string;
  BatchMode?: boolean;
  RoleArn: string;
  Separator?: string;
}
/**
 * Type definition for AWS::IoT::TopicRule.HttpAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-httpaction.html | AWS::IoT::TopicRule.HttpAction}
 */
export interface IoTTopicRuleHttpAction {
  Headers?: any[];
  Auth?: IoTTopicRuleHttpAuthorization;
  ConfirmationUrl?: string;
  Url: string;
}
/**
 * Type definition for AWS::IoT::TopicRule.HttpActionHeader
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-httpactionheader.html | AWS::IoT::TopicRule.HttpActionHeader}
 */
export interface IoTTopicRuleHttpActionHeader {
  Value: string;
  Key: string;
}
/**
 * Type definition for AWS::IoT::TopicRule.HttpAuthorization
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-httpauthorization.html | AWS::IoT::TopicRule.HttpAuthorization}
 */
export interface IoTTopicRuleHttpAuthorization {
  Sigv4?: IoTTopicRuleSigV4Authorization;
}
/**
 * Type definition for AWS::IoT::TopicRule.IotAnalyticsAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-iotanalyticsaction.html | AWS::IoT::TopicRule.IotAnalyticsAction}
 */
export interface IoTTopicRuleIotAnalyticsAction {
  ChannelName: string;
  BatchMode?: boolean;
  RoleArn: string;
}
/**
 * Type definition for AWS::IoT::TopicRule.IotEventsAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-ioteventsaction.html | AWS::IoT::TopicRule.IotEventsAction}
 */
export interface IoTTopicRuleIotEventsAction {
  InputName: string;
  BatchMode?: boolean;
  RoleArn: string;
  MessageId?: string;
}
/**
 * Type definition for AWS::IoT::TopicRule.IotSiteWiseAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-iotsitewiseaction.html | AWS::IoT::TopicRule.IotSiteWiseAction}
 */
export interface IoTTopicRuleIotSiteWiseAction {
  PutAssetPropertyValueEntries: any[];
  RoleArn: string;
}
/**
 * Type definition for AWS::IoT::TopicRule.KafkaAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-kafkaaction.html | AWS::IoT::TopicRule.KafkaAction}
 */
export interface IoTTopicRuleKafkaAction {
  Partition?: string;
  ClientProperties: Record<string, any>;
  Topic: string;
  DestinationArn: string;
  Key?: string;
}
/**
 * Type definition for AWS::IoT::TopicRule.KinesisAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-kinesisaction.html | AWS::IoT::TopicRule.KinesisAction}
 */
export interface IoTTopicRuleKinesisAction {
  StreamName: string;
  PartitionKey?: string;
  RoleArn: string;
}
/**
 * Type definition for AWS::IoT::TopicRule.LambdaAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-lambdaaction.html | AWS::IoT::TopicRule.LambdaAction}
 */
export interface IoTTopicRuleLambdaAction {
  FunctionArn?: string;
}
/**
 * Type definition for AWS::IoT::TopicRule.LocationAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-locationaction.html | AWS::IoT::TopicRule.LocationAction}
 */
export interface IoTTopicRuleLocationAction {
  TrackerName: string;
  DeviceId: string;
  Latitude: string;
  Longitude: string;
  Timestamp?: IoTTopicRuleTimestamp;
  RoleArn: string;
}
/**
 * Type definition for AWS::IoT::TopicRule.OpenSearchAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-opensearchaction.html | AWS::IoT::TopicRule.OpenSearchAction}
 */
export interface IoTTopicRuleOpenSearchAction {
  Type: string;
  Endpoint: string;
  Index: string;
  Id: string;
  RoleArn: string;
}
/**
 * Type definition for AWS::IoT::TopicRule.PutAssetPropertyValueEntry
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-putassetpropertyvalueentry.html | AWS::IoT::TopicRule.PutAssetPropertyValueEntry}
 */
export interface IoTTopicRulePutAssetPropertyValueEntry {
  PropertyValues: any[];
  EntryId?: string;
  PropertyAlias?: string;
  AssetId?: string;
  PropertyId?: string;
}
/**
 * Type definition for AWS::IoT::TopicRule.PutItemInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-putiteminput.html | AWS::IoT::TopicRule.PutItemInput}
 */
export interface IoTTopicRulePutItemInput {
  TableName: string;
}
/**
 * Type definition for AWS::IoT::TopicRule.RepublishAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-republishaction.html | AWS::IoT::TopicRule.RepublishAction}
 */
export interface IoTTopicRuleRepublishAction {
  Qos?: number;
  Headers?: IoTTopicRuleRepublishActionHeaders;
  Topic: string;
  RoleArn: string;
}
/**
 * Type definition for AWS::IoT::TopicRule.RepublishActionHeaders
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-republishactionheaders.html | AWS::IoT::TopicRule.RepublishActionHeaders}
 */
export interface IoTTopicRuleRepublishActionHeaders {
  CorrelationData?: string;
  UserProperties?: any[];
  PayloadFormatIndicator?: string;
  ContentType?: string;
  MessageExpiry?: string;
  ResponseTopic?: string;
}
/**
 * Type definition for AWS::IoT::TopicRule.S3Action
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-s3action.html | AWS::IoT::TopicRule.S3Action}
 */
export interface IoTTopicRuleS3Action {
  BucketName: string;
  CannedAcl?: string;
  Key: string;
  RoleArn: string;
}
/**
 * Type definition for AWS::IoT::TopicRule.SigV4Authorization
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-sigv4authorization.html | AWS::IoT::TopicRule.SigV4Authorization}
 */
export interface IoTTopicRuleSigV4Authorization {
  ServiceName: string;
  SigningRegion: string;
  RoleArn: string;
}
/**
 * Type definition for AWS::IoT::TopicRule.SnsAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-snsaction.html | AWS::IoT::TopicRule.SnsAction}
 */
export interface IoTTopicRuleSnsAction {
  MessageFormat?: string;
  TargetArn: string;
  RoleArn: string;
}
/**
 * Type definition for AWS::IoT::TopicRule.SqsAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-sqsaction.html | AWS::IoT::TopicRule.SqsAction}
 */
export interface IoTTopicRuleSqsAction {
  UseBase64?: boolean;
  RoleArn: string;
  QueueUrl: string;
}
/**
 * Type definition for AWS::IoT::TopicRule.StepFunctionsAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-stepfunctionsaction.html | AWS::IoT::TopicRule.StepFunctionsAction}
 */
export interface IoTTopicRuleStepFunctionsAction {
  ExecutionNamePrefix?: string;
  StateMachineName: string;
  RoleArn: string;
}
/**
 * Type definition for AWS::IoT::TopicRule.Timestamp
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-timestamp.html | AWS::IoT::TopicRule.Timestamp}
 */
export interface IoTTopicRuleTimestamp {
  Value: string;
  Unit?: string;
}
/**
 * Type definition for AWS::IoT::TopicRule.TimestreamAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-timestreamaction.html | AWS::IoT::TopicRule.TimestreamAction}
 */
export interface IoTTopicRuleTimestreamAction {
  TableName: string;
  DatabaseName: string;
  Dimensions: any[];
  Timestamp?: IoTTopicRuleTimestreamTimestamp;
  RoleArn: string;
}
/**
 * Type definition for AWS::IoT::TopicRule.TimestreamDimension
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-timestreamdimension.html | AWS::IoT::TopicRule.TimestreamDimension}
 */
export interface IoTTopicRuleTimestreamDimension {
  Value: string;
  Name: string;
}
/**
 * Type definition for AWS::IoT::TopicRule.TimestreamTimestamp
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-timestreamtimestamp.html | AWS::IoT::TopicRule.TimestreamTimestamp}
 */
export interface IoTTopicRuleTimestreamTimestamp {
  Value: string;
  Unit: string;
}
/**
 * Type definition for AWS::IoT::TopicRule.TopicRulePayload
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-topicrulepayload.html | AWS::IoT::TopicRule.TopicRulePayload}
 */
export interface IoTTopicRuleTopicRulePayload {
  RuleDisabled?: boolean;
  ErrorAction?: IoTTopicRuleAction;
  Description?: string;
  AwsIotSqlVersion?: string;
  Actions: any[];
  Sql: string;
}
/**
 * Type definition for AWS::IoT::TopicRule.UserProperty
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-userproperty.html | AWS::IoT::TopicRule.UserProperty}
 */
export interface IoTTopicRuleUserProperty {
  Value: string;
  Key: string;
}
/**
 * Type definition for AWS::IoT::TopicRuleDestination.HttpUrlDestinationSummary
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicruledestination-httpurldestinationsummary.html | AWS::IoT::TopicRuleDestination.HttpUrlDestinationSummary}
 */
export interface IoTTopicRuleDestinationHttpUrlDestinationSummary {
  ConfirmationUrl?: string;
}
/**
 * Type definition for AWS::IoT::TopicRuleDestination.VpcDestinationProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicruledestination-vpcdestinationproperties.html | AWS::IoT::TopicRuleDestination.VpcDestinationProperties}
 */
export interface IoTTopicRuleDestinationVpcDestinationProperties {
  SecurityGroups?: any[];
  VpcId?: string;
  SubnetIds?: any[];
  RoleArn?: string;
}
/**
 * Type definition for AWS::IoT::AccountAuditConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html | AWS::IoT::AccountAuditConfiguration}
 */
export interface IoTAccountAuditConfigurationProps {
  AccountId: string;
  AuditCheckConfigurations: IoTAccountAuditConfigurationAuditCheckConfigurations;
  AuditNotificationTargetConfigurations?: IoTAccountAuditConfigurationAuditNotificationTargetConfigurations;
  RoleArn: string;
}
/**
 * Resource class for AWS::IoT::AccountAuditConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html | AWS::IoT::AccountAuditConfiguration}
 */
export class IoTAccountAuditConfiguration extends ResourceBase<
  "AWS::IoT::AccountAuditConfiguration",
  IoTAccountAuditConfigurationProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::IoT::AccountAuditConfiguration";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: IoTAccountAuditConfigurationProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTAccountAuditConfiguration.Type,
      IoTAccountAuditConfiguration.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoT::Authorizer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-authorizer.html | AWS::IoT::Authorizer}
 */
export interface IoTAuthorizerProps {
  Status?: string;
  TokenKeyName?: string;
  EnableCachingForHttp?: boolean;
  AuthorizerName?: string;
  TokenSigningPublicKeys?: Record<string, any>;
  SigningDisabled?: boolean;
  Tags?: Tag[];
  AuthorizerFunctionArn: string;
}
/**
 * Attributes type definition for AWS::IoT::Authorizer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-authorizer.html | AWS::IoT::Authorizer}
 */
export interface IoTAuthorizerAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::IoT::Authorizer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-authorizer.html | AWS::IoT::Authorizer}
 */
export class IoTAuthorizer extends ResourceBase<
  "AWS::IoT::Authorizer",
  IoTAuthorizerProps,
  IoTAuthorizerAttribs
> {
  public static readonly Type = "AWS::IoT::Authorizer";
  public static readonly AttributeNames: readonly (keyof IoTAuthorizerAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: IoTAuthorizerProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTAuthorizer.Type,
      IoTAuthorizer.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoT::BillingGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-billinggroup.html | AWS::IoT::BillingGroup}
 */
export interface IoTBillingGroupProps {
  BillingGroupName?: string;
  BillingGroupProperties?: IoTBillingGroupBillingGroupProperties;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::IoT::BillingGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-billinggroup.html | AWS::IoT::BillingGroup}
 */
export interface IoTBillingGroupAttribs {
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::IoT::BillingGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-billinggroup.html | AWS::IoT::BillingGroup}
 */
export class IoTBillingGroup extends ResourceBase<
  "AWS::IoT::BillingGroup",
  IoTBillingGroupProps,
  IoTBillingGroupAttribs
> {
  public static readonly Type = "AWS::IoT::BillingGroup";
  public static readonly AttributeNames: readonly (keyof IoTBillingGroupAttribs)[] =
    ["Id", "Arn"];
  constructor(
    logicalId: string,
    properties: IoTBillingGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTBillingGroup.Type,
      IoTBillingGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoT::CACertificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-cacertificate.html | AWS::IoT::CACertificate}
 */
export interface IoTCACertificateProps {
  Status: string;
  CACertificatePem: string;
  CertificateMode?: string;
  AutoRegistrationStatus?: string;
  RemoveAutoRegistration?: boolean;
  RegistrationConfig?: IoTCACertificateRegistrationConfig;
  VerificationCertificatePem?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::IoT::CACertificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-cacertificate.html | AWS::IoT::CACertificate}
 */
export interface IoTCACertificateAttribs {
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::IoT::CACertificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-cacertificate.html | AWS::IoT::CACertificate}
 */
export class IoTCACertificate extends ResourceBase<
  "AWS::IoT::CACertificate",
  IoTCACertificateProps,
  IoTCACertificateAttribs
> {
  public static readonly Type = "AWS::IoT::CACertificate";
  public static readonly AttributeNames: readonly (keyof IoTCACertificateAttribs)[] =
    ["Id", "Arn"];
  constructor(
    logicalId: string,
    properties: IoTCACertificateProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTCACertificate.Type,
      IoTCACertificate.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoT::Certificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-certificate.html | AWS::IoT::Certificate}
 */
export interface IoTCertificateProps {
  Status: string;
  CACertificatePem?: string;
  CertificateMode?: string;
  CertificateSigningRequest?: string;
  CertificatePem?: string;
}
/**
 * Attributes type definition for AWS::IoT::Certificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-certificate.html | AWS::IoT::Certificate}
 */
export interface IoTCertificateAttribs {
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::IoT::Certificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-certificate.html | AWS::IoT::Certificate}
 */
export class IoTCertificate extends ResourceBase<
  "AWS::IoT::Certificate",
  IoTCertificateProps,
  IoTCertificateAttribs
> {
  public static readonly Type = "AWS::IoT::Certificate";
  public static readonly AttributeNames: readonly (keyof IoTCertificateAttribs)[] =
    ["Id", "Arn"];
  constructor(
    logicalId: string,
    properties: IoTCertificateProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTCertificate.Type,
      IoTCertificate.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoT::CustomMetric
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-custommetric.html | AWS::IoT::CustomMetric}
 */
export interface IoTCustomMetricProps {
  MetricName?: string;
  MetricType: string;
  DisplayName?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::IoT::CustomMetric
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-custommetric.html | AWS::IoT::CustomMetric}
 */
export interface IoTCustomMetricAttribs {
  MetricArn?: string;
}
/**
 * Resource class for AWS::IoT::CustomMetric
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-custommetric.html | AWS::IoT::CustomMetric}
 */
export class IoTCustomMetric extends ResourceBase<
  "AWS::IoT::CustomMetric",
  IoTCustomMetricProps,
  IoTCustomMetricAttribs
> {
  public static readonly Type = "AWS::IoT::CustomMetric";
  public static readonly AttributeNames: readonly (keyof IoTCustomMetricAttribs)[] =
    ["MetricArn"];
  constructor(
    logicalId: string,
    properties: IoTCustomMetricProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTCustomMetric.Type,
      IoTCustomMetric.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoT::Dimension
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-dimension.html | AWS::IoT::Dimension}
 */
export interface IoTDimensionProps {
  Type: string;
  StringValues: any[];
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::IoT::Dimension
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-dimension.html | AWS::IoT::Dimension}
 */
export interface IoTDimensionAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::IoT::Dimension
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-dimension.html | AWS::IoT::Dimension}
 */
export class IoTDimension extends ResourceBase<
  "AWS::IoT::Dimension",
  IoTDimensionProps,
  IoTDimensionAttribs
> {
  public static readonly Type = "AWS::IoT::Dimension";
  public static readonly AttributeNames: readonly (keyof IoTDimensionAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: IoTDimensionProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTDimension.Type,
      IoTDimension.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoT::DomainConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html | AWS::IoT::DomainConfiguration}
 */
export interface IoTDomainConfigurationProps {
  DomainConfigurationName?: string;
  DomainName?: string;
  ServiceType?: string;
  DomainConfigurationStatus?: string;
  ValidationCertificateArn?: string;
  TlsConfig?: IoTDomainConfigurationTlsConfig;
  ServerCertificateArns?: any[];
  AuthorizerConfig?: IoTDomainConfigurationAuthorizerConfig;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::IoT::DomainConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html | AWS::IoT::DomainConfiguration}
 */
export interface IoTDomainConfigurationAttribs {
  DomainType?: string;
  ServerCertificates?: any[];
  Arn?: string;
}
/**
 * Resource class for AWS::IoT::DomainConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html | AWS::IoT::DomainConfiguration}
 */
export class IoTDomainConfiguration extends ResourceBase<
  "AWS::IoT::DomainConfiguration",
  IoTDomainConfigurationProps,
  IoTDomainConfigurationAttribs
> {
  public static readonly Type = "AWS::IoT::DomainConfiguration";
  public static readonly AttributeNames: readonly (keyof IoTDomainConfigurationAttribs)[] =
    ["DomainType", "ServerCertificates", "Arn"];
  constructor(
    logicalId: string,
    properties: IoTDomainConfigurationProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTDomainConfiguration.Type,
      IoTDomainConfiguration.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoT::FleetMetric
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-fleetmetric.html | AWS::IoT::FleetMetric}
 */
export interface IoTFleetMetricProps {
  IndexName?: string;
  MetricName: string;
  Description?: string;
  QueryString?: string;
  Period?: number;
  QueryVersion?: string;
  Unit?: string;
  AggregationType?: IoTFleetMetricAggregationType;
  AggregationField?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::IoT::FleetMetric
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-fleetmetric.html | AWS::IoT::FleetMetric}
 */
export interface IoTFleetMetricAttribs {
  MetricArn?: string;
  CreationDate?: number;
  LastModifiedDate?: number;
  Version?: number;
}
/**
 * Resource class for AWS::IoT::FleetMetric
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-fleetmetric.html | AWS::IoT::FleetMetric}
 */
export class IoTFleetMetric extends ResourceBase<
  "AWS::IoT::FleetMetric",
  IoTFleetMetricProps,
  IoTFleetMetricAttribs
> {
  public static readonly Type = "AWS::IoT::FleetMetric";
  public static readonly AttributeNames: readonly (keyof IoTFleetMetricAttribs)[] =
    ["MetricArn", "CreationDate", "LastModifiedDate", "Version"];
  constructor(
    logicalId: string,
    properties: IoTFleetMetricProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTFleetMetric.Type,
      IoTFleetMetric.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoT::JobTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html | AWS::IoT::JobTemplate}
 */
export interface IoTJobTemplateProps {
  TimeoutConfig?: IoTJobTemplateTimeoutConfig;
  Description: string;
  JobExecutionsRetryConfig?: IoTJobTemplateJobExecutionsRetryConfig;
  AbortConfig?: IoTJobTemplateAbortConfig;
  JobTemplateId: string;
  Document?: string;
  DestinationPackageVersions?: any[];
  JobArn?: string;
  JobExecutionsRolloutConfig?: IoTJobTemplateJobExecutionsRolloutConfig;
  DocumentSource?: string;
  MaintenanceWindows?: any[];
  PresignedUrlConfig?: IoTJobTemplatePresignedUrlConfig;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::IoT::JobTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html | AWS::IoT::JobTemplate}
 */
export interface IoTJobTemplateAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::IoT::JobTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html | AWS::IoT::JobTemplate}
 */
export class IoTJobTemplate extends ResourceBase<
  "AWS::IoT::JobTemplate",
  IoTJobTemplateProps,
  IoTJobTemplateAttribs
> {
  public static readonly Type = "AWS::IoT::JobTemplate";
  public static readonly AttributeNames: readonly (keyof IoTJobTemplateAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: IoTJobTemplateProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTJobTemplate.Type,
      IoTJobTemplate.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoT::Logging
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-logging.html | AWS::IoT::Logging}
 */
export interface IoTLoggingProps {
  AccountId: string;
  RoleArn: string;
  DefaultLogLevel: string;
}
/**
 * Resource class for AWS::IoT::Logging
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-logging.html | AWS::IoT::Logging}
 */
export class IoTLogging extends ResourceBase<
  "AWS::IoT::Logging",
  IoTLoggingProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::IoT::Logging";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: IoTLoggingProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTLogging.Type,
      IoTLogging.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoT::MitigationAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html | AWS::IoT::MitigationAction}
 */
export interface IoTMitigationActionProps {
  ActionName?: string;
  ActionParams: IoTMitigationActionActionParams;
  RoleArn: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::IoT::MitigationAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html | AWS::IoT::MitigationAction}
 */
export interface IoTMitigationActionAttribs {
  MitigationActionArn?: string;
  MitigationActionId?: string;
}
/**
 * Resource class for AWS::IoT::MitigationAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html | AWS::IoT::MitigationAction}
 */
export class IoTMitigationAction extends ResourceBase<
  "AWS::IoT::MitigationAction",
  IoTMitigationActionProps,
  IoTMitigationActionAttribs
> {
  public static readonly Type = "AWS::IoT::MitigationAction";
  public static readonly AttributeNames: readonly (keyof IoTMitigationActionAttribs)[] =
    ["MitigationActionArn", "MitigationActionId"];
  constructor(
    logicalId: string,
    properties: IoTMitigationActionProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTMitigationAction.Type,
      IoTMitigationAction.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoT::Policy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-policy.html | AWS::IoT::Policy}
 */
export interface IoTPolicyProps {
  PolicyName?: string;
  PolicyDocument: object;
}
/**
 * Attributes type definition for AWS::IoT::Policy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-policy.html | AWS::IoT::Policy}
 */
export interface IoTPolicyAttribs {
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::IoT::Policy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-policy.html | AWS::IoT::Policy}
 */
export class IoTPolicy extends ResourceBase<
  "AWS::IoT::Policy",
  IoTPolicyProps,
  IoTPolicyAttribs
> {
  public static readonly Type = "AWS::IoT::Policy";
  public static readonly AttributeNames: readonly (keyof IoTPolicyAttribs)[] = [
    "Id",
    "Arn",
  ];
  constructor(
    logicalId: string,
    properties: IoTPolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTPolicy.Type,
      IoTPolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoT::PolicyPrincipalAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-policyprincipalattachment.html | AWS::IoT::PolicyPrincipalAttachment}
 */
export interface IoTPolicyPrincipalAttachmentProps {
  PolicyName: string;
  Principal: string;
}
/**
 * Resource class for AWS::IoT::PolicyPrincipalAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-policyprincipalattachment.html | AWS::IoT::PolicyPrincipalAttachment}
 */
export class IoTPolicyPrincipalAttachment extends ResourceBase<
  "AWS::IoT::PolicyPrincipalAttachment",
  IoTPolicyPrincipalAttachmentProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::IoT::PolicyPrincipalAttachment";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: IoTPolicyPrincipalAttachmentProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTPolicyPrincipalAttachment.Type,
      IoTPolicyPrincipalAttachment.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoT::ProvisioningTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-provisioningtemplate.html | AWS::IoT::ProvisioningTemplate}
 */
export interface IoTProvisioningTemplateProps {
  ProvisioningRoleArn: string;
  Description?: string;
  PreProvisioningHook?: IoTProvisioningTemplateProvisioningHook;
  TemplateName?: string;
  Enabled?: boolean;
  TemplateBody: string;
  TemplateType?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::IoT::ProvisioningTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-provisioningtemplate.html | AWS::IoT::ProvisioningTemplate}
 */
export interface IoTProvisioningTemplateAttribs {
  TemplateArn?: string;
}
/**
 * Resource class for AWS::IoT::ProvisioningTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-provisioningtemplate.html | AWS::IoT::ProvisioningTemplate}
 */
export class IoTProvisioningTemplate extends ResourceBase<
  "AWS::IoT::ProvisioningTemplate",
  IoTProvisioningTemplateProps,
  IoTProvisioningTemplateAttribs
> {
  public static readonly Type = "AWS::IoT::ProvisioningTemplate";
  public static readonly AttributeNames: readonly (keyof IoTProvisioningTemplateAttribs)[] =
    ["TemplateArn"];
  constructor(
    logicalId: string,
    properties: IoTProvisioningTemplateProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTProvisioningTemplate.Type,
      IoTProvisioningTemplate.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoT::ResourceSpecificLogging
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-resourcespecificlogging.html | AWS::IoT::ResourceSpecificLogging}
 */
export interface IoTResourceSpecificLoggingProps {
  TargetType: string;
  TargetName: string;
  LogLevel: string;
}
/**
 * Attributes type definition for AWS::IoT::ResourceSpecificLogging
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-resourcespecificlogging.html | AWS::IoT::ResourceSpecificLogging}
 */
export interface IoTResourceSpecificLoggingAttribs {
  TargetId?: string;
}
/**
 * Resource class for AWS::IoT::ResourceSpecificLogging
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-resourcespecificlogging.html | AWS::IoT::ResourceSpecificLogging}
 */
export class IoTResourceSpecificLogging extends ResourceBase<
  "AWS::IoT::ResourceSpecificLogging",
  IoTResourceSpecificLoggingProps,
  IoTResourceSpecificLoggingAttribs
> {
  public static readonly Type = "AWS::IoT::ResourceSpecificLogging";
  public static readonly AttributeNames: readonly (keyof IoTResourceSpecificLoggingAttribs)[] =
    ["TargetId"];
  constructor(
    logicalId: string,
    properties: IoTResourceSpecificLoggingProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTResourceSpecificLogging.Type,
      IoTResourceSpecificLogging.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoT::RoleAlias
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-rolealias.html | AWS::IoT::RoleAlias}
 */
export interface IoTRoleAliasProps {
  RoleAlias?: string;
  CredentialDurationSeconds?: number;
  RoleArn: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::IoT::RoleAlias
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-rolealias.html | AWS::IoT::RoleAlias}
 */
export interface IoTRoleAliasAttribs {
  RoleAliasArn?: string;
}
/**
 * Resource class for AWS::IoT::RoleAlias
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-rolealias.html | AWS::IoT::RoleAlias}
 */
export class IoTRoleAlias extends ResourceBase<
  "AWS::IoT::RoleAlias",
  IoTRoleAliasProps,
  IoTRoleAliasAttribs
> {
  public static readonly Type = "AWS::IoT::RoleAlias";
  public static readonly AttributeNames: readonly (keyof IoTRoleAliasAttribs)[] =
    ["RoleAliasArn"];
  constructor(
    logicalId: string,
    properties: IoTRoleAliasProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTRoleAlias.Type,
      IoTRoleAlias.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoT::ScheduledAudit
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-scheduledaudit.html | AWS::IoT::ScheduledAudit}
 */
export interface IoTScheduledAuditProps {
  DayOfWeek?: string;
  TargetCheckNames: any[];
  ScheduledAuditName?: string;
  DayOfMonth?: string;
  Frequency: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::IoT::ScheduledAudit
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-scheduledaudit.html | AWS::IoT::ScheduledAudit}
 */
export interface IoTScheduledAuditAttribs {
  ScheduledAuditArn?: string;
}
/**
 * Resource class for AWS::IoT::ScheduledAudit
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-scheduledaudit.html | AWS::IoT::ScheduledAudit}
 */
export class IoTScheduledAudit extends ResourceBase<
  "AWS::IoT::ScheduledAudit",
  IoTScheduledAuditProps,
  IoTScheduledAuditAttribs
> {
  public static readonly Type = "AWS::IoT::ScheduledAudit";
  public static readonly AttributeNames: readonly (keyof IoTScheduledAuditAttribs)[] =
    ["ScheduledAuditArn"];
  constructor(
    logicalId: string,
    properties: IoTScheduledAuditProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTScheduledAudit.Type,
      IoTScheduledAudit.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoT::SecurityProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html | AWS::IoT::SecurityProfile}
 */
export interface IoTSecurityProfileProps {
  AdditionalMetricsToRetainV2?: any[];
  SecurityProfileDescription?: string;
  Behaviors?: any[];
  SecurityProfileName?: string;
  AlertTargets?: Record<string, any>;
  TargetArns?: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::IoT::SecurityProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html | AWS::IoT::SecurityProfile}
 */
export interface IoTSecurityProfileAttribs {
  SecurityProfileArn?: string;
}
/**
 * Resource class for AWS::IoT::SecurityProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html | AWS::IoT::SecurityProfile}
 */
export class IoTSecurityProfile extends ResourceBase<
  "AWS::IoT::SecurityProfile",
  IoTSecurityProfileProps,
  IoTSecurityProfileAttribs
> {
  public static readonly Type = "AWS::IoT::SecurityProfile";
  public static readonly AttributeNames: readonly (keyof IoTSecurityProfileAttribs)[] =
    ["SecurityProfileArn"];
  constructor(
    logicalId: string,
    properties: IoTSecurityProfileProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTSecurityProfile.Type,
      IoTSecurityProfile.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoT::SoftwarePackage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-softwarepackage.html | AWS::IoT::SoftwarePackage}
 */
export interface IoTSoftwarePackageProps {
  Description?: string;
  PackageName?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::IoT::SoftwarePackage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-softwarepackage.html | AWS::IoT::SoftwarePackage}
 */
export interface IoTSoftwarePackageAttribs {
  PackageArn?: string;
}
/**
 * Resource class for AWS::IoT::SoftwarePackage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-softwarepackage.html | AWS::IoT::SoftwarePackage}
 */
export class IoTSoftwarePackage extends ResourceBase<
  "AWS::IoT::SoftwarePackage",
  IoTSoftwarePackageProps,
  IoTSoftwarePackageAttribs
> {
  public static readonly Type = "AWS::IoT::SoftwarePackage";
  public static readonly AttributeNames: readonly (keyof IoTSoftwarePackageAttribs)[] =
    ["PackageArn"];
  constructor(
    logicalId: string,
    properties: IoTSoftwarePackageProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTSoftwarePackage.Type,
      IoTSoftwarePackage.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoT::SoftwarePackageVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-softwarepackageversion.html | AWS::IoT::SoftwarePackageVersion}
 */
export interface IoTSoftwarePackageVersionProps {
  Description?: string;
  PackageName: string;
  Attributes?: Record<string, any>;
  VersionName?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::IoT::SoftwarePackageVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-softwarepackageversion.html | AWS::IoT::SoftwarePackageVersion}
 */
export interface IoTSoftwarePackageVersionAttribs {
  PackageVersionArn?: string;
  Status?: string;
  ErrorReason?: string;
}
/**
 * Resource class for AWS::IoT::SoftwarePackageVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-softwarepackageversion.html | AWS::IoT::SoftwarePackageVersion}
 */
export class IoTSoftwarePackageVersion extends ResourceBase<
  "AWS::IoT::SoftwarePackageVersion",
  IoTSoftwarePackageVersionProps,
  IoTSoftwarePackageVersionAttribs
> {
  public static readonly Type = "AWS::IoT::SoftwarePackageVersion";
  public static readonly AttributeNames: readonly (keyof IoTSoftwarePackageVersionAttribs)[] =
    ["PackageVersionArn", "Status", "ErrorReason"];
  constructor(
    logicalId: string,
    properties: IoTSoftwarePackageVersionProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTSoftwarePackageVersion.Type,
      IoTSoftwarePackageVersion.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoT::Thing
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thing.html | AWS::IoT::Thing}
 */
export interface IoTThingProps {
  AttributePayload?: IoTThingAttributePayload;
  ThingName?: string;
}
/**
 * Attributes type definition for AWS::IoT::Thing
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thing.html | AWS::IoT::Thing}
 */
export interface IoTThingAttribs {
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::IoT::Thing
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thing.html | AWS::IoT::Thing}
 */
export class IoTThing extends ResourceBase<
  "AWS::IoT::Thing",
  IoTThingProps,
  IoTThingAttribs
> {
  public static readonly Type = "AWS::IoT::Thing";
  public static readonly AttributeNames: readonly (keyof IoTThingAttribs)[] = [
    "Id",
    "Arn",
  ];
  constructor(
    logicalId: string,
    properties: IoTThingProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTThing.Type,
      IoTThing.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoT::ThingGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thinggroup.html | AWS::IoT::ThingGroup}
 */
export interface IoTThingGroupProps {
  ParentGroupName?: string;
  ThingGroupName?: string;
  ThingGroupProperties?: IoTThingGroupThingGroupProperties;
  QueryString?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::IoT::ThingGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thinggroup.html | AWS::IoT::ThingGroup}
 */
export interface IoTThingGroupAttribs {
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::IoT::ThingGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thinggroup.html | AWS::IoT::ThingGroup}
 */
export class IoTThingGroup extends ResourceBase<
  "AWS::IoT::ThingGroup",
  IoTThingGroupProps,
  IoTThingGroupAttribs
> {
  public static readonly Type = "AWS::IoT::ThingGroup";
  public static readonly AttributeNames: readonly (keyof IoTThingGroupAttribs)[] =
    ["Id", "Arn"];
  constructor(
    logicalId: string,
    properties: IoTThingGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTThingGroup.Type,
      IoTThingGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoT::ThingPrincipalAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingprincipalattachment.html | AWS::IoT::ThingPrincipalAttachment}
 */
export interface IoTThingPrincipalAttachmentProps {
  Principal: string;
  ThingName: string;
}
/**
 * Resource class for AWS::IoT::ThingPrincipalAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingprincipalattachment.html | AWS::IoT::ThingPrincipalAttachment}
 */
export class IoTThingPrincipalAttachment extends ResourceBase<
  "AWS::IoT::ThingPrincipalAttachment",
  IoTThingPrincipalAttachmentProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::IoT::ThingPrincipalAttachment";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: IoTThingPrincipalAttachmentProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTThingPrincipalAttachment.Type,
      IoTThingPrincipalAttachment.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoT::ThingType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingtype.html | AWS::IoT::ThingType}
 */
export interface IoTThingTypeProps {
  DeprecateThingType?: boolean;
  ThingTypeName?: string;
  ThingTypeProperties?: IoTThingTypeThingTypeProperties;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::IoT::ThingType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingtype.html | AWS::IoT::ThingType}
 */
export interface IoTThingTypeAttribs {
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::IoT::ThingType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingtype.html | AWS::IoT::ThingType}
 */
export class IoTThingType extends ResourceBase<
  "AWS::IoT::ThingType",
  IoTThingTypeProps,
  IoTThingTypeAttribs
> {
  public static readonly Type = "AWS::IoT::ThingType";
  public static readonly AttributeNames: readonly (keyof IoTThingTypeAttribs)[] =
    ["Id", "Arn"];
  constructor(
    logicalId: string,
    properties: IoTThingTypeProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTThingType.Type,
      IoTThingType.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoT::TopicRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html | AWS::IoT::TopicRule}
 */
export interface IoTTopicRuleProps {
  TopicRulePayload: IoTTopicRuleTopicRulePayload;
  RuleName?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::IoT::TopicRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html | AWS::IoT::TopicRule}
 */
export interface IoTTopicRuleAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::IoT::TopicRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html | AWS::IoT::TopicRule}
 */
export class IoTTopicRule extends ResourceBase<
  "AWS::IoT::TopicRule",
  IoTTopicRuleProps,
  IoTTopicRuleAttribs
> {
  public static readonly Type = "AWS::IoT::TopicRule";
  public static readonly AttributeNames: readonly (keyof IoTTopicRuleAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: IoTTopicRuleProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTTopicRule.Type,
      IoTTopicRule.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoT::TopicRuleDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicruledestination.html | AWS::IoT::TopicRuleDestination}
 */
export interface IoTTopicRuleDestinationProps {
  Status?: string;
  HttpUrlProperties?: IoTTopicRuleDestinationHttpUrlDestinationSummary;
  VpcProperties?: IoTTopicRuleDestinationVpcDestinationProperties;
}
/**
 * Attributes type definition for AWS::IoT::TopicRuleDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicruledestination.html | AWS::IoT::TopicRuleDestination}
 */
export interface IoTTopicRuleDestinationAttribs {
  StatusReason?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::IoT::TopicRuleDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicruledestination.html | AWS::IoT::TopicRuleDestination}
 */
export class IoTTopicRuleDestination extends ResourceBase<
  "AWS::IoT::TopicRuleDestination",
  IoTTopicRuleDestinationProps,
  IoTTopicRuleDestinationAttribs
> {
  public static readonly Type = "AWS::IoT::TopicRuleDestination";
  public static readonly AttributeNames: readonly (keyof IoTTopicRuleDestinationAttribs)[] =
    ["StatusReason", "Arn"];
  constructor(
    logicalId: string,
    properties: IoTTopicRuleDestinationProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTTopicRuleDestination.Type,
      IoTTopicRuleDestination.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
