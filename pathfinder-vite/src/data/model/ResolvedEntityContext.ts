import {PackedSelections} from "./PackedCharacter.ts";
import Database from "./Database.ts";
import Entity from "./Entity.ts";
import Feature from "./Feature.ts";

export class ResolvedEntityContext {
  private readonly found: {[id: string]: Feature} = {};

  static derived(parent: ResolvedEntityContext, selections: PackedSelections): ResolvedEntityContext {
    return new ResolvedEntityContext(parent.baseEntity, parent.database, selections, parent.found);
  }

  public constructor(public readonly baseEntity: Entity,
                     private readonly database: Database,
                     private readonly selections: PackedSelections,
                     private readonly cache: {[id: string]: Feature} = {}) {
  }

  cleanup() {
    for (let key in this.cache) {
      delete this.cache[key];
    }
  }

  selected(choiceId: string): string|undefined {
    return this.selections[choiceId];
  }

  feature(featureId: string): Feature|undefined {
    return this.found[featureId];
  }

  async addFeature(basePath: string, featureId: string): Promise<void> {
    if (!featureId) {
      console.warn("Attempted to add undefined feature for " + basePath);
      return;
    }

    let feature: Feature = this.found[featureId];
    if (!feature && featureId in this.cache) {
      feature = this.cache[featureId];
      this.found[featureId] = feature;
    }

    if (!feature) {
      const loaded = await this.database.load(featureId);
      if (!loaded) {
        throw new Error("Feature not found: " + featureId);
      }
      feature = loaded;
      this.found[featureId] = loaded;
    }

    await feature.resolve(basePath, this);
  }
}

