import { ItemSummary } from "./ItemSummary.ts";
import { Item } from "./Item.ts";
import { ItemOption, ItemOptionSummary } from "./ItemOption.ts";
import { ItemOptionSet } from "./ItemOptionSet.ts";
export declare class SourceItemModule {
    readonly sourceId: number;
    readonly sourceCode: string;
    private readonly summaryById;
    private readonly optionsById;
    private readonly optionSetsById;
    static load(sourceCode: string): Promise<SourceItemModule>;
    constructor(sourceId: number, sourceCode: string, summaryById: {
        [id: string]: ItemSummary;
    }, optionsById: {
        [id: number]: ItemOptionSummary;
    }, optionSetsById: {
        [id: number]: ItemOptionSet;
    });
    summaries(): ItemSummary[];
    load(id: number): Promise<Item>;
    item(id: number): ItemSummary | undefined;
    option(optionId: number): ItemOptionSummary | undefined;
    optionSet(optionSetId: number): ItemOptionSet | undefined;
    options(): ItemOptionSummary[];
    optionDetails(optionId: number): Promise<ItemOption | undefined>;
    toString(): string;
}
