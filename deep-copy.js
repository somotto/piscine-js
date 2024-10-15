function deepCopy(item) {
    if (typeof item !== 'object' || item === null) {
        return item;
    }

    if (item instanceof Date) {
        return new Date(item.getTime());
    }
    if (item instanceof RegExp) {
        return new RegExp(item.source, item.flags);
    }

    if (Array.isArray(item)) {
        return item.map(element => deepCopy(element));
    }
    if (typeof item === 'function') {
        return item;
    }

    const newObject = {};
    for (let key in item) {
        if (item.hasOwnProperty(key)) {
            newObject[key] = deepCopy(item[key]);
        }
    }

    return newObject;
}