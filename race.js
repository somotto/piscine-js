function race(promises) {
    return new Promise((resolve, reject) => {

        for (let promise of promises) {

            Promise.resolve(promise).then(resolve, reject);
        }
    });
}

function some(promises, count) {
    return new Promise((resolve) => {

        if (!Array.isArray(promises) || count === 0) {
            return;
        }

        const results = [];
        let settledCount = 0;

        const maxCount = Math.min(promises.length, count);

        promises.forEach((promise) => {
            Promise.resolve(promise).then((value) => {
                results.push(value);
                settledCount++;

                if (settledCount === maxCount) {
                    resolve(results);
                }
            }).catch(() => {
                settledCount++;
                if (settledCount === maxCount) {
                    resolve(results);
                }
            });
        });

        setTimeout(() => {
            if (settledCount < maxCount) {
                resolve(results);
            }
        }, 0);
    });
}