import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::S3::AccessPoint.PublicAccessBlockConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-accesspoint-publicaccessblockconfiguration.html | AWS::S3::AccessPoint.PublicAccessBlockConfiguration}
 */
export interface S3AccessPointPublicAccessBlockConfiguration {
  RestrictPublicBuckets?: boolean;
  BlockPublicPolicy?: boolean;
  BlockPublicAcls?: boolean;
  IgnorePublicAcls?: boolean;
}
/**
 * Type definition for AWS::S3::AccessPoint.VpcConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-accesspoint-vpcconfiguration.html | AWS::S3::AccessPoint.VpcConfiguration}
 */
export interface S3AccessPointVpcConfiguration {
  VpcId?: string;
}
/**
 * Type definition for AWS::S3::Bucket.AbortIncompleteMultipartUpload
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-abortincompletemultipartupload.html | AWS::S3::Bucket.AbortIncompleteMultipartUpload}
 */
export interface S3BucketAbortIncompleteMultipartUpload {
  DaysAfterInitiation: number;
}
/**
 * Type definition for AWS::S3::Bucket.AccelerateConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-accelerateconfiguration.html | AWS::S3::Bucket.AccelerateConfiguration}
 */
export interface S3BucketAccelerateConfiguration {
  AccelerationStatus: string;
}
/**
 * Type definition for AWS::S3::Bucket.AccessControlTranslation
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-accesscontroltranslation.html | AWS::S3::Bucket.AccessControlTranslation}
 */
export interface S3BucketAccessControlTranslation {
  Owner: string;
}
/**
 * Type definition for AWS::S3::Bucket.AnalyticsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-analyticsconfiguration.html | AWS::S3::Bucket.AnalyticsConfiguration}
 */
export interface S3BucketAnalyticsConfiguration {
  Id: string;
  Prefix?: string;
  StorageClassAnalysis: S3BucketStorageClassAnalysis;
  TagFilters?: any[];
}
/**
 * Type definition for AWS::S3::Bucket.BucketEncryption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-bucketencryption.html | AWS::S3::Bucket.BucketEncryption}
 */
export interface S3BucketBucketEncryption {
  ServerSideEncryptionConfiguration: any[];
}
/**
 * Type definition for AWS::S3::Bucket.CorsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-cors.html | AWS::S3::Bucket.CorsConfiguration}
 */
export interface S3BucketCorsConfiguration {
  CorsRules: any[];
}
/**
 * Type definition for AWS::S3::Bucket.CorsRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-cors-corsrule.html | AWS::S3::Bucket.CorsRule}
 */
export interface S3BucketCorsRule {
  AllowedHeaders?: any[];
  AllowedMethods: any[];
  AllowedOrigins: any[];
  ExposedHeaders?: any[];
  Id?: string;
  MaxAge?: number;
}
/**
 * Type definition for AWS::S3::Bucket.DataExport
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-dataexport.html | AWS::S3::Bucket.DataExport}
 */
export interface S3BucketDataExport {
  Destination: S3BucketDestination;
  OutputSchemaVersion: string;
}
/**
 * Type definition for AWS::S3::Bucket.DefaultRetention
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-defaultretention.html | AWS::S3::Bucket.DefaultRetention}
 */
export interface S3BucketDefaultRetention {
  Days?: number;
  Mode?: string;
  Years?: number;
}
/**
 * Type definition for AWS::S3::Bucket.DeleteMarkerReplication
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-deletemarkerreplication.html | AWS::S3::Bucket.DeleteMarkerReplication}
 */
export interface S3BucketDeleteMarkerReplication {
  Status?: string;
}
/**
 * Type definition for AWS::S3::Bucket.Destination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-destination.html | AWS::S3::Bucket.Destination}
 */
export interface S3BucketDestination {
  BucketAccountId?: string;
  BucketArn: string;
  Format: string;
  Prefix?: string;
}
/**
 * Type definition for AWS::S3::Bucket.EncryptionConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-encryptionconfiguration.html | AWS::S3::Bucket.EncryptionConfiguration}
 */
export interface S3BucketEncryptionConfiguration {
  ReplicaKmsKeyID: string;
}
/**
 * Type definition for AWS::S3::Bucket.EventBridgeConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-notificationconfig-eventbridgeconfig.html | AWS::S3::Bucket.EventBridgeConfiguration}
 */
