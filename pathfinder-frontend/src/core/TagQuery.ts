import Tagged from "./Tagged";

export default class TagQuery {

  static parse(query: string): TagQuery {
    return new TagQuery();
  }

  matches(tagged: Tagged): boolean {
    const tags = tagged.tags;

    return true;
  }

  private constructor() {
  }
}