import { AutoScalingReplacingUpdatePolicy } from './AutoScalingReplacingUpdatePolicy.js';
import { AutoScalingRollingUpdatePolicy } from './AutoScalingRollingUpdatePolicy.js';
import { AutoScalingScheduledActionPolicy } from './AutoScalingScheduledActionPolicy.js';
import { CodeDeployLambdaAliasUpdatePolicy } from './CodeDeployLambdaAliasUpdatePolicy.js';

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
