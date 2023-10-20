import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Kendra::DataSource.AccessControlListConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-accesscontrollistconfiguration.html | AWS::Kendra::DataSource.AccessControlListConfiguration}
 */
export interface KendraDataSourceAccessControlListConfiguration {
  KeyPath?: string;
}
/**
 * Type definition for AWS::Kendra::DataSource.AclConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-aclconfiguration.html | AWS::Kendra::DataSource.AclConfiguration}
 */
export interface KendraDataSourceAclConfiguration {
  AllowedGroupsColumnName: string;
}
/**
 * Type definition for AWS::Kendra::DataSource.ColumnConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-columnconfiguration.html | AWS::Kendra::DataSource.ColumnConfiguration}
 */
export interface KendraDataSourceColumnConfiguration {
  ChangeDetectingColumns: any[];
  DocumentTitleColumnName?: string;
  DocumentIdColumnName: string;
  DocumentDataColumnName: string;
  FieldMappings?: any[];
}
/**
 * Type definition for AWS::Kendra::DataSource.ConfluenceAttachmentConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceattachmentconfiguration.html | AWS::Kendra::DataSource.ConfluenceAttachmentConfiguration}
 */
export interface KendraDataSourceConfluenceAttachmentConfiguration {
  AttachmentFieldMappings?: any[];
  CrawlAttachments?: boolean;
}
/**
 * Type definition for AWS::Kendra::DataSource.ConfluenceAttachmentToIndexFieldMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceattachmenttoindexfieldmapping.html | AWS::Kendra::DataSource.ConfluenceAttachmentToIndexFieldMapping}
 */
export interface KendraDataSourceConfluenceAttachmentToIndexFieldMapping {
  DateFieldFormat?: string;
  IndexFieldName: string;
  DataSourceFieldName: string;
}
/**
 * Type definition for AWS::Kendra::DataSource.ConfluenceBlogConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceblogconfiguration.html | AWS::Kendra::DataSource.ConfluenceBlogConfiguration}
 */
export interface KendraDataSourceConfluenceBlogConfiguration {
  BlogFieldMappings?: any[];
}
/**
 * Type definition for AWS::Kendra::DataSource.ConfluenceBlogToIndexFieldMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceblogtoindexfieldmapping.html | AWS::Kendra::DataSource.ConfluenceBlogToIndexFieldMapping}
 */
export interface KendraDataSourceConfluenceBlogToIndexFieldMapping {
  DateFieldFormat?: string;
  IndexFieldName: string;
  DataSourceFieldName: string;
}
/**
 * Type definition for AWS::Kendra::DataSource.ConfluenceConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceconfiguration.html | AWS::Kendra::DataSource.ConfluenceConfiguration}
 */
export interface KendraDataSourceConfluenceConfiguration {
  SecretArn: string;
  AttachmentConfiguration?: KendraDataSourceConfluenceAttachmentConfiguration;
  ServerUrl: string;
  PageConfiguration?: KendraDataSourceConfluencePageConfiguration;
  BlogConfiguration?: KendraDataSourceConfluenceBlogConfiguration;
  Version: string;
  VpcConfiguration?: KendraDataSourceDataSourceVpcConfiguration;
  InclusionPatterns?: any[];
  ExclusionPatterns?: any[];
  SpaceConfiguration?: KendraDataSourceConfluenceSpaceConfiguration;
}
/**
 * Type definition for AWS::Kendra::DataSource.ConfluencePageConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluencepageconfiguration.html | AWS::Kendra::DataSource.ConfluencePageConfiguration}
 */
export interface KendraDataSourceConfluencePageConfiguration {
  PageFieldMappings?: any[];
}
/**
 * Type definition for AWS::Kendra::DataSource.ConfluencePageToIndexFieldMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluencepagetoindexfieldmapping.html | AWS::Kendra::DataSource.ConfluencePageToIndexFieldMapping}
 */
export interface KendraDataSourceConfluencePageToIndexFieldMapping {
  DateFieldFormat?: string;
  IndexFieldName: string;
  DataSourceFieldName: string;
}
/**
 * Type definition for AWS::Kendra::DataSource.ConfluenceSpaceConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluencespaceconfiguration.html | AWS::Kendra::DataSource.ConfluenceSpaceConfiguration}
 */
