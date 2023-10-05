import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Signer::SigningProfile.SignatureValidityPeriod
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-signer-signingprofile-signaturevalidityperiod.html | AWS::Signer::SigningProfile.SignatureValidityPeriod}
 */
export interface SignerSigningProfileSignatureValidityPeriod {
  Type?: string;
  Value?: number;
}
/**
 * Type definition for AWS::Signer::ProfilePermission
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-profilepermission.html | AWS::Signer::ProfilePermission}
 */
export interface SignerProfilePermissionProps {
  Action: string;
  StatementId: string;
  ProfileName: string;
  Principal: string;
  ProfileVersion?: string;
}
/**
 * Resource class for AWS::Signer::ProfilePermission
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-profilepermission.html | AWS::Signer::ProfilePermission}
 */
export class SignerProfilePermission extends ResourceBase<
  "AWS::Signer::ProfilePermission",
  SignerProfilePermissionProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Signer::ProfilePermission";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: SignerProfilePermissionProps,
    options?: ResourceOptions,
  ) {
    super(
      SignerProfilePermission.Type,
      SignerProfilePermission.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Signer::SigningProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-signingprofile.html | AWS::Signer::SigningProfile}
 */
export interface SignerSigningProfileProps {
  SignatureValidityPeriod?: SignerSigningProfileSignatureValidityPeriod;
  PlatformId: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::Signer::SigningProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-signingprofile.html | AWS::Signer::SigningProfile}
 */
export interface SignerSigningProfileAttribs {
  ProfileVersionArn?: string;
  ProfileName?: string;
  Arn?: string;
  ProfileVersion?: string;
}
/**
 * Resource class for AWS::Signer::SigningProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-signingprofile.html | AWS::Signer::SigningProfile}
 */
export class SignerSigningProfile extends ResourceBase<
  "AWS::Signer::SigningProfile",
  SignerSigningProfileProps,
  SignerSigningProfileAttribs
> {
  public static readonly Type = "AWS::Signer::SigningProfile";
  public static readonly AttributeNames: readonly (keyof SignerSigningProfileAttribs)[] =
    ["ProfileVersionArn", "ProfileName", "Arn", "ProfileVersion"];
  constructor(
    logicalId: string,
    properties: SignerSigningProfileProps,
    options?: ResourceOptions,
  ) {
    super(
      SignerSigningProfile.Type,
      SignerSigningProfile.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
