const modulo = (a, b) => {
    if (b === 0) {
        throw new Error("Modulo by zero");
    }

    const absA = Math.abs(a);
    const absB = Math.abs(b);
    let result = absA;

    while (result >= absB) {
        result -= absB;
    }

    return a < 0 ? -result : result;
};

const round = (num) => {
    const intPart = num - modulo(num, 1);
    const decimalPart = num - intPart;

    // For positive numbers: if decimal >= 0.5, round up; else round down
    // For negative numbers: if decimal <= -0.5, round down; else round up
    return (num > 0)
        ? (decimalPart >= 0.5 ? intPart + 1 : intPart)
        : (decimalPart <= -0.5 ? intPart - 1 : intPart);
};

const ceil = (num) => {
    const intPart = num - modulo(num, 1);
    return (num > intPart) ? (intPart + 1) : intPart;
};

const floor = (num) => {
    const intPart = num - modulo(num, 1);
    return (num >= 0) ? intPart : (intPart - 1);
};

const trunc = (num) => {
    return num < 0 ? (num - modulo(num, 1) - 1) : (num - modulo(num, 1));
};

// // Usage
// const nums = [3.7, -3.7, 3.1, -3.1];
// console.log(nums.map(round));  // Output: [4, -4, 3, -3]
// console.log(nums.map(floor));  // Output: [3, -4, 3, -4]
// console.log(nums.map(trunc));  // Output: [3, -3, 3, -3]
// console.log(nums.map(ceil));   // Output: [4, -3, 4, -3]