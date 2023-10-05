import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::IoTCoreDeviceAdvisor::SuiteDefinition.DeviceUnderTest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotcoredeviceadvisor-suitedefinition-deviceundertest.html | AWS::IoTCoreDeviceAdvisor::SuiteDefinition.DeviceUnderTest}
 */
export interface IoTCoreDeviceAdvisorSuiteDefinitionDeviceUnderTest {
  ThingArn?: string;
  CertificateArn?: string;
}
/**
 * Type definition for AWS::IoTCoreDeviceAdvisor::SuiteDefinition.SuiteDefinitionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotcoredeviceadvisor-suitedefinition-suitedefinitionconfiguration.html | AWS::IoTCoreDeviceAdvisor::SuiteDefinition.SuiteDefinitionConfiguration}
 */
export interface IoTCoreDeviceAdvisorSuiteDefinitionSuiteDefinitionConfiguration {
  DevicePermissionRoleArn: string;
  SuiteDefinitionName?: string;
  IntendedForQualification?: boolean;
  Devices?: any[];
  RootGroup: string;
}
/**
 * Type definition for AWS::IoTCoreDeviceAdvisor::SuiteDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotcoredeviceadvisor-suitedefinition.html | AWS::IoTCoreDeviceAdvisor::SuiteDefinition}
 */
export interface IoTCoreDeviceAdvisorSuiteDefinitionProps {
  SuiteDefinitionConfiguration: IoTCoreDeviceAdvisorSuiteDefinitionSuiteDefinitionConfiguration;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::IoTCoreDeviceAdvisor::SuiteDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotcoredeviceadvisor-suitedefinition.html | AWS::IoTCoreDeviceAdvisor::SuiteDefinition}
 */
export interface IoTCoreDeviceAdvisorSuiteDefinitionAttribs {
  SuiteDefinitionArn?: string;
  SuiteDefinitionVersion?: string;
  SuiteDefinitionId?: string;
}
/**
 * Resource class for AWS::IoTCoreDeviceAdvisor::SuiteDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotcoredeviceadvisor-suitedefinition.html | AWS::IoTCoreDeviceAdvisor::SuiteDefinition}
 */
export class IoTCoreDeviceAdvisorSuiteDefinition extends ResourceBase<
  "AWS::IoTCoreDeviceAdvisor::SuiteDefinition",
  IoTCoreDeviceAdvisorSuiteDefinitionProps,
  IoTCoreDeviceAdvisorSuiteDefinitionAttribs
> {
  public static readonly Type = "AWS::IoTCoreDeviceAdvisor::SuiteDefinition";
  public static readonly AttributeNames: readonly (keyof IoTCoreDeviceAdvisorSuiteDefinitionAttribs)[] =
    ["SuiteDefinitionArn", "SuiteDefinitionVersion", "SuiteDefinitionId"];
  constructor(
    logicalId: string,
    properties: IoTCoreDeviceAdvisorSuiteDefinitionProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTCoreDeviceAdvisorSuiteDefinition.Type,
      IoTCoreDeviceAdvisorSuiteDefinition.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
