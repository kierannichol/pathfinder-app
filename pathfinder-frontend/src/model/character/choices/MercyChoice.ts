import Trait from "../Trait";
import MercyTrait from "../traits/MercyTrait";
import CharacterChoice, {ChoiceType} from "./CharacterChoice";
import ICharacterChoiceProcessor from "./ICharacterChoiceProcessor";

export default class MercyChoice extends CharacterChoice {
  public readonly type: ChoiceType = ChoiceType.MERCY;
  public readonly key;

  static of(level: number, classId: string, dependsOn: string|undefined, current: string = ''): MercyChoice {
    return new MercyChoice(level, classId, dependsOn, current);
  }

  private constructor(public readonly level: number, public readonly classId: string, public dependsOn: string|undefined, public readonly current = '') {
    super();
    this.key = `level${level}:${classId}:mercy`;
  }
}

export class MercyChoiceProcessor implements ICharacterChoiceProcessor<MercyChoice> {
  public readonly supportedChoiceType = ChoiceType.MERCY;

  async select(choice: MercyChoice, value: string): Promise<CharacterChoice[]> {
    return [
      MercyChoice.of(choice.level, choice.classId, choice.dependsOn, value)
    ];
  }

  async traits(choice: MercyChoice): Promise<Trait[]> {
    return [
      MercyTrait(choice.current, choice.classId, choice.level)
    ];
  }
}