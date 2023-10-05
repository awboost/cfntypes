import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Config::ConfigRule.Compliance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-compliance.html | AWS::Config::ConfigRule.Compliance}
 */
export interface ConfigConfigRuleCompliance {
  Type?: string;
}
/**
 * Type definition for AWS::Config::ConfigRule.CustomPolicyDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-custompolicydetails.html | AWS::Config::ConfigRule.CustomPolicyDetails}
 */
export interface ConfigConfigRuleCustomPolicyDetails {
  EnableDebugLogDelivery?: boolean;
  PolicyText?: string;
  PolicyRuntime?: string;
}
/**
 * Type definition for AWS::Config::ConfigRule.EvaluationModeConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-evaluationmodeconfiguration.html | AWS::Config::ConfigRule.EvaluationModeConfiguration}
 */
export interface ConfigConfigRuleEvaluationModeConfiguration {
  Mode?: string;
}
/**
 * Type definition for AWS::Config::ConfigRule.Scope
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-scope.html | AWS::Config::ConfigRule.Scope}
 */
export interface ConfigConfigRuleScope {
  ComplianceResourceId?: string;
  TagKey?: string;
  ComplianceResourceTypes?: any[];
  TagValue?: string;
}
/**
 * Type definition for AWS::Config::ConfigRule.Source
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-source.html | AWS::Config::ConfigRule.Source}
 */
export interface ConfigConfigRuleSource {
  Owner: string;
  CustomPolicyDetails?: ConfigConfigRuleCustomPolicyDetails;
  SourceIdentifier?: string;
  SourceDetails?: any[];
}
/**
 * Type definition for AWS::Config::ConfigRule.SourceDetail
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-sourcedetail.html | AWS::Config::ConfigRule.SourceDetail}
 */
export interface ConfigConfigRuleSourceDetail {
  EventSource: string;
  MaximumExecutionFrequency?: string;
  MessageType: string;
}
/**
 * Type definition for AWS::Config::ConfigurationAggregator.AccountAggregationSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationaggregator-accountaggregationsource.html | AWS::Config::ConfigurationAggregator.AccountAggregationSource}
 */
export interface ConfigConfigurationAggregatorAccountAggregationSource {
  AllAwsRegions?: boolean;
  AwsRegions?: any[];
  AccountIds: any[];
}
/**
 * Type definition for AWS::Config::ConfigurationAggregator.OrganizationAggregationSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationaggregator-organizationaggregationsource.html | AWS::Config::ConfigurationAggregator.OrganizationAggregationSource}
 */
export interface ConfigConfigurationAggregatorOrganizationAggregationSource {
  AllAwsRegions?: boolean;
  AwsRegions?: any[];
  RoleArn: string;
}
/**
 * Type definition for AWS::Config::ConfigurationRecorder.ExclusionByResourceTypes
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationrecorder-exclusionbyresourcetypes.html | AWS::Config::ConfigurationRecorder.ExclusionByResourceTypes}
 */
export interface ConfigConfigurationRecorderExclusionByResourceTypes {
  ResourceTypes: any[];
}
/**
 * Type definition for AWS::Config::ConfigurationRecorder.RecordingGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationrecorder-recordinggroup.html | AWS::Config::ConfigurationRecorder.RecordingGroup}
 */
export interface ConfigConfigurationRecorderRecordingGroup {
  AllSupported?: boolean;
  ExclusionByResourceTypes?: ConfigConfigurationRecorderExclusionByResourceTypes;
  IncludeGlobalResourceTypes?: boolean;
  RecordingStrategy?: ConfigConfigurationRecorderRecordingStrategy;
  ResourceTypes?: any[];
}
/**
 * Type definition for AWS::Config::ConfigurationRecorder.RecordingStrategy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationrecorder-recordingstrategy.html | AWS::Config::ConfigurationRecorder.RecordingStrategy}
 */
