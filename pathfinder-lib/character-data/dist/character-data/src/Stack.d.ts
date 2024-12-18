import { ResolvedTrait, Trait } from "./Trait.ts";
import { ResolvedEntityContext } from "./ResolvedEntityContext.ts";
import AppliedState from "./AppliedState.ts";
import { FeatureRef } from "./Feature.ts";
export declare class Stack {
    private readonly traits;
    static readonly Empty: Stack;
    constructor(traits: Trait[]);
    instance(featureId: string, stackNumber: number): FeatureStack;
}
export declare class FeatureStack implements Trait {
    private readonly featureId;
    private readonly stackNumber;
    private readonly traits;
    constructor(featureId: string, stackNumber: number, traits: Trait[]);
    resolve(parent: FeatureRef, context: ResolvedEntityContext): Promise<ResolvedStack>;
    private isForbidden;
}
export declare class ResolvedStack implements ResolvedTrait {
    readonly featureId: string;
    readonly stackNumber: number;
    readonly children: ResolvedTrait[];
    constructor(featureId: string, stackNumber: number, children: ResolvedTrait[]);
    applyTo(state: AppliedState): void;
}
