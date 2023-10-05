import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::EventSchemas::Discoverer.TagsEntry
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eventschemas-discoverer-tagsentry.html | AWS::EventSchemas::Discoverer.TagsEntry}
 */
export interface EventSchemasDiscovererTagsEntry {
  Value: string;
  Key: string;
}
/**
 * Type definition for AWS::EventSchemas::Registry.TagsEntry
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eventschemas-registry-tagsentry.html | AWS::EventSchemas::Registry.TagsEntry}
 */
export interface EventSchemasRegistryTagsEntry {
  Value: string;
  Key: string;
}
/**
 * Type definition for AWS::EventSchemas::Schema.TagsEntry
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eventschemas-schema-tagsentry.html | AWS::EventSchemas::Schema.TagsEntry}
 */
export interface EventSchemasSchemaTagsEntry {
  Value: string;
  Key: string;
}
/**
 * Type definition for AWS::EventSchemas::Discoverer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-discoverer.html | AWS::EventSchemas::Discoverer}
 */
export interface EventSchemasDiscovererProps {
  CrossAccount?: boolean;
  Description?: string;
  SourceArn: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EventSchemas::Discoverer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-discoverer.html | AWS::EventSchemas::Discoverer}
 */
export interface EventSchemasDiscovererAttribs {
  DiscovererArn?: string;
  DiscovererId?: string;
  CrossAccount?: boolean;
}
/**
 * Resource class for AWS::EventSchemas::Discoverer
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-discoverer.html | AWS::EventSchemas::Discoverer}
 */
export class EventSchemasDiscoverer extends ResourceBase<
  "AWS::EventSchemas::Discoverer",
  EventSchemasDiscovererProps,
  EventSchemasDiscovererAttribs
> {
  public static readonly Type = "AWS::EventSchemas::Discoverer";
  public static readonly AttributeNames: readonly (keyof EventSchemasDiscovererAttribs)[] =
    ["DiscovererArn", "DiscovererId", "CrossAccount"];
  constructor(
    logicalId: string,
    properties: EventSchemasDiscovererProps,
    options?: ResourceOptions,
  ) {
    super(
      EventSchemasDiscoverer.Type,
      EventSchemasDiscoverer.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EventSchemas::Registry
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-registry.html | AWS::EventSchemas::Registry}
 */
export interface EventSchemasRegistryProps {
  Description?: string;
  RegistryName?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EventSchemas::Registry
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-registry.html | AWS::EventSchemas::Registry}
 */
export interface EventSchemasRegistryAttribs {
  RegistryName?: string;
  RegistryArn?: string;
}
/**
 * Resource class for AWS::EventSchemas::Registry
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-registry.html | AWS::EventSchemas::Registry}
 */
export class EventSchemasRegistry extends ResourceBase<
  "AWS::EventSchemas::Registry",
  EventSchemasRegistryProps,
  EventSchemasRegistryAttribs
> {
  public static readonly Type = "AWS::EventSchemas::Registry";
  public static readonly AttributeNames: readonly (keyof EventSchemasRegistryAttribs)[] =
    ["RegistryName", "RegistryArn"];
  constructor(
    logicalId: string,
    properties: EventSchemasRegistryProps,
    options?: ResourceOptions,
  ) {
    super(
      EventSchemasRegistry.Type,
      EventSchemasRegistry.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EventSchemas::RegistryPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-registrypolicy.html | AWS::EventSchemas::RegistryPolicy}
 */
export interface EventSchemasRegistryPolicyProps {
  Policy: object;
  RegistryName: string;
  RevisionId?: string;
}
/**
 * Attributes type definition for AWS::EventSchemas::RegistryPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-registrypolicy.html | AWS::EventSchemas::RegistryPolicy}
 */
export interface EventSchemasRegistryPolicyAttribs {
  Id?: string;
}
/**
 * Resource class for AWS::EventSchemas::RegistryPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-registrypolicy.html | AWS::EventSchemas::RegistryPolicy}
 */
export class EventSchemasRegistryPolicy extends ResourceBase<
  "AWS::EventSchemas::RegistryPolicy",
  EventSchemasRegistryPolicyProps,
  EventSchemasRegistryPolicyAttribs
> {
  public static readonly Type = "AWS::EventSchemas::RegistryPolicy";
  public static readonly AttributeNames: readonly (keyof EventSchemasRegistryPolicyAttribs)[] =
    ["Id"];
  constructor(
    logicalId: string,
    properties: EventSchemasRegistryPolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      EventSchemasRegistryPolicy.Type,
      EventSchemasRegistryPolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::EventSchemas::Schema
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-schema.html | AWS::EventSchemas::Schema}
 */
export interface EventSchemasSchemaProps {
  Type: string;
  Description?: string;
  Content: string;
  RegistryName: string;
  SchemaName?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::EventSchemas::Schema
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-schema.html | AWS::EventSchemas::Schema}
 */
export interface EventSchemasSchemaAttribs {
  SchemaVersion?: string;
  SchemaArn?: string;
  SchemaName?: string;
}
/**
 * Resource class for AWS::EventSchemas::Schema
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-schema.html | AWS::EventSchemas::Schema}
 */
export class EventSchemasSchema extends ResourceBase<
  "AWS::EventSchemas::Schema",
  EventSchemasSchemaProps,
  EventSchemasSchemaAttribs
> {
  public static readonly Type = "AWS::EventSchemas::Schema";
  public static readonly AttributeNames: readonly (keyof EventSchemasSchemaAttribs)[] =
    ["SchemaVersion", "SchemaArn", "SchemaName"];
  constructor(
    logicalId: string,
    properties: EventSchemasSchemaProps,
    options?: ResourceOptions,
  ) {
    super(
      EventSchemasSchema.Type,
      EventSchemasSchema.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
