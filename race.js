function race(promises) {
    return new Promise((resolve, reject) => {

        for (let promise of promises) {

            Promise.resolve(promise).then(resolve, reject);
        }
    });
}

function some(promises, count) {
    return new Promise((resolve) => {

        if (!Array.isArray(promises) || count <= 0) {
            resolve([]);
            return;
        }

        const results = [];
        let settledCount = 0;
        let totalPromises = promises.length;

        promises.forEach((promise) => {

            Promise.resolve(promise).then((value) => {

                if (results.length < count) {
                    results.push(value);
                }
                settledCount++;

                if (results.length === count) {
                    resolve(results);
                }
            }).catch(() => {
                settledCount++;

                if (results.length === count || settledCount === totalPromises) {
                    resolve(results);
                }
            });
        });

        const checkComplete = setInterval(() => {
            if (settledCount === totalPromises) {
                clearInterval(checkComplete);
                resolve(results);
            }
        }, 0);
    });
}