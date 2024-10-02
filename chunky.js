const chunk = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };
  
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   console.log(chunk(numbers, 3));
//   // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]