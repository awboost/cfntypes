import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::BackupGateway::Hypervisor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backupgateway-hypervisor.html | AWS::BackupGateway::Hypervisor}
 */
export interface BackupGatewayHypervisorProps {
  KmsKeyArn?: string;
  Username?: string;
  Host?: string;
  LogGroupArn?: string;
  Tags?: Tag[];
  Name?: string;
  Password?: string;
}
/**
 * Attributes type definition for AWS::BackupGateway::Hypervisor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backupgateway-hypervisor.html | AWS::BackupGateway::Hypervisor}
 */
export interface BackupGatewayHypervisorAttribs {
  HypervisorArn?: string;
}
/**
 * Resource class for AWS::BackupGateway::Hypervisor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backupgateway-hypervisor.html | AWS::BackupGateway::Hypervisor}
 */
export class BackupGatewayHypervisor extends ResourceBase<
  "AWS::BackupGateway::Hypervisor",
  BackupGatewayHypervisorProps,
  BackupGatewayHypervisorAttribs
> {
  public static readonly Type = "AWS::BackupGateway::Hypervisor";
  public static readonly AttributeNames: readonly (keyof BackupGatewayHypervisorAttribs)[] =
    ["HypervisorArn"];
  constructor(
    logicalId: string,
    properties: BackupGatewayHypervisorProps,
    options?: ResourceOptions,
  ) {
    super(
      BackupGatewayHypervisor.Type,
      BackupGatewayHypervisor.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
