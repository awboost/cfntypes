import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Rekognition::StreamProcessor.BoundingBox
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rekognition-streamprocessor-boundingbox.html | AWS::Rekognition::StreamProcessor.BoundingBox}
 */
export interface RekognitionStreamProcessorBoundingBox {
  Left: number;
  Top: number;
  Height: number;
  Width: number;
}
/**
 * Type definition for AWS::Rekognition::StreamProcessor.ConnectedHomeSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rekognition-streamprocessor-connectedhomesettings.html | AWS::Rekognition::StreamProcessor.ConnectedHomeSettings}
 */
export interface RekognitionStreamProcessorConnectedHomeSettings {
  MinConfidence?: number;
  Labels: any[];
}
/**
 * Type definition for AWS::Rekognition::StreamProcessor.DataSharingPreference
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rekognition-streamprocessor-datasharingpreference.html | AWS::Rekognition::StreamProcessor.DataSharingPreference}
 */
export interface RekognitionStreamProcessorDataSharingPreference {
  OptIn: boolean;
}
/**
 * Type definition for AWS::Rekognition::StreamProcessor.FaceSearchSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rekognition-streamprocessor-facesearchsettings.html | AWS::Rekognition::StreamProcessor.FaceSearchSettings}
 */
export interface RekognitionStreamProcessorFaceSearchSettings {
  CollectionId: string;
  FaceMatchThreshold?: number;
}
/**
 * Type definition for AWS::Rekognition::StreamProcessor.KinesisDataStream
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rekognition-streamprocessor-kinesisdatastream.html | AWS::Rekognition::StreamProcessor.KinesisDataStream}
 */
export interface RekognitionStreamProcessorKinesisDataStream {
  Arn: string;
}
/**
 * Type definition for AWS::Rekognition::StreamProcessor.KinesisVideoStream
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rekognition-streamprocessor-kinesisvideostream.html | AWS::Rekognition::StreamProcessor.KinesisVideoStream}
 */
export interface RekognitionStreamProcessorKinesisVideoStream {
  Arn: string;
}
/**
 * Type definition for AWS::Rekognition::StreamProcessor.NotificationChannel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rekognition-streamprocessor-notificationchannel.html | AWS::Rekognition::StreamProcessor.NotificationChannel}
 */
export interface RekognitionStreamProcessorNotificationChannel {
  Arn: string;
}
/**
 * Type definition for AWS::Rekognition::StreamProcessor.S3Destination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rekognition-streamprocessor-s3destination.html | AWS::Rekognition::StreamProcessor.S3Destination}
 */
export interface RekognitionStreamProcessorS3Destination {
  BucketName: string;
  ObjectKeyPrefix?: string;
}
/**
 * Type definition for AWS::Rekognition::Collection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rekognition-collection.html | AWS::Rekognition::Collection}
 */
export interface RekognitionCollectionProps {
  CollectionId: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::Rekognition::Collection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rekognition-collection.html | AWS::Rekognition::Collection}
 */
export interface RekognitionCollectionAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::Rekognition::Collection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rekognition-collection.html | AWS::Rekognition::Collection}
 */
export class RekognitionCollection extends ResourceBase<
  "AWS::Rekognition::Collection",
  RekognitionCollectionProps,
  RekognitionCollectionAttribs
> {
  public static readonly Type = "AWS::Rekognition::Collection";
  public static readonly AttributeNames: readonly (keyof RekognitionCollectionAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: RekognitionCollectionProps,
    options?: ResourceOptions,
  ) {
    super(
      RekognitionCollection.Type,
      RekognitionCollection.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Rekognition::Project
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rekognition-project.html | AWS::Rekognition::Project}
 */
export interface RekognitionProjectProps {
  ProjectName: string;
}
/**
 * Attributes type definition for AWS::Rekognition::Project
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rekognition-project.html | AWS::Rekognition::Project}
 */
export interface RekognitionProjectAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::Rekognition::Project
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rekognition-project.html | AWS::Rekognition::Project}
 */
export class RekognitionProject extends ResourceBase<
  "AWS::Rekognition::Project",
  RekognitionProjectProps,
  RekognitionProjectAttribs
> {
  public static readonly Type = "AWS::Rekognition::Project";
  public static readonly AttributeNames: readonly (keyof RekognitionProjectAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: RekognitionProjectProps,
    options?: ResourceOptions,
  ) {
    super(
      RekognitionProject.Type,
      RekognitionProject.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Rekognition::StreamProcessor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rekognition-streamprocessor.html | AWS::Rekognition::StreamProcessor}
 */
export interface RekognitionStreamProcessorProps {
  S3Destination?: RekognitionStreamProcessorS3Destination;
  DataSharingPreference?: RekognitionStreamProcessorDataSharingPreference;
  KmsKeyId?: string;
  FaceSearchSettings?: RekognitionStreamProcessorFaceSearchSettings;
  PolygonRegionsOfInterest?: object;
  RoleArn: string;
  Name?: string;
  ConnectedHomeSettings?: RekognitionStreamProcessorConnectedHomeSettings;
  NotificationChannel?: RekognitionStreamProcessorNotificationChannel;
  KinesisVideoStream: RekognitionStreamProcessorKinesisVideoStream;
  BoundingBoxRegionsOfInterest?: any[];
  KinesisDataStream?: RekognitionStreamProcessorKinesisDataStream;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::Rekognition::StreamProcessor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rekognition-streamprocessor.html | AWS::Rekognition::StreamProcessor}
 */
export interface RekognitionStreamProcessorAttribs {
  Status?: string;
  Arn?: string;
  StatusMessage?: string;
}
/**
 * Resource class for AWS::Rekognition::StreamProcessor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rekognition-streamprocessor.html | AWS::Rekognition::StreamProcessor}
 */
export class RekognitionStreamProcessor extends ResourceBase<
  "AWS::Rekognition::StreamProcessor",
  RekognitionStreamProcessorProps,
  RekognitionStreamProcessorAttribs
> {
  public static readonly Type = "AWS::Rekognition::StreamProcessor";
  public static readonly AttributeNames: readonly (keyof RekognitionStreamProcessorAttribs)[] =
    ["Status", "Arn", "StatusMessage"];
  constructor(
    logicalId: string,
    properties: RekognitionStreamProcessorProps,
    options?: ResourceOptions,
  ) {
    super(
      RekognitionStreamProcessor.Type,
      RekognitionStreamProcessor.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
