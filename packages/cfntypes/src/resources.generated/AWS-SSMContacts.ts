import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::SSMContacts::Contact.ChannelTargetInfo
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-contact-channeltargetinfo.html | AWS::SSMContacts::Contact.ChannelTargetInfo}
 */
export interface SSMContactsContactChannelTargetInfo {
  RetryIntervalInMinutes: number;
  ChannelId: string;
}
/**
 * Type definition for AWS::SSMContacts::Contact.ContactTargetInfo
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-contact-contacttargetinfo.html | AWS::SSMContacts::Contact.ContactTargetInfo}
 */
export interface SSMContactsContactContactTargetInfo {
  ContactId: string;
  IsEssential: boolean;
}
/**
 * Type definition for AWS::SSMContacts::Contact.Stage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-contact-stage.html | AWS::SSMContacts::Contact.Stage}
 */
export interface SSMContactsContactStage {
  DurationInMinutes?: number;
  RotationIds?: any[];
  Targets?: any[];
}
/**
 * Type definition for AWS::SSMContacts::Contact.Targets
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-contact-targets.html | AWS::SSMContacts::Contact.Targets}
 */
export interface SSMContactsContactTargets {
  ChannelTargetInfo?: SSMContactsContactChannelTargetInfo;
  ContactTargetInfo?: SSMContactsContactContactTargetInfo;
}
/**
 * Type definition for AWS::SSMContacts::Plan.ChannelTargetInfo
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-plan-channeltargetinfo.html | AWS::SSMContacts::Plan.ChannelTargetInfo}
 */
export interface SSMContactsPlanChannelTargetInfo {
  RetryIntervalInMinutes: number;
  ChannelId: string;
}
/**
 * Type definition for AWS::SSMContacts::Plan.ContactTargetInfo
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-plan-contacttargetinfo.html | AWS::SSMContacts::Plan.ContactTargetInfo}
 */
export interface SSMContactsPlanContactTargetInfo {
  ContactId: string;
  IsEssential: boolean;
}
/**
 * Type definition for AWS::SSMContacts::Plan.Stage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-plan-stage.html | AWS::SSMContacts::Plan.Stage}
 */
export interface SSMContactsPlanStage {
  DurationInMinutes: number;
  Targets?: any[];
}
/**
 * Type definition for AWS::SSMContacts::Plan.Targets
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-plan-targets.html | AWS::SSMContacts::Plan.Targets}
 */
export interface SSMContactsPlanTargets {
  ChannelTargetInfo?: SSMContactsPlanChannelTargetInfo;
  ContactTargetInfo?: SSMContactsPlanContactTargetInfo;
}
/**
 * Type definition for AWS::SSMContacts::Rotation.CoverageTime
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-rotation-coveragetime.html | AWS::SSMContacts::Rotation.CoverageTime}
 */
export interface SSMContactsRotationCoverageTime {
  EndTime: string;
  StartTime: string;
}
/**
 * Type definition for AWS::SSMContacts::Rotation.MonthlySetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-rotation-monthlysetting.html | AWS::SSMContacts::Rotation.MonthlySetting}
 */
export interface SSMContactsRotationMonthlySetting {
  DayOfMonth: number;
  HandOffTime: string;
}
/**
 * Type definition for AWS::SSMContacts::Rotation.RecurrenceSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-rotation-recurrencesettings.html | AWS::SSMContacts::Rotation.RecurrenceSettings}
 */
export interface SSMContactsRotationRecurrenceSettings {
  DailySettings?: any[];
  NumberOfOnCalls: number;
  ShiftCoverages?: any[];
  WeeklySettings?: any[];
  RecurrenceMultiplier: number;
  MonthlySettings?: any[];
}
/**
 * Type definition for AWS::SSMContacts::Rotation.ShiftCoverage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-rotation-shiftcoverage.html | AWS::SSMContacts::Rotation.ShiftCoverage}
 */
export interface SSMContactsRotationShiftCoverage {
  DayOfWeek: string;
  CoverageTimes: any[];
}
/**
 * Type definition for AWS::SSMContacts::Rotation.WeeklySetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-rotation-weeklysetting.html | AWS::SSMContacts::Rotation.WeeklySetting}
 */
