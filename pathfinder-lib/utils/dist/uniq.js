export function uniq(t) {
    return Array.from(new Set(t));
}
export function uniqById(t, idFn, whichFn = (a, b) => b) {
    const itemById = {};
    t.forEach(item => {
        const id = idFn(item);
        const existing = itemById[id];
        itemById[id] = (existing === undefined ? item : whichFn(existing, item));
    });
    return Object.values(itemById);
}
export function uniqBy(t, byFn) {
    const covered = {};
    return t.filter(value => {
        const by = byFn(value);
        if (by in covered) {
            return false;
        }
        covered[by] = true;
        return true;
    });
}
