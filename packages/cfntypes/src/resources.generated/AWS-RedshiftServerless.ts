import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::RedshiftServerless::Namespace.Namespace
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-namespace-namespace.html | AWS::RedshiftServerless::Namespace.Namespace}
 */
export interface RedshiftServerlessNamespaceNamespace {
  Status?: string;
  NamespaceName?: string;
  AdminUsername?: string;
  CreationDate?: string;
  IamRoles?: any[];
  NamespaceArn?: string;
  KmsKeyId?: string;
  DbName?: string;
  NamespaceId?: string;
  DefaultIamRoleArn?: string;
  LogExports?: any[];
}
/**
 * Type definition for AWS::RedshiftServerless::Workgroup.ConfigParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-configparameter.html | AWS::RedshiftServerless::Workgroup.ConfigParameter}
 */
export interface RedshiftServerlessWorkgroupConfigParameter {
  ParameterValue?: string;
  ParameterKey?: string;
}
/**
 * Type definition for AWS::RedshiftServerless::Workgroup.Endpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-endpoint.html | AWS::RedshiftServerless::Workgroup.Endpoint}
 */
export interface RedshiftServerlessWorkgroupEndpoint {
  Address?: string;
  VpcEndpoints?: any[];
  Port?: number;
}
/**
 * Type definition for AWS::RedshiftServerless::Workgroup.NetworkInterface
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-networkinterface.html | AWS::RedshiftServerless::Workgroup.NetworkInterface}
 */
export interface RedshiftServerlessWorkgroupNetworkInterface {
  PrivateIpAddress?: string;
  AvailabilityZone?: string;
  SubnetId?: string;
  NetworkInterfaceId?: string;
}
/**
 * Type definition for AWS::RedshiftServerless::Workgroup.VpcEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-vpcendpoint.html | AWS::RedshiftServerless::Workgroup.VpcEndpoint}
 */
export interface RedshiftServerlessWorkgroupVpcEndpoint {
  VpcId?: string;
  NetworkInterfaces?: any[];
  VpcEndpointId?: string;
}
/**
 * Type definition for AWS::RedshiftServerless::Workgroup.Workgroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-workgroup.html | AWS::RedshiftServerless::Workgroup.Workgroup}
 */
export interface RedshiftServerlessWorkgroupWorkgroup {
  Status?: string;
  CreationDate?: string;
  WorkgroupName?: string;
  WorkgroupArn?: string;
  BaseCapacity?: number;
  EnhancedVpcRouting?: boolean;
  WorkgroupId?: string;
  SecurityGroupIds?: any[];
  SubnetIds?: any[];
  NamespaceName?: string;
  Endpoint?: RedshiftServerlessWorkgroupEndpoint;
  ConfigParameters?: any[];
  PubliclyAccessible?: boolean;
}
/**
 * Type definition for AWS::RedshiftServerless::Namespace
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-namespace.html | AWS::RedshiftServerless::Namespace}
 */
export interface RedshiftServerlessNamespaceProps {
  AdminUsername?: string;
  NamespaceName: string;
  IamRoles?: any[];
  KmsKeyId?: string;
  FinalSnapshotName?: string;
  FinalSnapshotRetentionPeriod?: number;
  AdminUserPassword?: string;
  DbName?: string;
  DefaultIamRoleArn?: string;
  Tags?: Tag[];
  LogExports?: any[];
}
/**
 * Attributes type definition for AWS::RedshiftServerless::Namespace
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-namespace.html | AWS::RedshiftServerless::Namespace}
 */
export interface RedshiftServerlessNamespaceAttribs {
  "Namespace.LogExports"?: any[];
  "Namespace.NamespaceName"?: string;
  "Namespace.CreationDate"?: string;
  "Namespace.Status"?: string;
  "Namespace.AdminUsername"?: string;
  "Namespace.KmsKeyId"?: string;
  "Namespace.DbName"?: string;
  "Namespace.IamRoles"?: any[];
  "Namespace.NamespaceArn"?: string;
  "Namespace.NamespaceId"?: string;
  "Namespace.DefaultIamRoleArn"?: string;
  Namespace?: RedshiftServerlessNamespaceNamespace;
}
/**
 * Resource class for AWS::RedshiftServerless::Namespace
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-namespace.html | AWS::RedshiftServerless::Namespace}
 */
