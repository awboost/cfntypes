import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::SystemsManagerSAP::Application.Credential
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-systemsmanagersap-application-credential.html | AWS::SystemsManagerSAP::Application.Credential}
 */
export interface SystemsManagerSAPApplicationCredential {
  SecretId?: string;
  DatabaseName?: string;
  CredentialType?: string;
}
/**
 * Type definition for AWS::SystemsManagerSAP::Application
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-systemsmanagersap-application.html | AWS::SystemsManagerSAP::Application}
 */
export interface SystemsManagerSAPApplicationProps {
  Instances?: any[];
  ApplicationType: string;
  SapInstanceNumber?: string;
  ApplicationId: string;
  Credentials?: any[];
  Tags?: Tag[];
  Sid?: string;
}
/**
 * Attributes type definition for AWS::SystemsManagerSAP::Application
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-systemsmanagersap-application.html | AWS::SystemsManagerSAP::Application}
 */
export interface SystemsManagerSAPApplicationAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::SystemsManagerSAP::Application
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-systemsmanagersap-application.html | AWS::SystemsManagerSAP::Application}
 */
export class SystemsManagerSAPApplication extends ResourceBase<
  "AWS::SystemsManagerSAP::Application",
  SystemsManagerSAPApplicationProps,
  SystemsManagerSAPApplicationAttribs
> {
  public static readonly Type = "AWS::SystemsManagerSAP::Application";
  public static readonly AttributeNames: readonly (keyof SystemsManagerSAPApplicationAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: SystemsManagerSAPApplicationProps,
    options?: ResourceOptions,
  ) {
    super(
      SystemsManagerSAPApplication.Type,
      SystemsManagerSAPApplication.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
