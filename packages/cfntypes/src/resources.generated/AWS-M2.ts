import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::M2::Application.Definition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-m2-application-definition.html | AWS::M2::Application.Definition}
 */
export interface M2ApplicationDefinition {
  Content?: string;
  S3Location?: string;
}
/**
 * Type definition for AWS::M2::Environment.EfsStorageConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-m2-environment-efsstorageconfiguration.html | AWS::M2::Environment.EfsStorageConfiguration}
 */
export interface M2EnvironmentEfsStorageConfiguration {
  MountPoint: string;
  FileSystemId: string;
}
/**
 * Type definition for AWS::M2::Environment.FsxStorageConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-m2-environment-fsxstorageconfiguration.html | AWS::M2::Environment.FsxStorageConfiguration}
 */
export interface M2EnvironmentFsxStorageConfiguration {
  MountPoint: string;
  FileSystemId: string;
}
/**
 * Type definition for AWS::M2::Environment.HighAvailabilityConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-m2-environment-highavailabilityconfig.html | AWS::M2::Environment.HighAvailabilityConfig}
 */
export interface M2EnvironmentHighAvailabilityConfig {
  DesiredCapacity: number;
}
/**
 * Type definition for AWS::M2::Environment.StorageConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-m2-environment-storageconfiguration.html | AWS::M2::Environment.StorageConfiguration}
 */
export interface M2EnvironmentStorageConfiguration {
  Efs?: M2EnvironmentEfsStorageConfiguration;
  Fsx?: M2EnvironmentFsxStorageConfiguration;
}
/**
 * Type definition for AWS::M2::Application
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-application.html | AWS::M2::Application}
 */
export interface M2ApplicationProps {
  Description?: string;
  KmsKeyId?: string;
  Definition: M2ApplicationDefinition;
  EngineType: string;
  RoleArn?: string;
  Tags?: Record<string, Tag>;
  Name: string;
}
/**
 * Attributes type definition for AWS::M2::Application
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-application.html | AWS::M2::Application}
 */
export interface M2ApplicationAttribs {
  ApplicationArn?: string;
  ApplicationId?: string;
}
/**
 * Resource class for AWS::M2::Application
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-application.html | AWS::M2::Application}
 */
export class M2Application extends ResourceBase<
  "AWS::M2::Application",
  M2ApplicationProps,
  M2ApplicationAttribs
> {
  public static readonly Type = "AWS::M2::Application";
  public static readonly AttributeNames: readonly (keyof M2ApplicationAttribs)[] =
    ["ApplicationArn", "ApplicationId"];
  constructor(
    logicalId: string,
    properties: M2ApplicationProps,
    options?: ResourceOptions,
  ) {
    super(
      M2Application.Type,
      M2Application.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::M2::Environment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html | AWS::M2::Environment}
 */
export interface M2EnvironmentProps {
  Description?: string;
  EngineVersion?: string;
  KmsKeyId?: string;
  HighAvailabilityConfig?: M2EnvironmentHighAvailabilityConfig;
  PreferredMaintenanceWindow?: string;
  SecurityGroupIds?: any[];
  SubnetIds?: any[];
  Name: string;
  EngineType: string;
  PubliclyAccessible?: boolean;
  InstanceType: string;
  StorageConfigurations?: any[];
  Tags?: Record<string, Tag>;
}
/**
 * Attributes type definition for AWS::M2::Environment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html | AWS::M2::Environment}
 */
export interface M2EnvironmentAttribs {
  EnvironmentId?: string;
  EnvironmentArn?: string;
}
/**
 * Resource class for AWS::M2::Environment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html | AWS::M2::Environment}
 */
export class M2Environment extends ResourceBase<
  "AWS::M2::Environment",
  M2EnvironmentProps,
  M2EnvironmentAttribs
> {
  public static readonly Type = "AWS::M2::Environment";
  public static readonly AttributeNames: readonly (keyof M2EnvironmentAttribs)[] =
    ["EnvironmentId", "EnvironmentArn"];
  constructor(
    logicalId: string,
    properties: M2EnvironmentProps,
    options?: ResourceOptions,
  ) {
    super(
      M2Environment.Type,
      M2Environment.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
