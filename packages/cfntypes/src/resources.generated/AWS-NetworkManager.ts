import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::NetworkManager::ConnectAttachment.ConnectAttachmentOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-connectattachment-connectattachmentoptions.html | AWS::NetworkManager::ConnectAttachment.ConnectAttachmentOptions}
 */
export interface NetworkManagerConnectAttachmentConnectAttachmentOptions {
  Protocol?: string;
}
/**
 * Type definition for AWS::NetworkManager::ConnectAttachment.ProposedSegmentChange
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-connectattachment-proposedsegmentchange.html | AWS::NetworkManager::ConnectAttachment.ProposedSegmentChange}
 */
export interface NetworkManagerConnectAttachmentProposedSegmentChange {
  SegmentName?: string;
  Tags?: Tag[];
  AttachmentPolicyRuleNumber?: number;
}
/**
 * Type definition for AWS::NetworkManager::ConnectPeer.BgpOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-connectpeer-bgpoptions.html | AWS::NetworkManager::ConnectPeer.BgpOptions}
 */
export interface NetworkManagerConnectPeerBgpOptions {
  PeerAsn?: number;
}
/**
 * Type definition for AWS::NetworkManager::ConnectPeer.ConnectPeerBgpConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-connectpeer-connectpeerbgpconfiguration.html | AWS::NetworkManager::ConnectPeer.ConnectPeerBgpConfiguration}
 */
export interface NetworkManagerConnectPeerConnectPeerBgpConfiguration {
  PeerAddress?: string;
  CoreNetworkAddress?: string;
  PeerAsn?: number;
  CoreNetworkAsn?: number;
}
/**
 * Type definition for AWS::NetworkManager::ConnectPeer.ConnectPeerConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-connectpeer-connectpeerconfiguration.html | AWS::NetworkManager::ConnectPeer.ConnectPeerConfiguration}
 */
export interface NetworkManagerConnectPeerConnectPeerConfiguration {
  BgpConfigurations?: any[];
  PeerAddress?: string;
  CoreNetworkAddress?: string;
  InsideCidrBlocks?: any[];
  Protocol?: string;
}
/**
 * Type definition for AWS::NetworkManager::CoreNetwork.CoreNetworkEdge
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-corenetwork-corenetworkedge.html | AWS::NetworkManager::CoreNetwork.CoreNetworkEdge}
 */
export interface NetworkManagerCoreNetworkCoreNetworkEdge {
  InsideCidrBlocks?: any[];
  Asn?: number;
  EdgeLocation?: string;
}
/**
 * Type definition for AWS::NetworkManager::CoreNetwork.CoreNetworkSegment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-corenetwork-corenetworksegment.html | AWS::NetworkManager::CoreNetwork.CoreNetworkSegment}
 */
export interface NetworkManagerCoreNetworkCoreNetworkSegment {
  EdgeLocations?: any[];
  SharedSegments?: any[];
  Name?: string;
}
/**
 * Type definition for AWS::NetworkManager::Device.AWSLocation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-device-awslocation.html | AWS::NetworkManager::Device.AWSLocation}
 */
export interface NetworkManagerDeviceAWSLocation {
  Zone?: string;
  SubnetArn?: string;
}
/**
 * Type definition for AWS::NetworkManager::Device.Location
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-device-location.html | AWS::NetworkManager::Device.Location}
 */
export interface NetworkManagerDeviceLocation {
  Address?: string;
  Latitude?: string;
  Longitude?: string;
}
/**
 * Type definition for AWS::NetworkManager::Link.Bandwidth
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-link-bandwidth.html | AWS::NetworkManager::Link.Bandwidth}
 */
export interface NetworkManagerLinkBandwidth {
  DownloadSpeed?: number;
  UploadSpeed?: number;
}
/**
 * Type definition for AWS::NetworkManager::Site.Location
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-site-location.html | AWS::NetworkManager::Site.Location}
 */
