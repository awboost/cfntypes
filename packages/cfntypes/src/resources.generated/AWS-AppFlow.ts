import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::AppFlow::Connector.ConnectorProvisioningConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connector-connectorprovisioningconfig.html | AWS::AppFlow::Connector.ConnectorProvisioningConfig}
 */
export interface AppFlowConnectorConnectorProvisioningConfig {
  Lambda?: AppFlowConnectorLambdaConnectorProvisioningConfig;
}
/**
 * Type definition for AWS::AppFlow::Connector.LambdaConnectorProvisioningConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connector-lambdaconnectorprovisioningconfig.html | AWS::AppFlow::Connector.LambdaConnectorProvisioningConfig}
 */
export interface AppFlowConnectorLambdaConnectorProvisioningConfig {
  LambdaArn: string;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.AmplitudeConnectorProfileCredentials
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-amplitudeconnectorprofilecredentials.html | AWS::AppFlow::ConnectorProfile.AmplitudeConnectorProfileCredentials}
 */
export interface AppFlowConnectorProfileAmplitudeConnectorProfileCredentials {
  SecretKey: string;
  ApiKey: string;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.ApiKeyCredentials
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-apikeycredentials.html | AWS::AppFlow::ConnectorProfile.ApiKeyCredentials}
 */
export interface AppFlowConnectorProfileApiKeyCredentials {
  ApiSecretKey?: string;
  ApiKey: string;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.BasicAuthCredentials
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-basicauthcredentials.html | AWS::AppFlow::ConnectorProfile.BasicAuthCredentials}
 */
export interface AppFlowConnectorProfileBasicAuthCredentials {
  Username: string;
  Password: string;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.ConnectorOAuthRequest
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-connectoroauthrequest.html | AWS::AppFlow::ConnectorProfile.ConnectorOAuthRequest}
 */
export interface AppFlowConnectorProfileConnectorOAuthRequest {
  AuthCode?: string;
  RedirectUri?: string;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.ConnectorProfileConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-connectorprofileconfig.html | AWS::AppFlow::ConnectorProfile.ConnectorProfileConfig}
 */
export interface AppFlowConnectorProfileConnectorProfileConfig {
  ConnectorProfileCredentials?: AppFlowConnectorProfileConnectorProfileCredentials;
  ConnectorProfileProperties?: AppFlowConnectorProfileConnectorProfileProperties;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.ConnectorProfileCredentials
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-connectorprofilecredentials.html | AWS::AppFlow::ConnectorProfile.ConnectorProfileCredentials}
 */
export interface AppFlowConnectorProfileConnectorProfileCredentials {
  Amplitude?: AppFlowConnectorProfileAmplitudeConnectorProfileCredentials;
  GoogleAnalytics?: AppFlowConnectorProfileGoogleAnalyticsConnectorProfileCredentials;
  ServiceNow?: AppFlowConnectorProfileServiceNowConnectorProfileCredentials;
  CustomConnector?: AppFlowConnectorProfileCustomConnectorProfileCredentials;
  SAPOData?: AppFlowConnectorProfileSAPODataConnectorProfileCredentials;
  Pardot?: AppFlowConnectorProfilePardotConnectorProfileCredentials;
  Veeva?: AppFlowConnectorProfileVeevaConnectorProfileCredentials;
  Trendmicro?: AppFlowConnectorProfileTrendmicroConnectorProfileCredentials;
  Datadog?: AppFlowConnectorProfileDatadogConnectorProfileCredentials;
  Marketo?: AppFlowConnectorProfileMarketoConnectorProfileCredentials;
  Redshift?: AppFlowConnectorProfileRedshiftConnectorProfileCredentials;
  Singular?: AppFlowConnectorProfileSingularConnectorProfileCredentials;
  Slack?: AppFlowConnectorProfileSlackConnectorProfileCredentials;
  Snowflake?: AppFlowConnectorProfileSnowflakeConnectorProfileCredentials;
  Dynatrace?: AppFlowConnectorProfileDynatraceConnectorProfileCredentials;
  Zendesk?: AppFlowConnectorProfileZendeskConnectorProfileCredentials;
  InforNexus?: AppFlowConnectorProfileInforNexusConnectorProfileCredentials;
  Salesforce?: AppFlowConnectorProfileSalesforceConnectorProfileCredentials;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.ConnectorProfileProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-connectorprofileproperties.html | AWS::AppFlow::ConnectorProfile.ConnectorProfileProperties}
 */
export interface AppFlowConnectorProfileConnectorProfileProperties {
  ServiceNow?: AppFlowConnectorProfileServiceNowConnectorProfileProperties;
  CustomConnector?: AppFlowConnectorProfileCustomConnectorProfileProperties;
  SAPOData?: AppFlowConnectorProfileSAPODataConnectorProfileProperties;
  Pardot?: AppFlowConnectorProfilePardotConnectorProfileProperties;
  Veeva?: AppFlowConnectorProfileVeevaConnectorProfileProperties;
  Datadog?: AppFlowConnectorProfileDatadogConnectorProfileProperties;
  Marketo?: AppFlowConnectorProfileMarketoConnectorProfileProperties;
  Redshift?: AppFlowConnectorProfileRedshiftConnectorProfileProperties;
  Slack?: AppFlowConnectorProfileSlackConnectorProfileProperties;
  Snowflake?: AppFlowConnectorProfileSnowflakeConnectorProfileProperties;
  Dynatrace?: AppFlowConnectorProfileDynatraceConnectorProfileProperties;
  Zendesk?: AppFlowConnectorProfileZendeskConnectorProfileProperties;
  InforNexus?: AppFlowConnectorProfileInforNexusConnectorProfileProperties;
  Salesforce?: AppFlowConnectorProfileSalesforceConnectorProfileProperties;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.CustomAuthCredentials
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-customauthcredentials.html | AWS::AppFlow::ConnectorProfile.CustomAuthCredentials}
 */
