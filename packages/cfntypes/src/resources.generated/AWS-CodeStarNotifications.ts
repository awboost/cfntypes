import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::CodeStarNotifications::NotificationRule.Target
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codestarnotifications-notificationrule-target.html | AWS::CodeStarNotifications::NotificationRule.Target}
 */
export interface CodeStarNotificationsNotificationRuleTarget {
  TargetType: string;
  TargetAddress: string;
}
/**
 * Type definition for AWS::CodeStarNotifications::NotificationRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarnotifications-notificationrule.html | AWS::CodeStarNotifications::NotificationRule}
 */
export interface CodeStarNotificationsNotificationRuleProps {
  EventTypeIds: any[];
  Status?: string;
  CreatedBy?: string;
  DetailType: string;
  Resource: string;
  EventTypeId?: string;
  TargetAddress?: string;
  Targets: any[];
  Tags?: Record<string, Tag>;
  Name: string;
}
/**
 * Attributes type definition for AWS::CodeStarNotifications::NotificationRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarnotifications-notificationrule.html | AWS::CodeStarNotifications::NotificationRule}
 */
export interface CodeStarNotificationsNotificationRuleAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::CodeStarNotifications::NotificationRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarnotifications-notificationrule.html | AWS::CodeStarNotifications::NotificationRule}
 */
export class CodeStarNotificationsNotificationRule extends ResourceBase<
  "AWS::CodeStarNotifications::NotificationRule",
  CodeStarNotificationsNotificationRuleProps,
  CodeStarNotificationsNotificationRuleAttribs
> {
  public static readonly Type = "AWS::CodeStarNotifications::NotificationRule";
  public static readonly AttributeNames: readonly (keyof CodeStarNotificationsNotificationRuleAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: CodeStarNotificationsNotificationRuleProps,
    options?: ResourceOptions,
  ) {
    super(
      CodeStarNotificationsNotificationRule.Type,
      CodeStarNotificationsNotificationRule.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
