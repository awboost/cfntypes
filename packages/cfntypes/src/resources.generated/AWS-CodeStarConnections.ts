import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::CodeStarConnections::Connection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-connection.html | AWS::CodeStarConnections::Connection}
 */
export interface CodeStarConnectionsConnectionProps {
  ConnectionName: string;
  HostArn?: string;
  ProviderType?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::CodeStarConnections::Connection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-connection.html | AWS::CodeStarConnections::Connection}
 */
export interface CodeStarConnectionsConnectionAttribs {
  ConnectionArn?: string;
  ConnectionStatus?: string;
  OwnerAccountId?: string;
}
/**
 * Resource class for AWS::CodeStarConnections::Connection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-connection.html | AWS::CodeStarConnections::Connection}
 */
export class CodeStarConnectionsConnection extends ResourceBase<
  "AWS::CodeStarConnections::Connection",
  CodeStarConnectionsConnectionProps,
  CodeStarConnectionsConnectionAttribs
> {
  public static readonly Type = "AWS::CodeStarConnections::Connection";
  public static readonly AttributeNames: readonly (keyof CodeStarConnectionsConnectionAttribs)[] =
    ["ConnectionArn", "ConnectionStatus", "OwnerAccountId"];
  constructor(
    logicalId: string,
    properties: CodeStarConnectionsConnectionProps,
    options?: ResourceOptions,
  ) {
    super(
      CodeStarConnectionsConnection.Type,
      CodeStarConnectionsConnection.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
