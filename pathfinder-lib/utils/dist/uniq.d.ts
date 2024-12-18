export declare function uniq<T>(t: T[]): T[];
export declare function uniqById<T>(t: T[], idFn: (t: T) => number | string, whichFn?: (a: T, b: T) => T): T[];
export declare function uniqBy<T>(t: T[], byFn: (t: T) => string | number): T[];
