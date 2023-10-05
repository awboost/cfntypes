import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::GameLift::Alias.RoutingStrategy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-alias-routingstrategy.html | AWS::GameLift::Alias.RoutingStrategy}
 */
export interface GameLiftAliasRoutingStrategy {
  Type: string;
  Message?: string;
  FleetId?: string;
}
/**
 * Type definition for AWS::GameLift::Build.StorageLocation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-build-storagelocation.html | AWS::GameLift::Build.StorageLocation}
 */
export interface GameLiftBuildStorageLocation {
  ObjectVersion?: string;
  Bucket: string;
  Key: string;
  RoleArn: string;
}
/**
 * Type definition for AWS::GameLift::Fleet.AnywhereConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-anywhereconfiguration.html | AWS::GameLift::Fleet.AnywhereConfiguration}
 */
export interface GameLiftFleetAnywhereConfiguration {
  Cost: string;
}
/**
 * Type definition for AWS::GameLift::Fleet.CertificateConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-certificateconfiguration.html | AWS::GameLift::Fleet.CertificateConfiguration}
 */
export interface GameLiftFleetCertificateConfiguration {
  CertificateType: string;
}
/**
 * Type definition for AWS::GameLift::Fleet.IpPermission
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-ippermission.html | AWS::GameLift::Fleet.IpPermission}
 */
export interface GameLiftFleetIpPermission {
  IpRange: string;
  FromPort: number;
  ToPort: number;
  Protocol: string;
}
/**
 * Type definition for AWS::GameLift::Fleet.LocationCapacity
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-locationcapacity.html | AWS::GameLift::Fleet.LocationCapacity}
 */
export interface GameLiftFleetLocationCapacity {
  MinSize: number;
  DesiredEC2Instances: number;
  MaxSize: number;
}
/**
 * Type definition for AWS::GameLift::Fleet.LocationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-locationconfiguration.html | AWS::GameLift::Fleet.LocationConfiguration}
 */
export interface GameLiftFleetLocationConfiguration {
  LocationCapacity?: GameLiftFleetLocationCapacity;
  Location: string;
}
/**
 * Type definition for AWS::GameLift::Fleet.ResourceCreationLimitPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-resourcecreationlimitpolicy.html | AWS::GameLift::Fleet.ResourceCreationLimitPolicy}
 */
export interface GameLiftFleetResourceCreationLimitPolicy {
  PolicyPeriodInMinutes?: number;
  NewGameSessionsPerCreator?: number;
}
/**
 * Type definition for AWS::GameLift::Fleet.RuntimeConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-runtimeconfiguration.html | AWS::GameLift::Fleet.RuntimeConfiguration}
 */
export interface GameLiftFleetRuntimeConfiguration {
  ServerProcesses?: any[];
  MaxConcurrentGameSessionActivations?: number;
  GameSessionActivationTimeoutSeconds?: number;
}
/**
 * Type definition for AWS::GameLift::Fleet.ServerProcess
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-serverprocess.html | AWS::GameLift::Fleet.ServerProcess}
 */
export interface GameLiftFleetServerProcess {
  ConcurrentExecutions: number;
  Parameters?: string;
  LaunchPath: string;
}
/**
 * Type definition for AWS::GameLift::GameServerGroup.AutoScalingPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-autoscalingpolicy.html | AWS::GameLift::GameServerGroup.AutoScalingPolicy}
 */
export interface GameLiftGameServerGroupAutoScalingPolicy {
  TargetTrackingConfiguration: GameLiftGameServerGroupTargetTrackingConfiguration;
  EstimatedInstanceWarmup?: number;
}
/**
 * Type definition for AWS::GameLift::GameServerGroup.InstanceDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-instancedefinition.html | AWS::GameLift::GameServerGroup.InstanceDefinition}
 */
export interface GameLiftGameServerGroupInstanceDefinition {
  WeightedCapacity?: string;
  InstanceType: string;
}
/**
 * Type definition for AWS::GameLift::GameServerGroup.LaunchTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-launchtemplate.html | AWS::GameLift::GameServerGroup.LaunchTemplate}
 */
export interface GameLiftGameServerGroupLaunchTemplate {
  LaunchTemplateName?: string;
  Version?: string;
  LaunchTemplateId?: string;
}
/**
 * Type definition for AWS::GameLift::GameServerGroup.TargetTrackingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-targettrackingconfiguration.html | AWS::GameLift::GameServerGroup.TargetTrackingConfiguration}
 */
export interface GameLiftGameServerGroupTargetTrackingConfiguration {
  TargetValue: number;
}
/**
 * Type definition for AWS::GameLift::GameSessionQueue.Destination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gamesessionqueue-destination.html | AWS::GameLift::GameSessionQueue.Destination}
 */
