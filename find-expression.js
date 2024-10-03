// const add4 = '+4';
// const mul2 = '*2';

function findExpression(number, current = 1, sequence = "1") {

  if (current === number) {
    return sequence;
  }

  if (current > number) {
    return undefined;
  }


  const addPath = findExpression(number, current + 4, sequence + " " + add4);
  if (addPath) {
    return addPath;  // If adding 4 leads to a solution, return it.
  }


  const mulPath = findExpression(number, current * 2, sequence + " " + mul2);
  if (mulPath) {
    return mulPath;  
  }

  return undefined;
}


// console.log(findExpression(8)); // Expected Output: "1 *2 *2 +4"
// console.log(findExpression(9)); // Expected Output: "1 *2 +4"
// console.log(findExpression(15)); // Expected Output: "1 *2 +4 +4"
// console.log(findExpression(2));  // Expected Output: undefined