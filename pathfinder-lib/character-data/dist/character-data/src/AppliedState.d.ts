import { EntityState } from "./Entity.ts";
import { DataContext, Resolvable } from "@kierannichol/formula-js";
export default class AppliedState {
    readonly withoutChoicePath: string | undefined;
    rawState: EntityState;
    private readonly dataContext;
    private readonly stackCounts;
    constructor(withoutChoicePath?: string | undefined);
    increment(key: string, amount?: number): void;
    set(key: string, value: number | string | boolean | Resolvable): void;
    getAsNumber(key: string): number;
    asDataContext(): DataContext;
}
