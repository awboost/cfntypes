import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::EC2::CapacityReservation.TagSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-capacityreservation-tagspecification.html | AWS::EC2::CapacityReservation.TagSpecification}
 */
export interface EC2CapacityReservationTagSpecification {
  ResourceType?: string;
  Tags?: Tag[];
}
/**
 * Type definition for AWS::EC2::CapacityReservationFleet.InstanceTypeSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-capacityreservationfleet-instancetypespecification.html | AWS::EC2::CapacityReservationFleet.InstanceTypeSpecification}
 */
export interface EC2CapacityReservationFleetInstanceTypeSpecification {
  Priority?: number;
  AvailabilityZoneId?: string;
  AvailabilityZone?: string;
  InstancePlatform?: string;
  InstanceType?: string;
  Weight?: number;
  EbsOptimized?: boolean;
}
/**
 * Type definition for AWS::EC2::CapacityReservationFleet.TagSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-capacityreservationfleet-tagspecification.html | AWS::EC2::CapacityReservationFleet.TagSpecification}
 */
export interface EC2CapacityReservationFleetTagSpecification {
  ResourceType?: string;
  Tags?: Tag[];
}
/**
 * Type definition for AWS::EC2::ClientVpnEndpoint.CertificateAuthenticationRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-clientvpnendpoint-certificateauthenticationrequest.html | AWS::EC2::ClientVpnEndpoint.CertificateAuthenticationRequest}
 */
export interface EC2ClientVpnEndpointCertificateAuthenticationRequest {
  ClientRootCertificateChainArn: string;
}
/**
 * Type definition for AWS::EC2::ClientVpnEndpoint.ClientAuthenticationRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-clientvpnendpoint-clientauthenticationrequest.html | AWS::EC2::ClientVpnEndpoint.ClientAuthenticationRequest}
 */
export interface EC2ClientVpnEndpointClientAuthenticationRequest {
  MutualAuthentication?: EC2ClientVpnEndpointCertificateAuthenticationRequest;
  Type: string;
  FederatedAuthentication?: EC2ClientVpnEndpointFederatedAuthenticationRequest;
  ActiveDirectory?: EC2ClientVpnEndpointDirectoryServiceAuthenticationRequest;
}
/**
 * Type definition for AWS::EC2::ClientVpnEndpoint.ClientConnectOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-clientvpnendpoint-clientconnectoptions.html | AWS::EC2::ClientVpnEndpoint.ClientConnectOptions}
 */
export interface EC2ClientVpnEndpointClientConnectOptions {
  LambdaFunctionArn?: string;
  Enabled: boolean;
}
/**
 * Type definition for AWS::EC2::ClientVpnEndpoint.ClientLoginBannerOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-clientvpnendpoint-clientloginbanneroptions.html | AWS::EC2::ClientVpnEndpoint.ClientLoginBannerOptions}
 */
export interface EC2ClientVpnEndpointClientLoginBannerOptions {
  Enabled: boolean;
  BannerText?: string;
}
/**
 * Type definition for AWS::EC2::ClientVpnEndpoint.ConnectionLogOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-clientvpnendpoint-connectionlogoptions.html | AWS::EC2::ClientVpnEndpoint.ConnectionLogOptions}
 */
export interface EC2ClientVpnEndpointConnectionLogOptions {
  CloudwatchLogStream?: string;
  Enabled: boolean;
  CloudwatchLogGroup?: string;
}
/**
 * Type definition for AWS::EC2::ClientVpnEndpoint.DirectoryServiceAuthenticationRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-clientvpnendpoint-directoryserviceauthenticationrequest.html | AWS::EC2::ClientVpnEndpoint.DirectoryServiceAuthenticationRequest}
 */
export interface EC2ClientVpnEndpointDirectoryServiceAuthenticationRequest {
  DirectoryId: string;
}
/**
 * Type definition for AWS::EC2::ClientVpnEndpoint.FederatedAuthenticationRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-clientvpnendpoint-federatedauthenticationrequest.html | AWS::EC2::ClientVpnEndpoint.FederatedAuthenticationRequest}
 */
export interface EC2ClientVpnEndpointFederatedAuthenticationRequest {
  SelfServiceSAMLProviderArn?: string;
  SAMLProviderArn: string;
}
/**
 * Type definition for AWS::EC2::ClientVpnEndpoint.TagSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-clientvpnendpoint-tagspecification.html | AWS::EC2::ClientVpnEndpoint.TagSpecification}
 */
export interface EC2ClientVpnEndpointTagSpecification {
  ResourceType: string;
  Tags: Tag[];
}
/**
 * Type definition for AWS::EC2::EC2Fleet.AcceleratorCountRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-acceleratorcountrequest.html | AWS::EC2::EC2Fleet.AcceleratorCountRequest}
 */
export interface EC2EC2FleetAcceleratorCountRequest {
  Min?: number;
  Max?: number;
}
/**
 * Type definition for AWS::EC2::EC2Fleet.AcceleratorTotalMemoryMiBRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-acceleratortotalmemorymibrequest.html | AWS::EC2::EC2Fleet.AcceleratorTotalMemoryMiBRequest}
 */
export interface EC2EC2FleetAcceleratorTotalMemoryMiBRequest {
  Min?: number;
  Max?: number;
}
/**
 * Type definition for AWS::EC2::EC2Fleet.BaselineEbsBandwidthMbpsRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-baselineebsbandwidthmbpsrequest.html | AWS::EC2::EC2Fleet.BaselineEbsBandwidthMbpsRequest}
 */
export interface EC2EC2FleetBaselineEbsBandwidthMbpsRequest {
  Min?: number;
  Max?: number;
}
/**
 * Type definition for AWS::EC2::EC2Fleet.CapacityRebalance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-capacityrebalance.html | AWS::EC2::EC2Fleet.CapacityRebalance}
 */
export interface EC2EC2FleetCapacityRebalance {
  TerminationDelay?: number;
  ReplacementStrategy?: string;
}
/**
 * Type definition for AWS::EC2::EC2Fleet.CapacityReservationOptionsRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-capacityreservationoptionsrequest.html | AWS::EC2::EC2Fleet.CapacityReservationOptionsRequest}
 */
export interface EC2EC2FleetCapacityReservationOptionsRequest {
  UsageStrategy?: string;
}
/**
 * Type definition for AWS::EC2::EC2Fleet.FleetLaunchTemplateConfigRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-fleetlaunchtemplateconfigrequest.html | AWS::EC2::EC2Fleet.FleetLaunchTemplateConfigRequest}
 */
export interface EC2EC2FleetFleetLaunchTemplateConfigRequest {
  LaunchTemplateSpecification?: EC2EC2FleetFleetLaunchTemplateSpecificationRequest;
  Overrides?: any[];
}
/**
 * Type definition for AWS::EC2::EC2Fleet.FleetLaunchTemplateOverridesRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-fleetlaunchtemplateoverridesrequest.html | AWS::EC2::EC2Fleet.FleetLaunchTemplateOverridesRequest}
 */
export interface EC2EC2FleetFleetLaunchTemplateOverridesRequest {
  WeightedCapacity?: number;
  Placement?: EC2EC2FleetPlacement;
  Priority?: number;
  AvailabilityZone?: string;
  SubnetId?: string;
  InstanceRequirements?: EC2EC2FleetInstanceRequirementsRequest;
  InstanceType?: string;
  MaxPrice?: string;
}
/**
 * Type definition for AWS::EC2::EC2Fleet.FleetLaunchTemplateSpecificationRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-fleetlaunchtemplatespecificationrequest.html | AWS::EC2::EC2Fleet.FleetLaunchTemplateSpecificationRequest}
 */
export interface EC2EC2FleetFleetLaunchTemplateSpecificationRequest {
  LaunchTemplateName?: string;
  Version: string;
  LaunchTemplateId?: string;
}
/**
 * Type definition for AWS::EC2::EC2Fleet.InstanceRequirementsRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-instancerequirementsrequest.html | AWS::EC2::EC2Fleet.InstanceRequirementsRequest}
 */
export interface EC2EC2FleetInstanceRequirementsRequest {
  LocalStorageTypes?: any[];
  InstanceGenerations?: any[];
  NetworkInterfaceCount?: EC2EC2FleetNetworkInterfaceCountRequest;
  MemoryGiBPerVCpu?: EC2EC2FleetMemoryGiBPerVCpuRequest;
  AcceleratorTypes?: any[];
  VCpuCount?: EC2EC2FleetVCpuCountRangeRequest;
  ExcludedInstanceTypes?: any[];
  AcceleratorManufacturers?: any[];
  AllowedInstanceTypes?: any[];
  LocalStorage?: string;
  CpuManufacturers?: any[];
  NetworkBandwidthGbps?: EC2EC2FleetNetworkBandwidthGbpsRequest;
  AcceleratorCount?: EC2EC2FleetAcceleratorCountRequest;
  BareMetal?: string;
  RequireHibernateSupport?: boolean;
  SpotMaxPricePercentageOverLowestPrice?: number;
  BaselineEbsBandwidthMbps?: EC2EC2FleetBaselineEbsBandwidthMbpsRequest;
  OnDemandMaxPricePercentageOverLowestPrice?: number;
  AcceleratorNames?: any[];
  AcceleratorTotalMemoryMiB?: EC2EC2FleetAcceleratorTotalMemoryMiBRequest;
  BurstablePerformance?: string;
  MemoryMiB?: EC2EC2FleetMemoryMiBRequest;
  TotalLocalStorageGB?: EC2EC2FleetTotalLocalStorageGBRequest;
}
/**
 * Type definition for AWS::EC2::EC2Fleet.MaintenanceStrategies
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-maintenancestrategies.html | AWS::EC2::EC2Fleet.MaintenanceStrategies}
 */
export interface EC2EC2FleetMaintenanceStrategies {
  CapacityRebalance?: EC2EC2FleetCapacityRebalance;
}
/**
 * Type definition for AWS::EC2::EC2Fleet.MemoryGiBPerVCpuRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-memorygibpervcpurequest.html | AWS::EC2::EC2Fleet.MemoryGiBPerVCpuRequest}
 */
export interface EC2EC2FleetMemoryGiBPerVCpuRequest {
  Min?: number;
  Max?: number;
}
/**
 * Type definition for AWS::EC2::EC2Fleet.MemoryMiBRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-memorymibrequest.html | AWS::EC2::EC2Fleet.MemoryMiBRequest}
 */
export interface EC2EC2FleetMemoryMiBRequest {
  Min?: number;
  Max?: number;
}
/**
 * Type definition for AWS::EC2::EC2Fleet.NetworkBandwidthGbpsRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-networkbandwidthgbpsrequest.html | AWS::EC2::EC2Fleet.NetworkBandwidthGbpsRequest}
 */
export interface EC2EC2FleetNetworkBandwidthGbpsRequest {
  Min?: number;
  Max?: number;
}
/**
 * Type definition for AWS::EC2::EC2Fleet.NetworkInterfaceCountRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-networkinterfacecountrequest.html | AWS::EC2::EC2Fleet.NetworkInterfaceCountRequest}
 */
export interface EC2EC2FleetNetworkInterfaceCountRequest {
  Min?: number;
  Max?: number;
}
/**
 * Type definition for AWS::EC2::EC2Fleet.OnDemandOptionsRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-ondemandoptionsrequest.html | AWS::EC2::EC2Fleet.OnDemandOptionsRequest}
 */
export interface EC2EC2FleetOnDemandOptionsRequest {
  SingleAvailabilityZone?: boolean;
  AllocationStrategy?: string;
  SingleInstanceType?: boolean;
  MinTargetCapacity?: number;
  MaxTotalPrice?: string;
  CapacityReservationOptions?: EC2EC2FleetCapacityReservationOptionsRequest;
}
/**
 * Type definition for AWS::EC2::EC2Fleet.Placement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-placement.html | AWS::EC2::EC2Fleet.Placement}
 */
export interface EC2EC2FleetPlacement {
  GroupName?: string;
  Tenancy?: string;
  SpreadDomain?: string;
  PartitionNumber?: number;
  AvailabilityZone?: string;
  Affinity?: string;
  HostId?: string;
  HostResourceGroupArn?: string;
}
/**
 * Type definition for AWS::EC2::EC2Fleet.SpotOptionsRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-spotoptionsrequest.html | AWS::EC2::EC2Fleet.SpotOptionsRequest}
 */
export interface EC2EC2FleetSpotOptionsRequest {
  SingleAvailabilityZone?: boolean;
  AllocationStrategy?: string;
  SingleInstanceType?: boolean;
  MinTargetCapacity?: number;
  MaxTotalPrice?: string;
  MaintenanceStrategies?: EC2EC2FleetMaintenanceStrategies;
  InstanceInterruptionBehavior?: string;
  InstancePoolsToUseCount?: number;
}
/**
 * Type definition for AWS::EC2::EC2Fleet.TagSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-tagspecification.html | AWS::EC2::EC2Fleet.TagSpecification}
 */
export interface EC2EC2FleetTagSpecification {
  ResourceType?: string;
  Tags?: Tag[];
}
/**
 * Type definition for AWS::EC2::EC2Fleet.TargetCapacitySpecificationRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-targetcapacityspecificationrequest.html | AWS::EC2::EC2Fleet.TargetCapacitySpecificationRequest}
 */
export interface EC2EC2FleetTargetCapacitySpecificationRequest {
  DefaultTargetCapacityType?: string;
  TotalTargetCapacity: number;
  OnDemandTargetCapacity?: number;
  SpotTargetCapacity?: number;
  TargetCapacityUnitType?: string;
}
/**
 * Type definition for AWS::EC2::EC2Fleet.TotalLocalStorageGBRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-totallocalstoragegbrequest.html | AWS::EC2::EC2Fleet.TotalLocalStorageGBRequest}
 */
export interface EC2EC2FleetTotalLocalStorageGBRequest {
  Min?: number;
  Max?: number;
}
/**
 * Type definition for AWS::EC2::EC2Fleet.VCpuCountRangeRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-vcpucountrangerequest.html | AWS::EC2::EC2Fleet.VCpuCountRangeRequest}
 */
export interface EC2EC2FleetVCpuCountRangeRequest {
  Min?: number;
  Max?: number;
}
/**
 * Type definition for AWS::EC2::FlowLog.DestinationOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-flowlog-destinationoptions.html | AWS::EC2::FlowLog.DestinationOptions}
 */
export interface EC2FlowLogDestinationOptions {
  PerHourPartition: boolean;
  HiveCompatiblePartitions: boolean;
  FileFormat: string;
}
/**
 * Type definition for AWS::EC2::IPAM.IpamOperatingRegion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ipam-ipamoperatingregion.html | AWS::EC2::IPAM.IpamOperatingRegion}
 */
export interface EC2IPAMIpamOperatingRegion {
  RegionName: string;
}
/**
 * Type definition for AWS::EC2::IPAMPool.ProvisionedCidr
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ipampool-provisionedcidr.html | AWS::EC2::IPAMPool.ProvisionedCidr}
 */
export interface EC2IPAMPoolProvisionedCidr {
  Cidr: string;
}
/**
 * Type definition for AWS::EC2::IPAMResourceDiscovery.IpamOperatingRegion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ipamresourcediscovery-ipamoperatingregion.html | AWS::EC2::IPAMResourceDiscovery.IpamOperatingRegion}
 */
export interface EC2IPAMResourceDiscoveryIpamOperatingRegion {
  RegionName: string;
}
/**
 * Type definition for AWS::EC2::Instance.AssociationParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-ssmassociations-associationparameters.html | AWS::EC2::Instance.AssociationParameter}
 */
export interface EC2InstanceAssociationParameter {
  Key: string;
  Value: any[];
}
/**
 * Type definition for AWS::EC2::Instance.BlockDeviceMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-blockdev-mapping.html | AWS::EC2::Instance.BlockDeviceMapping}
 */
export interface EC2InstanceBlockDeviceMapping {
  DeviceName: string;
  Ebs?: EC2InstanceEbs;
  NoDevice?: EC2InstanceNoDevice;
  VirtualName?: string;
}
/**
 * Type definition for AWS::EC2::Instance.CpuOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-cpuoptions.html | AWS::EC2::Instance.CpuOptions}
 */
export interface EC2InstanceCpuOptions {
  CoreCount?: number;
  ThreadsPerCore?: number;
}
/**
 * Type definition for AWS::EC2::Instance.CreditSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-creditspecification.html | AWS::EC2::Instance.CreditSpecification}
 */
export interface EC2InstanceCreditSpecification {
  CPUCredits?: string;
}
/**
 * Type definition for AWS::EC2::Instance.Ebs
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-blockdev-template.html | AWS::EC2::Instance.Ebs}
 */
export interface EC2InstanceEbs {
  DeleteOnTermination?: boolean;
  Encrypted?: boolean;
  Iops?: number;
  KmsKeyId?: string;
  SnapshotId?: string;
  VolumeSize?: number;
  VolumeType?: string;
}
/**
 * Type definition for AWS::EC2::Instance.ElasticGpuSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-elasticgpuspecification.html | AWS::EC2::Instance.ElasticGpuSpecification}
 */
export interface EC2InstanceElasticGpuSpecification {
  Type: string;
}
/**
 * Type definition for AWS::EC2::Instance.ElasticInferenceAccelerator
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-elasticinferenceaccelerator.html | AWS::EC2::Instance.ElasticInferenceAccelerator}
 */
export interface EC2InstanceElasticInferenceAccelerator {
  Count?: number;
  Type: string;
}
/**
 * Type definition for AWS::EC2::Instance.EnclaveOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-enclaveoptions.html | AWS::EC2::Instance.EnclaveOptions}
 */
export interface EC2InstanceEnclaveOptions {
  Enabled?: boolean;
}
/**
 * Type definition for AWS::EC2::Instance.HibernationOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-hibernationoptions.html | AWS::EC2::Instance.HibernationOptions}
 */
export interface EC2InstanceHibernationOptions {
  Configured?: boolean;
}
/**
 * Type definition for AWS::EC2::Instance.InstanceIpv6Address
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-instanceipv6address.html | AWS::EC2::Instance.InstanceIpv6Address}
 */
export interface EC2InstanceInstanceIpv6Address {
  Ipv6Address: string;
}
/**
 * Type definition for AWS::EC2::Instance.LaunchTemplateSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-launchtemplatespecification.html | AWS::EC2::Instance.LaunchTemplateSpecification}
 */
export interface EC2InstanceLaunchTemplateSpecification {
  LaunchTemplateId?: string;
  LaunchTemplateName?: string;
  Version: string;
}
/**
 * Type definition for AWS::EC2::Instance.LicenseSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-licensespecification.html | AWS::EC2::Instance.LicenseSpecification}
 */
export interface EC2InstanceLicenseSpecification {
  LicenseConfigurationArn: string;
}
/**
 * Type definition for AWS::EC2::Instance.NetworkInterface
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-network-iface-embedded.html | AWS::EC2::Instance.NetworkInterface}
 */
export interface EC2InstanceNetworkInterface {
  AssociateCarrierIpAddress?: boolean;
  AssociatePublicIpAddress?: boolean;
  DeleteOnTermination?: boolean;
  Description?: string;
  DeviceIndex: string;
  GroupSet?: any[];
  Ipv6AddressCount?: number;
  Ipv6Addresses?: any[];
  NetworkInterfaceId?: string;
  PrivateIpAddress?: string;
  PrivateIpAddresses?: any[];
  SecondaryPrivateIpAddressCount?: number;
  SubnetId?: string;
}
/**
 * Type definition for AWS::EC2::Instance.NoDevice
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-nodevice.html | AWS::EC2::Instance.NoDevice}
 */
export interface EC2InstanceNoDevice {}
/**
 * Type definition for AWS::EC2::Instance.PrivateDnsNameOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-privatednsnameoptions.html | AWS::EC2::Instance.PrivateDnsNameOptions}
 */
export interface EC2InstancePrivateDnsNameOptions {
  EnableResourceNameDnsAAAARecord?: boolean;
  EnableResourceNameDnsARecord?: boolean;
  HostnameType?: string;
}
/**
 * Type definition for AWS::EC2::Instance.PrivateIpAddressSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-network-interface-privateipspec.html | AWS::EC2::Instance.PrivateIpAddressSpecification}
 */
export interface EC2InstancePrivateIpAddressSpecification {
  Primary: boolean;
  PrivateIpAddress: string;
}
/**
 * Type definition for AWS::EC2::Instance.SsmAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-ssmassociations.html | AWS::EC2::Instance.SsmAssociation}
 */
export interface EC2InstanceSsmAssociation {
  AssociationParameters?: any[];
  DocumentName: string;
}
/**
 * Type definition for AWS::EC2::Instance.Volume
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-mount-point.html | AWS::EC2::Instance.Volume}
 */
export interface EC2InstanceVolume {
  Device: string;
  VolumeId: string;
}
/**
 * Type definition for AWS::EC2::LaunchTemplate.AcceleratorCount
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-acceleratorcount.html | AWS::EC2::LaunchTemplate.AcceleratorCount}
 */
export interface EC2LaunchTemplateAcceleratorCount {
  Min?: number;
  Max?: number;
}
/**
 * Type definition for AWS::EC2::LaunchTemplate.AcceleratorTotalMemoryMiB
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-acceleratortotalmemorymib.html | AWS::EC2::LaunchTemplate.AcceleratorTotalMemoryMiB}
 */
export interface EC2LaunchTemplateAcceleratorTotalMemoryMiB {
  Min?: number;
  Max?: number;
}
/**
 * Type definition for AWS::EC2::LaunchTemplate.BaselineEbsBandwidthMbps
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-baselineebsbandwidthmbps.html | AWS::EC2::LaunchTemplate.BaselineEbsBandwidthMbps}
 */
export interface EC2LaunchTemplateBaselineEbsBandwidthMbps {
  Min?: number;
  Max?: number;
}
/**
 * Type definition for AWS::EC2::LaunchTemplate.BlockDeviceMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-blockdevicemapping.html | AWS::EC2::LaunchTemplate.BlockDeviceMapping}
 */
export interface EC2LaunchTemplateBlockDeviceMapping {
  Ebs?: EC2LaunchTemplateEbs;
  NoDevice?: string;
  VirtualName?: string;
  DeviceName?: string;
}
/**
 * Type definition for AWS::EC2::LaunchTemplate.CapacityReservationSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-capacityreservationspecification.html | AWS::EC2::LaunchTemplate.CapacityReservationSpecification}
 */
export interface EC2LaunchTemplateCapacityReservationSpecification {
  CapacityReservationPreference?: string;
  CapacityReservationTarget?: EC2LaunchTemplateCapacityReservationTarget;
}
/**
 * Type definition for AWS::EC2::LaunchTemplate.CapacityReservationTarget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-capacityreservationtarget.html | AWS::EC2::LaunchTemplate.CapacityReservationTarget}
 */
export interface EC2LaunchTemplateCapacityReservationTarget {
  CapacityReservationResourceGroupArn?: string;
  CapacityReservationId?: string;
}
/**
 * Type definition for AWS::EC2::LaunchTemplate.CpuOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-cpuoptions.html | AWS::EC2::LaunchTemplate.CpuOptions}
 */
export interface EC2LaunchTemplateCpuOptions {
  ThreadsPerCore?: number;
  AmdSevSnp?: string;
  CoreCount?: number;
}
/**
 * Type definition for AWS::EC2::LaunchTemplate.CreditSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-creditspecification.html | AWS::EC2::LaunchTemplate.CreditSpecification}
 */
export interface EC2LaunchTemplateCreditSpecification {
  CpuCredits?: string;
}
/**
 * Type definition for AWS::EC2::LaunchTemplate.Ebs
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-ebs.html | AWS::EC2::LaunchTemplate.Ebs}
 */
export interface EC2LaunchTemplateEbs {
  SnapshotId?: string;
  VolumeType?: string;
  KmsKeyId?: string;
  Encrypted?: boolean;
  Throughput?: number;
  Iops?: number;
  VolumeSize?: number;
  DeleteOnTermination?: boolean;
}
/**
 * Type definition for AWS::EC2::LaunchTemplate.ElasticGpuSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-elasticgpuspecification.html | AWS::EC2::LaunchTemplate.ElasticGpuSpecification}
 */
