import {CharacterStateMutator} from "./CharacterState";
import Choice from "./Choice";

export default abstract class Effect {
  static concat(...effects: Effect[]): Effect {
    return CompositeEffect.concat(...effects);
  }

  static setState(level: number, key: string, value: string|number|boolean): Effect {
    return new SetStateEffect(level, key, value);
  }

  static adjustState(level: number, key: string, delta: number): Effect {
    return new AdjustStateEffect(level, key, delta);
  }

  abstract applyTo(level: number, state: CharacterStateMutator): void;
}

class CompositeEffect extends Effect {

  public static concat(...effects: Effect[]): CompositeEffect {
    return new CompositeEffect(effects.flatMap(effect => {
      if (effect instanceof CompositeEffect) {
        return effect.effects;
      }
      return [ effect ];
    }));
  }

  private constructor(private readonly effects: Effect[]) {
    super();
  }

  applyTo(level: number, state: CharacterStateMutator): void {
    this.effects.forEach(effect => effect.applyTo(level, state));
  }
}

class SetStateEffect extends Effect {
  constructor(private readonly level: number, private readonly key: string, private readonly value: string|number|boolean) {
    super();
  }

  applyTo(level: number, state: CharacterStateMutator): void {
    if (this.level > level) return;
    state.set(this.key, this.value);
  }

  choices(): Choice[] {
    return [];
  }
}

class AdjustStateEffect extends Effect {
  constructor(private readonly level: number, private readonly key: string, private readonly delta: number) {
    super();
  }

  applyTo(level: number, state: CharacterStateMutator): void {
    if (this.level > level) return;
    const current = state.get(this.key).asNumber();
    state.set(this.key, current + this.delta);
  }

  choices(): Choice[] {
    return [];
  }
}