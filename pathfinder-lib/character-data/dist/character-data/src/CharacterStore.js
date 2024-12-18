"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseCharacterStore = void 0;
const firebase_ts_1 = require("@/app/firebase.ts");
const auth_tsx_1 = require("@/app/auth.tsx");
const Character_ts_1 = require("./Character.ts");
const pfutils_ts_1 = require("@/app/pfutils.ts");
const CharacterSummary_ts_1 = require("./CharacterSummary.ts");
const uuid_1 = require("uuid");
class CharacterStore {
    constructor(template, database) {
        this.template = template;
        this.database = database;
    }
    async list() {
        const packedList = await this.loadAllPacked();
        return await Promise.all(packedList.map(packed => new CharacterSummary_ts_1.default(packed.id, packed.selections['character_name'], packed.selections['favored_class'])));
    }
    async load(id) {
        const packed = await this.loadPacked(id);
        if (!packed)
            return;
        return await this.unpack(packed);
    }
    async save(character) {
        const packed = character.pack();
        return this.savePacked(packed);
    }
    async create(selections) {
        const id = (0, uuid_1.v4)();
        let newCharacter = Character_ts_1.default.create(id, this.template, this.database);
        newCharacter = await newCharacter.selectAll(selections);
        console.log(newCharacter);
        await this.save(newCharacter);
        return newCharacter;
    }
    async delete(id) {
        await this.deletePacked(id);
    }
    async unpack(packed) {
        const character = Character_ts_1.default.create(packed.id, this.template, this.database);
        return await character.selectAll(packed.selections);
    }
}
exports.default = CharacterStore;
class FirebaseCharacterStore extends CharacterStore {
    constructor(template, database) {
        super(template, database);
    }
    async loadPacked(id) {
        var _a;
        const user = (0, auth_tsx_1.getActiveUser)();
        if (!user) {
            console.warn("Unable to access Firebase: no user logged in");
            return;
        }
        const data = await (0, pfutils_ts_1.timedAsync)(() => firebase_ts_1.FirebaseRepository.load(user.id, 'character', id), 'Loading from Firebase');
        if (!data) {
            console.warn("No character found for: " + id);
            return;
        }
        return {
            id: data.id,
            selections: (_a = data.selections) !== null && _a !== void 0 ? _a : data.choices
        };
    }
    async loadAllPacked() {
        var _a;
        const user = (0, auth_tsx_1.getActiveUser)();
        if (!user) {
            console.warn("Unable to access Firebase: no user logged in");
            return [];
        }
        const loaded = (_a = await firebase_ts_1.FirebaseRepository.loadAll(user.id, 'character')) !== null && _a !== void 0 ? _a : [];
        return loaded
            .map((data) => {
            var _a;
            return {
                id: data.id,
                selections: (_a = data.selections) !== null && _a !== void 0 ? _a : data.choices
            };
        });
    }
    async savePacked(packed) {
        const user = (0, auth_tsx_1.getActiveUser)();
        if (!user) {
            console.warn("Unable to access Firebase: no user logged in");
            return;
        }
        await firebase_ts_1.FirebaseRepository.save(user.id, 'character', packed.id, packed);
    }
    async deletePacked(id) {
        const user = (0, auth_tsx_1.getActiveUser)();
        if (!user) {
            console.warn("Unable to access Firebase: no user logged in");
            return;
        }
        await firebase_ts_1.FirebaseRepository.delete(user.id, 'character', id);
    }
}
exports.FirebaseCharacterStore = FirebaseCharacterStore;
