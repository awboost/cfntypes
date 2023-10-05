import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::Route53::CidrCollection.Location
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-cidrcollection-location.html | AWS::Route53::CidrCollection.Location}
 */
export interface Route53CidrCollectionLocation {
  CidrList: any[];
  LocationName: string;
}
/**
 * Type definition for AWS::Route53::HealthCheck.AlarmIdentifier
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-alarmidentifier.html | AWS::Route53::HealthCheck.AlarmIdentifier}
 */
export interface Route53HealthCheckAlarmIdentifier {
  Region: string;
  Name: string;
}
/**
 * Type definition for AWS::Route53::HealthCheck.HealthCheckConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-healthcheckconfig.html | AWS::Route53::HealthCheck.HealthCheckConfig}
 */
export interface Route53HealthCheckHealthCheckConfig {
  EnableSNI?: boolean;
  ChildHealthChecks?: any[];
  MeasureLatency?: boolean;
  Port?: number;
  Regions?: any[];
  InsufficientDataHealthStatus?: string;
  SearchString?: string;
  Type: string;
  ResourcePath?: string;
  RoutingControlArn?: string;
  FullyQualifiedDomainName?: string;
  Inverted?: boolean;
  HealthThreshold?: number;
  RequestInterval?: number;
  AlarmIdentifier?: Route53HealthCheckAlarmIdentifier;
  FailureThreshold?: number;
  IPAddress?: string;
}
/**
 * Type definition for AWS::Route53::HealthCheck.HealthCheckTag
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-healthchecktag.html | AWS::Route53::HealthCheck.HealthCheckTag}
 */
export interface Route53HealthCheckHealthCheckTag {
  Value: string;
  Key: string;
}
/**
 * Type definition for AWS::Route53::HostedZone.HostedZoneConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-hostedzone-hostedzoneconfig.html | AWS::Route53::HostedZone.HostedZoneConfig}
 */
export interface Route53HostedZoneHostedZoneConfig {
  Comment?: string;
}
/**
 * Type definition for AWS::Route53::HostedZone.HostedZoneTag
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-hostedzone-hostedzonetag.html | AWS::Route53::HostedZone.HostedZoneTag}
 */
export interface Route53HostedZoneHostedZoneTag {
  Value: string;
  Key: string;
}
/**
 * Type definition for AWS::Route53::HostedZone.QueryLoggingConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-hostedzone-queryloggingconfig.html | AWS::Route53::HostedZone.QueryLoggingConfig}
 */
export interface Route53HostedZoneQueryLoggingConfig {
  CloudWatchLogsLogGroupArn: string;
}
/**
 * Type definition for AWS::Route53::HostedZone.VPC
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-hostedzone-vpc.html | AWS::Route53::HostedZone.VPC}
 */
export interface Route53HostedZoneVPC {
  VPCRegion: string;
  VPCId: string;
}
/**
 * Type definition for AWS::Route53::RecordSet.AliasTarget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-aliastarget.html | AWS::Route53::RecordSet.AliasTarget}
 */
export interface Route53RecordSetAliasTarget {
  DNSName: string;
  EvaluateTargetHealth?: boolean;
  HostedZoneId: string;
}
/**
 * Type definition for AWS::Route53::RecordSet.CidrRoutingConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-cidrroutingconfig.html | AWS::Route53::RecordSet.CidrRoutingConfig}
 */
export interface Route53RecordSetCidrRoutingConfig {
  CollectionId: string;
  LocationName: string;
}
/**
 * Type definition for AWS::Route53::RecordSet.GeoLocation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordset-geolocation.html | AWS::Route53::RecordSet.GeoLocation}
 */
export interface Route53RecordSetGeoLocation {
  ContinentCode?: string;
  CountryCode?: string;
  SubdivisionCode?: string;
}
/**
 * Type definition for AWS::Route53::RecordSetGroup.AliasTarget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-aliastarget.html | AWS::Route53::RecordSetGroup.AliasTarget}
 */
