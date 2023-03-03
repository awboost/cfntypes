export function getNamespace(name: string): string {
  const index = name.indexOf('.');
  if (index < 0) {
    return '';
  }
  return name.slice(0, index);
}
