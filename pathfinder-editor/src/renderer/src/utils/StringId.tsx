export class StringId {
  public readonly type: string|undefined;
  public readonly key: string;
  public readonly option: string|undefined;

  static of(value: string): StringId {
    const result = /(?:(?<type>[a-zA-Z_0-9]+):)?(?<key>[a-zA-Z_0-9]+)(?:#(?<option>[a-zA-Z_0-9]+))?/.exec(value);
    if (!result) {
      return new StringId(undefined, value, undefined);
    }
    const groups = result.groups;
    if (!groups) {
      return new StringId('', value, '');
    }
    console.log(groups)
    return new StringId(groups['type'], groups['key'], groups['option']);
  }

  toString(): string {
    let value = this.key;
    if (this.type) {
      value = this.type + ':' + value;
    }
    if (this.option) {
      value = value + '#' + this.option;
    }
    return value;
  }

  constructor(type: string|undefined, key: string, option: string|undefined) {
    this.type = type;
    this.key = key;
    this.option = option;
  }
}