export interface ConfigConfigurationRecorderRecordingStrategy {
  UseOnly: string;
}
/**
 * Type definition for AWS::Config::ConformancePack.ConformancePackInputParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-conformancepack-conformancepackinputparameter.html | AWS::Config::ConformancePack.ConformancePackInputParameter}
 */
export interface ConfigConformancePackConformancePackInputParameter {
  ParameterValue: string;
  ParameterName: string;
}
/**
 * Type definition for AWS::Config::ConformancePack.TemplateSSMDocumentDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-conformancepack-templatessmdocumentdetails.html | AWS::Config::ConformancePack.TemplateSSMDocumentDetails}
 */
export interface ConfigConformancePackTemplateSSMDocumentDetails {
  DocumentVersion?: string;
  DocumentName?: string;
}
/**
 * Type definition for AWS::Config::DeliveryChannel.ConfigSnapshotDeliveryProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-deliverychannel-configsnapshotdeliveryproperties.html | AWS::Config::DeliveryChannel.ConfigSnapshotDeliveryProperties}
 */
export interface ConfigDeliveryChannelConfigSnapshotDeliveryProperties {
  DeliveryFrequency?: string;
}
/**
 * Type definition for AWS::Config::OrganizationConfigRule.OrganizationCustomPolicyRuleMetadata
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationcustompolicyrulemetadata.html | AWS::Config::OrganizationConfigRule.OrganizationCustomPolicyRuleMetadata}
 */
export interface ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata {
  TagKeyScope?: string;
  TagValueScope?: string;
  Runtime: string;
  PolicyText: string;
  Description?: string;
  ResourceIdScope?: string;
  OrganizationConfigRuleTriggerTypes?: any[];
  DebugLogDeliveryAccounts?: any[];
  ResourceTypesScope?: any[];
  MaximumExecutionFrequency?: string;
  InputParameters?: string;
}
/**
 * Type definition for AWS::Config::OrganizationConfigRule.OrganizationCustomRuleMetadata
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationcustomrulemetadata.html | AWS::Config::OrganizationConfigRule.OrganizationCustomRuleMetadata}
 */
export interface ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata {
  TagKeyScope?: string;
  TagValueScope?: string;
  Description?: string;
  ResourceIdScope?: string;
  LambdaFunctionArn: string;
  OrganizationConfigRuleTriggerTypes: any[];
  ResourceTypesScope?: any[];
  MaximumExecutionFrequency?: string;
  InputParameters?: string;
}
/**
 * Type definition for AWS::Config::OrganizationConfigRule.OrganizationManagedRuleMetadata
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationmanagedrulemetadata.html | AWS::Config::OrganizationConfigRule.OrganizationManagedRuleMetadata}
 */
export interface ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata {
  TagKeyScope?: string;
  TagValueScope?: string;
  Description?: string;
  ResourceIdScope?: string;
  RuleIdentifier: string;
  ResourceTypesScope?: any[];
  MaximumExecutionFrequency?: string;
  InputParameters?: string;
}
/**
 * Type definition for AWS::Config::OrganizationConformancePack.ConformancePackInputParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconformancepack-conformancepackinputparameter.html | AWS::Config::OrganizationConformancePack.ConformancePackInputParameter}
 */
export interface ConfigOrganizationConformancePackConformancePackInputParameter {
  ParameterValue: string;
  ParameterName: string;
}
/**
 * Type definition for AWS::Config::RemediationConfiguration.ExecutionControls
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-remediationconfiguration-executioncontrols.html | AWS::Config::RemediationConfiguration.ExecutionControls}
 */
export interface ConfigRemediationConfigurationExecutionControls {
  SsmControls?: ConfigRemediationConfigurationSsmControls;
}
/**
 * Type definition for AWS::Config::RemediationConfiguration.RemediationParameterValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-remediationconfiguration-remediationparametervalue.html | AWS::Config::RemediationConfiguration.RemediationParameterValue}
 */
