import Trait from "../Trait";
import SkillTrait from "../traits/SkillTrait";
import CharacterChoice, {ChoiceType} from "./CharacterChoice";
import ICharacterChoiceProcessor from "./ICharacterChoiceProcessor";

export default class SkillPointChoice extends CharacterChoice {
  public readonly type: ChoiceType = ChoiceType.SKILL_POINT;
  public readonly key;
  public readonly label = "Skill Points";

  static of(level: number, index: number, dependsOn: string | undefined, current: string = ''): SkillPointChoice {
    return new SkillPointChoice(level, index, dependsOn, current);
  }

  private constructor(public readonly level: number, public readonly index:number, public readonly dependsOn: string | undefined, public readonly current = '') {
    super();
    this.key = `level${level}:skillpoint:${index}`;
  }

  withValue(value: string): SkillPointChoice {
    return new SkillPointChoice(this.level, this.index, this.dependsOn, value);
  }

  withDependsOn(dependsOn: string | undefined): CharacterChoice {
    return new SkillPointChoice(this.level, this.index, dependsOn, this.current);
  }
}

export class SkillPointChoiceProcessor implements ICharacterChoiceProcessor<SkillPointChoice> {
  public readonly supportedChoiceType = ChoiceType.SKILL_POINT;

  async select(choice: SkillPointChoice, value: string): Promise<CharacterChoice[]> {
    return [
      choice.withValue(value)
    ];
  }

  async traits(choice: SkillPointChoice): Promise<Trait[]> {
    return [
      SkillTrait(choice.current, choice.level)
    ];
  }
}