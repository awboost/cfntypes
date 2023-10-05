import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::ManagedBlockchain::Member.ApprovalThresholdPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-approvalthresholdpolicy.html | AWS::ManagedBlockchain::Member.ApprovalThresholdPolicy}
 */
export interface ManagedBlockchainMemberApprovalThresholdPolicy {
  ThresholdComparator?: string;
  ThresholdPercentage?: number;
  ProposalDurationInHours?: number;
}
/**
 * Type definition for AWS::ManagedBlockchain::Member.MemberConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-memberconfiguration.html | AWS::ManagedBlockchain::Member.MemberConfiguration}
 */
export interface ManagedBlockchainMemberMemberConfiguration {
  Description?: string;
  MemberFrameworkConfiguration?: ManagedBlockchainMemberMemberFrameworkConfiguration;
  Name: string;
}
/**
 * Type definition for AWS::ManagedBlockchain::Member.MemberFabricConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-memberfabricconfiguration.html | AWS::ManagedBlockchain::Member.MemberFabricConfiguration}
 */
export interface ManagedBlockchainMemberMemberFabricConfiguration {
  AdminUsername: string;
  AdminPassword: string;
}
/**
 * Type definition for AWS::ManagedBlockchain::Member.MemberFrameworkConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-memberframeworkconfiguration.html | AWS::ManagedBlockchain::Member.MemberFrameworkConfiguration}
 */
export interface ManagedBlockchainMemberMemberFrameworkConfiguration {
  MemberFabricConfiguration?: ManagedBlockchainMemberMemberFabricConfiguration;
}
/**
 * Type definition for AWS::ManagedBlockchain::Member.NetworkConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-networkconfiguration.html | AWS::ManagedBlockchain::Member.NetworkConfiguration}
 */
export interface ManagedBlockchainMemberNetworkConfiguration {
  Description?: string;
  FrameworkVersion: string;
  VotingPolicy: ManagedBlockchainMemberVotingPolicy;
  Framework: string;
  Name: string;
  NetworkFrameworkConfiguration?: ManagedBlockchainMemberNetworkFrameworkConfiguration;
}
/**
 * Type definition for AWS::ManagedBlockchain::Member.NetworkFabricConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-networkfabricconfiguration.html | AWS::ManagedBlockchain::Member.NetworkFabricConfiguration}
 */
export interface ManagedBlockchainMemberNetworkFabricConfiguration {
  Edition: string;
}
/**
 * Type definition for AWS::ManagedBlockchain::Member.NetworkFrameworkConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-networkframeworkconfiguration.html | AWS::ManagedBlockchain::Member.NetworkFrameworkConfiguration}
 */
export interface ManagedBlockchainMemberNetworkFrameworkConfiguration {
  NetworkFabricConfiguration?: ManagedBlockchainMemberNetworkFabricConfiguration;
}
/**
 * Type definition for AWS::ManagedBlockchain::Member.VotingPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-votingpolicy.html | AWS::ManagedBlockchain::Member.VotingPolicy}
 */
export interface ManagedBlockchainMemberVotingPolicy {
  ApprovalThresholdPolicy?: ManagedBlockchainMemberApprovalThresholdPolicy;
}
/**
 * Type definition for AWS::ManagedBlockchain::Node.NodeConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-node-nodeconfiguration.html | AWS::ManagedBlockchain::Node.NodeConfiguration}
 */
export interface ManagedBlockchainNodeNodeConfiguration {
  AvailabilityZone: string;
  InstanceType: string;
}
/**
 * Type definition for AWS::ManagedBlockchain::Accessor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-accessor.html | AWS::ManagedBlockchain::Accessor}
 */
export interface ManagedBlockchainAccessorProps {
  Tags?: Tag[];
  AccessorType: string;
}
/**
 * Attributes type definition for AWS::ManagedBlockchain::Accessor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-accessor.html | AWS::ManagedBlockchain::Accessor}
 */
export interface ManagedBlockchainAccessorAttribs {
  Status?: string;
  CreationDate?: string;
  BillingToken?: string;
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::ManagedBlockchain::Accessor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-accessor.html | AWS::ManagedBlockchain::Accessor}
 */
export class ManagedBlockchainAccessor extends ResourceBase<
  "AWS::ManagedBlockchain::Accessor",
  ManagedBlockchainAccessorProps,
  ManagedBlockchainAccessorAttribs
> {
  public static readonly Type = "AWS::ManagedBlockchain::Accessor";
  public static readonly AttributeNames: readonly (keyof ManagedBlockchainAccessorAttribs)[] =
    ["Status", "CreationDate", "BillingToken", "Id", "Arn"];
  constructor(
    logicalId: string,
    properties: ManagedBlockchainAccessorProps,
    options?: ResourceOptions,
  ) {
    super(
      ManagedBlockchainAccessor.Type,
      ManagedBlockchainAccessor.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ManagedBlockchain::Member
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html | AWS::ManagedBlockchain::Member}
 */
export interface ManagedBlockchainMemberProps {
  MemberConfiguration: ManagedBlockchainMemberMemberConfiguration;
  NetworkConfiguration?: ManagedBlockchainMemberNetworkConfiguration;
  NetworkId?: string;
  InvitationId?: string;
}
/**
 * Attributes type definition for AWS::ManagedBlockchain::Member
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html | AWS::ManagedBlockchain::Member}
 */
export interface ManagedBlockchainMemberAttribs {
  MemberId?: string;
  NetworkId?: string;
}
/**
 * Resource class for AWS::ManagedBlockchain::Member
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html | AWS::ManagedBlockchain::Member}
 */
export class ManagedBlockchainMember extends ResourceBase<
  "AWS::ManagedBlockchain::Member",
  ManagedBlockchainMemberProps,
  ManagedBlockchainMemberAttribs
> {
  public static readonly Type = "AWS::ManagedBlockchain::Member";
  public static readonly AttributeNames: readonly (keyof ManagedBlockchainMemberAttribs)[] =
    ["MemberId", "NetworkId"];
  constructor(
    logicalId: string,
    properties: ManagedBlockchainMemberProps,
    options?: ResourceOptions,
  ) {
    super(
      ManagedBlockchainMember.Type,
      ManagedBlockchainMember.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ManagedBlockchain::Node
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-node.html | AWS::ManagedBlockchain::Node}
 */
export interface ManagedBlockchainNodeProps {
  MemberId?: string;
  NetworkId: string;
  NodeConfiguration: ManagedBlockchainNodeNodeConfiguration;
}
/**
 * Attributes type definition for AWS::ManagedBlockchain::Node
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-node.html | AWS::ManagedBlockchain::Node}
 */
export interface ManagedBlockchainNodeAttribs {
  MemberId?: string;
  NodeId?: string;
  Arn?: string;
  NetworkId?: string;
}
/**
 * Resource class for AWS::ManagedBlockchain::Node
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-node.html | AWS::ManagedBlockchain::Node}
 */
export class ManagedBlockchainNode extends ResourceBase<
  "AWS::ManagedBlockchain::Node",
  ManagedBlockchainNodeProps,
  ManagedBlockchainNodeAttribs
> {
  public static readonly Type = "AWS::ManagedBlockchain::Node";
  public static readonly AttributeNames: readonly (keyof ManagedBlockchainNodeAttribs)[] =
    ["MemberId", "NodeId", "Arn", "NetworkId"];
  constructor(
    logicalId: string,
    properties: ManagedBlockchainNodeProps,
    options?: ResourceOptions,
  ) {
    super(
      ManagedBlockchainNode.Type,
      ManagedBlockchainNode.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
