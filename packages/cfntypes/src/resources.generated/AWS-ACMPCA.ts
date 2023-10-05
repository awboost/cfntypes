import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::ACMPCA::Certificate.ApiPassthrough
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-apipassthrough.html | AWS::ACMPCA::Certificate.ApiPassthrough}
 */
export interface ACMPCACertificateApiPassthrough {
  Extensions?: ACMPCACertificateExtensions;
  Subject?: ACMPCACertificateSubject;
}
/**
 * Type definition for AWS::ACMPCA::Certificate.CustomAttribute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-customattribute.html | AWS::ACMPCA::Certificate.CustomAttribute}
 */
export interface ACMPCACertificateCustomAttribute {
  Value: string;
  ObjectIdentifier: string;
}
/**
 * Type definition for AWS::ACMPCA::Certificate.CustomExtension
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-customextension.html | AWS::ACMPCA::Certificate.CustomExtension}
 */
export interface ACMPCACertificateCustomExtension {
  Value: string;
  Critical?: boolean;
  ObjectIdentifier: string;
}
/**
 * Type definition for AWS::ACMPCA::Certificate.EdiPartyName
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-edipartyname.html | AWS::ACMPCA::Certificate.EdiPartyName}
 */
export interface ACMPCACertificateEdiPartyName {
  PartyName: string;
  NameAssigner: string;
}
/**
 * Type definition for AWS::ACMPCA::Certificate.ExtendedKeyUsage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-extendedkeyusage.html | AWS::ACMPCA::Certificate.ExtendedKeyUsage}
 */
export interface ACMPCACertificateExtendedKeyUsage {
  ExtendedKeyUsageType?: string;
  ExtendedKeyUsageObjectIdentifier?: string;
}
/**
 * Type definition for AWS::ACMPCA::Certificate.Extensions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-extensions.html | AWS::ACMPCA::Certificate.Extensions}
 */
export interface ACMPCACertificateExtensions {
  CustomExtensions?: any[];
  CertificatePolicies?: any[];
  KeyUsage?: ACMPCACertificateKeyUsage;
  SubjectAlternativeNames?: any[];
  ExtendedKeyUsage?: any[];
}
/**
 * Type definition for AWS::ACMPCA::Certificate.GeneralName
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-generalname.html | AWS::ACMPCA::Certificate.GeneralName}
 */
export interface ACMPCACertificateGeneralName {
  UniformResourceIdentifier?: string;
  DnsName?: string;
  EdiPartyName?: ACMPCACertificateEdiPartyName;
  RegisteredId?: string;
  Rfc822Name?: string;
  OtherName?: ACMPCACertificateOtherName;
  IpAddress?: string;
  DirectoryName?: ACMPCACertificateSubject;
}
/**
 * Type definition for AWS::ACMPCA::Certificate.KeyUsage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-keyusage.html | AWS::ACMPCA::Certificate.KeyUsage}
 */
export interface ACMPCACertificateKeyUsage {
  KeyEncipherment?: boolean;
  DataEncipherment?: boolean;
  DigitalSignature?: boolean;
  KeyCertSign?: boolean;
  DecipherOnly?: boolean;
  KeyAgreement?: boolean;
  NonRepudiation?: boolean;
  CRLSign?: boolean;
  EncipherOnly?: boolean;
}
/**
 * Type definition for AWS::ACMPCA::Certificate.OtherName
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-othername.html | AWS::ACMPCA::Certificate.OtherName}
 */
export interface ACMPCACertificateOtherName {
  TypeId: string;
  Value: string;
}
/**
 * Type definition for AWS::ACMPCA::Certificate.PolicyInformation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-policyinformation.html | AWS::ACMPCA::Certificate.PolicyInformation}
 */
export interface ACMPCACertificatePolicyInformation {
  CertPolicyId: string;
  PolicyQualifiers?: any[];
}
/**
 * Type definition for AWS::ACMPCA::Certificate.PolicyQualifierInfo
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-policyqualifierinfo.html | AWS::ACMPCA::Certificate.PolicyQualifierInfo}
 */
