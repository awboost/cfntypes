import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::RoboMaker::RobotApplication.RobotSoftwareSuite
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-robomaker-robotapplication-robotsoftwaresuite.html | AWS::RoboMaker::RobotApplication.RobotSoftwareSuite}
 */
export interface RoboMakerRobotApplicationRobotSoftwareSuite {
  Version?: string;
  Name: string;
}
/**
 * Type definition for AWS::RoboMaker::RobotApplication.SourceConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-robomaker-robotapplication-sourceconfig.html | AWS::RoboMaker::RobotApplication.SourceConfig}
 */
export interface RoboMakerRobotApplicationSourceConfig {
  S3Bucket: string;
  Architecture: string;
  S3Key: string;
}
/**
 * Type definition for AWS::RoboMaker::SimulationApplication.RenderingEngine
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-robomaker-simulationapplication-renderingengine.html | AWS::RoboMaker::SimulationApplication.RenderingEngine}
 */
export interface RoboMakerSimulationApplicationRenderingEngine {
  Version: string;
  Name: string;
}
/**
 * Type definition for AWS::RoboMaker::SimulationApplication.RobotSoftwareSuite
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-robomaker-simulationapplication-robotsoftwaresuite.html | AWS::RoboMaker::SimulationApplication.RobotSoftwareSuite}
 */
export interface RoboMakerSimulationApplicationRobotSoftwareSuite {
  Version?: string;
  Name: string;
}
/**
 * Type definition for AWS::RoboMaker::SimulationApplication.SimulationSoftwareSuite
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-robomaker-simulationapplication-simulationsoftwaresuite.html | AWS::RoboMaker::SimulationApplication.SimulationSoftwareSuite}
 */
export interface RoboMakerSimulationApplicationSimulationSoftwareSuite {
  Version?: string;
  Name: string;
}
/**
 * Type definition for AWS::RoboMaker::SimulationApplication.SourceConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-robomaker-simulationapplication-sourceconfig.html | AWS::RoboMaker::SimulationApplication.SourceConfig}
 */
export interface RoboMakerSimulationApplicationSourceConfig {
  S3Bucket: string;
  Architecture: string;
  S3Key: string;
}
/**
 * Type definition for AWS::RoboMaker::Fleet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-fleet.html | AWS::RoboMaker::Fleet}
 */
export interface RoboMakerFleetProps {
  Tags?: Record<string, Tag>;
  Name?: string;
}
/**
 * Attributes type definition for AWS::RoboMaker::Fleet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-fleet.html | AWS::RoboMaker::Fleet}
 */
export interface RoboMakerFleetAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::RoboMaker::Fleet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-fleet.html | AWS::RoboMaker::Fleet}
 */
export class RoboMakerFleet extends ResourceBase<
  "AWS::RoboMaker::Fleet",
  RoboMakerFleetProps,
  RoboMakerFleetAttribs
