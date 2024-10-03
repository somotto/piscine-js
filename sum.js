const sums = (n) => {
    const result = [];
  
    const findPartitions = (target, currentPartition, lastNumber) => {
      if (target === 0) {
        result.push([...currentPartition]);
        return;
      }
      for (let i = lastNumber; i <= target; i++) {
        currentPartition.push(i);
        findPartitions(target - i, currentPartition, i);
        currentPartition.pop();
      }
    };
  
    findPartitions(n, [], 1);
    return result.slice(0, -1); 
  };
  
  // Example usage:
//   console.log(sums(4)); // Output: [ [ 1, 1, 1, 1 ], [ 1, 1, 2 ], [ 1, 3 ], [ 2, 2 ] ]