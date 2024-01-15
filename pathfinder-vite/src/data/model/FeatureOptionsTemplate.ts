import Database from "./Database.ts";
import FeatureOption from "./FeatureOption.ts";
import {FeatureSummary} from "./Feature.ts";

export default class FeatureOptionsTemplate {

  constructor(public readonly optionTag: string,
              public readonly idTemplate: string,
              public readonly prerequisitesTemplate: string) {
  }

  queryOptions(database: Database): FeatureOption[] {
    return database.query([this.optionTag])
      .map(summary => this.summaryToOption(summary));
  }

  private summaryToOption(summary: FeatureSummary): FeatureOption {
    const name = summary.name;
    const id = this.applyTemplate(this.idTemplate, summary);
    const enabledFormula = this.applyTemplate(this.prerequisitesTemplate, summary);
    return new FeatureOption(id, name, enabledFormula);
  }

  private applyTemplate(template: string, summary: FeatureSummary): string {
    const firstIndex = summary.id.indexOf(':');
    const secondIndex = summary.id.indexOf('#');
    const key = summary.id.substring(
        firstIndex < 0 ? 0 : firstIndex + 1,
        secondIndex < 0 ? undefined : secondIndex);

    return template.replace('{option.key}', key);
  }
}