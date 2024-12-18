"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equipment = exports.EquipmentSet = void 0;
const uuid_1 = require("uuid");
const tags_ts_1 = require("@/utils/tags.ts");
class EquipmentSet {
    static unpack(itemDb, packed) {
        var _a, _b, _c, _d;
        return new EquipmentSet(packed.id, packed.name, (_a = packed.budget) !== null && _a !== void 0 ? _a : undefined, (_b = packed.priceLimit) !== null && _b !== void 0 ? _b : undefined, (_d = (_c = packed.equipment) === null || _c === void 0 ? void 0 : _c.map(data => {
            try {
                return Equipment.unpack(itemDb, data);
            }
            catch (e) {
                console.warn("Failed to load equipment; skipping", e);
                return undefined;
            }
        }).filter(data => data !== undefined)) !== null && _d !== void 0 ? _d : [], itemDb);
    }
    pack() {
        var _a, _b;
        console.log(this);
        return {
            id: this.id,
            name: this.name,
            budget: (_a = this.budget) !== null && _a !== void 0 ? _a : null,
            priceLimit: (_b = this.priceLimit) !== null && _b !== void 0 ? _b : null,
            equipment: this.equipment.map(e => e.pack())
        };
    }
    constructor(id, name, budget, priceLimit, equipment, itemDatabase) {
        this.id = id;
        this.name = name;
        this.budget = budget;
        this.priceLimit = priceLimit;
        this.equipment = equipment;
        this.itemDatabase = itemDatabase;
    }
    static create(name, itemDatabase) {
        return new EquipmentSet((0, uuid_1.v4)(), name, undefined, undefined, [], itemDatabase);
    }
    setBudget(value) {
        return new EquipmentSet(this.id, this.name, value, this.priceLimit, this.equipment, this.itemDatabase);
    }
    setPriceLimit(value) {
        return new EquipmentSet(this.id, this.name, this.budget, value, this.equipment, this.itemDatabase);
    }
    setEquipment(equipment) {
        return new EquipmentSet(this.id, this.name, this.budget, this.priceLimit, equipment, this.itemDatabase);
    }
    add(itemId, optionIds) {
        const item = this.itemDatabase.summary(itemId);
        const options = this.itemDatabase.options(optionIds);
        if (!item) {
            console.error("No item found with ID #" + itemId);
            return this;
        }
        return this.setEquipment([...this.equipment, Equipment.create(item, true, options, this.itemDatabase)]);
    }
}
exports.EquipmentSet = EquipmentSet;
class Equipment {
    static unpack(itemDb, packed) {
        const [id, included, quantity, ...optionIds] = packed;
        const item = itemDb.summary(id);
        if (!item)
            throw new Error("Unknown item ID: " + id);
        const options = optionIds
            .map(oid => itemDb.option(oid))
            .filter(opt => opt !== undefined);
        return Equipment.create(item, included === 1, options, itemDb, quantity);
    }
    static create(item, included, options, itemDb, quantity = 1) {
        var _a;
        let name = item.name;
        for (let option of options) {
            if (option.baseNamePrefix.length > 0)
                name = option.baseNamePrefix + ' ' + name;
            if (option.baseNamePostfix.length > 0)
                name = name + ' ' + option.baseNamePostfix;
        }
        let cost = item.cost;
        for (let option of options) {
            cost += option.currencyCost;
            // cost += option.currencyCostByWeight * item.weight;
        }
        for (let optionSetId of item.optionSetIds) {
            const optionSet = itemDb.optionSet(optionSetId);
            if (!optionSet)
                continue;
            let points = 0;
            for (let option of options) {
                for (let optionGroup of optionSet.optionGroups) {
                    if ((0, tags_ts_1.matchTags)(optionGroup.optionTags, option.tags)) {
                        points += option.pointCost;
                        break;
                    }
                }
            }
            if (points > 0) {
                cost += (_a = optionSet === null || optionSet === void 0 ? void 0 : optionSet.pointCurrencyCosts[points]) !== null && _a !== void 0 ? _a : 0;
            }
        }
        // const optionSet = itemDb.optionSet(item.optionSetId);
        // cost += optionSet?.pointCurrencyCosts[points] ?? 0;
        return new Equipment((0, uuid_1.v4)(), name, cost, item.weight, item, options, included, quantity);
    }
    pack() {
        return [this.item.itemId,
            this.included ? 1 : 0,
            this.quantity,
            ...this.options.map(o => o.id)];
    }
    constructor(uid, name, cost, weight, item, options, included, quantity = 1) {
        this.uid = uid;
        this.name = name;
        this.cost = cost;
        this.weight = weight;
        this.item = item;
        this.options = options;
        this.included = included;
        this.quantity = quantity;
    }
    get totalCost() {
        return this.cost * this.quantity;
    }
    include(include) {
        return new Equipment(this.uid, this.name, this.cost, this.weight, this.item, this.options, include, this.quantity);
    }
    changeQuantity(quantity) {
        return new Equipment(this.uid, this.name, this.cost, this.weight, this.item, this.options, this.included, quantity);
    }
    duplicate() {
        return new Equipment((0, uuid_1.v4)(), this.name, this.cost, this.weight, this.item, this.options, this.included, this.quantity);
    }
}
exports.Equipment = Equipment;
