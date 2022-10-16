import CharacterChoice, {ChoiceType} from "./CharacterChoice";
import {DataContextState} from "../../../logic/DataContext";
import Trait from "../Trait";
import CustomTrait from "../traits/CustomTrait";

export default class CharacterNameChoice extends CharacterChoice {
  public readonly key = CharacterChoice.CHARACTER_NAME;
  public readonly type = ChoiceType.TEXT;
  public readonly dependsOn = undefined;

  constructor(private readonly value: string = '') {
    super();
  }

  get current(): string {
    return this.value;
  }

  select(value: string): CharacterChoice[] {
    return [
        new CharacterNameChoice(value)
    ];
  }

  traits(): Trait[] {
    return [ CustomTrait.of('character_name', this.current) ];
  }
}