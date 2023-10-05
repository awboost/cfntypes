import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::CertificateManager::Account.ExpiryEventsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-certificatemanager-account-expiryeventsconfiguration.html | AWS::CertificateManager::Account.ExpiryEventsConfiguration}
 */
export interface CertificateManagerAccountExpiryEventsConfiguration {
  DaysBeforeExpiry?: number;
}
/**
 * Type definition for AWS::CertificateManager::Certificate.DomainValidationOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-certificatemanager-certificate-domainvalidationoption.html | AWS::CertificateManager::Certificate.DomainValidationOption}
 */
export interface CertificateManagerCertificateDomainValidationOption {
  DomainName: string;
  HostedZoneId?: string;
  ValidationDomain?: string;
}
/**
 * Type definition for AWS::CertificateManager::Account
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-certificatemanager-account.html | AWS::CertificateManager::Account}
 */
export interface CertificateManagerAccountProps {
  ExpiryEventsConfiguration: CertificateManagerAccountExpiryEventsConfiguration;
}
/**
 * Attributes type definition for AWS::CertificateManager::Account
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-certificatemanager-account.html | AWS::CertificateManager::Account}
 */
export interface CertificateManagerAccountAttribs {
  AccountId?: string;
}
/**
 * Resource class for AWS::CertificateManager::Account
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-certificatemanager-account.html | AWS::CertificateManager::Account}
 */
export class CertificateManagerAccount extends ResourceBase<
  "AWS::CertificateManager::Account",
  CertificateManagerAccountProps,
  CertificateManagerAccountAttribs
> {
  public static readonly Type = "AWS::CertificateManager::Account";
  public static readonly AttributeNames: readonly (keyof CertificateManagerAccountAttribs)[] =
    ["AccountId"];
  constructor(
    logicalId: string,
    properties: CertificateManagerAccountProps,
    options?: ResourceOptions,
  ) {
    super(
      CertificateManagerAccount.Type,
      CertificateManagerAccount.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CertificateManager::Certificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-certificatemanager-certificate.html | AWS::CertificateManager::Certificate}
 */
export interface CertificateManagerCertificateProps {
  CertificateAuthorityArn?: string;
  CertificateTransparencyLoggingPreference?: string;
  DomainName: string;
  DomainValidationOptions?: any[];
  KeyAlgorithm?: string;
  SubjectAlternativeNames?: any[];
  Tags?: Tag[];
  ValidationMethod?: string;
}
/**
 * Resource class for AWS::CertificateManager::Certificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-certificatemanager-certificate.html | AWS::CertificateManager::Certificate}
 */
export class CertificateManagerCertificate extends ResourceBase<
  "AWS::CertificateManager::Certificate",
  CertificateManagerCertificateProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::CertificateManager::Certificate";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: CertificateManagerCertificateProps,
    options?: ResourceOptions,
  ) {
    super(
      CertificateManagerCertificate.Type,
      CertificateManagerCertificate.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
