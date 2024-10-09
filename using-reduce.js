const adder = (numbers, initialValue = 0) => {
  return numbers.reduce((sum, num) => sum + num, initialValue);
};
const sumOrMul = (numbers, initialValue) => {
  return numbers.reduce((result, num, index) => {
    if (index === 0 && initialValue === undefined) {
      return num;
    }
    return num % 2 === 0 ? result * num : result + num;
  }, initialValue);
};
const funcExec = (functions, initialValue) => {
  return functions.reduce((result, func) => {
    return func(result);
  }, initialValue);
};