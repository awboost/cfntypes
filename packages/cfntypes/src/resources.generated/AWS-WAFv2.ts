import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::WAFv2::LoggingConfiguration.ActionCondition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-actioncondition.html | AWS::WAFv2::LoggingConfiguration.ActionCondition}
 */
export interface WAFv2LoggingConfigurationActionCondition {
  Action: string;
}
/**
 * Type definition for AWS::WAFv2::LoggingConfiguration.Condition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-condition.html | AWS::WAFv2::LoggingConfiguration.Condition}
 */
export interface WAFv2LoggingConfigurationCondition {
  LabelNameCondition?: WAFv2LoggingConfigurationLabelNameCondition;
  ActionCondition?: WAFv2LoggingConfigurationActionCondition;
}
/**
 * Type definition for AWS::WAFv2::LoggingConfiguration.FieldToMatch
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-fieldtomatch.html | AWS::WAFv2::LoggingConfiguration.FieldToMatch}
 */
export interface WAFv2LoggingConfigurationFieldToMatch {
  JsonBody?: WAFv2LoggingConfigurationJsonBody;
  QueryString?: object;
  UriPath?: object;
  Method?: object;
  SingleHeader?: WAFv2LoggingConfigurationSingleHeader;
}
/**
 * Type definition for AWS::WAFv2::LoggingConfiguration.Filter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-filter.html | AWS::WAFv2::LoggingConfiguration.Filter}
 */
export interface WAFv2LoggingConfigurationFilter {
  Requirement: string;
  Behavior: string;
  Conditions: any[];
}
/**
 * Type definition for AWS::WAFv2::LoggingConfiguration.JsonBody
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-jsonbody.html | AWS::WAFv2::LoggingConfiguration.JsonBody}
 */
export interface WAFv2LoggingConfigurationJsonBody {
  MatchScope: string;
  InvalidFallbackBehavior?: string;
  MatchPattern: WAFv2LoggingConfigurationMatchPattern;
}
/**
 * Type definition for AWS::WAFv2::LoggingConfiguration.LabelNameCondition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-labelnamecondition.html | AWS::WAFv2::LoggingConfiguration.LabelNameCondition}
 */
export interface WAFv2LoggingConfigurationLabelNameCondition {
  LabelName: string;
}
/**
 * Type definition for AWS::WAFv2::LoggingConfiguration.LoggingFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-loggingfilter.html | AWS::WAFv2::LoggingConfiguration.LoggingFilter}
 */
export interface WAFv2LoggingConfigurationLoggingFilter {
  Filters: any[];
  DefaultBehavior: string;
}
/**
 * Type definition for AWS::WAFv2::LoggingConfiguration.MatchPattern
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-matchpattern.html | AWS::WAFv2::LoggingConfiguration.MatchPattern}
 */
export interface WAFv2LoggingConfigurationMatchPattern {
  All?: object;
  IncludedPaths?: any[];
}
/**
 * Type definition for AWS::WAFv2::LoggingConfiguration.SingleHeader
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-singleheader.html | AWS::WAFv2::LoggingConfiguration.SingleHeader}
 */
export interface WAFv2LoggingConfigurationSingleHeader {
  Name: string;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.AllowAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-allowaction.html | AWS::WAFv2::RuleGroup.AllowAction}
 */
export interface WAFv2RuleGroupAllowAction {
  CustomRequestHandling?: WAFv2RuleGroupCustomRequestHandling;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.AndStatement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-andstatement.html | AWS::WAFv2::RuleGroup.AndStatement}
 */
export interface WAFv2RuleGroupAndStatement {
  Statements: any[];
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.BlockAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-blockaction.html | AWS::WAFv2::RuleGroup.BlockAction}
 */
export interface WAFv2RuleGroupBlockAction {
  CustomResponse?: WAFv2RuleGroupCustomResponse;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.Body
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-body.html | AWS::WAFv2::RuleGroup.Body}
 */
export interface WAFv2RuleGroupBody {
  OversizeHandling?: string;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.ByteMatchStatement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-bytematchstatement.html | AWS::WAFv2::RuleGroup.ByteMatchStatement}
 */
export interface WAFv2RuleGroupByteMatchStatement {
  SearchStringBase64?: string;
  TextTransformations: any[];
  PositionalConstraint: string;
  SearchString?: string;
  FieldToMatch: WAFv2RuleGroupFieldToMatch;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.CaptchaAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-captchaaction.html | AWS::WAFv2::RuleGroup.CaptchaAction}
 */
export interface WAFv2RuleGroupCaptchaAction {
  CustomRequestHandling?: WAFv2RuleGroupCustomRequestHandling;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.CaptchaConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-captchaconfig.html | AWS::WAFv2::RuleGroup.CaptchaConfig}
 */
export interface WAFv2RuleGroupCaptchaConfig {
  ImmunityTimeProperty?: WAFv2RuleGroupImmunityTimeProperty;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.ChallengeAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-challengeaction.html | AWS::WAFv2::RuleGroup.ChallengeAction}
 */
export interface WAFv2RuleGroupChallengeAction {
  CustomRequestHandling?: WAFv2RuleGroupCustomRequestHandling;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.ChallengeConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-challengeconfig.html | AWS::WAFv2::RuleGroup.ChallengeConfig}
 */
export interface WAFv2RuleGroupChallengeConfig {
  ImmunityTimeProperty?: WAFv2RuleGroupImmunityTimeProperty;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.CookieMatchPattern
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-cookiematchpattern.html | AWS::WAFv2::RuleGroup.CookieMatchPattern}
 */
export interface WAFv2RuleGroupCookieMatchPattern {
  All?: object;
  IncludedCookies?: any[];
  ExcludedCookies?: any[];
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.Cookies
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-cookies.html | AWS::WAFv2::RuleGroup.Cookies}
 */
export interface WAFv2RuleGroupCookies {
  MatchScope: string;
  MatchPattern: WAFv2RuleGroupCookieMatchPattern;
  OversizeHandling: string;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.CountAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-countaction.html | AWS::WAFv2::RuleGroup.CountAction}
 */
export interface WAFv2RuleGroupCountAction {
  CustomRequestHandling?: WAFv2RuleGroupCustomRequestHandling;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.CustomHTTPHeader
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-customhttpheader.html | AWS::WAFv2::RuleGroup.CustomHTTPHeader}
 */
export interface WAFv2RuleGroupCustomHTTPHeader {
  Value: string;
  Name: string;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.CustomRequestHandling
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-customrequesthandling.html | AWS::WAFv2::RuleGroup.CustomRequestHandling}
 */
