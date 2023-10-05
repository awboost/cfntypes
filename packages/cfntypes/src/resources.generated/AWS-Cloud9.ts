import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Cloud9::EnvironmentEC2.Repository
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloud9-environmentec2-repository.html | AWS::Cloud9::EnvironmentEC2.Repository}
 */
export interface Cloud9EnvironmentEC2Repository {
  PathComponent: string;
  RepositoryUrl: string;
}
/**
 * Type definition for AWS::Cloud9::EnvironmentEC2
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloud9-environmentec2.html | AWS::Cloud9::EnvironmentEC2}
 */
export interface Cloud9EnvironmentEC2Props {
  Repositories?: any[];
  OwnerArn?: string;
  Description?: string;
  ConnectionType?: string;
  AutomaticStopTimeMinutes?: number;
  ImageId?: string;
  SubnetId?: string;
  InstanceType: string;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::Cloud9::EnvironmentEC2
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloud9-environmentec2.html | AWS::Cloud9::EnvironmentEC2}
 */
export interface Cloud9EnvironmentEC2Attribs {
  Arn?: string;
  Name?: string;
}
/**
 * Resource class for AWS::Cloud9::EnvironmentEC2
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloud9-environmentec2.html | AWS::Cloud9::EnvironmentEC2}
 */
export class Cloud9EnvironmentEC2 extends ResourceBase<
  "AWS::Cloud9::EnvironmentEC2",
  Cloud9EnvironmentEC2Props,
  Cloud9EnvironmentEC2Attribs
> {
  public static readonly Type = "AWS::Cloud9::EnvironmentEC2";
  public static readonly AttributeNames: readonly (keyof Cloud9EnvironmentEC2Attribs)[] =
    ["Arn", "Name"];
  constructor(
    logicalId: string,
    properties: Cloud9EnvironmentEC2Props,
    options?: ResourceOptions,
  ) {
    super(
      Cloud9EnvironmentEC2.Type,
      Cloud9EnvironmentEC2.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
