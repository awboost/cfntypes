import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::PCAConnectorAD::Connector.VpcInformation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-connector-vpcinformation.html | AWS::PCAConnectorAD::Connector.VpcInformation}
 */
export interface PCAConnectorADConnectorVpcInformation {
  SecurityGroupIds: any[];
}
/**
 * Type definition for AWS::PCAConnectorAD::Template.ApplicationPolicies
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-applicationpolicies.html | AWS::PCAConnectorAD::Template.ApplicationPolicies}
 */
export interface PCAConnectorADTemplateApplicationPolicies {
  Policies: any[];
  Critical?: boolean;
}
/**
 * Type definition for AWS::PCAConnectorAD::Template.ApplicationPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-applicationpolicy.html | AWS::PCAConnectorAD::Template.ApplicationPolicy}
 */
export interface PCAConnectorADTemplateApplicationPolicy {
  PolicyType?: string;
  PolicyObjectIdentifier?: string;
}
/**
 * Type definition for AWS::PCAConnectorAD::Template.CertificateValidity
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-certificatevalidity.html | AWS::PCAConnectorAD::Template.CertificateValidity}
 */
export interface PCAConnectorADTemplateCertificateValidity {
  ValidityPeriod: PCAConnectorADTemplateValidityPeriod;
  RenewalPeriod: PCAConnectorADTemplateValidityPeriod;
}
/**
 * Type definition for AWS::PCAConnectorAD::Template.EnrollmentFlagsV2
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-enrollmentflagsv2.html | AWS::PCAConnectorAD::Template.EnrollmentFlagsV2}
 */
export interface PCAConnectorADTemplateEnrollmentFlagsV2 {
  NoSecurityExtension?: boolean;
  IncludeSymmetricAlgorithms?: boolean;
  UserInteractionRequired?: boolean;
  EnableKeyReuseOnNtTokenKeysetStorageFull?: boolean;
  RemoveInvalidCertificateFromPersonalStore?: boolean;
}
/**
 * Type definition for AWS::PCAConnectorAD::Template.EnrollmentFlagsV3
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-enrollmentflagsv3.html | AWS::PCAConnectorAD::Template.EnrollmentFlagsV3}
 */
export interface PCAConnectorADTemplateEnrollmentFlagsV3 {
  NoSecurityExtension?: boolean;
  IncludeSymmetricAlgorithms?: boolean;
  UserInteractionRequired?: boolean;
  EnableKeyReuseOnNtTokenKeysetStorageFull?: boolean;
  RemoveInvalidCertificateFromPersonalStore?: boolean;
}
/**
 * Type definition for AWS::PCAConnectorAD::Template.EnrollmentFlagsV4
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-enrollmentflagsv4.html | AWS::PCAConnectorAD::Template.EnrollmentFlagsV4}
 */
export interface PCAConnectorADTemplateEnrollmentFlagsV4 {
  NoSecurityExtension?: boolean;
  IncludeSymmetricAlgorithms?: boolean;
  UserInteractionRequired?: boolean;
  EnableKeyReuseOnNtTokenKeysetStorageFull?: boolean;
  RemoveInvalidCertificateFromPersonalStore?: boolean;
}
/**
 * Type definition for AWS::PCAConnectorAD::Template.ExtensionsV2
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-extensionsv2.html | AWS::PCAConnectorAD::Template.ExtensionsV2}
 */
export interface PCAConnectorADTemplateExtensionsV2 {
  ApplicationPolicies?: PCAConnectorADTemplateApplicationPolicies;
  KeyUsage: PCAConnectorADTemplateKeyUsage;
}
/**
 * Type definition for AWS::PCAConnectorAD::Template.ExtensionsV3
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-extensionsv3.html | AWS::PCAConnectorAD::Template.ExtensionsV3}
 */
export interface PCAConnectorADTemplateExtensionsV3 {
  ApplicationPolicies?: PCAConnectorADTemplateApplicationPolicies;
  KeyUsage: PCAConnectorADTemplateKeyUsage;
}
/**
 * Type definition for AWS::PCAConnectorAD::Template.ExtensionsV4
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-extensionsv4.html | AWS::PCAConnectorAD::Template.ExtensionsV4}
 */
export interface PCAConnectorADTemplateExtensionsV4 {
  ApplicationPolicies?: PCAConnectorADTemplateApplicationPolicies;
  KeyUsage: PCAConnectorADTemplateKeyUsage;
}
/**
 * Type definition for AWS::PCAConnectorAD::Template.GeneralFlagsV2
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-generalflagsv2.html | AWS::PCAConnectorAD::Template.GeneralFlagsV2}
 */
