import {ItemOptionGroup} from "./ItemOptionGroup.ts";
import {ItemOptionSummary} from "./ItemOption.ts";

export class ItemOptionSet {

  constructor(public readonly id: number,
              public readonly hasPoints: boolean,
              public readonly hasMaxPoints: boolean,
              public readonly maxPoints: number,
              public readonly pointCurrencyCosts: { [points: number]: number },
              public readonly optionGroups: ItemOptionGroup[]) {
  }

  calculatePointsUsed(options: ItemOptionSummary[]): number {
    let points = 0;
    for (const option of options) {
      if (!this.hasOption(option)) continue;
      points += option.pointCost;
    }
    return points;
  }

  hasOption(option: ItemOptionSummary): boolean {
    return this.optionGroups.some(group => group.hasOption(option));
  }
}