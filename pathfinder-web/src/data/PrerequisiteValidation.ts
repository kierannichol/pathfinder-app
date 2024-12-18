export class PrerequisiteValidation {
  static Empty: PrerequisiteValidation = new PrerequisiteValidation([]);

  public readonly entries: PrerequisiteValidationEntry[] = [];
  private valid: boolean = true;

  constructor(entries: PrerequisiteValidationEntry[] = []) {
    for (let entry of entries) {
      this.add(entry.description, entry.valid);
    }
  }

  add(description: string, valid: boolean): PrerequisiteValidation {
    this.entries.unshift(new PrerequisiteValidationEntry(description, valid));
    this.valid = this.valid && valid;
    return this;
  }

  isValid(): boolean {
    return this.valid;
  }

  isEmpty(): boolean {
    return this.entries.length === 0
        || (this.entries.length === 1 && this.entries[0].description === "true");
  }
}

export class PrerequisiteValidationEntry {

  constructor(public readonly description: string, public readonly valid: boolean) {
  }
}
