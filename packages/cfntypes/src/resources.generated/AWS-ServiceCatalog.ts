import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::ServiceCatalog::CloudFormationProduct.CodeStarParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationproduct-codestarparameters.html | AWS::ServiceCatalog::CloudFormationProduct.CodeStarParameters}
 */
export interface ServiceCatalogCloudFormationProductCodeStarParameters {
  ArtifactPath: string;
  Repository: string;
  Branch: string;
  ConnectionArn: string;
}
/**
 * Type definition for AWS::ServiceCatalog::CloudFormationProduct.ConnectionParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationproduct-sourceconnection-connectionparameters.html | AWS::ServiceCatalog::CloudFormationProduct.ConnectionParameters}
 */
export interface ServiceCatalogCloudFormationProductConnectionParameters {
  CodeStar?: ServiceCatalogCloudFormationProductCodeStarParameters;
}
/**
 * Type definition for AWS::ServiceCatalog::CloudFormationProduct.ProvisioningArtifactProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationproduct-provisioningartifactproperties.html | AWS::ServiceCatalog::CloudFormationProduct.ProvisioningArtifactProperties}
 */
export interface ServiceCatalogCloudFormationProductProvisioningArtifactProperties {
  Type?: string;
  Description?: string;
  DisableTemplateValidation?: boolean;
  Info: object;
  Name?: string;
}
/**
 * Type definition for AWS::ServiceCatalog::CloudFormationProduct.SourceConnection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationproduct-sourceconnection.html | AWS::ServiceCatalog::CloudFormationProduct.SourceConnection}
 */
export interface ServiceCatalogCloudFormationProductSourceConnection {
  Type: string;
  ConnectionParameters: ServiceCatalogCloudFormationProductConnectionParameters;
}
/**
 * Type definition for AWS::ServiceCatalog::CloudFormationProvisionedProduct.ProvisioningParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationprovisionedproduct-provisioningparameter.html | AWS::ServiceCatalog::CloudFormationProvisionedProduct.ProvisioningParameter}
 */
export interface ServiceCatalogCloudFormationProvisionedProductProvisioningParameter {
  Value: string;
  Key: string;
}
/**
 * Type definition for AWS::ServiceCatalog::CloudFormationProvisionedProduct.ProvisioningPreferences
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationprovisionedproduct-provisioningpreferences.html | AWS::ServiceCatalog::CloudFormationProvisionedProduct.ProvisioningPreferences}
 */
export interface ServiceCatalogCloudFormationProvisionedProductProvisioningPreferences {
  StackSetAccounts?: any[];
  StackSetFailureToleranceCount?: number;
  StackSetMaxConcurrencyPercentage?: number;
  StackSetMaxConcurrencyCount?: number;
  StackSetRegions?: any[];
  StackSetOperationType?: string;
  StackSetFailureTolerancePercentage?: number;
}
/**
 * Type definition for AWS::ServiceCatalog::ServiceAction.DefinitionParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-serviceaction-definitionparameter.html | AWS::ServiceCatalog::ServiceAction.DefinitionParameter}
 */
export interface ServiceCatalogServiceActionDefinitionParameter {
  Value: string;
  Key: string;
}
/**
 * Type definition for AWS::ServiceCatalog::AcceptedPortfolioShare
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-acceptedportfolioshare.html | AWS::ServiceCatalog::AcceptedPortfolioShare}
 */
export interface ServiceCatalogAcceptedPortfolioShareProps {
  AcceptLanguage?: string;
  PortfolioId: string;
}
/**
 * Resource class for AWS::ServiceCatalog::AcceptedPortfolioShare
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-acceptedportfolioshare.html | AWS::ServiceCatalog::AcceptedPortfolioShare}
 */
