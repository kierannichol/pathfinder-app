import {ChoiceCategoryModel, ChoiceModel, SelectChoiceModel, TextChoiceModel} from "../../../view/model/ChoiceModel.ts";
import {FeatureSummaryModel} from "../../../view/model/FeatureModel.ts";
import {ResolvedChoice, ResolvedSelectChoice, ResolvedTextChoice} from "../Choice.ts";
import {DatabaseModel} from "../../../view/model/DatabaseModel.ts";

export class ChoiceBridge {
  static from(data: ResolvedChoice): ChoiceModel {
    if (data instanceof ResolvedSelectChoice) {
      return new SelectChoiceBridge(data);
    }
    if (data instanceof ResolvedTextChoice) {
      return new TextChoiceBridge(data);
    }
    throw new Error("Unknown choice type: " + typeof data);
  }
}

export class SelectChoiceBridge extends SelectChoiceModel {

  constructor(private readonly data: ResolvedSelectChoice) {
    super();
  }

  get key(): string {
    return this.data.key;
  }

  get label(): string {
    return this.data.label;
  }

  get path(): string {
    return this.data.path;
  }

  get repeatingIndex(): number {
    return this.data.repeatingIndex;
  }

  get type(): string {
    return this.data.type;
  }

  get categories(): ChoiceCategoryModel[] {
    return this.data.categories;
  }

  options(database: DatabaseModel, query: string | undefined, filterTag: string | undefined): FeatureSummaryModel[] {
    let tags = [...this.data.optionTags];
    if (filterTag && filterTag !== '') {
      tags = tags.map(tag => tag + '+' + filterTag);
    }
    return [
      ...database.query(tags),
      ...this.data.featureIds.flatMap(featureId => {
        const option = database.feature(featureId);
        return option !== undefined ? [ option ] : [];
      })
    ]
    .filter(option => !query || option.name.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => {
      switch (this.data.sortBy) {
        case "name": return a.name.localeCompare(b.name);
        default: return 0;
      }
    });
  }

}

export class TextChoiceBridge extends TextChoiceModel {

  constructor(private readonly data: ResolvedTextChoice) {
    super();
  }

  get key(): string {
    return this.data.key;
  }

  get label(): string {
    return this.data.label;
  }

  get path(): string {
    return this.data.path;
  }

  get repeatingIndex(): number {
    return this.data.repeatingIndex;
  }

  get type(): string {
    return this.data.type;
  }
}