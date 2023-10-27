import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for Dev::Transfer::Server.As2Transport
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-as2transport.html | Dev::Transfer::Server.As2Transport}
 */
export type DevTransferServerAs2Transport = string;
/**
 * Type definition for Dev::Transfer::Server.EndpointDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-endpointdetails.html | Dev::Transfer::Server.EndpointDetails}
 */
export interface DevTransferServerEndpointDetails {
  AddressAllocationIds?: any[];
  VpcId?: string;
  VpcEndpointId?: string;
  SecurityGroupIds?: any[];
  SubnetIds?: any[];
}
/**
 * Type definition for Dev::Transfer::Server.IdentityProviderDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-identityproviderdetails.html | Dev::Transfer::Server.IdentityProviderDetails}
 */
export interface DevTransferServerIdentityProviderDetails {
  Function?: string;
  DirectoryId?: string;
  InvocationRole?: string;
  Url?: string;
  SftpAuthenticationMethods?: string;
}
/**
 * Type definition for Dev::Transfer::Server.Protocol
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-protocol.html | Dev::Transfer::Server.Protocol}
 */
export type DevTransferServerProtocol = string;
/**
 * Type definition for Dev::Transfer::Server.ProtocolDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-protocoldetails.html | Dev::Transfer::Server.ProtocolDetails}
 */
export interface DevTransferServerProtocolDetails {
  As2Transports?: any[];
  PassiveIp?: string;
  SetStatOption?: string;
  TlsSessionResumptionMode?: string;
}
/**
 * Type definition for Dev::Transfer::Server.S3StorageOptions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-s3storageoptions.html | Dev::Transfer::Server.S3StorageOptions}
 */
export interface DevTransferServerS3StorageOptions {
  DirectoryListingOptimization?: string;
}
/**
 * Type definition for Dev::Transfer::Server.StructuredLogDestination
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-structuredlogdestination.html | Dev::Transfer::Server.StructuredLogDestination}
 */
export type DevTransferServerStructuredLogDestination = string;
/**
 * Type definition for Dev::Transfer::Server.WorkflowDetail
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-workflowdetail.html | Dev::Transfer::Server.WorkflowDetail}
 */
export interface DevTransferServerWorkflowDetail {
  WorkflowId: string;
  ExecutionRole: string;
}
/**
 * Type definition for Dev::Transfer::Server.WorkflowDetails
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-workflowdetails.html | Dev::Transfer::Server.WorkflowDetails}
 */
export interface DevTransferServerWorkflowDetails {
  OnUpload?: any[];
  OnPartialUpload?: any[];
}
/**
 * Type definition for Dev::Transfer::Server
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-server.html | Dev::Transfer::Server}
 */
export interface DevTransferServerProps {
  LoggingRole?: string;
  Protocols?: any[];
  IdentityProviderDetails?: DevTransferServerIdentityProviderDetails;
  EndpointDetails?: DevTransferServerEndpointDetails;
  StructuredLogDestinations?: any[];
  PreAuthenticationLoginBanner?: string;
  PostAuthenticationLoginBanner?: string;
  EndpointType?: string;
  SecurityPolicyName?: string;
  ProtocolDetails?: DevTransferServerProtocolDetails;
  WorkflowDetails?: DevTransferServerWorkflowDetails;
  Domain?: string;
  IdentityProviderType?: string;
  Tags?: Tag[];
  Certificate?: string;
}
/**
 * Attributes type definition for Dev::Transfer::Server
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-server.html | Dev::Transfer::Server}
 */
export interface DevTransferServerAttribs {
  ServerId?: string;
  Arn?: string;
}
/**
 * Resource class for Dev::Transfer::Server
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-server.html | Dev::Transfer::Server}
 */
export class DevTransferServer extends ResourceBase<
  "Dev::Transfer::Server",
  DevTransferServerProps,
  DevTransferServerAttribs
> {
  public static readonly Type = "Dev::Transfer::Server";
  public static readonly AttributeNames: readonly (keyof DevTransferServerAttribs)[] =
    ["ServerId", "Arn"];
  constructor(
    logicalId: string,
    properties: DevTransferServerProps,
    options?: ResourceOptions,
  ) {
    super(
      DevTransferServer.Type,
      DevTransferServer.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
