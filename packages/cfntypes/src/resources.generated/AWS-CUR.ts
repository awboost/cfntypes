import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::CUR::ReportDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html | AWS::CUR::ReportDefinition}
 */
export interface CURReportDefinitionProps {
  AdditionalArtifacts?: any[];
  ReportName: string;
  Compression: string;
  Format: string;
  RefreshClosedReports: boolean;
  S3Bucket: string;
  ReportVersioning: string;
  S3Region: string;
  TimeUnit: string;
  BillingViewArn?: string;
  S3Prefix: string;
  AdditionalSchemaElements?: any[];
}
/**
 * Resource class for AWS::CUR::ReportDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html | AWS::CUR::ReportDefinition}
 */
export class CURReportDefinition extends ResourceBase<
  "AWS::CUR::ReportDefinition",
  CURReportDefinitionProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::CUR::ReportDefinition";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: CURReportDefinitionProps,
    options?: ResourceOptions,
  ) {
    super(
      CURReportDefinition.Type,
      CURReportDefinition.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
