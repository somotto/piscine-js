function deepCopy(item) {
    if (typeof item !== 'object' || item === null) {
        return item;
    }

    if (Array.isArray(item)) {
        return item.map(element => deepCopy(element));
    }

    const newObject = {};
    for (let key in item) {
        if (item.hasOwnProperty(key)) {
            newObject[key] = deepCopy(item[key]);
        }
    }

    return newObject;
}