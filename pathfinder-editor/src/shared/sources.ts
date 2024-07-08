export interface SourceData {
  name: string;
  code: string;
  aliases: string[];
}

export class SourceRef {
  readonly name: string;
  readonly code: string;
  readonly aliases: string[];

  constructor(name: string, code: string, aliases: string[]) {
    this.name = name;
    this.code = code;
    this.aliases = aliases;
  }

  matches(name: string): boolean {
    name = name.trim().toLowerCase().replaceAll(/[^\w ]/g, '');
    if (name === this.code.toLowerCase()) {
      return true;
    }
    if (name === this.name.toLowerCase().replaceAll(/[^\w ]/g, '')) {
      return true;
    }
    for (let alias of (this.aliases ?? [])) {
      if (name === alias.toLowerCase().replaceAll(/[^\w ]/g, '')) {
        return true;
      }
    }
    return false;
  }
}

export class Sources {
  public readonly all: SourceRef[];

  constructor(sources: SourceRef[]) {
    this.all = sources;
  }

  public find(name: string): SourceRef|undefined {
    return this.all.find(source => source.matches(name));
  }
}