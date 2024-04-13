import {EquipmentSetStoreModel} from "../../../view/model/EquipmentSetStoreModel.tsx";
import {EquipmentSetModel} from "../../../view/model/EquipmentSetModel.ts";
import {EquipmentSetStore} from "../EquipmentSetStore.ts";
import {EquipmentSetBridge} from "./EquipmentBridge.ts";

export class EquipmentSetStoreBridge extends EquipmentSetStoreModel {
  constructor(private readonly equipmentSetStore: EquipmentSetStore) {
    super();
  }

  async create(name: string): Promise<EquipmentSetModel> {
    return new EquipmentSetBridge(await this.equipmentSetStore.create(name));
  }

  delete(id: string): Promise<void> {
    return this.equipmentSetStore.delete(id);
  }

  async list(): Promise<EquipmentSetModel[]> {
    return (await this.equipmentSetStore.list())
      .map(data => new EquipmentSetBridge(data));
  }

  async load(id: string): Promise<EquipmentSetModel | undefined> {
    const data = await this.equipmentSetStore.load(id);
    if (!data) return undefined;
    return new EquipmentSetBridge(data);
  }

  async save(model: EquipmentSetModel): Promise<void> {
    await this.equipmentSetStore.save((model as EquipmentSetBridge).equipmentSet);
  }

}