import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::OpsWorksCM::Server.EngineAttribute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworkscm-server-engineattribute.html | AWS::OpsWorksCM::Server.EngineAttribute}
 */
export interface OpsWorksCMServerEngineAttribute {
  Value?: string;
  Name?: string;
}
/**
 * Type definition for AWS::OpsWorksCM::Server
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworkscm-server.html | AWS::OpsWorksCM::Server}
 */
export interface OpsWorksCMServerProps {
  KeyPair?: string;
  EngineVersion?: string;
  ServiceRoleArn: string;
  DisableAutomatedBackup?: boolean;
  BackupId?: string;
  EngineModel?: string;
  PreferredMaintenanceWindow?: string;
  AssociatePublicIpAddress?: boolean;
  InstanceProfileArn: string;
  CustomCertificate?: string;
  PreferredBackupWindow?: string;
  SecurityGroupIds?: any[];
  SubnetIds?: any[];
  CustomDomain?: string;
  CustomPrivateKey?: string;
  EngineAttributes?: any[];
  BackupRetentionCount?: number;
  InstanceType: string;
  Tags?: Tag[];
  Engine?: string;
}
/**
 * Attributes type definition for AWS::OpsWorksCM::Server
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworkscm-server.html | AWS::OpsWorksCM::Server}
 */
export interface OpsWorksCMServerAttribs {
  Endpoint?: string;
  ServerName?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::OpsWorksCM::Server
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworkscm-server.html | AWS::OpsWorksCM::Server}
 */
export class OpsWorksCMServer extends ResourceBase<
  "AWS::OpsWorksCM::Server",
  OpsWorksCMServerProps,
  OpsWorksCMServerAttribs
> {
  public static readonly Type = "AWS::OpsWorksCM::Server";
  public static readonly AttributeNames: readonly (keyof OpsWorksCMServerAttribs)[] =
    ["Endpoint", "ServerName", "Arn"];
  constructor(
    logicalId: string,
    properties: OpsWorksCMServerProps,
    options?: ResourceOptions,
  ) {
    super(
      OpsWorksCMServer.Type,
      OpsWorksCMServer.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