export interface ACMPCACertificatePolicyQualifierInfo {
  Qualifier: ACMPCACertificateQualifier;
  PolicyQualifierId: string;
}
/**
 * Type definition for AWS::ACMPCA::Certificate.Qualifier
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-qualifier.html | AWS::ACMPCA::Certificate.Qualifier}
 */
export interface ACMPCACertificateQualifier {
  CpsUri: string;
}
/**
 * Type definition for AWS::ACMPCA::Certificate.Subject
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-subject.html | AWS::ACMPCA::Certificate.Subject}
 */
export interface ACMPCACertificateSubject {
  Organization?: string;
  OrganizationalUnit?: string;
  Locality?: string;
  Title?: string;
  GivenName?: string;
  GenerationQualifier?: string;
  Initials?: string;
  CustomAttributes?: any[];
  SerialNumber?: string;
  State?: string;
  Country?: string;
  Surname?: string;
  DistinguishedNameQualifier?: string;
  CommonName?: string;
  Pseudonym?: string;
}
/**
 * Type definition for AWS::ACMPCA::Certificate.Validity
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-validity.html | AWS::ACMPCA::Certificate.Validity}
 */
export interface ACMPCACertificateValidity {
  Type: string;
  Value: number;
}
/**
 * Type definition for AWS::ACMPCA::CertificateAuthority.AccessDescription
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-accessdescription.html | AWS::ACMPCA::CertificateAuthority.AccessDescription}
 */
export interface ACMPCACertificateAuthorityAccessDescription {
  AccessMethod: ACMPCACertificateAuthorityAccessMethod;
  AccessLocation: ACMPCACertificateAuthorityGeneralName;
}
/**
 * Type definition for AWS::ACMPCA::CertificateAuthority.AccessMethod
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-accessmethod.html | AWS::ACMPCA::CertificateAuthority.AccessMethod}
 */
export interface ACMPCACertificateAuthorityAccessMethod {
  CustomObjectIdentifier?: string;
  AccessMethodType?: string;
}
/**
 * Type definition for AWS::ACMPCA::CertificateAuthority.CrlConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-crlconfiguration.html | AWS::ACMPCA::CertificateAuthority.CrlConfiguration}
 */
export interface ACMPCACertificateAuthorityCrlConfiguration {
  CustomCname?: string;
  S3ObjectAcl?: string;
  ExpirationInDays?: number;
  Enabled?: boolean;
  S3BucketName?: string;
}
/**
 * Type definition for AWS::ACMPCA::CertificateAuthority.CsrExtensions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-csrextensions.html | AWS::ACMPCA::CertificateAuthority.CsrExtensions}
 */
export interface ACMPCACertificateAuthorityCsrExtensions {
  KeyUsage?: ACMPCACertificateAuthorityKeyUsage;
  SubjectInformationAccess?: any[];
}
/**
 * Type definition for AWS::ACMPCA::CertificateAuthority.CustomAttribute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-customattribute.html | AWS::ACMPCA::CertificateAuthority.CustomAttribute}
 */
export interface ACMPCACertificateAuthorityCustomAttribute {
  Value: string;
  ObjectIdentifier: string;
}
/**
 * Type definition for AWS::ACMPCA::CertificateAuthority.EdiPartyName
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-edipartyname.html | AWS::ACMPCA::CertificateAuthority.EdiPartyName}
 */
export interface ACMPCACertificateAuthorityEdiPartyName {
  PartyName: string;
  NameAssigner: string;
}
/**
 * Type definition for AWS::ACMPCA::CertificateAuthority.GeneralName
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-generalname.html | AWS::ACMPCA::CertificateAuthority.GeneralName}
 */
