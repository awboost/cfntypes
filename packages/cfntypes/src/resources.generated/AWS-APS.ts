import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::APS::Workspace.LoggingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-workspace-loggingconfiguration.html | AWS::APS::Workspace.LoggingConfiguration}
 */
export interface APSWorkspaceLoggingConfiguration {
  LogGroupArn?: string;
}
/**
 * Type definition for AWS::APS::RuleGroupsNamespace
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-rulegroupsnamespace.html | AWS::APS::RuleGroupsNamespace}
 */
export interface APSRuleGroupsNamespaceProps {
  Data: string;
  Tags?: Tag[];
  Workspace: string;
  Name: string;
}
/**
 * Attributes type definition for AWS::APS::RuleGroupsNamespace
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-rulegroupsnamespace.html | AWS::APS::RuleGroupsNamespace}
 */
export interface APSRuleGroupsNamespaceAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::APS::RuleGroupsNamespace
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-rulegroupsnamespace.html | AWS::APS::RuleGroupsNamespace}
 */
export class APSRuleGroupsNamespace extends ResourceBase<
  "AWS::APS::RuleGroupsNamespace",
  APSRuleGroupsNamespaceProps,
  APSRuleGroupsNamespaceAttribs
> {
  public static readonly Type = "AWS::APS::RuleGroupsNamespace";
  public static readonly AttributeNames: readonly (keyof APSRuleGroupsNamespaceAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: APSRuleGroupsNamespaceProps,
    options?: ResourceOptions,
  ) {
    super(
      APSRuleGroupsNamespace.Type,
      APSRuleGroupsNamespace.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::APS::Workspace
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html | AWS::APS::Workspace}
 */
export interface APSWorkspaceProps {
  Alias?: string;
  LoggingConfiguration?: APSWorkspaceLoggingConfiguration;
  AlertManagerDefinition?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::APS::Workspace
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html | AWS::APS::Workspace}
 */
export interface APSWorkspaceAttribs {
  PrometheusEndpoint?: string;
  WorkspaceId?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::APS::Workspace
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html | AWS::APS::Workspace}
 */
export class APSWorkspace extends ResourceBase<
  "AWS::APS::Workspace",
  APSWorkspaceProps,
  APSWorkspaceAttribs
> {
  public static readonly Type = "AWS::APS::Workspace";
  public static readonly AttributeNames: readonly (keyof APSWorkspaceAttribs)[] =
    ["PrometheusEndpoint", "WorkspaceId", "Arn"];
  constructor(
    logicalId: string,
    properties: APSWorkspaceProps,
    options?: ResourceOptions,
  ) {
    super(
      APSWorkspace.Type,
      APSWorkspace.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
