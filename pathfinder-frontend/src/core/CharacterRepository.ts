import {v4 as uuidv4} from 'uuid';
import {getActiveUser} from "../app/auth";
import {FirebaseRepository} from "../app/firebase";
import Character from "./Character";
import {BasePlayerTemplate, InitialState} from "./CharacterInitialState";
import {IDataHub} from "./DataHub";

type CharacterListChangeListener = () => void;

export default class CharacterRepository {
  private characterListChangedListeners: CharacterListChangeListener[] = []
  private cache?: {[id: string]: Character} = undefined;

  public constructor(private readonly datahub: IDataHub) {
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
    // const characterList = await Promise.all(packedList.map(async packed => {
    //   const character = new Character(packed.id,
    //       {},
    //       InitialState,
    //       BasePlayerTemplate,
    //       await BasePlayerTemplate.resolve(this.datahub, {}),
    //       this.datahub);
    //   return character.unpack(packed.choices);

    const characterList = await Promise.all(packedList.map(async packed =>
        Character.create(packed.id, this.datahub, InitialState, BasePlayerTemplate, packed.choices)));

    this.cache = Object.fromEntries(characterList.map(character => [ character.id, character ]));
    return characterList;
  }

  public async create(id: string|undefined = undefined): Promise<Character> {
    // const characters = await this.list()
    // const nextId = characters.length == 0 ? 1 : characters
    //     .map(character => parseInt(character.id))
    //     .reduce((a, b) => Math.max(a, b)) + 1;

    const nextId = id ? id : uuidv4();

    // const created = new Character(`${nextId}`,
    //     {},
    //     InitialState,
    //     await BasePlayerTemplate.resolve(this.datahub, {}),
    //     this.datahub);
    const created = await Character.create(nextId, this.datahub, InitialState, BasePlayerTemplate);

    await this.save(created);
    this.cache = undefined;
    this.characterListChangedListeners.forEach(action => action())
    return created;
  }

  public async load(id: string): Promise<Character | undefined> {
    // const character = new Character(id,
    //     {},
    //     InitialState,
    //     await BasePlayerTemplate.resolve(this.datahub, {}),
    //     this.datahub);
    const user = getActiveUser();
    if (!user) {
      return this.create(id);
    }
    const packed = await FirebaseRepository.load(user.id, id);
    if (packed === undefined) {
      return this.create(id);
    }
    const unpacked = await Character.create(id, this.datahub, InitialState, BasePlayerTemplate, packed.choices)
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
    // FirebaseRepository.save(user.id, packed)
    //   .catch(error => console.error(error));
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