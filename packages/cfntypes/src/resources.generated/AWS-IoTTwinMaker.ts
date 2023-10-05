import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::IoTTwinMaker::ComponentType.DataConnector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-dataconnector.html | AWS::IoTTwinMaker::ComponentType.DataConnector}
 */
export interface IoTTwinMakerComponentTypeDataConnector {
  IsNative?: boolean;
  Lambda?: IoTTwinMakerComponentTypeLambdaFunction;
}
/**
 * Type definition for AWS::IoTTwinMaker::ComponentType.DataType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-datatype.html | AWS::IoTTwinMaker::ComponentType.DataType}
 */
export interface IoTTwinMakerComponentTypeDataType {
  Type: string;
  AllowedValues?: any[];
  UnitOfMeasure?: string;
  Relationship?: IoTTwinMakerComponentTypeRelationship;
  NestedType?: IoTTwinMakerComponentTypeDataType;
}
/**
 * Type definition for AWS::IoTTwinMaker::ComponentType.DataValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-datavalue.html | AWS::IoTTwinMaker::ComponentType.DataValue}
 */
export interface IoTTwinMakerComponentTypeDataValue {
  DoubleValue?: number;
  Expression?: string;
  BooleanValue?: boolean;
  IntegerValue?: number;
  ListValue?: any[];
  LongValue?: number;
  MapValue?: Record<string, any>;
  RelationshipValue?: IoTTwinMakerComponentTypeRelationshipValue;
  StringValue?: string;
}
/**
 * Type definition for AWS::IoTTwinMaker::ComponentType.Error
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-error.html | AWS::IoTTwinMaker::ComponentType.Error}
 */
export interface IoTTwinMakerComponentTypeError {
  Message?: string;
  Code?: string;
}
/**
 * Type definition for AWS::IoTTwinMaker::ComponentType.Function
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-function.html | AWS::IoTTwinMaker::ComponentType.Function}
 */
export interface IoTTwinMakerComponentTypeFunction {
  Scope?: string;
  RequiredProperties?: any[];
  ImplementedBy?: IoTTwinMakerComponentTypeDataConnector;
}
/**
 * Type definition for AWS::IoTTwinMaker::ComponentType.LambdaFunction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-lambdafunction.html | AWS::IoTTwinMaker::ComponentType.LambdaFunction}
 */
export interface IoTTwinMakerComponentTypeLambdaFunction {
  Arn: string;
}
/**
 * Type definition for AWS::IoTTwinMaker::ComponentType.PropertyDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-propertydefinition.html | AWS::IoTTwinMaker::ComponentType.PropertyDefinition}
 */
export interface IoTTwinMakerComponentTypePropertyDefinition {
  DefaultValue?: IoTTwinMakerComponentTypeDataValue;
  IsExternalId?: boolean;
  IsStoredExternally?: boolean;
  IsTimeSeries?: boolean;
  IsRequiredInEntity?: boolean;
  DataType?: IoTTwinMakerComponentTypeDataType;
  Configurations?: Record<string, any>;
}
/**
 * Type definition for AWS::IoTTwinMaker::ComponentType.PropertyGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-propertygroup.html | AWS::IoTTwinMaker::ComponentType.PropertyGroup}
 */
export interface IoTTwinMakerComponentTypePropertyGroup {
  GroupType?: string;
  PropertyNames?: any[];
}
/**
 * Type definition for AWS::IoTTwinMaker::ComponentType.Relationship
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-relationship.html | AWS::IoTTwinMaker::ComponentType.Relationship}
 */
export interface IoTTwinMakerComponentTypeRelationship {
  RelationshipType?: string;
  TargetComponentTypeId?: string;
}
/**
 * Type definition for AWS::IoTTwinMaker::ComponentType.RelationshipValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-relationshipvalue.html | AWS::IoTTwinMaker::ComponentType.RelationshipValue}
 */
export interface IoTTwinMakerComponentTypeRelationshipValue {
  TargetComponentName?: string;
  TargetEntityId?: string;
}
/**
 * Type definition for AWS::IoTTwinMaker::ComponentType.Status
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-status.html | AWS::IoTTwinMaker::ComponentType.Status}
 */