export interface WAFv2RuleGroupCustomRequestHandling {
  InsertHeaders: any[];
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.CustomResponse
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-customresponse.html | AWS::WAFv2::RuleGroup.CustomResponse}
 */
export interface WAFv2RuleGroupCustomResponse {
  ResponseCode: number;
  CustomResponseBodyKey?: string;
  ResponseHeaders?: any[];
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.CustomResponseBody
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-customresponsebody.html | AWS::WAFv2::RuleGroup.CustomResponseBody}
 */
export interface WAFv2RuleGroupCustomResponseBody {
  ContentType: string;
  Content: string;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.FieldToMatch
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-fieldtomatch.html | AWS::WAFv2::RuleGroup.FieldToMatch}
 */
export interface WAFv2RuleGroupFieldToMatch {
  JsonBody?: WAFv2RuleGroupJsonBody;
  AllQueryArguments?: object;
  SingleQueryArgument?: WAFv2RuleGroupSingleQueryArgument;
  UriPath?: object;
  QueryString?: object;
  Headers?: WAFv2RuleGroupHeaders;
  Cookies?: WAFv2RuleGroupCookies;
  Method?: object;
  Body?: WAFv2RuleGroupBody;
  SingleHeader?: WAFv2RuleGroupSingleHeader;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.ForwardedIPConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-forwardedipconfiguration.html | AWS::WAFv2::RuleGroup.ForwardedIPConfiguration}
 */
export interface WAFv2RuleGroupForwardedIPConfiguration {
  FallbackBehavior: string;
  HeaderName: string;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.GeoMatchStatement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-geomatchstatement.html | AWS::WAFv2::RuleGroup.GeoMatchStatement}
 */
export interface WAFv2RuleGroupGeoMatchStatement {
  ForwardedIPConfig?: WAFv2RuleGroupForwardedIPConfiguration;
  CountryCodes?: any[];
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.HeaderMatchPattern
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-headermatchpattern.html | AWS::WAFv2::RuleGroup.HeaderMatchPattern}
 */
export interface WAFv2RuleGroupHeaderMatchPattern {
  All?: object;
  IncludedHeaders?: any[];
  ExcludedHeaders?: any[];
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.Headers
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-headers.html | AWS::WAFv2::RuleGroup.Headers}
 */
export interface WAFv2RuleGroupHeaders {
  MatchScope: string;
  MatchPattern: WAFv2RuleGroupHeaderMatchPattern;
  OversizeHandling: string;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.IPSetForwardedIPConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ipsetforwardedipconfiguration.html | AWS::WAFv2::RuleGroup.IPSetForwardedIPConfiguration}
 */
export interface WAFv2RuleGroupIPSetForwardedIPConfiguration {
  FallbackBehavior: string;
  HeaderName: string;
  Position: string;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.IPSetReferenceStatement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ipsetreferencestatement.html | AWS::WAFv2::RuleGroup.IPSetReferenceStatement}
 */
export interface WAFv2RuleGroupIPSetReferenceStatement {
  IPSetForwardedIPConfig?: WAFv2RuleGroupIPSetForwardedIPConfiguration;
  Arn: string;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.ImmunityTimeProperty
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-immunitytimeproperty.html | AWS::WAFv2::RuleGroup.ImmunityTimeProperty}
 */
export interface WAFv2RuleGroupImmunityTimeProperty {
  ImmunityTime: number;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.JsonBody
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-jsonbody.html | AWS::WAFv2::RuleGroup.JsonBody}
 */
export interface WAFv2RuleGroupJsonBody {
  MatchScope: string;
  MatchPattern: WAFv2RuleGroupJsonMatchPattern;
  InvalidFallbackBehavior?: string;
  OversizeHandling?: string;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.JsonMatchPattern
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-jsonmatchpattern.html | AWS::WAFv2::RuleGroup.JsonMatchPattern}
 */
export interface WAFv2RuleGroupJsonMatchPattern {
  All?: object;
  IncludedPaths?: any[];
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.Label
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-label.html | AWS::WAFv2::RuleGroup.Label}
 */
export interface WAFv2RuleGroupLabel {
  Name: string;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.LabelMatchStatement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-labelmatchstatement.html | AWS::WAFv2::RuleGroup.LabelMatchStatement}
 */
export interface WAFv2RuleGroupLabelMatchStatement {
  Scope: string;
  Key: string;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.LabelSummary
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-labelsummary.html | AWS::WAFv2::RuleGroup.LabelSummary}
 */
export interface WAFv2RuleGroupLabelSummary {
  Name?: string;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.NotStatement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-notstatement.html | AWS::WAFv2::RuleGroup.NotStatement}
 */
export interface WAFv2RuleGroupNotStatement {
  Statement: WAFv2RuleGroupStatement;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.OrStatement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-orstatement.html | AWS::WAFv2::RuleGroup.OrStatement}
 */
export interface WAFv2RuleGroupOrStatement {
  Statements: any[];
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.RateBasedStatement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratebasedstatement.html | AWS::WAFv2::RuleGroup.RateBasedStatement}
 */
export interface WAFv2RuleGroupRateBasedStatement {
  AggregateKeyType: string;
  CustomKeys?: any[];
  ForwardedIPConfig?: WAFv2RuleGroupForwardedIPConfiguration;
  Limit: number;
  ScopeDownStatement?: WAFv2RuleGroupStatement;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.RateBasedStatementCustomKey
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratebasedstatementcustomkey.html | AWS::WAFv2::RuleGroup.RateBasedStatementCustomKey}
 */
export interface WAFv2RuleGroupRateBasedStatementCustomKey {
  Cookie?: WAFv2RuleGroupRateLimitCookie;
  ForwardedIP?: object;
  QueryArgument?: WAFv2RuleGroupRateLimitQueryArgument;
  Header?: WAFv2RuleGroupRateLimitHeader;
  HTTPMethod?: object;
  QueryString?: WAFv2RuleGroupRateLimitQueryString;
  UriPath?: WAFv2RuleGroupRateLimitUriPath;
  IP?: object;
  LabelNamespace?: WAFv2RuleGroupRateLimitLabelNamespace;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.RateLimitCookie
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratelimitcookie.html | AWS::WAFv2::RuleGroup.RateLimitCookie}
 */
export interface WAFv2RuleGroupRateLimitCookie {
  TextTransformations: any[];
  Name: string;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.RateLimitHeader
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratelimitheader.html | AWS::WAFv2::RuleGroup.RateLimitHeader}
 */
