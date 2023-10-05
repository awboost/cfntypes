import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::IoT1Click::Project.DeviceTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot1click-project-devicetemplate.html | AWS::IoT1Click::Project.DeviceTemplate}
 */
export interface IoT1ClickProjectDeviceTemplate {
  DeviceType?: string;
  CallbackOverrides?: object;
}
/**
 * Type definition for AWS::IoT1Click::Project.PlacementTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot1click-project-placementtemplate.html | AWS::IoT1Click::Project.PlacementTemplate}
 */
export interface IoT1ClickProjectPlacementTemplate {
  DeviceTemplates?: object;
  DefaultAttributes?: object;
}
/**
 * Type definition for AWS::IoT1Click::Device
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-device.html | AWS::IoT1Click::Device}
 */
export interface IoT1ClickDeviceProps {
  DeviceId: string;
  Enabled: boolean;
}
/**
 * Attributes type definition for AWS::IoT1Click::Device
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-device.html | AWS::IoT1Click::Device}
 */
export interface IoT1ClickDeviceAttribs {
  DeviceId?: string;
  Enabled?: boolean;
  Arn?: string;
}
/**
 * Resource class for AWS::IoT1Click::Device
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-device.html | AWS::IoT1Click::Device}
 */
export class IoT1ClickDevice extends ResourceBase<
  "AWS::IoT1Click::Device",
  IoT1ClickDeviceProps,
  IoT1ClickDeviceAttribs
> {
  public static readonly Type = "AWS::IoT1Click::Device";
  public static readonly AttributeNames: readonly (keyof IoT1ClickDeviceAttribs)[] =
    ["DeviceId", "Enabled", "Arn"];
  constructor(
    logicalId: string,
    properties: IoT1ClickDeviceProps,
    options?: ResourceOptions,
  ) {
    super(
      IoT1ClickDevice.Type,
      IoT1ClickDevice.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoT1Click::Placement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-placement.html | AWS::IoT1Click::Placement}
 */
export interface IoT1ClickPlacementProps {
  PlacementName?: string;
  ProjectName: string;
  AssociatedDevices?: object;
  Attributes?: object;
}
/**
 * Attributes type definition for AWS::IoT1Click::Placement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-placement.html | AWS::IoT1Click::Placement}
 */
export interface IoT1ClickPlacementAttribs {
  PlacementName?: string;
  ProjectName?: string;
}
/**
 * Resource class for AWS::IoT1Click::Placement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-placement.html | AWS::IoT1Click::Placement}
 */
export class IoT1ClickPlacement extends ResourceBase<
  "AWS::IoT1Click::Placement",
  IoT1ClickPlacementProps,
  IoT1ClickPlacementAttribs
> {
  public static readonly Type = "AWS::IoT1Click::Placement";
  public static readonly AttributeNames: readonly (keyof IoT1ClickPlacementAttribs)[] =
    ["PlacementName", "ProjectName"];
  constructor(
    logicalId: string,
    properties: IoT1ClickPlacementProps,
    options?: ResourceOptions,
  ) {
    super(
      IoT1ClickPlacement.Type,
      IoT1ClickPlacement.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoT1Click::Project
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-project.html | AWS::IoT1Click::Project}
 */
export interface IoT1ClickProjectProps {
  Description?: string;
  PlacementTemplate: IoT1ClickProjectPlacementTemplate;
  ProjectName?: string;
}
/**
 * Attributes type definition for AWS::IoT1Click::Project
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-project.html | AWS::IoT1Click::Project}
 */
export interface IoT1ClickProjectAttribs {
  ProjectName?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::IoT1Click::Project
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-project.html | AWS::IoT1Click::Project}
 */
export class IoT1ClickProject extends ResourceBase<
  "AWS::IoT1Click::Project",
  IoT1ClickProjectProps,
  IoT1ClickProjectAttribs
> {
  public static readonly Type = "AWS::IoT1Click::Project";
  public static readonly AttributeNames: readonly (keyof IoT1ClickProjectAttribs)[] =
    ["ProjectName", "Arn"];
  constructor(
    logicalId: string,
    properties: IoT1ClickProjectProps,
    options?: ResourceOptions,
  ) {
    super(
      IoT1ClickProject.Type,
      IoT1ClickProject.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
