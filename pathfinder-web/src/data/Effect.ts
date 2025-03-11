import {DataContext, Formula, MutableDataContext, ResolvedValue} from "@kierannichol/formula-js";
import {ResolvedTrait, Trait} from "./Trait.ts";
import AppliedState from "./AppliedState.ts";

export interface Effect extends Trait, ResolvedTrait {
  applyToDataContext(context: DataContext): void;
}

export class SetFormulaEffect implements Effect {
  children: ResolvedTrait[] = [];

  constructor(public readonly targetKey: string,
              public readonly formula: string) {
  }

  applyToDataContext(context: MutableDataContext): void {
    try {
      context.set(this.targetKey, Formula.parse(this.formula));
    } catch (e) {
      console.error("Unable to parse: " + this.formula);
      throw e;
    }
  }

  applyTo(state: AppliedState): void {
    try {
      state.set(this.targetKey, Formula.parse(this.formula));
    } catch (e) {
      console.error("Unable to parse: " + this.formula);
      throw e;
    }
  }

  async resolve(): Promise<ResolvedTrait> {
    return this;
  }
}

export class SetTextEffect implements Effect {
  children: ResolvedTrait[] = [];

  constructor(public readonly targetKey: string,
              public readonly value: string) {
  }

  applyToDataContext(context: MutableDataContext): void {
    context.set(this.targetKey, this.value);
  }

  applyTo(state: AppliedState): void {
    state.set(this.targetKey, this.value);
  }

  async resolve(): Promise<ResolvedTrait> {
    return this;
  }
}

export class SetNumberEffect implements Effect {
  children: ResolvedTrait[] = [];

  constructor(public readonly targetKey: string,
              public readonly value: number) {
  }

  applyToDataContext(context: MutableDataContext): void {
    context.set(this.targetKey, this.value);
  }

  applyTo(state: AppliedState): void {
    state.set(this.targetKey, this.value);
  }

  async resolve(): Promise<ResolvedTrait> {
    return this;
  }
}

export class AddNumberEffect implements Effect {
  children: ResolvedTrait[] = [];

  constructor(public readonly targetKey: string,
              public readonly delta: number) {
  }

  applyToDataContext(context: MutableDataContext): void {
    const current = context.get(this.targetKey);
    if (current === undefined) {
      context.set(this.targetKey, this.delta);
      return;
    }

    context.set(this.targetKey, current
    .map(resolved => ResolvedValue.of(resolved.asNumber() + this.delta)));
  }

  applyTo(state: AppliedState): void {
    state.increment(this.targetKey, this.delta);
  }

  async resolve(): Promise<ResolvedTrait> {
    return this;
  }
}

export class AddFormulaEffect implements Effect {
  children: ResolvedTrait[] = [];

  constructor(public readonly targetKey: string,
              public readonly formula: string) {
  }

  applyToDataContext(context: MutableDataContext): void {
    const current = context.get(this.targetKey);
    if (current === undefined) {
      context.set(this.targetKey, this.formula);
      return;
    }

    context.set(this.targetKey, current
    .map(resolved => ResolvedValue.of(resolved.asNumber() + (Formula.parse(this.formula).resolve(context)?.asNumber() ?? 0))));
  }

  applyTo(state: AppliedState): void {
    try {
      // const resolvable = Formula.parse(this.formula);
      // state.increment(this.targetKey, resolvable.resolve(state.asDataContext())?.asNumber() ?? 0);
      let sumFormula: string = this.formula;
      let existingFormula = state.asDataContext().get(this.targetKey)?.asFormula();
      if (existingFormula) {
        if (existingFormula.startsWith("{")) {
          existingFormula = existingFormula.substring(1)
        }
        if (existingFormula.endsWith("}")) {
          existingFormula = existingFormula.substring(0, existingFormula.length - 1);
        }
        sumFormula = `(${existingFormula})+(${sumFormula})`;
      }

      state.set(this.targetKey, Formula.parse(sumFormula));
    } catch (e) {
      console.error("Unable to parse: " + this.formula);
      throw e;
    }
  }

  async resolve(): Promise<ResolvedTrait> {
    return this;
  }
}