export interface AppFlowConnectorProfileCustomAuthCredentials {
  CredentialsMap?: Record<string, any>;
  CustomAuthenticationType: string;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.CustomConnectorProfileCredentials
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-customconnectorprofilecredentials.html | AWS::AppFlow::ConnectorProfile.CustomConnectorProfileCredentials}
 */
export interface AppFlowConnectorProfileCustomConnectorProfileCredentials {
  Basic?: AppFlowConnectorProfileBasicAuthCredentials;
  ApiKey?: AppFlowConnectorProfileApiKeyCredentials;
  Oauth2?: AppFlowConnectorProfileOAuth2Credentials;
  Custom?: AppFlowConnectorProfileCustomAuthCredentials;
  AuthenticationType: string;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.CustomConnectorProfileProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-customconnectorprofileproperties.html | AWS::AppFlow::ConnectorProfile.CustomConnectorProfileProperties}
 */
export interface AppFlowConnectorProfileCustomConnectorProfileProperties {
  OAuth2Properties?: AppFlowConnectorProfileOAuth2Properties;
  ProfileProperties?: Record<string, any>;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.DatadogConnectorProfileCredentials
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-datadogconnectorprofilecredentials.html | AWS::AppFlow::ConnectorProfile.DatadogConnectorProfileCredentials}
 */
export interface AppFlowConnectorProfileDatadogConnectorProfileCredentials {
  ApplicationKey: string;
  ApiKey: string;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.DatadogConnectorProfileProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-datadogconnectorprofileproperties.html | AWS::AppFlow::ConnectorProfile.DatadogConnectorProfileProperties}
 */
export interface AppFlowConnectorProfileDatadogConnectorProfileProperties {
  InstanceUrl: string;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.DynatraceConnectorProfileCredentials
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-dynatraceconnectorprofilecredentials.html | AWS::AppFlow::ConnectorProfile.DynatraceConnectorProfileCredentials}
 */
export interface AppFlowConnectorProfileDynatraceConnectorProfileCredentials {
  ApiToken: string;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.DynatraceConnectorProfileProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-dynatraceconnectorprofileproperties.html | AWS::AppFlow::ConnectorProfile.DynatraceConnectorProfileProperties}
 */
export interface AppFlowConnectorProfileDynatraceConnectorProfileProperties {
  InstanceUrl: string;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.GoogleAnalyticsConnectorProfileCredentials
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-googleanalyticsconnectorprofilecredentials.html | AWS::AppFlow::ConnectorProfile.GoogleAnalyticsConnectorProfileCredentials}
 */
export interface AppFlowConnectorProfileGoogleAnalyticsConnectorProfileCredentials {
  RefreshToken?: string;
  ClientSecret: string;
  AccessToken?: string;
  ClientId: string;
  ConnectorOAuthRequest?: AppFlowConnectorProfileConnectorOAuthRequest;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.InforNexusConnectorProfileCredentials
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-infornexusconnectorprofilecredentials.html | AWS::AppFlow::ConnectorProfile.InforNexusConnectorProfileCredentials}
 */
export interface AppFlowConnectorProfileInforNexusConnectorProfileCredentials {
  AccessKeyId: string;
  UserId: string;
  SecretAccessKey: string;
  Datakey: string;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.InforNexusConnectorProfileProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-infornexusconnectorprofileproperties.html | AWS::AppFlow::ConnectorProfile.InforNexusConnectorProfileProperties}
 */
export interface AppFlowConnectorProfileInforNexusConnectorProfileProperties {
  InstanceUrl: string;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.MarketoConnectorProfileCredentials
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-marketoconnectorprofilecredentials.html | AWS::AppFlow::ConnectorProfile.MarketoConnectorProfileCredentials}
 */
export interface AppFlowConnectorProfileMarketoConnectorProfileCredentials {
  ClientSecret: string;
  AccessToken?: string;
  ClientId: string;
  ConnectorOAuthRequest?: AppFlowConnectorProfileConnectorOAuthRequest;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.MarketoConnectorProfileProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-marketoconnectorprofileproperties.html | AWS::AppFlow::ConnectorProfile.MarketoConnectorProfileProperties}
 */
export interface AppFlowConnectorProfileMarketoConnectorProfileProperties {
  InstanceUrl: string;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.OAuth2Credentials
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-oauth2credentials.html | AWS::AppFlow::ConnectorProfile.OAuth2Credentials}
 */
export interface AppFlowConnectorProfileOAuth2Credentials {
  OAuthRequest?: AppFlowConnectorProfileConnectorOAuthRequest;
  RefreshToken?: string;
  ClientSecret?: string;
  AccessToken?: string;
  ClientId?: string;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.OAuth2Properties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-oauth2properties.html | AWS::AppFlow::ConnectorProfile.OAuth2Properties}
 */
export interface AppFlowConnectorProfileOAuth2Properties {
  TokenUrlCustomProperties?: Record<string, any>;
  TokenUrl?: string;
  OAuth2GrantType?: string;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.OAuthCredentials
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-oauthcredentials.html | AWS::AppFlow::ConnectorProfile.OAuthCredentials}
 */
