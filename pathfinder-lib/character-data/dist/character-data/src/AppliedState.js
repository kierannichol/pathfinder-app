"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formula_js_1 = require("@kierannichol/formula-js");
class AppliedState {
    constructor(withoutChoicePath = undefined) {
        this.withoutChoicePath = withoutChoicePath;
        this.stackCounts = {};
        this.rawState = {};
        this.dataContext = formula_js_1.DataContext.of(this.rawState);
    }
    increment(key, amount = 1) {
        var _a;
        const current = this.getAsNumber(key);
        this.stackCounts[key] = ((_a = this.stackCounts[key]) !== null && _a !== void 0 ? _a : 0) + 1;
        this.set(key, current + amount);
    }
    set(key, value) {
        this.dataContext.set(key, value);
        if (typeof value === "number") {
            this.stackCounts[key] = value;
        }
        else {
            this.stackCounts[key] = 1;
        }
    }
    getAsNumber(key) {
        var _a, _b;
        return (_b = (_a = this.dataContext.resolve(key)) === null || _a === void 0 ? void 0 : _a.asNumber()) !== null && _b !== void 0 ? _b : 0;
    }
    asDataContext() {
        return this.dataContext;
    }
}
exports.default = AppliedState;
