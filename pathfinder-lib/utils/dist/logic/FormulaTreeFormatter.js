import { Associativity, ResolvedValue, ShuntingYard } from "@kierannichol/formula-js";
import Id from "../Id";
export var TreeNodeOperator;
(function (TreeNodeOperator) {
    TreeNodeOperator[TreeNodeOperator["ALL"] = 0] = "ALL";
    TreeNodeOperator[TreeNodeOperator["ANY"] = 1] = "ANY";
})(TreeNodeOperator || (TreeNodeOperator = {}));
export class FormattedValue extends ResolvedValue {
    constructor(actual, formatted) {
        super();
        this.actual = actual;
        this.formatted = formatted;
    }
    asBoolean() {
        return this.actual.asBoolean();
    }
    asNumber() {
        return this.actual.asNumber();
    }
    asText() {
        return this.actual.asText();
    }
    asFormatted() {
        return this.formatted;
    }
    equals(other) {
        return false;
    }
}
export class TreeNodeValue extends FormattedValue {
    constructor(actual, operator, children) {
        const parts = children.map(child => {
            return child instanceof FormattedValue
                ? child.asFormatted()
                : child.asText();
        }).reverse();
        const operatorText = operator === TreeNodeOperator.ALL ? '; and ' : ', or ';
        const separatorText = operator === TreeNodeOperator.ANY ? ', ' : '; ';
        let formatted = parts.length > 1 ? (parts.slice(0, -1).join(separatorText) + operatorText) : '';
        formatted = formatted + parts[parts.length - 1];
        super(actual, formatted);
        this.operator = operator;
        this.children = children;
    }
    mapChildren(mapFn) {
        return this.children
            .map(mapFn);
    }
    equals(other) {
        return false;
    }
}
function formatNumberOp(a, b, mathFn, textFn) {
    const aName = a instanceof FormattedValue ? a.asFormatted() : a.asText();
    const bName = b instanceof FormattedValue ? b.asFormatted() : b.asText();
    const isTrue = mathFn(a.asNumber(), b.asNumber());
    const text = textFn(aName, bName);
    return new FormattedValue(ResolvedValue.of(isTrue), text);
}
function formatBooleanOp(a, b, mathFn, textFn) {
    const aName = a instanceof FormattedValue ? a.asFormatted() : a.asText();
    const bName = b instanceof FormattedValue ? b.asFormatted() : b?.asText() ?? '';
    const isTrue = mathFn(a.asBoolean(), b?.asBoolean() ?? false);
    const text = textFn(aName, bName);
    return new FormattedValue(ResolvedValue.of(isTrue), text);
}
function createTreeNode(operator, ...children) {
    let actual = undefined;
    switch (operator) {
        case TreeNodeOperator.ALL:
            actual = children.reduce((a, b) => ResolvedValue.of(a.asBoolean() && b.asBoolean()), ResolvedValue.of(true));
            break;
        case TreeNodeOperator.ANY:
            actual = children.reduce((a, b) => ResolvedValue.of(a.asBoolean() || b.asBoolean()), ResolvedValue.of(false));
            break;
    }
    return new TreeNodeValue(actual, operator, children);
}
export default class FormulaFormatter {
    constructor(lookup) {
        this.lookup = lookup;
        this.Parser = ShuntingYard.parser()
            .operator('^', 4, Associativity.Right, 2, (a, b) => ResolvedValue.of(Math.pow(a.asNumber(), b.asNumber())))
            .operator('*', 3, Associativity.Left, 2, (a, b) => ResolvedValue.of(a.asNumber() * b.asNumber()))
            .operator('/', 3, Associativity.Left, 2, (a, b) => ResolvedValue.of(a.asNumber() / b.asNumber()))
            .operator('+', 2, Associativity.Left, 2, (a, b) => ResolvedValue.of(a.asNumber() + b.asNumber()))
            .operator('-', 2, Associativity.Left, 2, (a, b) => ResolvedValue.of((a?.asNumber() ?? 0) - b.asNumber()))
            .operator('!', 2, Associativity.Left, 1, (a) => formatBooleanOp(a, undefined, a => !a, a => `Do not already have ${a}`))
            .operator('<', 3, Associativity.Left, 2, (a, b) => formatNumberOp(a, b, (a, b) => a > b, (a, b) => `${a} less than ${b}`))
            .operator('<=', 3, Associativity.Left, 2, (a, b) => formatNumberOp(a, b, (a, b) => a >= b, (a, b) => `${a} is ${b} or less`))
            .operator('>', 3, Associativity.Left, 2, (a, b) => formatNumberOp(a, b, (a, b) => a > b, (a, b) => `${a} greater than ${b}`))
            .operator('>=', 3, Associativity.Left, 2, (a, b) => formatNumberOp(a, b, (a, b) => a >= b, (a, b) => `${a} ${b}`))
            .operator('==', 3, Associativity.Left, 2, (a, b) => formatNumberOp(a, b, (a, b) => a === b, (a, b) => `${a} is ${b}`))
            .operator('!=', 3, Associativity.Left, 2, (a, b) => formatNumberOp(a, b, (a, b) => a !== b, (a, b) => `${a} is not ${b}`))
            .operator('AND', 1, Associativity.Left, 2, (a, b) => createTreeNode(TreeNodeOperator.ALL, a, b))
            .operator('OR', 1, Associativity.Left, 2, (a, b) => createTreeNode(TreeNodeOperator.ANY, a, b))
            .term('true', () => ResolvedValue.of(true))
            .term('false', () => ResolvedValue.of(false))
            .function('abs', 1, (a) => ResolvedValue.of(Math.abs(a.asNumber())))
            .function('min', 2, (a, b) => ResolvedValue.of(Math.min(a.asNumber(), b.asNumber())))
            .function('max', 2, (a, b) => ResolvedValue.of(Math.max(a.asNumber(), b.asNumber())))
            .function('floor', 1, (a) => ResolvedValue.of(Math.floor(a.asNumber())))
            .function('ceil', 1, (a) => ResolvedValue.of(Math.ceil(a.asNumber())))
            .function('signed', 1, (a) => ResolvedValue.of((a.asNumber() < 0 ? '' : '+') + a.asNumber()))
            .function('if', 3, (a, b, c) => a.asBoolean() ? b : c)
            .function('concat', 2, (a, b) => ResolvedValue.of(a.asText() + b.asText()))
            .varargsFunction('any', (args) => createTreeNode(TreeNodeOperator.ANY, ...args))
            .varargsFunction('all', (args) => createTreeNode(TreeNodeOperator.ALL, ...args))
            .variable('@', '', (state, key) => {
            let actual = state.resolve(key) ?? ResolvedValue.None;
            let name = this.lookup(key);
            if (name) {
                return new FormattedValue(actual, name);
            }
            name = this.lookup(Id.withoutOption(key));
            if (name) {
                const optionName = FormulaFormatter.idPartToName(Id.justOption(key) ?? '');
                return new FormattedValue(actual, `${name} (${optionName})`);
            }
            return new FormattedValue(actual, '???');
        })
            .variable('min(@', ')', (state, key) => {
            const actual = FormulaFormatter.noneIfEmpty(state.search(key))
                .reduce((a, b) => a.asNumber() < b.asNumber() ? a : b);
            return new FormattedValue(actual, '');
        })
            .variable('max(@', ')', (state, key) => {
            const actual = FormulaFormatter.noneIfEmpty(state.search(key))
                .reduce((a, b) => a.asNumber() > b.asNumber() ? a : b);
            return new FormattedValue(actual, '');
        })
            .variable('sum(@', ')', (state, key) => {
            const actual = FormulaFormatter.noneIfEmpty(state.search(key))
                .reduce((a, b) => ResolvedValue.of(a.asNumber() + b.asNumber()));
            return new FormattedValue(actual, `${this.lookup(Id.withoutOption(key))}`);
        })
            .comment('[', ']', (text, value) => {
            return new FormattedValue(value, text);
        });
    }
    format(formula, dataContext) {
        if (formula === undefined) {
            return undefined;
        }
        const formulaText = formula.asFormula();
        let resolved = this.Parser.parse(formulaText).resolve(dataContext);
        if (resolved === undefined) {
            return undefined;
        }
        return resolved instanceof TreeNodeValue ? resolved : new TreeNodeValue(resolved, TreeNodeOperator.ALL, [resolved]);
    }
    static noneIfEmpty(array) {
        return array.length > 0 ? array : [ResolvedValue.None];
    }
    static idPartToName(idPart) {
        return idPart
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
}