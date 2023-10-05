import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::AmplifyUIBuilder::Component.ActionParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-actionparameters.html | AWS::AmplifyUIBuilder::Component.ActionParameters}
 */
export interface AmplifyUIBuilderComponentActionParameters {
  Type?: AmplifyUIBuilderComponentComponentProperty;
  Anchor?: AmplifyUIBuilderComponentComponentProperty;
  Target?: AmplifyUIBuilderComponentComponentProperty;
  Fields?: Record<string, any>;
  State?: AmplifyUIBuilderComponentMutationActionSetStateParameter;
  Model?: string;
  Id?: AmplifyUIBuilderComponentComponentProperty;
  Url?: AmplifyUIBuilderComponentComponentProperty;
  Global?: AmplifyUIBuilderComponentComponentProperty;
}
/**
 * Type definition for AWS::AmplifyUIBuilder::Component.ComponentBindingPropertiesValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentbindingpropertiesvalue.html | AWS::AmplifyUIBuilder::Component.ComponentBindingPropertiesValue}
 */
export interface AmplifyUIBuilderComponentComponentBindingPropertiesValue {
  DefaultValue?: string;
  Type?: string;
  BindingProperties?: AmplifyUIBuilderComponentComponentBindingPropertiesValueProperties;
}
/**
 * Type definition for AWS::AmplifyUIBuilder::Component.ComponentBindingPropertiesValueProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentbindingpropertiesvalueproperties.html | AWS::AmplifyUIBuilder::Component.ComponentBindingPropertiesValueProperties}
 */
export interface AmplifyUIBuilderComponentComponentBindingPropertiesValueProperties {
  Field?: string;
  DefaultValue?: string;
  Bucket?: string;
  UserAttribute?: string;
  Model?: string;
  Predicates?: any[];
  Key?: string;
}
/**
 * Type definition for AWS::AmplifyUIBuilder::Component.ComponentChild
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentchild.html | AWS::AmplifyUIBuilder::Component.ComponentChild}
 */
export interface AmplifyUIBuilderComponentComponentChild {
  ComponentType: string;
  Events?: Record<string, any>;
  Children?: any[];
  Properties: Record<string, any>;
  Name: string;
}
/**
 * Type definition for AWS::AmplifyUIBuilder::Component.ComponentConditionProperty
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentconditionproperty.html | AWS::AmplifyUIBuilder::Component.ComponentConditionProperty}
 */
export interface AmplifyUIBuilderComponentComponentConditionProperty {
  Operator?: string;
  Field?: string;
  Operand?: string;
  OperandType?: string;
  Else?: AmplifyUIBuilderComponentComponentProperty;
  Then?: AmplifyUIBuilderComponentComponentProperty;
  Property?: string;
}
/**
 * Type definition for AWS::AmplifyUIBuilder::Component.ComponentDataConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentdataconfiguration.html | AWS::AmplifyUIBuilder::Component.ComponentDataConfiguration}
 */
export interface AmplifyUIBuilderComponentComponentDataConfiguration {
  Model: string;
  Sort?: any[];
  Identifiers?: any[];
  Predicate?: AmplifyUIBuilderComponentPredicate;
}
/**
 * Type definition for AWS::AmplifyUIBuilder::Component.ComponentEvent
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentevent.html | AWS::AmplifyUIBuilder::Component.ComponentEvent}
 */
export interface AmplifyUIBuilderComponentComponentEvent {
  Action?: string;
  Parameters?: AmplifyUIBuilderComponentActionParameters;
}
/**
 * Type definition for AWS::AmplifyUIBuilder::Component.ComponentProperty
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentproperty.html | AWS::AmplifyUIBuilder::Component.ComponentProperty}
 */
export interface AmplifyUIBuilderComponentComponentProperty {
  Condition?: AmplifyUIBuilderComponentComponentConditionProperty;
  UserAttribute?: string;
  ImportedValue?: string;
  BindingProperties?: AmplifyUIBuilderComponentComponentPropertyBindingProperties;
  Bindings?: Record<string, any>;
  Configured?: boolean;
  Concat?: any[];
  DefaultValue?: string;
  Type?: string;
  Value?: string;
  Model?: string;
  CollectionBindingProperties?: AmplifyUIBuilderComponentComponentPropertyBindingProperties;
  Event?: string;
  ComponentName?: string;
  Property?: string;
}
/**
 * Type definition for AWS::AmplifyUIBuilder::Component.ComponentPropertyBindingProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentpropertybindingproperties.html | AWS::AmplifyUIBuilder::Component.ComponentPropertyBindingProperties}
 */
