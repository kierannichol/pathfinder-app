import CharacterAtLevel from "./CharacterAtLevel.ts";
import Database from "./Database.ts";
import {timedAsync} from "../../app/pfutils.ts";
import {CharacterTemplate, ResolvedCharacterTemplate} from "./CharacterTemplate.ts";
import {EntityState} from "./Entity.ts";
import PackedCharacter, {PackedSelections} from "../PackedCharacter.ts";
import {Feature, ResolvedFeature} from "./Feature.ts";
import {ResolvedChoice} from "./Choice.ts";
import {ResolvedTrait} from "./Trait.ts";

export default class Character {
  private resolvedTemplate: ResolvedCharacterTemplate|undefined;

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
                      resolvedEntity: ResolvedCharacterTemplate|undefined = undefined) {
    this.resolvedTemplate = resolvedEntity;
  }

  atLevel(level: number): CharacterAtLevel {

    const state: EntityState = {};
    // this.resolvedEntity?.applyTo(state);

    const templateAtLevel = this.resolvedTemplate?.atLevel(level);

    templateAtLevel?.applyTo(state);

    const featuresByKey: {[key:string]:Feature} = {};
    const choices: ResolvedChoice[] = [];

    templateAtLevel?.traverse((descendant: ResolvedTrait) => {
      if (descendant instanceof ResolvedFeature) {
        const feature = descendant.origin;
        featuresByKey[feature.key] = feature;
      }

      if (descendant instanceof ResolvedChoice) {
        choices.push(descendant);
      }
    });

    const features = Object.values(featuresByKey);

    const characterAtLevel = new CharacterAtLevel(level,
        this,
        features,
        state,
        choices);

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

    const resolved = await timedAsync(() => this.template.resolve(this.database, allSelections), 'Resolving Character');

    return new Character(this.id, this.template, this.database, allSelections, resolved);
  }
}