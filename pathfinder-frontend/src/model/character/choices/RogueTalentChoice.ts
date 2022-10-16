import CharacterChoice, {ChoiceType} from "./CharacterChoice";
import Trait from "../Trait";

export default class RogueTalentChoice extends CharacterChoice {
  public readonly type = ChoiceType.ROGUE_TALENT;

  constructor(private readonly level: number, public readonly key: string, public dependsOn: string|undefined, public readonly current = '') {
    super();
  }

  select(value: string): CharacterChoice[] {
    return [
      new RogueTalentChoice(this.level, this.key, this.dependsOn, value)
    ]
  }

  traits(): Trait[] {
    return [];
  }
}