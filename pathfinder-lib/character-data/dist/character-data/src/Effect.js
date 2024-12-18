"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddEffect = exports.SetNumberEffect = exports.SetTextEffect = exports.SetFormulaEffect = void 0;
const formula_js_1 = require("@kierannichol/formula-js");
class SetFormulaEffect {
    constructor(targetKey, formula) {
        this.targetKey = targetKey;
        this.formula = formula;
        this.children = [];
    }
    applyTo(state) {
        try {
            state.set(this.targetKey, formula_js_1.Formula.parse(this.formula));
        }
        catch (e) {
            console.error("Unable to parse: " + this.formula);
            throw e;
        }
    }
    async resolve() {
        return this;
    }
}
exports.SetFormulaEffect = SetFormulaEffect;
class SetTextEffect {
    constructor(targetKey, value) {
        this.targetKey = targetKey;
        this.value = value;
        this.children = [];
    }
    applyTo(state) {
        state.set(this.targetKey, this.value);
    }
    async resolve() {
        return this;
    }
}
exports.SetTextEffect = SetTextEffect;
class SetNumberEffect {
    constructor(targetKey, value) {
        this.targetKey = targetKey;
        this.value = value;
        this.children = [];
    }
    applyTo(state) {
        state.set(this.targetKey, this.value);
    }
    async resolve() {
        return this;
    }
}
exports.SetNumberEffect = SetNumberEffect;
class AddEffect {
    constructor(targetKey, delta) {
        this.targetKey = targetKey;
        this.delta = delta;
        this.children = [];
    }
    applyTo(state) {
        state.increment(this.targetKey, this.delta);
    }
    async resolve() {
        return this;
    }
}
exports.AddEffect = AddEffect;
