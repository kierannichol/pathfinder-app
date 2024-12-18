import { ResolvedTrait, Trait } from "./Trait.ts";
import { ResolvedEntityContext } from "./ResolvedEntityContext.ts";
import { FeatureRef } from "./Feature.ts";
export declare class Link implements Trait {
    readonly key: string;
    constructor(key: string);
    resolve(parent: FeatureRef, context: ResolvedEntityContext): Promise<ResolvedTrait>;
}
