"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formula_js_1 = require("@kierannichol/formula-js");
class Expression extends formula_js_1.Resolvable {
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
            parts.push(formula_js_1.Formula.parse(match[1]));
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
        return formula_js_1.ResolvedValue.of(this.parts.map(part => {
            var _a;
            if (part instanceof formula_js_1.Resolvable) {
                return (_a = part.resolve(context)) === null || _a === void 0 ? void 0 : _a.asText();
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
exports.default = Expression;
