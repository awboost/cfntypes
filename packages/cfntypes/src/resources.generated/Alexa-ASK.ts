import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for Alexa::ASK::Skill.AuthenticationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ask-skill-authenticationconfiguration.html | Alexa::ASK::Skill.AuthenticationConfiguration}
 */
export interface AlexaASKSkillAuthenticationConfiguration {
  RefreshToken: string;
  ClientSecret: string;
  ClientId: string;
}
/**
 * Type definition for Alexa::ASK::Skill.Overrides
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ask-skill-overrides.html | Alexa::ASK::Skill.Overrides}
 */
export interface AlexaASKSkillOverrides {
  Manifest?: object;
}
/**
 * Type definition for Alexa::ASK::Skill.SkillPackage
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ask-skill-skillpackage.html | Alexa::ASK::Skill.SkillPackage}
 */
export interface AlexaASKSkillSkillPackage {
  S3BucketRole?: string;
  S3ObjectVersion?: string;
  S3Bucket: string;
  S3Key: string;
  Overrides?: AlexaASKSkillOverrides;
}
/**
 * Type definition for Alexa::ASK::Skill
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ask-skill.html | Alexa::ASK::Skill}
 */
export interface AlexaASKSkillProps {
  AuthenticationConfiguration: AlexaASKSkillAuthenticationConfiguration;
  VendorId: string;
  SkillPackage: AlexaASKSkillSkillPackage;
}
/**
 * Resource class for Alexa::ASK::Skill
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ask-skill.html | Alexa::ASK::Skill}
 */
export class AlexaASKSkill extends ResourceBase<
  "Alexa::ASK::Skill",
  AlexaASKSkillProps,
  Record<string, never>
> {
  public static readonly Type = "Alexa::ASK::Skill";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: AlexaASKSkillProps,
    options?: ResourceOptions,
  ) {
    super(
      AlexaASKSkill.Type,
      AlexaASKSkill.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
