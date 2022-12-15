import {CharacterStateMutator} from "./CharacterState";
import Choice, {SelectChoice} from "./Choice";
import DataHub from "./DataHub";
import Option from "./Option";
import Reference from "./Reference";

export class EffectContext {
  private readonly additionalOptions: {[type:string]:Reference[]} = {};

  constructor(private readonly datahub: DataHub) {
  }

  registerAdditionalOptions(type: string, references: Reference[]): void {
    if (!(type in this.additionalOptions)) {
      this.additionalOptions[type] = [];
    }
    this.additionalOptions[type].push(...references);
  }

  options(choice: SelectChoice): Option[] {
    return this.datahub.options(
        [ ...choice.options, ...(this.additionalOptions[choice.type] ?? []) ]);
  }
}

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

  static addChoicesToType(level: number, type: string, references: Reference[]): Effect {
    return new AddChoicesToTypeEffect(level, type, references);
  }

  abstract applyTo(level: number, state: CharacterStateMutator, context: EffectContext): void;

  applyToContext(context: EffectContext): void {}
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

  applyTo(level: number, state: CharacterStateMutator, context: EffectContext): void {
    this.effects.forEach(effect => effect.applyTo(level, state, context));
  }
}

class SetStateEffect extends Effect {
  constructor(private readonly level: number, private readonly key: string, private readonly value: string|number|boolean) {
    super();
  }

  applyTo(level: number, state: CharacterStateMutator, context: EffectContext): void {
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

  applyTo(level: number, state: CharacterStateMutator, context: EffectContext): void {
    if (this.level > level) return;
    const current = state.get(this.key).asNumber();
    state.set(this.key, current + this.delta);
  }

  choices(): Choice[] {
    return [];
  }
}

export class AddChoicesToTypeEffect extends Effect {
  constructor(public readonly level: number, public readonly type: string, public readonly references: Reference[]) {
    super();
  }

  applyTo(level: number, state: CharacterStateMutator, context: EffectContext): void {
    if (this.level > level) return;
  }

  applyToContext(context: EffectContext): void {

  }
}
