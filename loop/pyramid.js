const pyramid = (character, height) => {
    let result = "";
    let spaces = " ".repeat(character.length);
    for (let i = 1; i <= height; i++) {
        result += spaces.repeat(height - i) + character.repeat(2 * i - 1) + "\n";
    }
    return result.slice(0, -1);
};

// console.log(pyramid("*", 5));