export interface SpecErrorLocation {
  attributeName?: string;
  propertyName?: string;
  propertyType?: string;
  resource?: string;
}

export class SpecError extends Error {
  constructor(message: string, public readonly location?: SpecErrorLocation) {
    super(message);
  }
}
