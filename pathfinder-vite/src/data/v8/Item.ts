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

