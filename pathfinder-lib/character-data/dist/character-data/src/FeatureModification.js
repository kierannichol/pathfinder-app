"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackModification = exports.FeatureModification = void 0;
const Trait_ts_1 = require("./Trait.ts");
class FeatureModification {
    constructor(targetFeatureId, stackModifications) {
        this.targetFeatureId = targetFeatureId;
        this.stackModifications = stackModifications;
    }
    async resolve(parent, context) {
        let shouldRestart = false;
        for (let modification of this.stackModifications) {
            if (modification.register(parent, context)) {
                shouldRestart = true;
            }
        }
        if (shouldRestart) {
            context.restartResolve();
        }
        return Trait_ts_1.EmptyResolvedTrait;
    }
}
exports.FeatureModification = FeatureModification;
class StackModification {
    constructor(targetFeatureId, targetStackCount, linksToAdd, linksToRemove) {
        this.targetFeatureId = targetFeatureId;
        this.targetStackCount = targetStackCount;
        this.linksToAdd = linksToAdd;
        this.linksToRemove = linksToRemove;
    }
    async resolve(parent, context) {
        this.register(parent, context);
        context.restartResolve();
        return Trait_ts_1.EmptyResolvedTrait;
    }
    register(parent, context) {
        const key = parent.path + ">" + this.targetFeatureId + ">" + this.targetStackCount;
        return context.registerModification(key, this);
    }
    forbidAddFeature(featureToAddKey) {
        return this.linksToRemove.includes(featureToAddKey);
    }
}
exports.StackModification = StackModification;
