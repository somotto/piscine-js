const split = (separator, str) => {
    if (typeof separator !== 'string' || typeof str !== 'string') {
        throw new TypeError('Both arguments must be strings');
    }

    if (separator === '') {
        return str.split('');
    }

    const result = [];
    let currentIndex = 0;
    let nextIndex;

    while ((nextIndex = str.indexOf(separator, currentIndex)) !== -1) {
        result.push(str.slice(currentIndex, nextIndex));
        currentIndex = nextIndex + separator.length;
    }
    result.push(str.slice(currentIndex));
    return result;
};
const join = (array, separator) => {
    if (!Array.isArray(array) || typeof separator !== 'string') {
        throw new TypeError('First argument must be an array and second argument must be a string');
    }
    return array.reduce((acc, curr, index) => {
        return acc + (index > 0 ? separator : '') + curr;
    }, '');
};

