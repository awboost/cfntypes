import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::MediaConnect::Bridge.BridgeFlowSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-bridgeflowsource.html | AWS::MediaConnect::Bridge.BridgeFlowSource}
 */
export interface MediaConnectBridgeBridgeFlowSource {
  FlowVpcInterfaceAttachment?: MediaConnectBridgeVpcInterfaceAttachment;
  FlowArn: string;
  Name: string;
}
/**
 * Type definition for AWS::MediaConnect::Bridge.BridgeNetworkOutput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-bridgenetworkoutput.html | AWS::MediaConnect::Bridge.BridgeNetworkOutput}
 */
export interface MediaConnectBridgeBridgeNetworkOutput {
  NetworkName: string;
  Port: number;
  IpAddress: string;
  Protocol: string;
  Ttl: number;
  Name: string;
}
/**
 * Type definition for AWS::MediaConnect::Bridge.BridgeNetworkSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-bridgenetworksource.html | AWS::MediaConnect::Bridge.BridgeNetworkSource}
 */
export interface MediaConnectBridgeBridgeNetworkSource {
  NetworkName: string;
  MulticastIp: string;
  Port: number;
  Protocol: string;
  Name: string;
}
/**
 * Type definition for AWS::MediaConnect::Bridge.BridgeOutput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-bridgeoutput.html | AWS::MediaConnect::Bridge.BridgeOutput}
 */
export interface MediaConnectBridgeBridgeOutput {
  NetworkOutput?: MediaConnectBridgeBridgeNetworkOutput;
}
/**
 * Type definition for AWS::MediaConnect::Bridge.BridgeSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-bridgesource.html | AWS::MediaConnect::Bridge.BridgeSource}
 */
export interface MediaConnectBridgeBridgeSource {
  NetworkSource?: MediaConnectBridgeBridgeNetworkSource;
  FlowSource?: MediaConnectBridgeBridgeFlowSource;
}
/**
 * Type definition for AWS::MediaConnect::Bridge.EgressGatewayBridge
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-egressgatewaybridge.html | AWS::MediaConnect::Bridge.EgressGatewayBridge}
 */
export interface MediaConnectBridgeEgressGatewayBridge {
  MaxBitrate: number;
}
/**
 * Type definition for AWS::MediaConnect::Bridge.FailoverConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-failoverconfig.html | AWS::MediaConnect::Bridge.FailoverConfig}
 */
export interface MediaConnectBridgeFailoverConfig {
  State?: string;
  SourcePriority?: MediaConnectBridgeSourcePriority;
  FailoverMode: string;
}
/**
 * Type definition for AWS::MediaConnect::Bridge.IngressGatewayBridge
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-ingressgatewaybridge.html | AWS::MediaConnect::Bridge.IngressGatewayBridge}
 */
export interface MediaConnectBridgeIngressGatewayBridge {
  MaxOutputs: number;
  MaxBitrate: number;
}
/**
 * Type definition for AWS::MediaConnect::Bridge.SourcePriority
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-sourcepriority.html | AWS::MediaConnect::Bridge.SourcePriority}
 */
export interface MediaConnectBridgeSourcePriority {
  PrimarySource?: string;
}
/**
 * Type definition for AWS::MediaConnect::Bridge.VpcInterfaceAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridge-vpcinterfaceattachment.html | AWS::MediaConnect::Bridge.VpcInterfaceAttachment}
 */
export interface MediaConnectBridgeVpcInterfaceAttachment {
  VpcInterfaceName?: string;
}
/**
 * Type definition for AWS::MediaConnect::BridgeOutput.BridgeNetworkOutput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridgeoutput-bridgenetworkoutput.html | AWS::MediaConnect::BridgeOutput.BridgeNetworkOutput}
 */
export interface MediaConnectBridgeOutputBridgeNetworkOutput {
  NetworkName: string;
  Port: number;
  IpAddress: string;
  Protocol: string;
  Ttl: number;
}
/**
 * Type definition for AWS::MediaConnect::BridgeSource.BridgeFlowSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridgesource-bridgeflowsource.html | AWS::MediaConnect::BridgeSource.BridgeFlowSource}
 */
export interface MediaConnectBridgeSourceBridgeFlowSource {
  FlowVpcInterfaceAttachment?: MediaConnectBridgeSourceVpcInterfaceAttachment;
  FlowArn: string;
}
/**
 * Type definition for AWS::MediaConnect::BridgeSource.BridgeNetworkSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridgesource-bridgenetworksource.html | AWS::MediaConnect::BridgeSource.BridgeNetworkSource}
 */
