import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::AuditManager::Assessment.AWSAccount
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-awsaccount.html | AWS::AuditManager::Assessment.AWSAccount}
 */
export interface AuditManagerAssessmentAWSAccount {
  Id?: string;
  EmailAddress?: string;
  Name?: string;
}
/**
 * Type definition for AWS::AuditManager::Assessment.AWSService
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-awsservice.html | AWS::AuditManager::Assessment.AWSService}
 */
export interface AuditManagerAssessmentAWSService {
  ServiceName?: string;
}
/**
 * Type definition for AWS::AuditManager::Assessment.AssessmentReportsDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-assessmentreportsdestination.html | AWS::AuditManager::Assessment.AssessmentReportsDestination}
 */
export interface AuditManagerAssessmentAssessmentReportsDestination {
  Destination?: string;
  DestinationType?: string;
}
/**
 * Type definition for AWS::AuditManager::Assessment.Delegation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-delegation.html | AWS::AuditManager::Assessment.Delegation}
 */
export interface AuditManagerAssessmentDelegation {
  Status?: string;
  Comment?: string;
  CreatedBy?: string;
  RoleType?: string;
  AssessmentId?: string;
  CreationTime?: number;
  LastUpdated?: number;
  Id?: string;
  AssessmentName?: string;
  RoleArn?: string;
  ControlSetId?: string;
}
/**
 * Type definition for AWS::AuditManager::Assessment.Role
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-role.html | AWS::AuditManager::Assessment.Role}
 */
export interface AuditManagerAssessmentRole {
  RoleType?: string;
  RoleArn?: string;
}
/**
 * Type definition for AWS::AuditManager::Assessment.Scope
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-scope.html | AWS::AuditManager::Assessment.Scope}
 */
export interface AuditManagerAssessmentScope {
  AwsAccounts?: any[];
  AwsServices?: any[];
}
/**
 * Type definition for AWS::AuditManager::Assessment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html | AWS::AuditManager::Assessment}
 */
export interface AuditManagerAssessmentProps {
  Status?: string;
  AssessmentReportsDestination?: AuditManagerAssessmentAssessmentReportsDestination;
  Delegations?: any[];
  Description?: string;
  Scope?: AuditManagerAssessmentScope;
  AwsAccount?: AuditManagerAssessmentAWSAccount;
  Roles?: any[];
  FrameworkId?: string;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::AuditManager::Assessment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html | AWS::AuditManager::Assessment}
 */
export interface AuditManagerAssessmentAttribs {
  AssessmentId?: string;
  CreationTime?: number;
  Arn?: string;
}
/**
 * Resource class for AWS::AuditManager::Assessment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html | AWS::AuditManager::Assessment}
 */
export class AuditManagerAssessment extends ResourceBase<
  "AWS::AuditManager::Assessment",
  AuditManagerAssessmentProps,
  AuditManagerAssessmentAttribs
> {
  public static readonly Type = "AWS::AuditManager::Assessment";
  public static readonly AttributeNames: readonly (keyof AuditManagerAssessmentAttribs)[] =
    ["AssessmentId", "CreationTime", "Arn"];
  constructor(
    logicalId: string,
    properties: AuditManagerAssessmentProps,
    options?: ResourceOptions,
  ) {
    super(
      AuditManagerAssessment.Type,
      AuditManagerAssessment.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
