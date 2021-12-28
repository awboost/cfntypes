import { TypeDefinition } from '@cfnboost/spec';

export function generateJsDoc(name: string, def: TypeDefinition): string {
  let output = ``;

  output += `/**\n`;
  output += ` * Type definition for ${name}.\n`;

  if (def.Documentation) {
    output += ` * @see ${def.Documentation}\n`;
  }
  output += ` */\n`;

  return output;
}