export interface KendraDataSourceConfluenceSpaceConfiguration {
  ExcludeSpaces?: any[];
  SpaceFieldMappings?: any[];
  CrawlPersonalSpaces?: boolean;
  CrawlArchivedSpaces?: boolean;
  IncludeSpaces?: any[];
}
/**
 * Type definition for AWS::Kendra::DataSource.ConfluenceSpaceToIndexFieldMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluencespacetoindexfieldmapping.html | AWS::Kendra::DataSource.ConfluenceSpaceToIndexFieldMapping}
 */
export interface KendraDataSourceConfluenceSpaceToIndexFieldMapping {
  DateFieldFormat?: string;
  IndexFieldName: string;
  DataSourceFieldName: string;
}
/**
 * Type definition for AWS::Kendra::DataSource.ConnectionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-connectionconfiguration.html | AWS::Kendra::DataSource.ConnectionConfiguration}
 */
export interface KendraDataSourceConnectionConfiguration {
  SecretArn: string;
  TableName: string;
  DatabasePort: number;
  DatabaseHost: string;
  DatabaseName: string;
}
/**
 * Type definition for AWS::Kendra::DataSource.CustomDocumentEnrichmentConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-customdocumentenrichmentconfiguration.html | AWS::Kendra::DataSource.CustomDocumentEnrichmentConfiguration}
 */
export interface KendraDataSourceCustomDocumentEnrichmentConfiguration {
  InlineConfigurations?: any[];
  PreExtractionHookConfiguration?: KendraDataSourceHookConfiguration;
  PostExtractionHookConfiguration?: KendraDataSourceHookConfiguration;
  RoleArn?: string;
}
/**
 * Type definition for AWS::Kendra::DataSource.DataSourceConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-datasourceconfiguration.html | AWS::Kendra::DataSource.DataSourceConfiguration}
 */
export interface KendraDataSourceDataSourceConfiguration {
  GoogleDriveConfiguration?: KendraDataSourceGoogleDriveConfiguration;
  WebCrawlerConfiguration?: KendraDataSourceWebCrawlerConfiguration;
  S3Configuration?: KendraDataSourceS3DataSourceConfiguration;
  SalesforceConfiguration?: KendraDataSourceSalesforceConfiguration;
  DatabaseConfiguration?: KendraDataSourceDatabaseConfiguration;
  SharePointConfiguration?: KendraDataSourceSharePointConfiguration;
  ConfluenceConfiguration?: KendraDataSourceConfluenceConfiguration;
  WorkDocsConfiguration?: KendraDataSourceWorkDocsConfiguration;
  OneDriveConfiguration?: KendraDataSourceOneDriveConfiguration;
  ServiceNowConfiguration?: KendraDataSourceServiceNowConfiguration;
}
/**
 * Type definition for AWS::Kendra::DataSource.DataSourceToIndexFieldMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-datasourcetoindexfieldmapping.html | AWS::Kendra::DataSource.DataSourceToIndexFieldMapping}
 */
export interface KendraDataSourceDataSourceToIndexFieldMapping {
  DateFieldFormat?: string;
  IndexFieldName: string;
  DataSourceFieldName: string;
}
/**
 * Type definition for AWS::Kendra::DataSource.DataSourceVpcConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-datasourcevpcconfiguration.html | AWS::Kendra::DataSource.DataSourceVpcConfiguration}
 */
export interface KendraDataSourceDataSourceVpcConfiguration {
  SubnetIds: any[];
  SecurityGroupIds: any[];
}
/**
 * Type definition for AWS::Kendra::DataSource.DatabaseConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-databaseconfiguration.html | AWS::Kendra::DataSource.DatabaseConfiguration}
 */
export interface KendraDataSourceDatabaseConfiguration {
  SqlConfiguration?: KendraDataSourceSqlConfiguration;
  DatabaseEngineType: string;
  ConnectionConfiguration: KendraDataSourceConnectionConfiguration;
  ColumnConfiguration: KendraDataSourceColumnConfiguration;
  VpcConfiguration?: KendraDataSourceDataSourceVpcConfiguration;
  AclConfiguration?: KendraDataSourceAclConfiguration;
}
/**
 * Type definition for AWS::Kendra::DataSource.DocumentAttributeCondition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-documentattributecondition.html | AWS::Kendra::DataSource.DocumentAttributeCondition}
 */
