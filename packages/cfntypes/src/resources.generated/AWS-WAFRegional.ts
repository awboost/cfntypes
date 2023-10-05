import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::WAFRegional::ByteMatchSet.ByteMatchTuple
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-bytematchset-bytematchtuple.html | AWS::WAFRegional::ByteMatchSet.ByteMatchTuple}
 */
export interface WAFRegionalByteMatchSetByteMatchTuple {
  TargetString?: string;
  TargetStringBase64?: string;
  PositionalConstraint: string;
  TextTransformation: string;
  FieldToMatch: WAFRegionalByteMatchSetFieldToMatch;
}
/**
 * Type definition for AWS::WAFRegional::ByteMatchSet.FieldToMatch
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-bytematchset-fieldtomatch.html | AWS::WAFRegional::ByteMatchSet.FieldToMatch}
 */
export interface WAFRegionalByteMatchSetFieldToMatch {
  Type: string;
  Data?: string;
}
/**
 * Type definition for AWS::WAFRegional::GeoMatchSet.GeoMatchConstraint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-geomatchset-geomatchconstraint.html | AWS::WAFRegional::GeoMatchSet.GeoMatchConstraint}
 */
export interface WAFRegionalGeoMatchSetGeoMatchConstraint {
  Type: string;
  Value: string;
}
/**
 * Type definition for AWS::WAFRegional::IPSet.IPSetDescriptor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-ipset-ipsetdescriptor.html | AWS::WAFRegional::IPSet.IPSetDescriptor}
 */
export interface WAFRegionalIPSetIPSetDescriptor {
  Type: string;
  Value: string;
}
/**
 * Type definition for AWS::WAFRegional::RateBasedRule.Predicate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-ratebasedrule-predicate.html | AWS::WAFRegional::RateBasedRule.Predicate}
 */
export interface WAFRegionalRateBasedRulePredicate {
  Type: string;
  DataId: string;
  Negated: boolean;
}
/**
 * Type definition for AWS::WAFRegional::Rule.Predicate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-rule-predicate.html | AWS::WAFRegional::Rule.Predicate}
 */
export interface WAFRegionalRulePredicate {
  Type: string;
  DataId: string;
  Negated: boolean;
}
/**
 * Type definition for AWS::WAFRegional::SizeConstraintSet.FieldToMatch
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-sizeconstraintset-fieldtomatch.html | AWS::WAFRegional::SizeConstraintSet.FieldToMatch}
 */
export interface WAFRegionalSizeConstraintSetFieldToMatch {
  Type: string;
  Data?: string;
}
/**
 * Type definition for AWS::WAFRegional::SizeConstraintSet.SizeConstraint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-sizeconstraintset-sizeconstraint.html | AWS::WAFRegional::SizeConstraintSet.SizeConstraint}
 */
export interface WAFRegionalSizeConstraintSetSizeConstraint {
  ComparisonOperator: string;
  Size: number;
  TextTransformation: string;
  FieldToMatch: WAFRegionalSizeConstraintSetFieldToMatch;
}
/**
 * Type definition for AWS::WAFRegional::SqlInjectionMatchSet.FieldToMatch
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-sqlinjectionmatchset-fieldtomatch.html | AWS::WAFRegional::SqlInjectionMatchSet.FieldToMatch}
 */
export interface WAFRegionalSqlInjectionMatchSetFieldToMatch {
  Type: string;
  Data?: string;
}
/**
 * Type definition for AWS::WAFRegional::SqlInjectionMatchSet.SqlInjectionMatchTuple
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-sqlinjectionmatchset-sqlinjectionmatchtuple.html | AWS::WAFRegional::SqlInjectionMatchSet.SqlInjectionMatchTuple}
 */
export interface WAFRegionalSqlInjectionMatchSetSqlInjectionMatchTuple {
  TextTransformation: string;
  FieldToMatch: WAFRegionalSqlInjectionMatchSetFieldToMatch;
}
/**
 * Type definition for AWS::WAFRegional::WebACL.Action
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-webacl-action.html | AWS::WAFRegional::WebACL.Action}
 */
export interface WAFRegionalWebACLAction {
  Type: string;
}
/**
 * Type definition for AWS::WAFRegional::WebACL.Rule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-webacl-rule.html | AWS::WAFRegional::WebACL.Rule}
 */
export interface WAFRegionalWebACLRule {
  Action: WAFRegionalWebACLAction;
  Priority: number;
  RuleId: string;
}
/**
 * Type definition for AWS::WAFRegional::XssMatchSet.FieldToMatch
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-xssmatchset-fieldtomatch.html | AWS::WAFRegional::XssMatchSet.FieldToMatch}
 */
