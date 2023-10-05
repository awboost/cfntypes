import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::SimSpaceWeaver::Simulation.S3Location
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-simspaceweaver-simulation-s3location.html | AWS::SimSpaceWeaver::Simulation.S3Location}
 */
export interface SimSpaceWeaverSimulationS3Location {
  BucketName: string;
  ObjectKey: string;
}
/**
 * Type definition for AWS::SimSpaceWeaver::Simulation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-simspaceweaver-simulation.html | AWS::SimSpaceWeaver::Simulation}
 */
export interface SimSpaceWeaverSimulationProps {
  SchemaS3Location?: SimSpaceWeaverSimulationS3Location;
  SnapshotS3Location?: SimSpaceWeaverSimulationS3Location;
  MaximumDuration?: string;
  RoleArn: string;
  Name: string;
}
/**
 * Attributes type definition for AWS::SimSpaceWeaver::Simulation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-simspaceweaver-simulation.html | AWS::SimSpaceWeaver::Simulation}
 */
export interface SimSpaceWeaverSimulationAttribs {
  DescribePayload?: string;
}
/**
 * Resource class for AWS::SimSpaceWeaver::Simulation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-simspaceweaver-simulation.html | AWS::SimSpaceWeaver::Simulation}
 */
export class SimSpaceWeaverSimulation extends ResourceBase<
  "AWS::SimSpaceWeaver::Simulation",
  SimSpaceWeaverSimulationProps,
  SimSpaceWeaverSimulationAttribs
> {
  public static readonly Type = "AWS::SimSpaceWeaver::Simulation";
  public static readonly AttributeNames: readonly (keyof SimSpaceWeaverSimulationAttribs)[] =
    ["DescribePayload"];
  constructor(
    logicalId: string,
    properties: SimSpaceWeaverSimulationProps,
    options?: ResourceOptions,
  ) {
    super(
      SimSpaceWeaverSimulation.Type,
      SimSpaceWeaverSimulation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
