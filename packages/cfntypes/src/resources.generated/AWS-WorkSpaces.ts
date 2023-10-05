import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::WorkSpaces::ConnectionAlias.ConnectionAliasAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspaces-connectionalias-connectionaliasassociation.html | AWS::WorkSpaces::ConnectionAlias.ConnectionAliasAssociation}
 */
export interface WorkSpacesConnectionAliasConnectionAliasAssociation {
  AssociatedAccountId?: string;
  ResourceId?: string;
  ConnectionIdentifier?: string;
  AssociationStatus?: string;
}
/**
 * Type definition for AWS::WorkSpaces::Workspace.WorkspaceProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspaces-workspace-workspaceproperties.html | AWS::WorkSpaces::Workspace.WorkspaceProperties}
 */
export interface WorkSpacesWorkspaceWorkspaceProperties {
  ComputeTypeName?: string;
  RootVolumeSizeGib?: number;
  RunningMode?: string;
  RunningModeAutoStopTimeoutInMinutes?: number;
  UserVolumeSizeGib?: number;
}
/**
 * Type definition for AWS::WorkSpaces::ConnectionAlias
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-connectionalias.html | AWS::WorkSpaces::ConnectionAlias}
 */
export interface WorkSpacesConnectionAliasProps {
  ConnectionString: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::WorkSpaces::ConnectionAlias
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-connectionalias.html | AWS::WorkSpaces::ConnectionAlias}
 */
export interface WorkSpacesConnectionAliasAttribs {
  ConnectionAliasState?: string;
  Associations?: any[];
  AliasId?: string;
}
/**
 * Resource class for AWS::WorkSpaces::ConnectionAlias
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-connectionalias.html | AWS::WorkSpaces::ConnectionAlias}
 */
export class WorkSpacesConnectionAlias extends ResourceBase<
  "AWS::WorkSpaces::ConnectionAlias",
  WorkSpacesConnectionAliasProps,
  WorkSpacesConnectionAliasAttribs
> {
  public static readonly Type = "AWS::WorkSpaces::ConnectionAlias";
  public static readonly AttributeNames: readonly (keyof WorkSpacesConnectionAliasAttribs)[] =
    ["ConnectionAliasState", "Associations", "AliasId"];
  constructor(
    logicalId: string,
    properties: WorkSpacesConnectionAliasProps,
    options?: ResourceOptions,
  ) {
    super(
      WorkSpacesConnectionAlias.Type,
      WorkSpacesConnectionAlias.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::WorkSpaces::Workspace
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspace.html | AWS::WorkSpaces::Workspace}
 */
export interface WorkSpacesWorkspaceProps {
  BundleId: string;
  DirectoryId: string;
  RootVolumeEncryptionEnabled?: boolean;
  Tags?: Tag[];
  UserName: string;
  UserVolumeEncryptionEnabled?: boolean;
  VolumeEncryptionKey?: string;
  WorkspaceProperties?: WorkSpacesWorkspaceWorkspaceProperties;
}
/**
 * Resource class for AWS::WorkSpaces::Workspace
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspace.html | AWS::WorkSpaces::Workspace}
 */
export class WorkSpacesWorkspace extends ResourceBase<
  "AWS::WorkSpaces::Workspace",
  WorkSpacesWorkspaceProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::WorkSpaces::Workspace";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: WorkSpacesWorkspaceProps,
    options?: ResourceOptions,
  ) {
    super(
      WorkSpacesWorkspace.Type,
      WorkSpacesWorkspace.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
