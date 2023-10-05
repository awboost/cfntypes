import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::IoTThingsGraph::FlowTemplate.DefinitionDocument
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotthingsgraph-flowtemplate-definitiondocument.html | AWS::IoTThingsGraph::FlowTemplate.DefinitionDocument}
 */
export interface IoTThingsGraphFlowTemplateDefinitionDocument {
  Language: string;
  Text: string;
}
/**
 * Type definition for AWS::IoTThingsGraph::FlowTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotthingsgraph-flowtemplate.html | AWS::IoTThingsGraph::FlowTemplate}
 */
export interface IoTThingsGraphFlowTemplateProps {
  CompatibleNamespaceVersion?: number;
  Definition: IoTThingsGraphFlowTemplateDefinitionDocument;
}
/**
 * Resource class for AWS::IoTThingsGraph::FlowTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotthingsgraph-flowtemplate.html | AWS::IoTThingsGraph::FlowTemplate}
 */
export class IoTThingsGraphFlowTemplate extends ResourceBase<
  "AWS::IoTThingsGraph::FlowTemplate",
  IoTThingsGraphFlowTemplateProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::IoTThingsGraph::FlowTemplate";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: IoTThingsGraphFlowTemplateProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTThingsGraphFlowTemplate.Type,
      IoTThingsGraphFlowTemplate.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
