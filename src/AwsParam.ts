import { Fn, IntrinsicValue } from './Fn.js';

/**
 * Pseudo parameters are parameters that are predefined by AWS CloudFormation.
 * You don't declare them in your template. Use them the same way as you would a
 * parameter, as the argument for the Ref function.
 *
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/pseudo-parameter-reference.html | Psuedo Parameter Reference}
 */
export class AwsParam {
  /**
   * Returns the AWS account ID of the account in which the stack is being
   * created, such as `123456789012`.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/pseudo-parameter-reference.html#cfn-pseudo-param-accountid | AWS::AccountId}
   */
  public static get AccountId(): IntrinsicValue {
    return Fn.Ref('AWS::AccountId');
  }

  /**
   * Returns the list of notification Amazon Resource Names (ARNs) for the
   * current stack.
   *
   * To get a single ARN from the list, use {@link Fn.Split}.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/pseudo-parameter-reference.html#cfn-pseudo-param-notificationarns | AWS::NotificationARNs}
   */
  public static get NotificationARNs(): IntrinsicValue {
    return Fn.Ref('AWS::NotificationARNs');
  }

  /**
   * Removes the corresponding resource property when specified as a return
   * value in the `Fn::If` intrinsic function.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/pseudo-parameter-reference.html#cfn-pseudo-param-novalue | AWS::NoValue}
   */
  public static get NoValue(): IntrinsicValue {
    return Fn.Ref('AWS::NoValue');
  }

  /**
   * Returns the partition that the resource is in. For standard AWS Regions,
   * the partition is `aws`. For resources in other partitions, the partition is
   * `aws-partitionname`. For example, the partition for resources in the China
   * (Beijing and Ningxia) Region is `aws-cn` and the partition for resources in
   * the AWS GovCloud (US-West) region is `aws-us-gov`.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/pseudo-parameter-reference.html#cfn-pseudo-param-partition | AWS::Partition}
   */
  public static get Partition(): IntrinsicValue {
    return Fn.Ref('AWS::Partition');
  }

  /**
   * Returns a string representing the Region in which the encompassing resource
   * is being created, such as `us-west-2`.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/pseudo-parameter-reference.html#cfn-pseudo-param-region | AWS::Region}
   */
  public static get Region(): IntrinsicValue {
    return Fn.Ref('AWS::Region');
  }

  /**
   * Returns the ID of the stack as specified with the aws cloudformation
   * create-stack command, such as
   * `arn:aws:cloudformation:us-west-2:123456789012:stack/teststack/51af3dc0-da77-11e4-872e-1234567db123`.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/pseudo-parameter-reference.html#cfn-pseudo-param-stackid | AWS::StackId}
   */
  public static get StackId(): IntrinsicValue {
    return Fn.Ref('AWS::StackId');
  }

  /**
   * Returns the name of the stack as specified with the aws cloudformation
   * `create-stack` command, such as `teststack`.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/pseudo-parameter-reference.html#cfn-pseudo-param-stackname | AWS::StackName}
   */
  public static get StackName(): IntrinsicValue {
    return Fn.Ref('AWS::StackName');
  }

  /**
   * Returns the suffix for a domain. The suffix is typically `amazonaws.com`,
   * but might differ by Region. For example, the suffix for the China (Beijing)
   * Region is `amazonaws.com.cn`.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/pseudo-parameter-reference.html#cfn-pseudo-param-urlsuffix | AWS::URLSuffix}
   */
  public static get URLSuffix(): IntrinsicValue {
    return Fn.Ref('AWS::URLSuffix');
  }
}
