export function toId(name: string): string {
  return name
    .trim()
    .toLowerCase()
    .replaceAll(/[^\w ]/g, '')
    .replaceAll(/\s+/g, '_')
}