export interface WAFv2RuleGroupRateLimitHeader {
  TextTransformations: any[];
  Name: string;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.RateLimitLabelNamespace
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratelimitlabelnamespace.html | AWS::WAFv2::RuleGroup.RateLimitLabelNamespace}
 */
export interface WAFv2RuleGroupRateLimitLabelNamespace {
  Namespace: string;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.RateLimitQueryArgument
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratelimitqueryargument.html | AWS::WAFv2::RuleGroup.RateLimitQueryArgument}
 */
export interface WAFv2RuleGroupRateLimitQueryArgument {
  TextTransformations: any[];
  Name: string;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.RateLimitQueryString
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratelimitquerystring.html | AWS::WAFv2::RuleGroup.RateLimitQueryString}
 */
export interface WAFv2RuleGroupRateLimitQueryString {
  TextTransformations: any[];
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.RateLimitUriPath
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratelimituripath.html | AWS::WAFv2::RuleGroup.RateLimitUriPath}
 */
export interface WAFv2RuleGroupRateLimitUriPath {
  TextTransformations: any[];
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.RegexMatchStatement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-regexmatchstatement.html | AWS::WAFv2::RuleGroup.RegexMatchStatement}
 */
export interface WAFv2RuleGroupRegexMatchStatement {
  TextTransformations: any[];
  RegexString: string;
  FieldToMatch: WAFv2RuleGroupFieldToMatch;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.RegexPatternSetReferenceStatement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-regexpatternsetreferencestatement.html | AWS::WAFv2::RuleGroup.RegexPatternSetReferenceStatement}
 */
export interface WAFv2RuleGroupRegexPatternSetReferenceStatement {
  TextTransformations: any[];
  Arn: string;
  FieldToMatch: WAFv2RuleGroupFieldToMatch;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.Rule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-rule.html | AWS::WAFv2::RuleGroup.Rule}
 */
export interface WAFv2RuleGroupRule {
  Action?: WAFv2RuleGroupRuleAction;
  Priority: number;
  Statement: WAFv2RuleGroupStatement;
  ChallengeConfig?: WAFv2RuleGroupChallengeConfig;
  RuleLabels?: any[];
  VisibilityConfig: WAFv2RuleGroupVisibilityConfig;
  CaptchaConfig?: WAFv2RuleGroupCaptchaConfig;
  Name: string;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.RuleAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ruleaction.html | AWS::WAFv2::RuleGroup.RuleAction}
 */
export interface WAFv2RuleGroupRuleAction {
  Captcha?: WAFv2RuleGroupCaptchaAction;
  Block?: WAFv2RuleGroupBlockAction;
  Count?: WAFv2RuleGroupCountAction;
  Allow?: WAFv2RuleGroupAllowAction;
  Challenge?: WAFv2RuleGroupChallengeAction;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.SingleHeader
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-singleheader.html | AWS::WAFv2::RuleGroup.SingleHeader}
 */
export interface WAFv2RuleGroupSingleHeader {
  Name: string;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.SingleQueryArgument
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-singlequeryargument.html | AWS::WAFv2::RuleGroup.SingleQueryArgument}
 */
export interface WAFv2RuleGroupSingleQueryArgument {
  Name: string;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.SizeConstraintStatement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-sizeconstraintstatement.html | AWS::WAFv2::RuleGroup.SizeConstraintStatement}
 */
export interface WAFv2RuleGroupSizeConstraintStatement {
  ComparisonOperator: string;
  TextTransformations: any[];
  Size: number;
  FieldToMatch: WAFv2RuleGroupFieldToMatch;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.SqliMatchStatement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-sqlimatchstatement.html | AWS::WAFv2::RuleGroup.SqliMatchStatement}
 */
export interface WAFv2RuleGroupSqliMatchStatement {
  SensitivityLevel?: string;
  TextTransformations: any[];
  FieldToMatch: WAFv2RuleGroupFieldToMatch;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.Statement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-statement.html | AWS::WAFv2::RuleGroup.Statement}
 */
export interface WAFv2RuleGroupStatement {
  SizeConstraintStatement?: WAFv2RuleGroupSizeConstraintStatement;
  AndStatement?: WAFv2RuleGroupAndStatement;
  XssMatchStatement?: WAFv2RuleGroupXssMatchStatement;
  NotStatement?: WAFv2RuleGroupNotStatement;
  ByteMatchStatement?: WAFv2RuleGroupByteMatchStatement;
  RateBasedStatement?: WAFv2RuleGroupRateBasedStatement;
  GeoMatchStatement?: WAFv2RuleGroupGeoMatchStatement;
  LabelMatchStatement?: WAFv2RuleGroupLabelMatchStatement;
  RegexMatchStatement?: WAFv2RuleGroupRegexMatchStatement;
  SqliMatchStatement?: WAFv2RuleGroupSqliMatchStatement;
  RegexPatternSetReferenceStatement?: WAFv2RuleGroupRegexPatternSetReferenceStatement;
  OrStatement?: WAFv2RuleGroupOrStatement;
  IPSetReferenceStatement?: WAFv2RuleGroupIPSetReferenceStatement;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.TextTransformation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-texttransformation.html | AWS::WAFv2::RuleGroup.TextTransformation}
 */
export interface WAFv2RuleGroupTextTransformation {
  Type: string;
  Priority: number;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.VisibilityConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-visibilityconfig.html | AWS::WAFv2::RuleGroup.VisibilityConfig}
 */
export interface WAFv2RuleGroupVisibilityConfig {
  MetricName: string;
  SampledRequestsEnabled: boolean;
  CloudWatchMetricsEnabled: boolean;
}
/**
 * Type definition for AWS::WAFv2::RuleGroup.XssMatchStatement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-xssmatchstatement.html | AWS::WAFv2::RuleGroup.XssMatchStatement}
 */
export interface WAFv2RuleGroupXssMatchStatement {
  TextTransformations: any[];
  FieldToMatch: WAFv2RuleGroupFieldToMatch;
}
/**
 * Type definition for AWS::WAFv2::WebACL.AWSManagedRulesACFPRuleSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-awsmanagedrulesacfpruleset.html | AWS::WAFv2::WebACL.AWSManagedRulesACFPRuleSet}
 */
export interface WAFv2WebACLAWSManagedRulesACFPRuleSet {
  RegistrationPagePath: string;
  ResponseInspection?: WAFv2WebACLResponseInspection;
  CreationPath: string;
  EnableRegexInPath?: boolean;
  RequestInspection: WAFv2WebACLRequestInspectionACFP;
}
/**
 * Type definition for AWS::WAFv2::WebACL.AWSManagedRulesATPRuleSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-awsmanagedrulesatpruleset.html | AWS::WAFv2::WebACL.AWSManagedRulesATPRuleSet}
 */
