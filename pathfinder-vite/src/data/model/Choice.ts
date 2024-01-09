import Database from "./Database.ts";
import {combinePath} from "./Entity.ts";
import {FeatureSummary} from "./Feature.ts";
import {FeatureResolvable} from "./FeatureResolvable.ts";
import {ResolvedEntityContext} from "./ResolvedEntityContext.ts";

export enum ChoiceInputType {
  Text,
  FeatureSelect
}

export abstract class Choice implements FeatureResolvable {
  abstract get inputType(): ChoiceInputType;
  abstract get key(): string;
  abstract get label(): string;
  abstract get type(): string;
  abstract get repeatingIndex(): number;

  abstract resolve(basePath: string, context: ResolvedEntityContext): Promise<void>;

  abstract repeat(): Choice;
}

export class TextChoice extends Choice {
  public key: string;

  constructor(private readonly baseKey: string,
              public readonly label: string,
              public readonly type: string,
              public readonly repeatingIndex: number) {
    super();
    this.key = baseKey + (this.repeatingIndex > 0 ? this.repeatingIndex : '');
  }

  async resolve(): Promise<void> {
  }

  get inputType(): ChoiceInputType {
    return ChoiceInputType.Text;
  }

  repeat(): Choice {
    return new TextChoice(this.baseKey,
        this.label,
        this.type,
        this.repeatingIndex + 1);
  }
}

export class FeatureSelectChoice extends Choice {
  public key: string;

  constructor(private readonly baseKey: string,
              public readonly label: string,
              public readonly type: string,
              public readonly optionTags: string[],
              public readonly featureIds: string[],
              public readonly categories: FeatureSelectCategory[],
              public readonly sortBy: ("none"|"name"),
              public readonly repeatingIndex: number) {
    super();
    this.key = baseKey + (this.repeatingIndex > 0 ? this.repeatingIndex : '');
  }

  async resolve(basePath: string, context: ResolvedEntityContext): Promise<void> {
    const choiceId = combinePath(basePath, this.key);
    const selected = context.selected(choiceId);
    if (!selected) {
      return;
    }
    await context.addFeature(choiceId, selected);
    if (this.repeatingIndex > 0) {
      const next = this.repeat();
      await next.resolve(basePath, context);
    }
  }

  options(database: Database, query: string|undefined, filterTag: string|undefined): FeatureSummary[] {
    let tags = [...this.optionTags];
    if (filterTag && filterTag !== '') {
      tags = tags.map(tag => tag + '+' + filterTag);
    }
    return [
        ...database.query(tags),
        ...this.featureIds.flatMap(featureId => {
          const option = database.feature(featureId);
          return option !== undefined ? [ option ] : [];
        })
    ]
    .filter(option => !query || option.name.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => {
      switch (this.sortBy) {
        case "name": return a.name.localeCompare(b.name);
        default: return 0;
      }
    });
  }

  get inputType(): ChoiceInputType {
    return ChoiceInputType.FeatureSelect;
  }

  repeat(): Choice {
    return new FeatureSelectChoice(
        this.baseKey,
        this.label,
        this.type,
        this.optionTags,
        this.featureIds,
        this.categories,
        this.sortBy,
        this.repeatingIndex + 1
    );
  }
}

export class FeatureSelectCategory {

  constructor(public readonly label: string,
              public readonly tag: string) {
  }
}