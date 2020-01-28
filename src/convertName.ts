export function convertName(name: string, namespace?: string): string {
  return ((namespace || '') + name).replace(/^AWS|::|\./g, '');
}
