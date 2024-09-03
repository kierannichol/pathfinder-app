export function range(start: number, end: number): number[] {
  return Array.apply(0, Array(end - 1))
    .map((element, index) => index + start);
}