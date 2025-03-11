import {Database} from "../../../main/ts/Database";
import {Feature} from "../../../main/ts/Feature";
import {AddEffect} from "../../../main/ts/Effect";
import {SelectChoice} from "../../../main/ts/Choice";

class TestDatabaseImplementation implements Database {
  public readonly Feature = {
    Both: new Feature('both', [new AddEffect("foo", 1), new AddEffect("bar", 1)]),
    Foo: new Feature('foo', [new AddEffect("foo", 1)]),
    Bar: new Feature('bar', [new AddEffect("bar", 1)]),
    FeatureWithChoice: new Feature('feature_with_choice', [new SelectChoice("choice")])
  };

  private readonly features: Map<string, Feature> = new Map();

  constructor() {
    this.add(this.Feature.Both);
    this.add(this.Feature.Foo);
    this.add(this.Feature.Bar);
    this.add(this.Feature.FeatureWithChoice);
  }

  add(feature: Feature): void {
    this.features.set(feature.id, feature);
  }

  load(id: string): Promise<Feature | null> {
    const feature = this.features.get(id);
    if (!feature) throw new Error("Feature not found: " + id);
    return Promise.resolve(feature);
  }

}

export const TestDatabase = new TestDatabaseImplementation();