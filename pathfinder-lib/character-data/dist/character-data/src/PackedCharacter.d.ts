export default interface PackedCharacter {
    id: string;
    selections: PackedSelections;
}
export declare class PackedSelections {
    [key: string]: string | string[];
}
