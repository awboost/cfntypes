import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::NetworkFirewall::Firewall.SubnetMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewall-subnetmapping.html | AWS::NetworkFirewall::Firewall.SubnetMapping}
 */
export interface NetworkFirewallFirewallSubnetMapping {
  IPAddressType?: string;
  SubnetId: string;
}
/**
 * Type definition for AWS::NetworkFirewall::FirewallPolicy.ActionDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-actiondefinition.html | AWS::NetworkFirewall::FirewallPolicy.ActionDefinition}
 */
export interface NetworkFirewallFirewallPolicyActionDefinition {
  PublishMetricAction?: NetworkFirewallFirewallPolicyPublishMetricAction;
}
/**
 * Type definition for AWS::NetworkFirewall::FirewallPolicy.CustomAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-customaction.html | AWS::NetworkFirewall::FirewallPolicy.CustomAction}
 */
export interface NetworkFirewallFirewallPolicyCustomAction {
  ActionName: string;
  ActionDefinition: NetworkFirewallFirewallPolicyActionDefinition;
}
/**
 * Type definition for AWS::NetworkFirewall::FirewallPolicy.Dimension
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-dimension.html | AWS::NetworkFirewall::FirewallPolicy.Dimension}
 */
export interface NetworkFirewallFirewallPolicyDimension {
  Value: string;
}
/**
 * Type definition for AWS::NetworkFirewall::FirewallPolicy.FirewallPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-firewallpolicy.html | AWS::NetworkFirewall::FirewallPolicy.FirewallPolicy}
 */
export interface NetworkFirewallFirewallPolicyFirewallPolicy {
  StatelessRuleGroupReferences?: any[];
  StatefulRuleGroupReferences?: any[];
  StatelessDefaultActions: any[];
  StatefulEngineOptions?: NetworkFirewallFirewallPolicyStatefulEngineOptions;
  StatelessCustomActions?: any[];
  StatelessFragmentDefaultActions: any[];
  PolicyVariables?: NetworkFirewallFirewallPolicyPolicyVariables;
  StatefulDefaultActions?: any[];
}
/**
 * Type definition for AWS::NetworkFirewall::FirewallPolicy.IPSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-ipset.html | AWS::NetworkFirewall::FirewallPolicy.IPSet}
 */
export interface NetworkFirewallFirewallPolicyIPSet {
  Definition?: any[];
}
/**
 * Type definition for AWS::NetworkFirewall::FirewallPolicy.PolicyVariables
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-policyvariables.html | AWS::NetworkFirewall::FirewallPolicy.PolicyVariables}
 */
export interface NetworkFirewallFirewallPolicyPolicyVariables {
  RuleVariables?: Record<string, any>;
}
/**
 * Type definition for AWS::NetworkFirewall::FirewallPolicy.PublishMetricAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-publishmetricaction.html | AWS::NetworkFirewall::FirewallPolicy.PublishMetricAction}
 */
export interface NetworkFirewallFirewallPolicyPublishMetricAction {
  Dimensions: any[];
}
/**
 * Type definition for AWS::NetworkFirewall::FirewallPolicy.StatefulEngineOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-statefulengineoptions.html | AWS::NetworkFirewall::FirewallPolicy.StatefulEngineOptions}
 */
export interface NetworkFirewallFirewallPolicyStatefulEngineOptions {
  StreamExceptionPolicy?: string;
  RuleOrder?: string;
}
/**
 * Type definition for AWS::NetworkFirewall::FirewallPolicy.StatefulRuleGroupOverride
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-statefulrulegroupoverride.html | AWS::NetworkFirewall::FirewallPolicy.StatefulRuleGroupOverride}
 */
export interface NetworkFirewallFirewallPolicyStatefulRuleGroupOverride {
  Action?: string;
}
/**
 * Type definition for AWS::NetworkFirewall::FirewallPolicy.StatefulRuleGroupReference
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-statefulrulegroupreference.html | AWS::NetworkFirewall::FirewallPolicy.StatefulRuleGroupReference}
 */
export interface NetworkFirewallFirewallPolicyStatefulRuleGroupReference {
  ResourceArn: string;
  Priority?: number;
  Override?: NetworkFirewallFirewallPolicyStatefulRuleGroupOverride;
}
/**
 * Type definition for AWS::NetworkFirewall::FirewallPolicy.StatelessRuleGroupReference
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-statelessrulegroupreference.html | AWS::NetworkFirewall::FirewallPolicy.StatelessRuleGroupReference}
 */
export interface NetworkFirewallFirewallPolicyStatelessRuleGroupReference {
  ResourceArn: string;
  Priority: number;
}
/**
 * Type definition for AWS::NetworkFirewall::LoggingConfiguration.LogDestinationConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-loggingconfiguration-logdestinationconfig.html | AWS::NetworkFirewall::LoggingConfiguration.LogDestinationConfig}
 */
