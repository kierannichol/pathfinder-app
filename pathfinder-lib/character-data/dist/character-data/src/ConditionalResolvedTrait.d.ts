import { ResolvedTrait } from "./Trait.ts";
import AppliedState from "./AppliedState.ts";
export declare class ConditionalResolvedTrait implements ResolvedTrait {
    readonly conditionFormula: string;
    private readonly resolvedTrait;
    constructor(conditionFormula: string, resolvedTrait: ResolvedTrait);
    get children(): ResolvedTrait[];
    applyTo(state: AppliedState): void;
}
