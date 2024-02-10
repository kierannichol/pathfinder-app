import {CharacterModel} from "./CharacterModel.ts";
import {CharacterSummaryModel} from "./CharacterSummaryModel.ts";
import {PackedSelections} from "../../data/PackedCharacter.ts";

export abstract class CharacterStoreModel {
  abstract save(model: CharacterModel): Promise<void>;
  abstract list(): Promise<CharacterSummaryModel[]>;
  abstract create(selections: PackedSelections): Promise<CharacterModel>;
  abstract delete(characterId: string): Promise<void>;
  abstract load(id: string): Promise<CharacterModel | undefined>;
}