import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::GroundStation::Config.AntennaDownlinkConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-antennadownlinkconfig.html | AWS::GroundStation::Config.AntennaDownlinkConfig}
 */
export interface GroundStationConfigAntennaDownlinkConfig {
  SpectrumConfig?: GroundStationConfigSpectrumConfig;
}
/**
 * Type definition for AWS::GroundStation::Config.AntennaDownlinkDemodDecodeConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-antennadownlinkdemoddecodeconfig.html | AWS::GroundStation::Config.AntennaDownlinkDemodDecodeConfig}
 */
export interface GroundStationConfigAntennaDownlinkDemodDecodeConfig {
  DemodulationConfig?: GroundStationConfigDemodulationConfig;
  SpectrumConfig?: GroundStationConfigSpectrumConfig;
  DecodeConfig?: GroundStationConfigDecodeConfig;
}
/**
 * Type definition for AWS::GroundStation::Config.AntennaUplinkConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-antennauplinkconfig.html | AWS::GroundStation::Config.AntennaUplinkConfig}
 */
export interface GroundStationConfigAntennaUplinkConfig {
  TransmitDisabled?: boolean;
  SpectrumConfig?: GroundStationConfigUplinkSpectrumConfig;
  TargetEirp?: GroundStationConfigEirp;
}
/**
 * Type definition for AWS::GroundStation::Config.ConfigData
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-configdata.html | AWS::GroundStation::Config.ConfigData}
 */
export interface GroundStationConfigConfigData {
  DataflowEndpointConfig?: GroundStationConfigDataflowEndpointConfig;
  UplinkEchoConfig?: GroundStationConfigUplinkEchoConfig;
  AntennaDownlinkConfig?: GroundStationConfigAntennaDownlinkConfig;
  AntennaDownlinkDemodDecodeConfig?: GroundStationConfigAntennaDownlinkDemodDecodeConfig;
  TrackingConfig?: GroundStationConfigTrackingConfig;
  AntennaUplinkConfig?: GroundStationConfigAntennaUplinkConfig;
  S3RecordingConfig?: GroundStationConfigS3RecordingConfig;
}
/**
 * Type definition for AWS::GroundStation::Config.DataflowEndpointConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-dataflowendpointconfig.html | AWS::GroundStation::Config.DataflowEndpointConfig}
 */
export interface GroundStationConfigDataflowEndpointConfig {
  DataflowEndpointName?: string;
  DataflowEndpointRegion?: string;
}
/**
 * Type definition for AWS::GroundStation::Config.DecodeConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-decodeconfig.html | AWS::GroundStation::Config.DecodeConfig}
 */
export interface GroundStationConfigDecodeConfig {
  UnvalidatedJSON?: string;
}
/**
 * Type definition for AWS::GroundStation::Config.DemodulationConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-demodulationconfig.html | AWS::GroundStation::Config.DemodulationConfig}
 */
export interface GroundStationConfigDemodulationConfig {
  UnvalidatedJSON?: string;
}
/**
 * Type definition for AWS::GroundStation::Config.Eirp
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-eirp.html | AWS::GroundStation::Config.Eirp}
 */
export interface GroundStationConfigEirp {
  Value?: number;
  Units?: string;
}
/**
 * Type definition for AWS::GroundStation::Config.Frequency
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-frequency.html | AWS::GroundStation::Config.Frequency}
 */
export interface GroundStationConfigFrequency {
  Value?: number;
  Units?: string;
}
/**
 * Type definition for AWS::GroundStation::Config.FrequencyBandwidth
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-frequencybandwidth.html | AWS::GroundStation::Config.FrequencyBandwidth}
 */
export interface GroundStationConfigFrequencyBandwidth {
  Value?: number;
  Units?: string;
}
/**
 * Type definition for AWS::GroundStation::Config.S3RecordingConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-s3recordingconfig.html | AWS::GroundStation::Config.S3RecordingConfig}
 */
export interface GroundStationConfigS3RecordingConfig {
  BucketArn?: string;
  Prefix?: string;
  RoleArn?: string;
}
/**
 * Type definition for AWS::GroundStation::Config.SpectrumConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-spectrumconfig.html | AWS::GroundStation::Config.SpectrumConfig}
 */
export interface GroundStationConfigSpectrumConfig {
  Polarization?: string;
  Bandwidth?: GroundStationConfigFrequencyBandwidth;
  CenterFrequency?: GroundStationConfigFrequency;
}
/**
 * Type definition for AWS::GroundStation::Config.TrackingConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-trackingconfig.html | AWS::GroundStation::Config.TrackingConfig}
 */