export interface S3BucketEventBridgeConfiguration {
  EventBridgeEnabled?: boolean;
}
/**
 * Type definition for AWS::S3::Bucket.FilterRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-notificationconfiguration-config-filter-s3key-rules.html | AWS::S3::Bucket.FilterRule}
 */
export interface S3BucketFilterRule {
  Name: string;
  Value: string;
}
/**
 * Type definition for AWS::S3::Bucket.IntelligentTieringConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-intelligenttieringconfiguration.html | AWS::S3::Bucket.IntelligentTieringConfiguration}
 */
export interface S3BucketIntelligentTieringConfiguration {
  Id: string;
  Prefix?: string;
  Status: string;
  TagFilters?: any[];
  Tierings: any[];
}
/**
 * Type definition for AWS::S3::Bucket.InventoryConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-inventoryconfiguration.html | AWS::S3::Bucket.InventoryConfiguration}
 */
export interface S3BucketInventoryConfiguration {
  Destination: S3BucketDestination;
  Enabled: boolean;
  Id: string;
  IncludedObjectVersions: string;
  OptionalFields?: any[];
  Prefix?: string;
  ScheduleFrequency: string;
}
/**
 * Type definition for AWS::S3::Bucket.LambdaConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-notificationconfig-lambdaconfig.html | AWS::S3::Bucket.LambdaConfiguration}
 */
export interface S3BucketLambdaConfiguration {
  Event: string;
  Filter?: S3BucketNotificationFilter;
  Function: string;
}
/**
 * Type definition for AWS::S3::Bucket.LifecycleConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-lifecycleconfig.html | AWS::S3::Bucket.LifecycleConfiguration}
 */
export interface S3BucketLifecycleConfiguration {
  Rules: any[];
}
/**
 * Type definition for AWS::S3::Bucket.LoggingConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-loggingconfig.html | AWS::S3::Bucket.LoggingConfiguration}
 */
export interface S3BucketLoggingConfiguration {
  DestinationBucketName?: string;
  LogFilePrefix?: string;
}
/**
 * Type definition for AWS::S3::Bucket.Metrics
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-metrics.html | AWS::S3::Bucket.Metrics}
 */
export interface S3BucketMetrics {
  EventThreshold?: S3BucketReplicationTimeValue;
  Status: string;
}
/**
 * Type definition for AWS::S3::Bucket.MetricsConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-metricsconfiguration.html | AWS::S3::Bucket.MetricsConfiguration}
 */
export interface S3BucketMetricsConfiguration {
  AccessPointArn?: string;
  Id: string;
  Prefix?: string;
  TagFilters?: any[];
}
/**
 * Type definition for AWS::S3::Bucket.NoncurrentVersionExpiration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-lifecycleconfig-rule-noncurrentversionexpiration.html | AWS::S3::Bucket.NoncurrentVersionExpiration}
 */
export interface S3BucketNoncurrentVersionExpiration {
  NewerNoncurrentVersions?: number;
  NoncurrentDays: number;
}
/**
 * Type definition for AWS::S3::Bucket.NoncurrentVersionTransition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-lifecycleconfig-rule-noncurrentversiontransition.html | AWS::S3::Bucket.NoncurrentVersionTransition}
 */
export interface S3BucketNoncurrentVersionTransition {
  NewerNoncurrentVersions?: number;
  StorageClass: string;
  TransitionInDays: number;
}
/**
 * Type definition for AWS::S3::Bucket.NotificationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-notificationconfig.html | AWS::S3::Bucket.NotificationConfiguration}
 */
export interface S3BucketNotificationConfiguration {
  EventBridgeConfiguration?: S3BucketEventBridgeConfiguration;
  LambdaConfigurations?: any[];
  QueueConfigurations?: any[];
  TopicConfigurations?: any[];
}
/**
 * Type definition for AWS::S3::Bucket.NotificationFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-notificationconfiguration-config-filter.html | AWS::S3::Bucket.NotificationFilter}
 */
export interface S3BucketNotificationFilter {
  S3Key: S3BucketS3KeyFilter;
}
/**
 * Type definition for AWS::S3::Bucket.ObjectLockConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-objectlockconfiguration.html | AWS::S3::Bucket.ObjectLockConfiguration}
 */
