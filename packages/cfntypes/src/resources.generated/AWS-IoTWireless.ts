import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::IoTWireless::DeviceProfile.LoRaWANDeviceProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-deviceprofile-lorawandeviceprofile.html | AWS::IoTWireless::DeviceProfile.LoRaWANDeviceProfile}
 */
export interface IoTWirelessDeviceProfileLoRaWANDeviceProfile {
  PingSlotPeriod?: number;
  ClassCTimeout?: number;
  RxFreq2?: number;
  RfRegion?: string;
  ClassBTimeout?: number;
  RxDelay1?: number;
  SupportsClassC?: boolean;
  SupportsClassB?: boolean;
  RxDrOffset1?: number;
  MaxEirp?: number;
  FactoryPresetFreqsList?: any[];
  SupportsJoin?: boolean;
  PingSlotDr?: number;
  MacVersion?: string;
  PingSlotFreq?: number;
  RegParamsRevision?: string;
  RxDataRate2?: number;
  Supports32BitFCnt?: boolean;
  MaxDutyCycle?: number;
}
/**
 * Type definition for AWS::IoTWireless::FuotaTask.LoRaWAN
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-fuotatask-lorawan.html | AWS::IoTWireless::FuotaTask.LoRaWAN}
 */
export interface IoTWirelessFuotaTaskLoRaWAN {
  RfRegion: string;
  StartTime?: string;
}
/**
 * Type definition for AWS::IoTWireless::MulticastGroup.LoRaWAN
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-multicastgroup-lorawan.html | AWS::IoTWireless::MulticastGroup.LoRaWAN}
 */
export interface IoTWirelessMulticastGroupLoRaWAN {
  NumberOfDevicesRequested?: number;
  NumberOfDevicesInGroup?: number;
  RfRegion: string;
  DlClass: string;
}
/**
 * Type definition for AWS::IoTWireless::NetworkAnalyzerConfiguration.TraceContent
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-networkanalyzerconfiguration-tracecontent.html | AWS::IoTWireless::NetworkAnalyzerConfiguration.TraceContent}
 */
export interface IoTWirelessNetworkAnalyzerConfigurationTraceContent {
  WirelessDeviceFrameInfo?: string;
  LogLevel?: string;
}
/**
 * Type definition for AWS::IoTWireless::PartnerAccount.SidewalkAccountInfo
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-partneraccount-sidewalkaccountinfo.html | AWS::IoTWireless::PartnerAccount.SidewalkAccountInfo}
 */
export interface IoTWirelessPartnerAccountSidewalkAccountInfo {
  AppServerPrivateKey: string;
}
/**
 * Type definition for AWS::IoTWireless::PartnerAccount.SidewalkAccountInfoWithFingerprint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-partneraccount-sidewalkaccountinfowithfingerprint.html | AWS::IoTWireless::PartnerAccount.SidewalkAccountInfoWithFingerprint}
 */
export interface IoTWirelessPartnerAccountSidewalkAccountInfoWithFingerprint {
  Fingerprint?: string;
  AmazonId?: string;
  Arn?: string;
}
/**
 * Type definition for AWS::IoTWireless::PartnerAccount.SidewalkUpdateAccount
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-partneraccount-sidewalkupdateaccount.html | AWS::IoTWireless::PartnerAccount.SidewalkUpdateAccount}
 */
export interface IoTWirelessPartnerAccountSidewalkUpdateAccount {
  AppServerPrivateKey?: string;
}
/**
 * Type definition for AWS::IoTWireless::ServiceProfile.LoRaWANServiceProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-serviceprofile-lorawanserviceprofile.html | AWS::IoTWireless::ServiceProfile.LoRaWANServiceProfile}
 */
