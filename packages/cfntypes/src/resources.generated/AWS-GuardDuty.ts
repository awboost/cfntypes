import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::GuardDuty::Detector.CFNDataSourceConfigurations
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfndatasourceconfigurations.html | AWS::GuardDuty::Detector.CFNDataSourceConfigurations}
 */
export interface GuardDutyDetectorCFNDataSourceConfigurations {
  MalwareProtection?: GuardDutyDetectorCFNMalwareProtectionConfiguration;
  S3Logs?: GuardDutyDetectorCFNS3LogsConfiguration;
  Kubernetes?: GuardDutyDetectorCFNKubernetesConfiguration;
}
/**
 * Type definition for AWS::GuardDuty::Detector.CFNFeatureAdditionalConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfnfeatureadditionalconfiguration.html | AWS::GuardDuty::Detector.CFNFeatureAdditionalConfiguration}
 */
export interface GuardDutyDetectorCFNFeatureAdditionalConfiguration {
  Status?: string;
  Name?: string;
}
/**
 * Type definition for AWS::GuardDuty::Detector.CFNFeatureConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfnfeatureconfiguration.html | AWS::GuardDuty::Detector.CFNFeatureConfiguration}
 */
export interface GuardDutyDetectorCFNFeatureConfiguration {
  Status: string;
  AdditionalConfiguration?: any[];
  Name: string;
}
/**
 * Type definition for AWS::GuardDuty::Detector.CFNKubernetesAuditLogsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfnkubernetesauditlogsconfiguration.html | AWS::GuardDuty::Detector.CFNKubernetesAuditLogsConfiguration}
 */
export interface GuardDutyDetectorCFNKubernetesAuditLogsConfiguration {
  Enable: boolean;
}
/**
 * Type definition for AWS::GuardDuty::Detector.CFNKubernetesConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfnkubernetesconfiguration.html | AWS::GuardDuty::Detector.CFNKubernetesConfiguration}
 */
export interface GuardDutyDetectorCFNKubernetesConfiguration {
  AuditLogs: GuardDutyDetectorCFNKubernetesAuditLogsConfiguration;
}
/**
 * Type definition for AWS::GuardDuty::Detector.CFNMalwareProtectionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfnmalwareprotectionconfiguration.html | AWS::GuardDuty::Detector.CFNMalwareProtectionConfiguration}
 */
export interface GuardDutyDetectorCFNMalwareProtectionConfiguration {
  ScanEc2InstanceWithFindings?: GuardDutyDetectorCFNScanEc2InstanceWithFindingsConfiguration;
}
/**
 * Type definition for AWS::GuardDuty::Detector.CFNS3LogsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfns3logsconfiguration.html | AWS::GuardDuty::Detector.CFNS3LogsConfiguration}
 */
export interface GuardDutyDetectorCFNS3LogsConfiguration {
  Enable: boolean;
}
/**
 * Type definition for AWS::GuardDuty::Detector.CFNScanEc2InstanceWithFindingsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfnscanec2instancewithfindingsconfiguration.html | AWS::GuardDuty::Detector.CFNScanEc2InstanceWithFindingsConfiguration}
 */
export interface GuardDutyDetectorCFNScanEc2InstanceWithFindingsConfiguration {
  EbsVolumes?: boolean;
}
/**
 * Type definition for AWS::GuardDuty::Detector.TagItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-tagitem.html | AWS::GuardDuty::Detector.TagItem}
 */
export interface GuardDutyDetectorTagItem {
  Value: string;
  Key: string;
}
/**
 * Type definition for AWS::GuardDuty::Filter.Condition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-filter-condition.html | AWS::GuardDuty::Filter.Condition}
 */
export interface GuardDutyFilterCondition {
  Equals?: any[];
  LessThan?: number;
  LessThanOrEqual?: number;
  GreaterThan?: number;
  Lt?: number;
  Gte?: number;
  GreaterThanOrEqual?: number;
  Neq?: any[];
  Eq?: any[];
  Lte?: number;
  Gt?: number;
  NotEquals?: any[];
}
/**
 * Type definition for AWS::GuardDuty::Filter.FindingCriteria
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-filter-findingcriteria.html | AWS::GuardDuty::Filter.FindingCriteria}
 */
export interface GuardDutyFilterFindingCriteria {
  Criterion?: object;
  ItemType?: GuardDutyFilterCondition;
}
/**
 * Type definition for AWS::GuardDuty::Detector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html | AWS::GuardDuty::Detector}
 */
