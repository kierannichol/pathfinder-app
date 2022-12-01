import {List} from "immutable";
import CharacterState from "../../database/CharacterState";
import {CharacterAtLevel} from "./CharacterAtLevel";
import CharacterChoice from "./choices/CharacterChoice";
import CharacterChoiceProcessorCollection from "./choices/CharacterChoiceProcessorCollection";

export type PackedCharacter = {
  id: string;
  choices: {[key: string]: any};
}

export class Character {
  public static readonly ABILITIES = CharacterState.Abilities;

  constructor(public readonly id: string,
              private readonly choices: List<CharacterChoice>,
              private readonly processors: CharacterChoiceProcessorCollection) {
  }

  public async unpack(packed: PackedCharacter): Promise<Character> {
    return new Character(this.id,
        List(await Character.selectAll(this.processors, this.choices, packed.choices)),
        this.processors);
  }

  public pack(): PackedCharacter {
    let packed: PackedCharacter = {id: this.id, choices: {}};
    this.choices
        .filter(choice => choice.current !== '')
        .forEach(choice => packed.choices[choice.key] = choice.current);
    return packed;
  }

  public async select(key: string, value: any): Promise<Character> {
    const choices: CharacterChoice[] = [];
    for (let i = 0; i < this.choices.size; i++) {
      let choice = this.choices.get(i);
      if (choice === undefined || choice.dependsOn === key) {
        continue;
      }
      if (choice.key !== key) {
        choices.push(choice);
        continue;
      }

      choices.push(...await this.processors.select(choice, value));
    }

    return new Character(this.id, List(choices), this.processors);
  }

  public hasChoice(key: string): boolean {
    return this.choices.find(choice => choice.key === key) !== undefined;
  }

  public getChoice(key: string): string {
    return this.choices.find(choice => choice.key === key)?.current ?? '';
  }

  choicesForLevel(level:number): List<CharacterChoice> {
    const prefix = `level${level}:`;
    return this.choices
        .filter(choice => {
          return choice.key.startsWith(prefix)
        });
  }

  async atLevel(level:number): Promise<CharacterAtLevel> {
    let levelState = { ...CharacterState.InitialState };
    levelState['character_level'] = level;

    const traits = (await Promise.all(this.choices.map(choice =>
        this.processors.traits(choice)))).flat();

    traits.forEach(trait => trait.applyTo(level, levelState));

    return new CharacterAtLevel(level, levelState);
  }

  private static async selectAll(processors: CharacterChoiceProcessorCollection, choices: List<CharacterChoice>, values: {[key: string]: any}): Promise<List<CharacterChoice>> {
    const choiceKeys = choices.map(choice => choice.key);
    const selectedChoices = (await Promise.all(choices.map(choice => {
      if (choice.key in values) {
        return processors.select(choice, values[choice.key]);
      }
      return [ choice ];
    }))).flat();
    const alreadySelectedChoices = selectedChoices.filter(choice => choiceKeys.contains(choice.key));
    const newlyProducedChoices = selectedChoices.filter(choice => !choiceKeys.contains(choice.key));

    const selectedNewlyProducedChoices = newlyProducedChoices.length > 0
        ? await this.selectAll(processors, List(newlyProducedChoices), values)
        : List<CharacterChoice>();
    return List(alreadySelectedChoices).concat(selectedNewlyProducedChoices);
  }
}