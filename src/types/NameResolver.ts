import { CfnSpecification } from '@fmtk/cfnspec';

export interface NameResolver {
  (name: string, parent: string): string;
}

export function makeResolver(spec: CfnSpecification): NameResolver {
  return (name: string, namespace: string): string => {
    const searches = [`${namespace}.${name}`, name];

    for (const search of searches) {
      if (search in spec.PropertyTypes) {
        return search;
      }
    }

    throw new Error(
      `can't resolve name ${name} (tried [${searches.join(', ')}])`,
    );
  };
}
