export function matchTags<T>(candidateTags: T[], queryTags: T[]): boolean {
  return queryTags.some(queryTag => candidateTags.includes(queryTag));
}

export function hasTag(tags: string[], searchTag: string): boolean {
  const searchTags = searchTag.split("+");
  return searchTags.every(tag => tags.includes(tag.toLowerCase()));

  // return Tag.parse(searchTag).every(tag => tag.matches(tags));
}

class Tag {
  static parse(tagFormula: string): Tag[] {
    const tags = [];

    let negated = false;
    let token: string = "";
    for (let c of tagFormula) {
      if (c === '+') {
        tags.push(new Tag(token, negated));
        token = "";
        negated = false;
      }
      else if (c === '-') {
        tags.push(new Tag(token, negated));
        token = "";
        negated = true;
      }
      else {
        token = token + c.toLowerCase();
      }
    }
    tags.push(new Tag(token, negated));
    return tags;
  }

  public matches(tags: string[]) {
    return tags.includes(this.key.toLowerCase())
        ? !this.negated
        : this.negated;
  }

  constructor(private readonly key: string,
              private readonly negated: boolean) {
  }
}