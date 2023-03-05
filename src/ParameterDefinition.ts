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