export interface WAFv2WebACLAWSManagedRulesATPRuleSet {
  ResponseInspection?: WAFv2WebACLResponseInspection;
  EnableRegexInPath?: boolean;
  LoginPath: string;
  RequestInspection?: WAFv2WebACLRequestInspection;
}
/**
 * Type definition for AWS::WAFv2::WebACL.AWSManagedRulesBotControlRuleSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-awsmanagedrulesbotcontrolruleset.html | AWS::WAFv2::WebACL.AWSManagedRulesBotControlRuleSet}
 */
export interface WAFv2WebACLAWSManagedRulesBotControlRuleSet {
  InspectionLevel: string;
  EnableMachineLearning?: boolean;
}
/**
 * Type definition for AWS::WAFv2::WebACL.AllowAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-allowaction.html | AWS::WAFv2::WebACL.AllowAction}
 */
export interface WAFv2WebACLAllowAction {
  CustomRequestHandling?: WAFv2WebACLCustomRequestHandling;
}
/**
 * Type definition for AWS::WAFv2::WebACL.AndStatement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-andstatement.html | AWS::WAFv2::WebACL.AndStatement}
 */
export interface WAFv2WebACLAndStatement {
  Statements: any[];
}
/**
 * Type definition for AWS::WAFv2::WebACL.AssociationConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-associationconfig.html | AWS::WAFv2::WebACL.AssociationConfig}
 */
export interface WAFv2WebACLAssociationConfig {
  RequestBody?: Record<string, any>;
}
/**
 * Type definition for AWS::WAFv2::WebACL.BlockAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-blockaction.html | AWS::WAFv2::WebACL.BlockAction}
 */
export interface WAFv2WebACLBlockAction {
  CustomResponse?: WAFv2WebACLCustomResponse;
}
/**
 * Type definition for AWS::WAFv2::WebACL.Body
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-body.html | AWS::WAFv2::WebACL.Body}
 */
export interface WAFv2WebACLBody {
  OversizeHandling?: string;
}
/**
 * Type definition for AWS::WAFv2::WebACL.ByteMatchStatement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-bytematchstatement.html | AWS::WAFv2::WebACL.ByteMatchStatement}
 */
export interface WAFv2WebACLByteMatchStatement {
  SearchStringBase64?: string;
  TextTransformations: any[];
  PositionalConstraint: string;
  SearchString?: string;
  FieldToMatch: WAFv2WebACLFieldToMatch;
}
/**
 * Type definition for AWS::WAFv2::WebACL.CaptchaAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-captchaaction.html | AWS::WAFv2::WebACL.CaptchaAction}
 */
export interface WAFv2WebACLCaptchaAction {
  CustomRequestHandling?: WAFv2WebACLCustomRequestHandling;
}
/**
 * Type definition for AWS::WAFv2::WebACL.CaptchaConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-captchaconfig.html | AWS::WAFv2::WebACL.CaptchaConfig}
 */
export interface WAFv2WebACLCaptchaConfig {
  ImmunityTimeProperty?: WAFv2WebACLImmunityTimeProperty;
}
/**
 * Type definition for AWS::WAFv2::WebACL.ChallengeAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-challengeaction.html | AWS::WAFv2::WebACL.ChallengeAction}
 */
export interface WAFv2WebACLChallengeAction {
  CustomRequestHandling?: WAFv2WebACLCustomRequestHandling;
}
/**
 * Type definition for AWS::WAFv2::WebACL.ChallengeConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-challengeconfig.html | AWS::WAFv2::WebACL.ChallengeConfig}
 */
export interface WAFv2WebACLChallengeConfig {
  ImmunityTimeProperty?: WAFv2WebACLImmunityTimeProperty;
}
/**
 * Type definition for AWS::WAFv2::WebACL.CookieMatchPattern
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-cookiematchpattern.html | AWS::WAFv2::WebACL.CookieMatchPattern}
 */
export interface WAFv2WebACLCookieMatchPattern {
  All?: object;
  IncludedCookies?: any[];
  ExcludedCookies?: any[];
}
/**
 * Type definition for AWS::WAFv2::WebACL.Cookies
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-cookies.html | AWS::WAFv2::WebACL.Cookies}
 */
export interface WAFv2WebACLCookies {
  MatchScope: string;
  MatchPattern: WAFv2WebACLCookieMatchPattern;
  OversizeHandling: string;
}
/**
 * Type definition for AWS::WAFv2::WebACL.CountAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-countaction.html | AWS::WAFv2::WebACL.CountAction}
 */
export interface WAFv2WebACLCountAction {
  CustomRequestHandling?: WAFv2WebACLCustomRequestHandling;
}
/**
 * Type definition for AWS::WAFv2::WebACL.CustomHTTPHeader
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-customhttpheader.html | AWS::WAFv2::WebACL.CustomHTTPHeader}
 */
export interface WAFv2WebACLCustomHTTPHeader {
  Value: string;
  Name: string;
}
/**
 * Type definition for AWS::WAFv2::WebACL.CustomRequestHandling
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-customrequesthandling.html | AWS::WAFv2::WebACL.CustomRequestHandling}
 */
export interface WAFv2WebACLCustomRequestHandling {
  InsertHeaders: any[];
}
/**
 * Type definition for AWS::WAFv2::WebACL.CustomResponse
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-customresponse.html | AWS::WAFv2::WebACL.CustomResponse}
 */
export interface WAFv2WebACLCustomResponse {
  ResponseCode: number;
  CustomResponseBodyKey?: string;
  ResponseHeaders?: any[];
}
/**
 * Type definition for AWS::WAFv2::WebACL.CustomResponseBody
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-customresponsebody.html | AWS::WAFv2::WebACL.CustomResponseBody}
 */
export interface WAFv2WebACLCustomResponseBody {
  ContentType: string;
  Content: string;
}
/**
 * Type definition for AWS::WAFv2::WebACL.DefaultAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-defaultaction.html | AWS::WAFv2::WebACL.DefaultAction}
 */
export interface WAFv2WebACLDefaultAction {
  Block?: WAFv2WebACLBlockAction;
  Allow?: WAFv2WebACLAllowAction;
}
/**
 * Type definition for AWS::WAFv2::WebACL.ExcludedRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-excludedrule.html | AWS::WAFv2::WebACL.ExcludedRule}
 */
export interface WAFv2WebACLExcludedRule {
  Name: string;
}
/**
 * Type definition for AWS::WAFv2::WebACL.FieldIdentifier
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-fieldidentifier.html | AWS::WAFv2::WebACL.FieldIdentifier}
 */
