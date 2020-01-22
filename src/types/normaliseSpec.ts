import {
  CfnSpecification,
  StringMap,
  AttributeSpecification,
} from '@fmtk/cfnspec';
import { TypeDefinition } from './TypeDefinition';
import { normaliseTypeSpec } from './normaliseTypeSpec';
import { TypeSource } from './TypeSource';
import { makeResolver } from './NameResolver';

export function normaliseSpec(spec: CfnSpecification): TypeDefinition[] {
  const resolve = makeResolver(spec);

  const propTypes = Object.entries(spec.PropertyTypes).map(([name, propSpec]) =>
    normaliseTypeSpec(name, propSpec, TypeSource.PropertyType, resolve),
  );

  const resourceTypes = Object.entries(
    spec.ResourceTypes,
  ).map(([name, resourceSpec]) =>
    normaliseTypeSpec(name, resourceSpec, TypeSource.ResourceType, resolve),
  );

  const attribTypes = Object.entries(spec.ResourceTypes)
    .filter(([, resourceSpec]) => resourceSpec.Attributes)
    .map(([name, resourceSpec]) =>
      normaliseTypeSpec(
        name + '.Attributes',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        { Properties: escapeAttribs(resourceSpec.Attributes!) },
        TypeSource.AttributeType,
        resolve,
      ),
    );

  return [...propTypes, ...resourceTypes, ...attribTypes].sort((a, b) =>
    a.name > b.name ? 1 : a.name === b.name ? 0 : -1,
  );
}

function escapeAttribs(
  spec: StringMap<AttributeSpecification>,
): StringMap<AttributeSpecification> {
  return Object.entries(spec).reduce(
    (a, [k, v]) => ({ ...a, [escapeName(k)]: v }),
    {},
  );
}

function escapeName(name: string): string {
  if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(name)) {
    return `"${name}"`;
  }
  return name;
}
