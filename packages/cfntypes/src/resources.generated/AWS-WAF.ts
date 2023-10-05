import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::WAF::ByteMatchSet.ByteMatchTuple
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-bytematchset-bytematchtuples.html | AWS::WAF::ByteMatchSet.ByteMatchTuple}
 */
export interface WAFByteMatchSetByteMatchTuple {
  FieldToMatch: WAFByteMatchSetFieldToMatch;
  PositionalConstraint: string;
  TargetString?: string;
  TargetStringBase64?: string;
  TextTransformation: string;
}
/**
 * Type definition for AWS::WAF::ByteMatchSet.FieldToMatch
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-bytematchset-bytematchtuples-fieldtomatch.html | AWS::WAF::ByteMatchSet.FieldToMatch}
 */
export interface WAFByteMatchSetFieldToMatch {
  Data?: string;
  Type: string;
}
/**
 * Type definition for AWS::WAF::IPSet.IPSetDescriptor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-ipset-ipsetdescriptors.html | AWS::WAF::IPSet.IPSetDescriptor}
 */
export interface WAFIPSetIPSetDescriptor {
  Type: string;
  Value: string;
}
/**
 * Type definition for AWS::WAF::Rule.Predicate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-rule-predicates.html | AWS::WAF::Rule.Predicate}
 */
export interface WAFRulePredicate {
  DataId: string;
  Negated: boolean;
  Type: string;
}
/**
 * Type definition for AWS::WAF::SizeConstraintSet.FieldToMatch
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-sizeconstraintset-sizeconstraint-fieldtomatch.html | AWS::WAF::SizeConstraintSet.FieldToMatch}
 */
export interface WAFSizeConstraintSetFieldToMatch {
  Data?: string;
  Type: string;
}
/**
 * Type definition for AWS::WAF::SizeConstraintSet.SizeConstraint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-sizeconstraintset-sizeconstraint.html | AWS::WAF::SizeConstraintSet.SizeConstraint}
 */
export interface WAFSizeConstraintSetSizeConstraint {
  ComparisonOperator: string;
  FieldToMatch: WAFSizeConstraintSetFieldToMatch;
  Size: number;
  TextTransformation: string;
}
/**
 * Type definition for AWS::WAF::SqlInjectionMatchSet.FieldToMatch
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-bytematchset-bytematchtuples-fieldtomatch.html | AWS::WAF::SqlInjectionMatchSet.FieldToMatch}
 */
export interface WAFSqlInjectionMatchSetFieldToMatch {
  Data?: string;
  Type: string;
}
/**
 * Type definition for AWS::WAF::SqlInjectionMatchSet.SqlInjectionMatchTuple
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-sqlinjectionmatchset-sqlinjectionmatchtuples.html | AWS::WAF::SqlInjectionMatchSet.SqlInjectionMatchTuple}
 */
export interface WAFSqlInjectionMatchSetSqlInjectionMatchTuple {
  FieldToMatch: WAFSqlInjectionMatchSetFieldToMatch;
  TextTransformation: string;
}
/**
 * Type definition for AWS::WAF::WebACL.ActivatedRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-webacl-rules.html | AWS::WAF::WebACL.ActivatedRule}
 */
export interface WAFWebACLActivatedRule {
  Action?: WAFWebACLWafAction;
  Priority: number;
  RuleId: string;
}
/**
 * Type definition for AWS::WAF::WebACL.WafAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-webacl-action.html | AWS::WAF::WebACL.WafAction}
 */
export interface WAFWebACLWafAction {
  Type: string;
}
/**
 * Type definition for AWS::WAF::XssMatchSet.FieldToMatch
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-xssmatchset-xssmatchtuple-fieldtomatch.html | AWS::WAF::XssMatchSet.FieldToMatch}
 */
export interface WAFXssMatchSetFieldToMatch {
  Data?: string;
  Type: string;
}
/**
 * Type definition for AWS::WAF::XssMatchSet.XssMatchTuple
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-xssmatchset-xssmatchtuple.html | AWS::WAF::XssMatchSet.XssMatchTuple}
 */
export interface WAFXssMatchSetXssMatchTuple {
  FieldToMatch: WAFXssMatchSetFieldToMatch;
  TextTransformation: string;
}
/**
 * Type definition for AWS::WAF::ByteMatchSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-bytematchset.html | AWS::WAF::ByteMatchSet}
 */
export interface WAFByteMatchSetProps {
  ByteMatchTuples?: any[];
  Name: string;
}
/**
 * Resource class for AWS::WAF::ByteMatchSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-bytematchset.html | AWS::WAF::ByteMatchSet}
 */