export interface KendraDataSourceDocumentAttributeCondition {
  Operator: string;
  ConditionDocumentAttributeKey: string;
  ConditionOnValue?: KendraDataSourceDocumentAttributeValue;
}
/**
 * Type definition for AWS::Kendra::DataSource.DocumentAttributeTarget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-documentattributetarget.html | AWS::Kendra::DataSource.DocumentAttributeTarget}
 */
export interface KendraDataSourceDocumentAttributeTarget {
  TargetDocumentAttributeKey: string;
  TargetDocumentAttributeValueDeletion?: boolean;
  TargetDocumentAttributeValue?: KendraDataSourceDocumentAttributeValue;
}
/**
 * Type definition for AWS::Kendra::DataSource.DocumentAttributeValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-documentattributevalue.html | AWS::Kendra::DataSource.DocumentAttributeValue}
 */
export interface KendraDataSourceDocumentAttributeValue {
  DateValue?: string;
  LongValue?: number;
  StringValue?: string;
  StringListValue?: any[];
}
/**
 * Type definition for AWS::Kendra::DataSource.DocumentsMetadataConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-documentsmetadataconfiguration.html | AWS::Kendra::DataSource.DocumentsMetadataConfiguration}
 */
export interface KendraDataSourceDocumentsMetadataConfiguration {
  S3Prefix?: string;
}
/**
 * Type definition for AWS::Kendra::DataSource.GoogleDriveConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-googledriveconfiguration.html | AWS::Kendra::DataSource.GoogleDriveConfiguration}
 */
export interface KendraDataSourceGoogleDriveConfiguration {
  SecretArn: string;
  ExcludeSharedDrives?: any[];
  ExcludeUserAccounts?: any[];
  InclusionPatterns?: any[];
  ExcludeMimeTypes?: any[];
  FieldMappings?: any[];
  ExclusionPatterns?: any[];
}
/**
 * Type definition for AWS::Kendra::DataSource.HookConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-hookconfiguration.html | AWS::Kendra::DataSource.HookConfiguration}
 */
export interface KendraDataSourceHookConfiguration {
  S3Bucket: string;
  LambdaArn: string;
  InvocationCondition?: KendraDataSourceDocumentAttributeCondition;
}
/**
 * Type definition for AWS::Kendra::DataSource.InlineCustomDocumentEnrichmentConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-inlinecustomdocumentenrichmentconfiguration.html | AWS::Kendra::DataSource.InlineCustomDocumentEnrichmentConfiguration}
 */
export interface KendraDataSourceInlineCustomDocumentEnrichmentConfiguration {
  Condition?: KendraDataSourceDocumentAttributeCondition;
  Target?: KendraDataSourceDocumentAttributeTarget;
  DocumentContentDeletion?: boolean;
}
/**
 * Type definition for AWS::Kendra::DataSource.OneDriveConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-onedriveconfiguration.html | AWS::Kendra::DataSource.OneDriveConfiguration}
 */
export interface KendraDataSourceOneDriveConfiguration {
  TenantDomain: string;
  SecretArn: string;
  DisableLocalGroups?: boolean;
  OneDriveUsers: KendraDataSourceOneDriveUsers;
  InclusionPatterns?: any[];
  FieldMappings?: any[];
  ExclusionPatterns?: any[];
}
/**
 * Type definition for AWS::Kendra::DataSource.OneDriveUsers
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-onedriveusers.html | AWS::Kendra::DataSource.OneDriveUsers}
 */
export interface KendraDataSourceOneDriveUsers {
  OneDriveUserList?: any[];
  OneDriveUserS3Path?: KendraDataSourceS3Path;
}
/**
 * Type definition for AWS::Kendra::DataSource.ProxyConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-proxyconfiguration.html | AWS::Kendra::DataSource.ProxyConfiguration}
 */
export interface KendraDataSourceProxyConfiguration {
  Port: number;
  Host: string;
  Credentials?: string;
}
/**
 * Type definition for AWS::Kendra::DataSource.S3DataSourceConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-s3datasourceconfiguration.html | AWS::Kendra::DataSource.S3DataSourceConfiguration}
 */
