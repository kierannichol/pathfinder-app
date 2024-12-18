"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseEquipmentSetStore = exports.EquipmentSetStore = void 0;
const auth_tsx_1 = require("@/app/auth.tsx");
const pfutils_ts_1 = require("@/app/pfutils.ts");
const firebase_ts_1 = require("@/app/firebase.ts");
const Equipment_ts_1 = require("./Equipment.ts");
class EquipmentSetStore {
    constructor(database) {
        this.database = database;
    }
    async list() {
        const packedList = await this.loadAllPacked();
        return await Promise.all(packedList.map(packed => Equipment_ts_1.EquipmentSet.unpack(this.database, packed)));
    }
    async load(id) {
        const packed = await this.loadPacked(id);
        if (!packed)
            return;
        return await this.unpack(packed);
    }
    async save(equipmentSet) {
        const packed = equipmentSet.pack();
        return this.savePacked(packed);
    }
    async create(name) {
        let newEquipmentSet = Equipment_ts_1.EquipmentSet.create(name, this.database);
        await this.save(newEquipmentSet);
        return newEquipmentSet;
    }
    async delete(id) {
        await this.deletePacked(id);
    }
    async unpack(packed) {
        return Equipment_ts_1.EquipmentSet.unpack(this.database, packed);
    }
}
exports.EquipmentSetStore = EquipmentSetStore;
class FirebaseEquipmentSetStore extends EquipmentSetStore {
    constructor(database) {
        super(database);
    }
    async loadPacked(id) {
        const user = (0, auth_tsx_1.getActiveUser)();
        if (!user) {
            console.warn("Unable to access Firebase: no user logged in");
            return;
        }
        const data = await (0, pfutils_ts_1.timedAsync)(() => firebase_ts_1.FirebaseRepository.load(user.id, 'equipment', id), 'Loading from Firebase');
        if (!data) {
            console.warn("No Equipment Set found for: " + id);
            return;
        }
        return {
            id: data.id,
            name: data.name,
            budget: data.budget,
            priceLimit: data.priceLimit,
            equipment: data.equipment
        };
    }
    async loadAllPacked() {
        var _a;
        const user = (0, auth_tsx_1.getActiveUser)();
        if (!user) {
            console.warn("Unable to access Firebase: no user logged in");
            return [];
        }
        const loaded = (_a = await firebase_ts_1.FirebaseRepository.loadAll(user.id, 'equipment')) !== null && _a !== void 0 ? _a : [];
        return loaded
            .map((data) => {
            return {
                id: data.id,
                name: data.name,
                budget: data.budget,
                priceLimit: data.priceLimit,
                equipment: data.equipment
            };
        });
    }
    async savePacked(packed) {
        const user = (0, auth_tsx_1.getActiveUser)();
        if (!user) {
            console.warn("Unable to access Firebase: no user logged in");
            return;
        }
        await firebase_ts_1.FirebaseRepository.save(user.id, 'equipment', packed.id, packed);
    }
    async deletePacked(id) {
        const user = (0, auth_tsx_1.getActiveUser)();
        if (!user) {
            console.warn("Unable to access Firebase: no user logged in");
            return;
        }
        await firebase_ts_1.FirebaseRepository.delete(user.id, 'equipment', id);
    }
}
exports.FirebaseEquipmentSetStore = FirebaseEquipmentSetStore;
