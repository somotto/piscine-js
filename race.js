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
            resolve(undefined);
            return;
        }

        const results = [];
        let settledCount = 0;

        promises.forEach((promise) => {

            Promise.resolve(promise).then((value) => {
                results.push(value);
                settledCount++;

                if (settledCount === count) {
                    resolve(results);
                }
            }).catch(() => {
                settledCount++;
                if (settledCount === count) {
                    resolve(results);
                }
            });
        });

        setTimeout(() => {
            if (settledCount < count) {
                resolve(results.length > 0 ? results : undefined);
            }
        }, 0);
    });
}