export interface SSMContactsRotationWeeklySetting {
  DayOfWeek: string;
  HandOffTime: string;
}
/**
 * Type definition for AWS::SSMContacts::Contact
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contact.html | AWS::SSMContacts::Contact}
 */
export interface SSMContactsContactProps {
  Type: string;
  Alias: string;
  DisplayName: string;
  Plan?: any[];
}
/**
 * Attributes type definition for AWS::SSMContacts::Contact
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contact.html | AWS::SSMContacts::Contact}
 */
export interface SSMContactsContactAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::SSMContacts::Contact
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contact.html | AWS::SSMContacts::Contact}
 */
export class SSMContactsContact extends ResourceBase<
  "AWS::SSMContacts::Contact",
  SSMContactsContactProps,
  SSMContactsContactAttribs
> {
  public static readonly Type = "AWS::SSMContacts::Contact";
  public static readonly AttributeNames: readonly (keyof SSMContactsContactAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: SSMContactsContactProps,
    options?: ResourceOptions,
  ) {
    super(
      SSMContactsContact.Type,
      SSMContactsContact.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SSMContacts::ContactChannel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contactchannel.html | AWS::SSMContacts::ContactChannel}
 */
export interface SSMContactsContactChannelProps {
  ChannelName: string;
  ChannelAddress: string;
  ContactId: string;
  ChannelType: string;
  DeferActivation?: boolean;
}
/**
 * Attributes type definition for AWS::SSMContacts::ContactChannel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contactchannel.html | AWS::SSMContacts::ContactChannel}
 */
export interface SSMContactsContactChannelAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::SSMContacts::ContactChannel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contactchannel.html | AWS::SSMContacts::ContactChannel}
 */
export class SSMContactsContactChannel extends ResourceBase<
  "AWS::SSMContacts::ContactChannel",
  SSMContactsContactChannelProps,
  SSMContactsContactChannelAttribs
> {
  public static readonly Type = "AWS::SSMContacts::ContactChannel";
  public static readonly AttributeNames: readonly (keyof SSMContactsContactChannelAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: SSMContactsContactChannelProps,
    options?: ResourceOptions,
  ) {
    super(
      SSMContactsContactChannel.Type,
      SSMContactsContactChannel.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SSMContacts::Plan
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-plan.html | AWS::SSMContacts::Plan}
 */
export interface SSMContactsPlanProps {
  RotationIds?: any[];
  Stages?: any[];
  ContactId: string;
}
/**
 * Attributes type definition for AWS::SSMContacts::Plan
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-plan.html | AWS::SSMContacts::Plan}
 */
export interface SSMContactsPlanAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::SSMContacts::Plan
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-plan.html | AWS::SSMContacts::Plan}
 */
export class SSMContactsPlan extends ResourceBase<
  "AWS::SSMContacts::Plan",
  SSMContactsPlanProps,
  SSMContactsPlanAttribs
> {
  public static readonly Type = "AWS::SSMContacts::Plan";
  public static readonly AttributeNames: readonly (keyof SSMContactsPlanAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: SSMContactsPlanProps,
    options?: ResourceOptions,
  ) {
    super(
      SSMContactsPlan.Type,
      SSMContactsPlan.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SSMContacts::Rotation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html | AWS::SSMContacts::Rotation}
 */
export interface SSMContactsRotationProps {
  Recurrence: SSMContactsRotationRecurrenceSettings;
  TimeZoneId: string;
  StartTime: string;
  Tags?: Tag[];
  Name: string;
  ContactIds: any[];
}
/**
 * Attributes type definition for AWS::SSMContacts::Rotation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html | AWS::SSMContacts::Rotation}
 */
export interface SSMContactsRotationAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::SSMContacts::Rotation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html | AWS::SSMContacts::Rotation}
 */
export class SSMContactsRotation extends ResourceBase<
  "AWS::SSMContacts::Rotation",
  SSMContactsRotationProps,
  SSMContactsRotationAttribs
> {
  public static readonly Type = "AWS::SSMContacts::Rotation";
  public static readonly AttributeNames: readonly (keyof SSMContactsRotationAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: SSMContactsRotationProps,
    options?: ResourceOptions,
  ) {
    super(
      SSMContactsRotation.Type,
      SSMContactsRotation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
