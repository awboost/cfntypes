/**
 * IntrinsicValue represents the output of an intrinsic function.
 */
export type IntrinsicValue = any; // eslint-disable-line @typescript-eslint/no-explicit-any

/**
 * You can use intrinsic functions, such as `Fn::If`, `Fn::Equals`, and
 * `Fn::Not`, to conditionally create stack resources. These conditions are
 * evaluated based on input parameters that you declare when you create or
 * update a stack. After you define all your conditions, you can associate them
 * with resources or resource properties in the Resources and Outputs sections
 * of a template.
 *
 * You define all conditions in the Conditions section of a template except for
 * `Fn::If conditions`. You can use the `Fn::If` condition in the metadata
 * attribute, update policy attribute, and property values in the Resources
 * section and Outputs sections of a template.
 *
 * You might use conditions when you want to reuse a template that can create
 * resources in different contexts, such as a test environment versus a
 * production environment. In your template, you can add an EnvironmentType
 * input parameter, which accepts either prod or test as inputs. For the
 * production environment, you might include Amazon EC2 instances with certain
 * capabilities; however, for the test environment, you want to use less
 * capabilities to save costs. With conditions, you can define which resources
 * are created and how they're configured for each environment type.
 */
export class Fn {
  /**
   * Returns true if all the specified conditions evaluate to true, or returns
   * false if any one of the conditions evaluates to false. `Fn::And` acts as an
   * AND operator. The minimum number of conditions that you can include is 2,
   * and the maximum is 10.
   *
   * @param conditions A condition that evaluates to true or false.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-conditions.html#intrinsic-function-reference-conditions-and | Fn::And}
   */
  public static and(...conditions: IntrinsicValue[]): IntrinsicValue {
    return new this("Fn::And", conditions);
  }

  /**
   * The intrinsic function `Fn::Base64` returns the Base64 representation of
   * the input string. This function is typically used to pass encoded data to
   * Amazon EC2 instances by way of the UserData property.
   *
   * @param valueToEncode The string value you want to convert to Base64.
   * @returns The original string, in Base64 representation.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-base64.html | Fn::Base64}
   */
  public static base64(valueToEncode: string): IntrinsicValue {
    return new this("Fn::Base64", valueToEncode);
  }

  /**
   * The intrinsic function `Fn::Cidr` returns an array of CIDR address blocks.
   * The number of CIDR blocks returned is dependent on the count parameter.
   *
   * @param ipBlock The user-specified CIDR address block to be split into
   * smaller CIDR blocks.
   * @param count The number of CIDRs to generate. Valid range is between 1 and
   * 256.
   * @param cidrBits The number of subnet bits for the CIDR. For example,
   * specifying a value "8" for this parameter will create a CIDR with a mask of
   * "/24".
   * @returns An array of CIDR address blocks.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-cidr.html | Fn::Cidr}
   */
  public static cidr(
    ipBlock: string,
    count: number,
    cidrBits: number,
  ): IntrinsicValue {
    return new this("Fn::Cidr", [ipBlock, count, cidrBits]);
  }

  /**
   * Returns `true` if a specified string matches at least one value in a list
   * of strings.
   *
   * @param listOfStrings A list of strings, such as `"A", "B", "C"`.
   * @param string A string, such as `"A"`, that you want to compare against a
   * list of strings.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-rules.html#fn-contains | Fn::Contains}
   */
  public static contains(
    listOfStrings: string[],
    string: string,
  ): IntrinsicValue {
    return new this("Fn::Contains", [listOfStrings, string]);
  }

  /**
   * Returns `true` if a specified string matches all values in a list.
   *
   * @param listOfStrings A list of strings, such as `"A", "B", "C"`.
   * @param string A string, such as `"A"`, that you want to compare against a
   * list of strings.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-rules.html#fn-eachmemberequals | Fn::EachMemberEquals}
   */
  public static eachMemberEquals(
    listOfStrings: string[],
    string: string,
  ): IntrinsicValue {
    return new this("Fn::EachMemberEquals", [listOfStrings, string]);
  }

  /**
   * Returns `true` if a specified string matches all values in a list.
   *
   * @param stringsToCheck A list of strings, such as `"A", "B", "C"`.
   * CloudFormation checks whether each member in the stringsToC`heck parameter
   * is in the `stringsToMap` parameter.
   * @param stringsToMatch A list of strings, such as `"A", "B", "C"`. Each
   * member in the `stringsToMatch` parameter is compared against the members of
   * the `stringsToCheck` parameter.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-rules.html#fn-eachmemberin | Fn::EachMemberIn}
   */
  public static eachMemberIn(
    stringsToCheck: string[],
    stringsToMatch: string[],
  ): IntrinsicValue {
    return new this("Fn::EachMemberIn", [stringsToCheck, stringsToMatch]);
  }

