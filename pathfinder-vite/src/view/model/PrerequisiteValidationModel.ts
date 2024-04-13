export class PrerequisiteValidationModel {
  static Empty: PrerequisiteValidationModel = new PrerequisiteValidationModel([]);

  constructor(public readonly entries: PrerequisiteValidationEntryModel[] = []) {
  }

  add(description: string, valid: boolean): PrerequisiteValidationModel {
    this.entries.push(new PrerequisiteValidationEntryModel(description, valid));
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

export class PrerequisiteValidationEntryModel {

  constructor(public readonly description: string, public readonly valid: boolean) {
  }
}