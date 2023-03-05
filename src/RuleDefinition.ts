import { IntrinsicValue } from './Fn.js';

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
