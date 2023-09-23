import {Formula} from "@kierannichol/formula-js";
import {CharacterState} from "./CharacterState.ts";

export interface Effect {

  applyTo(state: CharacterState): void;
}

export class SetFormulaEffect implements Effect {

  constructor(public readonly targetKey: string,
              public readonly formula: string) {
  }

  applyTo(state: CharacterState): void {
    state[this.targetKey] = Formula.parse(this.formula);
  }
}

export class SetTextEffect implements Effect {

  constructor(public readonly targetKey: string,
              public readonly value: string) {
  }

  applyTo(state: CharacterState): void {
    state[this.targetKey] = this.value;
  }
}

export class SetNumberEffect implements Effect {

  constructor(public readonly targetKey: string,
              public readonly value: number) {
  }

  applyTo(state: CharacterState): void {
    state[this.targetKey] = this.value;
  }
}

export class AddEffect implements Effect {

  constructor(public readonly targetKey: string,
              public readonly delta: number) {
  }

  applyTo(state: CharacterState): void {
    state[this.targetKey] = (state[this.targetKey] as number ?? 0) + this.delta;
  }
}