export interface NetworkFirewallLoggingConfigurationLogDestinationConfig {
  LogType: string;
  LogDestination: Record<string, any>;
  LogDestinationType: string;
}
/**
 * Type definition for AWS::NetworkFirewall::LoggingConfiguration.LoggingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-loggingconfiguration-loggingconfiguration.html | AWS::NetworkFirewall::LoggingConfiguration.LoggingConfiguration}
 */
export interface NetworkFirewallLoggingConfigurationLoggingConfiguration {
  LogDestinationConfigs: any[];
}
/**
 * Type definition for AWS::NetworkFirewall::RuleGroup.ActionDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-actiondefinition.html | AWS::NetworkFirewall::RuleGroup.ActionDefinition}
 */
export interface NetworkFirewallRuleGroupActionDefinition {
  PublishMetricAction?: NetworkFirewallRuleGroupPublishMetricAction;
}
/**
 * Type definition for AWS::NetworkFirewall::RuleGroup.Address
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-address.html | AWS::NetworkFirewall::RuleGroup.Address}
 */
export interface NetworkFirewallRuleGroupAddress {
  AddressDefinition: string;
}
/**
 * Type definition for AWS::NetworkFirewall::RuleGroup.CustomAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-customaction.html | AWS::NetworkFirewall::RuleGroup.CustomAction}
 */
export interface NetworkFirewallRuleGroupCustomAction {
  ActionName: string;
  ActionDefinition: NetworkFirewallRuleGroupActionDefinition;
}
/**
 * Type definition for AWS::NetworkFirewall::RuleGroup.Dimension
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-dimension.html | AWS::NetworkFirewall::RuleGroup.Dimension}
 */
export interface NetworkFirewallRuleGroupDimension {
  Value: string;
}
/**
 * Type definition for AWS::NetworkFirewall::RuleGroup.Header
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-header.html | AWS::NetworkFirewall::RuleGroup.Header}
 */
export interface NetworkFirewallRuleGroupHeader {
  Destination: string;
  Protocol: string;
  SourcePort: string;
  Direction: string;
  DestinationPort: string;
  Source: string;
}
/**
 * Type definition for AWS::NetworkFirewall::RuleGroup.IPSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-ipset.html | AWS::NetworkFirewall::RuleGroup.IPSet}
 */
export interface NetworkFirewallRuleGroupIPSet {
  Definition?: any[];
}
/**
 * Type definition for AWS::NetworkFirewall::RuleGroup.IPSetReference
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-ipsetreference.html | AWS::NetworkFirewall::RuleGroup.IPSetReference}
 */
export interface NetworkFirewallRuleGroupIPSetReference {
  ReferenceArn?: string;
}
/**
 * Type definition for AWS::NetworkFirewall::RuleGroup.MatchAttributes
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-matchattributes.html | AWS::NetworkFirewall::RuleGroup.MatchAttributes}
 */
export interface NetworkFirewallRuleGroupMatchAttributes {
  Protocols?: any[];
  TCPFlags?: any[];
  DestinationPorts?: any[];
  Destinations?: any[];
  Sources?: any[];
  SourcePorts?: any[];
}
/**
 * Type definition for AWS::NetworkFirewall::RuleGroup.PortRange
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-portrange.html | AWS::NetworkFirewall::RuleGroup.PortRange}
 */
export interface NetworkFirewallRuleGroupPortRange {
  FromPort: number;
  ToPort: number;
}
/**
 * Type definition for AWS::NetworkFirewall::RuleGroup.PortSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-portset.html | AWS::NetworkFirewall::RuleGroup.PortSet}
 */
export interface NetworkFirewallRuleGroupPortSet {
  Definition?: any[];
}
/**
 * Type definition for AWS::NetworkFirewall::RuleGroup.PublishMetricAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-publishmetricaction.html | AWS::NetworkFirewall::RuleGroup.PublishMetricAction}
 */
export interface NetworkFirewallRuleGroupPublishMetricAction {
  Dimensions: any[];
}
/**
 * Type definition for AWS::NetworkFirewall::RuleGroup.ReferenceSets
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-referencesets.html | AWS::NetworkFirewall::RuleGroup.ReferenceSets}
 */
export interface NetworkFirewallRuleGroupReferenceSets {
  IPSetReferences?: Record<string, any>;
}
/**
 * Type definition for AWS::NetworkFirewall::RuleGroup.RuleDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-ruledefinition.html | AWS::NetworkFirewall::RuleGroup.RuleDefinition}
 */
