import {PackedChoices} from "../../model/character/Character";
import {CharacterStateMutator} from "./CharacterState";
import DataHub from "./DataHub";
import Effect from "./Effect";
import Option from "./Option";
import Reference from "./Reference";

export default abstract class Choice extends Effect {
  static textChoice(id: string, label: string, level: number, attributeId: string): Choice {
    return new TextChoice(id, label, level, attributeId);
  }

  static selectChoice(id: string, label: string, level: number, options: Reference[]) {
    return new SelectChoice(id, label, level, options);
  }

  abstract get id(): string;
  abstract get label(): string;
  abstract get level(): number;
  abstract get current(): string;

  abstract unpack(values: {[choiceId:string]:any}, database: DataHub): Promise<Choice>;
  abstract pack(): PackedChoices;
}

class TextChoice extends Choice {
  constructor(public readonly id: string,
              public readonly label: string,
              public readonly level: number,
              private readonly attributeId: string,
              public readonly current: string = '') {
    super();
  }

  withValue(value: string): Choice {
    return this.copy({ current: value });
  }

  async unpack(values: {[choiceId:string]:any}, database: DataHub): Promise<Choice> {
    if (!(this.id in values)) return this;
    return this.withValue(values[this.id]);
  }

  pack(): PackedChoices {
    return { [this.id]: this.current };
  }

  applyTo(level: number, state: CharacterStateMutator): void {
    if (this.level > level) return;
    state.set(this.attributeId, this.current);
  }

  private copy(overrides: Partial<SelectChoice>): SelectChoice {
    const clone = Object.create(this);
    Object.assign(clone, overrides);
    return clone;
  }

  choices(): Choice[] {
    return [ this ];
  }
}

export class SelectChoice extends Choice {

  applyTo(level: number, state: CharacterStateMutator) {
    if (this.level > level) return;
    this.effects.forEach(effect => effect.applyTo(level, state));
  }

  private async withSelected(option: Option): Promise<Choice> {
    return this.copy({
      current: option.id,
      effects: await option.effects()
    });
  }

  constructor(public readonly id: string,
              public readonly label: string,
              public readonly level: number,
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

  async unpack(values: {[choiceId:string]:any}, database: DataHub): Promise<Choice> {
    let choice: SelectChoice = this;
    let currentValues = { ...values };
    if (this.id in values) {
      const thisValue = currentValues[this.id];
      delete currentValues[this.id];
      const options = await database.options(this);
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
        return await effect.unpack(values, database);
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
}