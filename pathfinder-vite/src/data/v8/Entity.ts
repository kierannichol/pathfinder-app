import {DataContextState} from "@kierannichol/formula-js";
import {ResolvedTrait, Trait} from "./Trait.ts";
import {FeatureLoader, ResolvedEntityContext} from "./ResolvedEntityContext.ts";
import {ResolvedChoice} from "./Choice.ts";

export type EntityState = DataContextState;

export class EntityChoiceSelections {
  [path: string]: string;
}

export class Entity {

  constructor(private readonly traits: Trait[]) {
  }

  async resolve(featureLoader: FeatureLoader, selections: EntityChoiceSelections): Promise<ResolvedEntity> {
    const context = new ResolvedEntityContext(featureLoader, selections);
    const resolvedTraits = await Promise.all(this.traits.map(trait => trait.resolve('', context)));
    return new ResolvedEntity(selections, resolvedTraits);
  }
}

export class ResolvedEntity {

  constructor(private readonly selections: EntityChoiceSelections,
              private readonly traits: ResolvedTrait[]) {
  }

  get choices(): ResolvedChoice[] {
    function choices(trait: ResolvedTrait): ResolvedChoice[] {
      const found: ResolvedChoice[] = [];
      if (trait instanceof ResolvedChoice) {
        found.push(trait);
      }
      found.push(...trait.children.flatMap(choices));
      return found;
    }

    return this.traits.flatMap(choices);
  }

  applyTo(state: EntityState): void {
    this.traits.forEach(trait => trait.applyTo(state));
  }
}

