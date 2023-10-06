import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Events::Connection.ApiKeyAuthParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-apikeyauthparameters.html | AWS::Events::Connection.ApiKeyAuthParameters}
 */
export interface EventsConnectionApiKeyAuthParameters {
  ApiKeyValue: string;
  ApiKeyName: string;
}
/**
 * Type definition for AWS::Events::Connection.AuthParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-authparameters.html | AWS::Events::Connection.AuthParameters}
 */
export interface EventsConnectionAuthParameters {
  InvocationHttpParameters?: EventsConnectionConnectionHttpParameters;
  BasicAuthParameters?: EventsConnectionBasicAuthParameters;
  ApiKeyAuthParameters?: EventsConnectionApiKeyAuthParameters;
  OAuthParameters?: EventsConnectionOAuthParameters;
}
/**
 * Type definition for AWS::Events::Connection.BasicAuthParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-basicauthparameters.html | AWS::Events::Connection.BasicAuthParameters}
 */
export interface EventsConnectionBasicAuthParameters {
  Username: string;
  Password: string;
}
/**
 * Type definition for AWS::Events::Connection.ClientParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-clientparameters.html | AWS::Events::Connection.ClientParameters}
 */
export interface EventsConnectionClientParameters {
  ClientSecret: string;
  ClientID: string;
}
/**
 * Type definition for AWS::Events::Connection.ConnectionHttpParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-connectionhttpparameters.html | AWS::Events::Connection.ConnectionHttpParameters}
 */
export interface EventsConnectionConnectionHttpParameters {
  HeaderParameters?: any[];
  QueryStringParameters?: any[];
  BodyParameters?: any[];
}
/**
 * Type definition for AWS::Events::Connection.OAuthParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-oauthparameters.html | AWS::Events::Connection.OAuthParameters}
 */
export interface EventsConnectionOAuthParameters {
  ClientParameters: EventsConnectionClientParameters;
  OAuthHttpParameters?: EventsConnectionConnectionHttpParameters;
  AuthorizationEndpoint: string;
  HttpMethod: string;
}
/**
 * Type definition for AWS::Events::Connection.Parameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-parameter.html | AWS::Events::Connection.Parameter}
 */
export interface EventsConnectionParameter {
  Value: string;
  IsValueSecret?: boolean;
  Key: string;
}
/**
 * Type definition for AWS::Events::Endpoint.EndpointEventBus
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-endpoint-endpointeventbus.html | AWS::Events::Endpoint.EndpointEventBus}
 */
export interface EventsEndpointEndpointEventBus {
  EventBusArn: string;
}
/**
 * Type definition for AWS::Events::Endpoint.FailoverConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-endpoint-failoverconfig.html | AWS::Events::Endpoint.FailoverConfig}
 */
export interface EventsEndpointFailoverConfig {
  Secondary: EventsEndpointSecondary;
  Primary: EventsEndpointPrimary;
}
/**
 * Type definition for AWS::Events::Endpoint.Primary
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-endpoint-primary.html | AWS::Events::Endpoint.Primary}
 */
export interface EventsEndpointPrimary {
  HealthCheck: string;
}
/**
 * Type definition for AWS::Events::Endpoint.ReplicationConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-endpoint-replicationconfig.html | AWS::Events::Endpoint.ReplicationConfig}
 */
export interface EventsEndpointReplicationConfig {
  State: string;
}
/**
 * Type definition for AWS::Events::Endpoint.RoutingConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-endpoint-routingconfig.html | AWS::Events::Endpoint.RoutingConfig}
 */
export interface EventsEndpointRoutingConfig {
  FailoverConfig: EventsEndpointFailoverConfig;
}
/**
 * Type definition for AWS::Events::Endpoint.Secondary
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-endpoint-secondary.html | AWS::Events::Endpoint.Secondary}
 */
export interface EventsEndpointSecondary {
  Route: string;
}
/**
 * Type definition for AWS::Events::EventBusPolicy.Condition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-eventbuspolicy-condition.html | AWS::Events::EventBusPolicy.Condition}
 */
export interface EventsEventBusPolicyCondition {
  Type?: string;
  Value?: string;
  Key?: string;
}
/**
 * Type definition for AWS::Events::Rule.AwsVpcConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-awsvpcconfiguration.html | AWS::Events::Rule.AwsVpcConfiguration}
 */
export interface EventsRuleAwsVpcConfiguration {
  AssignPublicIp?: string;
  SecurityGroups?: any[];
  Subnets: any[];
}
/**
 * Type definition for AWS::Events::Rule.BatchArrayProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-batcharrayproperties.html | AWS::Events::Rule.BatchArrayProperties}
 */
