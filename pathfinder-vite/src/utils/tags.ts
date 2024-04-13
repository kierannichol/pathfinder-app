export function matchTags<T>(candidateTags: T[], queryTags: T[]): boolean {
  return queryTags.some(queryTag => candidateTags.includes(queryTag));

}

export function hasTag(tags: string[], searchTag: string): boolean {
  const searchTags = searchTag.split("+");
  return searchTags.every(tag => tags.includes(tag.toLowerCase()));
}