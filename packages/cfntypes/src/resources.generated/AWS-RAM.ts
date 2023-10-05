import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::RAM::Permission
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-permission.html | AWS::RAM::Permission}
 */
export interface RAMPermissionProps {
  ResourceType: string;
  PolicyTemplate: object;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::RAM::Permission
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-permission.html | AWS::RAM::Permission}
 */
export interface RAMPermissionAttribs {
  Version?: string;
  PermissionType?: string;
  Arn?: string;
  IsResourceTypeDefault?: boolean;
}
/**
 * Resource class for AWS::RAM::Permission
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-permission.html | AWS::RAM::Permission}
 */
export class RAMPermission extends ResourceBase<
  "AWS::RAM::Permission",
  RAMPermissionProps,
  RAMPermissionAttribs
> {
  public static readonly Type = "AWS::RAM::Permission";
  public static readonly AttributeNames: readonly (keyof RAMPermissionAttribs)[] =
    ["Version", "PermissionType", "Arn", "IsResourceTypeDefault"];
  constructor(
    logicalId: string,
    properties: RAMPermissionProps,
    options?: ResourceOptions,
  ) {
    super(
      RAMPermission.Type,
      RAMPermission.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::RAM::ResourceShare
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-resourceshare.html | AWS::RAM::ResourceShare}
 */
export interface RAMResourceShareProps {
  PermissionArns?: any[];
  Principals?: any[];
  AllowExternalPrincipals?: boolean;
  ResourceArns?: any[];
  Sources?: any[];
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::RAM::ResourceShare
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-resourceshare.html | AWS::RAM::ResourceShare}
 */
export interface RAMResourceShareAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::RAM::ResourceShare
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-resourceshare.html | AWS::RAM::ResourceShare}
 */
export class RAMResourceShare extends ResourceBase<
  "AWS::RAM::ResourceShare",
  RAMResourceShareProps,
  RAMResourceShareAttribs
> {
  public static readonly Type = "AWS::RAM::ResourceShare";
  public static readonly AttributeNames: readonly (keyof RAMResourceShareAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: RAMResourceShareProps,
    options?: ResourceOptions,
  ) {
    super(
      RAMResourceShare.Type,
      RAMResourceShare.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