export interface WAFv2WebACLFieldIdentifier {
  Identifier: string;
}
/**
 * Type definition for AWS::WAFv2::WebACL.FieldToMatch
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-fieldtomatch.html | AWS::WAFv2::WebACL.FieldToMatch}
 */
export interface WAFv2WebACLFieldToMatch {
  JsonBody?: WAFv2WebACLJsonBody;
  AllQueryArguments?: object;
  SingleQueryArgument?: WAFv2WebACLSingleQueryArgument;
  UriPath?: object;
  QueryString?: object;
  Headers?: WAFv2WebACLHeaders;
  Cookies?: WAFv2WebACLCookies;
  Method?: object;
  Body?: WAFv2WebACLBody;
  SingleHeader?: WAFv2WebACLSingleHeader;
}
/**
 * Type definition for AWS::WAFv2::WebACL.ForwardedIPConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-forwardedipconfiguration.html | AWS::WAFv2::WebACL.ForwardedIPConfiguration}
 */
export interface WAFv2WebACLForwardedIPConfiguration {
  FallbackBehavior: string;
  HeaderName: string;
}
/**
 * Type definition for AWS::WAFv2::WebACL.GeoMatchStatement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-geomatchstatement.html | AWS::WAFv2::WebACL.GeoMatchStatement}
 */
export interface WAFv2WebACLGeoMatchStatement {
  ForwardedIPConfig?: WAFv2WebACLForwardedIPConfiguration;
  CountryCodes?: any[];
}
/**
 * Type definition for AWS::WAFv2::WebACL.HeaderMatchPattern
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-headermatchpattern.html | AWS::WAFv2::WebACL.HeaderMatchPattern}
 */
export interface WAFv2WebACLHeaderMatchPattern {
  All?: object;
  IncludedHeaders?: any[];
  ExcludedHeaders?: any[];
}
/**
 * Type definition for AWS::WAFv2::WebACL.Headers
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-headers.html | AWS::WAFv2::WebACL.Headers}
 */
export interface WAFv2WebACLHeaders {
  MatchScope: string;
  MatchPattern: WAFv2WebACLHeaderMatchPattern;
  OversizeHandling: string;
}
/**
 * Type definition for AWS::WAFv2::WebACL.IPSetForwardedIPConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ipsetforwardedipconfiguration.html | AWS::WAFv2::WebACL.IPSetForwardedIPConfiguration}
 */
export interface WAFv2WebACLIPSetForwardedIPConfiguration {
  FallbackBehavior: string;
  HeaderName: string;
  Position: string;
}
/**
 * Type definition for AWS::WAFv2::WebACL.IPSetReferenceStatement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ipsetreferencestatement.html | AWS::WAFv2::WebACL.IPSetReferenceStatement}
 */
export interface WAFv2WebACLIPSetReferenceStatement {
  IPSetForwardedIPConfig?: WAFv2WebACLIPSetForwardedIPConfiguration;
  Arn: string;
}
/**
 * Type definition for AWS::WAFv2::WebACL.ImmunityTimeProperty
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-immunitytimeproperty.html | AWS::WAFv2::WebACL.ImmunityTimeProperty}
 */
export interface WAFv2WebACLImmunityTimeProperty {
  ImmunityTime: number;
}
/**
 * Type definition for AWS::WAFv2::WebACL.JsonBody
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-jsonbody.html | AWS::WAFv2::WebACL.JsonBody}
 */
export interface WAFv2WebACLJsonBody {
  MatchScope: string;
  MatchPattern: WAFv2WebACLJsonMatchPattern;
  InvalidFallbackBehavior?: string;
  OversizeHandling?: string;
}
/**
 * Type definition for AWS::WAFv2::WebACL.JsonMatchPattern
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-jsonmatchpattern.html | AWS::WAFv2::WebACL.JsonMatchPattern}
 */
export interface WAFv2WebACLJsonMatchPattern {
  All?: object;
  IncludedPaths?: any[];
}
/**
 * Type definition for AWS::WAFv2::WebACL.Label
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-label.html | AWS::WAFv2::WebACL.Label}
 */
export interface WAFv2WebACLLabel {
  Name: string;
}
/**
 * Type definition for AWS::WAFv2::WebACL.LabelMatchStatement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-labelmatchstatement.html | AWS::WAFv2::WebACL.LabelMatchStatement}
 */
export interface WAFv2WebACLLabelMatchStatement {
  Scope: string;
  Key: string;
}
/**
 * Type definition for AWS::WAFv2::WebACL.ManagedRuleGroupConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-managedrulegroupconfig.html | AWS::WAFv2::WebACL.ManagedRuleGroupConfig}
 */
export interface WAFv2WebACLManagedRuleGroupConfig {
  UsernameField?: WAFv2WebACLFieldIdentifier;
  LoginPath?: string;
  AWSManagedRulesATPRuleSet?: WAFv2WebACLAWSManagedRulesATPRuleSet;
  AWSManagedRulesBotControlRuleSet?: WAFv2WebACLAWSManagedRulesBotControlRuleSet;
  PasswordField?: WAFv2WebACLFieldIdentifier;
  AWSManagedRulesACFPRuleSet?: WAFv2WebACLAWSManagedRulesACFPRuleSet;
  PayloadType?: string;
}
/**
 * Type definition for AWS::WAFv2::WebACL.ManagedRuleGroupStatement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-managedrulegroupstatement.html | AWS::WAFv2::WebACL.ManagedRuleGroupStatement}
 */
export interface WAFv2WebACLManagedRuleGroupStatement {
  VendorName: string;
  Version?: string;
  RuleActionOverrides?: any[];
  ManagedRuleGroupConfigs?: any[];
  ExcludedRules?: any[];
  Name: string;
  ScopeDownStatement?: WAFv2WebACLStatement;
}
/**
 * Type definition for AWS::WAFv2::WebACL.NotStatement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-notstatement.html | AWS::WAFv2::WebACL.NotStatement}
 */
export interface WAFv2WebACLNotStatement {
  Statement: WAFv2WebACLStatement;
}
/**
 * Type definition for AWS::WAFv2::WebACL.OrStatement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-orstatement.html | AWS::WAFv2::WebACL.OrStatement}
 */
export interface WAFv2WebACLOrStatement {
  Statements: any[];
}
/**
 * Type definition for AWS::WAFv2::WebACL.OverrideAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-overrideaction.html | AWS::WAFv2::WebACL.OverrideAction}
 */
