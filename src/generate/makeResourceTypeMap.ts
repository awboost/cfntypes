import { CloudFormationSpec } from '@fmtk/cfnspec';
import { convertName } from './convertName';

export function makeResourceTypeMap(spec: CloudFormationSpec): string {
  const resources = Object.keys(spec.ResourceTypes);
  return [
    `export enum ResourceType {`,
    ...resources.map(x => `  ${convertName(x)} = "${x}",`),
    `}`,
    ``,
    `export interface ResourceTypes {`,
    ...resources.map(
      x => `  [ResourceType.${convertName(x)}]: ${convertName(x)}Props;`,
    ),
    `}`,
  ].join('\n');
}