export interface EC2LaunchTemplateElasticGpuSpecification {
  Type?: string;
}
/**
 * Type definition for AWS::EC2::LaunchTemplate.EnclaveOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-enclaveoptions.html | AWS::EC2::LaunchTemplate.EnclaveOptions}
 */
export interface EC2LaunchTemplateEnclaveOptions {
  Enabled?: boolean;
}
/**
 * Type definition for AWS::EC2::LaunchTemplate.HibernationOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-hibernationoptions.html | AWS::EC2::LaunchTemplate.HibernationOptions}
 */
export interface EC2LaunchTemplateHibernationOptions {
  Configured?: boolean;
}
/**
 * Type definition for AWS::EC2::LaunchTemplate.IamInstanceProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-iaminstanceprofile.html | AWS::EC2::LaunchTemplate.IamInstanceProfile}
 */
export interface EC2LaunchTemplateIamInstanceProfile {
  Arn?: string;
  Name?: string;
}
/**
 * Type definition for AWS::EC2::LaunchTemplate.InstanceMarketOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-instancemarketoptions.html | AWS::EC2::LaunchTemplate.InstanceMarketOptions}
 */
export interface EC2LaunchTemplateInstanceMarketOptions {
  SpotOptions?: EC2LaunchTemplateSpotOptions;
  MarketType?: string;
}
/**
 * Type definition for AWS::EC2::LaunchTemplate.InstanceRequirements
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-instancerequirements.html | AWS::EC2::LaunchTemplate.InstanceRequirements}
 */
export interface EC2LaunchTemplateInstanceRequirements {
  LocalStorageTypes?: any[];
  InstanceGenerations?: any[];
  NetworkInterfaceCount?: EC2LaunchTemplateNetworkInterfaceCount;
  MemoryGiBPerVCpu?: EC2LaunchTemplateMemoryGiBPerVCpu;
  AcceleratorTypes?: any[];
  VCpuCount?: EC2LaunchTemplateVCpuCount;
  ExcludedInstanceTypes?: any[];
  AcceleratorManufacturers?: any[];
  AllowedInstanceTypes?: any[];
  LocalStorage?: string;
  CpuManufacturers?: any[];
  AcceleratorCount?: EC2LaunchTemplateAcceleratorCount;
  NetworkBandwidthGbps?: EC2LaunchTemplateNetworkBandwidthGbps;
  BareMetal?: string;
  RequireHibernateSupport?: boolean;
  SpotMaxPricePercentageOverLowestPrice?: number;
  BaselineEbsBandwidthMbps?: EC2LaunchTemplateBaselineEbsBandwidthMbps;
  OnDemandMaxPricePercentageOverLowestPrice?: number;
  AcceleratorNames?: any[];
  AcceleratorTotalMemoryMiB?: EC2LaunchTemplateAcceleratorTotalMemoryMiB;
  BurstablePerformance?: string;
  MemoryMiB?: EC2LaunchTemplateMemoryMiB;
  TotalLocalStorageGB?: EC2LaunchTemplateTotalLocalStorageGB;
}
/**
 * Type definition for AWS::EC2::LaunchTemplate.Ipv4PrefixSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-ipv4prefixspecification.html | AWS::EC2::LaunchTemplate.Ipv4PrefixSpecification}
 */
export interface EC2LaunchTemplateIpv4PrefixSpecification {
  Ipv4Prefix?: string;
}
/**
 * Type definition for AWS::EC2::LaunchTemplate.Ipv6Add
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-ipv6add.html | AWS::EC2::LaunchTemplate.Ipv6Add}
 */
export interface EC2LaunchTemplateIpv6Add {
  Ipv6Address?: string;
}
/**
 * Type definition for AWS::EC2::LaunchTemplate.Ipv6PrefixSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-ipv6prefixspecification.html | AWS::EC2::LaunchTemplate.Ipv6PrefixSpecification}
 */
export interface EC2LaunchTemplateIpv6PrefixSpecification {
  Ipv6Prefix?: string;
}
/**
 * Type definition for AWS::EC2::LaunchTemplate.LaunchTemplateData
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html | AWS::EC2::LaunchTemplate.LaunchTemplateData}
 */
export interface EC2LaunchTemplateLaunchTemplateData {
  SecurityGroups?: any[];
  TagSpecifications?: any[];
  UserData?: string;
  BlockDeviceMappings?: any[];
  MaintenanceOptions?: EC2LaunchTemplateMaintenanceOptions;
  IamInstanceProfile?: EC2LaunchTemplateIamInstanceProfile;
  KernelId?: string;
  EbsOptimized?: boolean;
  ElasticGpuSpecifications?: any[];
  ElasticInferenceAccelerators?: any[];
  Placement?: EC2LaunchTemplatePlacement;
  NetworkInterfaces?: any[];
  EnclaveOptions?: EC2LaunchTemplateEnclaveOptions;
  ImageId?: string;
  InstanceType?: string;
  Monitoring?: EC2LaunchTemplateMonitoring;
  HibernationOptions?: EC2LaunchTemplateHibernationOptions;
  MetadataOptions?: EC2LaunchTemplateMetadataOptions;
  LicenseSpecifications?: any[];
  InstanceInitiatedShutdownBehavior?: string;
  DisableApiStop?: boolean;
  CpuOptions?: EC2LaunchTemplateCpuOptions;
  PrivateDnsNameOptions?: EC2LaunchTemplatePrivateDnsNameOptions;
  SecurityGroupIds?: any[];
  KeyName?: string;
  DisableApiTermination?: boolean;
  InstanceMarketOptions?: EC2LaunchTemplateInstanceMarketOptions;
  InstanceRequirements?: EC2LaunchTemplateInstanceRequirements;
  RamDiskId?: string;
  CapacityReservationSpecification?: EC2LaunchTemplateCapacityReservationSpecification;
  CreditSpecification?: EC2LaunchTemplateCreditSpecification;
}
/**
 * Type definition for AWS::EC2::LaunchTemplate.LaunchTemplateElasticInferenceAccelerator
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplateelasticinferenceaccelerator.html | AWS::EC2::LaunchTemplate.LaunchTemplateElasticInferenceAccelerator}
 */
export interface EC2LaunchTemplateLaunchTemplateElasticInferenceAccelerator {
  Type?: string;
  Count?: number;
}
/**
 * Type definition for AWS::EC2::LaunchTemplate.LaunchTemplateTagSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatetagspecification.html | AWS::EC2::LaunchTemplate.LaunchTemplateTagSpecification}
 */
export interface EC2LaunchTemplateLaunchTemplateTagSpecification {
  ResourceType?: string;
  Tags?: Tag[];
}
/**
 * Type definition for AWS::EC2::LaunchTemplate.LicenseSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-licensespecification.html | AWS::EC2::LaunchTemplate.LicenseSpecification}
 */
export interface EC2LaunchTemplateLicenseSpecification {
  LicenseConfigurationArn?: string;
}
/**
 * Type definition for AWS::EC2::LaunchTemplate.MaintenanceOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-maintenanceoptions.html | AWS::EC2::LaunchTemplate.MaintenanceOptions}
 */
export interface EC2LaunchTemplateMaintenanceOptions {
  AutoRecovery?: string;
}
/**
 * Type definition for AWS::EC2::LaunchTemplate.MemoryGiBPerVCpu
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-memorygibpervcpu.html | AWS::EC2::LaunchTemplate.MemoryGiBPerVCpu}
 */
export interface EC2LaunchTemplateMemoryGiBPerVCpu {
  Min?: number;
  Max?: number;
}
/**
 * Type definition for AWS::EC2::LaunchTemplate.MemoryMiB
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-memorymib.html | AWS::EC2::LaunchTemplate.MemoryMiB}
 */
export interface EC2LaunchTemplateMemoryMiB {
  Min?: number;
  Max?: number;
}
/**
 * Type definition for AWS::EC2::LaunchTemplate.MetadataOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-metadataoptions.html | AWS::EC2::LaunchTemplate.MetadataOptions}
 */
export interface EC2LaunchTemplateMetadataOptions {
  HttpPutResponseHopLimit?: number;
  HttpTokens?: string;
  HttpProtocolIpv6?: string;
  InstanceMetadataTags?: string;
  HttpEndpoint?: string;
}
/**
 * Type definition for AWS::EC2::LaunchTemplate.Monitoring
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-monitoring.html | AWS::EC2::LaunchTemplate.Monitoring}
 */
export interface EC2LaunchTemplateMonitoring {
  Enabled?: boolean;
}
/**
 * Type definition for AWS::EC2::LaunchTemplate.NetworkBandwidthGbps
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-networkbandwidthgbps.html | AWS::EC2::LaunchTemplate.NetworkBandwidthGbps}
 */
export interface EC2LaunchTemplateNetworkBandwidthGbps {
  Min?: number;
  Max?: number;
}
/**
 * Type definition for AWS::EC2::LaunchTemplate.NetworkInterface
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-networkinterface.html | AWS::EC2::LaunchTemplate.NetworkInterface}
 */
export interface EC2LaunchTemplateNetworkInterface {
  Description?: string;
  PrivateIpAddress?: string;
  PrivateIpAddresses?: any[];
  SecondaryPrivateIpAddressCount?: number;
  Ipv6PrefixCount?: number;
  Ipv4Prefixes?: any[];
  DeviceIndex?: number;
  PrimaryIpv6?: boolean;
  Ipv4PrefixCount?: number;
  Ipv6Prefixes?: any[];
  SubnetId?: string;
  Ipv6Addresses?: any[];
  AssociatePublicIpAddress?: boolean;
  NetworkInterfaceId?: string;
  NetworkCardIndex?: number;
  InterfaceType?: string;
  AssociateCarrierIpAddress?: boolean;
  Ipv6AddressCount?: number;
  Groups?: any[];
  DeleteOnTermination?: boolean;
}
/**
 * Type definition for AWS::EC2::LaunchTemplate.NetworkInterfaceCount
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-networkinterfacecount.html | AWS::EC2::LaunchTemplate.NetworkInterfaceCount}
 */
export interface EC2LaunchTemplateNetworkInterfaceCount {
  Min?: number;
  Max?: number;
}
/**
 * Type definition for AWS::EC2::LaunchTemplate.Placement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-placement.html | AWS::EC2::LaunchTemplate.Placement}
 */
export interface EC2LaunchTemplatePlacement {
  GroupName?: string;
  Tenancy?: string;
  SpreadDomain?: string;
  PartitionNumber?: number;
  AvailabilityZone?: string;
  Affinity?: string;
  HostId?: string;
  HostResourceGroupArn?: string;
  GroupId?: string;
}
/**
 * Type definition for AWS::EC2::LaunchTemplate.PrivateDnsNameOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-privatednsnameoptions.html | AWS::EC2::LaunchTemplate.PrivateDnsNameOptions}
 */
export interface EC2LaunchTemplatePrivateDnsNameOptions {
  EnableResourceNameDnsARecord?: boolean;
  HostnameType?: string;
  EnableResourceNameDnsAAAARecord?: boolean;
}
/**
 * Type definition for AWS::EC2::LaunchTemplate.PrivateIpAdd
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-privateipadd.html | AWS::EC2::LaunchTemplate.PrivateIpAdd}
 */
export interface EC2LaunchTemplatePrivateIpAdd {
  PrivateIpAddress?: string;
  Primary?: boolean;
}
/**
 * Type definition for AWS::EC2::LaunchTemplate.SpotOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-spotoptions.html | AWS::EC2::LaunchTemplate.SpotOptions}
 */
export interface EC2LaunchTemplateSpotOptions {
  SpotInstanceType?: string;
  InstanceInterruptionBehavior?: string;
  MaxPrice?: string;
  BlockDurationMinutes?: number;
  ValidUntil?: string;
}
/**
 * Type definition for AWS::EC2::LaunchTemplate.TagSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-tagspecification.html | AWS::EC2::LaunchTemplate.TagSpecification}
 */
export interface EC2LaunchTemplateTagSpecification {
  ResourceType?: string;
  Tags?: Tag[];
}
/**
 * Type definition for AWS::EC2::LaunchTemplate.TotalLocalStorageGB
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-totallocalstoragegb.html | AWS::EC2::LaunchTemplate.TotalLocalStorageGB}
 */
export interface EC2LaunchTemplateTotalLocalStorageGB {
  Min?: number;
  Max?: number;
}
/**
 * Type definition for AWS::EC2::LaunchTemplate.VCpuCount
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-vcpucount.html | AWS::EC2::LaunchTemplate.VCpuCount}
 */
export interface EC2LaunchTemplateVCpuCount {
  Min?: number;
  Max?: number;
}
/**
 * Type definition for AWS::EC2::NetworkAclEntry.Icmp
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkaclentry-icmp.html | AWS::EC2::NetworkAclEntry.Icmp}
 */
export interface EC2NetworkAclEntryIcmp {
  Type?: number;
  Code?: number;
}
/**
 * Type definition for AWS::EC2::NetworkAclEntry.PortRange
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkaclentry-portrange.html | AWS::EC2::NetworkAclEntry.PortRange}
 */
export interface EC2NetworkAclEntryPortRange {
  From?: number;
  To?: number;
}
/**
 * Type definition for AWS::EC2::NetworkInsightsAccessScope.AccessScopePathRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsaccessscope-accessscopepathrequest.html | AWS::EC2::NetworkInsightsAccessScope.AccessScopePathRequest}
 */
export interface EC2NetworkInsightsAccessScopeAccessScopePathRequest {
  Destination?: EC2NetworkInsightsAccessScopePathStatementRequest;
  ThroughResources?: any[];
  Source?: EC2NetworkInsightsAccessScopePathStatementRequest;
}
/**
 * Type definition for AWS::EC2::NetworkInsightsAccessScope.PacketHeaderStatementRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsaccessscope-packetheaderstatementrequest.html | AWS::EC2::NetworkInsightsAccessScope.PacketHeaderStatementRequest}
 */
export interface EC2NetworkInsightsAccessScopePacketHeaderStatementRequest {
  Protocols?: any[];
  DestinationPorts?: any[];
  DestinationAddresses?: any[];
  DestinationPrefixLists?: any[];
  SourceAddresses?: any[];
  SourcePorts?: any[];
  SourcePrefixLists?: any[];
}
/**
 * Type definition for AWS::EC2::NetworkInsightsAccessScope.PathStatementRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsaccessscope-pathstatementrequest.html | AWS::EC2::NetworkInsightsAccessScope.PathStatementRequest}
 */
export interface EC2NetworkInsightsAccessScopePathStatementRequest {
  ResourceStatement?: EC2NetworkInsightsAccessScopeResourceStatementRequest;
  PacketHeaderStatement?: EC2NetworkInsightsAccessScopePacketHeaderStatementRequest;
}
/**
 * Type definition for AWS::EC2::NetworkInsightsAccessScope.ResourceStatementRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsaccessscope-resourcestatementrequest.html | AWS::EC2::NetworkInsightsAccessScope.ResourceStatementRequest}
 */
export interface EC2NetworkInsightsAccessScopeResourceStatementRequest {
  ResourceTypes?: any[];
  Resources?: any[];
}
/**
 * Type definition for AWS::EC2::NetworkInsightsAccessScope.ThroughResourcesStatementRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsaccessscope-throughresourcesstatementrequest.html | AWS::EC2::NetworkInsightsAccessScope.ThroughResourcesStatementRequest}
 */
export interface EC2NetworkInsightsAccessScopeThroughResourcesStatementRequest {
  ResourceStatement?: EC2NetworkInsightsAccessScopeResourceStatementRequest;
}
/**
 * Type definition for AWS::EC2::NetworkInsightsAnalysis.AdditionalDetail
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-additionaldetail.html | AWS::EC2::NetworkInsightsAnalysis.AdditionalDetail}
 */
export interface EC2NetworkInsightsAnalysisAdditionalDetail {
  ServiceName?: string;
  AdditionalDetailType?: string;
  LoadBalancers?: any[];
  Component?: EC2NetworkInsightsAnalysisAnalysisComponent;
}
/**
 * Type definition for AWS::EC2::NetworkInsightsAnalysis.AlternatePathHint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-alternatepathhint.html | AWS::EC2::NetworkInsightsAnalysis.AlternatePathHint}
 */
export interface EC2NetworkInsightsAnalysisAlternatePathHint {
  ComponentArn?: string;
  ComponentId?: string;
}
/**
 * Type definition for AWS::EC2::NetworkInsightsAnalysis.AnalysisAclRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-analysisaclrule.html | AWS::EC2::NetworkInsightsAnalysis.AnalysisAclRule}
 */
export interface EC2NetworkInsightsAnalysisAnalysisAclRule {
  PortRange?: EC2NetworkInsightsAnalysisPortRange;
  Cidr?: string;
  RuleAction?: string;
  Egress?: boolean;
  RuleNumber?: number;
  Protocol?: string;
}
/**
 * Type definition for AWS::EC2::NetworkInsightsAnalysis.AnalysisComponent
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-analysiscomponent.html | AWS::EC2::NetworkInsightsAnalysis.AnalysisComponent}
 */
export interface EC2NetworkInsightsAnalysisAnalysisComponent {
  Id?: string;
  Arn?: string;
}
/**
 * Type definition for AWS::EC2::NetworkInsightsAnalysis.AnalysisLoadBalancerListener
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-analysisloadbalancerlistener.html | AWS::EC2::NetworkInsightsAnalysis.AnalysisLoadBalancerListener}
 */
export interface EC2NetworkInsightsAnalysisAnalysisLoadBalancerListener {
  InstancePort?: number;
  LoadBalancerPort?: number;
}
/**
 * Type definition for AWS::EC2::NetworkInsightsAnalysis.AnalysisLoadBalancerTarget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-analysisloadbalancertarget.html | AWS::EC2::NetworkInsightsAnalysis.AnalysisLoadBalancerTarget}
 */
export interface EC2NetworkInsightsAnalysisAnalysisLoadBalancerTarget {
  Address?: string;
  Instance?: EC2NetworkInsightsAnalysisAnalysisComponent;
  Port?: number;
  AvailabilityZone?: string;
}
/**
 * Type definition for AWS::EC2::NetworkInsightsAnalysis.AnalysisPacketHeader
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-analysispacketheader.html | AWS::EC2::NetworkInsightsAnalysis.AnalysisPacketHeader}
 */
export interface EC2NetworkInsightsAnalysisAnalysisPacketHeader {
  DestinationPortRanges?: any[];
  SourcePortRanges?: any[];
  DestinationAddresses?: any[];
  Protocol?: string;
  SourceAddresses?: any[];
}
/**
 * Type definition for AWS::EC2::NetworkInsightsAnalysis.AnalysisRouteTableRoute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-analysisroutetableroute.html | AWS::EC2::NetworkInsightsAnalysis.AnalysisRouteTableRoute}
 */
export interface EC2NetworkInsightsAnalysisAnalysisRouteTableRoute {
  Origin?: string;
  destinationPrefixListId?: string;
  TransitGatewayId?: string;
  VpcPeeringConnectionId?: string;
  instanceId?: string;
  State?: string;
  egressOnlyInternetGatewayId?: string;
  destinationCidr?: string;
  NetworkInterfaceId?: string;
  NatGatewayId?: string;
  gatewayId?: string;
}
/**
 * Type definition for AWS::EC2::NetworkInsightsAnalysis.AnalysisSecurityGroupRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-analysissecuritygrouprule.html | AWS::EC2::NetworkInsightsAnalysis.AnalysisSecurityGroupRule}
 */
export interface EC2NetworkInsightsAnalysisAnalysisSecurityGroupRule {
  PortRange?: EC2NetworkInsightsAnalysisPortRange;
  Cidr?: string;
  PrefixListId?: string;
  SecurityGroupId?: string;
  Protocol?: string;
  Direction?: string;
}
/**
 * Type definition for AWS::EC2::NetworkInsightsAnalysis.Explanation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-explanation.html | AWS::EC2::NetworkInsightsAnalysis.Explanation}
 */
export interface EC2NetworkInsightsAnalysisExplanation {
  VpnGateway?: EC2NetworkInsightsAnalysisAnalysisComponent;
  PacketField?: string;
  TransitGatewayAttachment?: EC2NetworkInsightsAnalysisAnalysisComponent;
  Protocols?: any[];
  IngressRouteTable?: EC2NetworkInsightsAnalysisAnalysisComponent;
  ClassicLoadBalancerListener?: EC2NetworkInsightsAnalysisAnalysisLoadBalancerListener;
  VpcPeeringConnection?: EC2NetworkInsightsAnalysisAnalysisComponent;
  Address?: string;
  Port?: number;
  Addresses?: any[];
  ElasticLoadBalancerListener?: EC2NetworkInsightsAnalysisAnalysisComponent;
  TransitGatewayRouteTable?: EC2NetworkInsightsAnalysisAnalysisComponent;
  ExplanationCode?: string;
  InternetGateway?: EC2NetworkInsightsAnalysisAnalysisComponent;
  SourceVpc?: EC2NetworkInsightsAnalysisAnalysisComponent;
  AttachedTo?: EC2NetworkInsightsAnalysisAnalysisComponent;
  PrefixList?: EC2NetworkInsightsAnalysisAnalysisComponent;
  TransitGatewayRouteTableRoute?: EC2NetworkInsightsAnalysisTransitGatewayRouteTableRoute;
  ComponentRegion?: string;
  LoadBalancerTargetGroup?: EC2NetworkInsightsAnalysisAnalysisComponent;
  NetworkInterface?: EC2NetworkInsightsAnalysisAnalysisComponent;
  CustomerGateway?: EC2NetworkInsightsAnalysisAnalysisComponent;
  DestinationVpc?: EC2NetworkInsightsAnalysisAnalysisComponent;
  SecurityGroup?: EC2NetworkInsightsAnalysisAnalysisComponent;
  TransitGateway?: EC2NetworkInsightsAnalysisAnalysisComponent;
  RouteTable?: EC2NetworkInsightsAnalysisAnalysisComponent;
  State?: string;
  LoadBalancerListenerPort?: number;
  vpcEndpoint?: EC2NetworkInsightsAnalysisAnalysisComponent;
  Subnet?: EC2NetworkInsightsAnalysisAnalysisComponent;
  Cidrs?: any[];
  Destination?: EC2NetworkInsightsAnalysisAnalysisComponent;
  SecurityGroups?: any[];
  ComponentAccount?: string;
  VpnConnection?: EC2NetworkInsightsAnalysisAnalysisComponent;
  Vpc?: EC2NetworkInsightsAnalysisAnalysisComponent;
  NatGateway?: EC2NetworkInsightsAnalysisAnalysisComponent;
  Direction?: string;
  LoadBalancerTargetPort?: number;
  LoadBalancerTarget?: EC2NetworkInsightsAnalysisAnalysisLoadBalancerTarget;
  LoadBalancerTargetGroups?: any[];
  Component?: EC2NetworkInsightsAnalysisAnalysisComponent;
  MissingComponent?: string;
  RouteTableRoute?: EC2NetworkInsightsAnalysisAnalysisRouteTableRoute;
  AvailabilityZones?: any[];
  PortRanges?: any[];
  Acl?: EC2NetworkInsightsAnalysisAnalysisComponent;
  SecurityGroupRule?: EC2NetworkInsightsAnalysisAnalysisSecurityGroupRule;
  SubnetRouteTable?: EC2NetworkInsightsAnalysisAnalysisComponent;
  LoadBalancerArn?: string;
  AclRule?: EC2NetworkInsightsAnalysisAnalysisAclRule;
}
/**
 * Type definition for AWS::EC2::NetworkInsightsAnalysis.PathComponent
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-pathcomponent.html | AWS::EC2::NetworkInsightsAnalysis.PathComponent}
 */
