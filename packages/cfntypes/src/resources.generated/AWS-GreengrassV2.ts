import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::GreengrassV2::ComponentVersion.ComponentDependencyRequirement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-componentversion-componentdependencyrequirement.html | AWS::GreengrassV2::ComponentVersion.ComponentDependencyRequirement}
 */
export interface GreengrassV2ComponentVersionComponentDependencyRequirement {
  VersionRequirement?: string;
  DependencyType?: string;
}
/**
 * Type definition for AWS::GreengrassV2::ComponentVersion.ComponentPlatform
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-componentversion-componentplatform.html | AWS::GreengrassV2::ComponentVersion.ComponentPlatform}
 */
export interface GreengrassV2ComponentVersionComponentPlatform {
  Attributes?: Record<string, any>;
  Name?: string;
}
/**
 * Type definition for AWS::GreengrassV2::ComponentVersion.LambdaContainerParams
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-componentversion-lambdacontainerparams.html | AWS::GreengrassV2::ComponentVersion.LambdaContainerParams}
 */
export interface GreengrassV2ComponentVersionLambdaContainerParams {
  Volumes?: any[];
  MountROSysfs?: boolean;
  MemorySizeInKB?: number;
  Devices?: any[];
}
/**
 * Type definition for AWS::GreengrassV2::ComponentVersion.LambdaDeviceMount
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-componentversion-lambdadevicemount.html | AWS::GreengrassV2::ComponentVersion.LambdaDeviceMount}
 */
export interface GreengrassV2ComponentVersionLambdaDeviceMount {
  Path?: string;
  AddGroupOwner?: boolean;
  Permission?: string;
}
/**
 * Type definition for AWS::GreengrassV2::ComponentVersion.LambdaEventSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-componentversion-lambdaeventsource.html | AWS::GreengrassV2::ComponentVersion.LambdaEventSource}
 */
export interface GreengrassV2ComponentVersionLambdaEventSource {
  Type?: string;
  Topic?: string;
}
/**
 * Type definition for AWS::GreengrassV2::ComponentVersion.LambdaExecutionParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-componentversion-lambdaexecutionparameters.html | AWS::GreengrassV2::ComponentVersion.LambdaExecutionParameters}
 */
export interface GreengrassV2ComponentVersionLambdaExecutionParameters {
  MaxInstancesCount?: number;
  TimeoutInSeconds?: number;
  EnvironmentVariables?: Record<string, any>;
  EventSources?: any[];
  Pinned?: boolean;
  ExecArgs?: any[];
  LinuxProcessParams?: GreengrassV2ComponentVersionLambdaLinuxProcessParams;
  InputPayloadEncodingType?: string;
  MaxQueueSize?: number;
  StatusTimeoutInSeconds?: number;
  MaxIdleTimeInSeconds?: number;
}
/**
 * Type definition for AWS::GreengrassV2::ComponentVersion.LambdaFunctionRecipeSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-componentversion-lambdafunctionrecipesource.html | AWS::GreengrassV2::ComponentVersion.LambdaFunctionRecipeSource}
 */
export interface GreengrassV2ComponentVersionLambdaFunctionRecipeSource {
  ComponentDependencies?: Record<string, any>;
  ComponentLambdaParameters?: GreengrassV2ComponentVersionLambdaExecutionParameters;
  LambdaArn?: string;
  ComponentPlatforms?: any[];
  ComponentName?: string;
  ComponentVersion?: string;
}
/**
 * Type definition for AWS::GreengrassV2::ComponentVersion.LambdaLinuxProcessParams
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-componentversion-lambdalinuxprocessparams.html | AWS::GreengrassV2::ComponentVersion.LambdaLinuxProcessParams}
 */
export interface GreengrassV2ComponentVersionLambdaLinuxProcessParams {
  IsolationMode?: string;
  ContainerParams?: GreengrassV2ComponentVersionLambdaContainerParams;
}
/**
 * Type definition for AWS::GreengrassV2::ComponentVersion.LambdaVolumeMount
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-componentversion-lambdavolumemount.html | AWS::GreengrassV2::ComponentVersion.LambdaVolumeMount}
 */
export interface GreengrassV2ComponentVersionLambdaVolumeMount {
  SourcePath?: string;
  DestinationPath?: string;
  AddGroupOwner?: boolean;
  Permission?: string;
}
/**
 * Type definition for AWS::GreengrassV2::Deployment.ComponentConfigurationUpdate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-componentconfigurationupdate.html | AWS::GreengrassV2::Deployment.ComponentConfigurationUpdate}
 */
