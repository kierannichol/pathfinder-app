import { ResolvedTrait, Trait } from "./Trait.ts";
import { ResolvedEntityContext } from "./ResolvedEntityContext.ts";
import { Link } from "./Link.ts";
import { FeatureRef } from "./Feature.ts";
export declare class FeatureModification implements Trait {
    private readonly targetFeatureId;
    readonly stackModifications: StackModification[];
    constructor(targetFeatureId: string, stackModifications: StackModification[]);
    resolve(parent: FeatureRef, context: ResolvedEntityContext): Promise<ResolvedTrait>;
}
export declare class StackModification implements Trait {
    readonly targetFeatureId: string;
    readonly targetStackCount: number;
    readonly linksToAdd: Link[];
    readonly linksToRemove: string[];
    constructor(targetFeatureId: string, targetStackCount: number, linksToAdd: Link[], linksToRemove: string[]);
    resolve(parent: FeatureRef, context: ResolvedEntityContext): Promise<ResolvedTrait>;
    register(parent: FeatureRef, context: ResolvedEntityContext): boolean;
    forbidAddFeature(featureToAddKey: string): boolean;
}