export interface S3BucketObjectLockConfiguration {
  ObjectLockEnabled?: string;
  Rule?: S3BucketObjectLockRule;
}
/**
 * Type definition for AWS::S3::Bucket.ObjectLockRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-objectlockrule.html | AWS::S3::Bucket.ObjectLockRule}
 */
export interface S3BucketObjectLockRule {
  DefaultRetention?: S3BucketDefaultRetention;
}
/**
 * Type definition for AWS::S3::Bucket.OwnershipControls
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-ownershipcontrols.html | AWS::S3::Bucket.OwnershipControls}
 */
export interface S3BucketOwnershipControls {
  Rules: any[];
}
/**
 * Type definition for AWS::S3::Bucket.OwnershipControlsRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-ownershipcontrolsrule.html | AWS::S3::Bucket.OwnershipControlsRule}
 */
export interface S3BucketOwnershipControlsRule {
  ObjectOwnership?: string;
}
/**
 * Type definition for AWS::S3::Bucket.PublicAccessBlockConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-publicaccessblockconfiguration.html | AWS::S3::Bucket.PublicAccessBlockConfiguration}
 */
export interface S3BucketPublicAccessBlockConfiguration {
  BlockPublicAcls?: boolean;
  BlockPublicPolicy?: boolean;
  IgnorePublicAcls?: boolean;
  RestrictPublicBuckets?: boolean;
}
/**
 * Type definition for AWS::S3::Bucket.QueueConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-notificationconfig-queueconfig.html | AWS::S3::Bucket.QueueConfiguration}
 */
export interface S3BucketQueueConfiguration {
  Event: string;
  Filter?: S3BucketNotificationFilter;
  Queue: string;
}
/**
 * Type definition for AWS::S3::Bucket.RedirectAllRequestsTo
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-websiteconfiguration-redirectallrequeststo.html | AWS::S3::Bucket.RedirectAllRequestsTo}
 */
export interface S3BucketRedirectAllRequestsTo {
  HostName: string;
  Protocol?: string;
}
/**
 * Type definition for AWS::S3::Bucket.RedirectRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-websiteconfiguration-routingrules-redirectrule.html | AWS::S3::Bucket.RedirectRule}
 */
export interface S3BucketRedirectRule {
  HostName?: string;
  HttpRedirectCode?: string;
  Protocol?: string;
  ReplaceKeyPrefixWith?: string;
  ReplaceKeyWith?: string;
}
/**
 * Type definition for AWS::S3::Bucket.ReplicaModifications
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicamodifications.html | AWS::S3::Bucket.ReplicaModifications}
 */
export interface S3BucketReplicaModifications {
  Status: string;
}
/**
 * Type definition for AWS::S3::Bucket.ReplicationConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationconfiguration.html | AWS::S3::Bucket.ReplicationConfiguration}
 */
export interface S3BucketReplicationConfiguration {
  Role: string;
  Rules: any[];
}
/**
 * Type definition for AWS::S3::Bucket.ReplicationDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationconfiguration-rules-destination.html | AWS::S3::Bucket.ReplicationDestination}
 */
export interface S3BucketReplicationDestination {
  AccessControlTranslation?: S3BucketAccessControlTranslation;
  Account?: string;
  Bucket: string;
  EncryptionConfiguration?: S3BucketEncryptionConfiguration;
  Metrics?: S3BucketMetrics;
  ReplicationTime?: S3BucketReplicationTime;
  StorageClass?: string;
}
/**
 * Type definition for AWS::S3::Bucket.ReplicationRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationconfiguration-rules.html | AWS::S3::Bucket.ReplicationRule}
 */
export interface S3BucketReplicationRule {
  DeleteMarkerReplication?: S3BucketDeleteMarkerReplication;
  Destination: S3BucketReplicationDestination;
  Filter?: S3BucketReplicationRuleFilter;
  Id?: string;
  Prefix?: string;
  Priority?: number;
  SourceSelectionCriteria?: S3BucketSourceSelectionCriteria;
  Status: string;
}
/**
 * Type definition for AWS::S3::Bucket.ReplicationRuleAndOperator
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationruleandoperator.html | AWS::S3::Bucket.ReplicationRuleAndOperator}
 */
export interface S3BucketReplicationRuleAndOperator {
  Prefix?: string;
  TagFilters?: any[];
}
/**
 * Type definition for AWS::S3::Bucket.ReplicationRuleFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationrulefilter.html | AWS::S3::Bucket.ReplicationRuleFilter}
 */