export interface WAFRegionalXssMatchSetFieldToMatch {
  Type: string;
  Data?: string;
}
/**
 * Type definition for AWS::WAFRegional::XssMatchSet.XssMatchTuple
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-xssmatchset-xssmatchtuple.html | AWS::WAFRegional::XssMatchSet.XssMatchTuple}
 */
export interface WAFRegionalXssMatchSetXssMatchTuple {
  TextTransformation: string;
  FieldToMatch: WAFRegionalXssMatchSetFieldToMatch;
}
/**
 * Type definition for AWS::WAFRegional::ByteMatchSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-bytematchset.html | AWS::WAFRegional::ByteMatchSet}
 */
export interface WAFRegionalByteMatchSetProps {
  ByteMatchTuples?: any[];
  Name: string;
}
/**
 * Resource class for AWS::WAFRegional::ByteMatchSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-bytematchset.html | AWS::WAFRegional::ByteMatchSet}
 */
export class WAFRegionalByteMatchSet extends ResourceBase<
  "AWS::WAFRegional::ByteMatchSet",
  WAFRegionalByteMatchSetProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::WAFRegional::ByteMatchSet";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: WAFRegionalByteMatchSetProps,
    options?: ResourceOptions,
  ) {
    super(
      WAFRegionalByteMatchSet.Type,
      WAFRegionalByteMatchSet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::WAFRegional::GeoMatchSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-geomatchset.html | AWS::WAFRegional::GeoMatchSet}
 */
export interface WAFRegionalGeoMatchSetProps {
  GeoMatchConstraints?: any[];
  Name: string;
}
/**
 * Resource class for AWS::WAFRegional::GeoMatchSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-geomatchset.html | AWS::WAFRegional::GeoMatchSet}
 */
export class WAFRegionalGeoMatchSet extends ResourceBase<
  "AWS::WAFRegional::GeoMatchSet",
  WAFRegionalGeoMatchSetProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::WAFRegional::GeoMatchSet";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: WAFRegionalGeoMatchSetProps,
    options?: ResourceOptions,
  ) {
    super(
      WAFRegionalGeoMatchSet.Type,
      WAFRegionalGeoMatchSet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::WAFRegional::IPSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-ipset.html | AWS::WAFRegional::IPSet}
 */
export interface WAFRegionalIPSetProps {
  IPSetDescriptors?: any[];
  Name: string;
}
/**
 * Resource class for AWS::WAFRegional::IPSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-ipset.html | AWS::WAFRegional::IPSet}
 */
export class WAFRegionalIPSet extends ResourceBase<
  "AWS::WAFRegional::IPSet",
  WAFRegionalIPSetProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::WAFRegional::IPSet";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: WAFRegionalIPSetProps,
    options?: ResourceOptions,
  ) {
    super(
      WAFRegionalIPSet.Type,
      WAFRegionalIPSet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::WAFRegional::RateBasedRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-ratebasedrule.html | AWS::WAFRegional::RateBasedRule}
 */
export interface WAFRegionalRateBasedRuleProps {
  MetricName: string;
  RateLimit: number;
  MatchPredicates?: any[];
  RateKey: string;
  Name: string;
}
/**
 * Resource class for AWS::WAFRegional::RateBasedRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-ratebasedrule.html | AWS::WAFRegional::RateBasedRule}
 */
export class WAFRegionalRateBasedRule extends ResourceBase<
  "AWS::WAFRegional::RateBasedRule",
  WAFRegionalRateBasedRuleProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::WAFRegional::RateBasedRule";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: WAFRegionalRateBasedRuleProps,
    options?: ResourceOptions,
  ) {
    super(
      WAFRegionalRateBasedRule.Type,
      WAFRegionalRateBasedRule.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::WAFRegional::RegexPatternSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-regexpatternset.html | AWS::WAFRegional::RegexPatternSet}
 */
export interface WAFRegionalRegexPatternSetProps {
  RegexPatternStrings: any[];
  Name: string;
}
/**
 * Resource class for AWS::WAFRegional::RegexPatternSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-regexpatternset.html | AWS::WAFRegional::RegexPatternSet}
 */
export class WAFRegionalRegexPatternSet extends ResourceBase<
  "AWS::WAFRegional::RegexPatternSet",
  WAFRegionalRegexPatternSetProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::WAFRegional::RegexPatternSet";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: WAFRegionalRegexPatternSetProps,
    options?: ResourceOptions,
  ) {
    super(
      WAFRegionalRegexPatternSet.Type,
      WAFRegionalRegexPatternSet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::WAFRegional::Rule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-rule.html | AWS::WAFRegional::Rule}
 */
export interface WAFRegionalRuleProps {
  MetricName: string;
  Predicates?: any[];
  Name: string;
}
/**
 * Resource class for AWS::WAFRegional::Rule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-rule.html | AWS::WAFRegional::Rule}
 */
export class WAFRegionalRule extends ResourceBase<
  "AWS::WAFRegional::Rule",
  WAFRegionalRuleProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::WAFRegional::Rule";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: WAFRegionalRuleProps,
    options?: ResourceOptions,
  ) {
    super(
      WAFRegionalRule.Type,
      WAFRegionalRule.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::WAFRegional::SizeConstraintSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-sizeconstraintset.html | AWS::WAFRegional::SizeConstraintSet}
 */
export interface WAFRegionalSizeConstraintSetProps {
  SizeConstraints?: any[];
  Name: string;
}
/**
 * Resource class for AWS::WAFRegional::SizeConstraintSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-sizeconstraintset.html | AWS::WAFRegional::SizeConstraintSet}
 */
export class WAFRegionalSizeConstraintSet extends ResourceBase<
  "AWS::WAFRegional::SizeConstraintSet",
  WAFRegionalSizeConstraintSetProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::WAFRegional::SizeConstraintSet";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: WAFRegionalSizeConstraintSetProps,
    options?: ResourceOptions,
  ) {
    super(
      WAFRegionalSizeConstraintSet.Type,
      WAFRegionalSizeConstraintSet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::WAFRegional::SqlInjectionMatchSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-sqlinjectionmatchset.html | AWS::WAFRegional::SqlInjectionMatchSet}
 */
export interface WAFRegionalSqlInjectionMatchSetProps {
  SqlInjectionMatchTuples?: any[];
  Name: string;
}
/**
 * Resource class for AWS::WAFRegional::SqlInjectionMatchSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-sqlinjectionmatchset.html | AWS::WAFRegional::SqlInjectionMatchSet}
 */
export class WAFRegionalSqlInjectionMatchSet extends ResourceBase<
  "AWS::WAFRegional::SqlInjectionMatchSet",
  WAFRegionalSqlInjectionMatchSetProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::WAFRegional::SqlInjectionMatchSet";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: WAFRegionalSqlInjectionMatchSetProps,
    options?: ResourceOptions,
  ) {
    super(
      WAFRegionalSqlInjectionMatchSet.Type,
      WAFRegionalSqlInjectionMatchSet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::WAFRegional::WebACL
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-webacl.html | AWS::WAFRegional::WebACL}
 */
export interface WAFRegionalWebACLProps {
  MetricName: string;
  DefaultAction: WAFRegionalWebACLAction;
  Rules?: any[];
  Name: string;
}
/**
 * Resource class for AWS::WAFRegional::WebACL
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-webacl.html | AWS::WAFRegional::WebACL}
 */
export class WAFRegionalWebACL extends ResourceBase<
  "AWS::WAFRegional::WebACL",
  WAFRegionalWebACLProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::WAFRegional::WebACL";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: WAFRegionalWebACLProps,
    options?: ResourceOptions,
  ) {
    super(
      WAFRegionalWebACL.Type,
      WAFRegionalWebACL.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::WAFRegional::WebACLAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-webaclassociation.html | AWS::WAFRegional::WebACLAssociation}
 */
export interface WAFRegionalWebACLAssociationProps {
  ResourceArn: string;
  WebACLId: string;
}
/**
 * Resource class for AWS::WAFRegional::WebACLAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-webaclassociation.html | AWS::WAFRegional::WebACLAssociation}
 */
export class WAFRegionalWebACLAssociation extends ResourceBase<
  "AWS::WAFRegional::WebACLAssociation",
  WAFRegionalWebACLAssociationProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::WAFRegional::WebACLAssociation";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: WAFRegionalWebACLAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      WAFRegionalWebACLAssociation.Type,
      WAFRegionalWebACLAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::WAFRegional::XssMatchSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-xssmatchset.html | AWS::WAFRegional::XssMatchSet}
 */
export interface WAFRegionalXssMatchSetProps {
  XssMatchTuples?: any[];
  Name: string;
}
/**
 * Resource class for AWS::WAFRegional::XssMatchSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-xssmatchset.html | AWS::WAFRegional::XssMatchSet}
 */
export class WAFRegionalXssMatchSet extends ResourceBase<
  "AWS::WAFRegional::XssMatchSet",
  WAFRegionalXssMatchSetProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::WAFRegional::XssMatchSet";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: WAFRegionalXssMatchSetProps,
    options?: ResourceOptions,
  ) {
    super(
      WAFRegionalXssMatchSet.Type,
      WAFRegionalXssMatchSet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
