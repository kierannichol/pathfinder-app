import {Formula} from "@kierannichol/formula-js";
import {ResolvedTrait, Trait} from "./Trait.ts";
import {EntityState} from "./Entity.ts";

export class SetFormulaEffect implements Trait, ResolvedTrait {
  children: ResolvedTrait[] = [];

  constructor(public readonly targetKey: string,
              public readonly formula: string) {
  }

  applyTo(state: EntityState): void {
    try {
      state[this.targetKey] = Formula.parse(this.formula);
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

  applyTo(state: EntityState): void {
    state[this.targetKey] = this.value;
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

  applyTo(state: EntityState): void {
    state[this.targetKey] = this.value;
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

  applyTo(state: EntityState): void {
    state[this.targetKey] = (state[this.targetKey] as number ?? 0) + this.delta;
  }

  async resolve(): Promise<ResolvedTrait> {
    return this;
  }
}