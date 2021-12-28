export function quoteName(name: string): string {
  if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(name)) {
    return `"${name}"`;
  }
  return name;
}
