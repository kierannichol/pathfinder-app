import {CharacterAtLevelModel} from "./CharacterAtLevelModel.ts";
import {PackedSelections} from "../../data/PackedCharacter.ts";

export type CharacterChoiceSelections = { [path: string]: string };

export abstract class CharacterModel {
  abstract id: string;
  abstract atLevel(levelNumber: number): CharacterAtLevelModel;
  abstract selected(path: string): string|undefined;
  abstract selectAll(selections: PackedSelections): Promise<CharacterModel>;
}