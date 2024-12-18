"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemSummary = void 0;
class ItemSummary {
    constructor(dbo, sourceId) {
        this.dbo = dbo;
        this.sourceId = sourceId;
    }
    get itemId() {
        return this.dbo.id;
    }
    get name() {
        return this.dbo.name;
    }
    get cost() {
        return this.dbo.cost;
    }
    get weight() {
        return this.dbo.weight;
    }
    get tags() {
        return this.dbo.tags;
    }
    get optionSetIds() {
        var _a;
        return (_a = this.dbo.optionSets) !== null && _a !== void 0 ? _a : [];
    }
    // constructor(public readonly itemId: number,
    //             public readonly sourceId: number,
    //             public readonly name: string,
    //             public readonly cost: number,
    //             public readonly weight: number,
    //             public readonly tags: string[],
    //             public readonly optionSetIds: number[]) {
    // }
    get hasOptions() {
        return this.optionSetIds.length > 0;
    }
    get uid() {
        return this.itemId.toString();
    }
}
exports.ItemSummary = ItemSummary;
