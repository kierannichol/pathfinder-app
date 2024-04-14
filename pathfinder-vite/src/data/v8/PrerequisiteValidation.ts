export class PrerequisiteValidation {
  static Empty: PrerequisiteValidation = new PrerequisiteValidation([]);

  constructor(public readonly entries: PrerequisiteValidationEntry[] = []) {
  }

  add(description: string, valid: boolean): PrerequisiteValidation {
    this.entries.push(new PrerequisiteValidationEntry(description, valid));
    return this;
  }

  isValid(): boolean {
    if (this.entries.length == 0) return true;
    return this.entries
    .map(entry => entry.valid)
    .reduce((prev, next) => prev && next);
  }

  isEmpty(): boolean {
    return this.entries.length === 0;
  }
}

export class PrerequisiteValidationEntry {

  constructor(public readonly description: string, public readonly valid: boolean) {
  }
}
