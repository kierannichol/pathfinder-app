export function array(t) {
    return t instanceof Array ? t : [t];
}
export function onlyDefined(ta) {
    return ta.filter(t => t !== undefined && t !== null);
}
export function splitArray(a, leftPredicateFn) {
    const left = [];
    const right = [];
    a.forEach(t => leftPredicateFn(t) ? left.push(t) : right.push(t));
    return [left, right];
}
