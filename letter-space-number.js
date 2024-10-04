const letterSpaceNumber = (str) => {
    return Array.from(str.matchAll(/([a-zA-Z]) (\d)(?![a-zA-Z])/g)).map(match => `${match[1]} ${match[2]}`);
    
}