import { TypeDefinition } from '@fmtk/cfnspec';
import { NameResolver } from './resolver';
import { convertName } from './convertName';
import { generateJsDoc } from './generateJsDoc';
import { getDataTypeName } from './getDataTypeName';
import { quoteName } from './quoteName';
import { debug } from './debug';
import { SpecError } from './SpecError';

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
  debug(`convertObjectDef ${name} (resource ${resource})`);

  if (!def.Properties) {
    throw new SpecError(`expected type to have properties`, {
      resource,
      propertyType: resource ? undefined : resource,
    });
  }

  const skippedProps: string[] = [];
  const suffix = name === resource ? 'Props' : '';
  const typeName = convertName(name) + suffix;
  debug(`convertObjectDef ${name} = ${typeName}`);

  let output = generateJsDoc(name, def);
  output += `\n`;

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

function convertPropertyDef(
  name: string,
  def: TypeDefinition,
  resolve: NameResolver,
  resource?: string,
): string {
  debug(`convertPropertyDef ${name} (resource ${resource})`);

  const flag = def.Required === false ? '?' : '';
  const type = getDataTypeName(def, resolve, resource);
  return `  ${quoteName(name)}${flag}: ${type};`;
}
