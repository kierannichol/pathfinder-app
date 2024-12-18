"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResolvedEntityContext = void 0;
const formula_js_1 = require("@kierannichol/formula-js");
const RestartApplyState_ts_1 = require("./RestartApplyState.ts");
class ResolvedEntityContext extends formula_js_1.BaseDataContext {
    get(key) {
        return formula_js_1.Resolvable.just(this.count(key));
    }
    keys() {
        return Object.keys(this.counts);
    }
    constructor(featureLoader, selections) {
        super();
        this.featureLoader = featureLoader;
        this.selections = selections;
        this.cache = {};
        this.counts = {};
        this.stackRefs = {};
        this.stackModifications = {};
    }
    async feature(key) {
        const cached = this.cache[key];
        if (cached !== undefined) {
            return cached;
        }
        const loaded = await this.featureLoader(key);
        if (loaded !== undefined) {
            this.cache[key] = loaded;
        }
        return loaded;
    }
    selection(path) {
        return this.selections[path];
    }
    swapSelections(path1, path2) {
        const temp = this.selections[path1];
        this.selections[path1] = this.selections[path2];
        this.selections[path2] = temp;
        if (this.selections[path1] === undefined || this.selections[path1] === '') {
            delete this.selections[path1];
        }
        if (this.selections[path2] === undefined || this.selections[path2] === '') {
            delete this.selections[path2];
        }
    }
    register(id, count = 1) {
        var _a;
        if (id)
            this.counts[id] = ((_a = this.counts[id]) !== null && _a !== void 0 ? _a : 0) + count;
    }
    count(id) {
        var _a;
        return (_a = this.counts[id]) !== null && _a !== void 0 ? _a : 0;
    }
    registerStackRef(featureId, stackCount, ref) {
        this.stackRefs[featureId + ":" + stackCount] = ref;
    }
    getStackRef(featureId, stackCount) {
        return this.stackRefs[featureId + ":" + stackCount];
    }
    hasModification(modificationKey) {
        return modificationKey in this.stackModifications;
    }
    registerModification(modificationKey, modification) {
        if (this.hasModification(modificationKey)) {
            return false;
        }
        this.stackModifications[modificationKey] = modification;
        return true;
    }
    restartResolve() {
        this.counts = {};
        this.stackRefs = {};
        throw RestartApplyState_ts_1.RestartApplyState;
    }
    forbidAddFeature(parentKey, parentStackCount, featureToAddKey) {
        return this.modifications(parentKey, parentStackCount)
            .find(entry => entry.forbidAddFeature(featureToAddKey)) !== undefined;
    }
    modifications(featureId, stackNumber) {
        return Object.values(this.stackModifications).filter(mod => mod.targetFeatureId === featureId
            && mod.targetStackCount === stackNumber);
    }
}
exports.ResolvedEntityContext = ResolvedEntityContext;
