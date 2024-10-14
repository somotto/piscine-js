function filterKeys(obj, callback) {
    return Object.fromEntries(
        Object.entries(obj).filter(([key]) => callback(key))
    );
}

function mapKeys(obj, callback) {
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [callback(key), value])
    );
}

function reduceKeys(obj, callback, initialValue) {
    const keys = Object.keys(obj);

    if (initialValue === undefined && keys.length === 0) {
        throw new Error('Reduce of empty object with no initial value');
    }

    let accumulator = initialValue !== undefined ? initialValue : keys[0];
    const startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < keys.length; i++) {
        accumulator = callback(accumulator, keys[i]);
    }

    return accumulator;
}