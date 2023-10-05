import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::CleanRooms::AnalysisTemplate.AnalysisParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-analysistemplate-analysisparameter.html | AWS::CleanRooms::AnalysisTemplate.AnalysisParameter}
 */
export interface CleanRoomsAnalysisTemplateAnalysisParameter {
  DefaultValue?: string;
  Type: string;
  Name: string;
}
/**
 * Type definition for AWS::CleanRooms::AnalysisTemplate.AnalysisSchema
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-analysistemplate-analysisschema.html | AWS::CleanRooms::AnalysisTemplate.AnalysisSchema}
 */
export interface CleanRoomsAnalysisTemplateAnalysisSchema {
  ReferencedTables: any[];
}
/**
 * Type definition for AWS::CleanRooms::AnalysisTemplate.AnalysisSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-analysistemplate-analysissource.html | AWS::CleanRooms::AnalysisTemplate.AnalysisSource}
 */
export interface CleanRoomsAnalysisTemplateAnalysisSource {
  Text: string;
}
/**
 * Type definition for AWS::CleanRooms::Collaboration.DataEncryptionMetadata
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-dataencryptionmetadata.html | AWS::CleanRooms::Collaboration.DataEncryptionMetadata}
 */
export interface CleanRoomsCollaborationDataEncryptionMetadata {
  AllowCleartext: boolean;
  PreserveNulls: boolean;
  AllowJoinsOnColumnsWithDifferentNames: boolean;
  AllowDuplicates: boolean;
}
/**
 * Type definition for AWS::CleanRooms::Collaboration.MemberSpecification
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-memberspecification.html | AWS::CleanRooms::Collaboration.MemberSpecification}
 */
export interface CleanRoomsCollaborationMemberSpecification {
  AccountId: string;
  DisplayName: string;
  MemberAbilities: any[];
}
/**
 * Type definition for AWS::CleanRooms::ConfiguredTable.AggregateColumn
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-aggregatecolumn.html | AWS::CleanRooms::ConfiguredTable.AggregateColumn}
 */
export interface CleanRoomsConfiguredTableAggregateColumn {
  Function: string;
  ColumnNames: any[];
}
/**
 * Type definition for AWS::CleanRooms::ConfiguredTable.AggregationConstraint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-aggregationconstraint.html | AWS::CleanRooms::ConfiguredTable.AggregationConstraint}
 */
export interface CleanRoomsConfiguredTableAggregationConstraint {
  ColumnName: string;
  Minimum: number;
  Type: string;
}
/**
 * Type definition for AWS::CleanRooms::ConfiguredTable.AnalysisRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-analysisrule.html | AWS::CleanRooms::ConfiguredTable.AnalysisRule}
 */
export interface CleanRoomsConfiguredTableAnalysisRule {
  Policy: CleanRoomsConfiguredTableConfiguredTableAnalysisRulePolicy;
  Type: string;
}
/**
 * Type definition for AWS::CleanRooms::ConfiguredTable.AnalysisRuleAggregation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-analysisruleaggregation.html | AWS::CleanRooms::ConfiguredTable.AnalysisRuleAggregation}
 */
export interface CleanRoomsConfiguredTableAnalysisRuleAggregation {
  AllowedJoinOperators?: any[];
  ScalarFunctions: any[];
  OutputConstraints: any[];
  DimensionColumns: any[];
  JoinColumns: any[];
  JoinRequired?: string;
  AggregateColumns: any[];
}
/**
 * Type definition for AWS::CleanRooms::ConfiguredTable.AnalysisRuleCustom
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-analysisrulecustom.html | AWS::CleanRooms::ConfiguredTable.AnalysisRuleCustom}
 */
export interface CleanRoomsConfiguredTableAnalysisRuleCustom {
  AllowedAnalysisProviders?: any[];
  AllowedAnalyses: any[];
}
/**
 * Type definition for AWS::CleanRooms::ConfiguredTable.AnalysisRuleList
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-analysisrulelist.html | AWS::CleanRooms::ConfiguredTable.AnalysisRuleList}
 */
export interface CleanRoomsConfiguredTableAnalysisRuleList {
  AllowedJoinOperators?: any[];
  ListColumns: any[];
  JoinColumns: any[];
}
/**
 * Type definition for AWS::CleanRooms::ConfiguredTable.ConfiguredTableAnalysisRulePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-configuredtableanalysisrulepolicy.html | AWS::CleanRooms::ConfiguredTable.ConfiguredTableAnalysisRulePolicy}
 */
export interface CleanRoomsConfiguredTableConfiguredTableAnalysisRulePolicy {
  V1: CleanRoomsConfiguredTableConfiguredTableAnalysisRulePolicyV1;
}
/**
 * Type definition for AWS::CleanRooms::ConfiguredTable.ConfiguredTableAnalysisRulePolicyV1
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-configuredtableanalysisrulepolicyv1.html | AWS::CleanRooms::ConfiguredTable.ConfiguredTableAnalysisRulePolicyV1}
 */
