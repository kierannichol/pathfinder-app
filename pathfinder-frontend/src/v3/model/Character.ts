import {PackedCharacter, PackedChoices} from "../../model/character/Character";
import CharacterAtLevel from "./CharacterAtLevel";
import {CharacterState, CharacterStateMutator} from "./CharacterState";
import Choice from "./Choice";
import DataHub from "./DataHub";

export default class Character {

  constructor(public readonly id: string,
              private readonly initialState: CharacterState,
              private readonly choices: Choice[],
              private readonly datahub: DataHub) {
  }

  public async select(choiceId: string, value: string): Promise<Character> {
    const modified: Choice[] = await Promise.all(this.choices.map(choice => choice.unpack({ [choiceId]: value }, this.datahub)));
    return new Character(this.id, this.initialState, modified, this.datahub);
  }

  public async selectAll(values: PackedChoices): Promise<Character> {
    const modified = await Promise.all(this.choices.map(choice => choice.unpack(values, this.datahub)));
    return new Character(this.id, this.initialState, modified, this.datahub);
  }

  public atLevel(level: number): CharacterAtLevel {
    const mutator = new CharacterStateMutator(this.initialState);
    this.choices
      .filter(choice => choice.level <= level)
      .forEach(choice => choice.applyTo(level, mutator));

    return new CharacterAtLevel(level, mutator.state);
  }

  public async unpack(packed: PackedChoices): Promise<Character> {
    return this.selectAll(packed);
  }

  public pack(): PackedCharacter {
    let packed: PackedCharacter = {id: this.id, choices: {}};
    this.choices
      .filter(choice => choice.current !== '')
      .forEach(choice => packed.choices = { ...packed.choices, ...choice.pack() });
    return packed;
  }
}