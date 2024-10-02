const reverse = (input) => {
    if (typeof input === 'string') {
        let reversedArray = [];
        for (let i = input.length - 1; i >= 0; i--) {
            reversedArray.push(input[i]);
        }
        return reversedArray.join('');
    } else if (Array.isArray(input)) {
        let reversedArray = [];
        for (let i = input.length - 1; i >= 0; i--) {
            reversedArray.push(input[i]);
        }
        return reversedArray;
    } else {
        return undefined;
    }
}