import Database from "./Database";
import {combinePath} from "./Entity";
import {FeatureSummary} from "./Feature";
import {FeatureResolvable} from "./FeatureResolvable";
import {ResolvedEntityContext} from "./ResolvedEntityContext";

export abstract class Choice implements FeatureResolvable {
  abstract get key(): string;
  abstract get label(): string;
  abstract get type(): string;

  abstract resolve(basePath: string, context: ResolvedEntityContext): Promise<void>;
}

export class TextChoice extends Choice {

  constructor(public readonly key: string,
              public readonly label: string,
              public readonly type: string) {
    super();
  }

  async resolve(basePath: string, context: ResolvedEntityContext): Promise<void> {
  }
}

export class FeatureSelectChoice extends Choice {
  repeatingIndex: number = 0; // TODO: implement

  constructor(public readonly key: string,
              public readonly label: string,
              public readonly type: string,
              public readonly optionTags: string[],
              public readonly featureIds: string[] = []) {
    super();
  }

  async resolve(basePath: string, context: ResolvedEntityContext): Promise<void> {
    const choiceId = combinePath(basePath, this.key);
    const selected = context.selected(choiceId);
    if (!selected) {
      return;
    }
    await context.add(choiceId, selected);
  }

  options(database: Database): FeatureSummary[] {
    return [
        ...database.query(this.optionTags),
        ...this.featureIds.flatMap(featureId => {
          const option = database.feature(featureId);
          return option !== undefined ? [ option ] : [];
        })
    ];
  }
}