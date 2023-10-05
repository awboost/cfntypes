import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::LakeFormation::DataCellsFilter.ColumnWildcard
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-datacellsfilter-columnwildcard.html | AWS::LakeFormation::DataCellsFilter.ColumnWildcard}
 */
export interface LakeFormationDataCellsFilterColumnWildcard {
  ExcludedColumnNames?: any[];
}
/**
 * Type definition for AWS::LakeFormation::DataCellsFilter.RowFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-datacellsfilter-rowfilter.html | AWS::LakeFormation::DataCellsFilter.RowFilter}
 */
export interface LakeFormationDataCellsFilterRowFilter {
  AllRowsWildcard?: object;
  FilterExpression?: string;
}
/**
 * Type definition for AWS::LakeFormation::DataLakeSettings.Admins
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-datalakesettings-admins.html | AWS::LakeFormation::DataLakeSettings.Admins}
 */
export type LakeFormationDataLakeSettingsAdmins = any[];
/**
 * Type definition for AWS::LakeFormation::DataLakeSettings.CreateDatabaseDefaultPermissions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-datalakesettings-createdatabasedefaultpermissions.html | AWS::LakeFormation::DataLakeSettings.CreateDatabaseDefaultPermissions}
 */
export type LakeFormationDataLakeSettingsCreateDatabaseDefaultPermissions =
  any[];
/**
 * Type definition for AWS::LakeFormation::DataLakeSettings.CreateTableDefaultPermissions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-datalakesettings-createtabledefaultpermissions.html | AWS::LakeFormation::DataLakeSettings.CreateTableDefaultPermissions}
 */
export type LakeFormationDataLakeSettingsCreateTableDefaultPermissions = any[];
/**
 * Type definition for AWS::LakeFormation::DataLakeSettings.DataLakePrincipal
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-datalakesettings-datalakeprincipal.html | AWS::LakeFormation::DataLakeSettings.DataLakePrincipal}
 */
export interface LakeFormationDataLakeSettingsDataLakePrincipal {
  DataLakePrincipalIdentifier: string;
}
/**
 * Type definition for AWS::LakeFormation::DataLakeSettings.ExternalDataFilteringAllowList
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-datalakesettings-externaldatafilteringallowlist.html | AWS::LakeFormation::DataLakeSettings.ExternalDataFilteringAllowList}
 */
export type LakeFormationDataLakeSettingsExternalDataFilteringAllowList = any[];
/**
 * Type definition for AWS::LakeFormation::DataLakeSettings.PrincipalPermissions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-datalakesettings-principalpermissions.html | AWS::LakeFormation::DataLakeSettings.PrincipalPermissions}
 */
export interface LakeFormationDataLakeSettingsPrincipalPermissions {
  Permissions: any[];
  Principal: LakeFormationDataLakeSettingsDataLakePrincipal;
}
/**
 * Type definition for AWS::LakeFormation::Permissions.ColumnWildcard
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-columnwildcard.html | AWS::LakeFormation::Permissions.ColumnWildcard}
 */
export interface LakeFormationPermissionsColumnWildcard {
  ExcludedColumnNames?: any[];
}
/**
 * Type definition for AWS::LakeFormation::Permissions.DataLakePrincipal
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-datalakeprincipal.html | AWS::LakeFormation::Permissions.DataLakePrincipal}
 */
export interface LakeFormationPermissionsDataLakePrincipal {
  DataLakePrincipalIdentifier?: string;
}
/**
 * Type definition for AWS::LakeFormation::Permissions.DataLocationResource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-datalocationresource.html | AWS::LakeFormation::Permissions.DataLocationResource}
 */
export interface LakeFormationPermissionsDataLocationResource {
  S3Resource?: string;
  CatalogId?: string;
}
/**
 * Type definition for AWS::LakeFormation::Permissions.DatabaseResource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-databaseresource.html | AWS::LakeFormation::Permissions.DatabaseResource}
 */
