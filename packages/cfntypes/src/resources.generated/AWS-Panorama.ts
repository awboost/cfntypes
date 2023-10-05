import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Panorama::ApplicationInstance.ManifestOverridesPayload
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-panorama-applicationinstance-manifestoverridespayload.html | AWS::Panorama::ApplicationInstance.ManifestOverridesPayload}
 */
export interface PanoramaApplicationInstanceManifestOverridesPayload {
  PayloadData?: string;
}
/**
 * Type definition for AWS::Panorama::ApplicationInstance.ManifestPayload
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-panorama-applicationinstance-manifestpayload.html | AWS::Panorama::ApplicationInstance.ManifestPayload}
 */
export interface PanoramaApplicationInstanceManifestPayload {
  PayloadData?: string;
}
/**
 * Type definition for AWS::Panorama::Package.StorageLocation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-panorama-package-storagelocation.html | AWS::Panorama::Package.StorageLocation}
 */
export interface PanoramaPackageStorageLocation {
  RepoPrefixLocation?: string;
  GeneratedPrefixLocation?: string;
  BinaryPrefixLocation?: string;
  Bucket?: string;
  ManifestPrefixLocation?: string;
}
/**
 * Type definition for AWS::Panorama::ApplicationInstance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-applicationinstance.html | AWS::Panorama::ApplicationInstance}
 */
export interface PanoramaApplicationInstanceProps {
  DefaultRuntimeContextDevice: string;
  Description?: string;
  ApplicationInstanceIdToReplace?: string;
  ManifestOverridesPayload?: PanoramaApplicationInstanceManifestOverridesPayload;
  RuntimeRoleArn?: string;
  ManifestPayload: PanoramaApplicationInstanceManifestPayload;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::Panorama::ApplicationInstance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-applicationinstance.html | AWS::Panorama::ApplicationInstance}
 */
export interface PanoramaApplicationInstanceAttribs {
  DefaultRuntimeContextDeviceName?: string;
  Status?: string;
  ApplicationInstanceId?: string;
  CreatedTime?: number;
  StatusDescription?: string;
  HealthStatus?: string;
  LastUpdatedTime?: number;
  Arn?: string;
}
/**
 * Resource class for AWS::Panorama::ApplicationInstance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-applicationinstance.html | AWS::Panorama::ApplicationInstance}
 */
export class PanoramaApplicationInstance extends ResourceBase<
  "AWS::Panorama::ApplicationInstance",
  PanoramaApplicationInstanceProps,
  PanoramaApplicationInstanceAttribs
> {
  public static readonly Type = "AWS::Panorama::ApplicationInstance";
  public static readonly AttributeNames: readonly (keyof PanoramaApplicationInstanceAttribs)[] =
    [
      "DefaultRuntimeContextDeviceName",
      "Status",
      "ApplicationInstanceId",
      "CreatedTime",
      "StatusDescription",
      "HealthStatus",
      "LastUpdatedTime",
      "Arn",
    ];
  constructor(
    logicalId: string,
    properties: PanoramaApplicationInstanceProps,
    options?: ResourceOptions,
  ) {
    super(
      PanoramaApplicationInstance.Type,
      PanoramaApplicationInstance.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Panorama::Package
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-package.html | AWS::Panorama::Package}
 */
export interface PanoramaPackageProps {
  PackageName: string;
  StorageLocation?: PanoramaPackageStorageLocation;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::Panorama::Package
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-package.html | AWS::Panorama::Package}
 */
export interface PanoramaPackageAttribs {
  CreatedTime?: number;
  "StorageLocation.ManifestPrefixLocation"?: string;
  "StorageLocation.GeneratedPrefixLocation"?: string;
  "StorageLocation.BinaryPrefixLocation"?: string;
  PackageId?: string;
  Arn?: string;
  "StorageLocation.Bucket"?: string;
  "StorageLocation.RepoPrefixLocation"?: string;
}
/**
 * Resource class for AWS::Panorama::Package
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-package.html | AWS::Panorama::Package}
 */
export class PanoramaPackage extends ResourceBase<
  "AWS::Panorama::Package",
  PanoramaPackageProps,
  PanoramaPackageAttribs
> {
  public static readonly Type = "AWS::Panorama::Package";
  public static readonly AttributeNames: readonly (keyof PanoramaPackageAttribs)[] =
    [
      "CreatedTime",
      "StorageLocation.ManifestPrefixLocation",
      "StorageLocation.GeneratedPrefixLocation",
      "StorageLocation.BinaryPrefixLocation",
      "PackageId",
      "Arn",
      "StorageLocation.Bucket",
      "StorageLocation.RepoPrefixLocation",
    ];
  constructor(
    logicalId: string,
    properties: PanoramaPackageProps,
    options?: ResourceOptions,
  ) {
    super(
      PanoramaPackage.Type,
      PanoramaPackage.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Panorama::PackageVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-packageversion.html | AWS::Panorama::PackageVersion}
 */
export interface PanoramaPackageVersionProps {
  UpdatedLatestPatchVersion?: string;
  PatchVersion: string;
  MarkLatest?: boolean;
  PackageId: string;
  OwnerAccount?: string;
  PackageVersion: string;
}
/**
 * Attributes type definition for AWS::Panorama::PackageVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-packageversion.html | AWS::Panorama::PackageVersion}
 */
export interface PanoramaPackageVersionAttribs {
  Status?: string;
  PackageName?: string;
  StatusDescription?: string;
  PackageArn?: string;
  IsLatestPatch?: boolean;
  RegisteredTime?: number;
}
/**
 * Resource class for AWS::Panorama::PackageVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-packageversion.html | AWS::Panorama::PackageVersion}
 */
export class PanoramaPackageVersion extends ResourceBase<
  "AWS::Panorama::PackageVersion",
  PanoramaPackageVersionProps,
  PanoramaPackageVersionAttribs
> {
  public static readonly Type = "AWS::Panorama::PackageVersion";
  public static readonly AttributeNames: readonly (keyof PanoramaPackageVersionAttribs)[] =
    [
      "Status",
      "PackageName",
      "StatusDescription",
      "PackageArn",
      "IsLatestPatch",
      "RegisteredTime",
    ];
  constructor(
    logicalId: string,
    properties: PanoramaPackageVersionProps,
    options?: ResourceOptions,
  ) {
    super(
      PanoramaPackageVersion.Type,
      PanoramaPackageVersion.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
