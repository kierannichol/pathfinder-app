import {DataContext, Resolvable, ResolvedValue} from "@kierannichol/formula-js";
import Immutable from "immutable";
import {EntityContextNode} from "./EntityContext";

interface KeyEffect {
  applyTo(context: DataContext, value: ResolvedValue|undefined): ResolvedValue|undefined;
}

export class Effect extends EntityContextNode {
  static givenKey(key: string): Effect {
    return new Effect(key);
  }

  constructor(protected readonly key: string, private readonly effects: KeyEffect[] = []) {
    super();
  }

  setTo(value: string|number|boolean|ResolvedValue|Resolvable): Effect {
    const resolvable = value instanceof Resolvable ? value : Resolvable.just(value);
    return new Effect(this.key, [...this.effects, new SetResolvableEffect(resolvable)]);
  }

  incrementBy(amount: number, comment?: string | undefined): Effect {
    return new Effect(this.key, [...this.effects, new IncrementEffect(amount)]);
  }

  get(context: DataContext, base: ResolvedValue|undefined, key: string): ResolvedValue | undefined {
    if (key === this.key) {
      for (let i = 0; i < this.effects.length; i++) {
        const effect = this.effects[i];
        base = effect.applyTo(context, base);
      }
    }
    return base;
  }

  keys(baseKeys: Immutable.Set<string>): Immutable.Set<string> {
    return baseKeys.add(this.key);
  }
}

class SetResolvableEffect implements KeyEffect {
  constructor(private readonly resolvable: Resolvable) {
  }

  applyTo(context: DataContext, value: ResolvedValue|undefined): ResolvedValue|undefined {
    return this.resolvable.resolve(context);
  }
}

class IncrementEffect implements KeyEffect {
  constructor(private readonly amount: number) {
  }

  applyTo(context: DataContext, value: ResolvedValue | undefined): ResolvedValue | undefined {
    return ResolvedValue.of((value?.asNumber() ?? 0) + this.amount);
  }
}