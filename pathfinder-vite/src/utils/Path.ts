export class Path {

  static of(a: string|number): string {
    return a.toString().replace('#', '_');
  }

  static combine(...parts: (string|number)[]): string {
    return parts
      .map(a => a.toString())
      .reduce(Path.combineTwo);
  }

  private static combineTwo(a: string|number, b: string|number): string {
    a = Path.of(a);
    b = Path.of(b);
    if (a === '') return b.toString();
    if (b == '') return a.toString();
    return a + ":" + b;
  }

  private constructor() {
  }
}