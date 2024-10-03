const sums = (num) => {
    const result = [];

    const partition = (n, start, current) => {
        if (n === 0) {
            result.push([...current]); 
            return;
        }

        for (let i = start; i <= n; i++) {
            current.push(i);              
            partition(n - i, i, current); 
            current.pop();                
        }
    };

    partition(num, 1, []);
    return result;
};

// console.log(sums(4)); // Output: [ [ 1, 1, 1, 1 ], [ 1, 1, 2 ], [ 1, 3 ], [ 2, 2 ] ]