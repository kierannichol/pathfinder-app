import { ItemDatabase } from "./Database.ts";
import PackedEquipmentSet, { EquipmentSet } from "./Equipment.ts";
export declare abstract class EquipmentSetStore {
    private readonly database;
    protected constructor(database: ItemDatabase);
    list(): Promise<EquipmentSet[]>;
    load(id: string): Promise<EquipmentSet | undefined>;
    save(equipmentSet: EquipmentSet): Promise<void>;
    create(name: string): Promise<EquipmentSet>;
    delete(id: string): Promise<void>;
    private unpack;
    protected abstract loadAllPacked(): Promise<PackedEquipmentSet[]>;
    protected abstract loadPacked(id: string): Promise<PackedEquipmentSet | undefined>;
    protected abstract savePacked(packed: PackedEquipmentSet): Promise<void>;
    protected abstract deletePacked(id: string): Promise<void>;
}
export declare class FirebaseEquipmentSetStore extends EquipmentSetStore {
    constructor(database: ItemDatabase);
    loadPacked(id: string): Promise<PackedEquipmentSet | undefined>;
    protected loadAllPacked(): Promise<PackedEquipmentSet[]>;
    protected savePacked(packed: PackedEquipmentSet): Promise<void>;
    protected deletePacked(id: string): Promise<void>;
}