export interface MediaConnectBridgeSourceBridgeNetworkSource {
  NetworkName: string;
  MulticastIp: string;
  Port: number;
  Protocol: string;
}
/**
 * Type definition for AWS::MediaConnect::BridgeSource.VpcInterfaceAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-bridgesource-vpcinterfaceattachment.html | AWS::MediaConnect::BridgeSource.VpcInterfaceAttachment}
 */
export interface MediaConnectBridgeSourceVpcInterfaceAttachment {
  VpcInterfaceName?: string;
}
/**
 * Type definition for AWS::MediaConnect::Flow.Encryption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-encryption.html | AWS::MediaConnect::Flow.Encryption}
 */
export interface MediaConnectFlowEncryption {
  SecretArn?: string;
  KeyType?: string;
  ResourceId?: string;
  DeviceId?: string;
  Region?: string;
  ConstantInitializationVector?: string;
  Algorithm?: string;
  RoleArn: string;
  Url?: string;
}
/**
 * Type definition for AWS::MediaConnect::Flow.FailoverConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-failoverconfig.html | AWS::MediaConnect::Flow.FailoverConfig}
 */
export interface MediaConnectFlowFailoverConfig {
  State?: string;
  SourcePriority?: MediaConnectFlowSourcePriority;
  FailoverMode?: string;
  RecoveryWindow?: number;
}
/**
 * Type definition for AWS::MediaConnect::Flow.GatewayBridgeSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-gatewaybridgesource.html | AWS::MediaConnect::Flow.GatewayBridgeSource}
 */
export interface MediaConnectFlowGatewayBridgeSource {
  BridgeArn: string;
  VpcInterfaceAttachment?: MediaConnectFlowVpcInterfaceAttachment;
}
/**
 * Type definition for AWS::MediaConnect::Flow.Source
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-source.html | AWS::MediaConnect::Flow.Source}
 */
export interface MediaConnectFlowSource {
  IngestIp?: string;
  StreamId?: string;
  Description?: string;
  SenderIpAddress?: string;
  IngestPort?: number;
  SenderControlPort?: number;
  Decryption?: MediaConnectFlowEncryption;
  GatewayBridgeSource?: MediaConnectFlowGatewayBridgeSource;
  SourceListenerAddress?: string;
  SourceListenerPort?: number;
  Name?: string;
  WhitelistCidr?: string;
  EntitlementArn?: string;
  SourceArn?: string;
  MinLatency?: number;
  VpcInterfaceName?: string;
  MaxBitrate?: number;
  Protocol?: string;
  MaxLatency?: number;
  SourceIngestPort?: string;
}
/**
 * Type definition for AWS::MediaConnect::Flow.SourcePriority
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-sourcepriority.html | AWS::MediaConnect::Flow.SourcePriority}
 */
export interface MediaConnectFlowSourcePriority {
  PrimarySource: string;
}
/**
 * Type definition for AWS::MediaConnect::Flow.VpcInterfaceAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-vpcinterfaceattachment.html | AWS::MediaConnect::Flow.VpcInterfaceAttachment}
 */
export interface MediaConnectFlowVpcInterfaceAttachment {
  VpcInterfaceName?: string;
}
/**
 * Type definition for AWS::MediaConnect::FlowEntitlement.Encryption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowentitlement-encryption.html | AWS::MediaConnect::FlowEntitlement.Encryption}
 */
export interface MediaConnectFlowEntitlementEncryption {
  SecretArn?: string;
  KeyType?: string;
  ResourceId?: string;
  DeviceId?: string;
  Region?: string;
  ConstantInitializationVector?: string;
  Algorithm: string;
  RoleArn: string;
  Url?: string;
}
/**
 * Type definition for AWS::MediaConnect::FlowOutput.Encryption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-encryption.html | AWS::MediaConnect::FlowOutput.Encryption}
 */
export interface MediaConnectFlowOutputEncryption {
  SecretArn: string;
  KeyType?: string;
  Algorithm?: string;
  RoleArn: string;
}
/**
 * Type definition for AWS::MediaConnect::FlowOutput.VpcInterfaceAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-vpcinterfaceattachment.html | AWS::MediaConnect::FlowOutput.VpcInterfaceAttachment}
 */
export interface MediaConnectFlowOutputVpcInterfaceAttachment {
  VpcInterfaceName?: string;
}
/**
 * Type definition for AWS::MediaConnect::FlowSource.Encryption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowsource-encryption.html | AWS::MediaConnect::FlowSource.Encryption}
 */
