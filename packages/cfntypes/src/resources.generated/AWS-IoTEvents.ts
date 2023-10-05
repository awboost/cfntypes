import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::IoTEvents::AlarmModel.AcknowledgeFlow
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-acknowledgeflow.html | AWS::IoTEvents::AlarmModel.AcknowledgeFlow}
 */
export interface IoTEventsAlarmModelAcknowledgeFlow {
  Enabled?: boolean;
}
/**
 * Type definition for AWS::IoTEvents::AlarmModel.AlarmAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-alarmaction.html | AWS::IoTEvents::AlarmModel.AlarmAction}
 */
export interface IoTEventsAlarmModelAlarmAction {
  DynamoDBv2?: IoTEventsAlarmModelDynamoDBv2;
  IotEvents?: IoTEventsAlarmModelIotEvents;
  IotSiteWise?: IoTEventsAlarmModelIotSiteWise;
  Sqs?: IoTEventsAlarmModelSqs;
  Firehose?: IoTEventsAlarmModelFirehose;
  DynamoDB?: IoTEventsAlarmModelDynamoDB;
  IotTopicPublish?: IoTEventsAlarmModelIotTopicPublish;
  Sns?: IoTEventsAlarmModelSns;
  Lambda?: IoTEventsAlarmModelLambda;
}
/**
 * Type definition for AWS::IoTEvents::AlarmModel.AlarmCapabilities
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-alarmcapabilities.html | AWS::IoTEvents::AlarmModel.AlarmCapabilities}
 */
export interface IoTEventsAlarmModelAlarmCapabilities {
  AcknowledgeFlow?: IoTEventsAlarmModelAcknowledgeFlow;
  InitializationConfiguration?: IoTEventsAlarmModelInitializationConfiguration;
}
/**
 * Type definition for AWS::IoTEvents::AlarmModel.AlarmEventActions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-alarmeventactions.html | AWS::IoTEvents::AlarmModel.AlarmEventActions}
 */
export interface IoTEventsAlarmModelAlarmEventActions {
  AlarmActions?: any[];
}
/**
 * Type definition for AWS::IoTEvents::AlarmModel.AlarmRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-alarmrule.html | AWS::IoTEvents::AlarmModel.AlarmRule}
 */
export interface IoTEventsAlarmModelAlarmRule {
  SimpleRule?: IoTEventsAlarmModelSimpleRule;
}
/**
 * Type definition for AWS::IoTEvents::AlarmModel.AssetPropertyTimestamp
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-assetpropertytimestamp.html | AWS::IoTEvents::AlarmModel.AssetPropertyTimestamp}
 */
export interface IoTEventsAlarmModelAssetPropertyTimestamp {
  TimeInSeconds: string;
  OffsetInNanos?: string;
}
/**
 * Type definition for AWS::IoTEvents::AlarmModel.AssetPropertyValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-assetpropertyvalue.html | AWS::IoTEvents::AlarmModel.AssetPropertyValue}
 */
export interface IoTEventsAlarmModelAssetPropertyValue {
  Quality?: string;
  Value: IoTEventsAlarmModelAssetPropertyVariant;
  Timestamp?: IoTEventsAlarmModelAssetPropertyTimestamp;
}
/**
 * Type definition for AWS::IoTEvents::AlarmModel.AssetPropertyVariant
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-assetpropertyvariant.html | AWS::IoTEvents::AlarmModel.AssetPropertyVariant}
 */
export interface IoTEventsAlarmModelAssetPropertyVariant {
  DoubleValue?: string;
  BooleanValue?: string;
  IntegerValue?: string;
  StringValue?: string;
}
/**
 * Type definition for AWS::IoTEvents::AlarmModel.DynamoDB
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-dynamodb.html | AWS::IoTEvents::AlarmModel.DynamoDB}
 */