export interface AppFlowConnectorProfileOAuthCredentials {
  RefreshToken?: string;
  AccessToken?: string;
  ClientSecret?: string;
  ClientId?: string;
  ConnectorOAuthRequest?: AppFlowConnectorProfileConnectorOAuthRequest;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.OAuthProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-oauthproperties.html | AWS::AppFlow::ConnectorProfile.OAuthProperties}
 */
export interface AppFlowConnectorProfileOAuthProperties {
  AuthCodeUrl?: string;
  TokenUrl?: string;
  OAuthScopes?: any[];
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.PardotConnectorProfileCredentials
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-pardotconnectorprofilecredentials.html | AWS::AppFlow::ConnectorProfile.PardotConnectorProfileCredentials}
 */
export interface AppFlowConnectorProfilePardotConnectorProfileCredentials {
  RefreshToken?: string;
  AccessToken?: string;
  ClientCredentialsArn?: string;
  ConnectorOAuthRequest?: AppFlowConnectorProfileConnectorOAuthRequest;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.PardotConnectorProfileProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-pardotconnectorprofileproperties.html | AWS::AppFlow::ConnectorProfile.PardotConnectorProfileProperties}
 */
export interface AppFlowConnectorProfilePardotConnectorProfileProperties {
  InstanceUrl?: string;
  IsSandboxEnvironment?: boolean;
  BusinessUnitId: string;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.RedshiftConnectorProfileCredentials
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-redshiftconnectorprofilecredentials.html | AWS::AppFlow::ConnectorProfile.RedshiftConnectorProfileCredentials}
 */
export interface AppFlowConnectorProfileRedshiftConnectorProfileCredentials {
  Username?: string;
  Password?: string;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.RedshiftConnectorProfileProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-redshiftconnectorprofileproperties.html | AWS::AppFlow::ConnectorProfile.RedshiftConnectorProfileProperties}
 */
export interface AppFlowConnectorProfileRedshiftConnectorProfileProperties {
  DatabaseUrl?: string;
  BucketName: string;
  IsRedshiftServerless?: boolean;
  DataApiRoleArn?: string;
  DatabaseName?: string;
  WorkgroupName?: string;
  BucketPrefix?: string;
  ClusterIdentifier?: string;
  RoleArn: string;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.SAPODataConnectorProfileCredentials
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-sapodataconnectorprofilecredentials.html | AWS::AppFlow::ConnectorProfile.SAPODataConnectorProfileCredentials}
 */
export interface AppFlowConnectorProfileSAPODataConnectorProfileCredentials {
  BasicAuthCredentials?: AppFlowConnectorProfileBasicAuthCredentials;
  OAuthCredentials?: AppFlowConnectorProfileOAuthCredentials;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.SAPODataConnectorProfileProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-sapodataconnectorprofileproperties.html | AWS::AppFlow::ConnectorProfile.SAPODataConnectorProfileProperties}
 */
export interface AppFlowConnectorProfileSAPODataConnectorProfileProperties {
  ApplicationServicePath?: string;
  ApplicationHostUrl?: string;
  OAuthProperties?: AppFlowConnectorProfileOAuthProperties;
  DisableSSO?: boolean;
  LogonLanguage?: string;
  PrivateLinkServiceName?: string;
  PortNumber?: number;
  ClientNumber?: string;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.SalesforceConnectorProfileCredentials
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-salesforceconnectorprofilecredentials.html | AWS::AppFlow::ConnectorProfile.SalesforceConnectorProfileCredentials}
 */
export interface AppFlowConnectorProfileSalesforceConnectorProfileCredentials {
  JwtToken?: string;
  RefreshToken?: string;
  AccessToken?: string;
  ClientCredentialsArn?: string;
  ConnectorOAuthRequest?: AppFlowConnectorProfileConnectorOAuthRequest;
  OAuth2GrantType?: string;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.SalesforceConnectorProfileProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-salesforceconnectorprofileproperties.html | AWS::AppFlow::ConnectorProfile.SalesforceConnectorProfileProperties}
 */
export interface AppFlowConnectorProfileSalesforceConnectorProfileProperties {
  InstanceUrl?: string;
  isSandboxEnvironment?: boolean;
  usePrivateLinkForMetadataAndAuthorization?: boolean;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.ServiceNowConnectorProfileCredentials
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-servicenowconnectorprofilecredentials.html | AWS::AppFlow::ConnectorProfile.ServiceNowConnectorProfileCredentials}
 */
export interface AppFlowConnectorProfileServiceNowConnectorProfileCredentials {
  Username?: string;
  OAuth2Credentials?: AppFlowConnectorProfileOAuth2Credentials;
  Password?: string;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.ServiceNowConnectorProfileProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-servicenowconnectorprofileproperties.html | AWS::AppFlow::ConnectorProfile.ServiceNowConnectorProfileProperties}
 */
export interface AppFlowConnectorProfileServiceNowConnectorProfileProperties {
  InstanceUrl: string;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.SingularConnectorProfileCredentials
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-singularconnectorprofilecredentials.html | AWS::AppFlow::ConnectorProfile.SingularConnectorProfileCredentials}
 */
export interface AppFlowConnectorProfileSingularConnectorProfileCredentials {
  ApiKey: string;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.SlackConnectorProfileCredentials
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-slackconnectorprofilecredentials.html | AWS::AppFlow::ConnectorProfile.SlackConnectorProfileCredentials}
 */