export interface AmplifyUIBuilderComponentComponentPropertyBindingProperties {
  Field?: string;
  Property: string;
}
/**
 * Type definition for AWS::AmplifyUIBuilder::Component.ComponentVariant
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentvariant.html | AWS::AmplifyUIBuilder::Component.ComponentVariant}
 */
export interface AmplifyUIBuilderComponentComponentVariant {
  VariantValues?: Record<string, any>;
  Overrides?: object;
}
/**
 * Type definition for AWS::AmplifyUIBuilder::Component.FormBindingElement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-formbindingelement.html | AWS::AmplifyUIBuilder::Component.FormBindingElement}
 */
export interface AmplifyUIBuilderComponentFormBindingElement {
  Element: string;
  Property: string;
}
/**
 * Type definition for AWS::AmplifyUIBuilder::Component.MutationActionSetStateParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-mutationactionsetstateparameter.html | AWS::AmplifyUIBuilder::Component.MutationActionSetStateParameter}
 */
export interface AmplifyUIBuilderComponentMutationActionSetStateParameter {
  Set: AmplifyUIBuilderComponentComponentProperty;
  ComponentName: string;
  Property: string;
}
/**
 * Type definition for AWS::AmplifyUIBuilder::Component.Predicate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-predicate.html | AWS::AmplifyUIBuilder::Component.Predicate}
 */
export interface AmplifyUIBuilderComponentPredicate {
  Operator?: string;
  Field?: string;
  Or?: any[];
  And?: any[];
  Operand?: string;
}
/**
 * Type definition for AWS::AmplifyUIBuilder::Component.SortProperty
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-sortproperty.html | AWS::AmplifyUIBuilder::Component.SortProperty}
 */
export interface AmplifyUIBuilderComponentSortProperty {
  Field: string;
  Direction: string;
}
/**
 * Type definition for AWS::AmplifyUIBuilder::Form.FieldConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldconfig.html | AWS::AmplifyUIBuilder::Form.FieldConfig}
 */
export interface AmplifyUIBuilderFormFieldConfig {
  Validations?: any[];
  InputType?: AmplifyUIBuilderFormFieldInputConfig;
  Position?: AmplifyUIBuilderFormFieldPosition;
  Label?: string;
  Excluded?: boolean;
}
/**
 * Type definition for AWS::AmplifyUIBuilder::Form.FieldInputConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldinputconfig.html | AWS::AmplifyUIBuilder::Form.FieldInputConfig}
 */
export interface AmplifyUIBuilderFormFieldInputConfig {
  ReadOnly?: boolean;
  Placeholder?: string;
  FileUploaderConfig?: AmplifyUIBuilderFormFileUploaderFieldConfig;
  IsArray?: boolean;
  ValueMappings?: AmplifyUIBuilderFormValueMappings;
  DefaultCountryCode?: string;
  MaxValue?: number;
  Step?: number;
  Name?: string;
  DefaultValue?: string;
  DescriptiveText?: string;
  Type: string;
  Required?: boolean;
  MinValue?: number;
  Value?: string;
  DefaultChecked?: boolean;
}
/**
 * Type definition for AWS::AmplifyUIBuilder::Form.FieldPosition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldposition.html | AWS::AmplifyUIBuilder::Form.FieldPosition}
 */
export interface AmplifyUIBuilderFormFieldPosition {
  Below?: string;
  RightOf?: string;
  Fixed?: string;
}
/**
 * Type definition for AWS::AmplifyUIBuilder::Form.FieldValidationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldvalidationconfiguration.html | AWS::AmplifyUIBuilder::Form.FieldValidationConfiguration}
 */
export interface AmplifyUIBuilderFormFieldValidationConfiguration {
  Type: string;
  ValidationMessage?: string;
  StrValues?: any[];
  NumValues?: any[];
}
/**
 * Type definition for AWS::AmplifyUIBuilder::Form.FileUploaderFieldConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fileuploaderfieldconfig.html | AWS::AmplifyUIBuilder::Form.FileUploaderFieldConfig}
 */
