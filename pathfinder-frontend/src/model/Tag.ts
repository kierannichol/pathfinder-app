export function hasTag(tags: string[], searchTag: string): boolean {
  const searchTags = searchTag.split("+");
  return searchTags.every(tag => tags.includes(tag.toLowerCase()));
}