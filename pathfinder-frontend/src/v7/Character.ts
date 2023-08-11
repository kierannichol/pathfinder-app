import PackedCharacter, {PackedChoices} from "../core/PackedCharacter";
import AppliedEntityContext from "./AppliedEntityContext";
import {BaseCharacterEntity} from "./BaseCharacterModule";
import CharacterAtLevel from "./CharacterAtLevel";
import Database from "./Database";
import {ResolvedEntityContext} from "./ResolvedEntityContext";

export default class Character {
  private readonly context: ResolvedEntityContext;

  static create(id: string, database: Database) {
    return new Character(id, database, {}, undefined);
  }

  private constructor(public readonly id: string,
                      private readonly database: Database,
                      private readonly selections: PackedChoices,
                      context: ResolvedEntityContext|undefined = undefined) {
    this.context = context ?? new ResolvedEntityContext(BaseCharacterEntity, database, selections);
  }

  atLevel(level: number): CharacterAtLevel {
    const applied = AppliedEntityContext.create(level, this.context);
    const characterAtLevel = new CharacterAtLevel(level,
        this,
        applied.features,
        applied.state,
        applied.choices);
    console.log(characterAtLevel);
    return characterAtLevel;
  }

  pack(): PackedCharacter {
    return {
      id: this.id,
      choices: this.selections
    }
  }

  selected(choiceId: string): string|undefined {
    return this.selections[choiceId];
  }

  async select(key: string, value: string): Promise<Character> {
    return this.selectAll({ [key]: value });
  }

  async selectAll(choiceSelections: PackedChoices): Promise<Character> {
    const allSelections: PackedChoices = {
      ...this.selections,
      ...choiceSelections
    };

    console.log(allSelections);

    const context = new ResolvedEntityContext(this.context.baseEntity, this.database, allSelections);
    await context.baseEntity.resolve('', context);

    return new Character(this.id, this.database, allSelections, context);
  }
}