export interface AppFlowConnectorProfileSlackConnectorProfileCredentials {
  ClientSecret: string;
  AccessToken?: string;
  ClientId: string;
  ConnectorOAuthRequest?: AppFlowConnectorProfileConnectorOAuthRequest;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.SlackConnectorProfileProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-slackconnectorprofileproperties.html | AWS::AppFlow::ConnectorProfile.SlackConnectorProfileProperties}
 */
export interface AppFlowConnectorProfileSlackConnectorProfileProperties {
  InstanceUrl: string;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.SnowflakeConnectorProfileCredentials
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-snowflakeconnectorprofilecredentials.html | AWS::AppFlow::ConnectorProfile.SnowflakeConnectorProfileCredentials}
 */
export interface AppFlowConnectorProfileSnowflakeConnectorProfileCredentials {
  Username: string;
  Password: string;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.SnowflakeConnectorProfileProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-snowflakeconnectorprofileproperties.html | AWS::AppFlow::ConnectorProfile.SnowflakeConnectorProfileProperties}
 */
export interface AppFlowConnectorProfileSnowflakeConnectorProfileProperties {
  Warehouse: string;
  BucketName: string;
  PrivateLinkServiceName?: string;
  Stage: string;
  Region?: string;
  BucketPrefix?: string;
  AccountName?: string;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.TrendmicroConnectorProfileCredentials
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-trendmicroconnectorprofilecredentials.html | AWS::AppFlow::ConnectorProfile.TrendmicroConnectorProfileCredentials}
 */
export interface AppFlowConnectorProfileTrendmicroConnectorProfileCredentials {
  ApiSecretKey: string;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.VeevaConnectorProfileCredentials
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-veevaconnectorprofilecredentials.html | AWS::AppFlow::ConnectorProfile.VeevaConnectorProfileCredentials}
 */
export interface AppFlowConnectorProfileVeevaConnectorProfileCredentials {
  Username: string;
  Password: string;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.VeevaConnectorProfileProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-veevaconnectorprofileproperties.html | AWS::AppFlow::ConnectorProfile.VeevaConnectorProfileProperties}
 */
export interface AppFlowConnectorProfileVeevaConnectorProfileProperties {
  InstanceUrl: string;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.ZendeskConnectorProfileCredentials
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-zendeskconnectorprofilecredentials.html | AWS::AppFlow::ConnectorProfile.ZendeskConnectorProfileCredentials}
 */
export interface AppFlowConnectorProfileZendeskConnectorProfileCredentials {
  ClientSecret: string;
  AccessToken?: string;
  ClientId: string;
  ConnectorOAuthRequest?: AppFlowConnectorProfileConnectorOAuthRequest;
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile.ZendeskConnectorProfileProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-zendeskconnectorprofileproperties.html | AWS::AppFlow::ConnectorProfile.ZendeskConnectorProfileProperties}
 */
export interface AppFlowConnectorProfileZendeskConnectorProfileProperties {
  InstanceUrl: string;
}
/**
 * Type definition for AWS::AppFlow::Flow.AggregationConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-aggregationconfig.html | AWS::AppFlow::Flow.AggregationConfig}
 */
export interface AppFlowFlowAggregationConfig {
  TargetFileSize?: number;
  AggregationType?: string;
}
/**
 * Type definition for AWS::AppFlow::Flow.AmplitudeSourceProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-amplitudesourceproperties.html | AWS::AppFlow::Flow.AmplitudeSourceProperties}
 */
export interface AppFlowFlowAmplitudeSourceProperties {
  Object: string;
}
/**
 * Type definition for AWS::AppFlow::Flow.ConnectorOperator
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-connectoroperator.html | AWS::AppFlow::Flow.ConnectorOperator}
 */
export interface AppFlowFlowConnectorOperator {
  Amplitude?: string;
  S3?: string;
  GoogleAnalytics?: string;
  ServiceNow?: string;
  CustomConnector?: string;
  SAPOData?: string;
  Pardot?: string;
  Veeva?: string;
  Trendmicro?: string;
  Datadog?: string;
  Marketo?: string;
  Singular?: string;
  Slack?: string;
  Dynatrace?: string;
  Zendesk?: string;
  InforNexus?: string;
  Salesforce?: string;
}
/**
 * Type definition for AWS::AppFlow::Flow.CustomConnectorDestinationProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-customconnectordestinationproperties.html | AWS::AppFlow::Flow.CustomConnectorDestinationProperties}
 */
export interface AppFlowFlowCustomConnectorDestinationProperties {
  IdFieldNames?: any[];
  EntityName: string;
  WriteOperationType?: string;
  ErrorHandlingConfig?: AppFlowFlowErrorHandlingConfig;
  CustomProperties?: Record<string, any>;
}
/**
 * Type definition for AWS::AppFlow::Flow.CustomConnectorSourceProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-customconnectorsourceproperties.html | AWS::AppFlow::Flow.CustomConnectorSourceProperties}
 */
export interface AppFlowFlowCustomConnectorSourceProperties {
  EntityName: string;
  DataTransferApi?: AppFlowFlowDataTransferApi;
  CustomProperties?: Record<string, any>;
}
/**
 * Type definition for AWS::AppFlow::Flow.DataTransferApi
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-datatransferapi.html | AWS::AppFlow::Flow.DataTransferApi}
 */
