import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Pipes::Pipe.AwsVpcConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-awsvpcconfiguration.html | AWS::Pipes::Pipe.AwsVpcConfiguration}
 */
export interface PipesPipeAwsVpcConfiguration {
  SecurityGroups?: any[];
  Subnets: any[];
  AssignPublicIp?: string;
}
/**
 * Type definition for AWS::Pipes::Pipe.BatchArrayProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batcharrayproperties.html | AWS::Pipes::Pipe.BatchArrayProperties}
 */
export interface PipesPipeBatchArrayProperties {
  Size?: number;
}
/**
 * Type definition for AWS::Pipes::Pipe.BatchContainerOverrides
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batchcontaineroverrides.html | AWS::Pipes::Pipe.BatchContainerOverrides}
 */
export interface PipesPipeBatchContainerOverrides {
  Command?: any[];
  Environment?: any[];
  InstanceType?: string;
  ResourceRequirements?: any[];
}
/**
 * Type definition for AWS::Pipes::Pipe.BatchEnvironmentVariable
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batchenvironmentvariable.html | AWS::Pipes::Pipe.BatchEnvironmentVariable}
 */
export interface PipesPipeBatchEnvironmentVariable {
  Value?: string;
  Name?: string;
}
/**
 * Type definition for AWS::Pipes::Pipe.BatchJobDependency
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batchjobdependency.html | AWS::Pipes::Pipe.BatchJobDependency}
 */
export interface PipesPipeBatchJobDependency {
  Type?: string;
  JobId?: string;
}
/**
 * Type definition for AWS::Pipes::Pipe.BatchResourceRequirement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batchresourcerequirement.html | AWS::Pipes::Pipe.BatchResourceRequirement}
 */
export interface PipesPipeBatchResourceRequirement {
  Type: string;
  Value: string;
}
/**
 * Type definition for AWS::Pipes::Pipe.BatchRetryStrategy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batchretrystrategy.html | AWS::Pipes::Pipe.BatchRetryStrategy}
 */
export interface PipesPipeBatchRetryStrategy {
  Attempts?: number;
}
/**
 * Type definition for AWS::Pipes::Pipe.CapacityProviderStrategyItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-capacityproviderstrategyitem.html | AWS::Pipes::Pipe.CapacityProviderStrategyItem}
 */
export interface PipesPipeCapacityProviderStrategyItem {
  CapacityProvider: string;
  Weight?: number;
  Base?: number;
}
/**
 * Type definition for AWS::Pipes::Pipe.DeadLetterConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-deadletterconfig.html | AWS::Pipes::Pipe.DeadLetterConfig}
 */
export interface PipesPipeDeadLetterConfig {
  Arn?: string;
}
/**
 * Type definition for AWS::Pipes::Pipe.EcsContainerOverride
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecscontaineroverride.html | AWS::Pipes::Pipe.EcsContainerOverride}
 */
export interface PipesPipeEcsContainerOverride {
  MemoryReservation?: number;
  Command?: any[];
  Memory?: number;
  Cpu?: number;
  Environment?: any[];
  ResourceRequirements?: any[];
  EnvironmentFiles?: any[];
  Name?: string;
}
/**
 * Type definition for AWS::Pipes::Pipe.EcsEnvironmentFile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecsenvironmentfile.html | AWS::Pipes::Pipe.EcsEnvironmentFile}
 */
export interface PipesPipeEcsEnvironmentFile {
  Type: string;
  Value: string;
}
/**
 * Type definition for AWS::Pipes::Pipe.EcsEnvironmentVariable
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecsenvironmentvariable.html | AWS::Pipes::Pipe.EcsEnvironmentVariable}
 */
export interface PipesPipeEcsEnvironmentVariable {
  Value?: string;
  Name?: string;
}
/**
 * Type definition for AWS::Pipes::Pipe.EcsEphemeralStorage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecsephemeralstorage.html | AWS::Pipes::Pipe.EcsEphemeralStorage}
 */
export interface PipesPipeEcsEphemeralStorage {
  SizeInGiB: number;
}
/**
 * Type definition for AWS::Pipes::Pipe.EcsInferenceAcceleratorOverride
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecsinferenceacceleratoroverride.html | AWS::Pipes::Pipe.EcsInferenceAcceleratorOverride}
 */
