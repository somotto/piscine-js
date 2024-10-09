function filter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}

function reject(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}

function partition(array, callback) {
    const passed = [];
    const failed = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            passed.push(array[i]);
        } else {
            failed.push(array[i]);
        }
    }
    return [passed, failed];
}