export interface IoTEventsAlarmModelDynamoDB {
  TableName: string;
  PayloadField?: string;
  RangeKeyField?: string;
  HashKeyField: string;
  RangeKeyValue?: string;
  RangeKeyType?: string;
  HashKeyType?: string;
  HashKeyValue: string;
  Payload?: IoTEventsAlarmModelPayload;
  Operation?: string;
}
/**
 * Type definition for AWS::IoTEvents::AlarmModel.DynamoDBv2
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-dynamodbv2.html | AWS::IoTEvents::AlarmModel.DynamoDBv2}
 */
export interface IoTEventsAlarmModelDynamoDBv2 {
  TableName: string;
  Payload?: IoTEventsAlarmModelPayload;
}
/**
 * Type definition for AWS::IoTEvents::AlarmModel.Firehose
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-firehose.html | AWS::IoTEvents::AlarmModel.Firehose}
 */
export interface IoTEventsAlarmModelFirehose {
  DeliveryStreamName: string;
  Payload?: IoTEventsAlarmModelPayload;
  Separator?: string;
}
/**
 * Type definition for AWS::IoTEvents::AlarmModel.InitializationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-initializationconfiguration.html | AWS::IoTEvents::AlarmModel.InitializationConfiguration}
 */
export interface IoTEventsAlarmModelInitializationConfiguration {
  DisabledOnInitialization: boolean;
}
/**
 * Type definition for AWS::IoTEvents::AlarmModel.IotEvents
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-iotevents.html | AWS::IoTEvents::AlarmModel.IotEvents}
 */
export interface IoTEventsAlarmModelIotEvents {
  InputName: string;
  Payload?: IoTEventsAlarmModelPayload;
}
/**
 * Type definition for AWS::IoTEvents::AlarmModel.IotSiteWise
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-iotsitewise.html | AWS::IoTEvents::AlarmModel.IotSiteWise}
 */
export interface IoTEventsAlarmModelIotSiteWise {
  EntryId?: string;
  PropertyAlias?: string;
  PropertyValue?: IoTEventsAlarmModelAssetPropertyValue;
  AssetId?: string;
  PropertyId?: string;
}
/**
 * Type definition for AWS::IoTEvents::AlarmModel.IotTopicPublish
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-iottopicpublish.html | AWS::IoTEvents::AlarmModel.IotTopicPublish}
 */
export interface IoTEventsAlarmModelIotTopicPublish {
  MqttTopic: string;
  Payload?: IoTEventsAlarmModelPayload;
}
/**
 * Type definition for AWS::IoTEvents::AlarmModel.Lambda
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-lambda.html | AWS::IoTEvents::AlarmModel.Lambda}
 */
export interface IoTEventsAlarmModelLambda {
  FunctionArn: string;
  Payload?: IoTEventsAlarmModelPayload;
}
/**
 * Type definition for AWS::IoTEvents::AlarmModel.Payload
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-payload.html | AWS::IoTEvents::AlarmModel.Payload}
 */
export interface IoTEventsAlarmModelPayload {
  ContentExpression: string;
  Type: string;
}
/**
 * Type definition for AWS::IoTEvents::AlarmModel.SimpleRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-simplerule.html | AWS::IoTEvents::AlarmModel.SimpleRule}
 */
export interface IoTEventsAlarmModelSimpleRule {
  ComparisonOperator: string;
  InputProperty: string;
  Threshold: string;
}
/**
 * Type definition for AWS::IoTEvents::AlarmModel.Sns
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-sns.html | AWS::IoTEvents::AlarmModel.Sns}
 */
export interface IoTEventsAlarmModelSns {
  TargetArn: string;
  Payload?: IoTEventsAlarmModelPayload;
}
/**
 * Type definition for AWS::IoTEvents::AlarmModel.Sqs
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-sqs.html | AWS::IoTEvents::AlarmModel.Sqs}
 */
export interface IoTEventsAlarmModelSqs {
  UseBase64?: boolean;
  Payload?: IoTEventsAlarmModelPayload;
  QueueUrl: string;
}
/**
 * Type definition for AWS::IoTEvents::DetectorModel.Action
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-action.html | AWS::IoTEvents::DetectorModel.Action}
 */
