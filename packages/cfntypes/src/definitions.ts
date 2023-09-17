import { CreationPolicy, DeletionPolicy, UpdatePolicy } from "./policies.js";
import { ResourceType, ResourceTypes } from "./resources.generated.js";
import { IntrinsicValue, TemplateMap } from "./util.js";

/**
 * The name of the resource output to be exported for a cross-stack reference.
 *
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/outputs-section-structure.html | Outputs}
 */
export interface OutputExport {
  Name: string;
}

/**
 * The optional `Outputs` section declares output values that you can import
 * into other stacks (to create cross-stack references), return in response (to
 * describe stack calls), or view on the AWS CloudFormation console. For
 * example, you can output the S3 bucket name for a stack to make the bucket
 * easier to find.
 *
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/outputs-section-structure.html | Outputs}
 */
export interface OutputDefinition {
  /**
   * A String type that describes the output value. The value for the
   * description declaration must be a literal string that's between `0` and
   * `1024` bytes in length. You can't use a parameter or function to specify
   * the description. The description can be a maximum of 4 K in length.
   */
  Description?: string;

  /**
   * The name of the resource output to be exported for a cross-stack reference.
   */
  Export?: OutputExport;

  /**
   * The value of the property returned by the aws `cloudformation
   * describe-stacks` command. The value of an output can include literals,
   * parameter references, pseudo-parameters, a mapping value, or intrinsic
   * functions.
   */
  Value: IntrinsicValue;
}

/**
 * Parameters enable you to input custom values to your template each time you
 * create or update a stack.
 *
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/parameters-section-structure.html#parameters-section-structure-properties | Parameters}
 */
export interface ParameterDefinition {
  /**
   * A regular expression that represents the patterns to allow for String
   * types. The pattern must match the entire parameter value provided.
   */
  AllowedPattern?: string;

  /**
   * An array containing the list of values allowed for the parameter.
   */
  AllowedValues?: string[];

  /**
   * A string that explains a constraint when the constraint is violated. For
   * example, without a constraint description, a parameter that has an allowed
   * pattern of `[A-Za-z0-9]+` displays the following error message when the
   * user specifies an invalid value:
   *
   * > Malformed input-Parameter MyParameter must match pattern [A-Za-z0-9]+
   *
   * By adding a constraint description, such as must only contain letters
   * (uppercase and lowercase) and numbers, you can display the following
   * customized error message:
   *
   * > Malformed input-Parameter MyParameter must only contain uppercase and
   * > lowercase letters and numbers
   */
  ConstraintDescription?: string;

  /**
   * A value of the appropriate type for the template to use if no value is
   * specified when a stack is created. If you define constraints for the
   * parameter, you must specify a value that adheres to those constraints.
   */
  Default?: string;

  /**
   * A string of up to 4000 characters that describes the parameter.
   */
  Description?: string;

  /**
   * An integer value that determines the largest number of characters you want
   * to allow for `String` types.
   */
  MaxLength?: number;

  /**
   * A numeric value that determines the largest numeric value you want to allow
   * for `Number` types.
   */
  MaxValue?: number;

  /**
   * An integer value that determines the smallest number of characters you want
   * to allow for `String` types.
   */
  MinLength?: number;

  /**
   * A numeric value that determines the smallest numeric value you want to
   * allow for `Number` types.
   */
  MinValue?: number;

  /**
   * Whether to mask the parameter value to prevent it from being displayed in
   * the console, command line tools, or API. If you set the NoEcho attribute to
   * true, CloudFormation returns the parameter value masked as asterisks
   * `(*****)` for any calls that describe the stack or stack events, except for
   * information stored in the locations specified below.
   */
  NoEcho?: boolean;

  /**
   * The data type for the parameter. See AWS documentation for
   * more info.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/parameters-section-structure.html#parameters-section-structure-properties | Parameters}
   */
  Type: string;
}

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
 * The base type of custom resource properties. All custom resource definitions
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
  P = any,
  T extends string = string,
> = ResourceDefinitionBase<
  P & CustomResourcePropertiesBase,
  CustomResourceType<T>
>;

/**
 * Represents an AWS or custom resource definition.
 */
export type ResourceDefinition =
  | AwsResourceDefinition
  | CustomResourceDefinition;

/**
 * Definition for a rule assertion.
 *
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/rules-section-structure.html#template-constraint-rules-syntax | Rules syntax}
 */
export interface RuleAssertion {
  /**
   * Rule-specific intrinsic function.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/rules-section-structure.html#rules-specific-intrinsic-section-structure | Rule-specific intrinsic functions
}
   */
  Assert: IntrinsicValue;

  /**
   * Information about this assert.
   */
  AssertDescription?: string;
}

/**
 * Each template rule consists of two properties:
 *
 *  - Rule condition (optional) — determines when a rule takes effect.
 *  - Assertions (required) — describes what values users can specify for a
 *    particular parameter.
 *
 * A rule can include a `RuleCondition` property and must include an Assertions
 * property. For each rule, you can define only one rule condition. You can
 * define one or more asserts within the `Assertions` property. If you don't
 * define a rule condition, the rule's assertions always take effect.
 *
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/rules-section-structure.html#w2ab1c23c15c19b5 | Working with rules}
 */
export interface RuleDefinition {
  /**
   * Describes what values users can specify for a particular parameter.
   */
  Assertions: RuleAssertion[];

  /**
   * Determines when a rule takes effect.
   */
  RuleCondition?: IntrinsicValue;
}