export interface IoTTwinMakerComponentTypeStatus {
  State?: string;
  Error?: IoTTwinMakerComponentTypeError;
}
/**
 * Type definition for AWS::IoTTwinMaker::Entity.Component
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-component.html | AWS::IoTTwinMaker::Entity.Component}
 */
export interface IoTTwinMakerEntityComponent {
  Status?: IoTTwinMakerEntityStatus;
  Description?: string;
  DefinedIn?: string;
  PropertyGroups?: Record<string, any>;
  ComponentTypeId?: string;
  ComponentName?: string;
  Properties?: Record<string, any>;
}
/**
 * Type definition for AWS::IoTTwinMaker::Entity.DataType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-datatype.html | AWS::IoTTwinMaker::Entity.DataType}
 */
export interface IoTTwinMakerEntityDataType {
  Type?: string;
  AllowedValues?: any[];
  UnitOfMeasure?: string;
  Relationship?: IoTTwinMakerEntityRelationship;
  NestedType?: IoTTwinMakerEntityDataType;
}
/**
 * Type definition for AWS::IoTTwinMaker::Entity.DataValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-datavalue.html | AWS::IoTTwinMaker::Entity.DataValue}
 */
export interface IoTTwinMakerEntityDataValue {
  DoubleValue?: number;
  Expression?: string;
  BooleanValue?: boolean;
  IntegerValue?: number;
  ListValue?: any[];
  LongValue?: number;
  MapValue?: Record<string, any>;
  RelationshipValue?: IoTTwinMakerEntityRelationshipValue;
  StringValue?: string;
}
/**
 * Type definition for AWS::IoTTwinMaker::Entity.Definition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-definition.html | AWS::IoTTwinMaker::Entity.Definition}
 */
export interface IoTTwinMakerEntityDefinition {
  DefaultValue?: IoTTwinMakerEntityDataValue;
  IsImported?: boolean;
  IsInherited?: boolean;
  Configuration?: Record<string, any>;
  IsExternalId?: boolean;
  IsStoredExternally?: boolean;
  IsTimeSeries?: boolean;
  IsRequiredInEntity?: boolean;
  DataType?: IoTTwinMakerEntityDataType;
  IsFinal?: boolean;
}
/**
 * Type definition for AWS::IoTTwinMaker::Entity.Error
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-error.html | AWS::IoTTwinMaker::Entity.Error}
 */
export interface IoTTwinMakerEntityError {
  Message?: string;
  Code?: string;
}
/**
 * Type definition for AWS::IoTTwinMaker::Entity.Property
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-property.html | AWS::IoTTwinMaker::Entity.Property}
 */
export interface IoTTwinMakerEntityProperty {
  Definition?: IoTTwinMakerEntityDefinition;
  Value?: IoTTwinMakerEntityDataValue;
}
/**
 * Type definition for AWS::IoTTwinMaker::Entity.PropertyGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-propertygroup.html | AWS::IoTTwinMaker::Entity.PropertyGroup}
 */
export interface IoTTwinMakerEntityPropertyGroup {
  GroupType?: string;
  PropertyNames?: any[];
}
/**
 * Type definition for AWS::IoTTwinMaker::Entity.Relationship
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-relationship.html | AWS::IoTTwinMaker::Entity.Relationship}
 */
export interface IoTTwinMakerEntityRelationship {
  RelationshipType?: string;
  TargetComponentTypeId?: string;
}
/**
 * Type definition for AWS::IoTTwinMaker::Entity.RelationshipValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-relationshipvalue.html | AWS::IoTTwinMaker::Entity.RelationshipValue}
 */
export interface IoTTwinMakerEntityRelationshipValue {
  TargetComponentName?: string;
  TargetEntityId?: string;
}
/**
 * Type definition for AWS::IoTTwinMaker::Entity.Status
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-entity-status.html | AWS::IoTTwinMaker::Entity.Status}
 */
export interface IoTTwinMakerEntityStatus {
  State?: string;
  Error?: IoTTwinMakerEntityError;
}
/**
 * Type definition for AWS::IoTTwinMaker::ComponentType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-componenttype.html | AWS::IoTTwinMaker::ComponentType}
 */
