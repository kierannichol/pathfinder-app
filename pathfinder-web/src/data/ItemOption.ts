import Description from "@/data/Description.ts";
import {AttackModification} from "@/data/AttackModification.ts";

export class ItemOptionSummary {
  constructor(public readonly id: number,
              public readonly name: string,
              public readonly baseNamePrefix: string,
              public readonly baseNamePostfix: string,
              public readonly pointCost: number,
              public readonly currencyCost: number,
              public readonly currencyCostByWeight: number,
              public readonly tags: number[]) {
  }
}

export class ItemOption extends ItemOptionSummary {
  constructor(id: number,
              name: string,
              baseNamePrefix: string,
              baseNamePostfix: string,
              pointCost: number,
              currencyCost: number,
              currencyCostByWeight: number,
              tags: number[],
              public readonly description: Description,
              public readonly attackMod: AttackModification|undefined,
              public readonly stats: {[key:string]: number}) {
    super(id, name, baseNamePrefix, baseNamePostfix, pointCost, currencyCost, currencyCostByWeight, tags);
  }
}