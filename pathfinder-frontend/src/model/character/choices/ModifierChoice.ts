import {BaseModifierDatabase} from "../../../database/v2/BaseModifierDatabase";
import Trait from "../Trait";
import BooleanTrait from "../traits/BooleanTrait";
import CharacterChoice, {ChoiceType} from "./CharacterChoice";
import ICharacterChoiceProcessor from "./ICharacterChoiceProcessor";

export default class ModifierChoice extends CharacterChoice {
  public readonly type = ChoiceType.MODIFIER;

  static processor(choiceType: ChoiceType, databaseFn: (databaseId: string) => BaseModifierDatabase): ICharacterChoiceProcessor<ModifierChoice> {
    return ModifierChoiceProcessor.create(choiceType, databaseFn);
  }

  static of(label: string, code: string, databaseId: string, level: number, dependsOn: string|undefined, index: number = 0, current: string = ''): ModifierChoice {
    const key = `level${level}:${code}:${index}`;
    return new ModifierChoice(label, key, databaseId, level, dependsOn, index, current);
  }

  public withValue(value: string): ModifierChoice {
    return this.copy({ current: value });
  }

  withDependsOn(dependsOn: string | undefined): ModifierChoice {
    return this.copy({ dependsOn: dependsOn });
  }

  constructor(public readonly label: string, public readonly key: string, public readonly databaseId: string, public readonly level: number, public dependsOn: string | undefined, protected readonly index: number = 0, public readonly current = '') {
    super();
  }

  protected copy(overrides: Partial<ModifierChoice>): ModifierChoice {
    const clone = Object.create(this);
    Object.assign(clone, overrides);
    return clone;
  }
}

class ModifierChoiceProcessor implements ICharacterChoiceProcessor<ModifierChoice> {

  public static create(choiceType: ChoiceType, databaseFn: (databaseId: string) => BaseModifierDatabase) {
    return new ModifierChoiceProcessor(choiceType, databaseFn);
  }

  protected constructor(public readonly supportedChoiceType: ChoiceType,
                        private readonly databaseFn: (databaseId: string) => BaseModifierDatabase) {
  }

  async select(choice: ModifierChoice, value: string): Promise<CharacterChoice[]> {
    const modifier = await this.databaseFn(choice.databaseId)?.load(value);

    return [
      choice.withValue(value),
        ...(modifier?.choices(choice.key) ?? [])
    ];
  }

  async traits(choice: ModifierChoice): Promise<Trait[]> {
    const modifier = await this.databaseFn(choice.databaseId)?.load(choice.current);

    return [
      BooleanTrait.of(choice.current, true, choice.level),
        ...(modifier?.traits() ?? [])
    ];
  }
}