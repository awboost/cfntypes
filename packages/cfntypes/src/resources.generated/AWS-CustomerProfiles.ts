import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::CustomerProfiles::CalculatedAttributeDefinition.AttributeDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-calculatedattributedefinition-attributedetails.html | AWS::CustomerProfiles::CalculatedAttributeDefinition.AttributeDetails}
 */
export interface CustomerProfilesCalculatedAttributeDefinitionAttributeDetails {
  Expression: string;
  Attributes: any[];
}
/**
 * Type definition for AWS::CustomerProfiles::CalculatedAttributeDefinition.AttributeItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-calculatedattributedefinition-attributeitem.html | AWS::CustomerProfiles::CalculatedAttributeDefinition.AttributeItem}
 */
export interface CustomerProfilesCalculatedAttributeDefinitionAttributeItem {
  Name: string;
}
/**
 * Type definition for AWS::CustomerProfiles::CalculatedAttributeDefinition.Conditions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-calculatedattributedefinition-conditions.html | AWS::CustomerProfiles::CalculatedAttributeDefinition.Conditions}
 */
export interface CustomerProfilesCalculatedAttributeDefinitionConditions {
  Range?: CustomerProfilesCalculatedAttributeDefinitionRange;
  ObjectCount?: number;
  Threshold?: CustomerProfilesCalculatedAttributeDefinitionThreshold;
}
/**
 * Type definition for AWS::CustomerProfiles::CalculatedAttributeDefinition.Range
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-calculatedattributedefinition-range.html | AWS::CustomerProfiles::CalculatedAttributeDefinition.Range}
 */
export interface CustomerProfilesCalculatedAttributeDefinitionRange {
  Value: number;
  Unit: string;
}
/**
 * Type definition for AWS::CustomerProfiles::CalculatedAttributeDefinition.Threshold
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-calculatedattributedefinition-threshold.html | AWS::CustomerProfiles::CalculatedAttributeDefinition.Threshold}
 */
export interface CustomerProfilesCalculatedAttributeDefinitionThreshold {
  Operator: string;
  Value: string;
}
/**
 * Type definition for AWS::CustomerProfiles::Domain.AttributeTypesSelector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-attributetypesselector.html | AWS::CustomerProfiles::Domain.AttributeTypesSelector}
 */
export interface CustomerProfilesDomainAttributeTypesSelector {
  Address?: any[];
  AttributeMatchingModel: string;
  PhoneNumber?: any[];
  EmailAddress?: any[];
}
/**
 * Type definition for AWS::CustomerProfiles::Domain.AutoMerging
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-automerging.html | AWS::CustomerProfiles::Domain.AutoMerging}
 */
export interface CustomerProfilesDomainAutoMerging {
  Consolidation?: CustomerProfilesDomainConsolidation;
  Enabled: boolean;
  ConflictResolution?: CustomerProfilesDomainConflictResolution;
  MinAllowedConfidenceScoreForMerging?: number;
}
/**
 * Type definition for AWS::CustomerProfiles::Domain.ConflictResolution
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-conflictresolution.html | AWS::CustomerProfiles::Domain.ConflictResolution}
 */
export interface CustomerProfilesDomainConflictResolution {
  ConflictResolvingModel: string;
  SourceName?: string;
}
/**
 * Type definition for AWS::CustomerProfiles::Domain.Consolidation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-consolidation.html | AWS::CustomerProfiles::Domain.Consolidation}
 */
export interface CustomerProfilesDomainConsolidation {
  MatchingAttributesList: object;
}
/**
 * Type definition for AWS::CustomerProfiles::Domain.DomainStats
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-domainstats.html | AWS::CustomerProfiles::Domain.DomainStats}
 */
export interface CustomerProfilesDomainDomainStats {
  MeteringProfileCount?: number;
  ProfileCount?: number;
  ObjectCount?: number;
  TotalSize?: number;
}
/**
 * Type definition for AWS::CustomerProfiles::Domain.ExportingConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-exportingconfig.html | AWS::CustomerProfiles::Domain.ExportingConfig}
 */
export interface CustomerProfilesDomainExportingConfig {
  S3Exporting?: CustomerProfilesDomainS3ExportingConfig;
}
/**
 * Type definition for AWS::CustomerProfiles::Domain.JobSchedule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-jobschedule.html | AWS::CustomerProfiles::Domain.JobSchedule}
 */
export interface CustomerProfilesDomainJobSchedule {
  DayOfTheWeek: string;
  Time: string;
}
/**
 * Type definition for AWS::CustomerProfiles::Domain.Matching
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-matching.html | AWS::CustomerProfiles::Domain.Matching}
 */
