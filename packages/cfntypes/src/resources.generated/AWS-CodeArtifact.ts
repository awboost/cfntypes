import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::CodeArtifact::Domain
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html | AWS::CodeArtifact::Domain}
 */
export interface CodeArtifactDomainProps {
  PermissionsPolicyDocument?: object;
  DomainName: string;
  Tags?: Tag[];
  EncryptionKey?: string;
}
/**
 * Attributes type definition for AWS::CodeArtifact::Domain
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html | AWS::CodeArtifact::Domain}
 */
export interface CodeArtifactDomainAttribs {
  Owner?: string;
  EncryptionKey?: string;
  Arn?: string;
  Name?: string;
}
/**
 * Resource class for AWS::CodeArtifact::Domain
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html | AWS::CodeArtifact::Domain}
 */
export class CodeArtifactDomain extends ResourceBase<
  "AWS::CodeArtifact::Domain",
  CodeArtifactDomainProps,
  CodeArtifactDomainAttribs
> {
  public static readonly Type = "AWS::CodeArtifact::Domain";
  public static readonly AttributeNames: readonly (keyof CodeArtifactDomainAttribs)[] =
    ["Owner", "EncryptionKey", "Arn", "Name"];
  constructor(
    logicalId: string,
    properties: CodeArtifactDomainProps,
    options?: ResourceOptions,
  ) {
    super(
      CodeArtifactDomain.Type,
      CodeArtifactDomain.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CodeArtifact::Repository
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html | AWS::CodeArtifact::Repository}
 */
export interface CodeArtifactRepositoryProps {
  Description?: string;
  PermissionsPolicyDocument?: object;
  DomainName: string;
  Upstreams?: any[];
  RepositoryName: string;
  ExternalConnections?: any[];
  Tags?: Tag[];
  DomainOwner?: string;
}
/**
 * Attributes type definition for AWS::CodeArtifact::Repository
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html | AWS::CodeArtifact::Repository}
 */
export interface CodeArtifactRepositoryAttribs {
  DomainName?: string;
  Arn?: string;
  DomainOwner?: string;
  Name?: string;
}
/**
 * Resource class for AWS::CodeArtifact::Repository
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html | AWS::CodeArtifact::Repository}
 */
export class CodeArtifactRepository extends ResourceBase<
  "AWS::CodeArtifact::Repository",
  CodeArtifactRepositoryProps,
  CodeArtifactRepositoryAttribs
> {
  public static readonly Type = "AWS::CodeArtifact::Repository";
  public static readonly AttributeNames: readonly (keyof CodeArtifactRepositoryAttribs)[] =
    ["DomainName", "Arn", "DomainOwner", "Name"];
  constructor(
    logicalId: string,
    properties: CodeArtifactRepositoryProps,
    options?: ResourceOptions,
  ) {
    super(
      CodeArtifactRepository.Type,
      CodeArtifactRepository.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
