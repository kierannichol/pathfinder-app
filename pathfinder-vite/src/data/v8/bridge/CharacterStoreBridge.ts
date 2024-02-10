import {CharacterStoreModel} from "../../../view/model/CharacterStoreModel.tsx";
import {PackedSelections} from "../../PackedCharacter.ts";
import {CharacterModel} from "../../../view/model/CharacterModel.ts";
import {CharacterSummaryModel} from "../../../view/model/CharacterSummaryModel.ts";
import CharacterStore from "../CharacterStore.ts";
import {CharacterSummaryBridge} from "./CharacterSummaryBridge.ts";
import {CharacterBridge} from "./CharacterBridge.ts";

export class CharacterStoreBridge extends CharacterStoreModel {

  constructor(private readonly characterStore: CharacterStore) {
    super();
  }

  async create(selections: PackedSelections): Promise<CharacterModel> {
    return new CharacterBridge(await this.characterStore.create(selections));
  }

  delete(characterId: string): Promise<void> {
    return this.characterStore.delete(characterId);
  }

  async list(): Promise<CharacterSummaryModel[]> {
    const data = await this.characterStore.list();
    return data.map(d => new CharacterSummaryBridge(d));
  }

  async load(id: string): Promise<CharacterModel | undefined> {
    const loaded = await this.characterStore.load(id);
    return loaded !== undefined ? new CharacterBridge(loaded) : undefined;
  }

  save(model: CharacterModel): Promise<void> {
    return this.characterStore.save((model as CharacterBridge).data);
  }

}