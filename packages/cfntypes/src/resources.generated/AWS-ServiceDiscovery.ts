import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::ServiceDiscovery::PrivateDnsNamespace.PrivateDnsPropertiesMutable
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicediscovery-privatednsnamespace-privatednspropertiesmutable.html | AWS::ServiceDiscovery::PrivateDnsNamespace.PrivateDnsPropertiesMutable}
 */
export interface ServiceDiscoveryPrivateDnsNamespacePrivateDnsPropertiesMutable {
  SOA?: ServiceDiscoveryPrivateDnsNamespaceSOA;
}
/**
 * Type definition for AWS::ServiceDiscovery::PrivateDnsNamespace.Properties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicediscovery-privatednsnamespace-properties.html | AWS::ServiceDiscovery::PrivateDnsNamespace.Properties}
 */
export interface ServiceDiscoveryPrivateDnsNamespaceProperties {
  DnsProperties?: ServiceDiscoveryPrivateDnsNamespacePrivateDnsPropertiesMutable;
}
/**
 * Type definition for AWS::ServiceDiscovery::PrivateDnsNamespace.SOA
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicediscovery-privatednsnamespace-soa.html | AWS::ServiceDiscovery::PrivateDnsNamespace.SOA}
 */
export interface ServiceDiscoveryPrivateDnsNamespaceSOA {
  TTL?: number;
}
/**
 * Type definition for AWS::ServiceDiscovery::PublicDnsNamespace.Properties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicediscovery-publicdnsnamespace-properties.html | AWS::ServiceDiscovery::PublicDnsNamespace.Properties}
 */
export interface ServiceDiscoveryPublicDnsNamespaceProperties {
  DnsProperties?: ServiceDiscoveryPublicDnsNamespacePublicDnsPropertiesMutable;
}
/**
 * Type definition for AWS::ServiceDiscovery::PublicDnsNamespace.PublicDnsPropertiesMutable
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicediscovery-publicdnsnamespace-publicdnspropertiesmutable.html | AWS::ServiceDiscovery::PublicDnsNamespace.PublicDnsPropertiesMutable}
 */
export interface ServiceDiscoveryPublicDnsNamespacePublicDnsPropertiesMutable {
  SOA?: ServiceDiscoveryPublicDnsNamespaceSOA;
}
/**
 * Type definition for AWS::ServiceDiscovery::PublicDnsNamespace.SOA
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicediscovery-publicdnsnamespace-soa.html | AWS::ServiceDiscovery::PublicDnsNamespace.SOA}
 */
export interface ServiceDiscoveryPublicDnsNamespaceSOA {
  TTL?: number;
}
/**
 * Type definition for AWS::ServiceDiscovery::Service.DnsConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicediscovery-service-dnsconfig.html | AWS::ServiceDiscovery::Service.DnsConfig}
 */
export interface ServiceDiscoveryServiceDnsConfig {
  DnsRecords: any[];
  RoutingPolicy?: string;
  NamespaceId?: string;
}
/**
 * Type definition for AWS::ServiceDiscovery::Service.DnsRecord
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicediscovery-service-dnsrecord.html | AWS::ServiceDiscovery::Service.DnsRecord}
 */
export interface ServiceDiscoveryServiceDnsRecord {
  Type: string;
  TTL: number;
}
/**
 * Type definition for AWS::ServiceDiscovery::Service.HealthCheckConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicediscovery-service-healthcheckconfig.html | AWS::ServiceDiscovery::Service.HealthCheckConfig}
 */
export interface ServiceDiscoveryServiceHealthCheckConfig {
  Type: string;
  ResourcePath?: string;
  FailureThreshold?: number;
}
/**
 * Type definition for AWS::ServiceDiscovery::Service.HealthCheckCustomConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicediscovery-service-healthcheckcustomconfig.html | AWS::ServiceDiscovery::Service.HealthCheckCustomConfig}
 */
export interface ServiceDiscoveryServiceHealthCheckCustomConfig {
  FailureThreshold?: number;
}
/**
 * Type definition for AWS::ServiceDiscovery::HttpNamespace
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-httpnamespace.html | AWS::ServiceDiscovery::HttpNamespace}
 */
export interface ServiceDiscoveryHttpNamespaceProps {
  Description?: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::ServiceDiscovery::HttpNamespace
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-httpnamespace.html | AWS::ServiceDiscovery::HttpNamespace}
 */
export interface ServiceDiscoveryHttpNamespaceAttribs {
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::ServiceDiscovery::HttpNamespace
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-httpnamespace.html | AWS::ServiceDiscovery::HttpNamespace}
 */
export class ServiceDiscoveryHttpNamespace extends ResourceBase<
  "AWS::ServiceDiscovery::HttpNamespace",
  ServiceDiscoveryHttpNamespaceProps,
  ServiceDiscoveryHttpNamespaceAttribs
