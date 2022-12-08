import Trait from "../Trait";
import SpellKnownTrait from "../traits/SpellKnownTrait";
import CharacterChoice, {ChoiceType} from "./CharacterChoice";
import ICharacterChoiceProcessor from "./ICharacterChoiceProcessor";

export default class SpellChoice extends CharacterChoice {
  public readonly key;
  public readonly label = "Spell";

  static processor(choiceType: ChoiceType): ICharacterChoiceProcessor<SpellChoice> {
    return SpellChoiceProcessor.create(choiceType);
  }

  static of(choiceType: ChoiceType, level: number, dependsOn: string|undefined, index: number = 0, current: string = ''): SpellChoice {
    return new SpellChoice(choiceType, level, dependsOn, index, current);
  }

  public withValue(value: string): SpellChoice {
    return new SpellChoice(this.type, this.level, this.dependsOn, this.index, value);
  }

  constructor(public readonly type: ChoiceType, public readonly level: number, public dependsOn: string | undefined, protected readonly index: number = 0, public readonly current = '') {
    super();
    this.key = `level${level}:${type}:${index}`;
  }

  withDependsOn(dependsOn: string | undefined): CharacterChoice {
    return new SpellChoice(this.type, this.level, dependsOn, this.index, this.current);
  }
}

class SpellChoiceProcessor implements ICharacterChoiceProcessor<SpellChoice> {

  public static create(choiceType: ChoiceType) {
    return new SpellChoiceProcessor(choiceType);
  }

  protected constructor(public readonly supportedChoiceType: ChoiceType) {
  }

  async select(choice: SpellChoice, value: string): Promise<CharacterChoice[]> {
    return [
      choice.withValue(value)
    ];
  }

  async traits(choice: SpellChoice): Promise<Trait[]> {
    return [
      SpellKnownTrait(choice.current, choice.level)
    ];
  }
}