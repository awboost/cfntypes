import { CloudFormationSpec } from '@fmtk/cfnspec';
import { resolver } from './resolver';
import { convertDefinition } from './convertDefinition';
import { makeResourceTypeMap } from './makeResourceTypeMap';
import { makeAttributeTypeMap } from './makeAttributeTypeMap';
import { makeAttributeFieldList } from './makeAttributeFieldList';

export function convertTypes(spec: CloudFormationSpec): string {
  const resolve = resolver(spec);
  return [
    // write types for resources
    Object.entries(spec.ResourceTypes)
      .map(([k, v]) => convertDefinition(k, v, resolve, k))
      .join('\n\n'),

    // write types for attributes
    Object.entries(spec.ResourceTypes)
      .reduce(
        (a, [k, v]) =>
          v.Attributes
            ? a.concat(
                convertDefinition(
                  `${k}.Attributes`,
                  { Properties: v.Attributes },
                  resolve,
                  k,
                ),
              )
            : a,
        [] as string[],
      )
      .join('\n\n'),

    // write property types
    Object.entries(spec.PropertyTypes)
      .map(([k, v]) => convertDefinition(k, v, resolve, getNamespace(k)))
      .join('\n\n'),

    // write the type maps
    makeResourceTypeMap(spec),
    makeAttributeTypeMap(spec),
    makeAttributeFieldList(spec),
  ].join('\n\n');
}

function getNamespace(name: string): string | undefined {
  const i = name.indexOf('.');
  if (i < 0) {
    return;
  }
  return name.substr(0, i);
}
