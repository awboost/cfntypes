import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::DataPipeline::Pipeline.Field
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-field.html | AWS::DataPipeline::Pipeline.Field}
 */
export interface DataPipelinePipelineField {
  RefValue?: string;
  StringValue?: string;
  Key: string;
}
/**
 * Type definition for AWS::DataPipeline::Pipeline.ParameterAttribute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-parameterattribute.html | AWS::DataPipeline::Pipeline.ParameterAttribute}
 */
export interface DataPipelinePipelineParameterAttribute {
  StringValue: string;
  Key: string;
}
/**
 * Type definition for AWS::DataPipeline::Pipeline.ParameterObject
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-parameterobject.html | AWS::DataPipeline::Pipeline.ParameterObject}
 */
export interface DataPipelinePipelineParameterObject {
  Attributes: any[];
  Id: string;
}
/**
 * Type definition for AWS::DataPipeline::Pipeline.ParameterValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-parametervalue.html | AWS::DataPipeline::Pipeline.ParameterValue}
 */
export interface DataPipelinePipelineParameterValue {
  Id: string;
  StringValue: string;
}
/**
 * Type definition for AWS::DataPipeline::Pipeline.PipelineObject
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-pipelineobject.html | AWS::DataPipeline::Pipeline.PipelineObject}
 */
export interface DataPipelinePipelinePipelineObject {
  Fields: any[];
  Id: string;
  Name: string;
}
/**
 * Type definition for AWS::DataPipeline::Pipeline.PipelineTag
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-pipelinetag.html | AWS::DataPipeline::Pipeline.PipelineTag}
 */
export interface DataPipelinePipelinePipelineTag {
  Value: string;
  Key: string;
}
/**
 * Type definition for AWS::DataPipeline::Pipeline
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datapipeline-pipeline.html | AWS::DataPipeline::Pipeline}
 */
export interface DataPipelinePipelineProps {
  PipelineTags?: any[];
  ParameterObjects?: any[];
  Description?: string;
  Activate?: boolean;
  PipelineObjects?: any[];
  ParameterValues?: any[];
  Name: string;
}
/**
 * Attributes type definition for AWS::DataPipeline::Pipeline
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datapipeline-pipeline.html | AWS::DataPipeline::Pipeline}
 */
export interface DataPipelinePipelineAttribs {
  PipelineId?: string;
}
/**
 * Resource class for AWS::DataPipeline::Pipeline
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datapipeline-pipeline.html | AWS::DataPipeline::Pipeline}
 */
export class DataPipelinePipeline extends ResourceBase<
  "AWS::DataPipeline::Pipeline",
  DataPipelinePipelineProps,
  DataPipelinePipelineAttribs
> {
  public static readonly Type = "AWS::DataPipeline::Pipeline";
  public static readonly AttributeNames: readonly (keyof DataPipelinePipelineAttribs)[] =
    ["PipelineId"];
  constructor(
    logicalId: string,
    properties: DataPipelinePipelineProps,
    options?: ResourceOptions,
  ) {
    super(
      DataPipelinePipeline.Type,
      DataPipelinePipeline.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
