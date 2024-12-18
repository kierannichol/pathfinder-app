export function matchTags(candidateTags, queryTags) {
    return queryTags.some(queryTag => candidateTags.includes(queryTag));
}
export function hasTag(tags, searchTag) {
    const searchTags = searchTag.split("+");
    return searchTags.every(tag => tags.includes(tag.toLowerCase()));
    // return Tag.parse(searchTag).every(tag => tag.matches(tags));
}
class Tag {
    static parse(tagFormula) {
        const tags = [];
        let negated = false;
        let token = "";
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
    matches(tags) {
        return tags.includes(this.key.toLowerCase())
            ? !this.negated
            : this.negated;
    }
    constructor(key, negated) {
        this.key = key;
        this.negated = negated;
    }
}
