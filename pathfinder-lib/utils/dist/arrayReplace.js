export function arrayReplace(array, existing, replacement) {
    return array.map(item => item === existing ? replacement : item);
}
