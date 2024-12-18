"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipmentSetStoreContext = exports.CharacterStoreContext = exports.ItemDatabaseContext = exports.DatabaseContext = void 0;
exports.useDatabase = useDatabase;
exports.useItemDatabase = useItemDatabase;
exports.useCharacterStore = useCharacterStore;
exports.useEquipmentSetStore = useEquipmentSetStore;
const react_1 = require("react");
// DATABASE
exports.DatabaseContext = (0, react_1.createContext)(undefined);
function useDatabase() {
    const db = (0, react_1.useContext)(exports.DatabaseContext);
    if (db === undefined) {
        throw new Error("Context must be used within a Provider");
    }
    return db;
}
// ITEM DATABASE
exports.ItemDatabaseContext = (0, react_1.createContext)(undefined);
function useItemDatabase() {
    const db = (0, react_1.useContext)(exports.ItemDatabaseContext);
    if (db === undefined) {
        throw new Error("Context must be used within a Provider");
    }
    return db;
}
// CHARACTER STORE
exports.CharacterStoreContext = (0, react_1.createContext)(undefined);
function useCharacterStore() {
    const value = (0, react_1.useContext)(exports.CharacterStoreContext);
    if (value === undefined) {
        throw new Error("Context must be used within a Provider");
    }
    return value;
}
// EQUIPMENT SET STORE
exports.EquipmentSetStoreContext = (0, react_1.createContext)(undefined);
function useEquipmentSetStore() {
    const value = (0, react_1.useContext)(exports.EquipmentSetStoreContext);
    if (value === undefined) {
        throw new Error("Context must be used within a Provider");
    }
    return value;
}