export interface CustomerProfilesDomainMatching {
  AutoMerging?: CustomerProfilesDomainAutoMerging;
  JobSchedule?: CustomerProfilesDomainJobSchedule;
  Enabled: boolean;
  ExportingConfig?: CustomerProfilesDomainExportingConfig;
}
/**
 * Type definition for AWS::CustomerProfiles::Domain.MatchingRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-matchingrule.html | AWS::CustomerProfiles::Domain.MatchingRule}
 */
export interface CustomerProfilesDomainMatchingRule {
  Rule: any[];
}
/**
 * Type definition for AWS::CustomerProfiles::Domain.RuleBasedMatching
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-rulebasedmatching.html | AWS::CustomerProfiles::Domain.RuleBasedMatching}
 */
export interface CustomerProfilesDomainRuleBasedMatching {
  Status?: string;
  MaxAllowedRuleLevelForMerging?: number;
  Enabled: boolean;
  MatchingRules?: any[];
  AttributeTypesSelector?: CustomerProfilesDomainAttributeTypesSelector;
  ConflictResolution?: CustomerProfilesDomainConflictResolution;
  ExportingConfig?: CustomerProfilesDomainExportingConfig;
  MaxAllowedRuleLevelForMatching?: number;
}
/**
 * Type definition for AWS::CustomerProfiles::Domain.S3ExportingConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-s3exportingconfig.html | AWS::CustomerProfiles::Domain.S3ExportingConfig}
 */
export interface CustomerProfilesDomainS3ExportingConfig {
  S3BucketName: string;
  S3KeyName?: string;
}
/**
 * Type definition for AWS::CustomerProfiles::EventStream.DestinationDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-eventstream-destinationdetails.html | AWS::CustomerProfiles::EventStream.DestinationDetails}
 */
export interface CustomerProfilesEventStreamDestinationDetails {
  Status: string;
  Uri: string;
}
/**
 * Type definition for AWS::CustomerProfiles::Integration.ConnectorOperator
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-connectoroperator.html | AWS::CustomerProfiles::Integration.ConnectorOperator}
 */
export interface CustomerProfilesIntegrationConnectorOperator {
  S3?: string;
  ServiceNow?: string;
  Zendesk?: string;
  Marketo?: string;
  Salesforce?: string;
}
/**
 * Type definition for AWS::CustomerProfiles::Integration.FlowDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-flowdefinition.html | AWS::CustomerProfiles::Integration.FlowDefinition}
 */
export interface CustomerProfilesIntegrationFlowDefinition {
  Description?: string;
  Tasks: any[];
  FlowName: string;
  TriggerConfig: CustomerProfilesIntegrationTriggerConfig;
  SourceFlowConfig: CustomerProfilesIntegrationSourceFlowConfig;
  KmsArn: string;
}
/**
 * Type definition for AWS::CustomerProfiles::Integration.IncrementalPullConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-incrementalpullconfig.html | AWS::CustomerProfiles::Integration.IncrementalPullConfig}
 */
export interface CustomerProfilesIntegrationIncrementalPullConfig {
  DatetimeTypeFieldName?: string;
}
/**
 * Type definition for AWS::CustomerProfiles::Integration.MarketoSourceProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-marketosourceproperties.html | AWS::CustomerProfiles::Integration.MarketoSourceProperties}
 */
export interface CustomerProfilesIntegrationMarketoSourceProperties {
  Object: string;
}
/**
 * Type definition for AWS::CustomerProfiles::Integration.ObjectTypeMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-objecttypemapping.html | AWS::CustomerProfiles::Integration.ObjectTypeMapping}
 */
export interface CustomerProfilesIntegrationObjectTypeMapping {
  Value: string;
  Key: string;
}
/**
 * Type definition for AWS::CustomerProfiles::Integration.S3SourceProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-s3sourceproperties.html | AWS::CustomerProfiles::Integration.S3SourceProperties}
 */
export interface CustomerProfilesIntegrationS3SourceProperties {
  BucketName: string;
  BucketPrefix?: string;
}
/**
 * Type definition for AWS::CustomerProfiles::Integration.SalesforceSourceProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-salesforcesourceproperties.html | AWS::CustomerProfiles::Integration.SalesforceSourceProperties}
 */
export interface CustomerProfilesIntegrationSalesforceSourceProperties {
  IncludeDeletedRecords?: boolean;
  Object: string;
  EnableDynamicFieldUpdate?: boolean;
}
/**
 * Type definition for AWS::CustomerProfiles::Integration.ScheduledTriggerProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-scheduledtriggerproperties.html | AWS::CustomerProfiles::Integration.ScheduledTriggerProperties}
 */
