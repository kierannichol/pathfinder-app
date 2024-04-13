import {EquipmentSetModel} from "../../../view/model/EquipmentSetModel.ts";
import {EquipmentModel} from "../../../view/model/EquipmentModel.ts";
import {Equipment, EquipmentSet} from "../Equipment.ts";
import {ItemOptionModel, ItemSummaryModel} from "../../../view/model/ItemModel.ts";
import {ItemOptionBridge, ItemSummaryBridge} from "./ItemBridge.ts";

export class EquipmentSetBridge extends EquipmentSetModel {

  constructor(public readonly equipmentSet: EquipmentSet) {
    super();
  }

  id: string = this.equipmentSet.id;

  get name(): string {
    return this.equipmentSet.name;
  }

  set name(value: string) {
    this.equipmentSet.name = value;
  }

  get equipment(): EquipmentModel[] {
    return this.equipmentSet.equipment
      .map(e => new EquipmentBridge(e));
  }

  add(item: ItemSummaryModel, options: ItemOptionModel[] = [], index: number|undefined = undefined): EquipmentSetModel {
    const modified = this.equipmentSet.add(item.itemId, options.map(o => o.id), index);
    return new EquipmentSetBridge(modified);
  }

  remove(uid: string): EquipmentSetModel {
    const modified = this.equipmentSet.remove(uid);
    return new EquipmentSetBridge(modified);
  }

  move(sourceIndex: number, destinationIndex: number): EquipmentSetModel {
    const modified = this.equipmentSet.move(sourceIndex, destinationIndex);
    return new EquipmentSetBridge(modified);
  }

  modify(uid: string, modifyFn: (eq: EquipmentModel) => EquipmentModel): EquipmentSetModel {
    const modified = this.equipmentSet.modify(uid, deq =>
        (modifyFn(new EquipmentBridge(deq)) as EquipmentBridge).equipment);
    return new EquipmentSetBridge(modified);
  }

  replace(uid: string, item: ItemSummaryModel, options?: ItemOptionModel[] | undefined): EquipmentSetModel {
    const index = this.equipmentSet.equipment.findIndex(value => value.uid === uid);
    const lastIndex = this.equipmentSet.equipment.length - 1;
    return this
        .remove(uid)
        .add(item, options)
        .move(lastIndex, index);
  }
}

export class EquipmentBridge extends EquipmentModel {
  constructor(public readonly equipment: Equipment) {
    super();
  }

  uid: string = this.equipment.uid;
  name: string = this.equipment.name;
  cost: number = this.equipment.cost;
  weight: number = this.equipment.weight;
  included: boolean = this.equipment.included;

  include(include: boolean): EquipmentModel {
    return new EquipmentBridge(this.equipment.include(include));
  }

  readonly item: ItemSummaryModel = new ItemSummaryBridge(this.equipment.item);
  readonly options: ItemOptionModel[] = this.equipment.options.map(o => new ItemOptionBridge(o));
}