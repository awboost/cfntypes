import { CloudFormationSpec } from '@fmtk/cfnspec';
import { resolver } from './resolver';
import { convertDefinition } from './convertDefinition';
import { convertName } from './convertName';
import { SpecError } from './SpecError';
import { convertObjectDef, ConvertObjectDefResult } from './convertObjectDef';
import { debug } from './debug';

export function convertTypes(spec: CloudFormationSpec): string {
  const resolve = resolver(spec);
  let output = '';
  const resourceNameMap: [string, string][] = [];
  const resourceAttributeMap: [string, string[]][] = [];

  // ResourceTypes and Attributes interfaces
  for (const [name, def] of Object.entries(spec.ResourceTypes)) {
    const convertedName = convertName(name);
    resourceNameMap.push([name, convertedName]);

    let typeStr: string;

    try {
      typeStr = convertDefinition(name, def, resolve, name);
    } catch (err) {
      if (err instanceof SpecError) {
        console.warn(`skipping resource ${name} due to error: ${err.message}`);
        if (err.location) {
          console.warn(`error details:`, err.location);
        }
        continue;
      }
      throw err;
    }

    output += typeStr + '\n\n';

    if (!def.Attributes) {
      resourceAttributeMap.push([convertedName, []]);
    } else {
      let attributesOutput: ConvertObjectDefResult;

      try {
        attributesOutput = convertObjectDef(
          `${name}.Attributes`,
          { Properties: def.Attributes },
          resolve,
          name,
        );
      } catch (err) {
        if (err instanceof SpecError) {
          console.warn(
            `skipping attributes for ${name} due to error: ${err.message}`,
          );
          if (err.location) {
            console.warn(`error details:`, err.location);
          }
          continue;
        }
        throw err;
      }

      if (attributesOutput.skippedProps.length) {
        const props = attributesOutput.skippedProps.join(', ');
        console.log(`skipping props for ${name}.Attributes: ${props}`);
      }

      output += attributesOutput.output + '\n\n';

      const filteredAttribs = Object.keys(def.Attributes).filter(
        x => !attributesOutput.skippedProps.includes(x),
      );

      debug(`attributes for %s: %O`, convertedName, filteredAttribs);
      resourceAttributeMap.push([convertedName, filteredAttribs]);
    }
  }

  //// PropertyTypes interfaces
  for (const [name, def] of Object.entries(spec.PropertyTypes)) {
    let typeStr: string;

    try {
      typeStr = convertDefinition(name, def, resolve, getNamespace(name));
    } catch (err) {
      if (err instanceof SpecError) {
        console.warn(
          `skipping property type ${name} due to error: ${err.message}`,
        );
        if (err.location) {
          console.warn(`error details:`, err.location);
        }
        continue;
      }
      throw err;
    }
    output += typeStr + '\n\n';
  }

  //// ResourceType enum
  output += `export enum ResourceType {\n`;

  for (const [name, convertedName] of resourceNameMap) {
    output += `  ${convertedName} = "${name}",\n`;
  }
  output += `}\n\n`;

  //// ResourceTypes interface
  output += `export interface ResourceTypes {\n`;

  for (const [, convertedName] of resourceNameMap) {
    output += `  [ResourceType.${convertedName}]: ${convertedName}Props,\n`;
  }
  output += `}\n\n`;

  //// AttributeTypes interface
  output += `export interface AttributeTypes {\n`;

  for (const [convertedName, attribs] of resourceAttributeMap) {
    if (attribs.length) {
      output += `  [ResourceType.${convertedName}]: ${convertedName}Attributes,\n`;
    }
  }
  output += `}\n\n`;

  //// AttributeTypeFor type
  output +=
    `export type AttributeTypeFor<T extends ResourceType> =\n` +
    `  T extends keyof AttributeTypes ? AttributeTypes[T] : never;\n\n`;

  //// AttributesFor type
  output +=
    `export type AttributesFor<T extends ResourceType> =\n` +
    `  T extends keyof AttributeTypes ? keyof AttributeTypes[T] : never;\n\n`;

  //// ResourceAttributeMap type
  output +=
    `export type ResourceAttributeMap = {\n` +
    `  [K in ResourceType]: (AttributesFor<K>)[]\n` +
    `};\n\n`;

  //// ResourceAttributes const
  output += `export const ResourceAttributes: ResourceAttributeMap = {\n`;

  for (const [name, attribs] of resourceAttributeMap) {
    output += `  [ResourceType.${name}]: [`;

    for (let i = 0; i < attribs.length; ++i) {
      if (i) {
        output += ', ';
      }
      output += `"${attribs[i]}"`;
    }
    output += `], \n`;
  }
  output += `};\n\n`;
  return output;
}

function getNamespace(name: string): string | undefined {
  const i = name.indexOf('.');
  if (i < 0) {
    return;
  }
  return name.substr(0, i);
}