export interface IoTEventsDetectorModelAction {
  IotEvents?: IoTEventsDetectorModelIotEvents;
  Firehose?: IoTEventsDetectorModelFirehose;
  DynamoDB?: IoTEventsDetectorModelDynamoDB;
  IotTopicPublish?: IoTEventsDetectorModelIotTopicPublish;
  DynamoDBv2?: IoTEventsDetectorModelDynamoDBv2;
  IotSiteWise?: IoTEventsDetectorModelIotSiteWise;
  ResetTimer?: IoTEventsDetectorModelResetTimer;
  Sqs?: IoTEventsDetectorModelSqs;
  SetTimer?: IoTEventsDetectorModelSetTimer;
  Sns?: IoTEventsDetectorModelSns;
  ClearTimer?: IoTEventsDetectorModelClearTimer;
  Lambda?: IoTEventsDetectorModelLambda;
  SetVariable?: IoTEventsDetectorModelSetVariable;
}
/**
 * Type definition for AWS::IoTEvents::DetectorModel.AssetPropertyTimestamp
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-assetpropertytimestamp.html | AWS::IoTEvents::DetectorModel.AssetPropertyTimestamp}
 */
export interface IoTEventsDetectorModelAssetPropertyTimestamp {
  TimeInSeconds: string;
  OffsetInNanos?: string;
}
/**
 * Type definition for AWS::IoTEvents::DetectorModel.AssetPropertyValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-assetpropertyvalue.html | AWS::IoTEvents::DetectorModel.AssetPropertyValue}
 */
export interface IoTEventsDetectorModelAssetPropertyValue {
  Quality?: string;
  Value: IoTEventsDetectorModelAssetPropertyVariant;
  Timestamp?: IoTEventsDetectorModelAssetPropertyTimestamp;
}
/**
 * Type definition for AWS::IoTEvents::DetectorModel.AssetPropertyVariant
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-assetpropertyvariant.html | AWS::IoTEvents::DetectorModel.AssetPropertyVariant}
 */
export interface IoTEventsDetectorModelAssetPropertyVariant {
  DoubleValue?: string;
  BooleanValue?: string;
  IntegerValue?: string;
  StringValue?: string;
}
/**
 * Type definition for AWS::IoTEvents::DetectorModel.ClearTimer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-cleartimer.html | AWS::IoTEvents::DetectorModel.ClearTimer}
 */
export interface IoTEventsDetectorModelClearTimer {
  TimerName: string;
}
/**
 * Type definition for AWS::IoTEvents::DetectorModel.DetectorModelDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-detectormodeldefinition.html | AWS::IoTEvents::DetectorModel.DetectorModelDefinition}
 */
export interface IoTEventsDetectorModelDetectorModelDefinition {
  States: any[];
  InitialStateName: string;
}
/**
 * Type definition for AWS::IoTEvents::DetectorModel.DynamoDB
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-dynamodb.html | AWS::IoTEvents::DetectorModel.DynamoDB}
 */
export interface IoTEventsDetectorModelDynamoDB {
  TableName: string;
  PayloadField?: string;
  RangeKeyField?: string;
  HashKeyField: string;
  RangeKeyValue?: string;
  RangeKeyType?: string;
  HashKeyType?: string;
  HashKeyValue: string;
  Payload?: IoTEventsDetectorModelPayload;
  Operation?: string;
}
/**
 * Type definition for AWS::IoTEvents::DetectorModel.DynamoDBv2
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-dynamodbv2.html | AWS::IoTEvents::DetectorModel.DynamoDBv2}
 */
export interface IoTEventsDetectorModelDynamoDBv2 {
  TableName: string;
  Payload?: IoTEventsDetectorModelPayload;
}
/**
 * Type definition for AWS::IoTEvents::DetectorModel.Event
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-event.html | AWS::IoTEvents::DetectorModel.Event}
 */
export interface IoTEventsDetectorModelEvent {
  Condition?: string;
  Actions?: any[];
  EventName: string;
}
/**
 * Type definition for AWS::IoTEvents::DetectorModel.Firehose
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-firehose.html | AWS::IoTEvents::DetectorModel.Firehose}
 */