export interface S3BucketReplicationRuleFilter {
  And?: S3BucketReplicationRuleAndOperator;
  Prefix?: string;
  TagFilter?: S3BucketTagFilter;
}
/**
 * Type definition for AWS::S3::Bucket.ReplicationTime
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationtime.html | AWS::S3::Bucket.ReplicationTime}
 */
export interface S3BucketReplicationTime {
  Status: string;
  Time: S3BucketReplicationTimeValue;
}
/**
 * Type definition for AWS::S3::Bucket.ReplicationTimeValue
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationtimevalue.html | AWS::S3::Bucket.ReplicationTimeValue}
 */
export interface S3BucketReplicationTimeValue {
  Minutes: number;
}
/**
 * Type definition for AWS::S3::Bucket.RoutingRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-websiteconfiguration-routingrules.html | AWS::S3::Bucket.RoutingRule}
 */
export interface S3BucketRoutingRule {
  RedirectRule: S3BucketRedirectRule;
  RoutingRuleCondition?: S3BucketRoutingRuleCondition;
}
/**
 * Type definition for AWS::S3::Bucket.RoutingRuleCondition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-websiteconfiguration-routingrules-routingrulecondition.html | AWS::S3::Bucket.RoutingRuleCondition}
 */
export interface S3BucketRoutingRuleCondition {
  HttpErrorCodeReturnedEquals?: string;
  KeyPrefixEquals?: string;
}
/**
 * Type definition for AWS::S3::Bucket.Rule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-lifecycleconfig-rule.html | AWS::S3::Bucket.Rule}
 */
export interface S3BucketRule {
  AbortIncompleteMultipartUpload?: S3BucketAbortIncompleteMultipartUpload;
  ExpirationDate?: string;
  ExpirationInDays?: number;
  ExpiredObjectDeleteMarker?: boolean;
  Id?: string;
  NoncurrentVersionExpiration?: S3BucketNoncurrentVersionExpiration;
  NoncurrentVersionExpirationInDays?: number;
  NoncurrentVersionTransition?: S3BucketNoncurrentVersionTransition;
  NoncurrentVersionTransitions?: any[];
  ObjectSizeGreaterThan?: number;
  ObjectSizeLessThan?: number;
  Prefix?: string;
  Status: string;
  TagFilters?: any[];
  Transition?: S3BucketTransition;
  Transitions?: any[];
}
/**
 * Type definition for AWS::S3::Bucket.S3KeyFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-notificationconfiguration-config-filter-s3key.html | AWS::S3::Bucket.S3KeyFilter}
 */
export interface S3BucketS3KeyFilter {
  Rules: any[];
}
/**
 * Type definition for AWS::S3::Bucket.ServerSideEncryptionByDefault
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-serversideencryptionbydefault.html | AWS::S3::Bucket.ServerSideEncryptionByDefault}
 */
export interface S3BucketServerSideEncryptionByDefault {
  KMSMasterKeyID?: string;
  SSEAlgorithm: string;
}
/**
 * Type definition for AWS::S3::Bucket.ServerSideEncryptionRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-serversideencryptionrule.html | AWS::S3::Bucket.ServerSideEncryptionRule}
 */
export interface S3BucketServerSideEncryptionRule {
  BucketKeyEnabled?: boolean;
  ServerSideEncryptionByDefault?: S3BucketServerSideEncryptionByDefault;
}
/**
 * Type definition for AWS::S3::Bucket.SourceSelectionCriteria
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-sourceselectioncriteria.html | AWS::S3::Bucket.SourceSelectionCriteria}
 */
export interface S3BucketSourceSelectionCriteria {
  ReplicaModifications?: S3BucketReplicaModifications;
  SseKmsEncryptedObjects?: S3BucketSseKmsEncryptedObjects;
}
/**
 * Type definition for AWS::S3::Bucket.SseKmsEncryptedObjects
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-ssekmsencryptedobjects.html | AWS::S3::Bucket.SseKmsEncryptedObjects}
 */
export interface S3BucketSseKmsEncryptedObjects {
  Status: string;
}
/**
 * Type definition for AWS::S3::Bucket.StorageClassAnalysis
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-storageclassanalysis.html | AWS::S3::Bucket.StorageClassAnalysis}
 */
export interface S3BucketStorageClassAnalysis {
  DataExport?: S3BucketDataExport;
}
/**
 * Type definition for AWS::S3::Bucket.TagFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-tagfilter.html | AWS::S3::Bucket.TagFilter}
 */
