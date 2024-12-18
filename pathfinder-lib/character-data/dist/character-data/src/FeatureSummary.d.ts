import CharacterAtLevel from "./CharacterAtLevel.ts";
import Database from "./Database.ts";
import { PrerequisiteValidation } from "./PrerequisiteValidation.ts";
import { DataContext } from "@kierannichol/formula-js";
import SourceModule from "./SourceModule.ts";
import { FeatureOptionsQuery } from "./FeatureOptionsQuery.ts";
export declare class FeatureSummary {
    readonly key: string;
    readonly name: string;
    readonly label: string | undefined;
    readonly tags: string[];
    readonly enabledFormula: string;
    readonly maxStacks: number | null;
    readonly optionsQuery: FeatureOptionsQuery | undefined;
    source: SourceModule | undefined;
    constructor(key: string, name: string, label: string | undefined, tags: string[], enabledFormula: string, maxStacks: number | null, optionsQuery: FeatureOptionsQuery | undefined);
    checkPrerequisites(characterAtLevel: CharacterAtLevel, database: Database): PrerequisiteValidation;
    private resolvedValueText;
    isEnabled(context: DataContext, database: Database): boolean;
    hasOptions(): boolean;
    options(database: Database): FeatureSummary[];
    option(optionKey: string, database: Database): FeatureSummary | undefined;
    private createOptionFeatureSummary;
}
