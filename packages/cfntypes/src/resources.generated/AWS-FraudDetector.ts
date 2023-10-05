import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::FraudDetector::Detector.EntityType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-frauddetector-detector-entitytype.html | AWS::FraudDetector::Detector.EntityType}
 */
export interface FraudDetectorDetectorEntityType {
  Description?: string;
  CreatedTime?: string;
  LastUpdatedTime?: string;
  Inline?: boolean;
  Arn?: string;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Type definition for AWS::FraudDetector::Detector.EventType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-frauddetector-detector-eventtype.html | AWS::FraudDetector::Detector.EventType}
 */
export interface FraudDetectorDetectorEventType {
  EntityTypes?: any[];
  Description?: string;
  CreatedTime?: string;
  LastUpdatedTime?: string;
  Labels?: any[];
  Inline?: boolean;
  EventVariables?: any[];
  Arn?: string;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Type definition for AWS::FraudDetector::Detector.EventVariable
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-frauddetector-detector-eventvariable.html | AWS::FraudDetector::Detector.EventVariable}
 */
export interface FraudDetectorDetectorEventVariable {
  DefaultValue?: string;
  Description?: string;
  CreatedTime?: string;
  VariableType?: string;
  DataType?: string;
  LastUpdatedTime?: string;
  Inline?: boolean;
  Arn?: string;
  Tags?: Tag[];
  Name?: string;
  DataSource?: string;
}
/**
 * Type definition for AWS::FraudDetector::Detector.Label
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-frauddetector-detector-label.html | AWS::FraudDetector::Detector.Label}
 */
export interface FraudDetectorDetectorLabel {
  Description?: string;
  CreatedTime?: string;
  LastUpdatedTime?: string;
  Inline?: boolean;
  Arn?: string;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Type definition for AWS::FraudDetector::Detector.Model
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-frauddetector-detector-model.html | AWS::FraudDetector::Detector.Model}
 */
export interface FraudDetectorDetectorModel {
  Arn?: string;
}
/**
 * Type definition for AWS::FraudDetector::Detector.Outcome
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-frauddetector-detector-outcome.html | AWS::FraudDetector::Detector.Outcome}
 */
export interface FraudDetectorDetectorOutcome {
  Description?: string;
  CreatedTime?: string;
  LastUpdatedTime?: string;
  Inline?: boolean;
  Arn?: string;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Type definition for AWS::FraudDetector::Detector.Rule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-frauddetector-detector-rule.html | AWS::FraudDetector::Detector.Rule}
 */
export interface FraudDetectorDetectorRule {
  Description?: string;
  CreatedTime?: string;
  Language?: string;
  Expression?: string;
  RuleId?: string;
  DetectorId?: string;
  RuleVersion?: string;
  LastUpdatedTime?: string;
  Arn?: string;
  Outcomes?: any[];
  Tags?: Tag[];
}
/**
 * Type definition for AWS::FraudDetector::EventType.EntityType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-frauddetector-eventtype-entitytype.html | AWS::FraudDetector::EventType.EntityType}
 */
export interface FraudDetectorEventTypeEntityType {
  Description?: string;
  CreatedTime?: string;
  LastUpdatedTime?: string;
  Inline?: boolean;
  Arn?: string;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Type definition for AWS::FraudDetector::EventType.EventVariable
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-frauddetector-eventtype-eventvariable.html | AWS::FraudDetector::EventType.EventVariable}
 */
export interface FraudDetectorEventTypeEventVariable {
  DefaultValue?: string;
  Description?: string;
  CreatedTime?: string;
  VariableType?: string;
  DataType?: string;
  LastUpdatedTime?: string;
  Inline?: boolean;
  Arn?: string;
  Tags?: Tag[];
  Name?: string;
  DataSource?: string;
}
/**
 * Type definition for AWS::FraudDetector::EventType.Label
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-frauddetector-eventtype-label.html | AWS::FraudDetector::EventType.Label}
 */
export interface FraudDetectorEventTypeLabel {
  Description?: string;
  CreatedTime?: string;
  LastUpdatedTime?: string;
  Inline?: boolean;
  Arn?: string;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Type definition for AWS::FraudDetector::Detector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html | AWS::FraudDetector::Detector}
 */
