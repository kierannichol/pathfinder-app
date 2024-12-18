"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tags_1 = require("../../utils/src/tags");
const formula_js_1 = require("@kierannichol/formula-js");
const array_1 = require("../../utils/src/array");
const Expression_1 = require("../../utils/src/logic/Expression");
class CharacterAtLevel extends formula_js_1.BaseDataContext {
    constructor(level, character, features = [], state = {}, choices = []) {
        super();
        this.level = level;
        this.character = character;
        this.features = features;
        this.state = state;
        this.choices = choices;
    }
    selected(choice, index) {
        var _a, _b;
        if (!(typeof choice === 'string')) {
            choice = choice.path;
        }
        const value = (_a = this.character.selected(choice)) !== null && _a !== void 0 ? _a : '';
        if (index === undefined) {
            return value !== null && value !== void 0 ? value : '';
        }
        return (_b = (0, array_1.array)(value)[index]) !== null && _b !== void 0 ? _b : '';
    }
    hasSelection(choice) {
        return this.selected(choice) !== '';
    }
    choice(id) {
        return this.choices
            .find(choice => choice.path === id);
    }
    choicesOfType(...tags) {
        return this.choices
            .filter(choice => tags.some(tag => (0, tags_1.hasTag)(choice.tags, tag)));
    }
    modify(modifyFn) {
        const copy = { ...this.state };
        modifyFn(copy);
        return new CharacterAtLevel(this.level, this.character, this.features, copy, this.choices);
    }
    get(key) {
        if (key.includes('{')) {
            return Expression_1.default.parse(key);
        }
        let result = this.state[key];
        if (result === undefined) {
            return formula_js_1.Resolvable.None;
        }
        if (typeof result === 'string') {
            if (result.includes('{')) {
                return Expression_1.default.parse(result);
            }
        }
        if (result instanceof formula_js_1.Resolvable) {
            return result;
        }
        if (result === "") {
            return formula_js_1.Resolvable.None;
        }
        return formula_js_1.Resolvable.just(result);
    }
    has(key) {
        return key in this.state;
    }
    keys() {
        return Object.keys(this.state);
    }
    diff(otherLevel) {
        var _a, _b, _c, _d;
        const intersectedState = { ...this.state };
        for (const key of otherLevel.keys()) {
            try {
                const newer = (_b = (_a = this.resolve(key)) === null || _a === void 0 ? void 0 : _a.asNumber()) !== null && _b !== void 0 ? _b : 0;
                const older = (_d = (_c = otherLevel.resolve(key)) === null || _c === void 0 ? void 0 : _c.asNumber()) !== null && _d !== void 0 ? _d : 0;
                if (newer - older > 0) {
                    continue;
                }
                delete intersectedState[key];
            }
            catch (ResolvableError) { }
        }
        const intersectedFeatures = this.features.filter(feature => {
            return intersectedState[feature.key] !== undefined;
        });
        const otherLevelChoiceIds = new Set(otherLevel.choices.map(choice => choice.path));
        const intersectedChoices = this.choices.filter(choice => {
            return !otherLevelChoiceIds.has(choice.path);
        });
        return new CharacterAtLevel(this.level, this.character, intersectedFeatures, intersectedState, intersectedChoices);
    }
    without(key) {
        var _a;
        const modifiedState = { ...this.state };
        const dataContext = formula_js_1.DataContext.of(modifiedState);
        const resolved = dataContext.resolve(key);
        const numberValueOfKey = (_a = resolved === null || resolved === void 0 ? void 0 : resolved.asNumber()) !== null && _a !== void 0 ? _a : 0;
        if (numberValueOfKey === 0 || numberValueOfKey === 1) {
            dataContext.remove(key);
        }
        else {
            dataContext.set(key, numberValueOfKey - 1);
        }
        return new CharacterAtLevel(this.level, this.character, this.features, modifiedState, this.choices);
    }
    withoutChoice(path) {
        return this.character.atLevel(this.level, path);
    }
}
exports.default = CharacterAtLevel;
