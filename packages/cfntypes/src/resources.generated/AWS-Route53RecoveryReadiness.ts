import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Route53RecoveryReadiness::ResourceSet.DNSTargetResource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoveryreadiness-resourceset-dnstargetresource.html | AWS::Route53RecoveryReadiness::ResourceSet.DNSTargetResource}
 */
export interface Route53RecoveryReadinessResourceSetDNSTargetResource {
  TargetResource?: Route53RecoveryReadinessResourceSetTargetResource;
  RecordType?: string;
  DomainName?: string;
  HostedZoneArn?: string;
  RecordSetId?: string;
}
/**
 * Type definition for AWS::Route53RecoveryReadiness::ResourceSet.NLBResource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoveryreadiness-resourceset-nlbresource.html | AWS::Route53RecoveryReadiness::ResourceSet.NLBResource}
 */
export interface Route53RecoveryReadinessResourceSetNLBResource {
  Arn?: string;
}
/**
 * Type definition for AWS::Route53RecoveryReadiness::ResourceSet.R53ResourceRecord
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoveryreadiness-resourceset-r53resourcerecord.html | AWS::Route53RecoveryReadiness::ResourceSet.R53ResourceRecord}
 */
export interface Route53RecoveryReadinessResourceSetR53ResourceRecord {
  DomainName?: string;
  RecordSetId?: string;
}
/**
 * Type definition for AWS::Route53RecoveryReadiness::ResourceSet.Resource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoveryreadiness-resourceset-resource.html | AWS::Route53RecoveryReadiness::ResourceSet.Resource}
 */
export interface Route53RecoveryReadinessResourceSetResource {
  ResourceArn?: string;
  DnsTargetResource?: Route53RecoveryReadinessResourceSetDNSTargetResource;
  ReadinessScopes?: any[];
  ComponentId?: string;
}
/**
 * Type definition for AWS::Route53RecoveryReadiness::ResourceSet.TargetResource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoveryreadiness-resourceset-targetresource.html | AWS::Route53RecoveryReadiness::ResourceSet.TargetResource}
 */
export interface Route53RecoveryReadinessResourceSetTargetResource {
  R53Resource?: Route53RecoveryReadinessResourceSetR53ResourceRecord;
  NLBResource?: Route53RecoveryReadinessResourceSetNLBResource;
}
/**
 * Type definition for AWS::Route53RecoveryReadiness::Cell
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-cell.html | AWS::Route53RecoveryReadiness::Cell}
 */
export interface Route53RecoveryReadinessCellProps {
  CellName?: string;
  Cells?: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::Route53RecoveryReadiness::Cell
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-cell.html | AWS::Route53RecoveryReadiness::Cell}
 */
export interface Route53RecoveryReadinessCellAttribs {
  ParentReadinessScopes?: any[];
  CellArn?: string;
}
/**
 * Resource class for AWS::Route53RecoveryReadiness::Cell
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-cell.html | AWS::Route53RecoveryReadiness::Cell}
 */
export class Route53RecoveryReadinessCell extends ResourceBase<
  "AWS::Route53RecoveryReadiness::Cell",
  Route53RecoveryReadinessCellProps,
  Route53RecoveryReadinessCellAttribs
