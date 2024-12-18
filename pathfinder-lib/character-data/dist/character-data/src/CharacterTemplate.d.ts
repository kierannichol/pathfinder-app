import { ResolvedEntityContext } from "./ResolvedEntityContext.ts";
import { ResolvedTrait, Trait } from "./Trait.ts";
import { EntityChoiceSelections } from "./Entity.ts";
import Database from "./Database.ts";
import AppliedState from "./AppliedState.ts";
export declare class CharacterTemplate {
    private readonly levelTemplates;
    constructor(levelTemplates: CharacterLevelTemplate[]);
    resolve(database: Database, selections: EntityChoiceSelections): Promise<ResolvedCharacterTemplate>;
}
export declare class ResolvedCharacterTemplate {
    private readonly resolvedLevelTemplates;
    constructor(resolvedLevelTemplates: ResolvedCharacterLevelTemplate[]);
    atLevel(level: number): ResolvedCharacterTemplateAtLevel;
}
export declare class ResolvedCharacterTemplateAtLevel {
    readonly characterLevel: number;
    private readonly resolvedLevelTemplates;
    constructor(characterLevel: number, resolvedLevelTemplates: ResolvedCharacterLevelTemplate[]);
    applyTo(state: AppliedState): void;
    traverse(state: AppliedState, actionFn: (descendant: ResolvedTrait, depth: number) => boolean): void;
}
export declare class CharacterLevelTemplate {
    readonly levelNumber: number;
    private readonly traits;
    constructor(levelNumber: number, traits: Trait[]);
    resolve(context: ResolvedEntityContext): Promise<ResolvedCharacterLevelTemplate>;
}
export declare class ResolvedCharacterLevelTemplate {
    readonly levelNumber: number;
    private readonly traits;
    constructor(levelNumber: number, traits: ResolvedTrait[]);
    applyTo(state: AppliedState): void;
    traverse(state: AppliedState, actionFn: (descendant: ResolvedTrait, depth: number) => boolean): void;
}
