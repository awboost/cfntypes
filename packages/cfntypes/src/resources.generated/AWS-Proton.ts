import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Proton::EnvironmentAccountConnection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmentaccountconnection.html | AWS::Proton::EnvironmentAccountConnection}
 */
export interface ProtonEnvironmentAccountConnectionProps {
  EnvironmentName?: string;
  ComponentRoleArn?: string;
  ManagementAccountId?: string;
  CodebuildRoleArn?: string;
  EnvironmentAccountId?: string;
  RoleArn?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::Proton::EnvironmentAccountConnection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmentaccountconnection.html | AWS::Proton::EnvironmentAccountConnection}
 */
export interface ProtonEnvironmentAccountConnectionAttribs {
  Status?: string;
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::Proton::EnvironmentAccountConnection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmentaccountconnection.html | AWS::Proton::EnvironmentAccountConnection}
 */
export class ProtonEnvironmentAccountConnection extends ResourceBase<
  "AWS::Proton::EnvironmentAccountConnection",
  ProtonEnvironmentAccountConnectionProps,
  ProtonEnvironmentAccountConnectionAttribs
> {
  public static readonly Type = "AWS::Proton::EnvironmentAccountConnection";
  public static readonly AttributeNames: readonly (keyof ProtonEnvironmentAccountConnectionAttribs)[] =
    ["Status", "Id", "Arn"];
  constructor(
    logicalId: string,
    properties: ProtonEnvironmentAccountConnectionProps,
    options?: ResourceOptions,
  ) {
    super(
      ProtonEnvironmentAccountConnection.Type,
      ProtonEnvironmentAccountConnection.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Proton::EnvironmentTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmenttemplate.html | AWS::Proton::EnvironmentTemplate}
 */
export interface ProtonEnvironmentTemplateProps {
  Description?: string;
  DisplayName?: string;
  EncryptionKey?: string;
  Provisioning?: string;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::Proton::EnvironmentTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmenttemplate.html | AWS::Proton::EnvironmentTemplate}
 */
export interface ProtonEnvironmentTemplateAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::Proton::EnvironmentTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmenttemplate.html | AWS::Proton::EnvironmentTemplate}
 */
export class ProtonEnvironmentTemplate extends ResourceBase<
  "AWS::Proton::EnvironmentTemplate",
  ProtonEnvironmentTemplateProps,
  ProtonEnvironmentTemplateAttribs
> {
  public static readonly Type = "AWS::Proton::EnvironmentTemplate";
  public static readonly AttributeNames: readonly (keyof ProtonEnvironmentTemplateAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: ProtonEnvironmentTemplateProps,
    options?: ResourceOptions,
  ) {
    super(
      ProtonEnvironmentTemplate.Type,
      ProtonEnvironmentTemplate.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Proton::ServiceTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-servicetemplate.html | AWS::Proton::ServiceTemplate}
 */
export interface ProtonServiceTemplateProps {
  Description?: string;
  DisplayName?: string;
  PipelineProvisioning?: string;
  EncryptionKey?: string;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::Proton::ServiceTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-servicetemplate.html | AWS::Proton::ServiceTemplate}
 */
export interface ProtonServiceTemplateAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::Proton::ServiceTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-servicetemplate.html | AWS::Proton::ServiceTemplate}
 */
export class ProtonServiceTemplate extends ResourceBase<
  "AWS::Proton::ServiceTemplate",
  ProtonServiceTemplateProps,
  ProtonServiceTemplateAttribs
> {
  public static readonly Type = "AWS::Proton::ServiceTemplate";
  public static readonly AttributeNames: readonly (keyof ProtonServiceTemplateAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: ProtonServiceTemplateProps,
    options?: ResourceOptions,
  ) {
    super(
      ProtonServiceTemplate.Type,
      ProtonServiceTemplate.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
