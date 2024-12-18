export declare class PrerequisiteValidation {
    static Empty: PrerequisiteValidation;
    readonly entries: PrerequisiteValidationEntry[];
    private valid;
    constructor(entries?: PrerequisiteValidationEntry[]);
    add(description: string, valid: boolean): PrerequisiteValidation;
    isValid(): boolean;
    isEmpty(): boolean;
}
export declare class PrerequisiteValidationEntry {
    readonly description: string;
    readonly valid: boolean;
    constructor(description: string, valid: boolean);
}