export interface MediaConnectFlowSourceEncryption {
  SecretArn?: string;
  KeyType?: string;
  ResourceId?: string;
  DeviceId?: string;
  Region?: string;
  ConstantInitializationVector?: string;
  Algorithm?: string;
  RoleArn: string;
  Url?: string;
}
/**
 * Type definition for AWS::MediaConnect::FlowSource.GatewayBridgeSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowsource-gatewaybridgesource.html | AWS::MediaConnect::FlowSource.GatewayBridgeSource}
 */
export interface MediaConnectFlowSourceGatewayBridgeSource {
  BridgeArn: string;
  VpcInterfaceAttachment?: MediaConnectFlowSourceVpcInterfaceAttachment;
}
/**
 * Type definition for AWS::MediaConnect::FlowSource.VpcInterfaceAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowsource-vpcinterfaceattachment.html | AWS::MediaConnect::FlowSource.VpcInterfaceAttachment}
 */
export interface MediaConnectFlowSourceVpcInterfaceAttachment {
  VpcInterfaceName?: string;
}
/**
 * Type definition for AWS::MediaConnect::Gateway.GatewayNetwork
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-gateway-gatewaynetwork.html | AWS::MediaConnect::Gateway.GatewayNetwork}
 */
export interface MediaConnectGatewayGatewayNetwork {
  CidrBlock: string;
  Name: string;
}
/**
 * Type definition for AWS::MediaConnect::Bridge
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridge.html | AWS::MediaConnect::Bridge}
 */
export interface MediaConnectBridgeProps {
  SourceFailoverConfig?: MediaConnectBridgeFailoverConfig;
  IngressGatewayBridge?: MediaConnectBridgeIngressGatewayBridge;
  EgressGatewayBridge?: MediaConnectBridgeEgressGatewayBridge;
  Outputs?: any[];
  PlacementArn: string;
  Sources: any[];
  Name: string;
}
/**
 * Attributes type definition for AWS::MediaConnect::Bridge
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridge.html | AWS::MediaConnect::Bridge}
 */
export interface MediaConnectBridgeAttribs {
  BridgeArn?: string;
  BridgeState?: string;
}
/**
 * Resource class for AWS::MediaConnect::Bridge
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridge.html | AWS::MediaConnect::Bridge}
 */
export class MediaConnectBridge extends ResourceBase<
  "AWS::MediaConnect::Bridge",
  MediaConnectBridgeProps,
  MediaConnectBridgeAttribs
