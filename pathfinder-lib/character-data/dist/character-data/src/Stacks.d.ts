import { FeatureStack, Stack } from "./Stack.ts";
import { ResolvedTrait, Trait } from "./Trait.ts";
import { ResolvedEntityContext } from "./ResolvedEntityContext.ts";
import { FeatureRef } from "./Feature.ts";
export interface Stacks extends Trait {
}
export declare class FixedStack implements Stacks {
    private readonly featureId;
    private readonly stacks;
    constructor(featureId: string, stacks: Stack[]);
    next(count: number): FeatureStack;
    resolve(parent: FeatureRef, context: ResolvedEntityContext): Promise<ResolvedTrait>;
}
export declare class RepeatingStack implements Stacks {
    private readonly featureId;
    private readonly stack;
    constructor(featureId: string, stack: Stack);
    resolve(parent: FeatureRef, context: ResolvedEntityContext): Promise<ResolvedTrait>;
}
export declare class ConditionalStack implements Stacks {
    private readonly featureId;
    private readonly whenFormula;
    private readonly stack;
    constructor(featureId: string, whenFormula: string, stack: Stack);
    resolve(parent: FeatureRef, context: ResolvedEntityContext): Promise<ResolvedTrait>;
}
