import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::Inspector::AssessmentTarget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttarget.html | AWS::Inspector::AssessmentTarget}
 */
export interface InspectorAssessmentTargetProps {
  AssessmentTargetName?: string;
  ResourceGroupArn?: string;
}
/**
 * Attributes type definition for AWS::Inspector::AssessmentTarget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttarget.html | AWS::Inspector::AssessmentTarget}
 */
export interface InspectorAssessmentTargetAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::Inspector::AssessmentTarget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttarget.html | AWS::Inspector::AssessmentTarget}
 */
export class InspectorAssessmentTarget extends ResourceBase<
  "AWS::Inspector::AssessmentTarget",
  InspectorAssessmentTargetProps,
  InspectorAssessmentTargetAttribs
> {
  public static readonly Type = "AWS::Inspector::AssessmentTarget";
  public static readonly AttributeNames: readonly (keyof InspectorAssessmentTargetAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: InspectorAssessmentTargetProps,
    options?: ResourceOptions,
  ) {
    super(
      InspectorAssessmentTarget.Type,
      InspectorAssessmentTarget.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Inspector::AssessmentTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttemplate.html | AWS::Inspector::AssessmentTemplate}
 */
export interface InspectorAssessmentTemplateProps {
  AssessmentTargetArn: string;
  DurationInSeconds: number;
  AssessmentTemplateName?: string;
  RulesPackageArns: any[];
  UserAttributesForFindings?: any[];
}
/**
 * Attributes type definition for AWS::Inspector::AssessmentTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttemplate.html | AWS::Inspector::AssessmentTemplate}
 */
export interface InspectorAssessmentTemplateAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::Inspector::AssessmentTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttemplate.html | AWS::Inspector::AssessmentTemplate}
 */
export class InspectorAssessmentTemplate extends ResourceBase<
  "AWS::Inspector::AssessmentTemplate",
  InspectorAssessmentTemplateProps,
  InspectorAssessmentTemplateAttribs
> {
  public static readonly Type = "AWS::Inspector::AssessmentTemplate";
  public static readonly AttributeNames: readonly (keyof InspectorAssessmentTemplateAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: InspectorAssessmentTemplateProps,
    options?: ResourceOptions,
  ) {
    super(
      InspectorAssessmentTemplate.Type,
      InspectorAssessmentTemplate.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Inspector::ResourceGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-resourcegroup.html | AWS::Inspector::ResourceGroup}
 */
export interface InspectorResourceGroupProps {
  ResourceGroupTags: any[];
}
/**
 * Attributes type definition for AWS::Inspector::ResourceGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-resourcegroup.html | AWS::Inspector::ResourceGroup}
 */
export interface InspectorResourceGroupAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::Inspector::ResourceGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-resourcegroup.html | AWS::Inspector::ResourceGroup}
 */
export class InspectorResourceGroup extends ResourceBase<
  "AWS::Inspector::ResourceGroup",
  InspectorResourceGroupProps,
  InspectorResourceGroupAttribs
> {
  public static readonly Type = "AWS::Inspector::ResourceGroup";
  public static readonly AttributeNames: readonly (keyof InspectorResourceGroupAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: InspectorResourceGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      InspectorResourceGroup.Type,
      InspectorResourceGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
