export function uniq<T>(t: T[]): T[] {
  return Array.from(new Set(t));
}

export function uniqById<T>(t: T[],
                            idFn: (t: T) => number|string,
                            whichFn: (a: T, b: T) => T = (a,b) => b): T[] {
  const itemById: {[id:(number|string)]: T} = {};
  t.forEach(item => {
    const id = idFn(item);
    const existing = itemById[id];
    itemById[id] = (existing === undefined ? item : whichFn(existing, item));
  });
  return Object.values(itemById);
}

export function uniqBy<T>(t: T[], byFn: (t:T) => string|number): T[] {
  const covered: {[k:string|number]: boolean} = {};
  return t.filter(value => {
    const by = byFn(value);
    if (by in covered) {
      return false;
    }
    covered[by] = true;
    return true;
  });
}