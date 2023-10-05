import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::AppIntegrations::DataIntegration.FileConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appintegrations-dataintegration-fileconfiguration.html | AWS::AppIntegrations::DataIntegration.FileConfiguration}
 */
export interface AppIntegrationsDataIntegrationFileConfiguration {
  Filters?: object;
  Folders: any[];
}
/**
 * Type definition for AWS::AppIntegrations::DataIntegration.ScheduleConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appintegrations-dataintegration-scheduleconfig.html | AWS::AppIntegrations::DataIntegration.ScheduleConfig}
 */
export interface AppIntegrationsDataIntegrationScheduleConfig {
  FirstExecutionFrom?: string;
  ScheduleExpression: string;
  Object?: string;
}
/**
 * Type definition for AWS::AppIntegrations::EventIntegration.EventFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appintegrations-eventintegration-eventfilter.html | AWS::AppIntegrations::EventIntegration.EventFilter}
 */
export interface AppIntegrationsEventIntegrationEventFilter {
  Source: string;
}
/**
 * Type definition for AWS::AppIntegrations::DataIntegration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-dataintegration.html | AWS::AppIntegrations::DataIntegration}
 */
export interface AppIntegrationsDataIntegrationProps {
  ScheduleConfig: AppIntegrationsDataIntegrationScheduleConfig;
  FileConfiguration?: AppIntegrationsDataIntegrationFileConfiguration;
  Description?: string;
  SourceURI: string;
  ObjectConfiguration?: object;
  KmsKey: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::AppIntegrations::DataIntegration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-dataintegration.html | AWS::AppIntegrations::DataIntegration}
 */
export interface AppIntegrationsDataIntegrationAttribs {
  DataIntegrationArn?: string;
  Id?: string;
}
/**
 * Resource class for AWS::AppIntegrations::DataIntegration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-dataintegration.html | AWS::AppIntegrations::DataIntegration}
 */
export class AppIntegrationsDataIntegration extends ResourceBase<
  "AWS::AppIntegrations::DataIntegration",
  AppIntegrationsDataIntegrationProps,
  AppIntegrationsDataIntegrationAttribs
> {
  public static readonly Type = "AWS::AppIntegrations::DataIntegration";
  public static readonly AttributeNames: readonly (keyof AppIntegrationsDataIntegrationAttribs)[] =
    ["DataIntegrationArn", "Id"];
  constructor(
    logicalId: string,
    properties: AppIntegrationsDataIntegrationProps,
    options?: ResourceOptions,
  ) {
    super(
      AppIntegrationsDataIntegration.Type,
      AppIntegrationsDataIntegration.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppIntegrations::EventIntegration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-eventintegration.html | AWS::AppIntegrations::EventIntegration}
 */
export interface AppIntegrationsEventIntegrationProps {
  Description?: string;
  EventBridgeBus: string;
  EventFilter: AppIntegrationsEventIntegrationEventFilter;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::AppIntegrations::EventIntegration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-eventintegration.html | AWS::AppIntegrations::EventIntegration}
 */
export interface AppIntegrationsEventIntegrationAttribs {
  EventIntegrationArn?: string;
}
/**
 * Resource class for AWS::AppIntegrations::EventIntegration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-eventintegration.html | AWS::AppIntegrations::EventIntegration}
 */
export class AppIntegrationsEventIntegration extends ResourceBase<
  "AWS::AppIntegrations::EventIntegration",
  AppIntegrationsEventIntegrationProps,
  AppIntegrationsEventIntegrationAttribs
> {
  public static readonly Type = "AWS::AppIntegrations::EventIntegration";
  public static readonly AttributeNames: readonly (keyof AppIntegrationsEventIntegrationAttribs)[] =
    ["EventIntegrationArn"];
  constructor(
    logicalId: string,
    properties: AppIntegrationsEventIntegrationProps,
    options?: ResourceOptions,
  ) {
    super(
      AppIntegrationsEventIntegration.Type,
      AppIntegrationsEventIntegration.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
