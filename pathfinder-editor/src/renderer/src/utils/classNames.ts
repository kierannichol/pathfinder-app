export function classNames(classes: (string|undefined)[]): string {
  return classes.filter(c => c !== undefined).join(' ');
}