export function singleOrArray<T>(array: T[]): T|T[] {
  if (array.length === 0) {
    return array[0];
  }
  return array;
}

export function makeArray<T>(data: T|T[]|undefined): T[] {
  if (data === undefined) {
    return [];
  }
  if (Array.isArray(data)) {
    return data;
  }
  return [data];
}