export interface NetworkFirewallRuleGroupRuleDefinition {
  Actions: any[];
  MatchAttributes: NetworkFirewallRuleGroupMatchAttributes;
}
/**
 * Type definition for AWS::NetworkFirewall::RuleGroup.RuleGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-rulegroup.html | AWS::NetworkFirewall::RuleGroup.RuleGroup}
 */
export interface NetworkFirewallRuleGroupRuleGroup {
  StatefulRuleOptions?: NetworkFirewallRuleGroupStatefulRuleOptions;
  ReferenceSets?: NetworkFirewallRuleGroupReferenceSets;
  RulesSource: NetworkFirewallRuleGroupRulesSource;
  RuleVariables?: NetworkFirewallRuleGroupRuleVariables;
}
/**
 * Type definition for AWS::NetworkFirewall::RuleGroup.RuleOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-ruleoption.html | AWS::NetworkFirewall::RuleGroup.RuleOption}
 */
export interface NetworkFirewallRuleGroupRuleOption {
  Keyword: string;
  Settings?: any[];
}
/**
 * Type definition for AWS::NetworkFirewall::RuleGroup.RuleVariables
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-rulevariables.html | AWS::NetworkFirewall::RuleGroup.RuleVariables}
 */
export interface NetworkFirewallRuleGroupRuleVariables {
  PortSets?: Record<string, any>;
  IPSets?: Record<string, any>;
}
/**
 * Type definition for AWS::NetworkFirewall::RuleGroup.RulesSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-rulessource.html | AWS::NetworkFirewall::RuleGroup.RulesSource}
 */
export interface NetworkFirewallRuleGroupRulesSource {
  StatelessRulesAndCustomActions?: NetworkFirewallRuleGroupStatelessRulesAndCustomActions;
  StatefulRules?: any[];
  RulesString?: string;
  RulesSourceList?: NetworkFirewallRuleGroupRulesSourceList;
}
/**
 * Type definition for AWS::NetworkFirewall::RuleGroup.RulesSourceList
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-rulessourcelist.html | AWS::NetworkFirewall::RuleGroup.RulesSourceList}
 */
export interface NetworkFirewallRuleGroupRulesSourceList {
  GeneratedRulesType: string;
  TargetTypes: any[];
  Targets: any[];
}
/**
 * Type definition for AWS::NetworkFirewall::RuleGroup.StatefulRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-statefulrule.html | AWS::NetworkFirewall::RuleGroup.StatefulRule}
 */
export interface NetworkFirewallRuleGroupStatefulRule {
  Action: string;
  Header: NetworkFirewallRuleGroupHeader;
  RuleOptions: any[];
}
/**
 * Type definition for AWS::NetworkFirewall::RuleGroup.StatefulRuleOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-statefulruleoptions.html | AWS::NetworkFirewall::RuleGroup.StatefulRuleOptions}
 */
export interface NetworkFirewallRuleGroupStatefulRuleOptions {
  RuleOrder?: string;
}
/**
 * Type definition for AWS::NetworkFirewall::RuleGroup.StatelessRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-statelessrule.html | AWS::NetworkFirewall::RuleGroup.StatelessRule}
 */
export interface NetworkFirewallRuleGroupStatelessRule {
  Priority: number;
  RuleDefinition: NetworkFirewallRuleGroupRuleDefinition;
}
/**
 * Type definition for AWS::NetworkFirewall::RuleGroup.StatelessRulesAndCustomActions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-statelessrulesandcustomactions.html | AWS::NetworkFirewall::RuleGroup.StatelessRulesAndCustomActions}
 */
export interface NetworkFirewallRuleGroupStatelessRulesAndCustomActions {
  StatelessRules: any[];
  CustomActions?: any[];
}
/**
 * Type definition for AWS::NetworkFirewall::RuleGroup.TCPFlagField
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-tcpflagfield.html | AWS::NetworkFirewall::RuleGroup.TCPFlagField}
 */
export interface NetworkFirewallRuleGroupTCPFlagField {
  Flags: any[];
  Masks?: any[];
}
/**
 * Type definition for AWS::NetworkFirewall::Firewall
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-firewall.html | AWS::NetworkFirewall::Firewall}
 */
export interface NetworkFirewallFirewallProps {
  FirewallPolicyArn: string;
  SubnetChangeProtection?: boolean;
  Description?: string;
  FirewallName: string;
  VpcId: string;
  DeleteProtection?: boolean;
  FirewallPolicyChangeProtection?: boolean;
  Tags?: Tag[];
  SubnetMappings: any[];
}
/**
 * Attributes type definition for AWS::NetworkFirewall::Firewall
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-firewall.html | AWS::NetworkFirewall::Firewall}
 */