export interface Route53RecordSetGroupAliasTarget {
  DNSName: string;
  EvaluateTargetHealth?: boolean;
  HostedZoneId: string;
}
/**
 * Type definition for AWS::Route53::RecordSetGroup.CidrRoutingConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-cidrroutingconfig.html | AWS::Route53::RecordSetGroup.CidrRoutingConfig}
 */
export interface Route53RecordSetGroupCidrRoutingConfig {
  CollectionId: string;
  LocationName: string;
}
/**
 * Type definition for AWS::Route53::RecordSetGroup.GeoLocation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordset-geolocation.html | AWS::Route53::RecordSetGroup.GeoLocation}
 */
export interface Route53RecordSetGroupGeoLocation {
  ContinentCode?: string;
  CountryCode?: string;
  SubdivisionCode?: string;
}
/**
 * Type definition for AWS::Route53::RecordSetGroup.RecordSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordset.html | AWS::Route53::RecordSetGroup.RecordSet}
 */
export interface Route53RecordSetGroupRecordSet {
  AliasTarget?: Route53RecordSetGroupAliasTarget;
  CidrRoutingConfig?: Route53RecordSetGroupCidrRoutingConfig;
  Failover?: string;
  GeoLocation?: Route53RecordSetGroupGeoLocation;
  HealthCheckId?: string;
  HostedZoneId?: string;
  HostedZoneName?: string;
  MultiValueAnswer?: boolean;
  Name: string;
  Region?: string;
  ResourceRecords?: any[];
  SetIdentifier?: string;
  TTL?: string;
  Type: string;
  Weight?: number;
}
/**
 * Type definition for AWS::Route53::CidrCollection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-cidrcollection.html | AWS::Route53::CidrCollection}
 */
export interface Route53CidrCollectionProps {
  Locations?: any[];
  Name: string;
}
/**
 * Attributes type definition for AWS::Route53::CidrCollection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-cidrcollection.html | AWS::Route53::CidrCollection}
 */
export interface Route53CidrCollectionAttribs {
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::Route53::CidrCollection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-cidrcollection.html | AWS::Route53::CidrCollection}
 */
export class Route53CidrCollection extends ResourceBase<
  "AWS::Route53::CidrCollection",
  Route53CidrCollectionProps,
  Route53CidrCollectionAttribs