export interface PipesPipeEcsInferenceAcceleratorOverride {
  DeviceType?: string;
  DeviceName?: string;
}
/**
 * Type definition for AWS::Pipes::Pipe.EcsResourceRequirement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecsresourcerequirement.html | AWS::Pipes::Pipe.EcsResourceRequirement}
 */
export interface PipesPipeEcsResourceRequirement {
  Type: string;
  Value: string;
}
/**
 * Type definition for AWS::Pipes::Pipe.EcsTaskOverride
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecstaskoverride.html | AWS::Pipes::Pipe.EcsTaskOverride}
 */
export interface PipesPipeEcsTaskOverride {
  ExecutionRoleArn?: string;
  TaskRoleArn?: string;
  Memory?: string;
  Cpu?: string;
  InferenceAcceleratorOverrides?: any[];
  EphemeralStorage?: PipesPipeEcsEphemeralStorage;
  ContainerOverrides?: any[];
}
/**
 * Type definition for AWS::Pipes::Pipe.Filter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-filter.html | AWS::Pipes::Pipe.Filter}
 */
export interface PipesPipeFilter {
  Pattern?: string;
}
/**
 * Type definition for AWS::Pipes::Pipe.FilterCriteria
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-filtercriteria.html | AWS::Pipes::Pipe.FilterCriteria}
 */
export interface PipesPipeFilterCriteria {
  Filters?: any[];
}
/**
 * Type definition for AWS::Pipes::Pipe.MQBrokerAccessCredentials
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-mqbrokeraccesscredentials.html | AWS::Pipes::Pipe.MQBrokerAccessCredentials}
 */
export interface PipesPipeMQBrokerAccessCredentials {
  BasicAuth: string;
}
/**
 * Type definition for AWS::Pipes::Pipe.MSKAccessCredentials
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-mskaccesscredentials.html | AWS::Pipes::Pipe.MSKAccessCredentials}
 */
export interface PipesPipeMSKAccessCredentials {
  ClientCertificateTlsAuth?: string;
  SaslScram512Auth?: string;
}
/**
 * Type definition for AWS::Pipes::Pipe.NetworkConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-networkconfiguration.html | AWS::Pipes::Pipe.NetworkConfiguration}
 */
export interface PipesPipeNetworkConfiguration {
  AwsvpcConfiguration?: PipesPipeAwsVpcConfiguration;
}
/**
 * Type definition for AWS::Pipes::Pipe.PipeEnrichmentHttpParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipeenrichmenthttpparameters.html | AWS::Pipes::Pipe.PipeEnrichmentHttpParameters}
 */
export interface PipesPipePipeEnrichmentHttpParameters {
  PathParameterValues?: any[];
  HeaderParameters?: Record<string, any>;
  QueryStringParameters?: Record<string, any>;
}
/**
 * Type definition for AWS::Pipes::Pipe.PipeEnrichmentParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipeenrichmentparameters.html | AWS::Pipes::Pipe.PipeEnrichmentParameters}
 */
export interface PipesPipePipeEnrichmentParameters {
  HttpParameters?: PipesPipePipeEnrichmentHttpParameters;
  InputTemplate?: string;
}
/**
 * Type definition for AWS::Pipes::Pipe.PipeSourceActiveMQBrokerParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceactivemqbrokerparameters.html | AWS::Pipes::Pipe.PipeSourceActiveMQBrokerParameters}
 */
export interface PipesPipePipeSourceActiveMQBrokerParameters {
  BatchSize?: number;
  QueueName: string;
  Credentials: PipesPipeMQBrokerAccessCredentials;
  MaximumBatchingWindowInSeconds?: number;
}
/**
 * Type definition for AWS::Pipes::Pipe.PipeSourceDynamoDBStreamParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcedynamodbstreamparameters.html | AWS::Pipes::Pipe.PipeSourceDynamoDBStreamParameters}
 */
export interface PipesPipePipeSourceDynamoDBStreamParameters {
  StartingPosition: string;
  BatchSize?: number;
  MaximumRetryAttempts?: number;
  OnPartialBatchItemFailure?: string;
  DeadLetterConfig?: PipesPipeDeadLetterConfig;
  ParallelizationFactor?: number;
  MaximumRecordAgeInSeconds?: number;
  MaximumBatchingWindowInSeconds?: number;
}
/**
 * Type definition for AWS::Pipes::Pipe.PipeSourceKinesisStreamParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcekinesisstreamparameters.html | AWS::Pipes::Pipe.PipeSourceKinesisStreamParameters}
 */
