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

/**
 * To specify how AWS CloudFormation handles updates for the `MinSize`,
 * `MaxSize`, and `DesiredCapacity` properties when the
 * `AWS::AutoScaling::AutoScalingGroup` resource has an associated scheduled
 * action, use the `AutoScalingScheduledAction` policy.
 *
 * With scheduled actions, the group size properties of an Auto Scaling group
 * can change at any time. When you update a stack with an Auto Scaling group
 * and scheduled action, CloudFormation always sets the group size property
 * values of your Auto Scaling group to the values that are defined in the
 * `AWS::AutoScaling::AutoScalingGroup` resource of your template, even if a
 * scheduled action is in effect.
 *
 * If you don't want CloudFormation to change any of the group size property
 * values when you have a scheduled action in effect, use the
 * `AutoScalingScheduledAction` update policy and set
 * `IgnoreUnmodifiedGroupSizeProperties` to true to prevent CloudFormation from
 * changing the `MinSize`, `MaxSize`, or `DesiredCapacity` properties unless you
 * have modified these values in your template.
 *
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html#cfn-attributes-updatepolicy-scheduledactions | AutoScalingScheduledAction policy}
 */

export interface AutoScalingScheduledActionPolicy {
  /**
   * If true, AWS CloudFormation ignores differences in group size properties
   * between your current Auto Scaling group and the Auto Scaling group
   * described in the `AWS::AutoScaling::AutoScalingGroup` resource of your
   * template during a stack update. If you modify any of the group size
   * property values in your template, AWS CloudFormation uses the modified
   * values and updates your Auto Scaling group.
   *
   * @default false
   */
  IgnoreUnmodifiedGroupSizeProperties?: boolean;
}

/**
 * To perform an CodeDeploy deployment when the version changes on an
 * `AWS::Lambda::Alias` resource, use the `CodeDeployLambdaAliasUpdate` update
 * policy.
 *
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html#cfn-attributes-updatepolicy-codedeploylambdaaliasupdate | CodeDeployLambdaAlias Update policy}
 */
export interface CodeDeployLambdaAliasUpdatePolicy {
  /**
   * The name of the Lambda function to run after traffic routing completes.
   */
  AfterAllowTrafficHook?: string;

  /**
   * The name of the CodeDeploy application.
   */
  ApplicationName: string;

  /**
   * The name of the Lambda function to run before traffic routing starts.
   */
  BeforeAllowTrafficHook?: string;

  /**
   * The name of the CodeDeploy deployment group. This is where the
   * traffic-shifting policy is set.
   */
  DeploymentGroupName: string;
}

/**
 * For an Auto Scaling group replacement update, specifies how many instances
 * must signal success for the update to succeed.
 *
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-creationpolicy.html | CreationPolicy attribute}
 */
export interface AutoScalingCreationPolicy {
  /**
   * Specifies the percentage of instances in an Auto Scaling replacement update
   * that must signal success for the update to succeed. You can specify a value
   * from `0` to `100`. CloudFormation rounds to the nearest tenth of a percent.
   * For example, if you update five instances with a minimum successful
   * percentage of `50`, three instances must signal success. If an instance
   * doesn't send a signal within the time specified by the Timeout property,
   * CloudFormation assumes that the instance wasn't created.
   */
  MinSuccessfulInstancesPercent?: number;
}

/**
 * When CloudFormation creates the associated resource, configures the number of
 * required success signals and the length of time that CloudFormation waits for
 * those signals.
 *
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-creationpolicy.html | CreationPolicy attribute}
 */
export interface ResourceSignalPolicy {
  /**
   * The number of success signals CloudFormation must receive before it sets
   * the resource status as `CREATE_COMPLETE`. If the resource receives a
   * failure signal or doesn't receive the specified number of signals before
   * the timeout period expires, the resource creation fails and CloudFormation
   * rolls the stack back.
   */
  Count?: number;

  /**
   * The length of time that CloudFormation waits for the number of signals that
   * was specified in the Count property. The timeout period starts after
   * CloudFormation starts creating the resource, and the timeout expires no
   * sooner than the time you specify but can occur shortly thereafter. The
   * maximum time that you can specify is 12 hours.
   *
   * The value must be in ISO8601 duration format, in the form: `"PT#H#M#S"`,
   * where each # is the number of hours, minutes, and seconds, respectively.
   * For best results, specify a period of time that gives your instances plenty
   * of time to get up and running. A shorter timeout can cause a rollback.
   */
  Timeout?: string;
}

/**
 * Associate the `CreationPolicy` attribute with a resource to prevent its
 * status from reaching create complete until AWS CloudFormation receives a
 * specified number of success signals or the timeout period is exceeded. To
 * signal a resource, you can use the `cfn-signal` helper script or
 * SignalResource API. CloudFormation publishes valid signals to the stack
 * events so that you track the number of signals sent.
 *
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-creationpolicy.html | CreationPolicy attribute}
 */
