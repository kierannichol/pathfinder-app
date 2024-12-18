import { ItemDatabase } from "./Database.ts";
import { ItemSummary } from "./ItemSummary.ts";
import { ItemOptionSummary } from "./ItemOption.ts";
export default interface PackedEquipmentSet {
    id: string;
    name: string;
    budget: number | null;
    priceLimit: number | null;
    equipment: PackedEquipment[];
}
export type PackedEquipment = number[];
export declare class EquipmentSet {
    readonly id: string;
    name: string;
    budget: number | undefined;
    priceLimit: number | undefined;
    equipment: Equipment[];
    private readonly itemDatabase;
    static unpack(itemDb: ItemDatabase, packed: PackedEquipmentSet): EquipmentSet;
    pack(): PackedEquipmentSet;
    constructor(id: string, name: string, budget: number | undefined, priceLimit: number | undefined, equipment: Equipment[], itemDatabase: ItemDatabase);
    static create(name: string, itemDatabase: ItemDatabase): EquipmentSet;
    setBudget(value: number | undefined): EquipmentSet;
    setPriceLimit(value: number | undefined): EquipmentSet;
    setEquipment(equipment: Equipment[]): EquipmentSet;
    add(itemId: number, optionIds: number[]): EquipmentSet;
}
export declare class Equipment {
    readonly uid: string;
    readonly name: string;
    readonly cost: number;
    readonly weight: number;
    readonly item: ItemSummary;
    readonly options: ItemOptionSummary[];
    readonly included: boolean;
    readonly quantity: number;
    static unpack(itemDb: ItemDatabase, packed: PackedEquipment): Equipment;
    static create(item: ItemSummary, included: boolean, options: ItemOptionSummary[], itemDb: ItemDatabase, quantity?: number): Equipment;
    pack(): PackedEquipment;
    constructor(uid: string, name: string, cost: number, weight: number, item: ItemSummary, options: ItemOptionSummary[], included: boolean, quantity?: number);
    get totalCost(): number;
    include(include: boolean): Equipment;
    changeQuantity(quantity: number): Equipment;
    duplicate(): Equipment;
}