export interface AppFlowFlowDataTransferApi {
  Type: string;
  Name: string;
}
/**
 * Type definition for AWS::AppFlow::Flow.DatadogSourceProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-datadogsourceproperties.html | AWS::AppFlow::Flow.DatadogSourceProperties}
 */
export interface AppFlowFlowDatadogSourceProperties {
  Object: string;
}
/**
 * Type definition for AWS::AppFlow::Flow.DestinationConnectorProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-destinationconnectorproperties.html | AWS::AppFlow::Flow.DestinationConnectorProperties}
 */
export interface AppFlowFlowDestinationConnectorProperties {
  S3?: AppFlowFlowS3DestinationProperties;
  CustomConnector?: AppFlowFlowCustomConnectorDestinationProperties;
  Upsolver?: AppFlowFlowUpsolverDestinationProperties;
  SAPOData?: AppFlowFlowSAPODataDestinationProperties;
  Snowflake?: AppFlowFlowSnowflakeDestinationProperties;
  LookoutMetrics?: AppFlowFlowLookoutMetricsDestinationProperties;
  EventBridge?: AppFlowFlowEventBridgeDestinationProperties;
  Zendesk?: AppFlowFlowZendeskDestinationProperties;
  Marketo?: AppFlowFlowMarketoDestinationProperties;
  Redshift?: AppFlowFlowRedshiftDestinationProperties;
  Salesforce?: AppFlowFlowSalesforceDestinationProperties;
}
/**
 * Type definition for AWS::AppFlow::Flow.DestinationFlowConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-destinationflowconfig.html | AWS::AppFlow::Flow.DestinationFlowConfig}
 */
export interface AppFlowFlowDestinationFlowConfig {
  ConnectorProfileName?: string;
  ApiVersion?: string;
  ConnectorType: string;
  DestinationConnectorProperties: AppFlowFlowDestinationConnectorProperties;
}
/**
 * Type definition for AWS::AppFlow::Flow.DynatraceSourceProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-dynatracesourceproperties.html | AWS::AppFlow::Flow.DynatraceSourceProperties}
 */
export interface AppFlowFlowDynatraceSourceProperties {
  Object: string;
}
/**
 * Type definition for AWS::AppFlow::Flow.ErrorHandlingConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-errorhandlingconfig.html | AWS::AppFlow::Flow.ErrorHandlingConfig}
 */
export interface AppFlowFlowErrorHandlingConfig {
  BucketName?: string;
  BucketPrefix?: string;
  FailOnFirstError?: boolean;
}
/**
 * Type definition for AWS::AppFlow::Flow.EventBridgeDestinationProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-eventbridgedestinationproperties.html | AWS::AppFlow::Flow.EventBridgeDestinationProperties}
 */
export interface AppFlowFlowEventBridgeDestinationProperties {
  Object: string;
  ErrorHandlingConfig?: AppFlowFlowErrorHandlingConfig;
}
/**
 * Type definition for AWS::AppFlow::Flow.GlueDataCatalog
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-gluedatacatalog.html | AWS::AppFlow::Flow.GlueDataCatalog}
 */
export interface AppFlowFlowGlueDataCatalog {
  DatabaseName: string;
  RoleArn: string;
  TablePrefix: string;
}
/**
 * Type definition for AWS::AppFlow::Flow.GoogleAnalyticsSourceProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-googleanalyticssourceproperties.html | AWS::AppFlow::Flow.GoogleAnalyticsSourceProperties}
 */
export interface AppFlowFlowGoogleAnalyticsSourceProperties {
  Object: string;
}
/**
 * Type definition for AWS::AppFlow::Flow.IncrementalPullConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-incrementalpullconfig.html | AWS::AppFlow::Flow.IncrementalPullConfig}
 */
export interface AppFlowFlowIncrementalPullConfig {
  DatetimeTypeFieldName?: string;
}
/**
 * Type definition for AWS::AppFlow::Flow.InforNexusSourceProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-infornexussourceproperties.html | AWS::AppFlow::Flow.InforNexusSourceProperties}
 */
export interface AppFlowFlowInforNexusSourceProperties {
  Object: string;
}
/**
 * Type definition for AWS::AppFlow::Flow.LookoutMetricsDestinationProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-lookoutmetricsdestinationproperties.html | AWS::AppFlow::Flow.LookoutMetricsDestinationProperties}
 */
export interface AppFlowFlowLookoutMetricsDestinationProperties {
  Object?: string;
}
/**
 * Type definition for AWS::AppFlow::Flow.MarketoDestinationProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-marketodestinationproperties.html | AWS::AppFlow::Flow.MarketoDestinationProperties}
 */
export interface AppFlowFlowMarketoDestinationProperties {
  Object: string;
  ErrorHandlingConfig?: AppFlowFlowErrorHandlingConfig;
}
/**
 * Type definition for AWS::AppFlow::Flow.MarketoSourceProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-marketosourceproperties.html | AWS::AppFlow::Flow.MarketoSourceProperties}
 */
export interface AppFlowFlowMarketoSourceProperties {
  Object: string;
}
/**
 * Type definition for AWS::AppFlow::Flow.MetadataCatalogConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-metadatacatalogconfig.html | AWS::AppFlow::Flow.MetadataCatalogConfig}
 */
export interface AppFlowFlowMetadataCatalogConfig {
  GlueDataCatalog?: AppFlowFlowGlueDataCatalog;
}
/**
 * Type definition for AWS::AppFlow::Flow.PardotSourceProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-pardotsourceproperties.html | AWS::AppFlow::Flow.PardotSourceProperties}
 */
