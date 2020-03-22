export function convertName(name: string): string {
  return name.replace(/^AWS|::|\./g, '');
}
