import {DatabaseModel} from "../../../view/model/DatabaseModel.ts";
import {FeatureModel, FeatureSummaryModel} from "../../../view/model/FeatureModel.ts";
import Database from "../Database.ts";
import {FeatureBridge, FeatureSummaryBridge} from "./FeatureBridge.ts";

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
}