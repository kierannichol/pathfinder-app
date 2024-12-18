import { ResolvedTrait, Trait } from "./Trait.ts";
import { ResolvedEntityContext } from "./ResolvedEntityContext.ts";
import AppliedState from "./AppliedState.ts";
import { FeatureSummary } from "./FeatureSummary.ts";
import SourceModule from "./SourceModule.ts";
import { FeatureOptionsQuery } from "./FeatureOptionsQuery.ts";
import Database from "./Database.ts";
import Description from "@/data/Description.ts";
export declare class FeatureRef {
    readonly path: string;
    readonly type: string;
    readonly name: string;
    readonly level: number;
    readonly parent: FeatureRef | undefined;
    constructor(path: string, type: string, name: string, level: number, parent: FeatureRef | undefined);
}
export declare class Feature extends FeatureSummary implements Trait {
    readonly description: Description;
    readonly traits: Trait[];
    featureModifications: any;
    constructor(key: string, name: string, label: string | undefined, tags: string[], enabledFormula: string, maxStacks: number | null, optionsQuery: FeatureOptionsQuery | undefined, description: Description, traits: Trait[]);
    resolve(parent: FeatureRef, context: ResolvedEntityContext): Promise<ResolvedTrait>;
    option(optionKey: string, database: Database): Feature | undefined;
    private createOptionFeature;
}
export declare class ResolvedFeature implements ResolvedTrait {
    readonly origin: Feature;
    readonly parent: FeatureRef;
    readonly children: ResolvedTrait[];
    constructor(origin: Feature, parent: FeatureRef, children: ResolvedTrait[]);
    applyTo(state: AppliedState): void;
    get key(): string;
    get name(): string;
    get label(): string | undefined;
    get tags(): string[];
    get enabledFormula(): string;
    get maxStacks(): number | null;
    get description(): Description;
    get source(): SourceModule | undefined;
    get featureModifications(): any;
}
