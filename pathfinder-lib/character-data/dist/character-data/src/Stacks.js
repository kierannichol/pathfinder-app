"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConditionalStack = exports.RepeatingStack = exports.FixedStack = void 0;
const Stack_ts_1 = require("./Stack.ts");
const ConditionalResolvedTrait_ts_1 = require("./ConditionalResolvedTrait.ts");
class FixedStack {
    constructor(featureId, stacks) {
        this.featureId = featureId;
        this.stacks = stacks;
    }
    next(count) {
        var _a;
        return ((_a = this.stacks[count - 1]) !== null && _a !== void 0 ? _a : Stack_ts_1.Stack.Empty).instance(this.featureId, count);
    }
    resolve(parent, context) {
        const count = context.count(this.featureId);
        return this.next(count).resolve(parent, context);
    }
}
exports.FixedStack = FixedStack;
class RepeatingStack {
    constructor(featureId, stack) {
        this.featureId = featureId;
        this.stack = stack;
    }
    async resolve(parent, context) {
        const count = context.count(this.featureId);
        return this.stack
            .instance(this.featureId, count + 1)
            .resolve(parent, context);
    }
}
exports.RepeatingStack = RepeatingStack;
class ConditionalStack {
    constructor(featureId, whenFormula, stack) {
        this.featureId = featureId;
        this.whenFormula = whenFormula;
        this.stack = stack;
    }
    async resolve(parent, context) {
        const resolvedStack = await this.stack.instance(this.featureId, 1).resolve(parent, context);
        return new Stack_ts_1.ResolvedStack(resolvedStack.featureId, resolvedStack.stackNumber, resolvedStack.children.map(child => new ConditionalResolvedTrait_ts_1.ConditionalResolvedTrait(this.whenFormula, child)));
    }
}
exports.ConditionalStack = ConditionalStack;
