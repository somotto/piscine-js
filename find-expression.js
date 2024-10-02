// const add4 = '+4';
// const mul2 = '*2';

const findExpression = (target) => {
    const find = (current, path) => {
        if (current === target) {
            return path;
        }
        if (current > target) {
            return undefined; // Exceeded the target
        }

        // Try multiplying by 2
        const multiplyResult = find(current * 2, path + mul2);
        if (multiplyResult) {
            return multiplyResult;
        }

        // Try adding 4
        const addResult = find(current + 4, path + add4);
        if (addResult) {
            return addResult;
        }

        return undefined; // No valid path found
    };

    return find(1, '1');
};

// // Example usage:
// console.log(findExpression(8)); // Output: "1 *2 *2 +4"
// console.log(findExpression(9)); // Output: "1 *2 +4"
// // console.log(findExpression(15)); // Output: "1 *2 +4 +4"
// console.log(findExpression(2));  // Output: undefined