export interface IoTWirelessServiceProfileLoRaWANServiceProfile {
  DlBucketSize?: number;
  MinGwDiversity?: number;
  DrMax?: number;
  ReportDevStatusMargin?: boolean;
  PrAllowed?: boolean;
  DlRate?: number;
  UlRatePolicy?: string;
  ReportDevStatusBattery?: boolean;
  ChannelMask?: string;
  UlRate?: number;
  AddGwMetadata?: boolean;
  DlRatePolicy?: string;
  HrAllowed?: boolean;
  DrMin?: number;
  TargetPer?: number;
  NwkGeoLoc?: boolean;
  DevStatusReqFreq?: number;
  UlBucketSize?: number;
  RaAllowed?: boolean;
}
/**
 * Type definition for AWS::IoTWireless::TaskDefinition.LoRaWANGatewayVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-taskdefinition-lorawangatewayversion.html | AWS::IoTWireless::TaskDefinition.LoRaWANGatewayVersion}
 */
export interface IoTWirelessTaskDefinitionLoRaWANGatewayVersion {
  Station?: string;
  Model?: string;
  PackageVersion?: string;
}
/**
 * Type definition for AWS::IoTWireless::TaskDefinition.LoRaWANUpdateGatewayTaskCreate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-taskdefinition-lorawanupdategatewaytaskcreate.html | AWS::IoTWireless::TaskDefinition.LoRaWANUpdateGatewayTaskCreate}
 */
export interface IoTWirelessTaskDefinitionLoRaWANUpdateGatewayTaskCreate {
  UpdateSignature?: string;
  SigKeyCrc?: number;
  UpdateVersion?: IoTWirelessTaskDefinitionLoRaWANGatewayVersion;
  CurrentVersion?: IoTWirelessTaskDefinitionLoRaWANGatewayVersion;
}
/**
 * Type definition for AWS::IoTWireless::TaskDefinition.LoRaWANUpdateGatewayTaskEntry
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-taskdefinition-lorawanupdategatewaytaskentry.html | AWS::IoTWireless::TaskDefinition.LoRaWANUpdateGatewayTaskEntry}
 */
export interface IoTWirelessTaskDefinitionLoRaWANUpdateGatewayTaskEntry {
  UpdateVersion?: IoTWirelessTaskDefinitionLoRaWANGatewayVersion;
  CurrentVersion?: IoTWirelessTaskDefinitionLoRaWANGatewayVersion;
}
/**
 * Type definition for AWS::IoTWireless::TaskDefinition.UpdateWirelessGatewayTaskCreate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-taskdefinition-updatewirelessgatewaytaskcreate.html | AWS::IoTWireless::TaskDefinition.UpdateWirelessGatewayTaskCreate}
 */
export interface IoTWirelessTaskDefinitionUpdateWirelessGatewayTaskCreate {
  LoRaWAN?: IoTWirelessTaskDefinitionLoRaWANUpdateGatewayTaskCreate;
  UpdateDataSource?: string;
  UpdateDataRole?: string;
}
/**
 * Type definition for AWS::IoTWireless::WirelessDevice.AbpV10x
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-abpv10x.html | AWS::IoTWireless::WirelessDevice.AbpV10x}
 */
export interface IoTWirelessWirelessDeviceAbpV10x {
  SessionKeys: IoTWirelessWirelessDeviceSessionKeysAbpV10x;
  DevAddr: string;
}
/**
 * Type definition for AWS::IoTWireless::WirelessDevice.AbpV11
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-abpv11.html | AWS::IoTWireless::WirelessDevice.AbpV11}
 */
export interface IoTWirelessWirelessDeviceAbpV11 {
  SessionKeys: IoTWirelessWirelessDeviceSessionKeysAbpV11;
  DevAddr: string;
}
/**
 * Type definition for AWS::IoTWireless::WirelessDevice.LoRaWANDevice
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-lorawandevice.html | AWS::IoTWireless::WirelessDevice.LoRaWANDevice}
 */
