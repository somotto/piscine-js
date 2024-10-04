const letterSpaceNumber = str => {
    return Array.from(str.matchAll(/([a-zA-Z]) (\d)(?=\s|$)/g))
        .map(match => `${match[1]} ${match[2]}`);
};

// console.log(letterSpaceNumber('He is 8 or 9 years old, not 10.'))

//, ['s 8', 'r 9'])
console.log(letterSpaceNumber('example 1, example 20'))
