import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::CodeDeploy::DeploymentConfig.MinimumHealthyHosts
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-minimumhealthyhosts.html | AWS::CodeDeploy::DeploymentConfig.MinimumHealthyHosts}
 */
export interface CodeDeployDeploymentConfigMinimumHealthyHosts {
  Type: string;
  Value: number;
}
/**
 * Type definition for AWS::CodeDeploy::DeploymentConfig.TimeBasedCanary
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-timebasedcanary.html | AWS::CodeDeploy::DeploymentConfig.TimeBasedCanary}
 */
export interface CodeDeployDeploymentConfigTimeBasedCanary {
  CanaryPercentage: number;
  CanaryInterval: number;
}
/**
 * Type definition for AWS::CodeDeploy::DeploymentConfig.TimeBasedLinear
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-timebasedlinear.html | AWS::CodeDeploy::DeploymentConfig.TimeBasedLinear}
 */
export interface CodeDeployDeploymentConfigTimeBasedLinear {
  LinearInterval: number;
  LinearPercentage: number;
}
/**
 * Type definition for AWS::CodeDeploy::DeploymentConfig.TrafficRoutingConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-trafficroutingconfig.html | AWS::CodeDeploy::DeploymentConfig.TrafficRoutingConfig}
 */
export interface CodeDeployDeploymentConfigTrafficRoutingConfig {
  Type: string;
  TimeBasedLinear?: CodeDeployDeploymentConfigTimeBasedLinear;
  TimeBasedCanary?: CodeDeployDeploymentConfigTimeBasedCanary;
}
/**
 * Type definition for AWS::CodeDeploy::DeploymentGroup.Alarm
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-alarm.html | AWS::CodeDeploy::DeploymentGroup.Alarm}
 */
export interface CodeDeployDeploymentGroupAlarm {
  Name?: string;
}
/**
 * Type definition for AWS::CodeDeploy::DeploymentGroup.AlarmConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-alarmconfiguration.html | AWS::CodeDeploy::DeploymentGroup.AlarmConfiguration}
 */
export interface CodeDeployDeploymentGroupAlarmConfiguration {
  Alarms?: any[];
  Enabled?: boolean;
  IgnorePollAlarmFailure?: boolean;
}
/**
 * Type definition for AWS::CodeDeploy::DeploymentGroup.AutoRollbackConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-autorollbackconfiguration.html | AWS::CodeDeploy::DeploymentGroup.AutoRollbackConfiguration}
 */
export interface CodeDeployDeploymentGroupAutoRollbackConfiguration {
  Enabled?: boolean;
  Events?: any[];
}
/**
 * Type definition for AWS::CodeDeploy::DeploymentGroup.BlueGreenDeploymentConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-bluegreendeploymentconfiguration.html | AWS::CodeDeploy::DeploymentGroup.BlueGreenDeploymentConfiguration}
 */
export interface CodeDeployDeploymentGroupBlueGreenDeploymentConfiguration {
  DeploymentReadyOption?: CodeDeployDeploymentGroupDeploymentReadyOption;
  GreenFleetProvisioningOption?: CodeDeployDeploymentGroupGreenFleetProvisioningOption;
  TerminateBlueInstancesOnDeploymentSuccess?: CodeDeployDeploymentGroupBlueInstanceTerminationOption;
}
/**
 * Type definition for AWS::CodeDeploy::DeploymentGroup.BlueInstanceTerminationOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-blueinstanceterminationoption.html | AWS::CodeDeploy::DeploymentGroup.BlueInstanceTerminationOption}
 */
export interface CodeDeployDeploymentGroupBlueInstanceTerminationOption {
  Action?: string;
  TerminationWaitTimeInMinutes?: number;
}
/**
 * Type definition for AWS::CodeDeploy::DeploymentGroup.Deployment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-deployment.html | AWS::CodeDeploy::DeploymentGroup.Deployment}
 */
export interface CodeDeployDeploymentGroupDeployment {
  Description?: string;
  IgnoreApplicationStopFailures?: boolean;
  Revision: CodeDeployDeploymentGroupRevisionLocation;
}
/**
 * Type definition for AWS::CodeDeploy::DeploymentGroup.DeploymentReadyOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-deploymentreadyoption.html | AWS::CodeDeploy::DeploymentGroup.DeploymentReadyOption}
 */
export interface CodeDeployDeploymentGroupDeploymentReadyOption {
  ActionOnTimeout?: string;
  WaitTimeInMinutes?: number;
}
/**
 * Type definition for AWS::CodeDeploy::DeploymentGroup.DeploymentStyle
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-deploymentstyle.html | AWS::CodeDeploy::DeploymentGroup.DeploymentStyle}
 */
