"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureSummary = void 0;
const PrerequisiteValidation_ts_1 = require("./PrerequisiteValidation.ts");
const formula_js_1 = require("@kierannichol/formula-js");
const FormulaTreeFormatter_ts_1 = require("@/utils/logic/FormulaTreeFormatter.ts");
const Id_ts_1 = require("@/utils/Id.ts");
class FeatureSummary {
    constructor(key, name, label, tags, enabledFormula, maxStacks, optionsQuery) {
        this.key = key;
        this.name = name;
        this.label = label;
        this.tags = tags;
        this.enabledFormula = enabledFormula;
        this.maxStacks = maxStacks;
        this.optionsQuery = optionsQuery;
    }
    checkPrerequisites(characterAtLevel, database) {
        var _a, _b;
        const validation = new PrerequisiteValidation_ts_1.PrerequisiteValidation();
        let resolvable = formula_js_1.Formula.parse(this.enabledFormula);
        const notAtMaxStacks = this.maxStacks !== null
            ? ((_b = (_a = characterAtLevel.resolve(this.key)) === null || _a === void 0 ? void 0 : _a.asNumber()) !== null && _b !== void 0 ? _b : 0) < this.maxStacks
            : true;
        if (!notAtMaxStacks) {
            validation.add("Must not already have this feature", false);
        }
        const formatted = new FormulaTreeFormatter_ts_1.default(variable => {
            return database.name(variable);
        }).format(resolvable, characterAtLevel);
        if (formatted) {
            if (formatted.operator === FormulaTreeFormatter_ts_1.TreeNodeOperator.ALL) {
                formatted.mapChildren(child => validation.add(this.resolvedValueText(child), child.asBoolean()));
            }
            else {
                validation.add(formatted.asFormatted(), formatted.asBoolean());
            }
        }
        return validation;
    }
    resolvedValueText(value) {
        if (value instanceof FormulaTreeFormatter_ts_1.FormattedValue) {
            return value.asFormatted();
        }
        if (value instanceof formula_js_1.NamedResolvedValue) {
            return value.asName();
        }
        return value.asText();
    }
    isEnabled(context, database) {
        var _a, _b, _c, _d;
        if (this.optionsQuery !== undefined) {
            return this.options(database)
                .some(option => option.isEnabled(context, database));
        }
        const notAtMaxStacks = this.maxStacks !== null
            ? ((_b = (_a = context.resolve(this.key)) === null || _a === void 0 ? void 0 : _a.asNumber()) !== null && _b !== void 0 ? _b : 0) < this.maxStacks
            : true;
        const resolvedEnableFormula = (_d = (_c = formula_js_1.Formula.parse(this.enabledFormula).resolve(context)) === null || _c === void 0 ? void 0 : _c.asBoolean()) !== null && _d !== void 0 ? _d : true;
        return resolvedEnableFormula && notAtMaxStacks;
    }
    hasOptions() {
        return this.optionsQuery !== undefined;
    }
    options(database) {
        if (!this.optionsQuery) {
            return [];
        }
        return database.query([this.optionsQuery.tag])
            .map(feature => this.createOptionFeatureSummary(feature));
    }
    option(optionKey, database) {
        if (this.optionsQuery === undefined) {
            return undefined;
        }
        const optionFeature = database.query([this.optionsQuery.tag])
            .find(option => Id_ts_1.default.justKey(option.key) === optionKey);
        return optionFeature !== undefined
            ? this.createOptionFeatureSummary(optionFeature)
            : undefined;
    }
    createOptionFeatureSummary(optionFeature) {
        var _a;
        const optionsQuery = this.optionsQuery;
        if (!optionsQuery)
            throw new Error("Feature has no options");
        const optionKey = (_a = Id_ts_1.default.justKey(optionFeature.key)) !== null && _a !== void 0 ? _a : '';
        const feature = new FeatureSummary(optionsQuery.idTemplate.replace(/\{option.key}/g, optionKey), this.name + ": " + optionFeature.name, undefined, this.tags, optionsQuery.prerequisitesTemplate.replace(/\{option.key}/g, optionKey), this.maxStacks, undefined);
        feature.source = this.source;
        return feature;
    }
}
exports.FeatureSummary = FeatureSummary;
