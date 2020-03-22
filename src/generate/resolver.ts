import { CloudFormationSpec, PrimitiveType } from '@fmtk/cfnspec';
import { debug } from './debug';
import { primitive } from './primitive';

export type NameResolver = (
  name: string,
  namespace: string | undefined,
) => string;

export function resolver(spec: CloudFormationSpec): NameResolver {
  return (name, namespace): string => {
    debug(`resolve '${name}' in namespace '${namespace}'`);

    if (namespace) {
      const search = `${namespace}.${name}`;
      if (Object.keys(spec.PropertyTypes).includes(search)) {
        debug(`resolve = ${search}`);
        return search;
      }
    }
    if (Object.keys(spec.PropertyTypes).includes(name)) {
      debug(`resolve = ${name}`);
      return name;
    }
    if (name === 'Json') {
      debug(`mistaken 'Json' in Type/ItemType`);
      // some resources have this set in Type/ItemType by mistake
      return primitive(PrimitiveType.Json);
    }
    throw new Error(
      `can't find name '${name}' ${
        namespace ? `in namespace '${namespace}'` : ''
      }`,
    );
  };
}