export interface IoTTwinMakerComponentTypeProps {
  ExtendsFrom?: any[];
  Description?: string;
  IsSingleton?: boolean;
  PropertyDefinitions?: Record<string, any>;
  PropertyGroups?: Record<string, any>;
  WorkspaceId: string;
  ComponentTypeId: string;
  Functions?: Record<string, any>;
  Tags?: Record<string, Tag>;
}
/**
 * Attributes type definition for AWS::IoTTwinMaker::ComponentType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-componenttype.html | AWS::IoTTwinMaker::ComponentType}
 */
export interface IoTTwinMakerComponentTypeAttribs {
  Status?: IoTTwinMakerComponentTypeStatus;
  CreationDateTime?: string;
  "Status.Error.Message"?: string;
  IsSchemaInitialized?: boolean;
  "Status.State"?: string;
  "Status.Error"?: IoTTwinMakerComponentTypeError;
  UpdateDateTime?: string;
  "Status.Error.Code"?: string;
  Arn?: string;
  IsAbstract?: boolean;
}
/**
 * Resource class for AWS::IoTTwinMaker::ComponentType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-componenttype.html | AWS::IoTTwinMaker::ComponentType}
 */
export class IoTTwinMakerComponentType extends ResourceBase<
  "AWS::IoTTwinMaker::ComponentType",
  IoTTwinMakerComponentTypeProps,
  IoTTwinMakerComponentTypeAttribs
