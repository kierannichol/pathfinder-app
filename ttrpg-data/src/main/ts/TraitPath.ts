export class TraitPath {
  static readonly EMPTY = new TraitPath([]);

  private constructor(private readonly parts: string[]) {
  }

  append(id: string): TraitPath {
    return new TraitPath([...this.parts, id]);
  }

  toString(): string {
    return this.parts.join(':');
  }
}