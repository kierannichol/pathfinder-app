import {MutableDataContext} from "../logic/DataContext";
import {Formula} from "../logic/Formula";
import Resolvable from "../logic/Resolvable";

export default abstract class Effect {

  static setValue(targetKey: string, value: string|number|boolean|Resolvable): Effect {
    return new SetResolvableEffect(targetKey, value);
  }

  static addNumber(targetKey: string, delta: number): Effect {
    return new AddNumberEffect(targetKey, delta);
  }

  static setFormula(targetKey: string, formula: string): Effect {
    return new SetFormulaEffect(targetKey, formula);
  }

  static renameKey(targetKey: string, renamedKey: string): Effect {
    return new RenameKeyEffect(targetKey, renamedKey);
  }

  public abstract applyTo(state: MutableDataContext): void;

  public onlyIf(formula: string|Resolvable): Effect {
    if (formula === '') {
      return this;
    }
    return new ConditionalEffect(this, Formula.parse(formula));
  }
}

export class ConditionalEffect extends Effect {
  constructor(private readonly effect: Effect, private readonly formula: Resolvable) {
    super();
  }

  applyTo(state: MutableDataContext): void {
    if (this.formula.resolve(state)?.asBoolean() ?? false) {
      this.effect.applyTo(state);
    }
  }
}

export class SetNumberEffect extends Effect {
  constructor(public readonly targetKey: string, public readonly value: number) {
    super();
  }

  applyTo(state: MutableDataContext): void {
    state.set(this.targetKey, this.value);
  }
}

export class SetTextEffect extends Effect {
  constructor(public readonly targetKey: string, public readonly value: string) {
    super();
  }

  applyTo(state: MutableDataContext): void {
    state.set(this.targetKey, this.value);
  }
}

export class SetFormulaEffect extends Effect {
  constructor(public readonly targetKey: string, public readonly formula: string) {
    super();
  }

  applyTo(state: MutableDataContext): void {
    state.set(this.targetKey, Formula.parse(this.formula));
  }
}

export class SetResolvableEffect extends Effect {
  constructor(public readonly targetKey: string, public readonly resolvable: string|number|boolean|Resolvable) {
    super();
  }

  applyTo(state: MutableDataContext): void {
    state.set(this.targetKey, this.resolvable);
  }
}

export class AddNumberEffect extends Effect {
  constructor(public readonly targetKey: string, public readonly delta: number) {
    super();
  }

  applyTo(state: MutableDataContext): void {
    let current = state.get(this.targetKey)?.asNumber() ?? 0;
    state.set(this.targetKey, current + this.delta);
  }
}

export class RenameKeyEffect extends Effect {
  constructor(public readonly targetKey: string, public readonly renamedKey: string) {
    super();
  }

  applyTo(state: MutableDataContext): void {
    state.rename(this.targetKey, this.renamedKey);
  }
}
