const round = (num) => {
    const intPart = num - (num % 1);
    const decimalPart = num - intPart;

    if (num > 0) {
        return decimalPart < 0.5 ? intPart : intPart + 1;
    } else {
        return decimalPart > -0.5 ? intPart : intPart - 1;
    }
};

const ceil = (num) => {
    return (num > 0) ? (num - (num % 1) + (num % 1 > 0 ? 1 : 0))
        : (num - (num % 1));
};

const floor = (num) => {
    return (num > 0) ? (num - (num % 1))
        : (num - (num % 1) - (num % 1 < 0 ? 1 : 0));
};

const trunc = (num) => {
    return (num > 0) ? (num - (num % 1))
        : (num - (num % 1));
};

// // Usage
// const nums = [3.7, -3.7, 3.1, -3.1];
// console.log(nums.map(round));  // [4, -4, 3, -3]
// console.log(nums.map(floor));  // [3, -4, 3, -4]
// console.log(nums.map(trunc));  // [3, -3, 3, -3]
// console.log(nums.map(ceil));   // [4, -3, 4, -3]