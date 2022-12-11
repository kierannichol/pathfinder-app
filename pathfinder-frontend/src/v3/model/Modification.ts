import Effect from "./Effect";

export class ModificationSummary {
  constructor(public readonly id: string, public readonly name: string) {
  }
}

export class Modification extends ModificationSummary {

  constructor(id: string,
              name: string,
              public readonly description: string,
              public readonly effects: Effect[]) {
    super(id, name);
  }
}