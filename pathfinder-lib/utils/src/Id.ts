export default class Id {
  private static OptionDeliminator = '#';
  private static KeyStart = ':';
  private static SpecificStart = '#';

  static withOption(id: string, option: string): string {
    return id + this.OptionDeliminator + option;
  }

  static withoutOption(id: string): string {
    const index = id.lastIndexOf(Id.OptionDeliminator);
    if (index < 0) return id;
    return id.substring(0, index);
  }

  static justOption(id: string): string|undefined {
    if (id === undefined) return undefined;
    const index = id.lastIndexOf(Id.OptionDeliminator);
    if (index < 0) return undefined;
    return id.substring(index + 1);
  }

  static justKey(id: string): string|undefined {
    const startIndex = id.indexOf(Id.KeyStart);
    const endIndex = id.indexOf(Id.SpecificStart);
    return id.substring(
        startIndex < 0 ? 0 : startIndex + 1,
        endIndex < 0 ? undefined : endIndex);
  }

  private constructor() {
  }
}