const flat = (arr, depth = 1) => {
    if (depth < 1) return arr;
    return arr.reduce((acc, val) => {
        if (Array.isArray(val) && depth > 0) {
            return acc.concat(flat(val, depth - 1));
        }
        return acc.concat(val);
    }, []);
};

const nestedArray = [1, [2, [3, 4], 5], 6];
console.log(flat(nestedArray, 1)); // [1, 2, [3, 4], 5, 6]
console.log(flat(nestedArray, 2)); // [1, 2, 3, 4, 5, 6]