import { TypeDefinition } from '@awboost/cfnspec';
import createDebug from 'debug';
import { convertName } from './convertName.js';
import { convertPropertyDef } from './convertPropertyDef.js';
import { generateJsDoc } from './generateJsDoc.js';
import { NameResolver } from './resolver.js';
import { SpecError } from './SpecError.js';

const debug = createDebug('cfntypes:convertObjectDef');

export interface ConvertObjectDefResult {
  output: string;
  skippedProps: string[];
}

export function convertObjectDef(
  name: string,
  def: TypeDefinition,
  resolve: NameResolver,
  resource?: string,
): ConvertObjectDefResult {
  debug(`${name} (resource ${resource})`);

  if (!def.Properties) {
    throw new SpecError(`expected type to have properties`, {
      resource,
      propertyType: resource ? undefined : resource,
    });
  }

  const skippedProps: string[] = [];
  const suffix = name === resource ? 'Props' : '';
  const typeName = convertName(name) + suffix;
  debug(`${name} = ${typeName}`);

  let output = generateJsDoc(name, def);
  output += `export interface ${typeName} {\n`;

  for (const [name, prop] of Object.entries(def.Properties)) {
    let propStr: string;

    try {
      propStr = convertPropertyDef(name, prop, resolve, resource);
    } catch (err) {
      if (err instanceof SpecError && !prop.Required) {
        console.warn(`skipping property ${name} due to error: ${err.message}`);
        if (err.location) {
          console.warn(`error details:`, err.location);
        }
        skippedProps.push(name);
        continue;
      }
      throw err;
    }

    output += propStr + `\n`;
  }

  output += `}\n`;

  return {
    output,
    skippedProps,
  };
}
