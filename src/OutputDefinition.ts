import { IntrinsicValue } from './Fn.js';

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
