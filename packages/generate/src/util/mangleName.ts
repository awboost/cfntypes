import Debug from "debug";

const debug = Debug("util:mangleName");

export type NameType = "attributes" | "properties" | "resource" | "type";

export function mangleName(name: string, kind: NameType): string {
  const converted = name.replace(/^AWS|::|\./g, "");
  debug("%s = %s", name, converted);

  switch (kind) {
    case "attributes":
      return converted + "Attribs";
    case "properties":
      return converted + "Props";
    default:
      return converted;
  }
}