> {
  public static readonly Type = "AWS::ServiceDiscovery::HttpNamespace";
  public static readonly AttributeNames: readonly (keyof ServiceDiscoveryHttpNamespaceAttribs)[] =
    ["Id", "Arn"];
  constructor(
    logicalId: string,
    properties: ServiceDiscoveryHttpNamespaceProps,
    options?: ResourceOptions,
  ) {
    super(
      ServiceDiscoveryHttpNamespace.Type,
      ServiceDiscoveryHttpNamespace.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ServiceDiscovery::Instance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-instance.html | AWS::ServiceDiscovery::Instance}
 */
export interface ServiceDiscoveryInstanceProps {
  InstanceAttributes: object;
  InstanceId?: string;
  ServiceId: string;
}
/**
 * Resource class for AWS::ServiceDiscovery::Instance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-instance.html | AWS::ServiceDiscovery::Instance}
 */
export class ServiceDiscoveryInstance extends ResourceBase<
  "AWS::ServiceDiscovery::Instance",
  ServiceDiscoveryInstanceProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::ServiceDiscovery::Instance";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ServiceDiscoveryInstanceProps,
    options?: ResourceOptions,
  ) {
    super(
      ServiceDiscoveryInstance.Type,
      ServiceDiscoveryInstance.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ServiceDiscovery::PrivateDnsNamespace
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-privatednsnamespace.html | AWS::ServiceDiscovery::PrivateDnsNamespace}
 */
export interface ServiceDiscoveryPrivateDnsNamespaceProps {
  Description?: string;
  Vpc: string;
  Properties?: ServiceDiscoveryPrivateDnsNamespaceProperties;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::ServiceDiscovery::PrivateDnsNamespace
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-privatednsnamespace.html | AWS::ServiceDiscovery::PrivateDnsNamespace}
 */
export interface ServiceDiscoveryPrivateDnsNamespaceAttribs {
  HostedZoneId?: string;
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::ServiceDiscovery::PrivateDnsNamespace
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-privatednsnamespace.html | AWS::ServiceDiscovery::PrivateDnsNamespace}
 */
export class ServiceDiscoveryPrivateDnsNamespace extends ResourceBase<
  "AWS::ServiceDiscovery::PrivateDnsNamespace",
  ServiceDiscoveryPrivateDnsNamespaceProps,
  ServiceDiscoveryPrivateDnsNamespaceAttribs
> {
  public static readonly Type = "AWS::ServiceDiscovery::PrivateDnsNamespace";
  public static readonly AttributeNames: readonly (keyof ServiceDiscoveryPrivateDnsNamespaceAttribs)[] =
    ["HostedZoneId", "Id", "Arn"];
  constructor(
    logicalId: string,
    properties: ServiceDiscoveryPrivateDnsNamespaceProps,
    options?: ResourceOptions,
  ) {
    super(
      ServiceDiscoveryPrivateDnsNamespace.Type,
      ServiceDiscoveryPrivateDnsNamespace.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ServiceDiscovery::PublicDnsNamespace
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-publicdnsnamespace.html | AWS::ServiceDiscovery::PublicDnsNamespace}
 */
export interface ServiceDiscoveryPublicDnsNamespaceProps {
  Description?: string;
  Properties?: ServiceDiscoveryPublicDnsNamespaceProperties;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::ServiceDiscovery::PublicDnsNamespace
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-publicdnsnamespace.html | AWS::ServiceDiscovery::PublicDnsNamespace}
 */
export interface ServiceDiscoveryPublicDnsNamespaceAttribs {
  HostedZoneId?: string;
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::ServiceDiscovery::PublicDnsNamespace
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-publicdnsnamespace.html | AWS::ServiceDiscovery::PublicDnsNamespace}
 */
export class ServiceDiscoveryPublicDnsNamespace extends ResourceBase<
  "AWS::ServiceDiscovery::PublicDnsNamespace",
  ServiceDiscoveryPublicDnsNamespaceProps,
  ServiceDiscoveryPublicDnsNamespaceAttribs
> {
  public static readonly Type = "AWS::ServiceDiscovery::PublicDnsNamespace";
  public static readonly AttributeNames: readonly (keyof ServiceDiscoveryPublicDnsNamespaceAttribs)[] =
    ["HostedZoneId", "Id", "Arn"];
  constructor(
    logicalId: string,
    properties: ServiceDiscoveryPublicDnsNamespaceProps,
    options?: ResourceOptions,
  ) {
    super(
      ServiceDiscoveryPublicDnsNamespace.Type,
      ServiceDiscoveryPublicDnsNamespace.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ServiceDiscovery::Service
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-service.html | AWS::ServiceDiscovery::Service}
 */
export interface ServiceDiscoveryServiceProps {
  Type?: string;
  Description?: string;
  HealthCheckCustomConfig?: ServiceDiscoveryServiceHealthCheckCustomConfig;
  DnsConfig?: ServiceDiscoveryServiceDnsConfig;
  NamespaceId?: string;
  HealthCheckConfig?: ServiceDiscoveryServiceHealthCheckConfig;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::ServiceDiscovery::Service
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-service.html | AWS::ServiceDiscovery::Service}
 */
export interface ServiceDiscoveryServiceAttribs {
  Id?: string;
  Arn?: string;
  Name?: string;
}
/**
 * Resource class for AWS::ServiceDiscovery::Service
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-service.html | AWS::ServiceDiscovery::Service}
 */
export class ServiceDiscoveryService extends ResourceBase<
  "AWS::ServiceDiscovery::Service",
  ServiceDiscoveryServiceProps,
  ServiceDiscoveryServiceAttribs
> {
  public static readonly Type = "AWS::ServiceDiscovery::Service";
  public static readonly AttributeNames: readonly (keyof ServiceDiscoveryServiceAttribs)[] =
    ["Id", "Arn", "Name"];
  constructor(
    logicalId: string,
    properties: ServiceDiscoveryServiceProps,
    options?: ResourceOptions,
  ) {
    super(
      ServiceDiscoveryService.Type,
      ServiceDiscoveryService.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