export interface CustomerProfilesIntegrationScheduledTriggerProperties {
  ScheduleEndTime?: number;
  Timezone?: string;
  ScheduleExpression: string;
  FirstExecutionFrom?: number;
  ScheduleStartTime?: number;
  DataPullMode?: string;
  ScheduleOffset?: number;
}
/**
 * Type definition for AWS::CustomerProfiles::Integration.ServiceNowSourceProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-servicenowsourceproperties.html | AWS::CustomerProfiles::Integration.ServiceNowSourceProperties}
 */
export interface CustomerProfilesIntegrationServiceNowSourceProperties {
  Object: string;
}
/**
 * Type definition for AWS::CustomerProfiles::Integration.SourceConnectorProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-sourceconnectorproperties.html | AWS::CustomerProfiles::Integration.SourceConnectorProperties}
 */
export interface CustomerProfilesIntegrationSourceConnectorProperties {
  S3?: CustomerProfilesIntegrationS3SourceProperties;
  ServiceNow?: CustomerProfilesIntegrationServiceNowSourceProperties;
  Zendesk?: CustomerProfilesIntegrationZendeskSourceProperties;
  Marketo?: CustomerProfilesIntegrationMarketoSourceProperties;
  Salesforce?: CustomerProfilesIntegrationSalesforceSourceProperties;
}
/**
 * Type definition for AWS::CustomerProfiles::Integration.SourceFlowConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-sourceflowconfig.html | AWS::CustomerProfiles::Integration.SourceFlowConfig}
 */
export interface CustomerProfilesIntegrationSourceFlowConfig {
  ConnectorProfileName?: string;
  SourceConnectorProperties: CustomerProfilesIntegrationSourceConnectorProperties;
  ConnectorType: string;
  IncrementalPullConfig?: CustomerProfilesIntegrationIncrementalPullConfig;
}
/**
 * Type definition for AWS::CustomerProfiles::Integration.Task
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-task.html | AWS::CustomerProfiles::Integration.Task}
 */
export interface CustomerProfilesIntegrationTask {
  SourceFields: any[];
  DestinationField?: string;
  ConnectorOperator?: CustomerProfilesIntegrationConnectorOperator;
  TaskType: string;
  TaskProperties?: any[];
}
/**
 * Type definition for AWS::CustomerProfiles::Integration.TaskPropertiesMap
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-taskpropertiesmap.html | AWS::CustomerProfiles::Integration.TaskPropertiesMap}
 */
export interface CustomerProfilesIntegrationTaskPropertiesMap {
  OperatorPropertyKey: string;
  Property: string;
}
/**
 * Type definition for AWS::CustomerProfiles::Integration.TriggerConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-triggerconfig.html | AWS::CustomerProfiles::Integration.TriggerConfig}
 */
export interface CustomerProfilesIntegrationTriggerConfig {
  TriggerType: string;
  TriggerProperties?: CustomerProfilesIntegrationTriggerProperties;
}
/**
 * Type definition for AWS::CustomerProfiles::Integration.TriggerProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-triggerproperties.html | AWS::CustomerProfiles::Integration.TriggerProperties}
 */
export interface CustomerProfilesIntegrationTriggerProperties {
  Scheduled?: CustomerProfilesIntegrationScheduledTriggerProperties;
}
/**
 * Type definition for AWS::CustomerProfiles::Integration.ZendeskSourceProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-zendesksourceproperties.html | AWS::CustomerProfiles::Integration.ZendeskSourceProperties}
 */
export interface CustomerProfilesIntegrationZendeskSourceProperties {
  Object: string;
}
/**
 * Type definition for AWS::CustomerProfiles::ObjectType.FieldMap
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-objecttype-fieldmap.html | AWS::CustomerProfiles::ObjectType.FieldMap}
 */
export interface CustomerProfilesObjectTypeFieldMap {
  Name?: string;
  ObjectTypeField?: CustomerProfilesObjectTypeObjectTypeField;
}
/**
 * Type definition for AWS::CustomerProfiles::ObjectType.KeyMap
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-objecttype-keymap.html | AWS::CustomerProfiles::ObjectType.KeyMap}
 */
export interface CustomerProfilesObjectTypeKeyMap {
  ObjectTypeKeyList?: any[];
  Name?: string;
}
/**
 * Type definition for AWS::CustomerProfiles::ObjectType.ObjectTypeField
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-objecttype-objecttypefield.html | AWS::CustomerProfiles::ObjectType.ObjectTypeField}
 */
