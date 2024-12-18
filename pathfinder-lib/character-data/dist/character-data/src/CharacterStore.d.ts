import PackedCharacter, { PackedSelections } from "./PackedCharacter.ts";
import Character from "./Character.ts";
import Database from "./Database.ts";
import CharacterSummary from "./CharacterSummary.ts";
import { CharacterTemplate } from "./CharacterTemplate.ts";
export default abstract class CharacterStore {
    private readonly template;
    private readonly database;
    protected constructor(template: CharacterTemplate, database: Database);
    list(): Promise<CharacterSummary[]>;
    load(id: string): Promise<Character | undefined>;
    save(character: Character): Promise<void>;
    create(selections: PackedSelections): Promise<Character>;
    delete(id: string): Promise<void>;
    private unpack;
    protected abstract loadAllPacked(): Promise<PackedCharacter[]>;
    protected abstract loadPacked(id: string): Promise<PackedCharacter | undefined>;
    protected abstract savePacked(packed: PackedCharacter): Promise<void>;
    protected abstract deletePacked(id: string): Promise<void>;
}
export declare class FirebaseCharacterStore extends CharacterStore {
    constructor(template: CharacterTemplate, database: Database);
    loadPacked(id: string): Promise<PackedCharacter | undefined>;
    protected loadAllPacked(): Promise<PackedCharacter[]>;
    protected savePacked(packed: PackedCharacter): Promise<void>;
    protected deletePacked(id: string): Promise<void>;
}
