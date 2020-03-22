import { CloudFormationSpec } from '@fmtk/cfnspec';
import { convertName } from './convertName';

export function makeAttributeFieldList(spec: CloudFormationSpec): string {
  const attributes = Object.entries(spec.ResourceTypes).map(
    ([k, v]) => [k, Object.keys(v.Attributes || [])] as [string, string[]],
  );
  return [
    `export type AttributesFor<T extends ResourceType> = T extends keyof AttributeTypes ? keyof AttributeTypes[T] : never;`,
    ``,
    `export type ResourceAttributeMap = {`,
    `  [K in ResourceType]: (AttributesFor<K>)[]`,
    `};`,
    ``,
    `export const ResourceAttributes: ResourceAttributeMap = {`,
    ...attributes.map(([k, v]) => {
      const resource = convertName(k);
      return `  [ResourceType.${resource}]: [${v
        .map(a => `"${a}"`)
        .join(', ')}],`;
    }),
    `}`,
  ].join('\n');
}
