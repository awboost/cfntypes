import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::IoTSiteWise::AccessPolicy.AccessPolicyIdentity
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-accesspolicyidentity.html | AWS::IoTSiteWise::AccessPolicy.AccessPolicyIdentity}
 */
export interface IoTSiteWiseAccessPolicyAccessPolicyIdentity {
  User?: IoTSiteWiseAccessPolicyUser;
  IamUser?: IoTSiteWiseAccessPolicyIamUser;
  IamRole?: IoTSiteWiseAccessPolicyIamRole;
}
/**
 * Type definition for AWS::IoTSiteWise::AccessPolicy.AccessPolicyResource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-accesspolicyresource.html | AWS::IoTSiteWise::AccessPolicy.AccessPolicyResource}
 */
export interface IoTSiteWiseAccessPolicyAccessPolicyResource {
  Project?: IoTSiteWiseAccessPolicyProject;
  Portal?: IoTSiteWiseAccessPolicyPortal;
}
/**
 * Type definition for AWS::IoTSiteWise::AccessPolicy.IamRole
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-iamrole.html | AWS::IoTSiteWise::AccessPolicy.IamRole}
 */
export interface IoTSiteWiseAccessPolicyIamRole {
  arn?: string;
}
/**
 * Type definition for AWS::IoTSiteWise::AccessPolicy.IamUser
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-iamuser.html | AWS::IoTSiteWise::AccessPolicy.IamUser}
 */
export interface IoTSiteWiseAccessPolicyIamUser {
  arn?: string;
}
/**
 * Type definition for AWS::IoTSiteWise::AccessPolicy.Portal
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-portal.html | AWS::IoTSiteWise::AccessPolicy.Portal}
 */
export interface IoTSiteWiseAccessPolicyPortal {
  id?: string;
}
/**
 * Type definition for AWS::IoTSiteWise::AccessPolicy.Project
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-project.html | AWS::IoTSiteWise::AccessPolicy.Project}
 */
export interface IoTSiteWiseAccessPolicyProject {
  id?: string;
}
/**
 * Type definition for AWS::IoTSiteWise::AccessPolicy.User
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-user.html | AWS::IoTSiteWise::AccessPolicy.User}
 */
export interface IoTSiteWiseAccessPolicyUser {
  id?: string;
}
/**
 * Type definition for AWS::IoTSiteWise::Asset.AssetHierarchy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-asset-assethierarchy.html | AWS::IoTSiteWise::Asset.AssetHierarchy}
 */
export interface IoTSiteWiseAssetAssetHierarchy {
  LogicalId: string;
  ChildAssetId: string;
}
/**
 * Type definition for AWS::IoTSiteWise::Asset.AssetProperty
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-asset-assetproperty.html | AWS::IoTSiteWise::Asset.AssetProperty}
 */
export interface IoTSiteWiseAssetAssetProperty {
  LogicalId: string;
  Alias?: string;
  Unit?: string;
  NotificationState?: string;
}
/**
 * Type definition for AWS::IoTSiteWise::AssetModel.AssetModelCompositeModel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-assetmodelcompositemodel.html | AWS::IoTSiteWise::AssetModel.AssetModelCompositeModel}
 */
export interface IoTSiteWiseAssetModelAssetModelCompositeModel {
  Type: string;
  Description?: string;
  CompositeModelProperties?: any[];
  Name: string;
}
/**
 * Type definition for AWS::IoTSiteWise::AssetModel.AssetModelHierarchy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-assetmodelhierarchy.html | AWS::IoTSiteWise::AssetModel.AssetModelHierarchy}
 */
export interface IoTSiteWiseAssetModelAssetModelHierarchy {
  LogicalId: string;
  ChildAssetModelId: string;
  Name: string;
}
/**
 * Type definition for AWS::IoTSiteWise::AssetModel.AssetModelProperty
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-assetmodelproperty.html | AWS::IoTSiteWise::AssetModel.AssetModelProperty}
 */
export interface IoTSiteWiseAssetModelAssetModelProperty {
  Type: IoTSiteWiseAssetModelPropertyType;
  LogicalId: string;
  DataTypeSpec?: string;
  DataType: string;
  Unit?: string;
  Name: string;
}
/**
 * Type definition for AWS::IoTSiteWise::AssetModel.Attribute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-attribute.html | AWS::IoTSiteWise::AssetModel.Attribute}
 */