export interface AppFlowFlowPardotSourceProperties {
  Object: string;
}
/**
 * Type definition for AWS::AppFlow::Flow.PrefixConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-prefixconfig.html | AWS::AppFlow::Flow.PrefixConfig}
 */
export interface AppFlowFlowPrefixConfig {
  PrefixType?: string;
  PathPrefixHierarchy?: any[];
  PrefixFormat?: string;
}
/**
 * Type definition for AWS::AppFlow::Flow.RedshiftDestinationProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-redshiftdestinationproperties.html | AWS::AppFlow::Flow.RedshiftDestinationProperties}
 */
export interface AppFlowFlowRedshiftDestinationProperties {
  Object: string;
  BucketPrefix?: string;
  IntermediateBucketName: string;
  ErrorHandlingConfig?: AppFlowFlowErrorHandlingConfig;
}
/**
 * Type definition for AWS::AppFlow::Flow.S3DestinationProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-s3destinationproperties.html | AWS::AppFlow::Flow.S3DestinationProperties}
 */
export interface AppFlowFlowS3DestinationProperties {
  BucketName: string;
  BucketPrefix?: string;
  S3OutputFormatConfig?: AppFlowFlowS3OutputFormatConfig;
}
/**
 * Type definition for AWS::AppFlow::Flow.S3InputFormatConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-s3inputformatconfig.html | AWS::AppFlow::Flow.S3InputFormatConfig}
 */
export interface AppFlowFlowS3InputFormatConfig {
  S3InputFileType?: string;
}
/**
 * Type definition for AWS::AppFlow::Flow.S3OutputFormatConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-s3outputformatconfig.html | AWS::AppFlow::Flow.S3OutputFormatConfig}
 */
export interface AppFlowFlowS3OutputFormatConfig {
  PrefixConfig?: AppFlowFlowPrefixConfig;
  FileType?: string;
  AggregationConfig?: AppFlowFlowAggregationConfig;
  PreserveSourceDataTyping?: boolean;
}
/**
 * Type definition for AWS::AppFlow::Flow.S3SourceProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-s3sourceproperties.html | AWS::AppFlow::Flow.S3SourceProperties}
 */
export interface AppFlowFlowS3SourceProperties {
  S3InputFormatConfig?: AppFlowFlowS3InputFormatConfig;
  BucketName: string;
  BucketPrefix: string;
}
/**
 * Type definition for AWS::AppFlow::Flow.SAPODataDestinationProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sapodatadestinationproperties.html | AWS::AppFlow::Flow.SAPODataDestinationProperties}
 */
export interface AppFlowFlowSAPODataDestinationProperties {
  IdFieldNames?: any[];
  ObjectPath: string;
  WriteOperationType?: string;
  ErrorHandlingConfig?: AppFlowFlowErrorHandlingConfig;
  SuccessResponseHandlingConfig?: AppFlowFlowSuccessResponseHandlingConfig;
}
/**
 * Type definition for AWS::AppFlow::Flow.SAPODataPaginationConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sapodatapaginationconfig.html | AWS::AppFlow::Flow.SAPODataPaginationConfig}
 */
export interface AppFlowFlowSAPODataPaginationConfig {
  maxPageSize: number;
}
/**
 * Type definition for AWS::AppFlow::Flow.SAPODataParallelismConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sapodataparallelismconfig.html | AWS::AppFlow::Flow.SAPODataParallelismConfig}
 */
export interface AppFlowFlowSAPODataParallelismConfig {
  maxParallelism: number;
}
/**
 * Type definition for AWS::AppFlow::Flow.SAPODataSourceProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sapodatasourceproperties.html | AWS::AppFlow::Flow.SAPODataSourceProperties}
 */
export interface AppFlowFlowSAPODataSourceProperties {
  ObjectPath: string;
  paginationConfig?: AppFlowFlowSAPODataPaginationConfig;
  parallelismConfig?: AppFlowFlowSAPODataParallelismConfig;
}
/**
 * Type definition for AWS::AppFlow::Flow.SalesforceDestinationProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-salesforcedestinationproperties.html | AWS::AppFlow::Flow.SalesforceDestinationProperties}
 */
export interface AppFlowFlowSalesforceDestinationProperties {
  IdFieldNames?: any[];
  WriteOperationType?: string;
  DataTransferApi?: string;
  Object: string;
  ErrorHandlingConfig?: AppFlowFlowErrorHandlingConfig;
}
/**
 * Type definition for AWS::AppFlow::Flow.SalesforceSourceProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-salesforcesourceproperties.html | AWS::AppFlow::Flow.SalesforceSourceProperties}
 */
export interface AppFlowFlowSalesforceSourceProperties {
  IncludeDeletedRecords?: boolean;
  DataTransferApi?: string;
  Object: string;
  EnableDynamicFieldUpdate?: boolean;
}
/**
 * Type definition for AWS::AppFlow::Flow.ScheduledTriggerProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-scheduledtriggerproperties.html | AWS::AppFlow::Flow.ScheduledTriggerProperties}
 */
export interface AppFlowFlowScheduledTriggerProperties {
  ScheduleEndTime?: number;
  ScheduleExpression: string;
  FirstExecutionFrom?: number;
  TimeZone?: string;
  ScheduleStartTime?: number;
  DataPullMode?: string;
  ScheduleOffset?: number;
  FlowErrorDeactivationThreshold?: number;
}
/**
 * Type definition for AWS::AppFlow::Flow.ServiceNowSourceProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-servicenowsourceproperties.html | AWS::AppFlow::Flow.ServiceNowSourceProperties}
 */
