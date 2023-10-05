import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::Location::Map.MapConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-location-map-mapconfiguration.html | AWS::Location::Map.MapConfiguration}
 */
export interface LocationMapMapConfiguration {
  Style: string;
}
/**
 * Type definition for AWS::Location::PlaceIndex.DataSourceConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-location-placeindex-datasourceconfiguration.html | AWS::Location::PlaceIndex.DataSourceConfiguration}
 */
export interface LocationPlaceIndexDataSourceConfiguration {
  IntendedUse?: string;
}
/**
 * Type definition for AWS::Location::GeofenceCollection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-geofencecollection.html | AWS::Location::GeofenceCollection}
 */
export interface LocationGeofenceCollectionProps {
  Description?: string;
  KmsKeyId?: string;
  CollectionName: string;
}
/**
 * Attributes type definition for AWS::Location::GeofenceCollection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-geofencecollection.html | AWS::Location::GeofenceCollection}
 */
export interface LocationGeofenceCollectionAttribs {
  CollectionArn?: string;
  CreateTime?: string;
  UpdateTime?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::Location::GeofenceCollection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-geofencecollection.html | AWS::Location::GeofenceCollection}
 */
export class LocationGeofenceCollection extends ResourceBase<
  "AWS::Location::GeofenceCollection",
  LocationGeofenceCollectionProps,
  LocationGeofenceCollectionAttribs
> {
  public static readonly Type = "AWS::Location::GeofenceCollection";
  public static readonly AttributeNames: readonly (keyof LocationGeofenceCollectionAttribs)[] =
    ["CollectionArn", "CreateTime", "UpdateTime", "Arn"];
  constructor(
    logicalId: string,
    properties: LocationGeofenceCollectionProps,
    options?: ResourceOptions,
  ) {
    super(
      LocationGeofenceCollection.Type,
      LocationGeofenceCollection.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Location::Map
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-map.html | AWS::Location::Map}
 */
export interface LocationMapProps {
  MapName: string;
  Description?: string;
  Configuration: LocationMapMapConfiguration;
  PricingPlan?: string;
}
/**
 * Attributes type definition for AWS::Location::Map
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-map.html | AWS::Location::Map}
 */
export interface LocationMapAttribs {
  CreateTime?: string;
  UpdateTime?: string;
  Arn?: string;
  MapArn?: string;
  DataSource?: string;
}
/**
 * Resource class for AWS::Location::Map
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-map.html | AWS::Location::Map}
 */
export class LocationMap extends ResourceBase<
  "AWS::Location::Map",
  LocationMapProps,
  LocationMapAttribs
> {
  public static readonly Type = "AWS::Location::Map";
  public static readonly AttributeNames: readonly (keyof LocationMapAttribs)[] =
    ["CreateTime", "UpdateTime", "Arn", "MapArn", "DataSource"];
  constructor(
    logicalId: string,
    properties: LocationMapProps,
    options?: ResourceOptions,
  ) {
    super(
      LocationMap.Type,
      LocationMap.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Location::PlaceIndex
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-placeindex.html | AWS::Location::PlaceIndex}
 */
export interface LocationPlaceIndexProps {
  IndexName: string;
  Description?: string;
  PricingPlan?: string;
  DataSourceConfiguration?: LocationPlaceIndexDataSourceConfiguration;
  DataSource: string;
}
/**
 * Attributes type definition for AWS::Location::PlaceIndex
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-placeindex.html | AWS::Location::PlaceIndex}
 */
export interface LocationPlaceIndexAttribs {
  IndexArn?: string;
  CreateTime?: string;
  UpdateTime?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::Location::PlaceIndex
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-placeindex.html | AWS::Location::PlaceIndex}
 */
export class LocationPlaceIndex extends ResourceBase<
  "AWS::Location::PlaceIndex",
  LocationPlaceIndexProps,
  LocationPlaceIndexAttribs
> {
  public static readonly Type = "AWS::Location::PlaceIndex";
  public static readonly AttributeNames: readonly (keyof LocationPlaceIndexAttribs)[] =
    ["IndexArn", "CreateTime", "UpdateTime", "Arn"];
  constructor(
    logicalId: string,
    properties: LocationPlaceIndexProps,
    options?: ResourceOptions,
  ) {
    super(
      LocationPlaceIndex.Type,
      LocationPlaceIndex.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Location::RouteCalculator
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-routecalculator.html | AWS::Location::RouteCalculator}
 */
export interface LocationRouteCalculatorProps {
  CalculatorName: string;
  Description?: string;
  PricingPlan?: string;
  DataSource: string;
}
/**
 * Attributes type definition for AWS::Location::RouteCalculator
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-routecalculator.html | AWS::Location::RouteCalculator}
 */
export interface LocationRouteCalculatorAttribs {
  CreateTime?: string;
  UpdateTime?: string;
  CalculatorArn?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::Location::RouteCalculator
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-routecalculator.html | AWS::Location::RouteCalculator}
 */
export class LocationRouteCalculator extends ResourceBase<
  "AWS::Location::RouteCalculator",
  LocationRouteCalculatorProps,
  LocationRouteCalculatorAttribs
> {
  public static readonly Type = "AWS::Location::RouteCalculator";
  public static readonly AttributeNames: readonly (keyof LocationRouteCalculatorAttribs)[] =
    ["CreateTime", "UpdateTime", "CalculatorArn", "Arn"];
  constructor(
    logicalId: string,
    properties: LocationRouteCalculatorProps,
    options?: ResourceOptions,
  ) {
    super(
      LocationRouteCalculator.Type,
      LocationRouteCalculator.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Location::Tracker
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-tracker.html | AWS::Location::Tracker}
 */
export interface LocationTrackerProps {
  TrackerName: string;
  Description?: string;
  KmsKeyId?: string;
  PositionFiltering?: string;
}
/**
 * Attributes type definition for AWS::Location::Tracker
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-tracker.html | AWS::Location::Tracker}
 */
export interface LocationTrackerAttribs {
  CreateTime?: string;
  UpdateTime?: string;
  Arn?: string;
  TrackerArn?: string;
}
/**
 * Resource class for AWS::Location::Tracker
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-tracker.html | AWS::Location::Tracker}
 */
export class LocationTracker extends ResourceBase<
  "AWS::Location::Tracker",
  LocationTrackerProps,
  LocationTrackerAttribs
> {
  public static readonly Type = "AWS::Location::Tracker";
  public static readonly AttributeNames: readonly (keyof LocationTrackerAttribs)[] =
    ["CreateTime", "UpdateTime", "Arn", "TrackerArn"];
  constructor(
    logicalId: string,
    properties: LocationTrackerProps,
    options?: ResourceOptions,
  ) {
    super(
      LocationTracker.Type,
      LocationTracker.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Location::TrackerConsumer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-trackerconsumer.html | AWS::Location::TrackerConsumer}
 */
export interface LocationTrackerConsumerProps {
  TrackerName: string;
  ConsumerArn: string;
}
/**
 * Resource class for AWS::Location::TrackerConsumer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-trackerconsumer.html | AWS::Location::TrackerConsumer}
 */
export class LocationTrackerConsumer extends ResourceBase<
  "AWS::Location::TrackerConsumer",
  LocationTrackerConsumerProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::Location::TrackerConsumer";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: LocationTrackerConsumerProps,
    options?: ResourceOptions,
  ) {
    super(
      LocationTrackerConsumer.Type,
      LocationTrackerConsumer.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
