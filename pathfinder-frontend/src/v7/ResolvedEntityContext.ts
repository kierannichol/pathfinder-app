import {PackedChoices} from "../core/PackedCharacter";
import Database from "./Database";
import Entity from "./Entity";
import Feature from "./Feature";

export class ResolvedEntityContext {
  private readonly found: {[id: string]: Feature} = {};

  public constructor(public readonly baseEntity: Entity,
              private readonly database: Database,
              private readonly selections: PackedChoices) {
  }

  selected(choiceId: string): string|undefined {
    return this.selections[choiceId];
  }

  feature(featureId: string): Feature|undefined {
    return this.found[featureId];
  }

  async add(basePath: string, featureId: string): Promise<void> {
    if (!featureId) {
      console.warn("Attempted to add undefined feature for " + basePath);
      return;
    }

    let feature: Feature = this.found[featureId];
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