> {
  public static readonly Type = "AWS::Route53::CidrCollection";
  public static readonly AttributeNames: readonly (keyof Route53CidrCollectionAttribs)[] =
    ["Id", "Arn"];
  constructor(
    logicalId: string,
    properties: Route53CidrCollectionProps,
    options?: ResourceOptions,
  ) {
    super(
      Route53CidrCollection.Type,
      Route53CidrCollection.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Route53::DNSSEC
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-dnssec.html | AWS::Route53::DNSSEC}
 */
export interface Route53DNSSECProps {
  HostedZoneId: string;
}
/**
 * Resource class for AWS::Route53::DNSSEC
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-dnssec.html | AWS::Route53::DNSSEC}
 */
export class Route53DNSSEC extends ResourceBase<
  "AWS::Route53::DNSSEC",
  Route53DNSSECProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Route53::DNSSEC";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: Route53DNSSECProps,
    options?: ResourceOptions,
  ) {
    super(
      Route53DNSSEC.Type,
      Route53DNSSEC.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Route53::HealthCheck
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-healthcheck.html | AWS::Route53::HealthCheck}
 */
export interface Route53HealthCheckProps {
  HealthCheckConfig: Route53HealthCheckHealthCheckConfig;
  HealthCheckTags?: any[];
}
/**
 * Attributes type definition for AWS::Route53::HealthCheck
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-healthcheck.html | AWS::Route53::HealthCheck}
 */
export interface Route53HealthCheckAttribs {
  HealthCheckId?: string;
}
/**
 * Resource class for AWS::Route53::HealthCheck
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-healthcheck.html | AWS::Route53::HealthCheck}
 */
export class Route53HealthCheck extends ResourceBase<
  "AWS::Route53::HealthCheck",
  Route53HealthCheckProps,
  Route53HealthCheckAttribs
> {
  public static readonly Type = "AWS::Route53::HealthCheck";
  public static readonly AttributeNames: readonly (keyof Route53HealthCheckAttribs)[] =
    ["HealthCheckId"];
  constructor(
    logicalId: string,
    properties: Route53HealthCheckProps,
    options?: ResourceOptions,
  ) {
    super(
      Route53HealthCheck.Type,
      Route53HealthCheck.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Route53::HostedZone
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-hostedzone.html | AWS::Route53::HostedZone}
 */
export interface Route53HostedZoneProps {
  HostedZoneTags?: any[];
  VPCs?: any[];
  HostedZoneConfig?: Route53HostedZoneHostedZoneConfig;
  QueryLoggingConfig?: Route53HostedZoneQueryLoggingConfig;
  Name?: string;
}
/**
 * Attributes type definition for AWS::Route53::HostedZone
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-hostedzone.html | AWS::Route53::HostedZone}
 */
export interface Route53HostedZoneAttribs {
  Id?: string;
  NameServers?: any[];
}
/**
 * Resource class for AWS::Route53::HostedZone
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-hostedzone.html | AWS::Route53::HostedZone}
 */
export class Route53HostedZone extends ResourceBase<
  "AWS::Route53::HostedZone",
  Route53HostedZoneProps,
  Route53HostedZoneAttribs
> {
  public static readonly Type = "AWS::Route53::HostedZone";
  public static readonly AttributeNames: readonly (keyof Route53HostedZoneAttribs)[] =
    ["Id", "NameServers"];
  constructor(
    logicalId: string,
    properties: Route53HostedZoneProps,
    options?: ResourceOptions,
  ) {
    super(
      Route53HostedZone.Type,
      Route53HostedZone.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Route53::KeySigningKey
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-keysigningkey.html | AWS::Route53::KeySigningKey}
 */
export interface Route53KeySigningKeyProps {
  Status: string;
  KeyManagementServiceArn: string;
  HostedZoneId: string;
  Name: string;
}
/**
 * Resource class for AWS::Route53::KeySigningKey
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-keysigningkey.html | AWS::Route53::KeySigningKey}
 */
export class Route53KeySigningKey extends ResourceBase<
  "AWS::Route53::KeySigningKey",
  Route53KeySigningKeyProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Route53::KeySigningKey";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: Route53KeySigningKeyProps,
    options?: ResourceOptions,
  ) {
    super(
      Route53KeySigningKey.Type,
      Route53KeySigningKey.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Route53::RecordSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordset.html | AWS::Route53::RecordSet}
 */
export interface Route53RecordSetProps {
  AliasTarget?: Route53RecordSetAliasTarget;
  CidrRoutingConfig?: Route53RecordSetCidrRoutingConfig;
  Comment?: string;
  Failover?: string;
  GeoLocation?: Route53RecordSetGeoLocation;
  HealthCheckId?: string;
  HostedZoneId?: string;
  HostedZoneName?: string;
  MultiValueAnswer?: boolean;
  Name: string;
  Region?: string;
  ResourceRecords?: any[];
  SetIdentifier?: string;
  TTL?: string;
  Type: string;
  Weight?: number;
}
/**
 * Resource class for AWS::Route53::RecordSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordset.html | AWS::Route53::RecordSet}
 */
export class Route53RecordSet extends ResourceBase<
  "AWS::Route53::RecordSet",
  Route53RecordSetProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Route53::RecordSet";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: Route53RecordSetProps,
    options?: ResourceOptions,
  ) {
    super(
      Route53RecordSet.Type,
      Route53RecordSet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Route53::RecordSetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordsetgroup.html | AWS::Route53::RecordSetGroup}
 */
export interface Route53RecordSetGroupProps {
  Comment?: string;
  HostedZoneId?: string;
  HostedZoneName?: string;
  RecordSets?: any[];
}
/**
 * Resource class for AWS::Route53::RecordSetGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordsetgroup.html | AWS::Route53::RecordSetGroup}
 */
export class Route53RecordSetGroup extends ResourceBase<
  "AWS::Route53::RecordSetGroup",
  Route53RecordSetGroupProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Route53::RecordSetGroup";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: Route53RecordSetGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      Route53RecordSetGroup.Type,
      Route53RecordSetGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
