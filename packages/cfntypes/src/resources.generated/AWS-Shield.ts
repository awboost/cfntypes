import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Shield::ProactiveEngagement.EmergencyContact
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-shield-proactiveengagement-emergencycontact.html | AWS::Shield::ProactiveEngagement.EmergencyContact}
 */
export interface ShieldProactiveEngagementEmergencyContact {
  ContactNotes?: string;
  PhoneNumber?: string;
  EmailAddress: string;
}
/**
 * Type definition for AWS::Shield::Protection.Action
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-shield-protection-action.html | AWS::Shield::Protection.Action}
 */
export interface ShieldProtectionAction {
  Block?: object;
  Count?: object;
}
/**
 * Type definition for AWS::Shield::Protection.ApplicationLayerAutomaticResponseConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-shield-protection-applicationlayerautomaticresponseconfiguration.html | AWS::Shield::Protection.ApplicationLayerAutomaticResponseConfiguration}
 */
export interface ShieldProtectionApplicationLayerAutomaticResponseConfiguration {
  Status: string;
  Action: ShieldProtectionAction;
}
/**
 * Type definition for AWS::Shield::DRTAccess
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-drtaccess.html | AWS::Shield::DRTAccess}
 */
export interface ShieldDRTAccessProps {
  LogBucketList?: any[];
  RoleArn: string;
}
/**
 * Attributes type definition for AWS::Shield::DRTAccess
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-drtaccess.html | AWS::Shield::DRTAccess}
 */
export interface ShieldDRTAccessAttribs {
  AccountId?: string;
}
/**
 * Resource class for AWS::Shield::DRTAccess
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-drtaccess.html | AWS::Shield::DRTAccess}
 */
export class ShieldDRTAccess extends ResourceBase<
  "AWS::Shield::DRTAccess",
  ShieldDRTAccessProps,
  ShieldDRTAccessAttribs
> {
  public static readonly Type = "AWS::Shield::DRTAccess";
  public static readonly AttributeNames: readonly (keyof ShieldDRTAccessAttribs)[] =
    ["AccountId"];
  constructor(
    logicalId: string,
    properties: ShieldDRTAccessProps,
    options?: ResourceOptions,
  ) {
    super(
      ShieldDRTAccess.Type,
      ShieldDRTAccess.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Shield::ProactiveEngagement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-proactiveengagement.html | AWS::Shield::ProactiveEngagement}
 */
export interface ShieldProactiveEngagementProps {
  ProactiveEngagementStatus: string;
  EmergencyContactList: any[];
}
/**
 * Attributes type definition for AWS::Shield::ProactiveEngagement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-proactiveengagement.html | AWS::Shield::ProactiveEngagement}
 */
export interface ShieldProactiveEngagementAttribs {
  AccountId?: string;
}
/**
 * Resource class for AWS::Shield::ProactiveEngagement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-proactiveengagement.html | AWS::Shield::ProactiveEngagement}
 */
export class ShieldProactiveEngagement extends ResourceBase<
  "AWS::Shield::ProactiveEngagement",
  ShieldProactiveEngagementProps,
  ShieldProactiveEngagementAttribs
> {
  public static readonly Type = "AWS::Shield::ProactiveEngagement";
  public static readonly AttributeNames: readonly (keyof ShieldProactiveEngagementAttribs)[] =
    ["AccountId"];
  constructor(
    logicalId: string,
    properties: ShieldProactiveEngagementProps,
    options?: ResourceOptions,
  ) {
    super(
      ShieldProactiveEngagement.Type,
      ShieldProactiveEngagement.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Shield::Protection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-protection.html | AWS::Shield::Protection}
 */
export interface ShieldProtectionProps {
  ResourceArn: string;
  HealthCheckArns?: any[];
  ApplicationLayerAutomaticResponseConfiguration?: ShieldProtectionApplicationLayerAutomaticResponseConfiguration;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::Shield::Protection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-protection.html | AWS::Shield::Protection}
 */
export interface ShieldProtectionAttribs {
  ProtectionArn?: string;
  ProtectionId?: string;
}
/**
 * Resource class for AWS::Shield::Protection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-protection.html | AWS::Shield::Protection}
 */
export class ShieldProtection extends ResourceBase<
  "AWS::Shield::Protection",
  ShieldProtectionProps,
  ShieldProtectionAttribs
> {
  public static readonly Type = "AWS::Shield::Protection";
  public static readonly AttributeNames: readonly (keyof ShieldProtectionAttribs)[] =
    ["ProtectionArn", "ProtectionId"];
  constructor(
    logicalId: string,
    properties: ShieldProtectionProps,
    options?: ResourceOptions,
  ) {
    super(
      ShieldProtection.Type,
      ShieldProtection.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Shield::ProtectionGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-protectiongroup.html | AWS::Shield::ProtectionGroup}
 */
export interface ShieldProtectionGroupProps {
  Aggregation: string;
  Pattern: string;
  ProtectionGroupId: string;
  ResourceType?: string;
  Members?: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::Shield::ProtectionGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-protectiongroup.html | AWS::Shield::ProtectionGroup}
 */
export interface ShieldProtectionGroupAttribs {
  ProtectionGroupArn?: string;
}
/**
 * Resource class for AWS::Shield::ProtectionGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-protectiongroup.html | AWS::Shield::ProtectionGroup}
 */
export class ShieldProtectionGroup extends ResourceBase<
  "AWS::Shield::ProtectionGroup",
  ShieldProtectionGroupProps,
  ShieldProtectionGroupAttribs
> {
  public static readonly Type = "AWS::Shield::ProtectionGroup";
  public static readonly AttributeNames: readonly (keyof ShieldProtectionGroupAttribs)[] =
    ["ProtectionGroupArn"];
  constructor(
    logicalId: string,
    properties: ShieldProtectionGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      ShieldProtectionGroup.Type,
      ShieldProtectionGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