export interface IoTEventsDetectorModelFirehose {
  DeliveryStreamName: string;
  Payload?: IoTEventsDetectorModelPayload;
  Separator?: string;
}
/**
 * Type definition for AWS::IoTEvents::DetectorModel.IotEvents
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-iotevents.html | AWS::IoTEvents::DetectorModel.IotEvents}
 */
export interface IoTEventsDetectorModelIotEvents {
  InputName: string;
  Payload?: IoTEventsDetectorModelPayload;
}
/**
 * Type definition for AWS::IoTEvents::DetectorModel.IotSiteWise
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-iotsitewise.html | AWS::IoTEvents::DetectorModel.IotSiteWise}
 */
export interface IoTEventsDetectorModelIotSiteWise {
  EntryId?: string;
  PropertyAlias?: string;
  PropertyValue: IoTEventsDetectorModelAssetPropertyValue;
  AssetId?: string;
  PropertyId?: string;
}
/**
 * Type definition for AWS::IoTEvents::DetectorModel.IotTopicPublish
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-iottopicpublish.html | AWS::IoTEvents::DetectorModel.IotTopicPublish}
 */
export interface IoTEventsDetectorModelIotTopicPublish {
  MqttTopic: string;
  Payload?: IoTEventsDetectorModelPayload;
}
/**
 * Type definition for AWS::IoTEvents::DetectorModel.Lambda
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-lambda.html | AWS::IoTEvents::DetectorModel.Lambda}
 */
export interface IoTEventsDetectorModelLambda {
  FunctionArn: string;
  Payload?: IoTEventsDetectorModelPayload;
}
/**
 * Type definition for AWS::IoTEvents::DetectorModel.OnEnter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-onenter.html | AWS::IoTEvents::DetectorModel.OnEnter}
 */
export interface IoTEventsDetectorModelOnEnter {
  Events?: any[];
}
/**
 * Type definition for AWS::IoTEvents::DetectorModel.OnExit
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-onexit.html | AWS::IoTEvents::DetectorModel.OnExit}
 */
export interface IoTEventsDetectorModelOnExit {
  Events?: any[];
}
/**
 * Type definition for AWS::IoTEvents::DetectorModel.OnInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-oninput.html | AWS::IoTEvents::DetectorModel.OnInput}
 */
export interface IoTEventsDetectorModelOnInput {
  Events?: any[];
  TransitionEvents?: any[];
}
/**
 * Type definition for AWS::IoTEvents::DetectorModel.Payload
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-payload.html | AWS::IoTEvents::DetectorModel.Payload}
 */
export interface IoTEventsDetectorModelPayload {
  ContentExpression: string;
  Type: string;
}
/**
 * Type definition for AWS::IoTEvents::DetectorModel.ResetTimer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-resettimer.html | AWS::IoTEvents::DetectorModel.ResetTimer}
 */
export interface IoTEventsDetectorModelResetTimer {
  TimerName: string;
}
/**
 * Type definition for AWS::IoTEvents::DetectorModel.SetTimer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-settimer.html | AWS::IoTEvents::DetectorModel.SetTimer}
 */
export interface IoTEventsDetectorModelSetTimer {
  Seconds?: number;
  TimerName: string;
  DurationExpression?: string;
}
/**
 * Type definition for AWS::IoTEvents::DetectorModel.SetVariable
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-setvariable.html | AWS::IoTEvents::DetectorModel.SetVariable}
 */
export interface IoTEventsDetectorModelSetVariable {
  Value: string;
  VariableName: string;
}
/**
 * Type definition for AWS::IoTEvents::DetectorModel.Sns
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-sns.html | AWS::IoTEvents::DetectorModel.Sns}
 */
export interface IoTEventsDetectorModelSns {
  TargetArn: string;
  Payload?: IoTEventsDetectorModelPayload;
}
/**
 * Type definition for AWS::IoTEvents::DetectorModel.Sqs
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-sqs.html | AWS::IoTEvents::DetectorModel.Sqs}
 */