export interface EC2NetworkInsightsAnalysisPathComponent {
  AdditionalDetails?: any[];
  InboundHeader?: EC2NetworkInsightsAnalysisAnalysisPacketHeader;
  Vpc?: EC2NetworkInsightsAnalysisAnalysisComponent;
  DestinationVpc?: EC2NetworkInsightsAnalysisAnalysisComponent;
  SecurityGroupRule?: EC2NetworkInsightsAnalysisAnalysisSecurityGroupRule;
  TransitGateway?: EC2NetworkInsightsAnalysisAnalysisComponent;
  ElasticLoadBalancerListener?: EC2NetworkInsightsAnalysisAnalysisComponent;
  Explanations?: any[];
  ServiceName?: string;
  SequenceNumber?: number;
  SourceVpc?: EC2NetworkInsightsAnalysisAnalysisComponent;
  OutboundHeader?: EC2NetworkInsightsAnalysisAnalysisPacketHeader;
  AclRule?: EC2NetworkInsightsAnalysisAnalysisAclRule;
  TransitGatewayRouteTableRoute?: EC2NetworkInsightsAnalysisTransitGatewayRouteTableRoute;
  Component?: EC2NetworkInsightsAnalysisAnalysisComponent;
  Subnet?: EC2NetworkInsightsAnalysisAnalysisComponent;
  RouteTableRoute?: EC2NetworkInsightsAnalysisAnalysisRouteTableRoute;
}
/**
 * Type definition for AWS::EC2::NetworkInsightsAnalysis.PortRange
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-portrange.html | AWS::EC2::NetworkInsightsAnalysis.PortRange}
 */
export interface EC2NetworkInsightsAnalysisPortRange {
  From?: number;
  To?: number;
}
/**
 * Type definition for AWS::EC2::NetworkInsightsAnalysis.TransitGatewayRouteTableRoute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-transitgatewayroutetableroute.html | AWS::EC2::NetworkInsightsAnalysis.TransitGatewayRouteTableRoute}
 */
export interface EC2NetworkInsightsAnalysisTransitGatewayRouteTableRoute {
  PrefixListId?: string;
  ResourceId?: string;
  State?: string;
  ResourceType?: string;
  RouteOrigin?: string;
  DestinationCidr?: string;
  AttachmentId?: string;
}
/**
 * Type definition for AWS::EC2::NetworkInsightsPath.FilterPortRange
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightspath-filterportrange.html | AWS::EC2::NetworkInsightsPath.FilterPortRange}
 */
export interface EC2NetworkInsightsPathFilterPortRange {
  FromPort?: number;
  ToPort?: number;
}
/**
 * Type definition for AWS::EC2::NetworkInsightsPath.PathFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightspath-pathfilter.html | AWS::EC2::NetworkInsightsPath.PathFilter}
 */
export interface EC2NetworkInsightsPathPathFilter {
  SourceAddress?: string;
  DestinationPortRange?: EC2NetworkInsightsPathFilterPortRange;
  SourcePortRange?: EC2NetworkInsightsPathFilterPortRange;
  DestinationAddress?: string;
}
/**
 * Type definition for AWS::EC2::NetworkInterface.InstanceIpv6Address
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinterface-instanceipv6address.html | AWS::EC2::NetworkInterface.InstanceIpv6Address}
 */
export interface EC2NetworkInterfaceInstanceIpv6Address {
  Ipv6Address: string;
}
/**
 * Type definition for AWS::EC2::NetworkInterface.Ipv4PrefixSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinterface-ipv4prefixspecification.html | AWS::EC2::NetworkInterface.Ipv4PrefixSpecification}
 */
export interface EC2NetworkInterfaceIpv4PrefixSpecification {
  Ipv4Prefix: string;
}
/**
 * Type definition for AWS::EC2::NetworkInterface.Ipv6PrefixSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinterface-ipv6prefixspecification.html | AWS::EC2::NetworkInterface.Ipv6PrefixSpecification}
 */
export interface EC2NetworkInterfaceIpv6PrefixSpecification {
  Ipv6Prefix: string;
}
/**
 * Type definition for AWS::EC2::NetworkInterface.PrivateIpAddressSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinterface-privateipaddressspecification.html | AWS::EC2::NetworkInterface.PrivateIpAddressSpecification}
 */
export interface EC2NetworkInterfacePrivateIpAddressSpecification {
  PrivateIpAddress: string;
  Primary: boolean;
}
/**
 * Type definition for AWS::EC2::PrefixList.Entry
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-prefixlist-entry.html | AWS::EC2::PrefixList.Entry}
 */
export interface EC2PrefixListEntry {
  Description?: string;
  Cidr: string;
}
/**
 * Type definition for AWS::EC2::SecurityGroup.Egress
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-security-group-rule.html | AWS::EC2::SecurityGroup.Egress}
 */
export interface EC2SecurityGroupEgress {
  CidrIp?: string;
  CidrIpv6?: string;
  Description?: string;
  DestinationPrefixListId?: string;
  DestinationSecurityGroupId?: string;
  FromPort?: number;
  IpProtocol: string;
  ToPort?: number;
}
/**
 * Type definition for AWS::EC2::SecurityGroup.Ingress
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-security-group-rule.html | AWS::EC2::SecurityGroup.Ingress}
 */
export interface EC2SecurityGroupIngress {
  CidrIp?: string;
  CidrIpv6?: string;
  Description?: string;
  FromPort?: number;
  IpProtocol: string;
  SourcePrefixListId?: string;
  SourceSecurityGroupId?: string;
  SourceSecurityGroupName?: string;
  SourceSecurityGroupOwnerId?: string;
  ToPort?: number;
}
/**
 * Type definition for AWS::EC2::SpotFleet.AcceleratorCountRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-acceleratorcountrequest.html | AWS::EC2::SpotFleet.AcceleratorCountRequest}
 */
export interface EC2SpotFleetAcceleratorCountRequest {
  Min?: number;
  Max?: number;
}
/**
 * Type definition for AWS::EC2::SpotFleet.AcceleratorTotalMemoryMiBRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-acceleratortotalmemorymibrequest.html | AWS::EC2::SpotFleet.AcceleratorTotalMemoryMiBRequest}
 */
export interface EC2SpotFleetAcceleratorTotalMemoryMiBRequest {
  Min?: number;
  Max?: number;
}
/**
 * Type definition for AWS::EC2::SpotFleet.BaselineEbsBandwidthMbpsRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-baselineebsbandwidthmbpsrequest.html | AWS::EC2::SpotFleet.BaselineEbsBandwidthMbpsRequest}
 */
export interface EC2SpotFleetBaselineEbsBandwidthMbpsRequest {
  Min?: number;
  Max?: number;
}
/**
 * Type definition for AWS::EC2::SpotFleet.BlockDeviceMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-blockdevicemapping.html | AWS::EC2::SpotFleet.BlockDeviceMapping}
 */
export interface EC2SpotFleetBlockDeviceMapping {
  Ebs?: EC2SpotFleetEbsBlockDevice;
  NoDevice?: string;
  VirtualName?: string;
  DeviceName: string;
}
/**
 * Type definition for AWS::EC2::SpotFleet.ClassicLoadBalancer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-classicloadbalancer.html | AWS::EC2::SpotFleet.ClassicLoadBalancer}
 */
export interface EC2SpotFleetClassicLoadBalancer {
  Name: string;
}
/**
 * Type definition for AWS::EC2::SpotFleet.ClassicLoadBalancersConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-classicloadbalancersconfig.html | AWS::EC2::SpotFleet.ClassicLoadBalancersConfig}
 */
export interface EC2SpotFleetClassicLoadBalancersConfig {
  ClassicLoadBalancers: any[];
}
/**
 * Type definition for AWS::EC2::SpotFleet.EbsBlockDevice
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-ebsblockdevice.html | AWS::EC2::SpotFleet.EbsBlockDevice}
 */
export interface EC2SpotFleetEbsBlockDevice {
  SnapshotId?: string;
  VolumeType?: string;
  Encrypted?: boolean;
  Iops?: number;
  VolumeSize?: number;
  DeleteOnTermination?: boolean;
}
/**
 * Type definition for AWS::EC2::SpotFleet.FleetLaunchTemplateSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-fleetlaunchtemplatespecification.html | AWS::EC2::SpotFleet.FleetLaunchTemplateSpecification}
 */
export interface EC2SpotFleetFleetLaunchTemplateSpecification {
  LaunchTemplateName?: string;
  Version: string;
  LaunchTemplateId?: string;
}
/**
 * Type definition for AWS::EC2::SpotFleet.GroupIdentifier
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-groupidentifier.html | AWS::EC2::SpotFleet.GroupIdentifier}
 */
export interface EC2SpotFleetGroupIdentifier {
  GroupId: string;
}
/**
 * Type definition for AWS::EC2::SpotFleet.IamInstanceProfileSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-iaminstanceprofilespecification.html | AWS::EC2::SpotFleet.IamInstanceProfileSpecification}
 */
export interface EC2SpotFleetIamInstanceProfileSpecification {
  Arn?: string;
}
/**
 * Type definition for AWS::EC2::SpotFleet.InstanceIpv6Address
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-instanceipv6address.html | AWS::EC2::SpotFleet.InstanceIpv6Address}
 */
export interface EC2SpotFleetInstanceIpv6Address {
  Ipv6Address: string;
}
/**
 * Type definition for AWS::EC2::SpotFleet.InstanceNetworkInterfaceSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-instancenetworkinterfacespecification.html | AWS::EC2::SpotFleet.InstanceNetworkInterfaceSpecification}
 */
export interface EC2SpotFleetInstanceNetworkInterfaceSpecification {
  Description?: string;
  PrivateIpAddresses?: any[];
  SecondaryPrivateIpAddressCount?: number;
  DeviceIndex?: number;
  Groups?: any[];
  Ipv6AddressCount?: number;
  Ipv6Addresses?: any[];
  SubnetId?: string;
  AssociatePublicIpAddress?: boolean;
  NetworkInterfaceId?: string;
  DeleteOnTermination?: boolean;
}
/**
 * Type definition for AWS::EC2::SpotFleet.InstanceRequirementsRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-instancerequirementsrequest.html | AWS::EC2::SpotFleet.InstanceRequirementsRequest}
 */
export interface EC2SpotFleetInstanceRequirementsRequest {
  LocalStorageTypes?: any[];
  InstanceGenerations?: any[];
  NetworkInterfaceCount?: EC2SpotFleetNetworkInterfaceCountRequest;
  MemoryGiBPerVCpu?: EC2SpotFleetMemoryGiBPerVCpuRequest;
  AcceleratorTypes?: any[];
  VCpuCount?: EC2SpotFleetVCpuCountRangeRequest;
  ExcludedInstanceTypes?: any[];
  AcceleratorManufacturers?: any[];
  AllowedInstanceTypes?: any[];
  LocalStorage?: string;
  CpuManufacturers?: any[];
  NetworkBandwidthGbps?: EC2SpotFleetNetworkBandwidthGbpsRequest;
  AcceleratorCount?: EC2SpotFleetAcceleratorCountRequest;
  BareMetal?: string;
  RequireHibernateSupport?: boolean;
  SpotMaxPricePercentageOverLowestPrice?: number;
  BaselineEbsBandwidthMbps?: EC2SpotFleetBaselineEbsBandwidthMbpsRequest;
  OnDemandMaxPricePercentageOverLowestPrice?: number;
  AcceleratorNames?: any[];
  AcceleratorTotalMemoryMiB?: EC2SpotFleetAcceleratorTotalMemoryMiBRequest;
  BurstablePerformance?: string;
  MemoryMiB?: EC2SpotFleetMemoryMiBRequest;
  TotalLocalStorageGB?: EC2SpotFleetTotalLocalStorageGBRequest;
}
/**
 * Type definition for AWS::EC2::SpotFleet.LaunchTemplateConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-launchtemplateconfig.html | AWS::EC2::SpotFleet.LaunchTemplateConfig}
 */
export interface EC2SpotFleetLaunchTemplateConfig {
  LaunchTemplateSpecification?: EC2SpotFleetFleetLaunchTemplateSpecification;
  Overrides?: any[];
}
/**
 * Type definition for AWS::EC2::SpotFleet.LaunchTemplateOverrides
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-launchtemplateoverrides.html | AWS::EC2::SpotFleet.LaunchTemplateOverrides}
 */
export interface EC2SpotFleetLaunchTemplateOverrides {
  SpotPrice?: string;
  WeightedCapacity?: number;
  Priority?: number;
  AvailabilityZone?: string;
  SubnetId?: string;
  InstanceRequirements?: EC2SpotFleetInstanceRequirementsRequest;
  InstanceType?: string;
}
/**
 * Type definition for AWS::EC2::SpotFleet.LoadBalancersConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-loadbalancersconfig.html | AWS::EC2::SpotFleet.LoadBalancersConfig}
 */
export interface EC2SpotFleetLoadBalancersConfig {
  ClassicLoadBalancersConfig?: EC2SpotFleetClassicLoadBalancersConfig;
  TargetGroupsConfig?: EC2SpotFleetTargetGroupsConfig;
}
/**
 * Type definition for AWS::EC2::SpotFleet.MemoryGiBPerVCpuRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-memorygibpervcpurequest.html | AWS::EC2::SpotFleet.MemoryGiBPerVCpuRequest}
 */
export interface EC2SpotFleetMemoryGiBPerVCpuRequest {
  Min?: number;
  Max?: number;
}
/**
 * Type definition for AWS::EC2::SpotFleet.MemoryMiBRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-memorymibrequest.html | AWS::EC2::SpotFleet.MemoryMiBRequest}
 */
export interface EC2SpotFleetMemoryMiBRequest {
  Min?: number;
  Max?: number;
}
/**
 * Type definition for AWS::EC2::SpotFleet.NetworkBandwidthGbpsRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-networkbandwidthgbpsrequest.html | AWS::EC2::SpotFleet.NetworkBandwidthGbpsRequest}
 */
export interface EC2SpotFleetNetworkBandwidthGbpsRequest {
  Min?: number;
  Max?: number;
}
/**
 * Type definition for AWS::EC2::SpotFleet.NetworkInterfaceCountRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-networkinterfacecountrequest.html | AWS::EC2::SpotFleet.NetworkInterfaceCountRequest}
 */
export interface EC2SpotFleetNetworkInterfaceCountRequest {
  Min?: number;
  Max?: number;
}
/**
 * Type definition for AWS::EC2::SpotFleet.PrivateIpAddressSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-privateipaddressspecification.html | AWS::EC2::SpotFleet.PrivateIpAddressSpecification}
 */
export interface EC2SpotFleetPrivateIpAddressSpecification {
  PrivateIpAddress: string;
  Primary?: boolean;
}
/**
 * Type definition for AWS::EC2::SpotFleet.SpotCapacityRebalance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-spotcapacityrebalance.html | AWS::EC2::SpotFleet.SpotCapacityRebalance}
 */
export interface EC2SpotFleetSpotCapacityRebalance {
  TerminationDelay?: number;
  ReplacementStrategy?: string;
}
/**
 * Type definition for AWS::EC2::SpotFleet.SpotFleetLaunchSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-spotfleetlaunchspecification.html | AWS::EC2::SpotFleet.SpotFleetLaunchSpecification}
 */
export interface EC2SpotFleetSpotFleetLaunchSpecification {
  SecurityGroups?: any[];
  TagSpecifications?: any[];
  UserData?: string;
  BlockDeviceMappings?: any[];
  IamInstanceProfile?: EC2SpotFleetIamInstanceProfileSpecification;
  KernelId?: string;
  SubnetId?: string;
  EbsOptimized?: boolean;
  KeyName?: string;
  RamdiskId?: string;
  SpotPrice?: string;
  WeightedCapacity?: number;
  Placement?: EC2SpotFleetSpotPlacement;
  NetworkInterfaces?: any[];
  ImageId: string;
  InstanceRequirements?: EC2SpotFleetInstanceRequirementsRequest;
  InstanceType?: string;
  Monitoring?: EC2SpotFleetSpotFleetMonitoring;
}
/**
 * Type definition for AWS::EC2::SpotFleet.SpotFleetMonitoring
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-spotfleetmonitoring.html | AWS::EC2::SpotFleet.SpotFleetMonitoring}
 */
export interface EC2SpotFleetSpotFleetMonitoring {
  Enabled?: boolean;
}
/**
 * Type definition for AWS::EC2::SpotFleet.SpotFleetRequestConfigData
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-spotfleetrequestconfigdata.html | AWS::EC2::SpotFleet.SpotFleetRequestConfigData}
 */
export interface EC2SpotFleetSpotFleetRequestConfigData {
  Context?: string;
  SpotMaxTotalPrice?: string;
  ExcessCapacityTerminationPolicy?: string;
  TagSpecifications?: any[];
  InstancePoolsToUseCount?: number;
  LaunchTemplateConfigs?: any[];
  TargetCapacityUnitType?: string;
  IamFleetRole: string;
  SpotMaintenanceStrategies?: EC2SpotFleetSpotMaintenanceStrategies;
  TerminateInstancesWithExpiration?: boolean;
  ValidUntil?: string;
  OnDemandMaxTotalPrice?: string;
  OnDemandAllocationStrategy?: string;
  SpotPrice?: string;
  AllocationStrategy?: string;
  OnDemandTargetCapacity?: number;
  Type?: string;
  LaunchSpecifications?: any[];
  InstanceInterruptionBehavior?: string;
  LoadBalancersConfig?: EC2SpotFleetLoadBalancersConfig;
  ValidFrom?: string;
  ReplaceUnhealthyInstances?: boolean;
  TargetCapacity: number;
}
/**
 * Type definition for AWS::EC2::SpotFleet.SpotFleetTagSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-spotfleettagspecification.html | AWS::EC2::SpotFleet.SpotFleetTagSpecification}
 */
export interface EC2SpotFleetSpotFleetTagSpecification {
  ResourceType?: string;
  Tags?: Tag[];
}
/**
 * Type definition for AWS::EC2::SpotFleet.SpotMaintenanceStrategies
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-spotmaintenancestrategies.html | AWS::EC2::SpotFleet.SpotMaintenanceStrategies}
 */
export interface EC2SpotFleetSpotMaintenanceStrategies {
  CapacityRebalance?: EC2SpotFleetSpotCapacityRebalance;
}
/**
 * Type definition for AWS::EC2::SpotFleet.SpotPlacement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-spotplacement.html | AWS::EC2::SpotFleet.SpotPlacement}
 */
export interface EC2SpotFleetSpotPlacement {
  GroupName?: string;
  Tenancy?: string;
  AvailabilityZone?: string;
}
/**
 * Type definition for AWS::EC2::SpotFleet.TargetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-targetgroup.html | AWS::EC2::SpotFleet.TargetGroup}
 */
export interface EC2SpotFleetTargetGroup {
  Arn: string;
}
/**
 * Type definition for AWS::EC2::SpotFleet.TargetGroupsConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-targetgroupsconfig.html | AWS::EC2::SpotFleet.TargetGroupsConfig}
 */
export interface EC2SpotFleetTargetGroupsConfig {
  TargetGroups: any[];
}
/**
 * Type definition for AWS::EC2::SpotFleet.TotalLocalStorageGBRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-totallocalstoragegbrequest.html | AWS::EC2::SpotFleet.TotalLocalStorageGBRequest}
 */
export interface EC2SpotFleetTotalLocalStorageGBRequest {
  Min?: number;
  Max?: number;
}
/**
 * Type definition for AWS::EC2::SpotFleet.VCpuCountRangeRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-vcpucountrangerequest.html | AWS::EC2::SpotFleet.VCpuCountRangeRequest}
 */
export interface EC2SpotFleetVCpuCountRangeRequest {
  Min?: number;
  Max?: number;
}
/**
 * Type definition for AWS::EC2::Subnet.PrivateDnsNameOptionsOnLaunch
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-subnet-privatednsnameoptionsonlaunch.html | AWS::EC2::Subnet.PrivateDnsNameOptionsOnLaunch}
 */
export interface EC2SubnetPrivateDnsNameOptionsOnLaunch {
  EnableResourceNameDnsARecord?: boolean;
  HostnameType?: string;
  EnableResourceNameDnsAAAARecord?: boolean;
}
/**
 * Type definition for AWS::EC2::TrafficMirrorFilterRule.TrafficMirrorPortRange
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-trafficmirrorfilterrule-trafficmirrorportrange.html | AWS::EC2::TrafficMirrorFilterRule.TrafficMirrorPortRange}
 */
export interface EC2TrafficMirrorFilterRuleTrafficMirrorPortRange {
  FromPort: number;
  ToPort: number;
}
/**
 * Type definition for AWS::EC2::TransitGatewayAttachment.Options
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-transitgatewayattachment-options.html | AWS::EC2::TransitGatewayAttachment.Options}
 */
export interface EC2TransitGatewayAttachmentOptions {
  Ipv6Support?: string;
  ApplianceModeSupport?: string;
  DnsSupport?: string;
}
/**
 * Type definition for AWS::EC2::TransitGatewayConnect.TransitGatewayConnectOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-transitgatewayconnect-transitgatewayconnectoptions.html | AWS::EC2::TransitGatewayConnect.TransitGatewayConnectOptions}
 */
export interface EC2TransitGatewayConnectTransitGatewayConnectOptions {
  Protocol?: string;
}
/**
 * Type definition for AWS::EC2::TransitGatewayMulticastDomain.Options
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-transitgatewaymulticastdomain-options.html | AWS::EC2::TransitGatewayMulticastDomain.Options}
 */
export interface EC2TransitGatewayMulticastDomainOptions {
  StaticSourcesSupport?: string;
  AutoAcceptSharedAssociations?: string;
  Igmpv2Support?: string;
}
/**
 * Type definition for AWS::EC2::TransitGatewayPeeringAttachment.PeeringAttachmentStatus
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-transitgatewaypeeringattachment-peeringattachmentstatus.html | AWS::EC2::TransitGatewayPeeringAttachment.PeeringAttachmentStatus}
 */
export interface EC2TransitGatewayPeeringAttachmentPeeringAttachmentStatus {
  Message?: string;
  Code?: string;
}
/**
 * Type definition for AWS::EC2::TransitGatewayVpcAttachment.Options
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-transitgatewayvpcattachment-options.html | AWS::EC2::TransitGatewayVpcAttachment.Options}
 */
export interface EC2TransitGatewayVpcAttachmentOptions {
  Ipv6Support?: string;
  ApplianceModeSupport?: string;
  DnsSupport?: string;
}
/**
 * Type definition for AWS::EC2::VPNConnection.VpnTunnelOptionsSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-vpnconnection-vpntunneloptionsspecification.html | AWS::EC2::VPNConnection.VpnTunnelOptionsSpecification}
 */
export interface EC2VPNConnectionVpnTunnelOptionsSpecification {
  PreSharedKey?: string;
  TunnelInsideCidr?: string;
}
/**
 * Type definition for AWS::EC2::VerifiedAccessEndpoint.LoadBalancerOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-verifiedaccessendpoint-loadbalanceroptions.html | AWS::EC2::VerifiedAccessEndpoint.LoadBalancerOptions}
 */
export interface EC2VerifiedAccessEndpointLoadBalancerOptions {
  LoadBalancerArn?: string;
  Port?: number;
  Protocol?: string;
  SubnetIds?: any[];
}
/**
 * Type definition for AWS::EC2::VerifiedAccessEndpoint.NetworkInterfaceOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-verifiedaccessendpoint-networkinterfaceoptions.html | AWS::EC2::VerifiedAccessEndpoint.NetworkInterfaceOptions}
 */
export interface EC2VerifiedAccessEndpointNetworkInterfaceOptions {
  Port?: number;
  NetworkInterfaceId?: string;
  Protocol?: string;
}
/**
 * Type definition for AWS::EC2::VerifiedAccessEndpoint.SseSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-verifiedaccessendpoint-ssespecification.html | AWS::EC2::VerifiedAccessEndpoint.SseSpecification}
 */
export interface EC2VerifiedAccessEndpointSseSpecification {
  CustomerManagedKeyEnabled?: boolean;
  KmsKeyArn?: string;
}
/**
 * Type definition for AWS::EC2::VerifiedAccessGroup.SseSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-verifiedaccessgroup-ssespecification.html | AWS::EC2::VerifiedAccessGroup.SseSpecification}
 */
export interface EC2VerifiedAccessGroupSseSpecification {
  CustomerManagedKeyEnabled?: boolean;
  KmsKeyArn?: string;
}
/**
 * Type definition for AWS::EC2::VerifiedAccessInstance.CloudWatchLogs
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-verifiedaccessinstance-cloudwatchlogs.html | AWS::EC2::VerifiedAccessInstance.CloudWatchLogs}
 */