export interface LakeFormationPermissionsDatabaseResource {
  CatalogId?: string;
  Name?: string;
}
/**
 * Type definition for AWS::LakeFormation::Permissions.Resource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-resource.html | AWS::LakeFormation::Permissions.Resource}
 */
export interface LakeFormationPermissionsResource {
  TableResource?: LakeFormationPermissionsTableResource;
  DatabaseResource?: LakeFormationPermissionsDatabaseResource;
  DataLocationResource?: LakeFormationPermissionsDataLocationResource;
  TableWithColumnsResource?: LakeFormationPermissionsTableWithColumnsResource;
}
/**
 * Type definition for AWS::LakeFormation::Permissions.TableResource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-tableresource.html | AWS::LakeFormation::Permissions.TableResource}
 */
export interface LakeFormationPermissionsTableResource {
  DatabaseName?: string;
  CatalogId?: string;
  TableWildcard?: LakeFormationPermissionsTableWildcard;
  Name?: string;
}
/**
 * Type definition for AWS::LakeFormation::Permissions.TableWildcard
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-tablewildcard.html | AWS::LakeFormation::Permissions.TableWildcard}
 */
export interface LakeFormationPermissionsTableWildcard {}
/**
 * Type definition for AWS::LakeFormation::Permissions.TableWithColumnsResource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-tablewithcolumnsresource.html | AWS::LakeFormation::Permissions.TableWithColumnsResource}
 */
export interface LakeFormationPermissionsTableWithColumnsResource {
  ColumnNames?: any[];
  DatabaseName?: string;
  CatalogId?: string;
  Name?: string;
  ColumnWildcard?: LakeFormationPermissionsColumnWildcard;
}
/**
 * Type definition for AWS::LakeFormation::PrincipalPermissions.ColumnWildcard
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-columnwildcard.html | AWS::LakeFormation::PrincipalPermissions.ColumnWildcard}
 */
export interface LakeFormationPrincipalPermissionsColumnWildcard {
  ExcludedColumnNames?: any[];
}
/**
 * Type definition for AWS::LakeFormation::PrincipalPermissions.DataCellsFilterResource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-datacellsfilterresource.html | AWS::LakeFormation::PrincipalPermissions.DataCellsFilterResource}
 */
export interface LakeFormationPrincipalPermissionsDataCellsFilterResource {
  TableName: string;
  DatabaseName: string;
  TableCatalogId: string;
  Name: string;
}
/**
 * Type definition for AWS::LakeFormation::PrincipalPermissions.DataLakePrincipal
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-datalakeprincipal.html | AWS::LakeFormation::PrincipalPermissions.DataLakePrincipal}
 */
export interface LakeFormationPrincipalPermissionsDataLakePrincipal {
  DataLakePrincipalIdentifier?: string;
}
/**
 * Type definition for AWS::LakeFormation::PrincipalPermissions.DataLocationResource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-datalocationresource.html | AWS::LakeFormation::PrincipalPermissions.DataLocationResource}
 */
export interface LakeFormationPrincipalPermissionsDataLocationResource {
  ResourceArn: string;
  CatalogId: string;
}
/**
 * Type definition for AWS::LakeFormation::PrincipalPermissions.DatabaseResource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-databaseresource.html | AWS::LakeFormation::PrincipalPermissions.DatabaseResource}
 */
export interface LakeFormationPrincipalPermissionsDatabaseResource {
  CatalogId: string;
  Name: string;
}
/**
 * Type definition for AWS::LakeFormation::PrincipalPermissions.LFTag
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-lftag.html | AWS::LakeFormation::PrincipalPermissions.LFTag}
 */
export interface LakeFormationPrincipalPermissionsLFTag {
  TagKey?: string;
  TagValues?: any[];
}
/**
 * Type definition for AWS::LakeFormation::PrincipalPermissions.LFTagKeyResource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-lftagkeyresource.html | AWS::LakeFormation::PrincipalPermissions.LFTagKeyResource}
 */