export interface AppFlowFlowServiceNowSourceProperties {
  Object: string;
}
/**
 * Type definition for AWS::AppFlow::Flow.SingularSourceProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-singularsourceproperties.html | AWS::AppFlow::Flow.SingularSourceProperties}
 */
export interface AppFlowFlowSingularSourceProperties {
  Object: string;
}
/**
 * Type definition for AWS::AppFlow::Flow.SlackSourceProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-slacksourceproperties.html | AWS::AppFlow::Flow.SlackSourceProperties}
 */
export interface AppFlowFlowSlackSourceProperties {
  Object: string;
}
/**
 * Type definition for AWS::AppFlow::Flow.SnowflakeDestinationProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-snowflakedestinationproperties.html | AWS::AppFlow::Flow.SnowflakeDestinationProperties}
 */
export interface AppFlowFlowSnowflakeDestinationProperties {
  Object: string;
  BucketPrefix?: string;
  IntermediateBucketName: string;
  ErrorHandlingConfig?: AppFlowFlowErrorHandlingConfig;
}
/**
 * Type definition for AWS::AppFlow::Flow.SourceConnectorProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sourceconnectorproperties.html | AWS::AppFlow::Flow.SourceConnectorProperties}
 */
export interface AppFlowFlowSourceConnectorProperties {
  Amplitude?: AppFlowFlowAmplitudeSourceProperties;
  S3?: AppFlowFlowS3SourceProperties;
  GoogleAnalytics?: AppFlowFlowGoogleAnalyticsSourceProperties;
  ServiceNow?: AppFlowFlowServiceNowSourceProperties;
  CustomConnector?: AppFlowFlowCustomConnectorSourceProperties;
  SAPOData?: AppFlowFlowSAPODataSourceProperties;
  Pardot?: AppFlowFlowPardotSourceProperties;
  Veeva?: AppFlowFlowVeevaSourceProperties;
  Trendmicro?: AppFlowFlowTrendmicroSourceProperties;
  Datadog?: AppFlowFlowDatadogSourceProperties;
  Marketo?: AppFlowFlowMarketoSourceProperties;
  Singular?: AppFlowFlowSingularSourceProperties;
  Slack?: AppFlowFlowSlackSourceProperties;
  Dynatrace?: AppFlowFlowDynatraceSourceProperties;
  Zendesk?: AppFlowFlowZendeskSourceProperties;
  InforNexus?: AppFlowFlowInforNexusSourceProperties;
  Salesforce?: AppFlowFlowSalesforceSourceProperties;
}
/**
 * Type definition for AWS::AppFlow::Flow.SourceFlowConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sourceflowconfig.html | AWS::AppFlow::Flow.SourceFlowConfig}
 */
export interface AppFlowFlowSourceFlowConfig {
  ConnectorProfileName?: string;
  ApiVersion?: string;
  SourceConnectorProperties: AppFlowFlowSourceConnectorProperties;
  ConnectorType: string;
  IncrementalPullConfig?: AppFlowFlowIncrementalPullConfig;
}
/**
 * Type definition for AWS::AppFlow::Flow.SuccessResponseHandlingConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-successresponsehandlingconfig.html | AWS::AppFlow::Flow.SuccessResponseHandlingConfig}
 */
export interface AppFlowFlowSuccessResponseHandlingConfig {
  BucketName?: string;
  BucketPrefix?: string;
}
/**
 * Type definition for AWS::AppFlow::Flow.Task
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-task.html | AWS::AppFlow::Flow.Task}
 */
export interface AppFlowFlowTask {
  SourceFields: any[];
  DestinationField?: string;
  ConnectorOperator?: AppFlowFlowConnectorOperator;
  TaskType: string;
  TaskProperties?: any[];
}
/**
 * Type definition for AWS::AppFlow::Flow.TaskPropertiesObject
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-taskpropertiesobject.html | AWS::AppFlow::Flow.TaskPropertiesObject}
 */
export interface AppFlowFlowTaskPropertiesObject {
  Value: string;
  Key: string;
}
/**
 * Type definition for AWS::AppFlow::Flow.TrendmicroSourceProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-trendmicrosourceproperties.html | AWS::AppFlow::Flow.TrendmicroSourceProperties}
 */
export interface AppFlowFlowTrendmicroSourceProperties {
  Object: string;
}
/**
 * Type definition for AWS::AppFlow::Flow.TriggerConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-triggerconfig.html | AWS::AppFlow::Flow.TriggerConfig}
 */
export interface AppFlowFlowTriggerConfig {
  TriggerType: string;
  TriggerProperties?: AppFlowFlowScheduledTriggerProperties;
}
/**
 * Type definition for AWS::AppFlow::Flow.UpsolverDestinationProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-upsolverdestinationproperties.html | AWS::AppFlow::Flow.UpsolverDestinationProperties}
 */
export interface AppFlowFlowUpsolverDestinationProperties {
  BucketName: string;
  BucketPrefix?: string;
  S3OutputFormatConfig: AppFlowFlowUpsolverS3OutputFormatConfig;
}
/**
 * Type definition for AWS::AppFlow::Flow.UpsolverS3OutputFormatConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-upsolvers3outputformatconfig.html | AWS::AppFlow::Flow.UpsolverS3OutputFormatConfig}
 */
