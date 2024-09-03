import PackedCharacter, {PackedSelections} from "../PackedCharacter.ts";
import {FirebaseRepository} from "../../app/firebase.ts";
import {getActiveUser} from "../../app/auth.tsx";
import Character from "./Character.ts";
import Database from "./Database.ts";
import {timedAsync} from "../../app/pfutils.ts";
import CharacterSummary from "./CharacterSummary.ts";
import {v4 as uuidv4} from 'uuid';
import {CharacterTemplate} from "./CharacterTemplate.ts";

export default abstract class CharacterStore {

  protected constructor(private readonly template: CharacterTemplate,
                        private readonly database: Database) {
  }

  async list(): Promise<CharacterSummary[]> {
    const packedList = await this.loadAllPacked();
    return await Promise.all(packedList.map(packed =>
        new CharacterSummary(packed.id,
            packed.selections['character_name'] as string,
            packed.selections['favored_class'] as string)));
  }

  async load(id: string): Promise<Character|undefined> {
    const packed = await this.loadPacked(id);
    if (!packed) return;
    return await this.unpack(packed);
  }

  async save(character: Character) {
    const packed = character.pack();
    return this.savePacked(packed);
  }

  async create(selections: PackedSelections): Promise<Character> {
    const id = uuidv4();
    let newCharacter = Character.create(id, this.template, this.database);
    newCharacter = await newCharacter.selectAll(selections);
    console.log(newCharacter);
    await this.save(newCharacter);
    return newCharacter;
  }

  async delete(id: string): Promise<void> {
    await this.deletePacked(id);
  }

  private async unpack(packed: PackedCharacter): Promise<Character> {
    const character = Character.create(packed.id, this.template, this.database);
    return await character.selectAll(packed.selections);
  }

  protected abstract loadAllPacked(): Promise<PackedCharacter[]>;
  protected abstract loadPacked(id: string): Promise<PackedCharacter|undefined>;
  protected abstract savePacked(packed: PackedCharacter): Promise<void>;
  protected abstract deletePacked(id: string): Promise<void>;
}

export class FirebaseCharacterStore extends CharacterStore {

  constructor(template: CharacterTemplate, database: Database) {
    super(template, database);
  }

  async loadPacked(id: string): Promise<PackedCharacter|undefined> {
    const user = getActiveUser();
    if (!user) {
      console.warn("Unable to access Firebase: no user logged in");
      return;
    }

    const data = await timedAsync(() => FirebaseRepository.load(user.id, 'character', id), 'Loading from Firebase') as any;
    if (!data) {
      console.warn("No character found for: " + id);
      return;
    }

    return {
      id: data.id,
      selections: data.selections ?? data.choices
    };
  }

  protected async loadAllPacked(): Promise<PackedCharacter[]> {
    const user = getActiveUser();
    if (!user) {
      console.warn("Unable to access Firebase: no user logged in");
      return [];
    }

    const loaded = await FirebaseRepository.loadAll(user.id, 'character') ?? [];

    return loaded
        .map((data: any) => {
          return {
            id: data.id,
            selections: data.selections ?? data.choices
          }
        });
  }

  protected async savePacked(packed: PackedCharacter): Promise<void> {
    const user = getActiveUser();
    if (!user) {
      console.warn("Unable to access Firebase: no user logged in");
      return;
    }

    await FirebaseRepository.save(user.id, 'character', packed.id, packed);
  }

  protected async deletePacked(id: string): Promise<void> {
    const user = getActiveUser();
    if (!user) {
      console.warn("Unable to access Firebase: no user logged in");
      return;
    }

    await FirebaseRepository.delete(user.id, 'character', id);
  }


}