export interface CodeDeployDeploymentGroupDeploymentStyle {
  DeploymentOption?: string;
  DeploymentType?: string;
}
/**
 * Type definition for AWS::CodeDeploy::DeploymentGroup.EC2TagFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-ec2tagfilter.html | AWS::CodeDeploy::DeploymentGroup.EC2TagFilter}
 */
export interface CodeDeployDeploymentGroupEC2TagFilter {
  Key?: string;
  Type?: string;
  Value?: string;
}
/**
 * Type definition for AWS::CodeDeploy::DeploymentGroup.EC2TagSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-ec2tagset.html | AWS::CodeDeploy::DeploymentGroup.EC2TagSet}
 */
export interface CodeDeployDeploymentGroupEC2TagSet {
  Ec2TagSetList?: any[];
}
/**
 * Type definition for AWS::CodeDeploy::DeploymentGroup.EC2TagSetListObject
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-ec2tagsetlistobject.html | AWS::CodeDeploy::DeploymentGroup.EC2TagSetListObject}
 */
export interface CodeDeployDeploymentGroupEC2TagSetListObject {
  Ec2TagGroup?: any[];
}
/**
 * Type definition for AWS::CodeDeploy::DeploymentGroup.ECSService
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-ecsservice.html | AWS::CodeDeploy::DeploymentGroup.ECSService}
 */
export interface CodeDeployDeploymentGroupECSService {
  ClusterName: string;
  ServiceName: string;
}
/**
 * Type definition for AWS::CodeDeploy::DeploymentGroup.ELBInfo
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-elbinfo.html | AWS::CodeDeploy::DeploymentGroup.ELBInfo}
 */
export interface CodeDeployDeploymentGroupELBInfo {
  Name?: string;
}
/**
 * Type definition for AWS::CodeDeploy::DeploymentGroup.GitHubLocation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-deployment-revision-githublocation.html | AWS::CodeDeploy::DeploymentGroup.GitHubLocation}
 */
export interface CodeDeployDeploymentGroupGitHubLocation {
  CommitId: string;
  Repository: string;
}
/**
 * Type definition for AWS::CodeDeploy::DeploymentGroup.GreenFleetProvisioningOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-greenfleetprovisioningoption.html | AWS::CodeDeploy::DeploymentGroup.GreenFleetProvisioningOption}
 */
export interface CodeDeployDeploymentGroupGreenFleetProvisioningOption {
  Action?: string;
}
/**
 * Type definition for AWS::CodeDeploy::DeploymentGroup.LoadBalancerInfo
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-loadbalancerinfo.html | AWS::CodeDeploy::DeploymentGroup.LoadBalancerInfo}
 */
export interface CodeDeployDeploymentGroupLoadBalancerInfo {
  ElbInfoList?: any[];
  TargetGroupInfoList?: any[];
  TargetGroupPairInfoList?: any[];
}
/**
 * Type definition for AWS::CodeDeploy::DeploymentGroup.OnPremisesTagSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-onpremisestagset.html | AWS::CodeDeploy::DeploymentGroup.OnPremisesTagSet}
 */
export interface CodeDeployDeploymentGroupOnPremisesTagSet {
  OnPremisesTagSetList?: any[];
}
/**
 * Type definition for AWS::CodeDeploy::DeploymentGroup.OnPremisesTagSetListObject
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-onpremisestagsetlistobject.html | AWS::CodeDeploy::DeploymentGroup.OnPremisesTagSetListObject}
 */
export interface CodeDeployDeploymentGroupOnPremisesTagSetListObject {
  OnPremisesTagGroup?: any[];
}
/**
 * Type definition for AWS::CodeDeploy::DeploymentGroup.RevisionLocation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-deployment-revision.html | AWS::CodeDeploy::DeploymentGroup.RevisionLocation}
 */
export interface CodeDeployDeploymentGroupRevisionLocation {
  GitHubLocation?: CodeDeployDeploymentGroupGitHubLocation;
  RevisionType?: string;
  S3Location?: CodeDeployDeploymentGroupS3Location;
}
/**
 * Type definition for AWS::CodeDeploy::DeploymentGroup.S3Location
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-deployment-revision-s3location.html | AWS::CodeDeploy::DeploymentGroup.S3Location}
 */
export interface CodeDeployDeploymentGroupS3Location {
  Bucket: string;
  BundleType?: string;
  ETag?: string;
  Key: string;
  Version?: string;
}
/**
 * Type definition for AWS::CodeDeploy::DeploymentGroup.TagFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-tagfilter.html | AWS::CodeDeploy::DeploymentGroup.TagFilter}
 */
export interface CodeDeployDeploymentGroupTagFilter {
  Key?: string;
  Type?: string;
  Value?: string;
}
/**
 * Type definition for AWS::CodeDeploy::DeploymentGroup.TargetGroupInfo
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-targetgroupinfo.html | AWS::CodeDeploy::DeploymentGroup.TargetGroupInfo}
 */
