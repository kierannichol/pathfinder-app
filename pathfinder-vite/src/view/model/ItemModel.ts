import Description from "../../data/Description.ts";

export abstract class ItemSummaryModel {
  abstract readonly itemId: number;
  abstract readonly sourceId: number;
  abstract readonly name: string;
  abstract readonly cost: number;
  abstract readonly tags: string[];
  abstract readonly uid: string;
  abstract readonly optionSetIds: number[];
}

export abstract class ItemModel extends ItemSummaryModel {
  abstract readonly itemId: number;
  abstract readonly sourceId: number;
  abstract readonly name: string;
  abstract readonly cost: number;
  abstract readonly tags: string[];
  abstract readonly uid: string;
  abstract readonly description: Description;
  abstract readonly optionSetIds: number[];
}

export abstract class ItemOptionModel {
  abstract readonly id: number;
  abstract readonly name: string;
  abstract readonly pointCost: number;
  abstract readonly tags: number[];
  abstract readonly uniquenessTag: number;

  abstract decorateName(name: string): string;
}

export abstract class ItemOptionSetModel {
  abstract readonly id: number;
  abstract readonly hasPoints: boolean;
  abstract readonly hasMaxPoints: boolean;
  abstract readonly maxPoints: number;
  abstract readonly optionTags: number[];

  abstract pointCurrencyCost(points: number): number;
}