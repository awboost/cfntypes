import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Oam::Link
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-oam-link.html | AWS::Oam::Link}
 */
export interface OamLinkProps {
  SinkIdentifier: string;
  LabelTemplate?: string;
  ResourceTypes: any[];
  Tags?: Record<string, Tag>;
}
/**
 * Attributes type definition for AWS::Oam::Link
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-oam-link.html | AWS::Oam::Link}
 */
export interface OamLinkAttribs {
  Label?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::Oam::Link
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-oam-link.html | AWS::Oam::Link}
 */
export class OamLink extends ResourceBase<
  "AWS::Oam::Link",
  OamLinkProps,
  OamLinkAttribs
> {
  public static readonly Type = "AWS::Oam::Link";
  public static readonly AttributeNames: readonly (keyof OamLinkAttribs)[] = [
    "Label",
    "Arn",
  ];
  constructor(
    logicalId: string,
    properties: OamLinkProps,
    options?: ResourceOptions,
  ) {
    super(OamLink.Type, OamLink.AttributeNames, logicalId, properties, options);
  }
}
/**
 * Type definition for AWS::Oam::Sink
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-oam-sink.html | AWS::Oam::Sink}
 */
export interface OamSinkProps {
  Policy?: object;
  Tags?: Record<string, Tag>;
  Name: string;
}
/**
 * Attributes type definition for AWS::Oam::Sink
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-oam-sink.html | AWS::Oam::Sink}
 */
export interface OamSinkAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::Oam::Sink
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-oam-sink.html | AWS::Oam::Sink}
 */
export class OamSink extends ResourceBase<
  "AWS::Oam::Sink",
  OamSinkProps,
  OamSinkAttribs
> {
  public static readonly Type = "AWS::Oam::Sink";
  public static readonly AttributeNames: readonly (keyof OamSinkAttribs)[] = [
    "Arn",
  ];
  constructor(
    logicalId: string,
    properties: OamSinkProps,
    options?: ResourceOptions,
  ) {
    super(OamSink.Type, OamSink.AttributeNames, logicalId, properties, options);
  }
}
