import PackedCharacter, {PackedSelections} from "./PackedCharacter.ts";
import CharacterAtLevel from "./CharacterAtLevel.ts";
import Database from "./Database.ts";
import {ResolvedEntityContext} from "./ResolvedEntityContext.ts";
import AppliedEntityContext from "./AppliedEntityContext.ts";
import CharacterTemplate from "./CharacterTemplate.ts";
import {timedAsync} from "../../app/pfutils.ts";

export default class Character {
  private readonly context: ResolvedEntityContext;

  get name(): string {
    return this.selected('character_name') ?? '';
  }

  static create(id: string, template: CharacterTemplate, database: Database) {
    return new Character(id, template, database, {}, undefined);
  }

  private constructor(public readonly id: string,
                      private readonly template: CharacterTemplate,
                      private readonly database: Database,
                      private readonly selections: PackedSelections,
                      context: ResolvedEntityContext|undefined = undefined) {
    this.context = context ?? new ResolvedEntityContext(template.createEntity(), database, selections);
  }

  atLevel(level: number): CharacterAtLevel {
    const applied = AppliedEntityContext.create(level, this.context, this.database);
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
      selections: this.selections
    }
  }

  selected(choiceId: string): string|undefined {
    return this.selections[choiceId];
  }

  async select(key: string, value: string): Promise<Character> {
    return this.selectAll({ [key]: value });
  }

  async selectAll(choiceSelections: PackedSelections): Promise<Character> {
    const allSelections: PackedSelections = {
      ...this.selections,
      ...choiceSelections
    };

    const context = ResolvedEntityContext.derived(this.context, allSelections); //new ResolvedEntityContext(this.context.baseEntity, this.database, allSelections);
    await timedAsync(() => context.baseEntity.resolve('', context), 'Resolving Character');
    context.cleanup();

    return new Character(this.id, this.template, this.database, allSelections, context);
  }
}