function filterValues(obj, filterFn) {
    return Object.fromEntries(
        Object.entries(obj).filter(([key, value]) => filterFn(value))
    );
}

function mapValues(obj, mapFn) {
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [key, mapFn(value)])
    );
}

function reduceValues(obj, reduceFn, initialValue) {
    return Object.values(obj).reduce(reduceFn, initialValue);
}