export interface CleanRoomsConfiguredTableConfiguredTableAnalysisRulePolicyV1 {
  Aggregation?: CleanRoomsConfiguredTableAnalysisRuleAggregation;
  List?: CleanRoomsConfiguredTableAnalysisRuleList;
  Custom?: CleanRoomsConfiguredTableAnalysisRuleCustom;
}
/**
 * Type definition for AWS::CleanRooms::ConfiguredTable.GlueTableReference
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-gluetablereference.html | AWS::CleanRooms::ConfiguredTable.GlueTableReference}
 */
export interface CleanRoomsConfiguredTableGlueTableReference {
  TableName: string;
  DatabaseName: string;
}
/**
 * Type definition for AWS::CleanRooms::ConfiguredTable.TableReference
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtable-tablereference.html | AWS::CleanRooms::ConfiguredTable.TableReference}
 */
export interface CleanRoomsConfiguredTableTableReference {
  Glue: CleanRoomsConfiguredTableGlueTableReference;
}
/**
 * Type definition for AWS::CleanRooms::Membership.MembershipProtectedQueryOutputConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-membershipprotectedqueryoutputconfiguration.html | AWS::CleanRooms::Membership.MembershipProtectedQueryOutputConfiguration}
 */
export interface CleanRoomsMembershipMembershipProtectedQueryOutputConfiguration {
  S3: CleanRoomsMembershipProtectedQueryS3OutputConfiguration;
}
/**
 * Type definition for AWS::CleanRooms::Membership.MembershipProtectedQueryResultConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-membershipprotectedqueryresultconfiguration.html | AWS::CleanRooms::Membership.MembershipProtectedQueryResultConfiguration}
 */
export interface CleanRoomsMembershipMembershipProtectedQueryResultConfiguration {
  OutputConfiguration: CleanRoomsMembershipMembershipProtectedQueryOutputConfiguration;
  RoleArn?: string;
}
/**
 * Type definition for AWS::CleanRooms::Membership.ProtectedQueryS3OutputConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-protectedquerys3outputconfiguration.html | AWS::CleanRooms::Membership.ProtectedQueryS3OutputConfiguration}
 */
export interface CleanRoomsMembershipProtectedQueryS3OutputConfiguration {
  Bucket: string;
  ResultFormat: string;
  KeyPrefix?: string;
}
/**
 * Type definition for AWS::CleanRooms::AnalysisTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html | AWS::CleanRooms::AnalysisTemplate}
 */
export interface CleanRoomsAnalysisTemplateProps {
  MembershipIdentifier: string;
  Description?: string;
  Format: string;
  AnalysisParameters?: any[];
  Source: CleanRoomsAnalysisTemplateAnalysisSource;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::CleanRooms::AnalysisTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html | AWS::CleanRooms::AnalysisTemplate}
 */
export interface CleanRoomsAnalysisTemplateAttribs {
  CollaborationIdentifier?: string;
  "Schema.ReferencedTables"?: any[];
  MembershipArn?: string;
  Schema?: CleanRoomsAnalysisTemplateAnalysisSchema;
  Arn?: string;
  CollaborationArn?: string;
  AnalysisTemplateIdentifier?: string;
}
/**
 * Resource class for AWS::CleanRooms::AnalysisTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html | AWS::CleanRooms::AnalysisTemplate}
 */
export class CleanRoomsAnalysisTemplate extends ResourceBase<
  "AWS::CleanRooms::AnalysisTemplate",
  CleanRoomsAnalysisTemplateProps,
  CleanRoomsAnalysisTemplateAttribs
