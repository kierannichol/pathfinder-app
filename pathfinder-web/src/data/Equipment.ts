import {ItemDatabase} from "./Database.ts";
import {v4 as uuidv4} from "uuid";
import {ItemOption} from "./ItemOption.ts";
import {matchTags} from "@pathfinder-lib/utils/tags"
import {Item} from "@/data/Item.ts";
import {AttackTarget} from "@/components/simulation/attack/AttackTarget.ts";

export default interface PackedEquipmentSet {
  id: string;
  name: string;
  budget: number | null;
  priceLimit: number | null;
  equipment: PackedEquipment[];
  attackSettings: PackedAttackSettings;
}

export interface PackedAttackSettings {
  mainHand: string;
  offHand: string;
  powerAttack: boolean;
  sneakAttack: boolean;
  targetAc: number;
}

export type PackedEquipment = [string, ...number[]];

// number[];

export class EquipmentSet {
  static async unpack(itemDb: ItemDatabase, packed: PackedEquipmentSet): Promise<EquipmentSet> {
    try {
      return new EquipmentSet(
          packed.id,
          packed.name,
          packed.budget ?? undefined,
          packed.priceLimit ?? undefined,
          (await Promise.all(packed.equipment?.map(async data => {
            try {
              return Equipment.unpack(itemDb, data)
            } catch (e) {
              console.warn("Failed to load equipment; skipping", e);
              return undefined;
            }
          }))).filter(data => data !== undefined) ?? [],
          AttackSettings.unpack(packed.attackSettings),
          itemDb);
    } catch (error) {
      console.error("Failed to load equipment set", error);
      return EquipmentSet.create(packed.name, itemDb, packed.id);
    }
  }

  pack(): PackedEquipmentSet {
    return {
      id: this.id,
      name: this.name,
      budget: this.budget ?? null,
      priceLimit: this.priceLimit ?? null,
      equipment: this.equipment.map(e => e.pack()),
      attackSettings: this.attackSettings.pack()
    }
  }

  constructor(public readonly id: string,
              public readonly name: string,
              public readonly budget: number | undefined,
              public readonly priceLimit: number | undefined,
              public readonly equipment: Equipment[],
              public readonly attackSettings: AttackSettings,
              private readonly itemDatabase: ItemDatabase) {
  }

  static create(name: string, itemDatabase: ItemDatabase, id?: string | undefined): EquipmentSet {
    return new EquipmentSet(id ?? uuidv4(), name, undefined, undefined, [], AttackSettings.DEFAULT, itemDatabase);
  }

  setName(value: string) {
    return new EquipmentSet(this.id, value, this.budget, this.priceLimit, this.equipment, this.attackSettings, this.itemDatabase);
  }

  setBudget(value: number | undefined): EquipmentSet {
    return new EquipmentSet(this.id, this.name, value, this.priceLimit, this.equipment, this.attackSettings, this.itemDatabase);
  }

  setPriceLimit(value: number | undefined): EquipmentSet {
    return new EquipmentSet(this.id, this.name, this.budget, value, this.equipment, this.attackSettings, this.itemDatabase);
  }

  setEquipment(equipment: Equipment[]): EquipmentSet {
    return new EquipmentSet(this.id, this.name, this.budget, this.priceLimit, equipment, this.attackSettings, this.itemDatabase);
  }

  modifyAttackSettings(modifyFn: (settings: AttackSettings) => AttackSettings): EquipmentSet {
    return new EquipmentSet(this.id, this.name, this.budget, this.priceLimit, this.equipment, modifyFn(this.attackSettings), this.itemDatabase);
  }

  async add(itemId: number, optionIds: number[]): Promise<EquipmentSet> {
    const item = await this.itemDatabase.load(itemId);
    const options = (await Promise.all(optionIds.map(oid => this.itemDatabase.optionDetails(oid))))
    .filter(opt => opt !== undefined) as ItemOption[];
    if (!item) {
      console.error("No item found with ID #" + itemId);
      return this;
    }
    return this.setEquipment([...this.equipment, Equipment.create(item, true, options, this.itemDatabase)]);
  }
}

