"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemDatabase = void 0;
const Description_ts_1 = require("./Description.ts");
const pfutils_ts_1 = require("@/app/pfutils.ts");
const Id_ts_1 = require("@/utils/Id.ts");
class ItemDatabase {
    constructor(modules) {
        this.modules = modules;
    }
    summaries() {
        return (0, pfutils_ts_1.uniqById)(this.modules.flatMap(module => module.summaries()), item => item.name);
    }
    async load(id) {
        for (let module of this.modules) {
            if (module.item(id)) {
                return await module.load(id);
            }
        }
    }
    summary(id) {
        for (let module of this.modules) {
            const item = module.item(id);
            if (item) {
                return item;
            }
        }
        return undefined;
    }
    options(optionIds = undefined) {
        const all = this.modules.flatMap(module => module.options());
        if (!optionIds) {
            return all;
        }
        return all.filter(option => optionIds.includes(option.id));
    }
    option(optionId) {
        for (let module of this.modules) {
            const option = module.option(optionId);
            if (option) {
                return option;
            }
        }
        return undefined;
    }
    async optionDetails(optionId) {
        for (let module of this.modules) {
            const option = module.option(optionId);
            if (option) {
                return await module.optionDetails(optionId);
            }
        }
        return undefined;
    }
    optionSet(optionSetId) {
        for (let module of this.modules) {
            const optionSet = module.optionSet(optionSetId);
            if (optionSet) {
                return optionSet;
            }
        }
        return undefined;
    }
    toString() {
        return "Pathfinder Item Database";
    }
}
exports.ItemDatabase = ItemDatabase;
class Database {
    constructor(modules) {
        this.modules = modules;
    }
    features() {
        return this.modules.flatMap(module => module.features());
    }
    feature(id) {
        for (let module of this.modules) {
            const found = module.feature(id);
            if (found)
                return found;
        }
        const option = Id_ts_1.default.justOption(id);
        if (option !== undefined) {
            const parentKey = Id_ts_1.default.withoutOption(id);
            const parent = this.feature(parentKey);
            if (!parent)
                return undefined;
            return parent.option(option, this);
        }
        // const optionPart = Id.justOption(id);
        // if (optionPart) {
        //   const parentId = id.substring(0, id.lastIndexOf('#'));
        //   const parentSummary = this.feature(parentId);
        //   if (parentSummary !== undefined) {
        //     const option = parentSummary?.optionsTemplate?.queryOptions(this)
        //     .find(maybe => maybe.id === id);
        //     if (option !== undefined) {
        //       return new FeatureSummary(
        //           option.id,
        //           parentSummary.name + ": " + option.name,
        //           undefined,
        //           [],
        //           undefined,
        //           option.enabledFormula,
        //           parentSummary.maxStacks,
        //           parentSummary
        //       );
        //     }
        //   }
        // }
        return undefined;
    }
    async description(id) {
        var _a, _b;
        if (id === undefined) {
            return Description_ts_1.default.empty();
        }
        return (_b = (_a = (await this.load(id))) === null || _a === void 0 ? void 0 : _a.description) !== null && _b !== void 0 ? _b : Description_ts_1.default.empty();
    }
    async load(id) {
        for (let module of this.modules) {
            if (module.feature(id)) {
                return await module.load(id);
            }
        }
        const option = Id_ts_1.default.justOption(id);
        if (option !== undefined) {
            const parentKey = Id_ts_1.default.withoutOption(id);
            const parent = await this.load(parentKey);
            if (!parent) {
                console.warn("No parent feature found for " + id);
                return undefined;
            }
            return parent.option(option, this);
        }
        return undefined;
    }
    name(id) {
        var _a, _b;
        if (id === undefined) {
            return "";
        }
        return (_b = (_a = this.feature(id)) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : "";
    }
    query(tags, expandOptions = true) {
        return this.modules.flatMap(module => module.query(tags))
            .flatMap(summary => {
            if (!expandOptions || !summary.hasOptions())
                return [summary];
            return summary.options(this);
        });
    }
    toString() {
        return "Pathfinder Database";
    }
}
exports.default = Database;
