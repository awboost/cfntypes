import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::Amplify::App.AutoBranchCreationConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-autobranchcreationconfig.html | AWS::Amplify::App.AutoBranchCreationConfig}
 */
export interface AmplifyAppAutoBranchCreationConfig {
  EnvironmentVariables?: any[];
  AutoBranchCreationPatterns?: any[];
  EnableAutoBranchCreation?: boolean;
  PullRequestEnvironmentName?: string;
  EnablePullRequestPreview?: boolean;
  EnableAutoBuild?: boolean;
  EnablePerformanceMode?: boolean;
  BuildSpec?: string;
  Stage?: string;
  BasicAuthConfig?: AmplifyAppBasicAuthConfig;
  Framework?: string;
}
/**
 * Type definition for AWS::Amplify::App.BasicAuthConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-basicauthconfig.html | AWS::Amplify::App.BasicAuthConfig}
 */
export interface AmplifyAppBasicAuthConfig {
  Username?: string;
  EnableBasicAuth?: boolean;
  Password?: string;
}
/**
 * Type definition for AWS::Amplify::App.CustomRule
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-customrule.html | AWS::Amplify::App.CustomRule}
 */
export interface AmplifyAppCustomRule {
  Condition?: string;
  Status?: string;
  Target: string;
  Source: string;
}
/**
 * Type definition for AWS::Amplify::App.EnvironmentVariable
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-environmentvariable.html | AWS::Amplify::App.EnvironmentVariable}
 */
export interface AmplifyAppEnvironmentVariable {
  Value: string;
  Name: string;
}
/**
 * Type definition for AWS::Amplify::Branch.Backend
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-branch-backend.html | AWS::Amplify::Branch.Backend}
 */
export interface AmplifyBranchBackend {
  StackArn?: string;
}
/**
 * Type definition for AWS::Amplify::Branch.BasicAuthConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-branch-basicauthconfig.html | AWS::Amplify::Branch.BasicAuthConfig}
 */
export interface AmplifyBranchBasicAuthConfig {
  Username: string;
  EnableBasicAuth?: boolean;
  Password: string;
}
/**
 * Type definition for AWS::Amplify::Branch.EnvironmentVariable
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-branch-environmentvariable.html | AWS::Amplify::Branch.EnvironmentVariable}
 */
export interface AmplifyBranchEnvironmentVariable {
  Value: string;
  Name: string;
}
/**
 * Type definition for AWS::Amplify::Domain.SubDomainSetting
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-domain-subdomainsetting.html | AWS::Amplify::Domain.SubDomainSetting}
 */
export interface AmplifyDomainSubDomainSetting {
  Prefix: string;
  BranchName: string;
}
/**
 * Type definition for AWS::Amplify::App
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html | AWS::Amplify::App}
 */
export interface AmplifyAppProps {
  AutoBranchCreationConfig?: AmplifyAppAutoBranchCreationConfig;
  OauthToken?: string;
  Description?: string;
  Platform?: string;
  EnableBranchAutoDeletion?: boolean;
  Name: string;
  Repository?: string;
  EnvironmentVariables?: any[];
  AccessToken?: string;
  BuildSpec?: string;
  CustomRules?: any[];
  BasicAuthConfig?: AmplifyAppBasicAuthConfig;
  CustomHeaders?: string;
  Tags?: Tag[];
  IAMServiceRole?: string;
}
/**
 * Attributes type definition for AWS::Amplify::App
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html | AWS::Amplify::App}
 */
export interface AmplifyAppAttribs {
  AppId?: string;
  Arn?: string;
  DefaultDomain?: string;
  AppName?: string;
}
/**
 * Resource class for AWS::Amplify::App
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html | AWS::Amplify::App}
 */
export class AmplifyApp extends ResourceBase<
  "AWS::Amplify::App",
  AmplifyAppProps,
  AmplifyAppAttribs
> {
  public static readonly Type = "AWS::Amplify::App";
  public static readonly AttributeNames: readonly (keyof AmplifyAppAttribs)[] =
    ["AppId", "Arn", "DefaultDomain", "AppName"];
  constructor(
    logicalId: string,
    properties: AmplifyAppProps,
    options?: ResourceOptions,
  ) {
    super(
      AmplifyApp.Type,
      AmplifyApp.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Amplify::Branch
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-branch.html | AWS::Amplify::Branch}
 */
export interface AmplifyBranchProps {
  Description?: string;
  EnablePerformanceMode?: boolean;
  Backend?: AmplifyBranchBackend;
  EnvironmentVariables?: any[];
  AppId: string;
  PullRequestEnvironmentName?: string;
  EnablePullRequestPreview?: boolean;
  EnableAutoBuild?: boolean;
  BuildSpec?: string;
  Stage?: string;
  BranchName: string;
  BasicAuthConfig?: AmplifyBranchBasicAuthConfig;
  Framework?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::Amplify::Branch
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-branch.html | AWS::Amplify::Branch}
 */
export interface AmplifyBranchAttribs {
  BranchName?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::Amplify::Branch
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-branch.html | AWS::Amplify::Branch}
 */
export class AmplifyBranch extends ResourceBase<
  "AWS::Amplify::Branch",
  AmplifyBranchProps,
  AmplifyBranchAttribs
> {
  public static readonly Type = "AWS::Amplify::Branch";
  public static readonly AttributeNames: readonly (keyof AmplifyBranchAttribs)[] =
    ["BranchName", "Arn"];
  constructor(
    logicalId: string,
    properties: AmplifyBranchProps,
    options?: ResourceOptions,
  ) {
    super(
      AmplifyBranch.Type,
      AmplifyBranch.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::Amplify::Domain
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html | AWS::Amplify::Domain}
 */
export interface AmplifyDomainProps {
  SubDomainSettings: any[];
  AppId: string;
  AutoSubDomainIAMRole?: string;
  DomainName: string;
  EnableAutoSubDomain?: boolean;
  AutoSubDomainCreationPatterns?: any[];
}
/**
 * Attributes type definition for AWS::Amplify::Domain
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html | AWS::Amplify::Domain}
 */
export interface AmplifyDomainAttribs {
  AutoSubDomainIAMRole?: string;
  DomainName?: string;
  EnableAutoSubDomain?: boolean;
  StatusReason?: string;
  Arn?: string;
  AutoSubDomainCreationPatterns?: any[];
  DomainStatus?: string;
  CertificateRecord?: string;
}
/**
 * Resource class for AWS::Amplify::Domain
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html | AWS::Amplify::Domain}
 */
export class AmplifyDomain extends ResourceBase<
  "AWS::Amplify::Domain",
  AmplifyDomainProps,
  AmplifyDomainAttribs
> {
  public static readonly Type = "AWS::Amplify::Domain";
  public static readonly AttributeNames: readonly (keyof AmplifyDomainAttribs)[] =
    [
      "AutoSubDomainIAMRole",
      "DomainName",
      "EnableAutoSubDomain",
      "StatusReason",
      "Arn",
      "AutoSubDomainCreationPatterns",
      "DomainStatus",
      "CertificateRecord",
    ];
  constructor(
    logicalId: string,
    properties: AmplifyDomainProps,
    options?: ResourceOptions,
  ) {
    super(
      AmplifyDomain.Type,
      AmplifyDomain.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