export class Equipment {
  static async unpack(itemDb: ItemDatabase, packed: PackedEquipment): Promise<Equipment> {
    const [uid, id, included, quantity, ...optionIds]: PackedEquipment = packed;
    const item = await itemDb.load(id);
    if (!item) throw new Error("Unknown item ID: " + id);

    const options = (await Promise.all(optionIds
    .map(oid => itemDb.optionDetails(oid))))
    .filter(opt => opt !== undefined) as ItemOption[];

    return Equipment.create(item, included === 1, options, itemDb, quantity, uid);
  }

  static create(item: Item,
                included: boolean,
                options: ItemOption[],
                itemDb: ItemDatabase,
                quantity: number = 1,
                uid?: string|undefined): Equipment {
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

    const attackMods = [];


    return new Equipment(uid ?? uuidv4(), name, cost, item.weight, item, options, included, quantity);
  }

  pack(): PackedEquipment {
    return [this.uid,
      this.item.itemId,
      this.included ? 1 : 0,
      this.quantity,
      ...this.options.map(o => o.id)]
  }

  constructor(public readonly uid: string,
              public readonly name: string,
              public readonly cost: number,
              public readonly weight: number,
              public readonly item: Item,
              public readonly options: ItemOption[],
              public readonly included: boolean,
              public readonly quantity: number = 1) {
  }

  get totalCost(): number {
    return this.cost * this.quantity;
  }

  include(include: boolean): Equipment {
    return new Equipment(this.uid, this.name, this.cost, this.weight, this.item, this.options, include, this.quantity);
  }

  changeQuantity(quantity: number): Equipment {
    return new Equipment(this.uid, this.name, this.cost, this.weight, this.item, this.options, this.included, quantity);
  }

  duplicate() {
    return new Equipment(uuidv4(), this.name, this.cost, this.weight, this.item, this.options, this.included, this.quantity);
  }
}

interface AttackSettingsState {
  mainHand: string;
  offHand: string;
  powerAttack: boolean;
  sneakAttack: boolean;
  targetAc: number;
}

export class AttackSettings {
  static readonly DEFAULT: AttackSettings = new AttackSettings({
    mainHand: "",
    offHand: "",
    powerAttack: false,
    sneakAttack: false,
    targetAc: 30
  });

  get mainHand(): string {
    return this.state.mainHand;
  }

  get offHand(): string {
    return this.state.offHand;
  }

  get powerAttack(): boolean {
    return this.state.powerAttack;
  }

  get sneakAttack(): boolean {
    return this.state.sneakAttack;
  }

  get targetAc(): number {
    return this.state.targetAc;
  }

  static unpack(packed: PackedAttackSettings | undefined): AttackSettings {
    if (!packed) {
      return AttackSettings.DEFAULT;
    }
    return new AttackSettings({
      mainHand: packed.mainHand ?? AttackSettings.DEFAULT.mainHand,
      offHand: packed.offHand ?? AttackSettings.DEFAULT.offHand,
      powerAttack: packed.powerAttack ?? AttackSettings.DEFAULT.powerAttack,
      sneakAttack: packed.sneakAttack ?? AttackSettings.DEFAULT.sneakAttack,
      targetAc: packed.targetAc ?? AttackSettings.DEFAULT.targetAc
    });
  }

  pack(): PackedAttackSettings {
    return {
      mainHand: this.mainHand ?? AttackSettings.DEFAULT.mainHand,
      offHand: this.offHand ?? AttackSettings.DEFAULT.offHand,
      powerAttack: this.powerAttack ?? AttackSettings.DEFAULT.powerAttack,
      sneakAttack: this.sneakAttack ?? AttackSettings.DEFAULT.sneakAttack,
      targetAc: this.targetAc ?? AttackSettings.DEFAULT.targetAc
    };
  }

  setMainHand(value: string): AttackSettings {
    return new AttackSettings({...this.state, mainHand: value});
  }

  setOffHand(value: string): AttackSettings {
    return new AttackSettings({...this.state, offHand: value});
  }

  setPowerAttack(value: boolean): AttackSettings {
    return new AttackSettings({...this.state, powerAttack: value});
  }

  setSneakAttack(value: boolean): AttackSettings {
    return new AttackSettings({...this.state, sneakAttack: value});
  }

  constructor(private readonly state: AttackSettingsState) {
  }

  setTarget(value: AttackTarget) {
    return new AttackSettings({...this.state,
      targetAc: value.ac});
  }
}