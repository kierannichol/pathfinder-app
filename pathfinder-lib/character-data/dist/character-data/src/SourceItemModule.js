"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceItemModule = void 0;
const loader_tsx_1 = require("./loader.ts");
const compiled_1 = require("@/compiled");
const decoder_ts_1 = require("./decoder.ts");
var ItemDbo = compiled_1.data.ItemDbo;
var SourceModuleItemDatabaseDbo = compiled_1.data.SourceModuleItemDatabaseDbo;
var ItemOptionDbo = compiled_1.data.ItemOptionDbo;
class SourceItemModule {
    static async load(sourceCode) {
        const dbo = await (0, loader_tsx_1.fetchProto)(`db/${sourceCode}_items.bin`, SourceModuleItemDatabaseDbo.decode);
        const summaries = dbo.items.map(i => (0, decoder_ts_1.decodeItemSummary)(i, dbo.sourceId));
        const summaryMap = {};
        summaries.forEach(summary => summaryMap[summary.itemId] = summary);
        const optionMap = {};
        dbo.options.forEach(optionDbo => {
            const option = (0, decoder_ts_1.decodeItemOptionSummary)(optionDbo);
            optionMap[option.id] = option;
        });
        const optionSetMap = {};
        dbo.optionSets.forEach(optionSetDbo => {
            const optionSet = (0, decoder_ts_1.decodeItemOptionSet)(optionSetDbo);
            optionSetMap[optionSet.id] = optionSet;
        });
        return new SourceItemModule(dbo.sourceId, sourceCode, summaryMap, optionMap, optionSetMap);
    }
    constructor(sourceId, sourceCode, summaryById, optionsById, optionSetsById) {
        this.sourceId = sourceId;
        this.sourceCode = sourceCode;
        this.summaryById = summaryById;
        this.optionsById = optionsById;
        this.optionSetsById = optionSetsById;
    }
    summaries() {
        return Object.values(this.summaryById);
    }
    async load(id) {
        const filename = id.toString();
        const dbo = await (0, loader_tsx_1.fetchProto)(`db/${this.sourceCode}/${filename}.bin`, ItemDbo.decode);
        return (0, decoder_ts_1.decodeItem)(dbo, this.sourceId);
    }
    item(id) {
        return this.summaryById[id];
    }
    option(optionId) {
        return this.optionsById[optionId];
    }
    optionSet(optionSetId) {
        return this.optionSetsById[optionSetId];
    }
    options() {
        return Object.values(this.optionsById);
    }
    async optionDetails(optionId) {
        const filename = optionId.toString();
        const dbo = await (0, loader_tsx_1.fetchProto)(`db/${this.sourceCode}/${filename}.bin`, ItemOptionDbo.decode);
        return (0, decoder_ts_1.decodeItemOption)(dbo);
    }
    toString() {
        return "Item Source Module: " + this.sourceCode;
    }
}
exports.SourceItemModule = SourceItemModule;
