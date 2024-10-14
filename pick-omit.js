function pick(obj, keys) {

    const keysArray = Array.isArray(keys) ? keys : [keys];

    return keysArray.reduce((result, key) => {
        if (obj.hasOwnProperty(key)) {
            result[key] = obj[key];
        }
        return result;
    }, {});
}

function omit(obj, keys) {

    const keysArray = Array.isArray(keys) ? keys : [keys];

    return Object.keys(obj).reduce((result, key) => {
        if (!keysArray.includes(key)) {
            result[key] = obj[key];
        }
        return result;
    }, {});
}