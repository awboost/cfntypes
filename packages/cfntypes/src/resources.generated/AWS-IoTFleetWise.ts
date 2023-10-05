import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::IoTFleetWise::Campaign.CollectionScheme
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-collectionscheme.html | AWS::IoTFleetWise::Campaign.CollectionScheme}
 */
export interface IoTFleetWiseCampaignCollectionScheme {
  TimeBasedCollectionScheme?: IoTFleetWiseCampaignTimeBasedCollectionScheme;
  ConditionBasedCollectionScheme?: IoTFleetWiseCampaignConditionBasedCollectionScheme;
}
/**
 * Type definition for AWS::IoTFleetWise::Campaign.ConditionBasedCollectionScheme
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-conditionbasedcollectionscheme.html | AWS::IoTFleetWise::Campaign.ConditionBasedCollectionScheme}
 */
export interface IoTFleetWiseCampaignConditionBasedCollectionScheme {
  MinimumTriggerIntervalMs?: number;
  Expression: string;
  TriggerMode?: string;
  ConditionLanguageVersion?: number;
}
/**
 * Type definition for AWS::IoTFleetWise::Campaign.DataDestinationConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-datadestinationconfig.html | AWS::IoTFleetWise::Campaign.DataDestinationConfig}
 */
export interface IoTFleetWiseCampaignDataDestinationConfig {
  S3Config?: IoTFleetWiseCampaignS3Config;
  TimestreamConfig?: IoTFleetWiseCampaignTimestreamConfig;
}
/**
 * Type definition for AWS::IoTFleetWise::Campaign.S3Config
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-s3config.html | AWS::IoTFleetWise::Campaign.S3Config}
 */
export interface IoTFleetWiseCampaignS3Config {
  BucketArn: string;
  DataFormat?: string;
  StorageCompressionFormat?: string;
  Prefix?: string;
}
/**
 * Type definition for AWS::IoTFleetWise::Campaign.SignalInformation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-signalinformation.html | AWS::IoTFleetWise::Campaign.SignalInformation}
 */
export interface IoTFleetWiseCampaignSignalInformation {
  MaxSampleCount?: number;
  MinimumSamplingIntervalMs?: number;
  Name: string;
}
/**
 * Type definition for AWS::IoTFleetWise::Campaign.TimeBasedCollectionScheme
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-timebasedcollectionscheme.html | AWS::IoTFleetWise::Campaign.TimeBasedCollectionScheme}
 */
export interface IoTFleetWiseCampaignTimeBasedCollectionScheme {
  PeriodMs: number;
}
/**
 * Type definition for AWS::IoTFleetWise::Campaign.TimestreamConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-timestreamconfig.html | AWS::IoTFleetWise::Campaign.TimestreamConfig}
 */
export interface IoTFleetWiseCampaignTimestreamConfig {
  ExecutionRoleArn: string;
  TimestreamTableArn: string;
}
/**
 * Type definition for AWS::IoTFleetWise::DecoderManifest.CanInterface
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-caninterface.html | AWS::IoTFleetWise::DecoderManifest.CanInterface}
 */
export interface IoTFleetWiseDecoderManifestCanInterface {
  ProtocolName?: string;
  ProtocolVersion?: string;
  Name: string;
}
/**
 * Type definition for AWS::IoTFleetWise::DecoderManifest.CanSignal
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-cansignal.html | AWS::IoTFleetWise::DecoderManifest.CanSignal}
 */
export interface IoTFleetWiseDecoderManifestCanSignal {
  IsBigEndian: string;
  Length: string;
  Factor: string;
  IsSigned: string;
  StartBit: string;
  MessageId: string;
  Offset: string;
  Name?: string;
}
/**
 * Type definition for AWS::IoTFleetWise::DecoderManifest.NetworkInterfacesItems
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-networkinterfacesitems.html | AWS::IoTFleetWise::DecoderManifest.NetworkInterfacesItems}
 */
export interface IoTFleetWiseDecoderManifestNetworkInterfacesItems {
  Type: string;
  CanInterface?: IoTFleetWiseDecoderManifestCanInterface;
  InterfaceId: string;
  ObdInterface?: IoTFleetWiseDecoderManifestObdInterface;
}
/**
 * Type definition for AWS::IoTFleetWise::DecoderManifest.ObdInterface
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-obdinterface.html | AWS::IoTFleetWise::DecoderManifest.ObdInterface}
 */
