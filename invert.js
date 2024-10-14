const invert = (obj) => {
    const invertedObj = {};

    for (const [key, value] of Object.entries(obj)) {
        invertedObj[value] = key;
    }

    return invertedObj;
};