export interface KendraDataSourceS3DataSourceConfiguration {
  BucketName: string;
  InclusionPatterns?: any[];
  InclusionPrefixes?: any[];
  AccessControlListConfiguration?: KendraDataSourceAccessControlListConfiguration;
  ExclusionPatterns?: any[];
  DocumentsMetadataConfiguration?: KendraDataSourceDocumentsMetadataConfiguration;
}
/**
 * Type definition for AWS::Kendra::DataSource.S3Path
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-s3path.html | AWS::Kendra::DataSource.S3Path}
 */
export interface KendraDataSourceS3Path {
  Bucket: string;
  Key: string;
}
/**
 * Type definition for AWS::Kendra::DataSource.SalesforceChatterFeedConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcechatterfeedconfiguration.html | AWS::Kendra::DataSource.SalesforceChatterFeedConfiguration}
 */
export interface KendraDataSourceSalesforceChatterFeedConfiguration {
  DocumentTitleFieldName?: string;
  IncludeFilterTypes?: any[];
  FieldMappings?: any[];
  DocumentDataFieldName: string;
}
/**
 * Type definition for AWS::Kendra::DataSource.SalesforceConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforceconfiguration.html | AWS::Kendra::DataSource.SalesforceConfiguration}
 */
export interface KendraDataSourceSalesforceConfiguration {
  SecretArn: string;
  ServerUrl: string;
  IncludeAttachmentFilePatterns?: any[];
  StandardObjectConfigurations?: any[];
  StandardObjectAttachmentConfiguration?: KendraDataSourceSalesforceStandardObjectAttachmentConfiguration;
  ExcludeAttachmentFilePatterns?: any[];
  CrawlAttachments?: boolean;
  ChatterFeedConfiguration?: KendraDataSourceSalesforceChatterFeedConfiguration;
  KnowledgeArticleConfiguration?: KendraDataSourceSalesforceKnowledgeArticleConfiguration;
}
/**
 * Type definition for AWS::Kendra::DataSource.SalesforceCustomKnowledgeArticleTypeConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcecustomknowledgearticletypeconfiguration.html | AWS::Kendra::DataSource.SalesforceCustomKnowledgeArticleTypeConfiguration}
 */
export interface KendraDataSourceSalesforceCustomKnowledgeArticleTypeConfiguration {
  DocumentTitleFieldName?: string;
  FieldMappings?: any[];
  Name: string;
  DocumentDataFieldName: string;
}
/**
 * Type definition for AWS::Kendra::DataSource.SalesforceKnowledgeArticleConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforceknowledgearticleconfiguration.html | AWS::Kendra::DataSource.SalesforceKnowledgeArticleConfiguration}
 */
export interface KendraDataSourceSalesforceKnowledgeArticleConfiguration {
  IncludedStates: any[];
  StandardKnowledgeArticleTypeConfiguration?: KendraDataSourceSalesforceStandardKnowledgeArticleTypeConfiguration;
  CustomKnowledgeArticleTypeConfigurations?: any[];
}
/**
 * Type definition for AWS::Kendra::DataSource.SalesforceStandardKnowledgeArticleTypeConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcestandardknowledgearticletypeconfiguration.html | AWS::Kendra::DataSource.SalesforceStandardKnowledgeArticleTypeConfiguration}
 */
export interface KendraDataSourceSalesforceStandardKnowledgeArticleTypeConfiguration {
  DocumentTitleFieldName?: string;
  FieldMappings?: any[];
  DocumentDataFieldName: string;
}
/**
 * Type definition for AWS::Kendra::DataSource.SalesforceStandardObjectAttachmentConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcestandardobjectattachmentconfiguration.html | AWS::Kendra::DataSource.SalesforceStandardObjectAttachmentConfiguration}
 */
export interface KendraDataSourceSalesforceStandardObjectAttachmentConfiguration {
  DocumentTitleFieldName?: string;
  FieldMappings?: any[];
}
/**
 * Type definition for AWS::Kendra::DataSource.SalesforceStandardObjectConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcestandardobjectconfiguration.html | AWS::Kendra::DataSource.SalesforceStandardObjectConfiguration}
 */
export interface KendraDataSourceSalesforceStandardObjectConfiguration {
  DocumentTitleFieldName?: string;
  FieldMappings?: any[];
  Name: string;
  DocumentDataFieldName: string;
}
/**
 * Type definition for AWS::Kendra::DataSource.ServiceNowConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-servicenowconfiguration.html | AWS::Kendra::DataSource.ServiceNowConfiguration}
 */