export interface ACMPCACertificateAuthorityGeneralName {
  UniformResourceIdentifier?: string;
  DnsName?: string;
  EdiPartyName?: ACMPCACertificateAuthorityEdiPartyName;
  RegisteredId?: string;
  Rfc822Name?: string;
  OtherName?: ACMPCACertificateAuthorityOtherName;
  IpAddress?: string;
  DirectoryName?: ACMPCACertificateAuthoritySubject;
}
/**
 * Type definition for AWS::ACMPCA::CertificateAuthority.KeyUsage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-keyusage.html | AWS::ACMPCA::CertificateAuthority.KeyUsage}
 */
export interface ACMPCACertificateAuthorityKeyUsage {
  KeyEncipherment?: boolean;
  DataEncipherment?: boolean;
  DigitalSignature?: boolean;
  KeyCertSign?: boolean;
  DecipherOnly?: boolean;
  KeyAgreement?: boolean;
  NonRepudiation?: boolean;
  CRLSign?: boolean;
  EncipherOnly?: boolean;
}
/**
 * Type definition for AWS::ACMPCA::CertificateAuthority.OcspConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-ocspconfiguration.html | AWS::ACMPCA::CertificateAuthority.OcspConfiguration}
 */
export interface ACMPCACertificateAuthorityOcspConfiguration {
  OcspCustomCname?: string;
  Enabled?: boolean;
}
/**
 * Type definition for AWS::ACMPCA::CertificateAuthority.OtherName
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-othername.html | AWS::ACMPCA::CertificateAuthority.OtherName}
 */
export interface ACMPCACertificateAuthorityOtherName {
  TypeId: string;
  Value: string;
}
/**
 * Type definition for AWS::ACMPCA::CertificateAuthority.RevocationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-revocationconfiguration.html | AWS::ACMPCA::CertificateAuthority.RevocationConfiguration}
 */
export interface ACMPCACertificateAuthorityRevocationConfiguration {
  OcspConfiguration?: ACMPCACertificateAuthorityOcspConfiguration;
  CrlConfiguration?: ACMPCACertificateAuthorityCrlConfiguration;
}
/**
 * Type definition for AWS::ACMPCA::CertificateAuthority.Subject
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-subject.html | AWS::ACMPCA::CertificateAuthority.Subject}
 */
export interface ACMPCACertificateAuthoritySubject {
  Organization?: string;
  OrganizationalUnit?: string;
  Locality?: string;
  Title?: string;
  GivenName?: string;
  GenerationQualifier?: string;
  Initials?: string;
  CustomAttributes?: any[];
  SerialNumber?: string;
  State?: string;
  Country?: string;
  Surname?: string;
  DistinguishedNameQualifier?: string;
  CommonName?: string;
  Pseudonym?: string;
}
/**
 * Type definition for AWS::ACMPCA::Certificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html | AWS::ACMPCA::Certificate}
 */
export interface ACMPCACertificateProps {
  TemplateArn?: string;
  CertificateAuthorityArn: string;
  Validity: ACMPCACertificateValidity;
  CertificateSigningRequest: string;
  SigningAlgorithm: string;
  ApiPassthrough?: ACMPCACertificateApiPassthrough;
  ValidityNotBefore?: ACMPCACertificateValidity;
}
/**
 * Attributes type definition for AWS::ACMPCA::Certificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html | AWS::ACMPCA::Certificate}
 */
export interface ACMPCACertificateAttribs {
  Arn?: string;
  Certificate?: string;
}
/**
 * Resource class for AWS::ACMPCA::Certificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html | AWS::ACMPCA::Certificate}
 */
export class ACMPCACertificate extends ResourceBase<
  "AWS::ACMPCA::Certificate",
  ACMPCACertificateProps,
  ACMPCACertificateAttribs