export interface S3BucketTagFilter {
  Key: string;
  Value: string;
}
/**
 * Type definition for AWS::S3::Bucket.Tiering
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-tiering.html | AWS::S3::Bucket.Tiering}
 */
export interface S3BucketTiering {
  AccessTier: string;
  Days: number;
}
/**
 * Type definition for AWS::S3::Bucket.TopicConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-notificationconfig-topicconfig.html | AWS::S3::Bucket.TopicConfiguration}
 */
export interface S3BucketTopicConfiguration {
  Event: string;
  Filter?: S3BucketNotificationFilter;
  Topic: string;
}
/**
 * Type definition for AWS::S3::Bucket.Transition
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-lifecycleconfig-rule-transition.html | AWS::S3::Bucket.Transition}
 */
export interface S3BucketTransition {
  StorageClass: string;
  TransitionDate?: string;
  TransitionInDays?: number;
}
/**
 * Type definition for AWS::S3::Bucket.VersioningConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-versioningconfig.html | AWS::S3::Bucket.VersioningConfiguration}
 */
export interface S3BucketVersioningConfiguration {
  Status: string;
}
/**
 * Type definition for AWS::S3::Bucket.WebsiteConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-websiteconfiguration.html | AWS::S3::Bucket.WebsiteConfiguration}
 */
export interface S3BucketWebsiteConfiguration {
  ErrorDocument?: string;
  IndexDocument?: string;
  RedirectAllRequestsTo?: S3BucketRedirectAllRequestsTo;
  RoutingRules?: any[];
}
/**
 * Type definition for AWS::S3::MultiRegionAccessPoint.PublicAccessBlockConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-multiregionaccesspoint-publicaccessblockconfiguration.html | AWS::S3::MultiRegionAccessPoint.PublicAccessBlockConfiguration}
 */
export interface S3MultiRegionAccessPointPublicAccessBlockConfiguration {
  RestrictPublicBuckets?: boolean;
  BlockPublicPolicy?: boolean;
  BlockPublicAcls?: boolean;
  IgnorePublicAcls?: boolean;
}
/**
 * Type definition for AWS::S3::MultiRegionAccessPoint.Region
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-multiregionaccesspoint-region.html | AWS::S3::MultiRegionAccessPoint.Region}
 */
export interface S3MultiRegionAccessPointRegion {
  Bucket: string;
  BucketAccountId?: string;
}
/**
 * Type definition for AWS::S3::MultiRegionAccessPointPolicy.PolicyStatus
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-multiregionaccesspointpolicy-policystatus.html | AWS::S3::MultiRegionAccessPointPolicy.PolicyStatus}
 */
export interface S3MultiRegionAccessPointPolicyPolicyStatus {
  IsPublic: string;
}
/**
 * Type definition for AWS::S3::StorageLens.AccountLevel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-accountlevel.html | AWS::S3::StorageLens.AccountLevel}
 */
export interface S3StorageLensAccountLevel {
  AdvancedDataProtectionMetrics?: S3StorageLensAdvancedDataProtectionMetrics;
  ActivityMetrics?: S3StorageLensActivityMetrics;
  BucketLevel: S3StorageLensBucketLevel;
  AdvancedCostOptimizationMetrics?: S3StorageLensAdvancedCostOptimizationMetrics;
  DetailedStatusCodesMetrics?: S3StorageLensDetailedStatusCodesMetrics;
}
/**
 * Type definition for AWS::S3::StorageLens.ActivityMetrics
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-activitymetrics.html | AWS::S3::StorageLens.ActivityMetrics}
 */
export interface S3StorageLensActivityMetrics {
  IsEnabled?: boolean;
}
/**
 * Type definition for AWS::S3::StorageLens.AdvancedCostOptimizationMetrics
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-advancedcostoptimizationmetrics.html | AWS::S3::StorageLens.AdvancedCostOptimizationMetrics}
 */
export interface S3StorageLensAdvancedCostOptimizationMetrics {
  IsEnabled?: boolean;
}
/**
 * Type definition for AWS::S3::StorageLens.AdvancedDataProtectionMetrics
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-advanceddataprotectionmetrics.html | AWS::S3::StorageLens.AdvancedDataProtectionMetrics}
 */
