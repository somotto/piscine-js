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

function reduceValues(obj, callback, initialValue) {
    const values = Object.values(obj);
    
    if (initialValue === undefined) {
        if (values.length === 0) {
            throw new TypeError('Reduce of empty object with no initial value');
        }
        return values.slice(1).reduce(callback, values[0]);
    }
    
    return values.reduce(callback, initialValue);
}
