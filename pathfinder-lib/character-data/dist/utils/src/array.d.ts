export declare function array<T>(t: T | T[]): T[];
export declare function onlyDefined<T>(ta: (T | undefined | null)[]): T[];
export declare function splitArray<T>(a: T[], leftPredicateFn: (t: T) => boolean): T[][];
