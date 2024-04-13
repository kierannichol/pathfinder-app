import Description from "../Description";

export class Item {
  constructor(public readonly itemId: number,
              public readonly sourceId: number,
              public readonly name: string,
              public readonly cost: number,
              public readonly weight: number,
              public readonly tags: string[],
              public readonly optionSetIds: number[],
              public readonly description: Description) {
  }
}

export class ItemOption {
  constructor(public readonly id: number,
              public readonly name: string,
              public readonly baseNamePrefix: string,
              public readonly baseNamePostfix: string,
              public readonly pointCost: number,
              public readonly currencyCost: number,
              public readonly currencyCostByWeight: number,
              public readonly tags: number[],
              public readonly uniquenessTag: number) {
  }
}

export class ItemOptionSet {

  constructor(public readonly id: number,
              public readonly hasPoints: boolean,
              public readonly hasMaxPoints: boolean,
              public readonly maxPoints: number,
              public readonly pointCurrencyCosts: {[points:number]:number},
              public readonly optionTags: number[]) {
  }
}