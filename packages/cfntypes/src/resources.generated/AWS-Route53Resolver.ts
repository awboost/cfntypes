import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Route53Resolver::FirewallRuleGroup.FirewallRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-firewallrulegroup-firewallrule.html | AWS::Route53Resolver::FirewallRuleGroup.FirewallRule}
 */
export interface Route53ResolverFirewallRuleGroupFirewallRule {
  Action: string;
  Priority: number;
  BlockOverrideDomain?: string;
  FirewallDomainListId: string;
  BlockResponse?: string;
  BlockOverrideTtl?: number;
  BlockOverrideDnsType?: string;
}
/**
 * Type definition for AWS::Route53Resolver::ResolverEndpoint.IpAddressRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-resolverendpoint-ipaddressrequest.html | AWS::Route53Resolver::ResolverEndpoint.IpAddressRequest}
 */
export interface Route53ResolverResolverEndpointIpAddressRequest {
  Ipv6?: string;
  Ip?: string;
  SubnetId: string;
}
/**
 * Type definition for AWS::Route53Resolver::ResolverRule.TargetAddress
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-resolverrule-targetaddress.html | AWS::Route53Resolver::ResolverRule.TargetAddress}
 */
export interface Route53ResolverResolverRuleTargetAddress {
  Ipv6?: string;
  Ip?: string;
  Port?: string;
}
/**
 * Type definition for AWS::Route53Resolver::FirewallDomainList
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewalldomainlist.html | AWS::Route53Resolver::FirewallDomainList}
 */
export interface Route53ResolverFirewallDomainListProps {
  Domains?: any[];
  DomainFileUrl?: string;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::Route53Resolver::FirewallDomainList
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewalldomainlist.html | AWS::Route53Resolver::FirewallDomainList}
 */
export interface Route53ResolverFirewallDomainListAttribs {
  Status?: string;
  CreationTime?: string;
  ManagedOwnerName?: string;
  ModificationTime?: string;
  Id?: string;
  Arn?: string;
  CreatorRequestId?: string;
  StatusMessage?: string;
  DomainCount?: number;
}
/**
 * Resource class for AWS::Route53Resolver::FirewallDomainList
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewalldomainlist.html | AWS::Route53Resolver::FirewallDomainList}
 */
export class Route53ResolverFirewallDomainList extends ResourceBase<
  "AWS::Route53Resolver::FirewallDomainList",
  Route53ResolverFirewallDomainListProps,
  Route53ResolverFirewallDomainListAttribs
