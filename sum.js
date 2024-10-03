function sums(n) {
    const result = [];
    function findPartitions(target, currentPartition, lastNumber) {
      if (target === 0) {
        result.push([...currentPartition]);
        return;
      }
      for (let i = lastNumber; i <= target; i++) {
        currentPartition.push(i);
        findPartitions(target - i, currentPartition, i);
        currentPartition.pop();
      }
    }
    findPartitions(n, [], 1);
    return result.slice(0, -1 );
  }