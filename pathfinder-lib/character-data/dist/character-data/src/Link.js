"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
class Link {
    constructor(key) {
        this.key = key;
    }
    async resolve(parent, context) {
        const feature = await context.feature(this.key);
        context.register(this.key);
        const resolved = await (feature === null || feature === void 0 ? void 0 : feature.resolve(parent, context));
        if (resolved === undefined) {
            throw new Error("Feature not found: " + this.key);
        }
        return resolved;
    }
}
exports.Link = Link;