export interface CodeDeployDeploymentGroupTargetGroupInfo {
  Name?: string;
}
/**
 * Type definition for AWS::CodeDeploy::DeploymentGroup.TargetGroupPairInfo
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-targetgrouppairinfo.html | AWS::CodeDeploy::DeploymentGroup.TargetGroupPairInfo}
 */
export interface CodeDeployDeploymentGroupTargetGroupPairInfo {
  ProdTrafficRoute?: CodeDeployDeploymentGroupTrafficRoute;
  TargetGroups?: any[];
  TestTrafficRoute?: CodeDeployDeploymentGroupTrafficRoute;
}
/**
 * Type definition for AWS::CodeDeploy::DeploymentGroup.TrafficRoute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-trafficroute.html | AWS::CodeDeploy::DeploymentGroup.TrafficRoute}
 */
export interface CodeDeployDeploymentGroupTrafficRoute {
  ListenerArns?: any[];
}
/**
 * Type definition for AWS::CodeDeploy::DeploymentGroup.TriggerConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-triggerconfig.html | AWS::CodeDeploy::DeploymentGroup.TriggerConfig}
 */
export interface CodeDeployDeploymentGroupTriggerConfig {
  TriggerEvents?: any[];
  TriggerName?: string;
  TriggerTargetArn?: string;
}
/**
 * Type definition for AWS::CodeDeploy::Application
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-application.html | AWS::CodeDeploy::Application}
 */
export interface CodeDeployApplicationProps {
  ApplicationName?: string;
  ComputePlatform?: string;
  Tags?: Tag[];
}
/**
 * Resource class for AWS::CodeDeploy::Application
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-application.html | AWS::CodeDeploy::Application}
 */
export class CodeDeployApplication extends ResourceBase<
  "AWS::CodeDeploy::Application",
  CodeDeployApplicationProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::CodeDeploy::Application";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: CodeDeployApplicationProps,
    options?: ResourceOptions,
  ) {
    super(
      CodeDeployApplication.Type,
      CodeDeployApplication.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CodeDeploy::DeploymentConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html | AWS::CodeDeploy::DeploymentConfig}
 */
export interface CodeDeployDeploymentConfigProps {
  ComputePlatform?: string;
  DeploymentConfigName?: string;
  TrafficRoutingConfig?: CodeDeployDeploymentConfigTrafficRoutingConfig;
  MinimumHealthyHosts?: CodeDeployDeploymentConfigMinimumHealthyHosts;
}
/**
 * Resource class for AWS::CodeDeploy::DeploymentConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html | AWS::CodeDeploy::DeploymentConfig}
 */
export class CodeDeployDeploymentConfig extends ResourceBase<
  "AWS::CodeDeploy::DeploymentConfig",
  CodeDeployDeploymentConfigProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::CodeDeploy::DeploymentConfig";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: CodeDeployDeploymentConfigProps,
    options?: ResourceOptions,
  ) {
    super(
      CodeDeployDeploymentConfig.Type,
      CodeDeployDeploymentConfig.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CodeDeploy::DeploymentGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html | AWS::CodeDeploy::DeploymentGroup}
 */
export interface CodeDeployDeploymentGroupProps {
  AlarmConfiguration?: CodeDeployDeploymentGroupAlarmConfiguration;
  ApplicationName: string;
  AutoRollbackConfiguration?: CodeDeployDeploymentGroupAutoRollbackConfiguration;
  AutoScalingGroups?: any[];
  BlueGreenDeploymentConfiguration?: CodeDeployDeploymentGroupBlueGreenDeploymentConfiguration;
  Deployment?: CodeDeployDeploymentGroupDeployment;
  DeploymentConfigName?: string;
  DeploymentGroupName?: string;
  DeploymentStyle?: CodeDeployDeploymentGroupDeploymentStyle;
  ECSServices?: any[];
  Ec2TagFilters?: any[];
  Ec2TagSet?: CodeDeployDeploymentGroupEC2TagSet;
  LoadBalancerInfo?: CodeDeployDeploymentGroupLoadBalancerInfo;
  OnPremisesInstanceTagFilters?: any[];
  OnPremisesTagSet?: CodeDeployDeploymentGroupOnPremisesTagSet;
  OutdatedInstancesStrategy?: string;
  ServiceRoleArn: string;
  Tags?: Tag[];
  TriggerConfigurations?: any[];
}
/**
 * Resource class for AWS::CodeDeploy::DeploymentGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html | AWS::CodeDeploy::DeploymentGroup}
 */
export class CodeDeployDeploymentGroup extends ResourceBase<
  "AWS::CodeDeploy::DeploymentGroup",
  CodeDeployDeploymentGroupProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::CodeDeploy::DeploymentGroup";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: CodeDeployDeploymentGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      CodeDeployDeploymentGroup.Type,
      CodeDeployDeploymentGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
