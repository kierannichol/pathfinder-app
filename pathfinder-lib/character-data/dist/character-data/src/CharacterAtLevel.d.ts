import Character from "./Character";
import { ResolvedFeature } from "./Feature";
import { EntityState } from "./Entity";
import { ChoiceRef } from "./Choice";
import { BaseDataContext, Resolvable } from "@kierannichol/formula-js";
export default class CharacterAtLevel extends BaseDataContext {
    readonly level: number;
    private readonly character;
    readonly features: ResolvedFeature[];
    private readonly state;
    readonly choices: ChoiceRef[];
    constructor(level: number, character: Character, features?: ResolvedFeature[], state?: EntityState, choices?: ChoiceRef[]);
    selected(choice: ChoiceRef | string, index?: number): string | string[];
    hasSelection(choice: ChoiceRef | string): boolean;
    choice(id: string): ChoiceRef | undefined;
    choicesOfType(...tags: string[]): ChoiceRef[];
    modify(modifyFn: (state: EntityState) => void): CharacterAtLevel;
    get(key: string): Resolvable | undefined;
    has(key: string): boolean;
    keys(): string[];
    diff(otherLevel: CharacterAtLevel): CharacterAtLevel;
    without(key: string): CharacterAtLevel;
    withoutChoice(path: string): CharacterAtLevel;
}
