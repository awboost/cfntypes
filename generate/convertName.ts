import createDebug from 'debug';

const debug = createDebug('cfntypes:convertName');

export function convertName(name: string): string {
  const converted = name.replace(/^AWS|::|\./g, '');
  debug('%s = %s', name, converted);
  return converted;
}