export interface GroundStationConfigTrackingConfig {
  Autotrack?: string;
}
/**
 * Type definition for AWS::GroundStation::Config.UplinkEchoConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-uplinkechoconfig.html | AWS::GroundStation::Config.UplinkEchoConfig}
 */
export interface GroundStationConfigUplinkEchoConfig {
  Enabled?: boolean;
  AntennaUplinkConfigArn?: string;
}
/**
 * Type definition for AWS::GroundStation::Config.UplinkSpectrumConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-uplinkspectrumconfig.html | AWS::GroundStation::Config.UplinkSpectrumConfig}
 */
export interface GroundStationConfigUplinkSpectrumConfig {
  Polarization?: string;
  CenterFrequency?: GroundStationConfigFrequency;
}
/**
 * Type definition for AWS::GroundStation::DataflowEndpointGroup.AwsGroundStationAgentEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-awsgroundstationagentendpoint.html | AWS::GroundStation::DataflowEndpointGroup.AwsGroundStationAgentEndpoint}
 */
export interface GroundStationDataflowEndpointGroupAwsGroundStationAgentEndpoint {
  AgentStatus?: string;
  IngressAddress?: GroundStationDataflowEndpointGroupRangedConnectionDetails;
  AuditResults?: string;
  Name?: string;
  EgressAddress?: GroundStationDataflowEndpointGroupConnectionDetails;
}
/**
 * Type definition for AWS::GroundStation::DataflowEndpointGroup.ConnectionDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-connectiondetails.html | AWS::GroundStation::DataflowEndpointGroup.ConnectionDetails}
 */
export interface GroundStationDataflowEndpointGroupConnectionDetails {
  SocketAddress?: GroundStationDataflowEndpointGroupSocketAddress;
  Mtu?: number;
}
/**
 * Type definition for AWS::GroundStation::DataflowEndpointGroup.DataflowEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-dataflowendpoint.html | AWS::GroundStation::DataflowEndpointGroup.DataflowEndpoint}
 */
export interface GroundStationDataflowEndpointGroupDataflowEndpoint {
  Address?: GroundStationDataflowEndpointGroupSocketAddress;
  Name?: string;
  Mtu?: number;
}
/**
 * Type definition for AWS::GroundStation::DataflowEndpointGroup.EndpointDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-endpointdetails.html | AWS::GroundStation::DataflowEndpointGroup.EndpointDetails}
 */
export interface GroundStationDataflowEndpointGroupEndpointDetails {
  Endpoint?: GroundStationDataflowEndpointGroupDataflowEndpoint;
  AwsGroundStationAgentEndpoint?: GroundStationDataflowEndpointGroupAwsGroundStationAgentEndpoint;
  SecurityDetails?: GroundStationDataflowEndpointGroupSecurityDetails;
}
/**
 * Type definition for AWS::GroundStation::DataflowEndpointGroup.IntegerRange
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-integerrange.html | AWS::GroundStation::DataflowEndpointGroup.IntegerRange}
 */
export interface GroundStationDataflowEndpointGroupIntegerRange {
  Minimum?: number;
  Maximum?: number;
}
/**
 * Type definition for AWS::GroundStation::DataflowEndpointGroup.RangedConnectionDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-rangedconnectiondetails.html | AWS::GroundStation::DataflowEndpointGroup.RangedConnectionDetails}
 */
export interface GroundStationDataflowEndpointGroupRangedConnectionDetails {
  SocketAddress?: GroundStationDataflowEndpointGroupRangedSocketAddress;
  Mtu?: number;
}
/**
 * Type definition for AWS::GroundStation::DataflowEndpointGroup.RangedSocketAddress
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-rangedsocketaddress.html | AWS::GroundStation::DataflowEndpointGroup.RangedSocketAddress}
 */
export interface GroundStationDataflowEndpointGroupRangedSocketAddress {
  PortRange?: GroundStationDataflowEndpointGroupIntegerRange;
  Name?: string;
}
/**
 * Type definition for AWS::GroundStation::DataflowEndpointGroup.SecurityDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-securitydetails.html | AWS::GroundStation::DataflowEndpointGroup.SecurityDetails}
 */
export interface GroundStationDataflowEndpointGroupSecurityDetails {
  SubnetIds?: any[];
  SecurityGroupIds?: any[];
  RoleArn?: string;
}
/**
 * Type definition for AWS::GroundStation::DataflowEndpointGroup.SocketAddress
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-socketaddress.html | AWS::GroundStation::DataflowEndpointGroup.SocketAddress}
 */
