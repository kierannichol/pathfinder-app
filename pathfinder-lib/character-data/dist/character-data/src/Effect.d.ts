import { ResolvedTrait, Trait } from "./Trait.ts";
import AppliedState from "./AppliedState.ts";
export declare class SetFormulaEffect implements Trait, ResolvedTrait {
    readonly targetKey: string;
    readonly formula: string;
    children: ResolvedTrait[];
    constructor(targetKey: string, formula: string);
    applyTo(state: AppliedState): void;
    resolve(): Promise<ResolvedTrait>;
}
export declare class SetTextEffect implements Trait, ResolvedTrait {
    readonly targetKey: string;
    readonly value: string;
    children: ResolvedTrait[];
    constructor(targetKey: string, value: string);
    applyTo(state: AppliedState): void;
    resolve(): Promise<ResolvedTrait>;
}
export declare class SetNumberEffect implements Trait, ResolvedTrait {
    readonly targetKey: string;
    readonly value: number;
    children: ResolvedTrait[];
    constructor(targetKey: string, value: number);
    applyTo(state: AppliedState): void;
    resolve(): Promise<ResolvedTrait>;
}
export declare class AddEffect implements Trait, ResolvedTrait {
    readonly targetKey: string;
    readonly delta: number;
    children: ResolvedTrait[];
    constructor(targetKey: string, delta: number);
    applyTo(state: AppliedState): void;
    resolve(): Promise<ResolvedTrait>;
}
