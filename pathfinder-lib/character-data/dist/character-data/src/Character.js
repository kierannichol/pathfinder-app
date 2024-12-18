"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharacterAtLevel_ts_1 = require("./CharacterAtLevel.ts");
const pfutils_ts_1 = require("@/app/pfutils.ts");
const Feature_ts_1 = require("./Feature.ts");
const Choice_ts_1 = require("./Choice.ts");
const AppliedState_ts_1 = require("./AppliedState.ts");
class Character {
    get name() {
        var _a;
        return (_a = this.selected('character_name')) !== null && _a !== void 0 ? _a : '';
    }
    static create(id, template, database) {
        return new Character(id, template, database, {}, undefined);
    }
    constructor(id, template, database, selections, resolvedEntity = undefined) {
        this.id = id;
        this.template = template;
        this.database = database;
        this.selections = selections;
        this.resolvedTemplate = resolvedEntity;
    }
    atLevel(level, withoutChoicePath = undefined) {
        var _a;
        const state = new AppliedState_ts_1.default(withoutChoicePath);
        state.set('character_level', level);
        const templateAtLevel = (_a = this.resolvedTemplate) === null || _a === void 0 ? void 0 : _a.atLevel(level);
        templateAtLevel === null || templateAtLevel === void 0 ? void 0 : templateAtLevel.applyTo(state);
        const featuresByKey = {};
        const choices = [];
        templateAtLevel === null || templateAtLevel === void 0 ? void 0 : templateAtLevel.traverse(state, (descendant) => {
            if (descendant instanceof Feature_ts_1.ResolvedFeature) {
                const feature = descendant;
                if (state.getAsNumber(feature.key) <= 0) {
                    return false;
                }
                featuresByKey[feature.key] = feature;
            }
            if (descendant instanceof Choice_ts_1.ResolvedChoice) {
                choices.push(descendant);
                if (descendant.path === withoutChoicePath) {
                    return false;
                }
            }
            return true;
        });
        const features = Object.values(featuresByKey);
        return new CharacterAtLevel_ts_1.default(level, this, features, state.rawState, choices);
    }
    pack() {
        return {
            id: this.id,
            selections: this.selections
        };
    }
    selected(choiceId) {
        return this.selections[choiceId];
    }
    async select(key, value) {
        return this.selectAll({ [key]: value });
    }
    async selectAll(choiceSelections) {
        const allSelections = {
            ...this.selections,
            ...choiceSelections
        };
        for (let key in allSelections) {
            if (Array.isArray(allSelections[key])) {
                allSelections[key] = allSelections[key].filter(v => v !== undefined && v !== '');
            }
        }
        const resolved = await (0, pfutils_ts_1.timedAsync)(() => this.template.resolve(this.database, allSelections), 'Resolving Character');
        return new Character(this.id, this.template, this.database, allSelections, resolved);
    }
}
exports.default = Character;
