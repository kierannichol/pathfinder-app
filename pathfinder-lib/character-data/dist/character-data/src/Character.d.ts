import CharacterAtLevel from "./CharacterAtLevel.ts";
import Database from "./Database.ts";
import { CharacterTemplate } from "./CharacterTemplate.ts";
import PackedCharacter, { PackedSelections } from "@/data/PackedCharacter.ts";
export default class Character {
    readonly id: string;
    private readonly template;
    private readonly database;
    private readonly selections;
    private resolvedTemplate;
    get name(): string;
    static create(id: string, template: CharacterTemplate, database: Database): Character;
    private constructor();
    atLevel(level: number, withoutChoicePath?: string | undefined): CharacterAtLevel;
    pack(): PackedCharacter;
    selected(choiceId: string): string | string[] | undefined;
    select(key: string, value: string | string[]): Promise<Character>;
    selectAll(choiceSelections: PackedSelections): Promise<Character>;
}