export class RedshiftServerlessNamespace extends ResourceBase<
  "AWS::RedshiftServerless::Namespace",
  RedshiftServerlessNamespaceProps,
  RedshiftServerlessNamespaceAttribs
> {
  public static readonly Type = "AWS::RedshiftServerless::Namespace";
  public static readonly AttributeNames: readonly (keyof RedshiftServerlessNamespaceAttribs)[] =
    [
      "Namespace.LogExports",
      "Namespace.NamespaceName",
      "Namespace.CreationDate",
      "Namespace.Status",
      "Namespace.AdminUsername",
      "Namespace.KmsKeyId",
      "Namespace.DbName",
      "Namespace.IamRoles",
      "Namespace.NamespaceArn",
      "Namespace.NamespaceId",
      "Namespace.DefaultIamRoleArn",
      "Namespace",
    ];
  constructor(
    logicalId: string,
    properties: RedshiftServerlessNamespaceProps,
    options?: ResourceOptions,
  ) {
    super(
      RedshiftServerlessNamespace.Type,
      RedshiftServerlessNamespace.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::RedshiftServerless::Workgroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-workgroup.html | AWS::RedshiftServerless::Workgroup}
 */
export interface RedshiftServerlessWorkgroupProps {
  NamespaceName?: string;
  ConfigParameters?: any[];
  Port?: number;
  WorkgroupName: string;
  BaseCapacity?: number;
  EnhancedVpcRouting?: boolean;
  PubliclyAccessible?: boolean;
  SecurityGroupIds?: any[];
  SubnetIds?: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::RedshiftServerless::Workgroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-workgroup.html | AWS::RedshiftServerless::Workgroup}
 */
export interface RedshiftServerlessWorkgroupAttribs {
  "Workgroup.Endpoint"?: RedshiftServerlessWorkgroupEndpoint;
  "Workgroup.Endpoint.Port"?: number;
  "Workgroup.SecurityGroupIds"?: any[];
  "Workgroup.CreationDate"?: string;
  "Workgroup.PubliclyAccessible"?: boolean;
  Workgroup?: RedshiftServerlessWorkgroupWorkgroup;
  "Workgroup.WorkgroupArn"?: string;
  "Workgroup.WorkgroupName"?: string;
  "Workgroup.ConfigParameters"?: any[];
  "Workgroup.Status"?: string;
  "Workgroup.BaseCapacity"?: number;
  "Workgroup.EnhancedVpcRouting"?: boolean;
  "Workgroup.WorkgroupId"?: string;
  "Workgroup.NamespaceName"?: string;
  "Workgroup.Endpoint.VpcEndpoints"?: any[];
  "Workgroup.Endpoint.Address"?: string;
  "Workgroup.SubnetIds"?: any[];
}
/**
 * Resource class for AWS::RedshiftServerless::Workgroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-workgroup.html | AWS::RedshiftServerless::Workgroup}
 */
export class RedshiftServerlessWorkgroup extends ResourceBase<
  "AWS::RedshiftServerless::Workgroup",
  RedshiftServerlessWorkgroupProps,
  RedshiftServerlessWorkgroupAttribs
> {
  public static readonly Type = "AWS::RedshiftServerless::Workgroup";
  public static readonly AttributeNames: readonly (keyof RedshiftServerlessWorkgroupAttribs)[] =
    [
      "Workgroup.Endpoint",
      "Workgroup.Endpoint.Port",
      "Workgroup.SecurityGroupIds",
      "Workgroup.CreationDate",
      "Workgroup.PubliclyAccessible",
      "Workgroup",
      "Workgroup.WorkgroupArn",
      "Workgroup.WorkgroupName",
      "Workgroup.ConfigParameters",
      "Workgroup.Status",
      "Workgroup.BaseCapacity",
      "Workgroup.EnhancedVpcRouting",
      "Workgroup.WorkgroupId",
      "Workgroup.NamespaceName",
      "Workgroup.Endpoint.VpcEndpoints",
      "Workgroup.Endpoint.Address",
      "Workgroup.SubnetIds",
    ];
  constructor(
    logicalId: string,
    properties: RedshiftServerlessWorkgroupProps,
    options?: ResourceOptions,
  ) {
    super(
      RedshiftServerlessWorkgroup.Type,
      RedshiftServerlessWorkgroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
