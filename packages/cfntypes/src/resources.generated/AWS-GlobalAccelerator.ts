import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::GlobalAccelerator::EndpointGroup.EndpointConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-globalaccelerator-endpointgroup-endpointconfiguration.html | AWS::GlobalAccelerator::EndpointGroup.EndpointConfiguration}
 */
export interface GlobalAcceleratorEndpointGroupEndpointConfiguration {
  EndpointId: string;
  Weight?: number;
  ClientIPPreservationEnabled?: boolean;
}
/**
 * Type definition for AWS::GlobalAccelerator::EndpointGroup.PortOverride
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-globalaccelerator-endpointgroup-portoverride.html | AWS::GlobalAccelerator::EndpointGroup.PortOverride}
 */
export interface GlobalAcceleratorEndpointGroupPortOverride {
  ListenerPort: number;
  EndpointPort: number;
}
/**
 * Type definition for AWS::GlobalAccelerator::Listener.PortRange
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-globalaccelerator-listener-portrange.html | AWS::GlobalAccelerator::Listener.PortRange}
 */
export interface GlobalAcceleratorListenerPortRange {
  FromPort: number;
  ToPort: number;
}
/**
 * Type definition for AWS::GlobalAccelerator::Accelerator
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-accelerator.html | AWS::GlobalAccelerator::Accelerator}
 */
export interface GlobalAcceleratorAcceleratorProps {
  IpAddressType?: string;
  IpAddresses?: any[];
  Enabled?: boolean;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::GlobalAccelerator::Accelerator
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-accelerator.html | AWS::GlobalAccelerator::Accelerator}
 */
export interface GlobalAcceleratorAcceleratorAttribs {
  Ipv4Addresses?: any[];
  DnsName?: string;
  DualStackDnsName?: string;
  AcceleratorArn?: string;
  Ipv6Addresses?: any[];
}
/**
 * Resource class for AWS::GlobalAccelerator::Accelerator
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-accelerator.html | AWS::GlobalAccelerator::Accelerator}
 */
export class GlobalAcceleratorAccelerator extends ResourceBase<
  "AWS::GlobalAccelerator::Accelerator",
  GlobalAcceleratorAcceleratorProps,
  GlobalAcceleratorAcceleratorAttribs
> {
  public static readonly Type = "AWS::GlobalAccelerator::Accelerator";
  public static readonly AttributeNames: readonly (keyof GlobalAcceleratorAcceleratorAttribs)[] =
    [
      "Ipv4Addresses",
      "DnsName",
      "DualStackDnsName",
      "AcceleratorArn",
      "Ipv6Addresses",
    ];
  constructor(
    logicalId: string,
    properties: GlobalAcceleratorAcceleratorProps,
    options?: ResourceOptions,
  ) {
    super(
      GlobalAcceleratorAccelerator.Type,
      GlobalAcceleratorAccelerator.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::GlobalAccelerator::EndpointGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-endpointgroup.html | AWS::GlobalAccelerator::EndpointGroup}
 */
export interface GlobalAcceleratorEndpointGroupProps {
  ListenerArn: string;
  PortOverrides?: any[];
  HealthCheckIntervalSeconds?: number;
  EndpointGroupRegion: string;
  HealthCheckPath?: string;
  TrafficDialPercentage?: number;
  HealthCheckProtocol?: string;
  ThresholdCount?: number;
  HealthCheckPort?: number;
  EndpointConfigurations?: any[];
}
/**
 * Attributes type definition for AWS::GlobalAccelerator::EndpointGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-endpointgroup.html | AWS::GlobalAccelerator::EndpointGroup}
 */
export interface GlobalAcceleratorEndpointGroupAttribs {
  EndpointGroupArn?: string;
}
/**
 * Resource class for AWS::GlobalAccelerator::EndpointGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-endpointgroup.html | AWS::GlobalAccelerator::EndpointGroup}
 */
export class GlobalAcceleratorEndpointGroup extends ResourceBase<
  "AWS::GlobalAccelerator::EndpointGroup",
  GlobalAcceleratorEndpointGroupProps,
  GlobalAcceleratorEndpointGroupAttribs
> {
  public static readonly Type = "AWS::GlobalAccelerator::EndpointGroup";
  public static readonly AttributeNames: readonly (keyof GlobalAcceleratorEndpointGroupAttribs)[] =
    ["EndpointGroupArn"];
  constructor(
    logicalId: string,
    properties: GlobalAcceleratorEndpointGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      GlobalAcceleratorEndpointGroup.Type,
      GlobalAcceleratorEndpointGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::GlobalAccelerator::Listener
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-listener.html | AWS::GlobalAccelerator::Listener}
 */
export interface GlobalAcceleratorListenerProps {
  PortRanges: any[];
  AcceleratorArn: string;
  Protocol: string;
  ClientAffinity?: string;
}
/**
 * Attributes type definition for AWS::GlobalAccelerator::Listener
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-listener.html | AWS::GlobalAccelerator::Listener}
 */
export interface GlobalAcceleratorListenerAttribs {
  ListenerArn?: string;
}
/**
 * Resource class for AWS::GlobalAccelerator::Listener
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-listener.html | AWS::GlobalAccelerator::Listener}
 */
export class GlobalAcceleratorListener extends ResourceBase<
  "AWS::GlobalAccelerator::Listener",
  GlobalAcceleratorListenerProps,
  GlobalAcceleratorListenerAttribs
> {
  public static readonly Type = "AWS::GlobalAccelerator::Listener";
  public static readonly AttributeNames: readonly (keyof GlobalAcceleratorListenerAttribs)[] =
    ["ListenerArn"];
  constructor(
    logicalId: string,
    properties: GlobalAcceleratorListenerProps,
    options?: ResourceOptions,
  ) {
    super(
      GlobalAcceleratorListener.Type,
      GlobalAcceleratorListener.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
