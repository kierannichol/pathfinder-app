"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConditionalResolvedTrait = void 0;
const formula_js_1 = require("@kierannichol/formula-js");
class ConditionalResolvedTrait {
    constructor(conditionFormula, resolvedTrait) {
        this.conditionFormula = conditionFormula;
        this.resolvedTrait = resolvedTrait;
    }
    get children() {
        return [this.resolvedTrait];
    }
    applyTo(state) {
        var _a;
        if ((_a = formula_js_1.Formula.parse(this.conditionFormula).resolve(state.asDataContext())) === null || _a === void 0 ? void 0 : _a.asBoolean()) {
            this.resolvedTrait.applyTo(state);
        }
    }
}
exports.ConditionalResolvedTrait = ConditionalResolvedTrait;
