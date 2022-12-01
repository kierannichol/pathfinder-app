import {List} from "immutable";
import {getActiveUser} from "../../app/auth";
import {FirebaseRepository} from "../../app/firebase";
import CharacterState from "../../database/CharacterState";
import {CharacterClassDatabase} from "../../database/v2/ClassDatabase";
import {RaceDatabase} from "../../database/v2/RaceDatabase";
import {Character} from "./Character";
import CharacterAlignmentChoice, {CharacterAlignmentChoiceProcessor} from "./choices/CharacterAlignmentChoice";
import CharacterBaseAttributeChoice, {
  CharacterBaseAttributeChoiceProcessor
} from "./choices/CharacterBaseAttributeChoice";
import CharacterChoice from "./choices/CharacterChoice";
import CharacterChoiceProcessorCollection from "./choices/CharacterChoiceProcessorCollection";
import CharacterClassChoice, {CharacterClassChoiceProcessor} from "./choices/CharacterClassChoice";
import CharacterNameChoice, {CharacterNameChoiceProcessor} from "./choices/CharacterNameChoice";
import CharacterRaceChoice, {CharacterRaceChoiceProcessor} from "./choices/CharacterRaceChoice";
import {FeatChoiceProcessor} from "./choices/FeatChoice";
import {MercyChoiceProcessor} from "./choices/MercyChoice";
import {RaceAbilityScoreIncreaseChoiceProcessor} from "./choices/RaceAbilityScoreIncreaseChoice";
import {RagePowerChoiceProcessor} from "./choices/RagePowerChoice";
import {RogueTalentChoiceProcessor} from "./choices/RogueTalentChoice";
import {SkillPointChoiceProcessor} from "./choices/SkillPointChoice";

const initialChoices: CharacterChoice[] = [
    new CharacterNameChoice(),
    new CharacterAlignmentChoice(),
    new CharacterClassChoice(),
    new CharacterRaceChoice(),
    ...CharacterState.Abilities.map(ability =>
        new CharacterBaseAttributeChoice(`level0:${ability}_base`, `${ability}:base`, '10')),
];

class CharacterRepository {
  private readonly processors: CharacterChoiceProcessorCollection
  private characterListChangedListeners: (() => void)[] = []
  private cache?: {[id: string]: Character} = undefined;

  public constructor(classDatabase: CharacterClassDatabase, raceDatabase: RaceDatabase) {
    this.processors = new CharacterChoiceProcessorCollection([
        new CharacterNameChoiceProcessor(),
        new CharacterAlignmentChoiceProcessor(),
        new CharacterClassChoiceProcessor(classDatabase),
        new CharacterRaceChoiceProcessor(raceDatabase),
        new CharacterBaseAttributeChoiceProcessor(),
        new RaceAbilityScoreIncreaseChoiceProcessor(),
        new FeatChoiceProcessor(),
        new MercyChoiceProcessor(),
        new RagePowerChoiceProcessor(),
        new RogueTalentChoiceProcessor(),
        new SkillPointChoiceProcessor(),
    ]);
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
      const character = new Character(packed.id, List(initialChoices), this.processors);
      return character.unpack(packed);
    }));

    this.cache = Object.fromEntries(characterList.map(character => [ character.id, character ]));
    return characterList;
  }

  public async create(): Promise<Character> {
    const characters = await this.list()
    const nextId = characters
        .map(character => parseInt(character.id))
        .reduce((a, b) => Math.max(a, b)) + 1;
    const created = new Character(`${nextId}`, List(initialChoices), this.processors);
    await this.save(created);
    this.cache = undefined;
    this.characterListChangedListeners.forEach(action => action())
    return created;
  }

  public async load(id: string): Promise<Character | undefined> {
    const character = new Character(id, List(initialChoices), this.processors);
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

export default CharacterRepository;