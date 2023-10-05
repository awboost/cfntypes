import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::AccessAnalyzer::Analyzer.ArchiveRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-accessanalyzer-analyzer-archiverule.html | AWS::AccessAnalyzer::Analyzer.ArchiveRule}
 */
export interface AccessAnalyzerAnalyzerArchiveRule {
  Filter: any[];
  RuleName: string;
}
/**
 * Type definition for AWS::AccessAnalyzer::Analyzer.Filter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-accessanalyzer-analyzer-filter.html | AWS::AccessAnalyzer::Analyzer.Filter}
 */
export interface AccessAnalyzerAnalyzerFilter {
  Exists?: boolean;
  Contains?: any[];
  Neq?: any[];
  Eq?: any[];
  Property: string;
}
/**
 * Type definition for AWS::AccessAnalyzer::Analyzer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-accessanalyzer-analyzer.html | AWS::AccessAnalyzer::Analyzer}
 */
export interface AccessAnalyzerAnalyzerProps {
  ArchiveRules?: any[];
  Type: string;
  AnalyzerName?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::AccessAnalyzer::Analyzer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-accessanalyzer-analyzer.html | AWS::AccessAnalyzer::Analyzer}
 */
export interface AccessAnalyzerAnalyzerAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::AccessAnalyzer::Analyzer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-accessanalyzer-analyzer.html | AWS::AccessAnalyzer::Analyzer}
 */
export class AccessAnalyzerAnalyzer extends ResourceBase<
  "AWS::AccessAnalyzer::Analyzer",
  AccessAnalyzerAnalyzerProps,
  AccessAnalyzerAnalyzerAttribs
> {
  public static readonly Type = "AWS::AccessAnalyzer::Analyzer";
  public static readonly AttributeNames: readonly (keyof AccessAnalyzerAnalyzerAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: AccessAnalyzerAnalyzerProps,
    options?: ResourceOptions,
  ) {
    super(
      AccessAnalyzerAnalyzer.Type,
      AccessAnalyzerAnalyzer.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
