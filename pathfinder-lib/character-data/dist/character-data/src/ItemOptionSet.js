"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemOptionSet = void 0;
class ItemOptionSet {
    constructor(id, hasPoints, hasMaxPoints, maxPoints, pointCurrencyCosts, optionGroups) {
        this.id = id;
        this.hasPoints = hasPoints;
        this.hasMaxPoints = hasMaxPoints;
        this.maxPoints = maxPoints;
        this.pointCurrencyCosts = pointCurrencyCosts;
        this.optionGroups = optionGroups;
    }
    calculatePointsUsed(options) {
        let points = 0;
        for (const option of options) {
            if (!this.hasOption(option))
                continue;
            points += option.pointCost;
        }
        return points;
    }
    hasOption(option) {
        return this.optionGroups.some(group => group.hasOption(option));
    }
}
exports.ItemOptionSet = ItemOptionSet;
