import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::RolesAnywhere::TrustAnchor.NotificationSetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rolesanywhere-trustanchor-notificationsetting.html | AWS::RolesAnywhere::TrustAnchor.NotificationSetting}
 */
export interface RolesAnywhereTrustAnchorNotificationSetting {
  Channel?: string;
  Enabled: boolean;
  Event: string;
  Threshold?: number;
}
/**
 * Type definition for AWS::RolesAnywhere::TrustAnchor.Source
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rolesanywhere-trustanchor-source.html | AWS::RolesAnywhere::TrustAnchor.Source}
 */
export interface RolesAnywhereTrustAnchorSource {
  SourceType?: string;
  SourceData?: RolesAnywhereTrustAnchorSourceData;
}
/**
 * Type definition for AWS::RolesAnywhere::TrustAnchor.SourceData
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rolesanywhere-trustanchor-sourcedata.html | AWS::RolesAnywhere::TrustAnchor.SourceData}
 */
export interface RolesAnywhereTrustAnchorSourceData {
  AcmPcaArn?: string;
  X509CertificateData?: string;
}
/**
 * Type definition for AWS::RolesAnywhere::CRL
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-crl.html | AWS::RolesAnywhere::CRL}
 */
export interface RolesAnywhereCRLProps {
  TrustAnchorArn?: string;
  Enabled?: boolean;
  CrlData: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::RolesAnywhere::CRL
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-crl.html | AWS::RolesAnywhere::CRL}
 */
export interface RolesAnywhereCRLAttribs {
  CrlId?: string;
}
/**
 * Resource class for AWS::RolesAnywhere::CRL
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-crl.html | AWS::RolesAnywhere::CRL}
 */
export class RolesAnywhereCRL extends ResourceBase<
  "AWS::RolesAnywhere::CRL",
  RolesAnywhereCRLProps,
  RolesAnywhereCRLAttribs
> {
  public static readonly Type = "AWS::RolesAnywhere::CRL";
  public static readonly AttributeNames: readonly (keyof RolesAnywhereCRLAttribs)[] =
    ["CrlId"];
  constructor(
    logicalId: string,
    properties: RolesAnywhereCRLProps,
    options?: ResourceOptions,
  ) {
    super(
      RolesAnywhereCRL.Type,
      RolesAnywhereCRL.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::RolesAnywhere::Profile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html | AWS::RolesAnywhere::Profile}
 */
export interface RolesAnywhereProfileProps {
  ManagedPolicyArns?: any[];
  RequireInstanceProperties?: boolean;
  RoleArns: any[];
  SessionPolicy?: string;
  Enabled?: boolean;
  DurationSeconds?: number;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::RolesAnywhere::Profile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html | AWS::RolesAnywhere::Profile}
 */
export interface RolesAnywhereProfileAttribs {
  ProfileId?: string;
  ProfileArn?: string;
}
/**
 * Resource class for AWS::RolesAnywhere::Profile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html | AWS::RolesAnywhere::Profile}
 */
export class RolesAnywhereProfile extends ResourceBase<
  "AWS::RolesAnywhere::Profile",
  RolesAnywhereProfileProps,
  RolesAnywhereProfileAttribs
> {
  public static readonly Type = "AWS::RolesAnywhere::Profile";
  public static readonly AttributeNames: readonly (keyof RolesAnywhereProfileAttribs)[] =
    ["ProfileId", "ProfileArn"];
  constructor(
    logicalId: string,
    properties: RolesAnywhereProfileProps,
    options?: ResourceOptions,
  ) {
    super(
      RolesAnywhereProfile.Type,
      RolesAnywhereProfile.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::RolesAnywhere::TrustAnchor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-trustanchor.html | AWS::RolesAnywhere::TrustAnchor}
 */
export interface RolesAnywhereTrustAnchorProps {
  NotificationSettings?: any[];
  Enabled?: boolean;
  Source: RolesAnywhereTrustAnchorSource;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::RolesAnywhere::TrustAnchor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-trustanchor.html | AWS::RolesAnywhere::TrustAnchor}
 */
export interface RolesAnywhereTrustAnchorAttribs {
  TrustAnchorArn?: string;
  TrustAnchorId?: string;
}
/**
 * Resource class for AWS::RolesAnywhere::TrustAnchor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-trustanchor.html | AWS::RolesAnywhere::TrustAnchor}
 */
export class RolesAnywhereTrustAnchor extends ResourceBase<
  "AWS::RolesAnywhere::TrustAnchor",
  RolesAnywhereTrustAnchorProps,
  RolesAnywhereTrustAnchorAttribs
> {
  public static readonly Type = "AWS::RolesAnywhere::TrustAnchor";
  public static readonly AttributeNames: readonly (keyof RolesAnywhereTrustAnchorAttribs)[] =
    ["TrustAnchorArn", "TrustAnchorId"];
  constructor(
    logicalId: string,
    properties: RolesAnywhereTrustAnchorProps,
    options?: ResourceOptions,
  ) {
    super(
      RolesAnywhereTrustAnchor.Type,
      RolesAnywhereTrustAnchor.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