export interface S3StorageLensAdvancedDataProtectionMetrics {
  IsEnabled?: boolean;
}
/**
 * Type definition for AWS::S3::StorageLens.AwsOrg
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-awsorg.html | AWS::S3::StorageLens.AwsOrg}
 */
export interface S3StorageLensAwsOrg {
  Arn: string;
}
/**
 * Type definition for AWS::S3::StorageLens.BucketLevel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-bucketlevel.html | AWS::S3::StorageLens.BucketLevel}
 */
export interface S3StorageLensBucketLevel {
  AdvancedDataProtectionMetrics?: S3StorageLensAdvancedDataProtectionMetrics;
  PrefixLevel?: S3StorageLensPrefixLevel;
  ActivityMetrics?: S3StorageLensActivityMetrics;
  AdvancedCostOptimizationMetrics?: S3StorageLensAdvancedCostOptimizationMetrics;
  DetailedStatusCodesMetrics?: S3StorageLensDetailedStatusCodesMetrics;
}
/**
 * Type definition for AWS::S3::StorageLens.BucketsAndRegions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-bucketsandregions.html | AWS::S3::StorageLens.BucketsAndRegions}
 */
export interface S3StorageLensBucketsAndRegions {
  Regions?: any[];
  Buckets?: any[];
}
/**
 * Type definition for AWS::S3::StorageLens.CloudWatchMetrics
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-cloudwatchmetrics.html | AWS::S3::StorageLens.CloudWatchMetrics}
 */
export interface S3StorageLensCloudWatchMetrics {
  IsEnabled: boolean;
}
/**
 * Type definition for AWS::S3::StorageLens.DataExport
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-dataexport.html | AWS::S3::StorageLens.DataExport}
 */
export interface S3StorageLensDataExport {
  S3BucketDestination?: S3StorageLensS3BucketDestination;
  CloudWatchMetrics?: S3StorageLensCloudWatchMetrics;
}
/**
 * Type definition for AWS::S3::StorageLens.DetailedStatusCodesMetrics
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-detailedstatuscodesmetrics.html | AWS::S3::StorageLens.DetailedStatusCodesMetrics}
 */
export interface S3StorageLensDetailedStatusCodesMetrics {
  IsEnabled?: boolean;
}
/**
 * Type definition for AWS::S3::StorageLens.Encryption
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-encryption.html | AWS::S3::StorageLens.Encryption}
 */
export interface S3StorageLensEncryption {
  SSEKMS?: S3StorageLensSSEKMS;
  SSES3?: object;
}
/**
 * Type definition for AWS::S3::StorageLens.PrefixLevel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-prefixlevel.html | AWS::S3::StorageLens.PrefixLevel}
 */
export interface S3StorageLensPrefixLevel {
  StorageMetrics: S3StorageLensPrefixLevelStorageMetrics;
}
/**
 * Type definition for AWS::S3::StorageLens.PrefixLevelStorageMetrics
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-prefixlevelstoragemetrics.html | AWS::S3::StorageLens.PrefixLevelStorageMetrics}
 */
export interface S3StorageLensPrefixLevelStorageMetrics {
  IsEnabled?: boolean;
  SelectionCriteria?: S3StorageLensSelectionCriteria;
}
/**
 * Type definition for AWS::S3::StorageLens.S3BucketDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-s3bucketdestination.html | AWS::S3::StorageLens.S3BucketDestination}
 */
export interface S3StorageLensS3BucketDestination {
  OutputSchemaVersion: string;
  Format: string;
  AccountId: string;
  Prefix?: string;
  Encryption?: S3StorageLensEncryption;
  Arn: string;
}
/**
 * Type definition for AWS::S3::StorageLens.SSEKMS
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-ssekms.html | AWS::S3::StorageLens.SSEKMS}
 */
export interface S3StorageLensSSEKMS {
  KeyId: string;
}
/**
 * Type definition for AWS::S3::StorageLens.SelectionCriteria
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-selectioncriteria.html | AWS::S3::StorageLens.SelectionCriteria}
 */
export interface S3StorageLensSelectionCriteria {
  Delimiter?: string;
  MaxDepth?: number;
  MinStorageBytesPercentage?: number;
}
/**
 * Type definition for AWS::S3::StorageLens.StorageLensConfiguration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-storagelensconfiguration.html | AWS::S3::StorageLens.StorageLensConfiguration}
 */
