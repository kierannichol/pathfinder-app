"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrerequisiteValidationEntry = exports.PrerequisiteValidation = void 0;
class PrerequisiteValidation {
    constructor(entries = []) {
        this.entries = [];
        this.valid = true;
        for (let entry of entries) {
            this.add(entry.description, entry.valid);
        }
    }
    add(description, valid) {
        this.entries.unshift(new PrerequisiteValidationEntry(description, valid));
        this.valid = this.valid && valid;
        return this;
    }
    isValid() {
        return this.valid;
    }
    isEmpty() {
        return this.entries.length === 0
            || (this.entries.length === 1 && this.entries[0].description === "true");
    }
}
exports.PrerequisiteValidation = PrerequisiteValidation;
PrerequisiteValidation.Empty = new PrerequisiteValidation([]);
class PrerequisiteValidationEntry {
    constructor(description, valid) {
        this.description = description;
        this.valid = valid;
    }
}
exports.PrerequisiteValidationEntry = PrerequisiteValidationEntry;
