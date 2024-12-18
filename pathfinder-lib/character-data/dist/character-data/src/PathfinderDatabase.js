"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadBaseCharacterTemplate = loadBaseCharacterTemplate;
exports.initializePathfinderDatabase = initializePathfinderDatabase;
exports.initializePathfinderItemDatabase = initializePathfinderItemDatabase;
const loader_tsx_1 = require("./loader.ts");
const Database_ts_1 = require("./Database.ts");
const decoder_ts_1 = require("./decoder.ts");
const SourceModule_ts_1 = require("./SourceModule.ts");
const compiled_1 = require("@/compiled");
const SourceItemModule_ts_1 = require("./SourceItemModule.ts");
var CharacterTemplateDbo = compiled_1.data.CharacterTemplateDbo;
var SourceModuleDbo = compiled_1.data.SourceModuleDbo;
var SourceBookIndexDbo = compiled_1.data.SourceBookIndexDbo;
async function loadBaseCharacterTemplate() {
    const dbo = await (0, loader_tsx_1.fetchProto)(`db/character_template.bin`, CharacterTemplateDbo.decode);
    return (0, decoder_ts_1.decodeCharacterTemplate)(dbo);
}
async function loadModule(id) {
    const dbo = await (0, loader_tsx_1.fetchProto)(`db/${id}.bin`, SourceModuleDbo.decode);
    return SourceModule_ts_1.ExternalSourceModule.create(dbo.sourceId, dbo.title, dbo.features.map(decoder_ts_1.decodeFeatureSummary));
}
async function loadItemModule(id) {
    return SourceItemModule_ts_1.SourceItemModule.load(id);
}
async function loadSourceBookCodes() {
    const dbo = await (0, loader_tsx_1.fetchProto)('db/source_books.bin', SourceBookIndexDbo.decode);
    return dbo.sourceBookCode;
}
async function initializePathfinderDatabase() {
    const sourceBooks = await loadSourceBookCodes();
    const modules = await Promise.all(sourceBooks.map(loadModule));
    return new Database_ts_1.default(modules);
}
async function initializePathfinderItemDatabase() {
    const sourceBooks = await loadSourceBookCodes();
    const modules = await Promise.all(sourceBooks.map(loadItemModule));
    return new Database_ts_1.ItemDatabase(modules);
}
