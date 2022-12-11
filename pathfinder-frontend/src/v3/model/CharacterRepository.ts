import {getActiveUser} from "../../app/auth";
import {FirebaseRepository} from "../../app/firebase";
import Character from "./Character";
import {CharacterState} from "./CharacterState";
import Choice from "./Choice";
import DataHub from "./DataHub";
import Reference from "./Reference";

type CharacterListChangeListener = () => void;

export const InitialState: CharacterState = {
  'character_name': '',
  'race': '',
  'class_1': '',

  'fort_save': '{sum(@fort:*) + @con_mod}',
  'ref_save': '{sum(@ref:*) + @dex_mod}',
  'will_save': '{sum(@will:*) + @wis_mod}',

  'initiative': '{@dex_mod + @initiative:misc}',

  'ac': '{10 + @ac:armor + @ac:shield + @dex_mod + @ac:size + @ac:natural + @ac:deflection + @ac:misc}',
  'ac:touch': '{10 + @dex_mod + @ac:misc}',
  'ac:size': '{2^abs(5-@size)-1}',
  'ac:flat': '{@ac - @dex_mod}',

  'cmb': '{@bab + @str_mod + @size_mod}',
  'cmd': '{@bab + @str_mod + @dex_mod + @size_mod + 10}',

  ...['str', 'dex', 'con', 'int', 'wis', 'cha'].reduce((state, ability) => ({
    ...state,
    [`${ability}:base`]: 10,
    [`${ability}_score`]: `{sum(@${ability}:*)}`,
    [`${ability}_mod`]: `{floor(@${ability}_score / 2) - 5}`
  }), {})
};

export const InitialChoices: Choice[] = [
  Choice.textChoice('name', 'Name', 0, 'character_name'),
  Choice.selectChoice("race", "Race", 0, [ new Reference('race') ]),
  Choice.selectChoice("class_1", "Class", 0, [ new Reference('class') ]),
];

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
      return character.unpack(packed);
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
    const unpacked = await character.unpack(packed);
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