> {
  public static readonly Type = "AWS::RoboMaker::Fleet";
  public static readonly AttributeNames: readonly (keyof RoboMakerFleetAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: RoboMakerFleetProps,
    options?: ResourceOptions,
  ) {
    super(
      RoboMakerFleet.Type,
      RoboMakerFleet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::RoboMaker::Robot
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robot.html | AWS::RoboMaker::Robot}
 */
export interface RoboMakerRobotProps {
  Fleet?: string;
  Architecture: string;
  GreengrassGroupId: string;
  Tags?: Record<string, Tag>;
  Name?: string;
}
/**
 * Attributes type definition for AWS::RoboMaker::Robot
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robot.html | AWS::RoboMaker::Robot}
 */
export interface RoboMakerRobotAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::RoboMaker::Robot
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robot.html | AWS::RoboMaker::Robot}
 */
export class RoboMakerRobot extends ResourceBase<
  "AWS::RoboMaker::Robot",
  RoboMakerRobotProps,
  RoboMakerRobotAttribs
> {
  public static readonly Type = "AWS::RoboMaker::Robot";
  public static readonly AttributeNames: readonly (keyof RoboMakerRobotAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: RoboMakerRobotProps,
    options?: ResourceOptions,
  ) {
    super(
      RoboMakerRobot.Type,
      RoboMakerRobot.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::RoboMaker::RobotApplication
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robotapplication.html | AWS::RoboMaker::RobotApplication}
 */
export interface RoboMakerRobotApplicationProps {
  CurrentRevisionId?: string;
  Environment?: string;
  RobotSoftwareSuite: RoboMakerRobotApplicationRobotSoftwareSuite;
  Sources?: any[];
  Tags?: Record<string, Tag>;
  Name?: string;
}
/**
 * Attributes type definition for AWS::RoboMaker::RobotApplication
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robotapplication.html | AWS::RoboMaker::RobotApplication}
 */
export interface RoboMakerRobotApplicationAttribs {
  CurrentRevisionId?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::RoboMaker::RobotApplication
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robotapplication.html | AWS::RoboMaker::RobotApplication}
 */
export class RoboMakerRobotApplication extends ResourceBase<
  "AWS::RoboMaker::RobotApplication",
  RoboMakerRobotApplicationProps,
  RoboMakerRobotApplicationAttribs
> {
  public static readonly Type = "AWS::RoboMaker::RobotApplication";
  public static readonly AttributeNames: readonly (keyof RoboMakerRobotApplicationAttribs)[] =
    ["CurrentRevisionId", "Arn"];
  constructor(
    logicalId: string,
    properties: RoboMakerRobotApplicationProps,
    options?: ResourceOptions,
  ) {
    super(
      RoboMakerRobotApplication.Type,
      RoboMakerRobotApplication.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::RoboMaker::RobotApplicationVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robotapplicationversion.html | AWS::RoboMaker::RobotApplicationVersion}
 */
export interface RoboMakerRobotApplicationVersionProps {
  CurrentRevisionId?: string;
  Application: string;
}
/**
 * Attributes type definition for AWS::RoboMaker::RobotApplicationVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robotapplicationversion.html | AWS::RoboMaker::RobotApplicationVersion}
 */
export interface RoboMakerRobotApplicationVersionAttribs {
  ApplicationVersion?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::RoboMaker::RobotApplicationVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robotapplicationversion.html | AWS::RoboMaker::RobotApplicationVersion}
 */
export class RoboMakerRobotApplicationVersion extends ResourceBase<
  "AWS::RoboMaker::RobotApplicationVersion",
  RoboMakerRobotApplicationVersionProps,
  RoboMakerRobotApplicationVersionAttribs
> {
  public static readonly Type = "AWS::RoboMaker::RobotApplicationVersion";
  public static readonly AttributeNames: readonly (keyof RoboMakerRobotApplicationVersionAttribs)[] =
    ["ApplicationVersion", "Arn"];
  constructor(
    logicalId: string,
    properties: RoboMakerRobotApplicationVersionProps,
    options?: ResourceOptions,
  ) {
    super(
      RoboMakerRobotApplicationVersion.Type,
      RoboMakerRobotApplicationVersion.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::RoboMaker::SimulationApplication
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplication.html | AWS::RoboMaker::SimulationApplication}
 */
export interface RoboMakerSimulationApplicationProps {
  RenderingEngine?: RoboMakerSimulationApplicationRenderingEngine;
  SimulationSoftwareSuite: RoboMakerSimulationApplicationSimulationSoftwareSuite;
  CurrentRevisionId?: string;
  Environment?: string;
  RobotSoftwareSuite: RoboMakerSimulationApplicationRobotSoftwareSuite;
  Sources?: any[];
  Tags?: Record<string, Tag>;
  Name?: string;
}
/**
 * Attributes type definition for AWS::RoboMaker::SimulationApplication
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplication.html | AWS::RoboMaker::SimulationApplication}
 */
export interface RoboMakerSimulationApplicationAttribs {
  CurrentRevisionId?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::RoboMaker::SimulationApplication
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplication.html | AWS::RoboMaker::SimulationApplication}
 */
export class RoboMakerSimulationApplication extends ResourceBase<
  "AWS::RoboMaker::SimulationApplication",
  RoboMakerSimulationApplicationProps,
  RoboMakerSimulationApplicationAttribs
> {
  public static readonly Type = "AWS::RoboMaker::SimulationApplication";
  public static readonly AttributeNames: readonly (keyof RoboMakerSimulationApplicationAttribs)[] =
    ["CurrentRevisionId", "Arn"];
  constructor(
    logicalId: string,
    properties: RoboMakerSimulationApplicationProps,
    options?: ResourceOptions,
  ) {
    super(
      RoboMakerSimulationApplication.Type,
      RoboMakerSimulationApplication.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::RoboMaker::SimulationApplicationVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplicationversion.html | AWS::RoboMaker::SimulationApplicationVersion}
 */
export interface RoboMakerSimulationApplicationVersionProps {
  CurrentRevisionId?: string;
  Application: string;
}
/**
 * Attributes type definition for AWS::RoboMaker::SimulationApplicationVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplicationversion.html | AWS::RoboMaker::SimulationApplicationVersion}
 */
export interface RoboMakerSimulationApplicationVersionAttribs {
  ApplicationVersion?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::RoboMaker::SimulationApplicationVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplicationversion.html | AWS::RoboMaker::SimulationApplicationVersion}
 */
export class RoboMakerSimulationApplicationVersion extends ResourceBase<
  "AWS::RoboMaker::SimulationApplicationVersion",
  RoboMakerSimulationApplicationVersionProps,
  RoboMakerSimulationApplicationVersionAttribs
> {
  public static readonly Type = "AWS::RoboMaker::SimulationApplicationVersion";
  public static readonly AttributeNames: readonly (keyof RoboMakerSimulationApplicationVersionAttribs)[] =
    ["ApplicationVersion", "Arn"];
  constructor(
    logicalId: string,
    properties: RoboMakerSimulationApplicationVersionProps,
    options?: ResourceOptions,
  ) {
    super(
      RoboMakerSimulationApplicationVersion.Type,
      RoboMakerSimulationApplicationVersion.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