export interface GreengrassV2DeploymentComponentConfigurationUpdate {
  Merge?: string;
  Reset?: any[];
}
/**
 * Type definition for AWS::GreengrassV2::Deployment.ComponentDeploymentSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-componentdeploymentspecification.html | AWS::GreengrassV2::Deployment.ComponentDeploymentSpecification}
 */
export interface GreengrassV2DeploymentComponentDeploymentSpecification {
  RunWith?: GreengrassV2DeploymentComponentRunWith;
  ConfigurationUpdate?: GreengrassV2DeploymentComponentConfigurationUpdate;
  ComponentVersion?: string;
}
/**
 * Type definition for AWS::GreengrassV2::Deployment.ComponentRunWith
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-componentrunwith.html | AWS::GreengrassV2::Deployment.ComponentRunWith}
 */
export interface GreengrassV2DeploymentComponentRunWith {
  WindowsUser?: string;
  SystemResourceLimits?: GreengrassV2DeploymentSystemResourceLimits;
  PosixUser?: string;
}
/**
 * Type definition for AWS::GreengrassV2::Deployment.DeploymentComponentUpdatePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-deploymentcomponentupdatepolicy.html | AWS::GreengrassV2::Deployment.DeploymentComponentUpdatePolicy}
 */
export interface GreengrassV2DeploymentDeploymentComponentUpdatePolicy {
  Action?: string;
  TimeoutInSeconds?: number;
}
/**
 * Type definition for AWS::GreengrassV2::Deployment.DeploymentConfigurationValidationPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-deploymentconfigurationvalidationpolicy.html | AWS::GreengrassV2::Deployment.DeploymentConfigurationValidationPolicy}
 */
export interface GreengrassV2DeploymentDeploymentConfigurationValidationPolicy {
  TimeoutInSeconds?: number;
}
/**
 * Type definition for AWS::GreengrassV2::Deployment.DeploymentIoTJobConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-deploymentiotjobconfiguration.html | AWS::GreengrassV2::Deployment.DeploymentIoTJobConfiguration}
 */
export interface GreengrassV2DeploymentDeploymentIoTJobConfiguration {
  JobExecutionsRolloutConfig?: GreengrassV2DeploymentIoTJobExecutionsRolloutConfig;
  TimeoutConfig?: GreengrassV2DeploymentIoTJobTimeoutConfig;
  AbortConfig?: GreengrassV2DeploymentIoTJobAbortConfig;
}
/**
 * Type definition for AWS::GreengrassV2::Deployment.DeploymentPolicies
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-deploymentpolicies.html | AWS::GreengrassV2::Deployment.DeploymentPolicies}
 */
export interface GreengrassV2DeploymentDeploymentPolicies {
  ComponentUpdatePolicy?: GreengrassV2DeploymentDeploymentComponentUpdatePolicy;
  ConfigurationValidationPolicy?: GreengrassV2DeploymentDeploymentConfigurationValidationPolicy;
  FailureHandlingPolicy?: string;
}
/**
 * Type definition for AWS::GreengrassV2::Deployment.IoTJobAbortConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-iotjobabortconfig.html | AWS::GreengrassV2::Deployment.IoTJobAbortConfig}
 */
export interface GreengrassV2DeploymentIoTJobAbortConfig {
  CriteriaList: any[];
}
/**
 * Type definition for AWS::GreengrassV2::Deployment.IoTJobAbortCriteria
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-iotjobabortcriteria.html | AWS::GreengrassV2::Deployment.IoTJobAbortCriteria}
 */
export interface GreengrassV2DeploymentIoTJobAbortCriteria {
  FailureType: string;
  Action: string;
  ThresholdPercentage: number;
  MinNumberOfExecutedThings: number;
}
/**
 * Type definition for AWS::GreengrassV2::Deployment.IoTJobExecutionsRolloutConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-iotjobexecutionsrolloutconfig.html | AWS::GreengrassV2::Deployment.IoTJobExecutionsRolloutConfig}
 */
export interface GreengrassV2DeploymentIoTJobExecutionsRolloutConfig {
  MaximumPerMinute?: number;
  ExponentialRate?: GreengrassV2DeploymentIoTJobExponentialRolloutRate;
}
/**
 * Type definition for AWS::GreengrassV2::Deployment.IoTJobExponentialRolloutRate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-iotjobexponentialrolloutrate.html | AWS::GreengrassV2::Deployment.IoTJobExponentialRolloutRate}
 */
