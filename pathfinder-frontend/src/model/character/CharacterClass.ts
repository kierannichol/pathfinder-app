export class CharacterClassSummary {

  constructor(public readonly id: string,
              public readonly name: string,
              public readonly type: string) {
  }
}

export class CharacterClass extends CharacterClassSummary {
  constructor(id: string,
              name: string,
              type: string,
              public readonly shortDescription: string,
              public readonly levels: CharacterClass.Level[]) {
    super(id, name, type);
  }

  public level(levelNumber: number): CharacterClass.Level | undefined {
    for (let i = 0; i < this.levels.length; i++) {
      if (this.levels[i].levelNumber == levelNumber) {
        return this.levels[i];
      }
    }
    return undefined;
  }
}

export namespace CharacterClass {
  export class Level {
    constructor(public readonly levelNumber: number,
                public readonly bab: number,
                public readonly fortSave: number,
                public readonly refSave: number,
                public readonly willSave: number,
                public readonly specials: Special[]) {
    }
  }

  export class Special {
    constructor(public readonly id: string,
                public readonly name: string,
                public readonly description: string) {
    }
  }
}