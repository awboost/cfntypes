import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::CodeStar::GitHubRepository.Code
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codestar-githubrepository-code.html | AWS::CodeStar::GitHubRepository.Code}
 */
export interface CodeStarGitHubRepositoryCode {
  S3: CodeStarGitHubRepositoryS3;
}
/**
 * Type definition for AWS::CodeStar::GitHubRepository.S3
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codestar-githubrepository-s3.html | AWS::CodeStar::GitHubRepository.S3}
 */
export interface CodeStarGitHubRepositoryS3 {
  ObjectVersion?: string;
  Bucket: string;
  Key: string;
}
/**
 * Type definition for AWS::CodeStar::GitHubRepository
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestar-githubrepository.html | AWS::CodeStar::GitHubRepository}
 */
export interface CodeStarGitHubRepositoryProps {
  EnableIssues?: boolean;
  ConnectionArn?: string;
  RepositoryName: string;
  RepositoryAccessToken?: string;
  RepositoryOwner: string;
  IsPrivate?: boolean;
  Code?: CodeStarGitHubRepositoryCode;
  RepositoryDescription?: string;
}
/**
 * Resource class for AWS::CodeStar::GitHubRepository
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestar-githubrepository.html | AWS::CodeStar::GitHubRepository}
 */
export class CodeStarGitHubRepository extends ResourceBase<
  "AWS::CodeStar::GitHubRepository",
  CodeStarGitHubRepositoryProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::CodeStar::GitHubRepository";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: CodeStarGitHubRepositoryProps,
    options?: ResourceOptions,
  ) {
    super(
      CodeStarGitHubRepository.Type,
      CodeStarGitHubRepository.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
