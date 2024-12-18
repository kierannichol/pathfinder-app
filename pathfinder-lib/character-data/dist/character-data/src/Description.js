"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Description {
    static empty() {
        return this.of("");
    }
    static of(text) {
        return new Description(text, {});
    }
    constructor(text, sections) {
        this.text = text;
        this.sections = sections;
    }
}
exports.default = Description;