export interface GuardDutyDetectorProps {
  FindingPublishingFrequency?: string;
  DataSources?: GuardDutyDetectorCFNDataSourceConfigurations;
  Enable: boolean;
  Features?: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::GuardDuty::Detector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html | AWS::GuardDuty::Detector}
 */
export interface GuardDutyDetectorAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::GuardDuty::Detector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html | AWS::GuardDuty::Detector}
 */
export class GuardDutyDetector extends ResourceBase<
  "AWS::GuardDuty::Detector",
  GuardDutyDetectorProps,
  GuardDutyDetectorAttribs
> {
  public static readonly Type = "AWS::GuardDuty::Detector";
  public static readonly AttributeNames: readonly (keyof GuardDutyDetectorAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: GuardDutyDetectorProps,
    options?: ResourceOptions,
  ) {
    super(
      GuardDutyDetector.Type,
      GuardDutyDetector.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::GuardDuty::Filter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-filter.html | AWS::GuardDuty::Filter}
 */
export interface GuardDutyFilterProps {
  Action: string;
  Description: string;
  DetectorId: string;
  FindingCriteria: GuardDutyFilterFindingCriteria;
  Rank: number;
  Tags?: Tag[];
  Name: string;
}
/**
 * Resource class for AWS::GuardDuty::Filter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-filter.html | AWS::GuardDuty::Filter}
 */
export class GuardDutyFilter extends ResourceBase<
  "AWS::GuardDuty::Filter",
  GuardDutyFilterProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::GuardDuty::Filter";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: GuardDutyFilterProps,
    options?: ResourceOptions,
  ) {
    super(
      GuardDutyFilter.Type,
      GuardDutyFilter.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::GuardDuty::IPSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-ipset.html | AWS::GuardDuty::IPSet}
 */
export interface GuardDutyIPSetProps {
  Format: string;
  Activate: boolean;
  DetectorId: string;
  Tags?: Tag[];
  Name?: string;
  Location: string;
}
/**
 * Resource class for AWS::GuardDuty::IPSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-ipset.html | AWS::GuardDuty::IPSet}
 */
export class GuardDutyIPSet extends ResourceBase<
  "AWS::GuardDuty::IPSet",
  GuardDutyIPSetProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::GuardDuty::IPSet";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: GuardDutyIPSetProps,
    options?: ResourceOptions,
  ) {
    super(
      GuardDutyIPSet.Type,
      GuardDutyIPSet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::GuardDuty::Master
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-master.html | AWS::GuardDuty::Master}
 */
export interface GuardDutyMasterProps {
  DetectorId: string;
  MasterId: string;
  InvitationId?: string;
}
/**
 * Resource class for AWS::GuardDuty::Master
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-master.html | AWS::GuardDuty::Master}
 */
export class GuardDutyMaster extends ResourceBase<
  "AWS::GuardDuty::Master",
  GuardDutyMasterProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::GuardDuty::Master";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: GuardDutyMasterProps,
    options?: ResourceOptions,
  ) {
    super(
      GuardDutyMaster.Type,
      GuardDutyMaster.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::GuardDuty::Member
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-member.html | AWS::GuardDuty::Member}
 */
export interface GuardDutyMemberProps {
  Status?: string;
  MemberId: string;
  Email: string;
  Message?: string;
  DisableEmailNotification?: boolean;
  DetectorId: string;
}
/**
 * Resource class for AWS::GuardDuty::Member
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-member.html | AWS::GuardDuty::Member}
 */
export class GuardDutyMember extends ResourceBase<
  "AWS::GuardDuty::Member",
  GuardDutyMemberProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::GuardDuty::Member";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: GuardDutyMemberProps,
    options?: ResourceOptions,
  ) {
    super(
      GuardDutyMember.Type,
      GuardDutyMember.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::GuardDuty::ThreatIntelSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-threatintelset.html | AWS::GuardDuty::ThreatIntelSet}
 */
export interface GuardDutyThreatIntelSetProps {
  Format: string;
  Activate: boolean;
  DetectorId: string;
  Tags?: Tag[];
  Name?: string;
  Location: string;
}
/**
 * Resource class for AWS::GuardDuty::ThreatIntelSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-threatintelset.html | AWS::GuardDuty::ThreatIntelSet}
 */
export class GuardDutyThreatIntelSet extends ResourceBase<
  "AWS::GuardDuty::ThreatIntelSet",
  GuardDutyThreatIntelSetProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::GuardDuty::ThreatIntelSet";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: GuardDutyThreatIntelSetProps,
    options?: ResourceOptions,
  ) {
    super(
      GuardDutyThreatIntelSet.Type,
      GuardDutyThreatIntelSet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
