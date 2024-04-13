import {ItemOptionModel, ItemSummaryModel} from "./ItemModel.ts";

export abstract class EquipmentModel {
  abstract readonly name: string;
  abstract readonly cost: number;
  abstract readonly weight: number;
  abstract readonly uid: string;
  abstract readonly included: boolean;

  abstract readonly item: ItemSummaryModel;
  abstract readonly options: ItemOptionModel[];

  abstract include(include: boolean): EquipmentModel;
}