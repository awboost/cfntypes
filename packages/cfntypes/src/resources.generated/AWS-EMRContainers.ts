import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::EMRContainers::VirtualCluster.ContainerInfo
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrcontainers-virtualcluster-containerinfo.html | AWS::EMRContainers::VirtualCluster.ContainerInfo}
 */
export interface EMRContainersVirtualClusterContainerInfo {
  EksInfo: EMRContainersVirtualClusterEksInfo;
}
/**
 * Type definition for AWS::EMRContainers::VirtualCluster.ContainerProvider
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrcontainers-virtualcluster-containerprovider.html | AWS::EMRContainers::VirtualCluster.ContainerProvider}
 */
export interface EMRContainersVirtualClusterContainerProvider {
  Type: string;
  Id: string;
  Info: EMRContainersVirtualClusterContainerInfo;
}
/**
 * Type definition for AWS::EMRContainers::VirtualCluster.EksInfo
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrcontainers-virtualcluster-eksinfo.html | AWS::EMRContainers::VirtualCluster.EksInfo}
 */
export interface EMRContainersVirtualClusterEksInfo {
  Namespace: string;
}
/**
 * Type definition for AWS::EMRContainers::VirtualCluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrcontainers-virtualcluster.html | AWS::EMRContainers::VirtualCluster}
 */
export interface EMRContainersVirtualClusterProps {
  ContainerProvider: EMRContainersVirtualClusterContainerProvider;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::EMRContainers::VirtualCluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrcontainers-virtualcluster.html | AWS::EMRContainers::VirtualCluster}
 */
export interface EMRContainersVirtualClusterAttribs {
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::EMRContainers::VirtualCluster
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrcontainers-virtualcluster.html | AWS::EMRContainers::VirtualCluster}
 */
export class EMRContainersVirtualCluster extends ResourceBase<
  "AWS::EMRContainers::VirtualCluster",
  EMRContainersVirtualClusterProps,
  EMRContainersVirtualClusterAttribs
> {
  public static readonly Type = "AWS::EMRContainers::VirtualCluster";
  public static readonly AttributeNames: readonly (keyof EMRContainersVirtualClusterAttribs)[] =
    ["Id", "Arn"];
  constructor(
    logicalId: string,
    properties: EMRContainersVirtualClusterProps,
    options?: ResourceOptions,
  ) {
    super(
      EMRContainersVirtualCluster.Type,
      EMRContainersVirtualCluster.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
