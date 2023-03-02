export default class Id {
  public static readonly Empty: Id = new Id(undefined, undefined, undefined);

  private static readonly IdPattern = /(?:(?<type>[\w_]+):)?(?<key>[\w_]+)(?:#(?<option>[\w_]+))?/

  static of(idText: Id|string): Id {
    if (idText instanceof Id) {
      return idText;
    }

    const matches = this.IdPattern.exec(idText);
    if (!matches || !matches.groups) {
      throw Error("Unable to parse id string: " + idText);
    }
    const { groups: { type, key, option }} = matches;
    return new Id(type, key, option);
  }

  withoutOption(): Id {
    return new Id(this.type, this.key, undefined);
  }

  withOption(option: string): Id {
    return new Id(this.type, this.key, option);
  }

  string(): string {
    let id = this.key ?? '';
    if (this.type) {
      id = this.type + ':' + id;
    }
    if (this.option) {
      id = id + '#' + this.option;
    }
    return id;
  }

  toString(): string {
    return this.string();
  }

  protected constructor(public readonly type: string|undefined, public readonly key: string|undefined, public readonly option: string|undefined) {
  }
}