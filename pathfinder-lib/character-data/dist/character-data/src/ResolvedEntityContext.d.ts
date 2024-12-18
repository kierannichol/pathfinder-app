import { EntityChoiceSelections } from "./Entity.ts";
import { Trait } from "./Trait.ts";
import { BaseDataContext, Resolvable } from "@kierannichol/formula-js";
import { FeatureRef } from "./Feature.ts";
import { StackModification } from "./FeatureModification.ts";
export type FeatureLoader = (key: string) => Promise<Trait | undefined>;
export declare class ResolvedEntityContext extends BaseDataContext {
    private readonly featureLoader;
    private readonly selections;
    private readonly cache;
    private counts;
    private stackRefs;
    private readonly stackModifications;
    get(key: string): Resolvable | undefined;
    keys(): string[];
    constructor(featureLoader: FeatureLoader, selections: EntityChoiceSelections);
    feature(key: string): Promise<Trait | undefined>;
    selection(path: string): string | string[] | undefined;
    swapSelections(path1: string, path2: string): void;
    register(id: string | undefined, count?: number): void;
    count(id: string): number;
    registerStackRef(featureId: string, stackCount: number, ref: FeatureRef): void;
    getStackRef(featureId: string, stackCount: number): FeatureRef;
    hasModification(modificationKey: string): boolean;
    registerModification(modificationKey: string, modification: StackModification): boolean;
    restartResolve(): void;
    forbidAddFeature(parentKey: string, parentStackCount: number, featureToAddKey: string): boolean;
    modifications(featureId: string, stackNumber: number): StackModification[];
}