export interface FraudDetectorDetectorProps {
  Description?: string;
  DetectorVersionStatus?: string;
  EventType: FraudDetectorDetectorEventType;
  DetectorId: string;
  AssociatedModels?: any[];
  RuleExecutionMode?: string;
  Rules: any[];
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::FraudDetector::Detector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html | AWS::FraudDetector::Detector}
 */
export interface FraudDetectorDetectorAttribs {
  CreatedTime?: string;
  "EventType.Arn"?: string;
  "EventType.LastUpdatedTime"?: string;
  LastUpdatedTime?: string;
  "EventType.CreatedTime"?: string;
  Arn?: string;
  DetectorVersionId?: string;
}
/**
 * Resource class for AWS::FraudDetector::Detector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html | AWS::FraudDetector::Detector}
 */
export class FraudDetectorDetector extends ResourceBase<
  "AWS::FraudDetector::Detector",
  FraudDetectorDetectorProps,
  FraudDetectorDetectorAttribs
> {
  public static readonly Type = "AWS::FraudDetector::Detector";
  public static readonly AttributeNames: readonly (keyof FraudDetectorDetectorAttribs)[] =
    [
      "CreatedTime",
      "EventType.Arn",
      "EventType.LastUpdatedTime",
      "LastUpdatedTime",
      "EventType.CreatedTime",
      "Arn",
      "DetectorVersionId",
    ];
  constructor(
    logicalId: string,
    properties: FraudDetectorDetectorProps,
    options?: ResourceOptions,
  ) {
    super(
      FraudDetectorDetector.Type,
      FraudDetectorDetector.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::FraudDetector::EntityType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-entitytype.html | AWS::FraudDetector::EntityType}
 */
export interface FraudDetectorEntityTypeProps {
  Description?: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::FraudDetector::EntityType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-entitytype.html | AWS::FraudDetector::EntityType}
 */
export interface FraudDetectorEntityTypeAttribs {
  CreatedTime?: string;
  LastUpdatedTime?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::FraudDetector::EntityType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-entitytype.html | AWS::FraudDetector::EntityType}
 */
export class FraudDetectorEntityType extends ResourceBase<
  "AWS::FraudDetector::EntityType",
  FraudDetectorEntityTypeProps,
  FraudDetectorEntityTypeAttribs
> {
  public static readonly Type = "AWS::FraudDetector::EntityType";
  public static readonly AttributeNames: readonly (keyof FraudDetectorEntityTypeAttribs)[] =
    ["CreatedTime", "LastUpdatedTime", "Arn"];
  constructor(
    logicalId: string,
    properties: FraudDetectorEntityTypeProps,
    options?: ResourceOptions,
  ) {
    super(
      FraudDetectorEntityType.Type,
      FraudDetectorEntityType.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::FraudDetector::EventType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-eventtype.html | AWS::FraudDetector::EventType}
 */
export interface FraudDetectorEventTypeProps {
  EntityTypes: any[];
  Description?: string;
  Labels: any[];
  EventVariables: any[];
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::FraudDetector::EventType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-eventtype.html | AWS::FraudDetector::EventType}
 */
export interface FraudDetectorEventTypeAttribs {
  CreatedTime?: string;
  LastUpdatedTime?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::FraudDetector::EventType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-eventtype.html | AWS::FraudDetector::EventType}
 */
export class FraudDetectorEventType extends ResourceBase<
  "AWS::FraudDetector::EventType",
  FraudDetectorEventTypeProps,
  FraudDetectorEventTypeAttribs
> {
  public static readonly Type = "AWS::FraudDetector::EventType";
  public static readonly AttributeNames: readonly (keyof FraudDetectorEventTypeAttribs)[] =
    ["CreatedTime", "LastUpdatedTime", "Arn"];
  constructor(
    logicalId: string,
    properties: FraudDetectorEventTypeProps,
    options?: ResourceOptions,
  ) {
    super(
      FraudDetectorEventType.Type,
      FraudDetectorEventType.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::FraudDetector::Label
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-label.html | AWS::FraudDetector::Label}
 */
export interface FraudDetectorLabelProps {
  Description?: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::FraudDetector::Label
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-label.html | AWS::FraudDetector::Label}
 */
export interface FraudDetectorLabelAttribs {
  CreatedTime?: string;
  LastUpdatedTime?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::FraudDetector::Label
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-label.html | AWS::FraudDetector::Label}
 */
export class FraudDetectorLabel extends ResourceBase<
  "AWS::FraudDetector::Label",
  FraudDetectorLabelProps,
  FraudDetectorLabelAttribs
> {
  public static readonly Type = "AWS::FraudDetector::Label";
  public static readonly AttributeNames: readonly (keyof FraudDetectorLabelAttribs)[] =
    ["CreatedTime", "LastUpdatedTime", "Arn"];
  constructor(
    logicalId: string,
    properties: FraudDetectorLabelProps,
    options?: ResourceOptions,
  ) {
    super(
      FraudDetectorLabel.Type,
      FraudDetectorLabel.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::FraudDetector::List
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-list.html | AWS::FraudDetector::List}
 */
export interface FraudDetectorListProps {
  Description?: string;
  VariableType?: string;
  Elements?: any[];
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::FraudDetector::List
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-list.html | AWS::FraudDetector::List}
 */
export interface FraudDetectorListAttribs {
  CreatedTime?: string;
  LastUpdatedTime?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::FraudDetector::List
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-list.html | AWS::FraudDetector::List}
 */
export class FraudDetectorList extends ResourceBase<
  "AWS::FraudDetector::List",
  FraudDetectorListProps,
  FraudDetectorListAttribs
> {
  public static readonly Type = "AWS::FraudDetector::List";
  public static readonly AttributeNames: readonly (keyof FraudDetectorListAttribs)[] =
    ["CreatedTime", "LastUpdatedTime", "Arn"];
  constructor(
    logicalId: string,
    properties: FraudDetectorListProps,
    options?: ResourceOptions,
  ) {
    super(
      FraudDetectorList.Type,
      FraudDetectorList.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::FraudDetector::Outcome
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-outcome.html | AWS::FraudDetector::Outcome}
 */
export interface FraudDetectorOutcomeProps {
  Description?: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::FraudDetector::Outcome
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-outcome.html | AWS::FraudDetector::Outcome}
 */
export interface FraudDetectorOutcomeAttribs {
  CreatedTime?: string;
  LastUpdatedTime?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::FraudDetector::Outcome
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-outcome.html | AWS::FraudDetector::Outcome}
 */
export class FraudDetectorOutcome extends ResourceBase<
  "AWS::FraudDetector::Outcome",
  FraudDetectorOutcomeProps,
  FraudDetectorOutcomeAttribs
> {
  public static readonly Type = "AWS::FraudDetector::Outcome";
  public static readonly AttributeNames: readonly (keyof FraudDetectorOutcomeAttribs)[] =
    ["CreatedTime", "LastUpdatedTime", "Arn"];
  constructor(
    logicalId: string,
    properties: FraudDetectorOutcomeProps,
    options?: ResourceOptions,
  ) {
    super(
      FraudDetectorOutcome.Type,
      FraudDetectorOutcome.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::FraudDetector::Variable
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-variable.html | AWS::FraudDetector::Variable}
 */
export interface FraudDetectorVariableProps {
  DefaultValue: string;
  Description?: string;
  VariableType?: string;
  DataType: string;
  Tags?: Tag[];
  Name: string;
  DataSource: string;
}
/**
 * Attributes type definition for AWS::FraudDetector::Variable
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-variable.html | AWS::FraudDetector::Variable}
 */
export interface FraudDetectorVariableAttribs {
  CreatedTime?: string;
  LastUpdatedTime?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::FraudDetector::Variable
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-variable.html | AWS::FraudDetector::Variable}
 */
export class FraudDetectorVariable extends ResourceBase<
  "AWS::FraudDetector::Variable",
  FraudDetectorVariableProps,
  FraudDetectorVariableAttribs
> {
  public static readonly Type = "AWS::FraudDetector::Variable";
  public static readonly AttributeNames: readonly (keyof FraudDetectorVariableAttribs)[] =
    ["CreatedTime", "LastUpdatedTime", "Arn"];
  constructor(
    logicalId: string,
    properties: FraudDetectorVariableProps,
    options?: ResourceOptions,
  ) {
    super(
      FraudDetectorVariable.Type,
      FraudDetectorVariable.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
