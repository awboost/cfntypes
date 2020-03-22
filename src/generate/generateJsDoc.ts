import { TypeDefinition } from '@fmtk/cfnspec';

export function generateJsDoc(name: string, def: TypeDefinition): string {
  return [
    `/**`,
    ` * Type definition for ${name}.`,
    def.Documentation && ` * @see ${def.Documentation}`,
    ` */`,
  ]
    .filter(Boolean)
    .join('\n');
}
