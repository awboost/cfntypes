import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::CodeGuruReviewer::RepositoryAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codegurureviewer-repositoryassociation.html | AWS::CodeGuruReviewer::RepositoryAssociation}
 */
export interface CodeGuruReviewerRepositoryAssociationProps {
  Type: string;
  Owner?: string;
  BucketName?: string;
  ConnectionArn?: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::CodeGuruReviewer::RepositoryAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codegurureviewer-repositoryassociation.html | AWS::CodeGuruReviewer::RepositoryAssociation}
 */
export interface CodeGuruReviewerRepositoryAssociationAttribs {
  AssociationArn?: string;
}
/**
 * Resource class for AWS::CodeGuruReviewer::RepositoryAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codegurureviewer-repositoryassociation.html | AWS::CodeGuruReviewer::RepositoryAssociation}
 */
export class CodeGuruReviewerRepositoryAssociation extends ResourceBase<
  "AWS::CodeGuruReviewer::RepositoryAssociation",
  CodeGuruReviewerRepositoryAssociationProps,
  CodeGuruReviewerRepositoryAssociationAttribs
> {
  public static readonly Type = "AWS::CodeGuruReviewer::RepositoryAssociation";
  public static readonly AttributeNames: readonly (keyof CodeGuruReviewerRepositoryAssociationAttribs)[] =
    ["AssociationArn"];
  constructor(
    logicalId: string,
    properties: CodeGuruReviewerRepositoryAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      CodeGuruReviewerRepositoryAssociation.Type,
      CodeGuruReviewerRepositoryAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