export interface S3StorageLensStorageLensConfiguration {
  AccountLevel: S3StorageLensAccountLevel;
  Exclude?: S3StorageLensBucketsAndRegions;
  IsEnabled: boolean;
  Include?: S3StorageLensBucketsAndRegions;
  AwsOrg?: S3StorageLensAwsOrg;
  Id: string;
  StorageLensArn?: string;
  DataExport?: S3StorageLensDataExport;
}
/**
 * Type definition for AWS::S3::AccessPoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accesspoint.html | AWS::S3::AccessPoint}
 */
export interface S3AccessPointProps {
  Policy?: object;
  PublicAccessBlockConfiguration?: S3AccessPointPublicAccessBlockConfiguration;
  Bucket: string;
  BucketAccountId?: string;
  VpcConfiguration?: S3AccessPointVpcConfiguration;
  Name?: string;
}
/**
 * Attributes type definition for AWS::S3::AccessPoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accesspoint.html | AWS::S3::AccessPoint}
 */
export interface S3AccessPointAttribs {
  Alias?: string;
  Arn?: string;
  NetworkOrigin?: string;
  Name?: string;
}
/**
 * Resource class for AWS::S3::AccessPoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accesspoint.html | AWS::S3::AccessPoint}
 */
export class S3AccessPoint extends ResourceBase<
  "AWS::S3::AccessPoint",
  S3AccessPointProps,
  S3AccessPointAttribs
