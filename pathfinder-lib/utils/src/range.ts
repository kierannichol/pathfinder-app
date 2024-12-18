export function range(start: number, end: number): number[] {
  return Array.apply(0, Array(end - start + 1))
    .map((_, index) => index + start);
}