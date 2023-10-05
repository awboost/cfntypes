import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::CodeGuruProfiler::ProfilingGroup.AgentPermissions
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codeguruprofiler-profilinggroup-agentpermissions.html | AWS::CodeGuruProfiler::ProfilingGroup.AgentPermissions}
 */
export interface CodeGuruProfilerProfilingGroupAgentPermissions {
  Principals: any[];
}
/**
 * Type definition for AWS::CodeGuruProfiler::ProfilingGroup.Channel
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codeguruprofiler-profilinggroup-channel.html | AWS::CodeGuruProfiler::ProfilingGroup.Channel}
 */
export interface CodeGuruProfilerProfilingGroupChannel {
  channelUri: string;
  channelId?: string;
}
/**
 * Type definition for AWS::CodeGuruProfiler::ProfilingGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeguruprofiler-profilinggroup.html | AWS::CodeGuruProfiler::ProfilingGroup}
 */
export interface CodeGuruProfilerProfilingGroupProps {
  AnomalyDetectionNotificationConfiguration?: any[];
  AgentPermissions?: CodeGuruProfilerProfilingGroupAgentPermissions;
  ComputePlatform?: string;
  ProfilingGroupName: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::CodeGuruProfiler::ProfilingGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeguruprofiler-profilinggroup.html | AWS::CodeGuruProfiler::ProfilingGroup}
 */
export interface CodeGuruProfilerProfilingGroupAttribs {
  Arn?: string;
}
/**
 * Resource class for AWS::CodeGuruProfiler::ProfilingGroup
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeguruprofiler-profilinggroup.html | AWS::CodeGuruProfiler::ProfilingGroup}
 */
export class CodeGuruProfilerProfilingGroup extends ResourceBase<
  "AWS::CodeGuruProfiler::ProfilingGroup",
  CodeGuruProfilerProfilingGroupProps,
  CodeGuruProfilerProfilingGroupAttribs
> {
  public static readonly Type = "AWS::CodeGuruProfiler::ProfilingGroup";
  public static readonly AttributeNames: readonly (keyof CodeGuruProfilerProfilingGroupAttribs)[] =
    ["Arn"];
  constructor(
    logicalId: string,
    properties: CodeGuruProfilerProfilingGroupProps,
    options?: ResourceOptions,
  ) {
    super(
      CodeGuruProfilerProfilingGroup.Type,
      CodeGuruProfilerProfilingGroup.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
