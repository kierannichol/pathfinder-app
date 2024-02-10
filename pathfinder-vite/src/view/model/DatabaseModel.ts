import Description from "../../data/Description.ts";
import {FeatureModel, FeatureSummaryModel} from "./FeatureModel.ts";

export abstract class DatabaseModel {
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