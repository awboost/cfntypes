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