export interface CustomerProfilesObjectTypeObjectTypeField {
  Target?: string;
  ContentType?: string;
  Source?: string;
}
/**
 * Type definition for AWS::CustomerProfiles::ObjectType.ObjectTypeKey
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-objecttype-objecttypekey.html | AWS::CustomerProfiles::ObjectType.ObjectTypeKey}
 */
export interface CustomerProfilesObjectTypeObjectTypeKey {
  FieldNames?: any[];
  StandardIdentifiers?: any[];
}
/**
 * Type definition for AWS::CustomerProfiles::CalculatedAttributeDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-calculatedattributedefinition.html | AWS::CustomerProfiles::CalculatedAttributeDefinition}
 */
export interface CustomerProfilesCalculatedAttributeDefinitionProps {
  Description?: string;
  AttributeDetails: CustomerProfilesCalculatedAttributeDefinitionAttributeDetails;
  Statistic: string;
  DomainName: string;
  DisplayName?: string;
  CalculatedAttributeName: string;
  Conditions?: CustomerProfilesCalculatedAttributeDefinitionConditions;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::CustomerProfiles::CalculatedAttributeDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-calculatedattributedefinition.html | AWS::CustomerProfiles::CalculatedAttributeDefinition}
 */
export interface CustomerProfilesCalculatedAttributeDefinitionAttribs {
  LastUpdatedAt?: string;
  CreatedAt?: string;
}
/**
 * Resource class for AWS::CustomerProfiles::CalculatedAttributeDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-calculatedattributedefinition.html | AWS::CustomerProfiles::CalculatedAttributeDefinition}
 */
export class CustomerProfilesCalculatedAttributeDefinition extends ResourceBase<
  "AWS::CustomerProfiles::CalculatedAttributeDefinition",
  CustomerProfilesCalculatedAttributeDefinitionProps,
  CustomerProfilesCalculatedAttributeDefinitionAttribs
