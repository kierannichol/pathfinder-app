import {AbilitySummary} from "../Ability";
import Trait from "../Trait";
import AdditiveTrait from "../traits/AdditiveTrail";
import CharacterChoice, {ChoiceType} from "./CharacterChoice";
import ICharacterChoiceProcessor from "./ICharacterChoiceProcessor";

type AbilityFilter = (ability: AbilitySummary) => boolean;

const ALL_ABILITIES: AbilityFilter = _ => true;

export default class AbilityChoice extends CharacterChoice {

  static processor(choiceType: ChoiceType): ICharacterChoiceProcessor<AbilityChoice> {
    return AbilityChoiceProcessor.create(choiceType);
  }

  static of(label: string, code: string, choiceType: ChoiceType, level: number, dependsOn: string|undefined, index: number = 0, current: string = ''): AbilityChoice {
    const key = `level${level}:${code}:${index}`;
    return new AbilityChoice(label, key, choiceType, ALL_ABILITIES, level, dependsOn, index, current);
  }

  public withFilter(filterFn: AbilityFilter): AbilityChoice {
    return new AbilityChoice(this.label, this.key, this.type, filterFn, this.level, this.dependsOn, this.index, this.current);
  }

  public withValue(value: string): AbilityChoice {
    return new AbilityChoice(this.label, this.key, this.type, this.filterFn, this.level, this.dependsOn, this.index, value);
  }

  public withDependsOn(dependsOn: string): CharacterChoice {
    return new AbilityChoice(this.label, this.key, this.type, this.filterFn, this.level, dependsOn, this.index, this.current);
  }

  private constructor(public readonly label: string, public readonly key: string, public readonly type: ChoiceType, public readonly filterFn: AbilityFilter, public readonly level: number, public readonly dependsOn: string | undefined, protected readonly index: number = 0, public readonly current = '') {
    super();
  }
}

class AbilityChoiceProcessor implements ICharacterChoiceProcessor<AbilityChoice> {

  public static create(choiceType: ChoiceType) {
    return new AbilityChoiceProcessor(choiceType);
  }

  protected constructor(public readonly supportedChoiceType: ChoiceType) {
  }

  async select(choice: AbilityChoice, value: string): Promise<CharacterChoice[]> {
    return [
      choice.withValue(value)
    ];
  }

  async traits(choice: AbilityChoice): Promise<Trait[]> {
    return [
      new AdditiveTrait(choice.current, 1, choice.level)
    ];
  }
}