> {
  public static readonly Type = "AWS::CleanRooms::AnalysisTemplate";
  public static readonly AttributeNames: readonly (keyof CleanRoomsAnalysisTemplateAttribs)[] =
    [
      "CollaborationIdentifier",
      "Schema.ReferencedTables",
      "MembershipArn",
      "Schema",
      "Arn",
      "CollaborationArn",
      "AnalysisTemplateIdentifier",
    ];
  constructor(
    logicalId: string,
    properties: CleanRoomsAnalysisTemplateProps,
    options?: ResourceOptions,
  ) {
    super(
      CleanRoomsAnalysisTemplate.Type,
      CleanRoomsAnalysisTemplate.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CleanRooms::Collaboration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html | AWS::CleanRooms::Collaboration}
 */
export interface CleanRoomsCollaborationProps {
  CreatorDisplayName: string;
  CreatorMemberAbilities: any[];
  Description: string;
  QueryLogStatus: string;
  DataEncryptionMetadata?: CleanRoomsCollaborationDataEncryptionMetadata;
  Tags?: Tag[];
  Members: any[];
  Name: string;
}
/**
 * Attributes type definition for AWS::CleanRooms::Collaboration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html | AWS::CleanRooms::Collaboration}
 */
export interface CleanRoomsCollaborationAttribs {
  CollaborationIdentifier?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::CleanRooms::Collaboration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html | AWS::CleanRooms::Collaboration}
 */
export class CleanRoomsCollaboration extends ResourceBase<
  "AWS::CleanRooms::Collaboration",
  CleanRoomsCollaborationProps,
  CleanRoomsCollaborationAttribs
> {
  public static readonly Type = "AWS::CleanRooms::Collaboration";
  public static readonly AttributeNames: readonly (keyof CleanRoomsCollaborationAttribs)[] =
    ["CollaborationIdentifier", "Arn"];
  constructor(
    logicalId: string,
    properties: CleanRoomsCollaborationProps,
    options?: ResourceOptions,
  ) {
    super(
      CleanRoomsCollaboration.Type,
      CleanRoomsCollaboration.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CleanRooms::ConfiguredTable
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html | AWS::CleanRooms::ConfiguredTable}
 */
export interface CleanRoomsConfiguredTableProps {
  AnalysisMethod: string;
  TableReference: CleanRoomsConfiguredTableTableReference;
  Description?: string;
  AnalysisRules?: any[];
  AllowedColumns: any[];
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::CleanRooms::ConfiguredTable
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html | AWS::CleanRooms::ConfiguredTable}
 */
export interface CleanRoomsConfiguredTableAttribs {
  ConfiguredTableIdentifier?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::CleanRooms::ConfiguredTable
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html | AWS::CleanRooms::ConfiguredTable}
 */
export class CleanRoomsConfiguredTable extends ResourceBase<
  "AWS::CleanRooms::ConfiguredTable",
  CleanRoomsConfiguredTableProps,
  CleanRoomsConfiguredTableAttribs
> {
  public static readonly Type = "AWS::CleanRooms::ConfiguredTable";
  public static readonly AttributeNames: readonly (keyof CleanRoomsConfiguredTableAttribs)[] =
    ["ConfiguredTableIdentifier", "Arn"];
  constructor(
    logicalId: string,
    properties: CleanRoomsConfiguredTableProps,
    options?: ResourceOptions,
  ) {
    super(
      CleanRoomsConfiguredTable.Type,
      CleanRoomsConfiguredTable.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CleanRooms::ConfiguredTableAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtableassociation.html | AWS::CleanRooms::ConfiguredTableAssociation}
 */
export interface CleanRoomsConfiguredTableAssociationProps {
  MembershipIdentifier: string;
  Description?: string;
  ConfiguredTableIdentifier: string;
  Tags?: Tag[];
  RoleArn: string;
  Name: string;
}
/**
 * Attributes type definition for AWS::CleanRooms::ConfiguredTableAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtableassociation.html | AWS::CleanRooms::ConfiguredTableAssociation}
 */
export interface CleanRoomsConfiguredTableAssociationAttribs {
  ConfiguredTableAssociationIdentifier?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::CleanRooms::ConfiguredTableAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtableassociation.html | AWS::CleanRooms::ConfiguredTableAssociation}
 */
export class CleanRoomsConfiguredTableAssociation extends ResourceBase<
  "AWS::CleanRooms::ConfiguredTableAssociation",
  CleanRoomsConfiguredTableAssociationProps,
  CleanRoomsConfiguredTableAssociationAttribs
> {
  public static readonly Type = "AWS::CleanRooms::ConfiguredTableAssociation";
  public static readonly AttributeNames: readonly (keyof CleanRoomsConfiguredTableAssociationAttribs)[] =
    ["ConfiguredTableAssociationIdentifier", "Arn"];
  constructor(
    logicalId: string,
    properties: CleanRoomsConfiguredTableAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      CleanRoomsConfiguredTableAssociation.Type,
      CleanRoomsConfiguredTableAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CleanRooms::Membership
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html | AWS::CleanRooms::Membership}
 */
export interface CleanRoomsMembershipProps {
  CollaborationIdentifier: string;
  DefaultResultConfiguration?: CleanRoomsMembershipMembershipProtectedQueryResultConfiguration;
  QueryLogStatus: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::CleanRooms::Membership
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html | AWS::CleanRooms::Membership}
 */
export interface CleanRoomsMembershipAttribs {
  MembershipIdentifier?: string;
  Arn?: string;
  CollaborationCreatorAccountId?: string;
  CollaborationArn?: string;
}
/**
 * Resource class for AWS::CleanRooms::Membership
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html | AWS::CleanRooms::Membership}
 */
export class CleanRoomsMembership extends ResourceBase<
  "AWS::CleanRooms::Membership",
  CleanRoomsMembershipProps,
  CleanRoomsMembershipAttribs
> {
  public static readonly Type = "AWS::CleanRooms::Membership";
  public static readonly AttributeNames: readonly (keyof CleanRoomsMembershipAttribs)[] =
    [
      "MembershipIdentifier",
      "Arn",
      "CollaborationCreatorAccountId",
      "CollaborationArn",
    ];
  constructor(
    logicalId: string,
    properties: CleanRoomsMembershipProps,
    options?: ResourceOptions,
  ) {
    super(
      CleanRoomsMembership.Type,
      CleanRoomsMembership.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