export interface PCAConnectorADTemplateGeneralFlagsV2 {
  AutoEnrollment?: boolean;
  MachineType?: boolean;
}
/**
 * Type definition for AWS::PCAConnectorAD::Template.GeneralFlagsV3
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-generalflagsv3.html | AWS::PCAConnectorAD::Template.GeneralFlagsV3}
 */
export interface PCAConnectorADTemplateGeneralFlagsV3 {
  AutoEnrollment?: boolean;
  MachineType?: boolean;
}
/**
 * Type definition for AWS::PCAConnectorAD::Template.GeneralFlagsV4
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-generalflagsv4.html | AWS::PCAConnectorAD::Template.GeneralFlagsV4}
 */
export interface PCAConnectorADTemplateGeneralFlagsV4 {
  AutoEnrollment?: boolean;
  MachineType?: boolean;
}
/**
 * Type definition for AWS::PCAConnectorAD::Template.KeyUsage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-keyusage.html | AWS::PCAConnectorAD::Template.KeyUsage}
 */
export interface PCAConnectorADTemplateKeyUsage {
  Critical?: boolean;
  UsageFlags: PCAConnectorADTemplateKeyUsageFlags;
}
/**
 * Type definition for AWS::PCAConnectorAD::Template.KeyUsageFlags
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-keyusageflags.html | AWS::PCAConnectorAD::Template.KeyUsageFlags}
 */
export interface PCAConnectorADTemplateKeyUsageFlags {
  KeyEncipherment?: boolean;
  DataEncipherment?: boolean;
  DigitalSignature?: boolean;
  KeyAgreement?: boolean;
  NonRepudiation?: boolean;
}
/**
 * Type definition for AWS::PCAConnectorAD::Template.KeyUsageProperty
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-keyusageproperty.html | AWS::PCAConnectorAD::Template.KeyUsageProperty}
 */
export interface PCAConnectorADTemplateKeyUsageProperty {
  PropertyFlags?: PCAConnectorADTemplateKeyUsagePropertyFlags;
  PropertyType?: string;
}
/**
 * Type definition for AWS::PCAConnectorAD::Template.KeyUsagePropertyFlags
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-keyusagepropertyflags.html | AWS::PCAConnectorAD::Template.KeyUsagePropertyFlags}
 */
export interface PCAConnectorADTemplateKeyUsagePropertyFlags {
  Decrypt?: boolean;
  Sign?: boolean;
  KeyAgreement?: boolean;
}
/**
 * Type definition for AWS::PCAConnectorAD::Template.PrivateKeyAttributesV2
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyattributesv2.html | AWS::PCAConnectorAD::Template.PrivateKeyAttributesV2}
 */
export interface PCAConnectorADTemplatePrivateKeyAttributesV2 {
  MinimalKeyLength: number;
  KeySpec: string;
  CryptoProviders?: any[];
}
/**
 * Type definition for AWS::PCAConnectorAD::Template.PrivateKeyAttributesV3
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyattributesv3.html | AWS::PCAConnectorAD::Template.PrivateKeyAttributesV3}
 */
export interface PCAConnectorADTemplatePrivateKeyAttributesV3 {
  MinimalKeyLength: number;
  KeySpec: string;
  KeyUsageProperty: PCAConnectorADTemplateKeyUsageProperty;
  Algorithm: string;
  CryptoProviders?: any[];
}
/**
 * Type definition for AWS::PCAConnectorAD::Template.PrivateKeyAttributesV4
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyattributesv4.html | AWS::PCAConnectorAD::Template.PrivateKeyAttributesV4}
 */
export interface PCAConnectorADTemplatePrivateKeyAttributesV4 {
  MinimalKeyLength: number;
  KeySpec: string;
  KeyUsageProperty?: PCAConnectorADTemplateKeyUsageProperty;
  Algorithm?: string;
  CryptoProviders?: any[];
}
/**
 * Type definition for AWS::PCAConnectorAD::Template.PrivateKeyFlagsV2
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyflagsv2.html | AWS::PCAConnectorAD::Template.PrivateKeyFlagsV2}
 */
export interface PCAConnectorADTemplatePrivateKeyFlagsV2 {
  ExportableKey?: boolean;
  StrongKeyProtectionRequired?: boolean;
  ClientVersion: string;
}
/**
 * Type definition for AWS::PCAConnectorAD::Template.PrivateKeyFlagsV3
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyflagsv3.html | AWS::PCAConnectorAD::Template.PrivateKeyFlagsV3}
 */
