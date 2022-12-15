import CharacterAtLevel from "./CharacterAtLevel";
import {CharacterState, CharacterStateMutator} from "./CharacterState";
import Choice from "./Choice";
import DataHub from "./DataHub";
import {EffectContext} from "./Effect";
import PackedCharacter, {PackedChoices} from "./PackedCharacter";

export default class Character {
  private readonly effectContext;

  constructor(public readonly id: string,
              private readonly initialState: CharacterState,
              private readonly choices: Choice[],
              private readonly datahub: DataHub) {
    this.effectContext = new EffectContext(datahub);
    this.choices.forEach(choice => choice.applyToContext(this.effectContext));
  }

  public choice(id: string): Choice|undefined {
    return this.allChoices().find(choice => choice.id === id);
  }

  public async select(choiceId: string, value: any): Promise<Character> {
    const selected: Choice[] = await Promise.all(this.choices.map(choice => choice.unpack({ [choiceId]: value }, this.effectContext)));
    return new Character(this.id, this.initialState, selected, this.datahub);
  }

  public async selectAll(values: PackedChoices): Promise<Character> {
    if (!values) {
      values = {};
    }
    const modified = await Promise.all(this.choices.map(choice => choice.unpack(values, this.effectContext)));

    return new Character(this.id, this.initialState, modified, this.datahub);
  }

  public atLevel(level: number): CharacterAtLevel {
    const mutator = new CharacterStateMutator(this.initialState);
    this.choices
      .filter(choice => choice.level <= level)
      .forEach(choice => choice.applyTo(level, mutator, this.effectContext));

    return new CharacterAtLevel(level, mutator.state);
  }

  public choicesForLevel(level: number): Choice[] {
    return this.allChoices().filter(choice => choice.level == level);
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

  private allChoices(): Choice[] {
    return this.choices
        .flatMap(choice => choice.flat());
  }
}