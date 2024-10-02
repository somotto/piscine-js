const split = (str, delimiter) => {
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
    return array.reduce((acc, curr, index) => {
        return index === 0 ? curr : acc + separator + curr;
    }, '');
};

