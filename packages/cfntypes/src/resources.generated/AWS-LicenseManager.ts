import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::LicenseManager::License.BorrowConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-borrowconfiguration.html | AWS::LicenseManager::License.BorrowConfiguration}
 */
export interface LicenseManagerLicenseBorrowConfiguration {
  AllowEarlyCheckIn: boolean;
  MaxTimeToLiveInMinutes: number;
}
/**
 * Type definition for AWS::LicenseManager::License.ConsumptionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-consumptionconfiguration.html | AWS::LicenseManager::License.ConsumptionConfiguration}
 */
export interface LicenseManagerLicenseConsumptionConfiguration {
  BorrowConfiguration?: LicenseManagerLicenseBorrowConfiguration;
  RenewType?: string;
  ProvisionalConfiguration?: LicenseManagerLicenseProvisionalConfiguration;
}
/**
 * Type definition for AWS::LicenseManager::License.Entitlement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-entitlement.html | AWS::LicenseManager::License.Entitlement}
 */
export interface LicenseManagerLicenseEntitlement {
  AllowCheckIn?: boolean;
  Overage?: boolean;
  Value?: string;
  MaxCount?: number;
  Unit: string;
  Name: string;
}
/**
 * Type definition for AWS::LicenseManager::License.IssuerData
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-issuerdata.html | AWS::LicenseManager::License.IssuerData}
 */
export interface LicenseManagerLicenseIssuerData {
  SignKey?: string;
  Name: string;
}
/**
 * Type definition for AWS::LicenseManager::License.Metadata
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-metadata.html | AWS::LicenseManager::License.Metadata}
 */
export interface LicenseManagerLicenseMetadata {
  Value: string;
  Name: string;
}
/**
 * Type definition for AWS::LicenseManager::License.ProvisionalConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-provisionalconfiguration.html | AWS::LicenseManager::License.ProvisionalConfiguration}
 */
export interface LicenseManagerLicenseProvisionalConfiguration {
  MaxTimeToLiveInMinutes: number;
}
/**
 * Type definition for AWS::LicenseManager::License.ValidityDateFormat
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-validitydateformat.html | AWS::LicenseManager::License.ValidityDateFormat}
 */
export interface LicenseManagerLicenseValidityDateFormat {
  Begin: string;
  End: string;
}
/**
 * Type definition for AWS::LicenseManager::Grant
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-grant.html | AWS::LicenseManager::Grant}
 */
export interface LicenseManagerGrantProps {
  Status?: string;
  Principals?: any[];
  HomeRegion?: string;
  AllowedOperations?: any[];
  LicenseArn?: string;
  GrantName?: string;
}
/**
 * Attributes type definition for AWS::LicenseManager::Grant
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-grant.html | AWS::LicenseManager::Grant}
 */
export interface LicenseManagerGrantAttribs {
  GrantArn?: string;
  Version?: string;
}
/**
 * Resource class for AWS::LicenseManager::Grant
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-grant.html | AWS::LicenseManager::Grant}
 */
export class LicenseManagerGrant extends ResourceBase<
  "AWS::LicenseManager::Grant",
  LicenseManagerGrantProps,
  LicenseManagerGrantAttribs
> {
  public static readonly Type = "AWS::LicenseManager::Grant";
  public static readonly AttributeNames: readonly (keyof LicenseManagerGrantAttribs)[] =
    ["GrantArn", "Version"];
  constructor(
    logicalId: string,
    properties: LicenseManagerGrantProps,
    options?: ResourceOptions,
  ) {
    super(
      LicenseManagerGrant.Type,
      LicenseManagerGrant.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::LicenseManager::License
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-license.html | AWS::LicenseManager::License}
 */
export interface LicenseManagerLicenseProps {
  ProductSKU?: string;
  Status?: string;
  ConsumptionConfiguration: LicenseManagerLicenseConsumptionConfiguration;
  Validity: LicenseManagerLicenseValidityDateFormat;
  ProductName: string;
  Issuer: LicenseManagerLicenseIssuerData;
  HomeRegion: string;
  Entitlements: any[];
  LicenseMetadata?: any[];
  LicenseName: string;
  Beneficiary?: string;
}
/**
 * Attributes type definition for AWS::LicenseManager::License
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-license.html | AWS::LicenseManager::License}
 */
export interface LicenseManagerLicenseAttribs {
  Version?: string;
  LicenseArn?: string;
}
/**
 * Resource class for AWS::LicenseManager::License
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-license.html | AWS::LicenseManager::License}
 */
export class LicenseManagerLicense extends ResourceBase<
  "AWS::LicenseManager::License",
  LicenseManagerLicenseProps,
  LicenseManagerLicenseAttribs
> {
  public static readonly Type = "AWS::LicenseManager::License";
  public static readonly AttributeNames: readonly (keyof LicenseManagerLicenseAttribs)[] =
    ["Version", "LicenseArn"];
  constructor(
    logicalId: string,
    properties: LicenseManagerLicenseProps,
    options?: ResourceOptions,
  ) {
    super(
      LicenseManagerLicense.Type,
      LicenseManagerLicense.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
