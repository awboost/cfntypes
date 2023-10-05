import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::CodeCommit::Repository.Code
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codecommit-repository-code.html | AWS::CodeCommit::Repository.Code}
 */
export interface CodeCommitRepositoryCode {
  S3: CodeCommitRepositoryS3;
  BranchName?: string;
}
/**
 * Type definition for AWS::CodeCommit::Repository.RepositoryTrigger
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codecommit-repository-repositorytrigger.html | AWS::CodeCommit::Repository.RepositoryTrigger}
 */
export interface CodeCommitRepositoryRepositoryTrigger {
  Events: any[];
  Branches?: any[];
  CustomData?: string;
  DestinationArn: string;
  Name: string;
}
/**
 * Type definition for AWS::CodeCommit::Repository.S3
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codecommit-repository-s3.html | AWS::CodeCommit::Repository.S3}
 */
export interface CodeCommitRepositoryS3 {
  ObjectVersion?: string;
  Bucket: string;
  Key: string;
}
/**
 * Type definition for AWS::CodeCommit::Repository
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codecommit-repository.html | AWS::CodeCommit::Repository}
 */
export interface CodeCommitRepositoryProps {
  RepositoryName: string;
  Triggers?: any[];
  Code?: CodeCommitRepositoryCode;
  RepositoryDescription?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::CodeCommit::Repository
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codecommit-repository.html | AWS::CodeCommit::Repository}
 */
export interface CodeCommitRepositoryAttribs {
  CloneUrlHttp?: string;
  CloneUrlSsh?: string;
  Arn?: string;
  Name?: string;
}
/**
 * Resource class for AWS::CodeCommit::Repository
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codecommit-repository.html | AWS::CodeCommit::Repository}
 */
export class CodeCommitRepository extends ResourceBase<
  "AWS::CodeCommit::Repository",
  CodeCommitRepositoryProps,
  CodeCommitRepositoryAttribs
> {
  public static readonly Type = "AWS::CodeCommit::Repository";
  public static readonly AttributeNames: readonly (keyof CodeCommitRepositoryAttribs)[] =
    ["CloneUrlHttp", "CloneUrlSsh", "Arn", "Name"];
  constructor(
    logicalId: string,
    properties: CodeCommitRepositoryProps,
    options?: ResourceOptions,
  ) {
    super(
      CodeCommitRepository.Type,
      CodeCommitRepository.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