export interface PCAConnectorADTemplatePrivateKeyFlagsV3 {
  RequireAlternateSignatureAlgorithm?: boolean;
  ExportableKey?: boolean;
  StrongKeyProtectionRequired?: boolean;
  ClientVersion: string;
}
/**
 * Type definition for AWS::PCAConnectorAD::Template.PrivateKeyFlagsV4
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyflagsv4.html | AWS::PCAConnectorAD::Template.PrivateKeyFlagsV4}
 */
export interface PCAConnectorADTemplatePrivateKeyFlagsV4 {
  RequireAlternateSignatureAlgorithm?: boolean;
  ExportableKey?: boolean;
  UseLegacyProvider?: boolean;
  StrongKeyProtectionRequired?: boolean;
  RequireSameKeyRenewal?: boolean;
  ClientVersion: string;
}
/**
 * Type definition for AWS::PCAConnectorAD::Template.SubjectNameFlagsV2
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv2.html | AWS::PCAConnectorAD::Template.SubjectNameFlagsV2}
 */
export interface PCAConnectorADTemplateSubjectNameFlagsV2 {
  SanRequireEmail?: boolean;
  SanRequireDns?: boolean;
  RequireCommonName?: boolean;
  SanRequireUpn?: boolean;
  SanRequireDomainDns?: boolean;
  SanRequireSpn?: boolean;
  RequireEmail?: boolean;
  RequireDirectoryPath?: boolean;
  SanRequireDirectoryGuid?: boolean;
  RequireDnsAsCn?: boolean;
}
/**
 * Type definition for AWS::PCAConnectorAD::Template.SubjectNameFlagsV3
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv3.html | AWS::PCAConnectorAD::Template.SubjectNameFlagsV3}
 */
export interface PCAConnectorADTemplateSubjectNameFlagsV3 {
  SanRequireEmail?: boolean;
  SanRequireDns?: boolean;
  RequireCommonName?: boolean;
  SanRequireUpn?: boolean;
  SanRequireDomainDns?: boolean;
  SanRequireSpn?: boolean;
  RequireEmail?: boolean;
  RequireDirectoryPath?: boolean;
  SanRequireDirectoryGuid?: boolean;
  RequireDnsAsCn?: boolean;
}
/**
 * Type definition for AWS::PCAConnectorAD::Template.SubjectNameFlagsV4
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv4.html | AWS::PCAConnectorAD::Template.SubjectNameFlagsV4}
 */
export interface PCAConnectorADTemplateSubjectNameFlagsV4 {
  SanRequireEmail?: boolean;
  SanRequireDns?: boolean;
  RequireCommonName?: boolean;
  SanRequireUpn?: boolean;
  SanRequireDomainDns?: boolean;
  SanRequireSpn?: boolean;
  RequireEmail?: boolean;
  RequireDirectoryPath?: boolean;
  SanRequireDirectoryGuid?: boolean;
  RequireDnsAsCn?: boolean;
}
/**
 * Type definition for AWS::PCAConnectorAD::Template.TemplateDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatedefinition.html | AWS::PCAConnectorAD::Template.TemplateDefinition}
 */
export interface PCAConnectorADTemplateTemplateDefinition {
  TemplateV4?: PCAConnectorADTemplateTemplateV4;
  TemplateV3?: PCAConnectorADTemplateTemplateV3;
  TemplateV2?: PCAConnectorADTemplateTemplateV2;
}
/**
 * Type definition for AWS::PCAConnectorAD::Template.TemplateV2
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatev2.html | AWS::PCAConnectorAD::Template.TemplateV2}
 */
export interface PCAConnectorADTemplateTemplateV2 {
  SubjectNameFlags: PCAConnectorADTemplateSubjectNameFlagsV2;
  SupersededTemplates?: any[];
  PrivateKeyFlags: PCAConnectorADTemplatePrivateKeyFlagsV2;
  PrivateKeyAttributes: PCAConnectorADTemplatePrivateKeyAttributesV2;
  GeneralFlags: PCAConnectorADTemplateGeneralFlagsV2;
  CertificateValidity: PCAConnectorADTemplateCertificateValidity;
  Extensions: PCAConnectorADTemplateExtensionsV2;
  EnrollmentFlags: PCAConnectorADTemplateEnrollmentFlagsV2;
}
/**
 * Type definition for AWS::PCAConnectorAD::Template.TemplateV3
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatev3.html | AWS::PCAConnectorAD::Template.TemplateV3}
 */