export interface IoTWirelessWirelessDeviceLoRaWANDevice {
  AbpV10x?: IoTWirelessWirelessDeviceAbpV10x;
  OtaaV11?: IoTWirelessWirelessDeviceOtaaV11;
  AbpV11?: IoTWirelessWirelessDeviceAbpV11;
  DeviceProfileId?: string;
  DevEui?: string;
  OtaaV10x?: IoTWirelessWirelessDeviceOtaaV10x;
  ServiceProfileId?: string;
}
/**
 * Type definition for AWS::IoTWireless::WirelessDevice.OtaaV10x
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-otaav10x.html | AWS::IoTWireless::WirelessDevice.OtaaV10x}
 */
export interface IoTWirelessWirelessDeviceOtaaV10x {
  AppEui: string;
  AppKey: string;
}
/**
 * Type definition for AWS::IoTWireless::WirelessDevice.OtaaV11
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-otaav11.html | AWS::IoTWireless::WirelessDevice.OtaaV11}
 */
export interface IoTWirelessWirelessDeviceOtaaV11 {
  NwkKey: string;
  AppKey: string;
  JoinEui: string;
}
/**
 * Type definition for AWS::IoTWireless::WirelessDevice.SessionKeysAbpV10x
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-sessionkeysabpv10x.html | AWS::IoTWireless::WirelessDevice.SessionKeysAbpV10x}
 */
export interface IoTWirelessWirelessDeviceSessionKeysAbpV10x {
  AppSKey: string;
  NwkSKey: string;
}
/**
 * Type definition for AWS::IoTWireless::WirelessDevice.SessionKeysAbpV11
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-sessionkeysabpv11.html | AWS::IoTWireless::WirelessDevice.SessionKeysAbpV11}
 */
export interface IoTWirelessWirelessDeviceSessionKeysAbpV11 {
  FNwkSIntKey: string;
  AppSKey: string;
  SNwkSIntKey: string;
  NwkSEncKey: string;
}
/**
 * Type definition for AWS::IoTWireless::WirelessDeviceImportTask.Sidewalk
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdeviceimporttask-sidewalk.html | AWS::IoTWireless::WirelessDeviceImportTask.Sidewalk}
 */
export interface IoTWirelessWirelessDeviceImportTaskSidewalk {
  Role?: string;
  SidewalkManufacturingSn?: string;
  DeviceCreationFile?: string;
  DeviceCreationFileList?: any[];
}
/**
 * Type definition for AWS::IoTWireless::WirelessGateway.LoRaWANGateway
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessgateway-lorawangateway.html | AWS::IoTWireless::WirelessGateway.LoRaWANGateway}
 */
export interface IoTWirelessWirelessGatewayLoRaWANGateway {
  RfRegion: string;
  GatewayEui: string;
}
/**
 * Type definition for AWS::IoTWireless::Destination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-destination.html | AWS::IoTWireless::Destination}
 */
export interface IoTWirelessDestinationProps {
  Description?: string;
  Expression: string;
  ExpressionType: string;
  Tags?: Tag[];
  RoleArn?: string;
  Name: string;
}
/**
 * Attributes type definition for AWS::IoTWireless::Destination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-destination.html | AWS::IoTWireless::Destination}
 */
export interface IoTWirelessDestinationAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::IoTWireless::Destination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-destination.html | AWS::IoTWireless::Destination}
 */
export class IoTWirelessDestination extends ResourceBase<
  "AWS::IoTWireless::Destination",
  IoTWirelessDestinationProps,
  IoTWirelessDestinationAttribs
