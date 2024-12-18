"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResolvedEntity = exports.Entity = exports.EntityChoiceSelections = void 0;
const ResolvedEntityContext_ts_1 = require("./ResolvedEntityContext.ts");
const Choice_ts_1 = require("./Choice.ts");
class EntityChoiceSelections {
}
exports.EntityChoiceSelections = EntityChoiceSelections;
class Entity {
    constructor(traits) {
        this.traits = traits;
    }
    async resolve(featureLoader, selections) {
        const context = new ResolvedEntityContext_ts_1.ResolvedEntityContext(featureLoader, selections);
        const resolvedTraits = await Promise.all(this.traits.map(trait => trait.resolve('', context)));
        return new ResolvedEntity(selections, resolvedTraits);
    }
}
exports.Entity = Entity;
class ResolvedEntity {
    constructor(selections, traits) {
        this.selections = selections;
        this.traits = traits;
    }
    get choices() {
        function choices(trait) {
            const found = [];
            if (trait instanceof Choice_ts_1.ResolvedChoice) {
                found.push(trait);
            }
            found.push(...trait.children.flatMap(choices));
            return found;
        }
        return this.traits.flatMap(choices);
    }
    applyTo(state) {
        this.traits.forEach(trait => trait.applyTo(state));
    }
}
exports.ResolvedEntity = ResolvedEntity;
