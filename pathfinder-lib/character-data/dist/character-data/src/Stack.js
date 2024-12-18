"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResolvedStack = exports.FeatureStack = exports.Stack = void 0;
const Feature_ts_1 = require("./Feature.ts");
const Link_ts_1 = require("./Link.ts");
class Stack {
    constructor(traits) {
        this.traits = traits;
    }
    instance(featureId, stackNumber) {
        return new FeatureStack(featureId, stackNumber, this.traits);
    }
}
exports.Stack = Stack;
Stack.Empty = new Stack([]);
class FeatureStack {
    constructor(featureId, stackNumber, traits) {
        this.featureId = featureId;
        this.stackNumber = stackNumber;
        this.traits = traits;
    }
    async resolve(parent, context) {
        context.registerStackRef(this.featureId, this.stackNumber, parent);
        const modifications = context.modifications(this.featureId, this.stackNumber);
        const resolvedTraits = await Promise.all([
            ...this.traits.filter(trait => !this.isForbidden(trait, context)),
            ...modifications.flatMap(modification => modification.linksToAdd)
        ]
            .map(trait => trait.resolve(parent, context)));
        return new ResolvedStack(this.featureId, this.stackNumber, resolvedTraits);
    }
    isForbidden(trait, context) {
        if (trait instanceof Link_ts_1.Link) {
            return context.forbidAddFeature(this.featureId, this.stackNumber, trait.key);
        }
        if (trait instanceof Feature_ts_1.Feature) {
            return context.forbidAddFeature(this.featureId, this.stackNumber, trait.key);
        }
        return false;
    }
}
exports.FeatureStack = FeatureStack;
class ResolvedStack {
    constructor(featureId, stackNumber, children) {
        this.featureId = featureId;
        this.stackNumber = stackNumber;
        this.children = children;
    }
    applyTo(state) {
        this.children.forEach(child => child.applyTo(state));
    }
}
exports.ResolvedStack = ResolvedStack;
