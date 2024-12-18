import { ResolvedEntityContext } from "./ResolvedEntityContext.ts";
import AppliedState from "./AppliedState.ts";
import { FeatureRef } from "./Feature.ts";
export interface Trait {
    resolve(parent: FeatureRef, context: ResolvedEntityContext): Promise<ResolvedTrait>;
}
export interface ResolvedTrait {
    children: ResolvedTrait[];
    applyTo(state: AppliedState): void;
}
export declare const EmptyResolvedTrait: ResolvedTrait;
export declare function traverseTrait(trait: ResolvedTrait, state: AppliedState, actionFn: (descendant: ResolvedTrait, depth: number) => boolean): void;