export interface WAFv2WebACLOverrideAction {
  Count?: object;
  None?: object;
}
/**
 * Type definition for AWS::WAFv2::WebACL.RateBasedStatement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratebasedstatement.html | AWS::WAFv2::WebACL.RateBasedStatement}
 */
export interface WAFv2WebACLRateBasedStatement {
  AggregateKeyType: string;
  CustomKeys?: any[];
  ForwardedIPConfig?: WAFv2WebACLForwardedIPConfiguration;
  Limit: number;
  ScopeDownStatement?: WAFv2WebACLStatement;
}
/**
 * Type definition for AWS::WAFv2::WebACL.RateBasedStatementCustomKey
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratebasedstatementcustomkey.html | AWS::WAFv2::WebACL.RateBasedStatementCustomKey}
 */
export interface WAFv2WebACLRateBasedStatementCustomKey {
  Cookie?: WAFv2WebACLRateLimitCookie;
  ForwardedIP?: object;
  QueryArgument?: WAFv2WebACLRateLimitQueryArgument;
  Header?: WAFv2WebACLRateLimitHeader;
  HTTPMethod?: object;
  QueryString?: WAFv2WebACLRateLimitQueryString;
  UriPath?: WAFv2WebACLRateLimitUriPath;
  IP?: object;
  LabelNamespace?: WAFv2WebACLRateLimitLabelNamespace;
}
/**
 * Type definition for AWS::WAFv2::WebACL.RateLimitCookie
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratelimitcookie.html | AWS::WAFv2::WebACL.RateLimitCookie}
 */
export interface WAFv2WebACLRateLimitCookie {
  TextTransformations: any[];
  Name: string;
}
/**
 * Type definition for AWS::WAFv2::WebACL.RateLimitHeader
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratelimitheader.html | AWS::WAFv2::WebACL.RateLimitHeader}
 */
export interface WAFv2WebACLRateLimitHeader {
  TextTransformations: any[];
  Name: string;
}
/**
 * Type definition for AWS::WAFv2::WebACL.RateLimitLabelNamespace
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratelimitlabelnamespace.html | AWS::WAFv2::WebACL.RateLimitLabelNamespace}
 */
export interface WAFv2WebACLRateLimitLabelNamespace {
  Namespace: string;
}
/**
 * Type definition for AWS::WAFv2::WebACL.RateLimitQueryArgument
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratelimitqueryargument.html | AWS::WAFv2::WebACL.RateLimitQueryArgument}
 */
export interface WAFv2WebACLRateLimitQueryArgument {
  TextTransformations: any[];
  Name: string;
}
/**
 * Type definition for AWS::WAFv2::WebACL.RateLimitQueryString
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratelimitquerystring.html | AWS::WAFv2::WebACL.RateLimitQueryString}
 */
export interface WAFv2WebACLRateLimitQueryString {
  TextTransformations: any[];
}
/**
 * Type definition for AWS::WAFv2::WebACL.RateLimitUriPath
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratelimituripath.html | AWS::WAFv2::WebACL.RateLimitUriPath}
 */
export interface WAFv2WebACLRateLimitUriPath {
  TextTransformations: any[];
}
/**
 * Type definition for AWS::WAFv2::WebACL.RegexMatchStatement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-regexmatchstatement.html | AWS::WAFv2::WebACL.RegexMatchStatement}
 */
export interface WAFv2WebACLRegexMatchStatement {
  TextTransformations: any[];
  RegexString: string;
  FieldToMatch: WAFv2WebACLFieldToMatch;
}
/**
 * Type definition for AWS::WAFv2::WebACL.RegexPatternSetReferenceStatement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-regexpatternsetreferencestatement.html | AWS::WAFv2::WebACL.RegexPatternSetReferenceStatement}
 */
export interface WAFv2WebACLRegexPatternSetReferenceStatement {
  TextTransformations: any[];
  Arn: string;
  FieldToMatch: WAFv2WebACLFieldToMatch;
}
/**
 * Type definition for AWS::WAFv2::WebACL.RequestBodyAssociatedResourceTypeConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-requestbodyassociatedresourcetypeconfig.html | AWS::WAFv2::WebACL.RequestBodyAssociatedResourceTypeConfig}
 */
export interface WAFv2WebACLRequestBodyAssociatedResourceTypeConfig {
  DefaultSizeInspectionLimit: string;
}
/**
 * Type definition for AWS::WAFv2::WebACL.RequestInspection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-requestinspection.html | AWS::WAFv2::WebACL.RequestInspection}
 */
export interface WAFv2WebACLRequestInspection {
  UsernameField: WAFv2WebACLFieldIdentifier;
  PasswordField: WAFv2WebACLFieldIdentifier;
  PayloadType: string;
}
/**
 * Type definition for AWS::WAFv2::WebACL.RequestInspectionACFP
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-requestinspectionacfp.html | AWS::WAFv2::WebACL.RequestInspectionACFP}
 */
export interface WAFv2WebACLRequestInspectionACFP {
  UsernameField?: WAFv2WebACLFieldIdentifier;
  EmailField?: WAFv2WebACLFieldIdentifier;
  PasswordField?: WAFv2WebACLFieldIdentifier;
  AddressFields?: any[];
  PayloadType: string;
  PhoneNumberFields?: any[];
}
/**
 * Type definition for AWS::WAFv2::WebACL.ResponseInspection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-responseinspection.html | AWS::WAFv2::WebACL.ResponseInspection}
 */
export interface WAFv2WebACLResponseInspection {
  Header?: WAFv2WebACLResponseInspectionHeader;
  BodyContains?: WAFv2WebACLResponseInspectionBodyContains;
  Json?: WAFv2WebACLResponseInspectionJson;
  StatusCode?: WAFv2WebACLResponseInspectionStatusCode;
}
/**
 * Type definition for AWS::WAFv2::WebACL.ResponseInspectionBodyContains
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-responseinspectionbodycontains.html | AWS::WAFv2::WebACL.ResponseInspectionBodyContains}
 */
export interface WAFv2WebACLResponseInspectionBodyContains {
  SuccessStrings: any[];
  FailureStrings: any[];
}
/**
 * Type definition for AWS::WAFv2::WebACL.ResponseInspectionHeader
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-responseinspectionheader.html | AWS::WAFv2::WebACL.ResponseInspectionHeader}
 */
export interface WAFv2WebACLResponseInspectionHeader {
  SuccessValues: any[];
  FailureValues: any[];
  Name: string;
}
/**
 * Type definition for AWS::WAFv2::WebACL.ResponseInspectionJson
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-responseinspectionjson.html | AWS::WAFv2::WebACL.ResponseInspectionJson}
 */