export interface PipesPipePipeSourceKinesisStreamParameters {
  StartingPosition: string;
  BatchSize?: number;
  MaximumRetryAttempts?: number;
  OnPartialBatchItemFailure?: string;
  DeadLetterConfig?: PipesPipeDeadLetterConfig;
  ParallelizationFactor?: number;
  MaximumRecordAgeInSeconds?: number;
  StartingPositionTimestamp?: string;
  MaximumBatchingWindowInSeconds?: number;
}
/**
 * Type definition for AWS::Pipes::Pipe.PipeSourceManagedStreamingKafkaParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcemanagedstreamingkafkaparameters.html | AWS::Pipes::Pipe.PipeSourceManagedStreamingKafkaParameters}
 */
export interface PipesPipePipeSourceManagedStreamingKafkaParameters {
  StartingPosition?: string;
  BatchSize?: number;
  ConsumerGroupID?: string;
  Credentials?: PipesPipeMSKAccessCredentials;
  TopicName: string;
  MaximumBatchingWindowInSeconds?: number;
}
/**
 * Type definition for AWS::Pipes::Pipe.PipeSourceParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html | AWS::Pipes::Pipe.PipeSourceParameters}
 */
export interface PipesPipePipeSourceParameters {
  ManagedStreamingKafkaParameters?: PipesPipePipeSourceManagedStreamingKafkaParameters;
  DynamoDBStreamParameters?: PipesPipePipeSourceDynamoDBStreamParameters;
  SelfManagedKafkaParameters?: PipesPipePipeSourceSelfManagedKafkaParameters;
  RabbitMQBrokerParameters?: PipesPipePipeSourceRabbitMQBrokerParameters;
  SqsQueueParameters?: PipesPipePipeSourceSqsQueueParameters;
  KinesisStreamParameters?: PipesPipePipeSourceKinesisStreamParameters;
  FilterCriteria?: PipesPipeFilterCriteria;
  ActiveMQBrokerParameters?: PipesPipePipeSourceActiveMQBrokerParameters;
}
/**
 * Type definition for AWS::Pipes::Pipe.PipeSourceRabbitMQBrokerParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcerabbitmqbrokerparameters.html | AWS::Pipes::Pipe.PipeSourceRabbitMQBrokerParameters}
 */
export interface PipesPipePipeSourceRabbitMQBrokerParameters {
  BatchSize?: number;
  VirtualHost?: string;
  QueueName: string;
  Credentials: PipesPipeMQBrokerAccessCredentials;
  MaximumBatchingWindowInSeconds?: number;
}
/**
 * Type definition for AWS::Pipes::Pipe.PipeSourceSelfManagedKafkaParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceselfmanagedkafkaparameters.html | AWS::Pipes::Pipe.PipeSourceSelfManagedKafkaParameters}
 */
export interface PipesPipePipeSourceSelfManagedKafkaParameters {
  StartingPosition?: string;
  BatchSize?: number;
  ConsumerGroupID?: string;
  AdditionalBootstrapServers?: any[];
  Vpc?: PipesPipeSelfManagedKafkaAccessConfigurationVpc;
  Credentials?: PipesPipeSelfManagedKafkaAccessConfigurationCredentials;
  ServerRootCaCertificate?: string;
  TopicName: string;
  MaximumBatchingWindowInSeconds?: number;
}
/**
 * Type definition for AWS::Pipes::Pipe.PipeSourceSqsQueueParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcesqsqueueparameters.html | AWS::Pipes::Pipe.PipeSourceSqsQueueParameters}
 */
export interface PipesPipePipeSourceSqsQueueParameters {
  BatchSize?: number;
  MaximumBatchingWindowInSeconds?: number;
}
/**
 * Type definition for AWS::Pipes::Pipe.PipeTargetBatchJobParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetbatchjobparameters.html | AWS::Pipes::Pipe.PipeTargetBatchJobParameters}
 */
export interface PipesPipePipeTargetBatchJobParameters {
  DependsOn?: any[];
  Parameters?: Record<string, any>;
  ArrayProperties?: PipesPipeBatchArrayProperties;
  JobName: string;
  RetryStrategy?: PipesPipeBatchRetryStrategy;
  JobDefinition: string;
  ContainerOverrides?: PipesPipeBatchContainerOverrides;
}
/**
 * Type definition for AWS::Pipes::Pipe.PipeTargetCloudWatchLogsParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetcloudwatchlogsparameters.html | AWS::Pipes::Pipe.PipeTargetCloudWatchLogsParameters}
 */
