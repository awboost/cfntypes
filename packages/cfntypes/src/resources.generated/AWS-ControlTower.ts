import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::ControlTower::EnabledControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledcontrol.html | AWS::ControlTower::EnabledControl}
 */
export interface ControlTowerEnabledControlProps {
  ControlIdentifier: string;
  TargetIdentifier: string;
}
/**
 * Resource class for AWS::ControlTower::EnabledControl
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledcontrol.html | AWS::ControlTower::EnabledControl}
 */
export class ControlTowerEnabledControl extends ResourceBase<
  "AWS::ControlTower::EnabledControl",
  ControlTowerEnabledControlProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::ControlTower::EnabledControl";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ControlTowerEnabledControlProps,
    options?: ResourceOptions,
  ) {
    super(
      ControlTowerEnabledControl.Type,
      ControlTowerEnabledControl.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
