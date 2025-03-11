import {Database} from "@ttrpg-data/Database";
import {Feature} from "@ttrpg-data/Feature";
import {Selections} from "@ttrpg-data/Entity";

export class ResolveContext {
  private readonly featureCache: { [key: string]: Promise<Feature> } = {};

  constructor(private readonly database: Database,
              private readonly selections: Selections) {
  }

  async load(featureId: string): Promise<Feature> {
    if (!(featureId in this.featureCache)) {
      this.featureCache[featureId] = this.database.load(featureId);
    }
    return (await this.featureCache[featureId]).clone();
  }

  selected(choiceId: string) {
    return this.selections[choiceId];
  }
}