export interface GameLiftGameSessionQueueDestination {
  DestinationArn?: string;
}
/**
 * Type definition for AWS::GameLift::GameSessionQueue.FilterConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gamesessionqueue-filterconfiguration.html | AWS::GameLift::GameSessionQueue.FilterConfiguration}
 */
export interface GameLiftGameSessionQueueFilterConfiguration {
  AllowedLocations?: any[];
}
/**
 * Type definition for AWS::GameLift::GameSessionQueue.PlayerLatencyPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gamesessionqueue-playerlatencypolicy.html | AWS::GameLift::GameSessionQueue.PlayerLatencyPolicy}
 */
export interface GameLiftGameSessionQueuePlayerLatencyPolicy {
  PolicyDurationSeconds?: number;
  MaximumIndividualPlayerLatencyMilliseconds?: number;
}
/**
 * Type definition for AWS::GameLift::GameSessionQueue.PriorityConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gamesessionqueue-priorityconfiguration.html | AWS::GameLift::GameSessionQueue.PriorityConfiguration}
 */
export interface GameLiftGameSessionQueuePriorityConfiguration {
  PriorityOrder?: any[];
  LocationOrder?: any[];
}
/**
 * Type definition for AWS::GameLift::MatchmakingConfiguration.GameProperty
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-matchmakingconfiguration-gameproperty.html | AWS::GameLift::MatchmakingConfiguration.GameProperty}
 */
export interface GameLiftMatchmakingConfigurationGameProperty {
  Value: string;
  Key: string;
}
/**
 * Type definition for AWS::GameLift::Script.S3Location
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-script-s3location.html | AWS::GameLift::Script.S3Location}
 */
export interface GameLiftScriptS3Location {
  ObjectVersion?: string;
  Bucket: string;
  Key: string;
  RoleArn: string;
}
/**
 * Type definition for AWS::GameLift::Alias
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-alias.html | AWS::GameLift::Alias}
 */
export interface GameLiftAliasProps {
  Description?: string;
  RoutingStrategy: GameLiftAliasRoutingStrategy;
  Name: string;
}
/**
 * Attributes type definition for AWS::GameLift::Alias
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-alias.html | AWS::GameLift::Alias}
 */
export interface GameLiftAliasAttribs {
  AliasId?: string;
}
/**
 * Resource class for AWS::GameLift::Alias
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-alias.html | AWS::GameLift::Alias}
 */
export class GameLiftAlias extends ResourceBase<
  "AWS::GameLift::Alias",
  GameLiftAliasProps,
  GameLiftAliasAttribs
