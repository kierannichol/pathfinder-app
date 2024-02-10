import {ResolvedEntityContext} from "./ResolvedEntityContext.ts";
import {ResolvedTrait, Trait, traverseTrait} from "./Trait.ts";
import {Path} from "../../utils/Path.ts";
import {EntityChoiceSelections, EntityState} from "./Entity.ts";
import Database from "./Database.ts";

export class CharacterTemplate {

  constructor(private readonly levelTemplates: CharacterLevelTemplate[]) {
  }

  async resolve(database: Database, selections: EntityChoiceSelections): Promise<ResolvedCharacterTemplate> {
    const context = new ResolvedEntityContext(
        key => database.load(key),
        selections);
    const resolved = await Promise.all(this.levelTemplates.map(levelTemplate => levelTemplate.resolve(context)))
    return new ResolvedCharacterTemplate(resolved);
  }
}

export class ResolvedCharacterTemplate {

  constructor(private readonly resolvedLevelTemplates: ResolvedCharacterLevelTemplate[]) {
  }

  atLevel(level: number): ResolvedCharacterTemplateAtLevel {
    return new ResolvedCharacterTemplateAtLevel(level,
        this.resolvedLevelTemplates.filter(levelTemplate =>
            levelTemplate.levelNumber <= level));
  }
}

export class ResolvedCharacterTemplateAtLevel {

  constructor(public readonly characterLevel: number,
              private readonly resolvedLevelTemplates: ResolvedCharacterLevelTemplate[]) {
  }

  applyTo(state: EntityState): void {
    this.resolvedLevelTemplates.forEach(levelTemplate => levelTemplate.applyTo(state));
  }

  traverse(actionFn: (descendant: ResolvedTrait, depth: number) => void) {
    this.resolvedLevelTemplates.forEach(level =>
        level.traverse(actionFn));
  }
}

export class CharacterLevelTemplate {

  constructor(public readonly levelNumber: number,
              private readonly traits: Trait[]) {
  }

  async resolve(context: ResolvedEntityContext): Promise<ResolvedCharacterLevelTemplate> {
    const path = Path.of(this.levelNumber > 0 ? this.levelNumber : '');
    const promises = this.traits.map(trait => trait.resolve(path, context));
    const resolved = await Promise.all(promises);
    return new ResolvedCharacterLevelTemplate(
        this.levelNumber,
        resolved);
  }
}

export class ResolvedCharacterLevelTemplate {

  constructor(public readonly levelNumber: number,
              private readonly traits: ResolvedTrait[]) {
  }

  applyTo(state: EntityState): void {
    this.traits.forEach(trait => trait.applyTo(state));
  }

  traverse(actionFn: (descendant: ResolvedTrait, depth: number) => void) {
    this.traits.forEach(descendant => traverseTrait(descendant, actionFn));
  }
}