"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.array = array;
exports.onlyDefined = onlyDefined;
exports.splitArray = splitArray;
function array(t) {
    return t instanceof Array ? t : [t];
}
function onlyDefined(ta) {
    return ta.filter(t => t !== undefined && t !== null);
}
function splitArray(a, leftPredicateFn) {
    const left = [];
    const right = [];
    a.forEach(t => leftPredicateFn(t) ? left.push(t) : right.push(t));
    return [left, right];
}