export interface KendraDataSourceServiceNowConfiguration {
  SecretArn: string;
  HostUrl: string;
  ServiceCatalogConfiguration?: KendraDataSourceServiceNowServiceCatalogConfiguration;
  ServiceNowBuildVersion: string;
  KnowledgeArticleConfiguration?: KendraDataSourceServiceNowKnowledgeArticleConfiguration;
  AuthenticationType?: string;
}
/**
 * Type definition for AWS::Kendra::DataSource.ServiceNowKnowledgeArticleConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-servicenowknowledgearticleconfiguration.html | AWS::Kendra::DataSource.ServiceNowKnowledgeArticleConfiguration}
 */
export interface KendraDataSourceServiceNowKnowledgeArticleConfiguration {
  DocumentTitleFieldName?: string;
  IncludeAttachmentFilePatterns?: any[];
  ExcludeAttachmentFilePatterns?: any[];
  FilterQuery?: string;
  CrawlAttachments?: boolean;
  FieldMappings?: any[];
  DocumentDataFieldName: string;
}
/**
 * Type definition for AWS::Kendra::DataSource.ServiceNowServiceCatalogConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-servicenowservicecatalogconfiguration.html | AWS::Kendra::DataSource.ServiceNowServiceCatalogConfiguration}
 */
export interface KendraDataSourceServiceNowServiceCatalogConfiguration {
  DocumentTitleFieldName?: string;
  IncludeAttachmentFilePatterns?: any[];
  ExcludeAttachmentFilePatterns?: any[];
  CrawlAttachments?: boolean;
  FieldMappings?: any[];
  DocumentDataFieldName: string;
}
/**
 * Type definition for AWS::Kendra::DataSource.SharePointConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-sharepointconfiguration.html | AWS::Kendra::DataSource.SharePointConfiguration}
 */
export interface KendraDataSourceSharePointConfiguration {
  SecretArn: string;
  DocumentTitleFieldName?: string;
  SslCertificateS3Path?: KendraDataSourceS3Path;
  DisableLocalGroups?: boolean;
  CrawlAttachments?: boolean;
  InclusionPatterns?: any[];
  VpcConfiguration?: KendraDataSourceDataSourceVpcConfiguration;
  Urls: any[];
  UseChangeLog?: boolean;
  FieldMappings?: any[];
  ExclusionPatterns?: any[];
  SharePointVersion: string;
}
/**
 * Type definition for AWS::Kendra::DataSource.SqlConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-sqlconfiguration.html | AWS::Kendra::DataSource.SqlConfiguration}
 */
export interface KendraDataSourceSqlConfiguration {
  QueryIdentifiersEnclosingOption?: string;
}
/**
 * Type definition for AWS::Kendra::DataSource.WebCrawlerAuthenticationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlerauthenticationconfiguration.html | AWS::Kendra::DataSource.WebCrawlerAuthenticationConfiguration}
 */
export interface KendraDataSourceWebCrawlerAuthenticationConfiguration {
  BasicAuthentication?: any[];
}
/**
 * Type definition for AWS::Kendra::DataSource.WebCrawlerBasicAuthentication
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlerbasicauthentication.html | AWS::Kendra::DataSource.WebCrawlerBasicAuthentication}
 */
export interface KendraDataSourceWebCrawlerBasicAuthentication {
  Port: number;
  Host: string;
  Credentials: string;
}
/**
 * Type definition for AWS::Kendra::DataSource.WebCrawlerConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlerconfiguration.html | AWS::Kendra::DataSource.WebCrawlerConfiguration}
 */
export interface KendraDataSourceWebCrawlerConfiguration {
  AuthenticationConfiguration?: KendraDataSourceWebCrawlerAuthenticationConfiguration;
  MaxLinksPerPage?: number;
  ProxyConfiguration?: KendraDataSourceProxyConfiguration;
  UrlExclusionPatterns?: any[];
  MaxUrlsPerMinuteCrawlRate?: number;
  UrlInclusionPatterns?: any[];
  Urls: KendraDataSourceWebCrawlerUrls;
  MaxContentSizePerPageInMegaBytes?: number;
  CrawlDepth?: number;
}
/**
 * Type definition for AWS::Kendra::DataSource.WebCrawlerSeedUrlConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlerseedurlconfiguration.html | AWS::Kendra::DataSource.WebCrawlerSeedUrlConfiguration}
 */