  /**
   * Compares if two values are equal. Returns true if the two values are equal
   * or false if they aren't.
   *
   * @param value1 A value of any type that you want to compare.
   * @param value2 A value of any type that you want to compare.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-conditions.html#intrinsic-function-reference-conditions-equals | Fn::Equals}
   */
  public static equals(
    value1: IntrinsicValue,
    value2: IntrinsicValue,
  ): IntrinsicValue {
    return new this("Fn::Equals", [value1, value2]);
  }

  /**
   * The intrinsic function `Fn::FindInMap` returns the value corresponding to
   * keys in a two-level map that is declared in the Mappings section.
   *
   * @param mapName The logical name of a mapping declared in the Mappings
   * section that contains the keys and values.
   * @param topLevelKey The top-level key name. Its value is a list of key-value pairs.
   * @param secondLevelKey The second-level key name, which is set to one of the keys from the list assigned to TopLevelKey.
   * @returns The value that is assigned to SecondLevelKey.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-findinmap.html | Fn::FindInMap}
   */
  public static findInMap(
    mapName: string,
    topLevelKey: string,
    secondLevelKey: string,
  ): IntrinsicValue {
    return new this("Fn::FindInMap", [mapName, topLevelKey, secondLevelKey]);
  }

  /**
   * The `Fn::GetAtt` intrinsic function returns the value of an attribute from
   * a resource in the template. For more information about GetAtt return values
   * for a particular resource, refer to the documentation for that resource in
   * the Resource and Property Reference.
   *
   * @param logicalNameOfResource The logical name (also called logical ID) of
   * the resource that contains the attribute that you want.
   * @param attributeName The name of the resource-specific attribute whose
   * value you want. See the resource's reference page for details about the
   * attributes available for that resource type.
   * @returns The attribute value.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html | Fn::GetAtt}
   */
  public static getAtt(
    logicalNameOfResource: string,
    attributeName: string,
  ): IntrinsicValue {
    return new this("Fn::GetAtt", [logicalNameOfResource, attributeName]);
  }

  /**
   * The intrinsic function `Fn::GetAZs` returns an array that lists
   * Availability Zones for a specified region. Because customers have access to
   * different Availability Zones, the intrinsic function `Fn::GetAZs` enables
   * template authors to write templates that adapt to the calling user's
   * access. That way you don't have to hard-code a full list of Availability
   * Zones for a specified region.
   *
   * @param region The name of the region for which you want to get the
   * Availability Zones. You can use the AWS::Region pseudo parameter to
   * specify the region in which the stack is created. Specifying an empty
   * string is equivalent to specifying AWS::Region.
   * @returns The list of Availability Zones for the region.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getavailabilityzones.html | Fn::GetAZs}
   */
  public static getAZs(region: string): IntrinsicValue {
    return new this("Fn::GetAZs", region);
  }

  /**
   * Returns one value if the specified condition evaluates to true and another
   * value if the specified condition evaluates to false. Currently, AWS
   * CloudFormation supports the Fn::If intrinsic function in the metadata
   * attribute, update policy attribute, and property values in the Resources
   * section and Outputs sections of a template. You can use the `AWS::NoValue`
   * pseudo parameter as a return value to remove the corresponding property.
   *
   * @param conditionName A reference to a condition in the Conditions section.
   * Use the condition's name to reference it.
   * @param valueIfTrue A value to be returned if the specified condition
   * evaluates to true.
   * @param valueIfFalse A value to be returned if the specified condition
   * evaluates to false.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-conditions.html#intrinsic-function-reference-conditions-if | Fn::If}
   */
  public static ifThen(
    conditionName: string,
    valueIfTrue: IntrinsicValue,
    valueIfFalse: IntrinsicValue,
  ): IntrinsicValue {
    return new this("Fn::If", [conditionName, valueIfTrue, valueIfFalse]);
  }

  /**
   * The intrinsic function `Fn::ImportValue` returns the value of an output
   * exported by another stack. You typically use this function to create
   * cross-stack references. In the following example template snippets, Stack A
   * exports VPC security group values and Stack B imports them.
   *
   * @param sharedValueToImport The stack output value that you want to import.
   * @returns The stack output value.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html | Fn::ImportValue}
   */
  public static importValue(sharedValueToImport: string): IntrinsicValue {
    return new this("Fn::ImportValue", sharedValueToImport);
  }

  /**
   * The intrinsic function `Fn::Join` appends a set of values into a single
   * value, separated by the specified delimiter. If a delimiter is the empty
   * string, the set of values are concatenated with no delimiter.
   *
   * @param delimiter The value you want to occur between fragments. The
   * delimiter will occur between fragments only. It will not terminate the
   * final value.
   * @param listOfValues The list of values you want combined.
   * @returns The combined string.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-join.html | Fn::Join}
   */
  public static join(
    delimiter: string,
    listOfValues: IntrinsicValue[],
  ): IntrinsicValue {
    return new this("Fn::Join", [delimiter, listOfValues]);
  }