export interface PCAConnectorADTemplateTemplateV3 {
  SubjectNameFlags: PCAConnectorADTemplateSubjectNameFlagsV3;
  SupersededTemplates?: any[];
  PrivateKeyFlags: PCAConnectorADTemplatePrivateKeyFlagsV3;
  PrivateKeyAttributes: PCAConnectorADTemplatePrivateKeyAttributesV3;
  GeneralFlags: PCAConnectorADTemplateGeneralFlagsV3;
  CertificateValidity: PCAConnectorADTemplateCertificateValidity;
  Extensions: PCAConnectorADTemplateExtensionsV3;
  EnrollmentFlags: PCAConnectorADTemplateEnrollmentFlagsV3;
  HashAlgorithm: string;
}
/**
 * Type definition for AWS::PCAConnectorAD::Template.TemplateV4
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatev4.html | AWS::PCAConnectorAD::Template.TemplateV4}
 */
export interface PCAConnectorADTemplateTemplateV4 {
  SubjectNameFlags: PCAConnectorADTemplateSubjectNameFlagsV4;
  SupersededTemplates?: any[];
  PrivateKeyFlags: PCAConnectorADTemplatePrivateKeyFlagsV4;
  PrivateKeyAttributes: PCAConnectorADTemplatePrivateKeyAttributesV4;
  GeneralFlags: PCAConnectorADTemplateGeneralFlagsV4;
  CertificateValidity: PCAConnectorADTemplateCertificateValidity;
  Extensions: PCAConnectorADTemplateExtensionsV4;
  EnrollmentFlags: PCAConnectorADTemplateEnrollmentFlagsV4;
  HashAlgorithm?: string;
}
/**
 * Type definition for AWS::PCAConnectorAD::Template.ValidityPeriod
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-validityperiod.html | AWS::PCAConnectorAD::Template.ValidityPeriod}
 */
export interface PCAConnectorADTemplateValidityPeriod {
  PeriodType: string;
  Period: number;
}
/**
 * Type definition for AWS::PCAConnectorAD::TemplateGroupAccessControlEntry.AccessRights
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-templategroupaccesscontrolentry-accessrights.html | AWS::PCAConnectorAD::TemplateGroupAccessControlEntry.AccessRights}
 */
export interface PCAConnectorADTemplateGroupAccessControlEntryAccessRights {
  Enroll?: string;
  AutoEnroll?: string;
}
/**
 * Type definition for AWS::PCAConnectorAD::Connector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-connector.html | AWS::PCAConnectorAD::Connector}
 */
export interface PCAConnectorADConnectorProps {
  CertificateAuthorityArn: string;
  DirectoryId: string;
  VpcInformation: PCAConnectorADConnectorVpcInformation;
  Tags?: Record<string, Tag>;
}
/**
 * Attributes type definition for AWS::PCAConnectorAD::Connector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-connector.html | AWS::PCAConnectorAD::Connector}
 */
export interface PCAConnectorADConnectorAttribs {
  ConnectorArn?: string;
}
/**
 * Resource class for AWS::PCAConnectorAD::Connector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-connector.html | AWS::PCAConnectorAD::Connector}
 */
export class PCAConnectorADConnector extends ResourceBase<
  "AWS::PCAConnectorAD::Connector",
  PCAConnectorADConnectorProps,
  PCAConnectorADConnectorAttribs
