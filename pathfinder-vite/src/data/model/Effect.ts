import {DataContext, Formula, Resolvable} from "@kierannichol/formula-js";
import {CharacterState} from "./CharacterState.ts";

export interface Effect {

  applyTo(state: CharacterState): void;
}

export class ConditionalEffect implements Effect {

  constructor(private readonly effect: Effect,
              private readonly conditionFormula: string) {
  }

  applyTo(state: CharacterState): void {
    const dataContext: DataContext = DataContext.of(state);
    let condition: Resolvable = Formula.parse(this.conditionFormula);
    if (condition.resolve(dataContext)?.asBoolean() ?? false) {
      this.effect.applyTo(state);
    }
  }
}

export class SetFormulaEffect implements Effect {

  constructor(public readonly targetKey: string,
              public readonly formula: string) {
  }

  applyTo(state: CharacterState): void {
    try {
      state[this.targetKey] = Formula.parse(this.formula);
    } catch (e) {
      console.error("Unable to parse: " + this.formula);
      throw e;
    }
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