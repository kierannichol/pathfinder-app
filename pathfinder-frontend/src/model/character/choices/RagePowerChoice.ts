import CharacterChoice, {ChoiceType} from "./CharacterChoice";
import Trait from "../Trait";
import CustomTrait from "../traits/CustomTrait";

class RagePowerChoice extends CharacterChoice {
  public readonly type = ChoiceType.RAGE_POWER;
  public readonly key;

  static of(level: number, dependsOn: string|undefined, current: string = ''): RagePowerChoice {
    return new RagePowerChoice(level, dependsOn, current);
  }

  private constructor(private readonly level: number, public dependsOn: string|undefined, public readonly current = '') {
    super();
    this.key = `level${level}:ragepower`;
  }

  traits(): Trait[] {
    return [ CustomTrait.of(`ragepower:${this.current}`, true, this.level) ];
  }

  select(value: string): CharacterChoice[] {
    return [
      new RagePowerChoice(this.level, this.dependsOn, value)
    ]
  }

}

export default RagePowerChoice;