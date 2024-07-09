export function array<T>(t: T|T[]) {
  return t instanceof Array ? t : [t];
}