import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Detective::Graph
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-graph.html | AWS::Detective::Graph}
 */
export interface DetectiveGraphProps {
  AutoEnableMembers?: boolean;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::Detective::Graph
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-graph.html | AWS::Detective::Graph}
 */
export interface DetectiveGraphAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::Detective::Graph
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-graph.html | AWS::Detective::Graph}
 */
export class DetectiveGraph extends ResourceBase<
  "AWS::Detective::Graph",
  DetectiveGraphProps,
  DetectiveGraphAttribs
> {
  public static readonly Type = "AWS::Detective::Graph";
  public static readonly AttributeNames: readonly (keyof DetectiveGraphAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: DetectiveGraphProps,
    options?: ResourceOptions,
  ) {
    super(
      DetectiveGraph.Type,
      DetectiveGraph.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Detective::MemberInvitation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-memberinvitation.html | AWS::Detective::MemberInvitation}
 */
export interface DetectiveMemberInvitationProps {
  MemberId: string;
  Message?: string;
  GraphArn: string;
  DisableEmailNotification?: boolean;
  MemberEmailAddress: string;
}
/**
 * Resource class for AWS::Detective::MemberInvitation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-memberinvitation.html | AWS::Detective::MemberInvitation}
 */
export class DetectiveMemberInvitation extends ResourceBase<
  "AWS::Detective::MemberInvitation",
  DetectiveMemberInvitationProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Detective::MemberInvitation";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: DetectiveMemberInvitationProps,
    options?: ResourceOptions,
  ) {
    super(
      DetectiveMemberInvitation.Type,
      DetectiveMemberInvitation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Detective::OrganizationAdmin
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-organizationadmin.html | AWS::Detective::OrganizationAdmin}
 */
export interface DetectiveOrganizationAdminProps {
  AccountId: string;
}
/**
 * Attributes type definition for AWS::Detective::OrganizationAdmin
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-organizationadmin.html | AWS::Detective::OrganizationAdmin}
 */
export interface DetectiveOrganizationAdminAttribs {
  GraphArn?: string;
}
/**
 * Resource class for AWS::Detective::OrganizationAdmin
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-organizationadmin.html | AWS::Detective::OrganizationAdmin}
 */
export class DetectiveOrganizationAdmin extends ResourceBase<
  "AWS::Detective::OrganizationAdmin",
  DetectiveOrganizationAdminProps,
  DetectiveOrganizationAdminAttribs
> {
  public static readonly Type = "AWS::Detective::OrganizationAdmin";
  public static readonly AttributeNames: readonly (keyof DetectiveOrganizationAdminAttribs)[] =
    ["GraphArn"];
  constructor(
    logicalId: string,
    properties: DetectiveOrganizationAdminProps,
    options?: ResourceOptions,
  ) {
    super(
      DetectiveOrganizationAdmin.Type,
      DetectiveOrganizationAdmin.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
