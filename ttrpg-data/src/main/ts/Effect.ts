import {ResolvedValue} from "@kierannichol/formula-js";
import {Trait} from "@ttrpg-data/Trait.js";

export interface Effect extends Trait {
}

export class AddEffect implements Effect {
  constructor(public readonly key: string,
              private readonly value: number) {
  }

  clone(): Trait {
    return this;
  }

  keys(): string[] {
    return [this.key];
  }

  apply(key: string, value: ResolvedValue): ResolvedValue {
    if (key !== this.key) {
      return value;
    }
    return ResolvedValue.of(value.asNumber() + this.value);
  }

  async resolve(): Promise<void> {
  }
}

export class SetEffect implements Effect {
  constructor(public readonly key: string,
              private readonly value: ResolvedValue) {
  }

  keys(): string[] {
    return [this.key];
  }

  apply(key: string, value: ResolvedValue): ResolvedValue {
    return key === this.key
        ? this.value
        : value;
  }

  async resolve(): Promise<void> {
  }

  clone(): Trait {
    return this;
  }
}