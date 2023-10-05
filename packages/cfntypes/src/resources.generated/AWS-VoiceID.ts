import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::VoiceID::Domain.ServerSideEncryptionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-voiceid-domain-serversideencryptionconfiguration.html | AWS::VoiceID::Domain.ServerSideEncryptionConfiguration}
 */
export interface VoiceIDDomainServerSideEncryptionConfiguration {
  KmsKeyId: string;
}
/**
 * Type definition for AWS::VoiceID::Domain
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-voiceid-domain.html | AWS::VoiceID::Domain}
 */
export interface VoiceIDDomainProps {
  Description?: string;
  ServerSideEncryptionConfiguration: VoiceIDDomainServerSideEncryptionConfiguration;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::VoiceID::Domain
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-voiceid-domain.html | AWS::VoiceID::Domain}
 */
export interface VoiceIDDomainAttribs {
  DomainId?: string;
}
/**
 * Resource class for AWS::VoiceID::Domain
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-voiceid-domain.html | AWS::VoiceID::Domain}
 */
export class VoiceIDDomain extends ResourceBase<
  "AWS::VoiceID::Domain",
  VoiceIDDomainProps,
  VoiceIDDomainAttribs
> {
  public static readonly Type = "AWS::VoiceID::Domain";
  public static readonly AttributeNames: readonly (keyof VoiceIDDomainAttribs)[] =
    ["DomainId"];
  constructor(
    logicalId: string,
    properties: VoiceIDDomainProps,
    options?: ResourceOptions,
  ) {
    super(
      VoiceIDDomain.Type,
      VoiceIDDomain.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
