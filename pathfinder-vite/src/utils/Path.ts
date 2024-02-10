export class Path {

  static of(a: string|number): string {
    return a.toString().replace('#', '_');
  }

  static combine(a: string|number, b: string|number): string {
    a = Path.of(a);
    b = Path.of(b);
    if (a === '') return b.toString();
    if (b == '') return a.toString();
    return a + ":" + b;
  }

  private constructor() {
  }
}