import { ResolvedTrait, Trait } from "./Trait.ts";
import { ResolvedEntityContext } from "./ResolvedEntityContext.ts";
import AppliedState from "./AppliedState.ts";
import Database from "./Database.ts";
import { FeatureSummary } from "./FeatureSummary.ts";
import React from "react";
import { FeatureRef } from "./Feature.ts";
import { DataContext } from "@kierannichol/formula-js";
export interface ChoiceRef {
    inputType: ChoiceInputType;
    path: string;
    tags: string[];
    label: string;
    parent: FeatureRef;
    level: number;
}
export interface SelectChoiceRef extends ChoiceRef {
    readonly categories: FeatureSelectCategory[];
    readonly isRepeating: boolean;
    maxLimit(context: DataContext): number | null;
    options(database: Database): FeatureSummary[];
    options(database: Database, query: string | undefined, filterTag: string | undefined): FeatureSummary[];
}
export type ChoiceSelectedHandler = (choice: ChoiceRef, selected: string | string[]) => void;
export declare enum ChoiceInputType {
    Text = 0,
    Select = 1
}
export declare abstract class ResolvedChoice implements ChoiceRef, ResolvedTrait {
    abstract parent: FeatureRef;
    abstract path: string;
    abstract tags: string[];
    abstract label: string;
    abstract children: ResolvedTrait[];
    abstract readonly inputType: ChoiceInputType;
    abstract applyTo(state: AppliedState): void;
    get level(): number;
}
export declare class MultiSelectChoice implements Trait {
    readonly key: string;
    readonly label: string;
    readonly tags: string[];
    readonly optionTags: string[];
    readonly featureIds: string[];
    readonly categories: FeatureSelectCategory[];
    readonly sortBy: "name" | "none";
    readonly repeatingIndex: number;
    readonly repeatingLimit: number | string | null;
    constructor(key: string, label: string, tags: string[], optionTags: string[], featureIds: string[], categories: FeatureSelectCategory[], sortBy: "name" | "none", repeatingIndex: number, repeatingLimit: number | string | null);
    resolve(parent: FeatureRef, context: ResolvedEntityContext): Promise<ResolvedTrait>;
}
declare abstract class BaseResolvedSelectChoice extends ResolvedChoice {
    readonly inputType: ChoiceInputType;
    abstract readonly optionTags: string[];
    abstract readonly featureIds: string[];
    abstract readonly sortBy: "name" | "none";
    options(database: Database, query?: string | undefined, filterTag?: string | undefined): FeatureSummary[];
}
export declare class ResolvedMultiSelectChoice extends BaseResolvedSelectChoice implements SelectChoiceRef {
    readonly parent: FeatureRef;
    readonly path: string;
    readonly key: string;
    readonly label: string;
    readonly tags: string[];
    readonly optionTags: string[];
    readonly featureIds: string[];
    readonly categories: FeatureSelectCategory[];
    readonly sortBy: "name" | "none";
    readonly repeatingIndex: number;
    readonly repeatingLimit: number | string | null;
    private readonly selected;
    readonly inputType: ChoiceInputType;
    constructor(parent: FeatureRef, path: string, key: string, label: string, tags: string[], optionTags: string[], featureIds: string[], categories: FeatureSelectCategory[], sortBy: "name" | "none", repeatingIndex: number, repeatingLimit: number | string | null, selected: ResolvedTrait[]);
    isRepeating: boolean;
    maxLimit(context: DataContext): number | null;
    applyTo(state: AppliedState): void;
    get children(): ResolvedTrait[];
}
export declare class SelectChoice implements Trait {
    readonly key: string;
    readonly label: string;
    readonly tags: string[];
    readonly optionTags: string[];
    readonly featureIds: string[];
    readonly categories: FeatureSelectCategory[];
    readonly sortBy: "name" | "none";
    readonly repeatingIndex: number;
    constructor(key: string, label: string, tags: string[], optionTags: string[], featureIds: string[], categories: FeatureSelectCategory[], sortBy: "name" | "none", repeatingIndex: number);
    resolve(parent: FeatureRef, context: ResolvedEntityContext): Promise<ResolvedTrait>;
}
export declare class ResolvedSelectChoice extends BaseResolvedSelectChoice implements SelectChoiceRef {
    readonly parent: FeatureRef;
    readonly path: string;
    readonly key: string;
    readonly label: string;
    readonly tags: string[];
    readonly optionTags: string[];
    readonly featureIds: string[];
    readonly categories: FeatureSelectCategory[];
    readonly sortBy: "name" | "none";
    readonly repeatingIndex: number;
    private readonly selected?;
    private readonly repeatedChoice?;
    readonly inputType: ChoiceInputType;
    constructor(parent: FeatureRef, path: string, key: string, label: string, tags: string[], optionTags: string[], featureIds: string[], categories: FeatureSelectCategory[], sortBy: "name" | "none", repeatingIndex: number, selected?: ResolvedTrait, repeatedChoice?: ResolvedTrait);
    isRepeating: boolean;
    maxLimit(): number | null;
    applyTo(state: AppliedState): void;
    get children(): ResolvedTrait[];
}
export declare class TextChoice implements Trait {
    private readonly key;
    readonly label: string;
    readonly tags: string[];
    readonly repeatingIndex: number;
    constructor(key: string, label: string, tags: string[], repeatingIndex: number);
    resolve(parent: FeatureRef, context: ResolvedEntityContext): Promise<ResolvedTrait>;
}
export declare class ResolvedTextChoice extends ResolvedChoice {
    readonly parent: FeatureRef;
    readonly path: string;
    readonly key: string;
    readonly label: string;
    readonly tags: string[];
    readonly repeatingIndex: number;
    private readonly value;
    readonly inputType: ChoiceInputType;
    readonly children: ResolvedTrait[];
    constructor(parent: FeatureRef, path: string, key: string, label: string, tags: string[], repeatingIndex: number, value: string | undefined);
    applyTo(state: AppliedState): void;
}
export declare class ChoiceCategory {
    label: React.ReactNode;
    tag: string;
}
export declare class FeatureSelectCategory {
    readonly label: string;
    readonly tag: string;
    constructor(label: string, tag: string);
}
export {};