export interface KendraDataSourceWebCrawlerSeedUrlConfiguration {
  WebCrawlerMode?: string;
  SeedUrls: any[];
}
/**
 * Type definition for AWS::Kendra::DataSource.WebCrawlerSiteMapsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlersitemapsconfiguration.html | AWS::Kendra::DataSource.WebCrawlerSiteMapsConfiguration}
 */
export interface KendraDataSourceWebCrawlerSiteMapsConfiguration {
  SiteMaps: any[];
}
/**
 * Type definition for AWS::Kendra::DataSource.WebCrawlerUrls
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlerurls.html | AWS::Kendra::DataSource.WebCrawlerUrls}
 */
export interface KendraDataSourceWebCrawlerUrls {
  SiteMapsConfiguration?: KendraDataSourceWebCrawlerSiteMapsConfiguration;
  SeedUrlConfiguration?: KendraDataSourceWebCrawlerSeedUrlConfiguration;
}
/**
 * Type definition for AWS::Kendra::DataSource.WorkDocsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-workdocsconfiguration.html | AWS::Kendra::DataSource.WorkDocsConfiguration}
 */
export interface KendraDataSourceWorkDocsConfiguration {
  CrawlComments?: boolean;
  OrganizationId: string;
  InclusionPatterns?: any[];
  UseChangeLog?: boolean;
  FieldMappings?: any[];
  ExclusionPatterns?: any[];
}
/**
 * Type definition for AWS::Kendra::Faq.S3Path
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-faq-s3path.html | AWS::Kendra::Faq.S3Path}
 */
export interface KendraFaqS3Path {
  Bucket: string;
  Key: string;
}
/**
 * Type definition for AWS::Kendra::Index.CapacityUnitsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-capacityunitsconfiguration.html | AWS::Kendra::Index.CapacityUnitsConfiguration}
 */
export interface KendraIndexCapacityUnitsConfiguration {
  QueryCapacityUnits: number;
  StorageCapacityUnits: number;
}
/**
 * Type definition for AWS::Kendra::Index.DocumentMetadataConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-documentmetadataconfiguration.html | AWS::Kendra::Index.DocumentMetadataConfiguration}
 */
export interface KendraIndexDocumentMetadataConfiguration {
  Relevance?: KendraIndexRelevance;
  Type: string;
  Search?: KendraIndexSearch;
  Name: string;
}
/**
 * Type definition for AWS::Kendra::Index.JsonTokenTypeConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-jsontokentypeconfiguration.html | AWS::Kendra::Index.JsonTokenTypeConfiguration}
 */
export interface KendraIndexJsonTokenTypeConfiguration {
  GroupAttributeField: string;
  UserNameAttributeField: string;
}
/**
 * Type definition for AWS::Kendra::Index.JwtTokenTypeConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-jwttokentypeconfiguration.html | AWS::Kendra::Index.JwtTokenTypeConfiguration}
 */
export interface KendraIndexJwtTokenTypeConfiguration {
  ClaimRegex?: string;
  Issuer?: string;
  KeyLocation: string;
  SecretManagerArn?: string;
  GroupAttributeField?: string;
  URL?: string;
  UserNameAttributeField?: string;
}
/**
 * Type definition for AWS::Kendra::Index.Relevance
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-relevance.html | AWS::Kendra::Index.Relevance}
 */
export interface KendraIndexRelevance {
  Importance?: number;
  RankOrder?: string;
  ValueImportanceItems?: any[];
  Freshness?: boolean;
  Duration?: string;
}
/**
 * Type definition for AWS::Kendra::Index.Search
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-search.html | AWS::Kendra::Index.Search}
 */
export interface KendraIndexSearch {
  Displayable?: boolean;
  Sortable?: boolean;
  Facetable?: boolean;
  Searchable?: boolean;
}
/**
 * Type definition for AWS::Kendra::Index.ServerSideEncryptionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-serversideencryptionconfiguration.html | AWS::Kendra::Index.ServerSideEncryptionConfiguration}
 */