export interface ConfigRemediationConfigurationRemediationParameterValue {
  ResourceValue?: ConfigRemediationConfigurationResourceValue;
  StaticValue?: ConfigRemediationConfigurationStaticValue;
}
/**
 * Type definition for AWS::Config::RemediationConfiguration.ResourceValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-remediationconfiguration-resourcevalue.html | AWS::Config::RemediationConfiguration.ResourceValue}
 */
export interface ConfigRemediationConfigurationResourceValue {
  Value?: string;
}
/**
 * Type definition for AWS::Config::RemediationConfiguration.SsmControls
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-remediationconfiguration-ssmcontrols.html | AWS::Config::RemediationConfiguration.SsmControls}
 */
export interface ConfigRemediationConfigurationSsmControls {
  ErrorPercentage?: number;
  ConcurrentExecutionRatePercentage?: number;
}
/**
 * Type definition for AWS::Config::RemediationConfiguration.StaticValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-remediationconfiguration-staticvalue.html | AWS::Config::RemediationConfiguration.StaticValue}
 */
export interface ConfigRemediationConfigurationStaticValue {
  Values?: any[];
}
/**
 * Type definition for AWS::Config::AggregationAuthorization
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-aggregationauthorization.html | AWS::Config::AggregationAuthorization}
 */
export interface ConfigAggregationAuthorizationProps {
  AuthorizedAccountId: string;
  AuthorizedAwsRegion: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::Config::AggregationAuthorization
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-aggregationauthorization.html | AWS::Config::AggregationAuthorization}
 */
export interface ConfigAggregationAuthorizationAttribs {
  AggregationAuthorizationArn?: string;
}
/**
 * Resource class for AWS::Config::AggregationAuthorization
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-aggregationauthorization.html | AWS::Config::AggregationAuthorization}
 */
export class ConfigAggregationAuthorization extends ResourceBase<
  "AWS::Config::AggregationAuthorization",
  ConfigAggregationAuthorizationProps,
  ConfigAggregationAuthorizationAttribs
