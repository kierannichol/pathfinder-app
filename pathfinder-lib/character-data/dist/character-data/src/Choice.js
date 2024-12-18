"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureSelectCategory = exports.ChoiceCategory = exports.ResolvedTextChoice = exports.TextChoice = exports.ResolvedSelectChoice = exports.SelectChoice = exports.ResolvedMultiSelectChoice = exports.MultiSelectChoice = exports.ResolvedChoice = exports.ChoiceInputType = void 0;
const Path_ts_1 = require("@/utils/Path.ts");
const pfutils_ts_1 = require("@/app/pfutils.ts");
const Feature_ts_1 = require("./Feature.ts");
const formula_js_1 = require("@kierannichol/formula-js");
var ChoiceInputType;
(function (ChoiceInputType) {
    ChoiceInputType[ChoiceInputType["Text"] = 0] = "Text";
    ChoiceInputType[ChoiceInputType["Select"] = 1] = "Select";
})(ChoiceInputType || (exports.ChoiceInputType = ChoiceInputType = {}));
class ResolvedChoice {
    get level() {
        return this.parent.level;
    }
}
exports.ResolvedChoice = ResolvedChoice;
class MultiSelectChoice {
    constructor(key, label, tags, optionTags, featureIds, categories, sortBy, repeatingIndex, repeatingLimit) {
        this.key = key;
        this.label = label;
        this.tags = tags;
        this.optionTags = optionTags;
        this.featureIds = featureIds;
        this.categories = categories;
        this.sortBy = sortBy;
        this.repeatingIndex = repeatingIndex;
        this.repeatingLimit = repeatingLimit;
    }
    async resolve(parent, context) {
        var _a;
        const path = Path_ts_1.Path.combine(parent.path, this.key);
        const ref = new Feature_ts_1.FeatureRef(path, 'choice', this.label, parent.level, parent);
        let selectedKeys = (0, pfutils_ts_1.array)(context.selection(path));
        let selected = ((_a = selectedKeys === null || selectedKeys === void 0 ? void 0 : selectedKeys.length) !== null && _a !== void 0 ? _a : []) > 0
            ? (await Promise.all(selectedKeys.map(selectedKey => context.feature(selectedKey))))
                .filter(s => s !== undefined)
            : [];
        selectedKeys.forEach(selectedKey => context.register(selectedKey));
        return new ResolvedMultiSelectChoice(parent, path, this.key, this.label, this.tags, this.optionTags, this.featureIds, this.categories, this.sortBy, this.repeatingIndex, this.repeatingLimit, await Promise.all(selected.map(s => s.resolve(ref, context))));
    }
}
exports.MultiSelectChoice = MultiSelectChoice;
class BaseResolvedSelectChoice extends ResolvedChoice {
    constructor() {
        super(...arguments);
        this.inputType = ChoiceInputType.Select;
    }
    options(database, query = undefined, filterTag = undefined) {
        let tags = [...this.optionTags];
        if (filterTag && filterTag !== '') {
            tags = tags.map(tag => tag + '+' + filterTag);
        }
        return [
            ...database.query(tags, false),
            ...this.featureIds.flatMap(featureId => {
                const option = database.feature(featureId);
                return option !== undefined ? [option] : [];
            })
        ]
            .filter(option => !query || option.name.toLowerCase().includes(query.toLowerCase()))
            .sort((a, b) => {
            switch (this.sortBy) {
                case "name":
                    return a.name.localeCompare(b.name);
                default:
                    return 0;
            }
        });
    }
}
class ResolvedMultiSelectChoice extends BaseResolvedSelectChoice {
    constructor(parent, path, key, label, tags, optionTags, featureIds, categories, sortBy, repeatingIndex, repeatingLimit, selected) {
        super();
        this.parent = parent;
        this.path = path;
        this.key = key;
        this.label = label;
        this.tags = tags;
        this.optionTags = optionTags;
        this.featureIds = featureIds;
        this.categories = categories;
        this.sortBy = sortBy;
        this.repeatingIndex = repeatingIndex;
        this.repeatingLimit = repeatingLimit;
        this.selected = selected;
        this.inputType = ChoiceInputType.Select;
        this.isRepeating = true;
    }
    maxLimit(context) {
        var _a, _b;
        if (typeof this.repeatingLimit === 'string') {
            return (_b = (_a = formula_js_1.Formula.parse(this.repeatingLimit).resolve(context)) === null || _a === void 0 ? void 0 : _a.asNumber()) !== null && _b !== void 0 ? _b : null;
        }
        return this.repeatingLimit;
    }
    applyTo(state) {
        if (state.withoutChoicePath === this.path) {
            return;
        }
        return this.selected.forEach(s => s.applyTo(state));
    }
    get children() {
        return this.selected;
    }
}
exports.ResolvedMultiSelectChoice = ResolvedMultiSelectChoice;
class SelectChoice {
    constructor(key, label, tags, optionTags, featureIds, categories, sortBy, repeatingIndex) {
        this.key = key;
        this.label = label;
        this.tags = tags;
        this.optionTags = optionTags;
        this.featureIds = featureIds;
        this.categories = categories;
        this.sortBy = sortBy;
        this.repeatingIndex = repeatingIndex;
    }
    async resolve(parent, context) {
        const path = this.repeatingIndex === 0
            ? Path_ts_1.Path.combine(parent.path, this.key)
            : Path_ts_1.Path.combine(parent.path, this.key, this.repeatingIndex);
        const ref = new Feature_ts_1.FeatureRef(path, 'choice', this.label, parent.level, parent);
        let selectedKey = context.selection(path);
        let selected = selectedKey !== undefined
            ? await context.feature(selectedKey)
            : undefined;
        if (this.repeatingIndex > 0 && selected === undefined) {
            const nextPath = Path_ts_1.Path.combine(parent.path, this.key, this.repeatingIndex + 1);
            context.swapSelections(path, nextPath);
            selectedKey = context.selection(path);
            selected = selectedKey !== undefined
                ? await context.feature(selectedKey)
                : undefined;
        }
        context.register(selectedKey);
        let repeatedChoice = undefined;
        if (this.repeatingIndex > 0 && selected !== undefined) {
            repeatedChoice = await new SelectChoice(this.key, this.label, this.tags, this.optionTags, this.featureIds, this.categories, this.sortBy, this.repeatingIndex + 1).resolve(ref, context);
        }
        const resolved = await (selected === null || selected === void 0 ? void 0 : selected.resolve(ref, context));
        return new ResolvedSelectChoice(parent, path, this.key, this.label, this.tags, this.optionTags, this.featureIds, this.categories, this.sortBy, this.repeatingIndex, resolved, repeatedChoice);
    }
}
exports.SelectChoice = SelectChoice;
class ResolvedSelectChoice extends BaseResolvedSelectChoice {
    constructor(parent, path, key, label, tags, optionTags, featureIds, categories, sortBy, repeatingIndex, selected, repeatedChoice) {
        super();
        this.parent = parent;
        this.path = path;
        this.key = key;
        this.label = label;
        this.tags = tags;
        this.optionTags = optionTags;
        this.featureIds = featureIds;
        this.categories = categories;
        this.sortBy = sortBy;
        this.repeatingIndex = repeatingIndex;
        this.selected = selected;
        this.repeatedChoice = repeatedChoice;
        this.inputType = ChoiceInputType.Select;
        this.isRepeating = false;
    }
    maxLimit() {
        return 1;
    }
    applyTo(state) {
        var _a;
        if (state.withoutChoicePath === this.path) {
            return;
        }
        return (_a = this.selected) === null || _a === void 0 ? void 0 : _a.applyTo(state);
    }
    get children() {
        return this.selected !== undefined
            ? (this.repeatedChoice !== undefined
                ? [this.selected, this.repeatedChoice] : [this.selected])
            : [];
    }
}
exports.ResolvedSelectChoice = ResolvedSelectChoice;
class TextChoice {
    constructor(key, label, tags, repeatingIndex) {
        this.key = key;
        this.label = label;
        this.tags = tags;
        this.repeatingIndex = repeatingIndex;
    }
    async resolve(parent, context) {
        const path = Path_ts_1.Path.combine(parent.path, this.key);
        const selectedValue = context.selection(path);
        return new ResolvedTextChoice(parent, path, this.key, this.label, this.tags, this.repeatingIndex, selectedValue);
    }
}
exports.TextChoice = TextChoice;
class ResolvedTextChoice extends ResolvedChoice {
    constructor(parent, path, key, label, tags, repeatingIndex, value) {
        super();
        this.parent = parent;
        this.path = path;
        this.key = key;
        this.label = label;
        this.tags = tags;
        this.repeatingIndex = repeatingIndex;
        this.value = value;
        this.inputType = ChoiceInputType.Text;
        this.children = [];
    }
    applyTo(state) {
        if (this.value !== undefined) {
            state.set(this.path, this.value);
        }
    }
}
exports.ResolvedTextChoice = ResolvedTextChoice;
class ChoiceCategory {
    constructor() {
        this.tag = "";
    }
}
exports.ChoiceCategory = ChoiceCategory;
class FeatureSelectCategory {
    constructor(label, tag) {
        this.label = label;
        this.tag = tag;
    }
}
exports.FeatureSelectCategory = FeatureSelectCategory;