export interface EventsRuleBatchArrayProperties {
  Size?: number;
}
/**
 * Type definition for AWS::Events::Rule.BatchParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-batchparameters.html | AWS::Events::Rule.BatchParameters}
 */
export interface EventsRuleBatchParameters {
  ArrayProperties?: EventsRuleBatchArrayProperties;
  JobDefinition: string;
  JobName: string;
  RetryStrategy?: EventsRuleBatchRetryStrategy;
}
/**
 * Type definition for AWS::Events::Rule.BatchRetryStrategy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-batchretrystrategy.html | AWS::Events::Rule.BatchRetryStrategy}
 */
export interface EventsRuleBatchRetryStrategy {
  Attempts?: number;
}
/**
 * Type definition for AWS::Events::Rule.CapacityProviderStrategyItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-capacityproviderstrategyitem.html | AWS::Events::Rule.CapacityProviderStrategyItem}
 */
export interface EventsRuleCapacityProviderStrategyItem {
  Base?: number;
  CapacityProvider: string;
  Weight?: number;
}
/**
 * Type definition for AWS::Events::Rule.DeadLetterConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-deadletterconfig.html | AWS::Events::Rule.DeadLetterConfig}
 */
export interface EventsRuleDeadLetterConfig {
  Arn?: string;
}
/**
 * Type definition for AWS::Events::Rule.EcsParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-ecsparameters.html | AWS::Events::Rule.EcsParameters}
 */
export interface EventsRuleEcsParameters {
  CapacityProviderStrategy?: any[];
  EnableECSManagedTags?: boolean;
  EnableExecuteCommand?: boolean;
  Group?: string;
  LaunchType?: string;
  NetworkConfiguration?: EventsRuleNetworkConfiguration;
  PlacementConstraints?: any[];
  PlacementStrategies?: any[];
  PlatformVersion?: string;
  PropagateTags?: string;
  ReferenceId?: string;
  TagList?: any[];
  TaskCount?: number;
  TaskDefinitionArn: string;
}
/**
 * Type definition for AWS::Events::Rule.HttpParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-httpparameters.html | AWS::Events::Rule.HttpParameters}
 */
export interface EventsRuleHttpParameters {
  HeaderParameters?: Record<string, any>;
  PathParameterValues?: any[];
  QueryStringParameters?: Record<string, any>;
}
/**
 * Type definition for AWS::Events::Rule.InputTransformer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-inputtransformer.html | AWS::Events::Rule.InputTransformer}
 */
export interface EventsRuleInputTransformer {
  InputPathsMap?: Record<string, any>;
  InputTemplate: string;
}
/**
 * Type definition for AWS::Events::Rule.KinesisParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-kinesisparameters.html | AWS::Events::Rule.KinesisParameters}
 */
export interface EventsRuleKinesisParameters {
  PartitionKeyPath: string;
}
/**
 * Type definition for AWS::Events::Rule.NetworkConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-networkconfiguration.html | AWS::Events::Rule.NetworkConfiguration}
 */
export interface EventsRuleNetworkConfiguration {
  AwsVpcConfiguration?: EventsRuleAwsVpcConfiguration;
}
/**
 * Type definition for AWS::Events::Rule.PlacementConstraint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-placementconstraint.html | AWS::Events::Rule.PlacementConstraint}
 */
export interface EventsRulePlacementConstraint {
  Expression?: string;
  Type?: string;
}
/**
 * Type definition for AWS::Events::Rule.PlacementStrategy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-placementstrategy.html | AWS::Events::Rule.PlacementStrategy}
 */
export interface EventsRulePlacementStrategy {
  Field?: string;
  Type?: string;
}
/**
 * Type definition for AWS::Events::Rule.RedshiftDataParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-redshiftdataparameters.html | AWS::Events::Rule.RedshiftDataParameters}
 */
export interface EventsRuleRedshiftDataParameters {
  Database: string;
  DbUser?: string;
  SecretManagerArn?: string;
  Sql?: string;
  StatementName?: string;
  WithEvent?: boolean;
}
/**
 * Type definition for AWS::Events::Rule.RetryPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-retrypolicy.html | AWS::Events::Rule.RetryPolicy}
 */
export interface EventsRuleRetryPolicy {
  MaximumEventAgeInSeconds?: number;
  MaximumRetryAttempts?: number;
}
/**
 * Type definition for AWS::Events::Rule.RunCommandParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-runcommandparameters.html | AWS::Events::Rule.RunCommandParameters}
 */
