import {Attribute} from "./Attribute";

export class AbilitySummary implements Attribute {
  constructor(public readonly id: string,
              public readonly name: string,
              public readonly type: Ability.Type) {
  }

  public displayName(): string {
    return this.name;
  }
}

export class Ability extends AbilitySummary {
  constructor(public readonly id: string,
              public readonly name: string,
              public readonly type: Ability.Type,
              public readonly description: string) {
    super(id, name, type);
  }
}

export namespace Ability {

  export enum Type {
    None,
    Ex,
    Su,
    Sp
  }
}