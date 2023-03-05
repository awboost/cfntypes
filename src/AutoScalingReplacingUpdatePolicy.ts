/**
 * To specify how AWS CloudFormation handles replacement updates for an Auto
 * Scaling group, use the AutoScalingReplacingUpdate policy. This policy enables
 * you to specify whether AWS CloudFormation replaces an Auto Scaling group with
 * a new one or replaces only the instances in the Auto Scaling group.
 *
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html#cfn-attributes-updatepolicy-replacingupdate | AutoScalingUpdateReplace policy}
 */
export interface AutoScalingReplacingUpdatePolicy {
  /**
   * Specifies whether an Auto Scaling group and the instances it contains are
   * replaced during an update. During replacement, CloudFormation retains the
   * old group until it finishes creating the new one. If the update fails,
   * CloudFormation can roll back to the old Auto Scaling group and delete the
   * new Auto Scaling group.
   *
   * While CloudFormation creates the new group, it doesn't detach or attach any
   * instances. After successfully creating the new Auto Scaling group,
   * CloudFormation deletes the old Auto Scaling group during the cleanup
   * process.
   *
   * When you set the `WillReplace` parameter, remember to specify a matching
   * `CreationPolicy`. If the minimum number of instances (specified by the
   * `MinSuccessfulInstancesPercent` property) don't signal success within the
   * `Timeout` period (specified in the `CreationPolicy` policy), the
   * replacement update fails and AWS CloudFormation rolls back to the old Auto
   * Scaling group.
   */
  WillReplace?: boolean;
}
