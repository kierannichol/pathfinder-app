import {Formula} from "@kierannichol/formula-js";
import {ResolvedTrait, Trait} from "./Trait.ts";
import AppliedState from "./AppliedState.ts";

export class SetFormulaEffect implements Trait, ResolvedTrait {
  children: ResolvedTrait[] = [];

  constructor(public readonly targetKey: string,
              public readonly formula: string) {
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

export class SetTextEffect implements Trait, ResolvedTrait {
  children: ResolvedTrait[] = [];

  constructor(public readonly targetKey: string,
              public readonly value: string) {
  }

  applyTo(state: AppliedState): void {
    state.set(this.targetKey, this.value);
  }

  async resolve(): Promise<ResolvedTrait> {
    return this;
  }
}

export class SetNumberEffect implements Trait, ResolvedTrait {
  children: ResolvedTrait[] = [];

  constructor(public readonly targetKey: string,
              public readonly value: number) {
  }

  applyTo(state: AppliedState): void {
    state.set(this.targetKey, this.value);
  }

  async resolve(): Promise<ResolvedTrait> {
    return this;
  }
}

export class AddEffect implements Trait, ResolvedTrait {
  children: ResolvedTrait[] = [];

  constructor(public readonly targetKey: string,
              public readonly delta: number) {
  }

  applyTo(state: AppliedState): void {
    state.increment(this.targetKey, this.delta);
  }

  async resolve(): Promise<ResolvedTrait> {
    return this;
  }
}