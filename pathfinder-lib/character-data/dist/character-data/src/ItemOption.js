"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemOption = exports.ItemOptionSummary = void 0;
class ItemOptionSummary {
    constructor(id, name, baseNamePrefix, baseNamePostfix, pointCost, currencyCost, currencyCostByWeight, tags) {
        this.id = id;
        this.name = name;
        this.baseNamePrefix = baseNamePrefix;
        this.baseNamePostfix = baseNamePostfix;
        this.pointCost = pointCost;
        this.currencyCost = currencyCost;
        this.currencyCostByWeight = currencyCostByWeight;
        this.tags = tags;
    }
}
exports.ItemOptionSummary = ItemOptionSummary;
class ItemOption extends ItemOptionSummary {
    constructor(id, name, baseNamePrefix, baseNamePostfix, pointCost, currencyCost, currencyCostByWeight, tags, description) {
        super(id, name, baseNamePostfix, baseNamePostfix, pointCost, currencyCost, currencyCostByWeight, tags);
        this.description = description;
    }
}
exports.ItemOption = ItemOption;
