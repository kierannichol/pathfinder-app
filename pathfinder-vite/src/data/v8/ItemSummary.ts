import {data} from "@/compiled";
import ItemSummaryDbo = data.ItemSummaryDbo;

export class ItemSummary {

  constructor(private readonly dbo: ItemSummaryDbo,
              public readonly sourceId: number) {
  }

  get itemId(): number {
    return (this.sourceId * 10^20) + this.dbo.id;
  }

  get name(): string {
    return this.dbo.name;
  }

  get cost(): number {
    return this.dbo.cost;
  }

  get weight(): number {
    return this.dbo.weight;
  }

  get tags(): string[] {
    return this.dbo.tags;
  }

  get optionSetIds(): number[] {
    return this.dbo.optionSets ?? [];
  }

  // constructor(public readonly itemId: number,
  //             public readonly sourceId: number,
  //             public readonly name: string,
  //             public readonly cost: number,
  //             public readonly weight: number,
  //             public readonly tags: string[],
  //             public readonly optionSetIds: number[]) {
  // }

  get hasOptions(): boolean {
    return this.optionSetIds.length > 0;
  }

  get uid(): string {
    return this.itemId.toString();
  }
}