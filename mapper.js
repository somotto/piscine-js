function map(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
};
function flatMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        const mappedValue = callback(array[i], i, array);
        if (Array.isArray(mappedValue)) {
            result.push(...mappedValue);
        } else {
            result.push(mappedValue);
        }
    }
    return result;
}