export interface IoTFleetWiseDecoderManifestObdInterface {
  HasTransmissionEcu?: string;
  PidRequestIntervalSeconds?: string;
  UseExtendedIds?: string;
  RequestMessageId: string;
  ObdStandard?: string;
  Name: string;
  DtcRequestIntervalSeconds?: string;
}
/**
 * Type definition for AWS::IoTFleetWise::DecoderManifest.ObdSignal
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-obdsignal.html | AWS::IoTFleetWise::DecoderManifest.ObdSignal}
 */
export interface IoTFleetWiseDecoderManifestObdSignal {
  BitRightShift?: string;
  BitMaskLength?: string;
  StartByte: string;
  ByteLength: string;
  PidResponseLength: string;
  Scaling: string;
  Pid: string;
  ServiceMode: string;
  Offset: string;
}
/**
 * Type definition for AWS::IoTFleetWise::DecoderManifest.SignalDecodersItems
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-signaldecodersitems.html | AWS::IoTFleetWise::DecoderManifest.SignalDecodersItems}
 */
export interface IoTFleetWiseDecoderManifestSignalDecodersItems {
  Type: string;
  ObdSignal?: IoTFleetWiseDecoderManifestObdSignal;
  FullyQualifiedName: string;
  CanSignal?: IoTFleetWiseDecoderManifestCanSignal;
  InterfaceId: string;
}
/**
 * Type definition for AWS::IoTFleetWise::SignalCatalog.Actuator
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-actuator.html | AWS::IoTFleetWise::SignalCatalog.Actuator}
 */
export interface IoTFleetWiseSignalCatalogActuator {
  Description?: string;
  AllowedValues?: any[];
  Min?: number;
  Max?: number;
  FullyQualifiedName: string;
  AssignedValue?: string;
  DataType: string;
  Unit?: string;
}
/**
 * Type definition for AWS::IoTFleetWise::SignalCatalog.Attribute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-attribute.html | AWS::IoTFleetWise::SignalCatalog.Attribute}
 */
export interface IoTFleetWiseSignalCatalogAttribute {
  DefaultValue?: string;
  Description?: string;
  AllowedValues?: any[];
  Min?: number;
  Max?: number;
  FullyQualifiedName: string;
  AssignedValue?: string;
  DataType: string;
  Unit?: string;
}
/**
 * Type definition for AWS::IoTFleetWise::SignalCatalog.Branch
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-branch.html | AWS::IoTFleetWise::SignalCatalog.Branch}
 */
export interface IoTFleetWiseSignalCatalogBranch {
  Description?: string;
  FullyQualifiedName: string;
}
/**
 * Type definition for AWS::IoTFleetWise::SignalCatalog.Node
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-node.html | AWS::IoTFleetWise::SignalCatalog.Node}
 */
export interface IoTFleetWiseSignalCatalogNode {
  Attribute?: IoTFleetWiseSignalCatalogAttribute;
  Branch?: IoTFleetWiseSignalCatalogBranch;
  Sensor?: IoTFleetWiseSignalCatalogSensor;
  Actuator?: IoTFleetWiseSignalCatalogActuator;
}
/**
 * Type definition for AWS::IoTFleetWise::SignalCatalog.NodeCounts
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-nodecounts.html | AWS::IoTFleetWise::SignalCatalog.NodeCounts}
 */
export interface IoTFleetWiseSignalCatalogNodeCounts {
  TotalActuators?: number;
  TotalNodes?: number;
  TotalAttributes?: number;
  TotalBranches?: number;
  TotalSensors?: number;
}
/**
 * Type definition for AWS::IoTFleetWise::SignalCatalog.Sensor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-sensor.html | AWS::IoTFleetWise::SignalCatalog.Sensor}
 */
export interface IoTFleetWiseSignalCatalogSensor {
  Description?: string;
  AllowedValues?: any[];
  Min?: number;
  Max?: number;
  FullyQualifiedName: string;
  DataType: string;
  Unit?: string;
}
/**
 * Type definition for AWS::IoTFleetWise::Campaign
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html | AWS::IoTFleetWise::Campaign}
 */