export interface EventsRuleRunCommandParameters {
  RunCommandTargets: any[];
}
/**
 * Type definition for AWS::Events::Rule.RunCommandTarget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-runcommandtarget.html | AWS::Events::Rule.RunCommandTarget}
 */
export interface EventsRuleRunCommandTarget {
  Key: string;
  Values: any[];
}
/**
 * Type definition for AWS::Events::Rule.SageMakerPipelineParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-sagemakerpipelineparameter.html | AWS::Events::Rule.SageMakerPipelineParameter}
 */
export interface EventsRuleSageMakerPipelineParameter {
  Name: string;
  Value: string;
}
/**
 * Type definition for AWS::Events::Rule.SageMakerPipelineParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-sagemakerpipelineparameters.html | AWS::Events::Rule.SageMakerPipelineParameters}
 */
export interface EventsRuleSageMakerPipelineParameters {
  PipelineParameterList?: any[];
}
/**
 * Type definition for AWS::Events::Rule.SqsParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-sqsparameters.html | AWS::Events::Rule.SqsParameters}
 */
export interface EventsRuleSqsParameters {
  MessageGroupId: string;
}
/**
 * Type definition for AWS::Events::Rule.Tag
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-tag.html | AWS::Events::Rule.Tag}
 */
export interface EventsRuleTag {
  Key?: string;
  Value?: string;
}
/**
 * Type definition for AWS::Events::Rule.Target
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-target.html | AWS::Events::Rule.Target}
 */
export interface EventsRuleTarget {
  Arn: string;
  BatchParameters?: EventsRuleBatchParameters;
  DeadLetterConfig?: EventsRuleDeadLetterConfig;
  EcsParameters?: EventsRuleEcsParameters;
  HttpParameters?: EventsRuleHttpParameters;
  Id: string;
  Input?: string;
  InputPath?: string;
  InputTransformer?: EventsRuleInputTransformer;
  KinesisParameters?: EventsRuleKinesisParameters;
  RedshiftDataParameters?: EventsRuleRedshiftDataParameters;
  RetryPolicy?: EventsRuleRetryPolicy;
  RoleArn?: string;
  RunCommandParameters?: EventsRuleRunCommandParameters;
  SageMakerPipelineParameters?: EventsRuleSageMakerPipelineParameters;
  SqsParameters?: EventsRuleSqsParameters;
}
/**
 * Type definition for AWS::Events::ApiDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-apidestination.html | AWS::Events::ApiDestination}
 */
export interface EventsApiDestinationProps {
  Description?: string;
  ConnectionArn: string;
  InvocationEndpoint: string;
  HttpMethod: string;
  Name?: string;
  InvocationRateLimitPerSecond?: number;
}
/**
 * Attributes type definition for AWS::Events::ApiDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-apidestination.html | AWS::Events::ApiDestination}
 */
export interface EventsApiDestinationAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::Events::ApiDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-apidestination.html | AWS::Events::ApiDestination}
 */
export class EventsApiDestination extends ResourceBase<
  "AWS::Events::ApiDestination",
  EventsApiDestinationProps,
  EventsApiDestinationAttribs