export interface IoTSiteWiseAssetModelAttribute {
  DefaultValue?: string;
}
/**
 * Type definition for AWS::IoTSiteWise::AssetModel.ExpressionVariable
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-expressionvariable.html | AWS::IoTSiteWise::AssetModel.ExpressionVariable}
 */
export interface IoTSiteWiseAssetModelExpressionVariable {
  Value: IoTSiteWiseAssetModelVariableValue;
  Name: string;
}
/**
 * Type definition for AWS::IoTSiteWise::AssetModel.Metric
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-metric.html | AWS::IoTSiteWise::AssetModel.Metric}
 */
export interface IoTSiteWiseAssetModelMetric {
  Variables: any[];
  Window: IoTSiteWiseAssetModelMetricWindow;
  Expression: string;
}
/**
 * Type definition for AWS::IoTSiteWise::AssetModel.MetricWindow
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-metricwindow.html | AWS::IoTSiteWise::AssetModel.MetricWindow}
 */
export interface IoTSiteWiseAssetModelMetricWindow {
  Tumbling?: IoTSiteWiseAssetModelTumblingWindow;
}
/**
 * Type definition for AWS::IoTSiteWise::AssetModel.PropertyType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-propertytype.html | AWS::IoTSiteWise::AssetModel.PropertyType}
 */
export interface IoTSiteWiseAssetModelPropertyType {
  TypeName: string;
  Attribute?: IoTSiteWiseAssetModelAttribute;
  Metric?: IoTSiteWiseAssetModelMetric;
  Transform?: IoTSiteWiseAssetModelTransform;
}
/**
 * Type definition for AWS::IoTSiteWise::AssetModel.Transform
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-transform.html | AWS::IoTSiteWise::AssetModel.Transform}
 */
export interface IoTSiteWiseAssetModelTransform {
  Variables: any[];
  Expression: string;
}
/**
 * Type definition for AWS::IoTSiteWise::AssetModel.TumblingWindow
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-tumblingwindow.html | AWS::IoTSiteWise::AssetModel.TumblingWindow}
 */
export interface IoTSiteWiseAssetModelTumblingWindow {
  Interval: string;
  Offset?: string;
}
/**
 * Type definition for AWS::IoTSiteWise::AssetModel.VariableValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-variablevalue.html | AWS::IoTSiteWise::AssetModel.VariableValue}
 */
export interface IoTSiteWiseAssetModelVariableValue {
  PropertyLogicalId: string;
  HierarchyLogicalId?: string;
}
/**
 * Type definition for AWS::IoTSiteWise::Gateway.GatewayCapabilitySummary
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-gateway-gatewaycapabilitysummary.html | AWS::IoTSiteWise::Gateway.GatewayCapabilitySummary}
 */
export interface IoTSiteWiseGatewayGatewayCapabilitySummary {
  CapabilityNamespace: string;
  CapabilityConfiguration?: string;
}
/**
 * Type definition for AWS::IoTSiteWise::Gateway.GatewayPlatform
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-gateway-gatewayplatform.html | AWS::IoTSiteWise::Gateway.GatewayPlatform}
 */
export interface IoTSiteWiseGatewayGatewayPlatform {
  GreengrassV2?: IoTSiteWiseGatewayGreengrassV2;
  Greengrass?: IoTSiteWiseGatewayGreengrass;
}
/**
 * Type definition for AWS::IoTSiteWise::Gateway.Greengrass
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-gateway-greengrass.html | AWS::IoTSiteWise::Gateway.Greengrass}
 */
export interface IoTSiteWiseGatewayGreengrass {
  GroupArn: string;
}
/**
 * Type definition for AWS::IoTSiteWise::Gateway.GreengrassV2
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-gateway-greengrassv2.html | AWS::IoTSiteWise::Gateway.GreengrassV2}
 */
export interface IoTSiteWiseGatewayGreengrassV2 {
  CoreDeviceThingName: string;
}
/**
 * Type definition for AWS::IoTSiteWise::Portal.Alarms
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-portal-alarms.html | AWS::IoTSiteWise::Portal.Alarms}
 */
export interface IoTSiteWisePortalAlarms {
  NotificationLambdaArn?: string;
  AlarmRoleArn?: string;
}
/**
 * Type definition for AWS::IoTSiteWise::AccessPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-accesspolicy.html | AWS::IoTSiteWise::AccessPolicy}
 */
export interface IoTSiteWiseAccessPolicyProps {
  AccessPolicyResource: IoTSiteWiseAccessPolicyAccessPolicyResource;
  AccessPolicyIdentity: IoTSiteWiseAccessPolicyAccessPolicyIdentity;
  AccessPolicyPermission: string;
}
/**
 * Attributes type definition for AWS::IoTSiteWise::AccessPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-accesspolicy.html | AWS::IoTSiteWise::AccessPolicy}
 */
