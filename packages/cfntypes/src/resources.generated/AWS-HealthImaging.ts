import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::HealthImaging::Datastore
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthimaging-datastore.html | AWS::HealthImaging::Datastore}
 */
export interface HealthImagingDatastoreProps {
  KmsKeyArn?: string;
  DatastoreName?: string;
  Tags?: Record<string, Tag>;
}
/**
 * Attributes type definition for AWS::HealthImaging::Datastore
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthimaging-datastore.html | AWS::HealthImaging::Datastore}
 */
export interface HealthImagingDatastoreAttribs {
  DatastoreArn?: string;
  DatastoreId?: string;
  DatastoreStatus?: string;
  CreatedAt?: string;
  UpdatedAt?: string;
}
/**
 * Resource class for AWS::HealthImaging::Datastore
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthimaging-datastore.html | AWS::HealthImaging::Datastore}
 */
export class HealthImagingDatastore extends ResourceBase<
  "AWS::HealthImaging::Datastore",
  HealthImagingDatastoreProps,
  HealthImagingDatastoreAttribs
> {
  public static readonly Type = "AWS::HealthImaging::Datastore";
  public static readonly AttributeNames: readonly (keyof HealthImagingDatastoreAttribs)[] =
    [
      "DatastoreArn",
      "DatastoreId",
      "DatastoreStatus",
      "CreatedAt",
      "UpdatedAt",
    ];
  constructor(
    logicalId: string,
    properties: HealthImagingDatastoreProps,
    options?: ResourceOptions,
  ) {
    super(
      HealthImagingDatastore.Type,
      HealthImagingDatastore.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
