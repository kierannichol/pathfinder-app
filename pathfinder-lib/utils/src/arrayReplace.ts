export function arrayReplace<T>(array: T[], existing: T, replacement: T): T[] {
  return array.map(item => item === existing ? replacement : item);
}