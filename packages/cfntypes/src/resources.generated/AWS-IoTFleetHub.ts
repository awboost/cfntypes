import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::IoTFleetHub::Application
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleethub-application.html | AWS::IoTFleetHub::Application}
 */
export interface IoTFleetHubApplicationProps {
  ApplicationName: string;
  ApplicationDescription?: string;
  RoleArn: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::IoTFleetHub::Application
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleethub-application.html | AWS::IoTFleetHub::Application}
 */
export interface IoTFleetHubApplicationAttribs {
  ApplicationUrl?: string;
  ApplicationArn?: string;
  ApplicationState?: string;
  SsoClientId?: string;
  ApplicationId?: string;
  ApplicationLastUpdateDate?: number;
  ErrorMessage?: string;
  ApplicationCreationDate?: number;
}
/**
 * Resource class for AWS::IoTFleetHub::Application
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleethub-application.html | AWS::IoTFleetHub::Application}
 */
export class IoTFleetHubApplication extends ResourceBase<
  "AWS::IoTFleetHub::Application",
  IoTFleetHubApplicationProps,
  IoTFleetHubApplicationAttribs
> {
  public static readonly Type = "AWS::IoTFleetHub::Application";
  public static readonly AttributeNames: readonly (keyof IoTFleetHubApplicationAttribs)[] =
    [
      "ApplicationUrl",
      "ApplicationArn",
      "ApplicationState",
      "SsoClientId",
      "ApplicationId",
      "ApplicationLastUpdateDate",
      "ErrorMessage",
      "ApplicationCreationDate",
    ];
  constructor(
    logicalId: string,
    properties: IoTFleetHubApplicationProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTFleetHubApplication.Type,
      IoTFleetHubApplication.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
