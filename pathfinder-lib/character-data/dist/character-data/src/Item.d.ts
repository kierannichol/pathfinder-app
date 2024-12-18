import Description from "../Description";
export declare class Item {
    readonly itemId: number;
    readonly sourceId: number;
    readonly name: string;
    readonly cost: number;
    readonly weight: number;
    readonly tags: string[];
    readonly optionSetIds: number[];
    readonly description: Description;
    constructor(itemId: number, sourceId: number, name: string, cost: number, weight: number, tags: string[], optionSetIds: number[], description: Description);
}
