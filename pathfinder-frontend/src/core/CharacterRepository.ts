import {v4 as uuidv4} from 'uuid';
import {getActiveUser} from "../app/auth";
import {FirebaseRepository} from "../app/firebase";
import Character from "../v7/Character";
import Database from "../v7/Database";

export default class CharacterRepository {
  private cache?: {[id: string]: Character} = undefined;

  public constructor(private readonly database: Database) {
  }

  public async list(): Promise<Character[]> {
    const user = getActiveUser();
    if (!user) {
      return [];
    }
    const packedList = await FirebaseRepository.loadAll(user.id) || [];
    const characterList = await Promise.all(packedList.map(async packed => {
      const character = Character.create(packed.id, this.database);
      return character.selectAll(packed.choices);
    }));

    this.cache = Object.fromEntries(characterList.map(character => [ character.id, character ]));
    return characterList;
  }

  public async create(id: string|undefined = undefined): Promise<Character> {
    const nextId = id ? id : uuidv4();
    const created = Character.create(nextId, this.database);

    await this.save(created);
    this.cache = undefined;
    return created;
  }

  public async load(id: string): Promise<Character | undefined> {
    if (this.cache && id in this.cache) {
      return this.cache[id];
    }
    const user = getActiveUser();
    if (!user) {
      return this.create(id);
    }
    const packed = await FirebaseRepository.load(user.id, id);
    if (packed === undefined) {
      return this.create(id);
    }
    const unpacked = await Character.create(id, this.database).selectAll(packed.choices);
    if (this.cache === undefined) {
      this.cache = {};
    }
    this.cache[unpacked.id] = unpacked;
    return unpacked;
  }

  public async save(character: Character): Promise<void> {
    const packed = character.pack();
    const user = getActiveUser();
    if (!user) {
      console.error('Unable to save without user logged in');
      return;
    }
    if (this.cache === undefined) {
      this.cache = {};
    }
    this.cache[character.id] = character;

    (async () => {
      await FirebaseRepository.save(user.id, packed);
    })().catch(e => console.log(e));
  }

  public async delete(id: string): Promise<void> {
    const user = getActiveUser();
    if (!user) {
      console.error('Unable to save without user logged in');
      return;
    }
    await FirebaseRepository.delete(user.id, id);
    if (this.cache !== undefined) {
      delete this.cache[id];
    }
  }
}