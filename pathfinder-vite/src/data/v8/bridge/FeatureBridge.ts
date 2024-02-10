import {FeatureModel, FeatureSummaryModel} from "../../../view/model/FeatureModel.ts";
import Description from "../../Description.ts";
import {Feature} from "../Feature.ts";
import {FeatureSummary} from "../FeatureSummary.ts";

export class FeatureBridge extends FeatureModel {
  constructor(private readonly data: Feature) {
    super();
  }

  description: Description = this.data.description;
  enabledFormula: string = this.data.enabledFormula;
  key: string = this.data.key;
  label: string | undefined = this.data.label;
  maxStacks: number | null = this.data.maxStacks;
  name: string = this.data.name;
  tags: string[] = this.data.tags;
}

export class FeatureSummaryBridge extends FeatureSummaryModel {

  constructor(private readonly data: FeatureSummary) {
    super();
  }

  enabledFormula: string = this.data.enabledFormula;
  key: string = this.data.key;
  maxStacks: number | null = this.data.maxStacks;
  name: string = this.data.name;
  tags: string[] = this.data.tags;
}