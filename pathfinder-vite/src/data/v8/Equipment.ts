import {ItemDatabase} from "./Database.ts";
import {ItemSummary} from "./ItemSummary.ts";
import {v4 as uuidv4} from "uuid";
import {matchTags} from "@/utils/tags.ts";
import {ItemOption, ItemOptionSummary} from "./ItemOption.ts";

export default interface PackedEquipmentSet {
  id: string;
  name: string;
  budget: number|null;
  equipment: PackedEquipment[];
}

export type PackedEquipment = number[];

export class EquipmentSet {
  static unpack(itemDb: ItemDatabase, packed: PackedEquipmentSet): EquipmentSet {
    return new EquipmentSet(
        packed.id,
        packed.name,
        packed.budget ?? undefined,
        packed.equipment?.map(data => Equipment.unpack(itemDb, data)) ?? [],
        itemDb);
  }

  pack(): PackedEquipmentSet {
    return {
      id: this.id,
      name: this.name,
      budget: this.budget ?? null,
      equipment: this.equipment.map(e => e.pack())
    }
  }

  constructor(public readonly id: string,
              public name: string,
              public budget: number|undefined,
              public equipment: Equipment[],
              private readonly itemDatabase: ItemDatabase) {
  }

  static create(name: string, itemDatabase: ItemDatabase) {
    return new EquipmentSet(uuidv4(), name, undefined, [], itemDatabase);
  }

  setBudget(value: number | undefined) {
    return new EquipmentSet(this.id, this.name, value, this.equipment, this.itemDatabase);
  }

  setEquipment(equipment: Equipment[]) {
    return new EquipmentSet(this.id, this.name, this.budget, equipment, this.itemDatabase);
  }

  add(itemId: number, optionIds: number[]) {
    const item = this.itemDatabase.summary(itemId);
    const options = this.itemDatabase.options(optionIds);
    if (!item) {
      console.error("No item found with ID #" + itemId);
      return this;
    }
    return this.setEquipment([...this.equipment, Equipment.create(item, true, options, this.itemDatabase)]);
  }
}

export class Equipment {
  static unpack(itemDb: ItemDatabase, packed: PackedEquipment): Equipment {
    const [ id, included, quantity, ...optionIds ]: number[] = packed;
    const item = itemDb.summary(id);
    if (!item) throw new Error("Unknown item ID: " + id);

    const options = optionIds
      .map(oid => itemDb.option(oid))
      .filter(opt => opt !== undefined) as ItemOption[];

    return Equipment.create(item, included === 1, options, itemDb);
  }

  static create(item: ItemSummary,
                included: boolean,
                options: ItemOptionSummary[],
                itemDb: ItemDatabase): Equipment {
    let name = item.name;
    for (let option of options) {
      if (option.baseNamePrefix.length > 0)
        name = option.baseNamePrefix + ' ' + name;
      if (option.baseNamePostfix.length > 0)
        name = name + ' ' + option.baseNamePostfix;
    }

    let cost = item.cost;
    for (let option of options) {
      cost += option.currencyCost;
      // cost += option.currencyCostByWeight * item.weight;
    }

      for (let optionSetId of item.optionSetIds) {
        const optionSet = itemDb.optionSet(optionSetId);
        if (!optionSet) continue;

        let points = 0;
        for (let option of options) {
          for (let optionGroup of optionSet.optionGroups) {
            if (matchTags(optionGroup.optionTags, option.tags)) {
              points += option.pointCost;
              break;
            }
          }
        }

        if (points > 0) {
          cost += optionSet?.pointCurrencyCosts[points] ?? 0;
        }

      }
      // const optionSet = itemDb.optionSet(item.optionSetId);
      // cost += optionSet?.pointCurrencyCosts[points] ?? 0;

    return new Equipment(uuidv4(), name, cost, item.weight, item, options, included);
  }

  pack(): PackedEquipment {
    return [ this.item.itemId,
              this.included ? 1 : 0,
              this.quantity,
              ...this.options.map(o => o.id)]
  }

  constructor(public readonly uid: string,
              public readonly name: string,
              public readonly cost: number,
              public readonly weight: number,
              public readonly item: ItemSummary,
              public readonly options: ItemOptionSummary[],
              public readonly included: boolean,
              public readonly quantity: number = 1) {
  }

  include(include: boolean): Equipment {
    return new Equipment(this.uid, this.name, this.cost, this.weight, this.item, this.options, include);
  }

  duplicate() {
    return new Equipment(uuidv4(), this.name, this.cost, this.weight, this.item, this.options, this.included);
  }
}