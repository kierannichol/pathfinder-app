import Description from "@/data/Description.ts";
import {AttackModification} from "@/data/AttackModification.ts";
import {Effect} from "@/data/Effect.ts";
import {Attack} from "@/data/Attack.ts";

export class Item {
  constructor(public readonly itemId: number,
              public readonly sourceId: number,
              public readonly name: string,
              public readonly cost: number,
              public readonly weight: number,
              public readonly tags: string[],
              public readonly optionSetIds: number[],
              public readonly description: Description,
              public readonly actions: string[],
              public readonly stats:{[key: string]: number},
              public readonly effects: Effect[],
              public readonly attackMod: AttackModification|undefined,
              public readonly attacks: Attack[]) {
  }

  get hasOptions(): boolean {
    return this.optionSetIds.length > 0;
  }

  get uid(): string {
    return this.itemId.toString();
  }
}

