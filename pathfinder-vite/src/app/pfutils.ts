export function array<T>(t: T|T[]) {
  return t instanceof Array ? t : [t];
}

export function uniq<T>(t: T[]): T[] {
  return Array.from(new Set(t));
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

export function splitArray<T>(a: T[], leftPredicateFn: (t: T) => boolean): T[][] {
  const left: T[] = [];
  const right: T[] = [];
  a.forEach(t => leftPredicateFn(t) ? left.push(t) : right.push(t))
  return [ left, right ];
}

export function timed<T>(timedFn: () => T, name:string = "Action"): T {
  const start = Date.now();
  try {
    return timedFn();
  } finally {
    const end = Date.now();
    console.log(`${name} took ${formatTime(end-start)}`);
  }
}

export async function timedAsync<T>(timedFn: () => Promise<T>, name: string = "Action"): Promise<T> {
  const start = Date.now();
  try {
    return await timedFn();
  } finally {
    const end = Date.now();
    console.log(`${name} took ${formatTime(end - start)}`);
  }
}

export function formatTime(ms: number): string {
  return `${ms.toLocaleString("en-US")} ms`;
  // if (ms < 1000) {
  //   return `${ms} ms`;
  // }
  // ms /= 1000;
  // if (ms < 60) {
  //   return `${ms.toFixed(2)} s`;
  // }
  // ms /= 60;
  // if (ms < 60) {
  //   return `${ms.toFixed(2)} m`;
  // }
  // ms /= 60;
  // return `${ms.toFixed(2)} h`;
}