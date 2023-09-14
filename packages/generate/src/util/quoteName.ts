import ts from "typescript";

export function quoteName(name: string): string | ts.PropertyName {
  if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(name)) {
    return ts.factory.createStringLiteral(name);
  }
  return name;
}