> {
  public static readonly Type = "AWS::IoTWireless::Destination";
  public static readonly AttributeNames: readonly (keyof IoTWirelessDestinationAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: IoTWirelessDestinationProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTWirelessDestination.Type,
      IoTWirelessDestination.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoTWireless::DeviceProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-deviceprofile.html | AWS::IoTWireless::DeviceProfile}
 */
export interface IoTWirelessDeviceProfileProps {
  LoRaWAN?: IoTWirelessDeviceProfileLoRaWANDeviceProfile;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::IoTWireless::DeviceProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-deviceprofile.html | AWS::IoTWireless::DeviceProfile}
 */
export interface IoTWirelessDeviceProfileAttribs {
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::IoTWireless::DeviceProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-deviceprofile.html | AWS::IoTWireless::DeviceProfile}
 */
export class IoTWirelessDeviceProfile extends ResourceBase<
  "AWS::IoTWireless::DeviceProfile",
  IoTWirelessDeviceProfileProps,
  IoTWirelessDeviceProfileAttribs
> {
  public static readonly Type = "AWS::IoTWireless::DeviceProfile";
  public static readonly AttributeNames: readonly (keyof IoTWirelessDeviceProfileAttribs)[] =
    ["Id", "Arn"];
  constructor(
    logicalId: string,
    properties: IoTWirelessDeviceProfileProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTWirelessDeviceProfile.Type,
      IoTWirelessDeviceProfile.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoTWireless::FuotaTask
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-fuotatask.html | AWS::IoTWireless::FuotaTask}
 */
export interface IoTWirelessFuotaTaskProps {
  FirmwareUpdateImage: string;
  Description?: string;
  LoRaWAN: IoTWirelessFuotaTaskLoRaWAN;
  FirmwareUpdateRole: string;
  AssociateMulticastGroup?: string;
  DisassociateWirelessDevice?: string;
  DisassociateMulticastGroup?: string;
  AssociateWirelessDevice?: string;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::IoTWireless::FuotaTask
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-fuotatask.html | AWS::IoTWireless::FuotaTask}
 */
export interface IoTWirelessFuotaTaskAttribs {
  FuotaTaskStatus?: string;
  "LoRaWAN.StartTime"?: string;
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::IoTWireless::FuotaTask
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-fuotatask.html | AWS::IoTWireless::FuotaTask}
 */
export class IoTWirelessFuotaTask extends ResourceBase<
  "AWS::IoTWireless::FuotaTask",
  IoTWirelessFuotaTaskProps,
  IoTWirelessFuotaTaskAttribs
> {
  public static readonly Type = "AWS::IoTWireless::FuotaTask";
  public static readonly AttributeNames: readonly (keyof IoTWirelessFuotaTaskAttribs)[] =
    ["FuotaTaskStatus", "LoRaWAN.StartTime", "Id", "Arn"];
  constructor(
    logicalId: string,
    properties: IoTWirelessFuotaTaskProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTWirelessFuotaTask.Type,
      IoTWirelessFuotaTask.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoTWireless::MulticastGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-multicastgroup.html | AWS::IoTWireless::MulticastGroup}
 */
export interface IoTWirelessMulticastGroupProps {
  Description?: string;
  LoRaWAN: IoTWirelessMulticastGroupLoRaWAN;
  DisassociateWirelessDevice?: string;
  AssociateWirelessDevice?: string;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::IoTWireless::MulticastGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-multicastgroup.html | AWS::IoTWireless::MulticastGroup}
 */
export interface IoTWirelessMulticastGroupAttribs {
  Status?: string;
  "LoRaWAN.NumberOfDevicesRequested"?: number;
  Id?: string;
  "LoRaWAN.NumberOfDevicesInGroup"?: number;
  Arn?: string;
}
/**
 * Resource class for AWS::IoTWireless::MulticastGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-multicastgroup.html | AWS::IoTWireless::MulticastGroup}
 */
export class IoTWirelessMulticastGroup extends ResourceBase<
  "AWS::IoTWireless::MulticastGroup",
  IoTWirelessMulticastGroupProps,
  IoTWirelessMulticastGroupAttribs
> {
  public static readonly Type = "AWS::IoTWireless::MulticastGroup";
  public static readonly AttributeNames: readonly (keyof IoTWirelessMulticastGroupAttribs)[] =
    [
      "Status",
      "LoRaWAN.NumberOfDevicesRequested",
      "Id",
      "LoRaWAN.NumberOfDevicesInGroup",
      "Arn",
    ];
  constructor(
    logicalId: string,
    properties: IoTWirelessMulticastGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTWirelessMulticastGroup.Type,
      IoTWirelessMulticastGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoTWireless::NetworkAnalyzerConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-networkanalyzerconfiguration.html | AWS::IoTWireless::NetworkAnalyzerConfiguration}
 */
export interface IoTWirelessNetworkAnalyzerConfigurationProps {
  Description?: string;
  TraceContent?: IoTWirelessNetworkAnalyzerConfigurationTraceContent;
  WirelessGateways?: any[];
  WirelessDevices?: any[];
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::IoTWireless::NetworkAnalyzerConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-networkanalyzerconfiguration.html | AWS::IoTWireless::NetworkAnalyzerConfiguration}
 */
export interface IoTWirelessNetworkAnalyzerConfigurationAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::IoTWireless::NetworkAnalyzerConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-networkanalyzerconfiguration.html | AWS::IoTWireless::NetworkAnalyzerConfiguration}
 */
export class IoTWirelessNetworkAnalyzerConfiguration extends ResourceBase<
  "AWS::IoTWireless::NetworkAnalyzerConfiguration",
  IoTWirelessNetworkAnalyzerConfigurationProps,
  IoTWirelessNetworkAnalyzerConfigurationAttribs
> {
  public static readonly Type =
    "AWS::IoTWireless::NetworkAnalyzerConfiguration";
  public static readonly AttributeNames: readonly (keyof IoTWirelessNetworkAnalyzerConfigurationAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: IoTWirelessNetworkAnalyzerConfigurationProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTWirelessNetworkAnalyzerConfiguration.Type,
      IoTWirelessNetworkAnalyzerConfiguration.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoTWireless::PartnerAccount
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-partneraccount.html | AWS::IoTWireless::PartnerAccount}
 */
export interface IoTWirelessPartnerAccountProps {
  PartnerType?: string;
  SidewalkResponse?: IoTWirelessPartnerAccountSidewalkAccountInfoWithFingerprint;
  AccountLinked?: boolean;
  Sidewalk?: IoTWirelessPartnerAccountSidewalkAccountInfo;
  PartnerAccountId?: string;
  SidewalkUpdate?: IoTWirelessPartnerAccountSidewalkUpdateAccount;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::IoTWireless::PartnerAccount
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-partneraccount.html | AWS::IoTWireless::PartnerAccount}
 */
export interface IoTWirelessPartnerAccountAttribs {
  Fingerprint?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::IoTWireless::PartnerAccount
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-partneraccount.html | AWS::IoTWireless::PartnerAccount}
 */
export class IoTWirelessPartnerAccount extends ResourceBase<
  "AWS::IoTWireless::PartnerAccount",
  IoTWirelessPartnerAccountProps,
  IoTWirelessPartnerAccountAttribs
> {
  public static readonly Type = "AWS::IoTWireless::PartnerAccount";
  public static readonly AttributeNames: readonly (keyof IoTWirelessPartnerAccountAttribs)[] =
    ["Fingerprint", "Arn"];
  constructor(
    logicalId: string,
    properties: IoTWirelessPartnerAccountProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTWirelessPartnerAccount.Type,
      IoTWirelessPartnerAccount.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoTWireless::ServiceProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html | AWS::IoTWireless::ServiceProfile}
 */
export interface IoTWirelessServiceProfileProps {
  LoRaWAN?: IoTWirelessServiceProfileLoRaWANServiceProfile;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::IoTWireless::ServiceProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html | AWS::IoTWireless::ServiceProfile}
 */
export interface IoTWirelessServiceProfileAttribs {
  "LoRaWAN.DrMin"?: number;
  "LoRaWAN.ReportDevStatusMargin"?: boolean;
  "LoRaWAN.UlRatePolicy"?: string;
  "LoRaWAN.MinGwDiversity"?: number;
  "LoRaWAN.TargetPer"?: number;
  "LoRaWAN.ChannelMask"?: string;
  "LoRaWAN.ReportDevStatusBattery"?: boolean;
  "LoRaWAN.DlRate"?: number;
  "LoRaWAN.DlRatePolicy"?: string;
  "LoRaWAN.HrAllowed"?: boolean;
  "LoRaWAN.DlBucketSize"?: number;
  "LoRaWAN.DrMax"?: number;
  "LoRaWAN.UlBucketSize"?: number;
  "LoRaWAN.UlRate"?: number;
  "LoRaWAN.NwkGeoLoc"?: boolean;
  "LoRaWAN.DevStatusReqFreq"?: number;
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::IoTWireless::ServiceProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html | AWS::IoTWireless::ServiceProfile}
 */
export class IoTWirelessServiceProfile extends ResourceBase<
  "AWS::IoTWireless::ServiceProfile",
  IoTWirelessServiceProfileProps,
  IoTWirelessServiceProfileAttribs
> {
  public static readonly Type = "AWS::IoTWireless::ServiceProfile";
  public static readonly AttributeNames: readonly (keyof IoTWirelessServiceProfileAttribs)[] =
    [
      "LoRaWAN.DrMin",
      "LoRaWAN.ReportDevStatusMargin",
      "LoRaWAN.UlRatePolicy",
      "LoRaWAN.MinGwDiversity",
      "LoRaWAN.TargetPer",
      "LoRaWAN.ChannelMask",
      "LoRaWAN.ReportDevStatusBattery",
      "LoRaWAN.DlRate",
      "LoRaWAN.DlRatePolicy",
      "LoRaWAN.HrAllowed",
      "LoRaWAN.DlBucketSize",
      "LoRaWAN.DrMax",
      "LoRaWAN.UlBucketSize",
      "LoRaWAN.UlRate",
      "LoRaWAN.NwkGeoLoc",
      "LoRaWAN.DevStatusReqFreq",
      "Id",
      "Arn",
    ];
  constructor(
    logicalId: string,
    properties: IoTWirelessServiceProfileProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTWirelessServiceProfile.Type,
      IoTWirelessServiceProfile.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoTWireless::TaskDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html | AWS::IoTWireless::TaskDefinition}
 */
export interface IoTWirelessTaskDefinitionProps {
  AutoCreateTasks: boolean;
  LoRaWANUpdateGatewayTaskEntry?: IoTWirelessTaskDefinitionLoRaWANUpdateGatewayTaskEntry;
  Update?: IoTWirelessTaskDefinitionUpdateWirelessGatewayTaskCreate;
  TaskDefinitionType?: string;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::IoTWireless::TaskDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html | AWS::IoTWireless::TaskDefinition}
 */
export interface IoTWirelessTaskDefinitionAttribs {
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::IoTWireless::TaskDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html | AWS::IoTWireless::TaskDefinition}
 */
export class IoTWirelessTaskDefinition extends ResourceBase<
  "AWS::IoTWireless::TaskDefinition",
  IoTWirelessTaskDefinitionProps,
  IoTWirelessTaskDefinitionAttribs
> {
  public static readonly Type = "AWS::IoTWireless::TaskDefinition";
  public static readonly AttributeNames: readonly (keyof IoTWirelessTaskDefinitionAttribs)[] =
    ["Id", "Arn"];
  constructor(
    logicalId: string,
    properties: IoTWirelessTaskDefinitionProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTWirelessTaskDefinition.Type,
      IoTWirelessTaskDefinition.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoTWireless::WirelessDevice
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdevice.html | AWS::IoTWireless::WirelessDevice}
 */
export interface IoTWirelessWirelessDeviceProps {
  LastUplinkReceivedAt?: string;
  Type: string;
  Description?: string;
  LoRaWAN?: IoTWirelessWirelessDeviceLoRaWANDevice;
  DestinationName: string;
  ThingArn?: string;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::IoTWireless::WirelessDevice
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdevice.html | AWS::IoTWireless::WirelessDevice}
 */
export interface IoTWirelessWirelessDeviceAttribs {
  Id?: string;
  ThingName?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::IoTWireless::WirelessDevice
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdevice.html | AWS::IoTWireless::WirelessDevice}
 */
export class IoTWirelessWirelessDevice extends ResourceBase<
  "AWS::IoTWireless::WirelessDevice",
  IoTWirelessWirelessDeviceProps,
  IoTWirelessWirelessDeviceAttribs
> {
  public static readonly Type = "AWS::IoTWireless::WirelessDevice";
  public static readonly AttributeNames: readonly (keyof IoTWirelessWirelessDeviceAttribs)[] =
    ["Id", "ThingName", "Arn"];
  constructor(
    logicalId: string,
    properties: IoTWirelessWirelessDeviceProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTWirelessWirelessDevice.Type,
      IoTWirelessWirelessDevice.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoTWireless::WirelessDeviceImportTask
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdeviceimporttask.html | AWS::IoTWireless::WirelessDeviceImportTask}
 */
export interface IoTWirelessWirelessDeviceImportTaskProps {
  DestinationName: string;
  Sidewalk: IoTWirelessWirelessDeviceImportTaskSidewalk;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::IoTWireless::WirelessDeviceImportTask
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdeviceimporttask.html | AWS::IoTWireless::WirelessDeviceImportTask}
 */
export interface IoTWirelessWirelessDeviceImportTaskAttribs {
  Status?: string;
  CreationDate?: string;
  "Sidewalk.DeviceCreationFileList"?: any[];
  InitializedImportedDevicesCount?: number;
  StatusReason?: string;
  OnboardedImportedDevicesCount?: number;
  FailedImportedDevicesCount?: number;
  Id?: string;
  PendingImportedDevicesCount?: number;
  Arn?: string;
}
/**
 * Resource class for AWS::IoTWireless::WirelessDeviceImportTask
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdeviceimporttask.html | AWS::IoTWireless::WirelessDeviceImportTask}
 */
export class IoTWirelessWirelessDeviceImportTask extends ResourceBase<
  "AWS::IoTWireless::WirelessDeviceImportTask",
  IoTWirelessWirelessDeviceImportTaskProps,
  IoTWirelessWirelessDeviceImportTaskAttribs
> {
  public static readonly Type = "AWS::IoTWireless::WirelessDeviceImportTask";
  public static readonly AttributeNames: readonly (keyof IoTWirelessWirelessDeviceImportTaskAttribs)[] =
    [
      "Status",
      "CreationDate",
      "Sidewalk.DeviceCreationFileList",
      "InitializedImportedDevicesCount",
      "StatusReason",
      "OnboardedImportedDevicesCount",
      "FailedImportedDevicesCount",
      "Id",
      "PendingImportedDevicesCount",
      "Arn",
    ];
  constructor(
    logicalId: string,
    properties: IoTWirelessWirelessDeviceImportTaskProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTWirelessWirelessDeviceImportTask.Type,
      IoTWirelessWirelessDeviceImportTask.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoTWireless::WirelessGateway
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessgateway.html | AWS::IoTWireless::WirelessGateway}
 */
export interface IoTWirelessWirelessGatewayProps {
  LastUplinkReceivedAt?: string;
  Description?: string;
  LoRaWAN: IoTWirelessWirelessGatewayLoRaWANGateway;
  ThingArn?: string;
  ThingName?: string;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::IoTWireless::WirelessGateway
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessgateway.html | AWS::IoTWireless::WirelessGateway}
 */
export interface IoTWirelessWirelessGatewayAttribs {
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::IoTWireless::WirelessGateway
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessgateway.html | AWS::IoTWireless::WirelessGateway}
 */
export class IoTWirelessWirelessGateway extends ResourceBase<
  "AWS::IoTWireless::WirelessGateway",
  IoTWirelessWirelessGatewayProps,
  IoTWirelessWirelessGatewayAttribs
> {
  public static readonly Type = "AWS::IoTWireless::WirelessGateway";
  public static readonly AttributeNames: readonly (keyof IoTWirelessWirelessGatewayAttribs)[] =
    ["Id", "Arn"];
  constructor(
    logicalId: string,
    properties: IoTWirelessWirelessGatewayProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTWirelessWirelessGateway.Type,
      IoTWirelessWirelessGateway.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
