"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withGlobalCharacterStore = withGlobalCharacterStore;
exports.withGlobalEquipmentSetStore = withGlobalEquipmentSetStore;
exports.withGlobalDatabase = withGlobalDatabase;
exports.withGlobalItemDatabase = withGlobalItemDatabase;
const CharacterStore_ts_1 = require("./CharacterStore.ts");
const PathfinderDatabase_tsx_1 = require("./PathfinderDatabase.ts");
const EquipmentSetStore_ts_1 = require("./EquipmentSetStore.ts");
let globalDatabase = undefined;
let globalItemDatabase = undefined;
let globalCharacterStore = undefined;
let globalEquipmentSetStore = undefined;
async function initializeCharacterStore() {
    const template = await (0, PathfinderDatabase_tsx_1.loadBaseCharacterTemplate)();
    const database = await withGlobalDatabase();
    return new CharacterStore_ts_1.FirebaseCharacterStore(template, database);
}
async function initializeEquipmentSetStore() {
    const database = await withGlobalItemDatabase();
    return new EquipmentSetStore_ts_1.FirebaseEquipmentSetStore(database);
}
async function withGlobalCharacterStore() {
    if (!globalCharacterStore) {
        globalCharacterStore = initializeCharacterStore();
    }
    return globalCharacterStore;
}
async function withGlobalEquipmentSetStore() {
    if (!globalEquipmentSetStore) {
        globalEquipmentSetStore = initializeEquipmentSetStore();
    }
    return globalEquipmentSetStore;
}
function withGlobalDatabase() {
    if (!globalDatabase) {
        globalDatabase = (0, PathfinderDatabase_tsx_1.initializePathfinderDatabase)();
    }
    return globalDatabase;
}
function withGlobalItemDatabase() {
    if (!globalItemDatabase) {
        globalItemDatabase = (0, PathfinderDatabase_tsx_1.initializePathfinderItemDatabase)();
    }
    return globalItemDatabase;
}
