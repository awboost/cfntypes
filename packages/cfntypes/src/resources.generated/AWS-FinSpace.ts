import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::FinSpace::Environment.AttributeMapItems
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-finspace-environment-attributemapitems.html | AWS::FinSpace::Environment.AttributeMapItems}
 */
export interface FinSpaceEnvironmentAttributeMapItems {
  Value?: string;
  Key?: string;
}
/**
 * Type definition for AWS::FinSpace::Environment.FederationParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-finspace-environment-federationparameters.html | AWS::FinSpace::Environment.FederationParameters}
 */
export interface FinSpaceEnvironmentFederationParameters {
  AttributeMap?: any[];
  FederationProviderName?: string;
  SamlMetadataURL?: string;
  FederationURN?: string;
  SamlMetadataDocument?: string;
  ApplicationCallBackURL?: string;
}
/**
 * Type definition for AWS::FinSpace::Environment.SuperuserParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-finspace-environment-superuserparameters.html | AWS::FinSpace::Environment.SuperuserParameters}
 */
export interface FinSpaceEnvironmentSuperuserParameters {
  FirstName?: string;
  LastName?: string;
  EmailAddress?: string;
}
/**
 * Type definition for AWS::FinSpace::Environment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html | AWS::FinSpace::Environment}
 */
export interface FinSpaceEnvironmentProps {
  Description?: string;
  KmsKeyId?: string;
  FederationParameters?: FinSpaceEnvironmentFederationParameters;
  FederationMode?: string;
  SuperuserParameters?: FinSpaceEnvironmentSuperuserParameters;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::FinSpace::Environment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html | AWS::FinSpace::Environment}
 */
export interface FinSpaceEnvironmentAttribs {
  Status?: string;
  EnvironmentId?: string;
  EnvironmentArn?: string;
  SageMakerStudioDomainUrl?: string;
  EnvironmentUrl?: string;
  AwsAccountId?: string;
  DedicatedServiceAccountId?: string;
}
/**
 * Resource class for AWS::FinSpace::Environment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html | AWS::FinSpace::Environment}
 */
export class FinSpaceEnvironment extends ResourceBase<
  "AWS::FinSpace::Environment",
  FinSpaceEnvironmentProps,
  FinSpaceEnvironmentAttribs
> {
  public static readonly Type = "AWS::FinSpace::Environment";
  public static readonly AttributeNames: readonly (keyof FinSpaceEnvironmentAttribs)[] =
    [
      "Status",
      "EnvironmentId",
      "EnvironmentArn",
      "SageMakerStudioDomainUrl",
      "EnvironmentUrl",
      "AwsAccountId",
      "DedicatedServiceAccountId",
    ];
  constructor(
    logicalId: string,
    properties: FinSpaceEnvironmentProps,
    options?: ResourceOptions,
  ) {
    super(
      FinSpaceEnvironment.Type,
      FinSpaceEnvironment.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
