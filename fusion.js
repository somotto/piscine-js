function fusion(obj1, obj2) {
    const result = {};

    const getAllKeys = (o1, o2) => [...new Set([...Object.keys(o1), ...Object.keys(o2)])];

    for (const key of getAllKeys(obj1, obj2)) {

        if (key in obj1 && key in obj2) {

            if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
                result[key] = [...obj1[key], ...obj2[key]];
            }

            else if (typeof obj1[key] === 'string' && typeof obj2[key] === 'string') {
                result[key] = obj1[key] + (obj2[key] ? ' ' + obj2[key] : ' ');
            }
            else if (typeof obj1[key] === 'number' && typeof obj2[key] === 'number') {
                result[key] = obj1[key] + obj2[key];
            }

            else if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object' && !Array.isArray(obj1[key]) && !Array.isArray(obj2[key])) {
                result[key] = fusion(obj1[key], obj2[key]);
            }
            else {
                result[key] = obj2[key];
            }
        }
        else if (key in obj1) {
            result[key] = obj1[key];
        }
        else {
            result[key] = obj2[key];
        }
    }

    return result;
}