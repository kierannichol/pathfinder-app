"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyResolvedTrait = void 0;
exports.traverseTrait = traverseTrait;
const ConditionalResolvedTrait_ts_1 = require("./ConditionalResolvedTrait.ts");
const formula_js_1 = require("@kierannichol/formula-js");
class EmptyResolvedTraitImplementation {
    constructor() {
        this.children = [];
    }
    applyTo(_state) {
        // Do nothing
    }
}
exports.EmptyResolvedTrait = new EmptyResolvedTraitImplementation();
function traverseTrait(trait, state, actionFn) {
    traverseTraitWithDepth(trait, state, 0, actionFn);
}
function traverseTraitWithDepth(trait, state, depth, actionFn) {
    var _a, _b;
    if (trait instanceof ConditionalResolvedTrait_ts_1.ConditionalResolvedTrait) {
        if (!((_b = (_a = formula_js_1.Formula.parse(trait.conditionFormula).resolve(state.asDataContext())) === null || _a === void 0 ? void 0 : _a.asBoolean()) !== null && _b !== void 0 ? _b : false)) {
            return;
        }
    }
    if (!actionFn(trait, depth)) {
        return;
    }
    trait.children.forEach(child => {
        traverseTraitWithDepth(child, state, depth + 1, actionFn);
    });
}