export interface EC2VerifiedAccessInstanceCloudWatchLogs {
  LogGroup?: string;
  Enabled?: boolean;
}
/**
 * Type definition for AWS::EC2::VerifiedAccessInstance.KinesisDataFirehose
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-verifiedaccessinstance-kinesisdatafirehose.html | AWS::EC2::VerifiedAccessInstance.KinesisDataFirehose}
 */
export interface EC2VerifiedAccessInstanceKinesisDataFirehose {
  DeliveryStream?: string;
  Enabled?: boolean;
}
/**
 * Type definition for AWS::EC2::VerifiedAccessInstance.S3
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-verifiedaccessinstance-s3.html | AWS::EC2::VerifiedAccessInstance.S3}
 */
export interface EC2VerifiedAccessInstanceS3 {
  BucketName?: string;
  Enabled?: boolean;
  Prefix?: string;
  BucketOwner?: string;
}
/**
 * Type definition for AWS::EC2::VerifiedAccessInstance.VerifiedAccessLogs
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-verifiedaccessinstance-verifiedaccesslogs.html | AWS::EC2::VerifiedAccessInstance.VerifiedAccessLogs}
 */
export interface EC2VerifiedAccessInstanceVerifiedAccessLogs {
  S3?: EC2VerifiedAccessInstanceS3;
  LogVersion?: string;
  KinesisDataFirehose?: EC2VerifiedAccessInstanceKinesisDataFirehose;
  CloudWatchLogs?: EC2VerifiedAccessInstanceCloudWatchLogs;
  IncludeTrustContext?: boolean;
}
/**
 * Type definition for AWS::EC2::VerifiedAccessInstance.VerifiedAccessTrustProvider
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-verifiedaccessinstance-verifiedaccesstrustprovider.html | AWS::EC2::VerifiedAccessInstance.VerifiedAccessTrustProvider}
 */
export interface EC2VerifiedAccessInstanceVerifiedAccessTrustProvider {
  Description?: string;
  DeviceTrustProviderType?: string;
  VerifiedAccessTrustProviderId?: string;
  TrustProviderType?: string;
  UserTrustProviderType?: string;
}
/**
 * Type definition for AWS::EC2::VerifiedAccessTrustProvider.DeviceOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-verifiedaccesstrustprovider-deviceoptions.html | AWS::EC2::VerifiedAccessTrustProvider.DeviceOptions}
 */
export interface EC2VerifiedAccessTrustProviderDeviceOptions {
  TenantId?: string;
}
/**
 * Type definition for AWS::EC2::VerifiedAccessTrustProvider.OidcOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-verifiedaccesstrustprovider-oidcoptions.html | AWS::EC2::VerifiedAccessTrustProvider.OidcOptions}
 */
export interface EC2VerifiedAccessTrustProviderOidcOptions {
  TokenEndpoint?: string;
  Scope?: string;
  Issuer?: string;
  ClientSecret?: string;
  UserInfoEndpoint?: string;
  ClientId?: string;
  AuthorizationEndpoint?: string;
}
/**
 * Type definition for AWS::EC2::VerifiedAccessTrustProvider.SseSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-verifiedaccesstrustprovider-ssespecification.html | AWS::EC2::VerifiedAccessTrustProvider.SseSpecification}
 */
export interface EC2VerifiedAccessTrustProviderSseSpecification {
  CustomerManagedKeyEnabled?: boolean;
  KmsKeyArn?: string;
}
/**
 * Type definition for AWS::EC2::CapacityReservation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-capacityreservation.html | AWS::EC2::CapacityReservation}
 */
export interface EC2CapacityReservationProps {
  Tenancy?: string;
  EndDateType?: string;
  TagSpecifications?: any[];
  AvailabilityZone: string;
  EndDate?: string;
  EbsOptimized?: boolean;
  OutPostArn?: string;
  InstanceCount: number;
  PlacementGroupArn?: string;
  InstancePlatform: string;
  InstanceType: string;
  EphemeralStorage?: boolean;
  InstanceMatchCriteria?: string;
}
/**
 * Attributes type definition for AWS::EC2::CapacityReservation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-capacityreservation.html | AWS::EC2::CapacityReservation}
 */
export interface EC2CapacityReservationAttribs {
  Tenancy?: string;
  AvailableInstanceCount?: number;
  AvailabilityZone?: string;
  TotalInstanceCount?: number;
  Id?: string;
  InstanceType?: string;
}
/**
 * Resource class for AWS::EC2::CapacityReservation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-capacityreservation.html | AWS::EC2::CapacityReservation}
 */
export class EC2CapacityReservation extends ResourceBase<
  "AWS::EC2::CapacityReservation",
  EC2CapacityReservationProps,
  EC2CapacityReservationAttribs
> {
  public static readonly Type = "AWS::EC2::CapacityReservation";
  public static readonly AttributeNames: readonly (keyof EC2CapacityReservationAttribs)[] =
    [
      "Tenancy",
      "AvailableInstanceCount",
      "AvailabilityZone",
      "TotalInstanceCount",
      "Id",
      "InstanceType",
    ];
  constructor(
    logicalId: string,
    properties: EC2CapacityReservationProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2CapacityReservation.Type,
      EC2CapacityReservation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::CapacityReservationFleet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-capacityreservationfleet.html | AWS::EC2::CapacityReservationFleet}
 */
export interface EC2CapacityReservationFleetProps {
  Tenancy?: string;
  TotalTargetCapacity?: number;
  AllocationStrategy?: string;
  TagSpecifications?: any[];
  NoRemoveEndDate?: boolean;
  InstanceTypeSpecifications?: any[];
  RemoveEndDate?: boolean;
  InstanceMatchCriteria?: string;
  EndDate?: string;
}
/**
 * Attributes type definition for AWS::EC2::CapacityReservationFleet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-capacityreservationfleet.html | AWS::EC2::CapacityReservationFleet}
 */
export interface EC2CapacityReservationFleetAttribs {
  CapacityReservationFleetId?: string;
}
/**
 * Resource class for AWS::EC2::CapacityReservationFleet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-capacityreservationfleet.html | AWS::EC2::CapacityReservationFleet}
 */
export class EC2CapacityReservationFleet extends ResourceBase<
  "AWS::EC2::CapacityReservationFleet",
  EC2CapacityReservationFleetProps,
  EC2CapacityReservationFleetAttribs
> {
  public static readonly Type = "AWS::EC2::CapacityReservationFleet";
  public static readonly AttributeNames: readonly (keyof EC2CapacityReservationFleetAttribs)[] =
    ["CapacityReservationFleetId"];
  constructor(
    logicalId: string,
    properties: EC2CapacityReservationFleetProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2CapacityReservationFleet.Type,
      EC2CapacityReservationFleet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::CarrierGateway
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-carriergateway.html | AWS::EC2::CarrierGateway}
 */
export interface EC2CarrierGatewayProps {
  VpcId: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EC2::CarrierGateway
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-carriergateway.html | AWS::EC2::CarrierGateway}
 */
export interface EC2CarrierGatewayAttribs {
  OwnerId?: string;
  State?: string;
  CarrierGatewayId?: string;
}
/**
 * Resource class for AWS::EC2::CarrierGateway
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-carriergateway.html | AWS::EC2::CarrierGateway}
 */
export class EC2CarrierGateway extends ResourceBase<
  "AWS::EC2::CarrierGateway",
  EC2CarrierGatewayProps,
  EC2CarrierGatewayAttribs
> {
  public static readonly Type = "AWS::EC2::CarrierGateway";
  public static readonly AttributeNames: readonly (keyof EC2CarrierGatewayAttribs)[] =
    ["OwnerId", "State", "CarrierGatewayId"];
  constructor(
    logicalId: string,
    properties: EC2CarrierGatewayProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2CarrierGateway.Type,
      EC2CarrierGateway.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::ClientVpnAuthorizationRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnauthorizationrule.html | AWS::EC2::ClientVpnAuthorizationRule}
 */
export interface EC2ClientVpnAuthorizationRuleProps {
  ClientVpnEndpointId: string;
  Description?: string;
  AccessGroupId?: string;
  TargetNetworkCidr: string;
  AuthorizeAllGroups?: boolean;
}
/**
 * Resource class for AWS::EC2::ClientVpnAuthorizationRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnauthorizationrule.html | AWS::EC2::ClientVpnAuthorizationRule}
 */
export class EC2ClientVpnAuthorizationRule extends ResourceBase<
  "AWS::EC2::ClientVpnAuthorizationRule",
  EC2ClientVpnAuthorizationRuleProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::EC2::ClientVpnAuthorizationRule";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: EC2ClientVpnAuthorizationRuleProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2ClientVpnAuthorizationRule.Type,
      EC2ClientVpnAuthorizationRule.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::ClientVpnEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnendpoint.html | AWS::EC2::ClientVpnEndpoint}
 */
export interface EC2ClientVpnEndpointProps {
  ClientCidrBlock: string;
  ClientConnectOptions?: EC2ClientVpnEndpointClientConnectOptions;
  Description?: string;
  TagSpecifications?: any[];
  AuthenticationOptions: any[];
  ServerCertificateArn: string;
  SessionTimeoutHours?: number;
  DnsServers?: any[];
  SecurityGroupIds?: any[];
  ConnectionLogOptions: EC2ClientVpnEndpointConnectionLogOptions;
  SplitTunnel?: boolean;
  ClientLoginBannerOptions?: EC2ClientVpnEndpointClientLoginBannerOptions;
  VpcId?: string;
  SelfServicePortal?: string;
  TransportProtocol?: string;
  VpnPort?: number;
}
/**
 * Resource class for AWS::EC2::ClientVpnEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnendpoint.html | AWS::EC2::ClientVpnEndpoint}
 */
export class EC2ClientVpnEndpoint extends ResourceBase<
  "AWS::EC2::ClientVpnEndpoint",
  EC2ClientVpnEndpointProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::EC2::ClientVpnEndpoint";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: EC2ClientVpnEndpointProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2ClientVpnEndpoint.Type,
      EC2ClientVpnEndpoint.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::ClientVpnRoute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnroute.html | AWS::EC2::ClientVpnRoute}
 */
export interface EC2ClientVpnRouteProps {
  ClientVpnEndpointId: string;
  TargetVpcSubnetId: string;
  Description?: string;
  DestinationCidrBlock: string;
}
/**
 * Resource class for AWS::EC2::ClientVpnRoute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnroute.html | AWS::EC2::ClientVpnRoute}
 */
export class EC2ClientVpnRoute extends ResourceBase<
  "AWS::EC2::ClientVpnRoute",
  EC2ClientVpnRouteProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::EC2::ClientVpnRoute";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: EC2ClientVpnRouteProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2ClientVpnRoute.Type,
      EC2ClientVpnRoute.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::ClientVpnTargetNetworkAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpntargetnetworkassociation.html | AWS::EC2::ClientVpnTargetNetworkAssociation}
 */
export interface EC2ClientVpnTargetNetworkAssociationProps {
  ClientVpnEndpointId: string;
  SubnetId: string;
}
/**
 * Resource class for AWS::EC2::ClientVpnTargetNetworkAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpntargetnetworkassociation.html | AWS::EC2::ClientVpnTargetNetworkAssociation}
 */
export class EC2ClientVpnTargetNetworkAssociation extends ResourceBase<
  "AWS::EC2::ClientVpnTargetNetworkAssociation",
  EC2ClientVpnTargetNetworkAssociationProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::EC2::ClientVpnTargetNetworkAssociation";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: EC2ClientVpnTargetNetworkAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2ClientVpnTargetNetworkAssociation.Type,
      EC2ClientVpnTargetNetworkAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::CustomerGateway
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-customergateway.html | AWS::EC2::CustomerGateway}
 */
export interface EC2CustomerGatewayProps {
  Type: string;
  IpAddress: string;
  BgpAsn: number;
  Tags?: Tag[];
  DeviceName?: string;
}
/**
 * Attributes type definition for AWS::EC2::CustomerGateway
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-customergateway.html | AWS::EC2::CustomerGateway}
 */
export interface EC2CustomerGatewayAttribs {
  CustomerGatewayId?: string;
}
/**
 * Resource class for AWS::EC2::CustomerGateway
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-customergateway.html | AWS::EC2::CustomerGateway}
 */
export class EC2CustomerGateway extends ResourceBase<
  "AWS::EC2::CustomerGateway",
  EC2CustomerGatewayProps,
  EC2CustomerGatewayAttribs
