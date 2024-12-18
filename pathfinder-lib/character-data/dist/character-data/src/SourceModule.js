"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalSourceModule = void 0;
const loader_tsx_1 = require("./loader.ts");
const compiled_1 = require("@/compiled");
const decoder_ts_1 = require("./decoder.ts");
const tags_ts_1 = require("@/utils/tags.ts");
var FeatureDbo = compiled_1.data.FeatureDbo;
class SourceModule {
    query(tags) {
        if (!tags.some(tag => (0, tags_ts_1.hasTag)(Array.from(this.tags), tag))) {
            return [];
        }
        return this.features()
            .filter(summary => tags.some(tag => tag === this.sourceCode || (0, tags_ts_1.hasTag)(summary.tags, tag)));
    }
}
exports.default = SourceModule;
class ExternalSourceModule extends SourceModule {
    static create(sourceCode, title, features) {
        const featuresById = {};
        let tags = new Set();
        for (let feature of features) {
            featuresById[feature.key] = feature;
            for (const tag of feature.tags) {
                tags = tags.add(tag);
            }
        }
        return new ExternalSourceModule(sourceCode, title, featuresById, tags);
    }
    constructor(sourceCode, title, featuresById, tags) {
        super();
        this.sourceCode = sourceCode;
        this.title = title;
        this.featuresById = featuresById;
        this.tags = tags;
        for (const feature of Object.values(featuresById)) {
            feature.source = this;
        }
    }
    features() {
        return Object.values(this.featuresById);
    }
    feature(id) {
        return this.featuresById[id];
    }
    async load(id) {
        const filename = id
            .replace(':', '_')
            .replace('#', '_');
        const dbo = await (0, loader_tsx_1.fetchProto)(`db/${this.sourceCode}/${filename}.bin`, FeatureDbo.decode);
        let feature = (0, decoder_ts_1.decodeFeature)(dbo);
        feature.source = this;
        return feature;
    }
    toString() {
        return "Pathfinder Source Module: " + this.sourceCode;
    }
}
exports.ExternalSourceModule = ExternalSourceModule;
