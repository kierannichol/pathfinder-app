import { ItemOptionGroup } from "./ItemOptionGroup.ts";
import { ItemOptionSummary } from "./ItemOption.ts";
export declare class ItemOptionSet {
    readonly id: number;
    readonly hasPoints: boolean;
    readonly hasMaxPoints: boolean;
    readonly maxPoints: number;
    readonly pointCurrencyCosts: {
        [points: number]: number;
    };
    readonly optionGroups: ItemOptionGroup[];
    constructor(id: number, hasPoints: boolean, hasMaxPoints: boolean, maxPoints: number, pointCurrencyCosts: {
        [points: number]: number;
    }, optionGroups: ItemOptionGroup[]);
    calculatePointsUsed(options: ItemOptionSummary[]): number;
    hasOption(option: ItemOptionSummary): boolean;
}