export interface PipesPipePipeTargetCloudWatchLogsParameters {
  LogStreamName?: string;
  Timestamp?: string;
}
/**
 * Type definition for AWS::Pipes::Pipe.PipeTargetEcsTaskParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetecstaskparameters.html | AWS::Pipes::Pipe.PipeTargetEcsTaskParameters}
 */
export interface PipesPipePipeTargetEcsTaskParameters {
  PlatformVersion?: string;
  Group?: string;
  EnableECSManagedTags?: boolean;
  TaskCount?: number;
  EnableExecuteCommand?: boolean;
  PlacementConstraints?: any[];
  PropagateTags?: string;
  PlacementStrategy?: any[];
  LaunchType?: string;
  CapacityProviderStrategy?: any[];
  ReferenceId?: string;
  Overrides?: PipesPipeEcsTaskOverride;
  NetworkConfiguration?: PipesPipeNetworkConfiguration;
  Tags?: Tag[];
  TaskDefinitionArn: string;
}
/**
 * Type definition for AWS::Pipes::Pipe.PipeTargetEventBridgeEventBusParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargeteventbridgeeventbusparameters.html | AWS::Pipes::Pipe.PipeTargetEventBridgeEventBusParameters}
 */
export interface PipesPipePipeTargetEventBridgeEventBusParameters {
  DetailType?: string;
  EndpointId?: string;
  Time?: string;
  Resources?: any[];
  Source?: string;
}
/**
 * Type definition for AWS::Pipes::Pipe.PipeTargetHttpParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargethttpparameters.html | AWS::Pipes::Pipe.PipeTargetHttpParameters}
 */
export interface PipesPipePipeTargetHttpParameters {
  PathParameterValues?: any[];
  HeaderParameters?: Record<string, any>;
  QueryStringParameters?: Record<string, any>;
}
/**
 * Type definition for AWS::Pipes::Pipe.PipeTargetKinesisStreamParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetkinesisstreamparameters.html | AWS::Pipes::Pipe.PipeTargetKinesisStreamParameters}
 */
export interface PipesPipePipeTargetKinesisStreamParameters {
  PartitionKey: string;
}
/**
 * Type definition for AWS::Pipes::Pipe.PipeTargetLambdaFunctionParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetlambdafunctionparameters.html | AWS::Pipes::Pipe.PipeTargetLambdaFunctionParameters}
 */
export interface PipesPipePipeTargetLambdaFunctionParameters {
  InvocationType?: string;
}
/**
 * Type definition for AWS::Pipes::Pipe.PipeTargetParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetparameters.html | AWS::Pipes::Pipe.PipeTargetParameters}
 */
export interface PipesPipePipeTargetParameters {
  StepFunctionStateMachineParameters?: PipesPipePipeTargetStateMachineParameters;
  HttpParameters?: PipesPipePipeTargetHttpParameters;
  SqsQueueParameters?: PipesPipePipeTargetSqsQueueParameters;
  CloudWatchLogsParameters?: PipesPipePipeTargetCloudWatchLogsParameters;
  KinesisStreamParameters?: PipesPipePipeTargetKinesisStreamParameters;
  InputTemplate?: string;
  SageMakerPipelineParameters?: PipesPipePipeTargetSageMakerPipelineParameters;
  EventBridgeEventBusParameters?: PipesPipePipeTargetEventBridgeEventBusParameters;
  LambdaFunctionParameters?: PipesPipePipeTargetLambdaFunctionParameters;
  EcsTaskParameters?: PipesPipePipeTargetEcsTaskParameters;
  BatchJobParameters?: PipesPipePipeTargetBatchJobParameters;
  RedshiftDataParameters?: PipesPipePipeTargetRedshiftDataParameters;
}
/**
 * Type definition for AWS::Pipes::Pipe.PipeTargetRedshiftDataParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetredshiftdataparameters.html | AWS::Pipes::Pipe.PipeTargetRedshiftDataParameters}
 */
