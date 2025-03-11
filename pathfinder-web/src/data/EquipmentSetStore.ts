import {getActiveUser} from "@/app/auth.tsx";
import {timedAsync} from "@/app/pfutils.ts";
import {FirebaseRepository} from "@/app/firebase.ts";
import {ItemDatabase} from "./Database.ts";
import PackedEquipmentSet, {EquipmentSet} from "./Equipment.ts";

export abstract class EquipmentSetStore {

  protected constructor(private readonly database: ItemDatabase) {
  }

  async list(): Promise<EquipmentSet[]> {
    const packedList = await this.loadAllPacked();
    return await Promise.all(packedList.map(packed =>
        EquipmentSet.unpack(this.database, packed)));
  }

  async load(id: string): Promise<EquipmentSet|undefined> {
    const packed = await this.loadPacked(id);
    if (!packed) return;
    return await this.unpack(packed);
  }

  async save(equipmentSet: EquipmentSet) {
    const packed = equipmentSet.pack();
    return this.savePacked(packed);
  }

  async create(name: string): Promise<EquipmentSet> {
    let newEquipmentSet = EquipmentSet.create(name, this.database);
    await this.save(newEquipmentSet);
    return newEquipmentSet;
  }

  async delete(id: string): Promise<void> {
    await this.deletePacked(id);
  }

  private async unpack(packed: PackedEquipmentSet): Promise<EquipmentSet> {
    return EquipmentSet.unpack(this.database, packed);
  }

  protected abstract loadAllPacked(): Promise<PackedEquipmentSet[]>;
  protected abstract loadPacked(id: string): Promise<PackedEquipmentSet|undefined>;
  protected abstract savePacked(packed: PackedEquipmentSet): Promise<void>;
  protected abstract deletePacked(id: string): Promise<void>;
}

export class FirebaseEquipmentSetStore extends EquipmentSetStore {

  constructor(database: ItemDatabase) {
    super(database);
  }

  async loadPacked(id: string): Promise<PackedEquipmentSet|undefined> {
    const user = getActiveUser();
    if (!user) {
      console.warn("Unable to access Firebase: no user logged in");
      return;
    }

    const data = await timedAsync(() => FirebaseRepository.load(user.id, 'equipment', id), 'Loading from Firebase') as any;
    if (!data) {
      console.warn("No Equipment Set found for: " + id);
      return;
    }

    return {
      id: data.id,
      name: data.name,
      budget: data.budget,
      priceLimit: data.priceLimit,
      equipment: data.equipment,
      attackSettings: data.attackSettings
    };
  }

  protected async loadAllPacked(): Promise<PackedEquipmentSet[]> {
    const user = getActiveUser();
    if (!user) {
      console.warn("Unable to access Firebase: no user logged in");
      return [];
    }

    const loaded = await FirebaseRepository.loadAll(user.id, 'equipment') ?? [];

    return loaded
      .map((data: any) => {
      return {
        id: data.id,
        name: data.name,
        budget: data.budget,
        priceLimit: data.priceLimit,
        equipment: data.equipment,
        attackSettings: data.attackSettings
      }
    });
  }

  protected async savePacked(packed: PackedEquipmentSet): Promise<void> {
    const user = getActiveUser();
    if (!user) {
      console.warn("Unable to access Firebase: no user logged in");
      return;
    }

    await FirebaseRepository.save(user.id, 'equipment', packed.id, packed);
  }

  protected async deletePacked(id: string): Promise<void> {
    const user = getActiveUser();
    if (!user) {
      console.warn("Unable to access Firebase: no user logged in");
      return;
    }

    await FirebaseRepository.delete(user.id, 'equipment', id);
  }


}