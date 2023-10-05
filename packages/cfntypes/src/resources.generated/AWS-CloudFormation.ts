import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::CloudFormation::HookVersion.LoggingConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-hookversion-loggingconfig.html | AWS::CloudFormation::HookVersion.LoggingConfig}
 */
export interface CloudFormationHookVersionLoggingConfig {
  LogGroupName?: string;
  LogRoleArn?: string;
}
/**
 * Type definition for AWS::CloudFormation::ResourceVersion.LoggingConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-resourceversion-loggingconfig.html | AWS::CloudFormation::ResourceVersion.LoggingConfig}
 */
export interface CloudFormationResourceVersionLoggingConfig {
  LogGroupName?: string;
  LogRoleArn?: string;
}
/**
 * Type definition for AWS::CloudFormation::StackSet.AutoDeployment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-autodeployment.html | AWS::CloudFormation::StackSet.AutoDeployment}
 */
export interface CloudFormationStackSetAutoDeployment {
  Enabled?: boolean;
  RetainStacksOnAccountRemoval?: boolean;
}
/**
 * Type definition for AWS::CloudFormation::StackSet.DeploymentTargets
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-deploymenttargets.html | AWS::CloudFormation::StackSet.DeploymentTargets}
 */
export interface CloudFormationStackSetDeploymentTargets {
  AccountFilterType?: string;
  Accounts?: any[];
  AccountsUrl?: string;
  OrganizationalUnitIds?: any[];
}
/**
 * Type definition for AWS::CloudFormation::StackSet.ManagedExecution
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-managedexecution.html | AWS::CloudFormation::StackSet.ManagedExecution}
 */
export interface CloudFormationStackSetManagedExecution {
  Active?: boolean;
}
/**
 * Type definition for AWS::CloudFormation::StackSet.OperationPreferences
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-operationpreferences.html | AWS::CloudFormation::StackSet.OperationPreferences}
 */
export interface CloudFormationStackSetOperationPreferences {
  MaxConcurrentPercentage?: number;
  RegionConcurrencyType?: string;
  MaxConcurrentCount?: number;
  FailureTolerancePercentage?: number;
  FailureToleranceCount?: number;
  RegionOrder?: any[];
}
/**
 * Type definition for AWS::CloudFormation::StackSet.Parameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-parameter.html | AWS::CloudFormation::StackSet.Parameter}
 */
export interface CloudFormationStackSetParameter {
  ParameterValue: string;
  ParameterKey: string;
}
/**
 * Type definition for AWS::CloudFormation::StackSet.StackInstances
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-stackinstances.html | AWS::CloudFormation::StackSet.StackInstances}
 */
export interface CloudFormationStackSetStackInstances {
  ParameterOverrides?: any[];
  DeploymentTargets: CloudFormationStackSetDeploymentTargets;
  Regions: any[];
}
/**
 * Type definition for AWS::CloudFormation::TypeActivation.LoggingConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-typeactivation-loggingconfig.html | AWS::CloudFormation::TypeActivation.LoggingConfig}
 */
export interface CloudFormationTypeActivationLoggingConfig {
  LogGroupName?: string;
  LogRoleArn?: string;
}
/**
 * Type definition for AWS::CloudFormation::CustomResource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cfn-customresource.html | AWS::CloudFormation::CustomResource}
 */
export interface CloudFormationCustomResourceProps {
  ServiceToken: string;
}
/**
 * Resource class for AWS::CloudFormation::CustomResource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cfn-customresource.html | AWS::CloudFormation::CustomResource}
 */
export class CloudFormationCustomResource extends ResourceBase<
  "AWS::CloudFormation::CustomResource",
  CloudFormationCustomResourceProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::CloudFormation::CustomResource";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: CloudFormationCustomResourceProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudFormationCustomResource.Type,
      CloudFormationCustomResource.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CloudFormation::HookDefaultVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookdefaultversion.html | AWS::CloudFormation::HookDefaultVersion}
 */
export interface CloudFormationHookDefaultVersionProps {
  VersionId?: string;
  TypeName?: string;
  TypeVersionArn?: string;
}
/**
 * Attributes type definition for AWS::CloudFormation::HookDefaultVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookdefaultversion.html | AWS::CloudFormation::HookDefaultVersion}
 */
export interface CloudFormationHookDefaultVersionAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::CloudFormation::HookDefaultVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookdefaultversion.html | AWS::CloudFormation::HookDefaultVersion}
 */
export class CloudFormationHookDefaultVersion extends ResourceBase<
  "AWS::CloudFormation::HookDefaultVersion",
  CloudFormationHookDefaultVersionProps,
  CloudFormationHookDefaultVersionAttribs
> {
  public static readonly Type = "AWS::CloudFormation::HookDefaultVersion";
  public static readonly AttributeNames: readonly (keyof CloudFormationHookDefaultVersionAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: CloudFormationHookDefaultVersionProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudFormationHookDefaultVersion.Type,
      CloudFormationHookDefaultVersion.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CloudFormation::HookTypeConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hooktypeconfig.html | AWS::CloudFormation::HookTypeConfig}
 */
export interface CloudFormationHookTypeConfigProps {
  TypeName?: string;
  Configuration: string;
  TypeArn?: string;
  ConfigurationAlias?: string;
}
/**
 * Attributes type definition for AWS::CloudFormation::HookTypeConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hooktypeconfig.html | AWS::CloudFormation::HookTypeConfig}
 */
export interface CloudFormationHookTypeConfigAttribs {
  ConfigurationArn?: string;
}
/**
 * Resource class for AWS::CloudFormation::HookTypeConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hooktypeconfig.html | AWS::CloudFormation::HookTypeConfig}
 */
export class CloudFormationHookTypeConfig extends ResourceBase<
  "AWS::CloudFormation::HookTypeConfig",
  CloudFormationHookTypeConfigProps,
  CloudFormationHookTypeConfigAttribs
> {
  public static readonly Type = "AWS::CloudFormation::HookTypeConfig";
  public static readonly AttributeNames: readonly (keyof CloudFormationHookTypeConfigAttribs)[] =
    ["ConfigurationArn"];
  constructor(
    logicalId: string,
    properties: CloudFormationHookTypeConfigProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudFormationHookTypeConfig.Type,
      CloudFormationHookTypeConfig.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CloudFormation::HookVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookversion.html | AWS::CloudFormation::HookVersion}
 */
export interface CloudFormationHookVersionProps {
  ExecutionRoleArn?: string;
  TypeName: string;
  LoggingConfig?: CloudFormationHookVersionLoggingConfig;
  SchemaHandlerPackage: string;
}
/**
 * Attributes type definition for AWS::CloudFormation::HookVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookversion.html | AWS::CloudFormation::HookVersion}
 */
export interface CloudFormationHookVersionAttribs {
  VersionId?: string;
  IsDefaultVersion?: boolean;
  Visibility?: string;
  Arn?: string;
  TypeArn?: string;
}
/**
 * Resource class for AWS::CloudFormation::HookVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookversion.html | AWS::CloudFormation::HookVersion}
 */
export class CloudFormationHookVersion extends ResourceBase<
  "AWS::CloudFormation::HookVersion",
  CloudFormationHookVersionProps,
  CloudFormationHookVersionAttribs
> {
  public static readonly Type = "AWS::CloudFormation::HookVersion";
  public static readonly AttributeNames: readonly (keyof CloudFormationHookVersionAttribs)[] =
    ["VersionId", "IsDefaultVersion", "Visibility", "Arn", "TypeArn"];
  constructor(
    logicalId: string,
    properties: CloudFormationHookVersionProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudFormationHookVersion.Type,
      CloudFormationHookVersion.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CloudFormation::Macro
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-macro.html | AWS::CloudFormation::Macro}
 */
export interface CloudFormationMacroProps {
  Description?: string;
  FunctionName: string;
  LogGroupName?: string;
  LogRoleARN?: string;
  Name: string;
}
/**
 * Resource class for AWS::CloudFormation::Macro
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-macro.html | AWS::CloudFormation::Macro}
 */
export class CloudFormationMacro extends ResourceBase<
  "AWS::CloudFormation::Macro",
  CloudFormationMacroProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::CloudFormation::Macro";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: CloudFormationMacroProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudFormationMacro.Type,
      CloudFormationMacro.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CloudFormation::ModuleDefaultVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduledefaultversion.html | AWS::CloudFormation::ModuleDefaultVersion}
 */
export interface CloudFormationModuleDefaultVersionProps {
  VersionId?: string;
  ModuleName?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::CloudFormation::ModuleDefaultVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduledefaultversion.html | AWS::CloudFormation::ModuleDefaultVersion}
 */
export class CloudFormationModuleDefaultVersion extends ResourceBase<
  "AWS::CloudFormation::ModuleDefaultVersion",
  CloudFormationModuleDefaultVersionProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::CloudFormation::ModuleDefaultVersion";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: CloudFormationModuleDefaultVersionProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudFormationModuleDefaultVersion.Type,
      CloudFormationModuleDefaultVersion.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CloudFormation::ModuleVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduleversion.html | AWS::CloudFormation::ModuleVersion}
 */
export interface CloudFormationModuleVersionProps {
  ModulePackage: string;
  ModuleName: string;
}
/**
 * Attributes type definition for AWS::CloudFormation::ModuleVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduleversion.html | AWS::CloudFormation::ModuleVersion}
 */
export interface CloudFormationModuleVersionAttribs {
  TimeCreated?: string;
  VersionId?: string;
  Description?: string;
  Schema?: string;
  IsDefaultVersion?: boolean;
  Visibility?: string;
  Arn?: string;
  DocumentationUrl?: string;
}
/**
 * Resource class for AWS::CloudFormation::ModuleVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduleversion.html | AWS::CloudFormation::ModuleVersion}
 */
export class CloudFormationModuleVersion extends ResourceBase<
  "AWS::CloudFormation::ModuleVersion",
  CloudFormationModuleVersionProps,
  CloudFormationModuleVersionAttribs
> {
  public static readonly Type = "AWS::CloudFormation::ModuleVersion";
  public static readonly AttributeNames: readonly (keyof CloudFormationModuleVersionAttribs)[] =
    [
      "TimeCreated",
      "VersionId",
      "Description",
      "Schema",
      "IsDefaultVersion",
      "Visibility",
      "Arn",
      "DocumentationUrl",
    ];
  constructor(
    logicalId: string,
    properties: CloudFormationModuleVersionProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudFormationModuleVersion.Type,
      CloudFormationModuleVersion.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CloudFormation::PublicTypeVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html | AWS::CloudFormation::PublicTypeVersion}
 */
export interface CloudFormationPublicTypeVersionProps {
  TypeName?: string;
  LogDeliveryBucket?: string;
  Type?: string;
  PublicVersionNumber?: string;
  Arn?: string;
}
/**
 * Attributes type definition for AWS::CloudFormation::PublicTypeVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html | AWS::CloudFormation::PublicTypeVersion}
 */
export interface CloudFormationPublicTypeVersionAttribs {
  PublicTypeArn?: string;
  PublisherId?: string;
  TypeVersionArn?: string;
}
/**
 * Resource class for AWS::CloudFormation::PublicTypeVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html | AWS::CloudFormation::PublicTypeVersion}
 */
export class CloudFormationPublicTypeVersion extends ResourceBase<
  "AWS::CloudFormation::PublicTypeVersion",
  CloudFormationPublicTypeVersionProps,
  CloudFormationPublicTypeVersionAttribs
> {
  public static readonly Type = "AWS::CloudFormation::PublicTypeVersion";
  public static readonly AttributeNames: readonly (keyof CloudFormationPublicTypeVersionAttribs)[] =
    ["PublicTypeArn", "PublisherId", "TypeVersionArn"];
  constructor(
    logicalId: string,
    properties: CloudFormationPublicTypeVersionProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudFormationPublicTypeVersion.Type,
      CloudFormationPublicTypeVersion.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CloudFormation::Publisher
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publisher.html | AWS::CloudFormation::Publisher}
 */
export interface CloudFormationPublisherProps {
  AcceptTermsAndConditions: boolean;
  ConnectionArn?: string;
}
/**
 * Attributes type definition for AWS::CloudFormation::Publisher
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publisher.html | AWS::CloudFormation::Publisher}
 */
export interface CloudFormationPublisherAttribs {
  PublisherId?: string;
  IdentityProvider?: string;
  PublisherProfile?: string;
  PublisherStatus?: string;
}
/**
 * Resource class for AWS::CloudFormation::Publisher
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publisher.html | AWS::CloudFormation::Publisher}
 */
export class CloudFormationPublisher extends ResourceBase<
  "AWS::CloudFormation::Publisher",
  CloudFormationPublisherProps,
  CloudFormationPublisherAttribs
> {
  public static readonly Type = "AWS::CloudFormation::Publisher";
  public static readonly AttributeNames: readonly (keyof CloudFormationPublisherAttribs)[] =
    ["PublisherId", "IdentityProvider", "PublisherProfile", "PublisherStatus"];
  constructor(
    logicalId: string,
    properties: CloudFormationPublisherProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudFormationPublisher.Type,
      CloudFormationPublisher.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CloudFormation::ResourceDefaultVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourcedefaultversion.html | AWS::CloudFormation::ResourceDefaultVersion}
 */
export interface CloudFormationResourceDefaultVersionProps {
  VersionId?: string;
  TypeName?: string;
  TypeVersionArn?: string;
}
/**
 * Attributes type definition for AWS::CloudFormation::ResourceDefaultVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourcedefaultversion.html | AWS::CloudFormation::ResourceDefaultVersion}
 */
export interface CloudFormationResourceDefaultVersionAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::CloudFormation::ResourceDefaultVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourcedefaultversion.html | AWS::CloudFormation::ResourceDefaultVersion}
 */
export class CloudFormationResourceDefaultVersion extends ResourceBase<
  "AWS::CloudFormation::ResourceDefaultVersion",
  CloudFormationResourceDefaultVersionProps,
  CloudFormationResourceDefaultVersionAttribs
> {
  public static readonly Type = "AWS::CloudFormation::ResourceDefaultVersion";
  public static readonly AttributeNames: readonly (keyof CloudFormationResourceDefaultVersionAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: CloudFormationResourceDefaultVersionProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudFormationResourceDefaultVersion.Type,
      CloudFormationResourceDefaultVersion.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CloudFormation::ResourceVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourceversion.html | AWS::CloudFormation::ResourceVersion}
 */
export interface CloudFormationResourceVersionProps {
  ExecutionRoleArn?: string;
  TypeName: string;
  LoggingConfig?: CloudFormationResourceVersionLoggingConfig;
  SchemaHandlerPackage: string;
}
/**
 * Attributes type definition for AWS::CloudFormation::ResourceVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourceversion.html | AWS::CloudFormation::ResourceVersion}
 */
export interface CloudFormationResourceVersionAttribs {
  VersionId?: string;
  ProvisioningType?: string;
  IsDefaultVersion?: boolean;
  Visibility?: string;
  Arn?: string;
  TypeArn?: string;
}
/**
 * Resource class for AWS::CloudFormation::ResourceVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourceversion.html | AWS::CloudFormation::ResourceVersion}
 */
export class CloudFormationResourceVersion extends ResourceBase<
  "AWS::CloudFormation::ResourceVersion",
  CloudFormationResourceVersionProps,
  CloudFormationResourceVersionAttribs
> {
  public static readonly Type = "AWS::CloudFormation::ResourceVersion";
  public static readonly AttributeNames: readonly (keyof CloudFormationResourceVersionAttribs)[] =
    [
      "VersionId",
      "ProvisioningType",
      "IsDefaultVersion",
      "Visibility",
      "Arn",
      "TypeArn",
    ];
  constructor(
    logicalId: string,
    properties: CloudFormationResourceVersionProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudFormationResourceVersion.Type,
      CloudFormationResourceVersion.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CloudFormation::Stack
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stack.html | AWS::CloudFormation::Stack}
 */
export interface CloudFormationStackProps {
  NotificationARNs?: any[];
  Parameters?: Record<string, any>;
  Tags?: Tag[];
  TemplateURL: string;
  TimeoutInMinutes?: number;
}
/**
 * Resource class for AWS::CloudFormation::Stack
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stack.html | AWS::CloudFormation::Stack}
 */
export class CloudFormationStack extends ResourceBase<
  "AWS::CloudFormation::Stack",
  CloudFormationStackProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::CloudFormation::Stack";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: CloudFormationStackProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudFormationStack.Type,
      CloudFormationStack.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CloudFormation::StackSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html | AWS::CloudFormation::StackSet}
 */
export interface CloudFormationStackSetProps {
  Description?: string;
  Parameters?: any[];
  StackInstancesGroup?: any[];
  TemplateBody?: string;
  StackSetName: string;
  CallAs?: string;
  OperationPreferences?: CloudFormationStackSetOperationPreferences;
  TemplateURL?: string;
  AutoDeployment?: CloudFormationStackSetAutoDeployment;
  Capabilities?: any[];
  PermissionModel: string;
  AdministrationRoleARN?: string;
  ExecutionRoleName?: string;
  ManagedExecution?: CloudFormationStackSetManagedExecution;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::CloudFormation::StackSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html | AWS::CloudFormation::StackSet}
 */
export interface CloudFormationStackSetAttribs {
  StackSetId?: string;
}
/**
 * Resource class for AWS::CloudFormation::StackSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html | AWS::CloudFormation::StackSet}
 */
export class CloudFormationStackSet extends ResourceBase<
  "AWS::CloudFormation::StackSet",
  CloudFormationStackSetProps,
  CloudFormationStackSetAttribs
> {
  public static readonly Type = "AWS::CloudFormation::StackSet";
  public static readonly AttributeNames: readonly (keyof CloudFormationStackSetAttribs)[] =
    ["StackSetId"];
  constructor(
    logicalId: string,
    properties: CloudFormationStackSetProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudFormationStackSet.Type,
      CloudFormationStackSet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CloudFormation::TypeActivation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-typeactivation.html | AWS::CloudFormation::TypeActivation}
 */
export interface CloudFormationTypeActivationProps {
  MajorVersion?: string;
  ExecutionRoleArn?: string;
  TypeName?: string;
  Type?: string;
  PublicTypeArn?: string;
  AutoUpdate?: boolean;
  LoggingConfig?: CloudFormationTypeActivationLoggingConfig;
  PublisherId?: string;
  VersionBump?: string;
  TypeNameAlias?: string;
}
/**
 * Attributes type definition for AWS::CloudFormation::TypeActivation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-typeactivation.html | AWS::CloudFormation::TypeActivation}
 */
export interface CloudFormationTypeActivationAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::CloudFormation::TypeActivation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-typeactivation.html | AWS::CloudFormation::TypeActivation}
 */
export class CloudFormationTypeActivation extends ResourceBase<
  "AWS::CloudFormation::TypeActivation",
  CloudFormationTypeActivationProps,
  CloudFormationTypeActivationAttribs
> {
  public static readonly Type = "AWS::CloudFormation::TypeActivation";
  public static readonly AttributeNames: readonly (keyof CloudFormationTypeActivationAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: CloudFormationTypeActivationProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudFormationTypeActivation.Type,
      CloudFormationTypeActivation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CloudFormation::WaitCondition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waitcondition.html | AWS::CloudFormation::WaitCondition}
 */
export interface CloudFormationWaitConditionProps {
  Count?: number;
  Handle?: string;
  Timeout?: string;
}
/**
 * Attributes type definition for AWS::CloudFormation::WaitCondition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waitcondition.html | AWS::CloudFormation::WaitCondition}
 */
export interface CloudFormationWaitConditionAttribs {
  Data?: object;
}
/**
 * Resource class for AWS::CloudFormation::WaitCondition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waitcondition.html | AWS::CloudFormation::WaitCondition}
 */
export class CloudFormationWaitCondition extends ResourceBase<
  "AWS::CloudFormation::WaitCondition",
  CloudFormationWaitConditionProps,
  CloudFormationWaitConditionAttribs
> {
  public static readonly Type = "AWS::CloudFormation::WaitCondition";
  public static readonly AttributeNames: readonly (keyof CloudFormationWaitConditionAttribs)[] =
    ["Data"];
  constructor(
    logicalId: string,
    properties: CloudFormationWaitConditionProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudFormationWaitCondition.Type,
      CloudFormationWaitCondition.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::CloudFormation::WaitConditionHandle
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waitconditionhandle.html | AWS::CloudFormation::WaitConditionHandle}
 */
export interface CloudFormationWaitConditionHandleProps {}
/**
 * Resource class for AWS::CloudFormation::WaitConditionHandle
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waitconditionhandle.html | AWS::CloudFormation::WaitConditionHandle}
 */
export class CloudFormationWaitConditionHandle extends ResourceBase<
  "AWS::CloudFormation::WaitConditionHandle",
  CloudFormationWaitConditionHandleProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::CloudFormation::WaitConditionHandle";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: CloudFormationWaitConditionHandleProps,
    options?: ResourceOptions,
  ) {
    super(
      CloudFormationWaitConditionHandle.Type,
      CloudFormationWaitConditionHandle.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