export interface AppFlowFlowUpsolverS3OutputFormatConfig {
  PrefixConfig: AppFlowFlowPrefixConfig;
  FileType?: string;
  AggregationConfig?: AppFlowFlowAggregationConfig;
}
/**
 * Type definition for AWS::AppFlow::Flow.VeevaSourceProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-veevasourceproperties.html | AWS::AppFlow::Flow.VeevaSourceProperties}
 */
export interface AppFlowFlowVeevaSourceProperties {
  IncludeAllVersions?: boolean;
  IncludeRenditions?: boolean;
  DocumentType?: string;
  Object: string;
  IncludeSourceFiles?: boolean;
}
/**
 * Type definition for AWS::AppFlow::Flow.ZendeskDestinationProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-zendeskdestinationproperties.html | AWS::AppFlow::Flow.ZendeskDestinationProperties}
 */
export interface AppFlowFlowZendeskDestinationProperties {
  IdFieldNames?: any[];
  WriteOperationType?: string;
  Object: string;
  ErrorHandlingConfig?: AppFlowFlowErrorHandlingConfig;
}
/**
 * Type definition for AWS::AppFlow::Flow.ZendeskSourceProperties
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-zendesksourceproperties.html | AWS::AppFlow::Flow.ZendeskSourceProperties}
 */
export interface AppFlowFlowZendeskSourceProperties {
  Object: string;
}
/**
 * Type definition for AWS::AppFlow::Connector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connector.html | AWS::AppFlow::Connector}
 */
export interface AppFlowConnectorProps {
  ConnectorLabel?: string;
  ConnectorProvisioningType: string;
  Description?: string;
  ConnectorProvisioningConfig: AppFlowConnectorConnectorProvisioningConfig;
}
/**
 * Attributes type definition for AWS::AppFlow::Connector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connector.html | AWS::AppFlow::Connector}
 */
export interface AppFlowConnectorAttribs {
  ConnectorArn?: string;
}
/**
 * Resource class for AWS::AppFlow::Connector
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connector.html | AWS::AppFlow::Connector}
 */
export class AppFlowConnector extends ResourceBase<
  "AWS::AppFlow::Connector",
  AppFlowConnectorProps,
  AppFlowConnectorAttribs
> {
  public static readonly Type = "AWS::AppFlow::Connector";
  public static readonly AttributeNames: readonly (keyof AppFlowConnectorAttribs)[] =
    ["ConnectorArn"];
  constructor(
    logicalId: string,
    properties: AppFlowConnectorProps,
    options?: ResourceOptions,
  ) {
    super(
      AppFlowConnector.Type,
      AppFlowConnector.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppFlow::ConnectorProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html | AWS::AppFlow::ConnectorProfile}
 */
export interface AppFlowConnectorProfileProps {
  ConnectorLabel?: string;
  ConnectorProfileName: string;
  KMSArn?: string;
  ConnectorType: string;
  ConnectionMode: string;
  ConnectorProfileConfig?: AppFlowConnectorProfileConnectorProfileConfig;
}
/**
 * Attributes type definition for AWS::AppFlow::ConnectorProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html | AWS::AppFlow::ConnectorProfile}
 */
export interface AppFlowConnectorProfileAttribs {
  CredentialsArn?: string;
  ConnectorProfileArn?: string;
}
/**
 * Resource class for AWS::AppFlow::ConnectorProfile
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html | AWS::AppFlow::ConnectorProfile}
 */
export class AppFlowConnectorProfile extends ResourceBase<
  "AWS::AppFlow::ConnectorProfile",
  AppFlowConnectorProfileProps,
  AppFlowConnectorProfileAttribs
> {
  public static readonly Type = "AWS::AppFlow::ConnectorProfile";
  public static readonly AttributeNames: readonly (keyof AppFlowConnectorProfileAttribs)[] =
    ["CredentialsArn", "ConnectorProfileArn"];
  constructor(
    logicalId: string,
    properties: AppFlowConnectorProfileProps,
    options?: ResourceOptions,
  ) {
    super(
      AppFlowConnectorProfile.Type,
      AppFlowConnectorProfile.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppFlow::Flow
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html | AWS::AppFlow::Flow}
 */
export interface AppFlowFlowProps {
  Description?: string;
  KMSArn?: string;
  Tasks: any[];
  FlowName: string;
  TriggerConfig: AppFlowFlowTriggerConfig;
  DestinationFlowConfigList: any[];
  SourceFlowConfig: AppFlowFlowSourceFlowConfig;
  FlowStatus?: string;
  Tags?: Tag[];
  MetadataCatalogConfig?: AppFlowFlowMetadataCatalogConfig;
}
/**
 * Attributes type definition for AWS::AppFlow::Flow
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html | AWS::AppFlow::Flow}
 */
export interface AppFlowFlowAttribs {
  FlowArn?: string;
}
/**
 * Resource class for AWS::AppFlow::Flow
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html | AWS::AppFlow::Flow}
 */
export class AppFlowFlow extends ResourceBase<
  "AWS::AppFlow::Flow",
  AppFlowFlowProps,
  AppFlowFlowAttribs
> {
  public static readonly Type = "AWS::AppFlow::Flow";
  public static readonly AttributeNames: readonly (keyof AppFlowFlowAttribs)[] =
    ["FlowArn"];
  constructor(
    logicalId: string,
    properties: AppFlowFlowProps,
    options?: ResourceOptions,
  ) {
    super(
      AppFlowFlow.Type,
      AppFlowFlow.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