> {
  public static readonly Type = "AWS::Route53Resolver::FirewallDomainList";
  public static readonly AttributeNames: readonly (keyof Route53ResolverFirewallDomainListAttribs)[] =
    [
      "Status",
      "CreationTime",
      "ManagedOwnerName",
      "ModificationTime",
      "Id",
      "Arn",
      "CreatorRequestId",
      "StatusMessage",
      "DomainCount",
    ];
  constructor(
    logicalId: string,
    properties: Route53ResolverFirewallDomainListProps,
    options?: ResourceOptions,
  ) {
    super(
      Route53ResolverFirewallDomainList.Type,
      Route53ResolverFirewallDomainList.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Route53Resolver::FirewallRuleGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroup.html | AWS::Route53Resolver::FirewallRuleGroup}
 */
export interface Route53ResolverFirewallRuleGroupProps {
  FirewallRules?: any[];
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::Route53Resolver::FirewallRuleGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroup.html | AWS::Route53Resolver::FirewallRuleGroup}
 */
export interface Route53ResolverFirewallRuleGroupAttribs {
  RuleCount?: number;
  Status?: string;
  OwnerId?: string;
  CreationTime?: string;
  ShareStatus?: string;
  ModificationTime?: string;
  Id?: string;
  Arn?: string;
  CreatorRequestId?: string;
  StatusMessage?: string;
}
/**
 * Resource class for AWS::Route53Resolver::FirewallRuleGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroup.html | AWS::Route53Resolver::FirewallRuleGroup}
 */
export class Route53ResolverFirewallRuleGroup extends ResourceBase<
  "AWS::Route53Resolver::FirewallRuleGroup",
  Route53ResolverFirewallRuleGroupProps,
  Route53ResolverFirewallRuleGroupAttribs
> {
  public static readonly Type = "AWS::Route53Resolver::FirewallRuleGroup";
  public static readonly AttributeNames: readonly (keyof Route53ResolverFirewallRuleGroupAttribs)[] =
    [
      "RuleCount",
      "Status",
      "OwnerId",
      "CreationTime",
      "ShareStatus",
      "ModificationTime",
      "Id",
      "Arn",
      "CreatorRequestId",
      "StatusMessage",
    ];
  constructor(
    logicalId: string,
    properties: Route53ResolverFirewallRuleGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      Route53ResolverFirewallRuleGroup.Type,
      Route53ResolverFirewallRuleGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Route53Resolver::FirewallRuleGroupAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroupassociation.html | AWS::Route53Resolver::FirewallRuleGroupAssociation}
 */
export interface Route53ResolverFirewallRuleGroupAssociationProps {
  VpcId: string;
  FirewallRuleGroupId: string;
  Priority: number;
  MutationProtection?: string;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::Route53Resolver::FirewallRuleGroupAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroupassociation.html | AWS::Route53Resolver::FirewallRuleGroupAssociation}
 */
export interface Route53ResolverFirewallRuleGroupAssociationAttribs {
  Status?: string;
  CreationTime?: string;
  ManagedOwnerName?: string;
  ModificationTime?: string;
  Id?: string;
  Arn?: string;
  CreatorRequestId?: string;
  StatusMessage?: string;
}
/**
 * Resource class for AWS::Route53Resolver::FirewallRuleGroupAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroupassociation.html | AWS::Route53Resolver::FirewallRuleGroupAssociation}
 */
export class Route53ResolverFirewallRuleGroupAssociation extends ResourceBase<
  "AWS::Route53Resolver::FirewallRuleGroupAssociation",
  Route53ResolverFirewallRuleGroupAssociationProps,
  Route53ResolverFirewallRuleGroupAssociationAttribs
> {
  public static readonly Type =
    "AWS::Route53Resolver::FirewallRuleGroupAssociation";
  public static readonly AttributeNames: readonly (keyof Route53ResolverFirewallRuleGroupAssociationAttribs)[] =
    [
      "Status",
      "CreationTime",
      "ManagedOwnerName",
      "ModificationTime",
      "Id",
      "Arn",
      "CreatorRequestId",
      "StatusMessage",
    ];
  constructor(
    logicalId: string,
    properties: Route53ResolverFirewallRuleGroupAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      Route53ResolverFirewallRuleGroupAssociation.Type,
      Route53ResolverFirewallRuleGroupAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Route53Resolver::OutpostResolver
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-outpostresolver.html | AWS::Route53Resolver::OutpostResolver}
 */
export interface Route53ResolverOutpostResolverProps {
  InstanceCount?: number;
  OutpostArn: string;
  PreferredInstanceType: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::Route53Resolver::OutpostResolver
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-outpostresolver.html | AWS::Route53Resolver::OutpostResolver}
 */
export interface Route53ResolverOutpostResolverAttribs {
  Status?: string;
  CreationTime?: string;
  ModificationTime?: string;
  Id?: string;
  Arn?: string;
  CreatorRequestId?: string;
  StatusMessage?: string;
}
/**
 * Resource class for AWS::Route53Resolver::OutpostResolver
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-outpostresolver.html | AWS::Route53Resolver::OutpostResolver}
 */
export class Route53ResolverOutpostResolver extends ResourceBase<
  "AWS::Route53Resolver::OutpostResolver",
  Route53ResolverOutpostResolverProps,
  Route53ResolverOutpostResolverAttribs
> {
  public static readonly Type = "AWS::Route53Resolver::OutpostResolver";
  public static readonly AttributeNames: readonly (keyof Route53ResolverOutpostResolverAttribs)[] =
    [
      "Status",
      "CreationTime",
      "ModificationTime",
      "Id",
      "Arn",
      "CreatorRequestId",
      "StatusMessage",
    ];
  constructor(
    logicalId: string,
    properties: Route53ResolverOutpostResolverProps,
    options?: ResourceOptions,
  ) {
    super(
      Route53ResolverOutpostResolver.Type,
      Route53ResolverOutpostResolver.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Route53Resolver::ResolverConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverconfig.html | AWS::Route53Resolver::ResolverConfig}
 */
export interface Route53ResolverResolverConfigProps {
  ResourceId: string;
  AutodefinedReverseFlag: string;
}
/**
 * Attributes type definition for AWS::Route53Resolver::ResolverConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverconfig.html | AWS::Route53Resolver::ResolverConfig}
 */
export interface Route53ResolverResolverConfigAttribs {
  OwnerId?: string;
  AutodefinedReverse?: string;
  Id?: string;
}
/**
 * Resource class for AWS::Route53Resolver::ResolverConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverconfig.html | AWS::Route53Resolver::ResolverConfig}
 */
export class Route53ResolverResolverConfig extends ResourceBase<
  "AWS::Route53Resolver::ResolverConfig",
  Route53ResolverResolverConfigProps,
  Route53ResolverResolverConfigAttribs
> {
  public static readonly Type = "AWS::Route53Resolver::ResolverConfig";
  public static readonly AttributeNames: readonly (keyof Route53ResolverResolverConfigAttribs)[] =
    ["OwnerId", "AutodefinedReverse", "Id"];
  constructor(
    logicalId: string,
    properties: Route53ResolverResolverConfigProps,
    options?: ResourceOptions,
  ) {
    super(
      Route53ResolverResolverConfig.Type,
      Route53ResolverResolverConfig.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Route53Resolver::ResolverDNSSECConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverdnssecconfig.html | AWS::Route53Resolver::ResolverDNSSECConfig}
 */
export interface Route53ResolverResolverDNSSECConfigProps {
  ResourceId?: string;
}
/**
 * Attributes type definition for AWS::Route53Resolver::ResolverDNSSECConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverdnssecconfig.html | AWS::Route53Resolver::ResolverDNSSECConfig}
 */
export interface Route53ResolverResolverDNSSECConfigAttribs {
  ValidationStatus?: string;
  OwnerId?: string;
  Id?: string;
}
/**
 * Resource class for AWS::Route53Resolver::ResolverDNSSECConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverdnssecconfig.html | AWS::Route53Resolver::ResolverDNSSECConfig}
 */
export class Route53ResolverResolverDNSSECConfig extends ResourceBase<
  "AWS::Route53Resolver::ResolverDNSSECConfig",
  Route53ResolverResolverDNSSECConfigProps,
  Route53ResolverResolverDNSSECConfigAttribs
> {
  public static readonly Type = "AWS::Route53Resolver::ResolverDNSSECConfig";
  public static readonly AttributeNames: readonly (keyof Route53ResolverResolverDNSSECConfigAttribs)[] =
    ["ValidationStatus", "OwnerId", "Id"];
  constructor(
    logicalId: string,
    properties: Route53ResolverResolverDNSSECConfigProps,
    options?: ResourceOptions,
  ) {
    super(
      Route53ResolverResolverDNSSECConfig.Type,
      Route53ResolverResolverDNSSECConfig.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Route53Resolver::ResolverEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html | AWS::Route53Resolver::ResolverEndpoint}
 */
export interface Route53ResolverResolverEndpointProps {
  IpAddresses: any[];
  OutpostArn?: string;
  PreferredInstanceType?: string;
  ResolverEndpointType?: string;
  Direction: string;
  SecurityGroupIds: any[];
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::Route53Resolver::ResolverEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html | AWS::Route53Resolver::ResolverEndpoint}
 */
export interface Route53ResolverResolverEndpointAttribs {
  ResolverEndpointId?: string;
  IpAddressCount?: string;
  OutpostArn?: string;
  PreferredInstanceType?: string;
  ResolverEndpointType?: string;
  Arn?: string;
  Direction?: string;
  HostVPCId?: string;
  Name?: string;
}
/**
 * Resource class for AWS::Route53Resolver::ResolverEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html | AWS::Route53Resolver::ResolverEndpoint}
 */
export class Route53ResolverResolverEndpoint extends ResourceBase<
  "AWS::Route53Resolver::ResolverEndpoint",
  Route53ResolverResolverEndpointProps,
  Route53ResolverResolverEndpointAttribs
> {
  public static readonly Type = "AWS::Route53Resolver::ResolverEndpoint";
  public static readonly AttributeNames: readonly (keyof Route53ResolverResolverEndpointAttribs)[] =
    [
      "ResolverEndpointId",
      "IpAddressCount",
      "OutpostArn",
      "PreferredInstanceType",
      "ResolverEndpointType",
      "Arn",
      "Direction",
      "HostVPCId",
      "Name",
    ];
  constructor(
    logicalId: string,
    properties: Route53ResolverResolverEndpointProps,
    options?: ResourceOptions,
  ) {
    super(
      Route53ResolverResolverEndpoint.Type,
      Route53ResolverResolverEndpoint.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Route53Resolver::ResolverQueryLoggingConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverqueryloggingconfig.html | AWS::Route53Resolver::ResolverQueryLoggingConfig}
 */
export interface Route53ResolverResolverQueryLoggingConfigProps {
  DestinationArn?: string;
  Name?: string;
}
/**
 * Attributes type definition for AWS::Route53Resolver::ResolverQueryLoggingConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverqueryloggingconfig.html | AWS::Route53Resolver::ResolverQueryLoggingConfig}
 */
export interface Route53ResolverResolverQueryLoggingConfigAttribs {
  Status?: string;
  OwnerId?: string;
  AssociationCount?: number;
  CreationTime?: string;
  ShareStatus?: string;
  Id?: string;
  Arn?: string;
  CreatorRequestId?: string;
}
/**
 * Resource class for AWS::Route53Resolver::ResolverQueryLoggingConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverqueryloggingconfig.html | AWS::Route53Resolver::ResolverQueryLoggingConfig}
 */
export class Route53ResolverResolverQueryLoggingConfig extends ResourceBase<
  "AWS::Route53Resolver::ResolverQueryLoggingConfig",
  Route53ResolverResolverQueryLoggingConfigProps,
  Route53ResolverResolverQueryLoggingConfigAttribs
> {
  public static readonly Type =
    "AWS::Route53Resolver::ResolverQueryLoggingConfig";
  public static readonly AttributeNames: readonly (keyof Route53ResolverResolverQueryLoggingConfigAttribs)[] =
    [
      "Status",
      "OwnerId",
      "AssociationCount",
      "CreationTime",
      "ShareStatus",
      "Id",
      "Arn",
      "CreatorRequestId",
    ];
  constructor(
    logicalId: string,
    properties: Route53ResolverResolverQueryLoggingConfigProps,
    options?: ResourceOptions,
  ) {
    super(
      Route53ResolverResolverQueryLoggingConfig.Type,
      Route53ResolverResolverQueryLoggingConfig.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Route53Resolver::ResolverQueryLoggingConfigAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverqueryloggingconfigassociation.html | AWS::Route53Resolver::ResolverQueryLoggingConfigAssociation}
 */
export interface Route53ResolverResolverQueryLoggingConfigAssociationProps {
  ResourceId?: string;
  ResolverQueryLogConfigId?: string;
}
/**
 * Attributes type definition for AWS::Route53Resolver::ResolverQueryLoggingConfigAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverqueryloggingconfigassociation.html | AWS::Route53Resolver::ResolverQueryLoggingConfigAssociation}
 */
export interface Route53ResolverResolverQueryLoggingConfigAssociationAttribs {
  Status?: string;
  CreationTime?: string;
  Error?: string;
  Id?: string;
  ErrorMessage?: string;
}
/**
 * Resource class for AWS::Route53Resolver::ResolverQueryLoggingConfigAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverqueryloggingconfigassociation.html | AWS::Route53Resolver::ResolverQueryLoggingConfigAssociation}
 */
export class Route53ResolverResolverQueryLoggingConfigAssociation extends ResourceBase<
  "AWS::Route53Resolver::ResolverQueryLoggingConfigAssociation",
  Route53ResolverResolverQueryLoggingConfigAssociationProps,
  Route53ResolverResolverQueryLoggingConfigAssociationAttribs
> {
  public static readonly Type =
    "AWS::Route53Resolver::ResolverQueryLoggingConfigAssociation";
  public static readonly AttributeNames: readonly (keyof Route53ResolverResolverQueryLoggingConfigAssociationAttribs)[] =
    ["Status", "CreationTime", "Error", "Id", "ErrorMessage"];
  constructor(
    logicalId: string,
    properties: Route53ResolverResolverQueryLoggingConfigAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      Route53ResolverResolverQueryLoggingConfigAssociation.Type,
      Route53ResolverResolverQueryLoggingConfigAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Route53Resolver::ResolverRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverrule.html | AWS::Route53Resolver::ResolverRule}
 */
export interface Route53ResolverResolverRuleProps {
  ResolverEndpointId?: string;
  DomainName: string;
  RuleType: string;
  Tags?: Tag[];
  TargetIps?: any[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::Route53Resolver::ResolverRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverrule.html | AWS::Route53Resolver::ResolverRule}
 */
export interface Route53ResolverResolverRuleAttribs {
  ResolverEndpointId?: string;
  DomainName?: string;
  ResolverRuleId?: string;
  Arn?: string;
  TargetIps?: any[];
  Name?: string;
}
/**
 * Resource class for AWS::Route53Resolver::ResolverRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverrule.html | AWS::Route53Resolver::ResolverRule}
 */
export class Route53ResolverResolverRule extends ResourceBase<
  "AWS::Route53Resolver::ResolverRule",
  Route53ResolverResolverRuleProps,
  Route53ResolverResolverRuleAttribs
> {
  public static readonly Type = "AWS::Route53Resolver::ResolverRule";
  public static readonly AttributeNames: readonly (keyof Route53ResolverResolverRuleAttribs)[] =
    [
      "ResolverEndpointId",
      "DomainName",
      "ResolverRuleId",
      "Arn",
      "TargetIps",
      "Name",
    ];
  constructor(
    logicalId: string,
    properties: Route53ResolverResolverRuleProps,
    options?: ResourceOptions,
  ) {
    super(
      Route53ResolverResolverRule.Type,
      Route53ResolverResolverRule.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Route53Resolver::ResolverRuleAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverruleassociation.html | AWS::Route53Resolver::ResolverRuleAssociation}
 */
export interface Route53ResolverResolverRuleAssociationProps {
  VPCId: string;
  ResolverRuleId: string;
  Name?: string;
}
/**
 * Attributes type definition for AWS::Route53Resolver::ResolverRuleAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverruleassociation.html | AWS::Route53Resolver::ResolverRuleAssociation}
 */
export interface Route53ResolverResolverRuleAssociationAttribs {
  VPCId?: string;
  ResolverRuleId?: string;
  ResolverRuleAssociationId?: string;
  Name?: string;
}
/**
 * Resource class for AWS::Route53Resolver::ResolverRuleAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverruleassociation.html | AWS::Route53Resolver::ResolverRuleAssociation}
 */
export class Route53ResolverResolverRuleAssociation extends ResourceBase<
  "AWS::Route53Resolver::ResolverRuleAssociation",
  Route53ResolverResolverRuleAssociationProps,
  Route53ResolverResolverRuleAssociationAttribs
> {
  public static readonly Type = "AWS::Route53Resolver::ResolverRuleAssociation";
  public static readonly AttributeNames: readonly (keyof Route53ResolverResolverRuleAssociationAttribs)[] =
    ["VPCId", "ResolverRuleId", "ResolverRuleAssociationId", "Name"];
  constructor(
    logicalId: string,
    properties: Route53ResolverResolverRuleAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      Route53ResolverResolverRuleAssociation.Type,
      Route53ResolverResolverRuleAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