export interface PipesPipePipeTargetRedshiftDataParameters {
  StatementName?: string;
  Sqls: any[];
  Database: string;
  SecretManagerArn?: string;
  DbUser?: string;
  WithEvent?: boolean;
}
/**
 * Type definition for AWS::Pipes::Pipe.PipeTargetSageMakerPipelineParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetsagemakerpipelineparameters.html | AWS::Pipes::Pipe.PipeTargetSageMakerPipelineParameters}
 */
export interface PipesPipePipeTargetSageMakerPipelineParameters {
  PipelineParameterList?: any[];
}
/**
 * Type definition for AWS::Pipes::Pipe.PipeTargetSqsQueueParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetsqsqueueparameters.html | AWS::Pipes::Pipe.PipeTargetSqsQueueParameters}
 */
export interface PipesPipePipeTargetSqsQueueParameters {
  MessageGroupId?: string;
  MessageDeduplicationId?: string;
}
/**
 * Type definition for AWS::Pipes::Pipe.PipeTargetStateMachineParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetstatemachineparameters.html | AWS::Pipes::Pipe.PipeTargetStateMachineParameters}
 */
export interface PipesPipePipeTargetStateMachineParameters {
  InvocationType?: string;
}
/**
 * Type definition for AWS::Pipes::Pipe.PlacementConstraint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-placementconstraint.html | AWS::Pipes::Pipe.PlacementConstraint}
 */
export interface PipesPipePlacementConstraint {
  Type?: string;
  Expression?: string;
}
/**
 * Type definition for AWS::Pipes::Pipe.PlacementStrategy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-placementstrategy.html | AWS::Pipes::Pipe.PlacementStrategy}
 */
export interface PipesPipePlacementStrategy {
  Field?: string;
  Type?: string;
}
/**
 * Type definition for AWS::Pipes::Pipe.SageMakerPipelineParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-sagemakerpipelineparameter.html | AWS::Pipes::Pipe.SageMakerPipelineParameter}
 */
export interface PipesPipeSageMakerPipelineParameter {
  Value: string;
  Name: string;
}
/**
 * Type definition for AWS::Pipes::Pipe.SelfManagedKafkaAccessConfigurationCredentials
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-selfmanagedkafkaaccessconfigurationcredentials.html | AWS::Pipes::Pipe.SelfManagedKafkaAccessConfigurationCredentials}
 */
export interface PipesPipeSelfManagedKafkaAccessConfigurationCredentials {
  BasicAuth?: string;
  SaslScram256Auth?: string;
  ClientCertificateTlsAuth?: string;
  SaslScram512Auth?: string;
}
/**
 * Type definition for AWS::Pipes::Pipe.SelfManagedKafkaAccessConfigurationVpc
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-selfmanagedkafkaaccessconfigurationvpc.html | AWS::Pipes::Pipe.SelfManagedKafkaAccessConfigurationVpc}
 */
export interface PipesPipeSelfManagedKafkaAccessConfigurationVpc {
  Subnets?: any[];
  SecurityGroup?: any[];
}
/**
 * Type definition for AWS::Pipes::Pipe
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html | AWS::Pipes::Pipe}
 */
export interface PipesPipeProps {
  Enrichment?: string;
  Target: string;
  Description?: string;
  DesiredState?: string;
  TargetParameters?: PipesPipePipeTargetParameters;
  EnrichmentParameters?: PipesPipePipeEnrichmentParameters;
  RoleArn: string;
  Source: string;
  SourceParameters?: PipesPipePipeSourceParameters;
  Tags?: Record<string, Tag>;
  Name?: string;
}
/**
 * Attributes type definition for AWS::Pipes::Pipe
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html | AWS::Pipes::Pipe}
 */
export interface PipesPipeAttribs {
  StateReason?: string;
  CurrentState?: string;
  CreationTime?: string;
  LastModifiedTime?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::Pipes::Pipe
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html | AWS::Pipes::Pipe}
 */
export class PipesPipe extends ResourceBase<
  "AWS::Pipes::Pipe",
  PipesPipeProps,
  PipesPipeAttribs
> {
  public static readonly Type = "AWS::Pipes::Pipe";
  public static readonly AttributeNames: readonly (keyof PipesPipeAttribs)[] = [
    "StateReason",
    "CurrentState",
    "CreationTime",
    "LastModifiedTime",
    "Arn",
  ];
  constructor(
    logicalId: string,
    properties: PipesPipeProps,
    options?: ResourceOptions,
  ) {
    super(
      PipesPipe.Type,
      PipesPipe.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
