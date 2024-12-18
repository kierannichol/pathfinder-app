import { FeatureSummary } from "./FeatureSummary.ts";
import { Feature } from "./Feature.ts";
export default abstract class SourceModule {
    abstract get sourceCode(): string;
    abstract get title(): string;
    abstract features(): FeatureSummary[];
    abstract feature(id: string): FeatureSummary | undefined;
    abstract load(id: string): Promise<Feature>;
    query(tags: string[]): FeatureSummary[];
    protected abstract get tags(): Set<string>;
}
export declare class ExternalSourceModule extends SourceModule {
    readonly sourceCode: string;
    readonly title: string;
    private readonly featuresById;
    protected readonly tags: Set<string>;
    static create(sourceCode: string, title: string, features: FeatureSummary[]): SourceModule;
    private constructor();
    features(): FeatureSummary[];
    feature(id: string): FeatureSummary | undefined;
    load(id: string): Promise<Feature>;
    toString(): string;
}
