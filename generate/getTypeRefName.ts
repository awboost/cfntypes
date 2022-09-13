import { PrimitiveType } from '@awboost/cfnspec';
import createDebug from 'debug';
import { convertName } from './convertName.js';
import { primitive } from './primitive.js';
import { NameResolver } from './resolver.js';

const debug = createDebug(`cfntypes:getTypeRefName`);

export function getTypeRefName(
  type: string | undefined,
  primitiveType: PrimitiveType | undefined,
  resolve: NameResolver,
  namespace: string | undefined,
): string {
  debug(`type=${type}, primitiveType=${primitiveType} (ns ${namespace})`);

  let name: string;

  if (type) {
    name = convertName(resolve(type, namespace));
  } else if (primitiveType) {
    name = primitive(primitiveType);
  } else {
    name = 'any';
  }

  debug(`name = %s`, name);
  return name;
}