> {
  public static readonly Type = "AWS::EC2::CustomerGateway";
  public static readonly AttributeNames: readonly (keyof EC2CustomerGatewayAttribs)[] =
    ["CustomerGatewayId"];
  constructor(
    logicalId: string,
    properties: EC2CustomerGatewayProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2CustomerGateway.Type,
      EC2CustomerGateway.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::DHCPOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-dhcpoptions.html | AWS::EC2::DHCPOptions}
 */
export interface EC2DHCPOptionsProps {
  NetbiosNameServers?: any[];
  NtpServers?: any[];
  DomainName?: string;
  NetbiosNodeType?: number;
  DomainNameServers?: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EC2::DHCPOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-dhcpoptions.html | AWS::EC2::DHCPOptions}
 */
export interface EC2DHCPOptionsAttribs {
  DhcpOptionsId?: string;
}
/**
 * Resource class for AWS::EC2::DHCPOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-dhcpoptions.html | AWS::EC2::DHCPOptions}
 */
export class EC2DHCPOptions extends ResourceBase<
  "AWS::EC2::DHCPOptions",
  EC2DHCPOptionsProps,
  EC2DHCPOptionsAttribs
> {
  public static readonly Type = "AWS::EC2::DHCPOptions";
  public static readonly AttributeNames: readonly (keyof EC2DHCPOptionsAttribs)[] =
    ["DhcpOptionsId"];
  constructor(
    logicalId: string,
    properties: EC2DHCPOptionsProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2DHCPOptions.Type,
      EC2DHCPOptions.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::EC2Fleet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ec2fleet.html | AWS::EC2::EC2Fleet}
 */
export interface EC2EC2FleetProps {
  Context?: string;
  TargetCapacitySpecification: EC2EC2FleetTargetCapacitySpecificationRequest;
  OnDemandOptions?: EC2EC2FleetOnDemandOptionsRequest;
  Type?: string;
  ExcessCapacityTerminationPolicy?: string;
  TagSpecifications?: any[];
  SpotOptions?: EC2EC2FleetSpotOptionsRequest;
  ValidFrom?: string;
  ReplaceUnhealthyInstances?: boolean;
  LaunchTemplateConfigs: any[];
  TerminateInstancesWithExpiration?: boolean;
  ValidUntil?: string;
}
/**
 * Attributes type definition for AWS::EC2::EC2Fleet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ec2fleet.html | AWS::EC2::EC2Fleet}
 */
export interface EC2EC2FleetAttribs {
  FleetId?: string;
}
/**
 * Resource class for AWS::EC2::EC2Fleet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ec2fleet.html | AWS::EC2::EC2Fleet}
 */
export class EC2EC2Fleet extends ResourceBase<
  "AWS::EC2::EC2Fleet",
  EC2EC2FleetProps,
  EC2EC2FleetAttribs
> {
  public static readonly Type = "AWS::EC2::EC2Fleet";
  public static readonly AttributeNames: readonly (keyof EC2EC2FleetAttribs)[] =
    ["FleetId"];
  constructor(
    logicalId: string,
    properties: EC2EC2FleetProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2EC2Fleet.Type,
      EC2EC2Fleet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::EIP
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-eip.html | AWS::EC2::EIP}
 */
export interface EC2EIPProps {
  InstanceId?: string;
  PublicIpv4Pool?: string;
  TransferAddress?: string;
  Domain?: string;
  Tags?: Tag[];
  NetworkBorderGroup?: string;
}
/**
 * Attributes type definition for AWS::EC2::EIP
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-eip.html | AWS::EC2::EIP}
 */
export interface EC2EIPAttribs {
  PublicIp?: string;
  AllocationId?: string;
}
/**
 * Resource class for AWS::EC2::EIP
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-eip.html | AWS::EC2::EIP}
 */
export class EC2EIP extends ResourceBase<
  "AWS::EC2::EIP",
  EC2EIPProps,
  EC2EIPAttribs
> {
  public static readonly Type = "AWS::EC2::EIP";
  public static readonly AttributeNames: readonly (keyof EC2EIPAttribs)[] = [
    "PublicIp",
    "AllocationId",
  ];
  constructor(
    logicalId: string,
    properties: EC2EIPProps,
    options?: ResourceOptions,
  ) {
    super(EC2EIP.Type, EC2EIP.AttributeNames, logicalId, properties, options);
  }
}
/**
 * Type definition for AWS::EC2::EIPAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-eipassociation.html | AWS::EC2::EIPAssociation}
 */
export interface EC2EIPAssociationProps {
  PrivateIpAddress?: string;
  InstanceId?: string;
  AllocationId?: string;
  NetworkInterfaceId?: string;
}
/**
 * Attributes type definition for AWS::EC2::EIPAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-eipassociation.html | AWS::EC2::EIPAssociation}
 */
export interface EC2EIPAssociationAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::EC2::EIPAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-eipassociation.html | AWS::EC2::EIPAssociation}
 */
export class EC2EIPAssociation extends ResourceBase<
  "AWS::EC2::EIPAssociation",
  EC2EIPAssociationProps,
  EC2EIPAssociationAttribs
> {
  public static readonly Type = "AWS::EC2::EIPAssociation";
  public static readonly AttributeNames: readonly (keyof EC2EIPAssociationAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: EC2EIPAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2EIPAssociation.Type,
      EC2EIPAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::EgressOnlyInternetGateway
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-egressonlyinternetgateway.html | AWS::EC2::EgressOnlyInternetGateway}
 */
export interface EC2EgressOnlyInternetGatewayProps {
  VpcId: string;
}
/**
 * Attributes type definition for AWS::EC2::EgressOnlyInternetGateway
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-egressonlyinternetgateway.html | AWS::EC2::EgressOnlyInternetGateway}
 */
export interface EC2EgressOnlyInternetGatewayAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::EC2::EgressOnlyInternetGateway
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-egressonlyinternetgateway.html | AWS::EC2::EgressOnlyInternetGateway}
 */
export class EC2EgressOnlyInternetGateway extends ResourceBase<
  "AWS::EC2::EgressOnlyInternetGateway",
  EC2EgressOnlyInternetGatewayProps,
  EC2EgressOnlyInternetGatewayAttribs
> {
  public static readonly Type = "AWS::EC2::EgressOnlyInternetGateway";
  public static readonly AttributeNames: readonly (keyof EC2EgressOnlyInternetGatewayAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: EC2EgressOnlyInternetGatewayProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2EgressOnlyInternetGateway.Type,
      EC2EgressOnlyInternetGateway.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::EnclaveCertificateIamRoleAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-enclavecertificateiamroleassociation.html | AWS::EC2::EnclaveCertificateIamRoleAssociation}
 */
export interface EC2EnclaveCertificateIamRoleAssociationProps {
  RoleArn: string;
  CertificateArn: string;
}
/**
 * Attributes type definition for AWS::EC2::EnclaveCertificateIamRoleAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-enclavecertificateiamroleassociation.html | AWS::EC2::EnclaveCertificateIamRoleAssociation}
 */
export interface EC2EnclaveCertificateIamRoleAssociationAttribs {
  EncryptionKmsKeyId?: string;
  CertificateS3BucketName?: string;
  CertificateS3ObjectKey?: string;
}
/**
 * Resource class for AWS::EC2::EnclaveCertificateIamRoleAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-enclavecertificateiamroleassociation.html | AWS::EC2::EnclaveCertificateIamRoleAssociation}
 */
export class EC2EnclaveCertificateIamRoleAssociation extends ResourceBase<
  "AWS::EC2::EnclaveCertificateIamRoleAssociation",
  EC2EnclaveCertificateIamRoleAssociationProps,
  EC2EnclaveCertificateIamRoleAssociationAttribs
> {
  public static readonly Type =
    "AWS::EC2::EnclaveCertificateIamRoleAssociation";
  public static readonly AttributeNames: readonly (keyof EC2EnclaveCertificateIamRoleAssociationAttribs)[] =
    ["EncryptionKmsKeyId", "CertificateS3BucketName", "CertificateS3ObjectKey"];
  constructor(
    logicalId: string,
    properties: EC2EnclaveCertificateIamRoleAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2EnclaveCertificateIamRoleAssociation.Type,
      EC2EnclaveCertificateIamRoleAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::FlowLog
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html | AWS::EC2::FlowLog}
 */
export interface EC2FlowLogProps {
  LogFormat?: string;
  ResourceId: string;
  MaxAggregationInterval?: number;
  DestinationOptions?: EC2FlowLogDestinationOptions;
  ResourceType: string;
  DeliverCrossAccountRole?: string;
  LogDestination?: string;
  LogGroupName?: string;
  DeliverLogsPermissionArn?: string;
  LogDestinationType?: string;
  Tags?: Tag[];
  TrafficType?: string;
}
/**
 * Attributes type definition for AWS::EC2::FlowLog
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html | AWS::EC2::FlowLog}
 */
export interface EC2FlowLogAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::EC2::FlowLog
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html | AWS::EC2::FlowLog}
 */
export class EC2FlowLog extends ResourceBase<
  "AWS::EC2::FlowLog",
  EC2FlowLogProps,
  EC2FlowLogAttribs
> {
  public static readonly Type = "AWS::EC2::FlowLog";
  public static readonly AttributeNames: readonly (keyof EC2FlowLogAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: EC2FlowLogProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2FlowLog.Type,
      EC2FlowLog.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::GatewayRouteTableAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-gatewayroutetableassociation.html | AWS::EC2::GatewayRouteTableAssociation}
 */
export interface EC2GatewayRouteTableAssociationProps {
  RouteTableId: string;
  GatewayId: string;
}
/**
 * Attributes type definition for AWS::EC2::GatewayRouteTableAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-gatewayroutetableassociation.html | AWS::EC2::GatewayRouteTableAssociation}
 */
export interface EC2GatewayRouteTableAssociationAttribs {
  AssociationId?: string;
}
/**
 * Resource class for AWS::EC2::GatewayRouteTableAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-gatewayroutetableassociation.html | AWS::EC2::GatewayRouteTableAssociation}
 */
export class EC2GatewayRouteTableAssociation extends ResourceBase<
  "AWS::EC2::GatewayRouteTableAssociation",
  EC2GatewayRouteTableAssociationProps,
  EC2GatewayRouteTableAssociationAttribs
> {
  public static readonly Type = "AWS::EC2::GatewayRouteTableAssociation";
  public static readonly AttributeNames: readonly (keyof EC2GatewayRouteTableAssociationAttribs)[] =
    ["AssociationId"];
  constructor(
    logicalId: string,
    properties: EC2GatewayRouteTableAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2GatewayRouteTableAssociation.Type,
      EC2GatewayRouteTableAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::Host
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-host.html | AWS::EC2::Host}
 */
export interface EC2HostProps {
  HostRecovery?: string;
  InstanceFamily?: string;
  AutoPlacement?: string;
  OutpostArn?: string;
  HostMaintenance?: string;
  AvailabilityZone: string;
  InstanceType?: string;
  AssetId?: string;
}
/**
 * Attributes type definition for AWS::EC2::Host
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-host.html | AWS::EC2::Host}
 */
export interface EC2HostAttribs {
  HostId?: string;
}
/**
 * Resource class for AWS::EC2::Host
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-host.html | AWS::EC2::Host}
 */
export class EC2Host extends ResourceBase<
  "AWS::EC2::Host",
  EC2HostProps,
  EC2HostAttribs
> {
  public static readonly Type = "AWS::EC2::Host";
  public static readonly AttributeNames: readonly (keyof EC2HostAttribs)[] = [
    "HostId",
  ];
  constructor(
    logicalId: string,
    properties: EC2HostProps,
    options?: ResourceOptions,
  ) {
    super(EC2Host.Type, EC2Host.AttributeNames, logicalId, properties, options);
  }
}
/**
 * Type definition for AWS::EC2::IPAM
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipam.html | AWS::EC2::IPAM}
 */
export interface EC2IPAMProps {
  Description?: string;
  Tags?: Tag[];
  OperatingRegions?: any[];
}
/**
 * Attributes type definition for AWS::EC2::IPAM
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipam.html | AWS::EC2::IPAM}
 */
export interface EC2IPAMAttribs {
  DefaultResourceDiscoveryAssociationId?: string;
  DefaultResourceDiscoveryId?: string;
  IpamId?: string;
  ResourceDiscoveryAssociationCount?: number;
  ScopeCount?: number;
  Arn?: string;
  PrivateDefaultScopeId?: string;
  PublicDefaultScopeId?: string;
}
/**
 * Resource class for AWS::EC2::IPAM
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipam.html | AWS::EC2::IPAM}
 */
export class EC2IPAM extends ResourceBase<
  "AWS::EC2::IPAM",
  EC2IPAMProps,
  EC2IPAMAttribs
> {
  public static readonly Type = "AWS::EC2::IPAM";
  public static readonly AttributeNames: readonly (keyof EC2IPAMAttribs)[] = [
    "DefaultResourceDiscoveryAssociationId",
    "DefaultResourceDiscoveryId",
    "IpamId",
    "ResourceDiscoveryAssociationCount",
    "ScopeCount",
    "Arn",
    "PrivateDefaultScopeId",
    "PublicDefaultScopeId",
  ];
  constructor(
    logicalId: string,
    properties: EC2IPAMProps,
    options?: ResourceOptions,
  ) {
    super(EC2IPAM.Type, EC2IPAM.AttributeNames, logicalId, properties, options);
  }
}
/**
 * Type definition for AWS::EC2::IPAMAllocation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamallocation.html | AWS::EC2::IPAMAllocation}
 */
export interface EC2IPAMAllocationProps {
  Description?: string;
  Cidr?: string;
  NetmaskLength?: number;
  IpamPoolId: string;
}
/**
 * Attributes type definition for AWS::EC2::IPAMAllocation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamallocation.html | AWS::EC2::IPAMAllocation}
 */
export interface EC2IPAMAllocationAttribs {
  IpamPoolAllocationId?: string;
}
/**
 * Resource class for AWS::EC2::IPAMAllocation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamallocation.html | AWS::EC2::IPAMAllocation}
 */
export class EC2IPAMAllocation extends ResourceBase<
  "AWS::EC2::IPAMAllocation",
  EC2IPAMAllocationProps,
  EC2IPAMAllocationAttribs
> {
  public static readonly Type = "AWS::EC2::IPAMAllocation";
  public static readonly AttributeNames: readonly (keyof EC2IPAMAllocationAttribs)[] =
    ["IpamPoolAllocationId"];
  constructor(
    logicalId: string,
    properties: EC2IPAMAllocationProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2IPAMAllocation.Type,
      EC2IPAMAllocation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::IPAMPool
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipampool.html | AWS::EC2::IPAMPool}
 */
export interface EC2IPAMPoolProps {
  AwsService?: string;
  Locale?: string;
  PublicIpSource?: string;
  Description?: string;
  SourceIpamPoolId?: string;
  AllocationMinNetmaskLength?: number;
  IpamScopeId: string;
  ProvisionedCidrs?: any[];
  AllocationMaxNetmaskLength?: number;
  AllocationDefaultNetmaskLength?: number;
  AutoImport?: boolean;
  AddressFamily: string;
  AllocationResourceTags?: any[];
  PubliclyAdvertisable?: boolean;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EC2::IPAMPool
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipampool.html | AWS::EC2::IPAMPool}
 */
export interface EC2IPAMPoolAttribs {
  IpamPoolId?: string;
  IpamArn?: string;
  PoolDepth?: number;
  State?: string;
  IpamScopeArn?: string;
  IpamScopeType?: string;
  Arn?: string;
  StateMessage?: string;
}
/**
 * Resource class for AWS::EC2::IPAMPool
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipampool.html | AWS::EC2::IPAMPool}
 */
export class EC2IPAMPool extends ResourceBase<
  "AWS::EC2::IPAMPool",
  EC2IPAMPoolProps,
  EC2IPAMPoolAttribs
> {
  public static readonly Type = "AWS::EC2::IPAMPool";
  public static readonly AttributeNames: readonly (keyof EC2IPAMPoolAttribs)[] =
    [
      "IpamPoolId",
      "IpamArn",
      "PoolDepth",
      "State",
      "IpamScopeArn",
      "IpamScopeType",
      "Arn",
      "StateMessage",
    ];
  constructor(
    logicalId: string,
    properties: EC2IPAMPoolProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2IPAMPool.Type,
      EC2IPAMPool.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::IPAMPoolCidr
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipampoolcidr.html | AWS::EC2::IPAMPoolCidr}
 */
export interface EC2IPAMPoolCidrProps {
  Cidr?: string;
  NetmaskLength?: number;
  IpamPoolId: string;
}
/**
 * Attributes type definition for AWS::EC2::IPAMPoolCidr
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipampoolcidr.html | AWS::EC2::IPAMPoolCidr}
 */
export interface EC2IPAMPoolCidrAttribs {
  IpamPoolCidrId?: string;
  State?: string;
}
/**
 * Resource class for AWS::EC2::IPAMPoolCidr
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipampoolcidr.html | AWS::EC2::IPAMPoolCidr}
 */
export class EC2IPAMPoolCidr extends ResourceBase<
  "AWS::EC2::IPAMPoolCidr",
  EC2IPAMPoolCidrProps,
  EC2IPAMPoolCidrAttribs
> {
  public static readonly Type = "AWS::EC2::IPAMPoolCidr";
  public static readonly AttributeNames: readonly (keyof EC2IPAMPoolCidrAttribs)[] =
    ["IpamPoolCidrId", "State"];
  constructor(
    logicalId: string,
    properties: EC2IPAMPoolCidrProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2IPAMPoolCidr.Type,
      EC2IPAMPoolCidr.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::IPAMResourceDiscovery
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamresourcediscovery.html | AWS::EC2::IPAMResourceDiscovery}
 */
export interface EC2IPAMResourceDiscoveryProps {
  Description?: string;
  Tags?: Tag[];
  OperatingRegions?: any[];
}
/**
 * Attributes type definition for AWS::EC2::IPAMResourceDiscovery
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamresourcediscovery.html | AWS::EC2::IPAMResourceDiscovery}
 */
export interface EC2IPAMResourceDiscoveryAttribs {
  IsDefault?: boolean;
  OwnerId?: string;
  State?: string;
  IpamResourceDiscoveryRegion?: string;
  IpamResourceDiscoveryArn?: string;
  IpamResourceDiscoveryId?: string;
}
/**
 * Resource class for AWS::EC2::IPAMResourceDiscovery
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamresourcediscovery.html | AWS::EC2::IPAMResourceDiscovery}
 */
export class EC2IPAMResourceDiscovery extends ResourceBase<
  "AWS::EC2::IPAMResourceDiscovery",
  EC2IPAMResourceDiscoveryProps,
  EC2IPAMResourceDiscoveryAttribs
> {
  public static readonly Type = "AWS::EC2::IPAMResourceDiscovery";
  public static readonly AttributeNames: readonly (keyof EC2IPAMResourceDiscoveryAttribs)[] =
    [
      "IsDefault",
      "OwnerId",
      "State",
      "IpamResourceDiscoveryRegion",
      "IpamResourceDiscoveryArn",
      "IpamResourceDiscoveryId",
    ];
  constructor(
    logicalId: string,
    properties: EC2IPAMResourceDiscoveryProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2IPAMResourceDiscovery.Type,
      EC2IPAMResourceDiscovery.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::IPAMResourceDiscoveryAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamresourcediscoveryassociation.html | AWS::EC2::IPAMResourceDiscoveryAssociation}
 */
export interface EC2IPAMResourceDiscoveryAssociationProps {
  IpamId: string;
  Tags?: Tag[];
  IpamResourceDiscoveryId: string;
}
/**
 * Attributes type definition for AWS::EC2::IPAMResourceDiscoveryAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamresourcediscoveryassociation.html | AWS::EC2::IPAMResourceDiscoveryAssociation}
 */
export interface EC2IPAMResourceDiscoveryAssociationAttribs {
  IsDefault?: boolean;
  ResourceDiscoveryStatus?: string;
  OwnerId?: string;
  IpamArn?: string;
  IpamResourceDiscoveryAssociationId?: string;
  IpamResourceDiscoveryAssociationArn?: string;
  State?: string;
  IpamRegion?: string;
}
/**
 * Resource class for AWS::EC2::IPAMResourceDiscoveryAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamresourcediscoveryassociation.html | AWS::EC2::IPAMResourceDiscoveryAssociation}
 */
export class EC2IPAMResourceDiscoveryAssociation extends ResourceBase<
  "AWS::EC2::IPAMResourceDiscoveryAssociation",
  EC2IPAMResourceDiscoveryAssociationProps,
  EC2IPAMResourceDiscoveryAssociationAttribs
> {
  public static readonly Type = "AWS::EC2::IPAMResourceDiscoveryAssociation";
  public static readonly AttributeNames: readonly (keyof EC2IPAMResourceDiscoveryAssociationAttribs)[] =
    [
      "IsDefault",
      "ResourceDiscoveryStatus",
      "OwnerId",
      "IpamArn",
      "IpamResourceDiscoveryAssociationId",
      "IpamResourceDiscoveryAssociationArn",
      "State",
      "IpamRegion",
    ];
  constructor(
    logicalId: string,
    properties: EC2IPAMResourceDiscoveryAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2IPAMResourceDiscoveryAssociation.Type,
      EC2IPAMResourceDiscoveryAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::IPAMScope
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamscope.html | AWS::EC2::IPAMScope}
 */
export interface EC2IPAMScopeProps {
  Description?: string;
  IpamId: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EC2::IPAMScope
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamscope.html | AWS::EC2::IPAMScope}
 */
export interface EC2IPAMScopeAttribs {
  IpamScopeId?: string;
  IsDefault?: boolean;
  IpamArn?: string;
  IpamScopeType?: string;
  PoolCount?: number;
  Arn?: string;
}
/**
 * Resource class for AWS::EC2::IPAMScope
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamscope.html | AWS::EC2::IPAMScope}
 */
export class EC2IPAMScope extends ResourceBase<
  "AWS::EC2::IPAMScope",
  EC2IPAMScopeProps,
  EC2IPAMScopeAttribs
> {
  public static readonly Type = "AWS::EC2::IPAMScope";
  public static readonly AttributeNames: readonly (keyof EC2IPAMScopeAttribs)[] =
    [
      "IpamScopeId",
      "IsDefault",
      "IpamArn",
      "IpamScopeType",
      "PoolCount",
      "Arn",
    ];
  constructor(
    logicalId: string,
    properties: EC2IPAMScopeProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2IPAMScope.Type,
      EC2IPAMScope.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::Instance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html | AWS::EC2::Instance}
 */
export interface EC2InstanceProps {
  AdditionalInfo?: string;
  Affinity?: string;
  AvailabilityZone?: string;
  BlockDeviceMappings?: any[];
  CpuOptions?: EC2InstanceCpuOptions;
  CreditSpecification?: EC2InstanceCreditSpecification;
  DisableApiTermination?: boolean;
  EbsOptimized?: boolean;
  ElasticGpuSpecifications?: any[];
  ElasticInferenceAccelerators?: any[];
  EnclaveOptions?: EC2InstanceEnclaveOptions;
  HibernationOptions?: EC2InstanceHibernationOptions;
  HostId?: string;
  HostResourceGroupArn?: string;
  IamInstanceProfile?: string;
  ImageId?: string;
  InstanceInitiatedShutdownBehavior?: string;
  InstanceType?: string;
  Ipv6AddressCount?: number;
  Ipv6Addresses?: any[];
  KernelId?: string;
  KeyName?: string;
  LaunchTemplate?: EC2InstanceLaunchTemplateSpecification;
  LicenseSpecifications?: any[];
  Monitoring?: boolean;
  NetworkInterfaces?: any[];
  PlacementGroupName?: string;
  PrivateDnsNameOptions?: EC2InstancePrivateDnsNameOptions;
  PrivateIpAddress?: string;
  PropagateTagsToVolumeOnCreation?: boolean;
  RamdiskId?: string;
  SecurityGroupIds?: any[];
  SecurityGroups?: any[];
  SourceDestCheck?: boolean;
  SsmAssociations?: any[];
  SubnetId?: string;
  Tags?: Tag[];
  Tenancy?: string;
  UserData?: string;
  Volumes?: any[];
}
/**
 * Attributes type definition for AWS::EC2::Instance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html | AWS::EC2::Instance}
 */
export interface EC2InstanceAttribs {
  AvailabilityZone?: string;
  PrivateDnsName?: string;
  PrivateIp?: string;
  PublicDnsName?: string;
  PublicIp?: string;
}
/**
 * Resource class for AWS::EC2::Instance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html | AWS::EC2::Instance}
 */
export class EC2Instance extends ResourceBase<
  "AWS::EC2::Instance",
  EC2InstanceProps,
  EC2InstanceAttribs
> {
  public static readonly Type = "AWS::EC2::Instance";
  public static readonly AttributeNames: readonly (keyof EC2InstanceAttribs)[] =
    [
      "AvailabilityZone",
      "PrivateDnsName",
      "PrivateIp",
      "PublicDnsName",
      "PublicIp",
    ];
  constructor(
    logicalId: string,
    properties: EC2InstanceProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2Instance.Type,
      EC2Instance.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::InstanceConnectEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instanceconnectendpoint.html | AWS::EC2::InstanceConnectEndpoint}
 */
export interface EC2InstanceConnectEndpointProps {
  PreserveClientIp?: boolean;
  SubnetId: string;
  ClientToken?: string;
  SecurityGroupIds?: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EC2::InstanceConnectEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instanceconnectendpoint.html | AWS::EC2::InstanceConnectEndpoint}
 */
export interface EC2InstanceConnectEndpointAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::EC2::InstanceConnectEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instanceconnectendpoint.html | AWS::EC2::InstanceConnectEndpoint}
 */
export class EC2InstanceConnectEndpoint extends ResourceBase<
  "AWS::EC2::InstanceConnectEndpoint",
  EC2InstanceConnectEndpointProps,
  EC2InstanceConnectEndpointAttribs
> {
  public static readonly Type = "AWS::EC2::InstanceConnectEndpoint";
  public static readonly AttributeNames: readonly (keyof EC2InstanceConnectEndpointAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: EC2InstanceConnectEndpointProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2InstanceConnectEndpoint.Type,
      EC2InstanceConnectEndpoint.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::InternetGateway
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-internetgateway.html | AWS::EC2::InternetGateway}
 */
export interface EC2InternetGatewayProps {
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EC2::InternetGateway
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-internetgateway.html | AWS::EC2::InternetGateway}
 */
export interface EC2InternetGatewayAttribs {
  InternetGatewayId?: string;
}
/**
 * Resource class for AWS::EC2::InternetGateway
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-internetgateway.html | AWS::EC2::InternetGateway}
 */
export class EC2InternetGateway extends ResourceBase<
  "AWS::EC2::InternetGateway",
  EC2InternetGatewayProps,
  EC2InternetGatewayAttribs
> {
  public static readonly Type = "AWS::EC2::InternetGateway";
  public static readonly AttributeNames: readonly (keyof EC2InternetGatewayAttribs)[] =
    ["InternetGatewayId"];
  constructor(
    logicalId: string,
    properties: EC2InternetGatewayProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2InternetGateway.Type,
      EC2InternetGateway.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::KeyPair
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-keypair.html | AWS::EC2::KeyPair}
 */
export interface EC2KeyPairProps {
  KeyName: string;
  KeyType?: string;
  KeyFormat?: string;
  PublicKeyMaterial?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EC2::KeyPair
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-keypair.html | AWS::EC2::KeyPair}
 */
export interface EC2KeyPairAttribs {
  KeyPairId?: string;
  KeyFingerprint?: string;
}
/**
 * Resource class for AWS::EC2::KeyPair
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-keypair.html | AWS::EC2::KeyPair}
 */
export class EC2KeyPair extends ResourceBase<
  "AWS::EC2::KeyPair",
  EC2KeyPairProps,
  EC2KeyPairAttribs
> {
  public static readonly Type = "AWS::EC2::KeyPair";
  public static readonly AttributeNames: readonly (keyof EC2KeyPairAttribs)[] =
    ["KeyPairId", "KeyFingerprint"];
  constructor(
    logicalId: string,
    properties: EC2KeyPairProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2KeyPair.Type,
      EC2KeyPair.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::LaunchTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html | AWS::EC2::LaunchTemplate}
 */
export interface EC2LaunchTemplateProps {
  LaunchTemplateName?: string;
  LaunchTemplateData: EC2LaunchTemplateLaunchTemplateData;
  VersionDescription?: string;
  TagSpecifications?: any[];
}
/**
 * Attributes type definition for AWS::EC2::LaunchTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html | AWS::EC2::LaunchTemplate}
 */
export interface EC2LaunchTemplateAttribs {
  LatestVersionNumber?: string;
  LaunchTemplateId?: string;
  DefaultVersionNumber?: string;
}
/**
 * Resource class for AWS::EC2::LaunchTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html | AWS::EC2::LaunchTemplate}
 */
export class EC2LaunchTemplate extends ResourceBase<
  "AWS::EC2::LaunchTemplate",
  EC2LaunchTemplateProps,
  EC2LaunchTemplateAttribs
> {
  public static readonly Type = "AWS::EC2::LaunchTemplate";
  public static readonly AttributeNames: readonly (keyof EC2LaunchTemplateAttribs)[] =
    ["LatestVersionNumber", "LaunchTemplateId", "DefaultVersionNumber"];
  constructor(
    logicalId: string,
    properties: EC2LaunchTemplateProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2LaunchTemplate.Type,
      EC2LaunchTemplate.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::LocalGatewayRoute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroute.html | AWS::EC2::LocalGatewayRoute}
 */
export interface EC2LocalGatewayRouteProps {
  LocalGatewayRouteTableId: string;
  DestinationCidrBlock: string;
  NetworkInterfaceId?: string;
  LocalGatewayVirtualInterfaceGroupId?: string;
}
/**
 * Attributes type definition for AWS::EC2::LocalGatewayRoute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroute.html | AWS::EC2::LocalGatewayRoute}
 */
export interface EC2LocalGatewayRouteAttribs {
  Type?: string;
  State?: string;
}
/**
 * Resource class for AWS::EC2::LocalGatewayRoute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroute.html | AWS::EC2::LocalGatewayRoute}
 */
export class EC2LocalGatewayRoute extends ResourceBase<
  "AWS::EC2::LocalGatewayRoute",
  EC2LocalGatewayRouteProps,
  EC2LocalGatewayRouteAttribs
> {
  public static readonly Type = "AWS::EC2::LocalGatewayRoute";
  public static readonly AttributeNames: readonly (keyof EC2LocalGatewayRouteAttribs)[] =
    ["Type", "State"];
  constructor(
    logicalId: string,
    properties: EC2LocalGatewayRouteProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2LocalGatewayRoute.Type,
      EC2LocalGatewayRoute.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::LocalGatewayRouteTable
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroutetable.html | AWS::EC2::LocalGatewayRouteTable}
 */
export interface EC2LocalGatewayRouteTableProps {
  LocalGatewayId: string;
  Mode?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EC2::LocalGatewayRouteTable
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroutetable.html | AWS::EC2::LocalGatewayRouteTable}
 */
export interface EC2LocalGatewayRouteTableAttribs {
  OwnerId?: string;
  State?: string;
  OutpostArn?: string;
  LocalGatewayRouteTableId?: string;
  LocalGatewayRouteTableArn?: string;
}
/**
 * Resource class for AWS::EC2::LocalGatewayRouteTable
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroutetable.html | AWS::EC2::LocalGatewayRouteTable}
 */
export class EC2LocalGatewayRouteTable extends ResourceBase<
  "AWS::EC2::LocalGatewayRouteTable",
  EC2LocalGatewayRouteTableProps,
  EC2LocalGatewayRouteTableAttribs
> {
  public static readonly Type = "AWS::EC2::LocalGatewayRouteTable";
  public static readonly AttributeNames: readonly (keyof EC2LocalGatewayRouteTableAttribs)[] =
    [
      "OwnerId",
      "State",
      "OutpostArn",
      "LocalGatewayRouteTableId",
      "LocalGatewayRouteTableArn",
    ];
  constructor(
    logicalId: string,
    properties: EC2LocalGatewayRouteTableProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2LocalGatewayRouteTable.Type,
      EC2LocalGatewayRouteTable.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::LocalGatewayRouteTableVPCAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroutetablevpcassociation.html | AWS::EC2::LocalGatewayRouteTableVPCAssociation}
 */
export interface EC2LocalGatewayRouteTableVPCAssociationProps {
  VpcId: string;
  LocalGatewayRouteTableId: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EC2::LocalGatewayRouteTableVPCAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroutetablevpcassociation.html | AWS::EC2::LocalGatewayRouteTableVPCAssociation}
 */
export interface EC2LocalGatewayRouteTableVPCAssociationAttribs {
  LocalGatewayId?: string;
  State?: string;
  LocalGatewayRouteTableVpcAssociationId?: string;
}
/**
 * Resource class for AWS::EC2::LocalGatewayRouteTableVPCAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroutetablevpcassociation.html | AWS::EC2::LocalGatewayRouteTableVPCAssociation}
 */
export class EC2LocalGatewayRouteTableVPCAssociation extends ResourceBase<
  "AWS::EC2::LocalGatewayRouteTableVPCAssociation",
  EC2LocalGatewayRouteTableVPCAssociationProps,
  EC2LocalGatewayRouteTableVPCAssociationAttribs
> {
  public static readonly Type =
    "AWS::EC2::LocalGatewayRouteTableVPCAssociation";
  public static readonly AttributeNames: readonly (keyof EC2LocalGatewayRouteTableVPCAssociationAttribs)[] =
    ["LocalGatewayId", "State", "LocalGatewayRouteTableVpcAssociationId"];
  constructor(
    logicalId: string,
    properties: EC2LocalGatewayRouteTableVPCAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2LocalGatewayRouteTableVPCAssociation.Type,
      EC2LocalGatewayRouteTableVPCAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::LocalGatewayRouteTableVirtualInterfaceGroupAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroutetablevirtualinterfacegroupassociation.html | AWS::EC2::LocalGatewayRouteTableVirtualInterfaceGroupAssociation}
 */
export interface EC2LocalGatewayRouteTableVirtualInterfaceGroupAssociationProps {
  LocalGatewayRouteTableId: string;
  Tags?: Tag[];
  LocalGatewayVirtualInterfaceGroupId: string;
}
/**
 * Attributes type definition for AWS::EC2::LocalGatewayRouteTableVirtualInterfaceGroupAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroutetablevirtualinterfacegroupassociation.html | AWS::EC2::LocalGatewayRouteTableVirtualInterfaceGroupAssociation}
 */
export interface EC2LocalGatewayRouteTableVirtualInterfaceGroupAssociationAttribs {
  OwnerId?: string;
  LocalGatewayId?: string;
  State?: string;
  LocalGatewayRouteTableVirtualInterfaceGroupAssociationId?: string;
  LocalGatewayRouteTableArn?: string;
}
/**
 * Resource class for AWS::EC2::LocalGatewayRouteTableVirtualInterfaceGroupAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroutetablevirtualinterfacegroupassociation.html | AWS::EC2::LocalGatewayRouteTableVirtualInterfaceGroupAssociation}
 */
export class EC2LocalGatewayRouteTableVirtualInterfaceGroupAssociation extends ResourceBase<
  "AWS::EC2::LocalGatewayRouteTableVirtualInterfaceGroupAssociation",
  EC2LocalGatewayRouteTableVirtualInterfaceGroupAssociationProps,
  EC2LocalGatewayRouteTableVirtualInterfaceGroupAssociationAttribs
> {
  public static readonly Type =
    "AWS::EC2::LocalGatewayRouteTableVirtualInterfaceGroupAssociation";
  public static readonly AttributeNames: readonly (keyof EC2LocalGatewayRouteTableVirtualInterfaceGroupAssociationAttribs)[] =
    [
      "OwnerId",
      "LocalGatewayId",
      "State",
      "LocalGatewayRouteTableVirtualInterfaceGroupAssociationId",
      "LocalGatewayRouteTableArn",
    ];
  constructor(
    logicalId: string,
    properties: EC2LocalGatewayRouteTableVirtualInterfaceGroupAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Type,
      EC2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::NatGateway
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-natgateway.html | AWS::EC2::NatGateway}
 */
export interface EC2NatGatewayProps {
  SecondaryAllocationIds?: any[];
  PrivateIpAddress?: string;
  ConnectivityType?: string;
  SecondaryPrivateIpAddresses?: any[];
  SecondaryPrivateIpAddressCount?: number;
  AllocationId?: string;
  SubnetId: string;
  Tags?: Tag[];
  MaxDrainDurationSeconds?: number;
}
/**
 * Attributes type definition for AWS::EC2::NatGateway
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-natgateway.html | AWS::EC2::NatGateway}
 */
export interface EC2NatGatewayAttribs {
  NatGatewayId?: string;
}
/**
 * Resource class for AWS::EC2::NatGateway
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-natgateway.html | AWS::EC2::NatGateway}
 */
export class EC2NatGateway extends ResourceBase<
  "AWS::EC2::NatGateway",
  EC2NatGatewayProps,
  EC2NatGatewayAttribs
> {
  public static readonly Type = "AWS::EC2::NatGateway";
  public static readonly AttributeNames: readonly (keyof EC2NatGatewayAttribs)[] =
    ["NatGatewayId"];
  constructor(
    logicalId: string,
    properties: EC2NatGatewayProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2NatGateway.Type,
      EC2NatGateway.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::NetworkAcl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkacl.html | AWS::EC2::NetworkAcl}
 */
export interface EC2NetworkAclProps {
  VpcId: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EC2::NetworkAcl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkacl.html | AWS::EC2::NetworkAcl}
 */
export interface EC2NetworkAclAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::EC2::NetworkAcl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkacl.html | AWS::EC2::NetworkAcl}
 */
export class EC2NetworkAcl extends ResourceBase<
  "AWS::EC2::NetworkAcl",
  EC2NetworkAclProps,
  EC2NetworkAclAttribs
> {
  public static readonly Type = "AWS::EC2::NetworkAcl";
  public static readonly AttributeNames: readonly (keyof EC2NetworkAclAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: EC2NetworkAclProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2NetworkAcl.Type,
      EC2NetworkAcl.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::NetworkAclEntry
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkaclentry.html | AWS::EC2::NetworkAclEntry}
 */
export interface EC2NetworkAclEntryProps {
  PortRange?: EC2NetworkAclEntryPortRange;
  NetworkAclId: string;
  RuleAction: string;
  CidrBlock?: string;
  Egress?: boolean;
  RuleNumber: number;
  Ipv6CidrBlock?: string;
  Protocol: number;
  Icmp?: EC2NetworkAclEntryIcmp;
}
/**
 * Attributes type definition for AWS::EC2::NetworkAclEntry
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkaclentry.html | AWS::EC2::NetworkAclEntry}
 */
export interface EC2NetworkAclEntryAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::EC2::NetworkAclEntry
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkaclentry.html | AWS::EC2::NetworkAclEntry}
 */
export class EC2NetworkAclEntry extends ResourceBase<
  "AWS::EC2::NetworkAclEntry",
  EC2NetworkAclEntryProps,
  EC2NetworkAclEntryAttribs
> {
  public static readonly Type = "AWS::EC2::NetworkAclEntry";
  public static readonly AttributeNames: readonly (keyof EC2NetworkAclEntryAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: EC2NetworkAclEntryProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2NetworkAclEntry.Type,
      EC2NetworkAclEntry.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::NetworkInsightsAccessScope
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscope.html | AWS::EC2::NetworkInsightsAccessScope}
 */
export interface EC2NetworkInsightsAccessScopeProps {
  ExcludePaths?: any[];
  MatchPaths?: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EC2::NetworkInsightsAccessScope
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscope.html | AWS::EC2::NetworkInsightsAccessScope}
 */
export interface EC2NetworkInsightsAccessScopeAttribs {
  UpdatedDate?: string;
  CreatedDate?: string;
  NetworkInsightsAccessScopeArn?: string;
  NetworkInsightsAccessScopeId?: string;
}
/**
 * Resource class for AWS::EC2::NetworkInsightsAccessScope
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscope.html | AWS::EC2::NetworkInsightsAccessScope}
 */
export class EC2NetworkInsightsAccessScope extends ResourceBase<
  "AWS::EC2::NetworkInsightsAccessScope",
  EC2NetworkInsightsAccessScopeProps,
  EC2NetworkInsightsAccessScopeAttribs
> {
  public static readonly Type = "AWS::EC2::NetworkInsightsAccessScope";
  public static readonly AttributeNames: readonly (keyof EC2NetworkInsightsAccessScopeAttribs)[] =
    [
      "UpdatedDate",
      "CreatedDate",
      "NetworkInsightsAccessScopeArn",
      "NetworkInsightsAccessScopeId",
    ];
  constructor(
    logicalId: string,
    properties: EC2NetworkInsightsAccessScopeProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2NetworkInsightsAccessScope.Type,
      EC2NetworkInsightsAccessScope.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::NetworkInsightsAccessScopeAnalysis
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscopeanalysis.html | AWS::EC2::NetworkInsightsAccessScopeAnalysis}
 */
export interface EC2NetworkInsightsAccessScopeAnalysisProps {
  NetworkInsightsAccessScopeId: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EC2::NetworkInsightsAccessScopeAnalysis
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscopeanalysis.html | AWS::EC2::NetworkInsightsAccessScopeAnalysis}
 */
export interface EC2NetworkInsightsAccessScopeAnalysisAttribs {
  Status?: string;
  StartDate?: string;
  NetworkInsightsAccessScopeAnalysisId?: string;
  NetworkInsightsAccessScopeAnalysisArn?: string;
  EndDate?: string;
  AnalyzedEniCount?: number;
  FindingsFound?: string;
  StatusMessage?: string;
}
/**
 * Resource class for AWS::EC2::NetworkInsightsAccessScopeAnalysis
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscopeanalysis.html | AWS::EC2::NetworkInsightsAccessScopeAnalysis}
 */
export class EC2NetworkInsightsAccessScopeAnalysis extends ResourceBase<
  "AWS::EC2::NetworkInsightsAccessScopeAnalysis",
  EC2NetworkInsightsAccessScopeAnalysisProps,
  EC2NetworkInsightsAccessScopeAnalysisAttribs
> {
  public static readonly Type = "AWS::EC2::NetworkInsightsAccessScopeAnalysis";
  public static readonly AttributeNames: readonly (keyof EC2NetworkInsightsAccessScopeAnalysisAttribs)[] =
    [
      "Status",
      "StartDate",
      "NetworkInsightsAccessScopeAnalysisId",
      "NetworkInsightsAccessScopeAnalysisArn",
      "EndDate",
      "AnalyzedEniCount",
      "FindingsFound",
      "StatusMessage",
    ];
  constructor(
    logicalId: string,
    properties: EC2NetworkInsightsAccessScopeAnalysisProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2NetworkInsightsAccessScopeAnalysis.Type,
      EC2NetworkInsightsAccessScopeAnalysis.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::NetworkInsightsAnalysis
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsanalysis.html | AWS::EC2::NetworkInsightsAnalysis}
 */
export interface EC2NetworkInsightsAnalysisProps {
  NetworkInsightsPathId: string;
  FilterInArns?: any[];
  AdditionalAccounts?: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EC2::NetworkInsightsAnalysis
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsanalysis.html | AWS::EC2::NetworkInsightsAnalysis}
 */
export interface EC2NetworkInsightsAnalysisAttribs {
  Status?: string;
  ReturnPathComponents?: any[];
  StartDate?: string;
  NetworkInsightsAnalysisId?: string;
  AlternatePathHints?: any[];
  Explanations?: any[];
  NetworkPathFound?: boolean;
  SuggestedAccounts?: any[];
  ForwardPathComponents?: any[];
  NetworkInsightsAnalysisArn?: string;
  StatusMessage?: string;
}
/**
 * Resource class for AWS::EC2::NetworkInsightsAnalysis
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsanalysis.html | AWS::EC2::NetworkInsightsAnalysis}
 */
export class EC2NetworkInsightsAnalysis extends ResourceBase<
  "AWS::EC2::NetworkInsightsAnalysis",
  EC2NetworkInsightsAnalysisProps,
  EC2NetworkInsightsAnalysisAttribs
> {
  public static readonly Type = "AWS::EC2::NetworkInsightsAnalysis";
  public static readonly AttributeNames: readonly (keyof EC2NetworkInsightsAnalysisAttribs)[] =
    [
      "Status",
      "ReturnPathComponents",
      "StartDate",
      "NetworkInsightsAnalysisId",
      "AlternatePathHints",
      "Explanations",
      "NetworkPathFound",
      "SuggestedAccounts",
      "ForwardPathComponents",
      "NetworkInsightsAnalysisArn",
      "StatusMessage",
    ];
  constructor(
    logicalId: string,
    properties: EC2NetworkInsightsAnalysisProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2NetworkInsightsAnalysis.Type,
      EC2NetworkInsightsAnalysis.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::NetworkInsightsPath
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html | AWS::EC2::NetworkInsightsPath}
 */
export interface EC2NetworkInsightsPathProps {
  Destination?: string;
  DestinationIp?: string;
  SourceIp?: string;
  FilterAtDestination?: EC2NetworkInsightsPathPathFilter;
  FilterAtSource?: EC2NetworkInsightsPathPathFilter;
  Protocol: string;
  DestinationPort?: number;
  Source: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EC2::NetworkInsightsPath
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html | AWS::EC2::NetworkInsightsPath}
 */
export interface EC2NetworkInsightsPathAttribs {
  SourceArn?: string;
  NetworkInsightsPathId?: string;
  CreatedDate?: string;
  NetworkInsightsPathArn?: string;
  DestinationArn?: string;
}
/**
 * Resource class for AWS::EC2::NetworkInsightsPath
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html | AWS::EC2::NetworkInsightsPath}
 */
export class EC2NetworkInsightsPath extends ResourceBase<
  "AWS::EC2::NetworkInsightsPath",
  EC2NetworkInsightsPathProps,
  EC2NetworkInsightsPathAttribs
> {
  public static readonly Type = "AWS::EC2::NetworkInsightsPath";
  public static readonly AttributeNames: readonly (keyof EC2NetworkInsightsPathAttribs)[] =
    [
      "SourceArn",
      "NetworkInsightsPathId",
      "CreatedDate",
      "NetworkInsightsPathArn",
      "DestinationArn",
    ];
  constructor(
    logicalId: string,
    properties: EC2NetworkInsightsPathProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2NetworkInsightsPath.Type,
      EC2NetworkInsightsPath.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::NetworkInterface
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html | AWS::EC2::NetworkInterface}
 */
export interface EC2NetworkInterfaceProps {
  Description?: string;
  PrivateIpAddress?: string;
  PrivateIpAddresses?: any[];
  SecondaryPrivateIpAddressCount?: number;
  Ipv6PrefixCount?: number;
  Ipv4Prefixes?: any[];
  Ipv4PrefixCount?: number;
  GroupSet?: any[];
  Ipv6Addresses?: any[];
  Ipv6Prefixes?: any[];
  SubnetId: string;
  SourceDestCheck?: boolean;
  InterfaceType?: string;
  Ipv6AddressCount?: number;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EC2::NetworkInterface
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html | AWS::EC2::NetworkInterface}
 */
export interface EC2NetworkInterfaceAttribs {
  SecondaryPrivateIpAddresses?: any[];
  PrimaryPrivateIpAddress?: string;
  Id?: string;
}
/**
 * Resource class for AWS::EC2::NetworkInterface
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html | AWS::EC2::NetworkInterface}
 */
export class EC2NetworkInterface extends ResourceBase<
  "AWS::EC2::NetworkInterface",
  EC2NetworkInterfaceProps,
  EC2NetworkInterfaceAttribs
> {
  public static readonly Type = "AWS::EC2::NetworkInterface";
  public static readonly AttributeNames: readonly (keyof EC2NetworkInterfaceAttribs)[] =
    ["SecondaryPrivateIpAddresses", "PrimaryPrivateIpAddress", "Id"];
  constructor(
    logicalId: string,
    properties: EC2NetworkInterfaceProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2NetworkInterface.Type,
      EC2NetworkInterface.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::NetworkInterfaceAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterfaceattachment.html | AWS::EC2::NetworkInterfaceAttachment}
 */
export interface EC2NetworkInterfaceAttachmentProps {
  InstanceId: string;
  DeviceIndex: string;
  NetworkInterfaceId: string;
  DeleteOnTermination?: boolean;
}
/**
 * Attributes type definition for AWS::EC2::NetworkInterfaceAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterfaceattachment.html | AWS::EC2::NetworkInterfaceAttachment}
 */
export interface EC2NetworkInterfaceAttachmentAttribs {
  AttachmentId?: string;
}
/**
 * Resource class for AWS::EC2::NetworkInterfaceAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterfaceattachment.html | AWS::EC2::NetworkInterfaceAttachment}
 */
export class EC2NetworkInterfaceAttachment extends ResourceBase<
  "AWS::EC2::NetworkInterfaceAttachment",
  EC2NetworkInterfaceAttachmentProps,
  EC2NetworkInterfaceAttachmentAttribs
> {
  public static readonly Type = "AWS::EC2::NetworkInterfaceAttachment";
  public static readonly AttributeNames: readonly (keyof EC2NetworkInterfaceAttachmentAttribs)[] =
    ["AttachmentId"];
  constructor(
    logicalId: string,
    properties: EC2NetworkInterfaceAttachmentProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2NetworkInterfaceAttachment.Type,
      EC2NetworkInterfaceAttachment.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::NetworkInterfacePermission
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterfacepermission.html | AWS::EC2::NetworkInterfacePermission}
 */
export interface EC2NetworkInterfacePermissionProps {
  AwsAccountId: string;
  NetworkInterfaceId: string;
  Permission: string;
}
/**
 * Resource class for AWS::EC2::NetworkInterfacePermission
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterfacepermission.html | AWS::EC2::NetworkInterfacePermission}
 */
export class EC2NetworkInterfacePermission extends ResourceBase<
  "AWS::EC2::NetworkInterfacePermission",
  EC2NetworkInterfacePermissionProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::EC2::NetworkInterfacePermission";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: EC2NetworkInterfacePermissionProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2NetworkInterfacePermission.Type,
      EC2NetworkInterfacePermission.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::NetworkPerformanceMetricSubscription
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkperformancemetricsubscription.html | AWS::EC2::NetworkPerformanceMetricSubscription}
 */
export interface EC2NetworkPerformanceMetricSubscriptionProps {
  Destination: string;
  Statistic: string;
  Metric: string;
  Source: string;
}
/**
 * Resource class for AWS::EC2::NetworkPerformanceMetricSubscription
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkperformancemetricsubscription.html | AWS::EC2::NetworkPerformanceMetricSubscription}
 */
export class EC2NetworkPerformanceMetricSubscription extends ResourceBase<
  "AWS::EC2::NetworkPerformanceMetricSubscription",
  EC2NetworkPerformanceMetricSubscriptionProps,
  Record<string, never>
> {
  public static readonly Type =
    "AWS::EC2::NetworkPerformanceMetricSubscription";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: EC2NetworkPerformanceMetricSubscriptionProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2NetworkPerformanceMetricSubscription.Type,
      EC2NetworkPerformanceMetricSubscription.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::PlacementGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-placementgroup.html | AWS::EC2::PlacementGroup}
 */
export interface EC2PlacementGroupProps {
  SpreadLevel?: string;
  Strategy?: string;
  PartitionCount?: number;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EC2::PlacementGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-placementgroup.html | AWS::EC2::PlacementGroup}
 */
export interface EC2PlacementGroupAttribs {
  GroupName?: string;
}
/**
 * Resource class for AWS::EC2::PlacementGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-placementgroup.html | AWS::EC2::PlacementGroup}
 */
export class EC2PlacementGroup extends ResourceBase<
  "AWS::EC2::PlacementGroup",
  EC2PlacementGroupProps,
  EC2PlacementGroupAttribs
> {
  public static readonly Type = "AWS::EC2::PlacementGroup";
  public static readonly AttributeNames: readonly (keyof EC2PlacementGroupAttribs)[] =
    ["GroupName"];
  constructor(
    logicalId: string,
    properties: EC2PlacementGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2PlacementGroup.Type,
      EC2PlacementGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::PrefixList
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-prefixlist.html | AWS::EC2::PrefixList}
 */
export interface EC2PrefixListProps {
  MaxEntries: number;
  PrefixListName: string;
  Entries?: any[];
  AddressFamily: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EC2::PrefixList
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-prefixlist.html | AWS::EC2::PrefixList}
 */
export interface EC2PrefixListAttribs {
  OwnerId?: string;
  PrefixListId?: string;
  Version?: number;
  Arn?: string;
}
/**
 * Resource class for AWS::EC2::PrefixList
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-prefixlist.html | AWS::EC2::PrefixList}
 */
export class EC2PrefixList extends ResourceBase<
  "AWS::EC2::PrefixList",
  EC2PrefixListProps,
  EC2PrefixListAttribs
> {
  public static readonly Type = "AWS::EC2::PrefixList";
  public static readonly AttributeNames: readonly (keyof EC2PrefixListAttribs)[] =
    ["OwnerId", "PrefixListId", "Version", "Arn"];
  constructor(
    logicalId: string,
    properties: EC2PrefixListProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2PrefixList.Type,
      EC2PrefixList.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::Route
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-route.html | AWS::EC2::Route}
 */
export interface EC2RouteProps {
  DestinationIpv6CidrBlock?: string;
  RouteTableId: string;
  InstanceId?: string;
  LocalGatewayId?: string;
  CarrierGatewayId?: string;
  DestinationCidrBlock?: string;
  GatewayId?: string;
  NetworkInterfaceId?: string;
  VpcEndpointId?: string;
  TransitGatewayId?: string;
  VpcPeeringConnectionId?: string;
  EgressOnlyInternetGatewayId?: string;
  DestinationPrefixListId?: string;
  NatGatewayId?: string;
}
/**
 * Attributes type definition for AWS::EC2::Route
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-route.html | AWS::EC2::Route}
 */
export interface EC2RouteAttribs {
  CidrBlock?: string;
}
/**
 * Resource class for AWS::EC2::Route
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-route.html | AWS::EC2::Route}
 */
export class EC2Route extends ResourceBase<
  "AWS::EC2::Route",
  EC2RouteProps,
  EC2RouteAttribs
> {
  public static readonly Type = "AWS::EC2::Route";
  public static readonly AttributeNames: readonly (keyof EC2RouteAttribs)[] = [
    "CidrBlock",
  ];
  constructor(
    logicalId: string,
    properties: EC2RouteProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2Route.Type,
      EC2Route.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::RouteTable
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routetable.html | AWS::EC2::RouteTable}
 */
export interface EC2RouteTableProps {
  VpcId: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EC2::RouteTable
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routetable.html | AWS::EC2::RouteTable}
 */
export interface EC2RouteTableAttribs {
  RouteTableId?: string;
}
/**
 * Resource class for AWS::EC2::RouteTable
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routetable.html | AWS::EC2::RouteTable}
 */
export class EC2RouteTable extends ResourceBase<
  "AWS::EC2::RouteTable",
  EC2RouteTableProps,
  EC2RouteTableAttribs
> {
  public static readonly Type = "AWS::EC2::RouteTable";
  public static readonly AttributeNames: readonly (keyof EC2RouteTableAttribs)[] =
    ["RouteTableId"];
  constructor(
    logicalId: string,
    properties: EC2RouteTableProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2RouteTable.Type,
      EC2RouteTable.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::SecurityGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-security-group.html | AWS::EC2::SecurityGroup}
 */
export interface EC2SecurityGroupProps {
  GroupDescription: string;
  GroupName?: string;
  SecurityGroupEgress?: any[];
  SecurityGroupIngress?: any[];
  Tags?: Tag[];
  VpcId?: string;
}
/**
 * Attributes type definition for AWS::EC2::SecurityGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-security-group.html | AWS::EC2::SecurityGroup}
 */
export interface EC2SecurityGroupAttribs {
  GroupId?: string;
  VpcId?: string;
}
/**
 * Resource class for AWS::EC2::SecurityGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-security-group.html | AWS::EC2::SecurityGroup}
 */
export class EC2SecurityGroup extends ResourceBase<
  "AWS::EC2::SecurityGroup",
  EC2SecurityGroupProps,
  EC2SecurityGroupAttribs
> {
  public static readonly Type = "AWS::EC2::SecurityGroup";
  public static readonly AttributeNames: readonly (keyof EC2SecurityGroupAttribs)[] =
    ["GroupId", "VpcId"];
  constructor(
    logicalId: string,
    properties: EC2SecurityGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2SecurityGroup.Type,
      EC2SecurityGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::SecurityGroupEgress
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-security-group-egress.html | AWS::EC2::SecurityGroupEgress}
 */
export interface EC2SecurityGroupEgressProps {
  CidrIp?: string;
  CidrIpv6?: string;
  Description?: string;
  DestinationPrefixListId?: string;
  DestinationSecurityGroupId?: string;
  FromPort?: number;
  GroupId: string;
  IpProtocol: string;
  ToPort?: number;
}
/**
 * Resource class for AWS::EC2::SecurityGroupEgress
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-security-group-egress.html | AWS::EC2::SecurityGroupEgress}
 */
export class EC2SecurityGroupEgress extends ResourceBase<
  "AWS::EC2::SecurityGroupEgress",
  EC2SecurityGroupEgressProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::EC2::SecurityGroupEgress";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: EC2SecurityGroupEgressProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2SecurityGroupEgress.Type,
      EC2SecurityGroupEgress.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::SecurityGroupIngress
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-security-group-ingress.html | AWS::EC2::SecurityGroupIngress}
 */
export interface EC2SecurityGroupIngressProps {
  CidrIp?: string;
  CidrIpv6?: string;
  Description?: string;
  FromPort?: number;
  GroupId?: string;
  GroupName?: string;
  IpProtocol: string;
  SourcePrefixListId?: string;
  SourceSecurityGroupId?: string;
  SourceSecurityGroupName?: string;
  SourceSecurityGroupOwnerId?: string;
  ToPort?: number;
}
/**
 * Resource class for AWS::EC2::SecurityGroupIngress
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-security-group-ingress.html | AWS::EC2::SecurityGroupIngress}
 */
export class EC2SecurityGroupIngress extends ResourceBase<
  "AWS::EC2::SecurityGroupIngress",
  EC2SecurityGroupIngressProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::EC2::SecurityGroupIngress";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: EC2SecurityGroupIngressProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2SecurityGroupIngress.Type,
      EC2SecurityGroupIngress.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::SpotFleet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-spotfleet.html | AWS::EC2::SpotFleet}
 */
export interface EC2SpotFleetProps {
  SpotFleetRequestConfigData: EC2SpotFleetSpotFleetRequestConfigData;
}
/**
 * Attributes type definition for AWS::EC2::SpotFleet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-spotfleet.html | AWS::EC2::SpotFleet}
 */
export interface EC2SpotFleetAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::EC2::SpotFleet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-spotfleet.html | AWS::EC2::SpotFleet}
 */
export class EC2SpotFleet extends ResourceBase<
  "AWS::EC2::SpotFleet",
  EC2SpotFleetProps,
  EC2SpotFleetAttribs
> {
  public static readonly Type = "AWS::EC2::SpotFleet";
  public static readonly AttributeNames: readonly (keyof EC2SpotFleetAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: EC2SpotFleetProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2SpotFleet.Type,
      EC2SpotFleet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::Subnet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html | AWS::EC2::Subnet}
 */
export interface EC2SubnetProps {
  AssignIpv6AddressOnCreation?: boolean;
  MapPublicIpOnLaunch?: boolean;
  EnableDns64?: boolean;
  VpcId: string;
  AvailabilityZoneId?: string;
  OutpostArn?: string;
  PrivateDnsNameOptionsOnLaunch?: EC2SubnetPrivateDnsNameOptionsOnLaunch;
  AvailabilityZone?: string;
  CidrBlock?: string;
  Ipv6Native?: boolean;
  Ipv6CidrBlock?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EC2::Subnet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html | AWS::EC2::Subnet}
 */
export interface EC2SubnetAttribs {
  VpcId?: string;
  NetworkAclAssociationId?: string;
  AvailabilityZoneId?: string;
  OutpostArn?: string;
  AvailabilityZone?: string;
  CidrBlock?: string;
  SubnetId?: string;
  Ipv6CidrBlocks?: any[];
}
/**
 * Resource class for AWS::EC2::Subnet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html | AWS::EC2::Subnet}
 */
export class EC2Subnet extends ResourceBase<
  "AWS::EC2::Subnet",
  EC2SubnetProps,
  EC2SubnetAttribs
> {
  public static readonly Type = "AWS::EC2::Subnet";
  public static readonly AttributeNames: readonly (keyof EC2SubnetAttribs)[] = [
    "VpcId",
    "NetworkAclAssociationId",
    "AvailabilityZoneId",
    "OutpostArn",
    "AvailabilityZone",
    "CidrBlock",
    "SubnetId",
    "Ipv6CidrBlocks",
  ];
  constructor(
    logicalId: string,
    properties: EC2SubnetProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2Subnet.Type,
      EC2Subnet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::SubnetCidrBlock
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnetcidrblock.html | AWS::EC2::SubnetCidrBlock}
 */
export interface EC2SubnetCidrBlockProps {
  SubnetId: string;
  Ipv6CidrBlock: string;
}
/**
 * Attributes type definition for AWS::EC2::SubnetCidrBlock
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnetcidrblock.html | AWS::EC2::SubnetCidrBlock}
 */
export interface EC2SubnetCidrBlockAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::EC2::SubnetCidrBlock
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnetcidrblock.html | AWS::EC2::SubnetCidrBlock}
 */
export class EC2SubnetCidrBlock extends ResourceBase<
  "AWS::EC2::SubnetCidrBlock",
  EC2SubnetCidrBlockProps,
  EC2SubnetCidrBlockAttribs
> {
  public static readonly Type = "AWS::EC2::SubnetCidrBlock";
  public static readonly AttributeNames: readonly (keyof EC2SubnetCidrBlockAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: EC2SubnetCidrBlockProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2SubnetCidrBlock.Type,
      EC2SubnetCidrBlock.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::SubnetNetworkAclAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet-network-acl-assoc.html | AWS::EC2::SubnetNetworkAclAssociation}
 */
export interface EC2SubnetNetworkAclAssociationProps {
  NetworkAclId: string;
  SubnetId: string;
}
/**
 * Attributes type definition for AWS::EC2::SubnetNetworkAclAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet-network-acl-assoc.html | AWS::EC2::SubnetNetworkAclAssociation}
 */
export interface EC2SubnetNetworkAclAssociationAttribs {
  AssociationId?: string;
}
/**
 * Resource class for AWS::EC2::SubnetNetworkAclAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet-network-acl-assoc.html | AWS::EC2::SubnetNetworkAclAssociation}
 */
export class EC2SubnetNetworkAclAssociation extends ResourceBase<
  "AWS::EC2::SubnetNetworkAclAssociation",
  EC2SubnetNetworkAclAssociationProps,
  EC2SubnetNetworkAclAssociationAttribs
> {
  public static readonly Type = "AWS::EC2::SubnetNetworkAclAssociation";
  public static readonly AttributeNames: readonly (keyof EC2SubnetNetworkAclAssociationAttribs)[] =
    ["AssociationId"];
  constructor(
    logicalId: string,
    properties: EC2SubnetNetworkAclAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2SubnetNetworkAclAssociation.Type,
      EC2SubnetNetworkAclAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::SubnetRouteTableAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnetroutetableassociation.html | AWS::EC2::SubnetRouteTableAssociation}
 */
export interface EC2SubnetRouteTableAssociationProps {
  RouteTableId: string;
  SubnetId: string;
}
/**
 * Attributes type definition for AWS::EC2::SubnetRouteTableAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnetroutetableassociation.html | AWS::EC2::SubnetRouteTableAssociation}
 */
export interface EC2SubnetRouteTableAssociationAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::EC2::SubnetRouteTableAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnetroutetableassociation.html | AWS::EC2::SubnetRouteTableAssociation}
 */
export class EC2SubnetRouteTableAssociation extends ResourceBase<
  "AWS::EC2::SubnetRouteTableAssociation",
  EC2SubnetRouteTableAssociationProps,
  EC2SubnetRouteTableAssociationAttribs
> {
  public static readonly Type = "AWS::EC2::SubnetRouteTableAssociation";
  public static readonly AttributeNames: readonly (keyof EC2SubnetRouteTableAssociationAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: EC2SubnetRouteTableAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2SubnetRouteTableAssociation.Type,
      EC2SubnetRouteTableAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::TrafficMirrorFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrorfilter.html | AWS::EC2::TrafficMirrorFilter}
 */
export interface EC2TrafficMirrorFilterProps {
  Description?: string;
  NetworkServices?: any[];
  Tags?: Tag[];
}
/**
 * Resource class for AWS::EC2::TrafficMirrorFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrorfilter.html | AWS::EC2::TrafficMirrorFilter}
 */
export class EC2TrafficMirrorFilter extends ResourceBase<
  "AWS::EC2::TrafficMirrorFilter",
  EC2TrafficMirrorFilterProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::EC2::TrafficMirrorFilter";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: EC2TrafficMirrorFilterProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2TrafficMirrorFilter.Type,
      EC2TrafficMirrorFilter.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::TrafficMirrorFilterRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrorfilterrule.html | AWS::EC2::TrafficMirrorFilterRule}
 */
export interface EC2TrafficMirrorFilterRuleProps {
  DestinationPortRange?: EC2TrafficMirrorFilterRuleTrafficMirrorPortRange;
  Description?: string;
  SourcePortRange?: EC2TrafficMirrorFilterRuleTrafficMirrorPortRange;
  RuleAction: string;
  SourceCidrBlock: string;
  RuleNumber: number;
  DestinationCidrBlock: string;
  TrafficMirrorFilterId: string;
  TrafficDirection: string;
  Protocol?: number;
}
/**
 * Resource class for AWS::EC2::TrafficMirrorFilterRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrorfilterrule.html | AWS::EC2::TrafficMirrorFilterRule}
 */
export class EC2TrafficMirrorFilterRule extends ResourceBase<
  "AWS::EC2::TrafficMirrorFilterRule",
  EC2TrafficMirrorFilterRuleProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::EC2::TrafficMirrorFilterRule";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: EC2TrafficMirrorFilterRuleProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2TrafficMirrorFilterRule.Type,
      EC2TrafficMirrorFilterRule.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::TrafficMirrorSession
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrorsession.html | AWS::EC2::TrafficMirrorSession}
 */
export interface EC2TrafficMirrorSessionProps {
  TrafficMirrorTargetId: string;
  Description?: string;
  SessionNumber: number;
  VirtualNetworkId?: number;
  PacketLength?: number;
  NetworkInterfaceId: string;
  TrafficMirrorFilterId: string;
  Tags?: Tag[];
}
/**
 * Resource class for AWS::EC2::TrafficMirrorSession
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrorsession.html | AWS::EC2::TrafficMirrorSession}
 */
export class EC2TrafficMirrorSession extends ResourceBase<
  "AWS::EC2::TrafficMirrorSession",
  EC2TrafficMirrorSessionProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::EC2::TrafficMirrorSession";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: EC2TrafficMirrorSessionProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2TrafficMirrorSession.Type,
      EC2TrafficMirrorSession.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::TrafficMirrorTarget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrortarget.html | AWS::EC2::TrafficMirrorTarget}
 */
export interface EC2TrafficMirrorTargetProps {
  NetworkLoadBalancerArn?: string;
  Description?: string;
  NetworkInterfaceId?: string;
  GatewayLoadBalancerEndpointId?: string;
  Tags?: Tag[];
}
/**
 * Resource class for AWS::EC2::TrafficMirrorTarget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrortarget.html | AWS::EC2::TrafficMirrorTarget}
 */
export class EC2TrafficMirrorTarget extends ResourceBase<
  "AWS::EC2::TrafficMirrorTarget",
  EC2TrafficMirrorTargetProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::EC2::TrafficMirrorTarget";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: EC2TrafficMirrorTargetProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2TrafficMirrorTarget.Type,
      EC2TrafficMirrorTarget.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::TransitGateway
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgateway.html | AWS::EC2::TransitGateway}
 */
export interface EC2TransitGatewayProps {
  DefaultRouteTablePropagation?: string;
  Description?: string;
  TransitGatewayCidrBlocks?: any[];
  AssociationDefaultRouteTableId?: string;
  AutoAcceptSharedAttachments?: string;
  PropagationDefaultRouteTableId?: string;
  DefaultRouteTableAssociation?: string;
  VpnEcmpSupport?: string;
  DnsSupport?: string;
  MulticastSupport?: string;
  AmazonSideAsn?: number;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EC2::TransitGateway
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgateway.html | AWS::EC2::TransitGateway}
 */
export interface EC2TransitGatewayAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::EC2::TransitGateway
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgateway.html | AWS::EC2::TransitGateway}
 */
export class EC2TransitGateway extends ResourceBase<
  "AWS::EC2::TransitGateway",
  EC2TransitGatewayProps,
  EC2TransitGatewayAttribs
> {
  public static readonly Type = "AWS::EC2::TransitGateway";
  public static readonly AttributeNames: readonly (keyof EC2TransitGatewayAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: EC2TransitGatewayProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2TransitGateway.Type,
      EC2TransitGateway.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::TransitGatewayAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayattachment.html | AWS::EC2::TransitGatewayAttachment}
 */
export interface EC2TransitGatewayAttachmentProps {
  Options?: EC2TransitGatewayAttachmentOptions;
  TransitGatewayId: string;
  VpcId: string;
  SubnetIds: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EC2::TransitGatewayAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayattachment.html | AWS::EC2::TransitGatewayAttachment}
 */
export interface EC2TransitGatewayAttachmentAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::EC2::TransitGatewayAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayattachment.html | AWS::EC2::TransitGatewayAttachment}
 */
export class EC2TransitGatewayAttachment extends ResourceBase<
  "AWS::EC2::TransitGatewayAttachment",
  EC2TransitGatewayAttachmentProps,
  EC2TransitGatewayAttachmentAttribs
> {
  public static readonly Type = "AWS::EC2::TransitGatewayAttachment";
  public static readonly AttributeNames: readonly (keyof EC2TransitGatewayAttachmentAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: EC2TransitGatewayAttachmentProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2TransitGatewayAttachment.Type,
      EC2TransitGatewayAttachment.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::TransitGatewayConnect
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayconnect.html | AWS::EC2::TransitGatewayConnect}
 */
export interface EC2TransitGatewayConnectProps {
  Options: EC2TransitGatewayConnectTransitGatewayConnectOptions;
  TransportTransitGatewayAttachmentId: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EC2::TransitGatewayConnect
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayconnect.html | AWS::EC2::TransitGatewayConnect}
 */
export interface EC2TransitGatewayConnectAttribs {
  TransitGatewayId?: string;
  State?: string;
  CreationTime?: string;
  TransitGatewayAttachmentId?: string;
}
/**
 * Resource class for AWS::EC2::TransitGatewayConnect
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayconnect.html | AWS::EC2::TransitGatewayConnect}
 */
export class EC2TransitGatewayConnect extends ResourceBase<
  "AWS::EC2::TransitGatewayConnect",
  EC2TransitGatewayConnectProps,
  EC2TransitGatewayConnectAttribs
> {
  public static readonly Type = "AWS::EC2::TransitGatewayConnect";
  public static readonly AttributeNames: readonly (keyof EC2TransitGatewayConnectAttribs)[] =
    ["TransitGatewayId", "State", "CreationTime", "TransitGatewayAttachmentId"];
  constructor(
    logicalId: string,
    properties: EC2TransitGatewayConnectProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2TransitGatewayConnect.Type,
      EC2TransitGatewayConnect.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::TransitGatewayMulticastDomain
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomain.html | AWS::EC2::TransitGatewayMulticastDomain}
 */
export interface EC2TransitGatewayMulticastDomainProps {
  Options?: EC2TransitGatewayMulticastDomainOptions;
  TransitGatewayId: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EC2::TransitGatewayMulticastDomain
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomain.html | AWS::EC2::TransitGatewayMulticastDomain}
 */
export interface EC2TransitGatewayMulticastDomainAttribs {
  TransitGatewayMulticastDomainArn?: string;
  State?: string;
  CreationTime?: string;
  TransitGatewayMulticastDomainId?: string;
}
/**
 * Resource class for AWS::EC2::TransitGatewayMulticastDomain
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomain.html | AWS::EC2::TransitGatewayMulticastDomain}
 */
export class EC2TransitGatewayMulticastDomain extends ResourceBase<
  "AWS::EC2::TransitGatewayMulticastDomain",
  EC2TransitGatewayMulticastDomainProps,
  EC2TransitGatewayMulticastDomainAttribs
> {
  public static readonly Type = "AWS::EC2::TransitGatewayMulticastDomain";
  public static readonly AttributeNames: readonly (keyof EC2TransitGatewayMulticastDomainAttribs)[] =
    [
      "TransitGatewayMulticastDomainArn",
      "State",
      "CreationTime",
      "TransitGatewayMulticastDomainId",
    ];
  constructor(
    logicalId: string,
    properties: EC2TransitGatewayMulticastDomainProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2TransitGatewayMulticastDomain.Type,
      EC2TransitGatewayMulticastDomain.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::TransitGatewayMulticastDomainAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomainassociation.html | AWS::EC2::TransitGatewayMulticastDomainAssociation}
 */
export interface EC2TransitGatewayMulticastDomainAssociationProps {
  TransitGatewayMulticastDomainId: string;
  SubnetId: string;
  TransitGatewayAttachmentId: string;
}
/**
 * Attributes type definition for AWS::EC2::TransitGatewayMulticastDomainAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomainassociation.html | AWS::EC2::TransitGatewayMulticastDomainAssociation}
 */
export interface EC2TransitGatewayMulticastDomainAssociationAttribs {
  ResourceId?: string;
  State?: string;
  ResourceType?: string;
}
/**
 * Resource class for AWS::EC2::TransitGatewayMulticastDomainAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomainassociation.html | AWS::EC2::TransitGatewayMulticastDomainAssociation}
 */
export class EC2TransitGatewayMulticastDomainAssociation extends ResourceBase<
  "AWS::EC2::TransitGatewayMulticastDomainAssociation",
  EC2TransitGatewayMulticastDomainAssociationProps,
  EC2TransitGatewayMulticastDomainAssociationAttribs
> {
  public static readonly Type =
    "AWS::EC2::TransitGatewayMulticastDomainAssociation";
  public static readonly AttributeNames: readonly (keyof EC2TransitGatewayMulticastDomainAssociationAttribs)[] =
    ["ResourceId", "State", "ResourceType"];
  constructor(
    logicalId: string,
    properties: EC2TransitGatewayMulticastDomainAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2TransitGatewayMulticastDomainAssociation.Type,
      EC2TransitGatewayMulticastDomainAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::TransitGatewayMulticastGroupMember
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastgroupmember.html | AWS::EC2::TransitGatewayMulticastGroupMember}
 */
export interface EC2TransitGatewayMulticastGroupMemberProps {
  TransitGatewayMulticastDomainId: string;
  NetworkInterfaceId: string;
  GroupIpAddress: string;
}
/**
 * Attributes type definition for AWS::EC2::TransitGatewayMulticastGroupMember
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastgroupmember.html | AWS::EC2::TransitGatewayMulticastGroupMember}
 */
export interface EC2TransitGatewayMulticastGroupMemberAttribs {
  GroupMember?: boolean;
  ResourceId?: string;
  MemberType?: string;
  SourceType?: string;
  ResourceType?: string;
  SubnetId?: string;
  GroupSource?: boolean;
  TransitGatewayAttachmentId?: string;
}
/**
 * Resource class for AWS::EC2::TransitGatewayMulticastGroupMember
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastgroupmember.html | AWS::EC2::TransitGatewayMulticastGroupMember}
 */
export class EC2TransitGatewayMulticastGroupMember extends ResourceBase<
  "AWS::EC2::TransitGatewayMulticastGroupMember",
  EC2TransitGatewayMulticastGroupMemberProps,
  EC2TransitGatewayMulticastGroupMemberAttribs
> {
  public static readonly Type = "AWS::EC2::TransitGatewayMulticastGroupMember";
  public static readonly AttributeNames: readonly (keyof EC2TransitGatewayMulticastGroupMemberAttribs)[] =
    [
      "GroupMember",
      "ResourceId",
      "MemberType",
      "SourceType",
      "ResourceType",
      "SubnetId",
      "GroupSource",
      "TransitGatewayAttachmentId",
    ];
  constructor(
    logicalId: string,
    properties: EC2TransitGatewayMulticastGroupMemberProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2TransitGatewayMulticastGroupMember.Type,
      EC2TransitGatewayMulticastGroupMember.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::TransitGatewayMulticastGroupSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastgroupsource.html | AWS::EC2::TransitGatewayMulticastGroupSource}
 */
export interface EC2TransitGatewayMulticastGroupSourceProps {
  TransitGatewayMulticastDomainId: string;
  NetworkInterfaceId: string;
  GroupIpAddress: string;
}
/**
 * Attributes type definition for AWS::EC2::TransitGatewayMulticastGroupSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastgroupsource.html | AWS::EC2::TransitGatewayMulticastGroupSource}
 */
export interface EC2TransitGatewayMulticastGroupSourceAttribs {
  GroupMember?: boolean;
  ResourceId?: string;
  MemberType?: string;
  SourceType?: string;
  ResourceType?: string;
  SubnetId?: string;
  GroupSource?: boolean;
  TransitGatewayAttachmentId?: string;
}
/**
 * Resource class for AWS::EC2::TransitGatewayMulticastGroupSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastgroupsource.html | AWS::EC2::TransitGatewayMulticastGroupSource}
 */
export class EC2TransitGatewayMulticastGroupSource extends ResourceBase<
  "AWS::EC2::TransitGatewayMulticastGroupSource",
  EC2TransitGatewayMulticastGroupSourceProps,
  EC2TransitGatewayMulticastGroupSourceAttribs
> {
  public static readonly Type = "AWS::EC2::TransitGatewayMulticastGroupSource";
  public static readonly AttributeNames: readonly (keyof EC2TransitGatewayMulticastGroupSourceAttribs)[] =
    [
      "GroupMember",
      "ResourceId",
      "MemberType",
      "SourceType",
      "ResourceType",
      "SubnetId",
      "GroupSource",
      "TransitGatewayAttachmentId",
    ];
  constructor(
    logicalId: string,
    properties: EC2TransitGatewayMulticastGroupSourceProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2TransitGatewayMulticastGroupSource.Type,
      EC2TransitGatewayMulticastGroupSource.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::TransitGatewayPeeringAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaypeeringattachment.html | AWS::EC2::TransitGatewayPeeringAttachment}
 */
export interface EC2TransitGatewayPeeringAttachmentProps {
  TransitGatewayId: string;
  PeerTransitGatewayId: string;
  PeerAccountId: string;
  PeerRegion: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EC2::TransitGatewayPeeringAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaypeeringattachment.html | AWS::EC2::TransitGatewayPeeringAttachment}
 */
export interface EC2TransitGatewayPeeringAttachmentAttribs {
  Status?: EC2TransitGatewayPeeringAttachmentPeeringAttachmentStatus;
  State?: string;
  CreationTime?: string;
  "Status.Message"?: string;
  "Status.Code"?: string;
  TransitGatewayAttachmentId?: string;
}
/**
 * Resource class for AWS::EC2::TransitGatewayPeeringAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaypeeringattachment.html | AWS::EC2::TransitGatewayPeeringAttachment}
 */
export class EC2TransitGatewayPeeringAttachment extends ResourceBase<
  "AWS::EC2::TransitGatewayPeeringAttachment",
  EC2TransitGatewayPeeringAttachmentProps,
  EC2TransitGatewayPeeringAttachmentAttribs
> {
  public static readonly Type = "AWS::EC2::TransitGatewayPeeringAttachment";
  public static readonly AttributeNames: readonly (keyof EC2TransitGatewayPeeringAttachmentAttribs)[] =
    [
      "Status",
      "State",
      "CreationTime",
      "Status.Message",
      "Status.Code",
      "TransitGatewayAttachmentId",
    ];
  constructor(
    logicalId: string,
    properties: EC2TransitGatewayPeeringAttachmentProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2TransitGatewayPeeringAttachment.Type,
      EC2TransitGatewayPeeringAttachment.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::TransitGatewayRoute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroute.html | AWS::EC2::TransitGatewayRoute}
 */
export interface EC2TransitGatewayRouteProps {
  TransitGatewayRouteTableId: string;
  DestinationCidrBlock?: string;
  Blackhole?: boolean;
  TransitGatewayAttachmentId?: string;
}
/**
 * Resource class for AWS::EC2::TransitGatewayRoute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroute.html | AWS::EC2::TransitGatewayRoute}
 */
export class EC2TransitGatewayRoute extends ResourceBase<
  "AWS::EC2::TransitGatewayRoute",
  EC2TransitGatewayRouteProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::EC2::TransitGatewayRoute";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: EC2TransitGatewayRouteProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2TransitGatewayRoute.Type,
      EC2TransitGatewayRoute.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::TransitGatewayRouteTable
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetable.html | AWS::EC2::TransitGatewayRouteTable}
 */
export interface EC2TransitGatewayRouteTableProps {
  TransitGatewayId: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EC2::TransitGatewayRouteTable
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetable.html | AWS::EC2::TransitGatewayRouteTable}
 */
export interface EC2TransitGatewayRouteTableAttribs {
  TransitGatewayRouteTableId?: string;
}
/**
 * Resource class for AWS::EC2::TransitGatewayRouteTable
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetable.html | AWS::EC2::TransitGatewayRouteTable}
 */
export class EC2TransitGatewayRouteTable extends ResourceBase<
  "AWS::EC2::TransitGatewayRouteTable",
  EC2TransitGatewayRouteTableProps,
  EC2TransitGatewayRouteTableAttribs
> {
  public static readonly Type = "AWS::EC2::TransitGatewayRouteTable";
  public static readonly AttributeNames: readonly (keyof EC2TransitGatewayRouteTableAttribs)[] =
    ["TransitGatewayRouteTableId"];
  constructor(
    logicalId: string,
    properties: EC2TransitGatewayRouteTableProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2TransitGatewayRouteTable.Type,
      EC2TransitGatewayRouteTable.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::TransitGatewayRouteTableAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetableassociation.html | AWS::EC2::TransitGatewayRouteTableAssociation}
 */
export interface EC2TransitGatewayRouteTableAssociationProps {
  TransitGatewayRouteTableId: string;
  TransitGatewayAttachmentId: string;
}
/**
 * Resource class for AWS::EC2::TransitGatewayRouteTableAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetableassociation.html | AWS::EC2::TransitGatewayRouteTableAssociation}
 */
export class EC2TransitGatewayRouteTableAssociation extends ResourceBase<
  "AWS::EC2::TransitGatewayRouteTableAssociation",
  EC2TransitGatewayRouteTableAssociationProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::EC2::TransitGatewayRouteTableAssociation";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: EC2TransitGatewayRouteTableAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2TransitGatewayRouteTableAssociation.Type,
      EC2TransitGatewayRouteTableAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::TransitGatewayRouteTablePropagation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetablepropagation.html | AWS::EC2::TransitGatewayRouteTablePropagation}
 */
export interface EC2TransitGatewayRouteTablePropagationProps {
  TransitGatewayRouteTableId: string;
  TransitGatewayAttachmentId: string;
}
/**
 * Resource class for AWS::EC2::TransitGatewayRouteTablePropagation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetablepropagation.html | AWS::EC2::TransitGatewayRouteTablePropagation}
 */
export class EC2TransitGatewayRouteTablePropagation extends ResourceBase<
  "AWS::EC2::TransitGatewayRouteTablePropagation",
  EC2TransitGatewayRouteTablePropagationProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::EC2::TransitGatewayRouteTablePropagation";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: EC2TransitGatewayRouteTablePropagationProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2TransitGatewayRouteTablePropagation.Type,
      EC2TransitGatewayRouteTablePropagation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::TransitGatewayVpcAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayvpcattachment.html | AWS::EC2::TransitGatewayVpcAttachment}
 */
export interface EC2TransitGatewayVpcAttachmentProps {
  Options?: EC2TransitGatewayVpcAttachmentOptions;
  TransitGatewayId: string;
  VpcId: string;
  RemoveSubnetIds?: any[];
  SubnetIds: any[];
  AddSubnetIds?: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EC2::TransitGatewayVpcAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayvpcattachment.html | AWS::EC2::TransitGatewayVpcAttachment}
 */
export interface EC2TransitGatewayVpcAttachmentAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::EC2::TransitGatewayVpcAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayvpcattachment.html | AWS::EC2::TransitGatewayVpcAttachment}
 */
export class EC2TransitGatewayVpcAttachment extends ResourceBase<
  "AWS::EC2::TransitGatewayVpcAttachment",
  EC2TransitGatewayVpcAttachmentProps,
  EC2TransitGatewayVpcAttachmentAttribs
> {
  public static readonly Type = "AWS::EC2::TransitGatewayVpcAttachment";
  public static readonly AttributeNames: readonly (keyof EC2TransitGatewayVpcAttachmentAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: EC2TransitGatewayVpcAttachmentProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2TransitGatewayVpcAttachment.Type,
      EC2TransitGatewayVpcAttachment.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::VPC
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc.html | AWS::EC2::VPC}
 */
export interface EC2VPCProps {
  InstanceTenancy?: string;
  Ipv4NetmaskLength?: number;
  CidrBlock?: string;
  Ipv4IpamPoolId?: string;
  EnableDnsSupport?: boolean;
  EnableDnsHostnames?: boolean;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EC2::VPC
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc.html | AWS::EC2::VPC}
 */
export interface EC2VPCAttribs {
  VpcId?: string;
  CidrBlockAssociations?: any[];
  CidrBlock?: string;
  DefaultNetworkAcl?: string;
  Ipv6CidrBlocks?: any[];
  DefaultSecurityGroup?: string;
}
/**
 * Resource class for AWS::EC2::VPC
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc.html | AWS::EC2::VPC}
 */
export class EC2VPC extends ResourceBase<
  "AWS::EC2::VPC",
  EC2VPCProps,
  EC2VPCAttribs
> {
  public static readonly Type = "AWS::EC2::VPC";
  public static readonly AttributeNames: readonly (keyof EC2VPCAttribs)[] = [
    "VpcId",
    "CidrBlockAssociations",
    "CidrBlock",
    "DefaultNetworkAcl",
    "Ipv6CidrBlocks",
    "DefaultSecurityGroup",
  ];
  constructor(
    logicalId: string,
    properties: EC2VPCProps,
    options?: ResourceOptions,
  ) {
    super(EC2VPC.Type, EC2VPC.AttributeNames, logicalId, properties, options);
  }
}
/**
 * Type definition for AWS::EC2::VPCCidrBlock
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpccidrblock.html | AWS::EC2::VPCCidrBlock}
 */
export interface EC2VPCCidrBlockProps {
  AmazonProvidedIpv6CidrBlock?: boolean;
  CidrBlock?: string;
  Ipv4IpamPoolId?: string;
  Ipv4NetmaskLength?: number;
  Ipv6CidrBlock?: string;
  Ipv6IpamPoolId?: string;
  Ipv6NetmaskLength?: number;
  Ipv6Pool?: string;
  VpcId: string;
}
/**
 * Resource class for AWS::EC2::VPCCidrBlock
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpccidrblock.html | AWS::EC2::VPCCidrBlock}
 */
export class EC2VPCCidrBlock extends ResourceBase<
  "AWS::EC2::VPCCidrBlock",
  EC2VPCCidrBlockProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::EC2::VPCCidrBlock";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: EC2VPCCidrBlockProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2VPCCidrBlock.Type,
      EC2VPCCidrBlock.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::VPCDHCPOptionsAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcdhcpoptionsassociation.html | AWS::EC2::VPCDHCPOptionsAssociation}
 */
export interface EC2VPCDHCPOptionsAssociationProps {
  VpcId: string;
  DhcpOptionsId: string;
}
/**
 * Resource class for AWS::EC2::VPCDHCPOptionsAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcdhcpoptionsassociation.html | AWS::EC2::VPCDHCPOptionsAssociation}
 */
export class EC2VPCDHCPOptionsAssociation extends ResourceBase<
  "AWS::EC2::VPCDHCPOptionsAssociation",
  EC2VPCDHCPOptionsAssociationProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::EC2::VPCDHCPOptionsAssociation";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: EC2VPCDHCPOptionsAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2VPCDHCPOptionsAssociation.Type,
      EC2VPCDHCPOptionsAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::VPCEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpoint.html | AWS::EC2::VPCEndpoint}
 */
export interface EC2VPCEndpointProps {
  PrivateDnsEnabled?: boolean;
  VpcId: string;
  RouteTableIds?: any[];
  ServiceName: string;
  PolicyDocument?: object;
  VpcEndpointType?: string;
  SecurityGroupIds?: any[];
  SubnetIds?: any[];
}
/**
 * Attributes type definition for AWS::EC2::VPCEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpoint.html | AWS::EC2::VPCEndpoint}
 */
export interface EC2VPCEndpointAttribs {
  CreationTimestamp?: string;
  NetworkInterfaceIds?: any[];
  Id?: string;
  DnsEntries?: any[];
}
/**
 * Resource class for AWS::EC2::VPCEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpoint.html | AWS::EC2::VPCEndpoint}
 */
export class EC2VPCEndpoint extends ResourceBase<
  "AWS::EC2::VPCEndpoint",
  EC2VPCEndpointProps,
  EC2VPCEndpointAttribs
> {
  public static readonly Type = "AWS::EC2::VPCEndpoint";
  public static readonly AttributeNames: readonly (keyof EC2VPCEndpointAttribs)[] =
    ["CreationTimestamp", "NetworkInterfaceIds", "Id", "DnsEntries"];
  constructor(
    logicalId: string,
    properties: EC2VPCEndpointProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2VPCEndpoint.Type,
      EC2VPCEndpoint.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::VPCEndpointConnectionNotification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointconnectionnotification.html | AWS::EC2::VPCEndpointConnectionNotification}
 */
export interface EC2VPCEndpointConnectionNotificationProps {
  ConnectionEvents: any[];
  VPCEndpointId?: string;
  ConnectionNotificationArn: string;
  ServiceId?: string;
}
/**
 * Attributes type definition for AWS::EC2::VPCEndpointConnectionNotification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointconnectionnotification.html | AWS::EC2::VPCEndpointConnectionNotification}
 */
export interface EC2VPCEndpointConnectionNotificationAttribs {
  VPCEndpointConnectionNotificationId?: string;
}
/**
 * Resource class for AWS::EC2::VPCEndpointConnectionNotification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointconnectionnotification.html | AWS::EC2::VPCEndpointConnectionNotification}
 */
export class EC2VPCEndpointConnectionNotification extends ResourceBase<
  "AWS::EC2::VPCEndpointConnectionNotification",
  EC2VPCEndpointConnectionNotificationProps,
  EC2VPCEndpointConnectionNotificationAttribs
> {
  public static readonly Type = "AWS::EC2::VPCEndpointConnectionNotification";
  public static readonly AttributeNames: readonly (keyof EC2VPCEndpointConnectionNotificationAttribs)[] =
    ["VPCEndpointConnectionNotificationId"];
  constructor(
    logicalId: string,
    properties: EC2VPCEndpointConnectionNotificationProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2VPCEndpointConnectionNotification.Type,
      EC2VPCEndpointConnectionNotification.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::VPCEndpointService
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointservice.html | AWS::EC2::VPCEndpointService}
 */
export interface EC2VPCEndpointServiceProps {
  NetworkLoadBalancerArns?: any[];
  PayerResponsibility?: string;
  AcceptanceRequired?: boolean;
  ContributorInsightsEnabled?: boolean;
  GatewayLoadBalancerArns?: any[];
}
/**
 * Attributes type definition for AWS::EC2::VPCEndpointService
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointservice.html | AWS::EC2::VPCEndpointService}
 */
export interface EC2VPCEndpointServiceAttribs {
  ServiceId?: string;
}
/**
 * Resource class for AWS::EC2::VPCEndpointService
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointservice.html | AWS::EC2::VPCEndpointService}
 */
export class EC2VPCEndpointService extends ResourceBase<
  "AWS::EC2::VPCEndpointService",
  EC2VPCEndpointServiceProps,
  EC2VPCEndpointServiceAttribs
> {
  public static readonly Type = "AWS::EC2::VPCEndpointService";
  public static readonly AttributeNames: readonly (keyof EC2VPCEndpointServiceAttribs)[] =
    ["ServiceId"];
  constructor(
    logicalId: string,
    properties: EC2VPCEndpointServiceProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2VPCEndpointService.Type,
      EC2VPCEndpointService.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::VPCEndpointServicePermissions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointservicepermissions.html | AWS::EC2::VPCEndpointServicePermissions}
 */
export interface EC2VPCEndpointServicePermissionsProps {
  AllowedPrincipals?: any[];
  ServiceId: string;
}
/**
 * Resource class for AWS::EC2::VPCEndpointServicePermissions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointservicepermissions.html | AWS::EC2::VPCEndpointServicePermissions}
 */
export class EC2VPCEndpointServicePermissions extends ResourceBase<
  "AWS::EC2::VPCEndpointServicePermissions",
  EC2VPCEndpointServicePermissionsProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::EC2::VPCEndpointServicePermissions";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: EC2VPCEndpointServicePermissionsProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2VPCEndpointServicePermissions.Type,
      EC2VPCEndpointServicePermissions.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::VPCGatewayAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc-gateway-attachment.html | AWS::EC2::VPCGatewayAttachment}
 */
export interface EC2VPCGatewayAttachmentProps {
  InternetGatewayId?: string;
  VpcId: string;
  VpnGatewayId?: string;
}
/**
 * Resource class for AWS::EC2::VPCGatewayAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc-gateway-attachment.html | AWS::EC2::VPCGatewayAttachment}
 */
export class EC2VPCGatewayAttachment extends ResourceBase<
  "AWS::EC2::VPCGatewayAttachment",
  EC2VPCGatewayAttachmentProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::EC2::VPCGatewayAttachment";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: EC2VPCGatewayAttachmentProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2VPCGatewayAttachment.Type,
      EC2VPCGatewayAttachment.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::VPCPeeringConnection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcpeeringconnection.html | AWS::EC2::VPCPeeringConnection}
 */
export interface EC2VPCPeeringConnectionProps {
  PeerRoleArn?: string;
  VpcId: string;
  PeerVpcId: string;
  PeerRegion?: string;
  PeerOwnerId?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EC2::VPCPeeringConnection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcpeeringconnection.html | AWS::EC2::VPCPeeringConnection}
 */
export interface EC2VPCPeeringConnectionAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::EC2::VPCPeeringConnection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcpeeringconnection.html | AWS::EC2::VPCPeeringConnection}
 */
export class EC2VPCPeeringConnection extends ResourceBase<
  "AWS::EC2::VPCPeeringConnection",
  EC2VPCPeeringConnectionProps,
  EC2VPCPeeringConnectionAttribs
> {
  public static readonly Type = "AWS::EC2::VPCPeeringConnection";
  public static readonly AttributeNames: readonly (keyof EC2VPCPeeringConnectionAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: EC2VPCPeeringConnectionProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2VPCPeeringConnection.Type,
      EC2VPCPeeringConnection.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::VPNConnection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html | AWS::EC2::VPNConnection}
 */
export interface EC2VPNConnectionProps {
  TransitGatewayId?: string;
  Type: string;
  VpnTunnelOptionsSpecifications?: any[];
  CustomerGatewayId: string;
  VpnGatewayId?: string;
  StaticRoutesOnly?: boolean;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EC2::VPNConnection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html | AWS::EC2::VPNConnection}
 */
export interface EC2VPNConnectionAttribs {
  VpnConnectionId?: string;
}
/**
 * Resource class for AWS::EC2::VPNConnection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html | AWS::EC2::VPNConnection}
 */
export class EC2VPNConnection extends ResourceBase<
  "AWS::EC2::VPNConnection",
  EC2VPNConnectionProps,
  EC2VPNConnectionAttribs
> {
  public static readonly Type = "AWS::EC2::VPNConnection";
  public static readonly AttributeNames: readonly (keyof EC2VPNConnectionAttribs)[] =
    ["VpnConnectionId"];
  constructor(
    logicalId: string,
    properties: EC2VPNConnectionProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2VPNConnection.Type,
      EC2VPNConnection.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::VPNConnectionRoute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnectionroute.html | AWS::EC2::VPNConnectionRoute}
 */
export interface EC2VPNConnectionRouteProps {
  DestinationCidrBlock: string;
  VpnConnectionId: string;
}
/**
 * Resource class for AWS::EC2::VPNConnectionRoute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnectionroute.html | AWS::EC2::VPNConnectionRoute}
 */
export class EC2VPNConnectionRoute extends ResourceBase<
  "AWS::EC2::VPNConnectionRoute",
  EC2VPNConnectionRouteProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::EC2::VPNConnectionRoute";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: EC2VPNConnectionRouteProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2VPNConnectionRoute.Type,
      EC2VPNConnectionRoute.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::VPNGateway
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpngateway.html | AWS::EC2::VPNGateway}
 */
export interface EC2VPNGatewayProps {
  Type: string;
  AmazonSideAsn?: number;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EC2::VPNGateway
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpngateway.html | AWS::EC2::VPNGateway}
 */
export interface EC2VPNGatewayAttribs {
  VPNGatewayId?: string;
}
/**
 * Resource class for AWS::EC2::VPNGateway
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpngateway.html | AWS::EC2::VPNGateway}
 */
export class EC2VPNGateway extends ResourceBase<
  "AWS::EC2::VPNGateway",
  EC2VPNGatewayProps,
  EC2VPNGatewayAttribs
> {
  public static readonly Type = "AWS::EC2::VPNGateway";
  public static readonly AttributeNames: readonly (keyof EC2VPNGatewayAttribs)[] =
    ["VPNGatewayId"];
  constructor(
    logicalId: string,
    properties: EC2VPNGatewayProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2VPNGateway.Type,
      EC2VPNGateway.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::VPNGatewayRoutePropagation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpn-gatewayrouteprop.html | AWS::EC2::VPNGatewayRoutePropagation}
 */
export interface EC2VPNGatewayRoutePropagationProps {
  RouteTableIds: any[];
  VpnGatewayId: string;
}
/**
 * Resource class for AWS::EC2::VPNGatewayRoutePropagation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpn-gatewayrouteprop.html | AWS::EC2::VPNGatewayRoutePropagation}
 */
export class EC2VPNGatewayRoutePropagation extends ResourceBase<
  "AWS::EC2::VPNGatewayRoutePropagation",
  EC2VPNGatewayRoutePropagationProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::EC2::VPNGatewayRoutePropagation";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: EC2VPNGatewayRoutePropagationProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2VPNGatewayRoutePropagation.Type,
      EC2VPNGatewayRoutePropagation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::VerifiedAccessEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html | AWS::EC2::VerifiedAccessEndpoint}
 */
export interface EC2VerifiedAccessEndpointProps {
  AttachmentType: string;
  Description?: string;
  DomainCertificateArn: string;
  VerifiedAccessGroupId: string;
  SecurityGroupIds?: any[];
  LoadBalancerOptions?: EC2VerifiedAccessEndpointLoadBalancerOptions;
  ApplicationDomain: string;
  PolicyEnabled?: boolean;
  EndpointDomainPrefix: string;
  EndpointType: string;
  PolicyDocument?: string;
  SseSpecification?: EC2VerifiedAccessEndpointSseSpecification;
  Tags?: Tag[];
  NetworkInterfaceOptions?: EC2VerifiedAccessEndpointNetworkInterfaceOptions;
}
/**
 * Attributes type definition for AWS::EC2::VerifiedAccessEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html | AWS::EC2::VerifiedAccessEndpoint}
 */
export interface EC2VerifiedAccessEndpointAttribs {
  Status?: string;
  EndpointDomain?: string;
  CreationTime?: string;
  LastUpdatedTime?: string;
  DeviceValidationDomain?: string;
  VerifiedAccessInstanceId?: string;
  VerifiedAccessEndpointId?: string;
}
/**
 * Resource class for AWS::EC2::VerifiedAccessEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html | AWS::EC2::VerifiedAccessEndpoint}
 */
export class EC2VerifiedAccessEndpoint extends ResourceBase<
  "AWS::EC2::VerifiedAccessEndpoint",
  EC2VerifiedAccessEndpointProps,
  EC2VerifiedAccessEndpointAttribs
> {
  public static readonly Type = "AWS::EC2::VerifiedAccessEndpoint";
  public static readonly AttributeNames: readonly (keyof EC2VerifiedAccessEndpointAttribs)[] =
    [
      "Status",
      "EndpointDomain",
      "CreationTime",
      "LastUpdatedTime",
      "DeviceValidationDomain",
      "VerifiedAccessInstanceId",
      "VerifiedAccessEndpointId",
    ];
  constructor(
    logicalId: string,
    properties: EC2VerifiedAccessEndpointProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2VerifiedAccessEndpoint.Type,
      EC2VerifiedAccessEndpoint.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::VerifiedAccessGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessgroup.html | AWS::EC2::VerifiedAccessGroup}
 */
export interface EC2VerifiedAccessGroupProps {
  Description?: string;
  PolicyDocument?: string;
  SseSpecification?: EC2VerifiedAccessGroupSseSpecification;
  VerifiedAccessInstanceId: string;
  Tags?: Tag[];
  PolicyEnabled?: boolean;
}
/**
 * Attributes type definition for AWS::EC2::VerifiedAccessGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessgroup.html | AWS::EC2::VerifiedAccessGroup}
 */
export interface EC2VerifiedAccessGroupAttribs {
  Owner?: string;
  CreationTime?: string;
  LastUpdatedTime?: string;
  VerifiedAccessGroupId?: string;
  VerifiedAccessGroupArn?: string;
}
/**
 * Resource class for AWS::EC2::VerifiedAccessGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessgroup.html | AWS::EC2::VerifiedAccessGroup}
 */
export class EC2VerifiedAccessGroup extends ResourceBase<
  "AWS::EC2::VerifiedAccessGroup",
  EC2VerifiedAccessGroupProps,
  EC2VerifiedAccessGroupAttribs
> {
  public static readonly Type = "AWS::EC2::VerifiedAccessGroup";
  public static readonly AttributeNames: readonly (keyof EC2VerifiedAccessGroupAttribs)[] =
    [
      "Owner",
      "CreationTime",
      "LastUpdatedTime",
      "VerifiedAccessGroupId",
      "VerifiedAccessGroupArn",
    ];
  constructor(
    logicalId: string,
    properties: EC2VerifiedAccessGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2VerifiedAccessGroup.Type,
      EC2VerifiedAccessGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::VerifiedAccessInstance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html | AWS::EC2::VerifiedAccessInstance}
 */
export interface EC2VerifiedAccessInstanceProps {
  VerifiedAccessTrustProviders?: any[];
  Description?: string;
  FipsEnabled?: boolean;
  LoggingConfigurations?: EC2VerifiedAccessInstanceVerifiedAccessLogs;
  VerifiedAccessTrustProviderIds?: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EC2::VerifiedAccessInstance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html | AWS::EC2::VerifiedAccessInstance}
 */
export interface EC2VerifiedAccessInstanceAttribs {
  CreationTime?: string;
  LastUpdatedTime?: string;
  VerifiedAccessInstanceId?: string;
}
/**
 * Resource class for AWS::EC2::VerifiedAccessInstance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html | AWS::EC2::VerifiedAccessInstance}
 */
export class EC2VerifiedAccessInstance extends ResourceBase<
  "AWS::EC2::VerifiedAccessInstance",
  EC2VerifiedAccessInstanceProps,
  EC2VerifiedAccessInstanceAttribs
> {
  public static readonly Type = "AWS::EC2::VerifiedAccessInstance";
  public static readonly AttributeNames: readonly (keyof EC2VerifiedAccessInstanceAttribs)[] =
    ["CreationTime", "LastUpdatedTime", "VerifiedAccessInstanceId"];
  constructor(
    logicalId: string,
    properties: EC2VerifiedAccessInstanceProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2VerifiedAccessInstance.Type,
      EC2VerifiedAccessInstance.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::VerifiedAccessTrustProvider
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccesstrustprovider.html | AWS::EC2::VerifiedAccessTrustProvider}
 */
export interface EC2VerifiedAccessTrustProviderProps {
  PolicyReferenceName: string;
  DeviceOptions?: EC2VerifiedAccessTrustProviderDeviceOptions;
  DeviceTrustProviderType?: string;
  Description?: string;
  OidcOptions?: EC2VerifiedAccessTrustProviderOidcOptions;
  TrustProviderType: string;
  SseSpecification?: EC2VerifiedAccessTrustProviderSseSpecification;
  UserTrustProviderType?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EC2::VerifiedAccessTrustProvider
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccesstrustprovider.html | AWS::EC2::VerifiedAccessTrustProvider}
 */
export interface EC2VerifiedAccessTrustProviderAttribs {
  VerifiedAccessTrustProviderId?: string;
  CreationTime?: string;
  LastUpdatedTime?: string;
}
/**
 * Resource class for AWS::EC2::VerifiedAccessTrustProvider
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccesstrustprovider.html | AWS::EC2::VerifiedAccessTrustProvider}
 */
export class EC2VerifiedAccessTrustProvider extends ResourceBase<
  "AWS::EC2::VerifiedAccessTrustProvider",
  EC2VerifiedAccessTrustProviderProps,
  EC2VerifiedAccessTrustProviderAttribs
> {
  public static readonly Type = "AWS::EC2::VerifiedAccessTrustProvider";
  public static readonly AttributeNames: readonly (keyof EC2VerifiedAccessTrustProviderAttribs)[] =
    ["VerifiedAccessTrustProviderId", "CreationTime", "LastUpdatedTime"];
  constructor(
    logicalId: string,
    properties: EC2VerifiedAccessTrustProviderProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2VerifiedAccessTrustProvider.Type,
      EC2VerifiedAccessTrustProvider.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::Volume
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-volume.html | AWS::EC2::Volume}
 */
export interface EC2VolumeProps {
  MultiAttachEnabled?: boolean;
  SnapshotId?: string;
  VolumeType?: string;
  KmsKeyId?: string;
  Encrypted?: boolean;
  Size?: number;
  AutoEnableIO?: boolean;
  OutpostArn?: string;
  AvailabilityZone: string;
  Throughput?: number;
  Iops?: number;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EC2::Volume
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-volume.html | AWS::EC2::Volume}
 */
export interface EC2VolumeAttribs {
  VolumeId?: string;
}
/**
 * Resource class for AWS::EC2::Volume
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-volume.html | AWS::EC2::Volume}
 */
export class EC2Volume extends ResourceBase<
  "AWS::EC2::Volume",
  EC2VolumeProps,
  EC2VolumeAttribs
> {
  public static readonly Type = "AWS::EC2::Volume";
  public static readonly AttributeNames: readonly (keyof EC2VolumeAttribs)[] = [
    "VolumeId",
  ];
  constructor(
    logicalId: string,
    properties: EC2VolumeProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2Volume.Type,
      EC2Volume.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EC2::VolumeAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-volumeattachment.html | AWS::EC2::VolumeAttachment}
 */
export interface EC2VolumeAttachmentProps {
  VolumeId: string;
  InstanceId: string;
  Device?: string;
}
/**
 * Resource class for AWS::EC2::VolumeAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-volumeattachment.html | AWS::EC2::VolumeAttachment}
 */
export class EC2VolumeAttachment extends ResourceBase<
  "AWS::EC2::VolumeAttachment",
  EC2VolumeAttachmentProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::EC2::VolumeAttachment";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: EC2VolumeAttachmentProps,
    options?: ResourceOptions,
  ) {
    super(
      EC2VolumeAttachment.Type,
      EC2VolumeAttachment.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
