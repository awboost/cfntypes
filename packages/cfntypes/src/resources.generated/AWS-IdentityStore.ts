import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::IdentityStore::GroupMembership.MemberId
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-identitystore-groupmembership-memberid.html | AWS::IdentityStore::GroupMembership.MemberId}
 */
export interface IdentityStoreGroupMembershipMemberId {
  UserId: string;
}
/**
 * Type definition for AWS::IdentityStore::Group
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-identitystore-group.html | AWS::IdentityStore::Group}
 */
export interface IdentityStoreGroupProps {
  Description?: string;
  DisplayName: string;
  IdentityStoreId: string;
}
/**
 * Attributes type definition for AWS::IdentityStore::Group
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-identitystore-group.html | AWS::IdentityStore::Group}
 */
export interface IdentityStoreGroupAttribs {
  GroupId?: string;
}
/**
 * Resource class for AWS::IdentityStore::Group
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-identitystore-group.html | AWS::IdentityStore::Group}
 */
export class IdentityStoreGroup extends ResourceBase<
  "AWS::IdentityStore::Group",
  IdentityStoreGroupProps,
  IdentityStoreGroupAttribs
> {
  public static readonly Type = "AWS::IdentityStore::Group";
  public static readonly AttributeNames: readonly (keyof IdentityStoreGroupAttribs)[] =
    ["GroupId"];
  constructor(
    logicalId: string,
    properties: IdentityStoreGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      IdentityStoreGroup.Type,
      IdentityStoreGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IdentityStore::GroupMembership
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-identitystore-groupmembership.html | AWS::IdentityStore::GroupMembership}
 */
export interface IdentityStoreGroupMembershipProps {
  MemberId: IdentityStoreGroupMembershipMemberId;
  IdentityStoreId: string;
  GroupId: string;
}
/**
 * Attributes type definition for AWS::IdentityStore::GroupMembership
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-identitystore-groupmembership.html | AWS::IdentityStore::GroupMembership}
 */
export interface IdentityStoreGroupMembershipAttribs {
  MembershipId?: string;
}
/**
 * Resource class for AWS::IdentityStore::GroupMembership
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-identitystore-groupmembership.html | AWS::IdentityStore::GroupMembership}
 */
export class IdentityStoreGroupMembership extends ResourceBase<
  "AWS::IdentityStore::GroupMembership",
  IdentityStoreGroupMembershipProps,
  IdentityStoreGroupMembershipAttribs
> {
  public static readonly Type = "AWS::IdentityStore::GroupMembership";
  public static readonly AttributeNames: readonly (keyof IdentityStoreGroupMembershipAttribs)[] =
    ["MembershipId"];
  constructor(
    logicalId: string,
    properties: IdentityStoreGroupMembershipProps,
    options?: ResourceOptions,
  ) {
    super(
      IdentityStoreGroupMembership.Type,
      IdentityStoreGroupMembership.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
