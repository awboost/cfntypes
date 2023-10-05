import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::Grafana::Workspace.AssertionAttributes
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-assertionattributes.html | AWS::Grafana::Workspace.AssertionAttributes}
 */
export interface GrafanaWorkspaceAssertionAttributes {
  Role?: string;
  Email?: string;
  Org?: string;
  Groups?: string;
  Login?: string;
  Name?: string;
}
/**
 * Type definition for AWS::Grafana::Workspace.IdpMetadata
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-idpmetadata.html | AWS::Grafana::Workspace.IdpMetadata}
 */
export interface GrafanaWorkspaceIdpMetadata {
  Xml?: string;
  Url?: string;
}
/**
 * Type definition for AWS::Grafana::Workspace.NetworkAccessControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-networkaccesscontrol.html | AWS::Grafana::Workspace.NetworkAccessControl}
 */
export interface GrafanaWorkspaceNetworkAccessControl {
  PrefixListIds?: any[];
  VpceIds?: any[];
}
/**
 * Type definition for AWS::Grafana::Workspace.RoleValues
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-rolevalues.html | AWS::Grafana::Workspace.RoleValues}
 */
export interface GrafanaWorkspaceRoleValues {
  Editor?: any[];
  Admin?: any[];
}
/**
 * Type definition for AWS::Grafana::Workspace.SamlConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-samlconfiguration.html | AWS::Grafana::Workspace.SamlConfiguration}
 */
export interface GrafanaWorkspaceSamlConfiguration {
  LoginValidityDuration?: number;
  RoleValues?: GrafanaWorkspaceRoleValues;
  IdpMetadata: GrafanaWorkspaceIdpMetadata;
  AssertionAttributes?: GrafanaWorkspaceAssertionAttributes;
  AllowedOrganizations?: any[];
}
/**
 * Type definition for AWS::Grafana::Workspace.VpcConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-vpcconfiguration.html | AWS::Grafana::Workspace.VpcConfiguration}
 */
export interface GrafanaWorkspaceVpcConfiguration {
  SecurityGroupIds: any[];
  SubnetIds: any[];
}
/**
 * Type definition for AWS::Grafana::Workspace
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-grafana-workspace.html | AWS::Grafana::Workspace}
 */
export interface GrafanaWorkspaceProps {
  NotificationDestinations?: any[];
  Description?: string;
  PermissionType: string;
  AccountAccessType: string;
  StackSetName?: string;
  SamlConfiguration?: GrafanaWorkspaceSamlConfiguration;
  OrganizationalUnits?: any[];
  RoleArn?: string;
  Name?: string;
  GrafanaVersion?: string;
  DataSources?: any[];
  AuthenticationProviders: any[];
  OrganizationRoleName?: string;
  VpcConfiguration?: GrafanaWorkspaceVpcConfiguration;
  NetworkAccessControl?: GrafanaWorkspaceNetworkAccessControl;
  ClientToken?: string;
}
/**
 * Attributes type definition for AWS::Grafana::Workspace
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-grafana-workspace.html | AWS::Grafana::Workspace}
 */
export interface GrafanaWorkspaceAttribs {
  Status?: string;
  GrafanaVersion?: string;
  CreationTimestamp?: string;
  Endpoint?: string;
  SsoClientId?: string;
  Id?: string;
  SamlConfigurationStatus?: string;
  ModificationTimestamp?: string;
}
/**
 * Resource class for AWS::Grafana::Workspace
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-grafana-workspace.html | AWS::Grafana::Workspace}
 */
export class GrafanaWorkspace extends ResourceBase<
  "AWS::Grafana::Workspace",
  GrafanaWorkspaceProps,
  GrafanaWorkspaceAttribs
> {
  public static readonly Type = "AWS::Grafana::Workspace";
  public static readonly AttributeNames: readonly (keyof GrafanaWorkspaceAttribs)[] =
    [
      "Status",
      "GrafanaVersion",
      "CreationTimestamp",
      "Endpoint",
      "SsoClientId",
      "Id",
      "SamlConfigurationStatus",
      "ModificationTimestamp",
    ];
  constructor(
    logicalId: string,
    properties: GrafanaWorkspaceProps,
    options?: ResourceOptions,
  ) {
    super(
      GrafanaWorkspace.Type,
      GrafanaWorkspace.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
