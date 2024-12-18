export function array<T>(t: T|T[]) {
  return t instanceof Array ? t : [t];
}

export function onlyDefined<T>(ta: (T|undefined|null)[]): T[] {
  return ta.filter(t => t !== undefined && t !== null) as T[];
}

export function splitArray<T>(a: T[], leftPredicateFn: (t: T) => boolean): T[][] {
  const left: T[] = [];
  const right: T[] = [];
  a.forEach(t => leftPredicateFn(t) ? left.push(t) : right.push(t))
  return [ left, right ];
}