export interface GroundStationDataflowEndpointGroupSocketAddress {
  Port?: number;
  Name?: string;
}
/**
 * Type definition for AWS::GroundStation::MissionProfile.DataflowEdge
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-missionprofile-dataflowedge.html | AWS::GroundStation::MissionProfile.DataflowEdge}
 */
export interface GroundStationMissionProfileDataflowEdge {
  Destination?: string;
  Source?: string;
}
/**
 * Type definition for AWS::GroundStation::MissionProfile.StreamsKmsKey
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-missionprofile-streamskmskey.html | AWS::GroundStation::MissionProfile.StreamsKmsKey}
 */
export interface GroundStationMissionProfileStreamsKmsKey {
  KmsKeyArn?: string;
  KmsAliasArn?: string;
}
/**
 * Type definition for AWS::GroundStation::Config
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html | AWS::GroundStation::Config}
 */
export interface GroundStationConfigProps {
  ConfigData: GroundStationConfigConfigData;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::GroundStation::Config
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html | AWS::GroundStation::Config}
 */
export interface GroundStationConfigAttribs {
  Type?: string;
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::GroundStation::Config
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html | AWS::GroundStation::Config}
 */
export class GroundStationConfig extends ResourceBase<
  "AWS::GroundStation::Config",
  GroundStationConfigProps,
  GroundStationConfigAttribs
> {
  public static readonly Type = "AWS::GroundStation::Config";
  public static readonly AttributeNames: readonly (keyof GroundStationConfigAttribs)[] =
    ["Type", "Id", "Arn"];
  constructor(
    logicalId: string,
    properties: GroundStationConfigProps,
    options?: ResourceOptions,
  ) {
    super(
      GroundStationConfig.Type,
      GroundStationConfig.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::GroundStation::DataflowEndpointGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html | AWS::GroundStation::DataflowEndpointGroup}
 */
export interface GroundStationDataflowEndpointGroupProps {
  ContactPostPassDurationSeconds?: number;
  EndpointDetails: any[];
  Tags?: Tag[];
  ContactPrePassDurationSeconds?: number;
}
/**
 * Attributes type definition for AWS::GroundStation::DataflowEndpointGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html | AWS::GroundStation::DataflowEndpointGroup}
 */
export interface GroundStationDataflowEndpointGroupAttribs {
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::GroundStation::DataflowEndpointGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html | AWS::GroundStation::DataflowEndpointGroup}
 */
export class GroundStationDataflowEndpointGroup extends ResourceBase<
  "AWS::GroundStation::DataflowEndpointGroup",
  GroundStationDataflowEndpointGroupProps,
  GroundStationDataflowEndpointGroupAttribs
> {
  public static readonly Type = "AWS::GroundStation::DataflowEndpointGroup";
  public static readonly AttributeNames: readonly (keyof GroundStationDataflowEndpointGroupAttribs)[] =
    ["Id", "Arn"];
  constructor(
    logicalId: string,
    properties: GroundStationDataflowEndpointGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      GroundStationDataflowEndpointGroup.Type,
      GroundStationDataflowEndpointGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::GroundStation::MissionProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html | AWS::GroundStation::MissionProfile}
 */
export interface GroundStationMissionProfileProps {
  StreamsKmsKey?: GroundStationMissionProfileStreamsKmsKey;
  ContactPostPassDurationSeconds?: number;
  MinimumViableContactDurationSeconds: number;
  DataflowEdges: any[];
  StreamsKmsRole?: string;
  TrackingConfigArn: string;
  Tags?: Tag[];
  Name: string;
  ContactPrePassDurationSeconds?: number;
}
/**
 * Attributes type definition for AWS::GroundStation::MissionProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html | AWS::GroundStation::MissionProfile}
 */
export interface GroundStationMissionProfileAttribs {
  Region?: string;
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::GroundStation::MissionProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html | AWS::GroundStation::MissionProfile}
 */
export class GroundStationMissionProfile extends ResourceBase<
  "AWS::GroundStation::MissionProfile",
  GroundStationMissionProfileProps,
  GroundStationMissionProfileAttribs
> {
  public static readonly Type = "AWS::GroundStation::MissionProfile";
  public static readonly AttributeNames: readonly (keyof GroundStationMissionProfileAttribs)[] =
    ["Region", "Id", "Arn"];
  constructor(
    logicalId: string,
    properties: GroundStationMissionProfileProps,
    options?: ResourceOptions,
  ) {
    super(
      GroundStationMissionProfile.Type,
      GroundStationMissionProfile.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
