import {List} from "immutable";
import CharacterState from "../../database/CharacterState";
import {CharacterAtLevel} from "./CharacterAtLevel";
import CharacterBaseAttributeChoice from "./choices/CharacterBaseAttributeChoice";
import CharacterChoice from "./choices/CharacterChoice";
import CharacterClassChoice from "./choices/CharacterClassChoice";
import CharacterNameChoice from "./choices/CharacterNameChoice";
import CharacterRaceChoice from "./choices/CharacterRaceChoice";
import Trait from "./Trait";

const initialChoices: CharacterChoice<any>[] = [
    new CharacterNameChoice(),
    new CharacterClassChoice(),
    new CharacterRaceChoice(),
  ...CharacterState.Abilities.map(ability =>
        new CharacterBaseAttributeChoice(`level0:${ability}_base`, `${ability}_base`, '10')),
];

export type PackedCharacter = {
  id: string;
  choices: {[key: string]: any};
}

export class Character {
  public static readonly ABILITIES = CharacterState.Abilities;

  private readonly choices: List<CharacterChoice<any>>;
  private readonly traits: List<Trait>;

  constructor(public readonly id: string,
              choices: List<CharacterChoice<any>> = List(initialChoices)) {
    this.choices = choices;
    this.traits = List();
  }

  public static unpack(packed: PackedCharacter): Character {
    return new Character(packed.id,
        List(Character.selectAll(initialChoices, packed.choices)));
  }

  public pack(): PackedCharacter {
    let packed: PackedCharacter = {id: this.id, choices: {}};
    this.choices.forEach(choice => packed.choices[choice.key] = choice.current);
    return packed;
  }

  public select(key: string, value: any): Character {
    return new Character(this.id, this.choices
      .filter(choice => choice.dependsOn !== key)
      .flatMap(choice => {
        if (choice.key !== key) {
          return [ choice ];
        }
        return choice.select(value);
      }));
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

  atLevel(level:number): CharacterAtLevel {
    let levelState = { ...CharacterState.InitialState };
    levelState['character_level'] = level;

    this.choices.forEach(choice => choice.traits().forEach(trait => trait.applyTo(level, levelState)));
    return new CharacterAtLevel(level, levelState);
  }

  private static selectAll(choices: CharacterChoice<any>[], values: {[key: string]: any}): CharacterChoice<any>[] {
    return choices.flatMap(choice => {
      if (choice.key in values) {
        const selectedChoices = choice.select(values[choice.key]);
        const currentChoiceIndex = selectedChoices.findIndex(c => c.key === choice.key);
        if (currentChoiceIndex !== -1) {
          const currentChoice = selectedChoices.splice(currentChoiceIndex, 1);
          return [ ...currentChoice, ...this.selectAll(selectedChoices, values) ];
        }
        return this.selectAll(selectedChoices, values);
      }
      return [ choice ];
    });
  }
}