export interface LakeFormationPrincipalPermissionsLFTagKeyResource {
  TagKey: string;
  CatalogId: string;
  TagValues: any[];
}
/**
 * Type definition for AWS::LakeFormation::PrincipalPermissions.LFTagPolicyResource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-lftagpolicyresource.html | AWS::LakeFormation::PrincipalPermissions.LFTagPolicyResource}
 */
export interface LakeFormationPrincipalPermissionsLFTagPolicyResource {
  Expression: any[];
  ResourceType: string;
  CatalogId: string;
}
/**
 * Type definition for AWS::LakeFormation::PrincipalPermissions.Resource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-resource.html | AWS::LakeFormation::PrincipalPermissions.Resource}
 */
export interface LakeFormationPrincipalPermissionsResource {
  LFTag?: LakeFormationPrincipalPermissionsLFTagKeyResource;
  Table?: LakeFormationPrincipalPermissionsTableResource;
  DataCellsFilter?: LakeFormationPrincipalPermissionsDataCellsFilterResource;
  TableWithColumns?: LakeFormationPrincipalPermissionsTableWithColumnsResource;
  LFTagPolicy?: LakeFormationPrincipalPermissionsLFTagPolicyResource;
  Database?: LakeFormationPrincipalPermissionsDatabaseResource;
  DataLocation?: LakeFormationPrincipalPermissionsDataLocationResource;
  Catalog?: object;
}
/**
 * Type definition for AWS::LakeFormation::PrincipalPermissions.TableResource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-tableresource.html | AWS::LakeFormation::PrincipalPermissions.TableResource}
 */
export interface LakeFormationPrincipalPermissionsTableResource {
  DatabaseName: string;
  CatalogId: string;
  TableWildcard?: object;
  Name?: string;
}
/**
 * Type definition for AWS::LakeFormation::PrincipalPermissions.TableWithColumnsResource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-tablewithcolumnsresource.html | AWS::LakeFormation::PrincipalPermissions.TableWithColumnsResource}
 */
export interface LakeFormationPrincipalPermissionsTableWithColumnsResource {
  ColumnNames?: any[];
  DatabaseName: string;
  CatalogId: string;
  Name: string;
  ColumnWildcard?: LakeFormationPrincipalPermissionsColumnWildcard;
}
/**
 * Type definition for AWS::LakeFormation::TagAssociation.DatabaseResource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-databaseresource.html | AWS::LakeFormation::TagAssociation.DatabaseResource}
 */
export interface LakeFormationTagAssociationDatabaseResource {
  CatalogId: string;
  Name: string;
}
/**
 * Type definition for AWS::LakeFormation::TagAssociation.LFTagPair
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-lftagpair.html | AWS::LakeFormation::TagAssociation.LFTagPair}
 */
export interface LakeFormationTagAssociationLFTagPair {
  TagKey: string;
  CatalogId: string;
  TagValues: any[];
}
/**
 * Type definition for AWS::LakeFormation::TagAssociation.Resource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-resource.html | AWS::LakeFormation::TagAssociation.Resource}
 */
export interface LakeFormationTagAssociationResource {
  Table?: LakeFormationTagAssociationTableResource;
  TableWithColumns?: LakeFormationTagAssociationTableWithColumnsResource;
  Database?: LakeFormationTagAssociationDatabaseResource;
  Catalog?: object;
}
/**
 * Type definition for AWS::LakeFormation::TagAssociation.TableResource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-tableresource.html | AWS::LakeFormation::TagAssociation.TableResource}
 */
export interface LakeFormationTagAssociationTableResource {
  DatabaseName: string;
  CatalogId: string;
  TableWildcard?: object;
  Name?: string;
}
/**
 * Type definition for AWS::LakeFormation::TagAssociation.TableWithColumnsResource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-tablewithcolumnsresource.html | AWS::LakeFormation::TagAssociation.TableWithColumnsResource}
 */
