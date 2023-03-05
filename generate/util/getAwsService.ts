export function getAwsService(name: string): string {
  const index = name.lastIndexOf('::');
  if (index < 0) {
    return name;
  }
  return name.slice(0, index);
}
