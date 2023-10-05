import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::HealthLake::FHIRDatastore.CreatedAt
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-healthlake-fhirdatastore-createdat.html | AWS::HealthLake::FHIRDatastore.CreatedAt}
 */
export interface HealthLakeFHIRDatastoreCreatedAt {
  Nanos: number;
  Seconds: string;
}
/**
 * Type definition for AWS::HealthLake::FHIRDatastore.IdentityProviderConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-healthlake-fhirdatastore-identityproviderconfiguration.html | AWS::HealthLake::FHIRDatastore.IdentityProviderConfiguration}
 */
export interface HealthLakeFHIRDatastoreIdentityProviderConfiguration {
  AuthorizationStrategy: string;
  IdpLambdaArn?: string;
  FineGrainedAuthorizationEnabled?: boolean;
  Metadata?: string;
}
/**
 * Type definition for AWS::HealthLake::FHIRDatastore.KmsEncryptionConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-healthlake-fhirdatastore-kmsencryptionconfig.html | AWS::HealthLake::FHIRDatastore.KmsEncryptionConfig}
 */
export interface HealthLakeFHIRDatastoreKmsEncryptionConfig {
  KmsKeyId?: string;
  CmkType: string;
}
/**
 * Type definition for AWS::HealthLake::FHIRDatastore.PreloadDataConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-healthlake-fhirdatastore-preloaddataconfig.html | AWS::HealthLake::FHIRDatastore.PreloadDataConfig}
 */
export interface HealthLakeFHIRDatastorePreloadDataConfig {
  PreloadDataType: string;
}
/**
 * Type definition for AWS::HealthLake::FHIRDatastore.SseConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-healthlake-fhirdatastore-sseconfiguration.html | AWS::HealthLake::FHIRDatastore.SseConfiguration}
 */
export interface HealthLakeFHIRDatastoreSseConfiguration {
  KmsEncryptionConfig: HealthLakeFHIRDatastoreKmsEncryptionConfig;
}
/**
 * Type definition for AWS::HealthLake::FHIRDatastore
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthlake-fhirdatastore.html | AWS::HealthLake::FHIRDatastore}
 */
export interface HealthLakeFHIRDatastoreProps {
  DatastoreTypeVersion: string;
  DatastoreName?: string;
  IdentityProviderConfiguration?: HealthLakeFHIRDatastoreIdentityProviderConfiguration;
  Tags?: Tag[];
  PreloadDataConfig?: HealthLakeFHIRDatastorePreloadDataConfig;
  SseConfiguration?: HealthLakeFHIRDatastoreSseConfiguration;
}
/**
 * Attributes type definition for AWS::HealthLake::FHIRDatastore
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthlake-fhirdatastore.html | AWS::HealthLake::FHIRDatastore}
 */
export interface HealthLakeFHIRDatastoreAttribs {
  DatastoreArn?: string;
  "CreatedAt.Nanos"?: number;
  DatastoreId?: string;
  CreatedAt?: HealthLakeFHIRDatastoreCreatedAt;
  DatastoreStatus?: string;
  DatastoreEndpoint?: string;
  "CreatedAt.Seconds"?: string;
}
/**
 * Resource class for AWS::HealthLake::FHIRDatastore
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthlake-fhirdatastore.html | AWS::HealthLake::FHIRDatastore}
 */
export class HealthLakeFHIRDatastore extends ResourceBase<
  "AWS::HealthLake::FHIRDatastore",
  HealthLakeFHIRDatastoreProps,
  HealthLakeFHIRDatastoreAttribs
> {
  public static readonly Type = "AWS::HealthLake::FHIRDatastore";
  public static readonly AttributeNames: readonly (keyof HealthLakeFHIRDatastoreAttribs)[] =
    [
      "DatastoreArn",
      "CreatedAt.Nanos",
      "DatastoreId",
      "CreatedAt",
      "DatastoreStatus",
      "DatastoreEndpoint",
      "CreatedAt.Seconds",
    ];
  constructor(
    logicalId: string,
    properties: HealthLakeFHIRDatastoreProps,
    options?: ResourceOptions,
  ) {
    super(
      HealthLakeFHIRDatastore.Type,
      HealthLakeFHIRDatastore.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
