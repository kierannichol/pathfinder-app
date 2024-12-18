import { DataContextState } from "@kierannichol/formula-js";
import { ResolvedTrait, Trait } from "./Trait.ts";
import { FeatureLoader } from "./ResolvedEntityContext.ts";
import { ResolvedChoice } from "./Choice.ts";
import AppliedState from "./AppliedState.ts";
export type EntityState = DataContextState;
export declare class EntityChoiceSelections {
    [path: string]: string | string[];
}
export declare class Entity {
    private readonly traits;
    constructor(traits: Trait[]);
    resolve(featureLoader: FeatureLoader, selections: EntityChoiceSelections): Promise<ResolvedEntity>;
}
export declare class ResolvedEntity {
    private readonly selections;
    private readonly traits;
    constructor(selections: EntityChoiceSelections, traits: ResolvedTrait[]);
    get choices(): ResolvedChoice[];
    applyTo(state: AppliedState): void;
}
