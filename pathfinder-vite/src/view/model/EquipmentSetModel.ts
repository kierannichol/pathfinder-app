import {ItemOptionModel, ItemSummaryModel} from "./ItemModel.ts";
import {EquipmentModel} from "./EquipmentModel.ts";

export abstract class EquipmentSetModel {
  abstract readonly id: string;
  abstract name: string;
  abstract equipment: EquipmentModel[];

  abstract add(item: ItemSummaryModel, options?: ItemOptionModel[], index?: number|undefined): EquipmentSetModel;
  abstract replace(uid: string, item: ItemSummaryModel, options?: ItemOptionModel[]): EquipmentSetModel;
  abstract remove(uid: string): EquipmentSetModel;
  abstract move(sourceIndex: number, destinationIndex: number): EquipmentSetModel;
  abstract modify(uid: string, modifyFn: (eq: EquipmentModel) => EquipmentModel): EquipmentSetModel;
}