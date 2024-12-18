"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemOptionGroup = void 0;
const tags_ts_1 = require("@/utils/tags.ts");
class ItemOptionGroup {
    constructor(name, optionTags, hasMaxSelectable, maxSelectable) {
        this.name = name;
        this.optionTags = optionTags;
        this.hasMaxSelectable = hasMaxSelectable;
        this.maxSelectable = maxSelectable;
    }
    hasOption(option) {
        return (0, tags_ts_1.matchTags)(option.tags, this.optionTags);
    }
}
exports.ItemOptionGroup = ItemOptionGroup;
