import { data } from "@/compiled";
import ItemSummaryDbo = data.ItemSummaryDbo;
export declare class ItemSummary {
    private readonly dbo;
    readonly sourceId: number;
    constructor(dbo: ItemSummaryDbo, sourceId: number);
    get itemId(): number;
    get name(): string;
    get cost(): number;
    get weight(): number;
    get tags(): string[];
    get optionSetIds(): number[];
    get hasOptions(): boolean;
    get uid(): string;
}