  /**
   * Constructs a string value using {@link Fn.join} from a tagged template
   * literal.
   */
  public static join$(
    literals: TemplateStringsArray,
    ...values: unknown[]
  ): IntrinsicValue {
    const parts: unknown[] = [];

    for (let i = 0; i < literals.length; ++i) {
      if (literals[i]) {
        parts.push(literals[i]);
      }
      if (i < values.length) {
        parts.push(values[i]);
      }
    }

    return Fn.join("", parts);
  }

  /**
   * Returns true for a condition that evaluates to false or returns false for a
   * condition that evaluates to true. `Fn::Not` acts as a NOT operator.
   *
   * @param condition A condition such as `Fn::Equals` that evaluates to true or
   * false.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-conditions.html#intrinsic-function-reference-conditions-not | Fn::Not}
   */
  public static not(condition: string): IntrinsicValue {
    return new this("Fn::Not", [condition]);
  }

  /**
   * Returns true if any one of the specified conditions evaluate to true, or
   * returns false if all of the conditions evaluates to false. `Fn::Or` acts as
   * an OR operator. The minimum number of conditions that you can include is 2,
   * and the maximum is 10.
   *
   * @param conditions A condition that evaluates to true or false.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-conditions.html#intrinsic-function-reference-conditions-or | Fn::Or}
   */
  public static or(...conditions: IntrinsicValue[]): IntrinsicValue {
    return new this("Fn::Or", conditions);
  }

  /**
   * The intrinsic function Ref returns the value of the specified parameter or
   * resource.
   *
   * - When you specify a parameter's logical name, it returns the value of the
   * parameter.
   *
   * - When you specify a resource's logical name, it returns a value that you
   * can typically use to refer to that resource, such as a physical ID.
   *
   * When you are declaring a resource in a template and you need to specify
   * another template resource by name, you can use the Ref to refer to that
   * other resource. In general, Ref returns the name of the resource. For
   * example, a reference to an AWS::AutoScaling::AutoScalingGroup returns the
   * name of that Auto Scaling group resource.
   *
   * @param logicalName The logical name of the resource or parameter you want
   * to dereference.
   *
   * @returns The physical ID of the resource or the value of the parameter.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html | Ref}
   */
  public static ref(logicalName: string): IntrinsicValue {
    return new this("Ref", logicalName);
  }

  /**
   * Returns all values for a specified parameter type.
   *
   * @param parameterType An AWS-specific parameter type, such as
   * `AWS::EC2::SecurityGroup::Id` or `AWS::EC2::VPC::Id`. For more information,
   * see Parameters in the AWS CloudFormation User Guide.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-rules.html#fn-refall | Fn::RefAll}
   */
  public static refAll(parameterType: string): IntrinsicValue {
    return new this("Fn::RefAll", parameterType);
  }

  /**
   * The intrinsic function `Fn::Select` returns a single object from a list of
   * objects by index.
   *
   * @param index The index of the object to retrieve. This must be a value from
   * zero to N-1, where N represents the number of elements in the array.
   * @param listOfObjects The list of objects to select from. This list must not
   * be null, nor can it have null entries.
   * @returns The selected object.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-select.html | Fn::Select}
   */
  public static select(
    index: number,
    listOfObjects: IntrinsicValue[],
  ): IntrinsicValue {
    return new this("Fn::Select", [index, listOfObjects]);
  }

  /**
   * To split a string into a list of string values so that you can select an
   * element from the resulting string list, use the `Fn::Split` intrinsic
   * function. Specify the location of splits with a delimiter, such as , (a
   * comma). After you split a string, use the `Fn::Select` function to pick a
   * specific element.
   *
   * @param delimiter A string value that determines where the source string is
   * divided.
   * @param sourceString The string value that you want to split.
   * @returns A list of string values.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-split.html | Fn::Split}
   */
  public static split(delimiter: string, sourceString: string): IntrinsicValue {
    return new this("Fn::Split", [delimiter, sourceString]);
  }