export interface CreationPolicy {
  /**
   * For an Auto Scaling group replacement update, specifies how many instances
   * must signal success for the update to succeed.
   */
  AutoScalingCreationPolicy?: AutoScalingCreationPolicy;

  /**
   * When CloudFormation creates the associated resource, configures the number
   * of required success signals and the length of time that CloudFormation
   * waits for those signals.
   */
  ResourceSignal?: ResourceSignalPolicy;
}

/**
 * With the `DeletionPolicy` attribute you can preserve, and in some cases,
 * backup a resource when its stack is deleted. You specify a `DeletionPolicy`
 * attribute for each resource that you want to control. If a resource has no
 * `DeletionPolicy` attribute, AWS CloudFormation deletes the resource by
 * default, except for:
 *
 *  - For `AWS::RDS::DBCluster resources`, the default policy is `Snapshot`.
 *  - For `AWS::RDS::DBInstance` resources that don't specify the
 *    `DBClusterIdentifier` property, the default policy is `Snapshot`.
 *  - For Amazon S3 buckets, you must delete all objects in the bucket for
 *    deletion to succeed.
 *
 * This capability also applies to stack update operations that lead to
 * resources being deleted from stacks. For example, if you remove the resource
 * from the stack template, and then update the stack with the template. This
 * capability doesn't apply to resources whose physical instance is replaced
 * during stack update operations. For example, if you edit a resource's
 * properties such that CloudFormation replaces that resource during a stack
 * update.
 *
 * To keep a resource when its stack is deleted, specify Retain for that
 * resource. You can use retain for any resource. For example, you can retain a
 * nested stack, Amazon S3 bucket, or EC2 instance so that you can continue to
 * use or modify those resources after you delete their stacks.
 *
 * For resources that support snapshots, such as `AWS::EC2::Volume`, specify
 * Snapshot to have CloudFormation create a snapshot before deleting the
 * resource.
 *
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html | DeletionPolicy attribute}
 */
export const DeletionPolicy = {
  /**
   * CloudFormation deletes the resource and all its content if applicable
   * during stack deletion. You can add this deletion policy to any resource
   * type. By default, if you don't specify a `DeletionPolicy`, CloudFormation
   * deletes your resources. However, be aware of the following considerations:
   *
   *  - For `AWS::RDS::DBCluster resources`, the default policy is `Snapshot`.
   *  - For `AWS::RDS::DBInstance` resources that don't specify the
   *    `DBClusterIdentifier` property, the default policy is `Snapshot`.
   *
   * For Amazon S3 buckets, you must delete all objects in the bucket for
   * deletion to succeed.
   */
  Delete: "Delete",

  /**
   * CloudFormation keeps the resource without deleting the resource or its
   * contents when its stack is deleted. You can add this deletion policy to any
   * resource type. When CloudFormation completes the stack deletion, the stack
   * will be in `Delete_Complete` state; however, resources that are retained
   * continue to exist and continue to incur applicable charges until you delete
   * those resources.
   *
   * For update operations, the following considerations apply:
   *
   *  - If a resource is deleted, the `DeletionPolicy` retains the physical
   *    resource but ensures that it's deleted from CloudFormation's scope.
   *  - If a resource is updated such that a new physical resource is created to
   *    replace the old resource, then the old resource is completely deleted,
   *    including from CloudFormation's scope.
   */
  Retain: "Retain",

  /**
   * For resources that support snapshots, CloudFormation creates a snapshot for
   * the resource before deleting it. When CloudFormation completes the stack
   * deletion, the stack will be in the `Delete_Complete` state; however, the
   * snapshots that are created with this policy continue to exist and continue
   * to incur applicable charges until you delete those snapshots.
   *
   * Resources that support snapshots include:
   *
   * - `AWS::EC2::Volume`
   * - `AWS::ElastiCache::CacheCluster`
   * - `AWS::ElastiCache::ReplicationGroup`
   * - `AWS::Neptune::DBCluster`
   * - `AWS::RDS::DBCluster`
   * - `AWS::RDS::DBInstance`
   * - `AWS::Redshift::Cluster`
   */
  Snapshot: "Snapshot",
} as const;

export type DeletionPolicy =
  (typeof DeletionPolicy)[keyof typeof DeletionPolicy];

/**
 * Use the `UpdatePolicy` attribute to specify how AWS CloudFormation handles
 * updates to the `AWS::AppStream::Fleet`,
 * `AWS::AutoScaling::AutoScalingGroup`, ``AWS::ElastiCache::ReplicationGroup``,
 * `AWS::OpenSearchService::Domain`, `AWS::Elasticsearch::Domain`, or
 * `AWS::Lambda::Alias resources`.
 *
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html | UpdatePolicy attribute}
 */
export interface UpdatePolicy {
  /**
   * To specify how AWS CloudFormation handles replacement updates for an Auto
   * Scaling group, use the AutoScalingReplacingUpdate policy. This policy
   * enables you to specify whether AWS CloudFormation replaces an Auto Scaling
   * group with a new one or replaces only the instances in the Auto Scaling
   * group.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html#cfn-attributes-updatepolicy-replacingupdate | AutoScalingReplacing update policy}
   */
  AutoScalingReplacing?: AutoScalingReplacingUpdatePolicy;

