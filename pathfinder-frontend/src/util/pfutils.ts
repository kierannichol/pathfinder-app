export function array<T>(t: T|T[]) {
  return t instanceof Array ? t : [t];
}

export function splitArray<T>(a: T[], leftPredicateFn: (t: T) => boolean): T[][] {
  const left: T[] = [];
  const right: T[] = [];
  a.forEach(t => leftPredicateFn(t) ? left.push(t) : right.push(t))
  return [ left, right ];
}