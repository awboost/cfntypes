import { CloudFormationSpec } from '@fmtk/cfnspec';
import { convertName } from './convertName';

export function makeAttributeTypeMap(spec: CloudFormationSpec): string {
  const attributes = Object.entries(spec.ResourceTypes).reduce(
    (a, [k, v]) => (v.Attributes ? a.concat(k) : a),
    [] as string[],
  );
  return [
    `export interface AttributeTypes {`,
    attributes
      .map(x => {
        const resource = convertName(x);
        return `  [ResourceType.${resource}]: ${resource}Attributes`;
      })
      .join('\n'),
    `}`,
    ``,
    `export type AttributeTypeFor<T extends ResourceType> = T extends keyof AttributeTypes ? AttributeTypes[T] : never;`,
  ].join('\n');
}
