import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::OSIS::Pipeline.CloudWatchLogDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-osis-pipeline-cloudwatchlogdestination.html | AWS::OSIS::Pipeline.CloudWatchLogDestination}
 */
export interface OSISPipelineCloudWatchLogDestination {
  LogGroup?: string;
}
/**
 * Type definition for AWS::OSIS::Pipeline.LogPublishingOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-osis-pipeline-logpublishingoptions.html | AWS::OSIS::Pipeline.LogPublishingOptions}
 */
export interface OSISPipelineLogPublishingOptions {
  CloudWatchLogDestination?: OSISPipelineCloudWatchLogDestination;
  IsLoggingEnabled?: boolean;
}
/**
 * Type definition for AWS::OSIS::Pipeline.VpcEndpoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-osis-pipeline-vpcendpoint.html | AWS::OSIS::Pipeline.VpcEndpoint}
 */
export interface OSISPipelineVpcEndpoint {
  VpcId?: string;
  VpcOptions?: OSISPipelineVpcOptions;
  VpcEndpointId?: string;
}
/**
 * Type definition for AWS::OSIS::Pipeline.VpcOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-osis-pipeline-vpcoptions.html | AWS::OSIS::Pipeline.VpcOptions}
 */
export interface OSISPipelineVpcOptions {
  SecurityGroupIds?: any[];
  SubnetIds?: any[];
}
/**
 * Type definition for AWS::OSIS::Pipeline
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html | AWS::OSIS::Pipeline}
 */
export interface OSISPipelineProps {
  PipelineConfigurationBody: string;
  MinUnits: number;
  PipelineName: string;
  VpcOptions?: OSISPipelineVpcOptions;
  MaxUnits: number;
  LogPublishingOptions?: OSISPipelineLogPublishingOptions;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::OSIS::Pipeline
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html | AWS::OSIS::Pipeline}
 */
export interface OSISPipelineAttribs {
  PipelineArn?: string;
  VpcEndpoints?: any[];
  IngestEndpointUrls?: any[];
}
/**
 * Resource class for AWS::OSIS::Pipeline
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html | AWS::OSIS::Pipeline}
 */
export class OSISPipeline extends ResourceBase<
  "AWS::OSIS::Pipeline",
  OSISPipelineProps,
  OSISPipelineAttribs
> {
  public static readonly Type = "AWS::OSIS::Pipeline";
  public static readonly AttributeNames: readonly (keyof OSISPipelineAttribs)[] =
    ["PipelineArn", "VpcEndpoints", "IngestEndpointUrls"];
  constructor(
    logicalId: string,
    properties: OSISPipelineProps,
    options?: ResourceOptions,
  ) {
    super(
      OSISPipeline.Type,
      OSISPipeline.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