> {
  public static readonly Type = "AWS::MediaConnect::Bridge";
  public static readonly AttributeNames: readonly (keyof MediaConnectBridgeAttribs)[] =
    ["BridgeArn", "BridgeState"];
  constructor(
    logicalId: string,
    properties: MediaConnectBridgeProps,
    options?: ResourceOptions,
  ) {
    super(
      MediaConnectBridge.Type,
      MediaConnectBridge.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::MediaConnect::BridgeOutput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridgeoutput.html | AWS::MediaConnect::BridgeOutput}
 */
export interface MediaConnectBridgeOutputProps {
  BridgeArn: string;
  NetworkOutput: MediaConnectBridgeOutputBridgeNetworkOutput;
  Name: string;
}
/**
 * Resource class for AWS::MediaConnect::BridgeOutput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridgeoutput.html | AWS::MediaConnect::BridgeOutput}
 */
export class MediaConnectBridgeOutput extends ResourceBase<
  "AWS::MediaConnect::BridgeOutput",
  MediaConnectBridgeOutputProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::MediaConnect::BridgeOutput";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: MediaConnectBridgeOutputProps,
    options?: ResourceOptions,
  ) {
    super(
      MediaConnectBridgeOutput.Type,
      MediaConnectBridgeOutput.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::MediaConnect::BridgeSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridgesource.html | AWS::MediaConnect::BridgeSource}
 */
export interface MediaConnectBridgeSourceProps {
  NetworkSource?: MediaConnectBridgeSourceBridgeNetworkSource;
  BridgeArn: string;
  FlowSource?: MediaConnectBridgeSourceBridgeFlowSource;
  Name: string;
}
/**
 * Resource class for AWS::MediaConnect::BridgeSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridgesource.html | AWS::MediaConnect::BridgeSource}
 */
export class MediaConnectBridgeSource extends ResourceBase<
  "AWS::MediaConnect::BridgeSource",
  MediaConnectBridgeSourceProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::MediaConnect::BridgeSource";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: MediaConnectBridgeSourceProps,
    options?: ResourceOptions,
  ) {
    super(
      MediaConnectBridgeSource.Type,
      MediaConnectBridgeSource.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::MediaConnect::Flow
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html | AWS::MediaConnect::Flow}
 */
export interface MediaConnectFlowProps {
  SourceFailoverConfig?: MediaConnectFlowFailoverConfig;
  AvailabilityZone?: string;
  Source: MediaConnectFlowSource;
  Name: string;
}
/**
 * Attributes type definition for AWS::MediaConnect::Flow
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html | AWS::MediaConnect::Flow}
 */
export interface MediaConnectFlowAttribs {
  FlowAvailabilityZone?: string;
  "Source.SourceIngestPort"?: string;
  "Source.IngestIp"?: string;
  "Source.SourceArn"?: string;
  FlowArn?: string;
}
/**
 * Resource class for AWS::MediaConnect::Flow
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html | AWS::MediaConnect::Flow}
 */
export class MediaConnectFlow extends ResourceBase<
  "AWS::MediaConnect::Flow",
  MediaConnectFlowProps,
  MediaConnectFlowAttribs
> {
  public static readonly Type = "AWS::MediaConnect::Flow";
  public static readonly AttributeNames: readonly (keyof MediaConnectFlowAttribs)[] =
    [
      "FlowAvailabilityZone",
      "Source.SourceIngestPort",
      "Source.IngestIp",
      "Source.SourceArn",
      "FlowArn",
    ];
  constructor(
    logicalId: string,
    properties: MediaConnectFlowProps,
    options?: ResourceOptions,
  ) {
    super(
      MediaConnectFlow.Type,
      MediaConnectFlow.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::MediaConnect::FlowEntitlement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowentitlement.html | AWS::MediaConnect::FlowEntitlement}
 */
export interface MediaConnectFlowEntitlementProps {
  DataTransferSubscriberFeePercent?: number;
  Description: string;
  Encryption?: MediaConnectFlowEntitlementEncryption;
  Subscribers: any[];
  FlowArn: string;
  EntitlementStatus?: string;
  Name: string;
}
/**
 * Attributes type definition for AWS::MediaConnect::FlowEntitlement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowentitlement.html | AWS::MediaConnect::FlowEntitlement}
 */
export interface MediaConnectFlowEntitlementAttribs {
  EntitlementArn?: string;
}
/**
 * Resource class for AWS::MediaConnect::FlowEntitlement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowentitlement.html | AWS::MediaConnect::FlowEntitlement}
 */
export class MediaConnectFlowEntitlement extends ResourceBase<
  "AWS::MediaConnect::FlowEntitlement",
  MediaConnectFlowEntitlementProps,
  MediaConnectFlowEntitlementAttribs
> {
  public static readonly Type = "AWS::MediaConnect::FlowEntitlement";
  public static readonly AttributeNames: readonly (keyof MediaConnectFlowEntitlementAttribs)[] =
    ["EntitlementArn"];
  constructor(
    logicalId: string,
    properties: MediaConnectFlowEntitlementProps,
    options?: ResourceOptions,
  ) {
    super(
      MediaConnectFlowEntitlement.Type,
      MediaConnectFlowEntitlement.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::MediaConnect::FlowOutput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowoutput.html | AWS::MediaConnect::FlowOutput}
 */
export interface MediaConnectFlowOutputProps {
  Destination?: string;
  SmoothingLatency?: number;
  StreamId?: string;
  Description?: string;
  Port?: number;
  RemoteId?: string;
  Encryption?: MediaConnectFlowOutputEncryption;
  Name?: string;
  VpcInterfaceAttachment?: MediaConnectFlowOutputVpcInterfaceAttachment;
  MinLatency?: number;
  Protocol: string;
  FlowArn: string;
  MaxLatency?: number;
  CidrAllowList?: any[];
}
/**
 * Attributes type definition for AWS::MediaConnect::FlowOutput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowoutput.html | AWS::MediaConnect::FlowOutput}
 */
export interface MediaConnectFlowOutputAttribs {
  OutputArn?: string;
}
/**
 * Resource class for AWS::MediaConnect::FlowOutput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowoutput.html | AWS::MediaConnect::FlowOutput}
 */
export class MediaConnectFlowOutput extends ResourceBase<
  "AWS::MediaConnect::FlowOutput",
  MediaConnectFlowOutputProps,
  MediaConnectFlowOutputAttribs
> {
  public static readonly Type = "AWS::MediaConnect::FlowOutput";
  public static readonly AttributeNames: readonly (keyof MediaConnectFlowOutputAttribs)[] =
    ["OutputArn"];
  constructor(
    logicalId: string,
    properties: MediaConnectFlowOutputProps,
    options?: ResourceOptions,
  ) {
    super(
      MediaConnectFlowOutput.Type,
      MediaConnectFlowOutput.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::MediaConnect::FlowSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowsource.html | AWS::MediaConnect::FlowSource}
 */
export interface MediaConnectFlowSourceProps {
  StreamId?: string;
  Description: string;
  SenderIpAddress?: string;
  IngestPort?: number;
  SenderControlPort?: number;
  Decryption?: MediaConnectFlowSourceEncryption;
  GatewayBridgeSource?: MediaConnectFlowSourceGatewayBridgeSource;
  SourceListenerAddress?: string;
  SourceListenerPort?: number;
  Name: string;
  WhitelistCidr?: string;
  EntitlementArn?: string;
  MinLatency?: number;
  VpcInterfaceName?: string;
  MaxBitrate?: number;
  Protocol?: string;
  FlowArn?: string;
  MaxLatency?: number;
}
/**
 * Attributes type definition for AWS::MediaConnect::FlowSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowsource.html | AWS::MediaConnect::FlowSource}
 */
export interface MediaConnectFlowSourceAttribs {
  IngestIp?: string;
  SourceArn?: string;
  SourceIngestPort?: string;
}
/**
 * Resource class for AWS::MediaConnect::FlowSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowsource.html | AWS::MediaConnect::FlowSource}
 */
export class MediaConnectFlowSource extends ResourceBase<
  "AWS::MediaConnect::FlowSource",
  MediaConnectFlowSourceProps,
  MediaConnectFlowSourceAttribs
> {
  public static readonly Type = "AWS::MediaConnect::FlowSource";
  public static readonly AttributeNames: readonly (keyof MediaConnectFlowSourceAttribs)[] =
    ["IngestIp", "SourceArn", "SourceIngestPort"];
  constructor(
    logicalId: string,
    properties: MediaConnectFlowSourceProps,
    options?: ResourceOptions,
  ) {
    super(
      MediaConnectFlowSource.Type,
      MediaConnectFlowSource.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::MediaConnect::FlowVpcInterface
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowvpcinterface.html | AWS::MediaConnect::FlowVpcInterface}
 */
export interface MediaConnectFlowVpcInterfaceProps {
  SubnetId: string;
  FlowArn: string;
  SecurityGroupIds: any[];
  RoleArn: string;
  Name: string;
}
/**
 * Attributes type definition for AWS::MediaConnect::FlowVpcInterface
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowvpcinterface.html | AWS::MediaConnect::FlowVpcInterface}
 */
export interface MediaConnectFlowVpcInterfaceAttribs {
  NetworkInterfaceIds?: any[];
}
/**
 * Resource class for AWS::MediaConnect::FlowVpcInterface
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowvpcinterface.html | AWS::MediaConnect::FlowVpcInterface}
 */
export class MediaConnectFlowVpcInterface extends ResourceBase<
  "AWS::MediaConnect::FlowVpcInterface",
  MediaConnectFlowVpcInterfaceProps,
  MediaConnectFlowVpcInterfaceAttribs
> {
  public static readonly Type = "AWS::MediaConnect::FlowVpcInterface";
  public static readonly AttributeNames: readonly (keyof MediaConnectFlowVpcInterfaceAttribs)[] =
    ["NetworkInterfaceIds"];
  constructor(
    logicalId: string,
    properties: MediaConnectFlowVpcInterfaceProps,
    options?: ResourceOptions,
  ) {
    super(
      MediaConnectFlowVpcInterface.Type,
      MediaConnectFlowVpcInterface.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::MediaConnect::Gateway
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-gateway.html | AWS::MediaConnect::Gateway}
 */
export interface MediaConnectGatewayProps {
  Networks: any[];
  EgressCidrBlocks: any[];
  Name: string;
}
/**
 * Attributes type definition for AWS::MediaConnect::Gateway
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-gateway.html | AWS::MediaConnect::Gateway}
 */
export interface MediaConnectGatewayAttribs {
  GatewayArn?: string;
  GatewayState?: string;
}
/**
 * Resource class for AWS::MediaConnect::Gateway
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-gateway.html | AWS::MediaConnect::Gateway}
 */
export class MediaConnectGateway extends ResourceBase<
  "AWS::MediaConnect::Gateway",
  MediaConnectGatewayProps,
  MediaConnectGatewayAttribs
> {
  public static readonly Type = "AWS::MediaConnect::Gateway";
  public static readonly AttributeNames: readonly (keyof MediaConnectGatewayAttribs)[] =
    ["GatewayArn", "GatewayState"];
  constructor(
    logicalId: string,
    properties: MediaConnectGatewayProps,
    options?: ResourceOptions,
  ) {
    super(
      MediaConnectGateway.Type,
      MediaConnectGateway.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