> {
  public static readonly Type = "AWS::Config::AggregationAuthorization";
  public static readonly AttributeNames: readonly (keyof ConfigAggregationAuthorizationAttribs)[] =
    ["AggregationAuthorizationArn"];
  constructor(
    logicalId: string,
    properties: ConfigAggregationAuthorizationProps,
    options?: ResourceOptions,
  ) {
    super(
      ConfigAggregationAuthorization.Type,
      ConfigAggregationAuthorization.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Config::ConfigRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configrule.html | AWS::Config::ConfigRule}
 */
export interface ConfigConfigRuleProps {
  EvaluationModes?: any[];
  Description?: string;
  Scope?: ConfigConfigRuleScope;
  Compliance?: ConfigConfigRuleCompliance;
  ConfigRuleName?: string;
  MaximumExecutionFrequency?: string;
  Source: ConfigConfigRuleSource;
  InputParameters?: object;
}
/**
 * Attributes type definition for AWS::Config::ConfigRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configrule.html | AWS::Config::ConfigRule}
 */
export interface ConfigConfigRuleAttribs {
  ConfigRuleId?: string;
  "Compliance.Type"?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::Config::ConfigRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configrule.html | AWS::Config::ConfigRule}
 */
export class ConfigConfigRule extends ResourceBase<
  "AWS::Config::ConfigRule",
  ConfigConfigRuleProps,
  ConfigConfigRuleAttribs
> {
  public static readonly Type = "AWS::Config::ConfigRule";
  public static readonly AttributeNames: readonly (keyof ConfigConfigRuleAttribs)[] =
    ["ConfigRuleId", "Compliance.Type", "Arn"];
  constructor(
    logicalId: string,
    properties: ConfigConfigRuleProps,
    options?: ResourceOptions,
  ) {
    super(
      ConfigConfigRule.Type,
      ConfigConfigRule.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Config::ConfigurationAggregator
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationaggregator.html | AWS::Config::ConfigurationAggregator}
 */
export interface ConfigConfigurationAggregatorProps {
  AccountAggregationSources?: any[];
  ConfigurationAggregatorName?: string;
  OrganizationAggregationSource?: ConfigConfigurationAggregatorOrganizationAggregationSource;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::Config::ConfigurationAggregator
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationaggregator.html | AWS::Config::ConfigurationAggregator}
 */
export interface ConfigConfigurationAggregatorAttribs {
  ConfigurationAggregatorArn?: string;
}
/**
 * Resource class for AWS::Config::ConfigurationAggregator
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationaggregator.html | AWS::Config::ConfigurationAggregator}
 */
export class ConfigConfigurationAggregator extends ResourceBase<
  "AWS::Config::ConfigurationAggregator",
  ConfigConfigurationAggregatorProps,
  ConfigConfigurationAggregatorAttribs
> {
  public static readonly Type = "AWS::Config::ConfigurationAggregator";
  public static readonly AttributeNames: readonly (keyof ConfigConfigurationAggregatorAttribs)[] =
    ["ConfigurationAggregatorArn"];
  constructor(
    logicalId: string,
    properties: ConfigConfigurationAggregatorProps,
    options?: ResourceOptions,
  ) {
    super(
      ConfigConfigurationAggregator.Type,
      ConfigConfigurationAggregator.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Config::ConfigurationRecorder
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html | AWS::Config::ConfigurationRecorder}
 */
export interface ConfigConfigurationRecorderProps {
  Name?: string;
  RecordingGroup?: ConfigConfigurationRecorderRecordingGroup;
  RoleARN: string;
}
/**
 * Resource class for AWS::Config::ConfigurationRecorder
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html | AWS::Config::ConfigurationRecorder}
 */
export class ConfigConfigurationRecorder extends ResourceBase<
  "AWS::Config::ConfigurationRecorder",
  ConfigConfigurationRecorderProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Config::ConfigurationRecorder";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ConfigConfigurationRecorderProps,
    options?: ResourceOptions,
  ) {
    super(
      ConfigConfigurationRecorder.Type,
      ConfigConfigurationRecorder.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Config::ConformancePack
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-conformancepack.html | AWS::Config::ConformancePack}
 */
export interface ConfigConformancePackProps {
  ConformancePackInputParameters?: any[];
  TemplateSSMDocumentDetails?: ConfigConformancePackTemplateSSMDocumentDetails;
  DeliveryS3Bucket?: string;
  ConformancePackName: string;
  DeliveryS3KeyPrefix?: string;
  TemplateBody?: string;
  TemplateS3Uri?: string;
}
/**
 * Resource class for AWS::Config::ConformancePack
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-conformancepack.html | AWS::Config::ConformancePack}
 */
export class ConfigConformancePack extends ResourceBase<
  "AWS::Config::ConformancePack",
  ConfigConformancePackProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Config::ConformancePack";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ConfigConformancePackProps,
    options?: ResourceOptions,
  ) {
    super(
      ConfigConformancePack.Type,
      ConfigConformancePack.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Config::DeliveryChannel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html | AWS::Config::DeliveryChannel}
 */
export interface ConfigDeliveryChannelProps {
  ConfigSnapshotDeliveryProperties?: ConfigDeliveryChannelConfigSnapshotDeliveryProperties;
  Name?: string;
  S3BucketName: string;
  S3KeyPrefix?: string;
  S3KmsKeyArn?: string;
  SnsTopicARN?: string;
}
/**
 * Resource class for AWS::Config::DeliveryChannel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html | AWS::Config::DeliveryChannel}
 */
export class ConfigDeliveryChannel extends ResourceBase<
  "AWS::Config::DeliveryChannel",
  ConfigDeliveryChannelProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Config::DeliveryChannel";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ConfigDeliveryChannelProps,
    options?: ResourceOptions,
  ) {
    super(
      ConfigDeliveryChannel.Type,
      ConfigDeliveryChannel.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Config::OrganizationConfigRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-organizationconfigrule.html | AWS::Config::OrganizationConfigRule}
 */
export interface ConfigOrganizationConfigRuleProps {
  OrganizationManagedRuleMetadata?: ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata;
  OrganizationConfigRuleName: string;
  OrganizationCustomRuleMetadata?: ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata;
  ExcludedAccounts?: any[];
  OrganizationCustomPolicyRuleMetadata?: ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata;
}
/**
 * Resource class for AWS::Config::OrganizationConfigRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-organizationconfigrule.html | AWS::Config::OrganizationConfigRule}
 */
export class ConfigOrganizationConfigRule extends ResourceBase<
  "AWS::Config::OrganizationConfigRule",
  ConfigOrganizationConfigRuleProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Config::OrganizationConfigRule";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ConfigOrganizationConfigRuleProps,
    options?: ResourceOptions,
  ) {
    super(
      ConfigOrganizationConfigRule.Type,
      ConfigOrganizationConfigRule.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Config::OrganizationConformancePack
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-organizationconformancepack.html | AWS::Config::OrganizationConformancePack}
 */
export interface ConfigOrganizationConformancePackProps {
  ConformancePackInputParameters?: any[];
  DeliveryS3Bucket?: string;
  ExcludedAccounts?: any[];
  DeliveryS3KeyPrefix?: string;
  TemplateBody?: string;
  OrganizationConformancePackName: string;
  TemplateS3Uri?: string;
}
/**
 * Resource class for AWS::Config::OrganizationConformancePack
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-organizationconformancepack.html | AWS::Config::OrganizationConformancePack}
 */
export class ConfigOrganizationConformancePack extends ResourceBase<
  "AWS::Config::OrganizationConformancePack",
  ConfigOrganizationConformancePackProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Config::OrganizationConformancePack";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ConfigOrganizationConformancePackProps,
    options?: ResourceOptions,
  ) {
    super(
      ConfigOrganizationConformancePack.Type,
      ConfigOrganizationConformancePack.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Config::RemediationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-remediationconfiguration.html | AWS::Config::RemediationConfiguration}
 */
export interface ConfigRemediationConfigurationProps {
  TargetVersion?: string;
  ExecutionControls?: ConfigRemediationConfigurationExecutionControls;
  Parameters?: object;
  TargetType: string;
  ConfigRuleName: string;
  ResourceType?: string;
  RetryAttemptSeconds?: number;
  MaximumAutomaticAttempts?: number;
  TargetId: string;
  Automatic?: boolean;
}
/**
 * Resource class for AWS::Config::RemediationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-remediationconfiguration.html | AWS::Config::RemediationConfiguration}
 */
export class ConfigRemediationConfiguration extends ResourceBase<
  "AWS::Config::RemediationConfiguration",
  ConfigRemediationConfigurationProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Config::RemediationConfiguration";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ConfigRemediationConfigurationProps,
    options?: ResourceOptions,
  ) {
    super(
      ConfigRemediationConfiguration.Type,
      ConfigRemediationConfiguration.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Config::StoredQuery
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-storedquery.html | AWS::Config::StoredQuery}
 */
export interface ConfigStoredQueryProps {
  QueryDescription?: string;
  QueryExpression: string;
  Tags?: Tag[];
  QueryName: string;
}
/**
 * Attributes type definition for AWS::Config::StoredQuery
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-storedquery.html | AWS::Config::StoredQuery}
 */
export interface ConfigStoredQueryAttribs {
  QueryArn?: string;
  QueryId?: string;
}
/**
 * Resource class for AWS::Config::StoredQuery
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-storedquery.html | AWS::Config::StoredQuery}
 */
export class ConfigStoredQuery extends ResourceBase<
  "AWS::Config::StoredQuery",
  ConfigStoredQueryProps,
  ConfigStoredQueryAttribs
> {
  public static readonly Type = "AWS::Config::StoredQuery";
  public static readonly AttributeNames: readonly (keyof ConfigStoredQueryAttribs)[] =
    ["QueryArn", "QueryId"];
  constructor(
    logicalId: string,
    properties: ConfigStoredQueryProps,
    options?: ResourceOptions,
  ) {
    super(
      ConfigStoredQuery.Type,
      ConfigStoredQuery.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
