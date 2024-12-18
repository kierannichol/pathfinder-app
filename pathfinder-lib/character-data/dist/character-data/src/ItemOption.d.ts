import Description from "../Description.ts";
export declare class ItemOptionSummary {
    readonly id: number;
    readonly name: string;
    readonly baseNamePrefix: string;
    readonly baseNamePostfix: string;
    readonly pointCost: number;
    readonly currencyCost: number;
    readonly currencyCostByWeight: number;
    readonly tags: number[];
    constructor(id: number, name: string, baseNamePrefix: string, baseNamePostfix: string, pointCost: number, currencyCost: number, currencyCostByWeight: number, tags: number[]);
}
export declare class ItemOption extends ItemOptionSummary {
    readonly description: Description;
    constructor(id: number, name: string, baseNamePrefix: string, baseNamePostfix: string, pointCost: number, currencyCost: number, currencyCostByWeight: number, tags: number[], description: Description);
}
