import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::SSMIncidents::ReplicationSet.RegionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-replicationset-regionconfiguration.html | AWS::SSMIncidents::ReplicationSet.RegionConfiguration}
 */
export interface SSMIncidentsReplicationSetRegionConfiguration {
  SseKmsKeyId: string;
}
/**
 * Type definition for AWS::SSMIncidents::ReplicationSet.ReplicationRegion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-replicationset-replicationregion.html | AWS::SSMIncidents::ReplicationSet.ReplicationRegion}
 */
export interface SSMIncidentsReplicationSetReplicationRegion {
  RegionConfiguration?: SSMIncidentsReplicationSetRegionConfiguration;
  RegionName?: string;
}
/**
 * Type definition for AWS::SSMIncidents::ResponsePlan.Action
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-action.html | AWS::SSMIncidents::ResponsePlan.Action}
 */
export interface SSMIncidentsResponsePlanAction {
  SsmAutomation?: SSMIncidentsResponsePlanSsmAutomation;
}
/**
 * Type definition for AWS::SSMIncidents::ResponsePlan.ChatChannel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-chatchannel.html | AWS::SSMIncidents::ResponsePlan.ChatChannel}
 */
export interface SSMIncidentsResponsePlanChatChannel {
  ChatbotSns?: any[];
}
/**
 * Type definition for AWS::SSMIncidents::ResponsePlan.DynamicSsmParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-dynamicssmparameter.html | AWS::SSMIncidents::ResponsePlan.DynamicSsmParameter}
 */
export interface SSMIncidentsResponsePlanDynamicSsmParameter {
  Value: SSMIncidentsResponsePlanDynamicSsmParameterValue;
  Key: string;
}
/**
 * Type definition for AWS::SSMIncidents::ResponsePlan.DynamicSsmParameterValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-dynamicssmparametervalue.html | AWS::SSMIncidents::ResponsePlan.DynamicSsmParameterValue}
 */
export interface SSMIncidentsResponsePlanDynamicSsmParameterValue {
  Variable?: string;
}
/**
 * Type definition for AWS::SSMIncidents::ResponsePlan.IncidentTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-incidenttemplate.html | AWS::SSMIncidents::ResponsePlan.IncidentTemplate}
 */
export interface SSMIncidentsResponsePlanIncidentTemplate {
  Impact: number;
  IncidentTags?: any[];
  Summary?: string;
  Title: string;
  NotificationTargets?: any[];
  DedupeString?: string;
}
/**
 * Type definition for AWS::SSMIncidents::ResponsePlan.Integration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-integration.html | AWS::SSMIncidents::ResponsePlan.Integration}
 */
export interface SSMIncidentsResponsePlanIntegration {
  PagerDutyConfiguration: SSMIncidentsResponsePlanPagerDutyConfiguration;
}
/**
 * Type definition for AWS::SSMIncidents::ResponsePlan.NotificationTargetItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-notificationtargetitem.html | AWS::SSMIncidents::ResponsePlan.NotificationTargetItem}
 */
export interface SSMIncidentsResponsePlanNotificationTargetItem {
  SnsTopicArn?: string;
}
/**
 * Type definition for AWS::SSMIncidents::ResponsePlan.PagerDutyConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-pagerdutyconfiguration.html | AWS::SSMIncidents::ResponsePlan.PagerDutyConfiguration}
 */
export interface SSMIncidentsResponsePlanPagerDutyConfiguration {
  SecretId: string;
  PagerDutyIncidentConfiguration: SSMIncidentsResponsePlanPagerDutyIncidentConfiguration;
  Name: string;
}
/**
 * Type definition for AWS::SSMIncidents::ResponsePlan.PagerDutyIncidentConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-pagerdutyincidentconfiguration.html | AWS::SSMIncidents::ResponsePlan.PagerDutyIncidentConfiguration}
 */
export interface SSMIncidentsResponsePlanPagerDutyIncidentConfiguration {
  ServiceId: string;
}
/**
 * Type definition for AWS::SSMIncidents::ResponsePlan.SsmAutomation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-ssmautomation.html | AWS::SSMIncidents::ResponsePlan.SsmAutomation}
 */
export interface SSMIncidentsResponsePlanSsmAutomation {
  Parameters?: any[];
  TargetAccount?: string;
  DynamicParameters?: any[];
  DocumentVersion?: string;
  RoleArn: string;
  DocumentName: string;
}
/**
 * Type definition for AWS::SSMIncidents::ResponsePlan.SsmParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-ssmparameter.html | AWS::SSMIncidents::ResponsePlan.SsmParameter}
 */
export interface SSMIncidentsResponsePlanSsmParameter {
  Values: any[];
  Key: string;
}
/**
 * Type definition for AWS::SSMIncidents::ReplicationSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-replicationset.html | AWS::SSMIncidents::ReplicationSet}
 */
export interface SSMIncidentsReplicationSetProps {
  Regions: any[];
  DeletionProtected?: boolean;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::SSMIncidents::ReplicationSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-replicationset.html | AWS::SSMIncidents::ReplicationSet}
 */
export interface SSMIncidentsReplicationSetAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::SSMIncidents::ReplicationSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-replicationset.html | AWS::SSMIncidents::ReplicationSet}
 */
export class SSMIncidentsReplicationSet extends ResourceBase<
  "AWS::SSMIncidents::ReplicationSet",
  SSMIncidentsReplicationSetProps,
  SSMIncidentsReplicationSetAttribs
> {
  public static readonly Type = "AWS::SSMIncidents::ReplicationSet";
  public static readonly AttributeNames: readonly (keyof SSMIncidentsReplicationSetAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: SSMIncidentsReplicationSetProps,
    options?: ResourceOptions,
  ) {
    super(
      SSMIncidentsReplicationSet.Type,
      SSMIncidentsReplicationSet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SSMIncidents::ResponsePlan
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html | AWS::SSMIncidents::ResponsePlan}
 */
export interface SSMIncidentsResponsePlanProps {
  ChatChannel?: SSMIncidentsResponsePlanChatChannel;
  Integrations?: any[];
  Actions?: any[];
  DisplayName?: string;
  IncidentTemplate: SSMIncidentsResponsePlanIncidentTemplate;
  Engagements?: any[];
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::SSMIncidents::ResponsePlan
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html | AWS::SSMIncidents::ResponsePlan}
 */
export interface SSMIncidentsResponsePlanAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::SSMIncidents::ResponsePlan
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html | AWS::SSMIncidents::ResponsePlan}
 */
export class SSMIncidentsResponsePlan extends ResourceBase<
  "AWS::SSMIncidents::ResponsePlan",
  SSMIncidentsResponsePlanProps,
  SSMIncidentsResponsePlanAttribs
> {
  public static readonly Type = "AWS::SSMIncidents::ResponsePlan";
  public static readonly AttributeNames: readonly (keyof SSMIncidentsResponsePlanAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: SSMIncidentsResponsePlanProps,
    options?: ResourceOptions,
  ) {
    super(
      SSMIncidentsResponsePlan.Type,
      SSMIncidentsResponsePlan.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