export interface IoTFleetWiseCampaignProps {
  Action: string;
  Compression?: string;
  Description?: string;
  Priority?: number;
  SignalsToCollect?: any[];
  StartTime?: string;
  ExpiryTime?: string;
  SpoolingMode?: string;
  DataDestinationConfigs?: any[];
  SignalCatalogArn: string;
  Name: string;
  PostTriggerCollectionDuration?: number;
  DataExtraDimensions?: any[];
  DiagnosticsMode?: string;
  TargetArn: string;
  CollectionScheme: IoTFleetWiseCampaignCollectionScheme;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::IoTFleetWise::Campaign
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html | AWS::IoTFleetWise::Campaign}
 */
export interface IoTFleetWiseCampaignAttribs {
  Status?: string;
  LastModificationTime?: string;
  CreationTime?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::IoTFleetWise::Campaign
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html | AWS::IoTFleetWise::Campaign}
 */
export class IoTFleetWiseCampaign extends ResourceBase<
  "AWS::IoTFleetWise::Campaign",
  IoTFleetWiseCampaignProps,
  IoTFleetWiseCampaignAttribs
> {
  public static readonly Type = "AWS::IoTFleetWise::Campaign";
  public static readonly AttributeNames: readonly (keyof IoTFleetWiseCampaignAttribs)[] =
    ["Status", "LastModificationTime", "CreationTime", "Arn"];
  constructor(
    logicalId: string,
    properties: IoTFleetWiseCampaignProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTFleetWiseCampaign.Type,
      IoTFleetWiseCampaign.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoTFleetWise::DecoderManifest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html | AWS::IoTFleetWise::DecoderManifest}
 */
export interface IoTFleetWiseDecoderManifestProps {
  SignalDecoders?: any[];
  Status?: string;
  Description?: string;
  NetworkInterfaces?: any[];
  ModelManifestArn: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::IoTFleetWise::DecoderManifest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html | AWS::IoTFleetWise::DecoderManifest}
 */
export interface IoTFleetWiseDecoderManifestAttribs {
  LastModificationTime?: string;
  CreationTime?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::IoTFleetWise::DecoderManifest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html | AWS::IoTFleetWise::DecoderManifest}
 */
export class IoTFleetWiseDecoderManifest extends ResourceBase<
  "AWS::IoTFleetWise::DecoderManifest",
  IoTFleetWiseDecoderManifestProps,
  IoTFleetWiseDecoderManifestAttribs
> {
  public static readonly Type = "AWS::IoTFleetWise::DecoderManifest";
  public static readonly AttributeNames: readonly (keyof IoTFleetWiseDecoderManifestAttribs)[] =
    ["LastModificationTime", "CreationTime", "Arn"];
  constructor(
    logicalId: string,
    properties: IoTFleetWiseDecoderManifestProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTFleetWiseDecoderManifest.Type,
      IoTFleetWiseDecoderManifest.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoTFleetWise::Fleet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-fleet.html | AWS::IoTFleetWise::Fleet}
 */
export interface IoTFleetWiseFleetProps {
  Description?: string;
  Id: string;
  SignalCatalogArn: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::IoTFleetWise::Fleet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-fleet.html | AWS::IoTFleetWise::Fleet}
 */
export interface IoTFleetWiseFleetAttribs {
  LastModificationTime?: string;
  CreationTime?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::IoTFleetWise::Fleet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-fleet.html | AWS::IoTFleetWise::Fleet}
 */
export class IoTFleetWiseFleet extends ResourceBase<
  "AWS::IoTFleetWise::Fleet",
  IoTFleetWiseFleetProps,
  IoTFleetWiseFleetAttribs
> {
  public static readonly Type = "AWS::IoTFleetWise::Fleet";
  public static readonly AttributeNames: readonly (keyof IoTFleetWiseFleetAttribs)[] =
    ["LastModificationTime", "CreationTime", "Arn"];
  constructor(
    logicalId: string,
    properties: IoTFleetWiseFleetProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTFleetWiseFleet.Type,
      IoTFleetWiseFleet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoTFleetWise::ModelManifest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-modelmanifest.html | AWS::IoTFleetWise::ModelManifest}
 */
export interface IoTFleetWiseModelManifestProps {
  Status?: string;
  Description?: string;
  SignalCatalogArn: string;
  Nodes?: any[];
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::IoTFleetWise::ModelManifest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-modelmanifest.html | AWS::IoTFleetWise::ModelManifest}
 */
export interface IoTFleetWiseModelManifestAttribs {
  LastModificationTime?: string;
  CreationTime?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::IoTFleetWise::ModelManifest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-modelmanifest.html | AWS::IoTFleetWise::ModelManifest}
 */
export class IoTFleetWiseModelManifest extends ResourceBase<
  "AWS::IoTFleetWise::ModelManifest",
  IoTFleetWiseModelManifestProps,
  IoTFleetWiseModelManifestAttribs
> {
  public static readonly Type = "AWS::IoTFleetWise::ModelManifest";
  public static readonly AttributeNames: readonly (keyof IoTFleetWiseModelManifestAttribs)[] =
    ["LastModificationTime", "CreationTime", "Arn"];
  constructor(
    logicalId: string,
    properties: IoTFleetWiseModelManifestProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTFleetWiseModelManifest.Type,
      IoTFleetWiseModelManifest.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoTFleetWise::SignalCatalog
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-signalcatalog.html | AWS::IoTFleetWise::SignalCatalog}
 */
export interface IoTFleetWiseSignalCatalogProps {
  Description?: string;
  NodeCounts?: IoTFleetWiseSignalCatalogNodeCounts;
  Nodes?: any[];
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::IoTFleetWise::SignalCatalog
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-signalcatalog.html | AWS::IoTFleetWise::SignalCatalog}
 */
export interface IoTFleetWiseSignalCatalogAttribs {
  LastModificationTime?: string;
  "NodeCounts.TotalNodes"?: number;
  "NodeCounts.TotalSensors"?: number;
  "NodeCounts.TotalAttributes"?: number;
  "NodeCounts.TotalBranches"?: number;
  "NodeCounts.TotalActuators"?: number;
  CreationTime?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::IoTFleetWise::SignalCatalog
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-signalcatalog.html | AWS::IoTFleetWise::SignalCatalog}
 */
export class IoTFleetWiseSignalCatalog extends ResourceBase<
  "AWS::IoTFleetWise::SignalCatalog",
  IoTFleetWiseSignalCatalogProps,
  IoTFleetWiseSignalCatalogAttribs
> {
  public static readonly Type = "AWS::IoTFleetWise::SignalCatalog";
  public static readonly AttributeNames: readonly (keyof IoTFleetWiseSignalCatalogAttribs)[] =
    [
      "LastModificationTime",
      "NodeCounts.TotalNodes",
      "NodeCounts.TotalSensors",
      "NodeCounts.TotalAttributes",
      "NodeCounts.TotalBranches",
      "NodeCounts.TotalActuators",
      "CreationTime",
      "Arn",
    ];
  constructor(
    logicalId: string,
    properties: IoTFleetWiseSignalCatalogProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTFleetWiseSignalCatalog.Type,
      IoTFleetWiseSignalCatalog.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoTFleetWise::Vehicle
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html | AWS::IoTFleetWise::Vehicle}
 */
export interface IoTFleetWiseVehicleProps {
  AssociationBehavior?: string;
  Attributes?: Record<string, any>;
  DecoderManifestArn: string;
  ModelManifestArn: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::IoTFleetWise::Vehicle
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html | AWS::IoTFleetWise::Vehicle}
 */
export interface IoTFleetWiseVehicleAttribs {
  LastModificationTime?: string;
  CreationTime?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::IoTFleetWise::Vehicle
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html | AWS::IoTFleetWise::Vehicle}
 */
export class IoTFleetWiseVehicle extends ResourceBase<
  "AWS::IoTFleetWise::Vehicle",
  IoTFleetWiseVehicleProps,
  IoTFleetWiseVehicleAttribs
> {
  public static readonly Type = "AWS::IoTFleetWise::Vehicle";
  public static readonly AttributeNames: readonly (keyof IoTFleetWiseVehicleAttribs)[] =
    ["LastModificationTime", "CreationTime", "Arn"];
  constructor(
    logicalId: string,
    properties: IoTFleetWiseVehicleProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTFleetWiseVehicle.Type,
      IoTFleetWiseVehicle.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
