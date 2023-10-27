import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::QuickSight::Analysis.AggregationFunction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-aggregationfunction.html | AWS::QuickSight::Analysis.AggregationFunction}
 */
export interface QuickSightAnalysisAggregationFunction {
  AttributeAggregationFunction?: QuickSightAnalysisAttributeAggregationFunction;
  DateAggregationFunction?: string;
  NumericalAggregationFunction?: QuickSightAnalysisNumericalAggregationFunction;
  CategoricalAggregationFunction?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.AggregationSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-aggregationsortconfiguration.html | AWS::QuickSight::Analysis.AggregationSortConfiguration}
 */
export interface QuickSightAnalysisAggregationSortConfiguration {
  AggregationFunction?: QuickSightAnalysisAggregationFunction;
  SortDirection: string;
  Column: QuickSightAnalysisColumnIdentifier;
}
/**
 * Type definition for AWS::QuickSight::Analysis.AnalysisDefaults
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-analysisdefaults.html | AWS::QuickSight::Analysis.AnalysisDefaults}
 */
export interface QuickSightAnalysisAnalysisDefaults {
  DefaultNewSheetConfiguration: QuickSightAnalysisDefaultNewSheetConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.AnalysisDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-analysisdefinition.html | AWS::QuickSight::Analysis.AnalysisDefinition}
 */
export interface QuickSightAnalysisAnalysisDefinition {
  FilterGroups?: any[];
  CalculatedFields?: any[];
  DataSetIdentifierDeclarations: any[];
  ColumnConfigurations?: any[];
  AnalysisDefaults?: QuickSightAnalysisAnalysisDefaults;
  Sheets?: any[];
  ParameterDeclarations?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.AnalysisError
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-analysiserror.html | AWS::QuickSight::Analysis.AnalysisError}
 */
export interface QuickSightAnalysisAnalysisError {
  Type?: string;
  Message?: string;
  ViolatedEntities?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.AnalysisSourceEntity
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-analysissourceentity.html | AWS::QuickSight::Analysis.AnalysisSourceEntity}
 */
export interface QuickSightAnalysisAnalysisSourceEntity {
  SourceTemplate?: QuickSightAnalysisAnalysisSourceTemplate;
}
/**
 * Type definition for AWS::QuickSight::Analysis.AnalysisSourceTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-analysissourcetemplate.html | AWS::QuickSight::Analysis.AnalysisSourceTemplate}
 */
export interface QuickSightAnalysisAnalysisSourceTemplate {
  DataSetReferences: any[];
  Arn: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.AnchorDateConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-anchordateconfiguration.html | AWS::QuickSight::Analysis.AnchorDateConfiguration}
 */
export interface QuickSightAnalysisAnchorDateConfiguration {
  AnchorOption?: string;
  ParameterName?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ArcAxisConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-arcaxisconfiguration.html | AWS::QuickSight::Analysis.ArcAxisConfiguration}
 */
export interface QuickSightAnalysisArcAxisConfiguration {
  Range?: QuickSightAnalysisArcAxisDisplayRange;
  ReserveRange?: number;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ArcAxisDisplayRange
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-arcaxisdisplayrange.html | AWS::QuickSight::Analysis.ArcAxisDisplayRange}
 */
export interface QuickSightAnalysisArcAxisDisplayRange {
  Min?: number;
  Max?: number;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ArcConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-arcconfiguration.html | AWS::QuickSight::Analysis.ArcConfiguration}
 */
export interface QuickSightAnalysisArcConfiguration {
  ArcAngle?: number;
  ArcThickness?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ArcOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-arcoptions.html | AWS::QuickSight::Analysis.ArcOptions}
 */
export interface QuickSightAnalysisArcOptions {
  ArcThickness?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.AttributeAggregationFunction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-attributeaggregationfunction.html | AWS::QuickSight::Analysis.AttributeAggregationFunction}
 */
export interface QuickSightAnalysisAttributeAggregationFunction {
  SimpleAttributeAggregation?: string;
  ValueForMultipleValues?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.AxisDataOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-axisdataoptions.html | AWS::QuickSight::Analysis.AxisDataOptions}
 */
export interface QuickSightAnalysisAxisDataOptions {
  DateAxisOptions?: QuickSightAnalysisDateAxisOptions;
  NumericAxisOptions?: QuickSightAnalysisNumericAxisOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.AxisDisplayMinMaxRange
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-axisdisplayminmaxrange.html | AWS::QuickSight::Analysis.AxisDisplayMinMaxRange}
 */
export interface QuickSightAnalysisAxisDisplayMinMaxRange {
  Minimum?: number;
  Maximum?: number;
}
/**
 * Type definition for AWS::QuickSight::Analysis.AxisDisplayOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-axisdisplayoptions.html | AWS::QuickSight::Analysis.AxisDisplayOptions}
 */
export interface QuickSightAnalysisAxisDisplayOptions {
  DataOptions?: QuickSightAnalysisAxisDataOptions;
  TickLabelOptions?: QuickSightAnalysisAxisTickLabelOptions;
  AxisOffset?: string;
  AxisLineVisibility?: string;
  GridLineVisibility?: string;
  ScrollbarOptions?: QuickSightAnalysisScrollBarOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.AxisDisplayRange
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-axisdisplayrange.html | AWS::QuickSight::Analysis.AxisDisplayRange}
 */
export interface QuickSightAnalysisAxisDisplayRange {
  DataDriven?: object;
  MinMax?: QuickSightAnalysisAxisDisplayMinMaxRange;
}
/**
 * Type definition for AWS::QuickSight::Analysis.AxisLabelOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-axislabeloptions.html | AWS::QuickSight::Analysis.AxisLabelOptions}
 */
export interface QuickSightAnalysisAxisLabelOptions {
  CustomLabel?: string;
  ApplyTo?: QuickSightAnalysisAxisLabelReferenceOptions;
  FontConfiguration?: QuickSightAnalysisFontConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.AxisLabelReferenceOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-axislabelreferenceoptions.html | AWS::QuickSight::Analysis.AxisLabelReferenceOptions}
 */
export interface QuickSightAnalysisAxisLabelReferenceOptions {
  Column: QuickSightAnalysisColumnIdentifier;
  FieldId: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.AxisLinearScale
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-axislinearscale.html | AWS::QuickSight::Analysis.AxisLinearScale}
 */
export interface QuickSightAnalysisAxisLinearScale {
  StepSize?: number;
  StepCount?: number;
}
/**
 * Type definition for AWS::QuickSight::Analysis.AxisLogarithmicScale
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-axislogarithmicscale.html | AWS::QuickSight::Analysis.AxisLogarithmicScale}
 */
export interface QuickSightAnalysisAxisLogarithmicScale {
  Base?: number;
}
/**
 * Type definition for AWS::QuickSight::Analysis.AxisScale
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-axisscale.html | AWS::QuickSight::Analysis.AxisScale}
 */
export interface QuickSightAnalysisAxisScale {
  Logarithmic?: QuickSightAnalysisAxisLogarithmicScale;
  Linear?: QuickSightAnalysisAxisLinearScale;
}
/**
 * Type definition for AWS::QuickSight::Analysis.AxisTickLabelOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-axisticklabeloptions.html | AWS::QuickSight::Analysis.AxisTickLabelOptions}
 */
export interface QuickSightAnalysisAxisTickLabelOptions {
  RotationAngle?: number;
  LabelOptions?: QuickSightAnalysisLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.BarChartAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-barchartaggregatedfieldwells.html | AWS::QuickSight::Analysis.BarChartAggregatedFieldWells}
 */
export interface QuickSightAnalysisBarChartAggregatedFieldWells {
  Category?: any[];
  Colors?: any[];
  Values?: any[];
  SmallMultiples?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.BarChartConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-barchartconfiguration.html | AWS::QuickSight::Analysis.BarChartConfiguration}
 */
export interface QuickSightAnalysisBarChartConfiguration {
  SortConfiguration?: QuickSightAnalysisBarChartSortConfiguration;
  Legend?: QuickSightAnalysisLegendOptions;
  ReferenceLines?: any[];
  DataLabels?: QuickSightAnalysisDataLabelOptions;
  ColorLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  CategoryLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  Tooltip?: QuickSightAnalysisTooltipOptions;
  SmallMultiplesOptions?: QuickSightAnalysisSmallMultiplesOptions;
  Orientation?: string;
  VisualPalette?: QuickSightAnalysisVisualPalette;
  ValueLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  BarsArrangement?: string;
  CategoryAxis?: QuickSightAnalysisAxisDisplayOptions;
  ContributionAnalysisDefaults?: any[];
  FieldWells?: QuickSightAnalysisBarChartFieldWells;
  ValueAxis?: QuickSightAnalysisAxisDisplayOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.BarChartFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-barchartfieldwells.html | AWS::QuickSight::Analysis.BarChartFieldWells}
 */
export interface QuickSightAnalysisBarChartFieldWells {
  BarChartAggregatedFieldWells?: QuickSightAnalysisBarChartAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Analysis.BarChartSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-barchartsortconfiguration.html | AWS::QuickSight::Analysis.BarChartSortConfiguration}
 */
export interface QuickSightAnalysisBarChartSortConfiguration {
  SmallMultiplesSort?: any[];
  ColorSort?: any[];
  ColorItemsLimit?: QuickSightAnalysisItemsLimitConfiguration;
  CategoryItemsLimit?: QuickSightAnalysisItemsLimitConfiguration;
  CategorySort?: any[];
  SmallMultiplesLimitConfiguration?: QuickSightAnalysisItemsLimitConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.BarChartVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-barchartvisual.html | AWS::QuickSight::Analysis.BarChartVisual}
 */
export interface QuickSightAnalysisBarChartVisual {
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightAnalysisBarChartConfiguration;
  Actions?: any[];
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.BinCountOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-bincountoptions.html | AWS::QuickSight::Analysis.BinCountOptions}
 */
export interface QuickSightAnalysisBinCountOptions {
  Value?: number;
}
/**
 * Type definition for AWS::QuickSight::Analysis.BinWidthOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-binwidthoptions.html | AWS::QuickSight::Analysis.BinWidthOptions}
 */
export interface QuickSightAnalysisBinWidthOptions {
  BinCountLimit?: number;
  Value?: number;
}
/**
 * Type definition for AWS::QuickSight::Analysis.BodySectionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-bodysectionconfiguration.html | AWS::QuickSight::Analysis.BodySectionConfiguration}
 */
export interface QuickSightAnalysisBodySectionConfiguration {
  Content: QuickSightAnalysisBodySectionContent;
  Style?: QuickSightAnalysisSectionStyle;
  PageBreakConfiguration?: QuickSightAnalysisSectionPageBreakConfiguration;
  SectionId: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.BodySectionContent
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-bodysectioncontent.html | AWS::QuickSight::Analysis.BodySectionContent}
 */
export interface QuickSightAnalysisBodySectionContent {
  Layout?: QuickSightAnalysisSectionLayoutConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.BoxPlotAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-boxplotaggregatedfieldwells.html | AWS::QuickSight::Analysis.BoxPlotAggregatedFieldWells}
 */
export interface QuickSightAnalysisBoxPlotAggregatedFieldWells {
  GroupBy?: any[];
  Values?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.BoxPlotChartConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-boxplotchartconfiguration.html | AWS::QuickSight::Analysis.BoxPlotChartConfiguration}
 */
export interface QuickSightAnalysisBoxPlotChartConfiguration {
  SortConfiguration?: QuickSightAnalysisBoxPlotSortConfiguration;
  Legend?: QuickSightAnalysisLegendOptions;
  ReferenceLines?: any[];
  CategoryAxis?: QuickSightAnalysisAxisDisplayOptions;
  PrimaryYAxisLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  CategoryLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  FieldWells?: QuickSightAnalysisBoxPlotFieldWells;
  Tooltip?: QuickSightAnalysisTooltipOptions;
  BoxPlotOptions?: QuickSightAnalysisBoxPlotOptions;
  PrimaryYAxisDisplayOptions?: QuickSightAnalysisAxisDisplayOptions;
  VisualPalette?: QuickSightAnalysisVisualPalette;
}
/**
 * Type definition for AWS::QuickSight::Analysis.BoxPlotFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-boxplotfieldwells.html | AWS::QuickSight::Analysis.BoxPlotFieldWells}
 */
export interface QuickSightAnalysisBoxPlotFieldWells {
  BoxPlotAggregatedFieldWells?: QuickSightAnalysisBoxPlotAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Analysis.BoxPlotOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-boxplotoptions.html | AWS::QuickSight::Analysis.BoxPlotOptions}
 */
export interface QuickSightAnalysisBoxPlotOptions {
  StyleOptions?: QuickSightAnalysisBoxPlotStyleOptions;
  OutlierVisibility?: string;
  AllDataPointsVisibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.BoxPlotSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-boxplotsortconfiguration.html | AWS::QuickSight::Analysis.BoxPlotSortConfiguration}
 */
export interface QuickSightAnalysisBoxPlotSortConfiguration {
  CategorySort?: any[];
  PaginationConfiguration?: QuickSightAnalysisPaginationConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.BoxPlotStyleOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-boxplotstyleoptions.html | AWS::QuickSight::Analysis.BoxPlotStyleOptions}
 */
export interface QuickSightAnalysisBoxPlotStyleOptions {
  FillStyle?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.BoxPlotVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-boxplotvisual.html | AWS::QuickSight::Analysis.BoxPlotVisual}
 */
export interface QuickSightAnalysisBoxPlotVisual {
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightAnalysisBoxPlotChartConfiguration;
  Actions?: any[];
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.CalculatedField
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-calculatedfield.html | AWS::QuickSight::Analysis.CalculatedField}
 */
export interface QuickSightAnalysisCalculatedField {
  Expression: string;
  DataSetIdentifier: string;
  Name: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.CalculatedMeasureField
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-calculatedmeasurefield.html | AWS::QuickSight::Analysis.CalculatedMeasureField}
 */
export interface QuickSightAnalysisCalculatedMeasureField {
  Expression: string;
  FieldId: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.CascadingControlConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-cascadingcontrolconfiguration.html | AWS::QuickSight::Analysis.CascadingControlConfiguration}
 */
export interface QuickSightAnalysisCascadingControlConfiguration {
  SourceControls?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.CascadingControlSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-cascadingcontrolsource.html | AWS::QuickSight::Analysis.CascadingControlSource}
 */
export interface QuickSightAnalysisCascadingControlSource {
  SourceSheetControlId?: string;
  ColumnToMatch?: QuickSightAnalysisColumnIdentifier;
}
/**
 * Type definition for AWS::QuickSight::Analysis.CategoricalDimensionField
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-categoricaldimensionfield.html | AWS::QuickSight::Analysis.CategoricalDimensionField}
 */
export interface QuickSightAnalysisCategoricalDimensionField {
  HierarchyId?: string;
  FormatConfiguration?: QuickSightAnalysisStringFormatConfiguration;
  Column: QuickSightAnalysisColumnIdentifier;
  FieldId: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.CategoricalMeasureField
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-categoricalmeasurefield.html | AWS::QuickSight::Analysis.CategoricalMeasureField}
 */
export interface QuickSightAnalysisCategoricalMeasureField {
  AggregationFunction?: string;
  FormatConfiguration?: QuickSightAnalysisStringFormatConfiguration;
  Column: QuickSightAnalysisColumnIdentifier;
  FieldId: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.CategoryDrillDownFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-categorydrilldownfilter.html | AWS::QuickSight::Analysis.CategoryDrillDownFilter}
 */
export interface QuickSightAnalysisCategoryDrillDownFilter {
  Column: QuickSightAnalysisColumnIdentifier;
  CategoryValues: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.CategoryFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-categoryfilter.html | AWS::QuickSight::Analysis.CategoryFilter}
 */
export interface QuickSightAnalysisCategoryFilter {
  Configuration: QuickSightAnalysisCategoryFilterConfiguration;
  Column: QuickSightAnalysisColumnIdentifier;
  FilterId: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.CategoryFilterConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-categoryfilterconfiguration.html | AWS::QuickSight::Analysis.CategoryFilterConfiguration}
 */
export interface QuickSightAnalysisCategoryFilterConfiguration {
  CustomFilterListConfiguration?: QuickSightAnalysisCustomFilterListConfiguration;
  CustomFilterConfiguration?: QuickSightAnalysisCustomFilterConfiguration;
  FilterListConfiguration?: QuickSightAnalysisFilterListConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ChartAxisLabelOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-chartaxislabeloptions.html | AWS::QuickSight::Analysis.ChartAxisLabelOptions}
 */
export interface QuickSightAnalysisChartAxisLabelOptions {
  Visibility?: string;
  SortIconVisibility?: string;
  AxisLabelOptions?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.ClusterMarker
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-clustermarker.html | AWS::QuickSight::Analysis.ClusterMarker}
 */
export interface QuickSightAnalysisClusterMarker {
  SimpleClusterMarker?: QuickSightAnalysisSimpleClusterMarker;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ClusterMarkerConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-clustermarkerconfiguration.html | AWS::QuickSight::Analysis.ClusterMarkerConfiguration}
 */
export interface QuickSightAnalysisClusterMarkerConfiguration {
  ClusterMarker?: QuickSightAnalysisClusterMarker;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ColorScale
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-colorscale.html | AWS::QuickSight::Analysis.ColorScale}
 */
export interface QuickSightAnalysisColorScale {
  Colors: any[];
  ColorFillType: string;
  NullValueColor?: QuickSightAnalysisDataColor;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ColorsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-colorsconfiguration.html | AWS::QuickSight::Analysis.ColorsConfiguration}
 */
export interface QuickSightAnalysisColorsConfiguration {
  CustomColors?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.ColumnConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-columnconfiguration.html | AWS::QuickSight::Analysis.ColumnConfiguration}
 */
export interface QuickSightAnalysisColumnConfiguration {
  Role?: string;
  FormatConfiguration?: QuickSightAnalysisFormatConfiguration;
  Column: QuickSightAnalysisColumnIdentifier;
  ColorsConfiguration?: QuickSightAnalysisColorsConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ColumnHierarchy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-columnhierarchy.html | AWS::QuickSight::Analysis.ColumnHierarchy}
 */
export interface QuickSightAnalysisColumnHierarchy {
  DateTimeHierarchy?: QuickSightAnalysisDateTimeHierarchy;
  ExplicitHierarchy?: QuickSightAnalysisExplicitHierarchy;
  PredefinedHierarchy?: QuickSightAnalysisPredefinedHierarchy;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ColumnIdentifier
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-columnidentifier.html | AWS::QuickSight::Analysis.ColumnIdentifier}
 */
export interface QuickSightAnalysisColumnIdentifier {
  ColumnName: string;
  DataSetIdentifier: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ColumnSort
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-columnsort.html | AWS::QuickSight::Analysis.ColumnSort}
 */
export interface QuickSightAnalysisColumnSort {
  AggregationFunction?: QuickSightAnalysisAggregationFunction;
  SortBy: QuickSightAnalysisColumnIdentifier;
  Direction: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ColumnTooltipItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-columntooltipitem.html | AWS::QuickSight::Analysis.ColumnTooltipItem}
 */
export interface QuickSightAnalysisColumnTooltipItem {
  Aggregation?: QuickSightAnalysisAggregationFunction;
  Column: QuickSightAnalysisColumnIdentifier;
  Label?: string;
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ComboChartAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-combochartaggregatedfieldwells.html | AWS::QuickSight::Analysis.ComboChartAggregatedFieldWells}
 */
export interface QuickSightAnalysisComboChartAggregatedFieldWells {
  BarValues?: any[];
  Category?: any[];
  Colors?: any[];
  LineValues?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.ComboChartConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-combochartconfiguration.html | AWS::QuickSight::Analysis.ComboChartConfiguration}
 */
export interface QuickSightAnalysisComboChartConfiguration {
  SortConfiguration?: QuickSightAnalysisComboChartSortConfiguration;
  Legend?: QuickSightAnalysisLegendOptions;
  ReferenceLines?: any[];
  ColorLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  BarDataLabels?: QuickSightAnalysisDataLabelOptions;
  CategoryLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  Tooltip?: QuickSightAnalysisTooltipOptions;
  PrimaryYAxisDisplayOptions?: QuickSightAnalysisAxisDisplayOptions;
  VisualPalette?: QuickSightAnalysisVisualPalette;
  BarsArrangement?: string;
  SecondaryYAxisLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  LineDataLabels?: QuickSightAnalysisDataLabelOptions;
  CategoryAxis?: QuickSightAnalysisAxisDisplayOptions;
  PrimaryYAxisLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  FieldWells?: QuickSightAnalysisComboChartFieldWells;
  SecondaryYAxisDisplayOptions?: QuickSightAnalysisAxisDisplayOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ComboChartFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-combochartfieldwells.html | AWS::QuickSight::Analysis.ComboChartFieldWells}
 */
export interface QuickSightAnalysisComboChartFieldWells {
  ComboChartAggregatedFieldWells?: QuickSightAnalysisComboChartAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ComboChartSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-combochartsortconfiguration.html | AWS::QuickSight::Analysis.ComboChartSortConfiguration}
 */
export interface QuickSightAnalysisComboChartSortConfiguration {
  ColorSort?: any[];
  ColorItemsLimit?: QuickSightAnalysisItemsLimitConfiguration;
  CategoryItemsLimit?: QuickSightAnalysisItemsLimitConfiguration;
  CategorySort?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.ComboChartVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-combochartvisual.html | AWS::QuickSight::Analysis.ComboChartVisual}
 */
export interface QuickSightAnalysisComboChartVisual {
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightAnalysisComboChartConfiguration;
  Actions?: any[];
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.ComparisonConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-comparisonconfiguration.html | AWS::QuickSight::Analysis.ComparisonConfiguration}
 */
export interface QuickSightAnalysisComparisonConfiguration {
  ComparisonMethod?: string;
  ComparisonFormat?: QuickSightAnalysisComparisonFormatConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ComparisonFormatConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-comparisonformatconfiguration.html | AWS::QuickSight::Analysis.ComparisonFormatConfiguration}
 */
export interface QuickSightAnalysisComparisonFormatConfiguration {
  NumberDisplayFormatConfiguration?: QuickSightAnalysisNumberDisplayFormatConfiguration;
  PercentageDisplayFormatConfiguration?: QuickSightAnalysisPercentageDisplayFormatConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.Computation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-computation.html | AWS::QuickSight::Analysis.Computation}
 */
export interface QuickSightAnalysisComputation {
  PeriodToDate?: QuickSightAnalysisPeriodToDateComputation;
  GrowthRate?: QuickSightAnalysisGrowthRateComputation;
  TopBottomRanked?: QuickSightAnalysisTopBottomRankedComputation;
  TotalAggregation?: QuickSightAnalysisTotalAggregationComputation;
  Forecast?: QuickSightAnalysisForecastComputation;
  MaximumMinimum?: QuickSightAnalysisMaximumMinimumComputation;
  PeriodOverPeriod?: QuickSightAnalysisPeriodOverPeriodComputation;
  MetricComparison?: QuickSightAnalysisMetricComparisonComputation;
  TopBottomMovers?: QuickSightAnalysisTopBottomMoversComputation;
  UniqueValues?: QuickSightAnalysisUniqueValuesComputation;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ConditionalFormattingColor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-conditionalformattingcolor.html | AWS::QuickSight::Analysis.ConditionalFormattingColor}
 */
export interface QuickSightAnalysisConditionalFormattingColor {
  Gradient?: QuickSightAnalysisConditionalFormattingGradientColor;
  Solid?: QuickSightAnalysisConditionalFormattingSolidColor;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ConditionalFormattingCustomIconCondition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-conditionalformattingcustomiconcondition.html | AWS::QuickSight::Analysis.ConditionalFormattingCustomIconCondition}
 */
export interface QuickSightAnalysisConditionalFormattingCustomIconCondition {
  Expression: string;
  Color?: string;
  DisplayConfiguration?: QuickSightAnalysisConditionalFormattingIconDisplayConfiguration;
  IconOptions: QuickSightAnalysisConditionalFormattingCustomIconOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ConditionalFormattingCustomIconOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-conditionalformattingcustomiconoptions.html | AWS::QuickSight::Analysis.ConditionalFormattingCustomIconOptions}
 */
export interface QuickSightAnalysisConditionalFormattingCustomIconOptions {
  UnicodeIcon?: string;
  Icon?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ConditionalFormattingGradientColor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-conditionalformattinggradientcolor.html | AWS::QuickSight::Analysis.ConditionalFormattingGradientColor}
 */
export interface QuickSightAnalysisConditionalFormattingGradientColor {
  Expression: string;
  Color: QuickSightAnalysisGradientColor;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ConditionalFormattingIcon
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-conditionalformattingicon.html | AWS::QuickSight::Analysis.ConditionalFormattingIcon}
 */
export interface QuickSightAnalysisConditionalFormattingIcon {
  CustomCondition?: QuickSightAnalysisConditionalFormattingCustomIconCondition;
  IconSet?: QuickSightAnalysisConditionalFormattingIconSet;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ConditionalFormattingIconDisplayConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-conditionalformattingicondisplayconfiguration.html | AWS::QuickSight::Analysis.ConditionalFormattingIconDisplayConfiguration}
 */
export interface QuickSightAnalysisConditionalFormattingIconDisplayConfiguration {
  IconDisplayOption?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ConditionalFormattingIconSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-conditionalformattingiconset.html | AWS::QuickSight::Analysis.ConditionalFormattingIconSet}
 */
export interface QuickSightAnalysisConditionalFormattingIconSet {
  Expression: string;
  IconSetType?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ConditionalFormattingSolidColor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-conditionalformattingsolidcolor.html | AWS::QuickSight::Analysis.ConditionalFormattingSolidColor}
 */
export interface QuickSightAnalysisConditionalFormattingSolidColor {
  Expression: string;
  Color?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ContributionAnalysisDefault
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-contributionanalysisdefault.html | AWS::QuickSight::Analysis.ContributionAnalysisDefault}
 */
export interface QuickSightAnalysisContributionAnalysisDefault {
  MeasureFieldId: string;
  ContributorDimensions: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.CurrencyDisplayFormatConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-currencydisplayformatconfiguration.html | AWS::QuickSight::Analysis.CurrencyDisplayFormatConfiguration}
 */
export interface QuickSightAnalysisCurrencyDisplayFormatConfiguration {
  NegativeValueConfiguration?: QuickSightAnalysisNegativeValueConfiguration;
  DecimalPlacesConfiguration?: QuickSightAnalysisDecimalPlacesConfiguration;
  NumberScale?: string;
  NullValueFormatConfiguration?: QuickSightAnalysisNullValueFormatConfiguration;
  Suffix?: string;
  SeparatorConfiguration?: QuickSightAnalysisNumericSeparatorConfiguration;
  Symbol?: string;
  Prefix?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.CustomActionFilterOperation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-customactionfilteroperation.html | AWS::QuickSight::Analysis.CustomActionFilterOperation}
 */
export interface QuickSightAnalysisCustomActionFilterOperation {
  SelectedFieldsConfiguration: QuickSightAnalysisFilterOperationSelectedFieldsConfiguration;
  TargetVisualsConfiguration: QuickSightAnalysisFilterOperationTargetVisualsConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.CustomActionNavigationOperation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-customactionnavigationoperation.html | AWS::QuickSight::Analysis.CustomActionNavigationOperation}
 */
export interface QuickSightAnalysisCustomActionNavigationOperation {
  LocalNavigationConfiguration?: QuickSightAnalysisLocalNavigationConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.CustomActionSetParametersOperation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-customactionsetparametersoperation.html | AWS::QuickSight::Analysis.CustomActionSetParametersOperation}
 */
export interface QuickSightAnalysisCustomActionSetParametersOperation {
  ParameterValueConfigurations: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.CustomActionURLOperation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-customactionurloperation.html | AWS::QuickSight::Analysis.CustomActionURLOperation}
 */
export interface QuickSightAnalysisCustomActionURLOperation {
  URLTemplate: string;
  URLTarget: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.CustomColor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-customcolor.html | AWS::QuickSight::Analysis.CustomColor}
 */
export interface QuickSightAnalysisCustomColor {
  Color: string;
  FieldValue?: string;
  SpecialValue?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.CustomContentConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-customcontentconfiguration.html | AWS::QuickSight::Analysis.CustomContentConfiguration}
 */
export interface QuickSightAnalysisCustomContentConfiguration {
  ContentUrl?: string;
  ContentType?: string;
  ImageScaling?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.CustomContentVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-customcontentvisual.html | AWS::QuickSight::Analysis.CustomContentVisual}
 */
export interface QuickSightAnalysisCustomContentVisual {
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightAnalysisCustomContentConfiguration;
  Actions?: any[];
  DataSetIdentifier: string;
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.CustomFilterConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-customfilterconfiguration.html | AWS::QuickSight::Analysis.CustomFilterConfiguration}
 */
export interface QuickSightAnalysisCustomFilterConfiguration {
  CategoryValue?: string;
  ParameterName?: string;
  NullOption: string;
  MatchOperator: string;
  SelectAllOptions?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.CustomFilterListConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-customfilterlistconfiguration.html | AWS::QuickSight::Analysis.CustomFilterListConfiguration}
 */
export interface QuickSightAnalysisCustomFilterListConfiguration {
  CategoryValues?: any[];
  NullOption: string;
  MatchOperator: string;
  SelectAllOptions?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.CustomNarrativeOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-customnarrativeoptions.html | AWS::QuickSight::Analysis.CustomNarrativeOptions}
 */
export interface QuickSightAnalysisCustomNarrativeOptions {
  Narrative: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.CustomParameterValues
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-customparametervalues.html | AWS::QuickSight::Analysis.CustomParameterValues}
 */
export interface QuickSightAnalysisCustomParameterValues {
  DecimalValues?: any[];
  IntegerValues?: any[];
  StringValues?: any[];
  DateTimeValues?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.CustomValuesConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-customvaluesconfiguration.html | AWS::QuickSight::Analysis.CustomValuesConfiguration}
 */
export interface QuickSightAnalysisCustomValuesConfiguration {
  IncludeNullValue?: boolean;
  CustomValues: QuickSightAnalysisCustomParameterValues;
}
/**
 * Type definition for AWS::QuickSight::Analysis.DataBarsOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-databarsoptions.html | AWS::QuickSight::Analysis.DataBarsOptions}
 */
export interface QuickSightAnalysisDataBarsOptions {
  PositiveColor?: string;
  FieldId: string;
  NegativeColor?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.DataColor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datacolor.html | AWS::QuickSight::Analysis.DataColor}
 */
export interface QuickSightAnalysisDataColor {
  DataValue?: number;
  Color?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.DataFieldSeriesItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datafieldseriesitem.html | AWS::QuickSight::Analysis.DataFieldSeriesItem}
 */
export interface QuickSightAnalysisDataFieldSeriesItem {
  FieldId: string;
  AxisBinding: string;
  FieldValue?: string;
  Settings?: QuickSightAnalysisLineChartSeriesSettings;
}
/**
 * Type definition for AWS::QuickSight::Analysis.DataLabelOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datalabeloptions.html | AWS::QuickSight::Analysis.DataLabelOptions}
 */
export interface QuickSightAnalysisDataLabelOptions {
  DataLabelTypes?: any[];
  MeasureLabelVisibility?: string;
  Position?: string;
  LabelContent?: string;
  Visibility?: string;
  TotalsVisibility?: string;
  Overlap?: string;
  CategoryLabelVisibility?: string;
  LabelColor?: string;
  LabelFontConfiguration?: QuickSightAnalysisFontConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.DataLabelType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datalabeltype.html | AWS::QuickSight::Analysis.DataLabelType}
 */
export interface QuickSightAnalysisDataLabelType {
  MaximumLabelType?: QuickSightAnalysisMaximumLabelType;
  DataPathLabelType?: QuickSightAnalysisDataPathLabelType;
  RangeEndsLabelType?: QuickSightAnalysisRangeEndsLabelType;
  FieldLabelType?: QuickSightAnalysisFieldLabelType;
  MinimumLabelType?: QuickSightAnalysisMinimumLabelType;
}
/**
 * Type definition for AWS::QuickSight::Analysis.DataPathColor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datapathcolor.html | AWS::QuickSight::Analysis.DataPathColor}
 */
export interface QuickSightAnalysisDataPathColor {
  Element: QuickSightAnalysisDataPathValue;
  Color: string;
  TimeGranularity?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.DataPathLabelType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datapathlabeltype.html | AWS::QuickSight::Analysis.DataPathLabelType}
 */
export interface QuickSightAnalysisDataPathLabelType {
  FieldId?: string;
  Visibility?: string;
  FieldValue?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.DataPathSort
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datapathsort.html | AWS::QuickSight::Analysis.DataPathSort}
 */
export interface QuickSightAnalysisDataPathSort {
  SortPaths: any[];
  Direction: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.DataPathType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datapathtype.html | AWS::QuickSight::Analysis.DataPathType}
 */
export interface QuickSightAnalysisDataPathType {
  PivotTableDataPathType?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.DataPathValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datapathvalue.html | AWS::QuickSight::Analysis.DataPathValue}
 */
export interface QuickSightAnalysisDataPathValue {
  DataPathType?: QuickSightAnalysisDataPathType;
  FieldId?: string;
  FieldValue?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.DataSetIdentifierDeclaration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datasetidentifierdeclaration.html | AWS::QuickSight::Analysis.DataSetIdentifierDeclaration}
 */
export interface QuickSightAnalysisDataSetIdentifierDeclaration {
  Identifier: string;
  DataSetArn: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.DataSetReference
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datasetreference.html | AWS::QuickSight::Analysis.DataSetReference}
 */
export interface QuickSightAnalysisDataSetReference {
  DataSetArn: string;
  DataSetPlaceholder: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.DateAxisOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-dateaxisoptions.html | AWS::QuickSight::Analysis.DateAxisOptions}
 */
export interface QuickSightAnalysisDateAxisOptions {
  MissingDateVisibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.DateDimensionField
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datedimensionfield.html | AWS::QuickSight::Analysis.DateDimensionField}
 */
export interface QuickSightAnalysisDateDimensionField {
  HierarchyId?: string;
  FormatConfiguration?: QuickSightAnalysisDateTimeFormatConfiguration;
  Column: QuickSightAnalysisColumnIdentifier;
  FieldId: string;
  DateGranularity?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.DateMeasureField
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datemeasurefield.html | AWS::QuickSight::Analysis.DateMeasureField}
 */
export interface QuickSightAnalysisDateMeasureField {
  AggregationFunction?: string;
  FormatConfiguration?: QuickSightAnalysisDateTimeFormatConfiguration;
  Column: QuickSightAnalysisColumnIdentifier;
  FieldId: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.DateTimeDefaultValues
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datetimedefaultvalues.html | AWS::QuickSight::Analysis.DateTimeDefaultValues}
 */
export interface QuickSightAnalysisDateTimeDefaultValues {
  RollingDate?: QuickSightAnalysisRollingDateConfiguration;
  DynamicValue?: QuickSightAnalysisDynamicDefaultValue;
  StaticValues?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.DateTimeFormatConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datetimeformatconfiguration.html | AWS::QuickSight::Analysis.DateTimeFormatConfiguration}
 */
export interface QuickSightAnalysisDateTimeFormatConfiguration {
  NumericFormatConfiguration?: QuickSightAnalysisNumericFormatConfiguration;
  NullValueFormatConfiguration?: QuickSightAnalysisNullValueFormatConfiguration;
  DateTimeFormat?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.DateTimeHierarchy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datetimehierarchy.html | AWS::QuickSight::Analysis.DateTimeHierarchy}
 */
export interface QuickSightAnalysisDateTimeHierarchy {
  HierarchyId: string;
  DrillDownFilters?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.DateTimeParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datetimeparameter.html | AWS::QuickSight::Analysis.DateTimeParameter}
 */
export interface QuickSightAnalysisDateTimeParameter {
  Values: any[];
  Name: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.DateTimeParameterDeclaration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datetimeparameterdeclaration.html | AWS::QuickSight::Analysis.DateTimeParameterDeclaration}
 */
export interface QuickSightAnalysisDateTimeParameterDeclaration {
  MappedDataSetParameters?: any[];
  DefaultValues?: QuickSightAnalysisDateTimeDefaultValues;
  TimeGranularity?: string;
  ValueWhenUnset?: QuickSightAnalysisDateTimeValueWhenUnsetConfiguration;
  Name: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.DateTimePickerControlDisplayOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datetimepickercontroldisplayoptions.html | AWS::QuickSight::Analysis.DateTimePickerControlDisplayOptions}
 */
export interface QuickSightAnalysisDateTimePickerControlDisplayOptions {
  TitleOptions?: QuickSightAnalysisLabelOptions;
  InfoIconLabelOptions?: QuickSightAnalysisSheetControlInfoIconLabelOptions;
  DateTimeFormat?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.DateTimeValueWhenUnsetConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datetimevaluewhenunsetconfiguration.html | AWS::QuickSight::Analysis.DateTimeValueWhenUnsetConfiguration}
 */
export interface QuickSightAnalysisDateTimeValueWhenUnsetConfiguration {
  ValueWhenUnsetOption?: string;
  CustomValue?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.DecimalDefaultValues
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-decimaldefaultvalues.html | AWS::QuickSight::Analysis.DecimalDefaultValues}
 */
export interface QuickSightAnalysisDecimalDefaultValues {
  DynamicValue?: QuickSightAnalysisDynamicDefaultValue;
  StaticValues?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.DecimalParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-decimalparameter.html | AWS::QuickSight::Analysis.DecimalParameter}
 */
export interface QuickSightAnalysisDecimalParameter {
  Values: any[];
  Name: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.DecimalParameterDeclaration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-decimalparameterdeclaration.html | AWS::QuickSight::Analysis.DecimalParameterDeclaration}
 */
export interface QuickSightAnalysisDecimalParameterDeclaration {
  MappedDataSetParameters?: any[];
  DefaultValues?: QuickSightAnalysisDecimalDefaultValues;
  ParameterValueType: string;
  ValueWhenUnset?: QuickSightAnalysisDecimalValueWhenUnsetConfiguration;
  Name: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.DecimalPlacesConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-decimalplacesconfiguration.html | AWS::QuickSight::Analysis.DecimalPlacesConfiguration}
 */
export interface QuickSightAnalysisDecimalPlacesConfiguration {
  DecimalPlaces: number;
}
/**
 * Type definition for AWS::QuickSight::Analysis.DecimalValueWhenUnsetConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-decimalvaluewhenunsetconfiguration.html | AWS::QuickSight::Analysis.DecimalValueWhenUnsetConfiguration}
 */
export interface QuickSightAnalysisDecimalValueWhenUnsetConfiguration {
  ValueWhenUnsetOption?: string;
  CustomValue?: number;
}
/**
 * Type definition for AWS::QuickSight::Analysis.DefaultFreeFormLayoutConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-defaultfreeformlayoutconfiguration.html | AWS::QuickSight::Analysis.DefaultFreeFormLayoutConfiguration}
 */
export interface QuickSightAnalysisDefaultFreeFormLayoutConfiguration {
  CanvasSizeOptions: QuickSightAnalysisFreeFormLayoutCanvasSizeOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.DefaultGridLayoutConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-defaultgridlayoutconfiguration.html | AWS::QuickSight::Analysis.DefaultGridLayoutConfiguration}
 */
export interface QuickSightAnalysisDefaultGridLayoutConfiguration {
  CanvasSizeOptions: QuickSightAnalysisGridLayoutCanvasSizeOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.DefaultInteractiveLayoutConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-defaultinteractivelayoutconfiguration.html | AWS::QuickSight::Analysis.DefaultInteractiveLayoutConfiguration}
 */
export interface QuickSightAnalysisDefaultInteractiveLayoutConfiguration {
  FreeForm?: QuickSightAnalysisDefaultFreeFormLayoutConfiguration;
  Grid?: QuickSightAnalysisDefaultGridLayoutConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.DefaultNewSheetConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-defaultnewsheetconfiguration.html | AWS::QuickSight::Analysis.DefaultNewSheetConfiguration}
 */
export interface QuickSightAnalysisDefaultNewSheetConfiguration {
  SheetContentType?: string;
  InteractiveLayoutConfiguration?: QuickSightAnalysisDefaultInteractiveLayoutConfiguration;
  PaginatedLayoutConfiguration?: QuickSightAnalysisDefaultPaginatedLayoutConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.DefaultPaginatedLayoutConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-defaultpaginatedlayoutconfiguration.html | AWS::QuickSight::Analysis.DefaultPaginatedLayoutConfiguration}
 */
export interface QuickSightAnalysisDefaultPaginatedLayoutConfiguration {
  SectionBased?: QuickSightAnalysisDefaultSectionBasedLayoutConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.DefaultSectionBasedLayoutConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-defaultsectionbasedlayoutconfiguration.html | AWS::QuickSight::Analysis.DefaultSectionBasedLayoutConfiguration}
 */
export interface QuickSightAnalysisDefaultSectionBasedLayoutConfiguration {
  CanvasSizeOptions: QuickSightAnalysisSectionBasedLayoutCanvasSizeOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.DestinationParameterValueConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-destinationparametervalueconfiguration.html | AWS::QuickSight::Analysis.DestinationParameterValueConfiguration}
 */
export interface QuickSightAnalysisDestinationParameterValueConfiguration {
  CustomValuesConfiguration?: QuickSightAnalysisCustomValuesConfiguration;
  SourceParameterName?: string;
  SelectAllValueOptions?: string;
  SourceField?: string;
  SourceColumn?: QuickSightAnalysisColumnIdentifier;
}
/**
 * Type definition for AWS::QuickSight::Analysis.DimensionField
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-dimensionfield.html | AWS::QuickSight::Analysis.DimensionField}
 */
export interface QuickSightAnalysisDimensionField {
  DateDimensionField?: QuickSightAnalysisDateDimensionField;
  NumericalDimensionField?: QuickSightAnalysisNumericalDimensionField;
  CategoricalDimensionField?: QuickSightAnalysisCategoricalDimensionField;
}
/**
 * Type definition for AWS::QuickSight::Analysis.DonutCenterOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-donutcenteroptions.html | AWS::QuickSight::Analysis.DonutCenterOptions}
 */
export interface QuickSightAnalysisDonutCenterOptions {
  LabelVisibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.DonutOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-donutoptions.html | AWS::QuickSight::Analysis.DonutOptions}
 */
export interface QuickSightAnalysisDonutOptions {
  DonutCenterOptions?: QuickSightAnalysisDonutCenterOptions;
  ArcOptions?: QuickSightAnalysisArcOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.DrillDownFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-drilldownfilter.html | AWS::QuickSight::Analysis.DrillDownFilter}
 */
export interface QuickSightAnalysisDrillDownFilter {
  NumericEqualityFilter?: QuickSightAnalysisNumericEqualityDrillDownFilter;
  TimeRangeFilter?: QuickSightAnalysisTimeRangeDrillDownFilter;
  CategoryFilter?: QuickSightAnalysisCategoryDrillDownFilter;
}
/**
 * Type definition for AWS::QuickSight::Analysis.DropDownControlDisplayOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-dropdowncontroldisplayoptions.html | AWS::QuickSight::Analysis.DropDownControlDisplayOptions}
 */
export interface QuickSightAnalysisDropDownControlDisplayOptions {
  TitleOptions?: QuickSightAnalysisLabelOptions;
  SelectAllOptions?: QuickSightAnalysisListControlSelectAllOptions;
  InfoIconLabelOptions?: QuickSightAnalysisSheetControlInfoIconLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.DynamicDefaultValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-dynamicdefaultvalue.html | AWS::QuickSight::Analysis.DynamicDefaultValue}
 */
export interface QuickSightAnalysisDynamicDefaultValue {
  GroupNameColumn?: QuickSightAnalysisColumnIdentifier;
  DefaultValueColumn: QuickSightAnalysisColumnIdentifier;
  UserNameColumn?: QuickSightAnalysisColumnIdentifier;
}
/**
 * Type definition for AWS::QuickSight::Analysis.EmptyVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-emptyvisual.html | AWS::QuickSight::Analysis.EmptyVisual}
 */
export interface QuickSightAnalysisEmptyVisual {
  VisualId: string;
  Actions?: any[];
  DataSetIdentifier: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.Entity
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-entity.html | AWS::QuickSight::Analysis.Entity}
 */
export interface QuickSightAnalysisEntity {
  Path?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ExcludePeriodConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-excludeperiodconfiguration.html | AWS::QuickSight::Analysis.ExcludePeriodConfiguration}
 */
export interface QuickSightAnalysisExcludePeriodConfiguration {
  Status?: string;
  Amount: number;
  Granularity: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ExplicitHierarchy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-explicithierarchy.html | AWS::QuickSight::Analysis.ExplicitHierarchy}
 */
export interface QuickSightAnalysisExplicitHierarchy {
  HierarchyId: string;
  DrillDownFilters?: any[];
  Columns: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.FieldBasedTooltip
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-fieldbasedtooltip.html | AWS::QuickSight::Analysis.FieldBasedTooltip}
 */
export interface QuickSightAnalysisFieldBasedTooltip {
  TooltipFields?: any[];
  AggregationVisibility?: string;
  TooltipTitleType?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.FieldLabelType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-fieldlabeltype.html | AWS::QuickSight::Analysis.FieldLabelType}
 */
export interface QuickSightAnalysisFieldLabelType {
  FieldId?: string;
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.FieldSeriesItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-fieldseriesitem.html | AWS::QuickSight::Analysis.FieldSeriesItem}
 */
export interface QuickSightAnalysisFieldSeriesItem {
  FieldId: string;
  AxisBinding: string;
  Settings?: QuickSightAnalysisLineChartSeriesSettings;
}
/**
 * Type definition for AWS::QuickSight::Analysis.FieldSort
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-fieldsort.html | AWS::QuickSight::Analysis.FieldSort}
 */
export interface QuickSightAnalysisFieldSort {
  FieldId: string;
  Direction: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.FieldSortOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-fieldsortoptions.html | AWS::QuickSight::Analysis.FieldSortOptions}
 */
export interface QuickSightAnalysisFieldSortOptions {
  FieldSort?: QuickSightAnalysisFieldSort;
  ColumnSort?: QuickSightAnalysisColumnSort;
}
/**
 * Type definition for AWS::QuickSight::Analysis.FieldTooltipItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-fieldtooltipitem.html | AWS::QuickSight::Analysis.FieldTooltipItem}
 */
export interface QuickSightAnalysisFieldTooltipItem {
  FieldId: string;
  Label?: string;
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.FilledMapAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filledmapaggregatedfieldwells.html | AWS::QuickSight::Analysis.FilledMapAggregatedFieldWells}
 */
export interface QuickSightAnalysisFilledMapAggregatedFieldWells {
  Values?: any[];
  Geospatial?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.FilledMapConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filledmapconditionalformatting.html | AWS::QuickSight::Analysis.FilledMapConditionalFormatting}
 */
export interface QuickSightAnalysisFilledMapConditionalFormatting {
  ConditionalFormattingOptions: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.FilledMapConditionalFormattingOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filledmapconditionalformattingoption.html | AWS::QuickSight::Analysis.FilledMapConditionalFormattingOption}
 */
export interface QuickSightAnalysisFilledMapConditionalFormattingOption {
  Shape: QuickSightAnalysisFilledMapShapeConditionalFormatting;
}
/**
 * Type definition for AWS::QuickSight::Analysis.FilledMapConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filledmapconfiguration.html | AWS::QuickSight::Analysis.FilledMapConfiguration}
 */
export interface QuickSightAnalysisFilledMapConfiguration {
  SortConfiguration?: QuickSightAnalysisFilledMapSortConfiguration;
  Legend?: QuickSightAnalysisLegendOptions;
  MapStyleOptions?: QuickSightAnalysisGeospatialMapStyleOptions;
  FieldWells?: QuickSightAnalysisFilledMapFieldWells;
  Tooltip?: QuickSightAnalysisTooltipOptions;
  WindowOptions?: QuickSightAnalysisGeospatialWindowOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.FilledMapFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filledmapfieldwells.html | AWS::QuickSight::Analysis.FilledMapFieldWells}
 */
export interface QuickSightAnalysisFilledMapFieldWells {
  FilledMapAggregatedFieldWells?: QuickSightAnalysisFilledMapAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Analysis.FilledMapShapeConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filledmapshapeconditionalformatting.html | AWS::QuickSight::Analysis.FilledMapShapeConditionalFormatting}
 */
export interface QuickSightAnalysisFilledMapShapeConditionalFormatting {
  Format?: QuickSightAnalysisShapeConditionalFormat;
  FieldId: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.FilledMapSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filledmapsortconfiguration.html | AWS::QuickSight::Analysis.FilledMapSortConfiguration}
 */
export interface QuickSightAnalysisFilledMapSortConfiguration {
  CategorySort?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.FilledMapVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filledmapvisual.html | AWS::QuickSight::Analysis.FilledMapVisual}
 */
export interface QuickSightAnalysisFilledMapVisual {
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
  ConditionalFormatting?: QuickSightAnalysisFilledMapConditionalFormatting;
  VisualId: string;
  ChartConfiguration?: QuickSightAnalysisFilledMapConfiguration;
  Actions?: any[];
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.Filter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filter.html | AWS::QuickSight::Analysis.Filter}
 */
export interface QuickSightAnalysisFilter {
  NumericEqualityFilter?: QuickSightAnalysisNumericEqualityFilter;
  NumericRangeFilter?: QuickSightAnalysisNumericRangeFilter;
  TimeRangeFilter?: QuickSightAnalysisTimeRangeFilter;
  RelativeDatesFilter?: QuickSightAnalysisRelativeDatesFilter;
  TopBottomFilter?: QuickSightAnalysisTopBottomFilter;
  TimeEqualityFilter?: QuickSightAnalysisTimeEqualityFilter;
  CategoryFilter?: QuickSightAnalysisCategoryFilter;
}
/**
 * Type definition for AWS::QuickSight::Analysis.FilterControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filtercontrol.html | AWS::QuickSight::Analysis.FilterControl}
 */
export interface QuickSightAnalysisFilterControl {
  Slider?: QuickSightAnalysisFilterSliderControl;
  TextArea?: QuickSightAnalysisFilterTextAreaControl;
  Dropdown?: QuickSightAnalysisFilterDropDownControl;
  TextField?: QuickSightAnalysisFilterTextFieldControl;
  List?: QuickSightAnalysisFilterListControl;
  DateTimePicker?: QuickSightAnalysisFilterDateTimePickerControl;
  RelativeDateTime?: QuickSightAnalysisFilterRelativeDateTimeControl;
}
/**
 * Type definition for AWS::QuickSight::Analysis.FilterDateTimePickerControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filterdatetimepickercontrol.html | AWS::QuickSight::Analysis.FilterDateTimePickerControl}
 */
export interface QuickSightAnalysisFilterDateTimePickerControl {
  FilterControlId: string;
  Type?: string;
  DisplayOptions?: QuickSightAnalysisDateTimePickerControlDisplayOptions;
  Title: string;
  SourceFilterId: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.FilterDropDownControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filterdropdowncontrol.html | AWS::QuickSight::Analysis.FilterDropDownControl}
 */
export interface QuickSightAnalysisFilterDropDownControl {
  FilterControlId: string;
  Type?: string;
  DisplayOptions?: QuickSightAnalysisDropDownControlDisplayOptions;
  CascadingControlConfiguration?: QuickSightAnalysisCascadingControlConfiguration;
  Title: string;
  SourceFilterId: string;
  SelectableValues?: QuickSightAnalysisFilterSelectableValues;
}
/**
 * Type definition for AWS::QuickSight::Analysis.FilterGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filtergroup.html | AWS::QuickSight::Analysis.FilterGroup}
 */
export interface QuickSightAnalysisFilterGroup {
  Status?: string;
  Filters: any[];
  CrossDataset: string;
  ScopeConfiguration: QuickSightAnalysisFilterScopeConfiguration;
  FilterGroupId: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.FilterListConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filterlistconfiguration.html | AWS::QuickSight::Analysis.FilterListConfiguration}
 */
export interface QuickSightAnalysisFilterListConfiguration {
  CategoryValues?: any[];
  NullOption?: string;
  MatchOperator: string;
  SelectAllOptions?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.FilterListControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filterlistcontrol.html | AWS::QuickSight::Analysis.FilterListControl}
 */
export interface QuickSightAnalysisFilterListControl {
  FilterControlId: string;
  Type?: string;
  DisplayOptions?: QuickSightAnalysisListControlDisplayOptions;
  CascadingControlConfiguration?: QuickSightAnalysisCascadingControlConfiguration;
  Title: string;
  SourceFilterId: string;
  SelectableValues?: QuickSightAnalysisFilterSelectableValues;
}
/**
 * Type definition for AWS::QuickSight::Analysis.FilterOperationSelectedFieldsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filteroperationselectedfieldsconfiguration.html | AWS::QuickSight::Analysis.FilterOperationSelectedFieldsConfiguration}
 */
export interface QuickSightAnalysisFilterOperationSelectedFieldsConfiguration {
  SelectedColumns?: any[];
  SelectedFields?: any[];
  SelectedFieldOptions?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.FilterOperationTargetVisualsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filteroperationtargetvisualsconfiguration.html | AWS::QuickSight::Analysis.FilterOperationTargetVisualsConfiguration}
 */
export interface QuickSightAnalysisFilterOperationTargetVisualsConfiguration {
  SameSheetTargetVisualConfiguration?: QuickSightAnalysisSameSheetTargetVisualConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.FilterRelativeDateTimeControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filterrelativedatetimecontrol.html | AWS::QuickSight::Analysis.FilterRelativeDateTimeControl}
 */
export interface QuickSightAnalysisFilterRelativeDateTimeControl {
  FilterControlId: string;
  DisplayOptions?: QuickSightAnalysisRelativeDateTimeControlDisplayOptions;
  Title: string;
  SourceFilterId: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.FilterScopeConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filterscopeconfiguration.html | AWS::QuickSight::Analysis.FilterScopeConfiguration}
 */
export interface QuickSightAnalysisFilterScopeConfiguration {
  AllSheets?: object;
  SelectedSheets?: QuickSightAnalysisSelectedSheetsFilterScopeConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.FilterSelectableValues
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filterselectablevalues.html | AWS::QuickSight::Analysis.FilterSelectableValues}
 */
export interface QuickSightAnalysisFilterSelectableValues {
  Values?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.FilterSliderControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filterslidercontrol.html | AWS::QuickSight::Analysis.FilterSliderControl}
 */
export interface QuickSightAnalysisFilterSliderControl {
  FilterControlId: string;
  Type?: string;
  StepSize: number;
  DisplayOptions?: QuickSightAnalysisSliderControlDisplayOptions;
  Title: string;
  MaximumValue: number;
  SourceFilterId: string;
  MinimumValue: number;
}
/**
 * Type definition for AWS::QuickSight::Analysis.FilterTextAreaControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filtertextareacontrol.html | AWS::QuickSight::Analysis.FilterTextAreaControl}
 */
export interface QuickSightAnalysisFilterTextAreaControl {
  FilterControlId: string;
  Delimiter?: string;
  DisplayOptions?: QuickSightAnalysisTextAreaControlDisplayOptions;
  Title: string;
  SourceFilterId: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.FilterTextFieldControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filtertextfieldcontrol.html | AWS::QuickSight::Analysis.FilterTextFieldControl}
 */
export interface QuickSightAnalysisFilterTextFieldControl {
  FilterControlId: string;
  DisplayOptions?: QuickSightAnalysisTextFieldControlDisplayOptions;
  Title: string;
  SourceFilterId: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.FontConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-fontconfiguration.html | AWS::QuickSight::Analysis.FontConfiguration}
 */
export interface QuickSightAnalysisFontConfiguration {
  FontStyle?: string;
  FontSize?: QuickSightAnalysisFontSize;
  FontDecoration?: string;
  FontColor?: string;
  FontWeight?: QuickSightAnalysisFontWeight;
}
/**
 * Type definition for AWS::QuickSight::Analysis.FontSize
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-fontsize.html | AWS::QuickSight::Analysis.FontSize}
 */
export interface QuickSightAnalysisFontSize {
  Relative?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.FontWeight
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-fontweight.html | AWS::QuickSight::Analysis.FontWeight}
 */
export interface QuickSightAnalysisFontWeight {
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ForecastComputation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-forecastcomputation.html | AWS::QuickSight::Analysis.ForecastComputation}
 */
export interface QuickSightAnalysisForecastComputation {
  PeriodsBackward?: number;
  PeriodsForward?: number;
  PredictionInterval?: number;
  Seasonality?: string;
  CustomSeasonalityValue?: number;
  Value?: QuickSightAnalysisMeasureField;
  Time?: QuickSightAnalysisDimensionField;
  UpperBoundary?: number;
  ComputationId: string;
  Name?: string;
  LowerBoundary?: number;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ForecastConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-forecastconfiguration.html | AWS::QuickSight::Analysis.ForecastConfiguration}
 */
export interface QuickSightAnalysisForecastConfiguration {
  ForecastProperties?: QuickSightAnalysisTimeBasedForecastProperties;
  Scenario?: QuickSightAnalysisForecastScenario;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ForecastScenario
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-forecastscenario.html | AWS::QuickSight::Analysis.ForecastScenario}
 */
export interface QuickSightAnalysisForecastScenario {
  WhatIfRangeScenario?: QuickSightAnalysisWhatIfRangeScenario;
  WhatIfPointScenario?: QuickSightAnalysisWhatIfPointScenario;
}
/**
 * Type definition for AWS::QuickSight::Analysis.FormatConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-formatconfiguration.html | AWS::QuickSight::Analysis.FormatConfiguration}
 */
export interface QuickSightAnalysisFormatConfiguration {
  NumberFormatConfiguration?: QuickSightAnalysisNumberFormatConfiguration;
  DateTimeFormatConfiguration?: QuickSightAnalysisDateTimeFormatConfiguration;
  StringFormatConfiguration?: QuickSightAnalysisStringFormatConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.FreeFormLayoutCanvasSizeOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-freeformlayoutcanvassizeoptions.html | AWS::QuickSight::Analysis.FreeFormLayoutCanvasSizeOptions}
 */
export interface QuickSightAnalysisFreeFormLayoutCanvasSizeOptions {
  ScreenCanvasSizeOptions?: QuickSightAnalysisFreeFormLayoutScreenCanvasSizeOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.FreeFormLayoutConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-freeformlayoutconfiguration.html | AWS::QuickSight::Analysis.FreeFormLayoutConfiguration}
 */
export interface QuickSightAnalysisFreeFormLayoutConfiguration {
  CanvasSizeOptions?: QuickSightAnalysisFreeFormLayoutCanvasSizeOptions;
  Elements: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.FreeFormLayoutElement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-freeformlayoutelement.html | AWS::QuickSight::Analysis.FreeFormLayoutElement}
 */
export interface QuickSightAnalysisFreeFormLayoutElement {
  ElementType: string;
  BorderStyle?: QuickSightAnalysisFreeFormLayoutElementBorderStyle;
  Height: string;
  Visibility?: string;
  RenderingRules?: any[];
  YAxisLocation: string;
  LoadingAnimation?: QuickSightAnalysisLoadingAnimation;
  Width: string;
  BackgroundStyle?: QuickSightAnalysisFreeFormLayoutElementBackgroundStyle;
  ElementId: string;
  XAxisLocation: string;
  SelectedBorderStyle?: QuickSightAnalysisFreeFormLayoutElementBorderStyle;
}
/**
 * Type definition for AWS::QuickSight::Analysis.FreeFormLayoutElementBackgroundStyle
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-freeformlayoutelementbackgroundstyle.html | AWS::QuickSight::Analysis.FreeFormLayoutElementBackgroundStyle}
 */
export interface QuickSightAnalysisFreeFormLayoutElementBackgroundStyle {
  Color?: string;
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.FreeFormLayoutElementBorderStyle
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-freeformlayoutelementborderstyle.html | AWS::QuickSight::Analysis.FreeFormLayoutElementBorderStyle}
 */
export interface QuickSightAnalysisFreeFormLayoutElementBorderStyle {
  Color?: string;
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.FreeFormLayoutScreenCanvasSizeOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-freeformlayoutscreencanvassizeoptions.html | AWS::QuickSight::Analysis.FreeFormLayoutScreenCanvasSizeOptions}
 */
export interface QuickSightAnalysisFreeFormLayoutScreenCanvasSizeOptions {
  OptimizedViewPortWidth: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.FreeFormSectionLayoutConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-freeformsectionlayoutconfiguration.html | AWS::QuickSight::Analysis.FreeFormSectionLayoutConfiguration}
 */
export interface QuickSightAnalysisFreeFormSectionLayoutConfiguration {
  Elements: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.FunnelChartAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-funnelchartaggregatedfieldwells.html | AWS::QuickSight::Analysis.FunnelChartAggregatedFieldWells}
 */
export interface QuickSightAnalysisFunnelChartAggregatedFieldWells {
  Category?: any[];
  Values?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.FunnelChartConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-funnelchartconfiguration.html | AWS::QuickSight::Analysis.FunnelChartConfiguration}
 */
export interface QuickSightAnalysisFunnelChartConfiguration {
  SortConfiguration?: QuickSightAnalysisFunnelChartSortConfiguration;
  DataLabelOptions?: QuickSightAnalysisFunnelChartDataLabelOptions;
  CategoryLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  FieldWells?: QuickSightAnalysisFunnelChartFieldWells;
  Tooltip?: QuickSightAnalysisTooltipOptions;
  ValueLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  VisualPalette?: QuickSightAnalysisVisualPalette;
}
/**
 * Type definition for AWS::QuickSight::Analysis.FunnelChartDataLabelOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-funnelchartdatalabeloptions.html | AWS::QuickSight::Analysis.FunnelChartDataLabelOptions}
 */
export interface QuickSightAnalysisFunnelChartDataLabelOptions {
  MeasureLabelVisibility?: string;
  Position?: string;
  Visibility?: string;
  CategoryLabelVisibility?: string;
  LabelColor?: string;
  MeasureDataLabelStyle?: string;
  LabelFontConfiguration?: QuickSightAnalysisFontConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.FunnelChartFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-funnelchartfieldwells.html | AWS::QuickSight::Analysis.FunnelChartFieldWells}
 */
export interface QuickSightAnalysisFunnelChartFieldWells {
  FunnelChartAggregatedFieldWells?: QuickSightAnalysisFunnelChartAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Analysis.FunnelChartSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-funnelchartsortconfiguration.html | AWS::QuickSight::Analysis.FunnelChartSortConfiguration}
 */
export interface QuickSightAnalysisFunnelChartSortConfiguration {
  CategoryItemsLimit?: QuickSightAnalysisItemsLimitConfiguration;
  CategorySort?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.FunnelChartVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-funnelchartvisual.html | AWS::QuickSight::Analysis.FunnelChartVisual}
 */
export interface QuickSightAnalysisFunnelChartVisual {
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightAnalysisFunnelChartConfiguration;
  Actions?: any[];
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.GaugeChartArcConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-gaugechartarcconditionalformatting.html | AWS::QuickSight::Analysis.GaugeChartArcConditionalFormatting}
 */
export interface QuickSightAnalysisGaugeChartArcConditionalFormatting {
  ForegroundColor?: QuickSightAnalysisConditionalFormattingColor;
}
/**
 * Type definition for AWS::QuickSight::Analysis.GaugeChartConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-gaugechartconditionalformatting.html | AWS::QuickSight::Analysis.GaugeChartConditionalFormatting}
 */
export interface QuickSightAnalysisGaugeChartConditionalFormatting {
  ConditionalFormattingOptions?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.GaugeChartConditionalFormattingOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-gaugechartconditionalformattingoption.html | AWS::QuickSight::Analysis.GaugeChartConditionalFormattingOption}
 */
export interface QuickSightAnalysisGaugeChartConditionalFormattingOption {
  Arc?: QuickSightAnalysisGaugeChartArcConditionalFormatting;
  PrimaryValue?: QuickSightAnalysisGaugeChartPrimaryValueConditionalFormatting;
}
/**
 * Type definition for AWS::QuickSight::Analysis.GaugeChartConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-gaugechartconfiguration.html | AWS::QuickSight::Analysis.GaugeChartConfiguration}
 */
export interface QuickSightAnalysisGaugeChartConfiguration {
  DataLabels?: QuickSightAnalysisDataLabelOptions;
  FieldWells?: QuickSightAnalysisGaugeChartFieldWells;
  TooltipOptions?: QuickSightAnalysisTooltipOptions;
  GaugeChartOptions?: QuickSightAnalysisGaugeChartOptions;
  VisualPalette?: QuickSightAnalysisVisualPalette;
}
/**
 * Type definition for AWS::QuickSight::Analysis.GaugeChartFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-gaugechartfieldwells.html | AWS::QuickSight::Analysis.GaugeChartFieldWells}
 */
export interface QuickSightAnalysisGaugeChartFieldWells {
  TargetValues?: any[];
  Values?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.GaugeChartOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-gaugechartoptions.html | AWS::QuickSight::Analysis.GaugeChartOptions}
 */
export interface QuickSightAnalysisGaugeChartOptions {
  Arc?: QuickSightAnalysisArcConfiguration;
  Comparison?: QuickSightAnalysisComparisonConfiguration;
  PrimaryValueDisplayType?: string;
  ArcAxis?: QuickSightAnalysisArcAxisConfiguration;
  PrimaryValueFontConfiguration?: QuickSightAnalysisFontConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.GaugeChartPrimaryValueConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-gaugechartprimaryvalueconditionalformatting.html | AWS::QuickSight::Analysis.GaugeChartPrimaryValueConditionalFormatting}
 */
export interface QuickSightAnalysisGaugeChartPrimaryValueConditionalFormatting {
  TextColor?: QuickSightAnalysisConditionalFormattingColor;
  Icon?: QuickSightAnalysisConditionalFormattingIcon;
}
/**
 * Type definition for AWS::QuickSight::Analysis.GaugeChartVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-gaugechartvisual.html | AWS::QuickSight::Analysis.GaugeChartVisual}
 */
export interface QuickSightAnalysisGaugeChartVisual {
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
  ConditionalFormatting?: QuickSightAnalysisGaugeChartConditionalFormatting;
  VisualId: string;
  ChartConfiguration?: QuickSightAnalysisGaugeChartConfiguration;
  Actions?: any[];
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.GeospatialCoordinateBounds
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-geospatialcoordinatebounds.html | AWS::QuickSight::Analysis.GeospatialCoordinateBounds}
 */
export interface QuickSightAnalysisGeospatialCoordinateBounds {
  West: number;
  South: number;
  North: number;
  East: number;
}
/**
 * Type definition for AWS::QuickSight::Analysis.GeospatialHeatmapColorScale
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-geospatialheatmapcolorscale.html | AWS::QuickSight::Analysis.GeospatialHeatmapColorScale}
 */
export interface QuickSightAnalysisGeospatialHeatmapColorScale {
  Colors?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.GeospatialHeatmapConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-geospatialheatmapconfiguration.html | AWS::QuickSight::Analysis.GeospatialHeatmapConfiguration}
 */
export interface QuickSightAnalysisGeospatialHeatmapConfiguration {
  HeatmapColor?: QuickSightAnalysisGeospatialHeatmapColorScale;
}
/**
 * Type definition for AWS::QuickSight::Analysis.GeospatialHeatmapDataColor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-geospatialheatmapdatacolor.html | AWS::QuickSight::Analysis.GeospatialHeatmapDataColor}
 */
export interface QuickSightAnalysisGeospatialHeatmapDataColor {
  Color: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.GeospatialMapAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-geospatialmapaggregatedfieldwells.html | AWS::QuickSight::Analysis.GeospatialMapAggregatedFieldWells}
 */
export interface QuickSightAnalysisGeospatialMapAggregatedFieldWells {
  Colors?: any[];
  Values?: any[];
  Geospatial?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.GeospatialMapConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-geospatialmapconfiguration.html | AWS::QuickSight::Analysis.GeospatialMapConfiguration}
 */
export interface QuickSightAnalysisGeospatialMapConfiguration {
  Legend?: QuickSightAnalysisLegendOptions;
  MapStyleOptions?: QuickSightAnalysisGeospatialMapStyleOptions;
  FieldWells?: QuickSightAnalysisGeospatialMapFieldWells;
  Tooltip?: QuickSightAnalysisTooltipOptions;
  WindowOptions?: QuickSightAnalysisGeospatialWindowOptions;
  PointStyleOptions?: QuickSightAnalysisGeospatialPointStyleOptions;
  VisualPalette?: QuickSightAnalysisVisualPalette;
}
/**
 * Type definition for AWS::QuickSight::Analysis.GeospatialMapFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-geospatialmapfieldwells.html | AWS::QuickSight::Analysis.GeospatialMapFieldWells}
 */
export interface QuickSightAnalysisGeospatialMapFieldWells {
  GeospatialMapAggregatedFieldWells?: QuickSightAnalysisGeospatialMapAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Analysis.GeospatialMapStyleOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-geospatialmapstyleoptions.html | AWS::QuickSight::Analysis.GeospatialMapStyleOptions}
 */
export interface QuickSightAnalysisGeospatialMapStyleOptions {
  BaseMapStyle?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.GeospatialMapVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-geospatialmapvisual.html | AWS::QuickSight::Analysis.GeospatialMapVisual}
 */
export interface QuickSightAnalysisGeospatialMapVisual {
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightAnalysisGeospatialMapConfiguration;
  Actions?: any[];
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.GeospatialPointStyleOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-geospatialpointstyleoptions.html | AWS::QuickSight::Analysis.GeospatialPointStyleOptions}
 */
export interface QuickSightAnalysisGeospatialPointStyleOptions {
  SelectedPointStyle?: string;
  ClusterMarkerConfiguration?: QuickSightAnalysisClusterMarkerConfiguration;
  HeatmapConfiguration?: QuickSightAnalysisGeospatialHeatmapConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.GeospatialWindowOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-geospatialwindowoptions.html | AWS::QuickSight::Analysis.GeospatialWindowOptions}
 */
export interface QuickSightAnalysisGeospatialWindowOptions {
  Bounds?: QuickSightAnalysisGeospatialCoordinateBounds;
  MapZoomMode?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.GlobalTableBorderOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-globaltableborderoptions.html | AWS::QuickSight::Analysis.GlobalTableBorderOptions}
 */
export interface QuickSightAnalysisGlobalTableBorderOptions {
  UniformBorder?: QuickSightAnalysisTableBorderOptions;
  SideSpecificBorder?: QuickSightAnalysisTableSideBorderOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.GradientColor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-gradientcolor.html | AWS::QuickSight::Analysis.GradientColor}
 */
export interface QuickSightAnalysisGradientColor {
  Stops?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.GradientStop
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-gradientstop.html | AWS::QuickSight::Analysis.GradientStop}
 */
export interface QuickSightAnalysisGradientStop {
  GradientOffset: number;
  DataValue?: number;
  Color?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.GridLayoutCanvasSizeOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-gridlayoutcanvassizeoptions.html | AWS::QuickSight::Analysis.GridLayoutCanvasSizeOptions}
 */
export interface QuickSightAnalysisGridLayoutCanvasSizeOptions {
  ScreenCanvasSizeOptions?: QuickSightAnalysisGridLayoutScreenCanvasSizeOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.GridLayoutConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-gridlayoutconfiguration.html | AWS::QuickSight::Analysis.GridLayoutConfiguration}
 */
export interface QuickSightAnalysisGridLayoutConfiguration {
  CanvasSizeOptions?: QuickSightAnalysisGridLayoutCanvasSizeOptions;
  Elements: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.GridLayoutElement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-gridlayoutelement.html | AWS::QuickSight::Analysis.GridLayoutElement}
 */
export interface QuickSightAnalysisGridLayoutElement {
  ElementType: string;
  ColumnSpan: number;
  ColumnIndex?: number;
  RowIndex?: number;
  RowSpan: number;
  ElementId: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.GridLayoutScreenCanvasSizeOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-gridlayoutscreencanvassizeoptions.html | AWS::QuickSight::Analysis.GridLayoutScreenCanvasSizeOptions}
 */
export interface QuickSightAnalysisGridLayoutScreenCanvasSizeOptions {
  OptimizedViewPortWidth?: string;
  ResizeOption: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.GrowthRateComputation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-growthratecomputation.html | AWS::QuickSight::Analysis.GrowthRateComputation}
 */
export interface QuickSightAnalysisGrowthRateComputation {
  Value?: QuickSightAnalysisMeasureField;
  Time?: QuickSightAnalysisDimensionField;
  PeriodSize?: number;
  ComputationId: string;
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.HeaderFooterSectionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-headerfootersectionconfiguration.html | AWS::QuickSight::Analysis.HeaderFooterSectionConfiguration}
 */
export interface QuickSightAnalysisHeaderFooterSectionConfiguration {
  Layout: QuickSightAnalysisSectionLayoutConfiguration;
  Style?: QuickSightAnalysisSectionStyle;
  SectionId: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.HeatMapAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-heatmapaggregatedfieldwells.html | AWS::QuickSight::Analysis.HeatMapAggregatedFieldWells}
 */
export interface QuickSightAnalysisHeatMapAggregatedFieldWells {
  Values?: any[];
  Columns?: any[];
  Rows?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.HeatMapConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-heatmapconfiguration.html | AWS::QuickSight::Analysis.HeatMapConfiguration}
 */
export interface QuickSightAnalysisHeatMapConfiguration {
  SortConfiguration?: QuickSightAnalysisHeatMapSortConfiguration;
  ColumnLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  Legend?: QuickSightAnalysisLegendOptions;
  DataLabels?: QuickSightAnalysisDataLabelOptions;
  FieldWells?: QuickSightAnalysisHeatMapFieldWells;
  Tooltip?: QuickSightAnalysisTooltipOptions;
  ColorScale?: QuickSightAnalysisColorScale;
  RowLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.HeatMapFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-heatmapfieldwells.html | AWS::QuickSight::Analysis.HeatMapFieldWells}
 */
export interface QuickSightAnalysisHeatMapFieldWells {
  HeatMapAggregatedFieldWells?: QuickSightAnalysisHeatMapAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Analysis.HeatMapSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-heatmapsortconfiguration.html | AWS::QuickSight::Analysis.HeatMapSortConfiguration}
 */
export interface QuickSightAnalysisHeatMapSortConfiguration {
  HeatMapRowSort?: any[];
  HeatMapRowItemsLimitConfiguration?: QuickSightAnalysisItemsLimitConfiguration;
  HeatMapColumnItemsLimitConfiguration?: QuickSightAnalysisItemsLimitConfiguration;
  HeatMapColumnSort?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.HeatMapVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-heatmapvisual.html | AWS::QuickSight::Analysis.HeatMapVisual}
 */
export interface QuickSightAnalysisHeatMapVisual {
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightAnalysisHeatMapConfiguration;
  Actions?: any[];
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.HistogramAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-histogramaggregatedfieldwells.html | AWS::QuickSight::Analysis.HistogramAggregatedFieldWells}
 */
export interface QuickSightAnalysisHistogramAggregatedFieldWells {
  Values?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.HistogramBinOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-histogrambinoptions.html | AWS::QuickSight::Analysis.HistogramBinOptions}
 */
export interface QuickSightAnalysisHistogramBinOptions {
  BinWidth?: QuickSightAnalysisBinWidthOptions;
  StartValue?: number;
  SelectedBinType?: string;
  BinCount?: QuickSightAnalysisBinCountOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.HistogramConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-histogramconfiguration.html | AWS::QuickSight::Analysis.HistogramConfiguration}
 */
export interface QuickSightAnalysisHistogramConfiguration {
  YAxisDisplayOptions?: QuickSightAnalysisAxisDisplayOptions;
  DataLabels?: QuickSightAnalysisDataLabelOptions;
  BinOptions?: QuickSightAnalysisHistogramBinOptions;
  FieldWells?: QuickSightAnalysisHistogramFieldWells;
  Tooltip?: QuickSightAnalysisTooltipOptions;
  XAxisLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  VisualPalette?: QuickSightAnalysisVisualPalette;
  XAxisDisplayOptions?: QuickSightAnalysisAxisDisplayOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.HistogramFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-histogramfieldwells.html | AWS::QuickSight::Analysis.HistogramFieldWells}
 */
export interface QuickSightAnalysisHistogramFieldWells {
  HistogramAggregatedFieldWells?: QuickSightAnalysisHistogramAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Analysis.HistogramVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-histogramvisual.html | AWS::QuickSight::Analysis.HistogramVisual}
 */
export interface QuickSightAnalysisHistogramVisual {
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightAnalysisHistogramConfiguration;
  Actions?: any[];
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.InsightConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-insightconfiguration.html | AWS::QuickSight::Analysis.InsightConfiguration}
 */
export interface QuickSightAnalysisInsightConfiguration {
  Computations?: any[];
  CustomNarrative?: QuickSightAnalysisCustomNarrativeOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.InsightVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-insightvisual.html | AWS::QuickSight::Analysis.InsightVisual}
 */
export interface QuickSightAnalysisInsightVisual {
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
  VisualId: string;
  Actions?: any[];
  DataSetIdentifier: string;
  InsightConfiguration?: QuickSightAnalysisInsightConfiguration;
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.IntegerDefaultValues
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-integerdefaultvalues.html | AWS::QuickSight::Analysis.IntegerDefaultValues}
 */
export interface QuickSightAnalysisIntegerDefaultValues {
  DynamicValue?: QuickSightAnalysisDynamicDefaultValue;
  StaticValues?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.IntegerParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-integerparameter.html | AWS::QuickSight::Analysis.IntegerParameter}
 */
export interface QuickSightAnalysisIntegerParameter {
  Values: any[];
  Name: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.IntegerParameterDeclaration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-integerparameterdeclaration.html | AWS::QuickSight::Analysis.IntegerParameterDeclaration}
 */
export interface QuickSightAnalysisIntegerParameterDeclaration {
  MappedDataSetParameters?: any[];
  DefaultValues?: QuickSightAnalysisIntegerDefaultValues;
  ParameterValueType: string;
  ValueWhenUnset?: QuickSightAnalysisIntegerValueWhenUnsetConfiguration;
  Name: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.IntegerValueWhenUnsetConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-integervaluewhenunsetconfiguration.html | AWS::QuickSight::Analysis.IntegerValueWhenUnsetConfiguration}
 */
export interface QuickSightAnalysisIntegerValueWhenUnsetConfiguration {
  ValueWhenUnsetOption?: string;
  CustomValue?: number;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ItemsLimitConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-itemslimitconfiguration.html | AWS::QuickSight::Analysis.ItemsLimitConfiguration}
 */
export interface QuickSightAnalysisItemsLimitConfiguration {
  ItemsLimit?: number;
  OtherCategories?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.KPIActualValueConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-kpiactualvalueconditionalformatting.html | AWS::QuickSight::Analysis.KPIActualValueConditionalFormatting}
 */
export interface QuickSightAnalysisKPIActualValueConditionalFormatting {
  TextColor?: QuickSightAnalysisConditionalFormattingColor;
  Icon?: QuickSightAnalysisConditionalFormattingIcon;
}
/**
 * Type definition for AWS::QuickSight::Analysis.KPIComparisonValueConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-kpicomparisonvalueconditionalformatting.html | AWS::QuickSight::Analysis.KPIComparisonValueConditionalFormatting}
 */
export interface QuickSightAnalysisKPIComparisonValueConditionalFormatting {
  TextColor?: QuickSightAnalysisConditionalFormattingColor;
  Icon?: QuickSightAnalysisConditionalFormattingIcon;
}
/**
 * Type definition for AWS::QuickSight::Analysis.KPIConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-kpiconditionalformatting.html | AWS::QuickSight::Analysis.KPIConditionalFormatting}
 */
export interface QuickSightAnalysisKPIConditionalFormatting {
  ConditionalFormattingOptions?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.KPIConditionalFormattingOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-kpiconditionalformattingoption.html | AWS::QuickSight::Analysis.KPIConditionalFormattingOption}
 */
export interface QuickSightAnalysisKPIConditionalFormattingOption {
  PrimaryValue?: QuickSightAnalysisKPIPrimaryValueConditionalFormatting;
  ActualValue?: QuickSightAnalysisKPIActualValueConditionalFormatting;
  ComparisonValue?: QuickSightAnalysisKPIComparisonValueConditionalFormatting;
  ProgressBar?: QuickSightAnalysisKPIProgressBarConditionalFormatting;
}
/**
 * Type definition for AWS::QuickSight::Analysis.KPIConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-kpiconfiguration.html | AWS::QuickSight::Analysis.KPIConfiguration}
 */
export interface QuickSightAnalysisKPIConfiguration {
  SortConfiguration?: QuickSightAnalysisKPISortConfiguration;
  KPIOptions?: QuickSightAnalysisKPIOptions;
  FieldWells?: QuickSightAnalysisKPIFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Analysis.KPIFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-kpifieldwells.html | AWS::QuickSight::Analysis.KPIFieldWells}
 */
export interface QuickSightAnalysisKPIFieldWells {
  TargetValues?: any[];
  TrendGroups?: any[];
  Values?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.KPIOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-kpioptions.html | AWS::QuickSight::Analysis.KPIOptions}
 */
export interface QuickSightAnalysisKPIOptions {
  SecondaryValueFontConfiguration?: QuickSightAnalysisFontConfiguration;
  VisualLayoutOptions?: QuickSightAnalysisKPIVisualLayoutOptions;
  TrendArrows?: QuickSightAnalysisTrendArrowOptions;
  SecondaryValue?: QuickSightAnalysisSecondaryValueOptions;
  Comparison?: QuickSightAnalysisComparisonConfiguration;
  PrimaryValueDisplayType?: string;
  ProgressBar?: QuickSightAnalysisProgressBarOptions;
  PrimaryValueFontConfiguration?: QuickSightAnalysisFontConfiguration;
  Sparkline?: QuickSightAnalysisKPISparklineOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.KPIPrimaryValueConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-kpiprimaryvalueconditionalformatting.html | AWS::QuickSight::Analysis.KPIPrimaryValueConditionalFormatting}
 */
export interface QuickSightAnalysisKPIPrimaryValueConditionalFormatting {
  TextColor?: QuickSightAnalysisConditionalFormattingColor;
  Icon?: QuickSightAnalysisConditionalFormattingIcon;
}
/**
 * Type definition for AWS::QuickSight::Analysis.KPIProgressBarConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-kpiprogressbarconditionalformatting.html | AWS::QuickSight::Analysis.KPIProgressBarConditionalFormatting}
 */
export interface QuickSightAnalysisKPIProgressBarConditionalFormatting {
  ForegroundColor?: QuickSightAnalysisConditionalFormattingColor;
}
/**
 * Type definition for AWS::QuickSight::Analysis.KPISortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-kpisortconfiguration.html | AWS::QuickSight::Analysis.KPISortConfiguration}
 */
export interface QuickSightAnalysisKPISortConfiguration {
  TrendGroupSort?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.KPISparklineOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-kpisparklineoptions.html | AWS::QuickSight::Analysis.KPISparklineOptions}
 */
export interface QuickSightAnalysisKPISparklineOptions {
  Type: string;
  Color?: string;
  TooltipVisibility?: string;
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.KPIVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-kpivisual.html | AWS::QuickSight::Analysis.KPIVisual}
 */
export interface QuickSightAnalysisKPIVisual {
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
  ConditionalFormatting?: QuickSightAnalysisKPIConditionalFormatting;
  VisualId: string;
  ChartConfiguration?: QuickSightAnalysisKPIConfiguration;
  Actions?: any[];
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.KPIVisualLayoutOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-kpivisuallayoutoptions.html | AWS::QuickSight::Analysis.KPIVisualLayoutOptions}
 */
export interface QuickSightAnalysisKPIVisualLayoutOptions {
  StandardLayout?: QuickSightAnalysisKPIVisualStandardLayout;
}
/**
 * Type definition for AWS::QuickSight::Analysis.KPIVisualStandardLayout
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-kpivisualstandardlayout.html | AWS::QuickSight::Analysis.KPIVisualStandardLayout}
 */
export interface QuickSightAnalysisKPIVisualStandardLayout {
  Type: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.LabelOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-labeloptions.html | AWS::QuickSight::Analysis.LabelOptions}
 */
export interface QuickSightAnalysisLabelOptions {
  CustomLabel?: string;
  Visibility?: string;
  FontConfiguration?: QuickSightAnalysisFontConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.Layout
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-layout.html | AWS::QuickSight::Analysis.Layout}
 */
export interface QuickSightAnalysisLayout {
  Configuration: QuickSightAnalysisLayoutConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.LayoutConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-layoutconfiguration.html | AWS::QuickSight::Analysis.LayoutConfiguration}
 */
export interface QuickSightAnalysisLayoutConfiguration {
  GridLayout?: QuickSightAnalysisGridLayoutConfiguration;
  FreeFormLayout?: QuickSightAnalysisFreeFormLayoutConfiguration;
  SectionBasedLayout?: QuickSightAnalysisSectionBasedLayoutConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.LegendOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-legendoptions.html | AWS::QuickSight::Analysis.LegendOptions}
 */
export interface QuickSightAnalysisLegendOptions {
  Position?: string;
  Title?: QuickSightAnalysisLabelOptions;
  Visibility?: string;
  Height?: string;
  Width?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.LineChartAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-linechartaggregatedfieldwells.html | AWS::QuickSight::Analysis.LineChartAggregatedFieldWells}
 */
export interface QuickSightAnalysisLineChartAggregatedFieldWells {
  Category?: any[];
  Colors?: any[];
  Values?: any[];
  SmallMultiples?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.LineChartConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-linechartconfiguration.html | AWS::QuickSight::Analysis.LineChartConfiguration}
 */
export interface QuickSightAnalysisLineChartConfiguration {
  SortConfiguration?: QuickSightAnalysisLineChartSortConfiguration;
  Legend?: QuickSightAnalysisLegendOptions;
  ReferenceLines?: any[];
  DataLabels?: QuickSightAnalysisDataLabelOptions;
  Tooltip?: QuickSightAnalysisTooltipOptions;
  SmallMultiplesOptions?: QuickSightAnalysisSmallMultiplesOptions;
  PrimaryYAxisDisplayOptions?: QuickSightAnalysisLineSeriesAxisDisplayOptions;
  VisualPalette?: QuickSightAnalysisVisualPalette;
  XAxisDisplayOptions?: QuickSightAnalysisAxisDisplayOptions;
  DefaultSeriesSettings?: QuickSightAnalysisLineChartDefaultSeriesSettings;
  SecondaryYAxisLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  ForecastConfigurations?: any[];
  Series?: any[];
  Type?: string;
  PrimaryYAxisLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  ContributionAnalysisDefaults?: any[];
  FieldWells?: QuickSightAnalysisLineChartFieldWells;
  SecondaryYAxisDisplayOptions?: QuickSightAnalysisLineSeriesAxisDisplayOptions;
  XAxisLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.LineChartDefaultSeriesSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-linechartdefaultseriessettings.html | AWS::QuickSight::Analysis.LineChartDefaultSeriesSettings}
 */
export interface QuickSightAnalysisLineChartDefaultSeriesSettings {
  LineStyleSettings?: QuickSightAnalysisLineChartLineStyleSettings;
  AxisBinding?: string;
  MarkerStyleSettings?: QuickSightAnalysisLineChartMarkerStyleSettings;
}
/**
 * Type definition for AWS::QuickSight::Analysis.LineChartFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-linechartfieldwells.html | AWS::QuickSight::Analysis.LineChartFieldWells}
 */
export interface QuickSightAnalysisLineChartFieldWells {
  LineChartAggregatedFieldWells?: QuickSightAnalysisLineChartAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Analysis.LineChartLineStyleSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-linechartlinestylesettings.html | AWS::QuickSight::Analysis.LineChartLineStyleSettings}
 */
export interface QuickSightAnalysisLineChartLineStyleSettings {
  LineInterpolation?: string;
  LineStyle?: string;
  LineVisibility?: string;
  LineWidth?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.LineChartMarkerStyleSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-linechartmarkerstylesettings.html | AWS::QuickSight::Analysis.LineChartMarkerStyleSettings}
 */
export interface QuickSightAnalysisLineChartMarkerStyleSettings {
  MarkerShape?: string;
  MarkerSize?: string;
  MarkerVisibility?: string;
  MarkerColor?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.LineChartSeriesSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-linechartseriessettings.html | AWS::QuickSight::Analysis.LineChartSeriesSettings}
 */
export interface QuickSightAnalysisLineChartSeriesSettings {
  LineStyleSettings?: QuickSightAnalysisLineChartLineStyleSettings;
  MarkerStyleSettings?: QuickSightAnalysisLineChartMarkerStyleSettings;
}
/**
 * Type definition for AWS::QuickSight::Analysis.LineChartSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-linechartsortconfiguration.html | AWS::QuickSight::Analysis.LineChartSortConfiguration}
 */
export interface QuickSightAnalysisLineChartSortConfiguration {
  CategoryItemsLimitConfiguration?: QuickSightAnalysisItemsLimitConfiguration;
  ColorItemsLimitConfiguration?: QuickSightAnalysisItemsLimitConfiguration;
  SmallMultiplesSort?: any[];
  CategorySort?: any[];
  SmallMultiplesLimitConfiguration?: QuickSightAnalysisItemsLimitConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.LineChartVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-linechartvisual.html | AWS::QuickSight::Analysis.LineChartVisual}
 */
export interface QuickSightAnalysisLineChartVisual {
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightAnalysisLineChartConfiguration;
  Actions?: any[];
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.LineSeriesAxisDisplayOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-lineseriesaxisdisplayoptions.html | AWS::QuickSight::Analysis.LineSeriesAxisDisplayOptions}
 */
export interface QuickSightAnalysisLineSeriesAxisDisplayOptions {
  MissingDataConfigurations?: any[];
  AxisOptions?: QuickSightAnalysisAxisDisplayOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ListControlDisplayOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-listcontroldisplayoptions.html | AWS::QuickSight::Analysis.ListControlDisplayOptions}
 */
export interface QuickSightAnalysisListControlDisplayOptions {
  TitleOptions?: QuickSightAnalysisLabelOptions;
  SearchOptions?: QuickSightAnalysisListControlSearchOptions;
  SelectAllOptions?: QuickSightAnalysisListControlSelectAllOptions;
  InfoIconLabelOptions?: QuickSightAnalysisSheetControlInfoIconLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ListControlSearchOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-listcontrolsearchoptions.html | AWS::QuickSight::Analysis.ListControlSearchOptions}
 */
export interface QuickSightAnalysisListControlSearchOptions {
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ListControlSelectAllOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-listcontrolselectalloptions.html | AWS::QuickSight::Analysis.ListControlSelectAllOptions}
 */
export interface QuickSightAnalysisListControlSelectAllOptions {
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.LoadingAnimation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-loadinganimation.html | AWS::QuickSight::Analysis.LoadingAnimation}
 */
export interface QuickSightAnalysisLoadingAnimation {
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.LocalNavigationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-localnavigationconfiguration.html | AWS::QuickSight::Analysis.LocalNavigationConfiguration}
 */
export interface QuickSightAnalysisLocalNavigationConfiguration {
  TargetSheetId: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.LongFormatText
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-longformattext.html | AWS::QuickSight::Analysis.LongFormatText}
 */
export interface QuickSightAnalysisLongFormatText {
  RichText?: string;
  PlainText?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.MappedDataSetParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-mappeddatasetparameter.html | AWS::QuickSight::Analysis.MappedDataSetParameter}
 */
export interface QuickSightAnalysisMappedDataSetParameter {
  DataSetParameterName: string;
  DataSetIdentifier: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.MaximumLabelType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-maximumlabeltype.html | AWS::QuickSight::Analysis.MaximumLabelType}
 */
export interface QuickSightAnalysisMaximumLabelType {
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.MaximumMinimumComputation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-maximumminimumcomputation.html | AWS::QuickSight::Analysis.MaximumMinimumComputation}
 */
export interface QuickSightAnalysisMaximumMinimumComputation {
  Type: string;
  Value?: QuickSightAnalysisMeasureField;
  Time?: QuickSightAnalysisDimensionField;
  ComputationId: string;
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.MeasureField
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-measurefield.html | AWS::QuickSight::Analysis.MeasureField}
 */
export interface QuickSightAnalysisMeasureField {
  DateMeasureField?: QuickSightAnalysisDateMeasureField;
  NumericalMeasureField?: QuickSightAnalysisNumericalMeasureField;
  CategoricalMeasureField?: QuickSightAnalysisCategoricalMeasureField;
  CalculatedMeasureField?: QuickSightAnalysisCalculatedMeasureField;
}
/**
 * Type definition for AWS::QuickSight::Analysis.MetricComparisonComputation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-metriccomparisoncomputation.html | AWS::QuickSight::Analysis.MetricComparisonComputation}
 */
export interface QuickSightAnalysisMetricComparisonComputation {
  TargetValue?: QuickSightAnalysisMeasureField;
  Time?: QuickSightAnalysisDimensionField;
  ComputationId: string;
  FromValue?: QuickSightAnalysisMeasureField;
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.MinimumLabelType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-minimumlabeltype.html | AWS::QuickSight::Analysis.MinimumLabelType}
 */
export interface QuickSightAnalysisMinimumLabelType {
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.MissingDataConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-missingdataconfiguration.html | AWS::QuickSight::Analysis.MissingDataConfiguration}
 */
export interface QuickSightAnalysisMissingDataConfiguration {
  TreatmentOption?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.NegativeValueConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-negativevalueconfiguration.html | AWS::QuickSight::Analysis.NegativeValueConfiguration}
 */
export interface QuickSightAnalysisNegativeValueConfiguration {
  DisplayMode: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.NullValueFormatConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-nullvalueformatconfiguration.html | AWS::QuickSight::Analysis.NullValueFormatConfiguration}
 */
export interface QuickSightAnalysisNullValueFormatConfiguration {
  NullString: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.NumberDisplayFormatConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-numberdisplayformatconfiguration.html | AWS::QuickSight::Analysis.NumberDisplayFormatConfiguration}
 */
export interface QuickSightAnalysisNumberDisplayFormatConfiguration {
  NegativeValueConfiguration?: QuickSightAnalysisNegativeValueConfiguration;
  DecimalPlacesConfiguration?: QuickSightAnalysisDecimalPlacesConfiguration;
  NumberScale?: string;
  NullValueFormatConfiguration?: QuickSightAnalysisNullValueFormatConfiguration;
  Suffix?: string;
  SeparatorConfiguration?: QuickSightAnalysisNumericSeparatorConfiguration;
  Prefix?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.NumberFormatConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-numberformatconfiguration.html | AWS::QuickSight::Analysis.NumberFormatConfiguration}
 */
export interface QuickSightAnalysisNumberFormatConfiguration {
  FormatConfiguration?: QuickSightAnalysisNumericFormatConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.NumericAxisOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-numericaxisoptions.html | AWS::QuickSight::Analysis.NumericAxisOptions}
 */
export interface QuickSightAnalysisNumericAxisOptions {
  Scale?: QuickSightAnalysisAxisScale;
  Range?: QuickSightAnalysisAxisDisplayRange;
}
/**
 * Type definition for AWS::QuickSight::Analysis.NumericEqualityDrillDownFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-numericequalitydrilldownfilter.html | AWS::QuickSight::Analysis.NumericEqualityDrillDownFilter}
 */
export interface QuickSightAnalysisNumericEqualityDrillDownFilter {
  Column: QuickSightAnalysisColumnIdentifier;
  Value: number;
}
/**
 * Type definition for AWS::QuickSight::Analysis.NumericEqualityFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-numericequalityfilter.html | AWS::QuickSight::Analysis.NumericEqualityFilter}
 */
export interface QuickSightAnalysisNumericEqualityFilter {
  AggregationFunction?: QuickSightAnalysisAggregationFunction;
  Column: QuickSightAnalysisColumnIdentifier;
  Value?: number;
  ParameterName?: string;
  NullOption: string;
  MatchOperator: string;
  SelectAllOptions?: string;
  FilterId: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.NumericFormatConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-numericformatconfiguration.html | AWS::QuickSight::Analysis.NumericFormatConfiguration}
 */
export interface QuickSightAnalysisNumericFormatConfiguration {
  NumberDisplayFormatConfiguration?: QuickSightAnalysisNumberDisplayFormatConfiguration;
  CurrencyDisplayFormatConfiguration?: QuickSightAnalysisCurrencyDisplayFormatConfiguration;
  PercentageDisplayFormatConfiguration?: QuickSightAnalysisPercentageDisplayFormatConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.NumericRangeFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-numericrangefilter.html | AWS::QuickSight::Analysis.NumericRangeFilter}
 */
export interface QuickSightAnalysisNumericRangeFilter {
  AggregationFunction?: QuickSightAnalysisAggregationFunction;
  Column: QuickSightAnalysisColumnIdentifier;
  IncludeMaximum?: boolean;
  RangeMinimum?: QuickSightAnalysisNumericRangeFilterValue;
  NullOption: string;
  SelectAllOptions?: string;
  FilterId: string;
  RangeMaximum?: QuickSightAnalysisNumericRangeFilterValue;
  IncludeMinimum?: boolean;
}
/**
 * Type definition for AWS::QuickSight::Analysis.NumericRangeFilterValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-numericrangefiltervalue.html | AWS::QuickSight::Analysis.NumericRangeFilterValue}
 */
export interface QuickSightAnalysisNumericRangeFilterValue {
  StaticValue?: number;
  Parameter?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.NumericSeparatorConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-numericseparatorconfiguration.html | AWS::QuickSight::Analysis.NumericSeparatorConfiguration}
 */
export interface QuickSightAnalysisNumericSeparatorConfiguration {
  DecimalSeparator?: string;
  ThousandsSeparator?: QuickSightAnalysisThousandSeparatorOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.NumericalAggregationFunction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-numericalaggregationfunction.html | AWS::QuickSight::Analysis.NumericalAggregationFunction}
 */
export interface QuickSightAnalysisNumericalAggregationFunction {
  PercentileAggregation?: QuickSightAnalysisPercentileAggregation;
  SimpleNumericalAggregation?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.NumericalDimensionField
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-numericaldimensionfield.html | AWS::QuickSight::Analysis.NumericalDimensionField}
 */
export interface QuickSightAnalysisNumericalDimensionField {
  HierarchyId?: string;
  FormatConfiguration?: QuickSightAnalysisNumberFormatConfiguration;
  Column: QuickSightAnalysisColumnIdentifier;
  FieldId: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.NumericalMeasureField
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-numericalmeasurefield.html | AWS::QuickSight::Analysis.NumericalMeasureField}
 */
export interface QuickSightAnalysisNumericalMeasureField {
  AggregationFunction?: QuickSightAnalysisNumericalAggregationFunction;
  FormatConfiguration?: QuickSightAnalysisNumberFormatConfiguration;
  Column: QuickSightAnalysisColumnIdentifier;
  FieldId: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.PaginationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-paginationconfiguration.html | AWS::QuickSight::Analysis.PaginationConfiguration}
 */
export interface QuickSightAnalysisPaginationConfiguration {
  PageSize: number;
  PageNumber: number;
}
/**
 * Type definition for AWS::QuickSight::Analysis.PanelConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-panelconfiguration.html | AWS::QuickSight::Analysis.PanelConfiguration}
 */
export interface QuickSightAnalysisPanelConfiguration {
  BorderThickness?: string;
  BorderStyle?: string;
  GutterSpacing?: string;
  BackgroundVisibility?: string;
  BorderVisibility?: string;
  BorderColor?: string;
  Title?: QuickSightAnalysisPanelTitleOptions;
  GutterVisibility?: string;
  BackgroundColor?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.PanelTitleOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-paneltitleoptions.html | AWS::QuickSight::Analysis.PanelTitleOptions}
 */
export interface QuickSightAnalysisPanelTitleOptions {
  Visibility?: string;
  FontConfiguration?: QuickSightAnalysisFontConfiguration;
  HorizontalTextAlignment?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ParameterControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-parametercontrol.html | AWS::QuickSight::Analysis.ParameterControl}
 */
export interface QuickSightAnalysisParameterControl {
  Slider?: QuickSightAnalysisParameterSliderControl;
  TextArea?: QuickSightAnalysisParameterTextAreaControl;
  Dropdown?: QuickSightAnalysisParameterDropDownControl;
  TextField?: QuickSightAnalysisParameterTextFieldControl;
  List?: QuickSightAnalysisParameterListControl;
  DateTimePicker?: QuickSightAnalysisParameterDateTimePickerControl;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ParameterDateTimePickerControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-parameterdatetimepickercontrol.html | AWS::QuickSight::Analysis.ParameterDateTimePickerControl}
 */
export interface QuickSightAnalysisParameterDateTimePickerControl {
  ParameterControlId: string;
  DisplayOptions?: QuickSightAnalysisDateTimePickerControlDisplayOptions;
  SourceParameterName: string;
  Title: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ParameterDeclaration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-parameterdeclaration.html | AWS::QuickSight::Analysis.ParameterDeclaration}
 */
export interface QuickSightAnalysisParameterDeclaration {
  StringParameterDeclaration?: QuickSightAnalysisStringParameterDeclaration;
  DateTimeParameterDeclaration?: QuickSightAnalysisDateTimeParameterDeclaration;
  DecimalParameterDeclaration?: QuickSightAnalysisDecimalParameterDeclaration;
  IntegerParameterDeclaration?: QuickSightAnalysisIntegerParameterDeclaration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ParameterDropDownControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-parameterdropdowncontrol.html | AWS::QuickSight::Analysis.ParameterDropDownControl}
 */
export interface QuickSightAnalysisParameterDropDownControl {
  ParameterControlId: string;
  Type?: string;
  DisplayOptions?: QuickSightAnalysisDropDownControlDisplayOptions;
  SourceParameterName: string;
  CascadingControlConfiguration?: QuickSightAnalysisCascadingControlConfiguration;
  Title: string;
  SelectableValues?: QuickSightAnalysisParameterSelectableValues;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ParameterListControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-parameterlistcontrol.html | AWS::QuickSight::Analysis.ParameterListControl}
 */
export interface QuickSightAnalysisParameterListControl {
  ParameterControlId: string;
  Type?: string;
  DisplayOptions?: QuickSightAnalysisListControlDisplayOptions;
  SourceParameterName: string;
  CascadingControlConfiguration?: QuickSightAnalysisCascadingControlConfiguration;
  Title: string;
  SelectableValues?: QuickSightAnalysisParameterSelectableValues;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ParameterSelectableValues
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-parameterselectablevalues.html | AWS::QuickSight::Analysis.ParameterSelectableValues}
 */
export interface QuickSightAnalysisParameterSelectableValues {
  LinkToDataSetColumn?: QuickSightAnalysisColumnIdentifier;
  Values?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.ParameterSliderControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-parameterslidercontrol.html | AWS::QuickSight::Analysis.ParameterSliderControl}
 */
export interface QuickSightAnalysisParameterSliderControl {
  ParameterControlId: string;
  StepSize: number;
  DisplayOptions?: QuickSightAnalysisSliderControlDisplayOptions;
  SourceParameterName: string;
  Title: string;
  MaximumValue: number;
  MinimumValue: number;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ParameterTextAreaControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-parametertextareacontrol.html | AWS::QuickSight::Analysis.ParameterTextAreaControl}
 */
export interface QuickSightAnalysisParameterTextAreaControl {
  ParameterControlId: string;
  Delimiter?: string;
  DisplayOptions?: QuickSightAnalysisTextAreaControlDisplayOptions;
  SourceParameterName: string;
  Title: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ParameterTextFieldControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-parametertextfieldcontrol.html | AWS::QuickSight::Analysis.ParameterTextFieldControl}
 */
export interface QuickSightAnalysisParameterTextFieldControl {
  ParameterControlId: string;
  DisplayOptions?: QuickSightAnalysisTextFieldControlDisplayOptions;
  SourceParameterName: string;
  Title: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.Parameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-parameters.html | AWS::QuickSight::Analysis.Parameters}
 */
export interface QuickSightAnalysisParameters {
  StringParameters?: any[];
  DecimalParameters?: any[];
  IntegerParameters?: any[];
  DateTimeParameters?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.PercentVisibleRange
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-percentvisiblerange.html | AWS::QuickSight::Analysis.PercentVisibleRange}
 */
export interface QuickSightAnalysisPercentVisibleRange {
  From?: number;
  To?: number;
}
/**
 * Type definition for AWS::QuickSight::Analysis.PercentageDisplayFormatConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-percentagedisplayformatconfiguration.html | AWS::QuickSight::Analysis.PercentageDisplayFormatConfiguration}
 */
export interface QuickSightAnalysisPercentageDisplayFormatConfiguration {
  NegativeValueConfiguration?: QuickSightAnalysisNegativeValueConfiguration;
  DecimalPlacesConfiguration?: QuickSightAnalysisDecimalPlacesConfiguration;
  NullValueFormatConfiguration?: QuickSightAnalysisNullValueFormatConfiguration;
  Suffix?: string;
  SeparatorConfiguration?: QuickSightAnalysisNumericSeparatorConfiguration;
  Prefix?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.PercentileAggregation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-percentileaggregation.html | AWS::QuickSight::Analysis.PercentileAggregation}
 */
export interface QuickSightAnalysisPercentileAggregation {
  PercentileValue?: number;
}
/**
 * Type definition for AWS::QuickSight::Analysis.PeriodOverPeriodComputation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-periodoverperiodcomputation.html | AWS::QuickSight::Analysis.PeriodOverPeriodComputation}
 */
export interface QuickSightAnalysisPeriodOverPeriodComputation {
  Value?: QuickSightAnalysisMeasureField;
  Time?: QuickSightAnalysisDimensionField;
  ComputationId: string;
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.PeriodToDateComputation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-periodtodatecomputation.html | AWS::QuickSight::Analysis.PeriodToDateComputation}
 */
export interface QuickSightAnalysisPeriodToDateComputation {
  PeriodTimeGranularity?: string;
  Value?: QuickSightAnalysisMeasureField;
  Time?: QuickSightAnalysisDimensionField;
  ComputationId: string;
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.PieChartAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-piechartaggregatedfieldwells.html | AWS::QuickSight::Analysis.PieChartAggregatedFieldWells}
 */
export interface QuickSightAnalysisPieChartAggregatedFieldWells {
  Category?: any[];
  Values?: any[];
  SmallMultiples?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.PieChartConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-piechartconfiguration.html | AWS::QuickSight::Analysis.PieChartConfiguration}
 */
export interface QuickSightAnalysisPieChartConfiguration {
  SortConfiguration?: QuickSightAnalysisPieChartSortConfiguration;
  Legend?: QuickSightAnalysisLegendOptions;
  DataLabels?: QuickSightAnalysisDataLabelOptions;
  ContributionAnalysisDefaults?: any[];
  CategoryLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  FieldWells?: QuickSightAnalysisPieChartFieldWells;
  Tooltip?: QuickSightAnalysisTooltipOptions;
  DonutOptions?: QuickSightAnalysisDonutOptions;
  SmallMultiplesOptions?: QuickSightAnalysisSmallMultiplesOptions;
  ValueLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  VisualPalette?: QuickSightAnalysisVisualPalette;
}
/**
 * Type definition for AWS::QuickSight::Analysis.PieChartFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-piechartfieldwells.html | AWS::QuickSight::Analysis.PieChartFieldWells}
 */
export interface QuickSightAnalysisPieChartFieldWells {
  PieChartAggregatedFieldWells?: QuickSightAnalysisPieChartAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Analysis.PieChartSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-piechartsortconfiguration.html | AWS::QuickSight::Analysis.PieChartSortConfiguration}
 */
export interface QuickSightAnalysisPieChartSortConfiguration {
  SmallMultiplesSort?: any[];
  CategoryItemsLimit?: QuickSightAnalysisItemsLimitConfiguration;
  CategorySort?: any[];
  SmallMultiplesLimitConfiguration?: QuickSightAnalysisItemsLimitConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.PieChartVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-piechartvisual.html | AWS::QuickSight::Analysis.PieChartVisual}
 */
export interface QuickSightAnalysisPieChartVisual {
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightAnalysisPieChartConfiguration;
  Actions?: any[];
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.PivotFieldSortOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivotfieldsortoptions.html | AWS::QuickSight::Analysis.PivotFieldSortOptions}
 */
export interface QuickSightAnalysisPivotFieldSortOptions {
  SortBy: QuickSightAnalysisPivotTableSortBy;
  FieldId: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.PivotTableAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottableaggregatedfieldwells.html | AWS::QuickSight::Analysis.PivotTableAggregatedFieldWells}
 */
export interface QuickSightAnalysisPivotTableAggregatedFieldWells {
  Values?: any[];
  Columns?: any[];
  Rows?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.PivotTableCellConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottablecellconditionalformatting.html | AWS::QuickSight::Analysis.PivotTableCellConditionalFormatting}
 */
export interface QuickSightAnalysisPivotTableCellConditionalFormatting {
  Scope?: QuickSightAnalysisPivotTableConditionalFormattingScope;
  Scopes?: any[];
  FieldId: string;
  TextFormat?: QuickSightAnalysisTextConditionalFormat;
}
/**
 * Type definition for AWS::QuickSight::Analysis.PivotTableConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottableconditionalformatting.html | AWS::QuickSight::Analysis.PivotTableConditionalFormatting}
 */
export interface QuickSightAnalysisPivotTableConditionalFormatting {
  ConditionalFormattingOptions?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.PivotTableConditionalFormattingOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottableconditionalformattingoption.html | AWS::QuickSight::Analysis.PivotTableConditionalFormattingOption}
 */
export interface QuickSightAnalysisPivotTableConditionalFormattingOption {
  Cell?: QuickSightAnalysisPivotTableCellConditionalFormatting;
}
/**
 * Type definition for AWS::QuickSight::Analysis.PivotTableConditionalFormattingScope
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottableconditionalformattingscope.html | AWS::QuickSight::Analysis.PivotTableConditionalFormattingScope}
 */
export interface QuickSightAnalysisPivotTableConditionalFormattingScope {
  Role?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.PivotTableConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottableconfiguration.html | AWS::QuickSight::Analysis.PivotTableConfiguration}
 */
export interface QuickSightAnalysisPivotTableConfiguration {
  SortConfiguration?: QuickSightAnalysisPivotTableSortConfiguration;
  PaginatedReportOptions?: QuickSightAnalysisPivotTablePaginatedReportOptions;
  TableOptions?: QuickSightAnalysisPivotTableOptions;
  FieldWells?: QuickSightAnalysisPivotTableFieldWells;
  FieldOptions?: QuickSightAnalysisPivotTableFieldOptions;
  TotalOptions?: QuickSightAnalysisPivotTableTotalOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.PivotTableDataPathOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottabledatapathoption.html | AWS::QuickSight::Analysis.PivotTableDataPathOption}
 */
export interface QuickSightAnalysisPivotTableDataPathOption {
  DataPathList: any[];
  Width?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.PivotTableFieldCollapseStateOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottablefieldcollapsestateoption.html | AWS::QuickSight::Analysis.PivotTableFieldCollapseStateOption}
 */
export interface QuickSightAnalysisPivotTableFieldCollapseStateOption {
  Target: QuickSightAnalysisPivotTableFieldCollapseStateTarget;
  State?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.PivotTableFieldCollapseStateTarget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottablefieldcollapsestatetarget.html | AWS::QuickSight::Analysis.PivotTableFieldCollapseStateTarget}
 */
export interface QuickSightAnalysisPivotTableFieldCollapseStateTarget {
  FieldId?: string;
  FieldDataPathValues?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.PivotTableFieldOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottablefieldoption.html | AWS::QuickSight::Analysis.PivotTableFieldOption}
 */
export interface QuickSightAnalysisPivotTableFieldOption {
  CustomLabel?: string;
  FieldId: string;
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.PivotTableFieldOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottablefieldoptions.html | AWS::QuickSight::Analysis.PivotTableFieldOptions}
 */
export interface QuickSightAnalysisPivotTableFieldOptions {
  CollapseStateOptions?: any[];
  DataPathOptions?: any[];
  SelectedFieldOptions?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.PivotTableFieldSubtotalOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottablefieldsubtotaloptions.html | AWS::QuickSight::Analysis.PivotTableFieldSubtotalOptions}
 */
export interface QuickSightAnalysisPivotTableFieldSubtotalOptions {
  FieldId?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.PivotTableFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottablefieldwells.html | AWS::QuickSight::Analysis.PivotTableFieldWells}
 */
export interface QuickSightAnalysisPivotTableFieldWells {
  PivotTableAggregatedFieldWells?: QuickSightAnalysisPivotTableAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Analysis.PivotTableOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottableoptions.html | AWS::QuickSight::Analysis.PivotTableOptions}
 */
export interface QuickSightAnalysisPivotTableOptions {
  RowFieldNamesStyle?: QuickSightAnalysisTableCellStyle;
  RowHeaderStyle?: QuickSightAnalysisTableCellStyle;
  CollapsedRowDimensionsVisibility?: string;
  RowsLayout?: string;
  MetricPlacement?: string;
  DefaultCellWidth?: string;
  ColumnNamesVisibility?: string;
  RowsLabelOptions?: QuickSightAnalysisPivotTableRowsLabelOptions;
  SingleMetricVisibility?: string;
  ColumnHeaderStyle?: QuickSightAnalysisTableCellStyle;
  ToggleButtonsVisibility?: string;
  CellStyle?: QuickSightAnalysisTableCellStyle;
  RowAlternateColorOptions?: QuickSightAnalysisRowAlternateColorOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.PivotTablePaginatedReportOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottablepaginatedreportoptions.html | AWS::QuickSight::Analysis.PivotTablePaginatedReportOptions}
 */
export interface QuickSightAnalysisPivotTablePaginatedReportOptions {
  OverflowColumnHeaderVisibility?: string;
  VerticalOverflowVisibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.PivotTableRowsLabelOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottablerowslabeloptions.html | AWS::QuickSight::Analysis.PivotTableRowsLabelOptions}
 */
export interface QuickSightAnalysisPivotTableRowsLabelOptions {
  CustomLabel?: string;
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.PivotTableSortBy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottablesortby.html | AWS::QuickSight::Analysis.PivotTableSortBy}
 */
export interface QuickSightAnalysisPivotTableSortBy {
  Field?: QuickSightAnalysisFieldSort;
  DataPath?: QuickSightAnalysisDataPathSort;
  Column?: QuickSightAnalysisColumnSort;
}
/**
 * Type definition for AWS::QuickSight::Analysis.PivotTableSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottablesortconfiguration.html | AWS::QuickSight::Analysis.PivotTableSortConfiguration}
 */
export interface QuickSightAnalysisPivotTableSortConfiguration {
  FieldSortOptions?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.PivotTableTotalOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottabletotaloptions.html | AWS::QuickSight::Analysis.PivotTableTotalOptions}
 */
export interface QuickSightAnalysisPivotTableTotalOptions {
  ColumnSubtotalOptions?: QuickSightAnalysisSubtotalOptions;
  RowSubtotalOptions?: QuickSightAnalysisSubtotalOptions;
  RowTotalOptions?: QuickSightAnalysisPivotTotalOptions;
  ColumnTotalOptions?: QuickSightAnalysisPivotTotalOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.PivotTableVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottablevisual.html | AWS::QuickSight::Analysis.PivotTableVisual}
 */
export interface QuickSightAnalysisPivotTableVisual {
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
  ConditionalFormatting?: QuickSightAnalysisPivotTableConditionalFormatting;
  VisualId: string;
  ChartConfiguration?: QuickSightAnalysisPivotTableConfiguration;
  Actions?: any[];
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.PivotTotalOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottotaloptions.html | AWS::QuickSight::Analysis.PivotTotalOptions}
 */
export interface QuickSightAnalysisPivotTotalOptions {
  CustomLabel?: string;
  TotalAggregationOptions?: any[];
  ValueCellStyle?: QuickSightAnalysisTableCellStyle;
  ScrollStatus?: string;
  Placement?: string;
  TotalCellStyle?: QuickSightAnalysisTableCellStyle;
  TotalsVisibility?: string;
  MetricHeaderCellStyle?: QuickSightAnalysisTableCellStyle;
}
/**
 * Type definition for AWS::QuickSight::Analysis.PredefinedHierarchy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-predefinedhierarchy.html | AWS::QuickSight::Analysis.PredefinedHierarchy}
 */
export interface QuickSightAnalysisPredefinedHierarchy {
  HierarchyId: string;
  DrillDownFilters?: any[];
  Columns: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.ProgressBarOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-progressbaroptions.html | AWS::QuickSight::Analysis.ProgressBarOptions}
 */
export interface QuickSightAnalysisProgressBarOptions {
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.RadarChartAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-radarchartaggregatedfieldwells.html | AWS::QuickSight::Analysis.RadarChartAggregatedFieldWells}
 */
export interface QuickSightAnalysisRadarChartAggregatedFieldWells {
  Category?: any[];
  Color?: any[];
  Values?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.RadarChartAreaStyleSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-radarchartareastylesettings.html | AWS::QuickSight::Analysis.RadarChartAreaStyleSettings}
 */
export interface QuickSightAnalysisRadarChartAreaStyleSettings {
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.RadarChartConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-radarchartconfiguration.html | AWS::QuickSight::Analysis.RadarChartConfiguration}
 */
export interface QuickSightAnalysisRadarChartConfiguration {
  SortConfiguration?: QuickSightAnalysisRadarChartSortConfiguration;
  Legend?: QuickSightAnalysisLegendOptions;
  Shape?: string;
  BaseSeriesSettings?: QuickSightAnalysisRadarChartSeriesSettings;
  ColorLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  CategoryLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  AxesRangeScale?: string;
  VisualPalette?: QuickSightAnalysisVisualPalette;
  AlternateBandColorsVisibility?: string;
  StartAngle?: number;
  CategoryAxis?: QuickSightAnalysisAxisDisplayOptions;
  FieldWells?: QuickSightAnalysisRadarChartFieldWells;
  ColorAxis?: QuickSightAnalysisAxisDisplayOptions;
  AlternateBandOddColor?: string;
  AlternateBandEvenColor?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.RadarChartFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-radarchartfieldwells.html | AWS::QuickSight::Analysis.RadarChartFieldWells}
 */
export interface QuickSightAnalysisRadarChartFieldWells {
  RadarChartAggregatedFieldWells?: QuickSightAnalysisRadarChartAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Analysis.RadarChartSeriesSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-radarchartseriessettings.html | AWS::QuickSight::Analysis.RadarChartSeriesSettings}
 */
export interface QuickSightAnalysisRadarChartSeriesSettings {
  AreaStyleSettings?: QuickSightAnalysisRadarChartAreaStyleSettings;
}
/**
 * Type definition for AWS::QuickSight::Analysis.RadarChartSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-radarchartsortconfiguration.html | AWS::QuickSight::Analysis.RadarChartSortConfiguration}
 */
export interface QuickSightAnalysisRadarChartSortConfiguration {
  ColorSort?: any[];
  ColorItemsLimit?: QuickSightAnalysisItemsLimitConfiguration;
  CategoryItemsLimit?: QuickSightAnalysisItemsLimitConfiguration;
  CategorySort?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.RadarChartVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-radarchartvisual.html | AWS::QuickSight::Analysis.RadarChartVisual}
 */
export interface QuickSightAnalysisRadarChartVisual {
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightAnalysisRadarChartConfiguration;
  Actions?: any[];
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.RangeEndsLabelType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-rangeendslabeltype.html | AWS::QuickSight::Analysis.RangeEndsLabelType}
 */
export interface QuickSightAnalysisRangeEndsLabelType {
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ReferenceLine
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-referenceline.html | AWS::QuickSight::Analysis.ReferenceLine}
 */
export interface QuickSightAnalysisReferenceLine {
  Status?: string;
  DataConfiguration: QuickSightAnalysisReferenceLineDataConfiguration;
  LabelConfiguration?: QuickSightAnalysisReferenceLineLabelConfiguration;
  StyleConfiguration?: QuickSightAnalysisReferenceLineStyleConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ReferenceLineCustomLabelConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-referencelinecustomlabelconfiguration.html | AWS::QuickSight::Analysis.ReferenceLineCustomLabelConfiguration}
 */
export interface QuickSightAnalysisReferenceLineCustomLabelConfiguration {
  CustomLabel: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ReferenceLineDataConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-referencelinedataconfiguration.html | AWS::QuickSight::Analysis.ReferenceLineDataConfiguration}
 */
export interface QuickSightAnalysisReferenceLineDataConfiguration {
  DynamicConfiguration?: QuickSightAnalysisReferenceLineDynamicDataConfiguration;
  AxisBinding?: string;
  SeriesType?: string;
  StaticConfiguration?: QuickSightAnalysisReferenceLineStaticDataConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ReferenceLineDynamicDataConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-referencelinedynamicdataconfiguration.html | AWS::QuickSight::Analysis.ReferenceLineDynamicDataConfiguration}
 */
export interface QuickSightAnalysisReferenceLineDynamicDataConfiguration {
  Column: QuickSightAnalysisColumnIdentifier;
  MeasureAggregationFunction?: QuickSightAnalysisAggregationFunction;
  Calculation: QuickSightAnalysisNumericalAggregationFunction;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ReferenceLineLabelConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-referencelinelabelconfiguration.html | AWS::QuickSight::Analysis.ReferenceLineLabelConfiguration}
 */
export interface QuickSightAnalysisReferenceLineLabelConfiguration {
  HorizontalPosition?: string;
  ValueLabelConfiguration?: QuickSightAnalysisReferenceLineValueLabelConfiguration;
  CustomLabelConfiguration?: QuickSightAnalysisReferenceLineCustomLabelConfiguration;
  FontColor?: string;
  FontConfiguration?: QuickSightAnalysisFontConfiguration;
  VerticalPosition?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ReferenceLineStaticDataConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-referencelinestaticdataconfiguration.html | AWS::QuickSight::Analysis.ReferenceLineStaticDataConfiguration}
 */
export interface QuickSightAnalysisReferenceLineStaticDataConfiguration {
  Value: number;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ReferenceLineStyleConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-referencelinestyleconfiguration.html | AWS::QuickSight::Analysis.ReferenceLineStyleConfiguration}
 */
export interface QuickSightAnalysisReferenceLineStyleConfiguration {
  Pattern?: string;
  Color?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ReferenceLineValueLabelConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-referencelinevaluelabelconfiguration.html | AWS::QuickSight::Analysis.ReferenceLineValueLabelConfiguration}
 */
export interface QuickSightAnalysisReferenceLineValueLabelConfiguration {
  FormatConfiguration?: QuickSightAnalysisNumericFormatConfiguration;
  RelativePosition?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.RelativeDateTimeControlDisplayOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-relativedatetimecontroldisplayoptions.html | AWS::QuickSight::Analysis.RelativeDateTimeControlDisplayOptions}
 */
export interface QuickSightAnalysisRelativeDateTimeControlDisplayOptions {
  TitleOptions?: QuickSightAnalysisLabelOptions;
  InfoIconLabelOptions?: QuickSightAnalysisSheetControlInfoIconLabelOptions;
  DateTimeFormat?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.RelativeDatesFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-relativedatesfilter.html | AWS::QuickSight::Analysis.RelativeDatesFilter}
 */
export interface QuickSightAnalysisRelativeDatesFilter {
  RelativeDateValue?: number;
  Column: QuickSightAnalysisColumnIdentifier;
  RelativeDateType: string;
  TimeGranularity: string;
  ParameterName?: string;
  NullOption: string;
  FilterId: string;
  AnchorDateConfiguration: QuickSightAnalysisAnchorDateConfiguration;
  MinimumGranularity?: string;
  ExcludePeriodConfiguration?: QuickSightAnalysisExcludePeriodConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ResourcePermission
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-resourcepermission.html | AWS::QuickSight::Analysis.ResourcePermission}
 */
export interface QuickSightAnalysisResourcePermission {
  Actions: any[];
  Resource?: string;
  Principal: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.RollingDateConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-rollingdateconfiguration.html | AWS::QuickSight::Analysis.RollingDateConfiguration}
 */
export interface QuickSightAnalysisRollingDateConfiguration {
  Expression: string;
  DataSetIdentifier?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.RowAlternateColorOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-rowalternatecoloroptions.html | AWS::QuickSight::Analysis.RowAlternateColorOptions}
 */
export interface QuickSightAnalysisRowAlternateColorOptions {
  Status?: string;
  UsePrimaryBackgroundColor?: string;
  RowAlternateColors?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.SameSheetTargetVisualConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-samesheettargetvisualconfiguration.html | AWS::QuickSight::Analysis.SameSheetTargetVisualConfiguration}
 */
export interface QuickSightAnalysisSameSheetTargetVisualConfiguration {
  TargetVisualOptions?: string;
  TargetVisuals?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.SankeyDiagramAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sankeydiagramaggregatedfieldwells.html | AWS::QuickSight::Analysis.SankeyDiagramAggregatedFieldWells}
 */
export interface QuickSightAnalysisSankeyDiagramAggregatedFieldWells {
  Destination?: any[];
  Source?: any[];
  Weight?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.SankeyDiagramChartConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sankeydiagramchartconfiguration.html | AWS::QuickSight::Analysis.SankeyDiagramChartConfiguration}
 */
export interface QuickSightAnalysisSankeyDiagramChartConfiguration {
  SortConfiguration?: QuickSightAnalysisSankeyDiagramSortConfiguration;
  DataLabels?: QuickSightAnalysisDataLabelOptions;
  FieldWells?: QuickSightAnalysisSankeyDiagramFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Analysis.SankeyDiagramFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sankeydiagramfieldwells.html | AWS::QuickSight::Analysis.SankeyDiagramFieldWells}
 */
export interface QuickSightAnalysisSankeyDiagramFieldWells {
  SankeyDiagramAggregatedFieldWells?: QuickSightAnalysisSankeyDiagramAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Analysis.SankeyDiagramSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sankeydiagramsortconfiguration.html | AWS::QuickSight::Analysis.SankeyDiagramSortConfiguration}
 */
export interface QuickSightAnalysisSankeyDiagramSortConfiguration {
  WeightSort?: any[];
  SourceItemsLimit?: QuickSightAnalysisItemsLimitConfiguration;
  DestinationItemsLimit?: QuickSightAnalysisItemsLimitConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.SankeyDiagramVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sankeydiagramvisual.html | AWS::QuickSight::Analysis.SankeyDiagramVisual}
 */
export interface QuickSightAnalysisSankeyDiagramVisual {
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightAnalysisSankeyDiagramChartConfiguration;
  Actions?: any[];
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ScatterPlotCategoricallyAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-scatterplotcategoricallyaggregatedfieldwells.html | AWS::QuickSight::Analysis.ScatterPlotCategoricallyAggregatedFieldWells}
 */
export interface QuickSightAnalysisScatterPlotCategoricallyAggregatedFieldWells {
  Category?: any[];
  Size?: any[];
  Label?: any[];
  XAxis?: any[];
  YAxis?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.ScatterPlotConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-scatterplotconfiguration.html | AWS::QuickSight::Analysis.ScatterPlotConfiguration}
 */
export interface QuickSightAnalysisScatterPlotConfiguration {
  YAxisLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  Legend?: QuickSightAnalysisLegendOptions;
  YAxisDisplayOptions?: QuickSightAnalysisAxisDisplayOptions;
  DataLabels?: QuickSightAnalysisDataLabelOptions;
  FieldWells?: QuickSightAnalysisScatterPlotFieldWells;
  Tooltip?: QuickSightAnalysisTooltipOptions;
  XAxisLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  VisualPalette?: QuickSightAnalysisVisualPalette;
  XAxisDisplayOptions?: QuickSightAnalysisAxisDisplayOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ScatterPlotFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-scatterplotfieldwells.html | AWS::QuickSight::Analysis.ScatterPlotFieldWells}
 */
export interface QuickSightAnalysisScatterPlotFieldWells {
  ScatterPlotUnaggregatedFieldWells?: QuickSightAnalysisScatterPlotUnaggregatedFieldWells;
  ScatterPlotCategoricallyAggregatedFieldWells?: QuickSightAnalysisScatterPlotCategoricallyAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ScatterPlotUnaggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-scatterplotunaggregatedfieldwells.html | AWS::QuickSight::Analysis.ScatterPlotUnaggregatedFieldWells}
 */
export interface QuickSightAnalysisScatterPlotUnaggregatedFieldWells {
  Category?: any[];
  Size?: any[];
  Label?: any[];
  XAxis?: any[];
  YAxis?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.ScatterPlotVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-scatterplotvisual.html | AWS::QuickSight::Analysis.ScatterPlotVisual}
 */
export interface QuickSightAnalysisScatterPlotVisual {
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightAnalysisScatterPlotConfiguration;
  Actions?: any[];
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.ScrollBarOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-scrollbaroptions.html | AWS::QuickSight::Analysis.ScrollBarOptions}
 */
export interface QuickSightAnalysisScrollBarOptions {
  VisibleRange?: QuickSightAnalysisVisibleRangeOptions;
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.SecondaryValueOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-secondaryvalueoptions.html | AWS::QuickSight::Analysis.SecondaryValueOptions}
 */
export interface QuickSightAnalysisSecondaryValueOptions {
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.SectionAfterPageBreak
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sectionafterpagebreak.html | AWS::QuickSight::Analysis.SectionAfterPageBreak}
 */
export interface QuickSightAnalysisSectionAfterPageBreak {
  Status?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.SectionBasedLayoutCanvasSizeOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sectionbasedlayoutcanvassizeoptions.html | AWS::QuickSight::Analysis.SectionBasedLayoutCanvasSizeOptions}
 */
export interface QuickSightAnalysisSectionBasedLayoutCanvasSizeOptions {
  PaperCanvasSizeOptions?: QuickSightAnalysisSectionBasedLayoutPaperCanvasSizeOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.SectionBasedLayoutConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sectionbasedlayoutconfiguration.html | AWS::QuickSight::Analysis.SectionBasedLayoutConfiguration}
 */
export interface QuickSightAnalysisSectionBasedLayoutConfiguration {
  CanvasSizeOptions: QuickSightAnalysisSectionBasedLayoutCanvasSizeOptions;
  FooterSections: any[];
  BodySections: any[];
  HeaderSections: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.SectionBasedLayoutPaperCanvasSizeOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sectionbasedlayoutpapercanvassizeoptions.html | AWS::QuickSight::Analysis.SectionBasedLayoutPaperCanvasSizeOptions}
 */
export interface QuickSightAnalysisSectionBasedLayoutPaperCanvasSizeOptions {
  PaperMargin?: QuickSightAnalysisSpacing;
  PaperSize?: string;
  PaperOrientation?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.SectionLayoutConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sectionlayoutconfiguration.html | AWS::QuickSight::Analysis.SectionLayoutConfiguration}
 */
export interface QuickSightAnalysisSectionLayoutConfiguration {
  FreeFormLayout: QuickSightAnalysisFreeFormSectionLayoutConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.SectionPageBreakConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sectionpagebreakconfiguration.html | AWS::QuickSight::Analysis.SectionPageBreakConfiguration}
 */
export interface QuickSightAnalysisSectionPageBreakConfiguration {
  After?: QuickSightAnalysisSectionAfterPageBreak;
}
/**
 * Type definition for AWS::QuickSight::Analysis.SectionStyle
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sectionstyle.html | AWS::QuickSight::Analysis.SectionStyle}
 */
export interface QuickSightAnalysisSectionStyle {
  Padding?: QuickSightAnalysisSpacing;
  Height?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.SelectedSheetsFilterScopeConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-selectedsheetsfilterscopeconfiguration.html | AWS::QuickSight::Analysis.SelectedSheetsFilterScopeConfiguration}
 */
export interface QuickSightAnalysisSelectedSheetsFilterScopeConfiguration {
  SheetVisualScopingConfigurations?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.SeriesItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-seriesitem.html | AWS::QuickSight::Analysis.SeriesItem}
 */
export interface QuickSightAnalysisSeriesItem {
  FieldSeriesItem?: QuickSightAnalysisFieldSeriesItem;
  DataFieldSeriesItem?: QuickSightAnalysisDataFieldSeriesItem;
}
/**
 * Type definition for AWS::QuickSight::Analysis.SetParameterValueConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-setparametervalueconfiguration.html | AWS::QuickSight::Analysis.SetParameterValueConfiguration}
 */
export interface QuickSightAnalysisSetParameterValueConfiguration {
  DestinationParameterName: string;
  Value: QuickSightAnalysisDestinationParameterValueConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ShapeConditionalFormat
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-shapeconditionalformat.html | AWS::QuickSight::Analysis.ShapeConditionalFormat}
 */
export interface QuickSightAnalysisShapeConditionalFormat {
  BackgroundColor: QuickSightAnalysisConditionalFormattingColor;
}
/**
 * Type definition for AWS::QuickSight::Analysis.Sheet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sheet.html | AWS::QuickSight::Analysis.Sheet}
 */
export interface QuickSightAnalysisSheet {
  SheetId?: string;
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.SheetControlInfoIconLabelOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sheetcontrolinfoiconlabeloptions.html | AWS::QuickSight::Analysis.SheetControlInfoIconLabelOptions}
 */
export interface QuickSightAnalysisSheetControlInfoIconLabelOptions {
  Visibility?: string;
  InfoIconText?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.SheetControlLayout
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sheetcontrollayout.html | AWS::QuickSight::Analysis.SheetControlLayout}
 */
export interface QuickSightAnalysisSheetControlLayout {
  Configuration: QuickSightAnalysisSheetControlLayoutConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.SheetControlLayoutConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sheetcontrollayoutconfiguration.html | AWS::QuickSight::Analysis.SheetControlLayoutConfiguration}
 */
export interface QuickSightAnalysisSheetControlLayoutConfiguration {
  GridLayout?: QuickSightAnalysisGridLayoutConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.SheetDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sheetdefinition.html | AWS::QuickSight::Analysis.SheetDefinition}
 */
export interface QuickSightAnalysisSheetDefinition {
  Description?: string;
  ParameterControls?: any[];
  TextBoxes?: any[];
  Layouts?: any[];
  ContentType?: string;
  SheetId: string;
  FilterControls?: any[];
  SheetControlLayouts?: any[];
  Title?: string;
  Visuals?: any[];
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.SheetElementConfigurationOverrides
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sheetelementconfigurationoverrides.html | AWS::QuickSight::Analysis.SheetElementConfigurationOverrides}
 */
export interface QuickSightAnalysisSheetElementConfigurationOverrides {
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.SheetElementRenderingRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sheetelementrenderingrule.html | AWS::QuickSight::Analysis.SheetElementRenderingRule}
 */
export interface QuickSightAnalysisSheetElementRenderingRule {
  Expression: string;
  ConfigurationOverrides: QuickSightAnalysisSheetElementConfigurationOverrides;
}
/**
 * Type definition for AWS::QuickSight::Analysis.SheetTextBox
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sheettextbox.html | AWS::QuickSight::Analysis.SheetTextBox}
 */
export interface QuickSightAnalysisSheetTextBox {
  SheetTextBoxId: string;
  Content?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.SheetVisualScopingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sheetvisualscopingconfiguration.html | AWS::QuickSight::Analysis.SheetVisualScopingConfiguration}
 */
export interface QuickSightAnalysisSheetVisualScopingConfiguration {
  Scope: string;
  SheetId: string;
  VisualIds?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.ShortFormatText
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-shortformattext.html | AWS::QuickSight::Analysis.ShortFormatText}
 */
export interface QuickSightAnalysisShortFormatText {
  RichText?: string;
  PlainText?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.SimpleClusterMarker
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-simpleclustermarker.html | AWS::QuickSight::Analysis.SimpleClusterMarker}
 */
export interface QuickSightAnalysisSimpleClusterMarker {
  Color?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.SliderControlDisplayOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-slidercontroldisplayoptions.html | AWS::QuickSight::Analysis.SliderControlDisplayOptions}
 */
export interface QuickSightAnalysisSliderControlDisplayOptions {
  TitleOptions?: QuickSightAnalysisLabelOptions;
  InfoIconLabelOptions?: QuickSightAnalysisSheetControlInfoIconLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.SmallMultiplesAxisProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-smallmultiplesaxisproperties.html | AWS::QuickSight::Analysis.SmallMultiplesAxisProperties}
 */
export interface QuickSightAnalysisSmallMultiplesAxisProperties {
  Placement?: string;
  Scale?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.SmallMultiplesOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-smallmultiplesoptions.html | AWS::QuickSight::Analysis.SmallMultiplesOptions}
 */
export interface QuickSightAnalysisSmallMultiplesOptions {
  MaxVisibleRows?: number;
  PanelConfiguration?: QuickSightAnalysisPanelConfiguration;
  MaxVisibleColumns?: number;
  XAxis?: QuickSightAnalysisSmallMultiplesAxisProperties;
  YAxis?: QuickSightAnalysisSmallMultiplesAxisProperties;
}
/**
 * Type definition for AWS::QuickSight::Analysis.Spacing
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-spacing.html | AWS::QuickSight::Analysis.Spacing}
 */
export interface QuickSightAnalysisSpacing {
  Left?: string;
  Top?: string;
  Right?: string;
  Bottom?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.StringDefaultValues
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-stringdefaultvalues.html | AWS::QuickSight::Analysis.StringDefaultValues}
 */
export interface QuickSightAnalysisStringDefaultValues {
  DynamicValue?: QuickSightAnalysisDynamicDefaultValue;
  StaticValues?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.StringFormatConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-stringformatconfiguration.html | AWS::QuickSight::Analysis.StringFormatConfiguration}
 */
export interface QuickSightAnalysisStringFormatConfiguration {
  NumericFormatConfiguration?: QuickSightAnalysisNumericFormatConfiguration;
  NullValueFormatConfiguration?: QuickSightAnalysisNullValueFormatConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.StringParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-stringparameter.html | AWS::QuickSight::Analysis.StringParameter}
 */
export interface QuickSightAnalysisStringParameter {
  Values: any[];
  Name: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.StringParameterDeclaration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-stringparameterdeclaration.html | AWS::QuickSight::Analysis.StringParameterDeclaration}
 */
export interface QuickSightAnalysisStringParameterDeclaration {
  MappedDataSetParameters?: any[];
  DefaultValues?: QuickSightAnalysisStringDefaultValues;
  ParameterValueType: string;
  ValueWhenUnset?: QuickSightAnalysisStringValueWhenUnsetConfiguration;
  Name: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.StringValueWhenUnsetConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-stringvaluewhenunsetconfiguration.html | AWS::QuickSight::Analysis.StringValueWhenUnsetConfiguration}
 */
export interface QuickSightAnalysisStringValueWhenUnsetConfiguration {
  ValueWhenUnsetOption?: string;
  CustomValue?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.SubtotalOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-subtotaloptions.html | AWS::QuickSight::Analysis.SubtotalOptions}
 */
export interface QuickSightAnalysisSubtotalOptions {
  CustomLabel?: string;
  FieldLevelOptions?: any[];
  ValueCellStyle?: QuickSightAnalysisTableCellStyle;
  TotalCellStyle?: QuickSightAnalysisTableCellStyle;
  TotalsVisibility?: string;
  FieldLevel?: string;
  MetricHeaderCellStyle?: QuickSightAnalysisTableCellStyle;
  StyleTargets?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.TableAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tableaggregatedfieldwells.html | AWS::QuickSight::Analysis.TableAggregatedFieldWells}
 */
export interface QuickSightAnalysisTableAggregatedFieldWells {
  GroupBy?: any[];
  Values?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.TableBorderOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tableborderoptions.html | AWS::QuickSight::Analysis.TableBorderOptions}
 */
export interface QuickSightAnalysisTableBorderOptions {
  Thickness?: number;
  Color?: string;
  Style?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TableCellConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tablecellconditionalformatting.html | AWS::QuickSight::Analysis.TableCellConditionalFormatting}
 */
export interface QuickSightAnalysisTableCellConditionalFormatting {
  FieldId: string;
  TextFormat?: QuickSightAnalysisTextConditionalFormat;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TableCellImageSizingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tablecellimagesizingconfiguration.html | AWS::QuickSight::Analysis.TableCellImageSizingConfiguration}
 */
export interface QuickSightAnalysisTableCellImageSizingConfiguration {
  TableCellImageScalingConfiguration?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TableCellStyle
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tablecellstyle.html | AWS::QuickSight::Analysis.TableCellStyle}
 */
export interface QuickSightAnalysisTableCellStyle {
  VerticalTextAlignment?: string;
  Visibility?: string;
  Height?: number;
  FontConfiguration?: QuickSightAnalysisFontConfiguration;
  Border?: QuickSightAnalysisGlobalTableBorderOptions;
  TextWrap?: string;
  HorizontalTextAlignment?: string;
  BackgroundColor?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TableConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tableconditionalformatting.html | AWS::QuickSight::Analysis.TableConditionalFormatting}
 */
export interface QuickSightAnalysisTableConditionalFormatting {
  ConditionalFormattingOptions?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.TableConditionalFormattingOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tableconditionalformattingoption.html | AWS::QuickSight::Analysis.TableConditionalFormattingOption}
 */
export interface QuickSightAnalysisTableConditionalFormattingOption {
  Row?: QuickSightAnalysisTableRowConditionalFormatting;
  Cell?: QuickSightAnalysisTableCellConditionalFormatting;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TableConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tableconfiguration.html | AWS::QuickSight::Analysis.TableConfiguration}
 */
export interface QuickSightAnalysisTableConfiguration {
  SortConfiguration?: QuickSightAnalysisTableSortConfiguration;
  PaginatedReportOptions?: QuickSightAnalysisTablePaginatedReportOptions;
  TableOptions?: QuickSightAnalysisTableOptions;
  TableInlineVisualizations?: any[];
  FieldWells?: QuickSightAnalysisTableFieldWells;
  FieldOptions?: QuickSightAnalysisTableFieldOptions;
  TotalOptions?: QuickSightAnalysisTotalOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TableFieldCustomIconContent
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tablefieldcustomiconcontent.html | AWS::QuickSight::Analysis.TableFieldCustomIconContent}
 */
export interface QuickSightAnalysisTableFieldCustomIconContent {
  Icon?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TableFieldCustomTextContent
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tablefieldcustomtextcontent.html | AWS::QuickSight::Analysis.TableFieldCustomTextContent}
 */
export interface QuickSightAnalysisTableFieldCustomTextContent {
  Value?: string;
  FontConfiguration: QuickSightAnalysisFontConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TableFieldImageConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tablefieldimageconfiguration.html | AWS::QuickSight::Analysis.TableFieldImageConfiguration}
 */
export interface QuickSightAnalysisTableFieldImageConfiguration {
  SizingOptions?: QuickSightAnalysisTableCellImageSizingConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TableFieldLinkConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tablefieldlinkconfiguration.html | AWS::QuickSight::Analysis.TableFieldLinkConfiguration}
 */
export interface QuickSightAnalysisTableFieldLinkConfiguration {
  Target: string;
  Content: QuickSightAnalysisTableFieldLinkContentConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TableFieldLinkContentConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tablefieldlinkcontentconfiguration.html | AWS::QuickSight::Analysis.TableFieldLinkContentConfiguration}
 */
export interface QuickSightAnalysisTableFieldLinkContentConfiguration {
  CustomIconContent?: QuickSightAnalysisTableFieldCustomIconContent;
  CustomTextContent?: QuickSightAnalysisTableFieldCustomTextContent;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TableFieldOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tablefieldoption.html | AWS::QuickSight::Analysis.TableFieldOption}
 */
export interface QuickSightAnalysisTableFieldOption {
  CustomLabel?: string;
  URLStyling?: QuickSightAnalysisTableFieldURLConfiguration;
  FieldId: string;
  Visibility?: string;
  Width?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TableFieldOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tablefieldoptions.html | AWS::QuickSight::Analysis.TableFieldOptions}
 */
export interface QuickSightAnalysisTableFieldOptions {
  Order?: any[];
  PinnedFieldOptions?: QuickSightAnalysisTablePinnedFieldOptions;
  SelectedFieldOptions?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.TableFieldURLConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tablefieldurlconfiguration.html | AWS::QuickSight::Analysis.TableFieldURLConfiguration}
 */
export interface QuickSightAnalysisTableFieldURLConfiguration {
  LinkConfiguration?: QuickSightAnalysisTableFieldLinkConfiguration;
  ImageConfiguration?: QuickSightAnalysisTableFieldImageConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TableFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tablefieldwells.html | AWS::QuickSight::Analysis.TableFieldWells}
 */
export interface QuickSightAnalysisTableFieldWells {
  TableUnaggregatedFieldWells?: QuickSightAnalysisTableUnaggregatedFieldWells;
  TableAggregatedFieldWells?: QuickSightAnalysisTableAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TableInlineVisualization
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tableinlinevisualization.html | AWS::QuickSight::Analysis.TableInlineVisualization}
 */
export interface QuickSightAnalysisTableInlineVisualization {
  DataBars?: QuickSightAnalysisDataBarsOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TableOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tableoptions.html | AWS::QuickSight::Analysis.TableOptions}
 */
export interface QuickSightAnalysisTableOptions {
  HeaderStyle?: QuickSightAnalysisTableCellStyle;
  CellStyle?: QuickSightAnalysisTableCellStyle;
  Orientation?: string;
  RowAlternateColorOptions?: QuickSightAnalysisRowAlternateColorOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TablePaginatedReportOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tablepaginatedreportoptions.html | AWS::QuickSight::Analysis.TablePaginatedReportOptions}
 */
export interface QuickSightAnalysisTablePaginatedReportOptions {
  OverflowColumnHeaderVisibility?: string;
  VerticalOverflowVisibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TablePinnedFieldOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tablepinnedfieldoptions.html | AWS::QuickSight::Analysis.TablePinnedFieldOptions}
 */
export interface QuickSightAnalysisTablePinnedFieldOptions {
  PinnedLeftFields?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.TableRowConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tablerowconditionalformatting.html | AWS::QuickSight::Analysis.TableRowConditionalFormatting}
 */
export interface QuickSightAnalysisTableRowConditionalFormatting {
  TextColor?: QuickSightAnalysisConditionalFormattingColor;
  BackgroundColor?: QuickSightAnalysisConditionalFormattingColor;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TableSideBorderOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tablesideborderoptions.html | AWS::QuickSight::Analysis.TableSideBorderOptions}
 */
export interface QuickSightAnalysisTableSideBorderOptions {
  Left?: QuickSightAnalysisTableBorderOptions;
  Top?: QuickSightAnalysisTableBorderOptions;
  InnerHorizontal?: QuickSightAnalysisTableBorderOptions;
  Right?: QuickSightAnalysisTableBorderOptions;
  Bottom?: QuickSightAnalysisTableBorderOptions;
  InnerVertical?: QuickSightAnalysisTableBorderOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TableSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tablesortconfiguration.html | AWS::QuickSight::Analysis.TableSortConfiguration}
 */
export interface QuickSightAnalysisTableSortConfiguration {
  RowSort?: any[];
  PaginationConfiguration?: QuickSightAnalysisPaginationConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TableStyleTarget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tablestyletarget.html | AWS::QuickSight::Analysis.TableStyleTarget}
 */
export interface QuickSightAnalysisTableStyleTarget {
  CellType: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TableUnaggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tableunaggregatedfieldwells.html | AWS::QuickSight::Analysis.TableUnaggregatedFieldWells}
 */
export interface QuickSightAnalysisTableUnaggregatedFieldWells {
  Values?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.TableVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tablevisual.html | AWS::QuickSight::Analysis.TableVisual}
 */
export interface QuickSightAnalysisTableVisual {
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
  ConditionalFormatting?: QuickSightAnalysisTableConditionalFormatting;
  VisualId: string;
  ChartConfiguration?: QuickSightAnalysisTableConfiguration;
  Actions?: any[];
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TextAreaControlDisplayOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-textareacontroldisplayoptions.html | AWS::QuickSight::Analysis.TextAreaControlDisplayOptions}
 */
export interface QuickSightAnalysisTextAreaControlDisplayOptions {
  TitleOptions?: QuickSightAnalysisLabelOptions;
  PlaceholderOptions?: QuickSightAnalysisTextControlPlaceholderOptions;
  InfoIconLabelOptions?: QuickSightAnalysisSheetControlInfoIconLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TextConditionalFormat
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-textconditionalformat.html | AWS::QuickSight::Analysis.TextConditionalFormat}
 */
export interface QuickSightAnalysisTextConditionalFormat {
  TextColor?: QuickSightAnalysisConditionalFormattingColor;
  Icon?: QuickSightAnalysisConditionalFormattingIcon;
  BackgroundColor?: QuickSightAnalysisConditionalFormattingColor;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TextControlPlaceholderOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-textcontrolplaceholderoptions.html | AWS::QuickSight::Analysis.TextControlPlaceholderOptions}
 */
export interface QuickSightAnalysisTextControlPlaceholderOptions {
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TextFieldControlDisplayOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-textfieldcontroldisplayoptions.html | AWS::QuickSight::Analysis.TextFieldControlDisplayOptions}
 */
export interface QuickSightAnalysisTextFieldControlDisplayOptions {
  TitleOptions?: QuickSightAnalysisLabelOptions;
  PlaceholderOptions?: QuickSightAnalysisTextControlPlaceholderOptions;
  InfoIconLabelOptions?: QuickSightAnalysisSheetControlInfoIconLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ThousandSeparatorOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-thousandseparatoroptions.html | AWS::QuickSight::Analysis.ThousandSeparatorOptions}
 */
export interface QuickSightAnalysisThousandSeparatorOptions {
  Symbol?: string;
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TimeBasedForecastProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-timebasedforecastproperties.html | AWS::QuickSight::Analysis.TimeBasedForecastProperties}
 */
export interface QuickSightAnalysisTimeBasedForecastProperties {
  PeriodsBackward?: number;
  PeriodsForward?: number;
  PredictionInterval?: number;
  Seasonality?: number;
  UpperBoundary?: number;
  LowerBoundary?: number;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TimeEqualityFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-timeequalityfilter.html | AWS::QuickSight::Analysis.TimeEqualityFilter}
 */
export interface QuickSightAnalysisTimeEqualityFilter {
  Column: QuickSightAnalysisColumnIdentifier;
  RollingDate?: QuickSightAnalysisRollingDateConfiguration;
  Value?: string;
  TimeGranularity?: string;
  ParameterName?: string;
  FilterId: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TimeRangeDrillDownFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-timerangedrilldownfilter.html | AWS::QuickSight::Analysis.TimeRangeDrillDownFilter}
 */
export interface QuickSightAnalysisTimeRangeDrillDownFilter {
  Column: QuickSightAnalysisColumnIdentifier;
  RangeMinimum: string;
  TimeGranularity: string;
  RangeMaximum: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TimeRangeFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-timerangefilter.html | AWS::QuickSight::Analysis.TimeRangeFilter}
 */
export interface QuickSightAnalysisTimeRangeFilter {
  RangeMinimumValue?: QuickSightAnalysisTimeRangeFilterValue;
  Column: QuickSightAnalysisColumnIdentifier;
  RangeMaximumValue?: QuickSightAnalysisTimeRangeFilterValue;
  IncludeMaximum?: boolean;
  TimeGranularity?: string;
  NullOption: string;
  FilterId: string;
  IncludeMinimum?: boolean;
  ExcludePeriodConfiguration?: QuickSightAnalysisExcludePeriodConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TimeRangeFilterValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-timerangefiltervalue.html | AWS::QuickSight::Analysis.TimeRangeFilterValue}
 */
export interface QuickSightAnalysisTimeRangeFilterValue {
  RollingDate?: QuickSightAnalysisRollingDateConfiguration;
  StaticValue?: string;
  Parameter?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TooltipItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tooltipitem.html | AWS::QuickSight::Analysis.TooltipItem}
 */
export interface QuickSightAnalysisTooltipItem {
  FieldTooltipItem?: QuickSightAnalysisFieldTooltipItem;
  ColumnTooltipItem?: QuickSightAnalysisColumnTooltipItem;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TooltipOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tooltipoptions.html | AWS::QuickSight::Analysis.TooltipOptions}
 */
export interface QuickSightAnalysisTooltipOptions {
  SelectedTooltipType?: string;
  TooltipVisibility?: string;
  FieldBasedTooltip?: QuickSightAnalysisFieldBasedTooltip;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TopBottomFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-topbottomfilter.html | AWS::QuickSight::Analysis.TopBottomFilter}
 */
export interface QuickSightAnalysisTopBottomFilter {
  AggregationSortConfigurations: any[];
  Column: QuickSightAnalysisColumnIdentifier;
  TimeGranularity?: string;
  ParameterName?: string;
  Limit?: number;
  FilterId: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TopBottomMoversComputation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-topbottommoverscomputation.html | AWS::QuickSight::Analysis.TopBottomMoversComputation}
 */
export interface QuickSightAnalysisTopBottomMoversComputation {
  Type: string;
  Category?: QuickSightAnalysisDimensionField;
  Value?: QuickSightAnalysisMeasureField;
  SortOrder?: string;
  Time?: QuickSightAnalysisDimensionField;
  MoverSize?: number;
  ComputationId: string;
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TopBottomRankedComputation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-topbottomrankedcomputation.html | AWS::QuickSight::Analysis.TopBottomRankedComputation}
 */
export interface QuickSightAnalysisTopBottomRankedComputation {
  Type: string;
  Category?: QuickSightAnalysisDimensionField;
  ResultSize?: number;
  Value?: QuickSightAnalysisMeasureField;
  ComputationId: string;
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TotalAggregationComputation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-totalaggregationcomputation.html | AWS::QuickSight::Analysis.TotalAggregationComputation}
 */
export interface QuickSightAnalysisTotalAggregationComputation {
  Value?: QuickSightAnalysisMeasureField;
  ComputationId: string;
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TotalAggregationFunction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-totalaggregationfunction.html | AWS::QuickSight::Analysis.TotalAggregationFunction}
 */
export interface QuickSightAnalysisTotalAggregationFunction {
  SimpleTotalAggregationFunction?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TotalAggregationOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-totalaggregationoption.html | AWS::QuickSight::Analysis.TotalAggregationOption}
 */
export interface QuickSightAnalysisTotalAggregationOption {
  TotalAggregationFunction: QuickSightAnalysisTotalAggregationFunction;
  FieldId: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TotalOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-totaloptions.html | AWS::QuickSight::Analysis.TotalOptions}
 */
export interface QuickSightAnalysisTotalOptions {
  CustomLabel?: string;
  TotalAggregationOptions?: any[];
  ScrollStatus?: string;
  Placement?: string;
  TotalCellStyle?: QuickSightAnalysisTableCellStyle;
  TotalsVisibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TreeMapAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-treemapaggregatedfieldwells.html | AWS::QuickSight::Analysis.TreeMapAggregatedFieldWells}
 */
export interface QuickSightAnalysisTreeMapAggregatedFieldWells {
  Sizes?: any[];
  Colors?: any[];
  Groups?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.TreeMapConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-treemapconfiguration.html | AWS::QuickSight::Analysis.TreeMapConfiguration}
 */
export interface QuickSightAnalysisTreeMapConfiguration {
  SortConfiguration?: QuickSightAnalysisTreeMapSortConfiguration;
  Legend?: QuickSightAnalysisLegendOptions;
  DataLabels?: QuickSightAnalysisDataLabelOptions;
  ColorLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  SizeLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  FieldWells?: QuickSightAnalysisTreeMapFieldWells;
  Tooltip?: QuickSightAnalysisTooltipOptions;
  ColorScale?: QuickSightAnalysisColorScale;
  GroupLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TreeMapFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-treemapfieldwells.html | AWS::QuickSight::Analysis.TreeMapFieldWells}
 */
export interface QuickSightAnalysisTreeMapFieldWells {
  TreeMapAggregatedFieldWells?: QuickSightAnalysisTreeMapAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TreeMapSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-treemapsortconfiguration.html | AWS::QuickSight::Analysis.TreeMapSortConfiguration}
 */
export interface QuickSightAnalysisTreeMapSortConfiguration {
  TreeMapSort?: any[];
  TreeMapGroupItemsLimitConfiguration?: QuickSightAnalysisItemsLimitConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Analysis.TreeMapVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-treemapvisual.html | AWS::QuickSight::Analysis.TreeMapVisual}
 */
export interface QuickSightAnalysisTreeMapVisual {
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightAnalysisTreeMapConfiguration;
  Actions?: any[];
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.TrendArrowOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-trendarrowoptions.html | AWS::QuickSight::Analysis.TrendArrowOptions}
 */
export interface QuickSightAnalysisTrendArrowOptions {
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.UnaggregatedField
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-unaggregatedfield.html | AWS::QuickSight::Analysis.UnaggregatedField}
 */
export interface QuickSightAnalysisUnaggregatedField {
  FormatConfiguration?: QuickSightAnalysisFormatConfiguration;
  Column: QuickSightAnalysisColumnIdentifier;
  FieldId: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.UniqueValuesComputation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-uniquevaluescomputation.html | AWS::QuickSight::Analysis.UniqueValuesComputation}
 */
export interface QuickSightAnalysisUniqueValuesComputation {
  Category?: QuickSightAnalysisDimensionField;
  ComputationId: string;
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.ValidationStrategy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-validationstrategy.html | AWS::QuickSight::Analysis.ValidationStrategy}
 */
export interface QuickSightAnalysisValidationStrategy {
  Mode: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.VisibleRangeOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-visiblerangeoptions.html | AWS::QuickSight::Analysis.VisibleRangeOptions}
 */
export interface QuickSightAnalysisVisibleRangeOptions {
  PercentRange?: QuickSightAnalysisPercentVisibleRange;
}
/**
 * Type definition for AWS::QuickSight::Analysis.Visual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-visual.html | AWS::QuickSight::Analysis.Visual}
 */
export interface QuickSightAnalysisVisual {
  FunnelChartVisual?: QuickSightAnalysisFunnelChartVisual;
  FilledMapVisual?: QuickSightAnalysisFilledMapVisual;
  BoxPlotVisual?: QuickSightAnalysisBoxPlotVisual;
  WaterfallVisual?: QuickSightAnalysisWaterfallVisual;
  CustomContentVisual?: QuickSightAnalysisCustomContentVisual;
  PieChartVisual?: QuickSightAnalysisPieChartVisual;
  KPIVisual?: QuickSightAnalysisKPIVisual;
  HistogramVisual?: QuickSightAnalysisHistogramVisual;
  TableVisual?: QuickSightAnalysisTableVisual;
  PivotTableVisual?: QuickSightAnalysisPivotTableVisual;
  GeospatialMapVisual?: QuickSightAnalysisGeospatialMapVisual;
  BarChartVisual?: QuickSightAnalysisBarChartVisual;
  ScatterPlotVisual?: QuickSightAnalysisScatterPlotVisual;
  RadarChartVisual?: QuickSightAnalysisRadarChartVisual;
  HeatMapVisual?: QuickSightAnalysisHeatMapVisual;
  TreeMapVisual?: QuickSightAnalysisTreeMapVisual;
  ComboChartVisual?: QuickSightAnalysisComboChartVisual;
  WordCloudVisual?: QuickSightAnalysisWordCloudVisual;
  InsightVisual?: QuickSightAnalysisInsightVisual;
  SankeyDiagramVisual?: QuickSightAnalysisSankeyDiagramVisual;
  GaugeChartVisual?: QuickSightAnalysisGaugeChartVisual;
  LineChartVisual?: QuickSightAnalysisLineChartVisual;
  EmptyVisual?: QuickSightAnalysisEmptyVisual;
}
/**
 * Type definition for AWS::QuickSight::Analysis.VisualCustomAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-visualcustomaction.html | AWS::QuickSight::Analysis.VisualCustomAction}
 */
export interface QuickSightAnalysisVisualCustomAction {
  Status?: string;
  Trigger: string;
  CustomActionId: string;
  Name: string;
  ActionOperations: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.VisualCustomActionOperation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-visualcustomactionoperation.html | AWS::QuickSight::Analysis.VisualCustomActionOperation}
 */
export interface QuickSightAnalysisVisualCustomActionOperation {
  NavigationOperation?: QuickSightAnalysisCustomActionNavigationOperation;
  SetParametersOperation?: QuickSightAnalysisCustomActionSetParametersOperation;
  FilterOperation?: QuickSightAnalysisCustomActionFilterOperation;
  URLOperation?: QuickSightAnalysisCustomActionURLOperation;
}
/**
 * Type definition for AWS::QuickSight::Analysis.VisualPalette
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-visualpalette.html | AWS::QuickSight::Analysis.VisualPalette}
 */
export interface QuickSightAnalysisVisualPalette {
  ChartColor?: string;
  ColorMap?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.VisualSubtitleLabelOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-visualsubtitlelabeloptions.html | AWS::QuickSight::Analysis.VisualSubtitleLabelOptions}
 */
export interface QuickSightAnalysisVisualSubtitleLabelOptions {
  Visibility?: string;
  FormatText?: QuickSightAnalysisLongFormatText;
}
/**
 * Type definition for AWS::QuickSight::Analysis.VisualTitleLabelOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-visualtitlelabeloptions.html | AWS::QuickSight::Analysis.VisualTitleLabelOptions}
 */
export interface QuickSightAnalysisVisualTitleLabelOptions {
  Visibility?: string;
  FormatText?: QuickSightAnalysisShortFormatText;
}
/**
 * Type definition for AWS::QuickSight::Analysis.WaterfallChartAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-waterfallchartaggregatedfieldwells.html | AWS::QuickSight::Analysis.WaterfallChartAggregatedFieldWells}
 */
export interface QuickSightAnalysisWaterfallChartAggregatedFieldWells {
  Categories?: any[];
  Breakdowns?: any[];
  Values?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.WaterfallChartConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-waterfallchartconfiguration.html | AWS::QuickSight::Analysis.WaterfallChartConfiguration}
 */
export interface QuickSightAnalysisWaterfallChartConfiguration {
  CategoryAxisLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  SortConfiguration?: QuickSightAnalysisWaterfallChartSortConfiguration;
  Legend?: QuickSightAnalysisLegendOptions;
  DataLabels?: QuickSightAnalysisDataLabelOptions;
  PrimaryYAxisLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  FieldWells?: QuickSightAnalysisWaterfallChartFieldWells;
  WaterfallChartOptions?: QuickSightAnalysisWaterfallChartOptions;
  CategoryAxisDisplayOptions?: QuickSightAnalysisAxisDisplayOptions;
  PrimaryYAxisDisplayOptions?: QuickSightAnalysisAxisDisplayOptions;
  VisualPalette?: QuickSightAnalysisVisualPalette;
}
/**
 * Type definition for AWS::QuickSight::Analysis.WaterfallChartFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-waterfallchartfieldwells.html | AWS::QuickSight::Analysis.WaterfallChartFieldWells}
 */
export interface QuickSightAnalysisWaterfallChartFieldWells {
  WaterfallChartAggregatedFieldWells?: QuickSightAnalysisWaterfallChartAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Analysis.WaterfallChartOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-waterfallchartoptions.html | AWS::QuickSight::Analysis.WaterfallChartOptions}
 */
export interface QuickSightAnalysisWaterfallChartOptions {
  TotalBarLabel?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.WaterfallChartSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-waterfallchartsortconfiguration.html | AWS::QuickSight::Analysis.WaterfallChartSortConfiguration}
 */
export interface QuickSightAnalysisWaterfallChartSortConfiguration {
  BreakdownItemsLimit?: QuickSightAnalysisItemsLimitConfiguration;
  CategorySort?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.WaterfallVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-waterfallvisual.html | AWS::QuickSight::Analysis.WaterfallVisual}
 */
export interface QuickSightAnalysisWaterfallVisual {
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightAnalysisWaterfallChartConfiguration;
  Actions?: any[];
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.WhatIfPointScenario
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-whatifpointscenario.html | AWS::QuickSight::Analysis.WhatIfPointScenario}
 */
export interface QuickSightAnalysisWhatIfPointScenario {
  Value: number;
  Date: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.WhatIfRangeScenario
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-whatifrangescenario.html | AWS::QuickSight::Analysis.WhatIfRangeScenario}
 */
export interface QuickSightAnalysisWhatIfRangeScenario {
  StartDate: string;
  Value: number;
  EndDate: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.WordCloudAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-wordcloudaggregatedfieldwells.html | AWS::QuickSight::Analysis.WordCloudAggregatedFieldWells}
 */
export interface QuickSightAnalysisWordCloudAggregatedFieldWells {
  GroupBy?: any[];
  Size?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.WordCloudChartConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-wordcloudchartconfiguration.html | AWS::QuickSight::Analysis.WordCloudChartConfiguration}
 */
export interface QuickSightAnalysisWordCloudChartConfiguration {
  SortConfiguration?: QuickSightAnalysisWordCloudSortConfiguration;
  CategoryLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  FieldWells?: QuickSightAnalysisWordCloudFieldWells;
  WordCloudOptions?: QuickSightAnalysisWordCloudOptions;
}
/**
 * Type definition for AWS::QuickSight::Analysis.WordCloudFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-wordcloudfieldwells.html | AWS::QuickSight::Analysis.WordCloudFieldWells}
 */
export interface QuickSightAnalysisWordCloudFieldWells {
  WordCloudAggregatedFieldWells?: QuickSightAnalysisWordCloudAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Analysis.WordCloudOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-wordcloudoptions.html | AWS::QuickSight::Analysis.WordCloudOptions}
 */
export interface QuickSightAnalysisWordCloudOptions {
  WordOrientation?: string;
  WordScaling?: string;
  CloudLayout?: string;
  MaximumStringLength?: number;
  WordCasing?: string;
  WordPadding?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis.WordCloudSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-wordcloudsortconfiguration.html | AWS::QuickSight::Analysis.WordCloudSortConfiguration}
 */
export interface QuickSightAnalysisWordCloudSortConfiguration {
  CategoryItemsLimit?: QuickSightAnalysisItemsLimitConfiguration;
  CategorySort?: any[];
}
/**
 * Type definition for AWS::QuickSight::Analysis.WordCloudVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-wordcloudvisual.html | AWS::QuickSight::Analysis.WordCloudVisual}
 */
export interface QuickSightAnalysisWordCloudVisual {
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightAnalysisWordCloudChartConfiguration;
  Actions?: any[];
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.AdHocFilteringOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-adhocfilteringoption.html | AWS::QuickSight::Dashboard.AdHocFilteringOption}
 */
export interface QuickSightDashboardAdHocFilteringOption {
  AvailabilityStatus?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.AggregationFunction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-aggregationfunction.html | AWS::QuickSight::Dashboard.AggregationFunction}
 */
export interface QuickSightDashboardAggregationFunction {
  AttributeAggregationFunction?: QuickSightDashboardAttributeAggregationFunction;
  DateAggregationFunction?: string;
  NumericalAggregationFunction?: QuickSightDashboardNumericalAggregationFunction;
  CategoricalAggregationFunction?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.AggregationSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-aggregationsortconfiguration.html | AWS::QuickSight::Dashboard.AggregationSortConfiguration}
 */
export interface QuickSightDashboardAggregationSortConfiguration {
  AggregationFunction?: QuickSightDashboardAggregationFunction;
  SortDirection: string;
  Column: QuickSightDashboardColumnIdentifier;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.AnalysisDefaults
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-analysisdefaults.html | AWS::QuickSight::Dashboard.AnalysisDefaults}
 */
export interface QuickSightDashboardAnalysisDefaults {
  DefaultNewSheetConfiguration: QuickSightDashboardDefaultNewSheetConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.AnchorDateConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-anchordateconfiguration.html | AWS::QuickSight::Dashboard.AnchorDateConfiguration}
 */
export interface QuickSightDashboardAnchorDateConfiguration {
  AnchorOption?: string;
  ParameterName?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ArcAxisConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-arcaxisconfiguration.html | AWS::QuickSight::Dashboard.ArcAxisConfiguration}
 */
export interface QuickSightDashboardArcAxisConfiguration {
  Range?: QuickSightDashboardArcAxisDisplayRange;
  ReserveRange?: number;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ArcAxisDisplayRange
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-arcaxisdisplayrange.html | AWS::QuickSight::Dashboard.ArcAxisDisplayRange}
 */
export interface QuickSightDashboardArcAxisDisplayRange {
  Min?: number;
  Max?: number;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ArcConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-arcconfiguration.html | AWS::QuickSight::Dashboard.ArcConfiguration}
 */
export interface QuickSightDashboardArcConfiguration {
  ArcAngle?: number;
  ArcThickness?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ArcOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-arcoptions.html | AWS::QuickSight::Dashboard.ArcOptions}
 */
export interface QuickSightDashboardArcOptions {
  ArcThickness?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.AttributeAggregationFunction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-attributeaggregationfunction.html | AWS::QuickSight::Dashboard.AttributeAggregationFunction}
 */
export interface QuickSightDashboardAttributeAggregationFunction {
  SimpleAttributeAggregation?: string;
  ValueForMultipleValues?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.AxisDataOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-axisdataoptions.html | AWS::QuickSight::Dashboard.AxisDataOptions}
 */
export interface QuickSightDashboardAxisDataOptions {
  DateAxisOptions?: QuickSightDashboardDateAxisOptions;
  NumericAxisOptions?: QuickSightDashboardNumericAxisOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.AxisDisplayMinMaxRange
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-axisdisplayminmaxrange.html | AWS::QuickSight::Dashboard.AxisDisplayMinMaxRange}
 */
export interface QuickSightDashboardAxisDisplayMinMaxRange {
  Minimum?: number;
  Maximum?: number;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.AxisDisplayOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-axisdisplayoptions.html | AWS::QuickSight::Dashboard.AxisDisplayOptions}
 */
export interface QuickSightDashboardAxisDisplayOptions {
  DataOptions?: QuickSightDashboardAxisDataOptions;
  TickLabelOptions?: QuickSightDashboardAxisTickLabelOptions;
  AxisOffset?: string;
  AxisLineVisibility?: string;
  GridLineVisibility?: string;
  ScrollbarOptions?: QuickSightDashboardScrollBarOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.AxisDisplayRange
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-axisdisplayrange.html | AWS::QuickSight::Dashboard.AxisDisplayRange}
 */
export interface QuickSightDashboardAxisDisplayRange {
  DataDriven?: object;
  MinMax?: QuickSightDashboardAxisDisplayMinMaxRange;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.AxisLabelOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-axislabeloptions.html | AWS::QuickSight::Dashboard.AxisLabelOptions}
 */
export interface QuickSightDashboardAxisLabelOptions {
  CustomLabel?: string;
  ApplyTo?: QuickSightDashboardAxisLabelReferenceOptions;
  FontConfiguration?: QuickSightDashboardFontConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.AxisLabelReferenceOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-axislabelreferenceoptions.html | AWS::QuickSight::Dashboard.AxisLabelReferenceOptions}
 */
export interface QuickSightDashboardAxisLabelReferenceOptions {
  Column: QuickSightDashboardColumnIdentifier;
  FieldId: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.AxisLinearScale
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-axislinearscale.html | AWS::QuickSight::Dashboard.AxisLinearScale}
 */
export interface QuickSightDashboardAxisLinearScale {
  StepSize?: number;
  StepCount?: number;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.AxisLogarithmicScale
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-axislogarithmicscale.html | AWS::QuickSight::Dashboard.AxisLogarithmicScale}
 */
export interface QuickSightDashboardAxisLogarithmicScale {
  Base?: number;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.AxisScale
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-axisscale.html | AWS::QuickSight::Dashboard.AxisScale}
 */
export interface QuickSightDashboardAxisScale {
  Logarithmic?: QuickSightDashboardAxisLogarithmicScale;
  Linear?: QuickSightDashboardAxisLinearScale;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.AxisTickLabelOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-axisticklabeloptions.html | AWS::QuickSight::Dashboard.AxisTickLabelOptions}
 */
export interface QuickSightDashboardAxisTickLabelOptions {
  RotationAngle?: number;
  LabelOptions?: QuickSightDashboardLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.BarChartAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-barchartaggregatedfieldwells.html | AWS::QuickSight::Dashboard.BarChartAggregatedFieldWells}
 */
export interface QuickSightDashboardBarChartAggregatedFieldWells {
  Category?: any[];
  Colors?: any[];
  Values?: any[];
  SmallMultiples?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.BarChartConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-barchartconfiguration.html | AWS::QuickSight::Dashboard.BarChartConfiguration}
 */
export interface QuickSightDashboardBarChartConfiguration {
  SortConfiguration?: QuickSightDashboardBarChartSortConfiguration;
  Legend?: QuickSightDashboardLegendOptions;
  ReferenceLines?: any[];
  DataLabels?: QuickSightDashboardDataLabelOptions;
  ColorLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  CategoryLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  Tooltip?: QuickSightDashboardTooltipOptions;
  SmallMultiplesOptions?: QuickSightDashboardSmallMultiplesOptions;
  Orientation?: string;
  VisualPalette?: QuickSightDashboardVisualPalette;
  ValueLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  BarsArrangement?: string;
  CategoryAxis?: QuickSightDashboardAxisDisplayOptions;
  ContributionAnalysisDefaults?: any[];
  FieldWells?: QuickSightDashboardBarChartFieldWells;
  ValueAxis?: QuickSightDashboardAxisDisplayOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.BarChartFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-barchartfieldwells.html | AWS::QuickSight::Dashboard.BarChartFieldWells}
 */
export interface QuickSightDashboardBarChartFieldWells {
  BarChartAggregatedFieldWells?: QuickSightDashboardBarChartAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.BarChartSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-barchartsortconfiguration.html | AWS::QuickSight::Dashboard.BarChartSortConfiguration}
 */
export interface QuickSightDashboardBarChartSortConfiguration {
  SmallMultiplesSort?: any[];
  ColorSort?: any[];
  ColorItemsLimit?: QuickSightDashboardItemsLimitConfiguration;
  CategoryItemsLimit?: QuickSightDashboardItemsLimitConfiguration;
  CategorySort?: any[];
  SmallMultiplesLimitConfiguration?: QuickSightDashboardItemsLimitConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.BarChartVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-barchartvisual.html | AWS::QuickSight::Dashboard.BarChartVisual}
 */
export interface QuickSightDashboardBarChartVisual {
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightDashboardBarChartConfiguration;
  Actions?: any[];
  Title?: QuickSightDashboardVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.BinCountOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-bincountoptions.html | AWS::QuickSight::Dashboard.BinCountOptions}
 */
export interface QuickSightDashboardBinCountOptions {
  Value?: number;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.BinWidthOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-binwidthoptions.html | AWS::QuickSight::Dashboard.BinWidthOptions}
 */
export interface QuickSightDashboardBinWidthOptions {
  BinCountLimit?: number;
  Value?: number;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.BodySectionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-bodysectionconfiguration.html | AWS::QuickSight::Dashboard.BodySectionConfiguration}
 */
export interface QuickSightDashboardBodySectionConfiguration {
  Content: QuickSightDashboardBodySectionContent;
  Style?: QuickSightDashboardSectionStyle;
  PageBreakConfiguration?: QuickSightDashboardSectionPageBreakConfiguration;
  SectionId: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.BodySectionContent
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-bodysectioncontent.html | AWS::QuickSight::Dashboard.BodySectionContent}
 */
export interface QuickSightDashboardBodySectionContent {
  Layout?: QuickSightDashboardSectionLayoutConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.BoxPlotAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-boxplotaggregatedfieldwells.html | AWS::QuickSight::Dashboard.BoxPlotAggregatedFieldWells}
 */
export interface QuickSightDashboardBoxPlotAggregatedFieldWells {
  GroupBy?: any[];
  Values?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.BoxPlotChartConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-boxplotchartconfiguration.html | AWS::QuickSight::Dashboard.BoxPlotChartConfiguration}
 */
export interface QuickSightDashboardBoxPlotChartConfiguration {
  SortConfiguration?: QuickSightDashboardBoxPlotSortConfiguration;
  Legend?: QuickSightDashboardLegendOptions;
  ReferenceLines?: any[];
  CategoryAxis?: QuickSightDashboardAxisDisplayOptions;
  PrimaryYAxisLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  CategoryLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  FieldWells?: QuickSightDashboardBoxPlotFieldWells;
  Tooltip?: QuickSightDashboardTooltipOptions;
  BoxPlotOptions?: QuickSightDashboardBoxPlotOptions;
  PrimaryYAxisDisplayOptions?: QuickSightDashboardAxisDisplayOptions;
  VisualPalette?: QuickSightDashboardVisualPalette;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.BoxPlotFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-boxplotfieldwells.html | AWS::QuickSight::Dashboard.BoxPlotFieldWells}
 */
export interface QuickSightDashboardBoxPlotFieldWells {
  BoxPlotAggregatedFieldWells?: QuickSightDashboardBoxPlotAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.BoxPlotOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-boxplotoptions.html | AWS::QuickSight::Dashboard.BoxPlotOptions}
 */
export interface QuickSightDashboardBoxPlotOptions {
  StyleOptions?: QuickSightDashboardBoxPlotStyleOptions;
  OutlierVisibility?: string;
  AllDataPointsVisibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.BoxPlotSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-boxplotsortconfiguration.html | AWS::QuickSight::Dashboard.BoxPlotSortConfiguration}
 */
export interface QuickSightDashboardBoxPlotSortConfiguration {
  CategorySort?: any[];
  PaginationConfiguration?: QuickSightDashboardPaginationConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.BoxPlotStyleOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-boxplotstyleoptions.html | AWS::QuickSight::Dashboard.BoxPlotStyleOptions}
 */
export interface QuickSightDashboardBoxPlotStyleOptions {
  FillStyle?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.BoxPlotVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-boxplotvisual.html | AWS::QuickSight::Dashboard.BoxPlotVisual}
 */
export interface QuickSightDashboardBoxPlotVisual {
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightDashboardBoxPlotChartConfiguration;
  Actions?: any[];
  Title?: QuickSightDashboardVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.CalculatedField
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-calculatedfield.html | AWS::QuickSight::Dashboard.CalculatedField}
 */
export interface QuickSightDashboardCalculatedField {
  Expression: string;
  DataSetIdentifier: string;
  Name: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.CalculatedMeasureField
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-calculatedmeasurefield.html | AWS::QuickSight::Dashboard.CalculatedMeasureField}
 */
export interface QuickSightDashboardCalculatedMeasureField {
  Expression: string;
  FieldId: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.CascadingControlConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-cascadingcontrolconfiguration.html | AWS::QuickSight::Dashboard.CascadingControlConfiguration}
 */
export interface QuickSightDashboardCascadingControlConfiguration {
  SourceControls?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.CascadingControlSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-cascadingcontrolsource.html | AWS::QuickSight::Dashboard.CascadingControlSource}
 */
export interface QuickSightDashboardCascadingControlSource {
  SourceSheetControlId?: string;
  ColumnToMatch?: QuickSightDashboardColumnIdentifier;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.CategoricalDimensionField
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-categoricaldimensionfield.html | AWS::QuickSight::Dashboard.CategoricalDimensionField}
 */
export interface QuickSightDashboardCategoricalDimensionField {
  HierarchyId?: string;
  FormatConfiguration?: QuickSightDashboardStringFormatConfiguration;
  Column: QuickSightDashboardColumnIdentifier;
  FieldId: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.CategoricalMeasureField
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-categoricalmeasurefield.html | AWS::QuickSight::Dashboard.CategoricalMeasureField}
 */
export interface QuickSightDashboardCategoricalMeasureField {
  AggregationFunction?: string;
  FormatConfiguration?: QuickSightDashboardStringFormatConfiguration;
  Column: QuickSightDashboardColumnIdentifier;
  FieldId: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.CategoryDrillDownFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-categorydrilldownfilter.html | AWS::QuickSight::Dashboard.CategoryDrillDownFilter}
 */
export interface QuickSightDashboardCategoryDrillDownFilter {
  Column: QuickSightDashboardColumnIdentifier;
  CategoryValues: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.CategoryFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-categoryfilter.html | AWS::QuickSight::Dashboard.CategoryFilter}
 */
export interface QuickSightDashboardCategoryFilter {
  Configuration: QuickSightDashboardCategoryFilterConfiguration;
  Column: QuickSightDashboardColumnIdentifier;
  FilterId: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.CategoryFilterConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-categoryfilterconfiguration.html | AWS::QuickSight::Dashboard.CategoryFilterConfiguration}
 */
export interface QuickSightDashboardCategoryFilterConfiguration {
  CustomFilterListConfiguration?: QuickSightDashboardCustomFilterListConfiguration;
  CustomFilterConfiguration?: QuickSightDashboardCustomFilterConfiguration;
  FilterListConfiguration?: QuickSightDashboardFilterListConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ChartAxisLabelOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-chartaxislabeloptions.html | AWS::QuickSight::Dashboard.ChartAxisLabelOptions}
 */
export interface QuickSightDashboardChartAxisLabelOptions {
  Visibility?: string;
  SortIconVisibility?: string;
  AxisLabelOptions?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ClusterMarker
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-clustermarker.html | AWS::QuickSight::Dashboard.ClusterMarker}
 */
export interface QuickSightDashboardClusterMarker {
  SimpleClusterMarker?: QuickSightDashboardSimpleClusterMarker;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ClusterMarkerConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-clustermarkerconfiguration.html | AWS::QuickSight::Dashboard.ClusterMarkerConfiguration}
 */
export interface QuickSightDashboardClusterMarkerConfiguration {
  ClusterMarker?: QuickSightDashboardClusterMarker;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ColorScale
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-colorscale.html | AWS::QuickSight::Dashboard.ColorScale}
 */
export interface QuickSightDashboardColorScale {
  Colors: any[];
  ColorFillType: string;
  NullValueColor?: QuickSightDashboardDataColor;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ColorsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-colorsconfiguration.html | AWS::QuickSight::Dashboard.ColorsConfiguration}
 */
export interface QuickSightDashboardColorsConfiguration {
  CustomColors?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ColumnConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-columnconfiguration.html | AWS::QuickSight::Dashboard.ColumnConfiguration}
 */
export interface QuickSightDashboardColumnConfiguration {
  Role?: string;
  FormatConfiguration?: QuickSightDashboardFormatConfiguration;
  Column: QuickSightDashboardColumnIdentifier;
  ColorsConfiguration?: QuickSightDashboardColorsConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ColumnHierarchy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-columnhierarchy.html | AWS::QuickSight::Dashboard.ColumnHierarchy}
 */
export interface QuickSightDashboardColumnHierarchy {
  DateTimeHierarchy?: QuickSightDashboardDateTimeHierarchy;
  ExplicitHierarchy?: QuickSightDashboardExplicitHierarchy;
  PredefinedHierarchy?: QuickSightDashboardPredefinedHierarchy;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ColumnIdentifier
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-columnidentifier.html | AWS::QuickSight::Dashboard.ColumnIdentifier}
 */
export interface QuickSightDashboardColumnIdentifier {
  ColumnName: string;
  DataSetIdentifier: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ColumnSort
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-columnsort.html | AWS::QuickSight::Dashboard.ColumnSort}
 */
export interface QuickSightDashboardColumnSort {
  AggregationFunction?: QuickSightDashboardAggregationFunction;
  SortBy: QuickSightDashboardColumnIdentifier;
  Direction: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ColumnTooltipItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-columntooltipitem.html | AWS::QuickSight::Dashboard.ColumnTooltipItem}
 */
export interface QuickSightDashboardColumnTooltipItem {
  Aggregation?: QuickSightDashboardAggregationFunction;
  Column: QuickSightDashboardColumnIdentifier;
  Label?: string;
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ComboChartAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-combochartaggregatedfieldwells.html | AWS::QuickSight::Dashboard.ComboChartAggregatedFieldWells}
 */
export interface QuickSightDashboardComboChartAggregatedFieldWells {
  BarValues?: any[];
  Category?: any[];
  Colors?: any[];
  LineValues?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ComboChartConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-combochartconfiguration.html | AWS::QuickSight::Dashboard.ComboChartConfiguration}
 */
export interface QuickSightDashboardComboChartConfiguration {
  SortConfiguration?: QuickSightDashboardComboChartSortConfiguration;
  Legend?: QuickSightDashboardLegendOptions;
  ReferenceLines?: any[];
  ColorLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  BarDataLabels?: QuickSightDashboardDataLabelOptions;
  CategoryLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  Tooltip?: QuickSightDashboardTooltipOptions;
  PrimaryYAxisDisplayOptions?: QuickSightDashboardAxisDisplayOptions;
  VisualPalette?: QuickSightDashboardVisualPalette;
  BarsArrangement?: string;
  SecondaryYAxisLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  LineDataLabels?: QuickSightDashboardDataLabelOptions;
  CategoryAxis?: QuickSightDashboardAxisDisplayOptions;
  PrimaryYAxisLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  FieldWells?: QuickSightDashboardComboChartFieldWells;
  SecondaryYAxisDisplayOptions?: QuickSightDashboardAxisDisplayOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ComboChartFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-combochartfieldwells.html | AWS::QuickSight::Dashboard.ComboChartFieldWells}
 */
export interface QuickSightDashboardComboChartFieldWells {
  ComboChartAggregatedFieldWells?: QuickSightDashboardComboChartAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ComboChartSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-combochartsortconfiguration.html | AWS::QuickSight::Dashboard.ComboChartSortConfiguration}
 */
export interface QuickSightDashboardComboChartSortConfiguration {
  ColorSort?: any[];
  ColorItemsLimit?: QuickSightDashboardItemsLimitConfiguration;
  CategoryItemsLimit?: QuickSightDashboardItemsLimitConfiguration;
  CategorySort?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ComboChartVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-combochartvisual.html | AWS::QuickSight::Dashboard.ComboChartVisual}
 */
export interface QuickSightDashboardComboChartVisual {
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightDashboardComboChartConfiguration;
  Actions?: any[];
  Title?: QuickSightDashboardVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ComparisonConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-comparisonconfiguration.html | AWS::QuickSight::Dashboard.ComparisonConfiguration}
 */
export interface QuickSightDashboardComparisonConfiguration {
  ComparisonMethod?: string;
  ComparisonFormat?: QuickSightDashboardComparisonFormatConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ComparisonFormatConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-comparisonformatconfiguration.html | AWS::QuickSight::Dashboard.ComparisonFormatConfiguration}
 */
export interface QuickSightDashboardComparisonFormatConfiguration {
  NumberDisplayFormatConfiguration?: QuickSightDashboardNumberDisplayFormatConfiguration;
  PercentageDisplayFormatConfiguration?: QuickSightDashboardPercentageDisplayFormatConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.Computation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-computation.html | AWS::QuickSight::Dashboard.Computation}
 */
export interface QuickSightDashboardComputation {
  PeriodToDate?: QuickSightDashboardPeriodToDateComputation;
  GrowthRate?: QuickSightDashboardGrowthRateComputation;
  TopBottomRanked?: QuickSightDashboardTopBottomRankedComputation;
  TotalAggregation?: QuickSightDashboardTotalAggregationComputation;
  Forecast?: QuickSightDashboardForecastComputation;
  MaximumMinimum?: QuickSightDashboardMaximumMinimumComputation;
  PeriodOverPeriod?: QuickSightDashboardPeriodOverPeriodComputation;
  MetricComparison?: QuickSightDashboardMetricComparisonComputation;
  TopBottomMovers?: QuickSightDashboardTopBottomMoversComputation;
  UniqueValues?: QuickSightDashboardUniqueValuesComputation;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ConditionalFormattingColor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-conditionalformattingcolor.html | AWS::QuickSight::Dashboard.ConditionalFormattingColor}
 */
export interface QuickSightDashboardConditionalFormattingColor {
  Gradient?: QuickSightDashboardConditionalFormattingGradientColor;
  Solid?: QuickSightDashboardConditionalFormattingSolidColor;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ConditionalFormattingCustomIconCondition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-conditionalformattingcustomiconcondition.html | AWS::QuickSight::Dashboard.ConditionalFormattingCustomIconCondition}
 */
export interface QuickSightDashboardConditionalFormattingCustomIconCondition {
  Expression: string;
  Color?: string;
  DisplayConfiguration?: QuickSightDashboardConditionalFormattingIconDisplayConfiguration;
  IconOptions: QuickSightDashboardConditionalFormattingCustomIconOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ConditionalFormattingCustomIconOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-conditionalformattingcustomiconoptions.html | AWS::QuickSight::Dashboard.ConditionalFormattingCustomIconOptions}
 */
export interface QuickSightDashboardConditionalFormattingCustomIconOptions {
  UnicodeIcon?: string;
  Icon?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ConditionalFormattingGradientColor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-conditionalformattinggradientcolor.html | AWS::QuickSight::Dashboard.ConditionalFormattingGradientColor}
 */
export interface QuickSightDashboardConditionalFormattingGradientColor {
  Expression: string;
  Color: QuickSightDashboardGradientColor;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ConditionalFormattingIcon
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-conditionalformattingicon.html | AWS::QuickSight::Dashboard.ConditionalFormattingIcon}
 */
export interface QuickSightDashboardConditionalFormattingIcon {
  CustomCondition?: QuickSightDashboardConditionalFormattingCustomIconCondition;
  IconSet?: QuickSightDashboardConditionalFormattingIconSet;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ConditionalFormattingIconDisplayConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-conditionalformattingicondisplayconfiguration.html | AWS::QuickSight::Dashboard.ConditionalFormattingIconDisplayConfiguration}
 */
export interface QuickSightDashboardConditionalFormattingIconDisplayConfiguration {
  IconDisplayOption?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ConditionalFormattingIconSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-conditionalformattingiconset.html | AWS::QuickSight::Dashboard.ConditionalFormattingIconSet}
 */
export interface QuickSightDashboardConditionalFormattingIconSet {
  Expression: string;
  IconSetType?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ConditionalFormattingSolidColor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-conditionalformattingsolidcolor.html | AWS::QuickSight::Dashboard.ConditionalFormattingSolidColor}
 */
export interface QuickSightDashboardConditionalFormattingSolidColor {
  Expression: string;
  Color?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ContributionAnalysisDefault
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-contributionanalysisdefault.html | AWS::QuickSight::Dashboard.ContributionAnalysisDefault}
 */
export interface QuickSightDashboardContributionAnalysisDefault {
  MeasureFieldId: string;
  ContributorDimensions: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.CurrencyDisplayFormatConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-currencydisplayformatconfiguration.html | AWS::QuickSight::Dashboard.CurrencyDisplayFormatConfiguration}
 */
export interface QuickSightDashboardCurrencyDisplayFormatConfiguration {
  NegativeValueConfiguration?: QuickSightDashboardNegativeValueConfiguration;
  DecimalPlacesConfiguration?: QuickSightDashboardDecimalPlacesConfiguration;
  NumberScale?: string;
  NullValueFormatConfiguration?: QuickSightDashboardNullValueFormatConfiguration;
  Suffix?: string;
  SeparatorConfiguration?: QuickSightDashboardNumericSeparatorConfiguration;
  Symbol?: string;
  Prefix?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.CustomActionFilterOperation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customactionfilteroperation.html | AWS::QuickSight::Dashboard.CustomActionFilterOperation}
 */
export interface QuickSightDashboardCustomActionFilterOperation {
  SelectedFieldsConfiguration: QuickSightDashboardFilterOperationSelectedFieldsConfiguration;
  TargetVisualsConfiguration: QuickSightDashboardFilterOperationTargetVisualsConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.CustomActionNavigationOperation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customactionnavigationoperation.html | AWS::QuickSight::Dashboard.CustomActionNavigationOperation}
 */
export interface QuickSightDashboardCustomActionNavigationOperation {
  LocalNavigationConfiguration?: QuickSightDashboardLocalNavigationConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.CustomActionSetParametersOperation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customactionsetparametersoperation.html | AWS::QuickSight::Dashboard.CustomActionSetParametersOperation}
 */
export interface QuickSightDashboardCustomActionSetParametersOperation {
  ParameterValueConfigurations: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.CustomActionURLOperation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customactionurloperation.html | AWS::QuickSight::Dashboard.CustomActionURLOperation}
 */
export interface QuickSightDashboardCustomActionURLOperation {
  URLTemplate: string;
  URLTarget: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.CustomColor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customcolor.html | AWS::QuickSight::Dashboard.CustomColor}
 */
export interface QuickSightDashboardCustomColor {
  Color: string;
  FieldValue?: string;
  SpecialValue?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.CustomContentConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customcontentconfiguration.html | AWS::QuickSight::Dashboard.CustomContentConfiguration}
 */
export interface QuickSightDashboardCustomContentConfiguration {
  ContentUrl?: string;
  ContentType?: string;
  ImageScaling?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.CustomContentVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customcontentvisual.html | AWS::QuickSight::Dashboard.CustomContentVisual}
 */
export interface QuickSightDashboardCustomContentVisual {
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightDashboardCustomContentConfiguration;
  Actions?: any[];
  DataSetIdentifier: string;
  Title?: QuickSightDashboardVisualTitleLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.CustomFilterConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customfilterconfiguration.html | AWS::QuickSight::Dashboard.CustomFilterConfiguration}
 */
export interface QuickSightDashboardCustomFilterConfiguration {
  CategoryValue?: string;
  ParameterName?: string;
  NullOption: string;
  MatchOperator: string;
  SelectAllOptions?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.CustomFilterListConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customfilterlistconfiguration.html | AWS::QuickSight::Dashboard.CustomFilterListConfiguration}
 */
export interface QuickSightDashboardCustomFilterListConfiguration {
  CategoryValues?: any[];
  NullOption: string;
  MatchOperator: string;
  SelectAllOptions?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.CustomNarrativeOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customnarrativeoptions.html | AWS::QuickSight::Dashboard.CustomNarrativeOptions}
 */
export interface QuickSightDashboardCustomNarrativeOptions {
  Narrative: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.CustomParameterValues
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customparametervalues.html | AWS::QuickSight::Dashboard.CustomParameterValues}
 */
export interface QuickSightDashboardCustomParameterValues {
  DecimalValues?: any[];
  IntegerValues?: any[];
  StringValues?: any[];
  DateTimeValues?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.CustomValuesConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customvaluesconfiguration.html | AWS::QuickSight::Dashboard.CustomValuesConfiguration}
 */
export interface QuickSightDashboardCustomValuesConfiguration {
  IncludeNullValue?: boolean;
  CustomValues: QuickSightDashboardCustomParameterValues;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DashboardError
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dashboarderror.html | AWS::QuickSight::Dashboard.DashboardError}
 */
export interface QuickSightDashboardDashboardError {
  Type?: string;
  Message?: string;
  ViolatedEntities?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DashboardPublishOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dashboardpublishoptions.html | AWS::QuickSight::Dashboard.DashboardPublishOptions}
 */
export interface QuickSightDashboardDashboardPublishOptions {
  SheetControlsOption?: QuickSightDashboardSheetControlsOption;
  ExportToCSVOption?: QuickSightDashboardExportToCSVOption;
  DataPointMenuLabelOption?: QuickSightDashboardDataPointMenuLabelOption;
  DataPointDrillUpDownOption?: QuickSightDashboardDataPointDrillUpDownOption;
  AdHocFilteringOption?: QuickSightDashboardAdHocFilteringOption;
  VisualPublishOptions?: QuickSightDashboardDashboardVisualPublishOptions;
  VisualMenuOption?: QuickSightDashboardVisualMenuOption;
  DataPointTooltipOption?: QuickSightDashboardDataPointTooltipOption;
  VisualAxisSortOption?: QuickSightDashboardVisualAxisSortOption;
  ExportWithHiddenFieldsOption?: QuickSightDashboardExportWithHiddenFieldsOption;
  SheetLayoutElementMaximizationOption?: QuickSightDashboardSheetLayoutElementMaximizationOption;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DashboardSourceEntity
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dashboardsourceentity.html | AWS::QuickSight::Dashboard.DashboardSourceEntity}
 */
export interface QuickSightDashboardDashboardSourceEntity {
  SourceTemplate?: QuickSightDashboardDashboardSourceTemplate;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DashboardSourceTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dashboardsourcetemplate.html | AWS::QuickSight::Dashboard.DashboardSourceTemplate}
 */
export interface QuickSightDashboardDashboardSourceTemplate {
  DataSetReferences: any[];
  Arn: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DashboardVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dashboardversion.html | AWS::QuickSight::Dashboard.DashboardVersion}
 */
export interface QuickSightDashboardDashboardVersion {
  Status?: string;
  Errors?: any[];
  CreatedTime?: string;
  Description?: string;
  DataSetArns?: any[];
  ThemeArn?: string;
  Arn?: string;
  SourceEntityArn?: string;
  VersionNumber?: number;
  Sheets?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DashboardVersionDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dashboardversiondefinition.html | AWS::QuickSight::Dashboard.DashboardVersionDefinition}
 */
export interface QuickSightDashboardDashboardVersionDefinition {
  FilterGroups?: any[];
  CalculatedFields?: any[];
  DataSetIdentifierDeclarations: any[];
  ColumnConfigurations?: any[];
  AnalysisDefaults?: QuickSightDashboardAnalysisDefaults;
  Sheets?: any[];
  ParameterDeclarations?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DashboardVisualPublishOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dashboardvisualpublishoptions.html | AWS::QuickSight::Dashboard.DashboardVisualPublishOptions}
 */
export interface QuickSightDashboardDashboardVisualPublishOptions {
  ExportHiddenFieldsOption?: QuickSightDashboardExportHiddenFieldsOption;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DataBarsOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-databarsoptions.html | AWS::QuickSight::Dashboard.DataBarsOptions}
 */
export interface QuickSightDashboardDataBarsOptions {
  PositiveColor?: string;
  FieldId: string;
  NegativeColor?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DataColor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datacolor.html | AWS::QuickSight::Dashboard.DataColor}
 */
export interface QuickSightDashboardDataColor {
  DataValue?: number;
  Color?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DataFieldSeriesItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datafieldseriesitem.html | AWS::QuickSight::Dashboard.DataFieldSeriesItem}
 */
export interface QuickSightDashboardDataFieldSeriesItem {
  FieldId: string;
  AxisBinding: string;
  FieldValue?: string;
  Settings?: QuickSightDashboardLineChartSeriesSettings;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DataLabelOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datalabeloptions.html | AWS::QuickSight::Dashboard.DataLabelOptions}
 */
export interface QuickSightDashboardDataLabelOptions {
  DataLabelTypes?: any[];
  MeasureLabelVisibility?: string;
  Position?: string;
  LabelContent?: string;
  Visibility?: string;
  TotalsVisibility?: string;
  Overlap?: string;
  CategoryLabelVisibility?: string;
  LabelColor?: string;
  LabelFontConfiguration?: QuickSightDashboardFontConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DataLabelType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datalabeltype.html | AWS::QuickSight::Dashboard.DataLabelType}
 */
export interface QuickSightDashboardDataLabelType {
  MaximumLabelType?: QuickSightDashboardMaximumLabelType;
  DataPathLabelType?: QuickSightDashboardDataPathLabelType;
  RangeEndsLabelType?: QuickSightDashboardRangeEndsLabelType;
  FieldLabelType?: QuickSightDashboardFieldLabelType;
  MinimumLabelType?: QuickSightDashboardMinimumLabelType;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DataPathColor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datapathcolor.html | AWS::QuickSight::Dashboard.DataPathColor}
 */
export interface QuickSightDashboardDataPathColor {
  Element: QuickSightDashboardDataPathValue;
  Color: string;
  TimeGranularity?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DataPathLabelType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datapathlabeltype.html | AWS::QuickSight::Dashboard.DataPathLabelType}
 */
export interface QuickSightDashboardDataPathLabelType {
  FieldId?: string;
  Visibility?: string;
  FieldValue?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DataPathSort
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datapathsort.html | AWS::QuickSight::Dashboard.DataPathSort}
 */
export interface QuickSightDashboardDataPathSort {
  SortPaths: any[];
  Direction: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DataPathType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datapathtype.html | AWS::QuickSight::Dashboard.DataPathType}
 */
export interface QuickSightDashboardDataPathType {
  PivotTableDataPathType?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DataPathValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datapathvalue.html | AWS::QuickSight::Dashboard.DataPathValue}
 */
export interface QuickSightDashboardDataPathValue {
  DataPathType?: QuickSightDashboardDataPathType;
  FieldId?: string;
  FieldValue?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DataPointDrillUpDownOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datapointdrillupdownoption.html | AWS::QuickSight::Dashboard.DataPointDrillUpDownOption}
 */
export interface QuickSightDashboardDataPointDrillUpDownOption {
  AvailabilityStatus?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DataPointMenuLabelOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datapointmenulabeloption.html | AWS::QuickSight::Dashboard.DataPointMenuLabelOption}
 */
export interface QuickSightDashboardDataPointMenuLabelOption {
  AvailabilityStatus?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DataPointTooltipOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datapointtooltipoption.html | AWS::QuickSight::Dashboard.DataPointTooltipOption}
 */
export interface QuickSightDashboardDataPointTooltipOption {
  AvailabilityStatus?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DataSetIdentifierDeclaration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datasetidentifierdeclaration.html | AWS::QuickSight::Dashboard.DataSetIdentifierDeclaration}
 */
export interface QuickSightDashboardDataSetIdentifierDeclaration {
  Identifier: string;
  DataSetArn: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DataSetReference
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datasetreference.html | AWS::QuickSight::Dashboard.DataSetReference}
 */
export interface QuickSightDashboardDataSetReference {
  DataSetArn: string;
  DataSetPlaceholder: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DateAxisOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dateaxisoptions.html | AWS::QuickSight::Dashboard.DateAxisOptions}
 */
export interface QuickSightDashboardDateAxisOptions {
  MissingDateVisibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DateDimensionField
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datedimensionfield.html | AWS::QuickSight::Dashboard.DateDimensionField}
 */
export interface QuickSightDashboardDateDimensionField {
  HierarchyId?: string;
  FormatConfiguration?: QuickSightDashboardDateTimeFormatConfiguration;
  Column: QuickSightDashboardColumnIdentifier;
  FieldId: string;
  DateGranularity?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DateMeasureField
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datemeasurefield.html | AWS::QuickSight::Dashboard.DateMeasureField}
 */
export interface QuickSightDashboardDateMeasureField {
  AggregationFunction?: string;
  FormatConfiguration?: QuickSightDashboardDateTimeFormatConfiguration;
  Column: QuickSightDashboardColumnIdentifier;
  FieldId: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DateTimeDefaultValues
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datetimedefaultvalues.html | AWS::QuickSight::Dashboard.DateTimeDefaultValues}
 */
export interface QuickSightDashboardDateTimeDefaultValues {
  RollingDate?: QuickSightDashboardRollingDateConfiguration;
  DynamicValue?: QuickSightDashboardDynamicDefaultValue;
  StaticValues?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DateTimeFormatConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datetimeformatconfiguration.html | AWS::QuickSight::Dashboard.DateTimeFormatConfiguration}
 */
export interface QuickSightDashboardDateTimeFormatConfiguration {
  NumericFormatConfiguration?: QuickSightDashboardNumericFormatConfiguration;
  NullValueFormatConfiguration?: QuickSightDashboardNullValueFormatConfiguration;
  DateTimeFormat?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DateTimeHierarchy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datetimehierarchy.html | AWS::QuickSight::Dashboard.DateTimeHierarchy}
 */
export interface QuickSightDashboardDateTimeHierarchy {
  HierarchyId: string;
  DrillDownFilters?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DateTimeParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datetimeparameter.html | AWS::QuickSight::Dashboard.DateTimeParameter}
 */
export interface QuickSightDashboardDateTimeParameter {
  Values: any[];
  Name: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DateTimeParameterDeclaration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datetimeparameterdeclaration.html | AWS::QuickSight::Dashboard.DateTimeParameterDeclaration}
 */
export interface QuickSightDashboardDateTimeParameterDeclaration {
  MappedDataSetParameters?: any[];
  DefaultValues?: QuickSightDashboardDateTimeDefaultValues;
  TimeGranularity?: string;
  ValueWhenUnset?: QuickSightDashboardDateTimeValueWhenUnsetConfiguration;
  Name: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DateTimePickerControlDisplayOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datetimepickercontroldisplayoptions.html | AWS::QuickSight::Dashboard.DateTimePickerControlDisplayOptions}
 */
export interface QuickSightDashboardDateTimePickerControlDisplayOptions {
  TitleOptions?: QuickSightDashboardLabelOptions;
  InfoIconLabelOptions?: QuickSightDashboardSheetControlInfoIconLabelOptions;
  DateTimeFormat?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DateTimeValueWhenUnsetConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datetimevaluewhenunsetconfiguration.html | AWS::QuickSight::Dashboard.DateTimeValueWhenUnsetConfiguration}
 */
export interface QuickSightDashboardDateTimeValueWhenUnsetConfiguration {
  ValueWhenUnsetOption?: string;
  CustomValue?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DecimalDefaultValues
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-decimaldefaultvalues.html | AWS::QuickSight::Dashboard.DecimalDefaultValues}
 */
export interface QuickSightDashboardDecimalDefaultValues {
  DynamicValue?: QuickSightDashboardDynamicDefaultValue;
  StaticValues?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DecimalParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-decimalparameter.html | AWS::QuickSight::Dashboard.DecimalParameter}
 */
export interface QuickSightDashboardDecimalParameter {
  Values: any[];
  Name: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DecimalParameterDeclaration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-decimalparameterdeclaration.html | AWS::QuickSight::Dashboard.DecimalParameterDeclaration}
 */
export interface QuickSightDashboardDecimalParameterDeclaration {
  MappedDataSetParameters?: any[];
  DefaultValues?: QuickSightDashboardDecimalDefaultValues;
  ParameterValueType: string;
  ValueWhenUnset?: QuickSightDashboardDecimalValueWhenUnsetConfiguration;
  Name: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DecimalPlacesConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-decimalplacesconfiguration.html | AWS::QuickSight::Dashboard.DecimalPlacesConfiguration}
 */
export interface QuickSightDashboardDecimalPlacesConfiguration {
  DecimalPlaces: number;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DecimalValueWhenUnsetConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-decimalvaluewhenunsetconfiguration.html | AWS::QuickSight::Dashboard.DecimalValueWhenUnsetConfiguration}
 */
export interface QuickSightDashboardDecimalValueWhenUnsetConfiguration {
  ValueWhenUnsetOption?: string;
  CustomValue?: number;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DefaultFreeFormLayoutConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-defaultfreeformlayoutconfiguration.html | AWS::QuickSight::Dashboard.DefaultFreeFormLayoutConfiguration}
 */
export interface QuickSightDashboardDefaultFreeFormLayoutConfiguration {
  CanvasSizeOptions: QuickSightDashboardFreeFormLayoutCanvasSizeOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DefaultGridLayoutConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-defaultgridlayoutconfiguration.html | AWS::QuickSight::Dashboard.DefaultGridLayoutConfiguration}
 */
export interface QuickSightDashboardDefaultGridLayoutConfiguration {
  CanvasSizeOptions: QuickSightDashboardGridLayoutCanvasSizeOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DefaultInteractiveLayoutConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-defaultinteractivelayoutconfiguration.html | AWS::QuickSight::Dashboard.DefaultInteractiveLayoutConfiguration}
 */
export interface QuickSightDashboardDefaultInteractiveLayoutConfiguration {
  FreeForm?: QuickSightDashboardDefaultFreeFormLayoutConfiguration;
  Grid?: QuickSightDashboardDefaultGridLayoutConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DefaultNewSheetConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-defaultnewsheetconfiguration.html | AWS::QuickSight::Dashboard.DefaultNewSheetConfiguration}
 */
export interface QuickSightDashboardDefaultNewSheetConfiguration {
  SheetContentType?: string;
  InteractiveLayoutConfiguration?: QuickSightDashboardDefaultInteractiveLayoutConfiguration;
  PaginatedLayoutConfiguration?: QuickSightDashboardDefaultPaginatedLayoutConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DefaultPaginatedLayoutConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-defaultpaginatedlayoutconfiguration.html | AWS::QuickSight::Dashboard.DefaultPaginatedLayoutConfiguration}
 */
export interface QuickSightDashboardDefaultPaginatedLayoutConfiguration {
  SectionBased?: QuickSightDashboardDefaultSectionBasedLayoutConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DefaultSectionBasedLayoutConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-defaultsectionbasedlayoutconfiguration.html | AWS::QuickSight::Dashboard.DefaultSectionBasedLayoutConfiguration}
 */
export interface QuickSightDashboardDefaultSectionBasedLayoutConfiguration {
  CanvasSizeOptions: QuickSightDashboardSectionBasedLayoutCanvasSizeOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DestinationParameterValueConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-destinationparametervalueconfiguration.html | AWS::QuickSight::Dashboard.DestinationParameterValueConfiguration}
 */
export interface QuickSightDashboardDestinationParameterValueConfiguration {
  CustomValuesConfiguration?: QuickSightDashboardCustomValuesConfiguration;
  SourceParameterName?: string;
  SelectAllValueOptions?: string;
  SourceField?: string;
  SourceColumn?: QuickSightDashboardColumnIdentifier;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DimensionField
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dimensionfield.html | AWS::QuickSight::Dashboard.DimensionField}
 */
export interface QuickSightDashboardDimensionField {
  DateDimensionField?: QuickSightDashboardDateDimensionField;
  NumericalDimensionField?: QuickSightDashboardNumericalDimensionField;
  CategoricalDimensionField?: QuickSightDashboardCategoricalDimensionField;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DonutCenterOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-donutcenteroptions.html | AWS::QuickSight::Dashboard.DonutCenterOptions}
 */
export interface QuickSightDashboardDonutCenterOptions {
  LabelVisibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DonutOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-donutoptions.html | AWS::QuickSight::Dashboard.DonutOptions}
 */
export interface QuickSightDashboardDonutOptions {
  DonutCenterOptions?: QuickSightDashboardDonutCenterOptions;
  ArcOptions?: QuickSightDashboardArcOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DrillDownFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-drilldownfilter.html | AWS::QuickSight::Dashboard.DrillDownFilter}
 */
export interface QuickSightDashboardDrillDownFilter {
  NumericEqualityFilter?: QuickSightDashboardNumericEqualityDrillDownFilter;
  TimeRangeFilter?: QuickSightDashboardTimeRangeDrillDownFilter;
  CategoryFilter?: QuickSightDashboardCategoryDrillDownFilter;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DropDownControlDisplayOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dropdowncontroldisplayoptions.html | AWS::QuickSight::Dashboard.DropDownControlDisplayOptions}
 */
export interface QuickSightDashboardDropDownControlDisplayOptions {
  TitleOptions?: QuickSightDashboardLabelOptions;
  SelectAllOptions?: QuickSightDashboardListControlSelectAllOptions;
  InfoIconLabelOptions?: QuickSightDashboardSheetControlInfoIconLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.DynamicDefaultValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dynamicdefaultvalue.html | AWS::QuickSight::Dashboard.DynamicDefaultValue}
 */
export interface QuickSightDashboardDynamicDefaultValue {
  GroupNameColumn?: QuickSightDashboardColumnIdentifier;
  DefaultValueColumn: QuickSightDashboardColumnIdentifier;
  UserNameColumn?: QuickSightDashboardColumnIdentifier;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.EmptyVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-emptyvisual.html | AWS::QuickSight::Dashboard.EmptyVisual}
 */
export interface QuickSightDashboardEmptyVisual {
  VisualId: string;
  Actions?: any[];
  DataSetIdentifier: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.Entity
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-entity.html | AWS::QuickSight::Dashboard.Entity}
 */
export interface QuickSightDashboardEntity {
  Path?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ExcludePeriodConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-excludeperiodconfiguration.html | AWS::QuickSight::Dashboard.ExcludePeriodConfiguration}
 */
export interface QuickSightDashboardExcludePeriodConfiguration {
  Status?: string;
  Amount: number;
  Granularity: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ExplicitHierarchy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-explicithierarchy.html | AWS::QuickSight::Dashboard.ExplicitHierarchy}
 */
export interface QuickSightDashboardExplicitHierarchy {
  HierarchyId: string;
  DrillDownFilters?: any[];
  Columns: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ExportHiddenFieldsOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-exporthiddenfieldsoption.html | AWS::QuickSight::Dashboard.ExportHiddenFieldsOption}
 */
export interface QuickSightDashboardExportHiddenFieldsOption {
  AvailabilityStatus?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ExportToCSVOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-exporttocsvoption.html | AWS::QuickSight::Dashboard.ExportToCSVOption}
 */
export interface QuickSightDashboardExportToCSVOption {
  AvailabilityStatus?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ExportWithHiddenFieldsOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-exportwithhiddenfieldsoption.html | AWS::QuickSight::Dashboard.ExportWithHiddenFieldsOption}
 */
export interface QuickSightDashboardExportWithHiddenFieldsOption {
  AvailabilityStatus?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FieldBasedTooltip
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-fieldbasedtooltip.html | AWS::QuickSight::Dashboard.FieldBasedTooltip}
 */
export interface QuickSightDashboardFieldBasedTooltip {
  TooltipFields?: any[];
  AggregationVisibility?: string;
  TooltipTitleType?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FieldLabelType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-fieldlabeltype.html | AWS::QuickSight::Dashboard.FieldLabelType}
 */
export interface QuickSightDashboardFieldLabelType {
  FieldId?: string;
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FieldSeriesItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-fieldseriesitem.html | AWS::QuickSight::Dashboard.FieldSeriesItem}
 */
export interface QuickSightDashboardFieldSeriesItem {
  FieldId: string;
  AxisBinding: string;
  Settings?: QuickSightDashboardLineChartSeriesSettings;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FieldSort
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-fieldsort.html | AWS::QuickSight::Dashboard.FieldSort}
 */
export interface QuickSightDashboardFieldSort {
  FieldId: string;
  Direction: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FieldSortOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-fieldsortoptions.html | AWS::QuickSight::Dashboard.FieldSortOptions}
 */
export interface QuickSightDashboardFieldSortOptions {
  FieldSort?: QuickSightDashboardFieldSort;
  ColumnSort?: QuickSightDashboardColumnSort;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FieldTooltipItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-fieldtooltipitem.html | AWS::QuickSight::Dashboard.FieldTooltipItem}
 */
export interface QuickSightDashboardFieldTooltipItem {
  FieldId: string;
  Label?: string;
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FilledMapAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filledmapaggregatedfieldwells.html | AWS::QuickSight::Dashboard.FilledMapAggregatedFieldWells}
 */
export interface QuickSightDashboardFilledMapAggregatedFieldWells {
  Values?: any[];
  Geospatial?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FilledMapConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filledmapconditionalformatting.html | AWS::QuickSight::Dashboard.FilledMapConditionalFormatting}
 */
export interface QuickSightDashboardFilledMapConditionalFormatting {
  ConditionalFormattingOptions: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FilledMapConditionalFormattingOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filledmapconditionalformattingoption.html | AWS::QuickSight::Dashboard.FilledMapConditionalFormattingOption}
 */
export interface QuickSightDashboardFilledMapConditionalFormattingOption {
  Shape: QuickSightDashboardFilledMapShapeConditionalFormatting;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FilledMapConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filledmapconfiguration.html | AWS::QuickSight::Dashboard.FilledMapConfiguration}
 */
export interface QuickSightDashboardFilledMapConfiguration {
  SortConfiguration?: QuickSightDashboardFilledMapSortConfiguration;
  Legend?: QuickSightDashboardLegendOptions;
  MapStyleOptions?: QuickSightDashboardGeospatialMapStyleOptions;
  FieldWells?: QuickSightDashboardFilledMapFieldWells;
  Tooltip?: QuickSightDashboardTooltipOptions;
  WindowOptions?: QuickSightDashboardGeospatialWindowOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FilledMapFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filledmapfieldwells.html | AWS::QuickSight::Dashboard.FilledMapFieldWells}
 */
export interface QuickSightDashboardFilledMapFieldWells {
  FilledMapAggregatedFieldWells?: QuickSightDashboardFilledMapAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FilledMapShapeConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filledmapshapeconditionalformatting.html | AWS::QuickSight::Dashboard.FilledMapShapeConditionalFormatting}
 */
export interface QuickSightDashboardFilledMapShapeConditionalFormatting {
  Format?: QuickSightDashboardShapeConditionalFormat;
  FieldId: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FilledMapSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filledmapsortconfiguration.html | AWS::QuickSight::Dashboard.FilledMapSortConfiguration}
 */
export interface QuickSightDashboardFilledMapSortConfiguration {
  CategorySort?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FilledMapVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filledmapvisual.html | AWS::QuickSight::Dashboard.FilledMapVisual}
 */
export interface QuickSightDashboardFilledMapVisual {
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
  ConditionalFormatting?: QuickSightDashboardFilledMapConditionalFormatting;
  VisualId: string;
  ChartConfiguration?: QuickSightDashboardFilledMapConfiguration;
  Actions?: any[];
  Title?: QuickSightDashboardVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.Filter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filter.html | AWS::QuickSight::Dashboard.Filter}
 */
export interface QuickSightDashboardFilter {
  NumericEqualityFilter?: QuickSightDashboardNumericEqualityFilter;
  NumericRangeFilter?: QuickSightDashboardNumericRangeFilter;
  TimeRangeFilter?: QuickSightDashboardTimeRangeFilter;
  RelativeDatesFilter?: QuickSightDashboardRelativeDatesFilter;
  TopBottomFilter?: QuickSightDashboardTopBottomFilter;
  TimeEqualityFilter?: QuickSightDashboardTimeEqualityFilter;
  CategoryFilter?: QuickSightDashboardCategoryFilter;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FilterControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filtercontrol.html | AWS::QuickSight::Dashboard.FilterControl}
 */
export interface QuickSightDashboardFilterControl {
  Slider?: QuickSightDashboardFilterSliderControl;
  TextArea?: QuickSightDashboardFilterTextAreaControl;
  Dropdown?: QuickSightDashboardFilterDropDownControl;
  TextField?: QuickSightDashboardFilterTextFieldControl;
  List?: QuickSightDashboardFilterListControl;
  DateTimePicker?: QuickSightDashboardFilterDateTimePickerControl;
  RelativeDateTime?: QuickSightDashboardFilterRelativeDateTimeControl;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FilterDateTimePickerControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filterdatetimepickercontrol.html | AWS::QuickSight::Dashboard.FilterDateTimePickerControl}
 */
export interface QuickSightDashboardFilterDateTimePickerControl {
  FilterControlId: string;
  Type?: string;
  DisplayOptions?: QuickSightDashboardDateTimePickerControlDisplayOptions;
  Title: string;
  SourceFilterId: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FilterDropDownControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filterdropdowncontrol.html | AWS::QuickSight::Dashboard.FilterDropDownControl}
 */
export interface QuickSightDashboardFilterDropDownControl {
  FilterControlId: string;
  Type?: string;
  DisplayOptions?: QuickSightDashboardDropDownControlDisplayOptions;
  CascadingControlConfiguration?: QuickSightDashboardCascadingControlConfiguration;
  Title: string;
  SourceFilterId: string;
  SelectableValues?: QuickSightDashboardFilterSelectableValues;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FilterGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filtergroup.html | AWS::QuickSight::Dashboard.FilterGroup}
 */
export interface QuickSightDashboardFilterGroup {
  Status?: string;
  Filters: any[];
  CrossDataset: string;
  ScopeConfiguration: QuickSightDashboardFilterScopeConfiguration;
  FilterGroupId: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FilterListConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filterlistconfiguration.html | AWS::QuickSight::Dashboard.FilterListConfiguration}
 */
export interface QuickSightDashboardFilterListConfiguration {
  CategoryValues?: any[];
  NullOption?: string;
  MatchOperator: string;
  SelectAllOptions?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FilterListControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filterlistcontrol.html | AWS::QuickSight::Dashboard.FilterListControl}
 */
export interface QuickSightDashboardFilterListControl {
  FilterControlId: string;
  Type?: string;
  DisplayOptions?: QuickSightDashboardListControlDisplayOptions;
  CascadingControlConfiguration?: QuickSightDashboardCascadingControlConfiguration;
  Title: string;
  SourceFilterId: string;
  SelectableValues?: QuickSightDashboardFilterSelectableValues;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FilterOperationSelectedFieldsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filteroperationselectedfieldsconfiguration.html | AWS::QuickSight::Dashboard.FilterOperationSelectedFieldsConfiguration}
 */
export interface QuickSightDashboardFilterOperationSelectedFieldsConfiguration {
  SelectedColumns?: any[];
  SelectedFields?: any[];
  SelectedFieldOptions?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FilterOperationTargetVisualsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filteroperationtargetvisualsconfiguration.html | AWS::QuickSight::Dashboard.FilterOperationTargetVisualsConfiguration}
 */
export interface QuickSightDashboardFilterOperationTargetVisualsConfiguration {
  SameSheetTargetVisualConfiguration?: QuickSightDashboardSameSheetTargetVisualConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FilterRelativeDateTimeControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filterrelativedatetimecontrol.html | AWS::QuickSight::Dashboard.FilterRelativeDateTimeControl}
 */
export interface QuickSightDashboardFilterRelativeDateTimeControl {
  FilterControlId: string;
  DisplayOptions?: QuickSightDashboardRelativeDateTimeControlDisplayOptions;
  Title: string;
  SourceFilterId: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FilterScopeConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filterscopeconfiguration.html | AWS::QuickSight::Dashboard.FilterScopeConfiguration}
 */
export interface QuickSightDashboardFilterScopeConfiguration {
  AllSheets?: object;
  SelectedSheets?: QuickSightDashboardSelectedSheetsFilterScopeConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FilterSelectableValues
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filterselectablevalues.html | AWS::QuickSight::Dashboard.FilterSelectableValues}
 */
export interface QuickSightDashboardFilterSelectableValues {
  Values?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FilterSliderControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filterslidercontrol.html | AWS::QuickSight::Dashboard.FilterSliderControl}
 */
export interface QuickSightDashboardFilterSliderControl {
  FilterControlId: string;
  Type?: string;
  StepSize: number;
  DisplayOptions?: QuickSightDashboardSliderControlDisplayOptions;
  Title: string;
  MaximumValue: number;
  SourceFilterId: string;
  MinimumValue: number;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FilterTextAreaControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filtertextareacontrol.html | AWS::QuickSight::Dashboard.FilterTextAreaControl}
 */
export interface QuickSightDashboardFilterTextAreaControl {
  FilterControlId: string;
  Delimiter?: string;
  DisplayOptions?: QuickSightDashboardTextAreaControlDisplayOptions;
  Title: string;
  SourceFilterId: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FilterTextFieldControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filtertextfieldcontrol.html | AWS::QuickSight::Dashboard.FilterTextFieldControl}
 */
export interface QuickSightDashboardFilterTextFieldControl {
  FilterControlId: string;
  DisplayOptions?: QuickSightDashboardTextFieldControlDisplayOptions;
  Title: string;
  SourceFilterId: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FontConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-fontconfiguration.html | AWS::QuickSight::Dashboard.FontConfiguration}
 */
export interface QuickSightDashboardFontConfiguration {
  FontStyle?: string;
  FontSize?: QuickSightDashboardFontSize;
  FontDecoration?: string;
  FontColor?: string;
  FontWeight?: QuickSightDashboardFontWeight;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FontSize
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-fontsize.html | AWS::QuickSight::Dashboard.FontSize}
 */
export interface QuickSightDashboardFontSize {
  Relative?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FontWeight
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-fontweight.html | AWS::QuickSight::Dashboard.FontWeight}
 */
export interface QuickSightDashboardFontWeight {
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ForecastComputation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-forecastcomputation.html | AWS::QuickSight::Dashboard.ForecastComputation}
 */
export interface QuickSightDashboardForecastComputation {
  PeriodsBackward?: number;
  PeriodsForward?: number;
  PredictionInterval?: number;
  Seasonality?: string;
  CustomSeasonalityValue?: number;
  Value?: QuickSightDashboardMeasureField;
  Time?: QuickSightDashboardDimensionField;
  UpperBoundary?: number;
  ComputationId: string;
  Name?: string;
  LowerBoundary?: number;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ForecastConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-forecastconfiguration.html | AWS::QuickSight::Dashboard.ForecastConfiguration}
 */
export interface QuickSightDashboardForecastConfiguration {
  ForecastProperties?: QuickSightDashboardTimeBasedForecastProperties;
  Scenario?: QuickSightDashboardForecastScenario;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ForecastScenario
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-forecastscenario.html | AWS::QuickSight::Dashboard.ForecastScenario}
 */
export interface QuickSightDashboardForecastScenario {
  WhatIfRangeScenario?: QuickSightDashboardWhatIfRangeScenario;
  WhatIfPointScenario?: QuickSightDashboardWhatIfPointScenario;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FormatConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-formatconfiguration.html | AWS::QuickSight::Dashboard.FormatConfiguration}
 */
export interface QuickSightDashboardFormatConfiguration {
  NumberFormatConfiguration?: QuickSightDashboardNumberFormatConfiguration;
  DateTimeFormatConfiguration?: QuickSightDashboardDateTimeFormatConfiguration;
  StringFormatConfiguration?: QuickSightDashboardStringFormatConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FreeFormLayoutCanvasSizeOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-freeformlayoutcanvassizeoptions.html | AWS::QuickSight::Dashboard.FreeFormLayoutCanvasSizeOptions}
 */
export interface QuickSightDashboardFreeFormLayoutCanvasSizeOptions {
  ScreenCanvasSizeOptions?: QuickSightDashboardFreeFormLayoutScreenCanvasSizeOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FreeFormLayoutConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-freeformlayoutconfiguration.html | AWS::QuickSight::Dashboard.FreeFormLayoutConfiguration}
 */
export interface QuickSightDashboardFreeFormLayoutConfiguration {
  CanvasSizeOptions?: QuickSightDashboardFreeFormLayoutCanvasSizeOptions;
  Elements: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FreeFormLayoutElement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-freeformlayoutelement.html | AWS::QuickSight::Dashboard.FreeFormLayoutElement}
 */
export interface QuickSightDashboardFreeFormLayoutElement {
  ElementType: string;
  BorderStyle?: QuickSightDashboardFreeFormLayoutElementBorderStyle;
  Height: string;
  Visibility?: string;
  RenderingRules?: any[];
  YAxisLocation: string;
  LoadingAnimation?: QuickSightDashboardLoadingAnimation;
  Width: string;
  BackgroundStyle?: QuickSightDashboardFreeFormLayoutElementBackgroundStyle;
  ElementId: string;
  XAxisLocation: string;
  SelectedBorderStyle?: QuickSightDashboardFreeFormLayoutElementBorderStyle;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FreeFormLayoutElementBackgroundStyle
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-freeformlayoutelementbackgroundstyle.html | AWS::QuickSight::Dashboard.FreeFormLayoutElementBackgroundStyle}
 */
export interface QuickSightDashboardFreeFormLayoutElementBackgroundStyle {
  Color?: string;
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FreeFormLayoutElementBorderStyle
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-freeformlayoutelementborderstyle.html | AWS::QuickSight::Dashboard.FreeFormLayoutElementBorderStyle}
 */
export interface QuickSightDashboardFreeFormLayoutElementBorderStyle {
  Color?: string;
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FreeFormLayoutScreenCanvasSizeOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-freeformlayoutscreencanvassizeoptions.html | AWS::QuickSight::Dashboard.FreeFormLayoutScreenCanvasSizeOptions}
 */
export interface QuickSightDashboardFreeFormLayoutScreenCanvasSizeOptions {
  OptimizedViewPortWidth: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FreeFormSectionLayoutConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-freeformsectionlayoutconfiguration.html | AWS::QuickSight::Dashboard.FreeFormSectionLayoutConfiguration}
 */
export interface QuickSightDashboardFreeFormSectionLayoutConfiguration {
  Elements: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FunnelChartAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-funnelchartaggregatedfieldwells.html | AWS::QuickSight::Dashboard.FunnelChartAggregatedFieldWells}
 */
export interface QuickSightDashboardFunnelChartAggregatedFieldWells {
  Category?: any[];
  Values?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FunnelChartConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-funnelchartconfiguration.html | AWS::QuickSight::Dashboard.FunnelChartConfiguration}
 */
export interface QuickSightDashboardFunnelChartConfiguration {
  SortConfiguration?: QuickSightDashboardFunnelChartSortConfiguration;
  DataLabelOptions?: QuickSightDashboardFunnelChartDataLabelOptions;
  CategoryLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  FieldWells?: QuickSightDashboardFunnelChartFieldWells;
  Tooltip?: QuickSightDashboardTooltipOptions;
  ValueLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  VisualPalette?: QuickSightDashboardVisualPalette;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FunnelChartDataLabelOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-funnelchartdatalabeloptions.html | AWS::QuickSight::Dashboard.FunnelChartDataLabelOptions}
 */
export interface QuickSightDashboardFunnelChartDataLabelOptions {
  MeasureLabelVisibility?: string;
  Position?: string;
  Visibility?: string;
  CategoryLabelVisibility?: string;
  LabelColor?: string;
  MeasureDataLabelStyle?: string;
  LabelFontConfiguration?: QuickSightDashboardFontConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FunnelChartFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-funnelchartfieldwells.html | AWS::QuickSight::Dashboard.FunnelChartFieldWells}
 */
export interface QuickSightDashboardFunnelChartFieldWells {
  FunnelChartAggregatedFieldWells?: QuickSightDashboardFunnelChartAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FunnelChartSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-funnelchartsortconfiguration.html | AWS::QuickSight::Dashboard.FunnelChartSortConfiguration}
 */
export interface QuickSightDashboardFunnelChartSortConfiguration {
  CategoryItemsLimit?: QuickSightDashboardItemsLimitConfiguration;
  CategorySort?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.FunnelChartVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-funnelchartvisual.html | AWS::QuickSight::Dashboard.FunnelChartVisual}
 */
export interface QuickSightDashboardFunnelChartVisual {
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightDashboardFunnelChartConfiguration;
  Actions?: any[];
  Title?: QuickSightDashboardVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.GaugeChartArcConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gaugechartarcconditionalformatting.html | AWS::QuickSight::Dashboard.GaugeChartArcConditionalFormatting}
 */
export interface QuickSightDashboardGaugeChartArcConditionalFormatting {
  ForegroundColor?: QuickSightDashboardConditionalFormattingColor;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.GaugeChartConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gaugechartconditionalformatting.html | AWS::QuickSight::Dashboard.GaugeChartConditionalFormatting}
 */
export interface QuickSightDashboardGaugeChartConditionalFormatting {
  ConditionalFormattingOptions?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.GaugeChartConditionalFormattingOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gaugechartconditionalformattingoption.html | AWS::QuickSight::Dashboard.GaugeChartConditionalFormattingOption}
 */
export interface QuickSightDashboardGaugeChartConditionalFormattingOption {
  Arc?: QuickSightDashboardGaugeChartArcConditionalFormatting;
  PrimaryValue?: QuickSightDashboardGaugeChartPrimaryValueConditionalFormatting;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.GaugeChartConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gaugechartconfiguration.html | AWS::QuickSight::Dashboard.GaugeChartConfiguration}
 */
export interface QuickSightDashboardGaugeChartConfiguration {
  DataLabels?: QuickSightDashboardDataLabelOptions;
  FieldWells?: QuickSightDashboardGaugeChartFieldWells;
  TooltipOptions?: QuickSightDashboardTooltipOptions;
  GaugeChartOptions?: QuickSightDashboardGaugeChartOptions;
  VisualPalette?: QuickSightDashboardVisualPalette;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.GaugeChartFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gaugechartfieldwells.html | AWS::QuickSight::Dashboard.GaugeChartFieldWells}
 */
export interface QuickSightDashboardGaugeChartFieldWells {
  TargetValues?: any[];
  Values?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.GaugeChartOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gaugechartoptions.html | AWS::QuickSight::Dashboard.GaugeChartOptions}
 */
export interface QuickSightDashboardGaugeChartOptions {
  Arc?: QuickSightDashboardArcConfiguration;
  Comparison?: QuickSightDashboardComparisonConfiguration;
  PrimaryValueDisplayType?: string;
  ArcAxis?: QuickSightDashboardArcAxisConfiguration;
  PrimaryValueFontConfiguration?: QuickSightDashboardFontConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.GaugeChartPrimaryValueConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gaugechartprimaryvalueconditionalformatting.html | AWS::QuickSight::Dashboard.GaugeChartPrimaryValueConditionalFormatting}
 */
export interface QuickSightDashboardGaugeChartPrimaryValueConditionalFormatting {
  TextColor?: QuickSightDashboardConditionalFormattingColor;
  Icon?: QuickSightDashboardConditionalFormattingIcon;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.GaugeChartVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gaugechartvisual.html | AWS::QuickSight::Dashboard.GaugeChartVisual}
 */
export interface QuickSightDashboardGaugeChartVisual {
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
  ConditionalFormatting?: QuickSightDashboardGaugeChartConditionalFormatting;
  VisualId: string;
  ChartConfiguration?: QuickSightDashboardGaugeChartConfiguration;
  Actions?: any[];
  Title?: QuickSightDashboardVisualTitleLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.GeospatialCoordinateBounds
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-geospatialcoordinatebounds.html | AWS::QuickSight::Dashboard.GeospatialCoordinateBounds}
 */
export interface QuickSightDashboardGeospatialCoordinateBounds {
  West: number;
  South: number;
  North: number;
  East: number;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.GeospatialHeatmapColorScale
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-geospatialheatmapcolorscale.html | AWS::QuickSight::Dashboard.GeospatialHeatmapColorScale}
 */
export interface QuickSightDashboardGeospatialHeatmapColorScale {
  Colors?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.GeospatialHeatmapConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-geospatialheatmapconfiguration.html | AWS::QuickSight::Dashboard.GeospatialHeatmapConfiguration}
 */
export interface QuickSightDashboardGeospatialHeatmapConfiguration {
  HeatmapColor?: QuickSightDashboardGeospatialHeatmapColorScale;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.GeospatialHeatmapDataColor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-geospatialheatmapdatacolor.html | AWS::QuickSight::Dashboard.GeospatialHeatmapDataColor}
 */
export interface QuickSightDashboardGeospatialHeatmapDataColor {
  Color: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.GeospatialMapAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-geospatialmapaggregatedfieldwells.html | AWS::QuickSight::Dashboard.GeospatialMapAggregatedFieldWells}
 */
export interface QuickSightDashboardGeospatialMapAggregatedFieldWells {
  Colors?: any[];
  Values?: any[];
  Geospatial?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.GeospatialMapConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-geospatialmapconfiguration.html | AWS::QuickSight::Dashboard.GeospatialMapConfiguration}
 */
export interface QuickSightDashboardGeospatialMapConfiguration {
  Legend?: QuickSightDashboardLegendOptions;
  MapStyleOptions?: QuickSightDashboardGeospatialMapStyleOptions;
  FieldWells?: QuickSightDashboardGeospatialMapFieldWells;
  Tooltip?: QuickSightDashboardTooltipOptions;
  WindowOptions?: QuickSightDashboardGeospatialWindowOptions;
  PointStyleOptions?: QuickSightDashboardGeospatialPointStyleOptions;
  VisualPalette?: QuickSightDashboardVisualPalette;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.GeospatialMapFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-geospatialmapfieldwells.html | AWS::QuickSight::Dashboard.GeospatialMapFieldWells}
 */
export interface QuickSightDashboardGeospatialMapFieldWells {
  GeospatialMapAggregatedFieldWells?: QuickSightDashboardGeospatialMapAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.GeospatialMapStyleOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-geospatialmapstyleoptions.html | AWS::QuickSight::Dashboard.GeospatialMapStyleOptions}
 */
export interface QuickSightDashboardGeospatialMapStyleOptions {
  BaseMapStyle?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.GeospatialMapVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-geospatialmapvisual.html | AWS::QuickSight::Dashboard.GeospatialMapVisual}
 */
export interface QuickSightDashboardGeospatialMapVisual {
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightDashboardGeospatialMapConfiguration;
  Actions?: any[];
  Title?: QuickSightDashboardVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.GeospatialPointStyleOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-geospatialpointstyleoptions.html | AWS::QuickSight::Dashboard.GeospatialPointStyleOptions}
 */
export interface QuickSightDashboardGeospatialPointStyleOptions {
  SelectedPointStyle?: string;
  ClusterMarkerConfiguration?: QuickSightDashboardClusterMarkerConfiguration;
  HeatmapConfiguration?: QuickSightDashboardGeospatialHeatmapConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.GeospatialWindowOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-geospatialwindowoptions.html | AWS::QuickSight::Dashboard.GeospatialWindowOptions}
 */
export interface QuickSightDashboardGeospatialWindowOptions {
  Bounds?: QuickSightDashboardGeospatialCoordinateBounds;
  MapZoomMode?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.GlobalTableBorderOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-globaltableborderoptions.html | AWS::QuickSight::Dashboard.GlobalTableBorderOptions}
 */
export interface QuickSightDashboardGlobalTableBorderOptions {
  UniformBorder?: QuickSightDashboardTableBorderOptions;
  SideSpecificBorder?: QuickSightDashboardTableSideBorderOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.GradientColor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gradientcolor.html | AWS::QuickSight::Dashboard.GradientColor}
 */
export interface QuickSightDashboardGradientColor {
  Stops?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.GradientStop
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gradientstop.html | AWS::QuickSight::Dashboard.GradientStop}
 */
export interface QuickSightDashboardGradientStop {
  GradientOffset: number;
  DataValue?: number;
  Color?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.GridLayoutCanvasSizeOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gridlayoutcanvassizeoptions.html | AWS::QuickSight::Dashboard.GridLayoutCanvasSizeOptions}
 */
export interface QuickSightDashboardGridLayoutCanvasSizeOptions {
  ScreenCanvasSizeOptions?: QuickSightDashboardGridLayoutScreenCanvasSizeOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.GridLayoutConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gridlayoutconfiguration.html | AWS::QuickSight::Dashboard.GridLayoutConfiguration}
 */
export interface QuickSightDashboardGridLayoutConfiguration {
  CanvasSizeOptions?: QuickSightDashboardGridLayoutCanvasSizeOptions;
  Elements: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.GridLayoutElement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gridlayoutelement.html | AWS::QuickSight::Dashboard.GridLayoutElement}
 */
export interface QuickSightDashboardGridLayoutElement {
  ElementType: string;
  ColumnSpan: number;
  ColumnIndex?: number;
  RowIndex?: number;
  RowSpan: number;
  ElementId: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.GridLayoutScreenCanvasSizeOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gridlayoutscreencanvassizeoptions.html | AWS::QuickSight::Dashboard.GridLayoutScreenCanvasSizeOptions}
 */
export interface QuickSightDashboardGridLayoutScreenCanvasSizeOptions {
  OptimizedViewPortWidth?: string;
  ResizeOption: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.GrowthRateComputation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-growthratecomputation.html | AWS::QuickSight::Dashboard.GrowthRateComputation}
 */
export interface QuickSightDashboardGrowthRateComputation {
  Value?: QuickSightDashboardMeasureField;
  Time?: QuickSightDashboardDimensionField;
  PeriodSize?: number;
  ComputationId: string;
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.HeaderFooterSectionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-headerfootersectionconfiguration.html | AWS::QuickSight::Dashboard.HeaderFooterSectionConfiguration}
 */
export interface QuickSightDashboardHeaderFooterSectionConfiguration {
  Layout: QuickSightDashboardSectionLayoutConfiguration;
  Style?: QuickSightDashboardSectionStyle;
  SectionId: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.HeatMapAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-heatmapaggregatedfieldwells.html | AWS::QuickSight::Dashboard.HeatMapAggregatedFieldWells}
 */
export interface QuickSightDashboardHeatMapAggregatedFieldWells {
  Values?: any[];
  Columns?: any[];
  Rows?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.HeatMapConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-heatmapconfiguration.html | AWS::QuickSight::Dashboard.HeatMapConfiguration}
 */
export interface QuickSightDashboardHeatMapConfiguration {
  SortConfiguration?: QuickSightDashboardHeatMapSortConfiguration;
  ColumnLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  Legend?: QuickSightDashboardLegendOptions;
  DataLabels?: QuickSightDashboardDataLabelOptions;
  FieldWells?: QuickSightDashboardHeatMapFieldWells;
  Tooltip?: QuickSightDashboardTooltipOptions;
  ColorScale?: QuickSightDashboardColorScale;
  RowLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.HeatMapFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-heatmapfieldwells.html | AWS::QuickSight::Dashboard.HeatMapFieldWells}
 */
export interface QuickSightDashboardHeatMapFieldWells {
  HeatMapAggregatedFieldWells?: QuickSightDashboardHeatMapAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.HeatMapSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-heatmapsortconfiguration.html | AWS::QuickSight::Dashboard.HeatMapSortConfiguration}
 */
export interface QuickSightDashboardHeatMapSortConfiguration {
  HeatMapRowSort?: any[];
  HeatMapRowItemsLimitConfiguration?: QuickSightDashboardItemsLimitConfiguration;
  HeatMapColumnItemsLimitConfiguration?: QuickSightDashboardItemsLimitConfiguration;
  HeatMapColumnSort?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.HeatMapVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-heatmapvisual.html | AWS::QuickSight::Dashboard.HeatMapVisual}
 */
export interface QuickSightDashboardHeatMapVisual {
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightDashboardHeatMapConfiguration;
  Actions?: any[];
  Title?: QuickSightDashboardVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.HistogramAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-histogramaggregatedfieldwells.html | AWS::QuickSight::Dashboard.HistogramAggregatedFieldWells}
 */
export interface QuickSightDashboardHistogramAggregatedFieldWells {
  Values?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.HistogramBinOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-histogrambinoptions.html | AWS::QuickSight::Dashboard.HistogramBinOptions}
 */
export interface QuickSightDashboardHistogramBinOptions {
  BinWidth?: QuickSightDashboardBinWidthOptions;
  StartValue?: number;
  SelectedBinType?: string;
  BinCount?: QuickSightDashboardBinCountOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.HistogramConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-histogramconfiguration.html | AWS::QuickSight::Dashboard.HistogramConfiguration}
 */
export interface QuickSightDashboardHistogramConfiguration {
  YAxisDisplayOptions?: QuickSightDashboardAxisDisplayOptions;
  DataLabels?: QuickSightDashboardDataLabelOptions;
  BinOptions?: QuickSightDashboardHistogramBinOptions;
  FieldWells?: QuickSightDashboardHistogramFieldWells;
  Tooltip?: QuickSightDashboardTooltipOptions;
  XAxisLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  VisualPalette?: QuickSightDashboardVisualPalette;
  XAxisDisplayOptions?: QuickSightDashboardAxisDisplayOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.HistogramFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-histogramfieldwells.html | AWS::QuickSight::Dashboard.HistogramFieldWells}
 */
export interface QuickSightDashboardHistogramFieldWells {
  HistogramAggregatedFieldWells?: QuickSightDashboardHistogramAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.HistogramVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-histogramvisual.html | AWS::QuickSight::Dashboard.HistogramVisual}
 */
export interface QuickSightDashboardHistogramVisual {
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightDashboardHistogramConfiguration;
  Actions?: any[];
  Title?: QuickSightDashboardVisualTitleLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.InsightConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-insightconfiguration.html | AWS::QuickSight::Dashboard.InsightConfiguration}
 */
export interface QuickSightDashboardInsightConfiguration {
  Computations?: any[];
  CustomNarrative?: QuickSightDashboardCustomNarrativeOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.InsightVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-insightvisual.html | AWS::QuickSight::Dashboard.InsightVisual}
 */
export interface QuickSightDashboardInsightVisual {
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
  VisualId: string;
  Actions?: any[];
  DataSetIdentifier: string;
  InsightConfiguration?: QuickSightDashboardInsightConfiguration;
  Title?: QuickSightDashboardVisualTitleLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.IntegerDefaultValues
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-integerdefaultvalues.html | AWS::QuickSight::Dashboard.IntegerDefaultValues}
 */
export interface QuickSightDashboardIntegerDefaultValues {
  DynamicValue?: QuickSightDashboardDynamicDefaultValue;
  StaticValues?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.IntegerParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-integerparameter.html | AWS::QuickSight::Dashboard.IntegerParameter}
 */
export interface QuickSightDashboardIntegerParameter {
  Values: any[];
  Name: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.IntegerParameterDeclaration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-integerparameterdeclaration.html | AWS::QuickSight::Dashboard.IntegerParameterDeclaration}
 */
export interface QuickSightDashboardIntegerParameterDeclaration {
  MappedDataSetParameters?: any[];
  DefaultValues?: QuickSightDashboardIntegerDefaultValues;
  ParameterValueType: string;
  ValueWhenUnset?: QuickSightDashboardIntegerValueWhenUnsetConfiguration;
  Name: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.IntegerValueWhenUnsetConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-integervaluewhenunsetconfiguration.html | AWS::QuickSight::Dashboard.IntegerValueWhenUnsetConfiguration}
 */
export interface QuickSightDashboardIntegerValueWhenUnsetConfiguration {
  ValueWhenUnsetOption?: string;
  CustomValue?: number;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ItemsLimitConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-itemslimitconfiguration.html | AWS::QuickSight::Dashboard.ItemsLimitConfiguration}
 */
export interface QuickSightDashboardItemsLimitConfiguration {
  ItemsLimit?: number;
  OtherCategories?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.KPIActualValueConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpiactualvalueconditionalformatting.html | AWS::QuickSight::Dashboard.KPIActualValueConditionalFormatting}
 */
export interface QuickSightDashboardKPIActualValueConditionalFormatting {
  TextColor?: QuickSightDashboardConditionalFormattingColor;
  Icon?: QuickSightDashboardConditionalFormattingIcon;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.KPIComparisonValueConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpicomparisonvalueconditionalformatting.html | AWS::QuickSight::Dashboard.KPIComparisonValueConditionalFormatting}
 */
export interface QuickSightDashboardKPIComparisonValueConditionalFormatting {
  TextColor?: QuickSightDashboardConditionalFormattingColor;
  Icon?: QuickSightDashboardConditionalFormattingIcon;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.KPIConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpiconditionalformatting.html | AWS::QuickSight::Dashboard.KPIConditionalFormatting}
 */
export interface QuickSightDashboardKPIConditionalFormatting {
  ConditionalFormattingOptions?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.KPIConditionalFormattingOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpiconditionalformattingoption.html | AWS::QuickSight::Dashboard.KPIConditionalFormattingOption}
 */
export interface QuickSightDashboardKPIConditionalFormattingOption {
  PrimaryValue?: QuickSightDashboardKPIPrimaryValueConditionalFormatting;
  ActualValue?: QuickSightDashboardKPIActualValueConditionalFormatting;
  ComparisonValue?: QuickSightDashboardKPIComparisonValueConditionalFormatting;
  ProgressBar?: QuickSightDashboardKPIProgressBarConditionalFormatting;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.KPIConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpiconfiguration.html | AWS::QuickSight::Dashboard.KPIConfiguration}
 */
export interface QuickSightDashboardKPIConfiguration {
  SortConfiguration?: QuickSightDashboardKPISortConfiguration;
  KPIOptions?: QuickSightDashboardKPIOptions;
  FieldWells?: QuickSightDashboardKPIFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.KPIFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpifieldwells.html | AWS::QuickSight::Dashboard.KPIFieldWells}
 */
export interface QuickSightDashboardKPIFieldWells {
  TargetValues?: any[];
  TrendGroups?: any[];
  Values?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.KPIOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpioptions.html | AWS::QuickSight::Dashboard.KPIOptions}
 */
export interface QuickSightDashboardKPIOptions {
  SecondaryValueFontConfiguration?: QuickSightDashboardFontConfiguration;
  VisualLayoutOptions?: QuickSightDashboardKPIVisualLayoutOptions;
  TrendArrows?: QuickSightDashboardTrendArrowOptions;
  SecondaryValue?: QuickSightDashboardSecondaryValueOptions;
  Comparison?: QuickSightDashboardComparisonConfiguration;
  PrimaryValueDisplayType?: string;
  ProgressBar?: QuickSightDashboardProgressBarOptions;
  PrimaryValueFontConfiguration?: QuickSightDashboardFontConfiguration;
  Sparkline?: QuickSightDashboardKPISparklineOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.KPIPrimaryValueConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpiprimaryvalueconditionalformatting.html | AWS::QuickSight::Dashboard.KPIPrimaryValueConditionalFormatting}
 */
export interface QuickSightDashboardKPIPrimaryValueConditionalFormatting {
  TextColor?: QuickSightDashboardConditionalFormattingColor;
  Icon?: QuickSightDashboardConditionalFormattingIcon;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.KPIProgressBarConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpiprogressbarconditionalformatting.html | AWS::QuickSight::Dashboard.KPIProgressBarConditionalFormatting}
 */
export interface QuickSightDashboardKPIProgressBarConditionalFormatting {
  ForegroundColor?: QuickSightDashboardConditionalFormattingColor;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.KPISortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpisortconfiguration.html | AWS::QuickSight::Dashboard.KPISortConfiguration}
 */
export interface QuickSightDashboardKPISortConfiguration {
  TrendGroupSort?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.KPISparklineOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpisparklineoptions.html | AWS::QuickSight::Dashboard.KPISparklineOptions}
 */
export interface QuickSightDashboardKPISparklineOptions {
  Type: string;
  Color?: string;
  TooltipVisibility?: string;
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.KPIVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpivisual.html | AWS::QuickSight::Dashboard.KPIVisual}
 */
export interface QuickSightDashboardKPIVisual {
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
  ConditionalFormatting?: QuickSightDashboardKPIConditionalFormatting;
  VisualId: string;
  ChartConfiguration?: QuickSightDashboardKPIConfiguration;
  Actions?: any[];
  Title?: QuickSightDashboardVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.KPIVisualLayoutOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpivisuallayoutoptions.html | AWS::QuickSight::Dashboard.KPIVisualLayoutOptions}
 */
export interface QuickSightDashboardKPIVisualLayoutOptions {
  StandardLayout?: QuickSightDashboardKPIVisualStandardLayout;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.KPIVisualStandardLayout
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpivisualstandardlayout.html | AWS::QuickSight::Dashboard.KPIVisualStandardLayout}
 */
export interface QuickSightDashboardKPIVisualStandardLayout {
  Type: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.LabelOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-labeloptions.html | AWS::QuickSight::Dashboard.LabelOptions}
 */
export interface QuickSightDashboardLabelOptions {
  CustomLabel?: string;
  Visibility?: string;
  FontConfiguration?: QuickSightDashboardFontConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.Layout
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-layout.html | AWS::QuickSight::Dashboard.Layout}
 */
export interface QuickSightDashboardLayout {
  Configuration: QuickSightDashboardLayoutConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.LayoutConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-layoutconfiguration.html | AWS::QuickSight::Dashboard.LayoutConfiguration}
 */
export interface QuickSightDashboardLayoutConfiguration {
  GridLayout?: QuickSightDashboardGridLayoutConfiguration;
  FreeFormLayout?: QuickSightDashboardFreeFormLayoutConfiguration;
  SectionBasedLayout?: QuickSightDashboardSectionBasedLayoutConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.LegendOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-legendoptions.html | AWS::QuickSight::Dashboard.LegendOptions}
 */
export interface QuickSightDashboardLegendOptions {
  Position?: string;
  Title?: QuickSightDashboardLabelOptions;
  Visibility?: string;
  Height?: string;
  Width?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.LineChartAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-linechartaggregatedfieldwells.html | AWS::QuickSight::Dashboard.LineChartAggregatedFieldWells}
 */
export interface QuickSightDashboardLineChartAggregatedFieldWells {
  Category?: any[];
  Colors?: any[];
  Values?: any[];
  SmallMultiples?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.LineChartConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-linechartconfiguration.html | AWS::QuickSight::Dashboard.LineChartConfiguration}
 */
export interface QuickSightDashboardLineChartConfiguration {
  SortConfiguration?: QuickSightDashboardLineChartSortConfiguration;
  Legend?: QuickSightDashboardLegendOptions;
  ReferenceLines?: any[];
  DataLabels?: QuickSightDashboardDataLabelOptions;
  Tooltip?: QuickSightDashboardTooltipOptions;
  SmallMultiplesOptions?: QuickSightDashboardSmallMultiplesOptions;
  PrimaryYAxisDisplayOptions?: QuickSightDashboardLineSeriesAxisDisplayOptions;
  VisualPalette?: QuickSightDashboardVisualPalette;
  XAxisDisplayOptions?: QuickSightDashboardAxisDisplayOptions;
  DefaultSeriesSettings?: QuickSightDashboardLineChartDefaultSeriesSettings;
  SecondaryYAxisLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  ForecastConfigurations?: any[];
  Series?: any[];
  Type?: string;
  PrimaryYAxisLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  ContributionAnalysisDefaults?: any[];
  FieldWells?: QuickSightDashboardLineChartFieldWells;
  SecondaryYAxisDisplayOptions?: QuickSightDashboardLineSeriesAxisDisplayOptions;
  XAxisLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.LineChartDefaultSeriesSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-linechartdefaultseriessettings.html | AWS::QuickSight::Dashboard.LineChartDefaultSeriesSettings}
 */
export interface QuickSightDashboardLineChartDefaultSeriesSettings {
  LineStyleSettings?: QuickSightDashboardLineChartLineStyleSettings;
  AxisBinding?: string;
  MarkerStyleSettings?: QuickSightDashboardLineChartMarkerStyleSettings;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.LineChartFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-linechartfieldwells.html | AWS::QuickSight::Dashboard.LineChartFieldWells}
 */
export interface QuickSightDashboardLineChartFieldWells {
  LineChartAggregatedFieldWells?: QuickSightDashboardLineChartAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.LineChartLineStyleSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-linechartlinestylesettings.html | AWS::QuickSight::Dashboard.LineChartLineStyleSettings}
 */
export interface QuickSightDashboardLineChartLineStyleSettings {
  LineInterpolation?: string;
  LineStyle?: string;
  LineVisibility?: string;
  LineWidth?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.LineChartMarkerStyleSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-linechartmarkerstylesettings.html | AWS::QuickSight::Dashboard.LineChartMarkerStyleSettings}
 */
export interface QuickSightDashboardLineChartMarkerStyleSettings {
  MarkerShape?: string;
  MarkerSize?: string;
  MarkerVisibility?: string;
  MarkerColor?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.LineChartSeriesSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-linechartseriessettings.html | AWS::QuickSight::Dashboard.LineChartSeriesSettings}
 */
export interface QuickSightDashboardLineChartSeriesSettings {
  LineStyleSettings?: QuickSightDashboardLineChartLineStyleSettings;
  MarkerStyleSettings?: QuickSightDashboardLineChartMarkerStyleSettings;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.LineChartSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-linechartsortconfiguration.html | AWS::QuickSight::Dashboard.LineChartSortConfiguration}
 */
export interface QuickSightDashboardLineChartSortConfiguration {
  CategoryItemsLimitConfiguration?: QuickSightDashboardItemsLimitConfiguration;
  ColorItemsLimitConfiguration?: QuickSightDashboardItemsLimitConfiguration;
  SmallMultiplesSort?: any[];
  CategorySort?: any[];
  SmallMultiplesLimitConfiguration?: QuickSightDashboardItemsLimitConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.LineChartVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-linechartvisual.html | AWS::QuickSight::Dashboard.LineChartVisual}
 */
export interface QuickSightDashboardLineChartVisual {
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightDashboardLineChartConfiguration;
  Actions?: any[];
  Title?: QuickSightDashboardVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.LineSeriesAxisDisplayOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-lineseriesaxisdisplayoptions.html | AWS::QuickSight::Dashboard.LineSeriesAxisDisplayOptions}
 */
export interface QuickSightDashboardLineSeriesAxisDisplayOptions {
  MissingDataConfigurations?: any[];
  AxisOptions?: QuickSightDashboardAxisDisplayOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ListControlDisplayOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-listcontroldisplayoptions.html | AWS::QuickSight::Dashboard.ListControlDisplayOptions}
 */
export interface QuickSightDashboardListControlDisplayOptions {
  TitleOptions?: QuickSightDashboardLabelOptions;
  SearchOptions?: QuickSightDashboardListControlSearchOptions;
  SelectAllOptions?: QuickSightDashboardListControlSelectAllOptions;
  InfoIconLabelOptions?: QuickSightDashboardSheetControlInfoIconLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ListControlSearchOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-listcontrolsearchoptions.html | AWS::QuickSight::Dashboard.ListControlSearchOptions}
 */
export interface QuickSightDashboardListControlSearchOptions {
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ListControlSelectAllOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-listcontrolselectalloptions.html | AWS::QuickSight::Dashboard.ListControlSelectAllOptions}
 */
export interface QuickSightDashboardListControlSelectAllOptions {
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.LoadingAnimation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-loadinganimation.html | AWS::QuickSight::Dashboard.LoadingAnimation}
 */
export interface QuickSightDashboardLoadingAnimation {
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.LocalNavigationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-localnavigationconfiguration.html | AWS::QuickSight::Dashboard.LocalNavigationConfiguration}
 */
export interface QuickSightDashboardLocalNavigationConfiguration {
  TargetSheetId: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.LongFormatText
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-longformattext.html | AWS::QuickSight::Dashboard.LongFormatText}
 */
export interface QuickSightDashboardLongFormatText {
  RichText?: string;
  PlainText?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.MappedDataSetParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-mappeddatasetparameter.html | AWS::QuickSight::Dashboard.MappedDataSetParameter}
 */
export interface QuickSightDashboardMappedDataSetParameter {
  DataSetParameterName: string;
  DataSetIdentifier: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.MaximumLabelType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-maximumlabeltype.html | AWS::QuickSight::Dashboard.MaximumLabelType}
 */
export interface QuickSightDashboardMaximumLabelType {
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.MaximumMinimumComputation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-maximumminimumcomputation.html | AWS::QuickSight::Dashboard.MaximumMinimumComputation}
 */
export interface QuickSightDashboardMaximumMinimumComputation {
  Type: string;
  Value?: QuickSightDashboardMeasureField;
  Time?: QuickSightDashboardDimensionField;
  ComputationId: string;
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.MeasureField
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-measurefield.html | AWS::QuickSight::Dashboard.MeasureField}
 */
export interface QuickSightDashboardMeasureField {
  DateMeasureField?: QuickSightDashboardDateMeasureField;
  NumericalMeasureField?: QuickSightDashboardNumericalMeasureField;
  CategoricalMeasureField?: QuickSightDashboardCategoricalMeasureField;
  CalculatedMeasureField?: QuickSightDashboardCalculatedMeasureField;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.MetricComparisonComputation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-metriccomparisoncomputation.html | AWS::QuickSight::Dashboard.MetricComparisonComputation}
 */
export interface QuickSightDashboardMetricComparisonComputation {
  TargetValue?: QuickSightDashboardMeasureField;
  Time?: QuickSightDashboardDimensionField;
  ComputationId: string;
  FromValue?: QuickSightDashboardMeasureField;
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.MinimumLabelType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-minimumlabeltype.html | AWS::QuickSight::Dashboard.MinimumLabelType}
 */
export interface QuickSightDashboardMinimumLabelType {
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.MissingDataConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-missingdataconfiguration.html | AWS::QuickSight::Dashboard.MissingDataConfiguration}
 */
export interface QuickSightDashboardMissingDataConfiguration {
  TreatmentOption?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.NegativeValueConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-negativevalueconfiguration.html | AWS::QuickSight::Dashboard.NegativeValueConfiguration}
 */
export interface QuickSightDashboardNegativeValueConfiguration {
  DisplayMode: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.NullValueFormatConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-nullvalueformatconfiguration.html | AWS::QuickSight::Dashboard.NullValueFormatConfiguration}
 */
export interface QuickSightDashboardNullValueFormatConfiguration {
  NullString: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.NumberDisplayFormatConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numberdisplayformatconfiguration.html | AWS::QuickSight::Dashboard.NumberDisplayFormatConfiguration}
 */
export interface QuickSightDashboardNumberDisplayFormatConfiguration {
  NegativeValueConfiguration?: QuickSightDashboardNegativeValueConfiguration;
  DecimalPlacesConfiguration?: QuickSightDashboardDecimalPlacesConfiguration;
  NumberScale?: string;
  NullValueFormatConfiguration?: QuickSightDashboardNullValueFormatConfiguration;
  Suffix?: string;
  SeparatorConfiguration?: QuickSightDashboardNumericSeparatorConfiguration;
  Prefix?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.NumberFormatConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numberformatconfiguration.html | AWS::QuickSight::Dashboard.NumberFormatConfiguration}
 */
export interface QuickSightDashboardNumberFormatConfiguration {
  FormatConfiguration?: QuickSightDashboardNumericFormatConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.NumericAxisOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numericaxisoptions.html | AWS::QuickSight::Dashboard.NumericAxisOptions}
 */
export interface QuickSightDashboardNumericAxisOptions {
  Scale?: QuickSightDashboardAxisScale;
  Range?: QuickSightDashboardAxisDisplayRange;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.NumericEqualityDrillDownFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numericequalitydrilldownfilter.html | AWS::QuickSight::Dashboard.NumericEqualityDrillDownFilter}
 */
export interface QuickSightDashboardNumericEqualityDrillDownFilter {
  Column: QuickSightDashboardColumnIdentifier;
  Value: number;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.NumericEqualityFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numericequalityfilter.html | AWS::QuickSight::Dashboard.NumericEqualityFilter}
 */
export interface QuickSightDashboardNumericEqualityFilter {
  AggregationFunction?: QuickSightDashboardAggregationFunction;
  Column: QuickSightDashboardColumnIdentifier;
  Value?: number;
  ParameterName?: string;
  NullOption: string;
  MatchOperator: string;
  SelectAllOptions?: string;
  FilterId: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.NumericFormatConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numericformatconfiguration.html | AWS::QuickSight::Dashboard.NumericFormatConfiguration}
 */
export interface QuickSightDashboardNumericFormatConfiguration {
  NumberDisplayFormatConfiguration?: QuickSightDashboardNumberDisplayFormatConfiguration;
  CurrencyDisplayFormatConfiguration?: QuickSightDashboardCurrencyDisplayFormatConfiguration;
  PercentageDisplayFormatConfiguration?: QuickSightDashboardPercentageDisplayFormatConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.NumericRangeFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numericrangefilter.html | AWS::QuickSight::Dashboard.NumericRangeFilter}
 */
export interface QuickSightDashboardNumericRangeFilter {
  AggregationFunction?: QuickSightDashboardAggregationFunction;
  Column: QuickSightDashboardColumnIdentifier;
  IncludeMaximum?: boolean;
  RangeMinimum?: QuickSightDashboardNumericRangeFilterValue;
  NullOption: string;
  SelectAllOptions?: string;
  FilterId: string;
  RangeMaximum?: QuickSightDashboardNumericRangeFilterValue;
  IncludeMinimum?: boolean;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.NumericRangeFilterValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numericrangefiltervalue.html | AWS::QuickSight::Dashboard.NumericRangeFilterValue}
 */
export interface QuickSightDashboardNumericRangeFilterValue {
  StaticValue?: number;
  Parameter?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.NumericSeparatorConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numericseparatorconfiguration.html | AWS::QuickSight::Dashboard.NumericSeparatorConfiguration}
 */
export interface QuickSightDashboardNumericSeparatorConfiguration {
  DecimalSeparator?: string;
  ThousandsSeparator?: QuickSightDashboardThousandSeparatorOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.NumericalAggregationFunction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numericalaggregationfunction.html | AWS::QuickSight::Dashboard.NumericalAggregationFunction}
 */
export interface QuickSightDashboardNumericalAggregationFunction {
  PercentileAggregation?: QuickSightDashboardPercentileAggregation;
  SimpleNumericalAggregation?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.NumericalDimensionField
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numericaldimensionfield.html | AWS::QuickSight::Dashboard.NumericalDimensionField}
 */
export interface QuickSightDashboardNumericalDimensionField {
  HierarchyId?: string;
  FormatConfiguration?: QuickSightDashboardNumberFormatConfiguration;
  Column: QuickSightDashboardColumnIdentifier;
  FieldId: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.NumericalMeasureField
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numericalmeasurefield.html | AWS::QuickSight::Dashboard.NumericalMeasureField}
 */
export interface QuickSightDashboardNumericalMeasureField {
  AggregationFunction?: QuickSightDashboardNumericalAggregationFunction;
  FormatConfiguration?: QuickSightDashboardNumberFormatConfiguration;
  Column: QuickSightDashboardColumnIdentifier;
  FieldId: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.PaginationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-paginationconfiguration.html | AWS::QuickSight::Dashboard.PaginationConfiguration}
 */
export interface QuickSightDashboardPaginationConfiguration {
  PageSize: number;
  PageNumber: number;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.PanelConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-panelconfiguration.html | AWS::QuickSight::Dashboard.PanelConfiguration}
 */
export interface QuickSightDashboardPanelConfiguration {
  BorderThickness?: string;
  BorderStyle?: string;
  GutterSpacing?: string;
  BackgroundVisibility?: string;
  BorderVisibility?: string;
  BorderColor?: string;
  Title?: QuickSightDashboardPanelTitleOptions;
  GutterVisibility?: string;
  BackgroundColor?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.PanelTitleOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-paneltitleoptions.html | AWS::QuickSight::Dashboard.PanelTitleOptions}
 */
export interface QuickSightDashboardPanelTitleOptions {
  Visibility?: string;
  FontConfiguration?: QuickSightDashboardFontConfiguration;
  HorizontalTextAlignment?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ParameterControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-parametercontrol.html | AWS::QuickSight::Dashboard.ParameterControl}
 */
export interface QuickSightDashboardParameterControl {
  Slider?: QuickSightDashboardParameterSliderControl;
  TextArea?: QuickSightDashboardParameterTextAreaControl;
  Dropdown?: QuickSightDashboardParameterDropDownControl;
  TextField?: QuickSightDashboardParameterTextFieldControl;
  List?: QuickSightDashboardParameterListControl;
  DateTimePicker?: QuickSightDashboardParameterDateTimePickerControl;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ParameterDateTimePickerControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-parameterdatetimepickercontrol.html | AWS::QuickSight::Dashboard.ParameterDateTimePickerControl}
 */
export interface QuickSightDashboardParameterDateTimePickerControl {
  ParameterControlId: string;
  DisplayOptions?: QuickSightDashboardDateTimePickerControlDisplayOptions;
  SourceParameterName: string;
  Title: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ParameterDeclaration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-parameterdeclaration.html | AWS::QuickSight::Dashboard.ParameterDeclaration}
 */
export interface QuickSightDashboardParameterDeclaration {
  StringParameterDeclaration?: QuickSightDashboardStringParameterDeclaration;
  DateTimeParameterDeclaration?: QuickSightDashboardDateTimeParameterDeclaration;
  DecimalParameterDeclaration?: QuickSightDashboardDecimalParameterDeclaration;
  IntegerParameterDeclaration?: QuickSightDashboardIntegerParameterDeclaration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ParameterDropDownControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-parameterdropdowncontrol.html | AWS::QuickSight::Dashboard.ParameterDropDownControl}
 */
export interface QuickSightDashboardParameterDropDownControl {
  ParameterControlId: string;
  Type?: string;
  DisplayOptions?: QuickSightDashboardDropDownControlDisplayOptions;
  SourceParameterName: string;
  CascadingControlConfiguration?: QuickSightDashboardCascadingControlConfiguration;
  Title: string;
  SelectableValues?: QuickSightDashboardParameterSelectableValues;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ParameterListControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-parameterlistcontrol.html | AWS::QuickSight::Dashboard.ParameterListControl}
 */
export interface QuickSightDashboardParameterListControl {
  ParameterControlId: string;
  Type?: string;
  DisplayOptions?: QuickSightDashboardListControlDisplayOptions;
  SourceParameterName: string;
  CascadingControlConfiguration?: QuickSightDashboardCascadingControlConfiguration;
  Title: string;
  SelectableValues?: QuickSightDashboardParameterSelectableValues;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ParameterSelectableValues
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-parameterselectablevalues.html | AWS::QuickSight::Dashboard.ParameterSelectableValues}
 */
export interface QuickSightDashboardParameterSelectableValues {
  LinkToDataSetColumn?: QuickSightDashboardColumnIdentifier;
  Values?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ParameterSliderControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-parameterslidercontrol.html | AWS::QuickSight::Dashboard.ParameterSliderControl}
 */
export interface QuickSightDashboardParameterSliderControl {
  ParameterControlId: string;
  StepSize: number;
  DisplayOptions?: QuickSightDashboardSliderControlDisplayOptions;
  SourceParameterName: string;
  Title: string;
  MaximumValue: number;
  MinimumValue: number;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ParameterTextAreaControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-parametertextareacontrol.html | AWS::QuickSight::Dashboard.ParameterTextAreaControl}
 */
export interface QuickSightDashboardParameterTextAreaControl {
  ParameterControlId: string;
  Delimiter?: string;
  DisplayOptions?: QuickSightDashboardTextAreaControlDisplayOptions;
  SourceParameterName: string;
  Title: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ParameterTextFieldControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-parametertextfieldcontrol.html | AWS::QuickSight::Dashboard.ParameterTextFieldControl}
 */
export interface QuickSightDashboardParameterTextFieldControl {
  ParameterControlId: string;
  DisplayOptions?: QuickSightDashboardTextFieldControlDisplayOptions;
  SourceParameterName: string;
  Title: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.Parameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-parameters.html | AWS::QuickSight::Dashboard.Parameters}
 */
export interface QuickSightDashboardParameters {
  StringParameters?: any[];
  DecimalParameters?: any[];
  IntegerParameters?: any[];
  DateTimeParameters?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.PercentVisibleRange
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-percentvisiblerange.html | AWS::QuickSight::Dashboard.PercentVisibleRange}
 */
export interface QuickSightDashboardPercentVisibleRange {
  From?: number;
  To?: number;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.PercentageDisplayFormatConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-percentagedisplayformatconfiguration.html | AWS::QuickSight::Dashboard.PercentageDisplayFormatConfiguration}
 */
export interface QuickSightDashboardPercentageDisplayFormatConfiguration {
  NegativeValueConfiguration?: QuickSightDashboardNegativeValueConfiguration;
  DecimalPlacesConfiguration?: QuickSightDashboardDecimalPlacesConfiguration;
  NullValueFormatConfiguration?: QuickSightDashboardNullValueFormatConfiguration;
  Suffix?: string;
  SeparatorConfiguration?: QuickSightDashboardNumericSeparatorConfiguration;
  Prefix?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.PercentileAggregation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-percentileaggregation.html | AWS::QuickSight::Dashboard.PercentileAggregation}
 */
export interface QuickSightDashboardPercentileAggregation {
  PercentileValue?: number;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.PeriodOverPeriodComputation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-periodoverperiodcomputation.html | AWS::QuickSight::Dashboard.PeriodOverPeriodComputation}
 */
export interface QuickSightDashboardPeriodOverPeriodComputation {
  Value?: QuickSightDashboardMeasureField;
  Time?: QuickSightDashboardDimensionField;
  ComputationId: string;
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.PeriodToDateComputation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-periodtodatecomputation.html | AWS::QuickSight::Dashboard.PeriodToDateComputation}
 */
export interface QuickSightDashboardPeriodToDateComputation {
  PeriodTimeGranularity?: string;
  Value?: QuickSightDashboardMeasureField;
  Time?: QuickSightDashboardDimensionField;
  ComputationId: string;
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.PieChartAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-piechartaggregatedfieldwells.html | AWS::QuickSight::Dashboard.PieChartAggregatedFieldWells}
 */
export interface QuickSightDashboardPieChartAggregatedFieldWells {
  Category?: any[];
  Values?: any[];
  SmallMultiples?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.PieChartConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-piechartconfiguration.html | AWS::QuickSight::Dashboard.PieChartConfiguration}
 */
export interface QuickSightDashboardPieChartConfiguration {
  SortConfiguration?: QuickSightDashboardPieChartSortConfiguration;
  Legend?: QuickSightDashboardLegendOptions;
  DataLabels?: QuickSightDashboardDataLabelOptions;
  ContributionAnalysisDefaults?: any[];
  CategoryLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  FieldWells?: QuickSightDashboardPieChartFieldWells;
  Tooltip?: QuickSightDashboardTooltipOptions;
  DonutOptions?: QuickSightDashboardDonutOptions;
  SmallMultiplesOptions?: QuickSightDashboardSmallMultiplesOptions;
  ValueLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  VisualPalette?: QuickSightDashboardVisualPalette;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.PieChartFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-piechartfieldwells.html | AWS::QuickSight::Dashboard.PieChartFieldWells}
 */
export interface QuickSightDashboardPieChartFieldWells {
  PieChartAggregatedFieldWells?: QuickSightDashboardPieChartAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.PieChartSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-piechartsortconfiguration.html | AWS::QuickSight::Dashboard.PieChartSortConfiguration}
 */
export interface QuickSightDashboardPieChartSortConfiguration {
  SmallMultiplesSort?: any[];
  CategoryItemsLimit?: QuickSightDashboardItemsLimitConfiguration;
  CategorySort?: any[];
  SmallMultiplesLimitConfiguration?: QuickSightDashboardItemsLimitConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.PieChartVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-piechartvisual.html | AWS::QuickSight::Dashboard.PieChartVisual}
 */
export interface QuickSightDashboardPieChartVisual {
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightDashboardPieChartConfiguration;
  Actions?: any[];
  Title?: QuickSightDashboardVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.PivotFieldSortOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivotfieldsortoptions.html | AWS::QuickSight::Dashboard.PivotFieldSortOptions}
 */
export interface QuickSightDashboardPivotFieldSortOptions {
  SortBy: QuickSightDashboardPivotTableSortBy;
  FieldId: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.PivotTableAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottableaggregatedfieldwells.html | AWS::QuickSight::Dashboard.PivotTableAggregatedFieldWells}
 */
export interface QuickSightDashboardPivotTableAggregatedFieldWells {
  Values?: any[];
  Columns?: any[];
  Rows?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.PivotTableCellConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottablecellconditionalformatting.html | AWS::QuickSight::Dashboard.PivotTableCellConditionalFormatting}
 */
export interface QuickSightDashboardPivotTableCellConditionalFormatting {
  Scope?: QuickSightDashboardPivotTableConditionalFormattingScope;
  Scopes?: any[];
  FieldId: string;
  TextFormat?: QuickSightDashboardTextConditionalFormat;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.PivotTableConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottableconditionalformatting.html | AWS::QuickSight::Dashboard.PivotTableConditionalFormatting}
 */
export interface QuickSightDashboardPivotTableConditionalFormatting {
  ConditionalFormattingOptions?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.PivotTableConditionalFormattingOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottableconditionalformattingoption.html | AWS::QuickSight::Dashboard.PivotTableConditionalFormattingOption}
 */
export interface QuickSightDashboardPivotTableConditionalFormattingOption {
  Cell?: QuickSightDashboardPivotTableCellConditionalFormatting;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.PivotTableConditionalFormattingScope
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottableconditionalformattingscope.html | AWS::QuickSight::Dashboard.PivotTableConditionalFormattingScope}
 */
export interface QuickSightDashboardPivotTableConditionalFormattingScope {
  Role?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.PivotTableConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottableconfiguration.html | AWS::QuickSight::Dashboard.PivotTableConfiguration}
 */
export interface QuickSightDashboardPivotTableConfiguration {
  SortConfiguration?: QuickSightDashboardPivotTableSortConfiguration;
  PaginatedReportOptions?: QuickSightDashboardPivotTablePaginatedReportOptions;
  TableOptions?: QuickSightDashboardPivotTableOptions;
  FieldWells?: QuickSightDashboardPivotTableFieldWells;
  FieldOptions?: QuickSightDashboardPivotTableFieldOptions;
  TotalOptions?: QuickSightDashboardPivotTableTotalOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.PivotTableDataPathOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottabledatapathoption.html | AWS::QuickSight::Dashboard.PivotTableDataPathOption}
 */
export interface QuickSightDashboardPivotTableDataPathOption {
  DataPathList: any[];
  Width?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.PivotTableFieldCollapseStateOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottablefieldcollapsestateoption.html | AWS::QuickSight::Dashboard.PivotTableFieldCollapseStateOption}
 */
export interface QuickSightDashboardPivotTableFieldCollapseStateOption {
  Target: QuickSightDashboardPivotTableFieldCollapseStateTarget;
  State?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.PivotTableFieldCollapseStateTarget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottablefieldcollapsestatetarget.html | AWS::QuickSight::Dashboard.PivotTableFieldCollapseStateTarget}
 */
export interface QuickSightDashboardPivotTableFieldCollapseStateTarget {
  FieldId?: string;
  FieldDataPathValues?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.PivotTableFieldOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottablefieldoption.html | AWS::QuickSight::Dashboard.PivotTableFieldOption}
 */
export interface QuickSightDashboardPivotTableFieldOption {
  CustomLabel?: string;
  FieldId: string;
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.PivotTableFieldOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottablefieldoptions.html | AWS::QuickSight::Dashboard.PivotTableFieldOptions}
 */
export interface QuickSightDashboardPivotTableFieldOptions {
  CollapseStateOptions?: any[];
  DataPathOptions?: any[];
  SelectedFieldOptions?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.PivotTableFieldSubtotalOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottablefieldsubtotaloptions.html | AWS::QuickSight::Dashboard.PivotTableFieldSubtotalOptions}
 */
export interface QuickSightDashboardPivotTableFieldSubtotalOptions {
  FieldId?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.PivotTableFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottablefieldwells.html | AWS::QuickSight::Dashboard.PivotTableFieldWells}
 */
export interface QuickSightDashboardPivotTableFieldWells {
  PivotTableAggregatedFieldWells?: QuickSightDashboardPivotTableAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.PivotTableOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottableoptions.html | AWS::QuickSight::Dashboard.PivotTableOptions}
 */
export interface QuickSightDashboardPivotTableOptions {
  RowFieldNamesStyle?: QuickSightDashboardTableCellStyle;
  RowHeaderStyle?: QuickSightDashboardTableCellStyle;
  CollapsedRowDimensionsVisibility?: string;
  RowsLayout?: string;
  MetricPlacement?: string;
  DefaultCellWidth?: string;
  ColumnNamesVisibility?: string;
  RowsLabelOptions?: QuickSightDashboardPivotTableRowsLabelOptions;
  SingleMetricVisibility?: string;
  ColumnHeaderStyle?: QuickSightDashboardTableCellStyle;
  ToggleButtonsVisibility?: string;
  CellStyle?: QuickSightDashboardTableCellStyle;
  RowAlternateColorOptions?: QuickSightDashboardRowAlternateColorOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.PivotTablePaginatedReportOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottablepaginatedreportoptions.html | AWS::QuickSight::Dashboard.PivotTablePaginatedReportOptions}
 */
export interface QuickSightDashboardPivotTablePaginatedReportOptions {
  OverflowColumnHeaderVisibility?: string;
  VerticalOverflowVisibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.PivotTableRowsLabelOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottablerowslabeloptions.html | AWS::QuickSight::Dashboard.PivotTableRowsLabelOptions}
 */
export interface QuickSightDashboardPivotTableRowsLabelOptions {
  CustomLabel?: string;
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.PivotTableSortBy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottablesortby.html | AWS::QuickSight::Dashboard.PivotTableSortBy}
 */
export interface QuickSightDashboardPivotTableSortBy {
  Field?: QuickSightDashboardFieldSort;
  DataPath?: QuickSightDashboardDataPathSort;
  Column?: QuickSightDashboardColumnSort;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.PivotTableSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottablesortconfiguration.html | AWS::QuickSight::Dashboard.PivotTableSortConfiguration}
 */
export interface QuickSightDashboardPivotTableSortConfiguration {
  FieldSortOptions?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.PivotTableTotalOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottabletotaloptions.html | AWS::QuickSight::Dashboard.PivotTableTotalOptions}
 */
export interface QuickSightDashboardPivotTableTotalOptions {
  ColumnSubtotalOptions?: QuickSightDashboardSubtotalOptions;
  RowSubtotalOptions?: QuickSightDashboardSubtotalOptions;
  RowTotalOptions?: QuickSightDashboardPivotTotalOptions;
  ColumnTotalOptions?: QuickSightDashboardPivotTotalOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.PivotTableVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottablevisual.html | AWS::QuickSight::Dashboard.PivotTableVisual}
 */
export interface QuickSightDashboardPivotTableVisual {
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
  ConditionalFormatting?: QuickSightDashboardPivotTableConditionalFormatting;
  VisualId: string;
  ChartConfiguration?: QuickSightDashboardPivotTableConfiguration;
  Actions?: any[];
  Title?: QuickSightDashboardVisualTitleLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.PivotTotalOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottotaloptions.html | AWS::QuickSight::Dashboard.PivotTotalOptions}
 */
export interface QuickSightDashboardPivotTotalOptions {
  CustomLabel?: string;
  TotalAggregationOptions?: any[];
  ValueCellStyle?: QuickSightDashboardTableCellStyle;
  ScrollStatus?: string;
  Placement?: string;
  TotalCellStyle?: QuickSightDashboardTableCellStyle;
  TotalsVisibility?: string;
  MetricHeaderCellStyle?: QuickSightDashboardTableCellStyle;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.PredefinedHierarchy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-predefinedhierarchy.html | AWS::QuickSight::Dashboard.PredefinedHierarchy}
 */
export interface QuickSightDashboardPredefinedHierarchy {
  HierarchyId: string;
  DrillDownFilters?: any[];
  Columns: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ProgressBarOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-progressbaroptions.html | AWS::QuickSight::Dashboard.ProgressBarOptions}
 */
export interface QuickSightDashboardProgressBarOptions {
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.RadarChartAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-radarchartaggregatedfieldwells.html | AWS::QuickSight::Dashboard.RadarChartAggregatedFieldWells}
 */
export interface QuickSightDashboardRadarChartAggregatedFieldWells {
  Category?: any[];
  Color?: any[];
  Values?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.RadarChartAreaStyleSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-radarchartareastylesettings.html | AWS::QuickSight::Dashboard.RadarChartAreaStyleSettings}
 */
export interface QuickSightDashboardRadarChartAreaStyleSettings {
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.RadarChartConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-radarchartconfiguration.html | AWS::QuickSight::Dashboard.RadarChartConfiguration}
 */
export interface QuickSightDashboardRadarChartConfiguration {
  SortConfiguration?: QuickSightDashboardRadarChartSortConfiguration;
  Legend?: QuickSightDashboardLegendOptions;
  Shape?: string;
  BaseSeriesSettings?: QuickSightDashboardRadarChartSeriesSettings;
  ColorLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  CategoryLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  AxesRangeScale?: string;
  VisualPalette?: QuickSightDashboardVisualPalette;
  AlternateBandColorsVisibility?: string;
  StartAngle?: number;
  CategoryAxis?: QuickSightDashboardAxisDisplayOptions;
  FieldWells?: QuickSightDashboardRadarChartFieldWells;
  ColorAxis?: QuickSightDashboardAxisDisplayOptions;
  AlternateBandOddColor?: string;
  AlternateBandEvenColor?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.RadarChartFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-radarchartfieldwells.html | AWS::QuickSight::Dashboard.RadarChartFieldWells}
 */
export interface QuickSightDashboardRadarChartFieldWells {
  RadarChartAggregatedFieldWells?: QuickSightDashboardRadarChartAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.RadarChartSeriesSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-radarchartseriessettings.html | AWS::QuickSight::Dashboard.RadarChartSeriesSettings}
 */
export interface QuickSightDashboardRadarChartSeriesSettings {
  AreaStyleSettings?: QuickSightDashboardRadarChartAreaStyleSettings;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.RadarChartSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-radarchartsortconfiguration.html | AWS::QuickSight::Dashboard.RadarChartSortConfiguration}
 */
export interface QuickSightDashboardRadarChartSortConfiguration {
  ColorSort?: any[];
  ColorItemsLimit?: QuickSightDashboardItemsLimitConfiguration;
  CategoryItemsLimit?: QuickSightDashboardItemsLimitConfiguration;
  CategorySort?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.RadarChartVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-radarchartvisual.html | AWS::QuickSight::Dashboard.RadarChartVisual}
 */
export interface QuickSightDashboardRadarChartVisual {
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightDashboardRadarChartConfiguration;
  Actions?: any[];
  Title?: QuickSightDashboardVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.RangeEndsLabelType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-rangeendslabeltype.html | AWS::QuickSight::Dashboard.RangeEndsLabelType}
 */
export interface QuickSightDashboardRangeEndsLabelType {
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ReferenceLine
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-referenceline.html | AWS::QuickSight::Dashboard.ReferenceLine}
 */
export interface QuickSightDashboardReferenceLine {
  Status?: string;
  DataConfiguration: QuickSightDashboardReferenceLineDataConfiguration;
  LabelConfiguration?: QuickSightDashboardReferenceLineLabelConfiguration;
  StyleConfiguration?: QuickSightDashboardReferenceLineStyleConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ReferenceLineCustomLabelConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-referencelinecustomlabelconfiguration.html | AWS::QuickSight::Dashboard.ReferenceLineCustomLabelConfiguration}
 */
export interface QuickSightDashboardReferenceLineCustomLabelConfiguration {
  CustomLabel: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ReferenceLineDataConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-referencelinedataconfiguration.html | AWS::QuickSight::Dashboard.ReferenceLineDataConfiguration}
 */
export interface QuickSightDashboardReferenceLineDataConfiguration {
  DynamicConfiguration?: QuickSightDashboardReferenceLineDynamicDataConfiguration;
  AxisBinding?: string;
  SeriesType?: string;
  StaticConfiguration?: QuickSightDashboardReferenceLineStaticDataConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ReferenceLineDynamicDataConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-referencelinedynamicdataconfiguration.html | AWS::QuickSight::Dashboard.ReferenceLineDynamicDataConfiguration}
 */
export interface QuickSightDashboardReferenceLineDynamicDataConfiguration {
  Column: QuickSightDashboardColumnIdentifier;
  MeasureAggregationFunction?: QuickSightDashboardAggregationFunction;
  Calculation: QuickSightDashboardNumericalAggregationFunction;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ReferenceLineLabelConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-referencelinelabelconfiguration.html | AWS::QuickSight::Dashboard.ReferenceLineLabelConfiguration}
 */
export interface QuickSightDashboardReferenceLineLabelConfiguration {
  HorizontalPosition?: string;
  ValueLabelConfiguration?: QuickSightDashboardReferenceLineValueLabelConfiguration;
  CustomLabelConfiguration?: QuickSightDashboardReferenceLineCustomLabelConfiguration;
  FontColor?: string;
  FontConfiguration?: QuickSightDashboardFontConfiguration;
  VerticalPosition?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ReferenceLineStaticDataConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-referencelinestaticdataconfiguration.html | AWS::QuickSight::Dashboard.ReferenceLineStaticDataConfiguration}
 */
export interface QuickSightDashboardReferenceLineStaticDataConfiguration {
  Value: number;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ReferenceLineStyleConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-referencelinestyleconfiguration.html | AWS::QuickSight::Dashboard.ReferenceLineStyleConfiguration}
 */
export interface QuickSightDashboardReferenceLineStyleConfiguration {
  Pattern?: string;
  Color?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ReferenceLineValueLabelConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-referencelinevaluelabelconfiguration.html | AWS::QuickSight::Dashboard.ReferenceLineValueLabelConfiguration}
 */
export interface QuickSightDashboardReferenceLineValueLabelConfiguration {
  FormatConfiguration?: QuickSightDashboardNumericFormatConfiguration;
  RelativePosition?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.RelativeDateTimeControlDisplayOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-relativedatetimecontroldisplayoptions.html | AWS::QuickSight::Dashboard.RelativeDateTimeControlDisplayOptions}
 */
export interface QuickSightDashboardRelativeDateTimeControlDisplayOptions {
  TitleOptions?: QuickSightDashboardLabelOptions;
  InfoIconLabelOptions?: QuickSightDashboardSheetControlInfoIconLabelOptions;
  DateTimeFormat?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.RelativeDatesFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-relativedatesfilter.html | AWS::QuickSight::Dashboard.RelativeDatesFilter}
 */
export interface QuickSightDashboardRelativeDatesFilter {
  RelativeDateValue?: number;
  Column: QuickSightDashboardColumnIdentifier;
  RelativeDateType: string;
  TimeGranularity: string;
  ParameterName?: string;
  NullOption: string;
  FilterId: string;
  AnchorDateConfiguration: QuickSightDashboardAnchorDateConfiguration;
  MinimumGranularity?: string;
  ExcludePeriodConfiguration?: QuickSightDashboardExcludePeriodConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ResourcePermission
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-resourcepermission.html | AWS::QuickSight::Dashboard.ResourcePermission}
 */
export interface QuickSightDashboardResourcePermission {
  Actions: any[];
  Resource?: string;
  Principal: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.RollingDateConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-rollingdateconfiguration.html | AWS::QuickSight::Dashboard.RollingDateConfiguration}
 */
export interface QuickSightDashboardRollingDateConfiguration {
  Expression: string;
  DataSetIdentifier?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.RowAlternateColorOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-rowalternatecoloroptions.html | AWS::QuickSight::Dashboard.RowAlternateColorOptions}
 */
export interface QuickSightDashboardRowAlternateColorOptions {
  Status?: string;
  UsePrimaryBackgroundColor?: string;
  RowAlternateColors?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.SameSheetTargetVisualConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-samesheettargetvisualconfiguration.html | AWS::QuickSight::Dashboard.SameSheetTargetVisualConfiguration}
 */
export interface QuickSightDashboardSameSheetTargetVisualConfiguration {
  TargetVisualOptions?: string;
  TargetVisuals?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.SankeyDiagramAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sankeydiagramaggregatedfieldwells.html | AWS::QuickSight::Dashboard.SankeyDiagramAggregatedFieldWells}
 */
export interface QuickSightDashboardSankeyDiagramAggregatedFieldWells {
  Destination?: any[];
  Source?: any[];
  Weight?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.SankeyDiagramChartConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sankeydiagramchartconfiguration.html | AWS::QuickSight::Dashboard.SankeyDiagramChartConfiguration}
 */
export interface QuickSightDashboardSankeyDiagramChartConfiguration {
  SortConfiguration?: QuickSightDashboardSankeyDiagramSortConfiguration;
  DataLabels?: QuickSightDashboardDataLabelOptions;
  FieldWells?: QuickSightDashboardSankeyDiagramFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.SankeyDiagramFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sankeydiagramfieldwells.html | AWS::QuickSight::Dashboard.SankeyDiagramFieldWells}
 */
export interface QuickSightDashboardSankeyDiagramFieldWells {
  SankeyDiagramAggregatedFieldWells?: QuickSightDashboardSankeyDiagramAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.SankeyDiagramSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sankeydiagramsortconfiguration.html | AWS::QuickSight::Dashboard.SankeyDiagramSortConfiguration}
 */
export interface QuickSightDashboardSankeyDiagramSortConfiguration {
  WeightSort?: any[];
  SourceItemsLimit?: QuickSightDashboardItemsLimitConfiguration;
  DestinationItemsLimit?: QuickSightDashboardItemsLimitConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.SankeyDiagramVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sankeydiagramvisual.html | AWS::QuickSight::Dashboard.SankeyDiagramVisual}
 */
export interface QuickSightDashboardSankeyDiagramVisual {
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightDashboardSankeyDiagramChartConfiguration;
  Actions?: any[];
  Title?: QuickSightDashboardVisualTitleLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ScatterPlotCategoricallyAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-scatterplotcategoricallyaggregatedfieldwells.html | AWS::QuickSight::Dashboard.ScatterPlotCategoricallyAggregatedFieldWells}
 */
export interface QuickSightDashboardScatterPlotCategoricallyAggregatedFieldWells {
  Category?: any[];
  Size?: any[];
  Label?: any[];
  XAxis?: any[];
  YAxis?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ScatterPlotConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-scatterplotconfiguration.html | AWS::QuickSight::Dashboard.ScatterPlotConfiguration}
 */
export interface QuickSightDashboardScatterPlotConfiguration {
  YAxisLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  Legend?: QuickSightDashboardLegendOptions;
  YAxisDisplayOptions?: QuickSightDashboardAxisDisplayOptions;
  DataLabels?: QuickSightDashboardDataLabelOptions;
  FieldWells?: QuickSightDashboardScatterPlotFieldWells;
  Tooltip?: QuickSightDashboardTooltipOptions;
  XAxisLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  VisualPalette?: QuickSightDashboardVisualPalette;
  XAxisDisplayOptions?: QuickSightDashboardAxisDisplayOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ScatterPlotFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-scatterplotfieldwells.html | AWS::QuickSight::Dashboard.ScatterPlotFieldWells}
 */
export interface QuickSightDashboardScatterPlotFieldWells {
  ScatterPlotUnaggregatedFieldWells?: QuickSightDashboardScatterPlotUnaggregatedFieldWells;
  ScatterPlotCategoricallyAggregatedFieldWells?: QuickSightDashboardScatterPlotCategoricallyAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ScatterPlotUnaggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-scatterplotunaggregatedfieldwells.html | AWS::QuickSight::Dashboard.ScatterPlotUnaggregatedFieldWells}
 */
export interface QuickSightDashboardScatterPlotUnaggregatedFieldWells {
  Category?: any[];
  Size?: any[];
  Label?: any[];
  XAxis?: any[];
  YAxis?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ScatterPlotVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-scatterplotvisual.html | AWS::QuickSight::Dashboard.ScatterPlotVisual}
 */
export interface QuickSightDashboardScatterPlotVisual {
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightDashboardScatterPlotConfiguration;
  Actions?: any[];
  Title?: QuickSightDashboardVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ScrollBarOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-scrollbaroptions.html | AWS::QuickSight::Dashboard.ScrollBarOptions}
 */
export interface QuickSightDashboardScrollBarOptions {
  VisibleRange?: QuickSightDashboardVisibleRangeOptions;
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.SecondaryValueOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-secondaryvalueoptions.html | AWS::QuickSight::Dashboard.SecondaryValueOptions}
 */
export interface QuickSightDashboardSecondaryValueOptions {
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.SectionAfterPageBreak
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sectionafterpagebreak.html | AWS::QuickSight::Dashboard.SectionAfterPageBreak}
 */
export interface QuickSightDashboardSectionAfterPageBreak {
  Status?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.SectionBasedLayoutCanvasSizeOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sectionbasedlayoutcanvassizeoptions.html | AWS::QuickSight::Dashboard.SectionBasedLayoutCanvasSizeOptions}
 */
export interface QuickSightDashboardSectionBasedLayoutCanvasSizeOptions {
  PaperCanvasSizeOptions?: QuickSightDashboardSectionBasedLayoutPaperCanvasSizeOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.SectionBasedLayoutConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sectionbasedlayoutconfiguration.html | AWS::QuickSight::Dashboard.SectionBasedLayoutConfiguration}
 */
export interface QuickSightDashboardSectionBasedLayoutConfiguration {
  CanvasSizeOptions: QuickSightDashboardSectionBasedLayoutCanvasSizeOptions;
  FooterSections: any[];
  BodySections: any[];
  HeaderSections: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.SectionBasedLayoutPaperCanvasSizeOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sectionbasedlayoutpapercanvassizeoptions.html | AWS::QuickSight::Dashboard.SectionBasedLayoutPaperCanvasSizeOptions}
 */
export interface QuickSightDashboardSectionBasedLayoutPaperCanvasSizeOptions {
  PaperMargin?: QuickSightDashboardSpacing;
  PaperSize?: string;
  PaperOrientation?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.SectionLayoutConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sectionlayoutconfiguration.html | AWS::QuickSight::Dashboard.SectionLayoutConfiguration}
 */
export interface QuickSightDashboardSectionLayoutConfiguration {
  FreeFormLayout: QuickSightDashboardFreeFormSectionLayoutConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.SectionPageBreakConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sectionpagebreakconfiguration.html | AWS::QuickSight::Dashboard.SectionPageBreakConfiguration}
 */
export interface QuickSightDashboardSectionPageBreakConfiguration {
  After?: QuickSightDashboardSectionAfterPageBreak;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.SectionStyle
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sectionstyle.html | AWS::QuickSight::Dashboard.SectionStyle}
 */
export interface QuickSightDashboardSectionStyle {
  Padding?: QuickSightDashboardSpacing;
  Height?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.SelectedSheetsFilterScopeConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-selectedsheetsfilterscopeconfiguration.html | AWS::QuickSight::Dashboard.SelectedSheetsFilterScopeConfiguration}
 */
export interface QuickSightDashboardSelectedSheetsFilterScopeConfiguration {
  SheetVisualScopingConfigurations?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.SeriesItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-seriesitem.html | AWS::QuickSight::Dashboard.SeriesItem}
 */
export interface QuickSightDashboardSeriesItem {
  FieldSeriesItem?: QuickSightDashboardFieldSeriesItem;
  DataFieldSeriesItem?: QuickSightDashboardDataFieldSeriesItem;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.SetParameterValueConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-setparametervalueconfiguration.html | AWS::QuickSight::Dashboard.SetParameterValueConfiguration}
 */
export interface QuickSightDashboardSetParameterValueConfiguration {
  DestinationParameterName: string;
  Value: QuickSightDashboardDestinationParameterValueConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ShapeConditionalFormat
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-shapeconditionalformat.html | AWS::QuickSight::Dashboard.ShapeConditionalFormat}
 */
export interface QuickSightDashboardShapeConditionalFormat {
  BackgroundColor: QuickSightDashboardConditionalFormattingColor;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.Sheet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sheet.html | AWS::QuickSight::Dashboard.Sheet}
 */
export interface QuickSightDashboardSheet {
  SheetId?: string;
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.SheetControlInfoIconLabelOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sheetcontrolinfoiconlabeloptions.html | AWS::QuickSight::Dashboard.SheetControlInfoIconLabelOptions}
 */
export interface QuickSightDashboardSheetControlInfoIconLabelOptions {
  Visibility?: string;
  InfoIconText?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.SheetControlLayout
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sheetcontrollayout.html | AWS::QuickSight::Dashboard.SheetControlLayout}
 */
export interface QuickSightDashboardSheetControlLayout {
  Configuration: QuickSightDashboardSheetControlLayoutConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.SheetControlLayoutConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sheetcontrollayoutconfiguration.html | AWS::QuickSight::Dashboard.SheetControlLayoutConfiguration}
 */
export interface QuickSightDashboardSheetControlLayoutConfiguration {
  GridLayout?: QuickSightDashboardGridLayoutConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.SheetControlsOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sheetcontrolsoption.html | AWS::QuickSight::Dashboard.SheetControlsOption}
 */
export interface QuickSightDashboardSheetControlsOption {
  VisibilityState?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.SheetDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sheetdefinition.html | AWS::QuickSight::Dashboard.SheetDefinition}
 */
export interface QuickSightDashboardSheetDefinition {
  Description?: string;
  ParameterControls?: any[];
  TextBoxes?: any[];
  Layouts?: any[];
  ContentType?: string;
  SheetId: string;
  FilterControls?: any[];
  SheetControlLayouts?: any[];
  Title?: string;
  Visuals?: any[];
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.SheetElementConfigurationOverrides
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sheetelementconfigurationoverrides.html | AWS::QuickSight::Dashboard.SheetElementConfigurationOverrides}
 */
export interface QuickSightDashboardSheetElementConfigurationOverrides {
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.SheetElementRenderingRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sheetelementrenderingrule.html | AWS::QuickSight::Dashboard.SheetElementRenderingRule}
 */
export interface QuickSightDashboardSheetElementRenderingRule {
  Expression: string;
  ConfigurationOverrides: QuickSightDashboardSheetElementConfigurationOverrides;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.SheetLayoutElementMaximizationOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sheetlayoutelementmaximizationoption.html | AWS::QuickSight::Dashboard.SheetLayoutElementMaximizationOption}
 */
export interface QuickSightDashboardSheetLayoutElementMaximizationOption {
  AvailabilityStatus?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.SheetTextBox
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sheettextbox.html | AWS::QuickSight::Dashboard.SheetTextBox}
 */
export interface QuickSightDashboardSheetTextBox {
  SheetTextBoxId: string;
  Content?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.SheetVisualScopingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sheetvisualscopingconfiguration.html | AWS::QuickSight::Dashboard.SheetVisualScopingConfiguration}
 */
export interface QuickSightDashboardSheetVisualScopingConfiguration {
  Scope: string;
  SheetId: string;
  VisualIds?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ShortFormatText
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-shortformattext.html | AWS::QuickSight::Dashboard.ShortFormatText}
 */
export interface QuickSightDashboardShortFormatText {
  RichText?: string;
  PlainText?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.SimpleClusterMarker
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-simpleclustermarker.html | AWS::QuickSight::Dashboard.SimpleClusterMarker}
 */
export interface QuickSightDashboardSimpleClusterMarker {
  Color?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.SliderControlDisplayOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-slidercontroldisplayoptions.html | AWS::QuickSight::Dashboard.SliderControlDisplayOptions}
 */
export interface QuickSightDashboardSliderControlDisplayOptions {
  TitleOptions?: QuickSightDashboardLabelOptions;
  InfoIconLabelOptions?: QuickSightDashboardSheetControlInfoIconLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.SmallMultiplesAxisProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-smallmultiplesaxisproperties.html | AWS::QuickSight::Dashboard.SmallMultiplesAxisProperties}
 */
export interface QuickSightDashboardSmallMultiplesAxisProperties {
  Placement?: string;
  Scale?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.SmallMultiplesOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-smallmultiplesoptions.html | AWS::QuickSight::Dashboard.SmallMultiplesOptions}
 */
export interface QuickSightDashboardSmallMultiplesOptions {
  MaxVisibleRows?: number;
  PanelConfiguration?: QuickSightDashboardPanelConfiguration;
  MaxVisibleColumns?: number;
  XAxis?: QuickSightDashboardSmallMultiplesAxisProperties;
  YAxis?: QuickSightDashboardSmallMultiplesAxisProperties;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.Spacing
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-spacing.html | AWS::QuickSight::Dashboard.Spacing}
 */
export interface QuickSightDashboardSpacing {
  Left?: string;
  Top?: string;
  Right?: string;
  Bottom?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.StringDefaultValues
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-stringdefaultvalues.html | AWS::QuickSight::Dashboard.StringDefaultValues}
 */
export interface QuickSightDashboardStringDefaultValues {
  DynamicValue?: QuickSightDashboardDynamicDefaultValue;
  StaticValues?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.StringFormatConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-stringformatconfiguration.html | AWS::QuickSight::Dashboard.StringFormatConfiguration}
 */
export interface QuickSightDashboardStringFormatConfiguration {
  NumericFormatConfiguration?: QuickSightDashboardNumericFormatConfiguration;
  NullValueFormatConfiguration?: QuickSightDashboardNullValueFormatConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.StringParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-stringparameter.html | AWS::QuickSight::Dashboard.StringParameter}
 */
export interface QuickSightDashboardStringParameter {
  Values: any[];
  Name: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.StringParameterDeclaration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-stringparameterdeclaration.html | AWS::QuickSight::Dashboard.StringParameterDeclaration}
 */
export interface QuickSightDashboardStringParameterDeclaration {
  MappedDataSetParameters?: any[];
  DefaultValues?: QuickSightDashboardStringDefaultValues;
  ParameterValueType: string;
  ValueWhenUnset?: QuickSightDashboardStringValueWhenUnsetConfiguration;
  Name: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.StringValueWhenUnsetConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-stringvaluewhenunsetconfiguration.html | AWS::QuickSight::Dashboard.StringValueWhenUnsetConfiguration}
 */
export interface QuickSightDashboardStringValueWhenUnsetConfiguration {
  ValueWhenUnsetOption?: string;
  CustomValue?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.SubtotalOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-subtotaloptions.html | AWS::QuickSight::Dashboard.SubtotalOptions}
 */
export interface QuickSightDashboardSubtotalOptions {
  CustomLabel?: string;
  FieldLevelOptions?: any[];
  ValueCellStyle?: QuickSightDashboardTableCellStyle;
  TotalCellStyle?: QuickSightDashboardTableCellStyle;
  TotalsVisibility?: string;
  FieldLevel?: string;
  MetricHeaderCellStyle?: QuickSightDashboardTableCellStyle;
  StyleTargets?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TableAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tableaggregatedfieldwells.html | AWS::QuickSight::Dashboard.TableAggregatedFieldWells}
 */
export interface QuickSightDashboardTableAggregatedFieldWells {
  GroupBy?: any[];
  Values?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TableBorderOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tableborderoptions.html | AWS::QuickSight::Dashboard.TableBorderOptions}
 */
export interface QuickSightDashboardTableBorderOptions {
  Thickness?: number;
  Color?: string;
  Style?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TableCellConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablecellconditionalformatting.html | AWS::QuickSight::Dashboard.TableCellConditionalFormatting}
 */
export interface QuickSightDashboardTableCellConditionalFormatting {
  FieldId: string;
  TextFormat?: QuickSightDashboardTextConditionalFormat;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TableCellImageSizingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablecellimagesizingconfiguration.html | AWS::QuickSight::Dashboard.TableCellImageSizingConfiguration}
 */
export interface QuickSightDashboardTableCellImageSizingConfiguration {
  TableCellImageScalingConfiguration?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TableCellStyle
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablecellstyle.html | AWS::QuickSight::Dashboard.TableCellStyle}
 */
export interface QuickSightDashboardTableCellStyle {
  VerticalTextAlignment?: string;
  Visibility?: string;
  Height?: number;
  FontConfiguration?: QuickSightDashboardFontConfiguration;
  Border?: QuickSightDashboardGlobalTableBorderOptions;
  TextWrap?: string;
  HorizontalTextAlignment?: string;
  BackgroundColor?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TableConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tableconditionalformatting.html | AWS::QuickSight::Dashboard.TableConditionalFormatting}
 */
export interface QuickSightDashboardTableConditionalFormatting {
  ConditionalFormattingOptions?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TableConditionalFormattingOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tableconditionalformattingoption.html | AWS::QuickSight::Dashboard.TableConditionalFormattingOption}
 */
export interface QuickSightDashboardTableConditionalFormattingOption {
  Row?: QuickSightDashboardTableRowConditionalFormatting;
  Cell?: QuickSightDashboardTableCellConditionalFormatting;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TableConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tableconfiguration.html | AWS::QuickSight::Dashboard.TableConfiguration}
 */
export interface QuickSightDashboardTableConfiguration {
  SortConfiguration?: QuickSightDashboardTableSortConfiguration;
  PaginatedReportOptions?: QuickSightDashboardTablePaginatedReportOptions;
  TableOptions?: QuickSightDashboardTableOptions;
  TableInlineVisualizations?: any[];
  FieldWells?: QuickSightDashboardTableFieldWells;
  FieldOptions?: QuickSightDashboardTableFieldOptions;
  TotalOptions?: QuickSightDashboardTotalOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TableFieldCustomIconContent
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablefieldcustomiconcontent.html | AWS::QuickSight::Dashboard.TableFieldCustomIconContent}
 */
export interface QuickSightDashboardTableFieldCustomIconContent {
  Icon?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TableFieldCustomTextContent
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablefieldcustomtextcontent.html | AWS::QuickSight::Dashboard.TableFieldCustomTextContent}
 */
export interface QuickSightDashboardTableFieldCustomTextContent {
  Value?: string;
  FontConfiguration: QuickSightDashboardFontConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TableFieldImageConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablefieldimageconfiguration.html | AWS::QuickSight::Dashboard.TableFieldImageConfiguration}
 */
export interface QuickSightDashboardTableFieldImageConfiguration {
  SizingOptions?: QuickSightDashboardTableCellImageSizingConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TableFieldLinkConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablefieldlinkconfiguration.html | AWS::QuickSight::Dashboard.TableFieldLinkConfiguration}
 */
export interface QuickSightDashboardTableFieldLinkConfiguration {
  Target: string;
  Content: QuickSightDashboardTableFieldLinkContentConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TableFieldLinkContentConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablefieldlinkcontentconfiguration.html | AWS::QuickSight::Dashboard.TableFieldLinkContentConfiguration}
 */
export interface QuickSightDashboardTableFieldLinkContentConfiguration {
  CustomIconContent?: QuickSightDashboardTableFieldCustomIconContent;
  CustomTextContent?: QuickSightDashboardTableFieldCustomTextContent;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TableFieldOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablefieldoption.html | AWS::QuickSight::Dashboard.TableFieldOption}
 */
export interface QuickSightDashboardTableFieldOption {
  CustomLabel?: string;
  URLStyling?: QuickSightDashboardTableFieldURLConfiguration;
  FieldId: string;
  Visibility?: string;
  Width?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TableFieldOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablefieldoptions.html | AWS::QuickSight::Dashboard.TableFieldOptions}
 */
export interface QuickSightDashboardTableFieldOptions {
  Order?: any[];
  PinnedFieldOptions?: QuickSightDashboardTablePinnedFieldOptions;
  SelectedFieldOptions?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TableFieldURLConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablefieldurlconfiguration.html | AWS::QuickSight::Dashboard.TableFieldURLConfiguration}
 */
export interface QuickSightDashboardTableFieldURLConfiguration {
  LinkConfiguration?: QuickSightDashboardTableFieldLinkConfiguration;
  ImageConfiguration?: QuickSightDashboardTableFieldImageConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TableFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablefieldwells.html | AWS::QuickSight::Dashboard.TableFieldWells}
 */
export interface QuickSightDashboardTableFieldWells {
  TableUnaggregatedFieldWells?: QuickSightDashboardTableUnaggregatedFieldWells;
  TableAggregatedFieldWells?: QuickSightDashboardTableAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TableInlineVisualization
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tableinlinevisualization.html | AWS::QuickSight::Dashboard.TableInlineVisualization}
 */
export interface QuickSightDashboardTableInlineVisualization {
  DataBars?: QuickSightDashboardDataBarsOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TableOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tableoptions.html | AWS::QuickSight::Dashboard.TableOptions}
 */
export interface QuickSightDashboardTableOptions {
  HeaderStyle?: QuickSightDashboardTableCellStyle;
  CellStyle?: QuickSightDashboardTableCellStyle;
  Orientation?: string;
  RowAlternateColorOptions?: QuickSightDashboardRowAlternateColorOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TablePaginatedReportOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablepaginatedreportoptions.html | AWS::QuickSight::Dashboard.TablePaginatedReportOptions}
 */
export interface QuickSightDashboardTablePaginatedReportOptions {
  OverflowColumnHeaderVisibility?: string;
  VerticalOverflowVisibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TablePinnedFieldOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablepinnedfieldoptions.html | AWS::QuickSight::Dashboard.TablePinnedFieldOptions}
 */
export interface QuickSightDashboardTablePinnedFieldOptions {
  PinnedLeftFields?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TableRowConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablerowconditionalformatting.html | AWS::QuickSight::Dashboard.TableRowConditionalFormatting}
 */
export interface QuickSightDashboardTableRowConditionalFormatting {
  TextColor?: QuickSightDashboardConditionalFormattingColor;
  BackgroundColor?: QuickSightDashboardConditionalFormattingColor;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TableSideBorderOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablesideborderoptions.html | AWS::QuickSight::Dashboard.TableSideBorderOptions}
 */
export interface QuickSightDashboardTableSideBorderOptions {
  Left?: QuickSightDashboardTableBorderOptions;
  Top?: QuickSightDashboardTableBorderOptions;
  InnerHorizontal?: QuickSightDashboardTableBorderOptions;
  Right?: QuickSightDashboardTableBorderOptions;
  Bottom?: QuickSightDashboardTableBorderOptions;
  InnerVertical?: QuickSightDashboardTableBorderOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TableSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablesortconfiguration.html | AWS::QuickSight::Dashboard.TableSortConfiguration}
 */
export interface QuickSightDashboardTableSortConfiguration {
  RowSort?: any[];
  PaginationConfiguration?: QuickSightDashboardPaginationConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TableStyleTarget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablestyletarget.html | AWS::QuickSight::Dashboard.TableStyleTarget}
 */
export interface QuickSightDashboardTableStyleTarget {
  CellType: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TableUnaggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tableunaggregatedfieldwells.html | AWS::QuickSight::Dashboard.TableUnaggregatedFieldWells}
 */
export interface QuickSightDashboardTableUnaggregatedFieldWells {
  Values?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TableVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablevisual.html | AWS::QuickSight::Dashboard.TableVisual}
 */
export interface QuickSightDashboardTableVisual {
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
  ConditionalFormatting?: QuickSightDashboardTableConditionalFormatting;
  VisualId: string;
  ChartConfiguration?: QuickSightDashboardTableConfiguration;
  Actions?: any[];
  Title?: QuickSightDashboardVisualTitleLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TextAreaControlDisplayOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-textareacontroldisplayoptions.html | AWS::QuickSight::Dashboard.TextAreaControlDisplayOptions}
 */
export interface QuickSightDashboardTextAreaControlDisplayOptions {
  TitleOptions?: QuickSightDashboardLabelOptions;
  PlaceholderOptions?: QuickSightDashboardTextControlPlaceholderOptions;
  InfoIconLabelOptions?: QuickSightDashboardSheetControlInfoIconLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TextConditionalFormat
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-textconditionalformat.html | AWS::QuickSight::Dashboard.TextConditionalFormat}
 */
export interface QuickSightDashboardTextConditionalFormat {
  TextColor?: QuickSightDashboardConditionalFormattingColor;
  Icon?: QuickSightDashboardConditionalFormattingIcon;
  BackgroundColor?: QuickSightDashboardConditionalFormattingColor;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TextControlPlaceholderOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-textcontrolplaceholderoptions.html | AWS::QuickSight::Dashboard.TextControlPlaceholderOptions}
 */
export interface QuickSightDashboardTextControlPlaceholderOptions {
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TextFieldControlDisplayOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-textfieldcontroldisplayoptions.html | AWS::QuickSight::Dashboard.TextFieldControlDisplayOptions}
 */
export interface QuickSightDashboardTextFieldControlDisplayOptions {
  TitleOptions?: QuickSightDashboardLabelOptions;
  PlaceholderOptions?: QuickSightDashboardTextControlPlaceholderOptions;
  InfoIconLabelOptions?: QuickSightDashboardSheetControlInfoIconLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ThousandSeparatorOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-thousandseparatoroptions.html | AWS::QuickSight::Dashboard.ThousandSeparatorOptions}
 */
export interface QuickSightDashboardThousandSeparatorOptions {
  Symbol?: string;
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TimeBasedForecastProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-timebasedforecastproperties.html | AWS::QuickSight::Dashboard.TimeBasedForecastProperties}
 */
export interface QuickSightDashboardTimeBasedForecastProperties {
  PeriodsBackward?: number;
  PeriodsForward?: number;
  PredictionInterval?: number;
  Seasonality?: number;
  UpperBoundary?: number;
  LowerBoundary?: number;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TimeEqualityFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-timeequalityfilter.html | AWS::QuickSight::Dashboard.TimeEqualityFilter}
 */
export interface QuickSightDashboardTimeEqualityFilter {
  Column: QuickSightDashboardColumnIdentifier;
  RollingDate?: QuickSightDashboardRollingDateConfiguration;
  Value?: string;
  TimeGranularity?: string;
  ParameterName?: string;
  FilterId: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TimeRangeDrillDownFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-timerangedrilldownfilter.html | AWS::QuickSight::Dashboard.TimeRangeDrillDownFilter}
 */
export interface QuickSightDashboardTimeRangeDrillDownFilter {
  Column: QuickSightDashboardColumnIdentifier;
  RangeMinimum: string;
  TimeGranularity: string;
  RangeMaximum: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TimeRangeFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-timerangefilter.html | AWS::QuickSight::Dashboard.TimeRangeFilter}
 */
export interface QuickSightDashboardTimeRangeFilter {
  RangeMinimumValue?: QuickSightDashboardTimeRangeFilterValue;
  Column: QuickSightDashboardColumnIdentifier;
  RangeMaximumValue?: QuickSightDashboardTimeRangeFilterValue;
  IncludeMaximum?: boolean;
  TimeGranularity?: string;
  NullOption: string;
  FilterId: string;
  IncludeMinimum?: boolean;
  ExcludePeriodConfiguration?: QuickSightDashboardExcludePeriodConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TimeRangeFilterValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-timerangefiltervalue.html | AWS::QuickSight::Dashboard.TimeRangeFilterValue}
 */
export interface QuickSightDashboardTimeRangeFilterValue {
  RollingDate?: QuickSightDashboardRollingDateConfiguration;
  StaticValue?: string;
  Parameter?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TooltipItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tooltipitem.html | AWS::QuickSight::Dashboard.TooltipItem}
 */
export interface QuickSightDashboardTooltipItem {
  FieldTooltipItem?: QuickSightDashboardFieldTooltipItem;
  ColumnTooltipItem?: QuickSightDashboardColumnTooltipItem;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TooltipOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tooltipoptions.html | AWS::QuickSight::Dashboard.TooltipOptions}
 */
export interface QuickSightDashboardTooltipOptions {
  SelectedTooltipType?: string;
  TooltipVisibility?: string;
  FieldBasedTooltip?: QuickSightDashboardFieldBasedTooltip;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TopBottomFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-topbottomfilter.html | AWS::QuickSight::Dashboard.TopBottomFilter}
 */
export interface QuickSightDashboardTopBottomFilter {
  AggregationSortConfigurations: any[];
  Column: QuickSightDashboardColumnIdentifier;
  TimeGranularity?: string;
  ParameterName?: string;
  Limit?: number;
  FilterId: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TopBottomMoversComputation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-topbottommoverscomputation.html | AWS::QuickSight::Dashboard.TopBottomMoversComputation}
 */
export interface QuickSightDashboardTopBottomMoversComputation {
  Type: string;
  Category?: QuickSightDashboardDimensionField;
  Value?: QuickSightDashboardMeasureField;
  SortOrder?: string;
  Time?: QuickSightDashboardDimensionField;
  MoverSize?: number;
  ComputationId: string;
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TopBottomRankedComputation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-topbottomrankedcomputation.html | AWS::QuickSight::Dashboard.TopBottomRankedComputation}
 */
export interface QuickSightDashboardTopBottomRankedComputation {
  Type: string;
  Category?: QuickSightDashboardDimensionField;
  ResultSize?: number;
  Value?: QuickSightDashboardMeasureField;
  ComputationId: string;
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TotalAggregationComputation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-totalaggregationcomputation.html | AWS::QuickSight::Dashboard.TotalAggregationComputation}
 */
export interface QuickSightDashboardTotalAggregationComputation {
  Value?: QuickSightDashboardMeasureField;
  ComputationId: string;
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TotalAggregationFunction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-totalaggregationfunction.html | AWS::QuickSight::Dashboard.TotalAggregationFunction}
 */
export interface QuickSightDashboardTotalAggregationFunction {
  SimpleTotalAggregationFunction?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TotalAggregationOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-totalaggregationoption.html | AWS::QuickSight::Dashboard.TotalAggregationOption}
 */
export interface QuickSightDashboardTotalAggregationOption {
  TotalAggregationFunction: QuickSightDashboardTotalAggregationFunction;
  FieldId: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TotalOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-totaloptions.html | AWS::QuickSight::Dashboard.TotalOptions}
 */
export interface QuickSightDashboardTotalOptions {
  CustomLabel?: string;
  TotalAggregationOptions?: any[];
  ScrollStatus?: string;
  Placement?: string;
  TotalCellStyle?: QuickSightDashboardTableCellStyle;
  TotalsVisibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TreeMapAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-treemapaggregatedfieldwells.html | AWS::QuickSight::Dashboard.TreeMapAggregatedFieldWells}
 */
export interface QuickSightDashboardTreeMapAggregatedFieldWells {
  Sizes?: any[];
  Colors?: any[];
  Groups?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TreeMapConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-treemapconfiguration.html | AWS::QuickSight::Dashboard.TreeMapConfiguration}
 */
export interface QuickSightDashboardTreeMapConfiguration {
  SortConfiguration?: QuickSightDashboardTreeMapSortConfiguration;
  Legend?: QuickSightDashboardLegendOptions;
  DataLabels?: QuickSightDashboardDataLabelOptions;
  ColorLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  SizeLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  FieldWells?: QuickSightDashboardTreeMapFieldWells;
  Tooltip?: QuickSightDashboardTooltipOptions;
  ColorScale?: QuickSightDashboardColorScale;
  GroupLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TreeMapFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-treemapfieldwells.html | AWS::QuickSight::Dashboard.TreeMapFieldWells}
 */
export interface QuickSightDashboardTreeMapFieldWells {
  TreeMapAggregatedFieldWells?: QuickSightDashboardTreeMapAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TreeMapSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-treemapsortconfiguration.html | AWS::QuickSight::Dashboard.TreeMapSortConfiguration}
 */
export interface QuickSightDashboardTreeMapSortConfiguration {
  TreeMapSort?: any[];
  TreeMapGroupItemsLimitConfiguration?: QuickSightDashboardItemsLimitConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TreeMapVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-treemapvisual.html | AWS::QuickSight::Dashboard.TreeMapVisual}
 */
export interface QuickSightDashboardTreeMapVisual {
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightDashboardTreeMapConfiguration;
  Actions?: any[];
  Title?: QuickSightDashboardVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.TrendArrowOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-trendarrowoptions.html | AWS::QuickSight::Dashboard.TrendArrowOptions}
 */
export interface QuickSightDashboardTrendArrowOptions {
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.UnaggregatedField
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-unaggregatedfield.html | AWS::QuickSight::Dashboard.UnaggregatedField}
 */
export interface QuickSightDashboardUnaggregatedField {
  FormatConfiguration?: QuickSightDashboardFormatConfiguration;
  Column: QuickSightDashboardColumnIdentifier;
  FieldId: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.UniqueValuesComputation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-uniquevaluescomputation.html | AWS::QuickSight::Dashboard.UniqueValuesComputation}
 */
export interface QuickSightDashboardUniqueValuesComputation {
  Category?: QuickSightDashboardDimensionField;
  ComputationId: string;
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.ValidationStrategy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-validationstrategy.html | AWS::QuickSight::Dashboard.ValidationStrategy}
 */
export interface QuickSightDashboardValidationStrategy {
  Mode: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.VisibleRangeOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-visiblerangeoptions.html | AWS::QuickSight::Dashboard.VisibleRangeOptions}
 */
export interface QuickSightDashboardVisibleRangeOptions {
  PercentRange?: QuickSightDashboardPercentVisibleRange;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.Visual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-visual.html | AWS::QuickSight::Dashboard.Visual}
 */
export interface QuickSightDashboardVisual {
  FunnelChartVisual?: QuickSightDashboardFunnelChartVisual;
  FilledMapVisual?: QuickSightDashboardFilledMapVisual;
  BoxPlotVisual?: QuickSightDashboardBoxPlotVisual;
  WaterfallVisual?: QuickSightDashboardWaterfallVisual;
  CustomContentVisual?: QuickSightDashboardCustomContentVisual;
  PieChartVisual?: QuickSightDashboardPieChartVisual;
  KPIVisual?: QuickSightDashboardKPIVisual;
  HistogramVisual?: QuickSightDashboardHistogramVisual;
  TableVisual?: QuickSightDashboardTableVisual;
  PivotTableVisual?: QuickSightDashboardPivotTableVisual;
  GeospatialMapVisual?: QuickSightDashboardGeospatialMapVisual;
  BarChartVisual?: QuickSightDashboardBarChartVisual;
  ScatterPlotVisual?: QuickSightDashboardScatterPlotVisual;
  RadarChartVisual?: QuickSightDashboardRadarChartVisual;
  HeatMapVisual?: QuickSightDashboardHeatMapVisual;
  TreeMapVisual?: QuickSightDashboardTreeMapVisual;
  ComboChartVisual?: QuickSightDashboardComboChartVisual;
  WordCloudVisual?: QuickSightDashboardWordCloudVisual;
  InsightVisual?: QuickSightDashboardInsightVisual;
  SankeyDiagramVisual?: QuickSightDashboardSankeyDiagramVisual;
  GaugeChartVisual?: QuickSightDashboardGaugeChartVisual;
  LineChartVisual?: QuickSightDashboardLineChartVisual;
  EmptyVisual?: QuickSightDashboardEmptyVisual;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.VisualAxisSortOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-visualaxissortoption.html | AWS::QuickSight::Dashboard.VisualAxisSortOption}
 */
export interface QuickSightDashboardVisualAxisSortOption {
  AvailabilityStatus?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.VisualCustomAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-visualcustomaction.html | AWS::QuickSight::Dashboard.VisualCustomAction}
 */
export interface QuickSightDashboardVisualCustomAction {
  Status?: string;
  Trigger: string;
  CustomActionId: string;
  Name: string;
  ActionOperations: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.VisualCustomActionOperation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-visualcustomactionoperation.html | AWS::QuickSight::Dashboard.VisualCustomActionOperation}
 */
export interface QuickSightDashboardVisualCustomActionOperation {
  NavigationOperation?: QuickSightDashboardCustomActionNavigationOperation;
  SetParametersOperation?: QuickSightDashboardCustomActionSetParametersOperation;
  FilterOperation?: QuickSightDashboardCustomActionFilterOperation;
  URLOperation?: QuickSightDashboardCustomActionURLOperation;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.VisualMenuOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-visualmenuoption.html | AWS::QuickSight::Dashboard.VisualMenuOption}
 */
export interface QuickSightDashboardVisualMenuOption {
  AvailabilityStatus?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.VisualPalette
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-visualpalette.html | AWS::QuickSight::Dashboard.VisualPalette}
 */
export interface QuickSightDashboardVisualPalette {
  ChartColor?: string;
  ColorMap?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.VisualSubtitleLabelOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-visualsubtitlelabeloptions.html | AWS::QuickSight::Dashboard.VisualSubtitleLabelOptions}
 */
export interface QuickSightDashboardVisualSubtitleLabelOptions {
  Visibility?: string;
  FormatText?: QuickSightDashboardLongFormatText;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.VisualTitleLabelOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-visualtitlelabeloptions.html | AWS::QuickSight::Dashboard.VisualTitleLabelOptions}
 */
export interface QuickSightDashboardVisualTitleLabelOptions {
  Visibility?: string;
  FormatText?: QuickSightDashboardShortFormatText;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.WaterfallChartAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-waterfallchartaggregatedfieldwells.html | AWS::QuickSight::Dashboard.WaterfallChartAggregatedFieldWells}
 */
export interface QuickSightDashboardWaterfallChartAggregatedFieldWells {
  Categories?: any[];
  Breakdowns?: any[];
  Values?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.WaterfallChartConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-waterfallchartconfiguration.html | AWS::QuickSight::Dashboard.WaterfallChartConfiguration}
 */
export interface QuickSightDashboardWaterfallChartConfiguration {
  CategoryAxisLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  SortConfiguration?: QuickSightDashboardWaterfallChartSortConfiguration;
  Legend?: QuickSightDashboardLegendOptions;
  DataLabels?: QuickSightDashboardDataLabelOptions;
  PrimaryYAxisLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  FieldWells?: QuickSightDashboardWaterfallChartFieldWells;
  WaterfallChartOptions?: QuickSightDashboardWaterfallChartOptions;
  CategoryAxisDisplayOptions?: QuickSightDashboardAxisDisplayOptions;
  PrimaryYAxisDisplayOptions?: QuickSightDashboardAxisDisplayOptions;
  VisualPalette?: QuickSightDashboardVisualPalette;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.WaterfallChartFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-waterfallchartfieldwells.html | AWS::QuickSight::Dashboard.WaterfallChartFieldWells}
 */
export interface QuickSightDashboardWaterfallChartFieldWells {
  WaterfallChartAggregatedFieldWells?: QuickSightDashboardWaterfallChartAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.WaterfallChartOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-waterfallchartoptions.html | AWS::QuickSight::Dashboard.WaterfallChartOptions}
 */
export interface QuickSightDashboardWaterfallChartOptions {
  TotalBarLabel?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.WaterfallChartSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-waterfallchartsortconfiguration.html | AWS::QuickSight::Dashboard.WaterfallChartSortConfiguration}
 */
export interface QuickSightDashboardWaterfallChartSortConfiguration {
  BreakdownItemsLimit?: QuickSightDashboardItemsLimitConfiguration;
  CategorySort?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.WaterfallVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-waterfallvisual.html | AWS::QuickSight::Dashboard.WaterfallVisual}
 */
export interface QuickSightDashboardWaterfallVisual {
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightDashboardWaterfallChartConfiguration;
  Actions?: any[];
  Title?: QuickSightDashboardVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.WhatIfPointScenario
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-whatifpointscenario.html | AWS::QuickSight::Dashboard.WhatIfPointScenario}
 */
export interface QuickSightDashboardWhatIfPointScenario {
  Value: number;
  Date: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.WhatIfRangeScenario
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-whatifrangescenario.html | AWS::QuickSight::Dashboard.WhatIfRangeScenario}
 */
export interface QuickSightDashboardWhatIfRangeScenario {
  StartDate: string;
  Value: number;
  EndDate: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.WordCloudAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-wordcloudaggregatedfieldwells.html | AWS::QuickSight::Dashboard.WordCloudAggregatedFieldWells}
 */
export interface QuickSightDashboardWordCloudAggregatedFieldWells {
  GroupBy?: any[];
  Size?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.WordCloudChartConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-wordcloudchartconfiguration.html | AWS::QuickSight::Dashboard.WordCloudChartConfiguration}
 */
export interface QuickSightDashboardWordCloudChartConfiguration {
  SortConfiguration?: QuickSightDashboardWordCloudSortConfiguration;
  CategoryLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  FieldWells?: QuickSightDashboardWordCloudFieldWells;
  WordCloudOptions?: QuickSightDashboardWordCloudOptions;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.WordCloudFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-wordcloudfieldwells.html | AWS::QuickSight::Dashboard.WordCloudFieldWells}
 */
export interface QuickSightDashboardWordCloudFieldWells {
  WordCloudAggregatedFieldWells?: QuickSightDashboardWordCloudAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.WordCloudOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-wordcloudoptions.html | AWS::QuickSight::Dashboard.WordCloudOptions}
 */
export interface QuickSightDashboardWordCloudOptions {
  WordOrientation?: string;
  WordScaling?: string;
  CloudLayout?: string;
  MaximumStringLength?: number;
  WordCasing?: string;
  WordPadding?: string;
}
/**
 * Type definition for AWS::QuickSight::Dashboard.WordCloudSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-wordcloudsortconfiguration.html | AWS::QuickSight::Dashboard.WordCloudSortConfiguration}
 */
export interface QuickSightDashboardWordCloudSortConfiguration {
  CategoryItemsLimit?: QuickSightDashboardItemsLimitConfiguration;
  CategorySort?: any[];
}
/**
 * Type definition for AWS::QuickSight::Dashboard.WordCloudVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-wordcloudvisual.html | AWS::QuickSight::Dashboard.WordCloudVisual}
 */
export interface QuickSightDashboardWordCloudVisual {
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightDashboardWordCloudChartConfiguration;
  Actions?: any[];
  Title?: QuickSightDashboardVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::DataSet.CalculatedColumn
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-calculatedcolumn.html | AWS::QuickSight::DataSet.CalculatedColumn}
 */
export interface QuickSightDataSetCalculatedColumn {
  ColumnId: string;
  ColumnName: string;
  Expression: string;
}
/**
 * Type definition for AWS::QuickSight::DataSet.CastColumnTypeOperation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-castcolumntypeoperation.html | AWS::QuickSight::DataSet.CastColumnTypeOperation}
 */
export interface QuickSightDataSetCastColumnTypeOperation {
  ColumnName: string;
  Format?: string;
  NewColumnType: string;
}
/**
 * Type definition for AWS::QuickSight::DataSet.ColumnDescription
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-columndescription.html | AWS::QuickSight::DataSet.ColumnDescription}
 */
export interface QuickSightDataSetColumnDescription {
  Text?: string;
}
/**
 * Type definition for AWS::QuickSight::DataSet.ColumnGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-columngroup.html | AWS::QuickSight::DataSet.ColumnGroup}
 */
export interface QuickSightDataSetColumnGroup {
  GeoSpatialColumnGroup?: QuickSightDataSetGeoSpatialColumnGroup;
}
/**
 * Type definition for AWS::QuickSight::DataSet.ColumnLevelPermissionRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-columnlevelpermissionrule.html | AWS::QuickSight::DataSet.ColumnLevelPermissionRule}
 */
export interface QuickSightDataSetColumnLevelPermissionRule {
  ColumnNames?: any[];
  Principals?: any[];
}
/**
 * Type definition for AWS::QuickSight::DataSet.ColumnTag
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-columntag.html | AWS::QuickSight::DataSet.ColumnTag}
 */
export interface QuickSightDataSetColumnTag {
  ColumnGeographicRole?: string;
  ColumnDescription?: QuickSightDataSetColumnDescription;
}
/**
 * Type definition for AWS::QuickSight::DataSet.CreateColumnsOperation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-createcolumnsoperation.html | AWS::QuickSight::DataSet.CreateColumnsOperation}
 */
export interface QuickSightDataSetCreateColumnsOperation {
  Columns: any[];
}
/**
 * Type definition for AWS::QuickSight::DataSet.CustomSql
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-customsql.html | AWS::QuickSight::DataSet.CustomSql}
 */
export interface QuickSightDataSetCustomSql {
  DataSourceArn: string;
  SqlQuery: string;
  Columns: any[];
  Name: string;
}
/**
 * Type definition for AWS::QuickSight::DataSet.DataSetRefreshProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datasetrefreshproperties.html | AWS::QuickSight::DataSet.DataSetRefreshProperties}
 */
export interface QuickSightDataSetDataSetRefreshProperties {
  RefreshConfiguration?: QuickSightDataSetRefreshConfiguration;
}
/**
 * Type definition for AWS::QuickSight::DataSet.DataSetUsageConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datasetusageconfiguration.html | AWS::QuickSight::DataSet.DataSetUsageConfiguration}
 */
export interface QuickSightDataSetDataSetUsageConfiguration {
  DisableUseAsImportedSource?: boolean;
  DisableUseAsDirectQuerySource?: boolean;
}
/**
 * Type definition for AWS::QuickSight::DataSet.DatasetParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datasetparameter.html | AWS::QuickSight::DataSet.DatasetParameter}
 */
export interface QuickSightDataSetDatasetParameter {
  IntegerDatasetParameter?: QuickSightDataSetIntegerDatasetParameter;
  DateTimeDatasetParameter?: QuickSightDataSetDateTimeDatasetParameter;
  DecimalDatasetParameter?: QuickSightDataSetDecimalDatasetParameter;
  StringDatasetParameter?: QuickSightDataSetStringDatasetParameter;
}
/**
 * Type definition for AWS::QuickSight::DataSet.DateTimeDatasetParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datetimedatasetparameter.html | AWS::QuickSight::DataSet.DateTimeDatasetParameter}
 */
export interface QuickSightDataSetDateTimeDatasetParameter {
  ValueType: string;
  TimeGranularity?: string;
  DefaultValues?: QuickSightDataSetDateTimeDatasetParameterDefaultValues;
  Id: string;
  Name: string;
}
/**
 * Type definition for AWS::QuickSight::DataSet.DateTimeDatasetParameterDefaultValues
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datetimedatasetparameterdefaultvalues.html | AWS::QuickSight::DataSet.DateTimeDatasetParameterDefaultValues}
 */
export interface QuickSightDataSetDateTimeDatasetParameterDefaultValues {
  StaticValues?: any[];
}
/**
 * Type definition for AWS::QuickSight::DataSet.DecimalDatasetParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-decimaldatasetparameter.html | AWS::QuickSight::DataSet.DecimalDatasetParameter}
 */
export interface QuickSightDataSetDecimalDatasetParameter {
  ValueType: string;
  DefaultValues?: QuickSightDataSetDecimalDatasetParameterDefaultValues;
  Id: string;
  Name: string;
}
/**
 * Type definition for AWS::QuickSight::DataSet.DecimalDatasetParameterDefaultValues
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-decimaldatasetparameterdefaultvalues.html | AWS::QuickSight::DataSet.DecimalDatasetParameterDefaultValues}
 */
export interface QuickSightDataSetDecimalDatasetParameterDefaultValues {
  StaticValues?: any[];
}
/**
 * Type definition for AWS::QuickSight::DataSet.FieldFolder
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-fieldfolder.html | AWS::QuickSight::DataSet.FieldFolder}
 */
export interface QuickSightDataSetFieldFolder {
  Description?: string;
  Columns?: any[];
}
/**
 * Type definition for AWS::QuickSight::DataSet.FilterOperation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-filteroperation.html | AWS::QuickSight::DataSet.FilterOperation}
 */
export interface QuickSightDataSetFilterOperation {
  ConditionExpression: string;
}
/**
 * Type definition for AWS::QuickSight::DataSet.GeoSpatialColumnGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-geospatialcolumngroup.html | AWS::QuickSight::DataSet.GeoSpatialColumnGroup}
 */
export interface QuickSightDataSetGeoSpatialColumnGroup {
  Columns: any[];
  CountryCode?: string;
  Name: string;
}
/**
 * Type definition for AWS::QuickSight::DataSet.IncrementalRefresh
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-incrementalrefresh.html | AWS::QuickSight::DataSet.IncrementalRefresh}
 */
export interface QuickSightDataSetIncrementalRefresh {
  LookbackWindow?: QuickSightDataSetLookbackWindow;
}
/**
 * Type definition for AWS::QuickSight::DataSet.IngestionWaitPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-ingestionwaitpolicy.html | AWS::QuickSight::DataSet.IngestionWaitPolicy}
 */
export interface QuickSightDataSetIngestionWaitPolicy {
  WaitForSpiceIngestion?: boolean;
  IngestionWaitTimeInHours?: number;
}
/**
 * Type definition for AWS::QuickSight::DataSet.InputColumn
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-inputcolumn.html | AWS::QuickSight::DataSet.InputColumn}
 */
export interface QuickSightDataSetInputColumn {
  Type: string;
  Name: string;
}
/**
 * Type definition for AWS::QuickSight::DataSet.IntegerDatasetParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-integerdatasetparameter.html | AWS::QuickSight::DataSet.IntegerDatasetParameter}
 */
export interface QuickSightDataSetIntegerDatasetParameter {
  ValueType: string;
  DefaultValues?: QuickSightDataSetIntegerDatasetParameterDefaultValues;
  Id: string;
  Name: string;
}
/**
 * Type definition for AWS::QuickSight::DataSet.IntegerDatasetParameterDefaultValues
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-integerdatasetparameterdefaultvalues.html | AWS::QuickSight::DataSet.IntegerDatasetParameterDefaultValues}
 */
export interface QuickSightDataSetIntegerDatasetParameterDefaultValues {
  StaticValues?: any[];
}
/**
 * Type definition for AWS::QuickSight::DataSet.JoinInstruction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-joininstruction.html | AWS::QuickSight::DataSet.JoinInstruction}
 */
export interface QuickSightDataSetJoinInstruction {
  OnClause: string;
  Type: string;
  LeftJoinKeyProperties?: QuickSightDataSetJoinKeyProperties;
  LeftOperand: string;
  RightOperand: string;
  RightJoinKeyProperties?: QuickSightDataSetJoinKeyProperties;
}
/**
 * Type definition for AWS::QuickSight::DataSet.JoinKeyProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-joinkeyproperties.html | AWS::QuickSight::DataSet.JoinKeyProperties}
 */
export interface QuickSightDataSetJoinKeyProperties {
  UniqueKey?: boolean;
}
/**
 * Type definition for AWS::QuickSight::DataSet.LogicalTable
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-logicaltable.html | AWS::QuickSight::DataSet.LogicalTable}
 */
export interface QuickSightDataSetLogicalTable {
  Alias: string;
  DataTransforms?: any[];
  Source: QuickSightDataSetLogicalTableSource;
}
/**
 * Type definition for AWS::QuickSight::DataSet.LogicalTableSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-logicaltablesource.html | AWS::QuickSight::DataSet.LogicalTableSource}
 */
export interface QuickSightDataSetLogicalTableSource {
  PhysicalTableId?: string;
  JoinInstruction?: QuickSightDataSetJoinInstruction;
  DataSetArn?: string;
}
/**
 * Type definition for AWS::QuickSight::DataSet.LookbackWindow
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-lookbackwindow.html | AWS::QuickSight::DataSet.LookbackWindow}
 */
export interface QuickSightDataSetLookbackWindow {
  ColumnName?: string;
  SizeUnit?: string;
  Size?: number;
}
/**
 * Type definition for AWS::QuickSight::DataSet.NewDefaultValues
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-newdefaultvalues.html | AWS::QuickSight::DataSet.NewDefaultValues}
 */
export interface QuickSightDataSetNewDefaultValues {
  DecimalStaticValues?: any[];
  IntegerStaticValues?: any[];
  StringStaticValues?: any[];
  DateTimeStaticValues?: any[];
}
/**
 * Type definition for AWS::QuickSight::DataSet.OutputColumn
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-outputcolumn.html | AWS::QuickSight::DataSet.OutputColumn}
 */
export interface QuickSightDataSetOutputColumn {
  Type?: string;
  Description?: string;
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::DataSet.OverrideDatasetParameterOperation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-overridedatasetparameteroperation.html | AWS::QuickSight::DataSet.OverrideDatasetParameterOperation}
 */
export interface QuickSightDataSetOverrideDatasetParameterOperation {
  NewDefaultValues?: QuickSightDataSetNewDefaultValues;
  ParameterName: string;
  NewParameterName?: string;
}
/**
 * Type definition for AWS::QuickSight::DataSet.PhysicalTable
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-physicaltable.html | AWS::QuickSight::DataSet.PhysicalTable}
 */
export interface QuickSightDataSetPhysicalTable {
  RelationalTable?: QuickSightDataSetRelationalTable;
  CustomSql?: QuickSightDataSetCustomSql;
  S3Source?: QuickSightDataSetS3Source;
}
/**
 * Type definition for AWS::QuickSight::DataSet.ProjectOperation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-projectoperation.html | AWS::QuickSight::DataSet.ProjectOperation}
 */
export interface QuickSightDataSetProjectOperation {
  ProjectedColumns: any[];
}
/**
 * Type definition for AWS::QuickSight::DataSet.RefreshConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-refreshconfiguration.html | AWS::QuickSight::DataSet.RefreshConfiguration}
 */
export interface QuickSightDataSetRefreshConfiguration {
  IncrementalRefresh?: QuickSightDataSetIncrementalRefresh;
}
/**
 * Type definition for AWS::QuickSight::DataSet.RelationalTable
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-relationaltable.html | AWS::QuickSight::DataSet.RelationalTable}
 */
export interface QuickSightDataSetRelationalTable {
  DataSourceArn: string;
  InputColumns: any[];
  Schema?: string;
  Catalog?: string;
  Name: string;
}
/**
 * Type definition for AWS::QuickSight::DataSet.RenameColumnOperation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-renamecolumnoperation.html | AWS::QuickSight::DataSet.RenameColumnOperation}
 */
export interface QuickSightDataSetRenameColumnOperation {
  NewColumnName: string;
  ColumnName: string;
}
/**
 * Type definition for AWS::QuickSight::DataSet.ResourcePermission
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-resourcepermission.html | AWS::QuickSight::DataSet.ResourcePermission}
 */
export interface QuickSightDataSetResourcePermission {
  Actions: any[];
  Principal: string;
}
/**
 * Type definition for AWS::QuickSight::DataSet.RowLevelPermissionDataSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-rowlevelpermissiondataset.html | AWS::QuickSight::DataSet.RowLevelPermissionDataSet}
 */
export interface QuickSightDataSetRowLevelPermissionDataSet {
  Status?: string;
  FormatVersion?: string;
  Arn: string;
  Namespace?: string;
  PermissionPolicy: string;
}
/**
 * Type definition for AWS::QuickSight::DataSet.RowLevelPermissionTagConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-rowlevelpermissiontagconfiguration.html | AWS::QuickSight::DataSet.RowLevelPermissionTagConfiguration}
 */
export interface QuickSightDataSetRowLevelPermissionTagConfiguration {
  Status?: string;
  TagRules: any[];
  TagRuleConfigurations?: object;
}
/**
 * Type definition for AWS::QuickSight::DataSet.RowLevelPermissionTagRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-rowlevelpermissiontagrule.html | AWS::QuickSight::DataSet.RowLevelPermissionTagRule}
 */
export interface QuickSightDataSetRowLevelPermissionTagRule {
  ColumnName: string;
  TagKey: string;
  MatchAllValue?: string;
  TagMultiValueDelimiter?: string;
}
/**
 * Type definition for AWS::QuickSight::DataSet.S3Source
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-s3source.html | AWS::QuickSight::DataSet.S3Source}
 */
export interface QuickSightDataSetS3Source {
  DataSourceArn: string;
  InputColumns: any[];
  UploadSettings?: QuickSightDataSetUploadSettings;
}
/**
 * Type definition for AWS::QuickSight::DataSet.StringDatasetParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-stringdatasetparameter.html | AWS::QuickSight::DataSet.StringDatasetParameter}
 */
export interface QuickSightDataSetStringDatasetParameter {
  ValueType: string;
  DefaultValues?: QuickSightDataSetStringDatasetParameterDefaultValues;
  Id: string;
  Name: string;
}
/**
 * Type definition for AWS::QuickSight::DataSet.StringDatasetParameterDefaultValues
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-stringdatasetparameterdefaultvalues.html | AWS::QuickSight::DataSet.StringDatasetParameterDefaultValues}
 */
export interface QuickSightDataSetStringDatasetParameterDefaultValues {
  StaticValues?: any[];
}
/**
 * Type definition for AWS::QuickSight::DataSet.TagColumnOperation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-tagcolumnoperation.html | AWS::QuickSight::DataSet.TagColumnOperation}
 */
export interface QuickSightDataSetTagColumnOperation {
  ColumnName: string;
  Tags: Tag[];
}
/**
 * Type definition for AWS::QuickSight::DataSet.TransformOperation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-transformoperation.html | AWS::QuickSight::DataSet.TransformOperation}
 */
export interface QuickSightDataSetTransformOperation {
  TagColumnOperation?: QuickSightDataSetTagColumnOperation;
  OverrideDatasetParameterOperation?: QuickSightDataSetOverrideDatasetParameterOperation;
  FilterOperation?: QuickSightDataSetFilterOperation;
  CastColumnTypeOperation?: QuickSightDataSetCastColumnTypeOperation;
  CreateColumnsOperation?: QuickSightDataSetCreateColumnsOperation;
  RenameColumnOperation?: QuickSightDataSetRenameColumnOperation;
  ProjectOperation?: QuickSightDataSetProjectOperation;
}
/**
 * Type definition for AWS::QuickSight::DataSet.UploadSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-uploadsettings.html | AWS::QuickSight::DataSet.UploadSettings}
 */
export interface QuickSightDataSetUploadSettings {
  ContainsHeader?: boolean;
  TextQualifier?: string;
  Format?: string;
  StartFromRow?: number;
  Delimiter?: string;
}
/**
 * Type definition for AWS::QuickSight::DataSource.AmazonElasticsearchParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-amazonelasticsearchparameters.html | AWS::QuickSight::DataSource.AmazonElasticsearchParameters}
 */
export interface QuickSightDataSourceAmazonElasticsearchParameters {
  Domain: string;
}
/**
 * Type definition for AWS::QuickSight::DataSource.AmazonOpenSearchParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-amazonopensearchparameters.html | AWS::QuickSight::DataSource.AmazonOpenSearchParameters}
 */
export interface QuickSightDataSourceAmazonOpenSearchParameters {
  Domain: string;
}
/**
 * Type definition for AWS::QuickSight::DataSource.AthenaParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-athenaparameters.html | AWS::QuickSight::DataSource.AthenaParameters}
 */
export interface QuickSightDataSourceAthenaParameters {
  WorkGroup?: string;
  RoleArn?: string;
}
/**
 * Type definition for AWS::QuickSight::DataSource.AuroraParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-auroraparameters.html | AWS::QuickSight::DataSource.AuroraParameters}
 */
export interface QuickSightDataSourceAuroraParameters {
  Port: number;
  Database: string;
  Host: string;
}
/**
 * Type definition for AWS::QuickSight::DataSource.AuroraPostgreSqlParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-aurorapostgresqlparameters.html | AWS::QuickSight::DataSource.AuroraPostgreSqlParameters}
 */
export interface QuickSightDataSourceAuroraPostgreSqlParameters {
  Port: number;
  Database: string;
  Host: string;
}
/**
 * Type definition for AWS::QuickSight::DataSource.CredentialPair
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-credentialpair.html | AWS::QuickSight::DataSource.CredentialPair}
 */
export interface QuickSightDataSourceCredentialPair {
  AlternateDataSourceParameters?: any[];
  Username: string;
  Password: string;
}
/**
 * Type definition for AWS::QuickSight::DataSource.DataSourceCredentials
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-datasourcecredentials.html | AWS::QuickSight::DataSource.DataSourceCredentials}
 */
export interface QuickSightDataSourceDataSourceCredentials {
  SecretArn?: string;
  CopySourceArn?: string;
  CredentialPair?: QuickSightDataSourceCredentialPair;
}
/**
 * Type definition for AWS::QuickSight::DataSource.DataSourceErrorInfo
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-datasourceerrorinfo.html | AWS::QuickSight::DataSource.DataSourceErrorInfo}
 */
export interface QuickSightDataSourceDataSourceErrorInfo {
  Type?: string;
  Message?: string;
}
/**
 * Type definition for AWS::QuickSight::DataSource.DataSourceParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-datasourceparameters.html | AWS::QuickSight::DataSource.DataSourceParameters}
 */
export interface QuickSightDataSourceDataSourceParameters {
  AuroraPostgreSqlParameters?: QuickSightDataSourceAuroraPostgreSqlParameters;
  TeradataParameters?: QuickSightDataSourceTeradataParameters;
  RdsParameters?: QuickSightDataSourceRdsParameters;
  AthenaParameters?: QuickSightDataSourceAthenaParameters;
  SparkParameters?: QuickSightDataSourceSparkParameters;
  MariaDbParameters?: QuickSightDataSourceMariaDbParameters;
  OracleParameters?: QuickSightDataSourceOracleParameters;
  PrestoParameters?: QuickSightDataSourcePrestoParameters;
  RedshiftParameters?: QuickSightDataSourceRedshiftParameters;
  MySqlParameters?: QuickSightDataSourceMySqlParameters;
  SqlServerParameters?: QuickSightDataSourceSqlServerParameters;
  SnowflakeParameters?: QuickSightDataSourceSnowflakeParameters;
  AmazonElasticsearchParameters?: QuickSightDataSourceAmazonElasticsearchParameters;
  AmazonOpenSearchParameters?: QuickSightDataSourceAmazonOpenSearchParameters;
  PostgreSqlParameters?: QuickSightDataSourcePostgreSqlParameters;
  AuroraParameters?: QuickSightDataSourceAuroraParameters;
  S3Parameters?: QuickSightDataSourceS3Parameters;
  DatabricksParameters?: QuickSightDataSourceDatabricksParameters;
}
/**
 * Type definition for AWS::QuickSight::DataSource.DatabricksParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-databricksparameters.html | AWS::QuickSight::DataSource.DatabricksParameters}
 */
export interface QuickSightDataSourceDatabricksParameters {
  Port: number;
  Host: string;
  SqlEndpointPath: string;
}
/**
 * Type definition for AWS::QuickSight::DataSource.ManifestFileLocation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-manifestfilelocation.html | AWS::QuickSight::DataSource.ManifestFileLocation}
 */
export interface QuickSightDataSourceManifestFileLocation {
  Bucket: string;
  Key: string;
}
/**
 * Type definition for AWS::QuickSight::DataSource.MariaDbParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-mariadbparameters.html | AWS::QuickSight::DataSource.MariaDbParameters}
 */
export interface QuickSightDataSourceMariaDbParameters {
  Port: number;
  Database: string;
  Host: string;
}
/**
 * Type definition for AWS::QuickSight::DataSource.MySqlParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-mysqlparameters.html | AWS::QuickSight::DataSource.MySqlParameters}
 */
export interface QuickSightDataSourceMySqlParameters {
  Port: number;
  Database: string;
  Host: string;
}
/**
 * Type definition for AWS::QuickSight::DataSource.OracleParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-oracleparameters.html | AWS::QuickSight::DataSource.OracleParameters}
 */
export interface QuickSightDataSourceOracleParameters {
  Port: number;
  Database: string;
  Host: string;
}
/**
 * Type definition for AWS::QuickSight::DataSource.PostgreSqlParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-postgresqlparameters.html | AWS::QuickSight::DataSource.PostgreSqlParameters}
 */
export interface QuickSightDataSourcePostgreSqlParameters {
  Port: number;
  Database: string;
  Host: string;
}
/**
 * Type definition for AWS::QuickSight::DataSource.PrestoParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-prestoparameters.html | AWS::QuickSight::DataSource.PrestoParameters}
 */
export interface QuickSightDataSourcePrestoParameters {
  Port: number;
  Host: string;
  Catalog: string;
}
/**
 * Type definition for AWS::QuickSight::DataSource.RdsParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-rdsparameters.html | AWS::QuickSight::DataSource.RdsParameters}
 */
export interface QuickSightDataSourceRdsParameters {
  InstanceId: string;
  Database: string;
}
/**
 * Type definition for AWS::QuickSight::DataSource.RedshiftParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-redshiftparameters.html | AWS::QuickSight::DataSource.RedshiftParameters}
 */
export interface QuickSightDataSourceRedshiftParameters {
  ClusterId?: string;
  Port?: number;
  Database: string;
  Host?: string;
}
/**
 * Type definition for AWS::QuickSight::DataSource.ResourcePermission
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-resourcepermission.html | AWS::QuickSight::DataSource.ResourcePermission}
 */
export interface QuickSightDataSourceResourcePermission {
  Actions: any[];
  Principal: string;
}
/**
 * Type definition for AWS::QuickSight::DataSource.S3Parameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-s3parameters.html | AWS::QuickSight::DataSource.S3Parameters}
 */
export interface QuickSightDataSourceS3Parameters {
  ManifestFileLocation: QuickSightDataSourceManifestFileLocation;
  RoleArn?: string;
}
/**
 * Type definition for AWS::QuickSight::DataSource.SnowflakeParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-snowflakeparameters.html | AWS::QuickSight::DataSource.SnowflakeParameters}
 */
export interface QuickSightDataSourceSnowflakeParameters {
  Warehouse: string;
  Database: string;
  Host: string;
}
/**
 * Type definition for AWS::QuickSight::DataSource.SparkParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-sparkparameters.html | AWS::QuickSight::DataSource.SparkParameters}
 */
export interface QuickSightDataSourceSparkParameters {
  Port: number;
  Host: string;
}
/**
 * Type definition for AWS::QuickSight::DataSource.SqlServerParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-sqlserverparameters.html | AWS::QuickSight::DataSource.SqlServerParameters}
 */
export interface QuickSightDataSourceSqlServerParameters {
  Port: number;
  Database: string;
  Host: string;
}
/**
 * Type definition for AWS::QuickSight::DataSource.SslProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-sslproperties.html | AWS::QuickSight::DataSource.SslProperties}
 */
export interface QuickSightDataSourceSslProperties {
  DisableSsl?: boolean;
}
/**
 * Type definition for AWS::QuickSight::DataSource.TeradataParameters
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-teradataparameters.html | AWS::QuickSight::DataSource.TeradataParameters}
 */
export interface QuickSightDataSourceTeradataParameters {
  Port: number;
  Database: string;
  Host: string;
}
/**
 * Type definition for AWS::QuickSight::DataSource.VpcConnectionProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-vpcconnectionproperties.html | AWS::QuickSight::DataSource.VpcConnectionProperties}
 */
export interface QuickSightDataSourceVpcConnectionProperties {
  VpcConnectionArn: string;
}
/**
 * Type definition for AWS::QuickSight::RefreshSchedule.RefreshOnDay
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-refreshschedule-refreshonday.html | AWS::QuickSight::RefreshSchedule.RefreshOnDay}
 */
export interface QuickSightRefreshScheduleRefreshOnDay {
  DayOfWeek?: string;
  DayOfMonth?: string;
}
/**
 * Type definition for AWS::QuickSight::RefreshSchedule.RefreshScheduleMap
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-refreshschedule-refreshschedulemap.html | AWS::QuickSight::RefreshSchedule.RefreshScheduleMap}
 */
export interface QuickSightRefreshScheduleRefreshScheduleMap {
  StartAfterDateTime?: string;
  ScheduleId?: string;
  ScheduleFrequency?: QuickSightRefreshScheduleScheduleFrequency;
  RefreshType?: string;
}
/**
 * Type definition for AWS::QuickSight::RefreshSchedule.ScheduleFrequency
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-refreshschedule-schedulefrequency.html | AWS::QuickSight::RefreshSchedule.ScheduleFrequency}
 */
export interface QuickSightRefreshScheduleScheduleFrequency {
  TimeZone?: string;
  RefreshOnDay?: QuickSightRefreshScheduleRefreshOnDay;
  TimeOfTheDay?: string;
  Interval?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.AggregationFunction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-aggregationfunction.html | AWS::QuickSight::Template.AggregationFunction}
 */
export interface QuickSightTemplateAggregationFunction {
  AttributeAggregationFunction?: QuickSightTemplateAttributeAggregationFunction;
  DateAggregationFunction?: string;
  NumericalAggregationFunction?: QuickSightTemplateNumericalAggregationFunction;
  CategoricalAggregationFunction?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.AggregationSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-aggregationsortconfiguration.html | AWS::QuickSight::Template.AggregationSortConfiguration}
 */
export interface QuickSightTemplateAggregationSortConfiguration {
  AggregationFunction?: QuickSightTemplateAggregationFunction;
  SortDirection: string;
  Column: QuickSightTemplateColumnIdentifier;
}
/**
 * Type definition for AWS::QuickSight::Template.AnalysisDefaults
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-analysisdefaults.html | AWS::QuickSight::Template.AnalysisDefaults}
 */
export interface QuickSightTemplateAnalysisDefaults {
  DefaultNewSheetConfiguration: QuickSightTemplateDefaultNewSheetConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.AnchorDateConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-anchordateconfiguration.html | AWS::QuickSight::Template.AnchorDateConfiguration}
 */
export interface QuickSightTemplateAnchorDateConfiguration {
  AnchorOption?: string;
  ParameterName?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.ArcAxisConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-arcaxisconfiguration.html | AWS::QuickSight::Template.ArcAxisConfiguration}
 */
export interface QuickSightTemplateArcAxisConfiguration {
  Range?: QuickSightTemplateArcAxisDisplayRange;
  ReserveRange?: number;
}
/**
 * Type definition for AWS::QuickSight::Template.ArcAxisDisplayRange
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-arcaxisdisplayrange.html | AWS::QuickSight::Template.ArcAxisDisplayRange}
 */
export interface QuickSightTemplateArcAxisDisplayRange {
  Min?: number;
  Max?: number;
}
/**
 * Type definition for AWS::QuickSight::Template.ArcConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-arcconfiguration.html | AWS::QuickSight::Template.ArcConfiguration}
 */
export interface QuickSightTemplateArcConfiguration {
  ArcAngle?: number;
  ArcThickness?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.ArcOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-arcoptions.html | AWS::QuickSight::Template.ArcOptions}
 */
export interface QuickSightTemplateArcOptions {
  ArcThickness?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.AttributeAggregationFunction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-attributeaggregationfunction.html | AWS::QuickSight::Template.AttributeAggregationFunction}
 */
export interface QuickSightTemplateAttributeAggregationFunction {
  SimpleAttributeAggregation?: string;
  ValueForMultipleValues?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.AxisDataOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-axisdataoptions.html | AWS::QuickSight::Template.AxisDataOptions}
 */
export interface QuickSightTemplateAxisDataOptions {
  DateAxisOptions?: QuickSightTemplateDateAxisOptions;
  NumericAxisOptions?: QuickSightTemplateNumericAxisOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.AxisDisplayMinMaxRange
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-axisdisplayminmaxrange.html | AWS::QuickSight::Template.AxisDisplayMinMaxRange}
 */
export interface QuickSightTemplateAxisDisplayMinMaxRange {
  Minimum?: number;
  Maximum?: number;
}
/**
 * Type definition for AWS::QuickSight::Template.AxisDisplayOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-axisdisplayoptions.html | AWS::QuickSight::Template.AxisDisplayOptions}
 */
export interface QuickSightTemplateAxisDisplayOptions {
  DataOptions?: QuickSightTemplateAxisDataOptions;
  TickLabelOptions?: QuickSightTemplateAxisTickLabelOptions;
  AxisOffset?: string;
  AxisLineVisibility?: string;
  GridLineVisibility?: string;
  ScrollbarOptions?: QuickSightTemplateScrollBarOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.AxisDisplayRange
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-axisdisplayrange.html | AWS::QuickSight::Template.AxisDisplayRange}
 */
export interface QuickSightTemplateAxisDisplayRange {
  DataDriven?: object;
  MinMax?: QuickSightTemplateAxisDisplayMinMaxRange;
}
/**
 * Type definition for AWS::QuickSight::Template.AxisLabelOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-axislabeloptions.html | AWS::QuickSight::Template.AxisLabelOptions}
 */
export interface QuickSightTemplateAxisLabelOptions {
  CustomLabel?: string;
  ApplyTo?: QuickSightTemplateAxisLabelReferenceOptions;
  FontConfiguration?: QuickSightTemplateFontConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.AxisLabelReferenceOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-axislabelreferenceoptions.html | AWS::QuickSight::Template.AxisLabelReferenceOptions}
 */
export interface QuickSightTemplateAxisLabelReferenceOptions {
  Column: QuickSightTemplateColumnIdentifier;
  FieldId: string;
}
/**
 * Type definition for AWS::QuickSight::Template.AxisLinearScale
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-axislinearscale.html | AWS::QuickSight::Template.AxisLinearScale}
 */
export interface QuickSightTemplateAxisLinearScale {
  StepSize?: number;
  StepCount?: number;
}
/**
 * Type definition for AWS::QuickSight::Template.AxisLogarithmicScale
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-axislogarithmicscale.html | AWS::QuickSight::Template.AxisLogarithmicScale}
 */
export interface QuickSightTemplateAxisLogarithmicScale {
  Base?: number;
}
/**
 * Type definition for AWS::QuickSight::Template.AxisScale
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-axisscale.html | AWS::QuickSight::Template.AxisScale}
 */
export interface QuickSightTemplateAxisScale {
  Logarithmic?: QuickSightTemplateAxisLogarithmicScale;
  Linear?: QuickSightTemplateAxisLinearScale;
}
/**
 * Type definition for AWS::QuickSight::Template.AxisTickLabelOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-axisticklabeloptions.html | AWS::QuickSight::Template.AxisTickLabelOptions}
 */
export interface QuickSightTemplateAxisTickLabelOptions {
  RotationAngle?: number;
  LabelOptions?: QuickSightTemplateLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.BarChartAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-barchartaggregatedfieldwells.html | AWS::QuickSight::Template.BarChartAggregatedFieldWells}
 */
export interface QuickSightTemplateBarChartAggregatedFieldWells {
  Category?: any[];
  Colors?: any[];
  Values?: any[];
  SmallMultiples?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.BarChartConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-barchartconfiguration.html | AWS::QuickSight::Template.BarChartConfiguration}
 */
export interface QuickSightTemplateBarChartConfiguration {
  SortConfiguration?: QuickSightTemplateBarChartSortConfiguration;
  Legend?: QuickSightTemplateLegendOptions;
  ReferenceLines?: any[];
  DataLabels?: QuickSightTemplateDataLabelOptions;
  ColorLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  CategoryLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  Tooltip?: QuickSightTemplateTooltipOptions;
  SmallMultiplesOptions?: QuickSightTemplateSmallMultiplesOptions;
  Orientation?: string;
  VisualPalette?: QuickSightTemplateVisualPalette;
  ValueLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  BarsArrangement?: string;
  CategoryAxis?: QuickSightTemplateAxisDisplayOptions;
  ContributionAnalysisDefaults?: any[];
  FieldWells?: QuickSightTemplateBarChartFieldWells;
  ValueAxis?: QuickSightTemplateAxisDisplayOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.BarChartFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-barchartfieldwells.html | AWS::QuickSight::Template.BarChartFieldWells}
 */
export interface QuickSightTemplateBarChartFieldWells {
  BarChartAggregatedFieldWells?: QuickSightTemplateBarChartAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Template.BarChartSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-barchartsortconfiguration.html | AWS::QuickSight::Template.BarChartSortConfiguration}
 */
export interface QuickSightTemplateBarChartSortConfiguration {
  SmallMultiplesSort?: any[];
  ColorSort?: any[];
  ColorItemsLimit?: QuickSightTemplateItemsLimitConfiguration;
  CategoryItemsLimit?: QuickSightTemplateItemsLimitConfiguration;
  CategorySort?: any[];
  SmallMultiplesLimitConfiguration?: QuickSightTemplateItemsLimitConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.BarChartVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-barchartvisual.html | AWS::QuickSight::Template.BarChartVisual}
 */
export interface QuickSightTemplateBarChartVisual {
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightTemplateBarChartConfiguration;
  Actions?: any[];
  Title?: QuickSightTemplateVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.BinCountOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-bincountoptions.html | AWS::QuickSight::Template.BinCountOptions}
 */
export interface QuickSightTemplateBinCountOptions {
  Value?: number;
}
/**
 * Type definition for AWS::QuickSight::Template.BinWidthOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-binwidthoptions.html | AWS::QuickSight::Template.BinWidthOptions}
 */
export interface QuickSightTemplateBinWidthOptions {
  BinCountLimit?: number;
  Value?: number;
}
/**
 * Type definition for AWS::QuickSight::Template.BodySectionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-bodysectionconfiguration.html | AWS::QuickSight::Template.BodySectionConfiguration}
 */
export interface QuickSightTemplateBodySectionConfiguration {
  Content: QuickSightTemplateBodySectionContent;
  Style?: QuickSightTemplateSectionStyle;
  PageBreakConfiguration?: QuickSightTemplateSectionPageBreakConfiguration;
  SectionId: string;
}
/**
 * Type definition for AWS::QuickSight::Template.BodySectionContent
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-bodysectioncontent.html | AWS::QuickSight::Template.BodySectionContent}
 */
export interface QuickSightTemplateBodySectionContent {
  Layout?: QuickSightTemplateSectionLayoutConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.BoxPlotAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-boxplotaggregatedfieldwells.html | AWS::QuickSight::Template.BoxPlotAggregatedFieldWells}
 */
export interface QuickSightTemplateBoxPlotAggregatedFieldWells {
  GroupBy?: any[];
  Values?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.BoxPlotChartConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-boxplotchartconfiguration.html | AWS::QuickSight::Template.BoxPlotChartConfiguration}
 */
export interface QuickSightTemplateBoxPlotChartConfiguration {
  SortConfiguration?: QuickSightTemplateBoxPlotSortConfiguration;
  Legend?: QuickSightTemplateLegendOptions;
  ReferenceLines?: any[];
  CategoryAxis?: QuickSightTemplateAxisDisplayOptions;
  PrimaryYAxisLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  CategoryLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  FieldWells?: QuickSightTemplateBoxPlotFieldWells;
  Tooltip?: QuickSightTemplateTooltipOptions;
  BoxPlotOptions?: QuickSightTemplateBoxPlotOptions;
  PrimaryYAxisDisplayOptions?: QuickSightTemplateAxisDisplayOptions;
  VisualPalette?: QuickSightTemplateVisualPalette;
}
/**
 * Type definition for AWS::QuickSight::Template.BoxPlotFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-boxplotfieldwells.html | AWS::QuickSight::Template.BoxPlotFieldWells}
 */
export interface QuickSightTemplateBoxPlotFieldWells {
  BoxPlotAggregatedFieldWells?: QuickSightTemplateBoxPlotAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Template.BoxPlotOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-boxplotoptions.html | AWS::QuickSight::Template.BoxPlotOptions}
 */
export interface QuickSightTemplateBoxPlotOptions {
  StyleOptions?: QuickSightTemplateBoxPlotStyleOptions;
  OutlierVisibility?: string;
  AllDataPointsVisibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.BoxPlotSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-boxplotsortconfiguration.html | AWS::QuickSight::Template.BoxPlotSortConfiguration}
 */
export interface QuickSightTemplateBoxPlotSortConfiguration {
  CategorySort?: any[];
  PaginationConfiguration?: QuickSightTemplatePaginationConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.BoxPlotStyleOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-boxplotstyleoptions.html | AWS::QuickSight::Template.BoxPlotStyleOptions}
 */
export interface QuickSightTemplateBoxPlotStyleOptions {
  FillStyle?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.BoxPlotVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-boxplotvisual.html | AWS::QuickSight::Template.BoxPlotVisual}
 */
export interface QuickSightTemplateBoxPlotVisual {
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightTemplateBoxPlotChartConfiguration;
  Actions?: any[];
  Title?: QuickSightTemplateVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.CalculatedField
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-calculatedfield.html | AWS::QuickSight::Template.CalculatedField}
 */
export interface QuickSightTemplateCalculatedField {
  Expression: string;
  DataSetIdentifier: string;
  Name: string;
}
/**
 * Type definition for AWS::QuickSight::Template.CalculatedMeasureField
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-calculatedmeasurefield.html | AWS::QuickSight::Template.CalculatedMeasureField}
 */
export interface QuickSightTemplateCalculatedMeasureField {
  Expression: string;
  FieldId: string;
}
/**
 * Type definition for AWS::QuickSight::Template.CascadingControlConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-cascadingcontrolconfiguration.html | AWS::QuickSight::Template.CascadingControlConfiguration}
 */
export interface QuickSightTemplateCascadingControlConfiguration {
  SourceControls?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.CascadingControlSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-cascadingcontrolsource.html | AWS::QuickSight::Template.CascadingControlSource}
 */
export interface QuickSightTemplateCascadingControlSource {
  SourceSheetControlId?: string;
  ColumnToMatch?: QuickSightTemplateColumnIdentifier;
}
/**
 * Type definition for AWS::QuickSight::Template.CategoricalDimensionField
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-categoricaldimensionfield.html | AWS::QuickSight::Template.CategoricalDimensionField}
 */
export interface QuickSightTemplateCategoricalDimensionField {
  HierarchyId?: string;
  FormatConfiguration?: QuickSightTemplateStringFormatConfiguration;
  Column: QuickSightTemplateColumnIdentifier;
  FieldId: string;
}
/**
 * Type definition for AWS::QuickSight::Template.CategoricalMeasureField
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-categoricalmeasurefield.html | AWS::QuickSight::Template.CategoricalMeasureField}
 */
export interface QuickSightTemplateCategoricalMeasureField {
  AggregationFunction?: string;
  FormatConfiguration?: QuickSightTemplateStringFormatConfiguration;
  Column: QuickSightTemplateColumnIdentifier;
  FieldId: string;
}
/**
 * Type definition for AWS::QuickSight::Template.CategoryDrillDownFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-categorydrilldownfilter.html | AWS::QuickSight::Template.CategoryDrillDownFilter}
 */
export interface QuickSightTemplateCategoryDrillDownFilter {
  Column: QuickSightTemplateColumnIdentifier;
  CategoryValues: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.CategoryFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-categoryfilter.html | AWS::QuickSight::Template.CategoryFilter}
 */
export interface QuickSightTemplateCategoryFilter {
  Configuration: QuickSightTemplateCategoryFilterConfiguration;
  Column: QuickSightTemplateColumnIdentifier;
  FilterId: string;
}
/**
 * Type definition for AWS::QuickSight::Template.CategoryFilterConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-categoryfilterconfiguration.html | AWS::QuickSight::Template.CategoryFilterConfiguration}
 */
export interface QuickSightTemplateCategoryFilterConfiguration {
  CustomFilterListConfiguration?: QuickSightTemplateCustomFilterListConfiguration;
  CustomFilterConfiguration?: QuickSightTemplateCustomFilterConfiguration;
  FilterListConfiguration?: QuickSightTemplateFilterListConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.ChartAxisLabelOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-chartaxislabeloptions.html | AWS::QuickSight::Template.ChartAxisLabelOptions}
 */
export interface QuickSightTemplateChartAxisLabelOptions {
  Visibility?: string;
  SortIconVisibility?: string;
  AxisLabelOptions?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.ClusterMarker
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-clustermarker.html | AWS::QuickSight::Template.ClusterMarker}
 */
export interface QuickSightTemplateClusterMarker {
  SimpleClusterMarker?: QuickSightTemplateSimpleClusterMarker;
}
/**
 * Type definition for AWS::QuickSight::Template.ClusterMarkerConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-clustermarkerconfiguration.html | AWS::QuickSight::Template.ClusterMarkerConfiguration}
 */
export interface QuickSightTemplateClusterMarkerConfiguration {
  ClusterMarker?: QuickSightTemplateClusterMarker;
}
/**
 * Type definition for AWS::QuickSight::Template.ColorScale
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-colorscale.html | AWS::QuickSight::Template.ColorScale}
 */
export interface QuickSightTemplateColorScale {
  Colors: any[];
  ColorFillType: string;
  NullValueColor?: QuickSightTemplateDataColor;
}
/**
 * Type definition for AWS::QuickSight::Template.ColorsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-colorsconfiguration.html | AWS::QuickSight::Template.ColorsConfiguration}
 */
export interface QuickSightTemplateColorsConfiguration {
  CustomColors?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.ColumnConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-columnconfiguration.html | AWS::QuickSight::Template.ColumnConfiguration}
 */
export interface QuickSightTemplateColumnConfiguration {
  Role?: string;
  FormatConfiguration?: QuickSightTemplateFormatConfiguration;
  Column: QuickSightTemplateColumnIdentifier;
  ColorsConfiguration?: QuickSightTemplateColorsConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.ColumnGroupColumnSchema
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-columngroupcolumnschema.html | AWS::QuickSight::Template.ColumnGroupColumnSchema}
 */
export interface QuickSightTemplateColumnGroupColumnSchema {
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.ColumnGroupSchema
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-columngroupschema.html | AWS::QuickSight::Template.ColumnGroupSchema}
 */
export interface QuickSightTemplateColumnGroupSchema {
  ColumnGroupColumnSchemaList?: any[];
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.ColumnHierarchy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-columnhierarchy.html | AWS::QuickSight::Template.ColumnHierarchy}
 */
export interface QuickSightTemplateColumnHierarchy {
  DateTimeHierarchy?: QuickSightTemplateDateTimeHierarchy;
  ExplicitHierarchy?: QuickSightTemplateExplicitHierarchy;
  PredefinedHierarchy?: QuickSightTemplatePredefinedHierarchy;
}
/**
 * Type definition for AWS::QuickSight::Template.ColumnIdentifier
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-columnidentifier.html | AWS::QuickSight::Template.ColumnIdentifier}
 */
export interface QuickSightTemplateColumnIdentifier {
  ColumnName: string;
  DataSetIdentifier: string;
}
/**
 * Type definition for AWS::QuickSight::Template.ColumnSchema
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-columnschema.html | AWS::QuickSight::Template.ColumnSchema}
 */
export interface QuickSightTemplateColumnSchema {
  DataType?: string;
  GeographicRole?: string;
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.ColumnSort
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-columnsort.html | AWS::QuickSight::Template.ColumnSort}
 */
export interface QuickSightTemplateColumnSort {
  AggregationFunction?: QuickSightTemplateAggregationFunction;
  SortBy: QuickSightTemplateColumnIdentifier;
  Direction: string;
}
/**
 * Type definition for AWS::QuickSight::Template.ColumnTooltipItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-columntooltipitem.html | AWS::QuickSight::Template.ColumnTooltipItem}
 */
export interface QuickSightTemplateColumnTooltipItem {
  Aggregation?: QuickSightTemplateAggregationFunction;
  Column: QuickSightTemplateColumnIdentifier;
  Label?: string;
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.ComboChartAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-combochartaggregatedfieldwells.html | AWS::QuickSight::Template.ComboChartAggregatedFieldWells}
 */
export interface QuickSightTemplateComboChartAggregatedFieldWells {
  BarValues?: any[];
  Category?: any[];
  Colors?: any[];
  LineValues?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.ComboChartConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-combochartconfiguration.html | AWS::QuickSight::Template.ComboChartConfiguration}
 */
export interface QuickSightTemplateComboChartConfiguration {
  SortConfiguration?: QuickSightTemplateComboChartSortConfiguration;
  Legend?: QuickSightTemplateLegendOptions;
  ReferenceLines?: any[];
  ColorLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  BarDataLabels?: QuickSightTemplateDataLabelOptions;
  CategoryLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  Tooltip?: QuickSightTemplateTooltipOptions;
  PrimaryYAxisDisplayOptions?: QuickSightTemplateAxisDisplayOptions;
  VisualPalette?: QuickSightTemplateVisualPalette;
  BarsArrangement?: string;
  SecondaryYAxisLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  LineDataLabels?: QuickSightTemplateDataLabelOptions;
  CategoryAxis?: QuickSightTemplateAxisDisplayOptions;
  PrimaryYAxisLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  FieldWells?: QuickSightTemplateComboChartFieldWells;
  SecondaryYAxisDisplayOptions?: QuickSightTemplateAxisDisplayOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.ComboChartFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-combochartfieldwells.html | AWS::QuickSight::Template.ComboChartFieldWells}
 */
export interface QuickSightTemplateComboChartFieldWells {
  ComboChartAggregatedFieldWells?: QuickSightTemplateComboChartAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Template.ComboChartSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-combochartsortconfiguration.html | AWS::QuickSight::Template.ComboChartSortConfiguration}
 */
export interface QuickSightTemplateComboChartSortConfiguration {
  ColorSort?: any[];
  ColorItemsLimit?: QuickSightTemplateItemsLimitConfiguration;
  CategoryItemsLimit?: QuickSightTemplateItemsLimitConfiguration;
  CategorySort?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.ComboChartVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-combochartvisual.html | AWS::QuickSight::Template.ComboChartVisual}
 */
export interface QuickSightTemplateComboChartVisual {
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightTemplateComboChartConfiguration;
  Actions?: any[];
  Title?: QuickSightTemplateVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.ComparisonConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-comparisonconfiguration.html | AWS::QuickSight::Template.ComparisonConfiguration}
 */
export interface QuickSightTemplateComparisonConfiguration {
  ComparisonMethod?: string;
  ComparisonFormat?: QuickSightTemplateComparisonFormatConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.ComparisonFormatConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-comparisonformatconfiguration.html | AWS::QuickSight::Template.ComparisonFormatConfiguration}
 */
export interface QuickSightTemplateComparisonFormatConfiguration {
  NumberDisplayFormatConfiguration?: QuickSightTemplateNumberDisplayFormatConfiguration;
  PercentageDisplayFormatConfiguration?: QuickSightTemplatePercentageDisplayFormatConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.Computation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-computation.html | AWS::QuickSight::Template.Computation}
 */
export interface QuickSightTemplateComputation {
  PeriodToDate?: QuickSightTemplatePeriodToDateComputation;
  GrowthRate?: QuickSightTemplateGrowthRateComputation;
  TopBottomRanked?: QuickSightTemplateTopBottomRankedComputation;
  TotalAggregation?: QuickSightTemplateTotalAggregationComputation;
  Forecast?: QuickSightTemplateForecastComputation;
  MaximumMinimum?: QuickSightTemplateMaximumMinimumComputation;
  PeriodOverPeriod?: QuickSightTemplatePeriodOverPeriodComputation;
  MetricComparison?: QuickSightTemplateMetricComparisonComputation;
  TopBottomMovers?: QuickSightTemplateTopBottomMoversComputation;
  UniqueValues?: QuickSightTemplateUniqueValuesComputation;
}
/**
 * Type definition for AWS::QuickSight::Template.ConditionalFormattingColor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-conditionalformattingcolor.html | AWS::QuickSight::Template.ConditionalFormattingColor}
 */
export interface QuickSightTemplateConditionalFormattingColor {
  Gradient?: QuickSightTemplateConditionalFormattingGradientColor;
  Solid?: QuickSightTemplateConditionalFormattingSolidColor;
}
/**
 * Type definition for AWS::QuickSight::Template.ConditionalFormattingCustomIconCondition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-conditionalformattingcustomiconcondition.html | AWS::QuickSight::Template.ConditionalFormattingCustomIconCondition}
 */
export interface QuickSightTemplateConditionalFormattingCustomIconCondition {
  Expression: string;
  Color?: string;
  DisplayConfiguration?: QuickSightTemplateConditionalFormattingIconDisplayConfiguration;
  IconOptions: QuickSightTemplateConditionalFormattingCustomIconOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.ConditionalFormattingCustomIconOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-conditionalformattingcustomiconoptions.html | AWS::QuickSight::Template.ConditionalFormattingCustomIconOptions}
 */
export interface QuickSightTemplateConditionalFormattingCustomIconOptions {
  UnicodeIcon?: string;
  Icon?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.ConditionalFormattingGradientColor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-conditionalformattinggradientcolor.html | AWS::QuickSight::Template.ConditionalFormattingGradientColor}
 */
export interface QuickSightTemplateConditionalFormattingGradientColor {
  Expression: string;
  Color: QuickSightTemplateGradientColor;
}
/**
 * Type definition for AWS::QuickSight::Template.ConditionalFormattingIcon
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-conditionalformattingicon.html | AWS::QuickSight::Template.ConditionalFormattingIcon}
 */
export interface QuickSightTemplateConditionalFormattingIcon {
  CustomCondition?: QuickSightTemplateConditionalFormattingCustomIconCondition;
  IconSet?: QuickSightTemplateConditionalFormattingIconSet;
}
/**
 * Type definition for AWS::QuickSight::Template.ConditionalFormattingIconDisplayConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-conditionalformattingicondisplayconfiguration.html | AWS::QuickSight::Template.ConditionalFormattingIconDisplayConfiguration}
 */
export interface QuickSightTemplateConditionalFormattingIconDisplayConfiguration {
  IconDisplayOption?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.ConditionalFormattingIconSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-conditionalformattingiconset.html | AWS::QuickSight::Template.ConditionalFormattingIconSet}
 */
export interface QuickSightTemplateConditionalFormattingIconSet {
  Expression: string;
  IconSetType?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.ConditionalFormattingSolidColor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-conditionalformattingsolidcolor.html | AWS::QuickSight::Template.ConditionalFormattingSolidColor}
 */
export interface QuickSightTemplateConditionalFormattingSolidColor {
  Expression: string;
  Color?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.ContributionAnalysisDefault
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-contributionanalysisdefault.html | AWS::QuickSight::Template.ContributionAnalysisDefault}
 */
export interface QuickSightTemplateContributionAnalysisDefault {
  MeasureFieldId: string;
  ContributorDimensions: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.CurrencyDisplayFormatConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-currencydisplayformatconfiguration.html | AWS::QuickSight::Template.CurrencyDisplayFormatConfiguration}
 */
export interface QuickSightTemplateCurrencyDisplayFormatConfiguration {
  NegativeValueConfiguration?: QuickSightTemplateNegativeValueConfiguration;
  DecimalPlacesConfiguration?: QuickSightTemplateDecimalPlacesConfiguration;
  NumberScale?: string;
  NullValueFormatConfiguration?: QuickSightTemplateNullValueFormatConfiguration;
  Suffix?: string;
  SeparatorConfiguration?: QuickSightTemplateNumericSeparatorConfiguration;
  Symbol?: string;
  Prefix?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.CustomActionFilterOperation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customactionfilteroperation.html | AWS::QuickSight::Template.CustomActionFilterOperation}
 */
export interface QuickSightTemplateCustomActionFilterOperation {
  SelectedFieldsConfiguration: QuickSightTemplateFilterOperationSelectedFieldsConfiguration;
  TargetVisualsConfiguration: QuickSightTemplateFilterOperationTargetVisualsConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.CustomActionNavigationOperation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customactionnavigationoperation.html | AWS::QuickSight::Template.CustomActionNavigationOperation}
 */
export interface QuickSightTemplateCustomActionNavigationOperation {
  LocalNavigationConfiguration?: QuickSightTemplateLocalNavigationConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.CustomActionSetParametersOperation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customactionsetparametersoperation.html | AWS::QuickSight::Template.CustomActionSetParametersOperation}
 */
export interface QuickSightTemplateCustomActionSetParametersOperation {
  ParameterValueConfigurations: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.CustomActionURLOperation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customactionurloperation.html | AWS::QuickSight::Template.CustomActionURLOperation}
 */
export interface QuickSightTemplateCustomActionURLOperation {
  URLTemplate: string;
  URLTarget: string;
}
/**
 * Type definition for AWS::QuickSight::Template.CustomColor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customcolor.html | AWS::QuickSight::Template.CustomColor}
 */
export interface QuickSightTemplateCustomColor {
  Color: string;
  FieldValue?: string;
  SpecialValue?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.CustomContentConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customcontentconfiguration.html | AWS::QuickSight::Template.CustomContentConfiguration}
 */
export interface QuickSightTemplateCustomContentConfiguration {
  ContentUrl?: string;
  ContentType?: string;
  ImageScaling?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.CustomContentVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customcontentvisual.html | AWS::QuickSight::Template.CustomContentVisual}
 */
export interface QuickSightTemplateCustomContentVisual {
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightTemplateCustomContentConfiguration;
  Actions?: any[];
  DataSetIdentifier: string;
  Title?: QuickSightTemplateVisualTitleLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.CustomFilterConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customfilterconfiguration.html | AWS::QuickSight::Template.CustomFilterConfiguration}
 */
export interface QuickSightTemplateCustomFilterConfiguration {
  CategoryValue?: string;
  ParameterName?: string;
  NullOption: string;
  MatchOperator: string;
  SelectAllOptions?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.CustomFilterListConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customfilterlistconfiguration.html | AWS::QuickSight::Template.CustomFilterListConfiguration}
 */
export interface QuickSightTemplateCustomFilterListConfiguration {
  CategoryValues?: any[];
  NullOption: string;
  MatchOperator: string;
  SelectAllOptions?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.CustomNarrativeOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customnarrativeoptions.html | AWS::QuickSight::Template.CustomNarrativeOptions}
 */
export interface QuickSightTemplateCustomNarrativeOptions {
  Narrative: string;
}
/**
 * Type definition for AWS::QuickSight::Template.CustomParameterValues
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customparametervalues.html | AWS::QuickSight::Template.CustomParameterValues}
 */
export interface QuickSightTemplateCustomParameterValues {
  DecimalValues?: any[];
  IntegerValues?: any[];
  StringValues?: any[];
  DateTimeValues?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.CustomValuesConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customvaluesconfiguration.html | AWS::QuickSight::Template.CustomValuesConfiguration}
 */
export interface QuickSightTemplateCustomValuesConfiguration {
  IncludeNullValue?: boolean;
  CustomValues: QuickSightTemplateCustomParameterValues;
}
/**
 * Type definition for AWS::QuickSight::Template.DataBarsOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-databarsoptions.html | AWS::QuickSight::Template.DataBarsOptions}
 */
export interface QuickSightTemplateDataBarsOptions {
  PositiveColor?: string;
  FieldId: string;
  NegativeColor?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.DataColor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datacolor.html | AWS::QuickSight::Template.DataColor}
 */
export interface QuickSightTemplateDataColor {
  DataValue?: number;
  Color?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.DataFieldSeriesItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datafieldseriesitem.html | AWS::QuickSight::Template.DataFieldSeriesItem}
 */
export interface QuickSightTemplateDataFieldSeriesItem {
  FieldId: string;
  AxisBinding: string;
  FieldValue?: string;
  Settings?: QuickSightTemplateLineChartSeriesSettings;
}
/**
 * Type definition for AWS::QuickSight::Template.DataLabelOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datalabeloptions.html | AWS::QuickSight::Template.DataLabelOptions}
 */
export interface QuickSightTemplateDataLabelOptions {
  DataLabelTypes?: any[];
  MeasureLabelVisibility?: string;
  Position?: string;
  LabelContent?: string;
  Visibility?: string;
  TotalsVisibility?: string;
  Overlap?: string;
  CategoryLabelVisibility?: string;
  LabelColor?: string;
  LabelFontConfiguration?: QuickSightTemplateFontConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.DataLabelType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datalabeltype.html | AWS::QuickSight::Template.DataLabelType}
 */
export interface QuickSightTemplateDataLabelType {
  MaximumLabelType?: QuickSightTemplateMaximumLabelType;
  DataPathLabelType?: QuickSightTemplateDataPathLabelType;
  RangeEndsLabelType?: QuickSightTemplateRangeEndsLabelType;
  FieldLabelType?: QuickSightTemplateFieldLabelType;
  MinimumLabelType?: QuickSightTemplateMinimumLabelType;
}
/**
 * Type definition for AWS::QuickSight::Template.DataPathColor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datapathcolor.html | AWS::QuickSight::Template.DataPathColor}
 */
export interface QuickSightTemplateDataPathColor {
  Element: QuickSightTemplateDataPathValue;
  Color: string;
  TimeGranularity?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.DataPathLabelType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datapathlabeltype.html | AWS::QuickSight::Template.DataPathLabelType}
 */
export interface QuickSightTemplateDataPathLabelType {
  FieldId?: string;
  Visibility?: string;
  FieldValue?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.DataPathSort
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datapathsort.html | AWS::QuickSight::Template.DataPathSort}
 */
export interface QuickSightTemplateDataPathSort {
  SortPaths: any[];
  Direction: string;
}
/**
 * Type definition for AWS::QuickSight::Template.DataPathType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datapathtype.html | AWS::QuickSight::Template.DataPathType}
 */
export interface QuickSightTemplateDataPathType {
  PivotTableDataPathType?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.DataPathValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datapathvalue.html | AWS::QuickSight::Template.DataPathValue}
 */
export interface QuickSightTemplateDataPathValue {
  DataPathType?: QuickSightTemplateDataPathType;
  FieldId?: string;
  FieldValue?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.DataSetConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datasetconfiguration.html | AWS::QuickSight::Template.DataSetConfiguration}
 */
export interface QuickSightTemplateDataSetConfiguration {
  Placeholder?: string;
  DataSetSchema?: QuickSightTemplateDataSetSchema;
  ColumnGroupSchemaList?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.DataSetReference
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datasetreference.html | AWS::QuickSight::Template.DataSetReference}
 */
export interface QuickSightTemplateDataSetReference {
  DataSetArn: string;
  DataSetPlaceholder: string;
}
/**
 * Type definition for AWS::QuickSight::Template.DataSetSchema
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datasetschema.html | AWS::QuickSight::Template.DataSetSchema}
 */
export interface QuickSightTemplateDataSetSchema {
  ColumnSchemaList?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.DateAxisOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-dateaxisoptions.html | AWS::QuickSight::Template.DateAxisOptions}
 */
export interface QuickSightTemplateDateAxisOptions {
  MissingDateVisibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.DateDimensionField
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datedimensionfield.html | AWS::QuickSight::Template.DateDimensionField}
 */
export interface QuickSightTemplateDateDimensionField {
  HierarchyId?: string;
  FormatConfiguration?: QuickSightTemplateDateTimeFormatConfiguration;
  Column: QuickSightTemplateColumnIdentifier;
  FieldId: string;
  DateGranularity?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.DateMeasureField
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datemeasurefield.html | AWS::QuickSight::Template.DateMeasureField}
 */
export interface QuickSightTemplateDateMeasureField {
  AggregationFunction?: string;
  FormatConfiguration?: QuickSightTemplateDateTimeFormatConfiguration;
  Column: QuickSightTemplateColumnIdentifier;
  FieldId: string;
}
/**
 * Type definition for AWS::QuickSight::Template.DateTimeDefaultValues
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datetimedefaultvalues.html | AWS::QuickSight::Template.DateTimeDefaultValues}
 */
export interface QuickSightTemplateDateTimeDefaultValues {
  RollingDate?: QuickSightTemplateRollingDateConfiguration;
  DynamicValue?: QuickSightTemplateDynamicDefaultValue;
  StaticValues?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.DateTimeFormatConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datetimeformatconfiguration.html | AWS::QuickSight::Template.DateTimeFormatConfiguration}
 */
export interface QuickSightTemplateDateTimeFormatConfiguration {
  NumericFormatConfiguration?: QuickSightTemplateNumericFormatConfiguration;
  NullValueFormatConfiguration?: QuickSightTemplateNullValueFormatConfiguration;
  DateTimeFormat?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.DateTimeHierarchy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datetimehierarchy.html | AWS::QuickSight::Template.DateTimeHierarchy}
 */
export interface QuickSightTemplateDateTimeHierarchy {
  HierarchyId: string;
  DrillDownFilters?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.DateTimeParameterDeclaration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datetimeparameterdeclaration.html | AWS::QuickSight::Template.DateTimeParameterDeclaration}
 */
export interface QuickSightTemplateDateTimeParameterDeclaration {
  MappedDataSetParameters?: any[];
  DefaultValues?: QuickSightTemplateDateTimeDefaultValues;
  TimeGranularity?: string;
  ValueWhenUnset?: QuickSightTemplateDateTimeValueWhenUnsetConfiguration;
  Name: string;
}
/**
 * Type definition for AWS::QuickSight::Template.DateTimePickerControlDisplayOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datetimepickercontroldisplayoptions.html | AWS::QuickSight::Template.DateTimePickerControlDisplayOptions}
 */
export interface QuickSightTemplateDateTimePickerControlDisplayOptions {
  TitleOptions?: QuickSightTemplateLabelOptions;
  InfoIconLabelOptions?: QuickSightTemplateSheetControlInfoIconLabelOptions;
  DateTimeFormat?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.DateTimeValueWhenUnsetConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datetimevaluewhenunsetconfiguration.html | AWS::QuickSight::Template.DateTimeValueWhenUnsetConfiguration}
 */
export interface QuickSightTemplateDateTimeValueWhenUnsetConfiguration {
  ValueWhenUnsetOption?: string;
  CustomValue?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.DecimalDefaultValues
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-decimaldefaultvalues.html | AWS::QuickSight::Template.DecimalDefaultValues}
 */
export interface QuickSightTemplateDecimalDefaultValues {
  DynamicValue?: QuickSightTemplateDynamicDefaultValue;
  StaticValues?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.DecimalParameterDeclaration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-decimalparameterdeclaration.html | AWS::QuickSight::Template.DecimalParameterDeclaration}
 */
export interface QuickSightTemplateDecimalParameterDeclaration {
  MappedDataSetParameters?: any[];
  DefaultValues?: QuickSightTemplateDecimalDefaultValues;
  ParameterValueType: string;
  ValueWhenUnset?: QuickSightTemplateDecimalValueWhenUnsetConfiguration;
  Name: string;
}
/**
 * Type definition for AWS::QuickSight::Template.DecimalPlacesConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-decimalplacesconfiguration.html | AWS::QuickSight::Template.DecimalPlacesConfiguration}
 */
export interface QuickSightTemplateDecimalPlacesConfiguration {
  DecimalPlaces: number;
}
/**
 * Type definition for AWS::QuickSight::Template.DecimalValueWhenUnsetConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-decimalvaluewhenunsetconfiguration.html | AWS::QuickSight::Template.DecimalValueWhenUnsetConfiguration}
 */
export interface QuickSightTemplateDecimalValueWhenUnsetConfiguration {
  ValueWhenUnsetOption?: string;
  CustomValue?: number;
}
/**
 * Type definition for AWS::QuickSight::Template.DefaultFreeFormLayoutConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-defaultfreeformlayoutconfiguration.html | AWS::QuickSight::Template.DefaultFreeFormLayoutConfiguration}
 */
export interface QuickSightTemplateDefaultFreeFormLayoutConfiguration {
  CanvasSizeOptions: QuickSightTemplateFreeFormLayoutCanvasSizeOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.DefaultGridLayoutConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-defaultgridlayoutconfiguration.html | AWS::QuickSight::Template.DefaultGridLayoutConfiguration}
 */
export interface QuickSightTemplateDefaultGridLayoutConfiguration {
  CanvasSizeOptions: QuickSightTemplateGridLayoutCanvasSizeOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.DefaultInteractiveLayoutConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-defaultinteractivelayoutconfiguration.html | AWS::QuickSight::Template.DefaultInteractiveLayoutConfiguration}
 */
export interface QuickSightTemplateDefaultInteractiveLayoutConfiguration {
  FreeForm?: QuickSightTemplateDefaultFreeFormLayoutConfiguration;
  Grid?: QuickSightTemplateDefaultGridLayoutConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.DefaultNewSheetConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-defaultnewsheetconfiguration.html | AWS::QuickSight::Template.DefaultNewSheetConfiguration}
 */
export interface QuickSightTemplateDefaultNewSheetConfiguration {
  SheetContentType?: string;
  InteractiveLayoutConfiguration?: QuickSightTemplateDefaultInteractiveLayoutConfiguration;
  PaginatedLayoutConfiguration?: QuickSightTemplateDefaultPaginatedLayoutConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.DefaultPaginatedLayoutConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-defaultpaginatedlayoutconfiguration.html | AWS::QuickSight::Template.DefaultPaginatedLayoutConfiguration}
 */
export interface QuickSightTemplateDefaultPaginatedLayoutConfiguration {
  SectionBased?: QuickSightTemplateDefaultSectionBasedLayoutConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.DefaultSectionBasedLayoutConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-defaultsectionbasedlayoutconfiguration.html | AWS::QuickSight::Template.DefaultSectionBasedLayoutConfiguration}
 */
export interface QuickSightTemplateDefaultSectionBasedLayoutConfiguration {
  CanvasSizeOptions: QuickSightTemplateSectionBasedLayoutCanvasSizeOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.DestinationParameterValueConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-destinationparametervalueconfiguration.html | AWS::QuickSight::Template.DestinationParameterValueConfiguration}
 */
export interface QuickSightTemplateDestinationParameterValueConfiguration {
  CustomValuesConfiguration?: QuickSightTemplateCustomValuesConfiguration;
  SourceParameterName?: string;
  SelectAllValueOptions?: string;
  SourceField?: string;
  SourceColumn?: QuickSightTemplateColumnIdentifier;
}
/**
 * Type definition for AWS::QuickSight::Template.DimensionField
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-dimensionfield.html | AWS::QuickSight::Template.DimensionField}
 */
export interface QuickSightTemplateDimensionField {
  DateDimensionField?: QuickSightTemplateDateDimensionField;
  NumericalDimensionField?: QuickSightTemplateNumericalDimensionField;
  CategoricalDimensionField?: QuickSightTemplateCategoricalDimensionField;
}
/**
 * Type definition for AWS::QuickSight::Template.DonutCenterOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-donutcenteroptions.html | AWS::QuickSight::Template.DonutCenterOptions}
 */
export interface QuickSightTemplateDonutCenterOptions {
  LabelVisibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.DonutOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-donutoptions.html | AWS::QuickSight::Template.DonutOptions}
 */
export interface QuickSightTemplateDonutOptions {
  DonutCenterOptions?: QuickSightTemplateDonutCenterOptions;
  ArcOptions?: QuickSightTemplateArcOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.DrillDownFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-drilldownfilter.html | AWS::QuickSight::Template.DrillDownFilter}
 */
export interface QuickSightTemplateDrillDownFilter {
  NumericEqualityFilter?: QuickSightTemplateNumericEqualityDrillDownFilter;
  TimeRangeFilter?: QuickSightTemplateTimeRangeDrillDownFilter;
  CategoryFilter?: QuickSightTemplateCategoryDrillDownFilter;
}
/**
 * Type definition for AWS::QuickSight::Template.DropDownControlDisplayOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-dropdowncontroldisplayoptions.html | AWS::QuickSight::Template.DropDownControlDisplayOptions}
 */
export interface QuickSightTemplateDropDownControlDisplayOptions {
  TitleOptions?: QuickSightTemplateLabelOptions;
  SelectAllOptions?: QuickSightTemplateListControlSelectAllOptions;
  InfoIconLabelOptions?: QuickSightTemplateSheetControlInfoIconLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.DynamicDefaultValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-dynamicdefaultvalue.html | AWS::QuickSight::Template.DynamicDefaultValue}
 */
export interface QuickSightTemplateDynamicDefaultValue {
  GroupNameColumn?: QuickSightTemplateColumnIdentifier;
  DefaultValueColumn: QuickSightTemplateColumnIdentifier;
  UserNameColumn?: QuickSightTemplateColumnIdentifier;
}
/**
 * Type definition for AWS::QuickSight::Template.EmptyVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-emptyvisual.html | AWS::QuickSight::Template.EmptyVisual}
 */
export interface QuickSightTemplateEmptyVisual {
  VisualId: string;
  Actions?: any[];
  DataSetIdentifier: string;
}
/**
 * Type definition for AWS::QuickSight::Template.Entity
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-entity.html | AWS::QuickSight::Template.Entity}
 */
export interface QuickSightTemplateEntity {
  Path?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.ExcludePeriodConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-excludeperiodconfiguration.html | AWS::QuickSight::Template.ExcludePeriodConfiguration}
 */
export interface QuickSightTemplateExcludePeriodConfiguration {
  Status?: string;
  Amount: number;
  Granularity: string;
}
/**
 * Type definition for AWS::QuickSight::Template.ExplicitHierarchy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-explicithierarchy.html | AWS::QuickSight::Template.ExplicitHierarchy}
 */
export interface QuickSightTemplateExplicitHierarchy {
  HierarchyId: string;
  DrillDownFilters?: any[];
  Columns: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.FieldBasedTooltip
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-fieldbasedtooltip.html | AWS::QuickSight::Template.FieldBasedTooltip}
 */
export interface QuickSightTemplateFieldBasedTooltip {
  TooltipFields?: any[];
  AggregationVisibility?: string;
  TooltipTitleType?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.FieldLabelType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-fieldlabeltype.html | AWS::QuickSight::Template.FieldLabelType}
 */
export interface QuickSightTemplateFieldLabelType {
  FieldId?: string;
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.FieldSeriesItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-fieldseriesitem.html | AWS::QuickSight::Template.FieldSeriesItem}
 */
export interface QuickSightTemplateFieldSeriesItem {
  FieldId: string;
  AxisBinding: string;
  Settings?: QuickSightTemplateLineChartSeriesSettings;
}
/**
 * Type definition for AWS::QuickSight::Template.FieldSort
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-fieldsort.html | AWS::QuickSight::Template.FieldSort}
 */
export interface QuickSightTemplateFieldSort {
  FieldId: string;
  Direction: string;
}
/**
 * Type definition for AWS::QuickSight::Template.FieldSortOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-fieldsortoptions.html | AWS::QuickSight::Template.FieldSortOptions}
 */
export interface QuickSightTemplateFieldSortOptions {
  FieldSort?: QuickSightTemplateFieldSort;
  ColumnSort?: QuickSightTemplateColumnSort;
}
/**
 * Type definition for AWS::QuickSight::Template.FieldTooltipItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-fieldtooltipitem.html | AWS::QuickSight::Template.FieldTooltipItem}
 */
export interface QuickSightTemplateFieldTooltipItem {
  FieldId: string;
  Label?: string;
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.FilledMapAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filledmapaggregatedfieldwells.html | AWS::QuickSight::Template.FilledMapAggregatedFieldWells}
 */
export interface QuickSightTemplateFilledMapAggregatedFieldWells {
  Values?: any[];
  Geospatial?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.FilledMapConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filledmapconditionalformatting.html | AWS::QuickSight::Template.FilledMapConditionalFormatting}
 */
export interface QuickSightTemplateFilledMapConditionalFormatting {
  ConditionalFormattingOptions: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.FilledMapConditionalFormattingOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filledmapconditionalformattingoption.html | AWS::QuickSight::Template.FilledMapConditionalFormattingOption}
 */
export interface QuickSightTemplateFilledMapConditionalFormattingOption {
  Shape: QuickSightTemplateFilledMapShapeConditionalFormatting;
}
/**
 * Type definition for AWS::QuickSight::Template.FilledMapConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filledmapconfiguration.html | AWS::QuickSight::Template.FilledMapConfiguration}
 */
export interface QuickSightTemplateFilledMapConfiguration {
  SortConfiguration?: QuickSightTemplateFilledMapSortConfiguration;
  Legend?: QuickSightTemplateLegendOptions;
  MapStyleOptions?: QuickSightTemplateGeospatialMapStyleOptions;
  FieldWells?: QuickSightTemplateFilledMapFieldWells;
  Tooltip?: QuickSightTemplateTooltipOptions;
  WindowOptions?: QuickSightTemplateGeospatialWindowOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.FilledMapFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filledmapfieldwells.html | AWS::QuickSight::Template.FilledMapFieldWells}
 */
export interface QuickSightTemplateFilledMapFieldWells {
  FilledMapAggregatedFieldWells?: QuickSightTemplateFilledMapAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Template.FilledMapShapeConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filledmapshapeconditionalformatting.html | AWS::QuickSight::Template.FilledMapShapeConditionalFormatting}
 */
export interface QuickSightTemplateFilledMapShapeConditionalFormatting {
  Format?: QuickSightTemplateShapeConditionalFormat;
  FieldId: string;
}
/**
 * Type definition for AWS::QuickSight::Template.FilledMapSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filledmapsortconfiguration.html | AWS::QuickSight::Template.FilledMapSortConfiguration}
 */
export interface QuickSightTemplateFilledMapSortConfiguration {
  CategorySort?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.FilledMapVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filledmapvisual.html | AWS::QuickSight::Template.FilledMapVisual}
 */
export interface QuickSightTemplateFilledMapVisual {
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  ConditionalFormatting?: QuickSightTemplateFilledMapConditionalFormatting;
  VisualId: string;
  ChartConfiguration?: QuickSightTemplateFilledMapConfiguration;
  Actions?: any[];
  Title?: QuickSightTemplateVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.Filter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filter.html | AWS::QuickSight::Template.Filter}
 */
export interface QuickSightTemplateFilter {
  NumericEqualityFilter?: QuickSightTemplateNumericEqualityFilter;
  NumericRangeFilter?: QuickSightTemplateNumericRangeFilter;
  TimeRangeFilter?: QuickSightTemplateTimeRangeFilter;
  RelativeDatesFilter?: QuickSightTemplateRelativeDatesFilter;
  TopBottomFilter?: QuickSightTemplateTopBottomFilter;
  TimeEqualityFilter?: QuickSightTemplateTimeEqualityFilter;
  CategoryFilter?: QuickSightTemplateCategoryFilter;
}
/**
 * Type definition for AWS::QuickSight::Template.FilterControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filtercontrol.html | AWS::QuickSight::Template.FilterControl}
 */
export interface QuickSightTemplateFilterControl {
  Slider?: QuickSightTemplateFilterSliderControl;
  TextArea?: QuickSightTemplateFilterTextAreaControl;
  Dropdown?: QuickSightTemplateFilterDropDownControl;
  TextField?: QuickSightTemplateFilterTextFieldControl;
  List?: QuickSightTemplateFilterListControl;
  DateTimePicker?: QuickSightTemplateFilterDateTimePickerControl;
  RelativeDateTime?: QuickSightTemplateFilterRelativeDateTimeControl;
}
/**
 * Type definition for AWS::QuickSight::Template.FilterDateTimePickerControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filterdatetimepickercontrol.html | AWS::QuickSight::Template.FilterDateTimePickerControl}
 */
export interface QuickSightTemplateFilterDateTimePickerControl {
  FilterControlId: string;
  Type?: string;
  DisplayOptions?: QuickSightTemplateDateTimePickerControlDisplayOptions;
  Title: string;
  SourceFilterId: string;
}
/**
 * Type definition for AWS::QuickSight::Template.FilterDropDownControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filterdropdowncontrol.html | AWS::QuickSight::Template.FilterDropDownControl}
 */
export interface QuickSightTemplateFilterDropDownControl {
  FilterControlId: string;
  Type?: string;
  DisplayOptions?: QuickSightTemplateDropDownControlDisplayOptions;
  CascadingControlConfiguration?: QuickSightTemplateCascadingControlConfiguration;
  Title: string;
  SourceFilterId: string;
  SelectableValues?: QuickSightTemplateFilterSelectableValues;
}
/**
 * Type definition for AWS::QuickSight::Template.FilterGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filtergroup.html | AWS::QuickSight::Template.FilterGroup}
 */
export interface QuickSightTemplateFilterGroup {
  Status?: string;
  Filters: any[];
  CrossDataset: string;
  ScopeConfiguration: QuickSightTemplateFilterScopeConfiguration;
  FilterGroupId: string;
}
/**
 * Type definition for AWS::QuickSight::Template.FilterListConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filterlistconfiguration.html | AWS::QuickSight::Template.FilterListConfiguration}
 */
export interface QuickSightTemplateFilterListConfiguration {
  CategoryValues?: any[];
  NullOption?: string;
  MatchOperator: string;
  SelectAllOptions?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.FilterListControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filterlistcontrol.html | AWS::QuickSight::Template.FilterListControl}
 */
export interface QuickSightTemplateFilterListControl {
  FilterControlId: string;
  Type?: string;
  DisplayOptions?: QuickSightTemplateListControlDisplayOptions;
  CascadingControlConfiguration?: QuickSightTemplateCascadingControlConfiguration;
  Title: string;
  SourceFilterId: string;
  SelectableValues?: QuickSightTemplateFilterSelectableValues;
}
/**
 * Type definition for AWS::QuickSight::Template.FilterOperationSelectedFieldsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filteroperationselectedfieldsconfiguration.html | AWS::QuickSight::Template.FilterOperationSelectedFieldsConfiguration}
 */
export interface QuickSightTemplateFilterOperationSelectedFieldsConfiguration {
  SelectedColumns?: any[];
  SelectedFields?: any[];
  SelectedFieldOptions?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.FilterOperationTargetVisualsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filteroperationtargetvisualsconfiguration.html | AWS::QuickSight::Template.FilterOperationTargetVisualsConfiguration}
 */
export interface QuickSightTemplateFilterOperationTargetVisualsConfiguration {
  SameSheetTargetVisualConfiguration?: QuickSightTemplateSameSheetTargetVisualConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.FilterRelativeDateTimeControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filterrelativedatetimecontrol.html | AWS::QuickSight::Template.FilterRelativeDateTimeControl}
 */
export interface QuickSightTemplateFilterRelativeDateTimeControl {
  FilterControlId: string;
  DisplayOptions?: QuickSightTemplateRelativeDateTimeControlDisplayOptions;
  Title: string;
  SourceFilterId: string;
}
/**
 * Type definition for AWS::QuickSight::Template.FilterScopeConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filterscopeconfiguration.html | AWS::QuickSight::Template.FilterScopeConfiguration}
 */
export interface QuickSightTemplateFilterScopeConfiguration {
  AllSheets?: object;
  SelectedSheets?: QuickSightTemplateSelectedSheetsFilterScopeConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.FilterSelectableValues
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filterselectablevalues.html | AWS::QuickSight::Template.FilterSelectableValues}
 */
export interface QuickSightTemplateFilterSelectableValues {
  Values?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.FilterSliderControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filterslidercontrol.html | AWS::QuickSight::Template.FilterSliderControl}
 */
export interface QuickSightTemplateFilterSliderControl {
  FilterControlId: string;
  Type?: string;
  StepSize: number;
  DisplayOptions?: QuickSightTemplateSliderControlDisplayOptions;
  Title: string;
  MaximumValue: number;
  SourceFilterId: string;
  MinimumValue: number;
}
/**
 * Type definition for AWS::QuickSight::Template.FilterTextAreaControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filtertextareacontrol.html | AWS::QuickSight::Template.FilterTextAreaControl}
 */
export interface QuickSightTemplateFilterTextAreaControl {
  FilterControlId: string;
  Delimiter?: string;
  DisplayOptions?: QuickSightTemplateTextAreaControlDisplayOptions;
  Title: string;
  SourceFilterId: string;
}
/**
 * Type definition for AWS::QuickSight::Template.FilterTextFieldControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filtertextfieldcontrol.html | AWS::QuickSight::Template.FilterTextFieldControl}
 */
export interface QuickSightTemplateFilterTextFieldControl {
  FilterControlId: string;
  DisplayOptions?: QuickSightTemplateTextFieldControlDisplayOptions;
  Title: string;
  SourceFilterId: string;
}
/**
 * Type definition for AWS::QuickSight::Template.FontConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-fontconfiguration.html | AWS::QuickSight::Template.FontConfiguration}
 */
export interface QuickSightTemplateFontConfiguration {
  FontStyle?: string;
  FontSize?: QuickSightTemplateFontSize;
  FontDecoration?: string;
  FontColor?: string;
  FontWeight?: QuickSightTemplateFontWeight;
}
/**
 * Type definition for AWS::QuickSight::Template.FontSize
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-fontsize.html | AWS::QuickSight::Template.FontSize}
 */
export interface QuickSightTemplateFontSize {
  Relative?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.FontWeight
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-fontweight.html | AWS::QuickSight::Template.FontWeight}
 */
export interface QuickSightTemplateFontWeight {
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.ForecastComputation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-forecastcomputation.html | AWS::QuickSight::Template.ForecastComputation}
 */
export interface QuickSightTemplateForecastComputation {
  PeriodsBackward?: number;
  PeriodsForward?: number;
  PredictionInterval?: number;
  Seasonality?: string;
  CustomSeasonalityValue?: number;
  Value?: QuickSightTemplateMeasureField;
  Time?: QuickSightTemplateDimensionField;
  UpperBoundary?: number;
  ComputationId: string;
  Name?: string;
  LowerBoundary?: number;
}
/**
 * Type definition for AWS::QuickSight::Template.ForecastConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-forecastconfiguration.html | AWS::QuickSight::Template.ForecastConfiguration}
 */
export interface QuickSightTemplateForecastConfiguration {
  ForecastProperties?: QuickSightTemplateTimeBasedForecastProperties;
  Scenario?: QuickSightTemplateForecastScenario;
}
/**
 * Type definition for AWS::QuickSight::Template.ForecastScenario
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-forecastscenario.html | AWS::QuickSight::Template.ForecastScenario}
 */
export interface QuickSightTemplateForecastScenario {
  WhatIfRangeScenario?: QuickSightTemplateWhatIfRangeScenario;
  WhatIfPointScenario?: QuickSightTemplateWhatIfPointScenario;
}
/**
 * Type definition for AWS::QuickSight::Template.FormatConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-formatconfiguration.html | AWS::QuickSight::Template.FormatConfiguration}
 */
export interface QuickSightTemplateFormatConfiguration {
  NumberFormatConfiguration?: QuickSightTemplateNumberFormatConfiguration;
  DateTimeFormatConfiguration?: QuickSightTemplateDateTimeFormatConfiguration;
  StringFormatConfiguration?: QuickSightTemplateStringFormatConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.FreeFormLayoutCanvasSizeOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-freeformlayoutcanvassizeoptions.html | AWS::QuickSight::Template.FreeFormLayoutCanvasSizeOptions}
 */
export interface QuickSightTemplateFreeFormLayoutCanvasSizeOptions {
  ScreenCanvasSizeOptions?: QuickSightTemplateFreeFormLayoutScreenCanvasSizeOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.FreeFormLayoutConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-freeformlayoutconfiguration.html | AWS::QuickSight::Template.FreeFormLayoutConfiguration}
 */
export interface QuickSightTemplateFreeFormLayoutConfiguration {
  CanvasSizeOptions?: QuickSightTemplateFreeFormLayoutCanvasSizeOptions;
  Elements: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.FreeFormLayoutElement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-freeformlayoutelement.html | AWS::QuickSight::Template.FreeFormLayoutElement}
 */
export interface QuickSightTemplateFreeFormLayoutElement {
  ElementType: string;
  BorderStyle?: QuickSightTemplateFreeFormLayoutElementBorderStyle;
  Height: string;
  Visibility?: string;
  RenderingRules?: any[];
  YAxisLocation: string;
  LoadingAnimation?: QuickSightTemplateLoadingAnimation;
  Width: string;
  BackgroundStyle?: QuickSightTemplateFreeFormLayoutElementBackgroundStyle;
  ElementId: string;
  XAxisLocation: string;
  SelectedBorderStyle?: QuickSightTemplateFreeFormLayoutElementBorderStyle;
}
/**
 * Type definition for AWS::QuickSight::Template.FreeFormLayoutElementBackgroundStyle
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-freeformlayoutelementbackgroundstyle.html | AWS::QuickSight::Template.FreeFormLayoutElementBackgroundStyle}
 */
export interface QuickSightTemplateFreeFormLayoutElementBackgroundStyle {
  Color?: string;
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.FreeFormLayoutElementBorderStyle
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-freeformlayoutelementborderstyle.html | AWS::QuickSight::Template.FreeFormLayoutElementBorderStyle}
 */
export interface QuickSightTemplateFreeFormLayoutElementBorderStyle {
  Color?: string;
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.FreeFormLayoutScreenCanvasSizeOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-freeformlayoutscreencanvassizeoptions.html | AWS::QuickSight::Template.FreeFormLayoutScreenCanvasSizeOptions}
 */
export interface QuickSightTemplateFreeFormLayoutScreenCanvasSizeOptions {
  OptimizedViewPortWidth: string;
}
/**
 * Type definition for AWS::QuickSight::Template.FreeFormSectionLayoutConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-freeformsectionlayoutconfiguration.html | AWS::QuickSight::Template.FreeFormSectionLayoutConfiguration}
 */
export interface QuickSightTemplateFreeFormSectionLayoutConfiguration {
  Elements: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.FunnelChartAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-funnelchartaggregatedfieldwells.html | AWS::QuickSight::Template.FunnelChartAggregatedFieldWells}
 */
export interface QuickSightTemplateFunnelChartAggregatedFieldWells {
  Category?: any[];
  Values?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.FunnelChartConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-funnelchartconfiguration.html | AWS::QuickSight::Template.FunnelChartConfiguration}
 */
export interface QuickSightTemplateFunnelChartConfiguration {
  SortConfiguration?: QuickSightTemplateFunnelChartSortConfiguration;
  DataLabelOptions?: QuickSightTemplateFunnelChartDataLabelOptions;
  CategoryLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  FieldWells?: QuickSightTemplateFunnelChartFieldWells;
  Tooltip?: QuickSightTemplateTooltipOptions;
  ValueLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  VisualPalette?: QuickSightTemplateVisualPalette;
}
/**
 * Type definition for AWS::QuickSight::Template.FunnelChartDataLabelOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-funnelchartdatalabeloptions.html | AWS::QuickSight::Template.FunnelChartDataLabelOptions}
 */
export interface QuickSightTemplateFunnelChartDataLabelOptions {
  MeasureLabelVisibility?: string;
  Position?: string;
  Visibility?: string;
  CategoryLabelVisibility?: string;
  LabelColor?: string;
  MeasureDataLabelStyle?: string;
  LabelFontConfiguration?: QuickSightTemplateFontConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.FunnelChartFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-funnelchartfieldwells.html | AWS::QuickSight::Template.FunnelChartFieldWells}
 */
export interface QuickSightTemplateFunnelChartFieldWells {
  FunnelChartAggregatedFieldWells?: QuickSightTemplateFunnelChartAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Template.FunnelChartSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-funnelchartsortconfiguration.html | AWS::QuickSight::Template.FunnelChartSortConfiguration}
 */
export interface QuickSightTemplateFunnelChartSortConfiguration {
  CategoryItemsLimit?: QuickSightTemplateItemsLimitConfiguration;
  CategorySort?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.FunnelChartVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-funnelchartvisual.html | AWS::QuickSight::Template.FunnelChartVisual}
 */
export interface QuickSightTemplateFunnelChartVisual {
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightTemplateFunnelChartConfiguration;
  Actions?: any[];
  Title?: QuickSightTemplateVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.GaugeChartArcConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gaugechartarcconditionalformatting.html | AWS::QuickSight::Template.GaugeChartArcConditionalFormatting}
 */
export interface QuickSightTemplateGaugeChartArcConditionalFormatting {
  ForegroundColor?: QuickSightTemplateConditionalFormattingColor;
}
/**
 * Type definition for AWS::QuickSight::Template.GaugeChartConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gaugechartconditionalformatting.html | AWS::QuickSight::Template.GaugeChartConditionalFormatting}
 */
export interface QuickSightTemplateGaugeChartConditionalFormatting {
  ConditionalFormattingOptions?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.GaugeChartConditionalFormattingOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gaugechartconditionalformattingoption.html | AWS::QuickSight::Template.GaugeChartConditionalFormattingOption}
 */
export interface QuickSightTemplateGaugeChartConditionalFormattingOption {
  Arc?: QuickSightTemplateGaugeChartArcConditionalFormatting;
  PrimaryValue?: QuickSightTemplateGaugeChartPrimaryValueConditionalFormatting;
}
/**
 * Type definition for AWS::QuickSight::Template.GaugeChartConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gaugechartconfiguration.html | AWS::QuickSight::Template.GaugeChartConfiguration}
 */
export interface QuickSightTemplateGaugeChartConfiguration {
  DataLabels?: QuickSightTemplateDataLabelOptions;
  FieldWells?: QuickSightTemplateGaugeChartFieldWells;
  TooltipOptions?: QuickSightTemplateTooltipOptions;
  GaugeChartOptions?: QuickSightTemplateGaugeChartOptions;
  VisualPalette?: QuickSightTemplateVisualPalette;
}
/**
 * Type definition for AWS::QuickSight::Template.GaugeChartFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gaugechartfieldwells.html | AWS::QuickSight::Template.GaugeChartFieldWells}
 */
export interface QuickSightTemplateGaugeChartFieldWells {
  TargetValues?: any[];
  Values?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.GaugeChartOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gaugechartoptions.html | AWS::QuickSight::Template.GaugeChartOptions}
 */
export interface QuickSightTemplateGaugeChartOptions {
  Arc?: QuickSightTemplateArcConfiguration;
  Comparison?: QuickSightTemplateComparisonConfiguration;
  PrimaryValueDisplayType?: string;
  ArcAxis?: QuickSightTemplateArcAxisConfiguration;
  PrimaryValueFontConfiguration?: QuickSightTemplateFontConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.GaugeChartPrimaryValueConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gaugechartprimaryvalueconditionalformatting.html | AWS::QuickSight::Template.GaugeChartPrimaryValueConditionalFormatting}
 */
export interface QuickSightTemplateGaugeChartPrimaryValueConditionalFormatting {
  TextColor?: QuickSightTemplateConditionalFormattingColor;
  Icon?: QuickSightTemplateConditionalFormattingIcon;
}
/**
 * Type definition for AWS::QuickSight::Template.GaugeChartVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gaugechartvisual.html | AWS::QuickSight::Template.GaugeChartVisual}
 */
export interface QuickSightTemplateGaugeChartVisual {
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  ConditionalFormatting?: QuickSightTemplateGaugeChartConditionalFormatting;
  VisualId: string;
  ChartConfiguration?: QuickSightTemplateGaugeChartConfiguration;
  Actions?: any[];
  Title?: QuickSightTemplateVisualTitleLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.GeospatialCoordinateBounds
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-geospatialcoordinatebounds.html | AWS::QuickSight::Template.GeospatialCoordinateBounds}
 */
export interface QuickSightTemplateGeospatialCoordinateBounds {
  West: number;
  South: number;
  North: number;
  East: number;
}
/**
 * Type definition for AWS::QuickSight::Template.GeospatialHeatmapColorScale
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-geospatialheatmapcolorscale.html | AWS::QuickSight::Template.GeospatialHeatmapColorScale}
 */
export interface QuickSightTemplateGeospatialHeatmapColorScale {
  Colors?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.GeospatialHeatmapConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-geospatialheatmapconfiguration.html | AWS::QuickSight::Template.GeospatialHeatmapConfiguration}
 */
export interface QuickSightTemplateGeospatialHeatmapConfiguration {
  HeatmapColor?: QuickSightTemplateGeospatialHeatmapColorScale;
}
/**
 * Type definition for AWS::QuickSight::Template.GeospatialHeatmapDataColor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-geospatialheatmapdatacolor.html | AWS::QuickSight::Template.GeospatialHeatmapDataColor}
 */
export interface QuickSightTemplateGeospatialHeatmapDataColor {
  Color: string;
}
/**
 * Type definition for AWS::QuickSight::Template.GeospatialMapAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-geospatialmapaggregatedfieldwells.html | AWS::QuickSight::Template.GeospatialMapAggregatedFieldWells}
 */
export interface QuickSightTemplateGeospatialMapAggregatedFieldWells {
  Colors?: any[];
  Values?: any[];
  Geospatial?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.GeospatialMapConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-geospatialmapconfiguration.html | AWS::QuickSight::Template.GeospatialMapConfiguration}
 */
export interface QuickSightTemplateGeospatialMapConfiguration {
  Legend?: QuickSightTemplateLegendOptions;
  MapStyleOptions?: QuickSightTemplateGeospatialMapStyleOptions;
  FieldWells?: QuickSightTemplateGeospatialMapFieldWells;
  Tooltip?: QuickSightTemplateTooltipOptions;
  WindowOptions?: QuickSightTemplateGeospatialWindowOptions;
  PointStyleOptions?: QuickSightTemplateGeospatialPointStyleOptions;
  VisualPalette?: QuickSightTemplateVisualPalette;
}
/**
 * Type definition for AWS::QuickSight::Template.GeospatialMapFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-geospatialmapfieldwells.html | AWS::QuickSight::Template.GeospatialMapFieldWells}
 */
export interface QuickSightTemplateGeospatialMapFieldWells {
  GeospatialMapAggregatedFieldWells?: QuickSightTemplateGeospatialMapAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Template.GeospatialMapStyleOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-geospatialmapstyleoptions.html | AWS::QuickSight::Template.GeospatialMapStyleOptions}
 */
export interface QuickSightTemplateGeospatialMapStyleOptions {
  BaseMapStyle?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.GeospatialMapVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-geospatialmapvisual.html | AWS::QuickSight::Template.GeospatialMapVisual}
 */
export interface QuickSightTemplateGeospatialMapVisual {
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightTemplateGeospatialMapConfiguration;
  Actions?: any[];
  Title?: QuickSightTemplateVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.GeospatialPointStyleOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-geospatialpointstyleoptions.html | AWS::QuickSight::Template.GeospatialPointStyleOptions}
 */
export interface QuickSightTemplateGeospatialPointStyleOptions {
  SelectedPointStyle?: string;
  ClusterMarkerConfiguration?: QuickSightTemplateClusterMarkerConfiguration;
  HeatmapConfiguration?: QuickSightTemplateGeospatialHeatmapConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.GeospatialWindowOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-geospatialwindowoptions.html | AWS::QuickSight::Template.GeospatialWindowOptions}
 */
export interface QuickSightTemplateGeospatialWindowOptions {
  Bounds?: QuickSightTemplateGeospatialCoordinateBounds;
  MapZoomMode?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.GlobalTableBorderOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-globaltableborderoptions.html | AWS::QuickSight::Template.GlobalTableBorderOptions}
 */
export interface QuickSightTemplateGlobalTableBorderOptions {
  UniformBorder?: QuickSightTemplateTableBorderOptions;
  SideSpecificBorder?: QuickSightTemplateTableSideBorderOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.GradientColor
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gradientcolor.html | AWS::QuickSight::Template.GradientColor}
 */
export interface QuickSightTemplateGradientColor {
  Stops?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.GradientStop
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gradientstop.html | AWS::QuickSight::Template.GradientStop}
 */
export interface QuickSightTemplateGradientStop {
  GradientOffset: number;
  DataValue?: number;
  Color?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.GridLayoutCanvasSizeOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gridlayoutcanvassizeoptions.html | AWS::QuickSight::Template.GridLayoutCanvasSizeOptions}
 */
export interface QuickSightTemplateGridLayoutCanvasSizeOptions {
  ScreenCanvasSizeOptions?: QuickSightTemplateGridLayoutScreenCanvasSizeOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.GridLayoutConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gridlayoutconfiguration.html | AWS::QuickSight::Template.GridLayoutConfiguration}
 */
export interface QuickSightTemplateGridLayoutConfiguration {
  CanvasSizeOptions?: QuickSightTemplateGridLayoutCanvasSizeOptions;
  Elements: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.GridLayoutElement
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gridlayoutelement.html | AWS::QuickSight::Template.GridLayoutElement}
 */
export interface QuickSightTemplateGridLayoutElement {
  ElementType: string;
  ColumnSpan: number;
  ColumnIndex?: number;
  RowIndex?: number;
  RowSpan: number;
  ElementId: string;
}
/**
 * Type definition for AWS::QuickSight::Template.GridLayoutScreenCanvasSizeOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gridlayoutscreencanvassizeoptions.html | AWS::QuickSight::Template.GridLayoutScreenCanvasSizeOptions}
 */
export interface QuickSightTemplateGridLayoutScreenCanvasSizeOptions {
  OptimizedViewPortWidth?: string;
  ResizeOption: string;
}
/**
 * Type definition for AWS::QuickSight::Template.GrowthRateComputation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-growthratecomputation.html | AWS::QuickSight::Template.GrowthRateComputation}
 */
export interface QuickSightTemplateGrowthRateComputation {
  Value?: QuickSightTemplateMeasureField;
  Time?: QuickSightTemplateDimensionField;
  PeriodSize?: number;
  ComputationId: string;
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.HeaderFooterSectionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-headerfootersectionconfiguration.html | AWS::QuickSight::Template.HeaderFooterSectionConfiguration}
 */
export interface QuickSightTemplateHeaderFooterSectionConfiguration {
  Layout: QuickSightTemplateSectionLayoutConfiguration;
  Style?: QuickSightTemplateSectionStyle;
  SectionId: string;
}
/**
 * Type definition for AWS::QuickSight::Template.HeatMapAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-heatmapaggregatedfieldwells.html | AWS::QuickSight::Template.HeatMapAggregatedFieldWells}
 */
export interface QuickSightTemplateHeatMapAggregatedFieldWells {
  Values?: any[];
  Columns?: any[];
  Rows?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.HeatMapConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-heatmapconfiguration.html | AWS::QuickSight::Template.HeatMapConfiguration}
 */
export interface QuickSightTemplateHeatMapConfiguration {
  SortConfiguration?: QuickSightTemplateHeatMapSortConfiguration;
  ColumnLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  Legend?: QuickSightTemplateLegendOptions;
  DataLabels?: QuickSightTemplateDataLabelOptions;
  FieldWells?: QuickSightTemplateHeatMapFieldWells;
  Tooltip?: QuickSightTemplateTooltipOptions;
  ColorScale?: QuickSightTemplateColorScale;
  RowLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.HeatMapFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-heatmapfieldwells.html | AWS::QuickSight::Template.HeatMapFieldWells}
 */
export interface QuickSightTemplateHeatMapFieldWells {
  HeatMapAggregatedFieldWells?: QuickSightTemplateHeatMapAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Template.HeatMapSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-heatmapsortconfiguration.html | AWS::QuickSight::Template.HeatMapSortConfiguration}
 */
export interface QuickSightTemplateHeatMapSortConfiguration {
  HeatMapRowSort?: any[];
  HeatMapRowItemsLimitConfiguration?: QuickSightTemplateItemsLimitConfiguration;
  HeatMapColumnItemsLimitConfiguration?: QuickSightTemplateItemsLimitConfiguration;
  HeatMapColumnSort?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.HeatMapVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-heatmapvisual.html | AWS::QuickSight::Template.HeatMapVisual}
 */
export interface QuickSightTemplateHeatMapVisual {
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightTemplateHeatMapConfiguration;
  Actions?: any[];
  Title?: QuickSightTemplateVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.HistogramAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-histogramaggregatedfieldwells.html | AWS::QuickSight::Template.HistogramAggregatedFieldWells}
 */
export interface QuickSightTemplateHistogramAggregatedFieldWells {
  Values?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.HistogramBinOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-histogrambinoptions.html | AWS::QuickSight::Template.HistogramBinOptions}
 */
export interface QuickSightTemplateHistogramBinOptions {
  BinWidth?: QuickSightTemplateBinWidthOptions;
  StartValue?: number;
  SelectedBinType?: string;
  BinCount?: QuickSightTemplateBinCountOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.HistogramConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-histogramconfiguration.html | AWS::QuickSight::Template.HistogramConfiguration}
 */
export interface QuickSightTemplateHistogramConfiguration {
  YAxisDisplayOptions?: QuickSightTemplateAxisDisplayOptions;
  DataLabels?: QuickSightTemplateDataLabelOptions;
  BinOptions?: QuickSightTemplateHistogramBinOptions;
  FieldWells?: QuickSightTemplateHistogramFieldWells;
  Tooltip?: QuickSightTemplateTooltipOptions;
  XAxisLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  VisualPalette?: QuickSightTemplateVisualPalette;
  XAxisDisplayOptions?: QuickSightTemplateAxisDisplayOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.HistogramFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-histogramfieldwells.html | AWS::QuickSight::Template.HistogramFieldWells}
 */
export interface QuickSightTemplateHistogramFieldWells {
  HistogramAggregatedFieldWells?: QuickSightTemplateHistogramAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Template.HistogramVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-histogramvisual.html | AWS::QuickSight::Template.HistogramVisual}
 */
export interface QuickSightTemplateHistogramVisual {
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightTemplateHistogramConfiguration;
  Actions?: any[];
  Title?: QuickSightTemplateVisualTitleLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.InsightConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-insightconfiguration.html | AWS::QuickSight::Template.InsightConfiguration}
 */
export interface QuickSightTemplateInsightConfiguration {
  Computations?: any[];
  CustomNarrative?: QuickSightTemplateCustomNarrativeOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.InsightVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-insightvisual.html | AWS::QuickSight::Template.InsightVisual}
 */
export interface QuickSightTemplateInsightVisual {
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  VisualId: string;
  Actions?: any[];
  DataSetIdentifier: string;
  InsightConfiguration?: QuickSightTemplateInsightConfiguration;
  Title?: QuickSightTemplateVisualTitleLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.IntegerDefaultValues
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-integerdefaultvalues.html | AWS::QuickSight::Template.IntegerDefaultValues}
 */
export interface QuickSightTemplateIntegerDefaultValues {
  DynamicValue?: QuickSightTemplateDynamicDefaultValue;
  StaticValues?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.IntegerParameterDeclaration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-integerparameterdeclaration.html | AWS::QuickSight::Template.IntegerParameterDeclaration}
 */
export interface QuickSightTemplateIntegerParameterDeclaration {
  MappedDataSetParameters?: any[];
  DefaultValues?: QuickSightTemplateIntegerDefaultValues;
  ParameterValueType: string;
  ValueWhenUnset?: QuickSightTemplateIntegerValueWhenUnsetConfiguration;
  Name: string;
}
/**
 * Type definition for AWS::QuickSight::Template.IntegerValueWhenUnsetConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-integervaluewhenunsetconfiguration.html | AWS::QuickSight::Template.IntegerValueWhenUnsetConfiguration}
 */
export interface QuickSightTemplateIntegerValueWhenUnsetConfiguration {
  ValueWhenUnsetOption?: string;
  CustomValue?: number;
}
/**
 * Type definition for AWS::QuickSight::Template.ItemsLimitConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-itemslimitconfiguration.html | AWS::QuickSight::Template.ItemsLimitConfiguration}
 */
export interface QuickSightTemplateItemsLimitConfiguration {
  ItemsLimit?: number;
  OtherCategories?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.KPIActualValueConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpiactualvalueconditionalformatting.html | AWS::QuickSight::Template.KPIActualValueConditionalFormatting}
 */
export interface QuickSightTemplateKPIActualValueConditionalFormatting {
  TextColor?: QuickSightTemplateConditionalFormattingColor;
  Icon?: QuickSightTemplateConditionalFormattingIcon;
}
/**
 * Type definition for AWS::QuickSight::Template.KPIComparisonValueConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpicomparisonvalueconditionalformatting.html | AWS::QuickSight::Template.KPIComparisonValueConditionalFormatting}
 */
export interface QuickSightTemplateKPIComparisonValueConditionalFormatting {
  TextColor?: QuickSightTemplateConditionalFormattingColor;
  Icon?: QuickSightTemplateConditionalFormattingIcon;
}
/**
 * Type definition for AWS::QuickSight::Template.KPIConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpiconditionalformatting.html | AWS::QuickSight::Template.KPIConditionalFormatting}
 */
export interface QuickSightTemplateKPIConditionalFormatting {
  ConditionalFormattingOptions?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.KPIConditionalFormattingOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpiconditionalformattingoption.html | AWS::QuickSight::Template.KPIConditionalFormattingOption}
 */
export interface QuickSightTemplateKPIConditionalFormattingOption {
  PrimaryValue?: QuickSightTemplateKPIPrimaryValueConditionalFormatting;
  ActualValue?: QuickSightTemplateKPIActualValueConditionalFormatting;
  ComparisonValue?: QuickSightTemplateKPIComparisonValueConditionalFormatting;
  ProgressBar?: QuickSightTemplateKPIProgressBarConditionalFormatting;
}
/**
 * Type definition for AWS::QuickSight::Template.KPIConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpiconfiguration.html | AWS::QuickSight::Template.KPIConfiguration}
 */
export interface QuickSightTemplateKPIConfiguration {
  SortConfiguration?: QuickSightTemplateKPISortConfiguration;
  KPIOptions?: QuickSightTemplateKPIOptions;
  FieldWells?: QuickSightTemplateKPIFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Template.KPIFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpifieldwells.html | AWS::QuickSight::Template.KPIFieldWells}
 */
export interface QuickSightTemplateKPIFieldWells {
  TargetValues?: any[];
  TrendGroups?: any[];
  Values?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.KPIOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpioptions.html | AWS::QuickSight::Template.KPIOptions}
 */
export interface QuickSightTemplateKPIOptions {
  SecondaryValueFontConfiguration?: QuickSightTemplateFontConfiguration;
  VisualLayoutOptions?: QuickSightTemplateKPIVisualLayoutOptions;
  TrendArrows?: QuickSightTemplateTrendArrowOptions;
  SecondaryValue?: QuickSightTemplateSecondaryValueOptions;
  Comparison?: QuickSightTemplateComparisonConfiguration;
  PrimaryValueDisplayType?: string;
  ProgressBar?: QuickSightTemplateProgressBarOptions;
  PrimaryValueFontConfiguration?: QuickSightTemplateFontConfiguration;
  Sparkline?: QuickSightTemplateKPISparklineOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.KPIPrimaryValueConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpiprimaryvalueconditionalformatting.html | AWS::QuickSight::Template.KPIPrimaryValueConditionalFormatting}
 */
export interface QuickSightTemplateKPIPrimaryValueConditionalFormatting {
  TextColor?: QuickSightTemplateConditionalFormattingColor;
  Icon?: QuickSightTemplateConditionalFormattingIcon;
}
/**
 * Type definition for AWS::QuickSight::Template.KPIProgressBarConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpiprogressbarconditionalformatting.html | AWS::QuickSight::Template.KPIProgressBarConditionalFormatting}
 */
export interface QuickSightTemplateKPIProgressBarConditionalFormatting {
  ForegroundColor?: QuickSightTemplateConditionalFormattingColor;
}
/**
 * Type definition for AWS::QuickSight::Template.KPISortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpisortconfiguration.html | AWS::QuickSight::Template.KPISortConfiguration}
 */
export interface QuickSightTemplateKPISortConfiguration {
  TrendGroupSort?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.KPISparklineOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpisparklineoptions.html | AWS::QuickSight::Template.KPISparklineOptions}
 */
export interface QuickSightTemplateKPISparklineOptions {
  Type: string;
  Color?: string;
  TooltipVisibility?: string;
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.KPIVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpivisual.html | AWS::QuickSight::Template.KPIVisual}
 */
export interface QuickSightTemplateKPIVisual {
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  ConditionalFormatting?: QuickSightTemplateKPIConditionalFormatting;
  VisualId: string;
  ChartConfiguration?: QuickSightTemplateKPIConfiguration;
  Actions?: any[];
  Title?: QuickSightTemplateVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.KPIVisualLayoutOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpivisuallayoutoptions.html | AWS::QuickSight::Template.KPIVisualLayoutOptions}
 */
export interface QuickSightTemplateKPIVisualLayoutOptions {
  StandardLayout?: QuickSightTemplateKPIVisualStandardLayout;
}
/**
 * Type definition for AWS::QuickSight::Template.KPIVisualStandardLayout
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpivisualstandardlayout.html | AWS::QuickSight::Template.KPIVisualStandardLayout}
 */
export interface QuickSightTemplateKPIVisualStandardLayout {
  Type: string;
}
/**
 * Type definition for AWS::QuickSight::Template.LabelOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-labeloptions.html | AWS::QuickSight::Template.LabelOptions}
 */
export interface QuickSightTemplateLabelOptions {
  CustomLabel?: string;
  Visibility?: string;
  FontConfiguration?: QuickSightTemplateFontConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.Layout
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-layout.html | AWS::QuickSight::Template.Layout}
 */
export interface QuickSightTemplateLayout {
  Configuration: QuickSightTemplateLayoutConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.LayoutConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-layoutconfiguration.html | AWS::QuickSight::Template.LayoutConfiguration}
 */
export interface QuickSightTemplateLayoutConfiguration {
  GridLayout?: QuickSightTemplateGridLayoutConfiguration;
  FreeFormLayout?: QuickSightTemplateFreeFormLayoutConfiguration;
  SectionBasedLayout?: QuickSightTemplateSectionBasedLayoutConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.LegendOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-legendoptions.html | AWS::QuickSight::Template.LegendOptions}
 */
export interface QuickSightTemplateLegendOptions {
  Position?: string;
  Title?: QuickSightTemplateLabelOptions;
  Visibility?: string;
  Height?: string;
  Width?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.LineChartAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-linechartaggregatedfieldwells.html | AWS::QuickSight::Template.LineChartAggregatedFieldWells}
 */
export interface QuickSightTemplateLineChartAggregatedFieldWells {
  Category?: any[];
  Colors?: any[];
  Values?: any[];
  SmallMultiples?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.LineChartConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-linechartconfiguration.html | AWS::QuickSight::Template.LineChartConfiguration}
 */
export interface QuickSightTemplateLineChartConfiguration {
  SortConfiguration?: QuickSightTemplateLineChartSortConfiguration;
  Legend?: QuickSightTemplateLegendOptions;
  ReferenceLines?: any[];
  DataLabels?: QuickSightTemplateDataLabelOptions;
  Tooltip?: QuickSightTemplateTooltipOptions;
  SmallMultiplesOptions?: QuickSightTemplateSmallMultiplesOptions;
  PrimaryYAxisDisplayOptions?: QuickSightTemplateLineSeriesAxisDisplayOptions;
  VisualPalette?: QuickSightTemplateVisualPalette;
  XAxisDisplayOptions?: QuickSightTemplateAxisDisplayOptions;
  DefaultSeriesSettings?: QuickSightTemplateLineChartDefaultSeriesSettings;
  SecondaryYAxisLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  ForecastConfigurations?: any[];
  Series?: any[];
  Type?: string;
  PrimaryYAxisLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  ContributionAnalysisDefaults?: any[];
  FieldWells?: QuickSightTemplateLineChartFieldWells;
  SecondaryYAxisDisplayOptions?: QuickSightTemplateLineSeriesAxisDisplayOptions;
  XAxisLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.LineChartDefaultSeriesSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-linechartdefaultseriessettings.html | AWS::QuickSight::Template.LineChartDefaultSeriesSettings}
 */
export interface QuickSightTemplateLineChartDefaultSeriesSettings {
  LineStyleSettings?: QuickSightTemplateLineChartLineStyleSettings;
  AxisBinding?: string;
  MarkerStyleSettings?: QuickSightTemplateLineChartMarkerStyleSettings;
}
/**
 * Type definition for AWS::QuickSight::Template.LineChartFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-linechartfieldwells.html | AWS::QuickSight::Template.LineChartFieldWells}
 */
export interface QuickSightTemplateLineChartFieldWells {
  LineChartAggregatedFieldWells?: QuickSightTemplateLineChartAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Template.LineChartLineStyleSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-linechartlinestylesettings.html | AWS::QuickSight::Template.LineChartLineStyleSettings}
 */
export interface QuickSightTemplateLineChartLineStyleSettings {
  LineInterpolation?: string;
  LineStyle?: string;
  LineVisibility?: string;
  LineWidth?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.LineChartMarkerStyleSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-linechartmarkerstylesettings.html | AWS::QuickSight::Template.LineChartMarkerStyleSettings}
 */
export interface QuickSightTemplateLineChartMarkerStyleSettings {
  MarkerShape?: string;
  MarkerSize?: string;
  MarkerVisibility?: string;
  MarkerColor?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.LineChartSeriesSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-linechartseriessettings.html | AWS::QuickSight::Template.LineChartSeriesSettings}
 */
export interface QuickSightTemplateLineChartSeriesSettings {
  LineStyleSettings?: QuickSightTemplateLineChartLineStyleSettings;
  MarkerStyleSettings?: QuickSightTemplateLineChartMarkerStyleSettings;
}
/**
 * Type definition for AWS::QuickSight::Template.LineChartSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-linechartsortconfiguration.html | AWS::QuickSight::Template.LineChartSortConfiguration}
 */
export interface QuickSightTemplateLineChartSortConfiguration {
  CategoryItemsLimitConfiguration?: QuickSightTemplateItemsLimitConfiguration;
  ColorItemsLimitConfiguration?: QuickSightTemplateItemsLimitConfiguration;
  SmallMultiplesSort?: any[];
  CategorySort?: any[];
  SmallMultiplesLimitConfiguration?: QuickSightTemplateItemsLimitConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.LineChartVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-linechartvisual.html | AWS::QuickSight::Template.LineChartVisual}
 */
export interface QuickSightTemplateLineChartVisual {
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightTemplateLineChartConfiguration;
  Actions?: any[];
  Title?: QuickSightTemplateVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.LineSeriesAxisDisplayOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-lineseriesaxisdisplayoptions.html | AWS::QuickSight::Template.LineSeriesAxisDisplayOptions}
 */
export interface QuickSightTemplateLineSeriesAxisDisplayOptions {
  MissingDataConfigurations?: any[];
  AxisOptions?: QuickSightTemplateAxisDisplayOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.ListControlDisplayOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-listcontroldisplayoptions.html | AWS::QuickSight::Template.ListControlDisplayOptions}
 */
export interface QuickSightTemplateListControlDisplayOptions {
  TitleOptions?: QuickSightTemplateLabelOptions;
  SearchOptions?: QuickSightTemplateListControlSearchOptions;
  SelectAllOptions?: QuickSightTemplateListControlSelectAllOptions;
  InfoIconLabelOptions?: QuickSightTemplateSheetControlInfoIconLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.ListControlSearchOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-listcontrolsearchoptions.html | AWS::QuickSight::Template.ListControlSearchOptions}
 */
export interface QuickSightTemplateListControlSearchOptions {
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.ListControlSelectAllOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-listcontrolselectalloptions.html | AWS::QuickSight::Template.ListControlSelectAllOptions}
 */
export interface QuickSightTemplateListControlSelectAllOptions {
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.LoadingAnimation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-loadinganimation.html | AWS::QuickSight::Template.LoadingAnimation}
 */
export interface QuickSightTemplateLoadingAnimation {
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.LocalNavigationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-localnavigationconfiguration.html | AWS::QuickSight::Template.LocalNavigationConfiguration}
 */
export interface QuickSightTemplateLocalNavigationConfiguration {
  TargetSheetId: string;
}
/**
 * Type definition for AWS::QuickSight::Template.LongFormatText
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-longformattext.html | AWS::QuickSight::Template.LongFormatText}
 */
export interface QuickSightTemplateLongFormatText {
  RichText?: string;
  PlainText?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.MappedDataSetParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-mappeddatasetparameter.html | AWS::QuickSight::Template.MappedDataSetParameter}
 */
export interface QuickSightTemplateMappedDataSetParameter {
  DataSetParameterName: string;
  DataSetIdentifier: string;
}
/**
 * Type definition for AWS::QuickSight::Template.MaximumLabelType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-maximumlabeltype.html | AWS::QuickSight::Template.MaximumLabelType}
 */
export interface QuickSightTemplateMaximumLabelType {
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.MaximumMinimumComputation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-maximumminimumcomputation.html | AWS::QuickSight::Template.MaximumMinimumComputation}
 */
export interface QuickSightTemplateMaximumMinimumComputation {
  Type: string;
  Value?: QuickSightTemplateMeasureField;
  Time?: QuickSightTemplateDimensionField;
  ComputationId: string;
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.MeasureField
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-measurefield.html | AWS::QuickSight::Template.MeasureField}
 */
export interface QuickSightTemplateMeasureField {
  DateMeasureField?: QuickSightTemplateDateMeasureField;
  NumericalMeasureField?: QuickSightTemplateNumericalMeasureField;
  CategoricalMeasureField?: QuickSightTemplateCategoricalMeasureField;
  CalculatedMeasureField?: QuickSightTemplateCalculatedMeasureField;
}
/**
 * Type definition for AWS::QuickSight::Template.MetricComparisonComputation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-metriccomparisoncomputation.html | AWS::QuickSight::Template.MetricComparisonComputation}
 */
export interface QuickSightTemplateMetricComparisonComputation {
  TargetValue?: QuickSightTemplateMeasureField;
  Time?: QuickSightTemplateDimensionField;
  ComputationId: string;
  FromValue?: QuickSightTemplateMeasureField;
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.MinimumLabelType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-minimumlabeltype.html | AWS::QuickSight::Template.MinimumLabelType}
 */
export interface QuickSightTemplateMinimumLabelType {
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.MissingDataConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-missingdataconfiguration.html | AWS::QuickSight::Template.MissingDataConfiguration}
 */
export interface QuickSightTemplateMissingDataConfiguration {
  TreatmentOption?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.NegativeValueConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-negativevalueconfiguration.html | AWS::QuickSight::Template.NegativeValueConfiguration}
 */
export interface QuickSightTemplateNegativeValueConfiguration {
  DisplayMode: string;
}
/**
 * Type definition for AWS::QuickSight::Template.NullValueFormatConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-nullvalueformatconfiguration.html | AWS::QuickSight::Template.NullValueFormatConfiguration}
 */
export interface QuickSightTemplateNullValueFormatConfiguration {
  NullString: string;
}
/**
 * Type definition for AWS::QuickSight::Template.NumberDisplayFormatConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numberdisplayformatconfiguration.html | AWS::QuickSight::Template.NumberDisplayFormatConfiguration}
 */
export interface QuickSightTemplateNumberDisplayFormatConfiguration {
  NegativeValueConfiguration?: QuickSightTemplateNegativeValueConfiguration;
  DecimalPlacesConfiguration?: QuickSightTemplateDecimalPlacesConfiguration;
  NumberScale?: string;
  NullValueFormatConfiguration?: QuickSightTemplateNullValueFormatConfiguration;
  Suffix?: string;
  SeparatorConfiguration?: QuickSightTemplateNumericSeparatorConfiguration;
  Prefix?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.NumberFormatConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numberformatconfiguration.html | AWS::QuickSight::Template.NumberFormatConfiguration}
 */
export interface QuickSightTemplateNumberFormatConfiguration {
  FormatConfiguration?: QuickSightTemplateNumericFormatConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.NumericAxisOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numericaxisoptions.html | AWS::QuickSight::Template.NumericAxisOptions}
 */
export interface QuickSightTemplateNumericAxisOptions {
  Scale?: QuickSightTemplateAxisScale;
  Range?: QuickSightTemplateAxisDisplayRange;
}
/**
 * Type definition for AWS::QuickSight::Template.NumericEqualityDrillDownFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numericequalitydrilldownfilter.html | AWS::QuickSight::Template.NumericEqualityDrillDownFilter}
 */
export interface QuickSightTemplateNumericEqualityDrillDownFilter {
  Column: QuickSightTemplateColumnIdentifier;
  Value: number;
}
/**
 * Type definition for AWS::QuickSight::Template.NumericEqualityFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numericequalityfilter.html | AWS::QuickSight::Template.NumericEqualityFilter}
 */
export interface QuickSightTemplateNumericEqualityFilter {
  AggregationFunction?: QuickSightTemplateAggregationFunction;
  Column: QuickSightTemplateColumnIdentifier;
  Value?: number;
  ParameterName?: string;
  NullOption: string;
  MatchOperator: string;
  SelectAllOptions?: string;
  FilterId: string;
}
/**
 * Type definition for AWS::QuickSight::Template.NumericFormatConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numericformatconfiguration.html | AWS::QuickSight::Template.NumericFormatConfiguration}
 */
export interface QuickSightTemplateNumericFormatConfiguration {
  NumberDisplayFormatConfiguration?: QuickSightTemplateNumberDisplayFormatConfiguration;
  CurrencyDisplayFormatConfiguration?: QuickSightTemplateCurrencyDisplayFormatConfiguration;
  PercentageDisplayFormatConfiguration?: QuickSightTemplatePercentageDisplayFormatConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.NumericRangeFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numericrangefilter.html | AWS::QuickSight::Template.NumericRangeFilter}
 */
export interface QuickSightTemplateNumericRangeFilter {
  AggregationFunction?: QuickSightTemplateAggregationFunction;
  Column: QuickSightTemplateColumnIdentifier;
  IncludeMaximum?: boolean;
  RangeMinimum?: QuickSightTemplateNumericRangeFilterValue;
  NullOption: string;
  SelectAllOptions?: string;
  FilterId: string;
  RangeMaximum?: QuickSightTemplateNumericRangeFilterValue;
  IncludeMinimum?: boolean;
}
/**
 * Type definition for AWS::QuickSight::Template.NumericRangeFilterValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numericrangefiltervalue.html | AWS::QuickSight::Template.NumericRangeFilterValue}
 */
export interface QuickSightTemplateNumericRangeFilterValue {
  StaticValue?: number;
  Parameter?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.NumericSeparatorConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numericseparatorconfiguration.html | AWS::QuickSight::Template.NumericSeparatorConfiguration}
 */
export interface QuickSightTemplateNumericSeparatorConfiguration {
  DecimalSeparator?: string;
  ThousandsSeparator?: QuickSightTemplateThousandSeparatorOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.NumericalAggregationFunction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numericalaggregationfunction.html | AWS::QuickSight::Template.NumericalAggregationFunction}
 */
export interface QuickSightTemplateNumericalAggregationFunction {
  PercentileAggregation?: QuickSightTemplatePercentileAggregation;
  SimpleNumericalAggregation?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.NumericalDimensionField
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numericaldimensionfield.html | AWS::QuickSight::Template.NumericalDimensionField}
 */
export interface QuickSightTemplateNumericalDimensionField {
  HierarchyId?: string;
  FormatConfiguration?: QuickSightTemplateNumberFormatConfiguration;
  Column: QuickSightTemplateColumnIdentifier;
  FieldId: string;
}
/**
 * Type definition for AWS::QuickSight::Template.NumericalMeasureField
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numericalmeasurefield.html | AWS::QuickSight::Template.NumericalMeasureField}
 */
export interface QuickSightTemplateNumericalMeasureField {
  AggregationFunction?: QuickSightTemplateNumericalAggregationFunction;
  FormatConfiguration?: QuickSightTemplateNumberFormatConfiguration;
  Column: QuickSightTemplateColumnIdentifier;
  FieldId: string;
}
/**
 * Type definition for AWS::QuickSight::Template.PaginationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-paginationconfiguration.html | AWS::QuickSight::Template.PaginationConfiguration}
 */
export interface QuickSightTemplatePaginationConfiguration {
  PageSize: number;
  PageNumber: number;
}
/**
 * Type definition for AWS::QuickSight::Template.PanelConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-panelconfiguration.html | AWS::QuickSight::Template.PanelConfiguration}
 */
export interface QuickSightTemplatePanelConfiguration {
  BorderThickness?: string;
  BorderStyle?: string;
  GutterSpacing?: string;
  BackgroundVisibility?: string;
  BorderVisibility?: string;
  BorderColor?: string;
  Title?: QuickSightTemplatePanelTitleOptions;
  GutterVisibility?: string;
  BackgroundColor?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.PanelTitleOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-paneltitleoptions.html | AWS::QuickSight::Template.PanelTitleOptions}
 */
export interface QuickSightTemplatePanelTitleOptions {
  Visibility?: string;
  FontConfiguration?: QuickSightTemplateFontConfiguration;
  HorizontalTextAlignment?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.ParameterControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-parametercontrol.html | AWS::QuickSight::Template.ParameterControl}
 */
export interface QuickSightTemplateParameterControl {
  Slider?: QuickSightTemplateParameterSliderControl;
  TextArea?: QuickSightTemplateParameterTextAreaControl;
  Dropdown?: QuickSightTemplateParameterDropDownControl;
  TextField?: QuickSightTemplateParameterTextFieldControl;
  List?: QuickSightTemplateParameterListControl;
  DateTimePicker?: QuickSightTemplateParameterDateTimePickerControl;
}
/**
 * Type definition for AWS::QuickSight::Template.ParameterDateTimePickerControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-parameterdatetimepickercontrol.html | AWS::QuickSight::Template.ParameterDateTimePickerControl}
 */
export interface QuickSightTemplateParameterDateTimePickerControl {
  ParameterControlId: string;
  DisplayOptions?: QuickSightTemplateDateTimePickerControlDisplayOptions;
  SourceParameterName: string;
  Title: string;
}
/**
 * Type definition for AWS::QuickSight::Template.ParameterDeclaration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-parameterdeclaration.html | AWS::QuickSight::Template.ParameterDeclaration}
 */
export interface QuickSightTemplateParameterDeclaration {
  StringParameterDeclaration?: QuickSightTemplateStringParameterDeclaration;
  DateTimeParameterDeclaration?: QuickSightTemplateDateTimeParameterDeclaration;
  DecimalParameterDeclaration?: QuickSightTemplateDecimalParameterDeclaration;
  IntegerParameterDeclaration?: QuickSightTemplateIntegerParameterDeclaration;
}
/**
 * Type definition for AWS::QuickSight::Template.ParameterDropDownControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-parameterdropdowncontrol.html | AWS::QuickSight::Template.ParameterDropDownControl}
 */
export interface QuickSightTemplateParameterDropDownControl {
  ParameterControlId: string;
  Type?: string;
  DisplayOptions?: QuickSightTemplateDropDownControlDisplayOptions;
  SourceParameterName: string;
  CascadingControlConfiguration?: QuickSightTemplateCascadingControlConfiguration;
  Title: string;
  SelectableValues?: QuickSightTemplateParameterSelectableValues;
}
/**
 * Type definition for AWS::QuickSight::Template.ParameterListControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-parameterlistcontrol.html | AWS::QuickSight::Template.ParameterListControl}
 */
export interface QuickSightTemplateParameterListControl {
  ParameterControlId: string;
  Type?: string;
  DisplayOptions?: QuickSightTemplateListControlDisplayOptions;
  SourceParameterName: string;
  CascadingControlConfiguration?: QuickSightTemplateCascadingControlConfiguration;
  Title: string;
  SelectableValues?: QuickSightTemplateParameterSelectableValues;
}
/**
 * Type definition for AWS::QuickSight::Template.ParameterSelectableValues
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-parameterselectablevalues.html | AWS::QuickSight::Template.ParameterSelectableValues}
 */
export interface QuickSightTemplateParameterSelectableValues {
  LinkToDataSetColumn?: QuickSightTemplateColumnIdentifier;
  Values?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.ParameterSliderControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-parameterslidercontrol.html | AWS::QuickSight::Template.ParameterSliderControl}
 */
export interface QuickSightTemplateParameterSliderControl {
  ParameterControlId: string;
  StepSize: number;
  DisplayOptions?: QuickSightTemplateSliderControlDisplayOptions;
  SourceParameterName: string;
  Title: string;
  MaximumValue: number;
  MinimumValue: number;
}
/**
 * Type definition for AWS::QuickSight::Template.ParameterTextAreaControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-parametertextareacontrol.html | AWS::QuickSight::Template.ParameterTextAreaControl}
 */
export interface QuickSightTemplateParameterTextAreaControl {
  ParameterControlId: string;
  Delimiter?: string;
  DisplayOptions?: QuickSightTemplateTextAreaControlDisplayOptions;
  SourceParameterName: string;
  Title: string;
}
/**
 * Type definition for AWS::QuickSight::Template.ParameterTextFieldControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-parametertextfieldcontrol.html | AWS::QuickSight::Template.ParameterTextFieldControl}
 */
export interface QuickSightTemplateParameterTextFieldControl {
  ParameterControlId: string;
  DisplayOptions?: QuickSightTemplateTextFieldControlDisplayOptions;
  SourceParameterName: string;
  Title: string;
}
/**
 * Type definition for AWS::QuickSight::Template.PercentVisibleRange
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-percentvisiblerange.html | AWS::QuickSight::Template.PercentVisibleRange}
 */
export interface QuickSightTemplatePercentVisibleRange {
  From?: number;
  To?: number;
}
/**
 * Type definition for AWS::QuickSight::Template.PercentageDisplayFormatConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-percentagedisplayformatconfiguration.html | AWS::QuickSight::Template.PercentageDisplayFormatConfiguration}
 */
export interface QuickSightTemplatePercentageDisplayFormatConfiguration {
  NegativeValueConfiguration?: QuickSightTemplateNegativeValueConfiguration;
  DecimalPlacesConfiguration?: QuickSightTemplateDecimalPlacesConfiguration;
  NullValueFormatConfiguration?: QuickSightTemplateNullValueFormatConfiguration;
  Suffix?: string;
  SeparatorConfiguration?: QuickSightTemplateNumericSeparatorConfiguration;
  Prefix?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.PercentileAggregation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-percentileaggregation.html | AWS::QuickSight::Template.PercentileAggregation}
 */
export interface QuickSightTemplatePercentileAggregation {
  PercentileValue?: number;
}
/**
 * Type definition for AWS::QuickSight::Template.PeriodOverPeriodComputation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-periodoverperiodcomputation.html | AWS::QuickSight::Template.PeriodOverPeriodComputation}
 */
export interface QuickSightTemplatePeriodOverPeriodComputation {
  Value?: QuickSightTemplateMeasureField;
  Time?: QuickSightTemplateDimensionField;
  ComputationId: string;
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.PeriodToDateComputation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-periodtodatecomputation.html | AWS::QuickSight::Template.PeriodToDateComputation}
 */
export interface QuickSightTemplatePeriodToDateComputation {
  PeriodTimeGranularity?: string;
  Value?: QuickSightTemplateMeasureField;
  Time?: QuickSightTemplateDimensionField;
  ComputationId: string;
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.PieChartAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-piechartaggregatedfieldwells.html | AWS::QuickSight::Template.PieChartAggregatedFieldWells}
 */
export interface QuickSightTemplatePieChartAggregatedFieldWells {
  Category?: any[];
  Values?: any[];
  SmallMultiples?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.PieChartConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-piechartconfiguration.html | AWS::QuickSight::Template.PieChartConfiguration}
 */
export interface QuickSightTemplatePieChartConfiguration {
  SortConfiguration?: QuickSightTemplatePieChartSortConfiguration;
  Legend?: QuickSightTemplateLegendOptions;
  DataLabels?: QuickSightTemplateDataLabelOptions;
  ContributionAnalysisDefaults?: any[];
  CategoryLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  FieldWells?: QuickSightTemplatePieChartFieldWells;
  Tooltip?: QuickSightTemplateTooltipOptions;
  DonutOptions?: QuickSightTemplateDonutOptions;
  SmallMultiplesOptions?: QuickSightTemplateSmallMultiplesOptions;
  ValueLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  VisualPalette?: QuickSightTemplateVisualPalette;
}
/**
 * Type definition for AWS::QuickSight::Template.PieChartFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-piechartfieldwells.html | AWS::QuickSight::Template.PieChartFieldWells}
 */
export interface QuickSightTemplatePieChartFieldWells {
  PieChartAggregatedFieldWells?: QuickSightTemplatePieChartAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Template.PieChartSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-piechartsortconfiguration.html | AWS::QuickSight::Template.PieChartSortConfiguration}
 */
export interface QuickSightTemplatePieChartSortConfiguration {
  SmallMultiplesSort?: any[];
  CategoryItemsLimit?: QuickSightTemplateItemsLimitConfiguration;
  CategorySort?: any[];
  SmallMultiplesLimitConfiguration?: QuickSightTemplateItemsLimitConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.PieChartVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-piechartvisual.html | AWS::QuickSight::Template.PieChartVisual}
 */
export interface QuickSightTemplatePieChartVisual {
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightTemplatePieChartConfiguration;
  Actions?: any[];
  Title?: QuickSightTemplateVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.PivotFieldSortOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivotfieldsortoptions.html | AWS::QuickSight::Template.PivotFieldSortOptions}
 */
export interface QuickSightTemplatePivotFieldSortOptions {
  SortBy: QuickSightTemplatePivotTableSortBy;
  FieldId: string;
}
/**
 * Type definition for AWS::QuickSight::Template.PivotTableAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottableaggregatedfieldwells.html | AWS::QuickSight::Template.PivotTableAggregatedFieldWells}
 */
export interface QuickSightTemplatePivotTableAggregatedFieldWells {
  Values?: any[];
  Columns?: any[];
  Rows?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.PivotTableCellConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottablecellconditionalformatting.html | AWS::QuickSight::Template.PivotTableCellConditionalFormatting}
 */
export interface QuickSightTemplatePivotTableCellConditionalFormatting {
  Scope?: QuickSightTemplatePivotTableConditionalFormattingScope;
  Scopes?: any[];
  FieldId: string;
  TextFormat?: QuickSightTemplateTextConditionalFormat;
}
/**
 * Type definition for AWS::QuickSight::Template.PivotTableConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottableconditionalformatting.html | AWS::QuickSight::Template.PivotTableConditionalFormatting}
 */
export interface QuickSightTemplatePivotTableConditionalFormatting {
  ConditionalFormattingOptions?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.PivotTableConditionalFormattingOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottableconditionalformattingoption.html | AWS::QuickSight::Template.PivotTableConditionalFormattingOption}
 */
export interface QuickSightTemplatePivotTableConditionalFormattingOption {
  Cell?: QuickSightTemplatePivotTableCellConditionalFormatting;
}
/**
 * Type definition for AWS::QuickSight::Template.PivotTableConditionalFormattingScope
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottableconditionalformattingscope.html | AWS::QuickSight::Template.PivotTableConditionalFormattingScope}
 */
export interface QuickSightTemplatePivotTableConditionalFormattingScope {
  Role?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.PivotTableConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottableconfiguration.html | AWS::QuickSight::Template.PivotTableConfiguration}
 */
export interface QuickSightTemplatePivotTableConfiguration {
  SortConfiguration?: QuickSightTemplatePivotTableSortConfiguration;
  PaginatedReportOptions?: QuickSightTemplatePivotTablePaginatedReportOptions;
  TableOptions?: QuickSightTemplatePivotTableOptions;
  FieldWells?: QuickSightTemplatePivotTableFieldWells;
  FieldOptions?: QuickSightTemplatePivotTableFieldOptions;
  TotalOptions?: QuickSightTemplatePivotTableTotalOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.PivotTableDataPathOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottabledatapathoption.html | AWS::QuickSight::Template.PivotTableDataPathOption}
 */
export interface QuickSightTemplatePivotTableDataPathOption {
  DataPathList: any[];
  Width?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.PivotTableFieldCollapseStateOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottablefieldcollapsestateoption.html | AWS::QuickSight::Template.PivotTableFieldCollapseStateOption}
 */
export interface QuickSightTemplatePivotTableFieldCollapseStateOption {
  Target: QuickSightTemplatePivotTableFieldCollapseStateTarget;
  State?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.PivotTableFieldCollapseStateTarget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottablefieldcollapsestatetarget.html | AWS::QuickSight::Template.PivotTableFieldCollapseStateTarget}
 */
export interface QuickSightTemplatePivotTableFieldCollapseStateTarget {
  FieldId?: string;
  FieldDataPathValues?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.PivotTableFieldOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottablefieldoption.html | AWS::QuickSight::Template.PivotTableFieldOption}
 */
export interface QuickSightTemplatePivotTableFieldOption {
  CustomLabel?: string;
  FieldId: string;
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.PivotTableFieldOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottablefieldoptions.html | AWS::QuickSight::Template.PivotTableFieldOptions}
 */
export interface QuickSightTemplatePivotTableFieldOptions {
  CollapseStateOptions?: any[];
  DataPathOptions?: any[];
  SelectedFieldOptions?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.PivotTableFieldSubtotalOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottablefieldsubtotaloptions.html | AWS::QuickSight::Template.PivotTableFieldSubtotalOptions}
 */
export interface QuickSightTemplatePivotTableFieldSubtotalOptions {
  FieldId?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.PivotTableFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottablefieldwells.html | AWS::QuickSight::Template.PivotTableFieldWells}
 */
export interface QuickSightTemplatePivotTableFieldWells {
  PivotTableAggregatedFieldWells?: QuickSightTemplatePivotTableAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Template.PivotTableOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottableoptions.html | AWS::QuickSight::Template.PivotTableOptions}
 */
export interface QuickSightTemplatePivotTableOptions {
  RowFieldNamesStyle?: QuickSightTemplateTableCellStyle;
  RowHeaderStyle?: QuickSightTemplateTableCellStyle;
  CollapsedRowDimensionsVisibility?: string;
  RowsLayout?: string;
  MetricPlacement?: string;
  DefaultCellWidth?: string;
  ColumnNamesVisibility?: string;
  RowsLabelOptions?: QuickSightTemplatePivotTableRowsLabelOptions;
  SingleMetricVisibility?: string;
  ColumnHeaderStyle?: QuickSightTemplateTableCellStyle;
  ToggleButtonsVisibility?: string;
  CellStyle?: QuickSightTemplateTableCellStyle;
  RowAlternateColorOptions?: QuickSightTemplateRowAlternateColorOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.PivotTablePaginatedReportOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottablepaginatedreportoptions.html | AWS::QuickSight::Template.PivotTablePaginatedReportOptions}
 */
export interface QuickSightTemplatePivotTablePaginatedReportOptions {
  OverflowColumnHeaderVisibility?: string;
  VerticalOverflowVisibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.PivotTableRowsLabelOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottablerowslabeloptions.html | AWS::QuickSight::Template.PivotTableRowsLabelOptions}
 */
export interface QuickSightTemplatePivotTableRowsLabelOptions {
  CustomLabel?: string;
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.PivotTableSortBy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottablesortby.html | AWS::QuickSight::Template.PivotTableSortBy}
 */
export interface QuickSightTemplatePivotTableSortBy {
  Field?: QuickSightTemplateFieldSort;
  DataPath?: QuickSightTemplateDataPathSort;
  Column?: QuickSightTemplateColumnSort;
}
/**
 * Type definition for AWS::QuickSight::Template.PivotTableSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottablesortconfiguration.html | AWS::QuickSight::Template.PivotTableSortConfiguration}
 */
export interface QuickSightTemplatePivotTableSortConfiguration {
  FieldSortOptions?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.PivotTableTotalOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottabletotaloptions.html | AWS::QuickSight::Template.PivotTableTotalOptions}
 */
export interface QuickSightTemplatePivotTableTotalOptions {
  ColumnSubtotalOptions?: QuickSightTemplateSubtotalOptions;
  RowSubtotalOptions?: QuickSightTemplateSubtotalOptions;
  RowTotalOptions?: QuickSightTemplatePivotTotalOptions;
  ColumnTotalOptions?: QuickSightTemplatePivotTotalOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.PivotTableVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottablevisual.html | AWS::QuickSight::Template.PivotTableVisual}
 */
export interface QuickSightTemplatePivotTableVisual {
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  ConditionalFormatting?: QuickSightTemplatePivotTableConditionalFormatting;
  VisualId: string;
  ChartConfiguration?: QuickSightTemplatePivotTableConfiguration;
  Actions?: any[];
  Title?: QuickSightTemplateVisualTitleLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.PivotTotalOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottotaloptions.html | AWS::QuickSight::Template.PivotTotalOptions}
 */
export interface QuickSightTemplatePivotTotalOptions {
  CustomLabel?: string;
  TotalAggregationOptions?: any[];
  ValueCellStyle?: QuickSightTemplateTableCellStyle;
  ScrollStatus?: string;
  Placement?: string;
  TotalCellStyle?: QuickSightTemplateTableCellStyle;
  TotalsVisibility?: string;
  MetricHeaderCellStyle?: QuickSightTemplateTableCellStyle;
}
/**
 * Type definition for AWS::QuickSight::Template.PredefinedHierarchy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-predefinedhierarchy.html | AWS::QuickSight::Template.PredefinedHierarchy}
 */
export interface QuickSightTemplatePredefinedHierarchy {
  HierarchyId: string;
  DrillDownFilters?: any[];
  Columns: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.ProgressBarOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-progressbaroptions.html | AWS::QuickSight::Template.ProgressBarOptions}
 */
export interface QuickSightTemplateProgressBarOptions {
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.RadarChartAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-radarchartaggregatedfieldwells.html | AWS::QuickSight::Template.RadarChartAggregatedFieldWells}
 */
export interface QuickSightTemplateRadarChartAggregatedFieldWells {
  Category?: any[];
  Color?: any[];
  Values?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.RadarChartAreaStyleSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-radarchartareastylesettings.html | AWS::QuickSight::Template.RadarChartAreaStyleSettings}
 */
export interface QuickSightTemplateRadarChartAreaStyleSettings {
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.RadarChartConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-radarchartconfiguration.html | AWS::QuickSight::Template.RadarChartConfiguration}
 */
export interface QuickSightTemplateRadarChartConfiguration {
  SortConfiguration?: QuickSightTemplateRadarChartSortConfiguration;
  Legend?: QuickSightTemplateLegendOptions;
  Shape?: string;
  BaseSeriesSettings?: QuickSightTemplateRadarChartSeriesSettings;
  ColorLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  CategoryLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  AxesRangeScale?: string;
  VisualPalette?: QuickSightTemplateVisualPalette;
  AlternateBandColorsVisibility?: string;
  StartAngle?: number;
  CategoryAxis?: QuickSightTemplateAxisDisplayOptions;
  FieldWells?: QuickSightTemplateRadarChartFieldWells;
  ColorAxis?: QuickSightTemplateAxisDisplayOptions;
  AlternateBandOddColor?: string;
  AlternateBandEvenColor?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.RadarChartFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-radarchartfieldwells.html | AWS::QuickSight::Template.RadarChartFieldWells}
 */
export interface QuickSightTemplateRadarChartFieldWells {
  RadarChartAggregatedFieldWells?: QuickSightTemplateRadarChartAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Template.RadarChartSeriesSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-radarchartseriessettings.html | AWS::QuickSight::Template.RadarChartSeriesSettings}
 */
export interface QuickSightTemplateRadarChartSeriesSettings {
  AreaStyleSettings?: QuickSightTemplateRadarChartAreaStyleSettings;
}
/**
 * Type definition for AWS::QuickSight::Template.RadarChartSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-radarchartsortconfiguration.html | AWS::QuickSight::Template.RadarChartSortConfiguration}
 */
export interface QuickSightTemplateRadarChartSortConfiguration {
  ColorSort?: any[];
  ColorItemsLimit?: QuickSightTemplateItemsLimitConfiguration;
  CategoryItemsLimit?: QuickSightTemplateItemsLimitConfiguration;
  CategorySort?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.RadarChartVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-radarchartvisual.html | AWS::QuickSight::Template.RadarChartVisual}
 */
export interface QuickSightTemplateRadarChartVisual {
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightTemplateRadarChartConfiguration;
  Actions?: any[];
  Title?: QuickSightTemplateVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.RangeEndsLabelType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-rangeendslabeltype.html | AWS::QuickSight::Template.RangeEndsLabelType}
 */
export interface QuickSightTemplateRangeEndsLabelType {
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.ReferenceLine
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-referenceline.html | AWS::QuickSight::Template.ReferenceLine}
 */
export interface QuickSightTemplateReferenceLine {
  Status?: string;
  DataConfiguration: QuickSightTemplateReferenceLineDataConfiguration;
  LabelConfiguration?: QuickSightTemplateReferenceLineLabelConfiguration;
  StyleConfiguration?: QuickSightTemplateReferenceLineStyleConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.ReferenceLineCustomLabelConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-referencelinecustomlabelconfiguration.html | AWS::QuickSight::Template.ReferenceLineCustomLabelConfiguration}
 */
export interface QuickSightTemplateReferenceLineCustomLabelConfiguration {
  CustomLabel: string;
}
/**
 * Type definition for AWS::QuickSight::Template.ReferenceLineDataConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-referencelinedataconfiguration.html | AWS::QuickSight::Template.ReferenceLineDataConfiguration}
 */
export interface QuickSightTemplateReferenceLineDataConfiguration {
  DynamicConfiguration?: QuickSightTemplateReferenceLineDynamicDataConfiguration;
  AxisBinding?: string;
  SeriesType?: string;
  StaticConfiguration?: QuickSightTemplateReferenceLineStaticDataConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.ReferenceLineDynamicDataConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-referencelinedynamicdataconfiguration.html | AWS::QuickSight::Template.ReferenceLineDynamicDataConfiguration}
 */
export interface QuickSightTemplateReferenceLineDynamicDataConfiguration {
  Column: QuickSightTemplateColumnIdentifier;
  MeasureAggregationFunction?: QuickSightTemplateAggregationFunction;
  Calculation: QuickSightTemplateNumericalAggregationFunction;
}
/**
 * Type definition for AWS::QuickSight::Template.ReferenceLineLabelConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-referencelinelabelconfiguration.html | AWS::QuickSight::Template.ReferenceLineLabelConfiguration}
 */
export interface QuickSightTemplateReferenceLineLabelConfiguration {
  HorizontalPosition?: string;
  ValueLabelConfiguration?: QuickSightTemplateReferenceLineValueLabelConfiguration;
  CustomLabelConfiguration?: QuickSightTemplateReferenceLineCustomLabelConfiguration;
  FontColor?: string;
  FontConfiguration?: QuickSightTemplateFontConfiguration;
  VerticalPosition?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.ReferenceLineStaticDataConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-referencelinestaticdataconfiguration.html | AWS::QuickSight::Template.ReferenceLineStaticDataConfiguration}
 */
export interface QuickSightTemplateReferenceLineStaticDataConfiguration {
  Value: number;
}
/**
 * Type definition for AWS::QuickSight::Template.ReferenceLineStyleConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-referencelinestyleconfiguration.html | AWS::QuickSight::Template.ReferenceLineStyleConfiguration}
 */
export interface QuickSightTemplateReferenceLineStyleConfiguration {
  Pattern?: string;
  Color?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.ReferenceLineValueLabelConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-referencelinevaluelabelconfiguration.html | AWS::QuickSight::Template.ReferenceLineValueLabelConfiguration}
 */
export interface QuickSightTemplateReferenceLineValueLabelConfiguration {
  FormatConfiguration?: QuickSightTemplateNumericFormatConfiguration;
  RelativePosition?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.RelativeDateTimeControlDisplayOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-relativedatetimecontroldisplayoptions.html | AWS::QuickSight::Template.RelativeDateTimeControlDisplayOptions}
 */
export interface QuickSightTemplateRelativeDateTimeControlDisplayOptions {
  TitleOptions?: QuickSightTemplateLabelOptions;
  InfoIconLabelOptions?: QuickSightTemplateSheetControlInfoIconLabelOptions;
  DateTimeFormat?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.RelativeDatesFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-relativedatesfilter.html | AWS::QuickSight::Template.RelativeDatesFilter}
 */
export interface QuickSightTemplateRelativeDatesFilter {
  RelativeDateValue?: number;
  Column: QuickSightTemplateColumnIdentifier;
  RelativeDateType: string;
  TimeGranularity: string;
  ParameterName?: string;
  NullOption: string;
  FilterId: string;
  AnchorDateConfiguration: QuickSightTemplateAnchorDateConfiguration;
  MinimumGranularity?: string;
  ExcludePeriodConfiguration?: QuickSightTemplateExcludePeriodConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.ResourcePermission
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-resourcepermission.html | AWS::QuickSight::Template.ResourcePermission}
 */
export interface QuickSightTemplateResourcePermission {
  Actions: any[];
  Resource?: string;
  Principal: string;
}
/**
 * Type definition for AWS::QuickSight::Template.RollingDateConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-rollingdateconfiguration.html | AWS::QuickSight::Template.RollingDateConfiguration}
 */
export interface QuickSightTemplateRollingDateConfiguration {
  Expression: string;
  DataSetIdentifier?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.RowAlternateColorOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-rowalternatecoloroptions.html | AWS::QuickSight::Template.RowAlternateColorOptions}
 */
export interface QuickSightTemplateRowAlternateColorOptions {
  Status?: string;
  UsePrimaryBackgroundColor?: string;
  RowAlternateColors?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.SameSheetTargetVisualConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-samesheettargetvisualconfiguration.html | AWS::QuickSight::Template.SameSheetTargetVisualConfiguration}
 */
export interface QuickSightTemplateSameSheetTargetVisualConfiguration {
  TargetVisualOptions?: string;
  TargetVisuals?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.SankeyDiagramAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sankeydiagramaggregatedfieldwells.html | AWS::QuickSight::Template.SankeyDiagramAggregatedFieldWells}
 */
export interface QuickSightTemplateSankeyDiagramAggregatedFieldWells {
  Destination?: any[];
  Source?: any[];
  Weight?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.SankeyDiagramChartConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sankeydiagramchartconfiguration.html | AWS::QuickSight::Template.SankeyDiagramChartConfiguration}
 */
export interface QuickSightTemplateSankeyDiagramChartConfiguration {
  SortConfiguration?: QuickSightTemplateSankeyDiagramSortConfiguration;
  DataLabels?: QuickSightTemplateDataLabelOptions;
  FieldWells?: QuickSightTemplateSankeyDiagramFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Template.SankeyDiagramFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sankeydiagramfieldwells.html | AWS::QuickSight::Template.SankeyDiagramFieldWells}
 */
export interface QuickSightTemplateSankeyDiagramFieldWells {
  SankeyDiagramAggregatedFieldWells?: QuickSightTemplateSankeyDiagramAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Template.SankeyDiagramSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sankeydiagramsortconfiguration.html | AWS::QuickSight::Template.SankeyDiagramSortConfiguration}
 */
export interface QuickSightTemplateSankeyDiagramSortConfiguration {
  WeightSort?: any[];
  SourceItemsLimit?: QuickSightTemplateItemsLimitConfiguration;
  DestinationItemsLimit?: QuickSightTemplateItemsLimitConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.SankeyDiagramVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sankeydiagramvisual.html | AWS::QuickSight::Template.SankeyDiagramVisual}
 */
export interface QuickSightTemplateSankeyDiagramVisual {
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightTemplateSankeyDiagramChartConfiguration;
  Actions?: any[];
  Title?: QuickSightTemplateVisualTitleLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.ScatterPlotCategoricallyAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-scatterplotcategoricallyaggregatedfieldwells.html | AWS::QuickSight::Template.ScatterPlotCategoricallyAggregatedFieldWells}
 */
export interface QuickSightTemplateScatterPlotCategoricallyAggregatedFieldWells {
  Category?: any[];
  Size?: any[];
  Label?: any[];
  XAxis?: any[];
  YAxis?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.ScatterPlotConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-scatterplotconfiguration.html | AWS::QuickSight::Template.ScatterPlotConfiguration}
 */
export interface QuickSightTemplateScatterPlotConfiguration {
  YAxisLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  Legend?: QuickSightTemplateLegendOptions;
  YAxisDisplayOptions?: QuickSightTemplateAxisDisplayOptions;
  DataLabels?: QuickSightTemplateDataLabelOptions;
  FieldWells?: QuickSightTemplateScatterPlotFieldWells;
  Tooltip?: QuickSightTemplateTooltipOptions;
  XAxisLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  VisualPalette?: QuickSightTemplateVisualPalette;
  XAxisDisplayOptions?: QuickSightTemplateAxisDisplayOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.ScatterPlotFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-scatterplotfieldwells.html | AWS::QuickSight::Template.ScatterPlotFieldWells}
 */
export interface QuickSightTemplateScatterPlotFieldWells {
  ScatterPlotUnaggregatedFieldWells?: QuickSightTemplateScatterPlotUnaggregatedFieldWells;
  ScatterPlotCategoricallyAggregatedFieldWells?: QuickSightTemplateScatterPlotCategoricallyAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Template.ScatterPlotUnaggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-scatterplotunaggregatedfieldwells.html | AWS::QuickSight::Template.ScatterPlotUnaggregatedFieldWells}
 */
export interface QuickSightTemplateScatterPlotUnaggregatedFieldWells {
  Category?: any[];
  Size?: any[];
  Label?: any[];
  XAxis?: any[];
  YAxis?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.ScatterPlotVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-scatterplotvisual.html | AWS::QuickSight::Template.ScatterPlotVisual}
 */
export interface QuickSightTemplateScatterPlotVisual {
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightTemplateScatterPlotConfiguration;
  Actions?: any[];
  Title?: QuickSightTemplateVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.ScrollBarOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-scrollbaroptions.html | AWS::QuickSight::Template.ScrollBarOptions}
 */
export interface QuickSightTemplateScrollBarOptions {
  VisibleRange?: QuickSightTemplateVisibleRangeOptions;
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.SecondaryValueOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-secondaryvalueoptions.html | AWS::QuickSight::Template.SecondaryValueOptions}
 */
export interface QuickSightTemplateSecondaryValueOptions {
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.SectionAfterPageBreak
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sectionafterpagebreak.html | AWS::QuickSight::Template.SectionAfterPageBreak}
 */
export interface QuickSightTemplateSectionAfterPageBreak {
  Status?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.SectionBasedLayoutCanvasSizeOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sectionbasedlayoutcanvassizeoptions.html | AWS::QuickSight::Template.SectionBasedLayoutCanvasSizeOptions}
 */
export interface QuickSightTemplateSectionBasedLayoutCanvasSizeOptions {
  PaperCanvasSizeOptions?: QuickSightTemplateSectionBasedLayoutPaperCanvasSizeOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.SectionBasedLayoutConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sectionbasedlayoutconfiguration.html | AWS::QuickSight::Template.SectionBasedLayoutConfiguration}
 */
export interface QuickSightTemplateSectionBasedLayoutConfiguration {
  CanvasSizeOptions: QuickSightTemplateSectionBasedLayoutCanvasSizeOptions;
  FooterSections: any[];
  BodySections: any[];
  HeaderSections: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.SectionBasedLayoutPaperCanvasSizeOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sectionbasedlayoutpapercanvassizeoptions.html | AWS::QuickSight::Template.SectionBasedLayoutPaperCanvasSizeOptions}
 */
export interface QuickSightTemplateSectionBasedLayoutPaperCanvasSizeOptions {
  PaperMargin?: QuickSightTemplateSpacing;
  PaperSize?: string;
  PaperOrientation?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.SectionLayoutConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sectionlayoutconfiguration.html | AWS::QuickSight::Template.SectionLayoutConfiguration}
 */
export interface QuickSightTemplateSectionLayoutConfiguration {
  FreeFormLayout: QuickSightTemplateFreeFormSectionLayoutConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.SectionPageBreakConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sectionpagebreakconfiguration.html | AWS::QuickSight::Template.SectionPageBreakConfiguration}
 */
export interface QuickSightTemplateSectionPageBreakConfiguration {
  After?: QuickSightTemplateSectionAfterPageBreak;
}
/**
 * Type definition for AWS::QuickSight::Template.SectionStyle
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sectionstyle.html | AWS::QuickSight::Template.SectionStyle}
 */
export interface QuickSightTemplateSectionStyle {
  Padding?: QuickSightTemplateSpacing;
  Height?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.SelectedSheetsFilterScopeConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-selectedsheetsfilterscopeconfiguration.html | AWS::QuickSight::Template.SelectedSheetsFilterScopeConfiguration}
 */
export interface QuickSightTemplateSelectedSheetsFilterScopeConfiguration {
  SheetVisualScopingConfigurations?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.SeriesItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-seriesitem.html | AWS::QuickSight::Template.SeriesItem}
 */
export interface QuickSightTemplateSeriesItem {
  FieldSeriesItem?: QuickSightTemplateFieldSeriesItem;
  DataFieldSeriesItem?: QuickSightTemplateDataFieldSeriesItem;
}
/**
 * Type definition for AWS::QuickSight::Template.SetParameterValueConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-setparametervalueconfiguration.html | AWS::QuickSight::Template.SetParameterValueConfiguration}
 */
export interface QuickSightTemplateSetParameterValueConfiguration {
  DestinationParameterName: string;
  Value: QuickSightTemplateDestinationParameterValueConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.ShapeConditionalFormat
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-shapeconditionalformat.html | AWS::QuickSight::Template.ShapeConditionalFormat}
 */
export interface QuickSightTemplateShapeConditionalFormat {
  BackgroundColor: QuickSightTemplateConditionalFormattingColor;
}
/**
 * Type definition for AWS::QuickSight::Template.Sheet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sheet.html | AWS::QuickSight::Template.Sheet}
 */
export interface QuickSightTemplateSheet {
  SheetId?: string;
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.SheetControlInfoIconLabelOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sheetcontrolinfoiconlabeloptions.html | AWS::QuickSight::Template.SheetControlInfoIconLabelOptions}
 */
export interface QuickSightTemplateSheetControlInfoIconLabelOptions {
  Visibility?: string;
  InfoIconText?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.SheetControlLayout
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sheetcontrollayout.html | AWS::QuickSight::Template.SheetControlLayout}
 */
export interface QuickSightTemplateSheetControlLayout {
  Configuration: QuickSightTemplateSheetControlLayoutConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.SheetControlLayoutConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sheetcontrollayoutconfiguration.html | AWS::QuickSight::Template.SheetControlLayoutConfiguration}
 */
export interface QuickSightTemplateSheetControlLayoutConfiguration {
  GridLayout?: QuickSightTemplateGridLayoutConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.SheetDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sheetdefinition.html | AWS::QuickSight::Template.SheetDefinition}
 */
export interface QuickSightTemplateSheetDefinition {
  Description?: string;
  ParameterControls?: any[];
  TextBoxes?: any[];
  Layouts?: any[];
  ContentType?: string;
  SheetId: string;
  FilterControls?: any[];
  SheetControlLayouts?: any[];
  Title?: string;
  Visuals?: any[];
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.SheetElementConfigurationOverrides
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sheetelementconfigurationoverrides.html | AWS::QuickSight::Template.SheetElementConfigurationOverrides}
 */
export interface QuickSightTemplateSheetElementConfigurationOverrides {
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.SheetElementRenderingRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sheetelementrenderingrule.html | AWS::QuickSight::Template.SheetElementRenderingRule}
 */
export interface QuickSightTemplateSheetElementRenderingRule {
  Expression: string;
  ConfigurationOverrides: QuickSightTemplateSheetElementConfigurationOverrides;
}
/**
 * Type definition for AWS::QuickSight::Template.SheetTextBox
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sheettextbox.html | AWS::QuickSight::Template.SheetTextBox}
 */
export interface QuickSightTemplateSheetTextBox {
  SheetTextBoxId: string;
  Content?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.SheetVisualScopingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sheetvisualscopingconfiguration.html | AWS::QuickSight::Template.SheetVisualScopingConfiguration}
 */
export interface QuickSightTemplateSheetVisualScopingConfiguration {
  Scope: string;
  SheetId: string;
  VisualIds?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.ShortFormatText
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-shortformattext.html | AWS::QuickSight::Template.ShortFormatText}
 */
export interface QuickSightTemplateShortFormatText {
  RichText?: string;
  PlainText?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.SimpleClusterMarker
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-simpleclustermarker.html | AWS::QuickSight::Template.SimpleClusterMarker}
 */
export interface QuickSightTemplateSimpleClusterMarker {
  Color?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.SliderControlDisplayOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-slidercontroldisplayoptions.html | AWS::QuickSight::Template.SliderControlDisplayOptions}
 */
export interface QuickSightTemplateSliderControlDisplayOptions {
  TitleOptions?: QuickSightTemplateLabelOptions;
  InfoIconLabelOptions?: QuickSightTemplateSheetControlInfoIconLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.SmallMultiplesAxisProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-smallmultiplesaxisproperties.html | AWS::QuickSight::Template.SmallMultiplesAxisProperties}
 */
export interface QuickSightTemplateSmallMultiplesAxisProperties {
  Placement?: string;
  Scale?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.SmallMultiplesOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-smallmultiplesoptions.html | AWS::QuickSight::Template.SmallMultiplesOptions}
 */
export interface QuickSightTemplateSmallMultiplesOptions {
  MaxVisibleRows?: number;
  PanelConfiguration?: QuickSightTemplatePanelConfiguration;
  MaxVisibleColumns?: number;
  XAxis?: QuickSightTemplateSmallMultiplesAxisProperties;
  YAxis?: QuickSightTemplateSmallMultiplesAxisProperties;
}
/**
 * Type definition for AWS::QuickSight::Template.Spacing
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-spacing.html | AWS::QuickSight::Template.Spacing}
 */
export interface QuickSightTemplateSpacing {
  Left?: string;
  Top?: string;
  Right?: string;
  Bottom?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.StringDefaultValues
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-stringdefaultvalues.html | AWS::QuickSight::Template.StringDefaultValues}
 */
export interface QuickSightTemplateStringDefaultValues {
  DynamicValue?: QuickSightTemplateDynamicDefaultValue;
  StaticValues?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.StringFormatConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-stringformatconfiguration.html | AWS::QuickSight::Template.StringFormatConfiguration}
 */
export interface QuickSightTemplateStringFormatConfiguration {
  NumericFormatConfiguration?: QuickSightTemplateNumericFormatConfiguration;
  NullValueFormatConfiguration?: QuickSightTemplateNullValueFormatConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.StringParameterDeclaration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-stringparameterdeclaration.html | AWS::QuickSight::Template.StringParameterDeclaration}
 */
export interface QuickSightTemplateStringParameterDeclaration {
  MappedDataSetParameters?: any[];
  DefaultValues?: QuickSightTemplateStringDefaultValues;
  ParameterValueType: string;
  ValueWhenUnset?: QuickSightTemplateStringValueWhenUnsetConfiguration;
  Name: string;
}
/**
 * Type definition for AWS::QuickSight::Template.StringValueWhenUnsetConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-stringvaluewhenunsetconfiguration.html | AWS::QuickSight::Template.StringValueWhenUnsetConfiguration}
 */
export interface QuickSightTemplateStringValueWhenUnsetConfiguration {
  ValueWhenUnsetOption?: string;
  CustomValue?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.SubtotalOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-subtotaloptions.html | AWS::QuickSight::Template.SubtotalOptions}
 */
export interface QuickSightTemplateSubtotalOptions {
  CustomLabel?: string;
  FieldLevelOptions?: any[];
  ValueCellStyle?: QuickSightTemplateTableCellStyle;
  TotalCellStyle?: QuickSightTemplateTableCellStyle;
  TotalsVisibility?: string;
  FieldLevel?: string;
  MetricHeaderCellStyle?: QuickSightTemplateTableCellStyle;
  StyleTargets?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.TableAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tableaggregatedfieldwells.html | AWS::QuickSight::Template.TableAggregatedFieldWells}
 */
export interface QuickSightTemplateTableAggregatedFieldWells {
  GroupBy?: any[];
  Values?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.TableBorderOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tableborderoptions.html | AWS::QuickSight::Template.TableBorderOptions}
 */
export interface QuickSightTemplateTableBorderOptions {
  Thickness?: number;
  Color?: string;
  Style?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.TableCellConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablecellconditionalformatting.html | AWS::QuickSight::Template.TableCellConditionalFormatting}
 */
export interface QuickSightTemplateTableCellConditionalFormatting {
  FieldId: string;
  TextFormat?: QuickSightTemplateTextConditionalFormat;
}
/**
 * Type definition for AWS::QuickSight::Template.TableCellImageSizingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablecellimagesizingconfiguration.html | AWS::QuickSight::Template.TableCellImageSizingConfiguration}
 */
export interface QuickSightTemplateTableCellImageSizingConfiguration {
  TableCellImageScalingConfiguration?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.TableCellStyle
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablecellstyle.html | AWS::QuickSight::Template.TableCellStyle}
 */
export interface QuickSightTemplateTableCellStyle {
  VerticalTextAlignment?: string;
  Visibility?: string;
  Height?: number;
  FontConfiguration?: QuickSightTemplateFontConfiguration;
  Border?: QuickSightTemplateGlobalTableBorderOptions;
  TextWrap?: string;
  HorizontalTextAlignment?: string;
  BackgroundColor?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.TableConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tableconditionalformatting.html | AWS::QuickSight::Template.TableConditionalFormatting}
 */
export interface QuickSightTemplateTableConditionalFormatting {
  ConditionalFormattingOptions?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.TableConditionalFormattingOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tableconditionalformattingoption.html | AWS::QuickSight::Template.TableConditionalFormattingOption}
 */
export interface QuickSightTemplateTableConditionalFormattingOption {
  Row?: QuickSightTemplateTableRowConditionalFormatting;
  Cell?: QuickSightTemplateTableCellConditionalFormatting;
}
/**
 * Type definition for AWS::QuickSight::Template.TableConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tableconfiguration.html | AWS::QuickSight::Template.TableConfiguration}
 */
export interface QuickSightTemplateTableConfiguration {
  SortConfiguration?: QuickSightTemplateTableSortConfiguration;
  PaginatedReportOptions?: QuickSightTemplateTablePaginatedReportOptions;
  TableOptions?: QuickSightTemplateTableOptions;
  TableInlineVisualizations?: any[];
  FieldWells?: QuickSightTemplateTableFieldWells;
  FieldOptions?: QuickSightTemplateTableFieldOptions;
  TotalOptions?: QuickSightTemplateTotalOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.TableFieldCustomIconContent
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablefieldcustomiconcontent.html | AWS::QuickSight::Template.TableFieldCustomIconContent}
 */
export interface QuickSightTemplateTableFieldCustomIconContent {
  Icon?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.TableFieldCustomTextContent
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablefieldcustomtextcontent.html | AWS::QuickSight::Template.TableFieldCustomTextContent}
 */
export interface QuickSightTemplateTableFieldCustomTextContent {
  Value?: string;
  FontConfiguration: QuickSightTemplateFontConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.TableFieldImageConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablefieldimageconfiguration.html | AWS::QuickSight::Template.TableFieldImageConfiguration}
 */
export interface QuickSightTemplateTableFieldImageConfiguration {
  SizingOptions?: QuickSightTemplateTableCellImageSizingConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.TableFieldLinkConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablefieldlinkconfiguration.html | AWS::QuickSight::Template.TableFieldLinkConfiguration}
 */
export interface QuickSightTemplateTableFieldLinkConfiguration {
  Target: string;
  Content: QuickSightTemplateTableFieldLinkContentConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.TableFieldLinkContentConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablefieldlinkcontentconfiguration.html | AWS::QuickSight::Template.TableFieldLinkContentConfiguration}
 */
export interface QuickSightTemplateTableFieldLinkContentConfiguration {
  CustomIconContent?: QuickSightTemplateTableFieldCustomIconContent;
  CustomTextContent?: QuickSightTemplateTableFieldCustomTextContent;
}
/**
 * Type definition for AWS::QuickSight::Template.TableFieldOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablefieldoption.html | AWS::QuickSight::Template.TableFieldOption}
 */
export interface QuickSightTemplateTableFieldOption {
  CustomLabel?: string;
  URLStyling?: QuickSightTemplateTableFieldURLConfiguration;
  FieldId: string;
  Visibility?: string;
  Width?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.TableFieldOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablefieldoptions.html | AWS::QuickSight::Template.TableFieldOptions}
 */
export interface QuickSightTemplateTableFieldOptions {
  Order?: any[];
  PinnedFieldOptions?: QuickSightTemplateTablePinnedFieldOptions;
  SelectedFieldOptions?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.TableFieldURLConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablefieldurlconfiguration.html | AWS::QuickSight::Template.TableFieldURLConfiguration}
 */
export interface QuickSightTemplateTableFieldURLConfiguration {
  LinkConfiguration?: QuickSightTemplateTableFieldLinkConfiguration;
  ImageConfiguration?: QuickSightTemplateTableFieldImageConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.TableFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablefieldwells.html | AWS::QuickSight::Template.TableFieldWells}
 */
export interface QuickSightTemplateTableFieldWells {
  TableUnaggregatedFieldWells?: QuickSightTemplateTableUnaggregatedFieldWells;
  TableAggregatedFieldWells?: QuickSightTemplateTableAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Template.TableInlineVisualization
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tableinlinevisualization.html | AWS::QuickSight::Template.TableInlineVisualization}
 */
export interface QuickSightTemplateTableInlineVisualization {
  DataBars?: QuickSightTemplateDataBarsOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.TableOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tableoptions.html | AWS::QuickSight::Template.TableOptions}
 */
export interface QuickSightTemplateTableOptions {
  HeaderStyle?: QuickSightTemplateTableCellStyle;
  CellStyle?: QuickSightTemplateTableCellStyle;
  Orientation?: string;
  RowAlternateColorOptions?: QuickSightTemplateRowAlternateColorOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.TablePaginatedReportOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablepaginatedreportoptions.html | AWS::QuickSight::Template.TablePaginatedReportOptions}
 */
export interface QuickSightTemplateTablePaginatedReportOptions {
  OverflowColumnHeaderVisibility?: string;
  VerticalOverflowVisibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.TablePinnedFieldOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablepinnedfieldoptions.html | AWS::QuickSight::Template.TablePinnedFieldOptions}
 */
export interface QuickSightTemplateTablePinnedFieldOptions {
  PinnedLeftFields?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.TableRowConditionalFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablerowconditionalformatting.html | AWS::QuickSight::Template.TableRowConditionalFormatting}
 */
export interface QuickSightTemplateTableRowConditionalFormatting {
  TextColor?: QuickSightTemplateConditionalFormattingColor;
  BackgroundColor?: QuickSightTemplateConditionalFormattingColor;
}
/**
 * Type definition for AWS::QuickSight::Template.TableSideBorderOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablesideborderoptions.html | AWS::QuickSight::Template.TableSideBorderOptions}
 */
export interface QuickSightTemplateTableSideBorderOptions {
  Left?: QuickSightTemplateTableBorderOptions;
  Top?: QuickSightTemplateTableBorderOptions;
  InnerHorizontal?: QuickSightTemplateTableBorderOptions;
  Right?: QuickSightTemplateTableBorderOptions;
  Bottom?: QuickSightTemplateTableBorderOptions;
  InnerVertical?: QuickSightTemplateTableBorderOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.TableSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablesortconfiguration.html | AWS::QuickSight::Template.TableSortConfiguration}
 */
export interface QuickSightTemplateTableSortConfiguration {
  RowSort?: any[];
  PaginationConfiguration?: QuickSightTemplatePaginationConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.TableStyleTarget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablestyletarget.html | AWS::QuickSight::Template.TableStyleTarget}
 */
export interface QuickSightTemplateTableStyleTarget {
  CellType: string;
}
/**
 * Type definition for AWS::QuickSight::Template.TableUnaggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tableunaggregatedfieldwells.html | AWS::QuickSight::Template.TableUnaggregatedFieldWells}
 */
export interface QuickSightTemplateTableUnaggregatedFieldWells {
  Values?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.TableVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablevisual.html | AWS::QuickSight::Template.TableVisual}
 */
export interface QuickSightTemplateTableVisual {
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  ConditionalFormatting?: QuickSightTemplateTableConditionalFormatting;
  VisualId: string;
  ChartConfiguration?: QuickSightTemplateTableConfiguration;
  Actions?: any[];
  Title?: QuickSightTemplateVisualTitleLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.TemplateError
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-templateerror.html | AWS::QuickSight::Template.TemplateError}
 */
export interface QuickSightTemplateTemplateError {
  Type?: string;
  Message?: string;
  ViolatedEntities?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.TemplateSourceAnalysis
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-templatesourceanalysis.html | AWS::QuickSight::Template.TemplateSourceAnalysis}
 */
export interface QuickSightTemplateTemplateSourceAnalysis {
  DataSetReferences: any[];
  Arn: string;
}
/**
 * Type definition for AWS::QuickSight::Template.TemplateSourceEntity
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-templatesourceentity.html | AWS::QuickSight::Template.TemplateSourceEntity}
 */
export interface QuickSightTemplateTemplateSourceEntity {
  SourceAnalysis?: QuickSightTemplateTemplateSourceAnalysis;
  SourceTemplate?: QuickSightTemplateTemplateSourceTemplate;
}
/**
 * Type definition for AWS::QuickSight::Template.TemplateSourceTemplate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-templatesourcetemplate.html | AWS::QuickSight::Template.TemplateSourceTemplate}
 */
export interface QuickSightTemplateTemplateSourceTemplate {
  Arn: string;
}
/**
 * Type definition for AWS::QuickSight::Template.TemplateVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-templateversion.html | AWS::QuickSight::Template.TemplateVersion}
 */
export interface QuickSightTemplateTemplateVersion {
  Status?: string;
  Errors?: any[];
  CreatedTime?: string;
  Description?: string;
  ThemeArn?: string;
  DataSetConfigurations?: any[];
  SourceEntityArn?: string;
  VersionNumber?: number;
  Sheets?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.TemplateVersionDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-templateversiondefinition.html | AWS::QuickSight::Template.TemplateVersionDefinition}
 */
export interface QuickSightTemplateTemplateVersionDefinition {
  FilterGroups?: any[];
  CalculatedFields?: any[];
  DataSetConfigurations: any[];
  ColumnConfigurations?: any[];
  AnalysisDefaults?: QuickSightTemplateAnalysisDefaults;
  Sheets?: any[];
  ParameterDeclarations?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.TextAreaControlDisplayOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-textareacontroldisplayoptions.html | AWS::QuickSight::Template.TextAreaControlDisplayOptions}
 */
export interface QuickSightTemplateTextAreaControlDisplayOptions {
  TitleOptions?: QuickSightTemplateLabelOptions;
  PlaceholderOptions?: QuickSightTemplateTextControlPlaceholderOptions;
  InfoIconLabelOptions?: QuickSightTemplateSheetControlInfoIconLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.TextConditionalFormat
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-textconditionalformat.html | AWS::QuickSight::Template.TextConditionalFormat}
 */
export interface QuickSightTemplateTextConditionalFormat {
  TextColor?: QuickSightTemplateConditionalFormattingColor;
  Icon?: QuickSightTemplateConditionalFormattingIcon;
  BackgroundColor?: QuickSightTemplateConditionalFormattingColor;
}
/**
 * Type definition for AWS::QuickSight::Template.TextControlPlaceholderOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-textcontrolplaceholderoptions.html | AWS::QuickSight::Template.TextControlPlaceholderOptions}
 */
export interface QuickSightTemplateTextControlPlaceholderOptions {
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.TextFieldControlDisplayOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-textfieldcontroldisplayoptions.html | AWS::QuickSight::Template.TextFieldControlDisplayOptions}
 */
export interface QuickSightTemplateTextFieldControlDisplayOptions {
  TitleOptions?: QuickSightTemplateLabelOptions;
  PlaceholderOptions?: QuickSightTemplateTextControlPlaceholderOptions;
  InfoIconLabelOptions?: QuickSightTemplateSheetControlInfoIconLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.ThousandSeparatorOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-thousandseparatoroptions.html | AWS::QuickSight::Template.ThousandSeparatorOptions}
 */
export interface QuickSightTemplateThousandSeparatorOptions {
  Symbol?: string;
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.TimeBasedForecastProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-timebasedforecastproperties.html | AWS::QuickSight::Template.TimeBasedForecastProperties}
 */
export interface QuickSightTemplateTimeBasedForecastProperties {
  PeriodsBackward?: number;
  PeriodsForward?: number;
  PredictionInterval?: number;
  Seasonality?: number;
  UpperBoundary?: number;
  LowerBoundary?: number;
}
/**
 * Type definition for AWS::QuickSight::Template.TimeEqualityFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-timeequalityfilter.html | AWS::QuickSight::Template.TimeEqualityFilter}
 */
export interface QuickSightTemplateTimeEqualityFilter {
  Column: QuickSightTemplateColumnIdentifier;
  RollingDate?: QuickSightTemplateRollingDateConfiguration;
  Value?: string;
  TimeGranularity?: string;
  ParameterName?: string;
  FilterId: string;
}
/**
 * Type definition for AWS::QuickSight::Template.TimeRangeDrillDownFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-timerangedrilldownfilter.html | AWS::QuickSight::Template.TimeRangeDrillDownFilter}
 */
export interface QuickSightTemplateTimeRangeDrillDownFilter {
  Column: QuickSightTemplateColumnIdentifier;
  RangeMinimum: string;
  TimeGranularity: string;
  RangeMaximum: string;
}
/**
 * Type definition for AWS::QuickSight::Template.TimeRangeFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-timerangefilter.html | AWS::QuickSight::Template.TimeRangeFilter}
 */
export interface QuickSightTemplateTimeRangeFilter {
  RangeMinimumValue?: QuickSightTemplateTimeRangeFilterValue;
  Column: QuickSightTemplateColumnIdentifier;
  RangeMaximumValue?: QuickSightTemplateTimeRangeFilterValue;
  IncludeMaximum?: boolean;
  TimeGranularity?: string;
  NullOption: string;
  FilterId: string;
  IncludeMinimum?: boolean;
  ExcludePeriodConfiguration?: QuickSightTemplateExcludePeriodConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.TimeRangeFilterValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-timerangefiltervalue.html | AWS::QuickSight::Template.TimeRangeFilterValue}
 */
export interface QuickSightTemplateTimeRangeFilterValue {
  RollingDate?: QuickSightTemplateRollingDateConfiguration;
  StaticValue?: string;
  Parameter?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.TooltipItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tooltipitem.html | AWS::QuickSight::Template.TooltipItem}
 */
export interface QuickSightTemplateTooltipItem {
  FieldTooltipItem?: QuickSightTemplateFieldTooltipItem;
  ColumnTooltipItem?: QuickSightTemplateColumnTooltipItem;
}
/**
 * Type definition for AWS::QuickSight::Template.TooltipOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tooltipoptions.html | AWS::QuickSight::Template.TooltipOptions}
 */
export interface QuickSightTemplateTooltipOptions {
  SelectedTooltipType?: string;
  TooltipVisibility?: string;
  FieldBasedTooltip?: QuickSightTemplateFieldBasedTooltip;
}
/**
 * Type definition for AWS::QuickSight::Template.TopBottomFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-topbottomfilter.html | AWS::QuickSight::Template.TopBottomFilter}
 */
export interface QuickSightTemplateTopBottomFilter {
  AggregationSortConfigurations: any[];
  Column: QuickSightTemplateColumnIdentifier;
  TimeGranularity?: string;
  ParameterName?: string;
  Limit?: number;
  FilterId: string;
}
/**
 * Type definition for AWS::QuickSight::Template.TopBottomMoversComputation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-topbottommoverscomputation.html | AWS::QuickSight::Template.TopBottomMoversComputation}
 */
export interface QuickSightTemplateTopBottomMoversComputation {
  Type: string;
  Category?: QuickSightTemplateDimensionField;
  Value?: QuickSightTemplateMeasureField;
  SortOrder?: string;
  Time?: QuickSightTemplateDimensionField;
  MoverSize?: number;
  ComputationId: string;
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.TopBottomRankedComputation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-topbottomrankedcomputation.html | AWS::QuickSight::Template.TopBottomRankedComputation}
 */
export interface QuickSightTemplateTopBottomRankedComputation {
  Type: string;
  Category?: QuickSightTemplateDimensionField;
  ResultSize?: number;
  Value?: QuickSightTemplateMeasureField;
  ComputationId: string;
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.TotalAggregationComputation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-totalaggregationcomputation.html | AWS::QuickSight::Template.TotalAggregationComputation}
 */
export interface QuickSightTemplateTotalAggregationComputation {
  Value?: QuickSightTemplateMeasureField;
  ComputationId: string;
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.TotalAggregationFunction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-totalaggregationfunction.html | AWS::QuickSight::Template.TotalAggregationFunction}
 */
export interface QuickSightTemplateTotalAggregationFunction {
  SimpleTotalAggregationFunction?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.TotalAggregationOption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-totalaggregationoption.html | AWS::QuickSight::Template.TotalAggregationOption}
 */
export interface QuickSightTemplateTotalAggregationOption {
  TotalAggregationFunction: QuickSightTemplateTotalAggregationFunction;
  FieldId: string;
}
/**
 * Type definition for AWS::QuickSight::Template.TotalOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-totaloptions.html | AWS::QuickSight::Template.TotalOptions}
 */
export interface QuickSightTemplateTotalOptions {
  CustomLabel?: string;
  TotalAggregationOptions?: any[];
  ScrollStatus?: string;
  Placement?: string;
  TotalCellStyle?: QuickSightTemplateTableCellStyle;
  TotalsVisibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.TreeMapAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-treemapaggregatedfieldwells.html | AWS::QuickSight::Template.TreeMapAggregatedFieldWells}
 */
export interface QuickSightTemplateTreeMapAggregatedFieldWells {
  Sizes?: any[];
  Colors?: any[];
  Groups?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.TreeMapConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-treemapconfiguration.html | AWS::QuickSight::Template.TreeMapConfiguration}
 */
export interface QuickSightTemplateTreeMapConfiguration {
  SortConfiguration?: QuickSightTemplateTreeMapSortConfiguration;
  Legend?: QuickSightTemplateLegendOptions;
  DataLabels?: QuickSightTemplateDataLabelOptions;
  ColorLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  SizeLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  FieldWells?: QuickSightTemplateTreeMapFieldWells;
  Tooltip?: QuickSightTemplateTooltipOptions;
  ColorScale?: QuickSightTemplateColorScale;
  GroupLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.TreeMapFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-treemapfieldwells.html | AWS::QuickSight::Template.TreeMapFieldWells}
 */
export interface QuickSightTemplateTreeMapFieldWells {
  TreeMapAggregatedFieldWells?: QuickSightTemplateTreeMapAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Template.TreeMapSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-treemapsortconfiguration.html | AWS::QuickSight::Template.TreeMapSortConfiguration}
 */
export interface QuickSightTemplateTreeMapSortConfiguration {
  TreeMapSort?: any[];
  TreeMapGroupItemsLimitConfiguration?: QuickSightTemplateItemsLimitConfiguration;
}
/**
 * Type definition for AWS::QuickSight::Template.TreeMapVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-treemapvisual.html | AWS::QuickSight::Template.TreeMapVisual}
 */
export interface QuickSightTemplateTreeMapVisual {
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightTemplateTreeMapConfiguration;
  Actions?: any[];
  Title?: QuickSightTemplateVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.TrendArrowOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-trendarrowoptions.html | AWS::QuickSight::Template.TrendArrowOptions}
 */
export interface QuickSightTemplateTrendArrowOptions {
  Visibility?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.UnaggregatedField
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-unaggregatedfield.html | AWS::QuickSight::Template.UnaggregatedField}
 */
export interface QuickSightTemplateUnaggregatedField {
  FormatConfiguration?: QuickSightTemplateFormatConfiguration;
  Column: QuickSightTemplateColumnIdentifier;
  FieldId: string;
}
/**
 * Type definition for AWS::QuickSight::Template.UniqueValuesComputation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-uniquevaluescomputation.html | AWS::QuickSight::Template.UniqueValuesComputation}
 */
export interface QuickSightTemplateUniqueValuesComputation {
  Category?: QuickSightTemplateDimensionField;
  ComputationId: string;
  Name?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.ValidationStrategy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-validationstrategy.html | AWS::QuickSight::Template.ValidationStrategy}
 */
export interface QuickSightTemplateValidationStrategy {
  Mode: string;
}
/**
 * Type definition for AWS::QuickSight::Template.VisibleRangeOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-visiblerangeoptions.html | AWS::QuickSight::Template.VisibleRangeOptions}
 */
export interface QuickSightTemplateVisibleRangeOptions {
  PercentRange?: QuickSightTemplatePercentVisibleRange;
}
/**
 * Type definition for AWS::QuickSight::Template.Visual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-visual.html | AWS::QuickSight::Template.Visual}
 */
export interface QuickSightTemplateVisual {
  FunnelChartVisual?: QuickSightTemplateFunnelChartVisual;
  FilledMapVisual?: QuickSightTemplateFilledMapVisual;
  BoxPlotVisual?: QuickSightTemplateBoxPlotVisual;
  WaterfallVisual?: QuickSightTemplateWaterfallVisual;
  CustomContentVisual?: QuickSightTemplateCustomContentVisual;
  PieChartVisual?: QuickSightTemplatePieChartVisual;
  KPIVisual?: QuickSightTemplateKPIVisual;
  HistogramVisual?: QuickSightTemplateHistogramVisual;
  TableVisual?: QuickSightTemplateTableVisual;
  PivotTableVisual?: QuickSightTemplatePivotTableVisual;
  GeospatialMapVisual?: QuickSightTemplateGeospatialMapVisual;
  BarChartVisual?: QuickSightTemplateBarChartVisual;
  ScatterPlotVisual?: QuickSightTemplateScatterPlotVisual;
  RadarChartVisual?: QuickSightTemplateRadarChartVisual;
  HeatMapVisual?: QuickSightTemplateHeatMapVisual;
  TreeMapVisual?: QuickSightTemplateTreeMapVisual;
  ComboChartVisual?: QuickSightTemplateComboChartVisual;
  WordCloudVisual?: QuickSightTemplateWordCloudVisual;
  InsightVisual?: QuickSightTemplateInsightVisual;
  SankeyDiagramVisual?: QuickSightTemplateSankeyDiagramVisual;
  GaugeChartVisual?: QuickSightTemplateGaugeChartVisual;
  LineChartVisual?: QuickSightTemplateLineChartVisual;
  EmptyVisual?: QuickSightTemplateEmptyVisual;
}
/**
 * Type definition for AWS::QuickSight::Template.VisualCustomAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-visualcustomaction.html | AWS::QuickSight::Template.VisualCustomAction}
 */
export interface QuickSightTemplateVisualCustomAction {
  Status?: string;
  Trigger: string;
  CustomActionId: string;
  Name: string;
  ActionOperations: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.VisualCustomActionOperation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-visualcustomactionoperation.html | AWS::QuickSight::Template.VisualCustomActionOperation}
 */
export interface QuickSightTemplateVisualCustomActionOperation {
  NavigationOperation?: QuickSightTemplateCustomActionNavigationOperation;
  SetParametersOperation?: QuickSightTemplateCustomActionSetParametersOperation;
  FilterOperation?: QuickSightTemplateCustomActionFilterOperation;
  URLOperation?: QuickSightTemplateCustomActionURLOperation;
}
/**
 * Type definition for AWS::QuickSight::Template.VisualPalette
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-visualpalette.html | AWS::QuickSight::Template.VisualPalette}
 */
export interface QuickSightTemplateVisualPalette {
  ChartColor?: string;
  ColorMap?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.VisualSubtitleLabelOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-visualsubtitlelabeloptions.html | AWS::QuickSight::Template.VisualSubtitleLabelOptions}
 */
export interface QuickSightTemplateVisualSubtitleLabelOptions {
  Visibility?: string;
  FormatText?: QuickSightTemplateLongFormatText;
}
/**
 * Type definition for AWS::QuickSight::Template.VisualTitleLabelOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-visualtitlelabeloptions.html | AWS::QuickSight::Template.VisualTitleLabelOptions}
 */
export interface QuickSightTemplateVisualTitleLabelOptions {
  Visibility?: string;
  FormatText?: QuickSightTemplateShortFormatText;
}
/**
 * Type definition for AWS::QuickSight::Template.WaterfallChartAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-waterfallchartaggregatedfieldwells.html | AWS::QuickSight::Template.WaterfallChartAggregatedFieldWells}
 */
export interface QuickSightTemplateWaterfallChartAggregatedFieldWells {
  Categories?: any[];
  Breakdowns?: any[];
  Values?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.WaterfallChartConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-waterfallchartconfiguration.html | AWS::QuickSight::Template.WaterfallChartConfiguration}
 */
export interface QuickSightTemplateWaterfallChartConfiguration {
  CategoryAxisLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  SortConfiguration?: QuickSightTemplateWaterfallChartSortConfiguration;
  Legend?: QuickSightTemplateLegendOptions;
  DataLabels?: QuickSightTemplateDataLabelOptions;
  PrimaryYAxisLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  FieldWells?: QuickSightTemplateWaterfallChartFieldWells;
  WaterfallChartOptions?: QuickSightTemplateWaterfallChartOptions;
  CategoryAxisDisplayOptions?: QuickSightTemplateAxisDisplayOptions;
  PrimaryYAxisDisplayOptions?: QuickSightTemplateAxisDisplayOptions;
  VisualPalette?: QuickSightTemplateVisualPalette;
}
/**
 * Type definition for AWS::QuickSight::Template.WaterfallChartFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-waterfallchartfieldwells.html | AWS::QuickSight::Template.WaterfallChartFieldWells}
 */
export interface QuickSightTemplateWaterfallChartFieldWells {
  WaterfallChartAggregatedFieldWells?: QuickSightTemplateWaterfallChartAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Template.WaterfallChartOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-waterfallchartoptions.html | AWS::QuickSight::Template.WaterfallChartOptions}
 */
export interface QuickSightTemplateWaterfallChartOptions {
  TotalBarLabel?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.WaterfallChartSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-waterfallchartsortconfiguration.html | AWS::QuickSight::Template.WaterfallChartSortConfiguration}
 */
export interface QuickSightTemplateWaterfallChartSortConfiguration {
  BreakdownItemsLimit?: QuickSightTemplateItemsLimitConfiguration;
  CategorySort?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.WaterfallVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-waterfallvisual.html | AWS::QuickSight::Template.WaterfallVisual}
 */
export interface QuickSightTemplateWaterfallVisual {
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightTemplateWaterfallChartConfiguration;
  Actions?: any[];
  Title?: QuickSightTemplateVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.WhatIfPointScenario
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-whatifpointscenario.html | AWS::QuickSight::Template.WhatIfPointScenario}
 */
export interface QuickSightTemplateWhatIfPointScenario {
  Value: number;
  Date: string;
}
/**
 * Type definition for AWS::QuickSight::Template.WhatIfRangeScenario
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-whatifrangescenario.html | AWS::QuickSight::Template.WhatIfRangeScenario}
 */
export interface QuickSightTemplateWhatIfRangeScenario {
  StartDate: string;
  Value: number;
  EndDate: string;
}
/**
 * Type definition for AWS::QuickSight::Template.WordCloudAggregatedFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-wordcloudaggregatedfieldwells.html | AWS::QuickSight::Template.WordCloudAggregatedFieldWells}
 */
export interface QuickSightTemplateWordCloudAggregatedFieldWells {
  GroupBy?: any[];
  Size?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.WordCloudChartConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-wordcloudchartconfiguration.html | AWS::QuickSight::Template.WordCloudChartConfiguration}
 */
export interface QuickSightTemplateWordCloudChartConfiguration {
  SortConfiguration?: QuickSightTemplateWordCloudSortConfiguration;
  CategoryLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  FieldWells?: QuickSightTemplateWordCloudFieldWells;
  WordCloudOptions?: QuickSightTemplateWordCloudOptions;
}
/**
 * Type definition for AWS::QuickSight::Template.WordCloudFieldWells
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-wordcloudfieldwells.html | AWS::QuickSight::Template.WordCloudFieldWells}
 */
export interface QuickSightTemplateWordCloudFieldWells {
  WordCloudAggregatedFieldWells?: QuickSightTemplateWordCloudAggregatedFieldWells;
}
/**
 * Type definition for AWS::QuickSight::Template.WordCloudOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-wordcloudoptions.html | AWS::QuickSight::Template.WordCloudOptions}
 */
export interface QuickSightTemplateWordCloudOptions {
  WordOrientation?: string;
  WordScaling?: string;
  CloudLayout?: string;
  MaximumStringLength?: number;
  WordCasing?: string;
  WordPadding?: string;
}
/**
 * Type definition for AWS::QuickSight::Template.WordCloudSortConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-wordcloudsortconfiguration.html | AWS::QuickSight::Template.WordCloudSortConfiguration}
 */
export interface QuickSightTemplateWordCloudSortConfiguration {
  CategoryItemsLimit?: QuickSightTemplateItemsLimitConfiguration;
  CategorySort?: any[];
}
/**
 * Type definition for AWS::QuickSight::Template.WordCloudVisual
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-wordcloudvisual.html | AWS::QuickSight::Template.WordCloudVisual}
 */
export interface QuickSightTemplateWordCloudVisual {
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  VisualId: string;
  ChartConfiguration?: QuickSightTemplateWordCloudChartConfiguration;
  Actions?: any[];
  Title?: QuickSightTemplateVisualTitleLabelOptions;
  ColumnHierarchies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Theme.BorderStyle
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-borderstyle.html | AWS::QuickSight::Theme.BorderStyle}
 */
export interface QuickSightThemeBorderStyle {
  Show?: boolean;
}
/**
 * Type definition for AWS::QuickSight::Theme.DataColorPalette
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-datacolorpalette.html | AWS::QuickSight::Theme.DataColorPalette}
 */
export interface QuickSightThemeDataColorPalette {
  EmptyFillColor?: string;
  Colors?: any[];
  MinMaxGradient?: any[];
}
/**
 * Type definition for AWS::QuickSight::Theme.Font
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-font.html | AWS::QuickSight::Theme.Font}
 */
export interface QuickSightThemeFont {
  FontFamily?: string;
}
/**
 * Type definition for AWS::QuickSight::Theme.GutterStyle
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-gutterstyle.html | AWS::QuickSight::Theme.GutterStyle}
 */
export interface QuickSightThemeGutterStyle {
  Show?: boolean;
}
/**
 * Type definition for AWS::QuickSight::Theme.MarginStyle
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-marginstyle.html | AWS::QuickSight::Theme.MarginStyle}
 */
export interface QuickSightThemeMarginStyle {
  Show?: boolean;
}
/**
 * Type definition for AWS::QuickSight::Theme.ResourcePermission
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-resourcepermission.html | AWS::QuickSight::Theme.ResourcePermission}
 */
export interface QuickSightThemeResourcePermission {
  Actions: any[];
  Resource?: string;
  Principal: string;
}
/**
 * Type definition for AWS::QuickSight::Theme.SheetStyle
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-sheetstyle.html | AWS::QuickSight::Theme.SheetStyle}
 */
export interface QuickSightThemeSheetStyle {
  TileLayout?: QuickSightThemeTileLayoutStyle;
  Tile?: QuickSightThemeTileStyle;
}
/**
 * Type definition for AWS::QuickSight::Theme.ThemeConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-themeconfiguration.html | AWS::QuickSight::Theme.ThemeConfiguration}
 */
export interface QuickSightThemeThemeConfiguration {
  DataColorPalette?: QuickSightThemeDataColorPalette;
  UIColorPalette?: QuickSightThemeUIColorPalette;
  Sheet?: QuickSightThemeSheetStyle;
  Typography?: QuickSightThemeTypography;
}
/**
 * Type definition for AWS::QuickSight::Theme.ThemeError
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-themeerror.html | AWS::QuickSight::Theme.ThemeError}
 */
export interface QuickSightThemeThemeError {
  Type?: string;
  Message?: string;
}
/**
 * Type definition for AWS::QuickSight::Theme.ThemeVersion
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-themeversion.html | AWS::QuickSight::Theme.ThemeVersion}
 */
export interface QuickSightThemeThemeVersion {
  Status?: string;
  Errors?: any[];
  Description?: string;
  CreatedTime?: string;
  Configuration?: QuickSightThemeThemeConfiguration;
  BaseThemeId?: string;
  Arn?: string;
  VersionNumber?: number;
}
/**
 * Type definition for AWS::QuickSight::Theme.TileLayoutStyle
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-tilelayoutstyle.html | AWS::QuickSight::Theme.TileLayoutStyle}
 */
export interface QuickSightThemeTileLayoutStyle {
  Gutter?: QuickSightThemeGutterStyle;
  Margin?: QuickSightThemeMarginStyle;
}
/**
 * Type definition for AWS::QuickSight::Theme.TileStyle
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-tilestyle.html | AWS::QuickSight::Theme.TileStyle}
 */
export interface QuickSightThemeTileStyle {
  Border?: QuickSightThemeBorderStyle;
}
/**
 * Type definition for AWS::QuickSight::Theme.Typography
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-typography.html | AWS::QuickSight::Theme.Typography}
 */
export interface QuickSightThemeTypography {
  FontFamilies?: any[];
}
/**
 * Type definition for AWS::QuickSight::Theme.UIColorPalette
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-uicolorpalette.html | AWS::QuickSight::Theme.UIColorPalette}
 */
export interface QuickSightThemeUIColorPalette {
  Warning?: string;
  Accent?: string;
  AccentForeground?: string;
  SecondaryBackground?: string;
  DangerForeground?: string;
  PrimaryBackground?: string;
  Dimension?: string;
  SecondaryForeground?: string;
  WarningForeground?: string;
  DimensionForeground?: string;
  PrimaryForeground?: string;
  Success?: string;
  Danger?: string;
  SuccessForeground?: string;
  Measure?: string;
  MeasureForeground?: string;
}
/**
 * Type definition for AWS::QuickSight::Topic.CellValueSynonym
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-cellvaluesynonym.html | AWS::QuickSight::Topic.CellValueSynonym}
 */
export interface QuickSightTopicCellValueSynonym {
  Synonyms?: any[];
  CellValue?: string;
}
/**
 * Type definition for AWS::QuickSight::Topic.CollectiveConstant
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-collectiveconstant.html | AWS::QuickSight::Topic.CollectiveConstant}
 */
export interface QuickSightTopicCollectiveConstant {
  ValueList?: any[];
}
/**
 * Type definition for AWS::QuickSight::Topic.ComparativeOrder
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-comparativeorder.html | AWS::QuickSight::Topic.ComparativeOrder}
 */
export interface QuickSightTopicComparativeOrder {
  SpecifedOrder?: any[];
  UseOrdering?: string;
  TreatUndefinedSpecifiedValues?: string;
}
/**
 * Type definition for AWS::QuickSight::Topic.DataAggregation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-dataaggregation.html | AWS::QuickSight::Topic.DataAggregation}
 */
export interface QuickSightTopicDataAggregation {
  DatasetRowDateGranularity?: string;
  DefaultDateColumnName?: string;
}
/**
 * Type definition for AWS::QuickSight::Topic.DatasetMetadata
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-datasetmetadata.html | AWS::QuickSight::Topic.DatasetMetadata}
 */
export interface QuickSightTopicDatasetMetadata {
  DatasetArn: string;
  Filters?: any[];
  NamedEntities?: any[];
  DatasetName?: string;
  CalculatedFields?: any[];
  Columns?: any[];
  DataAggregation?: QuickSightTopicDataAggregation;
  DatasetDescription?: string;
}
/**
 * Type definition for AWS::QuickSight::Topic.DefaultFormatting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-defaultformatting.html | AWS::QuickSight::Topic.DefaultFormatting}
 */
export interface QuickSightTopicDefaultFormatting {
  DisplayFormatOptions?: QuickSightTopicDisplayFormatOptions;
  DisplayFormat?: string;
}
/**
 * Type definition for AWS::QuickSight::Topic.DisplayFormatOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-displayformatoptions.html | AWS::QuickSight::Topic.DisplayFormatOptions}
 */
export interface QuickSightTopicDisplayFormatOptions {
  DecimalSeparator?: string;
  FractionDigits?: number;
  Suffix?: string;
  DateFormat?: string;
  UnitScaler?: string;
  NegativeFormat?: QuickSightTopicNegativeFormat;
  UseBlankCellFormat?: boolean;
  Prefix?: string;
  BlankCellFormat?: string;
  CurrencySymbol?: string;
  GroupingSeparator?: string;
  UseGrouping?: boolean;
}
/**
 * Type definition for AWS::QuickSight::Topic.NamedEntityDefinition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-namedentitydefinition.html | AWS::QuickSight::Topic.NamedEntityDefinition}
 */
export interface QuickSightTopicNamedEntityDefinition {
  PropertyName?: string;
  PropertyUsage?: string;
  PropertyRole?: string;
  Metric?: QuickSightTopicNamedEntityDefinitionMetric;
  FieldName?: string;
}
/**
 * Type definition for AWS::QuickSight::Topic.NamedEntityDefinitionMetric
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-namedentitydefinitionmetric.html | AWS::QuickSight::Topic.NamedEntityDefinitionMetric}
 */
export interface QuickSightTopicNamedEntityDefinitionMetric {
  Aggregation?: string;
  AggregationFunctionParameters?: Record<string, any>;
}
/**
 * Type definition for AWS::QuickSight::Topic.NegativeFormat
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-negativeformat.html | AWS::QuickSight::Topic.NegativeFormat}
 */
export interface QuickSightTopicNegativeFormat {
  Suffix?: string;
  Prefix?: string;
}
/**
 * Type definition for AWS::QuickSight::Topic.RangeConstant
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-rangeconstant.html | AWS::QuickSight::Topic.RangeConstant}
 */
export interface QuickSightTopicRangeConstant {
  Minimum?: string;
  Maximum?: string;
}
/**
 * Type definition for AWS::QuickSight::Topic.SemanticEntityType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-semanticentitytype.html | AWS::QuickSight::Topic.SemanticEntityType}
 */
export interface QuickSightTopicSemanticEntityType {
  TypeName?: string;
  TypeParameters?: Record<string, any>;
  SubTypeName?: string;
}
/**
 * Type definition for AWS::QuickSight::Topic.SemanticType
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-semantictype.html | AWS::QuickSight::Topic.SemanticType}
 */
export interface QuickSightTopicSemanticType {
  TruthyCellValueSynonyms?: any[];
  TypeName?: string;
  TypeParameters?: Record<string, any>;
  SubTypeName?: string;
  TruthyCellValue?: string;
  FalseyCellValue?: string;
  FalseyCellValueSynonyms?: any[];
}
/**
 * Type definition for AWS::QuickSight::Topic.TopicCalculatedField
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-topiccalculatedfield.html | AWS::QuickSight::Topic.TopicCalculatedField}
 */
export interface QuickSightTopicTopicCalculatedField {
  SemanticType?: QuickSightTopicSemanticType;
  NotAllowedAggregations?: any[];
  DefaultFormatting?: QuickSightTopicDefaultFormatting;
  AllowedAggregations?: any[];
  CalculatedFieldDescription?: string;
  CalculatedFieldSynonyms?: any[];
  IsIncludedInTopic?: boolean;
  ColumnDataRole?: string;
  Aggregation?: string;
  Expression: string;
  NonAdditive?: boolean;
  CalculatedFieldName: string;
  NeverAggregateInFilter?: boolean;
  TimeGranularity?: string;
  ComparativeOrder?: QuickSightTopicComparativeOrder;
  CellValueSynonyms?: any[];
}
/**
 * Type definition for AWS::QuickSight::Topic.TopicCategoryFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-topiccategoryfilter.html | AWS::QuickSight::Topic.TopicCategoryFilter}
 */
export interface QuickSightTopicTopicCategoryFilter {
  CategoryFilterType?: string;
  CategoryFilterFunction?: string;
  Constant?: QuickSightTopicTopicCategoryFilterConstant;
  Inverse?: boolean;
}
/**
 * Type definition for AWS::QuickSight::Topic.TopicCategoryFilterConstant
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-topiccategoryfilterconstant.html | AWS::QuickSight::Topic.TopicCategoryFilterConstant}
 */
export interface QuickSightTopicTopicCategoryFilterConstant {
  SingularConstant?: string;
  ConstantType?: string;
  CollectiveConstant?: QuickSightTopicCollectiveConstant;
}
/**
 * Type definition for AWS::QuickSight::Topic.TopicColumn
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-topiccolumn.html | AWS::QuickSight::Topic.TopicColumn}
 */
export interface QuickSightTopicTopicColumn {
  SemanticType?: QuickSightTopicSemanticType;
  NotAllowedAggregations?: any[];
  AllowedAggregations?: any[];
  DefaultFormatting?: QuickSightTopicDefaultFormatting;
  ColumnDescription?: string;
  IsIncludedInTopic?: boolean;
  ColumnDataRole?: string;
  Aggregation?: string;
  ColumnName: string;
  NonAdditive?: boolean;
  ColumnSynonyms?: any[];
  NeverAggregateInFilter?: boolean;
  TimeGranularity?: string;
  ColumnFriendlyName?: string;
  ComparativeOrder?: QuickSightTopicComparativeOrder;
  CellValueSynonyms?: any[];
}
/**
 * Type definition for AWS::QuickSight::Topic.TopicDateRangeFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-topicdaterangefilter.html | AWS::QuickSight::Topic.TopicDateRangeFilter}
 */
export interface QuickSightTopicTopicDateRangeFilter {
  Inclusive?: boolean;
  Constant?: QuickSightTopicTopicRangeFilterConstant;
}
/**
 * Type definition for AWS::QuickSight::Topic.TopicFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-topicfilter.html | AWS::QuickSight::Topic.TopicFilter}
 */
export interface QuickSightTopicTopicFilter {
  FilterClass?: string;
  FilterSynonyms?: any[];
  FilterType?: string;
  RelativeDateFilter?: QuickSightTopicTopicRelativeDateFilter;
  OperandFieldName: string;
  NumericEqualityFilter?: QuickSightTopicTopicNumericEqualityFilter;
  FilterDescription?: string;
  NumericRangeFilter?: QuickSightTopicTopicNumericRangeFilter;
  DateRangeFilter?: QuickSightTopicTopicDateRangeFilter;
  FilterName: string;
  CategoryFilter?: QuickSightTopicTopicCategoryFilter;
}
/**
 * Type definition for AWS::QuickSight::Topic.TopicNamedEntity
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-topicnamedentity.html | AWS::QuickSight::Topic.TopicNamedEntity}
 */
export interface QuickSightTopicTopicNamedEntity {
  EntitySynonyms?: any[];
  EntityName: string;
  SemanticEntityType?: QuickSightTopicSemanticEntityType;
  EntityDescription?: string;
  Definition?: any[];
}
/**
 * Type definition for AWS::QuickSight::Topic.TopicNumericEqualityFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-topicnumericequalityfilter.html | AWS::QuickSight::Topic.TopicNumericEqualityFilter}
 */
export interface QuickSightTopicTopicNumericEqualityFilter {
  Aggregation?: string;
  Constant?: QuickSightTopicTopicSingularFilterConstant;
}
/**
 * Type definition for AWS::QuickSight::Topic.TopicNumericRangeFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-topicnumericrangefilter.html | AWS::QuickSight::Topic.TopicNumericRangeFilter}
 */
export interface QuickSightTopicTopicNumericRangeFilter {
  Aggregation?: string;
  Inclusive?: boolean;
  Constant?: QuickSightTopicTopicRangeFilterConstant;
}
/**
 * Type definition for AWS::QuickSight::Topic.TopicRangeFilterConstant
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-topicrangefilterconstant.html | AWS::QuickSight::Topic.TopicRangeFilterConstant}
 */
export interface QuickSightTopicTopicRangeFilterConstant {
  ConstantType?: string;
  RangeConstant?: QuickSightTopicRangeConstant;
}
/**
 * Type definition for AWS::QuickSight::Topic.TopicRelativeDateFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-topicrelativedatefilter.html | AWS::QuickSight::Topic.TopicRelativeDateFilter}
 */
export interface QuickSightTopicTopicRelativeDateFilter {
  RelativeDateFilterFunction?: string;
  Constant?: QuickSightTopicTopicSingularFilterConstant;
  TimeGranularity?: string;
}
/**
 * Type definition for AWS::QuickSight::Topic.TopicSingularFilterConstant
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-topicsingularfilterconstant.html | AWS::QuickSight::Topic.TopicSingularFilterConstant}
 */
export interface QuickSightTopicTopicSingularFilterConstant {
  SingularConstant?: string;
  ConstantType?: string;
}
/**
 * Type definition for AWS::QuickSight::VPCConnection.NetworkInterface
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-vpcconnection-networkinterface.html | AWS::QuickSight::VPCConnection.NetworkInterface}
 */
export interface QuickSightVPCConnectionNetworkInterface {
  Status?: string;
  AvailabilityZone?: string;
  SubnetId?: string;
  ErrorMessage?: string;
  NetworkInterfaceId?: string;
}
/**
 * Type definition for AWS::QuickSight::Analysis
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-analysis.html | AWS::QuickSight::Analysis}
 */
export interface QuickSightAnalysisProps {
  Status?: string;
  Parameters?: QuickSightAnalysisParameters;
  SourceEntity?: QuickSightAnalysisAnalysisSourceEntity;
  ThemeArn?: string;
  AnalysisId: string;
  Definition?: QuickSightAnalysisAnalysisDefinition;
  AwsAccountId: string;
  Permissions?: any[];
  ValidationStrategy?: QuickSightAnalysisValidationStrategy;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::QuickSight::Analysis
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-analysis.html | AWS::QuickSight::Analysis}
 */
export interface QuickSightAnalysisAttribs {
  Errors?: any[];
  CreatedTime?: string;
  DataSetArns?: any[];
  LastUpdatedTime?: string;
  Arn?: string;
  Sheets?: any[];
}
/**
 * Resource class for AWS::QuickSight::Analysis
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-analysis.html | AWS::QuickSight::Analysis}
 */
export class QuickSightAnalysis extends ResourceBase<
  "AWS::QuickSight::Analysis",
  QuickSightAnalysisProps,
  QuickSightAnalysisAttribs
> {
  public static readonly Type = "AWS::QuickSight::Analysis";
  public static readonly AttributeNames: readonly (keyof QuickSightAnalysisAttribs)[] =
    [
      "Errors",
      "CreatedTime",
      "DataSetArns",
      "LastUpdatedTime",
      "Arn",
      "Sheets",
    ];
  constructor(
    logicalId: string,
    properties: QuickSightAnalysisProps,
    options?: ResourceOptions,
  ) {
    super(
      QuickSightAnalysis.Type,
      QuickSightAnalysis.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::QuickSight::Dashboard
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dashboard.html | AWS::QuickSight::Dashboard}
 */
export interface QuickSightDashboardProps {
  DashboardPublishOptions?: QuickSightDashboardDashboardPublishOptions;
  Parameters?: QuickSightDashboardParameters;
  VersionDescription?: string;
  SourceEntity?: QuickSightDashboardDashboardSourceEntity;
  ThemeArn?: string;
  Definition?: QuickSightDashboardDashboardVersionDefinition;
  AwsAccountId: string;
  Permissions?: any[];
  ValidationStrategy?: QuickSightDashboardValidationStrategy;
  DashboardId: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::QuickSight::Dashboard
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dashboard.html | AWS::QuickSight::Dashboard}
 */
export interface QuickSightDashboardAttribs {
  "Version.Status"?: string;
  CreatedTime?: string;
  LastUpdatedTime?: string;
  "Version.VersionNumber"?: number;
  "Version.Sheets"?: any[];
  "Version.Arn"?: string;
  "Version.ThemeArn"?: string;
  "Version.Errors"?: any[];
  "Version.CreatedTime"?: string;
  "Version.Description"?: string;
  LastPublishedTime?: string;
  Version?: QuickSightDashboardDashboardVersion;
  "Version.DataSetArns"?: any[];
  Arn?: string;
  "Version.SourceEntityArn"?: string;
}
/**
 * Resource class for AWS::QuickSight::Dashboard
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dashboard.html | AWS::QuickSight::Dashboard}
 */
export class QuickSightDashboard extends ResourceBase<
  "AWS::QuickSight::Dashboard",
  QuickSightDashboardProps,
  QuickSightDashboardAttribs
> {
  public static readonly Type = "AWS::QuickSight::Dashboard";
  public static readonly AttributeNames: readonly (keyof QuickSightDashboardAttribs)[] =
    [
      "Version.Status",
      "CreatedTime",
      "LastUpdatedTime",
      "Version.VersionNumber",
      "Version.Sheets",
      "Version.Arn",
      "Version.ThemeArn",
      "Version.Errors",
      "Version.CreatedTime",
      "Version.Description",
      "LastPublishedTime",
      "Version",
      "Version.DataSetArns",
      "Arn",
      "Version.SourceEntityArn",
    ];
  constructor(
    logicalId: string,
    properties: QuickSightDashboardProps,
    options?: ResourceOptions,
  ) {
    super(
      QuickSightDashboard.Type,
      QuickSightDashboard.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::QuickSight::DataSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html | AWS::QuickSight::DataSet}
 */
export interface QuickSightDataSetProps {
  PhysicalTableMap?: Record<string, any>;
  FieldFolders?: Record<string, any>;
  DataSetId?: string;
  RowLevelPermissionDataSet?: QuickSightDataSetRowLevelPermissionDataSet;
  RowLevelPermissionTagConfiguration?: QuickSightDataSetRowLevelPermissionTagConfiguration;
  IngestionWaitPolicy?: QuickSightDataSetIngestionWaitPolicy;
  DataSetRefreshProperties?: QuickSightDataSetDataSetRefreshProperties;
  ColumnLevelPermissionRules?: any[];
  Name?: string;
  ColumnGroups?: any[];
  ImportMode?: string;
  DatasetParameters?: any[];
  LogicalTableMap?: Record<string, any>;
  AwsAccountId?: string;
  Permissions?: any[];
  DataSetUsageConfiguration?: QuickSightDataSetDataSetUsageConfiguration;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::QuickSight::DataSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html | AWS::QuickSight::DataSet}
 */
export interface QuickSightDataSetAttribs {
  CreatedTime?: string;
  LastUpdatedTime?: string;
  OutputColumns?: any[];
  ConsumedSpiceCapacityInBytes?: number;
  Arn?: string;
}
/**
 * Resource class for AWS::QuickSight::DataSet
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html | AWS::QuickSight::DataSet}
 */
export class QuickSightDataSet extends ResourceBase<
  "AWS::QuickSight::DataSet",
  QuickSightDataSetProps,
  QuickSightDataSetAttribs
> {
  public static readonly Type = "AWS::QuickSight::DataSet";
  public static readonly AttributeNames: readonly (keyof QuickSightDataSetAttribs)[] =
    [
      "CreatedTime",
      "LastUpdatedTime",
      "OutputColumns",
      "ConsumedSpiceCapacityInBytes",
      "Arn",
    ];
  constructor(
    logicalId: string,
    properties: QuickSightDataSetProps,
    options?: ResourceOptions,
  ) {
    super(
      QuickSightDataSet.Type,
      QuickSightDataSet.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::QuickSight::DataSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-datasource.html | AWS::QuickSight::DataSource}
 */
export interface QuickSightDataSourceProps {
  DataSourceParameters?: QuickSightDataSourceDataSourceParameters;
  Type?: string;
  VpcConnectionProperties?: QuickSightDataSourceVpcConnectionProperties;
  AlternateDataSourceParameters?: any[];
  ErrorInfo?: QuickSightDataSourceDataSourceErrorInfo;
  AwsAccountId?: string;
  Permissions?: any[];
  SslProperties?: QuickSightDataSourceSslProperties;
  Credentials?: QuickSightDataSourceDataSourceCredentials;
  DataSourceId?: string;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::QuickSight::DataSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-datasource.html | AWS::QuickSight::DataSource}
 */
export interface QuickSightDataSourceAttribs {
  Status?: string;
  CreatedTime?: string;
  LastUpdatedTime?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::QuickSight::DataSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-datasource.html | AWS::QuickSight::DataSource}
 */
export class QuickSightDataSource extends ResourceBase<
  "AWS::QuickSight::DataSource",
  QuickSightDataSourceProps,
  QuickSightDataSourceAttribs
> {
  public static readonly Type = "AWS::QuickSight::DataSource";
  public static readonly AttributeNames: readonly (keyof QuickSightDataSourceAttribs)[] =
    ["Status", "CreatedTime", "LastUpdatedTime", "Arn"];
  constructor(
    logicalId: string,
    properties: QuickSightDataSourceProps,
    options?: ResourceOptions,
  ) {
    super(
      QuickSightDataSource.Type,
      QuickSightDataSource.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::QuickSight::RefreshSchedule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-refreshschedule.html | AWS::QuickSight::RefreshSchedule}
 */
export interface QuickSightRefreshScheduleProps {
  Schedule?: QuickSightRefreshScheduleRefreshScheduleMap;
  AwsAccountId?: string;
  DataSetId?: string;
}
/**
 * Attributes type definition for AWS::QuickSight::RefreshSchedule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-refreshschedule.html | AWS::QuickSight::RefreshSchedule}
 */
export interface QuickSightRefreshScheduleAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::QuickSight::RefreshSchedule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-refreshschedule.html | AWS::QuickSight::RefreshSchedule}
 */
export class QuickSightRefreshSchedule extends ResourceBase<
  "AWS::QuickSight::RefreshSchedule",
  QuickSightRefreshScheduleProps,
  QuickSightRefreshScheduleAttribs
> {
  public static readonly Type = "AWS::QuickSight::RefreshSchedule";
  public static readonly AttributeNames: readonly (keyof QuickSightRefreshScheduleAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: QuickSightRefreshScheduleProps,
    options?: ResourceOptions,
  ) {
    super(
      QuickSightRefreshSchedule.Type,
      QuickSightRefreshSchedule.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::QuickSight::Template
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-template.html | AWS::QuickSight::Template}
 */
export interface QuickSightTemplateProps {
  VersionDescription?: string;
  SourceEntity?: QuickSightTemplateTemplateSourceEntity;
  Definition?: QuickSightTemplateTemplateVersionDefinition;
  AwsAccountId: string;
  Permissions?: any[];
  ValidationStrategy?: QuickSightTemplateValidationStrategy;
  Tags?: Tag[];
  TemplateId: string;
  Name?: string;
}
/**
 * Attributes type definition for AWS::QuickSight::Template
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-template.html | AWS::QuickSight::Template}
 */
export interface QuickSightTemplateAttribs {
  "Version.Status"?: string;
  CreatedTime?: string;
  "Version.DataSetConfigurations"?: any[];
  LastUpdatedTime?: string;
  "Version.VersionNumber"?: number;
  "Version.Sheets"?: any[];
  "Version.ThemeArn"?: string;
  "Version.Errors"?: any[];
  "Version.CreatedTime"?: string;
  "Version.Description"?: string;
  Version?: QuickSightTemplateTemplateVersion;
  Arn?: string;
  "Version.SourceEntityArn"?: string;
}
/**
 * Resource class for AWS::QuickSight::Template
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-template.html | AWS::QuickSight::Template}
 */
export class QuickSightTemplate extends ResourceBase<
  "AWS::QuickSight::Template",
  QuickSightTemplateProps,
  QuickSightTemplateAttribs
> {
  public static readonly Type = "AWS::QuickSight::Template";
  public static readonly AttributeNames: readonly (keyof QuickSightTemplateAttribs)[] =
    [
      "Version.Status",
      "CreatedTime",
      "Version.DataSetConfigurations",
      "LastUpdatedTime",
      "Version.VersionNumber",
      "Version.Sheets",
      "Version.ThemeArn",
      "Version.Errors",
      "Version.CreatedTime",
      "Version.Description",
      "Version",
      "Arn",
      "Version.SourceEntityArn",
    ];
  constructor(
    logicalId: string,
    properties: QuickSightTemplateProps,
    options?: ResourceOptions,
  ) {
    super(
      QuickSightTemplate.Type,
      QuickSightTemplate.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::QuickSight::Theme
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html | AWS::QuickSight::Theme}
 */
export interface QuickSightThemeProps {
  ThemeId: string;
  VersionDescription?: string;
  Configuration: QuickSightThemeThemeConfiguration;
  BaseThemeId: string;
  AwsAccountId: string;
  Permissions?: any[];
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::QuickSight::Theme
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html | AWS::QuickSight::Theme}
 */
export interface QuickSightThemeAttribs {
  "Version.Configuration.Typography"?: QuickSightThemeTypography;
  "Version.Status"?: string;
  "Version.BaseThemeId"?: string;
  CreatedTime?: string;
  "Version.Configuration"?: QuickSightThemeThemeConfiguration;
  "Version.Configuration.DataColorPalette"?: QuickSightThemeDataColorPalette;
  LastUpdatedTime?: string;
  "Version.Configuration.UIColorPalette"?: QuickSightThemeUIColorPalette;
  "Version.VersionNumber"?: number;
  "Version.Arn"?: string;
  "Version.Errors"?: any[];
  "Version.Description"?: string;
  "Version.CreatedTime"?: string;
  Type?: string;
  Version?: QuickSightThemeThemeVersion;
  Arn?: string;
  "Version.Configuration.Sheet"?: QuickSightThemeSheetStyle;
}
/**
 * Resource class for AWS::QuickSight::Theme
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html | AWS::QuickSight::Theme}
 */
export class QuickSightTheme extends ResourceBase<
  "AWS::QuickSight::Theme",
  QuickSightThemeProps,
  QuickSightThemeAttribs
> {
  public static readonly Type = "AWS::QuickSight::Theme";
  public static readonly AttributeNames: readonly (keyof QuickSightThemeAttribs)[] =
    [
      "Version.Configuration.Typography",
      "Version.Status",
      "Version.BaseThemeId",
      "CreatedTime",
      "Version.Configuration",
      "Version.Configuration.DataColorPalette",
      "LastUpdatedTime",
      "Version.Configuration.UIColorPalette",
      "Version.VersionNumber",
      "Version.Arn",
      "Version.Errors",
      "Version.Description",
      "Version.CreatedTime",
      "Type",
      "Version",
      "Arn",
      "Version.Configuration.Sheet",
    ];
  constructor(
    logicalId: string,
    properties: QuickSightThemeProps,
    options?: ResourceOptions,
  ) {
    super(
      QuickSightTheme.Type,
      QuickSightTheme.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::QuickSight::Topic
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html | AWS::QuickSight::Topic}
 */
export interface QuickSightTopicProps {
  Description?: string;
  DataSets?: any[];
  AwsAccountId?: string;
  TopicId?: string;
  Name?: string;
}
/**
 * Attributes type definition for AWS::QuickSight::Topic
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html | AWS::QuickSight::Topic}
 */
export interface QuickSightTopicAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::QuickSight::Topic
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html | AWS::QuickSight::Topic}
 */
export class QuickSightTopic extends ResourceBase<
  "AWS::QuickSight::Topic",
  QuickSightTopicProps,
  QuickSightTopicAttribs
> {
  public static readonly Type = "AWS::QuickSight::Topic";
  public static readonly AttributeNames: readonly (keyof QuickSightTopicAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: QuickSightTopicProps,
    options?: ResourceOptions,
  ) {
    super(
      QuickSightTopic.Type,
      QuickSightTopic.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::QuickSight::VPCConnection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-vpcconnection.html | AWS::QuickSight::VPCConnection}
 */
export interface QuickSightVPCConnectionProps {
  DnsResolvers?: any[];
  AvailabilityStatus?: string;
  AwsAccountId?: string;
  VPCConnectionId?: string;
  SecurityGroupIds?: any[];
  SubnetIds?: any[];
  RoleArn?: string;
  Tags?: Tag[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::QuickSight::VPCConnection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-vpcconnection.html | AWS::QuickSight::VPCConnection}
 */
export interface QuickSightVPCConnectionAttribs {
  Status?: string;
  CreatedTime?: string;
  VPCId?: string;
  NetworkInterfaces?: any[];
  LastUpdatedTime?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::QuickSight::VPCConnection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-vpcconnection.html | AWS::QuickSight::VPCConnection}
 */
export class QuickSightVPCConnection extends ResourceBase<
  "AWS::QuickSight::VPCConnection",
  QuickSightVPCConnectionProps,
  QuickSightVPCConnectionAttribs
> {
  public static readonly Type = "AWS::QuickSight::VPCConnection";
  public static readonly AttributeNames: readonly (keyof QuickSightVPCConnectionAttribs)[] =
    [
      "Status",
      "CreatedTime",
      "VPCId",
      "NetworkInterfaces",
      "LastUpdatedTime",
      "Arn",
    ];
  constructor(
    logicalId: string,
    properties: QuickSightVPCConnectionProps,
    options?: ResourceOptions,
  ) {
    super(
      QuickSightVPCConnection.Type,
      QuickSightVPCConnection.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
