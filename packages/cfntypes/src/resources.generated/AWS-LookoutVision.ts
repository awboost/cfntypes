import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::LookoutVision::Project
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutvision-project.html | AWS::LookoutVision::Project}
 */
export interface LookoutVisionProjectProps {
  ProjectName: string;
}
/**
 * Attributes type definition for AWS::LookoutVision::Project
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutvision-project.html | AWS::LookoutVision::Project}
 */
export interface LookoutVisionProjectAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::LookoutVision::Project
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutvision-project.html | AWS::LookoutVision::Project}
 */
export class LookoutVisionProject extends ResourceBase<
  "AWS::LookoutVision::Project",
  LookoutVisionProjectProps,
  LookoutVisionProjectAttribs
> {
  public static readonly Type = "AWS::LookoutVision::Project";
  public static readonly AttributeNames: readonly (keyof LookoutVisionProjectAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: LookoutVisionProjectProps,
    options?: ResourceOptions,
  ) {
    super(
      LookoutVisionProject.Type,
      LookoutVisionProject.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
