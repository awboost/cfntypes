import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::DirectoryService::MicrosoftAD.VpcSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-directoryservice-microsoftad-vpcsettings.html | AWS::DirectoryService::MicrosoftAD.VpcSettings}
 */
export interface DirectoryServiceMicrosoftADVpcSettings {
  SubnetIds: any[];
  VpcId: string;
}
/**
 * Type definition for AWS::DirectoryService::SimpleAD.VpcSettings
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-directoryservice-simplead-vpcsettings.html | AWS::DirectoryService::SimpleAD.VpcSettings}
 */
export interface DirectoryServiceSimpleADVpcSettings {
  VpcId: string;
  SubnetIds: any[];
}
/**
 * Type definition for AWS::DirectoryService::MicrosoftAD
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-microsoftad.html | AWS::DirectoryService::MicrosoftAD}
 */
export interface DirectoryServiceMicrosoftADProps {
  CreateAlias?: boolean;
  Edition?: string;
  EnableSso?: boolean;
  Name: string;
  Password: string;
  ShortName?: string;
  VpcSettings: DirectoryServiceMicrosoftADVpcSettings;
}
/**
 * Attributes type definition for AWS::DirectoryService::MicrosoftAD
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-microsoftad.html | AWS::DirectoryService::MicrosoftAD}
 */
export interface DirectoryServiceMicrosoftADAttribs {
  Alias?: string;
  DnsIpAddresses?: any[];
}
/**
 * Resource class for AWS::DirectoryService::MicrosoftAD
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-microsoftad.html | AWS::DirectoryService::MicrosoftAD}
 */
export class DirectoryServiceMicrosoftAD extends ResourceBase<
  "AWS::DirectoryService::MicrosoftAD",
  DirectoryServiceMicrosoftADProps,
  DirectoryServiceMicrosoftADAttribs
> {
  public static readonly Type = "AWS::DirectoryService::MicrosoftAD";
  public static readonly AttributeNames: readonly (keyof DirectoryServiceMicrosoftADAttribs)[] =
    ["Alias", "DnsIpAddresses"];
  constructor(
    logicalId: string,
    properties: DirectoryServiceMicrosoftADProps,
    options?: ResourceOptions,
  ) {
    super(
      DirectoryServiceMicrosoftAD.Type,
      DirectoryServiceMicrosoftAD.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::DirectoryService::SimpleAD
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-simplead.html | AWS::DirectoryService::SimpleAD}
 */
export interface DirectoryServiceSimpleADProps {
  Description?: string;
  VpcSettings: DirectoryServiceSimpleADVpcSettings;
  Size: string;
  CreateAlias?: boolean;
  EnableSso?: boolean;
  ShortName?: string;
  Name: string;
  Password?: string;
}
/**
 * Attributes type definition for AWS::DirectoryService::SimpleAD
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-simplead.html | AWS::DirectoryService::SimpleAD}
 */
export interface DirectoryServiceSimpleADAttribs {
  DirectoryId?: string;
  Alias?: string;
  DnsIpAddresses?: any[];
}
/**
 * Resource class for AWS::DirectoryService::SimpleAD
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-simplead.html | AWS::DirectoryService::SimpleAD}
 */
export class DirectoryServiceSimpleAD extends ResourceBase<
  "AWS::DirectoryService::SimpleAD",
  DirectoryServiceSimpleADProps,
  DirectoryServiceSimpleADAttribs
> {
  public static readonly Type = "AWS::DirectoryService::SimpleAD";
  public static readonly AttributeNames: readonly (keyof DirectoryServiceSimpleADAttribs)[] =
    ["DirectoryId", "Alias", "DnsIpAddresses"];
  constructor(
    logicalId: string,
    properties: DirectoryServiceSimpleADProps,
    options?: ResourceOptions,
  ) {
    super(
      DirectoryServiceSimpleAD.Type,
      DirectoryServiceSimpleAD.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
