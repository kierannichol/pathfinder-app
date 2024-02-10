import {CharacterModel} from "../../../view/model/CharacterModel.ts";
import {CharacterAtLevelModel} from "../../../view/model/CharacterAtLevelModel.ts";
import Character from "../Character.ts";
import {PackedSelections} from "../../PackedCharacter.ts";
import {CharacterAtLevelBridge} from "./CharacterAtLevelBridge.ts";

export class CharacterBridge extends CharacterModel {

  constructor(public readonly data: Character) {
    super();
  }

  get id(): string {
    return this.data.id;
  }

  atLevel(levelNumber: number): CharacterAtLevelModel {
    return new CharacterAtLevelBridge(this.data.atLevel(levelNumber));
  }

  async selectAll(selections: PackedSelections): Promise<CharacterModel> {
    return new CharacterBridge(await this.data.selectAll(selections));
  }

  selected(path: string): string | undefined {
    return this.data.selected(path);
  }

}