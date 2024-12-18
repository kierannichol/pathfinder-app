"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    constructor(itemId, sourceId, name, cost, weight, tags, optionSetIds, description) {
        this.itemId = itemId;
        this.sourceId = sourceId;
        this.name = name;
        this.cost = cost;
        this.weight = weight;
        this.tags = tags;
        this.optionSetIds = optionSetIds;
        this.description = description;
    }
}
exports.Item = Item;