  /**
   * The intrinsic function `Fn::Sub` substitutes variables in an input string
   * with values that you specify. In your templates, you can use this function
   * to construct commands or outputs that include values that aren't available
   * until you create or update a stack.
   *
   * @param text A string with variables that AWS CloudFormation substitutes
   * with their associated values at runtime. Write variables as `${MyVarName}`.
   * Variables can be template parameter names, resource logical IDs,
   * resource attributes, or a variable in a key-value map. If you specify only
   * template parameter names, resource logical IDs, and resource attributes,
   * don't specify a key-value map.
   *
   * If you specify template parameter names or resource logical IDs, such as
   * `${InstanceTypeParameter}` AWS CloudFormation returns the same values as if
   * you used the Ref intrinsic function. If you specify resource attributes,
   * such as `${MyInstance.PublicIp}` AWS CloudFormation returns the same values
   * as if you used the `Fn::GetAtt` intrinsic function.
   *
   * To write a dollar sign and curly braces (`${}`) literally, add an
   * exclamation point (!) after the open curly brace, such as `${!Literal}`.
   * AWS CloudFormation resolves this text as `${Literal}`.
   *
   * @param values A map of values that AWS CloudFormation substitutes for the
   * associated variable names at runtime.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-sub.html | Fn::Sub}
   */
  public static sub(
    text: string,
    values: Record<string, IntrinsicValue>,
  ): IntrinsicValue {
    return new this("Fn::Sub", [text, values]);
  }

  /**
   * Returns an attribute value or list of values for a specific parameter and
   * attribute.
   *
   * @param attribute The name of an attribute from which you want to retrieve a
   * value.
   * @param parameterLogicalId The name of a parameter for which you want to
   * retrieve attribute values. The parameter must be declared in the
   * `Parameters` section of the template.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-rules.html#fn-valueof | Fn::ValueOf}
   */
  public static valueOf(
    attribute: string,
    parameterLogicalId: string,
  ): IntrinsicValue {
    return new this("Fn::ValueOf", [attribute, parameterLogicalId]);
  }

  /**
   * Returns a list of all attribute values for a given parameter type and
   * attribute.
   *
   * @param parameterType An AWS-specific parameter type, such as
   * `AWS::EC2::SecurityGroup::Id` or `AWS::EC2::VPC::Id`. For more information,
   * see Parameters in the AWS CloudFormation User Guide.
   * @param attribute The name of an attribute from which you want to retrieve a
   * value.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-rules.html#fn-valueofall | Fn::ValueOfAll}
   */
  public static valueOfAll(
    parameterType: string,
    attribute: string,
  ): IntrinsicValue {
    return new this("Fn::ValueOfAll", [parameterType, attribute]);
  }

  /**
   * Create an arbitrary intrinsic function value.
   *
   * @param fn The name of the intrinsic function.
   * @param args The arguments for the intrinsic function.
   */
  constructor(
    public fn: string,
    public args: IntrinsicValue,
  ) {}

  /**
   * Get the JSON representation for this instance.
   */
  public toJSON(): IntrinsicValue {
    return { [this.fn]: this.args };
  }
}

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
    return Fn.ref("AWS::AccountId");
  }

  /**
   * Returns the list of notification Amazon Resource Names (ARNs) for the
   * current stack.
   *
   * To get a single ARN from the list, use {@link Fn.split}.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/pseudo-parameter-reference.html#cfn-pseudo-param-notificationarns | AWS::NotificationARNs}
   */
  public static get NotificationARNs(): IntrinsicValue {
    return Fn.ref("AWS::NotificationARNs");
  }

  /**
   * Removes the corresponding resource property when specified as a return
   * value in the `Fn::If` intrinsic function.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/pseudo-parameter-reference.html#cfn-pseudo-param-novalue | AWS::NoValue}
   */
  public static get NoValue(): IntrinsicValue {
    return Fn.ref("AWS::NoValue");
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
    return Fn.ref("AWS::Partition");
  }

  /**
   * Returns a string representing the Region in which the encompassing resource
   * is being created, such as `us-west-2`.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/pseudo-parameter-reference.html#cfn-pseudo-param-region | AWS::Region}
   */
  public static get Region(): IntrinsicValue {
    return Fn.ref("AWS::Region");
  }

  /**
   * Returns the ID of the stack as specified with the aws cloudformation
   * create-stack command, such as
   * `arn:aws:cloudformation:us-west-2:123456789012:stack/teststack/51af3dc0-da77-11e4-872e-1234567db123`.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/pseudo-parameter-reference.html#cfn-pseudo-param-stackid | AWS::StackId}
   */
  public static get StackId(): IntrinsicValue {
    return Fn.ref("AWS::StackId");
  }

  /**
   * Returns the name of the stack as specified with the aws cloudformation
   * `create-stack` command, such as `teststack`.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/pseudo-parameter-reference.html#cfn-pseudo-param-stackname | AWS::StackName}
   */
  public static get StackName(): IntrinsicValue {
    return Fn.ref("AWS::StackName");
  }

  /**
   * Returns the suffix for a domain. The suffix is typically `amazonaws.com`,
   * but might differ by Region. For example, the suffix for the China (Beijing)
   * Region is `amazonaws.com.cn`.
   *
   * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/pseudo-parameter-reference.html#cfn-pseudo-param-urlsuffix | AWS::URLSuffix}
   */
  public static get URLSuffix(): IntrinsicValue {
    return Fn.ref("AWS::URLSuffix");
  }
}
