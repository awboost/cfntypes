import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::InspectorV2::Filter.DateFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-datefilter.html | AWS::InspectorV2::Filter.DateFilter}
 */
export interface InspectorV2FilterDateFilter {
  EndInclusive?: number;
  StartInclusive?: number;
}
/**
 * Type definition for AWS::InspectorV2::Filter.FilterCriteria
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-filtercriteria.html | AWS::InspectorV2::Filter.FilterCriteria}
 */
export interface InspectorV2FilterFilterCriteria {
  ResourceTags?: any[];
  Ec2InstanceImageId?: any[];
  FirstObservedAt?: any[];
  InspectorScore?: any[];
  Ec2InstanceVpcId?: any[];
  LastObservedAt?: any[];
  EcrImagePushedAt?: any[];
  EcrImageArchitecture?: any[];
  RelatedVulnerabilities?: any[];
  EcrImageTags?: any[];
  VulnerabilityId?: any[];
  ComponentType?: any[];
  VendorSeverity?: any[];
  EcrImageRepositoryName?: any[];
  Title?: any[];
  ResourceType?: any[];
  Severity?: any[];
  NetworkProtocol?: any[];
  UpdatedAt?: any[];
  EcrImageHash?: any[];
  PortRange?: any[];
  VulnerabilitySource?: any[];
  Ec2InstanceSubnetId?: any[];
  FindingArn?: any[];
  ResourceId?: any[];
  FindingStatus?: any[];
  VulnerablePackages?: any[];
  AwsAccountId?: any[];
  ComponentId?: any[];
  EcrImageRegistry?: any[];
  FindingType?: any[];
}
/**
 * Type definition for AWS::InspectorV2::Filter.MapFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-mapfilter.html | AWS::InspectorV2::Filter.MapFilter}
 */
export interface InspectorV2FilterMapFilter {
  Comparison: string;
  Value?: string;
  Key?: string;
}
/**
 * Type definition for AWS::InspectorV2::Filter.NumberFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-numberfilter.html | AWS::InspectorV2::Filter.NumberFilter}
 */
export interface InspectorV2FilterNumberFilter {
  LowerInclusive?: number;
  UpperInclusive?: number;
}
/**
 * Type definition for AWS::InspectorV2::Filter.PackageFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-packagefilter.html | AWS::InspectorV2::Filter.PackageFilter}
 */
export interface InspectorV2FilterPackageFilter {
  Architecture?: InspectorV2FilterStringFilter;
  Version?: InspectorV2FilterStringFilter;
  Epoch?: InspectorV2FilterNumberFilter;
  SourceLayerHash?: InspectorV2FilterStringFilter;
  Release?: InspectorV2FilterStringFilter;
  Name?: InspectorV2FilterStringFilter;
}
/**
 * Type definition for AWS::InspectorV2::Filter.PortRangeFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-portrangefilter.html | AWS::InspectorV2::Filter.PortRangeFilter}
 */
export interface InspectorV2FilterPortRangeFilter {
  BeginInclusive?: number;
  EndInclusive?: number;
}
/**
 * Type definition for AWS::InspectorV2::Filter.StringFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-stringfilter.html | AWS::InspectorV2::Filter.StringFilter}
 */
export interface InspectorV2FilterStringFilter {
  Comparison: string;
  Value: string;
}
/**
 * Type definition for AWS::InspectorV2::Filter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html | AWS::InspectorV2::Filter}
 */
export interface InspectorV2FilterProps {
  Description?: string;
  FilterCriteria: InspectorV2FilterFilterCriteria;
  FilterAction: string;
  Name: string;
}
/**
 * Attributes type definition for AWS::InspectorV2::Filter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html | AWS::InspectorV2::Filter}
 */
export interface InspectorV2FilterAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::InspectorV2::Filter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html | AWS::InspectorV2::Filter}
 */
export class InspectorV2Filter extends ResourceBase<
  "AWS::InspectorV2::Filter",
  InspectorV2FilterProps,
  InspectorV2FilterAttribs
> {
  public static readonly Type = "AWS::InspectorV2::Filter";
  public static readonly AttributeNames: readonly (keyof InspectorV2FilterAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: InspectorV2FilterProps,
    options?: ResourceOptions,
  ) {
    super(
      InspectorV2Filter.Type,
      InspectorV2Filter.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