export interface KendraIndexServerSideEncryptionConfiguration {
  KmsKeyId?: string;
}
/**
 * Type definition for AWS::Kendra::Index.UserTokenConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-usertokenconfiguration.html | AWS::Kendra::Index.UserTokenConfiguration}
 */
export interface KendraIndexUserTokenConfiguration {
  JwtTokenTypeConfiguration?: KendraIndexJwtTokenTypeConfiguration;
  JsonTokenTypeConfiguration?: KendraIndexJsonTokenTypeConfiguration;
}
/**
 * Type definition for AWS::Kendra::Index.ValueImportanceItem
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-valueimportanceitem.html | AWS::Kendra::Index.ValueImportanceItem}
 */
export interface KendraIndexValueImportanceItem {
  Value?: number;
  Key?: string;
}
/**
 * Type definition for AWS::Kendra::DataSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html | AWS::Kendra::DataSource}
 */
export interface KendraDataSourceProps {
  CustomDocumentEnrichmentConfiguration?: KendraDataSourceCustomDocumentEnrichmentConfiguration;
  IndexId: string;
  LanguageCode?: string;
  Type: string;
  Description?: string;
  Schedule?: string;
  DataSourceConfiguration?: KendraDataSourceDataSourceConfiguration;
  RoleArn?: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::Kendra::DataSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html | AWS::Kendra::DataSource}
 */
export interface KendraDataSourceAttribs {
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::Kendra::DataSource
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html | AWS::Kendra::DataSource}
 */
export class KendraDataSource extends ResourceBase<
  "AWS::Kendra::DataSource",
  KendraDataSourceProps,
  KendraDataSourceAttribs
> {
  public static readonly Type = "AWS::Kendra::DataSource";
  public static readonly AttributeNames: readonly (keyof KendraDataSourceAttribs)[] =
    ["Id", "Arn"];
  constructor(
    logicalId: string,
    properties: KendraDataSourceProps,
    options?: ResourceOptions,
  ) {
    super(
      KendraDataSource.Type,
      KendraDataSource.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Kendra::Faq
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-faq.html | AWS::Kendra::Faq}
 */
export interface KendraFaqProps {
  IndexId: string;
  Description?: string;
  S3Path: KendraFaqS3Path;
  FileFormat?: string;
  RoleArn: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::Kendra::Faq
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-faq.html | AWS::Kendra::Faq}
 */
export interface KendraFaqAttribs {
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::Kendra::Faq
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-faq.html | AWS::Kendra::Faq}
 */
export class KendraFaq extends ResourceBase<
  "AWS::Kendra::Faq",
  KendraFaqProps,
  KendraFaqAttribs
> {
  public static readonly Type = "AWS::Kendra::Faq";
  public static readonly AttributeNames: readonly (keyof KendraFaqAttribs)[] = [
    "Id",
    "Arn",
  ];
  constructor(
    logicalId: string,
    properties: KendraFaqProps,
    options?: ResourceOptions,
  ) {
    super(
      KendraFaq.Type,
      KendraFaq.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Kendra::Index
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-index.html | AWS::Kendra::Index}
 */
export interface KendraIndexProps {
  Description?: string;
  UserContextPolicy?: string;
  CapacityUnits?: KendraIndexCapacityUnitsConfiguration;
  ServerSideEncryptionConfiguration?: KendraIndexServerSideEncryptionConfiguration;
  DocumentMetadataConfigurations?: any[];
  Tags?: Tag[];
  RoleArn: string;
  Edition: string;
  Name: string;
  UserTokenConfigurations?: any[];
}
/**
 * Attributes type definition for AWS::Kendra::Index
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-index.html | AWS::Kendra::Index}
 */
export interface KendraIndexAttribs {
  Id?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::Kendra::Index
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-index.html | AWS::Kendra::Index}
 */
export class KendraIndex extends ResourceBase<
  "AWS::Kendra::Index",
  KendraIndexProps,
  KendraIndexAttribs
> {
  public static readonly Type = "AWS::Kendra::Index";
  public static readonly AttributeNames: readonly (keyof KendraIndexAttribs)[] =
    ["Id", "Arn"];
  constructor(
    logicalId: string,
    properties: KendraIndexProps,
    options?: ResourceOptions,
  ) {
    super(
      KendraIndex.Type,
      KendraIndex.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
