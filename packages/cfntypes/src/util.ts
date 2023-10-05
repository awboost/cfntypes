import { Fn, IntrinsicValue } from "./intrinsics.js";
import {
  ResourceDefinition,
  ResourceOptions,
  Template,
  TemplateSection,
} from "./template.js";

/**
 * The base class for resources.
 */
export class ResourceBase<Type extends string, Props, Attribs> {
  public readonly attributes: Readonly<Attribs>;
  public readonly ref: IntrinsicValue;

  constructor(
    public readonly type: Type,
    public readonly attributeNames: readonly (keyof Attribs)[],
    public readonly logicalId: string,
    public readonly properties: Readonly<Props>,
    public readonly options: Readonly<ResourceOptions> = {},
  ) {
    this.attributes = makeResourceAttributesProxy(logicalId, attributeNames);
    this.ref = Fn.ref(logicalId);
  }

  public addToTemplate(template: Template): this {
    addToTemplate(template, "Resources", this.logicalId, this.toJSON());
    return this;
  }

  public toJSON(): ResourceDefinition<Props, Type> {
    return {
      Type: this.type,
      Properties: this.properties,
      ...this.options,
    };
  }
}

/**
 * Add the given element to the template, taking care of creating the template
 * section if necessary, and checking if the element already exists. An
 * exception will be thrown if an element with the same name has already been
 * added to the template.
 */
export function addToTemplate<Section extends TemplateSection>(
  template: Template,
  section: Section,
  name: string,
  value: Required<Template>[Section][string],
): void {
  if (!(section in template)) {
    template[section] = {};
  }
  const map = template[section] as Required<Template>[Section];
  if (name in map) {
    throw new Error(`duplicate element in "${section}" section: "${name}"`);
  }
  map[name] = value;
}

/**
 * Make a Proxy object that translates member access into `Fn::GetAtt` calls for
 * the given `logicalResourceId`. If `names` is specified, attempts to access
 * an invalid attribute name will throw an exception; otherwise all attribute
 * are allowed.
 */
export function makeResourceAttributesProxy<T>(
  logicalResourceId: string,
  names?: readonly (keyof T)[],
): T {
  return new Proxy(Object.create(null), {
    get: (_, name) => {
      if (typeof name === "string") {
        if (!names || names.includes(name as any)) {
          return Fn.getAtt(logicalResourceId, name);
        }
      }
      const nameStr = String(name);
      throw new Error(
        `attribute name '${nameStr}' not valid for resource '${logicalResourceId}'`,
      );
    },
  }) as T;
}
