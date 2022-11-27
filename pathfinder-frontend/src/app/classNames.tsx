export default function classNames(...classes: (string|undefined)[]): string {
  return classes.filter(x => x !== undefined).join(' ');
}