> {
  public static readonly Type = "AWS::S3::AccessPoint";
  public static readonly AttributeNames: readonly (keyof S3AccessPointAttribs)[] =
    ["Alias", "Arn", "NetworkOrigin", "Name"];
  constructor(
    logicalId: string,
    properties: S3AccessPointProps,
    options?: ResourceOptions,
  ) {
    super(
      S3AccessPoint.Type,
      S3AccessPoint.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::S3::Bucket
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket.html | AWS::S3::Bucket}
 */
export interface S3BucketProps {
  AccelerateConfiguration?: S3BucketAccelerateConfiguration;
  AccessControl?: string;
  AnalyticsConfigurations?: any[];
  BucketEncryption?: S3BucketBucketEncryption;
  BucketName?: string;
  CorsConfiguration?: S3BucketCorsConfiguration;
  IntelligentTieringConfigurations?: any[];
  InventoryConfigurations?: any[];
  LifecycleConfiguration?: S3BucketLifecycleConfiguration;
  LoggingConfiguration?: S3BucketLoggingConfiguration;
  MetricsConfigurations?: any[];
  NotificationConfiguration?: S3BucketNotificationConfiguration;
  ObjectLockConfiguration?: S3BucketObjectLockConfiguration;
  ObjectLockEnabled?: boolean;
  OwnershipControls?: S3BucketOwnershipControls;
  PublicAccessBlockConfiguration?: S3BucketPublicAccessBlockConfiguration;
  ReplicationConfiguration?: S3BucketReplicationConfiguration;
  Tags?: Tag[];
  VersioningConfiguration?: S3BucketVersioningConfiguration;
  WebsiteConfiguration?: S3BucketWebsiteConfiguration;
}
/**
 * Attributes type definition for AWS::S3::Bucket
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket.html | AWS::S3::Bucket}
 */
export interface S3BucketAttribs {
  Arn?: string;
  DomainName?: string;
  DualStackDomainName?: string;
  RegionalDomainName?: string;
  WebsiteURL?: string;
}
/**
 * Resource class for AWS::S3::Bucket
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket.html | AWS::S3::Bucket}
 */
export class S3Bucket extends ResourceBase<
  "AWS::S3::Bucket",
  S3BucketProps,
  S3BucketAttribs
> {
  public static readonly Type = "AWS::S3::Bucket";
  public static readonly AttributeNames: readonly (keyof S3BucketAttribs)[] = [
    "Arn",
    "DomainName",
    "DualStackDomainName",
    "RegionalDomainName",
    "WebsiteURL",
  ];
  constructor(
    logicalId: string,
    properties: S3BucketProps,
    options?: ResourceOptions,
  ) {
    super(
      S3Bucket.Type,
      S3Bucket.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::S3::BucketPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucketpolicy.html | AWS::S3::BucketPolicy}
 */
export interface S3BucketPolicyProps {
  Bucket: string;
  PolicyDocument: object;
}
/**
 * Resource class for AWS::S3::BucketPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucketpolicy.html | AWS::S3::BucketPolicy}
 */
export class S3BucketPolicy extends ResourceBase<
  "AWS::S3::BucketPolicy",
  S3BucketPolicyProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::S3::BucketPolicy";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: S3BucketPolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      S3BucketPolicy.Type,
      S3BucketPolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::S3::MultiRegionAccessPoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspoint.html | AWS::S3::MultiRegionAccessPoint}
 */
export interface S3MultiRegionAccessPointProps {
  PublicAccessBlockConfiguration?: S3MultiRegionAccessPointPublicAccessBlockConfiguration;
  Regions: any[];
  Name?: string;
}
/**
 * Attributes type definition for AWS::S3::MultiRegionAccessPoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspoint.html | AWS::S3::MultiRegionAccessPoint}
 */
export interface S3MultiRegionAccessPointAttribs {
  Alias?: string;
  CreatedAt?: string;
}
/**
 * Resource class for AWS::S3::MultiRegionAccessPoint
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspoint.html | AWS::S3::MultiRegionAccessPoint}
 */
export class S3MultiRegionAccessPoint extends ResourceBase<
  "AWS::S3::MultiRegionAccessPoint",
  S3MultiRegionAccessPointProps,
  S3MultiRegionAccessPointAttribs
> {
  public static readonly Type = "AWS::S3::MultiRegionAccessPoint";
  public static readonly AttributeNames: readonly (keyof S3MultiRegionAccessPointAttribs)[] =
    ["Alias", "CreatedAt"];
  constructor(
    logicalId: string,
    properties: S3MultiRegionAccessPointProps,
    options?: ResourceOptions,
  ) {
    super(
      S3MultiRegionAccessPoint.Type,
      S3MultiRegionAccessPoint.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::S3::MultiRegionAccessPointPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspointpolicy.html | AWS::S3::MultiRegionAccessPointPolicy}
 */
export interface S3MultiRegionAccessPointPolicyProps {
  Policy: object;
  MrapName: string;
}
/**
 * Attributes type definition for AWS::S3::MultiRegionAccessPointPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspointpolicy.html | AWS::S3::MultiRegionAccessPointPolicy}
 */
export interface S3MultiRegionAccessPointPolicyAttribs {
  "PolicyStatus.IsPublic"?: string;
  PolicyStatus?: S3MultiRegionAccessPointPolicyPolicyStatus;
}
/**
 * Resource class for AWS::S3::MultiRegionAccessPointPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspointpolicy.html | AWS::S3::MultiRegionAccessPointPolicy}
 */
export class S3MultiRegionAccessPointPolicy extends ResourceBase<
  "AWS::S3::MultiRegionAccessPointPolicy",
  S3MultiRegionAccessPointPolicyProps,
  S3MultiRegionAccessPointPolicyAttribs
> {
  public static readonly Type = "AWS::S3::MultiRegionAccessPointPolicy";
  public static readonly AttributeNames: readonly (keyof S3MultiRegionAccessPointPolicyAttribs)[] =
    ["PolicyStatus.IsPublic", "PolicyStatus"];
  constructor(
    logicalId: string,
    properties: S3MultiRegionAccessPointPolicyProps,
    options?: ResourceOptions,
  ) {
    super(
      S3MultiRegionAccessPointPolicy.Type,
      S3MultiRegionAccessPointPolicy.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::S3::StorageLens
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html | AWS::S3::StorageLens}
 */
export interface S3StorageLensProps {
  StorageLensConfiguration: S3StorageLensStorageLensConfiguration;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::S3::StorageLens
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html | AWS::S3::StorageLens}
 */
export interface S3StorageLensAttribs {
  "StorageLensConfiguration.StorageLensArn"?: string;
}
/**
 * Resource class for AWS::S3::StorageLens
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html | AWS::S3::StorageLens}
 */
export class S3StorageLens extends ResourceBase<
  "AWS::S3::StorageLens",
  S3StorageLensProps,
  S3StorageLensAttribs
> {
  public static readonly Type = "AWS::S3::StorageLens";
  public static readonly AttributeNames: readonly (keyof S3StorageLensAttribs)[] =
    ["StorageLensConfiguration.StorageLensArn"];
  constructor(
    logicalId: string,
    properties: S3StorageLensProps,
    options?: ResourceOptions,
  ) {
    super(
      S3StorageLens.Type,
      S3StorageLens.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