> {
  public static readonly Type = "AWS::GameLift::Alias";
  public static readonly AttributeNames: readonly (keyof GameLiftAliasAttribs)[] =
    ["AliasId"];
  constructor(
    logicalId: string,
    properties: GameLiftAliasProps,
    options?: ResourceOptions,
  ) {
    super(
      GameLiftAlias.Type,
      GameLiftAlias.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::GameLift::Build
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-build.html | AWS::GameLift::Build}
 */
export interface GameLiftBuildProps {
  OperatingSystem?: string;
  Version?: string;
  ServerSdkVersion?: string;
  StorageLocation?: GameLiftBuildStorageLocation;
  Name?: string;
}
/**
 * Attributes type definition for AWS::GameLift::Build
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-build.html | AWS::GameLift::Build}
 */
export interface GameLiftBuildAttribs {
  BuildId?: string;
}
/**
 * Resource class for AWS::GameLift::Build
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-build.html | AWS::GameLift::Build}
 */
export class GameLiftBuild extends ResourceBase<
  "AWS::GameLift::Build",
  GameLiftBuildProps,
  GameLiftBuildAttribs
> {
  public static readonly Type = "AWS::GameLift::Build";
  public static readonly AttributeNames: readonly (keyof GameLiftBuildAttribs)[] =
    ["BuildId"];
  constructor(
    logicalId: string,
    properties: GameLiftBuildProps,
    options?: ResourceOptions,
  ) {
    super(
      GameLiftBuild.Type,
      GameLiftBuild.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::GameLift::Fleet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html | AWS::GameLift::Fleet}
 */
export interface GameLiftFleetProps {
  Description?: string;
  PeerVpcId?: string;
  FleetType?: string;
  EC2InboundPermissions?: any[];
  Locations?: any[];
  NewGameSessionProtectionPolicy?: string;
  ScriptId?: string;
  ComputeType?: string;
  MaxSize?: number;
  RuntimeConfiguration?: GameLiftFleetRuntimeConfiguration;
  Name: string;
  MinSize?: number;
  PeerVpcAwsAccountId?: string;
  AnywhereConfiguration?: GameLiftFleetAnywhereConfiguration;
  InstanceRoleARN?: string;
  MetricGroups?: any[];
  BuildId?: string;
  ResourceCreationLimitPolicy?: GameLiftFleetResourceCreationLimitPolicy;
  EC2InstanceType?: string;
  CertificateConfiguration?: GameLiftFleetCertificateConfiguration;
  DesiredEC2Instances?: number;
}
/**
 * Attributes type definition for AWS::GameLift::Fleet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html | AWS::GameLift::Fleet}
 */
export interface GameLiftFleetAttribs {
  FleetId?: string;
}
/**
 * Resource class for AWS::GameLift::Fleet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html | AWS::GameLift::Fleet}
 */
export class GameLiftFleet extends ResourceBase<
  "AWS::GameLift::Fleet",
  GameLiftFleetProps,
  GameLiftFleetAttribs
> {
  public static readonly Type = "AWS::GameLift::Fleet";
  public static readonly AttributeNames: readonly (keyof GameLiftFleetAttribs)[] =
    ["FleetId"];
  constructor(
    logicalId: string,
    properties: GameLiftFleetProps,
    options?: ResourceOptions,
  ) {
    super(
      GameLiftFleet.Type,
      GameLiftFleet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::GameLift::GameServerGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gameservergroup.html | AWS::GameLift::GameServerGroup}
 */
export interface GameLiftGameServerGroupProps {
  AutoScalingPolicy?: GameLiftGameServerGroupAutoScalingPolicy;
  MinSize?: number;
  DeleteOption?: string;
  BalancingStrategy?: string;
  GameServerGroupName: string;
  LaunchTemplate?: GameLiftGameServerGroupLaunchTemplate;
  GameServerProtectionPolicy?: string;
  VpcSubnets?: any[];
  MaxSize?: number;
  InstanceDefinitions: any[];
  RoleArn: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::GameLift::GameServerGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gameservergroup.html | AWS::GameLift::GameServerGroup}
 */
export interface GameLiftGameServerGroupAttribs {
  AutoScalingGroupArn?: string;
  GameServerGroupArn?: string;
}
/**
 * Resource class for AWS::GameLift::GameServerGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gameservergroup.html | AWS::GameLift::GameServerGroup}
 */
export class GameLiftGameServerGroup extends ResourceBase<
  "AWS::GameLift::GameServerGroup",
  GameLiftGameServerGroupProps,
  GameLiftGameServerGroupAttribs
> {
  public static readonly Type = "AWS::GameLift::GameServerGroup";
  public static readonly AttributeNames: readonly (keyof GameLiftGameServerGroupAttribs)[] =
    ["AutoScalingGroupArn", "GameServerGroupArn"];
  constructor(
    logicalId: string,
    properties: GameLiftGameServerGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      GameLiftGameServerGroup.Type,
      GameLiftGameServerGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::GameLift::GameSessionQueue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html | AWS::GameLift::GameSessionQueue}
 */
export interface GameLiftGameSessionQueueProps {
  TimeoutInSeconds?: number;
  PlayerLatencyPolicies?: any[];
  Destinations?: any[];
  NotificationTarget?: string;
  FilterConfiguration?: GameLiftGameSessionQueueFilterConfiguration;
  CustomEventData?: string;
  Tags?: Tag[];
  Name: string;
  PriorityConfiguration?: GameLiftGameSessionQueuePriorityConfiguration;
}
/**
 * Attributes type definition for AWS::GameLift::GameSessionQueue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html | AWS::GameLift::GameSessionQueue}
 */
export interface GameLiftGameSessionQueueAttribs {
  Arn?: string;
  Name?: string;
}
/**
 * Resource class for AWS::GameLift::GameSessionQueue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html | AWS::GameLift::GameSessionQueue}
 */
export class GameLiftGameSessionQueue extends ResourceBase<
  "AWS::GameLift::GameSessionQueue",
  GameLiftGameSessionQueueProps,
  GameLiftGameSessionQueueAttribs
> {
  public static readonly Type = "AWS::GameLift::GameSessionQueue";
  public static readonly AttributeNames: readonly (keyof GameLiftGameSessionQueueAttribs)[] =
    ["Arn", "Name"];
  constructor(
    logicalId: string,
    properties: GameLiftGameSessionQueueProps,
    options?: ResourceOptions,
  ) {
    super(
      GameLiftGameSessionQueue.Type,
      GameLiftGameSessionQueue.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::GameLift::Location
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-location.html | AWS::GameLift::Location}
 */
export interface GameLiftLocationProps {
  Tags?: Tag[];
  LocationName: string;
}
/**
 * Attributes type definition for AWS::GameLift::Location
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-location.html | AWS::GameLift::Location}
 */
export interface GameLiftLocationAttribs {
  LocationArn?: string;
}
/**
 * Resource class for AWS::GameLift::Location
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-location.html | AWS::GameLift::Location}
 */
export class GameLiftLocation extends ResourceBase<
  "AWS::GameLift::Location",
  GameLiftLocationProps,
  GameLiftLocationAttribs
> {
  public static readonly Type = "AWS::GameLift::Location";
  public static readonly AttributeNames: readonly (keyof GameLiftLocationAttribs)[] =
    ["LocationArn"];
  constructor(
    logicalId: string,
    properties: GameLiftLocationProps,
    options?: ResourceOptions,
  ) {
    super(
      GameLiftLocation.Type,
      GameLiftLocation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::GameLift::MatchmakingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingconfiguration.html | AWS::GameLift::MatchmakingConfiguration}
 */
export interface GameLiftMatchmakingConfigurationProps {
  GameProperties?: any[];
  GameSessionData?: string;
  Description?: string;
  AcceptanceTimeoutSeconds?: number;
  NotificationTarget?: string;
  CustomEventData?: string;
  Name: string;
  AdditionalPlayerCount?: number;
  BackfillMode?: string;
  RequestTimeoutSeconds: number;
  AcceptanceRequired: boolean;
  FlexMatchMode?: string;
  RuleSetName: string;
  GameSessionQueueArns?: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::GameLift::MatchmakingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingconfiguration.html | AWS::GameLift::MatchmakingConfiguration}
 */
export interface GameLiftMatchmakingConfigurationAttribs {
  Arn?: string;
  Name?: string;
}
/**
 * Resource class for AWS::GameLift::MatchmakingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingconfiguration.html | AWS::GameLift::MatchmakingConfiguration}
 */
export class GameLiftMatchmakingConfiguration extends ResourceBase<
  "AWS::GameLift::MatchmakingConfiguration",
  GameLiftMatchmakingConfigurationProps,
  GameLiftMatchmakingConfigurationAttribs
> {
  public static readonly Type = "AWS::GameLift::MatchmakingConfiguration";
  public static readonly AttributeNames: readonly (keyof GameLiftMatchmakingConfigurationAttribs)[] =
    ["Arn", "Name"];
  constructor(
    logicalId: string,
    properties: GameLiftMatchmakingConfigurationProps,
    options?: ResourceOptions,
  ) {
    super(
      GameLiftMatchmakingConfiguration.Type,
      GameLiftMatchmakingConfiguration.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::GameLift::MatchmakingRuleSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingruleset.html | AWS::GameLift::MatchmakingRuleSet}
 */
export interface GameLiftMatchmakingRuleSetProps {
  RuleSetBody: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::GameLift::MatchmakingRuleSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingruleset.html | AWS::GameLift::MatchmakingRuleSet}
 */
export interface GameLiftMatchmakingRuleSetAttribs {
  Arn?: string;
  Name?: string;
}
/**
 * Resource class for AWS::GameLift::MatchmakingRuleSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingruleset.html | AWS::GameLift::MatchmakingRuleSet}
 */
export class GameLiftMatchmakingRuleSet extends ResourceBase<
  "AWS::GameLift::MatchmakingRuleSet",
  GameLiftMatchmakingRuleSetProps,
  GameLiftMatchmakingRuleSetAttribs
> {
  public static readonly Type = "AWS::GameLift::MatchmakingRuleSet";
  public static readonly AttributeNames: readonly (keyof GameLiftMatchmakingRuleSetAttribs)[] =
    ["Arn", "Name"];
  constructor(
    logicalId: string,
    properties: GameLiftMatchmakingRuleSetProps,
    options?: ResourceOptions,
  ) {
    super(
      GameLiftMatchmakingRuleSet.Type,
      GameLiftMatchmakingRuleSet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::GameLift::Script
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-script.html | AWS::GameLift::Script}
 */
export interface GameLiftScriptProps {
  Version?: string;
  StorageLocation: GameLiftScriptS3Location;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::GameLift::Script
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-script.html | AWS::GameLift::Script}
 */
export interface GameLiftScriptAttribs {
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::GameLift::Script
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-script.html | AWS::GameLift::Script}
 */
export class GameLiftScript extends ResourceBase<
  "AWS::GameLift::Script",
  GameLiftScriptProps,
  GameLiftScriptAttribs
> {
  public static readonly Type = "AWS::GameLift::Script";
  public static readonly AttributeNames: readonly (keyof GameLiftScriptAttribs)[] =
    ["Id", "Arn"];
  constructor(
    logicalId: string,
    properties: GameLiftScriptProps,
    options?: ResourceOptions,
  ) {
    super(
      GameLiftScript.Type,
      GameLiftScript.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
