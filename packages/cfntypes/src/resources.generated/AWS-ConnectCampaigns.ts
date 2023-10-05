import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::ConnectCampaigns::Campaign.AnswerMachineDetectionConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaigns-campaign-answermachinedetectionconfig.html | AWS::ConnectCampaigns::Campaign.AnswerMachineDetectionConfig}
 */
export interface ConnectCampaignsCampaignAnswerMachineDetectionConfig {
  EnableAnswerMachineDetection: boolean;
}
/**
 * Type definition for AWS::ConnectCampaigns::Campaign.DialerConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaigns-campaign-dialerconfig.html | AWS::ConnectCampaigns::Campaign.DialerConfig}
 */
export interface ConnectCampaignsCampaignDialerConfig {
  PredictiveDialerConfig?: ConnectCampaignsCampaignPredictiveDialerConfig;
  ProgressiveDialerConfig?: ConnectCampaignsCampaignProgressiveDialerConfig;
}
/**
 * Type definition for AWS::ConnectCampaigns::Campaign.OutboundCallConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaigns-campaign-outboundcallconfig.html | AWS::ConnectCampaigns::Campaign.OutboundCallConfig}
 */
export interface ConnectCampaignsCampaignOutboundCallConfig {
  ConnectContactFlowArn: string;
  ConnectQueueArn: string;
  AnswerMachineDetectionConfig?: ConnectCampaignsCampaignAnswerMachineDetectionConfig;
  ConnectSourcePhoneNumber?: string;
}
/**
 * Type definition for AWS::ConnectCampaigns::Campaign.PredictiveDialerConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaigns-campaign-predictivedialerconfig.html | AWS::ConnectCampaigns::Campaign.PredictiveDialerConfig}
 */
export interface ConnectCampaignsCampaignPredictiveDialerConfig {
  BandwidthAllocation: number;
}
/**
 * Type definition for AWS::ConnectCampaigns::Campaign.ProgressiveDialerConfig
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaigns-campaign-progressivedialerconfig.html | AWS::ConnectCampaigns::Campaign.ProgressiveDialerConfig}
 */
export interface ConnectCampaignsCampaignProgressiveDialerConfig {
  BandwidthAllocation: number;
}
/**
 * Type definition for AWS::ConnectCampaigns::Campaign
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html | AWS::ConnectCampaigns::Campaign}
 */
export interface ConnectCampaignsCampaignProps {
  OutboundCallConfig: ConnectCampaignsCampaignOutboundCallConfig;
  ConnectInstanceArn: string;
  DialerConfig: ConnectCampaignsCampaignDialerConfig;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::ConnectCampaigns::Campaign
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html | AWS::ConnectCampaigns::Campaign}
 */
export interface ConnectCampaignsCampaignAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::ConnectCampaigns::Campaign
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html | AWS::ConnectCampaigns::Campaign}
 */
export class ConnectCampaignsCampaign extends ResourceBase<
  "AWS::ConnectCampaigns::Campaign",
  ConnectCampaignsCampaignProps,
  ConnectCampaignsCampaignAttribs
> {
  public static readonly Type = "AWS::ConnectCampaigns::Campaign";
  public static readonly AttributeNames: readonly (keyof ConnectCampaignsCampaignAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: ConnectCampaignsCampaignProps,
    options?: ResourceOptions,
  ) {
    super(
      ConnectCampaignsCampaign.Type,
      ConnectCampaignsCampaign.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
