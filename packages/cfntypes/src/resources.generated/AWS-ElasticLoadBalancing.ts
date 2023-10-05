import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::ElasticLoadBalancing::LoadBalancer.AccessLoggingPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb-accessloggingpolicy.html | AWS::ElasticLoadBalancing::LoadBalancer.AccessLoggingPolicy}
 */
export interface ElasticLoadBalancingLoadBalancerAccessLoggingPolicy {
  EmitInterval?: number;
  Enabled: boolean;
  S3BucketName: string;
  S3BucketPrefix?: string;
}
/**
 * Type definition for AWS::ElasticLoadBalancing::LoadBalancer.AppCookieStickinessPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb-AppCookieStickinessPolicy.html | AWS::ElasticLoadBalancing::LoadBalancer.AppCookieStickinessPolicy}
 */
export interface ElasticLoadBalancingLoadBalancerAppCookieStickinessPolicy {
  CookieName: string;
  PolicyName: string;
}
/**
 * Type definition for AWS::ElasticLoadBalancing::LoadBalancer.ConnectionDrainingPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb-connectiondrainingpolicy.html | AWS::ElasticLoadBalancing::LoadBalancer.ConnectionDrainingPolicy}
 */
export interface ElasticLoadBalancingLoadBalancerConnectionDrainingPolicy {
  Enabled: boolean;
  Timeout?: number;
}
/**
 * Type definition for AWS::ElasticLoadBalancing::LoadBalancer.ConnectionSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb-connectionsettings.html | AWS::ElasticLoadBalancing::LoadBalancer.ConnectionSettings}
 */
export interface ElasticLoadBalancingLoadBalancerConnectionSettings {
  IdleTimeout: number;
}
/**
 * Type definition for AWS::ElasticLoadBalancing::LoadBalancer.HealthCheck
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb-health-check.html | AWS::ElasticLoadBalancing::LoadBalancer.HealthCheck}
 */
export interface ElasticLoadBalancingLoadBalancerHealthCheck {
  HealthyThreshold: string;
  Interval: string;
  Target: string;
  Timeout: string;
  UnhealthyThreshold: string;
}
/**
 * Type definition for AWS::ElasticLoadBalancing::LoadBalancer.LBCookieStickinessPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb-LBCookieStickinessPolicy.html | AWS::ElasticLoadBalancing::LoadBalancer.LBCookieStickinessPolicy}
 */
export interface ElasticLoadBalancingLoadBalancerLBCookieStickinessPolicy {
  CookieExpirationPeriod?: string;
  PolicyName?: string;
}
/**
 * Type definition for AWS::ElasticLoadBalancing::LoadBalancer.Listeners
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb-listener.html | AWS::ElasticLoadBalancing::LoadBalancer.Listeners}
 */
export interface ElasticLoadBalancingLoadBalancerListeners {
  InstancePort: string;
  InstanceProtocol?: string;
  LoadBalancerPort: string;
  PolicyNames?: any[];
  Protocol: string;
  SSLCertificateId?: string;
}
/**
 * Type definition for AWS::ElasticLoadBalancing::LoadBalancer.Policies
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb-policy.html | AWS::ElasticLoadBalancing::LoadBalancer.Policies}
 */
export interface ElasticLoadBalancingLoadBalancerPolicies {
  Attributes: any[];
  InstancePorts?: any[];
  LoadBalancerPorts?: any[];
  PolicyName: string;
  PolicyType: string;
}
/**
 * Type definition for AWS::ElasticLoadBalancing::LoadBalancer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb.html | AWS::ElasticLoadBalancing::LoadBalancer}
 */
export interface ElasticLoadBalancingLoadBalancerProps {
  AccessLoggingPolicy?: ElasticLoadBalancingLoadBalancerAccessLoggingPolicy;
  AppCookieStickinessPolicy?: any[];
  AvailabilityZones?: any[];
  ConnectionDrainingPolicy?: ElasticLoadBalancingLoadBalancerConnectionDrainingPolicy;
  ConnectionSettings?: ElasticLoadBalancingLoadBalancerConnectionSettings;
  CrossZone?: boolean;
  HealthCheck?: ElasticLoadBalancingLoadBalancerHealthCheck;
  Instances?: any[];
  LBCookieStickinessPolicy?: any[];
  Listeners: any[];
  LoadBalancerName?: string;
  Policies?: any[];
  Scheme?: string;
  SecurityGroups?: any[];
  Subnets?: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::ElasticLoadBalancing::LoadBalancer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb.html | AWS::ElasticLoadBalancing::LoadBalancer}
 */
export interface ElasticLoadBalancingLoadBalancerAttribs {
  CanonicalHostedZoneName?: string;
  CanonicalHostedZoneNameID?: string;
  DNSName?: string;
  "SourceSecurityGroup.GroupName"?: string;
  "SourceSecurityGroup.OwnerAlias"?: string;
}
/**
 * Resource class for AWS::ElasticLoadBalancing::LoadBalancer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb.html | AWS::ElasticLoadBalancing::LoadBalancer}
 */
export class ElasticLoadBalancingLoadBalancer extends ResourceBase<
  "AWS::ElasticLoadBalancing::LoadBalancer",
  ElasticLoadBalancingLoadBalancerProps,
  ElasticLoadBalancingLoadBalancerAttribs
> {
  public static readonly Type = "AWS::ElasticLoadBalancing::LoadBalancer";
  public static readonly AttributeNames: readonly (keyof ElasticLoadBalancingLoadBalancerAttribs)[] =
    [
      "CanonicalHostedZoneName",
      "CanonicalHostedZoneNameID",
      "DNSName",
      "SourceSecurityGroup.GroupName",
      "SourceSecurityGroup.OwnerAlias",
    ];
  constructor(
    logicalId: string,
    properties: ElasticLoadBalancingLoadBalancerProps,
    options?: ResourceOptions,
  ) {
    super(
      ElasticLoadBalancingLoadBalancer.Type,
      ElasticLoadBalancingLoadBalancer.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
