import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::FIS::ExperimentTemplate.CloudWatchLogsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-cloudwatchlogsconfiguration.html | AWS::FIS::ExperimentTemplate.CloudWatchLogsConfiguration}
 */
export interface FISExperimentTemplateCloudWatchLogsConfiguration {
  LogGroupArn: string;
}
/**
 * Type definition for AWS::FIS::ExperimentTemplate.ExperimentTemplateAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplateaction.html | AWS::FIS::ExperimentTemplate.ExperimentTemplateAction}
 */
export interface FISExperimentTemplateExperimentTemplateAction {
  ActionId: string;
  Description?: string;
  Parameters?: Record<string, any>;
  Targets?: Record<string, any>;
  StartAfter?: any[];
}
/**
 * Type definition for AWS::FIS::ExperimentTemplate.ExperimentTemplateLogConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatelogconfiguration.html | AWS::FIS::ExperimentTemplate.ExperimentTemplateLogConfiguration}
 */
export interface FISExperimentTemplateExperimentTemplateLogConfiguration {
  S3Configuration?: FISExperimentTemplateS3Configuration;
  LogSchemaVersion: number;
  CloudWatchLogsConfiguration?: FISExperimentTemplateCloudWatchLogsConfiguration;
}
/**
 * Type definition for AWS::FIS::ExperimentTemplate.ExperimentTemplateStopCondition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatestopcondition.html | AWS::FIS::ExperimentTemplate.ExperimentTemplateStopCondition}
 */
export interface FISExperimentTemplateExperimentTemplateStopCondition {
  Value?: string;
  Source: string;
}
/**
 * Type definition for AWS::FIS::ExperimentTemplate.ExperimentTemplateTarget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatetarget.html | AWS::FIS::ExperimentTemplate.ExperimentTemplateTarget}
 */
export interface FISExperimentTemplateExperimentTemplateTarget {
  Filters?: any[];
  Parameters?: Record<string, any>;
  ResourceTags?: Record<string, any>;
  ResourceType: string;
  ResourceArns?: any[];
  SelectionMode: string;
}
/**
 * Type definition for AWS::FIS::ExperimentTemplate.ExperimentTemplateTargetFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatetargetfilter.html | AWS::FIS::ExperimentTemplate.ExperimentTemplateTargetFilter}
 */
export interface FISExperimentTemplateExperimentTemplateTargetFilter {
  Path: string;
  Values: any[];
}
/**
 * Type definition for AWS::FIS::ExperimentTemplate.S3Configuration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-s3configuration.html | AWS::FIS::ExperimentTemplate.S3Configuration}
 */
export interface FISExperimentTemplateS3Configuration {
  BucketName: string;
  Prefix?: string;
}
/**
 * Type definition for AWS::FIS::ExperimentTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html | AWS::FIS::ExperimentTemplate}
 */
export interface FISExperimentTemplateProps {
  Description: string;
  Actions?: Record<string, any>;
  StopConditions: any[];
  Targets: Record<string, any>;
  LogConfiguration?: FISExperimentTemplateExperimentTemplateLogConfiguration;
  RoleArn: string;
  Tags: Record<string, Tag>;
}
/**
 * Attributes type definition for AWS::FIS::ExperimentTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html | AWS::FIS::ExperimentTemplate}
 */
export interface FISExperimentTemplateAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::FIS::ExperimentTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html | AWS::FIS::ExperimentTemplate}
 */
export class FISExperimentTemplate extends ResourceBase<
  "AWS::FIS::ExperimentTemplate",
  FISExperimentTemplateProps,
  FISExperimentTemplateAttribs
> {
  public static readonly Type = "AWS::FIS::ExperimentTemplate";
  public static readonly AttributeNames: readonly (keyof FISExperimentTemplateAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: FISExperimentTemplateProps,
    options?: ResourceOptions,
  ) {
    super(
      FISExperimentTemplate.Type,
      FISExperimentTemplate.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