> {
  public static readonly Type =
    "AWS::CustomerProfiles::CalculatedAttributeDefinition";
  public static readonly AttributeNames: readonly (keyof CustomerProfilesCalculatedAttributeDefinitionAttribs)[] =
    ["LastUpdatedAt", "CreatedAt"];
  constructor(
    logicalId: string,
    properties: CustomerProfilesCalculatedAttributeDefinitionProps,
    options?: ResourceOptions,
  ) {
    super(
      CustomerProfilesCalculatedAttributeDefinition.Type,
      CustomerProfilesCalculatedAttributeDefinition.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CustomerProfiles::Domain
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-domain.html | AWS::CustomerProfiles::Domain}
 */
export interface CustomerProfilesDomainProps {
  Matching?: CustomerProfilesDomainMatching;
  DefaultExpirationDays?: number;
  DomainName: string;
  DeadLetterQueueUrl?: string;
  DefaultEncryptionKey?: string;
  RuleBasedMatching?: CustomerProfilesDomainRuleBasedMatching;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::CustomerProfiles::Domain
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-domain.html | AWS::CustomerProfiles::Domain}
 */
export interface CustomerProfilesDomainAttribs {
  "Stats.ProfileCount"?: number;
  "Stats.ObjectCount"?: number;
  LastUpdatedAt?: string;
  CreatedAt?: string;
  Stats?: CustomerProfilesDomainDomainStats;
  "Stats.MeteringProfileCount"?: number;
  "Stats.TotalSize"?: number;
  "RuleBasedMatching.Status"?: string;
}
/**
 * Resource class for AWS::CustomerProfiles::Domain
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-domain.html | AWS::CustomerProfiles::Domain}
 */
export class CustomerProfilesDomain extends ResourceBase<
  "AWS::CustomerProfiles::Domain",
  CustomerProfilesDomainProps,
  CustomerProfilesDomainAttribs
> {
  public static readonly Type = "AWS::CustomerProfiles::Domain";
  public static readonly AttributeNames: readonly (keyof CustomerProfilesDomainAttribs)[] =
    [
      "Stats.ProfileCount",
      "Stats.ObjectCount",
      "LastUpdatedAt",
      "CreatedAt",
      "Stats",
      "Stats.MeteringProfileCount",
      "Stats.TotalSize",
      "RuleBasedMatching.Status",
    ];
  constructor(
    logicalId: string,
    properties: CustomerProfilesDomainProps,
    options?: ResourceOptions,
  ) {
    super(
      CustomerProfilesDomain.Type,
      CustomerProfilesDomain.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CustomerProfiles::EventStream
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventstream.html | AWS::CustomerProfiles::EventStream}
 */
export interface CustomerProfilesEventStreamProps {
  DomainName: string;
  EventStreamName: string;
  Uri: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::CustomerProfiles::EventStream
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventstream.html | AWS::CustomerProfiles::EventStream}
 */
export interface CustomerProfilesEventStreamAttribs {
  "DestinationDetails.Status"?: string;
  EventStreamArn?: string;
  State?: string;
  CreatedAt?: string;
  "DestinationDetails.Uri"?: string;
  DestinationDetails?: CustomerProfilesEventStreamDestinationDetails;
}
/**
 * Resource class for AWS::CustomerProfiles::EventStream
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventstream.html | AWS::CustomerProfiles::EventStream}
 */
export class CustomerProfilesEventStream extends ResourceBase<
  "AWS::CustomerProfiles::EventStream",
  CustomerProfilesEventStreamProps,
  CustomerProfilesEventStreamAttribs
> {
  public static readonly Type = "AWS::CustomerProfiles::EventStream";
  public static readonly AttributeNames: readonly (keyof CustomerProfilesEventStreamAttribs)[] =
    [
      "DestinationDetails.Status",
      "EventStreamArn",
      "State",
      "CreatedAt",
      "DestinationDetails.Uri",
      "DestinationDetails",
    ];
  constructor(
    logicalId: string,
    properties: CustomerProfilesEventStreamProps,
    options?: ResourceOptions,
  ) {
    super(
      CustomerProfilesEventStream.Type,
      CustomerProfilesEventStream.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CustomerProfiles::Integration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html | AWS::CustomerProfiles::Integration}
 */
export interface CustomerProfilesIntegrationProps {
  ObjectTypeNames?: any[];
  DomainName: string;
  ObjectTypeName?: string;
  Uri?: string;
  FlowDefinition?: CustomerProfilesIntegrationFlowDefinition;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::CustomerProfiles::Integration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html | AWS::CustomerProfiles::Integration}
 */
export interface CustomerProfilesIntegrationAttribs {
  LastUpdatedAt?: string;
  CreatedAt?: string;
}
/**
 * Resource class for AWS::CustomerProfiles::Integration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html | AWS::CustomerProfiles::Integration}
 */
export class CustomerProfilesIntegration extends ResourceBase<
  "AWS::CustomerProfiles::Integration",
  CustomerProfilesIntegrationProps,
  CustomerProfilesIntegrationAttribs
> {
  public static readonly Type = "AWS::CustomerProfiles::Integration";
  public static readonly AttributeNames: readonly (keyof CustomerProfilesIntegrationAttribs)[] =
    ["LastUpdatedAt", "CreatedAt"];
  constructor(
    logicalId: string,
    properties: CustomerProfilesIntegrationProps,
    options?: ResourceOptions,
  ) {
    super(
      CustomerProfilesIntegration.Type,
      CustomerProfilesIntegration.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CustomerProfiles::ObjectType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-objecttype.html | AWS::CustomerProfiles::ObjectType}
 */
export interface CustomerProfilesObjectTypeProps {
  Description?: string;
  Fields?: any[];
  DomainName: string;
  AllowProfileCreation?: boolean;
  ObjectTypeName?: string;
  Keys?: any[];
  SourceLastUpdatedTimestampFormat?: string;
  EncryptionKey?: string;
  Tags?: Tag[];
  TemplateId?: string;
  ExpirationDays?: number;
}
/**
 * Attributes type definition for AWS::CustomerProfiles::ObjectType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-objecttype.html | AWS::CustomerProfiles::ObjectType}
 */
export interface CustomerProfilesObjectTypeAttribs {
  LastUpdatedAt?: string;
  CreatedAt?: string;
}
/**
 * Resource class for AWS::CustomerProfiles::ObjectType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-objecttype.html | AWS::CustomerProfiles::ObjectType}
 */
export class CustomerProfilesObjectType extends ResourceBase<
  "AWS::CustomerProfiles::ObjectType",
  CustomerProfilesObjectTypeProps,
  CustomerProfilesObjectTypeAttribs
> {
  public static readonly Type = "AWS::CustomerProfiles::ObjectType";
  public static readonly AttributeNames: readonly (keyof CustomerProfilesObjectTypeAttribs)[] =
    ["LastUpdatedAt", "CreatedAt"];
  constructor(
    logicalId: string,
    properties: CustomerProfilesObjectTypeProps,
    options?: ResourceOptions,
  ) {
    super(
      CustomerProfilesObjectType.Type,
      CustomerProfilesObjectType.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