> {
  public static readonly Type = "AWS::PCAConnectorAD::Connector";
  public static readonly AttributeNames: readonly (keyof PCAConnectorADConnectorAttribs)[] =
    ["ConnectorArn"];
  constructor(
    logicalId: string,
    properties: PCAConnectorADConnectorProps,
    options?: ResourceOptions,
  ) {
    super(
      PCAConnectorADConnector.Type,
      PCAConnectorADConnector.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::PCAConnectorAD::DirectoryRegistration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-directoryregistration.html | AWS::PCAConnectorAD::DirectoryRegistration}
 */
export interface PCAConnectorADDirectoryRegistrationProps {
  DirectoryId: string;
  Tags?: Record<string, Tag>;
}
/**
 * Attributes type definition for AWS::PCAConnectorAD::DirectoryRegistration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-directoryregistration.html | AWS::PCAConnectorAD::DirectoryRegistration}
 */
export interface PCAConnectorADDirectoryRegistrationAttribs {
  DirectoryRegistrationArn?: string;
}
/**
 * Resource class for AWS::PCAConnectorAD::DirectoryRegistration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-directoryregistration.html | AWS::PCAConnectorAD::DirectoryRegistration}
 */
export class PCAConnectorADDirectoryRegistration extends ResourceBase<
  "AWS::PCAConnectorAD::DirectoryRegistration",
  PCAConnectorADDirectoryRegistrationProps,
  PCAConnectorADDirectoryRegistrationAttribs
> {
  public static readonly Type = "AWS::PCAConnectorAD::DirectoryRegistration";
  public static readonly AttributeNames: readonly (keyof PCAConnectorADDirectoryRegistrationAttribs)[] =
    ["DirectoryRegistrationArn"];
  constructor(
    logicalId: string,
    properties: PCAConnectorADDirectoryRegistrationProps,
    options?: ResourceOptions,
  ) {
    super(
      PCAConnectorADDirectoryRegistration.Type,
      PCAConnectorADDirectoryRegistration.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::PCAConnectorAD::ServicePrincipalName
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-serviceprincipalname.html | AWS::PCAConnectorAD::ServicePrincipalName}
 */
export interface PCAConnectorADServicePrincipalNameProps {
  ConnectorArn?: string;
  DirectoryRegistrationArn?: string;
}
/**
 * Resource class for AWS::PCAConnectorAD::ServicePrincipalName
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-serviceprincipalname.html | AWS::PCAConnectorAD::ServicePrincipalName}
 */
export class PCAConnectorADServicePrincipalName extends ResourceBase<
  "AWS::PCAConnectorAD::ServicePrincipalName",
  PCAConnectorADServicePrincipalNameProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::PCAConnectorAD::ServicePrincipalName";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: PCAConnectorADServicePrincipalNameProps,
    options?: ResourceOptions,
  ) {
    super(
      PCAConnectorADServicePrincipalName.Type,
      PCAConnectorADServicePrincipalName.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::PCAConnectorAD::Template
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html | AWS::PCAConnectorAD::Template}
 */
export interface PCAConnectorADTemplateProps {
  ConnectorArn: string;
  Definition: PCAConnectorADTemplateTemplateDefinition;
  Tags?: Record<string, Tag>;
  Name: string;
  ReenrollAllCertificateHolders?: boolean;
}
/**
 * Attributes type definition for AWS::PCAConnectorAD::Template
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html | AWS::PCAConnectorAD::Template}
 */
export interface PCAConnectorADTemplateAttribs {
  TemplateArn?: string;
}
/**
 * Resource class for AWS::PCAConnectorAD::Template
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html | AWS::PCAConnectorAD::Template}
 */
export class PCAConnectorADTemplate extends ResourceBase<
  "AWS::PCAConnectorAD::Template",
  PCAConnectorADTemplateProps,
  PCAConnectorADTemplateAttribs
> {
  public static readonly Type = "AWS::PCAConnectorAD::Template";
  public static readonly AttributeNames: readonly (keyof PCAConnectorADTemplateAttribs)[] =
    ["TemplateArn"];
  constructor(
    logicalId: string,
    properties: PCAConnectorADTemplateProps,
    options?: ResourceOptions,
  ) {
    super(
      PCAConnectorADTemplate.Type,
      PCAConnectorADTemplate.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::PCAConnectorAD::TemplateGroupAccessControlEntry
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-templategroupaccesscontrolentry.html | AWS::PCAConnectorAD::TemplateGroupAccessControlEntry}
 */
export interface PCAConnectorADTemplateGroupAccessControlEntryProps {
  AccessRights: PCAConnectorADTemplateGroupAccessControlEntryAccessRights;
  TemplateArn?: string;
  GroupDisplayName: string;
  GroupSecurityIdentifier?: string;
}
/**
 * Resource class for AWS::PCAConnectorAD::TemplateGroupAccessControlEntry
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-templategroupaccesscontrolentry.html | AWS::PCAConnectorAD::TemplateGroupAccessControlEntry}
 */
export class PCAConnectorADTemplateGroupAccessControlEntry extends ResourceBase<
  "AWS::PCAConnectorAD::TemplateGroupAccessControlEntry",
  PCAConnectorADTemplateGroupAccessControlEntryProps,
  Record<string, never>
> {
  public static readonly Type =
    "AWS::PCAConnectorAD::TemplateGroupAccessControlEntry";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: PCAConnectorADTemplateGroupAccessControlEntryProps,
    options?: ResourceOptions,
  ) {
    super(
      PCAConnectorADTemplateGroupAccessControlEntry.Type,
      PCAConnectorADTemplateGroupAccessControlEntry.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
