import {BaseModifierDatabase} from "../../../database/v2/BaseModifierDatabase";
import Trait from "../Trait";
import BooleanTrait from "../traits/BooleanTrait";
import CharacterChoice, {ChoiceType} from "./CharacterChoice";
import ICharacterChoiceProcessor from "./ICharacterChoiceProcessor";

export default class ModifierChoice extends CharacterChoice {
  public readonly key;
  public readonly label = "Modifier";

  static processor(choiceType: ChoiceType, database: BaseModifierDatabase): ICharacterChoiceProcessor<ModifierChoice> {
    return ModifierChoiceProcessor.create(choiceType, database);
  }

  static of(choiceType: ChoiceType, level: number, dependsOn: string|undefined, index: number = 0, current: string = ''): ModifierChoice {
    return new ModifierChoice(choiceType, level, dependsOn, index, current);
  }

  public withValue(value: string): ModifierChoice {
    return new ModifierChoice(this.type, this.level, this.dependsOn, this.index, value);
  }

  withDependsOn(dependsOn: string | undefined): ModifierChoice {
    return new ModifierChoice(this.type, this.level, dependsOn, this.index, this.current);
  }

  constructor(public readonly type: ChoiceType, public readonly level: number, public dependsOn: string | undefined, protected readonly index: number = 0, public readonly current = '') {
    super();
    this.key = `level${level}:${type}:${index}`;
  }
}

class ModifierChoiceProcessor implements ICharacterChoiceProcessor<ModifierChoice> {

  public static create(choiceType: ChoiceType, database: BaseModifierDatabase) {
    return new ModifierChoiceProcessor(choiceType, database);
  }

  protected constructor(public readonly supportedChoiceType: ChoiceType,
                        private readonly database: BaseModifierDatabase) {
  }

  async select(choice: ModifierChoice, value: string): Promise<CharacterChoice[]> {
    const modifier = await this.database.load(value);

    return [
      choice.withValue(value),
        ...(modifier?.choices(choice.key) ?? [])
    ];
  }

  async traits(choice: ModifierChoice): Promise<Trait[]> {
    const modifier = await this.database.load(choice.current);

    return [
      BooleanTrait.of(choice.current, true, choice.level),
        ...(modifier?.traits() ?? [])
    ];
  }
}