export interface AmplifyUIBuilderFormFileUploaderFieldConfig {
  IsResumable?: boolean;
  ShowThumbnails?: boolean;
  AcceptedFileTypes: any[];
  MaxFileCount?: number;
  MaxSize?: number;
  AccessLevel: string;
}
/**
 * Type definition for AWS::AmplifyUIBuilder::Form.FormButton
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-formbutton.html | AWS::AmplifyUIBuilder::Form.FormButton}
 */
export interface AmplifyUIBuilderFormFormButton {
  Position?: AmplifyUIBuilderFormFieldPosition;
  Children?: string;
  Excluded?: boolean;
}
/**
 * Type definition for AWS::AmplifyUIBuilder::Form.FormCTA
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-formcta.html | AWS::AmplifyUIBuilder::Form.FormCTA}
 */
export interface AmplifyUIBuilderFormFormCTA {
  Position?: string;
  Cancel?: AmplifyUIBuilderFormFormButton;
  Submit?: AmplifyUIBuilderFormFormButton;
  Clear?: AmplifyUIBuilderFormFormButton;
}
/**
 * Type definition for AWS::AmplifyUIBuilder::Form.FormDataTypeConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-formdatatypeconfig.html | AWS::AmplifyUIBuilder::Form.FormDataTypeConfig}
 */
export interface AmplifyUIBuilderFormFormDataTypeConfig {
  DataSourceType: string;
  DataTypeName: string;
}
/**
 * Type definition for AWS::AmplifyUIBuilder::Form.FormInputValueProperty
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-forminputvalueproperty.html | AWS::AmplifyUIBuilder::Form.FormInputValueProperty}
 */
export interface AmplifyUIBuilderFormFormInputValueProperty {
  Value?: string;
}
/**
 * Type definition for AWS::AmplifyUIBuilder::Form.FormStyle
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-formstyle.html | AWS::AmplifyUIBuilder::Form.FormStyle}
 */
export interface AmplifyUIBuilderFormFormStyle {
  VerticalGap?: AmplifyUIBuilderFormFormStyleConfig;
  OuterPadding?: AmplifyUIBuilderFormFormStyleConfig;
  HorizontalGap?: AmplifyUIBuilderFormFormStyleConfig;
}
/**
 * Type definition for AWS::AmplifyUIBuilder::Form.FormStyleConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-formstyleconfig.html | AWS::AmplifyUIBuilder::Form.FormStyleConfig}
 */
export interface AmplifyUIBuilderFormFormStyleConfig {
  Value?: string;
  TokenReference?: string;
}
/**
 * Type definition for AWS::AmplifyUIBuilder::Form.SectionalElement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-sectionalelement.html | AWS::AmplifyUIBuilder::Form.SectionalElement}
 */
export interface AmplifyUIBuilderFormSectionalElement {
  Type: string;
  Position?: AmplifyUIBuilderFormFieldPosition;
  Text?: string;
  Level?: number;
  Orientation?: string;
  Excluded?: boolean;
}
/**
 * Type definition for AWS::AmplifyUIBuilder::Form.ValueMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-valuemapping.html | AWS::AmplifyUIBuilder::Form.ValueMapping}
 */
export interface AmplifyUIBuilderFormValueMapping {
  DisplayValue?: AmplifyUIBuilderFormFormInputValueProperty;
  Value: AmplifyUIBuilderFormFormInputValueProperty;
}
/**
 * Type definition for AWS::AmplifyUIBuilder::Form.ValueMappings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-valuemappings.html | AWS::AmplifyUIBuilder::Form.ValueMappings}
 */
export interface AmplifyUIBuilderFormValueMappings {
  Values: any[];
}
/**
 * Type definition for AWS::AmplifyUIBuilder::Theme.ThemeValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-theme-themevalue.html | AWS::AmplifyUIBuilder::Theme.ThemeValue}
 */
export interface AmplifyUIBuilderThemeThemeValue {
  Value?: string;
  Children?: any[];
}
/**
 * Type definition for AWS::AmplifyUIBuilder::Theme.ThemeValues
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-theme-themevalues.html | AWS::AmplifyUIBuilder::Theme.ThemeValues}
 */
export interface AmplifyUIBuilderThemeThemeValues {
  Value?: AmplifyUIBuilderThemeThemeValue;
  Key?: string;
}
/**
 * Type definition for AWS::AmplifyUIBuilder::Component
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-component.html | AWS::AmplifyUIBuilder::Component}
 */
