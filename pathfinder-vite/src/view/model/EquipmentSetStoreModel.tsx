import {EquipmentSetModel} from "./EquipmentSetModel.ts";

export abstract class EquipmentSetStoreModel {
  abstract save(model: EquipmentSetModel): Promise<void>;
  abstract list(): Promise<EquipmentSetModel[]>;
  abstract create(name: string): Promise<EquipmentSetModel>;
  abstract delete(id: string): Promise<void>;
  abstract load(id: string): Promise<EquipmentSetModel | undefined>;
}