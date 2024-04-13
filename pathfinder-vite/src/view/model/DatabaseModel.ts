import Description from "../../data/Description.ts";
import {FeatureModel, FeatureSummaryModel} from "./FeatureModel.ts";
import {ItemModel, ItemOptionModel, ItemOptionSetModel, ItemSummaryModel} from "./ItemModel.ts";

export abstract class ItemDatabaseModel {
  abstract items(): ItemSummaryModel[];
  abstract item(id: number): ItemSummaryModel|undefined;
  abstract load(id: number): Promise<ItemModel|undefined>;

  abstract option(id: number): ItemOptionModel|undefined;
  abstract options(): ItemOptionModel[];
  abstract optionSet(id: number): ItemOptionSetModel|undefined;
}

export abstract class DatabaseModel {
  abstract itemDatabase(): Promise<ItemDatabaseModel>;
  abstract features(): FeatureSummaryModel[];
  abstract feature(id: string): FeatureSummaryModel|undefined;
  abstract load(id: string): Promise<FeatureModel|undefined>;
  abstract query(tags: string[]): FeatureSummaryModel[];
  async description(id: string): Promise<Description> {
    const loaded = await this.load(id);
    return loaded !== undefined
        ? loaded.description
        : Description.empty();
  }

  name(id: string|undefined): string {
    if (id === undefined) return "";

    const feature = this.feature(id);
    return feature !== undefined ? feature.name : "";
  }
}