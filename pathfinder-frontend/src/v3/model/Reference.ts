export default class Reference {
  private readonly pattern: RegExp;

  public matches(id: string): boolean {
    return this.pattern.test(id);
  }

  constructor(public readonly databaseId: string, path: string = "*") {
    this.pattern = new RegExp(path.replaceAll("*", ".*"));
  }
}