> {
  public static readonly Type = "AWS::ACMPCA::Certificate";
  public static readonly AttributeNames: readonly (keyof ACMPCACertificateAttribs)[] =
    ["Arn", "Certificate"];
  constructor(
    logicalId: string,
    properties: ACMPCACertificateProps,
    options?: ResourceOptions,
  ) {
    super(
      ACMPCACertificate.Type,
      ACMPCACertificate.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ACMPCA::CertificateAuthority
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html | AWS::ACMPCA::CertificateAuthority}
 */
export interface ACMPCACertificateAuthorityProps {
  CsrExtensions?: ACMPCACertificateAuthorityCsrExtensions;
  Type: string;
  RevocationConfiguration?: ACMPCACertificateAuthorityRevocationConfiguration;
  UsageMode?: string;
  SigningAlgorithm: string;
  KeyStorageSecurityStandard?: string;
  Subject: ACMPCACertificateAuthoritySubject;
  Tags?: Tag[];
  KeyAlgorithm: string;
}
/**
 * Attributes type definition for AWS::ACMPCA::CertificateAuthority
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html | AWS::ACMPCA::CertificateAuthority}
 */
export interface ACMPCACertificateAuthorityAttribs {
  CertificateSigningRequest?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::ACMPCA::CertificateAuthority
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html | AWS::ACMPCA::CertificateAuthority}
 */
export class ACMPCACertificateAuthority extends ResourceBase<
  "AWS::ACMPCA::CertificateAuthority",
  ACMPCACertificateAuthorityProps,
  ACMPCACertificateAuthorityAttribs
> {
  public static readonly Type = "AWS::ACMPCA::CertificateAuthority";
  public static readonly AttributeNames: readonly (keyof ACMPCACertificateAuthorityAttribs)[] =
    ["CertificateSigningRequest", "Arn"];
  constructor(
    logicalId: string,
    properties: ACMPCACertificateAuthorityProps,
    options?: ResourceOptions,
  ) {
    super(
      ACMPCACertificateAuthority.Type,
      ACMPCACertificateAuthority.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ACMPCA::CertificateAuthorityActivation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthorityactivation.html | AWS::ACMPCA::CertificateAuthorityActivation}
 */
export interface ACMPCACertificateAuthorityActivationProps {
  Status?: string;
  CertificateAuthorityArn: string;
  CertificateChain?: string;
  Certificate: string;
}
/**
 * Attributes type definition for AWS::ACMPCA::CertificateAuthorityActivation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthorityactivation.html | AWS::ACMPCA::CertificateAuthorityActivation}
 */
export interface ACMPCACertificateAuthorityActivationAttribs {
  CompleteCertificateChain?: string;
}
/**
 * Resource class for AWS::ACMPCA::CertificateAuthorityActivation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthorityactivation.html | AWS::ACMPCA::CertificateAuthorityActivation}
 */
export class ACMPCACertificateAuthorityActivation extends ResourceBase<
  "AWS::ACMPCA::CertificateAuthorityActivation",
  ACMPCACertificateAuthorityActivationProps,
  ACMPCACertificateAuthorityActivationAttribs
> {
  public static readonly Type = "AWS::ACMPCA::CertificateAuthorityActivation";
  public static readonly AttributeNames: readonly (keyof ACMPCACertificateAuthorityActivationAttribs)[] =
    ["CompleteCertificateChain"];
  constructor(
    logicalId: string,
    properties: ACMPCACertificateAuthorityActivationProps,
    options?: ResourceOptions,
  ) {
    super(
      ACMPCACertificateAuthorityActivation.Type,
      ACMPCACertificateAuthorityActivation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ACMPCA::Permission
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-permission.html | AWS::ACMPCA::Permission}
 */
export interface ACMPCAPermissionProps {
  CertificateAuthorityArn: string;
  Actions: any[];
  SourceAccount?: string;
  Principal: string;
}
/**
 * Resource class for AWS::ACMPCA::Permission
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-permission.html | AWS::ACMPCA::Permission}
 */
export class ACMPCAPermission extends ResourceBase<
  "AWS::ACMPCA::Permission",
  ACMPCAPermissionProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::ACMPCA::Permission";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ACMPCAPermissionProps,
    options?: ResourceOptions,
  ) {
    super(
      ACMPCAPermission.Type,
      ACMPCAPermission.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
