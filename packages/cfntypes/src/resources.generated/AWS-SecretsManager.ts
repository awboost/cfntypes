import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::SecretsManager::RotationSchedule.HostedRotationLambda
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-rotationschedule-hostedrotationlambda.html | AWS::SecretsManager::RotationSchedule.HostedRotationLambda}
 */
export interface SecretsManagerRotationScheduleHostedRotationLambda {
  Runtime?: string;
  RotationType: string;
  RotationLambdaName?: string;
  KmsKeyArn?: string;
  MasterSecretArn?: string;
  VpcSecurityGroupIds?: string;
  ExcludeCharacters?: string;
  MasterSecretKmsKeyArn?: string;
  SuperuserSecretArn?: string;
  SuperuserSecretKmsKeyArn?: string;
  VpcSubnetIds?: string;
}
/**
 * Type definition for AWS::SecretsManager::RotationSchedule.RotationRules
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-rotationschedule-rotationrules.html | AWS::SecretsManager::RotationSchedule.RotationRules}
 */
export interface SecretsManagerRotationScheduleRotationRules {
  ScheduleExpression?: string;
  Duration?: string;
  AutomaticallyAfterDays?: number;
}
/**
 * Type definition for AWS::SecretsManager::Secret.GenerateSecretString
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-secret-generatesecretstring.html | AWS::SecretsManager::Secret.GenerateSecretString}
 */
export interface SecretsManagerSecretGenerateSecretString {
  ExcludeUppercase?: boolean;
  RequireEachIncludedType?: boolean;
  IncludeSpace?: boolean;
  ExcludeCharacters?: string;
  GenerateStringKey?: string;
  PasswordLength?: number;
  ExcludePunctuation?: boolean;
  ExcludeLowercase?: boolean;
  SecretStringTemplate?: string;
  ExcludeNumbers?: boolean;
}
/**
 * Type definition for AWS::SecretsManager::Secret.ReplicaRegion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-secret-replicaregion.html | AWS::SecretsManager::Secret.ReplicaRegion}
 */
export interface SecretsManagerSecretReplicaRegion {
  KmsKeyId?: string;
  Region: string;
}
/**
 * Type definition for AWS::SecretsManager::ResourcePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-resourcepolicy.html | AWS::SecretsManager::ResourcePolicy}
 */
export interface SecretsManagerResourcePolicyProps {
  BlockPublicPolicy?: boolean;
  SecretId: string;
  ResourcePolicy: object;
}
/**
 * Resource class for AWS::SecretsManager::ResourcePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-resourcepolicy.html | AWS::SecretsManager::ResourcePolicy}
 */
export class SecretsManagerResourcePolicy extends ResourceBase<
  "AWS::SecretsManager::ResourcePolicy",
  SecretsManagerResourcePolicyProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::SecretsManager::ResourcePolicy";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: SecretsManagerResourcePolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      SecretsManagerResourcePolicy.Type,
      SecretsManagerResourcePolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SecretsManager::RotationSchedule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-rotationschedule.html | AWS::SecretsManager::RotationSchedule}
 */
export interface SecretsManagerRotationScheduleProps {
  SecretId: string;
  HostedRotationLambda?: SecretsManagerRotationScheduleHostedRotationLambda;
  RotationLambdaARN?: string;
  RotationRules?: SecretsManagerRotationScheduleRotationRules;
  RotateImmediatelyOnUpdate?: boolean;
}
/**
 * Resource class for AWS::SecretsManager::RotationSchedule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-rotationschedule.html | AWS::SecretsManager::RotationSchedule}
 */
export class SecretsManagerRotationSchedule extends ResourceBase<
  "AWS::SecretsManager::RotationSchedule",
  SecretsManagerRotationScheduleProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::SecretsManager::RotationSchedule";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: SecretsManagerRotationScheduleProps,
    options?: ResourceOptions,
  ) {
    super(
      SecretsManagerRotationSchedule.Type,
      SecretsManagerRotationSchedule.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SecretsManager::Secret
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secret.html | AWS::SecretsManager::Secret}
 */
export interface SecretsManagerSecretProps {
  Description?: string;
  KmsKeyId?: string;
  SecretString?: string;
  GenerateSecretString?: SecretsManagerSecretGenerateSecretString;
  ReplicaRegions?: any[];
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::SecretsManager::Secret
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secret.html | AWS::SecretsManager::Secret}
 */
export interface SecretsManagerSecretAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::SecretsManager::Secret
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secret.html | AWS::SecretsManager::Secret}
 */
export class SecretsManagerSecret extends ResourceBase<
  "AWS::SecretsManager::Secret",
  SecretsManagerSecretProps,
  SecretsManagerSecretAttribs
> {
  public static readonly Type = "AWS::SecretsManager::Secret";
  public static readonly AttributeNames: readonly (keyof SecretsManagerSecretAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: SecretsManagerSecretProps,
    options?: ResourceOptions,
  ) {
    super(
      SecretsManagerSecret.Type,
      SecretsManagerSecret.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::SecretsManager::SecretTargetAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secrettargetattachment.html | AWS::SecretsManager::SecretTargetAttachment}
 */
export interface SecretsManagerSecretTargetAttachmentProps {
  SecretId: string;
  TargetType: string;
  TargetId: string;
}
/**
 * Resource class for AWS::SecretsManager::SecretTargetAttachment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secrettargetattachment.html | AWS::SecretsManager::SecretTargetAttachment}
 */
export class SecretsManagerSecretTargetAttachment extends ResourceBase<
  "AWS::SecretsManager::SecretTargetAttachment",
  SecretsManagerSecretTargetAttachmentProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::SecretsManager::SecretTargetAttachment";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: SecretsManagerSecretTargetAttachmentProps,
    options?: ResourceOptions,
  ) {
    super(
      SecretsManagerSecretTargetAttachment.Type,
      SecretsManagerSecretTargetAttachment.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
