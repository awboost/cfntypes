import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::MediaStore::Container.CorsRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediastore-container-corsrule.html | AWS::MediaStore::Container.CorsRule}
 */
export interface MediaStoreContainerCorsRule {
  AllowedMethods?: any[];
  AllowedOrigins?: any[];
  ExposeHeaders?: any[];
  MaxAgeSeconds?: number;
  AllowedHeaders?: any[];
}
/**
 * Type definition for AWS::MediaStore::Container.MetricPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediastore-container-metricpolicy.html | AWS::MediaStore::Container.MetricPolicy}
 */
export interface MediaStoreContainerMetricPolicy {
  ContainerLevelMetrics: string;
  MetricPolicyRules?: any[];
}
/**
 * Type definition for AWS::MediaStore::Container.MetricPolicyRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediastore-container-metricpolicyrule.html | AWS::MediaStore::Container.MetricPolicyRule}
 */
export interface MediaStoreContainerMetricPolicyRule {
  ObjectGroup: string;
  ObjectGroupName: string;
}
/**
 * Type definition for AWS::MediaStore::Container
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediastore-container.html | AWS::MediaStore::Container}
 */
export interface MediaStoreContainerProps {
  Policy?: string;
  MetricPolicy?: MediaStoreContainerMetricPolicy;
  ContainerName: string;
  CorsPolicy?: any[];
  LifecyclePolicy?: string;
  AccessLoggingEnabled?: boolean;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::MediaStore::Container
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediastore-container.html | AWS::MediaStore::Container}
 */
export interface MediaStoreContainerAttribs {
  Endpoint?: string;
}
/**
 * Resource class for AWS::MediaStore::Container
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediastore-container.html | AWS::MediaStore::Container}
 */
export class MediaStoreContainer extends ResourceBase<
  "AWS::MediaStore::Container",
  MediaStoreContainerProps,
  MediaStoreContainerAttribs
> {
  public static readonly Type = "AWS::MediaStore::Container";
  public static readonly AttributeNames: readonly (keyof MediaStoreContainerAttribs)[] =
    ["Endpoint"];
  constructor(
    logicalId: string,
    properties: MediaStoreContainerProps,
    options?: ResourceOptions,
  ) {
    super(
      MediaStoreContainer.Type,
      MediaStoreContainer.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