> {
  public static readonly Type = "AWS::IoTTwinMaker::ComponentType";
  public static readonly AttributeNames: readonly (keyof IoTTwinMakerComponentTypeAttribs)[] =
    [
      "Status",
      "CreationDateTime",
      "Status.Error.Message",
      "IsSchemaInitialized",
      "Status.State",
      "Status.Error",
      "UpdateDateTime",
      "Status.Error.Code",
      "Arn",
      "IsAbstract",
    ];
  constructor(
    logicalId: string,
    properties: IoTTwinMakerComponentTypeProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTTwinMakerComponentType.Type,
      IoTTwinMakerComponentType.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoTTwinMaker::Entity
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html | AWS::IoTTwinMaker::Entity}
 */
export interface IoTTwinMakerEntityProps {
  EntityId?: string;
  Components?: Record<string, any>;
  ParentEntityId?: string;
  Description?: string;
  EntityName: string;
  WorkspaceId: string;
  Tags?: Record<string, Tag>;
}
/**
 * Attributes type definition for AWS::IoTTwinMaker::Entity
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html | AWS::IoTTwinMaker::Entity}
 */
export interface IoTTwinMakerEntityAttribs {
  Status?: IoTTwinMakerEntityStatus;
  CreationDateTime?: string;
  "Status.Error.Message"?: string;
  HasChildEntities?: boolean;
  "Status.State"?: string;
  "Status.Error"?: IoTTwinMakerEntityError;
  UpdateDateTime?: string;
  "Status.Error.Code"?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::IoTTwinMaker::Entity
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html | AWS::IoTTwinMaker::Entity}
 */
export class IoTTwinMakerEntity extends ResourceBase<
  "AWS::IoTTwinMaker::Entity",
  IoTTwinMakerEntityProps,
  IoTTwinMakerEntityAttribs
> {
  public static readonly Type = "AWS::IoTTwinMaker::Entity";
  public static readonly AttributeNames: readonly (keyof IoTTwinMakerEntityAttribs)[] =
    [
      "Status",
      "CreationDateTime",
      "Status.Error.Message",
      "HasChildEntities",
      "Status.State",
      "Status.Error",
      "UpdateDateTime",
      "Status.Error.Code",
      "Arn",
    ];
  constructor(
    logicalId: string,
    properties: IoTTwinMakerEntityProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTTwinMakerEntity.Type,
      IoTTwinMakerEntity.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoTTwinMaker::Scene
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-scene.html | AWS::IoTTwinMaker::Scene}
 */
export interface IoTTwinMakerSceneProps {
  SceneId: string;
  Description?: string;
  SceneMetadata?: Record<string, any>;
  ContentLocation: string;
  Capabilities?: any[];
  WorkspaceId: string;
  Tags?: Record<string, Tag>;
}
/**
 * Attributes type definition for AWS::IoTTwinMaker::Scene
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-scene.html | AWS::IoTTwinMaker::Scene}
 */
export interface IoTTwinMakerSceneAttribs {
  CreationDateTime?: string;
  UpdateDateTime?: string;
  Arn?: string;
  GeneratedSceneMetadata?: Record<string, any>;
}
/**
 * Resource class for AWS::IoTTwinMaker::Scene
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-scene.html | AWS::IoTTwinMaker::Scene}
 */
export class IoTTwinMakerScene extends ResourceBase<
  "AWS::IoTTwinMaker::Scene",
  IoTTwinMakerSceneProps,
  IoTTwinMakerSceneAttribs
> {
  public static readonly Type = "AWS::IoTTwinMaker::Scene";
  public static readonly AttributeNames: readonly (keyof IoTTwinMakerSceneAttribs)[] =
    ["CreationDateTime", "UpdateDateTime", "Arn", "GeneratedSceneMetadata"];
  constructor(
    logicalId: string,
    properties: IoTTwinMakerSceneProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTTwinMakerScene.Type,
      IoTTwinMakerScene.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoTTwinMaker::SyncJob
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-syncjob.html | AWS::IoTTwinMaker::SyncJob}
 */
export interface IoTTwinMakerSyncJobProps {
  SyncSource: string;
  SyncRole: string;
  WorkspaceId: string;
  Tags?: Record<string, Tag>;
}
/**
 * Attributes type definition for AWS::IoTTwinMaker::SyncJob
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-syncjob.html | AWS::IoTTwinMaker::SyncJob}
 */
export interface IoTTwinMakerSyncJobAttribs {
  CreationDateTime?: string;
  State?: string;
  UpdateDateTime?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::IoTTwinMaker::SyncJob
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-syncjob.html | AWS::IoTTwinMaker::SyncJob}
 */
export class IoTTwinMakerSyncJob extends ResourceBase<
  "AWS::IoTTwinMaker::SyncJob",
  IoTTwinMakerSyncJobProps,
  IoTTwinMakerSyncJobAttribs
> {
  public static readonly Type = "AWS::IoTTwinMaker::SyncJob";
  public static readonly AttributeNames: readonly (keyof IoTTwinMakerSyncJobAttribs)[] =
    ["CreationDateTime", "State", "UpdateDateTime", "Arn"];
  constructor(
    logicalId: string,
    properties: IoTTwinMakerSyncJobProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTTwinMakerSyncJob.Type,
      IoTTwinMakerSyncJob.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::IoTTwinMaker::Workspace
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-workspace.html | AWS::IoTTwinMaker::Workspace}
 */
export interface IoTTwinMakerWorkspaceProps {
  Role: string;
  Description?: string;
  WorkspaceId: string;
  S3Location: string;
  Tags?: Record<string, Tag>;
}
/**
 * Attributes type definition for AWS::IoTTwinMaker::Workspace
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-workspace.html | AWS::IoTTwinMaker::Workspace}
 */
export interface IoTTwinMakerWorkspaceAttribs {
  CreationDateTime?: string;
  UpdateDateTime?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::IoTTwinMaker::Workspace
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-workspace.html | AWS::IoTTwinMaker::Workspace}
 */
export class IoTTwinMakerWorkspace extends ResourceBase<
  "AWS::IoTTwinMaker::Workspace",
  IoTTwinMakerWorkspaceProps,
  IoTTwinMakerWorkspaceAttribs
> {
  public static readonly Type = "AWS::IoTTwinMaker::Workspace";
  public static readonly AttributeNames: readonly (keyof IoTTwinMakerWorkspaceAttribs)[] =
    ["CreationDateTime", "UpdateDateTime", "Arn"];
  constructor(
    logicalId: string,
    properties: IoTTwinMakerWorkspaceProps,
    options?: ResourceOptions,
  ) {
    super(
      IoTTwinMakerWorkspace.Type,
      IoTTwinMakerWorkspace.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
