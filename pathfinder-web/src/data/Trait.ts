import {ResolvedEntityContext} from "./ResolvedEntityContext.ts";
import AppliedState from "./AppliedState.ts";
import {ConditionalResolvedTrait} from "./ConditionalResolvedTrait.ts";
import {Formula} from "@kierannichol/formula-js";
import {FeatureRef} from "./Feature.ts";

export interface Trait {
  resolve(parent: FeatureRef, context: ResolvedEntityContext): Promise<ResolvedTrait>;
}

export interface ResolvedTrait {
  children: ResolvedTrait[];
  applyTo(state: AppliedState): void;
}

class EmptyResolvedTraitImplementation implements ResolvedTrait {
    children: ResolvedTrait[] = [];
    applyTo(_state: AppliedState): void {
        // Do nothing
    }

}

export const EmptyResolvedTrait: ResolvedTrait = new EmptyResolvedTraitImplementation();

export function traverseTrait(trait: ResolvedTrait,
                              state: AppliedState,
                              actionFn: (descendant: ResolvedTrait, depth: number) => boolean): void {
  traverseTraitWithDepth(trait, state, 0, actionFn);
}

function traverseTraitWithDepth(trait: ResolvedTrait,
                                state: AppliedState,
                              depth: number,
                              actionFn: (descendant: ResolvedTrait, depth: number) => boolean): void {
  if (trait instanceof ConditionalResolvedTrait) {
    if (!(Formula.parse(trait.conditionFormula).resolve(state.asDataContext())?.asBoolean() ?? false)) {
      return;
    }
  }

  if (!actionFn(trait, depth)) {
    return;
  }
  trait.children.forEach(child => {
    traverseTraitWithDepth(child, state,depth + 1, actionFn);
  });
}