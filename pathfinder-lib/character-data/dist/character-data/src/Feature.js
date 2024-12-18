"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResolvedFeature = exports.Feature = exports.FeatureRef = void 0;
const Path_ts_1 = require("@/utils/Path.ts");
const FeatureSummary_ts_1 = require("./FeatureSummary.ts");
const Id_ts_1 = require("@/utils/Id.ts");
class FeatureRef {
    constructor(path, type, name, level, parent) {
        this.path = path;
        this.type = type;
        this.name = name;
        this.level = level;
        this.parent = parent;
    }
}
exports.FeatureRef = FeatureRef;
class Feature extends FeatureSummary_ts_1.FeatureSummary {
    constructor(key, name, label, tags, enabledFormula, maxStacks, optionsQuery, description, traits) {
        super(key, name, label, tags, enabledFormula, maxStacks, optionsQuery);
        this.description = description;
        this.traits = traits;
    }
    async resolve(parent, context) {
        const path = Path_ts_1.Path.combine(parent.path, this.key);
        const ref = new FeatureRef(path, 'feature', this.name, parent.level, parent);
        const resolvedTraits = await Promise.all(this.traits.map(trait => trait.resolve(ref, context)));
        return new ResolvedFeature(this, parent, resolvedTraits);
    }
    option(optionKey, database) {
        if (this.optionsQuery === undefined) {
            return undefined;
        }
        const optionFeature = database.query([this.optionsQuery.tag])
            .find(option => Id_ts_1.default.justKey(option.key) === optionKey);
        return optionFeature !== undefined
            ? this.createOptionFeature(optionFeature)
            : undefined;
    }
    createOptionFeature(optionFeature) {
        var _a;
        const optionsQuery = this.optionsQuery;
        if (!optionsQuery)
            throw new Error("Feature has no options");
        const optionKey = (_a = Id_ts_1.default.justKey(optionFeature.key)) !== null && _a !== void 0 ? _a : '';
        const feature = new Feature(optionsQuery.idTemplate.replace(/\{option.key}/g, optionKey), this.name + ": " + optionFeature.name, optionFeature.label, this.tags, optionsQuery.prerequisitesTemplate.replace(/\{option.key}/g, optionKey), this.maxStacks, undefined, this.description, this.traits);
        feature.source = this.source;
        return feature;
    }
}
exports.Feature = Feature;
class ResolvedFeature {
    constructor(origin, parent, children) {
        this.origin = origin;
        this.parent = parent;
        this.children = children;
    }
    applyTo(state) {
        state.increment(this.origin.key);
        this.children.forEach(trait => trait.applyTo(state));
    }
    get key() {
        return this.origin.key;
    }
    get name() {
        return this.origin.name;
    }
    get label() {
        return this.origin.label;
    }
    get tags() {
        return this.origin.tags;
    }
    get enabledFormula() {
        return this.origin.enabledFormula;
    }
    get maxStacks() {
        return this.origin.maxStacks;
    }
    get description() {
        return this.origin.description;
    }
    get source() {
        return this.origin.source;
    }
    get featureModifications() {
        return this.origin.featureModifications;
    }
}
exports.ResolvedFeature = ResolvedFeature;