export interface IoTSiteWiseAccessPolicyAttribs {
  AccessPolicyArn?: string;
  AccessPolicyId?: string;
}
/**
 * Resource class for AWS::IoTSiteWise::AccessPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-accesspolicy.html | AWS::IoTSiteWise::AccessPolicy}
 */
export class IoTSiteWiseAccessPolicy extends ResourceBase<
  "AWS::IoTSiteWise::AccessPolicy",
  IoTSiteWiseAccessPolicyProps,
  IoTSiteWiseAccessPolicyAttribs
> {
  public static readonly Type = "AWS::IoTSiteWise::AccessPolicy";
  public static readonly AttributeNames: readonly (keyof IoTSiteWiseAccessPolicyAttribs)[] =
    ["AccessPolicyArn", "AccessPolicyId"];
  constructor(
    logicalId: string,
    properties: IoTSiteWiseAccessPolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTSiteWiseAccessPolicy.Type,
      IoTSiteWiseAccessPolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoTSiteWise::Asset
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-asset.html | AWS::IoTSiteWise::Asset}
 */
export interface IoTSiteWiseAssetProps {
  AssetModelId: string;
  AssetDescription?: string;
  AssetProperties?: any[];
  AssetName: string;
  Tags?: Tag[];
  AssetHierarchies?: any[];
}
/**
 * Attributes type definition for AWS::IoTSiteWise::Asset
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-asset.html | AWS::IoTSiteWise::Asset}
 */
export interface IoTSiteWiseAssetAttribs {
  AssetArn?: string;
  AssetId?: string;
}
/**
 * Resource class for AWS::IoTSiteWise::Asset
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-asset.html | AWS::IoTSiteWise::Asset}
 */
export class IoTSiteWiseAsset extends ResourceBase<
  "AWS::IoTSiteWise::Asset",
  IoTSiteWiseAssetProps,
  IoTSiteWiseAssetAttribs
> {
  public static readonly Type = "AWS::IoTSiteWise::Asset";
  public static readonly AttributeNames: readonly (keyof IoTSiteWiseAssetAttribs)[] =
    ["AssetArn", "AssetId"];
  constructor(
    logicalId: string,
    properties: IoTSiteWiseAssetProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTSiteWiseAsset.Type,
      IoTSiteWiseAsset.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoTSiteWise::AssetModel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html | AWS::IoTSiteWise::AssetModel}
 */
export interface IoTSiteWiseAssetModelProps {
  AssetModelDescription?: string;
  AssetModelCompositeModels?: any[];
  AssetModelName: string;
  AssetModelHierarchies?: any[];
  AssetModelProperties?: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::IoTSiteWise::AssetModel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html | AWS::IoTSiteWise::AssetModel}
 */
export interface IoTSiteWiseAssetModelAttribs {
  AssetModelId?: string;
  AssetModelArn?: string;
}
/**
 * Resource class for AWS::IoTSiteWise::AssetModel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html | AWS::IoTSiteWise::AssetModel}
 */
export class IoTSiteWiseAssetModel extends ResourceBase<
  "AWS::IoTSiteWise::AssetModel",
  IoTSiteWiseAssetModelProps,
  IoTSiteWiseAssetModelAttribs
> {
  public static readonly Type = "AWS::IoTSiteWise::AssetModel";
  public static readonly AttributeNames: readonly (keyof IoTSiteWiseAssetModelAttribs)[] =
    ["AssetModelId", "AssetModelArn"];
  constructor(
    logicalId: string,
    properties: IoTSiteWiseAssetModelProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTSiteWiseAssetModel.Type,
      IoTSiteWiseAssetModel.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoTSiteWise::Dashboard
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-dashboard.html | AWS::IoTSiteWise::Dashboard}
 */
export interface IoTSiteWiseDashboardProps {
  DashboardName: string;
  DashboardDefinition: string;
  ProjectId?: string;
  DashboardDescription: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::IoTSiteWise::Dashboard
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-dashboard.html | AWS::IoTSiteWise::Dashboard}
 */
export interface IoTSiteWiseDashboardAttribs {
  DashboardId?: string;
  DashboardArn?: string;
}
/**
 * Resource class for AWS::IoTSiteWise::Dashboard
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-dashboard.html | AWS::IoTSiteWise::Dashboard}
 */
export class IoTSiteWiseDashboard extends ResourceBase<
  "AWS::IoTSiteWise::Dashboard",
  IoTSiteWiseDashboardProps,
  IoTSiteWiseDashboardAttribs
> {
  public static readonly Type = "AWS::IoTSiteWise::Dashboard";
  public static readonly AttributeNames: readonly (keyof IoTSiteWiseDashboardAttribs)[] =
    ["DashboardId", "DashboardArn"];
  constructor(
    logicalId: string,
    properties: IoTSiteWiseDashboardProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTSiteWiseDashboard.Type,
      IoTSiteWiseDashboard.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoTSiteWise::Gateway
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-gateway.html | AWS::IoTSiteWise::Gateway}
 */
export interface IoTSiteWiseGatewayProps {
  GatewayCapabilitySummaries?: any[];
  GatewayName: string;
  GatewayPlatform: IoTSiteWiseGatewayGatewayPlatform;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::IoTSiteWise::Gateway
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-gateway.html | AWS::IoTSiteWise::Gateway}
 */
export interface IoTSiteWiseGatewayAttribs {
  GatewayId?: string;
}
/**
 * Resource class for AWS::IoTSiteWise::Gateway
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-gateway.html | AWS::IoTSiteWise::Gateway}
 */
export class IoTSiteWiseGateway extends ResourceBase<
  "AWS::IoTSiteWise::Gateway",
  IoTSiteWiseGatewayProps,
  IoTSiteWiseGatewayAttribs
> {
  public static readonly Type = "AWS::IoTSiteWise::Gateway";
  public static readonly AttributeNames: readonly (keyof IoTSiteWiseGatewayAttribs)[] =
    ["GatewayId"];
  constructor(
    logicalId: string,
    properties: IoTSiteWiseGatewayProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTSiteWiseGateway.Type,
      IoTSiteWiseGateway.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoTSiteWise::Portal
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-portal.html | AWS::IoTSiteWise::Portal}
 */
export interface IoTSiteWisePortalProps {
  PortalName: string;
  PortalAuthMode?: string;
  NotificationSenderEmail?: string;
  Alarms?: IoTSiteWisePortalAlarms;
  PortalContactEmail: string;
  RoleArn: string;
  Tags?: Tag[];
  PortalDescription?: string;
}
/**
 * Attributes type definition for AWS::IoTSiteWise::Portal
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-portal.html | AWS::IoTSiteWise::Portal}
 */
export interface IoTSiteWisePortalAttribs {
  PortalArn?: string;
  PortalStartUrl?: string;
  PortalId?: string;
  PortalClientId?: string;
}
/**
 * Resource class for AWS::IoTSiteWise::Portal
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-portal.html | AWS::IoTSiteWise::Portal}
 */
export class IoTSiteWisePortal extends ResourceBase<
  "AWS::IoTSiteWise::Portal",
  IoTSiteWisePortalProps,
  IoTSiteWisePortalAttribs
> {
  public static readonly Type = "AWS::IoTSiteWise::Portal";
  public static readonly AttributeNames: readonly (keyof IoTSiteWisePortalAttribs)[] =
    ["PortalArn", "PortalStartUrl", "PortalId", "PortalClientId"];
  constructor(
    logicalId: string,
    properties: IoTSiteWisePortalProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTSiteWisePortal.Type,
      IoTSiteWisePortal.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoTSiteWise::Project
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-project.html | AWS::IoTSiteWise::Project}
 */
export interface IoTSiteWiseProjectProps {
  AssetIds?: any[];
  ProjectName: string;
  PortalId: string;
  ProjectDescription?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::IoTSiteWise::Project
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-project.html | AWS::IoTSiteWise::Project}
 */
export interface IoTSiteWiseProjectAttribs {
  ProjectArn?: string;
  ProjectId?: string;
}
/**
 * Resource class for AWS::IoTSiteWise::Project
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-project.html | AWS::IoTSiteWise::Project}
 */
export class IoTSiteWiseProject extends ResourceBase<
  "AWS::IoTSiteWise::Project",
  IoTSiteWiseProjectProps,
  IoTSiteWiseProjectAttribs
> {
  public static readonly Type = "AWS::IoTSiteWise::Project";
  public static readonly AttributeNames: readonly (keyof IoTSiteWiseProjectAttribs)[] =
    ["ProjectArn", "ProjectId"];
  constructor(
    logicalId: string,
    properties: IoTSiteWiseProjectProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTSiteWiseProject.Type,
      IoTSiteWiseProject.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
