function flow(funcs) {
    return function (...args) {
        return funcs.reduce((result, func, index) => {
            if (index === 0) {
                return func(...result);
            }
            return func(result);
        }, args);
    };
}

// const square = (nbr) => nbr * nbr;
// const add2Numbers = (nbr1, nbr2) => nbr1 + nbr2;

// const flowedFunctions = flow([add2Numbers, square]);
// console.log(flowedFunctions(2, 3)); 