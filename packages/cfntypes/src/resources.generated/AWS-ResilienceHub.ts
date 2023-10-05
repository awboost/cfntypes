import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::ResilienceHub::App.EventSubscription
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-app-eventsubscription.html | AWS::ResilienceHub::App.EventSubscription}
 */
export interface ResilienceHubAppEventSubscription {
  EventType: string;
  SnsTopicArn?: string;
  Name: string;
}
/**
 * Type definition for AWS::ResilienceHub::App.PermissionModel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-app-permissionmodel.html | AWS::ResilienceHub::App.PermissionModel}
 */
export interface ResilienceHubAppPermissionModel {
  Type: string;
  CrossAccountRoleArns?: any[];
  InvokerRoleName?: string;
}
/**
 * Type definition for AWS::ResilienceHub::App.PhysicalResourceId
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-app-physicalresourceid.html | AWS::ResilienceHub::App.PhysicalResourceId}
 */
export interface ResilienceHubAppPhysicalResourceId {
  Type: string;
  Identifier: string;
  AwsRegion?: string;
  AwsAccountId?: string;
}
/**
 * Type definition for AWS::ResilienceHub::App.ResourceMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-app-resourcemapping.html | AWS::ResilienceHub::App.ResourceMapping}
 */
export interface ResilienceHubAppResourceMapping {
  MappingType: string;
  LogicalStackName?: string;
  ResourceName?: string;
  TerraformSourceName?: string;
  PhysicalResourceId: ResilienceHubAppPhysicalResourceId;
  EksSourceName?: string;
}
/**
 * Type definition for AWS::ResilienceHub::ResiliencyPolicy.FailurePolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-resiliencypolicy-failurepolicy.html | AWS::ResilienceHub::ResiliencyPolicy.FailurePolicy}
 */
export interface ResilienceHubResiliencyPolicyFailurePolicy {
  RpoInSecs: number;
  RtoInSecs: number;
}
/**
 * Type definition for AWS::ResilienceHub::App
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html | AWS::ResilienceHub::App}
 */
export interface ResilienceHubAppProps {
  Description?: string;
  AppTemplateBody: string;
  AppAssessmentSchedule?: string;
  PermissionModel?: ResilienceHubAppPermissionModel;
  ResourceMappings: any[];
  EventSubscriptions?: any[];
  Tags?: Record<string, Tag>;
  Name: string;
  ResiliencyPolicyArn?: string;
}
/**
 * Attributes type definition for AWS::ResilienceHub::App
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html | AWS::ResilienceHub::App}
 */
export interface ResilienceHubAppAttribs {
  AppArn?: string;
  DriftStatus?: string;
}
/**
 * Resource class for AWS::ResilienceHub::App
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html | AWS::ResilienceHub::App}
 */
export class ResilienceHubApp extends ResourceBase<
  "AWS::ResilienceHub::App",
  ResilienceHubAppProps,
  ResilienceHubAppAttribs
> {
  public static readonly Type = "AWS::ResilienceHub::App";
  public static readonly AttributeNames: readonly (keyof ResilienceHubAppAttribs)[] =
    ["AppArn", "DriftStatus"];
  constructor(
    logicalId: string,
    properties: ResilienceHubAppProps,
    options?: ResourceOptions,
  ) {
    super(
      ResilienceHubApp.Type,
      ResilienceHubApp.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ResilienceHub::ResiliencyPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-resiliencypolicy.html | AWS::ResilienceHub::ResiliencyPolicy}
 */
export interface ResilienceHubResiliencyPolicyProps {
  Policy: Record<string, any>;
  PolicyDescription?: string;
  Tier: string;
  PolicyName: string;
  DataLocationConstraint?: string;
  Tags?: Record<string, Tag>;
}
/**
 * Attributes type definition for AWS::ResilienceHub::ResiliencyPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-resiliencypolicy.html | AWS::ResilienceHub::ResiliencyPolicy}
 */
export interface ResilienceHubResiliencyPolicyAttribs {
  PolicyArn?: string;
}
/**
 * Resource class for AWS::ResilienceHub::ResiliencyPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-resiliencypolicy.html | AWS::ResilienceHub::ResiliencyPolicy}
 */
export class ResilienceHubResiliencyPolicy extends ResourceBase<
  "AWS::ResilienceHub::ResiliencyPolicy",
  ResilienceHubResiliencyPolicyProps,
  ResilienceHubResiliencyPolicyAttribs
> {
  public static readonly Type = "AWS::ResilienceHub::ResiliencyPolicy";
  public static readonly AttributeNames: readonly (keyof ResilienceHubResiliencyPolicyAttribs)[] =
    ["PolicyArn"];
  constructor(
    logicalId: string,
    properties: ResilienceHubResiliencyPolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      ResilienceHubResiliencyPolicy.Type,
      ResilienceHubResiliencyPolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
