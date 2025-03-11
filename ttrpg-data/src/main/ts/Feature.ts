import {ResolvedValue} from "@kierannichol/formula-js";
import {Trait} from "@ttrpg-data/Trait.js";
import {ResolveContext} from "./ResolveContext";
import {TraitPath} from "@ttrpg-data/TraitPath";

export class Feature implements Trait {
  constructor(public readonly id: string,
              private readonly traits: Trait[]) {
  }

  async resolve(parent: TraitPath, context: ResolveContext): Promise<void> {
    const path = parent.append(this.id);
    await Promise.all(this.traits.map(trait => trait.resolve(path, context)));
  }

  apply(key: string, value: ResolvedValue): ResolvedValue {
    return this.traits.reduce(
        (current, trait) => trait.apply(key, current), value);
  }

  keys() {
    return this.traits.flatMap(trait => trait.keys());
  }

  clone(): Feature {
    return new Feature(this.id, this.traits.map(trait => trait.clone()));
  }
}