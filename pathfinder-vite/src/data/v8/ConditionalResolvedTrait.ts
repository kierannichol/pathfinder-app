import {ResolvedTrait} from "@/data/v8/Trait.ts";
import AppliedState from "@/data/v8/AppliedState.ts";
import {Formula} from "@kierannichol/formula-js";

export class ConditionalResolvedTrait implements ResolvedTrait {

  constructor(public readonly conditionFormula: string,
              private readonly resolvedTrait: ResolvedTrait) {
  }

  get children(): ResolvedTrait[] {
    return [ this.resolvedTrait ];
  }

  applyTo(state: AppliedState): void {
    if (Formula.parse(this.conditionFormula).resolve(state.asDataContext())?.asBoolean()) {
      this.resolvedTrait.applyTo(state);
    }
  }

}