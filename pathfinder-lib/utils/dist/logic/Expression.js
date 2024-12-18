import { Formula, Resolvable, ResolvedValue } from "@kierannichol/formula-js";
class Expression extends Resolvable {
    static parse(text) {
        if (text instanceof Expression) {
            return text;
        }
        const parts = [];
        const regex = new RegExp(this.InlineRegex, 'g');
        let match;
        let lastIndex = 0;
        while ((match = regex.exec(text)) !== null) {
            let before = text.substring(lastIndex, match.index);
            if (before.length > 0) {
                parts.push(before
                    .replaceAll('\\{', '{')
                    .replaceAll('\\}', '}'));
            }
            parts.push(Formula.parse(match[1]));
            lastIndex = match.index + match[0].length;
        }
        const rest = text.substring(lastIndex)
            .replaceAll('\\{', '{')
            .replaceAll('\\}', '}');
        if (rest.length > 0) {
            parts.push(rest);
        }
        return new Expression(text, parts);
    }
    resolve(context) {
        return ResolvedValue.of(this.parts.map(part => {
            if (part instanceof Resolvable) {
                return part.resolve(context)?.asText();
            }
            return part;
        })
            .join(''));
    }
    asFormula() {
        return this.original;
    }
    constructor(original, parts) {
        super();
        this.original = original;
        this.parts = parts;
    }
}
Expression.InlineRegex = /(?<!\\)\{(.*?)}/;
export default Expression;
