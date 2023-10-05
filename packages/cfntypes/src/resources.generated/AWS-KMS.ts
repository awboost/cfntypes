import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::KMS::Alias
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-alias.html | AWS::KMS::Alias}
 */
export interface KMSAliasProps {
  TargetKeyId: string;
  AliasName: string;
}
/**
 * Resource class for AWS::KMS::Alias
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-alias.html | AWS::KMS::Alias}
 */
export class KMSAlias extends ResourceBase<
  "AWS::KMS::Alias",
  KMSAliasProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::KMS::Alias";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: KMSAliasProps,
    options?: ResourceOptions,
  ) {
    super(
      KMSAlias.Type,
      KMSAlias.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::KMS::Key
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-key.html | AWS::KMS::Key}
 */
export interface KMSKeyProps {
  Origin?: string;
  MultiRegion?: boolean;
  Description?: string;
  PendingWindowInDays?: number;
  BypassPolicyLockoutSafetyCheck?: boolean;
  KeyPolicy?: object;
  KeySpec?: string;
  Enabled?: boolean;
  KeyUsage?: string;
  EnableKeyRotation?: boolean;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::KMS::Key
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-key.html | AWS::KMS::Key}
 */
export interface KMSKeyAttribs {
  KeyId?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::KMS::Key
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-key.html | AWS::KMS::Key}
 */
export class KMSKey extends ResourceBase<
  "AWS::KMS::Key",
  KMSKeyProps,
  KMSKeyAttribs
> {
  public static readonly Type = "AWS::KMS::Key";
  public static readonly AttributeNames: readonly (keyof KMSKeyAttribs)[] = [
    "KeyId",
    "Arn",
  ];
  constructor(
    logicalId: string,
    properties: KMSKeyProps,
    options?: ResourceOptions,
  ) {
    super(KMSKey.Type, KMSKey.AttributeNames, logicalId, properties, options);
  }
}
/**
 * Type definition for AWS::KMS::ReplicaKey
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-replicakey.html | AWS::KMS::ReplicaKey}
 */
export interface KMSReplicaKeyProps {
  Description?: string;
  PendingWindowInDays?: number;
  KeyPolicy: object;
  PrimaryKeyArn: string;
  Enabled?: boolean;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::KMS::ReplicaKey
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-replicakey.html | AWS::KMS::ReplicaKey}
 */
export interface KMSReplicaKeyAttribs {
  KeyId?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::KMS::ReplicaKey
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-replicakey.html | AWS::KMS::ReplicaKey}
 */
export class KMSReplicaKey extends ResourceBase<
  "AWS::KMS::ReplicaKey",
  KMSReplicaKeyProps,
  KMSReplicaKeyAttribs
> {
  public static readonly Type = "AWS::KMS::ReplicaKey";
  public static readonly AttributeNames: readonly (keyof KMSReplicaKeyAttribs)[] =
    ["KeyId", "Arn"];
  constructor(
    logicalId: string,
    properties: KMSReplicaKeyProps,
    options?: ResourceOptions,
  ) {
    super(
      KMSReplicaKey.Type,
      KMSReplicaKey.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