export class WAFByteMatchSet extends ResourceBase<
  "AWS::WAF::ByteMatchSet",
  WAFByteMatchSetProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::WAF::ByteMatchSet";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: WAFByteMatchSetProps,
    options?: ResourceOptions,
  ) {
    super(
      WAFByteMatchSet.Type,
      WAFByteMatchSet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::WAF::IPSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-ipset.html | AWS::WAF::IPSet}
 */
export interface WAFIPSetProps {
  IPSetDescriptors?: any[];
  Name: string;
}
/**
 * Resource class for AWS::WAF::IPSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-ipset.html | AWS::WAF::IPSet}
 */
export class WAFIPSet extends ResourceBase<
  "AWS::WAF::IPSet",
  WAFIPSetProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::WAF::IPSet";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: WAFIPSetProps,
    options?: ResourceOptions,
  ) {
    super(
      WAFIPSet.Type,
      WAFIPSet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::WAF::Rule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-rule.html | AWS::WAF::Rule}
 */
export interface WAFRuleProps {
  MetricName: string;
  Name: string;
  Predicates?: any[];
}
/**
 * Resource class for AWS::WAF::Rule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-rule.html | AWS::WAF::Rule}
 */
export class WAFRule extends ResourceBase<
  "AWS::WAF::Rule",
  WAFRuleProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::WAF::Rule";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: WAFRuleProps,
    options?: ResourceOptions,
  ) {
    super(WAFRule.Type, WAFRule.AttributeNames, logicalId, properties, options);
  }
}
/**
 * Type definition for AWS::WAF::SizeConstraintSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-sizeconstraintset.html | AWS::WAF::SizeConstraintSet}
 */
export interface WAFSizeConstraintSetProps {
  Name: string;
  SizeConstraints: any[];
}
/**
 * Resource class for AWS::WAF::SizeConstraintSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-sizeconstraintset.html | AWS::WAF::SizeConstraintSet}
 */
export class WAFSizeConstraintSet extends ResourceBase<
  "AWS::WAF::SizeConstraintSet",
  WAFSizeConstraintSetProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::WAF::SizeConstraintSet";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: WAFSizeConstraintSetProps,
    options?: ResourceOptions,
  ) {
    super(
      WAFSizeConstraintSet.Type,
      WAFSizeConstraintSet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::WAF::SqlInjectionMatchSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-sqlinjectionmatchset.html | AWS::WAF::SqlInjectionMatchSet}
 */
export interface WAFSqlInjectionMatchSetProps {
  Name: string;
  SqlInjectionMatchTuples?: any[];
}
/**
 * Resource class for AWS::WAF::SqlInjectionMatchSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-sqlinjectionmatchset.html | AWS::WAF::SqlInjectionMatchSet}
 */
export class WAFSqlInjectionMatchSet extends ResourceBase<
  "AWS::WAF::SqlInjectionMatchSet",
  WAFSqlInjectionMatchSetProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::WAF::SqlInjectionMatchSet";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: WAFSqlInjectionMatchSetProps,
    options?: ResourceOptions,
  ) {
    super(
      WAFSqlInjectionMatchSet.Type,
      WAFSqlInjectionMatchSet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::WAF::WebACL
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-webacl.html | AWS::WAF::WebACL}
 */
export interface WAFWebACLProps {
  DefaultAction: WAFWebACLWafAction;
  MetricName: string;
  Name: string;
  Rules?: any[];
}
/**
 * Resource class for AWS::WAF::WebACL
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-webacl.html | AWS::WAF::WebACL}
 */
export class WAFWebACL extends ResourceBase<
  "AWS::WAF::WebACL",
  WAFWebACLProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::WAF::WebACL";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: WAFWebACLProps,
    options?: ResourceOptions,
  ) {
    super(
      WAFWebACL.Type,
      WAFWebACL.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::WAF::XssMatchSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-xssmatchset.html | AWS::WAF::XssMatchSet}
 */
export interface WAFXssMatchSetProps {
  Name: string;
  XssMatchTuples: any[];
}
/**
 * Resource class for AWS::WAF::XssMatchSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-xssmatchset.html | AWS::WAF::XssMatchSet}
 */
export class WAFXssMatchSet extends ResourceBase<
  "AWS::WAF::XssMatchSet",
  WAFXssMatchSetProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::WAF::XssMatchSet";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: WAFXssMatchSetProps,
    options?: ResourceOptions,
  ) {
    super(
      WAFXssMatchSet.Type,
      WAFXssMatchSet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
