import Trait from "../Trait";
import SkillTrait from "../traits/SkillTrait";
import CharacterChoice, {ChoiceType} from "./CharacterChoice";
import ICharacterChoiceProcessor from "./ICharacterChoiceProcessor";

export default class SkillPointChoice extends CharacterChoice {
  public readonly type: ChoiceType = ChoiceType.SKILL_POINT;
  public readonly key;

  static of(level: number, index: number, dependsOn: string, current: string = ''): SkillPointChoice {
    return new SkillPointChoice(level, index, dependsOn, current);
  }

  private constructor(public readonly level: number, public readonly index:number, public readonly dependsOn: string, public readonly current = '') {
    super();
    this.key = `level${level}:skillpoint:${index}`;
  }
}

export class SkillPointChoiceProcessor implements ICharacterChoiceProcessor<SkillPointChoice> {
  public readonly supportedChoiceType = ChoiceType.SKILL_POINT;

  async select(choice: SkillPointChoice, value: string): Promise<CharacterChoice[]> {
    return [
      SkillPointChoice.of(choice.level, choice.index, choice.dependsOn, value)
    ];
  }

  async traits(choice: SkillPointChoice): Promise<Trait[]> {
    return [
      SkillTrait(choice.current, choice.level)
    ];
  }
}