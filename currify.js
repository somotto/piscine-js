function currify(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function (...moreArgs) {
                return curried.apply(this, args.concat(moreArgs));
            }
        }
    };
}

// const mult2 = (el1, el2) => el1 * el2;
// console.log(mult2(2, 2));

// const mult2Curried = currify(mult2);
// console.log(mult2Curried(2)(2)); 