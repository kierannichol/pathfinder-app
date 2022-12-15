import {getActiveUser} from "../../app/auth";
import {FirebaseRepository} from "../../app/firebase";
import Character from "./Character";
import {InitialChoices, InitialState} from "./CharacterInitialState";
import DataHub from "./DataHub";

type CharacterListChangeListener = () => void;

export default class CharacterRepository {
  private characterListChangedListeners: CharacterListChangeListener[] = []
  private cache?: {[id: string]: Character} = undefined;

  public constructor(private readonly datahub: DataHub) {
  }

  public onCharacterListChanged(action: () => void) {
    this.characterListChangedListeners.push(action)
  }

  public async list(): Promise<Character[]> {
    if (this.cache !== undefined) {
      return Object.values(this.cache);
    }

    const user = getActiveUser();
    if (!user) {
      return [];
    }
    const packedList = await FirebaseRepository.loadAll(user.id) ?? [];
    const characterList = await Promise.all(packedList.map(packed => {
      const character = new Character(packed.id, InitialState, InitialChoices, this.datahub);
      return character.unpack(packed.choices);
    }));

    this.cache = Object.fromEntries(characterList.map(character => [ character.id, character ]));
    return characterList;
  }

  public async create(): Promise<Character> {
    const characters = await this.list()
    const nextId = characters.length == 0 ? 1 : characters
        .map(character => parseInt(character.id))
        .reduce((a, b) => Math.max(a, b)) + 1;
    const created = new Character(`${nextId}`, InitialState, InitialChoices, this.datahub);
    await this.save(created);
    this.cache = undefined;
    this.characterListChangedListeners.forEach(action => action())
    return created;
  }

  public async load(id: string): Promise<Character | undefined> {
    const character = new Character(id, InitialState, InitialChoices, this.datahub);
    const user = getActiveUser();
    if (!user) {
      return character;
    }
    const packed = await FirebaseRepository.load(user.id, id);
    if (packed === undefined) {
      return character;
    }
    const unpacked = await character.unpack(packed.choices);
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
    return FirebaseRepository.save(user.id, packed);
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
    this.characterListChangedListeners.forEach(action => action())
  }
}