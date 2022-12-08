import {Effect} from "./Effect";

export class CharacterClassSummary {

  constructor(public readonly id: string,
              public readonly name: string,
              public readonly type: string) {
  }
}

export class CharacterClass extends CharacterClassSummary {
  constructor(id: string,
              name: string,
              type: string,
              public readonly shortDescription: string,
              public readonly effects: Effect[]) {
    super(id, name, type);
  }
}