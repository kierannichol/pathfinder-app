import {CharacterStateMutator} from "./CharacterState";
import Effect, {EffectContext} from "./Effect";
import Option from "./Option";
import {PackedChoices} from "./PackedCharacter";
import Reference from "./Reference";

type ChoiceInputType = "text" | "select";

export default abstract class Choice extends Effect {

  static textChoice(id: string, label: string, level: number, type: string, attributeId: string): Choice {
    return new TextChoice(id, label, level, type, attributeId);
  }

  static selectChoice(id: string, label: string, level: number, type: string, options: Reference[]) {
    return new SelectChoice(id, label, level, type, options);
  }

  abstract get id(): string;
  abstract get label(): string;
  abstract get level(): number;
  abstract get current(): string;
  abstract get input(): ChoiceInputType;
  abstract get type(): string;
  abstract unpack(values: {[choiceId:string]:any}, context: EffectContext): Promise<Choice>;
  abstract pack(): PackedChoices;

  abstract flat(): Choice[];
}

export class TextChoice extends Choice {
  public readonly input: ChoiceInputType = "text";

  constructor(public readonly id: string,
              public readonly label: string,
              public readonly level: number,
              public readonly type: string,
              public readonly attributeId: string,
              public readonly current: string = '') {
    super();
  }

  withValue(value: string): Choice {
    return this.copy({ current: value });
  }

  async unpack(values: {[choiceId:string]:any}, context: EffectContext): Promise<Choice> {
    if (!(this.id in values)) return this;
    return this.withValue(values[this.id]);
  }

  pack(): PackedChoices {
    return { [this.id]: this.current };
  }

  applyTo(level: number, state: CharacterStateMutator, context: EffectContext): void {
    if (this.level > level || this.current === '') return;
    state.set(this.attributeId, this.current);
  }

  private copy(overrides: Partial<SelectChoice>): SelectChoice {
    const clone = Object.create(this);
    Object.assign(clone, overrides);
    return clone;
  }

  flat(): Choice[] {
    return [ this ];
  }
}

export class SelectChoice extends Choice {
  public readonly input: ChoiceInputType = "select";

  applyTo(level: number, state: CharacterStateMutator, context: EffectContext) {
    if (this.level > level || this.current === '') return;
    this.effects.forEach(effect => effect.applyTo(level, state, context));
  }

  applyToContext(context: EffectContext): void {
    this.effects.forEach(effect => effect.applyToContext(context));
  }

  private async withSelected(option: Option|undefined): Promise<Choice> {
    if (option === undefined) {
      return this.copy({
        current: '',
        effects: []
      });
    }
    return this.copy({
      current: option.id,
      effects: await option.effects()
    });
  }

  constructor(public readonly id: string,
              public readonly label: string,
              public readonly level: number,
              public readonly type: string,
              public readonly options: Reference[],
              public readonly effects: Effect[] = [],
              public readonly current: string = '') {
    super();
  }

  private copy(overrides: Partial<SelectChoice>): SelectChoice {
    const clone = Object.create(this);
    Object.assign(clone, overrides);
    return clone;
  }

  async unpack(values: {[choiceId:string]:any}, context: EffectContext): Promise<Choice> {
    let choice: SelectChoice = this;
    let currentValues = { ...values };
    if (this.id in values) {
      const thisValue = currentValues[this.id];
      if (thisValue === '') {
        return this.withSelected(undefined);
      }
      delete currentValues[this.id];
      const options = context.options(choice);
      const selected = options.find(option => option.id === thisValue);
      if (!selected) {
        console.warn(`Invalid value selected for ${this.id}: ${thisValue}`)
        return this;
      }
      choice = await this.withSelected(selected) as SelectChoice;
    }

    if (Object.keys(currentValues).length === 0) {
      return choice;
    }

    const effectsWithSelection: Effect[] = (await Promise.all(choice.effects.map(async effect => {
      if (effect instanceof Choice) {
        return await effect.unpack(values, context)
      }
      return effect;
    })));

    return choice.copy({ effects: effectsWithSelection });
  }

  public pack(): PackedChoices {
    const packed = this.effects.filter(effect => effect instanceof Choice)
        .map(effect => effect as Choice)
        .map((choice: Choice) => choice.pack())
        .reduce((a, b) => {
          return { ...a, ...b };
        }, {});

    packed[this.id] = this.current;
    return packed;
  }

  flat(): Choice[] {
    return [ this, ...this.effects
        .filter(effect => effect instanceof Choice)
        .flatMap(choice => (choice as Choice)?.flat() ?? [])
    ]
  }
}