export class ServiceCatalogAcceptedPortfolioShare extends ResourceBase<
  "AWS::ServiceCatalog::AcceptedPortfolioShare",
  ServiceCatalogAcceptedPortfolioShareProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::ServiceCatalog::AcceptedPortfolioShare";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ServiceCatalogAcceptedPortfolioShareProps,
    options?: ResourceOptions,
  ) {
    super(
      ServiceCatalogAcceptedPortfolioShare.Type,
      ServiceCatalogAcceptedPortfolioShare.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ServiceCatalog::CloudFormationProduct
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationproduct.html | AWS::ServiceCatalog::CloudFormationProduct}
 */
export interface ServiceCatalogCloudFormationProductProps {
  Owner: string;
  Description?: string;
  SupportEmail?: string;
  ProductType?: string;
  Name: string;
  ReplaceProvisioningArtifacts?: boolean;
  SupportDescription?: string;
  Distributor?: string;
  AcceptLanguage?: string;
  SupportUrl?: string;
  SourceConnection?: ServiceCatalogCloudFormationProductSourceConnection;
  Tags?: Tag[];
  ProvisioningArtifactParameters?: any[];
}
/**
 * Attributes type definition for AWS::ServiceCatalog::CloudFormationProduct
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationproduct.html | AWS::ServiceCatalog::CloudFormationProduct}
 */
export interface ServiceCatalogCloudFormationProductAttribs {
  ProductName?: string;
  ProvisioningArtifactIds?: string;
  ProvisioningArtifactNames?: string;
}
/**
 * Resource class for AWS::ServiceCatalog::CloudFormationProduct
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationproduct.html | AWS::ServiceCatalog::CloudFormationProduct}
 */
export class ServiceCatalogCloudFormationProduct extends ResourceBase<
  "AWS::ServiceCatalog::CloudFormationProduct",
  ServiceCatalogCloudFormationProductProps,
  ServiceCatalogCloudFormationProductAttribs
> {
  public static readonly Type = "AWS::ServiceCatalog::CloudFormationProduct";
  public static readonly AttributeNames: readonly (keyof ServiceCatalogCloudFormationProductAttribs)[] =
    ["ProductName", "ProvisioningArtifactIds", "ProvisioningArtifactNames"];
  constructor(
    logicalId: string,
    properties: ServiceCatalogCloudFormationProductProps,
    options?: ResourceOptions,
  ) {
    super(
      ServiceCatalogCloudFormationProduct.Type,
      ServiceCatalogCloudFormationProduct.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ServiceCatalog::CloudFormationProvisionedProduct
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationprovisionedproduct.html | AWS::ServiceCatalog::CloudFormationProvisionedProduct}
 */
export interface ServiceCatalogCloudFormationProvisionedProductProps {
  PathId?: string;
  ProvisioningParameters?: any[];
  ProvisioningPreferences?: ServiceCatalogCloudFormationProvisionedProductProvisioningPreferences;
  ProductName?: string;
  ProvisioningArtifactName?: string;
  NotificationArns?: any[];
  AcceptLanguage?: string;
  ProductId?: string;
  PathName?: string;
  Tags?: Tag[];
  ProvisionedProductName?: string;
  ProvisioningArtifactId?: string;
}
/**
 * Attributes type definition for AWS::ServiceCatalog::CloudFormationProvisionedProduct
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationprovisionedproduct.html | AWS::ServiceCatalog::CloudFormationProvisionedProduct}
 */
export interface ServiceCatalogCloudFormationProvisionedProductAttribs {
  CloudformationStackArn?: string;
  Outputs?: Record<string, any>;
  ProvisionedProductId?: string;
  RecordId?: string;
}
/**
 * Resource class for AWS::ServiceCatalog::CloudFormationProvisionedProduct
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationprovisionedproduct.html | AWS::ServiceCatalog::CloudFormationProvisionedProduct}
 */
export class ServiceCatalogCloudFormationProvisionedProduct extends ResourceBase<
  "AWS::ServiceCatalog::CloudFormationProvisionedProduct",
  ServiceCatalogCloudFormationProvisionedProductProps,
  ServiceCatalogCloudFormationProvisionedProductAttribs
> {
  public static readonly Type =
    "AWS::ServiceCatalog::CloudFormationProvisionedProduct";
  public static readonly AttributeNames: readonly (keyof ServiceCatalogCloudFormationProvisionedProductAttribs)[] =
    ["CloudformationStackArn", "Outputs", "ProvisionedProductId", "RecordId"];
  constructor(
    logicalId: string,
    properties: ServiceCatalogCloudFormationProvisionedProductProps,
    options?: ResourceOptions,
  ) {
    super(
      ServiceCatalogCloudFormationProvisionedProduct.Type,
      ServiceCatalogCloudFormationProvisionedProduct.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ServiceCatalog::LaunchNotificationConstraint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchnotificationconstraint.html | AWS::ServiceCatalog::LaunchNotificationConstraint}
 */
export interface ServiceCatalogLaunchNotificationConstraintProps {
  Description?: string;
  NotificationArns: any[];
  AcceptLanguage?: string;
  PortfolioId: string;
  ProductId: string;
}
/**
 * Resource class for AWS::ServiceCatalog::LaunchNotificationConstraint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchnotificationconstraint.html | AWS::ServiceCatalog::LaunchNotificationConstraint}
 */
export class ServiceCatalogLaunchNotificationConstraint extends ResourceBase<
  "AWS::ServiceCatalog::LaunchNotificationConstraint",
  ServiceCatalogLaunchNotificationConstraintProps,
  Record<string, never>
> {
  public static readonly Type =
    "AWS::ServiceCatalog::LaunchNotificationConstraint";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ServiceCatalogLaunchNotificationConstraintProps,
    options?: ResourceOptions,
  ) {
    super(
      ServiceCatalogLaunchNotificationConstraint.Type,
      ServiceCatalogLaunchNotificationConstraint.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ServiceCatalog::LaunchRoleConstraint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchroleconstraint.html | AWS::ServiceCatalog::LaunchRoleConstraint}
 */
export interface ServiceCatalogLaunchRoleConstraintProps {
  Description?: string;
  LocalRoleName?: string;
  AcceptLanguage?: string;
  PortfolioId: string;
  ProductId: string;
  RoleArn?: string;
}
/**
 * Resource class for AWS::ServiceCatalog::LaunchRoleConstraint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchroleconstraint.html | AWS::ServiceCatalog::LaunchRoleConstraint}
 */
export class ServiceCatalogLaunchRoleConstraint extends ResourceBase<
  "AWS::ServiceCatalog::LaunchRoleConstraint",
  ServiceCatalogLaunchRoleConstraintProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::ServiceCatalog::LaunchRoleConstraint";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ServiceCatalogLaunchRoleConstraintProps,
    options?: ResourceOptions,
  ) {
    super(
      ServiceCatalogLaunchRoleConstraint.Type,
      ServiceCatalogLaunchRoleConstraint.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ServiceCatalog::LaunchTemplateConstraint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchtemplateconstraint.html | AWS::ServiceCatalog::LaunchTemplateConstraint}
 */
export interface ServiceCatalogLaunchTemplateConstraintProps {
  Description?: string;
  AcceptLanguage?: string;
  PortfolioId: string;
  ProductId: string;
  Rules: string;
}
/**
 * Resource class for AWS::ServiceCatalog::LaunchTemplateConstraint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchtemplateconstraint.html | AWS::ServiceCatalog::LaunchTemplateConstraint}
 */
export class ServiceCatalogLaunchTemplateConstraint extends ResourceBase<
  "AWS::ServiceCatalog::LaunchTemplateConstraint",
  ServiceCatalogLaunchTemplateConstraintProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::ServiceCatalog::LaunchTemplateConstraint";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ServiceCatalogLaunchTemplateConstraintProps,
    options?: ResourceOptions,
  ) {
    super(
      ServiceCatalogLaunchTemplateConstraint.Type,
      ServiceCatalogLaunchTemplateConstraint.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ServiceCatalog::Portfolio
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolio.html | AWS::ServiceCatalog::Portfolio}
 */
export interface ServiceCatalogPortfolioProps {
  ProviderName: string;
  Description?: string;
  DisplayName: string;
  AcceptLanguage?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::ServiceCatalog::Portfolio
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolio.html | AWS::ServiceCatalog::Portfolio}
 */
export interface ServiceCatalogPortfolioAttribs {
  PortfolioName?: string;
}
/**
 * Resource class for AWS::ServiceCatalog::Portfolio
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolio.html | AWS::ServiceCatalog::Portfolio}
 */
export class ServiceCatalogPortfolio extends ResourceBase<
  "AWS::ServiceCatalog::Portfolio",
  ServiceCatalogPortfolioProps,
  ServiceCatalogPortfolioAttribs
> {
  public static readonly Type = "AWS::ServiceCatalog::Portfolio";
  public static readonly AttributeNames: readonly (keyof ServiceCatalogPortfolioAttribs)[] =
    ["PortfolioName"];
  constructor(
    logicalId: string,
    properties: ServiceCatalogPortfolioProps,
    options?: ResourceOptions,
  ) {
    super(
      ServiceCatalogPortfolio.Type,
      ServiceCatalogPortfolio.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ServiceCatalog::PortfolioPrincipalAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioprincipalassociation.html | AWS::ServiceCatalog::PortfolioPrincipalAssociation}
 */
export interface ServiceCatalogPortfolioPrincipalAssociationProps {
  PrincipalARN: string;
  AcceptLanguage?: string;
  PortfolioId: string;
  PrincipalType: string;
}
/**
 * Resource class for AWS::ServiceCatalog::PortfolioPrincipalAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioprincipalassociation.html | AWS::ServiceCatalog::PortfolioPrincipalAssociation}
 */
export class ServiceCatalogPortfolioPrincipalAssociation extends ResourceBase<
  "AWS::ServiceCatalog::PortfolioPrincipalAssociation",
  ServiceCatalogPortfolioPrincipalAssociationProps,
  Record<string, never>
> {
  public static readonly Type =
    "AWS::ServiceCatalog::PortfolioPrincipalAssociation";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ServiceCatalogPortfolioPrincipalAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      ServiceCatalogPortfolioPrincipalAssociation.Type,
      ServiceCatalogPortfolioPrincipalAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ServiceCatalog::PortfolioProductAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioproductassociation.html | AWS::ServiceCatalog::PortfolioProductAssociation}
 */
export interface ServiceCatalogPortfolioProductAssociationProps {
  SourcePortfolioId?: string;
  AcceptLanguage?: string;
  PortfolioId: string;
  ProductId: string;
}
/**
 * Resource class for AWS::ServiceCatalog::PortfolioProductAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioproductassociation.html | AWS::ServiceCatalog::PortfolioProductAssociation}
 */
export class ServiceCatalogPortfolioProductAssociation extends ResourceBase<
  "AWS::ServiceCatalog::PortfolioProductAssociation",
  ServiceCatalogPortfolioProductAssociationProps,
  Record<string, never>
> {
  public static readonly Type =
    "AWS::ServiceCatalog::PortfolioProductAssociation";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ServiceCatalogPortfolioProductAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      ServiceCatalogPortfolioProductAssociation.Type,
      ServiceCatalogPortfolioProductAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ServiceCatalog::PortfolioShare
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioshare.html | AWS::ServiceCatalog::PortfolioShare}
 */
export interface ServiceCatalogPortfolioShareProps {
  AccountId: string;
  AcceptLanguage?: string;
  PortfolioId: string;
  ShareTagOptions?: boolean;
}
/**
 * Resource class for AWS::ServiceCatalog::PortfolioShare
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioshare.html | AWS::ServiceCatalog::PortfolioShare}
 */
export class ServiceCatalogPortfolioShare extends ResourceBase<
  "AWS::ServiceCatalog::PortfolioShare",
  ServiceCatalogPortfolioShareProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::ServiceCatalog::PortfolioShare";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ServiceCatalogPortfolioShareProps,
    options?: ResourceOptions,
  ) {
    super(
      ServiceCatalogPortfolioShare.Type,
      ServiceCatalogPortfolioShare.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ServiceCatalog::ResourceUpdateConstraint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-resourceupdateconstraint.html | AWS::ServiceCatalog::ResourceUpdateConstraint}
 */
export interface ServiceCatalogResourceUpdateConstraintProps {
  Description?: string;
  AcceptLanguage?: string;
  TagUpdateOnProvisionedProduct: string;
  PortfolioId: string;
  ProductId: string;
}
/**
 * Resource class for AWS::ServiceCatalog::ResourceUpdateConstraint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-resourceupdateconstraint.html | AWS::ServiceCatalog::ResourceUpdateConstraint}
 */
export class ServiceCatalogResourceUpdateConstraint extends ResourceBase<
  "AWS::ServiceCatalog::ResourceUpdateConstraint",
  ServiceCatalogResourceUpdateConstraintProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::ServiceCatalog::ResourceUpdateConstraint";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ServiceCatalogResourceUpdateConstraintProps,
    options?: ResourceOptions,
  ) {
    super(
      ServiceCatalogResourceUpdateConstraint.Type,
      ServiceCatalogResourceUpdateConstraint.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ServiceCatalog::ServiceAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-serviceaction.html | AWS::ServiceCatalog::ServiceAction}
 */
export interface ServiceCatalogServiceActionProps {
  Description?: string;
  Definition: any[];
  AcceptLanguage?: string;
  DefinitionType: string;
  Name: string;
}
/**
 * Attributes type definition for AWS::ServiceCatalog::ServiceAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-serviceaction.html | AWS::ServiceCatalog::ServiceAction}
 */
export interface ServiceCatalogServiceActionAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::ServiceCatalog::ServiceAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-serviceaction.html | AWS::ServiceCatalog::ServiceAction}
 */
export class ServiceCatalogServiceAction extends ResourceBase<
  "AWS::ServiceCatalog::ServiceAction",
  ServiceCatalogServiceActionProps,
  ServiceCatalogServiceActionAttribs
> {
  public static readonly Type = "AWS::ServiceCatalog::ServiceAction";
  public static readonly AttributeNames: readonly (keyof ServiceCatalogServiceActionAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: ServiceCatalogServiceActionProps,
    options?: ResourceOptions,
  ) {
    super(
      ServiceCatalogServiceAction.Type,
      ServiceCatalogServiceAction.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ServiceCatalog::ServiceActionAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-serviceactionassociation.html | AWS::ServiceCatalog::ServiceActionAssociation}
 */
export interface ServiceCatalogServiceActionAssociationProps {
  ServiceActionId: string;
  ProductId: string;
  ProvisioningArtifactId: string;
}
/**
 * Resource class for AWS::ServiceCatalog::ServiceActionAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-serviceactionassociation.html | AWS::ServiceCatalog::ServiceActionAssociation}
 */
export class ServiceCatalogServiceActionAssociation extends ResourceBase<
  "AWS::ServiceCatalog::ServiceActionAssociation",
  ServiceCatalogServiceActionAssociationProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::ServiceCatalog::ServiceActionAssociation";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ServiceCatalogServiceActionAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      ServiceCatalogServiceActionAssociation.Type,
      ServiceCatalogServiceActionAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ServiceCatalog::StackSetConstraint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-stacksetconstraint.html | AWS::ServiceCatalog::StackSetConstraint}
 */
export interface ServiceCatalogStackSetConstraintProps {
  Description: string;
  StackInstanceControl: string;
  AcceptLanguage?: string;
  PortfolioId: string;
  ProductId: string;
  RegionList: any[];
  AdminRole: string;
  AccountList: any[];
  ExecutionRole: string;
}
/**
 * Resource class for AWS::ServiceCatalog::StackSetConstraint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-stacksetconstraint.html | AWS::ServiceCatalog::StackSetConstraint}
 */
export class ServiceCatalogStackSetConstraint extends ResourceBase<
  "AWS::ServiceCatalog::StackSetConstraint",
  ServiceCatalogStackSetConstraintProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::ServiceCatalog::StackSetConstraint";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ServiceCatalogStackSetConstraintProps,
    options?: ResourceOptions,
  ) {
    super(
      ServiceCatalogStackSetConstraint.Type,
      ServiceCatalogStackSetConstraint.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ServiceCatalog::TagOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoption.html | AWS::ServiceCatalog::TagOption}
 */
export interface ServiceCatalogTagOptionProps {
  Active?: boolean;
  Value: string;
  Key: string;
}
/**
 * Resource class for AWS::ServiceCatalog::TagOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoption.html | AWS::ServiceCatalog::TagOption}
 */
export class ServiceCatalogTagOption extends ResourceBase<
  "AWS::ServiceCatalog::TagOption",
  ServiceCatalogTagOptionProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::ServiceCatalog::TagOption";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ServiceCatalogTagOptionProps,
    options?: ResourceOptions,
  ) {
    super(
      ServiceCatalogTagOption.Type,
      ServiceCatalogTagOption.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::ServiceCatalog::TagOptionAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoptionassociation.html | AWS::ServiceCatalog::TagOptionAssociation}
 */
export interface ServiceCatalogTagOptionAssociationProps {
  TagOptionId: string;
  ResourceId: string;
}
/**
 * Resource class for AWS::ServiceCatalog::TagOptionAssociation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoptionassociation.html | AWS::ServiceCatalog::TagOptionAssociation}
 */
export class ServiceCatalogTagOptionAssociation extends ResourceBase<
  "AWS::ServiceCatalog::TagOptionAssociation",
  ServiceCatalogTagOptionAssociationProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::ServiceCatalog::TagOptionAssociation";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ServiceCatalogTagOptionAssociationProps,
    options?: ResourceOptions,
  ) {
    super(
      ServiceCatalogTagOptionAssociation.Type,
      ServiceCatalogTagOptionAssociation.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
