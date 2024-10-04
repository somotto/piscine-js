const round = (num) => {
    let neg = num < 0;
    if (neg) num = -num;

    let count = 0;
    while (!(num < 1 && num > -1)) {
        num -= 1;
        count++;
    }

    return neg ? (num < 0.5 ? -count : -count - 1) : (num < 0.5 ? count : count + 1);
};

const floor = (num) => {
    let neg = num < 0;
    if (neg) num = -num;

    let count = 0;
    while (!(num < 1 && num > -1)) {
        num -= 1;
        count++;
    }

    return neg ? -count - 1 : count;
};

const ceil = (num) => {
    if (!num) return 0;
    let neg = num < 0;
    if (neg) num = -num;

    let count = 0;
    while (!(num < 1 && num >= 0)) {
        num -= 1;
        count++;
    }

    return neg ? -count : count + 1;
};

const trunc = (num) => {
    let count = 0;
    if (num > 0xfffffffff) {
        num -= 0xfffffffff;
        count += 0xfffffffff;
    }

    let neg = num < 0;
    if (neg) num = -num;

    while (!(num < 1 && num > -1)) {
        num -= 1;
        count++;
    }

    return neg ? -count : count;
};


// // Usage
// const nums = [3.7, -3.7, 3.1, -3.1];
// console.log(nums.map(round));  // Output: [4, -4, 3, -3]
// console.log(nums.map(floor));  // Output: [3, -4, 3, -4]
// console.log(nums.map(trunc));  // Output: [3, -3, 3, -3]
// console.log(nums.map(ceil));   // Output: [4, -3, 4, -3]