export interface IoTEventsDetectorModelSqs {
  UseBase64?: boolean;
  Payload?: IoTEventsDetectorModelPayload;
  QueueUrl: string;
}
/**
 * Type definition for AWS::IoTEvents::DetectorModel.State
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-state.html | AWS::IoTEvents::DetectorModel.State}
 */
export interface IoTEventsDetectorModelState {
  OnInput?: IoTEventsDetectorModelOnInput;
  OnExit?: IoTEventsDetectorModelOnExit;
  StateName: string;
  OnEnter?: IoTEventsDetectorModelOnEnter;
}
/**
 * Type definition for AWS::IoTEvents::DetectorModel.TransitionEvent
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-transitionevent.html | AWS::IoTEvents::DetectorModel.TransitionEvent}
 */
export interface IoTEventsDetectorModelTransitionEvent {
  Condition: string;
  Actions?: any[];
  NextState: string;
  EventName: string;
}
/**
 * Type definition for AWS::IoTEvents::Input.Attribute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-input-attribute.html | AWS::IoTEvents::Input.Attribute}
 */
export interface IoTEventsInputAttribute {
  JsonPath: string;
}
/**
 * Type definition for AWS::IoTEvents::Input.InputDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-input-inputdefinition.html | AWS::IoTEvents::Input.InputDefinition}
 */
export interface IoTEventsInputInputDefinition {
  Attributes: any[];
}
/**
 * Type definition for AWS::IoTEvents::AlarmModel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-alarmmodel.html | AWS::IoTEvents::AlarmModel}
 */
export interface IoTEventsAlarmModelProps {
  AlarmRule: IoTEventsAlarmModelAlarmRule;
  AlarmModelName?: string;
  AlarmModelDescription?: string;
  Severity?: number;
  AlarmCapabilities?: IoTEventsAlarmModelAlarmCapabilities;
  RoleArn: string;
  Key?: string;
  AlarmEventActions?: IoTEventsAlarmModelAlarmEventActions;
  Tags?: Tag[];
}
/**
 * Resource class for AWS::IoTEvents::AlarmModel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-alarmmodel.html | AWS::IoTEvents::AlarmModel}
 */
export class IoTEventsAlarmModel extends ResourceBase<
  "AWS::IoTEvents::AlarmModel",
  IoTEventsAlarmModelProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::IoTEvents::AlarmModel";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: IoTEventsAlarmModelProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTEventsAlarmModel.Type,
      IoTEventsAlarmModel.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoTEvents::DetectorModel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-detectormodel.html | AWS::IoTEvents::DetectorModel}
 */
export interface IoTEventsDetectorModelProps {
  DetectorModelDefinition: IoTEventsDetectorModelDetectorModelDefinition;
  EvaluationMethod?: string;
  DetectorModelName?: string;
  DetectorModelDescription?: string;
  Key?: string;
  RoleArn: string;
  Tags?: Tag[];
}
/**
 * Resource class for AWS::IoTEvents::DetectorModel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-detectormodel.html | AWS::IoTEvents::DetectorModel}
 */
export class IoTEventsDetectorModel extends ResourceBase<
  "AWS::IoTEvents::DetectorModel",
  IoTEventsDetectorModelProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::IoTEvents::DetectorModel";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: IoTEventsDetectorModelProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTEventsDetectorModel.Type,
      IoTEventsDetectorModel.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoTEvents::Input
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-input.html | AWS::IoTEvents::Input}
 */
export interface IoTEventsInputProps {
  InputDefinition: IoTEventsInputInputDefinition;
  InputName?: string;
  InputDescription?: string;
  Tags?: Tag[];
}
/**
 * Resource class for AWS::IoTEvents::Input
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-input.html | AWS::IoTEvents::Input}
 */
export class IoTEventsInput extends ResourceBase<
  "AWS::IoTEvents::Input",
  IoTEventsInputProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::IoTEvents::Input";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: IoTEventsInputProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTEventsInput.Type,
      IoTEventsInput.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
