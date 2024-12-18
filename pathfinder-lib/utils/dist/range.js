export function range(start, end) {
    return Array.apply(0, Array(end - start + 1))
        .map((_, index) => index + start);
}
