import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Macie::AllowList.Criteria
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-macie-allowlist-criteria.html | AWS::Macie::AllowList.Criteria}
 */
export interface MacieAllowListCriteria {
  Regex?: string;
  S3WordsList?: MacieAllowListS3WordsList;
}
/**
 * Type definition for AWS::Macie::AllowList.S3WordsList
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-macie-allowlist-s3wordslist.html | AWS::Macie::AllowList.S3WordsList}
 */
export interface MacieAllowListS3WordsList {
  BucketName: string;
  ObjectKey: string;
}
/**
 * Type definition for AWS::Macie::FindingsFilter.CriterionAdditionalProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-macie-findingsfilter-criterionadditionalproperties.html | AWS::Macie::FindingsFilter.CriterionAdditionalProperties}
 */
export interface MacieFindingsFilterCriterionAdditionalProperties {
  lt?: number;
  gte?: number;
  neq?: any[];
  lte?: number;
  eq?: any[];
  gt?: number;
}
/**
 * Type definition for AWS::Macie::FindingsFilter.FindingCriteria
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-macie-findingsfilter-findingcriteria.html | AWS::Macie::FindingsFilter.FindingCriteria}
 */
export interface MacieFindingsFilterFindingCriteria {
  Criterion?: Record<string, any>;
}
/**
 * Type definition for AWS::Macie::AllowList
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-allowlist.html | AWS::Macie::AllowList}
 */
export interface MacieAllowListProps {
  Description?: string;
  Criteria: MacieAllowListCriteria;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::Macie::AllowList
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-allowlist.html | AWS::Macie::AllowList}
 */
export interface MacieAllowListAttribs {
  Status?: string;
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::Macie::AllowList
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-allowlist.html | AWS::Macie::AllowList}
 */
export class MacieAllowList extends ResourceBase<
  "AWS::Macie::AllowList",
  MacieAllowListProps,
  MacieAllowListAttribs
> {
  public static readonly Type = "AWS::Macie::AllowList";
  public static readonly AttributeNames: readonly (keyof MacieAllowListAttribs)[] =
    ["Status", "Id", "Arn"];
  constructor(
    logicalId: string,
    properties: MacieAllowListProps,
    options?: ResourceOptions,
  ) {
    super(
      MacieAllowList.Type,
      MacieAllowList.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Macie::CustomDataIdentifier
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-customdataidentifier.html | AWS::Macie::CustomDataIdentifier}
 */
export interface MacieCustomDataIdentifierProps {
  Description?: string;
  Keywords?: any[];
  Regex: string;
  IgnoreWords?: any[];
  Tags?: Tag[];
  Name: string;
  MaximumMatchDistance?: number;
}
/**
 * Attributes type definition for AWS::Macie::CustomDataIdentifier
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-customdataidentifier.html | AWS::Macie::CustomDataIdentifier}
 */
export interface MacieCustomDataIdentifierAttribs {
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::Macie::CustomDataIdentifier
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-customdataidentifier.html | AWS::Macie::CustomDataIdentifier}
 */
export class MacieCustomDataIdentifier extends ResourceBase<
  "AWS::Macie::CustomDataIdentifier",
  MacieCustomDataIdentifierProps,
  MacieCustomDataIdentifierAttribs
> {
  public static readonly Type = "AWS::Macie::CustomDataIdentifier";
  public static readonly AttributeNames: readonly (keyof MacieCustomDataIdentifierAttribs)[] =
    ["Id", "Arn"];
  constructor(
    logicalId: string,
    properties: MacieCustomDataIdentifierProps,
    options?: ResourceOptions,
  ) {
    super(
      MacieCustomDataIdentifier.Type,
      MacieCustomDataIdentifier.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Macie::FindingsFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-findingsfilter.html | AWS::Macie::FindingsFilter}
 */
export interface MacieFindingsFilterProps {
  Action?: string;
  Description?: string;
  Position?: number;
  FindingCriteria: MacieFindingsFilterFindingCriteria;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::Macie::FindingsFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-findingsfilter.html | AWS::Macie::FindingsFilter}
 */
export interface MacieFindingsFilterAttribs {
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::Macie::FindingsFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-findingsfilter.html | AWS::Macie::FindingsFilter}
 */
export class MacieFindingsFilter extends ResourceBase<
  "AWS::Macie::FindingsFilter",
  MacieFindingsFilterProps,
  MacieFindingsFilterAttribs
> {
  public static readonly Type = "AWS::Macie::FindingsFilter";
  public static readonly AttributeNames: readonly (keyof MacieFindingsFilterAttribs)[] =
    ["Id", "Arn"];
  constructor(
    logicalId: string,
    properties: MacieFindingsFilterProps,
    options?: ResourceOptions,
  ) {
    super(
      MacieFindingsFilter.Type,
      MacieFindingsFilter.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Macie::Session
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-session.html | AWS::Macie::Session}
 */
export interface MacieSessionProps {
  Status?: string;
  FindingPublishingFrequency?: string;
}
/**
 * Attributes type definition for AWS::Macie::Session
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-session.html | AWS::Macie::Session}
 */
export interface MacieSessionAttribs {
  ServiceRole?: string;
  AwsAccountId?: string;
}
/**
 * Resource class for AWS::Macie::Session
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-session.html | AWS::Macie::Session}
 */
export class MacieSession extends ResourceBase<
  "AWS::Macie::Session",
  MacieSessionProps,
  MacieSessionAttribs
> {
  public static readonly Type = "AWS::Macie::Session";
  public static readonly AttributeNames: readonly (keyof MacieSessionAttribs)[] =
    ["ServiceRole", "AwsAccountId"];
  constructor(
    logicalId: string,
    properties: MacieSessionProps,
    options?: ResourceOptions,
  ) {
    super(
      MacieSession.Type,
      MacieSession.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
