import Debug from 'debug';

const debug = Debug('util:mangleName');

export enum NameType {
  Attributes = 'Attributes',
  Const = 'Const',
  Resource = 'Resource',
  Type = 'Type',
}

export function mangleName(name: string, kind: NameType): string {
  const converted = name.replace(/^AWS|::|\./g, '');
  debug('%s = %s', name, converted);

  switch (kind) {
    case NameType.Attributes:
      return converted + 'Attribs';
    case NameType.Resource:
      return converted + 'Props';
    default:
      return converted;
  }
}
