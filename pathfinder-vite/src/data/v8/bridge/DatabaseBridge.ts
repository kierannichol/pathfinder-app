import {DatabaseModel, ItemDatabaseModel} from "../../../view/model/DatabaseModel.ts";
import {FeatureModel, FeatureSummaryModel} from "../../../view/model/FeatureModel.ts";
import Database, {ItemDatabase} from "../Database.ts";
import {FeatureBridge, FeatureSummaryBridge} from "./FeatureBridge.ts";
import {ItemModel, ItemOptionModel, ItemOptionSetModel, ItemSummaryModel} from "../../../view/model/ItemModel.ts";
import {ItemBridge, ItemOptionBridge, ItemOptionSetBridge, ItemSummaryBridge} from "./ItemBridge.ts";

export class ItemDatabaseBridge extends ItemDatabaseModel {
  constructor(private readonly data: ItemDatabase) {
    super();
  }
  items(): ItemSummaryModel[] {
    return this.data.summaries().map(summary =>
        new ItemSummaryBridge(summary));
  }
  async load(id: number): Promise<ItemModel | undefined> {
    const loaded = await this.data.load(id);
    if (!loaded) {
      return undefined;
    }
    return new ItemBridge(loaded);
  }
  item(id: number): ItemSummaryModel | undefined {
    const data = this.data.summary(id);
    return data ? new ItemSummaryBridge(data) : undefined;
  }

  option(id: number): ItemOptionModel | undefined {
    const data = this.data.option(id);
    if (!data) {
      return undefined;
    }
    return new ItemOptionBridge(data);
  }

  optionSet(id: number): ItemOptionSetModel | undefined {
    const data = this.data.optionSet(id);
    if (!data) {
      return undefined;
    }
    return new ItemOptionSetBridge(data);
  }

  options(): ItemOptionModel[] {
    return this.data.options()
        .map(opt => new ItemOptionBridge(opt));
  }

}

export class DatabaseBridge extends DatabaseModel {

  constructor(private readonly database: Database) {
    super();
  }

  feature(id: string): FeatureSummaryModel | undefined {
    const data = this.database.feature(id);
    if (!data) {
      return undefined;
    }
    return new FeatureSummaryBridge(data);
  }

  features(): FeatureSummaryModel[] {
    return this.database.features()
        .map(f => new FeatureSummaryBridge(f));
  }

  async load(id: string): Promise<FeatureModel | undefined> {
    const loaded = await this.database.load(id);
    if (!loaded) {
      return undefined;
    }
    return new FeatureBridge(loaded);
  }

  query(tags: string[]): FeatureSummaryModel[] {
    return this.database.query(tags)
        .map(f => new FeatureSummaryBridge(f));
  }

  async itemDatabase(): Promise<ItemDatabaseModel> {
    return new ItemDatabaseBridge(await this.database.itemDatabase());
  }
}