export interface LakeFormationTagAssociationTableWithColumnsResource {
  ColumnNames: any[];
  DatabaseName: string;
  CatalogId: string;
  Name: string;
}
/**
 * Type definition for AWS::LakeFormation::DataCellsFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datacellsfilter.html | AWS::LakeFormation::DataCellsFilter}
 */
export interface LakeFormationDataCellsFilterProps {
  TableName: string;
  ColumnNames?: any[];
  RowFilter?: LakeFormationDataCellsFilterRowFilter;
  DatabaseName: string;
  TableCatalogId: string;
  Name: string;
  ColumnWildcard?: LakeFormationDataCellsFilterColumnWildcard;
}
/**
 * Resource class for AWS::LakeFormation::DataCellsFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datacellsfilter.html | AWS::LakeFormation::DataCellsFilter}
 */
export class LakeFormationDataCellsFilter extends ResourceBase<
  "AWS::LakeFormation::DataCellsFilter",
  LakeFormationDataCellsFilterProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::LakeFormation::DataCellsFilter";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: LakeFormationDataCellsFilterProps,
    options?: ResourceOptions,
  ) {
    super(
      LakeFormationDataCellsFilter.Type,
      LakeFormationDataCellsFilter.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::LakeFormation::DataLakeSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html | AWS::LakeFormation::DataLakeSettings}
 */
export interface LakeFormationDataLakeSettingsProps {
  AllowExternalDataFiltering?: boolean;
  ExternalDataFilteringAllowList?: LakeFormationDataLakeSettingsExternalDataFilteringAllowList;
  CreateTableDefaultPermissions?: LakeFormationDataLakeSettingsCreateTableDefaultPermissions;
  MutationType?: string;
  Parameters?: object;
  AllowFullTableExternalDataAccess?: boolean;
  Admins?: LakeFormationDataLakeSettingsAdmins;
  CreateDatabaseDefaultPermissions?: LakeFormationDataLakeSettingsCreateDatabaseDefaultPermissions;
  AuthorizedSessionTagValueList?: any[];
  TrustedResourceOwners?: any[];
}
/**
 * Resource class for AWS::LakeFormation::DataLakeSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html | AWS::LakeFormation::DataLakeSettings}
 */
export class LakeFormationDataLakeSettings extends ResourceBase<
  "AWS::LakeFormation::DataLakeSettings",
  LakeFormationDataLakeSettingsProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::LakeFormation::DataLakeSettings";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: LakeFormationDataLakeSettingsProps,
    options?: ResourceOptions,
  ) {
    super(
      LakeFormationDataLakeSettings.Type,
      LakeFormationDataLakeSettings.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::LakeFormation::Permissions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-permissions.html | AWS::LakeFormation::Permissions}
 */
export interface LakeFormationPermissionsProps {
  DataLakePrincipal: LakeFormationPermissionsDataLakePrincipal;
  Resource: LakeFormationPermissionsResource;
  Permissions?: any[];
  PermissionsWithGrantOption?: any[];
}
/**
 * Resource class for AWS::LakeFormation::Permissions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-permissions.html | AWS::LakeFormation::Permissions}
 */
export class LakeFormationPermissions extends ResourceBase<
  "AWS::LakeFormation::Permissions",
  LakeFormationPermissionsProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::LakeFormation::Permissions";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: LakeFormationPermissionsProps,
    options?: ResourceOptions,
  ) {
    super(
      LakeFormationPermissions.Type,
      LakeFormationPermissions.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::LakeFormation::PrincipalPermissions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-principalpermissions.html | AWS::LakeFormation::PrincipalPermissions}
 */
export interface LakeFormationPrincipalPermissionsProps {
  Resource: LakeFormationPrincipalPermissionsResource;
  Permissions: any[];
  Catalog?: string;
  Principal: LakeFormationPrincipalPermissionsDataLakePrincipal;
  PermissionsWithGrantOption: any[];
}
/**
 * Attributes type definition for AWS::LakeFormation::PrincipalPermissions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-principalpermissions.html | AWS::LakeFormation::PrincipalPermissions}
 */
export interface LakeFormationPrincipalPermissionsAttribs {
  ResourceIdentifier?: string;
  PrincipalIdentifier?: string;
}
/**
 * Resource class for AWS::LakeFormation::PrincipalPermissions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-principalpermissions.html | AWS::LakeFormation::PrincipalPermissions}
 */
export class LakeFormationPrincipalPermissions extends ResourceBase<
  "AWS::LakeFormation::PrincipalPermissions",
  LakeFormationPrincipalPermissionsProps,
  LakeFormationPrincipalPermissionsAttribs
> {
  public static readonly Type = "AWS::LakeFormation::PrincipalPermissions";
  public static readonly AttributeNames: readonly (keyof LakeFormationPrincipalPermissionsAttribs)[] =
    ["ResourceIdentifier", "PrincipalIdentifier"];
  constructor(
    logicalId: string,
    properties: LakeFormationPrincipalPermissionsProps,
    options?: ResourceOptions,
  ) {
    super(
      LakeFormationPrincipalPermissions.Type,
      LakeFormationPrincipalPermissions.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::LakeFormation::Resource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-resource.html | AWS::LakeFormation::Resource}
 */
export interface LakeFormationResourceProps {
  ResourceArn: string;
  WithFederation?: boolean;
  UseServiceLinkedRole: boolean;
  RoleArn?: string;
}
/**
 * Resource class for AWS::LakeFormation::Resource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-resource.html | AWS::LakeFormation::Resource}
 */
export class LakeFormationResource extends ResourceBase<
  "AWS::LakeFormation::Resource",
  LakeFormationResourceProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::LakeFormation::Resource";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: LakeFormationResourceProps,
    options?: ResourceOptions,
  ) {
    super(
      LakeFormationResource.Type,
      LakeFormationResource.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::LakeFormation::Tag
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-tag.html | AWS::LakeFormation::Tag}
 */
export interface LakeFormationTagProps {
  TagKey: string;
  CatalogId?: string;
  TagValues: any[];
}
/**
 * Resource class for AWS::LakeFormation::Tag
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-tag.html | AWS::LakeFormation::Tag}
 */
export class LakeFormationTag extends ResourceBase<
  "AWS::LakeFormation::Tag",
  LakeFormationTagProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::LakeFormation::Tag";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: LakeFormationTagProps,
    options?: ResourceOptions,
  ) {
    super(
      LakeFormationTag.Type,
      LakeFormationTag.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::LakeFormation::TagAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-tagassociation.html | AWS::LakeFormation::TagAssociation}
 */
export interface LakeFormationTagAssociationProps {
  LFTags: any[];
  Resource: LakeFormationTagAssociationResource;
}
/**
 * Attributes type definition for AWS::LakeFormation::TagAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-tagassociation.html | AWS::LakeFormation::TagAssociation}
 */
export interface LakeFormationTagAssociationAttribs {
  ResourceIdentifier?: string;
  TagsIdentifier?: string;
}
/**
 * Resource class for AWS::LakeFormation::TagAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-tagassociation.html | AWS::LakeFormation::TagAssociation}
 */
export class LakeFormationTagAssociation extends ResourceBase<
  "AWS::LakeFormation::TagAssociation",
  LakeFormationTagAssociationProps,
  LakeFormationTagAssociationAttribs
> {
  public static readonly Type = "AWS::LakeFormation::TagAssociation";
  public static readonly AttributeNames: readonly (keyof LakeFormationTagAssociationAttribs)[] =
    ["ResourceIdentifier", "TagsIdentifier"];
  constructor(
    logicalId: string,
    properties: LakeFormationTagAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      LakeFormationTagAssociation.Type,
      LakeFormationTagAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