  /**
   * To specify how CloudFormation handles rolling updates for an Auto Scaling
   * group, use the `AutoScalingRollingUpdate` policy. Rolling updates enable
   * you to specify whether AWS CloudFormation updates instances that are in an
   * Auto Scaling group in batches or all at once.
   *
   * Be aware that, during stack update rollback operations, CloudFormation uses
   * the `UpdatePolicy` configuration specified in the template before the
   * current stack update operation. For example, suppose you have updated the
   * `MaxBatchSize` in your stack template's `UpdatePolicy` from 1 to 10. You
   * then perform a stack update, and that update fails and CloudFormation
   * initiates an update rollback operation. In such a case, CloudFormation will
   * use 1 as the maximum batch size, rather than 10. For this reason, we
   * recommend you make changes to the UpdatePolicy configuration in a stack
   * update separate from and before any updates to the
   * `AWS::AutoScaling::AutoScalingGroup` resource that are likely to initiate
   * rolling updates.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html#cfn-attributes-updatepolicy-rollingupdate | AutoScalingRollingUpdate policy}
   */
  AutoScalingRollingUpdate?: AutoScalingRollingUpdatePolicy;

  /**
   * To specify how AWS CloudFormation handles updates for the `MinSize`,
   * `MaxSize`, and `DesiredCapacity` properties when the
   * `AWS::AutoScaling::AutoScalingGroup` resource has an associated scheduled
   * action, use the `AutoScalingScheduledAction` policy.
   *
   * With scheduled actions, the group size properties of an Auto Scaling group
   * can change at any time. When you update a stack with an Auto Scaling group
   * and scheduled action, CloudFormation always sets the group size property
   * values of your Auto Scaling group to the values that are defined in the
   * `AWS::AutoScaling::AutoScalingGroup` resource of your template, even if a
   * scheduled action is in effect.
   *
   * If you don't want CloudFormation to change any of the group size property
   * values when you have a scheduled action in effect, use the
   * `AutoScalingScheduledAction` update policy and set
   * `IgnoreUnmodifiedGroupSizeProperties` to true to prevent CloudFormation
   * from changing the `MinSize`, `MaxSize`, or `DesiredCapacity` properties
   * unless you have modified these values in your template.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html#cfn-attributes-updatepolicy-scheduledactions | AutoScalingScheduledAction policy}
   */
  AutoScalingScheduledAction?: AutoScalingScheduledActionPolicy;

  /**
   * To perform an CodeDeploy deployment when the version changes on an
   * `AWS::Lambda::Alias` resource, use the `CodeDeployLambdaAliasUpdate` update
   * policy.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html#cfn-attributes-updatepolicy-codedeploylambdaaliasupdate | CodeDeployLambdaAlias update policy}
   */
  CodeDeployLambdaAliasUpdate?: CodeDeployLambdaAliasUpdatePolicy;

  /**
   * To upgrade an OpenSearch Service domain to a new version of OpenSearch or
   * Elasticsearch rather than replacing the entire
   * `AWS::OpenSearchService::Domain` or `AWS::Elasticsearch::Domain` resource, use
   * the `EnableVersionUpgrade` update policy.
   *
   * If `EnableVersionUpgrade` is set to true, you can update the `EngineVersion`
   * property of the `AWS::OpenSearchService::Domain` resource (or the
   * `ElasticsearchVersion` property of the legacy `AWS::Elasticsearch::Domain`
   * resource), and CloudFormation will update that property without
   * interruption. When `EnableVersionUpgrade` is set to false, or not specified,
   * updating the `EngineVersion` or `ElasticsearchVersion` property results in
   * CloudFormation replacing the entire
   * `AWS::OpenSearchService::Domain`/`AWS::Elasticsearch::Domain` resource.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html#cfn-attributes-updatepolicy-upgradeopensearchdomain | EnableVersionUpgrade policy}
   */
  EnableVersionUpgrade?: boolean;

  /**
   * To modify a replication group's shards by adding or removing shards, rather
   * than replacing the entire `AWS::ElastiCache::ReplicationGroup` resource,
   * use the `UseOnlineResharding` update policy.
   *
   * If `UseOnlineResharding` is set to true, you can update the `NumNodeGroups`
   * and `NodeGroupConfiguration` properties of the
   * `AWS::ElastiCache::ReplicationGroup` resource, and CloudFormation will
   * update those properties without interruption. When `UseOnlineResharding` is
   * set to false, or not specified, updating the `NumNodeGroups` and
   * `NodeGroupConfiguration` properties results in CloudFormation replacing the
   * entire `AWS::ElastiCache::ReplicationGroup` resource.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html#cfn-attributes-updatepolicy-useonlineresharding | UseOnlineResharding policy}
   */
  UseOnlineResharding?: boolean;
}
