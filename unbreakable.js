const split = (str, delimiter) => {
    if (typeof str !== 'string') {
        throw new TypeError('The first argument must be a string');
    }
    if (typeof delimiter !== 'string') {
        throw new TypeError('The second argument must be a string');
    }
    const result = [];
    let currentSegment = '';

    for (let i = 0; i < str.length; i++) {
        if (str.slice(i, i + delimiter.length) === delimiter) {
            result.push(currentSegment);
            currentSegment = '';
            i += delimiter.length - 1; 
        } else {
            currentSegment += str[i];
        }
    }

    result.push(currentSegment);
    return result;
};
const join = (array, separator = ',') => {
    if (!Array.isArray(array)) {
        throw new TypeError('The first argument must be an array');
    }
    if (typeof separator !== 'string') {
        throw new TypeError('The separator must be a string');
    }
    return array.reduce((acc, curr, index) => {
        return index === 0 ? curr : acc + separator + curr;
    }, '');
};