export interface WAFv2WebACLResponseInspectionJson {
  Identifier: string;
  SuccessValues: any[];
  FailureValues: any[];
}
/**
 * Type definition for AWS::WAFv2::WebACL.ResponseInspectionStatusCode
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-responseinspectionstatuscode.html | AWS::WAFv2::WebACL.ResponseInspectionStatusCode}
 */
export interface WAFv2WebACLResponseInspectionStatusCode {
  SuccessCodes: any[];
  FailureCodes: any[];
}
/**
 * Type definition for AWS::WAFv2::WebACL.Rule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rule.html | AWS::WAFv2::WebACL.Rule}
 */
export interface WAFv2WebACLRule {
  Action?: WAFv2WebACLRuleAction;
  Priority: number;
  Statement: WAFv2WebACLStatement;
  ChallengeConfig?: WAFv2WebACLChallengeConfig;
  OverrideAction?: WAFv2WebACLOverrideAction;
  RuleLabels?: any[];
  VisibilityConfig: WAFv2WebACLVisibilityConfig;
  CaptchaConfig?: WAFv2WebACLCaptchaConfig;
  Name: string;
}
/**
 * Type definition for AWS::WAFv2::WebACL.RuleAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ruleaction.html | AWS::WAFv2::WebACL.RuleAction}
 */
export interface WAFv2WebACLRuleAction {
  Captcha?: WAFv2WebACLCaptchaAction;
  Block?: WAFv2WebACLBlockAction;
  Count?: WAFv2WebACLCountAction;
  Allow?: WAFv2WebACLAllowAction;
  Challenge?: WAFv2WebACLChallengeAction;
}
/**
 * Type definition for AWS::WAFv2::WebACL.RuleActionOverride
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ruleactionoverride.html | AWS::WAFv2::WebACL.RuleActionOverride}
 */
export interface WAFv2WebACLRuleActionOverride {
  ActionToUse: WAFv2WebACLRuleAction;
  Name: string;
}
/**
 * Type definition for AWS::WAFv2::WebACL.RuleGroupReferenceStatement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rulegroupreferencestatement.html | AWS::WAFv2::WebACL.RuleGroupReferenceStatement}
 */
export interface WAFv2WebACLRuleGroupReferenceStatement {
  RuleActionOverrides?: any[];
  Arn: string;
  ExcludedRules?: any[];
}
/**
 * Type definition for AWS::WAFv2::WebACL.SingleHeader
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-singleheader.html | AWS::WAFv2::WebACL.SingleHeader}
 */
export interface WAFv2WebACLSingleHeader {
  Name: string;
}
/**
 * Type definition for AWS::WAFv2::WebACL.SingleQueryArgument
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-singlequeryargument.html | AWS::WAFv2::WebACL.SingleQueryArgument}
 */
export interface WAFv2WebACLSingleQueryArgument {
  Name: string;
}
/**
 * Type definition for AWS::WAFv2::WebACL.SizeConstraintStatement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-sizeconstraintstatement.html | AWS::WAFv2::WebACL.SizeConstraintStatement}
 */
export interface WAFv2WebACLSizeConstraintStatement {
  ComparisonOperator: string;
  TextTransformations: any[];
  Size: number;
  FieldToMatch: WAFv2WebACLFieldToMatch;
}
/**
 * Type definition for AWS::WAFv2::WebACL.SqliMatchStatement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-sqlimatchstatement.html | AWS::WAFv2::WebACL.SqliMatchStatement}
 */
export interface WAFv2WebACLSqliMatchStatement {
  SensitivityLevel?: string;
  TextTransformations: any[];
  FieldToMatch: WAFv2WebACLFieldToMatch;
}
/**
 * Type definition for AWS::WAFv2::WebACL.Statement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-statement.html | AWS::WAFv2::WebACL.Statement}
 */
export interface WAFv2WebACLStatement {
  SizeConstraintStatement?: WAFv2WebACLSizeConstraintStatement;
  AndStatement?: WAFv2WebACLAndStatement;
  XssMatchStatement?: WAFv2WebACLXssMatchStatement;
  NotStatement?: WAFv2WebACLNotStatement;
  ByteMatchStatement?: WAFv2WebACLByteMatchStatement;
  RateBasedStatement?: WAFv2WebACLRateBasedStatement;
  GeoMatchStatement?: WAFv2WebACLGeoMatchStatement;
  RuleGroupReferenceStatement?: WAFv2WebACLRuleGroupReferenceStatement;
  LabelMatchStatement?: WAFv2WebACLLabelMatchStatement;
  RegexMatchStatement?: WAFv2WebACLRegexMatchStatement;
  SqliMatchStatement?: WAFv2WebACLSqliMatchStatement;
  RegexPatternSetReferenceStatement?: WAFv2WebACLRegexPatternSetReferenceStatement;
  OrStatement?: WAFv2WebACLOrStatement;
  ManagedRuleGroupStatement?: WAFv2WebACLManagedRuleGroupStatement;
  IPSetReferenceStatement?: WAFv2WebACLIPSetReferenceStatement;
}
/**
 * Type definition for AWS::WAFv2::WebACL.TextTransformation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-texttransformation.html | AWS::WAFv2::WebACL.TextTransformation}
 */
export interface WAFv2WebACLTextTransformation {
  Type: string;
  Priority: number;
}
/**
 * Type definition for AWS::WAFv2::WebACL.VisibilityConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-visibilityconfig.html | AWS::WAFv2::WebACL.VisibilityConfig}
 */
export interface WAFv2WebACLVisibilityConfig {
  MetricName: string;
  SampledRequestsEnabled: boolean;
  CloudWatchMetricsEnabled: boolean;
}
/**
 * Type definition for AWS::WAFv2::WebACL.XssMatchStatement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-xssmatchstatement.html | AWS::WAFv2::WebACL.XssMatchStatement}
 */
export interface WAFv2WebACLXssMatchStatement {
  TextTransformations: any[];
  FieldToMatch: WAFv2WebACLFieldToMatch;
}
/**
 * Type definition for AWS::WAFv2::IPSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-ipset.html | AWS::WAFv2::IPSet}
 */
export interface WAFv2IPSetProps {
  Addresses: any[];
  Description?: string;
  Scope: string;
  IPAddressVersion: string;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::WAFv2::IPSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-ipset.html | AWS::WAFv2::IPSet}
 */
export interface WAFv2IPSetAttribs {
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::WAFv2::IPSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-ipset.html | AWS::WAFv2::IPSet}
 */
export class WAFv2IPSet extends ResourceBase<
  "AWS::WAFv2::IPSet",
  WAFv2IPSetProps,
  WAFv2IPSetAttribs
