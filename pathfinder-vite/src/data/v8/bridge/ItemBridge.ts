import {ItemModel, ItemOptionModel, ItemOptionSetModel, ItemSummaryModel} from "../../../view/model/ItemModel.ts";
import {Item, ItemOption, ItemOptionSet} from "../Item.ts";
import Description from "../../Description.ts";
import {ItemSummary} from "../ItemSummary.ts";

export class ItemBridge extends ItemModel {
  constructor(private readonly data: Item) {
    super();
  }

  cost: number = this.data.cost;
  description: Description = this.data.description;
  itemId: number = this.data.itemId;
  sourceId: number = this.data.sourceId;
  name: string = this.data.name;
  tags: string[] = this.data.tags;
  optionSetIds: number[] = this.data.optionSetIds;

  get uid(): string {
    return "i" + this.data.sourceId + "-" + this.itemId;
  }
}

export class ItemSummaryBridge extends ItemSummaryModel {

  constructor(private readonly data: ItemSummary) {
    super();
  }

  cost: number = this.data.cost;
  itemId: number = this.data.itemId;
  sourceId: number = this.data.sourceId;
  name: string = this.data.name;
  tags: string[] = this.data.tags;
  optionSetIds: number[] = this.data.optionSetIds;

  get uid(): string {
    return this.itemId.toString();
  }
}

export class ItemOptionBridge extends ItemOptionModel{
  constructor(private readonly data: ItemOption) {
    super();
  }

  readonly id: number = this.data.id;
  readonly name: string = this.data.name;
  readonly pointCost: number = this.data.pointCost;
  readonly tags: number[] = this.data.tags;
  readonly uniquenessTag: number = this.data.uniquenessTag;

  decorateName(name: string): string {
    return this.data.baseNamePrefix + name + this.data.baseNamePostfix;
  }
}

export class ItemOptionSetBridge extends ItemOptionSetModel {

  constructor(private readonly data: ItemOptionSet) {
    super();
  }

  public readonly id: number = this.data.id;
  public readonly hasPoints: boolean = this.data.hasPoints;
  public readonly hasMaxPoints: boolean = this.data.hasMaxPoints;
  public readonly maxPoints: number = this.data.maxPoints;
  public readonly optionTags: number[] = this.data.optionTags;

  pointCurrencyCost(points: number): number {
    return this.data.pointCurrencyCosts[points];
  }
}