export interface NetworkFirewallFirewallAttribs {
  FirewallArn?: string;
  EndpointIds?: any[];
  FirewallId?: string;
}
/**
 * Resource class for AWS::NetworkFirewall::Firewall
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-firewall.html | AWS::NetworkFirewall::Firewall}
 */
export class NetworkFirewallFirewall extends ResourceBase<
  "AWS::NetworkFirewall::Firewall",
  NetworkFirewallFirewallProps,
  NetworkFirewallFirewallAttribs
> {
  public static readonly Type = "AWS::NetworkFirewall::Firewall";
  public static readonly AttributeNames: readonly (keyof NetworkFirewallFirewallAttribs)[] =
    ["FirewallArn", "EndpointIds", "FirewallId"];
  constructor(
    logicalId: string,
    properties: NetworkFirewallFirewallProps,
    options?: ResourceOptions,
  ) {
    super(
      NetworkFirewallFirewall.Type,
      NetworkFirewallFirewall.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::NetworkFirewall::FirewallPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-firewallpolicy.html | AWS::NetworkFirewall::FirewallPolicy}
 */
export interface NetworkFirewallFirewallPolicyProps {
  Description?: string;
  FirewallPolicyName: string;
  Tags?: Tag[];
  FirewallPolicy: NetworkFirewallFirewallPolicyFirewallPolicy;
}
/**
 * Attributes type definition for AWS::NetworkFirewall::FirewallPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-firewallpolicy.html | AWS::NetworkFirewall::FirewallPolicy}
 */
export interface NetworkFirewallFirewallPolicyAttribs {
  FirewallPolicyArn?: string;
  FirewallPolicyId?: string;
}
/**
 * Resource class for AWS::NetworkFirewall::FirewallPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-firewallpolicy.html | AWS::NetworkFirewall::FirewallPolicy}
 */
export class NetworkFirewallFirewallPolicy extends ResourceBase<
  "AWS::NetworkFirewall::FirewallPolicy",
  NetworkFirewallFirewallPolicyProps,
  NetworkFirewallFirewallPolicyAttribs
> {
  public static readonly Type = "AWS::NetworkFirewall::FirewallPolicy";
  public static readonly AttributeNames: readonly (keyof NetworkFirewallFirewallPolicyAttribs)[] =
    ["FirewallPolicyArn", "FirewallPolicyId"];
  constructor(
    logicalId: string,
    properties: NetworkFirewallFirewallPolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      NetworkFirewallFirewallPolicy.Type,
      NetworkFirewallFirewallPolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::NetworkFirewall::LoggingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-loggingconfiguration.html | AWS::NetworkFirewall::LoggingConfiguration}
 */
export interface NetworkFirewallLoggingConfigurationProps {
  FirewallName?: string;
  FirewallArn: string;
  LoggingConfiguration: NetworkFirewallLoggingConfigurationLoggingConfiguration;
}
/**
 * Resource class for AWS::NetworkFirewall::LoggingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-loggingconfiguration.html | AWS::NetworkFirewall::LoggingConfiguration}
 */
export class NetworkFirewallLoggingConfiguration extends ResourceBase<
  "AWS::NetworkFirewall::LoggingConfiguration",
  NetworkFirewallLoggingConfigurationProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::NetworkFirewall::LoggingConfiguration";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: NetworkFirewallLoggingConfigurationProps,
    options?: ResourceOptions,
  ) {
    super(
      NetworkFirewallLoggingConfiguration.Type,
      NetworkFirewallLoggingConfiguration.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::NetworkFirewall::RuleGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html | AWS::NetworkFirewall::RuleGroup}
 */
export interface NetworkFirewallRuleGroupProps {
  Type: string;
  Description?: string;
  Capacity: number;
  RuleGroupName: string;
  RuleGroup?: NetworkFirewallRuleGroupRuleGroup;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::NetworkFirewall::RuleGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html | AWS::NetworkFirewall::RuleGroup}
 */
export interface NetworkFirewallRuleGroupAttribs {
  RuleGroupId?: string;
  RuleGroupArn?: string;
}
/**
 * Resource class for AWS::NetworkFirewall::RuleGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html | AWS::NetworkFirewall::RuleGroup}
 */
export class NetworkFirewallRuleGroup extends ResourceBase<
  "AWS::NetworkFirewall::RuleGroup",
  NetworkFirewallRuleGroupProps,
  NetworkFirewallRuleGroupAttribs
> {
  public static readonly Type = "AWS::NetworkFirewall::RuleGroup";
  public static readonly AttributeNames: readonly (keyof NetworkFirewallRuleGroupAttribs)[] =
    ["RuleGroupId", "RuleGroupArn"];
  constructor(
    logicalId: string,
    properties: NetworkFirewallRuleGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      NetworkFirewallRuleGroup.Type,
      NetworkFirewallRuleGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
