import CharacterChoice, {ChoiceType} from "./CharacterChoice";
import Trait from "../Trait";
import MercyTrait from "../traits/MercyTrait";

export default class MercyChoice extends CharacterChoice {
  public readonly type: ChoiceType = ChoiceType.MERCY;
  public readonly key;

  static of(level: number, classId: string, dependsOn: string|undefined, current: string = ''): MercyChoice {
    return new MercyChoice(level, classId, dependsOn, current);
  }

  private constructor(private readonly level: number, private readonly classId: string, public dependsOn: string|undefined, public readonly current = '') {
    super();
    this.key = `level${level}:${classId}:mercy`;
  }

  select(value: string): CharacterChoice[] {
    return [
        new MercyChoice(this.level, this.classId, this.dependsOn, value)
    ];
  }

  traits(): Trait[] {
    return [
        MercyTrait(this.current, this.classId, this.level)
    ];
  }
}