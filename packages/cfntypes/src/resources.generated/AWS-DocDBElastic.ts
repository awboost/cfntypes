import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::DocDBElastic::Cluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html | AWS::DocDBElastic::Cluster}
 */
export interface DocDBElasticClusterProps {
  AdminUserName: string;
  KmsKeyId?: string;
  ShardCapacity: number;
  VpcSecurityGroupIds?: any[];
  AdminUserPassword?: string;
  PreferredMaintenanceWindow?: string;
  ClusterName: string;
  AuthType: string;
  SubnetIds?: any[];
  Tags?: Tag[];
  ShardCount: number;
}
/**
 * Attributes type definition for AWS::DocDBElastic::Cluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html | AWS::DocDBElastic::Cluster}
 */
export interface DocDBElasticClusterAttribs {
  ClusterArn?: string;
  ClusterEndpoint?: string;
}
/**
 * Resource class for AWS::DocDBElastic::Cluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html | AWS::DocDBElastic::Cluster}
 */
export class DocDBElasticCluster extends ResourceBase<
  "AWS::DocDBElastic::Cluster",
  DocDBElasticClusterProps,
  DocDBElasticClusterAttribs
> {
  public static readonly Type = "AWS::DocDBElastic::Cluster";
  public static readonly AttributeNames: readonly (keyof DocDBElasticClusterAttribs)[] =
    ["ClusterArn", "ClusterEndpoint"];
  constructor(
    logicalId: string,
    properties: DocDBElasticClusterProps,
    options?: ResourceOptions,
  ) {
    super(
      DocDBElasticCluster.Type,
      DocDBElasticCluster.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
