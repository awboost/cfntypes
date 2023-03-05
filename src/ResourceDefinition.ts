import { CreationPolicy } from './CreationPolicy.js';
import { DeletionPolicy } from './DeletionPolicy.js';
import { IntrinsicValue } from './Fn.js';
import { TemplateMap } from './TemplateMap.js';
import { ResourceType, ResourceTypes } from './types.generated.js';
import { UpdatePolicy } from './UpdatePolicy.js';

/**
 * Represents the additional options for a resource definition (other than
 * `Type` and Properties.)
 *
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html | AWS resource and property types reference}
 */
export interface ResourceOptions {
  /**
   * The name of a condition to associate with the resource. The resource will
   * only be created if the condition evaluates to true.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/conditions-section-structure.html | Conditions}
   */
  Condition?: string;

  /**
   * Associate the `CreationPolicy` attribute with a resource to prevent its
   * status from reaching create complete until AWS CloudFormation receives a
   * specified number of success signals or the timeout period is exceeded. To
   * signal a resource, you can use the `cfn-signal` helper script or
   * [SignalResource
   * API](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SignalResource.html).
   * CloudFormation publishes valid signals to the stack events so that you
   * track the number of signals sent.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-creationpolicy.html | CreationPolicy attribute}
   */
  CreationPolicy?: CreationPolicy;

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
   * resources being deleted from stacks. For example, if you remove the
   * resource from the stack template, and then update the stack with the
   * template. This capability doesn't apply to resources whose physical
   * instance is replaced during stack update operations. For example, if you
   * edit a resource's properties such that CloudFormation replaces that
   * resource during a stack update.
   *
   * To keep a resource when its stack is deleted, specify Retain for that
   * resource. You can use retain for any resource. For example, you can retain
   * a nested stack, Amazon S3 bucket, or EC2 instance so that you can continue
   * to use or modify those resources after you delete their stacks.
   *
   * For resources that support snapshots, such as `AWS::EC2::Volume`, specify
   * Snapshot to have CloudFormation create a snapshot before deleting the
   * resource.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html | DeletionPolicy attribute}
   */
  DeletionPolicy?: DeletionPolicy;

  /**
   * With the `DependsOn` attribute you can specify that the creation of a
   * specific resource follows another. When you add a `DependsOn` attribute to
   * a resource, that resource is created only after the creation of the
   * resource specified in the `DependsOn` attribute.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html | DependsOn attribute}
   */
  DependsOn?: string[];

  /**
   * The metadata attribute enables you to associate structured data with a
   * resource. By adding a metadata attribute to a resource, you can add data in
   * JSON or YAML to the resource declaration. In addition, you can use
   * intrinsic functions (such as `GetAtt` and `Ref`), parameters, and pseudo
   * parameters within the metadata attribute to add those interpreted values.
   *
   * AWS CloudFormation doesn't validate the syntax within the metadata
   * attribute.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-metadata.html | Metadata attribute}
   */
  Metadata?: TemplateMap<IntrinsicValue>;

  /**
   * Use the `UpdatePolicy` attribute to specify how AWS CloudFormation handles
   * updates to the `AWS::AppStream::Fleet`,
   * `AWS::AutoScaling::AutoScalingGroup`, `AWS::ElastiCache::ReplicationGroup`,
   * `AWS::OpenSearchService::Domain`, `AWS::Elasticsearch::Domain`, or
   * `AWS::Lambda::Alias resources`.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html | UpdatePolicy attribute}
   */
  UpdatePolicy?: UpdatePolicy;

  /**
   * Use the UpdateReplacePolicy attribute to retain or, in some cases, backup
   * the existing physical instance of a resource when it's replaced during a
   * stack update operation.
   *
   * When you initiate a stack update, AWS CloudFormation updates resources
   * based on differences between what you submit and the stack's current
   * template and parameters. If you update a resource property that requires
   * that the resource be replaced, CloudFormation recreates the resource during
   * the update. Recreating the resource generates a new physical ID.
   * CloudFormation creates the replacement resource first, and then changes
   * references from other dependent resources to point to the replacement
   * resource. By default, CloudFormation then deletes the old resource. Using
   * the `UpdateReplacePolicy`, you can specify that CloudFormation retain or,
   * in some cases, create a snapshot of the old resource.
   *
   * For resources that support snapshots, such as `AWS::EC2::Volume`, specify
   * Snapshot to have CloudFormation create a snapshot before deleting the old
   * resource instance.
   *
   * You can apply the `UpdateReplacePolicy` attribute to any resource.
   * `UpdateReplacePolicy` is only executed if you update a resource property
   * whose update behavior is specified as Replacement, thereby causing
   * CloudFormation to replace the old resource with a new one with a new
   * physical ID. For example, if you update the Engine property of an
   * `AWS::RDS::DBInstance` resource type, CloudFormation creates a new resource
   * and replaces the current DB instance resource with the new one. The
   * `UpdateReplacePolicy` attribute would then dictate whether CloudFormation
   * deleted, retained, or created a snapshot of the old DB instance. The update
   * behavior for each property of a resource is specified in the reference
   * topic for that resource in the AWS resource and property types reference.
   * For more information on resource update behavior, see Update behaviors of
   * stack resources.
   *
   * The `UpdateReplacePolicy` attribute applies to stack updates you perform
   * directly, in addition to stack updates performed using change sets.
   *
   * `UpdateReplacePolicy` differs from the `DeletionPolicy` attribute in that
   * it only applies to resources replaced during stack updates. Use
   * `DeletionPolicy` for resources deleted when a stack is deleted, or when the
   * resource definition itself is deleted from the template as part of a stack
   * update.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatereplacepolicy.html | UpdateReplacePolicy attribute}
   */
  UpdateReplacePolicy?: DeletionPolicy;
}

/**
 * The required `Resources` section declares the AWS resources that you want to
 * include in the stack, such as an Amazon EC2 instance or an Amazon S3 bucket.
 *
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html | AWS resource and property types reference}
 */
export interface ResourceDefinitionBase<P = unknown, T = string>
  extends ResourceOptions {
  /**
   * Resource properties are additional options that you can specify for a
   * resource.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html | AWS resource and property types reference}
   */
  Properties: P;

  /**
   * The resource type identifies the type of resource that you are declaring.
   * For example, `AWS::EC2::Instance` declares an EC2 instance.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html | AWS resource and property types reference}
   */
  Type: T;
}

/**
 * Represents a built-in AWS resource definition.
 */
export type AwsResourceDefinitionType<T extends ResourceType> =
  ResourceDefinitionBase<ResourceTypes[T], T>;

/**
 * Represents the set of all resource definition types.
 */
export type AwsResourceDefinition = {
  [K in ResourceType]: AwsResourceDefinitionType<K>;
}[ResourceType];

/**
 * The base type of custom resource properties. All custom resource defintions
 * must specify a `ServiceToken`, which is the ARN of the Lambda function or SNS
 * topic which handles this custom resource.
 */
export interface CustomResourcePropertiesBase {
  ServiceToken: string;
}

/**
 * Represents the type of a custom resource.
 */
export type CustomResourceType<T extends string = string> = `Custom::${T}`;

/**
 * Represents a custom resource definition.
 */
export type CustomResourceDefinition<
  P extends CustomResourcePropertiesBase = CustomResourcePropertiesBase,
  T extends string = string,
> = ResourceDefinitionBase<P, CustomResourceType<T>>;

/**
 * Represents an AWS or custom resource definition.
 */
export type ResourceDefinition =
  | AwsResourceDefinition
  | CustomResourceDefinition;
