import Description from "../Description.ts";

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
              public readonly description: Description) {
    super(id, name, baseNamePostfix, baseNamePostfix, pointCost, currencyCost, currencyCostByWeight, tags);
  }
}