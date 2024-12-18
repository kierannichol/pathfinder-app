import Description from "./Description.ts";
import SourceModule from "./SourceModule.ts";
import { FeatureSummary } from "./FeatureSummary.ts";
import { Feature } from "./Feature.ts";
import { ItemSummary } from "./ItemSummary.ts";
import { Item } from "./Item.ts";
import { ItemOption, ItemOptionSummary } from "./ItemOption.ts";
import { ItemOptionSet } from "./ItemOptionSet.ts";
import { SourceItemModule } from "./SourceItemModule.ts";
export declare class ItemDatabase {
    private readonly modules;
    constructor(modules: SourceItemModule[]);
    summaries(): ItemSummary[];
    load(id: number): Promise<Item | undefined>;
    summary(id: number): ItemSummary | undefined;
    options(optionIds?: number[] | undefined): ItemOptionSummary[];
    option(optionId: number): ItemOptionSummary | undefined;
    optionDetails(optionId: number): Promise<ItemOption | undefined>;
    optionSet(optionSetId: number): ItemOptionSet | undefined;
    toString(): string;
}
export default class Database {
    private readonly modules;
    constructor(modules: SourceModule[]);
    features(): FeatureSummary[];
    feature(id: string): FeatureSummary | undefined;
    description(id: string): Promise<Description>;
    load(id: string): Promise<Feature | undefined>;
    name(id: string | undefined): string;
    query(tags: string[], expandOptions?: boolean): FeatureSummary[];
    toString(): string;
}
