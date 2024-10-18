function race(promises) {
    return new Promise((resolve, reject) => {

        for (let promise of promises) {

            Promise.resolve(promise).then(resolve, reject);
        }
    });
}

async function some(promises, count) {
    if (!Array.isArray(promises) || count <= 0) {
        return [];
    }

    const results = new Array(promises.length);
    let settledCount = 0;
    let maxCount = Math.min(promises.length, count);


    promises.forEach((promise, index) => {

        Promise.resolve(promise).then((value) => {
            results[index] = value;
            settledCount++;

            if (settledCount === maxCount) {
                results.length = maxCount;
                return results;
            }
        }).catch(() => {
            results[index] = undefined;
            settledCount++;

            if (settledCount === maxCount) {
                results.length = maxCount;
                return results;
            }
        });
    });

    return new Promise((resolve) => {
        const checkInterval = setInterval(() => {
            if (settledCount >= promises.length) {
                clearInterval(checkInterval);
                resolve(results.slice(0, maxCount));
            }
        }, 0);
    });
}