export interface GreengrassV2DeploymentIoTJobExponentialRolloutRate {
  RateIncreaseCriteria: GreengrassV2DeploymentIoTJobRateIncreaseCriteria;
  BaseRatePerMinute: number;
  IncrementFactor: number;
}
/**
 * Type definition for AWS::GreengrassV2::Deployment.IoTJobRateIncreaseCriteria
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-iotjobrateincreasecriteria.html | AWS::GreengrassV2::Deployment.IoTJobRateIncreaseCriteria}
 */
export interface GreengrassV2DeploymentIoTJobRateIncreaseCriteria {
  NumberOfSucceededThings?: number;
  NumberOfNotifiedThings?: number;
}
/**
 * Type definition for AWS::GreengrassV2::Deployment.IoTJobTimeoutConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-iotjobtimeoutconfig.html | AWS::GreengrassV2::Deployment.IoTJobTimeoutConfig}
 */
export interface GreengrassV2DeploymentIoTJobTimeoutConfig {
  InProgressTimeoutInMinutes?: number;
}
/**
 * Type definition for AWS::GreengrassV2::Deployment.SystemResourceLimits
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-systemresourcelimits.html | AWS::GreengrassV2::Deployment.SystemResourceLimits}
 */
export interface GreengrassV2DeploymentSystemResourceLimits {
  Memory?: number;
  Cpus?: number;
}
/**
 * Type definition for AWS::GreengrassV2::ComponentVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html | AWS::GreengrassV2::ComponentVersion}
 */
export interface GreengrassV2ComponentVersionProps {
  LambdaFunction?: GreengrassV2ComponentVersionLambdaFunctionRecipeSource;
  InlineRecipe?: string;
  Tags?: Record<string, Tag>;
}
/**
 * Attributes type definition for AWS::GreengrassV2::ComponentVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html | AWS::GreengrassV2::ComponentVersion}
 */
export interface GreengrassV2ComponentVersionAttribs {
  ComponentName?: string;
  Arn?: string;
  ComponentVersion?: string;
}
/**
 * Resource class for AWS::GreengrassV2::ComponentVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html | AWS::GreengrassV2::ComponentVersion}
 */
export class GreengrassV2ComponentVersion extends ResourceBase<
  "AWS::GreengrassV2::ComponentVersion",
  GreengrassV2ComponentVersionProps,
  GreengrassV2ComponentVersionAttribs
> {
  public static readonly Type = "AWS::GreengrassV2::ComponentVersion";
  public static readonly AttributeNames: readonly (keyof GreengrassV2ComponentVersionAttribs)[] =
    ["ComponentName", "Arn", "ComponentVersion"];
  constructor(
    logicalId: string,
    properties: GreengrassV2ComponentVersionProps,
    options?: ResourceOptions,
  ) {
    super(
      GreengrassV2ComponentVersion.Type,
      GreengrassV2ComponentVersion.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::GreengrassV2::Deployment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-deployment.html | AWS::GreengrassV2::Deployment}
 */
export interface GreengrassV2DeploymentProps {
  Components?: Record<string, any>;
  DeploymentName?: string;
  IotJobConfiguration?: GreengrassV2DeploymentDeploymentIoTJobConfiguration;
  DeploymentPolicies?: GreengrassV2DeploymentDeploymentPolicies;
  TargetArn: string;
  ParentTargetArn?: string;
  Tags?: Record<string, Tag>;
}
/**
 * Attributes type definition for AWS::GreengrassV2::Deployment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-deployment.html | AWS::GreengrassV2::Deployment}
 */
export interface GreengrassV2DeploymentAttribs {
  DeploymentId?: string;
}
/**
 * Resource class for AWS::GreengrassV2::Deployment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-deployment.html | AWS::GreengrassV2::Deployment}
 */
export class GreengrassV2Deployment extends ResourceBase<
  "AWS::GreengrassV2::Deployment",
  GreengrassV2DeploymentProps,
  GreengrassV2DeploymentAttribs
> {
  public static readonly Type = "AWS::GreengrassV2::Deployment";
  public static readonly AttributeNames: readonly (keyof GreengrassV2DeploymentAttribs)[] =
    ["DeploymentId"];
  constructor(
    logicalId: string,
    properties: GreengrassV2DeploymentProps,
    options?: ResourceOptions,
  ) {
    super(
      GreengrassV2Deployment.Type,
      GreengrassV2Deployment.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
