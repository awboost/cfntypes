import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::EMRServerless::Application.AutoStartConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-autostartconfiguration.html | AWS::EMRServerless::Application.AutoStartConfiguration}
 */
export interface EMRServerlessApplicationAutoStartConfiguration {
  Enabled?: boolean;
}
/**
 * Type definition for AWS::EMRServerless::Application.AutoStopConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-autostopconfiguration.html | AWS::EMRServerless::Application.AutoStopConfiguration}
 */
export interface EMRServerlessApplicationAutoStopConfiguration {
  Enabled?: boolean;
  IdleTimeoutMinutes?: number;
}
/**
 * Type definition for AWS::EMRServerless::Application.ImageConfigurationInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-imageconfigurationinput.html | AWS::EMRServerless::Application.ImageConfigurationInput}
 */
export interface EMRServerlessApplicationImageConfigurationInput {
  ImageUri?: string;
}
/**
 * Type definition for AWS::EMRServerless::Application.InitialCapacityConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-initialcapacityconfig.html | AWS::EMRServerless::Application.InitialCapacityConfig}
 */
export interface EMRServerlessApplicationInitialCapacityConfig {
  WorkerConfiguration: EMRServerlessApplicationWorkerConfiguration;
  WorkerCount: number;
}
/**
 * Type definition for AWS::EMRServerless::Application.InitialCapacityConfigKeyValuePair
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-initialcapacityconfigkeyvaluepair.html | AWS::EMRServerless::Application.InitialCapacityConfigKeyValuePair}
 */
export interface EMRServerlessApplicationInitialCapacityConfigKeyValuePair {
  Value: EMRServerlessApplicationInitialCapacityConfig;
  Key: string;
}
/**
 * Type definition for AWS::EMRServerless::Application.MaximumAllowedResources
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-maximumallowedresources.html | AWS::EMRServerless::Application.MaximumAllowedResources}
 */
export interface EMRServerlessApplicationMaximumAllowedResources {
  Memory: string;
  Cpu: string;
  Disk?: string;
}
/**
 * Type definition for AWS::EMRServerless::Application.NetworkConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-networkconfiguration.html | AWS::EMRServerless::Application.NetworkConfiguration}
 */
export interface EMRServerlessApplicationNetworkConfiguration {
  SubnetIds?: any[];
  SecurityGroupIds?: any[];
}
/**
 * Type definition for AWS::EMRServerless::Application.WorkerConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-workerconfiguration.html | AWS::EMRServerless::Application.WorkerConfiguration}
 */
export interface EMRServerlessApplicationWorkerConfiguration {
  Memory: string;
  Cpu: string;
  Disk?: string;
}
/**
 * Type definition for AWS::EMRServerless::Application.WorkerTypeSpecificationInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-workertypespecificationinput.html | AWS::EMRServerless::Application.WorkerTypeSpecificationInput}
 */
export interface EMRServerlessApplicationWorkerTypeSpecificationInput {
  ImageConfiguration?: EMRServerlessApplicationImageConfigurationInput;
}
/**
 * Type definition for AWS::EMRServerless::Application
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html | AWS::EMRServerless::Application}
 */
export interface EMRServerlessApplicationProps {
  AutoStartConfiguration?: EMRServerlessApplicationAutoStartConfiguration;
  Type: string;
  Architecture?: string;
  WorkerTypeSpecifications?: Record<string, any>;
  InitialCapacity?: any[];
  ImageConfiguration?: EMRServerlessApplicationImageConfigurationInput;
  MaximumCapacity?: EMRServerlessApplicationMaximumAllowedResources;
  AutoStopConfiguration?: EMRServerlessApplicationAutoStopConfiguration;
  NetworkConfiguration?: EMRServerlessApplicationNetworkConfiguration;
  ReleaseLabel: string;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::EMRServerless::Application
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html | AWS::EMRServerless::Application}
 */
export interface EMRServerlessApplicationAttribs {
  Arn?: string;
  ApplicationId?: string;
}
/**
 * Resource class for AWS::EMRServerless::Application
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html | AWS::EMRServerless::Application}
 */
export class EMRServerlessApplication extends ResourceBase<
  "AWS::EMRServerless::Application",
  EMRServerlessApplicationProps,
  EMRServerlessApplicationAttribs
> {
  public static readonly Type = "AWS::EMRServerless::Application";
  public static readonly AttributeNames: readonly (keyof EMRServerlessApplicationAttribs)[] =
    ["Arn", "ApplicationId"];
  constructor(
    logicalId: string,
    properties: EMRServerlessApplicationProps,
    options?: ResourceOptions,
  ) {
    super(
      EMRServerlessApplication.Type,
      EMRServerlessApplication.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