export interface NetworkManagerSiteLocation {
  Address?: string;
  Latitude?: string;
  Longitude?: string;
}
/**
 * Type definition for AWS::NetworkManager::SiteToSiteVpnAttachment.ProposedSegmentChange
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-sitetositevpnattachment-proposedsegmentchange.html | AWS::NetworkManager::SiteToSiteVpnAttachment.ProposedSegmentChange}
 */
export interface NetworkManagerSiteToSiteVpnAttachmentProposedSegmentChange {
  SegmentName?: string;
  Tags?: Tag[];
  AttachmentPolicyRuleNumber?: number;
}
/**
 * Type definition for AWS::NetworkManager::TransitGatewayRouteTableAttachment.ProposedSegmentChange
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-transitgatewayroutetableattachment-proposedsegmentchange.html | AWS::NetworkManager::TransitGatewayRouteTableAttachment.ProposedSegmentChange}
 */
export interface NetworkManagerTransitGatewayRouteTableAttachmentProposedSegmentChange {
  SegmentName?: string;
  Tags?: Tag[];
  AttachmentPolicyRuleNumber?: number;
}
/**
 * Type definition for AWS::NetworkManager::VpcAttachment.ProposedSegmentChange
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-vpcattachment-proposedsegmentchange.html | AWS::NetworkManager::VpcAttachment.ProposedSegmentChange}
 */
export interface NetworkManagerVpcAttachmentProposedSegmentChange {
  SegmentName?: string;
  Tags?: Tag[];
  AttachmentPolicyRuleNumber?: number;
}
/**
 * Type definition for AWS::NetworkManager::VpcAttachment.VpcOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-vpcattachment-vpcoptions.html | AWS::NetworkManager::VpcAttachment.VpcOptions}
 */
export interface NetworkManagerVpcAttachmentVpcOptions {
  Ipv6Support?: boolean;
  ApplianceModeSupport?: boolean;
}
/**
 * Type definition for AWS::NetworkManager::ConnectAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectattachment.html | AWS::NetworkManager::ConnectAttachment}
 */
export interface NetworkManagerConnectAttachmentProps {
  ProposedSegmentChange?: NetworkManagerConnectAttachmentProposedSegmentChange;
  Options: NetworkManagerConnectAttachmentConnectAttachmentOptions;
  TransportAttachmentId: string;
  CoreNetworkId: string;
  Tags?: Tag[];
  EdgeLocation: string;
}
/**
 * Attributes type definition for AWS::NetworkManager::ConnectAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectattachment.html | AWS::NetworkManager::ConnectAttachment}
 */
export interface NetworkManagerConnectAttachmentAttribs {
  ResourceArn?: string;
  AttachmentType?: string;
  SegmentName?: string;
  State?: string;
  CreatedAt?: string;
  OwnerAccountId?: string;
  UpdatedAt?: string;
  AttachmentId?: string;
  CoreNetworkArn?: string;
  AttachmentPolicyRuleNumber?: number;
}
/**
 * Resource class for AWS::NetworkManager::ConnectAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectattachment.html | AWS::NetworkManager::ConnectAttachment}
 */
export class NetworkManagerConnectAttachment extends ResourceBase<
  "AWS::NetworkManager::ConnectAttachment",
  NetworkManagerConnectAttachmentProps,
  NetworkManagerConnectAttachmentAttribs