> {
  public static readonly Type = "AWS::Route53RecoveryReadiness::Cell";
  public static readonly AttributeNames: readonly (keyof Route53RecoveryReadinessCellAttribs)[] =
    ["ParentReadinessScopes", "CellArn"];
  constructor(
    logicalId: string,
    properties: Route53RecoveryReadinessCellProps,
    options?: ResourceOptions,
  ) {
    super(
      Route53RecoveryReadinessCell.Type,
      Route53RecoveryReadinessCell.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Route53RecoveryReadiness::ReadinessCheck
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-readinesscheck.html | AWS::Route53RecoveryReadiness::ReadinessCheck}
 */
export interface Route53RecoveryReadinessReadinessCheckProps {
  ResourceSetName?: string;
  ReadinessCheckName?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::Route53RecoveryReadiness::ReadinessCheck
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-readinesscheck.html | AWS::Route53RecoveryReadiness::ReadinessCheck}
 */
export interface Route53RecoveryReadinessReadinessCheckAttribs {
  ReadinessCheckArn?: string;
}
/**
 * Resource class for AWS::Route53RecoveryReadiness::ReadinessCheck
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-readinesscheck.html | AWS::Route53RecoveryReadiness::ReadinessCheck}
 */
export class Route53RecoveryReadinessReadinessCheck extends ResourceBase<
  "AWS::Route53RecoveryReadiness::ReadinessCheck",
  Route53RecoveryReadinessReadinessCheckProps,
  Route53RecoveryReadinessReadinessCheckAttribs
> {
  public static readonly Type = "AWS::Route53RecoveryReadiness::ReadinessCheck";
  public static readonly AttributeNames: readonly (keyof Route53RecoveryReadinessReadinessCheckAttribs)[] =
    ["ReadinessCheckArn"];
  constructor(
    logicalId: string,
    properties: Route53RecoveryReadinessReadinessCheckProps,
    options?: ResourceOptions,
  ) {
    super(
      Route53RecoveryReadinessReadinessCheck.Type,
      Route53RecoveryReadinessReadinessCheck.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Route53RecoveryReadiness::RecoveryGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-recoverygroup.html | AWS::Route53RecoveryReadiness::RecoveryGroup}
 */
export interface Route53RecoveryReadinessRecoveryGroupProps {
  RecoveryGroupName?: string;
  Cells?: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::Route53RecoveryReadiness::RecoveryGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-recoverygroup.html | AWS::Route53RecoveryReadiness::RecoveryGroup}
 */
export interface Route53RecoveryReadinessRecoveryGroupAttribs {
  RecoveryGroupArn?: string;
}
/**
 * Resource class for AWS::Route53RecoveryReadiness::RecoveryGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-recoverygroup.html | AWS::Route53RecoveryReadiness::RecoveryGroup}
 */
export class Route53RecoveryReadinessRecoveryGroup extends ResourceBase<
  "AWS::Route53RecoveryReadiness::RecoveryGroup",
  Route53RecoveryReadinessRecoveryGroupProps,
  Route53RecoveryReadinessRecoveryGroupAttribs
> {
  public static readonly Type = "AWS::Route53RecoveryReadiness::RecoveryGroup";
  public static readonly AttributeNames: readonly (keyof Route53RecoveryReadinessRecoveryGroupAttribs)[] =
    ["RecoveryGroupArn"];
  constructor(
    logicalId: string,
    properties: Route53RecoveryReadinessRecoveryGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      Route53RecoveryReadinessRecoveryGroup.Type,
      Route53RecoveryReadinessRecoveryGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Route53RecoveryReadiness::ResourceSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-resourceset.html | AWS::Route53RecoveryReadiness::ResourceSet}
 */
export interface Route53RecoveryReadinessResourceSetProps {
  ResourceSetType: string;
  ResourceSetName?: string;
  Resources: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::Route53RecoveryReadiness::ResourceSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-resourceset.html | AWS::Route53RecoveryReadiness::ResourceSet}
 */
export interface Route53RecoveryReadinessResourceSetAttribs {
  ResourceSetArn?: string;
}
/**
 * Resource class for AWS::Route53RecoveryReadiness::ResourceSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-resourceset.html | AWS::Route53RecoveryReadiness::ResourceSet}
 */
export class Route53RecoveryReadinessResourceSet extends ResourceBase<
  "AWS::Route53RecoveryReadiness::ResourceSet",
  Route53RecoveryReadinessResourceSetProps,
  Route53RecoveryReadinessResourceSetAttribs
> {
  public static readonly Type = "AWS::Route53RecoveryReadiness::ResourceSet";
  public static readonly AttributeNames: readonly (keyof Route53RecoveryReadinessResourceSetAttribs)[] =
    ["ResourceSetArn"];
  constructor(
    logicalId: string,
    properties: Route53RecoveryReadinessResourceSetProps,
    options?: ResourceOptions,
  ) {
    super(
      Route53RecoveryReadinessResourceSet.Type,
      Route53RecoveryReadinessResourceSet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
