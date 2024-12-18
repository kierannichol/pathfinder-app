export declare function timed<T>(timedFn: () => T, name?: string): T;
export declare function timedAsync<T>(timedFn: () => Promise<T>, name?: string): Promise<T>;
export declare function formatTime(ms: number): string;