> {
  public static readonly Type = "AWS::NetworkManager::ConnectAttachment";
  public static readonly AttributeNames: readonly (keyof NetworkManagerConnectAttachmentAttribs)[] =
    [
      "ResourceArn",
      "AttachmentType",
      "SegmentName",
      "State",
      "CreatedAt",
      "OwnerAccountId",
      "UpdatedAt",
      "AttachmentId",
      "CoreNetworkArn",
      "AttachmentPolicyRuleNumber",
    ];
  constructor(
    logicalId: string,
    properties: NetworkManagerConnectAttachmentProps,
    options?: ResourceOptions,
  ) {
    super(
      NetworkManagerConnectAttachment.Type,
      NetworkManagerConnectAttachment.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::NetworkManager::ConnectPeer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectpeer.html | AWS::NetworkManager::ConnectPeer}
 */
export interface NetworkManagerConnectPeerProps {
  ConnectAttachmentId: string;
  PeerAddress: string;
  CoreNetworkAddress?: string;
  BgpOptions?: NetworkManagerConnectPeerBgpOptions;
  InsideCidrBlocks?: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::NetworkManager::ConnectPeer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectpeer.html | AWS::NetworkManager::ConnectPeer}
 */
export interface NetworkManagerConnectPeerAttribs {
  "Configuration.BgpConfigurations"?: any[];
  CoreNetworkId?: string;
  "Configuration.InsideCidrBlocks"?: any[];
  Configuration?: NetworkManagerConnectPeerConnectPeerConfiguration;
  State?: string;
  CreatedAt?: string;
  ConnectPeerId?: string;
  "Configuration.CoreNetworkAddress"?: string;
  "Configuration.Protocol"?: string;
  "Configuration.PeerAddress"?: string;
  EdgeLocation?: string;
}
/**
 * Resource class for AWS::NetworkManager::ConnectPeer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectpeer.html | AWS::NetworkManager::ConnectPeer}
 */
export class NetworkManagerConnectPeer extends ResourceBase<
  "AWS::NetworkManager::ConnectPeer",
  NetworkManagerConnectPeerProps,
  NetworkManagerConnectPeerAttribs
> {
  public static readonly Type = "AWS::NetworkManager::ConnectPeer";
  public static readonly AttributeNames: readonly (keyof NetworkManagerConnectPeerAttribs)[] =
    [
      "Configuration.BgpConfigurations",
      "CoreNetworkId",
      "Configuration.InsideCidrBlocks",
      "Configuration",
      "State",
      "CreatedAt",
      "ConnectPeerId",
      "Configuration.CoreNetworkAddress",
      "Configuration.Protocol",
      "Configuration.PeerAddress",
      "EdgeLocation",
    ];
  constructor(
    logicalId: string,
    properties: NetworkManagerConnectPeerProps,
    options?: ResourceOptions,
  ) {
    super(
      NetworkManagerConnectPeer.Type,
      NetworkManagerConnectPeer.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::NetworkManager::CoreNetwork
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-corenetwork.html | AWS::NetworkManager::CoreNetwork}
 */
export interface NetworkManagerCoreNetworkProps {
  GlobalNetworkId: string;
  Description?: string;
  PolicyDocument?: object;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::NetworkManager::CoreNetwork
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-corenetwork.html | AWS::NetworkManager::CoreNetwork}
 */
export interface NetworkManagerCoreNetworkAttribs {
  CoreNetworkId?: string;
  State?: string;
  CreatedAt?: string;
  Segments?: any[];
  OwnerAccount?: string;
  Edges?: any[];
  CoreNetworkArn?: string;
}
/**
 * Resource class for AWS::NetworkManager::CoreNetwork
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-corenetwork.html | AWS::NetworkManager::CoreNetwork}
 */
export class NetworkManagerCoreNetwork extends ResourceBase<
  "AWS::NetworkManager::CoreNetwork",
  NetworkManagerCoreNetworkProps,
  NetworkManagerCoreNetworkAttribs
> {
  public static readonly Type = "AWS::NetworkManager::CoreNetwork";
  public static readonly AttributeNames: readonly (keyof NetworkManagerCoreNetworkAttribs)[] =
    [
      "CoreNetworkId",
      "State",
      "CreatedAt",
      "Segments",
      "OwnerAccount",
      "Edges",
      "CoreNetworkArn",
    ];
  constructor(
    logicalId: string,
    properties: NetworkManagerCoreNetworkProps,
    options?: ResourceOptions,
  ) {
    super(
      NetworkManagerCoreNetwork.Type,
      NetworkManagerCoreNetwork.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::NetworkManager::CustomerGatewayAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-customergatewayassociation.html | AWS::NetworkManager::CustomerGatewayAssociation}
 */
export interface NetworkManagerCustomerGatewayAssociationProps {
  GlobalNetworkId: string;
  DeviceId: string;
  CustomerGatewayArn: string;
  LinkId?: string;
}
/**
 * Resource class for AWS::NetworkManager::CustomerGatewayAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-customergatewayassociation.html | AWS::NetworkManager::CustomerGatewayAssociation}
 */
export class NetworkManagerCustomerGatewayAssociation extends ResourceBase<
  "AWS::NetworkManager::CustomerGatewayAssociation",
  NetworkManagerCustomerGatewayAssociationProps,
  Record<string, never>
> {
  public static readonly Type =
    "AWS::NetworkManager::CustomerGatewayAssociation";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: NetworkManagerCustomerGatewayAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      NetworkManagerCustomerGatewayAssociation.Type,
      NetworkManagerCustomerGatewayAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::NetworkManager::Device
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-device.html | AWS::NetworkManager::Device}
 */
export interface NetworkManagerDeviceProps {
  SiteId?: string;
  AWSLocation?: NetworkManagerDeviceAWSLocation;
  Type?: string;
  Description?: string;
  GlobalNetworkId: string;
  SerialNumber?: string;
  Model?: string;
  Vendor?: string;
  Tags?: Tag[];
  Location?: NetworkManagerDeviceLocation;
}
/**
 * Attributes type definition for AWS::NetworkManager::Device
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-device.html | AWS::NetworkManager::Device}
 */
export interface NetworkManagerDeviceAttribs {
  DeviceArn?: string;
  DeviceId?: string;
  CreatedAt?: string;
}
/**
 * Resource class for AWS::NetworkManager::Device
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-device.html | AWS::NetworkManager::Device}
 */
export class NetworkManagerDevice extends ResourceBase<
  "AWS::NetworkManager::Device",
  NetworkManagerDeviceProps,
  NetworkManagerDeviceAttribs
> {
  public static readonly Type = "AWS::NetworkManager::Device";
  public static readonly AttributeNames: readonly (keyof NetworkManagerDeviceAttribs)[] =
    ["DeviceArn", "DeviceId", "CreatedAt"];
  constructor(
    logicalId: string,
    properties: NetworkManagerDeviceProps,
    options?: ResourceOptions,
  ) {
    super(
      NetworkManagerDevice.Type,
      NetworkManagerDevice.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::NetworkManager::GlobalNetwork
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-globalnetwork.html | AWS::NetworkManager::GlobalNetwork}
 */
export interface NetworkManagerGlobalNetworkProps {
  Description?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::NetworkManager::GlobalNetwork
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-globalnetwork.html | AWS::NetworkManager::GlobalNetwork}
 */
export interface NetworkManagerGlobalNetworkAttribs {
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::NetworkManager::GlobalNetwork
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-globalnetwork.html | AWS::NetworkManager::GlobalNetwork}
 */
export class NetworkManagerGlobalNetwork extends ResourceBase<
  "AWS::NetworkManager::GlobalNetwork",
  NetworkManagerGlobalNetworkProps,
  NetworkManagerGlobalNetworkAttribs
> {
  public static readonly Type = "AWS::NetworkManager::GlobalNetwork";
  public static readonly AttributeNames: readonly (keyof NetworkManagerGlobalNetworkAttribs)[] =
    ["Id", "Arn"];
  constructor(
    logicalId: string,
    properties: NetworkManagerGlobalNetworkProps,
    options?: ResourceOptions,
  ) {
    super(
      NetworkManagerGlobalNetwork.Type,
      NetworkManagerGlobalNetwork.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::NetworkManager::Link
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-link.html | AWS::NetworkManager::Link}
 */
export interface NetworkManagerLinkProps {
  SiteId: string;
  Type?: string;
  GlobalNetworkId: string;
  Description?: string;
  Bandwidth: NetworkManagerLinkBandwidth;
  Tags?: Tag[];
  Provider?: string;
}
/**
 * Attributes type definition for AWS::NetworkManager::Link
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-link.html | AWS::NetworkManager::Link}
 */
export interface NetworkManagerLinkAttribs {
  LinkArn?: string;
  LinkId?: string;
}
/**
 * Resource class for AWS::NetworkManager::Link
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-link.html | AWS::NetworkManager::Link}
 */
export class NetworkManagerLink extends ResourceBase<
  "AWS::NetworkManager::Link",
  NetworkManagerLinkProps,
  NetworkManagerLinkAttribs
> {
  public static readonly Type = "AWS::NetworkManager::Link";
  public static readonly AttributeNames: readonly (keyof NetworkManagerLinkAttribs)[] =
    ["LinkArn", "LinkId"];
  constructor(
    logicalId: string,
    properties: NetworkManagerLinkProps,
    options?: ResourceOptions,
  ) {
    super(
      NetworkManagerLink.Type,
      NetworkManagerLink.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::NetworkManager::LinkAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-linkassociation.html | AWS::NetworkManager::LinkAssociation}
 */
export interface NetworkManagerLinkAssociationProps {
  GlobalNetworkId: string;
  DeviceId: string;
  LinkId: string;
}
/**
 * Resource class for AWS::NetworkManager::LinkAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-linkassociation.html | AWS::NetworkManager::LinkAssociation}
 */
export class NetworkManagerLinkAssociation extends ResourceBase<
  "AWS::NetworkManager::LinkAssociation",
  NetworkManagerLinkAssociationProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::NetworkManager::LinkAssociation";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: NetworkManagerLinkAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      NetworkManagerLinkAssociation.Type,
      NetworkManagerLinkAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::NetworkManager::Site
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-site.html | AWS::NetworkManager::Site}
 */
export interface NetworkManagerSiteProps {
  Description?: string;
  GlobalNetworkId: string;
  Tags?: Tag[];
  Location?: NetworkManagerSiteLocation;
}
/**
 * Attributes type definition for AWS::NetworkManager::Site
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-site.html | AWS::NetworkManager::Site}
 */
export interface NetworkManagerSiteAttribs {
  SiteId?: string;
  SiteArn?: string;
}
/**
 * Resource class for AWS::NetworkManager::Site
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-site.html | AWS::NetworkManager::Site}
 */
export class NetworkManagerSite extends ResourceBase<
  "AWS::NetworkManager::Site",
  NetworkManagerSiteProps,
  NetworkManagerSiteAttribs
> {
  public static readonly Type = "AWS::NetworkManager::Site";
  public static readonly AttributeNames: readonly (keyof NetworkManagerSiteAttribs)[] =
    ["SiteId", "SiteArn"];
  constructor(
    logicalId: string,
    properties: NetworkManagerSiteProps,
    options?: ResourceOptions,
  ) {
    super(
      NetworkManagerSite.Type,
      NetworkManagerSite.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::NetworkManager::SiteToSiteVpnAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-sitetositevpnattachment.html | AWS::NetworkManager::SiteToSiteVpnAttachment}
 */
export interface NetworkManagerSiteToSiteVpnAttachmentProps {
  ProposedSegmentChange?: NetworkManagerSiteToSiteVpnAttachmentProposedSegmentChange;
  CoreNetworkId: string;
  VpnConnectionArn: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::NetworkManager::SiteToSiteVpnAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-sitetositevpnattachment.html | AWS::NetworkManager::SiteToSiteVpnAttachment}
 */
export interface NetworkManagerSiteToSiteVpnAttachmentAttribs {
  ResourceArn?: string;
  AttachmentType?: string;
  SegmentName?: string;
  State?: string;
  CreatedAt?: string;
  OwnerAccountId?: string;
  UpdatedAt?: string;
  AttachmentId?: string;
  CoreNetworkArn?: string;
  EdgeLocation?: string;
  AttachmentPolicyRuleNumber?: number;
}
/**
 * Resource class for AWS::NetworkManager::SiteToSiteVpnAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-sitetositevpnattachment.html | AWS::NetworkManager::SiteToSiteVpnAttachment}
 */
export class NetworkManagerSiteToSiteVpnAttachment extends ResourceBase<
  "AWS::NetworkManager::SiteToSiteVpnAttachment",
  NetworkManagerSiteToSiteVpnAttachmentProps,
  NetworkManagerSiteToSiteVpnAttachmentAttribs
> {
  public static readonly Type = "AWS::NetworkManager::SiteToSiteVpnAttachment";
  public static readonly AttributeNames: readonly (keyof NetworkManagerSiteToSiteVpnAttachmentAttribs)[] =
    [
      "ResourceArn",
      "AttachmentType",
      "SegmentName",
      "State",
      "CreatedAt",
      "OwnerAccountId",
      "UpdatedAt",
      "AttachmentId",
      "CoreNetworkArn",
      "EdgeLocation",
      "AttachmentPolicyRuleNumber",
    ];
  constructor(
    logicalId: string,
    properties: NetworkManagerSiteToSiteVpnAttachmentProps,
    options?: ResourceOptions,
  ) {
    super(
      NetworkManagerSiteToSiteVpnAttachment.Type,
      NetworkManagerSiteToSiteVpnAttachment.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::NetworkManager::TransitGatewayPeering
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewaypeering.html | AWS::NetworkManager::TransitGatewayPeering}
 */
export interface NetworkManagerTransitGatewayPeeringProps {
  CoreNetworkId: string;
  TransitGatewayArn: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::NetworkManager::TransitGatewayPeering
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewaypeering.html | AWS::NetworkManager::TransitGatewayPeering}
 */
export interface NetworkManagerTransitGatewayPeeringAttribs {
  ResourceArn?: string;
  PeeringType?: string;
  State?: string;
  CreatedAt?: string;
  PeeringId?: string;
  TransitGatewayPeeringAttachmentId?: string;
  OwnerAccountId?: string;
  CoreNetworkArn?: string;
  EdgeLocation?: string;
}
/**
 * Resource class for AWS::NetworkManager::TransitGatewayPeering
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewaypeering.html | AWS::NetworkManager::TransitGatewayPeering}
 */
export class NetworkManagerTransitGatewayPeering extends ResourceBase<
  "AWS::NetworkManager::TransitGatewayPeering",
  NetworkManagerTransitGatewayPeeringProps,
  NetworkManagerTransitGatewayPeeringAttribs
> {
  public static readonly Type = "AWS::NetworkManager::TransitGatewayPeering";
  public static readonly AttributeNames: readonly (keyof NetworkManagerTransitGatewayPeeringAttribs)[] =
    [
      "ResourceArn",
      "PeeringType",
      "State",
      "CreatedAt",
      "PeeringId",
      "TransitGatewayPeeringAttachmentId",
      "OwnerAccountId",
      "CoreNetworkArn",
      "EdgeLocation",
    ];
  constructor(
    logicalId: string,
    properties: NetworkManagerTransitGatewayPeeringProps,
    options?: ResourceOptions,
  ) {
    super(
      NetworkManagerTransitGatewayPeering.Type,
      NetworkManagerTransitGatewayPeering.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::NetworkManager::TransitGatewayRegistration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayregistration.html | AWS::NetworkManager::TransitGatewayRegistration}
 */
export interface NetworkManagerTransitGatewayRegistrationProps {
  GlobalNetworkId: string;
  TransitGatewayArn: string;
}
/**
 * Resource class for AWS::NetworkManager::TransitGatewayRegistration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayregistration.html | AWS::NetworkManager::TransitGatewayRegistration}
 */
export class NetworkManagerTransitGatewayRegistration extends ResourceBase<
  "AWS::NetworkManager::TransitGatewayRegistration",
  NetworkManagerTransitGatewayRegistrationProps,
  Record<string, never>
> {
  public static readonly Type =
    "AWS::NetworkManager::TransitGatewayRegistration";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: NetworkManagerTransitGatewayRegistrationProps,
    options?: ResourceOptions,
  ) {
    super(
      NetworkManagerTransitGatewayRegistration.Type,
      NetworkManagerTransitGatewayRegistration.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::NetworkManager::TransitGatewayRouteTableAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayroutetableattachment.html | AWS::NetworkManager::TransitGatewayRouteTableAttachment}
 */
export interface NetworkManagerTransitGatewayRouteTableAttachmentProps {
  ProposedSegmentChange?: NetworkManagerTransitGatewayRouteTableAttachmentProposedSegmentChange;
  TransitGatewayRouteTableArn: string;
  PeeringId: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::NetworkManager::TransitGatewayRouteTableAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayroutetableattachment.html | AWS::NetworkManager::TransitGatewayRouteTableAttachment}
 */
export interface NetworkManagerTransitGatewayRouteTableAttachmentAttribs {
  ResourceArn?: string;
  CoreNetworkId?: string;
  AttachmentType?: string;
  SegmentName?: string;
  State?: string;
  CreatedAt?: string;
  OwnerAccountId?: string;
  UpdatedAt?: string;
  AttachmentId?: string;
  CoreNetworkArn?: string;
  EdgeLocation?: string;
  AttachmentPolicyRuleNumber?: number;
}
/**
 * Resource class for AWS::NetworkManager::TransitGatewayRouteTableAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayroutetableattachment.html | AWS::NetworkManager::TransitGatewayRouteTableAttachment}
 */
export class NetworkManagerTransitGatewayRouteTableAttachment extends ResourceBase<
  "AWS::NetworkManager::TransitGatewayRouteTableAttachment",
  NetworkManagerTransitGatewayRouteTableAttachmentProps,
  NetworkManagerTransitGatewayRouteTableAttachmentAttribs
> {
  public static readonly Type =
    "AWS::NetworkManager::TransitGatewayRouteTableAttachment";
  public static readonly AttributeNames: readonly (keyof NetworkManagerTransitGatewayRouteTableAttachmentAttribs)[] =
    [
      "ResourceArn",
      "CoreNetworkId",
      "AttachmentType",
      "SegmentName",
      "State",
      "CreatedAt",
      "OwnerAccountId",
      "UpdatedAt",
      "AttachmentId",
      "CoreNetworkArn",
      "EdgeLocation",
      "AttachmentPolicyRuleNumber",
    ];
  constructor(
    logicalId: string,
    properties: NetworkManagerTransitGatewayRouteTableAttachmentProps,
    options?: ResourceOptions,
  ) {
    super(
      NetworkManagerTransitGatewayRouteTableAttachment.Type,
      NetworkManagerTransitGatewayRouteTableAttachment.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::NetworkManager::VpcAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html | AWS::NetworkManager::VpcAttachment}
 */
export interface NetworkManagerVpcAttachmentProps {
  ProposedSegmentChange?: NetworkManagerVpcAttachmentProposedSegmentChange;
  SubnetArns: any[];
  Options?: NetworkManagerVpcAttachmentVpcOptions;
  CoreNetworkId: string;
  VpcArn: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::NetworkManager::VpcAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html | AWS::NetworkManager::VpcAttachment}
 */
export interface NetworkManagerVpcAttachmentAttribs {
  ResourceArn?: string;
  AttachmentType?: string;
  SegmentName?: string;
  State?: string;
  CreatedAt?: string;
  OwnerAccountId?: string;
  UpdatedAt?: string;
  AttachmentId?: string;
  CoreNetworkArn?: string;
  EdgeLocation?: string;
  AttachmentPolicyRuleNumber?: number;
}
/**
 * Resource class for AWS::NetworkManager::VpcAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html | AWS::NetworkManager::VpcAttachment}
 */
export class NetworkManagerVpcAttachment extends ResourceBase<
  "AWS::NetworkManager::VpcAttachment",
  NetworkManagerVpcAttachmentProps,
  NetworkManagerVpcAttachmentAttribs
> {
  public static readonly Type = "AWS::NetworkManager::VpcAttachment";
  public static readonly AttributeNames: readonly (keyof NetworkManagerVpcAttachmentAttribs)[] =
    [
      "ResourceArn",
      "AttachmentType",
      "SegmentName",
      "State",
      "CreatedAt",
      "OwnerAccountId",
      "UpdatedAt",
      "AttachmentId",
      "CoreNetworkArn",
      "EdgeLocation",
      "AttachmentPolicyRuleNumber",
    ];
  constructor(
    logicalId: string,
    properties: NetworkManagerVpcAttachmentProps,
    options?: ResourceOptions,
  ) {
    super(
      NetworkManagerVpcAttachment.Type,
      NetworkManagerVpcAttachment.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
