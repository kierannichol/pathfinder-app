export class Path {
    static of(a) {
        return a.toString().replace('#', '_');
    }
    static combine(...parts) {
        return parts
            .map(a => a.toString())
            .reduce(Path.combineTwo);
    }
    static combineTwo(a, b) {
        a = Path.of(a);
        b = Path.of(b);
        if (a === '')
            return b.toString();
        if (b == '')
            return a.toString();
        return a + ":" + b;
    }
    constructor() {
    }
}