> {
  public static readonly Type = "AWS::Events::ApiDestination";
  public static readonly AttributeNames: readonly (keyof EventsApiDestinationAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: EventsApiDestinationProps,
    options?: ResourceOptions,
  ) {
    super(
      EventsApiDestination.Type,
      EventsApiDestination.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Events::Archive
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html | AWS::Events::Archive}
 */
export interface EventsArchiveProps {
  EventPattern?: object;
  Description?: string;
  SourceArn: string;
  ArchiveName?: string;
  RetentionDays?: number;
}
/**
 * Attributes type definition for AWS::Events::Archive
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html | AWS::Events::Archive}
 */
export interface EventsArchiveAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::Events::Archive
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html | AWS::Events::Archive}
 */
export class EventsArchive extends ResourceBase<
  "AWS::Events::Archive",
  EventsArchiveProps,
  EventsArchiveAttribs
> {
  public static readonly Type = "AWS::Events::Archive";
  public static readonly AttributeNames: readonly (keyof EventsArchiveAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: EventsArchiveProps,
    options?: ResourceOptions,
  ) {
    super(
      EventsArchive.Type,
      EventsArchive.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Events::Connection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html | AWS::Events::Connection}
 */
export interface EventsConnectionProps {
  AuthParameters?: EventsConnectionAuthParameters;
  Description?: string;
  AuthorizationType?: string;
  Name?: string;
}
/**
 * Attributes type definition for AWS::Events::Connection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html | AWS::Events::Connection}
 */
export interface EventsConnectionAttribs {
  SecretArn?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::Events::Connection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html | AWS::Events::Connection}
 */
export class EventsConnection extends ResourceBase<
  "AWS::Events::Connection",
  EventsConnectionProps,
  EventsConnectionAttribs
> {
  public static readonly Type = "AWS::Events::Connection";
  public static readonly AttributeNames: readonly (keyof EventsConnectionAttribs)[] =
    ["SecretArn", "Arn"];
  constructor(
    logicalId: string,
    properties: EventsConnectionProps,
    options?: ResourceOptions,
  ) {
    super(
      EventsConnection.Type,
      EventsConnection.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Events::Endpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-endpoint.html | AWS::Events::Endpoint}
 */
export interface EventsEndpointProps {
  EventBuses: any[];
  Description?: string;
  ReplicationConfig?: EventsEndpointReplicationConfig;
  RoutingConfig: EventsEndpointRoutingConfig;
  RoleArn?: string;
  Name?: string;
}
/**
 * Attributes type definition for AWS::Events::Endpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-endpoint.html | AWS::Events::Endpoint}
 */
export interface EventsEndpointAttribs {
  State?: string;
  StateReason?: string;
  EndpointId?: string;
  Arn?: string;
  EndpointUrl?: string;
}
/**
 * Resource class for AWS::Events::Endpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-endpoint.html | AWS::Events::Endpoint}
 */
export class EventsEndpoint extends ResourceBase<
  "AWS::Events::Endpoint",
  EventsEndpointProps,
  EventsEndpointAttribs
> {
  public static readonly Type = "AWS::Events::Endpoint";
  public static readonly AttributeNames: readonly (keyof EventsEndpointAttribs)[] =
    ["State", "StateReason", "EndpointId", "Arn", "EndpointUrl"];
  constructor(
    logicalId: string,
    properties: EventsEndpointProps,
    options?: ResourceOptions,
  ) {
    super(
      EventsEndpoint.Type,
      EventsEndpoint.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Events::EventBus
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-eventbus.html | AWS::Events::EventBus}
 */
export interface EventsEventBusProps {
  Policy?: object;
  EventSourceName?: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::Events::EventBus
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-eventbus.html | AWS::Events::EventBus}
 */
export interface EventsEventBusAttribs {
  Arn?: string;
  Name?: string;
}
/**
 * Resource class for AWS::Events::EventBus
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-eventbus.html | AWS::Events::EventBus}
 */
export class EventsEventBus extends ResourceBase<
  "AWS::Events::EventBus",
  EventsEventBusProps,
  EventsEventBusAttribs
> {
  public static readonly Type = "AWS::Events::EventBus";
  public static readonly AttributeNames: readonly (keyof EventsEventBusAttribs)[] =
    ["Arn", "Name"];
  constructor(
    logicalId: string,
    properties: EventsEventBusProps,
    options?: ResourceOptions,
  ) {
    super(
      EventsEventBus.Type,
      EventsEventBus.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Events::EventBusPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-eventbuspolicy.html | AWS::Events::EventBusPolicy}
 */
export interface EventsEventBusPolicyProps {
  EventBusName?: string;
  Condition?: EventsEventBusPolicyCondition;
  Action?: string;
  StatementId: string;
  Statement?: object;
  Principal?: string;
}
/**
 * Resource class for AWS::Events::EventBusPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-eventbuspolicy.html | AWS::Events::EventBusPolicy}
 */
export class EventsEventBusPolicy extends ResourceBase<
  "AWS::Events::EventBusPolicy",
  EventsEventBusPolicyProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Events::EventBusPolicy";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: EventsEventBusPolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      EventsEventBusPolicy.Type,
      EventsEventBusPolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Events::Rule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-rule.html | AWS::Events::Rule}
 */
export interface EventsRuleProps {
  Description?: string;
  EventBusName?: string;
  EventPattern?: object;
  Name?: string;
  RoleArn?: string;
  ScheduleExpression?: string;
  State?: string;
  Targets?: any[];
}
/**
 * Attributes type definition for AWS::Events::Rule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-rule.html | AWS::Events::Rule}
 */
export interface EventsRuleAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::Events::Rule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-rule.html | AWS::Events::Rule}
 */
export class EventsRule extends ResourceBase<
  "AWS::Events::Rule",
  EventsRuleProps,
  EventsRuleAttribs
> {
  public static readonly Type = "AWS::Events::Rule";
  public static readonly AttributeNames: readonly (keyof EventsRuleAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: EventsRuleProps,
    options?: ResourceOptions,
  ) {
    super(
      EventsRule.Type,
      EventsRule.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