> {
  public static readonly Type = "AWS::WAFv2::IPSet";
  public static readonly AttributeNames: readonly (keyof WAFv2IPSetAttribs)[] =
    ["Id", "Arn"];
  constructor(
    logicalId: string,
    properties: WAFv2IPSetProps,
    options?: ResourceOptions,
  ) {
    super(
      WAFv2IPSet.Type,
      WAFv2IPSet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::WAFv2::LoggingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html | AWS::WAFv2::LoggingConfiguration}
 */
export interface WAFv2LoggingConfigurationProps {
  ResourceArn: string;
  LogDestinationConfigs: any[];
  RedactedFields?: any[];
  LoggingFilter?: WAFv2LoggingConfigurationLoggingFilter;
}
/**
 * Attributes type definition for AWS::WAFv2::LoggingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html | AWS::WAFv2::LoggingConfiguration}
 */
export interface WAFv2LoggingConfigurationAttribs {
  ManagedByFirewallManager?: boolean;
}
/**
 * Resource class for AWS::WAFv2::LoggingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html | AWS::WAFv2::LoggingConfiguration}
 */
export class WAFv2LoggingConfiguration extends ResourceBase<
  "AWS::WAFv2::LoggingConfiguration",
  WAFv2LoggingConfigurationProps,
  WAFv2LoggingConfigurationAttribs
> {
  public static readonly Type = "AWS::WAFv2::LoggingConfiguration";
  public static readonly AttributeNames: readonly (keyof WAFv2LoggingConfigurationAttribs)[] =
    ["ManagedByFirewallManager"];
  constructor(
    logicalId: string,
    properties: WAFv2LoggingConfigurationProps,
    options?: ResourceOptions,
  ) {
    super(
      WAFv2LoggingConfiguration.Type,
      WAFv2LoggingConfiguration.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::WAFv2::RegexPatternSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-regexpatternset.html | AWS::WAFv2::RegexPatternSet}
 */
export interface WAFv2RegexPatternSetProps {
  Description?: string;
  RegularExpressionList: any[];
  Scope: string;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::WAFv2::RegexPatternSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-regexpatternset.html | AWS::WAFv2::RegexPatternSet}
 */
export interface WAFv2RegexPatternSetAttribs {
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::WAFv2::RegexPatternSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-regexpatternset.html | AWS::WAFv2::RegexPatternSet}
 */
export class WAFv2RegexPatternSet extends ResourceBase<
  "AWS::WAFv2::RegexPatternSet",
  WAFv2RegexPatternSetProps,
  WAFv2RegexPatternSetAttribs
> {
  public static readonly Type = "AWS::WAFv2::RegexPatternSet";
  public static readonly AttributeNames: readonly (keyof WAFv2RegexPatternSetAttribs)[] =
    ["Id", "Arn"];
  constructor(
    logicalId: string,
    properties: WAFv2RegexPatternSetProps,
    options?: ResourceOptions,
  ) {
    super(
      WAFv2RegexPatternSet.Type,
      WAFv2RegexPatternSet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::WAFv2::RuleGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html | AWS::WAFv2::RuleGroup}
 */
export interface WAFv2RuleGroupProps {
  Description?: string;
  Scope: string;
  Capacity: number;
  AvailableLabels?: any[];
  CustomResponseBodies?: Record<string, any>;
  ConsumedLabels?: any[];
  Rules?: any[];
  VisibilityConfig: WAFv2RuleGroupVisibilityConfig;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::WAFv2::RuleGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html | AWS::WAFv2::RuleGroup}
 */
export interface WAFv2RuleGroupAttribs {
  Id?: string;
  Arn?: string;
  LabelNamespace?: string;
}
/**
 * Resource class for AWS::WAFv2::RuleGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html | AWS::WAFv2::RuleGroup}
 */
export class WAFv2RuleGroup extends ResourceBase<
  "AWS::WAFv2::RuleGroup",
  WAFv2RuleGroupProps,
  WAFv2RuleGroupAttribs
> {
  public static readonly Type = "AWS::WAFv2::RuleGroup";
  public static readonly AttributeNames: readonly (keyof WAFv2RuleGroupAttribs)[] =
    ["Id", "Arn", "LabelNamespace"];
  constructor(
    logicalId: string,
    properties: WAFv2RuleGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      WAFv2RuleGroup.Type,
      WAFv2RuleGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::WAFv2::WebACL
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html | AWS::WAFv2::WebACL}
 */
export interface WAFv2WebACLProps {
  TokenDomains?: any[];
  Description?: string;
  AssociationConfig?: WAFv2WebACLAssociationConfig;
  DefaultAction: WAFv2WebACLDefaultAction;
  Scope: string;
  CustomResponseBodies?: Record<string, any>;
  ChallengeConfig?: WAFv2WebACLChallengeConfig;
  Rules?: any[];
  VisibilityConfig: WAFv2WebACLVisibilityConfig;
  CaptchaConfig?: WAFv2WebACLCaptchaConfig;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::WAFv2::WebACL
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html | AWS::WAFv2::WebACL}
 */
export interface WAFv2WebACLAttribs {
  Capacity?: number;
  Id?: string;
  Arn?: string;
  LabelNamespace?: string;
}
/**
 * Resource class for AWS::WAFv2::WebACL
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html | AWS::WAFv2::WebACL}
 */
export class WAFv2WebACL extends ResourceBase<
  "AWS::WAFv2::WebACL",
  WAFv2WebACLProps,
  WAFv2WebACLAttribs
> {
  public static readonly Type = "AWS::WAFv2::WebACL";
  public static readonly AttributeNames: readonly (keyof WAFv2WebACLAttribs)[] =
    ["Capacity", "Id", "Arn", "LabelNamespace"];
  constructor(
    logicalId: string,
    properties: WAFv2WebACLProps,
    options?: ResourceOptions,
  ) {
    super(
      WAFv2WebACL.Type,
      WAFv2WebACL.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::WAFv2::WebACLAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webaclassociation.html | AWS::WAFv2::WebACLAssociation}
 */
export interface WAFv2WebACLAssociationProps {
  ResourceArn: string;
  WebACLArn: string;
}
/**
 * Resource class for AWS::WAFv2::WebACLAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webaclassociation.html | AWS::WAFv2::WebACLAssociation}
 */
export class WAFv2WebACLAssociation extends ResourceBase<
  "AWS::WAFv2::WebACLAssociation",
  WAFv2WebACLAssociationProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::WAFv2::WebACLAssociation";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: WAFv2WebACLAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      WAFv2WebACLAssociation.Type,
      WAFv2WebACLAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
