import { ItemOptionSummary } from "./ItemOption.ts";
export declare class ItemOptionGroup {
    readonly name: string;
    readonly optionTags: number[];
    readonly hasMaxSelectable: boolean;
    readonly maxSelectable: number;
    constructor(name: string, optionTags: number[], hasMaxSelectable: boolean, maxSelectable: number);
    hasOption(option: ItemOptionSummary): any;
}
