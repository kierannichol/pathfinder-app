"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeDescription = decodeDescription;
exports.decodeFeatureSummary = decodeFeatureSummary;
exports.decodeFeature = decodeFeature;
exports.decodeItemSummary = decodeItemSummary;
exports.decodeItem = decodeItem;
exports.decodeItemOptionSummary = decodeItemOptionSummary;
exports.decodeItemOption = decodeItemOption;
exports.decodeItemOptionGroup = decodeItemOptionGroup;
exports.decodeItemOptionSet = decodeItemOptionSet;
exports.decodeCharacterTemplate = decodeCharacterTemplate;
exports.decodeCharacterLevelTemplate = decodeCharacterLevelTemplate;
const Effect_ts_1 = require("./Effect.ts");
const compiled_1 = require("@/compiled");
const Description_ts_1 = require("./Description.ts");
const Link_ts_1 = require("./Link.ts");
const Choice_ts_1 = require("./Choice.ts");
const Stack_ts_1 = require("./Stack.ts");
const FeatureModification_ts_1 = require("./FeatureModification.ts");
const FeatureSummary_ts_1 = require("./FeatureSummary.ts");
const Feature_ts_1 = require("./Feature.ts");
const Stacks_ts_1 = require("./Stacks.ts");
const CharacterTemplate_ts_1 = require("./CharacterTemplate.ts");
const Item_ts_1 = require("./Item.ts");
const ItemSummary_ts_1 = require("./ItemSummary.ts");
const ItemOption_ts_1 = require("./ItemOption.ts");
const ItemOptionSet_ts_1 = require("./ItemOptionSet.ts");
const ItemOptionGroup_ts_1 = require("./ItemOptionGroup.ts");
const FeatureOptionsQuery_ts_1 = require("./FeatureOptionsQuery.ts");
var StacksDbo = compiled_1.data.StacksDbo;
var StackDbo = compiled_1.data.StackDbo;
var FeatureSelectChoiceSortByDbo = compiled_1.data.FeatureSelectChoiceSortByDbo;
var RepeatingChoiceTypeDbo = compiled_1.data.RepeatingChoiceTypeDbo;
function decodeDescription(dbo) {
    var _a, _b;
    return new Description_ts_1.default((_a = dbo === null || dbo === void 0 ? void 0 : dbo.text) !== null && _a !== void 0 ? _a : "", (_b = dbo === null || dbo === void 0 ? void 0 : dbo.sections) !== null && _b !== void 0 ? _b : {});
}
function decodeFeatureOptionsQuery(dbo) {
    if (!dbo || !dbo.select)
        return undefined;
    return new FeatureOptionsQuery_ts_1.FeatureOptionsQuery(dbo.select.optionTag, dbo.select.idTemplate, dbo.select.prerequisitesTemplate);
}
function decodeFeatureSummary(dbo) {
    var _a, _b;
    return new FeatureSummary_ts_1.FeatureSummary(dbo.id, dbo.name, (_a = dbo.label) !== null && _a !== void 0 ? _a : undefined, dbo.tags, 
    // decodeFeatureOptionsTemplate(dbo.options),
    dbo.enabledFormula, (_b = dbo.maxStacks) !== null && _b !== void 0 ? _b : null, decodeFeatureOptionsQuery(dbo.options));
}
function decodeFeature(dbo) {
    var _a, _b, _c, _d, _e, _f, _g;
    return new Feature_ts_1.Feature(dbo.id, dbo.name, (_a = dbo.label) !== null && _a !== void 0 ? _a : undefined, dbo.tags, 
    // decodeFeatureOptionsTemplate(dbo.options),
    dbo.enabledFormula, (_b = dbo.maxStacks) !== null && _b !== void 0 ? _b : null, decodeFeatureOptionsQuery(dbo.options), new Description_ts_1.default((_d = (_c = dbo.description) === null || _c === void 0 ? void 0 : _c.text) !== null && _d !== void 0 ? _d : "", (_f = (_e = dbo.description) === null || _e === void 0 ? void 0 : _e.sections) !== null && _f !== void 0 ? _f : {}), [
        decodeStacks(dbo.id, (_g = dbo.stacks) !== null && _g !== void 0 ? _g : new StacksDbo()),
        ...dbo.conditionalStacks.map(csd => decodeConditionStack(dbo.id, csd))
    ]);
}
function decodeItemSummary(dbo, sourceId) {
    return new ItemSummary_ts_1.ItemSummary(dbo, sourceId);
    // return new ItemSummary(dbo.id,
    //     sourceId,
    //     dbo.name,
    //     dbo.cost,
    //     dbo.weight,
    //     dbo.tags ?? [],
    //     dbo.optionSets ?? [],
    //     );
}
function decodeItem(dbo, sourceId) {
    var _a, _b;
    return new Item_ts_1.Item(dbo.id, sourceId, dbo.name, dbo.cost, dbo.weight, (_a = dbo.tags) !== null && _a !== void 0 ? _a : [], (_b = dbo.optionSets) !== null && _b !== void 0 ? _b : [], decodeDescription(dbo.description));
}
function decodeItemOptionSummary(dbo) {
    return new ItemOption_ts_1.ItemOptionSummary(dbo.id, dbo.name, dbo.baseNamePrefix, dbo.baseNamePostfix, dbo.pointCost, dbo.currencyCost, dbo.currencyCostByWeight, dbo.tags);
}
function decodeItemOption(dbo) {
    return new ItemOption_ts_1.ItemOption(dbo.id, dbo.name, dbo.baseNamePrefix, dbo.baseNamePostfix, dbo.pointCost, dbo.currencyCost, dbo.currencyCostByWeight, dbo.tags, decodeDescription(dbo.description));
}
function decodeItemOptionGroup(dbo) {
    return new ItemOptionGroup_ts_1.ItemOptionGroup(dbo.name, dbo.optionTags, dbo.hasMaxSelectable, dbo.maxSelectable);
}
function decodeItemOptionSet(dbo) {
    return new ItemOptionSet_ts_1.ItemOptionSet(dbo.id, dbo.hasPoints, dbo.hasMaxPoints, dbo.maxPoints, dbo.pointCurrencyCost, dbo.optionGroups.map(decodeItemOptionGroup));
}
// function decodeFeatureOptionsTemplate(dbo: FeatureOptionsDbo|undefined|null): FeatureOptionsTemplate|undefined {
//   if (!dbo) {
//     return undefined;
//   }
//
//   return new FeatureOptionsTemplate(dbo.optionTag, dbo.idTemplate, dbo.prerequisitesTemplate);
// }
function decodeEffect(dbo) {
    let effect = undefined;
    if (dbo.addAction) {
        effect = new Effect_ts_1.AddEffect(dbo.addAction.targetKey, dbo.addAction.numberDelta);
    }
    else if (dbo.setAction && dbo.setAction.formula !== undefined && dbo.setAction.formula !== null) {
        effect = new Effect_ts_1.SetFormulaEffect(dbo.setAction.targetKey, dbo.setAction.formula);
    }
    else if (dbo.setAction && dbo.setAction.numberValue !== undefined && dbo.setAction.numberValue !== null) {
        effect = new Effect_ts_1.SetNumberEffect(dbo.setAction.targetKey, dbo.setAction.numberValue);
    }
    else {
        throw new Error("Unknown effect: " + JSON.stringify(dbo));
    }
    return effect;
}
function decodeChoice(dbo) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
    switch (dbo.input) {
        case "text": return new Choice_ts_1.TextChoice(dbo.choiceId, dbo.label, dbo.tags, dbo.repeating ? 1 : 0);
        case "featureSelect": return ((_b = (_a = dbo.repeating) === null || _a === void 0 ? void 0 : _a.type) !== null && _b !== void 0 ? _b : "none") === "none"
            ? new Choice_ts_1.SelectChoice(dbo.choiceId, dbo.label, dbo.tags, (_d = (_c = dbo.featureSelect) === null || _c === void 0 ? void 0 : _c.optionTags) !== null && _d !== void 0 ? _d : [], (_f = (_e = dbo.featureSelect) === null || _e === void 0 ? void 0 : _e.featureIds) !== null && _f !== void 0 ? _f : [], (_j = (_h = (_g = dbo.featureSelect) === null || _g === void 0 ? void 0 : _g.categories) === null || _h === void 0 ? void 0 : _h.map(decodeFeatureSelectCategory)) !== null && _j !== void 0 ? _j : [], decodeFeatureSelectSortBy((_k = dbo.featureSelect) === null || _k === void 0 ? void 0 : _k.sortBy), 0)
            : new Choice_ts_1.MultiSelectChoice(dbo.choiceId, dbo.label, dbo.tags, (_m = (_l = dbo.featureSelect) === null || _l === void 0 ? void 0 : _l.optionTags) !== null && _m !== void 0 ? _m : [], (_p = (_o = dbo.featureSelect) === null || _o === void 0 ? void 0 : _o.featureIds) !== null && _p !== void 0 ? _p : [], (_s = (_r = (_q = dbo.featureSelect) === null || _q === void 0 ? void 0 : _q.categories) === null || _r === void 0 ? void 0 : _r.map(decodeFeatureSelectCategory)) !== null && _s !== void 0 ? _s : [], decodeFeatureSelectSortBy((_t = dbo.featureSelect) === null || _t === void 0 ? void 0 : _t.sortBy), 1, decodeRepeatingChoiceType((_u = dbo.repeating) !== null && _u !== void 0 ? _u : new RepeatingChoiceTypeDbo()));
        default: throw new Error("Unknown choice type: " + dbo.input);
    }
}
function decodeRepeatingChoiceType(dbo) {
    var _a, _b, _c, _d;
    switch (dbo.type) {
        case "none":
            return 1;
        case "unlimited":
            return null;
        case "maxLimit":
            return (_b = (_a = dbo.maxLimit) === null || _a === void 0 ? void 0 : _a.limit) !== null && _b !== void 0 ? _b : null;
        case "calculatedLimit":
            return (_d = (_c = dbo.calculatedLimit) === null || _c === void 0 ? void 0 : _c.formula) !== null && _d !== void 0 ? _d : null;
    }
    return null;
}
function decodeFeatureSelectCategory(dbo) {
    return new Choice_ts_1.FeatureSelectCategory(dbo.label, dbo.tag);
}
function decodeFeatureSelectSortBy(dbo) {
    switch (dbo) {
        case FeatureSelectChoiceSortByDbo.FEATURE_SELECT_CHOICE_SORTBY_NAME:
            return "name";
        default:
            return "none";
    }
}
function decodeLink(link) {
    return new Link_ts_1.Link(link);
}
function decodeStack(dbo) {
    return new Stack_ts_1.Stack([
        ...dbo.effects.map(decodeEffect),
        ...dbo.links.map(decodeLink),
        ...dbo.choices.map(decodeChoice),
        ...dbo.featureModifications.map(decodeFeatureModification)
    ]);
}
function decodeStacks(featureId, dbo) {
    var _a, _b, _c;
    switch (dbo.stackable) {
        case "fixedStack": return new Stacks_ts_1.FixedStack(featureId, (_b = (_a = dbo.fixedStack) === null || _a === void 0 ? void 0 : _a.stacks.map(decodeStack)) !== null && _b !== void 0 ? _b : []);
        case "repeatingStack": return new Stacks_ts_1.RepeatingStack(featureId, decodeStack((_c = dbo.repeatingStack) !== null && _c !== void 0 ? _c : new StackDbo()));
        default: return new Stacks_ts_1.RepeatingStack(featureId, Stack_ts_1.Stack.Empty);
    }
}
function decodeConditionStack(featureId, dbo) {
    return new Stacks_ts_1.ConditionalStack(featureId, dbo.conditionFormula, decodeStack(dbo));
}
function decodeFeatureModification(dbo) {
    return new FeatureModification_ts_1.FeatureModification(dbo.targetFeatureId, dbo.stackModifications.map(smDbo => decodeStackModification(dbo.targetFeatureId, smDbo)));
}
function decodeStackModification(targetFeatureId, dbo) {
    return new FeatureModification_ts_1.StackModification(targetFeatureId, dbo.targetStackCount, dbo.linksToAdd.map(linkId => new Link_ts_1.Link(linkId)), dbo.linksToRemove);
}
function decodeCharacterTemplate(dbo) {
    return new CharacterTemplate_ts_1.CharacterTemplate(dbo.levels.map(decodeCharacterLevelTemplate));
}
function decodeCharacterLevelTemplate(dbo) {
    return new CharacterTemplate_ts_1.CharacterLevelTemplate(dbo.levelNumber, [
        ...dbo.effects.map(decodeEffect),
        ...dbo.links.map(decodeLink),
        ...dbo.choices.map(decodeChoice)
    ]);
}