export interface AmplifyUIBuilderComponentProps {
  ComponentType: string;
  SchemaVersion?: string;
  EnvironmentName?: string;
  BindingProperties: Record<string, any>;
  SourceId?: string;
  Properties: Record<string, any>;
  CollectionProperties?: Record<string, any>;
  Name: string;
  Variants: any[];
  AppId?: string;
  Events?: Record<string, any>;
  Overrides: object;
  Children?: any[];
  Tags?: Record<string, Tag>;
}
/**
 * Attributes type definition for AWS::AmplifyUIBuilder::Component
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-component.html | AWS::AmplifyUIBuilder::Component}
 */
export interface AmplifyUIBuilderComponentAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::AmplifyUIBuilder::Component
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-component.html | AWS::AmplifyUIBuilder::Component}
 */
export class AmplifyUIBuilderComponent extends ResourceBase<
  "AWS::AmplifyUIBuilder::Component",
  AmplifyUIBuilderComponentProps,
  AmplifyUIBuilderComponentAttribs
> {
  public static readonly Type = "AWS::AmplifyUIBuilder::Component";
  public static readonly AttributeNames: readonly (keyof AmplifyUIBuilderComponentAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: AmplifyUIBuilderComponentProps,
    options?: ResourceOptions,
  ) {
    super(
      AmplifyUIBuilderComponent.Type,
      AmplifyUIBuilderComponent.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AmplifyUIBuilder::Form
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-form.html | AWS::AmplifyUIBuilder::Form}
 */
export interface AmplifyUIBuilderFormProps {
  FormActionType: string;
  Cta?: AmplifyUIBuilderFormFormCTA;
  Fields: Record<string, any>;
  SchemaVersion: string;
  AppId?: string;
  EnvironmentName?: string;
  LabelDecorator?: string;
  SectionalElements: Record<string, any>;
  DataType: AmplifyUIBuilderFormFormDataTypeConfig;
  Style: AmplifyUIBuilderFormFormStyle;
  Tags?: Record<string, Tag>;
  Name: string;
}
/**
 * Attributes type definition for AWS::AmplifyUIBuilder::Form
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-form.html | AWS::AmplifyUIBuilder::Form}
 */
export interface AmplifyUIBuilderFormAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::AmplifyUIBuilder::Form
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-form.html | AWS::AmplifyUIBuilder::Form}
 */
export class AmplifyUIBuilderForm extends ResourceBase<
  "AWS::AmplifyUIBuilder::Form",
  AmplifyUIBuilderFormProps,
  AmplifyUIBuilderFormAttribs
> {
  public static readonly Type = "AWS::AmplifyUIBuilder::Form";
  public static readonly AttributeNames: readonly (keyof AmplifyUIBuilderFormAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: AmplifyUIBuilderFormProps,
    options?: ResourceOptions,
  ) {
    super(
      AmplifyUIBuilderForm.Type,
      AmplifyUIBuilderForm.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AmplifyUIBuilder::Theme
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-theme.html | AWS::AmplifyUIBuilder::Theme}
 */
export interface AmplifyUIBuilderThemeProps {
  AppId?: string;
  EnvironmentName?: string;
  Values: any[];
  Overrides?: any[];
  Tags?: Record<string, Tag>;
  Name: string;
}
/**
 * Attributes type definition for AWS::AmplifyUIBuilder::Theme
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-theme.html | AWS::AmplifyUIBuilder::Theme}
 */
export interface AmplifyUIBuilderThemeAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::AmplifyUIBuilder::Theme
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-theme.html | AWS::AmplifyUIBuilder::Theme}
 */
export class AmplifyUIBuilderTheme extends ResourceBase<
  "AWS::AmplifyUIBuilder::Theme",
  AmplifyUIBuilderThemeProps,
  AmplifyUIBuilderThemeAttribs
> {
  public static readonly Type = "AWS::AmplifyUIBuilder::Theme";
  public static readonly AttributeNames: readonly (keyof AmplifyUIBuilderThemeAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: AmplifyUIBuilderThemeProps,
    options?: ResourceOptions,
  ) {
    super(
      AmplifyUIBuilderTheme.Type,
      AmplifyUIBuilderTheme.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
