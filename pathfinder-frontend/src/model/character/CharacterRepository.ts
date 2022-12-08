import {List} from "immutable";
import {getActiveUser} from "../../app/auth";
import {FirebaseRepository} from "../../app/firebase";
import CharacterState from "../../database/CharacterState";
import {PathfinderDatabase} from "../../database/v2/PathfinderDatabase";
import {Character} from "./Character";
import AbilityChoice from "./choices/AbilityChoice";
import CharacterAlignmentChoice, {CharacterAlignmentChoiceProcessor} from "./choices/CharacterAlignmentChoice";
import CharacterBaseAttributeChoice, {
  CharacterBaseAttributeChoiceProcessor
} from "./choices/CharacterBaseAttributeChoice";
import CharacterChoice, {ChoiceType} from "./choices/CharacterChoice";
import CharacterChoiceProcessorCollection from "./choices/CharacterChoiceProcessorCollection";
import CharacterClassChoice, {CharacterClassChoiceProcessor} from "./choices/CharacterClassChoice";
import CharacterNameChoice, {CharacterNameChoiceProcessor} from "./choices/CharacterNameChoice";
import CharacterRaceChoice, {CharacterRaceChoiceProcessor} from "./choices/CharacterRaceChoice";
import {EffectAbilityScoreIncreaseChoiceProcessor} from "./choices/EffectAbilityScoreIncreaseChoice";
import {FeatChoiceProcessor} from "./choices/FeatChoice";
import ModifierChoice from "./choices/ModifierChoice";
import {RaceAbilityScoreIncreaseChoiceProcessor} from "./choices/RaceAbilityScoreIncreaseChoice";
import {SkillPointChoiceProcessor} from "./choices/SkillPointChoice";
import SpellChoice from "./choices/SpellChoice";

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

  public constructor(pathfinderDatabase: PathfinderDatabase) {
    this.processors = new CharacterChoiceProcessorCollection([
        new CharacterNameChoiceProcessor(),
        new CharacterAlignmentChoiceProcessor(),
        new CharacterClassChoiceProcessor(pathfinderDatabase.classDb),
        new CharacterRaceChoiceProcessor(pathfinderDatabase.raceDb),
        new CharacterBaseAttributeChoiceProcessor(),
        new RaceAbilityScoreIncreaseChoiceProcessor(),
        new EffectAbilityScoreIncreaseChoiceProcessor(),
        new FeatChoiceProcessor(),
        new SkillPointChoiceProcessor(),
        AbilityChoice.processor(ChoiceType.ABILITY),
        SpellChoice.processor(ChoiceType.WITCH_HEX),
        ModifierChoice.processor(ChoiceType.SORCERER_BLOODLINE, pathfinderDatabase.sorcererBloodlineDataSource),
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
    const nextId = characters.length == 0 ? 1 : characters
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