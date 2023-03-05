/**
 * To specify how CloudFormation handles rolling updates for an Auto Scaling
 * group, use the `AutoScalingRollingUpdate` policy. Rolling updates enable you
 * to specify whether AWS CloudFormation updates instances that are in an Auto
 * Scaling group in batches or all at once.
 *
 * Be aware that, during stack update rollback operations, CloudFormation uses
 * the `UpdatePolicy` configuration specified in the template before the current
 * stack update operation. For example, suppose you have updated the
 * `MaxBatchSize` in your stack template's `UpdatePolicy` from 1 to 10. You then
 * perform a stack update, and that update fails and CloudFormation initiates an
 * update rollback operation. In such a case, CloudFormation will use 1 as the
 * maximum batch size, rather than 10. For this reason, we recommend you make
 * changes to the UpdatePolicy configuration in a stack update separate from and
 * before any updates to the `AWS::AutoScaling::AutoScalingGroup` resource that
 * are likely to initiate rolling updates.
 *
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html#cfn-attributes-updatepolicy-rollingupdate | AutoScalingRollingUpdate policy}
 */

export interface AutoScalingRollingUpdatePolicy {
  /**
   * Specifies the maximum number of instances that CloudFormation updates.
   *
   * @default 1
   */
  MaxBatchSize?: number;

  /**
   * Specifies the minimum number of instances that must be in service within
   * the Auto Scaling group while CloudFormation updates old instances. This
   * value must be less than the `MaxSize` of the Auto Scaling group.\
   *
   * @default 0
   */
  MinInstancesInService?: number;

  /**
   * Specifies the percentage of instances in an Auto Scaling rolling update
   * that must signal success for an update to succeed. You can specify a value
   * from `0` to `100`. CloudFormation rounds to the nearest tenth of a percent.
   * For example, if you update five instances with a minimum successful
   * percentage of `50`, three instances must signal success.
   *
   * If an instance doesn't send a signal within the time specified in the
   * `PauseTime` property, CloudFormation assumes that the instance wasn't
   * updated.
   *
   * If you specify this property, you must also enable the
   * `WaitOnResourceSignals` and `PauseTime` properties.
   *
   * The `MinSuccessfulInstancesPercent` parameter applies only to instances
   * only for signaling purpose. To specify the number of instances in your
   * autoscaling group, see the `MinSize`, `MaxSize`, and `DesiredCapacity`
   * properties fo the `AWS::AutoScaling::AutoScalingGroup` resource.
   *
   * @default 100
   */
  MinSuccessfulInstancesPercent?: number;

  /**
   * The amount of time that CloudFormation pauses after making a change to a
   * batch of instances to give those instances time to start software
   * applications. For example, you might need to specify `PauseTime` when
   * scaling up the number of instances in an Auto Scaling group.
   *
   * If you enable the WaitOnResourceSignals property, `PauseTime` is the amount
   * of time that CloudFormation should wait for the Auto Scaling group to
   * receive the required number of valid signals from added or replaced
   * instances. If the `PauseTime` is exceeded before the Auto Scaling group
   * receives the required number of signals, the update fails. For best
   * results, specify a time period that gives your applications sufficient time
   * to get started. If the update needs to be rolled back, a short `PauseTime`
   * can cause the rollback to fail.
   *
   * Specify `PauseTime` in the ISO8601 duration format (in the format
   * `PT#H#M#S`, where each `#` is the number of hours, minutes, and seconds,
   * respectively). The maximum `PauseTime` is one hour (`PT1H`).
   *
   * **Default:** `PT0S` (0 seconds). If the `WaitOnResourceSignals` property is
   * set to true, the default is `PT5M`.
   */
  PauseTime?: string;

  /**
   * Specifies the Auto Scaling processes to suspend during a stack update.
   * Suspending processes prevents Auto Scaling from interfering with a stack
   * update. For example, you can suspend alarming so that Amazon EC2 Auto
   * Scaling doesn't execute scaling policies associated with an alarm. For
   * valid values, see the `ScalingProcesses.member.N` parameter for the
   * SuspendProcesses action in the Amazon EC2 Auto Scaling API Reference.
   */
  SuspendProcesses?: string[];

  /**
   * Specifies whether the Auto Scaling group waits on signals from new
   * instances during an update. Use this property to ensure that instances have
   * completed installing and configuring applications before the Auto Scaling
   * group update proceeds. AWS CloudFormation suspends the update of an Auto
   * Scaling group after new EC2 instances are launched into the group. AWS
   * CloudFormation must receive a signal from each new instance within the
   * specified PauseTime before continuing the update. To signal the Auto
   * Scaling group, use the `cfn-signal` helper script or SignalResource API.
   *
   * To have instances wait for an Elastic Load Balancing health check before
   * they signal success, add a health-check verification by using the `cfn-init`
   * helper script. For an example, see the `verify_instance_health` command in
   * the Auto Scaling rolling updates sample template.
   *
   * @default false
   */
  WaitOnResourceSignals?: boolean;
}
