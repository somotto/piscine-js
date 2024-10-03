// const add4 = '+4';
// const mul2 = '*2';
const findExpression = (number) => {
    for (let i = 0; i < 100000; i++) {
      let result = 1;
      let sequence = "1";
      while (result <= number) {
        if (result === number) {
          return sequence;
        }
        if (Math.random() < 0.4 + 0.1) {
          result += 4;
          sequence += " + 4"; 
        } else {
          result *= 2;
          sequence += " * 2"; 
        }
      }
    }
    return undefined;
  };

// Example usage:
console.log(findExpression(8)); // Expected Output: "1 *2 *2 +4"
console.log(findExpression(9)); // Expected Output: "1 *2 +4"
console.log(findExpression(15)); // Expected Output: "1 *2 +4 +4"
console.log(findExpression(2));  // Expected Output: undefined